'use strict';

/* test
 ------------
 Run karma server for TDD or for test/coverage
 */

// Help
import usage from '../util/usage';
import gulp from 'gulp';
import {Server as Karma} from 'karma';
import {colors as Colors} from 'gulp-util';
import args from '../util/handleArgs';
import resolveIP from '../util/resolveIP';

usage.add('test:unit', 'Run unit tests', {
	'once': 'Force singleRun (for CI & pre-push)',
	'coverage': 'Create code coverage reports',
	'sauce': 'Use SauceLabs',
	'config = <filename>': 'config file name (without .js extension). Default is production',
	'proxy = <ip:port>': 'proxy'
});

const
	options = args({
		'boolean': ['once', 'coverage', 'sauce'],
		'string': ['proxy', 'config'],
		'default': {
			once: false,
			coverage: false,
			sauce: false,
			config: 'production'
		}
	}),

	travisCI = process.env.CI === true && process.env.TRAVIS === true,

	proxy = options.proxy ? {
		proxyType: 'manual',
		httpProxy: options.proxy,
		sslProxy: options.proxy
	} : null,

	Chrome_auto_allow_gum = {
		base: 'Chrome',
		flags: [
			// see: http://peter.sh/experiments/chromium-command-line-switches/
			// Use fake device for Media Stream to replace actual camera and microphone.
			//'--use-fake-device-for-media-stream',
			// Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC).
			// Works with --use-fake-device-for-media-stream.
			'--use-fake-ui-for-media-stream'
		]
	},

	Firefox_auto_allow_gum = {
		base: 'Firefox',
		prefs: {
			'media.navigator.permission.disabled': true
		}
	},

	sauceLabsBrowsers = {
		sl_chrome_beta: {
			base: 'SauceLabs',
			browserName: 'chrome',
			platform: 'Windows 7',
			version: 'beta',
			proxy
		},
		sl_chrome_dev: {
			base: 'SauceLabs',
			browserName: 'chrome',
			platform: 'Windows 10',
			version: 'dev',
			proxy
		},
		sl_chrome_35: {
			base: 'SauceLabs',
			browserName: 'chrome',
			platform: 'OS X 10.11',
			version: '35',
			proxy
		},
		sl_firefox_beta: {
			base: 'SauceLabs',
			browserName: 'firefox',
			platform: 'Windows 10',
			version: 'beta',
			proxy
		},
		sl_firefox_dev: {
			base: 'SauceLabs',
			browserName: 'firefox',
			platform: 'OS X 10.11',
			version: 'dev',
			proxy
		},
		sl_firefox_30: {
			base: 'SauceLabs',
			browserName: 'firefox',
			version: '30',
			proxy
		}
	},

	travisBrowsers = {Firefox_auto_allow_gum},

	localBrowsers = {Chrome_auto_allow_gum, Firefox_auto_allow_gum},

	customLaunchers = options.sauce ? sauceLabsBrowsers : (travisCI ? travisBrowsers : localBrowsers),

	browsers = Object.keys(customLaunchers),

	karmaStart = (karmaConfFile, files, done) => {

		if(options.sauce && (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY)) {
			console.error(
				Colors.red.bold('Missing SauceLabs credentials:'),
				Colors.red('userName & accessKey must be defined as env variables (SAUCE_USERNAME & SAUCE_ACCESS_KEY)')
			);
			return 0;
		}

		(new Karma(
			{
				hostname: resolveIP(),
				singleRun: options.once,
				autoWatch: !options.once,
				customLaunchers,
				browsers,
				configFile: `${__dirname}/../karma/${karmaConfFile}`,
				files
			}, done
		)).start();

	};

/**
 * Unit test with Webpack.
 */
gulp.task('test:unit', (done) => {
	console.info(`TravisCI: ${travisCI}`);
	console.info(`SauceLabs: ${options.sauce}`);
	if(!travisCI || options.sauce) {
		karmaStart(
			'karma-unit.conf.js',
			[
				'node_modules/webcom/webcom.js',
				`test/config/${options.config}.js`,
				'test/unit/**/*.js'
			],
			(exitCode) => {
				done();
				process.exit(exitCode);
			}
		);
	}
});
'use strict';

/* test
 ------------
 Run karma server for TDD or for test/coverage
 */

// Help
import usage from '../util/usage';
import gulp from 'gulp';
import {Server as Karma} from 'karma';
import args from '../util/handleArgs';

usage.add('test:unit', 'Run unit tests', {
	'once': 'Force singleRun',
	'coverage': 'Create code coverage reports',
	'sauce': 'Use SauceLabs',
	'config = <filename>': 'config file name (without .js extension). Default is production',
	'proxy = <ip:port>': 'proxy'
});

const options = args({
		'boolean': ['once', 'coverage', 'sauce'],
		'string': ['proxy', 'config'],
		'default': {
			once: false,
			coverage: false,
			sauce: false,
			config: 'production'
		}
	}),

	proxy = options.proxy ? {
		proxyType: 'manual',
		httpProxy: options.proxy,
		sslProxy: options.proxy
	} : null,

	customLaunchers = options.sauce ? {
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
	} : null,

	browsers = customLaunchers ? Object.keys(customLaunchers) : ['Chrome', 'Firefox'],

	karmaStart = (karmaConfFile, files, done) => {
		if(options.sauce && (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY)) {
			const colors = require('gulp-util').colors;
			console.error(
				colors.red.bold('Missing SauceLabs credentials:'),
				colors.red('userName & accessKey must be defined as env variables (SAUCE_USERNAME & SAUCE_ACCESS_KEY)')
			);
			return 0;
		}

		(new Karma(
			{
				hostname: require('../util/resolveIP')(),
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
 * Unit test with Webpack. Call with --ci for Jenkins
 */
gulp.task('test:unit', (done) => {
	karmaStart(
		'karma-unit.conf.js',
		[
			'node_modules/webcom/webcom.js',
			`test/config/${options.config}.js`,
			'test/unit/**/*.js'
		], (exitCode) => {
			done();
			process.exit(exitCode);
		}
	);
});
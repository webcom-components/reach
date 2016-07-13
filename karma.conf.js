/*eslint max-len: [2, 120] */

const
	webpack = require('./webpack.config.js'),
	minimist = require('minimist'),
	child_process = require('child_process'),
	omit = require('lodash/omit'),
	args = minimist(process.argv.slice(2), {
		boolean: ['single-run', 'auto-watch', 'coverage', 'chrome', 'firefox', 'none']
	}),
	onlyChrome = args['chrome'] && !args['firefox'],
	onlyFirefox = args['firefox'] && !args['chrome'],
	noBrowser = args['none'],
	coverage = args['coverage'],
	singleRun = args['single-run'],
	testSuite = 'unit',
	sauceLabs = process.env.SAUCE_USERNAME != null && process.env.SAUCE_ACCESS_KEY != null,
	branchName = (() => {
		if(process.env.TRAVIS === 'true') {
			if(process.env.TRAVIS_PULL_REQUEST !== 'false') {
				return `PR #${process.env.TRAVIS_PULL_REQUEST}`;
			}
			return process.env.TRAVIS_BRANCH;
		}
		return child_process.execSync('git rev-parse --abbrev-ref HEAD').toString();
	})(),

	sauceLabsBrowser = d => {
		d.base = 'SauceLabs';
		if(process.env.PROXY) {
			d.proxy = {
				proxyType: 'manual',
				httpProxy: process.env.PROXY,
				sslProxy: process.env.PROXY
			};
		}
		return d;
	},

	// Chrome flags
	flags = [
		// see: http://peter.sh/experiments/chromium-command-line-switches/
		// Use fake device for Media Stream to replace actual camera and microphone.
		//'--use-fake-device-for-media-stream',
		// Bypass the media stream infobar by selecting the default device for media streams (e.g. WebRTC).
		// Works with --use-fake-device-for-media-stream.
		'--use-fake-ui-for-media-stream'
	],
	// firefox prefs
	prefs = {
		'media.navigator.permission.disabled': true
	},

	sauceLabsBrowsers = {
		sl_edge: sauceLabsBrowser({
			browserName: 'MicrosoftEdge',
			platform: 'Windows 10',
			version: '13'
		}),
		sl_chrome_beta: sauceLabsBrowser({
			browserName: 'chrome',
			platform: 'Windows 7',
			version: 'beta',
			flags
		}),
		sl_chrome_dev: sauceLabsBrowser({
			browserName: 'chrome',
			platform: 'Windows 10',
			version: 'dev',
			flags
		}),
		sl_chrome_35: sauceLabsBrowser({
			browserName: 'chrome',
			platform: 'OS X 10.11',
			version: '35',
			flags
		}),
		sl_firefox_beta: sauceLabsBrowser({
			browserName: 'firefox',
			platform: 'Windows 10',
			version: 'beta',
			prefs
		}),
		sl_firefox_43: sauceLabsBrowser({
			browserName: 'firefox',
			platform: 'OS X 10.11',
			version: '43',
			prefs
		}),
		sl_firefox_30: sauceLabsBrowser({
			browserName: 'firefox',
			version: '31',
			prefs
		}),
		sl_android_lollipop: sauceLabsBrowser({
			browserName: 'android',
			platform: 'Linux',
			version: '5.1',
			deviceName: 'Android Emulator',
			deviceOrientation: 'portrait'
		})
	},

	localBrowsers = noBrowser ? [] : omit({
		Chrome_auto_allow_gum: {
			base: 'Chrome',
			flags
		},
		Firefox_auto_allow_gum: {
			base: 'Firefox',
			prefs
		}
	}, onlyChrome ? ['Firefox_auto_allow_gum'] : (onlyFirefox ? ['Chrome_auto_allow_gum'] : [])),
	customLaunchers = sauceLabs ? sauceLabsBrowsers : localBrowsers,
	browsers = Object.keys(customLaunchers);

const account = require('./credentials');
if(!(account && (account.WEBCOM_TOKEN || (account.WEBCOM_EMAIL && account.WEBCOM_PASSWORD)))) {
	console.error('Missing Webcom credentials.');
	console.error('\t- Use \'npm run jwt\' to generate a token and export it as a env variable named \'WEBCOM_TOKEN\'');
	console.error('\t- Use a .account.json file to declare your login/password/namespace');
	process.exit(1);
}

console.info(
	`\n\tTest Platform: ${account.WEBCOM_PROTOCOL}://${account.WEBCOM_DOMAIN}`.replace(/'/g, ''),
	`\n\tTravis: ${process.env.TRAVIS === 'true'}`,
	`\n\tPullRequest: ${process.env.TRAVIS_PULL_REQUEST}`,
	`\n\tTravis Branch: ${process.env.TRAVIS_BRANCH}`,
	`\n\tBranch: ${branchName}`
);

module.exports = function(config) {
	config.set({
		basePath: __dirname,
		browserNoActivityTimeout: 120000,
		captureTimeout: 120000,
		client: {
			captureConsole: false
		},
		colors: true,
		frameworks: ['jasmine'],
		concurrency: 1,//process.env.TRAVIS === 'true' ? 1 : Number.POSITIVE_INFINITY,
		customLaunchers,
		browsers,
		reporters: (() => {
			const list = ['progress', 'dots', 'kjhtml'];
			if(coverage) {
				list.push('coverage');
			}
			if (sauceLabs) {
				list.push('saucelabs');
			}
			return list;
		})(),
		files: [
			'node_modules/webcom/webcom.js',
			'test/config.js',
			`test/suites.${testSuite}.js`,
			'test/main.js',
			{pattern: 'dist/rules.json', included: false}
		],
		preprocessors: {
			'src/**/*.js': ['webpack', 'sourcemap'],
			'test/**/*.js': ['webpack', 'sourcemap']
		},
		webpack: webpack.configure({
			output: false,
			release: false,
			debug: !singleRun && !coverage,
			coverage
		}),
		webpackMiddleware: {
			noInfo: true
		},
		sauceLabs: {
			testName: `[Reach][${branchName}] Unit Tests`,
			connectOptions: {
				proxy: process.env.PROXY,
				vmVersion: 'dev-varnish',
				directDomains: ['*.orange.com']
			}
		},
		coverageReporter: (() => {
			if (coverage) {
				return {
					reporters: [
						{type: 'lcov', subdir: '.', file: 'lcov.info' }
					]
				};
			}
			return undefined;
		})()
	});
};

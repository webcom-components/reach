/*eslint max-len: [2, 120] */

const
	webpack = require('./webpack.config.js'),
	minimist = require('minimist'),
	child_process = require('child_process'),
	args = minimist(process.argv.slice(2), {boolean: ['single-run', 'auto-watch', 'coverage']}),
	coverage = args['coverage'],
	singleRun = args['single-run'],
	testConfig = process.env.CONFIG || 'production',
	sauceLabs = process.env.SAUCE_USERNAME != null && process.env.SAUCE_ACCESS_KEY != null,
	branchName = (() => {
		if(process.env.TRAVIS === true) {
			if(process.env.TRAVIS_PULL_REQUEST) {
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

	sauceLabsBrowsers = {
		sl_chrome_beta: sauceLabsBrowser({
			browserName: 'chrome',
			platform: 'Windows 7',
			version: 'beta'
		}),
		sl_chrome_dev: sauceLabsBrowser({
			browserName: 'chrome',
			platform: 'Windows 10',
			version: 'dev'
		}),
		sl_chrome_35: sauceLabsBrowser({
			browserName: 'chrome',
			platform: 'OS X 10.11',
			version: '35'
		}),
		sl_firefox_beta: sauceLabsBrowser({
			browserName: 'firefox',
			platform: 'Windows 10',
			version: 'beta'
		}),
		sl_firefox_dev: sauceLabsBrowser({
			browserName: 'firefox',
			platform: 'OS X 10.11',
			version: 'dev'
		}),
		sl_firefox_30: sauceLabsBrowser({
			browserName: 'firefox',
			version: '30'
		}),
		sl_android_lollipop: sauceLabsBrowser({
			browserName: 'android',
			platform: 'Linux',
			version: '5.1',
			deviceName: 'Android Emulator',
			deviceOrientation: 'portrait'
		})
	},

	localBrowsers = {
		Chrome_auto_allow_gum: {
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
		Firefox_auto_allow_gum: {
			base: 'Firefox',
			prefs: {
				'media.navigator.permission.disabled': true
			}
		}
	},
	customLaunchers = sauceLabs ? sauceLabsBrowsers : localBrowsers,
	browsers = Object.keys(customLaunchers);

module.exports = function(config) {
	config.set({
		basePath: __dirname,
		browserNoActivityTimeout: 120000,
		captureTimeout: 120000,
		colors: true,
		frameworks: ['jasmine'],
		concurrency: process.env.TRAVIS === true ? 1 : 2,
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
			`test/config/${testConfig}.js`,
			'test/unit/**/*.js'
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
						{type: 'lcovonly', subdir: '.', file: 'lcov.info' }
					]
				};
			}
			return undefined;
		})()
	});
};

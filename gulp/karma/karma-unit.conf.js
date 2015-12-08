/* karma-coverage
 ------------
 Run unit test & coverage
 */
'use strict';

/* eslint require-jsdoc: 0 */

import args from '../util/handleArgs';
import gulpConfig from '../config';

const
	_basePath = '../..',
	options = args({
		'boolean': ['once', 'coverage', 'sauce'],
		'string': ['proxy', 'config'],
		'default': {
			once: false,
			coverage: false,
			sauce: false,
			config: 'production'
		}
	});

module.exports = (config) => {
	config.set({
		basePath: _basePath,
		browserNoActivityTimeout: 120000,
		captureTimeout: 120000,
		colors: true,
		frameworks: ['jasmine'],
		concurrency: options.sauce ? 1 : 2,
		reporters: (() => {
			const list = ['progress', 'dots'];
			if (options.coverage) {
				list.push('coverage');
			}
			if (options.sauce) {
				list.push('saucelabs');
			}
			return list;
		})(),
		files: [
			'../../test/unit/**/*.js'
		],
		preprocessors: {
			'src/**/*.js': ['webpack', 'sourcemap'],
			'test/**/*.js': ['webpack', 'sourcemap']
		},
		webpack: gulpConfig.webpack({
			debug: true,
			coverage: options.coverage
		}),
		webpackMiddleware: {
			noInfo: true
		},
		sauceLabs: {
			testName: '[Reach] Unit Tests',
			proxy: options.proxy
		},
		coverageReporter: (() => {
			if (options.coverage) {
				return {
					reporters: [{type: 'lcov'}]
				};
			}
			return undefined;
		})()
	});
};
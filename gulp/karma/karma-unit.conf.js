/* karma-coverage
 ------------
 Run unit test & coverage
 */
'use strict';

/* eslint require-jsdoc: 0 */

const
	_basePath = '../..',
	babelOptions = require('lodash').clone(require(`${_basePath}/.babelrc`)),
	options = require('../util/handleArgs')({
		'boolean': ['once', 'coverage', 'sauce'],
		'string': ['proxy', 'config'],
		'default': {
			once: false,
			coverage: false,
			sauce: false,
			config: 'production'
		}
	}),
	gulpConfig = require(`${_basePath}/gulp/config`);

// Inline env variables
babelOptions.optional = [
	'utility.inlineEnvironmentVariables'
	, 'minification.deadCodeElimination'
	, 'minification.memberExpressionLiterals'
	, 'minification.propertyLiterals'
];

export default function(config) {
	config.set({
		basePath: _basePath,
		browserNoActivityTimeout: 120000,
		captureTimeout: 120000,
		colors: true,
		frameworks: ['jasmine'],
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
			testName: 'Reach Unit Tests',
			proxy: options.proxy
		},
		coverageReporter: (() => {
			if (options.coverage) {
				return {
					reporters: [
						{type: 'lcov', subdir: 'report-lcov' }
					]
				};
			}
			return undefined;
		})()
	});
};
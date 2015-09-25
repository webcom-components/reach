/* karma-coverage
 ------------
 Run unit test & coverage
 */
"use strict";

let basePath		= '../..',
	babelify		= require('babelify'),
	_				= require('lodash'),
	babelOptions	= require(basePath + '/.babelrc'),
	options		= require('../util/handleArgs')({
		'default': {
            hubPort: '4444'
		}
	}),
	gulpConfig		= require(basePath + '/gulp/config');

let babelOptionsTest = _.clone(babelOptions);

// Inline env variables
/*jshint laxcomma: true */
babelOptionsTest.optional = [
	'utility.inlineEnvironmentVariables'
	, 'minification.deadCodeElimination'
	, 'minification.memberExpressionLiterals'
	, 'minification.propertyLiterals'
];
export default function(config) {

	config.set({
		basePath: basePath,

        browserNoActivityTimeout: 180000,

		frameworks: ['browserify', 'jasmine'],

		reporters: ['html', 'progress', 'junit'],

		files: [
			'node_modules/babelify/node_modules/babel-core/browser-polyfill.js',
			'test/unit/**/*.js'
		],

		preprocessors: {
			'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
		},

		browserify: {
			debug: true,
			bundleExternal: false,
			insertGlobalVars: {
				NODE_CLIENT: false,
				DEBUG: true,
				process: {env:{NODE_CLIENT: false, DEBUG: true}}
			},
			transform: [
					babelify.configure(babelOptionsTest)
				]
		},

		junitReporter: {
			outputFile: gulpConfig.junit('unit'),
			suite: ''
		}
	});
};
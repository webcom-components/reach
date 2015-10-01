/* karma-coverage
 ------------
 Run unit test & coverage
 */
"use strict";

let basePath		= '../..',
    _				= require('lodash'),
    babelOptions	= require(basePath + '/.babelrc'),
    options		= require('../util/handleArgs')({
        'boolean': ['coverage'],
        'default': {
            hubPort: '4444',
            coverage: false
        }
    }),
    gulpConfig		= require(basePath + '/gulp/config');

let babelOptionsTest = _.clone(babelOptions);

function normalizationBrowserName(browser) {
    return browser.replace(/[\s\(\)_]/g, '-').replace(/-+/g, '-').replace(/-+$/, '');
}

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

        frameworks: ['jasmine'],

        reporters: (() => {
            let list = ['html', 'progress', 'junit', 'dots'];
            if (options.coverage) {
                list.push('coverage');
            }
            return list;
        })(),

        files: [
            '../../node_modules/babelify/node_modules/babel-core/browser-polyfill.js',
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

        junitReporter: {
            outputDir: gulpConfig.junitDir('unit'),
            suite: ''
        },
        coverageReporter: (() => {
            if (options.coverage) {
                return {
                    reporters: [
                        {type: 'text', dir: gulpConfig.coverageDir('html'), subdir: normalizationBrowserName},
                        {type: 'html', dir: gulpConfig.coverageDir('html'), subdir: normalizationBrowserName},
                        {type: 'cobertura', dir: gulpConfig.coverageDir('cobertura'), subdir: normalizationBrowserName}
                    ]
                };
            }
            else {
                return undefined;
            }
        })()
    });
};
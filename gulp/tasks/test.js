"use strict";

/* test
 ------------
 Run karma server for TDD or for test/coverage
 */

// Help
let usage = require('../util/usage');

usage.add('test:unit', 'Run unit tests', {
    'ci': 'Force singleRun & coverage',
    'selenium': 'Use Selenium test browsers',
    'hubHost = <ip>': 'Selenium Hub host',
    'hubPort = <port>': 'Selenium Hub port',
    'config = <filename>': 'config file name (without .js extension). Default is development',
    'proxy = <ip:port>': 'proxy for selenium nodes'
});

let gulp		= require('gulp'),
    Karma		= require('karma').Server,
    selenium	= require('../util/selenium'),
    _			= require('lodash'),
    babelify	= require('babelify'),
    Jasmine     = require('jasmine'),
    babelOptions= _.clone(require('../../.babelrc.js')),
    options		= require('../util/handleArgs')({
        'boolean': ['ci', 'coverage', 'skipPruning'],
        'string': ['proxy', 'config'],
        'default': {
            ci: false,
            coverage: false,
            skipPruning: false,
            config: 'development'
        }
    }),
    dev			= options.ci === false,

    karmaStart = (file, taskFiles, done) => {
        selenium(function(launchers, browsers){

            var karmaArgs = {
                hostname: require('../util/resolveIP')(),
                singleRun: !dev,
                autoWatch: dev,
                customLaunchers: launchers,
                browsers: dev ? [] : browsers,
                configFile: __dirname + '/../karma/' + file,
                files: taskFiles
            };

            /*jshint laxcomma: true */
            babelOptions.optional = [
                'utility.inlineEnvironmentVariables'
                , 'minification.deadCodeElimination'
                , 'minification.memberExpressionLiterals'
                , 'minification.propertyLiterals'
            ];

            process.env.DEBUG = true;

            _.extend(karmaArgs, {
                browserify: {
                    debug: true,
                    bundleExternal: false,
                    builtins: [],
                    detectGlobals: true,
                    transform: [
                        babelify.configure(babelOptions)
                    ]
                }
            });

            var srv = new Karma(karmaArgs,
                () => {
                    done();
                    // Sometimes gulp doesn't let go
                    process.exit(0);
                }
            );
            srv.start();
        });
    };

/**
 * Unit test. Call with --ci for Jenkins
 */
gulp.task('test:unit', function (done) {
    karmaStart(
        'karma-unit.conf.js',
        [
            'node_modules/babelify/node_modules/babel-core/browser-polyfill.js',
            'bower_components/webcom/webcom.js',
            'test/config/' + options.config + '.js',
            'src/index.js',
            'test/unit/**/*.js'
        ],
        done
    );
});


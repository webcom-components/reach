'use strict';

/* test
 ------------
 Run karma server for TDD or for test/coverage
 */

// Help
import usage from '../util/usage';
import gulp	from 'gulp';
import {Server as Karma} from 'karma';
import selenium	from '../util/selenium';
import args from '../util/handleArgs';

usage.add('test:unit', 'Run unit tests', {
	'ci': 'Force singleRun & coverage',
	'coverage': 'Create code coverage reports',
	'selenium': 'Use Selenium test browsers',
	'hubHost = <ip>': 'Selenium Hub host',
	'hubPort = <port>': 'Selenium Hub port',
	'config = <filename>': 'config file name (without .js extension). Default is development',
	'proxy = <ip:port>': 'proxy for selenium nodes'
});

const options		    = args({
		'boolean': ['ci', 'coverage', 'skipPruning'],
		'string': ['proxy', 'config'],
		'default': {
			ci: false,
			coverage: false,
			skipPruning: false,
			config: 'development'
		}
	}),
	karmaStart = (file, taskFiles, done) => {
		selenium((launchers, browsers) => {

			const karmaArgs = {
				hostname: require('../util/resolveIP')(),
				singleRun: options.ci,
				autoWatch: !options.ci,
				customLaunchers: launchers,
				browsers: !options.ci ? [] : browsers,
				configFile: `${__dirname}/../karma/${file}`,
				files: taskFiles
			};

			const srv = new Karma(karmaArgs,
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
 * Unit test with Webpack. Call with --ci for Jenkins
 */
gulp.task('test:unit', (done) => {
	karmaStart(
		'karma-unit.conf.js',
		[
			'node_modules/babelify/node_modules/babel-core/browser-polyfill.js',
			'bower_components/webcom/webcom.js',
			`test/config/${options.config}.js`,
			'test/unit/**/*.js'
		],
		done
	);
});


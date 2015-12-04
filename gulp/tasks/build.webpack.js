import gulp from 'gulp';
import config from '../config';
import webpack from 'webpack';
import usage from '../util/usage';

const pack = (debug) => {
	return (done) => {
		webpack(config.webpack({
			output: true,
			debug,
			release: !debug
		}), (exitCode, stats) => {
			console.log(stats.toString());
			done(exitCode);
			process.exit(exitCode);
		});
	};
};

usage.add('build:debug', 'Build reach-debug.js');
gulp.task('build:debug', pack(true));

usage.add('build:reach', 'Build reach.js');
gulp.task('build:release', pack(false));
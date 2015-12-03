import gulp from 'gulp';
import config from '../config';
import webpack from 'webpack';

gulp.task('build:debug:webpack', (callback) => {
	webpack(config.webpack({
		output: true,
		debug: true
	}), (err, stats) => {
		console.log(stats.toString());
		callback();
	});
});

gulp.task('build:release:webpack', (callback) => {
	webpack(config.webpack({
		output: true,
		release: true
	}), (err, stats) => {
		console.log(stats.toString());
		callback();
	});
});
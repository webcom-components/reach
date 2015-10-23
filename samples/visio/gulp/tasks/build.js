import gulp	from 'gulp';
import webpack from 'webpack';
import config from '../config';
import runSequence from 'run-sequence';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';

gulp.task('copyAssets', () => {

	return gulp.src([
		'./src/index.html'])
		.pipe(gulp.dest('./dist'));

});

gulp.task('build', (callback) => {
	process.env.NODE_ENV = 'production';

	runSequence('copyAssets', () => {
		webpack(config.webpack({
			output: true,
			release: true
		}), (err, stats) => {
			console.log(stats.toString());
			callback();
		});
	});
});

gulp.task('build:kermit', (callback) => {
	process.env.NODE_ENV = 'production';

	runSequence('copyAssets', () => {
		webpack(config.webpack({
			output: true,
			release: true,
			wsServerUrl: 'https://base3.webcom.orange-labs.fr'
		}), (err, stats) => {
			console.log(stats.toString());
			callback();
		});
	});
});

gulp.task('serve', ['build'], (done) => {
	const bs = browserSync.create();
	bs.init(config.browserSyncDist, () => {
		done();
	});
});

gulp.task('default', ['dev']);


'use strict';

import gulp	            from 'gulp';
import browserSync      from 'browser-sync';
import config	        from '../config';

gulp.task('samples:visio', ['build:debug'], () => {
	const bs = browserSync.create();
	bs.init(config.browserSyncSamples);
});

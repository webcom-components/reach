"use strict";

import gulp	            from 'gulp';
import browserSync      from 'browser-sync';
import config	        from '../config';

gulp.task('serve', function(){
    browserSync(config.browserSync);
});

gulp.task('default', ['serve']);
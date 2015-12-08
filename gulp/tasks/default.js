import usage from '../util/usage';
import gulp from 'gulp';

gulp.task('help', usage.list);

gulp.task('default', ['help']);
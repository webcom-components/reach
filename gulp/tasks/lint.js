import gulp from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';
import stream from 'stream';
import source from 'vinyl-source-stream';
import usage from '../util/usage';

usage.add('lint', 'Run ESLint. Report is available in checkstyle/.');
gulp.task('lint', () => {
	return gulp
		.src(['src/**.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.format('html', (content) => {
			const str = new stream.Readable;
			str.push(content);
			str.push(null);
			str.pipe(source('report.html'))
				.pipe(gulp.dest(config.checkstyleDir));
		}))
		.pipe(eslint.format('checkstyle', (content) => {
			const str = new stream.Readable;
			str.push(content);
			str.push(null);
			str.pipe(source('checkstyle.xml'))
				.pipe(gulp.dest(config.checkstyleDir));
		}));
});
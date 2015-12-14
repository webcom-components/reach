import gulp from 'gulp';
import config from '../config';
import webpack from 'webpack';
import usage from '../util/usage';
import { readFileSync } from 'fs';



const pkg = JSON.parse(readFileSync(`${__dirname}/../../package.json`));

const pack = (debug, exit) => {
	return (done) => {
		webpack(config.webpack({
			output: true,
			debug,
			release: !debug
		}, pkg.version), (exitCode, stats) => {
			console.log(stats.toString());
			done(exitCode);
			if(exit){
				process.exit(exitCode);
			}
		});
	};
};

usage.add('build:debug', 'Build reach-debug.js');
gulp.task('build:debug', pack(true, true));

usage.add('build:reach', 'Build reach.js');
gulp.task('build:release', pack(false, true));

usage.add('build', 'Build reach-debug.js & reach.js');
gulp.task('build', (done) => {
	pack(true, false)(() => {
		pack(false, true)(done);
	});
});
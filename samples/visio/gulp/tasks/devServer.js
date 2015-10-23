import gulp	from 'gulp';
import webpack from 'webpack';
import config from '../config';
//import WebpackDevServer from 'webpack-dev-server';
//import gutil from 'gulp-util';
import browserSync from 'browser-sync';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';

gulp.task('dev', (done) => {
	const compiler = webpack(config.webpack({
		output: true,
		debug: true,
		devServer: true
	}));

	const app = express();
	app.use(webpackDevMiddleware(compiler, {
		noInfo: false,
		stats: {
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compiler));

	app.get('/webcom.js', (req, res) => {
		res.sendFile(path.join(__dirname, '../../../../bower_components/webcom/webcom.js'));
	});
	app.get('/comsdk.js', (req, res) => {
		res.sendFile(path.join(__dirname, '../../../../dist/comsdk-debug.js'));
	});

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../../src/index.html'));
	});

	app.listen(8080, (err) => {
		if (err) {
			console.log(err);
			return;
		}

		console.log('Listening at http://localhost:8080');
	});
});


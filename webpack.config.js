'use strict';

const
	webpack = require('webpack'),
	minimist = require('minimist'),
	path = require('path'),
	readFileSync = require('fs').readFileSync,
	packageInfo = require('./package.json'),
	defaultOptions = {
		release: false,
		coverage: false,
		debug: false,
		output: true,
		noedge: false
	};

/*eslint complexity: [2, 15] */
const configure = (options) => {
	const config = {
		module: {
			preLoaders: [
				{
					test:/\.js$/,
					include: path.resolve(__dirname, './test'),
					exclude: /(bower_components|node_modules)/,
					loader: 'babel'
				}
			],
			loaders: [
				{
					test:/\.js$/,
					include: path.resolve(__dirname, './src'),
					exclude: /(bower_components|node_modules|test)/,
					loader: 'babel'
				}
			]
		},
		resolve: {
			alias: {}
		},
		output: {
			libraryTarget: 'umd',
			library: 'Reach'
		},
		plugins: [
			new webpack.BannerPlugin(readFileSync(`${__dirname}/LICENSE`, 'utf8')),
			new webpack.DefinePlugin({
				SDK_VERSION: `'${packageInfo.version || '0.0.0'}'`,
				SCHEMA_VERSION: `'${packageInfo.schema.version || 'draft-00'}'`
			}),
			new webpack.DefinePlugin(require('./credentials'))
		]
	};

	if(options.noedge) {
		config.resolve.alias['webrtc-adapter'] = `${__dirname}/node_modules/webrtc-adapter/out/adapter_no_edge.js`;
	}

	if(options.output) {
		config.entry = './src/Reach.js';
		config.output.path = './dist';
		config.output.filename = options.release ? 'reach.js' : 'reach-debug.js';
	}

	if (options.release) {
		config.plugins = config.plugins.concat([
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new webpack.optimize.UglifyJsPlugin({minimize: true})
		]);
	} else {
		config.devtool = 'inline-source-map';
		config.watch = options.debug;
	}

	if (options.coverage) {
		config.module.preLoaders.push({
			test:/\.js$/,
			include: path.resolve(__dirname, './src'),
			exclude: /(bower_components|node_modules|test)/,
			loader: 'babel-istanbul'
		});
	}

	return config;
};

// Parse command line args when executing webpack
const webpackOptions = minimist(process.argv.slice(2), {'boolean': ['release', 'noedge'], 'default': defaultOptions});

module.exports = configure(webpackOptions);

// Export configure function (for karma)
module.exports.configure = configure;

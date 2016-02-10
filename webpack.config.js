'use strict';

const
	webpack = require('webpack'),
	minimist = require('minimist'),
	readFileSync = require('fs').readFileSync,
	packageInfo = require('./package.json'),
	args = minimist(process.argv.slice(2), {
		'boolean': ['release'],
		'default': {
			'coverage': false,
			'debug': false,
			'output': true
		}
	});

/*eslint complexity: [2, 10] */
const cfg = (options) => {
	const config = {
		module: {
			loaders: [
				{
					test:/(src)|(test)\/.*\.js/,
					loader: 'babel'
				}
			]
		},
		resolve: {
			alias: {
				'adapterjs':  '../node_modules/adapterjs/publish/adapter.min.js'
			}
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
			})
		]
	};

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
		config.module.loaders.push({
			test: /\.js$/,
			loaders: ['isparta'],
			include: /src.*/,
			exclude: /node_modules|\.test.js$|\.mock\.js$/
		});
	}

	return config;
};

module.exports = cfg(args);

// Export cfg function (for karma)
module.exports.configure = cfg;

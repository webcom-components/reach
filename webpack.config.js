'use strict';

const
	webpack = require('webpack'),
	map = require('lodash/object/mapValues'),
	minimist = require('minimist'),
	readFileSync = require('fs').readFileSync,
	packageInfo = require('./package.json'),
	defaultOptions = {
		release: false,
		coverage: false,
		debug: false,
		output: true,
		noedge: false
	};

const account = map(Object.assign(
	{
		WEBCOM_EMAIL: process.env.WEBCOM_EMAIL,
		WEBCOM_PASSWORD: process.env.WEBCOM_PASSWORD,
		WEBCOM_TOKEN: process.env.WEBCOM_TOKEN,
		WEBCOM_DOMAIN: process.env.WEBCOM_DOMAIN,
		WEBCOM_PROTOCOL: process.env.WEBCOM_PROTOCOL,
		WEBCOM_NAMESPACE: process.env.WEBCOM_NAMESPACE,
		NODE_ENV: process.env.NODE_ENV
	},
	require('./.account.json')
), v => v ? `'${v}'` : null);

/*eslint complexity: [2, 15] */
const configure = (options) => {
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
			new webpack.DefinePlugin(account)
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
		config.module.loaders.push({
			test: /\.js$/,
			loaders: ['isparta'],
			include: /src.*/,
			exclude: /node_modules|\.test.js$|\.mock\.js$/
		});
	}

	return config;
};

// Parse command line args when executing webpack
const webpackOptions = minimist(process.argv.slice(2), {'boolean': ['release', 'noedge'], 'default': defaultOptions});

module.exports = configure(webpackOptions);

// Export configure function (for karma)
module.exports.configure = configure;
// Export account
module.exports.account = account;

'use strict';

const
	webpack = require('webpack'),
	BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
	path = require('path'),
	readFileSync = require('fs').readFileSync,
	root = path.resolve(__dirname, '..'),
	packageInfo = require(`${root}/package.json`),
	defaultOptions = {
		release: false,
		coverage: false,
		debug: false,
		output: true
	};

/*eslint complexity: [2, 15] */
const configure = (options) => {
	const config = {
		module: {
			rules: [
				{
					test:/\.js$/,
					include: [
						path.resolve(root, 'src'),
						path.resolve(root, 'test'),
					],
					exclude: /(bower_components|node_modules)/,
					loader: 'babel-loader'
				}
			]
		},
		output: {
			libraryTarget: 'umd',
			library: 'Reach'
		},
		context: root,
		externals: {
			'webcom/webcom': {
				root: 'Webcom',
				commonjs: 'webcom/webcom',
				commonjs2: 'webcom/webcom',
				amd: 'webcom/webcom'
			}
		},
		plugins: [
			new webpack.BannerPlugin({banner: readFileSync(`${root}/LICENSE`, 'utf8')}),
			new webpack.DefinePlugin({
				SDK_VERSION: `'${packageInfo.version || '0.0.0'}'`,
				SCHEMA_VERSION: `'${packageInfo.schema.version || 'draft-00'}'`
			}),
			new webpack.DefinePlugin(require(`${root}/credentials`))
		]
	};

	if(options.output) {
		config.entry = './src/Reach.js';
		config.output.path = './dist';
		config.output.filename = options.release ? 'reach.js' : 'reach-debug.js';
	}

	if (options.release) {
		config.plugins = config.plugins.concat([
			new webpack.LoaderOptionsPlugin({
				minimize: true
			}),
			new webpack.optimize.AggressiveMergingPlugin(),
			new webpack.optimize.UglifyJsPlugin({compress: true}),
			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				reportFilename: path.join(root, 'bundleAnalysis.html'),
				openAnalyzer: false,
				generateStatsFile: true,
				statsFilename: path.join(root, 'bundleAnalysis.json')
			})
		]);
	} else if(options.debug) {
		config.devtool = 'inline-source-map';
	}

	return config;
};

// Export configure function (for karma)
module.exports = {defaultOptions, configure};

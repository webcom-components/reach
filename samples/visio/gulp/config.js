import webpack from 'webpack';

const libName = 'phone';

/**
 * Returns default webpack configuration.
 * Initialize Babel to parse js files and resolve node dependencies
 * @returns {Object}
 */
function getDefaultWebpackConfig() {
	return {
		module: {
			loaders: [
				{
					test:/\.js$/,
					loaders: ['babel'],
					exclude: /(node_modules)|(dist)/
				},
				{
					test: /\.(woff|woff2)$/,
					loader: 'url-loader?limit=10000&mimetype=application/font-woff'
				},
				{ test: /\.ttf$/,    loader: 'file-loader' },
				{ test: /\.eot$/,    loader: 'file-loader' },
				{ test: /\.svg$/,    loader: 'file-loader' }
			]
		},
		output: {
			//libraryTarget: 'umd',
			library: libName
		},
		plugins: [],
		resolve: {
			alias: {
				'bootstrap.css':  '../../node_modules/bootstrap/dist/css/bootstrap.css',
				'webcom': '../../../../bower_components/webcom/webcom.js',
				'comsdk': '../../../../dist/comsdk-debug.js'
			}
		},
		externals: [
			//{ comsdk: 'ComSDK'}
			//{ jquery: 'jQuery'}
		]
	};
}

const config = {
	webpack: (options={
		release:false,
		debug: false,
		devServer: false
	}) => {
		const config = getDefaultWebpackConfig();

		config.output.path = options.devServer ? `${__dirname}/dist` : './dist';
		console.log(config.output.path);

		config.output.filename = 'bundle.js';

		config.plugins.push(new webpack.ProvidePlugin({
			'jQuery': 'jquery',
			'$': 'jquery',
			'webcom': 'webcom'
		}));

		if (options.release) {
			config.entry = './src/js/index.js';

			config.plugins = config.plugins.concat([
				new webpack.optimize.DedupePlugin(),
				//new webpack.optimize.OccurenceOrderPlugin(),
				//new webpack.optimize.AggressiveMergingPlugin(),
				new webpack.optimize.UglifyJsPlugin({minimize: true})
			]);
			config.resolve.alias.comsdk = '../../../../dist/comsdk.js';
		}

		if (options.debug) {
			config.entry = [
				'webpack-hot-middleware/client',
				'./src/js/index'
			];
			config.devtool = 'cheap-module-eval-source-map';
			config.plugins.push(new webpack.HotModuleReplacementPlugin());
			config.plugins.push(new webpack.DefinePlugin({
				'__DEVTOOLS__': true,
				'process.env': JSON.stringify('development')
			}));
		}

		return config;
	},
	browserSyncDist: {
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		},
		server: {
			// Serve up our test folder
			baseDir: './dist/',
			//directory: true,
			files: ['./dist/**']
		}
	}
};

export default config;
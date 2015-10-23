const distFolder = './dist',
	options	= require('./util/handleArgs')({
		'string': ['config'],
		'default': {
			config: 'development'
		}
	}),
	libName = 'ComSDK',
	devOutputName = 'comsdk-debug.js',
	releaseOutputName = 'comsdk.js',
	webpack = require('webpack');


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
					test:/(src)|(test)\/.*\.js/,
					loader: 'babel-loader',
					query: {
						optional: [
							'utility.inlineEnvironmentVariables'
							, 'minification.deadCodeElimination'
							, 'runtime'
							, 'minification.memberExpressionLiterals'
							, 'minification.propertyLiterals'
						]
					}
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
			library: libName
		},
		plugins: []
	};
}

export default {
	name: libName,
	distFolder,
	devOutputName,
	releaseOutputName,

	/**
	 * Get junit report directory
	 * @param type
	 * @returns {*}
	 */
	junitDir(type) {
		return `${distFolder}/${options.config}/junit/${type}/test-results.xml`;
	},

	/**
	 * Get coverage report directory
	 * @param {String} type
	 * @returns {string}
	 */
	coverageDir(type){
		return `${distFolder}/${options.config}/coverage/${type}`;
	},

	/**
	 * Get checkstyle directory
	 * @returns {string}
	 */
	get checkstyleDir(){
		return `${distFolder}/checkstyle`;
	},

	/**
	 * Browser Sync configuration
	 */
	browserSync: {
		server: {
			// Serve up our test folder
			baseDir: './dist/',
			directory: true,
			files: ['./dist/**'],
			routes: {
				'/node_modules': './node_modules',
				'/test': './test',
				'/dist': './dist'
			}
		}
	},

	browserSyncSamples: {
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		},
		//https: true,
		server: {
			// Serve up our test folder
			baseDir: './samples/',
			directory: true,
			files: [
				'./dist/**',
				'./samples/**'
			],
			routes: {
				'/node_modules': './node_modules',
				'/test': './test',
				'/lib/webcom.js': './bower_components/webcom/webcom.js',
				'/lib': './dist'
			}
		}
	},



	/**
	 * Return webpack configuration object
	 * @param {Object} options - debug or release build ? output file ? with coverage instrumentation code ?
	 * @returns {{module: {loaders: {test: RegExp, loader: string, query: {optional: string[]}}[]}, resolve: {alias: {adapterjs: string}}, output: {libraryTarget: string, library: string}}}
	 */
	webpack: (options={
		release:false,
		debug: false,
		coverage: false,
		output: false }) => {

		const config = getDefaultWebpackConfig();

		if (options.output) {
			Object.assign(config, {
				entry: './src/index.js'
			});
			config.output.path = './dist';
			config.output.filename = options.release ? releaseOutputName : devOutputName;
		}

		if (options.release) {
			config.plugins = config.plugins.concat([
				new webpack.optimize.DedupePlugin(),
				new webpack.optimize.OccurenceOrderPlugin(),
				new webpack.optimize.AggressiveMergingPlugin(),
				new webpack.optimize.UglifyJsPlugin({minimize: true})
			]);
		}

		if (options.debug) {
			config.devtool = 'inline-source-map';
			config.watch = true;
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
	}
};


let distFolder = './dist',
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

export default {
    name: libName,
    distFolder: distFolder,
    devOutputName: devOutputName,
    releaseOutputName : releaseOutputName,

    /**
     * Get junit report directory
     * @param type
     * @returns {*}
     */
    junitDir: (type) => {
        return `${distFolder}/${options.config}/junit/${type}/test-results.xml`;
    },

    /**
     * Get coverage report directory
     * @param {String} type
     * @returns {string}
     */
    coverageDir: function(type){
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
                "/node_modules": "./node_modules",
                "/test": "./test",
                "/dist": "./dist"
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
        let config = {
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
                libraryTarget: "umd",
                library: libName
            }
        };


        if (options.output) {
            Object.assign(config, {
                entry: './src/index.js',
                output: {
                    path: './dist',
                    filename: options.release ? releaseOutputName : devOutputName
                }
            });
        }

        if (options.release) {
            Object.assign(config, {
                plugins: [
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.OccurenceOrderPlugin(),
                    new webpack.optimize.AggressiveMergingPlugin(),
                    new webpack.optimize.UglifyJsPlugin({minimize: true})
                ]
            });
        }

        if (options.debug) {
            Object.assign(config, {
                devtool: 'inline-source-map',
                watch: true
            });
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


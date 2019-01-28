const path = require('path');
const readFileSync = require('fs').readFileSync;
const webpack = require('webpack');
const root = path.resolve(__dirname);
const packageInfo = require(`${root}/package.json`);
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: 'development',
  entry: {
    main: './src/Reach.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Reach',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader',
      },
      {
        enforce: 'post',
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: {
            esModules: true,
            debug: true
          }
        }
      }
    ]
  },
  externals: [
    'webcom/webcom',
  ],
  plugins: [
    new webpack.BannerPlugin({ banner: readFileSync(`${root}/LICENSE`, 'utf8') }),
    new webpack.DefinePlugin({
      SDK_VERSION: `'${packageInfo.version || '0.0.0'}'`,
      SCHEMA_VERSION: `'${packageInfo.schema.version || 'draft-00'}'`
    }),
    // new webpack.DefinePlugin(require(`${root}/credentials`))
  ],
  performance: {
    hints: false,
  },
};

module.exports = (env, argv) => {
  if (argv && argv.mode) {
    if (argv.mode === 'development') {
      config.devtool = 'source-map';
      config.output.filename = 'reach-debug.js';
    } else if (argv.mode === 'production') {
      config.mode = 'production';
      config.output.filename = 'reach.js';
      config.devtool = false;
      config.plugins = config.plugins.concat([
        new webpack.LoaderOptionsPlugin({
          minimize: true
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: path.join(root, 'bundleAnalysis.html'),
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: path.join(root, 'bundleAnalysis.json')
        })
      ]);
    }
  }
  return config;
};

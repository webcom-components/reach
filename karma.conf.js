const path = require('path');
const webpackConfig = require('./webpack.config')();
const env = require('dotenv').config({
  path: path.resolve(__dirname, '.env.test')
});

const envVars = [
  'LOG_LEVEL',
  'WEBCOM_PROTOCOL',
  'WEBCOM_DOMAIN',
  'WEBCOM_NAMESPACE',
  'WEBCOM_EMAIL',
  'WEBCOM_PASSWORD'
];

module.exports = function(config) {
  config.set({
    basePath: __dirname,
    frameworks: ['jasmine'],
    files: [
      './test/index.js'
    ],
    exclude: [],
    preprocessors: {
      './test/index.js': ['webpack', 'env']
    },
    envPreprocessor: envVars,
    webpack: {
      ...webpackConfig,
      output: false,
      externals: [],
      devtool: 'inline-source-map',
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false,
      },
    },
    reporters: ['mocha', 'kjhtml', 'html', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      'report-config': {
        html: {
          subdir: 'html'
        }
      },
      combineBrowserReports: true,
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
    },
    htmlReporter: {
      outputDir: 'report',
      focusOnFailures: true,
      namedFiles: true,
      urlFriendlyName: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    // browsers: ['ChromeWebRTC', 'ChromeCanaryWebRTC', 'FirefoxWebRTC', 'FirefoxNightlyWebRTC'],
    browsers: ['ChromeWebRTC'],
    customLaunchers: {
      ChromeWebRTC: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--auto-open-devtools-for-tabs',
          '--remote-debugging-port=9222',
          '--use-fake-ui-for-media-stream',
          '--use-fake-device-for-media-stream'
        ],
      },
      ChromeCanaryWebRTC: {
        base: 'ChromeCanary',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--auto-open-devtools-for-tabs',
          '--remote-debugging-port=9222',
          '--use-fake-ui-for-media-stream',
          '--use-fake-device-for-media-stream'
        ],
      },
      FirefoxWebRTC: {
        base: 'Firefox',
        prefs: {
          'media.navigator.permission.disabled': true
        },
        flags: ['--headless']
      },
      FirefoxNightlyWebRTC: {
        base: 'FirefoxNightly',
        prefs: {
          'media.navigator.permission.disabled': true
        },
        flags: ['--headless']
      }
    },
  });
};

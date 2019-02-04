const path = require('path');
const webpackConfig = require('./webpack.config')();
const { exec } = require('shelljs');
require('dotenv').config({
  path: path.resolve(__dirname, '.env.test')
});

/**
 * Env vars use by test and exported by env preprocessor
 * @type {string[]}
 */
const envVars = [
  'LOG_LEVEL',
  'WEBCOM_PROTOCOL',
  'WEBCOM_DOMAIN',
  'WEBCOM_NAMESPACE',
  'WEBCOM_EMAIL',
  'WEBCOM_PASSWORD'
];

/**
 * Chrome flags configuration
 * @type {array}
 * @link https://github.com/karma-runner/karma-chrome-launcher
 */
const chromeFlags = [
  '--no-sandbox',
  '--disable-gpu',
  '--auto-open-devtools-for-tabs',
  '--remote-debugging-port=9222',
  '--use-fake-ui-for-media-stream',
  '--use-fake-device-for-media-stream'
];

/**
 * Firefox pref configuration
 * @type {Object}
 * @link https://github.com/karma-runner/karma-firefox-launcher
 */
const firefoxPref = {
  'media.navigator.permission.disabled': true
};

/**
 * Local browser launcher
 * @type {Object}
 * @link http://karma-runner.github.io/3.0/config/browsers.html
 */
const localBrowser = {
  localChrome: {
    base: 'Chrome',
    flags: chromeFlags
  },
  localFirefox: {
    base: 'Firefox',
    prefs: firefoxPref,
  }
};

/**
 * Saucelabs browser launcher
 * @link https://github.com/karma-runner/karma-sauce-launcher
 * @type {Object}
 */
const saucelabsBrower = {
  // Chrome
  saucelabsWindows10ChromeLatest: {
    base: 'SauceLabs',
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest'
  },
  /*saucelabsWindows10ChromeBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest-1'
  },
  saucelabsWindows7ChromeLatest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: 'latest'
  },
  saucelabsWindows7ChromeBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: 'latest-1'
  },
  saucelabsLinuxChromeLatest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Linux',
    version: 'latest'
  },
  saucelabsLinuxChromeBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Linux',
    version: 'latest-1'
  },
  saucelabsMacChromeLatest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'macOS 10.14',
    version: 'latest'
  },
  saucelabsMacChromeBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'macOS 10.14',
    version: 'latest-1'
  },
  // Firefox
  saucelabsWindows10FirefoxLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 10',
    version: 'latest'
  },
  saucelabsWindows10FirefoxBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 10',
    version: 'latest-1'
  },
  saucelabsWindows7FirefoxLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: 'latest'
  },
  saucelabsWindows7FirefoxBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: 'latest-1'
  },
  saucelabsLinuxFirefoxLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version: 'latest'
  },
  saucelabsLinuxFirefoxBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version: 'latest-1'
  },
  saucelabsMacFirefoxLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'macOSS 10.14',
    version: 'latest'
  },
  saucelabsMacFirefoxBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'macOS 10.14',
    version: 'latest-1'
  },
  // Edge
  saucelabsWindows10EdgeLatest: {
    base: 'SauceLabs',
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: 'latest'
  },
  saucelabsWindows10EdgeBeforeLatest: {
    base: 'SauceLabs',
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: 'latest-1'
  },
  // Safari
  saucelabsMacSafariLatest: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'macOS 10.14',
    version: 'latest'
  }*/
};

/**
 * Merge to custom browser, local and saucelabs
 * @type {Object}
 */
const customLaunchers = Object.assign(localBrowser, saucelabsBrower);

/**
 * Generate karma repoters from cli args
 * @param config
 * @returns {array}
 */
const genReporters = (config) => {
  let reports = ['mocha', 'kjhtml', 'html'];
  if (config.coverage) {
    reports = [
      ...reports,
      'coverage-istanbul'
    ];
  }

  if (config.ci) {
    reports = [
      ...reports,
      'saucelabs',
      'coverage-istanbul'
    ];
  }

  return reports;
};

/**
 * Generate browsers configuration
 * @param config
 * @returns {Array}
 */
const genBrowser = config => Object.keys(customLaunchers)
  .filter((launcher) => {
    if (config.ci) {
      return /^saucelabs/.test(launcher);
    }
    return /^local/.test(launcher);
  });

/**
 * Saucelabs test name
 * @type {string}
 */
const testName = (() => {
  const { TRAVIS, TRAVIS_BRANCH, TRAVIS_PULL_REQUEST } = process.env;
  if (TRAVIS === 'true') {
    if (TRAVIS_PULL_REQUEST && TRAVIS_PULL_REQUEST !== 'false') {
      return `PR #${TRAVIS_PULL_REQUEST}`;
    }
    return TRAVIS_BRANCH;
  }
  return exec('git rev-parse --abbrev-ref HEAD');
})();

/**
 * Karma configuration
 * @param config
 */
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
    reporters: genReporters(config),
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
    autoWatch: config.autoWatch || false,
    singleRun: config.singleRun || false,
    browsers: genBrowser(config),
    customLaunchers,
    saucelabs: {
      testName,
      connectOptions: {
        directDomains: '*.datasync.orange.com',
        noSslBumpDomains: '*.datasync.orange.com'
      }
    }
  });
};

/* selenium
 ------------
 Selenium related configuration (karma launchers & selenium hub configuration)
 */
"use strict";

let _ = require('lodash'),
	gutil = require('gulp-util'),
	options	= require('../util/handleArgs')({
		'string': ['hubHost', 'hubPort', 'proxy'],
		'boolean': 'selenium',
		'default': {
			hubHost: '10.185.110.169',
			hubPort: '4444',
			selenium: false,
            proxy: '10.185.111.235:3128'
		}
	}),
	customLaunchers = {};

export default function(callback){
	if(options.selenium){
		gutil.log(gutil.colors.green('List available browsers on Selenium Hub'));
		require('selenium-grid-status').available({
			host: options.hubHost,
			port: options.hubPort
		}, function(err, status){
			if(err){
				gutil.log(gutil.colors.red('Connection to Selenium Hub failed: ' + err.code));
				process.exit(1);
			} else {
				var browsers = [];
				_.forEach(status, function(proxy){
					browsers = browsers.concat(proxy.browser);
				});
				_.uniq(browsers).forEach(function(browser){
					if(!(/^selenium$/i).test(browser.seleniumProtocol) /* && /chrome/i.test(browser.browserName */ ) {
						var id = [
							browser.browserName,
							browser.version,
							browser.platform
						].join('-').toLowerCase().replace(/\s/g, '-');
						customLaunchers[id] = _.merge(
							{
								base: 'WebDriver',
								config: {
                                    hostname: options.hubHost,
                                    port: options.hubPort
                                },
								name: 'Karma',
                                /*
                                proxy: {
                                    proxyType: 'manual',
                                    httpProxy: options.proxy,
                                    sslProxy: options.proxy
                                }
                                */
                            },
							browser
						);
					}
				});
				if(browsers.length > 0) {
					gutil.log(gutil.colors.green('Available browsers list retrieved from Selenium Hub'));
					_.forEach(customLaunchers, function (launcher) {
						gutil.log((launcher.browserName + ' ' + launcher.version + ' on ' + launcher.platform));
					});
				} else {
					gutil.log(gutil.colors.red('No available browsers on Selenium Hub'));
				}
				callback(customLaunchers, _.keys(customLaunchers));
			}
		});
	} else {
		callback({}, []);
	}
};
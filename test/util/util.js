'use strict';

/* global webdriver */

const Webcom = (window || global).Webcom;

const PersistentStorage = Webcom.INTERNAL.PersistentStorage;

/**
 * Reset repos to force new persistent connection to be established
 */
export const resetLocalRepos = () => {
	Webcom.Context.getInstance().repos_ = {};
};

/**
 * Reset repo to force new persistent connection to be established
 * @param {String} name
 */
export const resetLocalRepo = name => {
	delete Webcom.Context.getInstance().repos_[name];
};

/**
 * Override url connection for a namespace
 * @param {String} namespace - namespace to override url
 * @param {String} domain - orginal domain to override
 * @param {String} url - new url to
 */
export const overrideNSUrl = (namespace, originalDomain, url) => {
	PersistentStorage.set(`host:${originalDomain}/base/${namespace}`, url);
};

/**
 * For a namespace, remove overriden url
 * @param {String} namespace
 * @param {String} originalDomain
 */
export const removeNSOverridenUrl = (namespace, originalDomain = 'webcom.orange.com') => {
	PersistentStorage.remove(`host:${originalDomain}/base/${namespace}`);
};

/**
 * Search script tag with src corresponding to reg and add it to iframe
 * @param {DOMElement} iframe - iframe where script tag will be added
 * @param {String} reg - regular expression to test src attribute of script tags
 * @returns {Promise}
 */
export const insertParentScriptToIframe = (iframe, reg) => {
	const src = [].slice.call(document.querySelectorAll('script')).find((el) => {
		return new RegExp(reg).test(el.getAttribute('src'));
	});
	return new Promise((resolve) => {
		if (!src) {
			resolve(null);
		}
		const target = document.createElement('script');
		iframe.contentWindow.document.head.appendChild(target);
		target.onload = () => {
			resolve(src.getAttribute('src'));
		};
		target.src = src.getAttribute('src');
	});
};

/**
 * Create a iframe with Webcom SDK JS
 * @returns {WebDriver} Instance of webdriver to get control over iframe
 */
export const getBrowserWebDriver = () => {
	const iframe = document.createElement('iframe');

	iframe.name= 'webdriver frame';

	document.body.appendChild(iframe);

	iframe.contentWindow.document.open();
	iframe.contentWindow.document.close();
	iframe.contentWindow.document.innerHTML = '<p>webdriver</p>';

	return Promise.all([
		insertParentScriptToIframe(iframe, 'browser-polyfill'),
		insertParentScriptToIframe(iframe, 'webcom(-debug)?').then((found) => {
			if (!found) {
				return insertParentScriptToIframe(iframe, '^/absolute').then(() => {
					return insertParentScriptToIframe(iframe, 'base\/src\/index.js');
				});
			}
		})
	]).then(() => {
		const driver = webdriver.browser.createDriver(iframe.contentWindow);
		driver.executor_.scriptTimeout_ = 10000;
		return driver;
	});
};

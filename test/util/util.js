"use strict";

/* global webdriver */

var Webcom = (window || global).Webcom;

var PersistentStorage = Webcom.INTERNAL.PersistentStorage;

/**
 * Reset repos to force new persistent connection to be established
 */
function resetLocalRepos() {
    Webcom.Context.getInstance().repos_ = {};
}

/**
 * Reset repo to force new persistent connection to be established
 * @param {String} name
 */
function resetLocalRepo(name) {
    delete Webcom.Context.getInstance().repos_[name];
}

/**
 * Override url connection for a namespace
 * @param {String} namespace - namespace to override url
 * @param {String} domain - orginal domain to override
 * @param {String} url - new url to
 */
function overrideNSUrl(namespace, originalDomain, url) {
    PersistentStorage.set(`host:${originalDomain}/base/${namespace}`, url);
}

/**
 * For a namespace, remove overriden url
 * @param {String} namespace
 * @param {String} originalDomain
 */
function removeNSOverridenUrl(namespace, originalDomain="webcom.orange.com") {
    PersistentStorage.remove(`host:${originalDomain}/base/${namespace}`);
}

/**
 * Search script tag with src corresponding to reg and add it to iframe
 * @param {DOMElement} iframe - iframe where script tag will be added
 * @param {String} reg - regular expression to test src attribute of script tags
 * @returns {Promise}
 */
function insertParentScriptToIframe(iframe, reg) {
    let target,
        src = [].slice.call(document.querySelectorAll('script')).find((el) => {
            return new RegExp(reg).test(el.getAttribute('src'));
        });

    return new Promise((resolve) => {
        if (!src) {
            resolve(null);
        }

        target = document.createElement('script');
        iframe.contentWindow.document.head.appendChild(target);

        target.onload = function() {
            resolve(src.getAttribute('src'));
        }
        target.src = src.getAttribute('src');
    });
}

/**
 * Create a iframe with Webcom SDK JS
 * @returns {WebDriver} Instance of webdriver to get control over iframe
 */
function getBrowserWebDriver() {
    let driver,
        iframe = document.createElement('iframe');

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
        driver = webdriver.browser.createDriver(iframe.contentWindow);
        driver.executor_.scriptTimeout_ = 10000;

        return driver;
    });
}

function isNodeEnv() {
    return typeof module !== 'undefined' && module.exports;
}

export default {
    resetLocalRepos: resetLocalRepos,
    resetLocalRepo: resetLocalRepo,
    overrideNSUrl: overrideNSUrl,
    removeNSOverridenUrl: removeNSOverridenUrl,
    getBrowserWebDriver: getBrowserWebDriver
}
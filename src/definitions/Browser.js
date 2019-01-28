import adapter from 'webrtc-adapter';
import Webcom from 'webcom/webcom';

/**
 * The current browser's infos
 * @typedef {Object} Browser
 * @property {string} name - current browser's name
 * @property {number} [version] - current browser's version
 * @property {number} [minVersion] - current browser's minimum supported version
 * @property {boolean} compatible - is current browser supported ?
 */
const browser = Object.assign({
  compatible: !/\s/.test(adapter.browserDetails.browser)
    && (!adapter.browserDetails.minVersion
      || adapter.browserDetails.version >= adapter.browserDetails.minVersion)
}, adapter.browserDetails);

const version = `Reach v${SDK_VERSION} | Schema ${SCHEMA_VERSION} | Webcom v${Webcom.SDK_VERSION}`; // eslint-disable-line no-undef
let message = '';
if (browser.version === null) {
  message = 'Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';
} else if (browser.minVersion && browser.minVersion > browser.version) {
  message = `Unsupported browser: browser is outdated, update to latest version (${browser.minVersion}+)`;
} else if (!adapter.browserShim) {
  message = 'No shim for your browser. There might a problem with your package.';
}

// Log browser status & SDKs versions on load
let args = [`${version} ${message}`];
if (/^(chrome|firefox)$/.test(browser.browser)) {
  args = [
    `%c ${version} %c ${message}`,
    `background: ${browser.compatible ? '#f50' : 'red'}; color: #fff; font-weight: bold`,
    `color: ${browser.compatible ? 'inherit' : 'red'}`
  ];
}

console.log(...args); // eslint-disable-line no-console

export default browser;

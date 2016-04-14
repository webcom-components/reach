// Use require instead of import to ensure disableLog is called before loading webrtc-adapter

// Disable logging before importing WebRTC-Adapter
require('webrtc-adapter/src/js/utils').disableLog(true);

// Load WebRTC-Adapter
const adapter = require('webrtc-adapter');
// Patch browserDetails waiting for webrtc-adapter@1.0.3 (v<=1.0.2 returns undefined when a browser doesn't match any condition)
const browserDetails = Object.assign(
	{browser: 'Unsupported browser', version: null, minVersion: null},
	adapter.browserDetails
);
browserDetails.name = browserDetails.browser;

const version = `Reach v${SDK_VERSION} | Schema ${SCHEMA_VERSION} | Webcom v${Webcom.SDK_VERSION}`;
const defaultMessage = `${browserDetails.browser} - ${browserDetails.version || 'n/a'}`;

// Check if the browser is supported
let message = defaultMessage;
if(adapter.browserDetails.version === null) {
	message = 'Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';
} else if (browserDetails.minVersion > browserDetails.version) {
	message = `Unsupported browser: browser is outdated, update to latest version (${browserDetails.minVersion}+)`;
} else if(!adapter.browserShim){
	message = 'No shim for your browser. There might a problem with your package.';
}
browserDetails.compatible = defaultMessage === message;

// Log browser status & SDKs versions on load
let args = [`${version} ${message}`];
if(/^(chrome|firefox)$/.test(browserDetails.browser)) {
	args = [
		`%c ${version} %c ${message}`,
		`background: ${browserDetails.compatible ? '#f50' : 'red'}; color: #fff; font-weight: bold`,
		`color: ${browserDetails.compatible ? 'inherit' : 'red'}`
	];
}
console.log(...args);

/**
 * Browser infos. Mixes adapter's browserDetails with compatible flag
 * @ignore
 * @type {Browser}
 */
export {browserDetails as browser};

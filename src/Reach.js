/*global SDK_VERSION, SCHEMA_VERSION, Webcom*/

import {AUDIO, VIDEO, CHAT, AUDIO_VIDEO, SCREEN_SHARING, CALL} from './constants';

// TODO move defaultConfig & configure to ./utils ?

const defaultConfig = {
	autoRequestMedia: true
};

/**
 * Merge cfg & defaultConfig
 * @param [cfg] The user configuration
 * @returns {ReachConfig}
 */
const configure = (cfg) => {
	return cfg || defaultConfig;
};

/**
 * Entry point for Reach SDK
 * @public
 */
export default class Reach {
	/**
	 * Create Reach's data structure where the url points to (might not be the root of your namespace)
	 * @public
	 * @param {string|Webcom} [url=http://webcom.orange.com/base/webrtc] The url of your namespace or an existing Webcom reference.
	 * @param {ReachConfig} [config] Reach configuration. You can pass constraints here
	 */
	constructor(url = 'http://webcom.orange.com/base/webrtc', config = null) {
		/**
		 * The reference to the Reach data in your namespace
		 * @public
		 * @type {Webcom}
		 */
		this.ref = url instanceof Webcom ? url : new Webcom(url);
		/**
		 * The configuration
		 * @type {ReachConfig}
		 */
		this.config = configure(config);
	}

	/**
	 * Get versions of SDK and DataModel.The Schema version can be used to determine compatibility with the Android & iOS SDK.
	 * @public
	 * @return {{sdk: string, schema: string}}
	 */
	static get VERSION(){
		return {sdk: SDK_VERSION, schema: SCHEMA_VERSION};
	}

	/**
	 * The supported stream types
	 * @public
	 * @returns {StreamType}
	 */
	static get STREAM_TYPE(){
		return {AUDIO, VIDEO, CHAT, AUDIO_VIDEO, SCREEN_SHARING, CALL};
	}
}

module.exports = Reach;

// Polyfills for WebRTC


// TODO 19k minified, we can do less maybe
/*eslint-disable no-unused-vars*/
import adapterjs from 'adapterjs';
/*eslint-enable no-unused-vars*/

import actions from './actions';
import datarefs from './datarefs';
import reach from './reach';
import room from './room';
import webrtcmngr from './webrtcmngr.js';

const SDK_VERSION = '0.0.1';

export default class ComSDK {
	constructor(url) {
		this.datarefs = datarefs(url);
		this.webrtcmngr = webrtcmngr(this.datarefs);
	}

	Room(...args) {
		return room(...args, this.datarefs, this.webrtcmngr);
	}

	Reach(...args) {
		return reach(...args, this.datarefs);
	}

	static get SDK_VERSION() {
		return SDK_VERSION;
	}
	static get actions() {
		return actions;
	}
}
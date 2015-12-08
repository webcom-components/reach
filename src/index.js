// Polyfills for WebRTC


// TODO 19k minified, we can do less maybe
/* eslint no-unused-vars:0 */
import adapterjs from './adapter';

import actions from './actions';
import datarefs from './datarefs';
import reach from './reach';
import room from './room';
import webrtcmngr from './webrtcmngr';

const SDK_VERSION = '0.0.1';

export class Reach {
	constructor(url= 'http://webcom.orange.com/base/webrtc') {
		this.datarefs = datarefs(url);
		this.webrtcmngr = webrtcmngr(this.datarefs);
	}

	Room(...args) {
		return room(...args, this.datarefs, this.webrtcmngr);
	}

	Reach(...args) {
		return reach(...args, this.datarefs);
	}

	static get version() {
		return SDK_VERSION;
	}
	static get actions() {
		return actions;
	}
}

module.exports = Reach;
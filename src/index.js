// Polyfills for WebRTC


// TODO 19k minified, we can do less maybe
/* eslint no-unused-vars:0 */
import adapterjs from './adapter';

import actions from './actions';
import datarefs from './datarefs';
import reach from './reach';
import room from './room';
import webrtcmngr from './webrtcmngr';

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
		return SDK_VERSION; // eslint-disable-line no-undef
	}
	static get actions() {
		return actions;
	}
}

module.exports = Reach;
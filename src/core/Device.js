/**
 * User device
 * @access protected
 */
export default class Device {
	/**
	 * Create a device
	 * @param {Webcom/api.DataSnapshot|object} snapData The data snapshot
	 * @access protected
	 */
	constructor(snapData) {
		let values = snapData;
		if(snapData && snapData.val && typeof snapData.val === 'function'){
			values = Object.assign(snapData.val() || {}, {uid: snapData.name()});
		}
		/**
		 * Device's unique id
		 * @type string
		 */
		this.uid = values.uid;
		/**
		 * Device's OS
		 * @type {string}
		 */
		this.os = values.os;
		/**
		 * Device's userAgent
		 * @type {string}
		 */
		this.userAgent = values.userAgent;
		/**
		 * Device's last know status
		 * - CONNECTED
		 * - NOT_CONNECTED
		 * - SLEEPING
		 * @type {string}
		 */
		this.status = values.status;
		/**
		 * Device's sdk
		 * @type {{reach: string, webcom: string}}
		 */
		this.sdk = values.sdk;
		// TODO Add 'extra' property for unrestricted additional information ?
	}
}
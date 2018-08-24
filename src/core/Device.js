import * as DataSync from './util/DataSync';
import * as Log from './util/Log';

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
		const values = Object.assign({}, snapData.val());
		/**
		 * Device's unique id
		 * @type string
		 */
		this.uid = snapData.name();
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
		// TODO #Feat: Add 'extra' property for unrestricted additional information ?
	}


	/**
	 * Get a device by its user uid and its uid
	 * @access private
	 * @param {string} userUid The user's uid
	 * @param {string} deviceUid The device's uid
	 * @returns {Promise<Device, Error>}
	 */
	static get(userUid, deviceUid) {
		// due to the problem of long list, some uid (uid of participant)
		// can have a : instead of /
		const newUid = userUid.replace(/:/g,'/');
		return DataSync.get(`_/devices/${newUid}/${deviceUid}`)
		.then(snapData => snapData ? new Device(snapData) : null)
		.catch(Log.r('Device#get'));
	}

}

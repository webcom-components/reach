import * as DataSync from './util/DataSync';
import cache from './util/cache';
import * as Log from './util/Log';
import Room from './Room';
import Device from './Device';
import {CONNECTED, NOT_CONNECTED} from './util/constants';

let initializing = false;

/**
 * User informations
 * @public
 */
export default class User {
	/**
	 * Create a user
	 * @param {Webcom/api.DataSnapshot|object} snapData The data snapshot
	 * @access protected
	 */
	constructor(snapData) {
		const values = Object.assign({}, snapData.val());
		/**
		 * User's unique id
		 * @type string
		 */
		this.uid = snapData.name();
		/**
		 * User's display name
		 * @type {string}
		 */
		this.name = values.name;
		/**
		 * User's status
		 * @type {string}
		 */
		this.status = values.status;
		/**
		 * User's last know connection ts
		 * @type {number}
		 */
		this.lastSeen = values.lastSeen;
		// TODO #Feat: Add 'extra' property for unrestricted additional information ?
	}

	/**
	 * Invite a user directly. This will create a new Room, log you in it & invite the user.
	 * @param {string} [message] a message to add to the invite
	 * @return {Promise<{room: Room, invite: Invite}, Error>}
	 */
	invite(message) {
		return Room.create(`${cache.user.uid}-${this.uid}`)
			.then(room => {
				return room.invite([this], null, message);
			})
			.then(data => {
				return {room: data.room, invite: data.invites[0]};
			})
			.catch(Log.r('User~invite'));
	}

	/**
	 * List Users's devices. Only for current user.
	 * @access protected
	 * @return {Promise<Device[], Error>}
	 */
	devices() {
		return DataSync.list(`_/devices/${this.uid}`, Device);
	}

	/**
	 * Init the current user
	 * @access protected
	 * @param {string} uid The user's uid
	 * @param {string} [name] The user's display name
	 * @returns {Promise<User, Error>}
	 */
	static init (uid, name) {
		if(!initializing) {
			initializing = true;
			const d = {status: CONNECTED, lastSeen: DataSync.ts()};
			if(name) {
				Object.assign(d, {name});
			}
			let deviceId = Webcom.INTERNAL.PersistentStorage.get(uid);
			return DataSync.update(`users/${uid}`, d)
				// Register current device
				.then(() => {
					const deviceMetadata = {
						status: CONNECTED,
						sdk: {
							reach: SDK_VERSION,
							webcom: Webcom.SDK_VERSION
						},
						userAgent: navigator.userAgent
					};
					if(deviceId) {
						return DataSync.update(`_/devices/${uid}/${deviceId}`, deviceMetadata);
					}
					return DataSync.push(`_/devices/${uid}`, deviceMetadata);
				})
				// Add Disconnect actions
				.then(deviceRef => {
					if(!deviceId) {
						deviceId = deviceRef.name();
						Webcom.INTERNAL.PersistentStorage.set(uid, deviceId);
					}
					cache.device = deviceId;
					// Remove device
					DataSync.onDisconnect(`_/devices/${uid}/${deviceId}`).update({
						status: NOT_CONNECTED
					});
					// Update user status
					DataSync.onDisconnect(`users/${uid}`).update({
						status: NOT_CONNECTED,
						lastSeen: DataSync.ts()
					});
				})
				// Get user
				.then(() => User.get(uid))
				.then(user => {
					initializing = false;
					return user;
				})
				.catch(e => {
					Log.e(e);
					initializing = false;
					return Promise.reject(e);
				});
		}
		return User.get(uid);
	}

	/**
	 * Disconnect the current user
	 * @access protected
	 * @param {string} uid The user's uid
	 * @returns {Promise}
	 */
	static disconnect(uid) {
		return DataSync.set(`_/devices/${uid}/${cache.device}/status`, NOT_CONNECTED)
			.then(() => DataSync.get(`_/devices/${uid}`))
			.then(devices => {
				// Only change user's status if no other device connected
				const hasConnectedDevices = devices.forEach(device => {
					return (new RegExp(`^${CONNECTED}$`)).test(device.val().status);
				});
				if(!hasConnectedDevices) {
					return DataSync.update(`users/${uid}`, {status: NOT_CONNECTED});
				}
				return true;
			})
			.catch(Log.r('User#disconnect'));
	}

	/**
	 * Get a user by its uid
	 * @access private
	 * @param {string} uid The user's uid
	 * @returns {Promise<User, Error>}
	 */
	static get(uid) {
		return DataSync.get(`users/${uid}`)
		.then(snapData => snapData ? new User(snapData) : null)
		.catch(Log.r('User#get'));
	}
}

import {get, set, update, push, onDisconnect} from '../util/datasync';
import ref from '../util/ref';
import createRoom from './Room';
import {CONNECTED, NOT_CONNECTED} from '../util/constants';

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
		let values = snapData;
		if(snapData && snapData.val && typeof snapData.val === 'function'){
			values = Object.assign(snapData.val() || {}, {uid: snapData.name()});
		}
		/**
		 * User's unique id
		 * @type string
		 */
		this.uid = values.uid;
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
		// TODO Add 'extra' property for unrestricted additional informations ?
	}

	/**
	 * Invite a user directly. This will create a new Room, log you in it & invite the user.
	 * @param {string} [message] a message to add to the invite
	 * @return {Promise<{room: Room, invite: Invite}, Error>}
	 */
	invite(message) {
		return createRoom(`${ref.user.uid}-${this.uid}`)
			.then(room => {
				return room.invite([this], message);
			});
	}
}

/**
 * Get a user by its uid
 * @access protected
 * @param {string} uid The user's uid
 * @returns {Promise<User, Error>}
 */
export const getUser = (uid) => {
	return get(`users/${uid}`).then(snapData => {
		return snapData ? new User(snapData) : null;
	});
};

/**
 * Update a user
 * @access protected
 * @param {string} uid The user's uid
 * @param {object} data The data
 * @returns {Promise<*, Error>}
 */
export const updateUser = (uid, data) => {
	return update(`users/${uid}`, data);
};

let initializing = false;
/**
 * Init the current user
 * @access protected
 * @param {string} uid The user's uid
 * @returns {Promise<User, Error>}
 */
export const initUser = (uid, name) => {
	if(!initializing) {
		initializing = true;
		const d = {status: CONNECTED, lastSeen: Date.now()};
		if(name) {
			Object.assign(d, {name});
		}
		return updateUser(uid, d)
			// Register current device
			.then(() => {
				return push(`_/devices/${uid}`, {
					status: CONNECTED,
					sdk: {
						reach: SDK_VERSION,
						webcom: Webcom.SDK_VERSION
					},
					userAgent: navigator.userAgent
				});
			})
			// Add Disconnect actions
			.then(deviceRef => {
				ref.device = deviceRef.name();
				// Remove device
				// TODO change status only ? Archive ?
				deviceRef.onDisconnect().remove();
				// Update user status
				onDisconnect(`users/${uid}`).update({
					status: NOT_CONNECTED,
					lastSeen: Date.now()
				});
			})
			// Get user
			.then(() => getUser(uid))
			.then(user => {
				initializing = false;
				return user;
			})
			.catch(e => {
				initializing = false;
				return Promise.reject(e);
			});
	}
	return getUser(uid);
};

/**
 * Disconnect the current user
 * @access protected
 * @param {string} uid The user's uid
 * @returns {Promise}
 */
export const disconnectUser = uid => {
	return set(`_/devices/${uid}/${ref.device}/status`, NOT_CONNECTED)
		.then(() => get(`_/devices/${uid}`))
		.then(devices => {
			// Only change user's status if no other device connected
			const hasConnectedDevices = devices.forEach(device => {
				return (new RegExp(`^${CONNECTED}$`)).test(device.val().status);
			});
			if(!hasConnectedDevices) {
				return updateUser(uid, {status: NOT_CONNECTED});
			}
			return true;
		});
};

/**
 * List the users
 * @access protected
 * @param {boolean} include Include current user in user's list
 * @returns {Promise<User[], Error>}
 */
export const listUsers = (include) => {
	return get('users').then(snapData => {
		if(snapData) {
			const users = [];
			snapData.forEach(childSnapData => {
				if(include || childSnapData.name() !== ref.user.uid) {
					users.push(new User(childSnapData));
				}
			});
			return users;
		}
		return [];
	});
};

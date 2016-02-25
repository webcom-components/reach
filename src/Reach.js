import {browser} from './adapter';
import Events from './definitions/Events';
import StreamTypes from './definitions/StreamTypes';
import ReachConfig from './definitions/ReachConfig';

/**
 * Entry point for Reach SDK
 * @public
 */
export default class Reach {
	/**
	 * Create Reach's data structure where the url points to (might not be the root of your namespace)
	 * @public
	 * @param {string|Webcom} [url=http://webcom.orange.com/base/reach] The url of your namespace or an existing Webcom reference.
	 * @param {ReachConfig} [config] Reach configuration. You can pass constraints here
	 */
	constructor(url = 'http://webcom.orange.com/base/reach', config = null) {
		/**
		 * The reference to the Reach data in your namespace
		 * @private
		 * @type {Webcom}
		 */
		this._ref = url instanceof Webcom ? url : new Webcom(url);
		/**
		 * The configuration
		 * @type {ReachConfig}
		 */
		this.config = Object.assign({}, ReachConfig, config);
	}

	/**
	 * Get versions of SDK and DataModel.The Schema version can be used to determine compatibility with the Android & iOS SDK.
	 * @return {{sdk: string, schema: string}}
	 */
	static get v() {
		return {sdk: SDK_VERSION, schema: SCHEMA_VERSION};
	}

	/**
	 * The supported stream types
	 * @returns {StreamTypes}
	 */
	static get t() {
		return StreamTypes;
	}

	/**
	 * The supported events
	 * @returns {Events}
	 */
	static get e() {
		return Events;
	}

	/**
	 * The browser's details
	 * @return {BrowserDetails}
	 */
	static get browserDetails() {
		return browser;
	}

	/**
	 * Force current User's connected status
	 * @type {string}
	 */
	set status(status) {
		// Force User's status
		return new Promise(status);
	}

	/**
	 * Get current User's connected status
	 * @type {string}
	 */
	get status() {
		return '';
	}

	/**
	 * Register a new user
	 * @param {string} email The email of the user
	 * @param {string} password The password of the user
	 * @param {string} [name] The display name of the user (defaults to email)
	 * @returns {Promise}
	 */
	register(email, password, name) {
		// Create user + login
		return new Promise({email, password, name});
	}

	/**
	 * Signin an existing user
	 * @param {string} email The email of the user
	 * @param {string} password The password of the user
	 * @returns {Promise}
	 */
	login(email, password) {
		// Update /users/{userId} & add current device in /_/devices/{userId}
		return new Promise({email, password});
	}

	/**
	 * Signin an anonymous user
	 * @param {string} name The password of the user
	 * @returns {Promise}
	 */
	anonymous(name) {
		return new Promise(name);
	}

	/**
	 * Logout current user
	 * @returns {Promise}
	 */
	logout() {
		// Update /users/{userId} & remove current device in /_/devices/{userId}
		return new Promise();
	}

	/**
	 * Get the list of registered users
	 * @return {Promise<User[], Error>}
	 */
	users() {
		return new Promise();
	}

	/**
	 * Get the list of rooms
	 * @return {Promise<Room[], Error>}
	 */
	rooms() {
		return new Promise();
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name.
	 * @param {function} callback The callback for the event
	 */
	on(event, callback) {
		switch (event) {
		case Events.USER_ADDED:
			break;
		case Events.USER_CHANGED:
			break;
		case Events.USER_REMOVED:
			break;
		case Events.ROOM_ADDED:
			break;
		case Events.ROOM_CHANGED:
			break;
		case Events.ROOM_REMOVED:
			break;
		case Events.INVITE_ADDED:
			break;
		case Events.INVITE_CHANGED:
			break;
		}
		callback();
	}
}

module.exports = Reach;

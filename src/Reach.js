import {browser} from './util/adapter';
import Events from './definitions/Events';
import StreamTypes from './definitions/StreamTypes';
import Config from './definitions/Config';
import {initUser, listUsers, disconnectUser} from './core/User';
import {createRoom, listRooms} from './core/Room';
import {on, off} from './util/datasync';
import ref from './util/ref';

/**
 * Get the path to subcribe to for a specific event ({@link Reach#on})
 * @access private
 * @param {string} event The event name
 * @returns {string}
 */
const eventPath = event => {
	let path;
	if(/^USER/.test(event)) {
		path = 'users';
	} else if(/^ROOM/.test(event)) {
		path = 'rooms';
	} else if(/^INVITE/.test(event) && this.current) {
		path = `_/invites/${this.current.uid}`;
	}
	return path;
};

/**
 * Entry point for Reach SDK
 * @public
 */
export default class Reach {
	/**
	 * Create Reach's data structure where the url points to (might not be the root of your namespace)
	 * @public
	 * @param {string|Webcom} [url=http://webcom.orange.com/base/reach] The url of your namespace or an existing Webcom reference.
	 * @param {Config} [cfg] Reach configuration. You can pass constraints here
	 */
	constructor(url = 'http://webcom.orange.com/base/reach', cfg = null) {
		// Set shared reference
		ref.base = url;
		/**
		 * Webcom DataSync reference
		 * @type {Webcom}
		 */
		this._base = ref.base;
		/**
		 * List of declared callbacks
		 * @type {Object}
		 */
		this._callbacks = {};
		/**
		 * The configuration
		 * @type {Config}
		 */
		this.config = Object.assign({}, Config, cfg);
		/**
		 * The connected User
		 * @type {User}
		 */
		this.current = ref.user = null;

		// Resume session
		if(Webcom.INTERNAL.PersistentStorage.get('session')){
			ref.base.resume((error, auth) => {
				if(auth && !this.current) {
					initUser(auth.uid).then(u => {
						this.current = ref.user = u;
					}, console.warn.bind(console));
				}
			});
		}
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
	 * @return {Events}
	 */
	static get e() {
		return Events;
	}

	/**
	 * The browser's details
	 * @return {Browser}
	 */
	static get b() {
		return browser;
	}

	/**
	 * Set the current log level
	 * @param {string} level
	 */
	static set logLevel(level) {
		ref.logLevel = level;
	}

	/**
	 * Get the current log level
	 * @return {string}
	 */
	static get logLevel() {
		return ref.logLevel;
	}

	/**
	 * Force current User's connected status
	 * @type {string}
	 */
	set status(status) {
		// Force User's status
		if(this.current) {
			this.current.status = status;
		}
	}

	/**
	 * Get current User's connected status
	 * @type {string}
	 */
	get status() {
		return this.current ? this.current.status : null;
	}

	/**
	 * Register & Sign-in as a new user
	 * @param {string} email The email of the user
	 * @param {string} password The password of the user
	 * @param {string} [name] The display name of the user (defaults to email)
	 * @param {boolean} [rememberMe=false] keep user connected ?
	 * @returns {Promise<User, Error>}
	 */
	register(email, password, name, rememberMe) {
		return ref.base.createUser(email, password)
			.then(auth => {
				if(auth) {
					return this.login(email, password, name || email, rememberMe);
				}
			});
	}

	/**
	 * Sign-in an existing user
	 * @param {string} email The email of the user
	 * @param {string} password The password of the user
 	 * @param {string} [name] The name of the user. Defaults to the value in base.
	 * @param {boolean} [rememberMe=false] keep user connected ?
	 * @returns {Promise<User, Error>}
	 */
	login(email, password, name, rememberMe = false) {
		const method = email === null && password === null ? 'authAnonymously' : 'authWithPassword';
		// Force logout to bypass Webcom bug
		let p = Promise.resolve();
		if(this.current && this.current.email !== email) {
			p = this.logout();
		}
		return p
			.then(() => {
				return ref.base[method]({email, password, rememberMe});
			})
			.then(auth => {
				return initUser(auth.uid, name);
			})
			.then(u => {
				this.current = ref.user = u;
				return u;
			});
	}

	/**
	 * Sign-in an anonymous user
	 * @param {string} name The display name of the user
	 * @experimental Not compatible with security rules for now (waiting for anonymous login support from Webcom)
	 * @returns {Promise<User, Error>}
	 */
	anonymous(name) {
		// TODO Uncomment this line when anonymous login is available #FEATURE #DATASYNC
		// return this.login(null, null, name);
		return initUser(`anonymous:${Date.now()}`, name)
			.then(u => {
				this.current = ref.user = u;
				return u;
			});
	}

	/**
	 * Logout current user
	 * @returns {Promise}
	 */
	logout() {
		return new Promise((resolve => {
			let p = Promise.resolve();
			if(this.current != null) {
				p = disconnectUser(this.current.uid);
			}
			p.then((() => {
				Object.keys(this._callbacks).forEach(event => {
					off(eventPath(event), event);
				});
				ref.base.logout((() => {
					this.current = ref.user = null;
					resolve();
				}).bind(this));
			}).bind(this));
		}).bind(this));
	}

	/**
	 * Get the list of registered users
	 * @param {boolean} [include=false] Include current user in user's list
	 * @return {Promise<User[], Error>}
	 */
	users(include = false) {
		return listUsers(include === true);
	}

	/**
	 * Get the list of rooms
	 * @return {Promise<Room[], Error>}
	 */
	rooms() {
		return listRooms();
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name:
	 * - USER_ADDED
	 * - USER_CHANGED
	 * - USER_REMOVED
	 * - ROOM_ADDED
	 * - ROOM_CHANGED
	 * - ROOM_REMOVED
	 * - INVITE_ADDED
	 * - INVITE_CHANGED
	 * @param {function} callback The callback for the event, the arguments depends on the type of event:
	 * - USER_*: callback({@link User} u [, Error e])
	 * - ROOM_*: callback({@link Room} r [, Error e])
	 * - INVITE_*: callback({@link Invite} i [, Error e])
	 */
	on(event, callback) {
		const path = eventPath(event);
		if(path) {
			on(path, event, callback);
			// TODO Should we keep a list of the callbacks ?
			this._callbacks[event].push(callback);
		}
	}

	/**
	 * Create a new room
	 * @param {string} [name] The room name
	 * @param {object} [extra] Extra informations
	 * @returns {Promise<Room, Error>}
	 */
	createRoom(name, extra) {
		return createRoom(name, extra);
	}
}

module.exports = Reach;

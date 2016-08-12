import {browser} from './definitions/Browser';
import StreamTypes from './definitions/StreamTypes';
import * as Events from './definitions/Events';
import {audio, video} from './definitions/Codec';
import User from './core/User';
import Room from './core/Room';
import Invite from './core/Invite';
import * as DataSync from './core/util/DataSync';
import cache from './core/util/cache';
import * as Log from './core/util/Log';
import Media from './core/util/Media';
import Webcom from 'webcom/webcom';

/**
 * Entry point for Reach SDK
 * @public
 */
export default class Reach {
	/**
	 * Create Reach's data structure where the url points to (might not be the root of your namespace)
	 * @public
	 * @param {string|Webcom} url The url of your namespace or an existing Webcom reference.
	 * @param {Config} [cfg] Reach configuration. You can pass constraints here
	 * @example <caption>Init with the default configuration</caption>
	 * var myReach = new Reach('https://io.datasync.orange.com/base/<my_namespace>');
	 * @example <caption>Init and set constraints for SD video and logLevel to 'info'</caption>
	 * var myReach = new Reach('https://io.datasync.orange.com/base/<my_namespace>', {
	 *  constraints: Reach.media.constraints('SD'),
	 *  logLevel: 'INFO'
	 * });
	 */
	constructor(url, cfg = null) {
		// Set shared reference
		cache.base = url;
		// Set shared configuration
		cache.config = cfg;
		/**
		 * List of declared callbacks
		 * @type {Object}
		 */
		this._callbacks = {};
	}

	/**
	 * Get versions of SDK and DataModel.The Schema version can be used to determine compatibility with the Android & iOS SDK.
	 * @return {{sdk: string, schema: string}}
	 */
	static get version() {
		return {sdk: SDK_VERSION, schema: SCHEMA_VERSION};
	}

	/**
	 * The supported stream types
	 * @returns {StreamTypes}
	 */
	static get types() {
		return StreamTypes;
	}

	/**
	 * The supported events
	 * @return {{room: Events/Room, reach: Events/Reach, stream: Events/Stream}}
	 */
	static get events() {
		return {room: Events.room, reach: Events.reach, stream: Events.stream, invite: Events.invite};
	}

	/**
	 * The browser's details
	 * @return {Browser}
	 */
	static get browser() {
		return browser;
	}

	/**
	 * Media utility functions
	 * @return {Media}
	 */
	static get media() {
		return Media;
	}

	/**
	 * The codec presets to use when setting {@link Config#preferredAudioCodec} or {@link Config#preferredVideoCodec}
	 * @return {{audio: Codec/audio, video: Codec/video}}
	 */
	static get codecs() {
		return {audio, video};
	}
	/**
	 * DataSync reference
	 * @type {Webcom}
	 */
	get base() {
		return cache.base;
	}

	/**
	 * The configuration
	 * @type {Config}
	 */
	get config() {
		return cache.config;
	}

	/**
	 * The connected User
	 * @type {User}
	 */
	get current() {
		return cache.user;
	}

	/**
	 * Register & Sign-in as a new user
	 * @param {string} email The email of the user
	 * @param {string} password The password of the user
	 * @param {string} [name] The display name of the user (defaults to email)
	 * @param {boolean} [rememberMe=false] keep user connected ?
	 * @returns {Promise<User>}
	 */
	register(email, password, name, rememberMe) {
		return cache.base.createUser(email, password)
			.then(auth => {
				if(auth) {
					return this.login(email, password, name || email, rememberMe);
				}
			})
			.catch(Log.r('Reach~register'));
	}

	/**
	 * Sign-in an existing user
	 * @param {string} email The email of the user
	 * @param {string} password The password of the user
 	 * @param {string} [name] The name of the user. Defaults to the value in base.
	 * @param {boolean} [rememberMe=false] keep user connected ?
	 * @returns {Promise<User>}
	 */
	login(email, password, name, rememberMe = false) {
		const method = email === null && password === null ? 'authAnonymously' : 'authWithPassword';
		// Force logout to bypass Webcom bug
		let p = Promise.resolve();
		if(this.current && this.current.email !== email) {
			p = this.logout();
		}
		return p
			.then(() => cache.base[method]({email, password, rememberMe}))
			.then(auth => User.init(auth.uid, name))
			.then(u => {
				cache.user = u;
				return u;
			})
			.catch(Log.r('Reach~login'));
	}

	/**
	 * Resume previous session
	 * @returns {Promise<User>}
	 */
	resume() {
		return new Promise((resolve, reject) => {
			// Resume session
			if(Webcom.INTERNAL.PersistentStorage.get('session')){
				cache.base.resume((error, auth) => {
					if(auth && !this.current) {
						User.init(auth.uid).then(u => {
							cache.user = u;
							resolve(u);
						}, reject);
					}
				});
			} else {
				reject(new Error('No session to resume'));
			}
		});
	}

	/**
	 * Sign-in an anonymous user
	 * @param {string} name The display name of the user
	 * @experimental Not compatible with security rules for now (waiting for anonymous login support from Webcom)
	 * @returns {Promise<User>}
	 */
	anonymous(name) {
		// HACK #Feat #DataSync Uncomment this line when anonymous login is available
		// return this.login(null, null, name);
		return User.init(`anonymous:${Date.now()}`, name)
			.then(u => {
				cache.user = u;
				return u;
			})
			.catch(Log.r('Reach~anonymous'));
	}

	/**
	 * Logout current user
	 * @returns {Promise}
	 */
	logout() {
		return new Promise((resolve, reject) => {
			let p = Promise.resolve();
			if(this.current != null) {
				p = User.disconnect(this.current.uid);
			}
			p.then(() => {
				Object.keys(this._callbacks).forEach(
					event => DataSync.off(Events.reach.toPath(event)(cache.user), event)
				);
				cache.base.logout(() => {
					cache.user = null;
					resolve();
				});
			})
			.catch(e => {
				Log.e(e);
				reject(e);
			});
		});
	}

	/**
	 * Get the list of registered users
	 * @experimental Since 'search' and 'paging' features are not yet implemented in DataSync, this call can lead to a lot data being exchanged over the WebSocket.
	 * Avoid it if your users base is pretty large.
	 * @param {boolean} [include=false] Include current user in user's list
	 * @return {Promise<User[], Error>}
	 */
	users(include) {
		return DataSync.list('users', User)
			.then(users => {
				return !include && users && this.current ? users.filter(user => user.uid !== this.current.uid) : users;
			})
			.catch(Log.r('Reach~users'));
	}

	/**
	 * Get the list of rooms
	 * @return {Promise<Room[], Error>}
	 */
	rooms() {
		return DataSync.list('rooms', Room)
			.catch(Log.r('Reach~rooms'));
	}

	/**
	 * Get the list of invites
	 * @return {Promise<Invite[], Error>}
	 */
	invites() {
		if(!this.current) {
			return Promise.reject(new Error('Cannot list invites without a User being logged in.'));
		}
		return DataSync.list(`_/invites/${this.current.uid}`, Invite)
			.catch(Log.r('Reach~invites'));
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name ({@link Events/Reach}). Can be:
	 * - USER_ADDED
	 * - USER_CHANGED
	 * - USER_REMOVED
	 * - ROOM_ADDED
	 * - ROOM_CHANGED
	 * - ROOM_REMOVED
	 * - INVITE_ADDED
	 * - INVITE_CHANGED
	 * @param {function} callback The callback for the event, the arguments depends on the type of event:
	 * - USER_*: callback({@link User} u)
	 * - ROOM_*: callback({@link Room} r)
	 * - INVITE_*: callback({@link Invite} i)
	 * @param {Webcom/api.Query~cancelCallback} [cancelCallback] The error callback for the event, takes an Error as only argument
	 */
	on(event, callback, cancelCallback) {
		const path = Events.reach.toPath(event)(cache.user);
		if(path) {
			const cls = Events.reach.toClass(event);
			const cb = snapData => {
				const d = cls ? new cls(snapData) : null;
				Log.i(`Reach~on(${event})`, d);
				callback(d);
			};
			DataSync.on(path, event, cb, cancelCallback);
			if(!this._callbacks[event]) {
				this._callbacks[event] = [];
			}
			this._callbacks[event].push(cb);
		}
	}

	/**
	 * Create a new room
	 * @param {string} [name] The room name
	 * @param {object} [extra] Extra informations
	 * @returns {Promise<Room>}
	 */
	createRoom(name, extra) {
		if(!this.current) {
			return Promise.reject(new Error('Cannot create a Room without a User being logged in.'));
		}
		return Room.create(name, extra);
	}

	/**
	 * Get a list of all opened {@link PeerConnection}s
	 * @return {*}
	 */
	get peerConnections () {
		return cache.peerConnections.stacks;
	}

	/**
	 * Get a {@link Room} from its `uid`
	 * @param {string} uid The room's UID
	 * @returns {Promise.<Room>}
	 */
	getRoom (uid) {
		return Room.get(uid);
	}

	/**
	 * Get a {@link User} from its `uid`
	 * @param {string} uid The user's UID
	 * @returns {Promise.<User>}
	 */
	getUser (uid) {
		return User.get(uid);
	}
}

module.exports = Reach;

let _ref = null;

/**
 * Singleton to handle shared references
 * @protected
 */
class RefManager {
	constructor() {
		if(!_ref) {
			_ref = this;
		}
		return _ref;
	}
	/**
	 * The base reference
	 * @param {string|Webcom} url the reference or its url
	 * @type {Webcom}
	 */
	set base(url) {
		this._base = url instanceof Webcom ? url : new Webcom(url);
	}
	/**
	 * The base reference
	 * @type {Webcom}
	 */
	get base() {
		return this._base;
	}
	/**
	 * The connected user
	 * @param {User} user the connected user
	 * @type {User}
	 */
	set user(user) {
		this._user = user;
	}
	/**
	 * The connected user
	 * @type {User}
	 */
	get user() {
		return this._user;
	}
	/**
	 * The current device
	 * @param {String} user the current device
	 * @type {String}
	 */
	set device(device) {
		this._device = device;
	}
	/**
	 * The current device
	 * @type {String}
	 */
	get device() {
		return this._device;
	}
}


const ref = new RefManager();

/**
 * Singleton for shared references
 * @protected
 */
export default ref;

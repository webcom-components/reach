import media from './util/Media';
import * as DataSync from './util/DataSync';
import * as Log from './util/Log';
import cache from './util/cache';


/**
 * The Reach configuration object
 * @class Config
 */
export default class Config {
	/**
	 * Create configuration
	 * @access protected
	 * @param obj
	 */
	constructor(obj) {
		/**
		 * The default media constraints. These can be overridden when subscribing to a stream.
		 * @type {MediaStreamConstraints}
		 */
		this.constraints = null;

		/**
		 * The preferred video Codec. Can be the name of the preferred codec or a list sorted by priority
		 * @experimental Not implemented yet
		 * @type {string|string[]}
		 */
		this.preferredVideoCodecs = null;

		/**
		 * The preferred audio Codec. Can be the name of the preferred codec or a list sorted by priority
		 * @experimental Not implemented yet
		 * @type {string|string[]}
		 */
		this.preferredAudioCodecs = null;

		// Populate with default values
		this.reset();

		// Populate with data
		obj && this.assign(obj);

		// Read ICE servers from server
		DataSync.get('_/ice').then(snapData => {
			if(snapData) {
				this.iceServers = snapData.val();
				Log.i('ICEServers', this.iceServers.length > 0 ? this.iceServers : 'None');
			}
		}, e => Log.d('ICEServers', e));

		//TODO Add container nodes, boolean to request permission on start, preferred codecs
	}

	/**
	 * Assign new conf values
	 * @access protected
	 * @param {object} obj the new conf values
	 */
	assign(obj) {
		Object.keys(obj || {}).forEach(key => {this[key] = obj[key];});
	}

	/**
	 * The log level (DEBUG, INFO, WARN, ERROR)
	 * @type {string}
	 */
	set logLevel(level) {
		cache.logLevel = level;
	}

	/**
	 * The log level (DEBUG, INFO, WARN, ERROR)
	 * @returns {string}
	 */
	get logLevel() {
		return cache.logLevel;
	}

	/**
	 * List of TURN/STUN servers to use for ICE. This list will be merged with the ICE servers declared in the namespace (**_/ice**).
	 * @type {ICEServer[]}
	 */
	set iceServers(servers) {
		Log.d('Config~set~iceServers', servers);
		if(!this._iceServers) {
			this._iceServers = [].concat(servers || []);
		} else {
			this._iceServers = this._iceServers.concat(
				(servers || []).filter(server =>
					this._iceServers.some(iceServer =>
						(iceServer.urls === server.urls || iceServer.url === server.url)&&
						iceServer.username === server.username &&
						iceServer.credential === server.credential
					)
				)
			);
		}
	}

	/**
	 * List of TURN/STUN servers to use for ICE. This list will be merged with the ICE servers declared in the namespace (**_/ice**).
	 * @type {ICEServer[]}
	 */
	get iceServers() {
		return this._iceServers || [];
	}

	/**
	 * Resets configuration to default values
	 * @protected
	 */
	reset () {
		this.assign({
			constraints: media.constraints(),
			logLevel: 'ERROR'
		});
	}
}
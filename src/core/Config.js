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
		 * The preferred video Codec. Takes a RegExp matching the codec name and sample rate.
		 * Predefined values can be found in {@link Codec/video}
		 * @type {RegExp}
		 * @example <caption>Prefer VP9</caption>
		 * var myReach = new Reach('https://io.datasync.orange.com/base/<my_namespace>', {
		 *  preferredVideoCodec: Reach.codecs.video.VP9
		 * });
		 */
		this.preferredVideoCodec = null;

		/**
		 * The preferred audio Codec. Takes a RegExp matching the codec name and sample rate.
		 * Predefined values can be found in {@link Codec/audio}
		 * @type {RegExp}
		 * @example <caption>Prefer opus</caption>
		 * var myReach = new Reach('https://io.datasync.orange.com/base/<my_namespace>', {
		 *  preferredAudioCodec: Reach.codecs.audio.OPUS
		 * });
		 */
		this.preferredAudioCodec = null;

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

		//TODO Add container nodes, boolean to request permission on start, sdpEditor (for user defined SDP modifications)
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
		if(servers) {
			if (!this._iceServers) {
				/**
				 * @ignore
				 */
				this._iceServers = [].concat(servers || []);
			} else {
				this._iceServers = this._iceServers.concat(
					(servers || []).filter(server =>
						this._iceServers.some(iceServer =>
							(iceServer.urls === server.urls || iceServer.url === server.url) &&
							iceServer.username === server.username &&
							iceServer.credential === server.credential
						)
					)
				);
			}
		}
	}

	/**
	 * List of TURN/STUN servers to use for ICE. This list will be merged with the ICE servers declared in the namespace (**_/ice**).
	 * @type {ICEServer[]}
	 */
	get iceServers() {
		return this._iceServers || [
			{
				username: 'admin',
				credential: 'webcom1234',
				urls: [
					'turns:turn1.webcom.orange.com:443',
					'turns:turn2.webcom.orange.com:443',
					'turns:turn3.webcom.orange.com:443',
					'turn:turn1.webcom.orange.com',
					'turn:turn2.webcom.orange.com',
					'turn:turn3.webcom.orange.com'
				]
			}
		];
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
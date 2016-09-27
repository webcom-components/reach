import cache from '../util/cache';
import * as DataSync from '../util/DataSync';
import * as Log from '../util/Log';
import * as Events from '../../definitions/Events';

/**
 * A published Stream
 * @public
 */
export default class Remote {
	/**
	 * @access protected
	 * @param {object} values
	 */
	constructor(values) {
		Log.d('Remote~new', values);
		/**
		 * The uid of the room the stream is published in
		 * @type {string}
		 */
		this.roomId = values.roomId;
		/**
		 * The uid of this stream
		 * @type {string}
		 */
		this.uid = values.uid;
		/**
		 * The uid of the publisher of the stream
		 * @type {string}
		 */
		this.from = values.from;
		/**
		 * The type of the stream
		 * @type {string}
		 */
		this.type = values.type;
		/**
		 * @type {string}
		 */
		this.device = values.device;
		/**
		 * The local DOM container element where the {@link Local~media} is displayed
		 * @type {Element}
		 */
		this.container = cache.config.remoteStreamContainer;
		/**
		 * @type {{audio: boolean, video: boolean}}
		 */
		this.muted = Object.assign({audio: false, video: false}, values.muted);
		/**
		 * List of callbacks for mute status change
		 * @type {{MUTE: function[]}}
		 * @private
		 */
		this._callbacks = {};
		/**
		 * PeerConnections associated to this remote stream
		 * @type {PeerConnection}
		 */
		this.peerConnection = null;
	}

	/**
	 * DOM element where the MediaStream is displayed
	 * @returns {Element}
	 */
	get node() {
		return this.peerConnection ? this.peerConnection.node : null;
	}

	/**
	 * Subscribe to the stream
	 * @param {Element} [remoteStreamContainer] The element the stream is attached to. Can be null if already specified in ReachConfig.
	 * @returns {Promise}
	 */
	subscribe(remoteStreamContainer) {
		if(!cache.user) {
			return Promise.reject(new Error('Only an authenticated user can subscribe to a Room\'s stream.'));
		}
		// TODO: Test if not already subscribed ?
		this.container = remoteStreamContainer || cache.config.remoteStreamContainer;
		Log.d('Remote~subscribe', this.container);
		return cache.peerConnections.answer(this, this.container)
			.then(pc => {this.peerConnection = pc;})
			.then(() => DataSync.update(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`, {
				to: cache.user.uid,
				_created: DataSync.ts()
			}))
			.then(() => {
				let subscribed = false;
				DataSync.on(`_/rooms/${this.roomId}/streams/${this.uid}`, 'value', snapData => {
					const values = snapData.val();
					Log.d('Remote~updated', values);
					if(values) {
						// Update type
						this.type = values.type;
						// Update mute status
						const muted = values.muted;
						if(muted && (muted.audio !== this.muted.audio || muted.video !== this.muted.video)) {
							this.muted = muted;
							Log.w(this._callbacks[Events.stream.MUTE]);
							(this._callbacks[Events.stream.MUTE] || []).forEach(cb => cb(this.muted));
						}
						subscribed = true;
					} else if(subscribed) {
						Log.i('Remote#removed', this);
						this._close(true);
					}
				});
			})
			.catch(Log.r('Remote~subscribe'));
	}

	/**
	 * Unsubscribe from the stream
	 * @returns {Promise}
	 */
	unSubscribe() {
		return this._close(false);
	}

	/**
	 * Close the remote Stream
	 * @param {boolean} remote Close is initiated by publisher
	 * @returns {*}
	 * @private
	 */
	_close(remote) {
		// Stop listening to stream modifications
		DataSync.off(`_/rooms/${this.roomId}/streams/${this.uid}`, 'value');
		// Un-subscribe
		!remote && DataSync.remove(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`);
		// Close PeerConnection
		return Promise.resolve(cache.peerConnections.close(this.uid, this.device));
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name ({@link Events/Stream})
	 * @param {function} callback The callback for the event
	 */
	on(event, callback) {
		if(Events.stream.supports(event)) {
			if(!this._callbacks[event]) {
				this._callbacks[event] = [];
			}
			this._callbacks[event].push(callback);
		}
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} [event] The event name ({@link Events/Stream})
	 * @param {function} [callback] The callback for the event
	 */
	off(event, callback) {
		if(!event) {
			this._callbacks = {};
		} else if(Events.stream.supports(event)) {
			if(!callback) {
				this._callbacks[event] = [];
			} else {
				this._callbacks[event] = this._callbacks[event].filter(cb => cb !== callback);
			}
		}
	}

	/**
	 * @access protected
	 * @param {object} values
	 */
	update(values) {
		Object.keys(values).forEach(key => {this[key] = values[key];});
	}
}

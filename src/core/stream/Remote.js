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
		 * @type {Element}
		 */
		this.node = null;
		/**
		 * The local DOM container element where the {@link Local~media} is displayed
		 * @type {Element}
		 */
		this.container = values.remoteStreamElement || cache.config.localStreamElement;
		/**
		 * @type {{audio: boolean, video: boolean}}
		 */
		this.muted = Object.assign({audio: false, video: false}, values.muted);
	}

	/**
	 * Subscribe to the stream
	 * @param {Element} [remoteStreamElement] The element the stream is attached to. Can be null if already specified in ReachConfig.
	 * @returns {Promise}
	 */
	subscribe(remoteStreamElement) {
		// TODO Test if not already subscribed ?
		Log.d('Remote~subscribe', remoteStreamElement);
		if(remoteStreamElement) {
			this.node = remoteStreamElement;
		}
		return cache.peerConnections.answer(this, remoteStreamElement)
			.then(() => DataSync.update(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`, {
				to: cache.user.uid,
				_created: DataSync.ts()
			}))
			.then(() => {
				let initialized = false;
				DataSync.on(`_/rooms/${this.roomId}/streams/${this.uid}`, 'value', snapData => {
					const values = snapData.val();
					Log.d('Remote~updated', values);
					if(values) {
						// Update type
						this.type = values.type;
						// Update mute status
						if(values.muted.audio !== this.muted.audio || values.muted.video !== this.muted.video) {
							this.muted = values.muted;
							(this._callbacks[Events.stream.MUTE] || []).forEach(cb => cb(this.muted));
						}


					} else if(initialized) {
						Log.i('Remote#removed', this);
						this.unSubscribe();
					}
					initialized = true;
				});
			})
			.catch(Log.r);
	}

	/**
	 * Unsubscribe from the stream
	 * @returns {Promise}
	 */
	unSubscribe() {
		// Stop display
		if(this.node) {
			this.node.stop && this.node.stop();
			this.node.srcObject = null;
		}
		// Un-subscribe
		DataSync.remove(`_/rooms/${this.roomId}/subscribers/${this.uid}/${cache.device}`);
		// Stop listening to stream modifications
		DataSync.off(`_/rooms/${this.roomId}/streams/${this.uid}`, 'value');
		// Close PeerConnection
		return cache.peerConnections.close(this.uid, this.device);
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
}

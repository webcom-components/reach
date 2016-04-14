import Stream from './Stream';

/**
 * A published Stream
 * @public
 */
export default class RemoteStream extends Stream {
	/**
	 * Stream constructor
	 * @access protected
	 * @param {Room} room the room where this stream is published
	 * @param {string} from the uid of the publisher
	 * @param {string} type the type of the Stream
	 * @param {string} deviceId the id of the device
	 */
	constructor(room, from, type, deviceId) {
		super();
		/**
		 * @type {Room}
		 */
		this.room = room;
		/**
		 * @type {string}
		 */
		this.from = from;
		/**
		 * @type {string}
		 */
		this.type = type;
		/**
		 * @type {string}
		 */
		this.deviceId = deviceId;
	}

	/*
	 * Subscribe to the stream
	 * @param {?Element} remoteStreamElement The element the stream is attached to. Can be null if already specified in ReachConfig.
	 * @param {?MediaConstraints} constraints The stream constraints. If not defined the constraints defined in ReachConfig will be used.
	 * @returns {Promise}
	 */
	subscribe(remoteStreamElement, constraints) {
		console.log(remoteStreamElement, constraints);
		return Promise.resolve();
	}

	/*
	 * Unsubscribe from the stream
	 * @returns {Promise}
	 */
	unSubscribe() {
		return Promise.resolve();
	}
}

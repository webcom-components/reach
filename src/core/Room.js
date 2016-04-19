import {NONE, OPENED, CONNECTED, WAS_CONNECTED, OWNER} from '../util/constants';
import {get, on, off, push, update, set} from '../util/datasync';
import ref from '../util/ref';
import StreamTypes from '../definitions/StreamTypes';

/**
 * Get the path associated to a Room for a specific event
 * @param {string} event The event name
 * @param {string} uid The room id
 * @access private
 */
const eventPath = (event, uid) => {
	let path;
	if(/^PARTICIPANT/.test(event)) {
		path = `_/rooms/${uid}/participants`;
	} else if(/^MESSAGE/.test(event)) {
		path = `_/rooms/${uid}/messages`;
	} else if(/^STREAM/.test(event)) {
		path = `_/rooms/${uid}/streams`;
	}
	return path;
};

/**
 * Room informations
 * @access public
 */
export default class Room {
	/**
	 * Create a room
	 * @param {Webcom/api.DataSnapshot|Object} snapData The data snapshot
	 * @access protected
	 */
	constructor(snapData) {
		let values = snapData;
		if(snapData && snapData.val && typeof snapData.val === 'function'){
			values = Object.assign(snapData.val() || {}, {uid: snapData.name()});
		}
		/**
		 * The room unique id
		 * @type {string}
		 */
		this.uid = values.uid;
		/**
		 * The room name
		 * @type {string}
		 */
		this.name = values.name;
		/**
		 * The room owner uid
		 * @type {string}
		 */
		this.owner = values.owner;
		/**
		 * The room status
		 * @type {RoomStatus}
		 */
		this.status = values.status;

		/**
		 * Additional room informations
		 * @type {Object}
		 */
		this.extra = values.extra;
	}

	/**
	 * Get the list of participants.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @returns {Promise<Participant[], Error>}
	 */
	participants() {
		return get(`_/rooms/${this.uid}/participants`);
	}

	/**
	 * Get the list of messages.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @return {Promise<Message[], Error>}
	 */
	messages() {
		return get(`_/rooms/${this.uid}/messages`);
	}

	/**
	 * Get the list of published streams.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @return {Promise<Stream[], Error>}
	 */
	streams() {
		return get(`_/rooms/${this.uid}/streams`);
	}

	/**
	 * Invite users to the room. this will only work if the current User is the owner or a moderator of this Room.
	 * This will create the invitation and add the user to the participants list.
	 * @param {User[]} users the users to invite
	 * @param {string} [role='NONE'] the role of the invitee
	 * @param {string} [message] a message to add to the invite
	 * @return {Promise<{room: Room, invite: Invite}, Error>}
	 */
	invite(users, role = NONE, message) {
		return Promise.resolve({users, role, message});
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name:
	 * - PARTICIPANT_ADDED: a participant is added to the room
	 * - PARTICIPANT_CHANGED: a participant changes his status (join)
	 * - PARTICIPANT_REMOVED: a participant leave the room
	 * - MESSAGE_ADDED: new instant message
	 * - MESSAGE_CHANGED: an existing message has been modified (moderation)
	 * - MESSAGE_REMOVED: a message has been removed (moderation)
	 * - STREAM_PUBLISHED: a participant puslished a new Stream
	 * - STREAM_CHANGED: a participant changes his published Stream (moderation, type...)
	 * - STREAM_UNPUBLISHED: a participant stops the publication of his Stream
	 * @param {function} callback The callback for the event, the arguments depends on the type of event:
	 * - PARTICIPANT_* : callback({@link Participant} p [, Error e])
	 * - MESSAGE_* : callback({@link Message} m [, Error e])
	 * - STREAM_* : callback({@link Stream} s [, Error e])
	 */
	on(event, callback) {
		const path = eventPath(event, this.uid);
		if(path) {
			on(path, event, callback);
			// TODO Should we keep a list of the callbacks ? Or just a list of subscribed events ?
			this._callbacks[event].push(callback);
		}
	}

	/**
	 * Send an instant message
	 * @param {string} message The message to senda
	 * @return {Promise}
	 */
	sendMessage(message) {
		return Promise.resolve(message);
	}

	/**
	 * Publish a local stream
	 * @param {string} type The stream type, see {@link StreamTypes} for possible values
	 * @param {?Element} localStreamElement The element the stream is attached to. Can be null if already specified in ReachConfig.
	 * @param {?MediaConstraints} constraints The stream constraints. If not defined the constraints defined in ReachConfig will be used.
	 * @returns {Promise<Stream, Error>}
	 */
	publishStream(type, localStreamElement, constraints) {
		return Promise.resolve({type, localStreamElement, constraints});
	}

	/**
	 * Unpublish a local stream
	 * @param {Stream|string} stream The stream to unpublish or the id of Stream
	 * @returns {Promise}
	 */
	unPublishStream(stream) {
		return Promise.resolve(stream);
	}

	/**
	 * Mute a track of a Stream
	 * @param {Stream|string} stream The stream to unpublish or the id of Stream
	 * @param {string} track The track to mute. (AUDIO, VIDEO)
	 * @param {boolean} [state=true] true for mute & false for unmute
	 */
	mute(stream, track, state = true) {
		console.info(state ? 'mute' : 'unmute', stream, track, state);
	}

	/**
	 * Unmute a track of a Stream
	 * @param {Stream|string} stream The stream to unpublish or the id of Stream
	 * @param {string} track The track to mute. (audio, video)
	 */
	unmute(stream, type) {
		this.mute(stream, type, false);
	}

	/**
	 * Mute audio of a Stream
	 * @param {Stream|string} stream The stream to unpublish or the id of Stream
	 * @param {boolean} [state=true] true for mute & false for unmute
	 */
	muteAudio(stream, state = true) {
		this.mute(stream, StreamTypes.AUDIO, state);
	}

	/**
	 * Unmute audio of a Stream
	 * @param {Stream|string} stream The stream to unpublish or the id of Stream
	 */
	unmuteAudio(stream) {
		this.muteAudio(stream, false);
	}

	/**
	 * Mute video of a Stream
	 * @param {Stream|string} stream The stream to unpublish or the id of Stream
	 * @param {boolean} [state=true] true for mute & false for unmute
	 */
	muteVideo(stream, state = true) {
		this.mute(stream, StreamTypes.VIDEO, state);
	}

	/**
	 * Unmute video of a Stream
	 * @param {Stream|string} stream The stream to unpublish or the id of Stream
	 */
	unmuteVideo(stream) {
		this.muteVideo(stream, false);
	}

	/**
	 * Join the room. Sets the connected status of the current participant to CONNECTED.
	 * @return {Promise}
	 */
	join() {
		return update(`_/rooms/${this.uid}/participants/${ref.user.uid}`, {
			status: CONNECTED,
			_joined: Date.now()
		});
	}

	/**
	 * Leave the room. Sets the connected status of the current participant to NOT_CONNECTED, deletes medias and callbacks, then close WebRTC stacks in use.
	 * @return {Promise}
	 */
	leave() {
		// Disconnect user's callbacks
		Object.keys(this._callbacks).forEach(event => {
			const path = eventPath(event, this.uid);
			if(path) {
				off(path, event);
			}
		});
		// TODO Disconnect streams (both published & subscribed)

		// Update status
		// TODO remove instead ?
		return set(`_/rooms/${this.uid}/participants/${ref.user.uid}/status`, WAS_CONNECTED);
	}

	/**
	 * Close the Room. Only the owner/moderator can close a room.
	 * @param {boolean} [archive=true] Archive all room infos
	 * @return {Promise}
	 */
	close(archive = true) {
		return Promise.resolve(archive);
	}
}

/**
 * List the rooms
 * @access protected
 * @param {User} owner The current user. (i.e. the connected user)
 * @returns {Promise<Room[], Error>}
 */
export const listRooms = () => {
	return get('rooms').then(snapData => {
		if(snapData) {
			const rooms = [];
			snapData.forEach(childSnapData => {rooms.push(new Room(childSnapData));});
			return rooms;
		}
		return [];
	});
};

/**
 * Create a room
 * @access protected
 * @param {String} [name] The room name
 * @param {object} [extra=null] Extra informations
 * @returns {Promise<Room, Error>}
 */
export const createRoom = (name, extra = null) => {
	if(!ref.user) {
		return Promise.reject(new Error('Cannot create a Room without a User being logged in.'));
	}
	const roomMetaData = {
		owner: ref.user.uid,
		status: OPENED,
		_created: Date.now(),
		name: name || `${ref.user.name}-${Date.now()}`,
		extra
	};

	// Create public room infos
	return push('rooms', roomMetaData)
		.then(roomRef => {
			// Create private room infos
			const roomId = roomRef.name();
			return update(`_/rooms/${roomId}/meta`, {
				owner: ref.user.uid,
				name
			}).then(() => roomId);
		})
		.then(roomId => {
			// Join the room
			// TODO move join to another helper ?
			// TODO add onDisconnect actions
			return update(`_/rooms/${roomId}/participants/${ref.user.uid}`, {
				status: CONNECTED,
				role: OWNER,
				_joined: Date.now()
			}).then(() => roomId);
		}).then(roomId => {
			return new Room(Object.assign({uid: roomId}, roomMetaData));
		});
};

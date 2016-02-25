/**
 * Room informations
 * @public
 */
export default class Room {
	/**
	 * Get the room unique id
	 * @type {string}
	 */
	get uid(){
		return '';
	}

	/**
	 * Get the room name
	 * @type {string}
	 */
	get name(){
		return '';
	}

	/**
	 * Get the room owner uid
	 * @type {string}
	 */
	get owner() {
		return '';
	}
	/**
	 * Get the room status
	 * @type {RoomStatus}
	 */
	get status() {
		return '';
	}

	/**
	 * Get the list of participants.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @returns {Promise<Participant[], Error>}
	 */
	participants() {
		return new Promise();
	}

	/**
	 * Get the list of messages.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @return {Promise<Message[], Error>}
	 */
	messages() {
		return new Promise();
	}

	/**
	 * Get the list of published streams.
	 * This will only work if the user is either a participant or the owner of the room.
	 * @return {Promise<Stream[], Error>}
	 */
	streams() {
		return new Promise();
	}

	/**
	 * Invite users to the room. this will only work if the current User is the owner or a moderator of this Room.
	 * This will create the invitation and add the user to the participants list.
	 * @param {User[]} users the users to invite
	 * @param {string} [role='NONE'] the role of the invitee
	 * @param {string} [message] a message to add to the invite
	 * @return {Promise<{room: Room, invite: Invite}>, Error}
	 */
	invite(users, role = 'NONE', message) {
		return new Promise({users, role, message});
	}

	/**
	 * Register a callback for a specific event
	 * @param {string} event The event name.
	 * @param {function} callback The callback for the event
	 */
	on(event, callback) {
		switch (event) {
		case 'PARTICIPANT_ADDED':
			break;
		case 'PARTICIPANT_CHANGED':
			break;
		case 'PARTICIPANT_REMOVED':
			break;
		case 'MESSAGE_ADDED':
			break;
		case 'MESSAGE_CHANGED':
			break;
		case 'MESSAGE_REMOVED':
			break;
		case 'STREAM_PUBLISHED':
			break;
		case 'STREAM_CHANGED':
			break;
		case 'STREAM_UNPUBLISHED':
			break;
		}
		callback();
	}

	/**
	 * Send an instant message
	 * @param {string} message The message to send
	 * @return {Promise}
	 */
	sendMessage(message) {
		return new Promise(message);
	}

	/**
	 * Publish a local stream
	 * @param {StreamType} type The stream type
	 * @param {?Element} localStreamElement The element the stream is attached to. Can be null if already specified in ReachConfig.
	 * @param {?MediaConstraints} constraints The stream constraints. If not defined the constraints defined in ReachConfig will be used.
	 * @returns {Promise<Stream, Error>}
	 */
	publishStream(type, localStreamElement, constraints) {
		return new Promise({type, localStreamElement, constraints});
	}
}

import User from '../core/User';
import Room from '../core/Room';
import Invite from '../core/Invite';
import Participant from '../core/Participant';
import Message from '../core/Message';
import Remote from '../core/stream/Remote';

/**
 * The events supported by {@link Reach#on}
 * @typedef {Object} Events/Reach
 * @property {string} USER_ADDED Fired when a new user is registered
 * @property {string} USER_CHANGED Fired when an existing user logs in or out or changes is status
 * @property {string} USER_REMOVED Fired when a user is unregistered
 * @property {string} ROOM_ADDED Fired when a room is created
 * @property {string} ROOM_CHANGED Fired when a room status is changing
 * @property {string} ROOM_REMOVED Fired when a room is closed definitely
 * @property {string} INVITE_ADDED Fired when an invite is received
 * @property {string} INVITE_CHANGED Fired when an invite status is modified
 */

/**
 * The events supported by {@link Room#on}
 * @typedef {Object} Events/Room
 * @property {string} PARTICIPANT_ADDED Fired when a new participant is added to the room. Does not mean he's connected but that he's invited to
 * @property {string} PARTICIPANT_CHANGED Fired when a participant changes is status (enter/leaves the room)
 * @property {string} PARTICIPANT_REMOVED Fired when a user leaves definitely or is banned
 * @property {string} MESSAGE_ADDED Fired when a new instant message is sent to the room
 * @property {string} MESSAGE_CHANGED Fired when an instant message is edited
 * @property {string} MESSAGE_REMOVED Fired when an instant message is removed
 * @property {string} STREAM_PUBLISHED Fired when a participant publishes a stream
 * @property {string} STREAM_UNPUBLISHED Fired when a participant stops the publishing of his stream
 */

/**
 * The events supported by {@link Remote#on}.
 * @typedef {Object} Events/Stream
 * @property {string} MUTE Fired when the mute status of the stream changes
 */

/**
 * Path configuration for each event
 * @ignore
 * @type {{}}
 */
const paths = {
	'USER': () => 'users',
	'ROOM': () => 'rooms',
	'INVITE': user => {
		if(!user) {
			throw new Error('You must be authenticated to list the invites');
		}
		return `_/invites/${user.uid}`;
	},
	'PARTICIPANT': room => `_/rooms/${room.uid}/participants`,
	'MESSAGE': room => `_/rooms/${room.uid}/messages`,
	'STREAM': room => `_/rooms/${room.uid}/streams`
};

/**
 * Object type configuration for each event
 * @ignore
 * @type {{}}
 */
const classes = {
	'USER': User,
	'ROOM': Room,
	'INVITE': Invite,
	'PARTICIPANT': Participant,
	'MESSAGE': Message,
	'STREAM': Remote
};

/**
 * Private class to add support test methods
 * @class _Events
 * @ignore
 */
class _Events {
	constructor(keys) {
		keys.forEach(key => {this[key] = key;});
	}
	supports(event) {
		if(this[event] !== event) {
			throw new Error(`Unsupported event. Use one of the following: ${JSON.stringify(Object.keys(this))}`);
		}
		return true;
	}
	toPath(event) {
		if(this.supports(event)) {
			return paths[event.replace(/_.*$/, '')] || (() => null);
		}
	}
	toClass(event) {
		if(this.supports(event)) {
			return classes[event.replace(/_.*$/, '')];
		}
	}
}

/**
 * @ignore
 */
export const reach = new _Events([
	'USER_ADDED', 'USER_CHANGED', 'USER_REMOVED',
	'ROOM_ADDED', 'ROOM_CHANGED', 'ROOM_REMOVED',
	'INVITE_ADDED', 'INVITE_CHANGED'
]);

/**
 * @ignore
 */
export const room = new _Events([
	'MESSAGE_ADDED', 'MESSAGE_CHANGED', 'MESSAGE_REMOVED',
	'PARTICIPANT_ADDED', 'PARTICIPANT_CHANGED', 'PARTICIPANT_REMOVED',
	'STREAM_PUBLISHED', 'STREAM_UNPUBLISHED'
]);

/**
 * @ignore
 */
export const stream = new _Events(['MUTE']);

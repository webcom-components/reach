/**
 * The supported events by Reach#on, Room#on, Stream#on...
 * @typedef {Object} Events
 * @property {string} USER_ADDED='USER_ADDED'
 * @property {string} USER_CHANGED='USER_CHANGED'
 * @property {string} USER_REMOVED='USER_REMOVED'
 * @property {string} ROOM_ADDED='ROOM_ADDED'
 * @property {string} ROOM_CHANGED='ROOM_CHANGED'
 * @property {string} ROOM_REMOVED='ROOM_REMOVED'
 * @property {string} INVITE_ADDED='INVITE_ADDED'
 * @property {string} INVITE_CHANGED='INVITE_CHANGED'
 * @property {string} PARTICIPANT_ADDED='PARTICIPANT_ADDED'
 * @property {string} PARTICIPANT_CHANGED='PARTICIPANT_CHANGED'
 * @property {string} PARTICIPANT_REMOVED='PARTICIPANT_REMOVED'
 * @property {string} MESSAGE_ADDED='MESSAGE_ADDED'
 * @property {string} MESSAGE_CHANGED='MESSAGE_CHANGED'
 * @property {string} MESSAGE_REMOVED='MESSAGE_REMOVED'
 * @property {string} STREAM_PUBLISHED='STREAM_PUBLISHED'
 * @property {string} STREAM_CHANGED='STREAM_CHANGED'
 * @property {string} STREAM_UNPUBLISHED='STREAM_UNPUBLISHED'
 */
/**
* @ignore
*/
export const USER_ADDED = 'USER_ADDED';
/**
* @ignore
*/
export const USER_CHANGED = 'USER_CHANGED';
/**
* @ignore
*/
export const USER_REMOVED = 'USER_REMOVED';
/**
* @ignore
*/
export const ROOM_ADDED = 'ROOM_ADDED';
/**
* @ignore
*/
export const ROOM_CHANGED = 'ROOM_CHANGED';
/**
* @ignore
*/
export const ROOM_REMOVED = 'ROOM_REMOVED';
/**
* @ignore
*/
export const INVITE_ADDED = 'INVITE_ADDED';
/**
* @ignore
*/
export const INVITE_CHANGED = 'INVITE_CHANGED';
/**
* @ignore
*/
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
/**
* @ignore
*/
export const MESSAGE_CHANGED = 'MESSAGE_CHANGED';
/**
* @ignore
*/
export const MESSAGE_REMOVED = 'MESSAGE_REMOVED';
/**
* @ignore
*/
export const PARTICIPANT_ADDED = 'PARTICIPANT_ADDED';
/**
* @ignore
*/
export const PARTICIPANT_CHANGED = 'PARTICIPANT_CHANGED';
/**
* @ignore
*/
export const PARTICIPANT_REMOVED = 'PARTICIPANT_REMOVED';
/**
* @ignore
*/
export const STREAM_PUBLISHED = 'STREAM_PUBLISHED';
/**
* @ignore
*/
export const STREAM_CHANGED = 'STREAM_CHANGED';
/**
* @ignore
*/
export const STREAM_UNPUBLISHED = 'STREAM_UNPUBLISHED';

export default {
	USER_ADDED, USER_CHANGED, USER_REMOVED,
	ROOM_ADDED, ROOM_CHANGED, ROOM_REMOVED,
	INVITE_ADDED, INVITE_CHANGED,
	MESSAGE_ADDED, MESSAGE_CHANGED, MESSAGE_REMOVED,
	PARTICIPANT_ADDED, PARTICIPANT_CHANGED, PARTICIPANT_REMOVED,
	STREAM_PUBLISHED, STREAM_CHANGED, STREAM_UNPUBLISHED
};

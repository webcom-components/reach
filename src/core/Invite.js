import {ONGOING, ACCEPTED, REJECTED, CANCELED} from './util/constants';
import * as DataSync from './util/DataSync';
import * as Log from './util/Log';
import cache from './util/cache';
import Room from './Room';

/**
 * Update
 * @param {Invite} invite The invite
 * @param {string} status The new status
 * @param {string} [reason=null] The reason (a message)
 * @param {object} [_ended=null]
 * @access private
 * @returns {Promise<Invite, Error>}
 */
const update = (invite, status, reason = null, _ended = null) => {
	const values = {
		status,
		reason,
		_ended
	};

	if(invite.status !== ONGOING) {
		return Promise.reject(new Error('This invitation has already been answered'));
	}
	return DataSync.update(`_/invites/${invite.to}/${invite.uid}`, values)
		.then(() => {
			Object.keys(values).forEach(prop => {
				invite[prop] = values[prop];
			});
			return Room.get(invite.room);
		})
		.then(room => ({room, invite}))
		.catch(Log.r);
};

/**
 * Invitation
 * @public
 */
export default class Invite {

	/**
	 * Create an invite
	 * @param {Webcom/api.DataSnapshot|object} snapData The data snapshot
	 * @access protected
	 */
	constructor(snapData) {
		let values = snapData;
		if(snapData && snapData.val && typeof snapData.val === 'function'){
			values = Object.assign(snapData.val() || {}, {uid: snapData.name(), to: snapData.ref().parent().name()});
		}
		/**
		 * Invite's unique id
		 * @type string
		 */
		this.uid = values.uid;
		/**
		 * Invite's sender uid
		 * @type {string}
		 */
		this.from = values.from;
		/**
		 * Invitee's uid
		 * @type {string}
		 */
		this.to = values.to;
		/**
		 * The id of the room associated to the invite
		 * @type {string}
		 */
		this.room = values.room;
		/**
		 * The invitation status :
		 * - ONGOING - The receiver has not yet responded to the invitation
		 * - ACCEPTED - The receiver has accepted the invitation
		 * - REJECTED - The receiver has rejected the invitation
		 * - CANCELED - The sender canceled the invitation
		 * @type {string}
		 */
		this.status = values.status;
		/**
		 * Invite message. This will be either a custom message if the status is ONGOING or a reason when status is CANCELED|REJECTED.
		 * @type {string}
		 */
		this.topic = values.topic;
		/**
		 * Invite creation timestamp
		 * @type {number}
		 */
		this._created = values._created;
		/**
		 * Invite expiration timestamp
		 * @type {number}
		 */
		this._ended = values._ended;
	}

	/**
	 * Is this invitation waiting for a reply ?
	 * @type {boolean}
	 */
	get isOnGoing() {
		return this.status === ONGOING;
	}

	/**
	 * Was this invitation rejected ?
	 * @type {boolean}
	 */
	get isRejected() {
		return this.status === REJECTED;
	}

	/**
	 * Was this invitation accepted ?
	 * @type {boolean}
	 */
	get isAccepted() {
		return this.status === ACCEPTED;
	}

	/**
	 * Was this invitation canceled ?
	 * @type {boolean}
	 */
	get isCanceled() {
		return this.status === CANCELED;
	}

	/**
	 * Cancels the invitation. Only the sender can cancel the invitation.
	 * @param {string} [reason] The reason the sender is canceling the invite
	 * @return {Promise<Invite>}
	 */
	cancel(reason) {
		return update(this, CANCELED, reason, DataSync.ts());
	}

	/**
	 * Rejects the invitation. Only the receiver can reject the invitation.
	 * @param {string} [reason] The reason the receiver is rejecting the invite
	 * @return {Promise<Invite>}
	 */
	reject(reason) {
		return update(this, REJECTED, reason);
	}

	/**
	 * Accept the invitation. Only the receiver can accept the invitation.
	 * @return {Promise<Invite>}
	 */
	accept() {
		return update(this, ACCEPTED);
	}

	/**
	 * Create the invitation & add the user to the participants list
	 * @access protected
	 * @param {User} invitee The user to invite
	 * @param {Room} room The room to invite the user to
	 * @param {string} [message] A message for the invitee
	 */
	static send(invitee, room, message = null) {
		if(!cache.user) {
			return Promise.reject(new Error('Cannot send an Invite without a User being logged in.'));
		}

		const inviteMetaData = {
			from: cache.user.uid,
			room: room.uid,
			status: ONGOING,
			_created: DataSync.ts(),
			topic: message
		};

		return DataSync.push(`_/invites/${invitee.uid}`, inviteMetaData)
			.then(inviteRef => {
				const inviteId = inviteRef.name();
				return new Invite(Object.assign({uid: inviteId, to: invitee.uid}, inviteMetaData));
			})
			.catch(Log.r);
	}
}

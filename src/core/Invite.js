import {ONGOING, ACCEPTED, REJECTED, CANCELED} from '../util/constants';
import {get, update} from '../util/datasync';

/**
 * Invitation
 * @access protected
 */
export default class Invite {
	/**
	 * The room associated to the invite
	 * @type {Room}
	 */
	get room() {
		return null;
	}

	/**
	 * The invitation status :
	 * - ONGOING - The receiver has not yet responded to the invitation
	 * - ACCEPTED - The receiver has accepted the invitation
	 * - REJECTED - The receiver has rejected the invitation
	 * - CANCELED - The sender canceled the invitation
	 * @type {string}
	 */
	get status() {
		return '';
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
	 * The invitation sender
	 * @type {string}
	 */
	get from() {
		return '';
	}

	/**
	 * The invitation receiver
	 * @type {string}
	 */
	get to() {
		return '';
	}

	/**
	 * The invitation cancel/reject reason if present
	 * @type {?string}
	 */
	get reason() {
		return null;
	}

	/**
	 * Cancels the invitation. Only the sender can cancel the invitation.
	 * @param {string} [reason] The reason the sender is canceling the invite
	 * @return {Promise}
	 */
	cancel() {
		return Promise.resolve();
	}

	/**
	 * Rejects the invitation. Only the reveicer can reject the invitation.
	 * @param {string} [reason] The reason the receiver is rejecting the invite
	 * @return {Promise}
	 */
	reject(reason) {
		return Promise.resolve(reason);
	}

	/**
	 * Accept the invitation. Only the reveicer can accept the invitation.
	 * @return {Promise}
	 */
	accept() {
		return Promise.resolve();
	}
}

/**
 * List invites for a specific User
 * @access protected
 * @returns {Promise<Invite[], Error>}
 */
export const listInvites = (user) => {
	return get(`_/invites/${user.uid}`).then(snapData => {
		if(snapData) {
			const invites = [];
			snapData.forEach(childSnapData => {invites.push(new Invite(childSnapData));});
			return invites;
		}
		return [];
	});
};

/**
 * Create the invitation & add the user to the participants list
 * @access protected
 * @param {User} invitee The user to invite
 * @param {User} sender The room owner/moderator (will be the current user)
 * @param {Room} room The room to invite the user to
 */
export const createInvite = (invitee, sender, room) => {
	// TODO the sender will always be the current user so the 'sender' parameter might not be useful #API
	return get(`_/invites/${invitee.uid}/${room.uid}`).then(snapData => {
		if(snapData && snapData.val()) {
			return new Invite();
		}
		return update(`_/invites/${invitee.uid}/${room.uid}`, {
			from: sender.uid,
			room: room.uid,
			status: ONGOING,
			_created: Date.now()
		});
	});
};

import {ONGOING, ACCEPTED, REJECTED, CANCELED} from '../constants';

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
		return new Promise();
	}

	/**
	 * Rejects the invitation. Only the reveicer can reject the invitation.
	 * @param {string} [reason] The reason the receiver is rejecting the invite
	 * @return {Promise}
	 */
	reject(reason) {
		return new Promise(reason);
	}

	/**
	 * Accept the invitation. Only the reveicer can accept the invitation.
	 * @return {Promise}
	 */
	accept() {
		return new Promise();
	}
}

/**
 * User informations
 * @public
 */
export default class User {
	/**
	 * Get user's name
	 * @type {string}
	 */
	get name() {
		return '';
	}

	/**
	 * Get user status
	 * @type {string}
	 */
	get status() {
		return '';
	}

	/**
	 * Invite a user directly. This will create a new Room, log you in it & invite the user.
	 * @param {string} [message] a message to add to the invite
	 * @return {Promise<{room: Room, invite: Invite}, Error>}
	 */
	invite(message) {
		return new Promise(message);
	}
}

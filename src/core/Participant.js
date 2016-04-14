/**
 * Room participant
 * @public
 */
export default class Participant {
	/**
	 * The Participant's role. Can be:
	 * - OWNER: the owner/creator of the Room
	 * - MODERATOR: a participant with room managment Rights
	 * - NONE: basic participant
	 * @type string
	 */
	get role(){
		return this.role;
	}
}

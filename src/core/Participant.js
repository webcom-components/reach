/**
 * {@link Room} participant
 * @public
 */
export default class Participant {
  /**
   * Create a participant
   * @param {Webcom/api.DataSnapshot|Object} snapData The data snapshot
   * @access protected
   */
  constructor(snapData) {
    const values = Object.assign({}, snapData.val());
    /**
     * The participant unique id
     * @type {string}
     */
    this.uid = snapData.name();
    /**
     * The Participant's role. Can be:
     * - OWNER: the owner/creator of the {@link Room}
     * - MODERATOR: a participant with {@link Room} management Rights
     * - NONE: basic participant
     * @type {string}
     */
    this.role = values.role;
    /**
     * The participant status Can be:
     * - NOT_CONNECTED: the participant did not accept the invitation yet and/or did not
     * join the {@link Room} yet
     * - CONNECTED: the participant is in the {@link Room}
     * - WAS_CONNECTED: the participant left the {@link Room}
     * @type {string}
     */
    this.status = values.status;
    /**
     * Joined date
     * @type {number}
     */
    this._joined = values._joined;
    /**
     * Participant's userAgent
     * @type {string}
     */
    this.userAgent = values.userAgent;
  }
}

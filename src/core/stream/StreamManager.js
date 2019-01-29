import Remote from './Remote';

/**
 * @access protected
 */
export default class StreamManager {
  /**
   * Constructor
   * @access protected
   */
  constructor() {
    /**
     * Shared local streams
     * @type {{*: Local}}
     */
    this.shared = {};
    /**
     * Subscribed remote streams
     * @type {{*: Remote}}
     */
    this.remote = {};
  }

  /**
   * Get a Remote stream reference
   * @param {object} streamData
   * @returns {Remote}
   */
  getRemote(streamData) {
    let remoteStream = this.remote[streamData.uid];
    if (remoteStream) {
      remoteStream.update(streamData);
    } else {
      remoteStream = new Remote(streamData);
      this.remote[streamData.uid] = remoteStream;
    }
    return remoteStream;
  }

  /**
   * Get a Remote stream reference
   * @param {object} streamData
   * @returns {Remote}
   */
  getShared(streamData) {
    // TODO: If it does not exists locally as it should, maybe we should remove it ?
    return this.shared[streamData.uid];
  }
}

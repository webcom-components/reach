import Webcom from 'webcom/webcom';
import Config from '../Config';
import StreamManager from '../stream/StreamManager';
import PeerConnectionManager from '../webrtc/PeerConnectionManager';

/**
 * singleton
 * @type {CacheManager}
 * @private
 */
let _cache = null;

/**
 * Singleton to handle global references
 * @access protected
 */
class CacheManager {
  /**
   * Construct singleton
   * @return {CacheManager}
   */
  constructor() {
    if (!_cache) {
      _cache = this;
    }
    return _cache;
  }

  /**
   * The base reference
   * @param {Webcom} url the reference or its url
   */
  set base(url) {
    /**
     * @ignore
     */
    this._base = url instanceof Webcom ? url : new Webcom(url);
  }

  /**
   * The base reference
   * @type {Webcom}
   */
  get base() {
    return this._base;
  }

  /**
   * The connected user
   * @param {Config} config the connected user
   */
  set config(config) {
    if (!this._config) {
      /**
       * @ignore
       */
      this._config = new Config(config);
    } else {
      this._config.assign(config);
    }
  }

  /**
   * The connected user
   * @type {Config}
   */
  get config() {
    if (!this._config) {
      this._config = new Config();
    }
    return this._config;
  }

  /**
   * The connected user
   * @param {User} user the connected user
   */
  set user(user) {
    /**
     * @ignore
     */
    this._user = user;
  }

  /**
   * The connected user
   * @type {User}
   */
  get user() {
    return this._user;
  }

  /**
   * The current device
   * @param {string} device the current device
   */
  set device(device) {
    /**
     * @ignore
     */
    this._device = device;
  }

  /**
   * The current device
   * @type {string}
   */
  get device() {
    return this._device;
  }

  /**
   * The log level (DEBUG, INFO, WARN, ERROR)
   * @type {string}
   */
  set logLevel(level) {
    if (/^DEBUG|INFO|WARN|ERROR$/i.test(level)) {
      /**
       * @ignore
       */
      this._logLevel = level;
    } else if (level) {
      throw new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)');
    }
  }

  /**
   * The log level (DEBUG, INFO, WARN, ERROR)
   * @returns {string}
   */
  get logLevel() {
    return this._logLevel || 'ERROR';
  }

  /**
   * Streams manager
   * @returns {StreamManager}
   */
  get streams() {
    if (!this._streams) {
      /**
       * @ignore
       */
      this._streams = new StreamManager();
    }
    return this._streams;
  }

  /**
   * PeerConnections manager
   * @returns {PeerConnectionManager}
   */
  get peerConnections() {
    if (!this._peerConnections) {
      /**
       * @ignore
       */
      this._peerConnections = new PeerConnectionManager();
    }
    return this._peerConnections;
  }

  /**
   *
   * @param room
   */
  set room(room) {
    this._room = room;
  }

  /**
   *
   * @returns {*}
   */
  get room() {
    return this._room;
  }
}

/**
 * The singleton instance
 * @ignore
 * @type {CacheManager}
 */
const cache = new CacheManager();

/**
 * Singleton for shared references
 * @access protected
 */
export default cache;

import media from './util/Media';
import * as DataSync from './util/DataSync';
import * as Log from './util/Log';
import cache from './util/cache';

const _flattenServers = (servers) => {
  const _expand = servers.map((server) => {
    const {
      username, credential, urls, url
    } = server;
    const uris = urls || url;
    if (typeof uris !== 'string') {
      return uris.map(uri => ({ username, credential, urls: uri }));
    }
    return [server];
  });
  return [].concat(..._expand);
};

/**
 * The Reach configuration object
 * @class Config
 */
export default class Config {
  /**
   * Create configuration
   * @access protected
   * @param obj
   */
  constructor(obj) {
    /**
     * The default media constraints. These can be overridden when subscribing to a stream.
     * @type {MediaStreamConstraints}
     */
    this.constraints = null;

    /**
     * The id/element dom element that will hold the local video/audio element
     * @type {string|Element}
     */
    this.localStreamContainer = null;
    /**
     * The id/element dom element that will hold the remote video/audio element
     * @type {string|Element}
     */
    this.remoteStreamContainer = null;

    /**
     * The preferred video Codec. Takes a RegExp matching the codec name and sample rate.
     * Predefined values can be found in {@link Codec/video}
     * @type {RegExp}
     * @example <caption>Prefer VP9</caption>
     * var myReach = new Reach('https://io.datasync.orange.com/base/<my_namespace>', {
     *  preferredVideoCodec: Reach.codecs.video.VP9
     * });
     */
    this.preferredVideoCodec = null;

    /**
     * The preferred audio Codec. Takes a RegExp matching the codec name and sample rate.
     * Predefined values can be found in {@link Codec/audio}
     * @type {RegExp}
     * @example <caption>Prefer opus</caption>
     * var myReach = new Reach('https://io.datasync.orange.com/base/<my_namespace>', {
     *  preferredAudioCodec: Reach.codecs.audio.OPUS
     * });
     */
    this.preferredAudioCodec = null;

    // Populate with default values
    this.reset();

    // Populate with data
    this.assign(obj);

    // Read ICE servers from server
    DataSync.get('_/ice').then((snapData) => {
      if (snapData) {
        this.iceServers = snapData.val();
        Log.i('ICEServers', this.iceServers.length > 0 ? this.iceServers : 'None');
      }
    }, e => Log.d('ICEServers', e));

    // TODO #Feat: Add boolean prop to request permission on start,
    // sdpEditor (for user defined SDP modifications)
  }

  /**
   * Assign new conf values
   * @access protected
   * @param {object} obj the new conf values
   */
  assign(obj) {
    Object.keys(obj || {}).forEach((key) => {
      this[key] = obj[key];
    });
  }

  /**
   * The log level (DEBUG, INFO, WARN, ERROR)
   * @type {string}
   */
  set logLevel(level) {
    cache.logLevel = level;
  }

  /**
   * The log level (DEBUG, INFO, WARN, ERROR)
   * @returns {string}
   */
  get logLevel() {
    return cache.logLevel;
  }

  /**
   * List of TURN/STUN servers to use for ICE.
   * This list will be merged with the ICE servers declared in the namespace (**_/ice**).
   * @type {ICEServer[]}
   */
  set iceServers(servers) {
    Log.d('Config~set~iceServers', servers);
    if (servers) {
      if (!this._iceServers) {
        /**
         * @ignore
         */
        this._iceServers = [].concat(servers || []);
      } else {
        // flatten existing
        const _currentServers = _flattenServers(this._iceServers);
        // flatten new
        const _newServers = _flattenServers(servers);
        // Add only the missing servers
        _newServers.forEach((newServer) => {
          if (!_currentServers.some(server => server.urls === newServer.urls
            && server.username === newServer.username
            && server.credential === newServer.credential)) {
            _currentServers.push(newServer);
          }
        });
        // Re-group by username/credential
        this._iceServers = _currentServers.reduce((previous, current) => {
          const { username, credential, urls } = current;
          const idx = previous.findIndex(s => s.username === username
            && s.credential === credential);
          if (idx >= 0) {
            previous[idx].urls.push(urls);
          } else {
            previous.push({ username, credential, urls: [urls] });
          }
          return previous;
        }, []);
      }
    }
  }

  /**
   * List of TURN/STUN servers to use for ICE.
   * This list will be merged with the ICE servers declared in the namespace (**_/ice**).
   * @type {ICEServer[]}
   */
  get iceServers() {
    return this._iceServers || [
      {
        username: 'admin',
        credential: 'webcom1234',
        urls: [
          'turns:turn1.webcom.orange.com:443',
          'turn:turn1.webcom.orange.com:443?transport=tcp',
          'turn:turn1.webcom.orange.com:3478?transport=tcp'
        ]
      }
    ];
  }

  set stats(stats) {
    this._stats = Object.assign({}, stats);
  }

  get stats() {
    return this._stats || {};
  }

  /**
   * Resets configuration to default values
   * @protected
   */
  reset() {
    this.assign({
      constraints: media.constraints(),
      logLevel: 'ERROR'
    });
  }
}

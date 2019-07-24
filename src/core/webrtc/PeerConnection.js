/* global RTCPeerConnection */
/* global RTCRtpSender */
import SocketIO from 'socket.io-client';
import GetStats from 'getstats';
import cache from '../util/cache';
import * as Log from '../util/Log';
import Media from '../util/Media';
import Device from '../Device';
import * as DataSync from '../util/DataSync';
import { CLOSED, CLOSING, OPENED } from '../util/constants';
import 'core-js/fn/array/find';

const DtlsSrtpKeyAgreement = { DtlsSrtpKeyAgreement: true };
const sdpConstraints = receive => ({ OfferToReceiveAudio: receive, OfferToReceiveVideo: receive });
/**
 * ICE connection status : disconnected
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_DISCONNECTED = 'disconnected';
/**
 * ICE connection status : connected
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CONNECTED = 'connected';
/**
 * ICE connection status : completed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_COMPLETED = 'completed';
/**
 * ICE connection status : checking
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CHECKING = 'checking';
/**
 * ICE connection status : closed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CLOSED = 'closed';
/**
 * ICE connection status : failed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_FAILED = 'failed';
/**
 * ICE connection status : another status
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_OTHER = 'other';
/**
 * @ignore
 */
const _toJSON = o => (o.toJSON && typeof o.toJSON === 'function' ? o.toJSON() : o);
/**
 * The PeerConnection. A PeerConnection will only concern one MediaStream.
 * @class PeerConnection
 */
export default class PeerConnection {
  /**
   * @access protected
   * @param {string} stackId The WebRTC stack ID
   * @param {string} streamId The Stream UID
   * @param {Remote|{to: string|from: string, device:string}} remote The remote information
   * @param {boolean} publish Publish or Subscribe ?
   */
  constructor(stackId, streamId, remote, publish) {
    /**
     * The stack identifier. Used to identify exchanges between 2 devices
     * @type {string}
     */
    this.stackId = stackId;
    /**
     * The stream id. (One stream per RTCPeerConnection)
     * @type {string}
     */
    this.streamId = streamId;
    /**
     * The remote device
     * @type {string}
     */
    this.remote = remote;
    /**
     * publish : a created peer connection or a remote one
     * @type {boolean}
     */
    this.publish = publish;
    /**
     * Path for local signalization
     * @access private
     * @type {string}
     */
    this._localPath = `_/webrtc/${this.stackId}/${this.streamId}/${cache.device}`;
    /**
     * Path for local signalization
     * @access private
     * @type {string}
     */
    this._remotePath = `_/webrtc/${this.stackId}/${this.streamId}/${this.remote.device}`;
    /**
     * Indicates if the PeerConnection has been established. (Useful for renegotiation).
     * @type {boolean}
     */
    this.negotiated = false;
    /**
     * The DOM element where the remote MediaStream will be displayed
     * @type {Element}
     * @protected
     */
    this.node = null;
    /**
     * The DOM element containg the media element
     * @type {Element}
     * @protected
     */
    this.container = null;
    /**
     * The callback called when there is an error
     * @type {Element}
     * @access private
     */
    this._errorCallbacks = [];
    /**
     * The actual RTCPeerConnection
     * @type {RTCPeerConnection}
     */
    this.pc = new RTCPeerConnection(
      {
        iceServers: cache.config.iceServers
      },
      {
        optional: [DtlsSrtpKeyAgreement],
        mandatory: sdpConstraints(!publish)
      }
    );
    // Handle ICE candidates
    this.pc.onicecandidate = (e) => {
      if (!this.negotiated && e.candidate) {
        Log.d('PeerConnection~onicecandidate', e.candidate);
        DataSync.push(`${this._localPath}/ice`, _toJSON(e.candidate));
      }
    };
    this.pc.oniceconnectionstatechange = () => {
      Log.d('PeerConnection~oniceconnectionstatechange', this.pc);
      const { iceConnectionState } = this.pc;
      switch (iceConnectionState) {
        case ICE_CONNECTION_STATE_CHECKING:
          // Nothing to do yet
          break;
        case ICE_CONNECTION_STATE_CONNECTED:
          Log.e('PeerConnection~stateConnected', this._errorCallbacks);
          this._attachStream();
          this._remoteICECandidates(false);
          this._getStats();
          break;
        case ICE_CONNECTION_STATE_COMPLETED:
          this._remoteICECandidates(false);
          break;
        case ICE_CONNECTION_STATE_FAILED:
          Log.e('PeerConnection~stateFailed', 'Failed PeerConnection');
          this._errorCallbacks.forEach(cb => cb('ICE_CONNECTION_STATE_FAILED'));
          break;
        case ICE_CONNECTION_STATE_DISCONNECTED:
          Log.e('PeerConnection~stateDisconnected', 'Disconnect PeerConnection');
          break;
        case ICE_CONNECTION_STATE_CLOSED:
          Log.d('PeerConnection~stateclosed', 'Close PeerConnection');
          this.close();
          break;
        default:
          break;
      }
      this.negotiated = this.negotiated || this.isConnected;
    };

    this.pc.onicegatheringstatechange = () => {
      Log.d('PeerConnection~onicegatheringstatechange', this.pc.iceGatheringState);
    };

    /**
     * PeerConnection status
     * @type {string}
     * @private
     */
    this._status = OPENED;
  }

  _getStats() {
    Log.d('PeerConnection~getStats',
      `enable : ${cache.config.stats.server && cache.config.stats.interval
        ? `to ${cache.config.stats.server}`
        : 'false'}`);
    if (cache.config.stats.server && cache.config.stats.interval) {
      // this._socket = SocketIO(cache.config.stats.server);
      GetStats(this.pc, (result) => {
        this.socket.emit('stats', Object.assign({
          id: this.streamId,
          publish: this.publish,
          room: cache.room.name,
          ts: new Date(),
          local: cache.device,
          remote: this.remote.device
        }, result));
      }, cache.config.stats.interval);
    }
  }

  get socket() {
    if (!this._socket) {
      this._socket = SocketIO(cache.config.stats.server);
    }
    return this._socket;
  }

  /**
   * Toggle ICE Candidates discovery
   * @access private
   * @param {boolean} listen Indicates if we should listen to new ICE candidates
   */
  _remoteICECandidates(listen) {
    const
      path = `${this._remotePath}/ice`;


    const event = 'child_added';
    if (listen) {
      // don't listen to ice candidates if pc is already up (renegotiation)
      DataSync.on(path, event, (snap) => {
        const candidate = snap.val();
        Log.d('PeerConnection~addIceCandidate', candidate);
        this.pc.addIceCandidate(new RTCIceCandidate(candidate));
      });
    } else {
      DataSync.off(path, event);
    }
  }

  /**
   * Attach the remote MediaStream to a node
   * @access private
   */
  _attachStream() {
    if (this.remoteStream && this.isConnected) {
      this.node = Media.attachStream(this.remoteStream, this.container, this.node);
      this.node.muted = false;
    }
  }

  /**
   * The remote MediaStream
   * @access protected
   * @type {MediaStream}
   */
  set remoteStream(stream) {
    /**
     * @ignore
     */
    this._remoteStream = stream;
    this._attachStream();
  }

  /**
   * The remote MediaStream
   * @type {MediaStream}
   */
  get remoteStream() {
    return this._remoteStream;
  }

  /**
   * Indicates if the PeerConnection is established based on ICE connection state
   * @returns {boolean}
   */
  get isConnected() {
    return this.pc
      && !!~[ // eslint-disable-line no-bitwise
        ICE_CONNECTION_STATE_CONNECTED,
        ICE_CONNECTION_STATE_COMPLETED,
        ICE_CONNECTION_STATE_OTHER
      ].indexOf(this.pc.iceConnectionState);
  }

  /**
   * Init RTCPeerConnection for subscribers
   * @access protected
   * @param htmlElement
   * @param errorCallbacks
   * @returns {Promise.<PeerConnection>}
   */
  answer(htmlElement, errorCallbacks = []) {
    Log.i('PeerConnection~answer', { htmlElement, peerConnection: this });
    this.container = htmlElement;
    this._errorCallbacks = errorCallbacks;
    if (Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'ontrack')) {
      this.pc.ontrack = (e) => {
        Log.d('PeerConnection~ontrack', e.streams[0]);
        this.remoteStream = e.streams[0]; // eslint-disable-line prefer-destructuring
      };
    } else {
      this.pc.onaddstream = (e) => {
        Log.d('PeerConnection~onaddstream', e.stream);
        this.remoteStream = e.stream;
      };
    }

    // Listen to SDP offer
    DataSync.on(`${this._remotePath}/sdp`, 'value', (snap) => {
      const sdpOffer = snap.val();
      // Log.d('Offer', sdpOffer.sdp);
      if (sdpOffer != null) {
        Log.d('PeerConnection~offered', sdpOffer.sdp);
        this.pc.setRemoteDescription(sdpOffer)
          .catch((e) => {
            Log.e('PeerConnection~answer#remoteDescription Error', e);
            errorCallbacks.forEach((cb) => {
              Log.d('PeerConnection~answer#remoteDescription Error callback', e);
              cb(e);
            });
            return e;
            // cache.peerConnections.close(this.streamId, this.remote.device);
          })
          .then(() => Log.d('PeerConnection~answer#remoteDescription', this.pc.remoteDescription.sdp))
          .then(() => {
            if (/^offer$/.test(this.pc.remoteDescription.type)) {
              return this.pc.createAnswer()
                .catch(e => Log.d.bind(Log, 'PeerConnections~answer#createAnswer', e));
            }
            return Promise.reject(new Error('SDP is not an offer'));
          })
          .then(description => this._setPreferredCodecs(description))
          .then((description) => {
            this.pc.setLocalDescription(description);
            return this.setLowerMediaBitrates(description, this.pc.remoteDescription);
          })
          .catch(e => Log.d.bind(Log, 'PeerConnections~answer#setLocalDescription', e))
          .then((newDescription) => {
            Log.d('PeerConnection~answer#localSDP', newDescription.sdp);
            this._remoteICECandidates(true);
            return newDescription;
          })
          .then(newDescription => this._sendSdpToRemote(newDescription))
          // .catch(Log.r('PeerConnection~answser#error'));
          .catch(() => {
            // this.close();
            cache.peerConnections.close(this.streamId, this.remote.device);
          });
      }
    });

    return Promise.resolve(this);
  }

  /**
   * Init RTCPeerConnection for publishers
   * @access protected
   * @param stream
   * @param errorCallbacks
   * @returns {Promise.<PeerConnection>}
   */
  offer(stream, errorCallbacks = []) {
    Log.i('PeerConnection~offer', { stream, peerConnection: this });
    let sendTimeout;
    return new Promise((resolve, reject) => {
      this.pc.onnegotiationneeded = () => {
        Log.d('PeerConnection~onnegotiationneeded');
        // Debounce send (renegotiation triggers multiple negotiationneeded events)
        if (sendTimeout) {
          clearTimeout(sendTimeout);
          sendTimeout = null;
        }
        sendTimeout = setTimeout(() => {
          sendTimeout = null;
          this._sendOffer()
            .catch((e) => {
              Log.d('PeerConnection~offer', e);
              errorCallbacks.forEach(cb => cb(e));
              reject(e);
            })
            .then(() => {
              resolve(this);
            });
        }, 20);
      };
      DataSync.on(`${this._remotePath}/sdp`, 'value', (snap) => {
        const sdpAnswer = snap.val();
        if (sdpAnswer != null) {
          Log.d(`PeerConnection~offer#answered ${sdpAnswer.sdp}`);
          this.pc.setRemoteDescription(sdpAnswer)
            .catch((e) => {
              errorCallbacks.forEach(cb => cb(e));
              cache.peerConnections.close(this.streamId, this.remote.device);
              Log.e.bind(Log, 'PeerConnection~offer#remoteDescription');
            })
            .then(() => {
              Log.d('PeerConnection~offer#remoteDescription', this.pc.remoteDescription.sdp);
              this._remoteICECandidates(true);
            });
        }
      });
      this._alterStream(stream, 'add');
    });
  }

  /**
   * Send SDP offer to the remote via DataSync
   * @private
   * @param newDesc
   */
  _sendSdpToRemote(newDesc) {
    // Log.d('PeerConnection~_sendSdpToRemote#localSDP', this.pc.localDescription.sdp);
    const remoteUserId = this.remote.to ? this.remote.to : this.remote.from;
    Device.get(remoteUserId, this.remote.device)
      .then((remoteDevice) => {
        const sdpOffer = newDesc.sdp; // 1109 - Didn't use pc.localDescription to set bitrate on SDP
        let newSdp = sdpOffer;
        const local = /Chrome\/([0-9]+)/.exec(navigator.userAgent);
        const remote = /Chrome\/([0-9]+)/.exec(remoteDevice.userAgent);
        if (navigator.userAgent.indexOf('Chrome') !== -1
          && navigator.userAgent.indexOf('Android') !== -1
          && remoteDevice.userAgent.indexOf('Safari') !== -1
          && local[1] <= 64) {
          if (local[1] <= 60) {
            newSdp = newSdp.replace(/;profile-level-id=([a-z0-9]+)/, '');
          } else {
            newSdp = newSdp.replace('42001f', '42e01f');
          }
        }
        if (navigator.userAgent.indexOf('Safari') !== -1
          && remoteDevice.userAgent.indexOf('Chrome') !== -1
          && remoteDevice.userAgent.indexOf('Android') !== -1
          && remote[1] <= 64) {
          if (remote[1] <= 60) {
            newSdp = newSdp.replace(/;profile-level-id=([a-z0-9]+)/, '');
          } else {
            newSdp = newSdp.replace('42e01f', '42001f');
          }
        }
        Log.d(`PeerConnection~_sendSdpToRemote#SDP sent to remote ${newSdp}`);
        const descriptionChanged = {
          sdp: newSdp,
          type: newDesc.type
        };
        DataSync.update(`${this._localPath}/sdp`, _toJSON(descriptionChanged));
      });
  }

  /**
   * Create SDP offer and push it
   * @returns {Promise}
   * @private
   */
  _sendOffer() {
    Log.d('PeerConnection~_sendOffer');
    return this.pc.createOffer()
      .then(description => this._setPreferredCodecs(description))
      .then((description) => {
        this.pc.setLocalDescription(description);
        return this.setMediaBitrates(description);
      })
      .then((newDesc) => {
        Log.d('PeerConnection~_sendOffer#localDescription', newDesc.sdp);
        return newDesc;
      })
      .then(newDesc => this._sendSdpToRemote(newDesc));
  }

  /**
   * Add/Remove tracks to the PeerConnection stream
   * @param {MediaStream} stream
   * @param {string} method
   * @private
   */
  _alterStream(stream, method) {
    if (Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, `${method}Track`)) {
      if (method === 'add') {
        stream.getTracks().forEach(track => this.pc[`${method}Track`](track, stream), this);
      } else {
        this.pc.getSenders().forEach(sender => this.pc[`${method}Track`](sender), this);
      }
    } else {
      this.pc[`${method}Stream`](stream);
    }
  }

  /**
   * Restart SDP negotiation following a MediaStream change
   * @access protected
   * @param {MediaStream} oldStream
   * @param {MediaStream} newStream
   */
  renegotiate(oldStream, newStream) {
    Log.d('PeerConnection~renegotiate');
    if ((Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'getSenders'))
      && ('RTCRtpSender' in window)
      && Object.getOwnPropertyDescriptor(RTCRtpSender.prototype, 'replaceTrack')) {
      // mozRTCPeerConnection implementation
      this.pc.getSenders().forEach((sender) => {
        let newTracks;
        switch (sender.track.kind) {
          case 'audio':
            newTracks = newStream.getAudioTracks();
            break;
          case 'video':
            newTracks = newStream.getVideoTracks();
            break;
          default:
            newTracks = [];
        }
        if (newTracks.length) {
          sender.replaceTrack(newTracks[0]);
        }
      });
      this._sendOffer()
        .catch((e) => {
          Log.d('PeerConnection~renegotiate', e);
        });
    } else {
      this._alterStream(oldStream, 'remove');
      this._alterStream(newStream, 'add');
    }
  }

  /**
   * Close the PeerConnection and stop listening to SDP messages
   * @access protected
   */
  close() {
    if (this._status === OPENED) {
      this._status = CLOSING;
      // Stop display
      if (this.node) {
        if (this.node.stop) {
          this.node.stop();
        }
        this.node.srcObject = null;
        this.container.removeChild(this.node);
        this.node = null;
      }
      // Stop listening to remote ICE candidates
      this._remoteICECandidates(false);
      // Stop listening to SDP messages
      DataSync.off(`${this._remotePath}/sdp`, 'value');
      // Remove data
      DataSync.remove(this._localPath);
      // Close PeerConnection
      if (this.pc && this.pc.signalingState !== 'closed') {
        this.pc.onsignalingstatechange = () => {
          if (this.pc.signalingState !== 'closed') {
            this._status = CLOSED;
          }
        };
        this.pc.close();
      } else {
        this._status = CLOSED;
      }
    }
  }

  /**
   * Edits the SDP to set the preferred audio/video codec
   * @access private
   * @param {RTCSessionDescription} description
   * The description retrieved by createOffer/createAnswer
   * @returns {RTCSessionDescription|{sdp: string, type: string}}
   */
  _setPreferredCodecs(description) {
    if (cache.config.preferredVideoCodec || cache.config.preferredAudioCodec) {
      Log.d('PeerConnection~_setPreferredCodecs', { description, config: cache.config });
      const sdpLines = description.sdp.split(/\r?\n/);
      const medias = { audio: [], video: [] };
      let current = null;
      // Parse SDP
      sdpLines.forEach((sdpLine, i) => {
        if (/^m=/.test(sdpLine)) {
          // eslint-disable-next-line no-useless-escape
          const d = /^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);
          current = {
            fmt: d[2].split(/\s/),
            index: i,
            codecs: []
          };
          medias[d[1]].push(current);
        } else if (current && /^a=rtpmap:/.test(sdpLine)) {
          // eslint-disable-next-line no-useless-escape
          const c = /^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);
          if (c) {
            current.codecs.push({
              id: c[1],
              name: c[2],
              index: i
            });
          }
        }
      });
      Log.d('PeerConnection~_setPreferredCodecs', medias);
      let update = false;
      const prefer = (mediaList, preferedCodec) => {
        mediaList.forEach((media) => {
          const selected = media.codecs.find(codec => preferedCodec.test(codec.name));
          if (selected) {
            const fmt = [selected.id].concat(media.fmt.filter(ids => ids !== selected.id));
            sdpLines[media.index] = sdpLines[media.index].replace(media.fmt.join(' '),
              fmt.join(' '));
            update = true;
          }
        });
      };
      if (cache.config.preferredVideoCodec) {
        prefer(medias.video, cache.config.preferredVideoCodec);
      }
      if (cache.config.preferredAudioCodec) {
        prefer(medias.audio, cache.config.preferredAudioCodec);
      }
      if (update) {
        Log.d('PeerConnection~_setPreferredCodecs', sdpLines.join('\r\n'));
        return {
          sdp: sdpLines.join('\r\n'),
          type: description.type
        };
      }
    }
    return description;
  }

  setLowerMediaBitrates(description, remoteDescription) {
    let videoBitrate = null;
    let audioBitrate = null;
    if (cache.config.communicationQuality) {
      videoBitrate = cache.config.communicationQuality.video;
      audioBitrate = cache.config.communicationQuality.audio;
    }
    if (cache.config.audioBitrateMax) {
      if (((audioBitrate && parseInt(audioBitrate, 10) > parseInt(cache.config.audioBitrateMax, 10))
       || !audioBitrate)) {
        audioBitrate = cache.config.audioBitrateMax;
      }
    }
    if (cache.config.videoBitrateMax) {
      if (((videoBitrate && parseInt(videoBitrate, 10) > parseInt(cache.config.videoBitrateMax, 10))
       || !videoBitrate)) {
        videoBitrate = cache.config.videoBitrateMax;
      }
    }
    const audioRemoteBitrate = this.getMediaBitrateFromDesc(remoteDescription, 'audio');
    const videoRemoteBitrate = this.getMediaBitrateFromDesc(remoteDescription, 'video');
    if (audioRemoteBitrate) {
      if (((audioBitrate && parseInt(audioBitrate, 10) > parseInt(audioRemoteBitrate, 10))
        || !audioBitrate)) {
        audioBitrate = audioRemoteBitrate;
      }
    }
    if (videoRemoteBitrate) {
      if (((videoBitrate && parseInt(videoBitrate, 10) > parseInt(videoRemoteBitrate, 10))
        || !videoBitrate)) {
        videoBitrate = videoRemoteBitrate;
      }
    }
    return this._setMediaBitrate(this._setMediaBitrate(description, 'video', videoBitrate), 'audio', audioBitrate);
  }

  getMediaBitrateFromDesc(description, mediaType) {
    let bitrateResult = null;
    if (description) {
      const sdpLines = description.sdp.split(/\r?\n/);
      let mediaLineIndex = -1;
      const mediaLine = `m=${mediaType}`;
      let bitrateLineIndex = -1;
      mediaLineIndex = sdpLines.findIndex(line => line.startsWith(mediaLine));

      // If we find a line matching “m={mediaType}”
      if (mediaLineIndex && mediaLineIndex < sdpLines.length) {
        // Skip the media line
        bitrateLineIndex = mediaLineIndex + 1;

        // Skip both i=* and c=* lines (bandwidths limiters have to come afterwards)
        while (sdpLines[bitrateLineIndex].startsWith('i=') || sdpLines[bitrateLineIndex].startsWith('c=')) {
          bitrateLineIndex += 1;
        }
        if (sdpLines[bitrateLineIndex].startsWith('b=')) {
          // If the next line is a b=* line, get the bandwidth
          bitrateResult = sdpLines[bitrateLineIndex].substring(5);
        }
      }
    }
    return bitrateResult;
  }

  setMediaBitrates(description) {
    let videoBitrate = null;
    let audioBitrate = null;
    if (cache.config.communicationQuality) {
      videoBitrate = cache.config.communicationQuality.video;
      audioBitrate = cache.config.communicationQuality.audio;
    }
    if (cache.config.audioBitrateMax) {
      if (((audioBitrate && parseInt(audioBitrate, 10) > parseInt(cache.config.audioBitrateMax, 10))
        || !audioBitrate)) {
        audioBitrate = cache.config.audioBitrateMax;
      }
    }
    if (cache.config.videoBitrateMax) {
      if (((videoBitrate && parseInt(videoBitrate, 10) > parseInt(cache.config.videoBitrateMax, 10))
        || !videoBitrate)) {
        videoBitrate = cache.config.videoBitrateMax;
      }
    }
    return this._setMediaBitrate(this._setMediaBitrate(description, 'video', videoBitrate), 'audio', audioBitrate);
  }

  _setMediaBitrate(description, mediaType, bitrate) {
    const sdpLines = description.sdp.split(/\r?\n/);
    let mediaLineIndex = -1;
    const mediaLine = `m=${mediaType}`;
    let bitrateLineIndex = -1;
    const bitrateLine = `b=AS:${bitrate}`;
    mediaLineIndex = sdpLines.findIndex(line => line.startsWith(mediaLine));

    // If we find a line matching “m={mediaType}”
    if (mediaLineIndex && mediaLineIndex < sdpLines.length) {
      // Skip the media line
      bitrateLineIndex = mediaLineIndex + 1;

      // Skip both i=* and c=* lines (bandwidths limiters have to come afterwards)
      while (sdpLines[bitrateLineIndex].startsWith('i=') || sdpLines[bitrateLineIndex].startsWith('c=')) {
        bitrateLineIndex += 1;
      }
      if (bitrate) { // If bitrate not null => set the value, else defaults value are setted
        if (sdpLines[bitrateLineIndex].startsWith('b=')) {
          // If the next line is a b=* line, replace it with our new bandwidth
          // AND the new bitrate is smaller
          if (parseInt(sdpLines[bitrateLineIndex].substring(5), 10) > parseInt(bitrate, 10)) {
            sdpLines[bitrateLineIndex] = bitrateLine;
          }
        } else {
          // Otherwise insert a new bitrate line.
          sdpLines.splice(bitrateLineIndex, 0, bitrateLine);
        }
      } else if (sdpLines[bitrateLineIndex].startsWith('b=')) {
        // If the next line is a b=* line, remove it to have the default bandwidth
        sdpLines.splice(bitrateLineIndex, 1);
      }
    }

    // Then return the description with the updated sdp content as a string
    return {
      sdp: sdpLines.join('\r\n'),
      type: description.type
    };
  }
}

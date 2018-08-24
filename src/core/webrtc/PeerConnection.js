/*global RTCPeerConnection*/
/*global RTCRtpSender*/
import cache from '../util/cache';
import * as Log from '../util/Log';
import Media from '../util/Media';
import Device from '../Device';
import * as DataSync from '../util/DataSync';
import {OPENED, CLOSING, CLOSED} from '../util/constants';
import 'core-js/fn/array/find';

const DtlsSrtpKeyAgreement = {DtlsSrtpKeyAgreement: true};
const sdpConstraints = receive => ({OfferToReceiveAudio: receive, OfferToReceiveVideo: receive});
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
const ICE_CONNECTION_STATE_CONNECTED= 'connected';
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
const ICE_CONNECTION_STATE_OTHER= 'other';
/**
 * @ignore
 */
const _toJSON = o => o.toJSON && typeof o.toJSON === 'function' ? o.toJSON() : o;
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
		this.pc.onicecandidate = e => {
			if (!this.negotiated && e.candidate) {
				Log.d('PeerConnection~onicecandidate', e.candidate);
				DataSync.push(`${this._localPath}/ice`, _toJSON(e.candidate));
			}
		};
		this.pc.oniceconnectionstatechange = () => {
			Log.d('PeerConnection~oniceconnectionstatechange', this.pc);
			const iceConnectionState = this.pc.iceConnectionState;
			switch (iceConnectionState) {
				case ICE_CONNECTION_STATE_CHECKING:
					// Nothing to do yet
					break;
				case ICE_CONNECTION_STATE_CONNECTED:
					this._attachStream();
					this._remoteICECandidates(false);
					break;
				case ICE_CONNECTION_STATE_COMPLETED:
					this._remoteICECandidates(false);
					break;
				case ICE_CONNECTION_STATE_DISCONNECTED:
				case ICE_CONNECTION_STATE_FAILED:
					// Log.e('PeerConnection~stateDisconnected', 'Disconnect PeerConnection');
					console.log('PeerConnection~stateDisconnected Disconnect PeerConnection');
					break;
				case ICE_CONNECTION_STATE_CLOSED:
					// Log.d('PeerConnection~stateclosed', 'Close PeerConnection');
					console.log('PeerConnection~stateclosed Close PeerConnection');
					this.close();
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

	/**
	 * Toggle ICE Candidates discovery
	 * @access private
	 * @param {boolean} listen Indicates if we should listen to new ICE candidates
	 */
	_remoteICECandidates(listen) {
		const
			path = `${this._remotePath}/ice`,
			event = 'child_added';
		if(listen) {
			// don't listen to ice candidates if pc is already up (renegotiation)
			DataSync.on(path, event, snap => {
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
	_attachStream () {
		if(this.remoteStream && this.isConnected) {
			this.node = Media.attachStream(this.remoteStream, this.container, this.node);
			this.node.muted = false;
		}
	}

	/**
	 * The remote MediaStream
	 * @access protected
	 * @type {MediaStream}
	 */
	set remoteStream (stream) {
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
	get remoteStream () {
		return this._remoteStream;
	}

	/**
	 * Indicates if the PeerConnection is established based on ICE connection state
	 * @returns {boolean}
	 */
	get isConnected () {
		return this.pc &&
			!!~[
				ICE_CONNECTION_STATE_CONNECTED,
				ICE_CONNECTION_STATE_COMPLETED,
				ICE_CONNECTION_STATE_OTHER
			].indexOf(this.pc.iceConnectionState);
	}

	/**
	 * Init RTCPeerConnection for subscribers
	 * @access protected
	 * @param htmlElement
	 * @returns {Promise.<PeerConnection>}
	 */
	answer(htmlElement) {
		Log.i('PeerConnection~answer', {htmlElement, peerConnection: this});
		this.container = htmlElement;
		if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'ontrack')) {
			this.pc.ontrack = e => {
				Log.d('PeerConnection~ontrack', e.streams[0]);
				this.remoteStream = e.streams[0];
			};
		} else {
			this.pc.onaddstream = e => {
				Log.d('PeerConnection~onaddstream', e.stream);
				this.remoteStream = e.stream;
			};
		}

		// Listen to SDP offer
		DataSync.on(`${this._remotePath}/sdp`, 'value', snap => {
			const sdpOffer = snap.val();
			// Log.d('Offer', sdpOffer);
			if(sdpOffer != null) {
				Log.d(`PeerConnection~offered ${sdpOffer.sdp}`);
				this.pc.setRemoteDescription(sdpOffer)
					.then(() => Log.d('PeerConnection~answer#remoteDescription', this.pc.remoteDescription.sdp))
					.then(() => {
						if (/^offer$/.test(this.pc.remoteDescription.type)) {
							return this.pc.createAnswer();
						}
						return Promise.reject(new Error('SDP is not an offer'));
					})
					.then(description => this._setPreferredCodecs(description))
					.then(description => this.pc.setLocalDescription(description))
					.then(() => {
						Log.d('PeerConnection~answer#localSDP', this.pc.localDescription.sdp);
						this._remoteICECandidates(true);
					})
					.then(() => this._sendSdpToRemote())
					//.catch(Log.r('PeerConnection~answser#error'));
					.catch((e) => {
						console.error(`PeerConnection~answser#error ${e}`);
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
	 * @returns {Promise.<PeerConnection>}
	 */
	offer(stream) {
		Log.i('PeerConnection~offer', {stream, peerConnection: this});
		let sendTimeout;
		return new Promise((resolve, reject) => {
			this.pc.onnegotiationneeded = () => {
				Log.d('PeerConnection~onnegotiationneeded');
				// Debounce send (renegotiation triggers multiple negotiationneeded events)
				if(sendTimeout) {
					clearTimeout(sendTimeout);
					sendTimeout = null;
				}
				sendTimeout = setTimeout(() => {
					sendTimeout = null;
					this._sendOffer()
						.then(() => {
							resolve(this);
						})
						.catch(e => {
							Log.d('PeerConnection~offer', e);
							reject(e);
						});
				}, 20);
			};
			DataSync.on(`${this._remotePath}/sdp`, 'value', snap => {
				const sdpAnswer = snap.val();
				if(sdpAnswer != null) {
					Log.d(`PeerConnection~offer#answered ${sdpAnswer.sdp}`);
					this.pc.setRemoteDescription(sdpAnswer)
						.then(() => {
							Log.d('PeerConnection~offer#remoteDescription', this.pc.remoteDescription.sdp);
							this._remoteICECandidates(true);
						})
						.catch(Log.e.bind(Log, 'PeerConnection~offer#remoteDescription'));
				}
			});
			this._alterStream(stream, 'add');
		});
	}

	/**
	 * Edits the SDP to set the preferred audio/video codec
	 * @access private
	 * @param {string} sdp The sdp to be modified
	 * @returns {string}}
	*/
	/*_addVP8Codec(sdp) {
		let sdpresult = sdp;
		// Log.d('PeerConnection~_addVP8Codec');
		if (sdpresult === null) { return null; }
		const sdpLines = sdpresult.split(/\r?\n/);
		const medias = {audio: [], video: []};
		let current = null;
		let vp8InVideoList = false;
		let h264InVideoList = false;
		let lastIndex = 0;
		let firstIndex = 0;
		// Parse SDP
		sdpLines.forEach((sdpLine, i) => {
			if(/^m=video/.test(sdpLine)) {
				const d = /^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);
				current = { fmt: d[2].split(/\s/), index: i, codecs: [] };
				medias[d[1]].push(current);
				lastIndex = current.fmt[current.fmt.length - 1];
				firstIndex = current.fmt[0];
			} else if(current && /^a=rtpmap:/.test(sdpLine)) {
				const c = /^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);
				if(c) {
					current.codecs.push({ id: c[1], name: c[2], index: i });
					if (c[0].toUpperCase().indexOf('VP8') !== -1) { vp8InVideoList=true; }
					if (c[0].toUpperCase().indexOf('H264') !== -1) { h264InVideoList=true; }
				}
			}
		});
		const videoIndex = medias.video[0].index;
		if (!vp8InVideoList) {
			// lastIndex++;
			lastIndex = firstIndex - 1;
			let essai = sdpLines[videoIndex];
			for (let media in medias.video[0].fmt) {
				essai = essai.replace(' '+medias.video[0].fmt[media],'');
			}
			essai = essai.concat(' '+lastIndex);
			for (let media in medias.video[0].fmt) {
				essai = essai.concat(' '+medias.video[0].fmt[media]);
			}
			sdpLines[videoIndex] = essai;
			sdpresult = sdpLines.join('\r\n');
			sdpresult += `a=rtpmap:${lastIndex} VP8/90000 \r\n`+
											`a=rtcp-fb:${lastIndex} ccm fir \r\n`+
											`a=rtcp-fb:${lastIndex} nack \r\n`+
											`a=rtcp-fb:${lastIndex} nack pli \r\n`+
											`a=rtcp-fb:${lastIndex} goog-remb \r\n`+
											`a=rtcp-fb:${lastIndex} transport-cc \r\n`;
		}
		if (!h264InVideoList) {
			// lastIndex++;
			lastIndex = firstIndex - 1;
			let essai = sdpLines[videoIndex];
			for (let media in medias.video[0].fmt) {
				essai = essai.replace(' '+medias.video[0].fmt[media],'');
			}
			essai = essai.concat(' '+lastIndex);
			for (let media in medias.video[0].fmt) {
				essai = essai.concat(' '+medias.video[0].fmt[media]);
			}
			sdpLines[videoIndex] = essai;
			sdpresult = sdpLines.join('\r\n');
			sdpresult += `a=rtpmap:${lastIndex} H264/90000 \r\n`+
											`a=rtcp-fb:${lastIndex} ccm fir \r\n`+
											`a=rtcp-fb:${lastIndex} nack \r\n`+
											`a=rtcp-fb:${lastIndex} nack pli \r\n`+
											`a=rtcp-fb:${lastIndex} goog-remb \r\n`+
											`a=rtcp-fb:${lastIndex} transport-cc \r\n`+
											`a=rtcp-fb:${lastIndex} `+
											'level-asymmetry-allowed=1;packetization-mode=1;'+
											'profile-level-id=42e01f \r\n';
		}
		Log.d('PeerConnection~_addVP8Codec', sdpresult);
		return sdpresult;
	}*/

	/**
	 * Send SDP offer to the remote via DataSync
	 * @private
	 */
	_sendSdpToRemote() {
		// Log.d('PeerConnection~_sendSdpToRemote#localSDP', this.pc.localDescription.sdp);
		const remoteUserId = this.remote.to ? this.remote.to : this.remote.from;
		Device.get(remoteUserId, this.remote.device)
			.then((remoteDevice) => {
				const sdpOffer = this.pc.localDescription.sdp;
				let newSdp = sdpOffer;
				const local = /Chrome\/([0-9]+)/.exec(navigator.userAgent);
				const remote = /Chrome\/([0-9]+)/.exec(remoteDevice.userAgent);

				if (navigator.userAgent.indexOf('Chrome')!== -1 &&
					navigator.userAgent.indexOf('Android') !== -1 &&
					remoteDevice.userAgent.indexOf('Safari')!== -1 &&
					local[1] <= 64) {
					// newSdp =	this._addVP8Codec(sdpOffer);
					if (local[1] <= 60) {
						newSdp = newSdp.replace(/;profile-level-id=([a-z0-9]+)/,'');
					} else {
						newSdp =	newSdp.replace('42001f','42e01f');
					}
				}
				if (navigator.userAgent.indexOf('Safari')!== -1 &&
					remoteDevice.userAgent.indexOf('Chrome')!== -1 &&
					remoteDevice.userAgent.indexOf('Android')!== -1 &&
					remote[1] <= 64) {
					// newSdp =	this._addVP8Codec(sdpOffer);
					if (remote[1] <= 60) {
						newSdp = newSdp.replace(/;profile-level-id=([a-z0-9]+)/,'');
					} else {
						newSdp =	newSdp.replace('42e01f','42001f');
					}
				}
				Log.d(`PeerConnection~_sendSdpToRemote#SDP sent to remote ${newSdp}`);
				const descriptionChanged = {
					sdp: newSdp,
					type: this.pc.localDescription.type
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
			.then(description => this.pc.setLocalDescription(description))
			.then(() => Log.d('PeerConnection~_sendOffer#localDescription', this.pc.localDescription.sdp))
			.then(() => this._sendSdpToRemote());
	}

	/**
	 * Add/Remove tracks to the PeerConnection stream
	 * @param {MediaStream} stream
	 * @param {string} method
	 * @private
	 */
	_alterStream(stream, method) {
		if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, `${method}Track`)) {
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
		if((Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'getSenders'))
			&& ('RTCRtpSender' in window)
			&& Object.getOwnPropertyDescriptor(RTCRtpSender.prototype, 'replaceTrack')){

			// mozRTCPeerConnection implementation
			this.pc.getSenders().forEach(sender => {
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
				if(newTracks.length) {
					sender.replaceTrack(newTracks[0]);
				}
			});
			this._sendOffer()
				.catch(e => {Log.d('PeerConnection~renegotiate', e);});
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
		if(this._status === OPENED) {
			this._status = CLOSING;
			// Stop display
			if (this.node) {
				this.node.stop && this.node.stop();
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
					if(this.pc.signalingState !== 'closed') {
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
	 * @param {RTCSessionDescription} description The description retrieved by createOffer/createAnswer
	 * @returns {RTCSessionDescription|{sdp: string, type: string}}
	 */
	_setPreferredCodecs(description) {
		if(cache.config.preferredVideoCodec || cache.config.preferredAudioCodec) {
			Log.d('PeerConnection~_setPreferredCodecs', {description, config: cache.config});
			const sdpLines = description.sdp.split(/\r?\n/);
			const medias = {audio: [], video: []};
			let current = null;
			// Parse SDP
			sdpLines.forEach((sdpLine, i) => {
				if(/^m=/.test(sdpLine)) {
					const d = /^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);
					current = {
						fmt: d[2].split(/\s/),
						index: i,
						codecs: []
					};
					medias[d[1]].push(current);
				} else if(current && /^a=rtpmap:/.test(sdpLine)) {
					const c = /^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);
					if(c) {
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
				mediaList.forEach(media => {
					const selected = media.codecs.find(codec => preferedCodec.test(codec.name));
					if(selected) {
						const fmt = [selected.id].concat(media.fmt.filter(ids => ids !== selected.id));
						sdpLines[media.index] = sdpLines[media.index].replace(media.fmt.join(' '), fmt.join(' '));
						update = true;
					}
				});
			};
			if(cache.config.preferredVideoCodec) {
				prefer(medias.video, cache.config.preferredVideoCodec);
			}
			if(cache.config.preferredAudioCodec) {
				prefer(medias.audio, cache.config.preferredAudioCodec);
			}
			if(update) {
				Log.d('PeerConnection~_setPreferredCodecs', sdpLines.join('\r\n'));
				return {
					sdp: sdpLines.join('\r\n'),
					type: description.type
				};
			}
		}
		return description;
	}
}

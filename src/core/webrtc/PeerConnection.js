import cache from '../util/cache';
import * as Log from '../util/Log';
import * as DataSync from '../util/DataSync';

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
 * The PeerConnection. A PeerConnection will only concern one MediaStream.
 * @class PeerConnection
 */
export default class PeerConnection {
	/**
	 * @access protected
	 * @param {string} stackId The WebRTC stack ID
	 * @param {string} streamId The Stream UID
	 * @param {string} remoteDevice The remote device's UID
	 * @param {boolean} publish Publish or Subscribe ?
	 */
	constructor(stackId, streamId, remoteDevice, publish) {
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
		 * The remote device Id
		 * @type {string}
		 */
		this.remoteDevice = remoteDevice;
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
		this._remotePath = `_/webrtc/${this.stackId}/${this.streamId}/${this.remoteDevice}`;
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
				DataSync.push(`${this._localPath}/ice`, e.candidate.toJSON());
			}
		};
		this.pc.oniceconnectionstatechange = () => {
			Log.d('PeerConnection~oniceconnectionstatechange', this.pc.iceConnectionState);
			const iceConnectionState = this.pc.iceConnectionState;
			switch (iceConnectionState) {
				case ICE_CONNECTION_STATE_CHECKING:
					// Nothing to do yet
					break;
				case ICE_CONNECTION_STATE_CONNECTED:
					this.attachStream();
					this._remoteICECandidates(false);
					break;
				case ICE_CONNECTION_STATE_COMPLETED:
					this._remoteICECandidates(false);
					break;
				case ICE_CONNECTION_STATE_DISCONNECTED:
				case ICE_CONNECTION_STATE_CLOSED:
				case ICE_CONNECTION_STATE_FAILED:
					Log.d('PeerConnection~oniceconnectionstatechange', 'Close PeerConnection');
					this.close();
					break;
			}
			this.negotiated = this.negotiated || this.isConnected;
		};

		this.pc.onicegatheringstatechange = () => {
			Log.d('PeerConnection~onicegatheringstatechange', this.pc.iceGatheringState);
		};
		
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
	 * @access protected
	 */
	attachStream () {
		if(this.remoteStream && this.isConnected) {
			this.node.autoplay = true;
			this.node.srcObject = this.remoteStream;
			this.node.disabled = false;
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
		this.attachStream();
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
		this.node = htmlElement;
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
			Log.d('Offer', sdpOffer);
			if(sdpOffer != null) {
				Log.d('PeerConnection~offered', sdpOffer);
				this.pc.setRemoteDescription(new RTCSessionDescription(sdpOffer))
					.then(() => Log.d('PeerConnection~remoteDescription', this.pc.remoteDescription))
					.then(() => {
						if (/^offer$/.test(this.pc.remoteDescription.type)) {
							return this.pc.createAnswer();
						}
						return Promise.reject(new Error('SDP is not an offer'));
					})
					.then(description => this._setPreferredCodecs(description))
					.then(description => this.pc.setLocalDescription(description))
					.then(() => {
						Log.d('PeerConnection~localDescription', this.pc.localDescription);
						this._remoteICECandidates(true);
					})
					.then(() =>
						DataSync.update(
							`${this._localPath}/sdp`,
							this.pc.localDescription.toJSON()
						)
					)
					.catch(Log.r.bind(Log, 'PeerConnection~localDescription'));
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
		return new Promise((resolve, reject) => {
			this.pc.onnegotiationneeded = () => {
				Log.d('PeerConnection~onnegotiationneeded');
				this._sendOffer()
					.then(() => {resolve(this);})
					.catch(e => {
						Log.d('PeerConnection~offer', e);
						reject(e);
					});
			};
			DataSync.on(`${this._remotePath}/sdp`, 'value', snap => {
				const sdpAnswer = snap.val();
				if(sdpAnswer != null) {
					Log.d('PeerConnection~offer#answered', sdpAnswer);
					this.pc.setRemoteDescription(new RTCSessionDescription(sdpAnswer))
						.then(() => {
							Log.d('PeerConnection~offer#remoteDescription', this.pc.remoteDescription);
							this._remoteICECandidates(true);
						})
						.catch(Log.e.bind(Log, 'PeerConnection~remoteDescription'));
				}
			});

			if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'addTrack')) {
				stream.getTracks().forEach(track => this.pc.addTrack(track, stream), this);
			} else {
				this.pc.addStream(stream);
			}
		});
	}

	/**
	 * Create SDP offer and push it
	 * @returns {Promise}
	 * @private
	 */
	_sendOffer() {
		return this.pc.createOffer()
			.then(description => this.pc.setLocalDescription(description))
			.then(() => Log.d('PeerConnection~renegotiate#localDescription', this.pc.localDescription))
			.then(() => DataSync.update(`${this._localPath}/sdp`, this.pc.localDescription.toJSON()));
	}

	/**
	 * Restart SDP negotiation following a MediaStream change
	 * @access protected
	 * @param {MediaStream} oldStream
	 * @param {MediaStream} newStream
	 */
	renegotiate(oldStream, newStream) {
		Log.d('PeerConnection~renegotiate');

		if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'getSenders')){
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
			if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'removeTrack')) {
				oldStream.getTracks().forEach(track => this.pc.removeTrack(track, oldStream), this);
			} else {
				this.pc.removeStream(oldStream);
			}
			if(Object.getOwnPropertyDescriptor(RTCPeerConnection.prototype, 'addTrack')) {
				newStream.getTracks().forEach(track => this.pc.addTrack(track, newStream), this);
			} else {
				this.pc.addStream(newStream);
			}
		}
	}

	/**
	 * Close the PeerConnection and stop listening to SDP messages
	 * @access protected
	 */
	close() {
		// Stop listening to remote ICE candidates
		this._remoteICECandidates(false);
		// Stop listening to SDP messages
		DataSync.off(`${this._remotePath}/sdp`, 'value');
		// Remove data
		DataSync.remove(this._localPath);
		// Close PeerConnection
		if(this.pc && this.pc.signalingState !== 'closed'){
			this.pc.close();
		}
	}

	/**
	 * Edits the SDP to set the preferred audio/video codec
	 * @access private
	 * @param {RTCSessionDescription} description The description retrieved by createOffer/createAnswer
	 * @returns {RTCSessionDescription}
	 */
	_setPreferredCodecs(description) {
		if(cache.config.preferredVideoCodecs || cache.config.preferredAudioCodecs) {
			Log.d('PeerConnection~_setPreferredCodecs', {description, config: cache.config});
			// TODO Edit SDP to change default codec
		}
		return description;
	}
}
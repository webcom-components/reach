/**
 * @file webrtc.js - JS file used for WebRTC aspects
 * @author Webcom
 */

import actions from './actions';
import localstream from './localstream';
import vars from './actions';

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
const ICE_CONNECTION_STATE_COMPLETED= 'completed';

/**
 * ICE connection status : checking
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CHECKING= 'checking';

/**
 * ICE connection status : closed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_CLOSED= 'closed';

/**
 * ICE connection status : failed
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_FAILED= 'failed';

/**
 * ICE connection status : another status
 * @constant
 * @type {string}
 */
const ICE_CONNECTION_STATE_OTHER= 'other';


/**
 * The default ICE configuration for TURN and STUN servers to use for WebRTC communicationx
 * NB : these configuration will be overwriten by the configuration on the Webcom server if present
 * @constant
 * @type {json}
 */

const DEFAULT_ICE_CONFIG = {
	iceServers: [
		{
			'url': 'turns:turn1.webcom.orange.com:443',
			'username': 'admin',
			'credential': 'webcom1234'
		},
		{
			'url': 'turn:turn1.webcom.orange.com:3478',
			'username': 'admin',
			'credential': 'webcom1234'
		},
		{
			'url': 'turns:webcom1.orange-labs.fr:443',
			'username': 'admin',
			'credential': 'webcom1234'
		}
	]
};


/**
 * @constructor
 * @description WebRTC connection object. Manages a WebRTC connection, i.e. one peerconnection
 * @param p_webrtcmngr - Reference to WebRTCManager
 * @param p_isPublish - Flag indicating if there is a plublish action
 * @param p_localDataRef - The local data ref
 * @param p_remoteDataRef - The remote data ref
 * @param p_webrtcStackId - The stack ID in use
 * @param p_actionType -
 * @param p_muteAudio - optional - if true peerconnection will be created with audio muted
 * @param p_muteVideo - optional - if true peerconnection will be created with video muted

 */
var webrtc = function (p_webrtcmngr, p_isPublish, p_localDataRef, p_remoteDataRef, p_webrtcStackId, p_actionType, p_muteAudio, p_muteVideo) {

	/**
	 * @description WebRTC manager object. Useful to clear webrtc stack
	 */
	var webrtcmngr = p_webrtcmngr;
	/**
	 * @description The WebRTC stack identifier, here the current timestamp
	 */
	var stackId = new Date().getTime();
	/**
	 * @description If there is a publish action or not
	 */
	var isPublish = p_isPublish;
	/**
	 * @description The peer connection
	 */
	var pc = null;
	/**
	 * @description The local data ref
	 */
	var localDataRef = p_localDataRef;
	/**
	 * @description The remtoe data ref
	 */
	var remoteDataRef = p_remoteDataRef;
	/**
	 * @description A callback to trigger where a list of ICE candidates is provided
	 */
	var iceCandidatesListCb = null;
	/**
	 * @description A callback triggered when a SDP offer has been received
	 */
	var sdpOfferCb = null;
	/**
	 * @description A callback triggered when a SDP answer has been received
	 */
	var sdpAnswerCb = null;
	/**
	 * @description A callback triggered on a remote dataref event
	 */
	var remotedatarefCb = null;
	/**
	 * @description A callback triggered when the connection is closing
	 */
	var onCloseCb = null;
	/**
	 * @description The WebRTC stack ID
	 */
	var webrtcStackId = p_webrtcStackId;
	/**
	 * @description The action type to process
	 */
	var actionType = p_actionType;
	/**
	 * @description The configuration
	 */
	var config = null;

	/**
	 * @description A peer connection object, for cross browsers compatibilities
	 */
	var myPeerConnection = null;
	//var myCreateObjectURL = null;
	/**
	 * @description An RTC session description, for cross browsers compatibilities
	 */
	var myRTCSessionDescription = null;
	/**
	 * @description An RTC ICE candidate, for cross browsers compatibilities
	 */
	var myRTCIceCandidate = null;

	/**
	 * @description An array containing local streams
	 */
	var localStreams = [];
	/**
	 * @description An array containing remote streams
	 */
	var remoteStreams = [];
	/**
	 * @description An array containing remote streams CB
	 */
	var remoteStreamsCb = [];
	/**
	 * @description The received stream
	 */
	var receivedStream = null;
	/**
	 * @description The sent stream
	 */
	var sentStream = null;
	/**
	 * @description Flag indicating if the connection is closed
	 */
	var isClosed = false;
	/**
	 * @description Flag indicating if the close process is on going
	 */
	var closeInProgress = false;
	/**
	 * @description The ICE connection state
	 */
	var iceConnectionState = null;
	/**
	 * @description Another callback to trigger when the connection should be closed
	 */
	var onCloseCb2 = null;

	var isAudioMute = false;

	var isVideoMute = false;


	console.log('(webcomSDK::webrtc::)stackId=' + stackId + ' isPublish=' + isPublish + ',localDataRef=' + localDataRef + ',remoteDataRef=' + remoteDataRef + ')');

	/**
	 * @description A Datagram Transport Layer Security (DTLS) key agreement
	 */
	var DtlsSrtpKeyAgreement = {
		DtlsSrtpKeyAgreement: true
	};

	/**
	 * @description - Some options
	 */
	var optional = {
		optional: [DtlsSrtpKeyAgreement]
	};

	/**
	 * @description The publisher media constraints as a JSON array
	 */
	var publisherMediaConstraints = {
		'mandatory': {
			'OfferToReceiveAudio': false,
			'OfferToReceiveVideo': false
		}
	};

	/**
	 * @description The subscriber media constraints as a JSON array
	 */
	var subscriberMediaConstraints = {
		'mandatory': {
			'OfferToReceiveAudio': true,
			'OfferToReceiveVideo': true
		}
	};

	/**
	 * Callback to trigger when an error occurs
	 * @param e - The error
	 */
	function onError(e) {
		console.log('(webcomSDK::webrtc::)stackId=' + stackId + 'error=' + e);
		console.dir(e);
	}

	/**
	 * Initializes the object
	 */
	function init() {
		console.log('(webcomSDK::webrtc::init)stackId=' + stackId);
		// peerconnection
		if (typeof(RTCPeerConnection) === 'function') {
			myPeerConnection = RTCPeerConnection;
		}
		else {
			console.error('(webcomSDK::webrtc::init)stackId=' + stackId + ' error=Webrtc is not supported on this browser !');
			throw new Error('Webrtc is not supported on this browser !');
		}

		if (typeof(RTCSessionDescription) === 'function') {
			myRTCSessionDescription = RTCSessionDescription;
		}
		else {
			console.error('(webcomSDK::webrtc::init)stackId=' + stackId + ' error2=Webrtc is not supported on this browser !');
			throw new Error('Webrtc is not supported on this browser !');
		}

		if (typeof(RTCIceCandidate) === 'function') {
			myRTCIceCandidate = RTCIceCandidate;
		}
		else {
			console.error('(webcomSDK::webrtc::init)stackId=' + stackId + ' error3=Webrtc is not supported on this browser !');
			throw new Error('Webrtc is not supported on this browser !');
		}

		if (p_muteAudio) isAudioMute = true;
		if (p_muteVideo) isVideoMute = true;

		getIceServersConfigFromServer(function (_config) {
			config = _config;
			console.log('(webcomSDK::webrtc::) use server config=', JSON.stringify(config));
			init_pc();
		}, function () {
			if (typeof DEFAULT_ICE_CONFIG !== 'undefined') {
				config = DEFAULT_ICE_CONFIG;
				console.log('(webcomSDK::webrtc::) use DEFAULT_ICE_CONFIG config=', JSON.stringify(config));
			} else {
				console.log('(webcomSDK::webrtc::) no ice  config');
			}
			init_pc();
		});

	}

	/**
	 * Initializes the peer connection
	 */
	function init_pc() {
		console.log('(webcomSDK::webrtc::init_pc)stackId=' + stackId + '_config=', JSON.stringify(config));
		// TODO test is config is malformated or empty
		pc = new myPeerConnection(config, optional);


		// ------------------------------------------------------------------
		// Received Ice candidate from the stack: send it to the peer
		// ------------------------------------------------------------------
		pc.onicecandidate = function (e) {
			if (e.candidate) {
				console.log('(webcomSDK::webrtc::pc.onicecandidate)stackId=' + stackId + ' send ice candidate=' + JSON.stringify(e.candidate));
				localDataRef.child('iceCandidatesList').push({
					label: e.candidate.sdpMLineIndex,
					id: e.candidate.sdpMid,
					candidate: e.candidate.candidate
				});
			}
		};

		// ------------------------------------------------------------------
		// Received a remote stream from the stack: play it on the video player
		// ------------------------------------------------------------------
		pc.onaddstream = function (e) {
			console.debug('(webcomSDK::webrtc::onaddstream)stackId=' + stackId + '-' + 'stream:' + JSON.stringify(e.stream));
			if (e && e.stream) {
				receivedStream = e.stream;
				if (isAudioMute) _muteAudio();
				if (isVideoMute) _muteVideo();
			}
//            _remoteStream = e.stream;
//
//			for (var i=0;i<remoteStreams.length;i++) {
//			    if (remoteStreams[i]) {
//			    	  console.debug("(webcomSDK::webrtc::onaddstream)pc.onaddstream stackId="+stackId + "-" +"rendering remote vid to "+remoteStreams[i].id);
//			    	  attachMediaStream( remoteStreams[i],_remoteStream);
//			    }
//			}
		};

		pc.oniceconnectionstatechange = function () {

			if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CHECKING) {
				console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'checking');
				iceConnectionState = ICE_CONNECTION_STATE_CHECKING;
			} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CONNECTED) {
				iceConnectionState = ICE_CONNECTION_STATE_CONNECTED;
				console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'connected');
				if (receivedStream) {
					for (var i = 0; i < remoteStreams.length; i++) {
						if (remoteStreams[i]) {
							console.debug('(webcomSDK::webrtc::onaddstream)pc.onaddstream stackId=' + stackId + '-' + 'rendering remote vid to ' + remoteStreams[i].id);
							attachMediaStream(remoteStreams[i], receivedStream);
						}
					}
					for (var j = 0; j < remoteStreamsCb.length; j++) {
						if (remoteStreamsCb[j]) {
							remoteStreamsCb[j](receivedStream);
						}
					}
					remoteStreamsCb = [];
				}
				stopListeningToRemoteIceCandidate();
			} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_COMPLETED) {
				iceConnectionState = ICE_CONNECTION_STATE_COMPLETED;
				console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + ICE_CONNECTION_STATE_COMPLETED);
				stopListeningToRemoteIceCandidate();
			}
			if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_DISCONNECTED) {
				iceConnectionState = ICE_CONNECTION_STATE_DISCONNECTED;
				console.log('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'remote disconnection, closing peer connection');
				_close();
			} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CLOSED) {
				console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'closed');
				iceConnectionState = ICE_CONNECTION_STATE_CLOSED;
				_close();
			} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_FAILED) {
				console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'failed');
				iceConnectionState = ICE_CONNECTION_STATE_FAILED;
				_close();
			} else {
				if (pc) {
					console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + pc.iceConnectionState);
				} else {
					console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-pc = null');
				}

				iceConnectionState = ICE_CONNECTION_STATE_OTHER;
			}

			if (isClosed && (iceConnectionState === ICE_CONNECTION_STATE_DISCONNECTED || iceConnectionState === ICE_CONNECTION_STATE_CLOSED || iceConnectionState === ICE_CONNECTION_STATE_FAILED)) {
				console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closed webrtc stack complete');
				pc = null;
				closeInProgress = false;
				webrtcmngr.clearWebrtcStacks(webrtcStackId);
				if (onCloseCb && typeof onCloseCb == 'function') {
					onCloseCb();
				}
				if (onCloseCb2 && typeof onCloseCb2 == 'function') {
					onCloseCb2();
				}

			}
		};

		// subscribe to remote data
		iceCandidatesListCb = function (snapshot) {
			var data = snapshot.val();
			var candidate = new myRTCIceCandidate({
				sdpMLineIndex: data.label,
				candidate: data.candidate,
				sdpMid: data.id
			});
			console.log('(webcomSDK::webrtc::iceCandidatesListCb)stackId=' + stackId + 'received ice candidate=' + JSON.stringify(candidate));

			pc.addIceCandidate(candidate);
			// remove candidate from webcom
			//snapshot.ref().remove();
		};

		if (isPublish) {
			_initlocalStream(function () {
				_initSdpCallbacks();
				sendOffer();

			});
		} else {
			_initSdpCallbacks();
		}


	}

	/**
	 * Gets the ICE servers configuration
	 * @param callbackOk - The callback to trigger when the config retrievement is done
	 * @param callbackKo - The callback to trigger when an error occurs
	 */
	function getIceServersConfigFromServer(callbackOk, callbackKo) {
		console.log('webcomSDK::webrtc::getIceServersConfigFromServer');
		var _config;
		if (localDataRef) {
			var fireConfig = localDataRef.root().child('config');
			fireConfig.once('value', function (snapshot) {
				if (snapshot && snapshot.val()) {
					_config = snapshot.val();
					if (typeof callbackOk == 'function')
						callbackOk(_config);
				} else {
					if (typeof callbackKo == 'function')
						callbackKo();
				}
			}, function (error) {
				if (typeof callbackKo == 'function')
					callbackKo(error);
			});
		} else {
			if (typeof callbackKo == 'function')
				callbackKo();
		}
	}

	/**
	 * Starts the listing to a remote ICE candidate by enabling the dedicated callback
	 * for the "child_added" event on the "iceCandidatesList" node in the database.
	 */
	function startListeningToRemoteIceCandidate() {
		remoteDataRef.child('iceCandidatesList').on('child_added', iceCandidatesListCb);
	}

	/**
	 * Stops the listening to remote ICE candisdate by disabling the dedicated callback
	 * for the "child_added" event on the "iceCandidatesList" node in the database.
	 */
	function stopListeningToRemoteIceCandidate() {
		remoteDataRef.child('iceCandidatesList').off('child_added', iceCandidatesListCb);
	}

	/**
	 * Initializes the local stream
	 * @param callback - A callback to trigger when the initialisation is done
	 */
	function _initlocalStream(callback) {
		// get local video stream and renders to localVid
		console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' get local video stream and renders to local video');
		if (actionType) {
			var initlocalStream;
			if (actionType === vars.ACTION_TYPE_VIDEO) {
				initlocalStream = function () {
					console.log('(webcomSDK::webrtc::_initlocalStream)initlocalStream_video');
					if (localstream.getVideoStream() && localstream.getVideoStream().clone && typeof localstream.getVideoStream().clone == 'function') {
						sentStream = localstream.getVideoStream().clone();
					} else {
						sentStream = localstream.getVideoStream();
					}
					if (isAudioMute) _muteAudio();
					if (isVideoMute) _muteVideo();
					pc.addStream(sentStream);
					for (var i = 0; i < localStreams.length; i++) {
						console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' rendering local video to ' + localStreams[i].id);
						attachMediaStream(localStreams[i], localstream.getVideoStream());
					}

					if (callback && typeof callback == 'function') {
						callback();
					}
				};
				if (localstream.getVideoStream()) {
					initlocalStream();
				} else {
					localstream.addVideoListener(initlocalStream);
					localstream.initVideo();
				}
			} else if (actionType === vars.ACTION_TYPE_AUDIO) {
				initlocalStream = function () {
					console.log('(webcomSDK::webrtc::_initlocalStream)initlocalStream_audio');
					if (localstream.getAudioStream() && localstream.getAudioStream().clone && typeof localstream.getAudioStream().clone == 'function') {
						sentStream = localstream.getAudioStream().clone();
					} else {
						sentStream = localstream.getAudioStream();
					}
					if (isAudioMute) _muteAudio();
					if (isVideoMute) _muteVideo();
					pc.addStream(sentStream);
					for (var i = 0; i < localStreams.length; i++) {
						console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' rendering local Audio to ' + localStreams[i].id);
						attachMediaStream(localStreams[i], localstream.getAudioStream());
					}

					if (callback && typeof callback == 'function') {
						callback();
					}
				};
				if (localstream.getAudioStream()) {
					initlocalStream();
				} else {
					localstream.addAudioListener(initlocalStream);
					localstream.initAudio();
				}
			} else if (actionType === actions.ACTION_TYPE_AUDIO_VIDEO) {
				initlocalStream = function () {
					console.log('(webcomSDK::webrtc::_initlocalStream)initlocalStream_audio_video');
					if (localstream.getAudioVideoStream() && localstream.getAudioVideoStream().clone && typeof localstream.getAudioVideoStream().clone == 'function') {
						sentStream = localstream.getAudioVideoStream().clone();
					} else {
						sentStream = localstream.getAudioVideoStream();
					}
					if (isAudioMute) _muteAudio();
					if (isVideoMute) _muteVideo();

					pc.addStream(sentStream);
					for (var i = 0; i < localStreams.length; i++) {
						console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' rendering local AudioVideo to ' + localStreams[i].id);
						attachMediaStream(localStreams[i], localstream.getAudioVideoStream());
					}

					if (callback && typeof callback == 'function') {
						callback();
					}


				};
				if (localstream.getAudioVideoStream()) {
					initlocalStream();
				} else {
					localstream.addAudioVideoListener(initlocalStream);
					localstream.initAudioVideo();
				}
			} else if (actionType === actions.ACTION_TYPE_SCREEN_SHARING) {
				initlocalStream = function () {
					console.log('(webcomSDK::webrtc::_initlocalStream)initlocalStream_screen_sharing');
					if (localstream.getScreenSharingStream() && localstream.getScreenSharingStream().clone && typeof localstream.getScreenSharingStream().clone == 'function') {
						sentStream = localstream.getScreenSharingStream().clone();
					} else {
						sentStream = localstream.getScreenSharingStream();
					}
					if (isAudioMute) _muteAudio();
					if (isVideoMute) _muteVideo();
					pc.addStream(sentStream);
					for (var i = 0; i < localStreams.length; i++) {
						console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' rendering local Screensharing to ' + localStreams[i].id);
						attachMediaStream(localStreams[i], localstream.getScreenSharingStream());
					}

					if (callback && typeof callback == 'function') {
						callback();
					}
				};
				if (localstream.getScreenSharingStream()) {
					initlocalStream();
				} else {
					localstream.addScreenSharingListener(initlocalStream);
					localstream.initScreenSharing();
				}
			}
		} else {
			console.warn('(webcomSDK::webrtc::_initlocalStream)no actionType specified');
		}

	}

	/**
	 * Prepares the SDP callbacks.
	 * Remote description will by defined for the peer connection and callbacks are defined for SDP answser and response management.
	 * If there is no publishing, local description will be defined.
	 */
	function _initSdpCallbacks() {
		console.debug('(webcomSDK::webrtc::_initSdpCallbacks)stackId=' + stackId);
		if (isPublish) {
			if (sdpOfferCb) remoteDataRef.off('child_added', sdpOfferCb);
			sdpAnswerCb = function (snapshot) {
				if (!isClosed && snapshot.name() === 'sdpAnswer') {
					var data = snapshot.val();
					console.debug('(webcomSDK::webrtc::sdpAnswerCb)stackId=' + stackId + '-' + 'received sdpAnswer: ' + JSON.stringify(data));
					pc.setRemoteDescription(new myRTCSessionDescription(data), function () {
						console.debug('(webcomSDK::webrtc::sdpAnswerCb)stackId=' + stackId + '-' + 'remote description set');
						// remove sdpAnswer from webcom
						//snapshot.ref().remove();
						startListeningToRemoteIceCandidate();
					}, onError);
					remoteDataRef.off('child_added', sdpAnswerCb);
				}
			};
			remoteDataRef.on('child_added', sdpAnswerCb);
		} else {
			if (sdpAnswerCb) remoteDataRef.off('child_added', sdpAnswerCb);
			sdpOfferCb = function (snapshot) {
				if (!isClosed && snapshot.name() === 'sdpOffer') {
					var data = snapshot.val();
					console.debug('(webcomSDK::webrtc::sdpOfferCb)stackId=' + stackId + '-' + 'received sdpOffer: ' + JSON.stringify(data));
					pc.setRemoteDescription(new myRTCSessionDescription(data), function () {
						pc.createAnswer(function (description) {
							console.log('(webcomSDK::webrtc::sdpOfferCb)stackId=' + stackId + '-' + 'sending answer');
							pc.setLocalDescription(description, function () {
								console.debug('(webcomSDK::webrtc::sdpOfferCb)stackId=' + stackId + '-' + 'set sdpAnswer in base : ' + JSON.stringify(description));
								localDataRef.child('sdpAnswer').set(JSON.parse(JSON.stringify(description))); // decoding/encoding because of Firefox bug
								// remove sdpOffer from webcom
								//snapshot.ref().remove();
								startListeningToRemoteIceCandidate();
							}, onError);
						}, onError, subscriberMediaConstraints);
					}, onError);
					remoteDataRef.off('child_added', sdpOfferCb);
				}
			};
			remoteDataRef.on('child_added', sdpOfferCb);
		}
	}

	/**
	 * Closes the SDP callbacks by disabling callbacks for the "child_added" event and by defining them to null.
	 */
	function _closeSdpCallbacks() {
		if (sdpAnswerCb) {
			remoteDataRef.off('child_added', sdpAnswerCb);
			sdpAnswerCb = null;
		}
		if (sdpOfferCb) {
			remoteDataRef.off('child_added', sdpOfferCb);
			sdpOfferCb = null;
		}
	}

	/**
	 * Sends an SDP offer through the peer connection.
	 * An SDP offer is created, with a local description, and is sent.
	 * The description is both decoded and encoded because of Firefox bugs.
	 */
	function sendOffer() {
		// ------------------------------------------------------------------
		// publie l'offre initiale
		// ------------------------------------------------------------------
		console.log('(webrtc::sendOffer)stackid=' + stackId + '-' + 'creating sdpOffer');
		pc.createOffer(function (description) {
			pc.setLocalDescription(description, function () {
				console.debug('(webcomSDK::webrtc::createOffer)stackId=' + stackId + '-' + 'set sdpOffer in base : ' + JSON.stringify(description));
				localDataRef.child('sdpOffer').set(JSON.parse(JSON.stringify(description))); // decoding/encoding because of Firefox bug
			}, onError);
		}, onError, publisherMediaConstraints);
	}

	/**
	 * Closes the connection and triggers the callback when the operation is done
	 * @param callback
	 */
	function _close(callback) {

		if (!closeInProgress && !isClosed) {
			closeInProgress = true;
			onCloseCb2 = callback;
			console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closing webrtc stack');
			if (pc) {
				pc.close();

			}

			// remove webcom callbacks
			if (remotedatarefCb) {
				remoteDataRef.off('child_added', remotedatarefCb);
				remotedatarefCb = null;
			}

			if (iceCandidatesListCb) {
				stopListeningToRemoteIceCandidate();
				iceCandidatesListCb = null;
			}
			_closeSdpCallbacks();

			// remove webcom data
//			localDataRef.parent().onDisconnect().cancel();
//			localDataRef.parent().onDisconnect().remove();
			//remoteDataRef.remove();

			// stop video
			for (var i = 0; i < localStreams.length; i++) {
				if (localStreams[i]) {
					//localStreams[i].src=""; not supported by Firefox
					detachMediaStream(localStreams[i]);
					//localStreams[i].removeAttribute("src");
					console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'stopping local video to ' + localStreams[i].id);
				}
			}
			for (var j = 0; j < remoteStreams.length; j++) {
				if (remoteStreams[j]) {
					//remoteStreams[j].src=""; not supported by Firefox
					detachMediaStream(remoteStreams[j]);
					//remoteStreams[j].removeAttribute("src");
					console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'stopping remote vid to ' + remoteStreams[j].id);
				}
			}


			isClosed = true;
			console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closing webrtc stack -> waiting for ICE_CONNECTION_STATE_DISCONNECTED');
			if (isClosed && (iceConnectionState === ICE_CONNECTION_STATE_DISCONNECTED || iceConnectionState === ICE_CONNECTION_STATE_CLOSED || iceConnectionState === ICE_CONNECTION_STATE_FAILED)) {
				console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closed webrtc stack complete');
				pc = null;
				closeInProgress = false;
				webrtcmngr.clearWebrtcStacks(webrtcStackId);
				if (onCloseCb2 && typeof onCloseCb2 == 'function') {
					onCloseCb2();
				}
			}
		} else {
			console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closing webrtc stack already in progress');
		}
	}

	function _muteAudio() {
		console.log('(webcomSDK::webrtc::_muteAudio)stackId=' + stackId);
		isAudioMute = true;
		var audioTracks;
		if (isPublish && sentStream) {
			audioTracks = sentStream.getAudioTracks();
			if (audioTracks && audioTracks.length > 0) {
				for (var i = 0; i < audioTracks.length; i++) {
					if (audioTracks[i]) audioTracks[i].enabled = false;
				}
			}
		} else if (!isPublish && receivedStream) {
			audioTracks = receivedStream.getAudioTracks();
			if (audioTracks && audioTracks.length > 0) {
				for (var j = 0; j < audioTracks.length; j++) {
					if (audioTracks[j]) audioTracks[j].enabled = false;
				}
			}
		}
	}

	function _unmuteAudio() {
		console.log('(webcomSDK::webrtc::_unmuteAudio)stackId=' + stackId);
		isAudioMute = false;
		var audioTracks;
		if (isPublish && sentStream) {
			audioTracks = sentStream.getAudioTracks();
			if (audioTracks && audioTracks.length > 0) {
				for (var i = 0; i < audioTracks.length; i++) {
					if (audioTracks[i]) audioTracks[i].enabled = true;
				}
			}
		} else if (!isPublish && receivedStream) {
			audioTracks = receivedStream.getAudioTracks();
			if (audioTracks && audioTracks.length > 0) {
				for (var j = 0; j < audioTracks.length; j++) {
					if (audioTracks[j]) audioTracks[j].enabled = true;
				}
			}
		}
	}

	function _muteVideo() {
		console.log('(webcomSDK::webrtc::_muteVideo)stackId=' + stackId);
		isVideoMute = true;
		var videoTracks;
		if (isPublish && sentStream) {
			videoTracks = sentStream.getVideoTracks();
			if (videoTracks && videoTracks.length > 0) {
				for (var i = 0; i < videoTracks.length; i++) {
					if (videoTracks[i]) videoTracks[i].enabled = false;
				}
			}
		} else if (!isPublish && receivedStream) {
			videoTracks = receivedStream.getVideoTracks();
			if (videoTracks && videoTracks.length > 0) {
				for (var j = 0; j < videoTracks.length; j++) {
					if (videoTracks[j]) videoTracks[j].enabled = false;
				}
			}
		}
	}

	function _unmuteVideo() {
		console.log('(webcomSDK::webrtc::_unmuteVideo)stackId=' + stackId);
		isVideoMute = false;
		var videoTracks;
		if (isPublish && sentStream) {
			videoTracks = sentStream.getVideoTracks();
			if (videoTracks && videoTracks.length > 0) {
				for (var i = 0; i < videoTracks.length; i++) {
					if (videoTracks[i]) videoTracks[i].enabled = true;
				}
			}
		} else if (!isPublish && receivedStream) {
			videoTracks = receivedStream.getVideoTracks();
			if (videoTracks && videoTracks.length > 0) {
				for (var j = 0; j < videoTracks.length; j++) {
					if (videoTracks[j]) videoTracks[j].enabled = true;
				}
			}
		}
	}


	function _connectLocalStream(videoElt, getStreamCb) {
		if (actionType) {
			if (actionType === actions.ACTION_TYPE_VIDEO) {
				localstream.connectLocalVideoStream(videoElt, getStreamCb);
			} else if (actionType === actions.ACTION_TYPE_AUDIO) {
				localstream.connectLocalAudioStream(videoElt, getStreamCb);
			} else if (actionType === actions.ACTION_TYPE_AUDIO_VIDEO) {
				localstream.connectLocalAudioVideoStream(videoElt, getStreamCb);
			}
		}
	}


	function _connectRemoteStream(videoElt, getStreamCb) {
		if (videoElt) {
			if (receivedStream) {
				attachMediaStream(videoElt, receivedStream);
				if (getStreamCb && typeof getStreamCb == 'function') {
					getStreamCb(receivedStream);
				}
			} else {
				remoteStreams.push(videoElt);
				if (getStreamCb && typeof getStreamCb == 'function') {
					remoteStreamsCb.push(getStreamCb);
				}
			}
		} else {
			if (receivedStream) {
				if (getStreamCb && typeof getStreamCb == 'function') {
					getStreamCb(receivedStream);
				}
			} else {
				if (getStreamCb && typeof getStreamCb == 'function') {
					remoteStreamsCb.push(getStreamCb);
				}
			}

		}
	}

	init();
	return {

		/**
		 * Defines the callback to trigger so as to close the communication
		 * @param {function} cb - The callback to trigger
		 */
		setOnClose: function (cb) {
			onCloseCb = cb;
		},
		/**
		 * Closes a callback
		 * @param {function} cb - The callback to close
		 */
		close: function (cb) {
			console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-close requested');
			_close(cb);
		},
		/**
		 * Connect a local stream to an element according to the action type in use (ACTION_TYPE_VIDEO, ACTION_TYPE_AUDIO, ACTION_TYPE_AUDIO_VIDEO)
		 * @param videoElt - The video element
		 * @param getStreamCb - a callback function to retrieve the mediastream object
		 */
		connectLocalStream: function (videoElt, getStreamCb) {
			_connectLocalStream(videoElt, getStreamCb);

		},
		/**
		 * Connect a remote stream to an element
		 * @param videoElt - The video element
		 * @param getStreamCb - a callback function to retrieve the mediastream object
		 */
		connectRemoteStream: function (videoElt, getStreamCb) {
			_connectRemoteStream(videoElt, getStreamCb);
		},
		/**
		 * mute Audio
		 */
		muteAudio: function () {
			_muteAudio();
		},
		/**
		 * unmute Audio
		 */
		unmuteAudio: function () {
			_unmuteAudio();
		},
		/**
		 * mute Video
		 */
		muteVideo: function () {
			_muteVideo();
		},
		/**
		 * unmute Video
		 */
		unmuteVideo: function () {
			_unmuteVideo();
		}
	};
};

export default webrtc;
/*
 * #%L
 * Webcom service
 *
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2015 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */


/* global MediaStream, webkitRTCPeerConnection, mozRTCPeerConnection, mozRTCIceCandidate, mozRTCSessionDescription */

/**
 * @file adapt.js - JS file to use so as to get some adapted methods
 * @description This file provides methods to handle ICE servers, user medias or RTC Peer Connection for example. Media stream
 * methods are also provided so as to attach, rreattach or remove existing streams.
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc : 1.3.0
 */


/* ********* *
 * Variables *
 * ********* */

/**
 * @description The RTC Peer Connection to use. This object provides the channels to use
 * to establish the communication and send data between participants. This object
 * is available only on up to date web browsers (Chrome 31, Firefox 35, Opera 27).
 */
window.RTCPeerConnection = null;
/**
 * @description The user media picked from the web browser containing the video and audio streams gotten from the
 * webcams and microphones. This media retrievment is available only for modern web browsers since Firefox 17, Chrome 21 or Opera 18.
 */
window.getUserMedia = null;
/*
 * @description Function to use to attach the media stream which will be integrated to an HTML object as a video.
 */
window.attachMediaStream = null;
/*
 * @description Function to use to reattach the media stream
 */
window.reattachMediaStream = null;
/**
 * @description The detected browser suporting WebRTC (Firefox or Chrome)
 */
window.webrtcDetectedBrowser = null;
/**
 * @description The detected version of the WebRTC capable detected brower. This version will be used to manage networks aspects like TURN.
 */
window.webrtcDetectedVersion = null;

/**
 * Fix ice server config object
 * @param iceServer
 */
function fixIceServer(iceServer) {
	if (iceServer.hasOwnProperty('urls')) {
		iceServer.url = iceServer.urls;
		delete iceServer.urls;
	}
	if (iceServer.hasOwnProperty('url') &&
		iceServer.url.toLowerCase().startsWith('turns') &&
		navigator.mozGetUserMedia) {
		console.warn('(webcomSDK::maybeFixConfiguration) ' +
		'turns detected on firefox -> ignore this entry');
	}
}

/**
 * Fix peer connection configuration issues if needed, specially about ICE servers
 * @param pcConfig - The peer connection configuration to fix if not null
 */
function maybeFixConfiguration(pcConfig) {
	if (pcConfig === null) {
		return;
	}

	if (pcConfig.iceServers && pcConfig.iceServers.length > 0) {
		const mTempsServers = [];
		for (let i = pcConfig.iceServers.length - 1; i >= 0; i--) {
			const iceServer = pcConfig.iceServers[i];
			fixIceServer(iceServer);
			mTempsServers.push(iceServer);
		}
		pcConfig.iceServers = mTempsServers;
	}
}

/**
 * Returns turn config object
 * @param {String} url
 * @param {String} username
 * @param {String} password
 * @param {Boolean} legacy
 * @returns {Object}
 */
function createTurnServerConfig(url, username, password, legacy= false) {
	let iceServer;

	if (legacy) {
		// Create iceServer with turn url.
		// Ignore the transport parameter from TURN url for FF version <=27.
		const turn_url_parts = url.split('?');
		// Return null for createIceServer if transport=tcp.
		if (turn_url_parts.length === 1 ||
			turn_url_parts[1].indexOf('transport=udp') === 0) {
			iceServer = {
				url: turn_url_parts[0],
				'credential': password,
				username
			};
		}
	} else {
		// FF 27 and above supports transport parameters in TURN url,
		// So passing in the full url to create iceServer.
		iceServer = {
			url,
			credential: password,
			username
		};
	}

	return iceServer;
}


/* ********* *
 * Scripting *
 * ********* */

/*
 * If the web browser in use is Firefox
 */
if (navigator.mozGetUserMedia) {
	window.webrtcDetectedBrowser = 'firefox';

	window.webrtcDetectedVersion =
		parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1], 10);

	/**
	 * The RTCPeerConnection objet based on mozkit.
	 * If needed, the configuration of the peer connection will be fixed.
	 * @param pcConfig - The peer connection config
	 * @param pcConstraints - The peer connection constraints
	 */
	window.RTCPeerConnection = function (pcConfig, pcConstraints) {
		// .urls is not supported in FF yet.
		maybeFixConfiguration(pcConfig);
		return new mozRTCPeerConnection(pcConfig, pcConstraints);
	};

	// The RTCSessionDescription object.
	window.RTCSessionDescription = mozRTCSessionDescription;

	// The RTCIceCandidate object.
	window.RTCIceCandidate = mozRTCIceCandidate;

	// Get UserMedia (only difference is the prefix).
	window.getUserMedia = navigator.mozGetUserMedia.bind(navigator);
	navigator.getUserMedia = getUserMedia;



	/**
	 * Creates the ICE server for the URL for Firefox.
	 * The STUN and TURN servers will be considered. In case of a TURN server is in use, credentials and usernames will be got.
	 * @param {string} url - The url to use to get the ICE server
	 * @param {string} username - The username
	 * @param {string} password - The password
	 */
	window.createIceServer = (url, username, password) => {
		let iceServer = null;
		const url_parts = url.split(':');
		if (url_parts[0].indexOf('stun') === 0) {
			// Create iceServer with stun url.
			iceServer = {
				url
			};
		} else if (url_parts[0].indexOf('turn') === 0) {
			iceServer = createTurnServerConfig(	url,
												username,
												password,
												window.webrtcDetectedVersion < 27);
		}
		return iceServer;
	};

	/**
	 * Creates the ICE servers from some URLs. The STUN and TURN severs constraints will be handled.
	 * @param {array} urls - The urls to use to get the ICE server
	 * @param {string} username - The username
	 * @param {string} password - The password
	 */
	window.createIceServers = function (urls, username, password) {
		const iceServers = [];
		// Use .url for FireFox.
		for (let i = 0; i < urls.length; i++) {
			const iceServer = window.createIceServer(urls[i],
				username,
				password);
			if (iceServer !== null) {
				iceServers.push(iceServer);
			}
		}
		return iceServers;
	};

	/**
	 * Detach the media stream from the element.
	 * The element will have its src content changed to null and will be paused.
	 * @param {video tag} element - The video tag where the stream is displayed
	 */
	window.detachMediaStream = function (element) {
		if (element) {
			element.mozSrcObject = null;
			element.pause();
		}
	};

	/**
	 * Attach a media stream to an element.
	 * The src attribute of the element will be defined with the stream and will be played.
	 * @param {video tag} element - The video tag where the stream is displayed
	 * @param stream - The stream to attach to the element
	 */
	window.attachMediaStream = function (element, stream) {
		try {
			if (element && stream) {
				element.mozSrcObject = stream;
				if (element.play && typeof element.play == 'function') {
					element.play();
				} else {
					console.warn('(webcomSDK::attachMediaStream)element.play not available');
				}
			} else {
				console.error('webcomSDK::attachMediaStream->parameters not valid');
			}
		} catch (e) {
			console.error(`(webcomSDK::attachMediaStream)Exception=${e}`);
		}


	};

	/**
	 * Attach again a media stream to an element.
	 * The "from" element will have its src value copied to the "to" object before playing it.
	 * @param {video tag} to - The video tag where the stream should be put
	 * @param {video tag} from - The video tag where the stream should be taken
	 */
	window.reattachMediaStream = function (to, from) {
		if (to && from) {
			to.mozSrcObject = from.mozSrcObject;
			to.play();
		} else {
			console.error('webcomSDK::reattachMediaStream->parameters not valid');
		}
	};

	// Fake get{Video,Audio}Tracks
	if (!MediaStream.prototype.getVideoTracks) {
		MediaStream.prototype.getVideoTracks = function () {
			return [];
		};
	}

	if (!MediaStream.prototype.getAudioTracks) {
		MediaStream.prototype.getAudioTracks = function () {
			return [];
		};
	}

	/*
	 * If the web browser in use is Chrome
	 */
} else if (navigator.webkitGetUserMedia) {
	window.webrtcDetectedBrowser = 'chrome';
	window.webrtcDetectedVersion =
		parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10);

	/**
	 * Creates the ICE server from the URL and handles STUN / TURN servers constraints by retrieving credentials and usernames if needed.
	 * @param {string} url - The url to use to get the ICE server
	 * @param {string} username - The username
	 * @param {string} password - The password
	 */
	window.createIceServer = function (url, username, password) {
		let iceServer = null;
		const url_parts = url.split(':');
		if (url_parts[0].indexOf('stun') === 0) {
			// Create iceServer with stun url.
			iceServer = {
				url
			};
		} else if (url_parts[0].indexOf('turn') === 0) {
			// Chrome M28 & above uses below TURN format.
			iceServer = createTurnServerConfig(url, password, username);
		}
		return iceServer;
	};

	/**
	 * Creates the ICE servers from the URL for Chrome M34 and above
	 * @param {array} urls - The urls to use to get the ICE server
	 * @param {string} username - The username
	 * @param {string} password - The password
	 */
	window.createIceServers = function (urls, username, password) {
		let iceServers = [];
		if (window.webrtcDetectedVersion >= 34) {
			// .urls is supported since Chrome M34.
			iceServers = {
				urls,
				credential: password,
				username
			};
		} else {
			for (let i = 0; i < urls.length; i++) {
				const iceServer = window.createIceServer(urls[i],
					username,
					password);
				if (iceServer !== null) {
					iceServers.push(iceServer);
				}
			}
		}
		return iceServers;
	};

	/**
	 * The RTC Peer Connection object. If needed, its peer connection configuration will be fixed
	 * @param pcConfig - The peer connection config
	 * @param pcConstraints - The peer connection constraints
	 */
	window.RTCPeerConnection = function (pcConfig, pcConstraints) {
		// .urls is supported since Chrome M34.
		if (window.webrtcDetectedVersion < 34) {
			maybeFixConfiguration(pcConfig);
		}
		return new webkitRTCPeerConnection(pcConfig, pcConstraints);
	};

	// Get UserMedia (only difference is the prefix).
	// Code from Adam Barth.
	window.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
	navigator.getUserMedia = getUserMedia;

//  // Attach a media stream to an element.
//  attachMediaStream = function(element, stream) {
//    if (typeof element.srcObject !== 'undefined') {
//      element.srcObject = stream;
//    } else if (typeof element.mozSrcObject !== 'undefined') {
//      element.mozSrcObject = stream;
//    } else if (typeof element.src !== 'undefined') {
//      element.src = URL.createObjectURL(stream);
//    } else {
//      console.log('Error attaching stream to element.');
//    }
//  };

	/**
	 * Attach a media stream to an element.
	 * The src attribute of the element will be defined with the stream and will be played.
	 * @param {video tag} element - The video tag where the stream is displayed
	 * @param stream - The stream to attach to the element
	 */
	window.attachMediaStream = function (element, stream) {
		try {
			if (element && stream) {
				// element.src = webkitURL.createObjectURL(stream);
				element.src = URL.createObjectURL(stream);
				element.autoplay = true;
			} else {
				console.error('webcomSDK::attachMediaStream ->parameters not valid');
			}
		} catch (e) {
			console.error(`(webcomSDK::attachMediaStream)Exception=${e}`);
		}
	};

	/**
	 * Detach the media stream from the element by assinged null value to its src attribute.
	 * @param {video tag} element - The video tag where the stream is displayed
	 */
	window.detachMediaStream = function (element) {
		if (element) {
			if (typeof element.srcObject !== 'undefined') {
				element.srcObject = '';
			} else if (typeof element.mozSrcObject !== 'undefined') {
				element.mozSrcObject = '';
			} else if (typeof element.src !== 'undefined') {
				element.src = '';
			} else {
				console.log('Error attaching stream to element.');
			}
		}

	};

	/**
	 * Attach again a media stream to an element.
	 * The "from" element will have its src value copied to the "to" object before playing it.
	 * @param {video tag} to - The video tag where the stream should be put
	 * @param {video tag} from - The video tag where the stream should be taken
	 */
	window.reattachMediaStream = function (to, from) {
		if (to && from) {
			to.src = from.src;
		} else {
			console.error('webcomSDK::reattachMediaStream media stream->parameters not valid');
		}
	};

} else {
	throw new Error('Browser does not appear to be WebRTC-capable');
}

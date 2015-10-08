/**
 * @file localstream.js - JS file to handle local streams.
 * @description Provides data structures to store and handle video, audio and video-and-audio streams. The audio and video streams are managed too.
 * Initialization methods are provided, stream connections and listeners too.
 * @author Webcom
 */

import {detachMediaStream} from './rtcAdapter';

/**
 * @constructor
 * @description The local stream object with its streams, flags and callbacks. It is a singleton.
 */
var localstream = (function() {

	/**
	 * @description The local video streams, as HTML video objects, in an array
	 */
	var localVideoStreams = [];
	/**
	 * @description The local audio streams, as HTML video objects, in an array
	 */
	var localAudioStreams = [];
	/**
	 * @description The local audio and video streams, as HTML video objects, in an array
	 */
	var localAudioVideoStreams = [];
	/**
	 * @description The video stream object
	 */
	var streamVideo = null;
	/**
	 * @description The audio stream object
	 */
	var streamAudio = null;
	/**
	 * @description The video and audio stream object
	 */
	var streamAudioVideo = null;
	/**
	 * @description An array containing video listeners as functions. These listeners will be triggered if the video stream is established.
	 */
	var listenersVideo = [];
	/**
	 * @description An array containing audio listeners as functions. These listeners will be triggered if the audio stream is established.
	 */
	var listenersAudio = [];
	/**
	 * @description An array containing audio and video listeners as functions. These listeners will be triggered if the vide-and-audio stream is established.
	 */
	var listenersAudioVideo = [];
	/**
	 * @description The local video stream, as an HTML video element
	 */
	var mLocalStreamVideo = null;
	/**
	 * @description The local audio stream, as an HTML video element
	 */
	var mLocalStreamAudio = null;
	/**
	 * @description The local audio and video stream, as an HTML video element
	 */
	var mLocalStreamAudioVideo = null;
	/**
	 * @description Flag indicating if the video initialisation is in progress
	 */
	var initVideoProgress = false;
	/**
	 * @description Flag indicating if the audio initialisation is in progress
	 */
	var initAudioProgress = false;
	/**
	 * @description Flag indicating if the audio and video initialisation is in progress
	 */
	var initAudioVideoProgress = false;

	/**
	 * Initializes the video local stream.
	 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	 * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
	 * Listeners will also be called.
	 */
	function initVideo(){
		console.log('(webcomSDK::localstream::initVideo)');
		if (! initVideoProgress) {
			initVideoProgress=true;

			navigator.getMedia = getUserMedia;
			mLocalStreamVideo = document.createElement('VIDEO');
			mLocalStreamVideo.muted= true;
			localVideoStreams.push(mLocalStreamVideo);

			if(streamVideo === null){
				navigator.getMedia({audio : false,video : true},
					function(s) {
						streamVideo = s;
						for (var i = 0; i < localVideoStreams.length; i++) {
							attachMediaStream(localVideoStreams[i],streamVideo);
						}
						localVideoStreams = [];
						for (var j=0;j<listenersVideo.length;j++) {
							listenersVideo[j](streamVideo);
						}
						listenersVideo = [];
						initVideoProgress=false;

					},
					function(error) {
						console.error('Error on webrtcLocalStream - webkitGetUserMedia : error=');
						console.dir(error);
						initVideoProgress=false;
					}
				);
			} else {
				for (var i = 0; i < localVideoStreams.length; i++) {
					attachMediaStream(localVideoStreams[i],streamVideo);
				}
				localVideoStreams = [];
				for (var j=0;j<listenersVideo.length;j++) {
					listenersVideo[j](streamVideo);
				}
				listenersVideo = [];
				initVideoProgress=false;
			}
		}
	}

	/**
	 * Initializes the video local stream.
	 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	 * Listeners will also be called.
	 */
	function initAudio() {
		console.log('(webcomSDK::localstream::initAudio)');
		if (! initAudioProgress) {
			initAudioProgress=true;

			navigator.getMedia = getUserMedia;
			mLocalStreamAudio = document.createElement('AUDIO');
			mLocalStreamAudio.muted= true;
			localAudioStreams.push(mLocalStreamAudio);

			if(streamAudio === null){
				navigator.getMedia({audio : true,video : false},
					function(s) {
						streamAudio = s;
						for (var i = 0; i < localAudioStreams.length; i++) {
							attachMediaStream(localAudioStreams[i],streamAudio);
						}
						localAudioStreams = [];
						for (var j=0;j<listenersAudio.length;j++) {
							listenersAudio[j](streamAudio);
						}
						listenersAudio = [];
						initAudioProgress=false;

					},
					function(error) {
						console.error('Error on webrtcLocalStream - webkitGetUserMedia :error=');
						console.dir(error);
						initAudioProgress=false;
					}
				);
			} else {
				for (var i = 0; i < localAudioStreams.length; i++) {
					attachMediaStream(localAudioStreams[i],streamAudio);
				}
				localAudioStreams = [];
				for (var j=0;j<listenersAudio.length;j++) {
					listenersAudio[j](streamAudio);
				}
				listenersAudio = [];
				initAudioProgress=false;
			}
		}
	}

	/**
	 * Initializes the audio-and-video local stream.
	 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	 * Listeners will also be called.
	 */
	function initAudioVideo() {
		console.log('(webcomSDK::localstream::initAudioVideo)');
		if (!initAudioVideoProgress) {
			initAudioVideoProgress=true;

			navigator.getMedia = getUserMedia;
			mLocalStreamAudioVideo = document.createElement('AUDIOVIDEO');
			mLocalStreamAudioVideo.muted= true;
			localAudioVideoStreams.push(mLocalStreamAudioVideo);

			if(streamAudioVideo === null){
				navigator.getMedia({audio : true,video : true},
					function(s) {

						streamAudioVideo = s;
						for (var i = 0; i < localAudioVideoStreams.length; i++) {
							attachMediaStream(localAudioVideoStreams[i],streamAudioVideo);
						}
						localAudioVideoStreams = [];
						for (var j=0;j<listenersAudioVideo.length;j++) {
							listenersAudioVideo[j](streamAudioVideo);
						}
						listenersAudioVideo = [];
						initAudioVideoProgress=false;

					},
					function(error) {
						console.error('(webcomSDK::localstream::initAudioVideo::Error on webrtcLocalStream - webkitGetUserMedia : error=');
						console.dir(error);
						initAudioVideoProgress=false;
					}
				);
			} else {
				for (var i = 0; i < localAudioVideoStreams.length; i++) {
					attachMediaStream(localAudioVideoStreams[i],streamAudioVideo);
				}
				localAudioVideoStreams = [];
				for (var j=0;j<listenersAudioVideo.length;j++) {
					listenersAudioVideo[j](streamAudioVideo);
				}
				listenersAudioVideo = [];
				initAudioVideoProgress=false;
			}

		}
	}

	/**
	 * Closes all the streams.
	 * Set all the initProgress flags to false, detach all the streams after stopping them.
	 */
	function close() {
		console.log('(webcomSDK::localstream::close)');
		if (mLocalStreamVideo) {
			detachMediaStream(mLocalStreamVideo);
			mLocalStreamVideo=null;
		}
		if (streamAudioVideo) {
			streamAudioVideo.stop();
			streamAudioVideo=null;
		}
		if (streamVideo) {
			streamVideo.stop();
			streamVideo = null;
		}
		initVideoProgress=false;

		if (mLocalStreamAudio) {
			detachMediaStream(mLocalStreamAudio);
			mLocalStreamAudio=null;
		}
		if (streamAudio) {
			streamAudio.stop();
			streamAudio = null;
		}

		initAudioProgress=false;

		if (mLocalStreamAudioVideo) {
			detachMediaStream(mLocalStreamAudioVideo);
			mLocalStreamAudioVideo=null;
		}
		if (streamAudioVideo) {
			streamAudioVideo.stop();
			streamAudioVideo = null;
		}

		initAudioVideoProgress=false;
	}


	return {
		/**
		 * Returns the video stream
		 */
		getVideoStream:function () {
			return streamVideo;
		},
		/**
		 * Adds a video listener which will be called after the video stream is established.
		 * @param {function} cb - The listener to add
		 */
		addVideoListener: function(cb) {
			listenersVideo.push(cb);
		},
		/**
		 * Initializes the video local stream.
		 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
		 * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
		 * Listeners will also be called.
		 */
		initVideo: function() {
			initVideo();
		},
		/**
		 * Makes the connection to the local video stream, and attach the local video stream to the video element if defined.
		 * If the video element is not defined, the video local stream will be initialized and a dedicated HTML video tag will be created.
		 * @param videoElt - The video element where place the connected local video stream. if null, a new one will be created.
		 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
		 */
		connectLocalVideoStream:function (videoElt,getLocalStreamCb) {
			if (videoElt) {
				videoElt.muted=true;
				if (streamVideo) {
					console.log('(webcomSDK::localstream::connectLocalVideoStream)use existing streamVideo');
					attachMediaStream(videoElt,streamVideo);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamVideo);
					}
				} else {
					localVideoStreams.push(videoElt);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersVideo.push(getLocalStreamCb);
					}
					initVideo();
				}
			} else {
				if (!streamVideo) {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersVideo.push(getLocalStreamCb);
					}
					initVideo();
				} else {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamVideo);
					}
				}
			}
		},
		/**
		 * Returns the audio stream
		 * @return - An audio stream
		 */
		getAudioStream:function () {
			return streamAudio;
		},
		/**
		 * Adds an audio listener which will be called after the audio stream is established.
		 * @param {function} cb - The listener to add
		 */
		addAudioListener: function(cb) {
			listenersAudio.push(cb);
		},
		/**
		 * Initializes the audio local stream.
		 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
		 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
		 * Listeners will also be called.
		 */
		initAudio: function() {
			initAudio();
		},
		/**
		 * Connects to the local audio stream and sets it to the audio element if defined.
		 * If not, a dedicated HTML video will be created. The audio media stream will be attached to the element in use.
		 * @param AudioElt - The audio element in use possessing the attached local audio stream
		 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
		 */
		connectLocalAudioStream:function (AudioElt,getLocalStreamCb) {
			if (AudioElt) {
				AudioElt.muted=true;
				if (streamAudio) {
					console.log('(webcomSDK::localstream::connectLocalAudioStream)use existing streamAudio');
					attachMediaStream(AudioElt,streamAudio);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamAudio);
					}
				} else {
					localAudioStreams.push(AudioElt);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersAudio.push(getLocalStreamCb);
					}
					initAudio();
				}
			} else {
				if (!streamAudio) {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersAudio.push(getLocalStreamCb);
					}
					initAudio();
				} else {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamAudio);
					}
				}
			}
		},
		/**
		 * Returns the audio video stream
		 * @return - The audio and video stream
		 */
		getAudioVideoStream:function () {
			return streamAudioVideo;
		},
		/**
		 * Adds the audio-and-video listener which will be called after the audi-and-video stream is established.
		 * @param cb - The audio and video listener to add
		 */
		addAudioVideoListener: function(cb) {
			listenersAudioVideo.push(cb);
		},
		/**
		 * Initializes the audio-and-video local stream.
		 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
		 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
		 * Listeners will also be called.
		 */
		initAudioVideo: function() {
			initAudioVideo();
		},
		/**
		 * Connects the local audio and video streams and assigns them to the audio and video element if needed.
		 * If no HTML element is passed to the functionn a new element is created
		 * @param AudioVideoElt - The element where to place the audio and video local streams
		 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
		 */
		connectLocalAudioVideoStream:function (AudioVideoElt,getLocalStreamCb) {
			if (AudioVideoElt) {
				AudioVideoElt.muted=true;
				if (streamAudioVideo) {
					console.log('(webcomSDK::localstream::connectLocalAudioVideoStream)use existing streamAudioVideo');
					attachMediaStream(AudioVideoElt,streamAudioVideo);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamAudioVideo);
					}
				} else {
					localAudioVideoStreams.push(AudioVideoElt);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersAudioVideo.push(getLocalStreamCb);
					}
					initAudioVideo();
				}
			} else {
				if (!streamAudioVideo) {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersAudioVideo.push(getLocalStreamCb);
					}
					initAudioVideo();
				} else {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamAudioVideo);
					}
				}
			}
		},

		/**
		 * Detaches streams and deletes listeners
		 */
		close: function() {
			close();
		}
	};

})();

export default localstream;
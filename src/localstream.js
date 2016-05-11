/**
 * @file localstream.js - JS file to handle local streams.
 * @description Provides data structures to store and handle video, audio and video-and-audio streams. The audio and video streams are managed too.
 * Initialization methods are provided, stream connections and listeners too.
 * @author Webcom
 */

/*eslint complexity:1, max-statements: 1, max-len: 1*/

/**
 * @constructor
 * @description The local stream object with its streams, flags and callbacks. It is a singleton.
 */
const localstream = (function() {

	/**
	 * @description The local video streams, as HTML video objects, in an array
	 */
	let localVideoStreams = [];
	/**
	 * @description The local audio streams, as HTML video objects, in an array
	 */
	let localAudioStreams = [];
	/**
	 * @description The local audio and video streams, as HTML video objects, in an array
	 */
	const localAudioVideoStreams = [];
	/**
	 * @description The video stream object
	 */
	let streamVideo = null;
	/**
	 * @description The audio stream object
	 */
	let streamAudio = null;
	/**
	 * @description The video and audio stream object
	 */
	let streamAudioVideo = null;
	/**
	 * @description An array containing video listeners as functions. These listeners will be triggered if the video stream is established.
	 */
	let listenersVideo = [];
	/**
	 * @description An array containing audio listeners as functions. These listeners will be triggered if the audio stream is established.
	 */
	let listenersAudio = [];
	/**
	 * @description An array containing audio and video listeners as functions. These listeners will be triggered if the vide-and-audio stream is established.
	 */
	let listenersAudioVideo = [];
	/**
	 * @description The local video stream, as an HTML video element
	 */
	let mLocalStreamVideo = null;
	/**
	 * @description The local audio stream, as an HTML video element
	 */
	let mLocalStreamAudio = null;
	/**
	 * @description The local audio and video stream, as an HTML video element
	 */
	let mLocalStreamAudioVideo = null;
	/**
	 * @description Flag indicating if the video initialisation is in progress
	 */
	let initVideoProgress = false;
	/**
	 * @description Flag indicating if the audio initialisation is in progress
	 */
	let initAudioProgress = false;
	/**
	 * @description Flag indicating if the audio and video initialisation is in progress
	 */
	let initAudioVideoProgress = false;
	/**
	 * @description videoSources array indicating the avaliable video sources
	 */
	const videoSources=[];
	/**
	 * @description currentVideoSource index indicating the currently used video sources
	 */
	let currentVideoSource=0;
	/**
	 *@description An array containing audio and video listeners as functions. These listeners will be triggered in case of initiating video/audio by switching camera.
	 */
	const streamListenersAudioVideo=[];

	/**
	 * Call back method for enumerateDevices 
	 * that is used to get the sources attached to the currently used device/browser
	*/
	function gotSources(sourceInfos) {
		for (let i = 0; i < sourceInfos.length; i++) {
			const sourceInfo = sourceInfos[i];
			if (sourceInfo.kind === 'videoinput') {
				videoSources.push(sourceInfo);
			} 
		}
	}
	/**
	 * a method to reterive all of the video sources avaliable connected to the current device.
	 */
	function _getAllVideoSources(){
		if (videoSources.length===0) {
			navigator.mediaDevices.enumerateDevices().then(gotSources);	
		}
	}
	/**
	 * Initializes the video local stream.
	 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	 * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
	 * Listeners will also be called.
	 */
	function initVideo(callback){
		console.log('(ReachSDK::localstream::initVideo)');
		if (! initVideoProgress) {
			initVideoProgress=true;

			navigator.getMedia = getUserMedia;
			mLocalStreamVideo = document.createElement('VIDEO');
			mLocalStreamVideo.muted= true;
			localVideoStreams.push(mLocalStreamVideo);

			if(streamVideo === null){
				navigator.getMedia({audio : false,video : true},
					(s) => {
						streamVideo = s;

						localVideoStreams.forEach((localVideoStream) => {
							attachMediaStream(localVideoStream, streamVideo);
						});
						localVideoStreams = [];

						listenersVideo.forEach((listenerVideo) => {
							listenerVideo(streamVideo);
						});
						listenersVideo = [];

						initVideoProgress=false;

						if (callback) {
							callback();
						}
					},
					(error) => {
						console.error('Error on webrtcLocalStream - webkitGetUserMedia : error=');
						console.dir(error);
						initVideoProgress = false;

						if (callback) {
							callback(error);
						}
					}
				);
			} else {
				localVideoStreams.forEach((localVideoStream) => {
					attachMediaStream(localVideoStream, streamVideo);
				});
				localVideoStreams = [];

				listenersVideo.forEach((listenerVideo) => {
					listenerVideo(streamVideo);
				});
				listenersVideo = [];

				initVideoProgress = false;
			}
		}
	}

	/**
	 * Initializes the video local stream.
	 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	 * Listeners will also be called.
	 */
	function initAudio(callback) {
		console.log('(ReachSDK::localstream::initAudio)');
		if (! initAudioProgress) {
			initAudioProgress=true;

			navigator.getMedia = getUserMedia;
			mLocalStreamAudio = document.createElement('AUDIO');
			mLocalStreamAudio.muted= true;
			localAudioStreams.push(mLocalStreamAudio);

			if(streamAudio === null){
				navigator.getMedia({audio : true,video : false},
					(s) => {
						streamAudio = s;
						localAudioStreams.forEach((localAudioStream) => {
							attachMediaStream(localAudioStream, streamAudio);
						});
						localAudioStreams = [];

						listenersAudio.forEach((listenerAudio) => {
							listenerAudio(streamAudio);
						});
						listenersAudio = [];

						initAudioProgress = false;

						if (callback) {
							callback();
						}
					},
					(error) => {
						console.error('Error on webrtcLocalStream - webkitGetUserMedia :error=');
						console.dir(error);
						initAudioProgress=false;

						if (callback) {
							callback(error);
						}
					}
				);
			} else {
				localAudioStreams.forEach((localAudioStream) => {
					attachMediaStream(localAudioStream, streamAudio);
				});
				localAudioStreams = [];

				listenersAudio.forEach((listenerAudio) => {
					listenerAudio(streamAudio);
				});
				listenersAudio = [];

				initAudioProgress = false;
			}
		}
	}

	/**
	 * Initializes the audio-and-video local stream.
	 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	 * Listeners will also be called.
	 */
	function initAudioVideo(callback) {
		console.log('(ReachSDK::localstream::initAudioVideo)');
		if (!initAudioVideoProgress) {
			initAudioVideoProgress=true;
			_getAllVideoSources();

			navigator.getMedia = getUserMedia;
			mLocalStreamAudioVideo = document.createElement('AUDIOVIDEO');
			mLocalStreamAudioVideo.muted= true;
			//localAudioVideoStreams.push(mLocalStreamAudioVideo);

			let audioSource;
			let videoSource;

			if(videoSources[currentVideoSource]){
				videoSource = videoSources[currentVideoSource].deviceId;
			}

			const constraints = {
				audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
				video: {deviceId: videoSource ? {exact: videoSource} : undefined}
			};

			if(streamAudioVideo === null || videoSource){

				navigator.getMedia(constraints,
					(s) => {
						streamAudioVideo = s;

						localAudioVideoStreams.forEach((localAudioVideoStream) => {
							attachMediaStream(localAudioVideoStream, streamAudioVideo);
						});
						//localAudioVideoStreams = [];

						listenersAudioVideo.forEach((listenerAudioVideo) => {
							listenerAudioVideo(streamAudioVideo);
						});

						streamListenersAudioVideo.forEach((streamListenerAudioVideo) => {
							streamListenerAudioVideo(streamAudioVideo);
						});
						listenersAudioVideo = [];

						initAudioVideoProgress = false;

						if (callback) {
							callback();
						}
					},
					(error) => {
						console.error('(ReachSDK::localstream::initAudioVideo::Error on webrtcLocalStream - webkitGetUserMedia : error=');
						console.dir(error);
						initAudioVideoProgress=false;

						if (callback) {
							callback(error);
						}
					}
				);
			} else {
				localAudioVideoStreams.forEach((localAudioVideoStream) => {
					attachMediaStream(localAudioVideoStream, streamAudioVideo);
				});
				//localAudioVideoStreams = [];

				listenersAudioVideo.forEach((listenerAudioVideo) => {
					listenerAudioVideo(streamAudioVideo);
				});
				listenersAudioVideo = [];

				initAudioVideoProgress = false;
			}

		}
	}
	/**
	 * a function used to switch camera source with the next avaliable one
	*/
	function _switchCamera() {
		console.log('(ReachSDK::localstream::_switchCamera)');
		if (videoSources.length>0) {
			currentVideoSource++;
			if (currentVideoSource>=videoSources.length){
				currentVideoSource=0;
			} 
			if (streamAudioVideo) {
				streamAudioVideo.getTracks().forEach((track)=>{
					track.stop();
				});
			}
			initAudioVideo();
		}
	}

	/**
	 * Closes all the streams.
	 * Set all the initProgress flags to false, detach all the streams after stopping them.
	 */
	function close() {
		console.log('(ReachSDK::localstream::close)');
		if (mLocalStreamVideo) {
			detachMediaStream(mLocalStreamVideo);
			mLocalStreamVideo=null;
		}
		if (streamAudioVideo) {
			streamAudioVideo.getTracks().forEach((track)=>{
				track.stop();
			});
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
		getVideoStream: () => {
			return streamVideo;
		},
		/**
		 * Adds a video listener which will be called after the video stream is established.
		 * @param {function} cb - The listener to add
		 */
		addVideoListener: (cb) => {
			listenersVideo.push(cb);
		},
		/**
		 * Initializes the video local stream.
		 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
		 * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
		 * Listeners will also be called.
		 */
		initVideo: () => {
			initVideo();
		},
		/**
		 * Makes the connection to the local video stream, and attach the local video stream to the video element if defined.
		 * If the video element is not defined, the video local stream will be initialized and a dedicated HTML video tag will be created.
		 * @param videoElt - The video element where place the connected local video stream. if null, a new one will be created.
		 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
		 */
		connectLocalVideoStream: (videoElt, publishStreamCb, getLocalStreamCb) => {
			if (videoElt) {
				videoElt.muted=true;
				if (streamVideo) {
					console.log('(ReachSDK::localstream::connectLocalVideoStream)use existing streamVideo');
					attachMediaStream(videoElt,streamVideo);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamVideo);
					}
				} else {
					localVideoStreams.push(videoElt);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersVideo.push(getLocalStreamCb);
					}
					initVideo(publishStreamCb);
				}
			} else {
				if (!streamVideo) {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersVideo.push(getLocalStreamCb);
					}
					initVideo(publishStreamCb);
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
		getAudioStream: () => {
			return streamAudio;
		},
		/**
		 * Adds an audio listener which will be called after the audio stream is established.
		 * @param {function} cb - The listener to add
		 */
		addAudioListener: (cb) => {
			listenersAudio.push(cb);
		},
		/**
		 * Initializes the audio local stream.
		 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
		 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
		 * Listeners will also be called.
		 */
		initAudio: () => {
			initAudio();
		},
		/**
		 * Connects to the local audio stream and sets it to the audio element if defined.
		 * If not, a dedicated HTML video will be created. The audio media stream will be attached to the element in use.
		 * @param AudioElt - The audio element in use possessing the attached local audio stream
		 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
		 */
		connectLocalAudioStream: (AudioElt, publishStreamCb, getLocalStreamCb) => {
			if (AudioElt) {
				AudioElt.muted=true;
				if (streamAudio) {
					console.log('(ReachSDK::localstream::connectLocalAudioStream)use existing streamAudio');
					attachMediaStream(AudioElt,streamAudio);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						getLocalStreamCb(streamAudio);
					}
				} else {
					localAudioStreams.push(AudioElt);
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersAudio.push(getLocalStreamCb);
					}
					initAudio(publishStreamCb);
				}
			} else {
				if (!streamAudio) {
					if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
						listenersAudio.push(getLocalStreamCb);
					}
					initAudio(publishStreamCb);
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
		getAudioVideoStream: () => {
			return streamAudioVideo;
		},
		/**
		 * Adds the audio-and-video listener which will be called after the audi-and-video stream is established.
		 * @param cb - The audio and video listener to add
		 */
		addAudioVideoListener: (cb) => {
			listenersAudioVideo.push(cb);
		},
		/**
		 * Initializes the audio-and-video local stream.
		 * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
		 * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
		 * Listeners will also be called.
		 */
		initAudioVideo: () => {
			initAudioVideo();
		},
		/**
		 * Connects the local audio and video streams and assigns them to the audio and video element if needed.
		 * If no HTML element is passed to the functionn a new element is created
		 * @param AudioVideoElt - The element where to place the audio and video local streams
		 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
		 */
		connectLocalAudioVideoStream: (AudioVideoElt, publishStreamCb, getLocalStreamCb) => {
			if (AudioVideoElt) {
				AudioVideoElt.muted=true;
				if (streamAudioVideo) {
					console.log('(ReachSDK::localstream::connectLocalAudioVideoStream)use existing streamAudioVideo');
					attachMediaStream(AudioVideoElt,streamAudioVideo);
					if (getLocalStreamCb) {
						getLocalStreamCb(streamAudioVideo);
					}
				} else {
					localAudioVideoStreams.push(AudioVideoElt);
					if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
						listenersAudioVideo.push(getLocalStreamCb);
					}
					initAudioVideo(publishStreamCb);
				}
			} else {
				if (!streamAudioVideo) {
					if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
						listenersAudioVideo.push(getLocalStreamCb);
					}
					initAudioVideo(publishStreamCb);
				} else {
					if (getLocalStreamCb) {
						getLocalStreamCb(streamAudioVideo);
					}
				}
			}
		},

		/**
		 * Detaches streams and deletes listeners
		 */
		close: () => {
			close();
		},
		/**
		 * Switches between cameras.
		 */
		switchCamera: () => {
			_switchCamera();
		},
		/**
		 * Adds the audio-and-video listener which will be called after the audio-and-video stream is established used by switching camera feature
		 * @param cb - The audio and video listener to add 
		 */
		addStreamAudioVideoListener: (cb) => {
			streamListenersAudioVideo.push(cb);
		},
        /**
         * getting all of the video sources/cameras that are connected to the current device/browser
         */
		getAllVideoSources:() =>{
			_getAllVideoSources();
			return videoSources;
		},
        /**
         * getting the number of all of the video sources/cameras that are connected to the current device/browser
         */
		getVideoSourceNumber:() =>{
			_getAllVideoSources();
			return videoSources.length;
		}
	};

})();

export default localstream;
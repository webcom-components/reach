/**
 * @file room.js - JS file to use for the room service.
 * @author Webcom
 */

/*eslint complexity:1, max-statements: 1, max-len: 1*/

import actions from './actions';
import localstream from './localstream';
import utils from './utils';

/**
 * ROOM_STATUS_CLOSE status : room is CLOSE / inactive
 * @constant
 * @type {string}
 */
const ROOM_STATUS_CLOSE = 'CLOSE';

/**
 * @constructor
 * @description The room object with its streams, messages, flags and callbacks. The published media streams, the WebRTC stacks, the instant messages, and the participant lists
 * are managed in this data structure.
 * @param p_me - The user identifier, identifying the current user in the database
 * @param p_roomId - The room identifier, identifying in the database the room in use
 */
export default function (p_me, p_roomId, datarefs, webrtcmngr) {

	/**
	 * @description The room identifier, identifying a room in the database
	 */
	const roomId = p_roomId;
	/**
	 * @description The user identifier
	 */
	const me = p_me;
	/**
	 * @description A dataref pointer pointing to a node identified by the room identifier under the rooms node
	 */
	const dataref = datarefs.getRooms().child(roomId);
	/**
	 * @description The WebRTC stacks used in this room
	 */
	let roomWebrtcStacks = {};
	/**
	 * @description The available streams
	 */
	let mAvailableStreams = [];
	/**
	 * @description An array containing data structures for streams which possess callbacks to trigger in JSON format.
	 * These callbacks are addSubscriberListCb and removeSubscribersListCb.
	 */
	let mStreams = [];

	/**
	 * @description An array containing all the stream marked as muted
	 */
	let mMutedStreams = [];

	/**
	 * @description A callback to trigger for unpublished remote objects
	 */
	let remoteUnpublishedCb = null;

	/**
	 * @description Callback triggered when a list of instant messages has been received
	 */
	let instantMessageListCb = null;
	/**
	 * @description User's callback triggered when a list of medias has been published
	 */
	let publishedMediaListCb = null;

	/**
	 * @description room's callback triggered when a list of medias has been published
	 */
	let publishedMediaListCbForAvailableStream = null;
	/**
	 * @description user's callback triggered when a list of medias has been unpublished
	 */
	let unPublishedMediaListCb = null;
	/**
	 * @description room's callback triggered when a list of medias has been published
	 */
	let unPublishedMediaListCbForAvailableStream = null;
	/**
	 * @description Callback triggered when a list of participants joins the room (added)
	 */
	let participantListJoinAddedCb = null;
	/**
	 * @description Callback triggered when a list of participants joins the room (changed)
	 */
	let participantListJoinChangedCb = null;
	/**
	 * @description Callback triggered when a list of participants leaves the room
	 */
	let participantListLeaveCb = null;

	/**
	 * Adds an available stream
	 * @param data - The stream to add
	 */
	function _addAvailableStream(data) {
		console.log(`(ReachSDK::room[${roomId}]::_addAvailableStream)data=${JSON.stringify(data)}`);
		mAvailableStreams.push(data);
	}

	/**
	 * Removes an available stream
	 * @param stream - The streamId to remove
	 */
	function _removeAvailableStream(streamId) {
		console.log(`(ReachSDK::room[${roomId}]::_removeAvailableStream)streamId=${streamId}`);
		if (mAvailableStreams && streamId) {
			for (let i = mAvailableStreams.length - 1; i >= 0; i--) {
				if (mAvailableStreams[i] && Object.keys(mAvailableStreams[i])[0] && Object.keys(mAvailableStreams[i])[0] === streamId) {
					delete mAvailableStreams[i];
				}
			}
		}
	}

	/**
	 * Initializes a Webcom listener.
	 * Defines callbacks (if not already defined) for : instant messages, media list and participants.
	 * These callbacks are called if a new value is added or if a value has been removed in the database.
	 */
	function initWebcomListener() {
		if (!publishedMediaListCbForAvailableStream) {
			publishedMediaListCbForAvailableStream = function (snapshot) {
				const
					obj = {},
					name = snapshot.name(),
					value = snapshot.val();
				console.log(`(ReachSDK::room[${roomId}]::onPublishedStreamForAvailableStream)stream=${JSON.stringify(value)}`);
				obj[name] = value;
				obj[name].roomId = roomId;
				_addAvailableStream(obj);
			};
			dataref.child('publishedMediaList').on('child_added', publishedMediaListCbForAvailableStream);
		}

		if (!unPublishedMediaListCbForAvailableStream) {
			unPublishedMediaListCbForAvailableStream = function (snapshot) {
				const streamId = snapshot.name();
				console.log(`(ReachSDK::room[${roomId}]::onUnPublishedStreamForAvailableStream)stream=${streamId}`);
				_removeAvailableStream(streamId);
			};
			dataref.child('publishedMediaList').on('child_removed', unPublishedMediaListCbForAvailableStream);
		}
	}

	/**
	 * Initializes the room object by adding a new value in a child identified by the user identifier under
	 * the participantList node
	 */
	function init() {
		dataref.child(`participantList/${me}`).update({
			connected: true,
			wasInsideRoom: true
		});
		dataref.child(`participantList/${me}/connected`).onDisconnect().set(false);
		initWebcomListener();
	}

	/**
	 * Return the room identifier
	 * @return {string} - The room identifier
	 */
	function _getRoomId() {
		return roomId;
	}

	/**
	 * Returns the user identifier
	 * @return {string} - The user identifier
	 */
	function _getMe() {
		return me;
	}

	/**
	 * Initializes the Participants added listener.
	 * Defines callback (remove any existing one) for the participants.
	 * This callback is called, first for any existing connected participants, then when a new participant is added.
	 */
	function _setOnParticipantJoin(p_cb) {
		const participantListRef = dataref.child('participantList');

		if (participantListJoinAddedCb) {
			participantListRef.off('child_added', participantListJoinAddedCb);
			participantListJoinAddedCb = null;
		}

		if (participantListJoinChangedCb) {
			participantListRef.off('child_changed', participantListJoinChangedCb);
			participantListJoinChangedCb = null;
		}

		if (p_cb && typeof p_cb == 'function') {
			participantListJoinAddedCb = (snapshot) => {
				const user = snapshot.name();
				if (snapshot.val() && snapshot.val().connected && snapshot.val().wasInsideRoom) {
					console.log(`(ReachSDK::room[${roomId}]::_setOnParticipantJoin) user has joined: ${user}`);
					p_cb(user);
				}
			};
			participantListRef.on('child_added', participantListJoinAddedCb);

			participantListJoinChangedCb = function (snapshot) {
				const user = snapshot.name();
				if (snapshot.val() && (snapshot.val().connected && snapshot.val().wasInsideRoom)) {
					console.log(`(ReachSDK::room[${roomId}]::_setOnParticipantJoin) user has joined: ${user}`);
					p_cb(user);
				}
			};
			participantListRef.on('child_changed', participantListJoinChangedCb);
		} else {
			console.error(`(ReachSDK::room[${roomId}]::_setOnParticipantJoin)parameter incorrect. Expected function`);
		}
	}

	/**
	 * Initializes the Participants left listener.
	 * Defines callback (remove any existing one) for the participants.
	 * This callback is called when a new participant is removed.
	 */
	function _setOnParticipantLeave(p_cb) {

		if (participantListLeaveCb) {
			dataref.child('participantList').off('child_changed', participantListLeaveCb);
			participantListLeaveCb = null;
		}

		if (p_cb && typeof p_cb == 'function') {
			participantListLeaveCb = (snapshot) => {
				const user = snapshot.name();
				if (snapshot.val() && (!snapshot.val().connected && snapshot.val().wasInsideRoom)) {
					console.log(`(ReachSDK::room[${roomId}]::_setOnParticipantLeave) user has left: ${user}`);
					p_cb(user);
				}
			};
			dataref.child('participantList').on('child_changed', participantListLeaveCb);
		} else {
			console.error(`(ReachSDK::room[${roomId}]::_setOnParticipantLeave)parameter incorrect. Expected function`);
		}
	}

	/**
	 * Sends an instant message by pushing an new element in the database with a timestamp, the message and its author (i.e. the current user)
	 * @param {string}p_message - The message to send
	 */
	function _sendInstantMessage(p_message) {
		if (p_message !== '') {
			console.log(`(ReachSDK::room[${roomId}]::sendInstantMessage)message=${p_message}`);
			dataref.child('instantMessageList').push({
				from: me,
				message: p_message,
				timestamp: Webcom.ServerValue.TIMESTAMP
			});
		}
	}

	/**
	 * Initializes the instant message listener.
	 * Defines callback (remove any existing one) for : instant messages.
	 * This callback is called, first for any existing instant messages, then when a new value is added in the database.
	 */
	function _setOnInstantMessage(p_cb) {
		if (instantMessageListCb) {
			dataref.child('instantMessageList').off('child_added', instantMessageListCb);
			instantMessageListCb = null;
		}
		if (p_cb && typeof p_cb == 'function') {
			instantMessageListCb = function (snapshot) {
				const obj = snapshot.val();
				console.log(`(ReachSDK::room[${roomId}]::_setOnInstantMessage)receive InstantMessage=${JSON.stringify(obj)}`);
				p_cb(obj);
			};
			dataref.child('instantMessageList').on('child_added', instantMessageListCb);
		} else {
			console.error(`(ReachSDK::room[${roomId}]::_setOnInstantMessage)parameter incorrect. Expected function`);
		}
	}


	/**
	 * Publishes the stream
	 * @param streamId - The identifier of the stream to publish
	 * @param localVid - The local video
	 * @param p_actionType - A value determining the type of stream in use (video, audio, video and audio, screen-sharing).
	 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
	 */
	function _publishStream(streamId, localVid, p_actionType, getLocalStreamCb) {
		console.log(`(ReachSDK::room[${roomId}]::publishStream)roomId=${roomId},streamId=${streamId},me=${me},actionType=${p_actionType}`);
		if (!(streamId && typeof streamId == 'string')) {
			console.error('(ReachSDK::reach::inviteToRoom)parameter streamId is incorrect. Expecting non empty string');
			return;
		}
		const localDataRef = dataref.child('publishedMediaList').child(streamId);
		const remoteDataRef = localDataRef.child('subscribersList');

		const pubAndSubscribe = () => {
			// publish the stream
			localDataRef.set({
				from: me,
				appInstanceId: utils.appInstanceId,
				actionType: p_actionType
			});
			localDataRef.onDisconnect().remove();

			// subscribe to stream updates for add
			const addSubscribersListCb = (snapshot) => {
				const
					remoteAppInstanceId = snapshot.name(),
					data = snapshot.val(),
					_subscriberId = data.userId,
					_peercoId = data.peercoId,
					_peercoRef = data.peercoRef,
					isAudioMute = mMutedStreams[streamId] && mMutedStreams[streamId].audio,
					isVideoMute = mMutedStreams[streamId] && mMutedStreams[streamId].video,
					streamStackId = `${streamId}_pub`;

				console.log(`(ReachSDK::room[${roomId}]::publishStream::addSubscribersListCb)subscriber ${_subscriberId} to stream ${streamId} added ${JSON.stringify(data)}`);

				if (!roomWebrtcStacks[streamStackId]) {
					roomWebrtcStacks[streamStackId] = [];
				}

				const mStackId = webrtcmngr.createWebrtc(localVid, remoteAppInstanceId, () => {
					console.log(`(ReachSDK::room[${roomId}]::publishStream::addSubscribersListCb)subscriber ${_subscriberId} to stream ${streamId} connection lost`);
					//onUnPublishedStream(localVid, remoteVid);
				}, true, p_actionType, _peercoId, _peercoRef, isAudioMute, isVideoMute);

				roomWebrtcStacks[streamStackId].push({
					stackId: mStackId,
					subscriberId: _subscriberId,
					isPublish: true,
					peercoId: _peercoId,
					peercoRef: _peercoRef,
					streamId
				});
				//delete roomWebrtcStacks[streamId+"_pub"];
				//$("div#videoButton_"+roomId+".videoButton, div#micButton_"+roomId+".micButton").removeClass("disabled");
			};

			// subscribe to stream updates for remove
			const removeSubscribersListCb = (snapshot) => {
				const
					subscriberId = snapshot.val().userId,
					streamStacks = roomWebrtcStacks[`${streamId}_pub`];

				if (subscriberId && streamStacks) {
					console.log(`(ReachSDK::room[${roomId}]::publishStream::removeSubscribersListCb)subscriber ${subscriberId} to stream ${streamId} removed`);
					for (let i = streamStacks.length - 1; i >= 0; i--) {
						if (streamStacks[i].subscriberId === subscriberId) {
							webrtcmngr.closeWebrtc(streamStacks[i].stackId, true);
							roomWebrtcStacks[`${streamId}_pub`].splice(i,1);
						}
					}
					//delete roomWebrtcStacks[`${streamId}_pub`];
				}
			};

			mStreams[streamId] = {
				addSubscribersListCb,
				removeSubscribersListCb
			};

			remoteDataRef.on('child_added', addSubscribersListCb);
			remoteDataRef.on('child_removed', removeSubscribersListCb);
		};

		//init local stream
		if (p_actionType) {
			if (p_actionType === actions.ACTION_TYPE_VIDEO) {
				localstream.connectLocalVideoStream(localVid, pubAndSubscribe, getLocalStreamCb);
			} else if (p_actionType === actions.ACTION_TYPE_AUDIO) {
				localstream.connectLocalAudioStream(localVid, pubAndSubscribe, getLocalStreamCb);
			} else if (p_actionType === actions.ACTION_TYPE_AUDIO_VIDEO) {
				localstream.connectLocalAudioVideoStream(localVid, pubAndSubscribe, getLocalStreamCb);
			}
		}
	}

	/**
	 * Initializes the Published MediaList listener.
	 * Defines callback (remove any existing one) for : published Media.
	 * This callback is called, first for any existing published media, then when a new value is added in the database.
	 */
	function _setOnPublishedStream(p_cb) {

		if (publishedMediaListCb) {
			dataref.child('publishedMediaList').off('child_added', publishedMediaListCb);
			publishedMediaListCb = null;
		}
		if (p_cb && typeof p_cb == 'function') {
			publishedMediaListCb = function (snapshot) {
				const
					obj = {},
					name = snapshot.name();
				obj[name] = snapshot.val();
				obj[name].roomId = roomId;
				p_cb(obj);
			};
			dataref.child('publishedMediaList').on('child_added', publishedMediaListCb);
		} else {
			console.error(`(ReachSDK::room[${roomId}]::_setOnPublishedStream)parameter incorrect. Expected function`);
		}
	}

	/**
	 * Unpublishes the stream
	 * @param streamId - The stream identifier
	 * @param {function} callback - The callback to trigger
	 */
	function _unPublishStream(streamId, callback) {
		console.log(`(ReachSDK::room[${roomId}]::unPublishStream)streamId ${streamId}`);
		const
			localDataRef = dataref.child(`publishedMediaList/${streamId}`),
			remoteDataRef = localDataRef.child('subscribersList'),
			streamStacksId = `${streamId}_pub`;

		if (mStreams[streamId] && mStreams[streamId].addSubscribersListCb) {
			remoteDataRef.off('child_added', mStreams[streamId].addSubscribersListCb);
		}
		if (mStreams[streamId] && mStreams[streamId].removeSubscribersListCb) {
			remoteDataRef.off('child_removed', mStreams[streamId].removeSubscribersListCb);
		}

		delete mStreams[streamId];
		delete mMutedStreams[streamId];

		localDataRef.onDisconnect().cancel();
		localDataRef.remove();


		if (roomWebrtcStacks[streamStacksId] && roomWebrtcStacks[streamStacksId].length > 0) {
			let nbStack = roomWebrtcStacks[streamStacksId].length;
			const closeCb = () => {
				nbStack--;
				if (nbStack < 1) {
					delete roomWebrtcStacks[streamStacksId];
					if (callback && typeof callback == 'function') {
						callback();
					}
				}
			};
			for (let i = nbStack - 1; i >= 0; i--) {
				webrtcmngr.closeWebrtc(roomWebrtcStacks[streamStacksId][i].stackId, true, closeCb);
			}
			localstream.close();
		} else {
			delete roomWebrtcStacks[streamStacksId];
			if (callback && typeof callback == 'function') {
				callback();
			}
		}


	}

	/**
	 * Initializes the unPublished MediaList listener.
	 * Defines callback (remove any exinting one) for : unpublished Media.
	 * This callback is called when a media is unpublish.
	 */
	function _setOnUnPublishedStream(p_cb) {

		if (unPublishedMediaListCb) {
			dataref.child('publishedMediaList').off('child_removed', unPublishedMediaListCb);
			unPublishedMediaListCb = null;
		}
		if (p_cb && typeof p_cb == 'function') {
			unPublishedMediaListCb = (snapshot) => {
				p_cb(snapshot.name());
			};
			dataref.child('publishedMediaList').on('child_removed', unPublishedMediaListCb);
		} else {
			console.error(`(ReachSDK::room[${roomId}]::_setOnUnPublishedStream)parameter incorrect. Expected function`);
		}
	}

	/**
	 * Subscribes to a stream and adds callbacks to the dedicated node according to the action type of the stream data.
	 * @param streamData - The stream data
	 * @param remoteVid - The remote video
	 * @param getRemoteStreamCb - a callback function to retrieve the mediastream object
	 */
	function _subscribeToStream(streamData, remoteVid, getRemoteStreamCb) {
		const
			streamId = Object.keys(streamData)[0],
			actionType = streamData[streamId].actionType;
		console.log(`(ReachSDK::room[${roomId}]::subscribeToStream)streamId ${streamId}`);
		//test if stream is not our
		if (mStreams && mStreams[streamId]) {
			//it is our stream -> subscribe to localStream
			if (actionType) {
				if (actionType === actions.ACTION_TYPE_VIDEO) {
					localstream.connectLocalVideoStream(remoteVid, getRemoteStreamCb);
				} else if (actionType === actions.ACTION_TYPE_AUDIO) {
					localstream.connectLocalAudioStream(remoteVid, getRemoteStreamCb);
				} else if (actionType === actions.ACTION_TYPE_AUDIO_VIDEO) {
					localstream.connectLocalAudioVideoStream(remoteVid, getRemoteStreamCb);
				}
			}
			return streamId;
		}


		const
			appInstanceId = streamData[streamId].appInstanceId,
			localDataRef = dataref.child('publishedMediaList').child(streamId),
			remoteDataRef = localDataRef.child('subscribersList'),
			streamStacksId = `${streamId}_sub`;

		let _peercoId, _peercoRef;

		if (!roomWebrtcStacks[streamStacksId]) {
			roomWebrtcStacks[streamStacksId] = [];
		} else if (roomWebrtcStacks[streamStacksId] && roomWebrtcStacks[streamStacksId][0] && roomWebrtcStacks[streamStacksId][0].peercoId) {
			_peercoId = roomWebrtcStacks[streamStacksId][0].peercoId;
		}

		// Returns a random integer between min (included) and max (included)
		// Using Math.round() will give you a non-uniform distribution!
		const getRandomIntInclusive = (min, max) => {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};

		if (!_peercoId) {
			_peercoId = Math.floor(Date.now()).toString() + getRandomIntInclusive(0, 1000000);
		}

		_peercoRef = datarefs.getWebrtc().push().name();

		remoteDataRef.child(utils.appInstanceId).set({
			ts: Webcom.ServerValue.TIMESTAMP,
			userId: me,
			peercoId: _peercoId,
			peercoRef: _peercoRef
		});

		const
			isAudioMute = mMutedStreams[streamId] && mMutedStreams[streamId].audio,
			isVideoMute = mMutedStreams[streamId] && mMutedStreams[streamId].video;

		const mStackId = webrtcmngr.createWebrtc(remoteVid, appInstanceId, () => {
			//	onUnPublishedStream(localVid, remoteVid);
		}, false, actionType, _peercoId, _peercoRef, isAudioMute, isVideoMute, getRemoteStreamCb);

		//handle remote unpublish
		if (!remoteUnpublishedCb) {
			remoteUnpublishedCb = function (snapshot) {
				const streamId = `${snapshot.val().from}-stream`;
				const removedStreamId = `${streamId}_sub`;
				console.log(`(ReachSDK::room[${roomId}]::remoteUnpublishedCb)streamId ${removedStreamId}`);
				if (roomWebrtcStacks[removedStreamId]) {
					let i = 0;
					while (i < roomWebrtcStacks[removedStreamId].length) {
						webrtcmngr.closeWebrtc(roomWebrtcStacks[removedStreamId][i].stackId, false);
						i++;
					}
					delete roomWebrtcStacks[removedStreamId];
				}
			};
			dataref.child('publishedMediaList').on('child_removed', remoteUnpublishedCb);
		}

		roomWebrtcStacks[streamStacksId].push({
			stackId: mStackId,
			isPublish: false,
			peercoId: _peercoId,
			peercoRef: _peercoRef,
			streamId
		});

		return streamId;
	}

	/**
	 * UnSubscribe from a stream
	 * @param streamId - The stream identifier from which the unSubscription have to be done
	 */
	function _unSubscribeFromStream(streamId) {
		console.log(`(ReachSDK::room[${roomId}]::unSubscribeFromStream)streamId ${streamId}`);
		const
			localDataRef = dataref.child('publishedMediaList').child(streamId),
			remoteDataRef = localDataRef.child('subscribersList'),
			streamStacksId = `${streamId}_sub`;

		remoteDataRef.child(utils.appInstanceId).remove();

		if (roomWebrtcStacks[streamStacksId]) {
			let i = 0;
			while (i < roomWebrtcStacks[streamStacksId].length) {
				if (roomWebrtcStacks[streamStacksId][i]) {
					webrtcmngr.closeWebrtc(roomWebrtcStacks[streamStacksId][i].stackId, false);
				}
				i++;
			}
			delete roomWebrtcStacks[streamStacksId];
		}
		delete mMutedStreams[streamId];
	}

	/**
	 * Returns all the available streams
	 * @return {array}
	 */
	function _getAvailableStreams() {
		console.log(`(ReachSDK::room[${roomId}]::_getAvailableStreams)`);
		return mAvailableStreams;
	}

	/**
	 * Returns an available stream having the identifier
	 * @param streamId - The stream identifier
	 * @return - A stream
	 */
	function _getAvailableStream(streamId) {
		console.log(`(ReachSDK::room[${roomId}]::_getAvailableStream)streamId=${streamId}`);
		if (mAvailableStreams && streamId) {
			for (let i = mAvailableStreams.length - 1; i >= 0; i--) {
				if (mAvailableStreams[i] && Object.keys(mAvailableStreams[i])[0] && Object.keys(mAvailableStreams[i])[0] === streamId) {
					return mAvailableStreams[i];
				}
			}
		}
		return null;
	}


	/**
	 * Removes all the streams by deleting the array containing them without triggerring callbacks
	 */
	function _removeAllAvailableStreams() {
		console.log(`(ReachSDK::room[${roomId}]::_removeAllAvailableStreams`);
		mAvailableStreams = [];
	}

	/**
	 * Audio mute the stream streamId
	 * @param streamId - The stream identifier to mute
	 */
	function _muteAudioStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error(`(ReachSDK::room[${roomId}]::_muteAudioStream)parameter streamId is incorrect. Expecting non empty string`);
			return;
		}
		console.log(`(ReachSDK::room[${roomId}]::_muteAudioStream)streamId=${streamId}`);
		if (!mMutedStreams[streamId]) {
			mMutedStreams[streamId] = {};
		}
		mMutedStreams[streamId].audio = true;

		if(roomWebrtcStacks){
			[roomWebrtcStacks[`${streamId}_pub`], roomWebrtcStacks[`${streamId}_sub`]].forEach((stacks) => {
				if(stacks && stacks.length > 0) {
					for (let i = stacks.length - 1; i >= 0; i--) {
						webrtcmngr.muteAudioWebrtcStack(stacks[i].stackId);
					}
				}
			});
		}
	}

	/**
	 * Audio unmuteStream the stream streamId
	 * @param streamId - The stream identifier to unmute
	 */
	function _unmuteAudioStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error(`(ReachSDK::room[${roomId}]::_unmuteAudioStream)parameter streamId is incorrect. Expecting non empty string`);
			return;
		}
		if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) {
			mMutedStreams[streamId].audio = false;
		}
		console.log(`(ReachSDK::room[${roomId}]::_unmuteAudioStream)streamId=${streamId}`);
		if(roomWebrtcStacks){
			[roomWebrtcStacks[`${streamId}_pub`], roomWebrtcStacks[`${streamId}_sub`]].forEach((stacks) => {
				if(stacks && stacks.length > 0) {
					for (let i = stacks.length - 1; i >= 0; i--) {
						webrtcmngr.unmuteAudioWebrtcStack(stacks[i].stackId);
					}
				}
			});
		}
	}

	/**
	 * Video mute the stream streamId
	 * @param streamId - The stream identifier to mute
	 */
	function _muteVideoStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error(`(ReachSDK::room[${roomId}]::_muteVideoStream)parameter streamId is incorrect. Expecting non empty string`);
			return;
		}
		console.log(`(ReachSDK::room[${roomId}]::_muteVideoStream)streamId=${streamId}`);
		if (!mMutedStreams[streamId]) {
			mMutedStreams[streamId] = {};
		}
		mMutedStreams[streamId].video = true;

		if(roomWebrtcStacks){
			console.log(roomWebrtcStacks[`${streamId}_pub`]);
			[roomWebrtcStacks[`${streamId}_pub`], roomWebrtcStacks[`${streamId}_sub`]].forEach((stacks) => {
				if(stacks && stacks.length > 0) {
					for (let i = stacks.length - 1; i >= 0; i--) {
						webrtcmngr.muteVideoWebrtcStack(stacks[i].stackId);
					}
				}
			});
		}
	}

	/**
	 * Video unmuteStream the stream streamId
	 * @param streamId - The stream identifier to unmute
	 */
	function _unmuteVideoStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error(`(ReachSDK::room[${roomId}]::_unmuteVideoStream)parameter streamId is incorrect. Expecting non empty string`);
			return;
		}
		if (mMutedStreams[streamId] && mMutedStreams[streamId].video) {
			mMutedStreams[streamId].video = false;
		}
		console.log(`(ReachSDK::room[${roomId}]::_unmuteVideoStream)streamId=${streamId}`);
		if(roomWebrtcStacks){
			[roomWebrtcStacks[`${streamId}_pub`], roomWebrtcStacks[`${streamId}_sub`]].forEach((stacks) => {
				if(stacks && stacks.length > 0) {
					for (let i = stacks.length - 1; i >= 0; i--) {
						webrtcmngr.unmuteVideoWebrtcStack(stacks[i].stackId);
					}
				}
			});
		}
	}


	/**
	 * Closes the room.
	 * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
	 * @param updateRoomStatusToClose - true if the room should be marked as closed
	 */
	function _close(updateRoomStatusToClose) {
		console.log(`(ReachSDK::room[${roomId}]::_close)room ${roomId}, detroyRoom=${updateRoomStatusToClose}`);

		const
			participantListRef = dataref.child('participantList'),
			publishedMediaListRef = dataref.child('publishedMediaList');

		// mark as disconnected when the room is left
		participantListRef.child(`${me}/connected`).set(false);

		// remove webcom callbacks
		Object.keys(mStreams).forEach(_unPublishStream);
		mStreams = [];

		if (instantMessageListCb) {
			dataref.child('instantMessageList').off('child_added', instantMessageListCb);
			instantMessageListCb = null;
		}
		if (publishedMediaListCb) {
			publishedMediaListRef.off('child_added', publishedMediaListCb);
			publishedMediaListCb = null;
		}
		if (publishedMediaListCbForAvailableStream) {
			publishedMediaListRef.off('child_added', publishedMediaListCbForAvailableStream);
			publishedMediaListCbForAvailableStream = null;
		}

		if (unPublishedMediaListCb) {
			publishedMediaListRef.off('child_removed', unPublishedMediaListCb);
			unPublishedMediaListCb = null;
		}

		if (unPublishedMediaListCbForAvailableStream) {
			publishedMediaListRef.off('child_removed', unPublishedMediaListCbForAvailableStream);
			unPublishedMediaListCbForAvailableStream = null;
		}

		if (participantListJoinAddedCb) {
			participantListRef.off('child_added', participantListJoinAddedCb);
			participantListJoinAddedCb = null;
		}

		if (participantListJoinChangedCb) {
			participantListRef.off('child_changed', participantListJoinChangedCb);
			participantListJoinChangedCb = null;
		}

		if (participantListLeaveCb) {
			participantListRef.off('child_changed', participantListLeaveCb);
			participantListLeaveCb = null;
		}

		if (remoteUnpublishedCb) {
			publishedMediaListRef.off('child_removed', remoteUnpublishedCb);
			remoteUnpublishedCb = null;
		}

		// close all webrtc stacks
		Object.keys(roomWebrtcStacks).forEach((streamStacksId) => {
			roomWebrtcStacks[streamStacksId].forEach((stack) => {
				if (streamStacksId && stack) {
					const _streamId=stack.streamId;
					const _stackId=stack.stackId;
					const _isPublish=stack.isPublish;
					if (_isPublish) {
						_unPublishStream(_streamId);
					} else {
						_unSubscribeFromStream(_streamId);
					}	    
					setTimeout(() => { 
						webrtcmngr.clearWebrtcStacks(_stackId);
					}, 1000);
				}
			});
		});
		setTimeout(() => {
			roomWebrtcStacks={};
			mMutedStreams=[];    	        
			_removeAllAvailableStreams();
		}, 1100);
		
		if (updateRoomStatusToClose && updateRoomStatusToClose === true) {
			dataref.child('commonDataList/status').set(ROOM_STATUS_CLOSE);
		}

		// Force localstream close
		localstream.close();
	}

	/**
	 * Switches between cameras.
	 */
	function _switchCamera(){
		localstream.switchCamera();
	}
	/**
	 * retrieving all of the video sources/cameras connected to the device & seen by the browser 
	 */
	function _getAllVideoSources(){
		return localstream.getAllVideoSources();
	}
	/**
	 * retrieving the number of video sources/cameras connected to the current device.
	 */
	function _getVideoSourceNumber(){
		return localstream.getVideoSourceNumber();
	}
	init();

	return {
		/**
		 * Return the room identifier
		 * @return {string} - The room identifier
		 */
		getRoomId: _getRoomId,
		/**
		 * Returns the user identifier
		 * @return {string} - The user identifier
		 */
		getMe: _getMe,
		/**
		 * Defines the callback to trigger when a participant has joined the room
		 * @param {function} p_cb - The callback
		 */
		setOnParticipantJoin: _setOnParticipantJoin,
		/**
		 * Defines the callback to trigger when a participant has left the room
		 * @param {function} p_cb - The callback
		 */
		setOnParticipantLeave: _setOnParticipantLeave,
		/**
		 * Sends an instant message
		 * @param {string} message - The emssage to send
		 * @return nothing
		 */
		sendInstantMessage: _sendInstantMessage,
		/**
		 * Defines the callback to trigger to send an instant message
		 * @param {function} p_cb - The callback
		 */
		setOnInstantMessage: _setOnInstantMessage,
		/**
		 * Publishes a stream
		 * @param streamId - The identifier of the stream to publish
		 * @param localVid - The local video
		 * @param actionType -
		 * @param getStreamCb - a callback function to retrieve the mediastream object
		 * @return nothing
		 */
		publishStream: _publishStream,
		/**
		 * Defines the callback to triggerwhen a stream has been published
		 * @param {function} p_cb - The callback
		 */
		setOnPublishedStream: _setOnPublishedStream,
		/**
		 * Unpublishes the stream
		 * @param streamId - The identifier of the stream to unpublish
		 * @param callback - The clalback to trigger when the stream has been unpublished
		 */
		unPublishStream: _unPublishStream,
		/**
		 * Defines the callback to trigger when a stream has been unpublished
		 * @param {function} p_cb - The callback
		 */
		setOnUnPublishedStream: _setOnUnPublishedStream,

		/**
		 * Subscribes to a stream
		 * @param streamData - The stream data
		 * @param remoteVid - The remote video
		 * @param getStreamCb - a callback function to retrieve the mediastream object
		 * @return nothing
		 */
		subscribeToStream: _subscribeToStream,
		/**
		 * Unsubcribes from a stream
		 * @param streamId - The identifier of the stream to unsubscribe
		 */
		unSubscribeFromStream: _unSubscribeFromStream,
		/**
		 * Returns all the available streams
		 * @return {array} - The available streams
		 */
		getAvailableStreams: _getAvailableStreams,
		/**
		 * Returns the stream matching the identifier
		 * @param stream - The stream identifier
		 */
		getAvailableStream: _getAvailableStream,
		/**
		 *  mute audio the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		muteAudioStream: _muteAudioStream,
		/**
		 * unmute audio the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		unmuteAudioStream: _unmuteAudioStream,
		/**
		 *  mute Video the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		muteVideoStream: _muteVideoStream,
		/**
		 * unmute Video the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		unmuteVideoStream: _unmuteVideoStream,
		/**
		 * Closes the room.
		 * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
		 * @param updateRoomStatusToClose - true if the room should be marked as closed
		 */
		close: _close,
		/**
		 * Calls the maching function for a dedicated event
		 * @param {string} evt - The event, in "instantMessage", "publishedStream", "unPublishedStream", "participantJoin", "participantLeave"
		 * @param {function} p_cb - The callback to call
		 */
		on: (evt, p_cb) => {
			switch (evt) {
			case 'instantMessage':
				_setOnInstantMessage(p_cb);
				break;
			case 'publishedStream':
				_setOnPublishedStream(p_cb);
				break;
			case 'unPublishedStream':
				_setOnUnPublishedStream(p_cb);
				break;
			case 'participantJoin':
				_setOnParticipantJoin(p_cb);
				break;
			case 'participantLeave':
				_setOnParticipantLeave(p_cb);
				break;
			default:
				console.err(`(ReachSDK::room[${roomId}]::on)unsupported ${evt} event`);
				break;
			}
		},
		/**
		 * Switches between cameras.
		 */
		switchCamera: _switchCamera,
		/**
		 * getting all of video sources/cameras connected to the current device and accessible by the browser
		 */
		getAllVideoSources: _getAllVideoSources,
		/**
		 * getting the number of the video sources/cameras connect to the current device
		 */
		getVideoSourceNumber: _getVideoSourceNumber
	};
}

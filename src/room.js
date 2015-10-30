/**
 * @file room.js - JS file to use for the room service.
 * @author Webcom
 */


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
	var roomId = p_roomId;
	/**
	 * @description The user identifier
	 */
	var me = p_me;
	/**
	 * @description A dataref pointer pointing to a node identified by the room identifier under the rooms node
	 */
	var dataref = datarefs.getRooms().child(roomId);
	/**
	 * @description The WebRTC stacks used in this room
	 */
	var roomWebrtcStacks = {};
	/**
	 * @description The available streams
	 */
	var mAvailableStreams = [];
	/**
	 * @description An array containing data structures for streams which possess callbacks to trigger in JSON format.
	 * These callbacks are addSubscriberListCb and removeSubscribersListCb.
	 */
	var mStreams = [];

	/**
	 * @description An array containing all the stream marked as muted
	 */
	var mMutedStreams = [];

	/**
	 * @description A callback to trigger for unpublished remote objects
	 */
	var remoteUnpublishedtCb = null;

	/**
	 * @description Callback triggered when a list of instant messages has been received
	 */
	var instantMessageListCb = null;
	/**
	 * @description User's callback triggered when a list of medias has been published
	 */
	var publishedMediaListCb = null;

	/**
	 * @description room's callback triggered when a list of medias has been published
	 */
	var publishedMediaListCbForAvailableStream = null;
	/**
	 * @description user's callback triggered when a list of medias has been unpublished
	 */
	var unPublishedMediaListCb = null;
	/**
	 * @description room's callback triggered when a list of medias has been published
	 */
	var unPublishedMediaListCbForAvailableStream = null;
	/**
	 * @description Callback triggered when a list of participants joins the room (added)
	 */
	var participantListJoinAddedCb = null;
	/**
	 * @description Callback triggered when a list of participants joins the room (changed)
	 */
	var participantListJoinChangedCb = null;
	/**
	 * @description Callback triggered when a list of participants leaves the room
	 */
	var participantListLeaveCb = null;


	/**
	 * Initializes the room object by adding a new value in a child identified by the user identifier under
	 * the participantList node
	 */
	function init() {
		dataref.child('participantList').child(me).update({
			connected: true,
			wasInsideRoom: true
		});

		dataref.child('participantList').child(me).child('connected').onDisconnect().set(false);

		initFirebaseListener();
	}

	/**
	 * Initializes a Firebase listener.
	 * Defines callbacks (if not already defined) for : instant messages, media list and participants.
	 * These callbacks are called if a new value is added or if a value has been removed in the database.
	 */
	function initFirebaseListener() {

		if (!publishedMediaListCbForAvailableStream) {
			publishedMediaListCbForAvailableStream = function (snapshot) {
				console.log('(webcomSDK::room[' + roomId + ']::onPublishedStreamForAvailableStream)stream=' + JSON.stringify(snapshot.val()));
				var obj = {};
				obj[snapshot.name()] = snapshot.val();
				obj[snapshot.name()].roomId = roomId;
				_addAvailableStream(obj);
			};
			dataref.child('publishedMediaList').on('child_added', publishedMediaListCbForAvailableStream);
		}

		if (!unPublishedMediaListCbForAvailableStream) {
			unPublishedMediaListCbForAvailableStream = function (snapshot) {
				var streamId = snapshot.name();
				console.log('(webcomSDK::room[' + roomId + ']::onUnPublishedStreamForAvailableStream)stream=' + streamId);
				_removeAvailableStream(streamId);
			};
			dataref.child('publishedMediaList').on('child_removed', unPublishedMediaListCbForAvailableStream);
		}


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

		if (participantListJoinAddedCb) {
			dataref.child('participantList').off('child_added', participantListJoinAddedCb);
			participantListJoinAddedCb = null;
		}
		if (participantListJoinChangedCb) {
			dataref.child('participantList').off('child_changed', participantListJoinChangedCb);
			participantListJoinChangedCb = null;
		}
		if (p_cb && typeof p_cb == 'function') {
			participantListJoinAddedCb = function (snapshot) {
				var user = snapshot.name();
				if (snapshot.val() && snapshot.val().connected && snapshot.val().wasInsideRoom) {
					console.log('(webcomSDK::room[' + roomId + ']::_setOnParticipantJoin) user has joined: ' + user);
					p_cb(user);
				}
			};
			dataref.child('participantList').on('child_added', participantListJoinAddedCb);

			participantListJoinChangedCb = function (snapshot) {
				var user = snapshot.name();
				if (snapshot.val() && (snapshot.val().connected && snapshot.val().wasInsideRoom)) {
					console.log('(webcomSDK::room[' + roomId + ']::_setOnParticipantJoin) user has joined: ' + user);
					p_cb(user);
				}
			};
			dataref.child('participantList').on('child_changed', participantListJoinChangedCb);
		} else {
			console.error('(webcomSDK::room[' + roomId + ']::_setOnParticipantJoin)parameter incorrect. Expected function');
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
			participantListLeaveCb = function (snapshot) {
				var user = snapshot.name();
				if (snapshot.val() && (!snapshot.val().connected && snapshot.val().wasInsideRoom)) {
					console.log('(webcomSDK::room[' + roomId + ']::_setOnParticipantLeave) user has left: ' + user);
					p_cb(user);
				}
			};
			dataref.child('participantList').on('child_changed', participantListLeaveCb);
		} else {
			console.error('(webcomSDK::room[' + roomId + ']::_setOnParticipantLeave)parameter incorrect. Expected function');
		}
	}

	/**
	 * Sends an instant message by pushing an new element in the database with a timestamp, the message and its author (i.e. the current user)
	 * @param {string}message - The message to send
	 */
	function _sendInstantMessage(message) {
		if (message !== '') {
			console.log('(webcomSDK::room[' + roomId + ']::sendInstantMessage)message=' + message);
			dataref.child('instantMessageList').push({
				from: me,
				message: message,
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
				var obj = snapshot.val();
				console.log('(webcomSDK::room[' + roomId + ']::_setOnInstantMessage)receive InstantMessage=' + JSON.stringify(obj));
				p_cb(obj);
			};
			dataref.child('instantMessageList').on('child_added', instantMessageListCb);
		} else {
			console.error('(webcomSDK::room[' + roomId + ']::_setOnInstantMessage)parameter incorrect. Expected function');
		}
	}


	/**
	 * Publishes the stream
	 * @param streamId - The identifier of the stream to publish
	 * @param localVid - The local video
	 * @param actionType - A value determining the type of stream in use (video, audio, video and audio, screen-sharing).
	 * @param getLocalStreamCb - a callback function to retrieve the mediastream object
	 */
	function _publishStream(streamId, localVid, actionType, getLocalStreamCb) {
		console.log('(webcomSDK::room[' + roomId + ']::publishStream)roomId=' + roomId + ',streamId=' + streamId + ',me=' + me + ',actionType=' + actionType);
		if (!(streamId && typeof streamId == 'string')) {
			console.error('(webcomSDK::reach::inviteToRoom)parameter streamId is incorrect. Expecting non empty string');
			return;
		}
		const localDataRef = dataref.child('publishedMediaList').child(streamId);
		const remoteDataRef = localDataRef.child('subscribersList');

		function pubAndSubscribe() {
			// publish the stream
			localDataRef.set({from: me, appInstanceId: utils.appInstanceId, actionType: actionType});
			localDataRef.onDisconnect().remove();


			// subscribe to stream updates for add
			var addSubscribersListCb = function (snapshot) {
				var remoteAppInstanceId = snapshot.name();
				var data = snapshot.val();
				var subscriberId = data.userId;
				var _peercoId = data.peercoId;
				var _peercoRef = data.peercoRef;
				console.log('(webcomSDK::room[' + roomId + ']::publishStream::addSubscribersListCb)subscriber ' + subscriberId + ' to stream ' + streamId + ' added ' + JSON.stringify(data));
				if (!roomWebrtcStacks[streamId + '_pub']) {
					roomWebrtcStacks[streamId + '_pub'] = [];
				}
				var isAudioMute = false;
				var isVideoMute = false;
				if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) isAudioMute = true;
				if (mMutedStreams[streamId] && mMutedStreams[streamId].video) isVideoMute = true;
				var mStackId = webrtcmngr.createWebrtc(localVid, remoteAppInstanceId, function () {
					console.log('(webcomSDK::room[' + roomId + ']::publishStream::addSubscribersListCb)subscriber ' + subscriberId + ' to stream ' + streamId + ' connection lost');
//				onUnPublishedStream(localVid, remoteVid);
				}, true, actionType, _peercoId, _peercoRef, isAudioMute, isVideoMute);

				roomWebrtcStacks[streamId + '_pub'].push({
					stackId: mStackId,
					subscriberId: subscriberId,
					isPublish: true,
					peercoId: _peercoId,
					peercoRef: _peercoRef
				});
				//delete roomWebrtcStacks[streamId+"_pub"];
				//$("div#videoButton_"+roomId+".videoButton, div#micButton_"+roomId+".micButton").removeClass("disabled");
			};
			// subscribe to stream updates for remove
			var removeSubscribersListCb = function (snapshot) {
				var subscriberId = snapshot.name();
				if (subscriberId) {
					console.log('(webcomSDK::room[' + roomId + ']::publishStream::removeSubscribersListCb)subscriber ' + subscriberId + ' to stream ' + streamId + ' removed');
					if (roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
						for (let i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
							if (roomWebrtcStacks[streamId + '_pub'][i].subscriberId === subscriberId) {
								webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_pub'][i].stackId, true);
							}
						}
						delete roomWebrtcStacks[streamId + '_pub'];
					}
				}
			};


			mStreams[streamId] = {
				addSubscribersListCb,
				removeSubscribersListCb
			};

			remoteDataRef.on('child_added', addSubscribersListCb);
			remoteDataRef.on('child_removed', removeSubscribersListCb);
		}

		//init local stream
		if (actionType) {
			if (actionType === actions.ACTION_TYPE_VIDEO) {
				localstream.connectLocalVideoStream(localVid, pubAndSubscribe, getLocalStreamCb);
			} else if (actionType === actions.ACTION_TYPE_AUDIO) {
				localstream.connectLocalAudioStream(localVid, pubAndSubscribe, getLocalStreamCb);
			} else if (actionType === actions.ACTION_TYPE_AUDIO_VIDEO) {
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
				var obj = {};
				obj[snapshot.name()] = snapshot.val();
				obj[snapshot.name()].roomId = roomId;
				p_cb(obj);
			};
			dataref.child('publishedMediaList').on('child_added', publishedMediaListCb);
		} else {
			console.error('(webcomSDK::room[' + roomId + ']::_setOnPublishedStream)parameter incorrect. Expected function');
		}
	}

	/**
	 * Unpublishes the stream
	 * @param streamId - The stream identifier
	 * @param {function} callback - The callback to trigger
	 */
	function _unPublishStream(streamId, callback) {
		console.log('(webcomSDK::room[' + roomId + ']::unPublishStream)streamId ' + streamId);
		var localDataRef = dataref.child('publishedMediaList').child(streamId);
		var remoteDataRef = localDataRef.child('subscribersList');
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
		if (roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
			var nbStack = roomWebrtcStacks[streamId + '_pub'].length;
			for (let i = nbStack - 1; i >= 0; i--) {

				webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_pub'][i].stackId, true, function () {
					nbStack--;
					if (nbStack < 1) {
						delete roomWebrtcStacks[streamId + '_pub'];

						if (callback && typeof callback == 'function')  callback();
					}
				});
			}
		} else {
			delete roomWebrtcStacks[streamId + '_pub'];
			if (callback && typeof callback == 'function')    callback();
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
			unPublishedMediaListCb = function (snapshot) {
				var streamId = snapshot.name();
				p_cb(streamId);
			};
			dataref.child('publishedMediaList').on('child_removed', unPublishedMediaListCb);
		} else {
			console.error('(webcomSDK::room[' + roomId + ']::_setOnUnPublishedStream)parameter incorrect. Expected function');
		}
	}

	/**
	 * Subscribes to a stream and adds callbacks to the dedicated node according to the action type of the stream data.
	 * @param streamData - The stream data
	 * @param remoteVid - The remote video
	 * @param getRemoteStreamCb - a callback function to retrieve the mediastream object
	 */
	function _subscribeToStream(streamData, remoteVid, getRemoteStreamCb) {
		var streamId = Object.keys(streamData)[0];
		var actionType = streamData[streamId].actionType;
		console.log('(webcomSDK::room[' + roomId + ']::subscribeToStream)streamId ' + streamId);
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


		var appInstanceId = streamData[streamId].appInstanceId;

		var localDataRef = dataref.child('publishedMediaList').child(streamId);
		var remoteDataRef = localDataRef.child('subscribersList');
		var _peercoId = null;
		var _peercoRef = null;
		if (!roomWebrtcStacks[streamId + '_sub']) {
			roomWebrtcStacks[streamId + '_sub'] = [];
		} else if (roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'][0] && roomWebrtcStacks[streamId + '_sub'][0].peercoId) {
			_peercoId = roomWebrtcStacks[streamId + '_sub'][0].peercoId;
		}

		// Returns a random integer between min (included) and max (included)
		// Using Math.round() will give you a non-uniform distribution!
		function getRandomIntInclusive(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		if (!_peercoId) {
			_peercoId = Math.floor(Date.now()).toString() + getRandomIntInclusive(0, 1000000);
		}

		_peercoRef = datarefs.getWebrtc().push().name();


		remoteDataRef.child(utils.appInstanceId).set({
			'ts': Webcom.ServerValue.TIMESTAMP,
			'userId': me,
			'peercoId': _peercoId,
			'peercoRef': _peercoRef
		});
		var isAudioMute = false;
		var isVideoMute = false;
		if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) isAudioMute = true;
		if (mMutedStreams[streamId] && mMutedStreams[streamId].video) isVideoMute = true;

		var mStackId = webrtcmngr.createWebrtc(remoteVid, appInstanceId, function () {
			//	onUnPublishedStream(localVid, remoteVid);
		}, false, actionType, _peercoId, _peercoRef, isAudioMute, isVideoMute, getRemoteStreamCb);

		//handle remote unpublish
		if (!remoteUnpublishedtCb) {
			remoteUnpublishedtCb = function (snapshot) {
				var removedStreamId = Object.keys(snapshot)[0];
				if (roomWebrtcStacks[removedStreamId + '_sub']) {
					var i = 0;
					while (i < roomWebrtcStacks[streamId + '_sub'].length) {
						webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_sub'][i].stackId, false);
						i++;
					}
					delete roomWebrtcStacks[removedStreamId + '_sub'];
				}
			};
			dataref.child('publishedMediaList').on('child_removed', remoteUnpublishedtCb);
		}


		roomWebrtcStacks[streamId + '_sub'].push({
			stackId: mStackId,
			isPublish: false,
			peercoId: _peercoId,
			peercoRef: _peercoRef
		});
		return streamId;
	}

	/**
	 * Unsubscribe from a stream
	 * @param streamId - The stream identifier from which the unsubscription have to be done
	 */
	function _unSubscribeFromStream(streamId) {
		console.log('(webcomSDK::room[' + roomId + ']::unSubscribeFromStream)streamId ' + streamId);
		var localDataRef = dataref.child('publishedMediaList').child(streamId);
		var remoteDataRef = localDataRef.child('subscribersList');
		remoteDataRef.child(utils.appInstanceId).remove();

		if (roomWebrtcStacks[streamId + '_sub']) {
			var i = 0;
			while (i < roomWebrtcStacks[streamId + '_sub'].length) {
				if (roomWebrtcStacks[streamId + '_sub'][i]) {
					webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_sub'][i].stackId, false);
				}
				i++;
			}
			delete roomWebrtcStacks[streamId + '_sub'];
		}
		delete mMutedStreams[streamId];
	}

	/**
	 * Returns all the available streams
	 * @return {array}
	 */
	function _getAvailableStreams() {
		console.log('(webcomSDK::room[' + roomId + ']::_getAvailableStreams)');
		return mAvailableStreams;
	}

	/**
	 * Returns an available stream having the identifier
	 * @param streamId - The stream identifier
	 * @return - A stream
	 */
	function _getAvailableStream(streamId) {
		console.log('(webcomSDK::room[' + roomId + ']::_getAvailableStream)streamId=' + streamId);
		if (mAvailableStreams && streamId) {
			for (var i = mAvailableStreams.length - 1; i >= 0; i--) {
				if (mAvailableStreams[i] && Object.keys(mAvailableStreams[i])[0] && Object.keys(mAvailableStreams[i])[0] === streamId) {
					return mAvailableStreams[i];
				}
			}
		}
		return null;
	}

	/**
	 * Adds an available stream
	 * @param data - The stream to add
	 */
	function _addAvailableStream(data) {
		console.log('(webcomSDK::room[' + roomId + ']::_addAvailableStream)data=' + JSON.stringify(data));
		mAvailableStreams.push(data);
	}

	/**
	 * Removes an available stream
	 * @param stream - The streamId to remove
	 */
	function _removeAvailableStream(streamId) {
		console.log('(webcomSDK::room[' + roomId + ']::_removeAvailableStream)streamId=' + streamId);
		if (mAvailableStreams && streamId) {
			for (let i = mAvailableStreams.length - 1; i >= 0; i--) {
				if (mAvailableStreams[i] && Object.keys(mAvailableStreams[i])[0] && Object.keys(mAvailableStreams[i])[0] === streamId) {
					delete mAvailableStreams[i];
				}
			}
		}
	}

	/**
	 * Removes all the streams by deleting the array containing them without triggerring callbacks
	 */
	function _removeAllAvailableStreams() {
		console.log('(webcomSDK::room[' + roomId + ']::_removeAllAvailableStreams');
		mAvailableStreams = [];
	}

	/**
	 * Audio mute the stream streamId
	 * @param streamId - The stream identifier to mute
	 */
	function _muteAudioStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error('(webcomSDK::room[' + roomId + ']::_muteAudioStream)parameter streamId is incorrect. Expecting non empty string');
			return;
		}
		console.log('(webcomSDK::room[' + roomId + ']::_muteAudioStream)streamId=' + streamId);
		if (!mMutedStreams[streamId]) mMutedStreams[streamId] = {};
		mMutedStreams[streamId].audio = true;
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
				webrtcmngr.muteAudioWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
			}
		}
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
				webrtcmngr.muteAudioWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
			}
		}


	}

	/**
	 * Audio unmuteStream the stream streamId
	 * @param streamId - The stream identifier to unmute
	 */
	function _unmuteAudioStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error('(webcomSDK::room[' + roomId + ']::_unmuteAudioStream)parameter streamId is incorrect. Expecting non empty string');
			return;
		}
		if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) mMutedStreams[streamId].audio = false;
		console.log('(webcomSDK::room[' + roomId + ']::_unmuteAudioStream)streamId=' + streamId);
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
				webrtcmngr.unmuteAudioWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
			}
		}
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
				webrtcmngr.unmuteAudioWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
			}
		}

	}

	/**
	 * Video mute the stream streamId
	 * @param streamId - The stream identifier to mute
	 */
	function _muteVideoStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error('(webcomSDK::room[' + roomId + ']::_muteVideoStream)parameter streamId is incorrect. Expecting non empty string');
			return;
		}
		console.log('(webcomSDK::room[' + roomId + ']::_muteVideoStream)streamId=' + streamId);
		if (!mMutedStreams[streamId]) mMutedStreams[streamId] = {};
		mMutedStreams[streamId].video = true;
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
				webrtcmngr.muteVideoWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
			}
		}
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
				webrtcmngr.muteVideoWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
			}
		}


	}

	/**
	 * Video unmuteStream the stream streamId
	 * @param streamId - The stream identifier to unmute
	 */
	function _unmuteVideoStream(streamId) {
		if (!(streamId && typeof streamId == 'string')) {
			console.error('(webcomSDK::room[' + roomId + ']::_unmuteVideoStream)parameter streamId is incorrect. Expecting non empty string');
			return;
		}
		if (mMutedStreams[streamId] && mMutedStreams[streamId].video) mMutedStreams[streamId].video = false;
		console.log('(webcomSDK::room[' + roomId + ']::_unmuteVideoStream)streamId=' + streamId);
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
				webrtcmngr.unmuteVideoWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
			}
		}
		if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
			for (let i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
				webrtcmngr.unmuteVideoWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
			}
		}

	}


	/**
	 * Closes the room.
	 * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
	 * @param updateRoomStatusToClose - true if the room should be marked as closed
	 */
	function _close(updateRoomStatusToClose) {
		console.log('(webcomSDK::room[' + roomId + ']::_close)room ' + roomId + ', detroyRoom=' + updateRoomStatusToClose);
		// mark as disconnected when the room is left
		dataref.child('participantList').child(me).child('connected').set(false);
		// remove webcom callbacks
		for (var stream in mStreams) {
			_unPublishStream(stream);
		}
		mStreams = [];
		if (instantMessageListCb) {
			dataref.child('instantMessageList').off('child_added', instantMessageListCb);
			instantMessageListCb = null;
		}
		if (publishedMediaListCb) {
			dataref.child('publishedMediaList').off('child_added', publishedMediaListCb);
			publishedMediaListCb = null;
		}
		if (publishedMediaListCbForAvailableStream) {
			dataref.child('publishedMediaList').off('child_added', publishedMediaListCbForAvailableStream);
			publishedMediaListCbForAvailableStream = null;
		}

		if (unPublishedMediaListCb) {
			dataref.child('publishedMediaList').off('child_removed', unPublishedMediaListCb);
			unPublishedMediaListCb = null;
		}

		if (unPublishedMediaListCbForAvailableStream) {
			dataref.child('publishedMediaList').off('child_removed', unPublishedMediaListCbForAvailableStream);
			unPublishedMediaListCbForAvailableStream = null;
		}

		if (participantListJoinAddedCb) {
			dataref.child('participantList').off('child_added', participantListJoinAddedCb);
			participantListJoinAddedCb = null;
		}

		if (participantListJoinChangedCb) {
			dataref.child('participantList').off('child_changed', participantListJoinChangedCb);
			participantListJoinChangedCb = null;
		}

		if (participantListLeaveCb) {
			dataref.child('participantList').off('child_changed', participantListLeaveCb);
			participantListLeaveCb = null;
		}

		if (remoteUnpublishedtCb) {
			dataref.child('publishedMediaList').off('child_removed', remoteUnpublishedtCb);
			remoteUnpublishedtCb = null;
		}

		// close all webrtc stacks
		for (var i in roomWebrtcStacks) {
			for (var j = 0; j < roomWebrtcStacks[i].length; j++) {
				if (roomWebrtcStacks[i][j]) {
					if (roomWebrtcStacks[i][j].isPublish) {
						webrtcmngr.closeWebrtc(roomWebrtcStacks[i][j].stackId, true);
					} else {
						webrtcmngr.closeWebrtc(roomWebrtcStacks[i][j].stackId, false);
					}
					webrtcmngr.clearWebrtcStacks(roomWebrtcStacks[i][j].stackId);
				}
			}
		}
		roomWebrtcStacks = {};


		mMutedStreams = [];

		_removeAllAvailableStreams();
		if (updateRoomStatusToClose && updateRoomStatusToClose === true) {
			dataref.child('commonDataList').child('status').set(ROOM_STATUS_CLOSE);
		}

	}

	init();

	return {
		/**
		 * Return the room identifier
		 * @return {string} - The room identifier
		 */
		getRoomId: function () {
			return _getRoomId();
		},
		/**
		 * Returns the user identifier
		 * @return {string} - The user identifier
		 */
		getMe: function () {
			return _getMe();
		},
		/**
		 * Defines the callback to trigger when a participant has joined the room
		 * @param {function} p_cb - The callback
		 */
		setOnParticipantJoin: function (p_cb) {
			_setOnParticipantJoin(p_cb);
		},
		/**
		 * Defines the callback to trigger when a aprticipant has leaft the room
		 * @param {function} p_cb - The callback
		 */
		setOnParticipantLeave: function (p_cb) {
			_setOnParticipantLeave(p_cb);
		},
		/**
		 * Sends an instant message
		 * @param {string} message - The emssage to send
		 * @return nothing
		 */
		sendInstantMessage: function (message) {
			return _sendInstantMessage(message);
		},
		/**
		 * Defines the callback to trigger to send an instant message
		 * @param {function} p_cb - The callback
		 */
		setOnInstantMessage: function (p_cb) {
			_setOnInstantMessage(p_cb);
		},
		/**
		 * Publishes a stream
		 * @param streamId - The identifier of the stream to publish
		 * @param localVid - The local video
		 * @param actionType -
		 * @param getStreamCb - a callback function to retrieve the mediastream object
		 * @return nothing
		 */
		publishStream: function (streamId, localVid, actionType, getStreamCb) {
			return _publishStream(streamId, localVid, actionType, getStreamCb);
		},
		/**
		 * Defines the callback to triggerwhen a stream has been published
		 * @param {function} p_cb - The callback
		 */
		setOnPublishedStream: function (p_cb) {
			_setOnPublishedStream(p_cb);
		},
		/**
		 * Unpublishes the stream
		 * @param streamId - The identifier of the stream to unpublish
		 * @param callback - The clalback to trigger when the stream has been unpublished
		 */
		unPublishStream: function (streamId, callback) {
			return _unPublishStream(streamId, callback);
		},
		/**
		 * Defines the callback to trigger when a stream has been unpublished
		 * @param {function} p_cb - The callback
		 */
		setOnUnPublishedStream: function (p_cb) {
			_setOnUnPublishedStream(p_cb);
		},

		/**
		 * Subscribes to a stream
		 * @param streamData - The stream data
		 * @param remoteVid - The remote video
		 * @param getStreamCb - a callback function to retrieve the mediastream object
		 * @return nothing
		 */
		subscribeToStream: function (streamData, remoteVid, getStreamCb) {
			return _subscribeToStream(streamData, remoteVid, getStreamCb);
		},
		/**
		 * Unsubcribes from a stream
		 * @param streamId - The identifier of the stream to unsubscribe
		 */
		unSubscribeFromStream: function (streamId) {
			return _unSubscribeFromStream(streamId);
		},
		/**
		 * Returns all the available streams
		 * @return {array} - The available streams
		 */
		getAvailableStreams: function () {
			return _getAvailableStreams();
		},
		/**
		 * Returns the stream matching the identifier
		 * @param stream - The stream identifier
		 */
		getAvailableStream: function (stream) {
			return _getAvailableStream(stream);
		},
		/**
		 *  mute audio the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		muteAudioStream: function (streamId) {
			_muteAudioStream(streamId);
		},
		/**
		 * unmute audio the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		unmuteAudioStream: function (streamId) {
			_unmuteAudioStream(streamId);
		},
		/**
		 *  mute Video the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		muteVideoStream: function (streamId) {
			_muteVideoStream(streamId);
		},
		/**
		 * unmute Video the stream streamId
		 * @param streamId - The stream identifier to mute
		 */
		unmuteVideoStream: function (streamId) {
			_unmuteVideoStream(streamId);
		},
		/**
		 * Closes the room.
		 * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
		 * @param updateRoomStatusToClose - true if the room should be marked as closed
		 */
		close: function (updateRoomStatusToClose) {
			return _close(updateRoomStatusToClose);
		},
		/**
		 * Calls the maching function for a dedicated event
		 * @param {string} evt - The event, in "instantMessage", "publishedStream", "unPublishedStream", "participantJoin", "participantLeave"
		 * @param {function} p_cb - The callback to call
		 */
		on: function (evt, p_cb) {
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
				console.err('(webcomSDK::room[' + roomId + ']::on)unsupported ' + evt + ' event');
				break;
			}
		}
	};
}
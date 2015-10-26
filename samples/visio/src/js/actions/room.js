/* global ComSDK */

import history from '../history';
import { getRoom } from '../utils/com';


export const STREAM_PUBLISHED = 'STREAM_PUBLISHED';
export const ROOM_LEFT = 'ROOM_LEFT';
export const STREAM_SUBSCRIBED = 'STREAM_SUBSCRIBED';
export const VIDEO_MUTED = 'VIDEO_MUTED';
export const VIDEO_UNMUTED = 'VIDEO_UNMUTED';
export const AUDIO_MUTED = 'AUDIO_MUTED';
export const AUDIO_UNMUTED = 'AUDIO_UNMUTED';


export function receiveRemoteStream(username, roomname, streamData, remoteVideoTag) {
	return dispatch => {
		const streamId = Object.keys(streamData)[0];
		//const stream = streamData[streamId];
		const room = getRoom(username, roomname);

		//if (stream.from === username) {
		room.subscribeToStream(streamData, remoteVideoTag, () => {
			dispatch({
				type: STREAM_SUBSCRIBED,
				data: streamId
			});
		});
	};
}

export function listenToStreams(username, roomname, videoTag) {
	return (dispatch, getState) => {
		const room = getRoom(username, roomname);

		room.on('publishedStream', (data) => {
			dispatch(receiveRemoteStream(username, roomname, data, videoTag));
		});

		room.on('unPublishedStream', (data) => {
			const streamId = Object.keys(data)[0];
			//getState().app.room;
		});
	};
}

export function publishStream(username, roomname, videoTag) {
	return dispatch => {
		const room = getRoom(username, roomname);
		const streamId = `${username}-stream`;

		room.publishStream(streamId,
			videoTag,
			ComSDK.actions.ACTION_TYPE_AUDIO_VIDEO,
			(mediaStream) => {
				dispatch({
					type: STREAM_PUBLISHED,
					data: streamId
				});
			}
		);

		/*
		myRoom.on("publishedStream", function (data) {
			console.log(roomId + ":" + userId + " on publishedStream: " + JSON.stringify(data));
			// accept remote camera if ours
			var streamId = Object.keys(data)[0];
			if (data[streamId].from == remoteUserId) {
				remoteStream = myRoom.subscribeToStream(data, remoteVid);
			}
		});
		myRoom.on("unPublishedStream", function (data) {
			console.log(roomId + ":" + userId + " on unPublishedStream: " + JSON.stringify(data));
			// remote hangup, so hangup too
			// Note: this is an implementation decision, since in the room mechanism there is no real hangup...
			_hangup();
		});
		*/
	};
}

export function quitRoom(username, roomObj) {
	return dispatch => {
		const {
			name: roomname,
			remoteStreams: remoteStreamsId,
			localStreamId
		} = roomObj;
		const room = getRoom(username, roomname);

		(remoteStreamsId || []).forEach((streamId) => {
			room.unSubscribeFromStream(streamId);
		});

		room.unPublishStream(localStreamId, () => {
			history.replaceState(null, '/participants');
			dispatch({
				type: ROOM_LEFT,
				data: {...roomObj }
			});
		});
	};
}

export function toggleAudio(username, roomObj) {
	const {
		name: roomname,
		localAudioMuted: muted,
		localStreamId: streamId
	} = roomObj;

	const room = getRoom(username, roomname);

	if (muted) {
		room.unmuteAudioStream(streamId);
	} else {
		room.muteAudioStream(streamId);
	}

	return {
		type: muted ?  AUDIO_UNMUTED : AUDIO_MUTED,
		data: streamId
	};
}

export function toggleVideo(username, roomObj) {
	const {
		name: roomname,
		localVideoMuted: muted,
		localStreamId: streamId
		} = roomObj;

	const room = getRoom(username, roomname);

	if (muted) {
		room.unmuteVideoStream(streamId);
	} else {
		room.muteVideoStream(streamId);
	}

	return {
		type: muted ? VIDEO_UNMUTED : VIDEO_MUTED,
		data: streamId
	};
}


/* global ComSDK */

import history from '../history';
import {initComSDK, getReach, getRoom } from '../utils/com';

export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
export const UPDATE_PARTICIPANT = 'UPDATE_PARTICIPANT';
export const LOGGED = 'LOGGED';
export const RECEIVE_INVITATION = 'RECEIVE_INVITATION';
export const INVITATION_SENT = 'INVITATION_SENT';
export const INVITATION_ANSWERED = 'INVITATION_ANSWERED';
export const STREAM_PUBLISHED = 'STREAM_PUBLISHED';
export const ROOM_LEFT = 'ROOM_LEFT';
export const STREAM_SUBSCRIBED = 'STREAM_SUBSCRIBED';
export const VIDEO_MUTED = 'VIDEO_MUTED';
export const VIDEO_UNMUTED = 'VIDEO_UNMUTED';
export const AUDIO_MUTED = 'AUDIO_MUTED';
export const AUDIO_UNMUTED = 'AUDIO_UNMUTED';

export function addParticipant(username, data) {
	return {
		type: ADD_PARTICIPANT,
		data: {
			username,
			info: data
		}
	};
}

export function updateParticipant(username, data) {
	return {
		type: UPDATE_PARTICIPANT,
		data: {
			username,
			info: data
		}
	};
}

export function islogged(username) {
	return {
		type: LOGGED,
		data: username
	};
}

export function receiveInvitation(data) {
	return {
		type: RECEIVE_INVITATION,
		data
	};
}

export function invitationSent(invitee) {
	return {
		type: INVITATION_SENT,
		data: invitee
	};
}

export function invitationAnswered(accept, roomname, owner) {
	return {
		type: INVITATION_ANSWERED,
		data: {
			accept,
			roomname,
			owner
		}
	};
}

export function sendInvitation(me, invitee) {
	return dispatch => {
		const reach = getReach();

		dispatch(invitationSent(invitee));

		reach.inviteToRoom(`${me}-${invitee}`, [invitee], 'test', (rId, invitee, status, info) => {
			dispatch(invitationAnswered(status === 'ACCEPTED', rId, me));
			if (status === 'ACCEPTED') {
				history.replaceState(null, '/visio');
			}
		});
	};
}

export function respondToInvitation(accept, data, reason) {
	return dispatch => {
		const reach = getReach();

		if (accept) {
			const invitname = Object.keys(data)[0];
			const roomname = data[invitname].room;
			const owner = data[invitname].from;
			reach.acceptInvitation(data);
			dispatch(invitationAnswered(accept,roomname, owner));
			history.replaceState(null, '/visio');
		}
		else {
			reach.rejectInvitation(data, reason);
			dispatch(invitationAnswered(accept));
		}

	};
}

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
				data: room
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

export function login(username) {
	return dispatch => {
		initComSDK(username);

		history.replaceState(null, '/participants');

		dispatch(islogged(username));

		const reach = getReach();

		reach.on('userAdded', (data) => {
			const username = Object.keys(data)[0];
			dispatch(addParticipant(username, data[username]));
		});

		reach.on('userChanged', (data) => {
			const username = Object.keys(data)[0];
			dispatch(updateParticipant(username, data[username]));
		});

		reach.on('newRoomInvitation', (data) => {
			dispatch(receiveInvitation(data));
		});
	};
}
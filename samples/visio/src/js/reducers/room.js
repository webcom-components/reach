import {
	STREAM_PUBLISHED,
	STREAM_SUBSCRIBED,
	VIDEO_MUTED,
	VIDEO_UNMUTED,
	AUDIO_MUTED,
	AUDIO_UNMUTED,
	ROOM_LEFT
} from '../actions/room';


import { INVITATION_ANSWERED, LOGOUT } from '../actions/reach';

const initialState = null;

export default function room(state = initialState, action = {}) {
	switch (action.type) {
	case INVITATION_ANSWERED:
		return {
			name: action.data.roomname,
			owner: action.data.owner
		};
	case STREAM_PUBLISHED:
		return {
			...state,
			localStreamId: action.data
		};
	case STREAM_SUBSCRIBED:
		return {
			...state,
			remoteStreams: [
				...state.remoteStreams,
				action.data
			]
		};
	case VIDEO_MUTED:
		return {
			...state,
			localVideoMuted: true
		};
	case VIDEO_UNMUTED:
		return {
			...state,
			localVideoMuted: false
		};
	case AUDIO_MUTED:
		return {
			...state,
			localAudioMuted: true
		};
	case AUDIO_UNMUTED:
		return {
			...state,
			localAudioMuted: false
		};
	case ROOM_LEFT:
		return {
			...initialState
		};
	case LOGOUT:
		return {
			...initialState
		};
	default:
		return state;
	}
}
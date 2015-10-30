import {
	STREAM_PUBLISHED,
	STREAM_SUBSCRIBED,
	STREAM_RECEIVED,
	STREAM_UNPUBLISHED,
	VIDEO_MUTED,
	VIDEO_UNMUTED,
	AUDIO_MUTED,
	AUDIO_UNMUTED,
	ROOM_ENTER,
	ROOM_LEFT,
	PARTICIPANT_JOIN,
	PARTICIPANT_LEFT,
	VIDEO_FOCUS
} from '../actions/room';


import { INVITATION_ANSWERED, LOGOUT } from '../actions/reach';

const initialState = null;

export default function room(state = initialState, action = {}) {
	switch (action.type) {
	case ROOM_ENTER:
		return {
			name: action.data.name,
			owner: action.data.owner,
			focus: 'localVideo',
			users: []
		};
	case PARTICIPANT_JOIN:
		return {
			...state,
			users:
				state.users.find(u => u.name === action.data) ?
					[...state.users] :
					[
						...state.users,
						{ name: action.data }
					]
		};
	case PARTICIPANT_LEFT:
		return {
			...state,
			users: state.users.filter(u => u.name !== action.data)
		};

	case STREAM_PUBLISHED:
		return {
			...state,
			users:
				state.users.find(u => u.name === action.data.username) ?
					state.users.map((u) => {
						return u.name === action.data.username ?
							Object.assign({}, u, {
								streamId : action.data.streamId,
								subscribed: true
							}) : u;
					}):
					[
						...state.users,
						{
							name: action.data.username,
							subscribed : true,
							streamId: action.data.streamId
						}
					]

			//localStreamId: action.data
		};
	case STREAM_RECEIVED:
		return {
			...state,
			users:
				state.users.find(u => u.name === action.data.username) ?
					state.users.map((u) => {
						return u.name === action.data.username ?
							Object.assign({}, u, {
								streamData : action.data.streamData,
								subscribed : false,
								streamId: action.data.streamId
							}) : u;
					}):
					[
						...state.users,
						{
							name: action.data.username,
							streamData : action.data.streamData,
							subscribed : false,
							streamId: action.data.streamId
						}
					]
		};
	case STREAM_SUBSCRIBED:
		return {
			...state,
			users:
				state.users.map((u) => {
					return u.name === action.data.username ?
						Object.assign({}, u, {
							subscribed : true
						}) : u;
				})
		};
	case STREAM_UNPUBLISHED:
		return {
			...state,
			users:
				state.users.map((u) => {
					return u.streamId === action.data ?
						{ name: u.name } : u;
				})
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
	case VIDEO_FOCUS:
		return {
			...state,
			focus: action.data
		};
	default:
		return state;
	}
}
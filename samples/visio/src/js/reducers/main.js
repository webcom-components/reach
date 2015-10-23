/**
 * test reducer
 */

import {
	ADD_PARTICIPANT,
	UPDATE_PARTICIPANT,
	LOGGED, INVITATION_SENT,
	RECEIVE_INVITATION,
	INVITATION_ANSWERED,
	STREAM_PUBLISHED,
	STREAM_SUBSCRIBED,
	VIDEO_MUTED,
	VIDEO_UNMUTED,
	AUDIO_MUTED,
	AUDIO_UNMUTED
} from '../actions/com';

const initialState = {
	logged: false,
	username: '',
	participants: [],
	invitation: null
}

export default function main(state = initialState, action = {}) {
	switch (action.type) {
	case LOGGED:
		return {
			...state,
			logged: true,
			username: action.data
		};
	case ADD_PARTICIPANT:
		return {
			...state,
			participants: [
				...state.participants,
				{
					username: action.data.username,
					info: action.data.info
				}
			]
		};
	case UPDATE_PARTICIPANT:
		return {
			...state,
			participants: state.participants.map(p => {
				return p.username === action.data.username ?
					Object.assign({}, p, { info: action.data.info }) :
					p;
			})
		};
	case INVITATION_SENT:
		return {
			...state,
			participants: state.participants.map(p => {
				return p.username === action.data ?
					Object.assign({}, p, { invitSent: true }) :
					p;
			})
		};
	case RECEIVE_INVITATION:
		return {
			...state,
			invitation: action.data
		};
	case INVITATION_ANSWERED:
		return {
			...state,
			room: {
				name: action.data.roomname,
				owner: action.data.owner
			},
			invitation: null,
			participants: state.participants.map(p => {
				if (p.invitSent) {
					return Object.assign({}, p, {invitSent: undefined});
				}
				return p;
			})
		};
	case STREAM_PUBLISHED:
		return {
			...state,
			room: {
				...state.room,
				localStreamId: action.data
			}
		};
	case STREAM_SUBSCRIBED:
		return {
			...state,
			room: {
				...state.room,
				remoteStreams: (state.room.remoteStreams || []).push(action.data)
			}
		};
	case VIDEO_MUTED:
		return {
			...state,
			room: {
				...state.room,
				localVideoMuted: true
			}
		};
	case VIDEO_UNMUTED:
		return {
			...state,
			room: {
				...state.room,
				localVideoMuted: false
			}
		};
	case AUDIO_MUTED:
		return {
			...state,
			room: {
				...state.room,
				localAudioMuted: true
			}
		};
	case AUDIO_UNMUTED:
		return {
			...state,
			room: {
				...state.room,
				localAudioMuted: false
			}
		};
	default:
		return state;
	}
}
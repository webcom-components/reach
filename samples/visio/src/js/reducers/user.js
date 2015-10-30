/**
 * test reducer
 */

import {
	LOGGED,
	LOGOUT,
	RECEIVE_INVITATION,
	INVITATION_ANSWERED,
	INVITATION_SENT,
	INVITATION_ARCHIVED
} from '../actions/reach';

const initialState = {
	logged: false,
	username: '',
	invitation: null,
	invitationSent: false
}

export default function main(state = initialState, action = {}) {
	switch (action.type) {
	case LOGGED:
		return {
			...state,
			logged: true,
			username: action.data
		};
	case RECEIVE_INVITATION:
		return {
			...state,
			invitation: action.data
		};
	case INVITATION_ANSWERED:
		return {
			...state,
			invitation: null,
			invitationSent: false
		};
	case INVITATION_SENT:
		return {
			...state,
			invitationSent: true
		};
	case INVITATION_ARCHIVED:
		return {
			...state,
			invitationSent: false
		};
	case LOGOUT:
		return {
			...initialState
		};
	default:
		return state;
	}
}
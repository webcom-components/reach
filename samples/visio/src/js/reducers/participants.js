import {
	LOGOUT,
	ADD_PARTICIPANT,
	UPDATE_PARTICIPANT,
	INVITATION_SENT,
	INVITATION_ANSWERED,
	INVITATION_ARCHIVED
} from '../actions/reach';

const initialState = [];

export default function participants(state = initialState, action = {}) {
	switch (action.type) {
	case ADD_PARTICIPANT:
		return [
			...state,
			{
				username: action.data.username,
				info: action.data.info
			}
		];
	case UPDATE_PARTICIPANT:
		return state.map(p => {
			return p.username === action.data.username ?
				Object.assign({}, p, { info: action.data.info }) :
				p;
		});
	case INVITATION_SENT:
		return state.map(p => {
			return p.username === action.data ?
				Object.assign({}, p, { invitSent: true }) :
				p;
		});
	case INVITATION_ANSWERED:
		return state.map(p => {
			if (p.invitSent) {
				return Object.assign({}, p, {invitSent: undefined});
			}
			return p;
		});
	case INVITATION_ARCHIVED:
		return state.map(p => {
			if (p.invitSent) {
				return Object.assign({}, p, {invitSent: undefined});
			}
			return p;
		});
	case LOGOUT:
		return [
			...initialState
		];
	default:
		return state;
	}
}
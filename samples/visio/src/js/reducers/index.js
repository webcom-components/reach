import { combineReducers } from 'redux';
import user from './user';
import room from './room';
import participants from './participants';
import { reducer as formReducer } from 'redux-form';
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
	user,
	room,
	participants,
	form: formReducer,
	router
});


export default rootReducer;

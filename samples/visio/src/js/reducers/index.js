import { combineReducers } from 'redux';
import mainReducers from './main';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	app: mainReducers,
	form: formReducer
});


export default rootReducer;

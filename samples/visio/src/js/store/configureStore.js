/* global __DEVTOOLS__ */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import { reduxReactRouter } from 'redux-router';
import getRoutes from '../routes';
import history from '../history';

//import { createHistory } from 'history';


const loggerMiddleware = createLogger({
	level: 'info',
	collapsed: true
});


let createStoreWithMiddleware;

if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
	const DevTools = require('../containers/DevTools');

	createStoreWithMiddleware = compose(
		applyMiddleware(thunkMiddleware, promiseMiddleware, loggerMiddleware),
		reduxReactRouter({getRoutes, history}),
		DevTools.instrument()
		//persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
	)(createStore);
} else {
	createStoreWithMiddleware = compose(
		applyMiddleware(
			thunkMiddleware,
			promiseMiddleware),
		reduxReactRouter({getRoutes, history})

	)(createStore);
}


/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}

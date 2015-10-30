/* global __DEVTOOLS__ */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { ReduxRouter } from 'redux-router';
//import DevTools from './DevTools';

const store = configureStore();

export default class Root extends Component {
	static propTypes = {
	};

	static childContextTypes = {
		store: PropTypes.object
	}

	getChildContext() {
		return { store };
	}

	render() {
		function getToolsIfDev() {
			if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
				let DevTools = require('./DevTools');
				return <DevTools />;
			}
		}

		return (
			<Provider store={store} key="provider">
				<div>
					<ReduxRouter />
					{getToolsIfDev()}
				</div>
			</Provider>
		);
	}
}
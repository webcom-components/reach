import React from 'react';
import { Route, Redirect } from 'react-router';
//import App from './containers/App';
import * as containers from './containers';
import AddPopin from './components/AddPopin';

let getState;

const {
	App,
	LoginPage,
	ParticipantPage,
	VisioPage
} = containers;



export default function({dispatch, getState}) {
	function requireAuth(nextState, replaceState) {
		if (nextState.location.action === 'POP') {
			replaceState(null, '/');
		}
	}

	return (
		<Route component={App}>
			<Route path="/participants" component={ParticipantPage} onEnter={requireAuth} />
			<Route path="/visio" component={VisioPage} onEnter={requireAuth} >
				<Route path="add" component={AddPopin} />
 			</Route>
			<Route path="/" component={LoginPage} />
			<Redirect from="*" to="/" />
		</Route>
	);
}

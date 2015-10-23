import React from 'react';
import { Route } from 'react-router';
//import App from './containers/App';
import * as containers from './containers';


const {
	App,
	LoginPage,
	ParticipantPage,
	Visio
} = containers;

export default (
	<Route component={App}>
		<Route path="/participants" component={ParticipantPage} />
		<Route path="/visio" component={Visio} />
		<Route path="/" component={LoginPage} />
	</Route>
);

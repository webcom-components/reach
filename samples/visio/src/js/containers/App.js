import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Invitation from '../components/invitation';
import * as reachActions from '../actions/reach';
import { RoutingContext } from 'react-router';

let ConnectedInvitation = connect(state => {
	return {
		invitation: state.user.invitation,
		username: state.user.username
	};
}, dispatch => {
	return bindActionCreators(reachActions, dispatch);
})(Invitation);

export default class Main extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	render() {
		return (
			<div className='fullScreen'>
				{/* this will render the child routes */}
				{this.props.children}
				<ConnectedInvitation />
			</div>
		);
	}
}

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Invitation from '../components/invitation';
import * as reachActions from '../actions/reach';

let ConnectedInvitation = connect(state => {
	return {
		invitation: state.user.invitation,
		username: state.user.username
	};
}, dispatch => {
	return bindActionCreators(reachActions, dispatch);
})(Invitation);

export default class Main extends Component {
	static propTypes = {
		children: PropTypes.any.isRequired
	}

	static contextTypes = {
		store: PropTypes.object
	}

	render() {
		return (
			<div className='fullScreen'>
				{/* this will render the child routes */}
				{React.cloneElement(this.props.children, this.props)}
				<ConnectedInvitation />
			</div>
		);
	}
}

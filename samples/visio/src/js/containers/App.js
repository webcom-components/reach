import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Invitation from '../components/invitation';
import * as comsdkActions from '../actions/com';

let ConnectedInvitation = connect(state => {
	return {
		invitation: state.app.invitation
	};
}, dispatch => {
	return bindActionCreators(comsdkActions, dispatch);
})(Invitation);

class Main extends Component {
	static propTypes = {
		children: PropTypes.any.isRequired
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

function mapStateToProps(/* state */) {
	return {};
}


export default connect(mapStateToProps)(Main);
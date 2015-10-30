/* global $ */

import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

export default class Invitation extends Component {

	static propTypes = {
		invitation: PropTypes.object,
		username: PropTypes.string
	}

	showModal() {
		const node = $(ReactDom.findDOMNode(this.refs.modal));
		if (this.props.invitation) {
			node.modal();
		} else {
			node.modal('hide');
		}
	}

	componentDidMount() {
		this.showModal();
	}

	componentDidUpdate() {
		this.showModal();
	}

	acceptInvitation() {
		this.props.respondToInvitation(this.props.username, true, this.props.invitation);
	}

	rejectInvitation() {
		this.props.respondToInvitation(this.props.username, false, this.props.invitation, 'don\'t know ...');
	}

	render() {
		let invitName, invit = {}

		if (this.props.invitation) {
			invitName = Object.keys(this.props.invitation)[0];
			invit = this.props.invitation[invitName];
		}

		return (
			<div className="modal fade" ref="modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title">Invitation '{invit.topic}' from {invit.from}</h4>
						</div>
						<div className="modal-body" style={{textAlign:'center'}}>
							<div style={{marginBottom:'1em'}}>
								<button type="button" className="btn btn-primary" onClick={this.acceptInvitation.bind(this)}>Accept</button>
								<button type="button" className="btn btn-default" style={{marginLeft: '1em'}} onClick={this.rejectInvitation.bind(this)}>Decline</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
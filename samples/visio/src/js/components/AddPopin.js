/* global $ */

import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as roomActions from '../actions/room';
import history from '../history';
import { PropTypes as PropTypesRouter} from 'react-router'

export default class AddPopin extends Component {

	static propTypes = {
		username: PropTypes.string,
		participants: PropTypes.array,
		room: PropTypes.object,
		inviteParticipant: PropTypes.func
	}

	showModal() {
		const node = $(ReactDom.findDOMNode(this.refs.modal));
		node.modal();

		$(node).on('hidden.bs.modal', () => {
			history.replaceState(null, '/visio');
		});
	}

	componentDidMount() {
		this.showModal();
	}

	componentDidUpdate() {
		if (!this.hide) {
			this.showModal();
		} else {
			const node = $(ReactDom.findDOMNode(this.refs.modal));
			$(node).modal('hide');
		}
	}

	invite(username) {
		this.props.inviteParticipant(username);
		this.hide = true;
	}

	render() {
		const createParticipant = (p) => {
			return <button type="button"
				className={`list-group-item list-group-item-success`}
				key={`user_${p.username}`}
				onClick={this.invite.bind(this, p.username)}>
				{p.username}
			</button>;
		}

		const renderList = (participants) => {
			const users = this.props.room.users;

			const filtered = participants.filter(p => {
				return !users.find(u => u.name === p.username) && p.info.connectedList;
			});

			let tags;

			if (filtered.length) {
				tags = (
					<div id="partipantsBox">
						<h2>Available participants</h2>
						<div className="list-group" id="participantList" style={{maxHeight:'288px', overflow:'auto'}}>
						{filtered.map(p => createParticipant.bind(this)(p))}
						</div>
					</div>
				);
			}
			else {
				tags = (
					<div id="partipantsBox">
						<h2>No participants available</h2>
					</div>
				);
			}

			return tags;
		}

		return (
			<div className="modal fade" ref="modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title">Invite someone</h4>
						</div>
						<div className="modal-body" style={{textAlign:'center'}}>
							{renderList.bind(this)(this.props.participants)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
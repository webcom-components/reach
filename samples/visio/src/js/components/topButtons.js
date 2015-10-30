import React, { Component, PropTypes } from 'react';
import history from '../history';

export default class TopButtons extends Component {
	static propTypes = {
		username: PropTypes.string.isRequired,
		room: PropTypes.string,
		quitRoom : PropTypes.func.isRequired,
		closeRoom : PropTypes.func.isRequired
	}

	addParticipantToRoom() {
		history.replaceState(null, '/visio/add');
	}

	exit() {
		this.props.quitRoom(
			this.props.username,
			this.props.room);
	}

	close() {
		this.props.closeRoom(
			this.props.username,
			this.props.room);
	}

	render() {
		return (
			<div className='topButtons'>
				<button type='button'
					className='btn btn-default'
					onClick={this.addParticipantToRoom.bind(this)}
					style={{marginRight:'1em'}}>
					<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</button>
				<button type='button'
					className='btn btn-default'
					onClick={this.close.bind(this)}
					style={{marginRight:'1em'}}>
					close room
				</button>
				<button type='button' className='btn btn-default' onClick={this.exit.bind(this)}>
					<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
				</button>
			</div>
		);
	}
}
/* global $ */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as roomActions from '../actions/room';
import * as reachActions from '../actions/reach';
import React, { Component, PropTypes } from 'react';
import history from '../history';
import ReactDom from 'react-dom';
import AddPopin from '../components/AddPopin';
import TopButtons from '../components/topButtons';
import CmdButtons from '../components/cmdButtons';


class Visio extends Component {
	static propTypes = {
		logged: PropTypes.bool,
		username: PropTypes.string.isRequired,
		room: PropTypes.object,
		participants: PropTypes.array.isRequired
	}

	componentDidMount() {
		if (!this.props.room) {
			return;
		}
		this.props.publishStream(
			this.props.username,
			this.props.room.name,
			this.refs.localVideo);

		this.props.listenToStreams(
			this.props.username,
			this.props.room.name);
	}

	removeUnpublishedStreams(videos, users) {
		if (videos.length) {

			const displayedStreams = videos.children().map((i, v) => v.id);
			const currentStreams = new Set(users.map(u => u.streamId));
			if (displayedStreams.length) {
				displayedStreams.toArray().filter(s => !currentStreams.has(s)).forEach(s => {
					if (s) {
						videos.find(`#${s}`).remove();
					}
				});
			}

		}
	}

	addVideoTag(videos, user, streamId) {
		videos.append(`
			<div class='${this.getVideoClass(streamId)}' id='${streamId}'>
				<span class='videoName'>${user.name}</span>
				<video id='video-${streamId}'></video>
			</div>`
		);
		const video = videos.find(`#${streamId}`);
		video.click(() => {
			this.focus(streamId);
		});
	}

	componentDidUpdate() {
		const users = this.props.room.users.filter(u => u.streamData);
		const videos = $(ReactDom.findDOMNode(this.refs.otherVideos));

		this.removeUnpublishedStreams(videos, users);

		// Add or update published streams
		users.forEach(u => {
			const streamId = Object.keys(u.streamData)[0];
			const video = videos.find(`#${streamId}`);
			const videoClass = this.getVideoClass(streamId);

			if (!video.length) {
				this.addVideoTag(videos, u, streamId);
			}
			// otherwise update video tag
			else if (!video.hasClass(videoClass)) {
				video.removeClass().addClass(videoClass);
			}

			const videoTag = videos.find(`#video-${streamId}`)[0];

			if (!u.subscribed) {
				this.props.subscribeStream(
					this.props.username,
					this.props.room.name,
					u.streamData, videoTag);
			}
		}, this);
	}

	inviteParticipant(userToInvite) {
		this.props.sendInvitation(
			this.props.username,
			userToInvite,
			this.props.room.name);
	}

	focus(ref) {
		this.props.focusVideo(ref);
	}

	getVideoClass(ref) {
		if (this.props.room.focus === ref) {
			return ref === 'localVideo' ? 'bigLocalVideo' : 'bigRemoteVideo';
		}

		return ref === 'localVideo' ? 'smallLocalVideo' : 'smallRemoteVideo';
	}

	getOtherVideos() {
		const users = this.props.room.users.filter(u => u.streamData);
		return users.length ?
			<div className='videoContainer' ref='otherVideos'></div> : undefined;
	}

	render() {
		return (
			<div ref='container'>
				{this.props.children &&
				 React.cloneElement(this.props.children, {
					participants: this.props.participants,
					username: this.props.username,
					room: this.props.room,
					inviteParticipant: this.inviteParticipant.bind(this)
				})}
				<TopButtons username={this.props.username}
							room={this.props.room}
							closeRoom={this.props.closeRoom}
							quitRoom={this.props.quitRoom} />
				<CmdButtons username={this.props.username}
							room={this.props.room}
							toggleVideo={this.props.toggleVideo}
							toggleAudio={this.props.toggleAudio} />
				<video className={this.getVideoClass('localVideo')} ref="localVideo" onClick={this.focus.bind(this, 'localVideo')}></video>
				{this.getOtherVideos.bind(this)()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		logged: state.user.logged,
		username: state.user.username,
		room: state.room,
		participants: state.participants
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ ...roomActions, ...reachActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Visio);

/* global $ */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as roomActions from '../actions/room';
import * as reachActions from '../actions/reach';
import React, { Component, PropTypes } from 'react';
import history from '../history';
import ReactDom from 'react-dom';
import { toggleFullscreen } from '../utils';
import AddPopin from '../components/AddPopin';


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

	componentDidUpdate() {
		const users = this.props.room.users.filter(u => u.streamData);
		const videos = $(ReactDom.findDOMNode(this.refs.otherVideos));

		this.removeUnpublishedStreams(videos, users);

		// Add or update published streams
		users.forEach(u => {
			const streamId = Object.keys(u.streamData)[0];
			let video = videos.find(`#${streamId}`);
			const videoClass = this.getVideoClass(streamId);

			if (!video.length) {
				videos.append(`
					<div class='${this.getVideoClass(streamId)}' id='${streamId}'>
						<span class='videoName'>${u.name}</span>
						<video id='video-${streamId}'></video>
					</div>`
				);
				video = videos.find(`#${streamId}`);
				video.click(() => {
					this.focus(streamId);
				});
			}
			else {
				if (!video.hasClass(videoClass)) {
					video.removeClass().addClass(videoClass);
				}
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

	toggleFullScreen() {
		toggleFullscreen();
	}

	toggleAudio() {
		this.props.toggleAudio(
			this.props.username,
			this.props.room
		);
	}

	toggleVideo() {
		this.props.toggleVideo(
			this.props.username,
			this.props.room
		);
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

	addParticipantToRoom() {
		this.props.history.replaceState(null, '/visio/add');
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



	render() {

		function getVolumeClass() {
			return this.props.room.localAudioMuted ? 'glyphicon glyphicon-volume-off' : 'glyphicon glyphicon-volume-up';
		}

		function getVideoStyles() {
			return this.props.room.localVideoMuted ? {color: 'red'} : {} ;
		}

		function getOtherVideos() {
			const users = this.props.room.users.filter(u => u.streamData);

			if (users.length) {
				return (
					<div className='videoContainer' ref='otherVideos'>

					</div>
				);
			}
		}

		return (
			<div ref='container'>

				{this.props.children &&
				 this.props.children.props &&
				 this.props.children.props.children &&
				 React.cloneElement(this.props.children.props.children, {
						participants: this.props.participants,
						username: this.props.username,
					 	room: this.props.room,
					 	inviteParticipant: this.inviteParticipant.bind(this)
				})}
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
				<div className='cmdButtons'>
					<button type='button' className='btn btn-default' onClick={this.toggleVideo.bind(this)}>
						<span className="glyphicon glyphicon-facetime-video" style={getVideoStyles.bind(this)()} aria-hidden='true'></span>
					</button>
					<button type='button' className='btn btn-default' onClick={this.toggleAudio.bind(this)}>
						<span className={getVolumeClass.bind(this)()} aria-hidden='true'></span>
					</button>
					<button type='button' className='btn btn-default' onClick={this.toggleFullScreen.bind(this)}>
						<span className="glyphicon glyphicon-fullscreen" aria-hidden='true'></span>
					</button>

				</div>
				<video className={this.getVideoClass('localVideo')} ref="localVideo" onClick={this.focus.bind(this, 'localVideo')}></video>
				{getOtherVideos.bind(this)()}
			</div>
		);
	}
}
/*
 <video className='fullScreen' ref="largeVideo"></video>
 <video className='smallVideo' ref="smallVideo"></video>
 */
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

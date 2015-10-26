import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as roomActions from '../actions/room';
import React, { Component, PropTypes } from 'react';
import history from '../history';
import ReactDom from 'react-dom';
import { toggleFullscreen } from '../utils';

class Visio extends Component {
	static propTypes = {
		logged: PropTypes.bool,
		username: PropTypes.string.isRequired,
		room: PropTypes.object
	}

	componentWillMount() {
		if (!this.props.logged) {
			history.replaceState(null, '/');
			return;
		}
	}

	componentDidMount() {
		if (!this.props.room) {
			return;
		}

		if (this.props.room.owner === this.props.username) {
			this.props.publishStream(	this.props.username,
										this.props.room.name,
										this.refs.smallVideo);
			this.props.listenToStreams(	this.props.username,
										this.props.room.name,
										this.refs.largeVideo);
		} else {
			this.props.listenToStreams(	this.props.username,
										this.props.room.name,
										this.refs.largeVideo);
			this.props.publishStream(	this.props.username,
										this.props.room.name,
										this.refs.smallVideo);
		}
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



	render() {

		function getVolumeClass() {
			return this.props.room.localAudioMuted ? 'glyphicon glyphicon-volume-off' : 'glyphicon glyphicon-volume-up';
		}

		function getVideoStyles() {
			return this.props.room.localVideoMuted ? {color: 'red'} : {} ;
		}

		return (
			<div>
				<div className='topButtons'>
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
				<video className='fullScreen' ref="largeVideo"></video>
				<video className='smallVideo' ref="smallVideo"></video>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		logged: state.user.logged,
		username: state.user.username,
		room: state.room
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(roomActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Visio);

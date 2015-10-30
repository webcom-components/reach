import React, { Component, PropTypes } from 'react';
import { toggleFullscreen } from '../utils';

export default class CmdButtons extends Component {

	static PropTypes = {
		room: PropTypes.object,
		username: PropTypes.string.isRequired,
		toggleVideo: PropTypes.func.isRequired,
		toggleAudio: PropTypes.func.isRequired
	}

	getVideoStyles() {
		return this.props.room.localVideoMuted ? {color: 'red'} : {} ;
	}

	getVolumeClass() {
		return this.props.room.localAudioMuted ? 'glyphicon glyphicon-volume-off' : 'glyphicon glyphicon-volume-up';
	}

	toggleVideo() {
		this.props.toggleVideo(
			this.props.username,
			this.props.room
		);
	}

	toggleAudio() {
		this.props.toggleAudio(
			this.props.username,
			this.props.room
		);
	}

	toggleFullScreen() {
		toggleFullscreen();
	}

	render() {
		return (
			<div className='cmdButtons'>
				<button type='button' className='btn btn-default' onClick={this.toggleVideo.bind(this)}>
					<span className="glyphicon glyphicon-facetime-video" style={this.getVideoStyles.bind(this)()} aria-hidden='true'></span>
				</button>
				<button type='button' className='btn btn-default' onClick={this.toggleAudio.bind(this)}>
					<span className={this.getVolumeClass.bind(this)()} aria-hidden='true'></span>
				</button>
				<button type='button' className='btn btn-default' onClick={this.toggleFullScreen.bind(this)}>
					<span className="glyphicon glyphicon-fullscreen" aria-hidden='true'></span>
				</button>

			</div>
		);
	}
}
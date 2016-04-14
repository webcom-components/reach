import StreamTypes from '../definitions/StreamTypes';

/**
 * A published Stream
 * @protected
 */
export default class Stream {
	constructor() {
		/**
		 * The muted state
		 * @type {boolean}
		 */
		this.muted = false;
		/**
		 * The MediaStream
		 * @type {MediaStream}
		 */
		this.media = null;
	}

	/**
	 * Mute a track of a Stream
	 * @param {string} track The track to mute. (AUDIO, VIDEO, AUDIO_VIDEO)
	 * @param {boolean} [state=true] true for mute & false for unmute
	 */
	mute(track, state = true) {
		console.info(state ? 'mute' : 'unmute', this, track, state);
	}

	/**
	 * Unmute a track of a Stream
	 * @param {string} track The track to mute. (audio, video)
	 */
	unmute(type) {
		this.mute(type, false);
	}

	/**
	 * Mute audio of a Stream
	 * @param {boolean} [state=true] true for mute & false for unmute
	 */
	muteAudio(state = true) {
		this.mute(StreamTypes.AUDIO, state);
	}

	/**
	 * Unmute audio
	 */
	unmuteAudio() {
		this.muteAudio(false);
	}

	/**
	 * Mute video
	 * @param {boolean} [state=true] true for mute & false for unmute
	 */
	muteVideo(state = true) {
		this.mute(StreamTypes.VIDEO, state);
	}

	/**
	 * Unmute video
	 */
	unmuteVideo() {
		this.muteVideo(false);
	}

	/**
	 * Mute audio & video
	 * @param {boolean} [state=true] true for mute & false for unmute
	 */
	muteAudioVideo(state = true) {
		this.mute(StreamTypes.AUDIO_VIDEO, state);
	}

	/**
	 * Unmute audio & video
	 */
	unmuteAudioVideo() {
		this.muteVideo(false);
	}
}

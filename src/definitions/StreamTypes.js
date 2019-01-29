/**
 * The available stream types
 * @typedef {Object} StreamTypes
 * @property {string} AUDIO='audio' - Audio communication service
 * @property {string} VIDEO='video' - Video communication service
 * @property {string} AUDIO_VIDEO='audio-video' - Audio and video communication service
 * @property {string} SCREEN_SHARING='screen-sharing' - Screen-sharing communication service
 */

/**
 * Audio communication service
 * @ignore
 * @type {string}
 */
export const AUDIO = 'audio';
/**
 * Video communication service
 * @ignore
 * @type {string}
 */
export const VIDEO = 'video';
/**
 * Audio and video communication service
 * @ignore
 * @type {string}
 */
export const AUDIO_VIDEO = 'audio-video';
/**
 * Screen-sharing service
 * @ignore
 * @type {string}
 */
export const SCREEN_SHARING = 'screen-sharing';

export default {
  AUDIO, VIDEO, AUDIO_VIDEO, SCREEN_SHARING
};

/**
 * The available stream types
 * @typedef {Object} StreamTypes
 * @property {string} AUDIO='audio' - Audio communication service
 * @property {string} VIDEO='video' - Video communication service
 * @property {string} AUDIO_VIDEO='audio-video' - Audio and video communication service
 * @property {string} CHAT='chat' - Chat communication service
 * @property {string} SCREEN_SHARING='screen-sharing' - Screen-sharing communication service
 * @property {string} CALL='call' - Call communication service
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
  * Chat communication service
  * @ignore
  * @type {string}
  */
 export const CHAT = 'chat';
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
 /**
  * Call communication service
  * @ignore
  * @type {string}
  */
 export const CALL = 'call';

 export default {AUDIO, VIDEO, CHAT, AUDIO_VIDEO, SCREEN_SHARING, CALL};

/**
 * communicationQuality presets to use for
 * @typedef {Object} CommunicationQuality/bitrate
 * @property {RegExp} BAD video bitrate: 256; audio bitrate: 16
 * @property {RegExp} LOW video bitrate: 512; audio bitrate: 32
 * @property {RegExp} HIGH video bitrate: 2048; audio bitrate: 128
 */
export const bitrate = {
  BAD: { video: 256, audio: 16 },
  LOW: { video: 512, audio: 32 },
  HIGH: { video: 2042, audio: 128 }
};

export default bitrate;

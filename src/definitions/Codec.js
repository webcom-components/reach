/**
 * Video codec presets to use for
 * @typedef {Object} Codec/video
 * @property {RegExp} VP8 VP8 is the only video codec officially supported by WebRTC
 * @property {RegExp} VP9 VP8's successor.
 * @property {RegExp} H264 MPEG-4 part 10. Only Firefox.
 * @property {RegExp} VP10 Suited for UHD video. No support yet
 * @property {RegExp} H265 H.264's successor. No support yet
 */
export const video = {
  VP8: /^vp8/i,
  VP9: /^vp9/i,
  VP10: /^vp10/i,
  H264: /^h264/i,
  H265: /^h265/i
};

/**
 * Audio codec presets to use for
 * @typedef {Object} Codec/audio
 * @property {RegExp} OPUS Opus audio codec {@link http://opus-codec.org/}.
 * Only choice for high-quality audio.
 * @property {RegExp} G722 G.722 audio codec
 * @property {RegExp} G711 G.711 audio codec
 * @property {RegExp} ISAC iSAC audio codec. Good for voice data,
 * but not suitable for high-quality audio streams.
 * @property {RegExp} ISAC_16 iSAC audio codec (16kHz)
 * @property {RegExp} ISAC_32 iSAC audio codec (32kHz)
 * @property {RegExp} ILBC iLBC audio codec. For bad channels & low bandwidth.
 * @property {RegExp} ILBC iLBC audio codec. For bad channels & low bandwidth.
 */
export const audio = {
  OPUS: /^opus/i,
  G722: /^g722/i,
  G711: /^g711/i,
  ISAC: /^isac/i,
  ISAC_16: /^isac\/16000/i,
  ISAC_32: /^isac\/32000/i,
  LSAC: /^lsac/i
};

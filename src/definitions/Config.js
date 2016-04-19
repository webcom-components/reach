import MediaConstraints from './MediaConstraints';
/**
 * Reach config object
 * @typedef {Object} Config
 * @property {string|Element} [localStreamElement] - The id/element dom element that will hold the local video/audio stream
 * @property {string|Element} [remoteStreamElement] - The id/element dom element that will hold the remote video/audio stream
 * @property {boolean} [autoRequestMedia=true] - Immediately ask for camera access
 * @property {MediaConstraints} [mediaConstraints] - The default media constraints. These can be overriden when subscribing to a stream.
 * @property {ICEServer[]} [iceServers] - List of TURN/STUN servers to use for ICE. This list will be merged with the ICE servers declared in the namespace (**_/ice**).
 */
export default {
	autoRequestMedia: true,
	localStreamElement: null,
	remoteStreamElement: null,
	constraints: MediaConstraints,
	logLevel: 'ERROR'
};

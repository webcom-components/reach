/*eslint max-params: [2, 5], max-len: [0, 120] */
import * as Log from './Log';
import Reach from '../../Reach';

/**
 * Video resolution presets
 * @access private
 * @type {{UHD: {w: number, h: number, min: string}, FHD: {w: number, h: number, min: string, max: string}, HD: {w: number, h: number, min: string, max: string}, SVGA: {w: number, h: number, min: string, max: string}, SD: {w: number, h: number, min: string, max: string}, VGA: {w: number, h: number, max: string}}}
 */
const presets = {
	UHD: {w: 3840, h: 2160, min: 'HD'},
	FHD: {w: 1920, h: 1080, min: 'HD', max: 'UHD'},
	HD: {w: 1280, h: 720, min: 'SD', max: 'FHD'},
	SVGA: {w: 800, h: 600, min: 'VGA', max: 'HD'},
	SD: {w: 720, h: 576, min: 'VGA', max: 'HD'},
	VGA: {w: 640, h: 480, max: 'SVGA'}
};

/**
 * Assign deviceId to constraint
 * @param constraint
 * @param deviceId
 * @returns {*}
 */
const _assignDevice = (constraint, deviceId) => {
	if(constraint && deviceId) {
		return Object.assign(
			/^((user)|(environment))$/i.test(deviceId) ? {facingMode: deviceId} : {deviceId},
			constraint === true ? {} : constraint);
	}
	return constraint;
};

/**
 * Helpers for MediaDevices and MediaStreamConstraints.
 */
export default class Media {
	/**
	 * facingMode values to use with constraints
	 * @returns {{USER: string, ENVIRONMENT: string}}
	 */
	static get facingMode() {
		return {
			USER: 'user',
			ENVIRONMENT: 'environment'
		};
	}

	/**
	 * Helpers to create a MediaStreamConstraints configuration object
	 * @param {boolean|MediaTrackConstraints|string} [videoConstraints='HD'] a boolean, a video constraints object or a preset id (UHD, FHD, HD, SVGA, SD, VGA)
	 * @param {boolean|MediaTrackConstraints} [audioConstraints=true] a boolean or an audio constraints object
	 * @param {string} [type=ideal] type of constraints for video when using a preset (exact,min,max or ideal)
	 * @param {string|object} [videoDeviceId] video input device id or facingMode
	 * @param {string|object} [audioDeviceId] audio input device id
	 * @returns {object}
	 * @throws {Error}
	 *
	 * @example <caption>HD AudioVideo with default devices</caption>
	 * let myConstraints = Reach.media.constraints();
	 * console.log(myConstraints);
	 *
	 * @example <caption>Full HD Video without audio using default devices</caption>
	 * let myConstraints = Reach.media.constraints('FHD', false, 'exact');
	 * console.log(myConstraints);
	 */
	static constraints (videoConstraints = 'HD', audioConstraints = true, type = 'ideal', videoDeviceId, audioDeviceId) {
		let video = videoConstraints;
		if (typeof videoConstraints === 'string'){
			if(presets[videoConstraints.toUpperCase()]) {
				const
					preset = presets[videoConstraints.toUpperCase()],
					dimConstraint = (dim) => {
						if(/^(min|max|exact)$/.test(type)) {
							const r = {};
							r[type] = preset[dim];
							return r;
						}
						return {
							min: preset.min ? presets[preset.min][dim] : preset[dim],
							ideal: preset[dim],
							max: preset.max ? presets[preset.max][dim] : preset[dim]
						};
					};
				video = {width: dimConstraint('w'), height: dimConstraint('h')};
			} else {
				throw new Error('Unknown Video Resolution preset (UHD, FHD, HD, SVGA, SD, VGA)');
			}
		}
		video = _assignDevice(video, videoDeviceId);

		const audio = _assignDevice(audioConstraints, audioDeviceId);

		Log.d('Media#constraints', {video, audio});
		return {video, audio};
	}

	/**
	 * Init stream display node depending on stream type
	 * @param {MediaStream} mediaStream The MediaStream to display
	 * @param {Element} container Container node for streams
	 * @param {Element} previous Previous node for the stream
	 * @param {number} [volume=.7] the default volume
	 * @return {Element}
	 */
	static attachStream(mediaStream, container, previous, volume = .7) {
		let tagName = '';
		if(mediaStream.getVideoTracks().length > 0) {
			tagName = 'video';
		} else if(mediaStream.getAudioTracks().length > 0) {
			tagName = 'audio';
		}
		Log.d('Media#attachStream', mediaStream, tagName);
		if (tagName.length > 0) {
			let _node = previous;
			if (!_node || _node.tagName.toLowerCase() !== tagName) {
				_node = document.createElement(tagName);
				_node.autoplay = true;
				// set these attributes in order to launch the video on IOS
				if (Reach.browser.browser === 'safari') {
					_node.setAttribute('playsinline',true);
					// _node.setAttribute('muted',true);
				} else {
					//_node.setAttribute('type','video/mp4');
				}
				_node.style.borderRadius = '1px';
			}
			if (container) {
				if (previous && previous !== _node) {
					container.replaceChild(_node, previous);
				} else if (!previous) {
					container.appendChild(_node);
				}
			}
			_node.srcObject = mediaStream;
			_node.addEventListener('play', (event) => {
				Log.d(`video.onplay = ${event.type}`);
				_node.srcObject.onaddtrack = (track) => {
					Log.d(`[Local] listener: video.onaddtrack = ${track.label}`); // eslint-disable-line
				};
				_node.srcObject.onremovetrack = (track) => {
					Log.d(`[Local] listener: video.onremovetrack = ${track.label}`); // eslint-disable-line
				};
				_node.srcObject.oninactive = () => {
					Log.d(`[Local] listener: video.oninactive`); // eslint-disable-line
				};
				_node.srcObject.onplaying = (event) => {
          console.debug(`[Local] listener: video.onplaying = ${event.type}`); // eslint-disable-line
				};
				_node.srcObject.onstalled = (event) => {
          console.debug(`[Local] listener: video.onstalled = ${event.type}`); // eslint-disable-line
				};
				_node.srcObject.onsuspend = (event) => {
					console.debug(`[Local] listener: video.onsuspend = ${event.type}`); // eslint-disable-line
					console.debug(event); // eslint-disable-line
					console.debug('on passe là');
				};
			});
			_node.onsuspend = (event) => {
				console.debug(`[Local] listener: video.onsuspend = ${event}`); // eslint-disable-line
				console.debug(event); // eslint-disable-line
				/* console.debug('on est ici');
				const tagmuted = _node.muted;
				_node.setAttribute('muted',true);
				let autoPlayAllowed = true;
				const promise = _node.play();
				if (promise instanceof Promise) {
					promise.then(function(status) {
						console.dir(promise);
					});
					promise.catch(function(error) {
						console.error(error.message);
						if (error.name === 'NotAllowedError') {
							autoPlayAllowed = false;
						} else {
							// Don't throw the error so that we get to the then
							// or throw it but set the autoPlayAllowed to true in here
						}
					}).then(function() {
						if (autoPlayAllowed) {
							console.log('autoplay allowed')
						} else {
							console.log('autoplay NOT allowed')
						}
					});
				} else {
					console.log('autoplay unknown')
				} */
			};
			_node.addEventListener('loadeddata', () => Log.d('on a chargé les données'));
			_node.addEventListener('error', (error) => Log.d(`on a une erreur ${error}`));
			// _node.setAttribute('controls',true);
			// disabled doesn't seem to be needed
			// _node.disabled = false;
			_node.volume = volume;
			return _node;
		}
		return previous;
	}

	/**
	 * List available input devices
	 * @return {Promise<{audioinput: MediaDeviceInfo[], videoinput: MediaDeviceInfo[]}>}
	 *
	 * @example
	 * Reach.media.devices().then(devices => {
	 *  // Video cameras
	 *  console.log(devices.videoinput);
	 *  // Audio mics
	 *  console.log(devices.audioinput);
	 * });
	 */
	static devices () {
		return navigator.mediaDevices.enumerateDevices()
			.then(devices => {
				const r = {};
				devices.forEach(device => {
					if (!r[device.kind]) {
						r[device.kind] = [];
					}
					r[device.kind].push(device);
				});
				Log.d('Media#devices', r);
				return r;
			})
			.catch(Log.r('Media#devices'));
	}
}

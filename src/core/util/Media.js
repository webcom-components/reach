/*eslint max-params: [2, 5], max-len: [0, 120] */
import * as Log from './Log';

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
 * Helpers for MediaDevices and MediaStreamConstraints.
 */
export default class Media {
	/**
	 * Helpers to create a MediaStreamConstraints configuration object
	 * @param {boolean|MediaTrackConstraints|string} [videoConstraints='HD'] a boolean, a video constraints object or a preset id (UHD, FHD, HD, SVGA, SD, VGA)
	 * @param {boolean|MediaTrackConstraints} [audioConstraints=true] a boolean or an audio constraints object
	 * @param {string} [type=ideal] type of constraints for video when using a preset (exact,min,max or ideal)
	 * @param {string|object} [videoDeviceId] video input device id
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
		if(video && videoDeviceId) {
			video = Object.assign({deviceId: videoDeviceId}, video === true ? {} : video);
		}

		let audio = audioConstraints;
		if(audio && audioDeviceId) {
			audio = Object.assign({deviceId: audioDeviceId}, audio === true ? {} : audio);
		}
		Log.d('Media~constraints', {video, audio});
		return {video, audio};
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
				Log.d('Media~devices', r);
				return r;
			})
			.catch(Log.r);
	}
}

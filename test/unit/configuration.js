import Reach from '../../src/Reach';
import media from '../../src/core/util/Media';
import * as log from '../util/logger';
import Webcom from 'webcom/webcom';

describe('Entry point /', () => {
	describe('Static /', () => {
		it('Should expose possible stream types', () => {
			expect(Reach.types).not.toBeNull();
			expect(Reach.types.AUDIO_VIDEO).toEqual('audio-video');
		});

		it('Should expose subscribable events', () => {
			expect(Reach.events).not.toBeNull();
			expect(Reach.events.reach.USER_ADDED).toEqual('USER_ADDED');
		});

		it('Should expose browser\'s infos', () => {
			expect(Reach.browser).not.toBeNull();
			expect(Reach.browser.browser).not.toBeNull();
		});

		it('Should expose sdk & schema version', () => {
			expect(Reach.version).not.toBeNull();
			expect(Reach.version.sdk).toMatch(/^v?\d+\.\d+\.\d+$/);
			expect(Reach.version.schema).toMatch(/^(draft-\d+)|(legacy)$/);
		});

		it('Should expose Codec presets', () => {
			expect(Reach.codecs).not.toBeNull();
			expect(Reach.codecs.audio.OPUS.test('opus')).toBeTruthy();
			expect(Reach.codecs.video.VP9.test('vp9')).toBeTruthy();
		});

		it('Should expose media constraints utility fuction', () => {
			expect(Reach.media.constraints).not.toBeNull();
			const constraints = Reach.media.constraints();
			expect(constraints).toEqual(
				jasmine.objectContaining({
					video:{width:{min:720,ideal:1280,max:1920},height:{min:576,ideal:720,max:1080}},
					audio:true
				})
			);
		});

		it('Should expose utility function to list devices', done => {
			expect(Reach.media.devices).not.toBeNull();
			Reach.media.devices()
				.then(devices => {
					expect(devices).toBeDefined();
					['audio', 'video'].every(type => {
						return ['input', 'output'].every(io => {
							if(devices[`${type}${io}`]){
								expect(devices[`${type}${io}`].length).toBeDefined();
								return devices[`${type}${io}`].every(device => {
									expect(device.kind).toBe(`${type}${io}`);
									expect(device.deviceId).toBeDefined();
									expect(device.deviceId).toMatch(/^[a-z0-9\+=\-_\/]+$/i);
									return true;
								});
							}
							return true;
						});
					});
					done();
				})
				.catch(e => {
					log.e(e);
					done.fail(e.message);
				});
		});
	});

	describe('Configuration / ', () => {
		let ref;
		afterEach(() => {
			ref && ref.config.reset();
		});

		it('Should use the url specified for the base', () => {
			ref = new Reach(global.env.namespaceUrl);
			expect(ref.base.toString()).toBe(global.env.namespaceUrl);
		});

		it('Should use the specified Webcom reference for the base', () => {
			ref = new Reach(new Webcom(`${global.env.namespaceUrl}/ref`));
			expect(ref.base.toString()).toBe(`${global.env.namespaceUrl}/ref`);
		});

		it('Should use default configuration if no configuration is specified', () => {
			// Only default
			ref = new Reach(global.env.namespaceUrl);
			expect(ref.config).not.toBeNull();
			expect(ref.config.constraints).toEqual(jasmine.objectContaining(media.constraints()));
		});

		it('Should fix configuration with default values for missing properties', () => {
			// config + default values for missing props
			ref = new Reach(global.env.namespaceUrl, {
				constraints: media.constraints()
			});
			expect(ref.config).not.toBeNull();
			expect(ref.config.logLevel).toEqual('ERROR');
		});

		it('Should retrieve ICE server configuration', done => {
			ref = new Reach(global.env.namespaceUrl);
			expect(ref.config).not.toBeNull();

			let nbCalls = 0;
			const maxCalls = 100, callTimeout = 50; // Max 5s
			const check = () => {
				if(ref.config.iceServers.length > 1) {
					expect(ref.config.iceServers.length).toBeCloseTo(3, 1);
					expect(ref.config.iceServers[0]).toEqual(jasmine.objectContaining({
						urls: 'turns:turn1.webcom.orange.com:443',
						username: 'admin',
						credential: 'webcom1234'
					}));
					log.d(`ICEServers retrieved in ${nbCalls * callTimeout} ms`);
					done();
				} else if (++nbCalls === maxCalls) {
					done(new Error(`Not able to retrieve ICEServer in ${nbCalls * callTimeout} ms`));
				} else {
					setTimeout(check, callTimeout);
				}
			};
			check();
		});

		it('Should be able to modify logLevel', () => {
			ref = new Reach(global.env.namespaceUrl);
			expect(ref.config).not.toBeNull();
			expect(ref.config.logLevel).toBe('ERROR');
			ref.config.logLevel = 'INFO';
			expect(ref.config.logLevel).toBe('INFO');
		});

		it('Should be not be able to set an unknown logLevel value', () => {
			ref = new Reach(global.env.namespaceUrl);
			expect(ref.config).not.toBeNull();
			expect(ref.config.logLevel).toBe('ERROR');
			expect(() => {
				ref.config.logLevel = 'FAKE';
			}).toThrow(new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)'));
		});
	});
});

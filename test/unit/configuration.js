import Reach from '../../src/Reach';
import media from '../../src/core/util/Media';
import * as log from '../util/logger';


export default () => {
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
						fail(e.message);
						done(e);
					});
			});
		});

		describe('Configuration / ', () => {
			it('Should use the url specified for the base', () => {
				const sdk = new Reach(config.namespaceUrl);
				expect(sdk.base.toString()).toBe(config.namespaceUrl);
				sdk.config.reset();
			});

			it('Should use the specified Webcom reference for the base', () => {
				const sdk = new Reach(new Webcom(`${config.namespaceUrl}/ref`));
				expect(sdk.base.toString()).toBe(`${config.namespaceUrl}/ref`);
				sdk.config.reset();
			});

			it('Should use the default url if no url is specified', () => {
				const sdk = new Reach();
				expect(sdk.base.toString()).toBe('https://io.datasync.orange.com/base/reach');
				sdk.config.reset();
			});

			it('Should use default configuration if no configuration is specified', () => {
				// Only default
				const sdk = new Reach(config.namespaceUrl);
				expect(sdk.config).not.toBeNull();
				expect(sdk.config.constraints).toEqual(jasmine.objectContaining(media.constraints()));
				sdk.config.reset();
			});

			it('Should fix configuration with default values for missing properties', () => {
				// config + default values for missing props
				const sdk = new Reach(config.namespaceUrl, {
					constraints: media.constraints()
				});
				expect(sdk.config).not.toBeNull();
				expect(sdk.config.logLevel).toEqual('ERROR');
			});

			it('Should retrieve ICE server configuration', done => {
				const sdk = new Reach(config.namespaceUrl);
				expect(sdk.config).not.toBeNull();

				let nbCalls = 0;
				const maxCalls = 100, callTimeout = 50; // Max 5s
				const check = () => {
					if(sdk.config.iceServers.length > 1) {
						expect(sdk.config.iceServers.length).toBeCloseTo(3, 1);
						expect(sdk.config.iceServers[0]).toEqual(jasmine.objectContaining({
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

			it('Should be able to modify logLevel', done => {
				const sdk = new Reach(config.namespaceUrl);
				expect(sdk.config).not.toBeNull();
				expect(sdk.config.logLevel).toBe('ERROR');

				const setLogLevel = level => {
					sdk.config.logLevel = level;
				};
				setLogLevel('INFO');
				expect(sdk.config.logLevel).toBe('INFO');

				try {
					expect(setLogLevel('FAKE')).toThrow(new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)'));
				} catch (e) {
					log.d(e);
				}
				done();
			});
		});
	});
};

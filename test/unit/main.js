import Reach from '../../src/Reach';
import ReachConfig from '../../src/definitions/ReachConfig';

// import {createNamespace, removeNamespace} from '../util/provisioning';

describe('Reach Tests', () => {
	let ref;

	beforeAll((done) => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
		// if (config.createNS) {
		// 	createNamespace(config.namespace).then(() => {
		// 		ref = new Webcom(config.namespaceUrl);
		// 		done();
		// 	});
		// } else {
		// 	ref = new Webcom(config.namespaceUrl);
		// 	ref.set(null, () => {
		// 		ref.once('value', done);
		// 	});
		// }
		done();
	});

	beforeEach((done) => {
		// ref.set(null, () => {
		// 	ref.once('value', done);
		// });
		done();
	});

	afterAll((done) => {
		// if (config.cleanUpNS) {
		// 	removeNamespace(config.namespace).then(() => {
		// 		ref.goOffline();
		// 		done();
		// 	});
		// } else {
		// 	ref.goOffline();
		// 	done();
		// }
		done();
	});

	it('Should expose possible stream types as static members', () => {
		expect(Reach.t).not.toBeNull();
		expect(Reach.t.AUDIO_VIDEO).toEqual('audio-video');
	});

	it('Should expose sdk & schema version as static members', () => {
		expect(Reach.v).not.toBeNull();
		expect(Reach.v.sdk).toMatch(/^v?\d+\.\d+\.\d+$/);
		expect(Reach.v.schema).toMatch(/^(draft-\d+)|(legacy)$/);
	});

	it('Should use default configuration if no configuration is specified', () => {
		// Only default
		const sdk = new Reach(config.namespaceUrl);
		expect(sdk.config).not.toBeNull();
		expect(sdk.config).toEqual(ReachConfig);
	});

	it('Should fix configuration with default values for missing properties', () => {
		// config + default values for missing props
		const sdk = new Reach(config.namespaceUrl, {autoRequestMedia: false});
		expect(sdk.config).not.toBeNull();
		expect(sdk.config.autoRequestMedia).toBeFalsy();
	});

	xit('should Validate room data schema', (done) => {
		const sdk = new Reach(config.namespaceUrl);
		sdk.Room('Paul', 'room1');
		ref.once('value', (snap) => {
			const val = snap.val();
			expect(val).toEqual({
				roomsList: {
					room1: {
						participantList: {
							Paul: {
								connected: true,
								wasInsideRoom: true
							}
						}
					}
				}
			});
			done();
		});
	});

	xit('Publish video stream', (done) => {
		const sdk = new Reach(config.namespaceUrl);
		const room = sdk.Room('Paul', 'room1');
		room.publishStream('video',
			document.createElement('div'),
			Reach.actions.ACTION_TYPE_VIDEO,
			(stream) => {
				ref.child('roomsList/room1/publishedMediaList').on('value', (snap) => {
					const val = snap.val();
					if(val) {
						expect(val.video).toBeDefined();
						expect(val.video.actionType).toEqual('video');
						expect(val.video.appInstanceId).toEqual(jasmine.any(String));
						expect(val.video.from).toEqual('Paul');

						room.unPublishStream('video', () => {
							stream.stop();
							done();
						});
					}
				});
			});
	});
});

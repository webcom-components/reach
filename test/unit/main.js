'use strict';

import Reach from '../../src/index';
import {createNamespace, removeNamespace} from '../util/provisioning';

describe('Reach Tests', () => {
	let ref;

	beforeAll((done) => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
		if (config.createNS) {
			createNamespace(config.namespace).then(() => {
				ref = new Webcom(config.namespaceUrl);
				done();
			});
		} else {
			ref = new Webcom(config.namespaceUrl);
			ref.set(null, () => {
				ref.once('value', done);
			});
		}
	});

	beforeEach((done) => {
		ref.set(null, () => {
			ref.once('value', done);
		});
	});

	afterAll((done) => {
		if (config.cleanUpNS) {
			removeNamespace(config.namespace).then(() => {
				ref.goOffline();
				done();
			});
		} else {
			ref.goOffline();
			done();
		}
	});

	it('Should have predefined actions', () => {
		expect(Reach.actions).not.toBeNull();
		expect(Reach.actions.ACTION_TYPE_AUDIO_VIDEO).toEqual('audio-video');
	});

	it('should Validate room data schema', (done) => {
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

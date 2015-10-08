'use strict';

import ComSDK from '../../src/index';
import {createNamespace, removeNamespace} from '../util/provisioning';

describe("ComSDK Tests", () => {
    let ref;

    beforeAll((done) => {
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

    it('Should return SDK version', () => {
        expect(ComSDK.SDK_VERSION).toEqual(jasmine.any(String));
    });

    it('should Validate room data schema', (done) => {
        let sdk = new ComSDK(config.namespaceUrl);
        sdk.Room('Paul', 'room1');
        ref.once('value', (snap) => {
            let val = snap.val();
            expect(val).toEqual({
               roomsList: {
                   room1: {
                       participantList: {
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

    it('Publish video stream', (done) => {
        let sdk = new ComSDK(config.namespaceUrl);
        let room = sdk.Room('Paul', 'room1');
        room.publishStream('video', document.createElement('div'), ComSDK.actions.ACTION_TYPE_VIDEO, (stream) => {
            ref.child('roomsList/room1/publishedMediaList').once('value', (snap) => {
                let val = snap.val().video;
                expect(val).toBeDefined();
                expect(val.actionType).toEqual('video');
                expect(val.appInstanceId).toEqual(jasmine.any(String));
                expect(val.from).toEqual('Paul');

                room.unPublishStream('video', () => {
                    stream.stop();
                    done();
                });
            });
        });
    });
});

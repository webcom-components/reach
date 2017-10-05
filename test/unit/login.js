import Reach from '../../src/Reach';
//import * as datasync from '../../src/core/util/DataSync';
// import * as rules from '../util/rules';
import * as log from '../util/logger';
import * as namespace from '../util/namespace';
import {CONNECTED, NOT_CONNECTED} from '../../src/core/util/constants';
import Device from '../../src/core/Device';
//import Webcom from 'webcom/webcom';

//const uidRegExp = /^[a-z0-9\-:]+$/;

/* const testUser = (done, action, userInfos, ereg = uidRegExp) => {
	action
		.then(user => {
			expect(user.name).toEqual(userInfos.name || userInfos.email);
			expect(user.status).toEqual(CONNECTED);
			expect(user.uid).toMatch(ereg);
			return datasync.get(`users/${user.uid}`);
		})
		.then(snapData => {
			const val = snapData.val();
			expect(val).not.toBeNull();
			expect(val.name).toEqual(userInfos.name || userInfos.email);
			expect(val.lastSeen).toMatch(/^\d+$/);
			return datasync.get(`_/devices/${snapData.name()}`);
		})
		.then(snapData => {
			const devices = snapData.val();
			expect(snapData.numChildren()).toEqual(1);
			const device = devices[Object.keys(devices)[0]];
			expect(device.status).toEqual(CONNECTED);
			expect(device.sdk).not.toBeNull();
		})
		.then(done)
		.catch(e => {
			done.fail(e.message);
		});
};*/

describe('Register & Login /', () => {
	let ref;

	const login = (user, nick) => {
		return ref.login(
			user.email,
			user.password,
			nick
		).then(user => {
			expect(ref.current.uid).toEqual(user.uid);
			return user;
		});
	};

	const logout = user => ref.logout()
		.then(() => {
			expect(ref.current).toBeNull();
			return namespace.get(`users/${user.uid}/status`);
		})
		.then(snap => snap ? snap.val() : null);

	beforeEach(done => {
		ref = new Reach(global.env.base);
		done();
	});

	afterEach(done => {
		ref.logout().then(done, done);
	});

	describe('Authenticated Users /', () => {

		/* it('Should be able to register a new user', done => {
			const newUser = {
				email: `register.user.${Date.now()}@reach.io`,
				password: 'password'
			};
			global.env.createdUsers.push(newUser);
			testUser(
				done,
				ref.register(
					newUser.email,
					newUser.password
				),
				newUser
			);
		});

		it('Should be able to login as an existing user', done => {
			testUser(
				done,
				login(global.env.createdUsers[1], 'Homer'),
				Object.assign({name: 'Homer'}, global.env.createdUsers[0])
			);
		}); */

		it('Should be able to logout', done => {
			login(global.env.createdUsers[1], 'Homer')
			.then(() => logout(global.env.createdUsers[1]))
			.then(status => {
				if (status) {
					expect(status).toBe(NOT_CONNECTED);
					done();
				} else {
					done.fail('Cannot get User\'s status');
				}
			})
			.catch(e => {
				log.e(e);
				done(e);
			});
		});

		/* it('Should be able to resume a previous session', done => {
			global.env.base.authWithPassword(Object.assign({rememberMe: true}, global.env.createdUsers[3])).then(() => {
				global.env.base.unauth();
				// Reset repos to force new persistent connection to be established
				Webcom.Context.getInstance().repos_ = {};
				testUser(
					done,
					ref.resume(),
					Object.assign({name: global.env.createdUsers[3].email}, global.env.createdUsers[3])
				);
			});
		});*/

		it('Should be CONNECTED after logout if at least one device is connected', done => {
			login(global.env.createdUsers[0], 'Homer')
			.then(user => {
				return user.devices();
			})
			.then(devices => {
				expect(devices).toBeAnArrayOf(Device);
				expect(devices.length).toBe(3);
				expect(devices.filter(device => device.status === CONNECTED).length).toBe(3);
			})
			.then(() => logout(global.env.createdUsers[0]))
			.then(status => {
				if (status) {
					expect(status).toBe(CONNECTED);
					done();
				} else {
					done.fail('Cannot get User\'s status');
				}
			})
			.catch(e => {
				log.e(e);
				done(e);
			});
		});
	});

	describe('Anonymous Users /', () => {
		const anon = (nick) => {
			return ref
				.anonymous(nick)
				.then(user => {
					expect(ref.current.uid).toEqual(user.uid);
					return user;
				});
		};

		/* it('Should be able to login as an anonymous user', done => {
			testUser(
				done,
				anon('Homer'),
				{name: 'Homer'},
				/^anonymous:[0-9a-z\-]+$/
			);
		}); */

		it('Should be able to logout', done => {
			let currentUid = null;
			anon('Homer')
				.then(user => {currentUid = user.uid;})
				.then(() => ref.logout())
				.then(() => {
					expect(ref.current).toBeNull();
				})
				.then(() => namespace.get(`users/${currentUid}`))
				.then(user => {
					expect(user.val()).toBeNull();
				})
				.then(() => namespace.get(`_/devices/${currentUid}`))
				.then(devices => {
					expect(devices.hasChildren()).toBeFalsy();
					expect(devices.val()).toBeNull();
				})
				.then(() => namespace.get(`_/invites/${currentUid}`))
				.then(invites => {
					expect(invites.hasChildren()).toBeFalsy();
					expect(invites.val()).toBeNull();
				})
				.then(done)
				.catch(e => {
					log.e(e);
					done(e);
				});
		});
	});
});

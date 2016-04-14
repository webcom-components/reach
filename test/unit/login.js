import Reach from '../../src/Reach';
import {get} from '../../src/util/datasync';
import * as namespace from '../util/namespace';
import * as rules from '../util/rules';
import {CONNECTED, NOT_CONNECTED} from '../../src/util/constants';

const uidRegExp = /^[a-z0-9\-]+$/;

const testUser = (done, action, userInfos, ereg = uidRegExp) => {
	action
		.then(user => {
			expect(user.name).toEqual(userInfos.name || userInfos.email);
			expect(user.status).toEqual(CONNECTED);
			expect(user.uid).toMatch(ereg);
			return get(`users/${user.uid}`);
		})
		.then(snapData => {
			const val = snapData.val();
			expect(val.name).toEqual(userInfos.name || userInfos.email);
			expect(val.lastSeen).toMatch(/^\d+$/);
			expect(parseInt(val.lastSeen, 10)).toBeLessThan(Date.now());
			expect(parseInt(val.lastSeen, 10)).toBeGreaterThan(Date.now() - 10 * 1000);
			return get(`_/devices/${snapData.name()}`);
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
			expect(e.code).not.toEqual('permission_denied');
			done(e);
		});
};

export default () => {
	const createdUsers = [];

	describe('Authenticated Users', () => {
		const existingUser = {
			email: `new.${Date.now()}@reach.io`,
			password: 'password'
		};

		beforeAll(done => {
			console.info('login#auth#beforeAll');
			config.base.createUser(existingUser.email, existingUser.password)
				.then(auth => {
					if(auth) {
						createdUsers.push(existingUser);
						console.info(`Exisiting user: ${auth.uid} (${existingUser.email})`);
						return namespace.set(`users/${auth.uid}`, {
							status: NOT_CONNECTED,
							name: existingUser.email,
							lastSeen: Date.now()
						});
					}
				})
				.then(() => {
					config.base.logout();
					Webcom.INTERNAL.PersistentStorage.remove('session');
					done();
				})
				.catch(e => {
					console.error(e);
					done(e);
				});
		});

		afterAll(done => {
			console.info('login#auth#afterAll');
			Promise.all(createdUsers.map(user => config.base.removeUser(user.email, user.password)))
				.then(() => {
					createdUsers.length = 0;
					done();
				})
				.catch(done);
		});

		it('Should be able to register a new user', done => {
			const newUser = {
				email: `new.${Date.now()}@reach.io`,
				password: 'password'
			};
			createdUsers.push(newUser);

			testUser(
				done,
				(new Reach(config.base)).register(
					newUser.email,
					newUser.password
				),
				newUser
			);
		});

		it('Should be able to login as an existing user', done => {
			testUser(
				done,
				(new Reach(config.base)).login(
					existingUser.email,
					existingUser.password,
					'Homer'
				),
				Object.assign({name: 'Homer'}, existingUser)
			);
		});
	});

	describe('Anonymous Users', () => {
		beforeAll(done => {
			console.info('login#anon#beforeAll');
			rules.set({'.read': true, '.write': true})
				.then(() => {
					// Reset repos to force new persistent connection to be established
					Webcom.Context.getInstance().repos_ = {};
					done();
				})
				.catch(e => {
					console.error('login#anon#beforeAll', e);
					done(e);
				});
		});

		it('Should be able to login as an anonymous user', done => {
			testUser(
				done,
				(new Reach(config.base)).anonymous('Homer'),
				{name: 'Homer'},
				/^anonymous:\d+$/
			);
		});

		afterAll(done => {
			console.info('login#anon#afterAll');
			rules.set(config.rules)
				.then(() => {
					// Reset repos to force new persistent connection to be established
					Webcom.Context.getInstance().repos_ = {};
					done();
				})
				.catch(e => {
					console.error('login#anon#afterAll', e);
					done(e);
				});
		});
	});
};

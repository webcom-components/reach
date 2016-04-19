import Reach from '../../src/Reach';
import {get} from '../../src/util/datasync';
import * as rules from '../util/rules';
import * as log from '../util/logger';
import {CONNECTED} from '../../src/util/constants';

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
	describe('Register & Login /', () => {
		describe('Authenticated Users /', () => {
			it('Should be able to register a new user', done => {
				const newUser = {
					email: `register.user.${Date.now()}@reach.io`,
					password: 'password'
				};
				config.createdUsers.push(newUser);
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
						config.createdUsers[0].email,
						config.createdUsers[0].password,
						'Homer'
					),
					Object.assign({name: 'Homer'}, config.createdUsers[0])
				);
			});
	
			it('Should be able to logout', done => {
				const ref = new Reach(config.base);
				ref.login(
					config.createdUsers[0].email,
					config.createdUsers[0].password,
					'Homer'
				).then(user => {
					expect(ref.current).toEqual(user);
					return ref.logout();
				}).then(() => {
					expect(ref.current).toBeNull();
					done();
				}).catch(e => {
					log.e(e);
					done(e);
				});
			});
	
			it('Should be able to resume a previous session', done => {
				config.base.authWithPassword(Object.assign({rememberMe: true}, config.createdUsers[0])).then(() => {
					config.base.logout();
					const ref = new Reach(config.base);
					testUser(
						done,
						Promise.resolve(ref.current),
						Object.assign({name: 'Homer'}, config.createdUsers[0])
					);
				});
			});
		});
	
		describe('Anonymous Users /', () => {
			beforeAll(done => {
				log.d('login#anon#beforeAll');
				rules.set({'.read': true, '.write': true})
					.then(() => {
						// Reset repos to force new persistent connection to be established
						Webcom.Context.getInstance().repos_ = {};
						done();
					})
					.catch(e => {
						log.e('login#anon#beforeAll', e);
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
				log.d('login#anon#afterAll');
				rules.set(config.rules)
					.then(done)
					.catch(e => {
						log.e('login#anon#afterAll', e);
						done(e);
					});
			});
		});
	});
};

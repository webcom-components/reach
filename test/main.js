/*global config*/
import Webcom from 'webcom/webcom';
import * as namespace from './util/namespace';
import * as rules from './util/rules';
import * as log from './util/logger';
import data from './data';

const customMatchers = {
	toBePermissionDenied: ()  => ({
		compare: actual => {
			log.d('customMatchers#toBePermissionDenied', actual);
			const result = {
				pass: actual && actual.code && /^permission_denied$/i.test(actual.code)
			};
			result.message = actual.message || `Permission ${result.pass ? 'Denied' : 'Granted'}`;
			return result;
		}
	}),
	toBeAnArrayOf: () => ({
		compare: (actual, expected) => {
			const result = {
				pass: actual && actual instanceof Array && actual.every(i => i instanceof expected)
			};
			result.message = result.pass ?
				'All elements of the array are of the expected type' :
				'Some elements of the array are not of the expected type';
			return result;
		}
	})
};

describe('Reach /', () => {

	beforeAll(done => {
		log.d('main#beforeAll');
		jasmine.addMatchers(customMatchers);
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 30 * 1000;
		(config.namespace ? Promise.resolve() : namespace.create())
			.then(() => {
				log.d('Try to connect to ', config.namespaceUrl);
				config.base = new Webcom(config.namespaceUrl);
				return rules.get();
			})
			.then(r => {
				config.rules = r;
				return rules.set(config.rules);
			})
			.then(() => {
				config.createdUsers = [];
				const ts = Date.now();
				const tmp = Array(5);
				for(let i=0,l=tmp.length;i<l;i++) {tmp[i] = i;}
				return Promise.all(tmp.map(i => {
					const user = {
						email: `new.user.${i}@${ts}.reach.io`,
						password: 'password'
					};
					return config.base.createUser(user.email, user.password)
						.then(auth => {
							if(auth) {
								user.uid = auth.uid;
								config.createdUsers.push(user);
								return user;
							}
						});
				}));
			})
			.then(() => {
				log.g('info', `Created ${config.createdUsers.length} users`, config.createdUsers.map(JSON.stringify));
			})
			.then(() => {
				const d = data(config.createdUsers, Date.now());
				log.g('info', 'Populate namespace', [d]);
				return namespace.set('/', d);
			})
			.then(() => {
				config.base.logout();
				localStorage.clear();
				// Webcom.INTERNAL.PersistentStorage.remove('session');
				// Reset repos to force new persistent connection to be established
				// Webcom.Context.getInstance().repos_ = {};
				done();
			})
			.catch(e => {
				log.e('main#beforeAll', e);
				fail(e.message);
				done(e);
			});
	});

	beforeEach(() => {
		log.d('main#beforeEach');
		expect(config.base).toBeDefined('Missing base. Server or namespace pb.');
		// Reset repos to force new persistent connection to be established
		// Webcom.Context.getInstance().repos_ = {};
		Webcom.INTERNAL.PersistentStorage.remove('session');
	});

	afterAll(done => {
		log.d('main#afterAll');
		// Force logout
		config.base && config.base.logout();
		Promise.all(config.createdUsers.map(user => config.base.removeUser(user.email, user.password)))
			.then(() => {
				config.createdUsers.length = 0;
				return config.namespace ? Promise.resolve() : namespace.remove();
			})
			.then(() => {
				localStorage.clear();
			})
			.then(() => done())
			.catch(e => {
				log.e(e);
				done(e);
			});
	});

	// Load test suites
	const suites = global.suites;
	suites.keys().forEach(suite => {
		suites(suite).default();
	});
});

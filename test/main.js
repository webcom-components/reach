import Webcom from 'webcom/webcom';
import * as namespace from './util/namespace';
import * as rules from './util/rules';
import * as log from './util/logger';
import * as config from './util/config';
import data from './data';

global.env = {};

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
		(config.namespace ? Promise.resolve(config.namespace) : namespace.create())
			.then(ns => {
				global.env.namespace = ns;
				global.env.namespaceUrl = config.namespaceUrl(global.env.namespace);
			})
			.then(() => rules.get())
			.then(r => {
				global.env.rules = r;
				return rules.set(global.env.rules);
			})
			.then(() => {
				log.d('Try to connect to ', global.env.namespaceUrl);
				global.env.base = new Webcom(global.env.namespaceUrl);
			})
			.then(() => {
				global.env.createdUsers = [];
				const ts = Date.now();
				const tmp = Array(5);
				for(let i=0,l=tmp.length;i<l;i++) {tmp[i] = i;}
				return tmp
					.map(i => {
						const user = {
							email: `new.user.${i}@${ts}.reach.io`,
							password: `password${ts}`
						};
						return () => global.env.base.createUser(user.email, user.password)
							.then(auth => {
								if (auth) {
									user.uid = auth.uid;
									global.env.createdUsers.push(user);
									return user;
								}
							});
					})
					.reduce((previous, current) => previous.then(current), Promise.resolve());
			})
			.then(() => {
				log.g('info',
					`Created ${global.env.createdUsers.length} users`,
					global.env.createdUsers.map(JSON.stringify)
				);
				const d = data(global.env.createdUsers, Date.now());
				log.g('info', 'Populate namespace', [d]);
				return namespace.set('/', d);
			})
			.then(() => {
				global.env.base.logout();
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
		expect(global.env.base).toBeDefined('Missing base. Server or namespace pb.');
		// Reset repos to force new persistent connection to be established
		// Webcom.Context.getInstance().repos_ = {};
		Webcom.INTERNAL.PersistentStorage.remove('session');
	});

	afterAll(done => {
		log.d('main#afterAll');
		// Force logout
		global.env.base && global.env.base.logout();
		Promise.all(global.env.createdUsers.map(user => global.env.base.removeUser(user.email, user.password)))
			.then(() => {
				global.env.createdUsers.length = 0;
				return config.namespace ? Promise.resolve() : namespace.remove(global.env.namespace);
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

	global.suites.keys().forEach(global.suites);
});

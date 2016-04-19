/*global config*/

import {NOT_CONNECTED} from '../src/util/constants';
import * as namespace from './util/namespace';
import * as rules from './util/rules';
import * as log from './util/logger';

describe('/', () => {

	beforeAll(done => {
		log.d('main#beforeAll');
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 15 * 1000;
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
				return Promise.all(Array(5).fill().map((_, i) => {
					const user = {
						email: `new.user${i}@reach.io`,
						password: 'password'
					};
					return config.base.createUser(user.email, user.password)
						.then(auth => {
							if(auth) {
								user.uid = auth.uid;
								config.createdUsers.push(user);
								return namespace.set(`users/${auth.uid}`, {
									status: NOT_CONNECTED,
									name: `user ${i}`,
									lastSeen: Date.now()
								});
							}
						});
				}));
			})
			.then(() => {
				log.g('info', `Created ${config.createdUsers.length} users:`);
				config.createdUsers.forEach(user => {
					log.i(`${user.email} (${user.uid})`);
				});
				log.ge();
			})
			.then(() => {
				// Populate Data (Rooms...)
			})
			.then(() => {
				config.base.logout();
				Webcom.INTERNAL.PersistentStorage.remove('session');
				// Reset repos to force new persistent connection to be established
				Webcom.Context.getInstance().repos_ = {};
				done();
			})
			.catch(e => {
				log.e('main#beforeAll', e);
				done(e);
			});
	});

	beforeEach(() => {
		log.d('main#beforeEach');
		expect(config.base).toBeDefined('Missing base. Server of namespace pb.');
		// Reset repos to force new persistent connection to be established
		Webcom.Context.getInstance().repos_ = {};
		Webcom.INTERNAL.PersistentStorage.remove('session');
	});

	afterAll(done => {
		log.d('main#afterAll');
		// Force logout
		config.base.logout();

		Promise.all(config.createdUsers.map(user => config.base.removeUser(user.email, user.password)))
			.then(() => {
				config.createdUsers.length = 0;
				return config.namespace ? Promise.resolve() : namespace.remove();
			})
			.then(done)
			.catch(e => {
				log.e(e);
				done(e);
			});
	});

	// Load test suites
	const suites = global.suites;
	suites.keys().forEach(suite => {
		suites(suite).default(config.base);
	});
});

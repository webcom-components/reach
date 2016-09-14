import Webcom from 'webcom/webcom';
import * as namespace from './util/namespace';
import * as rules from './util/rules';
import * as log from './util/logger';
import * as config from './util/config';
import delay from 'lodash/delay';
import data from './data';

// HACK: Karma might start tests before the page is fully loaded (https://github.com/karma-runner/karma/issues/1403, https://github.com/karma-runner/karma-jasmine/issues/77)
window.__karma__.start = (function(originalStartFn) {
	return () => {
		let ticks = 0;
		const args = arguments;
		const start = () => {
			log.w(`start (${ticks}) - Webcom ${Webcom ? 'loaded' : 'missing'}`);
			if(ticks++ > 30 || Webcom) {
				originalStartFn(...args);
			} else {
				ticks++;
				delay(start, 1000);
			}
		};
		delay(start, 1000);
	};
})(window.__karma__.start);

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

	jasmine.DEFAULT_TIMEOUT_INTERVAL = 30 * 1000;

	beforeAll(done => {
		log.w('main#beforeAll');
		jasmine.addMatchers(customMatchers);
		(config.namespace ? Promise.resolve(config.namespace) : namespace.create())
			.then(ns => {
				log.w(`Namespace: ${ns}`);
				global.env.namespace = ns;
				global.env.namespaceUrl = config.namespaceUrl(global.env.namespace);
			})
			.then(() => rules.get())
			.then(r => {
				log.w('Rules retrieved');
				global.env.rules = r;
				return rules.set(global.env.rules);
			})
			.then(() => {
				log.w(`Try to connect to ${global.env.namespaceUrl}`);
				global.env.base = new Webcom(global.env.namespaceUrl);
			})
			.then(() => {
				log.w('Connected');
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
				log.w(`Created ${global.env.createdUsers.length} users`);
				log.g('info',
					`Created ${global.env.createdUsers.length} users`,
					global.env.createdUsers.map(JSON.stringify)
				);
				const d = data(global.env.createdUsers, Date.now());
				log.w('Populate namespace');
				log.g('debug', 'Populate namespace', [d]);
				return namespace.set('/', d);
			})
			.then(() => {
				log.w('Done');
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
		let destroy;
		if(config.namespace) {
			destroy = Promise.all(global.env.createdUsers.map(
				user => global.env.base.removeUser(user.email, user.password))
			);
		} else{
			destroy = namespace.remove(global.env.namespace);
		}
		destroy
			.then(() => {
				localStorage.clear();
				done();
			})
			.catch(e => {
				log.e(e);
				done(e);
			});
	});

	global.suites.keys().forEach(global.suites);
});

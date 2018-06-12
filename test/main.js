import Webcom from 'webcom/webcom';
import axios from 'axios';
import qs from 'qs';
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
			if(ticks++ > 5 || Webcom) {
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

const Api = () => {
	return axios.create({
		baseURL: `${config.protocol}://${config.domain}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}/*,
		proxy: {
			host: 'proxy.rd.francetelecom.fr',
			port: 8080
		}*/
	});
};

const getToken = () => {
	return new Promise((resolve, reject) => {
		const auth = {
			email: config.credentials.email,
			password: config.credentials.password
		};
		Api().post(
			'/auth/v2/accounts/password/signin',
			qs.stringify(auth)
		)
		.then((res) => {
			return res.data.token;
		})
		.then((token) => {
			global.env.authToken = token;
			return Api().get(
				`/admin/base/${global.env.namespace}/token?token=${token}`
			);
		})
		.then((res) => {
			resolve(res.data.authToken);
		})
		.catch((err) => {
			log.e(err);
			reject(err);
		});
	});
};

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
		// Workaround test in error "some of your tests did a full page reload"
		window.onbeforeunload = () => {};

		log.d('main#beforeAll');
		jasmine.addMatchers(customMatchers);
		(config.namespace ? Promise.resolve(config.namespace) : namespace.create())
			.then(ns => {
				log.d('namespace created');
				global.env.namespace = ns;
				global.env.namespaceUrl = config.namespaceUrl(global.env.namespace);
			})
			.then(() => {
				log.d('set des rules');
				rules.set();
			})
			.then(() => {
				log.d('Try to connect to ', global.env.namespaceUrl);
				global.env.base = new Webcom(global.env.namespaceUrl);
			})
			.then(() => {
				log.d('Generate authToken');
				return getToken();
			})
			.then((authToken) => {
				global.env.createToken = authToken;
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
						return () => Api().post(
							`/admin/base/${global.env.namespace}/createConfirmedUser?auth=${global.env.createToken}
								&email=${user.email}`,
							qs.stringify({
								password: user.password
							})
						)
						.then((res) => {
							user.uid = res.data.uid;
							global.env.createdUsers.push(user);
							return user;
						});
						/* global.env.base.createUser(user.email, user.password)
							.then(auth => {
								if (auth) {
									user.uid = auth.uid;
									global.env.createdUsers.push(user);
									return user;
								}
							}); */
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
				done.fail(e.message);
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

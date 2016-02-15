/* global config */

import util from './util';

let user;

/**
 * Login with test account
 * @param {Object} credentials
 * @param {string} credentials.email
 * @param {string} credentials.password
 * @paral {boolean} credentials.rememberMe
 */
const login = credentials => {
	const ref = new window.Webcom(`${config.url}/base/accounts`);

	return new Promise((resolve) => {
		ref.removeUser(credentials.email, credentials.password, () => {
			resolve();
		});
	}).then(() => {
		return new Promise((resolve) => {
			ref.createUser(credentials.email, credentials.password, () => {
				resolve();
			});
		});
	}).then(() => {
		return new Promise((resolve, reject) => {
			ref.authWithPassword(
				{
					email: credentials.email,
					password: credentials.password,
					rememberMe: credentials.rememberMe
				},
				(error, u) => {
					util.removeNSOverridenUrl('accounts');
					if (error) {
						reject(error);
					} else if (u) {
						user = u;
						resolve(ref);
					}
				}
			);
		});
	});
};

/**
 * do the namespace creation request
 * @private
 * @param {string} apiUrl
 * @param {string} namespace
 * @param {string} token
 */
const _createNamespace = (apiUrl, namespace, token) => {
	const
		req = new XMLHttpRequest(),
		formData = new FormData();

	req.open('POST', `${apiUrl}/admin/base/${namespace}`);

	const p = new Promise((resolve, reject) => {
		req.onreadystatechange = () => {
			if (req.readyState === 4) {
				if(req.status === 200) {
					resolve();
				} else {
					reject();
				}
			}
		};
	});

	formData.append('token', token);
	req.send(formData);

	return p;
};

/**
 * do the namespace remove request
 * @private
 * @param {string} apiUrl
 * @param {string} namespace
 * @param {string} token
 */
const _removeNamespace = (apiUrl, namespace, token) => {
	const
		req = new XMLHttpRequest(),
		formData = new FormData();

	req.open('POST', `${apiUrl}/admin/base/${namespace}`);

	const p = new Promise((resolve, reject) => {
		req.onreadystatechange = () => {
			if (req.readyState === 4) {
				if (req.status === 200) {
					resolve();
				} else {
					reject();
				}
			}
		};
	});

	formData.append('token', token);
	formData.append('_method', 'DELETE');
	formData.append('namespace', namespace);

	req.send(formData);

	return p;
};

/**
 * Create a namespace
 * @param {string} name
 */
export const createNamespace = (name) => {
	return new Promise((resolve) => {
		let r;
		login(config.credentials).then((ref) => {
			r = ref;
			return _createNamespace(config.url, name, user.webcomAuthToken);
		}).then(() => {
			r.logout(() => {
				r.goOffline();
				util.resetLocalRepo(r.toString());
				resolve();
			});
		});
	});
};

/**
 * Remove a namespace
 * @param {string} name
 */
export const removeNamespace = (name) => {
	return new Promise((resolve) => {
		let r;
		login(config.credentials).then((ref) => {
			r = ref;
			return _removeNamespace(config.url, name, user.webcomAuthToken);
		}).then(() => {
			r.logout(() => {
				r.goOffline();
				r.removeUser(config.credentials.email, config.credentials.password, () => {
					util.resetLocalRepo(r.toString());
					util.removeNSOverridenUrl(name);
					resolve();
				});
			});
		});
	});
};

/**
 * Return admin token. Useful to modify security rules for example
 * @param {String} apiUrl
 * @param {String} namespace
 * @param {String} token - authencated user token
 * @returns {Promise}
 */
const getAdminToken = (apiUrl, namespace, token) => {
	const req = new XMLHttpRequest();
	req.open('GET', `${apiUrl}/admin/base/${namespace}/token?token=${token}`);
	req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

	const p = new Promise((resolve, reject) => {
		req.onreadystatechange = () => {
			if (req.readyState === 4) {
				if (req.status === 200) {
					resolve(JSON.parse(req.responseText).authToken);
				} else {
					reject();
				}
			}
		};
	});

	req.send();

	return p;
};

/**
 * Set security rules on namespace
 * @param {Object} rules - security rules objects
 * @param {String} namespace
 * @returns {*}
 */
export const setRules = (rules, namespace) => {
	return getAdminToken(config.url, namespace, user.webcomAuthToken).then((adminToken) => {
		const req = new XMLHttpRequest();
		req.open('PUT', `${config.url}/base/${namespace}/.settings/rules.json?auth=${adminToken}`);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

		const p = new Promise((resolve, reject) => {
			req.onreadystatechange = function () {
				if (req.readyState === 4) {
					if (req.status === 200) {
						resolve();
					} else {
						reject();
					}
				}
			};
		});

		req.send(JSON.stringify({rules}));

		return p;
	});
};

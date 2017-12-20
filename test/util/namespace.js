import * as account from './account';
import * as log from './logger';
import * as config from './config';

const admin = () =>
	account.login()
		.then(auth => account.admin(auth.token, global.env.namespace))
		.then(token => new Promise((resolve, reject) => {
			global.env.base.auth(token, resolve, reject);
		}));

export const create = () => {
	const ns = `reach${Date.now()}`;
	return account.login()
		.then(auth => new Promise((resolve, reject) => {
			if(auth instanceof Error) {
				reject(auth);
			} else {
				const
					req = new XMLHttpRequest(),
					formData = new FormData();
				req.onreadystatechange = () => {
					if (req.readyState === 4) {
						if (req.status === 200) {
							// config.tempNamespace = ns;
							log.g('info', 'Created 1 namespace', [config.namespaceUrl(ns)]);
							resolve(ns);
						} else {
							log.e('Creating namespace failed', req);
							reject(req.status);
						}
					}
				};
				req.open('POST', `${config.protocol}://${config.domain}/admin/base/${ns}`);
				formData.append('token', auth.token);
				req.send(formData);
			}
		}));
};

export const remove = (tempNamespace) => {
	return account.login()
		.then(auth => new Promise((resolve, reject) => {
			// Close persistent connections before removing namespace
			global.env.base.goOffline();

			const
				req = new XMLHttpRequest(),
				formData = new FormData();
			req.onreadystatechange = () => {
				if (req.readyState === 4) {
					if(req.status === 200) {
						log.g('info', 'Removed 1 namespace', [global.env.namespaceUrl]);
						resolve(tempNamespace);
					} else {
						reject(req.status);
					}
				}
			};
			req.open('POST', `${config.protocol}://${config.domain}/admin/base/${tempNamespace}`);
			formData.append('token', auth.token);
			// formData.append('token', token);
			formData.append('_method', 'DELETE');
			formData.append('namespace', tempNamespace);
			req.send(formData);
		}));
};


export const set = (path, data) => {
	return admin()
		.then(() => new Promise((resolve, reject) => {
			global.env.base.child(path).set(data, error => {error ? reject(error) : resolve();});
		}));
};

export const get = path => {
	return admin()
		.then(() => new Promise((resolve, reject) => {
			global.env.base.child(path).once('value', resolve, reject);
		}));
};

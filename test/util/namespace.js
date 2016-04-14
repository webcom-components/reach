import * as account from './account';

export const create = () => {
	const ns = `reachapi${Date.now()}`;
	return account.login()
		.then(auth => new Promise((resolve, reject) => {
			const
				req = new XMLHttpRequest(),
				formData = new FormData();
			req.onreadystatechange = () => {
				if (req.readyState === 4) {
					if(req.status === 200) {
						config.tempNamespace = ns;
						resolve(ns);
					} else {
						reject(req.status);
					}
				}
			};
			req.open('POST', `${config.protocol}://${config.domain}/admin/base/${ns}`);
			formData.append('token', auth.token);
			req.send(formData);
		}));
};

export const remove = () => {
	return account.login()
		.then(auth => new Promise((resolve, reject) => {
			const
				req = new XMLHttpRequest(),
				formData = new FormData();
			req.onreadystatechange = () => {
				if (req.readyState === 4) {
					if(req.status === 200) {
						resolve(config.tempNamespace);
					} else {
						reject(req.status);
					}
				}
			};
			req.open('POST', `${config.protocol}://${config.domain}/admin/base/${config.tempNamespace}`);
			formData.append('token', auth.token);
			formData.append('_method', 'DELETE');
			formData.append('namespace', config.tempNamespace);
			req.send(formData);
		}));
};

export const reset = () => {
	return account.login()
		.then(auth => account.admin(auth.token, config.namespace || config.tempNamespace))
		.then(token => new Promise((resolve, reject) => {
			config.base.auth(token, resolve, reject);
		}))
		.then(() => new Promise((resolve, reject) => {
			config.base.child('_').remove(error => error ? reject(error) : resolve);
		}))
		.then(() => new Promise((resolve, reject) => {
			config.base.child('users').remove(error => error ? reject(error) : resolve);
		}))
		.then(() => new Promise((resolve, reject) => {
			config.base.once('value', error => error ? reject(error) : resolve);
		}));
};

export const set = (path, data) => {
	return account.login()
		.then(auth => account.admin(auth.token, config.namespace || config.tempNamespace))
		.then(token => new Promise((resolve, reject) => {
			config.base.auth(token, resolve, reject);
		}))
		.then(() => new Promise((resolve, reject) => {
			config.base.child(path).set(data, error => {error ? reject(error) : resolve();});
		}));
};

import Webcom from 'webcom/webcom';
import * as config from './config';

export const login = () => {
	const accounts = new Webcom(`${config.protocol}://${config.domain}/base/accounts`);

	let auth;
	if(global.env && global.env.authToken) {
		auth = Promise.resolve({token: global.env.authToken});
	} else if(config && config.token) {
		auth = new Promise((resolve, reject) => {
			accounts.auth(config.token, a => {
				resolve(a ? a : {token: config.token});
			}, reject);
		});
	} else if(config && config.credentials && config.credentials.email && config.credentials.password) {
		auth = accounts.authWithPassword(config.credentials).then(a => {
			return a ? {token: (a.token || a.authToken|| a.webcomAuthToken)} : a;
		});
	} else {
		auth = Promise.reject(new Error('No credentials'));
	}

	return auth.then(a => {
		global.env.authToken = a.token;
		return a;
	});
};

export const admin = (token, namespace) => new Promise((resolve, reject) => {
	if(global.env.adminToken) {
		resolve(global.env.adminToken);
	} else {
		const req = new XMLHttpRequest();
		req.onreadystatechange = () => {
			if (req.readyState === 4) {
				if (req.status === 200) {
					const response = JSON.parse(req.responseText);
					if (response.authToken) {
						global.env.adminToken = response.authToken;
						resolve(response.authToken);
					} else {
						reject(new Error(response.error));
					}

				} else {
					reject();
				}
			}
		};
		req.open('GET', `${config.protocol}://${config.domain}/admin/base/${namespace}/token?token=${token}`);
		req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		req.send();
	}
});

export const logout = () => {
	const accounts = new Webcom(`${config.protocol}://${config.domain}/base/accounts`);
	return new Promise(resolve => {
		accounts.logout(() => {
			Webcom.INTERNAL.PersistentStorage.remove('session');
			global.env.authToken = null;
			global.env.adminToken = null;
			resolve();
		});
	});
};


export const login = () => {
	const accounts = new Webcom(`${config.protocol}://${config.domain}/base/accounts`);

	let auth;
	if(config && config.authToken) {
		auth = Promise.resolve({token: config.authToken});
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
		config.authToken = a.token;
		return a;
	});
};

export const admin = (token, namespace) => new Promise((resolve, reject) => {
	if(config.adminToken) {
		resolve(config.adminToken);
	} else {
		const req = new XMLHttpRequest();
		req.onreadystatechange = () => {
			if (req.readyState === 4) {
				if (req.status === 200) {
					const response = JSON.parse(req.responseText);
					if (response.authToken) {
						config.adminToken = response.authToken;
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
			config.authToken = null;
			config.adminToken = null;
			resolve();
		});
	});
};

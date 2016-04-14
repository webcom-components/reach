
export const login = () => {
	const accounts = new Webcom(`${config.protocol}://${config.domain}/base/accounts`);

	let auth;
	if(config && config.token) {
		auth = new Promise((resolve, reject) => {
			accounts.auth(config.token, a => {
				resolve(a ? a : {token: config.token});
			}, reject);
		});
	} else if(config && config.credentials && config.credentials.email && config.credentials.password) {
		auth = accounts.authWithPassword(config.credentials);
	} else {
		auth = Promise.reject(new Error('No credentials'));
	}

	return auth;
};

export const admin = (token, namespace) => new Promise((resolve, reject) => {
	const req = new XMLHttpRequest();
	req.onreadystatechange = () => {
		if (req.readyState === 4) {
			if (req.status === 200) {
				const response = JSON.parse(req.responseText);
				if(response.authToken) {
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
});

export const logout = () => {
	const accounts = new Webcom(`${config.protocol}://${config.domain}/base/accounts`);
	return new Promise(resolve => {
		accounts.logout(() => {
			Webcom.INTERNAL.PersistentStorage.remove('session');
			resolve();
		});
	});
};

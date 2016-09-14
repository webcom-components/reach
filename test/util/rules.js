import * as account from './account';
import * as config from './config';
import * as log from './logger';

export const get = () => new Promise((resolve, reject) => {
	const req = new XMLHttpRequest();
	req.onreadystatechange = () => {
		if (req.readyState === 4) {
			if (req.status === 200) {
				resolve(JSON.parse(req.responseText).rules);
			} else {
				reject(new Error('No security rules found.'));
			}
		}
	};
	req.open('GET', '/base/dist/rules.json');
	req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	req.send();
});

/**
 * Set security rules on namespace
 * @param {String} namespace
 * @returns {*}
 */
export const set = rules => {
	const ns = global.env.namespace;
	return account.login()
		.then(auth => {
			log.w('rules#set#logged');
			return account.admin(auth.token, ns);
		})
		.then(token => {
			log.w(`rules#set#admin ${token}`);
			return new Promise((resolve, reject) => {
				const req = new XMLHttpRequest();
				req.onreadystatechange = function () {
					if (req.readyState === 4) {
						if (req.status === 200) {
							log.w('rules#set#success');
							resolve();
						} else {
							log.w('rules#set#fail');
							reject({
								status: req.status,
								statusText: req.statusText
							});
						}
					}
				};
				log.w(`rules#set#put '${config.url}/base/${ns}/.settings/rules.json?auth=${token}'`);
				req.open('PUT', `${config.url}/base/${ns}/.settings/rules.json?auth=${token}`);
				req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
				req.send(JSON.stringify({rules}));
			});
		});
};

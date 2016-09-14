/*global fetch,Headers*/
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
			log.w(`rules#set#admin ${ns}|${token}`);
			const
				url = `${config.url}/base/${ns}/.settings/rules.json?auth=${token}`,
				body = JSON.stringify({rules}),
				jsonHeaders = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
				method = 'PUT';

			log.w(`rules#set#url ${url}`);
			log.w(`rules#set#body ${body}`);
			log.w(`rules#set#bodySize ${body.length}`);

			if(fetch) {
				try {
					const headers = new Headers(jsonHeaders);
					return fetch(url, {method, headers, body})
						.then(response => {
							log.w(`rules#set ${response.status}|${response.statusText}|${response.type}|${response.url}`); //eslint-disable-line
							response.headers.forEach((v, k) => {
								log.w(`${k}: ${v}`);
							});
							// if (response.status >= 200 && response.status < 300) {
							return response.text();
							// }
							// const error = new Error(response.statusText);
							// error.response = response;
							// throw error;
						})
						.then(response => {
							log.w(`rules#set ${response}`);
						})
						.catch(e => {
							e.response.text().then(r => {
								log.w(`rules#set#fail ${r}`);
							});
							return Promise.reject(e);
						});
				} catch(err) {
					log.w('rules#set#error');
					log.e(err);
					return Promise.reject(err);
				}
			}

			return new Promise((resolve, reject) => {
				const req = new XMLHttpRequest();
				req.onreadystatechange = function () {
					if (req.readyState === 4) {
						if (req.status === 200) {
							log.w('rules#set#success');
							resolve();
						} else {
							log.w('rules#set#fail');
							const error = new Error(req.statusText);
							error.code = req.status;
							error.response = req.responseText;
							reject(error);
						}
					}
				};
				req.open(method, url);
				Object.keys(jsonHeaders).forEach(headerName => {
					req.setRequestHeader(headerName, jsonHeaders[headerName]);
				});
				req.send(body);
			});
		});
};

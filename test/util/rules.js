/*global fetch,Headers*/
/*eslint max-len: [0, 120] */
import * as account from './account';
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

const _set = action => {
	const ns = global.env.namespace;
	const logError = (msg, e) => {
		const {message, name, fileName, lineNumber, columnNumber, stack} = e;
		log.w(`${msg}: ${JSON.stringify({message, name, fileName, lineNumber, columnNumber, stack})}`);
	};
	return account.login()
		.then(auth => {
			log.w('rules#set#logged');
			return account.admin(auth.token, ns);
		})
		.then(token => {
			log.w(`rules#set#admin ${ns}|${token}`);
			return new Promise((resolve, reject) => {
				const req = new XMLHttpRequest();
				req.onreadystatechange = () => {
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
				req.onerror = e => {
					logError('xhr fail', e);
					reject(e);
				};
				req.onload = () => {
					log.w('xhr success');
					resolve();
				};
				log.w(`http://localhost:8080/rules/${action}/${ns}/${token}`);
				req.open('GET', `http://localhost:8080/rules/${action}/${ns}/${token}`, true);
				req.send();
			});
		});
};

export const reset = () => {
	return _set('reset');
};
/**
 * Set security rules on namespace
 * @param {String} namespace
 * @returns {*}
 */
export const set = () => {
	return _set('set');
};

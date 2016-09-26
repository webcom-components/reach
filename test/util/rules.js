import * as account from './account';

const _set = action => {
	const ns = global.env.namespace;
	return account.login()
		.then(auth => account.admin(auth.token, ns))
		.then(token => new Promise((resolve, reject) => {
			const req = new XMLHttpRequest();
			req.onreadystatechange = function () {
				if (req.readyState === 4) {
					if (req.status === 200) {
						resolve();
					} else {
						const error = new Error(req.statusText);
						error.code = req.status;
						error.response = req.responseText;
						reject(error);
					}
				}
			};
			req.open('GET', `http://localhost:8080/rules/${action}/${ns}/${token}`, true);
			req.send();
		}));
};

export const reset = () => {
	return _set('reset');
};
/**
 * Set security rules on namespace
 * @returns {*}
 */
export const set = () => {
	return _set('set');
};

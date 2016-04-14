/*global WEBCOM_TOKEN, WEBCOM_EMAIL, WEBCOM_PASSWORD, NODE_ENV */
'use strict';

const defaultConfig = {
	protocol: 'https',
	domain: 'webcom.orange.com',
	get token() {
		return WEBCOM_TOKEN;
	},
	get credentials() {
		return {
			email: WEBCOM_EMAIL,
			password: WEBCOM_PASSWORD,
			rememberMe: false
		};
	},
	get url() {
		return `${this.protocol}://${this.domain}`;
	},
	get namespaceUrl() {
		return `${this.protocol}://${this.domain}/base/${this.namespace || this.tempNamespace}`;
	}
};

const configure = (values = {}) => {
	const cfg = Object.assign(defaultConfig, values);
	if(window) {
		console.info(NODE_ENV, cfg);
		window.config = cfg;
	}
};

export default configure;

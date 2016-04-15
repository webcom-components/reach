/*global WEBCOM_TOKEN, WEBCOM_EMAIL, WEBCOM_PASSWORD, WEBCOM_NAMESPACE, WEBCOM_PROTOCOL, WEBCOM_DOMAIN */
'use strict';

const config = {
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

if(WEBCOM_NAMESPACE && /^[a-z0-9]+$/.test(WEBCOM_NAMESPACE)) {
	config.namespace = WEBCOM_NAMESPACE;
}

if(WEBCOM_PROTOCOL && /^https?$/.test(WEBCOM_PROTOCOL)) {
	config.protocol = WEBCOM_PROTOCOL;
}

if(WEBCOM_DOMAIN && /^[a-z:0-9\.]+$/.test(WEBCOM_DOMAIN)) {
	config.domain = WEBCOM_DOMAIN;
}

if(window) {
	console.log(config);
	window.config = config;
}

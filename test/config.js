/*global WEBCOM_TOKEN, WEBCOM_EMAIL, WEBCOM_PASSWORD, WEBCOM_NAMESPACE, WEBCOM_PROTOCOL, WEBCOM_DOMAIN */
'use strict';

const config = {
	logLevel: 'info',
	domain: WEBCOM_DOMAIN,
	protocol: WEBCOM_PROTOCOL,
	namespace: WEBCOM_NAMESPACE,
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

if(window) {
	window.config = config;
}

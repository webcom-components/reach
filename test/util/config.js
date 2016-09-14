/*global WEBCOM_TOKEN, WEBCOM_EMAIL, WEBCOM_PASSWORD, WEBCOM_NAMESPACE, WEBCOM_PROTOCOL, WEBCOM_DOMAIN */
'use strict';

export const logLevel = 'warn';
export const domain = WEBCOM_DOMAIN;
export const protocol = WEBCOM_PROTOCOL;
export const namespace = WEBCOM_NAMESPACE;
export const token = WEBCOM_TOKEN;
export const credentials = {
	email: WEBCOM_EMAIL,
	password: WEBCOM_PASSWORD,
	rememberMe: false
};
export const url = `${protocol}://${domain}`;
export const namespaceUrl = tempNamespace => `${protocol}://${domain}/base/${namespace || tempNamespace}`;


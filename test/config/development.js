/*global WEBCOM_NAMESPACE, WEBCOM_PROTOCOL, WEBCOM_DOMAIN*/
'use strict';

import configure from './default';

const config = {};

if(WEBCOM_NAMESPACE && /^[a-z0-9]+$/.test(WEBCOM_NAMESPACE)) {
	config.namespace = WEBCOM_NAMESPACE;
}

if(WEBCOM_PROTOCOL && /^https?$/.test(WEBCOM_PROTOCOL)) {
	config.protocol = WEBCOM_PROTOCOL;
}

if(WEBCOM_DOMAIN && /^[a-z:0-9\.]+$/.test(WEBCOM_DOMAIN)) {
	config.domain = WEBCOM_DOMAIN;
}

configure(config);

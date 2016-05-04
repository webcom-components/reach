const map = require('lodash/mapValues');

// Mixes ENV variables & .account.json content for tests configuration
module.exports = map(Object.assign(
	{
		WEBCOM_EMAIL: process.env.WEBCOM_EMAIL,
		WEBCOM_PASSWORD: process.env.WEBCOM_PASSWORD,
		WEBCOM_TOKEN: process.env.WEBCOM_TOKEN,
		WEBCOM_DOMAIN: process.env.WEBCOM_DOMAIN,
		WEBCOM_PROTOCOL: process.env.WEBCOM_PROTOCOL,
		WEBCOM_NAMESPACE: process.env.WEBCOM_NAMESPACE,
		NODE_ENV: process.env.NODE_ENV
	},
	require('./.account.json')
), v => v ? `'${v}'` : null);

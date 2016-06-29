'use strict';
const mapValues = require('lodash/mapValues');
const pick = require('lodash/pick');
const fs = require('fs');
const yaml = require('js-yaml');
const args = require('minimist')(process.argv.slice(2), {
	string: ['env']
});
/**
 * Load JSON or YAML configuration file
 * @param fileName
 * @returns {object}
 */
const loadConf = (fileName) => {
	if(fs.existsSync(fileName)) {
		const fileContent = fs.readFileSync(fileName, 'utf8');
		return !/\.json$/.test(fileName) ? yaml.safeLoad(fileContent) : JSON.parse(fileContent);
	}
	return null;
};
/**
 * List of configurations variables
 * @type {string[]}
 */
const confValues = [
	'WEBCOM_EMAIL',
	'WEBCOM_PASSWORD',
	'WEBCOM_TOKEN',
	'WEBCOM_DOMAIN',
	'WEBCOM_PROTOCOL',
	'WEBCOM_NAMESPACE',
	'NODE_ENV'
];

// Account configuration from file
let fromFile = loadConf('./.account.json') || loadConf('./.account.yml') || loadConf('./.account.yaml');
if(fromFile) {
	// Select ENV
	if(args.env) {
		fromFile = fromFile[args.env];
	}
	fromFile = pick(fromFile, confValues);
}
// Account configuration from ENV variables
const fromEnv = pick(process.env, confValues);

// Mixes ENV variables & .account.json content for tests configuration
const credentials = Object.assign(fromEnv, fromFile);

// Default values
if(!credentials.WEBCOM_DOMAIN || !/^[a-z:0-9\.]+$/.test(credentials.WEBCOM_DOMAIN)) {
	credentials.WEBCOM_DOMAIN = 'io.datasync.orange.com';
}
if(!credentials.WEBCOM_PROTOCOL || !/^https?$/.test(credentials.WEBCOM_PROTOCOL)) {
	credentials.WEBCOM_PROTOCOL = 'https';
}
confValues.forEach(confValue => credentials[confValue] = credentials[confValue] || null);
// Encloses strings for webpack globals
module.exports = mapValues(credentials, v => v ? `'${v}'` : null);

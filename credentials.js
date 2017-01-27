'use strict';
const path = require('path');
const mapValues = require('lodash/mapValues');
const pick = require('lodash/pick');
const fs = require('fs');
const yaml = require('js-yaml');
const args = require('minimist')(process.argv.slice(2), {
	string: ['env']
});
const log = console.log.bind(console, '>| ');
const load = dir => {
	const fileNames = fs
		.readdirSync(dir, {encoding: 'UTF-8'})
		.filter(fileName => /^\.account\.(json|ya?ml)$/.test(fileName));
	return fileNames.length > 0 ? `${dir}/${fileNames[0]}` : null;
};

/**
 * Load JSON or YAML configuration file
 * @returns {object}
 */
const loadConf = () => {
	const fileName = load(process.env.HOME) || load(path(`${__dirname}/..`));
	if (fileName) {
		log(`Reading credentials from: ${fileName.replace(process.env.HOME, '$HOME')}`);
		const fileContent = fs.readFileSync(fileName, 'utf8');
		return !/\.json$/.test(fileName) ? yaml.safeLoad(fileContent) : JSON.parse(fileContent);
	}
	log('No credentials file found');
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
let fromFile = loadConf();
if (fromFile) {
	// Select ENV
	if (args.env && fromFile[args.env]) {
		fromFile = fromFile[args.env];
	}
	fromFile = pick(fromFile, confValues);
}

// Account configuration from ENV variables
const fromEnv = pick(process.env, confValues);

// Mixes ENV variables & .account.json content for tests configuration
const credentials = Object.assign(fromEnv, fromFile);

// Default values
if (!credentials.WEBCOM_DOMAIN || !/^[a-z:0-9\.]+$/.test(credentials.WEBCOM_DOMAIN)) {
	credentials.WEBCOM_DOMAIN = 'io.datasync.orange.com';
}
if (!credentials.WEBCOM_PROTOCOL || !/^https?$/.test(credentials.WEBCOM_PROTOCOL)) {
	credentials.WEBCOM_PROTOCOL = 'https';
}
confValues.forEach(confValue => {
	credentials[confValue] = credentials[confValue] || null;
	const logValue = !~['WEBCOM_PASSWORD', 'WEBCOM_TOKEN'].indexOf(confValue) || !credentials[confValue] ?
		credentials[confValue] : '**********';
	log(`${confValue} = ${logValue}`);
});
// Encloses strings for webpack globals
module.exports = mapValues(credentials, v => v ? `'${v}'` : null);

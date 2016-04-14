#!/usr/bin/env node

const
	request = require('request'),
	fs = require('fs'),
	packageInfo = require('./package.json'),
	proxy = process.env.PROXY ||
		process.env.HTTPS_PROXY || process.env.https_proxy ||
		process.env.HTTP_PROXY || process.env.http_proxy || null;

request(
	{url: packageInfo.schema.rules, proxy},
	(error, response, body) => {
		if(body) {
			fs.writeFileSync(`${__dirname}/dist/rules.json`, body);
		} else {
			fs.unlinkSync(`${__dirname}/dist/rules.json`);
		}
	}
);

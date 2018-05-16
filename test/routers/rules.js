const router = require('express').Router();
const request = require('request');
const fs = require('fs');
const account = require('../../credentials');

const host = `${account.WEBCOM_PROTOCOL}://${account.WEBCOM_DOMAIN}`.replace(/'/g, '');

router.param('namespace', (req, res, next, namespace) => {
	req.ns = namespace;
	next();
});

router.param('token', (req, res, next, token) => {
	req.token = token;
	next();
});

const proxyUrl = 'http://proxy:8080';
const proxiedRequest = request.defaults({'proxy': proxyUrl});

router.all('/set/:namespace/:token', (req, res) => {
	console.log('SET', req.ns, `${host}/base/${req.ns}/.settings/rules.json?auth=${req.token}`);
	fs.createReadStream(`${__dirname}/../../dist/rules.json`)
		.pipe(proxiedRequest.put({
			url: `${host}/base/${req.ns}/.settings/rules.json?auth=${req.token}`,
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		}, (error, response, body) => {
			console.log('SET', response, body, error);
			res
				.type(response.headers['content-type'])
				.status(response.statusCode)
				.send(body);
		}));
});

router.all('/reset/:namespace/:token', (req, res) => {
	console.log('RESET', req.ns);
	proxiedRequest.put({
		url: `${host}/base/${req.ns}/.settings/rules.json?auth=${req.token}`,
		headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
		json: {rules: {'.write': true, '.read': true}}
	}, (error, response, body) => {
		console.log('RESET', response.statusCode, body);
		res
			.type(response.headers['content-type'])
			.status(response.statusCode)
			.send(body);
	});
});

module.exports = router;

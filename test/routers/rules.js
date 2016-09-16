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

router.all('/set/:namespace/:token', (req, res) => {
	console.log('HANDLE SET', req.ns, req.token, __dirname);
	fs.createReadStream(`${__dirname}/../../dist/rules.json`)
		.pipe(request.put({
			url: `${host}/base/${req.ns}/.settings/rules.json?auth=${req.token}`,
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		}, (error, response, body) => {

			res
				.type(response.headers['content-type'])
				.status(response.statusCode)
				.send(body);
		}));
});

router.all('/reset/:namespace/:token', (req, res) => {
	request.put({
		url: `${host}/base/${req.ns}/.settings/rules.json?auth=${req.token}`,
		headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
		json: {rules: {'.write': true, '.read': true}}
	}, (error, response, body) => {
		res
			.type(response.headers['content-type'])
			.status(response.statusCode)
			.send(body);
	});
});

module.exports = router;

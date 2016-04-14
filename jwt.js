#!/usr/bin/env node

const inquirer = require('inquirer');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const Webcom = require('webcom');
const colors = require('colors'); //eslint-disable-line

console.info('Generate a JWT token for your account:\n'.bold);

inquirer.prompt(
	[
		{type: 'string', name: 'server', message: 'Set the test platform', 'default': 'https://webcom.orange.com'},
		{type: 'string', name: 'email', message: 'Your account email', 'default': 'webcom.ops@orange.com'},
		{type: 'password', name: 'password', message: 'Your account password'},
		{type: 'password', name: 'secret', message: 'The secret for the \'accounts\' namespace'}
	],
	answers => {
		if(!answers.secret){
			console.error('\n\tMissing secret. The secret is mandatory.\n'.bold.red);
			process.exit(0);
		}

		const ref = new Webcom(`${answers.server}/base/accounts`);
		ref.authWithPassword(answers)
		.then((auth) => {
			// Create a JWT with a 1 year validity (we don't want to change it all the time)
			const token = jwt.sign({
				v: 0,
				d: {
					uid: auth.uid,
					email: answers.email
				},
				iat: moment().unix(),
				exp: moment().add(1, 'year').unix()
			}, answers.secret);

			console.info(`\n${token}\n`.bold);

			process.exit(0);
		})
		.catch((error) => {
			console.error(`\n\t${error.message}\n`.bold.red);
			process.exit(0);
		});
	});

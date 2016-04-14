#!/usr/bin/env node

const BrowserSync = require('browser-sync').create();
const child_process = require('child_process');
const throttle = require('lodash/function/throttle');
const args = require('minimist')(process.argv.slice(2), {boolean: ['all']});

const runESdoc = throttle(() => {
	child_process.exec(`npm run doc${args.all ? ':all' : ''}`);
}, 1000, {leading: true, trailing: true});

BrowserSync.init({
	server: {
		baseDir: 'esdoc',
		index: 'index.html'
	},
	files: [
		'esdoc/**/*',
		{
			match: ['src/**/*.js'],
			fn: runESdoc
		}
	]
});

BrowserSync.reload();

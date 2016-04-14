#!/usr/bin/env node

const hooks = {
	// Lint code/tests & remove built files from commit
	'pre-commit':'npm run lint -s && git reset dist/*.js',
	// Run unit tests
	'pre-push':'npm run test -s'
};
const args = require('minimist')(process.argv.slice(2), {string: ['hook']});

if (!args.hook) {
	console.error('Missing --hook parameter');
	process.exit(1);
} else if (!hooks[args.hook]) {
	console.error(`No hooks defined for '${args.hook}'`);
	process.exit(1);
} else if (process.env.TRAVIS === 'true') {
	console.log(`No need for '${args.hook}' hook on travis`);
	process.exit(0);
}

try {
	const cmd = require('child_process').execSync(hooks[args.hook]);
	process.exit(cmd.status);
} catch(e) {
	process.stdout.write(e.stdout);
	process.stderr.write(e.stderr);
	process.exit(1);
}

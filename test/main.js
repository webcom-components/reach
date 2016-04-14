import * as namespace from './util/namespace';
import * as rules from './util/rules';

describe('Reach Tests', () => {

	beforeAll(done => {
		console.info('main#beforeAll');
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 15 * 1000;
		(config.namespace ? Promise.resolve() : namespace.create())
			.then(() => {
				config.base = new Webcom(config.namespaceUrl);
				return rules.get();
			})
			.then(r => {
				config.rules = r;
				return rules.set(config.rules);
			})
			.then(() => {
				// Reset repos to force new persistent connection to be established
				Webcom.Context.getInstance().repos_ = {};
				done();
			})
			.catch(e => {
				console.error('main#beforeAll', e);
				done(e);
			});
	});

	beforeEach(done => {
		console.info('main#beforeEach');
		// Reset repos to force new persistent connection to be established
		Webcom.Context.getInstance().repos_ = {};
		Webcom.INTERNAL.PersistentStorage.remove('session');
		done();
	});

	afterAll(done => {
		console.info('main#afterAll');
		(config.namespace ? Promise.resolve() : namespace.remove())
			.then(() => {
				config.base.goOffline();
				done();
			})
			.catch(done);
	});

	// Load test suites
	const suites = global.suites;
	suites.keys().forEach(suite => {
		suites(suite).default(config.base);
	});
});

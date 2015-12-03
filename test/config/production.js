'use strict';

import config from './default';

Object.assign(config, {
	createNS: false,
	cleanUpNS: false
});

if (window) {
	window.config = config;
}
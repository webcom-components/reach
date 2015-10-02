"use strict";

import config from "./default";

Object.assign(config, {
    protocol: 'http',
    domain: `${window.location.hostname}:8000`,
    createNS: false,
    cleanUpNS: false,
    _credentials: {
        email: `test@webcom.com`,
        password: 'test',
        rememberMe: false
    }
});

if (window) {
    window.config = config;
}
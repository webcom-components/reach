"use strict";

var config = {
    protocol: 'https',
    domain: 'webcom.orange.com',
    namespace: 'test-com',
    get url() {
        return this.protocol + '://' + this.domain;
    },

    get namespaceUrl() {
        return this.protocol + '://' + this.domain + '/base/' + this.namespace;
    },

    get credentials() {
        if (!this._credentials) {
            this._credentials = {
                email: `test${Date.now()}@webcom.com`,
                password: 'test',
                rememberMe: false
            };
            if (console && console.log) {
                console.log(`credentials for tests : ${this._credentials.email} / ${this._credentials.password}`);
            }
        }

        return this._credentials;
    }
};

export default config;
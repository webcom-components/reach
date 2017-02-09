'use strict';

const common = require('./config/webpack-common.config');
const assign = require('lodash/assign');

module.exports = function(env) {
	return common.configure(assign({}, common.defaultOptions, env));
};

/* handleArgs
 ------------
 handle gulp tasks command line arguments
 */
"use strict";

const
	minimist = require('minimist'),
	_ = require('lodash');

export default (knownOptions) => {
	return minimist(_.slice(process.argv, 2), knownOptions);
};
/* handleArgs
 ------------
 handle gulp tasks command line arguments
 */
"use strict";

var minimist	= require('minimist'),
	_			= require('lodash');

export default function(knownOptions){
	return minimist(_.slice(process.argv, 2), knownOptions);
};
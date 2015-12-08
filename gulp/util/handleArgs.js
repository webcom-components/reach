/* handleArgs
 ------------
 handle gulp tasks command line arguments
 */
'use strict';

import minimist from 'minimist';
import _ from 'lodash';

export default (knownOptions) => {
	return minimist(_.slice(process.argv, 2), knownOptions);
};
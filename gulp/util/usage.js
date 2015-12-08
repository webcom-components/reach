/* usage
 ------------
 Gulp tasks documentation
 */
'use strict';

import _ from 'lodash';
import {colors} from 'gulp-util';

const
	tasks = [],
	log = console.log,
	maxLength = function(l){
		let ml = 0;
		_.forEach(l, (n) => {
			ml = Math.max(ml, n.length);
		});
		return ml;
	},
	format = (flag, flagLength) => {
		return flag + (new Array(flagLength - flag.length)).join(' ');
	},
	list = () => {
		// eval lengths for format
		let allFlags = [],
			allTasks = [];
		_.forEach(tasks, (task) => {
			if(task[2]){
				_.forIn(task[2], (d, f) => {
					allFlags.push(f);
				});
			}
			allTasks.push(task[0]);
		});
		allFlags = maxLength(allFlags);
		allTasks = maxLength(allTasks);

		_.forEach(tasks, (task) => {
			log(colors['blue'](format(task[0], allTasks)));
			log(`  ${colors['white'](task[1])}`);
			if(task[2]) {
				_.forIn(task[2], (desc, flag) => {
					log(`    --${format(flag, allFlags)}\t- ${desc}`);
				});
			}
		});
	};

export default {
	add: (/*String*/taskName, /*String*/taskDescription, /*Object?*/taskOptions) => {
		tasks.push([taskName, taskDescription, taskOptions]);
	},
	list
};
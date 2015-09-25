/* usage
 ------------
 Gulp tasks documentation
 */
"use strict";

let _		= require('lodash'),
	gutil	= require('gulp-util');


let tasks = [],
	color = function(c, s){
		return gutil.colors[c](s);
	},
	log = console.log,
	maxLength = function(l){
		var ml = 0;
		_.forEach(l, function(n){
			ml = Math.max(ml, n.length);
		});
		return ml;
	},
	format = function(flag, flagLength){
		return flag + (new Array(flagLength - flag.length)).join(' ');
	},
	list = function(){
		// eval lengths for format
		var allFlags = [],
			allTasks = [];
		_.forEach(tasks, function(task){
			if(task[2]){
				_.forIn(task[2], function(d, f){
					allFlags.push(f);
				});
			}
			allTasks.push(task[0]);
		});
		allFlags = maxLength(allFlags);
		allTasks = maxLength(allTasks);

		_.forEach(tasks, function(task){
			log(color('blue', format(task[0], allTasks)));
			log('  ' + color('white', task[1]));
			if(task[2]) {
				_.forIn(task[2], function(desc, flag){
					log('    --' + format(flag, allFlags) + '\t- ' + desc);
				});
			}
		});
	};

export default {
	add: function(/*String*/taskName, /*String*/taskDescription, /*Object?*/taskOptions){
		tasks.push([taskName, taskDescription, taskOptions]);
	},
	list: list
};
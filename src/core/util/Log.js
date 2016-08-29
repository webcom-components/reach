import cache from './cache';

/**
 * List of possible log levels
 * @access private
 * @type {string[]}
 */
const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
/**
 * Is log enabled for a specific level
 * @access private
 * @param {string} level The level to test
 * @returns {boolean}
 */
const isEnabled = level => {
	return levels.indexOf(level.toUpperCase()) >= levels.indexOf(cache.logLevel.toUpperCase());
};
/**
 * Global Console. (to avoid drop_console...)
 * @access private
 * @type {Console}
 */
const gConsole = global['console'];
/**
 * Shorthand for console call
 * @access private
 * @param {string} method A method of the console object
 * @param {string} level The log level
 * @param {*} messages the log content
 */
const logger = (method, level, ...messages) => {
	isEnabled(level) ? gConsole[method.toLowerCase()].bind(gConsole)(...messages) : () => {};
};
/**
 * Use a group to log
 * @access private
 * @param {string} level The log level
 * @param {string} message The group title
 * @param {*} items the log content
 */
const group = (level, message, ...items) => {
	if (items.length > 0) {
		logger.bind(undefined, gConsole.group ? 'group' : level, level)(typeof message === 'string' ? message : '');
		let values = (typeof message !== 'string' ? [message] : []).concat(items);
		if (items.length === 1 && items[0] instanceof Array && typeof items[0].length !== undefined) {
			values = items[0];
		}
		values.forEach(item => logger.bind(undefined, level, level)(item));
		gConsole.groupEnd && gConsole.groupEnd();
	} else {
		logger.bind(undefined, level, level, message);
	}
};

/**
 * Log debug messages if log level is set to DEBUG.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/log
 */
export const d = group.bind(undefined, levels[0]);
/**
 * Log information messages if log level is set to DEBUG or INFO.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/info
 */
export const i = group.bind(undefined, levels[1]);
/**
 * Log warning messages if log level is set to DEBUG, INFO or WARN.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/warn
 */
export const w = group.bind(undefined, levels[2]);
/**
 * Log error messages. Errors are always logged.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/error
 */
export const e = gConsole.error.bind(gConsole);
/**
 * Promise rejection logger to use with catch
 * @access protected
 * @param {string} message
 * @returns {function}
 */
export const r = message => reason => {
	d(message, reason);
	return Promise.reject(reason || message);
};

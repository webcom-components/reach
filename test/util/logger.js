/*global config*/

/**
 * List of possible log levels
 * @access private
 * @type {string[]}
 */
const levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
/**
 * Is log enabled for a specific level
 * @access private
 * @param level The level to test
 * @returns {boolean}
 */
const isEnabled = level => {
	return levels.indexOf(level.toUpperCase()) >= levels.indexOf(config.logLevel.toUpperCase());
};
/**
 * Shorthand for console call
 * @access private
 * @param method
 * @param level
 * @param messages
 */
const logger = (method, level, ...messages) => {
	isEnabled(level) ? console[method].bind(console)(...messages) : () => {};
};

/**
 * Log debug messages if log level is set to DEBUG.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/log
 */
export const d = logger.bind(undefined, 'log', levels[0]);
/**
 * Log information messages if log level is set to DEBUG or INFO.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/info
 */
export const i = logger.bind(undefined, 'info', levels[1]);
/**
 * Log warning messages if log level is set to DEBUG, INFO or WARN.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/warn
 */
export const w = logger.bind(undefined, 'warn', levels[2]);
/**
 * Log error messages. Errors are always logged.
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/error
 */
export const e = console.error.bind(console);
/**
 * Open group console messages
 * @param {string}level The log level
 * @param {string} message The group description
 * @param {Object[]} items The items to log
 * @access protected
 * @see https://developer.mozilla.org/fr/docs/Web/API/Console/group
 */
export const g = (level, message, items) => {
	logger.bind(undefined, console.group ? 'group' : level, level)(message);
	const values = items  ? (items instanceof Array && typeof items.length !== undefined ? items : [items]): [];
	values.forEach(item => logger.bind(undefined, level, level)(item));
	console.groupEnd && console.groupEnd();
};
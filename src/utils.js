
/**
 * @file utils.js - JS file for utils methods.
 * @author Webcom
 */


/**
 * @constructor
 * @description The utils class
 */
const utils = function() {
	/**
	 *
	 */
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	/**
	 * Generates an identifier. Two calls of this methode may not return the same identifier
	 * @return {string} - The identifier
	 */
	function _guid() {
		return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
	}
	/**
	 * @description The application instance indentifier
	 */
	const _appInstanceId = _guid();

	return {
		appInstanceId: _appInstanceId
	};
}();

export default utils;
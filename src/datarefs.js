/**
 * @file datarefs.js - JS file modelizing a dataref, i.e. a pointer to the Webcom xwith dedicated nodes for rooms, reach service and WebRTC communications.
 * @author Webcom
 */

/*eslint complexity:1, max-statements: 1, max-len: 1*/

/**
 * Represents a dataref with several nodes in it which are pointing to some locations in the database.
 * The datarefs can be considered as a Webcom object pointing to a base URL. This node contains children nodes for
 * reach service, rooms and WebRTC communications.
 *
 * Warning : when used with demo UI, this file is not imported:  demo UI hase its own configuration system (import json config with a php server module)
 * These nodes are :
 *       - rooms
 *       - reach
 *       - webrtc
 *       - sipPhoneNumbers
 *       - datastore, i.e. the Webcom object
 * @constructor
 */
export default function(WEBCOMBASE_URL) {

	/**
	 * @description The datastore in the main object which can be considered has the root node of the base.
	 * It contains the instanciated Webcom defined by a WEBCOMBASE_URL
	 * The main nodes containing the rooms, the SIP phone numbers and the reach and WebRTC data are children of this node.
	 */
	let _datastore = null;
	/**
	 * @description A node containing all the rooms of the communication system.
	 * Each "room" node possesses the participants and the exchanged instant messages for example.
	 * In the database, this node is identified by "roomsList".
	 */
	let _rooms = null;
	/**
	 * @description A node containing all the data about the reach service used to put in relation users.
	 * In the database, this node is identified by "reach".
	 */
	let _reach = null;
	/**
	 * @description A node containing all the data about the WebRTC feature.
	 * In the database, this node is identified by "webrtc".
	 */
	let _webrtc = null;
	/**
	 * @description A node containing all the data about the SIP phone numbers.
	 * In the database, this node is identified by "sipPhoneNumbers".
	 */
	let _sipPhoneNumbers = null;

	/**
	 * Defines the children nodes, i.e. creates for each of them a dedicated node in the database
	 * under the main node (data store). Created nodes are "roomsList", "reach", "webrtc", "sipPhoneNumbers".
	 */
	function _initChildren() {
		_rooms = _datastore.child('roomsList');
		_reach = _datastore.child('reach');
		_webrtc = _datastore.child('webrtc');
		_sipPhoneNumbers = _datastore.child('sipPhoneNumbers');
	}

	/**
	 * The initialization function which instantiates the Webcom stored in the data store.
	 * All the children nodesnare defines here.
	 */
	function _init() {
		_datastore = new Webcom(WEBCOMBASE_URL);
		_initChildren();
	}

	/**
	 * Defines the Webcom URL and reinit the children.
	 * @param {string} p_webcombase_url - The URL of the Webcom
	 */
	function _setWebcomBaseUrl(p_webcombase_url) {
		_datastore = new Webcom(p_webcombase_url);
		_initChildren();
	}

	/**
	 * return the Webcom URL.
	 */
	function _getWebcomBaseUrl() {
		if (_datastore) {
			return _datastore.toString();
		}
		return undefined;
	}

	/**
	 * Defines the datastore and reinit the children.
	 * @param {Webcom} p_datastore - A Webcom object which is the new data store
	 */
	function _setDatastore(p_datastore) {
		_datastore=p_datastore;
		_initChildren();
	}

	/**
	 * Returns the datastore
	 * @return {Webcom} - The data store as a Webcom
	 */
	function _getDatastore() {
		return _datastore;
	}


	/**
	 * Defines a new rooms node
	 * @param p_rooms - A node containing all the rooms
	 */
	function _setRooms(p_rooms) {
		_rooms=p_rooms;
	}

	/**
	 * Returns the root node of the rooms.
	 * @return - The node containing all the rooms list
	 */
	function _getRooms() {
		return _rooms;
	}

	/**
	 * Defines a new reach node
	 * @param p_reach - A node containing all the data about the reach service
	 */
	function _setReach(p_reach) {
		_reach=p_reach;
	}

	/**
	 * Returns the reach node of the rooms.
	 * @return - The node containing all the information about the reach service
	 */
	function _getReach() {
		return _reach;
	}

	/**
	 * Defines a new webrtc node
	 * @param p_webrtc - A node containing all the data about the WebRTC feature
	 */
	function _setWebrtc(p_webrtc) {
		_webrtc=p_webrtc;
	}

	/**
	 * Returns the WebRTC node
	 * @return - The node containig all the data about the WebRTC feature
	 */
	function _getWebrtc() {
		return _webrtc;
	}

	/**
	 * Defines a node containing the SIP phone numbers
	 * @param p_sipPhoneNumbers - The root node containing the SIP phone numbers
	 */
	function _setSipPhoneNumbers(p_sipPhoneNumbers) {
		_sipPhoneNumbers=p_sipPhoneNumbers;
	}

	/**
	 * Returns the root node containing the SIP phone numbers
	 * @return - The root node with the SIP numbers
	 */
	function _getSipPhoneNumbers() {
		return _sipPhoneNumbers;
	}

	_init();

	return {
		/**
		 * Defines the Webcom URL and reinit the children.
		 * @param {string} p_webcombase_url - The URL of the Webcom
		 */
		setWebcomBaseUrl : _setWebcomBaseUrl,
		/**
		 * return the Webcom URL.

		 */
		getWebcomBaseUrl : _getWebcomBaseUrl,
		/**
		 * Defines the datastore and reinit the children.
		 * @param {Webcom} p_datastore - A Webcom object which is the new data store
		 */
		setDatastore : _setDatastore,
		/**
		 * Returns the datastore
		 * @return {Webcom} - The data store as a Webcom
		 */
		getDatastore : _getDatastore,
		/**
		 * Defines a new rooms node
		 * @param p_rooms - A node containing all the rooms
		 */
		setRooms : _setRooms,
		/**
		 * Returns the root node of the rooms.
		 * @return - The node containing all the rooms list
		 */
		getRooms : _getRooms,
		/**
		 * Defines a new reach node
		 * @param p_reach - A node containing all the data about the reach service
		 */
		setReach : _setReach,
		/**
		 * Returns the reach node of the rooms.
		 * @return - The node containing all the information about the reach service
		 */
		getReach : _getReach,
		/**
		 * Defines a new webrtc node
		 * @param p_webrtc - A node containing all the data about the WebRTC feature
		 */
		setWebrtc : _setWebrtc,
		/**
		 * Returns the WebRTC node
		 * @return - The node containig all the data about the WebRTC feature
		 */
		getWebrtc : _getWebrtc,
		/**
		 * Defines a node containing the SIP phone numbers
		 * @param p_sipPhoneNumbers - The root node containing the SIP phone numbers
		 */
		setSipPhoneNumbers : _setSipPhoneNumbers,
		/**
		 * Returns the root node containing the SIP phone numbers
		 * @return - The root node with the SIP numbers
		 */
		getSipPhoneNumbers : _getSipPhoneNumbers
	};
}
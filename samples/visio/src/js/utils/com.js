/* global ComSDK */

let com,
	reach,
	rooms = {};

const NAMESPACE = 'comsdk';

function getUrl() {
	let url = window.location.origin;

	if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
		url = `${/http(?:s)?:\/\/[^:]*/.exec(url)[0]}:8000`;
	}
	if (typeof __WEBCOM_SERVER__ !== 'undefined') {
		url = __WEBCOM_SERVER__;
	}

	return url;
}

export function initComSDK(username) {
	com = new ComSDK(`${getUrl()}/base/${NAMESPACE}`);
	reach = com.Reach(username);
}

export function getReach() {
	return reach;
}

export function getRoom(username, roomname) {
	if (!rooms[roomname]) {
		rooms[roomname] = com.Room(username, roomname);
	}
	return rooms[roomname];
}
/**
 * @file reach.js - JS file to use for the reach service. This service allows to create a dedicated room for users so as to provide them a communication suite.
 * @author Webcom
 */

/*eslint complexity:1, max-statements: 1, max-len: 1*/

import utils from './utils';

/**
 * INVITE status : ongoing status
 * @constant
 * @type {string}
 */
const INVITATION_ONGOING = 'ONGOING';

/**
 * INVITE status : accepted status
 * @constant
 * @type {string}
 */
const INVITATION_ACCEPTED = 'ACCEPTED';

/**
 * INVITE status : refused status
 * @constant
 * @type {string}
 */
const INVITATION_REJECTED = 'REJECTED';

/**
 * INVITE status : canceled status
 * @constant
 * @type {string}
 */
const INVITATION_CANCELED = 'CANCELED';

/**
 * DEVICE_STATUS_CONNETED status : connected status
 * @constant
 * @type {string}
 */
const DEVICE_STATUS_CONNECTED = 'CONNECTED';

/**
 * ROOM_STATUS_OPEN status : room is open / active
 * @constant
 * @type {string}
 */
const ROOM_STATUS_OPEN = 'OPEN';



/**
 * @constructor
 * @description The reach object with its streams, flags and callbacks.
 * This object is used so as to make in connection several users. The room Invites management (accept / refuse / cancel), the user management (add / remove) and
 * the Invite are handled here.
 * @param {string} p_me - The user identifier
 */
const reach = function (p_me, datarefs) {

	/**
	 * @description The user identifier. This identifier will be use to create a dedicated node in the database for this user.
	 */
	const me = p_me;
	/**
	 * @description The data ref pointer for the reach part. It can be considered as a pointer to the database to use to navigate into it and modify its content.
	 */
	const dataref = datarefs.getReach();
	/**
	 * @description Callback handling the user adding
	 */
	let onUserAddedCb = null;
	/**
	 * @description Callback handling the user changes
	 */
	let onUserChangedCb = null;
	/**
	 * @description Callback handling the user removal
	 */
	let onUserRemovedCb = null;
	/**
	 * @description Callback for new Invite received
	 */
	let newInviteCb = null;
	/**
	 * @description Callback for Invite received changes
	 */
	let onRoomInviteChangedCb = null;

	/**
	 * @description An array containing all outgoing Invite
	 */
	let mOutgoingInvites = [];
	/**
	 * @description An array containing all incoming Invitation
	 */
	let mIncomingInvitation = [];
	/**
	 * @description the timeout to reject automatically the Invite
	 */
	let automaticRejectTimeOut = null;

	/**
	 * @description the reason to reject automatically the Invite
	 */
	let automaticRejectReason = null;

	/**
	 * @description the current device Id
	 */
	let mDeviceId = null;

	/**
	* Initialisation function. Updates the dataref about the user identifier in the user list :
	* it will disconnect and reconnect it.
	*/
	function init() {
		mDeviceId = dataref.child(`userList/${me}/connectedList/${utils.appInstanceId}`);
		mDeviceId.onDisconnect().remove();
		mDeviceId.child('status').set(DEVICE_STATUS_CONNECTED);
		try {
			const description = mDeviceId.child('description');
			if (utils.appInstanceId) {
				description.child('appInstanceId').set(utils.appInstanceId);
			}

			const
				navigatorData = {},
				properties = [
					'appCodeName',
					'appName',
					'appVersion',
					'buildID',
					'cookieEnabled',
					'language',
					'onLine',
					'oscpu',
					'platform',
					'product',
					'productSub',
					'securityPolicy',
					'userAgent',
					'vendor',
					'vendorSub'
				];
			properties.forEach((property) => {
				if(navigator[property]) {
					navigatorData[property] = navigator[property];
				}
			});
			description.child('navigator').set(navigatorData);

		} catch (e) {
			console.error(`(ReachSDK::reach::init)failed to get information about device. error=${e}`);
		}
		dataref.child(`userList/${me}/wasInsideReach`).set(true);
	}

	/**
	 * check if a user is connected
	 * @param {string} p_userId - the user Id
	 * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = connected / false = not connected
	 */
	function _isConnected(p_userId,p_cb) {
		console.log(`(ReachSDK::reach::_isConnected)userId: ${p_userId}`);
		dataref.child(`userList/${p_userId}/connectedList`).once('value', (snapshot) => {
			// onUserConnectedCb. User is connected if snapshot value is not null
			if (p_cb && typeof p_cb == 'function') {
				p_cb(snapshot.val() !== null);
			}
		});
	}

	/**
	 * check if a user is register
	 * @param {string} p_userId - the user Id
	 * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = registered / false = not registered
	 */
	function _isRegistered(p_userId,p_cb) {
		console.log(`(ReachSDK::reach::_isRegistered)userId: ${p_userId}`);
		dataref.child(`userList/${p_userId}/wasInsideReach`).once('value', (snapshot) => {
			// onUserRegisteredCb. User is registered if snapshot value is not null
			if (p_cb && typeof p_cb == 'function') {
				p_cb(snapshot.val() !== null);
			}
		});
	}

	/**
	 * set the device status (DEVICE_STATUS_CONNECTED)
	 * @param {string} p_status - the new status
	 */
	function _setConnectedStatus(p_status) {
		if (mDeviceId) {
			mDeviceId.child('status').set(p_status);
		}
	}

	/**
	 * Defines the callback to trigger when a new user is added
	 * @param {function} p_cb - The callback to use
	 */
	function _setOnUserAdded(p_cb) {
		if (onUserAddedCb) {
			dataref.child('userList').off('child_added', onUserAddedCb);
			onUserAddedCb = null;
		}
		if (p_cb && typeof p_cb == 'function') {
			onUserAddedCb = function(snapshot) {
				console.log(`(ReachSDK::reach::onUserAddedCb) ${snapshot.name()}=${JSON.stringify(snapshot.val())}`);
				const obj = {};
				obj[snapshot.name()] = snapshot.val();
				p_cb(obj);
			};
			dataref.child('userList').on('child_added', onUserAddedCb);
		}
	}
	/**
	 * Defines the callback to trigger when the user has changed
	 * @param {function} p_cb - The callback to use
	 */
	function _setOnUserChanged(p_cb) {
		if (onUserChangedCb) {
			dataref.child('userList').off('child_changed', onUserChangedCb);
			onUserChangedCb = null;
		}
		if (p_cb && typeof p_cb == 'function') {
			onUserChangedCb = function(snapshot) {
				console.log(`(ReachSDK::reach::onUserChangedCb) ${snapshot.name()}=${JSON.stringify(snapshot.val())}`);
				const obj = {};
				obj[snapshot.name()]=snapshot.val();
				p_cb(obj);
			};
			dataref.child('userList').on('child_changed', onUserChangedCb);
		}

	}
	/**
	 * Defines the callback to trigger when a user has been removed.
	 * @param {function} p_cb - The callback to use
	 */
	function _setOnUserRemoved(p_cb) {
		if (onUserRemovedCb) {
			dataref.child('userList').off('child_removed',onUserRemovedCb);
			onUserRemovedCb = null;
		}
		if (p_cb && typeof p_cb == 'function') {
			onUserRemovedCb = function(snapshot) {
				console.log(`(ReachSDK::reach::onUserRemovedCb) ${snapshot.name()}=${JSON.stringify(snapshot.val())}`);
				const obj = {};
				obj[snapshot.name()]=snapshot.val();
				p_cb(obj);
			};
			dataref.child('userList').on('child_removed',onUserRemovedCb);
		}

	}

	/**
	 * Defines the callback to trigger when a room Invite has been received.
	 * Other callbacks will be triggered about Invite lists.
	 * @param {function} p_onNewRoomInviteCb - The callback triggers when a Invite is received (status = on going)
	 */
	function _setOnNewRoomInvitation(p_onNewRoomInviteCb) {

		if (newInviteCb) {
			dataref.child(`invitationList/${me}`).off('child_added',newInviteCb);
			newInviteCb = null;
		}

		if (p_onNewRoomInviteCb && typeof p_onNewRoomInviteCb == 'function') {
			newInviteCb = (snapshot) => {
				if (snapshot.val().status=== INVITATION_ONGOING) {
					console.log(`(ReachSDK::reach::_setOnNewRoomInvitation)new Invite received,id) ${snapshot.name()},content=${JSON.stringify(snapshot.val())}`);
					const invitationId = snapshot.name();
					if (!mIncomingInvitation) {
						mIncomingInvitation = [];
					}
					if (mIncomingInvitation[invitationId]) {
						if (mIncomingInvitation[invitationId].timeout) {
							clearTimeout(mIncomingInvitation[invitationId].timeout);
						}
						delete mIncomingInvitation[invitationId];
					}
					mIncomingInvitation[invitationId]={};

					const obj = {};
					obj[invitationId] = snapshot.val();
					p_onNewRoomInviteCb(obj);

					const invitationRef = dataref.child(`invitationList/${me}/${invitationId}`);

					if (automaticRejectTimeOut) {
						mIncomingInvitation[invitationId].timeout = setTimeout(() => {
							if (automaticRejectTimeOut) {
								console.log(`(ReachSDK::reach::_setOnNewRoomInvitation)automatic reject of Invite received=${JSON.stringify(snapshot.val())}`);
								invitationRef.onDisconnect().cancel();
								if (automaticRejectReason) {
									invitationRef.update({
										timestamp_end: Webcom.ServerValue.TIMESTAMP,
										status: INVITATION_REJECTED,
										status_info: automaticRejectReason
									});
								} else {
									invitationRef.update({
										timestamp_end: Webcom.ServerValue.TIMESTAMP,
										status: INVITATION_REJECTED
									});
								}
							}
						}, automaticRejectTimeOut);
					}

					invitationRef.once('child_changed', (snapshot) => {
						if(snapshot && snapshot.name() === 'status') {
							snapshot.ref().parent().once('value', (snapshot2) => {
								let cb_invitationId,cb_obj_content;
								if (snapshot2) {
									cb_invitationId = snapshot.ref().parent().name();
									cb_obj_content= snapshot2.val();
									const cb_obj = {};
									cb_obj[cb_invitationId] = cb_obj_content;
									if (mIncomingInvitation && mIncomingInvitation[cb_invitationId] && mIncomingInvitation[cb_invitationId].timeout) {
										clearTimeout(mIncomingInvitation[cb_invitationId].timeout);
									}
									console.log(`(ReachSDK::reach::_setOnNewRoomInvitation)Invite changed,id=) ${cb_invitationId}, new content=${JSON.stringify(cb_obj_content)}`);
									if (cb_obj && onRoomInviteChangedCb ) {
										onRoomInviteChangedCb(cb_obj);
									}
									delete mIncomingInvitation[cb_invitationId];
								}
							});
						}
					});

				}
			};
			dataref.child(`invitationList/${me}`).on('child_added', newInviteCb);
		}
	}

	/**
	 * Defines the callback to trigger when a room Invite has been changed.
	 * Other callbacks will be triggered about Invite lists.
	 * @param {function} p_onRoomInviteChangedCb - The callback triggers when the satus on the Invite received has changed (status = accepted/rejected/canceled)
	 */
	function _setOnRoomInvitationChanged(p_onRoomInviteChangedCb) {

		if (onRoomInviteChangedCb) {
			onRoomInviteChangedCb = null;
		}

		if (p_onRoomInviteChangedCb && typeof p_onRoomInviteChangedCb == 'function') {
			onRoomInviteChangedCb = p_onRoomInviteChangedCb;
		}
	}

	/**
	 * Defines a timeout to reject automatically the incoming Invite
	 * @param {integer} p_timeout - The delay
	 * @param {string} p_reason - optional info about the reject
	 */
	function _setNewRoomInvitationTimeout(p_timeout,p_reason) {
		if (automaticRejectTimeOut) {
			automaticRejectTimeOut = null;
		}
		if (automaticRejectReason) {
			automaticRejectReason = null;
		}

		if (p_timeout	&& p_timeout === parseInt(p_timeout, 10) && p_timeout>0) {
			console.log(`(ReachSDK::reach::_setNewRoomInvitationTimeout)timeout=${p_timeout}`);
			automaticRejectTimeOut=p_timeout;
		}
		if (p_reason) {
			automaticRejectReason=p_reason;
		}
	}


	/**
	 * test if p_user  is already present in the participant list of the room p_roomId
	 *
	 * @param {string} p_roomId - The room used as the name of a branch is the database
	 * @param {string} p_user - The user Id
	 * @param {function} p_cb - the callback function to tigger to get the result. It will containts a parameter = true is already present, false either.
	 */
	function _isUserPresentInRoom(p_roomId,p_user,p_cb) {
		console.log(`(ReachSDK::reach::_isUserPresentInRoom)p_roomId=${p_roomId} p_user=${p_user}`);
		if (!(p_roomId && typeof p_roomId == 'string')) {
			console.error('(ReachSDK::reach::_isUserPresentInRoom)parameter p_roomid is incorrect. Expecting non empty string');
			return;
		}
		if (!(p_user && typeof p_user == 'string')) {
			console.error('(ReachSDK::reach::_isUserPresentInRoom)parameter p_user is incorrect. Expecting non empty string');
			return;
		}
		if (!(p_cb && typeof p_cb == 'function')) {
			console.error('(ReachSDK::reach::_isUserPresentInRoom)parameter p_cb is incorrect. if defined, expecting a function');
			return;
		}
		datarefs.getRooms().child(`${p_roomId}/participantList/${p_user}/wasInsideRoom`).once('value', (snapshot) => {
			const wasPresent = (snapshot.val() !== null);
			console.log(`(ReachSDK::reach::_isUserPresentInRoom)p_roomId=${p_roomId},p_user=${p_user},result=${wasPresent}`);
			p_cb(wasPresent, p_roomId, p_user);
		});

	}


	/**
	 * Cancels the Invite
	 * @param {string} p_roomId - The room Id of the Invite
	 * @param {array[sting]} p_guestIds - optional : An array possessing the identifiers of the invitees. (if undefined ,  all invitee will have their Invite canceled)
	 * @param {string} inviteId - The invite identifier
	 * @param {function} p_cb - The callback triggered when the operation is complete . this callback will containt as parameter the related guestId
	 */
	function _cancelInvitation(p_roomId, p_guestIds, p_cb) {
		if (!(p_roomId && typeof p_roomId == 'string')) {
			console.error('(ReachSDK::reach::_cancelInvitation)parameter p_roomid is incorrect. Expecting non empty string');
			return;
		}
		if (p_guestIds && ! p_guestIds instanceof Array ) {
			console.error('(ReachSDK::reach::_cancelInvitation)parameter p_guestIds is incorrect. Expecting an Array');
			return;
		}
		console.log(` (ReachSDK::reach::_cancelInvitation)p_roomId=${p_roomId}, p_guestIds=${JSON.stringify(p_guestIds)}`);
		if (mOutgoingInvites && mOutgoingInvites[p_roomId]) {
			if (p_guestIds) {
				p_guestIds.forEach((guestId, i) => {
					if (!(guestId && typeof guestId == 'string')) {
						console.error(`(ReachSDK::reach::inviteToRoom)parameter p_guestIds[${i}] is incorrect. Expecting non empty string`);
					} else if (mOutgoingInvites[p_roomId][guestId]) {
						if (mOutgoingInvites[p_roomId][guestId].InviteDataref) {
							mOutgoingInvites[p_roomId][guestId].InviteDataref.onDisconnect().cancel();
							if (mOutgoingInvites[p_roomId][guestId].InviteChangedCb && typeof mOutgoingInvites[p_roomId][guestId].InviteChangedCb == 'function') {
								mOutgoingInvites[p_roomId][guestId].InviteDataref.off('child_changed', mOutgoingInvites[p_roomId][guestId].InviteChangedCb);
							}

							mOutgoingInvites[p_roomId][guestId].InviteDataref.once('value', (dataSnapshot) => {
								let cb_status, cb_guestId, cb_roomId;
								if (dataSnapshot && dataSnapshot.val()) {
									cb_status= dataSnapshot.val().status;
									cb_roomId= dataSnapshot.val().room;
									cb_guestId= dataSnapshot.ref().parent().name();
									if (cb_status && cb_status===INVITATION_ONGOING) {
										mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.update({
											timestamp_end: Webcom.ServerValue.TIMESTAMP,
											status: INVITATION_CANCELED
										});
										if (mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb && typeof mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb == 'function') {
											mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb(cb_roomId, cb_guestId, INVITATION_CANCELED);
										}
										console.log(`(ReachSDK::reach::_cancelInvitation)deleting Invite to room ${cb_roomId} for invitee ${cb_guestId}`);
									} else {
										console.warn(`(ReachSDK::reach::_cancelInvitation)cannot delete intivation to room ${cb_roomId} for guest ${cb_guestId} Invitation has been removed/rejected/accepted`);
									}
								}
								delete mOutgoingInvites[p_roomId][guestId];
								if (p_cb && typeof p_cb=='function') {
									p_cb(guestId);
								}
							});

						} else {
							delete mOutgoingInvites[p_roomId][guestId];
							if (p_cb && typeof p_cb=='function') {
								p_cb(guestId);
							}
						}

					} else {
						if (p_cb && typeof p_cb=='function') {
							p_cb(guestId);
						}
					}
				});

			} else {
				Object.keys(mOutgoingInvites[p_roomId]).forEach((invitee) => {
					_cancelInvitation(p_roomId, [invitee], p_cb);
				});
			}
		} else {
			console.warn(`(ReachSDK::reach::_cancelInvitation) Invite to room ${p_roomId} not found`);
		}
	}

	/**
	 * Gather the invitees to the room.
	 * Defines a callback to trigger for Invite changes, and calls callbacks for room invite acceptation or refuse.
	 * For each invitee a node is created in the database about the Invite list.
	 * In addtion, a node is created too for each invitee about the participantList.
	 * @param {string} p_roomId - The room used as the name of a branch is the database
	 * @param {array[sting]} p_guestIds - An array possessing the identifiers of the invitees
	 * @param {string} p_topic - custom message for invitation
	 * @param {function} p_statusChangedCb - optional : callback function when an invitee accepts/rejected/canceled the Invite
	 */
	function _inviteToRoom(p_roomId, p_guestIds, p_topic,p_statusChangedCb) {
		if (!(p_roomId && typeof p_roomId == 'string')) {
			console.error('(ReachSDK::reach::inviteToRoom)parameter p_roomid is incorrect. Expecting non empty string');
			return;
		}
		if (!(p_topic && typeof p_topic == 'string')) {
			console.error('(ReachSDK::reach::inviteToRoom)parameter p_topic is incorrect. Expecting non empty string');
			return;
		}
		if (p_statusChangedCb && typeof p_statusChangedCb != 'function') {
			console.warn('(ReachSDK::reach::inviteToRoom)parameter p_statusChangedCb is incorrect. if defined, expecting a function');
		}
		if (!(p_guestIds && p_guestIds instanceof Array )) {
			console.error('(ReachSDK::reach::inviteToRoom)parameter p_guestIds is incorrect. Expecting an Array');
			return;
		}
		datarefs.getRooms().child(p_roomId).child('commonDataList').update({
			status:ROOM_STATUS_OPEN,
			owner:me
		});


		const _isUserPresentInRoomCb = (isAlreadyPresent, p_roomId2, p_guestId2) => {
			if (!isAlreadyPresent) {
				datarefs.getRooms().child(`${p_roomId2}/participantList/${p_guestId2}`).update({
					connected: false,
					wasInsideRoom: false
				});
			}
		};

		const _InviteChangedCb = (snapshot) => {
			console.log('(ReachSDK::reach::inviteToRoom::_InviteChangedCb)');
			if(snapshot && snapshot.name()==='status') {
				const cb_guestId2 = snapshot.ref().parent().parent().name();
				console.log(`(ReachSDK::reach::inviteToRoom::_InviteChangedCb)cb_guestId2=${cb_guestId2}`);
				if (mOutgoingInvites && mOutgoingInvites[p_roomId] && mOutgoingInvites[p_roomId][cb_guestId2] && mOutgoingInvites[p_roomId][cb_guestId2].InviteChangedCb ) {
					mOutgoingInvites[p_roomId][cb_guestId2].InviteDataref.off('child_changed', mOutgoingInvites[p_roomId][cb_guestId2].InviteChangedCb);
				}
				snapshot.ref().parent().once('value',(snapshot2) => {
					let cb_status, cb_guestId, cb_roomId, cb_status_info;
					if (snapshot2) {
						cb_status= snapshot2.val().status;
						cb_roomId= snapshot2.val().room;
						cb_status_info= snapshot2.val().status_info;
						cb_guestId= snapshot2.ref().parent().name();
						console.log(`(ReachSDK::reach::inviteToRoom::_InviteChangedCb)roomId=${cb_roomId} invitee=${cb_guestId} new invitation status=${cb_status} status info=${cb_status_info}`);
						if (mOutgoingInvites && mOutgoingInvites[cb_roomId] && mOutgoingInvites[cb_roomId][cb_guestId] && mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref) {
							mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.onDisconnect().cancel();
							//if (mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb)
							//	mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.parent().off("child_removed",mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb);
							if (mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb && typeof mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb == 'function') {
								mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb(cb_roomId,cb_guestId,cb_status,cb_status_info);
							} else {
								console.warn('(ReachSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve mathing p_statusChangedCb');
							}
							delete mOutgoingInvites[cb_roomId][cb_guestId];
						} else {
							console.warn('(ReachSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve mathing mOutgoingInvite');
						}
					} else {
						console.warn('(ReachSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve invitation');
					}
				});
			}
		};

		p_guestIds.forEach((mGuestId, i) => {
			if (!(mGuestId && typeof mGuestId == 'string')) {
				console.error(`(ReachSDK::reach::inviteToRoom)parameter p_guestIds[${i}] is incorrect. Expecting non empty string`);
			} else {
				console.log(`(ReachSDK::reach::inviteToRoom)roomId=${p_roomId} invitee=${mGuestId.toString()}`);

				if (mOutgoingInvites[p_roomId] && mOutgoingInvites[p_roomId][mGuestId]) {
					//invitation is already existing -> cancel it
					//if (mOutgoingInvites[p_roomId][mGuestId].InviteDataref && mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb)  mOutgoingInvites[p_roomId][mGuestId].InviteDataref.off("child_removed",mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb);
					//if (mOutgoingInvites[p_roomId][mGuestId].InviteDataref && mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb) mOutgoingInvites[p_roomId][mGuestId].InviteDataref.off("child_changed",mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb);
					_cancelInvitation(p_roomId, [mGuestId], (p_guestId) => {
						if (p_guestId && p_guestId === mGuestId) {
							_inviteToRoom(p_roomId, [p_guestId], p_topic,p_statusChangedCb);
						}
					});
					return;
				}

				if (!mOutgoingInvites[p_roomId]) {
					mOutgoingInvites[p_roomId] = [];
				}
				//if (!mOutgoingInvites[p_roomId][mGuestId]) {
				mOutgoingInvites[p_roomId][mGuestId] = {};
				//}

				_isUserPresentInRoom(p_roomId, mGuestId, _isUserPresentInRoomCb);

				mOutgoingInvites[p_roomId][mGuestId].InviteDataref = dataref.child('invitationList').child(mGuestId).push({
					from:me,
					room:p_roomId,
					timestamp_creation:Webcom.ServerValue.TIMESTAMP,
					topic:p_topic,
					status:INVITATION_ONGOING
				});
				console.log(`(ReachSDK::reach::inviteToRoom)InviteDataref=${mOutgoingInvites[p_roomId][mGuestId].InviteDataref.toString()}`);

				//mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb = _InvitationRemoveCb;
				mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb = _InviteChangedCb;
				mOutgoingInvites[p_roomId][mGuestId].InviteDataref.on('child_changed', mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb);
				//mOutgoingInvites[p_roomId][mGuestId].InviteDataref.parent().on("child_removed",mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb);
				mOutgoingInvites[p_roomId][mGuestId].statusChangedCb = p_statusChangedCb;

				// canceled Invite on disconnection
				mOutgoingInvites[p_roomId][mGuestId].InviteDataref.onDisconnect().update({
					timestamp_end: Webcom.ServerValue.TIMESTAMP,
					status: INVITATION_CANCELED
				});
			}
		});
	}


	/**
	 * Makes an invite accepted, and defines the "accepted" flag of this invite at true in the database.
	 * @param p_invitation -
	 */
	function _acceptInvitation(p_invitation) {
		const inviteId = Object.keys(p_invitation)[0];
		if (!inviteId) {
			console.error('(ReachSDK::reach::_acceptInvitation)parameter p_invitation is incorrect. cannot get invitation Id');
			return;
		}
		if (!p_invitation[inviteId]) {
			console.error('(ReachSDK::reach::_acceptInvitation)parameter p_invitation is incorrect. cannot get invitation data');
			return;
		}

		dataref.child(`invitationList/${me}/${inviteId}`).once('value', (dataSnapshot) => {
			let cb_status,
				cb_guestId,
				cb_invitationId;

			if (dataSnapshot && dataSnapshot.val()) {
				cb_invitationId = dataSnapshot.name();
				cb_status = dataSnapshot.val().status;
				cb_guestId = dataSnapshot.ref().parent().name();
				if (cb_status && cb_status===INVITATION_ONGOING) {
					console.log(`(ReachSDK::reach::_acceptInvitation)inviteId=${inviteId},data=${JSON.stringify(p_invitation[inviteId])}`);
					dataref.child(`invitationList/${cb_guestId}/${cb_invitationId}`).update({
						timestamp_end: Webcom.ServerValue.TIMESTAMP,
						status: INVITATION_ACCEPTED
					});
				} else {
					console.warn(`(ReachSDK::reach::_acceptInvitation)inviteId=${cb_invitationId},data=${JSON.stringify(p_invitation[inviteId])}, cannot be accepted. It has been removed or canceled`);
				}
			}
		});
	}

	/**
	 * Refuses the invite and set the "accepted" flag of this invite in the database to false
	 * @param p_invitation - The invite data
	 * @param {string} p_reason - optional info about the reject
	 */
	function _rejectInvitation(p_invitation,p_reason) {
		const inviteId = Object.keys(p_invitation)[0];
		if (!inviteId) {
			console.error('(ReachSDK::reach::_rejectInvitation)parameter p_invitation is incorrect. cannot get invitation Id');
			return;
		}
		if (!p_invitation[inviteId]) {
			console.error('(ReachSDK::reach::_rejectInvitation)parameter p_invitation is incorrect. cannot get invitation data');
			return;
		}
		dataref.child(`invitationList/${me}/${inviteId}`).once('value', (dataSnapshot) => {
			let cb_status,cb_guestId,cb_invitationId;
			if (dataSnapshot && dataSnapshot.val()) {
				cb_invitationId = dataSnapshot.name();
				cb_status = dataSnapshot.val().status;
				cb_guestId = dataSnapshot.ref().parent().name();
				if (cb_status && cb_status === INVITATION_ONGOING) {
					console.log(`(ReachSDK::reach::_rejectInvitation)inviteId=${inviteId},data=${JSON.stringify(p_invitation[inviteId])}`);
					if (p_reason) {
						dataref.child(`invitationList/${cb_guestId}/${cb_invitationId}`).update({
							timestamp_end: Webcom.ServerValue.TIMESTAMP,
							status_info: p_reason,
							status: INVITATION_REJECTED
						});
					} else {
						dataref.child(`invitationList/${cb_guestId}/${cb_invitationId}`).update({
							timestamp_end: Webcom.ServerValue.TIMESTAMP,
							status: INVITATION_REJECTED
						});
					}
				} else {
					console.warn(`(ReachSDK::reach::_rejectInvitation)inviteId=${cb_invitationId},data=${JSON.stringify(p_invitation[inviteId])}, cannot be rejected. It has been removed or canceled`);
				}
			}
		});
	}

	/**
	 * check if the room corresponding to the invitation is active
	 * @param p_invitation - The invitation Data
	 * @param p_cb - The callback to trigger to get the result. this callback will contains the parameter true is the room is active
	 */
	function _isRoomActive(p_invitation,p_cb) {
		if (p_invitation && p_cb && typeof p_cb == 'function') {
			const inviteId = Object.keys(p_invitation)[0];
			console.log(`(ReachSDK::reach::_isRoomActive)inviteId=${inviteId}`);
			const roomId = p_invitation[inviteId].room;

			datarefs.getRooms().child(`${roomId}/commonDataList/status`).once('value', (snapshot) => {
				const opened = snapshot && snapshot.val() && snapshot.val() === ROOM_STATUS_OPEN;
				console.log(`(ReachSDK::reach::_isRoomActive)inviteId=${inviteId} result=${opened}`);
				p_cb(opened);
			});
		}
	}

	/**
	 * move all the non active invitations processed of an user to the invitation List History:
	 * All invitations with status Canceled or Rejected will be archived
	 * All invitation with status Ongoing or Accepted Will be archived if the corresponding room is closed
	 * If an invitation with status "Ongoing" is archived, its status will be set to canceled
	 * @param p_userId - The user Id
	 * @param p_cb - This callback is trigger when archive is complete
	 */
	function _archiveInvitations(p_userId, p_cb) {
		console.log(`(ReachSDK::reach::_archiveInvitations)userId=${p_userId}`);
		dataref.child(`invitationList/${me}`).once('value', (snapshot) => {
			if (snapshot && snapshot.hasChildren()) {
				const nbChildren = snapshot.numChildren();
				let nbChildrenProcessed = 0;
				snapshot.forEach((childSnapshot) => {
					if (childSnapshot && childSnapshot.val()) {
						console.log(`(ReachSDK::reach::_archiveInvitations)userId=${p_userId} inviteId=${childSnapshot.name()}`);
						if (childSnapshot.val().status === INVITATION_REJECTED || childSnapshot.val().status === INVITATION_CANCELED ) {
							dataref.child(`invitationListHistory/${p_userId}/${childSnapshot.name()}`).update(childSnapshot.val());
							childSnapshot.ref().remove();
							nbChildrenProcessed++;
							if (nbChildrenProcessed>=nbChildren && p_cb && typeof p_cb == 'function') {
								p_cb();
							}
						} else {
							const inviteData = {};
							inviteData[childSnapshot.name()] = childSnapshot.val();
							_isRoomActive(inviteData, (isActive) => {
								if (isActive) {
									nbChildrenProcessed++;
									if (nbChildrenProcessed>=nbChildren && p_cb && typeof p_cb == 'function') {
										p_cb();
									}
								} else {
									if (childSnapshot.val().status===INVITATION_ONGOING) {
										const newValue = childSnapshot.val();
										newValue.status = INVITATION_CANCELED;
										dataref.child(`invitationListHistory/${p_userId}/${childSnapshot.name()}`).set(newValue);
									} else {
										dataref.child(`invitationListHistory/${p_userId}/${childSnapshot.name()}`).set(childSnapshot.val());
									}
									childSnapshot.ref().remove();
									nbChildrenProcessed++;
									if (nbChildrenProcessed>=nbChildren && p_cb && typeof p_cb == 'function') {
										p_cb();
									}
								}
							});
						}
					} else {
						if (p_cb && typeof p_cb == 'function') {
							p_cb();
						}
					}
				});

			} else {
				if (p_cb && typeof p_cb == 'function') {
					p_cb();
				}
			}

		});
	}

	/**
	 * Close the reach service,
	 * disables and deletes any listeners/callback defined.
	 * cancel all outgoing invite not already processed
	 * do not impact incoming invite
	 */
	function _close() {
		console.log('(ReachSDK::reach::_close)');

		if (newInviteCb) {
			dataref.child('invitationList').child(me).off('child_added',newInviteCb);
			newInviteCb = null;
		}
//		if (onRoomInviteChangedCb) {
//			dataref.child("invitationList").child(me).off("child_changed",InviteChangedCb);
//			onRoomInviteChangedCb = null;
//		}
//
//		if (mTimeoutOnNewInviteCb) {
//			dataref.child("invitationList").child(me).off("child_added",mTimeoutOnNewInviteCb);
//			mTimeoutOnNewInviteCb = null;
//		}
//		if (mTimeoutOnInviteChangedCb) {
//			dataref.child("invitationList").child(me).off("child_changed",mTimeoutOnInviteChangedCb);
//			mTimeoutOnInviteChangedCb = null;
//		}

		if (onUserAddedCb) {
			dataref.child('userList').off('child_added', onUserAddedCb);
			onUserAddedCb = null;
		}
		if (onUserChangedCb) {
			dataref.child('userList').off('child_changed', onUserChangedCb);
			onUserChangedCb = null;
		}
		if (onUserRemovedCb) {
			dataref.child('userList').off('child_removed', onUserRemovedCb);
			onUserRemovedCb = null;
		}

		if (mOutgoingInvites) {
			mOutgoingInvites.forEach((roomId) => {
				mOutgoingInvites[roomId].forEach((invitee) => {
					if (invitee.InviteDataref) {
						invitee.InviteDataref.onDisconnect().cancel();
						invitee.InviteDataref.update({
							status: INVITATION_CANCELED,
							timestamp_end: Webcom.ServerValue.TIMESTAMP
						});
					}
				});
			});
			mOutgoingInvites = [];
		}

		if (automaticRejectTimeOut) {
			automaticRejectTimeOut = null;
		}
		if (automaticRejectReason) {
			automaticRejectReason = null;
		}

		if (mDeviceId) {
			mDeviceId.remove();
			mDeviceId = null;
		}

	}
	/**
	 * test if userId is present & connected in the participant list of the room roomId
	 *
	 * @param {string} roomId - The room used as the name of a branch in the database
	 * @param {string} userId - The user Id
	 * @param {function} callback - the callback function to tigger to get the result. It will containts a parameter = true is already present & connected, false either.
	 */
	function _isUserPresent(roomId,userId,callback){
		console.log(`(ReachSDK::reach::_isUserPresent) userId=${userId}`);
		if (!(userId && typeof userId == 'string')) {
			console.error('(ReachSDK::reach::_isUserPresent)parameter userId is incorrect. Expecting non empty string');
			return;
		}

		if (!(callback && typeof callback == 'function')) {
			console.error('(ReachSDK::reach::_isUserPresent)parameter callback is incorrect. if defined, expecting a function');
			return;
		}
		const participantListRef = datarefs.getRooms().child(`${roomId}/participantList`);

		participantListRef.child(`${userId}/connected`).once('value', (snapshot) => {
			const isConnected = snapshot.val();
			console.log(isConnected);
			console.log(`(ReachSDK::reach::_isUserPresent)userId=${userId},result=${isConnected}`);
			if(isConnected===null){
				callback(false);
			}
			else{
				callback(isConnected);
			}
		});
	}

	init();
	return {
		/**
		 * Returns the user identifier used in the database. This value
		 * identifies the user if the Webcombase.
		 * @return {string} - The user ID
		 */
		getMe: () => {
			return me;
		},
		/**
		 * check if a user is connected
		 * @param {string} p_userId - the user Id
		 * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = connected / false = not connected
		 */
		isConnected: _isConnected,
		/**
		 * check if a user is register
		 * @param {string} p_userId - the user Id
		 * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = registered / false = not registered
		 */
		isRegistered: _isRegistered,
		/**
		 * set the device status (DEVICE_STATUS_CONNECTED)
		 * @param {string} status - the new status
		 */
		setConnectedStatus: _setConnectedStatus,
		/**
		 * Defines the callback to trigger when a new user is added
		 * @param {function} p_cb - The callback to use
		 */
		setOnUserAdded: _setOnUserAdded,
		/**
		 * Defines the callback to trigger when the user has changed
		 * @param {function} p_cb - The callback to use
		 */
		setOnUserChanged: _setOnUserChanged,
		/**
		 * Defines the callback to trigger when a user has been removed.
		 * @param {function} p_cb - The callback to use
		 */
		setOnUserRemoved: _setOnUserRemoved,
		/**
		 * Gather the invitees to the room.
		 * Defines a callback to trigger for Invite changes, and calls callbacks for room invite acceptation or refuse.
		 * For each invitee a node is created in the database about the Invite list.
		 * In addtion, a node is created too for each invitee about the participantList.
		 * @param {string} p_roomId - The room used as the name of a branch is the database
		 * @param {array} p_guestIds - An array possessing the identifiers of the invitees
		 * @param {string} p_topic - custom message for the invitation
		 * @param {function} p_statusChangedCb - optional : callback function when an invitee accepts/rejected/canceled the Invite
		 */
		inviteToRoom: _inviteToRoom,
		/**
		 * Cancels the Invite
		 * @param {string} p_roomId - The room Id of the Invite
		 * @param {string} p_guestIds - optional : An array possessing the identifiers of the invitees. (if undefined ,  all invitee will have their Invite canceled)
		 * @param {string} inviteId - The invite identifier
		 */
		cancelInvitation: _cancelInvitation,
		/**
		 * Defines the callback to trigger when a room invite has been received.
		 * Other callbacks will be triggered about Invite lists.
		 * @param {function} onNewRoomInvitationCb - The callback triggers when a Invite is received (status = on going)
		 */
		setOnNewRoomInvitation: _setOnNewRoomInvitation,
		/**
		 * Defines the callback to trigger when a room invite has been received.
		 * Other callbacks will be triggered about Invite lists.
		 * @param {function} onRoomInvitationChangedCb - The callback triggers when the satus on the Invite received has changed (status = accepted/rejected/canceled)
		 */
		setOnRoomInvitationChanged: _setOnRoomInvitationChanged,
		/**
		 * Defines a timeout to reject automatically the Invite
		 * Other callbacks will be triggered about Invite lists.
		 * @param {integer} p_timeout - The delay
		 * @param {string} p_reason - optional info about the reject
		 */
		setNewRoomInvitationTimeout: _setNewRoomInvitationTimeout,

		/**
		 * move all the non active invitations processed of an user to the invitation List History:
		 * All invitations with status Canceled or Rejected will be archived
		 * All invitation with status Ongoing or Accepted Will be archived if the corresponding room is closed
		 * If an invitation with status "Ongoing" is archived, its status will be set to canceled
		 * @param p_cb - This callback is trigger when archive is complete
		 */
		archiveMyInvitations: (p_cb) => {
			return _archiveInvitations(me, p_cb);
		},
		/**
		 * Makes an invite accepted, and defines the "accepted" flag of this invite at true in the database.
		 * @param p_invitationData -
		 */
		acceptInvitation: _acceptInvitation,

		/**
		 * Refuses the invite and set the "accepted" flag of this invite in the database to false
		 * @param p_invitationData - The invite data
		 * @param {string} p_reason - optional info about the reject
		 */
		rejectInvitation: _rejectInvitation,

		/**
		 * Defines a callback for a particular event
		 * @param {string} p_evt - To choose between "roomInvite", "roomInviteAccepted", "roomInviteCanceled", "user" and "userRemoval"
		 * @param {function} p_cb - The callback to rise
		 */
		on: (p_evt, p_cb) => {
			switch (p_evt) {
			case 'newRoomInvitation':
				_setOnNewRoomInvitation(p_cb);
				break;
			case 'roomInvitationChanged':
				_setOnRoomInvitationChanged(p_cb);
				break;
			case 'userAdded':
				_setOnUserAdded(p_cb);
				break;
			case 'userChanged':
				_setOnUserChanged(p_cb);
				break;
			case 'userRemoved':
				_setOnUserRemoved(p_cb);
				break;
			default:
				console.error('reach.set: no such event');
				return -1;
			}
		},
		/**
		 * Closes and removes callbacks
		 */
		close: _close,
		/**
		 * checks if there's a user with the same ID/name already present in the room
		 */
		isUserPresent:_isUserPresent
	};
};

export default reach;
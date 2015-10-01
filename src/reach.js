/**
 * @file reach.js - JS file to use for the reach service. This service allows to create a dedicated room for users so as to provide them a communication suite.
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc  : 1.5.0
 *
 * Available elements:
 <ul>
 <li>
 getMe()
 </li>
 <li>
 isConnected(p_userId,p_cb)
 </li>

 <li>
 setOnUserAdded(p_cb)
 </li>
 <li>
 setOnUserChanged(p_cb)
 </li>
 <li>
 setOnUserRemoved(p_cb)
 </li>
 <li>
 inviteToRoom(p_roomId, p_guestIds, p_topic,p_statusChangedCb)
 </li>
 <li>
 setOnNewRoomInvitation(p_onNewRoomInviteCb)
 </li>
 <li>
 setOnRoomInvitationChanged(p_onRoomInviteChangedCb)
 </li>
 <li>
 setNewRoomInvitationTimeout(p_timeout,p_reason)
 </li>
 <li>
 archiveMyInvitations(p_cb)
 </li>
 <li>
 acceptInvitation(p_invitationData)
 </li>
 <li>
 rejectInvitation(p_invitationData,p_reason)
 </li>
 <li>
 cancelInvitation(p_roomId, p_guestIds)
 </li>
 <li>
 close()
 </li>
 <li>
 on(p_evt, p_cb)
 </li>
 </ul>
 */

/**
 * @constructor
 * @description The reach object with its streams, flags and callbacks.
 * This object is used so as to make in connection several users. The room Invites management (accept / refuse / cancel), the user management (add / remove) and
 * the Invite are handled here.
 * @param {string} p_me - The user identifier
 */
var reach = function (p_me) {

    /**
     * @description The user identifier. This identifier will be use to create a dedicated node in the database for this user.
     */
    var me = p_me;
    /**
     * @description The data ref pointer for the reach part. It can be considered as a pointer to the database to use to navigate into it and modify its content.
     */
    var dataref = datarefs.getReach();
    /**
     * @description Callback handling the user adding
     */
    var onUserAddedCb = null;
    /**
     * @description Callback handling the user changes
     */
    var onUserChangedCb = null;
    /**
     * @description Callback handling the user removal
     */
    var onUserRemovedCb = null;
    /**
     * @description Callback for new Invite received
     */
    var newInviteCb = null;
    /**
     * @description Callback for Invite received changes
     */
    var onRoomInviteChangedCb = null;
//	 /**
//     * @description Callback for Invitation received is removed
//     */
//	var InviteRemovedCb = null;
    /**
     * @description Callback for user list removal
     */

    var removedUserListCb = null;
    /**
     * @description An array containing all outgoing Invite
     */
    var mOutgoingInvites = [];
    /**
     * @description An array containing all incoming Invitation
     */
    var mIncomingInvitation = [];
    /**
     * @description the timeout to reject automatically the Invite
     */
    var automaticRejectTimeOut = null;

    /**
     * @description the reason to reject automatically the Invite
     */
    var automaticRejectReason = null;

//    /**
//     * @description the callback to catch the new Invite for timeout management
//     */
//	var mTimeoutOnNewInviteCb = null;
//    /**
//     * @description the callback to catch the Invite changes for timeout management
//     */
//	var mTimeoutOnInviteChangedCb = null;
    /**
     * @description the current device Id
     */
    var mDeviceId = null;
    /**
     * @description Callback for user list removal
     */
    var mConnectedStatusCb = null;
    /**



     /**
     * Initialisation fonction. Updates the dataref about the user identifier in the user list :
     * it will disconnect and reconnect it.
     */
    function init() {
        mDeviceId = dataref.child("userList").child(me).child("connectedList").child(utils.appInstanceId);
        mDeviceId.onDisconnect().remove();
        mDeviceId.child("status").set(DEVICE_STATUS_CONNECTED);
        try {
            if (utils.appInstanceId) mDeviceId.child("description").child("appInstanceId").set(utils.appInstanceId);
            if (navigator.appCodeName) mDeviceId.child("description").child("navigator").child("appCodeName").set(navigator.appCodeName);
            if (navigator.appName) mDeviceId.child("description").child("navigator").child("appName").set(navigator.appName);
            if (navigator.appVersion) mDeviceId.child("description").child("navigator").child("appVersion").set(navigator.appVersion);
            if (navigator.buildID) mDeviceId.child("description").child("navigator").child("buildID").set(navigator.buildID);
            if (navigator.cookieEnabled) mDeviceId.child("description").child("navigator").child("cookieEnabled").set(navigator.cookieEnabled);
//			if (navigator.geolocation) mDeviceId.child("description").child("navigator").child("geolocation").set(navigator.geolocation);
            if (navigator.language) mDeviceId.child("description").child("navigator").child("language").set(navigator.language);
//			if (navigator.mimeTypes) mDeviceId.child("description").child("navigator").child("mimeTypes").set(navigator.mimeTypes.toString());
            if (navigator.onLine) mDeviceId.child("description").child("navigator").child("onLine").set(navigator.onLine);
            if (navigator.oscpu) mDeviceId.child("description").child("navigator").child("onLine").set(navigator.oscpu);
            if (navigator.platform) mDeviceId.child("description").child("navigator").child("platform").set(navigator.platform);
//			if (navigator.cookieEnabled) mDeviceId.child("description").child("navigator").child("plugins").set(navigator.plugins.toString());
            if (navigator.product) mDeviceId.child("description").child("navigator").child("product").set(navigator.product);
            if (navigator.productSub) mDeviceId.child("description").child("navigator").child("productSub").set(navigator.productSub);
            if (navigator.securityPolicy) mDeviceId.child("description").child("navigator").child("securityPolicy").set(navigator.securityPolicy);
            if (navigator.userAgent) mDeviceId.child("description").child("navigator").child("userAgent").set(navigator.userAgent);
            if (navigator.vendor) mDeviceId.child("description").child("navigator").child("vendor").set(navigator.vendor);
            if (navigator.vendorSub) mDeviceId.child("description").child("navigator").child("vendorSub").set(navigator.vendorSub);
        } catch (e) {
            console.error("(webcomSDK::reach::init)failed to get information about device. error="+e);
        }
        dataref.child("userList").child(me).child("wasInsideReach").set(true);
    }

    /**
     * check if a user is connected
     * @param {string} p_userId - the user Id
     * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = connected / false = not connected
     */
    function _isConnected(p_userId,p_cb) {
        console.log("(webcomSDK::reach::_isConnected)userId"+p_userId);
        var onUserConnectedCb = function(snapshot) {
            var connected = (snapshot.val() !== null);
            if (p_cb && typeof p_cb == 'function') p_cb(connected);
        };
        dataref.child("userList").child(p_userId).child("connectedList").once("value",onUserConnectedCb);
    }

    /**
     * check if a user is register
     * @param {string} p_userId - the user Id
     * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = registered / false = not registered
     */
    function _isRegistered(p_userId,p_cb) {
        console.log("(webcomSDK::reach::_isRegistered)userId"+p_userId);
        var onUserRegisteredCb = function(snapshot) {
            var registered = (snapshot.val() !== null);
            if (p_cb && typeof p_cb == 'function') {
                p_cb(registered);
            }
        };
        dataref.child("userList").child(p_userId).child("wasInsideReach").once("value",onUserRegisteredCb);
    }

    /**
     * set the device status (DEVICE_STATUS_CONNECTED/DEVICE_STATUS_SLEEPING)
     * @param {string} p_status - the new status
     */
    function _setConnectedStatus(p_status) {
        if (mDeviceId) mDeviceId.child("status").set(p_status);
    }

    /**
     * Defines the callback to trigger when a new user is added
     * @param {function} p_cb - The callback to use
     */
    function _setOnUserAdded(p_cb) {
        if (onUserAddedCb) {
            dataref.child("userList").off("child_added",onUserAddedCb);
            onUserAddedCb=null;
        }
        if (p_cb && typeof p_cb == 'function') {
            onUserAddedCb = function(snapshot) {
                console.log("(webcomSDK::reach::onUserAddedCb)"+snapshot.name()+"="+JSON.stringify(snapshot.val()));
                var obj = {};
                obj[snapshot.name()]=snapshot.val();
                p_cb(obj);
            };
            dataref.child("userList").on("child_added",onUserAddedCb);
        }
    }
    /**
     * Defines the callback to trigger when the user has changed
     * @param {function} p_cb - The callback to use
     */
    function _setOnUserChanged(p_cb) {
        if (onUserChangedCb) {
            dataref.child("userList").off("child_changed",onUserChangedCb);
            onUserChangedCb=null;
        }
        if (p_cb && typeof p_cb == 'function') {
            onUserChangedCb = function(snapshot) {
                console.log("(webcomSDK::reach::onUserChangedCb)"+snapshot.name()+"="+JSON.stringify(snapshot.val()));
                var obj = {};
                obj[snapshot.name()]=snapshot.val();
                p_cb(obj);
            };
            dataref.child("userList").on("child_changed",onUserChangedCb);
        }

    }
    /**
     * Defines the callback to trigger when a user has been removed.
     * @param {function} p_cb - The callback to use
     */
    function _setOnUserRemoved(p_cb) {
        if (onUserRemovedCb) {
            dataref.child("userList").off("child_removed",onUserRemovedCb);
            onUserRemovedCb=null;
        }
        if (p_cb && typeof p_cb == 'function') {
            onUserRemovedCb = function(snapshot) {
                console.log("(webcomSDK::reach::onUserRemovedCb)"+snapshot.name()+"="+JSON.stringify(snapshot.val()));
                var obj = {};
                obj[snapshot.name()]=snapshot.val();
                p_cb(obj);
            };
            dataref.child("userList").on("child_removed",onUserRemovedCb);
        }

    }

    /**
     * Defines the callback to trigger when a room Invite has been received.
     * Other callbacks will be triggered about Invite lists.
     * @param {function} p_onNewRoomInviteCb - The callback triggers when a Invite is received (status = on going)
     */
    function _setOnNewRoomInvitation(p_onNewRoomInviteCb) {

        if (newInviteCb) {
            dataref.child("invitationList").child(me).off("child_added",newInviteCb);
            newInviteCb=null;
        }
        if (p_onNewRoomInviteCb && typeof p_onNewRoomInviteCb == 'function') {
            newInviteCb = function(snapshot) {
                if (snapshot.val().status== INVITATION_ONGOING) {
                    console.log("(webcomSDK::reach::_setOnNewRoomInvitation)new Invite received,id)"+snapshot.name()+",content="+JSON.stringify(snapshot.val()));
                    var invitationId=snapshot.name();
                    if (!mIncomingInvitation) mIncomingInvitation=[];
                    if (mIncomingInvitation[invitationId]) {
                        if (mIncomingInvitation[invitationId].timeout) {
                            clearTimeout(mIncomingInvitation[invitationId].timeout);
                        }
                        delete mIncomingInvitation[invitationId];
                    }
                    mIncomingInvitation[invitationId]={};

                    var obj={};
                    obj[invitationId]=snapshot.val();
                    p_onNewRoomInviteCb(obj);

                    if (automaticRejectTimeOut) {
                        var mTimeout_action=setTimeout(function() {
                            if (automaticRejectTimeOut) {
                                console.log("(webcomSDK::reach::_setOnNewRoomInvitation)automatic reject of Invite received="+JSON.stringify(snapshot.val()));
                                dataref.child("invitationList").child(me).child(invitationId).onDisconnect().cancel();
                                if (automaticRejectReason) {
                                    dataref.child("invitationList").child(me).child(invitationId).update({
                                        timestamp_end:Webcom.ServerValue.TIMESTAMP,
                                        status:INVITATION_REJECTED,
                                        status_info:automaticRejectReason,

                                    });
                                } else {
                                    dataref.child("invitationList").child(me).child(invitationId).update({
                                        timestamp_end:Webcom.ServerValue.TIMESTAMP,
                                        status:INVITATION_REJECTED
                                    });
                                }
                            }
                        },automaticRejectTimeOut);
                        mIncomingInvitation[invitationId].timeout=mTimeout_action;
                    }

                    var onInvitationChangeCb = function(snapshot) {
                        if(snapshot && snapshot.name()=="status") {
                            snapshot.ref().parent().once("value",function(snapshot2) {
                                var cb_invitationId,cb_obj_content;
                                if (snapshot2) {
                                    cb_invitationId = snapshot.ref().parent().name();
                                    cb_obj_content= snapshot2.val();
                                    var cb_obj={};
                                    cb_obj[cb_invitationId]=cb_obj_content;
                                    if (mIncomingInvitation && mIncomingInvitation[cb_invitationId]&& mIncomingInvitation[cb_invitationId].timeout) {
                                        clearTimeout(mIncomingInvitation[cb_invitationId].timeout);
                                    }
                                    console.log("(webcomSDK::reach::_setOnNewRoomInvitation)Invite changed,id=)"+cb_invitationId,"'new content="+JSON.stringify(cb_obj_content));
                                    if (cb_obj && onRoomInviteChangedCb ) {
                                        onRoomInviteChangedCb(cb_obj);
                                    }
                                    delete mIncomingInvitation[cb_invitationId];
                                }
                            });
                        }
                    };
                    dataref.child("invitationList").child(me).child(invitationId).once("child_changed",onInvitationChangeCb);

                }
            };
            dataref.child("invitationList").child(me).on("child_added",newInviteCb);
        }
    }

    /**
     * Defines the callback to trigger when a room Invite has been changed.
     * Other callbacks will be triggered about Invite lists.
     * @param {function} p_onRoomInviteChangedCb - The callback triggers when the satus on the Invite received has changed (status = accepted/rejected/canceled)
     */
    function _setOnRoomInvitationChanged(p_onRoomInviteChangedCb) {

        if (onRoomInviteChangedCb) {
            onRoomInviteChangedCb=null;
        }

        if (p_onRoomInviteChangedCb && typeof p_onRoomInviteChangedCb == 'function') {
            onRoomInviteChangedCb=p_onRoomInviteChangedCb;
        }
    }

    /**
     * Defines a timeout to reject automatically the incoming Invite
     * @param {integer} p_timeout - The delay
     * @param {string} p_reason - optional info about the reject
     */
    function _setNewRoomInvitationTimeout(p_timeout,p_reason) {
        if (automaticRejectTimeOut) {
            automaticRejectTimeOut=null;
        }
        if (automaticRejectReason) {
            automaticRejectReason=null;
        }

        if (p_timeout	&& p_timeout === parseInt(p_timeout, 10) && p_timeout>0) {
            console.log("(webcomSDK::reach::_setNewRoomInvitationTimeout)timeout="+p_timeout);
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
        console.log("(webcomSDK::reach::_isUserPresentInRoom)p_roomId="+p_roomId+" p_user="+p_user);
        if (!(p_roomId && typeof p_roomId == 'string')) {
            console.error("(webcomSDK::reach::_isUserPresentInRoom)parameter p_roomid is incorrect. Expecting non empty string");
            return;
        }
        if (!(p_user && typeof p_user == 'string')) {
            console.error("(webcomSDK::reach::_isUserPresentInRoom)parameter p_user is incorrect. Expecting non empty string");
            return;
        }
        if (!(p_cb && typeof p_cb == 'function')) {
            console.error("(webcomSDK::reach::_isUserPresentInRoom)parameter p_cb is incorrect. if defined, expecting a function");
            return;
        }
        var isUserAlreadyPresentCB = function(snapshot) {
            var wasPresent = (snapshot.val() !== null);
            console.log("(webcomSDK::reach::_isUserPresentInRoom)p_roomId="+p_roomId+",p_user="+p_user+",result="+wasPresent);
            p_cb(wasPresent,p_roomId,p_user);
        };
        datarefs.getRooms().child(p_roomId).child("participantList").child(p_user).child("wasInsideRoom").once("value",isUserAlreadyPresentCB);

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
            console.error("(webcomSDK::reach::inviteToRoom)parameter p_roomid is incorrect. Expecting non empty string");
            return;
        }
        if (!(p_topic && typeof p_topic == 'string')) {
            console.error("(webcomSDK::reach::inviteToRoom)parameter p_topic is incorrect. Expecting non empty string");
            return;
        }
        if (p_statusChangedCb && typeof p_statusChangedCb != 'function') {
            console.warn("(webcomSDK::reach::inviteToRoom)parameter p_statusChangedCb is incorrect. if defined, expecting a function");
        }
        if (!(p_guestIds && p_guestIds instanceof Array )) {
            console.error("(webcomSDK::reach::inviteToRoom)parameter p_guestIds is incorrect. Expecting an Array");
            return;
        }
        datarefs.getRooms().child(p_roomId).child("commonDataList").update({
            status:ROOM_STATUS_OPEN,
            owner:me
        });


        var _isUserPresentInRoomCb=function(isAlreadyPresent,p_roomId2,p_guestId2) {
            if (!isAlreadyPresent) {
                datarefs.getRooms().child(p_roomId2).child("participantList").child(p_guestId2).update({
                    connected: false,
                    wasInsideRoom: false
                });
            }
        };

        var _InviteChangedCb= function(snapshot) {
            console.log("(webcomSDK::reach::inviteToRoom::_InviteChangedCb)");
            if(snapshot && snapshot.name()=="status") {
                var cb_guestId2= snapshot.ref().parent().parent().name();
                console.log("(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cb_guestId2="+cb_guestId2);
                if (mOutgoingInvites &&  mOutgoingInvites[p_roomId] && mOutgoingInvites[p_roomId][cb_guestId2] && mOutgoingInvites[p_roomId][cb_guestId2].InviteChangedCb ) {
                    mOutgoingInvites[p_roomId][cb_guestId2].InviteDataref.off("child_changed",mOutgoingInvites[p_roomId][cb_guestId2].InviteChangedCb);
                }
                snapshot.ref().parent().once("value",function(snapshot2) {
                    var cb_status,cb_guestId,cb_roomId,cb_status_info;
                    if (snapshot2) {
                        cb_status= snapshot2.val().status;
                        cb_roomId= snapshot2.val().room;
                        cb_status_info= snapshot2.val().status_info;
                        cb_guestId= snapshot2.ref().parent().name();
                        console.log("(webcomSDK::reach::inviteToRoom::_InviteChangedCb)roomId="+cb_roomId+" invitee="+cb_guestId+ " new invitation status="+cb_status+ " status info="+cb_status_info);
                        if (mOutgoingInvites&&  mOutgoingInvites[cb_roomId] && mOutgoingInvites[cb_roomId][cb_guestId] && mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref) {
                            mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.onDisconnect().cancel();
//   	                    	if (mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb)
//   				         		mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.parent().off("child_removed",mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb);
                            if (mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb && typeof mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb == 'function') {
                                mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb(cb_roomId,cb_guestId,cb_status,cb_status_info);
                            } else {
                                console.warn("(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve mathing p_statusChangedCb");
                            }
                            delete mOutgoingInvites[cb_roomId][cb_guestId];
                        } else {
                            console.warn("(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve mathing mOutgoingInvite");
                        }
                    } else {
                        console.warn("(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve invitation");
                    }
                });
            }
        };

//        //NB : this callback "_InvitationRemoveCb" should be never called, but who knows...
//	   var _InvitationRemoveCb = function(snapshot) {
//		       	if(snapshot && snapshot.val()) {
//		       		var cb_guestId,cb_roomId,cb_status,cb_status_info;
//		       		cb_guestId=snapshot.ref().parent().name();
//		       		cb_roomId=snapshot.val().room;
//		       		cb_status=snapshot.val().status;
//		       		cb_status_info=snapshot.val().status_info;
//	       			console.log("(webcomSDK::reach::inviteToRoom)roomId="+cb_roomId+" to="+cb_guestId+ " invitation removed");
//		             if (mOutgoingInvites&&  mOutgoingInvites[cb_roomId] && mOutgoingInvites[cb_roomId][cb_guestId] && mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref) {
//			           	mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.child("status").onDisconnect().cancel();
//			           	mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.child("timestamp_end").onDisconnect().cancel();
//			           	if (mOutgoingInvites[cb_roomId][cb_guestId].InviteChangedCb)
//			           		mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.off("child_changed",mOutgoingInvites[cb_roomId][cb_guestId].InviteChangedCb);
//			         	if (mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb)
//			         		mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.parent().off("child_removed",mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb);
//			           	if (mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb && typeof mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb == 'function') {
//			           		p_statusChangedCb(cb_roomId,cb_guestId,INVITATION_CANCELED,cb_status_info);
//			           	}
//			        	delete mOutgoingInvites[cb_roomId][cb_guestId];
//		             }
//		       	}
//	    };

        for (var i=0; i<p_guestIds.length; i++) {
            var mGuestId=p_guestIds[i];
            if (!(mGuestId && typeof mGuestId == 'string')) {
                console.error("(webcomSDK::reach::inviteToRoom)parameter p_guestIds["+i+"] is incorrect. Expecting non empty string");
            } else {
                console.log("(webcomSDK::reach::inviteToRoom)roomId="+p_roomId+" invitee="+mGuestId.toString());

                if (mOutgoingInvites[p_roomId] && mOutgoingInvites[p_roomId][mGuestId]) {
                    //invitation is already existing -> cancel it
                    //if (mOutgoingInvites[p_roomId][mGuestId].InviteDataref && mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb)  mOutgoingInvites[p_roomId][mGuestId].InviteDataref.off("child_removed",mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb);
                    //if (mOutgoingInvites[p_roomId][mGuestId].InviteDataref && mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb) mOutgoingInvites[p_roomId][mGuestId].InviteDataref.off("child_changed",mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb);
                    _cancelInvitation(p_roomId, [mGuestId],function(p_guestId){
                        if (p_guestId && p_guestId==mGuestId) {
                            _inviteToRoom(p_roomId, [p_guestId], p_topic,p_statusChangedCb);
                        }
                    });
                    return;
                }
                if (!mOutgoingInvites[p_roomId]) {
                    mOutgoingInvites[p_roomId]=[];
                }
                //if (!mOutgoingInvites[p_roomId][mGuestId]) {
                mOutgoingInvites[p_roomId][mGuestId]={};
                //}

                _isUserPresentInRoom(p_roomId,mGuestId,_isUserPresentInRoomCb);

                mOutgoingInvites[p_roomId][mGuestId].InviteDataref  =  dataref.child("invitationList").child(mGuestId).push({
                    from:me,
                    room:p_roomId,
                    timestamp_creation:Webcom.ServerValue.TIMESTAMP,
                    topic:p_topic,
                    status:INVITATION_ONGOING
                });
                console.log("(webcomSDK::reach::inviteToRoom)InviteDataref="+mOutgoingInvites[p_roomId][mGuestId].InviteDataref.toString());

                //mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb=_InvitationRemoveCb;
                mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb=_InviteChangedCb;
                mOutgoingInvites[p_roomId][mGuestId].InviteDataref.on("child_changed",mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb);
                //mOutgoingInvites[p_roomId][mGuestId].InviteDataref.parent().on("child_removed",mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb);
                mOutgoingInvites[p_roomId][mGuestId].statusChangedCb=p_statusChangedCb;

                // canceled Invite on disconnection
                mOutgoingInvites[p_roomId][mGuestId].InviteDataref.onDisconnect().update({
                    timestamp_end:Webcom.ServerValue.TIMESTAMP,
                    status:INVITATION_CANCELED
                });
//				 mOutgoingInvites[p_roomId][mGuestId].InviteDataref.child("timestamp_end").onDisconnect().set(Webcom.ServerValue.TIMESTAMP);
//				 mOutgoingInvites[p_roomId][mGuestId].InviteDataref.child("status").onDisconnect().set(INVITATION_CANCELED);
            }
        }

        //DO not automatically add me to the room
//		 _isUserPresentInRoom(p_roomId,me,function(isAlreadyPresent) {
//			 if (!isAlreadyPresent) {
//					datarefs.getRooms().child(p_roomId).child("participantList").child(me).set({
//						connected: false,
//						wasInsideRoom: false
//					});
//			 }
//		 });
    }

    /**
     * Cancels the Invite
     * @param {string} p_roomId - The room Id of the Invite
     * @param {array[sting]} p_guestIds - optional : An array possessing the identifiers of the invitees. (if undefined ,  all invitee will have their Invite canceled)
     * @param {string} inviteId - The invite identifier
     * @param {function} p_cb - The callback triggered when the operation is complete . this callback will containt as parameter the related guestId
     */
    function _cancelInvitation(p_roomId, p_guestIds,p_cb) {
        if (!(p_roomId && typeof p_roomId == 'string')) {
            console.error("(webcomSDK::reach::_cancelInvitation)parameter p_roomid is incorrect. Expecting non empty string");
            return;
        }
        if (p_guestIds && ! p_guestIds instanceof Array ) {
            console.error("(webcomSDK::reach::_cancelInvitation)parameter p_guestIds is incorrect. Expecting an Array");
            return;
        }
        console.log("(webcomSDK::reach::_cancelInvitation)p_roomId="+p_roomId+",p_guestIds="+JSON.stringify(p_guestIds));
        if (mOutgoingInvites && mOutgoingInvites[p_roomId]) {
            if (p_guestIds) {
                for (var i=0; i<p_guestIds.length; i++) {
                    var guestId=p_guestIds[i];
                    if (!(guestId && typeof guestId == 'string')) {
                        console.error("(webcomSDK::reach::inviteToRoom)parameter p_guestIds["+i+"] is incorrect. Expecting non empty string");
                    } else {
                        if (mOutgoingInvites[p_roomId][guestId]) {
                            if (mOutgoingInvites[p_roomId][guestId].InviteDataref) {
                                mOutgoingInvites[p_roomId][guestId].InviteDataref.onDisconnect().cancel();
                                if (mOutgoingInvites[p_roomId][guestId].InviteChangedCb && typeof mOutgoingInvites[p_roomId][guestId].InviteChangedCb == 'function') {
                                    mOutgoingInvites[p_roomId][guestId].InviteDataref.off("child_changed",mOutgoingInvites[p_roomId][guestId].InviteChangedCb);
                                }

                                mOutgoingInvites[p_roomId][guestId].InviteDataref.once("value",function(dataSnapshot) {

                                    var cb_status,cb_guestId,cb_roomId,cb_status_info;
                                    if (dataSnapshot && dataSnapshot.val()) {
                                        cb_status= dataSnapshot.val().status;
                                        cb_roomId= dataSnapshot.val().room;
                                        cb_status_info= dataSnapshot.val().status_info;
                                        cb_guestId= dataSnapshot.ref().parent().name();
                                        if (cb_status && cb_status==INVITATION_ONGOING) {
                                            mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.update({
                                                timestamp_end:Webcom.ServerValue.TIMESTAMP,
                                                status:INVITATION_CANCELED
                                            });
                                            if (mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb && typeof mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb == 'function')
                                                mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb(cb_roomId,cb_guestId,INVITATION_CANCELED);
                                            console.log("(webcomSDK::reach::_cancelInvitation)deleting Invite to room "+cb_roomId+" for invitee "+cb_guestId);
                                        } else {
                                            console.warn("(webcomSDK::reach::_cancelInvitation)cannot delete intivation to room "+cb_roomId+" for guest "+cb_guestId+" Invitation has been removed/rejected/accepted");
                                        }
                                    }
                                    delete mOutgoingInvites[p_roomId][guestId];
                                    if (p_cb && typeof p_cb=='function') p_cb(guestId);
                                });

                            } else {
                                delete mOutgoingInvites[p_roomId][guestId];
                                if (p_cb && typeof p_cb=='function') p_cb(guestId);
                            }

                        } else {
                            if (p_cb && typeof p_cb=='function') p_cb(guestId);
                        }
                    }
                }


            } else {
                for (invitee in mOutgoingInvites[p_roomId]) {
                    _cancelInvitation(p_roomId, [invitee],p_cb);
                };
            }
        } else {
            console.warn("(webcomSDK::reach::_cancelInvitation) Invite to room "+p_roomId+" not found");
        }
    }

    /**
     * Makes an invite accepted, and defines the "accepted" flag of this invite at true in the database.
     * @param p_invitation -
     */
    function _acceptInvitation(p_invitation) {
        var inviteId=Object.keys(p_invitation)[0];
        if (!inviteId) {
            console.error("(webcomSDK::reach::_acceptInvitation)parameter p_invitation is incorrect. cannot get invitation Id");
            return;
        }
        if (!p_invitation[inviteId]) {
            console.error("(webcomSDK::reach::_acceptInvitation)parameter p_invitation is incorrect. cannot get invitation data");
            return;
        }
        dataref.child("invitationList").child(me).child(inviteId).once("value",function(dataSnapshot) {
            var cb_status,cb_guestId,cb_roomId,cb_status_info,cb_invitationId;
            if (dataSnapshot && dataSnapshot.val()) {
                cb_invitationId=dataSnapshot.name();
                cb_status= dataSnapshot.val().status;
                cb_roomId= dataSnapshot.val().room;
                cb_status_info= dataSnapshot.val().status_info;
                cb_guestId= dataSnapshot.ref().parent().name();
                if (cb_status && cb_status==INVITATION_ONGOING) {
                    console.log("(webcomSDK::reach::_acceptInvitation)inviteId="+inviteId+",data="+JSON.stringify(p_invitation[inviteId]));
                    dataref.child("invitationList").child(cb_guestId).child(cb_invitationId).update({
                        timestamp_end:Webcom.ServerValue.TIMESTAMP,
                        status:INVITATION_ACCEPTED
                    });
                } else {
                    console.warn("(webcomSDK::reach::_acceptInvitation)inviteId="+cb_invitationId+",data="+JSON.stringify(p_invitation[inviteId])+", cannot be accepted. It has been removed or canceled");
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
        var inviteId=Object.keys(p_invitation)[0];
        if (!inviteId) {
            console.error("(webcomSDK::reach::_rejectInvitation)parameter p_invitation is incorrect. cannot get invitation Id");
            return;
        }
        if (!p_invitation[inviteId]) {
            console.error("(webcomSDK::reach::_rejectInvitation)parameter p_invitation is incorrect. cannot get invitation data");
            return;
        }
        dataref.child("invitationList").child(me).child(inviteId).once("value",function(dataSnapshot) {
            var cb_status,cb_guestId,cb_roomId,cb_status_info,cb_invitationId;
            if (dataSnapshot && dataSnapshot.val()) {
                cb_invitationId=dataSnapshot.name();
                cb_status= dataSnapshot.val().status;
                cb_roomId= dataSnapshot.val().room;
                cb_status_info= dataSnapshot.val().status_info;
                cb_guestId= dataSnapshot.ref().parent().name();
                if (cb_status && cb_status==INVITATION_ONGOING) {
                    console.log("(webcomSDK::reach::_rejectInvitation)inviteId="+inviteId+",data="+JSON.stringify(p_invitation[inviteId]));
                    if (p_reason) {
                        dataref.child("invitationList").child(cb_guestId).child(cb_invitationId).update({
                            timestamp_end:Webcom.ServerValue.TIMESTAMP,
                            status_info:p_reason,
                            status:INVITATION_REJECTED
                        });
                    } else {
                        dataref.child("invitationList").child(cb_guestId).child(cb_invitationId).update({
                            timestamp_end:Webcom.ServerValue.TIMESTAMP,
                            status:INVITATION_REJECTED
                        });
                    }
                } else {
                    console.warn("(webcomSDK::reach::_rejectInvitation)inviteId="+cb_invitationId+",data="+JSON.stringify(p_invitation[inviteId])+", cannot be rejected. It has been removed or canceled");
                }
            }
        });
    }

    /**
     * move all the non active invitations processed of an user to the invitation List History:
     * All invitations with status Canceled or Rejected will be archived
     * All invitation with status Ongoing or Accepted Will be archived if the corresponding room is closed
     * If an invitation with status "Ongoing" is archived, its status will be set to canceled
     * @param user - The user Id
     * @param p_cb - This callback is trigger when archive is complete
     */
    function _archiveInvitations(p_userId,p_cb) {
        console.log("(webcomSDK::reach::_archiveInvitations)userId="+p_userId);
        dataref.child("invitationList").child(me).once("value",function(snapshot) {
            if (snapshot && snapshot.hasChildren()) {
                var nbChildren = snapshot.numChildren();
                var nbChildrenProcessed = 0;
                snapshot.forEach(function(childSnapshot) {
                    if (childSnapshot && childSnapshot.val()) {
                        console.log("(webcomSDK::reach::_archiveInvitations)userId="+p_userId+ " inviteId="+childSnapshot.name());
                        if (childSnapshot.val().status==INVITATION_REJECTED || childSnapshot.val().status==INVITATION_CANCELED ) {
                            dataref.child("invitationListHistory").child(p_userId).child(childSnapshot.name()).update(childSnapshot.val());
                            childSnapshot.ref().remove();
                            nbChildrenProcessed++;
                            if (nbChildrenProcessed>=nbChildren && p_cb && typeof p_cb == 'function') {
                                p_cb();
                            }
                        } else {
                            var inviteData={};
                            inviteData[childSnapshot.name()]=childSnapshot.val();
                            var cb2 = function(isActive) {
                                if (isActive) {
                                    nbChildrenProcessed++;
                                    if (nbChildrenProcessed>=nbChildren && p_cb && typeof p_cb == 'function') {
                                        p_cb();
                                    }
                                } else {
                                    if (childSnapshot.val().status==INVITATION_ONGOING) {
                                        var newValue=childSnapshot.val();
                                        newValue.status=INVITATION_CANCELED;
                                        dataref.child("invitationListHistory").child(p_userId).child(childSnapshot.name()).set(newValue);
                                    } else {
                                        dataref.child("invitationListHistory").child(p_userId).child(childSnapshot.name()).set(childSnapshot.val());
                                    }
                                    childSnapshot.ref().remove();
                                    nbChildrenProcessed++;
                                    if (nbChildrenProcessed>=nbChildren && p_cb && typeof p_cb == 'function') {
                                        p_cb();
                                    }
                                }
                            };
                            _isRoomActive(inviteData,cb2);
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
     * check if the room corresponding to the invitation is active
     * @param p_invitation - The invitation Data
     * @param p_cb - The callback to trigger to get the result. this callback will contains the parameter true is the room is active
     */
    function _isRoomActive(p_invitation,p_cb) {
        if (p_invitation && p_cb && typeof p_cb == 'function') {
            var inviteId = Object.keys(p_invitation)[0];
            console.log("(webcomSDK::reach::_isRoomActive)inviteId="+inviteId);
            var roomId = p_invitation[inviteId].room;
            var onRoomStatus = function(snapshot) {
                if (snapshot && snapshot.val() && snapshot.val()==ROOM_STATUS_OPEN) {
                    console.log("(webcomSDK::reach::_isRoomActive)inviteId="+inviteId+ " result=true");
                    p_cb(true);
                } else {
                    console.log("(webcomSDK::reach::_isRoomActive)inviteId="+inviteId+ " result=false");
                    p_cb(false);
                }
            };
            datarefs.getRooms().child(roomId).child("commonDataList").child("status").once("value",onRoomStatus);
        }
    }




    /**
     * Close the reach service,
     * disables and deletes any listeners/callback defined.
     * cancel all outgoing invite not already processed
     * do not impact incoming invite
     */
    function _close() {
        console.log("(webcomSDK::reach::_close)");

        if (newInviteCb) {
            dataref.child("invitationList").child(me).off("child_added",newInviteCb);
            newInviteCb=null;
        }
//		if (onRoomInviteChangedCb) {
//			dataref.child("invitationList").child(me).off("child_changed",InviteChangedCb);
//			onRoomInviteChangedCb=null;
//		}
//
//		if (mTimeoutOnNewInviteCb) {
//			dataref.child("invitationList").child(me).off("child_added",mTimeoutOnNewInviteCb);
//			mTimeoutOnNewInviteCb=null;
//		}
//		if (mTimeoutOnInviteChangedCb) {
//			dataref.child("invitationList").child(me).off("child_changed",mTimeoutOnInviteChangedCb);
//			mTimeoutOnInviteChangedCb=null;
//		}

        if (onUserAddedCb) {
            dataref.child("userList").off("child_added",onUserAddedCb);
            onUserAddedCb=null;
        }
        if (onUserChangedCb) {
            dataref.child("userList").off("child_changed",onUserChangedCb);
            onUserChangedCb=null;
        }
        if (onUserRemovedCb) {
            dataref.child("userList").off("child_removed",onUserRemovedCb);
            onUserRemovedCb=null;
        }

        if (mOutgoingInvites) {

            mOutgoingInvites.forEach(function(roomId) {
                mOutgoingInvites[roomId].forEach(function(invitee) {
                    if (invitee.InviteDataref) {
                        invitee.InviteDataref.onDisconnect().cancel();
                        invitee.InviteDataref.update({
                            status:INVITATION_CANCELED,
                            timestamp_end:Webcom.ServerValue.TIMESTAMP

                        });
                    }
                });
            });
            mOutgoingInvites=[];
        }

        if (automaticRejectTimeOut) automaticRejectTimeOut=null;
        if (automaticRejectReason) automaticRejectReason=null;

        if (mDeviceId) {
            mDeviceId.remove();
            mDeviceId=null;
        }

    }

    init();
    return {
        /**
         * Returns the user identifier used in the database. This value
         * identifies the user if the Webcombase.
         * @return {string} - The user ID
         */
        getMe: function() {
            return me;
        },
        /**
         * check if a user is connected
         * @param {string} p_userId - the user Id
         * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = connected / false = not connected
         */
        isConnected: function(p_userId,p_cb) {
            _isConnected(p_userId,p_cb);
        },
        /**
         * check if a user is register
         * @param {string} p_userId - the user Id
         * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = registered / false = not registered
         */
        isRegistered: function(p_userId,p_cb) {
            _isRegistered(p_userId,p_cb);
        },
        /**
         * set the device status (DEVICE_STATUS_CONNECTED/DEVICE_STATUS_SLEEPING)
         * @param {string} status - the new status
         */
        setConnectedStatus: function(p_status) {
            return _setConnectedStatus(p_status);

        },
        /**
         * Defines the callback to trigger when a new user is added
         * @param {function} p_cb - The callback to use
         */
        setOnUserAdded: function(p_cb) {
            return _setOnUserAdded(p_cb);

        },
        /**
         * Defines the callback to trigger when the user has changed
         * @param {function} p_cb - The callback to use
         */
        setOnUserChanged: function(p_cb) {
            return _setOnUserChanged(p_cb);

        },
        /**
         * Defines the callback to trigger when a user has been removed.
         * @param {function} p_cb - The callback to use
         */
        setOnUserRemoved: function(p_cb) {
            return _setOnUserRemoved(p_cb);

        },
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
        inviteToRoom: function(p_roomId, p_guestIds, p_topic,p_statusChangedCb) {
            return _inviteToRoom(p_roomId, p_guestIds, p_topic,p_statusChangedCb);
        },
        /**
         * Cancels the Invite
         * @param {string} p_roomId - The room Id of the Invite
         * @param {sting} p_guestIds - optional : An array possessing the identifiers of the invitees. (if undefined ,  all invitee will have their Invite canceled)
         * @param {string} inviteId - The invite identifier
         */
        cancelInvitation: function(p_roomId, p_guestIds) {
            return _cancelInvitation(p_roomId, p_guestIds);
        },
        /**
         * Defines the callback to trigger when a room invite has been received.
         * Other callbacks will be triggered about Invite lists.
         * @param {function} onNewRoomInvitationCb - The callback triggers when a Invite is received (status = on going)
         */
        setOnNewRoomInvitation: function(p_onNewRoomInvitationCb) {
            return _setOnNewRoomInvitation(p_onNewRoomInvitationCb);
        },
        /**
         * Defines the callback to trigger when a room invite has been received.
         * Other callbacks will be triggered about Invite lists.
         * @param {function} onRoomInvitationChangedCb - The callback triggers when the satus on the Invite received has changed (status = accepted/rejected/canceled)
         */
        setOnRoomInvitationChanged: function(p_onRoomInvitationChangedCb) {
            return _setOnRoomInvitationChanged(p_onRoomInvitationChangedCb);
        },
        /**
         * Defines a timeout to reject automatically the Invite
         * Other callbacks will be triggered about Invite lists.
         * @param {integer} p_timeout - The delay
         * @param {string} p_reason - optional info about the reject
         */
        setNewRoomInvitationTimeout: function(p_timeout,p_reason) {
            return _setNewRoomInvitationTimeout(p_timeout,p_reason);
        },

        /**
         * move all the non active invitations processed of an user to the invitation List History:
         * All invitations with status Canceled or Rejected will be archived
         * All invitation with status Ongoing or Accepted Will be archived if the corresponding room is closed
         * If an invitation with status "Ongoing" is archived, its status will be set to canceled
         * @param p_cb - This callback is trigger when archive is complete
         */
        archiveMyInvitations: function(p_cb) {
            return _archiveInvitations(me,p_cb);
        },
        /**
         * Makes an invite accepted, and defines the "accepted" flag of this invite at true in the database.
         * @param p_invitationData -
         */
        acceptInvitation: function(p_invitationData) {
            return _acceptInvitation(p_invitationData);
        },

        /**
         * Refuses the invite and set the "accepted" flag of this invite in the database to false
         * @param p_invitationData - The invite data
         * @param {string} p_reason - optional info about the reject
         */
        rejectInvitation: function(p_invitationData,p_reason) {
            return _rejectInvitation(p_invitationData,p_reason);
        },
        /**
         * Defines a callback for a particular event
         * @param {string} event - To choose between "roomInvite", "roomInviteAccepted", "roomInviteCanceled", "user" and "userRemoval"
         * @parm {function} p_cb - The callback to rise
         */
        on: function(p_evt, p_cb) {
            switch (p_evt) {
                case "newRoomInvitation":
                    this.setOnNewRoomInvitation(p_cb);
                    break;
                case "roomInvitationChanged":
                    this.setOnRoomInvitationChanged(p_cb);
                    break;
                case "userAdded":
                    this.setOnUserAdded(p_cb);
                    break;
                case "userChanged":
                    this.setOnUserChanged(p_cb);
                    break;
                case "userRemoved":
                    this.setOnUserRemoved(p_cb);
                    break;
                default:
                    console.error("reach.set: no such event");
                    return -1;
            }
        },
        /**
         * Closes and removes callbacks
         */
        close: function() {
            return _close();
        },
    };
};
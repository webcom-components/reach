/**
 * @file var.js - JS file storing plenty of constants
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc : 1.2.0
 */


export default {
    sdk_version: 392,
    /**
     * Audio communication service
     * @constant
     * @type {string}
     */
    ACTION_TYPE_AUDIO: 'audio',
    /**
     * Video communication service
     * @constant
     * @type {string}
     */
    ACTION_TYPE_VIDEO: 'video',
    /**
     * Chat communication service
     * @constant
     * @type {string}
     */
    ACTION_TYPE_CHAT: 'chat',
    /**
     * Audio and video communication service
     * @constant
     * @type {string}
     */
    ACTION_TYPE_AUDIO_VIDEO: 'audio-video',
    /**
     * Screen-sharing service
     * @constant
     * @type {string}
     */
    ACTION_TYPE_SCREEN_SHARING: 'screen-sharing',
    /**
     * Call communication service
     * @constant
     * @type {string}
     */
    ACTION_TYPE_CALL: 'call',

    /**
     * ICE connection status : disconnected
     * @constant
     * @type {string}
     */
    ICE_CONNECTION_STATE_DISCONNECTED: 'disconnected',
    /**
     * ICE connection status : connected
     * @constant
     * @type {string}
     */
    ICE_CONNECTION_STATE_CONNECTED: 'connected',
    /**
     * ICE connection status : completed
     * @constant
     * @type {string}
     */
    ICE_CONNECTION_STATE_COMPLETED: 'completed',
    /**
     * ICE connection status : checking
     * @constant
     * @type {string}
     */
    ICE_CONNECTION_STATE_CHECKING: 'checking',
    /**
     * ICE connection status : closed
     * @constant
     * @type {string}
     */
    ICE_CONNECTION_STATE_CLOSED: 'closed',
    /**
     * ICE connection status : failed
     * @constant
     * @type {string}
     */
    ICE_CONNECTION_STATE_FAILED: 'failed',
    /**
     * ICE connection status : another status
     * @constant
     * @type {string}
     */
    ICE_CONNECTION_STATE_OTHER: 'other',

    /**
     * The default Webcombase's URL
     * @constant
     * @type {string}
     */
    DEFAULT_WEBCOMBASE_URL: 'https://webcom.orange.com/base/sandbox',

    /**
     * The default Webcombase authentification service's URL
     * @constant
     * @type {string}
     */
    DEFAULT_AUTH_URL: 'https://webcom.orange.com',


    /**
     * The default ICE configuration for TURN and STUN servers to use for WebRTC communicationx
     * NB : these configuration will be overwriten by the configuration on the Webcom server if present
     * @constant
     * @type {json}
     */
    DEFAULT_ICE_CONFIG: {
        iceServers: [
            {
                "url": "turns:turn1.webcom.orange.com:443",
                "username": "admin",
                "credential": "webcom1234"
            },
            {
                "url": "turn:turn1.webcom.orange.com:3478",
                "username": "admin",
                "credential": "webcom1234"
            },
            {
                "url": "turns:webcom1.orange-labs.fr:443",
                "username": "admin",
                "credential": "webcom1234"
            }
        ]
    },

    /**
     * INVITE status : ongoing status
     * @constant
     * @type {string}
     */
    INVITATION_ONGOING: 'ONGOING',

    /**
     * INVITE status : accepted status
     * @constant
     * @type {string}
     */
    INVITATION_ACCEPTED: 'ACCEPTED',

    /**
     * INVITE status : refused status
     * @constant
     * @type {string}
     */
    INVITATION_REJECTED: 'REJECTED',


    /**
     * INVITE status : canceled status
     * @constant
     * @type {string}
     */
    INVITATION_CANCELED: 'CANCELED',


    /**
     * DEVICE_STATUS_CONNETED status : connected status
     * @constant
     * @type {string}
     */
    DEVICE_STATUS_CONNECTED: 'CONNECTED',

    /**
     * DEVICE_STATUS_SLEEPING status : connected status
     * @constant
     * @type {string}
     */
    DEVICE_STATUS_SLEEPING: 'SLEEPING',

    /**
     * ROOM_STATUS_OPEN status : room is open / active
     * @constant
     * @type {string}
     */
    ROOM_STATUS_OPEN: 'OPEN',

    /**
     * ROOM_STATUS_CLOSE status : room is CLOSE / inactive
     * @constant
     * @type {string}
     */
    ROOM_STATUS_CLOSE: 'CLOSE'
};
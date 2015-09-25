import constants from 'constants';
import getScreenId from 'util/getScreenId';






/*
 * #%L
 * Webcom service
 * 
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2015 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * 
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */
/*
 * #%L
 * Webcom service
 * 
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2014 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * 
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */

/**
 * @file utils.js - JS file for utils methods.
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc : 1.2.0
 *
 * Available elements
 <ul>
 <li>
 queryString()
 </li>
 <li>
 parseQueryString(query)
 </li>
 <li>
 guid()
 </li>
 <li>
 host()
 </li>
 <li>
 appInstanceId()
 </li>
 <li>
 getDataFromTS(timestamp)
 </li>
 <li>
 escapeHtml(string)
 </li>
 <li>
 toHHMMSS(seconds)
 </li>
 <li>
 getTabColor(index)
 </li>
 <li>
 arraySize(obj)
 </li>
 <li>
 convertLineBreaks(elem)
 </li>
 <li>
 getStream()
 </li>
 <li>
 setStream(s)
 </li>
 </ul>
 */


/**
 * @constructor
 * @description The utils class
 */
var utils = function() {
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
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    /**
     * @description The application instance indentifier
     */
    var _appInstanceId = _guid();

    var stream = null;

    /**
     * Returns the stream
     * @return - The stream
     */
    function _getStream(){
        return stream;
    }

    /**
     * Defines the stream
     * @param s - The stream to use
     */
    function _setStream(s){
        stream = s;
    }

    /**
     * @description A map where special letters are stored with the HTML encodage
     */
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    /**
     * Parses the query string
     * @param search - The query to parse
     * @return {string} The query string
     */
    function parseQueryString(search){
        var query_string = {};
        var query = search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if ( typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
                // If second entry with this name
            } else if ( typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], pair[1]];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    }

    /**
     * replace invalid char for a webcombase path
     *
     * @return String - The escaped path
     */
    function _escapePath(path) {
        var escaped = path.trim();
        escaped = encodeURI (escaped);
        escaped= escaped.replace(/\./g, "π");
        escaped = escaped.replace(/\#/g, "|");
        escaped = escaped.replace(/\$/g, "€");
        escaped = escaped.replace(/\[/g, "∞");
        escaped = escaped.replace(/\]/g, "£");


        return escaped;
    }

    /**
     * _unEscapePath a a webcombase path
     *
     * @return String - The unescaped path
     */
    function _unEscapePath(path) {
        var escaped = path.replace(/\π/g, ".");
        escaped = escaped.replace(/\|/g, "@");
        escaped = escaped.replace(/\€/g, "$");
        escaped = escaped.replace(/\∞/g, "[");
        escaped = escaped.replace(/\£/g, "]");
        escaped=decodeURI(escaped);
        return escaped;
    }

    return {
        // ==============================================================
        // extract parameters from URL
        // ==============================================================
        queryString : (function() {
            // This function is anonymous, is executed immediately and
            // the return value is assigned to QueryString!
            return parseQueryString(window.location.search);
        })(),
        parseQueryString : parseQueryString,
        guid : _guid,
        host : (function() {
            return window.location.host;
        })(),
        appInstanceId: _appInstanceId,
        getDateFromTS : function(ts){
            var date = new Date(ts);
            var minutes = date.getMinutes();
            var hours = date.getHours();
            var month = (date.getMonth()+1);
            var day = date.getDate();

            if(minutes < 10){
                minutes = "0"+minutes;
            }
            if(hours < 10){
                hours = "0"+hours;
            }
            if(month < 10){
                month = "0"+month;
            }
            if(day < 10){
                day = "0"+day;
            }

            var formattedTime = day+"/"+month+"/"+date.getFullYear()+" - "+hours+":"+minutes;
            return formattedTime;
        },
        escapeHtml : function (string) {
            return String(string).replace(/[&<>"'\/]/g, function (s) {
                return entityMap[s];
            });
        },
        toHHMMSS : function (p_seconds) {
            var sec_num = parseInt(p_seconds, 10); // don't forget the second parm
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}
            var time    = hours+':'+minutes+':'+seconds;
            return time;
        },
        getTabColor : function(index){
            var colors = ["00a0b0","cc333f","eb6841","edc951"];
            return colors[index];
        },
        arraySize : function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        },
        convertLineBreaks : function(elem) {
            elem.each(function() {
                $(this).on("keypress", function(e) {
                    var br, range, selection, textNode;
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        if (window.getSelection) {
                            selection = window.getSelection();
                            range = selection.getRangeAt(0);
                            br = document.createElement("br");
                            textNode = document.createTextNode("\u00a0");
                            range.deleteContents();
                            range.insertNode(br);
                            range.collapse(false);
                            range.insertNode(textNode);
                            range.selectNodeContents(textNode);
                            selection.removeAllRanges();
                            selection.addRange(range);
                            return false;
                        }
                    }
                });
            });
        },
        getStream : _getStream,
        setStream : _setStream,
        escapePath :function (path) {
            return _escapePath(path);
        },
        unEscapePath :function (path) {
            return _unEscapePath(path);
        }

    };
}();
/*
 * #%L
 * Webcom service
 * 
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2014 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * 
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */


/**
 * @file localstream.js - JS file to handle local streams.
 * @description Provides data structures to store and handle video, audio and video-and-audio streams. The audio and video streams are managed too.
 * Initialization methods are provided, stream connections and listeners too.
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc : 1.4.0
 *
 * Available features:
 <ul>
 <li>
 getVideoStream()
 </li>
 <li>
 addVideoListener(cb)
 </li>
 <li>
 initVideo(cb)
 </li>
 <li>
 connectLocalVideoStream(videoElt,getLocalStreamCb)
 </li>
 <li>
 getAudioStream()
 </li>
 <li>
 addAudioListener(cb)
 </li>
 <li>
 initAudio(cb)
 </li>
 <li>
 connectLocalAudioStream(AudioElt,getLocalStreamCb)
 </li>
 <li>
 getAudioVideoStream()
 </li>
 <li>
 addAudioVideoListener(cb)
 </li>
 <li>
 initAudioVideo()
 </li>
 <li>
 connectLocalAudioVideoStream(AudioVideoElt,getLocalStreamCb)
 </li>
 <li>
 getScreenSharingStream()
 </li>
 <li>
 addScreenSharingListener(cb)
 </li>
 <li>
 initScreenSharing(cb)
 </li>
 <li>
 connectLocalScreenSharingStream(ScreenSharingElt,getLocalStreamCb)
 </li>
 <li>
 close(cb)
 </li>
 </ul>
 */


/**
 * @constructor
 * @description The local stream object with its streams, flags and callbacks. It is a singleton.
 */
var localstream = (function() {

    /**
     * @description The local video streams, as HTML video objects, in an array
     */
    var localVideoStreams = [];
    /**
     * @description The local audio streams, as HTML video objects, in an array
     */
    var localAudioStreams = [];
    /**
     * @description The local audio and video streams, as HTML video objects, in an array
     */
    var localAudioVideoStreams = [];
    /**
     * @description The local screen sharing streams as HTML video objects, in an array
     */
    var localScreenSharingStreams = [];
    /**
     * @description The video stream object
     */
    var streamVideo = null;
    /**
     * @description The audio stream object
     */
    var streamAudio = null;
    /**
     * @description The video and audio stream object
     */
    var streamAudioVideo = null;
    /**
     * @description The sreen sharing stream object
     */
    var streamScreenSharing = null;
    /**
     * @description An array containing video listeners as functions. These listeners will be triggered if the video stream is established.
     */
    var listenersVideo = [];
    /**
     * @description An array containing audio listeners as functions. These listeners will be triggered if the audio stream is established.
     */
    var listenersAudio = [];
    /**
     * @description An array containing audio and video listeners as functions. These listeners will be triggered if the vide-and-audio stream is established.
     */
    var listenersAudioVideo = [];
    /**
     * @description An array containing screen sharing listeners as functions. These listeners will be triggered if the screen sharing stream is established.
     */
    var listenersScreenSharing = [];
    /**
     * @description The local video stream, as an HTML video element
     */
    var mLocalStreamVideo = null;
    /**
     * @description The local audio stream, as an HTML video element
     */
    var mLocalStreamAudio = null;
    /**
     * @description The local audio and video stream, as an HTML video element
     */
    var mLocalStreamAudioVideo = null;
    /**
     * @description The local screen sharing stream, as an HTML video element
     */
    var mLocalStreamScreenSharing = null;
    /**
     * @description Flag indicating if the video initialisation is in progress
     */
    var initVideoProgress = false;
    /**
     * @description Flag indicating if the audio initialisation is in progress
     */
    var initAudioProgress = false;
    /**
     * @description Flag indicating if the audio and video initialisation is in progress
     */
    var initAudioVideoProgress = false;
    /**
     * @description Flag indicating if the screen sharing initialisation is in progress
     */
    var initScreenSharingProgress = false;

    /**
     * Initializes the video local stream.
     * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
     * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
     * Listeners will also be called.
     */
    function initVideo(){
        console.log("(webcomSDK::localstream::initVideo)");
        if (! initVideoProgress) {
            initVideoProgress=true;

            navigator.getMedia = getUserMedia;
            mLocalStreamVideo = document.createElement("VIDEO");
            mLocalStreamVideo.muted= true;
            localVideoStreams.push(mLocalStreamVideo);

            if(streamVideo === null){
                navigator.getMedia({audio : false,video : true},
                    function(s) {
                        streamVideo = s;
                        for (var i = 0; i < localVideoStreams.length; i++) {
                            attachMediaStream(localVideoStreams[i],streamVideo);
                        }
                        localVideoStreams = [];
                        for (var j=0;j<listenersVideo.length;j++) {
                            listenersVideo[j](streamVideo);
                        }
                        listenersVideo = [];
                        initVideoProgress=false;

                    },
                    function(error) {
                        console.error("Error on webrtcLocalStream - webkitGetUserMedia : error=");
                        console.dir(error);
                        initVideoProgress=false;
                    }
                );
            } else {
                for (var i = 0; i < localVideoStreams.length; i++) {
                    attachMediaStream(localVideoStreams[i],streamVideo);
                }
                localVideoStreams = [];
                for (var j=0;j<listenersVideo.length;j++) {
                    listenersVideo[j](streamVideo);
                }
                listenersVideo = [];
                initVideoProgress=false;
            }
        }
    }

    /**
     * Initializes the video local stream.
     * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
     * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
     * Listeners will also be called.
     */
    function initAudio() {
        console.log("(webcomSDK::localstream::initAudio)");
        if (! initAudioProgress) {
            initAudioProgress=true;

            navigator.getMedia = getUserMedia;
            mLocalStreamAudio = document.createElement("AUDIO");
            mLocalStreamAudio.muted= true;
            localAudioStreams.push(mLocalStreamAudio);

            if(streamAudio === null){
                navigator.getMedia({audio : true,video : false},
                    function(s) {
                        streamAudio = s;
                        for (var i = 0; i < localAudioStreams.length; i++) {
                            attachMediaStream(localAudioStreams[i],streamAudio);
                        }
                        localAudioStreams = [];
                        for (var j=0;j<listenersAudio.length;j++) {
                            listenersAudio[j](streamAudio);
                        }
                        listenersAudio = [];
                        initAudioProgress=false;

                    },
                    function(error) {
                        console.error("Error on webrtcLocalStream - webkitGetUserMedia :error=");
                        console.dir(error);
                        initAudioProgress=false;
                    }
                );
            } else {
                for (var i = 0; i < localAudioStreams.length; i++) {
                    attachMediaStream(localAudioStreams[i],streamAudio);
                }
                localAudioStreams = [];
                for (var j=0;j<listenersAudio.length;j++) {
                    listenersAudio[j](streamAudio);
                }
                listenersAudio = [];
                initAudioProgress=false;
            }
        }
    }

    /**
     * Initializes the audio-and-video local stream.
     * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
     * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
     * Listeners will also be called.
     */
    function initAudioVideo() {
        console.log("(webcomSDK::localstream::initAudioVideo)");
        if (!initAudioVideoProgress) {
            initAudioVideoProgress=true;

            navigator.getMedia = getUserMedia;
            mLocalStreamAudioVideo = document.createElement("AUDIOVIDEO");
            mLocalStreamAudioVideo.muted= true;
            localAudioVideoStreams.push(mLocalStreamAudioVideo);

            if(streamAudioVideo === null){
                navigator.getMedia({audio : true,video : true},
                    function(s) {

                        streamAudioVideo = s;
                        for (var i = 0; i < localAudioVideoStreams.length; i++) {
                            attachMediaStream(localAudioVideoStreams[i],streamAudioVideo);
                        }
                        localAudioVideoStreams = [];
                        for (var j=0;j<listenersAudioVideo.length;j++) {
                            listenersAudioVideo[j](streamAudioVideo);
                        }
                        listenersAudioVideo = [];
                        initAudioVideoProgress=false;

                    },
                    function(error) {
                        console.error("(webcomSDK::localstream::initAudioVideo::Error on webrtcLocalStream - webkitGetUserMedia : error=");
                        console.dir(error);
                        initAudioVideoProgress=false;
                    }
                );
            } else {
                for (var i = 0; i < localAudioVideoStreams.length; i++) {
                    attachMediaStream(localAudioVideoStreams[i],streamAudioVideo);
                }
                localAudioVideoStreams = [];
                for (var j=0;j<listenersAudioVideo.length;j++) {
                    listenersAudioVideo[j](streamAudioVideo);
                }
                listenersAudioVideo = [];
                initAudioVideoProgress=false;
            }

        }
    }

    /**
     * Initializes the screen sharing screen.
     * Gets user medias from the web browser, creates a new VIDEO elements and attach media streams.
     * Some constraints will be added to the screen if Chrome is in use : the max width to 1920 and the max height to 1080.
     * Listeners for screen sharing will be called at the end of the init process.
     */
    function initScreenSharing() {
        console.log("(webcomSDK::localstream::initScreenSharing)");
        if (!initScreenSharingProgress) {
            initScreenSharingProgress=true;

            navigator.getMedia = getUserMedia;
            mLocalStreamScreenSharing = document.createElement("SCREENSHARING");
            mLocalStreamScreenSharing.muted=true;
            localScreenSharingStreams.push(mLocalStreamScreenSharing);

            if(streamScreenSharing === null){

                getScreenId(function (error, sourceId, screen_constraints) {
                    // error === null || 'permission-denied' || 'not-installed' || 'installed-disabled' || 'not-chrome'
                    // sourceId === null || 'string' || 'firefox'

                    if(sourceId)
                        if(sourceId != 'firefox') {
                            screen_constraints = {
                                video: {
                                    mandatory: {
                                        chromeMediaSource: 'screen',
                                        maxWidth: 1920,
                                        maxHeight: 1080,
                                        minAspectRatio: 1.77
                                    }
                                }
                            };

                            if (error === 'permission-denied') return alert('Permission is denied.');
                            if (error === 'not-chrome') return alert('Please use chrome.');

                            if (!error && sourceId) {
                                screen_constraints.video.mandatory.chromeMediaSource = 'desktop';
                                screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;
                            }
                        } else {
                            screen_constraints = {
                                video: { mediaSource: 'screen'},
                                audio: false
                            };
                        }

                    console.log("(webcomSDK::localstream::initScreenSharing)screen_constraints=");
                    console.dir(screen_constraints);
                    navigator.getMedia(screen_constraints, function (stream) {

                        console.log("(webcomSDK::localstream::initScreenSharing::get stream OK");
                        streamScreenSharing = stream;

                        for (var i = 0; i < localScreenSharingStreams.length; i++) {
                            attachMediaStream(localScreenSharingStreams[i],streamScreenSharing);
                        }
                        localScreenSharingStreams = [];
                        for (var j=0;j<listenersScreenSharing.length;j++) {
                            listenersScreenSharing[j](streamScreenSharing);
                        }
                        listenersScreenSharing = [];
                        initScreenSharingProgress=false;
                    }, function (error) {
                        console.error("(webcomSDK::localstream::initScreenSharing::Error on webrtcLocalStream - mozGetUserMedia : " + error);
                        if (window.location.protocol != "https:") {
                            console.error("(webcomSDK::localstream::initScreenSharing)error=cannot share screen. Page is not secure (https protocol is required)");
                            alert("cannot share screen. Page is not secure (https protocol is required)");
                        } else if (navigator.mozGetUserMedia) {
                            var host = window.location.hostname;
                            console.error("(webcomSDK::localstream::initScreenSharing)error=cannot share screen. Please check that "+host+" is set in about:config->media.getusermedia.screensharing.allowed_domains");
                            alert("cannot share screen. Please check that "+host+" is set in about:config->media.getusermedia.screensharing.allowed_domains");

                        } else if (navigator.webkitGetUserMedia) {
                            console.error("(webcomSDK::localstream::initScreenSharing)error=cannot share screen. Have you install the plugin? (https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk)");
                            alert("cannot share screen. Have you install the plugin? (https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk)");
                        }
                        initScreenSharingProgress=false;
                    });
                });
            } else {
                for (var i = 0; i < localScreenSharingStreams.length; i++) {
                    attachMediaStream(localScreenSharingStreams[i],streamScreenSharing);
                }
                localScreenSharingStreams = [];
                for (var j=0;j<listenersScreenSharing.length;j++) {
                    listenersScreenSharing[j](streamScreenSharing);
                }
                listenersScreenSharing = [];
                initScreenSharingProgress=false;
            }

        }
    }

    /**
     * Closes all the streams.
     * Set all the initProgress flags to false, detach all the streams after stopping them.
     */
    function close() {
        console.log("(webcomSDK::localstream::close)");
        if (mLocalStreamVideo) {
            detachMediaStream(mLocalStreamVideo);
            mLocalStreamVideo=null;
        }
        if (streamAudioVideo) {
            streamAudioVideo.stop();
            streamAudioVideo=null;
        }
        if (streamVideo) {
            streamVideo.stop();
            streamVideo = null;
        }
        initVideoProgress=false;

        if (mLocalStreamAudio) {
            detachMediaStream(mLocalStreamAudio);
            mLocalStreamAudio=null;
        }
        if (streamAudio) {
            streamAudio.stop();
            streamAudio = null;
        }

        initAudioProgress=false;

        if (mLocalStreamAudioVideo) {
            detachMediaStream(mLocalStreamAudioVideo);
            mLocalStreamAudioVideo=null;
        }
        if (streamAudioVideo) {
            streamAudioVideo.stop();
            streamAudioVideo = null;
        }

        initAudioVideoProgress=false;
    }


    return {
        /**
         * Returns the video stream
         */
        getVideoStream:function () {
            return streamVideo;
        },
        /**
         * Adds a video listener which will be called after the video stream is established.
         * @param {function} cb - The listener to add
         */
        addVideoListener: function(cb) {
            listenersVideo.push(cb);
        },
        /**
         * Initializes the video local stream.
         * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
         * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
         * Listeners will also be called.
         * @param cb - Never used yet
         */
        initVideo: function(cb) {
            initVideo();
        },
        /**
         * Makes the connection to the local video stream, and attach the local video stream to the video element if defined.
         * If the video element is not defined, the video local stream will be initialized and a dedicated HTML video tag will be created.
         * @param videoElt - The video element where place the connected local video stream. if null, a new one will be created.
         * @param getLocalStreamCb - a callback function to retrieve the mediastream object
         */
        connectLocalVideoStream:function (videoElt,getLocalStreamCb) {
            if (videoElt) {
                videoElt.muted=true;
                if (streamVideo) {
                    console.log("(webcomSDK::localstream::connectLocalVideoStream)use existing streamVideo");
                    attachMediaStream(videoElt,streamVideo);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamVideo);
                    }
                } else {
                    localVideoStreams.push(videoElt);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersVideo.push(getLocalStreamCb);
                    }
                    initVideo();
                }
            } else {
                if (!streamVideo) {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersVideo.push(getLocalStreamCb);
                    }
                    initVideo();
                } else {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamVideo);
                    }
                }
            }
        },
        /**
         * Returns the audio stream
         * @return - An audio stream
         */
        getAudioStream:function () {
            return streamAudio;
        },
        /**
         * Adds an audio listener which will be called after the audio stream is established.
         * @param {function} cb - The listener to add
         */
        addAudioListener: function(cb) {
            listenersAudio.push(cb);
        },
        /**
         * Initializes the audio local stream.
         * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
         * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
         * Listeners will also be called.
         * @param cb - Never used yet
         */
        initAudio: function(cb) {
            initAudio();
        },
        /**
         * Connects to the local audio stream and sets it to the audio element if defined.
         * If not, a dedicated HTML video will be created. The audio media stream will be attached to the element in use.
         * @param AudioElt - The audio element in use possessing the attached local audio stream
         * @param getLocalStreamCb - a callback function to retrieve the mediastream object
         */
        connectLocalAudioStream:function (AudioElt,getLocalStreamCb) {
            if (AudioElt) {
                AudioElt.muted=true;
                if (streamAudio) {
                    console.log("(webcomSDK::localstream::connectLocalAudioStream)use existing streamAudio");
                    attachMediaStream(AudioElt,streamAudio);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamAudio);
                    }
                } else {
                    localAudioStreams.push(AudioElt);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersAudio.push(getLocalStreamCb);
                    }
                    initAudio();
                }
            } else {
                if (!streamAudio) {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersAudio.push(getLocalStreamCb);
                    }
                    initAudio();
                } else {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamAudio);
                    }
                }
            }
        },
        /**
         * Returns the audio video stream
         * @return - The audio and video stream
         */
        getAudioVideoStream:function () {
            return streamAudioVideo;
        },
        /**
         * Adds the audio-and-video listener which will be called after the audi-and-video stream is established.
         * @param cb - The audio and video listener to add
         */
        addAudioVideoListener: function(cb) {
            listenersAudioVideo.push(cb);
        },
        /**
         * Initializes the audio-and-video local stream.
         * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
         * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
         * Listeners will also be called.
         */
        initAudioVideo: function(cb) {
            initAudioVideo();
        },
        /**
         * Connects the local audio and video streams and assigns them to the audio and video element if needed.
         * If no HTML element is passed to the functionn a new element is created
         * @param AudioVideoElt - The element where to place the audio and video local streams
         * @param getLocalStreamCb - a callback function to retrieve the mediastream object
         */
        connectLocalAudioVideoStream:function (AudioVideoElt,getLocalStreamCb) {
            if (AudioVideoElt) {
                AudioVideoElt.muted=true;
                if (streamAudioVideo) {
                    console.log("(webcomSDK::localstream::connectLocalAudioVideoStream)use existing streamAudioVideo");
                    attachMediaStream(AudioVideoElt,streamAudioVideo);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamAudioVideo);
                    }
                } else {
                    localAudioVideoStreams.push(AudioVideoElt);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersAudioVideo.push(getLocalStreamCb);
                    }
                    initAudioVideo();
                }
            } else {
                if (!streamAudioVideo) {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersAudioVideo.push(getLocalStreamCb);
                    }
                    initAudioVideo();
                } else {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamAudioVideo);
                    }
                }
            }
        },
        /**
         * Returns the screen sharing stream
         * @return - The screen sharing stream
         */
        getScreenSharingStream:function () {
            return streamScreenSharing;
        },
        /**
         * Add a screen sharing listeners which will be called after the screen sharing stream is established.
         * @param {function} cb - The screen sharing listener to add
         */
        addScreenSharingListener: function(cb) {
            listenersScreenSharing.push(cb);
        },
        /**
         * Initializes the screen sharing
         * @param {function}cb  - The callback to trigger
         */
        initScreenSharing: function(cb) {
            initScreenSharing();
        },
        /**
         * Make the connection of the local screen sharing stream and bind it to an HTML elemend if defined
         * @param ScreenSharingElt - The HTML element on which the screen sharing stream should be binded
         * @param getLocalStreamCb - a callback function to retrieve the mediastream object
         */
        connectLocalScreenSharingStream:function (ScreenSharingElt,getLocalStreamCb) {
            if (ScreenSharingElt) {
                if (streamScreenSharing) {
                    console.log("(webcomSDK::localstream::connectLocalScreenSharingStream)use existing streamScreenSharing");
                    attachMediaStream(ScreenSharingElt,streamScreenSharing);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamScreenSharing);
                    }
                } else {
                    localScreenSharingStreams.push(ScreenSharingElt);
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersScreenSharing.push(getLocalStreamCb);
                    }
                    initScreenSharing();
                }
            } else {
                if (!streamScreenSharing) {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        listenersScreenSharing.push(getLocalStreamCb);
                    }
                    initScreenSharing();
                } else {
                    if (getLocalStreamCb && typeof getLocalStreamCb=='function') {
                        getLocalStreamCb(streamScreenSharing);
                    }
                }
            }
        },
        /**
         * Detaches streams and deletes listeners
         * @param {function} cb - Never used
         */
        close: function(cb) {
            close();
        }
    };

})();
/*
 * #%L
 * Webcom service
 * 
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2014 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * 
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */

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
/*
 * #%L
 * Webcom service
 * 
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2014 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * 
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */

/**
 * @file room.js - JS file to use for the room service.
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc : 1.3.1
 *
 * Available elements :
 <ul>
 <li>
 setOnInstantMessage(p_cb)
 </li>
 <li>
 setOnPublishedStream(p_cb)
 </li>
 <li>
 setOnUnPublishedStream(p_cb)
 </li>
 <li>
 setOnParticipantJoin(p_cb)
 </li>
 <li>
 setOnParticipantLeave(p_cb)
 </li>
 <li>
 getRoomId()
 </li>
 <li>
 getMe()
 </li>
 <li>
 sendInstantMessage(message)
 </li>
 <li>
 publishStream(streamId, localVid, actionType)
 </li>
 <li>
 unPublishStream(streamId,callback)
 </li>
 <li>
 subscribeToStream(streamData,remoteVid)
 </li>
 <li>
 unSubscribeFromStream(streamId)
 </li>
 <li>
 muteAudioStream(streamId)
 </li>
 <li>
 unmuteAudioStream(streamId)
 </li>
 <li>
 muteVideoStream(streamId)
 </li>
 <li>
 unmuteVideoStream(streamId)
 </li>
 <li>
 getAvailableStreams();
 </li>
 <li>
 close()
 </li>
 <li>
 on(event,p_cb)
 </li>
 </ul>
 */


/**
 * @constructor
 * @description The room object with its streams, messages, flags and callbacks. The published media streams, the WebRTC stacks, the instant messages, and the participant lists
 * are managed in this data structure.
 * @param p_me - The user identifier, identifying the current user in the database
 * @param p_roomId - The room identifier, identifying in the database the room in use
 */
var room = (function(p_me, p_roomId) {

    /**
     * @description The room identifier, identifying a room in the database
     */
    var roomId = p_roomId;
    /**
     * @description The user identifier
     */
    var me = p_me;
    /**
     * @description A dataref pointer pointing to a node identified by the room identifier under the rooms node
     */
    var dataref = datarefs.getRooms().child(roomId);
    /**
     * @description The WebRTC stacks used in this room
     */
    var roomWebrtcStacks = {};
    /**
     * @description The available streams
     */
    var mAvailableStreams= [];
    /**
     * @description An array containing data structures for streams which possess callbacks to trigger in JSON format.
     * These callbacks are addSubscriberListCb and removeSubscribersListCb.
     */
    var mStreams = [];

    /**
     * @description An array containing all the stream marked as muted
     */
    var mMutedStreams = [];

    /**
     * @description A callback to trigger for unpublished remote objects
     */
    var remoteUnpublishedtCb = null;

    /**
     * @description Callback triggered when an instant message has been received
     */
    var onInstantMessage = null;
    /**
     * @description Callback triggered when a stream has been published
     */
    var onPublishedStream = null;
    /**
     * @description Callback triggered when a stream has been unpublished
     */
    var onUnPublishedStream = null;
    /**
     * @description Callback triggered when a participant joins the room
     */
    var onParticipantJoin = null;
    /**
     * @description Callback triggered when a participant leaves the room
     */
    var onParticipantLeave = null;

    /**
     * @description Callback triggered when a list of instant messages has been received
     */
    var instantMessageListCb = null;
    /**
     * @description User's callback triggered when a list of medias has been published
     */
    var publishedMediaListCb = null;

    /**
     * @description room's callback triggered when a list of medias has been published
     */
    var publishedMediaListCbForAvailableStream = null;
    /**
     * @description user's callback triggered when a list of medias has been unpublished
     */
    var unPublishedMediaListCb = null;
    /**
     * @description room's callback triggered when a list of medias has been published
     */
    var unPublishedMediaListCbForAvailableStream = null;
    /**
     * @description Callback triggered when a list of participants joins the room (added)
     */
    var participantListJoinAddedCb = null;
    /**
     * @description Callback triggered when a list of participants joins the room (changed)
     */
    var participantListJoinChangedCb = null;
    /**
     * @description Callback triggered when a list of participants leaves the room
     */
    var participantListLeaveCb = null;



    /**
     * Initializes the room object by adding a new value in a child identified by the user identifier under
     * the participantList node
     */
    function init() {
        dataref.child("participantList").child(me).update({
            connected:true,
            wasInsideRoom:true
        });

        dataref.child("participantList").child(me).child("connected").onDisconnect().set(false);

        initFirebaseListener();
    }

    /**
     * Initializes a Firebase listener.
     * Defines callbacks (if not already defined) for : instant messages, media list and participants.
     * These callbacks are called if a new value is added or if a value has been removed in the database.
     */
    function initFirebaseListener() {

        if (!publishedMediaListCbForAvailableStream) {
            publishedMediaListCbForAvailableStream = function(snapshot) {
                console.log("(webcomSDK::room["+roomId+"]::onPublishedStreamForAvailableStream)stream="+JSON.stringify(snapshot.val()));
                var obj={};
                obj[snapshot.name()]=snapshot.val();
                obj[snapshot.name()].roomId=roomId;
                _addAvailableStream(obj);
            };
            dataref.child("publishedMediaList").on("child_added", publishedMediaListCbForAvailableStream);
        }

        if (!unPublishedMediaListCbForAvailableStream) {
            unPublishedMediaListCbForAvailableStream = function(snapshot) {
                var streamId = snapshot.name();
                console.log("(webcomSDK::room["+roomId+"]::onUnPublishedStreamForAvailableStream)stream="+streamId);
                _removeAvailableStream(streamId);
            };
            dataref.child("publishedMediaList").on("child_removed", unPublishedMediaListCbForAvailableStream);
        }


    }

    /**
     * Return the room identifier
     * @return {string} - The room identifier
     */
    function _getRoomId() {
        return roomId;
    }

    /**
     * Returns the user identifier
     * @return {string} - The user identifier
     */
    function _getMe() {
        return me;
    }

    /**
     * Initializes the Participants added listener.
     * Defines callback (remove any existing one) for the participants.
     * This callback is called, first for any existing connected participants, then when a new participant is added.
     */
    function _setOnParticipantJoin(p_cb) {

        if (participantListJoinAddedCb) {
            dataref.child("participantList").off("child_added", participantListJoinAddedCb);
            participantListJoinAddedCb=null;
        }
        if (participantListJoinChangedCb) {
            dataref.child("participantList").off("child_changed", participantListJoinChangedCb);
            participantListJoinChangedCb=null;
        }
        if (p_cb && typeof p_cb == 'function')  {
            participantListJoinAddedCb= function(snapshot) {
                var user = snapshot.name();
                if (snapshot.val() && snapshot.val().connected && snapshot.val().wasInsideRoom) {
                    console.log("(webcomSDK::room["+roomId+"]::_setOnParticipantJoin) user has joined: "+user);
                    p_cb(user);
                }
            };
            dataref.child("participantList").on("child_added", participantListJoinAddedCb);

            participantListJoinChangedCb= function(snapshot) {
                var user = snapshot.name();
                if (snapshot.val() && (snapshot.val().connected && snapshot.val().wasInsideRoom)) {
                    console.log("(webcomSDK::room["+roomId+"]::_setOnParticipantJoin) user has joined: "+user);
                    p_cb(user);
                }
            };
            dataref.child("participantList").on("child_changed", participantListJoinChangedCb);
        } else {
            console.error("(webcomSDK::room["+roomId+"]::_setOnParticipantJoin)parameter incorrect. Expected function");
        }
    }

    /**
     * Initializes the Participants left listener.
     * Defines callback (remove any existing one) for the participants.
     * This callback is called when a new participant is removed.
     */
    function _setOnParticipantLeave(p_cb) {

        if (participantListLeaveCb) {
            dataref.child("participantList").off("child_changed", participantListLeaveCb);
            participantListLeaveCb=null;
        }
        if (p_cb && typeof p_cb == 'function')  {
            participantListLeaveCb= function(snapshot) {
                var user = snapshot.name();
                if (snapshot.val() && (!snapshot.val().connected && snapshot.val().wasInsideRoom)) {
                    console.log("(webcomSDK::room["+roomId+"]::_setOnParticipantLeave) user has left: "+user);
                    p_cb(user);
                }
            };
            dataref.child("participantList").on("child_changed", participantListLeaveCb);
        } else {
            console.error("(webcomSDK::room["+roomId+"]::_setOnParticipantLeave)parameter incorrect. Expected function");
        }
    }

    /**
     * Sends an instant message by pushing an new element in the database with a timestamp, the message and its author (i.e. the current user)
     * @param {string}message - The message to send
     */
    function _sendInstantMessage(message) {
        var ts = new Date().getTime();
        if(message !== ""){
            console.log("(webcomSDK::room["+roomId+"]::sendInstantMessage)message="+message);
            dataref.child("instantMessageList").push({
                from:me,
                message:message,
                timestamp:Webcom.ServerValue.TIMESTAMP
            });
        }
    }

    /**
     * Initializes the instant message listener.
     * Defines callback (remove any existing one) for : instant messages.
     * This callback is called, first for any existing instant messages, then when a new value is added in the database.
     */
    function _setOnInstantMessage(p_cb) {

        if (instantMessageListCb) {
            dataref.child("instantMessageList").off("child_added", instantMessageListCb);
            instantMessageListCb=null;
        }
        if (p_cb && typeof p_cb == 'function')  {
            instantMessageListCb= function(snapshot) {
                var obj=snapshot.val();
                console.log("(webcomSDK::room["+roomId+"]::_setOnInstantMessage)receive InstantMessage="+JSON.stringify(obj));
                p_cb(obj);
            };
            dataref.child("instantMessageList").on("child_added", instantMessageListCb);
        } else {
            console.error("(webcomSDK::room["+roomId+"]::_setOnInstantMessage)parameter incorrect. Expected function");
        }
    }


    /**
     * Publishes the stream
     * @param streamId - The identifier of the stream to publish
     * @param localVid - The local video
     * @param actionType - A value determining the type of stream in use (video, audio, video and audio, screen-sharing).
     * @param getLocalStreamCb - a callback function to retrieve the mediastream object
     */
    function _publishStream(streamId, localVid, actionType,getLocalStreamCb) {
        console.log("(webcomSDK::room["+roomId+"]::publishStream)roomId="+roomId+",streamId="+streamId+",me="+me+",actionType="+actionType);
        if (!(streamId && typeof streamId == 'string')) {
            console.error("(webcomSDK::reach::inviteToRoom)parameter streamId is incorrect. Expecting non empty string");
            return;
        }
        var localDataRef=dataref.child("publishedMediaList").child(streamId);
        var remoteDataRef=localDataRef.child("subscribersList");

        //init local stream
        if (actionType) {
            if (actionType==ACTION_TYPE_VIDEO) {
                localstream.connectLocalVideoStream(localVid,getLocalStreamCb);
            } else if (actionType==ACTION_TYPE_AUDIO) {
                localstream.connectLocalAudioStream(localVid,getLocalStreamCb);
            }else if (actionType==ACTION_TYPE_AUDIO_VIDEO) {
                localstream.connectLocalAudioVideoStream(localVid,getLocalStreamCb);
            }else if (actionType==ACTION_TYPE_SCREEN_SHARING) {
                localstream.connectLocalScreenSharingStream(localVid,getLocalStreamCb);
            }
        }


        // publish the stream
        localDataRef.set({from:me,appInstanceId:utils.appInstanceId,actionType:actionType});
        localDataRef.onDisconnect().remove();


        // subscribe to stream updates for add
        var addSubscribersListCb = function(snapshot) {
            var remoteAppInstanceId=snapshot.name();
            var data = snapshot.val();
            var subscriberId=data.userId;
            var _peercoId=data.peercoId;
            var _peercoRef=data.peercoRef;
            console.log("(webcomSDK::room["+roomId+"]::publishStream::addSubscribersListCb)subscriber "+subscriberId+" to stream "+streamId+" added "+JSON.stringify(data));
            if (!roomWebrtcStacks[streamId+"_pub"]) {
                roomWebrtcStacks[streamId+"_pub"]=[];
            }
            var isAudioMute=false;
            var isVideoMute=false;
            if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) isAudioMute=true;
            if (mMutedStreams[streamId] && mMutedStreams[streamId].video) isVideoMute=true;
            var mStackId = webrtcmngr.createWebrtc(null,remoteAppInstanceId,function () {
                console.log("(webcomSDK::room["+roomId+"]::publishStream::addSubscribersListCb)subscriber "+subscriberId+" to stream "+streamId+" connection lost");
//				onUnPublishedStream(localVid, remoteVid);
            },true,actionType,_peercoId,_peercoRef,isAudioMute,isVideoMute);

            roomWebrtcStacks[streamId+"_pub"].push({
                stackId:mStackId,
                subscriberId:subscriberId,
                isPublish:true,
                peercoId:_peercoId,
                peercoRef:_peercoRef
            });
            //delete roomWebrtcStacks[streamId+"_pub"];
            //$("div#videoButton_"+roomId+".videoButton, div#micButton_"+roomId+".micButton").removeClass("disabled");
        };
        // subscribe to stream updates for remove
        var removeSubscribersListCb = function(snapshot) {
            var subscriberId=snapshot.name();
            if (subscriberId) {
                console.log("(webcomSDK::room["+roomId+"]::publishStream::removeSubscribersListCb)subscriber "+subscriberId+" to stream "+streamId+" removed");
                if (roomWebrtcStacks[streamId+"_pub"] && roomWebrtcStacks[streamId+"_pub"].length>0) {
                    for (i=roomWebrtcStacks[streamId+"_pub"].length-1;i>=0;i--) {
                        if (roomWebrtcStacks[streamId+"_pub"][i].subscriberId==subscriberId) {
                            webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId+"_pub"][i].stackId,true);
                        }
                    }
                    delete roomWebrtcStacks[streamId+"_pub"];
                }
            }


        };


        mStreams[streamId]={
            addSubscribersListCb:addSubscribersListCb,
            removeSubscribersListCb:removeSubscribersListCb
        };

        remoteDataRef.on("child_added", addSubscribersListCb);
        remoteDataRef.on("child_removed", removeSubscribersListCb);
    }

    /**
     * Initializes the Published MediaList listener.
     * Defines callback (remove any existing one) for : published Media.
     * This callback is called, first for any existing published media, then when a new value is added in the database.
     */
    function _setOnPublishedStream(p_cb) {

        if (publishedMediaListCb) {
            dataref.child("publishedMediaList").off("child_added", publishedMediaListCb);
            publishedMediaListCb=null;
        }
        if (p_cb && typeof p_cb == 'function')  {
            publishedMediaListCb= function(snapshot) {
                var obj={};
                obj[snapshot.name()]=snapshot.val();
                obj[snapshot.name()].roomId=roomId;
                p_cb(obj);
            };
            dataref.child("publishedMediaList").on("child_added", publishedMediaListCb);
        } else {
            console.error("(webcomSDK::room["+roomId+"]::_setOnPublishedStream)parameter incorrect. Expected function");
        }
    }

    /**
     * Unpublishes the stream
     * @param streamId - The stream identifier
     * @param {function} callback - The callback to trigger
     */
    function _unPublishStream(streamId,callback) {
        console.log("(webcomSDK::room["+roomId+"]::unPublishStream)streamId "+streamId);
        var localDataRef=dataref.child("publishedMediaList").child(streamId);
        var remoteDataRef=localDataRef.child("subscribersList");
        if (mStreams[streamId] &&  mStreams[streamId].addSubscribersListCb ) {
            remoteDataRef.off("child_added", mStreams[streamId].addSubscribersListCb);
        }
        if (mStreams[streamId] &&  mStreams[streamId].removeSubscribersListCb ) {
            remoteDataRef.off("child_removed", mStreams[streamId].removeSubscribersListCb);
        }
        delete mStreams[streamId];
        delete mMutedStreams[streamId];
        localDataRef.onDisconnect().cancel();
        localDataRef.remove();
        if (roomWebrtcStacks[streamId+"_pub"] && roomWebrtcStacks[streamId+"_pub"].length>0) {
            var nbStack= roomWebrtcStacks[streamId+"_pub"].length;
            for (i=nbStack-1;i>=0;i--) {

                webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId+"_pub"][i].stackId,true,function () {
                    nbStack--;
                    if (nbStack<1) {
                        delete roomWebrtcStacks[streamId+"_pub"];

                        if (callback && typeof callback == "function")  callback();
                    }
                });
            }
        } else {
            delete roomWebrtcStacks[streamId+"_pub"];
            if (callback && typeof callback == "function") 	callback();
        }



    }

    /**
     * Initializes the unPublished MediaList listener.
     * Defines callback (remove any exinting one) for : unpublished Media.
     * This callback is called when a media is unpublish.
     */
    function _setOnUnPublishedStream(p_cb) {

        if (unPublishedMediaListCb) {
            dataref.child("publishedMediaList").off("child_removed", unPublishedMediaListCb);
            unPublishedMediaListCb=null;
        }
        if (p_cb && typeof p_cb == 'function')  {
            unPublishedMediaListCb= function(snapshot) {
                var streamId = snapshot.name();
                p_cb(streamId);
            };
            dataref.child("publishedMediaList").on("child_removed", unPublishedMediaListCb);
        } else {
            console.error("(webcomSDK::room["+roomId+"]::_setOnUnPublishedStream)parameter incorrect. Expected function");
        }
    }

    /**
     * Subscribes to a stream and adds callbacks to the dedicated node according to the action type of the stream data.
     * @param streamData - The stream data
     * @param remoteVid - The remote video
     * @param getRemoteStreamCb - a callback function to retrieve the mediastream object
     */
    function _subscribeToStream(streamData,remoteVid,getRemoteStreamCb) {
        var streamId=Object.keys(streamData)[0];
        var actionType=streamData[streamId].actionType;
        console.log("(webcomSDK::room["+roomId+"]::subscribeToStream)streamId "+streamId);
        //test if stream is not our
        if (mStreams && mStreams[streamId]) {
            //it is our stream -> subscribe to localStream
            if (actionType ) {
                if (actionType==ACTION_TYPE_VIDEO) {
                    localstream.connectLocalVideoStream(remoteVid,getRemoteStreamCb);
                } else if (actionType==ACTION_TYPE_AUDIO) {
                    localstream.connectLocalAudioStream(remoteVid,getRemoteStreamCb);
                }else if (actionType==ACTION_TYPE_AUDIO_VIDEO) {
                    localstream.connectLocalAudioVideoStream(remoteVid,getRemoteStreamCb);
                }
            }
            return streamId;
        }


        var appInstanceId=streamData[streamId].appInstanceId;

        var localDataRef=dataref.child("publishedMediaList").child(streamId);
        var remoteDataRef=localDataRef.child("subscribersList");
        var _peercoId = null;
        var _peercoRef = null;
        if (!roomWebrtcStacks[streamId+"_sub"]) {
            roomWebrtcStacks[streamId+"_sub"]=[];
        } else if ( roomWebrtcStacks[streamId+"_sub"] && roomWebrtcStacks[streamId+"_sub"][0] && roomWebrtcStacks[streamId+"_sub"][0].peercoId) {
            _peercoId=roomWebrtcStacks[streamId+"_sub"][0].peercoId;
        }

        if (!_peercoId) {
            _peercoId=Math.floor(Date.now() / 1000).toString();
        }

        _peercoRef=datarefs.getWebrtc().push().name();


        remoteDataRef.child(utils.appInstanceId).set({"ts":Webcom.ServerValue.TIMESTAMP,"userId":me,"peercoId":_peercoId,"peercoRef":_peercoRef});
        var isAudioMute=false;
        var isVideoMute=false;
        if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) isAudioMute=true;
        if (mMutedStreams[streamId] && mMutedStreams[streamId].video) isVideoMute=true;

        var mStackId = webrtcmngr.createWebrtc(remoteVid, appInstanceId, function () {
            //	onUnPublishedStream(localVid, remoteVid);
        },false,actionType,_peercoId,_peercoRef,isAudioMute,isVideoMute,getRemoteStreamCb);

        //handle remote unpublish
        if (!remoteUnpublishedtCb) {
            remoteUnpublishedtCb = function(snapshot) {
                var removedStreamId=Object.keys(snapshot)[0];
                if (roomWebrtcStacks[removedStreamId+"_sub"]) {
                    var i = 0;
                    while (i<roomWebrtcStacks[streamId+"_sub"].length) {
                        webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId+"_sub"][i].stackId,false);
                        i++;
                    }
                    delete roomWebrtcStacks[removedStreamId+"_sub"];
                }
            };
            dataref.child("publishedMediaList").on("child_removed",remoteUnpublishedtCb);
        }


        roomWebrtcStacks[streamId+"_sub"].push({
            stackId:mStackId,
            isPublish:false,
            peercoId:_peercoId,
            peercoRef:_peercoRef
        });
        return streamId;
    }

    /**
     * Unsubscribe from a stream
     * @param streamId - The stream identifier from which the unsubscription have to be done
     */
    function _unSubscribeFromStream(streamId) {
        console.log("(webcomSDK::room["+roomId+"]::unSubscribeFromStream)streamId "+streamId);
        var localDataRef=dataref.child("publishedMediaList").child(streamId);
        var remoteDataRef=localDataRef.child("subscribersList");
        remoteDataRef.child(me).remove();

        if (roomWebrtcStacks[streamId+"_sub"]) {
            var i = 0;
            while (i<roomWebrtcStacks[streamId+"_sub"].length) {
                if (roomWebrtcStacks[streamId+"_sub"][i]) {
                    webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId+"_sub"][i].stackId,false);
                }
                i++;
            }
            delete roomWebrtcStacks[streamId+"_sub"];
        }
        delete mMutedStreams[streamId];
    }

    /**
     * Returns log the available streams
     * @return nothing
     */
    function _logAvailableStreams() {
        console.log("(webcomSDK::room["+roomId+"]::_logAvailableStreams)");
        if (mAvailableStreams)
            for (i=0;i<mAvailableStreams.length;i++) {
                console.log("(webcomSDK::room["+roomId+"]::_logAvailableStreams)mAvailableStreams["+i+"]="+JSON.stringify(mAvailableStreams[i]));
            }
    }

    /**
     * Returns all the available streams
     * @return {array}
     */
    function _getAvailableStreams() {
        console.log("(webcomSDK::room["+roomId+"]::_getAvailableStreams)");
        return mAvailableStreams;
    }

    /**
     * Returns an available stream having the identifier
     * @param streamId - The stream identifier
     * @return - A stream
     */
    function _getAvailableStream(streamId) {
        console.log("(webcomSDK::room["+roomId+"]::_getAvailableStream)streamId="+streamId);
        if (mAvailableStreams && streamId) {
            for (var i=mAvailableStreams.length-1;i>=0;i--) {
                if (mAvailableStreams[i] && Object.keys(mAvailableStreams[i])[0] && Object.keys(mAvailableStreams[i])[0]==streamId) {
                    return mAvailableStreams[i] ;
                }
            }
        }
        return null;
    }

    /**
     * Adds an available stream
     * @param data - The stream to add
     */
    function _addAvailableStream(data) {
        console.log("(webcomSDK::room["+roomId+"]::_addAvailableStream)data="+JSON.stringify(data));
        mAvailableStreams.push(data);
    }

    /**
     * Removes an available stream
     * @param stream - The streamId to remove
     */
    function _removeAvailableStream(streamId) {
        console.log("(webcomSDK::room["+roomId+"]::_removeAvailableStream)streamId="+streamId);
        if (mAvailableStreams && streamId) {
            for (var i=mAvailableStreams.length-1;i>=0;i--) {
                if (mAvailableStreams[i] && Object.keys(mAvailableStreams[i])[0] && Object.keys(mAvailableStreams[i])[0]==streamId) {
                    delete mAvailableStreams[i] ;
                }
            }
        }
    }

    /**
     * Removes all the streams by deleting the array containing them without triggerring callbacks
     */
    function _removeAllAvailableStreams() {
        console.log("(webcomSDK::room["+roomId+"]::_removeAllAvailableStreams");
        mAvailableStreams = [];
    }

    /**
     * Audio mute the stream streamId
     * @param streamId - The stream identifier to mute
     */
    function _muteAudioStream(streamId) {
        if (!(streamId && typeof streamId == 'string')) {
            console.error("(webcomSDK::room["+roomId+"]::_muteAudioStream)parameter streamId is incorrect. Expecting non empty string");
            return;
        }
        console.log("(webcomSDK::room["+roomId+"]::_muteAudioStream)streamId="+streamId);
        if (!mMutedStreams[streamId]) mMutedStreams[streamId]= {};
        mMutedStreams[streamId].audio=true ;
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_pub"]&& roomWebrtcStacks[streamId+"_pub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_pub"].length-1;i>=0;i--) {
                webrtcmngr.muteAudioWebrtcStack(roomWebrtcStacks[streamId+"_pub"][i].stackId);
            }
        }
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_sub"]&& roomWebrtcStacks[streamId+"_sub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_sub"].length-1;i>=0;i--) {
                webrtcmngr.muteAudioWebrtcStack(roomWebrtcStacks[streamId+"_sub"][i].stackId);
            }
        }


    }

    /**
     * Audio unmuteStream the stream streamId
     * @param streamId - The stream identifier to unmute
     */
    function _unmuteAudioStream(streamId) {
        if (!(streamId && typeof streamId == 'string')) {
            console.error("(webcomSDK::room["+roomId+"]::_unmuteAudioStream)parameter streamId is incorrect. Expecting non empty string");
            return;
        }
        if (mMutedStreams[streamId] && mMutedStreams[streamId].audio ) mMutedStreams[streamId].audio= false;
        console.log("(webcomSDK::room["+roomId+"]::_unmuteAudioStream)streamId="+streamId);
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_pub"]&& roomWebrtcStacks[streamId+"_pub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_pub"].length-1;i>=0;i--) {
                webrtcmngr.unmuteAudioWebrtcStack(roomWebrtcStacks[streamId+"_pub"][i].stackId);
            }
        }
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_sub"]&& roomWebrtcStacks[streamId+"_sub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_sub"].length-1;i>=0;i--) {
                webrtcmngr.unmuteAudioWebrtcStack(roomWebrtcStacks[streamId+"_sub"][i].stackId);
            }
        }

    }

    /**
     * Video mute the stream streamId
     * @param streamId - The stream identifier to mute
     */
    function _muteVideoStream(streamId) {
        if (!(streamId && typeof streamId == 'string')) {
            console.error("(webcomSDK::room["+roomId+"]::_muteVideoStream)parameter streamId is incorrect. Expecting non empty string");
            return;
        }
        console.log("(webcomSDK::room["+roomId+"]::_muteVideoStream)streamId="+streamId);
        if (!mMutedStreams[streamId]) mMutedStreams[streamId]= {};
        mMutedStreams[streamId].video=true ;
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_pub"]&& roomWebrtcStacks[streamId+"_pub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_pub"].length-1;i>=0;i--) {
                webrtcmngr.muteVideoWebrtcStack(roomWebrtcStacks[streamId+"_pub"][i].stackId);
            }
        }
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_sub"]&& roomWebrtcStacks[streamId+"_sub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_sub"].length-1;i>=0;i--) {
                webrtcmngr.muteVideoWebrtcStack(roomWebrtcStacks[streamId+"_sub"][i].stackId);
            }
        }


    }

    /**
     * Video unmuteStream the stream streamId
     * @param streamId - The stream identifier to unmute
     */
    function _unmuteVideoStream(streamId) {
        if (!(streamId && typeof streamId == 'string')) {
            console.error("(webcomSDK::room["+roomId+"]::_unmuteVideoStream)parameter streamId is incorrect. Expecting non empty string");
            return;
        }
        if (mMutedStreams[streamId] && mMutedStreams[streamId].video ) mMutedStreams[streamId].video= false;
        console.log("(webcomSDK::room["+roomId+"]::_unmuteVideoStream)streamId="+streamId);
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_pub"]&& roomWebrtcStacks[streamId+"_pub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_pub"].length-1;i>=0;i--) {
                webrtcmngr.unmuteVideoWebrtcStack(roomWebrtcStacks[streamId+"_pub"][i].stackId);
            }
        }
        if (roomWebrtcStacks && roomWebrtcStacks[streamId+"_sub"]&& roomWebrtcStacks[streamId+"_sub"].length>0) {
            for (i=roomWebrtcStacks[streamId+"_sub"].length-1;i>=0;i--) {
                webrtcmngr.unmuteVideoWebrtcStack(roomWebrtcStacks[streamId+"_sub"][i].stackId);
            }
        }

    }


    /**
     * Closes the room.
     * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
     * @param updateRoomStatusToClose - true if the room should be marked as closed
     */
    function _close(updateRoomStatusToClose) {
        console.log("(webcomSDK::room["+roomId+"]::_close)room "+roomId+", detroyRoom="+updateRoomStatusToClose);
        // mark as disconnected when the room is left
        dataref.child("participantList").child(me).child("connected").set(false);
        // remove webcom callbacks
        for (var stream in mStreams) {
            _unPublishStream(stream);
        }
        mStreams=[];
        if (instantMessageListCb) {
            dataref.child("instantMessageList").off("child_added", instantMessageListCb);
            instantMessageListCb = null;
        }
        if (publishedMediaListCb) {
            dataref.child("publishedMediaList").off("child_added", publishedMediaListCb);
            publishedMediaListCb = null;
        }
        if (publishedMediaListCbForAvailableStream) {
            dataref.child("publishedMediaList").off("child_added", publishedMediaListCbForAvailableStream);
            publishedMediaListCbForAvailableStream = null;
        }

        if (unPublishedMediaListCb) {
            dataref.child("publishedMediaList").off("child_removed", unPublishedMediaListCb);
            unPublishedMediaListCb = null;
        }

        if (unPublishedMediaListCbForAvailableStream) {
            dataref.child("publishedMediaList").off("child_removed", unPublishedMediaListCbForAvailableStream);
            unPublishedMediaListCbForAvailableStream = null;
        }

        if (participantListJoinAddedCb) {
            dataref.child("participantList").off("child_added", participantListJoinAddedCb);
            participantListJoinAddedCb = null;
        }

        if (participantListJoinChangedCb) {
            dataref.child("participantList").off("child_changed", participantListJoinChangedCb);
            participantListJoinChangedCb = null;
        }

        if (participantListLeaveCb) {
            dataref.child("participantList").off("child_changed", participantListLeaveCb);
            participantListLeaveCb = null;
        }

        if (remoteUnpublishedtCb) {
            dataref.child("publishedMediaList").off("child_removed",remoteUnpublishedtCb);
            remoteUnpublishedtCb=null;
        }

        // close all webrtc stacks
        for (var i in roomWebrtcStacks) {
            for (var j=0;j<roomWebrtcStacks[i].length;j++) {
                if (roomWebrtcStacks[i][j]) {
                    if (roomWebrtcStacks[i][j].isPublish) {
                        webrtcmngr.closeWebrtc(roomWebrtcStacks[i][j].stackId,true);
                    } else {
                        webrtcmngr.closeWebrtc(roomWebrtcStacks[i][j].stackId,false);
                    }
                    webrtcmngr.clearWebrtcStacks(roomWebrtcStacks[i][j].stackId);
                }
            }
        }
        roomWebrtcStacks={};


        mMutedStreams=[];

        _removeAllAvailableStreams();
        if (updateRoomStatusToClose && updateRoomStatusToClose===true) {
            dataref.child("commonDataList").child("status").set(ROOM_STATUS_CLOSE);
        }

    }

    init();

    return {
        /**
         * Return the room identifier
         * @return {string} - The room identifier
         */
        getRoomId: function() {
            return _getRoomId();
        },
        /**
         * Returns the user identifier
         * @return {string} - The user identifier
         */
        getMe: function() {
            return _getMe();
        },
        /**
         * Defines the callback to trigger when a participant has joined the room
         * @param {function} p_cb - The callback
         */
        setOnParticipantJoin: function(p_cb) {
            _setOnParticipantJoin(p_cb);
        },
        /**
         * Defines the callback to trigger when a aprticipant has leaft the room
         * @param {function} p_cb - The callback
         */
        setOnParticipantLeave: function(p_cb) {
            _setOnParticipantLeave(p_cb);
        },
        /**
         * Sends an instant message
         * @param {string} message - The emssage to send
         * @return nothing
         */
        sendInstantMessage: function(message) {
            return _sendInstantMessage(message);
        },
        /**
         * Defines the callback to trigger to send an instant message
         * @param {function} p_cb - The callback
         */
        setOnInstantMessage: function(p_cb) {
            _setOnInstantMessage(p_cb);
        },
        /**
         * Publishes a stream
         * @param streamId - The identifier of the stream to publish
         * @param localVid - The local video
         * @param actionType -
         * @param getStreamCb - a callback function to retrieve the mediastream object
         * @return nothing
         */
        publishStream: function(streamId, localVid, actionType,getStreamCb) {
            return _publishStream(streamId, localVid, actionType,getStreamCb);
        },
        /**
         * Defines the callback to triggerwhen a stream has been published
         * @param {function} p_cb - The callback
         */
        setOnPublishedStream: function(p_cb) {
            _setOnPublishedStream(p_cb);
        },
        /**
         * Unpublishes the stream
         * @param streamId - The identifier of the stream to unpublish
         * @param callback - The clalback to trigger when the stream has been unpublished
         */
        unPublishStream: function(streamId,callback) {
            return _unPublishStream(streamId,callback);
        },
        /**
         * Defines the callback to trigger when a stream has been unpublished
         * @param {function} p_cb - The callback
         */
        setOnUnPublishedStream: function(p_cb) {
            _setOnUnPublishedStream(p_cb);
        },

        /**
         * Subscribes to a stream
         * @param streamData - The stream data
         * @param remoteVid - The remote video
         * @param getStreamCb - a callback function to retrieve the mediastream object
         * @return nothing
         */
        subscribeToStream: function(streamData,remoteVid,getStreamCb) {
            return _subscribeToStream(streamData,remoteVid,getStreamCb);
        },
        /**
         * Unsubcribes from a stream
         * @param streamId - The identifier of the stream to unsubscribe
         */
        unSubscribeFromStream: function(streamId) {
            return _unSubscribeFromStream(streamId);
        },
        /**
         * Returns all the available streams
         * @return {array} - The available streams
         */
        getAvailableStreams: function() {
            return _getAvailableStreams();
        },
        /**
         * Returns the stream matching the identifier
         * @param stream - The stream identifier
         */
        getAvailableStream: function(stream) {
            return _getAvailableStream(stream);
        },
        /**
         *  mute audio the stream streamId
         * @param streamId - The stream identifier to mute
         */
        muteAudioStream: function(streamId) {
            _muteAudioStream(streamId);
        },
        /**
         * unmute audio the stream streamId
         * @param streamId - The stream identifier to mute
         */
        unmuteAudioStream: function(streamId) {
            _unmuteAudioStream(streamId);
        },
        /**
         *  mute Video the stream streamId
         * @param streamId - The stream identifier to mute
         */
        muteVideoStream: function(streamId) {
            _muteVideoStream(streamId);
        },
        /**
         * unmute Video the stream streamId
         * @param streamId - The stream identifier to mute
         */
        unmuteVideoStream: function(streamId) {
            _unmuteVideoStream(streamId);
        },
        /**
         * Closes the room.
         * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
         * @param updateRoomStatusToClose - true if the room should be marked as closed
         */
        close: function(updateRoomStatusToClose) {
            return _close(updateRoomStatusToClose);
        },
        /**
         * Calls the maching function for a dedicated event
         * @param {string} evt - The event, in "instantMessage", "publishedStream", "unPublishedStream", "participantJoin", "participantLeave"
         * @param {function} p_cb - The callback to call
         */
        on: function(evt, p_cb) {
            switch(evt) {
                case "instantMessage":
                    _setOnInstantMessage(p_cb);
                    break;
                case "publishedStream":
                    _setOnPublishedStream(p_cb);
                    break;
                case "unPublishedStream":
                    _setOnUnPublishedStream(p_cb);
                    break;
                case "participantJoin":
                    _setOnParticipantJoin(p_cb);
                    break;
                case "participantLeave":
                    _setOnParticipantLeave(p_cb);
                    break;
                default:
                    console.err("(webcomSDK::room["+roomId+"]::on)unsupported "+evt+" event");
                    break;
            }
        }
    };
});
/*
 * #%L
 * Webcom service
 * 
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2014 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * 
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */

/**
 * @file webrtcmngr.js - JS file for a WebRTC manager
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc : 1.2.0
 *
 *
 * Available elements:
 <ul>
 <li>
 createWebrtc(p_Vid, p_remoteAppInstId, p_onCloseCb, p_isPublish, p_actionType)
 </li>
 <li>
 closeWebrtc(id, p_isUnPublish, callback)
 </li>
 <li>
 clearWebrtcStacks(webrtcStackId)
 </li>
 </ul>
 */

/**
 * @constructor
 * @description WebRTC manager handling the WebRTC stacks in use
 */
var webrtcmngr = (function() {

    /**
     * @description An array containg the WebRTC stacks in use
     */
    var webrtcStacks = [];
    /**
     * @description An array containt the virtual WebRTC stacks
     */
    var virtualWebrtcStacks = [];

    /**
     * Creates a WebRTC object
     * @param p_Vid - the video container linked to the peerconnection
     * @param p_remoteAppInstId - the remote application instance identifier
     * @param p_onCloseCb - A callback to trigger when the connection is closed
     * @param p_isPublish - true if it's a peerconnection related to a publishStream, false if it's relatated to a subscribe
     * @param p_actionType - The action type (audio, video, audio-video)
     * @param p_peercoId - The PeerConnection Id
     * @param p_peercoRef - The PeerConnection Ref in the webrtc node
     * @param p_peercoRef - The PeerConnection Id in the webrtc node
     * @param p_mutedAudio - optional - if true peerconnection will be created muted
     * @param p_muteVideo - optional - if true peerconnection will be created with video muted
     * @param p_getStreamCb - a callback function to retrieve the mediastream object
     */
    function _createWebrtc(p_Vid, p_remoteAppInstId, p_onCloseCb,p_isPublish,p_actionType,p_peercoId,p_peercoRef,p_mutedAudio,p_muteVideo,p_getStreamCb) {
        var webrtcStackId=p_peercoId ;
//    	 if (p_isPublish) {
//    		 webrtcStackId=utils.appInstanceId+"_"+p_remoteAppInstId;
//         } else {
//        	 webrtcStackId=p_remoteAppInstId+"_"+utils.appInstanceId;
//         }
        var localDataRef = datarefs.getWebrtc().child(p_peercoRef).child(utils.appInstanceId);
        var remoteDataRef = datarefs.getWebrtc().child(p_peercoRef).child(p_remoteAppInstId);
        var virtualWebrtcStack ;
        // create the virtual webrtcstack
        if (p_isPublish) {
            virtualWebrtcStack = {
                webRtcStackId: webrtcStackId,
                localVid: p_Vid
            };
        } else {
            virtualWebrtcStack = {
                webRtcStackId: webrtcStackId,
                remoteVid: p_Vid
            };
        }
        var id = virtualWebrtcStacks.push(virtualWebrtcStack) - 1;

        // create the real webrtcstack if it does not already exist
        if (!webrtcStacks[webrtcStackId]) {
            console.debug("webcomSDK::webrtcmngr::createWebrtc->create a new real webrtcStack");
            // create the real webrtcstack
            var webRtcStack;
            webRtcStack = webrtc(p_isPublish, localDataRef, remoteDataRef,webrtcStackId,p_actionType,p_mutedAudio,p_muteVideo);
            webRtcStack.setOnClose(p_onCloseCb);
            if (p_isPublish) {
                webrtcStacks[webrtcStackId] = {
                    stack:webRtcStack,
                    isPublished:1,
                    isSubscribed:0
                };
                webRtcStack.connectLocalStream(p_Vid,p_getStreamCb);
            } else {
                webrtcStacks[webrtcStackId] = {
                    stack:webRtcStack,
                    isPublished:0,
                    isSubscribed:1
                };
                webRtcStack.connectRemoteStream(p_Vid,p_getStreamCb);
            }



        } else {
            console.debug("webcomSDK::webrtcmngr::createWebrtc->use existing real webrtcStack");
            // increment ref counter
            if (p_isPublish) {
                webrtcStacks[webrtcStackId].isPublished++;
                webrtcStacks[webrtcStackId].stack.connectLocalStream(p_Vid,p_getStreamCb);
            } else {
                webrtcStacks[webrtcStackId].isSubscribed++;
                webrtcStacks[webrtcStackId].stack.connectRemoteStream(p_Vid,p_getStreamCb);
            }


        }
        console.debug("webcomSDK::webrtcmngr::createWebrtc->webrtcStack:"+webrtcStackId+ " new isPublished count ="+webrtcStacks[webrtcStackId].isPublished+" new isSubscribed count ="+webrtcStacks[webrtcStackId].isSubscribed);
        return id;
    }

    /**
     * Close WebRTC features : detach media streams and unpublish stacks.
     * @param id -
     * @param p_isUnPublish
     * @param callback -
     */
    function _closeWebrtc(id,p_isUnPublish,callback) {
        console.debug("webcomSDK::webrtcmngr::closeWebrtc->id="+id);
        if (!virtualWebrtcStacks[id]) {
            console.warn("webcomSDK::webrtcmngr::closeWebrtc: virtualstack "+id+" not found");
            if (callback && typeof callback == "function") {
                callback();
            }
            return false;
        }
        // disconnect the video streams
        if (virtualWebrtcStacks[id].localVid) { detachMediaStream(virtualWebrtcStacks[id].localVid); }
        if (virtualWebrtcStacks[id].remoteVid) { detachMediaStream(virtualWebrtcStacks[id].remoteVid);}


        var webrtcStackId = virtualWebrtcStacks[id].webRtcStackId;
        if (webrtcStackId && webrtcStacks[webrtcStackId]  ) {
            if (p_isUnPublish && webrtcStacks[webrtcStackId].isPublished>0) {
                webrtcStacks[webrtcStackId].isPublished--;
            } else if (!p_isUnPublish && webrtcStacks[webrtcStackId].isSubscribed>0) {
                webrtcStacks[webrtcStackId].isSubscribed--;
            }
            if (webrtcStacks[webrtcStackId].isPublished<1 && webrtcStacks[webrtcStackId].isSubscribed<1) {
                console.debug("webcomSDK::webrtcmngr::closeWebrtc->destroy  real webrtcStack:"+webrtcStackId);
                // destroy the stack
                webrtcStacks[webrtcStackId].stack.close(callback);
                webrtcStacks[webrtcStackId] = null;
            } else {
                console.debug("webcomSDK::webrtcmngr::closeWebrtc->decrement  real webrtcStack:"+webrtcStackId+ " new isPublished count ="+webrtcStacks[webrtcStackId].isPublished+" new isSubscribed count ="+webrtcStacks[webrtcStackId].isSubscribed);
                if (callback && typeof callback == "function") {
                    callback();
                }
            }
        } else {
            if (callback && typeof callback == "function") {
                callback();
            }
            console.warn("webcomSDK::webrtcmngr::closeWebrtc cannot found real stack");
        }
        return true;
    }

    /**
     * Clears a specifical WebRTC stack by setting it to null.
     * @param webrtcStackId - The WebRTC stack ID to clear
     */
    function _clearWebrtcStacks(webrtcStackId) {
        console.debug("webcomSDK::webrtcmngr::clearWebrtcStacks id="+webrtcStackId);
        if (webrtcStackId && webrtcStacks && webrtcStacks[webrtcStackId]) {
            webrtcStacks[webrtcStackId] = null;
        }
        return true;
    }

    /**
     * Audio mute the webrtc peerconnection
     * @param virtualWebrtcStackId - The WebRTC stack ID to mute
     */
    function _muteAudioWebrtcStack(virtualWebrtcStackId) {
        console.log("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId);

        if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
            var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
            console.log("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ "webRtcStackId="+webRtcStackId);
            if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
                webrtcStacks[webRtcStackId].stack.muteAudio();
            }  else {
                console.warn("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) webrtcStack="+webRtcStackId+ "not found");
            }
        } else {
            console.warn("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ "not found");
        }


    }

    /**
     * Audio unmute the webrtc peerconnection
     * @param webrtcStackId - The WebRTC stack ID to unmute
     */
    function  _unmuteAudioWebrtcStack (virtualWebrtcStackId) {
        console.log("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId);

        if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
            var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
            console.log("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ ",webRtcStackId="+webRtcStackId);
            if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
                webrtcStacks[webRtcStackId].stack.unmuteAudio();
            }  else {
                console.warn("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) webrtcStack="+webRtcStackId+ "not found");
            }
        } else {
            console.warn("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ "not found");
        }

    }


    /**
     * Video mute the webrtc peerconnection
     * @param virtualWebrtcStackId - The WebRTC stack ID to mute
     */
    function _muteVideoWebrtcStack(virtualWebrtcStackId) {
        console.log("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId);

        if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
            var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
            console.log("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ "webRtcStackId="+webRtcStackId);
            if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
                webrtcStacks[webRtcStackId].stack.muteVideo();
            }  else {
                console.warn("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) webrtcStack="+webRtcStackId+ "not found");
            }
        } else {
            console.warn("(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ "not found");
        }


    }

    /**
     * Video unmute the webrtc peerconnection
     * @param webrtcStackId - The WebRTC stack ID to unmute
     */
    function  _unmuteVideoWebrtcStack (virtualWebrtcStackId) {
        console.log("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId);

        if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
            var webRtcStackId=virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
            console.log("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ ",webRtcStackId="+webRtcStackId);
            if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
                webrtcStacks[webRtcStackId].stack.unmuteVideo();
            }  else {
                console.warn("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) webrtcStack="+webRtcStackId+ "not found");
            }
        } else {
            console.warn("(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId="+virtualWebrtcStackId+ "not found");
        }

    }


    return {

        /**
         * Creates a WebRTC object
         * @param p_Vid - the video container linked to the peerconnection
         * @param p_remoteAppInstId - the remote application instance identifier
         * @param p_onCloseCb - A callback to trigger when the connection is closed
         * @param p_isPublish - true if it's a peerconnection related to a publishStream, false if it's relatated to a subscribe
         * @param p_actionType - The action type (audio, video, audio-video)
         * @param p_peercoId - The PeerConnection Id in the webrtc node
         */
        createWebrtc: function(p_Vid, p_remoteAppInstId, p_onCloseCb,p_isPublish,p_actionType,p_peercoId,p_mutedAudio,p_muteVideo,p_getStreamCb) {
            return  _createWebrtc(p_Vid, p_remoteAppInstId, p_onCloseCb,p_isPublish,p_actionType,p_peercoId,p_mutedAudio,p_muteVideo,p_getStreamCb);
        },

        /**
         * Close WebRTC features : detach media streams and unpublish stacks.
         * @param id -
         * @param p_isUnPublish
         * @param callback -
         */
        closeWebrtc: function(id,p_isUnPublish,callback) {
            return  _closeWebrtc(id,p_isUnPublish,callback);
        },

        /**
         * Clears a specifical WebRTC stack by setting it to null.
         * @param webrtcStackId - The WebRTC stack ID to clear
         */
        clearWebrtcStacks: function(webrtcStackId) {
            return _clearWebrtcStacks(webrtcStackId);
        },
        /**
         * audio mute the webrtc peerconnection
         * @param virtualWebrtcStackId - The WebRTC stack ID to mute
         */
        muteAudioWebrtcStack: function(virtualWebrtcStackId) {
            return _muteAudioWebrtcStack(virtualWebrtcStackId);

        },
        /**
         *  audio unmute the webrtc peerconnection
         * @param virtualWebrtcStackId - The WebRTC stack ID to unmute
         */
        unmuteAudioWebrtcStack: function(virtualWebrtcStackId) {
            return _unmuteAudioWebrtcStack(virtualWebrtcStackId);
        },
        /**
         * video mute the webrtc peerconnection
         * @param virtualWebrtcStackId - The WebRTC stack ID to mute
         */
        muteVideoWebrtcStack: function(virtualWebrtcStackId) {
            return _muteVideoWebrtcStack(virtualWebrtcStackId);

        },
        /**
         * video unmute the webrtc peerconnection
         * @param virtualWebrtcStackId - The WebRTC stack ID to unmute
         */
        unmuteVideoWebrtcStack: function(virtualWebrtcStackId) {
            return _unmuteVideoWebrtcStack(virtualWebrtcStackId);
        }


    };
})();
/*
 * #%L
 * Webcom service
 * 
 * Module name: com.orange.webrtc:webcom-service
 * Version:     0.0.1-SNAPSHOT
 * Created:     2014-04-01
 * %%
 * Copyright (C) 2013 - 2014 Orange Labs
 * %%
 * This software is confidential and proprietary information of Orange.
 * You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * 
 * If you are Orange employee you shall use this software in accordance with
 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
 * #L%
 */

/**
 * @file webrtc.js - JS file used for WebRTC aspects
 * @author Webcom
 * @copyright Orange Labs (C) 2013 - 2014
 * @licence Orange
 *
 * Version doc : 1.4.0
 *
 * Available elements:
 <ul>
 <li>
 setOnClose(cb)
 </li>
 <li>
 close(cb)
 </li>
 <li>
 connectLocalStream(videoElt)
 </li>
 <li>
 connectRemoteStream(videoElt)
 </li>
 </ul>
 */


/**
 * @constructor
 * @description WebRTC connection object. Manages a WebRTC connection, i.e. one peerconnection
 * @param p_isPublish - Flag indicating if there is a plublish action
 * @param p_localDataRef - The local data ref
 * @param p_remoteDataRef - The remote data ref
 * @param p_webrtcStackId - The stack ID in use
 * @param p_actionType -
 * @param p_muteAudio - optional - if true peerconnection will be created with audio muted
 * @param p_muteVideo - optional - if true peerconnection will be created with video muted
 */
var webrtc = function(p_isPublish, p_localDataRef, p_remoteDataRef, p_webrtcStackId,p_actionType,p_muteAudio,p_muteVideo) {

    /**
     * @description The WebRTC stack identifier, here the current timestamp
     */
    var stackId = new Date().getTime();
    /**
     * @description If there is a publish action or not
     */
    var isPublish = p_isPublish;
    /**
     * @description The peer connection
     */
    var pc = null;
    /**
     * @description The local data ref
     */
    var localDataRef = p_localDataRef;
    /**
     * @description The remtoe data ref
     */
    var remoteDataRef = p_remoteDataRef;
    /**
     * @description A callback to trigger where a list of ICE candidates is provided
     */
    var iceCandidatesListCb = null;
    /**
     * @description A callback triggered when a SDP offer has been received
     */
    var sdpOfferCb = null;
    /**
     * @description A callback triggered when a SDP answer has been received
     */
    var sdpAnswerCb = null;
    /**
     * @description A callback triggered on a remote dataref event
     */
    var remotedatarefCb = null;
    /**
     * @description A callback triggered when the connection is closing
     */
    var onCloseCb = null;
    /**
     * @description The WebRTC stack ID
     */
    var webrtcStackId = p_webrtcStackId;
    /**
     * @description The action type to process
     */
    var actionType = p_actionType;
    /**
     * @description The configuration
     */
    var config = null;

    /**
     * @description A peer connection object, for cross browsers compatibilities
     */
    var myPeerConnection = null;
    //var myCreateObjectURL = null;
    /**
     * @description An RTC session description, for cross browsers compatibilities
     */
    var myRTCSessionDescription = null;
    /**
     * @description An RTC ICE candidate, for cross browsers compatibilities
     */
    var myRTCIceCandidate = null;

    /**
     * @description An array containing local streams
     */
    var localStreams = [];
    /**
     * @description An array containing remote streams
     */
    var remoteStreams = [];
    /**
     * @description An array containing remote streams CB
     */
    var remoteStreamsCb = [];
    /**
     * @description The received stream
     */
    var receivedStream = null;
    /**
     * @description The sent stream
     */
    var sentStream = null;
    /**
     * @description Flag indicating if the connection is closed
     */
    var isClosed = false;
    /**
     * @description Flag indicating if the close process is on going
     */
    var closeInProgress = false;
    /**
     * @description The ICE connection state
     */
    var iceConnectionState = null;
    /**
     * @description Another callback to trigger when the connection should be closed
     */
    var onCloseCb2 = null;

    var isAudioMute=false;

    var isVideoMute=false;



    console.log("(webcomSDK::webrtc::)stackId="+stackId+ " isPublish="+isPublish + ',localDataRef=' + localDataRef + ',remoteDataRef=' + remoteDataRef + ')');

    /**
     * @description A Datagram Transport Layer Security (DTLS) key agreement
     */
    var DtlsSrtpKeyAgreement = {
        DtlsSrtpKeyAgreement: true
    };

    /**
     * @description - Some options
     */
    var optional = {
        optional: [DtlsSrtpKeyAgreement]
    };

    /**
     * @description The publisher media constraints as a JSON array
     */
    var publisherMediaConstraints = {
        'mandatory' : {
            'OfferToReceiveAudio' : false,
            'OfferToReceiveVideo' : false
        }
    };

    /**
     * @description The subscriber media constraints as a JSON array
     */
    var subscriberMediaConstraints = {
        'mandatory' : {
            'OfferToReceiveAudio' : true,
            'OfferToReceiveVideo' : true
        }
    };

    /**
     * Callback to trigger when an error occurs
     * @param e - The error
     */
    function onError(e) {
        console.log("(webcomSDK::webrtc::)stackId="+stackId+ "error="+e);
        console.dir(e);
    }

    /**
     * Initializes the object
     */
    function init() {
        console.log("(webcomSDK::webrtc::init)stackId="+stackId);
        // peerconnection
        if (typeof(RTCPeerConnection)==="function")
        {
            myPeerConnection=RTCPeerConnection;
        }
        else
        {
            console.error("(webcomSDK::webrtc::init)stackId="+stackId+ " error=Webrtc is not supported on this browser !");
            throw new Error("Webrtc is not supported on this browser !");
        }

        if (typeof(RTCSessionDescription) === "function")
        {
            myRTCSessionDescription=RTCSessionDescription;
        }
        else
        {
            console.error("(webcomSDK::webrtc::init)stackId="+stackId+ " error2=Webrtc is not supported on this browser !");
            throw new Error("Webrtc is not supported on this browser !");
        }

        if (typeof(RTCIceCandidate) === "function")
        {
            myRTCIceCandidate=RTCIceCandidate;
        }
        else
        {
            console.error("(webcomSDK::webrtc::init)stackId="+stackId+ " error3=Webrtc is not supported on this browser !");
            throw new Error("Webrtc is not supported on this browser !") ;
        }

        if (p_muteAudio) isAudioMute=true;
        if (p_muteVideo) isVideoMute=true;

        getIceServersConfigFromServer(function(_config) {
            config=_config;
            console.log("(webcomSDK::webrtc::) use server config=", JSON.stringify(config));
            init_pc();
        },function(error) {
            if (typeof DEFAULT_ICE_CONFIG !== 'undefined') {
                config=DEFAULT_ICE_CONFIG;
                console.log("(webcomSDK::webrtc::) use DEFAULT_ICE_CONFIG config=", JSON.stringify(config));
            } else {
                console.log("(webcomSDK::webrtc::) no ice  config");
            }
            init_pc();
        });

    }

    /**
     * Sets up the server's configuration by adding callbacks on base eventds
     * @param {function} callbackOk - The callback if no problem occur
     * @param {function} callbackKo - The callback to trigger if a problem occurs during the configuration
     */
    function getConfigFromServer(callbackOk,callbackKo) {
        if (datarefs.getDatastore()) {
            var fireConfig = datarefs.getDatastore().child("config");
            fireConfig.once('value', function(snapshot) {
                    if (snapshot && snapshot.val()) {
                        config=snapshot.val();
                        if (typeof callbackOk == "function")
                            callbackOk(snapshot.val());
                    } else {
                        if (typeof callbackKo == "function")
                            callbackKo();
                    }
                },function(error) {
                    if (typeof callbackKo == "function")
                        callbackKo(error);
                }
            );
        } else {
            if (typeof callbackKo == "function")
                callbackKo();
        }
    }

    /**
     * Initializes the peer connection
     */
    function init_pc() {
        console.log("(webcomSDK::webrtc::init_pc)stackId="+stackId+"_config=", JSON.stringify(config));
        // TODO test is config is malformated or empty
        pc = new myPeerConnection(config,optional);


        // ------------------------------------------------------------------
        // Received Ice candidate from the stack: send it to the peer
        // ------------------------------------------------------------------
        pc.onicecandidate = function(e) {
            if (e.candidate) {
                console.log("(webcomSDK::webrtc::pc.onicecandidate)stackId="+stackId+ " send ice candidate="+JSON.stringify(e.candidate));
                localDataRef.child("iceCandidatesList").push({
                    label : e.candidate.sdpMLineIndex,
                    id : e.candidate.sdpMid,
                    candidate : e.candidate.candidate
                });
            }
        };

        // ------------------------------------------------------------------
        // Received a remote stream from the stack: play it on the video player
        // ------------------------------------------------------------------
        pc.onaddstream = function(e) {
            console.debug("(webcomSDK::webrtc::onaddstream)stackId="+stackId + "-" + 'stream:'+JSON.stringify(e.stream));
            if (e && e.stream)  {
                receivedStream=e.stream;
                if (isAudioMute) _muteAudio();
                if (isVideoMute) _muteVideo();
            }
//            _remoteStream = e.stream;
//            
//			for (var i=0;i<remoteStreams.length;i++) {
//			    if (remoteStreams[i]) {
//			    	  console.debug("(webcomSDK::webrtc::onaddstream)pc.onaddstream stackId="+stackId + "-" +"rendering remote vid to "+remoteStreams[i].id);
//			    	  attachMediaStream( remoteStreams[i],_remoteStream);
//			    }
//			}
        };

        pc.oniceconnectionstatechange = function() {

            if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CHECKING) {
                console.debug("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-" +"checking");
                iceConnectionState=ICE_CONNECTION_STATE_CHECKING;
            } else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CONNECTED) {
                iceConnectionState=ICE_CONNECTION_STATE_CONNECTED;
                console.debug("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-" +"connected");
                if (receivedStream) {
                    for (var i=0;i<remoteStreams.length;i++) {
                        if (remoteStreams[i]) {
                            console.debug("(webcomSDK::webrtc::onaddstream)pc.onaddstream stackId="+stackId + "-" +"rendering remote vid to "+remoteStreams[i].id);
                            attachMediaStream( remoteStreams[i],receivedStream);
                        }
                    }
                    for (var j=0;j<remoteStreamsCb.length;j++) {
                        if (remoteStreamsCb[j]) {
                            remoteStreamsCb[j](receivedStream)
                        }
                    }
                    remoteStreamsCb=[];
                }
                stopListeningToRemoteIceCandidate ();
            }else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_COMPLETED) {
                iceConnectionState=ICE_CONNECTION_STATE_COMPLETED;
                console.debug("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-" +ICE_CONNECTION_STATE_COMPLETED);
                stopListeningToRemoteIceCandidate ();
            } if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_DISCONNECTED) {
                iceConnectionState=ICE_CONNECTION_STATE_DISCONNECTED;
                console.log("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-" + 'remote disconnection, closing peer connection');
                _close();
            } else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CLOSED) {
                console.debug("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-" +"closed");
                iceConnectionState=ICE_CONNECTION_STATE_CLOSED;
                _close();
            } else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_FAILED) {
                console.debug("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-" +"failed");
                iceConnectionState=ICE_CONNECTION_STATE_FAILED;
                _close();
            }   else {
                if (!!pc) {
                    console.debug("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-" +pc.iceConnectionState);
                } else {
                    console.debug("(webcomSDK::webrtc::oniceconnectionstatechange)stackId="+stackId + "-pc = null");
                }

                iceConnectionState=ICE_CONNECTION_STATE_OTHER;
            }

            if (isClosed &&  (iceConnectionState==ICE_CONNECTION_STATE_DISCONNECTED || iceConnectionState==ICE_CONNECTION_STATE_CLOSED || iceConnectionState==ICE_CONNECTION_STATE_FAILED)) {
                console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-" + 'closed webrtc stack complete');
                pc = null;
                closeInProgress=false;
                webrtcmngr.clearWebrtcStacks(webrtcStackId);
                if (onCloseCb && typeof onCloseCb == "function") {
                    onCloseCb();
                }
                if (onCloseCb2 && typeof onCloseCb2 == "function") {
                    onCloseCb2();
                }

            }
        };

        // subscribe to remote data
        iceCandidatesListCb = function(snapshot) {
            var data = snapshot.val();
            var candidate = new myRTCIceCandidate({
                sdpMLineIndex : data.label,
                candidate : data.candidate,
                sdpMid : data.id
            });
            console.log("(webcomSDK::webrtc::iceCandidatesListCb)stackId="+stackId+ "received ice candidate="+JSON.stringify(candidate));

            pc.addIceCandidate(candidate);
            // remove candidate from webcom
            //snapshot.ref().remove();
        };

        if (isPublish) {
            _initlocalStream(function() {
                _initSdpCallbacks();
                sendOffer();

            });
        } else {
            _initSdpCallbacks();
        }



    }

    /**
     * Gets the ICE servers configuration
     * @param callbackOk - The callback to trigger when the config retrievement is done
     * @param callbackKo - The callback to trigger when an error occurs
     */
    function getIceServersConfigFromServer(callbackOk,callbackKo) {
        console.log("webcomSDK::webrtc::getIceServersConfigFromServer");
        var _config;
        if (localDataRef) {
            var fireConfig = localDataRef.root().child("config");
            fireConfig.once('value', function(snapshot) {
                    if (snapshot && snapshot.val()) {
                        _config=snapshot.val();
                        if (typeof callbackOk == "function")
                            callbackOk(_config);
                    } else {
                        if (typeof callbackKo == "function")
                            callbackKo();
                    }
                },function(error) {
                    if (typeof callbackKo == "function")
                        callbackKo(error);
                }
            );
        } else {
            if (typeof callbackKo == "function")
                callbackKo();
        }
    }

    /**
     * Starts the listing to a remote ICE candidate by enabling the dedicated callback
     * for the "child_added" event on the "iceCandidatesList" node in the database.
     */
    function startListeningToRemoteIceCandidate (){
        remoteDataRef.child("iceCandidatesList").on("child_added", iceCandidatesListCb);
    }

    /**
     * Stops the listening to remote ICE candisdate by disabling the dedicated callback
     * for the "child_added" event on the "iceCandidatesList" node in the database.
     */
    function stopListeningToRemoteIceCandidate (){
        remoteDataRef.child("iceCandidatesList").off("child_added", iceCandidatesListCb);
    }

    /**
     * Initializes the local stream
     * @param callback - A callback to trigger when the initialisation is done
     */
    function _initlocalStream(callback) {
        // get local video stream and renders to localVid
        console.log("(webcomSDK::webrtc::_initlocalStream)stackId="+stackId+ " get local video stream and renders to local video");
        if (actionType) {
            var initlocalStream;
            if (actionType==ACTION_TYPE_VIDEO) {
                initlocalStream = function() {
                    console.log("(webcomSDK::webrtc::_initlocalStream)initlocalStream_video");
                    if (localstream.getVideoStream()&&localstream.getVideoStream().clone && typeof localstream.getVideoStream().clone == 'function') {
                        sentStream=localstream.getVideoStream().clone();
                    } else {
                        sentStream=localstream.getVideoStream();
                    }
                    if (isAudioMute) _muteAudio();
                    if (isVideoMute) _muteVideo();
                    pc.addStream(sentStream);
                    for (var i=0;i<localStreams.length;i++) {
                        console.log("(webcomSDK::webrtc::_initlocalStream)stackId="+stackId+ " rendering local video to "+localStreams[i].id);
                        attachMediaStream(localStreams[i],localstream.getVideoStream());
                    }

                    if (callback && typeof callback == "function") {
                        callback();
                    }
                };
                if (localstream.getVideoStream()) {
                    initlocalStream();
                } else {
                    localstream.addVideoListener(initlocalStream);
                    localstream.initVideo();
                }
            } else if (actionType==ACTION_TYPE_AUDIO) {
                initlocalStream = function() {
                    console.log("(webcomSDK::webrtc::_initlocalStream)initlocalStream_audio");
                    if (localstream.getAudioStream()&&localstream.getAudioStream().clone && typeof localstream.getAudioStream().clone == 'function') {
                        sentStream=localstream.getAudioStream().clone();
                    } else {
                        sentStream=localstream.getAudioStream();
                    }
                    if (isAudioMute) _muteAudio();
                    if (isVideoMute) _muteVideo();
                    pc.addStream(sentStream);
                    for (var i=0;i<localStreams.length;i++) {
                        console.log("(webcomSDK::webrtc::_initlocalStream)stackId="+stackId+ " rendering local Audio to "+localStreams[i].id);
                        attachMediaStream(localStreams[i],localstream.getAudioStream());
                    }

                    if (callback && typeof callback == "function") {
                        callback();
                    }
                };
                if (localstream.getAudioStream()) {
                    initlocalStream();
                } else {
                    localstream.addAudioListener(initlocalStream);
                    localstream.initAudio();
                }
            }else if (actionType==ACTION_TYPE_AUDIO_VIDEO) {
                initlocalStream = function() {
                    console.log("(webcomSDK::webrtc::_initlocalStream)initlocalStream_audio_video");
                    if (localstream.getAudioVideoStream()&&localstream.getAudioVideoStream().clone && typeof localstream.getAudioVideoStream().clone == 'function') {
                        sentStream=localstream.getAudioVideoStream().clone();
                    } else {
                        sentStream=localstream.getAudioVideoStream();
                    }
                    if (isAudioMute) _muteAudio();
                    if (isVideoMute) _muteVideo();

                    pc.addStream(sentStream);
                    for (var i=0;i<localStreams.length;i++) {
                        console.log("(webcomSDK::webrtc::_initlocalStream)stackId="+stackId+ " rendering local AudioVideo to "+localStreams[i].id);
                        attachMediaStream(localStreams[i],localstream.getAudioVideoStream());
                    }

                    if (callback && typeof callback == "function") {
                        callback();
                    }



                };
                if (localstream.getAudioVideoStream()) {
                    initlocalStream();
                } else {
                    localstream.addAudioVideoListener(initlocalStream);
                    localstream.initAudioVideo();
                }
            } else if (actionType==ACTION_TYPE_SCREEN_SHARING) {
                initlocalStream = function() {
                    console.log("(webcomSDK::webrtc::_initlocalStream)initlocalStream_screen_sharing");
                    if (localstream.getScreenSharingStream()&&localstream.getScreenSharingStream().clone && typeof localstream.getScreenSharingStream().clone == 'function') {
                        sentStream=localstream.getScreenSharingStream().clone();
                    } else {
                        sentStream=localstream.getScreenSharingStream();
                    }
                    if (isAudioMute) _muteAudio();
                    if (isVideoMute) _muteVideo();
                    pc.addStream(sentStream);
                    for (var i=0;i<localStreams.length;i++) {
                        console.log("(webcomSDK::webrtc::_initlocalStream)stackId="+stackId+ " rendering local Screensharing to "+localStreams[i].id);
                        attachMediaStream(localStreams[i],localstream.getScreenSharingStream());
                    }

                    if (callback && typeof callback == "function") {
                        callback();
                    }
                };
                if (localstream.getScreenSharingStream()) {
                    initlocalStream();
                } else {
                    localstream.addScreenSharingListener(initlocalStream);
                    localstream.initScreenSharing();
                }
            }
        } else {
            log.warning("(webcomSDK::webrtc::_initlocalStream)no actionType specified");
        }

    }

    /**
     * Prepares the SDP callbacks.
     * Remote description will by defined for the peer connection and callbacks are defined for SDP answser and response management.
     * If there is no publishing, local description will be defined.
     */
    function _initSdpCallbacks() {
        console.debug("(webcomSDK::webrtc::_initSdpCallbacks)stackId="+stackId);
        if (isPublish) {
            if (sdpOfferCb) remoteDataRef.off("child_added", sdpOfferCb);
            sdpAnswerCb= function(snapshot) {
                if (!isClosed && snapshot.name() === "sdpAnswer") {
                    var data = snapshot.val();
                    console.debug("(webcomSDK::webrtc::sdpAnswerCb)stackId="+stackId + "-" + 'received sdpAnswer: ' + JSON.stringify(data));
                    pc.setRemoteDescription(new myRTCSessionDescription(data), function() {
                        console.debug("(webcomSDK::webrtc::sdpAnswerCb)stackId="+stackId + "-" + "remote description set");
                        // remove sdpAnswer from webcom
                        //snapshot.ref().remove();
                        startListeningToRemoteIceCandidate();
                    }, onError);
                    remoteDataRef.off("child_added", sdpAnswerCb);
                }
            };
            remoteDataRef.on("child_added", sdpAnswerCb);
        } else {
            if (sdpAnswerCb) remoteDataRef.off("child_added", sdpAnswerCb);
            sdpOfferCb = function(snapshot) {
                if (!isClosed && snapshot.name() === "sdpOffer") {
                    var data = snapshot.val();
                    console.debug("(webcomSDK::webrtc::sdpOfferCb)stackId="+stackId + "-" + 'received sdpOffer: ' + JSON.stringify(data));
                    pc.setRemoteDescription(new myRTCSessionDescription(data), function() {
                        pc.createAnswer(function(description) {
                            console.log("(webcomSDK::webrtc::sdpOfferCb)stackId="+stackId + "-" + 'sending answer');
                            pc.setLocalDescription(description, function() {
                                console.debug("(webcomSDK::webrtc::sdpOfferCb)stackId="+stackId + "-" + "set sdpAnswer in base : " + JSON.stringify(description));
                                localDataRef.child("sdpAnswer").set(JSON.parse(JSON.stringify(description))); // decoding/encoding because of Firefox bug
                                // remove sdpOffer from webcom
                                //snapshot.ref().remove();
                                startListeningToRemoteIceCandidate();
                            }, onError);
                        }, onError, subscriberMediaConstraints);
                    }, onError);
                    remoteDataRef.off("child_added", sdpOfferCb);
                }
            };
            remoteDataRef.on("child_added", sdpOfferCb);
        }
    }

    /**
     * Closes the SDP callbacks by disabling callbacks for the "child_added" event and by defining them to null.
     */
    function _closeSdpCallbacks() {
        if (sdpAnswerCb) {
            remoteDataRef.off("child_added", sdpAnswerCb);
            sdpAnswerCb = null;
        }
        if (sdpOfferCb) {
            remoteDataRef.off("child_added", sdpOfferCb);
            sdpOfferCb = null;
        }
    }

    /**
     * Sends an SDP offer through the peer connection.
     * An SDP offer is created, with a local description, and is sent.
     * The description is both decoded and encoded because of Firefox bugs.
     */
    function sendOffer() {
        // ------------------------------------------------------------------
        // publie l'offre initiale
        // ------------------------------------------------------------------
        console.log('(webrtc::sendOffer)stackid='+stackId + "-" + 'creating sdpOffer');
        pc.createOffer(function(description) {
            pc.setLocalDescription(description, function() {
                console.debug("(webcomSDK::webrtc::createOffer)stackId="+stackId + "-" + "set sdpOffer in base : " + JSON.stringify(description));
                localDataRef.child("sdpOffer").set(JSON.parse(JSON.stringify(description))); // decoding/encoding because of Firefox bug
            }, onError);
        }, onError, publisherMediaConstraints);
    }

    /**
     * Closes the connection and triggers the callback when the operation is done
     * @param callback
     */
    function _close(callback) {

        if (!closeInProgress && !isClosed) {
            closeInProgress=true;
            onCloseCb2=callback;
            console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-" + 'closing webrtc stack');
            if (pc) {
                pc.close();

            }

            // remove webcom callbacks
            if (remotedatarefCb) {
                remoteDataRef.off("child_added", remotedatarefCb);
                remotedatarefCb = null;
            }

            if (iceCandidatesListCb) {
                stopListeningToRemoteIceCandidate ();
                iceCandidatesListCb = null;
            }
            _closeSdpCallbacks();

            // remove webcom data
//			localDataRef.parent().onDisconnect().cancel();
//			localDataRef.parent().onDisconnect().remove();
            //remoteDataRef.remove();

            // stop video
            for (var i=0;i<localStreams.length;i++) {
                if (localStreams[i]) {
                    //localStreams[i].src=""; not supported by Firefox
                    detachMediaStream(localStreams[i]);
                    //localStreams[i].removeAttribute("src");
                    console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-" +"stopping local video to "+localStreams[i].id);
                }
            }
            for (var j=0;j<remoteStreams.length;j++) {
                if (remoteStreams[j]) {
                    //remoteStreams[j].src=""; not supported by Firefox
                    detachMediaStream(remoteStreams[j]);
                    //remoteStreams[j].removeAttribute("src");
                    console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-" +"stopping remote vid to "+remoteStreams[j].id);
                }
            }



            isClosed=true;
            console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-" + 'closing webrtc stack -> waiting for ICE_CONNECTION_STATE_DISCONNECTED');
            if (isClosed &&  (iceConnectionState==ICE_CONNECTION_STATE_DISCONNECTED || iceConnectionState==ICE_CONNECTION_STATE_CLOSED || iceConnectionState==ICE_CONNECTION_STATE_FAILED)) {
                console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-" + 'closed webrtc stack complete');
                pc = null;
                closeInProgress=false;
                webrtcmngr.clearWebrtcStacks(webrtcStackId);
                if (onCloseCb2 && typeof onCloseCb2 == "function") {
                    onCloseCb2();
                }
            }
        } else {
            console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-" + 'closing webrtc stack already in progress');
        }
    }

    function _muteAudio() {
        console.log("(webcomSDK::webrtc::_muteAudio)stackId="+stackId);
        isAudioMute=true;
        var audioTracks;
        if (isPublish && sentStream) {
            audioTracks = sentStream.getAudioTracks();
            if (audioTracks && audioTracks.length>0) {
                for (var i = 0; i<audioTracks.length; i++) {
                    if (audioTracks[i]) audioTracks[i].enabled = false;
                }
            }
        } else if  (!isPublish && receivedStream) {
            audioTracks = receivedStream.getAudioTracks();
            if (audioTracks && audioTracks.length>0) {
                for (var j = 0; j<audioTracks.length; j++) {
                    if (audioTracks[j]) audioTracks[j].enabled = false;
                }
            }
        }
    }

    function _unmuteAudio() {
        console.log("(webcomSDK::webrtc::_unmuteAudio)stackId="+stackId);
        isAudioMute=false;
        var audioTracks;
        if (isPublish && sentStream) {
            audioTracks = sentStream.getAudioTracks();
            if (audioTracks && audioTracks.length>0) {
                for (var i = 0; i<audioTracks.length; i++) {
                    if (audioTracks[i]) audioTracks[i].enabled = true;
                }
            }
        } else if  (!isPublish && receivedStream) {
            audioTracks = receivedStream.getAudioTracks();
            if (audioTracks && audioTracks.length>0) {
                for (var j = 0; j<audioTracks.length; j++) {
                    if (audioTracks[j]) audioTracks[j].enabled = true;
                }
            }
        }
    }

    function _muteVideo() {
        console.log("(webcomSDK::webrtc::_muteVideo)stackId="+stackId);
        isVideoMute=true;
        var videoTracks;
        if (isPublish && sentStream) {
            videoTracks = sentStream.getVideoTracks();
            if (videoTracks && videoTracks.length>0) {
                for (var i = 0; i<videoTracks.length; i++) {
                    if (videoTracks[i]) videoTracks[i].enabled = false;
                }
            }
        } else if  (!isPublish && receivedStream) {
            videoTracks = receivedStream.getVideoTracks();
            if (videoTracks && videoTracks.length>0) {
                for (var j = 0; j<videoTracks.length; j++) {
                    if (videoTracks[j]) videoTracks[j].enabled = false;
                }
            }
        }
    }

    function _unmuteVideo() {
        console.log("(webcomSDK::webrtc::_unmuteVideo)stackId="+stackId);
        isVideoMute=false;
        var videoTracks;
        if (isPublish && sentStream) {
            videoTracks = sentStream.getVideoTracks();
            if (videoTracks && videoTracks.length>0) {
                for (var i = 0; i<videoTracks.length; i++) {
                    if (videoTracks[i]) videoTracks[i].enabled = true;
                }
            }
        } else if  (!isPublish && receivedStream) {
            videoTracks = receivedStream.getVideoTracks();
            if (videoTracks && videoTracks.length>0) {
                for (var j = 0; j<videoTracks.length; j++) {
                    if (videoTracks[j]) videoTracks[j].enabled = true;
                }
            }
        }
    }


    function _connectLocalStream(videoElt,getStreamCb) {
        if (actionType) {
            if (actionType==ACTION_TYPE_VIDEO) {
                localstream.connectLocalVideoStream(videoElt,getStreamCb);
            } else if (actionType==ACTION_TYPE_AUDIO) {
                localstream.connectLocalAudioStream(videoElt,getStreamCb);
            }else if (actionType==ACTION_TYPE_AUDIO_VIDEO) {
                localstream.connectLocalAudioVideoStream(videoElt,getStreamCb);
            }
        }
    }




    function _connectRemoteStream(videoElt,getStreamCb) {
        if (videoElt) {
            if (receivedStream) {
                attachMediaStream(videoElt,receivedStream);
                if (getStreamCb && typeof getStreamCb=='function') {
                    getStreamCb(receivedStream);
                }
            } else {
                remoteStreams.push(videoElt);
                if (getStreamCb && typeof getStreamCb=='function') {
                    remoteStreamsCb.push(getStreamCb)
                }
            }
        } else {
            if (receivedStream) {
                if (getStreamCb && typeof getStreamCb=='function') {
                    getStreamCb(receivedStream);
                }
            } else {
                if (getStreamCb && typeof getStreamCb=='function') {
                    remoteStreamsCb.push(getStreamCb)
                }
            }

        }
    }

    init();
    return {

        /**
         * Defines the callback to trigger so as to close the communication
         * @param {function} cb - The callback to trigger
         */
        setOnClose: function(cb) {
            onCloseCb = cb;
        },
        /**
         * Closes a callback
         * @param {function} cb - The callback to close
         */
        close: function(cb) {
            console.debug("(webcomSDK::webrtc::_close)stackId="+stackId + "-close requested");
            _close(cb);
        },
        /**
         * Connect a local stream to an element according to the action type in use (ACTION_TYPE_VIDEO, ACTION_TYPE_AUDIO, ACTION_TYPE_AUDIO_VIDEO)
         * @param videoElt - The video element
         * @param getStreamCb - a callback function to retrieve the mediastream object
         */
        connectLocalStream: function(videoElt,getStreamCb) {
            _connectLocalStream(videoElt,getStreamCb);

        },
        /**
         * Connect a remote stream to an element
         * @param videoElt - The video element
         * @param getStreamCb - a callback function to retrieve the mediastream object
         */
        connectRemoteStream: function(videoElt,getStreamCb) {
            _connectRemoteStream(videoElt,getStreamCb);
        },
        /**
         * mute Audio
         */
        muteAudio : function() {
            _muteAudio();
        },
        /**
         * unmute Audio
         */
        unmuteAudio : function() {
            _unmuteAudio();
        },
        /**
         * mute Video
         */
        muteVideo : function() {
            _muteVideo();
        },
        /**
         * unmute Video
         */
        unmuteVideo : function() {
            _unmuteVideo();
        }
    };
};

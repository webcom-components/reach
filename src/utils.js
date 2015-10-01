
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
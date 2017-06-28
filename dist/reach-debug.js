/*!
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015-2016 Webcom
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * The externally maintained libraries used by Reach are:
 * 
 * - webrtc-adpater, licensed as follows:
 * 
 *     > Copyright (c) 2014, The WebRTC project authors. All rights reserved.
 *     >
 *     > Redistribution and use in source and binary forms, with or without
 *     > modification, are permitted provided that the following conditions are
 *     > met:
 *     >
 *     >  * Redistributions of source code must retain the above copyright
 *     >    notice, this list of conditions and the following disclaimer.
 *     >
 *     >  * Redistributions in binary form must reproduce the above copyright
 *     >    notice, this list of conditions and the following disclaimer in
 *     >    the documentation and/or other materials provided with the
 *     >    distribution.
 *     >
 *     >  * Neither the name of Google nor the names of its contributors may
 *     >    be used to endorse or promote products derived from this software
 *     >    without specific prior written permission.
 *     >
 *     >THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *     >"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *     >LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 *     >A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 *     >HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 *     >SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *     >LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *     >DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 *     >THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *     >(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 *     >OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("webcom/webcom"));
	else if(typeof define === 'function' && define.amd)
		define(["webcom/webcom"], factory);
	else if(typeof exports === 'object')
		exports["Reach"] = factory(require("webcom/webcom"));
	else
		root["Reach"] = factory(root["Webcom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_31__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(96);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(45)('wks')
  , uid        = __webpack_require__(36)
  , Symbol     = __webpack_require__(5).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Config=__webpack_require__(88),_Config2=_interopRequireDefault(_Config),_StreamManager=__webpack_require__(91),_StreamManager2=_interopRequireDefault(_StreamManager),_PeerConnectionManager=__webpack_require__(93),_PeerConnectionManager2=_interopRequireDefault(_PeerConnectionManager),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _cache=null;var CacheManager=function(){function CacheManager(){(0,_classCallCheck3.default)(this,CacheManager);if(!_cache){_cache=this;}return _cache;}(0,_createClass3.default)(CacheManager,[{key:'base',set:function set(url){this._base=url instanceof _webcom2.default?url:new _webcom2.default(url);},get:function get(){return this._base;}},{key:'config',set:function set(config){if(!this._config){this._config=new _Config2.default(config);}else{this._config.assign(config);}},get:function get(){if(!this._config){this._config=new _Config2.default();}return this._config;}},{key:'user',set:function set(user){this._user=user;},get:function get(){return this._user;}},{key:'device',set:function set(device){this._device=device;},get:function get(){return this._device;}},{key:'logLevel',set:function set(level){if(/^DEBUG|INFO|WARN|ERROR$/i.test(level)){this._logLevel=level;}else if(level){throw new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)');}},get:function get(){return this._logLevel||'ERROR';}},{key:'streams',get:function get(){if(!this._streams){this._streams=new _StreamManager2.default();}return this._streams;}},{key:'peerConnections',get:function get(){if(!this._peerConnections){this._peerConnections=new _PeerConnectionManager2.default();}return this._peerConnections;}}]);return CacheManager;}();var cache=new CacheManager();exports.default=cache;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});exports.r=exports.e=exports.w=exports.i=exports.d=undefined;var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_typeof2=__webpack_require__(100),_typeof3=_interopRequireDefault(_typeof2),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var levels=['DEBUG','INFO','WARN','ERROR'],isEnabled=function isEnabled(level){return levels.indexOf(level.toUpperCase())>=levels.indexOf(_cache2.default.logLevel.toUpperCase());},gConsole=global.console,logger=function logger(method,level){for(var _len=arguments.length,messages=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){messages[_key-2]=arguments[_key];}isEnabled(level)?gConsole[method.toLowerCase()].bind(gConsole).apply(undefined,messages):function(){};},group=function group(level,message){for(var _len2=arguments.length,items=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){items[_key2-2]=arguments[_key2];}if(items.length>0){logger.bind(undefined,gConsole.group?'group':level,level)(typeof message==='string'?message:'');var values=(typeof message!=='string'?[message]:[]).concat(items);if(items.length===1&&items[0]instanceof Array&&(0,_typeof3.default)(items[0].length)!==undefined){values=items[0];}values.forEach(function(item){return logger.bind(undefined,level,level)(item);});gConsole.groupEnd&&gConsole.groupEnd();}else{logger.bind(undefined,level,level,message);}};var d=exports.d=group.bind(undefined,levels[0]);var i=exports.i=group.bind(undefined,levels[1]);var w=exports.w=group.bind(undefined,levels[2]);var e=exports.e=gConsole.error.bind(gConsole);var r=exports.r=function r(message){return function(reason){d(message,reason);return _promise2.default.reject(reason||message);};};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.ts=exports.onDisconnect=exports.off=exports.on=exports.list=exports.get=exports.once=exports.remove=exports.update=exports.push=exports.set=exports.eventType=undefined;var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var eventType=exports.eventType=function eventType(event){var evt=void 0;if(/_ADDED$/i.test(event)||/_PUBLISHED$/.test(event)){evt='added';}else if(/_CHANGED$/.test(event)||/_REFRESHED$/.test(event)){evt='changed';}else if(/_REMOVED$/.test(event)||/_UNPUBLISHED$/.test(event)){evt='removed';}return evt?'child_'+evt:event;};var _write=function _write(method,path,data){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path)[method](data,function(error){return error?reject(error):resolve();});});};var set=exports.set=_write.bind(undefined,'set');var push=exports.push=function push(path,data){return new _promise2.default(function(resolve,reject){var pushRef=_cache2.default.base.child(path).push(data,function(error){return error?reject(error):resolve(pushRef);});});};var update=exports.update=_write.bind(undefined,'update');var remove=exports.remove=function remove(path){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).remove(function(error){return error?reject(error):resolve();});});};var once=exports.once=function once(path,event){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).once(eventType(event),resolve,reject);});};var get=exports.get=function get(path){return once(path,'value');};var list=exports.list=function list(path,Type){for(var _len=arguments.length,params=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){params[_key-2]=arguments[_key];}return get(path).then(function(snapData){if(snapData){var values=[];snapData.forEach(function(snapChild){values.push(new(Function.prototype.bind.apply(Type,[null].concat([snapChild],params)))());});return values;}});};var on=exports.on=function on(path,event,queryCallback,cancelCallback){_cache2.default.base.child(path).on(eventType(event),queryCallback,cancelCallback);};var off=exports.off=function off(path,event,callback){_cache2.default.base.child(path).off(eventType(event),callback);};var onDisconnect=exports.onDisconnect=function onDisconnect(path){return _cache2.default.base.child(path).onDisconnect();};var ts=exports.ts=function ts(){return Date.now();};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(63)
  , toPrimitive    = __webpack_require__(48)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(64)
  , defined = __webpack_require__(40);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(23)
  , hide      = __webpack_require__(17)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(10)
  , createDesc = __webpack_require__(26);
module.exports = __webpack_require__(11) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var OPENED=exports.OPENED='OPENED';var CLOSED=exports.CLOSED='CLOSED';var CLOSING=exports.CLOSING='CLOSING';var CONNECTED=exports.CONNECTED='CONNECTED';var NOT_CONNECTED=exports.NOT_CONNECTED='NOT_CONNECTED';var WAS_CONNECTED=exports.WAS_CONNECTED='WAS_CONNECTED';var OWNER=exports.OWNER='OWNER';var MODERATOR=exports.MODERATOR='MODERATOR';var PARTICIPANT=exports.PARTICIPANT='PARTICIPANT';var NONE=exports.NONE='NONE';var ONGOING=exports.ONGOING='ONGOING';var ACCEPTED=exports.ACCEPTED='ACCEPTED';var REJECTED=exports.REJECTED='REJECTED';var CANCELED=exports.CANCELED='CANCELED';

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(72)
  , enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var logDisabled_ = true;

// Utility methods.
var utils = {
  disableLog: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return (bool) ? 'adapter.js logging disabled' :
        'adapter.js logging enabled';
  },

  log: function() {
    if (typeof window === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  },

  /**
   * Extract browser version out of the provided user agent string.
   *
   * @param {!string} uastring userAgent string.
   * @param {!string} expr Regular expression used as match criteria.
   * @param {!number} pos position in the version string to be returned.
   * @return {!number} browser version.
   */
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  },

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  detectBrowser: function(window) {
    var navigator = window && window.navigator;

    // Returned result object.
    var result = {};
    result.browser = null;
    result.version = null;

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    // Firefox.
    if (navigator.mozGetUserMedia) {
      result.browser = 'firefox';
      result.version = this.extractVersion(navigator.userAgent,
          /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
      if (window.webkitRTCPeerConnection) {
        result.browser = 'chrome';
        result.version = this.extractVersion(navigator.userAgent,
          /Chrom(e|ium)\/(\d+)\./, 2);
      } else { // Safari (in an unpublished version) or unknown webkit-based.
        if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
          result.browser = 'safari';
          result.version = this.extractVersion(navigator.userAgent,
            /AppleWebKit\/(\d+)\./, 1);
        } else { // unknown webkit-based browser.
          result.browser = 'Unsupported webkit-based browser ' +
              'with GUM support but no WebRTC support.';
          return result;
        }
      }
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
      result.browser = 'edge';
      result.version = this.extractVersion(navigator.userAgent,
          /Edge\/(\d+).(\d+)$/, 2);
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        // Safari, with webkitGetUserMedia removed.
      result.browser = 'safari';
      result.version = this.extractVersion(navigator.userAgent,
          /AppleWebKit\/(\d+)\./, 1);
    } else { // Default fallthrough: not supported.
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  },

  // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

  shimCreateObjectURL: function(window) {
    var URL = window && window.URL;

    if (!(typeof window === 'object' && window.HTMLMediaElement &&
          'srcObject' in window.HTMLMediaElement.prototype)) {
      // Only shim CreateObjectURL using srcObject if srcObject exists.
      return undefined;
    }

    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(), newId = 0;

    URL.createObjectURL = function(stream) {
      if ('getTracks' in stream) {
        var url = 'polyblob:' + (++newId);
        streams.set(url, stream);
        console.log('URL.createObjectURL(stream) is deprecated! ' +
                    'Use elem.srcObject = stream instead!');
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function(url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };

    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
                                              'src');
    Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
      get: function() {
        return dsc.get.apply(this);
      },
      set: function(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });

    var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
    window.HTMLMediaElement.prototype.setAttribute = function() {
      if (arguments.length === 2 &&
          ('' + arguments[0]).toLowerCase() === 'src') {
        this.srcObject = streams.get(arguments[1]) || null;
      }
      return nativeSetAttribute.apply(this, arguments);
    };
  }
};

// Export.
module.exports = {
  log: utils.log,
  disableLog: utils.disableLog,
  extractVersion: utils.extractVersion,
  shimCreateObjectURL: utils.shimCreateObjectURL,
  detectBrowser: utils.detectBrowser.bind(utils)
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(39);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(13),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_constants=__webpack_require__(18),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Participant=__webpack_require__(58),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(57),_Message2=_interopRequireDefault(_Message),_Local=__webpack_require__(90),_Local2=_interopRequireDefault(_Local),_Invite=__webpack_require__(38),_Invite2=_interopRequireDefault(_Invite),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _joinRoom=function _joinRoom(room,role){var participant={status:_constants.CONNECTED,_joined:DataSync.ts()};if(role){participant.role=role;}Log.w('Room#join',[participant,'_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid]);return DataSync.update('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid,participant).then(function(){DataSync.onDisconnect('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid+'/status').set(_constants.WAS_CONNECTED);return room;});};var Room=function(){function Room(snapData){(0,_classCallCheck3.default)(this,Room);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name()});}this.uid=values.uid;this.name=values.name;this.owner=values.owner;this.status=values.status;this._public=!!values._public;this.extra=values.extra;this._callbacks={};}(0,_createClass3.default)(Room,[{key:'participants',value:function participants(){return DataSync.list('_/rooms/'+this.uid+'/participants',_Participant2.default,this.uid);}},{key:'messages',value:function messages(){return DataSync.list('_/rooms/'+this.uid+'/messages',_Message2.default,this.uid);}},{key:'_streams',value:function _streams(localStreams){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can list a Room\'s streams.'));}return DataSync.get('_/rooms/'+this.uid+'/streams').then(function(snapData){var values=snapData.val();Log.d('Rooms~_streams',values);if(values){return(0,_keys2.default)(values).map(function(key){return(0,_assign2.default)({uid:key,roomId:_this.uid},values[key]);});}return[];}).then(function(streams){return streams.filter(function(stream){return localStreams===(stream.device===_cache2.default.device&&stream.from===_cache2.default.user.uid);});}).then(function(streams){return streams.map(_cache2.default.streams['get'+(localStreams?'Shared':'Remote')].bind(_cache2.default.streams));}).then(function(streams){return streams.filter(function(stream){return stream!==null;});});}},{key:'localStreams',value:function localStreams(){return this._streams(true).catch(Log.r('Room~localStreams'));}},{key:'remoteStreams',value:function remoteStreams(){return this._streams(false).catch(Log.r('Room~remoteStreams'));}},{key:'invite',value:function invite(users){var _this2=this,role=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_constants.NONE,message=arguments[2],_path=function _path(user){return'_/rooms/'+_this2.uid+'/participants/'+user.uid;},_data={status:_constants.NOT_CONNECTED,role:role||_constants.NONE};return _promise2.default.all(users.map(function(user){return DataSync.set(_path(user),_data);})).then(function(){return _promise2.default.all(users.map(function(user){return _Invite2.default.send(user,_this2,message);}));}).then(function(invites){var removeParticipant=function removeParticipant(invite){return DataSync.remove('_/rooms/'+invite.room+'/participants/'+invite.to);};invites.forEach(function(invite){invite.on(_constants.REJECTED,removeParticipant);invite.on(_constants.CANCELED,removeParticipant);});return{room:_this2,invites:invites};}).catch(function(e){Log.e('Room~invite',e);users.forEach(function(user){return DataSync.remove('_/rooms/'+_this2.uid+'/participants/'+user.uid);});return _promise2.default.reject(e);});}},{key:'on',value:function on(event,callback,cancelCallback){var _this3=this,path=Events.room.toPath(event)(this),obj=Events.room.toClass(event);if(path&&obj){var typedCallback=function typedCallback(snapData){if(!/^STREAM_/i.test(event)||!snapData){Log.i('Room~on('+event+')',snapData?new obj(snapData):null);callback(snapData?new obj(snapData):null);}else if(_cache2.default.user){var streamData=(0,_assign2.default)({uid:snapData.name(),roomId:_this3.uid},snapData.val());if(streamData.from!==_cache2.default.user.uid||streamData.device!==_cache2.default.device){var remoteStream=_cache2.default.streams.getRemote(streamData);Log.i('Room~on('+event+')',remoteStream);callback(remoteStream);}}};DataSync.on(path,event,typedCallback,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(typedCallback);}}},{key:'sendMessage',value:function sendMessage(message){return _Message2.default.send(this,message);}},{key:'share',value:function share(type,localStreamContainer,constraints){Log.i('Room~share',{type:type,localStreamContainer:localStreamContainer,constraints:constraints});return _Local2.default.share(this.uid,type,localStreamContainer,constraints);}},{key:'join',value:function join(){Log.i('Room~join',this);if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can join a Room.'));}return _joinRoom(this).catch(Log.r('Room~join'));}},{key:'leave',value:function leave(){var _this4=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can leave a Room.'));}Log.i('Room~leave',this);DataSync.onDisconnect('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status').cancel();(0,_keys2.default)(this._callbacks).forEach(function(event){DataSync.off(Events.room.toPath(event)(_this4),event);});this.localStreams().then(function(localStreams){return localStreams.forEach(function(localStream){return localStream.close();});});this.remoteStreams().then(function(remoteStreams){return remoteStreams.forEach(function(remoteStream){return remoteStream.unSubscribe();});});return DataSync.set('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status',_constants.WAS_CONNECTED).catch(Log.r('Room~leave'));}},{key:'close',value:function close(){var _this5=this;Log.i('Room~close',this);return this.leave().then(function(){return DataSync.update('rooms/'+_this5.uid,{status:_constants.CLOSED,_closed:DataSync.ts()});}).then(function(){return DataSync.remove('_/rooms/'+_this5.uid);}).catch(Log.r('Room~close'));}}],[{key:'create',value:function create(name){var extra=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null,publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can create a Room.'));}var roomMetaData={owner:_cache2.default.user.uid,_public:publicRoom,name:name||_cache2.default.user.name+'-'+Date.now()},roomFullMetaData=(0,_assign2.default)({status:_constants.OPENED,_created:DataSync.ts(),extra:extra},roomMetaData),room=null;return DataSync.push('rooms',roomFullMetaData).then(function(roomRef){room=new Room((0,_assign2.default)({uid:roomRef.name()},roomFullMetaData));return DataSync.update('_/rooms/'+room.uid+'/meta',roomMetaData);}).then(function(){return _joinRoom(room,_constants.OWNER);}).catch(Log.r('Room#create'));}},{key:'get',value:function get(uid){return DataSync.get('rooms/'+uid).then(function(snapData){if(snapData.val()){return new Room(snapData);}});}}]);return Room;}();exports.default=Room;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var presets={UHD:{w:3840,h:2160,min:'HD'},FHD:{w:1920,h:1080,min:'HD',max:'UHD'},HD:{w:1280,h:720,min:'SD',max:'FHD'},SVGA:{w:800,h:600,min:'VGA',max:'HD'},SD:{w:720,h:576,min:'VGA',max:'HD'},VGA:{w:640,h:480,max:'SVGA'}},_assignDevice=function _assignDevice(constraint,deviceId){if(constraint&&deviceId){return(0,_assign2.default)(/^((user)|(environment))$/i.test(deviceId)?{facingMode:deviceId}:{deviceId:deviceId},constraint===true?{}:constraint);}return constraint;};var Media=function(){function Media(){(0,_classCallCheck3.default)(this,Media);}(0,_createClass3.default)(Media,null,[{key:'constraints',value:function constraints(){var videoConstraints=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'HD',audioConstraints=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true,type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'ideal',videoDeviceId=arguments[3],audioDeviceId=arguments[4],video=videoConstraints;if(typeof videoConstraints==='string'){if(presets[videoConstraints.toUpperCase()]){var preset=presets[videoConstraints.toUpperCase()],dimConstraint=function dimConstraint(dim){if(/^(min|max|exact)$/.test(type)){var r={};r[type]=preset[dim];return r;}return{min:preset.min?presets[preset.min][dim]:preset[dim],ideal:preset[dim],max:preset.max?presets[preset.max][dim]:preset[dim]};};video={width:dimConstraint('w'),height:dimConstraint('h')};}else{throw new Error('Unknown Video Resolution preset (UHD, FHD, HD, SVGA, SD, VGA)');}}video=_assignDevice(video,videoDeviceId);var audio=_assignDevice(audioConstraints,audioDeviceId);Log.d('Media#constraints',{video:video,audio:audio});return{video:video,audio:audio};}},{key:'attachStream',value:function attachStream(mediaStream,container,previous){var volume=arguments.length>3&&arguments[3]!==undefined?arguments[3]:.7,tagName='';if(mediaStream.getVideoTracks().length>0){tagName='video';}else if(mediaStream.getAudioTracks().length>0){tagName='audio';}Log.d('Media#attachStream',mediaStream,tagName);if(tagName.length>0){var _node=previous;if(!_node||_node.tagName.toLowerCase()!==tagName){_node=document.createElement(tagName);_node.autoplay=true;}if(container){if(previous&&previous!==_node){container.replaceChild(_node,previous);}else if(!previous){container.appendChild(_node);}}_node.srcObject=mediaStream;_node.disabled=false;_node.volume=volume;return _node;}return previous;}},{key:'devices',value:function devices(){return navigator.mediaDevices.enumerateDevices().then(function(devices){var r={};devices.forEach(function(device){if(!r[device.kind]){r[device.kind]=[];}r[device.kind].push(device);});Log.d('Media#devices',r);return r;}).catch(Log.r('Media#devices'));}},{key:'facingMode',get:function get(){return{USER:'user',ENVIRONMENT:'environment'};}}]);return Media;}();exports.default=Media;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.invite=exports.stream=exports.room=exports.reach=undefined;var _keys=__webpack_require__(13),_keys2=_interopRequireDefault(_keys),_stringify=__webpack_require__(95),_stringify2=_interopRequireDefault(_stringify),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_User=__webpack_require__(55),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(38),_Invite2=_interopRequireDefault(_Invite),_Participant=__webpack_require__(58),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(57),_Message2=_interopRequireDefault(_Message),_Remote=__webpack_require__(59),_Remote2=_interopRequireDefault(_Remote),_constants=__webpack_require__(18);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var paths={USER:function USER(){return'users';},ROOM:function ROOM(){return'rooms';},INVITE:function INVITE(user){if(!user){throw new Error('You must be authenticated to list the invites');}return'_/invites/'+user.uid;},PARTICIPANT:function PARTICIPANT(room){return'_/rooms/'+room.uid+'/participants';},MESSAGE:function MESSAGE(room){return'_/rooms/'+room.uid+'/messages';},STREAM:function STREAM(room){return'_/rooms/'+room.uid+'/streams';}},classes={USER:_User2.default,ROOM:_Room2.default,INVITE:_Invite2.default,PARTICIPANT:_Participant2.default,MESSAGE:_Message2.default,STREAM:_Remote2.default};var _Events=function(){function _Events(keys){var _this=this;(0,_classCallCheck3.default)(this,_Events);keys.forEach(function(key){_this[key]=key;});}(0,_createClass3.default)(_Events,[{key:'supports',value:function supports(event){if(!event||typeof event!=='string'||this[event]!==event.toUpperCase()){throw new Error('Unsupported event. Use one of the following: '+(0,_stringify2.default)((0,_keys2.default)(this)));}return true;}},{key:'toPath',value:function toPath(event){if(this.supports(event)){return paths[event.toUpperCase().replace(/_.*$/,'')]||function(){return null;};}}},{key:'toClass',value:function toClass(event){if(this.supports(event)){return classes[event.toUpperCase().replace(/_.*$/,'')];}}}]);return _Events;}();var reach=exports.reach=new _Events(['USER_ADDED','USER_CHANGED','USER_REMOVED','ROOM_ADDED','ROOM_CHANGED','ROOM_REMOVED','INVITE_ADDED','INVITE_CHANGED']);var room=exports.room=new _Events(['MESSAGE_ADDED','MESSAGE_CHANGED','MESSAGE_REMOVED','PARTICIPANT_ADDED','PARTICIPANT_CHANGED','PARTICIPANT_REMOVED','STREAM_PUBLISHED','STREAM_UNPUBLISHED']);var stream=exports.stream=new _Events(['MUTE','SIZE']);var invite=exports.invite=new _Events([_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED]);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f
  , has = __webpack_require__(16)
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(40);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_keys=__webpack_require__(13),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_constants=__webpack_require__(18),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var update=function update(invite,status){var reason=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,_ended=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,values={status:status,reason:reason,_ended:_ended};if(invite.status!==_constants.ONGOING){return _promise2.default.reject(new Error('This invitation has already been answered'));}return DataSync.update('_/invites/'+invite.to+'/'+invite.uid,values).then(function(){(0,_keys2.default)(values).forEach(function(prop){invite[prop]=values[prop];});return _Room2.default.get(invite.room);}).then(function(room){return{room:room,invite:invite};}).catch(Log.r('Invite_update'));};var Invite=function(){function Invite(snapData){(0,_classCallCheck3.default)(this,Invite);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name(),to:snapData.ref().parent().name()});}this.uid=values.uid;this.from=values.from;this.to=values.to;this.room=values.room;this.status=values.status;this.topic=values.topic;this._created=values._created;this._ended=values._ended;this._callbacks={};}(0,_createClass3.default)(Invite,[{key:'cancel',value:function cancel(reason){return update(this,_constants.CANCELED,reason,DataSync.ts());}},{key:'reject',value:function reject(reason){return update(this,_constants.REJECTED,reason,DataSync.ts());}},{key:'accept',value:function accept(){return update(this,_constants.ACCEPTED);}},{key:'on',value:function on(status,callback){var _this=this;if(Events.invite.supports(status)){if(!this._callbacks[status]){this._callbacks[status]=[];}this._callbacks[status].push(callback);if(!this._listener){this._listener=function(snapData){var updated=snapData.val();if(updated!==null&&updated!==_this.status){_this.status=updated;(_this._callbacks[updated]||[]).forEach(function(cb){cb(_this);});}};DataSync.on('_/invites/'+this.to+'/'+this.uid+'/status','value',this._listener.bind(this));}}}},{key:'onStatusChange',value:function onStatusChange(callback){var _this2=this;[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this2.on(event,callback);});}},{key:'off',value:function off(status,callback){var _this3=this;if(!status){this._callbacks={};}else if(this._callbacks[status]){if(callback){var idx=this._callbacks[status].findIndex(function(cb){return cb===callback;});if(idx>=0){this._callbacks.splice(idx,1);}}else{this._callbacks[status]=[];}}if(![_constants.CANCELED,_constants.ACCEPTED,_constants.REJECTED].some(function(event){return _this3._callbacks[event]&&_this3._callbacks[event].length>0;})){DataSync.off('_/invites/'+this.to+'/'+this.uid+'/status','value');}}},{key:'offStatusChange',value:function offStatusChange(callback){var _this4=this;if(!callback){this.off();}else{[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this4.off(event,callback);});}}},{key:'isOnGoing',get:function get(){return this.status===_constants.ONGOING;}},{key:'isRejected',get:function get(){return this.status===_constants.REJECTED;}},{key:'isAccepted',get:function get(){return this.status===_constants.ACCEPTED;}},{key:'isCanceled',get:function get(){return this.status===_constants.CANCELED;}}],[{key:'send',value:function send(invitee,room){var message=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can send an invite.'));}var inviteMetaData={from:_cache2.default.user.uid,room:room.uid,status:_constants.ONGOING,_created:DataSync.ts(),topic:message};return DataSync.push('_/invites/'+invitee.uid,inviteMetaData).then(function(inviteRef){var inviteId=inviteRef.name();return new Invite((0,_assign2.default)({uid:inviteId,to:invitee.uid},inviteMetaData));}).catch(Log.r('Invite#send'));}}]);return Invite;}();exports.default=Invite;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24)
  , document = __webpack_require__(5).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45)('keys')
  , uid    = __webpack_require__(36);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(46)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(24);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(5)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(32)
  , wksExt         = __webpack_require__(50)
  , defineProperty = __webpack_require__(10).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(131)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(67)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(81)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(156)
  , createDesc = __webpack_require__(157);
module.exports = __webpack_require__(53) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Device=__webpack_require__(89),_Device2=_interopRequireDefault(_Device),_constants=__webpack_require__(18),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initializing=false;var User=function(){function User(snapData){(0,_classCallCheck3.default)(this,User);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.name=values.name;this.status=values.status;this.lastSeen=values.lastSeen;this.anonymous=/^anonymous/.test(this.uid);}(0,_createClass3.default)(User,[{key:'invite',value:function invite(message){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can invite another User.'));}return _Room2.default.create(_cache2.default.user.uid+'-'+this.uid).then(function(room){return room.invite([_this],null,message);}).then(function(data){return{room:data.room,invite:data.invites[0]};}).catch(Log.r('User~invite'));}},{key:'devices',value:function devices(){return DataSync.list('_/devices/'+this.uid,_Device2.default);}}],[{key:'init',value:function init(uid,name){if(!initializing){initializing=true;var d={status:_constants.CONNECTED,lastSeen:DataSync.ts()};if(name){(0,_assign2.default)(d,{name:name});}var deviceId=_webcom2.default.INTERNAL.PersistentStorage.get(uid);return DataSync.update('users/'+uid,d).then(function(){var deviceMetadata={status:_constants.CONNECTED,sdk:{reach:'2.5.3',webcom:_webcom2.default.SDK_VERSION},userAgent:navigator.userAgent};if(deviceId){return DataSync.update('_/devices/'+uid+'/'+deviceId,deviceMetadata);}return DataSync.push('_/devices/'+uid,deviceMetadata);}).then(function(deviceRef){if(!deviceId){deviceId=deviceRef.name();_webcom2.default.INTERNAL.PersistentStorage.set(uid,deviceId);}_cache2.default.device=deviceId;}).then(function(){DataSync.onDisconnect('_/devices/'+uid+'/'+deviceId+'/status').set(_constants.NOT_CONNECTED);DataSync.onDisconnect('users/'+uid).update({status:_constants.NOT_CONNECTED,lastSeen:DataSync.ts()});}).then(function(){return User.get(uid);}).then(function(user){initializing=false;return user;}).catch(function(e){Log.e(e);initializing=false;return _promise2.default.reject(e);});}return User.get(uid);}},{key:'disconnect',value:function disconnect(user){DataSync.onDisconnect('_/devices/'+user.uid+'/'+_cache2.default.device+'/status').cancel();DataSync.onDisconnect('users/'+user.uid).cancel();if(user.anonymous){return DataSync.remove('_/devices/'+user.uid).then(function(){return DataSync.get('_/invites/'+user.uid);}).then(function(invites){var inviteIds=[];invites.forEach(function(invite){inviteIds.push(invite.name());});return _promise2.default.all(inviteIds.map(function(inviteId){return DataSync.remove('_/invites/'+user.uid+'/'+inviteId);}));}).then(function(){return DataSync.remove('users/'+user.uid);}).then(function(){_webcom2.default.INTERNAL.PersistentStorage.remove(user.uid);}).catch(Log.r('User#anonymous_disconnect'));}return DataSync.set('_/devices/'+user.uid+'/'+_cache2.default.device+'/status',_constants.NOT_CONNECTED).then(function(){return DataSync.get('_/devices/'+user.uid);}).then(function(devices){var hasConnectedDevices=devices.forEach(function(device){return new RegExp('^'+_constants.CONNECTED+'$').test(device.val().status);});if(!hasConnectedDevices){return DataSync.update('users/'+user.uid,{status:_constants.NOT_CONNECTED});}return true;}).catch(Log.r('User#disconnect'));}},{key:'get',value:function get(uid){return DataSync.get('users/'+uid).then(function(snapData){return snapData?new User(snapData):null;}).catch(Log.r('User#get'));}}]);return User;}();exports.default=User;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var AUDIO=exports.AUDIO='audio';var VIDEO=exports.VIDEO='video';var AUDIO_VIDEO=exports.AUDIO_VIDEO='audio-video';var SCREEN_SHARING=exports.SCREEN_SHARING='screen-sharing';exports.default={AUDIO:AUDIO,VIDEO:VIDEO,AUDIO_VIDEO:AUDIO_VIDEO,SCREEN_SHARING:SCREEN_SHARING};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Message=function(){function Message(snapData,roomId){(0,_classCallCheck3.default)(this,Message);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.roomId=roomId;this.text=values.text;this.from=values.from;this._created=values._created;}(0,_createClass3.default)(Message,[{key:'edit',value:function edit(newText){var _this=this;return DataSync.update('/rooms/'+this.roomId+'/messages/'+this.uid,{text:newText}).then(function(){_this.text=newText;return _this;}).catch(Log.r('Message~edit'));}},{key:'remove',value:function remove(){return DataSync.remove('/rooms/'+this.roomId+'/messages/'+this.uid).catch(Log.r('Message~remove'));}}],[{key:'send',value:function send(room,text){if(!_cache2.default.user){return _promise2.default.reject(new Error('Cannot send a message to the Room without a User being logged in.'));}var data={from:_cache2.default.user.uid,_created:DataSync.ts(),text:text};return DataSync.push('_/rooms/'+room.uid+'/messages',data).then(function(pushRef){return DataSync.get('_/rooms/'+room.uid+'/messages/'+pushRef.name());}).then(function(snapData){return new Message(snapData,room.uid);}).catch(Log.r('Message#send'));}}]);return Message;}();exports.default=Message;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Participant=function Participant(snapData){(0,_classCallCheck3.default)(this,Participant);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.role=values.role;this.status=values.status;this._joined=values._joined;};exports.default=Participant;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(13),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Remote=function(){function Remote(values){(0,_classCallCheck3.default)(this,Remote);Log.d('Remote~new',values);this.roomId=values.roomId;this.uid=values.uid;this.from=values.from;this.type=values.type;this.device=values.device;this.height=values.height;this.width=values.width;this.container=_cache2.default.config.remoteStreamContainer;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this._callbacks={};this.peerConnection=null;}(0,_createClass3.default)(Remote,[{key:'subscribe',value:function subscribe(remoteStreamContainer){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can subscribe to a Room\'s stream.'));}this.container=remoteStreamContainer||_cache2.default.config.remoteStreamContainer;Log.d('Remote~subscribe',this.container);return _cache2.default.peerConnections.answer(this,this.container).then(function(pc){_this.peerConnection=pc;}).then(function(){return DataSync.update('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device,{to:_cache2.default.user.uid,_created:DataSync.ts()});}).then(function(){DataSync.onDisconnect('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device).remove();var subscribed=false;DataSync.on('_/rooms/'+_this.roomId+'/streams/'+_this.uid,'value',function(snapData){var values=snapData.val();Log.d('Remote~updated',values);if(values){_this.type=values.type;var height=values.height,width=values.width;if((height||width)&&(height!==_this.height||width!==_this.height)){_this.height=values.height;_this.width=values.width;Log.w(_this._callbacks[Events.stream.SIZE]);(_this._callbacks[Events.stream.SIZE]||[]).forEach(function(cb){return cb(_this.height,_this.width);});}var muted=values.muted;if(muted&&(muted.audio!==_this.muted.audio||muted.video!==_this.muted.video)){_this.muted=muted;Log.w(_this._callbacks[Events.stream.MUTE]);(_this._callbacks[Events.stream.MUTE]||[]).forEach(function(cb){return cb(_this.muted);});}subscribed=true;}else if(subscribed){Log.i('Remote#removed',_this);_this._close(true);}});}).catch(Log.r('Remote~subscribe'));}},{key:'unSubscribe',value:function unSubscribe(){return this._close(false);}},{key:'_close',value:function _close(remote){DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device).cancel();DataSync.off('_/rooms/'+this.roomId+'/streams/'+this.uid,'value');!remote&&DataSync.remove('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device);return _promise2.default.resolve(_cache2.default.peerConnections.close(this.uid,this.device));}},{key:'on',value:function on(event,callback){if(Events.stream.supports(event)){if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(callback);}}},{key:'off',value:function off(event,callback){if(!event){this._callbacks={};}else if(Events.stream.supports(event)){if(!callback){this._callbacks[event]=[];}else{this._callbacks[event]=this._callbacks[event].filter(function(cb){return cb!==callback;});}}}},{key:'update',value:function update(values){var _this2=this;(0,_keys2.default)(values).forEach(function(key){_this2[key]=values[key];});}},{key:'node',get:function get(){return this.peerConnection?this.peerConnection.node:null;}}]);return Remote;}();exports.default=Remote;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(94);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22)
  , TAG = __webpack_require__(3)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5).document && document.documentElement;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(19)(function(){
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(25)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(14);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(32)
  , $export        = __webpack_require__(15)
  , redefine       = __webpack_require__(74)
  , hide           = __webpack_require__(17)
  , has            = __webpack_require__(16)
  , Iterators      = __webpack_require__(25)
  , $iterCreate    = __webpack_require__(119)
  , setToStringTag = __webpack_require__(34)
  , getPrototypeOf = __webpack_require__(127)
  , ITERATOR       = __webpack_require__(3)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(14)
  , dPs         = __webpack_require__(125)
  , enumBugKeys = __webpack_require__(42)
  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(62).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(33)
  , createDesc     = __webpack_require__(26)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(48)
  , has            = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(63)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(72)
  , hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(16)
  , toIObject    = __webpack_require__(12)
  , arrayIndexOf = __webpack_require__(113)(false)
  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(19);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(23)
  , invoke             = __webpack_require__(117)
  , html               = __webpack_require__(62)
  , cel                = __webpack_require__(41)
  , global             = __webpack_require__(5)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(22)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(61)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(25);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var global        = __webpack_require__(5)
  , hide          = __webpack_require__(17)
  , Iterators     = __webpack_require__(25)
  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(143);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(159)('wks')
  , uid        = __webpack_require__(82)
  , Symbol     = __webpack_require__(27).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.browser=undefined;var _toConsumableArray2=__webpack_require__(60),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_console,_webrtcAdapter=__webpack_require__(166),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var browser=exports.browser=(0,_assign2.default)({compatible:!/\s/.test(_webrtcAdapter.browserDetails.browser)&&(!_webrtcAdapter.browserDetails.minVersion||_webrtcAdapter.browserDetails.version>=_webrtcAdapter.browserDetails.minVersion)},_webrtcAdapter.browserDetails);var version='Reach v'+'2.5.3'+' | Schema '+'draft-00'+' | Webcom v'+_webcom2.default.SDK_VERSION,message='';if(browser.version===null){message='Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';}else if(browser.minVersion&&browser.minVersion>browser.version){message='Unsupported browser: browser is outdated, update to latest version ('+browser.minVersion+'+)';}else if(!_webrtcAdapter.browserShim){message='No shim for your browser. There might a problem with your package.';}var args=[version+' '+message];if(/^(chrome|firefox)$/.test(browser.browser)){args=['%c '+version+' %c '+message,'background: '+(browser.compatible?'#f50':'red')+'; color: #fff; font-weight: bold','color: '+(browser.compatible?'inherit':'red')];}(_console=console).log.apply(_console,(0,_toConsumableArray3.default)(args));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var video=exports.video={VP8:/^vp8/i,VP9:/^vp9/i,VP10:/^vp10/i,H264:/^h264/i,H265:/^h265/i};var audio=exports.audio={OPUS:/^opus/i,G722:/^g722/i,G711:/^g711/i,ISAC:/^isac/i,ISAC_16:/^isac\/16000/i,ISAC_32:/^isac\/32000/i,LSAC:/^lsac/i};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(13),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Browser=__webpack_require__(85),_StreamTypes=__webpack_require__(56),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Codec=__webpack_require__(86),_User=__webpack_require__(55),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(38),_Invite2=_interopRequireDefault(_Invite),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Reach=function(){function Reach(url){var cfg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;(0,_classCallCheck3.default)(this,Reach);_cache2.default.base=url;_cache2.default.config=cfg;this._callbacks={};}(0,_createClass3.default)(Reach,[{key:'register',value:function register(email,password,name,rememberMe){var _this=this;return _cache2.default.base.createUser(email,password).then(function(auth){if(auth){return _this.login(email,password,name||email,rememberMe);}}).catch(Log.r('Reach~register'));}},{key:'login',value:function login(email,password,name){var rememberMe=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false,p=_promise2.default.resolve();if(this.current&&this.current.email!==email){p=this.logout();}return p.then(function(){return _cache2.default.base.authWithPassword({email:email,password:password,rememberMe:rememberMe});}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~login'));}},{key:'resume',value:function resume(){var _this2=this;return new _promise2.default(function(resolve,reject){if(_webcom2.default.INTERNAL.PersistentStorage.get('session')){_cache2.default.base.resume(function(error,auth){if(auth&&!_this2.current){_User2.default.init(auth.uid).then(function(u){_cache2.default.user=u;resolve(u);},reject);}});}else{reject(new Error('No session to resume'));}});}},{key:'anonymous',value:function anonymous(name){var p=_promise2.default.resolve();if(this.current&&(!this.current.anonymous||this.current.name!==name)){p=this.logout();}return p.then(function(){return _cache2.default.base.authAnonymously();}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~anonymous'));}},{key:'logout',value:function logout(){var _this3=this;return new _promise2.default(function(resolve,reject){var p=_promise2.default.resolve();if(_this3.current!=null){p=_User2.default.disconnect(_this3.current);}p.then(function(){(0,_keys2.default)(_this3._callbacks).forEach(function(event){return DataSync.off(Events.reach.toPath(event)(_cache2.default.user),event);});_cache2.default.base.logout(function(){_cache2.default.user=null;resolve();});}).catch(function(e){Log.e(e);reject(e);});});}},{key:'users',value:function users(include){var _this4=this;return DataSync.list('users',_User2.default).then(function(users){return!include&&users&&_this4.current?users.filter(function(user){return user.uid!==_this4.current.uid;}):users;}).catch(Log.r('Reach~users'));}},{key:'rooms',value:function rooms(){return DataSync.list('rooms',_Room2.default).catch(Log.r('Reach~rooms'));}},{key:'invites',value:function invites(){if(!this.current){return _promise2.default.reject(new Error('Cannot list invites without a User being logged in.'));}return DataSync.list('_/invites/'+this.current.uid,_Invite2.default).catch(Log.r('Reach~invites'));}},{key:'on',value:function on(event,callback,cancelCallback){var path=Events.reach.toPath(event)(_cache2.default.user);if(path){var cls=Events.reach.toClass(event),cb=function cb(snapData){var d=cls?new cls(snapData):null;Log.i('Reach~on('+event+')',d);callback(d);};DataSync.on(path,event,cb,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(cb);}}},{key:'createRoom',value:function createRoom(name,extra){var publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!this.current){return _promise2.default.reject(new Error('Cannot create a Room without a User being logged in.'));}return _Room2.default.create(name,extra,publicRoom);}},{key:'getRoom',value:function getRoom(uid){return _Room2.default.get(uid);}},{key:'getUser',value:function getUser(uid){return _User2.default.get(uid);}},{key:'base',get:function get(){return _cache2.default.base;}},{key:'config',get:function get(){return _cache2.default.config;}},{key:'current',get:function get(){return _cache2.default.user;}},{key:'peerConnections',get:function get(){return _cache2.default.peerConnections.stacks;}}],[{key:'version',get:function get(){return{sdk:'2.5.3',schema:'draft-00'};}},{key:'types',get:function get(){return _StreamTypes2.default;}},{key:'events',get:function get(){return{room:Events.room,reach:Events.reach,stream:Events.stream,invite:Events.invite};}},{key:'browser',get:function get(){return _Browser.browser;}},{key:'media',get:function get(){return _Media2.default;}},{key:'codecs',get:function get(){return{audio:_Codec.audio,video:_Codec.video};}}]);return Reach;}();exports.default=Reach;module.exports=Reach;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(13),_keys2=_interopRequireDefault(_keys),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_toConsumableArray2=__webpack_require__(60),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _flattenServers=function _flattenServers(servers){var _ref,_expand=servers.map(function(server){var username=server.username,credential=server.credential,urls=server.urls,url=server.url,uris=urls||url;if(typeof uris!=='string'){return uris.map(function(uri){return{username:username,credential:credential,urls:uri};});}return[server];});return(_ref=[]).concat.apply(_ref,(0,_toConsumableArray3.default)(_expand));};var Config=function(){function Config(obj){var _this=this;(0,_classCallCheck3.default)(this,Config);this.constraints=null;this.localStreamContainer=null;this.remoteStreamContainer=null;this.preferredVideoCodec=null;this.preferredAudioCodec=null;this.reset();this.assign(obj);DataSync.get('_/ice').then(function(snapData){if(snapData){_this.iceServers=snapData.val();Log.i('ICEServers',_this.iceServers.length>0?_this.iceServers:'None');}},function(e){return Log.d('ICEServers',e);});}(0,_createClass3.default)(Config,[{key:'assign',value:function assign(obj){var _this2=this;(0,_keys2.default)(obj||{}).forEach(function(key){_this2[key]=obj[key];});}},{key:'reset',value:function reset(){this.assign({constraints:_Media2.default.constraints(),logLevel:'ERROR'});}},{key:'logLevel',set:function set(level){_cache2.default.logLevel=level;},get:function get(){return _cache2.default.logLevel;}},{key:'iceServers',set:function set(servers){Log.d('Config~set~iceServers',servers);if(servers){if(!this._iceServers){this._iceServers=[].concat(servers||[]);}else{var _currentServers=_flattenServers(this._iceServers),_newServers=_flattenServers(servers);_newServers.forEach(function(newServer){if(!_currentServers.some(function(server){return server.urls===newServer.urls&&server.username===newServer.username&&server.credential===newServer.credential;})){_currentServers.push(newServer);}});this._iceServers=_currentServers.reduce(function(previous,current){var username=current.username,credential=current.credential,urls=current.urls,idx=previous.findIndex(function(s){return s.username===username&&s.credential===credential;});if(idx>=0){previous[idx].urls.push(urls);}else{previous.push({username:username,credential:credential,urls:[urls]});}return previous;},[]);}}},get:function get(){return this._iceServers||[{username:'admin',credential:'webcom1234',urls:['turns:turn1.webcom.orange.com:443','turn:turn1.webcom.orange.com:443?transport=tcp','turn:turn1.webcom.orange.com:3478?transport=tcp']}];}}]);return Config;}();exports.default=Config;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Device=function Device(snapData){(0,_classCallCheck3.default)(this,Device);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.os=values.os;this.userAgent=values.userAgent;this.status=values.status;this.sdk=values.sdk;};exports.default=Device;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(13),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_StreamTypes=__webpack_require__(56),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_constants=__webpack_require__(18);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _facingModes=[_Media2.default.facingMode.USER,_Media2.default.facingMode.ENVIRONMENT],_getConstraintValue=function _getConstraintValue(constraints,prop){return constraints[prop].exact||constraints[prop].ideal||constraints[prop];},_setConstrainValue=function _setConstrainValue(constraints,prop,other,value){constraints[prop]={exact:value};delete constraints[other];};var Local=function(){function Local(values){(0,_classCallCheck3.default)(this,Local);this.roomId=values.roomId;this.uid=values.uid;this.type=values.type;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this.container=values.container||_cache2.default.config.localStreamContainer;this.node=null;this.peerConnections=[];this.status=_constants.NONE;this.isVideoLoaded=false;this._inputs={};this.constraints=values.constraints;}(0,_createClass3.default)(Local,[{key:'updateConstraints',value:function updateConstraints(constraints){var _this=this;Log.d('Local~updateConstraints',constraints);this.constraints=constraints;return navigator.mediaDevices.getUserMedia(this.constraints).then(function(media){['audio','video'].forEach(function(kind){var constraintsValue=_this.constraints[kind];if(constraintsValue){if(constraintsValue.deviceId||constraintsValue.facingMode){_this._inputs[kind]=_getConstraintValue(constraintsValue,constraintsValue.facingMode?'facingMode':'deviceId');}}});_this.media=media;});}},{key:'mute',value:function mute(){var track=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_StreamTypes2.default.AUDIO,state=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;Log.d('mute',track,state);var audio=this.muted.audio,video=this.muted.video,tracks=void 0;switch(track){case _StreamTypes2.default.AUDIO:audio=state;tracks=this.media.getAudioTracks();break;case _StreamTypes2.default.VIDEO:case _StreamTypes2.default.SCREEN_SHARING:video=state;tracks=this.media.getVideoTracks();break;case _StreamTypes2.default.AUDIO_VIDEO:audio=state;video=state;tracks=this.media.getTracks();break;}tracks.forEach(function(track){track.enabled=!state;});this.muted={audio:audio,video:video};DataSync.set('_/rooms/'+this.roomId+'/streams/'+this.uid+'/muted',this.muted);}},{key:'unMute',value:function unMute(track){this.mute(track,false);}},{key:'close',value:function close(){if(!~[_constants.CLOSED,_constants.CLOSING].indexOf(this.status)){this.status=_constants.CLOSING;var path='_/rooms/'+this.roomId+'/subscribers/'+this.uid;DataSync.off(path,'child_added');DataSync.off(path,'child_removed');DataSync.onDisconnect('_/rooms/'+this.roomId+'/streams/'+this.uid).cancel();DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid).cancel();DataSync.remove(path);DataSync.remove('_/rooms/'+this.roomId+'/streams/'+this.uid);this.media=null;this.status=_constants.CLOSED;}return _promise2.default.resolve(this.status);}},{key:'switchCamera',value:function switchCamera(deviceId){return this._switchDevice(_StreamTypes2.default.VIDEO,deviceId);}},{key:'switchMicrophone',value:function switchMicrophone(deviceId){return this._switchDevice(_StreamTypes2.default.AUDIO,deviceId);}},{key:'_switchDevice',value:function _switchDevice(kind,deviceId){var _this2=this;Log.d('Local~_switchDevice',kind,deviceId);if(this.media.getTracks().some(function(track){return track.kind===kind;})){var next=_promise2.default.resolve(deviceId),currentModeIdx=_facingModes.indexOf(this._inputs[kind]);if(!deviceId&&!!~currentModeIdx){next=_promise2.default.resolve(_facingModes[(currentModeIdx+1)%_facingModes.length]);}else if(!~_facingModes.indexOf(deviceId)){next=_Media2.default.devices().then(function(d){var devices=d[kind+'input'].map(function(mediaDevice){return mediaDevice.deviceId;});devices.sort();var nextDevice=deviceId;if(deviceId&&!devices.some(function(device){return device===deviceId;})){return _promise2.default.reject(new Error('Unknown '+kind+' device'));}if(!deviceId&&devices.length>1){var idx=_this2._inputs[kind]?devices.findIndex(function(v){return v===_this2._inputs[kind];},_this2):0;nextDevice=devices[++idx%devices.length];}return nextDevice;});}else{next=_promise2.default.resolve(deviceId);}return next.then(function(device){if(_this2._inputs[kind]!==device){_this2._inputs[kind]=device;_this2.media.getTracks().forEach(function(track){return track.stop();});var constraints=(0,_assign2.default)({},_this2.constraints),props=['facingMode','deviceId'];if(!~_facingModes.indexOf(device)){props=props.reverse();}_setConstrainValue(constraints[kind],props[0],props[1],device);Log.d('Local~_switchDevice',kind,constraints);return _this2.updateConstraints(constraints);}}).then(function(){return _this2;});}return _promise2.default.reject(new Error('Current stream does not contain a '+kind+' track'));}},{key:'constraints',set:function set(constraints){var _this3=this,values=constraints||_cache2.default.config.constraints,defaultConstraints=_Media2.default.constraints();['audio','video'].forEach(function(type){if(!~_this3.type.indexOf(type)){values[type]=false;}else if(!values[type]){values[type]=defaultConstraints[type];}if(values[type].deviceId||values[type].facingMode){_this3._inputs[type]=_getConstraintValue(values[type],values[type].facingMode?'facingMode':'deviceId');}});Log.d('Local~set#contraints',values);this._constraints=values;},get:function get(){return this._constraints;}},{key:'media',set:function set(mediaStream){var _this4=this;if(mediaStream){if(!(mediaStream instanceof MediaStream)){throw new Error('The media MUST be a MediaStream');}var checkDevices={};mediaStream.getTracks().forEach(function(track){track.enabled=!_this4.muted[track.kind];if(!_this4._inputs[track.kind]){checkDevices[track.kind]=track.label;}});if((0,_keys2.default)(checkDevices).length){_Media2.default.devices().then(function(devices){(0,_keys2.default)(checkDevices).forEach(function(kind){if(devices[kind+'input']){var deviceIds=devices[kind+'input'].filter(function(device){return device.label.length&&device.label===checkDevices[kind];});if(deviceIds.length===1&&!_this4._inputs[kind]){_this4._inputs[kind]=deviceIds[0].deviceId;}}});});}this.node=_Media2.default.attachStream(mediaStream,this.container,this.node,0);this.node.onloadeddata=function(){_this4.isVideoLoaded=true;};this.status=_constants.CONNECTED;Log.d('Local~set media',{mediaStream:mediaStream},this.node);this.peerConnections.forEach(function(peerConnection){return peerConnection.renegotiate(_this4._media,mediaStream);});}else if(this.media&&!mediaStream){this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;this.media.getTracks().forEach(function(track){return track.stop();});this.peerConnections.forEach(function(peerConnection){return peerConnection.close();});}this._media=mediaStream;},get:function get(){return this._media;}}],[{key:'share',value:function share(roomId,type,container,constraints){if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can share a stream.'));}var streamMetaData={from:_cache2.default.user.uid,device:_cache2.default.device,type:type},sharedStream=new Local((0,_assign2.default)({roomId:roomId,constraints:constraints,container:container},streamMetaData));Log.d('Local~share',{sharedStream:sharedStream});return navigator.mediaDevices.getUserMedia(sharedStream.constraints).then(function(media){sharedStream.media=media;}).then(function(){return DataSync.push('_/rooms/'+roomId+'/streams',streamMetaData);}).then(function(streamRef){sharedStream.uid=streamRef.name();if(sharedStream.isVideoLoaded){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);}else{sharedStream.node.onloadeddata=function(){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);};}window.addEventListener('orientationchange',function(){if(sharedStream.node!=null){var _streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(_streamSize);}});_cache2.default.streams.shared[sharedStream.uid]=sharedStream;DataSync.onDisconnect('_/rooms/'+roomId+'/streams/'+sharedStream.uid).remove();DataSync.onDisconnect('_/rooms/'+roomId+'/subscribers/'+sharedStream.uid).remove();var path='_/rooms/'+sharedStream.roomId+'/subscribers/'+sharedStream.uid,value=function value(snapData){return(0,_assign2.default)({device:snapData.name()},snapData.val()||{});};DataSync.on(path,'child_added',function(snapData){var subscriber=value(snapData);Log.d('Local~subscribed',subscriber);_cache2.default.peerConnections.offer(sharedStream,subscriber).then(function(pc){return sharedStream.peerConnections.push(pc);});},Log.e.bind(Log));DataSync.on(path,'child_removed',function(snapData){var subscriber=value(snapData);Log.d('Local~un-subscribed',subscriber);var closedPC=_cache2.default.peerConnections.close(sharedStream.uid,subscriber.device);sharedStream.peerConnections=sharedStream.peerConnections.filter(function(pc){return pc!==closedPC;});},Log.e.bind(Log));Log.d('Local~shared',{sharedStream:sharedStream});return sharedStream;});}}]);return Local;}();exports.default=Local;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Remote=__webpack_require__(59),_Remote2=_interopRequireDefault(_Remote);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var StreamManager=function(){function StreamManager(){(0,_classCallCheck3.default)(this,StreamManager);this.shared={};this.remote={};}(0,_createClass3.default)(StreamManager,[{key:'getRemote',value:function getRemote(streamData){var remoteStream=this.remote[streamData.uid];if(remoteStream){remoteStream.update(streamData);}else{this.remote[streamData.uid]=remoteStream=new _Remote2.default(streamData);}return remoteStream;}},{key:'getShared',value:function getShared(streamData){return this.shared[streamData.uid];}}]);return StreamManager;}();exports.default=StreamManager;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_getOwnPropertyDescriptor=__webpack_require__(97),_getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_constants=__webpack_require__(18);__webpack_require__(101);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DtlsSrtpKeyAgreement={DtlsSrtpKeyAgreement:true},sdpConstraints=function sdpConstraints(receive){return{OfferToReceiveAudio:receive,OfferToReceiveVideo:receive};},ICE_CONNECTION_STATE_DISCONNECTED='disconnected',ICE_CONNECTION_STATE_CONNECTED='connected',ICE_CONNECTION_STATE_COMPLETED='completed',ICE_CONNECTION_STATE_CHECKING='checking',ICE_CONNECTION_STATE_CLOSED='closed',ICE_CONNECTION_STATE_FAILED='failed',ICE_CONNECTION_STATE_OTHER='other',_toJSON=function _toJSON(o){return o.toJSON&&typeof o.toJSON==='function'?o.toJSON():o;};var PeerConnection=function(){function PeerConnection(stackId,streamId,remoteDevice,publish){var _this=this;(0,_classCallCheck3.default)(this,PeerConnection);this.stackId=stackId;this.streamId=streamId;this.remoteDevice=remoteDevice;this._localPath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+_cache2.default.device;this._remotePath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+this.remoteDevice;this.negotiated=false;this.node=null;this.container=null;this.pc=new RTCPeerConnection({iceServers:_cache2.default.config.iceServers},{optional:[DtlsSrtpKeyAgreement],mandatory:sdpConstraints(!publish)});this.pc.onicecandidate=function(e){if(!_this.negotiated&&e.candidate){Log.d('PeerConnection~onicecandidate',e.candidate);DataSync.push(_this._localPath+'/ice',_toJSON(e.candidate));}};this.pc.oniceconnectionstatechange=function(){Log.d('PeerConnection~oniceconnectionstatechange',_this.pc);var iceConnectionState=_this.pc.iceConnectionState;switch(iceConnectionState){case ICE_CONNECTION_STATE_CHECKING:break;case ICE_CONNECTION_STATE_CONNECTED:_this._attachStream();_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_COMPLETED:_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_DISCONNECTED:case ICE_CONNECTION_STATE_FAILED:Log.e('PeerConnection~stateDisconnected','Disconnect PeerConnection');break;case ICE_CONNECTION_STATE_CLOSED:Log.d('PeerConnection~stateclosed','Close PeerConnection');_this.close();break;}_this.negotiated=_this.negotiated||_this.isConnected;};this.pc.onicegatheringstatechange=function(){Log.d('PeerConnection~onicegatheringstatechange',_this.pc.iceGatheringState);};this._status=_constants.OPENED;}(0,_createClass3.default)(PeerConnection,[{key:'_remoteICECandidates',value:function _remoteICECandidates(listen){var _this2=this,path=this._remotePath+'/ice',event='child_added';if(listen){DataSync.on(path,event,function(snap){var candidate=snap.val();Log.d('PeerConnection~addIceCandidate',candidate);_this2.pc.addIceCandidate(new RTCIceCandidate(candidate));});}else{DataSync.off(path,event);}}},{key:'_attachStream',value:function _attachStream(){if(this.remoteStream&&this.isConnected){this.node=_Media2.default.attachStream(this.remoteStream,this.container,this.node);}}},{key:'answer',value:function answer(htmlElement){var _this3=this;Log.i('PeerConnection~answer',{htmlElement:htmlElement,peerConnection:this});this.container=htmlElement;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'ontrack')){this.pc.ontrack=function(e){Log.d('PeerConnection~ontrack',e.streams[0]);_this3.remoteStream=e.streams[0];};}else{this.pc.onaddstream=function(e){Log.d('PeerConnection~onaddstream',e.stream);_this3.remoteStream=e.stream;};}DataSync.on(this._remotePath+'/sdp','value',function(snap){var sdpOffer=snap.val();Log.d('Offer',sdpOffer);if(sdpOffer!=null){Log.d('PeerConnection~offered',sdpOffer);_this3.pc.setRemoteDescription(sdpOffer).then(function(){return Log.d('PeerConnection~remoteDescription',_this3.pc.remoteDescription);}).then(function(){if(/^offer$/.test(_this3.pc.remoteDescription.type)){return _this3.pc.createAnswer();}return _promise2.default.reject(new Error('SDP is not an offer'));}).then(function(description){return _this3._setPreferredCodecs(description);}).then(function(description){return _this3.pc.setLocalDescription(description);}).then(function(){Log.d('PeerConnection~localDescription',_this3.pc.localDescription);_this3._remoteICECandidates(true);}).then(function(){return DataSync.update(_this3._localPath+'/sdp',_toJSON(_this3.pc.localDescription));}).catch(Log.r('PeerConnection~localDescription'));}});return _promise2.default.resolve(this);}},{key:'offer',value:function offer(stream){var _this4=this;Log.i('PeerConnection~offer',{stream:stream,peerConnection:this});var sendTimeout=void 0;return new _promise2.default(function(resolve,reject){_this4.pc.onnegotiationneeded=function(){Log.d('PeerConnection~onnegotiationneeded');if(sendTimeout){clearTimeout(sendTimeout);sendTimeout=null;}sendTimeout=setTimeout(function(){sendTimeout=null;_this4._sendOffer().then(function(){resolve(_this4);}).catch(function(e){Log.d('PeerConnection~offer',e);reject(e);});},20);};DataSync.on(_this4._remotePath+'/sdp','value',function(snap){var sdpAnswer=snap.val();if(sdpAnswer!=null){Log.d('PeerConnection~offer#answered',sdpAnswer);_this4.pc.setRemoteDescription(sdpAnswer).then(function(){Log.d('PeerConnection~offer#remoteDescription',_this4.pc.remoteDescription);_this4._remoteICECandidates(true);}).catch(Log.e.bind(Log,'PeerConnection~remoteDescription'));}});_this4._alterStream(stream,'add');});}},{key:'_sendOffer',value:function _sendOffer(){var _this5=this;Log.d('PeerConnection~_sendOffer');return this.pc.createOffer().then(function(description){return _this5._setPreferredCodecs(description);}).then(function(description){return _this5.pc.setLocalDescription(description);}).then(function(){return Log.d('PeerConnection~renegotiate#localDescription',_this5.pc.localDescription);}).then(function(){return DataSync.update(_this5._localPath+'/sdp',_toJSON(_this5.pc.localDescription));});}},{key:'_alterStream',value:function _alterStream(stream,method){var _this6=this;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,method+'Track')){stream.getTracks().forEach(function(track){return _this6.pc[method+'Track'](track,stream);},this);}else{this.pc[method+'Stream'](stream);}}},{key:'renegotiate',value:function renegotiate(oldStream,newStream){Log.d('PeerConnection~renegotiate');if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'getSenders')&&'RTCRtpSender'in window&&(0,_getOwnPropertyDescriptor2.default)(RTCRtpSender.prototype,'replaceTrack')){this.pc.getSenders().forEach(function(sender){var newTracks=void 0;switch(sender.track.kind){case'audio':newTracks=newStream.getAudioTracks();break;case'video':newTracks=newStream.getVideoTracks();break;default:newTracks=[];}if(newTracks.length){sender.replaceTrack(newTracks[0]);}});this._sendOffer().catch(function(e){Log.d('PeerConnection~renegotiate',e);});}else{this._alterStream(oldStream,'remove');this._alterStream(newStream,'add');}}},{key:'close',value:function close(){var _this7=this;if(this._status===_constants.OPENED){this._status=_constants.CLOSING;if(this.node){this.node.stop&&this.node.stop();this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;}this._remoteICECandidates(false);DataSync.off(this._remotePath+'/sdp','value');DataSync.remove(this._localPath);if(this.pc&&this.pc.signalingState!=='closed'){this.pc.onsignalingstatechange=function(){if(_this7.pc.signalingState!=='closed'){_this7._status=_constants.CLOSED;}};this.pc.close();}else{this._status=_constants.CLOSED;}}}},{key:'_setPreferredCodecs',value:function _setPreferredCodecs(description){if(_cache2.default.config.preferredVideoCodec||_cache2.default.config.preferredAudioCodec){Log.d('PeerConnection~_setPreferredCodecs',{description:description,config:_cache2.default.config});var sdpLines=description.sdp.split(/\r?\n/),medias={audio:[],video:[]},current=null;sdpLines.forEach(function(sdpLine,i){if(/^m=/.test(sdpLine)){var d=/^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);current={fmt:d[2].split(/\s/),index:i,codecs:[]};medias[d[1]].push(current);}else if(current&&/^a=rtpmap:/.test(sdpLine)){var c=/^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);if(c){current.codecs.push({id:c[1],name:c[2],index:i});}}});Log.d('PeerConnection~_setPreferredCodecs',medias);var update=false,prefer=function prefer(mediaList,preferedCodec){mediaList.forEach(function(media){var selected=media.codecs.find(function(codec){return preferedCodec.test(codec.name);});if(selected){var fmt=[selected.id].concat(media.fmt.filter(function(ids){return ids!==selected.id;}));sdpLines[media.index]=sdpLines[media.index].replace(media.fmt.join(' '),fmt.join(' '));update=true;}});};if(_cache2.default.config.preferredVideoCodec){prefer(medias.video,_cache2.default.config.preferredVideoCodec);}if(_cache2.default.config.preferredAudioCodec){prefer(medias.audio,_cache2.default.config.preferredAudioCodec);}if(update){Log.d('PeerConnection~_setPreferredCodecs',sdpLines.join('\r\n'));return{sdp:sdpLines.join('\r\n'),type:description.type};}}return description;}},{key:'remoteStream',set:function set(stream){this._remoteStream=stream;this._attachStream();},get:function get(){return this._remoteStream;}},{key:'isConnected',get:function get(){return this.pc&&!!~[ICE_CONNECTION_STATE_CONNECTED,ICE_CONNECTION_STATE_COMPLETED,ICE_CONNECTION_STATE_OTHER].indexOf(this.pc.iceConnectionState);}}]);return PeerConnection;}();exports.default=PeerConnection;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_PeerConnection=__webpack_require__(92),_PeerConnection2=_interopRequireDefault(_PeerConnection),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var getStackId=function getStackId(id1,id2){return id1.localeCompare(id2,'en-us')>0?id1+'-'+id2:id2+'-'+id1;};var PeerConnectionManager=function(){function PeerConnectionManager(){(0,_classCallCheck3.default)(this,PeerConnectionManager);this.stacks={};}(0,_createClass3.default)(PeerConnectionManager,[{key:'getPeerConnection',value:function getPeerConnection(stream,remote,publish){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can get a PeerConnection\'s object.'));}var stackId=getStackId(remote.device,_cache2.default.device);if(this.stacks[stackId]&&this.stacks[stackId][stream.uid]){return _promise2.default.resolve(this.stacks[stackId][stream.uid]);}if(!this.stacks[stackId]){this.stacks[stackId]={};}var users={};users[_cache2.default.user.uid]=true;users[remote.from||remote.to]=true;return DataSync.update('_/webrtc/'+stackId,users).then(function(){return new _PeerConnection2.default(stackId,stream.uid,remote.device,publish);}).then(function(pc){Log.d('PeerConnectionManager~getPeerConnection',{stackId:stackId,streamId:stream.uid,pc:pc});_this.stacks[stackId][stream.uid]=pc;return pc;}).catch(Log.r('PeerConnectionManager~getPeerConnection'));}},{key:'offer',value:function offer(localStream,subscriber){Log.d('PeerConnectionManager~offer',{localStream:localStream,subscriber:subscriber});return this.getPeerConnection(localStream,subscriber,true).then(function(pc){return pc.offer(localStream.media);});}},{key:'answer',value:function answer(remoteStream,htmlElement){Log.d('PeerConnectionManager~answer',{remoteStream:remoteStream,htmlElement:htmlElement});return this.getPeerConnection(remoteStream,remoteStream,false).then(function(pc){return pc.answer(htmlElement);});}},{key:'close',value:function close(streamId,remoteDevice){var stackId=getStackId(remoteDevice,_cache2.default.device),pc=this.stacks[stackId]?this.stacks[stackId][streamId]:null;if(pc){pc.close();this.stacks[stackId][streamId]=null;delete this.stacks[stackId][streamId];return pc;}return false;}}]);return PeerConnectionManager;}();exports.default=PeerConnectionManager;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(99);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(98);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
module.exports = __webpack_require__(52).Array.find;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(133);
module.exports = __webpack_require__(2).Array.from;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(2)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var $Object = __webpack_require__(2).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(51);
__webpack_require__(78);
__webpack_require__(139);
module.exports = __webpack_require__(2).Promise;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
__webpack_require__(77);
__webpack_require__(141);
__webpack_require__(142);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(78);
module.exports = __webpack_require__(50).f('iterator');

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(47)
  , toIndex   = __webpack_require__(132);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10)
  , createDesc      = __webpack_require__(26);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20)
  , gOPS    = __webpack_require__(43)
  , pIE     = __webpack_require__(33);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(23)
  , call        = __webpack_require__(66)
  , isArrayIter = __webpack_require__(65)
  , anObject    = __webpack_require__(14)
  , toLength    = __webpack_require__(47)
  , getIterFn   = __webpack_require__(76)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(69)
  , descriptor     = __webpack_require__(26)
  , setToStringTag = __webpack_require__(34)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(17)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(20)
  , toIObject = __webpack_require__(12);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(36)('meta')
  , isObject = __webpack_require__(24)
  , has      = __webpack_require__(16)
  , setDesc  = __webpack_require__(10).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(19)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , macrotask = __webpack_require__(75).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(22)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(20)
  , gOPS     = __webpack_require__(43)
  , pIE      = __webpack_require__(33)
  , toObject = __webpack_require__(35)
  , IObject  = __webpack_require__(64)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(19)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(10)
  , anObject = __webpack_require__(14)
  , getKeys  = __webpack_require__(20);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , gOPN      = __webpack_require__(71).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(16)
  , toObject    = __webpack_require__(35)
  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(17);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(5)
  , core        = __webpack_require__(2)
  , dP          = __webpack_require__(10)
  , DESCRIPTORS = __webpack_require__(11)
  , SPECIES     = __webpack_require__(3)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(14)
  , aFunction = __webpack_require__(39)
  , SPECIES   = __webpack_require__(3)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46)
  , defined   = __webpack_require__(40);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(23)
  , $export        = __webpack_require__(15)
  , toObject       = __webpack_require__(35)
  , call           = __webpack_require__(66)
  , isArrayIter    = __webpack_require__(65)
  , toLength       = __webpack_require__(47)
  , createProperty = __webpack_require__(114)
  , getIterFn      = __webpack_require__(76);

$export($export.S + $export.F * !__webpack_require__(68)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(111)
  , step             = __webpack_require__(120)
  , Iterators        = __webpack_require__(25)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(67)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(15);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(124)});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(12)
  , $getOwnPropertyDescriptor = __webpack_require__(70).f;

__webpack_require__(73)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(35)
  , $keys    = __webpack_require__(20);

__webpack_require__(73)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(32)
  , global             = __webpack_require__(5)
  , ctx                = __webpack_require__(23)
  , classof            = __webpack_require__(61)
  , $export            = __webpack_require__(15)
  , isObject           = __webpack_require__(24)
  , aFunction          = __webpack_require__(39)
  , anInstance         = __webpack_require__(112)
  , forOf              = __webpack_require__(116)
  , speciesConstructor = __webpack_require__(130)
  , task               = __webpack_require__(75).set
  , microtask          = __webpack_require__(123)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(128)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(34)($Promise, PROMISE);
__webpack_require__(129)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(68)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(5)
  , has            = __webpack_require__(16)
  , DESCRIPTORS    = __webpack_require__(11)
  , $export        = __webpack_require__(15)
  , redefine       = __webpack_require__(74)
  , META           = __webpack_require__(122).KEY
  , $fails         = __webpack_require__(19)
  , shared         = __webpack_require__(45)
  , setToStringTag = __webpack_require__(34)
  , uid            = __webpack_require__(36)
  , wks            = __webpack_require__(3)
  , wksExt         = __webpack_require__(50)
  , wksDefine      = __webpack_require__(49)
  , keyOf          = __webpack_require__(121)
  , enumKeys       = __webpack_require__(115)
  , isArray        = __webpack_require__(118)
  , anObject       = __webpack_require__(14)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(48)
  , createDesc     = __webpack_require__(26)
  , _create        = __webpack_require__(69)
  , gOPNExt        = __webpack_require__(126)
  , $GOPD          = __webpack_require__(70)
  , $DP            = __webpack_require__(10)
  , $keys          = __webpack_require__(20)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(71).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(33).f  = $propertyIsEnumerable;
  __webpack_require__(43).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(32)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49)('asyncIterator');

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49)('observable');

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(83)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(54)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(37);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(80)
  , IObject  = __webpack_require__(154)
  , toObject = __webpack_require__(162)
  , toLength = __webpack_require__(161)
  , asc      = __webpack_require__(148);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(37)
  , isArray  = __webpack_require__(155)
  , SPECIES  = __webpack_require__(83)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(147);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(37)
  , document = __webpack_require__(27).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(27)
  , core      = __webpack_require__(52)
  , hide      = __webpack_require__(54)
  , redefine  = __webpack_require__(158)
  , ctx       = __webpack_require__(80)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(53) && !__webpack_require__(81)(function(){
  return Object.defineProperty(__webpack_require__(150)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(79);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(79);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(145)
  , IE8_DOM_DEFINE = __webpack_require__(153)
  , toPrimitive    = __webpack_require__(163)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(53) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(27)
  , hide      = __webpack_require__(54)
  , has       = __webpack_require__(152)
  , SRC       = __webpack_require__(82)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(52).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(160)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(149);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(37);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(151)
  , $find   = __webpack_require__(146)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(144)(KEY);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /* eslint-env node */


// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parts[1],
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress); // was: relAddr
    sdp.push('rport');
    sdp.push(candidate.relatedPort); // was: relPort
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
}

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  // was: channels
  parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
          ? '/' + headerExtension.direction
          : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      params.push(param + '=' + codec.parameters[param]);
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
}

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
      'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function(line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function(line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
          mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
          mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  caps.headerExtensions.forEach(function(extension) {
    sdp += SDPUtils.writeExtmap(extension);
  });
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.split(' ');
    parts.shift();
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10),
        rtx: {
          ssrc: secondarySsrc
        }
      };
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: secondarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(5), 10);
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  var cname;
  // Gets the first SSRC. Note that with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(obj) {
        return obj.attribute === 'cname';
      })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

SDPUtils.writeSessionBoilerplate = function() {
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

// Expose public methods.
module.exports = SDPUtils;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */



var adapterFactory = __webpack_require__(167);
module.exports = adapterFactory({window: global.window});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84)))

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */



// Shimming starts here.
module.exports = function(dependencies) {
  var window = dependencies && dependencies.window;

  // Utils.
  var utils = __webpack_require__(21);
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  // Export to the adapter global object visible in the browser.
  var adapter = {
    browserDetails: browserDetails,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog
  };

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = __webpack_require__(168) || null;
  var edgeShim = __webpack_require__(170) || null;
  var firefoxShim = __webpack_require__(173) || null;
  var safariShim = __webpack_require__(175) || null;

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;

      chromeShim.shimGetUserMedia(window);
      chromeShim.shimMediaStream(window);
      utils.shimCreateObjectURL(window);
      chromeShim.shimSourceObject(window);
      chromeShim.shimPeerConnection(window);
      chromeShim.shimOnTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia(window);
      utils.shimCreateObjectURL(window);
      firefoxShim.shimSourceObject(window);
      firefoxShim.shimPeerConnection(window);
      firefoxShim.shimOnTrack(window);
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = edgeShim;

      edgeShim.shimGetUserMedia(window);
      utils.shimCreateObjectURL(window);
      edgeShim.shimPeerConnection(window);
      edgeShim.shimReplaceTrack(window);
      break;
    case 'safari':
      if (!safariShim) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;
      // shim window.URL.createObjectURL Safari (technical preview)
      utils.shimCreateObjectURL(window);
      safariShim.shimCallbacksAPI(window);
      safariShim.shimLocalStreamsAPI(window);
      safariShim.shimRemoteStreamsAPI(window);
      safariShim.shimGetUserMedia(window);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

var utils = __webpack_require__(21);
var logging = utils.log;

var chromeShim = {
  shimMediaStream: function(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          var self = this;
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function(te) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = self.getReceivers().find(function(r) {
                  return r.track.id === te.track.id;
                });
              } else {
                receiver = {track: te.track};
              }

              var event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.streams = [e.stream];
              self.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function(track) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = self.getReceivers().find(function(r) {
                  return r.track.id === track.id;
                });
              } else {
                receiver = {track: track};
              }
              var event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        }
      });
    }
  },

  shimGetSendersWithDtmf: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection &&
        !('getSenders' in window.RTCPeerConnection.prototype) &&
        'createDTMFSender' in window.RTCPeerConnection.prototype) {
      window.RTCPeerConnection.prototype.getSenders = function() {
        return this._senders || [];
      };
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

      if (!window.RTCPeerConnection.prototype.addTrack) {
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          var pc = this;
          if (pc.signalingState === 'closed') {
            throw new DOMException(
              'The RTCPeerConnection\'s signalingState is \'closed\'.',
              'InvalidStateError');
          }
          var streams = [].slice.call(arguments, 1);
          if (streams.length !== 1 ||
              !streams[0].getTracks().find(function(t) {
                return t === track;
              })) {
            // this is not fully correct but all we can manage without
            // [[associated MediaStreams]] internal slot.
            throw new DOMException(
              'The adapter.js addTrack polyfill only supports a single ' +
              ' stream which is associated with the specified track.',
              'NotSupportedError');
          }

          pc._senders = pc._senders || [];
          var alreadyExists = pc._senders.find(function(t) {
            return t.track === track;
          });
          if (alreadyExists) {
            throw new DOMException('Track already exists.',
                'InvalidAccessError');
          }

          pc._streams = pc._streams || {};
          var oldStream = pc._streams[stream.id];
          if (oldStream) {
            oldStream.addTrack(track);
            pc.removeStream(oldStream);
            pc.addStream(oldStream);
          } else {
            var newStream = new window.MediaStream([track]);
            pc._streams[stream.id] = newStream;
            pc.addStream(newStream);
          }

          var sender = {
            track: track,
            get dtmf() {
              if (this._dtmf === undefined) {
                if (track.kind === 'audio') {
                  this._dtmf = pc.createDTMFSender(track);
                } else {
                  this._dtmf = null;
                }
              }
              return this._dtmf;
            }
          };
          pc._senders.push(sender);
          return sender;
        };
      }
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origAddStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          pc._senders.push({
            track: track,
            get dtmf() {
              if (this._dtmf === undefined) {
                if (track.kind === 'audio') {
                  this._dtmf = pc.createDTMFSender(track);
                } else {
                  this._dtmf = null;
                }
              }
              return this._dtmf;
            }
          });
        });
      };

      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origRemoveStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          var sender = pc._senders.find(function(s) {
            return s.track === track;
          });
          if (sender) {
            pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
          }
        });
      };
    } else if (typeof window === 'object' && window.RTCPeerConnection &&
               'getSenders' in window.RTCPeerConnection.prototype &&
               'createDTMFSender' in window.RTCPeerConnection.prototype &&
               window.RTCRtpSender &&
               !('dtmf' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      window.RTCPeerConnection.prototype.getSenders = function() {
        var pc = this;
        var senders = origGetSenders.apply(pc, []);
        senders.forEach(function(sender) {
          sender._pc = pc;
        });
        return senders;
      };

      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = this._pc.createDTMFSender(this.track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
      });
    }
  },

  shimSourceObject: function(window) {
    var URL = window && window.URL;

    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this._srcObject;
          },
          set: function(stream) {
            var self = this;
            // Use _srcObject as a private property for this shim
            this._srcObject = stream;
            if (this.src) {
              URL.revokeObjectURL(this.src);
            }

            if (!stream) {
              this.src = '';
              return undefined;
            }
            this.src = URL.createObjectURL(stream);
            // We need to recreate the blob url when a track is added or
            // removed. Doing it manually since we want to avoid a recursion.
            stream.addEventListener('addtrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener('removetrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
          }
        });
      }
    }
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        // Translate iceTransportPolicy to iceTransports,
        // see https://code.google.com/p/webrtc/issues/detail?id=4869
        // this was fixed in M56 along with unprefixing RTCPeerConnection.
        logging('PeerConnection');
        if (pcConfig && pcConfig.iceTransportPolicy) {
          pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        }

        return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (window.webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    } else {
      // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
      var OrigPeerConnection = window.RTCPeerConnection;
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (!server.hasOwnProperty('urls') &&
                server.hasOwnProperty('url')) {
              console.warn('RTCIceServer.url is deprecated! Use urls instead.');
              server = JSON.parse(JSON.stringify(server));
              server.urls = server.url;
              newIceServers.push(server);
            } else {
              newIceServers.push(pcConfig.iceServers[i]);
            }
          }
          pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }

    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(selector,
        successCallback, errorCallback) {
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those when called with
      // either no arguments or the selector argument is null.
      if (origGetStats.length === 0 && (arguments.length === 0 ||
          typeof arguments[0] !== 'function')) {
        return origGetStats.apply(this, []);
      }

      var fixChromeStats_ = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function(stats) {
        return new Map(Object.keys(stats).map(function(key) {
          return [key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_,
          arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        origGetStats.apply(self, [
          function(response) {
            resolve(makeMapStats(fixChromeStats_(response)));
          }, reject]);
      }).then(successCallback, errorCallback);
    };

    // add promise support -- natively available in Chrome 51
    if (browserDetails.version < 51) {
      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function(method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function() {
              var args = arguments;
              var self = this;
              var promise = new Promise(function(resolve, reject) {
                nativeMethod.apply(self, [args[0], resolve, reject]);
              });
              if (args.length < 2) {
                return promise;
              }
              return promise.then(function() {
                args[1].apply(null, []);
              },
              function(err) {
                if (args.length >= 3) {
                  args[2].apply(null, [err]);
                }
              });
            };
          });
    }

    // promise support for createOffer and createAnswer. Available (without
    // bugs) since M52: crbug/619289
    if (browserDetails.version < 52) {
      ['createOffer', 'createAnswer'].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          var self = this;
          if (arguments.length < 1 || (arguments.length === 1 &&
              typeof arguments[0] === 'object')) {
            var opts = arguments.length === 1 ? arguments[0] : undefined;
            return new Promise(function(resolve, reject) {
              nativeMethod.apply(self, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }
};


// Expose public methods.
module.exports = {
  shimMediaStream: chromeShim.shimMediaStream,
  shimOnTrack: chromeShim.shimOnTrack,
  shimGetSendersWithDtmf: chromeShim.shimGetSendersWithDtmf,
  shimSourceObject: chromeShim.shimSourceObject,
  shimPeerConnection: chromeShim.shimPeerConnection,
  shimGetUserMedia: __webpack_require__(169)
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

var utils = __webpack_require__(21);
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;

  var constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function(constraints, func) {
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      var remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      var getSupportedFacingModeLies = browserDetails.version < 61;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices = devices.filter(function(d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function(d) {
              return matches.some(function(match) {
                return d.label.toLowerCase().indexOf(match) !== -1;
              });
            });
            if (!dev && devices.length && matches.indexOf('back') !== -1) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        InvalidStateError: 'NotReadableError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotReadableError',
        MediaDeviceKillSwitchOn: 'NotReadableError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraintName,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function(c) {
      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
        onError(shimError_(e));
      });
    });
  };

  navigator.getUserMedia = getUserMedia_;

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
      enumerateDevices: function() {
        return new Promise(function(resolve) {
          var kinds = {audio: 'audioinput', video: 'videoinput'};
          return window.MediaStreamTrack.getSources(function(devices) {
            resolve(devices.map(function(device) {
              return {label: device.label,
                kind: kinds[device.kind],
                deviceId: device.id,
                groupId: ''};
            }));
          });
        });
      },
      getSupportedConstraints: function() {
        return {
          deviceId: true, echoCancellation: true, facingMode: true,
          frameRate: true, height: true, width: true
        };
      }
    };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return getUserMediaPromise_(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, function(c) {
        return origGetUserMedia(c).then(function(stream) {
          if (c.audio && !stream.getAudioTracks().length ||
              c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function(e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      logging('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      logging('Dummy mediaDevices.removeEventListener called.');
    };
  }
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var utils = __webpack_require__(21);
var shimRTCPeerConnection = __webpack_require__(172);

module.exports = {
  shimGetUserMedia: __webpack_require__(171),
  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    if (window.RTCIceGatherer) {
      // ORTC defines an RTCIceCandidate object but no constructor.
      // Not implemented in Edge.
      if (!window.RTCIceCandidate) {
        window.RTCIceCandidate = function(args) {
          return args;
        };
      }
      // ORTC does not have a session description object but
      // other browsers (i.e. Chrome) that will support both PC and ORTC
      // in the future might have this defined already.
      if (!window.RTCSessionDescription) {
        window.RTCSessionDescription = function(args) {
          return args;
        };
      }
      // this adds an additional event listener to MediaStrackTrack that signals
      // when a tracks enabled property was changed. Workaround for a bug in
      // addStream, see below. No longer required in 15025+
      if (browserDetails.version < 15025) {
        var origMSTEnabled = Object.getOwnPropertyDescriptor(
            window.MediaStreamTrack.prototype, 'enabled');
        Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
          set: function(value) {
            origMSTEnabled.set.call(this, value);
            var ev = new Event('enabled');
            ev.enabled = value;
            this.dispatchEvent(ev);
          }
        });
      }
    }
    window.RTCPeerConnection =
        shimRTCPeerConnection(window, browserDetails.version);
  },
  shimReplaceTrack: function(window) {
    // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
    if (window.RTCRtpSender &&
        !('replaceTrack' in window.RTCRtpSender.prototype)) {
      window.RTCRtpSender.prototype.replaceTrack =
          window.RTCRtpSender.prototype.setTrack;
    }
  }
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


// Expose public methods.
module.exports = function(window) {
  var navigator = window && window.navigator;

  var shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(function(e) {
      return Promise.reject(shimError_(e));
    });
  };
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var SDPUtils = __webpack_require__(165);

// sort tracks such that they follow an a-v-a-v...
// pattern.
function sortTracks(tracks) {
  var audioTracks = tracks.filter(function(track) {
    return track.kind === 'audio';
  });
  var videoTracks = tracks.filter(function(track) {
    return track.kind === 'video';
  });
  tracks = [];
  while (audioTracks.length || videoTracks.length) {
    if (audioTracks.length) {
      tracks.push(audioTracks.shift());
    }
    if (videoTracks.length) {
      tracks.push(videoTracks.shift());
    }
  }
  return tracks;
}

// Edge does not like
// 1) stun:
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
    return false;
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

module.exports = function(window, edgeVersion) {
  var RTCPeerConnection = function(config) {
    var self = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          self[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.needNegotiation = false;

    this.onicecandidate = null;
    this.onaddstream = null;
    this.ontrack = null;
    this.onremovestream = null;
    this.onsignalingstatechange = null;
    this.oniceconnectionstatechange = null;
    this.onicegatheringstatechange = null;
    this.onnegotiationneeded = null;
    this.ondatachannel = null;
    this.canTrickleIceCandidates = null;

    this.localStreams = [];
    this.remoteStreams = [];
    this.getLocalStreams = function() {
      return self.localStreams;
    };
    this.getRemoteStreams = function() {
      return self.remoteStreams;
    };

    this.localDescription = new window.RTCSessionDescription({
      type: '',
      sdp: ''
    });
    this.remoteDescription = new window.RTCSessionDescription({
      type: '',
      sdp: ''
    });
    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.iceGatheringState = 'new';

    this.iceOptions = {
      gatherPolicy: 'all',
      iceServers: []
    };
    if (config && config.iceTransportPolicy) {
      switch (config.iceTransportPolicy) {
        case 'all':
        case 'relay':
          this.iceOptions.gatherPolicy = config.iceTransportPolicy;
          break;
        default:
          // don't set iceTransportPolicy.
          break;
      }
    }
    this.usingBundle = config && config.bundlePolicy === 'max-bundle';

    if (config && config.iceServers) {
      this.iceOptions.iceServers = filterIceServers(config.iceServers,
          edgeVersion);
    }
    this._config = config || {};

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    // since the iceGatherer is currently created in createOffer but we
    // must not emit candidates until after setLocalDescription we buffer
    // them in this array.
    this._localIceCandidatesBuffer = [];
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this.dispatchEvent(event);
    if (this.onicegatheringstatechange !== null) {
      this.onicegatheringstatechange(event);
    }
  };

  RTCPeerConnection.prototype._emitBufferedCandidates = function() {
    var self = this;
    var sections = SDPUtils.splitSections(self.localDescription.sdp);
    // FIXME: need to apply ice candidates in a way which is async but
    // in-order
    this._localIceCandidatesBuffer.forEach(function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      if (end) {
        for (var j = 1; j < sections.length; j++) {
          if (sections[j].indexOf('\r\na=end-of-candidates\r\n') === -1) {
            sections[j] += 'a=end-of-candidates\r\n';
          }
        }
      } else {
        sections[event.candidate.sdpMLineIndex + 1] +=
            'a=' + event.candidate.candidate + '\r\n';
      }
      self.localDescription.sdp = sections.join('');
      self.dispatchEvent(event);
      if (self.onicecandidate !== null) {
        self.onicecandidate(event);
      }
      if (!event.candidate && self.iceGatheringState !== 'complete') {
        var complete = self.transceivers.every(function(transceiver) {
          return transceiver.iceGatherer &&
              transceiver.iceGatherer.state === 'completed';
        });
        if (complete && self.iceGatheringStateChange !== 'complete') {
          self.iceGatheringState = 'complete';
          self._emitGatheringStateChange();
        }
      }
    });
    this._localIceCandidatesBuffer = [];
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  // internal helper to create a transceiver object.
  // (whih is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    this.transceivers.push(transceiver);
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);

    this._maybeFireNegotiationNeeded();
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var self = this;
    if (edgeVersion >= 15025) {
      this.localStreams.push(stream);
      stream.getTracks().forEach(function(track) {
        self.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        self.addTrack(track, clonedStream);
      });
      this.localStreams.push(clonedStream);
    }
    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var idx = this.localStreams.indexOf(stream);
    if (idx > -1) {
      this.localStreams.splice(idx, 1);
      this._maybeFireNegotiationNeeded();
    }
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };

  // Create ICE gatherer and hook it up.
  RTCPeerConnection.prototype._createIceGatherer = function(mid,
      sdpMLineIndex) {
    var self = this;
    var iceGatherer = new window.RTCIceGatherer(self.iceOptions);
    iceGatherer.onlocalcandidate = function(evt) {
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      var end = !cand || Object.keys(cand).length === 0;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === undefined) {
          iceGatherer.state = 'completed';
        }
      } else {
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        event.candidate.candidate = SDPUtils.writeCandidate(cand);
      }

      // update local description.
      var sections = SDPUtils.splitSections(self.localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex + 1] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex + 1] +=
            'a=end-of-candidates\r\n';
      }
      self.localDescription.sdp = sections.join('');
      var transceivers = self._pendingOffer ? self._pendingOffer :
          self.transceivers;
      var complete = transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      // Emit candidate if localDescription is set.
      // Also emits null candidate when all gatherers are complete.
      switch (self.iceGatheringState) {
        case 'new':
          if (!end) {
            self._localIceCandidatesBuffer.push(event);
          }
          if (end && complete) {
            self._localIceCandidatesBuffer.push(
                new Event('icecandidate'));
          }
          break;
        case 'gathering':
          self._emitBufferedCandidates();
          if (!end) {
            self.dispatchEvent(event);
            if (self.onicecandidate !== null) {
              self.onicecandidate(event);
            }
          }
          if (complete) {
            self.dispatchEvent(new Event('icecandidate'));
            if (self.onicecandidate !== null) {
              self.onicecandidate(new Event('icecandidate'));
            }
            self.iceGatheringState = 'complete';
            self._emitGatheringStateChange();
          }
          break;
        case 'complete':
          // should not happen... currently!
          break;
        default: // no-op.
          break;
      }
    };
    return iceGatherer;
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var self = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      self._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      self._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      self._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlssttatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      params.encodings = transceiver.recvEncodingParameters;
      params.rtcp = {
        cname: transceiver.rtcpParameters.cname,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var self = this;

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, this.signalingState)) {
      var e = new Error('Can not set local ' + description.type +
          ' in state ' + this.signalingState);
      e.name = 'InvalidStateError';
      if (arguments.length > 2 && typeof arguments[2] === 'function') {
        window.setTimeout(arguments[2], 0, e);
      }
      return Promise.reject(e);
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // FIXME: What was the purpose of this empty if statement?
      // if (!this._pendingOffer) {
      // } else {
      if (this._pendingOffer) {
        // VERY limited support for SDP munging. Limited to:
        // * changing the order of codecs
        sections = SDPUtils.splitSections(description.sdp);
        sessionpart = sections.shift();
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var caps = SDPUtils.parseRtpParameters(mediaSection);
          self._pendingOffer[sdpMLineIndex].localCapabilities = caps;
        });
        this.transceivers = this._pendingOffer;
        delete this._pendingOffer;
      }
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(self.remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = self.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        var rejected = SDPUtils.isRejected(mediaSection);

        if (!rejected && !transceiver.isDatachannel) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!self.usingBundle || sdpMLineIndex === 0) {
            iceTransport.start(iceGatherer, remoteIceParameters,
                isIceLite ? 'controlling' : 'controlled');
            dtlsTransport.start(remoteDtlsParameters);
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          self._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    this.localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    switch (description.type) {
      case 'offer':
        this._updateSignalingState('have-local-offer');
        break;
      case 'answer':
        this._updateSignalingState('stable');
        break;
      default:
        throw new TypeError('unsupported type "' + description.type +
            '"');
    }

    // If a success callback was provided, emit ICE candidates after it
    // has been executed. Otherwise, emit callback after the Promise is
    // resolved.
    var hasCallback = arguments.length > 1 &&
      typeof arguments[1] === 'function';
    if (hasCallback) {
      var cb = arguments[1];
      window.setTimeout(function() {
        cb();
        if (self.iceGatheringState === 'new') {
          self.iceGatheringState = 'gathering';
          self._emitGatheringStateChange();
        }
        self._emitBufferedCandidates();
      }, 0);
    }
    var p = Promise.resolve();
    p.then(function() {
      if (!hasCallback) {
        if (self.iceGatheringState === 'new') {
          self.iceGatheringState = 'gathering';
          self._emitGatheringStateChange();
        }
        // Usually candidates will be emitted earlier.
        window.setTimeout(self._emitBufferedCandidates.bind(self), 500);
      }
    });
    return p;
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var self = this;

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, this.signalingState)) {
      var e = new Error('Can not set remote ' + description.type +
          ' in state ' + this.signalingState);
      e.name = 'InvalidStateError';
      if (arguments.length > 2 && typeof arguments[2] === 'function') {
        window.setTimeout(arguments[2], 0, e);
      }
      return Promise.reject(e);
    }

    var streams = {};
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    this.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      this.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      this.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      var rejected = SDPUtils.isRejected(mediaSection);
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (kind === 'application' && protocol === 'DTLS/SCTP') {
        self.transceivers[sdpMLineIndex] = {
          mid: mid,
          isDatachannel: true
        };
        return;
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === '1' || cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          self.transceivers[sdpMLineIndex]) {
        self._disposeIceAndDtlsTransports(sdpMLineIndex);
        self.transceivers[sdpMLineIndex].iceGatherer =
            self.transceivers[0].iceGatherer;
        self.transceivers[sdpMLineIndex].iceTransport =
            self.transceivers[0].iceTransport;
        self.transceivers[sdpMLineIndex].dtlsTransport =
            self.transceivers[0].dtlsTransport;
        if (self.transceivers[sdpMLineIndex].rtpSender) {
          self.transceivers[sdpMLineIndex].rtpSender.setTransport(
              self.transceivers[0].dtlsTransport);
        }
        if (self.transceivers[sdpMLineIndex].rtpReceiver) {
          self.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              self.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = self.transceivers[sdpMLineIndex] ||
            self._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = usingBundle && sdpMLineIndex > 0 ?
              self.transceivers[0].iceGatherer :
              self._createIceGatherer(mid, sdpMLineIndex);
        }

        if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
          transceiver.iceTransport.setRemoteCandidates(cands);
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        if (direction === 'sendrecv' || direction === 'sendonly') {
          rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport,
              kind);

          track = rtpReceiver.track;
          // FIXME: does not work with Plan B.
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
              Object.defineProperty(streams[remoteMsid.stream], 'id', {
                get: function() {
                  return remoteMsid.stream;
                }
              });
            }
            Object.defineProperty(track, 'id', {
              get: function() {
                return remoteMsid.track;
              }
            });
            streams[remoteMsid.stream].addTrack(track);
            receiverList.push([track, rtpReceiver,
              streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            streams.default.addTrack(track);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        self._transceive(self.transceivers[sdpMLineIndex],
            false,
            direction === 'sendrecv' || direction === 'sendonly');
      } else if (description.type === 'answer' && !rejected) {
        transceiver = self.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        self.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        self.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        self.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if ((isIceLite || isComplete) && cands.length) {
          iceTransport.setRemoteCandidates(cands);
        }
        if (!usingBundle || sdpMLineIndex === 0) {
          iceTransport.start(iceGatherer, remoteIceParameters,
              'controlling');
          dtlsTransport.start(remoteDtlsParameters);
        }

        self._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            streams[remoteMsid.stream].addTrack(track);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            streams.default.addTrack(track);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    this.remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    switch (description.type) {
      case 'offer':
        this._updateSignalingState('have-remote-offer');
        break;
      case 'answer':
        this._updateSignalingState('stable');
        break;
      default:
        throw new TypeError('unsupported type "' + description.type +
            '"');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        self.remoteStreams.push(stream);
        var event = new Event('addstream');
        event.stream = stream;
        self.dispatchEvent(event);
        if (self.onaddstream !== null) {
          window.setTimeout(function() {
            self.onaddstream(event);
          }, 0);
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          var trackEvent = new Event('track');
          trackEvent.track = track;
          trackEvent.receiver = receiver;
          trackEvent.streams = [stream];
          self.dispatchEvent(trackEvent);
          if (self.ontrack !== null) {
            window.setTimeout(function() {
              self.ontrack(trackEvent);
            }, 0);
          }
        });
      }
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(self && self.transceivers)) {
        return;
      }
      self.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    if (arguments.length > 1 && typeof arguments[1] === 'function') {
      window.setTimeout(arguments[1], 0);
    }
    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this.dispatchEvent(event);
    if (this.onsignalingstatechange !== null) {
      this.onsignalingstatechange(event);
    }
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var self = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (self.needNegotiation === false) {
        return;
      }
      self.needNegotiation = false;
      var event = new Event('negotiationneeded');
      self.dispatchEvent(event);
      if (self.onnegotiationneeded !== null) {
        self.onnegotiationneeded(event);
      }
    }, 0);
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var self = this;
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      states[transceiver.iceTransport.state]++;
      states[transceiver.dtlsTransport.state]++;
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0 || states.checking > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0 || states.completed > 0) {
      newState = 'connected';
    }

    if (newState !== self.iceConnectionState) {
      self.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this.dispatchEvent(event);
      if (this.oniceconnectionstatechange !== null) {
        this.oniceconnectionstatechange(event);
      }
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var self = this;
    if (this._pendingOffer) {
      throw new Error('createOffer called while there is a pending offer.');
    }
    var offerOptions;
    if (arguments.length === 1 && typeof arguments[0] !== 'function') {
      offerOptions = arguments[0];
    } else if (arguments.length === 3) {
      offerOptions = arguments[2];
    }

    var numAudioTracks = this.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = this.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    this.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        this._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        this._createTransceiver('video');
        numVideoTracks--;
      }
    }
    // reorder tracks
    var transceivers = sortTracks(this.transceivers);

    var sdp = SDPUtils.writeSessionBoilerplate();
    transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = self.usingBundle && sdpMLineIndex > 0 ?
            transceivers[0].iceGatherer :
            self._createIceGatherer(mid, sdpMLineIndex);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video') {
          sendEncodingParameters[0].rtx = {
            ssrc: (2 * sdpMLineIndex + 1) * 1001 + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
          transceiver.dtlsTransport,
          kind
        );
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (this._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += SDPUtils.writeMediaSection(transceiver,
          transceiver.localCapabilities, 'offer', transceiver.stream);
      sdp += 'a=rtcp-rsize\r\n';
    });

    this._pendingOffer = transceivers;
    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    if (arguments.length && typeof arguments[0] === 'function') {
      window.setTimeout(arguments[0], 0, desc);
    }
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var sdp = SDPUtils.writeSessionBoilerplate();
    if (this.usingBundle) {
      sdp += 'a=group:BUNDLE ' + this.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    this.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (transceiver.isDatachannel) {
        sdp += 'm=application 0 DTLS/SCTP 5000\r\n' +
            'c=IN IP4 0.0.0.0\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video') {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: (2 * sdpMLineIndex + 2) * 1001 + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    if (arguments.length && typeof arguments[0] === 'function') {
      window.setTimeout(arguments[0], 0, desc);
    }
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    if (!candidate) {
      for (var j = 0; j < this.transceivers.length; j++) {
        this.transceivers[j].iceTransport.addRemoteCandidate({});
        if (this.usingBundle) {
          return Promise.resolve();
        }
      }
    } else {
      var mLineIndex = candidate.sdpMLineIndex;
      if (candidate.sdpMid) {
        for (var i = 0; i < this.transceivers.length; i++) {
          if (this.transceivers[i].mid === candidate.sdpMid) {
            mLineIndex = i;
            break;
          }
        }
      }
      var transceiver = this.transceivers[mLineIndex];
      if (transceiver) {
        var cand = Object.keys(candidate.candidate).length > 0 ?
            SDPUtils.parseCandidate(candidate.candidate) : {};
        // Ignore Chrome's invalid candidates since Edge does not like them.
        if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
          return Promise.resolve();
        }
        // Ignore RTCP candidates, we assume RTCP-MUX.
        if (cand.component &&
            !(cand.component === '1' || cand.component === 1)) {
          return Promise.resolve();
        }
        transceiver.iceTransport.addRemoteCandidate(cand);

        // update the remoteDescription.
        var sections = SDPUtils.splitSections(this.remoteDescription.sdp);
        sections[mLineIndex + 1] += (cand.type ? candidate.candidate.trim()
            : 'a=end-of-candidates') + '\r\n';
        this.remoteDescription.sdp = sections.join('');
      }
    }
    if (arguments.length > 1 && typeof arguments[1] === 'function') {
      window.setTimeout(arguments[1], 0);
    }
    return Promise.resolve();
  };

  RTCPeerConnection.prototype.getStats = function() {
    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
        'dtlsTransport'].forEach(function(method) {
          if (transceiver[method]) {
            promises.push(transceiver[method].getStats());
          }
        });
    });
    var cb = arguments.length > 1 && typeof arguments[1] === 'function' &&
        arguments[1];
    var fixStatsType = function(stat) {
      return {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
      }[stat.type] || stat.type;
    };
    return new Promise(function(resolve) {
      // shim getStats with maplike support
      var results = new Map();
      Promise.all(promises).then(function(res) {
        res.forEach(function(result) {
          Object.keys(result).forEach(function(id) {
            result[id].type = fixStatsType(result[id]);
            results.set(id, result[id]);
          });
        });
        if (cb) {
          window.setTimeout(cb, 0, results);
        }
        resolve(results);
      });
    });
  };
  return RTCPeerConnection;
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var utils = __webpack_require__(21);

var firefoxShim = {
  shimOnTrack: function(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            e.stream.getTracks().forEach(function(track) {
              var event = new Event('track');
              event.track = track;
              event.receiver = {track: track};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            }.bind(this));
          }.bind(this));
        }
      });
    }
  },

  shimSourceObject: function(window) {
    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this.mozSrcObject;
          },
          set: function(stream) {
            this.mozSrcObject = stream;
          }
        });
      }
    }
  },

  shimPeerConnection: function(window) {
    var browserDetails = utils.detectBrowser(window);

    if (typeof window !== 'object' || !(window.RTCPeerConnection ||
        window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (browserDetails.version < 38) {
          // .urls is not supported in FF < 38.
          // create RTCIceServers with a single url.
          if (pcConfig && pcConfig.iceServers) {
            var newIceServers = [];
            for (var i = 0; i < pcConfig.iceServers.length; i++) {
              var server = pcConfig.iceServers[i];
              if (server.hasOwnProperty('urls')) {
                for (var j = 0; j < server.urls.length; j++) {
                  var newServer = {
                    url: server.urls[j]
                  };
                  if (server.urls[j].indexOf('turn') === 0) {
                    newServer.username = server.username;
                    newServer.credential = server.credential;
                  }
                  newIceServers.push(newServer);
                }
              } else {
                newIceServers.push(pcConfig.iceServers[i]);
              }
            }
            pcConfig.iceServers = newIceServers;
          }
        }
        return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype =
          window.mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (window.mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return window.mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = window.mozRTCSessionDescription;
      window.RTCIceCandidate = window.mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    // shim getStats with maplike support
    var makeMapStats = function(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function(key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function(
      selector,
      onSucc,
      onErr
    ) {
      return nativeGetStats.apply(this, [selector || null])
        .then(function(stats) {
          if (browserDetails.version < 48) {
            stats = makeMapStats(stats);
          }
          if (browserDetails.version < 53 && !onSucc) {
            // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
              stats.forEach(function(stat) {
                stat.type = modernStatsTypes[stat.type] || stat.type;
              });
            } catch (e) {
              if (e.name !== 'TypeError') {
                throw e;
              }
              // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
              stats.forEach(function(stat, i) {
                stats.set(i, Object.assign({}, stat, {
                  type: modernStatsTypes[stat.type] || stat.type
                }));
              });
            }
          }
          return stats;
        })
        .then(onSucc, onErr);
    };
  }
};

// Expose public methods.
module.exports = {
  shimOnTrack: firefoxShim.shimOnTrack,
  shimSourceObject: firefoxShim.shimSourceObject,
  shimPeerConnection: firefoxShim.shimPeerConnection,
  shimGetUserMedia: __webpack_require__(174)
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var utils = __webpack_require__(21);
var logging = utils.log;

// Expose public methods.
module.exports = function(window) {
  var browserDetails = utils.detectBrowser(window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  var shimError_ = function(e) {
    return {
      name: {
        InternalError: 'NotReadableError',
        NotSupportedError: 'TypeError',
        PermissionDeniedError: 'NotAllowedError',
        SecurityError: 'NotAllowedError'
      }[e.name] || e.name,
      message: {
        'The operation is insecure.': 'The request is not allowed by the ' +
        'user agent or the platform in the current context.'
      }[e.message] || e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  // getUserMedia constraints shim.
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r. min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37_(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37_(constraints.video);
      }
      logging('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
      onError(shimError_(e));
    });
  };

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
        return new Promise(function(resolve) {
          var infos = [
            {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
            {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
          ];
          resolve(infos);
        });
      };

  if (browserDetails.version < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).then(function(stream) {
        // Work around https://bugzil.la/802326
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          throw new DOMException('The object can not be found here.',
                                 'NotFoundError');
        }
        return stream;
      }, function(e) {
        return Promise.reject(shimError_(e));
      });
    };
  }
  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    if (browserDetails.version < 44) {
      return getUserMedia_(constraints, onSuccess, onError);
    }
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    console.warn('navigator.getUserMedia has been replaced by ' +
                 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

var safariShim = {
  // TODO: DrAlex, should be here, double check against LayoutTests

  // TODO: once the back-end for the mac port is done, add.
  // TODO: check for webkitGTK+
  // shimPeerConnection: function() { },

  shimLocalStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getLocalStreams = function() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
    }
    if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getStreamById = function(id) {
        var result = null;
        if (this._localStreams) {
          this._localStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        if (this._remoteStreams) {
          this._remoteStreams.forEach(function(stream) {
            if (stream.id === id) {
              result = stream;
            }
          });
        }
        return result;
      };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
      var _addTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        if (this._localStreams.indexOf(stream) === -1) {
          this._localStreams.push(stream);
        }
        var self = this;
        stream.getTracks().forEach(function(track) {
          _addTrack.call(self, track, stream);
        });
      };

      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (stream) {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (this._localStreams.indexOf(stream) === -1) {
            this._localStreams.push(stream);
          }
        }
        _addTrack.call(this, track, stream);
      };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        var index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        var self = this;
        var tracks = stream.getTracks();
        this.getSenders().forEach(function(sender) {
          if (tracks.indexOf(sender.track) !== -1) {
            self.removeTrack(sender);
          }
        });
      };
    }
  },
  shimRemoteStreamsAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
        get: function() {
          return this._onaddstream;
        },
        set: function(f) {
          if (this._onaddstream) {
            this.removeEventListener('addstream', this._onaddstream);
            this.removeEventListener('track', this._onaddstreampoly);
          }
          this.addEventListener('addstream', this._onaddstream = f);
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            var stream = e.streams[0];
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            this._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = e.streams[0];
            this.dispatchEvent(event);
          }.bind(this));
        }
      });
    }
  },
  shimCallbacksAPI: function(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    var prototype = window.RTCPeerConnection.prototype;
    var createOffer = prototype.createOffer;
    var createAnswer = prototype.createAnswer;
    var setLocalDescription = prototype.setLocalDescription;
    var setRemoteDescription = prototype.setRemoteDescription;
    var addIceCandidate = prototype.addIceCandidate;

    prototype.createOffer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    prototype.createAnswer = function(successCallback, failureCallback) {
      var options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      var promise = createAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    var withCallback = function(description, successCallback, failureCallback) {
      var promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;

    withCallback = function(description, successCallback, failureCallback) {
      var promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;

    withCallback = function(candidate, successCallback, failureCallback) {
      var promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  },
  shimGetUserMedia: function(window) {
    var navigator = window && window.navigator;

    if (!navigator.getUserMedia) {
      if (navigator.webkitGetUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
      } else if (navigator.mediaDevices &&
          navigator.mediaDevices.getUserMedia) {
        navigator.getUserMedia = function(constraints, cb, errcb) {
          navigator.mediaDevices.getUserMedia(constraints)
          .then(cb, errcb);
        }.bind(navigator);
      }
    }
  }
};

// Expose public methods.
module.exports = {
  shimCallbacksAPI: safariShim.shimCallbacksAPI,
  shimLocalStreamsAPI: safariShim.shimLocalStreamsAPI,
  shimRemoteStreamsAPI: safariShim.shimRemoteStreamsAPI,
  shimGetUserMedia: safariShim.shimGetUserMedia
  // TODO
  // shimPeerConnection: safariShim.shimPeerConnection
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMTFjYzI4YTQyOTk4YmY4MTlhOSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL2NhY2hlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvRGF0YVN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvUm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW52aXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluaXRpb25zL1N0cmVhbVR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvUGFydGljaXBhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3RyZWFtL1JlbW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvQ29kZWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9EZXZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3RyZWFtL0xvY2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9TdHJlYW1NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3dlYnJ0Yy9QZWVyQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9mbi9hcnJheS9maW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vc2RwL3NkcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9hZGFwdGVyX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZWRnZV9zaGltLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvcnRjcGVlcmNvbm5lY3Rpb25fc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2ZpcmVmb3hfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanMiXSwibmFtZXMiOlsiX2NhY2hlIiwiQ2FjaGVNYW5hZ2VyIiwidXJsIiwiX2Jhc2UiLCJjb25maWciLCJfY29uZmlnIiwiYXNzaWduIiwidXNlciIsIl91c2VyIiwiZGV2aWNlIiwiX2RldmljZSIsImxldmVsIiwidGVzdCIsIl9sb2dMZXZlbCIsIkVycm9yIiwiX3N0cmVhbXMiLCJfcGVlckNvbm5lY3Rpb25zIiwiY2FjaGUiLCJsZXZlbHMiLCJpc0VuYWJsZWQiLCJpbmRleE9mIiwidG9VcHBlckNhc2UiLCJsb2dMZXZlbCIsImdDb25zb2xlIiwiZ2xvYmFsIiwibG9nZ2VyIiwibWV0aG9kIiwibWVzc2FnZXMiLCJ0b0xvd2VyQ2FzZSIsImJpbmQiLCJncm91cCIsIm1lc3NhZ2UiLCJpdGVtcyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZhbHVlcyIsImNvbmNhdCIsIkFycmF5IiwiZm9yRWFjaCIsIml0ZW0iLCJncm91cEVuZCIsImQiLCJpIiwidyIsImUiLCJlcnJvciIsInIiLCJyZWFzb24iLCJyZWplY3QiLCJldmVudFR5cGUiLCJldmVudCIsImV2dCIsIl93cml0ZSIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsImJhc2UiLCJjaGlsZCIsInNldCIsInB1c2giLCJwdXNoUmVmIiwidXBkYXRlIiwicmVtb3ZlIiwib25jZSIsImdldCIsImxpc3QiLCJUeXBlIiwicGFyYW1zIiwidGhlbiIsInNuYXBEYXRhIiwic25hcENoaWxkIiwib24iLCJxdWVyeUNhbGxiYWNrIiwiY2FuY2VsQ2FsbGJhY2siLCJvZmYiLCJjYWxsYmFjayIsIm9uRGlzY29ubmVjdCIsInRzIiwiRGF0ZSIsIm5vdyIsIk9QRU5FRCIsIkNMT1NFRCIsIkNMT1NJTkciLCJDT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwiV0FTX0NPTk5FQ1RFRCIsIk9XTkVSIiwiTU9ERVJBVE9SIiwiUEFSVElDSVBBTlQiLCJOT05FIiwiT05HT0lORyIsIkFDQ0VQVEVEIiwiUkVKRUNURUQiLCJDQU5DRUxFRCIsIkRhdGFTeW5jIiwiRXZlbnRzIiwiTG9nIiwiX2pvaW5Sb29tIiwicm9vbSIsInJvbGUiLCJwYXJ0aWNpcGFudCIsInN0YXR1cyIsIl9qb2luZWQiLCJ1aWQiLCJSb29tIiwidmFsIiwibmFtZSIsIm93bmVyIiwiX3B1YmxpYyIsImV4dHJhIiwiX2NhbGxiYWNrcyIsImxvY2FsU3RyZWFtcyIsIm1hcCIsImtleSIsInJvb21JZCIsInN0cmVhbXMiLCJmaWx0ZXIiLCJzdHJlYW0iLCJmcm9tIiwiY2F0Y2giLCJ1c2VycyIsIl9wYXRoIiwiX2RhdGEiLCJhbGwiLCJzZW5kIiwicmVtb3ZlUGFydGljaXBhbnQiLCJpbnZpdGUiLCJ0byIsImludml0ZXMiLCJ0b1BhdGgiLCJvYmoiLCJ0b0NsYXNzIiwidHlwZWRDYWxsYmFjayIsInN0cmVhbURhdGEiLCJyZW1vdGVTdHJlYW0iLCJnZXRSZW1vdGUiLCJ0eXBlIiwibG9jYWxTdHJlYW1Db250YWluZXIiLCJjb25zdHJhaW50cyIsInNoYXJlIiwiY2FuY2VsIiwibG9jYWxTdHJlYW0iLCJjbG9zZSIsInJlbW90ZVN0cmVhbXMiLCJ1blN1YnNjcmliZSIsImxlYXZlIiwiX2Nsb3NlZCIsInB1YmxpY1Jvb20iLCJyb29tTWV0YURhdGEiLCJyb29tRnVsbE1ldGFEYXRhIiwiX2NyZWF0ZWQiLCJyb29tUmVmIiwicHJlc2V0cyIsIlVIRCIsImgiLCJtaW4iLCJGSEQiLCJtYXgiLCJIRCIsIlNWR0EiLCJTRCIsIlZHQSIsIl9hc3NpZ25EZXZpY2UiLCJjb25zdHJhaW50IiwiZGV2aWNlSWQiLCJmYWNpbmdNb2RlIiwiTWVkaWEiLCJ2aWRlb0NvbnN0cmFpbnRzIiwiYXVkaW9Db25zdHJhaW50cyIsInZpZGVvRGV2aWNlSWQiLCJhdWRpb0RldmljZUlkIiwidmlkZW8iLCJwcmVzZXQiLCJkaW1Db25zdHJhaW50IiwiZGltIiwiaWRlYWwiLCJ3aWR0aCIsImhlaWdodCIsImF1ZGlvIiwibWVkaWFTdHJlYW0iLCJjb250YWluZXIiLCJwcmV2aW91cyIsInZvbHVtZSIsInRhZ05hbWUiLCJnZXRWaWRlb1RyYWNrcyIsImdldEF1ZGlvVHJhY2tzIiwiX25vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvcGxheSIsInJlcGxhY2VDaGlsZCIsImFwcGVuZENoaWxkIiwic3JjT2JqZWN0IiwiZGlzYWJsZWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwiZGV2aWNlcyIsImtpbmQiLCJVU0VSIiwiRU5WSVJPTk1FTlQiLCJwYXRocyIsImNsYXNzZXMiLCJfRXZlbnRzIiwia2V5cyIsInN1cHBvcnRzIiwicmVwbGFjZSIsInJlYWNoIiwiX2VuZGVkIiwicHJvcCIsIkludml0ZSIsInJlZiIsInBhcmVudCIsInRvcGljIiwiX2xpc3RlbmVyIiwidXBkYXRlZCIsImNiIiwiaWR4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwic29tZSIsImludml0ZWUiLCJpbnZpdGVNZXRhRGF0YSIsImludml0ZUlkIiwiaW52aXRlUmVmIiwiaW5pdGlhbGl6aW5nIiwiVXNlciIsImxhc3RTZWVuIiwiYW5vbnltb3VzIiwiY3JlYXRlIiwiSU5URVJOQUwiLCJQZXJzaXN0ZW50U3RvcmFnZSIsImRldmljZU1ldGFkYXRhIiwic2RrIiwid2ViY29tIiwiU0RLX1ZFUlNJT04iLCJ1c2VyQWdlbnQiLCJkZXZpY2VSZWYiLCJpbnZpdGVJZHMiLCJoYXNDb25uZWN0ZWREZXZpY2VzIiwiUmVnRXhwIiwiQVVESU8iLCJWSURFTyIsIkFVRElPX1ZJREVPIiwiU0NSRUVOX1NIQVJJTkciLCJNZXNzYWdlIiwidGV4dCIsIm5ld1RleHQiLCJQYXJ0aWNpcGFudCIsIlJlbW90ZSIsInJlbW90ZVN0cmVhbUNvbnRhaW5lciIsIm11dGVkIiwicGVlckNvbm5lY3Rpb24iLCJwZWVyQ29ubmVjdGlvbnMiLCJhbnN3ZXIiLCJwYyIsInN1YnNjcmliZWQiLCJTSVpFIiwiTVVURSIsIl9jbG9zZSIsInJlbW90ZSIsIm5vZGUiLCJicm93c2VyIiwiY29tcGF0aWJsZSIsIm1pblZlcnNpb24iLCJ2ZXJzaW9uIiwiYXJncyIsImxvZyIsIlJlYWNoIiwiY2ZnIiwiZW1haWwiLCJwYXNzd29yZCIsInJlbWVtYmVyTWUiLCJjcmVhdGVVc2VyIiwiYXV0aCIsImxvZ2luIiwicCIsImN1cnJlbnQiLCJsb2dvdXQiLCJhdXRoV2l0aFBhc3N3b3JkIiwiaW5pdCIsInUiLCJyZXN1bWUiLCJhdXRoQW5vbnltb3VzbHkiLCJkaXNjb25uZWN0IiwiaW5jbHVkZSIsImNscyIsInN0YWNrcyIsInNjaGVtYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZmxhdHRlblNlcnZlcnMiLCJfZXhwYW5kIiwic2VydmVycyIsInVzZXJuYW1lIiwic2VydmVyIiwiY3JlZGVudGlhbCIsInVybHMiLCJ1cmlzIiwidXJpIiwiQ29uZmlnIiwicHJlZmVycmVkVmlkZW9Db2RlYyIsInByZWZlcnJlZEF1ZGlvQ29kZWMiLCJyZXNldCIsImljZVNlcnZlcnMiLCJfaWNlU2VydmVycyIsIl9jdXJyZW50U2VydmVycyIsIl9uZXdTZXJ2ZXJzIiwibmV3U2VydmVyIiwicmVkdWNlIiwicyIsIkRldmljZSIsIm9zIiwiX2ZhY2luZ01vZGVzIiwiX2dldENvbnN0cmFpbnRWYWx1ZSIsImV4YWN0IiwiX3NldENvbnN0cmFpblZhbHVlIiwib3RoZXIiLCJ2YWx1ZSIsIkxvY2FsIiwiaXNWaWRlb0xvYWRlZCIsIl9pbnB1dHMiLCJnZXRVc2VyTWVkaWEiLCJjb25zdHJhaW50c1ZhbHVlIiwibWVkaWEiLCJ0cmFjayIsInN0YXRlIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZW5hYmxlZCIsIm11dGUiLCJfc3dpdGNoRGV2aWNlIiwibmV4dCIsImN1cnJlbnRNb2RlSWR4IiwibWVkaWFEZXZpY2UiLCJzb3J0IiwibmV4dERldmljZSIsInYiLCJzdG9wIiwicHJvcHMiLCJyZXZlcnNlIiwidXBkYXRlQ29uc3RyYWludHMiLCJkZWZhdWx0Q29uc3RyYWludHMiLCJfY29uc3RyYWludHMiLCJNZWRpYVN0cmVhbSIsImNoZWNrRGV2aWNlcyIsImxhYmVsIiwiZGV2aWNlSWRzIiwiYXR0YWNoU3RyZWFtIiwib25sb2FkZWRkYXRhIiwicmVuZWdvdGlhdGUiLCJfbWVkaWEiLCJyZW1vdmVDaGlsZCIsInN0cmVhbU1ldGFEYXRhIiwic2hhcmVkU3RyZWFtIiwic3RyZWFtUmVmIiwic3RyZWFtU2l6ZSIsInZpZGVvSGVpZ2h0IiwidmlkZW9XaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaGFyZWQiLCJzdWJzY3JpYmVyIiwib2ZmZXIiLCJjbG9zZWRQQyIsIlN0cmVhbU1hbmFnZXIiLCJEdGxzU3J0cEtleUFncmVlbWVudCIsInNkcENvbnN0cmFpbnRzIiwiT2ZmZXJUb1JlY2VpdmVBdWRpbyIsInJlY2VpdmUiLCJPZmZlclRvUmVjZWl2ZVZpZGVvIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkciLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9DTE9TRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUiIsIl90b0pTT04iLCJvIiwidG9KU09OIiwiUGVlckNvbm5lY3Rpb24iLCJzdGFja0lkIiwic3RyZWFtSWQiLCJyZW1vdGVEZXZpY2UiLCJwdWJsaXNoIiwiX2xvY2FsUGF0aCIsIl9yZW1vdGVQYXRoIiwibmVnb3RpYXRlZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib3B0aW9uYWwiLCJtYW5kYXRvcnkiLCJvbmljZWNhbmRpZGF0ZSIsImNhbmRpZGF0ZSIsIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlIiwiaWNlQ29ubmVjdGlvblN0YXRlIiwiX2F0dGFjaFN0cmVhbSIsIl9yZW1vdGVJQ0VDYW5kaWRhdGVzIiwiaXNDb25uZWN0ZWQiLCJvbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlIiwiaWNlR2F0aGVyaW5nU3RhdGUiLCJfc3RhdHVzIiwibGlzdGVuIiwic25hcCIsImFkZEljZUNhbmRpZGF0ZSIsIlJUQ0ljZUNhbmRpZGF0ZSIsImh0bWxFbGVtZW50IiwicHJvdG90eXBlIiwib250cmFjayIsIm9uYWRkc3RyZWFtIiwic2RwT2ZmZXIiLCJzZXRSZW1vdGVEZXNjcmlwdGlvbiIsInJlbW90ZURlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiX3NldFByZWZlcnJlZENvZGVjcyIsImRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJzZW5kVGltZW91dCIsIm9ubmVnb3RpYXRpb25uZWVkZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3NlbmRPZmZlciIsInNkcEFuc3dlciIsIl9hbHRlclN0cmVhbSIsImNyZWF0ZU9mZmVyIiwib2xkU3RyZWFtIiwibmV3U3RyZWFtIiwiUlRDUnRwU2VuZGVyIiwiZ2V0U2VuZGVycyIsIm5ld1RyYWNrcyIsInNlbmRlciIsInJlcGxhY2VUcmFjayIsInNpZ25hbGluZ1N0YXRlIiwib25zaWduYWxpbmdzdGF0ZWNoYW5nZSIsInNkcExpbmVzIiwic2RwIiwic3BsaXQiLCJtZWRpYXMiLCJzZHBMaW5lIiwiZXhlYyIsImZtdCIsImluZGV4IiwiY29kZWNzIiwiYyIsImlkIiwicHJlZmVyIiwibWVkaWFMaXN0IiwicHJlZmVyZWRDb2RlYyIsInNlbGVjdGVkIiwiZmluZCIsImNvZGVjIiwiaWRzIiwiam9pbiIsIl9yZW1vdGVTdHJlYW0iLCJnZXRTdGFja0lkIiwiaWQxIiwiaWQyIiwibG9jYWxlQ29tcGFyZSIsIlBlZXJDb25uZWN0aW9uTWFuYWdlciIsImdldFBlZXJDb25uZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDUkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7OztBQzFCRCw2QkFBNkI7QUFDN0IscUNBQXFDLGdDOzs7Ozs7QUNEckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7Ozs7aXJCQ0FBLEdBQUlBLFFBQVMsSUFBYixDLEdBTU1DLGEsWUFLTCx1QkFBYyxpREFDYixHQUFHLENBQUNELE1BQUosQ0FBWSxDQUNYQSxPQUFTLElBQVQsQ0FDQSxDQUNELE1BQU9BLE9BQVAsQ0FDQSxDLHFFQUtRRSxHLENBQUssQ0FJYixLQUFLQyxLQUFMLENBQWFELGdDQUF3QkEsR0FBeEIsQ0FBOEIscUJBQVdBLEdBQVgsQ0FBM0MsQ0FDQSxDLG1CQUtVLENBQ1YsTUFBTyxNQUFLQyxLQUFaLENBQ0EsQyxpQ0FNVUMsTSxDQUFRLENBQ2xCLEdBQUcsQ0FBQyxLQUFLQyxPQUFULENBQWtCLENBSWpCLEtBQUtBLE9BQUwsQ0FBZSxxQkFBV0QsTUFBWCxDQUFmLENBQ0EsQ0FMRCxJQUtPLENBQ04sS0FBS0MsT0FBTCxDQUFhQyxNQUFiLENBQW9CRixNQUFwQixFQUNBLENBQ0QsQyxtQkFLWSxDQUNaLEdBQUcsQ0FBQyxLQUFLQyxPQUFULENBQWtCLENBQ2pCLEtBQUtBLE9BQUwsQ0FBZSxzQkFBZixDQUNBLENBQ0QsTUFBTyxNQUFLQSxPQUFaLENBQ0EsQywrQkFLUUUsSSxDQUFNLENBSWQsS0FBS0MsS0FBTCxDQUFhRCxJQUFiLENBQ0EsQyxtQkFLVSxDQUNWLE1BQU8sTUFBS0MsS0FBWixDQUNBLEMsaUNBS1VDLE0sQ0FBUSxDQUlsQixLQUFLQyxPQUFMLENBQWVELE1BQWYsQ0FDQSxDLG1CQUtZLENBQ1osTUFBTyxNQUFLQyxPQUFaLENBQ0EsQyxtQ0FNWUMsSyxDQUFPLENBQ25CLEdBQUcsMkJBQTJCQyxJQUEzQixDQUFnQ0QsS0FBaEMsQ0FBSCxDQUEyQyxDQUkxQyxLQUFLRSxTQUFMLENBQWlCRixLQUFqQixDQUNBLENBTEQsSUFLTyxJQUFHQSxLQUFILENBQVUsQ0FDaEIsS0FBTSxJQUFJRyxNQUFKLENBQVUsa0RBQVYsQ0FBTixDQUNBLENBQ0QsQyxtQkFLYyxDQUNkLE1BQU8sTUFBS0QsU0FBTCxFQUFrQixPQUF6QixDQUNBLEMsbUNBTWEsQ0FDYixHQUFHLENBQUMsS0FBS0UsUUFBVCxDQUFtQixDQUlsQixLQUFLQSxRQUFMLENBQWdCLDZCQUFoQixDQUNBLENBQ0QsTUFBTyxNQUFLQSxRQUFaLENBQ0EsQywyQ0FNcUIsQ0FDckIsR0FBRyxDQUFDLEtBQUtDLGdCQUFULENBQTJCLENBSTFCLEtBQUtBLGdCQUFMLENBQXdCLHFDQUF4QixDQUNBLENBQ0QsTUFBTyxNQUFLQSxnQkFBWixDQUNBLEMsNEJBUUYsR0FBTUMsT0FBUSxHQUFJaEIsYUFBSixFQUFkLEMsZ0JBTWVnQixLOzs7Ozs7QUN0S2Y7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdDOzs7Ozs7O3NkQ0l2QyxHQUFNQyxRQUFTLENBQUMsT0FBRCxDQUFVLE1BQVYsQ0FBa0IsTUFBbEIsQ0FBMEIsT0FBMUIsQ0FBZixDQU9NQyxVQUFZLFFBQVpBLFVBQVksT0FBUyxDQUMxQixNQUFPRCxRQUFPRSxPQUFQLENBQWVULE1BQU1VLFdBQU4sRUFBZixHQUF1Q0gsT0FBT0UsT0FBUCxDQUFlLGdCQUFNRSxRQUFOLENBQWVELFdBQWYsRUFBZixDQUE5QyxDQUNBLENBVEQsQ0FlTUUsU0FBV0MsY0FmakIsQ0F1Qk1DLE9BQVMsUUFBVEEsT0FBUyxDQUFDQyxNQUFELENBQVNmLEtBQVQsQ0FBZ0MsK0JBQWJnQixRQUFhLGlEQUFiQSxRQUFhLDBCQUM5Q1IsVUFBVVIsS0FBVixFQUFtQlksU0FBU0csT0FBT0UsV0FBUCxFQUFULEVBQStCQyxJQUEvQixDQUFvQ04sUUFBcEMsa0JBQWlESSxRQUFqRCxDQUFuQixDQUFnRixVQUFNLENBQUUsQ0FBeEYsQ0FDQSxDQXpCRCxDQWlDTUcsTUFBUSxRQUFSQSxNQUFRLENBQUNuQixLQUFELENBQVFvQixPQUFSLENBQThCLGdDQUFWQyxLQUFVLHVEQUFWQSxLQUFVLDRCQUMzQyxHQUFJQSxNQUFNQyxNQUFOLENBQWUsQ0FBbkIsQ0FBc0IsQ0FDckJSLE9BQU9JLElBQVAsQ0FBWUssU0FBWixDQUF1QlgsU0FBU08sS0FBVCxDQUFpQixPQUFqQixDQUEyQm5CLEtBQWxELENBQXlEQSxLQUF6RCxFQUFnRSxNQUFPb0IsUUFBUCxHQUFtQixRQUFuQixDQUE4QkEsT0FBOUIsQ0FBd0MsRUFBeEcsRUFDQSxHQUFJSSxRQUFTLENBQUMsTUFBT0osUUFBUCxHQUFtQixRQUFuQixDQUE4QixDQUFDQSxPQUFELENBQTlCLENBQTBDLEVBQTNDLEVBQStDSyxNQUEvQyxDQUFzREosS0FBdEQsQ0FBYixDQUNBLEdBQUlBLE1BQU1DLE1BQU4sR0FBaUIsQ0FBakIsRUFBc0JELE1BQU0sQ0FBTixXQUFvQkssTUFBMUMsRUFBbUQscUJBQU9MLE1BQU0sQ0FBTixFQUFTQyxNQUFoQixJQUEyQkMsU0FBbEYsQ0FBNkYsQ0FDNUZDLE9BQVNILE1BQU0sQ0FBTixDQUFULENBQ0EsQ0FDREcsT0FBT0csT0FBUCxDQUFlLHFCQUFRYixRQUFPSSxJQUFQLENBQVlLLFNBQVosQ0FBdUJ2QixLQUF2QixDQUE4QkEsS0FBOUIsRUFBcUM0QixJQUFyQyxDQUFSLEVBQWYsRUFDQWhCLFNBQVNpQixRQUFULEVBQXFCakIsU0FBU2lCLFFBQVQsRUFBckIsQ0FDQSxDQVJELElBUU8sQ0FDTmYsT0FBT0ksSUFBUCxDQUFZSyxTQUFaLENBQXVCdkIsS0FBdkIsQ0FBOEJBLEtBQTlCLENBQXFDb0IsT0FBckMsRUFDQSxDQUNELENBN0NELENBb0RPLEdBQU1VLGFBQUlYLE1BQU1ELElBQU4sQ0FBV0ssU0FBWCxDQUFzQmhCLE9BQU8sQ0FBUCxDQUF0QixDQUFWLENBTUEsR0FBTXdCLGFBQUlaLE1BQU1ELElBQU4sQ0FBV0ssU0FBWCxDQUFzQmhCLE9BQU8sQ0FBUCxDQUF0QixDQUFWLENBTUEsR0FBTXlCLGFBQUliLE1BQU1ELElBQU4sQ0FBV0ssU0FBWCxDQUFzQmhCLE9BQU8sQ0FBUCxDQUF0QixDQUFWLENBTUEsR0FBTTBCLGFBQUlyQixTQUFTc0IsS0FBVCxDQUFlaEIsSUFBZixDQUFvQk4sUUFBcEIsQ0FBVixDQU9BLEdBQU11QixhQUFJLFFBQUpBLEVBQUksZ0JBQVcsaUJBQVUsQ0FDckNMLEVBQUVWLE9BQUYsQ0FBV2dCLE1BQVgsRUFDQSxNQUFPLG1CQUFRQyxNQUFSLENBQWVELFFBQVVoQixPQUF6QixDQUFQLENBQ0EsQ0FIZ0IsRUFBVixDOzs7Ozs7O0FDcEZQLGtCQUFrQix5RDs7Ozs7OztnZENRWCxHQUFNa0IsNkJBQVksUUFBWkEsVUFBWSxDQUFDQyxLQUFELENBQVcsQ0FDbkMsR0FBSUMsV0FBSixDQUNBLEdBQUksVUFBRCxDQUFhdkMsSUFBYixDQUFrQnNDLEtBQWxCLEdBQTRCLGNBQWN0QyxJQUFkLENBQW1Cc0MsS0FBbkIsQ0FBL0IsQ0FBMEQsQ0FDekRDLElBQU0sT0FBTixDQUNBLENBRkQsSUFFTyxJQUFHLFlBQVl2QyxJQUFaLENBQWlCc0MsS0FBakIsR0FBMkIsY0FBY3RDLElBQWQsQ0FBbUJzQyxLQUFuQixDQUE5QixDQUF5RCxDQUMvREMsSUFBTSxTQUFOLENBQ0EsQ0FGTSxJQUVBLElBQUcsWUFBWXZDLElBQVosQ0FBaUJzQyxLQUFqQixHQUEyQixnQkFBZ0J0QyxJQUFoQixDQUFxQnNDLEtBQXJCLENBQTlCLENBQTJELENBQ2pFQyxJQUFNLFNBQU4sQ0FDQSxDQUNELE1BQU9BLGNBQWVBLEdBQWYsQ0FBdUJELEtBQTlCLENBQ0EsQ0FWTSxDQW1CUCxHQUFNRSxRQUFTLFFBQVRBLE9BQVMsQ0FBQzFCLE1BQUQsQ0FBUzJCLElBQVQsQ0FBZUMsSUFBZixRQUF3Qix1QkFBWSxTQUFDQyxPQUFELENBQVVQLE1BQVYsQ0FBcUIsQ0FDdkUsZ0JBQU1RLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUIzQixNQUF2QixFQUErQjRCLElBQS9CLENBQXFDLHNCQUFTVCxPQUFRRyxPQUFPSCxLQUFQLENBQVIsQ0FBd0JVLFNBQWpDLEVBQXJDLEVBQ0EsQ0FGc0MsQ0FBeEIsRUFBZixDQVdPLEdBQU1HLGlCQUFNTixPQUFPdkIsSUFBUCxDQUFZSyxTQUFaLENBQXVCLEtBQXZCLENBQVosQ0FTQSxHQUFNeUIsbUJBQU8sUUFBUEEsS0FBTyxDQUFDTixJQUFELENBQU9DLElBQVAsUUFBZ0IsdUJBQVksU0FBQ0MsT0FBRCxDQUFVUCxNQUFWLENBQXFCLENBQ3BFLEdBQU1ZLFNBQVUsZ0JBQU1KLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUJNLElBQXZCLENBQTRCTCxJQUE1QixDQUFrQyxzQkFBU1QsT0FBUUcsT0FBT0gsS0FBUCxDQUFSLENBQXdCVSxRQUFRSyxPQUFSLENBQWpDLEVBQWxDLENBQWhCLENBQ0EsQ0FGbUMsQ0FBaEIsRUFBYixDQVdBLEdBQU1DLHVCQUFTVCxPQUFPdkIsSUFBUCxDQUFZSyxTQUFaLENBQXVCLFFBQXZCLENBQWYsQ0FRQSxHQUFNNEIsdUJBQVMsUUFBVEEsT0FBUyxDQUFDVCxJQUFELFFBQVUsdUJBQVksU0FBQ0UsT0FBRCxDQUFVUCxNQUFWLENBQXFCLENBQ2hFLGdCQUFNUSxJQUFOLENBQVdDLEtBQVgsQ0FBaUJKLElBQWpCLEVBQXVCUyxNQUF2QixDQUE4QixzQkFBU2pCLE9BQVFHLE9BQU9ILEtBQVAsQ0FBUixDQUF3QlUsU0FBakMsRUFBOUIsRUFDQSxDQUYrQixDQUFWLEVBQWYsQ0FXQSxHQUFNUSxtQkFBTyxRQUFQQSxLQUFPLENBQUNWLElBQUQsQ0FBT0gsS0FBUCxRQUFpQix1QkFBWSxTQUFDSyxPQUFELENBQVVQLE1BQVYsQ0FBcUIsQ0FDckUsZ0JBQU1RLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUJVLElBQXZCLENBQTRCZCxVQUFVQyxLQUFWLENBQTVCLENBQThDSyxPQUE5QyxDQUF1RFAsTUFBdkQsRUFDQSxDQUZvQyxDQUFqQixFQUFiLENBVUEsR0FBTWdCLGlCQUFNLFFBQU5BLElBQU0sYUFBUUQsTUFBS1YsSUFBTCxDQUFXLE9BQVgsQ0FBUixFQUFaLENBVUEsR0FBTVksbUJBQU8sUUFBUEEsS0FBTyxDQUFDWixJQUFELENBQU9hLElBQVAsQ0FBMkIsK0JBQVhDLE1BQVcsaURBQVhBLE1BQVcsMEJBQzlDLE1BQU9ILEtBQUlYLElBQUosRUFBVWUsSUFBVixDQUFlLGtCQUFZLENBQ2pDLEdBQUdDLFFBQUgsQ0FBYSxDQUNaLEdBQU1sQyxRQUFTLEVBQWYsQ0FDQWtDLFNBQVMvQixPQUFULENBQWlCLG1CQUFhLENBQzdCSCxPQUFPd0IsSUFBUCxtQ0FBZ0JPLElBQWhCLGdCQUFxQkksU0FBckIsRUFBbUNILE1BQW5DLE9BQ0EsQ0FGRCxFQUdBLE1BQU9oQyxPQUFQLENBQ0EsQ0FDRCxDQVJNLENBQVAsQ0FTQSxDQVZNLENBb0JBLEdBQU1vQyxlQUFLLFFBQUxBLEdBQUssQ0FBQ2xCLElBQUQsQ0FBT0gsS0FBUCxDQUFjc0IsYUFBZCxDQUE2QkMsY0FBN0IsQ0FBZ0QsQ0FDakUsZ0JBQU1qQixJQUFOLENBQVdDLEtBQVgsQ0FBaUJKLElBQWpCLEVBQXVCa0IsRUFBdkIsQ0FBMEJ0QixVQUFVQyxLQUFWLENBQTFCLENBQTRDc0IsYUFBNUMsQ0FBMkRDLGNBQTNELEVBQ0EsQ0FGTSxDQVdBLEdBQU1DLGlCQUFNLFFBQU5BLElBQU0sQ0FBQ3JCLElBQUQsQ0FBT0gsS0FBUCxDQUFjeUIsUUFBZCxDQUEyQixDQUM3QyxnQkFBTW5CLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUJxQixHQUF2QixDQUEyQnpCLFVBQVVDLEtBQVYsQ0FBM0IsQ0FBNkN5QixRQUE3QyxFQUNBLENBRk0sQ0FVQSxHQUFNQyxtQ0FBZSxRQUFmQSxhQUFlLGFBQVEsaUJBQU1wQixJQUFOLENBQVdDLEtBQVgsQ0FBaUJKLElBQWpCLEVBQXVCdUIsWUFBdkIsRUFBUixFQUFyQixDQVFBLEdBQU1DLGVBQUssUUFBTEEsR0FBSyxTQUFNQyxNQUFLQyxHQUFMLEVBQU4sRUFBWCxDOzs7Ozs7QUNsSlAsa0JBQWtCLHlEOzs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxVQUFVO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDZkE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLGdCQUFnQixVQUFVLEdBQUc7QUFDdEUsQ0FBQyxFOzs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTEEsa0JBQWtCLHlEOzs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix5Qjs7Ozs7O0FDNURBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsRTs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEU7Ozs7Ozs7eURDRk8sR0FBTUMsdUJBQVMsUUFBZixDQU1BLEdBQU1DLHVCQUFTLFFBQWYsQ0FNQSxHQUFNQyx5QkFBVSxTQUFoQixDQU1BLEdBQU1DLDZCQUFZLFdBQWxCLENBTUEsR0FBTUMscUNBQWdCLGVBQXRCLENBTUEsR0FBTUMscUNBQWdCLGVBQXRCLENBTUEsR0FBTUMscUJBQVEsT0FBZCxDQU1BLEdBQU1DLDZCQUFZLFdBQWxCLENBTUEsR0FBTUMsaUNBQWMsYUFBcEIsQ0FNQSxHQUFNQyxtQkFBTyxNQUFiLENBTUEsR0FBTUMseUJBQVUsU0FBaEIsQ0FNQSxHQUFNQywyQkFBVyxVQUFqQixDQU1BLEdBQU1DLDJCQUFXLFVBQWpCLENBTUEsR0FBTUMsMkJBQVcsVUFBakIsQzs7Ozs7O0FDbkZQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxPQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU87QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDektBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNGQSxvQjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0M7Ozs7Ozs7a2hCQ0YzQkMsUSw0YkFNQUMsTSw4REFDQUMsRyw0VkFHWixHQUFNQyxXQUFZLFFBQVpBLFVBQVksQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQWdCLENBQ2pDLEdBQU1DLGFBQWMsQ0FDbkJDLDJCQURtQixDQUVuQkMsUUFBU1IsU0FBU2pCLEVBQVQsRUFGVSxDQUFwQixDQUlBLEdBQUdzQixJQUFILENBQVMsQ0FDUkMsWUFBWUQsSUFBWixDQUFtQkEsSUFBbkIsQ0FDQSxDQUNESCxJQUFJckQsQ0FBSixDQUFNLFdBQU4sQ0FBbUIsQ0FBQ3lELFdBQUQsWUFBeUJGLEtBQUtLLEdBQTlCLGtCQUFrRCxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBQTdELENBQW5CLEVBQ0EsTUFBT1QsVUFDTGpDLE1BREssWUFDYXFDLEtBQUtLLEdBRGxCLGtCQUNzQyxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBRGpELENBQ3dESCxXQUR4RCxFQUVMaEMsSUFGSyxDQUVBLFVBQU0sQ0FDWDBCLFNBQ0VsQixZQURGLFlBQzBCc0IsS0FBS0ssR0FEL0Isa0JBQ21ELGdCQUFNaEcsSUFBTixDQUFXZ0csR0FEOUQsWUFFRTdDLEdBRkYsMkJBR0EsTUFBT3dDLEtBQVAsQ0FDQSxDQVBLLENBQVAsQ0FRQSxDQWpCRCxDLEdBdUJxQk0sSyxZQU1wQixjQUFZbkMsUUFBWixDQUFzQix5Q0FDckIsR0FBSWxDLFFBQVNrQyxRQUFiLENBQ0EsR0FBR0EsVUFBWUEsU0FBU29DLEdBQXJCLEVBQTRCLE1BQU9wQyxVQUFTb0MsR0FBaEIsR0FBd0IsVUFBdkQsQ0FBa0UsQ0FDakV0RSxPQUFTLHFCQUFjLEVBQWQsQ0FBa0JrQyxTQUFTb0MsR0FBVCxFQUFsQixDQUFrQyxDQUFDRixJQUFLbEMsU0FBU3FDLElBQVQsRUFBTixDQUFsQyxDQUFULENBQ0EsQ0FLRCxLQUFLSCxHQUFMLENBQVdwRSxPQUFPb0UsR0FBbEIsQ0FLQSxLQUFLRyxJQUFMLENBQVl2RSxPQUFPdUUsSUFBbkIsQ0FLQSxLQUFLQyxLQUFMLENBQWF4RSxPQUFPd0UsS0FBcEIsQ0FPQSxLQUFLTixNQUFMLENBQWNsRSxPQUFPa0UsTUFBckIsQ0FNQSxLQUFLTyxPQUFMLENBQWUsQ0FBQyxDQUFDekUsT0FBT3lFLE9BQXhCLENBTUEsS0FBS0MsS0FBTCxDQUFhMUUsT0FBTzBFLEtBQXBCLENBTUEsS0FBS0MsVUFBTCxDQUFrQixFQUFsQixDQUNBLEMsaUZBT2MsQ0FDZCxNQUFPaEIsVUFBUzdCLElBQVQsWUFBeUIsS0FBS3NDLEdBQTlCLHVDQUErRCxLQUFLQSxHQUFwRSxDQUFQLENBQ0EsQywyQ0FPVSxDQUNWLE1BQU9ULFVBQVM3QixJQUFULFlBQXlCLEtBQUtzQyxHQUE5QiwrQkFBdUQsS0FBS0EsR0FBNUQsQ0FBUCxDQUNBLEMsMENBT1FRLFksQ0FBYyxnQkFDdEIsR0FBRyxDQUFDLGdCQUFNeEcsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSx3REFBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU9nRixVQUFTOUIsR0FBVCxZQUF3QixLQUFLdUMsR0FBN0IsYUFDTG5DLElBREssQ0FDQSxrQkFBWSxDQUNqQixHQUFNakMsUUFBU2tDLFNBQVNvQyxHQUFULEVBQWYsQ0FDQVQsSUFBSXZELENBQUosQ0FBTSxnQkFBTixDQUF3Qk4sTUFBeEIsRUFDQSxHQUFHQSxNQUFILENBQVcsQ0FDVixNQUFPLG1CQUFZQSxNQUFaLEVBQW9CNkUsR0FBcEIsQ0FBd0Isb0JBQU8scUJBQWMsQ0FBQ1QsSUFBS1UsR0FBTixDQUFXQyxPQUFRLE1BQUtYLEdBQXhCLENBQWQsQ0FBNENwRSxPQUFPOEUsR0FBUCxDQUE1QyxDQUFQLEVBQXhCLENBQVAsQ0FDQSxDQUNELE1BQU8sRUFBUCxDQUNBLENBUkssRUFTTDdDLElBVEssQ0FTQSx3QkFBVytDLFNBQVFDLE1BQVIsQ0FBZSxnQkFBVSxDQUN6QyxNQUFPTCxpQkFBa0JNLE9BQU81RyxNQUFQLEdBQWtCLGdCQUFNQSxNQUF4QixFQUFrQzRHLE9BQU9DLElBQVAsR0FBZ0IsZ0JBQU0vRyxJQUFOLENBQVdnRyxHQUEvRSxDQUFQLENBQ0EsQ0FGZ0IsQ0FBWCxFQVRBLEVBWUxuQyxJQVpLLENBWUEsd0JBQVcrQyxTQUFRSCxHQUFSLENBQVksZ0JBQU1HLE9BQU4sUUFBb0JKLGFBQWUsUUFBZixDQUEwQixRQUE5QyxHQUEwRGxGLElBQTFELENBQStELGdCQUFNc0YsT0FBckUsQ0FBWixDQUFYLEVBWkEsRUFhTC9DLElBYkssQ0FhQSx3QkFBVytDLFNBQVFDLE1BQVIsQ0FBZSx1QkFBVUMsVUFBVyxJQUFyQixFQUFmLENBQVgsRUFiQSxDQUFQLENBY0EsQyxtREFPYyxDQUNkLE1BQU8sTUFBS3RHLFFBQUwsQ0FBYyxJQUFkLEVBQ0x3RyxLQURLLENBQ0N2QixJQUFJbEQsQ0FBSixDQUFNLG1CQUFOLENBREQsQ0FBUCxDQUVBLEMscURBT2UsQ0FDZixNQUFPLE1BQUsvQixRQUFMLENBQWMsS0FBZCxFQUNMd0csS0FESyxDQUNDdkIsSUFBSWxELENBQUosQ0FBTSxvQkFBTixDQURELENBQVAsQ0FFQSxDLHNDQVVNMEUsSyxDQUE2QixpQkFBdEJyQixJQUFzQiwyRUFBVHBFLE9BQVMsY0FFbEMwRixNQUFRLFFBQVJBLE1BQVEsd0JBQW1CLE9BQUtsQixHQUF4QixrQkFBNENoRyxLQUFLZ0csR0FBakQsRUFGMEIsQ0FHbENtQixNQUFRLENBQ1ByQiwrQkFETyxDQUVQRixLQUFNQSxxQkFGQyxDQUgwQixDQVFuQyxNQUFPLG1CQUFRd0IsR0FBUixDQUFZSCxNQUFNUixHQUFOLENBQVUscUJBQVFsQixVQUFTcEMsR0FBVCxDQUFhK0QsTUFBTWxILElBQU4sQ0FBYixDQUEwQm1ILEtBQTFCLENBQVIsRUFBVixDQUFaLEVBRUx0RCxJQUZLLENBRUEsaUJBQU0sbUJBQVF1RCxHQUFSLENBQVlILE1BQU1SLEdBQU4sQ0FBVSxxQkFBUSxrQkFBT1ksSUFBUCxDQUFZckgsSUFBWixRQUF3QndCLE9BQXhCLENBQVIsRUFBVixDQUFaLENBQU4sRUFGQSxFQUdMcUMsSUFISyxDQUdBLGlCQUFXLENBQ2hCLEdBQU15RCxtQkFBb0IsUUFBcEJBLGtCQUFvQixlQUFVL0IsVUFBU2hDLE1BQVQsWUFBMkJnRSxPQUFPNUIsSUFBbEMsa0JBQXVENEIsT0FBT0MsRUFBOUQsQ0FBVixFQUExQixDQUNBQyxRQUFRMUYsT0FBUixDQUFnQixnQkFBVSxDQUN6QndGLE9BQU92RCxFQUFQLHFCQUFvQnNELGlCQUFwQixFQUNBQyxPQUFPdkQsRUFBUCxxQkFBb0JzRCxpQkFBcEIsRUFDQSxDQUhELEVBSUEsTUFBTyxDQUFDM0IsV0FBRCxDQUFhOEIsZUFBYixDQUFQLENBQ0EsQ0FWSyxFQVdMVCxLQVhLLENBV0MsV0FBSyxDQUNYdkIsSUFBSXBELENBQUosQ0FBTSxhQUFOLENBQXFCQSxDQUFyQixFQUNBNEUsTUFBTWxGLE9BQU4sQ0FBYyxxQkFBUXdELFVBQVNoQyxNQUFULFlBQTJCLE9BQUt5QyxHQUFoQyxrQkFBb0RoRyxLQUFLZ0csR0FBekQsQ0FBUixFQUFkLEVBQ0EsTUFBTyxtQkFBUXZELE1BQVIsQ0FBZUosQ0FBZixDQUFQLENBQ0EsQ0FmSyxDQUFQLENBZ0JBLEMsOEJBb0JFTSxLLENBQU95QixRLENBQVVGLGMsQ0FBZ0IsaUJBRWxDcEIsS0FBTzBDLE9BQU9HLElBQVAsQ0FBWStCLE1BQVosQ0FBbUIvRSxLQUFuQixFQUEwQixJQUExQixDQUYyQixDQUdsQ2dGLElBQU1uQyxPQUFPRyxJQUFQLENBQVlpQyxPQUFaLENBQW9CakYsS0FBcEIsQ0FINEIsQ0FJbkMsR0FBR0csTUFBUTZFLEdBQVgsQ0FBZ0IsQ0FDZixHQUFNRSxlQUFnQixRQUFoQkEsY0FBZ0IsVUFBWSxDQUNqQyxHQUFHLENBQUMsWUFBWXhILElBQVosQ0FBaUJzQyxLQUFqQixDQUFELEVBQTRCLENBQUNtQixRQUFoQyxDQUEwQyxDQUN6QzJCLElBQUl0RCxDQUFKLFlBQWlCUSxLQUFqQixLQUEyQm1CLFNBQVcsR0FBSTZELElBQUosQ0FBUTdELFFBQVIsQ0FBWCxDQUErQixJQUExRCxFQUNBTSxTQUFTTixTQUFXLEdBQUk2RCxJQUFKLENBQVE3RCxRQUFSLENBQVgsQ0FBK0IsSUFBeEMsRUFDQSxDQUhELElBR08sSUFBRyxnQkFBTTlELElBQVQsQ0FBZSxDQUNyQixHQUFNOEgsWUFBYSxxQkFBYyxDQUFDOUIsSUFBS2xDLFNBQVNxQyxJQUFULEVBQU4sQ0FBdUJRLE9BQVEsT0FBS1gsR0FBcEMsQ0FBZCxDQUF3RGxDLFNBQVNvQyxHQUFULEVBQXhELENBQW5CLENBQ0EsR0FBRzRCLFdBQVdmLElBQVgsR0FBb0IsZ0JBQU0vRyxJQUFOLENBQVdnRyxHQUEvQixFQUFzQzhCLFdBQVc1SCxNQUFYLEdBQXNCLGdCQUFNQSxNQUFyRSxDQUE2RSxDQUM1RSxHQUFNNkgsY0FBZSxnQkFBTW5CLE9BQU4sQ0FBY29CLFNBQWQsQ0FBd0JGLFVBQXhCLENBQXJCLENBQ0FyQyxJQUFJdEQsQ0FBSixZQUFpQlEsS0FBakIsS0FBMkJvRixZQUEzQixFQUNBM0QsU0FBUzJELFlBQVQsRUFDQSxDQUNELENBQ0QsQ0FaRCxDQWFBeEMsU0FBU3ZCLEVBQVQsQ0FBWWxCLElBQVosQ0FBa0JILEtBQWxCLENBQXlCa0YsYUFBekIsQ0FBd0MzRCxjQUF4QyxFQUNBLEdBQUcsQ0FBQyxLQUFLcUMsVUFBTCxDQUFnQjVELEtBQWhCLENBQUosQ0FBNEIsQ0FDM0IsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF5QixFQUF6QixDQUNBLENBQ0QsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF1QlMsSUFBdkIsQ0FBNEJ5RSxhQUE1QixFQUNBLENBQ0QsQyxnREFPV3JHLE8sQ0FBUyxDQUNwQixNQUFPLG1CQUFRNkYsSUFBUixDQUFhLElBQWIsQ0FBbUI3RixPQUFuQixDQUFQLENBQ0EsQyxvQ0FTS3lHLEksQ0FBTUMsb0IsQ0FBc0JDLFcsQ0FBYSxDQUM5QzFDLElBQUl0RCxDQUFKLENBQU0sWUFBTixDQUFvQixDQUFDOEYsU0FBRCxDQUFPQyx5Q0FBUCxDQUE2QkMsdUJBQTdCLENBQXBCLEVBQ0EsTUFBTyxpQkFBTUMsS0FBTixDQUFZLEtBQUtwQyxHQUFqQixDQUFzQmlDLElBQXRCLENBQTRCQyxvQkFBNUIsQ0FBa0RDLFdBQWxELENBQVAsQ0FDQSxDLG1DQU1NLENBQ04xQyxJQUFJdEQsQ0FBSixDQUFNLFdBQU4sQ0FBbUIsSUFBbkIsRUFDQSxHQUFHLENBQUMsZ0JBQU1uQyxJQUFWLENBQWdCLENBQ2YsTUFBTyxtQkFBUXlDLE1BQVIsQ0FBZSxHQUFJbEMsTUFBSixDQUFVLDZDQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsTUFBT21GLFdBQVUsSUFBVixFQUFnQnNCLEtBQWhCLENBQXNCdkIsSUFBSWxELENBQUosQ0FBTSxXQUFOLENBQXRCLENBQVAsQ0FDQSxDLHFDQU1PLGlCQUNQLEdBQUcsQ0FBQyxnQkFBTXZDLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsOENBQVYsQ0FBZixDQUFQLENBQ0EsQ0FDRGtGLElBQUl0RCxDQUFKLENBQU0sWUFBTixDQUFvQixJQUFwQixFQUVBb0QsU0FBU2xCLFlBQVQsWUFBaUMsS0FBSzJCLEdBQXRDLGtCQUEwRCxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBQXJFLFlBQW1GcUMsTUFBbkYsR0FHQSxtQkFBWSxLQUFLOUIsVUFBakIsRUFBNkJ4RSxPQUE3QixDQUFxQyxlQUFTLENBQzdDd0QsU0FBU3BCLEdBQVQsQ0FBYXFCLE9BQU9HLElBQVAsQ0FBWStCLE1BQVosQ0FBbUIvRSxLQUFuQixTQUFiLENBQThDQSxLQUE5QyxFQUNBLENBRkQsRUFJQSxLQUFLNkQsWUFBTCxHQUFvQjNDLElBQXBCLENBQXlCLDZCQUFnQjJDLGNBQWF6RSxPQUFiLENBQXFCLDRCQUFldUcsYUFBWUMsS0FBWixFQUFmLEVBQXJCLENBQWhCLEVBQXpCLEVBRUEsS0FBS0MsYUFBTCxHQUFxQjNFLElBQXJCLENBQTBCLDhCQUFpQjJFLGVBQWN6RyxPQUFkLENBQXNCLDZCQUFnQmdHLGNBQWFVLFdBQWIsRUFBaEIsRUFBdEIsQ0FBakIsRUFBMUIsRUFFQSxNQUFPbEQsVUFBU3BDLEdBQVQsWUFBd0IsS0FBSzZDLEdBQTdCLGtCQUFpRCxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBQTVELHFDQUNMZ0IsS0FESyxDQUNDdkIsSUFBSWxELENBQUosQ0FBTSxZQUFOLENBREQsQ0FBUCxDQUVBLEMscUNBTU8saUJBQ1BrRCxJQUFJdEQsQ0FBSixDQUFNLFlBQU4sQ0FBb0IsSUFBcEIsRUFDQSxNQUFPLE1BQUt1RyxLQUFMLEdBQ0w3RSxJQURLLENBQ0EsaUJBQU0wQixVQUFTakMsTUFBVCxVQUF5QixPQUFLMEMsR0FBOUIsQ0FBcUMsQ0FDaERGLHdCQURnRCxDQUVoRDZDLFFBQVNwRCxTQUFTakIsRUFBVCxFQUZ1QyxDQUFyQyxDQUFOLEVBREEsRUFLTFQsSUFMSyxDQUtBLGlCQUFNMEIsVUFBU2hDLE1BQVQsWUFBMkIsT0FBS3lDLEdBQWhDLENBQU4sRUFMQSxFQU1MZ0IsS0FOSyxDQU1DdkIsSUFBSWxELENBQUosQ0FBTSxZQUFOLENBTkQsQ0FBUCxDQU9BLEMsd0NBVWM0RCxJLENBQXdDLElBQWxDRyxNQUFrQywyREFBMUIsSUFBMEIsQ0FBcEJzQyxVQUFvQiwyREFBUCxLQUFPLENBQ3RELEdBQUcsQ0FBQyxnQkFBTTVJLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsK0NBQVYsQ0FBZixDQUFQLENBQ0EsQ0FFRCxHQUNDc0ksY0FBZSxDQUNkekMsTUFBTyxnQkFBTXBHLElBQU4sQ0FBV2dHLEdBREosQ0FFZEssUUFBU3VDLFVBRkssQ0FHZHpDLEtBQU1BLE1BQVcsZ0JBQU1uRyxJQUFOLENBQVdtRyxJQUF0QixLQUE4QjVCLEtBQUtDLEdBQUwsRUFIdEIsQ0FEaEIsQ0FNQ3NFLGlCQUFtQixxQkFBYyxDQUNoQ2hELHdCQURnQyxDQUVoQ2lELFNBQVV4RCxTQUFTakIsRUFBVCxFQUZzQixDQUdoQ2dDLFdBSGdDLENBQWQsQ0FJaEJ1QyxZQUpnQixDQU5wQixDQVlJbEQsS0FBTyxJQVpYLENBY0EsTUFBT0osVUFBU25DLElBQVQsQ0FBYyxPQUFkLENBQXVCMEYsZ0JBQXZCLEVBRUxqRixJQUZLLENBRUEsaUJBQVcsQ0FDaEI4QixLQUFPLEdBQUlNLEtBQUosQ0FBUyxxQkFBYyxDQUFDRCxJQUFLZ0QsUUFBUTdDLElBQVIsRUFBTixDQUFkLENBQXFDMkMsZ0JBQXJDLENBQVQsQ0FBUCxDQUNBLE1BQU92RCxVQUFTakMsTUFBVCxZQUEyQnFDLEtBQUtLLEdBQWhDLFNBQTRDNkMsWUFBNUMsQ0FBUCxDQUNBLENBTEssRUFPTGhGLElBUEssQ0FPQSxpQkFBTTZCLFdBQVVDLElBQVYsa0JBQU4sRUFQQSxFQVFMcUIsS0FSSyxDQVFDdkIsSUFBSWxELENBQUosQ0FBTSxhQUFOLENBUkQsQ0FBUCxDQVNBLEMsZ0NBUVd5RCxHLENBQUssQ0FDaEIsTUFBT1QsVUFBUzlCLEdBQVQsVUFBc0J1QyxHQUF0QixFQUNMbkMsSUFESyxDQUNBLGtCQUFZLENBQ2pCLEdBQUdDLFNBQVNvQyxHQUFULEVBQUgsQ0FBbUIsQ0FDbEIsTUFBTyxJQUFJRCxLQUFKLENBQVNuQyxRQUFULENBQVAsQ0FDQSxDQUNELENBTEssQ0FBUCxDQU1BLEMsb0NBOVRtQm1DLEk7Ozs7Ozs7NFZDakNUUixHLDRWQU9aLEdBQU13RCxTQUFVLENBQ2ZDLElBQUssQ0FBQzlHLEVBQUcsSUFBSixDQUFVK0csRUFBRyxJQUFiLENBQW1CQyxJQUFLLElBQXhCLENBRFUsQ0FFZkMsSUFBSyxDQUFDakgsRUFBRyxJQUFKLENBQVUrRyxFQUFHLElBQWIsQ0FBbUJDLElBQUssSUFBeEIsQ0FBOEJFLElBQUssS0FBbkMsQ0FGVSxDQUdmQyxHQUFJLENBQUNuSCxFQUFHLElBQUosQ0FBVStHLEVBQUcsR0FBYixDQUFrQkMsSUFBSyxJQUF2QixDQUE2QkUsSUFBSyxLQUFsQyxDQUhXLENBSWZFLEtBQU0sQ0FBQ3BILEVBQUcsR0FBSixDQUFTK0csRUFBRyxHQUFaLENBQWlCQyxJQUFLLEtBQXRCLENBQTZCRSxJQUFLLElBQWxDLENBSlMsQ0FLZkcsR0FBSSxDQUFDckgsRUFBRyxHQUFKLENBQVMrRyxFQUFHLEdBQVosQ0FBaUJDLElBQUssS0FBdEIsQ0FBNkJFLElBQUssSUFBbEMsQ0FMVyxDQU1mSSxJQUFLLENBQUN0SCxFQUFHLEdBQUosQ0FBUytHLEVBQUcsR0FBWixDQUFpQkcsSUFBSyxNQUF0QixDQU5VLENBQWhCLENBZU1LLGNBQWdCLFFBQWhCQSxjQUFnQixDQUFDQyxVQUFELENBQWFDLFFBQWIsQ0FBMEIsQ0FDL0MsR0FBR0QsWUFBY0MsUUFBakIsQ0FBMkIsQ0FDMUIsTUFBTyxxQkFDTiw0QkFBNEJ4SixJQUE1QixDQUFpQ3dKLFFBQWpDLEVBQTZDLENBQUNDLFdBQVlELFFBQWIsQ0FBN0MsQ0FBc0UsQ0FBQ0EsaUJBQUQsQ0FEaEUsQ0FFTkQsYUFBZSxJQUFmLENBQXNCLEVBQXRCLENBQTJCQSxVQUZyQixDQUFQLENBR0EsQ0FDRCxNQUFPQSxXQUFQLENBQ0EsQ0F0QkQsQyxHQTJCcUJHLE0sNEpBOEJnRyxJQUFoR0MsaUJBQWdHLDJEQUE3RSxJQUE2RSxDQUF2RUMsZ0JBQXVFLDJEQUFwRCxJQUFvRCxDQUE5Q2hDLElBQThDLDJEQUF2QyxPQUF1QyxDQUE5QmlDLGFBQThCLGNBQWZDLGFBQWUsY0FDL0dDLE1BQVFKLGdCQUR1RyxDQUVuSCxHQUFJLE1BQU9BLGlCQUFQLEdBQTRCLFFBQWhDLENBQXlDLENBQ3hDLEdBQUdmLFFBQVFlLGlCQUFpQmxKLFdBQWpCLEVBQVIsQ0FBSCxDQUE0QyxDQUMzQyxHQUNDdUosUUFBU3BCLFFBQVFlLGlCQUFpQmxKLFdBQWpCLEVBQVIsQ0FEVixDQUVDd0osY0FBZ0IsUUFBaEJBLGNBQWdCLENBQUNDLEdBQUQsQ0FBUyxDQUN4QixHQUFHLG9CQUFvQmxLLElBQXBCLENBQXlCNEgsSUFBekIsQ0FBSCxDQUFtQyxDQUNsQyxHQUFNMUYsR0FBSSxFQUFWLENBQ0FBLEVBQUUwRixJQUFGLEVBQVVvQyxPQUFPRSxHQUFQLENBQVYsQ0FDQSxNQUFPaEksRUFBUCxDQUNBLENBQ0QsTUFBTyxDQUNONkcsSUFBS2lCLE9BQU9qQixHQUFQLENBQWFILFFBQVFvQixPQUFPakIsR0FBZixFQUFvQm1CLEdBQXBCLENBQWIsQ0FBd0NGLE9BQU9FLEdBQVAsQ0FEdkMsQ0FFTkMsTUFBT0gsT0FBT0UsR0FBUCxDQUZELENBR05qQixJQUFLZSxPQUFPZixHQUFQLENBQWFMLFFBQVFvQixPQUFPZixHQUFmLEVBQW9CaUIsR0FBcEIsQ0FBYixDQUF3Q0YsT0FBT0UsR0FBUCxDQUh2QyxDQUFQLENBS0EsQ0FiRixDQWNBSCxNQUFRLENBQUNLLE1BQU9ILGNBQWMsR0FBZCxDQUFSLENBQTRCSSxPQUFRSixjQUFjLEdBQWQsQ0FBcEMsQ0FBUixDQUNBLENBaEJELElBZ0JPLENBQ04sS0FBTSxJQUFJL0osTUFBSixDQUFVLCtEQUFWLENBQU4sQ0FDQSxDQUNELENBQ0Q2SixNQUFRVCxjQUFjUyxLQUFkLENBQXFCRixhQUFyQixDQUFSLENBRUEsR0FBTVMsT0FBUWhCLGNBQWNNLGdCQUFkLENBQWdDRSxhQUFoQyxDQUFkLENBRUExRSxJQUFJdkQsQ0FBSixDQUFNLG1CQUFOLENBQTJCLENBQUNrSSxXQUFELENBQVFPLFdBQVIsQ0FBM0IsRUFDQSxNQUFPLENBQUNQLFdBQUQsQ0FBUU8sV0FBUixDQUFQLENBQ0EsQyxrREFVbUJDLFcsQ0FBYUMsUyxDQUFXQyxRLENBQXVCLElBQWJDLE9BQWEsMkRBQUosRUFBSSxDQUM5REMsUUFBVSxFQURvRCxDQUVsRSxHQUFHSixZQUFZSyxjQUFaLEdBQTZCdkosTUFBN0IsQ0FBc0MsQ0FBekMsQ0FBNEMsQ0FDM0NzSixRQUFVLE9BQVYsQ0FDQSxDQUZELElBRU8sSUFBR0osWUFBWU0sY0FBWixHQUE2QnhKLE1BQTdCLENBQXNDLENBQXpDLENBQTRDLENBQ2xEc0osUUFBVSxPQUFWLENBQ0EsQ0FDRHZGLElBQUl2RCxDQUFKLENBQU0sb0JBQU4sQ0FBNEIwSSxXQUE1QixDQUF5Q0ksT0FBekMsRUFDQSxHQUFJQSxRQUFRdEosTUFBUixDQUFpQixDQUFyQixDQUF3QixDQUN2QixHQUFJeUosT0FBUUwsUUFBWixDQUNBLEdBQUksQ0FBQ0ssS0FBRCxFQUFVQSxNQUFNSCxPQUFOLENBQWMzSixXQUFkLEtBQWdDMkosT0FBOUMsQ0FBdUQsQ0FDdERHLE1BQVFDLFNBQVNDLGFBQVQsQ0FBdUJMLE9BQXZCLENBQVIsQ0FDQUcsTUFBTUcsUUFBTixDQUFpQixJQUFqQixDQUNBLENBQ0QsR0FBSVQsU0FBSixDQUFlLENBQ2QsR0FBSUMsVUFBWUEsV0FBYUssS0FBN0IsQ0FBb0MsQ0FDbkNOLFVBQVVVLFlBQVYsQ0FBdUJKLEtBQXZCLENBQThCTCxRQUE5QixFQUNBLENBRkQsSUFFTyxJQUFJLENBQUNBLFFBQUwsQ0FBZSxDQUNyQkQsVUFBVVcsV0FBVixDQUFzQkwsS0FBdEIsRUFDQSxDQUNELENBQ0RBLE1BQU1NLFNBQU4sQ0FBa0JiLFdBQWxCLENBQ0FPLE1BQU1PLFFBQU4sQ0FBaUIsS0FBakIsQ0FDQVAsTUFBTUosTUFBTixDQUFlQSxNQUFmLENBQ0EsTUFBT0ksTUFBUCxDQUNBLENBQ0QsTUFBT0wsU0FBUCxDQUNBLEMseUNBY2lCLENBQ2pCLE1BQU9hLFdBQVVDLFlBQVYsQ0FBdUJDLGdCQUF2QixHQUNMaEksSUFESyxDQUNBLGlCQUFXLENBQ2hCLEdBQU10QixHQUFJLEVBQVYsQ0FDQXVKLFFBQVEvSixPQUFSLENBQWdCLGdCQUFVLENBQ3pCLEdBQUksQ0FBQ1EsRUFBRXJDLE9BQU82TCxJQUFULENBQUwsQ0FBcUIsQ0FDcEJ4SixFQUFFckMsT0FBTzZMLElBQVQsRUFBaUIsRUFBakIsQ0FDQSxDQUNEeEosRUFBRXJDLE9BQU82TCxJQUFULEVBQWUzSSxJQUFmLENBQW9CbEQsTUFBcEIsRUFDQSxDQUxELEVBTUF1RixJQUFJdkQsQ0FBSixDQUFNLGVBQU4sQ0FBdUJLLENBQXZCLEVBQ0EsTUFBT0EsRUFBUCxDQUNBLENBWEssRUFZTHlFLEtBWkssQ0FZQ3ZCLElBQUlsRCxDQUFKLENBQU0sZUFBTixDQVpELENBQVAsQ0FhQSxDLHNDQXZIdUIsQ0FDdkIsTUFBTyxDQUNOeUosS0FBTSxNQURBLENBRU5DLFlBQWEsYUFGUCxDQUFQLENBSUEsQyxxQ0FWbUJsQyxLOzs7Ozs7O2tnQ0NtQnJCLEdBQU1tQyxPQUFRLENBQ2IsS0FBUSxzQkFBTSxPQUFOLEVBREssQ0FFYixLQUFRLHNCQUFNLE9BQU4sRUFGSyxDQUdiLE9BQVUscUJBQVEsQ0FDakIsR0FBRyxDQUFDbE0sSUFBSixDQUFVLENBQ1QsS0FBTSxJQUFJTyxNQUFKLENBQVUsK0NBQVYsQ0FBTixDQUNBLENBQ0QsbUJBQW9CUCxLQUFLZ0csR0FBekIsQ0FDQSxDQVJZLENBU2IsWUFBZSw0Q0FBbUJMLEtBQUtLLEdBQXhCLGtCQVRGLENBVWIsUUFBVyx3Q0FBbUJMLEtBQUtLLEdBQXhCLGNBVkUsQ0FXYixPQUFVLHVDQUFtQkwsS0FBS0ssR0FBeEIsYUFYRyxDQUFkLENBbUJNbUcsUUFBVSxDQUNmLG1CQURlLENBRWYsbUJBRmUsQ0FHZix1QkFIZSxDQUlmLGlDQUplLENBS2YseUJBTGUsQ0FNZix1QkFOZSxDQW5CaEIsQyxHQWlDTUMsUSxZQUNMLGlCQUFZQyxJQUFaLENBQWtCLDJEQUNqQkEsS0FBS3RLLE9BQUwsQ0FBYSxhQUFPLENBQUMsTUFBSzJFLEdBQUwsRUFBWUEsR0FBWixDQUFpQixDQUF0QyxFQUNBLEMsMkVBQ1EvRCxLLENBQU8sQ0FDZixHQUFHLENBQUNBLEtBQUQsRUFBVSxNQUFPQSxNQUFQLEdBQWlCLFFBQTNCLEVBQXVDLEtBQUtBLEtBQUwsSUFBZ0JBLE1BQU03QixXQUFOLEVBQTFELENBQStFLENBQzlFLEtBQU0sSUFBSVAsTUFBSixpREFBMEQsd0JBQWUsbUJBQVksSUFBWixDQUFmLENBQTFELENBQU4sQ0FDQSxDQUNELE1BQU8sS0FBUCxDQUNBLEMsc0NBQ01vQyxLLENBQU8sQ0FDYixHQUFHLEtBQUsySixRQUFMLENBQWMzSixLQUFkLENBQUgsQ0FBeUIsQ0FDeEIsTUFBT3VKLE9BQU12SixNQUFNN0IsV0FBTixHQUFvQnlMLE9BQXBCLENBQTRCLE1BQTVCLENBQW9DLEVBQXBDLENBQU4sR0FBbUQsaUJBQU0sS0FBTixFQUExRCxDQUNBLENBQ0QsQyx3Q0FDTzVKLEssQ0FBTyxDQUNkLEdBQUcsS0FBSzJKLFFBQUwsQ0FBYzNKLEtBQWQsQ0FBSCxDQUF5QixDQUN4QixNQUFPd0osU0FBUXhKLE1BQU03QixXQUFOLEdBQW9CeUwsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBb0MsRUFBcEMsQ0FBUixDQUFQLENBQ0EsQ0FDRCxDLHVCQU1LLEdBQU1DLHFCQUFRLEdBQUlKLFFBQUosQ0FBWSxDQUNoQyxZQURnQyxDQUNsQixjQURrQixDQUNGLGNBREUsQ0FFaEMsWUFGZ0MsQ0FFbEIsY0FGa0IsQ0FFRixjQUZFLENBR2hDLGNBSGdDLENBR2hCLGdCQUhnQixDQUFaLENBQWQsQ0FTQSxHQUFNekcsbUJBQU8sR0FBSXlHLFFBQUosQ0FBWSxDQUMvQixlQUQrQixDQUNkLGlCQURjLENBQ0ssaUJBREwsQ0FFL0IsbUJBRitCLENBRVYscUJBRlUsQ0FFYSxxQkFGYixDQUcvQixrQkFIK0IsQ0FHWCxvQkFIVyxDQUFaLENBQWIsQ0FTQSxHQUFNdEYsdUJBQVMsR0FBSXNGLFFBQUosQ0FBWSxDQUFDLE1BQUQsQ0FBUyxNQUFULENBQVosQ0FBZixDQUtBLEdBQU03RSx1QkFBUyxHQUFJNkUsUUFBSixDQUFZLDZEQUFaLENBQWYsQzs7Ozs7O0FDdklQLGdEOzs7Ozs7QUNBQSxzQjs7Ozs7O0FDQUEsY0FBYyxzQjs7Ozs7O0FDQWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWtFLCtCQUErQjtBQUNqRyxFOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBLEU7Ozs7Ozs7a2hCQ0RZN0csUSxnRUFDQUUsRyx1TUFHQUQsTSwrVkFXWixHQUFNbEMsUUFBUyxRQUFUQSxPQUFTLENBQUNpRSxNQUFELENBQVN6QixNQUFULENBQWtELElBQWpDdEQsT0FBaUMsMkRBQXhCLElBQXdCLENBQWxCaUssTUFBa0IsMkRBQVQsSUFBUyxDQUMxRDdLLE9BQVMsQ0FDZGtFLGFBRGMsQ0FFZHRELGFBRmMsQ0FHZGlLLGFBSGMsQ0FEaUQsQ0FPaEUsR0FBR2xGLE9BQU96QixNQUFQLHFCQUFILENBQThCLENBQzdCLE1BQU8sbUJBQVFyRCxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSwyQ0FBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU9nRixVQUFTakMsTUFBVCxjQUE2QmlFLE9BQU9DLEVBQXBDLEtBQTBDRCxPQUFPdkIsR0FBakQsQ0FBd0RwRSxNQUF4RCxFQUNMaUMsSUFESyxDQUNBLFVBQU0sQ0FDWCxtQkFBWWpDLE1BQVosRUFBb0JHLE9BQXBCLENBQTRCLGNBQVEsQ0FDbkN3RixPQUFPbUYsSUFBUCxFQUFlOUssT0FBTzhLLElBQVAsQ0FBZixDQUNBLENBRkQsRUFHQSxNQUFPLGdCQUFLakosR0FBTCxDQUFTOEQsT0FBTzVCLElBQWhCLENBQVAsQ0FDQSxDQU5LLEVBT0w5QixJQVBLLENBT0EscUJBQVMsQ0FBQzhCLFNBQUQsQ0FBTzRCLGFBQVAsQ0FBVCxFQVBBLEVBUUxQLEtBUkssQ0FRQ3ZCLElBQUlsRCxDQUFKLENBQU0sZUFBTixDQVJELENBQVAsQ0FTQSxDQW5CRCxDLEdBeUJxQm9LLE8sWUFPcEIsZ0JBQVk3SSxRQUFaLENBQXNCLDJDQUNyQixHQUFJbEMsUUFBU2tDLFFBQWIsQ0FDQSxHQUFHQSxVQUFZQSxTQUFTb0MsR0FBckIsRUFBNEIsTUFBT3BDLFVBQVNvQyxHQUFoQixHQUF3QixVQUF2RCxDQUFrRSxDQUNqRXRFLE9BQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWtDLENBQUNGLElBQUtsQyxTQUFTcUMsSUFBVCxFQUFOLENBQXVCcUIsR0FBSTFELFNBQVM4SSxHQUFULEdBQWVDLE1BQWYsR0FBd0IxRyxJQUF4QixFQUEzQixDQUFsQyxDQUFULENBQ0EsQ0FLRCxLQUFLSCxHQUFMLENBQVdwRSxPQUFPb0UsR0FBbEIsQ0FLQSxLQUFLZSxJQUFMLENBQVluRixPQUFPbUYsSUFBbkIsQ0FLQSxLQUFLUyxFQUFMLENBQVU1RixPQUFPNEYsRUFBakIsQ0FLQSxLQUFLN0IsSUFBTCxDQUFZL0QsT0FBTytELElBQW5CLENBU0EsS0FBS0csTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBS2dILEtBQUwsQ0FBYWxMLE9BQU9rTCxLQUFwQixDQUtBLEtBQUsvRCxRQUFMLENBQWdCbkgsT0FBT21ILFFBQXZCLENBS0EsS0FBSzBELE1BQUwsQ0FBYzdLLE9BQU82SyxNQUFyQixDQU1BLEtBQUtsRyxVQUFMLENBQWtCLEVBQWxCLENBQ0EsQyxzRUF1Q00vRCxNLENBQVEsQ0FDZCxNQUFPYyxRQUFPLElBQVAscUJBQXVCZCxNQUF2QixDQUErQitDLFNBQVNqQixFQUFULEVBQS9CLENBQVAsQ0FDQSxDLHNDQU9NOUIsTSxDQUFRLENBQ2QsTUFBT2MsUUFBTyxJQUFQLHFCQUF1QmQsTUFBdkIsQ0FBK0IrQyxTQUFTakIsRUFBVCxFQUEvQixDQUFQLENBQ0EsQyx1Q0FNUSxDQUNSLE1BQU9oQixRQUFPLElBQVAscUJBQVAsQ0FDQSxDLDhCQVVFd0MsTSxDQUFRMUIsUSxDQUFVLGdCQUNwQixHQUFHb0IsT0FBTytCLE1BQVAsQ0FBYytFLFFBQWQsQ0FBdUJ4RyxNQUF2QixDQUFILENBQW1DLENBRWxDLEdBQUksQ0FBQyxLQUFLUyxVQUFMLENBQWdCVCxNQUFoQixDQUFMLENBQThCLENBQzdCLEtBQUtTLFVBQUwsQ0FBZ0JULE1BQWhCLEVBQTBCLEVBQTFCLENBQ0EsQ0FDRCxLQUFLUyxVQUFMLENBQWdCVCxNQUFoQixFQUF3QjFDLElBQXhCLENBQTZCZ0IsUUFBN0IsRUFFQSxHQUFJLENBQUMsS0FBSzJJLFNBQVYsQ0FBcUIsQ0FNcEIsS0FBS0EsU0FBTCxDQUFpQixrQkFBWSxDQUM1QixHQUFNQyxTQUFVbEosU0FBU29DLEdBQVQsRUFBaEIsQ0FDQSxHQUFJOEcsVUFBWSxJQUFaLEVBQW9CQSxVQUFZLE1BQUtsSCxNQUF6QyxDQUFpRCxDQUNoRCxNQUFLQSxNQUFMLENBQWNrSCxPQUFkLENBQ0EsQ0FBQyxNQUFLekcsVUFBTCxDQUFnQnlHLE9BQWhCLEdBQTRCLEVBQTdCLEVBQWlDakwsT0FBakMsQ0FBeUMsWUFBTSxDQUM5Q2tMLFVBQ0EsQ0FGRCxFQUdBLENBQ0QsQ0FSRCxDQVNBMUgsU0FBU3ZCLEVBQVQsY0FBeUIsS0FBS3dELEVBQTlCLEtBQW9DLEtBQUt4QixHQUF6QyxXQUF1RCxPQUF2RCxDQUFnRSxLQUFLK0csU0FBTCxDQUFlekwsSUFBZixDQUFvQixJQUFwQixDQUFoRSxFQUNBLENBQ0QsQ0FDRCxDLHNEQU1jOEMsUSxDQUFVLGlCQUN4Qiw4REFBK0JyQyxPQUEvQixDQUF1QyxlQUFTLENBQy9DLE9BQUtpQyxFQUFMLENBQVFyQixLQUFSLENBQWV5QixRQUFmLEVBQ0EsQ0FGRCxFQUdBLEMsZ0NBV0cwQixNLENBQVExQixRLENBQVUsaUJBQ3JCLEdBQUcsQ0FBQzBCLE1BQUosQ0FBWSxDQUNYLEtBQUtTLFVBQUwsQ0FBa0IsRUFBbEIsQ0FDQSxDQUZELElBRU8sSUFBRyxLQUFLQSxVQUFMLENBQWdCVCxNQUFoQixDQUFILENBQTRCLENBQ2xDLEdBQUcxQixRQUFILENBQWEsQ0FDWixHQUFNOEksS0FBTSxLQUFLM0csVUFBTCxDQUFnQlQsTUFBaEIsRUFBd0JxSCxTQUF4QixDQUFrQyxtQkFBTUYsTUFBTzdJLFFBQWIsRUFBbEMsQ0FBWixDQUNBLEdBQUk4SSxLQUFPLENBQVgsQ0FBYyxDQUNiLEtBQUszRyxVQUFMLENBQWdCNkcsTUFBaEIsQ0FBdUJGLEdBQXZCLENBQTRCLENBQTVCLEVBQ0EsQ0FDRCxDQUxELElBS08sQ0FDTixLQUFLM0csVUFBTCxDQUFnQlQsTUFBaEIsRUFBMEIsRUFBMUIsQ0FDQSxDQUNELENBQ0QsR0FBRyxDQUFDLDhEQUErQnVILElBQS9CLENBQW9DLHNCQUFTLFFBQUs5RyxVQUFMLENBQWdCNUQsS0FBaEIsR0FBMEIsT0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF1QmpCLE1BQXZCLENBQWdDLENBQW5FLEVBQXBDLENBQUosQ0FBOEcsQ0FDN0c2RCxTQUFTcEIsR0FBVCxjQUEwQixLQUFLcUQsRUFBL0IsS0FBcUMsS0FBS3hCLEdBQTFDLFdBQXdELE9BQXhELEVBQ0EsQ0FDRCxDLHdEQU1lNUIsUSxDQUFVLGlCQUN6QixHQUFHLENBQUNBLFFBQUosQ0FBYyxDQUNiLEtBQUtELEdBQUwsR0FDQSxDQUZELElBRU8sQ0FDTiw4REFBK0JwQyxPQUEvQixDQUF1QyxlQUFTLENBQy9DLE9BQUtvQyxHQUFMLENBQVN4QixLQUFULENBQWdCeUIsUUFBaEIsRUFDQSxDQUZELEVBR0EsQ0FDRCxDLHFDQTNJZSxDQUNmLE1BQU8sTUFBSzBCLE1BQUwscUJBQVAsQ0FDQSxDLHNDQU1nQixDQUNoQixNQUFPLE1BQUtBLE1BQUwsc0JBQVAsQ0FDQSxDLHNDQU1nQixDQUNoQixNQUFPLE1BQUtBLE1BQUwsc0JBQVAsQ0FDQSxDLHNDQU1nQixDQUNoQixNQUFPLE1BQUtBLE1BQUwsc0JBQVAsQ0FDQSxDLG9DQTBIV3dILE8sQ0FBUzNILEksQ0FBc0IsSUFBaEJuRSxRQUFnQiwyREFBTixJQUFNLENBQzFDLEdBQUcsQ0FBQyxnQkFBTXhCLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsZ0RBQVYsQ0FBZixDQUFQLENBQ0EsQ0FFRCxHQUFNZ04sZ0JBQWlCLENBQ3RCeEcsS0FBTSxnQkFBTS9HLElBQU4sQ0FBV2dHLEdBREssQ0FFdEJMLEtBQU1BLEtBQUtLLEdBRlcsQ0FHdEJGLHlCQUhzQixDQUl0QmlELFNBQVV4RCxTQUFTakIsRUFBVCxFQUpZLENBS3RCd0ksTUFBT3RMLE9BTGUsQ0FBdkIsQ0FRQSxNQUFPK0QsVUFBU25DLElBQVQsY0FBMkJrSyxRQUFRdEgsR0FBbkMsQ0FBMEN1SCxjQUExQyxFQUNMMUosSUFESyxDQUNBLG1CQUFhLENBQ2xCLEdBQU0ySixVQUFXQyxVQUFVdEgsSUFBVixFQUFqQixDQUNBLE1BQU8sSUFBSXdHLE9BQUosQ0FBVyxxQkFBYyxDQUFDM0csSUFBS3dILFFBQU4sQ0FBZ0JoRyxHQUFJOEYsUUFBUXRILEdBQTVCLENBQWQsQ0FBZ0R1SCxjQUFoRCxDQUFYLENBQVAsQ0FDQSxDQUpLLEVBS0x2RyxLQUxLLENBS0N2QixJQUFJbEQsQ0FBSixDQUFNLGFBQU4sQ0FMRCxDQUFQLENBTUEsQyxzQ0EzT21Cb0ssTTs7Ozs7O0FDekNyQjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBLGE7Ozs7OztBQ0hBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSx1Q0FBdUM7QUFDdkMsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsc0JBQXNCO0FBQ2hGLGdGQUFnRixzQkFBc0I7QUFDdEcsRTs7Ozs7O0FDUkEsbUM7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUMsRTs7Ozs7O0FDaEJELDZCQUE2QjtBQUM3QixxQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxDQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFOzs7Ozs7OzRhQ1BZcEgsUSxxSUFFQUUsRyxvbEJBTVosR0FBSWlJLGNBQWUsS0FBbkIsQyxHQU1xQkMsSyxZQU1wQixjQUFZN0osUUFBWixDQUFzQix5Q0FDckIsR0FBTWxDLFFBQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWYsQ0FLQSxLQUFLRixHQUFMLENBQVdsQyxTQUFTcUMsSUFBVCxFQUFYLENBS0EsS0FBS0EsSUFBTCxDQUFZdkUsT0FBT3VFLElBQW5CLENBS0EsS0FBS0wsTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBSzhILFFBQUwsQ0FBZ0JoTSxPQUFPZ00sUUFBdkIsQ0FLQSxLQUFLQyxTQUFMLENBQWlCLGFBQWF4TixJQUFiLENBQWtCLEtBQUsyRixHQUF2QixDQUFqQixDQUVBLEMsb0VBT014RSxPLENBQVMsZ0JBQ2YsR0FBRyxDQUFDLGdCQUFNeEIsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSxxREFBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU8sZ0JBQUt1TixNQUFMLENBQWUsZ0JBQU05TixJQUFOLENBQVdnRyxHQUExQixLQUFpQyxLQUFLQSxHQUF0QyxFQUNMbkMsSUFESyxDQUNBLGNBQVEsQ0FDYixNQUFPOEIsTUFBSzRCLE1BQUwsQ0FBWSxPQUFaLENBQW9CLElBQXBCLENBQTBCL0YsT0FBMUIsQ0FBUCxDQUNBLENBSEssRUFJTHFDLElBSkssQ0FJQSxjQUFRLENBQ2IsTUFBTyxDQUFDOEIsS0FBTTVDLEtBQUs0QyxJQUFaLENBQWtCNEIsT0FBUXhFLEtBQUswRSxPQUFMLENBQWEsQ0FBYixDQUExQixDQUFQLENBQ0EsQ0FOSyxFQU9MVCxLQVBLLENBT0N2QixJQUFJbEQsQ0FBSixDQUFNLGFBQU4sQ0FQRCxDQUFQLENBUUEsQyx5Q0FPUyxDQUNULE1BQU9nRCxVQUFTN0IsSUFBVCxjQUEyQixLQUFLc0MsR0FBaEMsa0JBQVAsQ0FDQSxDLG9DQVNZQSxHLENBQUtHLEksQ0FBTSxDQUN2QixHQUFHLENBQUN1SCxZQUFKLENBQWtCLENBQ2pCQSxhQUFlLElBQWYsQ0FDQSxHQUFNeEwsR0FBSSxDQUFDNEQsMkJBQUQsQ0FBb0I4SCxTQUFVckksU0FBU2pCLEVBQVQsRUFBOUIsQ0FBVixDQUNBLEdBQUc2QixJQUFILENBQVMsQ0FDUixxQkFBY2pFLENBQWQsQ0FBaUIsQ0FBQ2lFLFNBQUQsQ0FBakIsRUFDQSxDQUNELEdBQUkwRCxVQUFXLGlCQUFPa0UsUUFBUCxDQUFnQkMsaUJBQWhCLENBQWtDdkssR0FBbEMsQ0FBc0N1QyxHQUF0QyxDQUFmLENBQ0EsTUFBT1QsVUFBU2pDLE1BQVQsVUFBeUIwQyxHQUF6QixDQUFnQzlELENBQWhDLEVBRUwyQixJQUZLLENBRUEsVUFBTSxDQUNYLEdBQU1vSyxnQkFBaUIsQ0FDdEJuSSwyQkFEc0IsQ0FFdEJvSSxJQUFLLENBQ0oxQixNQUFPLE9BREgsQ0FFSjJCLE9BQVEsaUJBQU9DLFdBRlgsQ0FGaUIsQ0FNdEJDLFVBQVcxQyxVQUFVMEMsU0FOQyxDQUF2QixDQVFBLEdBQUd4RSxRQUFILENBQWEsQ0FDWixNQUFPdEUsVUFBU2pDLE1BQVQsY0FBNkIwQyxHQUE3QixLQUFvQzZELFFBQXBDLENBQWdEb0UsY0FBaEQsQ0FBUCxDQUNBLENBQ0QsTUFBTzFJLFVBQVNuQyxJQUFULGNBQTJCNEMsR0FBM0IsQ0FBa0NpSSxjQUFsQyxDQUFQLENBQ0EsQ0FmSyxFQWlCTHBLLElBakJLLENBaUJBLG1CQUFhLENBQ2xCLEdBQUksQ0FBQ2dHLFFBQUwsQ0FBZSxDQUNkQSxTQUFXeUUsVUFBVW5JLElBQVYsRUFBWCxDQUNBLGlCQUFPNEgsUUFBUCxDQUFnQkMsaUJBQWhCLENBQWtDN0ssR0FBbEMsQ0FBc0M2QyxHQUF0QyxDQUEyQzZELFFBQTNDLEVBQ0EsQ0FDRCxnQkFBTTNKLE1BQU4sQ0FBZTJKLFFBQWYsQ0FDQSxDQXZCSyxFQXlCTGhHLElBekJLLENBeUJBLFVBQU0sQ0FFWDBCLFNBQVNsQixZQUFULGNBQW1DMkIsR0FBbkMsS0FBMEM2RCxRQUExQyxZQUE2RDFHLEdBQTdELDJCQUVBb0MsU0FBU2xCLFlBQVQsVUFBK0IyQixHQUEvQixFQUFzQzFDLE1BQXRDLENBQTZDLENBQzVDd0MsK0JBRDRDLENBRTVDOEgsU0FBVXJJLFNBQVNqQixFQUFULEVBRmtDLENBQTdDLEVBSUEsQ0FqQ0ssRUFtQ0xULElBbkNLLENBbUNBLGlCQUFNOEosTUFBS2xLLEdBQUwsQ0FBU3VDLEdBQVQsQ0FBTixFQW5DQSxFQW9DTG5DLElBcENLLENBb0NBLGNBQVEsQ0FDYjZKLGFBQWUsS0FBZixDQUNBLE1BQU8xTixLQUFQLENBQ0EsQ0F2Q0ssRUF3Q0xnSCxLQXhDSyxDQXdDQyxXQUFLLENBQ1h2QixJQUFJcEQsQ0FBSixDQUFNQSxDQUFOLEVBQ0FxTCxhQUFlLEtBQWYsQ0FDQSxNQUFPLG1CQUFRakwsTUFBUixDQUFlSixDQUFmLENBQVAsQ0FDQSxDQTVDSyxDQUFQLENBNkNBLENBQ0QsTUFBT3NMLE1BQUtsSyxHQUFMLENBQVN1QyxHQUFULENBQVAsQ0FDQSxDLDhDQVFpQmhHLEksQ0FBTSxDQUV2QnVGLFNBQVNsQixZQUFULGNBQW1DckUsS0FBS2dHLEdBQXhDLEtBQStDLGdCQUFNOUYsTUFBckQsWUFBc0VtSSxNQUF0RSxHQUNBOUMsU0FBU2xCLFlBQVQsVUFBK0JyRSxLQUFLZ0csR0FBcEMsRUFBMkNxQyxNQUEzQyxHQUVBLEdBQUdySSxLQUFLNk4sU0FBUixDQUFtQixDQUNsQixNQUFPdEksVUFBU2hDLE1BQVQsY0FBNkJ2RCxLQUFLZ0csR0FBbEMsRUFDTG5DLElBREssQ0FDQSxpQkFBTTBCLFVBQVM5QixHQUFULGNBQTBCekQsS0FBS2dHLEdBQS9CLENBQU4sRUFEQSxFQUVMbkMsSUFGSyxDQUVBLGlCQUFXLENBQ2hCLEdBQU0wSyxXQUFZLEVBQWxCLENBQ0E5RyxRQUFRMUYsT0FBUixDQUFnQixnQkFBVSxDQUN6QndNLFVBQVVuTCxJQUFWLENBQWVtRSxPQUFPcEIsSUFBUCxFQUFmLEVBQ0EsQ0FGRCxFQUdBLE1BQU8sbUJBQVFpQixHQUFSLENBQVltSCxVQUFVOUgsR0FBVixDQUFjLHlCQUFZbEIsVUFBU2hDLE1BQVQsY0FBNkJ2RCxLQUFLZ0csR0FBbEMsS0FBeUN3SCxRQUF6QyxDQUFaLEVBQWQsQ0FBWixDQUFQLENBQ0EsQ0FSSyxFQVdMM0osSUFYSyxDQVdBLGlCQUFNMEIsVUFBU2hDLE1BQVQsVUFBeUJ2RCxLQUFLZ0csR0FBOUIsQ0FBTixFQVhBLEVBWUxuQyxJQVpLLENBWUEsVUFBTSxDQUNYLGlCQUFPa0ssUUFBUCxDQUFnQkMsaUJBQWhCLENBQWtDekssTUFBbEMsQ0FBeUN2RCxLQUFLZ0csR0FBOUMsRUFDQSxDQWRLLEVBZUxnQixLQWZLLENBZUN2QixJQUFJbEQsQ0FBSixDQUFNLDJCQUFOLENBZkQsQ0FBUCxDQWdCQSxDQUNELE1BQU9nRCxVQUFTcEMsR0FBVCxjQUEwQm5ELEtBQUtnRyxHQUEvQixLQUFzQyxnQkFBTTlGLE1BQTVDLHFDQUNMMkQsSUFESyxDQUNBLGlCQUFNMEIsVUFBUzlCLEdBQVQsY0FBMEJ6RCxLQUFLZ0csR0FBL0IsQ0FBTixFQURBLEVBRUxuQyxJQUZLLENBRUEsaUJBQVcsQ0FFaEIsR0FBTTJLLHFCQUFzQjFDLFFBQVEvSixPQUFSLENBQWdCLGdCQUFVLENBQ3JELE1BQVEsSUFBSTBNLE9BQUosOEJBQUQsQ0FBK0JwTyxJQUEvQixDQUFvQ0gsT0FBT2dHLEdBQVAsR0FBYUosTUFBakQsQ0FBUCxDQUNBLENBRjJCLENBQTVCLENBR0EsR0FBRyxDQUFDMEksbUJBQUosQ0FBeUIsQ0FDeEIsTUFBT2pKLFVBQVNqQyxNQUFULFVBQXlCdEQsS0FBS2dHLEdBQTlCLENBQXFDLENBQUNGLCtCQUFELENBQXJDLENBQVAsQ0FDQSxDQUNELE1BQU8sS0FBUCxDQUNBLENBWEssRUFZTGtCLEtBWkssQ0FZQ3ZCLElBQUlsRCxDQUFKLENBQU0saUJBQU4sQ0FaRCxDQUFQLENBYUEsQyxnQ0FRVXlELEcsQ0FBSyxDQUNmLE1BQU9ULFVBQVM5QixHQUFULFVBQXNCdUMsR0FBdEIsRUFDTm5DLElBRE0sQ0FDRCx5QkFBWUMsVUFBVyxHQUFJNkosS0FBSixDQUFTN0osUUFBVCxDQUFYLENBQWdDLElBQTVDLEVBREMsRUFFTmtELEtBRk0sQ0FFQXZCLElBQUlsRCxDQUFKLENBQU0sVUFBTixDQUZBLENBQVAsQ0FHQSxDLG9DQXRMbUJvTCxJOzs7Ozs7O3lEQ0FkLEdBQU1lLHFCQUFRLE9BQWQsQ0FNQSxHQUFNQyxxQkFBUSxPQUFkLENBTUEsR0FBTUMsaUNBQWMsYUFBcEIsQ0FNQSxHQUFNQyx1Q0FBaUIsZ0JBQXZCLEMsZ0JBRVEsQ0FBQ0gsV0FBRCxDQUFRQyxXQUFSLENBQWVDLHVCQUFmLENBQTRCQyw2QkFBNUIsQzs7Ozs7Ozs0YUNsQ0h0SixRLGdFQUNBRSxHLG9hQU9TcUosUSxZQU9wQixpQkFBWWhMLFFBQVosQ0FBc0I2QyxNQUF0QixDQUE4Qiw0Q0FDN0IsR0FBTS9FLFFBQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWYsQ0FLQSxLQUFLRixHQUFMLENBQVdsQyxTQUFTcUMsSUFBVCxFQUFYLENBS0EsS0FBS1EsTUFBTCxDQUFjQSxNQUFkLENBS0EsS0FBS29JLElBQUwsQ0FBWW5OLE9BQU9tTixJQUFuQixDQUtBLEtBQUtoSSxJQUFMLENBQVluRixPQUFPbUYsSUFBbkIsQ0FLQSxLQUFLZ0MsUUFBTCxDQUFnQm5ILE9BQU9tSCxRQUF2QixDQUNBLEMsbUVBT0lpRyxPLENBQVMsZ0JBQ2IsTUFBT3pKLFVBQVNqQyxNQUFULFdBQTBCLEtBQUtxRCxNQUEvQixjQUFrRCxLQUFLWCxHQUF2RCxDQUE4RCxDQUFDK0ksS0FBTUMsT0FBUCxDQUE5RCxFQUNMbkwsSUFESyxDQUNBLFVBQU0sQ0FDWCxNQUFLa0wsSUFBTCxDQUFZQyxPQUFaLENBQ0EsYUFDQSxDQUpLLEVBS0xoSSxLQUxLLENBS0N2QixJQUFJbEQsQ0FBSixDQUFNLGNBQU4sQ0FMRCxDQUFQLENBTUEsQyx1Q0FNUSxDQUNSLE1BQU9nRCxVQUFTaEMsTUFBVCxXQUEwQixLQUFLb0QsTUFBL0IsY0FBa0QsS0FBS1gsR0FBdkQsRUFDTGdCLEtBREssQ0FDQ3ZCLElBQUlsRCxDQUFKLENBQU0sZ0JBQU4sQ0FERCxDQUFQLENBRUEsQyxvQ0FRV29ELEksQ0FBTW9KLEksQ0FBTSxDQUN2QixHQUFHLENBQUMsZ0JBQU0vTyxJQUFWLENBQWdCLENBQ2YsTUFBTyxtQkFBUXlDLE1BQVIsQ0FBZSxHQUFJbEMsTUFBSixDQUFVLG1FQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsR0FBTXdDLE1BQU8sQ0FDWmdFLEtBQU0sZ0JBQU0vRyxJQUFOLENBQVdnRyxHQURMLENBRVorQyxTQUFVeEQsU0FBU2pCLEVBQVQsRUFGRSxDQUdaeUssU0FIWSxDQUFiLENBS0EsTUFBT3hKLFVBQVNuQyxJQUFULFlBQXlCdUMsS0FBS0ssR0FBOUIsYUFBOENqRCxJQUE5QyxFQUNMYyxJQURLLENBQ0Esd0JBQVcwQixVQUFTOUIsR0FBVCxZQUF3QmtDLEtBQUtLLEdBQTdCLGNBQTZDM0MsUUFBUThDLElBQVIsRUFBN0MsQ0FBWCxFQURBLEVBRUx0QyxJQUZLLENBRUEseUJBQVksSUFBSWlMLFFBQUosQ0FBWWhMLFFBQVosQ0FBc0I2QixLQUFLSyxHQUEzQixDQUFaLEVBRkEsRUFHTGdCLEtBSEssQ0FHQ3ZCLElBQUlsRCxDQUFKLENBQU0sY0FBTixDQUhELENBQVAsQ0FJQSxDLHVDQTlFbUJ1TSxPOzs7Ozs7OzZUQ0pBRyxZLENBTXBCLHFCQUFZbkwsUUFBWixDQUFzQixnREFDckIsR0FBTWxDLFFBQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWYsQ0FLQSxLQUFLRixHQUFMLENBQVdsQyxTQUFTcUMsSUFBVCxFQUFYLENBUUEsS0FBS1AsSUFBTCxDQUFZaEUsT0FBT2dFLElBQW5CLENBUUEsS0FBS0UsTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBS0MsT0FBTCxDQUFlbkUsT0FBT21FLE9BQXRCLENBQ0EsQyxpQkFsQ21Ca0osVzs7Ozs7OztvakJDSFQxSixRLGdFQUNBRSxHLCtEQUNBRCxNLGtXQU1TMEosTyxZQUtwQixnQkFBWXROLE1BQVosQ0FBb0IsMkNBQ25CNkQsSUFBSXZELENBQUosQ0FBTSxZQUFOLENBQW9CTixNQUFwQixFQUtBLEtBQUsrRSxNQUFMLENBQWMvRSxPQUFPK0UsTUFBckIsQ0FLQSxLQUFLWCxHQUFMLENBQVdwRSxPQUFPb0UsR0FBbEIsQ0FLQSxLQUFLZSxJQUFMLENBQVluRixPQUFPbUYsSUFBbkIsQ0FLQSxLQUFLa0IsSUFBTCxDQUFZckcsT0FBT3FHLElBQW5CLENBSUEsS0FBSy9ILE1BQUwsQ0FBYzBCLE9BQU8xQixNQUFyQixDQUlBLEtBQUt3SyxNQUFMLENBQWM5SSxPQUFPOEksTUFBckIsQ0FJQSxLQUFLRCxLQUFMLENBQWE3SSxPQUFPNkksS0FBcEIsQ0FLQSxLQUFLSSxTQUFMLENBQWlCLGdCQUFNaEwsTUFBTixDQUFhc1AscUJBQTlCLENBSUEsS0FBS0MsS0FBTCxDQUFhLHFCQUFjLENBQUN6RSxNQUFPLEtBQVIsQ0FBZVAsTUFBTyxLQUF0QixDQUFkLENBQTRDeEksT0FBT3dOLEtBQW5ELENBQWIsQ0FNQSxLQUFLN0ksVUFBTCxDQUFrQixFQUFsQixDQUtBLEtBQUs4SSxjQUFMLENBQXNCLElBQXRCLENBQ0EsQyw0RUFlU0YscUIsQ0FBdUIsZ0JBQ2hDLEdBQUcsQ0FBQyxnQkFBTW5QLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsK0RBQVYsQ0FBZixDQUFQLENBQ0EsQ0FFRCxLQUFLc0ssU0FBTCxDQUFpQnNFLHVCQUF5QixnQkFBTXRQLE1BQU4sQ0FBYXNQLHFCQUF2RCxDQUNBMUosSUFBSXZELENBQUosQ0FBTSxrQkFBTixDQUEwQixLQUFLMkksU0FBL0IsRUFDQSxNQUFPLGlCQUFNeUUsZUFBTixDQUFzQkMsTUFBdEIsQ0FBNkIsSUFBN0IsQ0FBbUMsS0FBSzFFLFNBQXhDLEVBQ0xoSCxJQURLLENBQ0EsWUFBTSxDQUFDLE1BQUt3TCxjQUFMLENBQXNCRyxFQUF0QixDQUEwQixDQURqQyxFQUVMM0wsSUFGSyxDQUVBLGlCQUFNMEIsVUFBU2pDLE1BQVQsWUFBMkIsTUFBS3FELE1BQWhDLGlCQUFzRCxNQUFLWCxHQUEzRCxLQUFrRSxnQkFBTTlGLE1BQXhFLENBQWtGLENBQzdGc0gsR0FBSSxnQkFBTXhILElBQU4sQ0FBV2dHLEdBRDhFLENBRTdGK0MsU0FBVXhELFNBQVNqQixFQUFULEVBRm1GLENBQWxGLENBQU4sRUFGQSxFQU1MVCxJQU5LLENBTUEsVUFBTSxDQUNYMEIsU0FBU2xCLFlBQVQsWUFBaUMsTUFBS3NDLE1BQXRDLGlCQUE0RCxNQUFLWCxHQUFqRSxLQUF3RSxnQkFBTTlGLE1BQTlFLEVBQXdGcUQsTUFBeEYsR0FDQSxHQUFJa00sWUFBYSxLQUFqQixDQUNBbEssU0FBU3ZCLEVBQVQsWUFBdUIsTUFBSzJDLE1BQTVCLGFBQThDLE1BQUtYLEdBQW5ELENBQTBELE9BQTFELENBQW1FLGtCQUFZLENBQzlFLEdBQU1wRSxRQUFTa0MsU0FBU29DLEdBQVQsRUFBZixDQUNBVCxJQUFJdkQsQ0FBSixDQUFNLGdCQUFOLENBQXdCTixNQUF4QixFQUNBLEdBQUdBLE1BQUgsQ0FBVyxDQUVWLE1BQUtxRyxJQUFMLENBQVlyRyxPQUFPcUcsSUFBbkIsQ0FFQSxHQUFNeUMsUUFBUzlJLE9BQU84SSxNQUF0QixDQUNNRCxNQUFRN0ksT0FBTzZJLEtBRHJCLENBRUEsR0FBRyxDQUFDQyxRQUFVRCxLQUFYLElBQXNCQyxTQUFXLE1BQUtBLE1BQWhCLEVBQTBCRCxRQUFVLE1BQUtDLE1BQS9ELENBQUgsQ0FBMkUsQ0FDMUUsTUFBS0EsTUFBTCxDQUFjOUksT0FBTzhJLE1BQXJCLENBQ0EsTUFBS0QsS0FBTCxDQUFhN0ksT0FBTzZJLEtBQXBCLENBQ0FoRixJQUFJckQsQ0FBSixDQUFNLE1BQUttRSxVQUFMLENBQWdCZixPQUFPc0IsTUFBUCxDQUFjNEksSUFBOUIsQ0FBTixFQUNBLENBQUMsTUFBS25KLFVBQUwsQ0FBZ0JmLE9BQU9zQixNQUFQLENBQWM0SSxJQUE5QixHQUF1QyxFQUF4QyxFQUE0QzNOLE9BQTVDLENBQW9ELG1CQUFNa0wsSUFBRyxNQUFLdkMsTUFBUixDQUFnQixNQUFLRCxLQUFyQixDQUFOLEVBQXBELEVBQ0EsQ0FFRCxHQUFNMkUsT0FBUXhOLE9BQU93TixLQUFyQixDQUNBLEdBQUdBLFFBQVVBLE1BQU16RSxLQUFOLEdBQWdCLE1BQUt5RSxLQUFMLENBQVd6RSxLQUEzQixFQUFvQ3lFLE1BQU1oRixLQUFOLEdBQWdCLE1BQUtnRixLQUFMLENBQVdoRixLQUF6RSxDQUFILENBQW9GLENBQ25GLE1BQUtnRixLQUFMLENBQWFBLEtBQWIsQ0FDQTNKLElBQUlyRCxDQUFKLENBQU0sTUFBS21FLFVBQUwsQ0FBZ0JmLE9BQU9zQixNQUFQLENBQWM2SSxJQUE5QixDQUFOLEVBQ0EsQ0FBQyxNQUFLcEosVUFBTCxDQUFnQmYsT0FBT3NCLE1BQVAsQ0FBYzZJLElBQTlCLEdBQXVDLEVBQXhDLEVBQTRDNU4sT0FBNUMsQ0FBb0QsbUJBQU1rTCxJQUFHLE1BQUttQyxLQUFSLENBQU4sRUFBcEQsRUFDQSxDQUNESyxXQUFhLElBQWIsQ0FDQSxDQXBCRCxJQW9CTyxJQUFHQSxVQUFILENBQWUsQ0FDckJoSyxJQUFJdEQsQ0FBSixDQUFNLGdCQUFOLFFBQ0EsTUFBS3lOLE1BQUwsQ0FBWSxJQUFaLEVBQ0EsQ0FDRCxDQTNCRCxFQTRCQSxDQXJDSyxFQXNDTDVJLEtBdENLLENBc0NDdkIsSUFBSWxELENBQUosQ0FBTSxrQkFBTixDQXRDRCxDQUFQLENBdUNBLEMsaURBTWEsQ0FDYixNQUFPLE1BQUtxTixNQUFMLENBQVksS0FBWixDQUFQLENBQ0EsQyxzQ0FRTUMsTSxDQUFRLENBRWR0SyxTQUFTbEIsWUFBVCxZQUFpQyxLQUFLc0MsTUFBdEMsaUJBQTRELEtBQUtYLEdBQWpFLEtBQXdFLGdCQUFNOUYsTUFBOUUsRUFBd0ZtSSxNQUF4RixHQUVBOUMsU0FBU3BCLEdBQVQsWUFBd0IsS0FBS3dDLE1BQTdCLGFBQStDLEtBQUtYLEdBQXBELENBQTJELE9BQTNELEVBRUEsQ0FBQzZKLE1BQUQsRUFBV3RLLFNBQVNoQyxNQUFULFlBQTJCLEtBQUtvRCxNQUFoQyxpQkFBc0QsS0FBS1gsR0FBM0QsS0FBa0UsZ0JBQU05RixNQUF4RSxDQUFYLENBRUEsTUFBTyxtQkFBUThDLE9BQVIsQ0FBZ0IsZ0JBQU1zTSxlQUFOLENBQXNCL0csS0FBdEIsQ0FBNEIsS0FBS3ZDLEdBQWpDLENBQXNDLEtBQUs5RixNQUEzQyxDQUFoQixDQUFQLENBQ0EsQyw4QkFPRXlDLEssQ0FBT3lCLFEsQ0FBVSxDQUNuQixHQUFHb0IsT0FBT3NCLE1BQVAsQ0FBY3dGLFFBQWQsQ0FBdUIzSixLQUF2QixDQUFILENBQWtDLENBQ2pDLEdBQUcsQ0FBQyxLQUFLNEQsVUFBTCxDQUFnQjVELEtBQWhCLENBQUosQ0FBNEIsQ0FDM0IsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF5QixFQUF6QixDQUNBLENBQ0QsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF1QlMsSUFBdkIsQ0FBNEJnQixRQUE1QixFQUNBLENBQ0QsQyxnQ0FPR3pCLEssQ0FBT3lCLFEsQ0FBVSxDQUNwQixHQUFHLENBQUN6QixLQUFKLENBQVcsQ0FDVixLQUFLNEQsVUFBTCxDQUFrQixFQUFsQixDQUNBLENBRkQsSUFFTyxJQUFHZixPQUFPc0IsTUFBUCxDQUFjd0YsUUFBZCxDQUF1QjNKLEtBQXZCLENBQUgsQ0FBa0MsQ0FDeEMsR0FBRyxDQUFDeUIsUUFBSixDQUFjLENBQ2IsS0FBS21DLFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF5QixFQUF6QixDQUNBLENBRkQsSUFFTyxDQUNOLEtBQUs0RCxVQUFMLENBQWdCNUQsS0FBaEIsRUFBeUIsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF1QmtFLE1BQXZCLENBQThCLG1CQUFNb0csTUFBTzdJLFFBQWIsRUFBOUIsQ0FBekIsQ0FDQSxDQUNELENBQ0QsQyxzQ0FNTXhDLE0sQ0FBUSxpQkFDZCxtQkFBWUEsTUFBWixFQUFvQkcsT0FBcEIsQ0FBNEIsYUFBTyxDQUFDLE9BQUsyRSxHQUFMLEVBQVk5RSxPQUFPOEUsR0FBUCxDQUFaLENBQXlCLENBQTdELEVBQ0EsQyxnQ0F2SFUsQ0FDVixNQUFPLE1BQUsySSxjQUFMLENBQXNCLEtBQUtBLGNBQUwsQ0FBb0JTLElBQTFDLENBQWlELElBQXhELENBQ0EsQyxzQ0FuRW1CWixNOzs7Ozs7O0FDVHJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0JBQWtCLEVBQUU7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxVQUFVO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDdEJBLDZFOzs7Ozs7QUNBQTtBQUNBLHFFQUFzRSxnQkFBZ0IsVUFBVSxHQUFHO0FBQ25HLENBQUMsRTs7Ozs7O0FDRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsYUFBYTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQ0FBb0M7QUFDNUUsNENBQTRDLG9DQUFvQztBQUNoRixLQUFLLDJCQUEyQixvQ0FBb0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQywyQkFBMkI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEU7Ozs7OztBQ3JFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IscUJBQXFCO0FBQ3BELCtCQUErQixTQUFTLEVBQUU7QUFDMUMsQ0FBQyxVQUFVOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLG1CQUFtQjtBQUN2RCwrQkFBK0IsYUFBYTtBQUM1QztBQUNBLEdBQUcsVUFBVTtBQUNiO0FBQ0EsRTs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7QUFDYjtBQUNBLEU7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxtREFBbUQsT0FBTyxFQUFFO0FBQzVELEU7Ozs7OztBQ1RBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdHQUF3RyxPQUFPO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUNaQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozt3ZENUTyxHQUFNYSx5QkFBVSxxQkFBYyxDQUNwQ0MsV0FBWSxDQUFDLEtBQUszUCxJQUFMLENBQVUsOEJBQWUwUCxPQUF6QixDQUFELEdBQ1YsQ0FBQyw4QkFBZUUsVUFBaEIsRUFBOEIsOEJBQWVDLE9BQWYsRUFBMEIsOEJBQWVELFVBRDdELENBRHdCLENBQWQsK0JBQWhCLENBS1AsR0FBTUMsbUJBQW9CLE9BQXBCLGNBQTRDLFVBQTVDLGVBQXdFLGlCQUFPOUIsV0FBckYsQ0FDSTVNLFFBQVUsRUFEZCxDQUVBLEdBQUd1TyxRQUFRRyxPQUFSLEdBQW9CLElBQXZCLENBQTZCLENBQzVCMU8sUUFBVSx3RkFBVixDQUNBLENBRkQsSUFFTyxJQUFJdU8sUUFBUUUsVUFBUixFQUFzQkYsUUFBUUUsVUFBUixDQUFxQkYsUUFBUUcsT0FBdkQsQ0FBZ0UsQ0FDdEUxTywrRUFBaUZ1TyxRQUFRRSxVQUF6RixNQUNBLENBRk0sSUFFQSxJQUFHLDJCQUFILENBQWdCLENBQ3RCek8sUUFBVSxvRUFBVixDQUNBLENBR0QsR0FBSTJPLE1BQU8sQ0FBSUQsT0FBSixLQUFlMU8sT0FBZixDQUFYLENBQ0EsR0FBRyxxQkFBcUJuQixJQUFyQixDQUEwQjBQLFFBQVFBLE9BQWxDLENBQUgsQ0FBK0MsQ0FDOUNJLEtBQU8sT0FDQUQsT0FEQSxRQUNjMU8sT0FEZCxpQkFFU3VPLFFBQVFDLFVBQVIsQ0FBcUIsTUFBckIsQ0FBOEIsS0FGdkMsZ0RBR0lELFFBQVFDLFVBQVIsQ0FBcUIsU0FBckIsQ0FBaUMsS0FIckMsRUFBUCxDQUtBLENBQ0QsbUJBQVFJLEdBQVIsZ0RBQWVELElBQWYsRzs7Ozs7Ozt5REMxQk8sR0FBTS9GLHFCQUFRLENBQ3BCLElBQU8sT0FEYSxDQUVwQixJQUFPLE9BRmEsQ0FHcEIsS0FBUSxRQUhZLENBSXBCLEtBQVEsUUFKWSxDQUtwQixLQUFRLFFBTFksQ0FBZCxDQW9CQSxHQUFNTyxxQkFBUSxDQUNwQixLQUFRLFFBRFksQ0FFcEIsS0FBUSxRQUZZLENBR3BCLEtBQVEsUUFIWSxDQUlwQixLQUFRLFFBSlksQ0FLcEIsUUFBVyxlQUxTLENBTXBCLFFBQVcsZUFOUyxDQU9wQixLQUFRLFFBUFksQ0FBZCxDOzs7Ozs7OytoQkMzQktuRixNLGlUQUtBRCxRLHFJQUVBRSxHLDhlQVFTNEssTSxZQWNwQixlQUFZMVEsR0FBWixDQUE2QixJQUFaMlEsSUFBWSwyREFBTixJQUFNLDBDQUU1QixnQkFBTXJOLElBQU4sQ0FBYXRELEdBQWIsQ0FFQSxnQkFBTUUsTUFBTixDQUFleVEsR0FBZixDQUtBLEtBQUsvSixVQUFMLENBQWtCLEVBQWxCLENBQ0EsQyx5RUFpRlFnSyxLLENBQU9DLFEsQ0FBVXJLLEksQ0FBTXNLLFUsQ0FBWSxnQkFDM0MsTUFBTyxpQkFBTXhOLElBQU4sQ0FBV3lOLFVBQVgsQ0FBc0JILEtBQXRCLENBQTZCQyxRQUE3QixFQUNMM00sSUFESyxDQUNBLGNBQVEsQ0FDYixHQUFHOE0sSUFBSCxDQUFTLENBQ1IsTUFBTyxPQUFLQyxLQUFMLENBQVdMLEtBQVgsQ0FBa0JDLFFBQWxCLENBQTRCckssTUFBUW9LLEtBQXBDLENBQTJDRSxVQUEzQyxDQUFQLENBQ0EsQ0FDRCxDQUxLLEVBTUx6SixLQU5LLENBTUN2QixJQUFJbEQsQ0FBSixDQUFNLGdCQUFOLENBTkQsQ0FBUCxDQU9BLEMsb0NBVUtnTyxLLENBQU9DLFEsQ0FBVXJLLEksQ0FBMEIsSUFBcEJzSyxXQUFvQiwyREFBUCxLQUFPLENBRTVDSSxFQUFJLGtCQUFRN04sT0FBUixFQUZ3QyxDQUdoRCxHQUFHLEtBQUs4TixPQUFMLEVBQWdCLEtBQUtBLE9BQUwsQ0FBYVAsS0FBYixHQUF1QkEsS0FBMUMsQ0FBaUQsQ0FDaERNLEVBQUksS0FBS0UsTUFBTCxFQUFKLENBQ0EsQ0FDRCxNQUFPRixHQUNMaE4sSUFESyxDQUNBLGlCQUFNLGlCQUFNWixJQUFOLENBQVcrTixnQkFBWCxDQUE0QixDQUFDVCxXQUFELENBQVFDLGlCQUFSLENBQWtCQyxxQkFBbEIsQ0FBNUIsQ0FBTixFQURBLEVBRUw1TSxJQUZLLENBRUEscUJBQVEsZ0JBQUtvTixJQUFMLENBQVVOLEtBQUszSyxHQUFmLENBQW9CRyxJQUFwQixDQUFSLEVBRkEsRUFHTHRDLElBSEssQ0FHQSxXQUFLLENBQ1YsZ0JBQU03RCxJQUFOLENBQWFrUixDQUFiLENBQ0EsTUFBT0EsRUFBUCxDQUNBLENBTkssRUFPTGxLLEtBUEssQ0FPQ3ZCLElBQUlsRCxDQUFKLENBQU0sYUFBTixDQVBELENBQVAsQ0FRQSxDLHVDQU1RLGlCQUNSLE1BQU8sdUJBQVksU0FBQ1MsT0FBRCxDQUFVUCxNQUFWLENBQXFCLENBRXZDLEdBQUcsaUJBQU9zTCxRQUFQLENBQWdCQyxpQkFBaEIsQ0FBa0N2SyxHQUFsQyxDQUFzQyxTQUF0QyxDQUFILENBQW9ELENBQ25ELGdCQUFNUixJQUFOLENBQVdrTyxNQUFYLENBQWtCLFNBQUM3TyxLQUFELENBQVFxTyxJQUFSLENBQWlCLENBQ2xDLEdBQUdBLE1BQVEsQ0FBQyxPQUFLRyxPQUFqQixDQUEwQixDQUN6QixlQUFLRyxJQUFMLENBQVVOLEtBQUszSyxHQUFmLEVBQW9CbkMsSUFBcEIsQ0FBeUIsV0FBSyxDQUM3QixnQkFBTTdELElBQU4sQ0FBYWtSLENBQWIsQ0FDQWxPLFFBQVFrTyxDQUFSLEVBQ0EsQ0FIRCxDQUdHek8sTUFISCxFQUlBLENBQ0QsQ0FQRCxFQVFBLENBVEQsSUFTTyxDQUNOQSxPQUFPLEdBQUlsQyxNQUFKLENBQVUsc0JBQVYsQ0FBUCxFQUNBLENBQ0QsQ0FkTSxDQUFQLENBZUEsQyw0Q0FPUzRGLEksQ0FBTSxDQUVmLEdBQUkwSyxHQUFJLGtCQUFRN04sT0FBUixFQUFSLENBQ0EsR0FBRyxLQUFLOE4sT0FBTCxHQUFpQixDQUFDLEtBQUtBLE9BQUwsQ0FBYWpELFNBQWQsRUFBMkIsS0FBS2lELE9BQUwsQ0FBYTNLLElBQWIsR0FBc0JBLElBQWxFLENBQUgsQ0FBNEUsQ0FDM0UwSyxFQUFJLEtBQUtFLE1BQUwsRUFBSixDQUNBLENBQ0QsTUFBT0YsR0FDTGhOLElBREssQ0FDQSxpQkFBTSxpQkFBTVosSUFBTixDQUFXbU8sZUFBWCxFQUFOLEVBREEsRUFFTHZOLElBRkssQ0FFQSxxQkFBUSxnQkFBS29OLElBQUwsQ0FBVU4sS0FBSzNLLEdBQWYsQ0FBb0JHLElBQXBCLENBQVIsRUFGQSxFQUdMdEMsSUFISyxDQUdBLFdBQUssQ0FDVixnQkFBTTdELElBQU4sQ0FBYWtSLENBQWIsQ0FDQSxNQUFPQSxFQUFQLENBQ0EsQ0FOSyxFQU9MbEssS0FQSyxDQU9DdkIsSUFBSWxELENBQUosQ0FBTSxpQkFBTixDQVBELENBQVAsQ0FRQSxDLHVDQU1RLGlCQUNSLE1BQU8sdUJBQVksU0FBQ1MsT0FBRCxDQUFVUCxNQUFWLENBQXFCLENBQ3ZDLEdBQUlvTyxHQUFJLGtCQUFRN04sT0FBUixFQUFSLENBQ0EsR0FBRyxPQUFLOE4sT0FBTCxFQUFnQixJQUFuQixDQUF5QixDQUN4QkQsRUFBSSxlQUFLUSxVQUFMLENBQWdCLE9BQUtQLE9BQXJCLENBQUosQ0FDQSxDQUNERCxFQUFFaE4sSUFBRixDQUFPLFVBQU0sQ0FDWixtQkFBWSxPQUFLMEMsVUFBakIsRUFBNkJ4RSxPQUE3QixDQUNDLHNCQUFTd0QsVUFBU3BCLEdBQVQsQ0FBYXFCLE9BQU9nSCxLQUFQLENBQWE5RSxNQUFiLENBQW9CL0UsS0FBcEIsRUFBMkIsZ0JBQU0zQyxJQUFqQyxDQUFiLENBQXFEMkMsS0FBckQsQ0FBVCxFQURELEVBR0EsZ0JBQU1NLElBQU4sQ0FBVzhOLE1BQVgsQ0FBa0IsVUFBTSxDQUN2QixnQkFBTS9RLElBQU4sQ0FBYSxJQUFiLENBQ0FnRCxVQUNBLENBSEQsRUFJQSxDQVJELEVBU0NnRSxLQVRELENBU08sV0FBSyxDQUNYdkIsSUFBSXBELENBQUosQ0FBTUEsQ0FBTixFQUNBSSxPQUFPSixDQUFQLEVBQ0EsQ0FaRCxFQWFBLENBbEJNLENBQVAsQ0FtQkEsQyxvQ0FTS2lQLE8sQ0FBUyxpQkFDZCxNQUFPL0wsVUFBUzdCLElBQVQsQ0FBYyxPQUFkLGlCQUNMRyxJQURLLENBQ0EsZUFBUyxDQUNkLE1BQU8sQ0FBQ3lOLE9BQUQsRUFBWXJLLEtBQVosRUFBcUIsT0FBSzZKLE9BQTFCLENBQW9DN0osTUFBTUosTUFBTixDQUFhLHFCQUFRN0csTUFBS2dHLEdBQUwsR0FBYSxPQUFLOEssT0FBTCxDQUFhOUssR0FBbEMsRUFBYixDQUFwQyxDQUEwRmlCLEtBQWpHLENBQ0EsQ0FISyxFQUlMRCxLQUpLLENBSUN2QixJQUFJbEQsQ0FBSixDQUFNLGFBQU4sQ0FKRCxDQUFQLENBS0EsQyxxQ0FNTyxDQUNQLE1BQU9nRCxVQUFTN0IsSUFBVCxDQUFjLE9BQWQsaUJBQ0xzRCxLQURLLENBQ0N2QixJQUFJbEQsQ0FBSixDQUFNLGFBQU4sQ0FERCxDQUFQLENBRUEsQyx5Q0FNUyxDQUNULEdBQUcsQ0FBQyxLQUFLdU8sT0FBVCxDQUFrQixDQUNqQixNQUFPLG1CQUFRck8sTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUscURBQVYsQ0FBZixDQUFQLENBQ0EsQ0FDRCxNQUFPZ0YsVUFBUzdCLElBQVQsY0FBMkIsS0FBS29OLE9BQUwsQ0FBYTlLLEdBQXhDLG1CQUNMZ0IsS0FESyxDQUNDdkIsSUFBSWxELENBQUosQ0FBTSxlQUFOLENBREQsQ0FBUCxDQUVBLEMsOEJBbUJFSSxLLENBQU95QixRLENBQVVGLGMsQ0FBZ0IsQ0FDbkMsR0FBTXBCLE1BQU8wQyxPQUFPZ0gsS0FBUCxDQUFhOUUsTUFBYixDQUFvQi9FLEtBQXBCLEVBQTJCLGdCQUFNM0MsSUFBakMsQ0FBYixDQUNBLEdBQUc4QyxJQUFILENBQVMsQ0FDUixHQUFNeU8sS0FBTS9MLE9BQU9nSCxLQUFQLENBQWE1RSxPQUFiLENBQXFCakYsS0FBckIsQ0FBWixDQUNNc0ssR0FBSyxRQUFMQSxHQUFLLFVBQVksQ0FDdEIsR0FBTS9LLEdBQUlxUCxJQUFNLEdBQUlBLElBQUosQ0FBUXpOLFFBQVIsQ0FBTixDQUEwQixJQUFwQyxDQUNBMkIsSUFBSXRELENBQUosYUFBa0JRLEtBQWxCLEtBQTRCVCxDQUE1QixFQUNBa0MsU0FBU2xDLENBQVQsRUFDQSxDQUxELENBTUFxRCxTQUFTdkIsRUFBVCxDQUFZbEIsSUFBWixDQUFrQkgsS0FBbEIsQ0FBeUJzSyxFQUF6QixDQUE2Qi9JLGNBQTdCLEVBQ0EsR0FBRyxDQUFDLEtBQUtxQyxVQUFMLENBQWdCNUQsS0FBaEIsQ0FBSixDQUE0QixDQUMzQixLQUFLNEQsVUFBTCxDQUFnQjVELEtBQWhCLEVBQXlCLEVBQXpCLENBQ0EsQ0FDRCxLQUFLNEQsVUFBTCxDQUFnQjVELEtBQWhCLEVBQXVCUyxJQUF2QixDQUE0QjZKLEVBQTVCLEVBQ0EsQ0FDRCxDLDhDQVNVOUcsSSxDQUFNRyxLLENBQTJCLElBQXBCc0MsV0FBb0IsMkRBQVAsS0FBTyxDQUMzQyxHQUFHLENBQUMsS0FBS2tJLE9BQVQsQ0FBa0IsQ0FDakIsTUFBTyxtQkFBUXJPLE1BQVIsQ0FBZSxHQUFJbEMsTUFBSixDQUFVLHNEQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsTUFBTyxnQkFBS3VOLE1BQUwsQ0FBWTNILElBQVosQ0FBa0JHLEtBQWxCLENBQXlCc0MsVUFBekIsQ0FBUCxDQUNBLEMsd0NBZVE1QyxHLENBQUssQ0FDYixNQUFPLGdCQUFLdkMsR0FBTCxDQUFTdUMsR0FBVCxDQUFQLENBQ0EsQyx3Q0FPUUEsRyxDQUFLLENBQ2IsTUFBTyxnQkFBS3ZDLEdBQUwsQ0FBU3VDLEdBQVQsQ0FBUCxDQUNBLEMsZ0NBL09VLENBQ1YsTUFBTyxpQkFBTS9DLElBQWIsQ0FDQSxDLGtDQU1ZLENBQ1osTUFBTyxpQkFBTXBELE1BQWIsQ0FDQSxDLG1DQU1hLENBQ2IsTUFBTyxpQkFBTUcsSUFBYixDQUNBLEMsMkNBeU1zQixDQUN0QixNQUFPLGlCQUFNc1AsZUFBTixDQUFzQmtDLE1BQTdCLENBQ0EsQyxxQ0E1UW9CLENBQ3BCLE1BQU8sQ0FBQ3RELElBQUssT0FBTixDQUFtQnVELE9BQVEsVUFBM0IsQ0FBUCxDQUNBLEMsaUNBTWtCLENBQ2xCLDZCQUNBLEMsa0NBTW1CLENBQ25CLE1BQU8sQ0FBQzlMLEtBQU1ILE9BQU9HLElBQWQsQ0FBb0I2RyxNQUFPaEgsT0FBT2dILEtBQWxDLENBQXlDMUYsT0FBUXRCLE9BQU9zQixNQUF4RCxDQUFnRVMsT0FBUS9CLE9BQU8rQixNQUEvRSxDQUFQLENBQ0EsQyxtQ0FNb0IsQ0FDcEIsd0JBQ0EsQyxpQ0FNa0IsQ0FDbEIsdUJBQ0EsQyxrQ0FNbUIsQ0FDbkIsTUFBTyxDQUFDb0Qsa0JBQUQsQ0FBUVAsa0JBQVIsQ0FBUCxDQUNBLEMscUNBeEVtQmlHLEssQ0ErVHJCcUIsT0FBT0MsT0FBUCxDQUFpQnRCLEtBQWpCLEM7Ozs7Ozs7OGdCQy9VWTlLLFEsZ0VBQ0FFLEcsaWFBR1osR0FBTW1NLGlCQUFrQixRQUFsQkEsZ0JBQWtCLFNBQVcsVUFDNUJDLFFBQVVDLFFBQVFyTCxHQUFSLENBQVksZ0JBQVUsSUFDOUJzTCxTQUQ4QixDQUNLQyxNQURMLENBQzlCRCxRQUQ4QixDQUNwQkUsVUFEb0IsQ0FDS0QsTUFETCxDQUNwQkMsVUFEb0IsQ0FDUkMsSUFEUSxDQUNLRixNQURMLENBQ1JFLElBRFEsQ0FDRnZTLEdBREUsQ0FDS3FTLE1BREwsQ0FDRnJTLEdBREUsQ0FFL0J3UyxJQUYrQixDQUV4QkQsTUFBUXZTLEdBRmdCLENBR3JDLEdBQUcsTUFBT3dTLEtBQVAsR0FBZ0IsUUFBbkIsQ0FBOEIsQ0FDN0IsTUFBT0EsTUFBSzFMLEdBQUwsQ0FBUyxvQkFBUSxDQUFDc0wsaUJBQUQsQ0FBV0UscUJBQVgsQ0FBdUJDLEtBQU1FLEdBQTdCLENBQVIsRUFBVCxDQUFQLENBQ0EsQ0FDRCxNQUFPLENBQUNKLE1BQUQsQ0FBUCxDQUNBLENBUGUsQ0FEa0IsQ0FTbEMsTUFBTyxVQUFHblEsTUFBSCw0Q0FBYWdRLE9BQWIsRUFBUCxDQUNBLENBVkQsQyxHQWdCcUJRLE8sWUFNcEIsZ0JBQVkxSyxHQUFaLENBQWlCLDBEQUtoQixLQUFLUSxXQUFMLENBQW1CLElBQW5CLENBTUEsS0FBS0Qsb0JBQUwsQ0FBNEIsSUFBNUIsQ0FLQSxLQUFLaUgscUJBQUwsQ0FBNkIsSUFBN0IsQ0FXQSxLQUFLbUQsbUJBQUwsQ0FBMkIsSUFBM0IsQ0FXQSxLQUFLQyxtQkFBTCxDQUEyQixJQUEzQixDQUdBLEtBQUtDLEtBQUwsR0FHQSxLQUFLelMsTUFBTCxDQUFZNEgsR0FBWixFQUdBcEMsU0FBUzlCLEdBQVQsQ0FBYSxPQUFiLEVBQXNCSSxJQUF0QixDQUEyQixrQkFBWSxDQUN0QyxHQUFHQyxRQUFILENBQWEsQ0FDWixNQUFLMk8sVUFBTCxDQUFrQjNPLFNBQVNvQyxHQUFULEVBQWxCLENBQ0FULElBQUl0RCxDQUFKLENBQU0sWUFBTixDQUFvQixNQUFLc1EsVUFBTCxDQUFnQi9RLE1BQWhCLENBQXlCLENBQXpCLENBQTZCLE1BQUsrUSxVQUFsQyxDQUErQyxNQUFuRSxFQUNBLENBQ0QsQ0FMRCxDQUtHLGtCQUFLaE4sS0FBSXZELENBQUosQ0FBTSxZQUFOLENBQW9CRyxDQUFwQixDQUFMLEVBTEgsRUFRQSxDLHNFQU9Nc0YsRyxDQUFLLGlCQUNYLG1CQUFZQSxLQUFPLEVBQW5CLEVBQXVCNUYsT0FBdkIsQ0FBK0IsYUFBTyxDQUFDLE9BQUsyRSxHQUFMLEVBQVlpQixJQUFJakIsR0FBSixDQUFaLENBQXNCLENBQTdELEVBQ0EsQyxxQ0FpRlEsQ0FDUixLQUFLM0csTUFBTCxDQUFZLENBQ1hvSSxZQUFhLGdCQUFNQSxXQUFOLEVBREYsQ0FFWHBILFNBQVUsT0FGQyxDQUFaLEVBSUEsQyxtQ0FoRllYLEssQ0FBTyxDQUNuQixnQkFBTVcsUUFBTixDQUFpQlgsS0FBakIsQ0FDQSxDLG1CQU1jLENBQ2QsTUFBTyxpQkFBTVcsUUFBYixDQUNBLEMscUNBTWMrUSxPLENBQVMsQ0FDdkJyTSxJQUFJdkQsQ0FBSixDQUFNLHVCQUFOLENBQStCNFAsT0FBL0IsRUFDQSxHQUFHQSxPQUFILENBQVksQ0FDWCxHQUFJLENBQUMsS0FBS1ksV0FBVixDQUF1QixDQUl0QixLQUFLQSxXQUFMLENBQW1CLEdBQUc3USxNQUFILENBQVVpUSxTQUFXLEVBQXJCLENBQW5CLENBQ0EsQ0FMRCxJQUtPLENBRU4sR0FBTWEsaUJBQWtCZixnQkFBZ0IsS0FBS2MsV0FBckIsQ0FBeEIsQ0FFTUUsWUFBY2hCLGdCQUFnQkUsT0FBaEIsQ0FGcEIsQ0FJQWMsWUFBWTdRLE9BQVosQ0FBb0IsbUJBQWEsQ0FDaEMsR0FBRyxDQUFDNFEsZ0JBQWdCdEYsSUFBaEIsQ0FBcUIsdUJBQ3ZCMkUsUUFBT0UsSUFBUCxHQUFnQlcsVUFBVVgsSUFBMUIsRUFDQUYsT0FBT0QsUUFBUCxHQUFvQmMsVUFBVWQsUUFEOUIsRUFFQUMsT0FBT0MsVUFBUCxHQUFzQlksVUFBVVosVUFIVCxFQUFyQixDQUFKLENBRytDLENBQzlDVSxnQkFBZ0J2UCxJQUFoQixDQUFxQnlQLFNBQXJCLEVBQ0EsQ0FDRCxDQVBELEVBU0EsS0FBS0gsV0FBTCxDQUFtQkMsZ0JBQWdCRyxNQUFoQixDQUF1QixTQUFDaEksUUFBRCxDQUFXZ0csT0FBWCxDQUF1QixJQUN6RGlCLFNBRHlELENBQzNCakIsT0FEMkIsQ0FDekRpQixRQUR5RCxDQUMvQ0UsVUFEK0MsQ0FDM0JuQixPQUQyQixDQUMvQ21CLFVBRCtDLENBQ25DQyxJQURtQyxDQUMzQnBCLE9BRDJCLENBQ25Db0IsSUFEbUMsQ0FFMURoRixHQUYwRCxDQUVwRHBDLFNBQVNxQyxTQUFULENBQW1CLGtCQUFLNEYsR0FBRWhCLFFBQUYsR0FBZUEsUUFBZixFQUEyQmdCLEVBQUVkLFVBQUYsR0FBaUJBLFVBQWpELEVBQW5CLENBRm9ELENBR2hFLEdBQUcvRSxLQUFPLENBQVYsQ0FBYSxDQUNacEMsU0FBU29DLEdBQVQsRUFBY2dGLElBQWQsQ0FBbUI5TyxJQUFuQixDQUF3QjhPLElBQXhCLEVBQ0EsQ0FGRCxJQUVPLENBQ05wSCxTQUFTMUgsSUFBVCxDQUFjLENBQUMyTyxpQkFBRCxDQUFXRSxxQkFBWCxDQUF1QkMsS0FBTSxDQUFDQSxJQUFELENBQTdCLENBQWQsRUFDQSxDQUNELE1BQU9wSCxTQUFQLENBQ0EsQ0FUa0IsQ0FTaEIsRUFUZ0IsQ0FBbkIsQ0FVQSxDQUNELENBQ0QsQyxtQkFNZ0IsQ0FDaEIsTUFBTyxNQUFLNEgsV0FBTCxFQUFvQixDQUMxQixDQUNDWCxTQUFVLE9BRFgsQ0FFQ0UsV0FBWSxZQUZiLENBR0NDLEtBQU0sQ0FDTCxtQ0FESyxDQUVMLGdEQUZLLENBR0wsaURBSEssQ0FIUCxDQUQwQixDQUEzQixDQVdBLEMsc0NBakptQkcsTTs7Ozs7Ozs2VENqQkFXLE8sQ0FNcEIsZ0JBQVlsUCxRQUFaLENBQXNCLDJDQUNyQixHQUFNbEMsUUFBUyxxQkFBYyxFQUFkLENBQWtCa0MsU0FBU29DLEdBQVQsRUFBbEIsQ0FBZixDQUtBLEtBQUtGLEdBQUwsQ0FBV2xDLFNBQVNxQyxJQUFULEVBQVgsQ0FLQSxLQUFLOE0sRUFBTCxDQUFVclIsT0FBT3FSLEVBQWpCLENBS0EsS0FBSzVFLFNBQUwsQ0FBaUJ6TSxPQUFPeU0sU0FBeEIsQ0FRQSxLQUFLdkksTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBS29JLEdBQUwsQ0FBV3RNLE9BQU9zTSxHQUFsQixDQUVBLEMsaUJBckNtQjhFLE07Ozs7Ozs7a2tCQ0hUdk4sRyxxSUFFQUYsUSwwY0FJWixHQUFNMk4sY0FBZSxDQUFDLGdCQUFNcEosVUFBTixDQUFpQmtDLElBQWxCLENBQXdCLGdCQUFNbEMsVUFBTixDQUFpQm1DLFdBQXpDLENBQXJCLENBRU1rSCxvQkFBc0IsUUFBdEJBLG9CQUFzQixDQUFDaEwsV0FBRCxDQUFjdUUsSUFBZCxDQUF1QixDQUNsRCxNQUFPdkUsYUFBWXVFLElBQVosRUFBa0IwRyxLQUFsQixFQUEyQmpMLFlBQVl1RSxJQUFaLEVBQWtCbEMsS0FBN0MsRUFBc0RyQyxZQUFZdUUsSUFBWixDQUE3RCxDQUNBLENBSkQsQ0FNTTJHLG1CQUFxQixRQUFyQkEsbUJBQXFCLENBQUNsTCxXQUFELENBQWN1RSxJQUFkLENBQW9CNEcsS0FBcEIsQ0FBMkJDLEtBQTNCLENBQXFDLENBQy9EcEwsWUFBWXVFLElBQVosRUFBb0IsQ0FBQzBHLE1BQU9HLEtBQVIsQ0FBcEIsQ0FDQSxNQUFPcEwsYUFBWW1MLEtBQVosQ0FBUCxDQUNBLENBVEQsQyxHQWNxQkUsTSxZQUtwQixlQUFZNVIsTUFBWixDQUFvQiwwQ0FLbkIsS0FBSytFLE1BQUwsQ0FBYy9FLE9BQU8rRSxNQUFyQixDQUtBLEtBQUtYLEdBQUwsQ0FBV3BFLE9BQU9vRSxHQUFsQixDQUtBLEtBQUtpQyxJQUFMLENBQVlyRyxPQUFPcUcsSUFBbkIsQ0FLQSxLQUFLbUgsS0FBTCxDQUFhLHFCQUFjLENBQUN6RSxNQUFPLEtBQVIsQ0FBZVAsTUFBTyxLQUF0QixDQUFkLENBQTRDeEksT0FBT3dOLEtBQW5ELENBQWIsQ0FLQSxLQUFLdkUsU0FBTCxDQUFpQmpKLE9BQU9pSixTQUFQLEVBQW9CLGdCQUFNaEwsTUFBTixDQUFhcUksb0JBQWxELENBS0EsS0FBSzRILElBQUwsQ0FBWSxJQUFaLENBS0EsS0FBS1IsZUFBTCxDQUF1QixFQUF2QixDQUtBLEtBQUt4SixNQUFMLGlCQUtBLEtBQUsyTixhQUFMLENBQXFCLEtBQXJCLENBS0EsS0FBS0MsT0FBTCxDQUFlLEVBQWYsQ0FHQSxLQUFLdkwsV0FBTCxDQUFtQnZHLE9BQU91RyxXQUExQixDQUNBLEMsMkZBMkNpQkEsVyxDQUFhLGdCQUM5QjFDLElBQUl2RCxDQUFKLENBQU0seUJBQU4sQ0FBaUNpRyxXQUFqQyxFQUNBLEtBQUtBLFdBQUwsQ0FBbUJBLFdBQW5CLENBQ0EsTUFBT3dELFdBQVVDLFlBQVYsQ0FBdUIrSCxZQUF2QixDQUFvQyxLQUFLeEwsV0FBekMsRUFDTHRFLElBREssQ0FDQSxlQUFTLENBQ2QsQ0FBQyxPQUFELENBQVUsT0FBVixFQUFtQjlCLE9BQW5CLENBQTJCLGNBQVEsQ0FDbEMsR0FBTTZSLGtCQUFtQixNQUFLekwsV0FBTCxDQUFpQjRELElBQWpCLENBQXpCLENBQ0EsR0FBRzZILGdCQUFILENBQXFCLENBQ3BCLEdBQUlBLGlCQUFpQi9KLFFBQWpCLEVBQTZCK0osaUJBQWlCOUosVUFBbEQsQ0FBOEQsQ0FDN0QsTUFBSzRKLE9BQUwsQ0FBYTNILElBQWIsRUFBcUJvSCxvQkFDcEJTLGdCQURvQixDQUVwQkEsaUJBQWlCOUosVUFBakIsQ0FBOEIsWUFBOUIsQ0FBNkMsVUFGekIsQ0FBckIsQ0FJQSxDQUNELENBQ0QsQ0FWRCxFQVdBLE1BQUsrSixLQUFMLENBQWFBLEtBQWIsQ0FDQSxDQWRLLENBQVAsQ0FlQSxDLG1DQWdGNkMsSUFBekNDLE1BQXlDLDJEQUFqQyxzQkFBWXBGLEtBQXFCLENBQWRxRixLQUFjLDJEQUFOLElBQU0sQ0FDN0N0TyxJQUFJdkQsQ0FBSixDQUFNLE1BQU4sQ0FBYzRSLEtBQWQsQ0FBcUJDLEtBQXJCLEVBQ0EsR0FBSXBKLE9BQVEsS0FBS3lFLEtBQUwsQ0FBV3pFLEtBQXZCLENBQThCUCxNQUFRLEtBQUtnRixLQUFMLENBQVdoRixLQUFqRCxDQUF3RDRKLGFBQXhELENBQ0EsT0FBUUYsS0FBUixFQUNDLElBQUssdUJBQVlwRixLQUFqQixDQUNDL0QsTUFBUW9KLEtBQVIsQ0FDQUMsT0FBUyxLQUFLSCxLQUFMLENBQVczSSxjQUFYLEVBQVQsQ0FDQSxNQUNELElBQUssdUJBQVl5RCxLQUFqQixDQUNBLElBQUssdUJBQVlFLGNBQWpCLENBQ0N6RSxNQUFRMkosS0FBUixDQUNBQyxPQUFTLEtBQUtILEtBQUwsQ0FBVzVJLGNBQVgsRUFBVCxDQUNBLE1BQ0QsSUFBSyx1QkFBWTJELFdBQWpCLENBQ0NqRSxNQUFRb0osS0FBUixDQUNBM0osTUFBUTJKLEtBQVIsQ0FDQUMsT0FBUyxLQUFLSCxLQUFMLENBQVdJLFNBQVgsRUFBVCxDQUNBLE1BZEYsQ0FpQkFELE9BQU9qUyxPQUFQLENBQWUsZUFBUyxDQUFDK1IsTUFBTUksT0FBTixDQUFnQixDQUFDSCxLQUFqQixDQUF3QixDQUFqRCxFQUVBLEtBQUszRSxLQUFMLENBQWEsQ0FBQ3pFLFdBQUQsQ0FBUVAsV0FBUixDQUFiLENBQ0E3RSxTQUFTcEMsR0FBVCxZQUF3QixLQUFLd0QsTUFBN0IsYUFBK0MsS0FBS1gsR0FBcEQsVUFBaUUsS0FBS29KLEtBQXRFLEVBQ0EsQyxzQ0FZTTBFLEssQ0FBTyxDQUNiLEtBQUtLLElBQUwsQ0FBVUwsS0FBVixDQUFpQixLQUFqQixFQUNBLEMscUNBTU8sQ0FDUCxHQUFHLENBQUMsQ0FBQyx1Q0FBa0JqVCxPQUFsQixDQUEwQixLQUFLaUYsTUFBL0IsQ0FBTCxDQUE2QyxDQUM1QyxLQUFLQSxNQUFMLG9CQUVBLEdBQU1oRCxpQkFBa0IsS0FBSzZELE1BQXZCLGlCQUE2QyxLQUFLWCxHQUF4RCxDQUNBVCxTQUFTcEIsR0FBVCxDQUFhckIsSUFBYixDQUFtQixhQUFuQixFQUNBeUMsU0FBU3BCLEdBQVQsQ0FBYXJCLElBQWIsQ0FBbUIsZUFBbkIsRUFFQXlDLFNBQVNsQixZQUFULFlBQWlDLEtBQUtzQyxNQUF0QyxhQUF3RCxLQUFLWCxHQUE3RCxFQUFvRXFDLE1BQXBFLEdBQ0E5QyxTQUFTbEIsWUFBVCxZQUFpQyxLQUFLc0MsTUFBdEMsaUJBQTRELEtBQUtYLEdBQWpFLEVBQXdFcUMsTUFBeEUsR0FFQTlDLFNBQVNoQyxNQUFULENBQWdCVCxJQUFoQixFQUVBeUMsU0FBU2hDLE1BQVQsWUFBMkIsS0FBS29ELE1BQWhDLGFBQWtELEtBQUtYLEdBQXZELEVBQ0EsS0FBSzZOLEtBQUwsQ0FBYSxJQUFiLENBRUEsS0FBSy9OLE1BQUwsbUJBQ0EsQ0FDRCxNQUFPLG1CQUFROUMsT0FBUixDQUFnQixLQUFLOEMsTUFBckIsQ0FBUCxDQUNBLEMsa0RBT1krRCxRLENBQVUsQ0FDdEIsTUFBTyxNQUFLdUssYUFBTCxDQUFtQixzQkFBWXpGLEtBQS9CLENBQXNDOUUsUUFBdEMsQ0FBUCxDQUNBLEMsMERBT2dCQSxRLENBQVUsQ0FDMUIsTUFBTyxNQUFLdUssYUFBTCxDQUFtQixzQkFBWTFGLEtBQS9CLENBQXNDN0UsUUFBdEMsQ0FBUCxDQUNBLEMsb0RBU2FrQyxJLENBQU1sQyxRLENBQVUsaUJBQzdCcEUsSUFBSXZELENBQUosQ0FBTSxxQkFBTixDQUE2QjZKLElBQTdCLENBQW1DbEMsUUFBbkMsRUFDQSxHQUFHLEtBQUtnSyxLQUFMLENBQVdJLFNBQVgsR0FBdUI1RyxJQUF2QixDQUE0QixzQkFBU3lHLE9BQU0vSCxJQUFOLEdBQWVBLElBQXhCLEVBQTVCLENBQUgsQ0FBOEQsQ0FDN0QsR0FBSXNJLE1BQU8sa0JBQVFyUixPQUFSLENBQWdCNkcsUUFBaEIsQ0FBWCxDQUNNeUssZUFBaUJwQixhQUFhclMsT0FBYixDQUFxQixLQUFLNlMsT0FBTCxDQUFhM0gsSUFBYixDQUFyQixDQUR2QixDQUVBLEdBQUcsQ0FBQ2xDLFFBQUQsRUFBYSxDQUFDLENBQUMsQ0FBQ3lLLGNBQW5CLENBQW1DLENBRWxDRCxLQUFPLGtCQUFRclIsT0FBUixDQUFnQmtRLGFBQWEsQ0FBQ29CLGVBQWlCLENBQWxCLEVBQXVCcEIsYUFBYXhSLE1BQWpELENBQWhCLENBQVAsQ0FDQSxDQUhELElBR08sSUFBRyxDQUFDLENBQUN3UixhQUFhclMsT0FBYixDQUFxQmdKLFFBQXJCLENBQUwsQ0FBcUMsQ0FFM0N3SyxLQUFPLGdCQUFNdkksT0FBTixHQUNMakksSUFESyxDQUNBLFdBQUssQ0FFVixHQUFNaUksU0FBVTVKLEVBQUs2SixJQUFMLFVBQWtCdEYsR0FBbEIsQ0FBc0IsNEJBQWU4TixhQUFZMUssUUFBM0IsRUFBdEIsQ0FBaEIsQ0FFQWlDLFFBQVEwSSxJQUFSLEdBRUEsR0FBSUMsWUFBYTVLLFFBQWpCLENBQ0EsR0FBR0EsVUFBWSxDQUFDaUMsUUFBUXVCLElBQVIsQ0FBYSx1QkFBVW5OLFVBQVcySixRQUFyQixFQUFiLENBQWhCLENBQTZELENBQzVELE1BQU8sbUJBQVFwSCxNQUFSLENBQWUsR0FBSWxDLE1BQUosWUFBcUJ3TCxJQUFyQixXQUFmLENBQVAsQ0FDQSxDQUNELEdBQUcsQ0FBQ2xDLFFBQUQsRUFBYWlDLFFBQVFwSyxNQUFSLENBQWlCLENBQWpDLENBQW9DLENBQ25DLEdBQUl3TCxLQUFNLE9BQUt3RyxPQUFMLENBQWEzSCxJQUFiLEVBQXFCRCxRQUFRcUIsU0FBUixDQUFrQixrQkFBS3VILEtBQU0sT0FBS2hCLE9BQUwsQ0FBYTNILElBQWIsQ0FBWCxFQUFsQixRQUFyQixDQUE4RSxDQUF4RixDQUNBMEksV0FBYTNJLFFBQVEsRUFBRW9CLEdBQUYsQ0FBUXBCLFFBQVFwSyxNQUF4QixDQUFiLENBQ0EsQ0FDRCxNQUFPK1MsV0FBUCxDQUNBLENBaEJLLENBQVAsQ0FpQkEsQ0FuQk0sSUFtQkEsQ0FDTkosS0FBTyxrQkFBUXJSLE9BQVIsQ0FBZ0I2RyxRQUFoQixDQUFQLENBQ0EsQ0FFRCxNQUFPd0ssTUFDTHhRLElBREssQ0FDQSxnQkFBVSxDQUNmLEdBQUcsT0FBSzZQLE9BQUwsQ0FBYTNILElBQWIsSUFBdUI3TCxNQUExQixDQUFrQyxDQUVqQyxPQUFLd1QsT0FBTCxDQUFhM0gsSUFBYixFQUFxQjdMLE1BQXJCLENBRUEsT0FBSzJULEtBQUwsQ0FBV0ksU0FBWCxHQUF1QmxTLE9BQXZCLENBQStCLHNCQUFTK1IsT0FBTWEsSUFBTixFQUFULEVBQS9CLEVBRUEsR0FBTXhNLGFBQWMscUJBQWMsRUFBZCxDQUFrQixPQUFLQSxXQUF2QixDQUFwQixDQUNJeU0sTUFBUSxDQUFDLFlBQUQsQ0FBZSxVQUFmLENBRFosQ0FFQSxHQUFHLENBQUMsQ0FBQzFCLGFBQWFyUyxPQUFiLENBQXFCWCxNQUFyQixDQUFMLENBQW1DLENBQ2xDMFUsTUFBUUEsTUFBTUMsT0FBTixFQUFSLENBQ0EsQ0FDRHhCLG1CQUFtQmxMLFlBQVk0RCxJQUFaLENBQW5CLENBQXNDNkksTUFBTSxDQUFOLENBQXRDLENBQWdEQSxNQUFNLENBQU4sQ0FBaEQsQ0FBMEQxVSxNQUExRCxFQUNBdUYsSUFBSXZELENBQUosQ0FBTSxxQkFBTixDQUE2QjZKLElBQTdCLENBQW1DNUQsV0FBbkMsRUFDQSxNQUFPLFFBQUsyTSxpQkFBTCxDQUF1QjNNLFdBQXZCLENBQVAsQ0FDQSxDQUNELENBakJLLEVBa0JMdEUsSUFsQkssQ0FrQkEsMEJBbEJBLENBQVAsQ0FtQkEsQ0FDRCxNQUFPLG1CQUFRcEIsTUFBUixDQUFlLEdBQUlsQyxNQUFKLHNDQUErQ3dMLElBQS9DLFVBQWYsQ0FBUCxDQUNBLEMsc0NBclJlNUQsVyxDQUFhLGlCQUUzQnZHLE9BQVN1RyxhQUFlLGdCQUFNdEksTUFBTixDQUFhc0ksV0FGVixDQUczQjRNLG1CQUFxQixnQkFBTTVNLFdBQU4sRUFITSxDQUk1QixDQUFDLE9BQUQsQ0FBVSxPQUFWLEVBQW1CcEcsT0FBbkIsQ0FBMkIsY0FBUSxDQUNsQyxHQUFHLENBQUMsQ0FBQyxPQUFLa0csSUFBTCxDQUFVcEgsT0FBVixDQUFrQm9ILElBQWxCLENBQUwsQ0FBOEIsQ0FDN0JyRyxPQUFPcUcsSUFBUCxFQUFlLEtBQWYsQ0FDQSxDQUZELElBRU8sSUFBRyxDQUFDckcsT0FBT3FHLElBQVAsQ0FBSixDQUFpQixDQUN2QnJHLE9BQU9xRyxJQUFQLEVBQWU4TSxtQkFBbUI5TSxJQUFuQixDQUFmLENBQ0EsQ0FDRCxHQUFHckcsT0FBT3FHLElBQVAsRUFBYTRCLFFBQWIsRUFBeUJqSSxPQUFPcUcsSUFBUCxFQUFhNkIsVUFBekMsQ0FBcUQsQ0FDcEQsT0FBSzRKLE9BQUwsQ0FBYXpMLElBQWIsRUFBcUJrTCxvQkFDcEJ2UixPQUFPcUcsSUFBUCxDQURvQixDQUVwQnJHLE9BQU9xRyxJQUFQLEVBQWE2QixVQUFiLENBQTBCLFlBQTFCLENBQXlDLFVBRnJCLENBQXJCLENBSUEsQ0FDRCxDQVpELEVBYUFyRSxJQUFJdkQsQ0FBSixDQUFNLHNCQUFOLENBQThCTixNQUE5QixFQUlBLEtBQUtvVCxZQUFMLENBQW9CcFQsTUFBcEIsQ0FDQSxDLG1CQU1pQixDQUNqQixNQUFPLE1BQUtvVCxZQUFaLENBQ0EsQyxnQ0ErQlVwSyxXLENBQWEsaUJBQ3ZCLEdBQUdBLFdBQUgsQ0FBZ0IsQ0FDZixHQUFHLEVBQUVBLHNCQUF1QnFLLFlBQXpCLENBQUgsQ0FBMEMsQ0FDekMsS0FBTSxJQUFJMVUsTUFBSixDQUFVLGlDQUFWLENBQU4sQ0FDQSxDQUVELEdBQU0yVSxjQUFlLEVBQXJCLENBQ0F0SyxZQUFZcUosU0FBWixHQUF3QmxTLE9BQXhCLENBQWdDLGVBQVMsQ0FFeEMrUixNQUFNSSxPQUFOLENBQWdCLENBQUMsT0FBSzlFLEtBQUwsQ0FBVzBFLE1BQU0vSCxJQUFqQixDQUFqQixDQUVBLEdBQUcsQ0FBQyxPQUFLMkgsT0FBTCxDQUFhSSxNQUFNL0gsSUFBbkIsQ0FBSixDQUE4QixDQUM3Qm1KLGFBQWFwQixNQUFNL0gsSUFBbkIsRUFBMkIrSCxNQUFNcUIsS0FBakMsQ0FDQSxDQUNELENBUEQsRUFTQSxHQUFHLG1CQUFZRCxZQUFaLEVBQTBCeFQsTUFBN0IsQ0FBcUMsQ0FDcEMsZ0JBQU1vSyxPQUFOLEdBQWdCakksSUFBaEIsQ0FBcUIsaUJBQVcsQ0FDL0IsbUJBQVlxUixZQUFaLEVBQTBCblQsT0FBMUIsQ0FBa0MsY0FBUSxDQUN6QyxHQUFHK0osUUFBV0MsSUFBWCxTQUFILENBQTJCLENBQzFCLEdBQU1xSixXQUFZdEosUUFBV0MsSUFBWCxVQUNoQmxGLE1BRGdCLENBQ1QsdUJBQVUzRyxRQUFPaVYsS0FBUCxDQUFhelQsTUFBYixFQUF1QnhCLE9BQU9pVixLQUFQLEdBQWlCRCxhQUFhbkosSUFBYixDQUFsRCxFQURTLENBQWxCLENBRUEsR0FBR3FKLFVBQVUxVCxNQUFWLEdBQXFCLENBQXJCLEVBQTBCLENBQUMsT0FBS2dTLE9BQUwsQ0FBYTNILElBQWIsQ0FBOUIsQ0FBa0QsQ0FDakQsT0FBSzJILE9BQUwsQ0FBYTNILElBQWIsRUFBcUJxSixVQUFVLENBQVYsRUFBYXZMLFFBQWxDLENBQ0EsQ0FDRCxDQUNELENBUkQsRUFTQSxDQVZELEVBV0EsQ0FFRCxLQUFLaUcsSUFBTCxDQUFZLGdCQUFNdUYsWUFBTixDQUFtQnpLLFdBQW5CLENBQWdDLEtBQUtDLFNBQXJDLENBQWdELEtBQUtpRixJQUFyRCxDQUEyRCxDQUEzRCxDQUFaLENBQ0EsS0FBS0EsSUFBTCxDQUFVd0YsWUFBVixDQUF5QixVQUFNLENBQzlCLE9BQUs3QixhQUFMLENBQXFCLElBQXJCLENBQ0EsQ0FGRCxDQUdBLEtBQUszTixNQUFMLHNCQUNBTCxJQUFJdkQsQ0FBSixDQUFNLGlCQUFOLENBQXlCLENBQUMwSSx1QkFBRCxDQUF6QixDQUF3QyxLQUFLa0YsSUFBN0MsRUFFQSxLQUFLUixlQUFMLENBQXFCdk4sT0FBckIsQ0FBNkIsK0JBQWtCc04sZ0JBQWVrRyxXQUFmLENBQTJCLE9BQUtDLE1BQWhDLENBQXdDNUssV0FBeEMsQ0FBbEIsRUFBN0IsRUFDQSxDQXJDRCxJQXFDTyxJQUFHLEtBQUtpSixLQUFMLEVBQWMsQ0FBQ2pKLFdBQWxCLENBQStCLENBRXJDLEtBQUtrRixJQUFMLENBQVVyRSxTQUFWLENBQXNCLElBQXRCLENBQ0EsS0FBS1osU0FBTCxDQUFlNEssV0FBZixDQUEyQixLQUFLM0YsSUFBaEMsRUFDQSxLQUFLQSxJQUFMLENBQVksSUFBWixDQUVBLEtBQUsrRCxLQUFMLENBQVdJLFNBQVgsR0FBdUJsUyxPQUF2QixDQUErQixzQkFBUytSLE9BQU1hLElBQU4sRUFBVCxFQUEvQixFQUVBLEtBQUtyRixlQUFMLENBQXFCdk4sT0FBckIsQ0FBNkIsK0JBQWtCc04sZ0JBQWU5RyxLQUFmLEVBQWxCLEVBQTdCLEVBQ0EsQ0FLRCxLQUFLaU4sTUFBTCxDQUFjNUssV0FBZCxDQUNBLEMsbUJBTVksQ0FDWixNQUFPLE1BQUs0SyxNQUFaLENBQ0EsQyxzQ0FxS1k3TyxNLENBQVFzQixJLENBQU00QyxTLENBQVcxQyxXLENBQWEsQ0FDbEQsR0FBRyxDQUFDLGdCQUFNbkksSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSxnREFBVixDQUFmLENBQVAsQ0FDQSxDQUNELEdBQU1tVixnQkFBaUIsQ0FDckIzTyxLQUFNLGdCQUFNL0csSUFBTixDQUFXZ0csR0FESSxDQUVyQjlGLE9BQVEsZ0JBQU1BLE1BRk8sQ0FHckIrSCxTQUhxQixDQUF2QixDQUtDME4sYUFBZSxHQUFJbkMsTUFBSixDQUFVLHFCQUFjLENBQUM3TSxhQUFELENBQVN3Qix1QkFBVCxDQUFzQjBDLG1CQUF0QixDQUFkLENBQWdENkssY0FBaEQsQ0FBVixDQUxoQixDQU1BalEsSUFBSXZELENBQUosQ0FBTSxhQUFOLENBQXFCLENBQUN5VCx5QkFBRCxDQUFyQixFQUNBLE1BQU9oSyxXQUFVQyxZQUFWLENBQXVCK0gsWUFBdkIsQ0FBb0NnQyxhQUFheE4sV0FBakQsRUFDTHRFLElBREssQ0FDQSxlQUFTLENBQ2Q4UixhQUFhOUIsS0FBYixDQUFxQkEsS0FBckIsQ0FDQSxDQUhLLEVBS0xoUSxJQUxLLENBS0EsaUJBQU0wQixVQUFTbkMsSUFBVCxZQUF5QnVELE1BQXpCLFlBQTJDK08sY0FBM0MsQ0FBTixFQUxBLEVBTUw3UixJQU5LLENBTUEsbUJBQWEsQ0FDbEI4UixhQUFhM1AsR0FBYixDQUFtQjRQLFVBQVV6UCxJQUFWLEVBQW5CLENBQ0EsR0FBSXdQLGFBQWFsQyxhQUFqQixDQUFnQyxDQUMvQixHQUFNb0MsWUFBYSxDQUNsQm5MLE9BQVFpTCxhQUFhN0YsSUFBYixDQUFrQmdHLFdBRFIsQ0FFbEJyTCxNQUFPa0wsYUFBYTdGLElBQWIsQ0FBa0JpRyxVQUZQLENBQW5CLENBSUFILFVBQVV0UyxNQUFWLENBQWlCdVMsVUFBakIsRUFDQSxDQU5ELElBTU8sQ0FDTkYsYUFBYTdGLElBQWIsQ0FBa0J3RixZQUFsQixDQUFpQyxVQUFXLENBQzNDLEdBQU1PLFlBQWEsQ0FDbEJuTCxPQUFRaUwsYUFBYTdGLElBQWIsQ0FBa0JnRyxXQURSLENBRWxCckwsTUFBT2tMLGFBQWE3RixJQUFiLENBQWtCaUcsVUFGUCxDQUFuQixDQUlBSCxVQUFVdFMsTUFBVixDQUFpQnVTLFVBQWpCLEVBQ0EsQ0FORCxDQU9BLENBQ0RHLE9BQU9DLGdCQUFQLENBQXdCLG1CQUF4QixDQUE4QyxVQUFNLENBQ25ELEdBQUlOLGFBQWE3RixJQUFiLEVBQXFCLElBQXpCLENBQStCLENBQzlCLEdBQU0rRixhQUFhLENBQ2xCbkwsT0FBUWlMLGFBQWE3RixJQUFiLENBQWtCZ0csV0FEUixDQUVsQnJMLE1BQU9rTCxhQUFhN0YsSUFBYixDQUFrQmlHLFVBRlAsQ0FBbkIsQ0FJQUgsVUFBVXRTLE1BQVYsQ0FBaUJ1UyxXQUFqQixFQUNBLENBQ0QsQ0FSRCxFQVVBLGdCQUFNalAsT0FBTixDQUFjc1AsTUFBZCxDQUFxQlAsYUFBYTNQLEdBQWxDLEVBQXlDMlAsWUFBekMsQ0FFQXBRLFNBQVNsQixZQUFULFlBQWlDc0MsTUFBakMsYUFBbURnUCxhQUFhM1AsR0FBaEUsRUFBdUV6QyxNQUF2RSxHQUVBZ0MsU0FBU2xCLFlBQVQsWUFBaUNzQyxNQUFqQyxpQkFBdURnUCxhQUFhM1AsR0FBcEUsRUFBMkV6QyxNQUEzRSxHQUVBLEdBQ0NULGlCQUFrQjZTLGFBQWFoUCxNQUEvQixpQkFBcURnUCxhQUFhM1AsR0FEbkUsQ0FFQ3VOLE1BQVEsUUFBUkEsTUFBUSxpQkFBWSxxQkFBYyxDQUFDclQsT0FBUTRELFNBQVNxQyxJQUFULEVBQVQsQ0FBZCxDQUF5Q3JDLFNBQVNvQyxHQUFULElBQWtCLEVBQTNELENBQVosRUFGVCxDQUdBWCxTQUFTdkIsRUFBVCxDQUFZbEIsSUFBWixDQUFrQixhQUFsQixDQUNDLGtCQUFZLENBQ1gsR0FBTXFULFlBQWE1QyxNQUFNelAsUUFBTixDQUFuQixDQUNBMkIsSUFBSXZELENBQUosQ0FBTSxrQkFBTixDQUEwQmlVLFVBQTFCLEVBQ0EsZ0JBQU03RyxlQUFOLENBQXNCOEcsS0FBdEIsQ0FBNEJULFlBQTVCLENBQTBDUSxVQUExQyxFQUNFdFMsSUFERixDQUNPLG1CQUFNOFIsY0FBYXJHLGVBQWIsQ0FBNkJsTSxJQUE3QixDQUFrQ29NLEVBQWxDLENBQU4sRUFEUCxFQUVBLENBTkYsQ0FPQy9KLElBQUlwRCxDQUFKLENBQU1mLElBQU4sQ0FBV21FLEdBQVgsQ0FQRCxFQVNBRixTQUFTdkIsRUFBVCxDQUFZbEIsSUFBWixDQUFrQixlQUFsQixDQUNDLGtCQUFZLENBQ1gsR0FBTXFULFlBQWE1QyxNQUFNelAsUUFBTixDQUFuQixDQUNBMkIsSUFBSXZELENBQUosQ0FBTSxxQkFBTixDQUE2QmlVLFVBQTdCLEVBQ0EsR0FBTUUsVUFBVyxnQkFBTS9HLGVBQU4sQ0FBc0IvRyxLQUF0QixDQUE0Qm9OLGFBQWEzUCxHQUF6QyxDQUE4Q21RLFdBQVdqVyxNQUF6RCxDQUFqQixDQUNBeVYsYUFBYXJHLGVBQWIsQ0FBK0JxRyxhQUFhckcsZUFBYixDQUE2QnpJLE1BQTdCLENBQW9DLG1CQUFNMkksTUFBTzZHLFFBQWIsRUFBcEMsQ0FBL0IsQ0FDQSxDQU5GLENBT0M1USxJQUFJcEQsQ0FBSixDQUFNZixJQUFOLENBQVdtRSxHQUFYLENBUEQsRUFTQUEsSUFBSXZELENBQUosQ0FBTSxjQUFOLENBQXNCLENBQUN5VCx5QkFBRCxDQUF0QixFQUNBLE1BQU9BLGFBQVAsQ0FDQSxDQTlESyxDQUFQLENBK0RBLEMscUNBMWFtQm5DLEs7Ozs7Ozs7dVpDaEJBOEMsYyxZQUtwQix3QkFBYyxrREFLYixLQUFLSixNQUFMLENBQWMsRUFBZCxDQUtBLEtBQUtyRyxNQUFMLENBQWMsRUFBZCxDQUNBLEMsbUZBT1MvSCxVLENBQVksQ0FDckIsR0FBSUMsY0FBZSxLQUFLOEgsTUFBTCxDQUFZL0gsV0FBVzlCLEdBQXZCLENBQW5CLENBQ0EsR0FBRytCLFlBQUgsQ0FBaUIsQ0FDaEJBLGFBQWF6RSxNQUFiLENBQW9Cd0UsVUFBcEIsRUFDQSxDQUZELElBRU8sQ0FDTixLQUFLK0gsTUFBTCxDQUFZL0gsV0FBVzlCLEdBQXZCLEVBQThCK0IsYUFBZSxxQkFBV0QsVUFBWCxDQUE3QyxDQUNBLENBQ0QsTUFBT0MsYUFBUCxDQUNBLEMsNENBT1NELFUsQ0FBWSxDQUVyQixNQUFPLE1BQUtvTyxNQUFMLENBQVlwTyxXQUFXOUIsR0FBdkIsQ0FBUCxDQUNBLEMsNkNBekNtQnNRLGE7Ozs7Ozs7bWlCQ0hUN1EsRyxzSUFFQUYsUSx1RUFFWix5Qiw2VEFFQSxHQUFNZ1Isc0JBQXVCLENBQUNBLHFCQUFzQixJQUF2QixDQUE3QixDQUNNQyxlQUFpQixRQUFqQkEsZUFBaUIsZ0JBQVksQ0FBQ0Msb0JBQXFCQyxPQUF0QixDQUErQkMsb0JBQXFCRCxPQUFwRCxDQUFaLEVBRHZCLENBT01FLGtDQUFvQyxjQVAxQyxDQWFNQywrQkFBZ0MsV0FidEMsQ0FtQk1DLCtCQUFpQyxXQW5CdkMsQ0F5Qk1DLDhCQUFnQyxVQXpCdEMsQ0ErQk1DLDRCQUE4QixRQS9CcEMsQ0FxQ01DLDRCQUE4QixRQXJDcEMsQ0EyQ01DLDJCQUE0QixPQTNDbEMsQ0ErQ01DLFFBQVUsUUFBVkEsUUFBVSxVQUFLQyxHQUFFQyxNQUFGLEVBQVksTUFBT0QsR0FBRUMsTUFBVCxHQUFvQixVQUFoQyxDQUE2Q0QsRUFBRUMsTUFBRixFQUE3QyxDQUEwREQsQ0FBL0QsRUEvQ2hCLEMsR0FvRHFCRSxlLFlBUXBCLHdCQUFZQyxPQUFaLENBQXFCQyxRQUFyQixDQUErQkMsWUFBL0IsQ0FBNkNDLE9BQTdDLENBQXNELGtFQUtyRCxLQUFLSCxPQUFMLENBQWVBLE9BQWYsQ0FLQSxLQUFLQyxRQUFMLENBQWdCQSxRQUFoQixDQUtBLEtBQUtDLFlBQUwsQ0FBb0JBLFlBQXBCLENBTUEsS0FBS0UsVUFBTCxhQUE4QixLQUFLSixPQUFuQyxLQUE4QyxLQUFLQyxRQUFuRCxLQUErRCxnQkFBTXRYLE1BQXJFLENBTUEsS0FBSzBYLFdBQUwsYUFBK0IsS0FBS0wsT0FBcEMsS0FBK0MsS0FBS0MsUUFBcEQsS0FBZ0UsS0FBS0MsWUFBckUsQ0FLQSxLQUFLSSxVQUFMLENBQWtCLEtBQWxCLENBTUEsS0FBSy9ILElBQUwsQ0FBWSxJQUFaLENBTUEsS0FBS2pGLFNBQUwsQ0FBaUIsSUFBakIsQ0FLQSxLQUFLMkUsRUFBTCxDQUFVLEdBQUlzSSxrQkFBSixDQUNULENBQ0NyRixXQUFZLGdCQUFNNVMsTUFBTixDQUFhNFMsVUFEMUIsQ0FEUyxDQUlULENBQ0NzRixTQUFVLENBQUN4QixvQkFBRCxDQURYLENBRUN5QixVQUFXeEIsZUFBZSxDQUFDa0IsT0FBaEIsQ0FGWixDQUpTLENBQVYsQ0FVQSxLQUFLbEksRUFBTCxDQUFReUksY0FBUixDQUF5QixXQUFLLENBQzdCLEdBQUksQ0FBQyxNQUFLSixVQUFOLEVBQW9CeFYsRUFBRTZWLFNBQTFCLENBQXFDLENBQ3BDelMsSUFBSXZELENBQUosQ0FBTSwrQkFBTixDQUF1Q0csRUFBRTZWLFNBQXpDLEVBQ0EzUyxTQUFTbkMsSUFBVCxDQUFpQixNQUFLdVUsVUFBdEIsUUFBd0NSLFFBQVE5VSxFQUFFNlYsU0FBVixDQUF4QyxFQUNBLENBQ0QsQ0FMRCxDQU1BLEtBQUsxSSxFQUFMLENBQVEySSwwQkFBUixDQUFxQyxVQUFNLENBQzFDMVMsSUFBSXZELENBQUosQ0FBTSwyQ0FBTixDQUFtRCxNQUFLc04sRUFBeEQsRUFDQSxHQUFNNEksb0JBQXFCLE1BQUs1SSxFQUFMLENBQVE0SSxrQkFBbkMsQ0FDQSxPQUFRQSxrQkFBUixFQUNDLElBQUtyQiw4QkFBTCxDQUVDLE1BQ0QsSUFBS0YsK0JBQUwsQ0FDQyxNQUFLd0IsYUFBTCxHQUNBLE1BQUtDLG9CQUFMLENBQTBCLEtBQTFCLEVBQ0EsTUFDRCxJQUFLeEIsK0JBQUwsQ0FDQyxNQUFLd0Isb0JBQUwsQ0FBMEIsS0FBMUIsRUFDQSxNQUNELElBQUsxQixrQ0FBTCxDQUNBLElBQUtLLDRCQUFMLENBQ0N4UixJQUFJcEQsQ0FBSixDQUFNLGtDQUFOLENBQTBDLDJCQUExQyxFQUNBLE1BQ0QsSUFBSzJVLDRCQUFMLENBQ0N2UixJQUFJdkQsQ0FBSixDQUFNLDRCQUFOLENBQW9DLHNCQUFwQyxFQUNBLE1BQUtxRyxLQUFMLEdBQ0EsTUFsQkYsQ0FvQkEsTUFBS3NQLFVBQUwsQ0FBa0IsTUFBS0EsVUFBTCxFQUFtQixNQUFLVSxXQUExQyxDQUNBLENBeEJELENBMEJBLEtBQUsvSSxFQUFMLENBQVFnSix5QkFBUixDQUFvQyxVQUFNLENBQ3pDL1MsSUFBSXZELENBQUosQ0FBTSwwQ0FBTixDQUFrRCxNQUFLc04sRUFBTCxDQUFRaUosaUJBQTFELEVBQ0EsQ0FGRCxDQVNBLEtBQUtDLE9BQUwsbUJBQ0EsQywwR0FPb0JDLE0sQ0FBUSxpQkFFM0I3VixLQUFVLEtBQUs4VSxXQUFmLE9BRjJCLENBRzNCalYsTUFBUSxhQUhtQixDQUk1QixHQUFHZ1csTUFBSCxDQUFXLENBRVZwVCxTQUFTdkIsRUFBVCxDQUFZbEIsSUFBWixDQUFrQkgsS0FBbEIsQ0FBeUIsY0FBUSxDQUNoQyxHQUFNdVYsV0FBWVUsS0FBSzFTLEdBQUwsRUFBbEIsQ0FDQVQsSUFBSXZELENBQUosQ0FBTSxnQ0FBTixDQUF3Q2dXLFNBQXhDLEVBQ0EsT0FBSzFJLEVBQUwsQ0FBUXFKLGVBQVIsQ0FBd0IsR0FBSUMsZ0JBQUosQ0FBb0JaLFNBQXBCLENBQXhCLEVBQ0EsQ0FKRCxFQUtBLENBUEQsSUFPTyxDQUNOM1MsU0FBU3BCLEdBQVQsQ0FBYXJCLElBQWIsQ0FBbUJILEtBQW5CLEVBQ0EsQ0FDRCxDLHFEQU1nQixDQUNoQixHQUFHLEtBQUtvRixZQUFMLEVBQXFCLEtBQUt3USxXQUE3QixDQUEwQyxDQUN6QyxLQUFLekksSUFBTCxDQUFZLGdCQUFNdUYsWUFBTixDQUFtQixLQUFLdE4sWUFBeEIsQ0FBc0MsS0FBSzhDLFNBQTNDLENBQXNELEtBQUtpRixJQUEzRCxDQUFaLENBQ0EsQ0FDRCxDLHNDQTBDTWlKLFcsQ0FBYSxpQkFDbkJ0VCxJQUFJdEQsQ0FBSixDQUFNLHVCQUFOLENBQStCLENBQUM0Vyx1QkFBRCxDQUFjMUosZUFBZ0IsSUFBOUIsQ0FBL0IsRUFDQSxLQUFLeEUsU0FBTCxDQUFpQmtPLFdBQWpCLENBQ0EsR0FBRyx1Q0FBZ0NqQixrQkFBa0JrQixTQUFsRCxDQUE2RCxTQUE3RCxDQUFILENBQTRFLENBQzNFLEtBQUt4SixFQUFMLENBQVF5SixPQUFSLENBQWtCLFdBQUssQ0FDdEJ4VCxJQUFJdkQsQ0FBSixDQUFNLHdCQUFOLENBQWdDRyxFQUFFdUUsT0FBRixDQUFVLENBQVYsQ0FBaEMsRUFDQSxPQUFLbUIsWUFBTCxDQUFvQjFGLEVBQUV1RSxPQUFGLENBQVUsQ0FBVixDQUFwQixDQUNBLENBSEQsQ0FJQSxDQUxELElBS08sQ0FDTixLQUFLNEksRUFBTCxDQUFRMEosV0FBUixDQUFzQixXQUFLLENBQzFCelQsSUFBSXZELENBQUosQ0FBTSw0QkFBTixDQUFvQ0csRUFBRXlFLE1BQXRDLEVBQ0EsT0FBS2lCLFlBQUwsQ0FBb0IxRixFQUFFeUUsTUFBdEIsQ0FDQSxDQUhELENBSUEsQ0FHRHZCLFNBQVN2QixFQUFULENBQWUsS0FBSzRULFdBQXBCLFFBQXVDLE9BQXZDLENBQWdELGNBQVEsQ0FDdkQsR0FBTXVCLFVBQVdQLEtBQUsxUyxHQUFMLEVBQWpCLENBQ0FULElBQUl2RCxDQUFKLENBQU0sT0FBTixDQUFlaVgsUUFBZixFQUNBLEdBQUdBLFVBQVksSUFBZixDQUFxQixDQUNwQjFULElBQUl2RCxDQUFKLENBQU0sd0JBQU4sQ0FBZ0NpWCxRQUFoQyxFQUNBLE9BQUszSixFQUFMLENBQVE0SixvQkFBUixDQUE2QkQsUUFBN0IsRUFDRXRWLElBREYsQ0FDTyxpQkFBTTRCLEtBQUl2RCxDQUFKLENBQU0sa0NBQU4sQ0FBMEMsT0FBS3NOLEVBQUwsQ0FBUTZKLGlCQUFsRCxDQUFOLEVBRFAsRUFFRXhWLElBRkYsQ0FFTyxVQUFNLENBQ1gsR0FBSSxVQUFVeEQsSUFBVixDQUFlLE9BQUttUCxFQUFMLENBQVE2SixpQkFBUixDQUEwQnBSLElBQXpDLENBQUosQ0FBb0QsQ0FDbkQsTUFBTyxRQUFLdUgsRUFBTCxDQUFROEosWUFBUixFQUFQLENBQ0EsQ0FDRCxNQUFPLG1CQUFRN1csTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUscUJBQVYsQ0FBZixDQUFQLENBQ0EsQ0FQRixFQVFFc0QsSUFSRixDQVFPLDRCQUFlLFFBQUswVixtQkFBTCxDQUF5QkMsV0FBekIsQ0FBZixFQVJQLEVBU0UzVixJQVRGLENBU08sNEJBQWUsUUFBSzJMLEVBQUwsQ0FBUWlLLG1CQUFSLENBQTRCRCxXQUE1QixDQUFmLEVBVFAsRUFVRTNWLElBVkYsQ0FVTyxVQUFNLENBQ1g0QixJQUFJdkQsQ0FBSixDQUFNLGlDQUFOLENBQXlDLE9BQUtzTixFQUFMLENBQVFrSyxnQkFBakQsRUFDQSxPQUFLcEIsb0JBQUwsQ0FBMEIsSUFBMUIsRUFDQSxDQWJGLEVBY0V6VSxJQWRGLENBY08saUJBQU0wQixVQUFTakMsTUFBVCxDQUFtQixPQUFLcVUsVUFBeEIsUUFBMENSLFFBQVEsT0FBSzNILEVBQUwsQ0FBUWtLLGdCQUFoQixDQUExQyxDQUFOLEVBZFAsRUFlRTFTLEtBZkYsQ0FlUXZCLElBQUlsRCxDQUFKLENBQU0saUNBQU4sQ0FmUixFQWdCQSxDQUNELENBdEJELEVBd0JBLE1BQU8sbUJBQVFTLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUCxDQUNBLEMsb0NBUUs4RCxNLENBQVEsaUJBQ2JyQixJQUFJdEQsQ0FBSixDQUFNLHNCQUFOLENBQThCLENBQUMyRSxhQUFELENBQVN1SSxlQUFnQixJQUF6QixDQUE5QixFQUNBLEdBQUlzSyxtQkFBSixDQUNBLE1BQU8sdUJBQVksU0FBQzNXLE9BQUQsQ0FBVVAsTUFBVixDQUFxQixDQUN2QyxPQUFLK00sRUFBTCxDQUFRb0ssbUJBQVIsQ0FBOEIsVUFBTSxDQUNuQ25VLElBQUl2RCxDQUFKLENBQU0sb0NBQU4sRUFFQSxHQUFHeVgsV0FBSCxDQUFnQixDQUNmRSxhQUFhRixXQUFiLEVBQ0FBLFlBQWMsSUFBZCxDQUNBLENBQ0RBLFlBQWNHLFdBQVcsVUFBTSxDQUM5QkgsWUFBYyxJQUFkLENBQ0EsT0FBS0ksVUFBTCxHQUNFbFcsSUFERixDQUNPLFVBQU0sQ0FDWGIsZ0JBQ0EsQ0FIRixFQUlFZ0UsS0FKRixDQUlRLFdBQUssQ0FDWHZCLElBQUl2RCxDQUFKLENBQU0sc0JBQU4sQ0FBOEJHLENBQTlCLEVBQ0FJLE9BQU9KLENBQVAsRUFDQSxDQVBGLEVBUUEsQ0FWYSxDQVVYLEVBVlcsQ0FBZCxDQVdBLENBbEJELENBbUJBa0QsU0FBU3ZCLEVBQVQsQ0FBZSxPQUFLNFQsV0FBcEIsUUFBdUMsT0FBdkMsQ0FBZ0QsY0FBUSxDQUN2RCxHQUFNb0MsV0FBWXBCLEtBQUsxUyxHQUFMLEVBQWxCLENBQ0EsR0FBRzhULFdBQWEsSUFBaEIsQ0FBc0IsQ0FDckJ2VSxJQUFJdkQsQ0FBSixDQUFNLCtCQUFOLENBQXVDOFgsU0FBdkMsRUFDQSxPQUFLeEssRUFBTCxDQUFRNEosb0JBQVIsQ0FBNkJZLFNBQTdCLEVBQ0VuVyxJQURGLENBQ08sVUFBTSxDQUNYNEIsSUFBSXZELENBQUosQ0FBTSx3Q0FBTixDQUFnRCxPQUFLc04sRUFBTCxDQUFRNkosaUJBQXhELEVBQ0EsT0FBS2Ysb0JBQUwsQ0FBMEIsSUFBMUIsRUFDQSxDQUpGLEVBS0V0UixLQUxGLENBS1F2QixJQUFJcEQsQ0FBSixDQUFNZixJQUFOLENBQVdtRSxHQUFYLENBQWdCLGtDQUFoQixDQUxSLEVBTUEsQ0FDRCxDQVhELEVBWUEsT0FBS3dVLFlBQUwsQ0FBa0JuVCxNQUFsQixDQUEwQixLQUExQixFQUNBLENBakNNLENBQVAsQ0FrQ0EsQywrQ0FPWSxpQkFDWnJCLElBQUl2RCxDQUFKLENBQU0sMkJBQU4sRUFDQSxNQUFPLE1BQUtzTixFQUFMLENBQVEwSyxXQUFSLEdBQ0xyVyxJQURLLENBQ0EsNEJBQWUsUUFBSzBWLG1CQUFMLENBQXlCQyxXQUF6QixDQUFmLEVBREEsRUFFTDNWLElBRkssQ0FFQSw0QkFBZSxRQUFLMkwsRUFBTCxDQUFRaUssbUJBQVIsQ0FBNEJELFdBQTVCLENBQWYsRUFGQSxFQUdMM1YsSUFISyxDQUdBLGlCQUFNNEIsS0FBSXZELENBQUosQ0FBTSw2Q0FBTixDQUFxRCxPQUFLc04sRUFBTCxDQUFRa0ssZ0JBQTdELENBQU4sRUFIQSxFQUlMN1YsSUFKSyxDQUlBLGlCQUFNMEIsVUFBU2pDLE1BQVQsQ0FBbUIsT0FBS3FVLFVBQXhCLFFBQTBDUixRQUFRLE9BQUszSCxFQUFMLENBQVFrSyxnQkFBaEIsQ0FBMUMsQ0FBTixFQUpBLENBQVAsQ0FLQSxDLGtEQVFZNVMsTSxDQUFRM0YsTSxDQUFRLGlCQUM1QixHQUFHLHVDQUFnQzJXLGtCQUFrQmtCLFNBQWxELENBQWdFN1gsTUFBaEUsU0FBSCxDQUFtRixDQUNsRjJGLE9BQU9tTixTQUFQLEdBQW1CbFMsT0FBbkIsQ0FBMkIsc0JBQVMsUUFBS3lOLEVBQUwsQ0FBV3JPLE1BQVgsVUFBMEIyUyxLQUExQixDQUFpQ2hOLE1BQWpDLENBQVQsRUFBM0IsQ0FBOEUsSUFBOUUsRUFDQSxDQUZELElBRU8sQ0FDTixLQUFLMEksRUFBTCxDQUFXck8sTUFBWCxXQUEyQjJGLE1BQTNCLEVBQ0EsQ0FDRCxDLGdEQVFXcVQsUyxDQUFXQyxTLENBQVcsQ0FDakMzVSxJQUFJdkQsQ0FBSixDQUFNLDRCQUFOLEVBQ0EsR0FBSSx1Q0FBZ0M0VixrQkFBa0JrQixTQUFsRCxDQUE2RCxZQUE3RCxDQUFELEVBQ0UsZ0JBQWtCaEQsT0FEcEIsRUFFQyx1Q0FBZ0NxRSxhQUFhckIsU0FBN0MsQ0FBd0QsY0FBeEQsQ0FGSixDQUU0RSxDQUczRSxLQUFLeEosRUFBTCxDQUFROEssVUFBUixHQUFxQnZZLE9BQXJCLENBQTZCLGdCQUFVLENBQ3RDLEdBQUl3WSxpQkFBSixDQUNBLE9BQVFDLE9BQU8xRyxLQUFQLENBQWEvSCxJQUFyQixFQUNDLElBQUssT0FBTCxDQUNDd08sVUFBWUgsVUFBVWxQLGNBQVYsRUFBWixDQUNBLE1BQ0QsSUFBSyxPQUFMLENBQ0NxUCxVQUFZSCxVQUFVblAsY0FBVixFQUFaLENBQ0EsTUFDRCxRQUNDc1AsVUFBWSxFQUFaLENBUkYsQ0FVQSxHQUFHQSxVQUFVN1ksTUFBYixDQUFxQixDQUNwQjhZLE9BQU9DLFlBQVAsQ0FBb0JGLFVBQVUsQ0FBVixDQUFwQixFQUNBLENBQ0QsQ0FmRCxFQWdCQSxLQUFLUixVQUFMLEdBQ0UvUyxLQURGLENBQ1EsV0FBSyxDQUFDdkIsSUFBSXZELENBQUosQ0FBTSw0QkFBTixDQUFvQ0csQ0FBcEMsRUFBd0MsQ0FEdEQsRUFFQSxDQXZCRCxJQXVCTyxDQUNOLEtBQUs0WCxZQUFMLENBQWtCRSxTQUFsQixDQUE2QixRQUE3QixFQUNBLEtBQUtGLFlBQUwsQ0FBa0JHLFNBQWxCLENBQTZCLEtBQTdCLEVBQ0EsQ0FDRCxDLHFDQU1PLGlCQUNQLEdBQUcsS0FBSzFCLE9BQUwsb0JBQUgsQ0FBNEIsQ0FDM0IsS0FBS0EsT0FBTCxvQkFFQSxHQUFJLEtBQUs1SSxJQUFULENBQWUsQ0FDZCxLQUFLQSxJQUFMLENBQVU2RSxJQUFWLEVBQWtCLEtBQUs3RSxJQUFMLENBQVU2RSxJQUFWLEVBQWxCLENBQ0EsS0FBSzdFLElBQUwsQ0FBVXJFLFNBQVYsQ0FBc0IsSUFBdEIsQ0FDQSxLQUFLWixTQUFMLENBQWU0SyxXQUFmLENBQTJCLEtBQUszRixJQUFoQyxFQUNBLEtBQUtBLElBQUwsQ0FBWSxJQUFaLENBQ0EsQ0FFRCxLQUFLd0ksb0JBQUwsQ0FBMEIsS0FBMUIsRUFFQS9TLFNBQVNwQixHQUFULENBQWdCLEtBQUt5VCxXQUFyQixRQUF3QyxPQUF4QyxFQUVBclMsU0FBU2hDLE1BQVQsQ0FBZ0IsS0FBS29VLFVBQXJCLEVBRUEsR0FBSSxLQUFLbkksRUFBTCxFQUFXLEtBQUtBLEVBQUwsQ0FBUWtMLGNBQVIsR0FBMkIsUUFBMUMsQ0FBb0QsQ0FDbkQsS0FBS2xMLEVBQUwsQ0FBUW1MLHNCQUFSLENBQWlDLFVBQU0sQ0FDdEMsR0FBRyxPQUFLbkwsRUFBTCxDQUFRa0wsY0FBUixHQUEyQixRQUE5QixDQUF3QyxDQUN2QyxPQUFLaEMsT0FBTCxtQkFDQSxDQUNELENBSkQsQ0FLQSxLQUFLbEosRUFBTCxDQUFRakgsS0FBUixHQUNBLENBUEQsSUFPTyxDQUNOLEtBQUttUSxPQUFMLG1CQUNBLENBQ0QsQ0FDRCxDLGdFQVFtQmMsVyxDQUFhLENBQ2hDLEdBQUcsZ0JBQU0zWixNQUFOLENBQWF5UyxtQkFBYixFQUFvQyxnQkFBTXpTLE1BQU4sQ0FBYTBTLG1CQUFwRCxDQUF5RSxDQUN4RTlNLElBQUl2RCxDQUFKLENBQU0sb0NBQU4sQ0FBNEMsQ0FBQ3NYLHVCQUFELENBQWMzWixPQUFRLGdCQUFNQSxNQUE1QixDQUE1QyxFQUNBLEdBQU0rYSxVQUFXcEIsWUFBWXFCLEdBQVosQ0FBZ0JDLEtBQWhCLENBQXNCLE9BQXRCLENBQWpCLENBQ01DLE9BQVMsQ0FBQ3BRLE1BQU8sRUFBUixDQUFZUCxNQUFPLEVBQW5CLENBRGYsQ0FFSTBHLFFBQVUsSUFGZCxDQUlBOEosU0FBUzdZLE9BQVQsQ0FBaUIsU0FBQ2laLE9BQUQsQ0FBVTdZLENBQVYsQ0FBZ0IsQ0FDaEMsR0FBRyxNQUFNOUIsSUFBTixDQUFXMmEsT0FBWCxDQUFILENBQXdCLENBQ3ZCLEdBQU05WSxHQUFJLGlEQUFpRCtZLElBQWpELENBQXNERCxPQUF0RCxDQUFWLENBQ0FsSyxRQUFVLENBQ1RvSyxJQUFLaFosRUFBRSxDQUFGLEVBQUs0WSxLQUFMLENBQVcsSUFBWCxDQURJLENBRVRLLE1BQU9oWixDQUZFLENBR1RpWixPQUFRLEVBSEMsQ0FBVixDQUtBTCxPQUFPN1ksRUFBRSxDQUFGLENBQVAsRUFBYWtCLElBQWIsQ0FBa0IwTixPQUFsQixFQUNBLENBUkQsSUFRTyxJQUFHQSxTQUFXLGFBQWF6USxJQUFiLENBQWtCMmEsT0FBbEIsQ0FBZCxDQUEwQyxDQUNoRCxHQUFNSyxHQUFJLHNDQUFzQ0osSUFBdEMsQ0FBMkNELE9BQTNDLENBQVYsQ0FDQSxHQUFHSyxDQUFILENBQU0sQ0FDTHZLLFFBQVFzSyxNQUFSLENBQWVoWSxJQUFmLENBQW9CLENBQ25Ca1ksR0FBSUQsRUFBRSxDQUFGLENBRGUsQ0FFbkJsVixLQUFNa1YsRUFBRSxDQUFGLENBRmEsQ0FHbkJGLE1BQU9oWixDQUhZLENBQXBCLEVBS0EsQ0FDRCxDQUNELENBbkJELEVBb0JBc0QsSUFBSXZELENBQUosQ0FBTSxvQ0FBTixDQUE0QzZZLE1BQTVDLEVBQ0EsR0FBSXpYLFFBQVMsS0FBYixDQUNNaVksT0FBUyxRQUFUQSxPQUFTLENBQUNDLFNBQUQsQ0FBWUMsYUFBWixDQUE4QixDQUM1Q0QsVUFBVXpaLE9BQVYsQ0FBa0IsZUFBUyxDQUMxQixHQUFNMlosVUFBVzdILE1BQU11SCxNQUFOLENBQWFPLElBQWIsQ0FBa0Isc0JBQVNGLGVBQWNwYixJQUFkLENBQW1CdWIsTUFBTXpWLElBQXpCLENBQVQsRUFBbEIsQ0FBakIsQ0FDQSxHQUFHdVYsUUFBSCxDQUFhLENBQ1osR0FBTVIsS0FBTSxDQUFDUSxTQUFTSixFQUFWLEVBQWN6WixNQUFkLENBQXFCZ1MsTUFBTXFILEdBQU4sQ0FBVXJVLE1BQVYsQ0FBaUIsb0JBQU9nVixPQUFRSCxTQUFTSixFQUF4QixFQUFqQixDQUFyQixDQUFaLENBQ0FWLFNBQVMvRyxNQUFNc0gsS0FBZixFQUF3QlAsU0FBUy9HLE1BQU1zSCxLQUFmLEVBQXNCNU8sT0FBdEIsQ0FBOEJzSCxNQUFNcUgsR0FBTixDQUFVWSxJQUFWLENBQWUsR0FBZixDQUE5QixDQUFtRFosSUFBSVksSUFBSixDQUFTLEdBQVQsQ0FBbkQsQ0FBeEIsQ0FDQXhZLE9BQVMsSUFBVCxDQUNBLENBQ0QsQ0FQRCxFQVFBLENBVkQsQ0FXQSxHQUFHLGdCQUFNekQsTUFBTixDQUFheVMsbUJBQWhCLENBQXFDLENBQ3BDaUosT0FBT1IsT0FBTzNRLEtBQWQsQ0FBcUIsZ0JBQU12SyxNQUFOLENBQWF5UyxtQkFBbEMsRUFDQSxDQUNELEdBQUcsZ0JBQU16UyxNQUFOLENBQWEwUyxtQkFBaEIsQ0FBcUMsQ0FDcENnSixPQUFPUixPQUFPcFEsS0FBZCxDQUFxQixnQkFBTTlLLE1BQU4sQ0FBYTBTLG1CQUFsQyxFQUNBLENBQ0QsR0FBR2pQLE1BQUgsQ0FBVyxDQUNWbUMsSUFBSXZELENBQUosQ0FBTSxvQ0FBTixDQUE0QzBZLFNBQVNrQixJQUFULENBQWMsTUFBZCxDQUE1QyxFQUNBLE1BQU8sQ0FDTmpCLElBQUtELFNBQVNrQixJQUFULENBQWMsTUFBZCxDQURDLENBRU43VCxLQUFNdVIsWUFBWXZSLElBRlosQ0FBUCxDQUlBLENBQ0QsQ0FDRCxNQUFPdVIsWUFBUCxDQUNBLEMsdUNBMVJpQjFTLE0sQ0FBUSxDQUl6QixLQUFLaVYsYUFBTCxDQUFxQmpWLE1BQXJCLENBQ0EsS0FBS3VSLGFBQUwsR0FDQSxDLG1CQU1tQixDQUNuQixNQUFPLE1BQUswRCxhQUFaLENBQ0EsQyx1Q0FNa0IsQ0FDbEIsTUFBTyxNQUFLdk0sRUFBTCxFQUNOLENBQUMsQ0FBQyxDQUFDLENBQ0ZxSCw4QkFERSxDQUVGQyw4QkFGRSxDQUdGSSwwQkFIRSxFQUlEclcsT0FKQyxDQUlPLEtBQUsyTyxFQUFMLENBQVE0SSxrQkFKZixDQURKLENBTUEsQyw4Q0E5S21CZCxjOzs7Ozs7O3FnQkMxRFQ3UixHLGdFQUNBRixRLGlXQUVaLEdBQU15VyxZQUFhLFFBQWJBLFdBQWEsQ0FBQ0MsR0FBRCxDQUFNQyxHQUFOLFFBQWNELEtBQUlFLGFBQUosQ0FBa0JELEdBQWxCLENBQXVCLE9BQXZCLEVBQWtDLENBQWxDLENBQXlDRCxHQUF6QyxLQUFnREMsR0FBaEQsQ0FBMERBLEdBQTFELEtBQWlFRCxHQUEvRSxFQUFuQixDLEdBS3FCRyxzQixZQUtwQixnQ0FBYywwREFLYixLQUFLNUssTUFBTCxDQUFjLEVBQWQsQ0FDQSxDLDJHQVVpQjFLLE0sQ0FBUStJLE0sQ0FBUTZILE8sQ0FBUyxnQkFDMUMsR0FBRyxDQUFDLGdCQUFNMVgsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSxnRUFBVixDQUFmLENBQVAsQ0FDQSxDQUNELEdBQU1nWCxTQUFVeUUsV0FBV25NLE9BQU8zUCxNQUFsQixDQUEwQixnQkFBTUEsTUFBaEMsQ0FBaEIsQ0FFQSxHQUFHLEtBQUtzUixNQUFMLENBQVkrRixPQUFaLEdBQXdCLEtBQUsvRixNQUFMLENBQVkrRixPQUFaLEVBQXFCelEsT0FBT2QsR0FBNUIsQ0FBM0IsQ0FBNkQsQ0FDNUQsTUFBTyxtQkFBUWhELE9BQVIsQ0FBZ0IsS0FBS3dPLE1BQUwsQ0FBWStGLE9BQVosRUFBcUJ6USxPQUFPZCxHQUE1QixDQUFoQixDQUFQLENBQ0EsQ0FFRCxHQUFHLENBQUMsS0FBS3dMLE1BQUwsQ0FBWStGLE9BQVosQ0FBSixDQUEwQixDQUN6QixLQUFLL0YsTUFBTCxDQUFZK0YsT0FBWixFQUF1QixFQUF2QixDQUNBLENBRUQsR0FBTXRRLE9BQVEsRUFBZCxDQUNBQSxNQUFNLGdCQUFNakgsSUFBTixDQUFXZ0csR0FBakIsRUFBd0IsSUFBeEIsQ0FDQWlCLE1BQU00SSxPQUFPOUksSUFBUCxFQUFlOEksT0FBT3JJLEVBQTVCLEVBQWtDLElBQWxDLENBRUEsTUFBT2pDLFVBQVNqQyxNQUFULGFBQTRCaVUsT0FBNUIsQ0FBdUN0USxLQUF2QyxFQUNMcEQsSUFESyxDQUNBLGlCQUFNLDhCQUFtQjBULE9BQW5CLENBQTRCelEsT0FBT2QsR0FBbkMsQ0FBd0M2SixPQUFPM1AsTUFBL0MsQ0FBdUR3WCxPQUF2RCxDQUFOLEVBREEsRUFFTDdULElBRkssQ0FFQSxZQUFNLENBQ1g0QixJQUFJdkQsQ0FBSixDQUFNLHlDQUFOLENBQWlELENBQUNxVixlQUFELENBQVVDLFNBQVUxUSxPQUFPZCxHQUEzQixDQUFnQ3dKLEtBQWhDLENBQWpELEVBQ0EsTUFBS2dDLE1BQUwsQ0FBWStGLE9BQVosRUFBcUJ6USxPQUFPZCxHQUE1QixFQUFtQ3dKLEVBQW5DLENBQ0EsTUFBT0EsR0FBUCxDQUNBLENBTkssRUFPTHhJLEtBUEssQ0FPQ3ZCLElBQUlsRCxDQUFKLENBQU0seUNBQU4sQ0FQRCxDQUFQLENBUUEsQyxvQ0FRSytGLFcsQ0FBYTZOLFUsQ0FBWSxDQUM5QjFRLElBQUl2RCxDQUFKLENBQU0sNkJBQU4sQ0FBcUMsQ0FBQ29HLHVCQUFELENBQWM2TixxQkFBZCxDQUFyQyxFQUNBLE1BQU8sTUFBS2tHLGlCQUFMLENBQXVCL1QsV0FBdkIsQ0FBb0M2TixVQUFwQyxDQUFnRCxJQUFoRCxFQUNMdFMsSUFESyxDQUNBLG1CQUFNMkwsSUFBRzRHLEtBQUgsQ0FBUzlOLFlBQVl1TCxLQUFyQixDQUFOLEVBREEsQ0FBUCxDQUVBLEMsc0NBUU05TCxZLENBQWNnUixXLENBQWEsQ0FDakN0VCxJQUFJdkQsQ0FBSixDQUFNLDhCQUFOLENBQXNDLENBQUM2Rix5QkFBRCxDQUFlZ1IsdUJBQWYsQ0FBdEMsRUFDQSxNQUFPLE1BQUtzRCxpQkFBTCxDQUF1QnRVLFlBQXZCLENBQXFDQSxZQUFyQyxDQUFtRCxLQUFuRCxFQUNMbEUsSUFESyxDQUNBLG1CQUFNMkwsSUFBR0QsTUFBSCxDQUFVd0osV0FBVixDQUFOLEVBREEsQ0FBUCxDQUVBLEMsb0NBUUt2QixRLENBQVVDLFksQ0FBYyxDQUM3QixHQUFNRixTQUFVeUUsV0FBV3ZFLFlBQVgsQ0FBeUIsZ0JBQU12WCxNQUEvQixDQUFoQixDQUNDc1AsR0FBSyxLQUFLZ0MsTUFBTCxDQUFZK0YsT0FBWixFQUF1QixLQUFLL0YsTUFBTCxDQUFZK0YsT0FBWixFQUFxQkMsUUFBckIsQ0FBdkIsQ0FBd0QsSUFEOUQsQ0FFQSxHQUFHaEksRUFBSCxDQUFNLENBQ0xBLEdBQUdqSCxLQUFILEdBQ0EsS0FBS2lKLE1BQUwsQ0FBWStGLE9BQVosRUFBcUJDLFFBQXJCLEVBQWlDLElBQWpDLENBQ0EsTUFBTyxNQUFLaEcsTUFBTCxDQUFZK0YsT0FBWixFQUFxQkMsUUFBckIsQ0FBUCxDQUNBLE1BQU9oSSxHQUFQLENBQ0EsQ0FDRCxNQUFPLE1BQVAsQ0FDQSxDLHFEQXpGbUI0TSxxQjs7Ozs7O0FDVnJCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7OztBQ0FsQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpSEFBaUgsbUJBQW1CLEVBQUUsbUJBQW1CLDRKQUE0Sjs7QUFFclQsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxFOzs7Ozs7QUNwQkE7QUFDQSxvRDs7Ozs7O0FDREE7QUFDQTtBQUNBLG1EOzs7Ozs7QUNGQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakUsd0NBQXdDO0FBQ3hDO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQSxzRDs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0Esb0Q7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Q7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7Ozs7OztBQ0pBO0FBQ0E7QUFDQSx1RDs7Ozs7O0FDRkEsNEJBQTRCLGU7Ozs7OztBQ0E1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFdBQVcsZUFBZTtBQUMvQjtBQUNBLEtBQUs7QUFDTDtBQUNBLEU7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxpQkFBaUIsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGdCQUFnQjtBQUNoRjtBQUNBO0FBQ0EsR0FBRywyQ0FBMkMsZ0NBQWdDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qjs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRTs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBGQUFnRixhQUFhLEVBQUU7O0FBRS9GO0FBQ0EscURBQXFELDBCQUEwQjtBQUMvRTtBQUNBLEU7Ozs7OztBQ1pBO0FBQ0EsVUFBVTtBQUNWLEU7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxDQUFDO0FBQ0Q7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxTQUFTO0FBQ1QsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUNBQXVDLG9CQUFvQixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFOzs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVSxFQUFFO0FBQzlDLG1CQUFtQixzQ0FBc0M7QUFDekQsQ0FBQyxvQ0FBb0M7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsVzs7Ozs7O0FDaENEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQyxHQUFHO0FBQ0gsRTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdFQUEwRSxrQkFBa0IsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxnQ0FBZ0M7QUFDcEY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNwQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZCxpQkFBaUI7QUFDakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCOzs7Ozs7QUNqQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsaUNBQW9DLEU7Ozs7OztBQ0g5RTtBQUNBO0FBQ0EscUVBQXVFLDBDQUEwQyxFOzs7Ozs7QUNGakg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7QUNSRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzREFBaUQsb0JBQW9CO0FBQ3BIO0FBQ0E7QUFDQSxHQUFHLFVBQVU7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUIsZ0NBQWdDO0FBQ25ELFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLHFDQUFxQztBQUNwRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQix1QkFBdUIsS0FBSztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELGtCQUFrQjtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7QUMxU0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixvQkFBb0IsdUJBQXVCLFNBQVMsSUFBSTtBQUN4RCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQixpQ0FBaUM7QUFDdkQsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELDhCQUE4QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELGdCQUFnQjs7QUFFMUU7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjs7QUFFeEMsMENBQTBDLG9CQUFvQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHdCQUF3QixlQUFlLEVBQUU7QUFDekMsd0JBQXdCLGdCQUFnQjtBQUN4QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsS0FBSyxRQUFRLGlDQUFpQztBQUNsRyxDQUFDO0FBQ0Q7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEM7Ozs7OztBQzFPQSx5Qzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLDJGQUFzRjtBQUN0RjtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixtQ0FBbUM7QUFDbkMsU0FBUywrQkFBK0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUMzQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRix1QkFBdUI7QUFDNUcsbUVBQW1FO0FBQ25FLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLHlCOzs7Ozs7QUMxQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxFOzs7Ozs7QUNIQTtBQUNBLHNFQUFzRSxnQkFBZ0IsVUFBVSxHQUFHO0FBQ25HLENBQUMsRTs7Ozs7O0FDRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsVUFBVTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyxFOzs7Ozs7QUMvQkQ7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLHVDQUF1QztBQUN2QyxFOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdCQUFnQixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhCOzs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0IsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLHNCQUFzQjs7Ozs7Ozs7O0FDWnZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFlBQVk7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EseURBQXlELG9CQUFvQjtBQUM3RSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEseUNBQXlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQ0FBZ0M7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUwsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY2gtZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIndlYmNvbS93ZWJjb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY2hcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjaFwiXSA9IGZhY3Rvcnkocm9vdFtcIldlYmNvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4Nyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzExY2MyOGE0Mjk5OGJmODE5YTkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xuaW1wb3J0IFN0cmVhbU1hbmFnZXIgZnJvbSAnLi4vc3RyZWFtL1N0cmVhbU1hbmFnZXInO1xuaW1wb3J0IFBlZXJDb25uZWN0aW9uTWFuYWdlciBmcm9tICcuLi93ZWJydGMvUGVlckNvbm5lY3Rpb25NYW5hZ2VyJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbi8qKlxuICogc2luZ2xldG9uXG4gKiBAdHlwZSB7Q2FjaGVNYW5hZ2VyfVxuICogQHByaXZhdGVcbiAqL1xubGV0IF9jYWNoZSA9IG51bGw7XG5cbi8qKlxuICogU2luZ2xldG9uIHRvIGhhbmRsZSBnbG9iYWwgcmVmZXJlbmNlc1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgQ2FjaGVNYW5hZ2VyIHtcblx0LyoqXG5cdCAqIENvbnN0cnVjdCBzaW5nbGV0b25cblx0ICogQHJldHVybiB7Q2FjaGVNYW5hZ2VyfVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYoIV9jYWNoZSkge1xuXHRcdFx0X2NhY2hlID0gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIF9jYWNoZTtcblx0fVxuXHQvKipcblx0ICogVGhlIGJhc2UgcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSB7V2ViY29tfSB1cmwgdGhlIHJlZmVyZW5jZSBvciBpdHMgdXJsXG5cdCAqL1xuXHRzZXQgYmFzZSh1cmwpIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fYmFzZSA9IHVybCBpbnN0YW5jZW9mIFdlYmNvbSA/IHVybCA6IG5ldyBXZWJjb20odXJsKTtcblx0fVxuXHQvKipcblx0ICogVGhlIGJhc2UgcmVmZXJlbmNlXG5cdCAqIEB0eXBlIHtXZWJjb219XG5cdCAqL1xuXHRnZXQgYmFzZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIHVzZXJcblx0ICogQHBhcmFtIHtDb25maWd9IGNvbmZpZyB0aGUgY29ubmVjdGVkIHVzZXJcblx0ICovXG5cdHNldCBjb25maWcoY29uZmlnKSB7XG5cdFx0aWYoIXRoaXMuX2NvbmZpZykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX2NvbmZpZyA9IG5ldyBDb25maWcoY29uZmlnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY29uZmlnLmFzc2lnbihjb25maWcpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEB0eXBlIHtDb25maWd9XG5cdCAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdGlmKCF0aGlzLl9jb25maWcpIHtcblx0XHRcdHRoaXMuX2NvbmZpZyA9IG5ldyBDb25maWcoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEBwYXJhbSB7VXNlcn0gdXNlciB0aGUgY29ubmVjdGVkIHVzZXJcblx0ICovXG5cdHNldCB1c2VyKHVzZXIpIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fdXNlciA9IHVzZXI7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAdHlwZSB7VXNlcn1cblx0ICovXG5cdGdldCB1c2VyKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBkZXZpY2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRldmljZSB0aGUgY3VycmVudCBkZXZpY2Vcblx0ICovXG5cdHNldCBkZXZpY2UoZGV2aWNlKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RldmljZSA9IGRldmljZTtcblx0fVxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgZGV2aWNlXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgZGV2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kZXZpY2U7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0c2V0IGxvZ0xldmVsKGxldmVsKSB7XG5cdFx0aWYoL15ERUJVR3xJTkZPfFdBUk58RVJST1IkL2kudGVzdChsZXZlbCkpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9sb2dMZXZlbCA9IGxldmVsO1xuXHRcdH0gZWxzZSBpZihsZXZlbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUiknKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldCBsb2dMZXZlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbG9nTGV2ZWwgfHwgJ0VSUk9SJztcblx0fVxuXG5cdC8qKlxuXHQgKiBTdHJlYW1zIG1hbmFnZXJcblx0ICogQHJldHVybnMge1N0cmVhbU1hbmFnZXJ9XG5cdCAqL1xuXHRnZXQgc3RyZWFtcygpIHtcblx0XHRpZighdGhpcy5fc3RyZWFtcykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX3N0cmVhbXMgPSBuZXcgU3RyZWFtTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fc3RyZWFtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQZWVyQ29ubmVjdGlvbnMgbWFuYWdlclxuXHQgKiBAcmV0dXJucyB7UGVlckNvbm5lY3Rpb25NYW5hZ2VyfVxuXHQgKi9cblx0Z2V0IHBlZXJDb25uZWN0aW9ucygpIHtcblx0XHRpZighdGhpcy5fcGVlckNvbm5lY3Rpb25zKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5fcGVlckNvbm5lY3Rpb25zID0gbmV3IFBlZXJDb25uZWN0aW9uTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb25zO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICogQGlnbm9yZVxuICogQHR5cGUge0NhY2hlTWFuYWdlcn1cbiAqL1xuY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGVNYW5hZ2VyKCk7XG5cbi8qKlxuICogU2luZ2xldG9uIGZvciBzaGFyZWQgcmVmZXJlbmNlc1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL2NhY2hlLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuLyoqXG4gKiBMaXN0IG9mIHBvc3NpYmxlIGxvZyBsZXZlbHNcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBsZXZlbHMgPSBbJ0RFQlVHJywgJ0lORk8nLCAnV0FSTicsICdFUlJPUiddO1xuLyoqXG4gKiBJcyBsb2cgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBsZXZlbFxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgVGhlIGxldmVsIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBpc0VuYWJsZWQgPSBsZXZlbCA9PiB7XG5cdHJldHVybiBsZXZlbHMuaW5kZXhPZihsZXZlbC50b1VwcGVyQ2FzZSgpKSA+PSBsZXZlbHMuaW5kZXhPZihjYWNoZS5sb2dMZXZlbC50b1VwcGVyQ2FzZSgpKTtcbn07XG4vKipcbiAqIEdsb2JhbCBDb25zb2xlLiAodG8gYXZvaWQgZHJvcF9jb25zb2xlLi4uKVxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7Q29uc29sZX1cbiAqL1xuY29uc3QgZ0NvbnNvbGUgPSBnbG9iYWxbJ2NvbnNvbGUnXTtcbi8qKlxuICogU2hvcnRoYW5kIGZvciBjb25zb2xlIGNhbGxcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBBIG1ldGhvZCBvZiB0aGUgY29uc29sZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbG9nIGxldmVsXG4gKiBAcGFyYW0geyp9IG1lc3NhZ2VzIHRoZSBsb2cgY29udGVudFxuICovXG5jb25zdCBsb2dnZXIgPSAobWV0aG9kLCBsZXZlbCwgLi4ubWVzc2FnZXMpID0+IHtcblx0aXNFbmFibGVkKGxldmVsKSA/IGdDb25zb2xlW21ldGhvZC50b0xvd2VyQ2FzZSgpXS5iaW5kKGdDb25zb2xlKSguLi5tZXNzYWdlcykgOiAoKSA9PiB7fTtcbn07XG4vKipcbiAqIFVzZSBhIGdyb3VwIHRvIGxvZ1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgVGhlIGxvZyBsZXZlbFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGdyb3VwIHRpdGxlXG4gKiBAcGFyYW0geyp9IGl0ZW1zIHRoZSBsb2cgY29udGVudFxuICovXG5jb25zdCBncm91cCA9IChsZXZlbCwgbWVzc2FnZSwgLi4uaXRlbXMpID0+IHtcblx0aWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRsb2dnZXIuYmluZCh1bmRlZmluZWQsIGdDb25zb2xlLmdyb3VwID8gJ2dyb3VwJyA6IGxldmVsLCBsZXZlbCkodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnID8gbWVzc2FnZSA6ICcnKTtcblx0XHRsZXQgdmFsdWVzID0gKHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJyA/IFttZXNzYWdlXSA6IFtdKS5jb25jYXQoaXRlbXMpO1xuXHRcdGlmIChpdGVtcy5sZW5ndGggPT09IDEgJiYgaXRlbXNbMF0gaW5zdGFuY2VvZiBBcnJheSAmJiB0eXBlb2YgaXRlbXNbMF0ubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhbHVlcyA9IGl0ZW1zWzBdO1xuXHRcdH1cblx0XHR2YWx1ZXMuZm9yRWFjaChpdGVtID0+IGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgbGV2ZWwsIGxldmVsKShpdGVtKSk7XG5cdFx0Z0NvbnNvbGUuZ3JvdXBFbmQgJiYgZ0NvbnNvbGUuZ3JvdXBFbmQoKTtcblx0fSBlbHNlIHtcblx0XHRsb2dnZXIuYmluZCh1bmRlZmluZWQsIGxldmVsLCBsZXZlbCwgbWVzc2FnZSk7XG5cdH1cbn07XG5cbi8qKlxuICogTG9nIGRlYnVnIG1lc3NhZ2VzIGlmIGxvZyBsZXZlbCBpcyBzZXQgdG8gREVCVUcuXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9BUEkvQ29uc29sZS9sb2dcbiAqL1xuZXhwb3J0IGNvbnN0IGQgPSBncm91cC5iaW5kKHVuZGVmaW5lZCwgbGV2ZWxzWzBdKTtcbi8qKlxuICogTG9nIGluZm9ybWF0aW9uIG1lc3NhZ2VzIGlmIGxvZyBsZXZlbCBpcyBzZXQgdG8gREVCVUcgb3IgSU5GTy5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL2luZm9cbiAqL1xuZXhwb3J0IGNvbnN0IGkgPSBncm91cC5iaW5kKHVuZGVmaW5lZCwgbGV2ZWxzWzFdKTtcbi8qKlxuICogTG9nIHdhcm5pbmcgbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRywgSU5GTyBvciBXQVJOLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvd2FyblxuICovXG5leHBvcnQgY29uc3QgdyA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMl0pO1xuLyoqXG4gKiBMb2cgZXJyb3IgbWVzc2FnZXMuIEVycm9ycyBhcmUgYWx3YXlzIGxvZ2dlZC5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL2Vycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBlID0gZ0NvbnNvbGUuZXJyb3IuYmluZChnQ29uc29sZSk7XG4vKipcbiAqIFByb21pc2UgcmVqZWN0aW9uIGxvZ2dlciB0byB1c2Ugd2l0aCBjYXRjaFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCByID0gbWVzc2FnZSA9PiByZWFzb24gPT4ge1xuXHRkKG1lc3NhZ2UsIHJlYXNvbik7XG5cdHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24gfHwgbWVzc2FnZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbC9Mb2cuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5cbi8qKlxuICogR2V0IHRoZSBldmVudCBzdHJpbmcgZm9yIFdlYmNvbSBmcm9tIFJlYWNoIGV2ZW50c1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBBIFJlYWNoIGV2ZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBldmVudFR5cGUgPSAoZXZlbnQpID0+IHtcblx0bGV0IGV2dDtcblx0aWYoKC9fQURERUQkL2kpLnRlc3QoZXZlbnQpIHx8IC9fUFVCTElTSEVEJC8udGVzdChldmVudCkpIHtcblx0XHRldnQgPSAnYWRkZWQnO1xuXHR9IGVsc2UgaWYoL19DSEFOR0VEJC8udGVzdChldmVudCkgfHwgL19SRUZSRVNIRUQkLy50ZXN0KGV2ZW50KSkge1xuXHRcdGV2dCA9ICdjaGFuZ2VkJztcblx0fSBlbHNlIGlmKC9fUkVNT1ZFRCQvLnRlc3QoZXZlbnQpIHx8IC9fVU5QVUJMSVNIRUQkLy50ZXN0KGV2ZW50KSkge1xuXHRcdGV2dCA9ICdyZW1vdmVkJztcblx0fVxuXHRyZXR1cm4gZXZ0ID8gYGNoaWxkXyR7ZXZ0fWAgOiBldmVudDtcbn07XG5cbi8qKlxuICogV3JpdGUgbWV0aG9kXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFdyaXRlIG1ldGhvZCAoc2V0LHVwZGF0ZSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHNldFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gc2V0XG4gKiBAaWdub3JlXG4gKi9cbmNvbnN0IF93cml0ZSA9IChtZXRob2QsIHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKVttZXRob2RdKGRhdGEsIGVycm9yID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUoKSk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3NldH0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBzZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHNldFxuICogQHJldHVybiB7UHJvbWlzZTwqLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBzZXQgPSBfd3JpdGUuYmluZCh1bmRlZmluZWQsICdzZXQnKTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3B1c2h9IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gcHVzaFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHVzaFxuICogQHJldHVybiB7UHJvbWlzZTxXZWJjb20sIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHB1c2ggPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRjb25zdCBwdXNoUmVmID0gY2FjaGUuYmFzZS5jaGlsZChwYXRoKS5wdXNoKGRhdGEsIGVycm9yID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUocHVzaFJlZikpO1xufSk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSN1cGRhdGV9IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdXBkYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byB1cGRhdGVcbiAqIEByZXR1cm4ge1Byb21pc2U8KiwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlID0gX3dyaXRlLmJpbmQodW5kZWZpbmVkLCAndXBkYXRlJyk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNyZW1vdmV9IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtQcm9taXNlPCosIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChwYXRoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aCkucmVtb3ZlKGVycm9yID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUoKSk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uY2V9IHNob3J0Y3V0IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPFdlYmNvbS9hcGkuRGF0YVNuYXBzaG90LCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBvbmNlID0gKHBhdGgsIGV2ZW50KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub25jZShldmVudFR5cGUoZXZlbnQpLCByZXNvbHZlLCByZWplY3QpO1xufSk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNvbmNlfSgndmFsdWUnKSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGdldFxuICogQHJldHVybiB7UHJvbWlzZTxXZWJjb20vYXBpLkRhdGFTbmFwc2hvdCwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0ID0gcGF0aCA9PiBvbmNlKHBhdGgsICd2YWx1ZScpO1xuXG4vKipcbiAqIExpc3QgdmFsdWVzIGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gZ2V0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBUeXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QgdG8gbGlzdFxuICogQHBhcmFtIHBhcmFtcyBBZGRpdGlvbmFsIGNvbnN0cnVjdG9yIHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0W10sIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxpc3QgPSAocGF0aCwgVHlwZSwgLi4ucGFyYW1zKSA9PiB7XG5cdHJldHVybiBnZXQocGF0aCkudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0aWYoc25hcERhdGEpIHtcblx0XHRcdGNvbnN0IHZhbHVlcyA9IFtdO1xuXHRcdFx0c25hcERhdGEuZm9yRWFjaChzbmFwQ2hpbGQgPT4ge1xuXHRcdFx0XHR2YWx1ZXMucHVzaChuZXcgVHlwZShzbmFwQ2hpbGQsIC4uLnBhcmFtcykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb259IHNob3J0Y3V0XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnRcbiAqIEBwYXJhbSB7V2ViY29tL2FwaS5RdWVyeX5xdWVyeUNhbGxiYWNrfGZ1bmN0aW9ufSBxdWVyeUNhbGxiYWNrIFRoZSBjYWxsYmFja1xuICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfGZ1bmN0aW9ufSBbY2FuY2VsQ2FsbGJhY2tdIFRoZSBjYWxsYmFja1xuICovXG5leHBvcnQgY29uc3Qgb24gPSAocGF0aCwgZXZlbnQsIHF1ZXJ5Q2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub24oZXZlbnRUeXBlKGV2ZW50KSwgcXVlcnlDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29mZn0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBUaGUgY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGNvbnN0IG9mZiA9IChwYXRoLCBldmVudCwgY2FsbGJhY2spID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vZmYoZXZlbnRUeXBlKGV2ZW50KSwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uRGlzY29ubmVjdH0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHJldHVybiB7V2ViY29tL2FwaS5PbkRpc2Nvbm5lY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBvbkRpc2Nvbm5lY3QgPSBwYXRoID0+IGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub25EaXNjb25uZWN0KCk7XG5cbi8qKlxuICogVGltZXN0YW1wIHZhbHVlXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge2Z1bmN0aW9ufVxuICovXG4vLyBleHBvcnQgY29uc3QgdHMgPSAoKSA9PiBXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QO1xuZXhwb3J0IGNvbnN0IHRzID0gKCkgPT4gRGF0ZS5ub3coKTtcbi8vIEhBQ0sgI0RhdGFTeW5jOiBSb2xsYmFjayB3aGVuIFRJTUVTVEFNUCB3b3JrcyBhZ2FpbiAoc2VydmVyLXNpZGUgYnVnIHdpdGggc2VjdXJpdHkgcnVsZXMpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL0RhdGFTeW5jLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBPUEVORURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT1BFTkVEID0gJ09QRU5FRCc7XG4vKipcbiAqIENMT1NFRFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBDTE9TRUQgPSAnQ0xPU0VEJztcbi8qKlxuICogQ0xPU0lOR1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBDTE9TSU5HID0gJ0NMT1NJTkcnO1xuLyoqXG4gKiBDT05ORUNURURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ09OTkVDVEVEID0gJ0NPTk5FQ1RFRCc7XG4vKipcbiAqIE5PVF9DT05ORUNURURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgTk9UX0NPTk5FQ1RFRCA9ICdOT1RfQ09OTkVDVEVEJztcbi8qKlxuICogV0FTX0NPTk5FQ1RFRFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBXQVNfQ09OTkVDVEVEID0gJ1dBU19DT05ORUNURUQnO1xuLyoqXG4gKiBPV05FUlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBPV05FUiA9ICdPV05FUic7XG4vKipcbiAqIE1PREVSQVRPUlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBNT0RFUkFUT1IgPSAnTU9ERVJBVE9SJztcbi8qKlxuICogUEFSVElDSVBBTlRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgUEFSVElDSVBBTlQgPSAnUEFSVElDSVBBTlQnO1xuLyoqXG4gKiBOT05FXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE5PTkUgPSAnTk9ORSc7XG4vKipcbiAqIE9uZ29pbmcgaW52aXRhdGlvblxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBPTkdPSU5HID0gJ09OR09JTkcnO1xuLyoqXG4gKiBBY2NlcHRlZCBpbnZpdGF0aW9uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEID0gJ0FDQ0VQVEVEJztcbi8qKlxuICogUmVqZWN0ZWQgaW52aXRhdGlvblxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG4vKipcbiAqIENhbmNlbGVkIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0FOQ0VMRUQgPSAnQ0FOQ0VMRUQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbC9jb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGxvZ0Rpc2FibGVkXyA9IHRydWU7XG5cbi8vIFV0aWxpdHkgbWV0aG9kcy5cbnZhciB1dGlscyA9IHtcbiAgZGlzYWJsZUxvZzogZnVuY3Rpb24oYm9vbCkge1xuICAgIGlmICh0eXBlb2YgYm9vbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcmd1bWVudCB0eXBlOiAnICsgdHlwZW9mIGJvb2wgK1xuICAgICAgICAgICcuIFBsZWFzZSB1c2UgYSBib29sZWFuLicpO1xuICAgIH1cbiAgICBsb2dEaXNhYmxlZF8gPSBib29sO1xuICAgIHJldHVybiAoYm9vbCkgPyAnYWRhcHRlci5qcyBsb2dnaW5nIGRpc2FibGVkJyA6XG4gICAgICAgICdhZGFwdGVyLmpzIGxvZ2dpbmcgZW5hYmxlZCc7XG4gIH0sXG5cbiAgbG9nOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChsb2dEaXNhYmxlZF8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgYnJvd3NlciB2ZXJzaW9uIG91dCBvZiB0aGUgcHJvdmlkZWQgdXNlciBhZ2VudCBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gdWFzdHJpbmcgdXNlckFnZW50IHN0cmluZy5cbiAgICogQHBhcmFtIHshc3RyaW5nfSBleHByIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIGFzIG1hdGNoIGNyaXRlcmlhLlxuICAgKiBAcGFyYW0geyFudW1iZXJ9IHBvcyBwb3NpdGlvbiBpbiB0aGUgdmVyc2lvbiBzdHJpbmcgdG8gYmUgcmV0dXJuZWQuXG4gICAqIEByZXR1cm4geyFudW1iZXJ9IGJyb3dzZXIgdmVyc2lvbi5cbiAgICovXG4gIGV4dHJhY3RWZXJzaW9uOiBmdW5jdGlvbih1YXN0cmluZywgZXhwciwgcG9zKSB7XG4gICAgdmFyIG1hdGNoID0gdWFzdHJpbmcubWF0Y2goZXhwcik7XG4gICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+PSBwb3MgJiYgcGFyc2VJbnQobWF0Y2hbcG9zXSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCcm93c2VyIGRldGVjdG9yLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IHJlc3VsdCBjb250YWluaW5nIGJyb3dzZXIgYW5kIHZlcnNpb25cbiAgICogICAgIHByb3BlcnRpZXMuXG4gICAqL1xuICBkZXRlY3RCcm93c2VyOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgbmF2aWdhdG9yID0gd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3I7XG5cbiAgICAvLyBSZXR1cm5lZCByZXN1bHQgb2JqZWN0LlxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICByZXN1bHQuYnJvd3NlciA9IG51bGw7XG4gICAgcmVzdWx0LnZlcnNpb24gPSBudWxsO1xuXG4gICAgLy8gRmFpbCBlYXJseSBpZiBpdCdzIG5vdCBhIGJyb3dzZXJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ05vdCBhIGJyb3dzZXIuJztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gRmlyZWZveC5cbiAgICBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnZmlyZWZveCc7XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAvRmlyZWZveFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkge1xuICAgICAgLy8gQ2hyb21lLCBDaHJvbWl1bSwgV2VidmlldywgT3BlcmEsIGFsbCB1c2UgdGhlIGNocm9tZSBzaGltIGZvciBub3dcbiAgICAgIGlmICh3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnY2hyb21lJztcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0Nocm9tKGV8aXVtKVxcLyhcXGQrKVxcLi8sIDIpO1xuICAgICAgfSBlbHNlIHsgLy8gU2FmYXJpIChpbiBhbiB1bnB1Ymxpc2hlZCB2ZXJzaW9uKSBvciB1bmtub3duIHdlYmtpdC1iYXNlZC5cbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1ZlcnNpb25cXC8oXFxkKykuKFxcZCspLykpIHtcbiAgICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdzYWZhcmknO1xuICAgICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgICAgL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLywgMSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIHVua25vd24gd2Via2l0LWJhc2VkIGJyb3dzZXIuXG4gICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnVW5zdXBwb3J0ZWQgd2Via2l0LWJhc2VkIGJyb3dzZXIgJyArXG4gICAgICAgICAgICAgICd3aXRoIEdVTSBzdXBwb3J0IGJ1dCBubyBXZWJSVEMgc3VwcG9ydC4nO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS4oXFxkKykkLykpIHsgLy8gRWRnZS5cbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ2VkZ2UnO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8sIDIpO1xuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJlxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8pKSB7XG4gICAgICAgIC8vIFNhZmFyaSwgd2l0aCB3ZWJraXRHZXRVc2VyTWVkaWEgcmVtb3ZlZC5cbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ3NhZmFyaSc7XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vLCAxKTtcbiAgICB9IGVsc2UgeyAvLyBEZWZhdWx0IGZhbGx0aHJvdWdoOiBub3Qgc3VwcG9ydGVkLlxuICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnTm90IGEgc3VwcG9ydGVkIGJyb3dzZXIuJztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvLyBzaGltQ3JlYXRlT2JqZWN0VVJMIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBzaGltU291cmNlT2JqZWN0IHRvIGF2b2lkIGxvb3AuXG5cbiAgc2hpbUNyZWF0ZU9iamVjdFVSTDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIFVSTCA9IHdpbmRvdyAmJiB3aW5kb3cuVVJMO1xuXG4gICAgaWYgKCEodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LkhUTUxNZWRpYUVsZW1lbnQgJiZcbiAgICAgICAgICAnc3JjT2JqZWN0JyBpbiB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAvLyBPbmx5IHNoaW0gQ3JlYXRlT2JqZWN0VVJMIHVzaW5nIHNyY09iamVjdCBpZiBzcmNPYmplY3QgZXhpc3RzLlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgbmF0aXZlQ3JlYXRlT2JqZWN0VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTC5iaW5kKFVSTCk7XG4gICAgdmFyIG5hdGl2ZVJldm9rZU9iamVjdFVSTCA9IFVSTC5yZXZva2VPYmplY3RVUkwuYmluZChVUkwpO1xuICAgIHZhciBzdHJlYW1zID0gbmV3IE1hcCgpLCBuZXdJZCA9IDA7XG5cbiAgICBVUkwuY3JlYXRlT2JqZWN0VVJMID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICBpZiAoJ2dldFRyYWNrcycgaW4gc3RyZWFtKSB7XG4gICAgICAgIHZhciB1cmwgPSAncG9seWJsb2I6JyArICgrK25ld0lkKTtcbiAgICAgICAgc3RyZWFtcy5zZXQodXJsLCBzdHJlYW0pO1xuICAgICAgICBjb25zb2xlLmxvZygnVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pIGlzIGRlcHJlY2F0ZWQhICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVsZW0uc3JjT2JqZWN0ID0gc3RyZWFtIGluc3RlYWQhJyk7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlQ3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgfTtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICBuYXRpdmVSZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHN0cmVhbXMuZGVsZXRlKHVybCk7XG4gICAgfTtcblxuICAgIHZhciBkc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyYycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkc2MuZ2V0LmFwcGx5KHRoaXMpO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHRoaXMuc3JjT2JqZWN0ID0gc3RyZWFtcy5nZXQodXJsKSB8fCBudWxsO1xuICAgICAgICByZXR1cm4gZHNjLnNldC5hcHBseSh0aGlzLCBbdXJsXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbmF0aXZlU2V0QXR0cmlidXRlID0gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZTtcbiAgICB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJlxuICAgICAgICAgICgnJyArIGFyZ3VtZW50c1swXSkudG9Mb3dlckNhc2UoKSA9PT0gJ3NyYycpIHtcbiAgICAgICAgdGhpcy5zcmNPYmplY3QgPSBzdHJlYW1zLmdldChhcmd1bWVudHNbMV0pIHx8IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlU2V0QXR0cmlidXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufTtcblxuLy8gRXhwb3J0LlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZzogdXRpbHMubG9nLFxuICBkaXNhYmxlTG9nOiB1dGlscy5kaXNhYmxlTG9nLFxuICBleHRyYWN0VmVyc2lvbjogdXRpbHMuZXh0cmFjdFZlcnNpb24sXG4gIHNoaW1DcmVhdGVPYmplY3RVUkw6IHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwsXG4gIGRldGVjdEJyb3dzZXI6IHV0aWxzLmRldGVjdEJyb3dzZXIuYmluZCh1dGlscylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Tk9ORSwgT1BFTkVELCBDTE9TRUQsIENPTk5FQ1RFRCwgTk9UX0NPTk5FQ1RFRCwgV0FTX0NPTk5FQ1RFRCwgT1dORVJ9IGZyb20gJy4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4vUGFydGljaXBhbnQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcbmltcG9ydCBMb2NhbCBmcm9tICcuL3N0cmVhbS9Mb2NhbCc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4vSW52aXRlJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuaW1wb3J0IHtSRUpFQ1RFRCwgQ0FOQ0VMRUR9IGZyb20gJy4vdXRpbC9jb25zdGFudHMnO1xuXG5jb25zdCBfam9pblJvb20gPSAocm9vbSwgcm9sZSkgPT4ge1xuXHRjb25zdCBwYXJ0aWNpcGFudCA9IHtcblx0XHRzdGF0dXM6IENPTk5FQ1RFRCxcblx0XHRfam9pbmVkOiBEYXRhU3luYy50cygpXG5cdH07XG5cdGlmKHJvbGUpIHtcblx0XHRwYXJ0aWNpcGFudC5yb2xlID0gcm9sZTtcblx0fVxuXHRMb2cudygnUm9vbSNqb2luJywgW3BhcnRpY2lwYW50LCBgXy9yb29tcy8ke3Jvb20udWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH1gXSk7XG5cdHJldHVybiBEYXRhU3luY1xuXHRcdC51cGRhdGUoYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9YCwgcGFydGljaXBhbnQpXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0RGF0YVN5bmNcblx0XHRcdFx0Lm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3Jvb20udWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH0vc3RhdHVzYClcblx0XHRcdFx0LnNldChXQVNfQ09OTkVDVEVEKTtcblx0XHRcdHJldHVybiByb29tO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBSb29tIGluZm9ybWF0aW9uXG4gKiBAYWNjZXNzIHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHJvb21cblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxPYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGxldCB2YWx1ZXMgPSBzbmFwRGF0YTtcblx0XHRpZihzbmFwRGF0YSAmJiBzbmFwRGF0YS52YWwgJiYgdHlwZW9mIHNuYXBEYXRhLnZhbCA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSwge3VpZDogc25hcERhdGEubmFtZSgpfSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSB2YWx1ZXMudWlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIG5hbWVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMubmFtZSA9IHZhbHVlcy5uYW1lO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIG93bmVyIHVpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5vd25lciA9IHZhbHVlcy5vd25lcjtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSBzdGF0dXM6XG5cdFx0ICogLSBPUEVORURcblx0XHQgKiAtIENMT1NFRFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIHRoYXQgdGhlIHJvb20gaXMgcHVibGljIHNvIGFsbCB1c2VycyBjYW4gam9pblxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuX3B1YmxpYyA9ICEhdmFsdWVzLl9wdWJsaWM7XG5cblx0XHQvKipcblx0XHQgKiBBZGRpdGlvbmFsIHJvb20gaW5mb3JtYXRpb25zXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLmV4dHJhID0gdmFsdWVzLmV4dHJhO1xuXG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBkZWNsYXJlZCBjYWxsYmFja3Ncblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBwYXJ0aWNpcGFudHMuXG5cdCAqIFRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIHVzZXIgaXMgZWl0aGVyIGEgcGFydGljaXBhbnQgb3IgdGhlIG93bmVyIG9mIHRoZSByb29tLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxQYXJ0aWNpcGFudFtdLCBFcnJvcj59XG5cdCAqL1xuXHRwYXJ0aWNpcGFudHMoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzYCwgUGFydGljaXBhbnQsIHRoaXMudWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgbWVzc2FnZXMuXG5cdCAqIFRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIHVzZXIgaXMgZWl0aGVyIGEgcGFydGljaXBhbnQgb3IgdGhlIG93bmVyIG9mIHRoZSByb29tLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2VbXSwgRXJyb3I+fVxuXHQgKi9cblx0bWVzc2FnZXMoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoYF8vcm9vbXMvJHt0aGlzLnVpZH0vbWVzc2FnZXNgLCBNZXNzYWdlLCB0aGlzLnVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHN0cmVhbXNcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0cmVhbXMobG9jYWxTdHJlYW1zKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBsaXN0IGEgUm9vbVxcJ3Mgc3RyZWFtcy4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYF8vcm9vbXMvJHt0aGlzLnVpZH0vc3RyZWFtc2ApXG5cdFx0XHQudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRMb2cuZCgnUm9vbXN+X3N0cmVhbXMnLCB2YWx1ZXMpO1xuXHRcdFx0XHRpZih2YWx1ZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmtleXModmFsdWVzKS5tYXAoa2V5ID0+IE9iamVjdC5hc3NpZ24oe3VpZDoga2V5LCByb29tSWQ6IHRoaXMudWlkfSwgdmFsdWVzW2tleV0pKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oc3RyZWFtcyA9PiBzdHJlYW1zLmZpbHRlcihzdHJlYW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gbG9jYWxTdHJlYW1zID09PSAoc3RyZWFtLmRldmljZSA9PT0gY2FjaGUuZGV2aWNlICYmIHN0cmVhbS5mcm9tID09PSBjYWNoZS51c2VyLnVpZCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKHN0cmVhbXMgPT4gc3RyZWFtcy5tYXAoY2FjaGUuc3RyZWFtc1tgZ2V0JHtsb2NhbFN0cmVhbXMgPyAnU2hhcmVkJyA6ICdSZW1vdGUnfWBdLmJpbmQoY2FjaGUuc3RyZWFtcykpKVxuXHRcdFx0LnRoZW4oc3RyZWFtcyA9PiBzdHJlYW1zLmZpbHRlcihzdHJlYW0gPT4gc3RyZWFtICE9PSBudWxsKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIGxvY2FsbHkgcHVibGlzaGVkIHN0cmVhbXMuIFRoZSBzdHJlYW1zIHB1Ymxpc2hlZCB3aXRoIGFub3RoZXIgZGV2aWNlIHdvbid0IGJlIHZpc2libGUgaGVyZVxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxMb2NhbFtdLCBFcnJvcj59XG5cdCAqL1xuXHRsb2NhbFN0cmVhbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0cmVhbXModHJ1ZSlcblx0XHRcdC5jYXRjaChMb2cucignUm9vbX5sb2NhbFN0cmVhbXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHJlbW90ZWx5IHB1Ymxpc2hlZCBzdHJlYW1zLlxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxSZW1vdGVbXSwgRXJyb3I+fVxuXHQgKi9cblx0cmVtb3RlU3RyZWFtcygpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RyZWFtcyhmYWxzZSlcblx0XHRcdC5jYXRjaChMb2cucignUm9vbX5yZW1vdGVTdHJlYW1zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludml0ZSB1c2VycyB0byB0aGUgcm9vbS4gdGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgY3VycmVudCBVc2VyIGlzIHRoZSBvd25lciBvciBhIG1vZGVyYXRvciBvZiB0aGlzIFJvb20uXG5cdCAqIFRoaXMgd2lsbCBjcmVhdGUgdGhlIGludml0YXRpb24gYW5kIGFkZCB0aGUgdXNlciB0byB0aGUgcGFydGljaXBhbnRzIGxpc3QuXG5cdCAqIEBwYXJhbSB7VXNlcltdfSB1c2VycyB0aGUgdXNlcnMgdG8gaW52aXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcm9sZT0nTk9ORSddIHRoZSByb2xlIG9mIHRoZSBpbnZpdGVlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gYSBtZXNzYWdlIHRvIGFkZCB0byB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8e3Jvb206IFJvb20sIGludml0ZXM6IEludml0ZVtdfSwgRXJyb3I+fVxuXHQgKi9cblx0aW52aXRlKHVzZXJzLCByb2xlID0gTk9ORSwgbWVzc2FnZSkge1xuXHRcdGNvbnN0XG5cdFx0XHRfcGF0aCA9IHVzZXIgPT4gYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7dXNlci51aWR9YCxcblx0XHRcdF9kYXRhID0ge1xuXHRcdFx0XHRzdGF0dXM6IE5PVF9DT05ORUNURUQsXG5cdFx0XHRcdHJvbGU6IHJvbGUgfHwgTk9ORVxuXHRcdFx0fTtcblx0XHQvLyBBZGQgdXNlcnMgYXMgcGFydGljaXBhbnQgc28gdGhleSBjYW4gam9pbiB0aGUgcm9vbVxuXHRcdHJldHVybiBQcm9taXNlLmFsbCh1c2Vycy5tYXAodXNlciA9PiBEYXRhU3luYy5zZXQoX3BhdGgodXNlciksIF9kYXRhKSkpXG5cdFx0XHQvLyBTZW5kIGludml0ZXNcblx0XHRcdC50aGVuKCgpID0+IFByb21pc2UuYWxsKHVzZXJzLm1hcCh1c2VyID0+IEludml0ZS5zZW5kKHVzZXIsIHRoaXMsIG1lc3NhZ2UpKSkpXG5cdFx0XHQudGhlbihpbnZpdGVzID0+IHtcblx0XHRcdFx0Y29uc3QgcmVtb3ZlUGFydGljaXBhbnQgPSBpbnZpdGUgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7aW52aXRlLnJvb219L3BhcnRpY2lwYW50cy8ke2ludml0ZS50b31gKTtcblx0XHRcdFx0aW52aXRlcy5mb3JFYWNoKGludml0ZSA9PiB7XG5cdFx0XHRcdFx0aW52aXRlLm9uKFJFSkVDVEVELCByZW1vdmVQYXJ0aWNpcGFudCk7XG5cdFx0XHRcdFx0aW52aXRlLm9uKENBTkNFTEVELCByZW1vdmVQYXJ0aWNpcGFudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4ge3Jvb206IHRoaXMsIGludml0ZXN9O1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlID0+IHtcblx0XHRcdFx0TG9nLmUoJ1Jvb21+aW52aXRlJywgZSk7XG5cdFx0XHRcdHVzZXJzLmZvckVhY2godXNlciA9PiBEYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7dXNlci51aWR9YCkpO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9Sb29tfSk6XG5cdCAqIC0gUEFSVElDSVBBTlRfQURERUQ6IGEgcGFydGljaXBhbnQgaXMgYWRkZWQgdG8gdGhlIHJvb21cblx0ICogLSBQQVJUSUNJUEFOVF9DSEFOR0VEOiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaGlzIHN0YXR1cyAoam9pbilcblx0ICogLSBQQVJUSUNJUEFOVF9SRU1PVkVEOiBhIHBhcnRpY2lwYW50IGxlYXZlIHRoZSByb29tXG5cdCAqIC0gTUVTU0FHRV9BRERFRDogbmV3IGluc3RhbnQgbWVzc2FnZVxuXHQgKiAtIE1FU1NBR0VfQ0hBTkdFRDogYW4gZXhpc3RpbmcgbWVzc2FnZSBoYXMgYmVlbiBtb2RpZmllZCAobW9kZXJhdGlvbilcblx0ICogLSBNRVNTQUdFX1JFTU9WRUQ6IGEgbWVzc2FnZSBoYXMgYmVlbiByZW1vdmVkIChtb2RlcmF0aW9uKVxuXHQgKiAtIFNUUkVBTV9QVUJMSVNIRUQ6IGEgcGFydGljaXBhbnQgcHVibGlzaGVkIGEgbmV3IFN0cmVhbVxuXHQgKiAtIFNUUkVBTV9DSEFOR0VEOiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaGlzIHB1Ymxpc2hlZCBTdHJlYW0gKG1vZGVyYXRpb24sIHR5cGUsIG11dGUuLi4pXG5cdCAqIC0gU1RSRUFNX1VOUFVCTElTSEVEOiBhIHBhcnRpY2lwYW50IHN0b3BzIHRoZSBwdWJsaWNhdGlvbiBvZiBoaXMgU3RyZWFtXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0aGUgYXJndW1lbnRzIGRlcGVuZHMgb24gdGhlIHR5cGUgb2YgZXZlbnQ6XG5cdCAqIC0gUEFSVElDSVBBTlRfKiA6IGNhbGxiYWNrKHtAbGluayBQYXJ0aWNpcGFudH0gcCBbLCBFcnJvciBlXSlcblx0ICogLSBNRVNTQUdFXyogOiBjYWxsYmFjayh7QGxpbmsgTWVzc2FnZX0gbSBbLCBFcnJvciBlXSlcblx0ICogLSBTVFJFQU1fKiA6IGNhbGxiYWNrKHtAbGluayBSZW1vdGV9IHMgWywgRXJyb3IgZV0pXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5RdWVyeX5jYW5jZWxDYWxsYmFja30gY2FuY2VsQ2FsbGJhY2sgVGhlIGVycm9yIGNhbGxiYWNrIGZvciB0aGUgZXZlbnQsIHRha2VzIGFuIEVycm9yIGFzIG9ubHkgYXJndW1lbnRcblx0ICovXG5cdG9uKGV2ZW50LCBjYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spIHtcblx0XHRjb25zdFxuXHRcdFx0cGF0aCA9IEV2ZW50cy5yb29tLnRvUGF0aChldmVudCkodGhpcyksXG5cdFx0XHRvYmogPSBFdmVudHMucm9vbS50b0NsYXNzKGV2ZW50KTtcblx0XHRpZihwYXRoICYmIG9iaikge1xuXHRcdFx0Y29uc3QgdHlwZWRDYWxsYmFjayA9IHNuYXBEYXRhID0+IHtcblx0XHRcdFx0aWYoIS9eU1RSRUFNXy9pLnRlc3QoZXZlbnQpIHx8ICFzbmFwRGF0YSkge1xuXHRcdFx0XHRcdExvZy5pKGBSb29tfm9uKCR7ZXZlbnR9KWAsIHNuYXBEYXRhID8gbmV3IG9iaihzbmFwRGF0YSkgOiBudWxsKTtcblx0XHRcdFx0XHRjYWxsYmFjayhzbmFwRGF0YSA/IG5ldyBvYmooc25hcERhdGEpIDogbnVsbCk7XG5cdFx0XHRcdH0gZWxzZSBpZihjYWNoZS51c2VyKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RyZWFtRGF0YSA9IE9iamVjdC5hc3NpZ24oe3VpZDogc25hcERhdGEubmFtZSgpLCByb29tSWQ6IHRoaXMudWlkfSwgc25hcERhdGEudmFsKCkpO1xuXHRcdFx0XHRcdGlmKHN0cmVhbURhdGEuZnJvbSAhPT0gY2FjaGUudXNlci51aWQgfHwgc3RyZWFtRGF0YS5kZXZpY2UgIT09IGNhY2hlLmRldmljZSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVtb3RlU3RyZWFtID0gY2FjaGUuc3RyZWFtcy5nZXRSZW1vdGUoc3RyZWFtRGF0YSk7XG5cdFx0XHRcdFx0XHRMb2cuaShgUm9vbX5vbigke2V2ZW50fSlgLCByZW1vdGVTdHJlYW0pO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2socmVtb3RlU3RyZWFtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHREYXRhU3luYy5vbihwYXRoLCBldmVudCwgdHlwZWRDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spO1xuXHRcdFx0aWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKHR5cGVkQ2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZW5kIGFuIGluc3RhbnQgbWVzc2FnZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzZW5kXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZT59XG5cdCAqL1xuXHRzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIE1lc3NhZ2Uuc2VuZCh0aGlzLCBtZXNzYWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQdWJsaXNoIGEgbG9jYWwgc3RyZWFtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSBzdHJlYW0gdHlwZSwgc2VlIHtAbGluayBTdHJlYW1UeXBlc30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IFtsb2NhbFN0cmVhbUNvbnRhaW5lcl0gVGhlIGVsZW1lbnQgdGhlIHN0cmVhbSBpcyBhdHRhY2hlZCB0by4gQ2FuIGJlIG51bGwgaWYgYWxyZWFkeSBzcGVjaWZpZWQgaW4ge0BsaW5rIENvbmZpZ30uXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c30gW2NvbnN0cmFpbnRzXSBUaGUgc3RyZWFtIGNvbnN0cmFpbnRzLiBJZiBub3QgZGVmaW5lZCwgdGhlIGNvbnN0cmFpbnRzIGRlZmluZWQgaW4ge0BsaW5rIENvbmZpZ30gd2lsbCBiZSB1c2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c2hhcmUodHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzKSB7XG5cdFx0TG9nLmkoJ1Jvb21+c2hhcmUnLCB7dHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzfSk7XG5cdFx0cmV0dXJuIExvY2FsLnNoYXJlKHRoaXMudWlkLCB0eXBlLCBsb2NhbFN0cmVhbUNvbnRhaW5lciwgY29uc3RyYWludHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEpvaW4gdGhlIHJvb20uIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0dXMgb2YgdGhlIGN1cnJlbnQgcGFydGljaXBhbnQgdG8gQ09OTkVDVEVELlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0am9pbigpIHtcblx0XHRMb2cuaSgnUm9vbX5qb2luJywgdGhpcyk7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBqb2luIGEgUm9vbS4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBfam9pblJvb20odGhpcykuY2F0Y2goTG9nLnIoJ1Jvb21+am9pbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMZWF2ZSB0aGUgcm9vbS4gU2V0cyB0aGUgY29ubmVjdGVkIHN0YXR1cyBvZiB0aGUgY3VycmVudCBwYXJ0aWNpcGFudCB0byBXQVNfQ09OTkVDVEVELCBkZWxldGVzIG1lZGlhcyBhbmQgY2FsbGJhY2tzLCBjbG9zZXMgV2ViUlRDIHN0YWNrcyBpbiB1c2UuXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqL1xuXHRsZWF2ZSgpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGxlYXZlIGEgUm9vbS4nKSk7XG5cdFx0fVxuXHRcdExvZy5pKCdSb29tfmxlYXZlJywgdGhpcyk7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH0vc3RhdHVzYCkuY2FuY2VsKCk7XG5cblx0XHQvLyBEaXNjb25uZWN0IHVzZXIncyBjYWxsYmFja3Ncblx0XHRPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpLmZvckVhY2goZXZlbnQgPT4ge1xuXHRcdFx0RGF0YVN5bmMub2ZmKEV2ZW50cy5yb29tLnRvUGF0aChldmVudCkodGhpcyksIGV2ZW50KTtcblx0XHR9KTtcblx0XHQvLyBVbnB1Ymxpc2ggYWxsIGxvY2FsIHN0cmVhbXNcblx0XHR0aGlzLmxvY2FsU3RyZWFtcygpLnRoZW4obG9jYWxTdHJlYW1zID0+IGxvY2FsU3RyZWFtcy5mb3JFYWNoKGxvY2FsU3RyZWFtID0+IGxvY2FsU3RyZWFtLmNsb3NlKCkpKTtcblx0XHQvLyBVbnN1YnNjcmliZSBhbGwgcmVtb3RlIHN0cmVhbXNcblx0XHR0aGlzLnJlbW90ZVN0cmVhbXMoKS50aGVuKHJlbW90ZVN0cmVhbXMgPT4gcmVtb3RlU3RyZWFtcy5mb3JFYWNoKHJlbW90ZVN0cmVhbSA9PiByZW1vdGVTdHJlYW0udW5TdWJzY3JpYmUoKSkpO1xuXHRcdC8vIFVwZGF0ZSBzdGF0dXNcblx0XHRyZXR1cm4gRGF0YVN5bmMuc2V0KGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50cy8ke2NhY2hlLnVzZXIudWlkfS9zdGF0dXNgLCBXQVNfQ09OTkVDVEVEKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfmxlYXZlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExlYXZlcyAmIGNsb3NlIHRoZSBSb29tLiBPbmx5IHRoZSBvd25lci9tb2RlcmF0b3IgY2FuIGNsb3NlIGEgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0ICovXG5cdGNsb3NlKCkge1xuXHRcdExvZy5pKCdSb29tfmNsb3NlJywgdGhpcyk7XG5cdFx0cmV0dXJuIHRoaXMubGVhdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMudXBkYXRlKGByb29tcy8ke3RoaXMudWlkfWAsIHtcblx0XHRcdFx0c3RhdHVzOiBDTE9TRUQsXG5cdFx0XHRcdF9jbG9zZWQ6IERhdGFTeW5jLnRzKClcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy51aWR9YCkpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+Y2xvc2UnKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgcm9vbVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVdIFRoZSByb29tIG5hbWVcblx0ICogQHBhcmFtIHtvYmplY3R9IFtleHRyYT1udWxsXSBFeHRyYSBpbmZvcm1hdGlvbnNcblx0ICogQHBhcmFtIHtib29sZWFufSBbcHVibGljUm9vbT1mYWxzZV0gSW5kaWNhdGVzIHB1YmxpYyByb29tXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFJvb20sIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUgKG5hbWUsIGV4dHJhID0gbnVsbCwgcHVibGljUm9vbSA9IGZhbHNlKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBjcmVhdGUgYSBSb29tLicpKTtcblx0XHR9XG5cblx0XHRjb25zdFxuXHRcdFx0cm9vbU1ldGFEYXRhID0ge1xuXHRcdFx0XHRvd25lcjogY2FjaGUudXNlci51aWQsXG5cdFx0XHRcdF9wdWJsaWM6IHB1YmxpY1Jvb20sXG5cdFx0XHRcdG5hbWU6IG5hbWUgfHwgYCR7Y2FjaGUudXNlci5uYW1lfS0ke0RhdGUubm93KCl9YFxuXHRcdFx0fSxcblx0XHRcdHJvb21GdWxsTWV0YURhdGEgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdFx0c3RhdHVzOiBPUEVORUQsXG5cdFx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpLFxuXHRcdFx0XHRleHRyYVxuXHRcdFx0fSwgcm9vbU1ldGFEYXRhKTtcblxuXHRcdGxldCByb29tID0gbnVsbDtcblx0XHQvLyBDcmVhdGUgcHVibGljIHJvb20gaW5mb3Ncblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaCgncm9vbXMnLCByb29tRnVsbE1ldGFEYXRhKVxuXHRcdFx0Ly8gQ3JlYXRlIHByaXZhdGUgcm9vbSBpbmZvc1xuXHRcdFx0LnRoZW4ocm9vbVJlZiA9PiB7XG5cdFx0XHRcdHJvb20gPSBuZXcgUm9vbShPYmplY3QuYXNzaWduKHt1aWQ6IHJvb21SZWYubmFtZSgpfSwgcm9vbUZ1bGxNZXRhRGF0YSkpO1xuXHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL3Jvb21zLyR7cm9vbS51aWR9L21ldGFgLCByb29tTWV0YURhdGEpO1xuXHRcdFx0fSlcblx0XHRcdC8vIEpvaW4gdGhlIHJvb21cblx0XHRcdC50aGVuKCgpID0+IF9qb2luUm9vbShyb29tLCBPV05FUikpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb20jY3JlYXRlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHtAbGluayBSb29tfSBmcm9tIGl0cyBgdWlkYFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gdWlkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxSb29tPn1cblx0ICovXG5cdHN0YXRpYyBnZXQgKHVpZCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYHJvb21zLyR7dWlkfWApXG5cdFx0XHQudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGlmKHNuYXBEYXRhLnZhbCgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBSb29tKHNuYXBEYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1Jvb20uanMiLCIvKmVzbGludCBtYXgtcGFyYW1zOiBbMiwgNV0sIG1heC1sZW46IFswLCAxMjBdICovXG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi9Mb2cnO1xuXG4vKipcbiAqIFZpZGVvIHJlc29sdXRpb24gcHJlc2V0c1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7e1VIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZ30sIEZIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBTVkdBOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFNEOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFZHQToge3c6IG51bWJlciwgaDogbnVtYmVyLCBtYXg6IHN0cmluZ319fVxuICovXG5jb25zdCBwcmVzZXRzID0ge1xuXHRVSEQ6IHt3OiAzODQwLCBoOiAyMTYwLCBtaW46ICdIRCd9LFxuXHRGSEQ6IHt3OiAxOTIwLCBoOiAxMDgwLCBtaW46ICdIRCcsIG1heDogJ1VIRCd9LFxuXHRIRDoge3c6IDEyODAsIGg6IDcyMCwgbWluOiAnU0QnLCBtYXg6ICdGSEQnfSxcblx0U1ZHQToge3c6IDgwMCwgaDogNjAwLCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRTRDoge3c6IDcyMCwgaDogNTc2LCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRWR0E6IHt3OiA2NDAsIGg6IDQ4MCwgbWF4OiAnU1ZHQSd9XG59O1xuXG4vKipcbiAqIEFzc2lnbiBkZXZpY2VJZCB0byBjb25zdHJhaW50XG4gKiBAcGFyYW0gY29uc3RyYWludFxuICogQHBhcmFtIGRldmljZUlkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgX2Fzc2lnbkRldmljZSA9IChjb25zdHJhaW50LCBkZXZpY2VJZCkgPT4ge1xuXHRpZihjb25zdHJhaW50ICYmIGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0XHQvXigodXNlcil8KGVudmlyb25tZW50KSkkL2kudGVzdChkZXZpY2VJZCkgPyB7ZmFjaW5nTW9kZTogZGV2aWNlSWR9IDoge2RldmljZUlkfSxcblx0XHRcdGNvbnN0cmFpbnQgPT09IHRydWUgPyB7fSA6IGNvbnN0cmFpbnQpO1xuXHR9XG5cdHJldHVybiBjb25zdHJhaW50O1xufTtcblxuLyoqXG4gKiBIZWxwZXJzIGZvciBNZWRpYURldmljZXMgYW5kIE1lZGlhU3RyZWFtQ29uc3RyYWludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcblx0LyoqXG5cdCAqIGZhY2luZ01vZGUgdmFsdWVzIHRvIHVzZSB3aXRoIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHt7VVNFUjogc3RyaW5nLCBFTlZJUk9OTUVOVDogc3RyaW5nfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgZmFjaW5nTW9kZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0VVNFUjogJ3VzZXInLFxuXHRcdFx0RU5WSVJPTk1FTlQ6ICdlbnZpcm9ubWVudCdcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhlbHBlcnMgdG8gY3JlYXRlIGEgTWVkaWFTdHJlYW1Db25zdHJhaW50cyBjb25maWd1cmF0aW9uIG9iamVjdFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfHN0cmluZ30gW3ZpZGVvQ29uc3RyYWludHM9J0hEJ10gYSBib29sZWFuLCBhIHZpZGVvIGNvbnN0cmFpbnRzIG9iamVjdCBvciBhIHByZXNldCBpZCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfSBbYXVkaW9Db25zdHJhaW50cz10cnVlXSBhIGJvb2xlYW4gb3IgYW4gYXVkaW8gY29uc3RyYWludHMgb2JqZWN0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1pZGVhbF0gdHlwZSBvZiBjb25zdHJhaW50cyBmb3IgdmlkZW8gd2hlbiB1c2luZyBhIHByZXNldCAoZXhhY3QsbWluLG1heCBvciBpZGVhbClcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbdmlkZW9EZXZpY2VJZF0gdmlkZW8gaW5wdXQgZGV2aWNlIGlkIG9yIGZhY2luZ01vZGVcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbYXVkaW9EZXZpY2VJZF0gYXVkaW8gaW5wdXQgZGV2aWNlIGlkXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdCAqIEB0aHJvd3Mge0Vycm9yfVxuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5IRCBBdWRpb1ZpZGVvIHdpdGggZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5GdWxsIEhEIFZpZGVvIHdpdGhvdXQgYXVkaW8gdXNpbmcgZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCdGSEQnLCBmYWxzZSwgJ2V4YWN0Jyk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKi9cblx0c3RhdGljIGNvbnN0cmFpbnRzICh2aWRlb0NvbnN0cmFpbnRzID0gJ0hEJywgYXVkaW9Db25zdHJhaW50cyA9IHRydWUsIHR5cGUgPSAnaWRlYWwnLCB2aWRlb0RldmljZUlkLCBhdWRpb0RldmljZUlkKSB7XG5cdFx0bGV0IHZpZGVvID0gdmlkZW9Db25zdHJhaW50cztcblx0XHRpZiAodHlwZW9mIHZpZGVvQ29uc3RyYWludHMgPT09ICdzdHJpbmcnKXtcblx0XHRcdGlmKHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSkge1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHByZXNldCA9IHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSxcblx0XHRcdFx0XHRkaW1Db25zdHJhaW50ID0gKGRpbSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoL14obWlufG1heHxleGFjdCkkLy50ZXN0KHR5cGUpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0XHRcdFx0clt0eXBlXSA9IHByZXNldFtkaW1dO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdG1pbjogcHJlc2V0Lm1pbiA/IHByZXNldHNbcHJlc2V0Lm1pbl1bZGltXSA6IHByZXNldFtkaW1dLFxuXHRcdFx0XHRcdFx0XHRpZGVhbDogcHJlc2V0W2RpbV0sXG5cdFx0XHRcdFx0XHRcdG1heDogcHJlc2V0Lm1heCA/IHByZXNldHNbcHJlc2V0Lm1heF1bZGltXSA6IHByZXNldFtkaW1dXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdHZpZGVvID0ge3dpZHRoOiBkaW1Db25zdHJhaW50KCd3JyksIGhlaWdodDogZGltQ29uc3RyYWludCgnaCcpfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBWaWRlbyBSZXNvbHV0aW9uIHByZXNldCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKScpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2aWRlbyA9IF9hc3NpZ25EZXZpY2UodmlkZW8sIHZpZGVvRGV2aWNlSWQpO1xuXG5cdFx0Y29uc3QgYXVkaW8gPSBfYXNzaWduRGV2aWNlKGF1ZGlvQ29uc3RyYWludHMsIGF1ZGlvRGV2aWNlSWQpO1xuXG5cdFx0TG9nLmQoJ01lZGlhI2NvbnN0cmFpbnRzJywge3ZpZGVvLCBhdWRpb30pO1xuXHRcdHJldHVybiB7dmlkZW8sIGF1ZGlvfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHN0cmVhbSBkaXNwbGF5IG5vZGUgZGVwZW5kaW5nIG9uIHN0cmVhbSB0eXBlXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIFRoZSBNZWRpYVN0cmVhbSB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIENvbnRhaW5lciBub2RlIGZvciBzdHJlYW1zXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gcHJldmlvdXMgUHJldmlvdXMgbm9kZSBmb3IgdGhlIHN0cmVhbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZvbHVtZT0uN10gdGhlIGRlZmF1bHQgdm9sdW1lXG5cdCAqIEByZXR1cm4ge0VsZW1lbnR9XG5cdCAqL1xuXHRzdGF0aWMgYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCBjb250YWluZXIsIHByZXZpb3VzLCB2b2x1bWUgPSAuNykge1xuXHRcdGxldCB0YWdOYW1lID0gJyc7XG5cdFx0aWYobWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ3ZpZGVvJztcblx0XHR9IGVsc2UgaWYobWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ2F1ZGlvJztcblx0XHR9XG5cdFx0TG9nLmQoJ01lZGlhI2F0dGFjaFN0cmVhbScsIG1lZGlhU3RyZWFtLCB0YWdOYW1lKTtcblx0XHRpZiAodGFnTmFtZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgX25vZGUgPSBwcmV2aW91cztcblx0XHRcdGlmICghX25vZGUgfHwgX25vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWdOYW1lKSB7XG5cdFx0XHRcdF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblx0XHRcdFx0X25vZGUuYXV0b3BsYXkgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbnRhaW5lcikge1xuXHRcdFx0XHRpZiAocHJldmlvdXMgJiYgcHJldmlvdXMgIT09IF9ub2RlKSB7XG5cdFx0XHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZChfbm9kZSwgcHJldmlvdXMpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFwcmV2aW91cykge1xuXHRcdFx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChfbm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9ub2RlLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtO1xuXHRcdFx0X25vZGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdF9ub2RlLnZvbHVtZSA9IHZvbHVtZTtcblx0XHRcdHJldHVybiBfbm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIHByZXZpb3VzO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpc3QgYXZhaWxhYmxlIGlucHV0IGRldmljZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTx7YXVkaW9pbnB1dDogTWVkaWFEZXZpY2VJbmZvW10sIHZpZGVvaW5wdXQ6IE1lZGlhRGV2aWNlSW5mb1tdfT59XG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIFJlYWNoLm1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHQgKiAgLy8gVmlkZW8gY2FtZXJhc1xuXHQgKiAgY29uc29sZS5sb2coZGV2aWNlcy52aWRlb2lucHV0KTtcblx0ICogIC8vIEF1ZGlvIG1pY3Ncblx0ICogIGNvbnNvbGUubG9nKGRldmljZXMuYXVkaW9pbnB1dCk7XG5cdCAqIH0pO1xuXHQgKi9cblx0c3RhdGljIGRldmljZXMgKCkge1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuXHRcdFx0LnRoZW4oZGV2aWNlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0ZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyW2RldmljZS5raW5kXSkge1xuXHRcdFx0XHRcdFx0cltkZXZpY2Uua2luZF0gPSBbXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cltkZXZpY2Uua2luZF0ucHVzaChkZXZpY2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0TG9nLmQoJ01lZGlhI2RldmljZXMnLCByKTtcblx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZWRpYSNkZXZpY2VzJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29yZS9Vc2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4uL2NvcmUvUm9vbSc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4uL2NvcmUvSW52aXRlJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuLi9jb3JlL1BhcnRpY2lwYW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvcmUvTWVzc2FnZSc7XG5pbXBvcnQgUmVtb3RlIGZyb20gJy4uL2NvcmUvc3RyZWFtL1JlbW90ZSc7XG5pbXBvcnQge0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRUR9IGZyb20gJy4uL2NvcmUvdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSZWFjaCNvbn1cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9SZWFjaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVTRVJfQURERUQgRmlyZWQgd2hlbiBhIG5ldyB1c2VyIGlzIHJlZ2lzdGVyZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVU0VSX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBleGlzdGluZyB1c2VyIGxvZ3MgaW4gb3Igb3V0IG9yIGNoYW5nZXMgaXMgc3RhdHVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVNFUl9SRU1PVkVEIEZpcmVkIHdoZW4gYSB1c2VyIGlzIHVucmVnaXN0ZXJlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQURERUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY3JlYXRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQ0hBTkdFRCBGaXJlZCB3aGVuIGEgcm9vbSBzdGF0dXMgaXMgY2hhbmdpbmdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBST09NX1JFTU9WRUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY2xvc2VkIGRlZmluaXRlbHlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQURERUQgRmlyZWQgd2hlbiBhbiBpbnZpdGUgaXMgcmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQ0hBTkdFRCBGaXJlZCB3aGVuIGFuIGludml0ZSBzdGF0dXMgaXMgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSb29tI29ufVxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzL1Jvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUNJUEFOVF9BRERFRCBGaXJlZCB3aGVuIGEgbmV3IHBhcnRpY2lwYW50IGlzIGFkZGVkIHRvIHRoZSByb29tLiBEb2VzIG5vdCBtZWFuIGhlJ3MgY29ubmVjdGVkIGJ1dCB0aGF0IGhlJ3MgaW52aXRlZCB0b1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQ0lQQU5UX0NIQU5HRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaXMgc3RhdHVzIChlbnRlci9sZWF2ZXMgdGhlIHJvb20pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElDSVBBTlRfUkVNT1ZFRCBGaXJlZCB3aGVuIGEgdXNlciBsZWF2ZXMgZGVmaW5pdGVseSBvciBpcyBiYW5uZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0FEREVEIEZpcmVkIHdoZW4gYSBuZXcgaW5zdGFudCBtZXNzYWdlIGlzIHNlbnQgdG8gdGhlIHJvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBpbnN0YW50IG1lc3NhZ2UgaXMgZWRpdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUVTU0FHRV9SRU1PVkVEIEZpcmVkIHdoZW4gYW4gaW5zdGFudCBtZXNzYWdlIGlzIHJlbW92ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fUFVCTElTSEVEIEZpcmVkIHdoZW4gYSBwYXJ0aWNpcGFudCBwdWJsaXNoZXMgYSBzdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fVU5QVUJMSVNIRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IHN0b3BzIHRoZSBwdWJsaXNoaW5nIG9mIGhpcyBzdHJlYW1cbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBJbnZpdGUjb259XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHMvSW52aXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQUNDRVBURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVKRUNURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0FOQ0VMRUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGNhbmNlbGVkXG4gKi9cblxuLyoqXG4gKiBUaGUgZXZlbnRzIHN1cHBvcnRlZCBieSB7QGxpbmsgUmVtb3RlI29ufS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9TdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNVVRFIEZpcmVkIHdoZW4gdGhlIG11dGUgc3RhdHVzIG9mIHRoZSBzdHJlYW0gY2hhbmdlc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFNJWkUgRmlyZWQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgc3RyZWFtIGNoYW5nZXNcbiAqL1xuXG4vKipcbiAqIFBhdGggY29uZmlndXJhdGlvbiBmb3IgZWFjaCBldmVudFxuICogQGlnbm9yZVxuICogQHR5cGUge3t9fVxuICovXG5jb25zdCBwYXRocyA9IHtcblx0J1VTRVInOiAoKSA9PiAndXNlcnMnLFxuXHQnUk9PTSc6ICgpID0+ICdyb29tcycsXG5cdCdJTlZJVEUnOiB1c2VyID0+IHtcblx0XHRpZighdXNlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBiZSBhdXRoZW50aWNhdGVkIHRvIGxpc3QgdGhlIGludml0ZXMnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gO1xuXHR9LFxuXHQnUEFSVElDSVBBTlQnOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50c2AsXG5cdCdNRVNTQUdFJzogcm9vbSA9PiBgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlc2AsXG5cdCdTVFJFQU0nOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3N0cmVhbXNgXG59O1xuXG4vKipcbiAqIE9iamVjdCB0eXBlIGNvbmZpZ3VyYXRpb24gZm9yIGVhY2ggZXZlbnRcbiAqIEBpZ25vcmVcbiAqIEB0eXBlIHt7fX1cbiAqL1xuY29uc3QgY2xhc3NlcyA9IHtcblx0J1VTRVInOiBVc2VyLFxuXHQnUk9PTSc6IFJvb20sXG5cdCdJTlZJVEUnOiBJbnZpdGUsXG5cdCdQQVJUSUNJUEFOVCc6IFBhcnRpY2lwYW50LFxuXHQnTUVTU0FHRSc6IE1lc3NhZ2UsXG5cdCdTVFJFQU0nOiBSZW1vdGVcbn07XG5cbi8qKlxuICogUHJpdmF0ZSBjbGFzcyB0byBhZGQgc3VwcG9ydCB0ZXN0IG1ldGhvZHNcbiAqIEBjbGFzcyBfRXZlbnRzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIF9FdmVudHMge1xuXHRjb25zdHJ1Y3RvcihrZXlzKSB7XG5cdFx0a2V5cy5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0ga2V5O30pO1xuXHR9XG5cdHN1cHBvcnRzKGV2ZW50KSB7XG5cdFx0aWYoIWV2ZW50IHx8IHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgdGhpc1tldmVudF0gIT09IGV2ZW50LnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQuIFVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzKSl9YCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHRvUGF0aChldmVudCkge1xuXHRcdGlmKHRoaXMuc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aHNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXSB8fCAoKCkgPT4gbnVsbCk7XG5cdFx0fVxuXHR9XG5cdHRvQ2xhc3MoZXZlbnQpIHtcblx0XHRpZih0aGlzLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzZXNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCByZWFjaCA9IG5ldyBfRXZlbnRzKFtcblx0J1VTRVJfQURERUQnLCAnVVNFUl9DSEFOR0VEJywgJ1VTRVJfUkVNT1ZFRCcsXG5cdCdST09NX0FEREVEJywgJ1JPT01fQ0hBTkdFRCcsICdST09NX1JFTU9WRUQnLFxuXHQnSU5WSVRFX0FEREVEJywgJ0lOVklURV9DSEFOR0VEJ1xuXSk7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3Qgcm9vbSA9IG5ldyBfRXZlbnRzKFtcblx0J01FU1NBR0VfQURERUQnLCAnTUVTU0FHRV9DSEFOR0VEJywgJ01FU1NBR0VfUkVNT1ZFRCcsXG5cdCdQQVJUSUNJUEFOVF9BRERFRCcsICdQQVJUSUNJUEFOVF9DSEFOR0VEJywgJ1BBUlRJQ0lQQU5UX1JFTU9WRUQnLFxuXHQnU1RSRUFNX1BVQkxJU0hFRCcsICdTVFJFQU1fVU5QVUJMSVNIRUQnXG5dKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJlYW0gPSBuZXcgX0V2ZW50cyhbJ01VVEUnLCAnU0laRSddKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBpbnZpdGUgPSBuZXcgX0V2ZW50cyhbQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRF0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0V2ZW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9XG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge09OR09JTkcsIEFDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRUR9IGZyb20gJy4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuaW1wb3J0IFJvb20gZnJvbSAnLi9Sb29tJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuXG4vKipcbiAqIFVwZGF0ZVxuICogQHBhcmFtIHtJbnZpdGV9IGludml0ZSBUaGUgaW52aXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIFRoZSBuZXcgc3RhdHVzXG4gKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbj1udWxsXSBUaGUgcmVhc29uIChhIG1lc3NhZ2UpXG4gKiBAcGFyYW0ge29iamVjdH0gW19lbmRlZD1udWxsXVxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxJbnZpdGUsIEVycm9yPn1cbiAqL1xuY29uc3QgdXBkYXRlID0gKGludml0ZSwgc3RhdHVzLCByZWFzb24gPSBudWxsLCBfZW5kZWQgPSBudWxsKSA9PiB7XG5cdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRzdGF0dXMsXG5cdFx0cmVhc29uLFxuXHRcdF9lbmRlZFxuXHR9O1xuXG5cdGlmKGludml0ZS5zdGF0dXMgIT09IE9OR09JTkcpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdUaGlzIGludml0YXRpb24gaGFzIGFscmVhZHkgYmVlbiBhbnN3ZXJlZCcpKTtcblx0fVxuXHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL2ludml0ZXMvJHtpbnZpdGUudG99LyR7aW52aXRlLnVpZH1gLCB2YWx1ZXMpXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0T2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKHByb3AgPT4ge1xuXHRcdFx0XHRpbnZpdGVbcHJvcF0gPSB2YWx1ZXNbcHJvcF07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBSb29tLmdldChpbnZpdGUucm9vbSk7XG5cdFx0fSlcblx0XHQudGhlbihyb29tID0+ICh7cm9vbSwgaW52aXRlfSkpXG5cdFx0LmNhdGNoKExvZy5yKCdJbnZpdGVfdXBkYXRlJykpO1xufTtcblxuLyoqXG4gKiBJbnZpdGF0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludml0ZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhbiBpbnZpdGVcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGxldCB2YWx1ZXMgPSBzbmFwRGF0YTtcblx0XHRpZihzbmFwRGF0YSAmJiBzbmFwRGF0YS52YWwgJiYgdHlwZW9mIHNuYXBEYXRhLnZhbCA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSwge3VpZDogc25hcERhdGEubmFtZSgpLCB0bzogc25hcERhdGEucmVmKCkucGFyZW50KCkubmFtZSgpfSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEludml0ZSdzIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBJbnZpdGUncyBzZW5kZXIgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmZyb20gPSB2YWx1ZXMuZnJvbTtcblx0XHQvKipcblx0XHQgKiBJbnZpdGVlJ3MgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRvID0gdmFsdWVzLnRvO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZCBvZiB0aGUgcm9vbSBhc3NvY2lhdGVkIHRvIHRoZSBpbnZpdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbSA9IHZhbHVlcy5yb29tO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpbnZpdGF0aW9uIHN0YXR1cyA6XG5cdFx0ICogLSBPTkdPSU5HIC0gVGhlIHJlY2VpdmVyIGhhcyBub3QgeWV0IHJlc3BvbmRlZCB0byB0aGUgaW52aXRhdGlvblxuXHRcdCAqIC0gQUNDRVBURUQgLSBUaGUgcmVjZWl2ZXIgaGFzIGFjY2VwdGVkIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogLSBSRUpFQ1RFRCAtIFRoZSByZWNlaXZlciBoYXMgcmVqZWN0ZWQgdGhlIGludml0YXRpb25cblx0XHQgKiAtIENBTkNFTEVEIC0gVGhlIHNlbmRlciBjYW5jZWxlZCB0aGUgaW52aXRhdGlvblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBtZXNzYWdlLiBUaGlzIHdpbGwgYmUgZWl0aGVyIGEgY3VzdG9tIG1lc3NhZ2UgaWYgdGhlIHN0YXR1cyBpcyBPTkdPSU5HIG9yIGEgcmVhc29uIHdoZW4gc3RhdHVzIGlzIENBTkNFTEVEfFJFSkVDVEVELlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50b3BpYyA9IHZhbHVlcy50b3BpYztcblx0XHQvKipcblx0XHQgKiBJbnZpdGUgY3JlYXRpb24gdGltZXN0YW1wXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9jcmVhdGVkID0gdmFsdWVzLl9jcmVhdGVkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBleHBpcmF0aW9uIHRpbWVzdGFtcFxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fZW5kZWQgPSB2YWx1ZXMuX2VuZGVkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBldmVudHMgY2FsbGJhY2tzXG5cdFx0ICogQHR5cGUge3t9fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogSXMgdGhpcyBpbnZpdGF0aW9uIHdhaXRpbmcgZm9yIGEgcmVwbHkgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc09uR29pbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBPTkdPSU5HO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhcyB0aGlzIGludml0YXRpb24gcmVqZWN0ZWQgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc1JlamVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUkVKRUNURUQ7XG5cdH1cblxuXHQvKipcblx0ICogV2FzIHRoaXMgaW52aXRhdGlvbiBhY2NlcHRlZCA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzQWNjZXB0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBBQ0NFUFRFRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBXYXMgdGhpcyBpbnZpdGF0aW9uIGNhbmNlbGVkID9cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IENBTkNFTEVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbmNlbHMgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHNlbmRlciBjYW4gY2FuY2VsIHRoZSBpbnZpdGF0aW9uLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gVGhlIHJlYXNvbiB0aGUgc2VuZGVyIGlzIGNhbmNlbGluZyB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdGNhbmNlbChyZWFzb24pIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIENBTkNFTEVELCByZWFzb24sIERhdGFTeW5jLnRzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlamVjdHMgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHJlY2VpdmVyIGNhbiByZWplY3QgdGhlIGludml0YXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSBUaGUgcmVhc29uIHRoZSByZWNlaXZlciBpcyByZWplY3RpbmcgdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEludml0ZT59XG5cdCAqL1xuXHRyZWplY3QocmVhc29uKSB7XG5cdFx0cmV0dXJuIHVwZGF0ZSh0aGlzLCBSRUpFQ1RFRCwgcmVhc29uLCBEYXRhU3luYy50cygpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBY2NlcHQgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHJlY2VpdmVyIGNhbiBhY2NlcHQgdGhlIGludml0YXRpb24uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdGFjY2VwdCgpIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIEFDQ0VQVEVEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHN0YXR1cyB1cGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyBDYW4gYmU6XG5cdCAqIC0gQUNDRVBURURcblx0ICogLSBSRUpFQ1RFRFxuXHQgKiAtIENBTkNFTEVEXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqL1xuXHRvbihzdGF0dXMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoRXZlbnRzLmludml0ZS5zdXBwb3J0cyhzdGF0dXMpKSB7XG5cdFx0XHQvLyBSZWdpc3RlciBjYWxsYmFja1xuXHRcdFx0aWYgKCF0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW3N0YXR1c10ucHVzaChjYWxsYmFjayk7XG5cdFx0XHQvLyBEZWZpbmVkIGxpc3RlbmVyICYgc3Vic2NyaWJlIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCF0aGlzLl9saXN0ZW5lcikge1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSW52aXRlIHN0YXR1cyB1cGRhdGUgY2FsbGJhY2tcblx0XHRcdFx0ICogQHR5cGUge2Z1bmN0aW9ufVxuXHRcdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhpcy5fbGlzdGVuZXIgPSBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdXBkYXRlZCA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRcdGlmICh1cGRhdGVkICE9PSBudWxsICYmIHVwZGF0ZWQgIT09IHRoaXMuc3RhdHVzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9IHVwZGF0ZWQ7XG5cdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW3VwZGF0ZWRdIHx8IFtdKS5mb3JFYWNoKGNiID0+IHtcblx0XHRcdFx0XHRcdFx0Y2IodGhpcyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdERhdGFTeW5jLm9uKGBfL2ludml0ZXMvJHt0aGlzLnRvfS8ke3RoaXMudWlkfS9zdGF0dXNgLCAndmFsdWUnLCB0aGlzLl9saXN0ZW5lci5iaW5kKHRoaXMpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYWxsIHN0YXR1cyBjaGFuZ2UgZXZlbnRzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqL1xuXHRvblN0YXR1c0NoYW5nZShjYWxsYmFjaykge1xuXHRcdFtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEXS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdHRoaXMub24oZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbi1yZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHN0YXR1cyB1cGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0dXNdIENhbiBiZTpcblx0ICogLSBBQ0NFUFRFRFxuXHQgKiAtIFJFSkVDVEVEXG5cdCAqIC0gQ0FOQ0VMRURcblx0ICogLSBudWxsIFRoaXMgd2lsbCB1bi1yZWdpc3RlciBhbGwgY2FsbGJhY2tzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cblx0ICovXG5cdG9mZihzdGF0dXMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoIXN0YXR1cykge1xuXHRcdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdFx0fSBlbHNlIGlmKHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdKSB7XG5cdFx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0XHRjb25zdCBpZHggPSB0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXS5maW5kSW5kZXgoY2IgPT4gY2IgPT09IGNhbGxiYWNrKTtcblx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZighW0NBTkNFTEVELCBBQ0NFUFRFRCwgUkVKRUNURURdLnNvbWUoZXZlbnQgPT4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSAmJiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdLmxlbmd0aCA+IDApKXtcblx0XHRcdERhdGFTeW5jLm9mZihgXy9pbnZpdGVzLyR7dGhpcy50b30vJHt0aGlzLnVpZH0vc3RhdHVzYCwgJ3ZhbHVlJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVuLXJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGFsbCBzdGF0dXMgY2hhbmdlIGV2ZW50c1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXG5cdCAqL1xuXHRvZmZTdGF0dXNDaGFuZ2UoY2FsbGJhY2spIHtcblx0XHRpZighY2FsbGJhY2spIHtcblx0XHRcdHRoaXMub2ZmKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEXS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdFx0dGhpcy5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgdGhlIGludml0YXRpb24gJiBhZGQgdGhlIHVzZXIgdG8gdGhlIHBhcnRpY2lwYW50cyBsaXN0XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7VXNlcn0gaW52aXRlZSBUaGUgdXNlciB0byBpbnZpdGVcblx0ICogQHBhcmFtIHtSb29tfSByb29tIFRoZSByb29tIHRvIGludml0ZSB0aGUgdXNlciB0b1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIEEgbWVzc2FnZSBmb3IgdGhlIGludml0ZWVcblx0ICovXG5cdHN0YXRpYyBzZW5kKGludml0ZWUsIHJvb20sIG1lc3NhZ2UgPSBudWxsKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzZW5kIGFuIGludml0ZS4nKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52aXRlTWV0YURhdGEgPSB7XG5cdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdHJvb206IHJvb20udWlkLFxuXHRcdFx0c3RhdHVzOiBPTkdPSU5HLFxuXHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKCksXG5cdFx0XHR0b3BpYzogbWVzc2FnZVxuXHRcdH07XG5cblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9pbnZpdGVzLyR7aW52aXRlZS51aWR9YCwgaW52aXRlTWV0YURhdGEpXG5cdFx0XHQudGhlbihpbnZpdGVSZWYgPT4ge1xuXHRcdFx0XHRjb25zdCBpbnZpdGVJZCA9IGludml0ZVJlZi5uYW1lKCk7XG5cdFx0XHRcdHJldHVybiBuZXcgSW52aXRlKE9iamVjdC5hc3NpZ24oe3VpZDogaW52aXRlSWQsIHRvOiBpbnZpdGVlLnVpZH0sIGludml0ZU1ldGFEYXRhKSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdJbnZpdGUjc2VuZCcpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvSW52aXRlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQgUm9vbSBmcm9tICcuL1Jvb20nO1xuaW1wb3J0IERldmljZSBmcm9tICcuL0RldmljZSc7XG5pbXBvcnQge0NPTk5FQ1RFRCwgTk9UX0NPTk5FQ1RFRH0gZnJvbSAnLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG5sZXQgaW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cbi8qKlxuICogVXNlciBpbmZvcm1hdGlvbnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB1c2VyXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8b2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSBzbmFwRGF0YS5uYW1lKCk7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIGRpc3BsYXkgbmFtZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5uYW1lID0gdmFsdWVzLm5hbWU7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIHN0YXR1c1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIFVzZXIncyBsYXN0IGtub3cgY29ubmVjdGlvbiB0c1xuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0U2VlbiA9IHZhbHVlcy5sYXN0U2Vlbjtcblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaXMgYW4gYW5vbnltb3VzIHVzZXJcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLmFub255bW91cyA9IC9eYW5vbnltb3VzLy50ZXN0KHRoaXMudWlkKTtcblx0XHQvLyBUT0RPICNGZWF0OiBBZGQgJ2V4dHJhJyBwcm9wZXJ0eSBmb3IgdW5yZXN0cmljdGVkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gP1xuXHR9XG5cblx0LyoqXG5cdCAqIEludml0ZSBhIHVzZXIgZGlyZWN0bHkuIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgUm9vbSwgbG9nIHlvdSBpbiBpdCAmIGludml0ZSB0aGUgdXNlci5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSBhIG1lc3NhZ2UgdG8gYWRkIHRvIHRoZSBpbnZpdGVcblx0ICogQHJldHVybiB7UHJvbWlzZTx7cm9vbTogUm9vbSwgaW52aXRlOiBJbnZpdGV9LCBFcnJvcj59XG5cdCAqL1xuXHRpbnZpdGUobWVzc2FnZSkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gaW52aXRlIGFub3RoZXIgVXNlci4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBSb29tLmNyZWF0ZShgJHtjYWNoZS51c2VyLnVpZH0tJHt0aGlzLnVpZH1gKVxuXHRcdFx0LnRoZW4ocm9vbSA9PiB7XG5cdFx0XHRcdHJldHVybiByb29tLmludml0ZShbdGhpc10sIG51bGwsIG1lc3NhZ2UpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge3Jvb206IGRhdGEucm9vbSwgaW52aXRlOiBkYXRhLmludml0ZXNbMF19O1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignVXNlcn5pbnZpdGUnKSk7XG5cdH1cblxuXHQvKipcblx0ICogTGlzdCBVc2VycydzIGRldmljZXMuIE9ubHkgZm9yIGN1cnJlbnQgdXNlci5cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHJldHVybiB7UHJvbWlzZTxEZXZpY2VbXSwgRXJyb3I+fVxuXHQgKi9cblx0ZGV2aWNlcygpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdChgXy9kZXZpY2VzLyR7dGhpcy51aWR9YCwgRGV2aWNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHRoZSBjdXJyZW50IHVzZXJcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBUaGUgdXNlcidzIHVpZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSB1c2VyJ3MgZGlzcGxheSBuYW1lXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXIsIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBpbml0ICh1aWQsIG5hbWUpIHtcblx0XHRpZighaW5pdGlhbGl6aW5nKSB7XG5cdFx0XHRpbml0aWFsaXppbmcgPSB0cnVlO1xuXHRcdFx0Y29uc3QgZCA9IHtzdGF0dXM6IENPTk5FQ1RFRCwgbGFzdFNlZW46IERhdGFTeW5jLnRzKCl9O1xuXHRcdFx0aWYobmFtZSkge1xuXHRcdFx0XHRPYmplY3QuYXNzaWduKGQsIHtuYW1lfSk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgZGV2aWNlSWQgPSBXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2UuZ2V0KHVpZCk7XG5cdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGB1c2Vycy8ke3VpZH1gLCBkKVxuXHRcdFx0XHQvLyBSZWdpc3RlciBjdXJyZW50IGRldmljZVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZGV2aWNlTWV0YWRhdGEgPSB7XG5cdFx0XHRcdFx0XHRzdGF0dXM6IENPTk5FQ1RFRCxcblx0XHRcdFx0XHRcdHNkazoge1xuXHRcdFx0XHRcdFx0XHRyZWFjaDogU0RLX1ZFUlNJT04sXG5cdFx0XHRcdFx0XHRcdHdlYmNvbTogV2ViY29tLlNES19WRVJTSU9OXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpZihkZXZpY2VJZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy9kZXZpY2VzLyR7dWlkfS8ke2RldmljZUlkfWAsIGRldmljZU1ldGFkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goYF8vZGV2aWNlcy8ke3VpZH1gLCBkZXZpY2VNZXRhZGF0YSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIFNhdmUgZGV2aWNlXG5cdFx0XHRcdC50aGVuKGRldmljZVJlZiA9PiB7XG5cdFx0XHRcdFx0aWYgKCFkZXZpY2VJZCkge1xuXHRcdFx0XHRcdFx0ZGV2aWNlSWQgPSBkZXZpY2VSZWYubmFtZSgpO1xuXHRcdFx0XHRcdFx0V2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLnNldCh1aWQsIGRldmljZUlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FjaGUuZGV2aWNlID0gZGV2aWNlSWQ7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIEFkZCBvbkRpc2Nvbm5lY3QgYWN0aW9uc1xuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gRGlzY29ubmVjdCBkZXZpY2Vcblx0XHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vZGV2aWNlcy8ke3VpZH0vJHtkZXZpY2VJZH0vc3RhdHVzYCkuc2V0KE5PVF9DT05ORUNURUQpO1xuXHRcdFx0XHRcdC8vIFVwZGF0ZSB1c2VyIHN0YXR1c1xuXHRcdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgdXNlcnMvJHt1aWR9YCkudXBkYXRlKHtcblx0XHRcdFx0XHRcdHN0YXR1czogTk9UX0NPTk5FQ1RFRCxcblx0XHRcdFx0XHRcdGxhc3RTZWVuOiBEYXRhU3luYy50cygpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIEdldCB1c2VyXG5cdFx0XHRcdC50aGVuKCgpID0+IFVzZXIuZ2V0KHVpZCkpXG5cdFx0XHRcdC50aGVuKHVzZXIgPT4ge1xuXHRcdFx0XHRcdGluaXRpYWxpemluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHJldHVybiB1c2VyO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdFx0TG9nLmUoZSk7XG5cdFx0XHRcdFx0aW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIFVzZXIuZ2V0KHVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogRGlzY29ubmVjdCB0aGUgY3VycmVudCB1c2VyXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7VXNlcn0gdXNlciBUaGUgY3VycmVudCB1c2VyXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0c3RhdGljIGRpc2Nvbm5lY3QodXNlcikge1xuXHRcdC8vIENhbmNlbCBvbkRpc2Nvbm5lY3Rcblx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vZGV2aWNlcy8ke3VzZXIudWlkfS8ke2NhY2hlLmRldmljZX0vc3RhdHVzYCkuY2FuY2VsKCk7XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGB1c2Vycy8ke3VzZXIudWlkfWApLmNhbmNlbCgpO1xuXG5cdFx0aWYodXNlci5hbm9ueW1vdXMpIHtcblx0XHRcdHJldHVybiBEYXRhU3luYy5yZW1vdmUoYF8vZGV2aWNlcy8ke3VzZXIudWlkfWApXG5cdFx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLmdldChgXy9pbnZpdGVzLyR7dXNlci51aWR9YCkpXG5cdFx0XHRcdC50aGVuKGludml0ZXMgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGludml0ZUlkcyA9IFtdO1xuXHRcdFx0XHRcdGludml0ZXMuZm9yRWFjaChpbnZpdGUgPT4ge1xuXHRcdFx0XHRcdFx0aW52aXRlSWRzLnB1c2goaW52aXRlLm5hbWUoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKGludml0ZUlkcy5tYXAoaW52aXRlSWQgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL2ludml0ZXMvJHt1c2VyLnVpZH0vJHtpbnZpdGVJZH1gKSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBUT0RPIHJlZmFjdG9yIGRhdGEgbW9kZWwgZm9yIGludml0ZXMgc28gd2UgY2FuIGRlbGV0ZSBfL2ludml0ZXMvJHt1c2VyLnVpZH1cblx0XHRcdFx0Ly8gLnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGB1c2Vycy8ke3VzZXIudWlkfWApKVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0V2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLnJlbW92ZSh1c2VyLnVpZCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChMb2cucignVXNlciNhbm9ueW1vdXNfZGlzY29ubmVjdCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGFTeW5jLnNldChgXy9kZXZpY2VzLyR7dXNlci51aWR9LyR7Y2FjaGUuZGV2aWNlfS9zdGF0dXNgLCBOT1RfQ09OTkVDVEVEKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMuZ2V0KGBfL2RldmljZXMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdC50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0XHQvLyBPbmx5IGNoYW5nZSB1c2VyJ3Mgc3RhdHVzIGlmIG5vIG90aGVyIGRldmljZSBjb25uZWN0ZWRcblx0XHRcdFx0Y29uc3QgaGFzQ29ubmVjdGVkRGV2aWNlcyA9IGRldmljZXMuZm9yRWFjaChkZXZpY2UgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAobmV3IFJlZ0V4cChgXiR7Q09OTkVDVEVEfSRgKSkudGVzdChkZXZpY2UudmFsKCkuc3RhdHVzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmKCFoYXNDb25uZWN0ZWREZXZpY2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgdXNlcnMvJHt1c2VyLnVpZH1gLCB7c3RhdHVzOiBOT1RfQ09OTkVDVEVEfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdVc2VyI2Rpc2Nvbm5lY3QnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgdXNlciBieSBpdHMgdWlkXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSB1c2VyJ3MgdWlkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXIsIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBnZXQodWlkKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmdldChgdXNlcnMvJHt1aWR9YClcblx0XHQudGhlbihzbmFwRGF0YSA9PiBzbmFwRGF0YSA/IG5ldyBVc2VyKHNuYXBEYXRhKSA6IG51bGwpXG5cdFx0LmNhdGNoKExvZy5yKCdVc2VyI2dldCcpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvVXNlci5qcyIsIi8qKlxuICogVGhlIGF2YWlsYWJsZSBzdHJlYW0gdHlwZXNcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFN0cmVhbVR5cGVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVVESU89J2F1ZGlvJyAtIEF1ZGlvIGNvbW11bmljYXRpb24gc2VydmljZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZJREVPPSd2aWRlbycgLSBWaWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBVURJT19WSURFTz0nYXVkaW8tdmlkZW8nIC0gQXVkaW8gYW5kIHZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNDUkVFTl9TSEFSSU5HPSdzY3JlZW4tc2hhcmluZycgLSBTY3JlZW4tc2hhcmluZyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqL1xuXG4vKipcbiogQXVkaW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgQVVESU8gPSAnYXVkaW8nO1xuLyoqXG4qIFZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IFZJREVPID0gJ3ZpZGVvJztcbi8qKlxuKiBBdWRpbyBhbmQgdmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgQVVESU9fVklERU8gPSAnYXVkaW8tdmlkZW8nO1xuLyoqXG4qIFNjcmVlbi1zaGFyaW5nIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBTQ1JFRU5fU0hBUklORyA9ICdzY3JlZW4tc2hhcmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtBVURJTywgVklERU8sIEFVRElPX1ZJREVPLCBTQ1JFRU5fU0hBUklOR307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMuanMiLCJpbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbi8qKlxuICogSW5zdGFudCBNZXNzYWdlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbWVzc2FnZVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fE9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJvb21JZCBUaGUgbWVzc2FnZSdzIHJvb20gaWRcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhLCByb29tSWQpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIG1lc3NhZ2UgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbUlkID0gcm9vbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBtZXNzYWdlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRleHQgPSB2YWx1ZXMudGV4dDtcblx0XHQvKipcblx0XHQgKiBUaGUgbWVzc2FnZSBzZW5kZXJcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuZnJvbSA9IHZhbHVlcy5mcm9tO1xuXHRcdC8qKlxuXHRcdCAqIEpvaW5lZCBkYXRlXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9jcmVhdGVkID0gdmFsdWVzLl9jcmVhdGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEVkaXQgdGhlIHRleHQgbWVzc2FnZS4gT25seSB0aGUgc2VuZGVyIG9yIG1vZGVyYXRvci9vd25lciBvZiB0aGUgcm9vbSBjYW4gZWRpdCBhIG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUZXh0IFRoZSBuZXcgbWVzc2FnZVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxNZXNzYWdlPn1cblx0ICovXG5cdGVkaXQobmV3VGV4dCkge1xuXHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYC9yb29tcy8ke3RoaXMucm9vbUlkfS9tZXNzYWdlcy8ke3RoaXMudWlkfWAsIHt0ZXh0OiBuZXdUZXh0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0dGhpcy50ZXh0ID0gbmV3VGV4dDtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZXNzYWdlfmVkaXQnKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSB0ZXh0IG1lc3NhZ2UuIE9ubHkgdGhlIHNlbmRlciBvciBtb2RlcmF0b3Ivb3duZXIgb2YgdGhlIHJvb20gY2FuIHJlbW92ZSBhIG1lc3NhZ2UuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0cmVtb3ZlKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5yZW1vdmUoYC9yb29tcy8ke3RoaXMucm9vbUlkfS9tZXNzYWdlcy8ke3RoaXMudWlkfWApXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ01lc3NhZ2V+cmVtb3ZlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7Um9vbX0gcm9vbSBUaGUgcm9vbSB0byBzZW5kIHRoZSBtZXNzYWdlIHRvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBtZXNzYWdlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZT59XG5cdCAqL1xuXHRzdGF0aWMgc2VuZChyb29tLCB0ZXh0KSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0Nhbm5vdCBzZW5kIGEgbWVzc2FnZSB0byB0aGUgUm9vbSB3aXRob3V0IGEgVXNlciBiZWluZyBsb2dnZWQgaW4uJykpO1xuXHRcdH1cblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0ZnJvbTogY2FjaGUudXNlci51aWQsXG5cdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKSxcblx0XHRcdHRleHRcblx0XHR9O1xuXHRcdHJldHVybiBEYXRhU3luYy5wdXNoKGBfL3Jvb21zLyR7cm9vbS51aWR9L21lc3NhZ2VzYCwgZGF0YSlcblx0XHRcdC50aGVuKHB1c2hSZWYgPT4gRGF0YVN5bmMuZ2V0KGBfL3Jvb21zLyR7cm9vbS51aWR9L21lc3NhZ2VzLyR7cHVzaFJlZi5uYW1lKCl9YCkpXG5cdFx0XHQudGhlbihzbmFwRGF0YSA9PiBuZXcgTWVzc2FnZShzbmFwRGF0YSwgcm9vbS51aWQpKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZXNzYWdlI3NlbmQnKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL01lc3NhZ2UuanMiLCIvKipcbiAqIHtAbGluayBSb29tfSBwYXJ0aWNpcGFudFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNpcGFudCB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBwYXJ0aWNpcGFudFxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fE9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCkpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBwYXJ0aWNpcGFudCB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gc25hcERhdGEubmFtZSgpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBQYXJ0aWNpcGFudCdzIHJvbGUuIENhbiBiZTpcblx0XHQgKiAtIE9XTkVSOiB0aGUgb3duZXIvY3JlYXRvciBvZiB0aGUge0BsaW5rIFJvb219XG5cdFx0ICogLSBNT0RFUkFUT1I6IGEgcGFydGljaXBhbnQgd2l0aCB7QGxpbmsgUm9vbX0gbWFuYWdlbWVudCBSaWdodHNcblx0XHQgKiAtIE5PTkU6IGJhc2ljIHBhcnRpY2lwYW50XG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJvbGUgPSB2YWx1ZXMucm9sZTtcblx0XHQvKipcblx0XHQgKiBUaGUgcGFydGljaXBhbnQgc3RhdHVzIENhbiBiZTpcblx0XHQgKiAtIE5PVF9DT05ORUNURUQ6IHRoZSBwYXJ0aWNpcGFudCBkaWQgbm90IGFjY2VwdCB0aGUgaW52aXRhdGlvbiB5ZXQgYW5kL29yIGRpZCBub3Qgam9pbiB0aGUge0BsaW5rIFJvb219IHlldFxuXHRcdCAqIC0gQ09OTkVDVEVEOiB0aGUgcGFydGljaXBhbnQgaXMgaW4gdGhlIHtAbGluayBSb29tfVxuXHRcdCAqIC0gV0FTX0NPTk5FQ1RFRDogdGhlIHBhcnRpY2lwYW50IGxlZnQgdGhlIHtAbGluayBSb29tfVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIEpvaW5lZCBkYXRlXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9qb2luZWQgPSB2YWx1ZXMuX2pvaW5lZDtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvUGFydGljaXBhbnQuanMiLCJpbXBvcnQgY2FjaGUgZnJvbSAnLi4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuLi91dGlsL0xvZyc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vLi4vZGVmaW5pdGlvbnMvRXZlbnRzJztcblxuLyoqXG4gKiBBIHB1Ymxpc2hlZCBTdHJlYW1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3RlIHtcblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKHZhbHVlcykge1xuXHRcdExvZy5kKCdSZW1vdGV+bmV3JywgdmFsdWVzKTtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoZSByb29tIHRoZSBzdHJlYW0gaXMgcHVibGlzaGVkIGluXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJvb21JZCA9IHZhbHVlcy5yb29tSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGlzIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSB2YWx1ZXMudWlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhlIHB1Ymxpc2hlciBvZiB0aGUgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmZyb20gPSB2YWx1ZXMuZnJvbTtcblx0XHQvKipcblx0XHQgKiBUaGUgdHlwZSBvZiB0aGUgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnR5cGUgPSB2YWx1ZXMudHlwZTtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuZGV2aWNlID0gdmFsdWVzLmRldmljZTtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaGVpZ2h0ID0gdmFsdWVzLmhlaWdodDtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMud2lkdGggPSB2YWx1ZXMud2lkdGg7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGxvY2FsIERPTSBjb250YWluZXIgZWxlbWVudCB3aGVyZSB0aGUge0BsaW5rIExvY2Fsfm1lZGlhfSBpcyBkaXNwbGF5ZWRcblx0XHQgKiBAdHlwZSB7RWxlbWVudH1cblx0XHQgKi9cblx0XHR0aGlzLmNvbnRhaW5lciA9IGNhY2hlLmNvbmZpZy5yZW1vdGVTdHJlYW1Db250YWluZXI7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3thdWRpbzogYm9vbGVhbiwgdmlkZW86IGJvb2xlYW59fVxuXHRcdCAqL1xuXHRcdHRoaXMubXV0ZWQgPSBPYmplY3QuYXNzaWduKHthdWRpbzogZmFsc2UsIHZpZGVvOiBmYWxzZX0sIHZhbHVlcy5tdXRlZCk7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBjYWxsYmFja3MgZm9yIG11dGUgc3RhdHVzIGNoYW5nZVxuXHRcdCAqIEB0eXBlIHt7TVVURTogZnVuY3Rpb25bXX19XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0XHQvKipcblx0XHQgKiBQZWVyQ29ubmVjdGlvbnMgYXNzb2NpYXRlZCB0byB0aGlzIHJlbW90ZSBzdHJlYW1cblx0XHQgKiBAdHlwZSB7UGVlckNvbm5lY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5wZWVyQ29ubmVjdGlvbiA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogRE9NIGVsZW1lbnQgd2hlcmUgdGhlIE1lZGlhU3RyZWFtIGlzIGRpc3BsYXllZFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH1cblx0ICovXG5cdGdldCBub2RlKCkge1xuXHRcdHJldHVybiB0aGlzLnBlZXJDb25uZWN0aW9uID8gdGhpcy5wZWVyQ29ubmVjdGlvbi5ub2RlIDogbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdWJzY3JpYmUgdG8gdGhlIHN0cmVhbVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IFtyZW1vdGVTdHJlYW1Db250YWluZXJdIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uIENhbiBiZSBudWxsIGlmIGFscmVhZHkgc3BlY2lmaWVkIGluIFJlYWNoQ29uZmlnLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHN1YnNjcmliZShyZW1vdGVTdHJlYW1Db250YWluZXIpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIHN1YnNjcmliZSB0byBhIFJvb21cXCdzIHN0cmVhbS4nKSk7XG5cdFx0fVxuXHRcdC8vIFRPRE86IFRlc3QgaWYgbm90IGFscmVhZHkgc3Vic2NyaWJlZCA/XG5cdFx0dGhpcy5jb250YWluZXIgPSByZW1vdGVTdHJlYW1Db250YWluZXIgfHwgY2FjaGUuY29uZmlnLnJlbW90ZVN0cmVhbUNvbnRhaW5lcjtcblx0XHRMb2cuZCgnUmVtb3RlfnN1YnNjcmliZScsIHRoaXMuY29udGFpbmVyKTtcblx0XHRyZXR1cm4gY2FjaGUucGVlckNvbm5lY3Rpb25zLmFuc3dlcih0aGlzLCB0aGlzLmNvbnRhaW5lcilcblx0XHRcdC50aGVuKHBjID0+IHt0aGlzLnBlZXJDb25uZWN0aW9uID0gcGM7fSlcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gLCB7XG5cdFx0XHRcdHRvOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKClcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdGxldCBzdWJzY3JpYmVkID0gZmFsc2U7XG5cdFx0XHRcdERhdGFTeW5jLm9uKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gLCAndmFsdWUnLCBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdFx0TG9nLmQoJ1JlbW90ZX51cGRhdGVkJywgdmFsdWVzKTtcblx0XHRcdFx0XHRpZih2YWx1ZXMpIHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSB0eXBlXG5cdFx0XHRcdFx0XHR0aGlzLnR5cGUgPSB2YWx1ZXMudHlwZTtcblx0XHRcdFx0XHRcdC8vdXBkYXRlIHN0cmVhbSBzaXplXG5cdFx0XHRcdFx0XHRjb25zdCBoZWlnaHQgPSB2YWx1ZXMuaGVpZ2h0O1xuXHRcdFx0XHRcdFx0Y29uc3Qgd2lkdGggPSB2YWx1ZXMud2lkdGg7XG5cdFx0XHRcdFx0XHRpZigoaGVpZ2h0IHx8IHdpZHRoKSAmJiAoaGVpZ2h0ICE9PSB0aGlzLmhlaWdodCB8fCB3aWR0aCAhPT0gdGhpcy5oZWlnaHQpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gdmFsdWVzLmhlaWdodDtcblx0XHRcdFx0XHRcdFx0dGhpcy53aWR0aCA9IHZhbHVlcy53aWR0aDtcblx0XHRcdFx0XHRcdFx0TG9nLncodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uU0laRV0pO1xuXHRcdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uU0laRV0gfHwgW10pLmZvckVhY2goY2IgPT4gY2IodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBtdXRlIHN0YXR1c1xuXHRcdFx0XHRcdFx0Y29uc3QgbXV0ZWQgPSB2YWx1ZXMubXV0ZWQ7XG5cdFx0XHRcdFx0XHRpZihtdXRlZCAmJiAobXV0ZWQuYXVkaW8gIT09IHRoaXMubXV0ZWQuYXVkaW8gfHwgbXV0ZWQudmlkZW8gIT09IHRoaXMubXV0ZWQudmlkZW8pKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubXV0ZWQgPSBtdXRlZDtcblx0XHRcdFx0XHRcdFx0TG9nLncodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uTVVURV0pO1xuXHRcdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uTVVURV0gfHwgW10pLmZvckVhY2goY2IgPT4gY2IodGhpcy5tdXRlZCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlZCA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKHN1YnNjcmliZWQpIHtcblx0XHRcdFx0XHRcdExvZy5pKCdSZW1vdGUjcmVtb3ZlZCcsIHRoaXMpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2xvc2UodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlbW90ZX5zdWJzY3JpYmUnKSk7XG5cdH1cblxuXHQvKipcblx0ICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgc3RyZWFtXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0dW5TdWJzY3JpYmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Nsb3NlKGZhbHNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZSB0aGUgcmVtb3RlIFN0cmVhbVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbW90ZSBDbG9zZSBpcyBpbml0aWF0ZWQgYnkgcHVibGlzaGVyXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2Nsb3NlKHJlbW90ZSkge1xuXHRcdC8vIENhbmNlbCBvbkRpc2Nvbm5lY3Rcblx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCkuY2FuY2VsKCk7XG5cdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgdG8gc3RyZWFtIG1vZGlmaWNhdGlvbnNcblx0XHREYXRhU3luYy5vZmYoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfWAsICd2YWx1ZScpO1xuXHRcdC8vIFVuLXN1YnNjcmliZVxuXHRcdCFyZW1vdGUgJiYgRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9LyR7Y2FjaGUuZGV2aWNlfWApO1xuXHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZS5wZWVyQ29ubmVjdGlvbnMuY2xvc2UodGhpcy51aWQsIHRoaXMuZGV2aWNlKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvU3RyZWFtfSlcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnRcblx0ICovXG5cdG9uKGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdGlmKEV2ZW50cy5zdHJlYW0uc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRpZighdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gW107XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lICh7QGxpbmsgRXZlbnRzL1N0cmVhbX0pXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnRcblx0ICovXG5cdG9mZihldmVudCwgY2FsbGJhY2spIHtcblx0XHRpZighZXZlbnQpIHtcblx0XHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHRcdH0gZWxzZSBpZihFdmVudHMuc3RyZWFtLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0aWYoIWNhbGxiYWNrKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdLmZpbHRlcihjYiA9PiBjYiAhPT0gY2FsbGJhY2spO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG5cdCAqL1xuXHR1cGRhdGUodmFsdWVzKSB7XG5cdFx0T2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0gdmFsdWVzW2tleV07fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9SZW1vdGUuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHticm93c2VyRGV0YWlscywgYnJvd3NlclNoaW19IGZyb20gJ3dlYnJ0Yy1hZGFwdGVyJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbi8qKlxuICogVGhlIGN1cnJlbnQgYnJvd3NlcidzIGluZm9zXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCcm93c2VyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSAtIGN1cnJlbnQgYnJvd3NlcidzIG5hbWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdmVyc2lvbl0gLSBjdXJyZW50IGJyb3dzZXIncyB2ZXJzaW9uXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21pblZlcnNpb25dIC0gY3VycmVudCBicm93c2VyJ3MgbWluaW11bSBzdXBwb3J0ZWQgdmVyc2lvblxuICogQHByb3BlcnR5IHtib29sZWFufSBjb21wYXRpYmxlIC0gaXMgY3VycmVudCBicm93c2VyIHN1cHBvcnRlZCA/XG4gKi9cbmV4cG9ydCBjb25zdCBicm93c2VyID0gT2JqZWN0LmFzc2lnbih7XG5cdGNvbXBhdGlibGU6ICEvXFxzLy50ZXN0KGJyb3dzZXJEZXRhaWxzLmJyb3dzZXIpICYmXG5cdFx0KCFicm93c2VyRGV0YWlscy5taW5WZXJzaW9uIHx8IGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPj0gYnJvd3NlckRldGFpbHMubWluVmVyc2lvbilcbn0sIGJyb3dzZXJEZXRhaWxzKTtcblxuY29uc3QgdmVyc2lvbiA9IGBSZWFjaCB2JHtTREtfVkVSU0lPTn0gfCBTY2hlbWEgJHtTQ0hFTUFfVkVSU0lPTn0gfCBXZWJjb20gdiR7V2ViY29tLlNES19WRVJTSU9OfWA7XG5sZXQgbWVzc2FnZSA9ICcnO1xuaWYoYnJvd3Nlci52ZXJzaW9uID09PSBudWxsKSB7XG5cdG1lc3NhZ2UgPSAnVW5zdXBwb3J0ZWQgYnJvd3NlcjogYnJvd3NlciBtdXN0IHN1cHBvcnQgV2ViUlRDIFBlZXItdG8tcGVlciBjb25uZWN0aW9ucyB0byB1c2UgUmVhY2gnO1xufSBlbHNlIGlmIChicm93c2VyLm1pblZlcnNpb24gJiYgYnJvd3Nlci5taW5WZXJzaW9uID4gYnJvd3Nlci52ZXJzaW9uKSB7XG5cdG1lc3NhZ2UgPSBgVW5zdXBwb3J0ZWQgYnJvd3NlcjogYnJvd3NlciBpcyBvdXRkYXRlZCwgdXBkYXRlIHRvIGxhdGVzdCB2ZXJzaW9uICgke2Jyb3dzZXIubWluVmVyc2lvbn0rKWA7XG59IGVsc2UgaWYoIWJyb3dzZXJTaGltKXtcblx0bWVzc2FnZSA9ICdObyBzaGltIGZvciB5b3VyIGJyb3dzZXIuIFRoZXJlIG1pZ2h0IGEgcHJvYmxlbSB3aXRoIHlvdXIgcGFja2FnZS4nO1xufVxuXG4vLyBMb2cgYnJvd3NlciBzdGF0dXMgJiBTREtzIHZlcnNpb25zIG9uIGxvYWRcbmxldCBhcmdzID0gW2Ake3ZlcnNpb259ICR7bWVzc2FnZX1gXTtcbmlmKC9eKGNocm9tZXxmaXJlZm94KSQvLnRlc3QoYnJvd3Nlci5icm93c2VyKSkge1xuXHRhcmdzID0gW1xuXHRcdGAlYyAke3ZlcnNpb259ICVjICR7bWVzc2FnZX1gLFxuXHRcdGBiYWNrZ3JvdW5kOiAke2Jyb3dzZXIuY29tcGF0aWJsZSA/ICcjZjUwJyA6ICdyZWQnfTsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkYCxcblx0XHRgY29sb3I6ICR7YnJvd3Nlci5jb21wYXRpYmxlID8gJ2luaGVyaXQnIDogJ3JlZCd9YFxuXHRdO1xufVxuY29uc29sZS5sb2coLi4uYXJncyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmaW5pdGlvbnMvQnJvd3Nlci5qcyIsIi8qKlxuICogVmlkZW8gY29kZWMgcHJlc2V0cyB0byB1c2UgZm9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDb2RlYy92aWRlb1xuICogQHByb3BlcnR5IHtSZWdFeHB9IFZQOCBWUDggaXMgdGhlIG9ubHkgdmlkZW8gY29kZWMgb2ZmaWNpYWxseSBzdXBwb3J0ZWQgYnkgV2ViUlRDXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gVlA5IFZQOCdzIHN1Y2Nlc3Nvci5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBIMjY0IE1QRUctNCBwYXJ0IDEwLiBPbmx5IEZpcmVmb3guXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gVlAxMCBTdWl0ZWQgZm9yIFVIRCB2aWRlby4gTm8gc3VwcG9ydCB5ZXRcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBIMjY1IEguMjY0J3Mgc3VjY2Vzc29yLiBObyBzdXBwb3J0IHlldFxuICovXG5leHBvcnQgY29uc3QgdmlkZW8gPSB7XG5cdCdWUDgnOiAvXnZwOC9pLFxuXHQnVlA5JzogL152cDkvaSxcblx0J1ZQMTAnOiAvXnZwMTAvaSxcblx0J0gyNjQnOiAvXmgyNjQvaSxcblx0J0gyNjUnOiAvXmgyNjUvaVxufTtcblxuLyoqXG4gKiBBdWRpbyBjb2RlYyBwcmVzZXRzIHRvIHVzZSBmb3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENvZGVjL2F1ZGlvXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gT1BVUyBPcHVzIGF1ZGlvIGNvZGVjIHtAbGluayBodHRwOi8vb3B1cy1jb2RlYy5vcmcvfS4gT25seSBjaG9pY2UgZm9yIGhpZ2gtcXVhbGl0eSBhdWRpby5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBHNzIyIEcuNzIyIGF1ZGlvIGNvZGVjXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gRzcxMSBHLjcxMSBhdWRpbyBjb2RlY1xuICogQHByb3BlcnR5IHtSZWdFeHB9IElTQUMgaVNBQyBhdWRpbyBjb2RlYy4gR29vZCBmb3Igdm9pY2UgZGF0YSwgYnV0IG5vdCBzdWl0YWJsZSBmb3IgaGlnaC1xdWFsaXR5IGF1ZGlvIHN0cmVhbXMuXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSVNBQ18xNiBpU0FDIGF1ZGlvIGNvZGVjICgxNmtIeilcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJU0FDXzMyIGlTQUMgYXVkaW8gY29kZWMgKDMya0h6KVxuICogQHByb3BlcnR5IHtSZWdFeHB9IElMQkMgaUxCQyBhdWRpbyBjb2RlYy4gRm9yIGJhZCBjaGFubmVscyAmIGxvdyBiYW5kd2lkdGguXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSUxCQyBpTEJDIGF1ZGlvIGNvZGVjLiBGb3IgYmFkIGNoYW5uZWxzICYgbG93IGJhbmR3aWR0aC5cbiAqL1xuZXhwb3J0IGNvbnN0IGF1ZGlvID0ge1xuXHQnT1BVUyc6IC9eb3B1cy9pLFxuXHQnRzcyMic6IC9eZzcyMi9pLFxuXHQnRzcxMSc6IC9eZzcxMS9pLFxuXHQnSVNBQyc6IC9eaXNhYy9pLFxuXHQnSVNBQ18xNic6IC9eaXNhY1xcLzE2MDAwL2ksXG5cdCdJU0FDXzMyJzogL15pc2FjXFwvMzIwMDAvaSxcblx0J0xTQUMnOiAvXmxzYWMvaVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmaW5pdGlvbnMvQ29kZWMuanMiLCJpbXBvcnQge2Jyb3dzZXJ9IGZyb20gJy4vZGVmaW5pdGlvbnMvQnJvd3Nlcic7XG5pbXBvcnQgU3RyZWFtVHlwZXMgZnJvbSAnLi9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcyc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuaW1wb3J0IHthdWRpbywgdmlkZW99IGZyb20gJy4vZGVmaW5pdGlvbnMvQ29kZWMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb3JlL1VzZXInO1xuaW1wb3J0IFJvb20gZnJvbSAnLi9jb3JlL1Jvb20nO1xuaW1wb3J0IEludml0ZSBmcm9tICcuL2NvcmUvSW52aXRlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vY29yZS91dGlsL0RhdGFTeW5jJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NvcmUvdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi9jb3JlL3V0aWwvTG9nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuL2NvcmUvdXRpbC9NZWRpYSc7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG4vKipcbiAqIEVudHJ5IHBvaW50IGZvciBSZWFjaCBTREtcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY2gge1xuXHQvKipcblx0ICogQ3JlYXRlIFJlYWNoJ3MgZGF0YSBzdHJ1Y3R1cmUgd2hlcmUgdGhlIHVybCBwb2ludHMgdG8gKG1pZ2h0IG5vdCBiZSB0aGUgcm9vdCBvZiB5b3VyIG5hbWVzcGFjZSlcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge3N0cmluZ3xXZWJjb219IHVybCBUaGUgdXJsIG9mIHlvdXIgbmFtZXNwYWNlIG9yIGFuIGV4aXN0aW5nIFdlYmNvbSByZWZlcmVuY2UuXG5cdCAqIEBwYXJhbSB7Q29uZmlnfSBbY2ZnXSBSZWFjaCBjb25maWd1cmF0aW9uLiBZb3UgY2FuIHBhc3MgY29uc3RyYWludHMgaGVyZVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Jbml0IHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbjwvY2FwdGlvbj5cblx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jyk7XG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPkluaXQgYW5kIHNldCBjb25zdHJhaW50cyBmb3IgU0QgdmlkZW8gYW5kIGxvZ0xldmVsIHRvICdpbmZvJzwvY2FwdGlvbj5cblx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHQgKiAgY29uc3RyYWludHM6IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCdTRCcpLFxuXHQgKiAgbG9nTGV2ZWw6ICdJTkZPJ1xuXHQgKiB9KTtcblx0ICovXG5cdGNvbnN0cnVjdG9yKHVybCwgY2ZnID0gbnVsbCkge1xuXHRcdC8vIFNldCBzaGFyZWQgcmVmZXJlbmNlXG5cdFx0Y2FjaGUuYmFzZSA9IHVybDtcblx0XHQvLyBTZXQgc2hhcmVkIGNvbmZpZ3VyYXRpb25cblx0XHRjYWNoZS5jb25maWcgPSBjZmc7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBkZWNsYXJlZCBjYWxsYmFja3Ncblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB2ZXJzaW9ucyBvZiBTREsgYW5kIERhdGFNb2RlbC5UaGUgU2NoZW1hIHZlcnNpb24gY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgQW5kcm9pZCAmIGlPUyBTREsuXG5cdCAqIEByZXR1cm4ge3tzZGs6IHN0cmluZywgc2NoZW1hOiBzdHJpbmd9fVxuXHQgKi9cblx0c3RhdGljIGdldCB2ZXJzaW9uKCkge1xuXHRcdHJldHVybiB7c2RrOiBTREtfVkVSU0lPTiwgc2NoZW1hOiBTQ0hFTUFfVkVSU0lPTn07XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHN1cHBvcnRlZCBzdHJlYW0gdHlwZXNcblx0ICogQHJldHVybnMge1N0cmVhbVR5cGVzfVxuXHQgKi9cblx0c3RhdGljIGdldCB0eXBlcygpIHtcblx0XHRyZXR1cm4gU3RyZWFtVHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHN1cHBvcnRlZCBldmVudHNcblx0ICogQHJldHVybiB7e3Jvb206IEV2ZW50cy9Sb29tLCByZWFjaDogRXZlbnRzL1JlYWNoLCBzdHJlYW06IEV2ZW50cy9TdHJlYW19fVxuXHQgKi9cblx0c3RhdGljIGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtyb29tOiBFdmVudHMucm9vbSwgcmVhY2g6IEV2ZW50cy5yZWFjaCwgc3RyZWFtOiBFdmVudHMuc3RyZWFtLCBpbnZpdGU6IEV2ZW50cy5pbnZpdGV9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBicm93c2VyJ3MgZGV0YWlsc1xuXHQgKiBAcmV0dXJuIHtCcm93c2VyfVxuXHQgKi9cblx0c3RhdGljIGdldCBicm93c2VyKCkge1xuXHRcdHJldHVybiBicm93c2VyO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1lZGlhIHV0aWxpdHkgZnVuY3Rpb25zXG5cdCAqIEByZXR1cm4ge01lZGlhfVxuXHQgKi9cblx0c3RhdGljIGdldCBtZWRpYSgpIHtcblx0XHRyZXR1cm4gTWVkaWE7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvZGVjIHByZXNldHMgdG8gdXNlIHdoZW4gc2V0dGluZyB7QGxpbmsgQ29uZmlnI3ByZWZlcnJlZEF1ZGlvQ29kZWN9IG9yIHtAbGluayBDb25maWcjcHJlZmVycmVkVmlkZW9Db2RlY31cblx0ICogQHJldHVybiB7e2F1ZGlvOiBDb2RlYy9hdWRpbywgdmlkZW86IENvZGVjL3ZpZGVvfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgY29kZWNzKCkge1xuXHRcdHJldHVybiB7YXVkaW8sIHZpZGVvfTtcblx0fVxuXHQvKipcblx0ICogRGF0YVN5bmMgcmVmZXJlbmNlXG5cdCAqIEB0eXBlIHtXZWJjb219XG5cdCAqL1xuXHRnZXQgYmFzZSgpIHtcblx0XHRyZXR1cm4gY2FjaGUuYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29uZmlndXJhdGlvblxuXHQgKiBAdHlwZSB7Q29uZmlnfVxuXHQgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gY2FjaGUuY29uZmlnO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgVXNlclxuXHQgKiBAdHlwZSB7VXNlcn1cblx0ICovXG5cdGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiBjYWNoZS51c2VyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyICYgU2lnbi1pbiBhcyBhIG5ldyB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgb2YgdGhlIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCBvZiB0aGUgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIgKGRlZmF1bHRzIHRvIGVtYWlsKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW1lbWJlck1lPWZhbHNlXSBrZWVwIHVzZXIgY29ubmVjdGVkID9cblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRyZWdpc3RlcihlbWFpbCwgcGFzc3dvcmQsIG5hbWUsIHJlbWVtYmVyTWUpIHtcblx0XHRyZXR1cm4gY2FjaGUuYmFzZS5jcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZClcblx0XHRcdC50aGVuKGF1dGggPT4ge1xuXHRcdFx0XHRpZihhdXRoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMubG9naW4oZW1haWwsIHBhc3N3b3JkLCBuYW1lIHx8IGVtYWlsLCByZW1lbWJlck1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+cmVnaXN0ZXInKSk7XG5cdH1cblxuXHQvKipcblx0ICogU2lnbi1pbiBhbiBleGlzdGluZyB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgb2YgdGhlIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCBvZiB0aGUgdXNlclxuIFx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgbmFtZSBvZiB0aGUgdXNlci4gRGVmYXVsdHMgdG8gdGhlIHZhbHVlIGluIGJhc2UuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbWVtYmVyTWU9ZmFsc2VdIGtlZXAgdXNlciBjb25uZWN0ZWQgP1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdGxvZ2luKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgcmVtZW1iZXJNZSA9IGZhbHNlKSB7XG5cdFx0Ly8gRm9yY2UgbG9nb3V0IHRvIGJ5cGFzcyBXZWJjb20gYnVnXG5cdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZih0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50LmVtYWlsICE9PSBlbWFpbCkge1xuXHRcdFx0cCA9IHRoaXMubG9nb3V0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBwXG5cdFx0XHQudGhlbigoKSA9PiBjYWNoZS5iYXNlLmF1dGhXaXRoUGFzc3dvcmQoe2VtYWlsLCBwYXNzd29yZCwgcmVtZW1iZXJNZX0pKVxuXHRcdFx0LnRoZW4oYXV0aCA9PiBVc2VyLmluaXQoYXV0aC51aWQsIG5hbWUpKVxuXHRcdFx0LnRoZW4odSA9PiB7XG5cdFx0XHRcdGNhY2hlLnVzZXIgPSB1O1xuXHRcdFx0XHRyZXR1cm4gdTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofmxvZ2luJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc3VtZSBwcmV2aW91cyBzZXNzaW9uXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXI+fVxuXHQgKi9cblx0cmVzdW1lKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHQvLyBSZXN1bWUgc2Vzc2lvblxuXHRcdFx0aWYoV2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLmdldCgnc2Vzc2lvbicpKXtcblx0XHRcdFx0Y2FjaGUuYmFzZS5yZXN1bWUoKGVycm9yLCBhdXRoKSA9PiB7XG5cdFx0XHRcdFx0aWYoYXV0aCAmJiAhdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRcdFx0XHRVc2VyLmluaXQoYXV0aC51aWQpLnRoZW4odSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNhY2hlLnVzZXIgPSB1O1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHUpO1xuXHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcignTm8gc2Vzc2lvbiB0byByZXN1bWUnKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogU2lnbi1pbiBhbiBhbm9ueW1vdXMgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSB1c2VyXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXI+fVxuXHQgKi9cblx0YW5vbnltb3VzKG5hbWUpIHtcblx0XHQvLyBGb3JjZSBsb2dvdXQgdG8gYnlwYXNzIFdlYmNvbSBidWdcblx0XHRsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmKHRoaXMuY3VycmVudCAmJiAoIXRoaXMuY3VycmVudC5hbm9ueW1vdXMgfHwgdGhpcy5jdXJyZW50Lm5hbWUgIT09IG5hbWUpKSB7XG5cdFx0XHRwID0gdGhpcy5sb2dvdXQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBcblx0XHRcdC50aGVuKCgpID0+IGNhY2hlLmJhc2UuYXV0aEFub255bW91c2x5KCkpXG5cdFx0XHQudGhlbihhdXRoID0+IFVzZXIuaW5pdChhdXRoLnVpZCwgbmFtZSkpXG5cdFx0XHQudGhlbih1ID0+IHtcblx0XHRcdFx0Y2FjaGUudXNlciA9IHU7XG5cdFx0XHRcdHJldHVybiB1O1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+YW5vbnltb3VzJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvZ291dCBjdXJyZW50IHVzZXJcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRsb2dvdXQoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHRpZih0aGlzLmN1cnJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRwID0gVXNlci5kaXNjb25uZWN0KHRoaXMuY3VycmVudCk7XG5cdFx0XHR9XG5cdFx0XHRwLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpLmZvckVhY2goXG5cdFx0XHRcdFx0ZXZlbnQgPT4gRGF0YVN5bmMub2ZmKEV2ZW50cy5yZWFjaC50b1BhdGgoZXZlbnQpKGNhY2hlLnVzZXIpLCBldmVudClcblx0XHRcdFx0KTtcblx0XHRcdFx0Y2FjaGUuYmFzZS5sb2dvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNhY2hlLnVzZXIgPSBudWxsO1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRMb2cuZShlKTtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHJlZ2lzdGVyZWQgdXNlcnNcblx0ICogQGV4cGVyaW1lbnRhbCBTaW5jZSAnc2VhcmNoJyBhbmQgJ3BhZ2luZycgZmVhdHVyZXMgYXJlIG5vdCB5ZXQgaW1wbGVtZW50ZWQgaW4gRGF0YVN5bmMsIHRoaXMgY2FsbCBjYW4gbGVhZCB0byBhIGxvdCBkYXRhIGJlaW5nIGV4Y2hhbmdlZCBvdmVyIHRoZSBXZWJTb2NrZXQuXG5cdCAqIEF2b2lkIGl0IGlmIHlvdXIgdXNlcnMgYmFzZSBpcyBwcmV0dHkgbGFyZ2UuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1ZGU9ZmFsc2VdIEluY2x1ZGUgY3VycmVudCB1c2VyIGluIHVzZXIncyBsaXN0XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VXNlcltdLCBFcnJvcj59XG5cdCAqL1xuXHR1c2VycyhpbmNsdWRlKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoJ3VzZXJzJywgVXNlcilcblx0XHRcdC50aGVuKHVzZXJzID0+IHtcblx0XHRcdFx0cmV0dXJuICFpbmNsdWRlICYmIHVzZXJzICYmIHRoaXMuY3VycmVudCA/IHVzZXJzLmZpbHRlcih1c2VyID0+IHVzZXIudWlkICE9PSB0aGlzLmN1cnJlbnQudWlkKSA6IHVzZXJzO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+dXNlcnMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHJvb21zXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Um9vbVtdLCBFcnJvcj59XG5cdCAqL1xuXHRyb29tcygpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdCgncm9vbXMnLCBSb29tKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5yb29tcycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgaW52aXRlc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEludml0ZVtdLCBFcnJvcj59XG5cdCAqL1xuXHRpbnZpdGVzKCkge1xuXHRcdGlmKCF0aGlzLmN1cnJlbnQpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0Nhbm5vdCBsaXN0IGludml0ZXMgd2l0aG91dCBhIFVzZXIgYmVpbmcgbG9nZ2VkIGluLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoYF8vaW52aXRlcy8ke3RoaXMuY3VycmVudC51aWR9YCwgSW52aXRlKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5pbnZpdGVzJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lICh7QGxpbmsgRXZlbnRzL1JlYWNofSkuIENhbiBiZTpcblx0ICogLSBVU0VSX0FEREVEXG5cdCAqIC0gVVNFUl9DSEFOR0VEXG5cdCAqIC0gVVNFUl9SRU1PVkVEXG5cdCAqIC0gUk9PTV9BRERFRFxuXHQgKiAtIFJPT01fQ0hBTkdFRFxuXHQgKiAtIFJPT01fUkVNT1ZFRFxuXHQgKiAtIElOVklURV9BRERFRFxuXHQgKiAtIElOVklURV9DSEFOR0VEXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0aGUgYXJndW1lbnRzIGRlcGVuZHMgb24gdGhlIHR5cGUgb2YgZXZlbnQ6XG5cdCAqIC0gVVNFUl8qOiBjYWxsYmFjayh7QGxpbmsgVXNlcn0gdSlcblx0ICogLSBST09NXyo6IGNhbGxiYWNrKHtAbGluayBSb29tfSByKVxuXHQgKiAtIElOVklURV8qOiBjYWxsYmFjayh7QGxpbmsgSW52aXRlfSBpKVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuUXVlcnl+Y2FuY2VsQ2FsbGJhY2t9IFtjYW5jZWxDYWxsYmFja10gVGhlIGVycm9yIGNhbGxiYWNrIGZvciB0aGUgZXZlbnQsIHRha2VzIGFuIEVycm9yIGFzIG9ubHkgYXJndW1lbnRcblx0ICovXG5cdG9uKGV2ZW50LCBjYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spIHtcblx0XHRjb25zdCBwYXRoID0gRXZlbnRzLnJlYWNoLnRvUGF0aChldmVudCkoY2FjaGUudXNlcik7XG5cdFx0aWYocGF0aCkge1xuXHRcdFx0Y29uc3QgY2xzID0gRXZlbnRzLnJlYWNoLnRvQ2xhc3MoZXZlbnQpO1xuXHRcdFx0Y29uc3QgY2IgPSBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGNvbnN0IGQgPSBjbHMgPyBuZXcgY2xzKHNuYXBEYXRhKSA6IG51bGw7XG5cdFx0XHRcdExvZy5pKGBSZWFjaH5vbigke2V2ZW50fSlgLCBkKTtcblx0XHRcdFx0Y2FsbGJhY2soZCk7XG5cdFx0XHR9O1xuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIGNiLCBjYW5jZWxDYWxsYmFjayk7XG5cdFx0XHRpZighdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gW107XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdLnB1c2goY2IpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgcm9vbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSByb29tIG5hbWVcblx0ICogQHBhcmFtIHtvYmplY3R9IFtleHRyYV0gRXh0cmEgaW5mb3JtYXRpb25zXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3B1YmxpY1Jvb209ZmFsc2VdIEluZGljYXRlcyBwdWJsaWMgcm9vbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxSb29tPn1cblx0ICovXG5cdGNyZWF0ZVJvb20obmFtZSwgZXh0cmEsIHB1YmxpY1Jvb20gPSBmYWxzZSkge1xuXHRcdGlmKCF0aGlzLmN1cnJlbnQpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgYSBSb29tIHdpdGhvdXQgYSBVc2VyIGJlaW5nIGxvZ2dlZCBpbi4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBSb29tLmNyZWF0ZShuYW1lLCBleHRyYSwgcHVibGljUm9vbSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgbGlzdCBvZiBhbGwgb3BlbmVkIHtAbGluayBQZWVyQ29ubmVjdGlvbn1zXG5cdCAqIEByZXR1cm4geyp9XG5cdCAqL1xuXHRnZXQgcGVlckNvbm5lY3Rpb25zICgpIHtcblx0XHRyZXR1cm4gY2FjaGUucGVlckNvbm5lY3Rpb25zLnN0YWNrcztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSB7QGxpbmsgUm9vbX0gZnJvbSBpdHMgYHVpZGBcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBUaGUgcm9vbSdzIFVJRFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48Um9vbT59XG5cdCAqL1xuXHRnZXRSb29tICh1aWQpIHtcblx0XHRyZXR1cm4gUm9vbS5nZXQodWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSB7QGxpbmsgVXNlcn0gZnJvbSBpdHMgYHVpZGBcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBUaGUgdXNlcidzIFVJRFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48VXNlcj59XG5cdCAqL1xuXHRnZXRVc2VyICh1aWQpIHtcblx0XHRyZXR1cm4gVXNlci5nZXQodWlkKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWNoLmpzIiwiaW1wb3J0IG1lZGlhIGZyb20gJy4vdXRpbC9NZWRpYSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5cbmNvbnN0IF9mbGF0dGVuU2VydmVycyA9IHNlcnZlcnMgPT4ge1xuXHRjb25zdCBfZXhwYW5kID0gc2VydmVycy5tYXAoc2VydmVyID0+IHtcblx0XHRjb25zdCB7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHMsIHVybH0gPSBzZXJ2ZXI7XG5cdFx0Y29uc3QgdXJpcyA9IHVybHMgfHwgdXJsO1xuXHRcdGlmKHR5cGVvZiB1cmlzICE9PSAnc3RyaW5nJyApIHtcblx0XHRcdHJldHVybiB1cmlzLm1hcCh1cmkgPT4gKHt1c2VybmFtZSwgY3JlZGVudGlhbCwgdXJsczogdXJpfSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gW3NlcnZlcl07XG5cdH0pO1xuXHRyZXR1cm4gW10uY29uY2F0KC4uLl9leHBhbmQpO1xufTtcblxuLyoqXG4gKiBUaGUgUmVhY2ggY29uZmlndXJhdGlvbiBvYmplY3RcbiAqIEBjbGFzcyBDb25maWdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBjb25maWd1cmF0aW9uXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSBvYmpcblx0ICovXG5cdGNvbnN0cnVjdG9yKG9iaikge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBkZWZhdWx0IG1lZGlhIGNvbnN0cmFpbnRzLiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB3aGVuIHN1YnNjcmliaW5nIHRvIGEgc3RyZWFtLlxuXHRcdCAqIEB0eXBlIHtNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfVxuXHRcdCAqL1xuXHRcdHRoaXMuY29uc3RyYWludHMgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGlkL2VsZW1lbnQgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGhvbGQgdGhlIGxvY2FsIHZpZGVvL2F1ZGlvIGVsZW1lbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfEVsZW1lbnR9XG5cdFx0ICovXG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNvbnRhaW5lciA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGlkL2VsZW1lbnQgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGhvbGQgdGhlIHJlbW90ZSB2aWRlby9hdWRpbyBlbGVtZW50XG5cdFx0ICogQHR5cGUge3N0cmluZ3xFbGVtZW50fVxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3RlU3RyZWFtQ29udGFpbmVyID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBwcmVmZXJyZWQgdmlkZW8gQ29kZWMuIFRha2VzIGEgUmVnRXhwIG1hdGNoaW5nIHRoZSBjb2RlYyBuYW1lIGFuZCBzYW1wbGUgcmF0ZS5cblx0XHQgKiBQcmVkZWZpbmVkIHZhbHVlcyBjYW4gYmUgZm91bmQgaW4ge0BsaW5rIENvZGVjL3ZpZGVvfVxuXHRcdCAqIEB0eXBlIHtSZWdFeHB9XG5cdFx0ICogQGV4YW1wbGUgPGNhcHRpb24+UHJlZmVyIFZQOTwvY2FwdGlvbj5cblx0XHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nLCB7XG5cdFx0ICogIHByZWZlcnJlZFZpZGVvQ29kZWM6IFJlYWNoLmNvZGVjcy52aWRlby5WUDlcblx0XHQgKiB9KTtcblx0XHQgKi9cblx0XHR0aGlzLnByZWZlcnJlZFZpZGVvQ29kZWMgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIHByZWZlcnJlZCBhdWRpbyBDb2RlYy4gVGFrZXMgYSBSZWdFeHAgbWF0Y2hpbmcgdGhlIGNvZGVjIG5hbWUgYW5kIHNhbXBsZSByYXRlLlxuXHRcdCAqIFByZWRlZmluZWQgdmFsdWVzIGNhbiBiZSBmb3VuZCBpbiB7QGxpbmsgQ29kZWMvYXVkaW99XG5cdFx0ICogQHR5cGUge1JlZ0V4cH1cblx0XHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5QcmVmZXIgb3B1czwvY2FwdGlvbj5cblx0XHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nLCB7XG5cdFx0ICogIHByZWZlcnJlZEF1ZGlvQ29kZWM6IFJlYWNoLmNvZGVjcy5hdWRpby5PUFVTXG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dGhpcy5wcmVmZXJyZWRBdWRpb0NvZGVjID0gbnVsbDtcblxuXHRcdC8vIFBvcHVsYXRlIHdpdGggZGVmYXVsdCB2YWx1ZXNcblx0XHR0aGlzLnJlc2V0KCk7XG5cblx0XHQvLyBQb3B1bGF0ZSB3aXRoIGRhdGFcblx0XHR0aGlzLmFzc2lnbihvYmopO1xuXG5cdFx0Ly8gUmVhZCBJQ0Ugc2VydmVycyBmcm9tIHNlcnZlclxuXHRcdERhdGFTeW5jLmdldCgnXy9pY2UnKS50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRcdGlmKHNuYXBEYXRhKSB7XG5cdFx0XHRcdHRoaXMuaWNlU2VydmVycyA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRMb2cuaSgnSUNFU2VydmVycycsIHRoaXMuaWNlU2VydmVycy5sZW5ndGggPiAwID8gdGhpcy5pY2VTZXJ2ZXJzIDogJ05vbmUnKTtcblx0XHRcdH1cblx0XHR9LCBlID0+IExvZy5kKCdJQ0VTZXJ2ZXJzJywgZSkpO1xuXG5cdFx0Ly8gVE9ETyAjRmVhdDogQWRkIGJvb2xlYW4gcHJvcCB0byByZXF1ZXN0IHBlcm1pc3Npb24gb24gc3RhcnQsIHNkcEVkaXRvciAoZm9yIHVzZXIgZGVmaW5lZCBTRFAgbW9kaWZpY2F0aW9ucylcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NpZ24gbmV3IGNvbmYgdmFsdWVzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG5ldyBjb25mIHZhbHVlc1xuXHQgKi9cblx0YXNzaWduKG9iaikge1xuXHRcdE9iamVjdC5rZXlzKG9iaiB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge3RoaXNba2V5XSA9IG9ialtrZXldO30pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHNldCBsb2dMZXZlbChsZXZlbCkge1xuXHRcdGNhY2hlLmxvZ0xldmVsID0gbGV2ZWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGxvZ0xldmVsKCkge1xuXHRcdHJldHVybiBjYWNoZS5sb2dMZXZlbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIFRVUk4vU1RVTiBzZXJ2ZXJzIHRvIHVzZSBmb3IgSUNFLiBUaGlzIGxpc3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgSUNFIHNlcnZlcnMgZGVjbGFyZWQgaW4gdGhlIG5hbWVzcGFjZSAoKipfL2ljZSoqKS5cblx0ICogQHR5cGUge0lDRVNlcnZlcltdfVxuXHQgKi9cblx0c2V0IGljZVNlcnZlcnMoc2VydmVycykge1xuXHRcdExvZy5kKCdDb25maWd+c2V0fmljZVNlcnZlcnMnLCBzZXJ2ZXJzKTtcblx0XHRpZihzZXJ2ZXJzKSB7XG5cdFx0XHRpZiAoIXRoaXMuX2ljZVNlcnZlcnMpIHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoaXMuX2ljZVNlcnZlcnMgPSBbXS5jb25jYXQoc2VydmVycyB8fCBbXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBmbGF0dGVuIGV4aXN0aW5nXG5cdFx0XHRcdGNvbnN0IF9jdXJyZW50U2VydmVycyA9IF9mbGF0dGVuU2VydmVycyh0aGlzLl9pY2VTZXJ2ZXJzKTtcblx0XHRcdFx0Ly8gZmxhdHRlbiBuZXdcblx0XHRcdFx0Y29uc3QgX25ld1NlcnZlcnMgPSBfZmxhdHRlblNlcnZlcnMoc2VydmVycyk7XG5cdFx0XHRcdC8vIEFkZCBvbmx5IHRoZSBtaXNzaW5nIHNlcnZlcnNcblx0XHRcdFx0X25ld1NlcnZlcnMuZm9yRWFjaChuZXdTZXJ2ZXIgPT4ge1xuXHRcdFx0XHRcdGlmKCFfY3VycmVudFNlcnZlcnMuc29tZShzZXJ2ZXIgPT5cblx0XHRcdFx0XHRcdFx0c2VydmVyLnVybHMgPT09IG5ld1NlcnZlci51cmxzICYmXG5cdFx0XHRcdFx0XHRcdHNlcnZlci51c2VybmFtZSA9PT0gbmV3U2VydmVyLnVzZXJuYW1lICYmXG5cdFx0XHRcdFx0XHRcdHNlcnZlci5jcmVkZW50aWFsID09PSBuZXdTZXJ2ZXIuY3JlZGVudGlhbCkpIHtcblx0XHRcdFx0XHRcdF9jdXJyZW50U2VydmVycy5wdXNoKG5ld1NlcnZlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gUmUtZ3JvdXAgYnkgdXNlcm5hbWUvY3JlZGVudGlhbFxuXHRcdFx0XHR0aGlzLl9pY2VTZXJ2ZXJzID0gX2N1cnJlbnRTZXJ2ZXJzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHN9ID0gY3VycmVudDtcblx0XHRcdFx0XHRjb25zdCBpZHggPSBwcmV2aW91cy5maW5kSW5kZXgocyA9PiBzLnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBzLmNyZWRlbnRpYWwgPT09IGNyZWRlbnRpYWwpO1xuXHRcdFx0XHRcdGlmKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1tpZHhdLnVybHMucHVzaCh1cmxzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHJldmlvdXMucHVzaCh7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHM6IFt1cmxzXX0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXM7XG5cdFx0XHRcdH0sIFtdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTGlzdCBvZiBUVVJOL1NUVU4gc2VydmVycyB0byB1c2UgZm9yIElDRS4gVGhpcyBsaXN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIElDRSBzZXJ2ZXJzIGRlY2xhcmVkIGluIHRoZSBuYW1lc3BhY2UgKCoqXy9pY2UqKikuXG5cdCAqIEB0eXBlIHtJQ0VTZXJ2ZXJbXX1cblx0ICovXG5cdGdldCBpY2VTZXJ2ZXJzKCkge1xuXHRcdHJldHVybiB0aGlzLl9pY2VTZXJ2ZXJzIHx8IFtcblx0XHRcdHtcblx0XHRcdFx0dXNlcm5hbWU6ICdhZG1pbicsXG5cdFx0XHRcdGNyZWRlbnRpYWw6ICd3ZWJjb20xMjM0Jyxcblx0XHRcdFx0dXJsczogW1xuXHRcdFx0XHRcdCd0dXJuczp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTo0NDMnLFxuXHRcdFx0XHRcdCd0dXJuOnR1cm4xLndlYmNvbS5vcmFuZ2UuY29tOjQ0Mz90cmFuc3BvcnQ9dGNwJyxcblx0XHRcdFx0XHQndHVybjp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTozNDc4P3RyYW5zcG9ydD10Y3AnXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc2V0cyBjb25maWd1cmF0aW9uIHRvIGRlZmF1bHQgdmFsdWVzXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdHJlc2V0ICgpIHtcblx0XHR0aGlzLmFzc2lnbih7XG5cdFx0XHRjb25zdHJhaW50czogbWVkaWEuY29uc3RyYWludHMoKSxcblx0XHRcdGxvZ0xldmVsOiAnRVJST1InXG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL0NvbmZpZy5qcyIsIi8qKlxuICogVXNlciBkZXZpY2VcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBkZXZpY2Vcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSBzdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBPU1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5vcyA9IHZhbHVlcy5vcztcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1c2VyQWdlbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudXNlckFnZW50ID0gdmFsdWVzLnVzZXJBZ2VudDtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBsYXN0IGtub3cgc3RhdHVzXG5cdFx0ICogLSBDT05ORUNURURcblx0XHQgKiAtIE5PVF9DT05ORUNURURcblx0XHQgKiAtIFNMRUVQSU5HXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3Mgc2RrXG5cdFx0ICogQHR5cGUge3tyZWFjaDogc3RyaW5nLCB3ZWJjb206IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5zZGsgPSB2YWx1ZXMuc2RrO1xuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCAnZXh0cmEnIHByb3BlcnR5IGZvciB1bnJlc3RyaWN0ZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiA/XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL0RldmljZS5qcyIsImltcG9ydCBTdHJlYW1UeXBlcyBmcm9tICcuLi8uLi9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi4vdXRpbC9Mb2cnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vdXRpbC9NZWRpYSc7XG5pbXBvcnQge05PTkUsIENMT1NFRCwgQ0xPU0lORywgQ09OTkVDVEVEfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5cbmNvbnN0IF9mYWNpbmdNb2RlcyA9IFtNZWRpYS5mYWNpbmdNb2RlLlVTRVIsIE1lZGlhLmZhY2luZ01vZGUuRU5WSVJPTk1FTlRdO1xuXG5jb25zdCBfZ2V0Q29uc3RyYWludFZhbHVlID0gKGNvbnN0cmFpbnRzLCBwcm9wKSA9PiB7XG5cdHJldHVybiBjb25zdHJhaW50c1twcm9wXS5leGFjdCB8fCBjb25zdHJhaW50c1twcm9wXS5pZGVhbCB8fCBjb25zdHJhaW50c1twcm9wXTtcbn07XG5cbmNvbnN0IF9zZXRDb25zdHJhaW5WYWx1ZSA9IChjb25zdHJhaW50cywgcHJvcCwgb3RoZXIsIHZhbHVlKSA9PiB7XG5cdGNvbnN0cmFpbnRzW3Byb3BdID0ge2V4YWN0OiB2YWx1ZX07XG5cdGRlbGV0ZSBjb25zdHJhaW50c1tvdGhlcl07XG59O1xuXG4vKipcbiAqIFRoZSBsb2NhbCBzdHJlYW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWwge1xuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzKSB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGUgcm9vbSB0aGUgc3RyZWFtIGlzIHB1Ymxpc2hlZCBpblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tSWQgPSB2YWx1ZXMucm9vbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhpcyBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdHlwZSBvZiB0aGUgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnR5cGUgPSB2YWx1ZXMudHlwZTtcblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgaWYgYSB0cmFjayBpcyBtdXRlZFxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IGJvb2xlYW4sIHZpZGVvOiBib29sZWFufX1cblx0XHQgKi9cblx0XHR0aGlzLm11dGVkID0gT2JqZWN0LmFzc2lnbih7YXVkaW86IGZhbHNlLCB2aWRlbzogZmFsc2V9LCB2YWx1ZXMubXV0ZWQpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBsb2NhbCBET00gY29udGFpbmVyIGVsZW1lbnQgd2hlcmUgdGhlIHtAbGluayBMb2NhbH5tZWRpYX0gaXMgZGlzcGxheWVkXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdCAgKi9cblx0XHR0aGlzLmNvbnRhaW5lciA9IHZhbHVlcy5jb250YWluZXIgfHwgY2FjaGUuY29uZmlnLmxvY2FsU3RyZWFtQ29udGFpbmVyO1xuXHRcdC8qKlxuXHQgICogVGhlIGxvY2FsIERPTSBtZWRpYSBlbGVtZW50IHdoZXJlIHRoZSB7QGxpbmsgTG9jYWx+bWVkaWF9IGlzIGRpc3BsYXllZFxuXHQgICogQHR5cGUge0VsZW1lbnR9XG5cdCAgKi9cblx0XHR0aGlzLm5vZGUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgdGhlIFBlZXJDb25uZWN0aW9ucyBhc3NvY2lhdGVkIHRvIHRoaXMgbG9jYWwgc3RyZWFtXG5cdFx0ICogQHR5cGUge1BlZXJDb25uZWN0aW9uW119XG5cdFx0ICovXG5cdFx0dGhpcy5wZWVyQ29ubmVjdGlvbnMgPSBbXTtcblx0XHQvKipcblx0XHQgKiBMb2NhbCBzdHJlYW0gc3RhdHVzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IE5PTkU7XG5cdFx0LyoqXG5cdFx0ICogaXMgdGhlIHZpZGVvIGlzIGxvYWRlZCBpbnQgdGhlIGxvY2FsIERPTSBtZWRpYSBlbGVtZW50XG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5pc1ZpZGVvTG9hZGVkID0gZmFsc2U7XG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICogQHR5cGUge3thdWRpbzogc3RyaW5nLCB2aWRlbzogc3RyaW5nfX1cblx0XHQgKi9cblx0XHR0aGlzLl9pbnB1dHMgPSB7fTtcblxuXHRcdC8vIFNldCBjb25zdHJhaW50c1xuXHRcdHRoaXMuY29uc3RyYWludHMgPSB2YWx1ZXMuY29uc3RyYWludHM7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIE1lZGlhIENvbnN0cmFpbnRzLiAoZGVmYXVsdHMgdG8gZ2xvYmFsIGNvbmZpZylcblx0ICogQHBhcmFtIHtNZWRpYUNvbnN0cmFpbnRzfSBjb25zdHJhaW50c1xuXHQgKi9cblx0c2V0IGNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XG5cdFx0Y29uc3Rcblx0XHRcdHZhbHVlcyA9IGNvbnN0cmFpbnRzIHx8IGNhY2hlLmNvbmZpZy5jb25zdHJhaW50cyxcblx0XHRcdGRlZmF1bHRDb25zdHJhaW50cyA9IE1lZGlhLmNvbnN0cmFpbnRzKCk7XG5cdFx0WydhdWRpbycsICd2aWRlbyddLmZvckVhY2godHlwZSA9PiB7XG5cdFx0XHRpZighfnRoaXMudHlwZS5pbmRleE9mKHR5cGUpKSB7XG5cdFx0XHRcdHZhbHVlc1t0eXBlXSA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmKCF2YWx1ZXNbdHlwZV0pe1xuXHRcdFx0XHR2YWx1ZXNbdHlwZV0gPSBkZWZhdWx0Q29uc3RyYWludHNbdHlwZV07XG5cdFx0XHR9XG5cdFx0XHRpZih2YWx1ZXNbdHlwZV0uZGV2aWNlSWQgfHwgdmFsdWVzW3R5cGVdLmZhY2luZ01vZGUpIHtcblx0XHRcdFx0dGhpcy5faW5wdXRzW3R5cGVdID0gX2dldENvbnN0cmFpbnRWYWx1ZShcblx0XHRcdFx0XHR2YWx1ZXNbdHlwZV0sXG5cdFx0XHRcdFx0dmFsdWVzW3R5cGVdLmZhY2luZ01vZGUgPyAnZmFjaW5nTW9kZScgOiAnZGV2aWNlSWQnXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0TG9nLmQoJ0xvY2FsfnNldCNjb250cmFpbnRzJywgdmFsdWVzKTtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fY29uc3RyYWludHMgPSB2YWx1ZXM7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIE1lZGlhIENvbnN0cmFpbnRzLiAoZGVmYXVsdHMgdG8gZ2xvYmFsIGNvbmZpZylcblx0ICogQHR5cGUge01lZGlhQ29uc3RyYWludHN9XG5cdCAqL1xuXHRnZXQgY29uc3RyYWludHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbnN0cmFpbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHN0cmVhbSBjb25zdHJhaW50cyBhbmQgcmV0cmlldmUgdGhlIG5ldyBNZWRpYVN0cmVhbVxuXHQgKiBAcGFyYW0gY29uc3RyYWludHNcblx0ICogQHJldHVybnMgeyp8UHJvbWlzZS48VFJlc3VsdD59XG5cdCAqL1xuXHR1cGRhdGVDb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuXHRcdExvZy5kKCdMb2NhbH51cGRhdGVDb25zdHJhaW50cycsIGNvbnN0cmFpbnRzKTtcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG5cdFx0cmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHRoaXMuY29uc3RyYWludHMpXG5cdFx0XHQudGhlbihtZWRpYSA9PiB7XG5cdFx0XHRcdFsnYXVkaW8nLCAndmlkZW8nXS5mb3JFYWNoKGtpbmQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNvbnN0cmFpbnRzVmFsdWUgPSB0aGlzLmNvbnN0cmFpbnRzW2tpbmRdO1xuXHRcdFx0XHRcdGlmKGNvbnN0cmFpbnRzVmFsdWUpIHtcblx0XHRcdFx0XHRcdGlmIChjb25zdHJhaW50c1ZhbHVlLmRldmljZUlkIHx8IGNvbnN0cmFpbnRzVmFsdWUuZmFjaW5nTW9kZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9pbnB1dHNba2luZF0gPSBfZ2V0Q29uc3RyYWludFZhbHVlKFxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0cmFpbnRzVmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3RyYWludHNWYWx1ZS5mYWNpbmdNb2RlID8gJ2ZhY2luZ01vZGUnIDogJ2RldmljZUlkJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMubWVkaWEgPSBtZWRpYTtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBhc3NvY2lhdGVkIE1lZGlhU3RyZWFtXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdHNldCBtZWRpYSAobWVkaWFTdHJlYW0pIHtcblx0XHRpZihtZWRpYVN0cmVhbSkge1xuXHRcdFx0aWYoIShtZWRpYVN0cmVhbSBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtZWRpYSBNVVNUIGJlIGEgTWVkaWFTdHJlYW0nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2hlY2tEZXZpY2VzID0ge307XG5cdFx0XHRtZWRpYVN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcblx0XHRcdFx0Ly8gUmVzZXQgbXV0ZVxuXHRcdFx0XHR0cmFjay5lbmFibGVkID0gIXRoaXMubXV0ZWRbdHJhY2sua2luZF07XG5cdFx0XHRcdC8vIEdldCBkZXZpY2UgbGFiZWxcblx0XHRcdFx0aWYoIXRoaXMuX2lucHV0c1t0cmFjay5raW5kXSkge1xuXHRcdFx0XHRcdGNoZWNrRGV2aWNlc1t0cmFjay5raW5kXSA9IHRyYWNrLmxhYmVsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdC8vIFRyeSB0byBnZXQgZGV2aWNlSWQgZnJvbSBsYWJlbFxuXHRcdFx0aWYoT2JqZWN0LmtleXMoY2hlY2tEZXZpY2VzKS5sZW5ndGgpIHtcblx0XHRcdFx0TWVkaWEuZGV2aWNlcygpLnRoZW4oZGV2aWNlcyA9PiB7XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoY2hlY2tEZXZpY2VzKS5mb3JFYWNoKGtpbmQgPT4ge1xuXHRcdFx0XHRcdFx0aWYoZGV2aWNlc1tgJHtraW5kfWlucHV0YF0pe1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkZXZpY2VJZHMgPSBkZXZpY2VzW2Ake2tpbmR9aW5wdXRgXVxuXHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoZGV2aWNlID0+IGRldmljZS5sYWJlbC5sZW5ndGggJiYgZGV2aWNlLmxhYmVsID09PSBjaGVja0RldmljZXNba2luZF0pO1xuXHRcdFx0XHRcdFx0XHRpZihkZXZpY2VJZHMubGVuZ3RoID09PSAxICYmICF0aGlzLl9pbnB1dHNba2luZF0pIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9pbnB1dHNba2luZF0gPSBkZXZpY2VJZHNbMF0uZGV2aWNlSWQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBEaXNwbGF5XG5cdFx0XHR0aGlzLm5vZGUgPSBNZWRpYS5hdHRhY2hTdHJlYW0obWVkaWFTdHJlYW0sIHRoaXMuY29udGFpbmVyLCB0aGlzLm5vZGUsIDApO1xuXHRcdFx0dGhpcy5ub2RlLm9ubG9hZGVkZGF0YSA9ICgpID0+IHtcblx0XHRcdFx0dGhpcy5pc1ZpZGVvTG9hZGVkID0gdHJ1ZTtcblx0XHRcdH07XG5cdFx0XHR0aGlzLnN0YXR1cyA9IENPTk5FQ1RFRDtcblx0XHRcdExvZy5kKCdMb2NhbH5zZXQgbWVkaWEnLCB7bWVkaWFTdHJlYW19LCB0aGlzLm5vZGUpO1xuXHRcdFx0Ly8gUmVuZWdvdGlhdGVcblx0XHRcdHRoaXMucGVlckNvbm5lY3Rpb25zLmZvckVhY2gocGVlckNvbm5lY3Rpb24gPT4gcGVlckNvbm5lY3Rpb24ucmVuZWdvdGlhdGUodGhpcy5fbWVkaWEsIG1lZGlhU3RyZWFtKSk7XG5cdFx0fSBlbHNlIGlmKHRoaXMubWVkaWEgJiYgIW1lZGlhU3RyZWFtKSB7XG5cdFx0XHQvLyBSZW1vdmUgbm9kZVxuXHRcdFx0dGhpcy5ub2RlLnNyY09iamVjdCA9IG51bGw7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHRcdC8vIFN0b3Agc3RyZWFtXG5cdFx0XHR0aGlzLm1lZGlhLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcblx0XHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uc1xuXHRcdFx0dGhpcy5wZWVyQ29ubmVjdGlvbnMuZm9yRWFjaChwZWVyQ29ubmVjdGlvbiA9PiBwZWVyQ29ubmVjdGlvbi5jbG9zZSgpKTtcblx0XHR9XG5cdFx0Ly8gU2F2ZVxuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9tZWRpYSA9IG1lZGlhU3RyZWFtO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBhc3NvY2lhdGVkIE1lZGlhU3RyZWFtXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdGdldCBtZWRpYSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21lZGlhO1xuXHR9XG5cblx0LyoqXG5cdCAqIE11dGUgYSB0cmFjayBvZiBhIFN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3RyYWNrPUFVRElPXSBUaGUgdHJhY2sgdG8gbXV0ZS4gKEFVRElPLCBWSURFTywgQVVESU9fVklERU8pXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXRlPXRydWVdIHRydWUgZm9yIG11dGUgJiBmYWxzZSBmb3IgdW4tbXV0ZVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5tdXRlIHZpZGVvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0ubXV0ZShSZWFjaC50LlZJREVPKVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5tdXRlIGF1ZGlvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0ubXV0ZShSZWFjaC50LkFVRElPKVxuXHQgKiAvLyBvclxuXHQgKiBzdHJlYW0ubXV0ZSgpXG5cdCAqL1xuXHRtdXRlKHRyYWNrID0gU3RyZWFtVHlwZXMuQVVESU8sIHN0YXRlID0gdHJ1ZSkge1xuXHRcdExvZy5kKCdtdXRlJywgdHJhY2ssIHN0YXRlKTtcblx0XHRsZXQgYXVkaW8gPSB0aGlzLm11dGVkLmF1ZGlvLCB2aWRlbyA9IHRoaXMubXV0ZWQudmlkZW8sIHRyYWNrcztcblx0XHRzd2l0Y2ggKHRyYWNrKSB7XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLkFVRElPOlxuXHRcdFx0XHRhdWRpbyA9IHN0YXRlO1xuXHRcdFx0XHR0cmFja3MgPSB0aGlzLm1lZGlhLmdldEF1ZGlvVHJhY2tzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5WSURFTzpcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuU0NSRUVOX1NIQVJJTkc6XG5cdFx0XHRcdHZpZGVvID0gc3RhdGU7XG5cdFx0XHRcdHRyYWNrcyA9IHRoaXMubWVkaWEuZ2V0VmlkZW9UcmFja3MoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLkFVRElPX1ZJREVPOlxuXHRcdFx0XHRhdWRpbyA9IHN0YXRlO1xuXHRcdFx0XHR2aWRlbyA9IHN0YXRlO1xuXHRcdFx0XHR0cmFja3MgPSB0aGlzLm1lZGlhLmdldFRyYWNrcygpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly8gTXV0ZSBtZWRpYSB0cmFja3Ncblx0XHR0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB7dHJhY2suZW5hYmxlZCA9ICFzdGF0ZTt9KTtcblx0XHQvLyBTaWduYWwgc3Vic2NyaWJlcnNcblx0XHR0aGlzLm11dGVkID0ge2F1ZGlvLCB2aWRlb307XG5cdFx0RGF0YVN5bmMuc2V0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH0vbXV0ZWRgLCB0aGlzLm11dGVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbi1tdXRlIGEgdHJhY2sgb2YgYSBTdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0cmFjaz1BVURJT10gVGhlIHRyYWNrIHRvIG11dGUuIChBVURJTywgVklERU8sIEFVRElPX1ZJREVPKVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Vbi1tdXRlIHZpZGVvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0udW5NdXRlKFJlYWNoLnQuVklERU8pXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPlVuLW11dGUgYXVkaW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS51bk11dGUoUmVhY2gudC5BVURJTylcblx0ICogLy8gb3Jcblx0ICogc3RyZWFtLnVuTXV0ZSgpXG5cdCAqL1xuXHR1bk11dGUodHJhY2spIHtcblx0XHR0aGlzLm11dGUodHJhY2ssIGZhbHNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIHN0cmVhbSBmb3IgcHVibGlzaGVkIGxpc3QsIGNsb3NlcyBhc3NvY2lhdGVkIFBlZXJDb25uZWN0aW9ucyBhbmQgc3RvcHMgY3VycmVudCBNZWRpYVN0cmVhbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNsb3NlKCkge1xuXHRcdGlmKCF+W0NMT1NFRCwgQ0xPU0lOR10uaW5kZXhPZih0aGlzLnN0YXR1cykpIHtcblx0XHRcdHRoaXMuc3RhdHVzID0gQ0xPU0lORztcblx0XHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIFN1YnNjcmliZXJzXG5cdFx0XHRjb25zdCBwYXRoID0gYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH1gO1xuXHRcdFx0RGF0YVN5bmMub2ZmKHBhdGgsICdjaGlsZF9hZGRlZCcpO1xuXHRcdFx0RGF0YVN5bmMub2ZmKHBhdGgsICdjaGlsZF9yZW1vdmVkJyk7XG5cdFx0XHQvLyBDYW5jZWwgb25EaXNjb25uZWN0c1xuXHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gKS5jYW5jZWwoKTtcblx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfWApLmNhbmNlbCgpO1xuXHRcdFx0Ly8gUmVtb3ZlIHN1YnNjcmliZXJzXG5cdFx0XHREYXRhU3luYy5yZW1vdmUocGF0aCk7XG5cdFx0XHQvLyBSZW1vdmUgc3RyZWFtXG5cdFx0XHREYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfWApO1xuXHRcdFx0dGhpcy5tZWRpYSA9IG51bGw7XG5cdFx0XHQvLyBDbG9zZVxuXHRcdFx0dGhpcy5zdGF0dXMgPSBDTE9TRUQ7XG5cdFx0fVxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdGF0dXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN3aXRjaCB2aWRlbyBpbnB1dCBkZXZpY2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtkZXZpY2VJZF0gQSB2aWRlbyBpbnB1dCBkZXZpY2UgSWQgb3IgdGhlIGBmYWNpbmdNb2RlYCB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c3dpdGNoQ2FtZXJhKGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N3aXRjaERldmljZShTdHJlYW1UeXBlcy5WSURFTywgZGV2aWNlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN3aXRjaCBhdWRpbyBpbnB1dCBkZXZpY2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtkZXZpY2VJZF0gQSBhdWRpbyBpbnB1dCBkZXZpY2UgSWRcblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHN3aXRjaE1pY3JvcGhvbmUoZGV2aWNlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3dpdGNoRGV2aWNlKFN0cmVhbVR5cGVzLkFVRElPLCBkZXZpY2VJZCk7XG5cdH1cblxuXHQvKipcblx0ICogU3dpdGNoIGlucHV0IGRldmljZVxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtpbmQgVGhlIGtpbmQgb2YgZGV2aWNlIHRvIHN3aXRjaFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2RldmljZUlkXSBBbiBpbnB1dCBkZXZpY2UgaWRcblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cbiAgICAgKi9cblx0X3N3aXRjaERldmljZShraW5kLCBkZXZpY2VJZCkge1xuXHRcdExvZy5kKCdMb2NhbH5fc3dpdGNoRGV2aWNlJywga2luZCwgZGV2aWNlSWQpO1xuXHRcdGlmKHRoaXMubWVkaWEuZ2V0VHJhY2tzKCkuc29tZSh0cmFjayA9PiB0cmFjay5raW5kID09PSBraW5kKSkge1xuXHRcdFx0bGV0IG5leHQgPSBQcm9taXNlLnJlc29sdmUoZGV2aWNlSWQpO1xuXHRcdFx0Y29uc3QgY3VycmVudE1vZGVJZHggPSBfZmFjaW5nTW9kZXMuaW5kZXhPZih0aGlzLl9pbnB1dHNba2luZF0pO1xuXHRcdFx0aWYoIWRldmljZUlkICYmICEhfmN1cnJlbnRNb2RlSWR4KSB7XG5cdFx0XHRcdC8vIExvb3AgZmFjaW5nTW9kZXNcblx0XHRcdFx0bmV4dCA9IFByb21pc2UucmVzb2x2ZShfZmFjaW5nTW9kZXNbKGN1cnJlbnRNb2RlSWR4ICsgMSkgJSBfZmFjaW5nTW9kZXMubGVuZ3RoXSk7XG5cdFx0XHR9IGVsc2UgaWYoIX5fZmFjaW5nTW9kZXMuaW5kZXhPZihkZXZpY2VJZCkpIHtcblx0XHRcdFx0Ly8gTG9vcCBkZXZpY2VJZHNcblx0XHRcdFx0bmV4dCA9IE1lZGlhLmRldmljZXMoKVxuXHRcdFx0XHRcdC50aGVuKGQgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gZGV2aWNlcyBJRHNcblx0XHRcdFx0XHRcdGNvbnN0IGRldmljZXMgPSBkW2Ake2tpbmR9aW5wdXRgXS5tYXAobWVkaWFEZXZpY2UgPT4gbWVkaWFEZXZpY2UuZGV2aWNlSWQpO1xuXHRcdFx0XHRcdFx0Ly8gU29ydCB0byBlbnN1cmUgc2FtZSBvcmRlclxuXHRcdFx0XHRcdFx0ZGV2aWNlcy5zb3J0KCk7XG5cdFx0XHRcdFx0XHQvLyBOZXcgZGV2aWNlXG5cdFx0XHRcdFx0XHRsZXQgbmV4dERldmljZSA9IGRldmljZUlkO1xuXHRcdFx0XHRcdFx0aWYoZGV2aWNlSWQgJiYgIWRldmljZXMuc29tZShkZXZpY2UgPT4gZGV2aWNlID09PSBkZXZpY2VJZCkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgVW5rbm93biAke2tpbmR9IGRldmljZWApKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKCFkZXZpY2VJZCAmJiBkZXZpY2VzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IGlkeCA9IHRoaXMuX2lucHV0c1traW5kXSA/IGRldmljZXMuZmluZEluZGV4KHYgPT4gdiA9PT0gdGhpcy5faW5wdXRzW2tpbmRdLCB0aGlzKSA6IDA7XG5cdFx0XHRcdFx0XHRcdG5leHREZXZpY2UgPSBkZXZpY2VzWysraWR4ICUgZGV2aWNlcy5sZW5ndGhdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIG5leHREZXZpY2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXh0ID0gUHJvbWlzZS5yZXNvbHZlKGRldmljZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5leHRcblx0XHRcdFx0LnRoZW4oZGV2aWNlID0+IHtcblx0XHRcdFx0XHRpZih0aGlzLl9pbnB1dHNba2luZF0gIT09IGRldmljZSkge1xuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIHZpZGVvIHN0cmVhbXNcblx0XHRcdFx0XHRcdHRoaXMuX2lucHV0c1traW5kXSA9IGRldmljZTtcblx0XHRcdFx0XHRcdC8vIFN0b3AgdHJhY2tzXG5cdFx0XHRcdFx0XHR0aGlzLm1lZGlhLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBjb25zdHJhaW50c1xuXHRcdFx0XHRcdFx0Y29uc3QgY29uc3RyYWludHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnN0cmFpbnRzKTtcblx0XHRcdFx0XHRcdGxldCBwcm9wcyA9IFsnZmFjaW5nTW9kZScsICdkZXZpY2VJZCddO1xuXHRcdFx0XHRcdFx0aWYoIX5fZmFjaW5nTW9kZXMuaW5kZXhPZihkZXZpY2UpKSB7XG5cdFx0XHRcdFx0XHRcdHByb3BzID0gcHJvcHMucmV2ZXJzZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0X3NldENvbnN0cmFpblZhbHVlKGNvbnN0cmFpbnRzW2tpbmRdLCBwcm9wc1swXSwgcHJvcHNbMV0sIGRldmljZSk7XG5cdFx0XHRcdFx0XHRMb2cuZCgnTG9jYWx+X3N3aXRjaERldmljZScsIGtpbmQsIGNvbnN0cmFpbnRzKTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZUNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCgpID0+IHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBDdXJyZW50IHN0cmVhbSBkb2VzIG5vdCBjb250YWluIGEgJHtraW5kfSB0cmFja2ApKTtcblx0fVxuXHQvKipcblx0ICogUHVibGlzaCBhIGxvY2FsIHN0cmVhbVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcm9vbUlkIFRoZSByb29tIElkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSBzdHJlYW0gdHlwZSwgc2VlIHtAbGluayBTdHJlYW1UeXBlc30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuXHQgKiBAcGFyYW0gez9FbGVtZW50fSBjb250YWluZXIgVGhlIGVsZW1lbnQgdGhlIHN0cmVhbSBpcyBhdHRhY2hlZCB0by5cblx0ICogQHBhcmFtIHs/TWVkaWFTdHJlYW1Db25zdHJhaW50c30gW2NvbnN0cmFpbnRzXSBUaGUgc3RyZWFtIGNvbnN0cmFpbnRzLiBJZiBub3QgZGVmaW5lZCB0aGUgY29uc3RyYWludHMgZGVmaW5lZCBpbiBSZWFjaENvbmZpZyB3aWxsIGJlIHVzZWQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgc2hhcmUocm9vbUlkLCB0eXBlLCBjb250YWluZXIsIGNvbnN0cmFpbnRzKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzaGFyZSBhIHN0cmVhbS4nKSk7XG5cdFx0fVxuXHRcdGNvbnN0IHN0cmVhbU1ldGFEYXRhID0ge1xuXHRcdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdFx0ZGV2aWNlOiBjYWNoZS5kZXZpY2UsXG5cdFx0XHRcdHR5cGVcblx0XHRcdH0sXG5cdFx0XHRzaGFyZWRTdHJlYW0gPSBuZXcgTG9jYWwoT2JqZWN0LmFzc2lnbih7cm9vbUlkLCBjb25zdHJhaW50cywgY29udGFpbmVyfSwgc3RyZWFtTWV0YURhdGEpKTtcblx0XHRMb2cuZCgnTG9jYWx+c2hhcmUnLCB7c2hhcmVkU3RyZWFtfSk7XG5cdFx0cmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHNoYXJlZFN0cmVhbS5jb25zdHJhaW50cylcblx0XHRcdC50aGVuKG1lZGlhID0+IHtcblx0XHRcdFx0c2hhcmVkU3RyZWFtLm1lZGlhID0gbWVkaWE7XG5cdFx0XHR9KVxuXHRcdFx0Ly8gR290IE1lZGlhU3RyZWFtLCBwdWJsaXNoIGl0XG5cdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy5wdXNoKGBfL3Jvb21zLyR7cm9vbUlkfS9zdHJlYW1zYCwgc3RyZWFtTWV0YURhdGEpKVxuXHRcdFx0LnRoZW4oc3RyZWFtUmVmID0+IHtcblx0XHRcdFx0c2hhcmVkU3RyZWFtLnVpZCA9IHN0cmVhbVJlZi5uYW1lKCk7XG5cdFx0XHRcdGlmIChzaGFyZWRTdHJlYW0uaXNWaWRlb0xvYWRlZCkge1xuXHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdFx0d2lkdGg6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRzdHJlYW1SZWYudXBkYXRlKHN0cmVhbVNpemUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNoYXJlZFN0cmVhbS5ub2RlLm9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3RyZWFtU2l6ZSA9IHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb0hlaWdodCxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0c3RyZWFtUmVmLnVwZGF0ZShzdHJlYW1TaXplKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsICgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNoYXJlZFN0cmVhbS5ub2RlICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdC8vIFNhdmUgc2hhcmVkU3RyZWFtXG5cdFx0XHRcdGNhY2hlLnN0cmVhbXMuc2hhcmVkW3NoYXJlZFN0cmVhbS51aWRdID0gc2hhcmVkU3RyZWFtO1xuXHRcdFx0XHQvLyBSZW1vdmUgc2hhcmVkIHN0cmVhbSBvbiBEaXNjb25uZWN0XG5cdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtcy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdWJzY3JpYmVycy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byBzdWJzY3JpYmVyc1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHBhdGggPSBgXy9yb29tcy8ke3NoYXJlZFN0cmVhbS5yb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gLFxuXHRcdFx0XHRcdHZhbHVlID0gc25hcERhdGEgPT4gT2JqZWN0LmFzc2lnbih7ZGV2aWNlOiBzbmFwRGF0YS5uYW1lKCl9LCBzbmFwRGF0YS52YWwoKSB8fCB7fSk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9hZGRlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH5zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjYWNoZS5wZWVyQ29ubmVjdGlvbnMub2ZmZXIoc2hhcmVkU3RyZWFtLCBzdWJzY3JpYmVyKVxuXHRcdFx0XHRcdFx0XHQudGhlbihwYyA9PiBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLnB1c2gocGMpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHREYXRhU3luYy5vbihwYXRoLCAnY2hpbGRfcmVtb3ZlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH51bi1zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjb25zdCBjbG9zZWRQQyA9IGNhY2hlLnBlZXJDb25uZWN0aW9ucy5jbG9zZShzaGFyZWRTdHJlYW0udWlkLCBzdWJzY3JpYmVyLmRldmljZSk7XG5cdFx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zID0gc2hhcmVkU3RyZWFtLnBlZXJDb25uZWN0aW9ucy5maWx0ZXIocGMgPT4gcGMgIT09IGNsb3NlZFBDKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRMb2cuZCgnTG9jYWx+c2hhcmVkJywge3NoYXJlZFN0cmVhbX0pO1xuXHRcdFx0XHRyZXR1cm4gc2hhcmVkU3RyZWFtO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9Mb2NhbC5qcyIsImltcG9ydCBSZW1vdGUgZnJvbSAnLi9SZW1vdGUnO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmVhbU1hbmFnZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8qKlxuXHRcdCAqIFNoYXJlZCBsb2NhbCBzdHJlYW1zXG5cdFx0ICogQHR5cGUge3sqOiBMb2NhbH19XG5cdFx0ICovXG5cdFx0dGhpcy5zaGFyZWQgPSB7fTtcblx0XHQvKipcblx0XHQgKiBTdWJzY3JpYmVkIHJlbW90ZSBzdHJlYW1zXG5cdFx0ICogQHR5cGUge3sqOiBSZW1vdGV9fVxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3RlID0ge307XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgUmVtb3RlIHN0cmVhbSByZWZlcmVuY2Vcblx0ICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbURhdGFcblx0ICogQHJldHVybnMge1JlbW90ZX1cblx0ICovXG5cdGdldFJlbW90ZShzdHJlYW1EYXRhKSB7XG5cdFx0bGV0IHJlbW90ZVN0cmVhbSA9IHRoaXMucmVtb3RlW3N0cmVhbURhdGEudWlkXTtcblx0XHRpZihyZW1vdGVTdHJlYW0pIHtcblx0XHRcdHJlbW90ZVN0cmVhbS51cGRhdGUoc3RyZWFtRGF0YSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3RlW3N0cmVhbURhdGEudWlkXSA9IHJlbW90ZVN0cmVhbSA9IG5ldyBSZW1vdGUoc3RyZWFtRGF0YSk7XG5cdFx0fVxuXHRcdHJldHVybiByZW1vdGVTdHJlYW07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgUmVtb3RlIHN0cmVhbSByZWZlcmVuY2Vcblx0ICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbURhdGFcblx0ICogQHJldHVybnMge1JlbW90ZX1cblx0ICovXG5cdGdldFNoYXJlZChzdHJlYW1EYXRhKSB7XG5cdFx0Ly8gVE9ETzogSWYgaXQgZG9lcyBub3QgZXhpc3RzIGxvY2FsbHkgYXMgaXQgc2hvdWxkLCBtYXliZSB3ZSBzaG91bGQgcmVtb3ZlIGl0ID9cblx0XHRyZXR1cm4gdGhpcy5zaGFyZWRbc3RyZWFtRGF0YS51aWRdO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9TdHJlYW1NYW5hZ2VyLmpzIiwiLypnbG9iYWwgUlRDUGVlckNvbm5lY3Rpb24qL1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi91dGlsL01lZGlhJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IHtPUEVORUQsIENMT1NJTkcsIENMT1NFRH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL2FycmF5L2ZpbmQnO1xuXG5jb25zdCBEdGxzU3J0cEtleUFncmVlbWVudCA9IHtEdGxzU3J0cEtleUFncmVlbWVudDogdHJ1ZX07XG5jb25zdCBzZHBDb25zdHJhaW50cyA9IHJlY2VpdmUgPT4gKHtPZmZlclRvUmVjZWl2ZUF1ZGlvOiByZWNlaXZlLCBPZmZlclRvUmVjZWl2ZVZpZGVvOiByZWNlaXZlfSk7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGRpc2Nvbm5lY3RlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9ESVNDT05ORUNURUQgPSAnZGlzY29ubmVjdGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY29ubmVjdGVkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRD0gJ2Nvbm5lY3RlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNvbXBsZXRlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT01QTEVURUQgPSAnY29tcGxldGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2hlY2tpbmdcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkcgPSAnY2hlY2tpbmcnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBjbG9zZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEID0gJ2Nsb3NlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGZhaWxlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQgPSAnZmFpbGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogYW5vdGhlciBzdGF0dXNcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfT1RIRVI9ICdvdGhlcic7XG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuY29uc3QgX3RvSlNPTiA9IG8gPT4gby50b0pTT04gJiYgdHlwZW9mIG8udG9KU09OID09PSAnZnVuY3Rpb24nID8gby50b0pTT04oKSA6IG87XG4vKipcbiAqIFRoZSBQZWVyQ29ubmVjdGlvbi4gQSBQZWVyQ29ubmVjdGlvbiB3aWxsIG9ubHkgY29uY2VybiBvbmUgTWVkaWFTdHJlYW0uXG4gKiBAY2xhc3MgUGVlckNvbm5lY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVlckNvbm5lY3Rpb24ge1xuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YWNrSWQgVGhlIFdlYlJUQyBzdGFjayBJRFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyZWFtSWQgVGhlIFN0cmVhbSBVSURcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZURldmljZSBUaGUgcmVtb3RlIGRldmljZSdzIFVJRFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHB1Ymxpc2ggUHVibGlzaCBvciBTdWJzY3JpYmUgP1xuXHQgKi9cblx0Y29uc3RydWN0b3Ioc3RhY2tJZCwgc3RyZWFtSWQsIHJlbW90ZURldmljZSwgcHVibGlzaCkge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBzdGFjayBpZGVudGlmaWVyLiBVc2VkIHRvIGlkZW50aWZ5IGV4Y2hhbmdlcyBiZXR3ZWVuIDIgZGV2aWNlc1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGFja0lkID0gc3RhY2tJZDtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RyZWFtIGlkLiAoT25lIHN0cmVhbSBwZXIgUlRDUGVlckNvbm5lY3Rpb24pXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0cmVhbUlkID0gc3RyZWFtSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJlbW90ZSBkZXZpY2UgSWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3RlRGV2aWNlID0gcmVtb3RlRGV2aWNlO1xuXHRcdC8qKlxuXHRcdCAqIFBhdGggZm9yIGxvY2FsIHNpZ25hbGl6YXRpb25cblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2xvY2FsUGF0aCA9IGBfL3dlYnJ0Yy8ke3RoaXMuc3RhY2tJZH0vJHt0aGlzLnN0cmVhbUlkfS8ke2NhY2hlLmRldmljZX1gO1xuXHRcdC8qKlxuXHRcdCAqIFBhdGggZm9yIGxvY2FsIHNpZ25hbGl6YXRpb25cblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuX3JlbW90ZVBhdGggPSBgXy93ZWJydGMvJHt0aGlzLnN0YWNrSWR9LyR7dGhpcy5zdHJlYW1JZH0vJHt0aGlzLnJlbW90ZURldmljZX1gO1xuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyBpZiB0aGUgUGVlckNvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQuIChVc2VmdWwgZm9yIHJlbmVnb3RpYXRpb24pLlxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMubmVnb3RpYXRlZCA9IGZhbHNlO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBET00gZWxlbWVudCB3aGVyZSB0aGUgcmVtb3RlIE1lZGlhU3RyZWFtIHdpbGwgYmUgZGlzcGxheWVkXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMubm9kZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogVGhlIERPTSBlbGVtZW50IGNvbnRhaW5nIHRoZSBtZWRpYSBlbGVtZW50XG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuY29udGFpbmVyID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBUaGUgYWN0dWFsIFJUQ1BlZXJDb25uZWN0aW9uXG5cdFx0ICogQHR5cGUge1JUQ1BlZXJDb25uZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMucGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oXG5cdFx0XHR7XG5cdFx0XHRcdGljZVNlcnZlcnM6IGNhY2hlLmNvbmZpZy5pY2VTZXJ2ZXJzXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcHRpb25hbDogW0R0bHNTcnRwS2V5QWdyZWVtZW50XSxcblx0XHRcdFx0bWFuZGF0b3J5OiBzZHBDb25zdHJhaW50cyghcHVibGlzaClcblx0XHRcdH1cblx0XHQpO1xuXHRcdC8vIEhhbmRsZSBJQ0UgY2FuZGlkYXRlc1xuXHRcdHRoaXMucGMub25pY2VjYW5kaWRhdGUgPSBlID0+IHtcblx0XHRcdGlmICghdGhpcy5uZWdvdGlhdGVkICYmIGUuY2FuZGlkYXRlKSB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbmljZWNhbmRpZGF0ZScsIGUuY2FuZGlkYXRlKTtcblx0XHRcdFx0RGF0YVN5bmMucHVzaChgJHt0aGlzLl9sb2NhbFBhdGh9L2ljZWAsIF90b0pTT04oZS5jYW5kaWRhdGUpKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHRoaXMucGMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCB0aGlzLnBjKTtcblx0XHRcdGNvbnN0IGljZUNvbm5lY3Rpb25TdGF0ZSA9IHRoaXMucGMuaWNlQ29ubmVjdGlvblN0YXRlO1xuXHRcdFx0c3dpdGNoIChpY2VDb25uZWN0aW9uU3RhdGUpIHtcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DSEVDS0lORzpcblx0XHRcdFx0XHQvLyBOb3RoaW5nIHRvIGRvIHlldFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRDpcblx0XHRcdFx0XHR0aGlzLl9hdHRhY2hTdHJlYW0oKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdGVJQ0VDYW5kaWRhdGVzKGZhbHNlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT01QTEVURUQ6XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEOlxuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRDpcblx0XHRcdFx0XHRMb2cuZSgnUGVlckNvbm5lY3Rpb25+c3RhdGVEaXNjb25uZWN0ZWQnLCAnRGlzY29ubmVjdCBQZWVyQ29ubmVjdGlvbicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRDpcblx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+c3RhdGVjbG9zZWQnLCAnQ2xvc2UgUGVlckNvbm5lY3Rpb24nKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5lZ290aWF0ZWQgPSB0aGlzLm5lZ290aWF0ZWQgfHwgdGhpcy5pc0Nvbm5lY3RlZDtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnLCB0aGlzLnBjLmljZUdhdGhlcmluZ1N0YXRlKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUGVlckNvbm5lY3Rpb24gc3RhdHVzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXR1cyA9IE9QRU5FRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgSUNFIENhbmRpZGF0ZXMgZGlzY292ZXJ5XG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxpc3RlbiBJbmRpY2F0ZXMgaWYgd2Ugc2hvdWxkIGxpc3RlbiB0byBuZXcgSUNFIGNhbmRpZGF0ZXNcblx0ICovXG5cdF9yZW1vdGVJQ0VDYW5kaWRhdGVzKGxpc3Rlbikge1xuXHRcdGNvbnN0XG5cdFx0XHRwYXRoID0gYCR7dGhpcy5fcmVtb3RlUGF0aH0vaWNlYCxcblx0XHRcdGV2ZW50ID0gJ2NoaWxkX2FkZGVkJztcblx0XHRpZihsaXN0ZW4pIHtcblx0XHRcdC8vIGRvbid0IGxpc3RlbiB0byBpY2UgY2FuZGlkYXRlcyBpZiBwYyBpcyBhbHJlYWR5IHVwIChyZW5lZ290aWF0aW9uKVxuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIHNuYXAgPT4ge1xuXHRcdFx0XHRjb25zdCBjYW5kaWRhdGUgPSBzbmFwLnZhbCgpO1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+YWRkSWNlQ2FuZGlkYXRlJywgY2FuZGlkYXRlKTtcblx0XHRcdFx0dGhpcy5wYy5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBdHRhY2ggdGhlIHJlbW90ZSBNZWRpYVN0cmVhbSB0byBhIG5vZGVcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfYXR0YWNoU3RyZWFtICgpIHtcblx0XHRpZih0aGlzLnJlbW90ZVN0cmVhbSAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBNZWRpYS5hdHRhY2hTdHJlYW0odGhpcy5yZW1vdGVTdHJlYW0sIHRoaXMuY29udGFpbmVyLCB0aGlzLm5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcmVtb3RlIE1lZGlhU3RyZWFtXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdHNldCByZW1vdGVTdHJlYW0gKHN0cmVhbSkge1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9yZW1vdGVTdHJlYW0gPSBzdHJlYW07XG5cdFx0dGhpcy5fYXR0YWNoU3RyZWFtKCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHJlbW90ZSBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRnZXQgcmVtb3RlU3RyZWFtICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVtb3RlU3RyZWFtO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyBpZiB0aGUgUGVlckNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgYmFzZWQgb24gSUNFIGNvbm5lY3Rpb24gc3RhdGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNDb25uZWN0ZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLnBjICYmXG5cdFx0XHQhIX5bXG5cdFx0XHRcdElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRCxcblx0XHRcdFx0SUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVELFxuXHRcdFx0XHRJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUlxuXHRcdFx0XS5pbmRleE9mKHRoaXMucGMuaWNlQ29ubmVjdGlvblN0YXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IFJUQ1BlZXJDb25uZWN0aW9uIGZvciBzdWJzY3JpYmVyc1xuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gaHRtbEVsZW1lbnRcblx0ICogQHJldHVybnMge1Byb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdGFuc3dlcihodG1sRWxlbWVudCkge1xuXHRcdExvZy5pKCdQZWVyQ29ubmVjdGlvbn5hbnN3ZXInLCB7aHRtbEVsZW1lbnQsIHBlZXJDb25uZWN0aW9uOiB0aGlzfSk7XG5cdFx0dGhpcy5jb250YWluZXIgPSBodG1sRWxlbWVudDtcblx0XHRpZihPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snKSkge1xuXHRcdFx0dGhpcy5wYy5vbnRyYWNrID0gZSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbnRyYWNrJywgZS5zdHJlYW1zWzBdKTtcblx0XHRcdFx0dGhpcy5yZW1vdGVTdHJlYW0gPSBlLnN0cmVhbXNbMF07XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBjLm9uYWRkc3RyZWFtID0gZSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbmFkZHN0cmVhbScsIGUuc3RyZWFtKTtcblx0XHRcdFx0dGhpcy5yZW1vdGVTdHJlYW0gPSBlLnN0cmVhbTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gTGlzdGVuIHRvIFNEUCBvZmZlclxuXHRcdERhdGFTeW5jLm9uKGAke3RoaXMuX3JlbW90ZVBhdGh9L3NkcGAsICd2YWx1ZScsIHNuYXAgPT4ge1xuXHRcdFx0Y29uc3Qgc2RwT2ZmZXIgPSBzbmFwLnZhbCgpO1xuXHRcdFx0TG9nLmQoJ09mZmVyJywgc2RwT2ZmZXIpO1xuXHRcdFx0aWYoc2RwT2ZmZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXJlZCcsIHNkcE9mZmVyKTtcblx0XHRcdFx0dGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHBPZmZlcilcblx0XHRcdFx0XHQudGhlbigoKSA9PiBMb2cuZCgnUGVlckNvbm5lY3Rpb25+cmVtb3RlRGVzY3JpcHRpb24nLCB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoL15vZmZlciQvLnRlc3QodGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYy5jcmVhdGVBbnN3ZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1NEUCBpcyBub3QgYW4gb2ZmZXInKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLl9zZXRQcmVmZXJyZWRDb2RlY3MoZGVzY3JpcHRpb24pKVxuXHRcdFx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikpXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufmxvY2FsRGVzY3JpcHRpb24nLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgJHt0aGlzLl9sb2NhbFBhdGh9L3NkcGAsIF90b0pTT04odGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uKSkpXG5cdFx0XHRcdFx0LmNhdGNoKExvZy5yKCdQZWVyQ29ubmVjdGlvbn5sb2NhbERlc2NyaXB0aW9uJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IFJUQ1BlZXJDb25uZWN0aW9uIGZvciBwdWJsaXNoZXJzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSBzdHJlYW1cblx0ICogQHJldHVybnMge1Byb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdG9mZmVyKHN0cmVhbSkge1xuXHRcdExvZy5pKCdQZWVyQ29ubmVjdGlvbn5vZmZlcicsIHtzdHJlYW0sIHBlZXJDb25uZWN0aW9uOiB0aGlzfSk7XG5cdFx0bGV0IHNlbmRUaW1lb3V0O1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLnBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSAoKSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbm5lZ290aWF0aW9ubmVlZGVkJyk7XG5cdFx0XHRcdC8vIERlYm91bmNlIHNlbmQgKHJlbmVnb3RpYXRpb24gdHJpZ2dlcnMgbXVsdGlwbGUgbmVnb3RpYXRpb25uZWVkZWQgZXZlbnRzKVxuXHRcdFx0XHRpZihzZW5kVGltZW91dCkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChzZW5kVGltZW91dCk7XG5cdFx0XHRcdFx0c2VuZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbmRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VuZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMuX3NlbmRPZmZlcigpXG5cdFx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXInLCBlKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sIDIwKTtcblx0XHRcdH07XG5cdFx0XHREYXRhU3luYy5vbihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnLCBzbmFwID0+IHtcblx0XHRcdFx0Y29uc3Qgc2RwQW5zd2VyID0gc25hcC52YWwoKTtcblx0XHRcdFx0aWYoc2RwQW5zd2VyICE9IG51bGwpIHtcblx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXIjYW5zd2VyZWQnLCBzZHBBbnN3ZXIpO1xuXHRcdFx0XHRcdHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwQW5zd2VyKVxuXHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXIjcmVtb3RlRGVzY3JpcHRpb24nLCB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goTG9nLmUuYmluZChMb2csICdQZWVyQ29ubmVjdGlvbn5yZW1vdGVEZXNjcmlwdGlvbicpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hbHRlclN0cmVhbShzdHJlYW0sICdhZGQnKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgU0RQIG9mZmVyIGFuZCBwdXNoIGl0XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3NlbmRPZmZlcigpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NlbmRPZmZlcicpO1xuXHRcdHJldHVybiB0aGlzLnBjLmNyZWF0ZU9mZmVyKClcblx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMuX3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikpXG5cdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pKVxuXHRcdFx0LnRoZW4oKCkgPT4gTG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlI2xvY2FsRGVzY3JpcHRpb24nLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMudXBkYXRlKGAke3RoaXMuX2xvY2FsUGF0aH0vc2RwYCwgX3RvSlNPTih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pKSk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkL1JlbW92ZSB0cmFja3MgdG8gdGhlIFBlZXJDb25uZWN0aW9uIHN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2FsdGVyU3RyZWFtKHN0cmVhbSwgbWV0aG9kKSB7XG5cdFx0aWYoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsIGAke21ldGhvZH1UcmFja2ApKSB7XG5cdFx0XHRzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0aGlzLnBjW2Ake21ldGhvZH1UcmFja2BdKHRyYWNrLCBzdHJlYW0pLCB0aGlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wY1tgJHttZXRob2R9U3RyZWFtYF0oc3RyZWFtKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVzdGFydCBTRFAgbmVnb3RpYXRpb24gZm9sbG93aW5nIGEgTWVkaWFTdHJlYW0gY2hhbmdlXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG9sZFN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBuZXdTdHJlYW1cblx0ICovXG5cdHJlbmVnb3RpYXRlKG9sZFN0cmVhbSwgbmV3U3RyZWFtKSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJyk7XG5cdFx0aWYoKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnZ2V0U2VuZGVycycpKVxuXHRcdFx0JiYgKCdSVENSdHBTZW5kZXInIGluIHdpbmRvdylcblx0XHRcdCYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUnRwU2VuZGVyLnByb3RvdHlwZSwgJ3JlcGxhY2VUcmFjaycpKXtcblxuXHRcdFx0Ly8gbW96UlRDUGVlckNvbm5lY3Rpb24gaW1wbGVtZW50YXRpb25cblx0XHRcdHRoaXMucGMuZ2V0U2VuZGVycygpLmZvckVhY2goc2VuZGVyID0+IHtcblx0XHRcdFx0bGV0IG5ld1RyYWNrcztcblx0XHRcdFx0c3dpdGNoIChzZW5kZXIudHJhY2sua2luZCkge1xuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzpcblx0XHRcdFx0XHRcdG5ld1RyYWNrcyA9IG5ld1N0cmVhbS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gbmV3U3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobmV3VHJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbmRlci5yZXBsYWNlVHJhY2sobmV3VHJhY2tzWzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9zZW5kT2ZmZXIoKVxuXHRcdFx0XHQuY2F0Y2goZSA9PiB7TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJywgZSk7fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2FsdGVyU3RyZWFtKG9sZFN0cmVhbSwgJ3JlbW92ZScpO1xuXHRcdFx0dGhpcy5fYWx0ZXJTdHJlYW0obmV3U3RyZWFtLCAnYWRkJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoZSBQZWVyQ29ubmVjdGlvbiBhbmQgc3RvcCBsaXN0ZW5pbmcgdG8gU0RQIG1lc3NhZ2VzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLl9zdGF0dXMgPT09IE9QRU5FRCkge1xuXHRcdFx0dGhpcy5fc3RhdHVzID0gQ0xPU0lORztcblx0XHRcdC8vIFN0b3AgZGlzcGxheVxuXHRcdFx0aWYgKHRoaXMubm9kZSkge1xuXHRcdFx0XHR0aGlzLm5vZGUuc3RvcCAmJiB0aGlzLm5vZGUuc3RvcCgpO1xuXHRcdFx0XHR0aGlzLm5vZGUuc3JjT2JqZWN0ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIHJlbW90ZSBJQ0UgY2FuZGlkYXRlc1xuXHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBTRFAgbWVzc2FnZXNcblx0XHRcdERhdGFTeW5jLm9mZihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnKTtcblx0XHRcdC8vIFJlbW92ZSBkYXRhXG5cdFx0XHREYXRhU3luYy5yZW1vdmUodGhpcy5fbG9jYWxQYXRoKTtcblx0XHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uXG5cdFx0XHRpZiAodGhpcy5wYyAmJiB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlICE9PSAnY2xvc2VkJykge1xuXHRcdFx0XHR0aGlzLnBjLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMucGMuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRWRpdHMgdGhlIFNEUCB0byBzZXQgdGhlIHByZWZlcnJlZCBhdWRpby92aWRlbyBjb2RlY1xuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtSVENTZXNzaW9uRGVzY3JpcHRpb259IGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiByZXRyaWV2ZWQgYnkgY3JlYXRlT2ZmZXIvY3JlYXRlQW5zd2VyXG5cdCAqIEByZXR1cm5zIHtSVENTZXNzaW9uRGVzY3JpcHRpb258e3NkcDogc3RyaW5nLCB0eXBlOiBzdHJpbmd9fVxuXHQgKi9cblx0X3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikge1xuXHRcdGlmKGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRWaWRlb0NvZGVjIHx8IGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRBdWRpb0NvZGVjKSB7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NldFByZWZlcnJlZENvZGVjcycsIHtkZXNjcmlwdGlvbiwgY29uZmlnOiBjYWNoZS5jb25maWd9KTtcblx0XHRcdGNvbnN0IHNkcExpbmVzID0gZGVzY3JpcHRpb24uc2RwLnNwbGl0KC9cXHI/XFxuLyk7XG5cdFx0XHRjb25zdCBtZWRpYXMgPSB7YXVkaW86IFtdLCB2aWRlbzogW119O1xuXHRcdFx0bGV0IGN1cnJlbnQgPSBudWxsO1xuXHRcdFx0Ly8gUGFyc2UgU0RQXG5cdFx0XHRzZHBMaW5lcy5mb3JFYWNoKChzZHBMaW5lLCBpKSA9PiB7XG5cdFx0XHRcdGlmKC9ebT0vLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBkID0gL15tPShcXHcrKVxcc1swLTlcXC9dK1xcc1tBLVphLXowLTlcXC9dK1xccyhbMC05XFxzXSspLy5leGVjKHNkcExpbmUpO1xuXHRcdFx0XHRcdGN1cnJlbnQgPSB7XG5cdFx0XHRcdFx0XHRmbXQ6IGRbMl0uc3BsaXQoL1xccy8pLFxuXHRcdFx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdFx0XHRjb2RlY3M6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRtZWRpYXNbZFsxXV0ucHVzaChjdXJyZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmKGN1cnJlbnQgJiYgL15hPXJ0cG1hcDovLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBjID0gL15hPXJ0cG1hcDooXFxkKylcXHMoW2EtekEtWjAtOVxcLVxcL10rKS8uZXhlYyhzZHBMaW5lKTtcblx0XHRcdFx0XHRpZihjKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50LmNvZGVjcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aWQ6IGNbMV0sXG5cdFx0XHRcdFx0XHRcdG5hbWU6IGNbMl0sXG5cdFx0XHRcdFx0XHRcdGluZGV4OiBpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBtZWRpYXMpO1xuXHRcdFx0bGV0IHVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcHJlZmVyID0gKG1lZGlhTGlzdCwgcHJlZmVyZWRDb2RlYykgPT4ge1xuXHRcdFx0XHRtZWRpYUxpc3QuZm9yRWFjaChtZWRpYSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBtZWRpYS5jb2RlY3MuZmluZChjb2RlYyA9PiBwcmVmZXJlZENvZGVjLnRlc3QoY29kZWMubmFtZSkpO1xuXHRcdFx0XHRcdGlmKHNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmbXQgPSBbc2VsZWN0ZWQuaWRdLmNvbmNhdChtZWRpYS5mbXQuZmlsdGVyKGlkcyA9PiBpZHMgIT09IHNlbGVjdGVkLmlkKSk7XG5cdFx0XHRcdFx0XHRzZHBMaW5lc1ttZWRpYS5pbmRleF0gPSBzZHBMaW5lc1ttZWRpYS5pbmRleF0ucmVwbGFjZShtZWRpYS5mbXQuam9pbignICcpLCBmbXQuam9pbignICcpKTtcblx0XHRcdFx0XHRcdHVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLnZpZGVvLCBjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLmF1ZGlvLCBjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih1cGRhdGUpIHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0c2RwOiBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSxcblx0XHRcdFx0XHR0eXBlOiBkZXNjcmlwdGlvbi50eXBlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjcmlwdGlvbjtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uLmpzIiwiaW1wb3J0IFBlZXJDb25uZWN0aW9uIGZyb20gJy4vUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuXG5jb25zdCBnZXRTdGFja0lkID0gKGlkMSwgaWQyKSA9PiBpZDEubG9jYWxlQ29tcGFyZShpZDIsICdlbi11cycpID4gMCA/IGAke2lkMX0tJHtpZDJ9YCA6YCR7aWQyfS0ke2lkMX1gO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqXG5cdFx0ICogV2ViUlRDIHN0YWNrc1xuXHRcdCAqIEB0eXBlIHt7Kjogeyo6IFBlZXJDb25uZWN0aW9ufX19XG5cdFx0ICovXG5cdFx0dGhpcy5zdGFja3MgPSB7fTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldCBhIFBlZXJDb25uZWN0aW9uIG9iamVjdCBmb3IgYSBzcGVjaWZpYyBzdHJlYW1cblx0ICogQHBhcmFtIHtMb2NhbHxSZW1vdGV9IHN0cmVhbVxuXHQgKiBAcGFyYW0ge1JlbW90ZXx7dG86IHN0cmluZywgZGV2aWNlOnN0cmluZ319IHJlbW90ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHB1Ymxpc2hcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGdldFBlZXJDb25uZWN0aW9uKHN0cmVhbSwgcmVtb3RlLCBwdWJsaXNoKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBnZXQgYSBQZWVyQ29ubmVjdGlvblxcJ3Mgb2JqZWN0LicpKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RhY2tJZCA9IGdldFN0YWNrSWQocmVtb3RlLmRldmljZSwgY2FjaGUuZGV2aWNlKTtcblxuXHRcdGlmKHRoaXMuc3RhY2tzW3N0YWNrSWRdICYmIHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKTtcblx0XHR9XG5cblx0XHRpZighdGhpcy5zdGFja3Nbc3RhY2tJZF0pIHtcblx0XHRcdHRoaXMuc3RhY2tzW3N0YWNrSWRdID0ge307XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXNlcnMgPSB7fTtcblx0XHR1c2Vyc1tjYWNoZS51c2VyLnVpZF0gPSB0cnVlO1xuXHRcdHVzZXJzW3JlbW90ZS5mcm9tIHx8IHJlbW90ZS50b10gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy93ZWJydGMvJHtzdGFja0lkfWAsIHVzZXJzKVxuXHRcdFx0LnRoZW4oKCkgPT4gbmV3IFBlZXJDb25uZWN0aW9uKHN0YWNrSWQsIHN0cmVhbS51aWQsIHJlbW90ZS5kZXZpY2UsIHB1Ymxpc2gpKVxuXHRcdFx0LnRoZW4ocGMgPT4ge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2VyfmdldFBlZXJDb25uZWN0aW9uJywge3N0YWNrSWQsIHN0cmVhbUlkOiBzdHJlYW0udWlkLCBwY30pO1xuXHRcdFx0XHR0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW0udWlkXSA9IHBjO1xuXHRcdFx0XHRyZXR1cm4gcGM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+Z2V0UGVlckNvbm5lY3Rpb24nKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIG9mZmVyIGZvciBhIHN0cmVhbSB0byBhIHN1YnNjcmliZXJcblx0ICogQHBhcmFtIHtMb2NhbH0gbG9jYWxTdHJlYW1cblx0ICogQHBhcmFtIHtvYmplY3R9IHN1YnNjcmliZXJcblx0ICogQHJldHVybiB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0b2ZmZXIobG9jYWxTdHJlYW0sIHN1YnNjcmliZXIpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2Vyfm9mZmVyJywge2xvY2FsU3RyZWFtLCBzdWJzY3JpYmVyfSk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGVlckNvbm5lY3Rpb24obG9jYWxTdHJlYW0sIHN1YnNjcmliZXIsIHRydWUpXG5cdFx0XHQudGhlbihwYyA9PiBwYy5vZmZlcihsb2NhbFN0cmVhbS5tZWRpYSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFuc3dlciB0byB0aGUgb2ZmZXIgZnJvbSB0aGUgcHVibGlzaGVyXG5cdCAqIEBwYXJhbSB7UmVtb3RlfSByZW1vdGVTdHJlYW1cblx0ICogQHBhcmFtIHtFbGVtZW50fSBodG1sRWxlbWVudFxuXHQgKiBAcmV0dXJuIHsqfFByb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdGFuc3dlcihyZW1vdGVTdHJlYW0sIGh0bWxFbGVtZW50KSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9uTWFuYWdlcn5hbnN3ZXInLCB7cmVtb3RlU3RyZWFtLCBodG1sRWxlbWVudH0pO1xuXHRcdHJldHVybiB0aGlzLmdldFBlZXJDb25uZWN0aW9uKHJlbW90ZVN0cmVhbSwgcmVtb3RlU3RyZWFtLCBmYWxzZSlcblx0XHRcdC50aGVuKHBjID0+IHBjLmFuc3dlcihodG1sRWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGEgUGVlckNvbm5lY3Rpb25cblx0ICogQHBhcmFtIHN0cmVhbUlkXG5cdCAqIEBwYXJhbSByZW1vdGVEZXZpY2Vcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGNsb3NlKHN0cmVhbUlkLCByZW1vdGVEZXZpY2UpIHtcblx0XHRjb25zdCBzdGFja0lkID0gZ2V0U3RhY2tJZChyZW1vdGVEZXZpY2UsIGNhY2hlLmRldmljZSksXG5cdFx0XHRwYyA9IHRoaXMuc3RhY2tzW3N0YWNrSWRdID8gdGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtSWRdIDogbnVsbDtcblx0XHRpZihwYyl7XG5cdFx0XHRwYy5jbG9zZSgpO1xuXHRcdFx0dGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtSWRdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF07XG5cdFx0XHRyZXR1cm4gcGM7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZpbmQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZm4vYXJyYXkvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGZpbmQgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KVxuICAsIEtFWSAgICAgPSAnZmluZCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIgLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIFNEUCBoZWxwZXJzLlxudmFyIFNEUFV0aWxzID0ge307XG5cbi8vIEdlbmVyYXRlIGFuIGFscGhhbnVtZXJpYyBpZGVudGlmaWVyIGZvciBjbmFtZSBvciBtaWRzLlxuLy8gVE9ETzogdXNlIFVVSURzIGluc3RlYWQ/IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plZC85ODI4ODNcblNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEwKTtcbn07XG5cbi8vIFRoZSBSVENQIENOQU1FIHVzZWQgYnkgYWxsIHBlZXJjb25uZWN0aW9ucyBmcm9tIHRoZSBzYW1lIEpTLlxuU0RQVXRpbHMubG9jYWxDTmFtZSA9IFNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllcigpO1xuXG4vLyBTcGxpdHMgU0RQIGludG8gbGluZXMsIGRlYWxpbmcgd2l0aCBib3RoIENSTEYgYW5kIExGLlxuU0RQVXRpbHMuc3BsaXRMaW5lcyA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgcmV0dXJuIGJsb2IudHJpbSgpLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBsaW5lLnRyaW0oKTtcbiAgfSk7XG59O1xuLy8gU3BsaXRzIFNEUCBpbnRvIHNlc3Npb25wYXJ0IGFuZCBtZWRpYXNlY3Rpb25zLiBFbnN1cmVzIENSTEYuXG5TRFBVdGlscy5zcGxpdFNlY3Rpb25zID0gZnVuY3Rpb24oYmxvYikge1xuICB2YXIgcGFydHMgPSBibG9iLnNwbGl0KCdcXG5tPScpO1xuICByZXR1cm4gcGFydHMubWFwKGZ1bmN0aW9uKHBhcnQsIGluZGV4KSB7XG4gICAgcmV0dXJuIChpbmRleCA+IDAgPyAnbT0nICsgcGFydCA6IHBhcnQpLnRyaW0oKSArICdcXHJcXG4nO1xuICB9KTtcbn07XG5cbi8vIFJldHVybnMgbGluZXMgdGhhdCBzdGFydCB3aXRoIGEgY2VydGFpbiBwcmVmaXguXG5TRFBVdGlscy5tYXRjaFByZWZpeCA9IGZ1bmN0aW9uKGJsb2IsIHByZWZpeCkge1xuICByZXR1cm4gU0RQVXRpbHMuc3BsaXRMaW5lcyhibG9iKS5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBsaW5lLmluZGV4T2YocHJlZml4KSA9PT0gMDtcbiAgfSk7XG59O1xuXG4vLyBQYXJzZXMgYW4gSUNFIGNhbmRpZGF0ZSBsaW5lLiBTYW1wbGUgaW5wdXQ6XG4vLyBjYW5kaWRhdGU6NzAyNzg2MzUwIDIgdWRwIDQxODE5OTAyIDguOC44LjggNjA3NjkgdHlwIHJlbGF5IHJhZGRyIDguOC44Ljhcbi8vIHJwb3J0IDU1OTk2XCJcblNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHM7XG4gIC8vIFBhcnNlIGJvdGggdmFyaWFudHMuXG4gIGlmIChsaW5lLmluZGV4T2YoJ2E9Y2FuZGlkYXRlOicpID09PSAwKSB7XG4gICAgcGFydHMgPSBsaW5lLnN1YnN0cmluZygxMikuc3BsaXQoJyAnKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEwKS5zcGxpdCgnICcpO1xuICB9XG5cbiAgdmFyIGNhbmRpZGF0ZSA9IHtcbiAgICBmb3VuZGF0aW9uOiBwYXJ0c1swXSxcbiAgICBjb21wb25lbnQ6IHBhcnRzWzFdLFxuICAgIHByb3RvY29sOiBwYXJ0c1syXS50b0xvd2VyQ2FzZSgpLFxuICAgIHByaW9yaXR5OiBwYXJzZUludChwYXJ0c1szXSwgMTApLFxuICAgIGlwOiBwYXJ0c1s0XSxcbiAgICBwb3J0OiBwYXJzZUludChwYXJ0c1s1XSwgMTApLFxuICAgIC8vIHNraXAgcGFydHNbNl0gPT0gJ3R5cCdcbiAgICB0eXBlOiBwYXJ0c1s3XVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSA4OyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzd2l0Y2ggKHBhcnRzW2ldKSB7XG4gICAgICBjYXNlICdyYWRkcic6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdycG9ydCc6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCA9IHBhcnNlSW50KHBhcnRzW2kgKyAxXSwgMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RjcHR5cGUnOlxuICAgICAgICBjYW5kaWRhdGUudGNwVHlwZSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiAvLyBleHRlbnNpb24gaGFuZGxpbmcsIGluIHBhcnRpY3VsYXIgdWZyYWdcbiAgICAgICAgY2FuZGlkYXRlW3BhcnRzW2ldXSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjYW5kaWRhdGU7XG59O1xuXG4vLyBUcmFuc2xhdGVzIGEgY2FuZGlkYXRlIG9iamVjdCBpbnRvIFNEUCBjYW5kaWRhdGUgYXR0cmlidXRlLlxuU0RQVXRpbHMud3JpdGVDYW5kaWRhdGUgPSBmdW5jdGlvbihjYW5kaWRhdGUpIHtcbiAgdmFyIHNkcCA9IFtdO1xuICBzZHAucHVzaChjYW5kaWRhdGUuZm91bmRhdGlvbik7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5jb21wb25lbnQpO1xuICBzZHAucHVzaChjYW5kaWRhdGUucHJvdG9jb2wudG9VcHBlckNhc2UoKSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wcmlvcml0eSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5pcCk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wb3J0KTtcblxuICB2YXIgdHlwZSA9IGNhbmRpZGF0ZS50eXBlO1xuICBzZHAucHVzaCgndHlwJyk7XG4gIHNkcC5wdXNoKHR5cGUpO1xuICBpZiAodHlwZSAhPT0gJ2hvc3QnICYmIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyAmJlxuICAgICAgY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KSB7XG4gICAgc2RwLnB1c2goJ3JhZGRyJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRBZGRyZXNzKTsgLy8gd2FzOiByZWxBZGRyXG4gICAgc2RwLnB1c2goJ3Jwb3J0Jyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KTsgLy8gd2FzOiByZWxQb3J0XG4gIH1cbiAgaWYgKGNhbmRpZGF0ZS50Y3BUeXBlICYmIGNhbmRpZGF0ZS5wcm90b2NvbC50b0xvd2VyQ2FzZSgpID09PSAndGNwJykge1xuICAgIHNkcC5wdXNoKCd0Y3B0eXBlJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnRjcFR5cGUpO1xuICB9XG4gIHJldHVybiAnY2FuZGlkYXRlOicgKyBzZHAuam9pbignICcpO1xufTtcblxuLy8gUGFyc2VzIGFuIGljZS1vcHRpb25zIGxpbmUsIHJldHVybnMgYW4gYXJyYXkgb2Ygb3B0aW9uIHRhZ3MuXG4vLyBhPWljZS1vcHRpb25zOmZvbyBiYXJcblNEUFV0aWxzLnBhcnNlSWNlT3B0aW9ucyA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgcmV0dXJuIGxpbmUuc3Vic3RyKDE0KS5zcGxpdCgnICcpO1xufVxuXG4vLyBQYXJzZXMgYW4gcnRwbWFwIGxpbmUsIHJldHVybnMgUlRDUnRwQ29kZGVjUGFyYW1ldGVycy4gU2FtcGxlIGlucHV0OlxuLy8gYT1ydHBtYXA6MTExIG9wdXMvNDgwMDAvMlxuU0RQVXRpbHMucGFyc2VSdHBNYXAgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDkpLnNwbGl0KCcgJyk7XG4gIHZhciBwYXJzZWQgPSB7XG4gICAgcGF5bG9hZFR5cGU6IHBhcnNlSW50KHBhcnRzLnNoaWZ0KCksIDEwKSAvLyB3YXM6IGlkXG4gIH07XG5cbiAgcGFydHMgPSBwYXJ0c1swXS5zcGxpdCgnLycpO1xuXG4gIHBhcnNlZC5uYW1lID0gcGFydHNbMF07XG4gIHBhcnNlZC5jbG9ja1JhdGUgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApOyAvLyB3YXM6IGNsb2NrcmF0ZVxuICAvLyB3YXM6IGNoYW5uZWxzXG4gIHBhcnNlZC5udW1DaGFubmVscyA9IHBhcnRzLmxlbmd0aCA9PT0gMyA/IHBhcnNlSW50KHBhcnRzWzJdLCAxMCkgOiAxO1xuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGUgYW4gYT1ydHBtYXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvclxuLy8gUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBNYXAgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICB9XG4gIHJldHVybiAnYT1ydHBtYXA6JyArIHB0ICsgJyAnICsgY29kZWMubmFtZSArICcvJyArIGNvZGVjLmNsb2NrUmF0ZSArXG4gICAgICAoY29kZWMubnVtQ2hhbm5lbHMgIT09IDEgPyAnLycgKyBjb2RlYy5udW1DaGFubmVscyA6ICcnKSArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIGFuIGE9ZXh0bWFwIGxpbmUgKGhlYWRlcmV4dGVuc2lvbiBmcm9tIFJGQyA1Mjg1KS4gU2FtcGxlIGlucHV0OlxuLy8gYT1leHRtYXA6MiB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XG4vLyBhPWV4dG1hcDoyL3NlbmRvbmx5IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcblNEUFV0aWxzLnBhcnNlRXh0bWFwID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cig5KS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGlkOiBwYXJzZUludChwYXJ0c1swXSwgMTApLFxuICAgIGRpcmVjdGlvbjogcGFydHNbMF0uaW5kZXhPZignLycpID4gMCA/IHBhcnRzWzBdLnNwbGl0KCcvJylbMV0gOiAnc2VuZHJlY3YnLFxuICAgIHVyaTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEdlbmVyYXRlcyBhPWV4dG1hcCBsaW5lIGZyb20gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uUGFyYW1ldGVycyBvclxuLy8gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uLlxuU0RQVXRpbHMud3JpdGVFeHRtYXAgPSBmdW5jdGlvbihoZWFkZXJFeHRlbnNpb24pIHtcbiAgcmV0dXJuICdhPWV4dG1hcDonICsgKGhlYWRlckV4dGVuc2lvbi5pZCB8fCBoZWFkZXJFeHRlbnNpb24ucHJlZmVycmVkSWQpICtcbiAgICAgIChoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uICYmIGhlYWRlckV4dGVuc2lvbi5kaXJlY3Rpb24gIT09ICdzZW5kcmVjdidcbiAgICAgICAgICA/ICcvJyArIGhlYWRlckV4dGVuc2lvbi5kaXJlY3Rpb25cbiAgICAgICAgICA6ICcnKSArXG4gICAgICAnICcgKyBoZWFkZXJFeHRlbnNpb24udXJpICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgYW4gZnRtcCBsaW5lLCByZXR1cm5zIGRpY3Rpb25hcnkuIFNhbXBsZSBpbnB1dDpcbi8vIGE9Zm10cDo5NiB2YnI9b247Y25nPW9uXG4vLyBBbHNvIGRlYWxzIHdpdGggdmJyPW9uOyBjbmc9b25cblNEUFV0aWxzLnBhcnNlRm10cCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga3Y7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKGxpbmUuaW5kZXhPZignICcpICsgMSkuc3BsaXQoJzsnKTtcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgIGt2ID0gcGFydHNbal0udHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgcGFyc2VkW2t2WzBdLnRyaW0oKV0gPSBrdlsxXTtcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGVzIGFuIGE9ZnRtcCBsaW5lIGZyb20gUlRDUnRwQ29kZWNDYXBhYmlsaXR5IG9yIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlRm10cCA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gIHZhciBsaW5lID0gJyc7XG4gIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gIH1cbiAgaWYgKGNvZGVjLnBhcmFtZXRlcnMgJiYgT2JqZWN0LmtleXMoY29kZWMucGFyYW1ldGVycykubGVuZ3RoKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGNvZGVjLnBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHBhcmFtcy5wdXNoKHBhcmFtICsgJz0nICsgY29kZWMucGFyYW1ldGVyc1twYXJhbV0pO1xuICAgIH0pO1xuICAgIGxpbmUgKz0gJ2E9Zm10cDonICsgcHQgKyAnICcgKyBwYXJhbXMuam9pbignOycpICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIGxpbmU7XG59O1xuXG4vLyBQYXJzZXMgYW4gcnRjcC1mYiBsaW5lLCByZXR1cm5zIFJUQ1BSdGNwRmVlZGJhY2sgb2JqZWN0LiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXJ0Y3AtZmI6OTggbmFjayBycHNpXG5TRFBVdGlscy5wYXJzZVJ0Y3BGYiA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKCcgJykgKyAxKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHBhcnRzLnNoaWZ0KCksXG4gICAgcGFyYW1ldGVyOiBwYXJ0cy5qb2luKCcgJylcbiAgfTtcbn07XG4vLyBHZW5lcmF0ZSBhPXJ0Y3AtZmIgbGluZXMgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdGNwRmIgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgbGluZXMgPSAnJztcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICBpZiAoY29kZWMucnRjcEZlZWRiYWNrICYmIGNvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGgpIHtcbiAgICAvLyBGSVhNRTogc3BlY2lhbCBoYW5kbGluZyBmb3IgdHJyLWludD9cbiAgICBjb2RlYy5ydGNwRmVlZGJhY2suZm9yRWFjaChmdW5jdGlvbihmYikge1xuICAgICAgbGluZXMgKz0gJ2E9cnRjcC1mYjonICsgcHQgKyAnICcgKyBmYi50eXBlICtcbiAgICAgIChmYi5wYXJhbWV0ZXIgJiYgZmIucGFyYW1ldGVyLmxlbmd0aCA/ICcgJyArIGZiLnBhcmFtZXRlciA6ICcnKSArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGxpbmVzO1xufTtcblxuLy8gUGFyc2VzIGFuIFJGQyA1NTc2IHNzcmMgbWVkaWEgYXR0cmlidXRlLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXNzcmM6MzczNTkyODU1OSBjbmFtZTpzb21ldGhpbmdcblNEUFV0aWxzLnBhcnNlU3NyY01lZGlhID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgc3AgPSBsaW5lLmluZGV4T2YoJyAnKTtcbiAgdmFyIHBhcnRzID0ge1xuICAgIHNzcmM6IHBhcnNlSW50KGxpbmUuc3Vic3RyKDcsIHNwIC0gNyksIDEwKVxuICB9O1xuICB2YXIgY29sb24gPSBsaW5lLmluZGV4T2YoJzonLCBzcCk7XG4gIGlmIChjb2xvbiA+IC0xKSB7XG4gICAgcGFydHMuYXR0cmlidXRlID0gbGluZS5zdWJzdHIoc3AgKyAxLCBjb2xvbiAtIHNwIC0gMSk7XG4gICAgcGFydHMudmFsdWUgPSBsaW5lLnN1YnN0cihjb2xvbiArIDEpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSk7XG4gIH1cbiAgcmV0dXJuIHBhcnRzO1xufTtcblxuLy8gRXh0cmFjdHMgdGhlIE1JRCAoUkZDIDU4ODgpIGZyb20gYSBtZWRpYSBzZWN0aW9uLlxuLy8gcmV0dXJucyB0aGUgTUlEIG9yIHVuZGVmaW5lZCBpZiBubyBtaWQgbGluZSB3YXMgZm91bmQuXG5TRFBVdGlscy5nZXRNaWQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIG1pZCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9bWlkOicpWzBdO1xuICBpZiAobWlkKSB7XG4gICAgcmV0dXJuIG1pZC5zdWJzdHIoNik7XG4gIH1cbn1cblxuU0RQVXRpbHMucGFyc2VGaW5nZXJwcmludCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoMTQpLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAgYWxnb3JpdGhtOiBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpLCAvLyBhbGdvcml0aG0gaXMgY2FzZS1zZW5zaXRpdmUgaW4gRWRnZS5cbiAgICB2YWx1ZTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEV4dHJhY3RzIERUTFMgcGFyYW1ldGVycyBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuLy8gRklYTUU6IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGZ1bmN0aW9ucyB0aGlzIHNob3VsZCBvbmx5XG4vLyAgIGdldCB0aGUgZmluZ2VycHJpbnQgbGluZSBhcyBpbnB1dC4gU2VlIGFsc28gZ2V0SWNlUGFyYW1ldGVycy5cblNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24gKyBzZXNzaW9ucGFydCxcbiAgICAgICdhPWZpbmdlcnByaW50OicpO1xuICAvLyBOb3RlOiBhPXNldHVwIGxpbmUgaXMgaWdub3JlZCBzaW5jZSB3ZSB1c2UgdGhlICdhdXRvJyByb2xlLlxuICAvLyBOb3RlMjogJ2FsZ29yaXRobScgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlIGV4Y2VwdCBpbiBFZGdlLlxuICByZXR1cm4ge1xuICAgIHJvbGU6ICdhdXRvJyxcbiAgICBmaW5nZXJwcmludHM6IGxpbmVzLm1hcChTRFBVdGlscy5wYXJzZUZpbmdlcnByaW50KVxuICB9O1xufTtcblxuLy8gU2VyaWFsaXplcyBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcywgc2V0dXBUeXBlKSB7XG4gIHZhciBzZHAgPSAnYT1zZXR1cDonICsgc2V0dXBUeXBlICsgJ1xcclxcbic7XG4gIHBhcmFtcy5maW5nZXJwcmludHMuZm9yRWFjaChmdW5jdGlvbihmcCkge1xuICAgIHNkcCArPSAnYT1maW5nZXJwcmludDonICsgZnAuYWxnb3JpdGhtICsgJyAnICsgZnAudmFsdWUgKyAnXFxyXFxuJztcbiAgfSk7XG4gIHJldHVybiBzZHA7XG59O1xuLy8gUGFyc2VzIElDRSBpbmZvcm1hdGlvbiBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuLy8gRklYTUU6IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGZ1bmN0aW9ucyB0aGlzIHNob3VsZCBvbmx5XG4vLyAgIGdldCB0aGUgaWNlLXVmcmFnIGFuZCBpY2UtcHdkIGxpbmVzIGFzIGlucHV0LlxuU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAvLyBTZWFyY2ggaW4gc2Vzc2lvbiBwYXJ0LCB0b28uXG4gIGxpbmVzID0gbGluZXMuY29uY2F0KFNEUFV0aWxzLnNwbGl0TGluZXMoc2Vzc2lvbnBhcnQpKTtcbiAgdmFyIGljZVBhcmFtZXRlcnMgPSB7XG4gICAgdXNlcm5hbWVGcmFnbWVudDogbGluZXMuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHJldHVybiBsaW5lLmluZGV4T2YoJ2E9aWNlLXVmcmFnOicpID09PSAwO1xuICAgIH0pWzBdLnN1YnN0cigxMiksXG4gICAgcGFzc3dvcmQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gbGluZS5pbmRleE9mKCdhPWljZS1wd2Q6JykgPT09IDA7XG4gICAgfSlbMF0uc3Vic3RyKDEwKVxuICB9O1xuICByZXR1cm4gaWNlUGFyYW1ldGVycztcbn07XG5cbi8vIFNlcmlhbGl6ZXMgSUNFIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHJldHVybiAnYT1pY2UtdWZyYWc6JyArIHBhcmFtcy51c2VybmFtZUZyYWdtZW50ICsgJ1xcclxcbicgK1xuICAgICAgJ2E9aWNlLXB3ZDonICsgcGFyYW1zLnBhc3N3b3JkICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIFJUQ1J0cFBhcmFtZXRlcnMuXG5TRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0ge1xuICAgIGNvZGVjczogW10sXG4gICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgZmVjTWVjaGFuaXNtczogW10sXG4gICAgcnRjcDogW11cbiAgfTtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICBmb3IgKHZhciBpID0gMzsgaSA8IG1saW5lLmxlbmd0aDsgaSsrKSB7IC8vIGZpbmQgYWxsIGNvZGVjcyBmcm9tIG1saW5lWzMuLl1cbiAgICB2YXIgcHQgPSBtbGluZVtpXTtcbiAgICB2YXIgcnRwbWFwbGluZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0cG1hcDonICsgcHQgKyAnICcpWzBdO1xuICAgIGlmIChydHBtYXBsaW5lKSB7XG4gICAgICB2YXIgY29kZWMgPSBTRFBVdGlscy5wYXJzZVJ0cE1hcChydHBtYXBsaW5lKTtcbiAgICAgIHZhciBmbXRwcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICAgIG1lZGlhU2VjdGlvbiwgJ2E9Zm10cDonICsgcHQgKyAnICcpO1xuICAgICAgLy8gT25seSB0aGUgZmlyc3QgYT1mbXRwOjxwdD4gaXMgY29uc2lkZXJlZC5cbiAgICAgIGNvZGVjLnBhcmFtZXRlcnMgPSBmbXRwcy5sZW5ndGggPyBTRFBVdGlscy5wYXJzZUZtdHAoZm10cHNbMF0pIDoge307XG4gICAgICBjb2RlYy5ydGNwRmVlZGJhY2sgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtZmI6JyArIHB0ICsgJyAnKVxuICAgICAgICAubWFwKFNEUFV0aWxzLnBhcnNlUnRjcEZiKTtcbiAgICAgIGRlc2NyaXB0aW9uLmNvZGVjcy5wdXNoKGNvZGVjKTtcbiAgICAgIC8vIHBhcnNlIEZFQyBtZWNoYW5pc21zIGZyb20gcnRwbWFwIGxpbmVzLlxuICAgICAgc3dpdGNoIChjb2RlYy5uYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnUkVEJzpcbiAgICAgICAgY2FzZSAnVUxQRkVDJzpcbiAgICAgICAgICBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLnB1c2goY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gb25seSBSRUQgYW5kIFVMUEZFQyBhcmUgcmVjb2duaXplZCBhcyBGRUMgbWVjaGFuaXNtcy5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1leHRtYXA6JykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgZGVzY3JpcHRpb24uaGVhZGVyRXh0ZW5zaW9ucy5wdXNoKFNEUFV0aWxzLnBhcnNlRXh0bWFwKGxpbmUpKTtcbiAgfSk7XG4gIC8vIEZJWE1FOiBwYXJzZSBydGNwLlxuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG4vLyBHZW5lcmF0ZXMgcGFydHMgb2YgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGRlc2NyaWJpbmcgdGhlIGNhcGFiaWxpdGllcyAvXG4vLyBwYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGtpbmQsIGNhcHMpIHtcbiAgdmFyIHNkcCA9ICcnO1xuXG4gIC8vIEJ1aWxkIHRoZSBtbGluZS5cbiAgc2RwICs9ICdtPScgKyBraW5kICsgJyAnO1xuICBzZHAgKz0gY2Fwcy5jb2RlY3MubGVuZ3RoID4gMCA/ICc5JyA6ICcwJzsgLy8gcmVqZWN0IGlmIG5vIGNvZGVjcy5cbiAgc2RwICs9ICcgVURQL1RMUy9SVFAvU0FWUEYgJztcbiAgc2RwICs9IGNhcHMuY29kZWNzLm1hcChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gICAgfVxuICAgIHJldHVybiBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG5cbiAgc2RwICs9ICdjPUlOIElQNCAwLjAuMC4wXFxyXFxuJztcbiAgc2RwICs9ICdhPXJ0Y3A6OSBJTiBJUDQgMC4wLjAuMFxcclxcbic7XG5cbiAgLy8gQWRkIGE9cnRwbWFwIGxpbmVzIGZvciBlYWNoIGNvZGVjLiBBbHNvIGZtdHAgYW5kIHJ0Y3AtZmIuXG4gIGNhcHMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdHBNYXAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUZtdHAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZVJ0Y3BGYihjb2RlYyk7XG4gIH0pO1xuICB2YXIgbWF4cHRpbWUgPSAwO1xuICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgaWYgKGNvZGVjLm1heHB0aW1lID4gbWF4cHRpbWUpIHtcbiAgICAgIG1heHB0aW1lID0gY29kZWMubWF4cHRpbWU7XG4gICAgfVxuICB9KTtcbiAgaWYgKG1heHB0aW1lID4gMCkge1xuICAgIHNkcCArPSAnYT1tYXhwdGltZTonICsgbWF4cHRpbWUgKyAnXFxyXFxuJztcbiAgfVxuICBzZHAgKz0gJ2E9cnRjcC1tdXhcXHJcXG4nO1xuXG4gIGNhcHMuaGVhZGVyRXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUV4dG1hcChleHRlbnNpb24pO1xuICB9KTtcbiAgLy8gRklYTUU6IHdyaXRlIGZlY01lY2hhbmlzbXMuXG4gIHJldHVybiBzZHA7XG59O1xuXG4vLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mXG4vLyBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMuXG5TRFBVdGlscy5wYXJzZVJ0cEVuY29kaW5nUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgZW5jb2RpbmdQYXJhbWV0ZXJzID0gW107XG4gIHZhciBkZXNjcmlwdGlvbiA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgaGFzUmVkID0gZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5pbmRleE9mKCdSRUQnKSAhPT0gLTE7XG4gIHZhciBoYXNVbHBmZWMgPSBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLmluZGV4T2YoJ1VMUEZFQycpICE9PSAtMTtcblxuICAvLyBmaWx0ZXIgYT1zc3JjOi4uLiBjbmFtZTosIGlnbm9yZSBQbGFuQi1tc2lkXG4gIHZhciBzc3JjcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c3NyYzonKVxuICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gIH0pXG4gIC5maWx0ZXIoZnVuY3Rpb24ocGFydHMpIHtcbiAgICByZXR1cm4gcGFydHMuYXR0cmlidXRlID09PSAnY25hbWUnO1xuICB9KTtcbiAgdmFyIHByaW1hcnlTc3JjID0gc3NyY3MubGVuZ3RoID4gMCAmJiBzc3Jjc1swXS5zc3JjO1xuICB2YXIgc2Vjb25kYXJ5U3NyYztcblxuICB2YXIgZmxvd3MgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmMtZ3JvdXA6RklEJylcbiAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnICcpO1xuICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQocGFydCwgMTApO1xuICAgIH0pO1xuICB9KTtcbiAgaWYgKGZsb3dzLmxlbmd0aCA+IDAgJiYgZmxvd3NbMF0ubGVuZ3RoID4gMSAmJiBmbG93c1swXVswXSA9PT0gcHJpbWFyeVNzcmMpIHtcbiAgICBzZWNvbmRhcnlTc3JjID0gZmxvd3NbMF1bMV07XG4gIH1cblxuICBkZXNjcmlwdGlvbi5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdSVFgnICYmIGNvZGVjLnBhcmFtZXRlcnMuYXB0KSB7XG4gICAgICB2YXIgZW5jUGFyYW0gPSB7XG4gICAgICAgIHNzcmM6IHByaW1hcnlTc3JjLFxuICAgICAgICBjb2RlY1BheWxvYWRUeXBlOiBwYXJzZUludChjb2RlYy5wYXJhbWV0ZXJzLmFwdCwgMTApLFxuICAgICAgICBydHg6IHtcbiAgICAgICAgICBzc3JjOiBzZWNvbmRhcnlTc3JjXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaChlbmNQYXJhbSk7XG4gICAgICBpZiAoaGFzUmVkKSB7XG4gICAgICAgIGVuY1BhcmFtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbmNQYXJhbSkpO1xuICAgICAgICBlbmNQYXJhbS5mZWMgPSB7XG4gICAgICAgICAgc3NyYzogc2Vjb25kYXJ5U3NyYyxcbiAgICAgICAgICBtZWNoYW5pc206IGhhc1VscGZlYyA/ICdyZWQrdWxwZmVjJyA6ICdyZWQnXG4gICAgICAgIH07XG4gICAgICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKGVuY1BhcmFtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoZW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMCAmJiBwcmltYXJ5U3NyYykge1xuICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIHNzcmM6IHByaW1hcnlTc3JjXG4gICAgfSk7XG4gIH1cblxuICAvLyB3ZSBzdXBwb3J0IGJvdGggYj1BUyBhbmQgYj1USUFTIGJ1dCBpbnRlcnByZXQgQVMgYXMgVElBUy5cbiAgdmFyIGJhbmR3aWR0aCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2I9Jyk7XG4gIGlmIChiYW5kd2lkdGgubGVuZ3RoKSB7XG4gICAgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPVRJQVM6JykgPT09IDApIHtcbiAgICAgIGJhbmR3aWR0aCA9IHBhcnNlSW50KGJhbmR3aWR0aFswXS5zdWJzdHIoNyksIDEwKTtcbiAgICB9IGVsc2UgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPUFTOicpID09PSAwKSB7XG4gICAgICBiYW5kd2lkdGggPSBwYXJzZUludChiYW5kd2lkdGhbMF0uc3Vic3RyKDUpLCAxMCk7XG4gICAgfVxuICAgIGVuY29kaW5nUGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgcGFyYW1zLm1heEJpdHJhdGUgPSBiYW5kd2lkdGg7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVuY29kaW5nUGFyYW1ldGVycztcbn07XG5cbi8vIHBhcnNlcyBodHRwOi8vZHJhZnQub3J0Yy5vcmcvI3J0Y3J0Y3BwYXJhbWV0ZXJzKlxuU0RQVXRpbHMucGFyc2VSdGNwUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgcnRjcFBhcmFtZXRlcnMgPSB7fTtcblxuICB2YXIgY25hbWU7XG4gIC8vIEdldHMgdGhlIGZpcnN0IFNTUkMuIE5vdGUgdGhhdCB3aXRoIFJUWCB0aGVyZSBtaWdodCBiZSBtdWx0aXBsZVxuICAvLyBTU1JDcy5cbiAgdmFyIHJlbW90ZVNzcmMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmM6JylcbiAgICAgIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai5hdHRyaWJ1dGUgPT09ICdjbmFtZSc7XG4gICAgICB9KVswXTtcbiAgaWYgKHJlbW90ZVNzcmMpIHtcbiAgICBydGNwUGFyYW1ldGVycy5jbmFtZSA9IHJlbW90ZVNzcmMudmFsdWU7XG4gICAgcnRjcFBhcmFtZXRlcnMuc3NyYyA9IHJlbW90ZVNzcmMuc3NyYztcbiAgfVxuXG4gIC8vIEVkZ2UgdXNlcyB0aGUgY29tcG91bmQgYXR0cmlidXRlIGluc3RlYWQgb2YgcmVkdWNlZFNpemVcbiAgLy8gY29tcG91bmQgaXMgIXJlZHVjZWRTaXplXG4gIHZhciByc2l6ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9cnRjcC1yc2l6ZScpO1xuICBydGNwUGFyYW1ldGVycy5yZWR1Y2VkU2l6ZSA9IHJzaXplLmxlbmd0aCA+IDA7XG4gIHJ0Y3BQYXJhbWV0ZXJzLmNvbXBvdW5kID0gcnNpemUubGVuZ3RoID09PSAwO1xuXG4gIC8vIHBhcnNlcyB0aGUgcnRjcC1tdXggYXR0ctGWYnV0ZS5cbiAgLy8gTm90ZSB0aGF0IEVkZ2UgZG9lcyBub3Qgc3VwcG9ydCB1bm11eGVkIFJUQ1AuXG4gIHZhciBtdXggPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtbXV4Jyk7XG4gIHJ0Y3BQYXJhbWV0ZXJzLm11eCA9IG11eC5sZW5ndGggPiAwO1xuXG4gIHJldHVybiBydGNwUGFyYW1ldGVycztcbn07XG5cbi8vIHBhcnNlcyBlaXRoZXIgYT1tc2lkOiBvciBhPXNzcmM6Li4uIG1zaWQgbGluZXMgYW5kIHJldHVybnNcbi8vIHRoZSBpZCBvZiB0aGUgTWVkaWFTdHJlYW0gYW5kIE1lZGlhU3RyZWFtVHJhY2suXG5TRFBVdGlscy5wYXJzZU1zaWQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIHBhcnRzO1xuICB2YXIgc3BlYyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9bXNpZDonKTtcbiAgaWYgKHNwZWMubGVuZ3RoID09PSAxKSB7XG4gICAgcGFydHMgPSBzcGVjWzBdLnN1YnN0cig3KS5zcGxpdCgnICcpO1xuICAgIHJldHVybiB7c3RyZWFtOiBwYXJ0c1swXSwgdHJhY2s6IHBhcnRzWzFdfTtcbiAgfVxuICB2YXIgcGxhbkIgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmM6JylcbiAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICB9KVxuICAuZmlsdGVyKGZ1bmN0aW9uKHBhcnRzKSB7XG4gICAgcmV0dXJuIHBhcnRzLmF0dHJpYnV0ZSA9PT0gJ21zaWQnO1xuICB9KTtcbiAgaWYgKHBsYW5CLmxlbmd0aCA+IDApIHtcbiAgICBwYXJ0cyA9IHBsYW5CWzBdLnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgcmV0dXJuIHtzdHJlYW06IHBhcnRzWzBdLCB0cmFjazogcGFydHNbMV19O1xuICB9XG59O1xuXG5TRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBGSVhNRTogc2Vzcy1pZCBzaG91bGQgYmUgYW4gTlRQIHRpbWVzdGFtcC5cbiAgcmV0dXJuICd2PTBcXHJcXG4nICtcbiAgICAgICdvPXRoaXNpc2FkYXB0ZXJvcnRjIDgxNjk2Mzk5MTU2NDY5NDMxMzcgMiBJTiBJUDQgMTI3LjAuMC4xXFxyXFxuJyArXG4gICAgICAncz0tXFxyXFxuJyArXG4gICAgICAndD0wIDBcXHJcXG4nO1xufTtcblxuU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24gPSBmdW5jdGlvbih0cmFuc2NlaXZlciwgY2FwcywgdHlwZSwgc3RyZWFtKSB7XG4gIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVJ0cERlc2NyaXB0aW9uKHRyYW5zY2VpdmVyLmtpbmQsIGNhcHMpO1xuXG4gIC8vIE1hcCBJQ0UgcGFyYW1ldGVycyAodWZyYWcsIHB3ZCkgdG8gU0RQLlxuICBzZHAgKz0gU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzKFxuICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuZ2V0TG9jYWxQYXJhbWV0ZXJzKCkpO1xuXG4gIC8vIE1hcCBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuICBzZHAgKz0gU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyhcbiAgICAgIHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQuZ2V0TG9jYWxQYXJhbWV0ZXJzKCksXG4gICAgICB0eXBlID09PSAnb2ZmZXInID8gJ2FjdHBhc3MnIDogJ2FjdGl2ZScpO1xuXG4gIHNkcCArPSAnYT1taWQ6JyArIHRyYW5zY2VpdmVyLm1pZCArICdcXHJcXG4nO1xuXG4gIGlmICh0cmFuc2NlaXZlci5kaXJlY3Rpb24pIHtcbiAgICBzZHAgKz0gJ2E9JyArIHRyYW5zY2VpdmVyLmRpcmVjdGlvbiArICdcXHJcXG4nO1xuICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlciAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgIHNkcCArPSAnYT1zZW5kcmVjdlxcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgc2RwICs9ICdhPXNlbmRvbmx5XFxyXFxuJztcbiAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgIHNkcCArPSAnYT1yZWN2b25seVxcclxcbic7XG4gIH0gZWxzZSB7XG4gICAgc2RwICs9ICdhPWluYWN0aXZlXFxyXFxuJztcbiAgfVxuXG4gIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAvLyBzcGVjLlxuICAgIHZhciBtc2lkID0gJ21zaWQ6JyArIHN0cmVhbS5pZCArICcgJyArXG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci50cmFjay5pZCArICdcXHJcXG4nO1xuICAgIHNkcCArPSAnYT0nICsgbXNpZDtcblxuICAgIC8vIGZvciBDaHJvbWUuXG4gICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArXG4gICAgICAgICcgJyArIG1zaWQ7XG4gICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICAgJyAnICsgbXNpZDtcbiAgICAgIHNkcCArPSAnYT1zc3JjLWdyb3VwOkZJRCAnICtcbiAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgKyAnICcgK1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAgICdcXHJcXG4nO1xuICAgIH1cbiAgfVxuICAvLyBGSVhNRTogdGhpcyBzaG91bGQgYmUgd3JpdHRlbiBieSB3cml0ZVJ0cERlc2NyaXB0aW9uLlxuICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICtcbiAgICAgICcgY25hbWU6JyArIFNEUFV0aWxzLmxvY2FsQ05hbWUgKyAnXFxyXFxuJztcbiAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlciAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgJyBjbmFtZTonICsgU0RQVXRpbHMubG9jYWxDTmFtZSArICdcXHJcXG4nO1xuICB9XG4gIHJldHVybiBzZHA7XG59O1xuXG4vLyBHZXRzIHRoZSBkaXJlY3Rpb24gZnJvbSB0aGUgbWVkaWFTZWN0aW9uIG9yIHRoZSBzZXNzaW9ucGFydC5cblNEUFV0aWxzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgLy8gTG9vayBmb3Igc2VuZHJlY3YsIHNlbmRvbmx5LCByZWN2b25seSwgaW5hY3RpdmUsIGRlZmF1bHQgdG8gc2VuZHJlY3YuXG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAobGluZXNbaV0pIHtcbiAgICAgIGNhc2UgJ2E9c2VuZHJlY3YnOlxuICAgICAgY2FzZSAnYT1zZW5kb25seSc6XG4gICAgICBjYXNlICdhPXJlY3Zvbmx5JzpcbiAgICAgIGNhc2UgJ2E9aW5hY3RpdmUnOlxuICAgICAgICByZXR1cm4gbGluZXNbaV0uc3Vic3RyKDIpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gRklYTUU6IFdoYXQgc2hvdWxkIGhhcHBlbiBoZXJlP1xuICAgIH1cbiAgfVxuICBpZiAoc2Vzc2lvbnBhcnQpIHtcbiAgICByZXR1cm4gU0RQVXRpbHMuZ2V0RGlyZWN0aW9uKHNlc3Npb25wYXJ0KTtcbiAgfVxuICByZXR1cm4gJ3NlbmRyZWN2Jztcbn07XG5cblNEUFV0aWxzLmdldEtpbmQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICByZXR1cm4gbWxpbmVbMF0uc3Vic3RyKDIpO1xufTtcblxuU0RQVXRpbHMuaXNSZWplY3RlZCA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICByZXR1cm4gbWVkaWFTZWN0aW9uLnNwbGl0KCcgJywgMilbMV0gPT09ICcwJztcbn07XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0gU0RQVXRpbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2RwL3NkcC5qc1xuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhZGFwdGVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vYWRhcHRlcl9mYWN0b3J5LmpzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGFkYXB0ZXJGYWN0b3J5KHt3aW5kb3c6IGdsb2JhbC53aW5kb3d9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gU2hpbW1pbmcgc3RhcnRzIGhlcmUuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRlcGVuZGVuY2llcykge1xuICB2YXIgd2luZG93ID0gZGVwZW5kZW5jaWVzICYmIGRlcGVuZGVuY2llcy53aW5kb3c7XG5cbiAgLy8gVXRpbHMuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgdmFyIGxvZ2dpbmcgPSB1dGlscy5sb2c7XG4gIHZhciBicm93c2VyRGV0YWlscyA9IHV0aWxzLmRldGVjdEJyb3dzZXIod2luZG93KTtcblxuICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICB2YXIgYWRhcHRlciA9IHtcbiAgICBicm93c2VyRGV0YWlsczogYnJvd3NlckRldGFpbHMsXG4gICAgZXh0cmFjdFZlcnNpb246IHV0aWxzLmV4dHJhY3RWZXJzaW9uLFxuICAgIGRpc2FibGVMb2c6IHV0aWxzLmRpc2FibGVMb2dcbiAgfTtcblxuICAvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgaWYgeW91IHdhbnQgbG9nZ2luZyB0byBvY2N1ciwgaW5jbHVkaW5nIGxvZ2dpbmdcbiAgLy8gZm9yIHRoZSBzd2l0Y2ggc3RhdGVtZW50IGJlbG93LiBDYW4gYWxzbyBiZSB0dXJuZWQgb24gaW4gdGhlIGJyb3dzZXIgdmlhXG4gIC8vIGFkYXB0ZXIuZGlzYWJsZUxvZyhmYWxzZSksIGJ1dCB0aGVuIGxvZ2dpbmcgZnJvbSB0aGUgc3dpdGNoIHN0YXRlbWVudCBiZWxvd1xuICAvLyB3aWxsIG5vdCBhcHBlYXIuXG4gIC8vIHJlcXVpcmUoJy4vdXRpbHMnKS5kaXNhYmxlTG9nKGZhbHNlKTtcblxuICAvLyBCcm93c2VyIHNoaW1zLlxuICB2YXIgY2hyb21lU2hpbSA9IHJlcXVpcmUoJy4vY2hyb21lL2Nocm9tZV9zaGltJykgfHwgbnVsbDtcbiAgdmFyIGVkZ2VTaGltID0gcmVxdWlyZSgnLi9lZGdlL2VkZ2Vfc2hpbScpIHx8IG51bGw7XG4gIHZhciBmaXJlZm94U2hpbSA9IHJlcXVpcmUoJy4vZmlyZWZveC9maXJlZm94X3NoaW0nKSB8fCBudWxsO1xuICB2YXIgc2FmYXJpU2hpbSA9IHJlcXVpcmUoJy4vc2FmYXJpL3NhZmFyaV9zaGltJykgfHwgbnVsbDtcblxuICAvLyBTaGltIGJyb3dzZXIgaWYgZm91bmQuXG4gIHN3aXRjaCAoYnJvd3NlckRldGFpbHMuYnJvd3Nlcikge1xuICAgIGNhc2UgJ2Nocm9tZSc6XG4gICAgICBpZiAoIWNocm9tZVNoaW0gfHwgIWNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgIGxvZ2dpbmcoJ0Nocm9tZSBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIGNocm9tZS4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gY2hyb21lU2hpbTtcblxuICAgICAgY2hyb21lU2hpbS5zaGltR2V0VXNlck1lZGlhKHdpbmRvdyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1NZWRpYVN0cmVhbSh3aW5kb3cpO1xuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltU291cmNlT2JqZWN0KHdpbmRvdyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1QZWVyQ29ubmVjdGlvbih3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltT25UcmFjayh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltR2V0U2VuZGVyc1dpdGhEdG1mKHdpbmRvdyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmaXJlZm94JzpcbiAgICAgIGlmICghZmlyZWZveFNoaW0gfHwgIWZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbikge1xuICAgICAgICBsb2dnaW5nKCdGaXJlZm94IHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgZmlyZWZveC4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gZmlyZWZveFNoaW07XG5cbiAgICAgIGZpcmVmb3hTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1Tb3VyY2VPYmplY3Qod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbih3aW5kb3cpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbU9uVHJhY2sod2luZG93KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2VkZ2UnOlxuICAgICAgaWYgKCFlZGdlU2hpbSB8fCAhZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgIGxvZ2dpbmcoJ01TIGVkZ2Ugc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBlZGdlLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBlZGdlU2hpbTtcblxuICAgICAgZWRnZVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdyk7XG4gICAgICBlZGdlU2hpbS5zaGltUmVwbGFjZVRyYWNrKHdpbmRvdyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzYWZhcmknOlxuICAgICAgaWYgKCFzYWZhcmlTaGltKSB7XG4gICAgICAgIGxvZ2dpbmcoJ1NhZmFyaSBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIHNhZmFyaS4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gc2FmYXJpU2hpbTtcbiAgICAgIC8vIHNoaW0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgU2FmYXJpICh0ZWNobmljYWwgcHJldmlldylcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbUNhbGxiYWNrc0FQSSh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltTG9jYWxTdHJlYW1zQVBJKHdpbmRvdyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1SZW1vdGVTdHJlYW1zQVBJKHdpbmRvdyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsb2dnaW5nKCdVbnN1cHBvcnRlZCBicm93c2VyIScpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2FkYXB0ZXJfZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpO1xudmFyIGxvZ2dpbmcgPSB1dGlscy5sb2c7XG5cbnZhciBjaHJvbWVTaGltID0ge1xuICBzaGltTWVkaWFTdHJlYW06IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHdpbmRvdy5NZWRpYVN0cmVhbSA9IHdpbmRvdy5NZWRpYVN0cmVhbSB8fCB3aW5kb3cud2Via2l0TWVkaWFTdHJlYW07XG4gIH0sXG5cbiAgc2hpbU9uVHJhY2s6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgISgnb250cmFjaycgaW5cbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb250cmFjaycsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb250cmFjaztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIGlmICh0aGlzLl9vbnRyYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2sgPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gb25hZGRzdHJlYW0gZG9lcyBub3QgZmlyZSB3aGVuIGEgdHJhY2sgaXMgYWRkZWQgdG8gYW4gZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIHN0cmVhbS4gQnV0IHN0cmVhbS5vbmFkZHRyYWNrIGlzIGltcGxlbWVudGVkIHNvIHdlIHVzZSB0aGF0LlxuICAgICAgICAgICAgZS5zdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkdHJhY2snLCBmdW5jdGlvbih0ZSkge1xuICAgICAgICAgICAgICB2YXIgcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycykge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0gc2VsZi5nZXRSZWNlaXZlcnMoKS5maW5kKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByLnRyYWNrLmlkID09PSB0ZS50cmFjay5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHt0cmFjazogdGUudHJhY2t9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRlLnRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB2YXIgcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycykge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0gc2VsZi5nZXRSZWNlaXZlcnMoKS5maW5kKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByLnRyYWNrLmlkID09PSB0cmFjay5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHt0cmFjazogdHJhY2t9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgndHJhY2snKTtcbiAgICAgICAgICAgICAgZXZlbnQudHJhY2sgPSB0cmFjaztcbiAgICAgICAgICAgICAgZXZlbnQucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgICAgICAgZXZlbnQuc3RyZWFtcyA9IFtlLnN0cmVhbV07XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBzaGltR2V0U2VuZGVyc1dpdGhEdG1mOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmXG4gICAgICAgICEoJ2dldFNlbmRlcnMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpICYmXG4gICAgICAgICdjcmVhdGVEVE1GU2VuZGVyJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRlcnMgfHwgW107XG4gICAgICB9O1xuICAgICAgdmFyIG9yaWdBZGRTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbTtcbiAgICAgIHZhciBvcmlnUmVtb3ZlU3RyZWFtID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW07XG5cbiAgICAgIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaykge1xuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2ssIHN0cmVhbSkge1xuICAgICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgICAgaWYgKHBjLnNpZ25hbGluZ1N0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgJ1RoZSBSVENQZWVyQ29ubmVjdGlvblxcJ3Mgc2lnbmFsaW5nU3RhdGUgaXMgXFwnY2xvc2VkXFwnLicsXG4gICAgICAgICAgICAgICdJbnZhbGlkU3RhdGVFcnJvcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc3RyZWFtcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICBpZiAoc3RyZWFtcy5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgICAgICAgIXN0cmVhbXNbMF0uZ2V0VHJhY2tzKCkuZmluZChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPT09IHRyYWNrO1xuICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBub3QgZnVsbHkgY29ycmVjdCBidXQgYWxsIHdlIGNhbiBtYW5hZ2Ugd2l0aG91dFxuICAgICAgICAgICAgLy8gW1thc3NvY2lhdGVkIE1lZGlhU3RyZWFtc11dIGludGVybmFsIHNsb3QuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAnVGhlIGFkYXB0ZXIuanMgYWRkVHJhY2sgcG9seWZpbGwgb25seSBzdXBwb3J0cyBhIHNpbmdsZSAnICtcbiAgICAgICAgICAgICAgJyBzdHJlYW0gd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdHJhY2suJyxcbiAgICAgICAgICAgICAgJ05vdFN1cHBvcnRlZEVycm9yJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGMuX3NlbmRlcnMgPSBwYy5fc2VuZGVycyB8fCBbXTtcbiAgICAgICAgICB2YXIgYWxyZWFkeUV4aXN0cyA9IHBjLl9zZW5kZXJzLmZpbmQoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIHQudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUcmFjayBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYy5fc3RyZWFtcyA9IHBjLl9zdHJlYW1zIHx8IHt9O1xuICAgICAgICAgIHZhciBvbGRTdHJlYW0gPSBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdO1xuICAgICAgICAgIGlmIChvbGRTdHJlYW0pIHtcbiAgICAgICAgICAgIG9sZFN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgICAgICBwYy5yZW1vdmVTdHJlYW0ob2xkU3RyZWFtKTtcbiAgICAgICAgICAgIHBjLmFkZFN0cmVhbShvbGRTdHJlYW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3U3RyZWFtID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbShbdHJhY2tdKTtcbiAgICAgICAgICAgIHBjLl9zdHJlYW1zW3N0cmVhbS5pZF0gPSBuZXdTdHJlYW07XG4gICAgICAgICAgICBwYy5hZGRTdHJlYW0obmV3U3RyZWFtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2VuZGVyID0ge1xuICAgICAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICAgICAgZ2V0IGR0bWYoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9kdG1mID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IHBjLmNyZWF0ZURUTUZTZW5kZXIodHJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2R0bWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBwYy5fc2VuZGVycy5wdXNoKHNlbmRlcik7XG4gICAgICAgICAgcmV0dXJuIHNlbmRlcjtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIHBjLl9zZW5kZXJzID0gcGMuX3NlbmRlcnMgfHwgW107XG4gICAgICAgIG9yaWdBZGRTdHJlYW0uYXBwbHkocGMsIFtzdHJlYW1dKTtcbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICBwYy5fc2VuZGVycy5wdXNoKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgICAgIGdldCBkdG1mKCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5fZHRtZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBwYy5jcmVhdGVEVE1GU2VuZGVyKHRyYWNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kdG1mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIHBjLl9zZW5kZXJzID0gcGMuX3NlbmRlcnMgfHwgW107XG4gICAgICAgIG9yaWdSZW1vdmVTdHJlYW0uYXBwbHkocGMsIFtzdHJlYW1dKTtcbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICB2YXIgc2VuZGVyID0gcGMuX3NlbmRlcnMuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNlbmRlcikge1xuICAgICAgICAgICAgcGMuX3NlbmRlcnMuc3BsaWNlKHBjLl9zZW5kZXJzLmluZGV4T2Yoc2VuZGVyKSwgMSk7IC8vIHJlbW92ZSBzZW5kZXJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgICAgJ2dldFNlbmRlcnMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgICAgICdjcmVhdGVEVE1GU2VuZGVyJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAgICAgICAgICAhKCdkdG1mJyBpbiB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSkpIHtcbiAgICAgIHZhciBvcmlnR2V0U2VuZGVycyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VuZGVycyA9IG9yaWdHZXRTZW5kZXJzLmFwcGx5KHBjLCBbXSk7XG4gICAgICAgIHNlbmRlcnMuZm9yRWFjaChmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICBzZW5kZXIuX3BjID0gcGM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VuZGVycztcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSwgJ2R0bWYnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2R0bWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gdGhpcy5fcGMuY3JlYXRlRFRNRlNlbmRlcih0aGlzLnRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBzaGltU291cmNlT2JqZWN0OiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgVVJMID0gd2luZG93ICYmIHdpbmRvdy5VUkw7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudCAmJlxuICAgICAgICAhKCdzcmNPYmplY3QnIGluIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgLy8gU2hpbSB0aGUgc3JjT2JqZWN0IHByb3BlcnR5LCBvbmNlLCB3aGVuIEhUTUxNZWRpYUVsZW1lbnQgaXMgZm91bmQuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsICdzcmNPYmplY3QnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcmNPYmplY3Q7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gVXNlIF9zcmNPYmplY3QgYXMgYSBwcml2YXRlIHByb3BlcnR5IGZvciB0aGlzIHNoaW1cbiAgICAgICAgICAgIHRoaXMuX3NyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuc3JjKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5zcmMgPSAnJztcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byByZWNyZWF0ZSB0aGUgYmxvYiB1cmwgd2hlbiBhIHRyYWNrIGlzIGFkZGVkIG9yXG4gICAgICAgICAgICAvLyByZW1vdmVkLiBEb2luZyBpdCBtYW51YWxseSBzaW5jZSB3ZSB3YW50IHRvIGF2b2lkIGEgcmVjdXJzaW9uLlxuICAgICAgICAgICAgc3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHRyYWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLnNyYykge1xuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZi5zcmMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbGYuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZldHJhY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuc3JjKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxmLnNyYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBzaGltUGVlckNvbm5lY3Rpb246IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBicm93c2VyRGV0YWlscyA9IHV0aWxzLmRldGVjdEJyb3dzZXIod2luZG93KTtcblxuICAgIC8vIFRoZSBSVENQZWVyQ29ubmVjdGlvbiBvYmplY3QuXG4gICAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBpY2VUcmFuc3BvcnRQb2xpY3kgdG8gaWNlVHJhbnNwb3J0cyxcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9NDg2OVxuICAgICAgICAvLyB0aGlzIHdhcyBmaXhlZCBpbiBNNTYgYWxvbmcgd2l0aCB1bnByZWZpeGluZyBSVENQZWVyQ29ubmVjdGlvbi5cbiAgICAgICAgbG9nZ2luZygnUGVlckNvbm5lY3Rpb24nKTtcbiAgICAgICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgICAgIHBjQ29uZmlnLmljZVRyYW5zcG9ydHMgPSBwY0NvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3k7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7XG4gICAgICB9O1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSA9XG4gICAgICAgICAgd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcbiAgICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgICBpZiAod2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGUpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiwgJ2dlbmVyYXRlQ2VydGlmaWNhdGUnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtaWdyYXRlIGZyb20gbm9uLXNwZWMgUlRDSWNlU2VydmVyLnVybCB0byBSVENJY2VTZXJ2ZXIudXJsc1xuICAgICAgdmFyIE9yaWdQZWVyQ29ubmVjdGlvbiA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKSB7XG4gICAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBjQ29uZmlnLmljZVNlcnZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybHMnKSAmJlxuICAgICAgICAgICAgICAgIHNlcnZlci5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSVENJY2VTZXJ2ZXIudXJsIGlzIGRlcHJlY2F0ZWQhIFVzZSB1cmxzIGluc3RlYWQuJyk7XG4gICAgICAgICAgICAgIHNlcnZlciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VydmVyKSk7XG4gICAgICAgICAgICAgIHNlcnZlci51cmxzID0gc2VydmVyLnVybDtcbiAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHNlcnZlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2gocGNDb25maWcuaWNlU2VydmVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHBjQ29uZmlnLmljZVNlcnZlcnMgPSBuZXdJY2VTZXJ2ZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgT3JpZ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID0gT3JpZ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcbiAgICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLCAnZ2VuZXJhdGVDZXJ0aWZpY2F0ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gT3JpZ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBvcmlnR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbihzZWxlY3RvcixcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYSBmdW5jdGlvbiB0aGVuIHdlIGFyZSBpbiB0aGUgb2xkIHN0eWxlIHN0YXRzIHNvIGp1c3RcbiAgICAgIC8vIHBhc3MgYmFjayB0aGUgb3JpZ2luYWwgZ2V0U3RhdHMgZm9ybWF0IHRvIGF2b2lkIGJyZWFraW5nIG9sZCB1c2Vycy5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIHNwZWMtc3R5bGUgZ2V0U3RhdHMgaXMgc3VwcG9ydGVkLCByZXR1cm4gdGhvc2Ugd2hlbiBjYWxsZWQgd2l0aFxuICAgICAgLy8gZWl0aGVyIG5vIGFyZ3VtZW50cyBvciB0aGUgc2VsZWN0b3IgYXJndW1lbnQgaXMgbnVsbC5cbiAgICAgIGlmIChvcmlnR2V0U3RhdHMubGVuZ3RoID09PSAwICYmIChhcmd1bWVudHMubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbXSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaXhDaHJvbWVTdGF0c18gPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgICAgICAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgICAgICAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgICAgICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgICAgICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgICAgICAgICAgfVtyZXBvcnQudHlwZV0gfHwgcmVwb3J0LnR5cGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlcG9ydC5uYW1lcygpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgc3RhbmRhcmRTdGF0c1tuYW1lXSA9IHJlcG9ydC5zdGF0KG5hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0YW5kYXJkUmVwb3J0W3N0YW5kYXJkU3RhdHMuaWRdID0gc3RhbmRhcmRTdGF0cztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkUmVwb3J0O1xuICAgICAgfTtcblxuICAgICAgLy8gc2hpbSBnZXRTdGF0cyB3aXRoIG1hcGxpa2Ugc3VwcG9ydFxuICAgICAgdmFyIG1ha2VNYXBTdGF0cyA9IGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWFwKE9iamVjdC5rZXlzKHN0YXRzKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIFtrZXksIHN0YXRzW2tleV1dO1xuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyXyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgYXJnc1sxXShtYWtlTWFwU3RhdHMoZml4Q2hyb21lU3RhdHNfKHJlc3BvbnNlKSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBvcmlnR2V0U3RhdHMuYXBwbHkodGhpcywgW3N1Y2Nlc3NDYWxsYmFja1dyYXBwZXJfLFxuICAgICAgICAgIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBwcm9taXNlLXN1cHBvcnRcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgb3JpZ0dldFN0YXRzLmFwcGx5KHNlbGYsIFtcbiAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShtYWtlTWFwU3RhdHMoZml4Q2hyb21lU3RhdHNfKHJlc3BvbnNlKSkpO1xuICAgICAgICAgIH0sIHJlamVjdF0pO1xuICAgICAgfSkudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgIH07XG5cbiAgICAvLyBhZGQgcHJvbWlzZSBzdXBwb3J0IC0tIG5hdGl2ZWx5IGF2YWlsYWJsZSBpbiBDaHJvbWUgNTFcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUxKSB7XG4gICAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVNZXRob2QuYXBwbHkoc2VsZiwgW2FyZ3NbMF0sIHJlc29sdmUsIHJlamVjdF0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYXJnc1sxXS5hcHBseShudWxsLCBbXSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICBhcmdzWzJdLmFwcGx5KG51bGwsIFtlcnJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwcm9taXNlIHN1cHBvcnQgZm9yIGNyZWF0ZU9mZmVyIGFuZCBjcmVhdGVBbnN3ZXIuIEF2YWlsYWJsZSAod2l0aG91dFxuICAgIC8vIGJ1Z3MpIHNpbmNlIE01MjogY3JidWcvNjE5Mjg5XG4gICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA1Mikge1xuICAgICAgWydjcmVhdGVPZmZlcicsICdjcmVhdGVBbnN3ZXInXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICB2YXIgbmF0aXZlTWV0aG9kID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICBuYXRpdmVNZXRob2QuYXBwbHkoc2VsZiwgW3Jlc29sdmUsIHJlamVjdCwgb3B0c10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNoaW0gaW1wbGljaXQgY3JlYXRpb24gb2YgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uL1JUQ0ljZUNhbmRpZGF0ZVxuICAgIFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbicsICdhZGRJY2VDYW5kaWRhdGUnXVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICB2YXIgbmF0aXZlTWV0aG9kID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gbmV3ICgobWV0aG9kID09PSAnYWRkSWNlQ2FuZGlkYXRlJykgP1xuICAgICAgICAgICAgICAgIHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgOlxuICAgICAgICAgICAgICAgIHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24pKGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBzdXBwb3J0IGZvciBhZGRJY2VDYW5kaWRhdGUobnVsbCBvciB1bmRlZmluZWQpXG4gICAgdmFyIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZSA9XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgICAgICAgYXJndW1lbnRzWzFdLmFwcGx5KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVBZGRJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59O1xuXG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGltTWVkaWFTdHJlYW06IGNocm9tZVNoaW0uc2hpbU1lZGlhU3RyZWFtLFxuICBzaGltT25UcmFjazogY2hyb21lU2hpbS5zaGltT25UcmFjayxcbiAgc2hpbUdldFNlbmRlcnNXaXRoRHRtZjogY2hyb21lU2hpbS5zaGltR2V0U2VuZGVyc1dpdGhEdG1mLFxuICBzaGltU291cmNlT2JqZWN0OiBjaHJvbWVTaGltLnNoaW1Tb3VyY2VPYmplY3QsXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogY2hyb21lU2hpbS5zaGltUGVlckNvbm5lY3Rpb24sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICB2YXIgY29uc3RyYWludHNUb0Nocm9tZV8gPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLm1hbmRhdG9yeSB8fCBjLm9wdGlvbmFsKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGNjID0ge307XG4gICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/IGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHIubWluID0gci5tYXggPSByLmV4YWN0O1xuICAgICAgfVxuICAgICAgdmFyIG9sZG5hbWVfID0gZnVuY3Rpb24ocHJlZml4LCBuYW1lKSB7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuYW1lID09PSAnZGV2aWNlSWQnKSA/ICdzb3VyY2VJZCcgOiBuYW1lO1xuICAgICAgfTtcbiAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2Mub3B0aW9uYWwgPSBjYy5vcHRpb25hbCB8fCBbXTtcbiAgICAgICAgdmFyIG9jID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnbWluJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICAgIG9jID0ge307XG4gICAgICAgICAgb2Nbb2xkbmFtZV8oJ21heCcsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByLmV4YWN0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjYy5tYW5kYXRvcnkgPSBjYy5tYW5kYXRvcnkgfHwge307XG4gICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXygnJywga2V5KV0gPSByLmV4YWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgWydtaW4nLCAnbWF4J10uZm9yRWFjaChmdW5jdGlvbihtaXgpIHtcbiAgICAgICAgICBpZiAoclttaXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeSA9IGNjLm1hbmRhdG9yeSB8fCB7fTtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXyhtaXgsIGtleSldID0gclttaXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGMuYWR2YW5jZWQpIHtcbiAgICAgIGNjLm9wdGlvbmFsID0gKGNjLm9wdGlvbmFsIHx8IFtdKS5jb25jYXQoYy5hZHZhbmNlZCk7XG4gICAgfVxuICAgIHJldHVybiBjYztcbiAgfTtcblxuICB2YXIgc2hpbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBmdW5jKSB7XG4gICAgY29uc3RyYWludHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgICBpZiAoYSBpbiBvYmogJiYgIShiIGluIG9iaikpIHtcbiAgICAgICAgICBvYmpbYl0gPSBvYmpbYV07XG4gICAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdhdXRvR2FpbkNvbnRyb2wnLCAnZ29vZ0F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdub2lzZVN1cHByZXNzaW9uJywgJ2dvb2dOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICB9XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIFNoaW0gZmFjaW5nTW9kZSBmb3IgbW9iaWxlICYgc3VyZmFjZSBwcm8uXG4gICAgICB2YXIgZmFjZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICBmYWNlID0gZmFjZSAmJiAoKHR5cGVvZiBmYWNlID09PSAnb2JqZWN0JykgPyBmYWNlIDoge2lkZWFsOiBmYWNlfSk7XG4gICAgICB2YXIgZ2V0U3VwcG9ydGVkRmFjaW5nTW9kZUxpZXMgPSBicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNjE7XG5cbiAgICAgIGlmICgoZmFjZSAmJiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuZXhhY3QgPT09ICdlbnZpcm9ubWVudCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZmFjZS5pZGVhbCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICdlbnZpcm9ubWVudCcpKSAmJlxuICAgICAgICAgICEobmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cyAmJlxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpLmZhY2luZ01vZGUgJiZcbiAgICAgICAgICAgICFnZXRTdXBwb3J0ZWRGYWNpbmdNb2RlTGllcykpIHtcbiAgICAgICAgZGVsZXRlIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICAgIHZhciBtYXRjaGVzO1xuICAgICAgICBpZiAoZmFjZS5leGFjdCA9PT0gJ2Vudmlyb25tZW50JyB8fCBmYWNlLmlkZWFsID09PSAnZW52aXJvbm1lbnQnKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IFsnYmFjaycsICdyZWFyJ107XG4gICAgICAgIH0gZWxzZSBpZiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICd1c2VyJykge1xuICAgICAgICAgIG1hdGNoZXMgPSBbJ2Zyb250J107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAvLyBMb29rIGZvciBtYXRjaGVzIGluIGxhYmVsLCBvciB1c2UgbGFzdCBjYW0gZm9yIGJhY2sgKHR5cGljYWwpLlxuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRldmljZXMpIHtcbiAgICAgICAgICAgIGRldmljZXMgPSBkZXZpY2VzLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmtpbmQgPT09ICd2aWRlb2lucHV0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRldiA9IGRldmljZXMuZmluZChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLnNvbWUoZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobWF0Y2gpICE9PSAtMTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZGV2ICYmIGRldmljZXMubGVuZ3RoICYmIG1hdGNoZXMuaW5kZXhPZignYmFjaycpICE9PSAtMSkge1xuICAgICAgICAgICAgICBkZXYgPSBkZXZpY2VzW2RldmljZXMubGVuZ3RoIC0gMV07IC8vIG1vcmUgbGlrZWx5IHRoZSBiYWNrIGNhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRldikge1xuICAgICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IGZhY2UuZXhhY3QgPyB7ZXhhY3Q6IGRldi5kZXZpY2VJZH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWRlYWw6IGRldi5kZXZpY2VJZH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICAgICAgICAgIGxvZ2dpbmcoJ2Nocm9tZTogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZV8oY29uc3RyYWludHMudmlkZW8pO1xuICAgIH1cbiAgICBsb2dnaW5nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIHJldHVybiBmdW5jKGNvbnN0cmFpbnRzKTtcbiAgfTtcblxuICB2YXIgc2hpbUVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToge1xuICAgICAgICBQZXJtaXNzaW9uRGVuaWVkRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBJbnZhbGlkU3RhdGVFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBEZXZpY2VzTm90Rm91bmRFcnJvcjogJ05vdEZvdW5kRXJyb3InLFxuICAgICAgICBDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3I6ICdPdmVyY29uc3RyYWluZWRFcnJvcicsXG4gICAgICAgIFRyYWNrU3RhcnRFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBNZWRpYURldmljZUZhaWxlZER1ZVRvU2h1dGRvd246ICdOb3RSZWFkYWJsZUVycm9yJyxcbiAgICAgICAgTWVkaWFEZXZpY2VLaWxsU3dpdGNoT246ICdOb3RSZWFkYWJsZUVycm9yJ1xuICAgICAgfVtlLm5hbWVdIHx8IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgIGNvbnN0cmFpbnQ6IGUuY29uc3RyYWludE5hbWUsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAodGhpcy5tZXNzYWdlICYmICc6ICcpICsgdGhpcy5tZXNzYWdlO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFVzZXJNZWRpYV8gPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgc2hpbUNvbnN0cmFpbnRzXyhjb25zdHJhaW50cywgZnVuY3Rpb24oYykge1xuICAgICAgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYShjLCBvblN1Y2Nlc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBnZXRVc2VyTWVkaWFfO1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBnZXRVc2VyTWVkaWEgYXMgYSBQcm9taXNlLlxuICB2YXIgZ2V0VXNlck1lZGlhUHJvbWlzZV8gPSBmdW5jdGlvbihjb25zdHJhaW50cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtcbiAgICAgIGdldFVzZXJNZWRpYTogZ2V0VXNlck1lZGlhUHJvbWlzZV8sXG4gICAgICBlbnVtZXJhdGVEZXZpY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIga2luZHMgPSB7YXVkaW86ICdhdWRpb2lucHV0JywgdmlkZW86ICd2aWRlb2lucHV0J307XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5NZWRpYVN0cmVhbVRyYWNrLmdldFNvdXJjZXMoZnVuY3Rpb24oZGV2aWNlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLm1hcChmdW5jdGlvbihkZXZpY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtsYWJlbDogZGV2aWNlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmRzW2RldmljZS5raW5kXSxcbiAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6ICcnfTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0U3VwcG9ydGVkQ29uc3RyYWludHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRldmljZUlkOiB0cnVlLCBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlLCBmYWNpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgIGZyYW1lUmF0ZTogdHJ1ZSwgaGVpZ2h0OiB0cnVlLCB3aWR0aDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBBIHNoaW0gZm9yIGdldFVzZXJNZWRpYSBtZXRob2Qgb24gdGhlIG1lZGlhRGV2aWNlcyBvYmplY3QuXG4gIC8vIFRPRE8oS2FwdGVuSmFuc3NvbikgcmVtb3ZlIG9uY2UgaW1wbGVtZW50ZWQgaW4gQ2hyb21lIHN0YWJsZS5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBnZXRVc2VyTWVkaWFQcm9taXNlXyhjb25zdHJhaW50cyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFdmVuIHRob3VnaCBDaHJvbWUgNDUgaGFzIG5hdmlnYXRvci5tZWRpYURldmljZXMgYW5kIGEgZ2V0VXNlck1lZGlhXG4gICAgLy8gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIFByb21pc2UsIGl0IGRvZXMgbm90IGFjY2VwdCBzcGVjLXN0eWxlXG4gICAgLy8gY29uc3RyYWludHMuXG4gICAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgICAgYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNzKSB7XG4gICAgICByZXR1cm4gc2hpbUNvbnN0cmFpbnRzXyhjcywgZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgIGlmIChjLmF1ZGlvICYmICFzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJycsICdOb3RGb3VuZEVycm9yJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIER1bW15IGRldmljZWNoYW5nZSBldmVudCBtZXRob2RzLlxuICAvLyBUT0RPKEthcHRlbkphbnNzb24pIHJlbW92ZSBvbmNlIGltcGxlbWVudGVkIGluIENocm9tZSBzdGFibGUuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgbG9nZ2luZygnRHVtbXkgbWVkaWFEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIgY2FsbGVkLicpO1xuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBsb2dnaW5nKCdEdW1teSBtZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciBjYWxsZWQuJyk7XG4gICAgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvY2hyb21lL2dldHVzZXJtZWRpYS5qc1xuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIHNoaW1SVENQZWVyQ29ubmVjdGlvbiA9IHJlcXVpcmUoJy4vcnRjcGVlcmNvbm5lY3Rpb25fc2hpbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKSxcbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgICBpZiAod2luZG93LlJUQ0ljZUdhdGhlcmVyKSB7XG4gICAgICAvLyBPUlRDIGRlZmluZXMgYW4gUlRDSWNlQ2FuZGlkYXRlIG9iamVjdCBidXQgbm8gY29uc3RydWN0b3IuXG4gICAgICAvLyBOb3QgaW1wbGVtZW50ZWQgaW4gRWRnZS5cbiAgICAgIGlmICghd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSkge1xuICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gT1JUQyBkb2VzIG5vdCBoYXZlIGEgc2Vzc2lvbiBkZXNjcmlwdGlvbiBvYmplY3QgYnV0XG4gICAgICAvLyBvdGhlciBicm93c2VycyAoaS5lLiBDaHJvbWUpIHRoYXQgd2lsbCBzdXBwb3J0IGJvdGggUEMgYW5kIE9SVENcbiAgICAgIC8vIGluIHRoZSBmdXR1cmUgbWlnaHQgaGF2ZSB0aGlzIGRlZmluZWQgYWxyZWFkeS5cbiAgICAgIGlmICghd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gdGhpcyBhZGRzIGFuIGFkZGl0aW9uYWwgZXZlbnQgbGlzdGVuZXIgdG8gTWVkaWFTdHJhY2tUcmFjayB0aGF0IHNpZ25hbHNcbiAgICAgIC8vIHdoZW4gYSB0cmFja3MgZW5hYmxlZCBwcm9wZXJ0eSB3YXMgY2hhbmdlZC4gV29ya2Fyb3VuZCBmb3IgYSBidWcgaW5cbiAgICAgIC8vIGFkZFN0cmVhbSwgc2VlIGJlbG93LiBObyBsb25nZXIgcmVxdWlyZWQgaW4gMTUwMjUrXG4gICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDE1MDI1KSB7XG4gICAgICAgIHZhciBvcmlnTVNURW5hYmxlZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgICAgICB3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJywge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIG9yaWdNU1RFbmFibGVkLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHZhciBldiA9IG5ldyBFdmVudCgnZW5hYmxlZCcpO1xuICAgICAgICAgICAgZXYuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPVxuICAgICAgICBzaGltUlRDUGVlckNvbm5lY3Rpb24od2luZG93LCBicm93c2VyRGV0YWlscy52ZXJzaW9uKTtcbiAgfSxcbiAgc2hpbVJlcGxhY2VUcmFjazogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gT1JUQyBoYXMgcmVwbGFjZVRyYWNrIC0tIGh0dHBzOi8vZ2l0aHViLmNvbS93M2Mvb3J0Yy9pc3N1ZXMvNjE0XG4gICAgaWYgKHdpbmRvdy5SVENSdHBTZW5kZXIgJiZcbiAgICAgICAgISgncmVwbGFjZVRyYWNrJyBpbiB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSkpIHtcbiAgICAgIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLnJlcGxhY2VUcmFjayA9XG4gICAgICAgICAgd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUuc2V0VHJhY2s7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL2VkZ2Vfc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgbmF2aWdhdG9yID0gd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3I7XG5cbiAgdmFyIHNoaW1FcnJvcl8gPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHtQZXJtaXNzaW9uRGVuaWVkRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InfVtlLm5hbWVdIHx8IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgIGNvbnN0cmFpbnQ6IGUuY29uc3RyYWludCxcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIGdldFVzZXJNZWRpYSBlcnJvciBzaGltLlxuICB2YXIgb3JpZ0dldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIG9yaWdHZXRVc2VyTWVkaWEoYykuY2F0Y2goZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHNoaW1FcnJvcl8oZSkpO1xuICAgIH0pO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9nZXR1c2VybWVkaWEuanNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFNEUFV0aWxzID0gcmVxdWlyZSgnc2RwJyk7XG5cbi8vIHNvcnQgdHJhY2tzIHN1Y2ggdGhhdCB0aGV5IGZvbGxvdyBhbiBhLXYtYS12Li4uXG4vLyBwYXR0ZXJuLlxuZnVuY3Rpb24gc29ydFRyYWNrcyh0cmFja3MpIHtcbiAgdmFyIGF1ZGlvVHJhY2tzID0gdHJhY2tzLmZpbHRlcihmdW5jdGlvbih0cmFjaykge1xuICAgIHJldHVybiB0cmFjay5raW5kID09PSAnYXVkaW8nO1xuICB9KTtcbiAgdmFyIHZpZGVvVHJhY2tzID0gdHJhY2tzLmZpbHRlcihmdW5jdGlvbih0cmFjaykge1xuICAgIHJldHVybiB0cmFjay5raW5kID09PSAndmlkZW8nO1xuICB9KTtcbiAgdHJhY2tzID0gW107XG4gIHdoaWxlIChhdWRpb1RyYWNrcy5sZW5ndGggfHwgdmlkZW9UcmFja3MubGVuZ3RoKSB7XG4gICAgaWYgKGF1ZGlvVHJhY2tzLmxlbmd0aCkge1xuICAgICAgdHJhY2tzLnB1c2goYXVkaW9UcmFja3Muc2hpZnQoKSk7XG4gICAgfVxuICAgIGlmICh2aWRlb1RyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHRyYWNrcy5wdXNoKHZpZGVvVHJhY2tzLnNoaWZ0KCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhY2tzO1xufVxuXG4vLyBFZGdlIGRvZXMgbm90IGxpa2Vcbi8vIDEpIHN0dW46XG4vLyAyKSB0dXJuOiB0aGF0IGRvZXMgbm90IGhhdmUgYWxsIG9mIHR1cm46aG9zdDpwb3J0P3RyYW5zcG9ydD11ZHBcbi8vIDMpIHR1cm46IHdpdGggaXB2NiBhZGRyZXNzZXNcbi8vIDQpIHR1cm46IG9jY3VycmluZyBtdWxpcGxlIHRpbWVzXG5mdW5jdGlvbiBmaWx0ZXJJY2VTZXJ2ZXJzKGljZVNlcnZlcnMsIGVkZ2VWZXJzaW9uKSB7XG4gIHZhciBoYXNUdXJuID0gZmFsc2U7XG4gIGljZVNlcnZlcnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGljZVNlcnZlcnMpKTtcbiAgcmV0dXJuIGljZVNlcnZlcnMuZmlsdGVyKGZ1bmN0aW9uKHNlcnZlcikge1xuICAgIGlmIChzZXJ2ZXIgJiYgKHNlcnZlci51cmxzIHx8IHNlcnZlci51cmwpKSB7XG4gICAgICB2YXIgdXJscyA9IHNlcnZlci51cmxzIHx8IHNlcnZlci51cmw7XG4gICAgICBpZiAoc2VydmVyLnVybCAmJiAhc2VydmVyLnVybHMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdSVENJY2VTZXJ2ZXIudXJsIGlzIGRlcHJlY2F0ZWQhIFVzZSB1cmxzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgdXJscyA9PT0gJ3N0cmluZyc7XG4gICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgdXJscyA9IFt1cmxzXTtcbiAgICAgIH1cbiAgICAgIHVybHMgPSB1cmxzLmZpbHRlcihmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIHZhbGlkVHVybiA9IHVybC5pbmRleE9mKCd0dXJuOicpID09PSAwICYmXG4gICAgICAgICAgICB1cmwuaW5kZXhPZigndHJhbnNwb3J0PXVkcCcpICE9PSAtMSAmJlxuICAgICAgICAgICAgdXJsLmluZGV4T2YoJ3R1cm46WycpID09PSAtMSAmJlxuICAgICAgICAgICAgIWhhc1R1cm47XG5cbiAgICAgICAgaWYgKHZhbGlkVHVybikge1xuICAgICAgICAgIGhhc1R1cm4gPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmwuaW5kZXhPZignc3R1bjonKSA9PT0gMCAmJiBlZGdlVmVyc2lvbiA+PSAxNDM5MztcbiAgICAgIH0pO1xuXG4gICAgICBkZWxldGUgc2VydmVyLnVybDtcbiAgICAgIHNlcnZlci51cmxzID0gaXNTdHJpbmcgPyB1cmxzWzBdIDogdXJscztcbiAgICAgIHJldHVybiAhIXVybHMubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG4vLyBEZXRlcm1pbmVzIHRoZSBpbnRlcnNlY3Rpb24gb2YgbG9jYWwgYW5kIHJlbW90ZSBjYXBhYmlsaXRpZXMuXG5mdW5jdGlvbiBnZXRDb21tb25DYXBhYmlsaXRpZXMobG9jYWxDYXBhYmlsaXRpZXMsIHJlbW90ZUNhcGFiaWxpdGllcykge1xuICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0ge1xuICAgIGNvZGVjczogW10sXG4gICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgZmVjTWVjaGFuaXNtczogW11cbiAgfTtcblxuICB2YXIgZmluZENvZGVjQnlQYXlsb2FkVHlwZSA9IGZ1bmN0aW9uKHB0LCBjb2RlY3MpIHtcbiAgICBwdCA9IHBhcnNlSW50KHB0LCAxMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2RlY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb2RlY3NbaV0ucGF5bG9hZFR5cGUgPT09IHB0IHx8XG4gICAgICAgICAgY29kZWNzW2ldLnByZWZlcnJlZFBheWxvYWRUeXBlID09PSBwdCkge1xuICAgICAgICByZXR1cm4gY29kZWNzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgcnR4Q2FwYWJpbGl0eU1hdGNoZXMgPSBmdW5jdGlvbihsUnR4LCByUnR4LCBsQ29kZWNzLCByQ29kZWNzKSB7XG4gICAgdmFyIGxDb2RlYyA9IGZpbmRDb2RlY0J5UGF5bG9hZFR5cGUobFJ0eC5wYXJhbWV0ZXJzLmFwdCwgbENvZGVjcyk7XG4gICAgdmFyIHJDb2RlYyA9IGZpbmRDb2RlY0J5UGF5bG9hZFR5cGUoclJ0eC5wYXJhbWV0ZXJzLmFwdCwgckNvZGVjcyk7XG4gICAgcmV0dXJuIGxDb2RlYyAmJiByQ29kZWMgJiZcbiAgICAgICAgbENvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gckNvZGVjLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihsQ29kZWMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW90ZUNhcGFiaWxpdGllcy5jb2RlY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByQ29kZWMgPSByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzW2ldO1xuICAgICAgaWYgKGxDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgJiZcbiAgICAgICAgICBsQ29kZWMuY2xvY2tSYXRlID09PSByQ29kZWMuY2xvY2tSYXRlKSB7XG4gICAgICAgIGlmIChsQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSAncnR4JyAmJlxuICAgICAgICAgICAgbENvZGVjLnBhcmFtZXRlcnMgJiYgckNvZGVjLnBhcmFtZXRlcnMuYXB0KSB7XG4gICAgICAgICAgLy8gZm9yIFJUWCB3ZSBuZWVkIHRvIGZpbmQgdGhlIGxvY2FsIHJ0eCB0aGF0IGhhcyBhIGFwdFxuICAgICAgICAgIC8vIHdoaWNoIHBvaW50cyB0byB0aGUgc2FtZSBsb2NhbCBjb2RlYyBhcyB0aGUgcmVtb3RlIG9uZS5cbiAgICAgICAgICBpZiAoIXJ0eENhcGFiaWxpdHlNYXRjaGVzKGxDb2RlYywgckNvZGVjLFxuICAgICAgICAgICAgICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MsIHJlbW90ZUNhcGFiaWxpdGllcy5jb2RlY3MpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgckNvZGVjID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyQ29kZWMpKTsgLy8gZGVlcGNvcHlcbiAgICAgICAgLy8gbnVtYmVyIG9mIGNoYW5uZWxzIGlzIHRoZSBoaWdoZXN0IGNvbW1vbiBudW1iZXIgb2YgY2hhbm5lbHNcbiAgICAgICAgckNvZGVjLm51bUNoYW5uZWxzID0gTWF0aC5taW4obENvZGVjLm51bUNoYW5uZWxzLFxuICAgICAgICAgICAgckNvZGVjLm51bUNoYW5uZWxzKTtcbiAgICAgICAgLy8gcHVzaCByQ29kZWMgc28gd2UgcmVwbHkgd2l0aCBvZmZlcmVyIHBheWxvYWQgdHlwZVxuICAgICAgICBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLnB1c2gockNvZGVjKTtcblxuICAgICAgICAvLyBkZXRlcm1pbmUgY29tbW9uIGZlZWRiYWNrIG1lY2hhbmlzbXNcbiAgICAgICAgckNvZGVjLnJ0Y3BGZWVkYmFjayA9IHJDb2RlYy5ydGNwRmVlZGJhY2suZmlsdGVyKGZ1bmN0aW9uKGZiKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsQ29kZWMucnRjcEZlZWRiYWNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobENvZGVjLnJ0Y3BGZWVkYmFja1tqXS50eXBlID09PSBmYi50eXBlICYmXG4gICAgICAgICAgICAgICAgbENvZGVjLnJ0Y3BGZWVkYmFja1tqXS5wYXJhbWV0ZXIgPT09IGZiLnBhcmFtZXRlcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRklYTUU6IGFsc28gbmVlZCB0byBkZXRlcm1pbmUgLnBhcmFtZXRlcnNcbiAgICAgICAgLy8gIHNlZSBodHRwczovL2dpdGh1Yi5jb20vb3BlbnBlZXIvb3J0Yy9pc3N1ZXMvNTY5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbG9jYWxDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGxIZWFkZXJFeHRlbnNpb24pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW90ZUNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zLmxlbmd0aDtcbiAgICAgICAgIGkrKykge1xuICAgICAgdmFyIHJIZWFkZXJFeHRlbnNpb24gPSByZW1vdGVDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9uc1tpXTtcbiAgICAgIGlmIChsSGVhZGVyRXh0ZW5zaW9uLnVyaSA9PT0gckhlYWRlckV4dGVuc2lvbi51cmkpIHtcbiAgICAgICAgY29tbW9uQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMucHVzaChySGVhZGVyRXh0ZW5zaW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBGSVhNRTogZmVjTWVjaGFuaXNtc1xuICByZXR1cm4gY29tbW9uQ2FwYWJpbGl0aWVzO1xufVxuXG4vLyBpcyBhY3Rpb249c2V0TG9jYWxEZXNjcmlwdGlvbiB3aXRoIHR5cGUgYWxsb3dlZCBpbiBzaWduYWxpbmdTdGF0ZVxuZnVuY3Rpb24gaXNBY3Rpb25BbGxvd2VkSW5TaWduYWxpbmdTdGF0ZShhY3Rpb24sIHR5cGUsIHNpZ25hbGluZ1N0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgb2ZmZXI6IHtcbiAgICAgIHNldExvY2FsRGVzY3JpcHRpb246IFsnc3RhYmxlJywgJ2hhdmUtbG9jYWwtb2ZmZXInXSxcbiAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uOiBbJ3N0YWJsZScsICdoYXZlLXJlbW90ZS1vZmZlciddXG4gICAgfSxcbiAgICBhbnN3ZXI6IHtcbiAgICAgIHNldExvY2FsRGVzY3JpcHRpb246IFsnaGF2ZS1yZW1vdGUtb2ZmZXInLCAnaGF2ZS1sb2NhbC1wcmFuc3dlciddLFxuICAgICAgc2V0UmVtb3RlRGVzY3JpcHRpb246IFsnaGF2ZS1sb2NhbC1vZmZlcicsICdoYXZlLXJlbW90ZS1wcmFuc3dlciddXG4gICAgfVxuICB9W3R5cGVdW2FjdGlvbl0uaW5kZXhPZihzaWduYWxpbmdTdGF0ZSkgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdywgZWRnZVZlcnNpb24pIHtcbiAgdmFyIFJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIF9ldmVudFRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBbJ2FkZEV2ZW50TGlzdGVuZXInLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsICdkaXNwYXRjaEV2ZW50J11cbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgc2VsZlttZXRob2RdID0gX2V2ZW50VGFyZ2V0W21ldGhvZF0uYmluZChfZXZlbnRUYXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgIHRoaXMubmVlZE5lZ290aWF0aW9uID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uaWNlY2FuZGlkYXRlID0gbnVsbDtcbiAgICB0aGlzLm9uYWRkc3RyZWFtID0gbnVsbDtcbiAgICB0aGlzLm9udHJhY2sgPSBudWxsO1xuICAgIHRoaXMub25yZW1vdmVzdHJlYW0gPSBudWxsO1xuICAgIHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgdGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgdGhpcy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBudWxsO1xuICAgIHRoaXMub25kYXRhY2hhbm5lbCA9IG51bGw7XG4gICAgdGhpcy5jYW5Ucmlja2xlSWNlQ2FuZGlkYXRlcyA9IG51bGw7XG5cbiAgICB0aGlzLmxvY2FsU3RyZWFtcyA9IFtdO1xuICAgIHRoaXMucmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgIHRoaXMuZ2V0TG9jYWxTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2VsZi5sb2NhbFN0cmVhbXM7XG4gICAgfTtcbiAgICB0aGlzLmdldFJlbW90ZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzZWxmLnJlbW90ZVN0cmVhbXM7XG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxEZXNjcmlwdGlvbiA9IG5ldyB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgc2RwOiAnJ1xuICAgIH0pO1xuICAgIHRoaXMucmVtb3RlRGVzY3JpcHRpb24gPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnJyxcbiAgICAgIHNkcDogJydcbiAgICB9KTtcbiAgICB0aGlzLnNpZ25hbGluZ1N0YXRlID0gJ3N0YWJsZSc7XG4gICAgdGhpcy5pY2VDb25uZWN0aW9uU3RhdGUgPSAnbmV3JztcbiAgICB0aGlzLmljZUdhdGhlcmluZ1N0YXRlID0gJ25ldyc7XG5cbiAgICB0aGlzLmljZU9wdGlvbnMgPSB7XG4gICAgICBnYXRoZXJQb2xpY3k6ICdhbGwnLFxuICAgICAgaWNlU2VydmVyczogW11cbiAgICB9O1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgc3dpdGNoIChjb25maWcuaWNlVHJhbnNwb3J0UG9saWN5KSB7XG4gICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgIGNhc2UgJ3JlbGF5JzpcbiAgICAgICAgICB0aGlzLmljZU9wdGlvbnMuZ2F0aGVyUG9saWN5ID0gY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBkb24ndCBzZXQgaWNlVHJhbnNwb3J0UG9saWN5LlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVzaW5nQnVuZGxlID0gY29uZmlnICYmIGNvbmZpZy5idW5kbGVQb2xpY3kgPT09ICdtYXgtYnVuZGxlJztcblxuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgIHRoaXMuaWNlT3B0aW9ucy5pY2VTZXJ2ZXJzID0gZmlsdGVySWNlU2VydmVycyhjb25maWcuaWNlU2VydmVycyxcbiAgICAgICAgICBlZGdlVmVyc2lvbik7XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgIC8vIHBlci10cmFjayBpY2VHYXRoZXJzLCBpY2VUcmFuc3BvcnRzLCBkdGxzVHJhbnNwb3J0cywgcnRwU2VuZGVycywgLi4uXG4gICAgLy8gZXZlcnl0aGluZyB0aGF0IGlzIG5lZWRlZCB0byBkZXNjcmliZSBhIFNEUCBtLWxpbmUuXG4gICAgdGhpcy50cmFuc2NlaXZlcnMgPSBbXTtcblxuICAgIC8vIHNpbmNlIHRoZSBpY2VHYXRoZXJlciBpcyBjdXJyZW50bHkgY3JlYXRlZCBpbiBjcmVhdGVPZmZlciBidXQgd2VcbiAgICAvLyBtdXN0IG5vdCBlbWl0IGNhbmRpZGF0ZXMgdW50aWwgYWZ0ZXIgc2V0TG9jYWxEZXNjcmlwdGlvbiB3ZSBidWZmZXJcbiAgICAvLyB0aGVtIGluIHRoaXMgYXJyYXkuXG4gICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyID0gW107XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2ljZWdhdGhlcmluZ3N0YXRlY2hhbmdlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwKTtcbiAgICAvLyBGSVhNRTogbmVlZCB0byBhcHBseSBpY2UgY2FuZGlkYXRlcyBpbiBhIHdheSB3aGljaCBpcyBhc3luYyBidXRcbiAgICAvLyBpbi1vcmRlclxuICAgIHRoaXMuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgZW5kID0gIWV2ZW50LmNhbmRpZGF0ZSB8fCBPYmplY3Qua2V5cyhldmVudC5jYW5kaWRhdGUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBzZWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChzZWN0aW9uc1tqXS5pbmRleE9mKCdcXHJcXG5hPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJykgPT09IC0xKSB7XG4gICAgICAgICAgICBzZWN0aW9uc1tqXSArPSAnYT1lbmQtb2YtY2FuZGlkYXRlc1xcclxcbic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uc1tldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCArIDFdICs9XG4gICAgICAgICAgICAnYT0nICsgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSArICdcXHJcXG4nO1xuICAgICAgfVxuICAgICAgc2VsZi5sb2NhbERlc2NyaXB0aW9uLnNkcCA9IHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoZXZlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCFldmVudC5jYW5kaWRhdGUgJiYgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB2YXIgY29tcGxldGUgPSBzZWxmLnRyYW5zY2VpdmVycy5ldmVyeShmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJlxuICAgICAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5zdGF0ZSA9PT0gJ2NvbXBsZXRlZCc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29tcGxldGUgJiYgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZUNoYW5nZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPSAnY29tcGxldGUnO1xuICAgICAgICAgIHNlbGYuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyID0gW107XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9O1xuXG4gIC8vIGludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSB0cmFuc2NlaXZlciBvYmplY3QuXG4gIC8vICh3aGloIGlzIG5vdCB5ZXQgdGhlIHNhbWUgYXMgdGhlIFdlYlJUQyAxLjAgdHJhbnNjZWl2ZXIpXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fY3JlYXRlVHJhbnNjZWl2ZXIgPSBmdW5jdGlvbihraW5kKSB7XG4gICAgdmFyIGhhc0J1bmRsZVRyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aCA+IDA7XG4gICAgdmFyIHRyYW5zY2VpdmVyID0ge1xuICAgICAgdHJhY2s6IG51bGwsXG4gICAgICBpY2VHYXRoZXJlcjogbnVsbCxcbiAgICAgIGljZVRyYW5zcG9ydDogbnVsbCxcbiAgICAgIGR0bHNUcmFuc3BvcnQ6IG51bGwsXG4gICAgICBsb2NhbENhcGFiaWxpdGllczogbnVsbCxcbiAgICAgIHJlbW90ZUNhcGFiaWxpdGllczogbnVsbCxcbiAgICAgIHJ0cFNlbmRlcjogbnVsbCxcbiAgICAgIHJ0cFJlY2VpdmVyOiBudWxsLFxuICAgICAga2luZDoga2luZCxcbiAgICAgIG1pZDogbnVsbCxcbiAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM6IG51bGwsXG4gICAgICByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzOiBudWxsLFxuICAgICAgc3RyZWFtOiBudWxsLFxuICAgICAgd2FudFJlY2VpdmU6IHRydWVcbiAgICB9O1xuICAgIGlmICh0aGlzLnVzaW5nQnVuZGxlICYmIGhhc0J1bmRsZVRyYW5zcG9ydCkge1xuICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnNbMF0uaWNlVHJhbnNwb3J0O1xuICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0cmFuc3BvcnRzID0gdGhpcy5fY3JlYXRlSWNlQW5kRHRsc1RyYW5zcG9ydHMoKTtcbiAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCA9IHRyYW5zcG9ydHMuaWNlVHJhbnNwb3J0O1xuICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCA9IHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydDtcbiAgICB9XG4gICAgdGhpcy50cmFuc2NlaXZlcnMucHVzaCh0cmFuc2NlaXZlcik7XG4gICAgcmV0dXJuIHRyYW5zY2VpdmVyO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICB2YXIgdHJhbnNjZWl2ZXI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyYW5zY2VpdmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLnRyYW5zY2VpdmVyc1tpXS50cmFjayAmJlxuICAgICAgICAgIHRoaXMudHJhbnNjZWl2ZXJzW2ldLmtpbmQgPT09IHRyYWNrLmtpbmQpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIgPSB0aGlzLnRyYW5zY2VpdmVyc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0cmFuc2NlaXZlcikge1xuICAgICAgdHJhbnNjZWl2ZXIgPSB0aGlzLl9jcmVhdGVUcmFuc2NlaXZlcih0cmFjay5raW5kKTtcbiAgICB9XG5cbiAgICB0cmFuc2NlaXZlci50cmFjayA9IHRyYWNrO1xuICAgIHRyYW5zY2VpdmVyLnN0cmVhbSA9IHN0cmVhbTtcbiAgICB0cmFuc2NlaXZlci5ydHBTZW5kZXIgPSBuZXcgd2luZG93LlJUQ1J0cFNlbmRlcih0cmFjayxcbiAgICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCk7XG5cbiAgICB0aGlzLl9tYXliZUZpcmVOZWdvdGlhdGlvbk5lZWRlZCgpO1xuICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoZWRnZVZlcnNpb24gPj0gMTUwMjUpIHtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgIHNlbGYuYWRkVHJhY2sodHJhY2ssIHN0cmVhbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xvbmUgaXMgbmVjZXNzYXJ5IGZvciBsb2NhbCBkZW1vcyBtb3N0bHksIGF0dGFjaGluZyBkaXJlY3RseVxuICAgICAgLy8gdG8gdHdvIGRpZmZlcmVudCBzZW5kZXJzIGRvZXMgbm90IHdvcmsgKGJ1aWxkIDEwNTQ3KS5cbiAgICAgIC8vIEZpeGVkIGluIDE1MDI1IChvciBlYXJsaWVyKVxuICAgICAgdmFyIGNsb25lZFN0cmVhbSA9IHN0cmVhbS5jbG9uZSgpO1xuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGlkeCkge1xuICAgICAgICB2YXIgY2xvbmVkVHJhY2sgPSBjbG9uZWRTdHJlYW0uZ2V0VHJhY2tzKClbaWR4XTtcbiAgICAgICAgdHJhY2suYWRkRXZlbnRMaXN0ZW5lcignZW5hYmxlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgY2xvbmVkVHJhY2suZW5hYmxlZCA9IGV2ZW50LmVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjbG9uZWRTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICBzZWxmLmFkZFRyYWNrKHRyYWNrLCBjbG9uZWRTdHJlYW0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcy5wdXNoKGNsb25lZFN0cmVhbSk7XG4gICAgfVxuICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHZhciBpZHggPSB0aGlzLmxvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTZW5kZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgcmV0dXJuICEhdHJhbnNjZWl2ZXIucnRwU2VuZGVyO1xuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgICB9KTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0UmVjZWl2ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgcmV0dXJuICEhdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIElDRSBnYXRoZXJlciBhbmQgaG9vayBpdCB1cC5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVJY2VHYXRoZXJlciA9IGZ1bmN0aW9uKG1pZCxcbiAgICAgIHNkcE1MaW5lSW5kZXgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGljZUdhdGhlcmVyID0gbmV3IHdpbmRvdy5SVENJY2VHYXRoZXJlcihzZWxmLmljZU9wdGlvbnMpO1xuICAgIGljZUdhdGhlcmVyLm9ubG9jYWxjYW5kaWRhdGUgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJyk7XG4gICAgICBldmVudC5jYW5kaWRhdGUgPSB7c2RwTWlkOiBtaWQsIHNkcE1MaW5lSW5kZXg6IHNkcE1MaW5lSW5kZXh9O1xuXG4gICAgICB2YXIgY2FuZCA9IGV2dC5jYW5kaWRhdGU7XG4gICAgICB2YXIgZW5kID0gIWNhbmQgfHwgT2JqZWN0LmtleXMoY2FuZCkubGVuZ3RoID09PSAwO1xuICAgICAgLy8gRWRnZSBlbWl0cyBhbiBlbXB0eSBvYmplY3QgZm9yIFJUQ0ljZUNhbmRpZGF0ZUNvbXBsZXRl4oClXG4gICAgICBpZiAoZW5kKSB7XG4gICAgICAgIC8vIHBvbHlmaWxsIHNpbmNlIFJUQ0ljZUdhdGhlcmVyLnN0YXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpblxuICAgICAgICAvLyBFZGdlIDEwNTQ3IHlldC5cbiAgICAgICAgaWYgKGljZUdhdGhlcmVyLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpY2VHYXRoZXJlci5zdGF0ZSA9ICdjb21wbGV0ZWQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSVENJY2VDYW5kaWRhdGUgZG9lc24ndCBoYXZlIGEgY29tcG9uZW50LCBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICBjYW5kLmNvbXBvbmVudCA9IDE7XG4gICAgICAgIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUgPSBTRFBVdGlscy53cml0ZUNhbmRpZGF0ZShjYW5kKTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIGxvY2FsIGRlc2NyaXB0aW9uLlxuICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwKTtcbiAgICAgIGlmICghZW5kKSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPScgKyBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlICsgJ1xcclxcbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uc1tldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCArIDFdICs9XG4gICAgICAgICAgICAnYT1lbmQtb2YtY2FuZGlkYXRlc1xcclxcbic7XG4gICAgICB9XG4gICAgICBzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwID0gc2VjdGlvbnMuam9pbignJyk7XG4gICAgICB2YXIgdHJhbnNjZWl2ZXJzID0gc2VsZi5fcGVuZGluZ09mZmVyID8gc2VsZi5fcGVuZGluZ09mZmVyIDpcbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVycztcbiAgICAgIHZhciBjb21wbGV0ZSA9IHRyYW5zY2VpdmVycy5ldmVyeShmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICByZXR1cm4gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLnN0YXRlID09PSAnY29tcGxldGVkJztcbiAgICAgIH0pO1xuXG4gICAgICAvLyBFbWl0IGNhbmRpZGF0ZSBpZiBsb2NhbERlc2NyaXB0aW9uIGlzIHNldC5cbiAgICAgIC8vIEFsc28gZW1pdHMgbnVsbCBjYW5kaWRhdGUgd2hlbiBhbGwgZ2F0aGVyZXJzIGFyZSBjb21wbGV0ZS5cbiAgICAgIHN3aXRjaCAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSkge1xuICAgICAgICBjYXNlICduZXcnOlxuICAgICAgICAgIGlmICghZW5kKSB7XG4gICAgICAgICAgICBzZWxmLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbmQgJiYgY29tcGxldGUpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2F0aGVyaW5nJzpcbiAgICAgICAgICBzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzKCk7XG4gICAgICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5vbmljZWNhbmRpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5vbmljZWNhbmRpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgICBzZWxmLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBsZXRlJzpcbiAgICAgICAgICAvLyBzaG91bGQgbm90IGhhcHBlbi4uLiBjdXJyZW50bHkhXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIG5vLW9wLlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGljZUdhdGhlcmVyO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBJQ0UgdHJhbnNwb3J0IGFuZCBEVExTIHRyYW5zcG9ydC5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaWNlVHJhbnNwb3J0ID0gbmV3IHdpbmRvdy5SVENJY2VUcmFuc3BvcnQobnVsbCk7XG4gICAgaWNlVHJhbnNwb3J0Lm9uaWNlc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG5cbiAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IG5ldyB3aW5kb3cuUlRDRHRsc1RyYW5zcG9ydChpY2VUcmFuc3BvcnQpO1xuICAgIGR0bHNUcmFuc3BvcnQub25kdGxzc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG4gICAgZHRsc1RyYW5zcG9ydC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBvbmVycm9yIGRvZXMgbm90IHNldCBzdGF0ZSB0byBmYWlsZWQgYnkgaXRzZWxmLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGR0bHNUcmFuc3BvcnQsICdzdGF0ZScsXG4gICAgICAgICAge3ZhbHVlOiAnZmFpbGVkJywgd3JpdGFibGU6IHRydWV9KTtcbiAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWNlVHJhbnNwb3J0OiBpY2VUcmFuc3BvcnQsXG4gICAgICBkdGxzVHJhbnNwb3J0OiBkdGxzVHJhbnNwb3J0XG4gICAgfTtcbiAgfTtcblxuICAvLyBEZXN0cm95IElDRSBnYXRoZXJlciwgSUNFIHRyYW5zcG9ydCBhbmQgRFRMUyB0cmFuc3BvcnQuXG4gIC8vIFdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgY2FsbGJhY2tzLlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2Rpc3Bvc2VJY2VBbmREdGxzVHJhbnNwb3J0cyA9IGZ1bmN0aW9uKFxuICAgICAgc2RwTUxpbmVJbmRleCkge1xuICAgIHZhciBpY2VHYXRoZXJlciA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZUdhdGhlcmVyO1xuICAgIGlmIChpY2VHYXRoZXJlcikge1xuICAgICAgZGVsZXRlIGljZUdhdGhlcmVyLm9ubG9jYWxjYW5kaWRhdGU7XG4gICAgICBkZWxldGUgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXI7XG4gICAgfVxuICAgIHZhciBpY2VUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VUcmFuc3BvcnQ7XG4gICAgaWYgKGljZVRyYW5zcG9ydCkge1xuICAgICAgZGVsZXRlIGljZVRyYW5zcG9ydC5vbmljZXN0YXRlY2hhbmdlO1xuICAgICAgZGVsZXRlIHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydDtcbiAgICB9XG4gICAgdmFyIGR0bHNUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5kdGxzVHJhbnNwb3J0O1xuICAgIGlmIChkdGxzVHJhbnNwb3J0KSB7XG4gICAgICBkZWxldGUgZHRsc1RyYW5zcG9ydC5vbmR0bHNzdHRhdGVjaGFuZ2U7XG4gICAgICBkZWxldGUgZHRsc1RyYW5zcG9ydC5vbmVycm9yO1xuICAgICAgZGVsZXRlIHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQ7XG4gICAgfVxuICB9O1xuXG4gIC8vIFN0YXJ0IHRoZSBSVFAgU2VuZGVyIGFuZCBSZWNlaXZlciBmb3IgYSB0cmFuc2NlaXZlci5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl90cmFuc2NlaXZlID0gZnVuY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICBzZW5kLCByZWN2KSB7XG4gICAgdmFyIHBhcmFtcyA9IGdldENvbW1vbkNhcGFiaWxpdGllcyh0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzKTtcbiAgICBpZiAoc2VuZCAmJiB0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgIGNuYW1lOiBTRFBVdGlscy5sb2NhbENOYW1lLFxuICAgICAgICBjb21wb3VuZDogdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMuY29tcG91bmRcbiAgICAgIH07XG4gICAgICBpZiAodHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgcGFyYW1zLnJ0Y3Auc3NyYyA9IHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYztcbiAgICAgIH1cbiAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zZW5kKHBhcmFtcyk7XG4gICAgfVxuICAgIGlmIChyZWN2ICYmIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgICAvLyByZW1vdmUgUlRYIGZpZWxkIGluIEVkZ2UgMTQ5NDJcbiAgICAgIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nXG4gICAgICAgICAgJiYgdHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVyc1xuICAgICAgICAgICYmIGVkZ2VWZXJzaW9uIDwgMTUwMTkpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVycy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICBkZWxldGUgcC5ydHg7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGFyYW1zLmVuY29kaW5ncyA9IHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICBwYXJhbXMucnRjcCA9IHtcbiAgICAgICAgY25hbWU6IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNuYW1lLFxuICAgICAgICBjb21wb3VuZDogdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMuY29tcG91bmRcbiAgICAgIH07XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgcGFyYW1zLnJ0Y3Auc3NyYyA9IHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYztcbiAgICAgIH1cbiAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyLnJlY2VpdmUocGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb24gPSBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICghaXNBY3Rpb25BbGxvd2VkSW5TaWduYWxpbmdTdGF0ZSgnc2V0TG9jYWxEZXNjcmlwdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uLnR5cGUsIHRoaXMuc2lnbmFsaW5nU3RhdGUpKSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcignQ2FuIG5vdCBzZXQgbG9jYWwgJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICcgaW4gc3RhdGUgJyArIHRoaXMuc2lnbmFsaW5nU3RhdGUpO1xuICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiB0eXBlb2YgYXJndW1lbnRzWzJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1syXSwgMCwgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgdmFyIHNlY3Rpb25zO1xuICAgIHZhciBzZXNzaW9ucGFydDtcbiAgICBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJykge1xuICAgICAgLy8gRklYTUU6IFdoYXQgd2FzIHRoZSBwdXJwb3NlIG9mIHRoaXMgZW1wdHkgaWYgc3RhdGVtZW50P1xuICAgICAgLy8gaWYgKCF0aGlzLl9wZW5kaW5nT2ZmZXIpIHtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICAgIC8vIFZFUlkgbGltaXRlZCBzdXBwb3J0IGZvciBTRFAgbXVuZ2luZy4gTGltaXRlZCB0bzpcbiAgICAgICAgLy8gKiBjaGFuZ2luZyB0aGUgb3JkZXIgb2YgY29kZWNzXG4gICAgICAgIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhkZXNjcmlwdGlvbi5zZHApO1xuICAgICAgICBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAgICAgdmFyIGNhcHMgPSBTRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcbiAgICAgICAgICBzZWxmLl9wZW5kaW5nT2ZmZXJbc2RwTUxpbmVJbmRleF0ubG9jYWxDYXBhYmlsaXRpZXMgPSBjYXBzO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmFuc2NlaXZlcnMgPSB0aGlzLl9wZW5kaW5nT2ZmZXI7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nT2ZmZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnYW5zd2VyJykge1xuICAgICAgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYucmVtb3RlRGVzY3JpcHRpb24uc2RwKTtcbiAgICAgIHNlc3Npb25wYXJ0ID0gc2VjdGlvbnMuc2hpZnQoKTtcbiAgICAgIHZhciBpc0ljZUxpdGUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChzZXNzaW9ucGFydCxcbiAgICAgICAgICAnYT1pY2UtbGl0ZScpLmxlbmd0aCA+IDA7XG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICB2YXIgdHJhbnNjZWl2ZXIgPSBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XTtcbiAgICAgICAgdmFyIGljZUdhdGhlcmVyID0gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXI7XG4gICAgICAgIHZhciBpY2VUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgdmFyIGxvY2FsQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXM7XG4gICAgICAgIHZhciByZW1vdGVDYXBhYmlsaXRpZXMgPSB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXM7XG5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gU0RQVXRpbHMuaXNSZWplY3RlZChtZWRpYVNlY3Rpb24pO1xuXG4gICAgICAgIGlmICghcmVqZWN0ZWQgJiYgIXRyYW5zY2VpdmVyLmlzRGF0YWNoYW5uZWwpIHtcbiAgICAgICAgICB2YXIgcmVtb3RlSWNlUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldEljZVBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpO1xuICAgICAgICAgIHZhciByZW1vdGVEdGxzUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICBtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICBpZiAoaXNJY2VMaXRlKSB7XG4gICAgICAgICAgICByZW1vdGVEdGxzUGFyYW1ldGVycy5yb2xlID0gJ3NlcnZlcic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzZWxmLnVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGljZVRyYW5zcG9ydC5zdGFydChpY2VHYXRoZXJlciwgcmVtb3RlSWNlUGFyYW1ldGVycyxcbiAgICAgICAgICAgICAgICBpc0ljZUxpdGUgPyAnY29udHJvbGxpbmcnIDogJ2NvbnRyb2xsZWQnKTtcbiAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQuc3RhcnQocmVtb3RlRHRsc1BhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gb2YgY2FwYWJpbGl0aWVzLlxuICAgICAgICAgIHZhciBwYXJhbXMgPSBnZXRDb21tb25DYXBhYmlsaXRpZXMobG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgICAvLyBTdGFydCB0aGUgUlRDUnRwU2VuZGVyLiBUaGUgUlRDUnRwUmVjZWl2ZXIgZm9yIHRoaXNcbiAgICAgICAgICAvLyB0cmFuc2NlaXZlciBoYXMgYWxyZWFkeSBiZWVuIHN0YXJ0ZWQgaW4gc2V0UmVtb3RlRGVzY3JpcHRpb24uXG4gICAgICAgICAgc2VsZi5fdHJhbnNjZWl2ZSh0cmFuc2NlaXZlcixcbiAgICAgICAgICAgICAgcGFyYW1zLmNvZGVjcy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubG9jYWxEZXNjcmlwdGlvbiA9IHtcbiAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICBzZHA6IGRlc2NyaXB0aW9uLnNkcFxuICAgIH07XG4gICAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdvZmZlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdoYXZlLWxvY2FsLW9mZmVyJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYW5zd2VyJzpcbiAgICAgICAgdGhpcy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ3N0YWJsZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Vuc3VwcG9ydGVkIHR5cGUgXCInICsgZGVzY3JpcHRpb24udHlwZSArXG4gICAgICAgICAgICAnXCInKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHN1Y2Nlc3MgY2FsbGJhY2sgd2FzIHByb3ZpZGVkLCBlbWl0IElDRSBjYW5kaWRhdGVzIGFmdGVyIGl0XG4gICAgLy8gaGFzIGJlZW4gZXhlY3V0ZWQuIE90aGVyd2lzZSwgZW1pdCBjYWxsYmFjayBhZnRlciB0aGUgUHJvbWlzZSBpc1xuICAgIC8vIHJlc29sdmVkLlxuICAgIHZhciBoYXNDYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmXG4gICAgICB0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnZnVuY3Rpb24nO1xuICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgdmFyIGNiID0gYXJndW1lbnRzWzFdO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICAgIGlmIChzZWxmLmljZUdhdGhlcmluZ1N0YXRlID09PSAnbmV3Jykge1xuICAgICAgICAgIHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPSAnZ2F0aGVyaW5nJztcbiAgICAgICAgICBzZWxmLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBwLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0NhbGxiYWNrKSB7XG4gICAgICAgIGlmIChzZWxmLmljZUdhdGhlcmluZ1N0YXRlID09PSAnbmV3Jykge1xuICAgICAgICAgIHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPSAnZ2F0aGVyaW5nJztcbiAgICAgICAgICBzZWxmLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVc3VhbGx5IGNhbmRpZGF0ZXMgd2lsbCBiZSBlbWl0dGVkIGVhcmxpZXIuXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHNlbGYuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMuYmluZChzZWxmKSwgNTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcDtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb24gPSBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICghaXNBY3Rpb25BbGxvd2VkSW5TaWduYWxpbmdTdGF0ZSgnc2V0UmVtb3RlRGVzY3JpcHRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbi50eXBlLCB0aGlzLnNpZ25hbGluZ1N0YXRlKSkge1xuICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoJ0NhbiBub3Qgc2V0IHJlbW90ZSAnICsgZGVzY3JpcHRpb24udHlwZSArXG4gICAgICAgICAgJyBpbiBzdGF0ZSAnICsgdGhpcy5zaWduYWxpbmdTdGF0ZSk7XG4gICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIHR5cGVvZiBhcmd1bWVudHNbMl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzJdLCAwLCBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICB2YXIgc3RyZWFtcyA9IHt9O1xuICAgIHZhciByZWNlaXZlckxpc3QgPSBbXTtcbiAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKGRlc2NyaXB0aW9uLnNkcCk7XG4gICAgdmFyIHNlc3Npb25wYXJ0ID0gc2VjdGlvbnMuc2hpZnQoKTtcbiAgICB2YXIgaXNJY2VMaXRlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICdhPWljZS1saXRlJykubGVuZ3RoID4gMDtcbiAgICB2YXIgdXNpbmdCdW5kbGUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChzZXNzaW9ucGFydCxcbiAgICAgICAgJ2E9Z3JvdXA6QlVORExFICcpLmxlbmd0aCA+IDA7XG4gICAgdGhpcy51c2luZ0J1bmRsZSA9IHVzaW5nQnVuZGxlO1xuICAgIHZhciBpY2VPcHRpb25zID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICdhPWljZS1vcHRpb25zOicpWzBdO1xuICAgIGlmIChpY2VPcHRpb25zKSB7XG4gICAgICB0aGlzLmNhblRyaWNrbGVJY2VDYW5kaWRhdGVzID0gaWNlT3B0aW9ucy5zdWJzdHIoMTQpLnNwbGl0KCcgJylcbiAgICAgICAgICAuaW5kZXhPZigndHJpY2tsZScpID49IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FuVHJpY2tsZUljZUNhbmRpZGF0ZXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIGtpbmQgPSBTRFBVdGlscy5nZXRLaW5kKG1lZGlhU2VjdGlvbik7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBTRFBVdGlscy5pc1JlamVjdGVkKG1lZGlhU2VjdGlvbik7XG4gICAgICB2YXIgcHJvdG9jb2wgPSBsaW5lc1swXS5zdWJzdHIoMikuc3BsaXQoJyAnKVsyXTtcblxuICAgICAgdmFyIGRpcmVjdGlvbiA9IFNEUFV0aWxzLmdldERpcmVjdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KTtcbiAgICAgIHZhciByZW1vdGVNc2lkID0gU0RQVXRpbHMucGFyc2VNc2lkKG1lZGlhU2VjdGlvbik7XG5cbiAgICAgIHZhciBtaWQgPSBTRFBVdGlscy5nZXRNaWQobWVkaWFTZWN0aW9uKSB8fCBTRFBVdGlscy5nZW5lcmF0ZUlkZW50aWZpZXIoKTtcblxuICAgICAgLy8gUmVqZWN0IGRhdGFjaGFubmVscyB3aGljaCBhcmUgbm90IGltcGxlbWVudGVkIHlldC5cbiAgICAgIGlmIChraW5kID09PSAnYXBwbGljYXRpb24nICYmIHByb3RvY29sID09PSAnRFRMUy9TQ1RQJykge1xuICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSA9IHtcbiAgICAgICAgICBtaWQ6IG1pZCxcbiAgICAgICAgICBpc0RhdGFjaGFubmVsOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zY2VpdmVyO1xuICAgICAgdmFyIGljZUdhdGhlcmVyO1xuICAgICAgdmFyIGljZVRyYW5zcG9ydDtcbiAgICAgIHZhciBkdGxzVHJhbnNwb3J0O1xuICAgICAgdmFyIHJ0cFJlY2VpdmVyO1xuICAgICAgdmFyIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICB2YXIgcmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcztcblxuICAgICAgdmFyIHRyYWNrO1xuICAgICAgLy8gRklYTUU6IGVuc3VyZSB0aGUgbWVkaWFTZWN0aW9uIGhhcyBydGNwLW11eCBzZXQuXG4gICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICB2YXIgcmVtb3RlSWNlUGFyYW1ldGVycztcbiAgICAgIHZhciByZW1vdGVEdGxzUGFyYW1ldGVycztcbiAgICAgIGlmICghcmVqZWN0ZWQpIHtcbiAgICAgICAgcmVtb3RlSWNlUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldEljZVBhcmFtZXRlcnMobWVkaWFTZWN0aW9uLFxuICAgICAgICAgICAgc2Vzc2lvbnBhcnQpO1xuICAgICAgICByZW1vdGVEdGxzUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMucm9sZSA9ICdjbGllbnQnO1xuICAgICAgfVxuICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVycyA9XG4gICAgICAgICAgU0RQVXRpbHMucGFyc2VSdHBFbmNvZGluZ1BhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcblxuICAgICAgdmFyIHJ0Y3BQYXJhbWV0ZXJzID0gU0RQVXRpbHMucGFyc2VSdGNwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuXG4gICAgICB2YXIgaXNDb21wbGV0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAnYT1lbmQtb2YtY2FuZGlkYXRlcycsIHNlc3Npb25wYXJ0KS5sZW5ndGggPiAwO1xuICAgICAgdmFyIGNhbmRzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1jYW5kaWRhdGU6JylcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY2FuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmQuY29tcG9uZW50ID09PSAnMScgfHwgY2FuZC5jb21wb25lbnQgPT09IDE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiB1c2UgQlVORExFIGFuZCBkaXNwb3NlIHRyYW5zcG9ydHMuXG4gICAgICBpZiAoKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicgfHwgZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicpICYmXG4gICAgICAgICAgIXJlamVjdGVkICYmIHVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwICYmXG4gICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0pIHtcbiAgICAgICAgc2VsZi5fZGlzcG9zZUljZUFuZER0bHNUcmFuc3BvcnRzKHNkcE1MaW5lSW5kZXgpO1xuICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VHYXRoZXJlciA9XG4gICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlcjtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlVHJhbnNwb3J0ID1cbiAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmljZVRyYW5zcG9ydDtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uZHRsc1RyYW5zcG9ydCA9XG4gICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5kdGxzVHJhbnNwb3J0O1xuICAgICAgICBpZiAoc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRwU2VuZGVyKSB7XG4gICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRwU2VuZGVyLnNldFRyYW5zcG9ydChcbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFJlY2VpdmVyKSB7XG4gICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRwUmVjZWl2ZXIuc2V0VHJhbnNwb3J0KFxuICAgICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5kdGxzVHJhbnNwb3J0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0gfHxcbiAgICAgICAgICAgIHNlbGYuX2NyZWF0ZVRyYW5zY2VpdmVyKGtpbmQpO1xuICAgICAgICB0cmFuc2NlaXZlci5taWQgPSBtaWQ7XG5cbiAgICAgICAgaWYgKCF0cmFuc2NlaXZlci5pY2VHYXRoZXJlcikge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyID0gdXNpbmdCdW5kbGUgJiYgc2RwTUxpbmVJbmRleCA+IDAgP1xuICAgICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlciA6XG4gICAgICAgICAgICAgIHNlbGYuX2NyZWF0ZUljZUdhdGhlcmVyKG1pZCwgc2RwTUxpbmVJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDb21wbGV0ZSAmJiAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnNldFJlbW90ZUNhbmRpZGF0ZXMoY2FuZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIuZ2V0Q2FwYWJpbGl0aWVzKGtpbmQpO1xuXG4gICAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAvLyBpbiBhZGFwdGVyLmpzXG4gICAgICAgIGlmIChlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgICAgZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29kZWMubmFtZSAhPT0gJ3J0eCc7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxXG4gICAgICAgIH1dO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSB7XG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSBuZXcgd2luZG93LlJUQ1J0cFJlY2VpdmVyKHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQsXG4gICAgICAgICAgICAgIGtpbmQpO1xuXG4gICAgICAgICAgdHJhY2sgPSBydHBSZWNlaXZlci50cmFjaztcbiAgICAgICAgICAvLyBGSVhNRTogZG9lcyBub3Qgd29yayB3aXRoIFBsYW4gQi5cbiAgICAgICAgICBpZiAocmVtb3RlTXNpZCkge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSkge1xuICAgICAgICAgICAgICBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGVNc2lkLnN0cmVhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWNrLCAnaWQnLCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbW90ZU1zaWQudHJhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlcixcbiAgICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzID0gbG9jYWxDYXBhYmlsaXRpZXM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyA9IHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIgPSBydHBSZWNlaXZlcjtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcbiAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPSByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBSVENSdHBSZWNlaXZlciBub3cuIFRoZSBSVFBTZW5kZXIgaXMgc3RhcnRlZCBpblxuICAgICAgICAvLyBzZXRMb2NhbERlc2NyaXB0aW9uLlxuICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIGljZUdhdGhlcmVyID0gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXI7XG4gICAgICAgIGljZVRyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydDtcbiAgICAgICAgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIHJ0cFJlY2VpdmVyID0gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVtb3RlQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcblxuICAgICAgICBpZiAoKGlzSWNlTGl0ZSB8fCBpc0NvbXBsZXRlKSAmJiBjYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICBpY2VUcmFuc3BvcnQuc2V0UmVtb3RlQ2FuZGlkYXRlcyhjYW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAnY29udHJvbGxpbmcnKTtcbiAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAncmVjdm9ubHknLFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG5cbiAgICAgICAgaWYgKHJ0cFJlY2VpdmVyICYmXG4gICAgICAgICAgICAoZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5JykpIHtcbiAgICAgICAgICB0cmFjayA9IHJ0cFJlY2VpdmVyLnRyYWNrO1xuICAgICAgICAgIGlmIChyZW1vdGVNc2lkKSB7XG4gICAgICAgICAgICBpZiAoIXN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dKSB7XG4gICAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlciwgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGSVhNRTogYWN0dWFsbHkgdGhlIHJlY2VpdmVyIHNob3VsZCBiZSBjcmVhdGVkIGxhdGVyLlxuICAgICAgICAgIGRlbGV0ZSB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdGVEZXNjcmlwdGlvbiA9IHtcbiAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICBzZHA6IGRlc2NyaXB0aW9uLnNkcFxuICAgIH07XG4gICAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdvZmZlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdoYXZlLXJlbW90ZS1vZmZlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICAgJ1wiJyk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHN0cmVhbXMpLmZvckVhY2goZnVuY3Rpb24oc2lkKSB7XG4gICAgICB2YXIgc3RyZWFtID0gc3RyZWFtc1tzaWRdO1xuICAgICAgaWYgKHN0cmVhbS5nZXRUcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdhZGRzdHJlYW0nKTtcbiAgICAgICAgZXZlbnQuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAoc2VsZi5vbmFkZHN0cmVhbSAhPT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5vbmFkZHN0cmVhbShldmVudCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWNlaXZlckxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgdmFyIHRyYWNrID0gaXRlbVswXTtcbiAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSBpdGVtWzFdO1xuICAgICAgICAgIGlmIChzdHJlYW0uaWQgIT09IGl0ZW1bMl0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHRyYWNrRXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgdHJhY2tFdmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgIHRyYWNrRXZlbnQucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgICB0cmFja0V2ZW50LnN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQodHJhY2tFdmVudCk7XG4gICAgICAgICAgaWYgKHNlbGYub250cmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYub250cmFjayh0cmFja0V2ZW50KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIGFkZEljZUNhbmRpZGF0ZSh7fSkgd2FzIGNhbGxlZCB3aXRoaW4gZm91ciBzZWNvbmRzIGFmdGVyXG4gICAgLy8gc2V0UmVtb3RlRGVzY3JpcHRpb24uXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIShzZWxmICYmIHNlbGYudHJhbnNjZWl2ZXJzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZSA9PT0gJ25ldycgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5nZXRSZW1vdGVDYW5kaWRhdGVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGltZW91dCBmb3IgYWRkUmVtb3RlQ2FuZGlkYXRlLiBDb25zaWRlciBzZW5kaW5nICcgK1xuICAgICAgICAgICAgICAnYW4gZW5kLW9mLWNhbmRpZGF0ZXMgbm90aWZpY2F0aW9uJyk7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDQwMDApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAvKiBub3QgeWV0XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgICovXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCkge1xuICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gRklYTUU6IGNsZWFuIHVwIHRyYWNrcywgbG9jYWwgc3RyZWFtcywgcmVtb3RlIHN0cmVhbXMsIGV0Y1xuICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdjbG9zZWQnKTtcbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIHNpZ25hbGluZyBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVTaWduYWxpbmdTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG4gICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc2lnbmFsaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIHRvIGZpcmUgdGhlIG5lZ290aWF0aW9ubmVlZGVkIGV2ZW50LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLnNpZ25hbGluZ1N0YXRlICE9PSAnc3RhYmxlJyB8fCB0aGlzLm5lZWROZWdvdGlhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5lZWROZWdvdGlhdGlvbiA9IHRydWU7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5uZWVkTmVnb3RpYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGYubmVlZE5lZ290aWF0aW9uID0gZmFsc2U7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHNlbGYub25uZWdvdGlhdGlvbm5lZWRlZCAhPT0gbnVsbCkge1xuICAgICAgICBzZWxmLm9ubmVnb3RpYXRpb25uZWVkZWQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9O1xuXG4gIC8vIFVwZGF0ZSB0aGUgY29ubmVjdGlvbiBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5ld1N0YXRlO1xuICAgIHZhciBzdGF0ZXMgPSB7XG4gICAgICAnbmV3JzogMCxcbiAgICAgIGNsb3NlZDogMCxcbiAgICAgIGNvbm5lY3Rpbmc6IDAsXG4gICAgICBjaGVja2luZzogMCxcbiAgICAgIGNvbm5lY3RlZDogMCxcbiAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgIGRpc2Nvbm5lY3RlZDogMCxcbiAgICAgIGZhaWxlZDogMFxuICAgIH07XG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgc3RhdGVzW3RyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgIHN0YXRlc1t0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0YXRlXSsrO1xuICAgIH0pO1xuICAgIC8vIElDRVRyYW5zcG9ydC5jb21wbGV0ZWQgYW5kIGNvbm5lY3RlZCBhcmUgdGhlIHNhbWUgZm9yIHRoaXMgcHVycG9zZS5cbiAgICBzdGF0ZXMuY29ubmVjdGVkICs9IHN0YXRlcy5jb21wbGV0ZWQ7XG5cbiAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgIGlmIChzdGF0ZXMuZmFpbGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnZmFpbGVkJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb25uZWN0aW5nID4gMCB8fCBzdGF0ZXMuY2hlY2tpbmcgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdjb25uZWN0aW5nJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5kaXNjb25uZWN0ZWQgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzLm5ldyA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ25ldyc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGVkID4gMCB8fCBzdGF0ZXMuY29tcGxldGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnY29ubmVjdGVkJztcbiAgICB9XG5cbiAgICBpZiAobmV3U3RhdGUgIT09IHNlbGYuaWNlQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgICBzZWxmLmljZUNvbm5lY3Rpb25TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdpY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBpZiAodGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9wZW5kaW5nT2ZmZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlT2ZmZXIgY2FsbGVkIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyBvZmZlci4nKTtcbiAgICB9XG4gICAgdmFyIG9mZmVyT3B0aW9ucztcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgfVxuXG4gICAgdmFyIG51bUF1ZGlvVHJhY2tzID0gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XG4gICAgfSkubGVuZ3RoO1xuICAgIHZhciBudW1WaWRlb1RyYWNrcyA9IHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xuICAgIH0pLmxlbmd0aDtcblxuICAgIC8vIERldGVybWluZSBudW1iZXIgb2YgYXVkaW8gYW5kIHZpZGVvIHRyYWNrcyB3ZSBuZWVkIHRvIHNlbmQvcmVjdi5cbiAgICBpZiAob2ZmZXJPcHRpb25zKSB7XG4gICAgICAvLyBSZWplY3QgQ2hyb21lIGxlZ2FjeSBjb25zdHJhaW50cy5cbiAgICAgIGlmIChvZmZlck9wdGlvbnMubWFuZGF0b3J5IHx8IG9mZmVyT3B0aW9ucy5vcHRpb25hbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0xlZ2FjeSBtYW5kYXRvcnkvb3B0aW9uYWwgY29uc3RyYWludHMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBudW1BdWRpb1RyYWNrcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSB0cnVlKSB7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSBmYWxzZSkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1WaWRlb1RyYWNrcyA9IG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgbnVtQXVkaW9UcmFja3MtLTtcbiAgICAgICAgaWYgKG51bUF1ZGlvVHJhY2tzIDwgMCkge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgICBpZiAobnVtVmlkZW9UcmFja3MgPCAwKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIud2FudFJlY2VpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIE0tbGluZXMgZm9yIHJlY3Zvbmx5IHN0cmVhbXMuXG4gICAgd2hpbGUgKG51bUF1ZGlvVHJhY2tzID4gMCB8fCBudW1WaWRlb1RyYWNrcyA+IDApIHtcbiAgICAgIGlmIChudW1BdWRpb1RyYWNrcyA+IDApIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlVHJhbnNjZWl2ZXIoJ2F1ZGlvJyk7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICB9XG4gICAgICBpZiAobnVtVmlkZW9UcmFja3MgPiAwKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKCd2aWRlbycpO1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZW9yZGVyIHRyYWNrc1xuICAgIHZhciB0cmFuc2NlaXZlcnMgPSBzb3J0VHJhY2tzKHRoaXMudHJhbnNjZWl2ZXJzKTtcblxuICAgIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSgpO1xuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAvLyBGb3IgZWFjaCB0cmFjaywgY3JlYXRlIGFuIGljZSBnYXRoZXJlciwgaWNlIHRyYW5zcG9ydCxcbiAgICAgIC8vIGR0bHMgdHJhbnNwb3J0LCBwb3RlbnRpYWxseSBydHBzZW5kZXIgYW5kIHJ0cHJlY2VpdmVyLlxuICAgICAgdmFyIHRyYWNrID0gdHJhbnNjZWl2ZXIudHJhY2s7XG4gICAgICB2YXIga2luZCA9IHRyYW5zY2VpdmVyLmtpbmQ7XG4gICAgICB2YXIgbWlkID0gU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG4gICAgICB0cmFuc2NlaXZlci5taWQgPSBtaWQ7XG5cbiAgICAgIGlmICghdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgPSBzZWxmLnVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID9cbiAgICAgICAgICAgIHRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlciA6XG4gICAgICAgICAgICBzZWxmLl9jcmVhdGVJY2VHYXRoZXJlcihtaWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwU2VuZGVyLmdldENhcGFiaWxpdGllcyhraW5kKTtcbiAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgLy8gaW4gYWRhcHRlci5qc1xuICAgICAgaWYgKGVkZ2VWZXJzaW9uIDwgMTUwMTkpIHtcbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2RlYy5uYW1lICE9PSAncnR4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgLy8gd29yayBhcm91bmQgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTY1NTJcbiAgICAgICAgLy8gYnkgYWRkaW5nIGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTFcbiAgICAgICAgaWYgKGNvZGVjLm5hbWUgPT09ICdIMjY0JyAmJlxuICAgICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9ICcxJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGdlbmVyYXRlIGFuIHNzcmMgbm93LCB0byBiZSB1c2VkIGxhdGVyIGluIHJ0cFNlbmRlci5zZW5kXG4gICAgICB2YXIgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDEpICogMTAwMVxuICAgICAgfV07XG4gICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICBpZiAoZWRnZVZlcnNpb24gPj0gMTUwMTkgJiYga2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4ID0ge1xuICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMSkgKiAxMDAxICsgMVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyID0gbmV3IHdpbmRvdy5SVENSdHBSZWNlaXZlcihcbiAgICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LFxuICAgICAgICAgIGtpbmRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMgPSBsb2NhbENhcGFiaWxpdGllcztcbiAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgIH0pO1xuXG4gICAgLy8gYWx3YXlzIG9mZmVyIEJVTkRMRSBhbmQgZGlzcG9zZSBvbiByZXR1cm4gaWYgbm90IHN1cHBvcnRlZC5cbiAgICBpZiAodGhpcy5fY29uZmlnLmJ1bmRsZVBvbGljeSAhPT0gJ21heC1jb21wYXQnKSB7XG4gICAgICBzZHAgKz0gJ2E9Z3JvdXA6QlVORExFICcgKyB0cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHNkcCArPSAnYT1pY2Utb3B0aW9uczp0cmlja2xlXFxyXFxuJztcblxuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsICdvZmZlcicsIHRyYW5zY2VpdmVyLnN0cmVhbSk7XG4gICAgICBzZHAgKz0gJ2E9cnRjcC1yc2l6ZVxcclxcbic7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wZW5kaW5nT2ZmZXIgPSB0cmFuc2NlaXZlcnM7XG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnb2ZmZXInLFxuICAgICAgc2RwOiBzZHBcbiAgICB9KTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMF0sIDAsIGRlc2MpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlc2MpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUoKTtcbiAgICBpZiAodGhpcy51c2luZ0J1bmRsZSkge1xuICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgdGhpcy50cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5pc0RhdGFjaGFubmVsKSB7XG4gICAgICAgIHNkcCArPSAnbT1hcHBsaWNhdGlvbiAwIERUTFMvU0NUUCA1MDAwXFxyXFxuJyArXG4gICAgICAgICAgICAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbicgK1xuICAgICAgICAgICAgJ2E9bWlkOicgKyB0cmFuc2NlaXZlci5taWQgKyAnXFxyXFxuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGSVhNRTogbG9vayBhdCBkaXJlY3Rpb24uXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuc3RyZWFtKSB7XG4gICAgICAgIHZhciBsb2NhbFRyYWNrO1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgIGxvY2FsVHJhY2sgPSB0cmFuc2NlaXZlci5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgbG9jYWxUcmFjayA9IHRyYW5zY2VpdmVyLnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbFRyYWNrKSB7XG4gICAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAxOSAmJiB0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCA9IHtcbiAgICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgIHZhciBoYXNSdHggPSBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCc7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAoIWhhc1J0eCAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHg7XG4gICAgICB9XG5cbiAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbih0cmFuc2NlaXZlciwgY29tbW9uQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICdhbnN3ZXInLCB0cmFuc2NlaXZlci5zdHJlYW0pO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzICYmXG4gICAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUpIHtcbiAgICAgICAgc2RwICs9ICdhPXJ0Y3AtcnNpemVcXHJcXG4nO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnYW5zd2VyJyxcbiAgICAgIHNkcDogc2RwXG4gICAgfSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXNjKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gICAgaWYgKCFjYW5kaWRhdGUpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy50cmFuc2NlaXZlcnNbal0uaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIGlmICh0aGlzLnVzaW5nQnVuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtTGluZUluZGV4ID0gY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXg7XG4gICAgICBpZiAoY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNjZWl2ZXJzW2ldLm1pZCA9PT0gY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB0cmFuc2NlaXZlciA9IHRoaXMudHJhbnNjZWl2ZXJzW21MaW5lSW5kZXhdO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHZhciBjYW5kID0gT2JqZWN0LmtleXMoY2FuZGlkYXRlLmNhbmRpZGF0ZSkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kaWRhdGUuY2FuZGlkYXRlKSA6IHt9O1xuICAgICAgICAvLyBJZ25vcmUgQ2hyb21lJ3MgaW52YWxpZCBjYW5kaWRhdGVzIHNpbmNlIEVkZ2UgZG9lcyBub3QgbGlrZSB0aGVtLlxuICAgICAgICBpZiAoY2FuZC5wcm90b2NvbCA9PT0gJ3RjcCcgJiYgKGNhbmQucG9ydCA9PT0gMCB8fCBjYW5kLnBvcnQgPT09IDkpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElnbm9yZSBSVENQIGNhbmRpZGF0ZXMsIHdlIGFzc3VtZSBSVENQLU1VWC5cbiAgICAgICAgaWYgKGNhbmQuY29tcG9uZW50ICYmXG4gICAgICAgICAgICAhKGNhbmQuY29tcG9uZW50ID09PSAnMScgfHwgY2FuZC5jb21wb25lbnQgPT09IDEpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5hZGRSZW1vdGVDYW5kaWRhdGUoY2FuZCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSByZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyh0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgIHNlY3Rpb25zW21MaW5lSW5kZXggKyAxXSArPSAoY2FuZC50eXBlID8gY2FuZGlkYXRlLmNhbmRpZGF0ZS50cmltKClcbiAgICAgICAgICAgIDogJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnKSArICdcXHJcXG4nO1xuICAgICAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCA9IHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzFdLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIFsncnRwU2VuZGVyJywgJ3J0cFJlY2VpdmVyJywgJ2ljZUdhdGhlcmVyJywgJ2ljZVRyYW5zcG9ydCcsXG4gICAgICAgICdkdGxzVHJhbnNwb3J0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICBpZiAodHJhbnNjZWl2ZXJbbWV0aG9kXSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmFuc2NlaXZlclttZXRob2RdLmdldFN0YXRzKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICBhcmd1bWVudHNbMV07XG4gICAgdmFyIGZpeFN0YXRzVHlwZSA9IGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluYm91bmRydHA6ICdpbmJvdW5kLXJ0cCcsXG4gICAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgICAgY2FuZGlkYXRlcGFpcjogJ2NhbmRpZGF0ZS1wYWlyJyxcbiAgICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgICAgfVtzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXAoKTtcbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICByZXMuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtpZF0udHlwZSA9IGZpeFN0YXRzVHlwZShyZXN1bHRbaWRdKTtcbiAgICAgICAgICAgIHJlc3VsdHMuc2V0KGlkLCByZXN1bHRbaWRdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAwLCByZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBSVENQZWVyQ29ubmVjdGlvbjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvcnRjcGVlcmNvbm5lY3Rpb25fc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgZmlyZWZveFNoaW0gPSB7XG4gIHNoaW1PblRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmICEoJ29udHJhY2snIGluXG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29udHJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oZikge1xuICAgICAgICAgIGlmICh0aGlzLl9vbnRyYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2sgPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0ge3RyYWNrOiB0cmFja307XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbVNvdXJjZU9iamVjdDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gRmlyZWZveCBoYXMgc3VwcG9ydGVkIG1velNyY09iamVjdCBzaW5jZSBGRjIyLCB1bnByZWZpeGVkIGluIDQyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICAvLyBTaGltIHRoZSBzcmNPYmplY3QgcHJvcGVydHksIG9uY2UsIHdoZW4gSFRNTE1lZGlhRWxlbWVudCBpcyBmb3VuZC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW96U3JjT2JqZWN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICEod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbikpIHtcbiAgICAgIHJldHVybjsgLy8gcHJvYmFibHkgbWVkaWEucGVlcmNvbm5lY3Rpb24uZW5hYmxlZD1mYWxzZSBpbiBhYm91dDpjb25maWdcbiAgICB9XG4gICAgLy8gVGhlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC5cbiAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCAzOCkge1xuICAgICAgICAgIC8vIC51cmxzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gRkYgPCAzOC5cbiAgICAgICAgICAvLyBjcmVhdGUgUlRDSWNlU2VydmVycyB3aXRoIGEgc2luZ2xlIHVybC5cbiAgICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGNDb25maWcuaWNlU2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgICAgaWYgKHNlcnZlci5oYXNPd25Qcm9wZXJ0eSgndXJscycpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZXJ2ZXIudXJscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgdmFyIG5ld1NlcnZlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXIudXJsc1tqXVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIudXJsc1tqXS5pbmRleE9mKCd0dXJuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VydmVyLnVzZXJuYW1lID0gc2VydmVyLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICBuZXdTZXJ2ZXIuY3JlZGVudGlhbCA9IHNlcnZlci5jcmVkZW50aWFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKG5ld1NlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID1cbiAgICAgICAgICB3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgICAgaWYgKHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IHdpbmRvdy5tb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gd2luZG93Lm1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzaGltIGF3YXkgbmVlZCBmb3Igb2Jzb2xldGUgUlRDSWNlQ2FuZGlkYXRlL1JUQ1Nlc3Npb25EZXNjcmlwdGlvbi5cbiAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG5ldyAoKG1ldGhvZCA9PT0gJ2FkZEljZUNhbmRpZGF0ZScpID9cbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlIDpcbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKShhcmd1bWVudHNbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgYWRkSWNlQ2FuZGlkYXRlKG51bGwgb3IgdW5kZWZpbmVkKVxuICAgIHZhciBuYXRpdmVBZGRJY2VDYW5kaWRhdGUgPVxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1sxXSkge1xuICAgICAgICAgIGFyZ3VtZW50c1sxXS5hcHBseShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlQWRkSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8vIHNoaW0gZ2V0U3RhdHMgd2l0aCBtYXBsaWtlIHN1cHBvcnRcbiAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgbWFwLnNldChrZXksIHN0YXRzW2tleV0pO1xuICAgICAgICBtYXBba2V5XSA9IHN0YXRzW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcblxuICAgIHZhciBtb2Rlcm5TdGF0c1R5cGVzID0ge1xuICAgICAgaW5ib3VuZHJ0cDogJ2luYm91bmQtcnRwJyxcbiAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgIGNhbmRpZGF0ZXBhaXI6ICdjYW5kaWRhdGUtcGFpcicsXG4gICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgIH07XG5cbiAgICB2YXIgbmF0aXZlR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbihcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgb25TdWNjLFxuICAgICAgb25FcnJcbiAgICApIHtcbiAgICAgIHJldHVybiBuYXRpdmVHZXRTdGF0cy5hcHBseSh0aGlzLCBbc2VsZWN0b3IgfHwgbnVsbF0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OCkge1xuICAgICAgICAgICAgc3RhdHMgPSBtYWtlTWFwU3RhdHMoc3RhdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUzICYmICFvblN1Y2MpIHtcbiAgICAgICAgICAgIC8vIFNoaW0gb25seSBwcm9taXNlIGdldFN0YXRzIHdpdGggc3BlYy1oeXBoZW5zIGluIHR5cGUgbmFtZXNcbiAgICAgICAgICAgIC8vIExlYXZlIGNhbGxiYWNrIHZlcnNpb24gYWxvbmU7IG1pc2Mgb2xkIHVzZXMgb2YgZm9yRWFjaCBiZWZvcmUgTWFwXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzdGF0cy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgICAgICAgICAgICBzdGF0LnR5cGUgPSBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIEF2b2lkIFR5cGVFcnJvcjogXCJ0eXBlXCIgaXMgcmVhZC1vbmx5LCBpbiBvbGQgdmVyc2lvbnMuIDM0LTQzaXNoXG4gICAgICAgICAgICAgIHN0YXRzLmZvckVhY2goZnVuY3Rpb24oc3RhdCwgaSkge1xuICAgICAgICAgICAgICAgIHN0YXRzLnNldChpLCBPYmplY3QuYXNzaWduKHt9LCBzdGF0LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0YXRzO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihvblN1Y2MsIG9uRXJyKTtcbiAgICB9O1xuICB9XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbU9uVHJhY2s6IGZpcmVmb3hTaGltLnNoaW1PblRyYWNrLFxuICBzaGltU291cmNlT2JqZWN0OiBmaXJlZm94U2hpbS5zaGltU291cmNlT2JqZWN0LFxuICBzaGltUGVlckNvbm5lY3Rpb246IGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbixcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9maXJlZm94X3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcbiAgdmFyIE1lZGlhU3RyZWFtVHJhY2sgPSB3aW5kb3cgJiYgd2luZG93Lk1lZGlhU3RyZWFtVHJhY2s7XG5cbiAgdmFyIHNoaW1FcnJvcl8gPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgSW50ZXJuYWxFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBOb3RTdXBwb3J0ZWRFcnJvcjogJ1R5cGVFcnJvcicsXG4gICAgICAgIFBlcm1pc3Npb25EZW5pZWRFcnJvcjogJ05vdEFsbG93ZWRFcnJvcicsXG4gICAgICAgIFNlY3VyaXR5RXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InXG4gICAgICB9W2UubmFtZV0gfHwgZS5uYW1lLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICAnVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZS4nOiAnVGhlIHJlcXVlc3QgaXMgbm90IGFsbG93ZWQgYnkgdGhlICcgK1xuICAgICAgICAndXNlciBhZ2VudCBvciB0aGUgcGxhdGZvcm0gaW4gdGhlIGN1cnJlbnQgY29udGV4dC4nXG4gICAgICB9W2UubWVzc2FnZV0gfHwgZS5tZXNzYWdlLFxuICAgICAgY29uc3RyYWludDogZS5jb25zdHJhaW50LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgKHRoaXMubWVzc2FnZSAmJiAnOiAnKSArIHRoaXMubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIGdldFVzZXJNZWRpYSBjb25zdHJhaW50cyBzaGltLlxuICB2YXIgZ2V0VXNlck1lZGlhXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICB2YXIgY29uc3RyYWludHNUb0ZGMzdfID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLnJlcXVpcmUpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICB2YXIgcmVxdWlyZSA9IFtdO1xuICAgICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3JlcXVpcmUnIHx8IGtleSA9PT0gJ2FkdmFuY2VkJyB8fCBrZXkgPT09ICdtZWRpYVNvdXJjZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBjW2tleV0gPSAodHlwZW9mIGNba2V5XSA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgIGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgICAgaWYgKHIubWluICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHIubWF4ICE9PSB1bmRlZmluZWQgfHwgci5leGFjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVxdWlyZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5leGFjdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHIuIG1pbiA9IHIubWF4ID0gci5leGFjdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY1trZXldID0gci5leGFjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHIuZXhhY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuaWRlYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGMuYWR2YW5jZWQgPSBjLmFkdmFuY2VkIHx8IFtdO1xuICAgICAgICAgIHZhciBvYyA9IHt9O1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG9jW2tleV0gPSB7bWluOiByLmlkZWFsLCBtYXg6IHIuaWRlYWx9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvY1trZXldID0gci5pZGVhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYy5hZHZhbmNlZC5wdXNoKG9jKTtcbiAgICAgICAgICBkZWxldGUgci5pZGVhbDtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHIpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIGNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcXVpcmUubGVuZ3RoKSB7XG4gICAgICAgIGMucmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9O1xuICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgMzgpIHtcbiAgICAgIGxvZ2dpbmcoJ3NwZWM6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvKSB7XG4gICAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHNUb0ZGMzdfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9GRjM3Xyhjb25zdHJhaW50cy52aWRlbyk7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdmZjM3OiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIG9uU3VjY2VzcywgZnVuY3Rpb24oZSkge1xuICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZ2V0VXNlck1lZGlhIGFzIGEgUHJvbWlzZS5cbiAgdmFyIGdldFVzZXJNZWRpYVByb21pc2VfID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBnZXRVc2VyTWVkaWFfKGNvbnN0cmFpbnRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFNoaW0gZm9yIG1lZGlhRGV2aWNlcyBvbiBvbGRlciB2ZXJzaW9ucy5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtnZXRVc2VyTWVkaWE6IGdldFVzZXJNZWRpYVByb21pc2VfLFxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7IH0sXG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpIHsgfVxuICAgIH07XG4gIH1cbiAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID1cbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIgaW5mb3MgPSBbXG4gICAgICAgICAgICB7a2luZDogJ2F1ZGlvaW5wdXQnLCBkZXZpY2VJZDogJ2RlZmF1bHQnLCBsYWJlbDogJycsIGdyb3VwSWQ6ICcnfSxcbiAgICAgICAgICAgIHtraW5kOiAndmlkZW9pbnB1dCcsIGRldmljZUlkOiAnZGVmYXVsdCcsIGxhYmVsOiAnJywgZ3JvdXBJZDogJyd9XG4gICAgICAgICAgXTtcbiAgICAgICAgICByZXNvbHZlKGluZm9zKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDEpIHtcbiAgICAvLyBXb3JrIGFyb3VuZCBodHRwOi8vYnVnemlsLmxhLzExNjk2NjVcbiAgICB2YXIgb3JnRW51bWVyYXRlRGV2aWNlcyA9XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcy5iaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG9yZ0VudW1lcmF0ZURldmljZXMoKS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5uYW1lID09PSAnTm90Rm91bmRFcnJvcicpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OSkge1xuICAgIHZhciBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAvLyBXb3JrIGFyb3VuZCBodHRwczovL2J1Z3ppbC5sYS84MDIzMjZcbiAgICAgICAgaWYgKGMuYXVkaW8gJiYgIXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCB8fFxuICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgb2JqZWN0IGNhbiBub3QgYmUgZm91bmQgaGVyZS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vdEZvdW5kRXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGlmICghKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPiA1NSAmJlxuICAgICAgJ2F1dG9HYWluQ29udHJvbCcgaW4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpKSkge1xuICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgaWYgKGEgaW4gb2JqICYmICEoYiBpbiBvYmopKSB7XG4gICAgICAgIG9ialtiXSA9IG9ialthXTtcbiAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG5hdGl2ZUdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnYXV0b0dhaW5Db250cm9sJywgJ21vekF1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlR2V0VXNlck1lZGlhKGMpO1xuICAgIH07XG5cbiAgICBpZiAoTWVkaWFTdHJlYW1UcmFjayAmJiBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncykge1xuICAgICAgdmFyIG5hdGl2ZUdldFNldHRpbmdzID0gTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuZ2V0U2V0dGluZ3M7XG4gICAgICBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb2JqID0gbmF0aXZlR2V0U2V0dGluZ3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmVtYXAob2JqLCAnbW96QXV0b0dhaW5Db250cm9sJywgJ2F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChvYmosICdtb3pOb2lzZVN1cHByZXNzaW9uJywgJ25vaXNlU3VwcHJlc3Npb24nKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKE1lZGlhU3RyZWFtVHJhY2sgJiYgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cykge1xuICAgICAgdmFyIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMgPSBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5hcHBseUNvbnN0cmFpbnRzO1xuICAgICAgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgaWYgKHRoaXMua2luZCA9PT0gJ2F1ZGlvJyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjKSk7XG4gICAgICAgICAgcmVtYXAoYywgJ2F1dG9HYWluQ29udHJvbCcsICdtb3pBdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgICByZW1hcChjLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMuYXBwbHkodGhpcywgW2NdKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0NCkge1xuICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYV8oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcik7XG4gICAgfVxuICAgIC8vIFJlcGxhY2UgRmlyZWZveCA0NCsncyBkZXByZWNhdGlvbiB3YXJuaW5nIHdpdGggdW5wcmVmaXhlZCB2ZXJzaW9uLlxuICAgIGNvbnNvbGUud2FybignbmF2aWdhdG9yLmdldFVzZXJNZWRpYSBoYXMgYmVlbiByZXBsYWNlZCBieSAnICtcbiAgICAgICAgICAgICAgICAgJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhJyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2ZpcmVmb3gvZ2V0dXNlcm1lZGlhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7XG52YXIgc2FmYXJpU2hpbSA9IHtcbiAgLy8gVE9ETzogRHJBbGV4LCBzaG91bGQgYmUgaGVyZSwgZG91YmxlIGNoZWNrIGFnYWluc3QgTGF5b3V0VGVzdHNcblxuICAvLyBUT0RPOiBvbmNlIHRoZSBiYWNrLWVuZCBmb3IgdGhlIG1hYyBwb3J0IGlzIGRvbmUsIGFkZC5cbiAgLy8gVE9ETzogY2hlY2sgZm9yIHdlYmtpdEdUSytcbiAgLy8gc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbigpIHsgfSxcblxuICBzaGltTG9jYWxTdHJlYW1zQVBJOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoISgnZ2V0TG9jYWxTdHJlYW1zJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxTdHJlYW1zO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCEoJ2dldFN0cmVhbUJ5SWQnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0cmVhbUJ5SWQgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gc3RyZWFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yZW1vdGVTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gc3RyZWFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgnYWRkU3RyZWFtJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgdmFyIF9hZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgIF9hZGRUcmFjay5jYWxsKHNlbGYsIHRyYWNrLCBzdHJlYW0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaywgc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zID0gW3N0cmVhbV07XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2FkZFRyYWNrLmNhbGwodGhpcywgdHJhY2ssIHN0cmVhbSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgncmVtb3ZlU3RyZWFtJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICAgIHRoaXMuZ2V0U2VuZGVycygpLmZvckVhY2goZnVuY3Rpb24oc2VuZGVyKSB7XG4gICAgICAgICAgaWYgKHRyYWNrcy5pbmRleE9mKHNlbmRlci50cmFjaykgIT09IC0xKSB7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZVRyYWNrKHNlbmRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBzaGltUmVtb3RlU3RyZWFtc0FQSTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEoJ2dldFJlbW90ZVN0cmVhbXMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlbW90ZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW90ZVN0cmVhbXMgPyB0aGlzLl9yZW1vdGVTdHJlYW1zIDogW107XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgnb25hZGRzdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29uYWRkc3RyZWFtJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbmFkZHN0cmVhbTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX29uYWRkc3RyZWFtKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29uYWRkc3RyZWFtKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbmFkZHN0cmVhbXBvbHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29uYWRkc3RyZWFtID0gZik7XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29uYWRkc3RyZWFtcG9seSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSBlLnN0cmVhbXNbMF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlbW90ZVN0cmVhbXMuaW5kZXhPZihzdHJlYW0pID49IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2FkZHN0cmVhbScpO1xuICAgICAgICAgICAgZXZlbnQuc3RyZWFtID0gZS5zdHJlYW1zWzBdO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHNoaW1DYWxsYmFja3NBUEk6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCAhd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwcm90b3R5cGUgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgIHZhciBjcmVhdGVPZmZlciA9IHByb3RvdHlwZS5jcmVhdGVPZmZlcjtcbiAgICB2YXIgY3JlYXRlQW5zd2VyID0gcHJvdG90eXBlLmNyZWF0ZUFuc3dlcjtcbiAgICB2YXIgc2V0TG9jYWxEZXNjcmlwdGlvbiA9IHByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uO1xuICAgIHZhciBzZXRSZW1vdGVEZXNjcmlwdGlvbiA9IHByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbjtcbiAgICB2YXIgYWRkSWNlQ2FuZGlkYXRlID0gcHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IChhcmd1bWVudHMubGVuZ3RoID49IDIpID8gYXJndW1lbnRzWzJdIDogYXJndW1lbnRzWzBdO1xuICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVPZmZlci5hcHBseSh0aGlzLCBbb3B0aW9uc10pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBwcm90b3R5cGUuY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBvcHRpb25zID0gKGFyZ3VtZW50cy5sZW5ndGggPj0gMikgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZUFuc3dlci5hcHBseSh0aGlzLCBbb3B0aW9uc10pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICB2YXIgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oZGVzY3JpcHRpb24sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHNldExvY2FsRGVzY3JpcHRpb24uYXBwbHkodGhpcywgW2Rlc2NyaXB0aW9uXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICBwcm90b3R5cGUuc2V0TG9jYWxEZXNjcmlwdGlvbiA9IHdpdGhDYWxsYmFjaztcblxuICAgIHdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIHByb21pc2UgPSBzZXRSZW1vdGVEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBbZGVzY3JpcHRpb25dKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIHByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbiA9IHdpdGhDYWxsYmFjaztcblxuICAgIHdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uKGNhbmRpZGF0ZSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwcm9taXNlID0gYWRkSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtjYW5kaWRhdGVdKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIHByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSB3aXRoQ2FsbGJhY2s7XG4gIH0sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICAgIGlmICghbmF2aWdhdG9yLmdldFVzZXJNZWRpYSkge1xuICAgICAgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEuYmluZChuYXZpZ2F0b3IpO1xuICAgICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBjYiwgZXJyY2IpIHtcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cylcbiAgICAgICAgICAudGhlbihjYiwgZXJyY2IpO1xuICAgICAgICB9LmJpbmQobmF2aWdhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGltQ2FsbGJhY2tzQVBJOiBzYWZhcmlTaGltLnNoaW1DYWxsYmFja3NBUEksXG4gIHNoaW1Mb2NhbFN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbUxvY2FsU3RyZWFtc0FQSSxcbiAgc2hpbVJlbW90ZVN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbVJlbW90ZVN0cmVhbXNBUEksXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYVxuICAvLyBUT0RPXG4gIC8vIHNoaW1QZWVyQ29ubmVjdGlvbjogc2FmYXJpU2hpbS5zaGltUGVlckNvbm5lY3Rpb25cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3NhZmFyaS9zYWZhcmlfc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
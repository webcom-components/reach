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
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
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

var _defineProperty = __webpack_require__(95);

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

var store      = __webpack_require__(46)('wks')
  , uid        = __webpack_require__(37)
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
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Config=__webpack_require__(87),_Config2=_interopRequireDefault(_Config),_StreamManager=__webpack_require__(90),_StreamManager2=_interopRequireDefault(_StreamManager),_PeerConnectionManager=__webpack_require__(92),_PeerConnectionManager2=_interopRequireDefault(_PeerConnectionManager),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _cache=null;var CacheManager=function(){function CacheManager(){(0,_classCallCheck3.default)(this,CacheManager);if(!_cache){_cache=this;}return _cache;}(0,_createClass3.default)(CacheManager,[{key:'base',set:function set(url){this._base=url instanceof _webcom2.default?url:new _webcom2.default(url);},get:function get(){return this._base;}},{key:'config',set:function set(config){if(!this._config){this._config=new _Config2.default(config);}else{this._config.assign(config);}},get:function get(){if(!this._config){this._config=new _Config2.default();}return this._config;}},{key:'user',set:function set(user){this._user=user;},get:function get(){return this._user;}},{key:'device',set:function set(device){this._device=device;},get:function get(){return this._device;}},{key:'logLevel',set:function set(level){if(/^DEBUG|INFO|WARN|ERROR$/i.test(level)){this._logLevel=level;}else if(level){throw new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)');}},get:function get(){return this._logLevel||'ERROR';}},{key:'streams',get:function get(){if(!this._streams){this._streams=new _StreamManager2.default();}return this._streams;}},{key:'peerConnections',get:function get(){if(!this._peerConnections){this._peerConnections=new _PeerConnectionManager2.default();}return this._peerConnections;}}]);return CacheManager;}();var cache=new CacheManager();exports.default=cache;

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
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});exports.r=exports.e=exports.w=exports.i=exports.d=undefined;var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_typeof2=__webpack_require__(32),_typeof3=_interopRequireDefault(_typeof2),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var levels=['DEBUG','INFO','WARN','ERROR'],isEnabled=function isEnabled(level){return levels.indexOf(level.toUpperCase())>=levels.indexOf(_cache2.default.logLevel.toUpperCase());},gConsole=global.console,logger=function logger(method,level){for(var _len=arguments.length,messages=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){messages[_key-2]=arguments[_key];}isEnabled(level)?gConsole[method.toLowerCase()].bind(gConsole).apply(undefined,messages):function(){};},group=function group(level,message){for(var _len2=arguments.length,items=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){items[_key2-2]=arguments[_key2];}if(items.length>0){logger.bind(undefined,gConsole.group?'group':level,level)(typeof message==='string'?message:'');var values=(typeof message!=='string'?[message]:[]).concat(items);if(items.length===1&&items[0]instanceof Array&&(0,_typeof3.default)(items[0].length)!==undefined){values=items[0];}values.forEach(function(item){return logger.bind(undefined,level,level)(item);});gConsole.groupEnd&&gConsole.groupEnd();}else{logger.bind(undefined,level,level,message);}};var d=exports.d=group.bind(undefined,levels[0]);var i=exports.i=group.bind(undefined,levels[1]);var w=exports.w=group.bind(undefined,levels[2]);var e=exports.e=gConsole.error.bind(gConsole);var r=exports.r=function r(message){return function(reason){d(message,reason);return _promise2.default.reject(reason||message);};};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(164)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.ts=exports.onDisconnect=exports.off=exports.on=exports.list=exports.get=exports.once=exports.remove=exports.update=exports.push=exports.set=exports.eventType=undefined;var _typeof2=__webpack_require__(32),_typeof3=_interopRequireDefault(_typeof2),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var eventType=exports.eventType=function eventType(event){var evt=void 0;if(/_ADDED$/i.test(event)||/_PUBLISHED$/.test(event)){evt='added';}else if(/_CHANGED$/.test(event)||/_REFRESHED$/.test(event)){evt='changed';}else if(/_REMOVED$/.test(event)||/_UNPUBLISHED$/.test(event)){evt='removed';}return evt?'child_'+evt:event;};var _write=function _write(method,path,data){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path)[method](data,function(error){return error?reject(error):resolve();});});};var set=exports.set=_write.bind(undefined,'set');var push=exports.push=function push(path,data){return new _promise2.default(function(resolve,reject){var pushRef=_cache2.default.base.child(path).push(data,function(error){return error?reject(error):resolve(pushRef);});});};var update=exports.update=_write.bind(undefined,'update');var remove=exports.remove=function remove(path){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).remove(function(error){return error?reject(error):resolve();});});};var once=exports.once=function once(path,event){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).once(eventType(event),resolve,reject);});};var get=exports.get=function get(path){return once(path,'value');};var list=exports.list=function list(path,Type){for(var _len=arguments.length,params=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){params[_key-2]=arguments[_key];}return get(path).then(function(snapData){if(snapData){var _ret=function(){var values=[];snapData.forEach(function(snapChild){values.push(new(Function.prototype.bind.apply(Type,[null].concat([snapChild],params)))());});return{v:values};}();if((typeof _ret==='undefined'?'undefined':(0,_typeof3.default)(_ret))==="object")return _ret.v;}});};var on=exports.on=function on(path,event,queryCallback,cancelCallback){_cache2.default.base.child(path).on(eventType(event),queryCallback,cancelCallback);};var off=exports.off=function off(path,event,callback){_cache2.default.base.child(path).off(eventType(event),callback);};var onDisconnect=exports.onDisconnect=function onDisconnect(path){return _cache2.default.base.child(path).onDisconnect();};var ts=exports.ts=function ts(){return Date.now();};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(15)
  , IE8_DOM_DEFINE = __webpack_require__(64)
  , toPrimitive    = __webpack_require__(49)
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
module.exports = !__webpack_require__(20)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(65)
  , defined = __webpack_require__(41);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 13 */
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
  detectBrowser: function() {
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
          /Firefox\/([0-9]+)\./, 1);

    // all webkit-based browsers
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
      if (window.webkitRTCPeerConnection) {
        result.browser = 'chrome';
        result.version = this.extractVersion(navigator.userAgent,
          /Chrom(e|ium)\/([0-9]+)\./, 2);

      // Safari or unknown webkit-based
      // for the time being Safari has support for MediaStreams but not webRTC
      } else {
        // Safari UA substrings of interest for reference:
        // - webkit version:           AppleWebKit/602.1.25 (also used in Op,Cr)
        // - safari UI version:        Version/9.0.3 (unique to Safari)
        // - safari UI webkit version: Safari/601.4.4 (also used in Op,Cr)
        //
        // if the webkit version and safari UI webkit versions are equals,
        // ... this is a stable version.
        //
        // only the internal webkit version is important today to know if
        // media streams are supported
        //
        if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
          result.browser = 'safari';
          result.version = this.extractVersion(navigator.userAgent,
            /AppleWebKit\/([0-9]+)\./, 1);

        // unknown webkit-based browser
        } else {
          result.browser = 'Unsupported webkit-based browser ' +
              'with GUM support but no WebRTC support.';
          return result;
        }
      }

    // Edge.
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
      result.browser = 'edge';
      result.version = this.extractVersion(navigator.userAgent,
          /Edge\/(\d+).(\d+)$/, 2);

    // Default fallthrough: not supported.
    } else {
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  },

  // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

  shimCreateObjectURL: function() {
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
  }
};

// Export.
module.exports = {
  log: utils.log,
  disableLog: utils.disableLog,
  browserDetails: utils.detectBrowser(),
  extractVersion: utils.extractVersion,
  shimCreateObjectURL: utils.shimCreateObjectURL
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(23)
  , hide      = __webpack_require__(18)
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
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var OPENED=exports.OPENED='OPENED';var CLOSED=exports.CLOSED='CLOSED';var CLOSING=exports.CLOSING='CLOSING';var CONNECTED=exports.CONNECTED='CONNECTED';var NOT_CONNECTED=exports.NOT_CONNECTED='NOT_CONNECTED';var WAS_CONNECTED=exports.WAS_CONNECTED='WAS_CONNECTED';var OWNER=exports.OWNER='OWNER';var MODERATOR=exports.MODERATOR='MODERATOR';var PARTICIPANT=exports.PARTICIPANT='PARTICIPANT';var NONE=exports.NONE='NONE';var ONGOING=exports.ONGOING='ONGOING';var ACCEPTED=exports.ACCEPTED='ACCEPTED';var REJECTED=exports.REJECTED='REJECTED';var CANCELED=exports.CANCELED='CANCELED';

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(73)
  , enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
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
var aFunction = __webpack_require__(40);
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
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_constants=__webpack_require__(19),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Participant=__webpack_require__(59),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(58),_Message2=_interopRequireDefault(_Message),_Local=__webpack_require__(89),_Local2=_interopRequireDefault(_Local),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _joinRoom=function _joinRoom(room,role){var participant={status:_constants.CONNECTED,_joined:DataSync.ts()};if(role){participant.role=role;}Log.w('Room#join',[participant,'_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid]);return DataSync.update('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid,participant).then(function(){DataSync.onDisconnect('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid+'/status').set(_constants.WAS_CONNECTED);return room;});};var Room=function(){function Room(snapData){(0,_classCallCheck3.default)(this,Room);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name()});}this.uid=values.uid;this.name=values.name;this.owner=values.owner;this.status=values.status;this._public=!!values._public;this.extra=values.extra;this._callbacks={};}(0,_createClass3.default)(Room,[{key:'participants',value:function participants(){return DataSync.list('_/rooms/'+this.uid+'/participants',_Participant2.default,this.uid);}},{key:'messages',value:function messages(){return DataSync.list('_/rooms/'+this.uid+'/messages',_Message2.default,this.uid);}},{key:'_streams',value:function _streams(localStreams){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can list a Room\'s streams.'));}return DataSync.get('_/rooms/'+this.uid+'/streams').then(function(snapData){var values=snapData.val();Log.d('Rooms~_streams',values);if(values){return(0,_keys2.default)(values).map(function(key){return(0,_assign2.default)({uid:key,roomId:_this.uid},values[key]);});}return[];}).then(function(streams){return streams.filter(function(stream){return localStreams===(stream.device===_cache2.default.device&&stream.from===_cache2.default.user.uid);});}).then(function(streams){return streams.map(_cache2.default.streams['get'+(localStreams?'Shared':'Remote')].bind(_cache2.default.streams));}).then(function(streams){return streams.filter(function(stream){return stream!==null;});});}},{key:'localStreams',value:function localStreams(){return this._streams(true).catch(Log.r('Room~localStreams'));}},{key:'remoteStreams',value:function remoteStreams(){return this._streams(false).catch(Log.r('Room~remoteStreams'));}},{key:'invite',value:function invite(users){var _this2=this,role=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_constants.NONE,message=arguments[2],_path=function _path(user){return'_/rooms/'+_this2.uid+'/participants/'+user.uid;},_data={status:_constants.NOT_CONNECTED,role:role||_constants.NONE};return _promise2.default.all(users.map(function(user){return DataSync.set(_path(user),_data);})).then(function(){return _promise2.default.all(users.map(function(user){return _Invite2.default.send(user,_this2,message);}));}).then(function(invites){var removeParticipant=function removeParticipant(invite){return DataSync.remove('_/rooms/'+invite.room+'/participants/'+invite.to);};invites.forEach(function(invite){invite.on(_constants.REJECTED,removeParticipant);invite.on(_constants.CANCELED,removeParticipant);});return{room:_this2,invites:invites};}).catch(function(e){Log.e('Room~invite',e);users.forEach(function(user){return DataSync.remove('_/rooms/'+_this2.uid+'/participants/'+user.uid);});return _promise2.default.reject(e);});}},{key:'on',value:function on(event,callback,cancelCallback){var _this3=this,path=Events.room.toPath(event)(this),obj=Events.room.toClass(event);if(path&&obj){var typedCallback=function typedCallback(snapData){if(!/^STREAM_/i.test(event)||!snapData){Log.i('Room~on('+event+')',snapData?new obj(snapData):null);callback(snapData?new obj(snapData):null);}else if(_cache2.default.user){var streamData=(0,_assign2.default)({uid:snapData.name(),roomId:_this3.uid},snapData.val());if(streamData.from!==_cache2.default.user.uid||streamData.device!==_cache2.default.device){var remoteStream=_cache2.default.streams.getRemote(streamData);Log.i('Room~on('+event+')',remoteStream);callback(remoteStream);}}};DataSync.on(path,event,typedCallback,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(typedCallback);}}},{key:'sendMessage',value:function sendMessage(message){return _Message2.default.send(this,message);}},{key:'share',value:function share(type,localStreamContainer,constraints){Log.i('Room~share',{type:type,localStreamContainer:localStreamContainer,constraints:constraints});return _Local2.default.share(this.uid,type,localStreamContainer,constraints);}},{key:'join',value:function join(){Log.i('Room~join',this);if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can join a Room.'));}return _joinRoom(this).catch(Log.r('Room~join'));}},{key:'leave',value:function leave(){var _this4=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can leave a Room.'));}Log.i('Room~leave',this);DataSync.onDisconnect('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status').cancel();(0,_keys2.default)(this._callbacks).forEach(function(event){DataSync.off(Events.room.toPath(event)(_this4),event);});this.localStreams().then(function(localStreams){return localStreams.forEach(function(localStream){return localStream.close();});});this.remoteStreams().then(function(remoteStreams){return remoteStreams.forEach(function(remoteStream){return remoteStream.unSubscribe();});});return DataSync.set('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status',_constants.WAS_CONNECTED).catch(Log.r('Room~leave'));}},{key:'close',value:function close(){var _this5=this;Log.i('Room~close',this);return this.leave().then(function(){return DataSync.update('rooms/'+_this5.uid,{status:_constants.CLOSED,_closed:DataSync.ts()});}).then(function(){return DataSync.remove('_/rooms/'+_this5.uid);}).catch(Log.r('Room~close'));}}],[{key:'create',value:function create(name){var extra=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null,publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can create a Room.'));}var roomMetaData={owner:_cache2.default.user.uid,_public:publicRoom,name:name||_cache2.default.user.name+'-'+Date.now()},roomFullMetaData=(0,_assign2.default)({status:_constants.OPENED,_created:DataSync.ts(),extra:extra},roomMetaData),room=null;return DataSync.push('rooms',roomFullMetaData).then(function(roomRef){room=new Room((0,_assign2.default)({uid:roomRef.name()},roomFullMetaData));return DataSync.update('_/rooms/'+room.uid+'/meta',roomMetaData);}).then(function(){return _joinRoom(room,_constants.OWNER);}).catch(Log.r('Room#create'));}},{key:'get',value:function get(uid){return DataSync.get('rooms/'+uid).then(function(snapData){if(snapData.val()){return new Room(snapData);}});}}]);return Room;}();exports.default=Room;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var presets={UHD:{w:3840,h:2160,min:'HD'},FHD:{w:1920,h:1080,min:'HD',max:'UHD'},HD:{w:1280,h:720,min:'SD',max:'FHD'},SVGA:{w:800,h:600,min:'VGA',max:'HD'},SD:{w:720,h:576,min:'VGA',max:'HD'},VGA:{w:640,h:480,max:'SVGA'}},_assignDevice=function _assignDevice(constraint,deviceId){if(constraint&&deviceId){return(0,_assign2.default)(/^((user)|(environment))$/i.test(deviceId)?{facingMode:deviceId}:{deviceId:deviceId},constraint===true?{}:constraint);}return constraint;};var Media=function(){function Media(){(0,_classCallCheck3.default)(this,Media);}(0,_createClass3.default)(Media,null,[{key:'constraints',value:function constraints(){var videoConstraints=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'HD',audioConstraints=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true,type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'ideal',videoDeviceId=arguments[3],audioDeviceId=arguments[4],video=videoConstraints;if(typeof videoConstraints==='string'){if(presets[videoConstraints.toUpperCase()]){(function(){var preset=presets[videoConstraints.toUpperCase()],dimConstraint=function dimConstraint(dim){if(/^(min|max|exact)$/.test(type)){var r={};r[type]=preset[dim];return r;}return{min:preset.min?presets[preset.min][dim]:preset[dim],ideal:preset[dim],max:preset.max?presets[preset.max][dim]:preset[dim]};};video={width:dimConstraint('w'),height:dimConstraint('h')};})();}else{throw new Error('Unknown Video Resolution preset (UHD, FHD, HD, SVGA, SD, VGA)');}}video=_assignDevice(video,videoDeviceId);var audio=_assignDevice(audioConstraints,audioDeviceId);Log.d('Media#constraints',{video:video,audio:audio});return{video:video,audio:audio};}},{key:'attachStream',value:function attachStream(mediaStream,container,previous){var volume=arguments.length>3&&arguments[3]!==undefined?arguments[3]:.7,tagName='';if(mediaStream.getVideoTracks().length>0){tagName='video';}else if(mediaStream.getAudioTracks().length>0){tagName='audio';}Log.d('Media#attachStream',mediaStream,tagName);if(tagName.length>0){var _node=previous;if(!_node||_node.tagName.toLowerCase()!==tagName){_node=document.createElement(tagName);_node.autoplay=true;}if(container){if(previous&&previous!==_node){container.replaceChild(_node,previous);}else if(!previous){container.appendChild(_node);}}_node.srcObject=mediaStream;_node.disabled=false;_node.volume=volume;return _node;}return previous;}},{key:'devices',value:function devices(){return navigator.mediaDevices.enumerateDevices().then(function(devices){var r={};devices.forEach(function(device){if(!r[device.kind]){r[device.kind]=[];}r[device.kind].push(device);});Log.d('Media#devices',r);return r;}).catch(Log.r('Media#devices'));}},{key:'facingMode',get:function get(){return{USER:'user',ENVIRONMENT:'environment'};}}]);return Media;}();exports.default=Media;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.invite=exports.stream=exports.room=exports.reach=undefined;var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_stringify=__webpack_require__(94),_stringify2=_interopRequireDefault(_stringify),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_Participant=__webpack_require__(59),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(58),_Message2=_interopRequireDefault(_Message),_Remote=__webpack_require__(60),_Remote2=_interopRequireDefault(_Remote),_constants=__webpack_require__(19);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var paths={USER:function USER(){return'users';},ROOM:function ROOM(){return'rooms';},INVITE:function INVITE(user){if(!user){throw new Error('You must be authenticated to list the invites');}return'_/invites/'+user.uid;},PARTICIPANT:function PARTICIPANT(room){return'_/rooms/'+room.uid+'/participants';},MESSAGE:function MESSAGE(room){return'_/rooms/'+room.uid+'/messages';},STREAM:function STREAM(room){return'_/rooms/'+room.uid+'/streams';}},classes={USER:_User2.default,ROOM:_Room2.default,INVITE:_Invite2.default,PARTICIPANT:_Participant2.default,MESSAGE:_Message2.default,STREAM:_Remote2.default};var _Events=function(){function _Events(keys){var _this=this;(0,_classCallCheck3.default)(this,_Events);keys.forEach(function(key){_this[key]=key;});}(0,_createClass3.default)(_Events,[{key:'supports',value:function supports(event){if(!event||typeof event!=='string'||this[event]!==event.toUpperCase()){throw new Error('Unsupported event. Use one of the following: '+(0,_stringify2.default)((0,_keys2.default)(this)));}return true;}},{key:'toPath',value:function toPath(event){if(this.supports(event)){return paths[event.toUpperCase().replace(/_.*$/,'')]||function(){return null;};}}},{key:'toClass',value:function toClass(event){if(this.supports(event)){return classes[event.toUpperCase().replace(/_.*$/,'')];}}}]);return _Events;}();var reach=exports.reach=new _Events(['USER_ADDED','USER_CHANGED','USER_REMOVED','ROOM_ADDED','ROOM_CHANGED','ROOM_REMOVED','INVITE_ADDED','INVITE_CHANGED']);var room=exports.room=new _Events(['MESSAGE_ADDED','MESSAGE_CHANGED','MESSAGE_REMOVED','PARTICIPANT_ADDED','PARTICIPANT_CHANGED','PARTICIPANT_REMOVED','STREAM_PUBLISHED','STREAM_UNPUBLISHED']);var stream=exports.stream=new _Events(['MUTE']);var invite=exports.invite=new _Events([_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED]);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(98);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(97);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f
  , has = __webpack_require__(17)
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(41);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_constants=__webpack_require__(19),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var update=function update(invite,status){var reason=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,_ended=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,values={status:status,reason:reason,_ended:_ended};if(invite.status!==_constants.ONGOING){return _promise2.default.reject(new Error('This invitation has already been answered'));}return DataSync.update('_/invites/'+invite.to+'/'+invite.uid,values).then(function(){(0,_keys2.default)(values).forEach(function(prop){invite[prop]=values[prop];});return _Room2.default.get(invite.room);}).then(function(room){return{room:room,invite:invite};}).catch(Log.r('Invite_update'));};var Invite=function(){function Invite(snapData){(0,_classCallCheck3.default)(this,Invite);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name(),to:snapData.ref().parent().name()});}this.uid=values.uid;this.from=values.from;this.to=values.to;this.room=values.room;this.status=values.status;this.topic=values.topic;this._created=values._created;this._ended=values._ended;this._callbacks={};}(0,_createClass3.default)(Invite,[{key:'cancel',value:function cancel(reason){return update(this,_constants.CANCELED,reason,DataSync.ts());}},{key:'reject',value:function reject(reason){return update(this,_constants.REJECTED,reason,DataSync.ts());}},{key:'accept',value:function accept(){return update(this,_constants.ACCEPTED);}},{key:'on',value:function on(status,callback){var _this=this;if(Events.invite.supports(status)){if(!this._callbacks[status]){this._callbacks[status]=[];}this._callbacks[status].push(callback);if(!this._listener){this._listener=function(snapData){var updated=snapData.val();if(updated!==null&&updated!==_this.status){_this.status=updated;(_this._callbacks[updated]||[]).forEach(function(cb){cb(_this);});}};DataSync.on('_/invites/'+this.to+'/'+this.uid+'/status','value',this._listener.bind(this));}}}},{key:'onStatusChange',value:function onStatusChange(callback){var _this2=this;[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this2.on(event,callback);});}},{key:'off',value:function off(status,callback){var _this3=this;if(!status){this._callbacks={};}else if(this._callbacks[status]){if(callback){var idx=this._callbacks[status].findIndex(function(cb){return cb===callback;});if(idx>=0){this._callbacks.splice(idx,1);}}else{this._callbacks[status]=[];}}if(![_constants.CANCELED,_constants.ACCEPTED,_constants.REJECTED].some(function(event){return _this3._callbacks[event]&&_this3._callbacks[event].length>0;})){DataSync.off('_/invites/'+this.to+'/'+this.uid+'/status','value');}}},{key:'offStatusChange',value:function offStatusChange(callback){var _this4=this;if(!callback){this.off();}else{[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this4.off(event,callback);});}}},{key:'isOnGoing',get:function get(){return this.status===_constants.ONGOING;}},{key:'isRejected',get:function get(){return this.status===_constants.REJECTED;}},{key:'isAccepted',get:function get(){return this.status===_constants.ACCEPTED;}},{key:'isCanceled',get:function get(){return this.status===_constants.CANCELED;}}],[{key:'send',value:function send(invitee,room){var message=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can send an invite.'));}var inviteMetaData={from:_cache2.default.user.uid,room:room.uid,status:_constants.ONGOING,_created:DataSync.ts(),topic:message};return DataSync.push('_/invites/'+invitee.uid,inviteMetaData).then(function(inviteRef){var inviteId=inviteRef.name();return new Invite((0,_assign2.default)({uid:inviteId,to:invitee.uid},inviteMetaData));}).catch(Log.r('Invite#send'));}}]);return Invite;}();exports.default=Invite;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24)
  , document = __webpack_require__(5).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(46)('keys')
  , uid    = __webpack_require__(37);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(47)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(5)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(33)
  , wksExt         = __webpack_require__(51)
  , defineProperty = __webpack_require__(10).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(129)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(68)(String, 'String', function(iterated){
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
/* 53 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(82)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(154)
  , createDesc = __webpack_require__(155);
module.exports = __webpack_require__(54) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof2=__webpack_require__(32),_typeof3=_interopRequireDefault(_typeof2),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Device=__webpack_require__(88),_Device2=_interopRequireDefault(_Device),_constants=__webpack_require__(19),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initializing=false;var User=function(){function User(snapData){(0,_classCallCheck3.default)(this,User);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.name=values.name;this.status=values.status;this.lastSeen=values.lastSeen;this.anonymous=/^anonymous/.test(this.uid);}(0,_createClass3.default)(User,[{key:'invite',value:function invite(message){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can invite another User.'));}return _Room2.default.create(_cache2.default.user.uid+'-'+this.uid).then(function(room){return room.invite([_this],null,message);}).then(function(data){return{room:data.room,invite:data.invites[0]};}).catch(Log.r('User~invite'));}},{key:'devices',value:function devices(){return DataSync.list('_/devices/'+this.uid,_Device2.default);}}],[{key:'init',value:function init(uid,name){if(!initializing){var _ret=function(){initializing=true;var d={status:_constants.CONNECTED,lastSeen:DataSync.ts()};if(name){(0,_assign2.default)(d,{name:name});}var deviceId=_webcom2.default.INTERNAL.PersistentStorage.get(uid);return{v:DataSync.update('users/'+uid,d).then(function(){var deviceMetadata={status:_constants.CONNECTED,sdk:{reach:'2.4.0',webcom:_webcom2.default.SDK_VERSION},userAgent:navigator.userAgent};if(deviceId){return DataSync.update('_/devices/'+uid+'/'+deviceId,deviceMetadata);}return DataSync.push('_/devices/'+uid,deviceMetadata);}).then(function(deviceRef){if(!deviceId){deviceId=deviceRef.name();_webcom2.default.INTERNAL.PersistentStorage.set(uid,deviceId);}_cache2.default.device=deviceId;}).then(function(){DataSync.onDisconnect('_/devices/'+uid+'/'+deviceId+'/status').set(_constants.NOT_CONNECTED);DataSync.onDisconnect('users/'+uid).update({status:_constants.NOT_CONNECTED,lastSeen:DataSync.ts()});}).then(function(){return User.get(uid);}).then(function(user){initializing=false;return user;}).catch(function(e){Log.e(e);initializing=false;return _promise2.default.reject(e);})};}();if((typeof _ret==='undefined'?'undefined':(0,_typeof3.default)(_ret))==="object")return _ret.v;}return User.get(uid);}},{key:'disconnect',value:function disconnect(user){DataSync.onDisconnect('_/devices/'+user.uid+'/'+_cache2.default.device+'/status').cancel();DataSync.onDisconnect('users/'+user.uid).cancel();if(user.anonymous){return DataSync.remove('_/devices/'+user.uid).then(function(){return DataSync.get('_/invites/'+user.uid);}).then(function(invites){var inviteIds=[];invites.forEach(function(invite){inviteIds.push(invite.name());});return _promise2.default.all(inviteIds.map(function(inviteId){return DataSync.remove('_/invites/'+user.uid+'/'+inviteId);}));}).then(function(){return DataSync.remove('users/'+user.uid);}).then(function(){_webcom2.default.INTERNAL.PersistentStorage.remove(user.uid);}).catch(Log.r('User#anonymous_disconnect'));}return DataSync.set('_/devices/'+user.uid+'/'+_cache2.default.device+'/status',_constants.NOT_CONNECTED).then(function(){return DataSync.get('_/devices/'+user.uid);}).then(function(devices){var hasConnectedDevices=devices.forEach(function(device){return new RegExp('^'+_constants.CONNECTED+'$').test(device.val().status);});if(!hasConnectedDevices){return DataSync.update('users/'+user.uid,{status:_constants.NOT_CONNECTED});}return true;}).catch(Log.r('User#disconnect'));}},{key:'get',value:function get(uid){return DataSync.get('users/'+uid).then(function(snapData){return snapData?new User(snapData):null;}).catch(Log.r('User#get'));}}]);return User;}();exports.default=User;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var AUDIO=exports.AUDIO='audio';var VIDEO=exports.VIDEO='video';var AUDIO_VIDEO=exports.AUDIO_VIDEO='audio-video';var SCREEN_SHARING=exports.SCREEN_SHARING='screen-sharing';exports.default={AUDIO:AUDIO,VIDEO:VIDEO,AUDIO_VIDEO:AUDIO_VIDEO,SCREEN_SHARING:SCREEN_SHARING};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Message=function(){function Message(snapData,roomId){(0,_classCallCheck3.default)(this,Message);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.roomId=roomId;this.text=values.text;this.from=values.from;this._created=values._created;}(0,_createClass3.default)(Message,[{key:'edit',value:function edit(newText){var _this=this;return DataSync.update('/rooms/'+this.roomId+'/messages/'+this.uid,{text:newText}).then(function(){_this.text=newText;return _this;}).catch(Log.r('Message~edit'));}},{key:'remove',value:function remove(){return DataSync.remove('/rooms/'+this.roomId+'/messages/'+this.uid).catch(Log.r('Message~remove'));}}],[{key:'send',value:function send(room,text){if(!_cache2.default.user){return _promise2.default.reject(new Error('Cannot send a message to the Room without a User being logged in.'));}var data={from:_cache2.default.user.uid,_created:DataSync.ts(),text:text};return DataSync.push('_/rooms/'+room.uid+'/messages',data).then(function(pushRef){return DataSync.get('_/rooms/'+room.uid+'/messages/'+pushRef.name());}).then(function(snapData){return new Message(snapData,room.uid);}).catch(Log.r('Message#send'));}}]);return Message;}();exports.default=Message;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Participant=function Participant(snapData){(0,_classCallCheck3.default)(this,Participant);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.role=values.role;this.status=values.status;this._joined=values._joined;};exports.default=Participant;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Remote=function(){function Remote(values){(0,_classCallCheck3.default)(this,Remote);Log.d('Remote~new',values);this.roomId=values.roomId;this.uid=values.uid;this.from=values.from;this.type=values.type;this.device=values.device;this.container=_cache2.default.config.remoteStreamContainer;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this._callbacks={};this.peerConnection=null;}(0,_createClass3.default)(Remote,[{key:'subscribe',value:function subscribe(remoteStreamContainer){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can subscribe to a Room\'s stream.'));}this.container=remoteStreamContainer||_cache2.default.config.remoteStreamContainer;Log.d('Remote~subscribe',this.container);return _cache2.default.peerConnections.answer(this,this.container).then(function(pc){_this.peerConnection=pc;}).then(function(){return DataSync.update('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device,{to:_cache2.default.user.uid,_created:DataSync.ts()});}).then(function(){DataSync.onDisconnect('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device).remove();var subscribed=false;DataSync.on('_/rooms/'+_this.roomId+'/streams/'+_this.uid,'value',function(snapData){var values=snapData.val();Log.d('Remote~updated',values);if(values){_this.type=values.type;var muted=values.muted;if(muted&&(muted.audio!==_this.muted.audio||muted.video!==_this.muted.video)){_this.muted=muted;Log.w(_this._callbacks[Events.stream.MUTE]);(_this._callbacks[Events.stream.MUTE]||[]).forEach(function(cb){return cb(_this.muted);});}subscribed=true;}else if(subscribed){Log.i('Remote#removed',_this);_this._close(true);}});}).catch(Log.r('Remote~subscribe'));}},{key:'unSubscribe',value:function unSubscribe(){return this._close(false);}},{key:'_close',value:function _close(remote){DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device).cancel();DataSync.off('_/rooms/'+this.roomId+'/streams/'+this.uid,'value');!remote&&DataSync.remove('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device);return _promise2.default.resolve(_cache2.default.peerConnections.close(this.uid,this.device));}},{key:'on',value:function on(event,callback){if(Events.stream.supports(event)){if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(callback);}}},{key:'off',value:function off(event,callback){if(!event){this._callbacks={};}else if(Events.stream.supports(event)){if(!callback){this._callbacks[event]=[];}else{this._callbacks[event]=this._callbacks[event].filter(function(cb){return cb!==callback;});}}}},{key:'update',value:function update(values){var _this2=this;(0,_keys2.default)(values).forEach(function(key){_this2[key]=values[key];});}},{key:'node',get:function get(){return this.peerConnection?this.peerConnection.node:null;}}]);return Remote;}();exports.default=Remote;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(93);

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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5).document && document.documentElement;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(20)(function(){
  return Object.defineProperty(__webpack_require__(42)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(25)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(15);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(33)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(75)
  , hide           = __webpack_require__(18)
  , has            = __webpack_require__(17)
  , Iterators      = __webpack_require__(25)
  , $iterCreate    = __webpack_require__(117)
  , setToStringTag = __webpack_require__(35)
  , getPrototypeOf = __webpack_require__(125)
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
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(15)
  , dPs         = __webpack_require__(123)
  , enumBugKeys = __webpack_require__(43)
  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(42)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(34)
  , createDesc     = __webpack_require__(26)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(49)
  , has            = __webpack_require__(17)
  , IE8_DOM_DEFINE = __webpack_require__(64)
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(73)
  , hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(17)
  , toIObject    = __webpack_require__(12)
  , arrayIndexOf = __webpack_require__(111)(false)
  , IE_PROTO     = __webpack_require__(45)('IE_PROTO');

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(16)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(20);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(23)
  , invoke             = __webpack_require__(115)
  , html               = __webpack_require__(63)
  , cel                = __webpack_require__(42)
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(62)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(25);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var global        = __webpack_require__(5)
  , hide          = __webpack_require__(18)
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
/* 80 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(141);
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
/* 82 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(157)('wks')
  , uid        = __webpack_require__(83)
  , Symbol     = __webpack_require__(27).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.browser=undefined;var _toConsumableArray2=__webpack_require__(61),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_console,_webrtcAdapter=__webpack_require__(165),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var browser=exports.browser=(0,_assign2.default)({compatible:!/\s/.test(_webrtcAdapter.browserDetails.browser)&&(!_webrtcAdapter.browserDetails.minVersion||_webrtcAdapter.browserDetails.version>=_webrtcAdapter.browserDetails.minVersion)},_webrtcAdapter.browserDetails);var version='Reach v'+'2.4.0'+' | Schema '+'draft-00'+' | Webcom v'+_webcom2.default.SDK_VERSION,message='';if(browser.version===null){message='Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';}else if(browser.minVersion&&browser.minVersion>browser.version){message='Unsupported browser: browser is outdated, update to latest version ('+browser.minVersion+'+)';}else if(!_webrtcAdapter.browserShim){message='No shim for your browser. There might a problem with your package.';}var args=[version+' '+message];if(/^(chrome|firefox)$/.test(browser.browser)){args=['%c '+version+' %c '+message,'background: '+(browser.compatible?'#f50':'red')+'; color: #fff; font-weight: bold','color: '+(browser.compatible?'inherit':'red')];}(_console=console).log.apply(_console,(0,_toConsumableArray3.default)(args));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var video=exports.video={VP8:/^vp8/i,VP9:/^vp9/i,VP10:/^vp10/i,H264:/^h264/i,H265:/^h265/i};var audio=exports.audio={OPUS:/^opus/i,G722:/^g722/i,G711:/^g711/i,ISAC:/^isac/i,ISAC_16:/^isac\/16000/i,ISAC_32:/^isac\/32000/i,LSAC:/^lsac/i};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_toConsumableArray2=__webpack_require__(61),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _flattenServers=function _flattenServers(servers){var _ref,_expand=servers.map(function(server){var username=server.username,credential=server.credential,urls=server.urls,url=server.url,uris=urls||url;if(typeof uris!=='string'){return uris.map(function(uri){return{username:username,credential:credential,urls:uri};});}return[server];});return(_ref=[]).concat.apply(_ref,(0,_toConsumableArray3.default)(_expand));};var Config=function(){function Config(obj){var _this=this;(0,_classCallCheck3.default)(this,Config);this.constraints=null;this.localStreamContainer=null;this.remoteStreamContainer=null;this.preferredVideoCodec=null;this.preferredAudioCodec=null;this.reset();this.assign(obj);DataSync.get('_/ice').then(function(snapData){if(snapData){_this.iceServers=snapData.val();Log.i('ICEServers',_this.iceServers.length>0?_this.iceServers:'None');}},function(e){return Log.d('ICEServers',e);});}(0,_createClass3.default)(Config,[{key:'assign',value:function assign(obj){var _this2=this;(0,_keys2.default)(obj||{}).forEach(function(key){_this2[key]=obj[key];});}},{key:'reset',value:function reset(){this.assign({constraints:_Media2.default.constraints(),logLevel:'ERROR'});}},{key:'logLevel',set:function set(level){_cache2.default.logLevel=level;},get:function get(){return _cache2.default.logLevel;}},{key:'iceServers',set:function set(servers){var _this3=this;Log.d('Config~set~iceServers',servers);if(servers){if(!this._iceServers){this._iceServers=[].concat(servers||[]);}else{(function(){var _currentServers=_flattenServers(_this3._iceServers),_newServers=_flattenServers(servers);_newServers.forEach(function(newServer){if(!_currentServers.some(function(server){return server.urls===newServer.urls&&server.username===newServer.username&&server.credential===newServer.credential;})){_currentServers.push(newServer);}});_this3._iceServers=_currentServers.reduce(function(previous,current){var username=current.username,credential=current.credential,urls=current.urls,idx=previous.findIndex(function(s){return s.username===username&&s.credential===credential;});if(idx>=0){previous[idx].urls.push(urls);}else{previous.push({username:username,credential:credential,urls:[urls]});}return previous;},[]);})();}}},get:function get(){return this._iceServers||[{username:'admin',credential:'webcom1234',urls:['turns:turn1.webcom.orange.com:443','turn:turn1.webcom.orange.com:443?transport=tcp','turn:turn1.webcom.orange.com:3478?transport=tcp']}];}}]);return Config;}();exports.default=Config;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Device=function Device(snapData){(0,_classCallCheck3.default)(this,Device);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.os=values.os;this.userAgent=values.userAgent;this.status=values.status;this.sdk=values.sdk;};exports.default=Device;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_constants=__webpack_require__(19);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _facingModes=[_Media2.default.facingMode.USER,_Media2.default.facingMode.ENVIRONMENT],_getConstraintValue=function _getConstraintValue(constraints,prop){return constraints[prop].exact||constraints[prop].ideal||constraints[prop];},_setConstrainValue=function _setConstrainValue(constraints,prop,other,value){constraints[prop]={exact:value};delete constraints[other];};var Local=function(){function Local(values){(0,_classCallCheck3.default)(this,Local);this.roomId=values.roomId;this.uid=values.uid;this.type=values.type;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this.container=values.container||_cache2.default.config.localStreamContainer;this.node=null;this.peerConnections=[];this.status=_constants.NONE;this._inputs={};this.constraints=values.constraints;}(0,_createClass3.default)(Local,[{key:'updateConstraints',value:function updateConstraints(constraints){var _this=this;Log.d('Local~updateConstraints',constraints);this.constraints=constraints;return navigator.mediaDevices.getUserMedia(this.constraints).then(function(media){['audio','video'].forEach(function(kind){var constraintsValue=_this.constraints[kind];if(constraintsValue){if(constraintsValue.deviceId||constraintsValue.facingMode){_this._inputs[kind]=_getConstraintValue(constraintsValue,constraintsValue.facingMode?'facingMode':'deviceId');}}});_this.media=media;});}},{key:'mute',value:function mute(){var track=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_StreamTypes2.default.AUDIO,state=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;Log.d('mute',track,state);var audio=this.muted.audio,video=this.muted.video,tracks=void 0;switch(track){case _StreamTypes2.default.AUDIO:audio=state;tracks=this.media.getAudioTracks();break;case _StreamTypes2.default.VIDEO:case _StreamTypes2.default.SCREEN_SHARING:video=state;tracks=this.media.getVideoTracks();break;case _StreamTypes2.default.AUDIO_VIDEO:audio=state;video=state;tracks=this.media.getTracks();break;}tracks.forEach(function(track){track.enabled=!state;});this.muted={audio:audio,video:video};DataSync.set('_/rooms/'+this.roomId+'/streams/'+this.uid+'/muted',this.muted);}},{key:'unMute',value:function unMute(track){this.mute(track,false);}},{key:'close',value:function close(){if(!~[_constants.CLOSED,_constants.CLOSING].indexOf(this.status)){this.status=_constants.CLOSING;var path='_/rooms/'+this.roomId+'/subscribers/'+this.uid;DataSync.off(path,'child_added');DataSync.off(path,'child_removed');DataSync.onDisconnect('_/rooms/'+this.roomId+'/streams/'+this.uid).cancel();DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid).cancel();DataSync.remove(path);DataSync.remove('_/rooms/'+this.roomId+'/streams/'+this.uid);this.media=null;this.status=_constants.CLOSED;}return _promise2.default.resolve(this.status);}},{key:'switchCamera',value:function switchCamera(deviceId){return this._switchDevice(_StreamTypes2.default.VIDEO,deviceId);}},{key:'switchMicrophone',value:function switchMicrophone(deviceId){return this._switchDevice(_StreamTypes2.default.AUDIO,deviceId);}},{key:'_switchDevice',value:function _switchDevice(kind,deviceId){var _this2=this;Log.d('Local~_switchDevice',kind,deviceId);if(this.media.getTracks().some(function(track){return track.kind===kind;})){var next=_promise2.default.resolve(deviceId),currentModeIdx=_facingModes.indexOf(this._inputs[kind]);if(!deviceId&&!!~currentModeIdx){next=_promise2.default.resolve(_facingModes[(currentModeIdx+1)%_facingModes.length]);}else if(!~_facingModes.indexOf(deviceId)){next=_Media2.default.devices().then(function(d){var devices=d[kind+'input'].map(function(mediaDevice){return mediaDevice.deviceId;});devices.sort();var nextDevice=deviceId;if(deviceId&&!devices.some(function(device){return device===deviceId;})){return _promise2.default.reject(new Error('Unknown '+kind+' device'));}if(!deviceId&&devices.length>1){var idx=_this2._inputs[kind]?devices.findIndex(function(v){return v===_this2._inputs[kind];},_this2):0;nextDevice=devices[++idx%devices.length];}return nextDevice;});}else{next=_promise2.default.resolve(deviceId);}return next.then(function(device){if(_this2._inputs[kind]!==device){_this2._inputs[kind]=device;_this2.media.getTracks().forEach(function(track){return track.stop();});var constraints=(0,_assign2.default)({},_this2.constraints),props=['facingMode','deviceId'];if(!~_facingModes.indexOf(device)){props=props.reverse();}_setConstrainValue(constraints[kind],props[0],props[1],device);Log.d('Local~_switchDevice',kind,constraints);return _this2.updateConstraints(constraints);}}).then(function(){return _this2;});}return _promise2.default.reject(new Error('Current stream does not contain a '+kind+' track'));}},{key:'constraints',set:function set(constraints){var _this3=this,values=constraints||_cache2.default.config.constraints,defaultConstraints=_Media2.default.constraints();['audio','video'].forEach(function(type){if(!~_this3.type.indexOf(type)){values[type]=false;}else if(!values[type]){values[type]=defaultConstraints[type];}if(values[type].deviceId||values[type].facingMode){_this3._inputs[type]=_getConstraintValue(values[type],values[type].facingMode?'facingMode':'deviceId');}});Log.d('Local~set#contraints',values);this._constraints=values;},get:function get(){return this._constraints;}},{key:'media',set:function set(mediaStream){var _this4=this;if(mediaStream){(function(){if(!(mediaStream instanceof MediaStream)){throw new Error('The media MUST be a MediaStream');}var checkDevices={};mediaStream.getTracks().forEach(function(track){track.enabled=!_this4.muted[track.kind];if(!_this4._inputs[track.kind]){checkDevices[track.kind]=track.label;}});if((0,_keys2.default)(checkDevices).length){_Media2.default.devices().then(function(devices){(0,_keys2.default)(checkDevices).forEach(function(kind){if(devices[kind+'input']){var deviceIds=devices[kind+'input'].filter(function(device){return device.label.length&&device.label===checkDevices[kind];});if(deviceIds.length===1&&!_this4._inputs[kind]){_this4._inputs[kind]=deviceIds[0].deviceId;}}});});}_this4.node=_Media2.default.attachStream(mediaStream,_this4.container,_this4.node,0);_this4.status=_constants.CONNECTED;Log.d('Local~set media',mediaStream,_this4.node);_this4.peerConnections.forEach(function(peerConnection){return peerConnection.renegotiate(_this4._media,mediaStream);});})();}else if(this.media&&!mediaStream){this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;this.media.getTracks().forEach(function(track){return track.stop();});this.peerConnections.forEach(function(peerConnection){return peerConnection.close();});}this._media=mediaStream;},get:function get(){return this._media;}}],[{key:'share',value:function share(roomId,type,container,constraints){if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can share a stream.'));}var streamMetaData={from:_cache2.default.user.uid,device:_cache2.default.device,type:type},sharedStream=new Local((0,_assign2.default)({roomId:roomId,constraints:constraints,container:container},streamMetaData));Log.d('Local~share',sharedStream,sharedStream.constraints);return navigator.mediaDevices.getUserMedia(sharedStream.constraints).then(function(media){sharedStream.media=media;}).then(function(){return DataSync.push('_/rooms/'+roomId+'/streams',streamMetaData);}).then(function(streamRef){sharedStream.uid=streamRef.name();_cache2.default.streams.shared[sharedStream.uid]=sharedStream;DataSync.onDisconnect('_/rooms/'+roomId+'/streams/'+sharedStream.uid).remove();DataSync.onDisconnect('_/rooms/'+roomId+'/subscribers/'+sharedStream.uid).remove();var path='_/rooms/'+sharedStream.roomId+'/subscribers/'+sharedStream.uid,value=function value(snapData){return(0,_assign2.default)({device:snapData.name()},snapData.val()||{});};DataSync.on(path,'child_added',function(snapData){var subscriber=value(snapData);Log.d('Local~subscribed',subscriber);_cache2.default.peerConnections.offer(sharedStream,subscriber).then(function(pc){return sharedStream.peerConnections.push(pc);});},Log.e.bind(Log));DataSync.on(path,'child_removed',function(snapData){var subscriber=value(snapData);Log.d('Local~un-subscribed',subscriber);var closedPC=_cache2.default.peerConnections.close(sharedStream.uid,subscriber.device);sharedStream.peerConnections=sharedStream.peerConnections.filter(function(pc){return pc!==closedPC;});},Log.e.bind(Log));Log.d('Local~shared',sharedStream);return sharedStream;});}}]);return Local;}();exports.default=Local;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Remote=__webpack_require__(60),_Remote2=_interopRequireDefault(_Remote);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var StreamManager=function(){function StreamManager(){(0,_classCallCheck3.default)(this,StreamManager);this.shared={};this.remote={};}(0,_createClass3.default)(StreamManager,[{key:'getRemote',value:function getRemote(streamData){var remoteStream=this.remote[streamData.uid];if(remoteStream){remoteStream.update(streamData);}else{this.remote[streamData.uid]=remoteStream=new _Remote2.default(streamData);}return remoteStream;}},{key:'getShared',value:function getShared(streamData){return this.shared[streamData.uid];}}]);return StreamManager;}();exports.default=StreamManager;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof2=__webpack_require__(32),_typeof3=_interopRequireDefault(_typeof2),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_getOwnPropertyDescriptor=__webpack_require__(96),_getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_constants=__webpack_require__(19);__webpack_require__(99);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DtlsSrtpKeyAgreement={DtlsSrtpKeyAgreement:true},sdpConstraints=function sdpConstraints(receive){return{OfferToReceiveAudio:receive,OfferToReceiveVideo:receive};},ICE_CONNECTION_STATE_DISCONNECTED='disconnected',ICE_CONNECTION_STATE_CONNECTED='connected',ICE_CONNECTION_STATE_COMPLETED='completed',ICE_CONNECTION_STATE_CHECKING='checking',ICE_CONNECTION_STATE_CLOSED='closed',ICE_CONNECTION_STATE_FAILED='failed',ICE_CONNECTION_STATE_OTHER='other',_toJSON=function _toJSON(o){return o.toJSON&&typeof o.toJSON==='function'?o.toJSON():o;};var PeerConnection=function(){function PeerConnection(stackId,streamId,remoteDevice,publish){var _this=this;(0,_classCallCheck3.default)(this,PeerConnection);this.stackId=stackId;this.streamId=streamId;this.remoteDevice=remoteDevice;this._localPath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+_cache2.default.device;this._remotePath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+this.remoteDevice;this.negotiated=false;this.node=null;this.container=null;this.pc=new RTCPeerConnection({iceServers:_cache2.default.config.iceServers},{optional:[DtlsSrtpKeyAgreement],mandatory:sdpConstraints(!publish)});this.pc.onicecandidate=function(e){if(!_this.negotiated&&e.candidate){Log.d('PeerConnection~onicecandidate',e.candidate);DataSync.push(_this._localPath+'/ice',_toJSON(e.candidate));}};this.pc.oniceconnectionstatechange=function(){Log.d('PeerConnection~oniceconnectionstatechange',_this.pc.iceConnectionState);var iceConnectionState=_this.pc.iceConnectionState;switch(iceConnectionState){case ICE_CONNECTION_STATE_CHECKING:break;case ICE_CONNECTION_STATE_CONNECTED:_this._attachStream();_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_COMPLETED:_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_DISCONNECTED:case ICE_CONNECTION_STATE_CLOSED:case ICE_CONNECTION_STATE_FAILED:Log.d('PeerConnection~oniceconnectionstatechange','Close PeerConnection');_this.close();break;}_this.negotiated=_this.negotiated||_this.isConnected;};this.pc.onicegatheringstatechange=function(){Log.d('PeerConnection~onicegatheringstatechange',_this.pc.iceGatheringState);};this._status=_constants.OPENED;}(0,_createClass3.default)(PeerConnection,[{key:'_remoteICECandidates',value:function _remoteICECandidates(listen){var _this2=this,path=this._remotePath+'/ice',event='child_added';if(listen){DataSync.on(path,event,function(snap){var candidate=snap.val();Log.d('PeerConnection~addIceCandidate',candidate);_this2.pc.addIceCandidate(new RTCIceCandidate(candidate));});}else{DataSync.off(path,event);}}},{key:'_attachStream',value:function _attachStream(){if(this.remoteStream&&this.isConnected){this.node=_Media2.default.attachStream(this.remoteStream,this.container,this.node);}}},{key:'answer',value:function answer(htmlElement){var _this3=this;Log.i('PeerConnection~answer',{htmlElement:htmlElement,peerConnection:this});this.container=htmlElement;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'ontrack')){this.pc.ontrack=function(e){Log.d('PeerConnection~ontrack',e.streams[0]);_this3.remoteStream=e.streams[0];};}else{this.pc.onaddstream=function(e){Log.d('PeerConnection~onaddstream',e.stream);_this3.remoteStream=e.stream;};}DataSync.on(this._remotePath+'/sdp','value',function(snap){var sdpOffer=snap.val();Log.d('Offer',sdpOffer);if(sdpOffer!=null){Log.d('PeerConnection~offered',sdpOffer);_this3.pc.setRemoteDescription(sdpOffer).then(function(){return Log.d('PeerConnection~remoteDescription',_this3.pc.remoteDescription);}).then(function(){if(/^offer$/.test(_this3.pc.remoteDescription.type)){return _this3.pc.createAnswer();}return _promise2.default.reject(new Error('SDP is not an offer'));}).then(function(description){return _this3._setPreferredCodecs(description);}).then(function(description){return _this3.pc.setLocalDescription(description);}).then(function(){Log.d('PeerConnection~localDescription',_this3.pc.localDescription);_this3._remoteICECandidates(true);}).then(function(){return DataSync.update(_this3._localPath+'/sdp',_toJSON(_this3.pc.localDescription));}).catch(Log.r('PeerConnection~localDescription'));}});return _promise2.default.resolve(this);}},{key:'offer',value:function offer(stream){var _this4=this;Log.i('PeerConnection~offer',{stream:stream,peerConnection:this});var sendTimeout=void 0;return new _promise2.default(function(resolve,reject){_this4.pc.onnegotiationneeded=function(){Log.d('PeerConnection~onnegotiationneeded');if(sendTimeout){clearTimeout(sendTimeout);sendTimeout=null;}sendTimeout=setTimeout(function(){sendTimeout=null;_this4._sendOffer().then(function(){resolve(_this4);}).catch(function(e){Log.d('PeerConnection~offer',e);reject(e);});},20);};DataSync.on(_this4._remotePath+'/sdp','value',function(snap){var sdpAnswer=snap.val();if(sdpAnswer!=null){Log.d('PeerConnection~offer#answered',sdpAnswer);_this4.pc.setRemoteDescription(sdpAnswer).then(function(){Log.d('PeerConnection~offer#remoteDescription',_this4.pc.remoteDescription);_this4._remoteICECandidates(true);}).catch(Log.e.bind(Log,'PeerConnection~remoteDescription'));}});_this4._alterStream(stream,'add');});}},{key:'_sendOffer',value:function _sendOffer(){var _this5=this;Log.d('PeerConnection~_sendOffer');return this.pc.createOffer().then(function(description){return _this5._setPreferredCodecs(description);}).then(function(description){return _this5.pc.setLocalDescription(description);}).then(function(){return Log.d('PeerConnection~renegotiate#localDescription',_this5.pc.localDescription);}).then(function(){return DataSync.update(_this5._localPath+'/sdp',_toJSON(_this5.pc.localDescription));});}},{key:'_alterStream',value:function _alterStream(stream,method){var _this6=this;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,method+'Track')){stream.getTracks().forEach(function(track){return _this6.pc[method+'Track'](track,stream);},this);}else{this.pc[method+'Stream'](stream);}}},{key:'renegotiate',value:function renegotiate(oldStream,newStream){Log.d('PeerConnection~renegotiate');if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'getSenders')){this.pc.getSenders().forEach(function(sender){var newTracks=void 0;switch(sender.track.kind){case'audio':newTracks=newStream.getAudioTracks();break;case'video':newTracks=newStream.getVideoTracks();break;default:newTracks=[];}if(newTracks.length){sender.replaceTrack(newTracks[0]);}});this._sendOffer().catch(function(e){Log.d('PeerConnection~renegotiate',e);});}else{this._alterStream(oldStream,'remove');this._alterStream(newStream,'add');}}},{key:'close',value:function close(){var _this7=this;if(this._status===_constants.OPENED){this._status=_constants.CLOSING;if(this.node){this.node.stop&&this.node.stop();this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;}this._remoteICECandidates(false);DataSync.off(this._remotePath+'/sdp','value');DataSync.remove(this._localPath);if(this.pc&&this.pc.signalingState!=='closed'){this.pc.onsignalingstatechange=function(){if(_this7.pc.signalingState!=='closed'){_this7._status=_constants.CLOSED;}};this.pc.close();}else{this._status=_constants.CLOSED;}}}},{key:'_setPreferredCodecs',value:function _setPreferredCodecs(description){if(_cache2.default.config.preferredVideoCodec||_cache2.default.config.preferredAudioCodec){var _ret=function(){Log.d('PeerConnection~_setPreferredCodecs',{description:description,config:_cache2.default.config});var sdpLines=description.sdp.split(/\r?\n/),medias={audio:[],video:[]},current=null;sdpLines.forEach(function(sdpLine,i){if(/^m=/.test(sdpLine)){var d=/^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);current={fmt:d[2].split(/\s/),index:i,codecs:[]};medias[d[1]].push(current);}else if(current&&/^a=rtpmap:/.test(sdpLine)){var c=/^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);if(c){current.codecs.push({id:c[1],name:c[2],index:i});}}});Log.d('PeerConnection~_setPreferredCodecs',medias);var update=false,prefer=function prefer(mediaList,preferedCodec){mediaList.forEach(function(media){var selected=media.codecs.find(function(codec){return preferedCodec.test(codec.name);});if(selected){var fmt=[selected.id].concat(media.fmt.filter(function(ids){return ids!==selected.id;}));sdpLines[media.index]=sdpLines[media.index].replace(media.fmt.join(' '),fmt.join(' '));update=true;}});};if(_cache2.default.config.preferredVideoCodec){prefer(medias.video,_cache2.default.config.preferredVideoCodec);}if(_cache2.default.config.preferredAudioCodec){prefer(medias.audio,_cache2.default.config.preferredAudioCodec);}if(update){Log.d('PeerConnection~_setPreferredCodecs',sdpLines.join('\r\n'));return{v:{sdp:sdpLines.join('\r\n'),type:description.type}};}}();if((typeof _ret==='undefined'?'undefined':(0,_typeof3.default)(_ret))==="object")return _ret.v;}return description;}},{key:'remoteStream',set:function set(stream){this._remoteStream=stream;this._attachStream();},get:function get(){return this._remoteStream;}},{key:'isConnected',get:function get(){return this.pc&&!!~[ICE_CONNECTION_STATE_CONNECTED,ICE_CONNECTION_STATE_COMPLETED,ICE_CONNECTION_STATE_OTHER].indexOf(this.pc.iceConnectionState);}}]);return PeerConnection;}();exports.default=PeerConnection;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_PeerConnection=__webpack_require__(91),_PeerConnection2=_interopRequireDefault(_PeerConnection),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var getStackId=function getStackId(id1,id2){return id1.localeCompare(id2,'en-us')>0?id1+'-'+id2:id2+'-'+id1;};var PeerConnectionManager=function(){function PeerConnectionManager(){(0,_classCallCheck3.default)(this,PeerConnectionManager);this.stacks={};}(0,_createClass3.default)(PeerConnectionManager,[{key:'getPeerConnection',value:function getPeerConnection(stream,remote,publish){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can get a PeerConnection\'s object.'));}var stackId=getStackId(remote.device,_cache2.default.device);if(this.stacks[stackId]&&this.stacks[stackId][stream.uid]){return _promise2.default.resolve(this.stacks[stackId][stream.uid]);}if(!this.stacks[stackId]){this.stacks[stackId]={};}var users={};users[_cache2.default.user.uid]=true;users[remote.from||remote.to]=true;return DataSync.update('_/webrtc/'+stackId,users).then(function(){return new _PeerConnection2.default(stackId,stream.uid,remote.device,publish);}).then(function(pc){Log.d('PeerConnectionManager~getPeerConnection',{stackId:stackId,streamId:stream.uid,pc:pc});_this.stacks[stackId][stream.uid]=pc;return pc;}).catch(Log.r('PeerConnectionManager~getPeerConnection'));}},{key:'offer',value:function offer(localStream,subscriber){Log.d('PeerConnectionManager~offer',{localStream:localStream,subscriber:subscriber});return this.getPeerConnection(localStream,subscriber,true).then(function(pc){return pc.offer(localStream.media);});}},{key:'answer',value:function answer(remoteStream,htmlElement){Log.d('PeerConnectionManager~answer',{remoteStream:remoteStream,htmlElement:htmlElement});return this.getPeerConnection(remoteStream,remoteStream,false).then(function(pc){return pc.answer(htmlElement);});}},{key:'close',value:function close(streamId,remoteDevice){var stackId=getStackId(remoteDevice,_cache2.default.device),pc=this.stacks[stackId]?this.stacks[stackId][streamId]:null;if(pc){pc.close();this.stacks[stackId][streamId]=null;delete this.stacks[stackId][streamId];return pc;}return false;}}]);return PeerConnectionManager;}();exports.default=PeerConnectionManager;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(162);
module.exports = __webpack_require__(53).Array.find;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(131);
module.exports = __webpack_require__(2).Array.from;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(2)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var $Object = __webpack_require__(2).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(52);
__webpack_require__(79);
__webpack_require__(137);
module.exports = __webpack_require__(2).Promise;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
__webpack_require__(78);
__webpack_require__(139);
__webpack_require__(140);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(79);
module.exports = __webpack_require__(51).f('iterator');

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(48)
  , toIndex   = __webpack_require__(130);
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10)
  , createDesc      = __webpack_require__(26);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21)
  , gOPS    = __webpack_require__(44)
  , pIE     = __webpack_require__(34);
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(23)
  , call        = __webpack_require__(67)
  , isArrayIter = __webpack_require__(66)
  , anObject    = __webpack_require__(15)
  , toLength    = __webpack_require__(48)
  , getIterFn   = __webpack_require__(77)
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
/* 115 */
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(70)
  , descriptor     = __webpack_require__(26)
  , setToStringTag = __webpack_require__(35)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(21)
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(37)('meta')
  , isObject = __webpack_require__(24)
  , has      = __webpack_require__(17)
  , setDesc  = __webpack_require__(10).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(20)(function(){
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , macrotask = __webpack_require__(76).set
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(21)
  , gOPS     = __webpack_require__(44)
  , pIE      = __webpack_require__(34)
  , toObject = __webpack_require__(36)
  , IObject  = __webpack_require__(65)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function(){
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(10)
  , anObject = __webpack_require__(15)
  , getKeys  = __webpack_require__(21);

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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , gOPN      = __webpack_require__(72).f
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(17)
  , toObject    = __webpack_require__(36)
  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(18);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 127 */
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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(15)
  , aFunction = __webpack_require__(40)
  , SPECIES   = __webpack_require__(3)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47)
  , defined   = __webpack_require__(41);
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(23)
  , $export        = __webpack_require__(16)
  , toObject       = __webpack_require__(36)
  , call           = __webpack_require__(67)
  , isArrayIter    = __webpack_require__(66)
  , toLength       = __webpack_require__(48)
  , createProperty = __webpack_require__(112)
  , getIterFn      = __webpack_require__(77);

$export($export.S + $export.F * !__webpack_require__(69)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(109)
  , step             = __webpack_require__(118)
  , Iterators        = __webpack_require__(25)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(68)(Array, 'Array', function(iterated, kind){
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(16);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(122)});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(12)
  , $getOwnPropertyDescriptor = __webpack_require__(71).f;

__webpack_require__(74)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(36)
  , $keys    = __webpack_require__(21);

__webpack_require__(74)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(33)
  , global             = __webpack_require__(5)
  , ctx                = __webpack_require__(23)
  , classof            = __webpack_require__(62)
  , $export            = __webpack_require__(16)
  , isObject           = __webpack_require__(24)
  , aFunction          = __webpack_require__(40)
  , anInstance         = __webpack_require__(110)
  , forOf              = __webpack_require__(114)
  , speciesConstructor = __webpack_require__(128)
  , task               = __webpack_require__(76).set
  , microtask          = __webpack_require__(121)()
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
  Internal.prototype = __webpack_require__(126)($Promise.prototype, {
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
__webpack_require__(35)($Promise, PROMISE);
__webpack_require__(127)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function(iter){
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(5)
  , has            = __webpack_require__(17)
  , DESCRIPTORS    = __webpack_require__(11)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(75)
  , META           = __webpack_require__(120).KEY
  , $fails         = __webpack_require__(20)
  , shared         = __webpack_require__(46)
  , setToStringTag = __webpack_require__(35)
  , uid            = __webpack_require__(37)
  , wks            = __webpack_require__(3)
  , wksExt         = __webpack_require__(51)
  , wksDefine      = __webpack_require__(50)
  , keyOf          = __webpack_require__(119)
  , enumKeys       = __webpack_require__(113)
  , isArray        = __webpack_require__(116)
  , anObject       = __webpack_require__(15)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(49)
  , createDesc     = __webpack_require__(26)
  , _create        = __webpack_require__(70)
  , gOPNExt        = __webpack_require__(124)
  , $GOPD          = __webpack_require__(71)
  , $DP            = __webpack_require__(10)
  , $keys          = __webpack_require__(21)
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
  __webpack_require__(72).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f  = $propertyIsEnumerable;
  __webpack_require__(44).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(33)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50)('asyncIterator');

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50)('observable');

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(84)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(55)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(81)
  , IObject  = __webpack_require__(152)
  , toObject = __webpack_require__(160)
  , toLength = __webpack_require__(159)
  , asc      = __webpack_require__(146);
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38)
  , isArray  = __webpack_require__(153)
  , SPECIES  = __webpack_require__(84)('species');

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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(145);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 147 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38)
  , document = __webpack_require__(27).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(27)
  , core      = __webpack_require__(53)
  , hide      = __webpack_require__(55)
  , redefine  = __webpack_require__(156)
  , ctx       = __webpack_require__(81)
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
/* 150 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(54) && !__webpack_require__(82)(function(){
  return Object.defineProperty(__webpack_require__(148)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(80);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(80);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(143)
  , IE8_DOM_DEFINE = __webpack_require__(151)
  , toPrimitive    = __webpack_require__(161)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(54) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 155 */
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(27)
  , hide      = __webpack_require__(55)
  , has       = __webpack_require__(150)
  , SRC       = __webpack_require__(83)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(53).inspectSource = function(it){
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 158 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(158)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(147);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(38);
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(149)
  , $find   = __webpack_require__(144)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(142)(KEY);

/***/ }),
/* 163 */
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
      default: // Unknown extensions are silently ignored.
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
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
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

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection);
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var fpLine = lines.filter(function(line) {
    return line.indexOf('a=fingerprint:') === 0;
  })[0].substr(14);
  // Note: a=setup line is ignored since we use the 'auto' role.
  var dtlsParameters = {
    role: 'auto',
    fingerprints: [{
      algorithm: fpLine.split(' ')[0],
      value: fpLine.split(' ')[1]
    }]
  };
  return dtlsParameters;
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

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  // FIXME: for RTX there might be multiple SSRCs. Not implemented in Edge yet.
  if (transceiver.rtpSender) {
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;
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

// Expose public methods.
module.exports = SDPUtils;


/***/ }),
/* 164 */
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
/* 165 */
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
(function() {
  // Utils.
  var utils = __webpack_require__(13);
  var logging = utils.log;
  var browserDetails = utils.browserDetails;
  // Export to the adapter global object visible in the browser.
  module.exports.browserDetails = browserDetails;
  module.exports.extractVersion = utils.extractVersion;
  module.exports.disableLog = utils.disableLog;

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = __webpack_require__(166) || null;
  var edgeShim = __webpack_require__(168) || null;
  var firefoxShim = __webpack_require__(170) || null;
  var safariShim = __webpack_require__(172) || null;

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection) {
        logging('Chrome shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = chromeShim;

      chromeShim.shimGetUserMedia();
      chromeShim.shimMediaStream();
      utils.shimCreateObjectURL();
      chromeShim.shimSourceObject();
      chromeShim.shimPeerConnection();
      chromeShim.shimOnTrack();
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection) {
        logging('Firefox shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia();
      utils.shimCreateObjectURL();
      firefoxShim.shimSourceObject();
      firefoxShim.shimPeerConnection();
      firefoxShim.shimOnTrack();
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection) {
        logging('MS edge shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = edgeShim;

      edgeShim.shimGetUserMedia();
      utils.shimCreateObjectURL();
      edgeShim.shimPeerConnection();
      break;
    case 'safari':
      if (!safariShim) {
        logging('Safari shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = safariShim;

      safariShim.shimGetUserMedia();
      break;
    default:
      logging('Unsupported browser!');
  }
})();


/***/ }),
/* 166 */
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

var logging = __webpack_require__(13).log;
var browserDetails = __webpack_require__(13).browserDetails;

var chromeShim = {
  shimMediaStream: function() {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function() {
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
              var event = new Event('track');
              event.track = te.track;
              event.receiver = {track: te.track};
              event.streams = [e.stream];
              self.dispatchEvent(event);
            });
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

  shimSourceObject: function() {
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

  shimPeerConnection: function() {
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

        return new webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    }

    var origGetStats = RTCPeerConnection.prototype.getStats;
    RTCPeerConnection.prototype.getStats = function(selector,
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
          return[key, stats[key]];
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
            var nativeMethod = RTCPeerConnection.prototype[method];
            RTCPeerConnection.prototype[method] = function() {
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
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
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
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        RTCPeerConnection.prototype.addIceCandidate;
    RTCPeerConnection.prototype.addIceCandidate = function() {
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
  shimSourceObject: chromeShim.shimSourceObject,
  shimPeerConnection: chromeShim.shimPeerConnection,
  shimGetUserMedia: __webpack_require__(167)
};


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

var logging = __webpack_require__(13).log;

// Expose public methods.
module.exports = function() {
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
    if (constraints && constraints.audio) {
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile, where it defaults to "user".
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode)) {
        delete constraints.video.facingMode;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          // Look for "back" in label, or use last cam (typically back cam).
          return navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices = devices.filter(function(d) {
              return d.kind === 'videoinput';
            });
            var back = devices.find(function(d) {
              return d.label.toLowerCase().indexOf('back') !== -1;
            }) || (devices.length && devices[devices.length - 1]);
            if (back) {
              constraints.video.deviceId = face.exact ? {exact: back.deviceId} :
                                                        {ideal: back.deviceId};
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
        ConstraintNotSatisfiedError: 'OverconstrainedError'
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
          return MediaStreamTrack.getSources(function(devices) {
            resolve(devices.map(function(device) {
              return {label: device.label,
                      kind: kinds[device.kind],
                      deviceId: device.id,
                      groupId: ''};
            }));
          });
        });
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


var SDPUtils = __webpack_require__(163);
var browserDetails = __webpack_require__(13).browserDetails;

var edgeShim = {
  shimPeerConnection: function() {
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
            MediaStreamTrack.prototype, 'enabled');
        Object.defineProperty(MediaStreamTrack.prototype, 'enabled', {
          set: function(value) {
            origMSTEnabled.set.call(this, value);
            var ev = new Event('enabled');
            ev.enabled = value;
            this.dispatchEvent(ev);
          }
        });
      }
    }

    window.RTCPeerConnection = function(config) {
      var self = this;

      var _eventTarget = document.createDocumentFragment();
      ['addEventListener', 'removeEventListener', 'dispatchEvent']
          .forEach(function(method) {
            self[method] = _eventTarget[method].bind(_eventTarget);
          });

      this.onicecandidate = null;
      this.onaddstream = null;
      this.ontrack = null;
      this.onremovestream = null;
      this.onsignalingstatechange = null;
      this.oniceconnectionstatechange = null;
      this.onicegatheringstatechange = null;
      this.onnegotiationneeded = null;
      this.ondatachannel = null;

      this.localStreams = [];
      this.remoteStreams = [];
      this.getLocalStreams = function() {
        return self.localStreams;
      };
      this.getRemoteStreams = function() {
        return self.remoteStreams;
      };

      this.localDescription = new RTCSessionDescription({
        type: '',
        sdp: ''
      });
      this.remoteDescription = new RTCSessionDescription({
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
          case 'none':
            // FIXME: remove once implementation and spec have added this.
            throw new TypeError('iceTransportPolicy "none" not supported');
          default:
            // don't set iceTransportPolicy.
            break;
        }
      }
      this.usingBundle = config && config.bundlePolicy === 'max-bundle';

      if (config && config.iceServers) {
        // Edge does not like
        // 1) stun:
        // 2) turn: that does not have all of turn:host:port?transport=udp
        // 3) turn: with ipv6 addresses
        var iceServers = JSON.parse(JSON.stringify(config.iceServers));
        this.iceOptions.iceServers = iceServers.filter(function(server) {
          if (server && server.urls) {
            var urls = server.urls;
            if (typeof urls === 'string') {
              urls = [urls];
            }
            urls = urls.filter(function(url) {
              return (url.indexOf('turn:') === 0 &&
                  url.indexOf('transport=udp') !== -1 &&
                  url.indexOf('turn:[') === -1) ||
                  (url.indexOf('stun:') === 0 &&
                    browserDetails.version >= 14393);
            })[0];
            return !!urls;
          }
          return false;
        });
      }
      this._config = config;

      // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
      // everything that is needed to describe a SDP m-line.
      this.transceivers = [];

      // since the iceGatherer is currently created in createOffer but we
      // must not emit candidates until after setLocalDescription we buffer
      // them in this array.
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype._emitGatheringStateChange = function() {
      var event = new Event('icegatheringstatechange');
      this.dispatchEvent(event);
      if (this.onicegatheringstatechange !== null) {
        this.onicegatheringstatechange(event);
      }
    };

    window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
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

    window.RTCPeerConnection.prototype.getConfiguration = function() {
      return this._config;
    };

    window.RTCPeerConnection.prototype.addStream = function(stream) {
      if (browserDetails.version >= 15025) {
        this.localStreams.push(stream);
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
        this.localStreams.push(clonedStream);
      }
      this._maybeFireNegotiationNeeded();
    };

    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var idx = this.localStreams.indexOf(stream);
      if (idx > -1) {
        this.localStreams.splice(idx, 1);
        this._maybeFireNegotiationNeeded();
      }
    };

    window.RTCPeerConnection.prototype.getSenders = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpSender;
      })
      .map(function(transceiver) {
        return transceiver.rtpSender;
      });
    };

    window.RTCPeerConnection.prototype.getReceivers = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpReceiver;
      })
      .map(function(transceiver) {
        return transceiver.rtpReceiver;
      });
    };

    // Determines the intersection of local and remote capabilities.
    window.RTCPeerConnection.prototype._getCommonCapabilities =
        function(localCapabilities, remoteCapabilities) {
          var commonCapabilities = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: []
          };
          localCapabilities.codecs.forEach(function(lCodec) {
            for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
              var rCodec = remoteCapabilities.codecs[i];
              if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
                  lCodec.clockRate === rCodec.clockRate) {
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

          localCapabilities.headerExtensions
              .forEach(function(lHeaderExtension) {
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
        };

    // Create ICE gatherer, ICE transport and DTLS transport.
    window.RTCPeerConnection.prototype._createIceAndDtlsTransports =
        function(mid, sdpMLineIndex) {
          var self = this;
          var iceGatherer = new RTCIceGatherer(self.iceOptions);
          var iceTransport = new RTCIceTransport(iceGatherer);
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
              cand.component = iceTransport.component === 'RTCP' ? 2 : 1;
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
          iceTransport.onicestatechange = function() {
            self._updateConnectionState();
          };

          var dtlsTransport = new RTCDtlsTransport(iceTransport);
          dtlsTransport.ondtlsstatechange = function() {
            self._updateConnectionState();
          };
          dtlsTransport.onerror = function() {
            // onerror does not set state to failed by itself.
            dtlsTransport.state = 'failed';
            self._updateConnectionState();
          };

          return {
            iceGatherer: iceGatherer,
            iceTransport: iceTransport,
            dtlsTransport: dtlsTransport
          };
        };

    // Start the RTP Sender and Receiver for a transceiver.
    window.RTCPeerConnection.prototype._transceive = function(transceiver,
        send, recv) {
      var params = this._getCommonCapabilities(transceiver.localCapabilities,
          transceiver.remoteCapabilities);
      if (send && transceiver.rtpSender) {
        params.encodings = transceiver.sendEncodingParameters;
        params.rtcp = {
          cname: SDPUtils.localCName
        };
        if (transceiver.recvEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
        }
        transceiver.rtpSender.send(params);
      }
      if (recv && transceiver.rtpReceiver) {
        // remove RTX field in Edge 14942
        if (transceiver.kind === 'video'
            && transceiver.recvEncodingParameters) {
          transceiver.recvEncodingParameters.forEach(function(p) {
            delete p.rtx;
          });
        }
        params.encodings = transceiver.recvEncodingParameters;
        params.rtcp = {
          cname: transceiver.cname
        };
        if (transceiver.sendEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
        }
        transceiver.rtpReceiver.receive(params);
      }
    };

    window.RTCPeerConnection.prototype.setLocalDescription =
        function(description) {
          var self = this;
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

              var rejected = mediaSection.split('\n', 1)[0]
                  .split(' ', 2)[1] === '0';

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
                var params = self._getCommonCapabilities(localCapabilities,
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
              }
              self._emitBufferedCandidates();
            }, 0);
          }
          var p = Promise.resolve();
          p.then(function() {
            if (!hasCallback) {
              if (self.iceGatheringState === 'new') {
                self.iceGatheringState = 'gathering';
              }
              // Usually candidates will be emitted earlier.
              window.setTimeout(self._emitBufferedCandidates.bind(self), 500);
            }
          });
          return p;
        };

    window.RTCPeerConnection.prototype.setRemoteDescription =
        function(description) {
          var self = this;
          var stream = new MediaStream();
          var receiverList = [];
          var sections = SDPUtils.splitSections(description.sdp);
          var sessionpart = sections.shift();
          var isIceLite = SDPUtils.matchPrefix(sessionpart,
              'a=ice-lite').length > 0;
          this.usingBundle = SDPUtils.matchPrefix(sessionpart,
              'a=group:BUNDLE ').length > 0;
          sections.forEach(function(mediaSection, sdpMLineIndex) {
            var lines = SDPUtils.splitLines(mediaSection);
            var mline = lines[0].substr(2).split(' ');
            var kind = mline[0];
            var rejected = mline[1] === '0';
            var direction = SDPUtils.getDirection(mediaSection, sessionpart);

            var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:');
            if (mid.length) {
              mid = mid[0].substr(6);
            } else {
              mid = SDPUtils.generateIdentifier();
            }

            // Reject datachannels which are not implemented yet.
            if (kind === 'application' && mline[2] === 'DTLS/SCTP') {
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
            var rtpSender;
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
              cname = remoteSsrc.value;
            }

            var isComplete = SDPUtils.matchPrefix(mediaSection,
                'a=end-of-candidates', sessionpart).length > 0;
            var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
                .map(function(cand) {
                  return SDPUtils.parseCandidate(cand);
                })
                .filter(function(cand) {
                  return cand.component === '1';
                });
            if (description.type === 'offer' && !rejected) {
              var transports = self.usingBundle && sdpMLineIndex > 0 ? {
                iceGatherer: self.transceivers[0].iceGatherer,
                iceTransport: self.transceivers[0].iceTransport,
                dtlsTransport: self.transceivers[0].dtlsTransport
              } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);

              if (isComplete && (!self.usingBundle || sdpMLineIndex === 0)) {
                transports.iceTransport.setRemoteCandidates(cands);
              }

              localCapabilities = RTCRtpReceiver.getCapabilities(kind);

              // filter RTX until additional stuff needed for RTX is implemented
              // in adapter.js
              localCapabilities.codecs = localCapabilities.codecs.filter(
                  function(codec) {
                    return codec.name !== 'rtx';
                  });

              sendEncodingParameters = [{
                ssrc: (2 * sdpMLineIndex + 2) * 1001
              }];

              rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);

              track = rtpReceiver.track;
              receiverList.push([track, rtpReceiver]);
              // FIXME: not correct when there are multiple streams but that is
              // not currently supported in this shim.
              stream.addTrack(track);

              // FIXME: look at direction.
              if (self.localStreams.length > 0 &&
                  self.localStreams[0].getTracks().length >= sdpMLineIndex) {
                var localTrack;
                if (kind === 'audio') {
                  localTrack = self.localStreams[0].getAudioTracks()[0];
                } else if (kind === 'video') {
                  localTrack = self.localStreams[0].getVideoTracks()[0];
                }
                if (localTrack) {
                  rtpSender = new RTCRtpSender(localTrack,
                      transports.dtlsTransport);
                }
              }

              self.transceivers[sdpMLineIndex] = {
                iceGatherer: transports.iceGatherer,
                iceTransport: transports.iceTransport,
                dtlsTransport: transports.dtlsTransport,
                localCapabilities: localCapabilities,
                remoteCapabilities: remoteCapabilities,
                rtpSender: rtpSender,
                rtpReceiver: rtpReceiver,
                kind: kind,
                mid: mid,
                cname: cname,
                sendEncodingParameters: sendEncodingParameters,
                recvEncodingParameters: recvEncodingParameters
              };
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
              rtpSender = transceiver.rtpSender;
              rtpReceiver = transceiver.rtpReceiver;
              sendEncodingParameters = transceiver.sendEncodingParameters;
              localCapabilities = transceiver.localCapabilities;

              self.transceivers[sdpMLineIndex].recvEncodingParameters =
                  recvEncodingParameters;
              self.transceivers[sdpMLineIndex].remoteCapabilities =
                  remoteCapabilities;
              self.transceivers[sdpMLineIndex].cname = cname;

              if ((isIceLite || isComplete) && cands.length) {
                iceTransport.setRemoteCandidates(cands);
              }
              if (!self.usingBundle || sdpMLineIndex === 0) {
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
                receiverList.push([track, rtpReceiver]);
                stream.addTrack(track);
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
          if (stream.getTracks().length) {
            self.remoteStreams.push(stream);
            window.setTimeout(function() {
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
            }, 0);
          }
          if (arguments.length > 1 && typeof arguments[1] === 'function') {
            window.setTimeout(arguments[1], 0);
          }
          return Promise.resolve();
        };

    window.RTCPeerConnection.prototype.close = function() {
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
    window.RTCPeerConnection.prototype._updateSignalingState =
        function(newState) {
          this.signalingState = newState;
          var event = new Event('signalingstatechange');
          this.dispatchEvent(event);
          if (this.onsignalingstatechange !== null) {
            this.onsignalingstatechange(event);
          }
        };

    // Determine whether to fire the negotiationneeded event.
    window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded =
        function() {
          // Fire away (for now).
          var event = new Event('negotiationneeded');
          this.dispatchEvent(event);
          if (this.onnegotiationneeded !== null) {
            this.onnegotiationneeded(event);
          }
        };

    // Update the connection state.
    window.RTCPeerConnection.prototype._updateConnectionState = function() {
      var self = this;
      var newState;
      var states = {
        'new': 0,
        closed: 0,
        connecting: 0,
        checking: 0,
        connected: 0,
        completed: 0,
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

    window.RTCPeerConnection.prototype.createOffer = function() {
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

      var tracks = [];
      var numAudioTracks = 0;
      var numVideoTracks = 0;
      // Default to sendrecv.
      if (this.localStreams.length) {
        numAudioTracks = this.localStreams[0].getAudioTracks().length;
        numVideoTracks = this.localStreams[0].getVideoTracks().length;
      }
      // Determine number of audio and video tracks we need to send/recv.
      if (offerOptions) {
        // Reject Chrome legacy constraints.
        if (offerOptions.mandatory || offerOptions.optional) {
          throw new TypeError(
              'Legacy mandatory/optional constraints not supported.');
        }
        if (offerOptions.offerToReceiveAudio !== undefined) {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
        if (offerOptions.offerToReceiveVideo !== undefined) {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
      if (this.localStreams.length) {
        // Push local streams.
        this.localStreams[0].getTracks().forEach(function(track) {
          tracks.push({
            kind: track.kind,
            track: track,
            wantReceive: track.kind === 'audio' ?
                numAudioTracks > 0 : numVideoTracks > 0
          });
          if (track.kind === 'audio') {
            numAudioTracks--;
          } else if (track.kind === 'video') {
            numVideoTracks--;
          }
        });
      }
      // Create M-lines for recvonly streams.
      while (numAudioTracks > 0 || numVideoTracks > 0) {
        if (numAudioTracks > 0) {
          tracks.push({
            kind: 'audio',
            wantReceive: true
          });
          numAudioTracks--;
        }
        if (numVideoTracks > 0) {
          tracks.push({
            kind: 'video',
            wantReceive: true
          });
          numVideoTracks--;
        }
      }

      var sdp = SDPUtils.writeSessionBoilerplate();
      var transceivers = [];
      tracks.forEach(function(mline, sdpMLineIndex) {
        // For each track, create an ice gatherer, ice transport,
        // dtls transport, potentially rtpsender and rtpreceiver.
        var track = mline.track;
        var kind = mline.kind;
        var mid = SDPUtils.generateIdentifier();

        var transports = self.usingBundle && sdpMLineIndex > 0 ? {
          iceGatherer: transceivers[0].iceGatherer,
          iceTransport: transceivers[0].iceTransport,
          dtlsTransport: transceivers[0].dtlsTransport
        } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);

        var localCapabilities = RTCRtpSender.getCapabilities(kind);
        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
        localCapabilities.codecs.forEach(function(codec) {
          // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
          // by adding level-asymmetry-allowed=1
          if (codec.name === 'H264' &&
              codec.parameters['level-asymmetry-allowed'] === undefined) {
            codec.parameters['level-asymmetry-allowed'] = '1';
          }
        });

        var rtpSender;
        var rtpReceiver;

        // generate an ssrc now, to be used later in rtpSender.send
        var sendEncodingParameters = [{
          ssrc: (2 * sdpMLineIndex + 1) * 1001
        }];
        if (track) {
          rtpSender = new RTCRtpSender(track, transports.dtlsTransport);
        }

        if (mline.wantReceive) {
          rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
        }

        transceivers[sdpMLineIndex] = {
          iceGatherer: transports.iceGatherer,
          iceTransport: transports.iceTransport,
          dtlsTransport: transports.dtlsTransport,
          localCapabilities: localCapabilities,
          remoteCapabilities: null,
          rtpSender: rtpSender,
          rtpReceiver: rtpReceiver,
          kind: kind,
          mid: mid,
          sendEncodingParameters: sendEncodingParameters,
          recvEncodingParameters: null
        };
      });
      if (this.usingBundle) {
        sdp += 'a=group:BUNDLE ' + transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      tracks.forEach(function(mline, sdpMLineIndex) {
        var transceiver = transceivers[sdpMLineIndex];
        sdp += SDPUtils.writeMediaSection(transceiver,
            transceiver.localCapabilities, 'offer', self.localStreams[0]);
      });

      this._pendingOffer = transceivers;
      var desc = new RTCSessionDescription({
        type: 'offer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.createAnswer = function() {
      var self = this;

      var sdp = SDPUtils.writeSessionBoilerplate();
      if (this.usingBundle) {
        sdp += 'a=group:BUNDLE ' + this.transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.isDatachannel) {
          sdp += 'm=application 0 DTLS/SCTP 5000\r\n' +
              'c=IN IP4 0.0.0.0\r\n' +
              'a=mid:' + transceiver.mid + '\r\n';
          return;
        }
        // Calculate intersection of capabilities.
        var commonCapabilities = self._getCommonCapabilities(
            transceiver.localCapabilities,
            transceiver.remoteCapabilities);

        sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
            'answer', self.localStreams[0]);
      });

      var desc = new RTCSessionDescription({
        type: 'answer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
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
          if (cand.component !== '1') {
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

    window.RTCPeerConnection.prototype.getStats = function() {
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
        stat.type = {
          inboundrtp: 'inbound-rtp',
          outboundrtp: 'outbound-rtp',
          candidatepair: 'candidate-pair',
          localcandidate: 'local-candidate',
          remotecandidate: 'remote-candidate'
        }[stat.type] || stat.type;
        return stat;
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
  }
};

// Expose public methods.
module.exports = {
  shimPeerConnection: edgeShim.shimPeerConnection,
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


// Expose public methods.
module.exports = function() {
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


var browserDetails = __webpack_require__(13).browserDetails;

var firefoxShim = {
  shimOnTrack: function() {
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

  shimSourceObject: function() {
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

  shimPeerConnection: function() {
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
        return new mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = mozRTCSessionDescription;
      window.RTCIceCandidate = mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        RTCPeerConnection.prototype.addIceCandidate;
    RTCPeerConnection.prototype.addIceCandidate = function() {
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

    var nativeGetStats = RTCPeerConnection.prototype.getStats;
    RTCPeerConnection.prototype.getStats = function(selector, onSucc, onErr) {
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
  shimGetUserMedia: __webpack_require__(171)
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


var logging = __webpack_require__(13).log;
var browserDetails = __webpack_require__(13).browserDetails;

// Expose public methods.
module.exports = function() {
  var shimError_ = function(e) {
    return {
      name: {
        SecurityError: 'NotAllowedError',
        PermissionDeniedError: 'NotAllowedError'
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
/* 172 */
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
  // shimOnTrack: function() { },

  // TODO: once the back-end for the mac port is done, add.
  // TODO: check for webkitGTK+
  // shimPeerConnection: function() { },

  shimGetUserMedia: function() {
    navigator.getUserMedia = navigator.webkitGetUserMedia;
  }
};

// Expose public methods.
module.exports = {
  shimGetUserMedia: safariShim.shimGetUserMedia
  // TODO
  // shimOnTrack: safariShim.shimOnTrack,
  // shimPeerConnection: safariShim.shimPeerConnection
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(1),_createClass3=_interopRequireDefault(_createClass2),_Browser=__webpack_require__(85),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Codec=__webpack_require__(86),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(4),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Reach=function(){function Reach(url){var cfg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;(0,_classCallCheck3.default)(this,Reach);_cache2.default.base=url;_cache2.default.config=cfg;this._callbacks={};}(0,_createClass3.default)(Reach,[{key:'register',value:function register(email,password,name,rememberMe){var _this=this;return _cache2.default.base.createUser(email,password).then(function(auth){if(auth){return _this.login(email,password,name||email,rememberMe);}}).catch(Log.r('Reach~register'));}},{key:'login',value:function login(email,password,name){var rememberMe=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false,p=_promise2.default.resolve();if(this.current&&this.current.email!==email){p=this.logout();}return p.then(function(){return _cache2.default.base.authWithPassword({email:email,password:password,rememberMe:rememberMe});}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~login'));}},{key:'resume',value:function resume(){var _this2=this;return new _promise2.default(function(resolve,reject){if(_webcom2.default.INTERNAL.PersistentStorage.get('session')){_cache2.default.base.resume(function(error,auth){if(auth&&!_this2.current){_User2.default.init(auth.uid).then(function(u){_cache2.default.user=u;resolve(u);},reject);}});}else{reject(new Error('No session to resume'));}});}},{key:'anonymous',value:function anonymous(name){var p=_promise2.default.resolve();if(this.current&&(!this.current.anonymous||this.current.name!==name)){p=this.logout();}return p.then(function(){return _cache2.default.base.authAnonymously();}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~anonymous'));}},{key:'logout',value:function logout(){var _this3=this;return new _promise2.default(function(resolve,reject){var p=_promise2.default.resolve();if(_this3.current!=null){p=_User2.default.disconnect(_this3.current);}p.then(function(){(0,_keys2.default)(_this3._callbacks).forEach(function(event){return DataSync.off(Events.reach.toPath(event)(_cache2.default.user),event);});_cache2.default.base.logout(function(){_cache2.default.user=null;resolve();});}).catch(function(e){Log.e(e);reject(e);});});}},{key:'users',value:function users(include){var _this4=this;return DataSync.list('users',_User2.default).then(function(users){return!include&&users&&_this4.current?users.filter(function(user){return user.uid!==_this4.current.uid;}):users;}).catch(Log.r('Reach~users'));}},{key:'rooms',value:function rooms(){return DataSync.list('rooms',_Room2.default).catch(Log.r('Reach~rooms'));}},{key:'invites',value:function invites(){if(!this.current){return _promise2.default.reject(new Error('Cannot list invites without a User being logged in.'));}return DataSync.list('_/invites/'+this.current.uid,_Invite2.default).catch(Log.r('Reach~invites'));}},{key:'on',value:function on(event,callback,cancelCallback){var _this5=this,path=Events.reach.toPath(event)(_cache2.default.user);if(path){(function(){var cls=Events.reach.toClass(event),cb=function cb(snapData){var d=cls?new cls(snapData):null;Log.i('Reach~on('+event+')',d);callback(d);};DataSync.on(path,event,cb,cancelCallback);if(!_this5._callbacks[event]){_this5._callbacks[event]=[];}_this5._callbacks[event].push(cb);})();}}},{key:'createRoom',value:function createRoom(name,extra){var publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!this.current){return _promise2.default.reject(new Error('Cannot create a Room without a User being logged in.'));}return _Room2.default.create(name,extra,publicRoom);}},{key:'getRoom',value:function getRoom(uid){return _Room2.default.get(uid);}},{key:'getUser',value:function getUser(uid){return _User2.default.get(uid);}},{key:'base',get:function get(){return _cache2.default.base;}},{key:'config',get:function get(){return _cache2.default.config;}},{key:'current',get:function get(){return _cache2.default.user;}},{key:'peerConnections',get:function get(){return _cache2.default.peerConnections.stacks;}}],[{key:'version',get:function get(){return{sdk:'2.4.0',schema:'draft-00'};}},{key:'types',get:function get(){return _StreamTypes2.default;}},{key:'events',get:function get(){return{room:Events.room,reach:Events.reach,stream:Events.stream,invite:Events.invite};}},{key:'browser',get:function get(){return _Browser.browser;}},{key:'media',get:function get(){return _Media2.default;}},{key:'codecs',get:function get(){return{audio:_Codec.audio,video:_Codec.video};}}]);return Reach;}();exports.default=Reach;module.exports=Reach;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNTMwOTAzOGY4ODAwZWI2MTI4NCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL2NhY2hlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvRGF0YVN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvUm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0ludml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1BhcnRpY2lwYW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9SZW1vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9Ccm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9Db2RlYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9Mb2NhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHJlYW0vU3RyZWFtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9mbi9hcnJheS9maW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vc2RwL3NkcC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2FkYXB0ZXJfY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvY2hyb21lX3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvY2hyb21lL2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL2VkZ2Vfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2ZpcmVmb3hfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWNoLmpzIl0sIm5hbWVzIjpbIl9jYWNoZSIsIkNhY2hlTWFuYWdlciIsInVybCIsIl9iYXNlIiwiY29uZmlnIiwiX2NvbmZpZyIsImFzc2lnbiIsInVzZXIiLCJfdXNlciIsImRldmljZSIsIl9kZXZpY2UiLCJsZXZlbCIsInRlc3QiLCJfbG9nTGV2ZWwiLCJFcnJvciIsIl9zdHJlYW1zIiwiX3BlZXJDb25uZWN0aW9ucyIsImNhY2hlIiwibGV2ZWxzIiwiaXNFbmFibGVkIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwibG9nTGV2ZWwiLCJnQ29uc29sZSIsImdsb2JhbCIsImxvZ2dlciIsIm1ldGhvZCIsIm1lc3NhZ2VzIiwidG9Mb3dlckNhc2UiLCJiaW5kIiwiZ3JvdXAiLCJtZXNzYWdlIiwiaXRlbXMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJjb25jYXQiLCJBcnJheSIsImZvckVhY2giLCJpdGVtIiwiZ3JvdXBFbmQiLCJkIiwiaSIsInciLCJlIiwiZXJyb3IiLCJyIiwicmVhc29uIiwicmVqZWN0IiwiZXZlbnRUeXBlIiwiZXZlbnQiLCJldnQiLCJfd3JpdGUiLCJwYXRoIiwiZGF0YSIsInJlc29sdmUiLCJiYXNlIiwiY2hpbGQiLCJzZXQiLCJwdXNoIiwicHVzaFJlZiIsInVwZGF0ZSIsInJlbW92ZSIsIm9uY2UiLCJnZXQiLCJsaXN0IiwiVHlwZSIsInBhcmFtcyIsInRoZW4iLCJzbmFwRGF0YSIsInNuYXBDaGlsZCIsIm9uIiwicXVlcnlDYWxsYmFjayIsImNhbmNlbENhbGxiYWNrIiwib2ZmIiwiY2FsbGJhY2siLCJvbkRpc2Nvbm5lY3QiLCJ0cyIsIkRhdGUiLCJub3ciLCJPUEVORUQiLCJDTE9TRUQiLCJDTE9TSU5HIiwiQ09OTkVDVEVEIiwiTk9UX0NPTk5FQ1RFRCIsIldBU19DT05ORUNURUQiLCJPV05FUiIsIk1PREVSQVRPUiIsIlBBUlRJQ0lQQU5UIiwiTk9ORSIsIk9OR09JTkciLCJBQ0NFUFRFRCIsIlJFSkVDVEVEIiwiQ0FOQ0VMRUQiLCJEYXRhU3luYyIsIkV2ZW50cyIsIkxvZyIsIl9qb2luUm9vbSIsInJvb20iLCJyb2xlIiwicGFydGljaXBhbnQiLCJzdGF0dXMiLCJfam9pbmVkIiwidWlkIiwiUm9vbSIsInZhbCIsIm5hbWUiLCJvd25lciIsIl9wdWJsaWMiLCJleHRyYSIsIl9jYWxsYmFja3MiLCJsb2NhbFN0cmVhbXMiLCJtYXAiLCJrZXkiLCJyb29tSWQiLCJzdHJlYW1zIiwiZmlsdGVyIiwic3RyZWFtIiwiZnJvbSIsImNhdGNoIiwidXNlcnMiLCJfcGF0aCIsIl9kYXRhIiwiYWxsIiwic2VuZCIsInJlbW92ZVBhcnRpY2lwYW50IiwiaW52aXRlIiwidG8iLCJpbnZpdGVzIiwidG9QYXRoIiwib2JqIiwidG9DbGFzcyIsInR5cGVkQ2FsbGJhY2siLCJzdHJlYW1EYXRhIiwicmVtb3RlU3RyZWFtIiwiZ2V0UmVtb3RlIiwidHlwZSIsImxvY2FsU3RyZWFtQ29udGFpbmVyIiwiY29uc3RyYWludHMiLCJzaGFyZSIsImNhbmNlbCIsImxvY2FsU3RyZWFtIiwiY2xvc2UiLCJyZW1vdGVTdHJlYW1zIiwidW5TdWJzY3JpYmUiLCJsZWF2ZSIsIl9jbG9zZWQiLCJwdWJsaWNSb29tIiwicm9vbU1ldGFEYXRhIiwicm9vbUZ1bGxNZXRhRGF0YSIsIl9jcmVhdGVkIiwicm9vbVJlZiIsInByZXNldHMiLCJVSEQiLCJoIiwibWluIiwiRkhEIiwibWF4IiwiSEQiLCJTVkdBIiwiU0QiLCJWR0EiLCJfYXNzaWduRGV2aWNlIiwiY29uc3RyYWludCIsImRldmljZUlkIiwiZmFjaW5nTW9kZSIsIk1lZGlhIiwidmlkZW9Db25zdHJhaW50cyIsImF1ZGlvQ29uc3RyYWludHMiLCJ2aWRlb0RldmljZUlkIiwiYXVkaW9EZXZpY2VJZCIsInZpZGVvIiwicHJlc2V0IiwiZGltQ29uc3RyYWludCIsImRpbSIsImlkZWFsIiwid2lkdGgiLCJoZWlnaHQiLCJhdWRpbyIsIm1lZGlhU3RyZWFtIiwiY29udGFpbmVyIiwicHJldmlvdXMiLCJ2b2x1bWUiLCJ0YWdOYW1lIiwiZ2V0VmlkZW9UcmFja3MiLCJnZXRBdWRpb1RyYWNrcyIsIl9ub2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXV0b3BsYXkiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsInNyY09iamVjdCIsImRpc2FibGVkIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImRldmljZXMiLCJraW5kIiwiVVNFUiIsIkVOVklST05NRU5UIiwicGF0aHMiLCJjbGFzc2VzIiwiX0V2ZW50cyIsImtleXMiLCJzdXBwb3J0cyIsInJlcGxhY2UiLCJyZWFjaCIsIl9lbmRlZCIsInByb3AiLCJJbnZpdGUiLCJyZWYiLCJwYXJlbnQiLCJ0b3BpYyIsIl9saXN0ZW5lciIsInVwZGF0ZWQiLCJjYiIsImlkeCIsImZpbmRJbmRleCIsInNwbGljZSIsInNvbWUiLCJpbnZpdGVlIiwiaW52aXRlTWV0YURhdGEiLCJpbnZpdGVJZCIsImludml0ZVJlZiIsImluaXRpYWxpemluZyIsIlVzZXIiLCJsYXN0U2VlbiIsImFub255bW91cyIsImNyZWF0ZSIsIklOVEVSTkFMIiwiUGVyc2lzdGVudFN0b3JhZ2UiLCJkZXZpY2VNZXRhZGF0YSIsInNkayIsIndlYmNvbSIsIlNES19WRVJTSU9OIiwidXNlckFnZW50IiwiZGV2aWNlUmVmIiwiaW52aXRlSWRzIiwiaGFzQ29ubmVjdGVkRGV2aWNlcyIsIlJlZ0V4cCIsIkFVRElPIiwiVklERU8iLCJBVURJT19WSURFTyIsIlNDUkVFTl9TSEFSSU5HIiwiTWVzc2FnZSIsInRleHQiLCJuZXdUZXh0IiwiUGFydGljaXBhbnQiLCJSZW1vdGUiLCJyZW1vdGVTdHJlYW1Db250YWluZXIiLCJtdXRlZCIsInBlZXJDb25uZWN0aW9uIiwicGVlckNvbm5lY3Rpb25zIiwiYW5zd2VyIiwicGMiLCJzdWJzY3JpYmVkIiwiTVVURSIsIl9jbG9zZSIsInJlbW90ZSIsIm5vZGUiLCJicm93c2VyIiwiY29tcGF0aWJsZSIsIm1pblZlcnNpb24iLCJ2ZXJzaW9uIiwiYXJncyIsImxvZyIsIl9mbGF0dGVuU2VydmVycyIsIl9leHBhbmQiLCJzZXJ2ZXJzIiwidXNlcm5hbWUiLCJzZXJ2ZXIiLCJjcmVkZW50aWFsIiwidXJscyIsInVyaXMiLCJ1cmkiLCJDb25maWciLCJwcmVmZXJyZWRWaWRlb0NvZGVjIiwicHJlZmVycmVkQXVkaW9Db2RlYyIsInJlc2V0IiwiaWNlU2VydmVycyIsIl9pY2VTZXJ2ZXJzIiwiX2N1cnJlbnRTZXJ2ZXJzIiwiX25ld1NlcnZlcnMiLCJuZXdTZXJ2ZXIiLCJyZWR1Y2UiLCJjdXJyZW50IiwicyIsIkRldmljZSIsIm9zIiwiX2ZhY2luZ01vZGVzIiwiX2dldENvbnN0cmFpbnRWYWx1ZSIsImV4YWN0IiwiX3NldENvbnN0cmFpblZhbHVlIiwib3RoZXIiLCJ2YWx1ZSIsIkxvY2FsIiwiX2lucHV0cyIsImdldFVzZXJNZWRpYSIsImNvbnN0cmFpbnRzVmFsdWUiLCJtZWRpYSIsInRyYWNrIiwic3RhdGUiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJlbmFibGVkIiwibXV0ZSIsIl9zd2l0Y2hEZXZpY2UiLCJuZXh0IiwiY3VycmVudE1vZGVJZHgiLCJtZWRpYURldmljZSIsInNvcnQiLCJuZXh0RGV2aWNlIiwidiIsInN0b3AiLCJwcm9wcyIsInJldmVyc2UiLCJ1cGRhdGVDb25zdHJhaW50cyIsImRlZmF1bHRDb25zdHJhaW50cyIsIl9jb25zdHJhaW50cyIsIk1lZGlhU3RyZWFtIiwiY2hlY2tEZXZpY2VzIiwibGFiZWwiLCJkZXZpY2VJZHMiLCJhdHRhY2hTdHJlYW0iLCJyZW5lZ290aWF0ZSIsIl9tZWRpYSIsInJlbW92ZUNoaWxkIiwic3RyZWFtTWV0YURhdGEiLCJzaGFyZWRTdHJlYW0iLCJzdHJlYW1SZWYiLCJzaGFyZWQiLCJzdWJzY3JpYmVyIiwib2ZmZXIiLCJjbG9zZWRQQyIsIlN0cmVhbU1hbmFnZXIiLCJEdGxzU3J0cEtleUFncmVlbWVudCIsInNkcENvbnN0cmFpbnRzIiwiT2ZmZXJUb1JlY2VpdmVBdWRpbyIsInJlY2VpdmUiLCJPZmZlclRvUmVjZWl2ZVZpZGVvIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkciLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9DTE9TRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUiIsIl90b0pTT04iLCJvIiwidG9KU09OIiwiUGVlckNvbm5lY3Rpb24iLCJzdGFja0lkIiwic3RyZWFtSWQiLCJyZW1vdGVEZXZpY2UiLCJwdWJsaXNoIiwiX2xvY2FsUGF0aCIsIl9yZW1vdGVQYXRoIiwibmVnb3RpYXRlZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib3B0aW9uYWwiLCJtYW5kYXRvcnkiLCJvbmljZWNhbmRpZGF0ZSIsImNhbmRpZGF0ZSIsIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlIiwiaWNlQ29ubmVjdGlvblN0YXRlIiwiX2F0dGFjaFN0cmVhbSIsIl9yZW1vdGVJQ0VDYW5kaWRhdGVzIiwiaXNDb25uZWN0ZWQiLCJvbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlIiwiaWNlR2F0aGVyaW5nU3RhdGUiLCJfc3RhdHVzIiwibGlzdGVuIiwic25hcCIsImFkZEljZUNhbmRpZGF0ZSIsIlJUQ0ljZUNhbmRpZGF0ZSIsImh0bWxFbGVtZW50IiwicHJvdG90eXBlIiwib250cmFjayIsIm9uYWRkc3RyZWFtIiwic2RwT2ZmZXIiLCJzZXRSZW1vdGVEZXNjcmlwdGlvbiIsInJlbW90ZURlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiX3NldFByZWZlcnJlZENvZGVjcyIsImRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJzZW5kVGltZW91dCIsIm9ubmVnb3RpYXRpb25uZWVkZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3NlbmRPZmZlciIsInNkcEFuc3dlciIsIl9hbHRlclN0cmVhbSIsImNyZWF0ZU9mZmVyIiwib2xkU3RyZWFtIiwibmV3U3RyZWFtIiwiZ2V0U2VuZGVycyIsIm5ld1RyYWNrcyIsInNlbmRlciIsInJlcGxhY2VUcmFjayIsInNpZ25hbGluZ1N0YXRlIiwib25zaWduYWxpbmdzdGF0ZWNoYW5nZSIsInNkcExpbmVzIiwic2RwIiwic3BsaXQiLCJtZWRpYXMiLCJzZHBMaW5lIiwiZXhlYyIsImZtdCIsImluZGV4IiwiY29kZWNzIiwiYyIsImlkIiwicHJlZmVyIiwibWVkaWFMaXN0IiwicHJlZmVyZWRDb2RlYyIsInNlbGVjdGVkIiwiZmluZCIsImNvZGVjIiwiaWRzIiwiam9pbiIsIl9yZW1vdGVTdHJlYW0iLCJnZXRTdGFja0lkIiwiaWQxIiwiaWQyIiwibG9jYWxlQ29tcGFyZSIsIlBlZXJDb25uZWN0aW9uTWFuYWdlciIsInN0YWNrcyIsImdldFBlZXJDb25uZWN0aW9uIiwiUmVhY2giLCJjZmciLCJlbWFpbCIsInBhc3N3b3JkIiwicmVtZW1iZXJNZSIsImNyZWF0ZVVzZXIiLCJhdXRoIiwibG9naW4iLCJwIiwibG9nb3V0IiwiYXV0aFdpdGhQYXNzd29yZCIsImluaXQiLCJ1IiwicmVzdW1lIiwiYXV0aEFub255bW91c2x5IiwiZGlzY29ubmVjdCIsImluY2x1ZGUiLCJjbHMiLCJzY2hlbWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNSQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7O0FDMUJELDZCQUE2QjtBQUM3QixxQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qjs7Ozs7OztpckJDQUEsR0FBSUEsUUFBUyxJQUFiLEMsR0FNTUMsYSxZQUtMLHVCQUFjLGlEQUNiLEdBQUcsQ0FBQ0QsTUFBSixDQUFZLENBQ1hBLE9BQVMsSUFBVCxDQUNBLENBQ0QsTUFBT0EsT0FBUCxDQUNBLEMscUVBS1FFLEcsQ0FBSyxDQUliLEtBQUtDLEtBQUwsQ0FBYUQsZ0NBQXdCQSxHQUF4QixDQUE4QixxQkFBV0EsR0FBWCxDQUEzQyxDQUNBLEMsbUJBS1UsQ0FDVixNQUFPLE1BQUtDLEtBQVosQ0FDQSxDLGlDQU1VQyxNLENBQVEsQ0FDbEIsR0FBRyxDQUFDLEtBQUtDLE9BQVQsQ0FBa0IsQ0FJakIsS0FBS0EsT0FBTCxDQUFlLHFCQUFXRCxNQUFYLENBQWYsQ0FDQSxDQUxELElBS08sQ0FDTixLQUFLQyxPQUFMLENBQWFDLE1BQWIsQ0FBb0JGLE1BQXBCLEVBQ0EsQ0FDRCxDLG1CQUtZLENBQ1osR0FBRyxDQUFDLEtBQUtDLE9BQVQsQ0FBa0IsQ0FDakIsS0FBS0EsT0FBTCxDQUFlLHNCQUFmLENBQ0EsQ0FDRCxNQUFPLE1BQUtBLE9BQVosQ0FDQSxDLCtCQUtRRSxJLENBQU0sQ0FJZCxLQUFLQyxLQUFMLENBQWFELElBQWIsQ0FDQSxDLG1CQUtVLENBQ1YsTUFBTyxNQUFLQyxLQUFaLENBQ0EsQyxpQ0FLVUMsTSxDQUFRLENBSWxCLEtBQUtDLE9BQUwsQ0FBZUQsTUFBZixDQUNBLEMsbUJBS1ksQ0FDWixNQUFPLE1BQUtDLE9BQVosQ0FDQSxDLG1DQU1ZQyxLLENBQU8sQ0FDbkIsR0FBRywyQkFBMkJDLElBQTNCLENBQWdDRCxLQUFoQyxDQUFILENBQTJDLENBSTFDLEtBQUtFLFNBQUwsQ0FBaUJGLEtBQWpCLENBQ0EsQ0FMRCxJQUtPLElBQUdBLEtBQUgsQ0FBVSxDQUNoQixLQUFNLElBQUlHLE1BQUosQ0FBVSxrREFBVixDQUFOLENBQ0EsQ0FDRCxDLG1CQUtjLENBQ2QsTUFBTyxNQUFLRCxTQUFMLEVBQWtCLE9BQXpCLENBQ0EsQyxtQ0FNYSxDQUNiLEdBQUcsQ0FBQyxLQUFLRSxRQUFULENBQW1CLENBSWxCLEtBQUtBLFFBQUwsQ0FBZ0IsNkJBQWhCLENBQ0EsQ0FDRCxNQUFPLE1BQUtBLFFBQVosQ0FDQSxDLDJDQU1xQixDQUNyQixHQUFHLENBQUMsS0FBS0MsZ0JBQVQsQ0FBMkIsQ0FJMUIsS0FBS0EsZ0JBQUwsQ0FBd0IscUNBQXhCLENBQ0EsQ0FDRCxNQUFPLE1BQUtBLGdCQUFaLENBQ0EsQyw0QkFRRixHQUFNQyxPQUFRLEdBQUloQixhQUFKLEVBQWQsQyxnQkFNZWdCLEs7Ozs7OztBQ3RLZjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0M7Ozs7Ozs7cWRDSXZDLEdBQU1DLFFBQVMsQ0FBQyxPQUFELENBQVUsTUFBVixDQUFrQixNQUFsQixDQUEwQixPQUExQixDQUFmLENBT01DLFVBQVksUUFBWkEsVUFBWSxPQUFTLENBQzFCLE1BQU9ELFFBQU9FLE9BQVAsQ0FBZVQsTUFBTVUsV0FBTixFQUFmLEdBQXVDSCxPQUFPRSxPQUFQLENBQWUsZ0JBQU1FLFFBQU4sQ0FBZUQsV0FBZixFQUFmLENBQTlDLENBQ0EsQ0FURCxDQWVNRSxTQUFXQyxjQWZqQixDQXVCTUMsT0FBUyxRQUFUQSxPQUFTLENBQUNDLE1BQUQsQ0FBU2YsS0FBVCxDQUFnQywrQkFBYmdCLFFBQWEsaURBQWJBLFFBQWEsMEJBQzlDUixVQUFVUixLQUFWLEVBQW1CWSxTQUFTRyxPQUFPRSxXQUFQLEVBQVQsRUFBK0JDLElBQS9CLENBQW9DTixRQUFwQyxrQkFBaURJLFFBQWpELENBQW5CLENBQWdGLFVBQU0sQ0FBRSxDQUF4RixDQUNBLENBekJELENBaUNNRyxNQUFRLFFBQVJBLE1BQVEsQ0FBQ25CLEtBQUQsQ0FBUW9CLE9BQVIsQ0FBOEIsZ0NBQVZDLEtBQVUsdURBQVZBLEtBQVUsNEJBQzNDLEdBQUlBLE1BQU1DLE1BQU4sQ0FBZSxDQUFuQixDQUFzQixDQUNyQlIsT0FBT0ksSUFBUCxDQUFZSyxTQUFaLENBQXVCWCxTQUFTTyxLQUFULENBQWlCLE9BQWpCLENBQTJCbkIsS0FBbEQsQ0FBeURBLEtBQXpELEVBQWdFLE1BQU9vQixRQUFQLEdBQW1CLFFBQW5CLENBQThCQSxPQUE5QixDQUF3QyxFQUF4RyxFQUNBLEdBQUlJLFFBQVMsQ0FBQyxNQUFPSixRQUFQLEdBQW1CLFFBQW5CLENBQThCLENBQUNBLE9BQUQsQ0FBOUIsQ0FBMEMsRUFBM0MsRUFBK0NLLE1BQS9DLENBQXNESixLQUF0RCxDQUFiLENBQ0EsR0FBSUEsTUFBTUMsTUFBTixHQUFpQixDQUFqQixFQUFzQkQsTUFBTSxDQUFOLFdBQW9CSyxNQUExQyxFQUFtRCxxQkFBT0wsTUFBTSxDQUFOLEVBQVNDLE1BQWhCLElBQTJCQyxTQUFsRixDQUE2RixDQUM1RkMsT0FBU0gsTUFBTSxDQUFOLENBQVQsQ0FDQSxDQUNERyxPQUFPRyxPQUFQLENBQWUscUJBQVFiLFFBQU9JLElBQVAsQ0FBWUssU0FBWixDQUF1QnZCLEtBQXZCLENBQThCQSxLQUE5QixFQUFxQzRCLElBQXJDLENBQVIsRUFBZixFQUNBaEIsU0FBU2lCLFFBQVQsRUFBcUJqQixTQUFTaUIsUUFBVCxFQUFyQixDQUNBLENBUkQsSUFRTyxDQUNOZixPQUFPSSxJQUFQLENBQVlLLFNBQVosQ0FBdUJ2QixLQUF2QixDQUE4QkEsS0FBOUIsQ0FBcUNvQixPQUFyQyxFQUNBLENBQ0QsQ0E3Q0QsQ0FvRE8sR0FBTVUsYUFBSVgsTUFBTUQsSUFBTixDQUFXSyxTQUFYLENBQXNCaEIsT0FBTyxDQUFQLENBQXRCLENBQVYsQ0FNQSxHQUFNd0IsYUFBSVosTUFBTUQsSUFBTixDQUFXSyxTQUFYLENBQXNCaEIsT0FBTyxDQUFQLENBQXRCLENBQVYsQ0FNQSxHQUFNeUIsYUFBSWIsTUFBTUQsSUFBTixDQUFXSyxTQUFYLENBQXNCaEIsT0FBTyxDQUFQLENBQXRCLENBQVYsQ0FNQSxHQUFNMEIsYUFBSXJCLFNBQVNzQixLQUFULENBQWVoQixJQUFmLENBQW9CTixRQUFwQixDQUFWLENBT0EsR0FBTXVCLGFBQUksUUFBSkEsRUFBSSxnQkFBVyxpQkFBVSxDQUNyQ0wsRUFBRVYsT0FBRixDQUFXZ0IsTUFBWCxFQUNBLE1BQU8sbUJBQVFDLE1BQVIsQ0FBZUQsUUFBVWhCLE9BQXpCLENBQVAsQ0FDQSxDQUhnQixFQUFWLEM7Ozs7Ozs7QUNwRlAsa0JBQWtCLHlEOzs7Ozs7OzJoQkNRWCxHQUFNa0IsNkJBQVksUUFBWkEsVUFBWSxDQUFDQyxLQUFELENBQVcsQ0FDbkMsR0FBSUMsV0FBSixDQUNBLEdBQUksVUFBRCxDQUFhdkMsSUFBYixDQUFrQnNDLEtBQWxCLEdBQTRCLGNBQWN0QyxJQUFkLENBQW1Cc0MsS0FBbkIsQ0FBL0IsQ0FBMEQsQ0FDekRDLElBQU0sT0FBTixDQUNBLENBRkQsSUFFTyxJQUFHLFlBQVl2QyxJQUFaLENBQWlCc0MsS0FBakIsR0FBMkIsY0FBY3RDLElBQWQsQ0FBbUJzQyxLQUFuQixDQUE5QixDQUF5RCxDQUMvREMsSUFBTSxTQUFOLENBQ0EsQ0FGTSxJQUVBLElBQUcsWUFBWXZDLElBQVosQ0FBaUJzQyxLQUFqQixHQUEyQixnQkFBZ0J0QyxJQUFoQixDQUFxQnNDLEtBQXJCLENBQTlCLENBQTJELENBQ2pFQyxJQUFNLFNBQU4sQ0FDQSxDQUNELE1BQU9BLGNBQWVBLEdBQWYsQ0FBdUJELEtBQTlCLENBQ0EsQ0FWTSxDQW1CUCxHQUFNRSxRQUFTLFFBQVRBLE9BQVMsQ0FBQzFCLE1BQUQsQ0FBUzJCLElBQVQsQ0FBZUMsSUFBZixRQUF3Qix1QkFBWSxTQUFDQyxPQUFELENBQVVQLE1BQVYsQ0FBcUIsQ0FDdkUsZ0JBQU1RLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUIzQixNQUF2QixFQUErQjRCLElBQS9CLENBQXFDLHNCQUFTVCxPQUFRRyxPQUFPSCxLQUFQLENBQVIsQ0FBd0JVLFNBQWpDLEVBQXJDLEVBQ0EsQ0FGc0MsQ0FBeEIsRUFBZixDQVdPLEdBQU1HLGlCQUFNTixPQUFPdkIsSUFBUCxDQUFZSyxTQUFaLENBQXVCLEtBQXZCLENBQVosQ0FTQSxHQUFNeUIsbUJBQU8sUUFBUEEsS0FBTyxDQUFDTixJQUFELENBQU9DLElBQVAsUUFBZ0IsdUJBQVksU0FBQ0MsT0FBRCxDQUFVUCxNQUFWLENBQXFCLENBQ3BFLEdBQU1ZLFNBQVUsZ0JBQU1KLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUJNLElBQXZCLENBQTRCTCxJQUE1QixDQUFrQyxzQkFBU1QsT0FBUUcsT0FBT0gsS0FBUCxDQUFSLENBQXdCVSxRQUFRSyxPQUFSLENBQWpDLEVBQWxDLENBQWhCLENBQ0EsQ0FGbUMsQ0FBaEIsRUFBYixDQVdBLEdBQU1DLHVCQUFTVCxPQUFPdkIsSUFBUCxDQUFZSyxTQUFaLENBQXVCLFFBQXZCLENBQWYsQ0FRQSxHQUFNNEIsdUJBQVMsUUFBVEEsT0FBUyxDQUFDVCxJQUFELFFBQVUsdUJBQVksU0FBQ0UsT0FBRCxDQUFVUCxNQUFWLENBQXFCLENBQ2hFLGdCQUFNUSxJQUFOLENBQVdDLEtBQVgsQ0FBaUJKLElBQWpCLEVBQXVCUyxNQUF2QixDQUE4QixzQkFBU2pCLE9BQVFHLE9BQU9ILEtBQVAsQ0FBUixDQUF3QlUsU0FBakMsRUFBOUIsRUFDQSxDQUYrQixDQUFWLEVBQWYsQ0FXQSxHQUFNUSxtQkFBTyxRQUFQQSxLQUFPLENBQUNWLElBQUQsQ0FBT0gsS0FBUCxRQUFpQix1QkFBWSxTQUFDSyxPQUFELENBQVVQLE1BQVYsQ0FBcUIsQ0FDckUsZ0JBQU1RLElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUJVLElBQXZCLENBQTRCZCxVQUFVQyxLQUFWLENBQTVCLENBQThDSyxPQUE5QyxDQUF1RFAsTUFBdkQsRUFDQSxDQUZvQyxDQUFqQixFQUFiLENBVUEsR0FBTWdCLGlCQUFNLFFBQU5BLElBQU0sYUFBUUQsTUFBS1YsSUFBTCxDQUFXLE9BQVgsQ0FBUixFQUFaLENBVUEsR0FBTVksbUJBQU8sUUFBUEEsS0FBTyxDQUFDWixJQUFELENBQU9hLElBQVAsQ0FBMkIsK0JBQVhDLE1BQVcsaURBQVhBLE1BQVcsMEJBQzlDLE1BQU9ILEtBQUlYLElBQUosRUFBVWUsSUFBVixDQUFlLGtCQUFZLENBQ2pDLEdBQUdDLFFBQUgsQ0FBYSxxQkFDWixHQUFNbEMsUUFBUyxFQUFmLENBQ0FrQyxTQUFTL0IsT0FBVCxDQUFpQixtQkFBYSxDQUM3QkgsT0FBT3dCLElBQVAsbUNBQWdCTyxJQUFoQixnQkFBcUJJLFNBQXJCLEVBQW1DSCxNQUFuQyxPQUNBLENBRkQsRUFHQSxTQUFPaEMsTUFBUCxFQUxZLG1HQU1aLENBQ0QsQ0FSTSxDQUFQLENBU0EsQ0FWTSxDQW9CQSxHQUFNb0MsZUFBSyxRQUFMQSxHQUFLLENBQUNsQixJQUFELENBQU9ILEtBQVAsQ0FBY3NCLGFBQWQsQ0FBNkJDLGNBQTdCLENBQWdELENBQ2pFLGdCQUFNakIsSUFBTixDQUFXQyxLQUFYLENBQWlCSixJQUFqQixFQUF1QmtCLEVBQXZCLENBQTBCdEIsVUFBVUMsS0FBVixDQUExQixDQUE0Q3NCLGFBQTVDLENBQTJEQyxjQUEzRCxFQUNBLENBRk0sQ0FXQSxHQUFNQyxpQkFBTSxRQUFOQSxJQUFNLENBQUNyQixJQUFELENBQU9ILEtBQVAsQ0FBY3lCLFFBQWQsQ0FBMkIsQ0FDN0MsZ0JBQU1uQixJQUFOLENBQVdDLEtBQVgsQ0FBaUJKLElBQWpCLEVBQXVCcUIsR0FBdkIsQ0FBMkJ6QixVQUFVQyxLQUFWLENBQTNCLENBQTZDeUIsUUFBN0MsRUFDQSxDQUZNLENBVUEsR0FBTUMsbUNBQWUsUUFBZkEsYUFBZSxhQUFRLGlCQUFNcEIsSUFBTixDQUFXQyxLQUFYLENBQWlCSixJQUFqQixFQUF1QnVCLFlBQXZCLEVBQVIsRUFBckIsQ0FRQSxHQUFNQyxlQUFLLFFBQUxBLEdBQUssU0FBTUMsTUFBS0MsR0FBTCxFQUFOLEVBQVgsQzs7Ozs7O0FDbEpQLGtCQUFrQix5RDs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsVUFBVTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2ZBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUSxnQkFBZ0IsVUFBVSxHQUFHO0FBQ3RFLENBQUMsRTs7Ozs7O0FDSEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVLQSxrQkFBa0IseUQ7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLHlCOzs7Ozs7QUM1REEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxFOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsRTs7Ozs7Ozt5RENGTyxHQUFNQyx1QkFBUyxRQUFmLENBTUEsR0FBTUMsdUJBQVMsUUFBZixDQU1BLEdBQU1DLHlCQUFVLFNBQWhCLENBTUEsR0FBTUMsNkJBQVksV0FBbEIsQ0FNQSxHQUFNQyxxQ0FBZ0IsZUFBdEIsQ0FNQSxHQUFNQyxxQ0FBZ0IsZUFBdEIsQ0FNQSxHQUFNQyxxQkFBUSxPQUFkLENBTUEsR0FBTUMsNkJBQVksV0FBbEIsQ0FNQSxHQUFNQyxpQ0FBYyxhQUFwQixDQU1BLEdBQU1DLG1CQUFPLE1BQWIsQ0FNQSxHQUFNQyx5QkFBVSxTQUFoQixDQU1BLEdBQU1DLDJCQUFXLFVBQWpCLENBTUEsR0FBTUMsMkJBQVcsVUFBakIsQ0FNQSxHQUFNQywyQkFBVyxVQUFqQixDOzs7Ozs7QUNuRlA7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ05BLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNGQSxvQjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0M7Ozs7Ozs7a2hCQ0YzQkMsUSw0YkFNQUMsTSw4REFDQUMsRyw0VkFHWixHQUFNQyxXQUFZLFFBQVpBLFVBQVksQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQWdCLENBQ2pDLEdBQU1DLGFBQWMsQ0FDbkJDLDJCQURtQixDQUVuQkMsUUFBU1IsU0FBU2pCLEVBQVQsRUFGVSxDQUFwQixDQUlBLEdBQUdzQixJQUFILENBQVMsQ0FDUkMsWUFBWUQsSUFBWixDQUFtQkEsSUFBbkIsQ0FDQSxDQUNESCxJQUFJckQsQ0FBSixDQUFNLFdBQU4sQ0FBbUIsQ0FBQ3lELFdBQUQsWUFBeUJGLEtBQUtLLEdBQTlCLGtCQUFrRCxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBQTdELENBQW5CLEVBQ0EsTUFBT1QsVUFDTGpDLE1BREssWUFDYXFDLEtBQUtLLEdBRGxCLGtCQUNzQyxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBRGpELENBQ3dESCxXQUR4RCxFQUVMaEMsSUFGSyxDQUVBLFVBQU0sQ0FDWDBCLFNBQ0VsQixZQURGLFlBQzBCc0IsS0FBS0ssR0FEL0Isa0JBQ21ELGdCQUFNaEcsSUFBTixDQUFXZ0csR0FEOUQsWUFFRTdDLEdBRkYsMkJBR0EsTUFBT3dDLEtBQVAsQ0FDQSxDQVBLLENBQVAsQ0FRQSxDQWpCRCxDLEdBdUJxQk0sSyxZQU1wQixjQUFZbkMsUUFBWixDQUFzQix5Q0FDckIsR0FBSWxDLFFBQVNrQyxRQUFiLENBQ0EsR0FBR0EsVUFBWUEsU0FBU29DLEdBQXJCLEVBQTRCLE1BQU9wQyxVQUFTb0MsR0FBaEIsR0FBd0IsVUFBdkQsQ0FBa0UsQ0FDakV0RSxPQUFTLHFCQUFjLEVBQWQsQ0FBa0JrQyxTQUFTb0MsR0FBVCxFQUFsQixDQUFrQyxDQUFDRixJQUFLbEMsU0FBU3FDLElBQVQsRUFBTixDQUFsQyxDQUFULENBQ0EsQ0FLRCxLQUFLSCxHQUFMLENBQVdwRSxPQUFPb0UsR0FBbEIsQ0FLQSxLQUFLRyxJQUFMLENBQVl2RSxPQUFPdUUsSUFBbkIsQ0FLQSxLQUFLQyxLQUFMLENBQWF4RSxPQUFPd0UsS0FBcEIsQ0FPQSxLQUFLTixNQUFMLENBQWNsRSxPQUFPa0UsTUFBckIsQ0FNQSxLQUFLTyxPQUFMLENBQWUsQ0FBQyxDQUFDekUsT0FBT3lFLE9BQXhCLENBTUEsS0FBS0MsS0FBTCxDQUFhMUUsT0FBTzBFLEtBQXBCLENBTUEsS0FBS0MsVUFBTCxDQUFrQixFQUFsQixDQUNBLEMsaUZBT2MsQ0FDZCxNQUFPaEIsVUFBUzdCLElBQVQsWUFBeUIsS0FBS3NDLEdBQTlCLHVDQUErRCxLQUFLQSxHQUFwRSxDQUFQLENBQ0EsQywyQ0FPVSxDQUNWLE1BQU9ULFVBQVM3QixJQUFULFlBQXlCLEtBQUtzQyxHQUE5QiwrQkFBdUQsS0FBS0EsR0FBNUQsQ0FBUCxDQUNBLEMsMENBT1FRLFksQ0FBYyxnQkFDdEIsR0FBRyxDQUFDLGdCQUFNeEcsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSx3REFBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU9nRixVQUFTOUIsR0FBVCxZQUF3QixLQUFLdUMsR0FBN0IsYUFDTG5DLElBREssQ0FDQSxrQkFBWSxDQUNqQixHQUFNakMsUUFBU2tDLFNBQVNvQyxHQUFULEVBQWYsQ0FDQVQsSUFBSXZELENBQUosQ0FBTSxnQkFBTixDQUF3Qk4sTUFBeEIsRUFDQSxHQUFHQSxNQUFILENBQVcsQ0FDVixNQUFPLG1CQUFZQSxNQUFaLEVBQW9CNkUsR0FBcEIsQ0FBd0Isb0JBQU8scUJBQWMsQ0FBQ1QsSUFBS1UsR0FBTixDQUFXQyxPQUFRLE1BQUtYLEdBQXhCLENBQWQsQ0FBNENwRSxPQUFPOEUsR0FBUCxDQUE1QyxDQUFQLEVBQXhCLENBQVAsQ0FDQSxDQUNELE1BQU8sRUFBUCxDQUNBLENBUkssRUFTTDdDLElBVEssQ0FTQSx3QkFBVytDLFNBQVFDLE1BQVIsQ0FBZSxnQkFBVSxDQUN6QyxNQUFPTCxpQkFBa0JNLE9BQU81RyxNQUFQLEdBQWtCLGdCQUFNQSxNQUF4QixFQUFrQzRHLE9BQU9DLElBQVAsR0FBZ0IsZ0JBQU0vRyxJQUFOLENBQVdnRyxHQUEvRSxDQUFQLENBQ0EsQ0FGZ0IsQ0FBWCxFQVRBLEVBWUxuQyxJQVpLLENBWUEsd0JBQVcrQyxTQUFRSCxHQUFSLENBQVksZ0JBQU1HLE9BQU4sUUFBb0JKLGFBQWUsUUFBZixDQUEwQixRQUE5QyxHQUEwRGxGLElBQTFELENBQStELGdCQUFNc0YsT0FBckUsQ0FBWixDQUFYLEVBWkEsRUFhTC9DLElBYkssQ0FhQSx3QkFBVytDLFNBQVFDLE1BQVIsQ0FBZSx1QkFBVUMsVUFBVyxJQUFyQixFQUFmLENBQVgsRUFiQSxDQUFQLENBY0EsQyxtREFPYyxDQUNkLE1BQU8sTUFBS3RHLFFBQUwsQ0FBYyxJQUFkLEVBQ0x3RyxLQURLLENBQ0N2QixJQUFJbEQsQ0FBSixDQUFNLG1CQUFOLENBREQsQ0FBUCxDQUVBLEMscURBT2UsQ0FDZixNQUFPLE1BQUsvQixRQUFMLENBQWMsS0FBZCxFQUNMd0csS0FESyxDQUNDdkIsSUFBSWxELENBQUosQ0FBTSxvQkFBTixDQURELENBQVAsQ0FFQSxDLHNDQVVNMEUsSyxDQUE2QixpQkFBdEJyQixJQUFzQiwyRUFBVHBFLE9BQVMsY0FFbEMwRixNQUFRLFFBQVJBLE1BQVEsd0JBQW1CLE9BQUtsQixHQUF4QixrQkFBNENoRyxLQUFLZ0csR0FBakQsRUFGMEIsQ0FHbENtQixNQUFRLENBQ1ByQiwrQkFETyxDQUVQRixLQUFNQSxxQkFGQyxDQUgwQixDQVFuQyxNQUFPLG1CQUFRd0IsR0FBUixDQUFZSCxNQUFNUixHQUFOLENBQVUscUJBQVFsQixVQUFTcEMsR0FBVCxDQUFhK0QsTUFBTWxILElBQU4sQ0FBYixDQUEwQm1ILEtBQTFCLENBQVIsRUFBVixDQUFaLEVBRUx0RCxJQUZLLENBRUEsaUJBQU0sbUJBQVF1RCxHQUFSLENBQVlILE1BQU1SLEdBQU4sQ0FBVSxxQkFBUSxrQkFBT1ksSUFBUCxDQUFZckgsSUFBWixRQUF3QndCLE9BQXhCLENBQVIsRUFBVixDQUFaLENBQU4sRUFGQSxFQUdMcUMsSUFISyxDQUdBLGlCQUFXLENBQ2hCLEdBQU15RCxtQkFBb0IsUUFBcEJBLGtCQUFvQixlQUFVL0IsVUFBU2hDLE1BQVQsWUFBMkJnRSxPQUFPNUIsSUFBbEMsa0JBQXVENEIsT0FBT0MsRUFBOUQsQ0FBVixFQUExQixDQUNBQyxRQUFRMUYsT0FBUixDQUFnQixnQkFBVSxDQUN6QndGLE9BQU92RCxFQUFQLHFCQUFvQnNELGlCQUFwQixFQUNBQyxPQUFPdkQsRUFBUCxxQkFBb0JzRCxpQkFBcEIsRUFDQSxDQUhELEVBSUEsTUFBTyxDQUFDM0IsV0FBRCxDQUFhOEIsZUFBYixDQUFQLENBQ0EsQ0FWSyxFQVdMVCxLQVhLLENBV0MsV0FBSyxDQUNYdkIsSUFBSXBELENBQUosQ0FBTSxhQUFOLENBQXFCQSxDQUFyQixFQUNBNEUsTUFBTWxGLE9BQU4sQ0FBYyxxQkFBUXdELFVBQVNoQyxNQUFULFlBQTJCLE9BQUt5QyxHQUFoQyxrQkFBb0RoRyxLQUFLZ0csR0FBekQsQ0FBUixFQUFkLEVBQ0EsTUFBTyxtQkFBUXZELE1BQVIsQ0FBZUosQ0FBZixDQUFQLENBQ0EsQ0FmSyxDQUFQLENBZ0JBLEMsOEJBb0JFTSxLLENBQU95QixRLENBQVVGLGMsQ0FBZ0IsaUJBRWxDcEIsS0FBTzBDLE9BQU9HLElBQVAsQ0FBWStCLE1BQVosQ0FBbUIvRSxLQUFuQixFQUEwQixJQUExQixDQUYyQixDQUdsQ2dGLElBQU1uQyxPQUFPRyxJQUFQLENBQVlpQyxPQUFaLENBQW9CakYsS0FBcEIsQ0FINEIsQ0FJbkMsR0FBR0csTUFBUTZFLEdBQVgsQ0FBZ0IsQ0FDZixHQUFNRSxlQUFnQixRQUFoQkEsY0FBZ0IsVUFBWSxDQUNqQyxHQUFHLENBQUMsWUFBWXhILElBQVosQ0FBaUJzQyxLQUFqQixDQUFELEVBQTRCLENBQUNtQixRQUFoQyxDQUEwQyxDQUN6QzJCLElBQUl0RCxDQUFKLFlBQWlCUSxLQUFqQixLQUEyQm1CLFNBQVcsR0FBSTZELElBQUosQ0FBUTdELFFBQVIsQ0FBWCxDQUErQixJQUExRCxFQUNBTSxTQUFTTixTQUFXLEdBQUk2RCxJQUFKLENBQVE3RCxRQUFSLENBQVgsQ0FBK0IsSUFBeEMsRUFDQSxDQUhELElBR08sSUFBRyxnQkFBTTlELElBQVQsQ0FBZSxDQUNyQixHQUFNOEgsWUFBYSxxQkFBYyxDQUFDOUIsSUFBS2xDLFNBQVNxQyxJQUFULEVBQU4sQ0FBdUJRLE9BQVEsT0FBS1gsR0FBcEMsQ0FBZCxDQUF3RGxDLFNBQVNvQyxHQUFULEVBQXhELENBQW5CLENBQ0EsR0FBRzRCLFdBQVdmLElBQVgsR0FBb0IsZ0JBQU0vRyxJQUFOLENBQVdnRyxHQUEvQixFQUFzQzhCLFdBQVc1SCxNQUFYLEdBQXNCLGdCQUFNQSxNQUFyRSxDQUE2RSxDQUM1RSxHQUFNNkgsY0FBZSxnQkFBTW5CLE9BQU4sQ0FBY29CLFNBQWQsQ0FBd0JGLFVBQXhCLENBQXJCLENBQ0FyQyxJQUFJdEQsQ0FBSixZQUFpQlEsS0FBakIsS0FBMkJvRixZQUEzQixFQUNBM0QsU0FBUzJELFlBQVQsRUFDQSxDQUNELENBQ0QsQ0FaRCxDQWFBeEMsU0FBU3ZCLEVBQVQsQ0FBWWxCLElBQVosQ0FBa0JILEtBQWxCLENBQXlCa0YsYUFBekIsQ0FBd0MzRCxjQUF4QyxFQUNBLEdBQUcsQ0FBQyxLQUFLcUMsVUFBTCxDQUFnQjVELEtBQWhCLENBQUosQ0FBNEIsQ0FDM0IsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF5QixFQUF6QixDQUNBLENBQ0QsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF1QlMsSUFBdkIsQ0FBNEJ5RSxhQUE1QixFQUNBLENBQ0QsQyxnREFPV3JHLE8sQ0FBUyxDQUNwQixNQUFPLG1CQUFRNkYsSUFBUixDQUFhLElBQWIsQ0FBbUI3RixPQUFuQixDQUFQLENBQ0EsQyxvQ0FTS3lHLEksQ0FBTUMsb0IsQ0FBc0JDLFcsQ0FBYSxDQUM5QzFDLElBQUl0RCxDQUFKLENBQU0sWUFBTixDQUFvQixDQUFDOEYsU0FBRCxDQUFPQyx5Q0FBUCxDQUE2QkMsdUJBQTdCLENBQXBCLEVBQ0EsTUFBTyxpQkFBTUMsS0FBTixDQUFZLEtBQUtwQyxHQUFqQixDQUFzQmlDLElBQXRCLENBQTRCQyxvQkFBNUIsQ0FBa0RDLFdBQWxELENBQVAsQ0FDQSxDLG1DQU1NLENBQ04xQyxJQUFJdEQsQ0FBSixDQUFNLFdBQU4sQ0FBbUIsSUFBbkIsRUFDQSxHQUFHLENBQUMsZ0JBQU1uQyxJQUFWLENBQWdCLENBQ2YsTUFBTyxtQkFBUXlDLE1BQVIsQ0FBZSxHQUFJbEMsTUFBSixDQUFVLDZDQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsTUFBT21GLFdBQVUsSUFBVixFQUFnQnNCLEtBQWhCLENBQXNCdkIsSUFBSWxELENBQUosQ0FBTSxXQUFOLENBQXRCLENBQVAsQ0FDQSxDLHFDQU1PLGlCQUNQLEdBQUcsQ0FBQyxnQkFBTXZDLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsOENBQVYsQ0FBZixDQUFQLENBQ0EsQ0FDRGtGLElBQUl0RCxDQUFKLENBQU0sWUFBTixDQUFvQixJQUFwQixFQUVBb0QsU0FBU2xCLFlBQVQsWUFBaUMsS0FBSzJCLEdBQXRDLGtCQUEwRCxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBQXJFLFlBQW1GcUMsTUFBbkYsR0FHQSxtQkFBWSxLQUFLOUIsVUFBakIsRUFBNkJ4RSxPQUE3QixDQUFxQyxlQUFTLENBQzdDd0QsU0FBU3BCLEdBQVQsQ0FBYXFCLE9BQU9HLElBQVAsQ0FBWStCLE1BQVosQ0FBbUIvRSxLQUFuQixTQUFiLENBQThDQSxLQUE5QyxFQUNBLENBRkQsRUFJQSxLQUFLNkQsWUFBTCxHQUFvQjNDLElBQXBCLENBQXlCLDZCQUFnQjJDLGNBQWF6RSxPQUFiLENBQXFCLDRCQUFldUcsYUFBWUMsS0FBWixFQUFmLEVBQXJCLENBQWhCLEVBQXpCLEVBRUEsS0FBS0MsYUFBTCxHQUFxQjNFLElBQXJCLENBQTBCLDhCQUFpQjJFLGVBQWN6RyxPQUFkLENBQXNCLDZCQUFnQmdHLGNBQWFVLFdBQWIsRUFBaEIsRUFBdEIsQ0FBakIsRUFBMUIsRUFFQSxNQUFPbEQsVUFBU3BDLEdBQVQsWUFBd0IsS0FBSzZDLEdBQTdCLGtCQUFpRCxnQkFBTWhHLElBQU4sQ0FBV2dHLEdBQTVELHFDQUNMZ0IsS0FESyxDQUNDdkIsSUFBSWxELENBQUosQ0FBTSxZQUFOLENBREQsQ0FBUCxDQUVBLEMscUNBTU8saUJBQ1BrRCxJQUFJdEQsQ0FBSixDQUFNLFlBQU4sQ0FBb0IsSUFBcEIsRUFDQSxNQUFPLE1BQUt1RyxLQUFMLEdBQ0w3RSxJQURLLENBQ0EsaUJBQU0wQixVQUFTakMsTUFBVCxVQUF5QixPQUFLMEMsR0FBOUIsQ0FBcUMsQ0FDaERGLHdCQURnRCxDQUVoRDZDLFFBQVNwRCxTQUFTakIsRUFBVCxFQUZ1QyxDQUFyQyxDQUFOLEVBREEsRUFLTFQsSUFMSyxDQUtBLGlCQUFNMEIsVUFBU2hDLE1BQVQsWUFBMkIsT0FBS3lDLEdBQWhDLENBQU4sRUFMQSxFQU1MZ0IsS0FOSyxDQU1DdkIsSUFBSWxELENBQUosQ0FBTSxZQUFOLENBTkQsQ0FBUCxDQU9BLEMsd0NBVWM0RCxJLENBQXdDLElBQWxDRyxNQUFrQywyREFBMUIsSUFBMEIsQ0FBcEJzQyxVQUFvQiwyREFBUCxLQUFPLENBQ3RELEdBQUcsQ0FBQyxnQkFBTTVJLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsK0NBQVYsQ0FBZixDQUFQLENBQ0EsQ0FFRCxHQUNDc0ksY0FBZSxDQUNkekMsTUFBTyxnQkFBTXBHLElBQU4sQ0FBV2dHLEdBREosQ0FFZEssUUFBU3VDLFVBRkssQ0FHZHpDLEtBQU1BLE1BQVcsZ0JBQU1uRyxJQUFOLENBQVdtRyxJQUF0QixLQUE4QjVCLEtBQUtDLEdBQUwsRUFIdEIsQ0FEaEIsQ0FNQ3NFLGlCQUFtQixxQkFBYyxDQUNoQ2hELHdCQURnQyxDQUVoQ2lELFNBQVV4RCxTQUFTakIsRUFBVCxFQUZzQixDQUdoQ2dDLFdBSGdDLENBQWQsQ0FJaEJ1QyxZQUpnQixDQU5wQixDQVlJbEQsS0FBTyxJQVpYLENBY0EsTUFBT0osVUFBU25DLElBQVQsQ0FBYyxPQUFkLENBQXVCMEYsZ0JBQXZCLEVBRUxqRixJQUZLLENBRUEsaUJBQVcsQ0FDaEI4QixLQUFPLEdBQUlNLEtBQUosQ0FBUyxxQkFBYyxDQUFDRCxJQUFLZ0QsUUFBUTdDLElBQVIsRUFBTixDQUFkLENBQXFDMkMsZ0JBQXJDLENBQVQsQ0FBUCxDQUNBLE1BQU92RCxVQUFTakMsTUFBVCxZQUEyQnFDLEtBQUtLLEdBQWhDLFNBQTRDNkMsWUFBNUMsQ0FBUCxDQUNBLENBTEssRUFPTGhGLElBUEssQ0FPQSxpQkFBTTZCLFdBQVVDLElBQVYsa0JBQU4sRUFQQSxFQVFMcUIsS0FSSyxDQVFDdkIsSUFBSWxELENBQUosQ0FBTSxhQUFOLENBUkQsQ0FBUCxDQVNBLEMsZ0NBUVd5RCxHLENBQUssQ0FDaEIsTUFBT1QsVUFBUzlCLEdBQVQsVUFBc0J1QyxHQUF0QixFQUNMbkMsSUFESyxDQUNBLGtCQUFZLENBQ2pCLEdBQUdDLFNBQVNvQyxHQUFULEVBQUgsQ0FBbUIsQ0FDbEIsTUFBTyxJQUFJRCxLQUFKLENBQVNuQyxRQUFULENBQVAsQ0FDQSxDQUNELENBTEssQ0FBUCxDQU1BLEMsb0NBOVRtQm1DLEk7Ozs7Ozs7NFZDakNUUixHLDRWQU9aLEdBQU13RCxTQUFVLENBQ2ZDLElBQUssQ0FBQzlHLEVBQUcsSUFBSixDQUFVK0csRUFBRyxJQUFiLENBQW1CQyxJQUFLLElBQXhCLENBRFUsQ0FFZkMsSUFBSyxDQUFDakgsRUFBRyxJQUFKLENBQVUrRyxFQUFHLElBQWIsQ0FBbUJDLElBQUssSUFBeEIsQ0FBOEJFLElBQUssS0FBbkMsQ0FGVSxDQUdmQyxHQUFJLENBQUNuSCxFQUFHLElBQUosQ0FBVStHLEVBQUcsR0FBYixDQUFrQkMsSUFBSyxJQUF2QixDQUE2QkUsSUFBSyxLQUFsQyxDQUhXLENBSWZFLEtBQU0sQ0FBQ3BILEVBQUcsR0FBSixDQUFTK0csRUFBRyxHQUFaLENBQWlCQyxJQUFLLEtBQXRCLENBQTZCRSxJQUFLLElBQWxDLENBSlMsQ0FLZkcsR0FBSSxDQUFDckgsRUFBRyxHQUFKLENBQVMrRyxFQUFHLEdBQVosQ0FBaUJDLElBQUssS0FBdEIsQ0FBNkJFLElBQUssSUFBbEMsQ0FMVyxDQU1mSSxJQUFLLENBQUN0SCxFQUFHLEdBQUosQ0FBUytHLEVBQUcsR0FBWixDQUFpQkcsSUFBSyxNQUF0QixDQU5VLENBQWhCLENBZU1LLGNBQWdCLFFBQWhCQSxjQUFnQixDQUFDQyxVQUFELENBQWFDLFFBQWIsQ0FBMEIsQ0FDL0MsR0FBR0QsWUFBY0MsUUFBakIsQ0FBMkIsQ0FDMUIsTUFBTyxxQkFDTiw0QkFBNEJ4SixJQUE1QixDQUFpQ3dKLFFBQWpDLEVBQTZDLENBQUNDLFdBQVlELFFBQWIsQ0FBN0MsQ0FBc0UsQ0FBQ0EsaUJBQUQsQ0FEaEUsQ0FFTkQsYUFBZSxJQUFmLENBQXNCLEVBQXRCLENBQTJCQSxVQUZyQixDQUFQLENBR0EsQ0FDRCxNQUFPQSxXQUFQLENBQ0EsQ0F0QkQsQyxHQTJCcUJHLE0sNEpBOEJnRyxJQUFoR0MsaUJBQWdHLDJEQUE3RSxJQUE2RSxDQUF2RUMsZ0JBQXVFLDJEQUFwRCxJQUFvRCxDQUE5Q2hDLElBQThDLDJEQUF2QyxPQUF1QyxDQUE5QmlDLGFBQThCLGNBQWZDLGFBQWUsY0FDL0dDLE1BQVFKLGdCQUR1RyxDQUVuSCxHQUFJLE1BQU9BLGlCQUFQLEdBQTRCLFFBQWhDLENBQXlDLENBQ3hDLEdBQUdmLFFBQVFlLGlCQUFpQmxKLFdBQWpCLEVBQVIsQ0FBSCxDQUE0QyxhQUMzQyxHQUNDdUosUUFBU3BCLFFBQVFlLGlCQUFpQmxKLFdBQWpCLEVBQVIsQ0FEVixDQUVDd0osY0FBZ0IsUUFBaEJBLGNBQWdCLENBQUNDLEdBQUQsQ0FBUyxDQUN4QixHQUFHLG9CQUFvQmxLLElBQXBCLENBQXlCNEgsSUFBekIsQ0FBSCxDQUFtQyxDQUNsQyxHQUFNMUYsR0FBSSxFQUFWLENBQ0FBLEVBQUUwRixJQUFGLEVBQVVvQyxPQUFPRSxHQUFQLENBQVYsQ0FDQSxNQUFPaEksRUFBUCxDQUNBLENBQ0QsTUFBTyxDQUNONkcsSUFBS2lCLE9BQU9qQixHQUFQLENBQWFILFFBQVFvQixPQUFPakIsR0FBZixFQUFvQm1CLEdBQXBCLENBQWIsQ0FBd0NGLE9BQU9FLEdBQVAsQ0FEdkMsQ0FFTkMsTUFBT0gsT0FBT0UsR0FBUCxDQUZELENBR05qQixJQUFLZSxPQUFPZixHQUFQLENBQWFMLFFBQVFvQixPQUFPZixHQUFmLEVBQW9CaUIsR0FBcEIsQ0FBYixDQUF3Q0YsT0FBT0UsR0FBUCxDQUh2QyxDQUFQLENBS0EsQ0FiRixDQWNBSCxNQUFRLENBQUNLLE1BQU9ILGNBQWMsR0FBZCxDQUFSLENBQTRCSSxPQUFRSixjQUFjLEdBQWQsQ0FBcEMsQ0FBUixDQWYyQyxLQWdCM0MsQ0FoQkQsSUFnQk8sQ0FDTixLQUFNLElBQUkvSixNQUFKLENBQVUsK0RBQVYsQ0FBTixDQUNBLENBQ0QsQ0FDRDZKLE1BQVFULGNBQWNTLEtBQWQsQ0FBcUJGLGFBQXJCLENBQVIsQ0FFQSxHQUFNUyxPQUFRaEIsY0FBY00sZ0JBQWQsQ0FBZ0NFLGFBQWhDLENBQWQsQ0FFQTFFLElBQUl2RCxDQUFKLENBQU0sbUJBQU4sQ0FBMkIsQ0FBQ2tJLFdBQUQsQ0FBUU8sV0FBUixDQUEzQixFQUNBLE1BQU8sQ0FBQ1AsV0FBRCxDQUFRTyxXQUFSLENBQVAsQ0FDQSxDLGtEQVVtQkMsVyxDQUFhQyxTLENBQVdDLFEsQ0FBdUIsSUFBYkMsT0FBYSwyREFBSixFQUFJLENBQzlEQyxRQUFVLEVBRG9ELENBRWxFLEdBQUdKLFlBQVlLLGNBQVosR0FBNkJ2SixNQUE3QixDQUFzQyxDQUF6QyxDQUE0QyxDQUMzQ3NKLFFBQVUsT0FBVixDQUNBLENBRkQsSUFFTyxJQUFHSixZQUFZTSxjQUFaLEdBQTZCeEosTUFBN0IsQ0FBc0MsQ0FBekMsQ0FBNEMsQ0FDbERzSixRQUFVLE9BQVYsQ0FDQSxDQUNEdkYsSUFBSXZELENBQUosQ0FBTSxvQkFBTixDQUE0QjBJLFdBQTVCLENBQXlDSSxPQUF6QyxFQUNBLEdBQUlBLFFBQVF0SixNQUFSLENBQWlCLENBQXJCLENBQXdCLENBQ3ZCLEdBQUl5SixPQUFRTCxRQUFaLENBQ0EsR0FBSSxDQUFDSyxLQUFELEVBQVVBLE1BQU1ILE9BQU4sQ0FBYzNKLFdBQWQsS0FBZ0MySixPQUE5QyxDQUF1RCxDQUN0REcsTUFBUUMsU0FBU0MsYUFBVCxDQUF1QkwsT0FBdkIsQ0FBUixDQUNBRyxNQUFNRyxRQUFOLENBQWlCLElBQWpCLENBQ0EsQ0FDRCxHQUFJVCxTQUFKLENBQWUsQ0FDZCxHQUFJQyxVQUFZQSxXQUFhSyxLQUE3QixDQUFvQyxDQUNuQ04sVUFBVVUsWUFBVixDQUF1QkosS0FBdkIsQ0FBOEJMLFFBQTlCLEVBQ0EsQ0FGRCxJQUVPLElBQUksQ0FBQ0EsUUFBTCxDQUFlLENBQ3JCRCxVQUFVVyxXQUFWLENBQXNCTCxLQUF0QixFQUNBLENBQ0QsQ0FDREEsTUFBTU0sU0FBTixDQUFrQmIsV0FBbEIsQ0FDQU8sTUFBTU8sUUFBTixDQUFpQixLQUFqQixDQUNBUCxNQUFNSixNQUFOLENBQWVBLE1BQWYsQ0FDQSxNQUFPSSxNQUFQLENBQ0EsQ0FDRCxNQUFPTCxTQUFQLENBQ0EsQyx5Q0FjaUIsQ0FDakIsTUFBT2EsV0FBVUMsWUFBVixDQUF1QkMsZ0JBQXZCLEdBQ0xoSSxJQURLLENBQ0EsaUJBQVcsQ0FDaEIsR0FBTXRCLEdBQUksRUFBVixDQUNBdUosUUFBUS9KLE9BQVIsQ0FBZ0IsZ0JBQVUsQ0FDekIsR0FBSSxDQUFDUSxFQUFFckMsT0FBTzZMLElBQVQsQ0FBTCxDQUFxQixDQUNwQnhKLEVBQUVyQyxPQUFPNkwsSUFBVCxFQUFpQixFQUFqQixDQUNBLENBQ0R4SixFQUFFckMsT0FBTzZMLElBQVQsRUFBZTNJLElBQWYsQ0FBb0JsRCxNQUFwQixFQUNBLENBTEQsRUFNQXVGLElBQUl2RCxDQUFKLENBQU0sZUFBTixDQUF1QkssQ0FBdkIsRUFDQSxNQUFPQSxFQUFQLENBQ0EsQ0FYSyxFQVlMeUUsS0FaSyxDQVlDdkIsSUFBSWxELENBQUosQ0FBTSxlQUFOLENBWkQsQ0FBUCxDQWFBLEMsc0NBdkh1QixDQUN2QixNQUFPLENBQ055SixLQUFNLE1BREEsQ0FFTkMsWUFBYSxhQUZQLENBQVAsQ0FJQSxDLHFDQVZtQmxDLEs7Ozs7Ozs7a2dDQ2tCckIsR0FBTW1DLE9BQVEsQ0FDYixLQUFRLHNCQUFNLE9BQU4sRUFESyxDQUViLEtBQVEsc0JBQU0sT0FBTixFQUZLLENBR2IsT0FBVSxxQkFBUSxDQUNqQixHQUFHLENBQUNsTSxJQUFKLENBQVUsQ0FDVCxLQUFNLElBQUlPLE1BQUosQ0FBVSwrQ0FBVixDQUFOLENBQ0EsQ0FDRCxtQkFBb0JQLEtBQUtnRyxHQUF6QixDQUNBLENBUlksQ0FTYixZQUFlLDRDQUFtQkwsS0FBS0ssR0FBeEIsa0JBVEYsQ0FVYixRQUFXLHdDQUFtQkwsS0FBS0ssR0FBeEIsY0FWRSxDQVdiLE9BQVUsdUNBQW1CTCxLQUFLSyxHQUF4QixhQVhHLENBQWQsQ0FtQk1tRyxRQUFVLENBQ2YsbUJBRGUsQ0FFZixtQkFGZSxDQUdmLHVCQUhlLENBSWYsaUNBSmUsQ0FLZix5QkFMZSxDQU1mLHVCQU5lLENBbkJoQixDLEdBaUNNQyxRLFlBQ0wsaUJBQVlDLElBQVosQ0FBa0IsMkRBQ2pCQSxLQUFLdEssT0FBTCxDQUFhLGFBQU8sQ0FBQyxNQUFLMkUsR0FBTCxFQUFZQSxHQUFaLENBQWlCLENBQXRDLEVBQ0EsQywyRUFDUS9ELEssQ0FBTyxDQUNmLEdBQUcsQ0FBQ0EsS0FBRCxFQUFVLE1BQU9BLE1BQVAsR0FBaUIsUUFBM0IsRUFBdUMsS0FBS0EsS0FBTCxJQUFnQkEsTUFBTTdCLFdBQU4sRUFBMUQsQ0FBK0UsQ0FDOUUsS0FBTSxJQUFJUCxNQUFKLGlEQUEwRCx3QkFBZSxtQkFBWSxJQUFaLENBQWYsQ0FBMUQsQ0FBTixDQUNBLENBQ0QsTUFBTyxLQUFQLENBQ0EsQyxzQ0FDTW9DLEssQ0FBTyxDQUNiLEdBQUcsS0FBSzJKLFFBQUwsQ0FBYzNKLEtBQWQsQ0FBSCxDQUF5QixDQUN4QixNQUFPdUosT0FBTXZKLE1BQU03QixXQUFOLEdBQW9CeUwsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBb0MsRUFBcEMsQ0FBTixHQUFtRCxpQkFBTSxLQUFOLEVBQTFELENBQ0EsQ0FDRCxDLHdDQUNPNUosSyxDQUFPLENBQ2QsR0FBRyxLQUFLMkosUUFBTCxDQUFjM0osS0FBZCxDQUFILENBQXlCLENBQ3hCLE1BQU93SixTQUFReEosTUFBTTdCLFdBQU4sR0FBb0J5TCxPQUFwQixDQUE0QixNQUE1QixDQUFvQyxFQUFwQyxDQUFSLENBQVAsQ0FDQSxDQUNELEMsdUJBTUssR0FBTUMscUJBQVEsR0FBSUosUUFBSixDQUFZLENBQ2hDLFlBRGdDLENBQ2xCLGNBRGtCLENBQ0YsY0FERSxDQUVoQyxZQUZnQyxDQUVsQixjQUZrQixDQUVGLGNBRkUsQ0FHaEMsY0FIZ0MsQ0FHaEIsZ0JBSGdCLENBQVosQ0FBZCxDQVNBLEdBQU16RyxtQkFBTyxHQUFJeUcsUUFBSixDQUFZLENBQy9CLGVBRCtCLENBQ2QsaUJBRGMsQ0FDSyxpQkFETCxDQUUvQixtQkFGK0IsQ0FFVixxQkFGVSxDQUVhLHFCQUZiLENBRy9CLGtCQUgrQixDQUdYLG9CQUhXLENBQVosQ0FBYixDQVNBLEdBQU10Rix1QkFBUyxHQUFJc0YsUUFBSixDQUFZLENBQUMsTUFBRCxDQUFaLENBQWYsQ0FLQSxHQUFNN0UsdUJBQVMsR0FBSTZFLFFBQUosQ0FBWSw2REFBWixDQUFmLEM7Ozs7OztBQ3RJUCxnRDs7Ozs7OztBQ0FBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlIQUFpSCxtQkFBbUIsRUFBRSxtQkFBbUIsNEpBQTRKOztBQUVyVCxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLEU7Ozs7OztBQ3BCQSxzQjs7Ozs7O0FDQUEsY0FBYyxzQjs7Ozs7O0FDQWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWtFLCtCQUErQjtBQUNqRyxFOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBLEU7Ozs7Ozs7a2hCQ0RZN0csUSxnRUFDQUUsRyx1TUFHQUQsTSwrVkFXWixHQUFNbEMsUUFBUyxRQUFUQSxPQUFTLENBQUNpRSxNQUFELENBQVN6QixNQUFULENBQWtELElBQWpDdEQsT0FBaUMsMkRBQXhCLElBQXdCLENBQWxCaUssTUFBa0IsMkRBQVQsSUFBUyxDQUMxRDdLLE9BQVMsQ0FDZGtFLGFBRGMsQ0FFZHRELGFBRmMsQ0FHZGlLLGFBSGMsQ0FEaUQsQ0FPaEUsR0FBR2xGLE9BQU96QixNQUFQLHFCQUFILENBQThCLENBQzdCLE1BQU8sbUJBQVFyRCxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSwyQ0FBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU9nRixVQUFTakMsTUFBVCxjQUE2QmlFLE9BQU9DLEVBQXBDLEtBQTBDRCxPQUFPdkIsR0FBakQsQ0FBd0RwRSxNQUF4RCxFQUNMaUMsSUFESyxDQUNBLFVBQU0sQ0FDWCxtQkFBWWpDLE1BQVosRUFBb0JHLE9BQXBCLENBQTRCLGNBQVEsQ0FDbkN3RixPQUFPbUYsSUFBUCxFQUFlOUssT0FBTzhLLElBQVAsQ0FBZixDQUNBLENBRkQsRUFHQSxNQUFPLGdCQUFLakosR0FBTCxDQUFTOEQsT0FBTzVCLElBQWhCLENBQVAsQ0FDQSxDQU5LLEVBT0w5QixJQVBLLENBT0EscUJBQVMsQ0FBQzhCLFNBQUQsQ0FBTzRCLGFBQVAsQ0FBVCxFQVBBLEVBUUxQLEtBUkssQ0FRQ3ZCLElBQUlsRCxDQUFKLENBQU0sZUFBTixDQVJELENBQVAsQ0FTQSxDQW5CRCxDLEdBeUJxQm9LLE8sWUFPcEIsZ0JBQVk3SSxRQUFaLENBQXNCLDJDQUNyQixHQUFJbEMsUUFBU2tDLFFBQWIsQ0FDQSxHQUFHQSxVQUFZQSxTQUFTb0MsR0FBckIsRUFBNEIsTUFBT3BDLFVBQVNvQyxHQUFoQixHQUF3QixVQUF2RCxDQUFrRSxDQUNqRXRFLE9BQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWtDLENBQUNGLElBQUtsQyxTQUFTcUMsSUFBVCxFQUFOLENBQXVCcUIsR0FBSTFELFNBQVM4SSxHQUFULEdBQWVDLE1BQWYsR0FBd0IxRyxJQUF4QixFQUEzQixDQUFsQyxDQUFULENBQ0EsQ0FLRCxLQUFLSCxHQUFMLENBQVdwRSxPQUFPb0UsR0FBbEIsQ0FLQSxLQUFLZSxJQUFMLENBQVluRixPQUFPbUYsSUFBbkIsQ0FLQSxLQUFLUyxFQUFMLENBQVU1RixPQUFPNEYsRUFBakIsQ0FLQSxLQUFLN0IsSUFBTCxDQUFZL0QsT0FBTytELElBQW5CLENBU0EsS0FBS0csTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBS2dILEtBQUwsQ0FBYWxMLE9BQU9rTCxLQUFwQixDQUtBLEtBQUsvRCxRQUFMLENBQWdCbkgsT0FBT21ILFFBQXZCLENBS0EsS0FBSzBELE1BQUwsQ0FBYzdLLE9BQU82SyxNQUFyQixDQU1BLEtBQUtsRyxVQUFMLENBQWtCLEVBQWxCLENBQ0EsQyxzRUF1Q00vRCxNLENBQVEsQ0FDZCxNQUFPYyxRQUFPLElBQVAscUJBQXVCZCxNQUF2QixDQUErQitDLFNBQVNqQixFQUFULEVBQS9CLENBQVAsQ0FDQSxDLHNDQU9NOUIsTSxDQUFRLENBQ2QsTUFBT2MsUUFBTyxJQUFQLHFCQUF1QmQsTUFBdkIsQ0FBK0IrQyxTQUFTakIsRUFBVCxFQUEvQixDQUFQLENBQ0EsQyx1Q0FNUSxDQUNSLE1BQU9oQixRQUFPLElBQVAscUJBQVAsQ0FDQSxDLDhCQVVFd0MsTSxDQUFRMUIsUSxDQUFVLGdCQUNwQixHQUFHb0IsT0FBTytCLE1BQVAsQ0FBYytFLFFBQWQsQ0FBdUJ4RyxNQUF2QixDQUFILENBQW1DLENBRWxDLEdBQUksQ0FBQyxLQUFLUyxVQUFMLENBQWdCVCxNQUFoQixDQUFMLENBQThCLENBQzdCLEtBQUtTLFVBQUwsQ0FBZ0JULE1BQWhCLEVBQTBCLEVBQTFCLENBQ0EsQ0FDRCxLQUFLUyxVQUFMLENBQWdCVCxNQUFoQixFQUF3QjFDLElBQXhCLENBQTZCZ0IsUUFBN0IsRUFFQSxHQUFJLENBQUMsS0FBSzJJLFNBQVYsQ0FBcUIsQ0FNcEIsS0FBS0EsU0FBTCxDQUFpQixrQkFBWSxDQUM1QixHQUFNQyxTQUFVbEosU0FBU29DLEdBQVQsRUFBaEIsQ0FDQSxHQUFJOEcsVUFBWSxJQUFaLEVBQW9CQSxVQUFZLE1BQUtsSCxNQUF6QyxDQUFpRCxDQUNoRCxNQUFLQSxNQUFMLENBQWNrSCxPQUFkLENBQ0EsQ0FBQyxNQUFLekcsVUFBTCxDQUFnQnlHLE9BQWhCLEdBQTRCLEVBQTdCLEVBQWlDakwsT0FBakMsQ0FBeUMsWUFBTSxDQUM5Q2tMLFVBQ0EsQ0FGRCxFQUdBLENBQ0QsQ0FSRCxDQVNBMUgsU0FBU3ZCLEVBQVQsY0FBeUIsS0FBS3dELEVBQTlCLEtBQW9DLEtBQUt4QixHQUF6QyxXQUF1RCxPQUF2RCxDQUFnRSxLQUFLK0csU0FBTCxDQUFlekwsSUFBZixDQUFvQixJQUFwQixDQUFoRSxFQUNBLENBQ0QsQ0FDRCxDLHNEQU1jOEMsUSxDQUFVLGlCQUN4Qiw4REFBK0JyQyxPQUEvQixDQUF1QyxlQUFTLENBQy9DLE9BQUtpQyxFQUFMLENBQVFyQixLQUFSLENBQWV5QixRQUFmLEVBQ0EsQ0FGRCxFQUdBLEMsZ0NBV0cwQixNLENBQVExQixRLENBQVUsaUJBQ3JCLEdBQUcsQ0FBQzBCLE1BQUosQ0FBWSxDQUNYLEtBQUtTLFVBQUwsQ0FBa0IsRUFBbEIsQ0FDQSxDQUZELElBRU8sSUFBRyxLQUFLQSxVQUFMLENBQWdCVCxNQUFoQixDQUFILENBQTRCLENBQ2xDLEdBQUcxQixRQUFILENBQWEsQ0FDWixHQUFNOEksS0FBTSxLQUFLM0csVUFBTCxDQUFnQlQsTUFBaEIsRUFBd0JxSCxTQUF4QixDQUFrQyxtQkFBTUYsTUFBTzdJLFFBQWIsRUFBbEMsQ0FBWixDQUNBLEdBQUk4SSxLQUFPLENBQVgsQ0FBYyxDQUNiLEtBQUszRyxVQUFMLENBQWdCNkcsTUFBaEIsQ0FBdUJGLEdBQXZCLENBQTRCLENBQTVCLEVBQ0EsQ0FDRCxDQUxELElBS08sQ0FDTixLQUFLM0csVUFBTCxDQUFnQlQsTUFBaEIsRUFBMEIsRUFBMUIsQ0FDQSxDQUNELENBQ0QsR0FBRyxDQUFDLDhEQUErQnVILElBQS9CLENBQW9DLHNCQUFTLFFBQUs5RyxVQUFMLENBQWdCNUQsS0FBaEIsR0FBMEIsT0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF1QmpCLE1BQXZCLENBQWdDLENBQW5FLEVBQXBDLENBQUosQ0FBOEcsQ0FDN0c2RCxTQUFTcEIsR0FBVCxjQUEwQixLQUFLcUQsRUFBL0IsS0FBcUMsS0FBS3hCLEdBQTFDLFdBQXdELE9BQXhELEVBQ0EsQ0FDRCxDLHdEQU1lNUIsUSxDQUFVLGlCQUN6QixHQUFHLENBQUNBLFFBQUosQ0FBYyxDQUNiLEtBQUtELEdBQUwsR0FDQSxDQUZELElBRU8sQ0FDTiw4REFBK0JwQyxPQUEvQixDQUF1QyxlQUFTLENBQy9DLE9BQUtvQyxHQUFMLENBQVN4QixLQUFULENBQWdCeUIsUUFBaEIsRUFDQSxDQUZELEVBR0EsQ0FDRCxDLHFDQTNJZSxDQUNmLE1BQU8sTUFBSzBCLE1BQUwscUJBQVAsQ0FDQSxDLHNDQU1nQixDQUNoQixNQUFPLE1BQUtBLE1BQUwsc0JBQVAsQ0FDQSxDLHNDQU1nQixDQUNoQixNQUFPLE1BQUtBLE1BQUwsc0JBQVAsQ0FDQSxDLHNDQU1nQixDQUNoQixNQUFPLE1BQUtBLE1BQUwsc0JBQVAsQ0FDQSxDLG9DQTBIV3dILE8sQ0FBUzNILEksQ0FBc0IsSUFBaEJuRSxRQUFnQiwyREFBTixJQUFNLENBQzFDLEdBQUcsQ0FBQyxnQkFBTXhCLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsZ0RBQVYsQ0FBZixDQUFQLENBQ0EsQ0FFRCxHQUFNZ04sZ0JBQWlCLENBQ3RCeEcsS0FBTSxnQkFBTS9HLElBQU4sQ0FBV2dHLEdBREssQ0FFdEJMLEtBQU1BLEtBQUtLLEdBRlcsQ0FHdEJGLHlCQUhzQixDQUl0QmlELFNBQVV4RCxTQUFTakIsRUFBVCxFQUpZLENBS3RCd0ksTUFBT3RMLE9BTGUsQ0FBdkIsQ0FRQSxNQUFPK0QsVUFBU25DLElBQVQsY0FBMkJrSyxRQUFRdEgsR0FBbkMsQ0FBMEN1SCxjQUExQyxFQUNMMUosSUFESyxDQUNBLG1CQUFhLENBQ2xCLEdBQU0ySixVQUFXQyxVQUFVdEgsSUFBVixFQUFqQixDQUNBLE1BQU8sSUFBSXdHLE9BQUosQ0FBVyxxQkFBYyxDQUFDM0csSUFBS3dILFFBQU4sQ0FBZ0JoRyxHQUFJOEYsUUFBUXRILEdBQTVCLENBQWQsQ0FBZ0R1SCxjQUFoRCxDQUFYLENBQVAsQ0FDQSxDQUpLLEVBS0x2RyxLQUxLLENBS0N2QixJQUFJbEQsQ0FBSixDQUFNLGFBQU4sQ0FMRCxDQUFQLENBTUEsQyxzQ0EzT21Cb0ssTTs7Ozs7O0FDekNyQjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBLGE7Ozs7OztBQ0hBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSx1Q0FBdUM7QUFDdkMsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsc0JBQXNCO0FBQ2hGLGdGQUFnRixzQkFBc0I7QUFDdEcsRTs7Ozs7O0FDUkEsbUM7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUMsRTs7Ozs7O0FDaEJELDZCQUE2QjtBQUM3QixxQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsZ0JBQWdCLFVBQVUsR0FBRztBQUN0RSxDQUFDLEU7Ozs7OztBQ0hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFOzs7Ozs7O3VmQ1BZcEgsUSxxSUFFQUUsRyxvbEJBTVosR0FBSWlJLGNBQWUsS0FBbkIsQyxHQU1xQkMsSyxZQU1wQixjQUFZN0osUUFBWixDQUFzQix5Q0FDckIsR0FBTWxDLFFBQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWYsQ0FLQSxLQUFLRixHQUFMLENBQVdsQyxTQUFTcUMsSUFBVCxFQUFYLENBS0EsS0FBS0EsSUFBTCxDQUFZdkUsT0FBT3VFLElBQW5CLENBS0EsS0FBS0wsTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBSzhILFFBQUwsQ0FBZ0JoTSxPQUFPZ00sUUFBdkIsQ0FLQSxLQUFLQyxTQUFMLENBQWlCLGFBQWF4TixJQUFiLENBQWtCLEtBQUsyRixHQUF2QixDQUFqQixDQUVBLEMsb0VBT014RSxPLENBQVMsZ0JBQ2YsR0FBRyxDQUFDLGdCQUFNeEIsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSxxREFBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU8sZ0JBQUt1TixNQUFMLENBQWUsZ0JBQU05TixJQUFOLENBQVdnRyxHQUExQixLQUFpQyxLQUFLQSxHQUF0QyxFQUNMbkMsSUFESyxDQUNBLGNBQVEsQ0FDYixNQUFPOEIsTUFBSzRCLE1BQUwsQ0FBWSxPQUFaLENBQW9CLElBQXBCLENBQTBCL0YsT0FBMUIsQ0FBUCxDQUNBLENBSEssRUFJTHFDLElBSkssQ0FJQSxjQUFRLENBQ2IsTUFBTyxDQUFDOEIsS0FBTTVDLEtBQUs0QyxJQUFaLENBQWtCNEIsT0FBUXhFLEtBQUswRSxPQUFMLENBQWEsQ0FBYixDQUExQixDQUFQLENBQ0EsQ0FOSyxFQU9MVCxLQVBLLENBT0N2QixJQUFJbEQsQ0FBSixDQUFNLGFBQU4sQ0FQRCxDQUFQLENBUUEsQyx5Q0FPUyxDQUNULE1BQU9nRCxVQUFTN0IsSUFBVCxjQUEyQixLQUFLc0MsR0FBaEMsa0JBQVAsQ0FDQSxDLG9DQVNZQSxHLENBQUtHLEksQ0FBTSxDQUN2QixHQUFHLENBQUN1SCxZQUFKLENBQWtCLHFCQUNqQkEsYUFBZSxJQUFmLENBQ0EsR0FBTXhMLEdBQUksQ0FBQzRELDJCQUFELENBQW9COEgsU0FBVXJJLFNBQVNqQixFQUFULEVBQTlCLENBQVYsQ0FDQSxHQUFHNkIsSUFBSCxDQUFTLENBQ1IscUJBQWNqRSxDQUFkLENBQWlCLENBQUNpRSxTQUFELENBQWpCLEVBQ0EsQ0FDRCxHQUFJMEQsVUFBVyxpQkFBT2tFLFFBQVAsQ0FBZ0JDLGlCQUFoQixDQUFrQ3ZLLEdBQWxDLENBQXNDdUMsR0FBdEMsQ0FBZixDQUNBLFNBQU9ULFNBQVNqQyxNQUFULFVBQXlCMEMsR0FBekIsQ0FBZ0M5RCxDQUFoQyxFQUVMMkIsSUFGSyxDQUVBLFVBQU0sQ0FDWCxHQUFNb0ssZ0JBQWlCLENBQ3RCbkksMkJBRHNCLENBRXRCb0ksSUFBSyxDQUNKMUIsTUFBTyxPQURILENBRUoyQixPQUFRLGlCQUFPQyxXQUZYLENBRmlCLENBTXRCQyxVQUFXMUMsVUFBVTBDLFNBTkMsQ0FBdkIsQ0FRQSxHQUFHeEUsUUFBSCxDQUFhLENBQ1osTUFBT3RFLFVBQVNqQyxNQUFULGNBQTZCMEMsR0FBN0IsS0FBb0M2RCxRQUFwQyxDQUFnRG9FLGNBQWhELENBQVAsQ0FDQSxDQUNELE1BQU8xSSxVQUFTbkMsSUFBVCxjQUEyQjRDLEdBQTNCLENBQWtDaUksY0FBbEMsQ0FBUCxDQUNBLENBZkssRUFpQkxwSyxJQWpCSyxDQWlCQSxtQkFBYSxDQUNsQixHQUFJLENBQUNnRyxRQUFMLENBQWUsQ0FDZEEsU0FBV3lFLFVBQVVuSSxJQUFWLEVBQVgsQ0FDQSxpQkFBTzRILFFBQVAsQ0FBZ0JDLGlCQUFoQixDQUFrQzdLLEdBQWxDLENBQXNDNkMsR0FBdEMsQ0FBMkM2RCxRQUEzQyxFQUNBLENBQ0QsZ0JBQU0zSixNQUFOLENBQWUySixRQUFmLENBQ0EsQ0F2QkssRUF5QkxoRyxJQXpCSyxDQXlCQSxVQUFNLENBRVgwQixTQUFTbEIsWUFBVCxjQUFtQzJCLEdBQW5DLEtBQTBDNkQsUUFBMUMsWUFBNkQxRyxHQUE3RCwyQkFFQW9DLFNBQVNsQixZQUFULFVBQStCMkIsR0FBL0IsRUFBc0MxQyxNQUF0QyxDQUE2QyxDQUM1Q3dDLCtCQUQ0QyxDQUU1QzhILFNBQVVySSxTQUFTakIsRUFBVCxFQUZrQyxDQUE3QyxFQUlBLENBakNLLEVBbUNMVCxJQW5DSyxDQW1DQSxpQkFBTThKLE1BQUtsSyxHQUFMLENBQVN1QyxHQUFULENBQU4sRUFuQ0EsRUFvQ0xuQyxJQXBDSyxDQW9DQSxjQUFRLENBQ2I2SixhQUFlLEtBQWYsQ0FDQSxNQUFPMU4sS0FBUCxDQUNBLENBdkNLLEVBd0NMZ0gsS0F4Q0ssQ0F3Q0MsV0FBSyxDQUNYdkIsSUFBSXBELENBQUosQ0FBTUEsQ0FBTixFQUNBcUwsYUFBZSxLQUFmLENBQ0EsTUFBTyxtQkFBUWpMLE1BQVIsQ0FBZUosQ0FBZixDQUFQLENBQ0EsQ0E1Q0ssQ0FBUCxFQVBpQixtR0FvRGpCLENBQ0QsTUFBT3NMLE1BQUtsSyxHQUFMLENBQVN1QyxHQUFULENBQVAsQ0FDQSxDLDhDQVFpQmhHLEksQ0FBTSxDQUV2QnVGLFNBQVNsQixZQUFULGNBQW1DckUsS0FBS2dHLEdBQXhDLEtBQStDLGdCQUFNOUYsTUFBckQsWUFBc0VtSSxNQUF0RSxHQUNBOUMsU0FBU2xCLFlBQVQsVUFBK0JyRSxLQUFLZ0csR0FBcEMsRUFBMkNxQyxNQUEzQyxHQUVBLEdBQUdySSxLQUFLNk4sU0FBUixDQUFtQixDQUNsQixNQUFPdEksVUFBU2hDLE1BQVQsY0FBNkJ2RCxLQUFLZ0csR0FBbEMsRUFDTG5DLElBREssQ0FDQSxpQkFBTTBCLFVBQVM5QixHQUFULGNBQTBCekQsS0FBS2dHLEdBQS9CLENBQU4sRUFEQSxFQUVMbkMsSUFGSyxDQUVBLGlCQUFXLENBQ2hCLEdBQU0wSyxXQUFZLEVBQWxCLENBQ0E5RyxRQUFRMUYsT0FBUixDQUFnQixnQkFBVSxDQUN6QndNLFVBQVVuTCxJQUFWLENBQWVtRSxPQUFPcEIsSUFBUCxFQUFmLEVBQ0EsQ0FGRCxFQUdBLE1BQU8sbUJBQVFpQixHQUFSLENBQVltSCxVQUFVOUgsR0FBVixDQUFjLHlCQUFZbEIsVUFBU2hDLE1BQVQsY0FBNkJ2RCxLQUFLZ0csR0FBbEMsS0FBeUN3SCxRQUF6QyxDQUFaLEVBQWQsQ0FBWixDQUFQLENBQ0EsQ0FSSyxFQVdMM0osSUFYSyxDQVdBLGlCQUFNMEIsVUFBU2hDLE1BQVQsVUFBeUJ2RCxLQUFLZ0csR0FBOUIsQ0FBTixFQVhBLEVBWUxuQyxJQVpLLENBWUEsVUFBTSxDQUNYLGlCQUFPa0ssUUFBUCxDQUFnQkMsaUJBQWhCLENBQWtDekssTUFBbEMsQ0FBeUN2RCxLQUFLZ0csR0FBOUMsRUFDQSxDQWRLLEVBZUxnQixLQWZLLENBZUN2QixJQUFJbEQsQ0FBSixDQUFNLDJCQUFOLENBZkQsQ0FBUCxDQWdCQSxDQUNELE1BQU9nRCxVQUFTcEMsR0FBVCxjQUEwQm5ELEtBQUtnRyxHQUEvQixLQUFzQyxnQkFBTTlGLE1BQTVDLHFDQUNMMkQsSUFESyxDQUNBLGlCQUFNMEIsVUFBUzlCLEdBQVQsY0FBMEJ6RCxLQUFLZ0csR0FBL0IsQ0FBTixFQURBLEVBRUxuQyxJQUZLLENBRUEsaUJBQVcsQ0FFaEIsR0FBTTJLLHFCQUFzQjFDLFFBQVEvSixPQUFSLENBQWdCLGdCQUFVLENBQ3JELE1BQVEsSUFBSTBNLE9BQUosOEJBQUQsQ0FBK0JwTyxJQUEvQixDQUFvQ0gsT0FBT2dHLEdBQVAsR0FBYUosTUFBakQsQ0FBUCxDQUNBLENBRjJCLENBQTVCLENBR0EsR0FBRyxDQUFDMEksbUJBQUosQ0FBeUIsQ0FDeEIsTUFBT2pKLFVBQVNqQyxNQUFULFVBQXlCdEQsS0FBS2dHLEdBQTlCLENBQXFDLENBQUNGLCtCQUFELENBQXJDLENBQVAsQ0FDQSxDQUNELE1BQU8sS0FBUCxDQUNBLENBWEssRUFZTGtCLEtBWkssQ0FZQ3ZCLElBQUlsRCxDQUFKLENBQU0saUJBQU4sQ0FaRCxDQUFQLENBYUEsQyxnQ0FRVXlELEcsQ0FBSyxDQUNmLE1BQU9ULFVBQVM5QixHQUFULFVBQXNCdUMsR0FBdEIsRUFDTm5DLElBRE0sQ0FDRCx5QkFBWUMsVUFBVyxHQUFJNkosS0FBSixDQUFTN0osUUFBVCxDQUFYLENBQWdDLElBQTVDLEVBREMsRUFFTmtELEtBRk0sQ0FFQXZCLElBQUlsRCxDQUFKLENBQU0sVUFBTixDQUZBLENBQVAsQ0FHQSxDLG9DQXRMbUJvTCxJOzs7Ozs7O3lEQ0FkLEdBQU1lLHFCQUFRLE9BQWQsQ0FNQSxHQUFNQyxxQkFBUSxPQUFkLENBTUEsR0FBTUMsaUNBQWMsYUFBcEIsQ0FNQSxHQUFNQyx1Q0FBaUIsZ0JBQXZCLEMsZ0JBRVEsQ0FBQ0gsV0FBRCxDQUFRQyxXQUFSLENBQWVDLHVCQUFmLENBQTRCQyw2QkFBNUIsQzs7Ozs7Ozs0YUNsQ0h0SixRLGdFQUNBRSxHLG9hQU9TcUosUSxZQU9wQixpQkFBWWhMLFFBQVosQ0FBc0I2QyxNQUF0QixDQUE4Qiw0Q0FDN0IsR0FBTS9FLFFBQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWYsQ0FLQSxLQUFLRixHQUFMLENBQVdsQyxTQUFTcUMsSUFBVCxFQUFYLENBS0EsS0FBS1EsTUFBTCxDQUFjQSxNQUFkLENBS0EsS0FBS29JLElBQUwsQ0FBWW5OLE9BQU9tTixJQUFuQixDQUtBLEtBQUtoSSxJQUFMLENBQVluRixPQUFPbUYsSUFBbkIsQ0FLQSxLQUFLZ0MsUUFBTCxDQUFnQm5ILE9BQU9tSCxRQUF2QixDQUNBLEMsbUVBT0lpRyxPLENBQVMsZ0JBQ2IsTUFBT3pKLFVBQVNqQyxNQUFULFdBQTBCLEtBQUtxRCxNQUEvQixjQUFrRCxLQUFLWCxHQUF2RCxDQUE4RCxDQUFDK0ksS0FBTUMsT0FBUCxDQUE5RCxFQUNMbkwsSUFESyxDQUNBLFVBQU0sQ0FDWCxNQUFLa0wsSUFBTCxDQUFZQyxPQUFaLENBQ0EsYUFDQSxDQUpLLEVBS0xoSSxLQUxLLENBS0N2QixJQUFJbEQsQ0FBSixDQUFNLGNBQU4sQ0FMRCxDQUFQLENBTUEsQyx1Q0FNUSxDQUNSLE1BQU9nRCxVQUFTaEMsTUFBVCxXQUEwQixLQUFLb0QsTUFBL0IsY0FBa0QsS0FBS1gsR0FBdkQsRUFDTGdCLEtBREssQ0FDQ3ZCLElBQUlsRCxDQUFKLENBQU0sZ0JBQU4sQ0FERCxDQUFQLENBRUEsQyxvQ0FRV29ELEksQ0FBTW9KLEksQ0FBTSxDQUN2QixHQUFHLENBQUMsZ0JBQU0vTyxJQUFWLENBQWdCLENBQ2YsTUFBTyxtQkFBUXlDLE1BQVIsQ0FBZSxHQUFJbEMsTUFBSixDQUFVLG1FQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsR0FBTXdDLE1BQU8sQ0FDWmdFLEtBQU0sZ0JBQU0vRyxJQUFOLENBQVdnRyxHQURMLENBRVorQyxTQUFVeEQsU0FBU2pCLEVBQVQsRUFGRSxDQUdaeUssU0FIWSxDQUFiLENBS0EsTUFBT3hKLFVBQVNuQyxJQUFULFlBQXlCdUMsS0FBS0ssR0FBOUIsYUFBOENqRCxJQUE5QyxFQUNMYyxJQURLLENBQ0Esd0JBQVcwQixVQUFTOUIsR0FBVCxZQUF3QmtDLEtBQUtLLEdBQTdCLGNBQTZDM0MsUUFBUThDLElBQVIsRUFBN0MsQ0FBWCxFQURBLEVBRUx0QyxJQUZLLENBRUEseUJBQVksSUFBSWlMLFFBQUosQ0FBWWhMLFFBQVosQ0FBc0I2QixLQUFLSyxHQUEzQixDQUFaLEVBRkEsRUFHTGdCLEtBSEssQ0FHQ3ZCLElBQUlsRCxDQUFKLENBQU0sY0FBTixDQUhELENBQVAsQ0FJQSxDLHVDQTlFbUJ1TSxPOzs7Ozs7OzZUQ0pBRyxZLENBTXBCLHFCQUFZbkwsUUFBWixDQUFzQixnREFDckIsR0FBTWxDLFFBQVMscUJBQWMsRUFBZCxDQUFrQmtDLFNBQVNvQyxHQUFULEVBQWxCLENBQWYsQ0FLQSxLQUFLRixHQUFMLENBQVdsQyxTQUFTcUMsSUFBVCxFQUFYLENBUUEsS0FBS1AsSUFBTCxDQUFZaEUsT0FBT2dFLElBQW5CLENBUUEsS0FBS0UsTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBS0MsT0FBTCxDQUFlbkUsT0FBT21FLE9BQXRCLENBQ0EsQyxpQkFsQ21Ca0osVzs7Ozs7OztvakJDSFQxSixRLGdFQUNBRSxHLCtEQUNBRCxNLGtXQU1TMEosTyxZQUtwQixnQkFBWXROLE1BQVosQ0FBb0IsMkNBQ25CNkQsSUFBSXZELENBQUosQ0FBTSxZQUFOLENBQW9CTixNQUFwQixFQUtBLEtBQUsrRSxNQUFMLENBQWMvRSxPQUFPK0UsTUFBckIsQ0FLQSxLQUFLWCxHQUFMLENBQVdwRSxPQUFPb0UsR0FBbEIsQ0FLQSxLQUFLZSxJQUFMLENBQVluRixPQUFPbUYsSUFBbkIsQ0FLQSxLQUFLa0IsSUFBTCxDQUFZckcsT0FBT3FHLElBQW5CLENBSUEsS0FBSy9ILE1BQUwsQ0FBYzBCLE9BQU8xQixNQUFyQixDQUtBLEtBQUsySyxTQUFMLENBQWlCLGdCQUFNaEwsTUFBTixDQUFhc1AscUJBQTlCLENBSUEsS0FBS0MsS0FBTCxDQUFhLHFCQUFjLENBQUN6RSxNQUFPLEtBQVIsQ0FBZVAsTUFBTyxLQUF0QixDQUFkLENBQTRDeEksT0FBT3dOLEtBQW5ELENBQWIsQ0FNQSxLQUFLN0ksVUFBTCxDQUFrQixFQUFsQixDQUtBLEtBQUs4SSxjQUFMLENBQXNCLElBQXRCLENBQ0EsQyw0RUFlU0YscUIsQ0FBdUIsZ0JBQ2hDLEdBQUcsQ0FBQyxnQkFBTW5QLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFReUMsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUsK0RBQVYsQ0FBZixDQUFQLENBQ0EsQ0FFRCxLQUFLc0ssU0FBTCxDQUFpQnNFLHVCQUF5QixnQkFBTXRQLE1BQU4sQ0FBYXNQLHFCQUF2RCxDQUNBMUosSUFBSXZELENBQUosQ0FBTSxrQkFBTixDQUEwQixLQUFLMkksU0FBL0IsRUFDQSxNQUFPLGlCQUFNeUUsZUFBTixDQUFzQkMsTUFBdEIsQ0FBNkIsSUFBN0IsQ0FBbUMsS0FBSzFFLFNBQXhDLEVBQ0xoSCxJQURLLENBQ0EsWUFBTSxDQUFDLE1BQUt3TCxjQUFMLENBQXNCRyxFQUF0QixDQUEwQixDQURqQyxFQUVMM0wsSUFGSyxDQUVBLGlCQUFNMEIsVUFBU2pDLE1BQVQsWUFBMkIsTUFBS3FELE1BQWhDLGlCQUFzRCxNQUFLWCxHQUEzRCxLQUFrRSxnQkFBTTlGLE1BQXhFLENBQWtGLENBQzdGc0gsR0FBSSxnQkFBTXhILElBQU4sQ0FBV2dHLEdBRDhFLENBRTdGK0MsU0FBVXhELFNBQVNqQixFQUFULEVBRm1GLENBQWxGLENBQU4sRUFGQSxFQU1MVCxJQU5LLENBTUEsVUFBTSxDQUNYMEIsU0FBU2xCLFlBQVQsWUFBaUMsTUFBS3NDLE1BQXRDLGlCQUE0RCxNQUFLWCxHQUFqRSxLQUF3RSxnQkFBTTlGLE1BQTlFLEVBQXdGcUQsTUFBeEYsR0FDQSxHQUFJa00sWUFBYSxLQUFqQixDQUNBbEssU0FBU3ZCLEVBQVQsWUFBdUIsTUFBSzJDLE1BQTVCLGFBQThDLE1BQUtYLEdBQW5ELENBQTBELE9BQTFELENBQW1FLGtCQUFZLENBQzlFLEdBQU1wRSxRQUFTa0MsU0FBU29DLEdBQVQsRUFBZixDQUNBVCxJQUFJdkQsQ0FBSixDQUFNLGdCQUFOLENBQXdCTixNQUF4QixFQUNBLEdBQUdBLE1BQUgsQ0FBVyxDQUVWLE1BQUtxRyxJQUFMLENBQVlyRyxPQUFPcUcsSUFBbkIsQ0FFQSxHQUFNbUgsT0FBUXhOLE9BQU93TixLQUFyQixDQUNBLEdBQUdBLFFBQVVBLE1BQU16RSxLQUFOLEdBQWdCLE1BQUt5RSxLQUFMLENBQVd6RSxLQUEzQixFQUFvQ3lFLE1BQU1oRixLQUFOLEdBQWdCLE1BQUtnRixLQUFMLENBQVdoRixLQUF6RSxDQUFILENBQW9GLENBQ25GLE1BQUtnRixLQUFMLENBQWFBLEtBQWIsQ0FDQTNKLElBQUlyRCxDQUFKLENBQU0sTUFBS21FLFVBQUwsQ0FBZ0JmLE9BQU9zQixNQUFQLENBQWM0SSxJQUE5QixDQUFOLEVBQ0EsQ0FBQyxNQUFLbkosVUFBTCxDQUFnQmYsT0FBT3NCLE1BQVAsQ0FBYzRJLElBQTlCLEdBQXVDLEVBQXhDLEVBQTRDM04sT0FBNUMsQ0FBb0QsbUJBQU1rTCxJQUFHLE1BQUttQyxLQUFSLENBQU4sRUFBcEQsRUFDQSxDQUNESyxXQUFhLElBQWIsQ0FDQSxDQVhELElBV08sSUFBR0EsVUFBSCxDQUFlLENBQ3JCaEssSUFBSXRELENBQUosQ0FBTSxnQkFBTixRQUNBLE1BQUt3TixNQUFMLENBQVksSUFBWixFQUNBLENBQ0QsQ0FsQkQsRUFtQkEsQ0E1QkssRUE2QkwzSSxLQTdCSyxDQTZCQ3ZCLElBQUlsRCxDQUFKLENBQU0sa0JBQU4sQ0E3QkQsQ0FBUCxDQThCQSxDLGlEQU1hLENBQ2IsTUFBTyxNQUFLb04sTUFBTCxDQUFZLEtBQVosQ0FBUCxDQUNBLEMsc0NBUU1DLE0sQ0FBUSxDQUVkckssU0FBU2xCLFlBQVQsWUFBaUMsS0FBS3NDLE1BQXRDLGlCQUE0RCxLQUFLWCxHQUFqRSxLQUF3RSxnQkFBTTlGLE1BQTlFLEVBQXdGbUksTUFBeEYsR0FFQTlDLFNBQVNwQixHQUFULFlBQXdCLEtBQUt3QyxNQUE3QixhQUErQyxLQUFLWCxHQUFwRCxDQUEyRCxPQUEzRCxFQUVBLENBQUM0SixNQUFELEVBQVdySyxTQUFTaEMsTUFBVCxZQUEyQixLQUFLb0QsTUFBaEMsaUJBQXNELEtBQUtYLEdBQTNELEtBQWtFLGdCQUFNOUYsTUFBeEUsQ0FBWCxDQUVBLE1BQU8sbUJBQVE4QyxPQUFSLENBQWdCLGdCQUFNc00sZUFBTixDQUFzQi9HLEtBQXRCLENBQTRCLEtBQUt2QyxHQUFqQyxDQUFzQyxLQUFLOUYsTUFBM0MsQ0FBaEIsQ0FBUCxDQUNBLEMsOEJBT0V5QyxLLENBQU95QixRLENBQVUsQ0FDbkIsR0FBR29CLE9BQU9zQixNQUFQLENBQWN3RixRQUFkLENBQXVCM0osS0FBdkIsQ0FBSCxDQUFrQyxDQUNqQyxHQUFHLENBQUMsS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixDQUFKLENBQTRCLENBQzNCLEtBQUs0RCxVQUFMLENBQWdCNUQsS0FBaEIsRUFBeUIsRUFBekIsQ0FDQSxDQUNELEtBQUs0RCxVQUFMLENBQWdCNUQsS0FBaEIsRUFBdUJTLElBQXZCLENBQTRCZ0IsUUFBNUIsRUFDQSxDQUNELEMsZ0NBT0d6QixLLENBQU95QixRLENBQVUsQ0FDcEIsR0FBRyxDQUFDekIsS0FBSixDQUFXLENBQ1YsS0FBSzRELFVBQUwsQ0FBa0IsRUFBbEIsQ0FDQSxDQUZELElBRU8sSUFBR2YsT0FBT3NCLE1BQVAsQ0FBY3dGLFFBQWQsQ0FBdUIzSixLQUF2QixDQUFILENBQWtDLENBQ3hDLEdBQUcsQ0FBQ3lCLFFBQUosQ0FBYyxDQUNiLEtBQUttQyxVQUFMLENBQWdCNUQsS0FBaEIsRUFBeUIsRUFBekIsQ0FDQSxDQUZELElBRU8sQ0FDTixLQUFLNEQsVUFBTCxDQUFnQjVELEtBQWhCLEVBQXlCLEtBQUs0RCxVQUFMLENBQWdCNUQsS0FBaEIsRUFBdUJrRSxNQUF2QixDQUE4QixtQkFBTW9HLE1BQU83SSxRQUFiLEVBQTlCLENBQXpCLENBQ0EsQ0FDRCxDQUNELEMsc0NBTU14QyxNLENBQVEsaUJBQ2QsbUJBQVlBLE1BQVosRUFBb0JHLE9BQXBCLENBQTRCLGFBQU8sQ0FBQyxPQUFLMkUsR0FBTCxFQUFZOUUsT0FBTzhFLEdBQVAsQ0FBWixDQUF5QixDQUE3RCxFQUNBLEMsZ0NBOUdVLENBQ1YsTUFBTyxNQUFLMkksY0FBTCxDQUFzQixLQUFLQSxjQUFMLENBQW9CUSxJQUExQyxDQUFpRCxJQUF4RCxDQUNBLEMsc0NBM0RtQlgsTTs7Ozs7OztBQ1RyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRTs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQixFQUFFOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsVUFBVTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ3RCQSw2RTs7Ozs7O0FDQUE7QUFDQSxxRUFBc0UsZ0JBQWdCLFVBQVUsR0FBRztBQUNuRyxDQUFDLEU7Ozs7OztBQ0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGFBQWE7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0NBQW9DO0FBQzVFLDRDQUE0QyxvQ0FBb0M7QUFDaEYsS0FBSywyQkFBMkIsb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQSxpQ0FBaUMsMkJBQTJCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxFOzs7Ozs7QUNyRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRCwrQkFBK0IsU0FBUyxFQUFFO0FBQzFDLENBQUMsVUFBVTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxtQkFBbUI7QUFDdkQsK0JBQStCLGFBQWE7QUFDNUM7QUFDQSxHQUFHLFVBQVU7QUFDYjtBQUNBLEU7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxVQUFVO0FBQ2I7QUFDQSxFOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsbURBQW1ELE9BQU8sRUFBRTtBQUM1RCxFOzs7Ozs7QUNUQSx5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3R0FBd0csT0FBTztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDWkEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7O3dkQ0NPLEdBQU1ZLHlCQUFVLHFCQUFjLENBQ3BDQyxXQUFZLENBQUMsS0FBSzFQLElBQUwsQ0FBVSw4QkFBZXlQLE9BQXpCLENBQUQsR0FDVixDQUFDLDhCQUFlRSxVQUFoQixFQUE4Qiw4QkFBZUMsT0FBZixFQUEwQiw4QkFBZUQsVUFEN0QsQ0FEd0IsQ0FBZCwrQkFBaEIsQ0FLUCxHQUFNQyxtQkFBb0IsT0FBcEIsY0FBNEMsVUFBNUMsZUFBd0UsaUJBQU83QixXQUFyRixDQUNJNU0sUUFBVSxFQURkLENBRUEsR0FBR3NPLFFBQVFHLE9BQVIsR0FBb0IsSUFBdkIsQ0FBNkIsQ0FDNUJ6TyxRQUFVLHdGQUFWLENBQ0EsQ0FGRCxJQUVPLElBQUlzTyxRQUFRRSxVQUFSLEVBQXNCRixRQUFRRSxVQUFSLENBQXFCRixRQUFRRyxPQUF2RCxDQUFnRSxDQUN0RXpPLCtFQUFpRnNPLFFBQVFFLFVBQXpGLE1BQ0EsQ0FGTSxJQUVBLElBQUcsMkJBQUgsQ0FBZ0IsQ0FDdEJ4TyxRQUFVLG9FQUFWLENBQ0EsQ0FHRCxHQUFJME8sTUFBTyxDQUFJRCxPQUFKLEtBQWV6TyxPQUFmLENBQVgsQ0FDQSxHQUFHLHFCQUFxQm5CLElBQXJCLENBQTBCeVAsUUFBUUEsT0FBbEMsQ0FBSCxDQUErQyxDQUM5Q0ksS0FBTyxPQUNBRCxPQURBLFFBQ2N6TyxPQURkLGlCQUVTc08sUUFBUUMsVUFBUixDQUFxQixNQUFyQixDQUE4QixLQUZ2QyxnREFHSUQsUUFBUUMsVUFBUixDQUFxQixTQUFyQixDQUFpQyxLQUhyQyxFQUFQLENBS0EsQ0FDRCxtQkFBUUksR0FBUixnREFBZUQsSUFBZixHOzs7Ozs7O3lEQzFCTyxHQUFNOUYscUJBQVEsQ0FDcEIsSUFBTyxPQURhLENBRXBCLElBQU8sT0FGYSxDQUdwQixLQUFRLFFBSFksQ0FJcEIsS0FBUSxRQUpZLENBS3BCLEtBQVEsUUFMWSxDQUFkLENBb0JBLEdBQU1PLHFCQUFRLENBQ3BCLEtBQVEsUUFEWSxDQUVwQixLQUFRLFFBRlksQ0FHcEIsS0FBUSxRQUhZLENBSXBCLEtBQVEsUUFKWSxDQUtwQixRQUFXLGVBTFMsQ0FNcEIsUUFBVyxlQU5TLENBT3BCLEtBQVEsUUFQWSxDQUFkLEM7Ozs7Ozs7OGdCQzVCS3BGLFEsZ0VBQ0FFLEcsaWFBR1osR0FBTTJLLGlCQUFrQixRQUFsQkEsZ0JBQWtCLFNBQVcsVUFDNUJDLFFBQVVDLFFBQVE3SixHQUFSLENBQVksZ0JBQVUsSUFDOUI4SixTQUQ4QixDQUNLQyxNQURMLENBQzlCRCxRQUQ4QixDQUNwQkUsVUFEb0IsQ0FDS0QsTUFETCxDQUNwQkMsVUFEb0IsQ0FDUkMsSUFEUSxDQUNLRixNQURMLENBQ1JFLElBRFEsQ0FDRi9RLEdBREUsQ0FDSzZRLE1BREwsQ0FDRjdRLEdBREUsQ0FFL0JnUixJQUYrQixDQUV4QkQsTUFBUS9RLEdBRmdCLENBR3JDLEdBQUcsTUFBT2dSLEtBQVAsR0FBZ0IsUUFBbkIsQ0FBOEIsQ0FDN0IsTUFBT0EsTUFBS2xLLEdBQUwsQ0FBUyxvQkFBUSxDQUFDOEosaUJBQUQsQ0FBV0UscUJBQVgsQ0FBdUJDLEtBQU1FLEdBQTdCLENBQVIsRUFBVCxDQUFQLENBQ0EsQ0FDRCxNQUFPLENBQUNKLE1BQUQsQ0FBUCxDQUNBLENBUGUsQ0FEa0IsQ0FTbEMsTUFBTyxVQUFHM08sTUFBSCw0Q0FBYXdPLE9BQWIsRUFBUCxDQUNBLENBVkQsQyxHQWdCcUJRLE8sWUFNcEIsZ0JBQVlsSixHQUFaLENBQWlCLDBEQUtoQixLQUFLUSxXQUFMLENBQW1CLElBQW5CLENBTUEsS0FBS0Qsb0JBQUwsQ0FBNEIsSUFBNUIsQ0FLQSxLQUFLaUgscUJBQUwsQ0FBNkIsSUFBN0IsQ0FXQSxLQUFLMkIsbUJBQUwsQ0FBMkIsSUFBM0IsQ0FXQSxLQUFLQyxtQkFBTCxDQUEyQixJQUEzQixDQUdBLEtBQUtDLEtBQUwsR0FHQSxLQUFLalIsTUFBTCxDQUFZNEgsR0FBWixFQUdBcEMsU0FBUzlCLEdBQVQsQ0FBYSxPQUFiLEVBQXNCSSxJQUF0QixDQUEyQixrQkFBWSxDQUN0QyxHQUFHQyxRQUFILENBQWEsQ0FDWixNQUFLbU4sVUFBTCxDQUFrQm5OLFNBQVNvQyxHQUFULEVBQWxCLENBQ0FULElBQUl0RCxDQUFKLENBQU0sWUFBTixDQUFvQixNQUFLOE8sVUFBTCxDQUFnQnZQLE1BQWhCLENBQXlCLENBQXpCLENBQTZCLE1BQUt1UCxVQUFsQyxDQUErQyxNQUFuRSxFQUNBLENBQ0QsQ0FMRCxDQUtHLGtCQUFLeEwsS0FBSXZELENBQUosQ0FBTSxZQUFOLENBQW9CRyxDQUFwQixDQUFMLEVBTEgsRUFRQSxDLHNFQU9Nc0YsRyxDQUFLLGlCQUNYLG1CQUFZQSxLQUFPLEVBQW5CLEVBQXVCNUYsT0FBdkIsQ0FBK0IsYUFBTyxDQUFDLE9BQUsyRSxHQUFMLEVBQVlpQixJQUFJakIsR0FBSixDQUFaLENBQXNCLENBQTdELEVBQ0EsQyxxQ0FpRlEsQ0FDUixLQUFLM0csTUFBTCxDQUFZLENBQ1hvSSxZQUFhLGdCQUFNQSxXQUFOLEVBREYsQ0FFWHBILFNBQVUsT0FGQyxDQUFaLEVBSUEsQyxtQ0FoRllYLEssQ0FBTyxDQUNuQixnQkFBTVcsUUFBTixDQUFpQlgsS0FBakIsQ0FDQSxDLG1CQU1jLENBQ2QsTUFBTyxpQkFBTVcsUUFBYixDQUNBLEMscUNBTWN1UCxPLENBQVMsaUJBQ3ZCN0ssSUFBSXZELENBQUosQ0FBTSx1QkFBTixDQUErQm9PLE9BQS9CLEVBQ0EsR0FBR0EsT0FBSCxDQUFZLENBQ1gsR0FBSSxDQUFDLEtBQUtZLFdBQVYsQ0FBdUIsQ0FJdEIsS0FBS0EsV0FBTCxDQUFtQixHQUFHclAsTUFBSCxDQUFVeU8sU0FBVyxFQUFyQixDQUFuQixDQUNBLENBTEQsSUFLTyxhQUVOLEdBQU1hLGlCQUFrQmYsZ0JBQWdCLE9BQUtjLFdBQXJCLENBQXhCLENBRU1FLFlBQWNoQixnQkFBZ0JFLE9BQWhCLENBRnBCLENBSUFjLFlBQVlyUCxPQUFaLENBQW9CLG1CQUFhLENBQ2hDLEdBQUcsQ0FBQ29QLGdCQUFnQjlELElBQWhCLENBQXFCLHVCQUN2Qm1ELFFBQU9FLElBQVAsR0FBZ0JXLFVBQVVYLElBQTFCLEVBQ0FGLE9BQU9ELFFBQVAsR0FBb0JjLFVBQVVkLFFBRDlCLEVBRUFDLE9BQU9DLFVBQVAsR0FBc0JZLFVBQVVaLFVBSFQsRUFBckIsQ0FBSixDQUcrQyxDQUM5Q1UsZ0JBQWdCL04sSUFBaEIsQ0FBcUJpTyxTQUFyQixFQUNBLENBQ0QsQ0FQRCxFQVNBLE9BQUtILFdBQUwsQ0FBbUJDLGdCQUFnQkcsTUFBaEIsQ0FBdUIsU0FBQ3hHLFFBQUQsQ0FBV3lHLE9BQVgsQ0FBdUIsSUFDekRoQixTQUR5RCxDQUMzQmdCLE9BRDJCLENBQ3pEaEIsUUFEeUQsQ0FDL0NFLFVBRCtDLENBQzNCYyxPQUQyQixDQUMvQ2QsVUFEK0MsQ0FDbkNDLElBRG1DLENBQzNCYSxPQUQyQixDQUNuQ2IsSUFEbUMsQ0FFMUR4RCxHQUYwRCxDQUVwRHBDLFNBQVNxQyxTQUFULENBQW1CLGtCQUFLcUUsR0FBRWpCLFFBQUYsR0FBZUEsUUFBZixFQUEyQmlCLEVBQUVmLFVBQUYsR0FBaUJBLFVBQWpELEVBQW5CLENBRm9ELENBR2hFLEdBQUd2RCxLQUFPLENBQVYsQ0FBYSxDQUNacEMsU0FBU29DLEdBQVQsRUFBY3dELElBQWQsQ0FBbUJ0TixJQUFuQixDQUF3QnNOLElBQXhCLEVBQ0EsQ0FGRCxJQUVPLENBQ041RixTQUFTMUgsSUFBVCxDQUFjLENBQUNtTixpQkFBRCxDQUFXRSxxQkFBWCxDQUF1QkMsS0FBTSxDQUFDQSxJQUFELENBQTdCLENBQWQsRUFDQSxDQUNELE1BQU81RixTQUFQLENBQ0EsQ0FUa0IsQ0FTaEIsRUFUZ0IsQ0FBbkIsQ0FmTSxLQXlCTixDQUNELENBQ0QsQyxtQkFNZ0IsQ0FDaEIsTUFBTyxNQUFLb0csV0FBTCxFQUFvQixDQUMxQixDQUNDWCxTQUFVLE9BRFgsQ0FFQ0UsV0FBWSxZQUZiLENBR0NDLEtBQU0sQ0FDTCxtQ0FESyxDQUVMLGdEQUZLLENBR0wsaURBSEssQ0FIUCxDQUQwQixDQUEzQixDQVdBLEMsc0NBakptQkcsTTs7Ozs7Ozs2VENqQkFZLE8sQ0FNcEIsZ0JBQVkzTixRQUFaLENBQXNCLDJDQUNyQixHQUFNbEMsUUFBUyxxQkFBYyxFQUFkLENBQWtCa0MsU0FBU29DLEdBQVQsRUFBbEIsQ0FBZixDQUtBLEtBQUtGLEdBQUwsQ0FBV2xDLFNBQVNxQyxJQUFULEVBQVgsQ0FLQSxLQUFLdUwsRUFBTCxDQUFVOVAsT0FBTzhQLEVBQWpCLENBS0EsS0FBS3JELFNBQUwsQ0FBaUJ6TSxPQUFPeU0sU0FBeEIsQ0FRQSxLQUFLdkksTUFBTCxDQUFjbEUsT0FBT2tFLE1BQXJCLENBS0EsS0FBS29JLEdBQUwsQ0FBV3RNLE9BQU9zTSxHQUFsQixDQUVBLEMsaUJBckNtQnVELE07Ozs7Ozs7a2tCQ0hUaE0sRyxxSUFFQUYsUSwwY0FJWixHQUFNb00sY0FBZSxDQUFDLGdCQUFNN0gsVUFBTixDQUFpQmtDLElBQWxCLENBQXdCLGdCQUFNbEMsVUFBTixDQUFpQm1DLFdBQXpDLENBQXJCLENBRU0yRixvQkFBc0IsUUFBdEJBLG9CQUFzQixDQUFDekosV0FBRCxDQUFjdUUsSUFBZCxDQUF1QixDQUNsRCxNQUFPdkUsYUFBWXVFLElBQVosRUFBa0JtRixLQUFsQixFQUEyQjFKLFlBQVl1RSxJQUFaLEVBQWtCbEMsS0FBN0MsRUFBc0RyQyxZQUFZdUUsSUFBWixDQUE3RCxDQUNBLENBSkQsQ0FNTW9GLG1CQUFxQixRQUFyQkEsbUJBQXFCLENBQUMzSixXQUFELENBQWN1RSxJQUFkLENBQW9CcUYsS0FBcEIsQ0FBMkJDLEtBQTNCLENBQXFDLENBQy9EN0osWUFBWXVFLElBQVosRUFBb0IsQ0FBQ21GLE1BQU9HLEtBQVIsQ0FBcEIsQ0FDQSxNQUFPN0osYUFBWTRKLEtBQVosQ0FBUCxDQUNBLENBVEQsQyxHQWNxQkUsTSxZQUtwQixlQUFZclEsTUFBWixDQUFvQiwwQ0FLbkIsS0FBSytFLE1BQUwsQ0FBYy9FLE9BQU8rRSxNQUFyQixDQUtBLEtBQUtYLEdBQUwsQ0FBV3BFLE9BQU9vRSxHQUFsQixDQUtBLEtBQUtpQyxJQUFMLENBQVlyRyxPQUFPcUcsSUFBbkIsQ0FLQSxLQUFLbUgsS0FBTCxDQUFhLHFCQUFjLENBQUN6RSxNQUFPLEtBQVIsQ0FBZVAsTUFBTyxLQUF0QixDQUFkLENBQTRDeEksT0FBT3dOLEtBQW5ELENBQWIsQ0FLQSxLQUFLdkUsU0FBTCxDQUFpQmpKLE9BQU9pSixTQUFQLEVBQW9CLGdCQUFNaEwsTUFBTixDQUFhcUksb0JBQWxELENBS0EsS0FBSzJILElBQUwsQ0FBWSxJQUFaLENBS0EsS0FBS1AsZUFBTCxDQUF1QixFQUF2QixDQUtBLEtBQUt4SixNQUFMLGlCQUtBLEtBQUtvTSxPQUFMLENBQWUsRUFBZixDQUdBLEtBQUsvSixXQUFMLENBQW1CdkcsT0FBT3VHLFdBQTFCLENBQ0EsQywyRkEyQ2lCQSxXLENBQWEsZ0JBQzlCMUMsSUFBSXZELENBQUosQ0FBTSx5QkFBTixDQUFpQ2lHLFdBQWpDLEVBQ0EsS0FBS0EsV0FBTCxDQUFtQkEsV0FBbkIsQ0FDQSxNQUFPd0QsV0FBVUMsWUFBVixDQUF1QnVHLFlBQXZCLENBQW9DLEtBQUtoSyxXQUF6QyxFQUNMdEUsSUFESyxDQUNBLGVBQVMsQ0FDZCxDQUFDLE9BQUQsQ0FBVSxPQUFWLEVBQW1COUIsT0FBbkIsQ0FBMkIsY0FBUSxDQUNsQyxHQUFNcVEsa0JBQW1CLE1BQUtqSyxXQUFMLENBQWlCNEQsSUFBakIsQ0FBekIsQ0FDQSxHQUFHcUcsZ0JBQUgsQ0FBcUIsQ0FDcEIsR0FBSUEsaUJBQWlCdkksUUFBakIsRUFBNkJ1SSxpQkFBaUJ0SSxVQUFsRCxDQUE4RCxDQUM3RCxNQUFLb0ksT0FBTCxDQUFhbkcsSUFBYixFQUFxQjZGLG9CQUNwQlEsZ0JBRG9CLENBRXBCQSxpQkFBaUJ0SSxVQUFqQixDQUE4QixZQUE5QixDQUE2QyxVQUZ6QixDQUFyQixDQUlBLENBQ0QsQ0FDRCxDQVZELEVBV0EsTUFBS3VJLEtBQUwsQ0FBYUEsS0FBYixDQUNBLENBZEssQ0FBUCxDQWVBLEMsbUNBNkU2QyxJQUF6Q0MsTUFBeUMsMkRBQWpDLHNCQUFZNUQsS0FBcUIsQ0FBZDZELEtBQWMsMkRBQU4sSUFBTSxDQUM3QzlNLElBQUl2RCxDQUFKLENBQU0sTUFBTixDQUFjb1EsS0FBZCxDQUFxQkMsS0FBckIsRUFDQSxHQUFJNUgsT0FBUSxLQUFLeUUsS0FBTCxDQUFXekUsS0FBdkIsQ0FBOEJQLE1BQVEsS0FBS2dGLEtBQUwsQ0FBV2hGLEtBQWpELENBQXdEb0ksYUFBeEQsQ0FDQSxPQUFRRixLQUFSLEVBQ0MsSUFBSyx1QkFBWTVELEtBQWpCLENBQ0MvRCxNQUFRNEgsS0FBUixDQUNBQyxPQUFTLEtBQUtILEtBQUwsQ0FBV25ILGNBQVgsRUFBVCxDQUNBLE1BQ0QsSUFBSyx1QkFBWXlELEtBQWpCLENBQ0EsSUFBSyx1QkFBWUUsY0FBakIsQ0FDQ3pFLE1BQVFtSSxLQUFSLENBQ0FDLE9BQVMsS0FBS0gsS0FBTCxDQUFXcEgsY0FBWCxFQUFULENBQ0EsTUFDRCxJQUFLLHVCQUFZMkQsV0FBakIsQ0FDQ2pFLE1BQVE0SCxLQUFSLENBQ0FuSSxNQUFRbUksS0FBUixDQUNBQyxPQUFTLEtBQUtILEtBQUwsQ0FBV0ksU0FBWCxFQUFULENBQ0EsTUFkRixDQWlCQUQsT0FBT3pRLE9BQVAsQ0FBZSxlQUFTLENBQUN1USxNQUFNSSxPQUFOLENBQWdCLENBQUNILEtBQWpCLENBQXdCLENBQWpELEVBRUEsS0FBS25ELEtBQUwsQ0FBYSxDQUFDekUsV0FBRCxDQUFRUCxXQUFSLENBQWIsQ0FDQTdFLFNBQVNwQyxHQUFULFlBQXdCLEtBQUt3RCxNQUE3QixhQUErQyxLQUFLWCxHQUFwRCxVQUFpRSxLQUFLb0osS0FBdEUsRUFDQSxDLHNDQVlNa0QsSyxDQUFPLENBQ2IsS0FBS0ssSUFBTCxDQUFVTCxLQUFWLENBQWlCLEtBQWpCLEVBQ0EsQyxxQ0FNTyxDQUNQLEdBQUcsQ0FBQyxDQUFDLHVDQUFrQnpSLE9BQWxCLENBQTBCLEtBQUtpRixNQUEvQixDQUFMLENBQTZDLENBQzVDLEtBQUtBLE1BQUwsb0JBRUEsR0FBTWhELGlCQUFrQixLQUFLNkQsTUFBdkIsaUJBQTZDLEtBQUtYLEdBQXhELENBQ0FULFNBQVNwQixHQUFULENBQWFyQixJQUFiLENBQW1CLGFBQW5CLEVBQ0F5QyxTQUFTcEIsR0FBVCxDQUFhckIsSUFBYixDQUFtQixlQUFuQixFQUVBeUMsU0FBU2xCLFlBQVQsWUFBaUMsS0FBS3NDLE1BQXRDLGFBQXdELEtBQUtYLEdBQTdELEVBQW9FcUMsTUFBcEUsR0FDQTlDLFNBQVNsQixZQUFULFlBQWlDLEtBQUtzQyxNQUF0QyxpQkFBNEQsS0FBS1gsR0FBakUsRUFBd0VxQyxNQUF4RSxHQUVBOUMsU0FBU2hDLE1BQVQsQ0FBZ0JULElBQWhCLEVBRUF5QyxTQUFTaEMsTUFBVCxZQUEyQixLQUFLb0QsTUFBaEMsYUFBa0QsS0FBS1gsR0FBdkQsRUFDQSxLQUFLcU0sS0FBTCxDQUFhLElBQWIsQ0FFQSxLQUFLdk0sTUFBTCxtQkFDQSxDQUNELE1BQU8sbUJBQVE5QyxPQUFSLENBQWdCLEtBQUs4QyxNQUFyQixDQUFQLENBQ0EsQyxrREFPWStELFEsQ0FBVSxDQUN0QixNQUFPLE1BQUsrSSxhQUFMLENBQW1CLHNCQUFZakUsS0FBL0IsQ0FBc0M5RSxRQUF0QyxDQUFQLENBQ0EsQywwREFPZ0JBLFEsQ0FBVSxDQUMxQixNQUFPLE1BQUsrSSxhQUFMLENBQW1CLHNCQUFZbEUsS0FBL0IsQ0FBc0M3RSxRQUF0QyxDQUFQLENBQ0EsQyxvREFTYWtDLEksQ0FBTWxDLFEsQ0FBVSxpQkFDN0JwRSxJQUFJdkQsQ0FBSixDQUFNLHFCQUFOLENBQTZCNkosSUFBN0IsQ0FBbUNsQyxRQUFuQyxFQUNBLEdBQUcsS0FBS3dJLEtBQUwsQ0FBV0ksU0FBWCxHQUF1QnBGLElBQXZCLENBQTRCLHNCQUFTaUYsT0FBTXZHLElBQU4sR0FBZUEsSUFBeEIsRUFBNUIsQ0FBSCxDQUE4RCxDQUM3RCxHQUFJOEcsTUFBTyxrQkFBUTdQLE9BQVIsQ0FBZ0I2RyxRQUFoQixDQUFYLENBQ01pSixlQUFpQm5CLGFBQWE5USxPQUFiLENBQXFCLEtBQUtxUixPQUFMLENBQWFuRyxJQUFiLENBQXJCLENBRHZCLENBRUEsR0FBRyxDQUFDbEMsUUFBRCxFQUFhLENBQUMsQ0FBQyxDQUFDaUosY0FBbkIsQ0FBbUMsQ0FFbENELEtBQU8sa0JBQVE3UCxPQUFSLENBQWdCMk8sYUFBYSxDQUFDbUIsZUFBaUIsQ0FBbEIsRUFBdUJuQixhQUFhalEsTUFBakQsQ0FBaEIsQ0FBUCxDQUNBLENBSEQsSUFHTyxJQUFHLENBQUMsQ0FBQ2lRLGFBQWE5USxPQUFiLENBQXFCZ0osUUFBckIsQ0FBTCxDQUFxQyxDQUUzQ2dKLEtBQU8sZ0JBQU0vRyxPQUFOLEdBQ0xqSSxJQURLLENBQ0EsV0FBSyxDQUVWLEdBQU1pSSxTQUFVNUosRUFBSzZKLElBQUwsVUFBa0J0RixHQUFsQixDQUFzQiw0QkFBZXNNLGFBQVlsSixRQUEzQixFQUF0QixDQUFoQixDQUVBaUMsUUFBUWtILElBQVIsR0FFQSxHQUFJQyxZQUFhcEosUUFBakIsQ0FDQSxHQUFHQSxVQUFZLENBQUNpQyxRQUFRdUIsSUFBUixDQUFhLHVCQUFVbk4sVUFBVzJKLFFBQXJCLEVBQWIsQ0FBaEIsQ0FBNkQsQ0FDNUQsTUFBTyxtQkFBUXBILE1BQVIsQ0FBZSxHQUFJbEMsTUFBSixZQUFxQndMLElBQXJCLFdBQWYsQ0FBUCxDQUNBLENBQ0QsR0FBRyxDQUFDbEMsUUFBRCxFQUFhaUMsUUFBUXBLLE1BQVIsQ0FBaUIsQ0FBakMsQ0FBb0MsQ0FDbkMsR0FBSXdMLEtBQU0sT0FBS2dGLE9BQUwsQ0FBYW5HLElBQWIsRUFBcUJELFFBQVFxQixTQUFSLENBQWtCLGtCQUFLK0YsS0FBTSxPQUFLaEIsT0FBTCxDQUFhbkcsSUFBYixDQUFYLEVBQWxCLFFBQXJCLENBQThFLENBQXhGLENBQ0FrSCxXQUFhbkgsUUFBUSxFQUFFb0IsR0FBRixDQUFRcEIsUUFBUXBLLE1BQXhCLENBQWIsQ0FDQSxDQUNELE1BQU91UixXQUFQLENBQ0EsQ0FoQkssQ0FBUCxDQWlCQSxDQW5CTSxJQW1CQSxDQUNOSixLQUFPLGtCQUFRN1AsT0FBUixDQUFnQjZHLFFBQWhCLENBQVAsQ0FDQSxDQUVELE1BQU9nSixNQUNMaFAsSUFESyxDQUNBLGdCQUFVLENBQ2YsR0FBRyxPQUFLcU8sT0FBTCxDQUFhbkcsSUFBYixJQUF1QjdMLE1BQTFCLENBQWtDLENBRWpDLE9BQUtnUyxPQUFMLENBQWFuRyxJQUFiLEVBQXFCN0wsTUFBckIsQ0FFQSxPQUFLbVMsS0FBTCxDQUFXSSxTQUFYLEdBQXVCMVEsT0FBdkIsQ0FBK0Isc0JBQVN1USxPQUFNYSxJQUFOLEVBQVQsRUFBL0IsRUFFQSxHQUFNaEwsYUFBYyxxQkFBYyxFQUFkLENBQWtCLE9BQUtBLFdBQXZCLENBQXBCLENBQ0lpTCxNQUFRLENBQUMsWUFBRCxDQUFlLFVBQWYsQ0FEWixDQUVBLEdBQUcsQ0FBQyxDQUFDekIsYUFBYTlRLE9BQWIsQ0FBcUJYLE1BQXJCLENBQUwsQ0FBbUMsQ0FDbENrVCxNQUFRQSxNQUFNQyxPQUFOLEVBQVIsQ0FDQSxDQUNEdkIsbUJBQW1CM0osWUFBWTRELElBQVosQ0FBbkIsQ0FBc0NxSCxNQUFNLENBQU4sQ0FBdEMsQ0FBZ0RBLE1BQU0sQ0FBTixDQUFoRCxDQUEwRGxULE1BQTFELEVBQ0F1RixJQUFJdkQsQ0FBSixDQUFNLHFCQUFOLENBQTZCNkosSUFBN0IsQ0FBbUM1RCxXQUFuQyxFQUNBLE1BQU8sUUFBS21MLGlCQUFMLENBQXVCbkwsV0FBdkIsQ0FBUCxDQUNBLENBQ0QsQ0FqQkssRUFrQkx0RSxJQWxCSyxDQWtCQSwwQkFsQkEsQ0FBUCxDQW1CQSxDQUNELE1BQU8sbUJBQVFwQixNQUFSLENBQWUsR0FBSWxDLE1BQUosc0NBQStDd0wsSUFBL0MsVUFBZixDQUFQLENBQ0EsQyxzQ0FsUmU1RCxXLENBQWEsaUJBRTNCdkcsT0FBU3VHLGFBQWUsZ0JBQU10SSxNQUFOLENBQWFzSSxXQUZWLENBRzNCb0wsbUJBQXFCLGdCQUFNcEwsV0FBTixFQUhNLENBSTVCLENBQUMsT0FBRCxDQUFVLE9BQVYsRUFBbUJwRyxPQUFuQixDQUEyQixjQUFRLENBQ2xDLEdBQUcsQ0FBQyxDQUFDLE9BQUtrRyxJQUFMLENBQVVwSCxPQUFWLENBQWtCb0gsSUFBbEIsQ0FBTCxDQUE4QixDQUM3QnJHLE9BQU9xRyxJQUFQLEVBQWUsS0FBZixDQUNBLENBRkQsSUFFTyxJQUFHLENBQUNyRyxPQUFPcUcsSUFBUCxDQUFKLENBQWlCLENBQ3ZCckcsT0FBT3FHLElBQVAsRUFBZXNMLG1CQUFtQnRMLElBQW5CLENBQWYsQ0FDQSxDQUNELEdBQUdyRyxPQUFPcUcsSUFBUCxFQUFhNEIsUUFBYixFQUF5QmpJLE9BQU9xRyxJQUFQLEVBQWE2QixVQUF6QyxDQUFxRCxDQUNwRCxPQUFLb0ksT0FBTCxDQUFhakssSUFBYixFQUFxQjJKLG9CQUNwQmhRLE9BQU9xRyxJQUFQLENBRG9CLENBRXBCckcsT0FBT3FHLElBQVAsRUFBYTZCLFVBQWIsQ0FBMEIsWUFBMUIsQ0FBeUMsVUFGckIsQ0FBckIsQ0FJQSxDQUNELENBWkQsRUFhQXJFLElBQUl2RCxDQUFKLENBQU0sc0JBQU4sQ0FBOEJOLE1BQTlCLEVBSUEsS0FBSzRSLFlBQUwsQ0FBb0I1UixNQUFwQixDQUNBLEMsbUJBTWlCLENBQ2pCLE1BQU8sTUFBSzRSLFlBQVosQ0FDQSxDLGdDQStCVTVJLFcsQ0FBYSxpQkFDdkIsR0FBR0EsV0FBSCxDQUFnQixhQUNmLEdBQUcsRUFBRUEsc0JBQXVCNkksWUFBekIsQ0FBSCxDQUEwQyxDQUN6QyxLQUFNLElBQUlsVCxNQUFKLENBQVUsaUNBQVYsQ0FBTixDQUNBLENBRUQsR0FBTW1ULGNBQWUsRUFBckIsQ0FDQTlJLFlBQVk2SCxTQUFaLEdBQXdCMVEsT0FBeEIsQ0FBZ0MsZUFBUyxDQUV4Q3VRLE1BQU1JLE9BQU4sQ0FBZ0IsQ0FBQyxPQUFLdEQsS0FBTCxDQUFXa0QsTUFBTXZHLElBQWpCLENBQWpCLENBRUEsR0FBRyxDQUFDLE9BQUttRyxPQUFMLENBQWFJLE1BQU12RyxJQUFuQixDQUFKLENBQThCLENBQzdCMkgsYUFBYXBCLE1BQU12RyxJQUFuQixFQUEyQnVHLE1BQU1xQixLQUFqQyxDQUNBLENBQ0QsQ0FQRCxFQVNBLEdBQUcsbUJBQVlELFlBQVosRUFBMEJoUyxNQUE3QixDQUFxQyxDQUNwQyxnQkFBTW9LLE9BQU4sR0FBZ0JqSSxJQUFoQixDQUFxQixpQkFBVyxDQUMvQixtQkFBWTZQLFlBQVosRUFBMEIzUixPQUExQixDQUFrQyxjQUFRLENBQ3pDLEdBQUcrSixRQUFXQyxJQUFYLFNBQUgsQ0FBMkIsQ0FDMUIsR0FBTTZILFdBQVk5SCxRQUFXQyxJQUFYLFVBQ2hCbEYsTUFEZ0IsQ0FDVCx1QkFBVTNHLFFBQU95VCxLQUFQLENBQWFqUyxNQUFiLEVBQXVCeEIsT0FBT3lULEtBQVAsR0FBaUJELGFBQWEzSCxJQUFiLENBQWxELEVBRFMsQ0FBbEIsQ0FFQSxHQUFHNkgsVUFBVWxTLE1BQVYsR0FBcUIsQ0FBckIsRUFBMEIsQ0FBQyxPQUFLd1EsT0FBTCxDQUFhbkcsSUFBYixDQUE5QixDQUFrRCxDQUNqRCxPQUFLbUcsT0FBTCxDQUFhbkcsSUFBYixFQUFxQjZILFVBQVUsQ0FBVixFQUFhL0osUUFBbEMsQ0FDQSxDQUNELENBQ0QsQ0FSRCxFQVNBLENBVkQsRUFXQSxDQUVELE9BQUtnRyxJQUFMLENBQVksZ0JBQU1nRSxZQUFOLENBQW1CakosV0FBbkIsQ0FBZ0MsT0FBS0MsU0FBckMsQ0FBZ0QsT0FBS2dGLElBQXJELENBQTJELENBQTNELENBQVosQ0FDQSxPQUFLL0osTUFBTCxzQkFDQUwsSUFBSXZELENBQUosQ0FBTSxpQkFBTixDQUF5QjBJLFdBQXpCLENBQXNDLE9BQUtpRixJQUEzQyxFQUVBLE9BQUtQLGVBQUwsQ0FBcUJ2TixPQUFyQixDQUE2QiwrQkFBa0JzTixnQkFBZXlFLFdBQWYsQ0FBMkIsT0FBS0MsTUFBaEMsQ0FBd0NuSixXQUF4QyxDQUFsQixFQUE3QixFQWpDZSxLQWtDZixDQWxDRCxJQWtDTyxJQUFHLEtBQUt5SCxLQUFMLEVBQWMsQ0FBQ3pILFdBQWxCLENBQStCLENBRXJDLEtBQUtpRixJQUFMLENBQVVwRSxTQUFWLENBQXNCLElBQXRCLENBQ0EsS0FBS1osU0FBTCxDQUFlbUosV0FBZixDQUEyQixLQUFLbkUsSUFBaEMsRUFDQSxLQUFLQSxJQUFMLENBQVksSUFBWixDQUVBLEtBQUt3QyxLQUFMLENBQVdJLFNBQVgsR0FBdUIxUSxPQUF2QixDQUErQixzQkFBU3VRLE9BQU1hLElBQU4sRUFBVCxFQUEvQixFQUVBLEtBQUs3RCxlQUFMLENBQXFCdk4sT0FBckIsQ0FBNkIsK0JBQWtCc04sZ0JBQWU5RyxLQUFmLEVBQWxCLEVBQTdCLEVBQ0EsQ0FLRCxLQUFLd0wsTUFBTCxDQUFjbkosV0FBZCxDQUNBLEMsbUJBTVksQ0FDWixNQUFPLE1BQUttSixNQUFaLENBQ0EsQyxzQ0FxS1lwTixNLENBQVFzQixJLENBQU00QyxTLENBQVcxQyxXLENBQWEsQ0FDbEQsR0FBRyxDQUFDLGdCQUFNbkksSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSxnREFBVixDQUFmLENBQVAsQ0FDQSxDQUNELEdBQU0wVCxnQkFBaUIsQ0FDckJsTixLQUFNLGdCQUFNL0csSUFBTixDQUFXZ0csR0FESSxDQUVyQjlGLE9BQVEsZ0JBQU1BLE1BRk8sQ0FHckIrSCxTQUhxQixDQUF2QixDQUtDaU0sYUFBZSxHQUFJakMsTUFBSixDQUFVLHFCQUFjLENBQUN0TCxhQUFELENBQVN3Qix1QkFBVCxDQUFzQjBDLG1CQUF0QixDQUFkLENBQWdEb0osY0FBaEQsQ0FBVixDQUxoQixDQU1BeE8sSUFBSXZELENBQUosQ0FBTSxhQUFOLENBQXFCZ1MsWUFBckIsQ0FBbUNBLGFBQWEvTCxXQUFoRCxFQUNBLE1BQU93RCxXQUFVQyxZQUFWLENBQXVCdUcsWUFBdkIsQ0FBb0MrQixhQUFhL0wsV0FBakQsRUFDTHRFLElBREssQ0FDQSxlQUFTLENBQUNxUSxhQUFhN0IsS0FBYixDQUFxQkEsS0FBckIsQ0FBNEIsQ0FEdEMsRUFHTHhPLElBSEssQ0FHQSxpQkFBTTBCLFVBQVNuQyxJQUFULFlBQXlCdUQsTUFBekIsWUFBMkNzTixjQUEzQyxDQUFOLEVBSEEsRUFJTHBRLElBSkssQ0FJQSxtQkFBYSxDQUNsQnFRLGFBQWFsTyxHQUFiLENBQW1CbU8sVUFBVWhPLElBQVYsRUFBbkIsQ0FFQSxnQkFBTVMsT0FBTixDQUFjd04sTUFBZCxDQUFxQkYsYUFBYWxPLEdBQWxDLEVBQXlDa08sWUFBekMsQ0FFQTNPLFNBQVNsQixZQUFULFlBQWlDc0MsTUFBakMsYUFBbUR1TixhQUFhbE8sR0FBaEUsRUFBdUV6QyxNQUF2RSxHQUVBZ0MsU0FBU2xCLFlBQVQsWUFBaUNzQyxNQUFqQyxpQkFBdUR1TixhQUFhbE8sR0FBcEUsRUFBMkV6QyxNQUEzRSxHQUVBLEdBQ0NULGlCQUFrQm9SLGFBQWF2TixNQUEvQixpQkFBcUR1TixhQUFhbE8sR0FEbkUsQ0FFQ2dNLE1BQVEsUUFBUkEsTUFBUSxpQkFBWSxxQkFBYyxDQUFDOVIsT0FBUTRELFNBQVNxQyxJQUFULEVBQVQsQ0FBZCxDQUF5Q3JDLFNBQVNvQyxHQUFULElBQWtCLEVBQTNELENBQVosRUFGVCxDQUdBWCxTQUFTdkIsRUFBVCxDQUFZbEIsSUFBWixDQUFrQixhQUFsQixDQUNDLGtCQUFZLENBQ1gsR0FBTXVSLFlBQWFyQyxNQUFNbE8sUUFBTixDQUFuQixDQUNBMkIsSUFBSXZELENBQUosQ0FBTSxrQkFBTixDQUEwQm1TLFVBQTFCLEVBQ0EsZ0JBQU0vRSxlQUFOLENBQXNCZ0YsS0FBdEIsQ0FBNEJKLFlBQTVCLENBQTBDRyxVQUExQyxFQUNFeFEsSUFERixDQUNPLG1CQUFNcVEsY0FBYTVFLGVBQWIsQ0FBNkJsTSxJQUE3QixDQUFrQ29NLEVBQWxDLENBQU4sRUFEUCxFQUVBLENBTkYsQ0FPQy9KLElBQUlwRCxDQUFKLENBQU1mLElBQU4sQ0FBV21FLEdBQVgsQ0FQRCxFQVNBRixTQUFTdkIsRUFBVCxDQUFZbEIsSUFBWixDQUFrQixlQUFsQixDQUNDLGtCQUFZLENBQ1gsR0FBTXVSLFlBQWFyQyxNQUFNbE8sUUFBTixDQUFuQixDQUNBMkIsSUFBSXZELENBQUosQ0FBTSxxQkFBTixDQUE2Qm1TLFVBQTdCLEVBQ0EsR0FBTUUsVUFBVyxnQkFBTWpGLGVBQU4sQ0FBc0IvRyxLQUF0QixDQUE0QjJMLGFBQWFsTyxHQUF6QyxDQUE4Q3FPLFdBQVduVSxNQUF6RCxDQUFqQixDQUNBZ1UsYUFBYTVFLGVBQWIsQ0FBK0I0RSxhQUFhNUUsZUFBYixDQUE2QnpJLE1BQTdCLENBQW9DLG1CQUFNMkksTUFBTytFLFFBQWIsRUFBcEMsQ0FBL0IsQ0FDQSxDQU5GLENBT0M5TyxJQUFJcEQsQ0FBSixDQUFNZixJQUFOLENBQVdtRSxHQUFYLENBUEQsRUFTQUEsSUFBSXZELENBQUosQ0FBTSxjQUFOLENBQXNCZ1MsWUFBdEIsRUFDQSxNQUFPQSxhQUFQLENBQ0EsQ0FwQ0ssQ0FBUCxDQXFDQSxDLHFDQXhZbUJqQyxLOzs7Ozs7O3VaQ2hCQXVDLGMsWUFLcEIsd0JBQWMsa0RBS2IsS0FBS0osTUFBTCxDQUFjLEVBQWQsQ0FLQSxLQUFLeEUsTUFBTCxDQUFjLEVBQWQsQ0FDQSxDLG1GQU9TOUgsVSxDQUFZLENBQ3JCLEdBQUlDLGNBQWUsS0FBSzZILE1BQUwsQ0FBWTlILFdBQVc5QixHQUF2QixDQUFuQixDQUNBLEdBQUcrQixZQUFILENBQWlCLENBQ2hCQSxhQUFhekUsTUFBYixDQUFvQndFLFVBQXBCLEVBQ0EsQ0FGRCxJQUVPLENBQ04sS0FBSzhILE1BQUwsQ0FBWTlILFdBQVc5QixHQUF2QixFQUE4QitCLGFBQWUscUJBQVdELFVBQVgsQ0FBN0MsQ0FDQSxDQUNELE1BQU9DLGFBQVAsQ0FDQSxDLDRDQU9TRCxVLENBQVksQ0FFckIsTUFBTyxNQUFLc00sTUFBTCxDQUFZdE0sV0FBVzlCLEdBQXZCLENBQVAsQ0FDQSxDLDZDQXpDbUJ3TyxhOzs7Ozs7OzhtQkNIVC9PLEcsc0lBRUFGLFEsdUVBRVosd0IsNlRBRUEsR0FBTWtQLHNCQUF1QixDQUFDQSxxQkFBc0IsSUFBdkIsQ0FBN0IsQ0FDTUMsZUFBaUIsUUFBakJBLGVBQWlCLGdCQUFZLENBQUNDLG9CQUFxQkMsT0FBdEIsQ0FBK0JDLG9CQUFxQkQsT0FBcEQsQ0FBWixFQUR2QixDQU9NRSxrQ0FBb0MsY0FQMUMsQ0FhTUMsK0JBQWdDLFdBYnRDLENBbUJNQywrQkFBaUMsV0FuQnZDLENBeUJNQyw4QkFBZ0MsVUF6QnRDLENBK0JNQyw0QkFBOEIsUUEvQnBDLENBcUNNQyw0QkFBOEIsUUFyQ3BDLENBMkNNQywyQkFBNEIsT0EzQ2xDLENBK0NNQyxRQUFVLFFBQVZBLFFBQVUsVUFBS0MsR0FBRUMsTUFBRixFQUFZLE1BQU9ELEdBQUVDLE1BQVQsR0FBb0IsVUFBaEMsQ0FBNkNELEVBQUVDLE1BQUYsRUFBN0MsQ0FBMERELENBQS9ELEVBL0NoQixDLEdBb0RxQkUsZSxZQVFwQix3QkFBWUMsT0FBWixDQUFxQkMsUUFBckIsQ0FBK0JDLFlBQS9CLENBQTZDQyxPQUE3QyxDQUFzRCxrRUFLckQsS0FBS0gsT0FBTCxDQUFlQSxPQUFmLENBS0EsS0FBS0MsUUFBTCxDQUFnQkEsUUFBaEIsQ0FLQSxLQUFLQyxZQUFMLENBQW9CQSxZQUFwQixDQU1BLEtBQUtFLFVBQUwsYUFBOEIsS0FBS0osT0FBbkMsS0FBOEMsS0FBS0MsUUFBbkQsS0FBK0QsZ0JBQU14VixNQUFyRSxDQU1BLEtBQUs0VixXQUFMLGFBQStCLEtBQUtMLE9BQXBDLEtBQStDLEtBQUtDLFFBQXBELEtBQWdFLEtBQUtDLFlBQXJFLENBS0EsS0FBS0ksVUFBTCxDQUFrQixLQUFsQixDQU1BLEtBQUtsRyxJQUFMLENBQVksSUFBWixDQU1BLEtBQUtoRixTQUFMLENBQWlCLElBQWpCLENBS0EsS0FBSzJFLEVBQUwsQ0FBVSxHQUFJd0csa0JBQUosQ0FDVCxDQUNDL0UsV0FBWSxnQkFBTXBSLE1BQU4sQ0FBYW9SLFVBRDFCLENBRFMsQ0FJVCxDQUNDZ0YsU0FBVSxDQUFDeEIsb0JBQUQsQ0FEWCxDQUVDeUIsVUFBV3hCLGVBQWUsQ0FBQ2tCLE9BQWhCLENBRlosQ0FKUyxDQUFWLENBVUEsS0FBS3BHLEVBQUwsQ0FBUTJHLGNBQVIsQ0FBeUIsV0FBSyxDQUM3QixHQUFJLENBQUMsTUFBS0osVUFBTixFQUFvQjFULEVBQUUrVCxTQUExQixDQUFxQyxDQUNwQzNRLElBQUl2RCxDQUFKLENBQU0sK0JBQU4sQ0FBdUNHLEVBQUUrVCxTQUF6QyxFQUNBN1EsU0FBU25DLElBQVQsQ0FBaUIsTUFBS3lTLFVBQXRCLFFBQXdDUixRQUFRaFQsRUFBRStULFNBQVYsQ0FBeEMsRUFDQSxDQUNELENBTEQsQ0FNQSxLQUFLNUcsRUFBTCxDQUFRNkcsMEJBQVIsQ0FBcUMsVUFBTSxDQUMxQzVRLElBQUl2RCxDQUFKLENBQU0sMkNBQU4sQ0FBbUQsTUFBS3NOLEVBQUwsQ0FBUThHLGtCQUEzRCxFQUNBLEdBQU1BLG9CQUFxQixNQUFLOUcsRUFBTCxDQUFROEcsa0JBQW5DLENBQ0EsT0FBUUEsa0JBQVIsRUFDQyxJQUFLckIsOEJBQUwsQ0FFQyxNQUNELElBQUtGLCtCQUFMLENBQ0MsTUFBS3dCLGFBQUwsR0FDQSxNQUFLQyxvQkFBTCxDQUEwQixLQUExQixFQUNBLE1BQ0QsSUFBS3hCLCtCQUFMLENBQ0MsTUFBS3dCLG9CQUFMLENBQTBCLEtBQTFCLEVBQ0EsTUFDRCxJQUFLMUIsa0NBQUwsQ0FDQSxJQUFLSSw0QkFBTCxDQUNBLElBQUtDLDRCQUFMLENBQ0MxUCxJQUFJdkQsQ0FBSixDQUFNLDJDQUFOLENBQW1ELHNCQUFuRCxFQUNBLE1BQUtxRyxLQUFMLEdBQ0EsTUFoQkYsQ0FrQkEsTUFBS3dOLFVBQUwsQ0FBa0IsTUFBS0EsVUFBTCxFQUFtQixNQUFLVSxXQUExQyxDQUNBLENBdEJELENBd0JBLEtBQUtqSCxFQUFMLENBQVFrSCx5QkFBUixDQUFvQyxVQUFNLENBQ3pDalIsSUFBSXZELENBQUosQ0FBTSwwQ0FBTixDQUFrRCxNQUFLc04sRUFBTCxDQUFRbUgsaUJBQTFELEVBQ0EsQ0FGRCxDQVNBLEtBQUtDLE9BQUwsbUJBQ0EsQywwR0FPb0JDLE0sQ0FBUSxpQkFFM0IvVCxLQUFVLEtBQUtnVCxXQUFmLE9BRjJCLENBRzNCblQsTUFBUSxhQUhtQixDQUk1QixHQUFHa1UsTUFBSCxDQUFXLENBRVZ0UixTQUFTdkIsRUFBVCxDQUFZbEIsSUFBWixDQUFrQkgsS0FBbEIsQ0FBeUIsY0FBUSxDQUNoQyxHQUFNeVQsV0FBWVUsS0FBSzVRLEdBQUwsRUFBbEIsQ0FDQVQsSUFBSXZELENBQUosQ0FBTSxnQ0FBTixDQUF3Q2tVLFNBQXhDLEVBQ0EsT0FBSzVHLEVBQUwsQ0FBUXVILGVBQVIsQ0FBd0IsR0FBSUMsZ0JBQUosQ0FBb0JaLFNBQXBCLENBQXhCLEVBQ0EsQ0FKRCxFQUtBLENBUEQsSUFPTyxDQUNON1EsU0FBU3BCLEdBQVQsQ0FBYXJCLElBQWIsQ0FBbUJILEtBQW5CLEVBQ0EsQ0FDRCxDLHFEQU1nQixDQUNoQixHQUFHLEtBQUtvRixZQUFMLEVBQXFCLEtBQUswTyxXQUE3QixDQUEwQyxDQUN6QyxLQUFLNUcsSUFBTCxDQUFZLGdCQUFNZ0UsWUFBTixDQUFtQixLQUFLOUwsWUFBeEIsQ0FBc0MsS0FBSzhDLFNBQTNDLENBQXNELEtBQUtnRixJQUEzRCxDQUFaLENBQ0EsQ0FDRCxDLHNDQTBDTW9ILFcsQ0FBYSxpQkFDbkJ4UixJQUFJdEQsQ0FBSixDQUFNLHVCQUFOLENBQStCLENBQUM4VSx1QkFBRCxDQUFjNUgsZUFBZ0IsSUFBOUIsQ0FBL0IsRUFDQSxLQUFLeEUsU0FBTCxDQUFpQm9NLFdBQWpCLENBQ0EsR0FBRyx1Q0FBZ0NqQixrQkFBa0JrQixTQUFsRCxDQUE2RCxTQUE3RCxDQUFILENBQTRFLENBQzNFLEtBQUsxSCxFQUFMLENBQVEySCxPQUFSLENBQWtCLFdBQUssQ0FDdEIxUixJQUFJdkQsQ0FBSixDQUFNLHdCQUFOLENBQWdDRyxFQUFFdUUsT0FBRixDQUFVLENBQVYsQ0FBaEMsRUFDQSxPQUFLbUIsWUFBTCxDQUFvQjFGLEVBQUV1RSxPQUFGLENBQVUsQ0FBVixDQUFwQixDQUNBLENBSEQsQ0FJQSxDQUxELElBS08sQ0FDTixLQUFLNEksRUFBTCxDQUFRNEgsV0FBUixDQUFzQixXQUFLLENBQzFCM1IsSUFBSXZELENBQUosQ0FBTSw0QkFBTixDQUFvQ0csRUFBRXlFLE1BQXRDLEVBQ0EsT0FBS2lCLFlBQUwsQ0FBb0IxRixFQUFFeUUsTUFBdEIsQ0FDQSxDQUhELENBSUEsQ0FHRHZCLFNBQVN2QixFQUFULENBQWUsS0FBSzhSLFdBQXBCLFFBQXVDLE9BQXZDLENBQWdELGNBQVEsQ0FDdkQsR0FBTXVCLFVBQVdQLEtBQUs1USxHQUFMLEVBQWpCLENBQ0FULElBQUl2RCxDQUFKLENBQU0sT0FBTixDQUFlbVYsUUFBZixFQUNBLEdBQUdBLFVBQVksSUFBZixDQUFxQixDQUNwQjVSLElBQUl2RCxDQUFKLENBQU0sd0JBQU4sQ0FBZ0NtVixRQUFoQyxFQUNBLE9BQUs3SCxFQUFMLENBQVE4SCxvQkFBUixDQUE2QkQsUUFBN0IsRUFDRXhULElBREYsQ0FDTyxpQkFBTTRCLEtBQUl2RCxDQUFKLENBQU0sa0NBQU4sQ0FBMEMsT0FBS3NOLEVBQUwsQ0FBUStILGlCQUFsRCxDQUFOLEVBRFAsRUFFRTFULElBRkYsQ0FFTyxVQUFNLENBQ1gsR0FBSSxVQUFVeEQsSUFBVixDQUFlLE9BQUttUCxFQUFMLENBQVErSCxpQkFBUixDQUEwQnRQLElBQXpDLENBQUosQ0FBb0QsQ0FDbkQsTUFBTyxRQUFLdUgsRUFBTCxDQUFRZ0ksWUFBUixFQUFQLENBQ0EsQ0FDRCxNQUFPLG1CQUFRL1UsTUFBUixDQUFlLEdBQUlsQyxNQUFKLENBQVUscUJBQVYsQ0FBZixDQUFQLENBQ0EsQ0FQRixFQVFFc0QsSUFSRixDQVFPLDRCQUFlLFFBQUs0VCxtQkFBTCxDQUF5QkMsV0FBekIsQ0FBZixFQVJQLEVBU0U3VCxJQVRGLENBU08sNEJBQWUsUUFBSzJMLEVBQUwsQ0FBUW1JLG1CQUFSLENBQTRCRCxXQUE1QixDQUFmLEVBVFAsRUFVRTdULElBVkYsQ0FVTyxVQUFNLENBQ1g0QixJQUFJdkQsQ0FBSixDQUFNLGlDQUFOLENBQXlDLE9BQUtzTixFQUFMLENBQVFvSSxnQkFBakQsRUFDQSxPQUFLcEIsb0JBQUwsQ0FBMEIsSUFBMUIsRUFDQSxDQWJGLEVBY0UzUyxJQWRGLENBY08saUJBQU0wQixVQUFTakMsTUFBVCxDQUFtQixPQUFLdVMsVUFBeEIsUUFBMENSLFFBQVEsT0FBSzdGLEVBQUwsQ0FBUW9JLGdCQUFoQixDQUExQyxDQUFOLEVBZFAsRUFlRTVRLEtBZkYsQ0FlUXZCLElBQUlsRCxDQUFKLENBQU0saUNBQU4sQ0FmUixFQWdCQSxDQUNELENBdEJELEVBd0JBLE1BQU8sbUJBQVFTLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUCxDQUNBLEMsb0NBUUs4RCxNLENBQVEsaUJBQ2JyQixJQUFJdEQsQ0FBSixDQUFNLHNCQUFOLENBQThCLENBQUMyRSxhQUFELENBQVN1SSxlQUFnQixJQUF6QixDQUE5QixFQUNBLEdBQUl3SSxtQkFBSixDQUNBLE1BQU8sdUJBQVksU0FBQzdVLE9BQUQsQ0FBVVAsTUFBVixDQUFxQixDQUN2QyxPQUFLK00sRUFBTCxDQUFRc0ksbUJBQVIsQ0FBOEIsVUFBTSxDQUNuQ3JTLElBQUl2RCxDQUFKLENBQU0sb0NBQU4sRUFFQSxHQUFHMlYsV0FBSCxDQUFnQixDQUNmRSxhQUFhRixXQUFiLEVBQ0FBLFlBQWMsSUFBZCxDQUNBLENBQ0RBLFlBQWNHLFdBQVcsVUFBTSxDQUM5QkgsWUFBYyxJQUFkLENBQ0EsT0FBS0ksVUFBTCxHQUNFcFUsSUFERixDQUNPLFVBQU0sQ0FDWGIsZ0JBQ0EsQ0FIRixFQUlFZ0UsS0FKRixDQUlRLFdBQUssQ0FDWHZCLElBQUl2RCxDQUFKLENBQU0sc0JBQU4sQ0FBOEJHLENBQTlCLEVBQ0FJLE9BQU9KLENBQVAsRUFDQSxDQVBGLEVBUUEsQ0FWYSxDQVVYLEVBVlcsQ0FBZCxDQVdBLENBbEJELENBbUJBa0QsU0FBU3ZCLEVBQVQsQ0FBZSxPQUFLOFIsV0FBcEIsUUFBdUMsT0FBdkMsQ0FBZ0QsY0FBUSxDQUN2RCxHQUFNb0MsV0FBWXBCLEtBQUs1USxHQUFMLEVBQWxCLENBQ0EsR0FBR2dTLFdBQWEsSUFBaEIsQ0FBc0IsQ0FDckJ6UyxJQUFJdkQsQ0FBSixDQUFNLCtCQUFOLENBQXVDZ1csU0FBdkMsRUFDQSxPQUFLMUksRUFBTCxDQUFROEgsb0JBQVIsQ0FBNkJZLFNBQTdCLEVBQ0VyVSxJQURGLENBQ08sVUFBTSxDQUNYNEIsSUFBSXZELENBQUosQ0FBTSx3Q0FBTixDQUFnRCxPQUFLc04sRUFBTCxDQUFRK0gsaUJBQXhELEVBQ0EsT0FBS2Ysb0JBQUwsQ0FBMEIsSUFBMUIsRUFDQSxDQUpGLEVBS0V4UCxLQUxGLENBS1F2QixJQUFJcEQsQ0FBSixDQUFNZixJQUFOLENBQVdtRSxHQUFYLENBQWdCLGtDQUFoQixDQUxSLEVBTUEsQ0FDRCxDQVhELEVBWUEsT0FBSzBTLFlBQUwsQ0FBa0JyUixNQUFsQixDQUEwQixLQUExQixFQUNBLENBakNNLENBQVAsQ0FrQ0EsQywrQ0FPWSxpQkFDWnJCLElBQUl2RCxDQUFKLENBQU0sMkJBQU4sRUFDQSxNQUFPLE1BQUtzTixFQUFMLENBQVE0SSxXQUFSLEdBQ0x2VSxJQURLLENBQ0EsNEJBQWUsUUFBSzRULG1CQUFMLENBQXlCQyxXQUF6QixDQUFmLEVBREEsRUFFTDdULElBRkssQ0FFQSw0QkFBZSxRQUFLMkwsRUFBTCxDQUFRbUksbUJBQVIsQ0FBNEJELFdBQTVCLENBQWYsRUFGQSxFQUdMN1QsSUFISyxDQUdBLGlCQUFNNEIsS0FBSXZELENBQUosQ0FBTSw2Q0FBTixDQUFxRCxPQUFLc04sRUFBTCxDQUFRb0ksZ0JBQTdELENBQU4sRUFIQSxFQUlML1QsSUFKSyxDQUlBLGlCQUFNMEIsVUFBU2pDLE1BQVQsQ0FBbUIsT0FBS3VTLFVBQXhCLFFBQTBDUixRQUFRLE9BQUs3RixFQUFMLENBQVFvSSxnQkFBaEIsQ0FBMUMsQ0FBTixFQUpBLENBQVAsQ0FLQSxDLGtEQVFZOVEsTSxDQUFRM0YsTSxDQUFRLGlCQUM1QixHQUFHLHVDQUFnQzZVLGtCQUFrQmtCLFNBQWxELENBQWdFL1YsTUFBaEUsU0FBSCxDQUFtRixDQUNsRjJGLE9BQU8yTCxTQUFQLEdBQW1CMVEsT0FBbkIsQ0FBMkIsc0JBQVMsUUFBS3lOLEVBQUwsQ0FBV3JPLE1BQVgsVUFBMEJtUixLQUExQixDQUFpQ3hMLE1BQWpDLENBQVQsRUFBM0IsQ0FBOEUsSUFBOUUsRUFDQSxDQUZELElBRU8sQ0FDTixLQUFLMEksRUFBTCxDQUFXck8sTUFBWCxXQUEyQjJGLE1BQTNCLEVBQ0EsQ0FDRCxDLGdEQVFXdVIsUyxDQUFXQyxTLENBQVcsQ0FDakM3UyxJQUFJdkQsQ0FBSixDQUFNLDRCQUFOLEVBQ0EsR0FBRyx1Q0FBZ0M4VCxrQkFBa0JrQixTQUFsRCxDQUE2RCxZQUE3RCxDQUFILENBQThFLENBRTdFLEtBQUsxSCxFQUFMLENBQVErSSxVQUFSLEdBQXFCeFcsT0FBckIsQ0FBNkIsZ0JBQVUsQ0FDdEMsR0FBSXlXLGlCQUFKLENBQ0EsT0FBUUMsT0FBT25HLEtBQVAsQ0FBYXZHLElBQXJCLEVBQ0MsSUFBSyxPQUFMLENBQ0N5TSxVQUFZRixVQUFVcE4sY0FBVixFQUFaLENBQ0EsTUFDRCxJQUFLLE9BQUwsQ0FDQ3NOLFVBQVlGLFVBQVVyTixjQUFWLEVBQVosQ0FDQSxNQUNELFFBQ0N1TixVQUFZLEVBQVosQ0FSRixDQVVBLEdBQUdBLFVBQVU5VyxNQUFiLENBQXFCLENBQ3BCK1csT0FBT0MsWUFBUCxDQUFvQkYsVUFBVSxDQUFWLENBQXBCLEVBQ0EsQ0FDRCxDQWZELEVBZ0JBLEtBQUtQLFVBQUwsR0FDRWpSLEtBREYsQ0FDUSxXQUFLLENBQUN2QixJQUFJdkQsQ0FBSixDQUFNLDRCQUFOLENBQW9DRyxDQUFwQyxFQUF3QyxDQUR0RCxFQUVBLENBcEJELElBb0JPLENBQ04sS0FBSzhWLFlBQUwsQ0FBa0JFLFNBQWxCLENBQTZCLFFBQTdCLEVBQ0EsS0FBS0YsWUFBTCxDQUFrQkcsU0FBbEIsQ0FBNkIsS0FBN0IsRUFDQSxDQUNELEMscUNBTU8saUJBQ1AsR0FBRyxLQUFLMUIsT0FBTCxvQkFBSCxDQUE0QixDQUMzQixLQUFLQSxPQUFMLG9CQUVBLEdBQUksS0FBSy9HLElBQVQsQ0FBZSxDQUNkLEtBQUtBLElBQUwsQ0FBVXNELElBQVYsRUFBa0IsS0FBS3RELElBQUwsQ0FBVXNELElBQVYsRUFBbEIsQ0FDQSxLQUFLdEQsSUFBTCxDQUFVcEUsU0FBVixDQUFzQixJQUF0QixDQUNBLEtBQUtaLFNBQUwsQ0FBZW1KLFdBQWYsQ0FBMkIsS0FBS25FLElBQWhDLEVBQ0EsS0FBS0EsSUFBTCxDQUFZLElBQVosQ0FDQSxDQUVELEtBQUsyRyxvQkFBTCxDQUEwQixLQUExQixFQUVBalIsU0FBU3BCLEdBQVQsQ0FBZ0IsS0FBSzJSLFdBQXJCLFFBQXdDLE9BQXhDLEVBRUF2USxTQUFTaEMsTUFBVCxDQUFnQixLQUFLc1MsVUFBckIsRUFFQSxHQUFJLEtBQUtyRyxFQUFMLEVBQVcsS0FBS0EsRUFBTCxDQUFRbUosY0FBUixHQUEyQixRQUExQyxDQUFvRCxDQUNuRCxLQUFLbkosRUFBTCxDQUFRb0osc0JBQVIsQ0FBaUMsVUFBTSxDQUN0QyxHQUFHLE9BQUtwSixFQUFMLENBQVFtSixjQUFSLEdBQTJCLFFBQTlCLENBQXdDLENBQ3ZDLE9BQUsvQixPQUFMLG1CQUNBLENBQ0QsQ0FKRCxDQUtBLEtBQUtwSCxFQUFMLENBQVFqSCxLQUFSLEdBQ0EsQ0FQRCxJQU9PLENBQ04sS0FBS3FPLE9BQUwsbUJBQ0EsQ0FDRCxDQUNELEMsZ0VBUW1CYyxXLENBQWEsQ0FDaEMsR0FBRyxnQkFBTTdYLE1BQU4sQ0FBYWlSLG1CQUFiLEVBQW9DLGdCQUFNalIsTUFBTixDQUFha1IsbUJBQXBELENBQXlFLHFCQUN4RXRMLElBQUl2RCxDQUFKLENBQU0sb0NBQU4sQ0FBNEMsQ0FBQ3dWLHVCQUFELENBQWM3WCxPQUFRLGdCQUFNQSxNQUE1QixDQUE1QyxFQUNBLEdBQU1nWixVQUFXbkIsWUFBWW9CLEdBQVosQ0FBZ0JDLEtBQWhCLENBQXNCLE9BQXRCLENBQWpCLENBQ01DLE9BQVMsQ0FBQ3JPLE1BQU8sRUFBUixDQUFZUCxNQUFPLEVBQW5CLENBRGYsQ0FFSW1ILFFBQVUsSUFGZCxDQUlBc0gsU0FBUzlXLE9BQVQsQ0FBaUIsU0FBQ2tYLE9BQUQsQ0FBVTlXLENBQVYsQ0FBZ0IsQ0FDaEMsR0FBRyxNQUFNOUIsSUFBTixDQUFXNFksT0FBWCxDQUFILENBQXdCLENBQ3ZCLEdBQU0vVyxHQUFJLGlEQUFpRGdYLElBQWpELENBQXNERCxPQUF0RCxDQUFWLENBQ0ExSCxRQUFVLENBQ1Q0SCxJQUFLalgsRUFBRSxDQUFGLEVBQUs2VyxLQUFMLENBQVcsSUFBWCxDQURJLENBRVRLLE1BQU9qWCxDQUZFLENBR1RrWCxPQUFRLEVBSEMsQ0FBVixDQUtBTCxPQUFPOVcsRUFBRSxDQUFGLENBQVAsRUFBYWtCLElBQWIsQ0FBa0JtTyxPQUFsQixFQUNBLENBUkQsSUFRTyxJQUFHQSxTQUFXLGFBQWFsUixJQUFiLENBQWtCNFksT0FBbEIsQ0FBZCxDQUEwQyxDQUNoRCxHQUFNSyxHQUFJLHNDQUFzQ0osSUFBdEMsQ0FBMkNELE9BQTNDLENBQVYsQ0FDQSxHQUFHSyxDQUFILENBQU0sQ0FDTC9ILFFBQVE4SCxNQUFSLENBQWVqVyxJQUFmLENBQW9CLENBQ25CbVcsR0FBSUQsRUFBRSxDQUFGLENBRGUsQ0FFbkJuVCxLQUFNbVQsRUFBRSxDQUFGLENBRmEsQ0FHbkJGLE1BQU9qWCxDQUhZLENBQXBCLEVBS0EsQ0FDRCxDQUNELENBbkJELEVBb0JBc0QsSUFBSXZELENBQUosQ0FBTSxvQ0FBTixDQUE0QzhXLE1BQTVDLEVBQ0EsR0FBSTFWLFFBQVMsS0FBYixDQUNNa1csT0FBUyxRQUFUQSxPQUFTLENBQUNDLFNBQUQsQ0FBWUMsYUFBWixDQUE4QixDQUM1Q0QsVUFBVTFYLE9BQVYsQ0FBa0IsZUFBUyxDQUMxQixHQUFNNFgsVUFBV3RILE1BQU1nSCxNQUFOLENBQWFPLElBQWIsQ0FBa0Isc0JBQVNGLGVBQWNyWixJQUFkLENBQW1Cd1osTUFBTTFULElBQXpCLENBQVQsRUFBbEIsQ0FBakIsQ0FDQSxHQUFHd1QsUUFBSCxDQUFhLENBQ1osR0FBTVIsS0FBTSxDQUFDUSxTQUFTSixFQUFWLEVBQWMxWCxNQUFkLENBQXFCd1EsTUFBTThHLEdBQU4sQ0FBVXRTLE1BQVYsQ0FBaUIsb0JBQU9pVCxPQUFRSCxTQUFTSixFQUF4QixFQUFqQixDQUFyQixDQUFaLENBQ0FWLFNBQVN4RyxNQUFNK0csS0FBZixFQUF3QlAsU0FBU3hHLE1BQU0rRyxLQUFmLEVBQXNCN00sT0FBdEIsQ0FBOEI4RixNQUFNOEcsR0FBTixDQUFVWSxJQUFWLENBQWUsR0FBZixDQUE5QixDQUFtRFosSUFBSVksSUFBSixDQUFTLEdBQVQsQ0FBbkQsQ0FBeEIsQ0FDQXpXLE9BQVMsSUFBVCxDQUNBLENBQ0QsQ0FQRCxFQVFBLENBVkQsQ0FXQSxHQUFHLGdCQUFNekQsTUFBTixDQUFhaVIsbUJBQWhCLENBQXFDLENBQ3BDMEksT0FBT1IsT0FBTzVPLEtBQWQsQ0FBcUIsZ0JBQU12SyxNQUFOLENBQWFpUixtQkFBbEMsRUFDQSxDQUNELEdBQUcsZ0JBQU1qUixNQUFOLENBQWFrUixtQkFBaEIsQ0FBcUMsQ0FDcEN5SSxPQUFPUixPQUFPck8sS0FBZCxDQUFxQixnQkFBTTlLLE1BQU4sQ0FBYWtSLG1CQUFsQyxFQUNBLENBQ0QsR0FBR3pOLE1BQUgsQ0FBVyxDQUNWbUMsSUFBSXZELENBQUosQ0FBTSxvQ0FBTixDQUE0QzJXLFNBQVNrQixJQUFULENBQWMsTUFBZCxDQUE1QyxFQUNBLFNBQU8sQ0FDTmpCLElBQUtELFNBQVNrQixJQUFULENBQWMsTUFBZCxDQURDLENBRU45UixLQUFNeVAsWUFBWXpQLElBRlosQ0FBUCxFQUlBLENBbER1RSxtR0FtRHhFLENBQ0QsTUFBT3lQLFlBQVAsQ0FDQSxDLHVDQXZSaUI1USxNLENBQVEsQ0FJekIsS0FBS2tULGFBQUwsQ0FBcUJsVCxNQUFyQixDQUNBLEtBQUt5UCxhQUFMLEdBQ0EsQyxtQkFNbUIsQ0FDbkIsTUFBTyxNQUFLeUQsYUFBWixDQUNBLEMsdUNBTWtCLENBQ2xCLE1BQU8sTUFBS3hLLEVBQUwsRUFDTixDQUFDLENBQUMsQ0FBQyxDQUNGdUYsOEJBREUsQ0FFRkMsOEJBRkUsQ0FHRkksMEJBSEUsRUFJRHZVLE9BSkMsQ0FJTyxLQUFLMk8sRUFBTCxDQUFROEcsa0JBSmYsQ0FESixDQU1BLEMsOENBNUttQmQsYzs7Ozs7OztxZ0JDMURUL1AsRyxnRUFDQUYsUSxpV0FFWixHQUFNMFUsWUFBYSxRQUFiQSxXQUFhLENBQUNDLEdBQUQsQ0FBTUMsR0FBTixRQUFjRCxLQUFJRSxhQUFKLENBQWtCRCxHQUFsQixDQUF1QixPQUF2QixFQUFrQyxDQUFsQyxDQUF5Q0QsR0FBekMsS0FBZ0RDLEdBQWhELENBQTBEQSxHQUExRCxLQUFpRUQsR0FBL0UsRUFBbkIsQyxHQUtxQkcsc0IsWUFLcEIsZ0NBQWMsMERBS2IsS0FBS0MsTUFBTCxDQUFjLEVBQWQsQ0FDQSxDLDJHQVVpQnhULE0sQ0FBUThJLE0sQ0FBUWdHLE8sQ0FBUyxnQkFDMUMsR0FBRyxDQUFDLGdCQUFNNVYsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVF5QyxNQUFSLENBQWUsR0FBSWxDLE1BQUosQ0FBVSxnRUFBVixDQUFmLENBQVAsQ0FDQSxDQUNELEdBQU1rVixTQUFVd0UsV0FBV3JLLE9BQU8xUCxNQUFsQixDQUEwQixnQkFBTUEsTUFBaEMsQ0FBaEIsQ0FFQSxHQUFHLEtBQUtvYSxNQUFMLENBQVk3RSxPQUFaLEdBQXdCLEtBQUs2RSxNQUFMLENBQVk3RSxPQUFaLEVBQXFCM08sT0FBT2QsR0FBNUIsQ0FBM0IsQ0FBNkQsQ0FDNUQsTUFBTyxtQkFBUWhELE9BQVIsQ0FBZ0IsS0FBS3NYLE1BQUwsQ0FBWTdFLE9BQVosRUFBcUIzTyxPQUFPZCxHQUE1QixDQUFoQixDQUFQLENBQ0EsQ0FFRCxHQUFHLENBQUMsS0FBS3NVLE1BQUwsQ0FBWTdFLE9BQVosQ0FBSixDQUEwQixDQUN6QixLQUFLNkUsTUFBTCxDQUFZN0UsT0FBWixFQUF1QixFQUF2QixDQUNBLENBRUQsR0FBTXhPLE9BQVEsRUFBZCxDQUNBQSxNQUFNLGdCQUFNakgsSUFBTixDQUFXZ0csR0FBakIsRUFBd0IsSUFBeEIsQ0FDQWlCLE1BQU0ySSxPQUFPN0ksSUFBUCxFQUFlNkksT0FBT3BJLEVBQTVCLEVBQWtDLElBQWxDLENBRUEsTUFBT2pDLFVBQVNqQyxNQUFULGFBQTRCbVMsT0FBNUIsQ0FBdUN4TyxLQUF2QyxFQUNMcEQsSUFESyxDQUNBLGlCQUFNLDhCQUFtQjRSLE9BQW5CLENBQTRCM08sT0FBT2QsR0FBbkMsQ0FBd0M0SixPQUFPMVAsTUFBL0MsQ0FBdUQwVixPQUF2RCxDQUFOLEVBREEsRUFFTC9SLElBRkssQ0FFQSxZQUFNLENBQ1g0QixJQUFJdkQsQ0FBSixDQUFNLHlDQUFOLENBQWlELENBQUN1VCxlQUFELENBQVVDLFNBQVU1TyxPQUFPZCxHQUEzQixDQUFnQ3dKLEtBQWhDLENBQWpELEVBQ0EsTUFBSzhLLE1BQUwsQ0FBWTdFLE9BQVosRUFBcUIzTyxPQUFPZCxHQUE1QixFQUFtQ3dKLEVBQW5DLENBQ0EsTUFBT0EsR0FBUCxDQUNBLENBTkssRUFPTHhJLEtBUEssQ0FPQ3ZCLElBQUlsRCxDQUFKLENBQU0seUNBQU4sQ0FQRCxDQUFQLENBUUEsQyxvQ0FRSytGLFcsQ0FBYStMLFUsQ0FBWSxDQUM5QjVPLElBQUl2RCxDQUFKLENBQU0sNkJBQU4sQ0FBcUMsQ0FBQ29HLHVCQUFELENBQWMrTCxxQkFBZCxDQUFyQyxFQUNBLE1BQU8sTUFBS2tHLGlCQUFMLENBQXVCalMsV0FBdkIsQ0FBb0MrTCxVQUFwQyxDQUFnRCxJQUFoRCxFQUNMeFEsSUFESyxDQUNBLG1CQUFNMkwsSUFBRzhFLEtBQUgsQ0FBU2hNLFlBQVkrSixLQUFyQixDQUFOLEVBREEsQ0FBUCxDQUVBLEMsc0NBUU10SyxZLENBQWNrUCxXLENBQWEsQ0FDakN4UixJQUFJdkQsQ0FBSixDQUFNLDhCQUFOLENBQXNDLENBQUM2Rix5QkFBRCxDQUFla1AsdUJBQWYsQ0FBdEMsRUFDQSxNQUFPLE1BQUtzRCxpQkFBTCxDQUF1QnhTLFlBQXZCLENBQXFDQSxZQUFyQyxDQUFtRCxLQUFuRCxFQUNMbEUsSUFESyxDQUNBLG1CQUFNMkwsSUFBR0QsTUFBSCxDQUFVMEgsV0FBVixDQUFOLEVBREEsQ0FBUCxDQUVBLEMsb0NBUUt2QixRLENBQVVDLFksQ0FBYyxDQUM3QixHQUFNRixTQUFVd0UsV0FBV3RFLFlBQVgsQ0FBeUIsZ0JBQU16VixNQUEvQixDQUFoQixDQUNDc1AsR0FBSyxLQUFLOEssTUFBTCxDQUFZN0UsT0FBWixFQUF1QixLQUFLNkUsTUFBTCxDQUFZN0UsT0FBWixFQUFxQkMsUUFBckIsQ0FBdkIsQ0FBd0QsSUFEOUQsQ0FFQSxHQUFHbEcsRUFBSCxDQUFNLENBQ0xBLEdBQUdqSCxLQUFILEdBQ0EsS0FBSytSLE1BQUwsQ0FBWTdFLE9BQVosRUFBcUJDLFFBQXJCLEVBQWlDLElBQWpDLENBQ0EsTUFBTyxNQUFLNEUsTUFBTCxDQUFZN0UsT0FBWixFQUFxQkMsUUFBckIsQ0FBUCxDQUNBLE1BQU9sRyxHQUFQLENBQ0EsQ0FDRCxNQUFPLE1BQVAsQ0FDQSxDLHFEQXpGbUI2SyxxQjs7Ozs7O0FDVnJCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCO0FBQ0Esb0Q7Ozs7OztBQ0RBO0FBQ0E7QUFDQSxtRDs7Ozs7O0FDRkE7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFLHdDQUF3QztBQUN4QztBQUNBLEU7Ozs7OztBQ0pBO0FBQ0Esc0Q7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBLG9EOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDOzs7Ozs7QUNKQTtBQUNBO0FBQ0EsdUQ7Ozs7OztBQ0ZBLDRCQUE0QixlOzs7Ozs7QUNBNUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxXQUFXLGVBQWU7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaUJBQWlCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxnQkFBZ0I7QUFDaEY7QUFDQTtBQUNBLEdBQUcsMkNBQTJDLGdDQUFnQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEU7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRkFBZ0YsYUFBYSxFQUFFOztBQUUvRjtBQUNBLHFEQUFxRCwwQkFBMEI7QUFDL0U7QUFDQSxFOzs7Ozs7QUNaQTtBQUNBLFVBQVU7QUFDVixFOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsQ0FBQztBQUNEO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsU0FBUztBQUNULElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHVDQUF1QyxvQkFBb0IsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRTs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVUsRUFBRTtBQUM5QyxtQkFBbUIsc0NBQXNDO0FBQ3pELENBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLFc7Ozs7OztBQ2hDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakMsR0FBRztBQUNILEU7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBMEUsa0JBQWtCLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0NBQWdDO0FBQ3BGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Qjs7Ozs7O0FDakNBO0FBQ0E7O0FBRUEsMENBQTBDLGlDQUFvQyxFOzs7Ozs7QUNIOUU7QUFDQTtBQUNBLHFFQUF1RSwwQ0FBMEMsRTs7Ozs7O0FDRmpIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7O0FDUkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7O0FDUkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0RBQWlELG9CQUFvQjtBQUNwSDtBQUNBO0FBQ0EsR0FBRyxVQUFVO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLGdDQUFnQztBQUNuRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSxxQ0FBcUM7QUFDcEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsdUJBQXVCLEtBQUs7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxrQkFBa0I7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7O0FDMVNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsb0JBQW9CLHVCQUF1QixTQUFTLElBQUk7QUFDeEQsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsaUNBQWlDO0FBQ3ZELEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCw4QkFBOEI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxnQkFBZ0I7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7O0FBRXhDLDBDQUEwQyxvQkFBb0I7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx3QkFBd0IsZUFBZSxFQUFFO0FBQ3pDLHdCQUF3QixnQkFBZ0I7QUFDeEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEtBQUssUUFBUSxpQ0FBaUM7QUFDbEcsQ0FBQztBQUNEO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7QUMxT0EseUM7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSwyRkFBc0Y7QUFDdEY7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsbUNBQW1DO0FBQ25DLFNBQVMsK0JBQStCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFOzs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsdUJBQXVCO0FBQzVHLG1FQUFtRTtBQUNuRSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix5Qjs7Ozs7O0FDMUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsRTs7Ozs7O0FDSEE7QUFDQSxzRUFBc0UsZ0JBQWdCLFVBQVUsR0FBRztBQUNuRyxDQUFDLEU7Ozs7OztBQ0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUMsRTs7Ozs7O0FDL0JEO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSx1Q0FBdUM7QUFDdkMsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQkFBZ0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw4Qjs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pELGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0IsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDbGdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7QUM3RkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxZQUFZOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx5REFBeUQscUJBQXFCO0FBQzlFLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNDQUFzQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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S3ZDLEdBQUwsQ0FBU3VDLEdBQVQsQ0FBUCxDQUNBLEMsZ0NBaFBVLENBQ1YsTUFBTyxpQkFBTS9DLElBQWIsQ0FDQSxDLGtDQU1ZLENBQ1osTUFBTyxpQkFBTXBELE1BQWIsQ0FDQSxDLG1DQU1hLENBQ2IsTUFBTyxpQkFBTUcsSUFBYixDQUNBLEMsMkNBME1zQixDQUN0QixNQUFPLGlCQUFNc1AsZUFBTixDQUFzQmdMLE1BQTdCLENBQ0EsQyxxQ0E3UW9CLENBQ3BCLE1BQU8sQ0FBQ3BNLElBQUssT0FBTixDQUFtQndOLE9BQVEsVUFBM0IsQ0FBUCxDQUNBLEMsaUNBTWtCLENBQ2xCLDZCQUNBLEMsa0NBTW1CLENBQ25CLE1BQU8sQ0FBQy9WLEtBQU1ILE9BQU9HLElBQWQsQ0FBb0I2RyxNQUFPaEgsT0FBT2dILEtBQWxDLENBQXlDMUYsT0FBUXRCLE9BQU9zQixNQUF4RCxDQUFnRVMsT0FBUS9CLE9BQU8rQixNQUEvRSxDQUFQLENBQ0EsQyxtQ0FNb0IsQ0FDcEIsd0JBQ0EsQyxpQ0FNa0IsQ0FDbEIsdUJBQ0EsQyxrQ0FNbUIsQ0FDbkIsTUFBTyxDQUFDb0Qsa0JBQUQsQ0FBUVAsa0JBQVIsQ0FBUCxDQUNBLEMscUNBeEVtQm9RLEssQ0FnVXJCbUIsT0FBT0MsT0FBUCxDQUFpQnBCLEtBQWpCLEMiLCJmaWxlIjoicmVhY2gtZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIndlYmNvbS93ZWJjb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY2hcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjaFwiXSA9IGZhY3Rvcnkocm9vdFtcIldlYmNvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTczKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNTMwOTAzOGY4ODAwZWI2MTI4NCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgU3RyZWFtTWFuYWdlciBmcm9tICcuLi9zdHJlYW0vU3RyZWFtTWFuYWdlcic7XG5pbXBvcnQgUGVlckNvbm5lY3Rpb25NYW5hZ2VyIGZyb20gJy4uL3dlYnJ0Yy9QZWVyQ29ubmVjdGlvbk1hbmFnZXInO1xuaW1wb3J0IFdlYmNvbSBmcm9tICd3ZWJjb20vd2ViY29tJztcblxuLyoqXG4gKiBzaW5nbGV0b25cbiAqIEB0eXBlIHtDYWNoZU1hbmFnZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5sZXQgX2NhY2hlID0gbnVsbDtcblxuLyoqXG4gKiBTaW5nbGV0b24gdG8gaGFuZGxlIGdsb2JhbCByZWZlcmVuY2VzXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICovXG5jbGFzcyBDYWNoZU1hbmFnZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0IHNpbmdsZXRvblxuXHQgKiBAcmV0dXJuIHtDYWNoZU1hbmFnZXJ9XG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRpZighX2NhY2hlKSB7XG5cdFx0XHRfY2FjaGUgPSB0aGlzO1xuXHRcdH1cblx0XHRyZXR1cm4gX2NhY2hlO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgYmFzZSByZWZlcmVuY2Vcblx0ICogQHBhcmFtIHtXZWJjb219IHVybCB0aGUgcmVmZXJlbmNlIG9yIGl0cyB1cmxcblx0ICovXG5cdHNldCBiYXNlKHVybCkge1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9iYXNlID0gdXJsIGluc3RhbmNlb2YgV2ViY29tID8gdXJsIDogbmV3IFdlYmNvbSh1cmwpO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgYmFzZSByZWZlcmVuY2Vcblx0ICogQHR5cGUge1dlYmNvbX1cblx0ICovXG5cdGdldCBiYXNlKCkge1xuXHRcdHJldHVybiB0aGlzLl9iYXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAcGFyYW0ge0NvbmZpZ30gY29uZmlnIHRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKi9cblx0c2V0IGNvbmZpZyhjb25maWcpIHtcblx0XHRpZighdGhpcy5fY29uZmlnKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5fY29uZmlnID0gbmV3IENvbmZpZyhjb25maWcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9jb25maWcuYXNzaWduKGNvbmZpZyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIHVzZXJcblx0ICogQHR5cGUge0NvbmZpZ31cblx0ICovXG5cdGdldCBjb25maWcoKSB7XG5cdFx0aWYoIXRoaXMuX2NvbmZpZykge1xuXHRcdFx0dGhpcy5fY29uZmlnID0gbmV3IENvbmZpZygpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIHVzZXJcblx0ICogQHBhcmFtIHtVc2VyfSB1c2VyIHRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKi9cblx0c2V0IHVzZXIodXNlcikge1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl91c2VyID0gdXNlcjtcblx0fVxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEB0eXBlIHtVc2VyfVxuXHQgKi9cblx0Z2V0IHVzZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXI7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IGRldmljZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlIHRoZSBjdXJyZW50IGRldmljZVxuXHQgKi9cblx0c2V0IGRldmljZShkZXZpY2UpIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGV2aWNlID0gZGV2aWNlO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBkZXZpY2Vcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGdldCBkZXZpY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RldmljZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRzZXQgbG9nTGV2ZWwobGV2ZWwpIHtcblx0XHRpZigvXkRFQlVHfElORk98V0FSTnxFUlJPUiQvaS50ZXN0KGxldmVsKSkge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX2xvZ0xldmVsID0gbGV2ZWw7XG5cdFx0fSBlbHNlIGlmKGxldmVsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKScpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogVGhlIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGxvZ0xldmVsKCkge1xuXHRcdHJldHVybiB0aGlzLl9sb2dMZXZlbCB8fCAnRVJST1InO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0cmVhbXMgbWFuYWdlclxuXHQgKiBAcmV0dXJucyB7U3RyZWFtTWFuYWdlcn1cblx0ICovXG5cdGdldCBzdHJlYW1zKCkge1xuXHRcdGlmKCF0aGlzLl9zdHJlYW1zKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5fc3RyZWFtcyA9IG5ldyBTdHJlYW1NYW5hZ2VyKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9zdHJlYW1zO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBlZXJDb25uZWN0aW9ucyBtYW5hZ2VyXG5cdCAqIEByZXR1cm5zIHtQZWVyQ29ubmVjdGlvbk1hbmFnZXJ9XG5cdCAqL1xuXHRnZXQgcGVlckNvbm5lY3Rpb25zKCkge1xuXHRcdGlmKCF0aGlzLl9wZWVyQ29ubmVjdGlvbnMpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9wZWVyQ29ubmVjdGlvbnMgPSBuZXcgUGVlckNvbm5lY3Rpb25NYW5hZ2VyKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9wZWVyQ29ubmVjdGlvbnM7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgc2luZ2xldG9uIGluc3RhbmNlXG4gKiBAaWdub3JlXG4gKiBAdHlwZSB7Q2FjaGVNYW5hZ2VyfVxuICovXG5jb25zdCBjYWNoZSA9IG5ldyBDYWNoZU1hbmFnZXIoKTtcblxuLyoqXG4gKiBTaW5nbGV0b24gZm9yIHNoYXJlZCByZWZlcmVuY2VzXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvY2FjaGUuanMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG4vKipcbiAqIExpc3Qgb2YgcG9zc2libGUgbG9nIGxldmVsc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IGxldmVscyA9IFsnREVCVUcnLCAnSU5GTycsICdXQVJOJywgJ0VSUk9SJ107XG4vKipcbiAqIElzIGxvZyBlbmFibGVkIGZvciBhIHNwZWNpZmljIGxldmVsXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbGV2ZWwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzRW5hYmxlZCA9IGxldmVsID0+IHtcblx0cmV0dXJuIGxldmVscy5pbmRleE9mKGxldmVsLnRvVXBwZXJDYXNlKCkpID49IGxldmVscy5pbmRleE9mKGNhY2hlLmxvZ0xldmVsLnRvVXBwZXJDYXNlKCkpO1xufTtcbi8qKlxuICogR2xvYmFsIENvbnNvbGUuICh0byBhdm9pZCBkcm9wX2NvbnNvbGUuLi4pXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEB0eXBlIHtDb25zb2xlfVxuICovXG5jb25zdCBnQ29uc29sZSA9IGdsb2JhbFsnY29uc29sZSddO1xuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGNvbnNvbGUgY2FsbFxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIEEgbWV0aG9kIG9mIHRoZSBjb25zb2xlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIFRoZSBsb2cgbGV2ZWxcbiAqIEBwYXJhbSB7Kn0gbWVzc2FnZXMgdGhlIGxvZyBjb250ZW50XG4gKi9cbmNvbnN0IGxvZ2dlciA9IChtZXRob2QsIGxldmVsLCAuLi5tZXNzYWdlcykgPT4ge1xuXHRpc0VuYWJsZWQobGV2ZWwpID8gZ0NvbnNvbGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldLmJpbmQoZ0NvbnNvbGUpKC4uLm1lc3NhZ2VzKSA6ICgpID0+IHt9O1xufTtcbi8qKlxuICogVXNlIGEgZ3JvdXAgdG8gbG9nXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbG9nIGxldmVsXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZ3JvdXAgdGl0bGVcbiAqIEBwYXJhbSB7Kn0gaXRlbXMgdGhlIGxvZyBjb250ZW50XG4gKi9cbmNvbnN0IGdyb3VwID0gKGxldmVsLCBtZXNzYWdlLCAuLi5pdGVtcykgPT4ge1xuXHRpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgZ0NvbnNvbGUuZ3JvdXAgPyAnZ3JvdXAnIDogbGV2ZWwsIGxldmVsKSh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgPyBtZXNzYWdlIDogJycpO1xuXHRcdGxldCB2YWx1ZXMgPSAodHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnID8gW21lc3NhZ2VdIDogW10pLmNvbmNhdChpdGVtcyk7XG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSAmJiBpdGVtc1swXSBpbnN0YW5jZW9mIEFycmF5ICYmIHR5cGVvZiBpdGVtc1swXS5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFsdWVzID0gaXRlbXNbMF07XG5cdFx0fVxuXHRcdHZhbHVlcy5mb3JFYWNoKGl0ZW0gPT4gbG9nZ2VyLmJpbmQodW5kZWZpbmVkLCBsZXZlbCwgbGV2ZWwpKGl0ZW0pKTtcblx0XHRnQ29uc29sZS5ncm91cEVuZCAmJiBnQ29uc29sZS5ncm91cEVuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgbGV2ZWwsIGxldmVsLCBtZXNzYWdlKTtcblx0fVxufTtcblxuLyoqXG4gKiBMb2cgZGVidWcgbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRy5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL2xvZ1xuICovXG5leHBvcnQgY29uc3QgZCA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMF0pO1xuLyoqXG4gKiBMb2cgaW5mb3JtYXRpb24gbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRyBvciBJTkZPLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvaW5mb1xuICovXG5leHBvcnQgY29uc3QgaSA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMV0pO1xuLyoqXG4gKiBMb2cgd2FybmluZyBtZXNzYWdlcyBpZiBsb2cgbGV2ZWwgaXMgc2V0IHRvIERFQlVHLCBJTkZPIG9yIFdBUk4uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9BUEkvQ29uc29sZS93YXJuXG4gKi9cbmV4cG9ydCBjb25zdCB3ID0gZ3JvdXAuYmluZCh1bmRlZmluZWQsIGxldmVsc1syXSk7XG4vKipcbiAqIExvZyBlcnJvciBtZXNzYWdlcy4gRXJyb3JzIGFyZSBhbHdheXMgbG9nZ2VkLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGUgPSBnQ29uc29sZS5lcnJvci5iaW5kKGdDb25zb2xlKTtcbi8qKlxuICogUHJvbWlzZSByZWplY3Rpb24gbG9nZ2VyIHRvIHVzZSB3aXRoIGNhdGNoXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IHIgPSBtZXNzYWdlID0+IHJlYXNvbiA9PiB7XG5cdGQobWVzc2FnZSwgcmVhc29uKTtcblx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbiB8fCBtZXNzYWdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL0xvZy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuLyoqXG4gKiBHZXQgdGhlIGV2ZW50IHN0cmluZyBmb3IgV2ViY29tIGZyb20gUmVhY2ggZXZlbnRzXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEEgUmVhY2ggZXZlbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW50VHlwZSA9IChldmVudCkgPT4ge1xuXHRsZXQgZXZ0O1xuXHRpZigoL19BRERFRCQvaSkudGVzdChldmVudCkgfHwgL19QVUJMSVNIRUQkLy50ZXN0KGV2ZW50KSkge1xuXHRcdGV2dCA9ICdhZGRlZCc7XG5cdH0gZWxzZSBpZigvX0NIQU5HRUQkLy50ZXN0KGV2ZW50KSB8fCAvX1JFRlJFU0hFRCQvLnRlc3QoZXZlbnQpKSB7XG5cdFx0ZXZ0ID0gJ2NoYW5nZWQnO1xuXHR9IGVsc2UgaWYoL19SRU1PVkVEJC8udGVzdChldmVudCkgfHwgL19VTlBVQkxJU0hFRCQvLnRlc3QoZXZlbnQpKSB7XG5cdFx0ZXZ0ID0gJ3JlbW92ZWQnO1xuXHR9XG5cdHJldHVybiBldnQgPyBgY2hpbGRfJHtldnR9YCA6IGV2ZW50O1xufTtcblxuLyoqXG4gKiBXcml0ZSBtZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgV3JpdGUgbWV0aG9kIChzZXQsdXBkYXRlKVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gc2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBzZXRcbiAqIEBpZ25vcmVcbiAqL1xuY29uc3QgX3dyaXRlID0gKG1ldGhvZCwgcGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpW21ldGhvZF0oZGF0YSwgZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZSgpKTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jc2V0fSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHNldFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gc2V0XG4gKiBAcmV0dXJuIHtQcm9taXNlPCosIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldCA9IF93cml0ZS5iaW5kKHVuZGVmaW5lZCwgJ3NldCcpO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jcHVzaH0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBwdXNoXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwdXNoXG4gKiBAcmV0dXJuIHtQcm9taXNlPFdlYmNvbSwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNvbnN0IHB1c2hSZWYgPSBjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLnB1c2goZGF0YSwgZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShwdXNoUmVmKSk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3VwZGF0ZX0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB1cGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHVwZGF0ZVxuICogQHJldHVybiB7UHJvbWlzZTwqLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSBfd3JpdGUuYmluZCh1bmRlZmluZWQsICd1cGRhdGUnKTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3JlbW92ZX0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byByZW1vdmVcbiAqIEByZXR1cm4ge1Byb21pc2U8KiwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHBhdGgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5yZW1vdmUoZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZSgpKTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb25jZX0gc2hvcnRjdXQgYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHJldHVybnMge1Byb21pc2U8V2ViY29tL2FwaS5EYXRhU25hcHNob3QsIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9uY2UgPSAocGF0aCwgZXZlbnQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbmNlKGV2ZW50VHlwZShldmVudCksIHJlc29sdmUsIHJlamVjdCk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uY2V9KCd2YWx1ZScpIGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gZ2V0XG4gKiBAcmV0dXJuIHtQcm9taXNlPFdlYmNvbS9hcGkuRGF0YVNuYXBzaG90LCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXQgPSBwYXRoID0+IG9uY2UocGF0aCwgJ3ZhbHVlJyk7XG5cbi8qKlxuICogTGlzdCB2YWx1ZXMgYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBnZXRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdCB0byBsaXN0XG4gKiBAcGFyYW0gcGFyYW1zIEFkZGl0aW9uYWwgY29uc3RydWN0b3IgcGFyYW1ldGVyc1xuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3RbXSwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgbGlzdCA9IChwYXRoLCBUeXBlLCAuLi5wYXJhbXMpID0+IHtcblx0cmV0dXJuIGdldChwYXRoKS50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRpZihzbmFwRGF0YSkge1xuXHRcdFx0Y29uc3QgdmFsdWVzID0gW107XG5cdFx0XHRzbmFwRGF0YS5mb3JFYWNoKHNuYXBDaGlsZCA9PiB7XG5cdFx0XHRcdHZhbHVlcy5wdXNoKG5ldyBUeXBlKHNuYXBDaGlsZCwgLi4ucGFyYW1zKSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNvbn0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fnF1ZXJ5Q2FsbGJhY2t8ZnVuY3Rpb259IHF1ZXJ5Q2FsbGJhY2sgVGhlIGNhbGxiYWNrXG4gKiBAcGFyYW0ge1dlYmNvbS9hcGkuUXVlcnl+Y2FuY2VsQ2FsbGJhY2t8ZnVuY3Rpb259IFtjYW5jZWxDYWxsYmFja10gVGhlIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBjb25zdCBvbiA9IChwYXRoLCBldmVudCwgcXVlcnlDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbihldmVudFR5cGUoZXZlbnQpLCBxdWVyeUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb2ZmfSBzaG9ydGN1dFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBjYWxsYmFja1xuICovXG5leHBvcnQgY29uc3Qgb2ZmID0gKHBhdGgsIGV2ZW50LCBjYWxsYmFjaykgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLm9mZihldmVudFR5cGUoZXZlbnQpLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb25EaXNjb25uZWN0fSBzaG9ydGN1dFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoXG4gKiBAcmV0dXJuIHtXZWJjb20vYXBpLk9uRGlzY29ubmVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IG9uRGlzY29ubmVjdCA9IHBhdGggPT4gY2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbkRpc2Nvbm5lY3QoKTtcblxuLyoqXG4gKiBUaW1lc3RhbXAgdmFsdWVcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKi9cbi8vIGV4cG9ydCBjb25zdCB0cyA9ICgpID0+IFdlYmNvbS5TZXJ2ZXJWYWx1ZS5USU1FU1RBTVA7XG5leHBvcnQgY29uc3QgdHMgPSAoKSA9PiBEYXRlLm5vdygpO1xuLy8gSEFDSyAjRGF0YVN5bmM6IFJvbGxiYWNrIHdoZW4gVElNRVNUQU1QIHdvcmtzIGFnYWluIChzZXJ2ZXItc2lkZSBidWcgd2l0aCBzZWN1cml0eSBydWxlcylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvRGF0YVN5bmMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBsb2dEaXNhYmxlZF8gPSB0cnVlO1xuXG4vLyBVdGlsaXR5IG1ldGhvZHMuXG52YXIgdXRpbHMgPSB7XG4gIGRpc2FibGVMb2c6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJndW1lbnQgdHlwZTogJyArIHR5cGVvZiBib29sICtcbiAgICAgICAgICAnLiBQbGVhc2UgdXNlIGEgYm9vbGVhbi4nKTtcbiAgICB9XG4gICAgbG9nRGlzYWJsZWRfID0gYm9vbDtcbiAgICByZXR1cm4gKGJvb2wpID8gJ2FkYXB0ZXIuanMgbG9nZ2luZyBkaXNhYmxlZCcgOlxuICAgICAgICAnYWRhcHRlci5qcyBsb2dnaW5nIGVuYWJsZWQnO1xuICB9LFxuXG4gIGxvZzogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAobG9nRGlzYWJsZWRfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGJyb3dzZXIgdmVyc2lvbiBvdXQgb2YgdGhlIHByb3ZpZGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVhc3RyaW5nIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gZXhwciBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCBhcyBtYXRjaCBjcml0ZXJpYS5cbiAgICogQHBhcmFtIHshbnVtYmVyfSBwb3MgcG9zaXRpb24gaW4gdGhlIHZlcnNpb24gc3RyaW5nIHRvIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHshbnVtYmVyfSBicm93c2VyIHZlcnNpb24uXG4gICAqL1xuICBleHRyYWN0VmVyc2lvbjogZnVuY3Rpb24odWFzdHJpbmcsIGV4cHIsIHBvcykge1xuICAgIHZhciBtYXRjaCA9IHVhc3RyaW5nLm1hdGNoKGV4cHIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPj0gcG9zICYmIHBhcnNlSW50KG1hdGNoW3Bvc10sIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogQnJvd3NlciBkZXRlY3Rvci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSByZXN1bHQgY29udGFpbmluZyBicm93c2VyIGFuZCB2ZXJzaW9uXG4gICAqICAgICBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgZGV0ZWN0QnJvd3NlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gUmV0dXJuZWQgcmVzdWx0IG9iamVjdC5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LmJyb3dzZXIgPSBudWxsO1xuICAgIHJlc3VsdC52ZXJzaW9uID0gbnVsbDtcblxuICAgIC8vIEZhaWwgZWFybHkgaWYgaXQncyBub3QgYSBicm93c2VyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBicm93c2VyLic7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3guXG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ2ZpcmVmb3gnO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0ZpcmVmb3hcXC8oWzAtOV0rKVxcLi8sIDEpO1xuXG4gICAgLy8gYWxsIHdlYmtpdC1iYXNlZCBicm93c2Vyc1xuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkge1xuICAgICAgLy8gQ2hyb21lLCBDaHJvbWl1bSwgV2VidmlldywgT3BlcmEsIGFsbCB1c2UgdGhlIGNocm9tZSBzaGltIGZvciBub3dcbiAgICAgIGlmICh3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnY2hyb21lJztcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0Nocm9tKGV8aXVtKVxcLyhbMC05XSspXFwuLywgMik7XG5cbiAgICAgIC8vIFNhZmFyaSBvciB1bmtub3duIHdlYmtpdC1iYXNlZFxuICAgICAgLy8gZm9yIHRoZSB0aW1lIGJlaW5nIFNhZmFyaSBoYXMgc3VwcG9ydCBmb3IgTWVkaWFTdHJlYW1zIGJ1dCBub3Qgd2ViUlRDXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYWZhcmkgVUEgc3Vic3RyaW5ncyBvZiBpbnRlcmVzdCBmb3IgcmVmZXJlbmNlOlxuICAgICAgICAvLyAtIHdlYmtpdCB2ZXJzaW9uOiAgICAgICAgICAgQXBwbGVXZWJLaXQvNjAyLjEuMjUgKGFsc28gdXNlZCBpbiBPcCxDcilcbiAgICAgICAgLy8gLSBzYWZhcmkgVUkgdmVyc2lvbjogICAgICAgIFZlcnNpb24vOS4wLjMgKHVuaXF1ZSB0byBTYWZhcmkpXG4gICAgICAgIC8vIC0gc2FmYXJpIFVJIHdlYmtpdCB2ZXJzaW9uOiBTYWZhcmkvNjAxLjQuNCAoYWxzbyB1c2VkIGluIE9wLENyKVxuICAgICAgICAvL1xuICAgICAgICAvLyBpZiB0aGUgd2Via2l0IHZlcnNpb24gYW5kIHNhZmFyaSBVSSB3ZWJraXQgdmVyc2lvbnMgYXJlIGVxdWFscyxcbiAgICAgICAgLy8gLi4uIHRoaXMgaXMgYSBzdGFibGUgdmVyc2lvbi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gb25seSB0aGUgaW50ZXJuYWwgd2Via2l0IHZlcnNpb24gaXMgaW1wb3J0YW50IHRvZGF5IHRvIGtub3cgaWZcbiAgICAgICAgLy8gbWVkaWEgc3RyZWFtcyBhcmUgc3VwcG9ydGVkXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFxcZCspLihcXGQrKS8pKSB7XG4gICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnc2FmYXJpJztcbiAgICAgICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIC9BcHBsZVdlYktpdFxcLyhbMC05XSspXFwuLywgMSk7XG5cbiAgICAgICAgLy8gdW5rbm93biB3ZWJraXQtYmFzZWQgYnJvd3NlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ1Vuc3VwcG9ydGVkIHdlYmtpdC1iYXNlZCBicm93c2VyICcgK1xuICAgICAgICAgICAgICAnd2l0aCBHVU0gc3VwcG9ydCBidXQgbm8gV2ViUlRDIHN1cHBvcnQuJztcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAvLyBFZGdlLlxuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJlxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLihcXGQrKSQvKSkge1xuICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnZWRnZSc7XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAvRWRnZVxcLyhcXGQrKS4oXFxkKykkLywgMik7XG5cbiAgICAvLyBEZWZhdWx0IGZhbGx0aHJvdWdoOiBub3Qgc3VwcG9ydGVkLlxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBzdXBwb3J0ZWQgYnJvd3Nlci4nO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8vIHNoaW1DcmVhdGVPYmplY3RVUkwgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIHNoaW1Tb3VyY2VPYmplY3QgdG8gYXZvaWQgbG9vcC5cblxuICBzaGltQ3JlYXRlT2JqZWN0VVJMOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoISh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudCAmJlxuICAgICAgICAgICdzcmNPYmplY3QnIGluIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgIC8vIE9ubHkgc2hpbSBDcmVhdGVPYmplY3RVUkwgdXNpbmcgc3JjT2JqZWN0IGlmIHNyY09iamVjdCBleGlzdHMuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBuYXRpdmVDcmVhdGVPYmplY3RVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMLmJpbmQoVVJMKTtcbiAgICB2YXIgbmF0aXZlUmV2b2tlT2JqZWN0VVJMID0gVVJMLnJldm9rZU9iamVjdFVSTC5iaW5kKFVSTCk7XG4gICAgdmFyIHN0cmVhbXMgPSBuZXcgTWFwKCksIG5ld0lkID0gMDtcblxuICAgIFVSTC5jcmVhdGVPYmplY3RVUkwgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIGlmICgnZ2V0VHJhY2tzJyBpbiBzdHJlYW0pIHtcbiAgICAgICAgdmFyIHVybCA9ICdwb2x5YmxvYjonICsgKCsrbmV3SWQpO1xuICAgICAgICBzdHJlYW1zLnNldCh1cmwsIHN0cmVhbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSkgaXMgZGVwcmVjYXRlZCEgJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZWxlbS5zcmNPYmplY3QgPSBzdHJlYW0gaW5zdGVhZCEnKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVDcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICB9O1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwgPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgIG5hdGl2ZVJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgc3RyZWFtcy5kZWxldGUodXJsKTtcbiAgICB9O1xuXG4gICAgdmFyIGRzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLCAnc3JjJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRzYy5nZXQuYXBwbHkodGhpcyk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdGhpcy5zcmNPYmplY3QgPSBzdHJlYW1zLmdldCh1cmwpIHx8IG51bGw7XG4gICAgICAgIHJldHVybiBkc2Muc2V0LmFwcGx5KHRoaXMsIFt1cmxdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLy8gRXhwb3J0LlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZzogdXRpbHMubG9nLFxuICBkaXNhYmxlTG9nOiB1dGlscy5kaXNhYmxlTG9nLFxuICBicm93c2VyRGV0YWlsczogdXRpbHMuZGV0ZWN0QnJvd3NlcigpLFxuICBleHRyYWN0VmVyc2lvbjogdXRpbHMuZXh0cmFjdFZlcnNpb24sXG4gIHNoaW1DcmVhdGVPYmplY3RVUkw6IHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogT1BFTkVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE9QRU5FRCA9ICdPUEVORUQnO1xuLyoqXG4gKiBDTE9TRURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0VEID0gJ0NMT1NFRCc7XG4vKipcbiAqIENMT1NJTkdcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0lORyA9ICdDTE9TSU5HJztcbi8qKlxuICogQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENPTk5FQ1RFRCA9ICdDT05ORUNURUQnO1xuLyoqXG4gKiBOT1RfQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE5PVF9DT05ORUNURUQgPSAnTk9UX0NPTk5FQ1RFRCc7XG4vKipcbiAqIFdBU19DT05ORUNURURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgV0FTX0NPTk5FQ1RFRCA9ICdXQVNfQ09OTkVDVEVEJztcbi8qKlxuICogT1dORVJcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT1dORVIgPSAnT1dORVInO1xuLyoqXG4gKiBNT0RFUkFUT1JcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgTU9ERVJBVE9SID0gJ01PREVSQVRPUic7XG4vKipcbiAqIFBBUlRJQ0lQQU5UXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0lQQU5UID0gJ1BBUlRJQ0lQQU5UJztcbi8qKlxuICogTk9ORVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBOT05FID0gJ05PTkUnO1xuLyoqXG4gKiBPbmdvaW5nIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT05HT0lORyA9ICdPTkdPSU5HJztcbi8qKlxuICogQWNjZXB0ZWQgaW52aXRhdGlvblxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG4vKipcbiAqIFJlamVjdGVkIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuLyoqXG4gKiBDYW5jZWxlZCBpbnZpdGF0aW9uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENBTkNFTEVEID0gJ0NBTkNFTEVEJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge05PTkUsIE9QRU5FRCwgQ0xPU0VELCBDT05ORUNURUQsIE5PVF9DT05ORUNURUQsIFdBU19DT05ORUNURUQsIE9XTkVSfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuL1BhcnRpY2lwYW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgTG9jYWwgZnJvbSAnLi9zdHJlYW0vTG9jYWwnO1xuaW1wb3J0IEludml0ZSBmcm9tICcuL0ludml0ZSc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vZGVmaW5pdGlvbnMvRXZlbnRzJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCB7UkVKRUNURUQsIENBTkNFTEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcblxuY29uc3QgX2pvaW5Sb29tID0gKHJvb20sIHJvbGUpID0+IHtcblx0Y29uc3QgcGFydGljaXBhbnQgPSB7XG5cdFx0c3RhdHVzOiBDT05ORUNURUQsXG5cdFx0X2pvaW5lZDogRGF0YVN5bmMudHMoKVxuXHR9O1xuXHRpZihyb2xlKSB7XG5cdFx0cGFydGljaXBhbnQucm9sZSA9IHJvbGU7XG5cdH1cblx0TG9nLncoJ1Jvb20jam9pbicsIFtwYXJ0aWNpcGFudCwgYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9YF0pO1xuXHRyZXR1cm4gRGF0YVN5bmNcblx0XHQudXBkYXRlKGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50cy8ke2NhY2hlLnVzZXIudWlkfWAsIHBhcnRpY2lwYW50KVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdERhdGFTeW5jXG5cdFx0XHRcdC5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9L3N0YXR1c2ApXG5cdFx0XHRcdC5zZXQoV0FTX0NPTk5FQ1RFRCk7XG5cdFx0XHRyZXR1cm4gcm9vbTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogUm9vbSBpbmZvcm1hdGlvblxuICogQGFjY2VzcyBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSByb29tXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8T2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRsZXQgdmFsdWVzID0gc25hcERhdGE7XG5cdFx0aWYoc25hcERhdGEgJiYgc25hcERhdGEudmFsICYmIHR5cGVvZiBzbmFwRGF0YS52YWwgPT09ICdmdW5jdGlvbicpe1xuXHRcdFx0dmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCksIHt1aWQ6IHNuYXBEYXRhLm5hbWUoKX0pO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSBuYW1lXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLm5hbWUgPSB2YWx1ZXMubmFtZTtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSBvd25lciB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMub3duZXIgPSB2YWx1ZXMub3duZXI7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gc3RhdHVzOlxuXHRcdCAqIC0gT1BFTkVEXG5cdFx0ICogLSBDTE9TRURcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblxuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyB0aGF0IHRoZSByb29tIGlzIHB1YmxpYyBzbyBhbGwgdXNlcnMgY2FuIGpvaW5cblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9wdWJsaWMgPSAhIXZhbHVlcy5fcHVibGljO1xuXG5cdFx0LyoqXG5cdFx0ICogQWRkaXRpb25hbCByb29tIGluZm9ybWF0aW9uc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5leHRyYSA9IHZhbHVlcy5leHRyYTtcblxuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgZGVjbGFyZWQgY2FsbGJhY2tzXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgcGFydGljaXBhbnRzLlxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybnMge1Byb21pc2U8UGFydGljaXBhbnRbXSwgRXJyb3I+fVxuXHQgKi9cblx0cGFydGljaXBhbnRzKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50c2AsIFBhcnRpY2lwYW50LCB0aGlzLnVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIG1lc3NhZ2VzLlxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlW10sIEVycm9yPn1cblx0ICovXG5cdG1lc3NhZ2VzKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL3Jvb21zLyR7dGhpcy51aWR9L21lc3NhZ2VzYCwgTWVzc2FnZSwgdGhpcy51aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBzdHJlYW1zXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdHJlYW1zKGxvY2FsU3RyZWFtcykge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gbGlzdCBhIFJvb21cXCdzIHN0cmVhbXMuJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0YVN5bmMuZ2V0KGBfL3Jvb21zLyR7dGhpcy51aWR9L3N0cmVhbXNgKVxuXHRcdFx0LnRoZW4oc25hcERhdGEgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZXMgPSBzbmFwRGF0YS52YWwoKTtcblx0XHRcdFx0TG9nLmQoJ1Jvb21zfl9zdHJlYW1zJywgdmFsdWVzKTtcblx0XHRcdFx0aWYodmFsdWVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlcykubWFwKGtleSA9PiBPYmplY3QuYXNzaWduKHt1aWQ6IGtleSwgcm9vbUlkOiB0aGlzLnVpZH0sIHZhbHVlc1trZXldKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHN0cmVhbXMgPT4gc3RyZWFtcy5maWx0ZXIoc3RyZWFtID0+IHtcblx0XHRcdFx0cmV0dXJuIGxvY2FsU3RyZWFtcyA9PT0gKHN0cmVhbS5kZXZpY2UgPT09IGNhY2hlLmRldmljZSAmJiBzdHJlYW0uZnJvbSA9PT0gY2FjaGUudXNlci51aWQpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbihzdHJlYW1zID0+IHN0cmVhbXMubWFwKGNhY2hlLnN0cmVhbXNbYGdldCR7bG9jYWxTdHJlYW1zID8gJ1NoYXJlZCcgOiAnUmVtb3RlJ31gXS5iaW5kKGNhY2hlLnN0cmVhbXMpKSlcblx0XHRcdC50aGVuKHN0cmVhbXMgPT4gc3RyZWFtcy5maWx0ZXIoc3RyZWFtID0+IHN0cmVhbSAhPT0gbnVsbCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBsb2NhbGx5IHB1Ymxpc2hlZCBzdHJlYW1zLiBUaGUgc3RyZWFtcyBwdWJsaXNoZWQgd2l0aCBhbm90aGVyIGRldmljZSB3b24ndCBiZSB2aXNpYmxlIGhlcmVcblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TG9jYWxbXSwgRXJyb3I+fVxuXHQgKi9cblx0bG9jYWxTdHJlYW1zKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdHJlYW1zKHRydWUpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+bG9jYWxTdHJlYW1zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiByZW1vdGVseSBwdWJsaXNoZWQgc3RyZWFtcy5cblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8UmVtb3RlW10sIEVycm9yPn1cblx0ICovXG5cdHJlbW90ZVN0cmVhbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0cmVhbXMoZmFsc2UpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+cmVtb3RlU3RyZWFtcycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnZpdGUgdXNlcnMgdG8gdGhlIHJvb20uIHRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIGN1cnJlbnQgVXNlciBpcyB0aGUgb3duZXIgb3IgYSBtb2RlcmF0b3Igb2YgdGhpcyBSb29tLlxuXHQgKiBUaGlzIHdpbGwgY3JlYXRlIHRoZSBpbnZpdGF0aW9uIGFuZCBhZGQgdGhlIHVzZXIgdG8gdGhlIHBhcnRpY2lwYW50cyBsaXN0LlxuXHQgKiBAcGFyYW0ge1VzZXJbXX0gdXNlcnMgdGhlIHVzZXJzIHRvIGludml0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3JvbGU9J05PTkUnXSB0aGUgcm9sZSBvZiB0aGUgaW52aXRlZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIGEgbWVzc2FnZSB0byBhZGQgdG8gdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHtyb29tOiBSb29tLCBpbnZpdGVzOiBJbnZpdGVbXX0sIEVycm9yPn1cblx0ICovXG5cdGludml0ZSh1c2Vycywgcm9sZSA9IE5PTkUsIG1lc3NhZ2UpIHtcblx0XHRjb25zdFxuXHRcdFx0X3BhdGggPSB1c2VyID0+IGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50cy8ke3VzZXIudWlkfWAsXG5cdFx0XHRfZGF0YSA9IHtcblx0XHRcdFx0c3RhdHVzOiBOT1RfQ09OTkVDVEVELFxuXHRcdFx0XHRyb2xlOiByb2xlIHx8IE5PTkVcblx0XHRcdH07XG5cdFx0Ly8gQWRkIHVzZXJzIGFzIHBhcnRpY2lwYW50IHNvIHRoZXkgY2FuIGpvaW4gdGhlIHJvb21cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwodXNlcnMubWFwKHVzZXIgPT4gRGF0YVN5bmMuc2V0KF9wYXRoKHVzZXIpLCBfZGF0YSkpKVxuXHRcdFx0Ly8gU2VuZCBpbnZpdGVzXG5cdFx0XHQudGhlbigoKSA9PiBQcm9taXNlLmFsbCh1c2Vycy5tYXAodXNlciA9PiBJbnZpdGUuc2VuZCh1c2VyLCB0aGlzLCBtZXNzYWdlKSkpKVxuXHRcdFx0LnRoZW4oaW52aXRlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlbW92ZVBhcnRpY2lwYW50ID0gaW52aXRlID0+IERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke2ludml0ZS5yb29tfS9wYXJ0aWNpcGFudHMvJHtpbnZpdGUudG99YCk7XG5cdFx0XHRcdGludml0ZXMuZm9yRWFjaChpbnZpdGUgPT4ge1xuXHRcdFx0XHRcdGludml0ZS5vbihSRUpFQ1RFRCwgcmVtb3ZlUGFydGljaXBhbnQpO1xuXHRcdFx0XHRcdGludml0ZS5vbihDQU5DRUxFRCwgcmVtb3ZlUGFydGljaXBhbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHtyb29tOiB0aGlzLCBpbnZpdGVzfTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdExvZy5lKCdSb29tfmludml0ZScsIGUpO1xuXHRcdFx0XHR1c2Vycy5mb3JFYWNoKHVzZXIgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50cy8ke3VzZXIudWlkfWApKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvUm9vbX0pOlxuXHQgKiAtIFBBUlRJQ0lQQU5UX0FEREVEOiBhIHBhcnRpY2lwYW50IGlzIGFkZGVkIHRvIHRoZSByb29tXG5cdCAqIC0gUEFSVElDSVBBTlRfQ0hBTkdFRDogYSBwYXJ0aWNpcGFudCBjaGFuZ2VzIGhpcyBzdGF0dXMgKGpvaW4pXG5cdCAqIC0gUEFSVElDSVBBTlRfUkVNT1ZFRDogYSBwYXJ0aWNpcGFudCBsZWF2ZSB0aGUgcm9vbVxuXHQgKiAtIE1FU1NBR0VfQURERUQ6IG5ldyBpbnN0YW50IG1lc3NhZ2Vcblx0ICogLSBNRVNTQUdFX0NIQU5HRUQ6IGFuIGV4aXN0aW5nIG1lc3NhZ2UgaGFzIGJlZW4gbW9kaWZpZWQgKG1vZGVyYXRpb24pXG5cdCAqIC0gTUVTU0FHRV9SRU1PVkVEOiBhIG1lc3NhZ2UgaGFzIGJlZW4gcmVtb3ZlZCAobW9kZXJhdGlvbilcblx0ICogLSBTVFJFQU1fUFVCTElTSEVEOiBhIHBhcnRpY2lwYW50IHB1Ymxpc2hlZCBhIG5ldyBTdHJlYW1cblx0ICogLSBTVFJFQU1fQ0hBTkdFRDogYSBwYXJ0aWNpcGFudCBjaGFuZ2VzIGhpcyBwdWJsaXNoZWQgU3RyZWFtIChtb2RlcmF0aW9uLCB0eXBlLCBtdXRlLi4uKVxuXHQgKiAtIFNUUkVBTV9VTlBVQkxJU0hFRDogYSBwYXJ0aWNpcGFudCBzdG9wcyB0aGUgcHVibGljYXRpb24gb2YgaGlzIFN0cmVhbVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGhlIGFyZ3VtZW50cyBkZXBlbmRzIG9uIHRoZSB0eXBlIG9mIGV2ZW50OlxuXHQgKiAtIFBBUlRJQ0lQQU5UXyogOiBjYWxsYmFjayh7QGxpbmsgUGFydGljaXBhbnR9IHAgWywgRXJyb3IgZV0pXG5cdCAqIC0gTUVTU0FHRV8qIDogY2FsbGJhY2soe0BsaW5rIE1lc3NhZ2V9IG0gWywgRXJyb3IgZV0pXG5cdCAqIC0gU1RSRUFNXyogOiBjYWxsYmFjayh7QGxpbmsgUmVtb3RlfSBzIFssIEVycm9yIGVdKVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuUXVlcnl+Y2FuY2VsQ2FsbGJhY2t9IGNhbmNlbENhbGxiYWNrIFRoZSBlcnJvciBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0YWtlcyBhbiBFcnJvciBhcyBvbmx5IGFyZ3VtZW50XG5cdCAqL1xuXHRvbihldmVudCwgY2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSB7XG5cdFx0Y29uc3Rcblx0XHRcdHBhdGggPSBFdmVudHMucm9vbS50b1BhdGgoZXZlbnQpKHRoaXMpLFxuXHRcdFx0b2JqID0gRXZlbnRzLnJvb20udG9DbGFzcyhldmVudCk7XG5cdFx0aWYocGF0aCAmJiBvYmopIHtcblx0XHRcdGNvbnN0IHR5cGVkQ2FsbGJhY2sgPSBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGlmKCEvXlNUUkVBTV8vaS50ZXN0KGV2ZW50KSB8fCAhc25hcERhdGEpIHtcblx0XHRcdFx0XHRMb2cuaShgUm9vbX5vbigke2V2ZW50fSlgLCBzbmFwRGF0YSA/IG5ldyBvYmooc25hcERhdGEpIDogbnVsbCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soc25hcERhdGEgPyBuZXcgb2JqKHNuYXBEYXRhKSA6IG51bGwpO1xuXHRcdFx0XHR9IGVsc2UgaWYoY2FjaGUudXNlcikge1xuXHRcdFx0XHRcdGNvbnN0IHN0cmVhbURhdGEgPSBPYmplY3QuYXNzaWduKHt1aWQ6IHNuYXBEYXRhLm5hbWUoKSwgcm9vbUlkOiB0aGlzLnVpZH0sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHRcdFx0XHRpZihzdHJlYW1EYXRhLmZyb20gIT09IGNhY2hlLnVzZXIudWlkIHx8IHN0cmVhbURhdGEuZGV2aWNlICE9PSBjYWNoZS5kZXZpY2UpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlbW90ZVN0cmVhbSA9IGNhY2hlLnN0cmVhbXMuZ2V0UmVtb3RlKHN0cmVhbURhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmkoYFJvb21+b24oJHtldmVudH0pYCwgcmVtb3RlU3RyZWFtKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKHJlbW90ZVN0cmVhbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIHR5cGVkQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKTtcblx0XHRcdGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaCh0eXBlZENhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2VuZCBhbiBpbnN0YW50IG1lc3NhZ2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2U+fVxuXHQgKi9cblx0c2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuXHRcdHJldHVybiBNZXNzYWdlLnNlbmQodGhpcywgbWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogUHVibGlzaCBhIGxvY2FsIHN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgc3RyZWFtIHR5cGUsIHNlZSB7QGxpbmsgU3RyZWFtVHlwZXN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcblx0ICogQHBhcmFtIHtFbGVtZW50fSBbbG9jYWxTdHJlYW1Db250YWluZXJdIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uIENhbiBiZSBudWxsIGlmIGFscmVhZHkgc3BlY2lmaWVkIGluIHtAbGluayBDb25maWd9LlxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtQ29uc3RyYWludHN9IFtjb25zdHJhaW50c10gVGhlIHN0cmVhbSBjb25zdHJhaW50cy4gSWYgbm90IGRlZmluZWQsIHRoZSBjb25zdHJhaW50cyBkZWZpbmVkIGluIHtAbGluayBDb25maWd9IHdpbGwgYmUgdXNlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHNoYXJlKHR5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50cykge1xuXHRcdExvZy5pKCdSb29tfnNoYXJlJywge3R5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50c30pO1xuXHRcdHJldHVybiBMb2NhbC5zaGFyZSh0aGlzLnVpZCwgdHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBKb2luIHRoZSByb29tLiBTZXRzIHRoZSBjb25uZWN0ZWQgc3RhdHVzIG9mIHRoZSBjdXJyZW50IHBhcnRpY2lwYW50IHRvIENPTk5FQ1RFRC5cblx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0ICovXG5cdGpvaW4oKSB7XG5cdFx0TG9nLmkoJ1Jvb21+am9pbicsIHRoaXMpO1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gam9pbiBhIFJvb20uJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2pvaW5Sb29tKHRoaXMpLmNhdGNoKExvZy5yKCdSb29tfmpvaW4nKSk7XG5cdH1cblxuXHQvKipcblx0ICogTGVhdmUgdGhlIHJvb20uIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0dXMgb2YgdGhlIGN1cnJlbnQgcGFydGljaXBhbnQgdG8gV0FTX0NPTk5FQ1RFRCwgZGVsZXRlcyBtZWRpYXMgYW5kIGNhbGxiYWNrcywgY2xvc2VzIFdlYlJUQyBzdGFja3MgaW4gdXNlLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0bGVhdmUoKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBsZWF2ZSBhIFJvb20uJykpO1xuXHRcdH1cblx0XHRMb2cuaSgnUm9vbX5sZWF2ZScsIHRoaXMpO1xuXHRcdC8vIENhbmNlbCBvbkRpc2Nvbm5lY3Rcblx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9L3N0YXR1c2ApLmNhbmNlbCgpO1xuXG5cdFx0Ly8gRGlzY29ubmVjdCB1c2VyJ3MgY2FsbGJhY2tzXG5cdFx0T2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdERhdGFTeW5jLm9mZihFdmVudHMucm9vbS50b1BhdGgoZXZlbnQpKHRoaXMpLCBldmVudCk7XG5cdFx0fSk7XG5cdFx0Ly8gVW5wdWJsaXNoIGFsbCBsb2NhbCBzdHJlYW1zXG5cdFx0dGhpcy5sb2NhbFN0cmVhbXMoKS50aGVuKGxvY2FsU3RyZWFtcyA9PiBsb2NhbFN0cmVhbXMuZm9yRWFjaChsb2NhbFN0cmVhbSA9PiBsb2NhbFN0cmVhbS5jbG9zZSgpKSk7XG5cdFx0Ly8gVW5zdWJzY3JpYmUgYWxsIHJlbW90ZSBzdHJlYW1zXG5cdFx0dGhpcy5yZW1vdGVTdHJlYW1zKCkudGhlbihyZW1vdGVTdHJlYW1zID0+IHJlbW90ZVN0cmVhbXMuZm9yRWFjaChyZW1vdGVTdHJlYW0gPT4gcmVtb3RlU3RyZWFtLnVuU3Vic2NyaWJlKCkpKTtcblx0XHQvLyBVcGRhdGUgc3RhdHVzXG5cdFx0cmV0dXJuIERhdGFTeW5jLnNldChgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH0vc3RhdHVzYCwgV0FTX0NPTk5FQ1RFRClcblx0XHRcdC5jYXRjaChMb2cucignUm9vbX5sZWF2ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMZWF2ZXMgJiBjbG9zZSB0aGUgUm9vbS4gT25seSB0aGUgb3duZXIvbW9kZXJhdG9yIGNhbiBjbG9zZSBhIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRMb2cuaSgnUm9vbX5jbG9zZScsIHRoaXMpO1xuXHRcdHJldHVybiB0aGlzLmxlYXZlKClcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgcm9vbXMvJHt0aGlzLnVpZH1gLCB7XG5cdFx0XHRcdHN0YXR1czogQ0xPU0VELFxuXHRcdFx0XHRfY2xvc2VkOiBEYXRhU3luYy50cygpXG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMudWlkfWApKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfmNsb3NlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHJvb21cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lXSBUaGUgcm9vbSBuYW1lXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmE9bnVsbF0gRXh0cmEgaW5mb3JtYXRpb25zXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3B1YmxpY1Jvb209ZmFsc2VdIEluZGljYXRlcyBwdWJsaWMgcm9vbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxSb29tLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlIChuYW1lLCBleHRyYSA9IG51bGwsIHB1YmxpY1Jvb20gPSBmYWxzZSkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gY3JlYXRlIGEgUm9vbS4nKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Rcblx0XHRcdHJvb21NZXRhRGF0YSA9IHtcblx0XHRcdFx0b3duZXI6IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0XHRfcHVibGljOiBwdWJsaWNSb29tLFxuXHRcdFx0XHRuYW1lOiBuYW1lIHx8IGAke2NhY2hlLnVzZXIubmFtZX0tJHtEYXRlLm5vdygpfWBcblx0XHRcdH0sXG5cdFx0XHRyb29tRnVsbE1ldGFEYXRhID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRcdHN0YXR1czogT1BFTkVELFxuXHRcdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKSxcblx0XHRcdFx0ZXh0cmFcblx0XHRcdH0sIHJvb21NZXRhRGF0YSk7XG5cblx0XHRsZXQgcm9vbSA9IG51bGw7XG5cdFx0Ly8gQ3JlYXRlIHB1YmxpYyByb29tIGluZm9zXG5cdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goJ3Jvb21zJywgcm9vbUZ1bGxNZXRhRGF0YSlcblx0XHRcdC8vIENyZWF0ZSBwcml2YXRlIHJvb20gaW5mb3Ncblx0XHRcdC50aGVuKHJvb21SZWYgPT4ge1xuXHRcdFx0XHRyb29tID0gbmV3IFJvb20oT2JqZWN0LmFzc2lnbih7dWlkOiByb29tUmVmLm5hbWUoKX0sIHJvb21GdWxsTWV0YURhdGEpKTtcblx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy9yb29tcy8ke3Jvb20udWlkfS9tZXRhYCwgcm9vbU1ldGFEYXRhKTtcblx0XHRcdH0pXG5cdFx0XHQvLyBKb2luIHRoZSByb29tXG5cdFx0XHQudGhlbigoKSA9PiBfam9pblJvb20ocm9vbSwgT1dORVIpKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tI2NyZWF0ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSB7QGxpbmsgUm9vbX0gZnJvbSBpdHMgYHVpZGBcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHVpZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48Um9vbT59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0ICh1aWQpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMuZ2V0KGByb29tcy8ke3VpZH1gKVxuXHRcdFx0LnRoZW4oc25hcERhdGEgPT4ge1xuXHRcdFx0XHRpZihzbmFwRGF0YS52YWwoKSkge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgUm9vbShzbmFwRGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Sb29tLmpzIiwiLyplc2xpbnQgbWF4LXBhcmFtczogWzIsIDVdLCBtYXgtbGVuOiBbMCwgMTIwXSAqL1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vTG9nJztcblxuLyoqXG4gKiBWaWRlbyByZXNvbHV0aW9uIHByZXNldHNcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHR5cGUge3tVSEQ6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWluOiBzdHJpbmd9LCBGSEQ6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWluOiBzdHJpbmcsIG1heDogc3RyaW5nfSwgSEQ6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWluOiBzdHJpbmcsIG1heDogc3RyaW5nfSwgU1ZHQToge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBTRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBWR0E6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWF4OiBzdHJpbmd9fX1cbiAqL1xuY29uc3QgcHJlc2V0cyA9IHtcblx0VUhEOiB7dzogMzg0MCwgaDogMjE2MCwgbWluOiAnSEQnfSxcblx0RkhEOiB7dzogMTkyMCwgaDogMTA4MCwgbWluOiAnSEQnLCBtYXg6ICdVSEQnfSxcblx0SEQ6IHt3OiAxMjgwLCBoOiA3MjAsIG1pbjogJ1NEJywgbWF4OiAnRkhEJ30sXG5cdFNWR0E6IHt3OiA4MDAsIGg6IDYwMCwgbWluOiAnVkdBJywgbWF4OiAnSEQnfSxcblx0U0Q6IHt3OiA3MjAsIGg6IDU3NiwgbWluOiAnVkdBJywgbWF4OiAnSEQnfSxcblx0VkdBOiB7dzogNjQwLCBoOiA0ODAsIG1heDogJ1NWR0EnfVxufTtcblxuLyoqXG4gKiBBc3NpZ24gZGV2aWNlSWQgdG8gY29uc3RyYWludFxuICogQHBhcmFtIGNvbnN0cmFpbnRcbiAqIEBwYXJhbSBkZXZpY2VJZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IF9hc3NpZ25EZXZpY2UgPSAoY29uc3RyYWludCwgZGV2aWNlSWQpID0+IHtcblx0aWYoY29uc3RyYWludCAmJiBkZXZpY2VJZCkge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdFx0L14oKHVzZXIpfChlbnZpcm9ubWVudCkpJC9pLnRlc3QoZGV2aWNlSWQpID8ge2ZhY2luZ01vZGU6IGRldmljZUlkfSA6IHtkZXZpY2VJZH0sXG5cdFx0XHRjb25zdHJhaW50ID09PSB0cnVlID8ge30gOiBjb25zdHJhaW50KTtcblx0fVxuXHRyZXR1cm4gY29uc3RyYWludDtcbn07XG5cbi8qKlxuICogSGVscGVycyBmb3IgTWVkaWFEZXZpY2VzIGFuZCBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG5cdC8qKlxuXHQgKiBmYWNpbmdNb2RlIHZhbHVlcyB0byB1c2Ugd2l0aCBjb25zdHJhaW50c1xuXHQgKiBAcmV0dXJucyB7e1VTRVI6IHN0cmluZywgRU5WSVJPTk1FTlQ6IHN0cmluZ319XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGZhY2luZ01vZGUoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFVTRVI6ICd1c2VyJyxcblx0XHRcdEVOVklST05NRU5UOiAnZW52aXJvbm1lbnQnXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIZWxwZXJzIHRvIGNyZWF0ZSBhIE1lZGlhU3RyZWFtQ29uc3RyYWludHMgY29uZmlndXJhdGlvbiBvYmplY3Rcblx0ICogQHBhcmFtIHtib29sZWFufE1lZGlhVHJhY2tDb25zdHJhaW50c3xzdHJpbmd9IFt2aWRlb0NvbnN0cmFpbnRzPSdIRCddIGEgYm9vbGVhbiwgYSB2aWRlbyBjb25zdHJhaW50cyBvYmplY3Qgb3IgYSBwcmVzZXQgaWQgKFVIRCwgRkhELCBIRCwgU1ZHQSwgU0QsIFZHQSlcblx0ICogQHBhcmFtIHtib29sZWFufE1lZGlhVHJhY2tDb25zdHJhaW50c30gW2F1ZGlvQ29uc3RyYWludHM9dHJ1ZV0gYSBib29sZWFuIG9yIGFuIGF1ZGlvIGNvbnN0cmFpbnRzIG9iamVjdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9aWRlYWxdIHR5cGUgb2YgY29uc3RyYWludHMgZm9yIHZpZGVvIHdoZW4gdXNpbmcgYSBwcmVzZXQgKGV4YWN0LG1pbixtYXggb3IgaWRlYWwpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW3ZpZGVvRGV2aWNlSWRdIHZpZGVvIGlucHV0IGRldmljZSBpZCBvciBmYWNpbmdNb2RlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW2F1ZGlvRGV2aWNlSWRdIGF1ZGlvIGlucHV0IGRldmljZSBpZFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fVxuXHQgKiBAdGhyb3dzIHtFcnJvcn1cblx0ICpcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+SEQgQXVkaW9WaWRlbyB3aXRoIGRlZmF1bHQgZGV2aWNlczwvY2FwdGlvbj5cblx0ICogbGV0IG15Q29uc3RyYWludHMgPSBSZWFjaC5tZWRpYS5jb25zdHJhaW50cygpO1xuXHQgKiBjb25zb2xlLmxvZyhteUNvbnN0cmFpbnRzKTtcblx0ICpcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+RnVsbCBIRCBWaWRlbyB3aXRob3V0IGF1ZGlvIHVzaW5nIGRlZmF1bHQgZGV2aWNlczwvY2FwdGlvbj5cblx0ICogbGV0IG15Q29uc3RyYWludHMgPSBSZWFjaC5tZWRpYS5jb25zdHJhaW50cygnRkhEJywgZmFsc2UsICdleGFjdCcpO1xuXHQgKiBjb25zb2xlLmxvZyhteUNvbnN0cmFpbnRzKTtcblx0ICovXG5cdHN0YXRpYyBjb25zdHJhaW50cyAodmlkZW9Db25zdHJhaW50cyA9ICdIRCcsIGF1ZGlvQ29uc3RyYWludHMgPSB0cnVlLCB0eXBlID0gJ2lkZWFsJywgdmlkZW9EZXZpY2VJZCwgYXVkaW9EZXZpY2VJZCkge1xuXHRcdGxldCB2aWRlbyA9IHZpZGVvQ29uc3RyYWludHM7XG5cdFx0aWYgKHR5cGVvZiB2aWRlb0NvbnN0cmFpbnRzID09PSAnc3RyaW5nJyl7XG5cdFx0XHRpZihwcmVzZXRzW3ZpZGVvQ29uc3RyYWludHMudG9VcHBlckNhc2UoKV0pIHtcblx0XHRcdFx0Y29uc3Rcblx0XHRcdFx0XHRwcmVzZXQgPSBwcmVzZXRzW3ZpZGVvQ29uc3RyYWludHMudG9VcHBlckNhc2UoKV0sXG5cdFx0XHRcdFx0ZGltQ29uc3RyYWludCA9IChkaW0pID0+IHtcblx0XHRcdFx0XHRcdGlmKC9eKG1pbnxtYXh8ZXhhY3QpJC8udGVzdCh0eXBlKSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByID0ge307XG5cdFx0XHRcdFx0XHRcdHJbdHlwZV0gPSBwcmVzZXRbZGltXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRtaW46IHByZXNldC5taW4gPyBwcmVzZXRzW3ByZXNldC5taW5dW2RpbV0gOiBwcmVzZXRbZGltXSxcblx0XHRcdFx0XHRcdFx0aWRlYWw6IHByZXNldFtkaW1dLFxuXHRcdFx0XHRcdFx0XHRtYXg6IHByZXNldC5tYXggPyBwcmVzZXRzW3ByZXNldC5tYXhdW2RpbV0gOiBwcmVzZXRbZGltXVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR2aWRlbyA9IHt3aWR0aDogZGltQ29uc3RyYWludCgndycpLCBoZWlnaHQ6IGRpbUNvbnN0cmFpbnQoJ2gnKX07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gVmlkZW8gUmVzb2x1dGlvbiBwcmVzZXQgKFVIRCwgRkhELCBIRCwgU1ZHQSwgU0QsIFZHQSknKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dmlkZW8gPSBfYXNzaWduRGV2aWNlKHZpZGVvLCB2aWRlb0RldmljZUlkKTtcblxuXHRcdGNvbnN0IGF1ZGlvID0gX2Fzc2lnbkRldmljZShhdWRpb0NvbnN0cmFpbnRzLCBhdWRpb0RldmljZUlkKTtcblxuXHRcdExvZy5kKCdNZWRpYSNjb25zdHJhaW50cycsIHt2aWRlbywgYXVkaW99KTtcblx0XHRyZXR1cm4ge3ZpZGVvLCBhdWRpb307XG5cdH1cblxuXHQvKipcblx0ICogSW5pdCBzdHJlYW0gZGlzcGxheSBub2RlIGRlcGVuZGluZyBvbiBzdHJlYW0gdHlwZVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSBUaGUgTWVkaWFTdHJlYW0gdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBDb250YWluZXIgbm9kZSBmb3Igc3RyZWFtc1xuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXZpb3VzIFByZXZpb3VzIG5vZGUgZm9yIHRoZSBzdHJlYW1cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2b2x1bWU9LjddIHRoZSBkZWZhdWx0IHZvbHVtZVxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fVxuXHQgKi9cblx0c3RhdGljIGF0dGFjaFN0cmVhbShtZWRpYVN0cmVhbSwgY29udGFpbmVyLCBwcmV2aW91cywgdm9sdW1lID0gLjcpIHtcblx0XHRsZXQgdGFnTmFtZSA9ICcnO1xuXHRcdGlmKG1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFnTmFtZSA9ICd2aWRlbyc7XG5cdFx0fSBlbHNlIGlmKG1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFnTmFtZSA9ICdhdWRpbyc7XG5cdFx0fVxuXHRcdExvZy5kKCdNZWRpYSNhdHRhY2hTdHJlYW0nLCBtZWRpYVN0cmVhbSwgdGFnTmFtZSk7XG5cdFx0aWYgKHRhZ05hbWUubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IF9ub2RlID0gcHJldmlvdXM7XG5cdFx0XHRpZiAoIV9ub2RlIHx8IF9ub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnTmFtZSkge1xuXHRcdFx0XHRfbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cdFx0XHRcdF9ub2RlLmF1dG9wbGF5ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChjb250YWluZXIpIHtcblx0XHRcdFx0aWYgKHByZXZpb3VzICYmIHByZXZpb3VzICE9PSBfbm9kZSkge1xuXHRcdFx0XHRcdGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoX25vZGUsIHByZXZpb3VzKTtcblx0XHRcdFx0fSBlbHNlIGlmICghcHJldmlvdXMpIHtcblx0XHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoX25vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfbm9kZS5zcmNPYmplY3QgPSBtZWRpYVN0cmVhbTtcblx0XHRcdF9ub2RlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRfbm9kZS52b2x1bWUgPSB2b2x1bWU7XG5cdFx0XHRyZXR1cm4gX25vZGU7XG5cdFx0fVxuXHRcdHJldHVybiBwcmV2aW91cztcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0IGF2YWlsYWJsZSBpbnB1dCBkZXZpY2VzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8e2F1ZGlvaW5wdXQ6IE1lZGlhRGV2aWNlSW5mb1tdLCB2aWRlb2lucHV0OiBNZWRpYURldmljZUluZm9bXX0+fVxuXHQgKlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBSZWFjaC5tZWRpYS5kZXZpY2VzKCkudGhlbihkZXZpY2VzID0+IHtcblx0ICogIC8vIFZpZGVvIGNhbWVyYXNcblx0ICogIGNvbnNvbGUubG9nKGRldmljZXMudmlkZW9pbnB1dCk7XG5cdCAqICAvLyBBdWRpbyBtaWNzXG5cdCAqICBjb25zb2xlLmxvZyhkZXZpY2VzLmF1ZGlvaW5wdXQpO1xuXHQgKiB9KTtcblx0ICovXG5cdHN0YXRpYyBkZXZpY2VzICgpIHtcblx0XHRyZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKClcblx0XHRcdC50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0XHRjb25zdCByID0ge307XG5cdFx0XHRcdGRldmljZXMuZm9yRWFjaChkZXZpY2UgPT4ge1xuXHRcdFx0XHRcdGlmICghcltkZXZpY2Uua2luZF0pIHtcblx0XHRcdFx0XHRcdHJbZGV2aWNlLmtpbmRdID0gW107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJbZGV2aWNlLmtpbmRdLnB1c2goZGV2aWNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdExvZy5kKCdNZWRpYSNkZXZpY2VzJywgcik7XG5cdFx0XHRcdHJldHVybiByO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignTWVkaWEjZGV2aWNlcycpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbC9NZWRpYS5qcyIsImltcG9ydCBVc2VyIGZyb20gJy4uL2NvcmUvVXNlcic7XG5pbXBvcnQgUm9vbSBmcm9tICcuLi9jb3JlL1Jvb20nO1xuaW1wb3J0IEludml0ZSBmcm9tICcuLi9jb3JlL0ludml0ZSc7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi4vY29yZS9QYXJ0aWNpcGFudCc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb3JlL01lc3NhZ2UnO1xuaW1wb3J0IFJlbW90ZSBmcm9tICcuLi9jb3JlL3N0cmVhbS9SZW1vdGUnO1xuaW1wb3J0IHtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEfSBmcm9tICcuLi9jb3JlL3V0aWwvY29uc3RhbnRzJztcblxuLyoqXG4gKiBUaGUgZXZlbnRzIHN1cHBvcnRlZCBieSB7QGxpbmsgUmVhY2gjb259XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHMvUmVhY2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVU0VSX0FEREVEIEZpcmVkIHdoZW4gYSBuZXcgdXNlciBpcyByZWdpc3RlcmVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVNFUl9DSEFOR0VEIEZpcmVkIHdoZW4gYW4gZXhpc3RpbmcgdXNlciBsb2dzIGluIG9yIG91dCBvciBjaGFuZ2VzIGlzIHN0YXR1c1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFVTRVJfUkVNT1ZFRCBGaXJlZCB3aGVuIGEgdXNlciBpcyB1bnJlZ2lzdGVyZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBST09NX0FEREVEIEZpcmVkIHdoZW4gYSByb29tIGlzIGNyZWF0ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBST09NX0NIQU5HRUQgRmlyZWQgd2hlbiBhIHJvb20gc3RhdHVzIGlzIGNoYW5naW5nXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUk9PTV9SRU1PVkVEIEZpcmVkIHdoZW4gYSByb29tIGlzIGNsb3NlZCBkZWZpbml0ZWx5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gSU5WSVRFX0FEREVEIEZpcmVkIHdoZW4gYW4gaW52aXRlIGlzIHJlY2VpdmVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSU5WSVRFX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBpbnZpdGUgc3RhdHVzIGlzIG1vZGlmaWVkXG4gKi9cblxuLyoqXG4gKiBUaGUgZXZlbnRzIHN1cHBvcnRlZCBieSB7QGxpbmsgUm9vbSNvbn1cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9Sb29tXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElDSVBBTlRfQURERUQgRmlyZWQgd2hlbiBhIG5ldyBwYXJ0aWNpcGFudCBpcyBhZGRlZCB0byB0aGUgcm9vbS4gRG9lcyBub3QgbWVhbiBoZSdzIGNvbm5lY3RlZCBidXQgdGhhdCBoZSdzIGludml0ZWQgdG9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUNJUEFOVF9DSEFOR0VEIEZpcmVkIHdoZW4gYSBwYXJ0aWNpcGFudCBjaGFuZ2VzIGlzIHN0YXR1cyAoZW50ZXIvbGVhdmVzIHRoZSByb29tKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQ0lQQU5UX1JFTU9WRUQgRmlyZWQgd2hlbiBhIHVzZXIgbGVhdmVzIGRlZmluaXRlbHkgb3IgaXMgYmFubmVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUVTU0FHRV9BRERFRCBGaXJlZCB3aGVuIGEgbmV3IGluc3RhbnQgbWVzc2FnZSBpcyBzZW50IHRvIHRoZSByb29tXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUVTU0FHRV9DSEFOR0VEIEZpcmVkIHdoZW4gYW4gaW5zdGFudCBtZXNzYWdlIGlzIGVkaXRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1FU1NBR0VfUkVNT1ZFRCBGaXJlZCB3aGVuIGFuIGluc3RhbnQgbWVzc2FnZSBpcyByZW1vdmVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1RSRUFNX1BVQkxJU0hFRCBGaXJlZCB3aGVuIGEgcGFydGljaXBhbnQgcHVibGlzaGVzIGEgc3RyZWFtXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU1RSRUFNX1VOUFVCTElTSEVEIEZpcmVkIHdoZW4gYSBwYXJ0aWNpcGFudCBzdG9wcyB0aGUgcHVibGlzaGluZyBvZiBoaXMgc3RyZWFtXG4gKi9cblxuLyoqXG4gKiBUaGUgZXZlbnRzIHN1cHBvcnRlZCBieSB7QGxpbmsgSW52aXRlI29ufVxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzL0ludml0ZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFDQ0VQVEVEIEZpcmVkIHdoZW4gdGhlIGludml0ZSBoYXMgYmVlbiBhY2NlcHRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJFSkVDVEVEIEZpcmVkIHdoZW4gdGhlIGludml0ZSBoYXMgYmVlbiBhY2NlcHRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IENBTkNFTEVEIEZpcmVkIHdoZW4gdGhlIGludml0ZSBoYXMgYmVlbiBjYW5jZWxlZFxuICovXG5cbi8qKlxuICogVGhlIGV2ZW50cyBzdXBwb3J0ZWQgYnkge0BsaW5rIFJlbW90ZSNvbn0uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHMvU3RyZWFtXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTVVURSBGaXJlZCB3aGVuIHRoZSBtdXRlIHN0YXR1cyBvZiB0aGUgc3RyZWFtIGNoYW5nZXNcbiAqL1xuXG4vKipcbiAqIFBhdGggY29uZmlndXJhdGlvbiBmb3IgZWFjaCBldmVudFxuICogQGlnbm9yZVxuICogQHR5cGUge3t9fVxuICovXG5jb25zdCBwYXRocyA9IHtcblx0J1VTRVInOiAoKSA9PiAndXNlcnMnLFxuXHQnUk9PTSc6ICgpID0+ICdyb29tcycsXG5cdCdJTlZJVEUnOiB1c2VyID0+IHtcblx0XHRpZighdXNlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBiZSBhdXRoZW50aWNhdGVkIHRvIGxpc3QgdGhlIGludml0ZXMnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gO1xuXHR9LFxuXHQnUEFSVElDSVBBTlQnOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50c2AsXG5cdCdNRVNTQUdFJzogcm9vbSA9PiBgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlc2AsXG5cdCdTVFJFQU0nOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3N0cmVhbXNgXG59O1xuXG4vKipcbiAqIE9iamVjdCB0eXBlIGNvbmZpZ3VyYXRpb24gZm9yIGVhY2ggZXZlbnRcbiAqIEBpZ25vcmVcbiAqIEB0eXBlIHt7fX1cbiAqL1xuY29uc3QgY2xhc3NlcyA9IHtcblx0J1VTRVInOiBVc2VyLFxuXHQnUk9PTSc6IFJvb20sXG5cdCdJTlZJVEUnOiBJbnZpdGUsXG5cdCdQQVJUSUNJUEFOVCc6IFBhcnRpY2lwYW50LFxuXHQnTUVTU0FHRSc6IE1lc3NhZ2UsXG5cdCdTVFJFQU0nOiBSZW1vdGVcbn07XG5cbi8qKlxuICogUHJpdmF0ZSBjbGFzcyB0byBhZGQgc3VwcG9ydCB0ZXN0IG1ldGhvZHNcbiAqIEBjbGFzcyBfRXZlbnRzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIF9FdmVudHMge1xuXHRjb25zdHJ1Y3RvcihrZXlzKSB7XG5cdFx0a2V5cy5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0ga2V5O30pO1xuXHR9XG5cdHN1cHBvcnRzKGV2ZW50KSB7XG5cdFx0aWYoIWV2ZW50IHx8IHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgdGhpc1tldmVudF0gIT09IGV2ZW50LnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQuIFVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzKSl9YCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHRvUGF0aChldmVudCkge1xuXHRcdGlmKHRoaXMuc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aHNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXSB8fCAoKCkgPT4gbnVsbCk7XG5cdFx0fVxuXHR9XG5cdHRvQ2xhc3MoZXZlbnQpIHtcblx0XHRpZih0aGlzLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzZXNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCByZWFjaCA9IG5ldyBfRXZlbnRzKFtcblx0J1VTRVJfQURERUQnLCAnVVNFUl9DSEFOR0VEJywgJ1VTRVJfUkVNT1ZFRCcsXG5cdCdST09NX0FEREVEJywgJ1JPT01fQ0hBTkdFRCcsICdST09NX1JFTU9WRUQnLFxuXHQnSU5WSVRFX0FEREVEJywgJ0lOVklURV9DSEFOR0VEJ1xuXSk7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3Qgcm9vbSA9IG5ldyBfRXZlbnRzKFtcblx0J01FU1NBR0VfQURERUQnLCAnTUVTU0FHRV9DSEFOR0VEJywgJ01FU1NBR0VfUkVNT1ZFRCcsXG5cdCdQQVJUSUNJUEFOVF9BRERFRCcsICdQQVJUSUNJUEFOVF9DSEFOR0VEJywgJ1BBUlRJQ0lQQU5UX1JFTU9WRUQnLFxuXHQnU1RSRUFNX1BVQkxJU0hFRCcsICdTVFJFQU1fVU5QVUJMSVNIRUQnXG5dKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJlYW0gPSBuZXcgX0V2ZW50cyhbJ01VVEUnXSk7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgaW52aXRlID0gbmV3IF9FdmVudHMoW0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRURdKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9FdmVudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJXZWJjb21cIixcImNvbW1vbmpzXCI6XCJ3ZWJjb20vd2ViY29tXCIsXCJjb21tb25qczJcIjpcIndlYmNvbS93ZWJjb21cIixcImFtZFwiOlwid2ViY29tL3dlYmNvbVwifVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7T05HT0lORywgQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRH0gZnJvbSAnLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgUm9vbSBmcm9tICcuL1Jvb20nO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4uL2RlZmluaXRpb25zL0V2ZW50cyc7XG5cbi8qKlxuICogVXBkYXRlXG4gKiBAcGFyYW0ge0ludml0ZX0gaW52aXRlIFRoZSBpbnZpdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgVGhlIG5ldyBzdGF0dXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uPW51bGxdIFRoZSByZWFzb24gKGEgbWVzc2FnZSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbX2VuZGVkPW51bGxdXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPEludml0ZSwgRXJyb3I+fVxuICovXG5jb25zdCB1cGRhdGUgPSAoaW52aXRlLCBzdGF0dXMsIHJlYXNvbiA9IG51bGwsIF9lbmRlZCA9IG51bGwpID0+IHtcblx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdHN0YXR1cyxcblx0XHRyZWFzb24sXG5cdFx0X2VuZGVkXG5cdH07XG5cblx0aWYoaW52aXRlLnN0YXR1cyAhPT0gT05HT0lORykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoaXMgaW52aXRhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFuc3dlcmVkJykpO1xuXHR9XG5cdHJldHVybiBEYXRhU3luYy51cGRhdGUoYF8vaW52aXRlcy8ke2ludml0ZS50b30vJHtpbnZpdGUudWlkfWAsIHZhbHVlcylcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2gocHJvcCA9PiB7XG5cdFx0XHRcdGludml0ZVtwcm9wXSA9IHZhbHVlc1twcm9wXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFJvb20uZ2V0KGludml0ZS5yb29tKTtcblx0XHR9KVxuXHRcdC50aGVuKHJvb20gPT4gKHtyb29tLCBpbnZpdGV9KSlcblx0XHQuY2F0Y2goTG9nLnIoJ0ludml0ZV91cGRhdGUnKSk7XG59O1xuXG4vKipcbiAqIEludml0YXRpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52aXRlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlIGFuIGludml0ZVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fG9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhKSB7XG5cdFx0bGV0IHZhbHVlcyA9IHNuYXBEYXRhO1xuXHRcdGlmKHNuYXBEYXRhICYmIHNuYXBEYXRhLnZhbCAmJiB0eXBlb2Ygc25hcERhdGEudmFsID09PSAnZnVuY3Rpb24nKXtcblx0XHRcdHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpLCB7dWlkOiBzbmFwRGF0YS5uYW1lKCksIHRvOiBzbmFwRGF0YS5yZWYoKS5wYXJlbnQoKS5uYW1lKCl9KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlJ3MgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUgc3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSB2YWx1ZXMudWlkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSdzIHNlbmRlciB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuZnJvbSA9IHZhbHVlcy5mcm9tO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZWUncyB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudG8gPSB2YWx1ZXMudG87XG5cdFx0LyoqXG5cdFx0ICogVGhlIGlkIG9mIHRoZSByb29tIGFzc29jaWF0ZWQgdG8gdGhlIGludml0ZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tID0gdmFsdWVzLnJvb207XG5cdFx0LyoqXG5cdFx0ICogVGhlIGludml0YXRpb24gc3RhdHVzIDpcblx0XHQgKiAtIE9OR09JTkcgLSBUaGUgcmVjZWl2ZXIgaGFzIG5vdCB5ZXQgcmVzcG9uZGVkIHRvIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogLSBBQ0NFUFRFRCAtIFRoZSByZWNlaXZlciBoYXMgYWNjZXB0ZWQgdGhlIGludml0YXRpb25cblx0XHQgKiAtIFJFSkVDVEVEIC0gVGhlIHJlY2VpdmVyIGhhcyByZWplY3RlZCB0aGUgaW52aXRhdGlvblxuXHRcdCAqIC0gQ0FOQ0VMRUQgLSBUaGUgc2VuZGVyIGNhbmNlbGVkIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlIG1lc3NhZ2UuIFRoaXMgd2lsbCBiZSBlaXRoZXIgYSBjdXN0b20gbWVzc2FnZSBpZiB0aGUgc3RhdHVzIGlzIE9OR09JTkcgb3IgYSByZWFzb24gd2hlbiBzdGF0dXMgaXMgQ0FOQ0VMRUR8UkVKRUNURUQuXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRvcGljID0gdmFsdWVzLnRvcGljO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBjcmVhdGlvbiB0aW1lc3RhbXBcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NyZWF0ZWQgPSB2YWx1ZXMuX2NyZWF0ZWQ7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlIGV4cGlyYXRpb24gdGltZXN0YW1wXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9lbmRlZCA9IHZhbHVlcy5fZW5kZWQ7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlIGV2ZW50cyBjYWxsYmFja3Ncblx0XHQgKiBAdHlwZSB7e319XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJcyB0aGlzIGludml0YXRpb24gd2FpdGluZyBmb3IgYSByZXBseSA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzT25Hb2luZygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IE9OR09JTkc7XG5cdH1cblxuXHQvKipcblx0ICogV2FzIHRoaXMgaW52aXRhdGlvbiByZWplY3RlZCA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzUmVqZWN0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBSRUpFQ1RFRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBXYXMgdGhpcyBpbnZpdGF0aW9uIGFjY2VwdGVkID9cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNBY2NlcHRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IEFDQ0VQVEVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhcyB0aGlzIGludml0YXRpb24gY2FuY2VsZWQgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc0NhbmNlbGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1cyA9PT0gQ0FOQ0VMRUQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2FuY2VscyB0aGUgaW52aXRhdGlvbi4gT25seSB0aGUgc2VuZGVyIGNhbiBjYW5jZWwgdGhlIGludml0YXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSBUaGUgcmVhc29uIHRoZSBzZW5kZXIgaXMgY2FuY2VsaW5nIHRoZSBpbnZpdGVcblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGU+fVxuXHQgKi9cblx0Y2FuY2VsKHJlYXNvbikge1xuXHRcdHJldHVybiB1cGRhdGUodGhpcywgQ0FOQ0VMRUQsIHJlYXNvbiwgRGF0YVN5bmMudHMoKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVqZWN0cyB0aGUgaW52aXRhdGlvbi4gT25seSB0aGUgcmVjZWl2ZXIgY2FuIHJlamVjdCB0aGUgaW52aXRhdGlvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIFRoZSByZWFzb24gdGhlIHJlY2VpdmVyIGlzIHJlamVjdGluZyB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdHJlamVjdChyZWFzb24pIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIFJFSkVDVEVELCByZWFzb24sIERhdGFTeW5jLnRzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFjY2VwdCB0aGUgaW52aXRhdGlvbi4gT25seSB0aGUgcmVjZWl2ZXIgY2FuIGFjY2VwdCB0aGUgaW52aXRhdGlvbi5cblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGU+fVxuXHQgKi9cblx0YWNjZXB0KCkge1xuXHRcdHJldHVybiB1cGRhdGUodGhpcywgQUNDRVBURUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3RhdHVzIHVwZGF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIENhbiBiZTpcblx0ICogLSBBQ0NFUFRFRFxuXHQgKiAtIFJFSkVDVEVEXG5cdCAqIC0gQ0FOQ0VMRURcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcblx0ICovXG5cdG9uKHN0YXR1cywgY2FsbGJhY2spIHtcblx0XHRpZihFdmVudHMuaW52aXRlLnN1cHBvcnRzKHN0YXR1cykpIHtcblx0XHRcdC8vIFJlZ2lzdGVyIGNhbGxiYWNrXG5cdFx0XHRpZiAoIXRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdID0gW107XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdC8vIERlZmluZWQgbGlzdGVuZXIgJiBzdWJzY3JpYmUgaWYgbmVlZGVkXG5cdFx0XHRpZiAoIXRoaXMuX2xpc3RlbmVyKSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBJbnZpdGUgc3RhdHVzIHVwZGF0ZSBjYWxsYmFja1xuXHRcdFx0XHQgKiBAdHlwZSB7ZnVuY3Rpb259XG5cdFx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR0aGlzLl9saXN0ZW5lciA9IHNuYXBEYXRhID0+IHtcblx0XHRcdFx0XHRjb25zdCB1cGRhdGVkID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdFx0aWYgKHVwZGF0ZWQgIT09IG51bGwgJiYgdXBkYXRlZCAhPT0gdGhpcy5zdGF0dXMpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gdXBkYXRlZDtcblx0XHRcdFx0XHRcdCh0aGlzLl9jYWxsYmFja3NbdXBkYXRlZF0gfHwgW10pLmZvckVhY2goY2IgPT4ge1xuXHRcdFx0XHRcdFx0XHRjYih0aGlzKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0RGF0YVN5bmMub24oYF8vaW52aXRlcy8ke3RoaXMudG99LyR7dGhpcy51aWR9L3N0YXR1c2AsICd2YWx1ZScsIHRoaXMuX2xpc3RlbmVyLmJpbmQodGhpcykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhbGwgc3RhdHVzIGNoYW5nZSBldmVudHNcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcblx0ICovXG5cdG9uU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKSB7XG5cdFx0W0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRURdLmZvckVhY2goZXZlbnQgPT4ge1xuXHRcdFx0dGhpcy5vbihldmVudCwgY2FsbGJhY2spO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuLXJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3RhdHVzIHVwZGF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXR1c10gQ2FuIGJlOlxuXHQgKiAtIEFDQ0VQVEVEXG5cdCAqIC0gUkVKRUNURURcblx0ICogLSBDQU5DRUxFRFxuXHQgKiAtIG51bGwgVGhpcyB3aWxsIHVuLXJlZ2lzdGVyIGFsbCBjYWxsYmFja3Ncblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVxuXHQgKi9cblx0b2ZmKHN0YXR1cywgY2FsbGJhY2spIHtcblx0XHRpZighc3RhdHVzKSB7XG5cdFx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0XHR9IGVsc2UgaWYodGhpcy5fY2FsbGJhY2tzW3N0YXR1c10pIHtcblx0XHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNvbnN0IGlkeCA9IHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdLmZpbmRJbmRleChjYiA9PiBjYiA9PT0gY2FsbGJhY2spO1xuXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHR0aGlzLl9jYWxsYmFja3Muc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKCFbQ0FOQ0VMRUQsIEFDQ0VQVEVELCBSRUpFQ1RFRF0uc29tZShldmVudCA9PiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdICYmIHRoaXMuX2NhbGxiYWNrc1tldmVudF0ubGVuZ3RoID4gMCkpe1xuXHRcdFx0RGF0YVN5bmMub2ZmKGBfL2ludml0ZXMvJHt0aGlzLnRvfS8ke3RoaXMudWlkfS9zdGF0dXNgLCAndmFsdWUnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVW4tcmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYWxsIHN0YXR1cyBjaGFuZ2UgZXZlbnRzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cblx0ICovXG5cdG9mZlN0YXR1c0NoYW5nZShjYWxsYmFjaykge1xuXHRcdGlmKCFjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5vZmYoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0W0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRURdLmZvckVhY2goZXZlbnQgPT4ge1xuXHRcdFx0XHR0aGlzLm9mZihldmVudCwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB0aGUgaW52aXRhdGlvbiAmIGFkZCB0aGUgdXNlciB0byB0aGUgcGFydGljaXBhbnRzIGxpc3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtVc2VyfSBpbnZpdGVlIFRoZSB1c2VyIHRvIGludml0ZVxuXHQgKiBAcGFyYW0ge1Jvb219IHJvb20gVGhlIHJvb20gdG8gaW52aXRlIHRoZSB1c2VyIHRvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gQSBtZXNzYWdlIGZvciB0aGUgaW52aXRlZVxuXHQgKi9cblx0c3RhdGljIHNlbmQoaW52aXRlZSwgcm9vbSwgbWVzc2FnZSA9IG51bGwpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIHNlbmQgYW4gaW52aXRlLicpKTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnZpdGVNZXRhRGF0YSA9IHtcblx0XHRcdGZyb206IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0cm9vbTogcm9vbS51aWQsXG5cdFx0XHRzdGF0dXM6IE9OR09JTkcsXG5cdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKSxcblx0XHRcdHRvcGljOiBtZXNzYWdlXG5cdFx0fTtcblxuXHRcdHJldHVybiBEYXRhU3luYy5wdXNoKGBfL2ludml0ZXMvJHtpbnZpdGVlLnVpZH1gLCBpbnZpdGVNZXRhRGF0YSlcblx0XHRcdC50aGVuKGludml0ZVJlZiA9PiB7XG5cdFx0XHRcdGNvbnN0IGludml0ZUlkID0gaW52aXRlUmVmLm5hbWUoKTtcblx0XHRcdFx0cmV0dXJuIG5ldyBJbnZpdGUoT2JqZWN0LmFzc2lnbih7dWlkOiBpbnZpdGVJZCwgdG86IGludml0ZWUudWlkfSwgaW52aXRlTWV0YURhdGEpKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ0ludml0ZSNzZW5kJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9JbnZpdGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgRGV2aWNlIGZyb20gJy4vRGV2aWNlJztcbmltcG9ydCB7Q09OTkVDVEVELCBOT1RfQ09OTkVDVEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbmxldCBpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuLyoqXG4gKiBVc2VyIGluZm9ybWF0aW9uc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHVzZXJcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBVc2VyJ3MgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBVc2VyJ3MgZGlzcGxheSBuYW1lXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLm5hbWUgPSB2YWx1ZXMubmFtZTtcblx0XHQvKipcblx0XHQgKiBVc2VyJ3Mgc3RhdHVzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIGxhc3Qga25vdyBjb25uZWN0aW9uIHRzXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLmxhc3RTZWVuID0gdmFsdWVzLmxhc3RTZWVuO1xuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBpcyBhbiBhbm9ueW1vdXMgdXNlclxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuYW5vbnltb3VzID0gL15hbm9ueW1vdXMvLnRlc3QodGhpcy51aWQpO1xuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCAnZXh0cmEnIHByb3BlcnR5IGZvciB1bnJlc3RyaWN0ZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiA/XG5cdH1cblxuXHQvKipcblx0ICogSW52aXRlIGEgdXNlciBkaXJlY3RseS4gVGhpcyB3aWxsIGNyZWF0ZSBhIG5ldyBSb29tLCBsb2cgeW91IGluIGl0ICYgaW52aXRlIHRoZSB1c2VyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIGEgbWVzc2FnZSB0byBhZGQgdG8gdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHtyb29tOiBSb29tLCBpbnZpdGU6IEludml0ZX0sIEVycm9yPn1cblx0ICovXG5cdGludml0ZShtZXNzYWdlKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBpbnZpdGUgYW5vdGhlciBVc2VyLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIFJvb20uY3JlYXRlKGAke2NhY2hlLnVzZXIudWlkfS0ke3RoaXMudWlkfWApXG5cdFx0XHQudGhlbihyb29tID0+IHtcblx0XHRcdFx0cmV0dXJuIHJvb20uaW52aXRlKFt0aGlzXSwgbnVsbCwgbWVzc2FnZSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiB7cm9vbTogZGF0YS5yb29tLCBpbnZpdGU6IGRhdGEuaW52aXRlc1swXX07XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdVc2Vyfmludml0ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0IFVzZXJzJ3MgZGV2aWNlcy4gT25seSBmb3IgY3VycmVudCB1c2VyLlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPERldmljZVtdLCBFcnJvcj59XG5cdCAqL1xuXHRkZXZpY2VzKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL2RldmljZXMvJHt0aGlzLnVpZH1gLCBEZXZpY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgdGhlIGN1cnJlbnQgdXNlclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSB1c2VyJ3MgdWlkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIHVzZXIncyBkaXNwbGF5IG5hbWVcblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlciwgRXJyb3I+fVxuXHQgKi9cblx0c3RhdGljIGluaXQgKHVpZCwgbmFtZSkge1xuXHRcdGlmKCFpbml0aWFsaXppbmcpIHtcblx0XHRcdGluaXRpYWxpemluZyA9IHRydWU7XG5cdFx0XHRjb25zdCBkID0ge3N0YXR1czogQ09OTkVDVEVELCBsYXN0U2VlbjogRGF0YVN5bmMudHMoKX07XG5cdFx0XHRpZihuYW1lKSB7XG5cdFx0XHRcdE9iamVjdC5hc3NpZ24oZCwge25hbWV9KTtcblx0XHRcdH1cblx0XHRcdGxldCBkZXZpY2VJZCA9IFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5nZXQodWlkKTtcblx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYHVzZXJzLyR7dWlkfWAsIGQpXG5cdFx0XHRcdC8vIFJlZ2lzdGVyIGN1cnJlbnQgZGV2aWNlXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBkZXZpY2VNZXRhZGF0YSA9IHtcblx0XHRcdFx0XHRcdHN0YXR1czogQ09OTkVDVEVELFxuXHRcdFx0XHRcdFx0c2RrOiB7XG5cdFx0XHRcdFx0XHRcdHJlYWNoOiBTREtfVkVSU0lPTixcblx0XHRcdFx0XHRcdFx0d2ViY29tOiBXZWJjb20uU0RLX1ZFUlNJT05cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGlmKGRldmljZUlkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL2RldmljZXMvJHt1aWR9LyR7ZGV2aWNlSWR9YCwgZGV2aWNlTWV0YWRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9kZXZpY2VzLyR7dWlkfWAsIGRldmljZU1ldGFkYXRhKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gU2F2ZSBkZXZpY2Vcblx0XHRcdFx0LnRoZW4oZGV2aWNlUmVmID0+IHtcblx0XHRcdFx0XHRpZiAoIWRldmljZUlkKSB7XG5cdFx0XHRcdFx0XHRkZXZpY2VJZCA9IGRldmljZVJlZi5uYW1lKCk7XG5cdFx0XHRcdFx0XHRXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2Uuc2V0KHVpZCwgZGV2aWNlSWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYWNoZS5kZXZpY2UgPSBkZXZpY2VJZDtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gQWRkIG9uRGlzY29ubmVjdCBhY3Rpb25zXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHQvLyBEaXNjb25uZWN0IGRldmljZVxuXHRcdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9kZXZpY2VzLyR7dWlkfS8ke2RldmljZUlkfS9zdGF0dXNgKS5zZXQoTk9UX0NPTk5FQ1RFRCk7XG5cdFx0XHRcdFx0Ly8gVXBkYXRlIHVzZXIgc3RhdHVzXG5cdFx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGB1c2Vycy8ke3VpZH1gKS51cGRhdGUoe1xuXHRcdFx0XHRcdFx0c3RhdHVzOiBOT1RfQ09OTkVDVEVELFxuXHRcdFx0XHRcdFx0bGFzdFNlZW46IERhdGFTeW5jLnRzKClcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gR2V0IHVzZXJcblx0XHRcdFx0LnRoZW4oKCkgPT4gVXNlci5nZXQodWlkKSlcblx0XHRcdFx0LnRoZW4odXNlciA9PiB7XG5cdFx0XHRcdFx0aW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuIHVzZXI7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlID0+IHtcblx0XHRcdFx0XHRMb2cuZShlKTtcblx0XHRcdFx0XHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gVXNlci5nZXQodWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNjb25uZWN0IHRoZSBjdXJyZW50IHVzZXJcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtVc2VyfSB1aWQgVGhlIGN1cnJlbnQgdXNlclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHN0YXRpYyBkaXNjb25uZWN0KHVzZXIpIHtcblx0XHQvLyBDYW5jZWwgb25EaXNjb25uZWN0XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL2RldmljZXMvJHt1c2VyLnVpZH0vJHtjYWNoZS5kZXZpY2V9L3N0YXR1c2ApLmNhbmNlbCgpO1xuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgdXNlcnMvJHt1c2VyLnVpZH1gKS5jYW5jZWwoKTtcblxuXHRcdGlmKHVzZXIuYW5vbnltb3VzKSB7XG5cdFx0XHRyZXR1cm4gRGF0YVN5bmMucmVtb3ZlKGBfL2RldmljZXMvJHt1c2VyLnVpZH1gKVxuXHRcdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy5nZXQoYF8vaW52aXRlcy8ke3VzZXIudWlkfWApKVxuXHRcdFx0XHQudGhlbihpbnZpdGVzID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbnZpdGVJZHMgPSBbXTtcblx0XHRcdFx0XHRpbnZpdGVzLmZvckVhY2goaW52aXRlID0+IHtcblx0XHRcdFx0XHRcdGludml0ZUlkcy5wdXNoKGludml0ZS5uYW1lKCkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChpbnZpdGVJZHMubWFwKGludml0ZUlkID0+IERhdGFTeW5jLnJlbW92ZShgXy9pbnZpdGVzLyR7dXNlci51aWR9LyR7aW52aXRlSWR9YCkpKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gVE9ETyByZWZhY3RvciBkYXRhIG1vZGVsIGZvciBpbnZpdGVzIHNvIHdlIGNhbiBkZWxldGUgXy9pbnZpdGVzLyR7dXNlci51aWR9XG5cdFx0XHRcdC8vIC50aGVuKCgpID0+IERhdGFTeW5jLnJlbW92ZShgXy9pbnZpdGVzLyR7dXNlci51aWR9YCkpXG5cdFx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnJlbW92ZShgdXNlcnMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5yZW1vdmUodXNlci51aWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goTG9nLnIoJ1VzZXIjYW5vbnltb3VzX2Rpc2Nvbm5lY3QnKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5zZXQoYF8vZGV2aWNlcy8ke3VzZXIudWlkfS8ke2NhY2hlLmRldmljZX0vc3RhdHVzYCwgTk9UX0NPTk5FQ1RFRClcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLmdldChgXy9kZXZpY2VzLyR7dXNlci51aWR9YCkpXG5cdFx0XHQudGhlbihkZXZpY2VzID0+IHtcblx0XHRcdFx0Ly8gT25seSBjaGFuZ2UgdXNlcidzIHN0YXR1cyBpZiBubyBvdGhlciBkZXZpY2UgY29ubmVjdGVkXG5cdFx0XHRcdGNvbnN0IGhhc0Nvbm5lY3RlZERldmljZXMgPSBkZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKG5ldyBSZWdFeHAoYF4ke0NPTk5FQ1RFRH0kYCkpLnRlc3QoZGV2aWNlLnZhbCgpLnN0YXR1cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZighaGFzQ29ubmVjdGVkRGV2aWNlcykge1xuXHRcdFx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYHVzZXJzLyR7dXNlci51aWR9YCwge3N0YXR1czogTk9UX0NPTk5FQ1RFRH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignVXNlciNkaXNjb25uZWN0JykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHVzZXIgYnkgaXRzIHVpZFxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBUaGUgdXNlcidzIHVpZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0KHVpZCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYHVzZXJzLyR7dWlkfWApXG5cdFx0LnRoZW4oc25hcERhdGEgPT4gc25hcERhdGEgPyBuZXcgVXNlcihzbmFwRGF0YSkgOiBudWxsKVxuXHRcdC5jYXRjaChMb2cucignVXNlciNnZXQnKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1VzZXIuanMiLCIvKipcbiAqIFRoZSBhdmFpbGFibGUgc3RyZWFtIHR5cGVzXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTdHJlYW1UeXBlc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVRElPPSdhdWRpbycgLSBBdWRpbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWSURFTz0ndmlkZW8nIC0gVmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVVESU9fVklERU89J2F1ZGlvLXZpZGVvJyAtIEF1ZGlvIGFuZCB2aWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTQ1JFRU5fU0hBUklORz0nc2NyZWVuLXNoYXJpbmcnIC0gU2NyZWVuLXNoYXJpbmcgY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKi9cblxuLyoqXG4qIEF1ZGlvIGNvbW11bmljYXRpb24gc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IEFVRElPID0gJ2F1ZGlvJztcbi8qKlxuKiBWaWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBWSURFTyA9ICd2aWRlbyc7XG4vKipcbiogQXVkaW8gYW5kIHZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IEFVRElPX1ZJREVPID0gJ2F1ZGlvLXZpZGVvJztcbi8qKlxuKiBTY3JlZW4tc2hhcmluZyBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgU0NSRUVOX1NIQVJJTkcgPSAnc2NyZWVuLXNoYXJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7QVVESU8sIFZJREVPLCBBVURJT19WSURFTywgU0NSRUVOX1NIQVJJTkd9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL1N0cmVhbVR5cGVzLmpzIiwiaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcblxuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG4vKipcbiAqIEluc3RhbnQgTWVzc2FnZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG1lc3NhZ2Vcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxPYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByb29tSWQgVGhlIG1lc3NhZ2UncyByb29tIGlkXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSwgcm9vbUlkKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCkpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBtZXNzYWdlIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSBzbmFwRGF0YS5uYW1lKCk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJvb21JZCA9IHJvb21JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgbWVzc2FnZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50ZXh0ID0gdmFsdWVzLnRleHQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIG1lc3NhZ2Ugc2VuZGVyXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmZyb20gPSB2YWx1ZXMuZnJvbTtcblx0XHQvKipcblx0XHQgKiBKb2luZWQgZGF0ZVxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fY3JlYXRlZCA9IHZhbHVlcy5fY3JlYXRlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBFZGl0IHRoZSB0ZXh0IG1lc3NhZ2UuIE9ubHkgdGhlIHNlbmRlciBvciBtb2RlcmF0b3Ivb3duZXIgb2YgdGhlIHJvb20gY2FuIGVkaXQgYSBtZXNzYWdlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3VGV4dCBUaGUgbmV3IG1lc3NhZ2Vcblx0ICogQHJldHVybnMge1Byb21pc2U8TWVzc2FnZT59XG5cdCAqL1xuXHRlZGl0KG5ld1RleHQpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGAvcm9vbXMvJHt0aGlzLnJvb21JZH0vbWVzc2FnZXMvJHt0aGlzLnVpZH1gLCB7dGV4dDogbmV3VGV4dH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMudGV4dCA9IG5ld1RleHQ7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignTWVzc2FnZX5lZGl0JykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgdGV4dCBtZXNzYWdlLiBPbmx5IHRoZSBzZW5kZXIgb3IgbW9kZXJhdG9yL293bmVyIG9mIHRoZSByb29tIGNhbiByZW1vdmUgYSBtZXNzYWdlLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHJlbW92ZSgpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMucmVtb3ZlKGAvcm9vbXMvJHt0aGlzLnJvb21JZH0vbWVzc2FnZXMvJHt0aGlzLnVpZH1gKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZXNzYWdlfnJlbW92ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0ge1Jvb219IHJvb20gVGhlIHJvb20gdG8gc2VuZCB0aGUgbWVzc2FnZSB0b1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgbWVzc2FnZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2U+fVxuXHQgKi9cblx0c3RhdGljIHNlbmQocm9vbSwgdGV4dCkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3Qgc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIFJvb20gd2l0aG91dCBhIFVzZXIgYmVpbmcgbG9nZ2VkIGluLicpKTtcblx0XHR9XG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdGZyb206IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKCksXG5cdFx0XHR0ZXh0XG5cdFx0fTtcblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlc2AsIGRhdGEpXG5cdFx0XHQudGhlbihwdXNoUmVmID0+IERhdGFTeW5jLmdldChgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlcy8ke3B1c2hSZWYubmFtZSgpfWApKVxuXHRcdFx0LnRoZW4oc25hcERhdGEgPT4gbmV3IE1lc3NhZ2Uoc25hcERhdGEsIHJvb20udWlkKSlcblx0XHRcdC5jYXRjaChMb2cucignTWVzc2FnZSNzZW5kJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9NZXNzYWdlLmpzIiwiLyoqXG4gKiB7QGxpbmsgUm9vbX0gcGFydGljaXBhbnRcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljaXBhbnQge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgcGFydGljaXBhbnRcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxPYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBUaGUgcGFydGljaXBhbnQgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBUaGUgUGFydGljaXBhbnQncyByb2xlLiBDYW4gYmU6XG5cdFx0ICogLSBPV05FUjogdGhlIG93bmVyL2NyZWF0b3Igb2YgdGhlIHtAbGluayBSb29tfVxuXHRcdCAqIC0gTU9ERVJBVE9SOiBhIHBhcnRpY2lwYW50IHdpdGgge0BsaW5rIFJvb219IG1hbmFnZW1lbnQgUmlnaHRzXG5cdFx0ICogLSBOT05FOiBiYXNpYyBwYXJ0aWNpcGFudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb2xlID0gdmFsdWVzLnJvbGU7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHBhcnRpY2lwYW50IHN0YXR1cyBDYW4gYmU6XG5cdFx0ICogLSBOT1RfQ09OTkVDVEVEOiB0aGUgcGFydGljaXBhbnQgZGlkIG5vdCBhY2NlcHQgdGhlIGludml0YXRpb24geWV0IGFuZC9vciBkaWQgbm90IGpvaW4gdGhlIHtAbGluayBSb29tfSB5ZXRcblx0XHQgKiAtIENPTk5FQ1RFRDogdGhlIHBhcnRpY2lwYW50IGlzIGluIHRoZSB7QGxpbmsgUm9vbX1cblx0XHQgKiAtIFdBU19DT05ORUNURUQ6IHRoZSBwYXJ0aWNpcGFudCBsZWZ0IHRoZSB7QGxpbmsgUm9vbX1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblx0XHQvKipcblx0XHQgKiBKb2luZWQgZGF0ZVxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fam9pbmVkID0gdmFsdWVzLl9qb2luZWQ7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1BhcnRpY2lwYW50LmpzIiwiaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi4vdXRpbC9Mb2cnO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4uLy4uL2RlZmluaXRpb25zL0V2ZW50cyc7XG5cbi8qKlxuICogQSBwdWJsaXNoZWQgU3RyZWFtXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW90ZSB7XG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcblx0XHRMb2cuZCgnUmVtb3Rlfm5ldycsIHZhbHVlcyk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGUgcm9vbSB0aGUgc3RyZWFtIGlzIHB1Ymxpc2hlZCBpblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tSWQgPSB2YWx1ZXMucm9vbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhpcyBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoZSBwdWJsaXNoZXIgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5mcm9tID0gdmFsdWVzLmZyb207XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmRldmljZSA9IHZhbHVlcy5kZXZpY2U7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGxvY2FsIERPTSBjb250YWluZXIgZWxlbWVudCB3aGVyZSB0aGUge0BsaW5rIExvY2Fsfm1lZGlhfSBpcyBkaXNwbGF5ZWRcblx0XHQgKiBAdHlwZSB7RWxlbWVudH1cblx0XHQgKi9cblx0XHR0aGlzLmNvbnRhaW5lciA9IGNhY2hlLmNvbmZpZy5yZW1vdGVTdHJlYW1Db250YWluZXI7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3thdWRpbzogYm9vbGVhbiwgdmlkZW86IGJvb2xlYW59fVxuXHRcdCAqL1xuXHRcdHRoaXMubXV0ZWQgPSBPYmplY3QuYXNzaWduKHthdWRpbzogZmFsc2UsIHZpZGVvOiBmYWxzZX0sIHZhbHVlcy5tdXRlZCk7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBjYWxsYmFja3MgZm9yIG11dGUgc3RhdHVzIGNoYW5nZVxuXHRcdCAqIEB0eXBlIHt7TVVURTogZnVuY3Rpb25bXX19XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0XHQvKipcblx0XHQgKiBQZWVyQ29ubmVjdGlvbnMgYXNzb2NpYXRlZCB0byB0aGlzIHJlbW90ZSBzdHJlYW1cblx0XHQgKiBAdHlwZSB7UGVlckNvbm5lY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5wZWVyQ29ubmVjdGlvbiA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogRE9NIGVsZW1lbnQgd2hlcmUgdGhlIE1lZGlhU3RyZWFtIGlzIGRpc3BsYXllZFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH1cblx0ICovXG5cdGdldCBub2RlKCkge1xuXHRcdHJldHVybiB0aGlzLnBlZXJDb25uZWN0aW9uID8gdGhpcy5wZWVyQ29ubmVjdGlvbi5ub2RlIDogbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdWJzY3JpYmUgdG8gdGhlIHN0cmVhbVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IFtyZW1vdGVTdHJlYW1Db250YWluZXJdIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uIENhbiBiZSBudWxsIGlmIGFscmVhZHkgc3BlY2lmaWVkIGluIFJlYWNoQ29uZmlnLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHN1YnNjcmliZShyZW1vdGVTdHJlYW1Db250YWluZXIpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIHN1YnNjcmliZSB0byBhIFJvb21cXCdzIHN0cmVhbS4nKSk7XG5cdFx0fVxuXHRcdC8vIFRPRE86IFRlc3QgaWYgbm90IGFscmVhZHkgc3Vic2NyaWJlZCA/XG5cdFx0dGhpcy5jb250YWluZXIgPSByZW1vdGVTdHJlYW1Db250YWluZXIgfHwgY2FjaGUuY29uZmlnLnJlbW90ZVN0cmVhbUNvbnRhaW5lcjtcblx0XHRMb2cuZCgnUmVtb3RlfnN1YnNjcmliZScsIHRoaXMuY29udGFpbmVyKTtcblx0XHRyZXR1cm4gY2FjaGUucGVlckNvbm5lY3Rpb25zLmFuc3dlcih0aGlzLCB0aGlzLmNvbnRhaW5lcilcblx0XHRcdC50aGVuKHBjID0+IHt0aGlzLnBlZXJDb25uZWN0aW9uID0gcGM7fSlcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gLCB7XG5cdFx0XHRcdHRvOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKClcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdGxldCBzdWJzY3JpYmVkID0gZmFsc2U7XG5cdFx0XHRcdERhdGFTeW5jLm9uKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gLCAndmFsdWUnLCBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdFx0TG9nLmQoJ1JlbW90ZX51cGRhdGVkJywgdmFsdWVzKTtcblx0XHRcdFx0XHRpZih2YWx1ZXMpIHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSB0eXBlXG5cdFx0XHRcdFx0XHR0aGlzLnR5cGUgPSB2YWx1ZXMudHlwZTtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBtdXRlIHN0YXR1c1xuXHRcdFx0XHRcdFx0Y29uc3QgbXV0ZWQgPSB2YWx1ZXMubXV0ZWQ7XG5cdFx0XHRcdFx0XHRpZihtdXRlZCAmJiAobXV0ZWQuYXVkaW8gIT09IHRoaXMubXV0ZWQuYXVkaW8gfHwgbXV0ZWQudmlkZW8gIT09IHRoaXMubXV0ZWQudmlkZW8pKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubXV0ZWQgPSBtdXRlZDtcblx0XHRcdFx0XHRcdFx0TG9nLncodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uTVVURV0pO1xuXHRcdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uTVVURV0gfHwgW10pLmZvckVhY2goY2IgPT4gY2IodGhpcy5tdXRlZCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlZCA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKHN1YnNjcmliZWQpIHtcblx0XHRcdFx0XHRcdExvZy5pKCdSZW1vdGUjcmVtb3ZlZCcsIHRoaXMpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2xvc2UodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlbW90ZX5zdWJzY3JpYmUnKSk7XG5cdH1cblxuXHQvKipcblx0ICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgc3RyZWFtXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0dW5TdWJzY3JpYmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Nsb3NlKGZhbHNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZSB0aGUgcmVtb3RlIFN0cmVhbVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbW90ZSBDbG9zZSBpcyBpbml0aWF0ZWQgYnkgcHVibGlzaGVyXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2Nsb3NlKHJlbW90ZSkge1xuXHRcdC8vIENhbmNlbCBvbkRpc2Nvbm5lY3Rcblx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCkuY2FuY2VsKCk7XG5cdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgdG8gc3RyZWFtIG1vZGlmaWNhdGlvbnNcblx0XHREYXRhU3luYy5vZmYoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfWAsICd2YWx1ZScpO1xuXHRcdC8vIFVuLXN1YnNjcmliZVxuXHRcdCFyZW1vdGUgJiYgRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9LyR7Y2FjaGUuZGV2aWNlfWApO1xuXHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZS5wZWVyQ29ubmVjdGlvbnMuY2xvc2UodGhpcy51aWQsIHRoaXMuZGV2aWNlKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvU3RyZWFtfSlcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnRcblx0ICovXG5cdG9uKGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdGlmKEV2ZW50cy5zdHJlYW0uc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRpZighdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gW107XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lICh7QGxpbmsgRXZlbnRzL1N0cmVhbX0pXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnRcblx0ICovXG5cdG9mZihldmVudCwgY2FsbGJhY2spIHtcblx0XHRpZighZXZlbnQpIHtcblx0XHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHRcdH0gZWxzZSBpZihFdmVudHMuc3RyZWFtLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0aWYoIWNhbGxiYWNrKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdLmZpbHRlcihjYiA9PiBjYiAhPT0gY2FsbGJhY2spO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG5cdCAqL1xuXHR1cGRhdGUodmFsdWVzKSB7XG5cdFx0T2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0gdmFsdWVzW2tleV07fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9SZW1vdGUuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YnJvd3NlckRldGFpbHMsIGJyb3dzZXJTaGltfSBmcm9tICd3ZWJydGMtYWRhcHRlcic7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IGJyb3dzZXIncyBpbmZvc1xuICogQHR5cGVkZWYge09iamVjdH0gQnJvd3NlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgLSBjdXJyZW50IGJyb3dzZXIncyBuYW1lXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ZlcnNpb25dIC0gY3VycmVudCBicm93c2VyJ3MgdmVyc2lvblxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5WZXJzaW9uXSAtIGN1cnJlbnQgYnJvd3NlcidzIG1pbmltdW0gc3VwcG9ydGVkIHZlcnNpb25cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29tcGF0aWJsZSAtIGlzIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0ZWQgP1xuICovXG5leHBvcnQgY29uc3QgYnJvd3NlciA9IE9iamVjdC5hc3NpZ24oe1xuXHRjb21wYXRpYmxlOiAhL1xccy8udGVzdChicm93c2VyRGV0YWlscy5icm93c2VyKSAmJlxuXHRcdCghYnJvd3NlckRldGFpbHMubWluVmVyc2lvbiB8fCBicm93c2VyRGV0YWlscy52ZXJzaW9uID49IGJyb3dzZXJEZXRhaWxzLm1pblZlcnNpb24pXG59LCBicm93c2VyRGV0YWlscyk7XG5cbmNvbnN0IHZlcnNpb24gPSBgUmVhY2ggdiR7U0RLX1ZFUlNJT059IHwgU2NoZW1hICR7U0NIRU1BX1ZFUlNJT059IHwgV2ViY29tIHYke1dlYmNvbS5TREtfVkVSU0lPTn1gO1xubGV0IG1lc3NhZ2UgPSAnJztcbmlmKGJyb3dzZXIudmVyc2lvbiA9PT0gbnVsbCkge1xuXHRtZXNzYWdlID0gJ1Vuc3VwcG9ydGVkIGJyb3dzZXI6IGJyb3dzZXIgbXVzdCBzdXBwb3J0IFdlYlJUQyBQZWVyLXRvLXBlZXIgY29ubmVjdGlvbnMgdG8gdXNlIFJlYWNoJztcbn0gZWxzZSBpZiAoYnJvd3Nlci5taW5WZXJzaW9uICYmIGJyb3dzZXIubWluVmVyc2lvbiA+IGJyb3dzZXIudmVyc2lvbikge1xuXHRtZXNzYWdlID0gYFVuc3VwcG9ydGVkIGJyb3dzZXI6IGJyb3dzZXIgaXMgb3V0ZGF0ZWQsIHVwZGF0ZSB0byBsYXRlc3QgdmVyc2lvbiAoJHticm93c2VyLm1pblZlcnNpb259KylgO1xufSBlbHNlIGlmKCFicm93c2VyU2hpbSl7XG5cdG1lc3NhZ2UgPSAnTm8gc2hpbSBmb3IgeW91ciBicm93c2VyLiBUaGVyZSBtaWdodCBhIHByb2JsZW0gd2l0aCB5b3VyIHBhY2thZ2UuJztcbn1cblxuLy8gTG9nIGJyb3dzZXIgc3RhdHVzICYgU0RLcyB2ZXJzaW9ucyBvbiBsb2FkXG5sZXQgYXJncyA9IFtgJHt2ZXJzaW9ufSAke21lc3NhZ2V9YF07XG5pZigvXihjaHJvbWV8ZmlyZWZveCkkLy50ZXN0KGJyb3dzZXIuYnJvd3NlcikpIHtcblx0YXJncyA9IFtcblx0XHRgJWMgJHt2ZXJzaW9ufSAlYyAke21lc3NhZ2V9YCxcblx0XHRgYmFja2dyb3VuZDogJHticm93c2VyLmNvbXBhdGlibGUgPyAnI2Y1MCcgOiAncmVkJ307IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZGAsXG5cdFx0YGNvbG9yOiAke2Jyb3dzZXIuY29tcGF0aWJsZSA/ICdpbmhlcml0JyA6ICdyZWQnfWBcblx0XTtcbn1cbmNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0Jyb3dzZXIuanMiLCIvKipcbiAqIFZpZGVvIGNvZGVjIHByZXNldHMgdG8gdXNlIGZvclxuICogQHR5cGVkZWYge09iamVjdH0gQ29kZWMvdmlkZW9cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDggVlA4IGlzIHRoZSBvbmx5IHZpZGVvIGNvZGVjIG9mZmljaWFsbHkgc3VwcG9ydGVkIGJ5IFdlYlJUQ1xuICogQHByb3BlcnR5IHtSZWdFeHB9IFZQOSBWUDgncyBzdWNjZXNzb3IuXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSDI2NCBNUEVHLTQgcGFydCAxMC4gT25seSBGaXJlZm94LlxuICogQHByb3BlcnR5IHtSZWdFeHB9IFZQMTAgU3VpdGVkIGZvciBVSEQgdmlkZW8uIE5vIHN1cHBvcnQgeWV0XG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSDI2NSBILjI2NCdzIHN1Y2Nlc3Nvci4gTm8gc3VwcG9ydCB5ZXRcbiAqL1xuZXhwb3J0IGNvbnN0IHZpZGVvID0ge1xuXHQnVlA4JzogL152cDgvaSxcblx0J1ZQOSc6IC9ednA5L2ksXG5cdCdWUDEwJzogL152cDEwL2ksXG5cdCdIMjY0JzogL15oMjY0L2ksXG5cdCdIMjY1JzogL15oMjY1L2lcbn07XG5cbi8qKlxuICogQXVkaW8gY29kZWMgcHJlc2V0cyB0byB1c2UgZm9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDb2RlYy9hdWRpb1xuICogQHByb3BlcnR5IHtSZWdFeHB9IE9QVVMgT3B1cyBhdWRpbyBjb2RlYyB7QGxpbmsgaHR0cDovL29wdXMtY29kZWMub3JnL30uIE9ubHkgY2hvaWNlIGZvciBoaWdoLXF1YWxpdHkgYXVkaW8uXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gRzcyMiBHLjcyMiBhdWRpbyBjb2RlY1xuICogQHByb3BlcnR5IHtSZWdFeHB9IEc3MTEgRy43MTEgYXVkaW8gY29kZWNcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJU0FDIGlTQUMgYXVkaW8gY29kZWMuIEdvb2QgZm9yIHZvaWNlIGRhdGEsIGJ1dCBub3Qgc3VpdGFibGUgZm9yIGhpZ2gtcXVhbGl0eSBhdWRpbyBzdHJlYW1zLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IElTQUNfMTYgaVNBQyBhdWRpbyBjb2RlYyAoMTZrSHopXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSVNBQ18zMiBpU0FDIGF1ZGlvIGNvZGVjICgzMmtIeilcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJTEJDIGlMQkMgYXVkaW8gY29kZWMuIEZvciBiYWQgY2hhbm5lbHMgJiBsb3cgYmFuZHdpZHRoLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IElMQkMgaUxCQyBhdWRpbyBjb2RlYy4gRm9yIGJhZCBjaGFubmVscyAmIGxvdyBiYW5kd2lkdGguXG4gKi9cbmV4cG9ydCBjb25zdCBhdWRpbyA9IHtcblx0J09QVVMnOiAvXm9wdXMvaSxcblx0J0c3MjInOiAvXmc3MjIvaSxcblx0J0c3MTEnOiAvXmc3MTEvaSxcblx0J0lTQUMnOiAvXmlzYWMvaSxcblx0J0lTQUNfMTYnOiAvXmlzYWNcXC8xNjAwMC9pLFxuXHQnSVNBQ18zMic6IC9eaXNhY1xcLzMyMDAwL2ksXG5cdCdMU0FDJzogL15sc2FjL2lcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0NvZGVjLmpzIiwiaW1wb3J0IG1lZGlhIGZyb20gJy4vdXRpbC9NZWRpYSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5cbmNvbnN0IF9mbGF0dGVuU2VydmVycyA9IHNlcnZlcnMgPT4ge1xuXHRjb25zdCBfZXhwYW5kID0gc2VydmVycy5tYXAoc2VydmVyID0+IHtcblx0XHRjb25zdCB7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHMsIHVybH0gPSBzZXJ2ZXI7XG5cdFx0Y29uc3QgdXJpcyA9IHVybHMgfHwgdXJsO1xuXHRcdGlmKHR5cGVvZiB1cmlzICE9PSAnc3RyaW5nJyApIHtcblx0XHRcdHJldHVybiB1cmlzLm1hcCh1cmkgPT4gKHt1c2VybmFtZSwgY3JlZGVudGlhbCwgdXJsczogdXJpfSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gW3NlcnZlcl07XG5cdH0pO1xuXHRyZXR1cm4gW10uY29uY2F0KC4uLl9leHBhbmQpO1xufTtcblxuLyoqXG4gKiBUaGUgUmVhY2ggY29uZmlndXJhdGlvbiBvYmplY3RcbiAqIEBjbGFzcyBDb25maWdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBjb25maWd1cmF0aW9uXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSBvYmpcblx0ICovXG5cdGNvbnN0cnVjdG9yKG9iaikge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBkZWZhdWx0IG1lZGlhIGNvbnN0cmFpbnRzLiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB3aGVuIHN1YnNjcmliaW5nIHRvIGEgc3RyZWFtLlxuXHRcdCAqIEB0eXBlIHtNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfVxuXHRcdCAqL1xuXHRcdHRoaXMuY29uc3RyYWludHMgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGlkL2VsZW1lbnQgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGhvbGQgdGhlIGxvY2FsIHZpZGVvL2F1ZGlvIGVsZW1lbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfEVsZW1lbnR9XG5cdFx0ICovXG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNvbnRhaW5lciA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGlkL2VsZW1lbnQgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGhvbGQgdGhlIHJlbW90ZSB2aWRlby9hdWRpbyBlbGVtZW50XG5cdFx0ICogQHR5cGUge3N0cmluZ3xFbGVtZW50fVxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3RlU3RyZWFtQ29udGFpbmVyID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBwcmVmZXJyZWQgdmlkZW8gQ29kZWMuIFRha2VzIGEgUmVnRXhwIG1hdGNoaW5nIHRoZSBjb2RlYyBuYW1lIGFuZCBzYW1wbGUgcmF0ZS5cblx0XHQgKiBQcmVkZWZpbmVkIHZhbHVlcyBjYW4gYmUgZm91bmQgaW4ge0BsaW5rIENvZGVjL3ZpZGVvfVxuXHRcdCAqIEB0eXBlIHtSZWdFeHB9XG5cdFx0ICogQGV4YW1wbGUgPGNhcHRpb24+UHJlZmVyIFZQOTwvY2FwdGlvbj5cblx0XHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nLCB7XG5cdFx0ICogIHByZWZlcnJlZFZpZGVvQ29kZWM6IFJlYWNoLmNvZGVjcy52aWRlby5WUDlcblx0XHQgKiB9KTtcblx0XHQgKi9cblx0XHR0aGlzLnByZWZlcnJlZFZpZGVvQ29kZWMgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIHByZWZlcnJlZCBhdWRpbyBDb2RlYy4gVGFrZXMgYSBSZWdFeHAgbWF0Y2hpbmcgdGhlIGNvZGVjIG5hbWUgYW5kIHNhbXBsZSByYXRlLlxuXHRcdCAqIFByZWRlZmluZWQgdmFsdWVzIGNhbiBiZSBmb3VuZCBpbiB7QGxpbmsgQ29kZWMvYXVkaW99XG5cdFx0ICogQHR5cGUge1JlZ0V4cH1cblx0XHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5QcmVmZXIgb3B1czwvY2FwdGlvbj5cblx0XHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nLCB7XG5cdFx0ICogIHByZWZlcnJlZEF1ZGlvQ29kZWM6IFJlYWNoLmNvZGVjcy5hdWRpby5PUFVTXG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dGhpcy5wcmVmZXJyZWRBdWRpb0NvZGVjID0gbnVsbDtcblxuXHRcdC8vIFBvcHVsYXRlIHdpdGggZGVmYXVsdCB2YWx1ZXNcblx0XHR0aGlzLnJlc2V0KCk7XG5cblx0XHQvLyBQb3B1bGF0ZSB3aXRoIGRhdGFcblx0XHR0aGlzLmFzc2lnbihvYmopO1xuXG5cdFx0Ly8gUmVhZCBJQ0Ugc2VydmVycyBmcm9tIHNlcnZlclxuXHRcdERhdGFTeW5jLmdldCgnXy9pY2UnKS50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRcdGlmKHNuYXBEYXRhKSB7XG5cdFx0XHRcdHRoaXMuaWNlU2VydmVycyA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRMb2cuaSgnSUNFU2VydmVycycsIHRoaXMuaWNlU2VydmVycy5sZW5ndGggPiAwID8gdGhpcy5pY2VTZXJ2ZXJzIDogJ05vbmUnKTtcblx0XHRcdH1cblx0XHR9LCBlID0+IExvZy5kKCdJQ0VTZXJ2ZXJzJywgZSkpO1xuXG5cdFx0Ly8gVE9ETyAjRmVhdDogQWRkIGJvb2xlYW4gcHJvcCB0byByZXF1ZXN0IHBlcm1pc3Npb24gb24gc3RhcnQsIHNkcEVkaXRvciAoZm9yIHVzZXIgZGVmaW5lZCBTRFAgbW9kaWZpY2F0aW9ucylcblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NpZ24gbmV3IGNvbmYgdmFsdWVzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvYmogdGhlIG5ldyBjb25mIHZhbHVlc1xuXHQgKi9cblx0YXNzaWduKG9iaikge1xuXHRcdE9iamVjdC5rZXlzKG9iaiB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge3RoaXNba2V5XSA9IG9ialtrZXldO30pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHNldCBsb2dMZXZlbChsZXZlbCkge1xuXHRcdGNhY2hlLmxvZ0xldmVsID0gbGV2ZWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGxvZ0xldmVsKCkge1xuXHRcdHJldHVybiBjYWNoZS5sb2dMZXZlbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIFRVUk4vU1RVTiBzZXJ2ZXJzIHRvIHVzZSBmb3IgSUNFLiBUaGlzIGxpc3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgSUNFIHNlcnZlcnMgZGVjbGFyZWQgaW4gdGhlIG5hbWVzcGFjZSAoKipfL2ljZSoqKS5cblx0ICogQHR5cGUge0lDRVNlcnZlcltdfVxuXHQgKi9cblx0c2V0IGljZVNlcnZlcnMoc2VydmVycykge1xuXHRcdExvZy5kKCdDb25maWd+c2V0fmljZVNlcnZlcnMnLCBzZXJ2ZXJzKTtcblx0XHRpZihzZXJ2ZXJzKSB7XG5cdFx0XHRpZiAoIXRoaXMuX2ljZVNlcnZlcnMpIHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoaXMuX2ljZVNlcnZlcnMgPSBbXS5jb25jYXQoc2VydmVycyB8fCBbXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBmbGF0dGVuIGV4aXN0aW5nXG5cdFx0XHRcdGNvbnN0IF9jdXJyZW50U2VydmVycyA9IF9mbGF0dGVuU2VydmVycyh0aGlzLl9pY2VTZXJ2ZXJzKTtcblx0XHRcdFx0Ly8gZmxhdHRlbiBuZXdcblx0XHRcdFx0Y29uc3QgX25ld1NlcnZlcnMgPSBfZmxhdHRlblNlcnZlcnMoc2VydmVycyk7XG5cdFx0XHRcdC8vIEFkZCBvbmx5IHRoZSBtaXNzaW5nIHNlcnZlcnNcblx0XHRcdFx0X25ld1NlcnZlcnMuZm9yRWFjaChuZXdTZXJ2ZXIgPT4ge1xuXHRcdFx0XHRcdGlmKCFfY3VycmVudFNlcnZlcnMuc29tZShzZXJ2ZXIgPT5cblx0XHRcdFx0XHRcdFx0c2VydmVyLnVybHMgPT09IG5ld1NlcnZlci51cmxzICYmXG5cdFx0XHRcdFx0XHRcdHNlcnZlci51c2VybmFtZSA9PT0gbmV3U2VydmVyLnVzZXJuYW1lICYmXG5cdFx0XHRcdFx0XHRcdHNlcnZlci5jcmVkZW50aWFsID09PSBuZXdTZXJ2ZXIuY3JlZGVudGlhbCkpIHtcblx0XHRcdFx0XHRcdF9jdXJyZW50U2VydmVycy5wdXNoKG5ld1NlcnZlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gUmUtZ3JvdXAgYnkgdXNlcm5hbWUvY3JlZGVudGlhbFxuXHRcdFx0XHR0aGlzLl9pY2VTZXJ2ZXJzID0gX2N1cnJlbnRTZXJ2ZXJzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHN9ID0gY3VycmVudDtcblx0XHRcdFx0XHRjb25zdCBpZHggPSBwcmV2aW91cy5maW5kSW5kZXgocyA9PiBzLnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBzLmNyZWRlbnRpYWwgPT09IGNyZWRlbnRpYWwpO1xuXHRcdFx0XHRcdGlmKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1tpZHhdLnVybHMucHVzaCh1cmxzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHJldmlvdXMucHVzaCh7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHM6IFt1cmxzXX0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXM7XG5cdFx0XHRcdH0sIFtdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTGlzdCBvZiBUVVJOL1NUVU4gc2VydmVycyB0byB1c2UgZm9yIElDRS4gVGhpcyBsaXN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIElDRSBzZXJ2ZXJzIGRlY2xhcmVkIGluIHRoZSBuYW1lc3BhY2UgKCoqXy9pY2UqKikuXG5cdCAqIEB0eXBlIHtJQ0VTZXJ2ZXJbXX1cblx0ICovXG5cdGdldCBpY2VTZXJ2ZXJzKCkge1xuXHRcdHJldHVybiB0aGlzLl9pY2VTZXJ2ZXJzIHx8IFtcblx0XHRcdHtcblx0XHRcdFx0dXNlcm5hbWU6ICdhZG1pbicsXG5cdFx0XHRcdGNyZWRlbnRpYWw6ICd3ZWJjb20xMjM0Jyxcblx0XHRcdFx0dXJsczogW1xuXHRcdFx0XHRcdCd0dXJuczp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTo0NDMnLFxuXHRcdFx0XHRcdCd0dXJuOnR1cm4xLndlYmNvbS5vcmFuZ2UuY29tOjQ0Mz90cmFuc3BvcnQ9dGNwJyxcblx0XHRcdFx0XHQndHVybjp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTozNDc4P3RyYW5zcG9ydD10Y3AnXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc2V0cyBjb25maWd1cmF0aW9uIHRvIGRlZmF1bHQgdmFsdWVzXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdHJlc2V0ICgpIHtcblx0XHR0aGlzLmFzc2lnbih7XG5cdFx0XHRjb25zdHJhaW50czogbWVkaWEuY29uc3RyYWludHMoKSxcblx0XHRcdGxvZ0xldmVsOiAnRVJST1InXG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL0NvbmZpZy5qcyIsIi8qKlxuICogVXNlciBkZXZpY2VcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBkZXZpY2Vcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSBzdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBPU1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5vcyA9IHZhbHVlcy5vcztcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1c2VyQWdlbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudXNlckFnZW50ID0gdmFsdWVzLnVzZXJBZ2VudDtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBsYXN0IGtub3cgc3RhdHVzXG5cdFx0ICogLSBDT05ORUNURURcblx0XHQgKiAtIE5PVF9DT05ORUNURURcblx0XHQgKiAtIFNMRUVQSU5HXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3Mgc2RrXG5cdFx0ICogQHR5cGUge3tyZWFjaDogc3RyaW5nLCB3ZWJjb206IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5zZGsgPSB2YWx1ZXMuc2RrO1xuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCAnZXh0cmEnIHByb3BlcnR5IGZvciB1bnJlc3RyaWN0ZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiA/XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL0RldmljZS5qcyIsImltcG9ydCBTdHJlYW1UeXBlcyBmcm9tICcuLi8uLi9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi4vdXRpbC9Mb2cnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vdXRpbC9NZWRpYSc7XG5pbXBvcnQge05PTkUsIENMT1NFRCwgQ0xPU0lORywgQ09OTkVDVEVEfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5cbmNvbnN0IF9mYWNpbmdNb2RlcyA9IFtNZWRpYS5mYWNpbmdNb2RlLlVTRVIsIE1lZGlhLmZhY2luZ01vZGUuRU5WSVJPTk1FTlRdO1xuXG5jb25zdCBfZ2V0Q29uc3RyYWludFZhbHVlID0gKGNvbnN0cmFpbnRzLCBwcm9wKSA9PiB7XG5cdHJldHVybiBjb25zdHJhaW50c1twcm9wXS5leGFjdCB8fCBjb25zdHJhaW50c1twcm9wXS5pZGVhbCB8fCBjb25zdHJhaW50c1twcm9wXTtcbn07XG5cbmNvbnN0IF9zZXRDb25zdHJhaW5WYWx1ZSA9IChjb25zdHJhaW50cywgcHJvcCwgb3RoZXIsIHZhbHVlKSA9PiB7XG5cdGNvbnN0cmFpbnRzW3Byb3BdID0ge2V4YWN0OiB2YWx1ZX07XG5cdGRlbGV0ZSBjb25zdHJhaW50c1tvdGhlcl07XG59O1xuXG4vKipcbiAqIFRoZSBsb2NhbCBzdHJlYW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWwge1xuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzKSB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGUgcm9vbSB0aGUgc3RyZWFtIGlzIHB1Ymxpc2hlZCBpblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tSWQgPSB2YWx1ZXMucm9vbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhpcyBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdHlwZSBvZiB0aGUgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnR5cGUgPSB2YWx1ZXMudHlwZTtcblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgaWYgYSB0cmFjayBpcyBtdXRlZFxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IGJvb2xlYW4sIHZpZGVvOiBib29sZWFufX1cblx0XHQgKi9cblx0XHR0aGlzLm11dGVkID0gT2JqZWN0LmFzc2lnbih7YXVkaW86IGZhbHNlLCB2aWRlbzogZmFsc2V9LCB2YWx1ZXMubXV0ZWQpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBsb2NhbCBET00gY29udGFpbmVyIGVsZW1lbnQgd2hlcmUgdGhlIHtAbGluayBMb2NhbH5tZWRpYX0gaXMgZGlzcGxheWVkXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICovXG5cdFx0dGhpcy5jb250YWluZXIgPSB2YWx1ZXMuY29udGFpbmVyIHx8IGNhY2hlLmNvbmZpZy5sb2NhbFN0cmVhbUNvbnRhaW5lcjtcblx0XHQvKipcblx0XHQgKiBUaGUgbG9jYWwgRE9NIG1lZGlhIGVsZW1lbnQgd2hlcmUgdGhlIHtAbGluayBMb2NhbH5tZWRpYX0gaXMgZGlzcGxheWVkXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICovXG5cdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIHRoZSBQZWVyQ29ubmVjdGlvbnMgYXNzb2NpYXRlZCB0byB0aGlzIGxvY2FsIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtQZWVyQ29ubmVjdGlvbltdfVxuXHRcdCAqL1xuXHRcdHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgc3RyZWFtIHN0YXR1c1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSBOT05FO1xuXHRcdC8qKlxuXHRcdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IHN0cmluZywgdmlkZW86IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5faW5wdXRzID0ge307XG5cblx0XHQvLyBTZXQgY29uc3RyYWludHNcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gdmFsdWVzLmNvbnN0cmFpbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEBwYXJhbSB7TWVkaWFDb25zdHJhaW50c30gY29uc3RyYWludHNcblx0ICovXG5cdHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuXHRcdGNvbnN0XG5cdFx0XHR2YWx1ZXMgPSBjb25zdHJhaW50cyB8fCBjYWNoZS5jb25maWcuY29uc3RyYWludHMsXG5cdFx0XHRkZWZhdWx0Q29uc3RyYWludHMgPSBNZWRpYS5jb25zdHJhaW50cygpO1xuXHRcdFsnYXVkaW8nLCAndmlkZW8nXS5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0aWYoIX50aGlzLnR5cGUuaW5kZXhPZih0eXBlKSkge1xuXHRcdFx0XHR2YWx1ZXNbdHlwZV0gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZighdmFsdWVzW3R5cGVdKXtcblx0XHRcdFx0dmFsdWVzW3R5cGVdID0gZGVmYXVsdENvbnN0cmFpbnRzW3R5cGVdO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsdWVzW3R5cGVdLmRldmljZUlkIHx8IHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlKSB7XG5cdFx0XHRcdHRoaXMuX2lucHV0c1t0eXBlXSA9IF9nZXRDb25zdHJhaW50VmFsdWUoXG5cdFx0XHRcdFx0dmFsdWVzW3R5cGVdLFxuXHRcdFx0XHRcdHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlID8gJ2ZhY2luZ01vZGUnIDogJ2RldmljZUlkJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdExvZy5kKCdMb2NhbH5zZXQjY29udHJhaW50cycsIHZhbHVlcyk7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbnN0cmFpbnRzID0gdmFsdWVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEB0eXBlIHtNZWRpYUNvbnN0cmFpbnRzfVxuXHQgKi9cblx0Z2V0IGNvbnN0cmFpbnRzKCkge1xuXHRcdHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBzdHJlYW0gY29uc3RyYWludHMgYW5kIHJldHJpZXZlIHRoZSBuZXcgTWVkaWFTdHJlYW1cblx0ICogQHBhcmFtIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHsqfFByb21pc2UuPFRSZXN1bHQ+fVxuXHQgKi9cblx0dXBkYXRlQ29uc3RyYWludHMoY29uc3RyYWludHMpIHtcblx0XHRMb2cuZCgnTG9jYWx+dXBkYXRlQ29uc3RyYWludHMnLCBjb25zdHJhaW50cyk7XG5cdFx0dGhpcy5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh0aGlzLmNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4obWVkaWEgPT4ge1xuXHRcdFx0XHRbJ2F1ZGlvJywgJ3ZpZGVvJ10uZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRjb25zdCBjb25zdHJhaW50c1ZhbHVlID0gdGhpcy5jb25zdHJhaW50c1traW5kXTtcblx0XHRcdFx0XHRpZihjb25zdHJhaW50c1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29uc3RyYWludHNWYWx1ZS5kZXZpY2VJZCB8fCBjb25zdHJhaW50c1ZhbHVlLmZhY2luZ01vZGUpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gX2dldENvbnN0cmFpbnRWYWx1ZShcblx0XHRcdFx0XHRcdFx0XHRjb25zdHJhaW50c1ZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0cmFpbnRzVmFsdWUuZmFjaW5nTW9kZSA/ICdmYWNpbmdNb2RlJyA6ICdkZXZpY2VJZCdcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLm1lZGlhID0gbWVkaWE7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYXNzb2NpYXRlZCBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRzZXQgbWVkaWEgKG1lZGlhU3RyZWFtKSB7XG5cdFx0aWYobWVkaWFTdHJlYW0pIHtcblx0XHRcdGlmKCEobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbWVkaWEgTVVTVCBiZSBhIE1lZGlhU3RyZWFtJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNoZWNrRGV2aWNlcyA9IHt9O1xuXHRcdFx0bWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB7XG5cdFx0XHRcdC8vIFJlc2V0IG11dGVcblx0XHRcdFx0dHJhY2suZW5hYmxlZCA9ICF0aGlzLm11dGVkW3RyYWNrLmtpbmRdO1xuXHRcdFx0XHQvLyBHZXQgZGV2aWNlIGxhYmVsXG5cdFx0XHRcdGlmKCF0aGlzLl9pbnB1dHNbdHJhY2sua2luZF0pIHtcblx0XHRcdFx0XHRjaGVja0RldmljZXNbdHJhY2sua2luZF0gPSB0cmFjay5sYWJlbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBUcnkgdG8gZ2V0IGRldmljZUlkIGZyb20gbGFiZWxcblx0XHRcdGlmKE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykubGVuZ3RoKSB7XG5cdFx0XHRcdE1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykuZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRcdGlmKGRldmljZXNbYCR7a2luZH1pbnB1dGBdKXtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGV2aWNlSWRzID0gZGV2aWNlc1tgJHtraW5kfWlucHV0YF1cblx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UubGFiZWwubGVuZ3RoICYmIGRldmljZS5sYWJlbCA9PT0gY2hlY2tEZXZpY2VzW2tpbmRdKTtcblx0XHRcdFx0XHRcdFx0aWYoZGV2aWNlSWRzLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy5faW5wdXRzW2tpbmRdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gZGV2aWNlSWRzWzBdLmRldmljZUlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGlzcGxheVxuXHRcdFx0dGhpcy5ub2RlID0gTWVkaWEuYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5ub2RlLCAwKTtcblx0XHRcdHRoaXMuc3RhdHVzID0gQ09OTkVDVEVEO1xuXHRcdFx0TG9nLmQoJ0xvY2FsfnNldCBtZWRpYScsIG1lZGlhU3RyZWFtLCB0aGlzLm5vZGUpO1xuXHRcdFx0Ly8gUmVuZWdvdGlhdGVcblx0XHRcdHRoaXMucGVlckNvbm5lY3Rpb25zLmZvckVhY2gocGVlckNvbm5lY3Rpb24gPT4gcGVlckNvbm5lY3Rpb24ucmVuZWdvdGlhdGUodGhpcy5fbWVkaWEsIG1lZGlhU3RyZWFtKSk7XG5cdFx0fSBlbHNlIGlmKHRoaXMubWVkaWEgJiYgIW1lZGlhU3RyZWFtKSB7XG5cdFx0XHQvLyBSZW1vdmUgbm9kZVxuXHRcdFx0dGhpcy5ub2RlLnNyY09iamVjdCA9IG51bGw7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHRcdC8vIFN0b3Agc3RyZWFtXG5cdFx0XHR0aGlzLm1lZGlhLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcblx0XHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uc1xuXHRcdFx0dGhpcy5wZWVyQ29ubmVjdGlvbnMuZm9yRWFjaChwZWVyQ29ubmVjdGlvbiA9PiBwZWVyQ29ubmVjdGlvbi5jbG9zZSgpKTtcblx0XHR9XG5cdFx0Ly8gU2F2ZVxuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9tZWRpYSA9IG1lZGlhU3RyZWFtO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBhc3NvY2lhdGVkIE1lZGlhU3RyZWFtXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdGdldCBtZWRpYSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21lZGlhO1xuXHR9XG5cblx0LyoqXG5cdCAqIE11dGUgYSB0cmFjayBvZiBhIFN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3RyYWNrPUFVRElPXSBUaGUgdHJhY2sgdG8gbXV0ZS4gKEFVRElPLCBWSURFTywgQVVESU9fVklERU8pXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXRlPXRydWVdIHRydWUgZm9yIG11dGUgJiBmYWxzZSBmb3IgdW4tbXV0ZVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5tdXRlIHZpZGVvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0ubXV0ZShSZWFjaC50LlZJREVPKVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5tdXRlIGF1ZGlvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0ubXV0ZShSZWFjaC50LkFVRElPKVxuXHQgKiAvLyBvclxuXHQgKiBzdHJlYW0ubXV0ZSgpXG5cdCAqL1xuXHRtdXRlKHRyYWNrID0gU3RyZWFtVHlwZXMuQVVESU8sIHN0YXRlID0gdHJ1ZSkge1xuXHRcdExvZy5kKCdtdXRlJywgdHJhY2ssIHN0YXRlKTtcblx0XHRsZXQgYXVkaW8gPSB0aGlzLm11dGVkLmF1ZGlvLCB2aWRlbyA9IHRoaXMubXV0ZWQudmlkZW8sIHRyYWNrcztcblx0XHRzd2l0Y2ggKHRyYWNrKSB7XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLkFVRElPOlxuXHRcdFx0XHRhdWRpbyA9IHN0YXRlO1xuXHRcdFx0XHR0cmFja3MgPSB0aGlzLm1lZGlhLmdldEF1ZGlvVHJhY2tzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5WSURFTzpcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuU0NSRUVOX1NIQVJJTkc6XG5cdFx0XHRcdHZpZGVvID0gc3RhdGU7XG5cdFx0XHRcdHRyYWNrcyA9IHRoaXMubWVkaWEuZ2V0VmlkZW9UcmFja3MoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLkFVRElPX1ZJREVPOlxuXHRcdFx0XHRhdWRpbyA9IHN0YXRlO1xuXHRcdFx0XHR2aWRlbyA9IHN0YXRlO1xuXHRcdFx0XHR0cmFja3MgPSB0aGlzLm1lZGlhLmdldFRyYWNrcygpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly8gTXV0ZSBtZWRpYSB0cmFja3Ncblx0XHR0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB7dHJhY2suZW5hYmxlZCA9ICFzdGF0ZTt9KTtcblx0XHQvLyBTaWduYWwgc3Vic2NyaWJlcnNcblx0XHR0aGlzLm11dGVkID0ge2F1ZGlvLCB2aWRlb307XG5cdFx0RGF0YVN5bmMuc2V0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH0vbXV0ZWRgLCB0aGlzLm11dGVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbi1tdXRlIGEgdHJhY2sgb2YgYSBTdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0cmFjaz1BVURJT10gVGhlIHRyYWNrIHRvIG11dGUuIChBVURJTywgVklERU8sIEFVRElPX1ZJREVPKVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Vbi1tdXRlIHZpZGVvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0udW5NdXRlKFJlYWNoLnQuVklERU8pXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPlVuLW11dGUgYXVkaW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS51bk11dGUoUmVhY2gudC5BVURJTylcblx0ICogLy8gb3Jcblx0ICogc3RyZWFtLnVuTXV0ZSgpXG5cdCAqL1xuXHR1bk11dGUodHJhY2spIHtcblx0XHR0aGlzLm11dGUodHJhY2ssIGZhbHNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIHN0cmVhbSBmb3IgcHVibGlzaGVkIGxpc3QsIGNsb3NlcyBhc3NvY2lhdGVkIFBlZXJDb25uZWN0aW9ucyBhbmQgc3RvcHMgY3VycmVudCBNZWRpYVN0cmVhbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNsb3NlKCkge1xuXHRcdGlmKCF+W0NMT1NFRCwgQ0xPU0lOR10uaW5kZXhPZih0aGlzLnN0YXR1cykpIHtcblx0XHRcdHRoaXMuc3RhdHVzID0gQ0xPU0lORztcblx0XHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIFN1YnNjcmliZXJzXG5cdFx0XHRjb25zdCBwYXRoID0gYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH1gO1xuXHRcdFx0RGF0YVN5bmMub2ZmKHBhdGgsICdjaGlsZF9hZGRlZCcpO1xuXHRcdFx0RGF0YVN5bmMub2ZmKHBhdGgsICdjaGlsZF9yZW1vdmVkJyk7XG5cdFx0XHQvLyBDYW5jZWwgb25EaXNjb25uZWN0c1xuXHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gKS5jYW5jZWwoKTtcblx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfWApLmNhbmNlbCgpO1xuXHRcdFx0Ly8gUmVtb3ZlIHN1YnNjcmliZXJzXG5cdFx0XHREYXRhU3luYy5yZW1vdmUocGF0aCk7XG5cdFx0XHQvLyBSZW1vdmUgc3RyZWFtXG5cdFx0XHREYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfWApO1xuXHRcdFx0dGhpcy5tZWRpYSA9IG51bGw7XG5cdFx0XHQvLyBDbG9zZVxuXHRcdFx0dGhpcy5zdGF0dXMgPSBDTE9TRUQ7XG5cdFx0fVxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdGF0dXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN3aXRjaCB2aWRlbyBpbnB1dCBkZXZpY2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtkZXZpY2VJZF0gQSB2aWRlbyBpbnB1dCBkZXZpY2UgSWQgb3IgdGhlIGBmYWNpbmdNb2RlYCB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c3dpdGNoQ2FtZXJhKGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N3aXRjaERldmljZShTdHJlYW1UeXBlcy5WSURFTywgZGV2aWNlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN3aXRjaCBhdWRpbyBpbnB1dCBkZXZpY2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtkZXZpY2VJZF0gQSBhdWRpbyBpbnB1dCBkZXZpY2UgSWRcblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHN3aXRjaE1pY3JvcGhvbmUoZGV2aWNlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3dpdGNoRGV2aWNlKFN0cmVhbVR5cGVzLkFVRElPLCBkZXZpY2VJZCk7XG5cdH1cblxuXHQvKipcblx0ICogU3dpdGNoIGlucHV0IGRldmljZVxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtpbmQgVGhlIGtpbmQgb2YgZGV2aWNlIHRvIHN3aXRjaFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2RldmljZUlkXSBBbiBpbnB1dCBkZXZpY2UgaWRcblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cbiAgICAgKi9cblx0X3N3aXRjaERldmljZShraW5kLCBkZXZpY2VJZCkge1xuXHRcdExvZy5kKCdMb2NhbH5fc3dpdGNoRGV2aWNlJywga2luZCwgZGV2aWNlSWQpO1xuXHRcdGlmKHRoaXMubWVkaWEuZ2V0VHJhY2tzKCkuc29tZSh0cmFjayA9PiB0cmFjay5raW5kID09PSBraW5kKSkge1xuXHRcdFx0bGV0IG5leHQgPSBQcm9taXNlLnJlc29sdmUoZGV2aWNlSWQpO1xuXHRcdFx0Y29uc3QgY3VycmVudE1vZGVJZHggPSBfZmFjaW5nTW9kZXMuaW5kZXhPZih0aGlzLl9pbnB1dHNba2luZF0pO1xuXHRcdFx0aWYoIWRldmljZUlkICYmICEhfmN1cnJlbnRNb2RlSWR4KSB7XG5cdFx0XHRcdC8vIExvb3AgZmFjaW5nTW9kZXNcblx0XHRcdFx0bmV4dCA9IFByb21pc2UucmVzb2x2ZShfZmFjaW5nTW9kZXNbKGN1cnJlbnRNb2RlSWR4ICsgMSkgJSBfZmFjaW5nTW9kZXMubGVuZ3RoXSk7XG5cdFx0XHR9IGVsc2UgaWYoIX5fZmFjaW5nTW9kZXMuaW5kZXhPZihkZXZpY2VJZCkpIHtcblx0XHRcdFx0Ly8gTG9vcCBkZXZpY2VJZHNcblx0XHRcdFx0bmV4dCA9IE1lZGlhLmRldmljZXMoKVxuXHRcdFx0XHRcdC50aGVuKGQgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gZGV2aWNlcyBJRHNcblx0XHRcdFx0XHRcdGNvbnN0IGRldmljZXMgPSBkW2Ake2tpbmR9aW5wdXRgXS5tYXAobWVkaWFEZXZpY2UgPT4gbWVkaWFEZXZpY2UuZGV2aWNlSWQpO1xuXHRcdFx0XHRcdFx0Ly8gU29ydCB0byBlbnN1cmUgc2FtZSBvcmRlclxuXHRcdFx0XHRcdFx0ZGV2aWNlcy5zb3J0KCk7XG5cdFx0XHRcdFx0XHQvLyBOZXcgZGV2aWNlXG5cdFx0XHRcdFx0XHRsZXQgbmV4dERldmljZSA9IGRldmljZUlkO1xuXHRcdFx0XHRcdFx0aWYoZGV2aWNlSWQgJiYgIWRldmljZXMuc29tZShkZXZpY2UgPT4gZGV2aWNlID09PSBkZXZpY2VJZCkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgVW5rbm93biAke2tpbmR9IGRldmljZWApKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKCFkZXZpY2VJZCAmJiBkZXZpY2VzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IGlkeCA9IHRoaXMuX2lucHV0c1traW5kXSA/IGRldmljZXMuZmluZEluZGV4KHYgPT4gdiA9PT0gdGhpcy5faW5wdXRzW2tpbmRdLCB0aGlzKSA6IDA7XG5cdFx0XHRcdFx0XHRcdG5leHREZXZpY2UgPSBkZXZpY2VzWysraWR4ICUgZGV2aWNlcy5sZW5ndGhdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIG5leHREZXZpY2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXh0ID0gUHJvbWlzZS5yZXNvbHZlKGRldmljZUlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5leHRcblx0XHRcdFx0LnRoZW4oZGV2aWNlID0+IHtcblx0XHRcdFx0XHRpZih0aGlzLl9pbnB1dHNba2luZF0gIT09IGRldmljZSkge1xuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIHZpZGVvIHN0cmVhbXNcblx0XHRcdFx0XHRcdHRoaXMuX2lucHV0c1traW5kXSA9IGRldmljZTtcblx0XHRcdFx0XHRcdC8vIFN0b3AgdHJhY2tzXG5cdFx0XHRcdFx0XHR0aGlzLm1lZGlhLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBjb25zdHJhaW50c1xuXHRcdFx0XHRcdFx0Y29uc3QgY29uc3RyYWludHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnN0cmFpbnRzKTtcblx0XHRcdFx0XHRcdGxldCBwcm9wcyA9IFsnZmFjaW5nTW9kZScsICdkZXZpY2VJZCddO1xuXHRcdFx0XHRcdFx0aWYoIX5fZmFjaW5nTW9kZXMuaW5kZXhPZihkZXZpY2UpKSB7XG5cdFx0XHRcdFx0XHRcdHByb3BzID0gcHJvcHMucmV2ZXJzZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0X3NldENvbnN0cmFpblZhbHVlKGNvbnN0cmFpbnRzW2tpbmRdLCBwcm9wc1swXSwgcHJvcHNbMV0sIGRldmljZSk7XG5cdFx0XHRcdFx0XHRMb2cuZCgnTG9jYWx+X3N3aXRjaERldmljZScsIGtpbmQsIGNvbnN0cmFpbnRzKTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnVwZGF0ZUNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCgpID0+IHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBDdXJyZW50IHN0cmVhbSBkb2VzIG5vdCBjb250YWluIGEgJHtraW5kfSB0cmFja2ApKTtcblx0fVxuXHQvKipcblx0ICogUHVibGlzaCBhIGxvY2FsIHN0cmVhbVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcm9vbUlkIFRoZSByb29tIElkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSBzdHJlYW0gdHlwZSwgc2VlIHtAbGluayBTdHJlYW1UeXBlc30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuXHQgKiBAcGFyYW0gez9FbGVtZW50fSBjb250YWluZXIgVGhlIGVsZW1lbnQgdGhlIHN0cmVhbSBpcyBhdHRhY2hlZCB0by5cblx0ICogQHBhcmFtIHs/TWVkaWFTdHJlYW1Db25zdHJhaW50c30gW2NvbnN0cmFpbnRzXSBUaGUgc3RyZWFtIGNvbnN0cmFpbnRzLiBJZiBub3QgZGVmaW5lZCB0aGUgY29uc3RyYWludHMgZGVmaW5lZCBpbiBSZWFjaENvbmZpZyB3aWxsIGJlIHVzZWQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgc2hhcmUocm9vbUlkLCB0eXBlLCBjb250YWluZXIsIGNvbnN0cmFpbnRzKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzaGFyZSBhIHN0cmVhbS4nKSk7XG5cdFx0fVxuXHRcdGNvbnN0IHN0cmVhbU1ldGFEYXRhID0ge1xuXHRcdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdFx0ZGV2aWNlOiBjYWNoZS5kZXZpY2UsXG5cdFx0XHRcdHR5cGVcblx0XHRcdH0sXG5cdFx0XHRzaGFyZWRTdHJlYW0gPSBuZXcgTG9jYWwoT2JqZWN0LmFzc2lnbih7cm9vbUlkLCBjb25zdHJhaW50cywgY29udGFpbmVyfSwgc3RyZWFtTWV0YURhdGEpKTtcblx0XHRMb2cuZCgnTG9jYWx+c2hhcmUnLCBzaGFyZWRTdHJlYW0sIHNoYXJlZFN0cmVhbS5jb25zdHJhaW50cyk7XG5cdFx0cmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHNoYXJlZFN0cmVhbS5jb25zdHJhaW50cylcblx0XHRcdC50aGVuKG1lZGlhID0+IHtzaGFyZWRTdHJlYW0ubWVkaWEgPSBtZWRpYTt9KVxuXHRcdFx0Ly8gR290IE1lZGlhU3RyZWFtLCBwdWJsaXNoIGl0XG5cdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy5wdXNoKGBfL3Jvb21zLyR7cm9vbUlkfS9zdHJlYW1zYCwgc3RyZWFtTWV0YURhdGEpKVxuXHRcdFx0LnRoZW4oc3RyZWFtUmVmID0+IHtcblx0XHRcdFx0c2hhcmVkU3RyZWFtLnVpZCA9IHN0cmVhbVJlZi5uYW1lKCk7XG5cdFx0XHRcdC8vIFNhdmUgc2hhcmVkU3RyZWFtXG5cdFx0XHRcdGNhY2hlLnN0cmVhbXMuc2hhcmVkW3NoYXJlZFN0cmVhbS51aWRdID0gc2hhcmVkU3RyZWFtO1xuXHRcdFx0XHQvLyBSZW1vdmUgc2hhcmVkIHN0cmVhbSBvbiBEaXNjb25uZWN0XG5cdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtcy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdWJzY3JpYmVycy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byBzdWJzY3JpYmVyc1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHBhdGggPSBgXy9yb29tcy8ke3NoYXJlZFN0cmVhbS5yb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gLFxuXHRcdFx0XHRcdHZhbHVlID0gc25hcERhdGEgPT4gT2JqZWN0LmFzc2lnbih7ZGV2aWNlOiBzbmFwRGF0YS5uYW1lKCl9LCBzbmFwRGF0YS52YWwoKSB8fCB7fSk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9hZGRlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH5zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjYWNoZS5wZWVyQ29ubmVjdGlvbnMub2ZmZXIoc2hhcmVkU3RyZWFtLCBzdWJzY3JpYmVyKVxuXHRcdFx0XHRcdFx0XHQudGhlbihwYyA9PiBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLnB1c2gocGMpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHREYXRhU3luYy5vbihwYXRoLCAnY2hpbGRfcmVtb3ZlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH51bi1zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjb25zdCBjbG9zZWRQQyA9IGNhY2hlLnBlZXJDb25uZWN0aW9ucy5jbG9zZShzaGFyZWRTdHJlYW0udWlkLCBzdWJzY3JpYmVyLmRldmljZSk7XG5cdFx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zID0gc2hhcmVkU3RyZWFtLnBlZXJDb25uZWN0aW9ucy5maWx0ZXIocGMgPT4gcGMgIT09IGNsb3NlZFBDKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRMb2cuZCgnTG9jYWx+c2hhcmVkJywgc2hhcmVkU3RyZWFtKTtcblx0XHRcdFx0cmV0dXJuIHNoYXJlZFN0cmVhbTtcblx0XHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9zdHJlYW0vTG9jYWwuanMiLCJpbXBvcnQgUmVtb3RlIGZyb20gJy4vUmVtb3RlJztcblxuLyoqXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJlYW1NYW5hZ2VyIHtcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvKipcblx0XHQgKiBTaGFyZWQgbG9jYWwgc3RyZWFtc1xuXHRcdCAqIEB0eXBlIHt7KjogTG9jYWx9fVxuXHRcdCAqL1xuXHRcdHRoaXMuc2hhcmVkID0ge307XG5cdFx0LyoqXG5cdFx0ICogU3Vic2NyaWJlZCByZW1vdGUgc3RyZWFtc1xuXHRcdCAqIEB0eXBlIHt7KjogUmVtb3RlfX1cblx0XHQgKi9cblx0XHR0aGlzLnJlbW90ZSA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIFJlbW90ZSBzdHJlYW0gcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzdHJlYW1EYXRhXG5cdCAqIEByZXR1cm5zIHtSZW1vdGV9XG5cdCAqL1xuXHRnZXRSZW1vdGUoc3RyZWFtRGF0YSkge1xuXHRcdGxldCByZW1vdGVTdHJlYW0gPSB0aGlzLnJlbW90ZVtzdHJlYW1EYXRhLnVpZF07XG5cdFx0aWYocmVtb3RlU3RyZWFtKSB7XG5cdFx0XHRyZW1vdGVTdHJlYW0udXBkYXRlKHN0cmVhbURhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW90ZVtzdHJlYW1EYXRhLnVpZF0gPSByZW1vdGVTdHJlYW0gPSBuZXcgUmVtb3RlKHN0cmVhbURhdGEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVtb3RlU3RyZWFtO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIFJlbW90ZSBzdHJlYW0gcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzdHJlYW1EYXRhXG5cdCAqIEByZXR1cm5zIHtSZW1vdGV9XG5cdCAqL1xuXHRnZXRTaGFyZWQoc3RyZWFtRGF0YSkge1xuXHRcdC8vIFRPRE86IElmIGl0IGRvZXMgbm90IGV4aXN0cyBsb2NhbGx5IGFzIGl0IHNob3VsZCwgbWF5YmUgd2Ugc2hvdWxkIHJlbW92ZSBpdCA/XG5cdFx0cmV0dXJuIHRoaXMuc2hhcmVkW3N0cmVhbURhdGEudWlkXTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9zdHJlYW0vU3RyZWFtTWFuYWdlci5qcyIsIi8qZ2xvYmFsIFJUQ1BlZXJDb25uZWN0aW9uKi9cbmltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuLi91dGlsL0xvZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vdXRpbC9NZWRpYSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCB7T1BFTkVELCBDTE9TSU5HLCBDTE9TRUR9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAnY29yZS1qcy9mbi9hcnJheS9maW5kJztcblxuY29uc3QgRHRsc1NydHBLZXlBZ3JlZW1lbnQgPSB7RHRsc1NydHBLZXlBZ3JlZW1lbnQ6IHRydWV9O1xuY29uc3Qgc2RwQ29uc3RyYWludHMgPSByZWNlaXZlID0+ICh7T2ZmZXJUb1JlY2VpdmVBdWRpbzogcmVjZWl2ZSwgT2ZmZXJUb1JlY2VpdmVWaWRlbzogcmVjZWl2ZX0pO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBkaXNjb25uZWN0ZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEID0gJ2Rpc2Nvbm5lY3RlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNvbm5lY3RlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT05ORUNURUQ9ICdjb25uZWN0ZWQnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBjb21wbGV0ZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEID0gJ2NvbXBsZXRlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNoZWNraW5nXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HID0gJ2NoZWNraW5nJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2xvc2VkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRCA9ICdjbG9zZWQnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBmYWlsZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRkFJTEVEID0gJ2ZhaWxlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGFub3RoZXIgc3RhdHVzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX09USEVSPSAnb3RoZXInO1xuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmNvbnN0IF90b0pTT04gPSBvID0+IG8udG9KU09OICYmIHR5cGVvZiBvLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyA/IG8udG9KU09OKCkgOiBvO1xuLyoqXG4gKiBUaGUgUGVlckNvbm5lY3Rpb24uIEEgUGVlckNvbm5lY3Rpb24gd2lsbCBvbmx5IGNvbmNlcm4gb25lIE1lZGlhU3RyZWFtLlxuICogQGNsYXNzIFBlZXJDb25uZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uIHtcblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGFja0lkIFRoZSBXZWJSVEMgc3RhY2sgSURcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmVhbUlkIFRoZSBTdHJlYW0gVUlEXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVEZXZpY2UgVGhlIHJlbW90ZSBkZXZpY2UncyBVSURcblx0ICogQHBhcmFtIHtib29sZWFufSBwdWJsaXNoIFB1Ymxpc2ggb3IgU3Vic2NyaWJlID9cblx0ICovXG5cdGNvbnN0cnVjdG9yKHN0YWNrSWQsIHN0cmVhbUlkLCByZW1vdGVEZXZpY2UsIHB1Ymxpc2gpIHtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RhY2sgaWRlbnRpZmllci4gVXNlZCB0byBpZGVudGlmeSBleGNoYW5nZXMgYmV0d2VlbiAyIGRldmljZXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhY2tJZCA9IHN0YWNrSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHN0cmVhbSBpZC4gKE9uZSBzdHJlYW0gcGVyIFJUQ1BlZXJDb25uZWN0aW9uKVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdHJlYW1JZCA9IHN0cmVhbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByZW1vdGUgZGV2aWNlIElkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJlbW90ZURldmljZSA9IHJlbW90ZURldmljZTtcblx0XHQvKipcblx0XHQgKiBQYXRoIGZvciBsb2NhbCBzaWduYWxpemF0aW9uXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLl9sb2NhbFBhdGggPSBgXy93ZWJydGMvJHt0aGlzLnN0YWNrSWR9LyR7dGhpcy5zdHJlYW1JZH0vJHtjYWNoZS5kZXZpY2V9YDtcblx0XHQvKipcblx0XHQgKiBQYXRoIGZvciBsb2NhbCBzaWduYWxpemF0aW9uXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLl9yZW1vdGVQYXRoID0gYF8vd2VicnRjLyR7dGhpcy5zdGFja0lkfS8ke3RoaXMuc3RyZWFtSWR9LyR7dGhpcy5yZW1vdGVEZXZpY2V9YDtcblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgaWYgdGhlIFBlZXJDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkLiAoVXNlZnVsIGZvciByZW5lZ290aWF0aW9uKS5cblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLm5lZ290aWF0ZWQgPSBmYWxzZTtcblx0XHQvKipcblx0XHQgKiBUaGUgRE9NIGVsZW1lbnQgd2hlcmUgdGhlIHJlbW90ZSBNZWRpYVN0cmVhbSB3aWxsIGJlIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLm5vZGUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBET00gZWxlbWVudCBjb250YWluZyB0aGUgbWVkaWEgZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGFjdHVhbCBSVENQZWVyQ29ubmVjdGlvblxuXHRcdCAqIEB0eXBlIHtSVENQZWVyQ29ubmVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLnBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHRpY2VTZXJ2ZXJzOiBjYWNoZS5jb25maWcuaWNlU2VydmVyc1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3B0aW9uYWw6IFtEdGxzU3J0cEtleUFncmVlbWVudF0sXG5cdFx0XHRcdG1hbmRhdG9yeTogc2RwQ29uc3RyYWludHMoIXB1Ymxpc2gpXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQvLyBIYW5kbGUgSUNFIGNhbmRpZGF0ZXNcblx0XHR0aGlzLnBjLm9uaWNlY2FuZGlkYXRlID0gZSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMubmVnb3RpYXRlZCAmJiBlLmNhbmRpZGF0ZSkge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25pY2VjYW5kaWRhdGUnLCBlLmNhbmRpZGF0ZSk7XG5cdFx0XHRcdERhdGFTeW5jLnB1c2goYCR7dGhpcy5fbG9jYWxQYXRofS9pY2VgLCBfdG9KU09OKGUuY2FuZGlkYXRlKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR0aGlzLnBjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgdGhpcy5wYy5pY2VDb25uZWN0aW9uU3RhdGUpO1xuXHRcdFx0Y29uc3QgaWNlQ29ubmVjdGlvblN0YXRlID0gdGhpcy5wYy5pY2VDb25uZWN0aW9uU3RhdGU7XG5cdFx0XHRzd2l0Y2ggKGljZUNvbm5lY3Rpb25TdGF0ZSkge1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HOlxuXHRcdFx0XHRcdC8vIE5vdGhpbmcgdG8gZG8geWV0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEOlxuXHRcdFx0XHRcdHRoaXMuX2F0dGFjaFN0cmVhbSgpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW90ZUlDRUNhbmRpZGF0ZXMoZmFsc2UpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTVBMRVRFRDpcblx0XHRcdFx0XHR0aGlzLl9yZW1vdGVJQ0VDYW5kaWRhdGVzKGZhbHNlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9ESVNDT05ORUNURUQ6XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEOlxuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRDpcblx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCAnQ2xvc2UgUGVlckNvbm5lY3Rpb24nKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5lZ290aWF0ZWQgPSB0aGlzLm5lZ290aWF0ZWQgfHwgdGhpcy5pc0Nvbm5lY3RlZDtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnLCB0aGlzLnBjLmljZUdhdGhlcmluZ1N0YXRlKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUGVlckNvbm5lY3Rpb24gc3RhdHVzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXR1cyA9IE9QRU5FRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgSUNFIENhbmRpZGF0ZXMgZGlzY292ZXJ5XG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxpc3RlbiBJbmRpY2F0ZXMgaWYgd2Ugc2hvdWxkIGxpc3RlbiB0byBuZXcgSUNFIGNhbmRpZGF0ZXNcblx0ICovXG5cdF9yZW1vdGVJQ0VDYW5kaWRhdGVzKGxpc3Rlbikge1xuXHRcdGNvbnN0XG5cdFx0XHRwYXRoID0gYCR7dGhpcy5fcmVtb3RlUGF0aH0vaWNlYCxcblx0XHRcdGV2ZW50ID0gJ2NoaWxkX2FkZGVkJztcblx0XHRpZihsaXN0ZW4pIHtcblx0XHRcdC8vIGRvbid0IGxpc3RlbiB0byBpY2UgY2FuZGlkYXRlcyBpZiBwYyBpcyBhbHJlYWR5IHVwIChyZW5lZ290aWF0aW9uKVxuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIHNuYXAgPT4ge1xuXHRcdFx0XHRjb25zdCBjYW5kaWRhdGUgPSBzbmFwLnZhbCgpO1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+YWRkSWNlQ2FuZGlkYXRlJywgY2FuZGlkYXRlKTtcblx0XHRcdFx0dGhpcy5wYy5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBdHRhY2ggdGhlIHJlbW90ZSBNZWRpYVN0cmVhbSB0byBhIG5vZGVcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfYXR0YWNoU3RyZWFtICgpIHtcblx0XHRpZih0aGlzLnJlbW90ZVN0cmVhbSAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBNZWRpYS5hdHRhY2hTdHJlYW0odGhpcy5yZW1vdGVTdHJlYW0sIHRoaXMuY29udGFpbmVyLCB0aGlzLm5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcmVtb3RlIE1lZGlhU3RyZWFtXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdHNldCByZW1vdGVTdHJlYW0gKHN0cmVhbSkge1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9yZW1vdGVTdHJlYW0gPSBzdHJlYW07XG5cdFx0dGhpcy5fYXR0YWNoU3RyZWFtKCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHJlbW90ZSBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRnZXQgcmVtb3RlU3RyZWFtICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVtb3RlU3RyZWFtO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyBpZiB0aGUgUGVlckNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgYmFzZWQgb24gSUNFIGNvbm5lY3Rpb24gc3RhdGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNDb25uZWN0ZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLnBjICYmXG5cdFx0XHQhIX5bXG5cdFx0XHRcdElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRCxcblx0XHRcdFx0SUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVELFxuXHRcdFx0XHRJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUlxuXHRcdFx0XS5pbmRleE9mKHRoaXMucGMuaWNlQ29ubmVjdGlvblN0YXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IFJUQ1BlZXJDb25uZWN0aW9uIGZvciBzdWJzY3JpYmVyc1xuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gaHRtbEVsZW1lbnRcblx0ICogQHJldHVybnMge1Byb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdGFuc3dlcihodG1sRWxlbWVudCkge1xuXHRcdExvZy5pKCdQZWVyQ29ubmVjdGlvbn5hbnN3ZXInLCB7aHRtbEVsZW1lbnQsIHBlZXJDb25uZWN0aW9uOiB0aGlzfSk7XG5cdFx0dGhpcy5jb250YWluZXIgPSBodG1sRWxlbWVudDtcblx0XHRpZihPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snKSkge1xuXHRcdFx0dGhpcy5wYy5vbnRyYWNrID0gZSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbnRyYWNrJywgZS5zdHJlYW1zWzBdKTtcblx0XHRcdFx0dGhpcy5yZW1vdGVTdHJlYW0gPSBlLnN0cmVhbXNbMF07XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBjLm9uYWRkc3RyZWFtID0gZSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbmFkZHN0cmVhbScsIGUuc3RyZWFtKTtcblx0XHRcdFx0dGhpcy5yZW1vdGVTdHJlYW0gPSBlLnN0cmVhbTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gTGlzdGVuIHRvIFNEUCBvZmZlclxuXHRcdERhdGFTeW5jLm9uKGAke3RoaXMuX3JlbW90ZVBhdGh9L3NkcGAsICd2YWx1ZScsIHNuYXAgPT4ge1xuXHRcdFx0Y29uc3Qgc2RwT2ZmZXIgPSBzbmFwLnZhbCgpO1xuXHRcdFx0TG9nLmQoJ09mZmVyJywgc2RwT2ZmZXIpO1xuXHRcdFx0aWYoc2RwT2ZmZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXJlZCcsIHNkcE9mZmVyKTtcblx0XHRcdFx0dGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHBPZmZlcilcblx0XHRcdFx0XHQudGhlbigoKSA9PiBMb2cuZCgnUGVlckNvbm5lY3Rpb25+cmVtb3RlRGVzY3JpcHRpb24nLCB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoL15vZmZlciQvLnRlc3QodGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYy5jcmVhdGVBbnN3ZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1NEUCBpcyBub3QgYW4gb2ZmZXInKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLl9zZXRQcmVmZXJyZWRDb2RlY3MoZGVzY3JpcHRpb24pKVxuXHRcdFx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikpXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufmxvY2FsRGVzY3JpcHRpb24nLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgJHt0aGlzLl9sb2NhbFBhdGh9L3NkcGAsIF90b0pTT04odGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uKSkpXG5cdFx0XHRcdFx0LmNhdGNoKExvZy5yKCdQZWVyQ29ubmVjdGlvbn5sb2NhbERlc2NyaXB0aW9uJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IFJUQ1BlZXJDb25uZWN0aW9uIGZvciBwdWJsaXNoZXJzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSBzdHJlYW1cblx0ICogQHJldHVybnMge1Byb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdG9mZmVyKHN0cmVhbSkge1xuXHRcdExvZy5pKCdQZWVyQ29ubmVjdGlvbn5vZmZlcicsIHtzdHJlYW0sIHBlZXJDb25uZWN0aW9uOiB0aGlzfSk7XG5cdFx0bGV0IHNlbmRUaW1lb3V0O1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLnBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSAoKSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbm5lZ290aWF0aW9ubmVlZGVkJyk7XG5cdFx0XHRcdC8vIERlYm91bmNlIHNlbmQgKHJlbmVnb3RpYXRpb24gdHJpZ2dlcnMgbXVsdGlwbGUgbmVnb3RpYXRpb25uZWVkZWQgZXZlbnRzKVxuXHRcdFx0XHRpZihzZW5kVGltZW91dCkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChzZW5kVGltZW91dCk7XG5cdFx0XHRcdFx0c2VuZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbmRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VuZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMuX3NlbmRPZmZlcigpXG5cdFx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXInLCBlKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sIDIwKTtcblx0XHRcdH07XG5cdFx0XHREYXRhU3luYy5vbihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnLCBzbmFwID0+IHtcblx0XHRcdFx0Y29uc3Qgc2RwQW5zd2VyID0gc25hcC52YWwoKTtcblx0XHRcdFx0aWYoc2RwQW5zd2VyICE9IG51bGwpIHtcblx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXIjYW5zd2VyZWQnLCBzZHBBbnN3ZXIpO1xuXHRcdFx0XHRcdHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwQW5zd2VyKVxuXHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXIjcmVtb3RlRGVzY3JpcHRpb24nLCB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goTG9nLmUuYmluZChMb2csICdQZWVyQ29ubmVjdGlvbn5yZW1vdGVEZXNjcmlwdGlvbicpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hbHRlclN0cmVhbShzdHJlYW0sICdhZGQnKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgU0RQIG9mZmVyIGFuZCBwdXNoIGl0XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3NlbmRPZmZlcigpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NlbmRPZmZlcicpO1xuXHRcdHJldHVybiB0aGlzLnBjLmNyZWF0ZU9mZmVyKClcblx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMuX3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikpXG5cdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pKVxuXHRcdFx0LnRoZW4oKCkgPT4gTG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlI2xvY2FsRGVzY3JpcHRpb24nLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMudXBkYXRlKGAke3RoaXMuX2xvY2FsUGF0aH0vc2RwYCwgX3RvSlNPTih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pKSk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkL1JlbW92ZSB0cmFja3MgdG8gdGhlIFBlZXJDb25uZWN0aW9uIHN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2FsdGVyU3RyZWFtKHN0cmVhbSwgbWV0aG9kKSB7XG5cdFx0aWYoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsIGAke21ldGhvZH1UcmFja2ApKSB7XG5cdFx0XHRzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0aGlzLnBjW2Ake21ldGhvZH1UcmFja2BdKHRyYWNrLCBzdHJlYW0pLCB0aGlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wY1tgJHttZXRob2R9U3RyZWFtYF0oc3RyZWFtKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVzdGFydCBTRFAgbmVnb3RpYXRpb24gZm9sbG93aW5nIGEgTWVkaWFTdHJlYW0gY2hhbmdlXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG9sZFN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBuZXdTdHJlYW1cblx0ICovXG5cdHJlbmVnb3RpYXRlKG9sZFN0cmVhbSwgbmV3U3RyZWFtKSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJyk7XG5cdFx0aWYoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdnZXRTZW5kZXJzJykpe1xuXHRcdFx0Ly8gbW96UlRDUGVlckNvbm5lY3Rpb24gaW1wbGVtZW50YXRpb25cblx0XHRcdHRoaXMucGMuZ2V0U2VuZGVycygpLmZvckVhY2goc2VuZGVyID0+IHtcblx0XHRcdFx0bGV0IG5ld1RyYWNrcztcblx0XHRcdFx0c3dpdGNoIChzZW5kZXIudHJhY2sua2luZCkge1xuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzpcblx0XHRcdFx0XHRcdG5ld1RyYWNrcyA9IG5ld1N0cmVhbS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gbmV3U3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobmV3VHJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbmRlci5yZXBsYWNlVHJhY2sobmV3VHJhY2tzWzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9zZW5kT2ZmZXIoKVxuXHRcdFx0XHQuY2F0Y2goZSA9PiB7TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJywgZSk7fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2FsdGVyU3RyZWFtKG9sZFN0cmVhbSwgJ3JlbW92ZScpO1xuXHRcdFx0dGhpcy5fYWx0ZXJTdHJlYW0obmV3U3RyZWFtLCAnYWRkJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoZSBQZWVyQ29ubmVjdGlvbiBhbmQgc3RvcCBsaXN0ZW5pbmcgdG8gU0RQIG1lc3NhZ2VzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLl9zdGF0dXMgPT09IE9QRU5FRCkge1xuXHRcdFx0dGhpcy5fc3RhdHVzID0gQ0xPU0lORztcblx0XHRcdC8vIFN0b3AgZGlzcGxheVxuXHRcdFx0aWYgKHRoaXMubm9kZSkge1xuXHRcdFx0XHR0aGlzLm5vZGUuc3RvcCAmJiB0aGlzLm5vZGUuc3RvcCgpO1xuXHRcdFx0XHR0aGlzLm5vZGUuc3JjT2JqZWN0ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIHJlbW90ZSBJQ0UgY2FuZGlkYXRlc1xuXHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBTRFAgbWVzc2FnZXNcblx0XHRcdERhdGFTeW5jLm9mZihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnKTtcblx0XHRcdC8vIFJlbW92ZSBkYXRhXG5cdFx0XHREYXRhU3luYy5yZW1vdmUodGhpcy5fbG9jYWxQYXRoKTtcblx0XHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uXG5cdFx0XHRpZiAodGhpcy5wYyAmJiB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlICE9PSAnY2xvc2VkJykge1xuXHRcdFx0XHR0aGlzLnBjLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMucGMuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRWRpdHMgdGhlIFNEUCB0byBzZXQgdGhlIHByZWZlcnJlZCBhdWRpby92aWRlbyBjb2RlY1xuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtSVENTZXNzaW9uRGVzY3JpcHRpb259IGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiByZXRyaWV2ZWQgYnkgY3JlYXRlT2ZmZXIvY3JlYXRlQW5zd2VyXG5cdCAqIEByZXR1cm5zIHtSVENTZXNzaW9uRGVzY3JpcHRpb258e3NkcDogc3RyaW5nLCB0eXBlOiBzdHJpbmd9fVxuXHQgKi9cblx0X3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikge1xuXHRcdGlmKGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRWaWRlb0NvZGVjIHx8IGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRBdWRpb0NvZGVjKSB7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NldFByZWZlcnJlZENvZGVjcycsIHtkZXNjcmlwdGlvbiwgY29uZmlnOiBjYWNoZS5jb25maWd9KTtcblx0XHRcdGNvbnN0IHNkcExpbmVzID0gZGVzY3JpcHRpb24uc2RwLnNwbGl0KC9cXHI/XFxuLyk7XG5cdFx0XHRjb25zdCBtZWRpYXMgPSB7YXVkaW86IFtdLCB2aWRlbzogW119O1xuXHRcdFx0bGV0IGN1cnJlbnQgPSBudWxsO1xuXHRcdFx0Ly8gUGFyc2UgU0RQXG5cdFx0XHRzZHBMaW5lcy5mb3JFYWNoKChzZHBMaW5lLCBpKSA9PiB7XG5cdFx0XHRcdGlmKC9ebT0vLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBkID0gL15tPShcXHcrKVxcc1swLTlcXC9dK1xcc1tBLVphLXowLTlcXC9dK1xccyhbMC05XFxzXSspLy5leGVjKHNkcExpbmUpO1xuXHRcdFx0XHRcdGN1cnJlbnQgPSB7XG5cdFx0XHRcdFx0XHRmbXQ6IGRbMl0uc3BsaXQoL1xccy8pLFxuXHRcdFx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdFx0XHRjb2RlY3M6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRtZWRpYXNbZFsxXV0ucHVzaChjdXJyZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmKGN1cnJlbnQgJiYgL15hPXJ0cG1hcDovLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBjID0gL15hPXJ0cG1hcDooXFxkKylcXHMoW2EtekEtWjAtOVxcLVxcL10rKS8uZXhlYyhzZHBMaW5lKTtcblx0XHRcdFx0XHRpZihjKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50LmNvZGVjcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aWQ6IGNbMV0sXG5cdFx0XHRcdFx0XHRcdG5hbWU6IGNbMl0sXG5cdFx0XHRcdFx0XHRcdGluZGV4OiBpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBtZWRpYXMpO1xuXHRcdFx0bGV0IHVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcHJlZmVyID0gKG1lZGlhTGlzdCwgcHJlZmVyZWRDb2RlYykgPT4ge1xuXHRcdFx0XHRtZWRpYUxpc3QuZm9yRWFjaChtZWRpYSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBtZWRpYS5jb2RlY3MuZmluZChjb2RlYyA9PiBwcmVmZXJlZENvZGVjLnRlc3QoY29kZWMubmFtZSkpO1xuXHRcdFx0XHRcdGlmKHNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmbXQgPSBbc2VsZWN0ZWQuaWRdLmNvbmNhdChtZWRpYS5mbXQuZmlsdGVyKGlkcyA9PiBpZHMgIT09IHNlbGVjdGVkLmlkKSk7XG5cdFx0XHRcdFx0XHRzZHBMaW5lc1ttZWRpYS5pbmRleF0gPSBzZHBMaW5lc1ttZWRpYS5pbmRleF0ucmVwbGFjZShtZWRpYS5mbXQuam9pbignICcpLCBmbXQuam9pbignICcpKTtcblx0XHRcdFx0XHRcdHVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLnZpZGVvLCBjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLmF1ZGlvLCBjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih1cGRhdGUpIHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0c2RwOiBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSxcblx0XHRcdFx0XHR0eXBlOiBkZXNjcmlwdGlvbi50eXBlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjcmlwdGlvbjtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uLmpzIiwiaW1wb3J0IFBlZXJDb25uZWN0aW9uIGZyb20gJy4vUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuXG5jb25zdCBnZXRTdGFja0lkID0gKGlkMSwgaWQyKSA9PiBpZDEubG9jYWxlQ29tcGFyZShpZDIsICdlbi11cycpID4gMCA/IGAke2lkMX0tJHtpZDJ9YCA6YCR7aWQyfS0ke2lkMX1gO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqXG5cdFx0ICogV2ViUlRDIHN0YWNrc1xuXHRcdCAqIEB0eXBlIHt7Kjogeyo6IFBlZXJDb25uZWN0aW9ufX19XG5cdFx0ICovXG5cdFx0dGhpcy5zdGFja3MgPSB7fTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldCBhIFBlZXJDb25uZWN0aW9uIG9iamVjdCBmb3IgYSBzcGVjaWZpYyBzdHJlYW1cblx0ICogQHBhcmFtIHtMb2NhbHxSZW1vdGV9IHN0cmVhbVxuXHQgKiBAcGFyYW0ge1JlbW90ZXx7dG86IHN0cmluZywgZGV2aWNlOnN0cmluZ319IHJlbW90ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHB1Ymxpc2hcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGdldFBlZXJDb25uZWN0aW9uKHN0cmVhbSwgcmVtb3RlLCBwdWJsaXNoKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBnZXQgYSBQZWVyQ29ubmVjdGlvblxcJ3Mgb2JqZWN0LicpKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RhY2tJZCA9IGdldFN0YWNrSWQocmVtb3RlLmRldmljZSwgY2FjaGUuZGV2aWNlKTtcblxuXHRcdGlmKHRoaXMuc3RhY2tzW3N0YWNrSWRdICYmIHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKTtcblx0XHR9XG5cblx0XHRpZighdGhpcy5zdGFja3Nbc3RhY2tJZF0pIHtcblx0XHRcdHRoaXMuc3RhY2tzW3N0YWNrSWRdID0ge307XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXNlcnMgPSB7fTtcblx0XHR1c2Vyc1tjYWNoZS51c2VyLnVpZF0gPSB0cnVlO1xuXHRcdHVzZXJzW3JlbW90ZS5mcm9tIHx8IHJlbW90ZS50b10gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy93ZWJydGMvJHtzdGFja0lkfWAsIHVzZXJzKVxuXHRcdFx0LnRoZW4oKCkgPT4gbmV3IFBlZXJDb25uZWN0aW9uKHN0YWNrSWQsIHN0cmVhbS51aWQsIHJlbW90ZS5kZXZpY2UsIHB1Ymxpc2gpKVxuXHRcdFx0LnRoZW4ocGMgPT4ge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2VyfmdldFBlZXJDb25uZWN0aW9uJywge3N0YWNrSWQsIHN0cmVhbUlkOiBzdHJlYW0udWlkLCBwY30pO1xuXHRcdFx0XHR0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW0udWlkXSA9IHBjO1xuXHRcdFx0XHRyZXR1cm4gcGM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+Z2V0UGVlckNvbm5lY3Rpb24nKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIG9mZmVyIGZvciBhIHN0cmVhbSB0byBhIHN1YnNjcmliZXJcblx0ICogQHBhcmFtIHtMb2NhbH0gbG9jYWxTdHJlYW1cblx0ICogQHBhcmFtIHtvYmplY3R9IHN1YnNjcmliZXJcblx0ICogQHJldHVybiB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0b2ZmZXIobG9jYWxTdHJlYW0sIHN1YnNjcmliZXIpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2Vyfm9mZmVyJywge2xvY2FsU3RyZWFtLCBzdWJzY3JpYmVyfSk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGVlckNvbm5lY3Rpb24obG9jYWxTdHJlYW0sIHN1YnNjcmliZXIsIHRydWUpXG5cdFx0XHQudGhlbihwYyA9PiBwYy5vZmZlcihsb2NhbFN0cmVhbS5tZWRpYSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFuc3dlciB0byB0aGUgb2ZmZXIgZnJvbSB0aGUgcHVibGlzaGVyXG5cdCAqIEBwYXJhbSB7UmVtb3RlfSByZW1vdGVTdHJlYW1cblx0ICogQHBhcmFtIHtFbGVtZW50fSBodG1sRWxlbWVudFxuXHQgKiBAcmV0dXJuIHsqfFByb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdGFuc3dlcihyZW1vdGVTdHJlYW0sIGh0bWxFbGVtZW50KSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9uTWFuYWdlcn5hbnN3ZXInLCB7cmVtb3RlU3RyZWFtLCBodG1sRWxlbWVudH0pO1xuXHRcdHJldHVybiB0aGlzLmdldFBlZXJDb25uZWN0aW9uKHJlbW90ZVN0cmVhbSwgcmVtb3RlU3RyZWFtLCBmYWxzZSlcblx0XHRcdC50aGVuKHBjID0+IHBjLmFuc3dlcihodG1sRWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGEgUGVlckNvbm5lY3Rpb25cblx0ICogQHBhcmFtIHN0cmVhbUlkXG5cdCAqIEBwYXJhbSByZW1vdGVEZXZpY2Vcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGNsb3NlKHN0cmVhbUlkLCByZW1vdGVEZXZpY2UpIHtcblx0XHRjb25zdCBzdGFja0lkID0gZ2V0U3RhY2tJZChyZW1vdGVEZXZpY2UsIGNhY2hlLmRldmljZSksXG5cdFx0XHRwYyA9IHRoaXMuc3RhY2tzW3N0YWNrSWRdID8gdGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtSWRdIDogbnVsbDtcblx0XHRpZihwYyl7XG5cdFx0XHRwYy5jbG9zZSgpO1xuXHRcdFx0dGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtSWRdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF07XG5cdFx0XHRyZXR1cm4gcGM7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5maW5kO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2ZuL2FycmF5L2ZpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGZpbmQgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KVxuICAsIEtFWSAgICAgPSAnZmluZCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIgLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIFNEUCBoZWxwZXJzLlxudmFyIFNEUFV0aWxzID0ge307XG5cbi8vIEdlbmVyYXRlIGFuIGFscGhhbnVtZXJpYyBpZGVudGlmaWVyIGZvciBjbmFtZSBvciBtaWRzLlxuLy8gVE9ETzogdXNlIFVVSURzIGluc3RlYWQ/IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plZC85ODI4ODNcblNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEwKTtcbn07XG5cbi8vIFRoZSBSVENQIENOQU1FIHVzZWQgYnkgYWxsIHBlZXJjb25uZWN0aW9ucyBmcm9tIHRoZSBzYW1lIEpTLlxuU0RQVXRpbHMubG9jYWxDTmFtZSA9IFNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllcigpO1xuXG4vLyBTcGxpdHMgU0RQIGludG8gbGluZXMsIGRlYWxpbmcgd2l0aCBib3RoIENSTEYgYW5kIExGLlxuU0RQVXRpbHMuc3BsaXRMaW5lcyA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgcmV0dXJuIGJsb2IudHJpbSgpLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBsaW5lLnRyaW0oKTtcbiAgfSk7XG59O1xuLy8gU3BsaXRzIFNEUCBpbnRvIHNlc3Npb25wYXJ0IGFuZCBtZWRpYXNlY3Rpb25zLiBFbnN1cmVzIENSTEYuXG5TRFBVdGlscy5zcGxpdFNlY3Rpb25zID0gZnVuY3Rpb24oYmxvYikge1xuICB2YXIgcGFydHMgPSBibG9iLnNwbGl0KCdcXG5tPScpO1xuICByZXR1cm4gcGFydHMubWFwKGZ1bmN0aW9uKHBhcnQsIGluZGV4KSB7XG4gICAgcmV0dXJuIChpbmRleCA+IDAgPyAnbT0nICsgcGFydCA6IHBhcnQpLnRyaW0oKSArICdcXHJcXG4nO1xuICB9KTtcbn07XG5cbi8vIFJldHVybnMgbGluZXMgdGhhdCBzdGFydCB3aXRoIGEgY2VydGFpbiBwcmVmaXguXG5TRFBVdGlscy5tYXRjaFByZWZpeCA9IGZ1bmN0aW9uKGJsb2IsIHByZWZpeCkge1xuICByZXR1cm4gU0RQVXRpbHMuc3BsaXRMaW5lcyhibG9iKS5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBsaW5lLmluZGV4T2YocHJlZml4KSA9PT0gMDtcbiAgfSk7XG59O1xuXG4vLyBQYXJzZXMgYW4gSUNFIGNhbmRpZGF0ZSBsaW5lLiBTYW1wbGUgaW5wdXQ6XG4vLyBjYW5kaWRhdGU6NzAyNzg2MzUwIDIgdWRwIDQxODE5OTAyIDguOC44LjggNjA3NjkgdHlwIHJlbGF5IHJhZGRyIDguOC44Ljhcbi8vIHJwb3J0IDU1OTk2XCJcblNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHM7XG4gIC8vIFBhcnNlIGJvdGggdmFyaWFudHMuXG4gIGlmIChsaW5lLmluZGV4T2YoJ2E9Y2FuZGlkYXRlOicpID09PSAwKSB7XG4gICAgcGFydHMgPSBsaW5lLnN1YnN0cmluZygxMikuc3BsaXQoJyAnKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEwKS5zcGxpdCgnICcpO1xuICB9XG5cbiAgdmFyIGNhbmRpZGF0ZSA9IHtcbiAgICBmb3VuZGF0aW9uOiBwYXJ0c1swXSxcbiAgICBjb21wb25lbnQ6IHBhcnRzWzFdLFxuICAgIHByb3RvY29sOiBwYXJ0c1syXS50b0xvd2VyQ2FzZSgpLFxuICAgIHByaW9yaXR5OiBwYXJzZUludChwYXJ0c1szXSwgMTApLFxuICAgIGlwOiBwYXJ0c1s0XSxcbiAgICBwb3J0OiBwYXJzZUludChwYXJ0c1s1XSwgMTApLFxuICAgIC8vIHNraXAgcGFydHNbNl0gPT0gJ3R5cCdcbiAgICB0eXBlOiBwYXJ0c1s3XVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSA4OyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzd2l0Y2ggKHBhcnRzW2ldKSB7XG4gICAgICBjYXNlICdyYWRkcic6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdycG9ydCc6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCA9IHBhcnNlSW50KHBhcnRzW2kgKyAxXSwgMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RjcHR5cGUnOlxuICAgICAgICBjYW5kaWRhdGUudGNwVHlwZSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiAvLyBVbmtub3duIGV4dGVuc2lvbnMgYXJlIHNpbGVudGx5IGlnbm9yZWQuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlO1xufTtcblxuLy8gVHJhbnNsYXRlcyBhIGNhbmRpZGF0ZSBvYmplY3QgaW50byBTRFAgY2FuZGlkYXRlIGF0dHJpYnV0ZS5cblNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gIHZhciBzZHAgPSBbXTtcbiAgc2RwLnB1c2goY2FuZGlkYXRlLmZvdW5kYXRpb24pO1xuICBzZHAucHVzaChjYW5kaWRhdGUuY29tcG9uZW50KTtcbiAgc2RwLnB1c2goY2FuZGlkYXRlLnByb3RvY29sLnRvVXBwZXJDYXNlKCkpO1xuICBzZHAucHVzaChjYW5kaWRhdGUucHJpb3JpdHkpO1xuICBzZHAucHVzaChjYW5kaWRhdGUuaXApO1xuICBzZHAucHVzaChjYW5kaWRhdGUucG9ydCk7XG5cbiAgdmFyIHR5cGUgPSBjYW5kaWRhdGUudHlwZTtcbiAgc2RwLnB1c2goJ3R5cCcpO1xuICBzZHAucHVzaCh0eXBlKTtcbiAgaWYgKHR5cGUgIT09ICdob3N0JyAmJiBjYW5kaWRhdGUucmVsYXRlZEFkZHJlc3MgJiZcbiAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCkge1xuICAgIHNkcC5wdXNoKCdyYWRkcicpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyk7IC8vIHdhczogcmVsQWRkclxuICAgIHNkcC5wdXNoKCdycG9ydCcpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCk7IC8vIHdhczogcmVsUG9ydFxuICB9XG4gIGlmIChjYW5kaWRhdGUudGNwVHlwZSAmJiBjYW5kaWRhdGUucHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PT0gJ3RjcCcpIHtcbiAgICBzZHAucHVzaCgndGNwdHlwZScpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS50Y3BUeXBlKTtcbiAgfVxuICByZXR1cm4gJ2NhbmRpZGF0ZTonICsgc2RwLmpvaW4oJyAnKTtcbn07XG5cbi8vIFBhcnNlcyBhbiBydHBtYXAgbGluZSwgcmV0dXJucyBSVENSdHBDb2RkZWNQYXJhbWV0ZXJzLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXJ0cG1hcDoxMTEgb3B1cy80ODAwMC8yXG5TRFBVdGlscy5wYXJzZVJ0cE1hcCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoOSkuc3BsaXQoJyAnKTtcbiAgdmFyIHBhcnNlZCA9IHtcbiAgICBwYXlsb2FkVHlwZTogcGFyc2VJbnQocGFydHMuc2hpZnQoKSwgMTApIC8vIHdhczogaWRcbiAgfTtcblxuICBwYXJ0cyA9IHBhcnRzWzBdLnNwbGl0KCcvJyk7XG5cbiAgcGFyc2VkLm5hbWUgPSBwYXJ0c1swXTtcbiAgcGFyc2VkLmNsb2NrUmF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7IC8vIHdhczogY2xvY2tyYXRlXG4gIC8vIHdhczogY2hhbm5lbHNcbiAgcGFyc2VkLm51bUNoYW5uZWxzID0gcGFydHMubGVuZ3RoID09PSAzID8gcGFyc2VJbnQocGFydHNbMl0sIDEwKSA6IDE7XG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG4vLyBHZW5lcmF0ZSBhbiBhPXJ0cG1hcCBsaW5lIGZyb20gUlRDUnRwQ29kZWNDYXBhYmlsaXR5IG9yXG4vLyBSVENSdHBDb2RlY1BhcmFtZXRlcnMuXG5TRFBVdGlscy53cml0ZVJ0cE1hcCA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gIH1cbiAgcmV0dXJuICdhPXJ0cG1hcDonICsgcHQgKyAnICcgKyBjb2RlYy5uYW1lICsgJy8nICsgY29kZWMuY2xvY2tSYXRlICtcbiAgICAgIChjb2RlYy5udW1DaGFubmVscyAhPT0gMSA/ICcvJyArIGNvZGVjLm51bUNoYW5uZWxzIDogJycpICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgYW4gYT1leHRtYXAgbGluZSAoaGVhZGVyZXh0ZW5zaW9uIGZyb20gUkZDIDUyODUpLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPWV4dG1hcDoyIHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcblNEUFV0aWxzLnBhcnNlRXh0bWFwID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cig5KS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGlkOiBwYXJzZUludChwYXJ0c1swXSwgMTApLFxuICAgIHVyaTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEdlbmVyYXRlcyBhPWV4dG1hcCBsaW5lIGZyb20gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uUGFyYW1ldGVycyBvclxuLy8gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uLlxuU0RQVXRpbHMud3JpdGVFeHRtYXAgPSBmdW5jdGlvbihoZWFkZXJFeHRlbnNpb24pIHtcbiAgcmV0dXJuICdhPWV4dG1hcDonICsgKGhlYWRlckV4dGVuc2lvbi5pZCB8fCBoZWFkZXJFeHRlbnNpb24ucHJlZmVycmVkSWQpICtcbiAgICAgICAnICcgKyBoZWFkZXJFeHRlbnNpb24udXJpICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgYW4gZnRtcCBsaW5lLCByZXR1cm5zIGRpY3Rpb25hcnkuIFNhbXBsZSBpbnB1dDpcbi8vIGE9Zm10cDo5NiB2YnI9b247Y25nPW9uXG4vLyBBbHNvIGRlYWxzIHdpdGggdmJyPW9uOyBjbmc9b25cblNEUFV0aWxzLnBhcnNlRm10cCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga3Y7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKGxpbmUuaW5kZXhPZignICcpICsgMSkuc3BsaXQoJzsnKTtcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgIGt2ID0gcGFydHNbal0udHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgcGFyc2VkW2t2WzBdLnRyaW0oKV0gPSBrdlsxXTtcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGVzIGFuIGE9ZnRtcCBsaW5lIGZyb20gUlRDUnRwQ29kZWNDYXBhYmlsaXR5IG9yIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlRm10cCA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gIHZhciBsaW5lID0gJyc7XG4gIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gIH1cbiAgaWYgKGNvZGVjLnBhcmFtZXRlcnMgJiYgT2JqZWN0LmtleXMoY29kZWMucGFyYW1ldGVycykubGVuZ3RoKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGNvZGVjLnBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHBhcmFtcy5wdXNoKHBhcmFtICsgJz0nICsgY29kZWMucGFyYW1ldGVyc1twYXJhbV0pO1xuICAgIH0pO1xuICAgIGxpbmUgKz0gJ2E9Zm10cDonICsgcHQgKyAnICcgKyBwYXJhbXMuam9pbignOycpICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIGxpbmU7XG59O1xuXG4vLyBQYXJzZXMgYW4gcnRjcC1mYiBsaW5lLCByZXR1cm5zIFJUQ1BSdGNwRmVlZGJhY2sgb2JqZWN0LiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXJ0Y3AtZmI6OTggbmFjayBycHNpXG5TRFBVdGlscy5wYXJzZVJ0Y3BGYiA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKCcgJykgKyAxKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHBhcnRzLnNoaWZ0KCksXG4gICAgcGFyYW1ldGVyOiBwYXJ0cy5qb2luKCcgJylcbiAgfTtcbn07XG4vLyBHZW5lcmF0ZSBhPXJ0Y3AtZmIgbGluZXMgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdGNwRmIgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgbGluZXMgPSAnJztcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICBpZiAoY29kZWMucnRjcEZlZWRiYWNrICYmIGNvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGgpIHtcbiAgICAvLyBGSVhNRTogc3BlY2lhbCBoYW5kbGluZyBmb3IgdHJyLWludD9cbiAgICBjb2RlYy5ydGNwRmVlZGJhY2suZm9yRWFjaChmdW5jdGlvbihmYikge1xuICAgICAgbGluZXMgKz0gJ2E9cnRjcC1mYjonICsgcHQgKyAnICcgKyBmYi50eXBlICtcbiAgICAgIChmYi5wYXJhbWV0ZXIgJiYgZmIucGFyYW1ldGVyLmxlbmd0aCA/ICcgJyArIGZiLnBhcmFtZXRlciA6ICcnKSArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGxpbmVzO1xufTtcblxuLy8gUGFyc2VzIGFuIFJGQyA1NTc2IHNzcmMgbWVkaWEgYXR0cmlidXRlLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXNzcmM6MzczNTkyODU1OSBjbmFtZTpzb21ldGhpbmdcblNEUFV0aWxzLnBhcnNlU3NyY01lZGlhID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgc3AgPSBsaW5lLmluZGV4T2YoJyAnKTtcbiAgdmFyIHBhcnRzID0ge1xuICAgIHNzcmM6IHBhcnNlSW50KGxpbmUuc3Vic3RyKDcsIHNwIC0gNyksIDEwKVxuICB9O1xuICB2YXIgY29sb24gPSBsaW5lLmluZGV4T2YoJzonLCBzcCk7XG4gIGlmIChjb2xvbiA+IC0xKSB7XG4gICAgcGFydHMuYXR0cmlidXRlID0gbGluZS5zdWJzdHIoc3AgKyAxLCBjb2xvbiAtIHNwIC0gMSk7XG4gICAgcGFydHMudmFsdWUgPSBsaW5lLnN1YnN0cihjb2xvbiArIDEpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSk7XG4gIH1cbiAgcmV0dXJuIHBhcnRzO1xufTtcblxuLy8gRXh0cmFjdHMgRFRMUyBwYXJhbWV0ZXJzIGZyb20gU0RQIG1lZGlhIHNlY3Rpb24gb3Igc2Vzc2lvbnBhcnQuXG4vLyBGSVhNRTogZm9yIGNvbnNpc3RlbmN5IHdpdGggb3RoZXIgZnVuY3Rpb25zIHRoaXMgc2hvdWxkIG9ubHlcbi8vICAgZ2V0IHRoZSBmaW5nZXJwcmludCBsaW5lIGFzIGlucHV0LiBTZWUgYWxzbyBnZXRJY2VQYXJhbWV0ZXJzLlxuU0RQVXRpbHMuZ2V0RHRsc1BhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgLy8gU2VhcmNoIGluIHNlc3Npb24gcGFydCwgdG9vLlxuICBsaW5lcyA9IGxpbmVzLmNvbmNhdChTRFBVdGlscy5zcGxpdExpbmVzKHNlc3Npb25wYXJ0KSk7XG4gIHZhciBmcExpbmUgPSBsaW5lcy5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBsaW5lLmluZGV4T2YoJ2E9ZmluZ2VycHJpbnQ6JykgPT09IDA7XG4gIH0pWzBdLnN1YnN0cigxNCk7XG4gIC8vIE5vdGU6IGE9c2V0dXAgbGluZSBpcyBpZ25vcmVkIHNpbmNlIHdlIHVzZSB0aGUgJ2F1dG8nIHJvbGUuXG4gIHZhciBkdGxzUGFyYW1ldGVycyA9IHtcbiAgICByb2xlOiAnYXV0bycsXG4gICAgZmluZ2VycHJpbnRzOiBbe1xuICAgICAgYWxnb3JpdGhtOiBmcExpbmUuc3BsaXQoJyAnKVswXSxcbiAgICAgIHZhbHVlOiBmcExpbmUuc3BsaXQoJyAnKVsxXVxuICAgIH1dXG4gIH07XG4gIHJldHVybiBkdGxzUGFyYW1ldGVycztcbn07XG5cbi8vIFNlcmlhbGl6ZXMgRFRMUyBwYXJhbWV0ZXJzIHRvIFNEUC5cblNEUFV0aWxzLndyaXRlRHRsc1BhcmFtZXRlcnMgPSBmdW5jdGlvbihwYXJhbXMsIHNldHVwVHlwZSkge1xuICB2YXIgc2RwID0gJ2E9c2V0dXA6JyArIHNldHVwVHlwZSArICdcXHJcXG4nO1xuICBwYXJhbXMuZmluZ2VycHJpbnRzLmZvckVhY2goZnVuY3Rpb24oZnApIHtcbiAgICBzZHAgKz0gJ2E9ZmluZ2VycHJpbnQ6JyArIGZwLmFsZ29yaXRobSArICcgJyArIGZwLnZhbHVlICsgJ1xcclxcbic7XG4gIH0pO1xuICByZXR1cm4gc2RwO1xufTtcbi8vIFBhcnNlcyBJQ0UgaW5mb3JtYXRpb24gZnJvbSBTRFAgbWVkaWEgc2VjdGlvbiBvciBzZXNzaW9ucGFydC5cbi8vIEZJWE1FOiBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBmdW5jdGlvbnMgdGhpcyBzaG91bGQgb25seVxuLy8gICBnZXQgdGhlIGljZS11ZnJhZyBhbmQgaWNlLXB3ZCBsaW5lcyBhcyBpbnB1dC5cblNEUFV0aWxzLmdldEljZVBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgLy8gU2VhcmNoIGluIHNlc3Npb24gcGFydCwgdG9vLlxuICBsaW5lcyA9IGxpbmVzLmNvbmNhdChTRFBVdGlscy5zcGxpdExpbmVzKHNlc3Npb25wYXJ0KSk7XG4gIHZhciBpY2VQYXJhbWV0ZXJzID0ge1xuICAgIHVzZXJuYW1lRnJhZ21lbnQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gbGluZS5pbmRleE9mKCdhPWljZS11ZnJhZzonKSA9PT0gMDtcbiAgICB9KVswXS5zdWJzdHIoMTIpLFxuICAgIHBhc3N3b3JkOiBsaW5lcy5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgICAgcmV0dXJuIGxpbmUuaW5kZXhPZignYT1pY2UtcHdkOicpID09PSAwO1xuICAgIH0pWzBdLnN1YnN0cigxMClcbiAgfTtcbiAgcmV0dXJuIGljZVBhcmFtZXRlcnM7XG59O1xuXG4vLyBTZXJpYWxpemVzIElDRSBwYXJhbWV0ZXJzIHRvIFNEUC5cblNEUFV0aWxzLndyaXRlSWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICByZXR1cm4gJ2E9aWNlLXVmcmFnOicgKyBwYXJhbXMudXNlcm5hbWVGcmFnbWVudCArICdcXHJcXG4nICtcbiAgICAgICdhPWljZS1wd2Q6JyArIHBhcmFtcy5wYXNzd29yZCArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBhbmQgcmV0dXJucyBSVENSdHBQYXJhbWV0ZXJzLlxuU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IHtcbiAgICBjb2RlY3M6IFtdLFxuICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgIGZlY01lY2hhbmlzbXM6IFtdLFxuICAgIHJ0Y3A6IFtdXG4gIH07XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIG1saW5lID0gbGluZXNbMF0uc3BsaXQoJyAnKTtcbiAgZm9yICh2YXIgaSA9IDM7IGkgPCBtbGluZS5sZW5ndGg7IGkrKykgeyAvLyBmaW5kIGFsbCBjb2RlY3MgZnJvbSBtbGluZVszLi5dXG4gICAgdmFyIHB0ID0gbWxpbmVbaV07XG4gICAgdmFyIHJ0cG1hcGxpbmUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydHBtYXA6JyArIHB0ICsgJyAnKVswXTtcbiAgICBpZiAocnRwbWFwbGluZSkge1xuICAgICAgdmFyIGNvZGVjID0gU0RQVXRpbHMucGFyc2VSdHBNYXAocnRwbWFwbGluZSk7XG4gICAgICB2YXIgZm10cHMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPWZtdHA6JyArIHB0ICsgJyAnKTtcbiAgICAgIC8vIE9ubHkgdGhlIGZpcnN0IGE9Zm10cDo8cHQ+IGlzIGNvbnNpZGVyZWQuXG4gICAgICBjb2RlYy5wYXJhbWV0ZXJzID0gZm10cHMubGVuZ3RoID8gU0RQVXRpbHMucGFyc2VGbXRwKGZtdHBzWzBdKSA6IHt9O1xuICAgICAgY29kZWMucnRjcEZlZWRiYWNrID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoXG4gICAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydGNwLWZiOicgKyBwdCArICcgJylcbiAgICAgICAgLm1hcChTRFBVdGlscy5wYXJzZVJ0Y3BGYik7XG4gICAgICBkZXNjcmlwdGlvbi5jb2RlY3MucHVzaChjb2RlYyk7XG4gICAgICAvLyBwYXJzZSBGRUMgbWVjaGFuaXNtcyBmcm9tIHJ0cG1hcCBsaW5lcy5cbiAgICAgIHN3aXRjaCAoY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ1JFRCc6XG4gICAgICAgIGNhc2UgJ1VMUEZFQyc6XG4gICAgICAgICAgZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5wdXNoKGNvZGVjLm5hbWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIG9ubHkgUkVEIGFuZCBVTFBGRUMgYXJlIHJlY29nbml6ZWQgYXMgRkVDIG1lY2hhbmlzbXMuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9ZXh0bWFwOicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGRlc2NyaXB0aW9uLmhlYWRlckV4dGVuc2lvbnMucHVzaChTRFBVdGlscy5wYXJzZUV4dG1hcChsaW5lKSk7XG4gIH0pO1xuICAvLyBGSVhNRTogcGFyc2UgcnRjcC5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufTtcblxuLy8gR2VuZXJhdGVzIHBhcnRzIG9mIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBkZXNjcmliaW5nIHRoZSBjYXBhYmlsaXRpZXMgL1xuLy8gcGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24gPSBmdW5jdGlvbihraW5kLCBjYXBzKSB7XG4gIHZhciBzZHAgPSAnJztcblxuICAvLyBCdWlsZCB0aGUgbWxpbmUuXG4gIHNkcCArPSAnbT0nICsga2luZCArICcgJztcbiAgc2RwICs9IGNhcHMuY29kZWNzLmxlbmd0aCA+IDAgPyAnOScgOiAnMCc7IC8vIHJlamVjdCBpZiBubyBjb2RlY3MuXG4gIHNkcCArPSAnIFVEUC9UTFMvUlRQL1NBVlBGICc7XG4gIHNkcCArPSBjYXBzLmNvZGVjcy5tYXAoZnVuY3Rpb24oY29kZWMpIHtcbiAgICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gY29kZWMucGF5bG9hZFR5cGU7XG4gIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuXG4gIHNkcCArPSAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbic7XG4gIHNkcCArPSAnYT1ydGNwOjkgSU4gSVA0IDAuMC4wLjBcXHJcXG4nO1xuXG4gIC8vIEFkZCBhPXJ0cG1hcCBsaW5lcyBmb3IgZWFjaCBjb2RlYy4gQWxzbyBmbXRwIGFuZCBydGNwLWZiLlxuICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgc2RwICs9IFNEUFV0aWxzLndyaXRlUnRwTWFwKGNvZGVjKTtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVGbXRwKGNvZGVjKTtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdGNwRmIoY29kZWMpO1xuICB9KTtcbiAgdmFyIG1heHB0aW1lID0gMDtcbiAgY2Fwcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5tYXhwdGltZSA+IG1heHB0aW1lKSB7XG4gICAgICBtYXhwdGltZSA9IGNvZGVjLm1heHB0aW1lO1xuICAgIH1cbiAgfSk7XG4gIGlmIChtYXhwdGltZSA+IDApIHtcbiAgICBzZHAgKz0gJ2E9bWF4cHRpbWU6JyArIG1heHB0aW1lICsgJ1xcclxcbic7XG4gIH1cbiAgc2RwICs9ICdhPXJ0Y3AtbXV4XFxyXFxuJztcblxuICBjYXBzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVFeHRtYXAoZXh0ZW5zaW9uKTtcbiAgfSk7XG4gIC8vIEZJWE1FOiB3cml0ZSBmZWNNZWNoYW5pc21zLlxuICByZXR1cm4gc2RwO1xufTtcblxuLy8gUGFyc2VzIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZlxuLy8gUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzLlxuU0RQVXRpbHMucGFyc2VSdHBFbmNvZGluZ1BhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGVuY29kaW5nUGFyYW1ldGVycyA9IFtdO1xuICB2YXIgZGVzY3JpcHRpb24gPSBTRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIGhhc1JlZCA9IGRlc2NyaXB0aW9uLmZlY01lY2hhbmlzbXMuaW5kZXhPZignUkVEJykgIT09IC0xO1xuICB2YXIgaGFzVWxwZmVjID0gZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5pbmRleE9mKCdVTFBGRUMnKSAhPT0gLTE7XG5cbiAgLy8gZmlsdGVyIGE9c3NyYzouLi4gY25hbWU6LCBpZ25vcmUgUGxhbkItbXNpZFxuICB2YXIgc3NyY3MgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmM6JylcbiAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICB9KVxuICAuZmlsdGVyKGZ1bmN0aW9uKHBhcnRzKSB7XG4gICAgcmV0dXJuIHBhcnRzLmF0dHJpYnV0ZSA9PT0gJ2NuYW1lJztcbiAgfSk7XG4gIHZhciBwcmltYXJ5U3NyYyA9IHNzcmNzLmxlbmd0aCA+IDAgJiYgc3NyY3NbMF0uc3NyYztcbiAgdmFyIHNlY29uZGFyeVNzcmM7XG5cbiAgdmFyIGZsb3dzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjLWdyb3VwOkZJRCcpXG4gIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJyAnKTtcbiAgICBwYXJ0cy5zaGlmdCgpO1xuICAgIHJldHVybiBwYXJ0cy5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHBhcnQsIDEwKTtcbiAgICB9KTtcbiAgfSk7XG4gIGlmIChmbG93cy5sZW5ndGggPiAwICYmIGZsb3dzWzBdLmxlbmd0aCA+IDEgJiYgZmxvd3NbMF1bMF0gPT09IHByaW1hcnlTc3JjKSB7XG4gICAgc2Vjb25kYXJ5U3NyYyA9IGZsb3dzWzBdWzFdO1xuICB9XG5cbiAgZGVzY3JpcHRpb24uY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICBpZiAoY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnUlRYJyAmJiBjb2RlYy5wYXJhbWV0ZXJzLmFwdCkge1xuICAgICAgdmFyIGVuY1BhcmFtID0ge1xuICAgICAgICBzc3JjOiBwcmltYXJ5U3NyYyxcbiAgICAgICAgY29kZWNQYXlsb2FkVHlwZTogcGFyc2VJbnQoY29kZWMucGFyYW1ldGVycy5hcHQsIDEwKSxcbiAgICAgICAgcnR4OiB7XG4gICAgICAgICAgc3NyYzogc2Vjb25kYXJ5U3NyY1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZW5jb2RpbmdQYXJhbWV0ZXJzLnB1c2goZW5jUGFyYW0pO1xuICAgICAgaWYgKGhhc1JlZCkge1xuICAgICAgICBlbmNQYXJhbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZW5jUGFyYW0pKTtcbiAgICAgICAgZW5jUGFyYW0uZmVjID0ge1xuICAgICAgICAgIHNzcmM6IHNlY29uZGFyeVNzcmMsXG4gICAgICAgICAgbWVjaGFuaXNtOiBoYXNVbHBmZWMgPyAncmVkK3VscGZlYycgOiAncmVkJ1xuICAgICAgICB9O1xuICAgICAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaChlbmNQYXJhbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKGVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggPT09IDAgJiYgcHJpbWFyeVNzcmMpIHtcbiAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaCh7XG4gICAgICBzc3JjOiBwcmltYXJ5U3NyY1xuICAgIH0pO1xuICB9XG5cbiAgLy8gd2Ugc3VwcG9ydCBib3RoIGI9QVMgYW5kIGI9VElBUyBidXQgaW50ZXJwcmV0IEFTIGFzIFRJQVMuXG4gIHZhciBiYW5kd2lkdGggPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdiPScpO1xuICBpZiAoYmFuZHdpZHRoLmxlbmd0aCkge1xuICAgIGlmIChiYW5kd2lkdGhbMF0uaW5kZXhPZignYj1USUFTOicpID09PSAwKSB7XG4gICAgICBiYW5kd2lkdGggPSBwYXJzZUludChiYW5kd2lkdGhbMF0uc3Vic3RyKDcpLCAxMCk7XG4gICAgfSBlbHNlIGlmIChiYW5kd2lkdGhbMF0uaW5kZXhPZignYj1BUzonKSA9PT0gMCkge1xuICAgICAgYmFuZHdpZHRoID0gcGFyc2VJbnQoYmFuZHdpZHRoWzBdLnN1YnN0cig1KSwgMTApO1xuICAgIH1cbiAgICBlbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5tYXhCaXRyYXRlID0gYmFuZHdpZHRoO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbmNvZGluZ1BhcmFtZXRlcnM7XG59O1xuXG5TRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBGSVhNRTogc2Vzcy1pZCBzaG91bGQgYmUgYW4gTlRQIHRpbWVzdGFtcC5cbiAgcmV0dXJuICd2PTBcXHJcXG4nICtcbiAgICAgICdvPXRoaXNpc2FkYXB0ZXJvcnRjIDgxNjk2Mzk5MTU2NDY5NDMxMzcgMiBJTiBJUDQgMTI3LjAuMC4xXFxyXFxuJyArXG4gICAgICAncz0tXFxyXFxuJyArXG4gICAgICAndD0wIDBcXHJcXG4nO1xufTtcblxuU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24gPSBmdW5jdGlvbih0cmFuc2NlaXZlciwgY2FwcywgdHlwZSwgc3RyZWFtKSB7XG4gIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVJ0cERlc2NyaXB0aW9uKHRyYW5zY2VpdmVyLmtpbmQsIGNhcHMpO1xuXG4gIC8vIE1hcCBJQ0UgcGFyYW1ldGVycyAodWZyYWcsIHB3ZCkgdG8gU0RQLlxuICBzZHAgKz0gU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzKFxuICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuZ2V0TG9jYWxQYXJhbWV0ZXJzKCkpO1xuXG4gIC8vIE1hcCBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuICBzZHAgKz0gU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyhcbiAgICAgIHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQuZ2V0TG9jYWxQYXJhbWV0ZXJzKCksXG4gICAgICB0eXBlID09PSAnb2ZmZXInID8gJ2FjdHBhc3MnIDogJ2FjdGl2ZScpO1xuXG4gIHNkcCArPSAnYT1taWQ6JyArIHRyYW5zY2VpdmVyLm1pZCArICdcXHJcXG4nO1xuXG4gIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIgJiYgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICBzZHAgKz0gJ2E9c2VuZHJlY3ZcXHJcXG4nO1xuICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgIHNkcCArPSAnYT1zZW5kb25seVxcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICBzZHAgKz0gJ2E9cmVjdm9ubHlcXHJcXG4nO1xuICB9IGVsc2Uge1xuICAgIHNkcCArPSAnYT1pbmFjdGl2ZVxcclxcbic7XG4gIH1cblxuICAvLyBGSVhNRTogZm9yIFJUWCB0aGVyZSBtaWdodCBiZSBtdWx0aXBsZSBTU1JDcy4gTm90IGltcGxlbWVudGVkIGluIEVkZ2UgeWV0LlxuICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgdmFyIG1zaWQgPSAnbXNpZDonICsgc3RyZWFtLmlkICsgJyAnICtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnRyYWNrLmlkICsgJ1xcclxcbic7XG4gICAgc2RwICs9ICdhPScgKyBtc2lkO1xuICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgK1xuICAgICAgICAnICcgKyBtc2lkO1xuICAgIGlmICh0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAgICcgJyArIG1zaWQ7XG4gICAgICBzZHAgKz0gJ2E9c3NyYy1ncm91cDpGSUQgJyArXG4gICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICsgJyAnICtcbiAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgICAnXFxyXFxuJztcbiAgICB9XG4gIH1cbiAgLy8gRklYTUU6IHRoaXMgc2hvdWxkIGJlIHdyaXR0ZW4gYnkgd3JpdGVSdHBEZXNjcmlwdGlvbi5cbiAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArXG4gICAgICAnIGNuYW1lOicgKyBTRFBVdGlscy5sb2NhbENOYW1lICsgJ1xcclxcbic7XG4gIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIgJiYgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHgpIHtcbiAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICcgY25hbWU6JyArIFNEUFV0aWxzLmxvY2FsQ05hbWUgKyAnXFxyXFxuJztcbiAgfVxuICByZXR1cm4gc2RwO1xufTtcblxuLy8gR2V0cyB0aGUgZGlyZWN0aW9uIGZyb20gdGhlIG1lZGlhU2VjdGlvbiBvciB0aGUgc2Vzc2lvbnBhcnQuXG5TRFBVdGlscy5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gIC8vIExvb2sgZm9yIHNlbmRyZWN2LCBzZW5kb25seSwgcmVjdm9ubHksIGluYWN0aXZlLCBkZWZhdWx0IHRvIHNlbmRyZWN2LlxuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGxpbmVzW2ldKSB7XG4gICAgICBjYXNlICdhPXNlbmRyZWN2JzpcbiAgICAgIGNhc2UgJ2E9c2VuZG9ubHknOlxuICAgICAgY2FzZSAnYT1yZWN2b25seSc6XG4gICAgICBjYXNlICdhPWluYWN0aXZlJzpcbiAgICAgICAgcmV0dXJuIGxpbmVzW2ldLnN1YnN0cigyKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIEZJWE1FOiBXaGF0IHNob3VsZCBoYXBwZW4gaGVyZT9cbiAgICB9XG4gIH1cbiAgaWYgKHNlc3Npb25wYXJ0KSB7XG4gICAgcmV0dXJuIFNEUFV0aWxzLmdldERpcmVjdGlvbihzZXNzaW9ucGFydCk7XG4gIH1cbiAgcmV0dXJuICdzZW5kcmVjdic7XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IFNEUFV0aWxzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NkcC9zZHAuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaGltbWluZyBzdGFydHMgaGVyZS5cbihmdW5jdGlvbigpIHtcbiAgLy8gVXRpbHMuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgdmFyIGxvZ2dpbmcgPSB1dGlscy5sb2c7XG4gIHZhciBicm93c2VyRGV0YWlscyA9IHV0aWxzLmJyb3dzZXJEZXRhaWxzO1xuICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICBtb2R1bGUuZXhwb3J0cy5icm93c2VyRGV0YWlscyA9IGJyb3dzZXJEZXRhaWxzO1xuICBtb2R1bGUuZXhwb3J0cy5leHRyYWN0VmVyc2lvbiA9IHV0aWxzLmV4dHJhY3RWZXJzaW9uO1xuICBtb2R1bGUuZXhwb3J0cy5kaXNhYmxlTG9nID0gdXRpbHMuZGlzYWJsZUxvZztcblxuICAvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgaWYgeW91IHdhbnQgbG9nZ2luZyB0byBvY2N1ciwgaW5jbHVkaW5nIGxvZ2dpbmdcbiAgLy8gZm9yIHRoZSBzd2l0Y2ggc3RhdGVtZW50IGJlbG93LiBDYW4gYWxzbyBiZSB0dXJuZWQgb24gaW4gdGhlIGJyb3dzZXIgdmlhXG4gIC8vIGFkYXB0ZXIuZGlzYWJsZUxvZyhmYWxzZSksIGJ1dCB0aGVuIGxvZ2dpbmcgZnJvbSB0aGUgc3dpdGNoIHN0YXRlbWVudCBiZWxvd1xuICAvLyB3aWxsIG5vdCBhcHBlYXIuXG4gIC8vIHJlcXVpcmUoJy4vdXRpbHMnKS5kaXNhYmxlTG9nKGZhbHNlKTtcblxuICAvLyBCcm93c2VyIHNoaW1zLlxuICB2YXIgY2hyb21lU2hpbSA9IHJlcXVpcmUoJy4vY2hyb21lL2Nocm9tZV9zaGltJykgfHwgbnVsbDtcbiAgdmFyIGVkZ2VTaGltID0gcmVxdWlyZSgnLi9lZGdlL2VkZ2Vfc2hpbScpIHx8IG51bGw7XG4gIHZhciBmaXJlZm94U2hpbSA9IHJlcXVpcmUoJy4vZmlyZWZveC9maXJlZm94X3NoaW0nKSB8fCBudWxsO1xuICB2YXIgc2FmYXJpU2hpbSA9IHJlcXVpcmUoJy4vc2FmYXJpL3NhZmFyaV9zaGltJykgfHwgbnVsbDtcblxuICAvLyBTaGltIGJyb3dzZXIgaWYgZm91bmQuXG4gIHN3aXRjaCAoYnJvd3NlckRldGFpbHMuYnJvd3Nlcikge1xuICAgIGNhc2UgJ2Nocm9tZSc6XG4gICAgICBpZiAoIWNocm9tZVNoaW0gfHwgIWNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgIGxvZ2dpbmcoJ0Nocm9tZSBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBjaHJvbWUuJyk7XG4gICAgICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICAgICAgbW9kdWxlLmV4cG9ydHMuYnJvd3NlclNoaW0gPSBjaHJvbWVTaGltO1xuXG4gICAgICBjaHJvbWVTaGltLnNoaW1HZXRVc2VyTWVkaWEoKTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbU1lZGlhU3RyZWFtKCk7XG4gICAgICB1dGlscy5zaGltQ3JlYXRlT2JqZWN0VVJMKCk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1Tb3VyY2VPYmplY3QoKTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKCk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1PblRyYWNrKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmaXJlZm94JzpcbiAgICAgIGlmICghZmlyZWZveFNoaW0gfHwgIWZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbikge1xuICAgICAgICBsb2dnaW5nKCdGaXJlZm94IHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIGZpcmVmb3guJyk7XG4gICAgICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICAgICAgbW9kdWxlLmV4cG9ydHMuYnJvd3NlclNoaW0gPSBmaXJlZm94U2hpbTtcblxuICAgICAgZmlyZWZveFNoaW0uc2hpbUdldFVzZXJNZWRpYSgpO1xuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCgpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbVNvdXJjZU9iamVjdCgpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKCk7XG4gICAgICBmaXJlZm94U2hpbS5zaGltT25UcmFjaygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZWRnZSc6XG4gICAgICBpZiAoIWVkZ2VTaGltIHx8ICFlZGdlU2hpbS5zaGltUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgICAgbG9nZ2luZygnTVMgZWRnZSBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBlZGdlLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIG1vZHVsZS5leHBvcnRzLmJyb3dzZXJTaGltID0gZWRnZVNoaW07XG5cbiAgICAgIGVkZ2VTaGltLnNoaW1HZXRVc2VyTWVkaWEoKTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwoKTtcbiAgICAgIGVkZ2VTaGltLnNoaW1QZWVyQ29ubmVjdGlvbigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2FmYXJpJzpcbiAgICAgIGlmICghc2FmYXJpU2hpbSkge1xuICAgICAgICBsb2dnaW5nKCdTYWZhcmkgc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgc2FmYXJpLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIG1vZHVsZS5leHBvcnRzLmJyb3dzZXJTaGltID0gc2FmYXJpU2hpbTtcblxuICAgICAgc2FmYXJpU2hpbS5zaGltR2V0VXNlck1lZGlhKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbG9nZ2luZygnVW5zdXBwb3J0ZWQgYnJvd3NlciEnKTtcbiAgfVxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcbnZhciBsb2dnaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKS5sb2c7XG52YXIgYnJvd3NlckRldGFpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpLmJyb3dzZXJEZXRhaWxzO1xuXG52YXIgY2hyb21lU2hpbSA9IHtcbiAgc2hpbU1lZGlhU3RyZWFtOiBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cuTWVkaWFTdHJlYW0gPSB3aW5kb3cuTWVkaWFTdHJlYW0gfHwgd2luZG93LndlYmtpdE1lZGlhU3RyZWFtO1xuICB9LFxuXG4gIHNoaW1PblRyYWNrOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmICEoJ29udHJhY2snIGluXG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29udHJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oZikge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBpZiAodGhpcy5fb250cmFjaykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2spO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbnRyYWNrcG9seSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbnRyYWNrID0gZik7XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbnRyYWNrcG9seSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vIG9uYWRkc3RyZWFtIGRvZXMgbm90IGZpcmUgd2hlbiBhIHRyYWNrIGlzIGFkZGVkIHRvIGFuIGV4aXN0aW5nXG4gICAgICAgICAgICAvLyBzdHJlYW0uIEJ1dCBzdHJlYW0ub25hZGR0cmFjayBpcyBpbXBsZW1lbnRlZCBzbyB3ZSB1c2UgdGhhdC5cbiAgICAgICAgICAgIGUuc3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHRyYWNrJywgZnVuY3Rpb24odGUpIHtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRlLnRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHt0cmFjazogdGUudHJhY2t9O1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0ge3RyYWNrOiB0cmFja307XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbVNvdXJjZU9iamVjdDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAod2luZG93LkhUTUxNZWRpYUVsZW1lbnQgJiZcbiAgICAgICAgISgnc3JjT2JqZWN0JyBpbiB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIC8vIFNoaW0gdGhlIHNyY09iamVjdCBwcm9wZXJ0eSwgb25jZSwgd2hlbiBIVE1MTWVkaWFFbGVtZW50IGlzIGZvdW5kLlxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLCAnc3JjT2JqZWN0Jywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3JjT2JqZWN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIC8vIFVzZSBfc3JjT2JqZWN0IGFzIGEgcHJpdmF0ZSBwcm9wZXJ0eSBmb3IgdGhpcyBzaGltXG4gICAgICAgICAgICB0aGlzLl9zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnNyYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RyZWFtKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3JjID0gJyc7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gcmVjcmVhdGUgdGhlIGJsb2IgdXJsIHdoZW4gYSB0cmFjayBpcyBhZGRlZCBvclxuICAgICAgICAgICAgLy8gcmVtb3ZlZC4gRG9pbmcgaXQgbWFudWFsbHkgc2luY2Ugd2Ugd2FudCB0byBhdm9pZCBhIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIHN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdhZGR0cmFjaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5zcmMpIHtcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGYuc3JjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWxmLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ3JlbW92ZXRyYWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLnNyYykge1xuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZi5zcmMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbGYuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAvLyBUaGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LlxuICAgIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICAvLyBUcmFuc2xhdGUgaWNlVHJhbnNwb3J0UG9saWN5IHRvIGljZVRyYW5zcG9ydHMsXG4gICAgICAgIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTQ4NjlcbiAgICAgICAgLy8gdGhpcyB3YXMgZml4ZWQgaW4gTTU2IGFsb25nIHdpdGggdW5wcmVmaXhpbmcgUlRDUGVlckNvbm5lY3Rpb24uXG4gICAgICAgIGxvZ2dpbmcoJ1BlZXJDb25uZWN0aW9uJyk7XG4gICAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgICBwY0NvbmZpZy5pY2VUcmFuc3BvcnRzID0gcGNDb25maWcuaWNlVHJhbnNwb3J0UG9saWN5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7XG4gICAgICB9O1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSA9IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcbiAgICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgICBpZiAod2Via2l0UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLCAnZ2VuZXJhdGVDZXJ0aWZpY2F0ZScsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb3JpZ0dldFN0YXRzID0gUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLFxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAvLyBJZiBzZWxlY3RvciBpcyBhIGZ1bmN0aW9uIHRoZW4gd2UgYXJlIGluIHRoZSBvbGQgc3R5bGUgc3RhdHMgc28ganVzdFxuICAgICAgLy8gcGFzcyBiYWNrIHRoZSBvcmlnaW5hbCBnZXRTdGF0cyBmb3JtYXQgdG8gYXZvaWQgYnJlYWtpbmcgb2xkIHVzZXJzLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gc3BlYy1zdHlsZSBnZXRTdGF0cyBpcyBzdXBwb3J0ZWQsIHJldHVybiB0aG9zZSB3aGVuIGNhbGxlZCB3aXRoXG4gICAgICAvLyBlaXRoZXIgbm8gYXJndW1lbnRzIG9yIHRoZSBzZWxlY3RvciBhcmd1bWVudCBpcyBudWxsLlxuICAgICAgaWYgKG9yaWdHZXRTdGF0cy5sZW5ndGggPT09IDAgJiYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIFtdKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpeENocm9tZVN0YXRzXyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBzdGFuZGFyZFJlcG9ydCA9IHt9O1xuICAgICAgICB2YXIgcmVwb3J0cyA9IHJlc3BvbnNlLnJlc3VsdCgpO1xuICAgICAgICByZXBvcnRzLmZvckVhY2goZnVuY3Rpb24ocmVwb3J0KSB7XG4gICAgICAgICAgdmFyIHN0YW5kYXJkU3RhdHMgPSB7XG4gICAgICAgICAgICBpZDogcmVwb3J0LmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiByZXBvcnQudGltZXN0YW1wLFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICAgICAgICAgIHJlbW90ZWNhbmRpZGF0ZTogJ3JlbW90ZS1jYW5kaWRhdGUnXG4gICAgICAgICAgICB9W3JlcG9ydC50eXBlXSB8fCByZXBvcnQudHlwZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVwb3J0Lm5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBzdGFuZGFyZFN0YXRzW25hbWVdID0gcmVwb3J0LnN0YXQobmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RhbmRhcmRSZXBvcnRbc3RhbmRhcmRTdGF0cy5pZF0gPSBzdGFuZGFyZFN0YXRzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RhbmRhcmRSZXBvcnQ7XG4gICAgICB9O1xuXG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoT2JqZWN0LmtleXMoc3RhdHMpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm5ba2V5LCBzdGF0c1trZXldXTtcbiAgICAgICAgfSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlcl8gPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGFyZ3NbMV0obWFrZU1hcFN0YXRzKGZpeENocm9tZVN0YXRzXyhyZXNwb25zZSkpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIFtzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyXyxcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBwcm9taXNlLXN1cHBvcnRcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgb3JpZ0dldFN0YXRzLmFwcGx5KHNlbGYsIFtcbiAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShtYWtlTWFwU3RhdHMoZml4Q2hyb21lU3RhdHNfKHJlc3BvbnNlKSkpO1xuICAgICAgICAgIH0sIHJlamVjdF0pO1xuICAgICAgfSkudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgIH07XG5cbiAgICAvLyBhZGQgcHJvbWlzZSBzdXBwb3J0IC0tIG5hdGl2ZWx5IGF2YWlsYWJsZSBpbiBDaHJvbWUgNTFcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUxKSB7XG4gICAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbmF0aXZlTWV0aG9kLmFwcGx5KHNlbGYsIFthcmdzWzBdLCByZXNvbHZlLCByZWplY3RdKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFyZ3NbMV0uYXBwbHkobnVsbCwgW10pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgYXJnc1syXS5hcHBseShudWxsLCBbZXJyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcHJvbWlzZSBzdXBwb3J0IGZvciBjcmVhdGVPZmZlciBhbmQgY3JlYXRlQW5zd2VyLiBBdmFpbGFibGUgKHdpdGhvdXRcbiAgICAvLyBidWdzKSBzaW5jZSBNNTI6IGNyYnVnLzYxOTI4OVxuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNTIpIHtcbiAgICAgIFsnY3JlYXRlT2ZmZXInLCAnY3JlYXRlQW5zd2VyJ10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbcmVzb2x2ZSwgcmVqZWN0LCBvcHRzXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2hpbSBpbXBsaWNpdCBjcmVhdGlvbiBvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24vUlRDSWNlQ2FuZGlkYXRlXG4gICAgWydzZXRMb2NhbERlc2NyaXB0aW9uJywgJ3NldFJlbW90ZURlc2NyaXB0aW9uJywgJ2FkZEljZUNhbmRpZGF0ZSddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gbmV3ICgobWV0aG9kID09PSAnYWRkSWNlQ2FuZGlkYXRlJykgP1xuICAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZSA6IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbikoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgIC8vIHN1cHBvcnQgZm9yIGFkZEljZUNhbmRpZGF0ZShudWxsIG9yIHVuZGVmaW5lZClcbiAgICB2YXIgbmF0aXZlQWRkSWNlQ2FuZGlkYXRlID1cbiAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZTtcbiAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgICAgICAgYXJndW1lbnRzWzFdLmFwcGx5KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVBZGRJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59O1xuXG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGltTWVkaWFTdHJlYW06IGNocm9tZVNoaW0uc2hpbU1lZGlhU3RyZWFtLFxuICBzaGltT25UcmFjazogY2hyb21lU2hpbS5zaGltT25UcmFjayxcbiAgc2hpbVNvdXJjZU9iamVjdDogY2hyb21lU2hpbS5zaGltU291cmNlT2JqZWN0LFxuICBzaGltUGVlckNvbm5lY3Rpb246IGNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uLFxuICBzaGltR2V0VXNlck1lZGlhOiByZXF1aXJlKCcuL2dldHVzZXJtZWRpYScpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvY2hyb21lX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcbnZhciBsb2dnaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKS5sb2c7XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjb25zdHJhaW50c1RvQ2hyb21lXyA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAodHlwZW9mIGMgIT09ICdvYmplY3QnIHx8IGMubWFuZGF0b3J5IHx8IGMub3B0aW9uYWwpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgY2MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlcXVpcmUnIHx8IGtleSA9PT0gJ2FkdmFuY2VkJyB8fCBrZXkgPT09ICdtZWRpYVNvdXJjZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHIgPSAodHlwZW9mIGNba2V5XSA9PT0gJ29iamVjdCcpID8gY1trZXldIDoge2lkZWFsOiBjW2tleV19O1xuICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygci5leGFjdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgci5taW4gPSByLm1heCA9IHIuZXhhY3Q7XG4gICAgICB9XG4gICAgICB2YXIgb2xkbmFtZV8gPSBmdW5jdGlvbihwcmVmaXgsIG5hbWUpIHtcbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgIHJldHVybiBwcmVmaXggKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5hbWUgPT09ICdkZXZpY2VJZCcpID8gJ3NvdXJjZUlkJyA6IG5hbWU7XG4gICAgICB9O1xuICAgICAgaWYgKHIuaWRlYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYy5vcHRpb25hbCA9IGNjLm9wdGlvbmFsIHx8IFtdO1xuICAgICAgICB2YXIgb2MgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiByLmlkZWFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG9jW29sZG5hbWVfKCdtaW4nLCBrZXkpXSA9IHIuaWRlYWw7XG4gICAgICAgICAgY2Mub3B0aW9uYWwucHVzaChvYyk7XG4gICAgICAgICAgb2MgPSB7fTtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnbWF4Jywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9jW29sZG5hbWVfKCcnLCBrZXkpXSA9IHIuaWRlYWw7XG4gICAgICAgICAgY2Mub3B0aW9uYWwucHVzaChvYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHIuZXhhY3QgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGNjLm1hbmRhdG9yeSA9IGNjLm1hbmRhdG9yeSB8fCB7fTtcbiAgICAgICAgY2MubWFuZGF0b3J5W29sZG5hbWVfKCcnLCBrZXkpXSA9IHIuZXhhY3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBbJ21pbicsICdtYXgnXS5mb3JFYWNoKGZ1bmN0aW9uKG1peCkge1xuICAgICAgICAgIGlmIChyW21peF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2MubWFuZGF0b3J5ID0gY2MubWFuZGF0b3J5IHx8IHt9O1xuICAgICAgICAgICAgY2MubWFuZGF0b3J5W29sZG5hbWVfKG1peCwga2V5KV0gPSByW21peF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYy5hZHZhbmNlZCkge1xuICAgICAgY2Mub3B0aW9uYWwgPSAoY2Mub3B0aW9uYWwgfHwgW10pLmNvbmNhdChjLmFkdmFuY2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIGNjO1xuICB9O1xuXG4gIHZhciBzaGltQ29uc3RyYWludHNfID0gZnVuY3Rpb24oY29uc3RyYWludHMsIGZ1bmMpIHtcbiAgICBjb25zdHJhaW50cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICBpZiAoY29uc3RyYWludHMgJiYgY29uc3RyYWludHMuYXVkaW8pIHtcbiAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHNUb0Nocm9tZV8oY29uc3RyYWludHMuYXVkaW8pO1xuICAgIH1cbiAgICBpZiAoY29uc3RyYWludHMgJiYgdHlwZW9mIGNvbnN0cmFpbnRzLnZpZGVvID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gU2hpbSBmYWNpbmdNb2RlIGZvciBtb2JpbGUsIHdoZXJlIGl0IGRlZmF1bHRzIHRvIFwidXNlclwiLlxuICAgICAgdmFyIGZhY2UgPSBjb25zdHJhaW50cy52aWRlby5mYWNpbmdNb2RlO1xuICAgICAgZmFjZSA9IGZhY2UgJiYgKCh0eXBlb2YgZmFjZSA9PT0gJ29iamVjdCcpID8gZmFjZSA6IHtpZGVhbDogZmFjZX0pO1xuXG4gICAgICBpZiAoKGZhY2UgJiYgKGZhY2UuZXhhY3QgPT09ICd1c2VyJyB8fCBmYWNlLmV4YWN0ID09PSAnZW52aXJvbm1lbnQnIHx8XG4gICAgICAgICAgICAgICAgICAgIGZhY2UuaWRlYWwgPT09ICd1c2VyJyB8fCBmYWNlLmlkZWFsID09PSAnZW52aXJvbm1lbnQnKSkgJiZcbiAgICAgICAgICAhKG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0U3VwcG9ydGVkQ29uc3RyYWludHMgJiZcbiAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0U3VwcG9ydGVkQ29uc3RyYWludHMoKS5mYWNpbmdNb2RlKSkge1xuICAgICAgICBkZWxldGUgY29uc3RyYWludHMudmlkZW8uZmFjaW5nTW9kZTtcbiAgICAgICAgaWYgKGZhY2UuZXhhY3QgPT09ICdlbnZpcm9ubWVudCcgfHwgZmFjZS5pZGVhbCA9PT0gJ2Vudmlyb25tZW50Jykge1xuICAgICAgICAgIC8vIExvb2sgZm9yIFwiYmFja1wiIGluIGxhYmVsLCBvciB1c2UgbGFzdCBjYW0gKHR5cGljYWxseSBiYWNrIGNhbSkuXG4gICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGV2aWNlcykge1xuICAgICAgICAgICAgZGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQua2luZCA9PT0gJ3ZpZGVvaW5wdXQnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgYmFjayA9IGRldmljZXMuZmluZChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYmFjaycpICE9PSAtMTtcbiAgICAgICAgICAgIH0pIHx8IChkZXZpY2VzLmxlbmd0aCAmJiBkZXZpY2VzW2RldmljZXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSBmYWNlLmV4YWN0ID8ge2V4YWN0OiBiYWNrLmRldmljZUlkfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZGVhbDogYmFjay5kZXZpY2VJZH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICAgICAgICAgIGxvZ2dpbmcoJ2Nocm9tZTogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZV8oY29uc3RyYWludHMudmlkZW8pO1xuICAgIH1cbiAgICBsb2dnaW5nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIHJldHVybiBmdW5jKGNvbnN0cmFpbnRzKTtcbiAgfTtcblxuICB2YXIgc2hpbUVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToge1xuICAgICAgICBQZXJtaXNzaW9uRGVuaWVkRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3I6ICdPdmVyY29uc3RyYWluZWRFcnJvcidcbiAgICAgIH1bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnROYW1lLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgKHRoaXMubWVzc2FnZSAmJiAnOiAnKSArIHRoaXMubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRVc2VyTWVkaWFfID0gZnVuY3Rpb24oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIHNoaW1Db25zdHJhaW50c18oY29uc3RyYWludHMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgIG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEoYywgb25TdWNjZXNzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIG9uRXJyb3Ioc2hpbUVycm9yXyhlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZ2V0VXNlck1lZGlhXztcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZ2V0VXNlck1lZGlhIGFzIGEgUHJvbWlzZS5cbiAgdmFyIGdldFVzZXJNZWRpYVByb21pc2VfID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMgPSB7XG4gICAgICBnZXRVc2VyTWVkaWE6IGdldFVzZXJNZWRpYVByb21pc2VfLFxuICAgICAgZW51bWVyYXRlRGV2aWNlczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgdmFyIGtpbmRzID0ge2F1ZGlvOiAnYXVkaW9pbnB1dCcsIHZpZGVvOiAndmlkZW9pbnB1dCd9O1xuICAgICAgICAgIHJldHVybiBNZWRpYVN0cmVhbVRyYWNrLmdldFNvdXJjZXMoZnVuY3Rpb24oZGV2aWNlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLm1hcChmdW5jdGlvbihkZXZpY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtsYWJlbDogZGV2aWNlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmRzW2RldmljZS5raW5kXSxcbiAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6ICcnfTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIEEgc2hpbSBmb3IgZ2V0VXNlck1lZGlhIG1ldGhvZCBvbiB0aGUgbWVkaWFEZXZpY2VzIG9iamVjdC5cbiAgLy8gVE9ETyhLYXB0ZW5KYW5zc29uKSByZW1vdmUgb25jZSBpbXBsZW1lbnRlZCBpbiBDaHJvbWUgc3RhYmxlLlxuICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cykge1xuICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYVByb21pc2VfKGNvbnN0cmFpbnRzKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIEV2ZW4gdGhvdWdoIENocm9tZSA0NSBoYXMgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBhbmQgYSBnZXRVc2VyTWVkaWFcbiAgICAvLyBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgUHJvbWlzZSwgaXQgZG9lcyBub3QgYWNjZXB0IHNwZWMtc3R5bGVcbiAgICAvLyBjb25zdHJhaW50cy5cbiAgICB2YXIgb3JpZ0dldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY3MpIHtcbiAgICAgIHJldHVybiBzaGltQ29uc3RyYWludHNfKGNzLCBmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBvcmlnR2V0VXNlck1lZGlhKGMpLnRoZW4oZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgaWYgKGMuYXVkaW8gJiYgIXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCB8fFxuICAgICAgICAgICAgICBjLnZpZGVvICYmICFzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignJywgJ05vdEZvdW5kRXJyb3InKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChzaGltRXJyb3JfKGUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLy8gRHVtbXkgZGV2aWNlY2hhbmdlIGV2ZW50IG1ldGhvZHMuXG4gIC8vIFRPRE8oS2FwdGVuSmFuc3NvbikgcmVtb3ZlIG9uY2UgaW1wbGVtZW50ZWQgaW4gQ2hyb21lIHN0YWJsZS5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBsb2dnaW5nKCdEdW1teSBtZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciBjYWxsZWQuJyk7XG4gICAgfTtcbiAgfVxuICBpZiAodHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxvZ2dpbmcoJ0R1bW15IG1lZGlhRGV2aWNlcy5yZW1vdmVFdmVudExpc3RlbmVyIGNhbGxlZC4nKTtcbiAgICB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvZ2V0dXNlcm1lZGlhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTRFBVdGlscyA9IHJlcXVpcmUoJ3NkcCcpO1xudmFyIGJyb3dzZXJEZXRhaWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKS5icm93c2VyRGV0YWlscztcblxudmFyIGVkZ2VTaGltID0ge1xuICBzaGltUGVlckNvbm5lY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cuUlRDSWNlR2F0aGVyZXIpIHtcbiAgICAgIC8vIE9SVEMgZGVmaW5lcyBhbiBSVENJY2VDYW5kaWRhdGUgb2JqZWN0IGJ1dCBubyBjb25zdHJ1Y3Rvci5cbiAgICAgIC8vIE5vdCBpbXBsZW1lbnRlZCBpbiBFZGdlLlxuICAgICAgaWYgKCF3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlKSB7XG4gICAgICAgIHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBPUlRDIGRvZXMgbm90IGhhdmUgYSBzZXNzaW9uIGRlc2NyaXB0aW9uIG9iamVjdCBidXRcbiAgICAgIC8vIG90aGVyIGJyb3dzZXJzIChpLmUuIENocm9tZSkgdGhhdCB3aWxsIHN1cHBvcnQgYm90aCBQQyBhbmQgT1JUQ1xuICAgICAgLy8gaW4gdGhlIGZ1dHVyZSBtaWdodCBoYXZlIHRoaXMgZGVmaW5lZCBhbHJlYWR5LlxuICAgICAgaWYgKCF3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyB0aGlzIGFkZHMgYW4gYWRkaXRpb25hbCBldmVudCBsaXN0ZW5lciB0byBNZWRpYVN0cmFja1RyYWNrIHRoYXQgc2lnbmFsc1xuICAgICAgLy8gd2hlbiBhIHRyYWNrcyBlbmFibGVkIHByb3BlcnR5IHdhcyBjaGFuZ2VkLiBXb3JrYXJvdW5kIGZvciBhIGJ1ZyBpblxuICAgICAgLy8gYWRkU3RyZWFtLCBzZWUgYmVsb3cuIE5vIGxvbmdlciByZXF1aXJlZCBpbiAxNTAyNStcbiAgICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgMTUwMjUpIHtcbiAgICAgICAgdmFyIG9yaWdNU1RFbmFibGVkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgICAgIE1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLCAnZW5hYmxlZCcpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJywge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIG9yaWdNU1RFbmFibGVkLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHZhciBldiA9IG5ldyBFdmVudCgnZW5hYmxlZCcpO1xuICAgICAgICAgICAgZXYuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB2YXIgX2V2ZW50VGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgWydhZGRFdmVudExpc3RlbmVyJywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnZGlzcGF0Y2hFdmVudCddXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgICBzZWxmW21ldGhvZF0gPSBfZXZlbnRUYXJnZXRbbWV0aG9kXS5iaW5kKF9ldmVudFRhcmdldCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMub25pY2VjYW5kaWRhdGUgPSBudWxsO1xuICAgICAgdGhpcy5vbmFkZHN0cmVhbSA9IG51bGw7XG4gICAgICB0aGlzLm9udHJhY2sgPSBudWxsO1xuICAgICAgdGhpcy5vbnJlbW92ZXN0cmVhbSA9IG51bGw7XG4gICAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgdGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICB0aGlzLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgdGhpcy5vbm5lZ290aWF0aW9ubmVlZGVkID0gbnVsbDtcbiAgICAgIHRoaXMub25kYXRhY2hhbm5lbCA9IG51bGw7XG5cbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zID0gW107XG4gICAgICB0aGlzLnJlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICAgIHRoaXMuZ2V0TG9jYWxTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmxvY2FsU3RyZWFtcztcbiAgICAgIH07XG4gICAgICB0aGlzLmdldFJlbW90ZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYucmVtb3RlU3RyZWFtcztcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubG9jYWxEZXNjcmlwdGlvbiA9IG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgc2RwOiAnJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICBzZHA6ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2lnbmFsaW5nU3RhdGUgPSAnc3RhYmxlJztcbiAgICAgIHRoaXMuaWNlQ29ubmVjdGlvblN0YXRlID0gJ25ldyc7XG4gICAgICB0aGlzLmljZUdhdGhlcmluZ1N0YXRlID0gJ25ldyc7XG5cbiAgICAgIHRoaXMuaWNlT3B0aW9ucyA9IHtcbiAgICAgICAgZ2F0aGVyUG9saWN5OiAnYWxsJyxcbiAgICAgICAgaWNlU2VydmVyczogW11cbiAgICAgIH07XG4gICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgc3dpdGNoIChjb25maWcuaWNlVHJhbnNwb3J0UG9saWN5KSB7XG4gICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICBjYXNlICdyZWxheSc6XG4gICAgICAgICAgICB0aGlzLmljZU9wdGlvbnMuZ2F0aGVyUG9saWN5ID0gY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgLy8gRklYTUU6IHJlbW92ZSBvbmNlIGltcGxlbWVudGF0aW9uIGFuZCBzcGVjIGhhdmUgYWRkZWQgdGhpcy5cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ljZVRyYW5zcG9ydFBvbGljeSBcIm5vbmVcIiBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIGRvbid0IHNldCBpY2VUcmFuc3BvcnRQb2xpY3kuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51c2luZ0J1bmRsZSA9IGNvbmZpZyAmJiBjb25maWcuYnVuZGxlUG9saWN5ID09PSAnbWF4LWJ1bmRsZSc7XG5cbiAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgLy8gRWRnZSBkb2VzIG5vdCBsaWtlXG4gICAgICAgIC8vIDEpIHN0dW46XG4gICAgICAgIC8vIDIpIHR1cm46IHRoYXQgZG9lcyBub3QgaGF2ZSBhbGwgb2YgdHVybjpob3N0OnBvcnQ/dHJhbnNwb3J0PXVkcFxuICAgICAgICAvLyAzKSB0dXJuOiB3aXRoIGlwdjYgYWRkcmVzc2VzXG4gICAgICAgIHZhciBpY2VTZXJ2ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25maWcuaWNlU2VydmVycykpO1xuICAgICAgICB0aGlzLmljZU9wdGlvbnMuaWNlU2VydmVycyA9IGljZVNlcnZlcnMuZmlsdGVyKGZ1bmN0aW9uKHNlcnZlcikge1xuICAgICAgICAgIGlmIChzZXJ2ZXIgJiYgc2VydmVyLnVybHMpIHtcbiAgICAgICAgICAgIHZhciB1cmxzID0gc2VydmVyLnVybHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHVybHMgPSBbdXJsc107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzID0gdXJscy5maWx0ZXIoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgIHJldHVybiAodXJsLmluZGV4T2YoJ3R1cm46JykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgIHVybC5pbmRleE9mKCd0cmFuc3BvcnQ9dWRwJykgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgICB1cmwuaW5kZXhPZigndHVybjpbJykgPT09IC0xKSB8fFxuICAgICAgICAgICAgICAgICAgKHVybC5pbmRleE9mKCdzdHVuOicpID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPj0gMTQzOTMpO1xuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICByZXR1cm4gISF1cmxzO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAvLyBwZXItdHJhY2sgaWNlR2F0aGVycywgaWNlVHJhbnNwb3J0cywgZHRsc1RyYW5zcG9ydHMsIHJ0cFNlbmRlcnMsIC4uLlxuICAgICAgLy8gZXZlcnl0aGluZyB0aGF0IGlzIG5lZWRlZCB0byBkZXNjcmliZSBhIFNEUCBtLWxpbmUuXG4gICAgICB0aGlzLnRyYW5zY2VpdmVycyA9IFtdO1xuXG4gICAgICAvLyBzaW5jZSB0aGUgaWNlR2F0aGVyZXIgaXMgY3VycmVudGx5IGNyZWF0ZWQgaW4gY3JlYXRlT2ZmZXIgYnV0IHdlXG4gICAgICAvLyBtdXN0IG5vdCBlbWl0IGNhbmRpZGF0ZXMgdW50aWwgYWZ0ZXIgc2V0TG9jYWxEZXNjcmlwdGlvbiB3ZSBidWZmZXJcbiAgICAgIC8vIHRoZW0gaW4gdGhpcyBhcnJheS5cbiAgICAgIHRoaXMuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlciA9IFtdO1xuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBpZiAodGhpcy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoc2VsZi5sb2NhbERlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAvLyBGSVhNRTogbmVlZCB0byBhcHBseSBpY2UgY2FuZGlkYXRlcyBpbiBhIHdheSB3aGljaCBpcyBhc3luYyBidXRcbiAgICAgIC8vIGluLW9yZGVyXG4gICAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgZW5kID0gIWV2ZW50LmNhbmRpZGF0ZSB8fCBPYmplY3Qua2V5cyhldmVudC5jYW5kaWRhdGUpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgaWYgKGVuZCkge1xuICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgc2VjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChzZWN0aW9uc1tqXS5pbmRleE9mKCdcXHJcXG5hPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHNlY3Rpb25zW2pdICs9ICdhPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VjdGlvbnNbZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXggKyAxXSArPVxuICAgICAgICAgICAgICAnYT0nICsgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSArICdcXHJcXG4nO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHAgPSBzZWN0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWV2ZW50LmNhbmRpZGF0ZSAmJiBzZWxmLmljZUdhdGhlcmluZ1N0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgdmFyIGNvbXBsZXRlID0gc2VsZi50cmFuc2NlaXZlcnMuZXZlcnkoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJlxuICAgICAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLnN0YXRlID09PSAnY29tcGxldGVkJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoY29tcGxldGUgJiYgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZUNoYW5nZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgICBzZWxmLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyID0gW107XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uID49IDE1MDI1KSB7XG4gICAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENsb25lIGlzIG5lY2Vzc2FyeSBmb3IgbG9jYWwgZGVtb3MgbW9zdGx5LCBhdHRhY2hpbmcgZGlyZWN0bHlcbiAgICAgICAgLy8gdG8gdHdvIGRpZmZlcmVudCBzZW5kZXJzIGRvZXMgbm90IHdvcmsgKGJ1aWxkIDEwNTQ3KS5cbiAgICAgICAgLy8gRml4ZWQgaW4gMTUwMjUgKG9yIGVhcmxpZXIpXG4gICAgICAgIHZhciBjbG9uZWRTdHJlYW0gPSBzdHJlYW0uY2xvbmUoKTtcbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGlkeCkge1xuICAgICAgICAgIHZhciBjbG9uZWRUcmFjayA9IGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKVtpZHhdO1xuICAgICAgICAgIHRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2VuYWJsZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgY2xvbmVkVHJhY2suZW5hYmxlZCA9IGV2ZW50LmVuYWJsZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvY2FsU3RyZWFtcy5wdXNoKGNsb25lZFN0cmVhbSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXliZUZpcmVOZWdvdGlhdGlvbk5lZWRlZCgpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgdmFyIGlkeCA9IHRoaXMubG9jYWxTdHJlYW1zLmluZGV4T2Yoc3RyZWFtKTtcbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICB0aGlzLmxvY2FsU3RyZWFtcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTZW5kZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHJldHVybiAhIXRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgICAgIH0pXG4gICAgICAubWFwKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zY2VpdmVycy5maWx0ZXIoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgcmV0dXJuICEhdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICB9KVxuICAgICAgLm1hcChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICByZXR1cm4gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgaW50ZXJzZWN0aW9uIG9mIGxvY2FsIGFuZCByZW1vdGUgY2FwYWJpbGl0aWVzLlxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2dldENvbW1vbkNhcGFiaWxpdGllcyA9XG4gICAgICAgIGZ1bmN0aW9uKGxvY2FsQ2FwYWJpbGl0aWVzLCByZW1vdGVDYXBhYmlsaXRpZXMpIHtcbiAgICAgICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0ge1xuICAgICAgICAgICAgY29kZWNzOiBbXSxcbiAgICAgICAgICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgICAgICAgICAgZmVjTWVjaGFuaXNtczogW11cbiAgICAgICAgICB9O1xuICAgICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGxDb2RlYykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciByQ29kZWMgPSByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzW2ldO1xuICAgICAgICAgICAgICBpZiAobENvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gckNvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSAmJlxuICAgICAgICAgICAgICAgICAgbENvZGVjLmNsb2NrUmF0ZSA9PT0gckNvZGVjLmNsb2NrUmF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIG51bWJlciBvZiBjaGFubmVscyBpcyB0aGUgaGlnaGVzdCBjb21tb24gbnVtYmVyIG9mIGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgckNvZGVjLm51bUNoYW5uZWxzID0gTWF0aC5taW4obENvZGVjLm51bUNoYW5uZWxzLFxuICAgICAgICAgICAgICAgICAgICByQ29kZWMubnVtQ2hhbm5lbHMpO1xuICAgICAgICAgICAgICAgIC8vIHB1c2ggckNvZGVjIHNvIHdlIHJlcGx5IHdpdGggb2ZmZXJlciBwYXlsb2FkIHR5cGVcbiAgICAgICAgICAgICAgICBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLnB1c2gockNvZGVjKTtcblxuICAgICAgICAgICAgICAgIC8vIGRldGVybWluZSBjb21tb24gZmVlZGJhY2sgbWVjaGFuaXNtc1xuICAgICAgICAgICAgICAgIHJDb2RlYy5ydGNwRmVlZGJhY2sgPSByQ29kZWMucnRjcEZlZWRiYWNrLmZpbHRlcihmdW5jdGlvbihmYikge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsQ29kZWMucnRjcEZlZWRiYWNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsQ29kZWMucnRjcEZlZWRiYWNrW2pdLnR5cGUgPT09IGZiLnR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxDb2RlYy5ydGNwRmVlZGJhY2tbal0ucGFyYW1ldGVyID09PSBmYi5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiBhbHNvIG5lZWQgdG8gZGV0ZXJtaW5lIC5wYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgLy8gIHNlZSBodHRwczovL2dpdGh1Yi5jb20vb3BlbnBlZXIvb3J0Yy9pc3N1ZXMvNTY5XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnNcbiAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obEhlYWRlckV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3RlQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgaSsrKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgckhlYWRlckV4dGVuc2lvbiA9IHJlbW90ZUNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgaWYgKGxIZWFkZXJFeHRlbnNpb24udXJpID09PSBySGVhZGVyRXh0ZW5zaW9uLnVyaSkge1xuICAgICAgICAgICAgICAgICAgICBjb21tb25DYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5wdXNoKHJIZWFkZXJFeHRlbnNpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gRklYTUU6IGZlY01lY2hhbmlzbXNcbiAgICAgICAgICByZXR1cm4gY29tbW9uQ2FwYWJpbGl0aWVzO1xuICAgICAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIElDRSBnYXRoZXJlciwgSUNFIHRyYW5zcG9ydCBhbmQgRFRMUyB0cmFuc3BvcnQuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fY3JlYXRlSWNlQW5kRHRsc1RyYW5zcG9ydHMgPVxuICAgICAgICBmdW5jdGlvbihtaWQsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgdmFyIGljZUdhdGhlcmVyID0gbmV3IFJUQ0ljZUdhdGhlcmVyKHNlbGYuaWNlT3B0aW9ucyk7XG4gICAgICAgICAgdmFyIGljZVRyYW5zcG9ydCA9IG5ldyBSVENJY2VUcmFuc3BvcnQoaWNlR2F0aGVyZXIpO1xuICAgICAgICAgIGljZUdhdGhlcmVyLm9ubG9jYWxjYW5kaWRhdGUgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJyk7XG4gICAgICAgICAgICBldmVudC5jYW5kaWRhdGUgPSB7c2RwTWlkOiBtaWQsIHNkcE1MaW5lSW5kZXg6IHNkcE1MaW5lSW5kZXh9O1xuXG4gICAgICAgICAgICB2YXIgY2FuZCA9IGV2dC5jYW5kaWRhdGU7XG4gICAgICAgICAgICB2YXIgZW5kID0gIWNhbmQgfHwgT2JqZWN0LmtleXMoY2FuZCkubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgLy8gRWRnZSBlbWl0cyBhbiBlbXB0eSBvYmplY3QgZm9yIFJUQ0ljZUNhbmRpZGF0ZUNvbXBsZXRl4oClXG4gICAgICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICAgIC8vIHBvbHlmaWxsIHNpbmNlIFJUQ0ljZUdhdGhlcmVyLnN0YXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpblxuICAgICAgICAgICAgICAvLyBFZGdlIDEwNTQ3IHlldC5cbiAgICAgICAgICAgICAgaWYgKGljZUdhdGhlcmVyLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpY2VHYXRoZXJlci5zdGF0ZSA9ICdjb21wbGV0ZWQnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBSVENJY2VDYW5kaWRhdGUgZG9lc24ndCBoYXZlIGEgY29tcG9uZW50LCBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICAgICAgICBjYW5kLmNvbXBvbmVudCA9IGljZVRyYW5zcG9ydC5jb21wb25lbnQgPT09ICdSVENQJyA/IDIgOiAxO1xuICAgICAgICAgICAgICBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlID0gU0RQVXRpbHMud3JpdGVDYW5kaWRhdGUoY2FuZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBsb2NhbCBkZXNjcmlwdGlvbi5cbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoc2VsZi5sb2NhbERlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgICAgICBzZWN0aW9uc1tldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCArIDFdICs9XG4gICAgICAgICAgICAgICAgICAnYT0nICsgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSArICdcXHJcXG4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VjdGlvbnNbZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXggKyAxXSArPVxuICAgICAgICAgICAgICAgICAgJ2E9ZW5kLW9mLWNhbmRpZGF0ZXNcXHJcXG4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5sb2NhbERlc2NyaXB0aW9uLnNkcCA9IHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgICAgICAgdmFyIHRyYW5zY2VpdmVycyA9IHNlbGYuX3BlbmRpbmdPZmZlciA/IHNlbGYuX3BlbmRpbmdPZmZlciA6XG4gICAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnM7XG4gICAgICAgICAgICB2YXIgY29tcGxldGUgPSB0cmFuc2NlaXZlcnMuZXZlcnkoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyICYmXG4gICAgICAgICAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5zdGF0ZSA9PT0gJ2NvbXBsZXRlZCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gRW1pdCBjYW5kaWRhdGUgaWYgbG9jYWxEZXNjcmlwdGlvbiBpcyBzZXQuXG4gICAgICAgICAgICAvLyBBbHNvIGVtaXRzIG51bGwgY2FuZGlkYXRlIHdoZW4gYWxsIGdhdGhlcmVycyBhcmUgY29tcGxldGUuXG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnbmV3JzpcbiAgICAgICAgICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW5kICYmIGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnQoJ2ljZWNhbmRpZGF0ZScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2dhdGhlcmluZyc6XG4gICAgICAgICAgICAgICAgc2VsZi5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcygpO1xuICAgICAgICAgICAgICAgIGlmICghZW5kKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbmljZWNhbmRpZGF0ZShldmVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbmljZWNhbmRpZGF0ZShuZXcgRXZlbnQoJ2ljZWNhbmRpZGF0ZScpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPSAnY29tcGxldGUnO1xuICAgICAgICAgICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBoYXBwZW4uLi4gY3VycmVudGx5IVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OiAvLyBuby1vcC5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGljZVRyYW5zcG9ydC5vbmljZXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLl91cGRhdGVDb25uZWN0aW9uU3RhdGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGR0bHNUcmFuc3BvcnQgPSBuZXcgUlRDRHRsc1RyYW5zcG9ydChpY2VUcmFuc3BvcnQpO1xuICAgICAgICAgIGR0bHNUcmFuc3BvcnQub25kdGxzc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgZHRsc1RyYW5zcG9ydC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBvbmVycm9yIGRvZXMgbm90IHNldCBzdGF0ZSB0byBmYWlsZWQgYnkgaXRzZWxmLlxuICAgICAgICAgICAgZHRsc1RyYW5zcG9ydC5zdGF0ZSA9ICdmYWlsZWQnO1xuICAgICAgICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpY2VHYXRoZXJlcjogaWNlR2F0aGVyZXIsXG4gICAgICAgICAgICBpY2VUcmFuc3BvcnQ6IGljZVRyYW5zcG9ydCxcbiAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQ6IGR0bHNUcmFuc3BvcnRcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgLy8gU3RhcnQgdGhlIFJUUCBTZW5kZXIgYW5kIFJlY2VpdmVyIGZvciBhIHRyYW5zY2VpdmVyLlxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX3RyYW5zY2VpdmUgPSBmdW5jdGlvbih0cmFuc2NlaXZlcixcbiAgICAgICAgc2VuZCwgcmVjdikge1xuICAgICAgdmFyIHBhcmFtcyA9IHRoaXMuX2dldENvbW1vbkNhcGFiaWxpdGllcyh0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMpO1xuICAgICAgaWYgKHNlbmQgJiYgdHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICBwYXJhbXMucnRjcCA9IHtcbiAgICAgICAgICBjbmFtZTogU0RQVXRpbHMubG9jYWxDTmFtZVxuICAgICAgICB9O1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBwYXJhbXMucnRjcC5zc3JjID0gdHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zZW5kKHBhcmFtcyk7XG4gICAgICB9XG4gICAgICBpZiAocmVjdiAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgICAvLyByZW1vdmUgUlRYIGZpZWxkIGluIEVkZ2UgMTQ5NDJcbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAgICYmIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgZGVsZXRlIHAucnR4O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICBwYXJhbXMucnRjcCA9IHtcbiAgICAgICAgICBjbmFtZTogdHJhbnNjZWl2ZXIuY25hbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcGFyYW1zLnJ0Y3Auc3NyYyA9IHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYztcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5yZWNlaXZlKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0TG9jYWxEZXNjcmlwdGlvbiA9XG4gICAgICAgIGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHZhciBzZWN0aW9ucztcbiAgICAgICAgICB2YXIgc2Vzc2lvbnBhcnQ7XG4gICAgICAgICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgICAgICAgIC8vIEZJWE1FOiBXaGF0IHdhcyB0aGUgcHVycG9zZSBvZiB0aGlzIGVtcHR5IGlmIHN0YXRlbWVudD9cbiAgICAgICAgICAgIC8vIGlmICghdGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdPZmZlcikge1xuICAgICAgICAgICAgICAvLyBWRVJZIGxpbWl0ZWQgc3VwcG9ydCBmb3IgU0RQIG11bmdpbmcuIExpbWl0ZWQgdG86XG4gICAgICAgICAgICAgIC8vICogY2hhbmdpbmcgdGhlIG9yZGVyIG9mIGNvZGVjc1xuICAgICAgICAgICAgICBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoZGVzY3JpcHRpb24uc2RwKTtcbiAgICAgICAgICAgICAgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBjYXBzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgc2VsZi5fcGVuZGluZ09mZmVyW3NkcE1MaW5lSW5kZXhdLmxvY2FsQ2FwYWJpbGl0aWVzID0gY2FwcztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgICAgICAgIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgICAgICBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgaXNJY2VMaXRlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICAgICAgICAgJ2E9aWNlLWxpdGUnKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgICAgICAgdmFyIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgICAgICAgIHZhciBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICAgICAgICB2YXIgaWNlVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0O1xuICAgICAgICAgICAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgICAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuICAgICAgICAgICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgICAgICAgIHZhciByZWplY3RlZCA9IG1lZGlhU2VjdGlvbi5zcGxpdCgnXFxuJywgMSlbMF1cbiAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcsIDIpWzFdID09PSAnMCc7XG5cbiAgICAgICAgICAgICAgaWYgKCFyZWplY3RlZCAmJiAhdHJhbnNjZWl2ZXIuaXNEYXRhY2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1vdGVJY2VQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW90ZUR0bHNQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0RHRsc1BhcmFtZXRlcnMoXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0ljZUxpdGUpIHtcbiAgICAgICAgICAgICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzLnJvbGUgPSAnc2VydmVyJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYudXNpbmdCdW5kbGUgfHwgc2RwTUxpbmVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGlzSWNlTGl0ZSA/ICdjb250cm9sbGluZycgOiAnY29udHJvbGxlZCcpO1xuICAgICAgICAgICAgICAgICAgZHRsc1RyYW5zcG9ydC5zdGFydChyZW1vdGVEdGxzUGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHNlbGYuX2dldENvbW1vbkNhcGFiaWxpdGllcyhsb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzKTtcblxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBSVENSdHBTZW5kZXIuIFRoZSBSVENSdHBSZWNlaXZlciBmb3IgdGhpc1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zY2VpdmVyIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCBpbiBzZXRSZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHRyYW5zY2VpdmVyLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY29kZWNzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5sb2NhbERlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgdHlwZTogZGVzY3JpcHRpb24udHlwZSxcbiAgICAgICAgICAgIHNkcDogZGVzY3JpcHRpb24uc2RwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzd2l0Y2ggKGRlc2NyaXB0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ29mZmVyJzpcbiAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ2hhdmUtbG9jYWwtb2ZmZXInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbnN3ZXInOlxuICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnc3RhYmxlJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAgICAgICAgICdcIicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIGEgc3VjY2VzcyBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIGVtaXQgSUNFIGNhbmRpZGF0ZXMgYWZ0ZXIgaXRcbiAgICAgICAgICAvLyBoYXMgYmVlbiBleGVjdXRlZC4gT3RoZXJ3aXNlLCBlbWl0IGNhbGxiYWNrIGFmdGVyIHRoZSBQcm9taXNlIGlzXG4gICAgICAgICAgLy8gcmVzb2x2ZWQuXG4gICAgICAgICAgdmFyIGhhc0NhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY2IgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPT09ICduZXcnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdnYXRoZXJpbmcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMoKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIHAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPT09ICduZXcnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdnYXRoZXJpbmcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFVzdWFsbHkgY2FuZGlkYXRlcyB3aWxsIGJlIGVtaXR0ZWQgZWFybGllci5cbiAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoc2VsZi5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcy5iaW5kKHNlbGYpLCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbiA9XG4gICAgICAgIGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgIHZhciBzdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICB2YXIgcmVjZWl2ZXJMaXN0ID0gW107XG4gICAgICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhkZXNjcmlwdGlvbi5zZHApO1xuICAgICAgICAgIHZhciBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgICAgdmFyIGlzSWNlTGl0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAgICAgICAnYT1pY2UtbGl0ZScpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgdGhpcy51c2luZ0J1bmRsZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAgICAgICAnYT1ncm91cDpCVU5ETEUgJykubGVuZ3RoID4gMDtcbiAgICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAgICAgICAgICAgdmFyIG1saW5lID0gbGluZXNbMF0uc3Vic3RyKDIpLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIga2luZCA9IG1saW5lWzBdO1xuICAgICAgICAgICAgdmFyIHJlamVjdGVkID0gbWxpbmVbMV0gPT09ICcwJztcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBTRFBVdGlscy5nZXREaXJlY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG5cbiAgICAgICAgICAgIHZhciBtaWQgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1pZDonKTtcbiAgICAgICAgICAgIGlmIChtaWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIG1pZCA9IG1pZFswXS5zdWJzdHIoNik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtaWQgPSBTRFBVdGlscy5nZW5lcmF0ZUlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVqZWN0IGRhdGFjaGFubmVscyB3aGljaCBhcmUgbm90IGltcGxlbWVudGVkIHlldC5cbiAgICAgICAgICAgIGlmIChraW5kID09PSAnYXBwbGljYXRpb24nICYmIG1saW5lWzJdID09PSAnRFRMUy9TQ1RQJykge1xuICAgICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICBtaWQ6IG1pZCxcbiAgICAgICAgICAgICAgICBpc0RhdGFjaGFubmVsOiB0cnVlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRyYW5zY2VpdmVyO1xuICAgICAgICAgICAgdmFyIGljZUdhdGhlcmVyO1xuICAgICAgICAgICAgdmFyIGljZVRyYW5zcG9ydDtcbiAgICAgICAgICAgIHZhciBkdGxzVHJhbnNwb3J0O1xuICAgICAgICAgICAgdmFyIHJ0cFNlbmRlcjtcbiAgICAgICAgICAgIHZhciBydHBSZWNlaXZlcjtcbiAgICAgICAgICAgIHZhciBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgdmFyIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICAgICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXM7XG5cbiAgICAgICAgICAgIHZhciB0cmFjaztcbiAgICAgICAgICAgIC8vIEZJWE1FOiBlbnN1cmUgdGhlIG1lZGlhU2VjdGlvbiBoYXMgcnRjcC1tdXggc2V0LlxuICAgICAgICAgICAgdmFyIHJlbW90ZUNhcGFiaWxpdGllcyA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICAgICAgICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnM7XG4gICAgICAgICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnM7XG4gICAgICAgICAgICBpZiAoIXJlamVjdGVkKSB7XG4gICAgICAgICAgICAgIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBzZXNzaW9ucGFydCk7XG4gICAgICAgICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzLnJvbGUgPSAnY2xpZW50JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgICAgICAgIFNEUFV0aWxzLnBhcnNlUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG5cbiAgICAgICAgICAgIHZhciBjbmFtZTtcbiAgICAgICAgICAgIC8vIEdldHMgdGhlIGZpcnN0IFNTUkMuIE5vdGUgdGhhdCB3aXRoIFJUWCB0aGVyZSBtaWdodCBiZSBtdWx0aXBsZVxuICAgICAgICAgICAgLy8gU1NSQ3MuXG4gICAgICAgICAgICB2YXIgcmVtb3RlU3NyYyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c3NyYzonKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouYXR0cmlidXRlID09PSAnY25hbWUnO1xuICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgaWYgKHJlbW90ZVNzcmMpIHtcbiAgICAgICAgICAgICAgY25hbWUgPSByZW1vdGVTc3JjLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaXNDb21wbGV0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgICAgICAnYT1lbmQtb2YtY2FuZGlkYXRlcycsIHNlc3Npb25wYXJ0KS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgdmFyIGNhbmRzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1jYW5kaWRhdGU6JylcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhbmQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY2FuZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmQuY29tcG9uZW50ID09PSAnMSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJyAmJiAhcmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHRyYW5zcG9ydHMgPSBzZWxmLnVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID8ge1xuICAgICAgICAgICAgICAgIGljZUdhdGhlcmVyOiBzZWxmLnRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlcixcbiAgICAgICAgICAgICAgICBpY2VUcmFuc3BvcnQ6IHNlbGYudHJhbnNjZWl2ZXJzWzBdLmljZVRyYW5zcG9ydCxcbiAgICAgICAgICAgICAgICBkdGxzVHJhbnNwb3J0OiBzZWxmLnRyYW5zY2VpdmVyc1swXS5kdGxzVHJhbnNwb3J0XG4gICAgICAgICAgICAgIH0gOiBzZWxmLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cyhtaWQsIHNkcE1MaW5lSW5kZXgpO1xuXG4gICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlICYmICghc2VsZi51c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSkge1xuICAgICAgICAgICAgICAgIHRyYW5zcG9ydHMuaWNlVHJhbnNwb3J0LnNldFJlbW90ZUNhbmRpZGF0ZXMoY2FuZHMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSBSVENSdHBSZWNlaXZlci5nZXRDYXBhYmlsaXRpZXMoa2luZCk7XG5cbiAgICAgICAgICAgICAgLy8gZmlsdGVyIFJUWCB1bnRpbCBhZGRpdGlvbmFsIHN0dWZmIG5lZWRlZCBmb3IgUlRYIGlzIGltcGxlbWVudGVkXG4gICAgICAgICAgICAgIC8vIGluIGFkYXB0ZXIuanNcbiAgICAgICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlYy5uYW1lICE9PSAncnR4JztcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBbe1xuICAgICAgICAgICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDIpICogMTAwMVxuICAgICAgICAgICAgICB9XTtcblxuICAgICAgICAgICAgICBydHBSZWNlaXZlciA9IG5ldyBSVENSdHBSZWNlaXZlcih0cmFuc3BvcnRzLmR0bHNUcmFuc3BvcnQsIGtpbmQpO1xuXG4gICAgICAgICAgICAgIHRyYWNrID0gcnRwUmVjZWl2ZXIudHJhY2s7XG4gICAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXJdKTtcbiAgICAgICAgICAgICAgLy8gRklYTUU6IG5vdCBjb3JyZWN0IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIHN0cmVhbXMgYnV0IHRoYXQgaXNcbiAgICAgICAgICAgICAgLy8gbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgaW4gdGhpcyBzaGltLlxuICAgICAgICAgICAgICBzdHJlYW0uYWRkVHJhY2sodHJhY2spO1xuXG4gICAgICAgICAgICAgIC8vIEZJWE1FOiBsb29rIGF0IGRpcmVjdGlvbi5cbiAgICAgICAgICAgICAgaWYgKHNlbGYubG9jYWxTdHJlYW1zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIHNlbGYubG9jYWxTdHJlYW1zWzBdLmdldFRyYWNrcygpLmxlbmd0aCA+PSBzZHBNTGluZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FsVHJhY2s7XG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsVHJhY2sgPSBzZWxmLmxvY2FsU3RyZWFtc1swXS5nZXRBdWRpb1RyYWNrcygpWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgICAgbG9jYWxUcmFjayA9IHNlbGYubG9jYWxTdHJlYW1zWzBdLmdldFZpZGVvVHJhY2tzKClbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFRyYWNrKSB7XG4gICAgICAgICAgICAgICAgICBydHBTZW5kZXIgPSBuZXcgUlRDUnRwU2VuZGVyKGxvY2FsVHJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICBpY2VHYXRoZXJlcjogdHJhbnNwb3J0cy5pY2VHYXRoZXJlcixcbiAgICAgICAgICAgICAgICBpY2VUcmFuc3BvcnQ6IHRyYW5zcG9ydHMuaWNlVHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQ6IHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydCxcbiAgICAgICAgICAgICAgICBsb2NhbENhcGFiaWxpdGllczogbG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzOiByZW1vdGVDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICAgICAgcnRwU2VuZGVyOiBydHBTZW5kZXIsXG4gICAgICAgICAgICAgICAgcnRwUmVjZWl2ZXI6IHJ0cFJlY2VpdmVyLFxuICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgICAgICAgICAgbWlkOiBtaWQsXG4gICAgICAgICAgICAgICAgY25hbWU6IGNuYW1lLFxuICAgICAgICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM6IHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVyczogcmVjdkVuY29kaW5nUGFyYW1ldGVyc1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgUlRDUnRwUmVjZWl2ZXIgbm93LiBUaGUgUlRQU2VuZGVyIGlzIHN0YXJ0ZWQgaW5cbiAgICAgICAgICAgICAgLy8gc2V0TG9jYWxEZXNjcmlwdGlvbi5cbiAgICAgICAgICAgICAgc2VsZi5fdHJhbnNjZWl2ZShzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInICYmICFyZWplY3RlZCkge1xuICAgICAgICAgICAgICB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICAgICAgICBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICAgICAgICBpY2VUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQ7XG4gICAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0O1xuICAgICAgICAgICAgICBydHBTZW5kZXIgPSB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgICAgICAgICAgIHJ0cFJlY2VpdmVyID0gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgICAgICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVtb3RlQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uY25hbWUgPSBjbmFtZTtcblxuICAgICAgICAgICAgICBpZiAoKGlzSWNlTGl0ZSB8fCBpc0NvbXBsZXRlKSAmJiBjYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpY2VUcmFuc3BvcnQuc2V0UmVtb3RlQ2FuZGlkYXRlcyhjYW5kcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFzZWxmLnVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpY2VUcmFuc3BvcnQuc3RhcnQoaWNlR2F0aGVyZXIsIHJlbW90ZUljZVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICdjb250cm9sbGluZycpO1xuICAgICAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQuc3RhcnQocmVtb3RlRHRsc1BhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZi5fdHJhbnNjZWl2ZSh0cmFuc2NlaXZlcixcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ3NlbmRyZWN2JyB8fCBkaXJlY3Rpb24gPT09ICdyZWN2b25seScsXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKTtcblxuICAgICAgICAgICAgICBpZiAocnRwUmVjZWl2ZXIgJiZcbiAgICAgICAgICAgICAgICAgIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSkge1xuICAgICAgICAgICAgICAgIHRyYWNrID0gcnRwUmVjZWl2ZXIudHJhY2s7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlcl0pO1xuICAgICAgICAgICAgICAgIHN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IGFjdHVhbGx5IHRoZSByZWNlaXZlciBzaG91bGQgYmUgY3JlYXRlZCBsYXRlci5cbiAgICAgICAgICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMucmVtb3RlRGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHBcbiAgICAgICAgICB9O1xuICAgICAgICAgIHN3aXRjaCAoZGVzY3JpcHRpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnb2ZmZXInOlxuICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnaGF2ZS1yZW1vdGUtb2ZmZXInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbnN3ZXInOlxuICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnc3RhYmxlJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAgICAgICAgICdcIicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RyZWFtLmdldFRyYWNrcygpLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZi5yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2FkZHN0cmVhbScpO1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgIGlmIChzZWxmLm9uYWRkc3RyZWFtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLm9uYWRkc3RyZWFtKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2sgPSBpdGVtWzBdO1xuICAgICAgICAgICAgICAgIHZhciByZWNlaXZlciA9IGl0ZW1bMV07XG4gICAgICAgICAgICAgICAgdmFyIHRyYWNrRXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgICAgdHJhY2tFdmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgICAgICAgIHRyYWNrRXZlbnQucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgICAgICAgICB0cmFja0V2ZW50LnN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQodHJhY2tFdmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub250cmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub250cmFjayh0cmFja0V2ZW50KTtcbiAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgLyogbm90IHlldFxuICAgICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0KSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEZJWE1FOiBjbGVhbiB1cCB0cmFja3MsIGxvY2FsIHN0cmVhbXMsIHJlbW90ZSBzdHJlYW1zLCBldGNcbiAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdjbG9zZWQnKTtcbiAgICB9O1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzaWduYWxpbmcgc3RhdGUuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdXBkYXRlU2lnbmFsaW5nU3RhdGUgPVxuICAgICAgICBmdW5jdGlvbihuZXdTdGF0ZSkge1xuICAgICAgICAgIHRoaXMuc2lnbmFsaW5nU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3NpZ25hbGluZ3N0YXRlY2hhbmdlJyk7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICBpZiAodGhpcy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIC8vIERldGVybWluZSB3aGV0aGVyIHRvIGZpcmUgdGhlIG5lZ290aWF0aW9ubmVlZGVkIGV2ZW50LlxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkID1cbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRmlyZSBhd2F5IChmb3Igbm93KS5cbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICBpZiAodGhpcy5vbm5lZ290aWF0aW9ubmVlZGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9ubmVnb3RpYXRpb25uZWVkZWQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY29ubmVjdGlvbiBzdGF0ZS5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBuZXdTdGF0ZTtcbiAgICAgIHZhciBzdGF0ZXMgPSB7XG4gICAgICAgICduZXcnOiAwLFxuICAgICAgICBjbG9zZWQ6IDAsXG4gICAgICAgIGNvbm5lY3Rpbmc6IDAsXG4gICAgICAgIGNoZWNraW5nOiAwLFxuICAgICAgICBjb25uZWN0ZWQ6IDAsXG4gICAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgICAgZmFpbGVkOiAwXG4gICAgICB9O1xuICAgICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICBzdGF0ZXNbdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnN0YXRlXSsrO1xuICAgICAgICBzdGF0ZXNbdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgIH0pO1xuICAgICAgLy8gSUNFVHJhbnNwb3J0LmNvbXBsZXRlZCBhbmQgY29ubmVjdGVkIGFyZSB0aGUgc2FtZSBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgc3RhdGVzLmNvbm5lY3RlZCArPSBzdGF0ZXMuY29tcGxldGVkO1xuXG4gICAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgICAgaWYgKHN0YXRlcy5mYWlsZWQgPiAwKSB7XG4gICAgICAgIG5ld1N0YXRlID0gJ2ZhaWxlZCc7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb25uZWN0aW5nID4gMCB8fCBzdGF0ZXMuY2hlY2tpbmcgPiAwKSB7XG4gICAgICAgIG5ld1N0YXRlID0gJ2Nvbm5lY3RpbmcnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMuZGlzY29ubmVjdGVkID4gMCkge1xuICAgICAgICBuZXdTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMubmV3ID4gMCkge1xuICAgICAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGVkID4gMCB8fCBzdGF0ZXMuY29tcGxldGVkID4gMCkge1xuICAgICAgICBuZXdTdGF0ZSA9ICdjb25uZWN0ZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3U3RhdGUgIT09IHNlbGYuaWNlQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgICAgIHNlbGYuaWNlQ29ubmVjdGlvblN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIGlmICh0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZShldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdPZmZlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZU9mZmVyIGNhbGxlZCB3aGlsZSB0aGVyZSBpcyBhIHBlbmRpbmcgb2ZmZXIuJyk7XG4gICAgICB9XG4gICAgICB2YXIgb2ZmZXJPcHRpb25zO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgb2ZmZXJPcHRpb25zID0gYXJndW1lbnRzWzJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhY2tzID0gW107XG4gICAgICB2YXIgbnVtQXVkaW9UcmFja3MgPSAwO1xuICAgICAgdmFyIG51bVZpZGVvVHJhY2tzID0gMDtcbiAgICAgIC8vIERlZmF1bHQgdG8gc2VuZHJlY3YuXG4gICAgICBpZiAodGhpcy5sb2NhbFN0cmVhbXMubGVuZ3RoKSB7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzID0gdGhpcy5sb2NhbFN0cmVhbXNbMF0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGg7XG4gICAgICAgIG51bVZpZGVvVHJhY2tzID0gdGhpcy5sb2NhbFN0cmVhbXNbMF0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGg7XG4gICAgICB9XG4gICAgICAvLyBEZXRlcm1pbmUgbnVtYmVyIG9mIGF1ZGlvIGFuZCB2aWRlbyB0cmFja3Mgd2UgbmVlZCB0byBzZW5kL3JlY3YuXG4gICAgICBpZiAob2ZmZXJPcHRpb25zKSB7XG4gICAgICAgIC8vIFJlamVjdCBDaHJvbWUgbGVnYWN5IGNvbnN0cmFpbnRzLlxuICAgICAgICBpZiAob2ZmZXJPcHRpb25zLm1hbmRhdG9yeSB8fCBvZmZlck9wdGlvbnMub3B0aW9uYWwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnTGVnYWN5IG1hbmRhdG9yeS9vcHRpb25hbCBjb25zdHJhaW50cyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxvY2FsU3RyZWFtcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gUHVzaCBsb2NhbCBzdHJlYW1zLlxuICAgICAgICB0aGlzLmxvY2FsU3RyZWFtc1swXS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2tzLnB1c2goe1xuICAgICAgICAgICAga2luZDogdHJhY2sua2luZCxcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgICAgIHdhbnRSZWNlaXZlOiB0cmFjay5raW5kID09PSAnYXVkaW8nID9cbiAgICAgICAgICAgICAgICBudW1BdWRpb1RyYWNrcyA+IDAgOiBudW1WaWRlb1RyYWNrcyA+IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgbnVtQXVkaW9UcmFja3MtLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyYWNrLmtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIG51bVZpZGVvVHJhY2tzLS07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0ZSBNLWxpbmVzIGZvciByZWN2b25seSBzdHJlYW1zLlxuICAgICAgd2hpbGUgKG51bUF1ZGlvVHJhY2tzID4gMCB8fCBudW1WaWRlb1RyYWNrcyA+IDApIHtcbiAgICAgICAgaWYgKG51bUF1ZGlvVHJhY2tzID4gMCkge1xuICAgICAgICAgIHRyYWNrcy5wdXNoKHtcbiAgICAgICAgICAgIGtpbmQ6ICdhdWRpbycsXG4gICAgICAgICAgICB3YW50UmVjZWl2ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bVZpZGVvVHJhY2tzID4gMCkge1xuICAgICAgICAgIHRyYWNrcy5wdXNoKHtcbiAgICAgICAgICAgIGtpbmQ6ICd2aWRlbycsXG4gICAgICAgICAgICB3YW50UmVjZWl2ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHNkcCA9IFNEUFV0aWxzLndyaXRlU2Vzc2lvbkJvaWxlcnBsYXRlKCk7XG4gICAgICB2YXIgdHJhbnNjZWl2ZXJzID0gW107XG4gICAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbihtbGluZSwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAvLyBGb3IgZWFjaCB0cmFjaywgY3JlYXRlIGFuIGljZSBnYXRoZXJlciwgaWNlIHRyYW5zcG9ydCxcbiAgICAgICAgLy8gZHRscyB0cmFuc3BvcnQsIHBvdGVudGlhbGx5IHJ0cHNlbmRlciBhbmQgcnRwcmVjZWl2ZXIuXG4gICAgICAgIHZhciB0cmFjayA9IG1saW5lLnRyYWNrO1xuICAgICAgICB2YXIga2luZCA9IG1saW5lLmtpbmQ7XG4gICAgICAgIHZhciBtaWQgPSBTRFBVdGlscy5nZW5lcmF0ZUlkZW50aWZpZXIoKTtcblxuICAgICAgICB2YXIgdHJhbnNwb3J0cyA9IHNlbGYudXNpbmdCdW5kbGUgJiYgc2RwTUxpbmVJbmRleCA+IDAgPyB7XG4gICAgICAgICAgaWNlR2F0aGVyZXI6IHRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlcixcbiAgICAgICAgICBpY2VUcmFuc3BvcnQ6IHRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQsXG4gICAgICAgICAgZHRsc1RyYW5zcG9ydDogdHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnRcbiAgICAgICAgfSA6IHNlbGYuX2NyZWF0ZUljZUFuZER0bHNUcmFuc3BvcnRzKG1pZCwgc2RwTUxpbmVJbmRleCk7XG5cbiAgICAgICAgdmFyIGxvY2FsQ2FwYWJpbGl0aWVzID0gUlRDUnRwU2VuZGVyLmdldENhcGFiaWxpdGllcyhraW5kKTtcbiAgICAgICAgLy8gZmlsdGVyIFJUWCB1bnRpbCBhZGRpdGlvbmFsIHN0dWZmIG5lZWRlZCBmb3IgUlRYIGlzIGltcGxlbWVudGVkXG4gICAgICAgIC8vIGluIGFkYXB0ZXIuanNcbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2RlYy5uYW1lICE9PSAncnR4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgICAgICAgIC8vIHdvcmsgYXJvdW5kIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD02NTUyXG4gICAgICAgICAgLy8gYnkgYWRkaW5nIGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTFcbiAgICAgICAgICBpZiAoY29kZWMubmFtZSA9PT0gJ0gyNjQnICYmXG4gICAgICAgICAgICAgIGNvZGVjLnBhcmFtZXRlcnNbJ2xldmVsLWFzeW1tZXRyeS1hbGxvd2VkJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9ICcxJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBydHBTZW5kZXI7XG4gICAgICAgIHZhciBydHBSZWNlaXZlcjtcblxuICAgICAgICAvLyBnZW5lcmF0ZSBhbiBzc3JjIG5vdywgdG8gYmUgdXNlZCBsYXRlciBpbiBydHBTZW5kZXIuc2VuZFxuICAgICAgICB2YXIgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMSkgKiAxMDAxXG4gICAgICAgIH1dO1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICBydHBTZW5kZXIgPSBuZXcgUlRDUnRwU2VuZGVyKHRyYWNrLCB0cmFuc3BvcnRzLmR0bHNUcmFuc3BvcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1saW5lLndhbnRSZWNlaXZlKSB7XG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSBuZXcgUlRDUnRwUmVjZWl2ZXIodHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0LCBraW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSA9IHtcbiAgICAgICAgICBpY2VHYXRoZXJlcjogdHJhbnNwb3J0cy5pY2VHYXRoZXJlcixcbiAgICAgICAgICBpY2VUcmFuc3BvcnQ6IHRyYW5zcG9ydHMuaWNlVHJhbnNwb3J0LFxuICAgICAgICAgIGR0bHNUcmFuc3BvcnQ6IHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydCxcbiAgICAgICAgICBsb2NhbENhcGFiaWxpdGllczogbG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgICAgIHJ0cFNlbmRlcjogcnRwU2VuZGVyLFxuICAgICAgICAgIHJ0cFJlY2VpdmVyOiBydHBSZWNlaXZlcixcbiAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgIG1pZDogbWlkLFxuICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM6IHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMsXG4gICAgICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVyczogbnVsbFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy51c2luZ0J1bmRsZSkge1xuICAgICAgICBzZHAgKz0gJ2E9Z3JvdXA6QlVORExFICcgKyB0cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5taWQ7XG4gICAgICAgIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuICAgICAgfVxuICAgICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24obWxpbmUsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgdmFyIHRyYW5zY2VpdmVyID0gdHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcywgJ29mZmVyJywgc2VsZi5sb2NhbFN0cmVhbXNbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3BlbmRpbmdPZmZlciA9IHRyYW5zY2VpdmVycztcbiAgICAgIHZhciBkZXNjID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICAgIHR5cGU6ICdvZmZlcicsXG4gICAgICAgIHNkcDogc2RwXG4gICAgICB9KTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVzYyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSgpO1xuICAgICAgaWYgKHRoaXMudXNpbmdCdW5kbGUpIHtcbiAgICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgdGhpcy50cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5taWQ7XG4gICAgICAgIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIuaXNEYXRhY2hhbm5lbCkge1xuICAgICAgICAgIHNkcCArPSAnbT1hcHBsaWNhdGlvbiAwIERUTFMvU0NUUCA1MDAwXFxyXFxuJyArXG4gICAgICAgICAgICAgICdjPUlOIElQNCAwLjAuMC4wXFxyXFxuJyArXG4gICAgICAgICAgICAgICdhPW1pZDonICsgdHJhbnNjZWl2ZXIubWlkICsgJ1xcclxcbic7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gb2YgY2FwYWJpbGl0aWVzLlxuICAgICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0gc2VsZi5fZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbih0cmFuc2NlaXZlciwgY29tbW9uQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgJ2Fuc3dlcicsIHNlbGYubG9jYWxTdHJlYW1zWzBdKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZGVzYyA9IG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgICB0eXBlOiAnYW5zd2VyJyxcbiAgICAgICAgc2RwOiBzZHBcbiAgICAgIH0pO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMF0sIDAsIGRlc2MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXNjKTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbihjYW5kaWRhdGUpIHtcbiAgICAgIGlmICghY2FuZGlkYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0aGlzLnRyYW5zY2VpdmVyc1tqXS5pY2VUcmFuc3BvcnQuYWRkUmVtb3RlQ2FuZGlkYXRlKHt9KTtcbiAgICAgICAgICBpZiAodGhpcy51c2luZ0J1bmRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1MaW5lSW5kZXggPSBjYW5kaWRhdGUuc2RwTUxpbmVJbmRleDtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZS5zZHBNaWQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2NlaXZlcnNbaV0ubWlkID09PSBjYW5kaWRhdGUuc2RwTWlkKSB7XG4gICAgICAgICAgICAgIG1MaW5lSW5kZXggPSBpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYW5zY2VpdmVyID0gdGhpcy50cmFuc2NlaXZlcnNbbUxpbmVJbmRleF07XG4gICAgICAgIGlmICh0cmFuc2NlaXZlcikge1xuICAgICAgICAgIHZhciBjYW5kID0gT2JqZWN0LmtleXMoY2FuZGlkYXRlLmNhbmRpZGF0ZSkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgIFNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlKGNhbmRpZGF0ZS5jYW5kaWRhdGUpIDoge307XG4gICAgICAgICAgLy8gSWdub3JlIENocm9tZSdzIGludmFsaWQgY2FuZGlkYXRlcyBzaW5jZSBFZGdlIGRvZXMgbm90IGxpa2UgdGhlbS5cbiAgICAgICAgICBpZiAoY2FuZC5wcm90b2NvbCA9PT0gJ3RjcCcgJiYgKGNhbmQucG9ydCA9PT0gMCB8fCBjYW5kLnBvcnQgPT09IDkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIElnbm9yZSBSVENQIGNhbmRpZGF0ZXMsIHdlIGFzc3VtZSBSVENQLU1VWC5cbiAgICAgICAgICBpZiAoY2FuZC5jb21wb25lbnQgIT09ICcxJykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuYWRkUmVtb3RlQ2FuZGlkYXRlKGNhbmQpO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIHRoZSByZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHRoaXMucmVtb3RlRGVzY3JpcHRpb24uc2RwKTtcbiAgICAgICAgICBzZWN0aW9uc1ttTGluZUluZGV4ICsgMV0gKz0gKGNhbmQudHlwZSA/IGNhbmRpZGF0ZS5jYW5kaWRhdGUudHJpbSgpXG4gICAgICAgICAgICAgIDogJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnKSArICdcXHJcXG4nO1xuICAgICAgICAgIHRoaXMucmVtb3RlRGVzY3JpcHRpb24uc2RwID0gc2VjdGlvbnMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICBbJ3J0cFNlbmRlcicsICdydHBSZWNlaXZlcicsICdpY2VHYXRoZXJlcicsICdpY2VUcmFuc3BvcnQnLFxuICAgICAgICAgICAgJ2R0bHNUcmFuc3BvcnQnXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICBpZiAodHJhbnNjZWl2ZXJbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godHJhbnNjZWl2ZXJbbWV0aG9kXS5nZXRTdGF0cygpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICBhcmd1bWVudHNbMV07XG4gICAgICB2YXIgZml4U3RhdHNUeXBlID0gZnVuY3Rpb24oc3RhdCkge1xuICAgICAgICBzdGF0LnR5cGUgPSB7XG4gICAgICAgICAgaW5ib3VuZHJ0cDogJ2luYm91bmQtcnRwJyxcbiAgICAgICAgICBvdXRib3VuZHJ0cDogJ291dGJvdW5kLXJ0cCcsXG4gICAgICAgICAgY2FuZGlkYXRlcGFpcjogJ2NhbmRpZGF0ZS1wYWlyJyxcbiAgICAgICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICAgICAgcmVtb3RlY2FuZGlkYXRlOiAncmVtb3RlLWNhbmRpZGF0ZSdcbiAgICAgICAgfVtzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICAgICAgcmV0dXJuIHN0YXQ7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgLy8gc2hpbSBnZXRTdGF0cyB3aXRoIG1hcGxpa2Ugc3VwcG9ydFxuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgcmVzLmZvckVhY2goZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2lkXS50eXBlID0gZml4U3RhdHNUeXBlKHJlc3VsdFtpZF0pO1xuICAgICAgICAgICAgICByZXN1bHRzLnNldChpZCwgcmVzdWx0W2lkXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAwLCByZXN1bHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBlZGdlU2hpbS5zaGltUGVlckNvbm5lY3Rpb24sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZWRnZV9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaGltRXJyb3JfID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB7UGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJ31bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnQsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBnZXRVc2VyTWVkaWEgZXJyb3Igc2hpbS5cbiAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBvcmlnR2V0VXNlck1lZGlhKGMpLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0dXNlcm1lZGlhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBicm93c2VyRGV0YWlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJykuYnJvd3NlckRldGFpbHM7XG5cbnZhciBmaXJlZm94U2hpbSA9IHtcbiAgc2hpbU9uVHJhY2s6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgISgnb250cmFjaycgaW5cbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb250cmFjaycsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb250cmFjaztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX29udHJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbnRyYWNrKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb250cmFja3BvbHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayA9IGYpO1xuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb250cmFja3BvbHkgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgndHJhY2snKTtcbiAgICAgICAgICAgICAgZXZlbnQudHJhY2sgPSB0cmFjaztcbiAgICAgICAgICAgICAgZXZlbnQucmVjZWl2ZXIgPSB7dHJhY2s6IHRyYWNrfTtcbiAgICAgICAgICAgICAgZXZlbnQuc3RyZWFtcyA9IFtlLnN0cmVhbV07XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBzaGltU291cmNlT2JqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBGaXJlZm94IGhhcyBzdXBwb3J0ZWQgbW96U3JjT2JqZWN0IHNpbmNlIEZGMjIsIHVucHJlZml4ZWQgaW4gNDIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAod2luZG93LkhUTUxNZWRpYUVsZW1lbnQgJiZcbiAgICAgICAgISgnc3JjT2JqZWN0JyBpbiB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgICAgIC8vIFNoaW0gdGhlIHNyY09iamVjdCBwcm9wZXJ0eSwgb25jZSwgd2hlbiBIVE1MTWVkaWFFbGVtZW50IGlzIGZvdW5kLlxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLCAnc3JjT2JqZWN0Jywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3pTcmNPYmplY3Q7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5tb3pTcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgISh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gfHxcbiAgICAgICAgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uKSkge1xuICAgICAgcmV0dXJuOyAvLyBwcm9iYWJseSBtZWRpYS5wZWVyY29ubmVjdGlvbi5lbmFibGVkPWZhbHNlIGluIGFib3V0OmNvbmZpZ1xuICAgIH1cbiAgICAvLyBUaGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LlxuICAgIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDM4KSB7XG4gICAgICAgICAgLy8gLnVybHMgaXMgbm90IHN1cHBvcnRlZCBpbiBGRiA8IDM4LlxuICAgICAgICAgIC8vIGNyZWF0ZSBSVENJY2VTZXJ2ZXJzIHdpdGggYSBzaW5nbGUgdXJsLlxuICAgICAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICAgICAgICB2YXIgbmV3SWNlU2VydmVycyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldO1xuICAgICAgICAgICAgICBpZiAoc2VydmVyLmhhc093blByb3BlcnR5KCd1cmxzJykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlcnZlci51cmxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbmV3U2VydmVyID0ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlci51cmxzW2pdXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgaWYgKHNlcnZlci51cmxzW2pdLmluZGV4T2YoJ3R1cm4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTZXJ2ZXIudXNlcm5hbWUgPSBzZXJ2ZXIudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NlcnZlci5jcmVkZW50aWFsID0gc2VydmVyLmNyZWRlbnRpYWw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2gobmV3U2VydmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzID0gbmV3SWNlU2VydmVycztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBtb3pSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7XG4gICAgICB9O1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSA9IG1velJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcblxuICAgICAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgICAgIGlmIChtb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbW96UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA9IG1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzaGltIGF3YXkgbmVlZCBmb3Igb2Jzb2xldGUgUlRDSWNlQ2FuZGlkYXRlL1JUQ1Nlc3Npb25EZXNjcmlwdGlvbi5cbiAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuZXcgKChtZXRob2QgPT09ICdhZGRJY2VDYW5kaWRhdGUnKSA/XG4gICAgICAgICAgICAgICAgUlRDSWNlQ2FuZGlkYXRlIDogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKShhcmd1bWVudHNbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgYWRkSWNlQ2FuZGlkYXRlKG51bGwgb3IgdW5kZWZpbmVkKVxuICAgIHZhciBuYXRpdmVBZGRJY2VDYW5kaWRhdGUgPVxuICAgICAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBhcmd1bWVudHNbMV0uYXBwbHkobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgdmFyIG1ha2VNYXBTdGF0cyA9IGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgT2JqZWN0LmtleXMoc3RhdHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIG1hcC5zZXQoa2V5LCBzdGF0c1trZXldKTtcbiAgICAgICAgbWFwW2tleV0gPSBzdGF0c1trZXldO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH07XG5cbiAgICB2YXIgbW9kZXJuU3RhdHNUeXBlcyA9IHtcbiAgICAgIGluYm91bmRydHA6ICdpbmJvdW5kLXJ0cCcsXG4gICAgICBvdXRib3VuZHJ0cDogJ291dGJvdW5kLXJ0cCcsXG4gICAgICBjYW5kaWRhdGVwYWlyOiAnY2FuZGlkYXRlLXBhaXInLFxuICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgcmVtb3RlY2FuZGlkYXRlOiAncmVtb3RlLWNhbmRpZGF0ZSdcbiAgICB9O1xuXG4gICAgdmFyIG5hdGl2ZUdldFN0YXRzID0gUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBvblN1Y2MsIG9uRXJyKSB7XG4gICAgICByZXR1cm4gbmF0aXZlR2V0U3RhdHMuYXBwbHkodGhpcywgW3NlbGVjdG9yIHx8IG51bGxdKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzdGF0cykge1xuICAgICAgICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDgpIHtcbiAgICAgICAgICAgIHN0YXRzID0gbWFrZU1hcFN0YXRzKHN0YXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA1MyAmJiAhb25TdWNjKSB7XG4gICAgICAgICAgICAvLyBTaGltIG9ubHkgcHJvbWlzZSBnZXRTdGF0cyB3aXRoIHNwZWMtaHlwaGVucyBpbiB0eXBlIG5hbWVzXG4gICAgICAgICAgICAvLyBMZWF2ZSBjYWxsYmFjayB2ZXJzaW9uIGFsb25lOyBtaXNjIG9sZCB1c2VzIG9mIGZvckVhY2ggYmVmb3JlIE1hcFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc3RhdHMuZm9yRWFjaChmdW5jdGlvbihzdGF0KSB7XG4gICAgICAgICAgICAgICAgc3RhdC50eXBlID0gbW9kZXJuU3RhdHNUeXBlc1tzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBBdm9pZCBUeXBlRXJyb3I6IFwidHlwZVwiIGlzIHJlYWQtb25seSwgaW4gb2xkIHZlcnNpb25zLiAzNC00M2lzaFxuICAgICAgICAgICAgICBzdGF0cy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXQsIGkpIHtcbiAgICAgICAgICAgICAgICBzdGF0cy5zZXQoaSwgT2JqZWN0LmFzc2lnbih7fSwgc3RhdCwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogbW9kZXJuU3RhdHNUeXBlc1tzdGF0LnR5cGVdIHx8IHN0YXQudHlwZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdGF0cztcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ob25TdWNjLCBvbkVycik7XG4gICAgfTtcbiAgfVxufTtcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaW1PblRyYWNrOiBmaXJlZm94U2hpbS5zaGltT25UcmFjayxcbiAgc2hpbVNvdXJjZU9iamVjdDogZmlyZWZveFNoaW0uc2hpbVNvdXJjZU9iamVjdCxcbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmaXJlZm94U2hpbS5zaGltUGVlckNvbm5lY3Rpb24sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2ZpcmVmb3gvZmlyZWZveF9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBsb2dnaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMnKS5sb2c7XG52YXIgYnJvd3NlckRldGFpbHMgPSByZXF1aXJlKCcuLi91dGlscycpLmJyb3dzZXJEZXRhaWxzO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2hpbUVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToge1xuICAgICAgICBTZWN1cml0eUVycm9yOiAnTm90QWxsb3dlZEVycm9yJyxcbiAgICAgICAgUGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJ1xuICAgICAgfVtlLm5hbWVdIHx8IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgJ1RoZSBvcGVyYXRpb24gaXMgaW5zZWN1cmUuJzogJ1RoZSByZXF1ZXN0IGlzIG5vdCBhbGxvd2VkIGJ5IHRoZSAnICtcbiAgICAgICAgJ3VzZXIgYWdlbnQgb3IgdGhlIHBsYXRmb3JtIGluIHRoZSBjdXJyZW50IGNvbnRleHQuJ1xuICAgICAgfVtlLm1lc3NhZ2VdIHx8IGUubWVzc2FnZSxcbiAgICAgIGNvbnN0cmFpbnQ6IGUuY29uc3RyYWludCxcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArICh0aGlzLm1lc3NhZ2UgJiYgJzogJykgKyB0aGlzLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBnZXRVc2VyTWVkaWEgY29uc3RyYWludHMgc2hpbS5cbiAgdmFyIGdldFVzZXJNZWRpYV8gPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgdmFyIGNvbnN0cmFpbnRzVG9GRjM3XyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgIGlmICh0eXBlb2YgYyAhPT0gJ29iamVjdCcgfHwgYy5yZXF1aXJlKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuICAgICAgdmFyIHJlcXVpcmUgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKGMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gY1trZXldID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/XG4gICAgICAgICAgICBjW2tleV0gOiB7aWRlYWw6IGNba2V5XX07XG4gICAgICAgIGlmIChyLm1pbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICByLm1heCAhPT0gdW5kZWZpbmVkIHx8IHIuZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcXVpcmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByLiBtaW4gPSByLm1heCA9IHIuZXhhY3Q7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNba2V5XSA9IHIuZXhhY3Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSByLmV4YWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjLmFkdmFuY2VkID0gYy5hZHZhbmNlZCB8fCBbXTtcbiAgICAgICAgICB2YXIgb2MgPSB7fTtcbiAgICAgICAgICBpZiAodHlwZW9mIHIuaWRlYWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBvY1trZXldID0ge21pbjogci5pZGVhbCwgbWF4OiByLmlkZWFsfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Nba2V5XSA9IHIuaWRlYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMuYWR2YW5jZWQucHVzaChvYyk7XG4gICAgICAgICAgZGVsZXRlIHIuaWRlYWw7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhyKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChyZXF1aXJlLmxlbmd0aCkge1xuICAgICAgICBjLnJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgICBjb25zdHJhaW50cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDM4KSB7XG4gICAgICBsb2dnaW5nKCdzcGVjOiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICAgIGlmIChjb25zdHJhaW50cy5hdWRpbykge1xuICAgICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9GRjM3Xyhjb25zdHJhaW50cy5hdWRpbyk7XG4gICAgICB9XG4gICAgICBpZiAoY29uc3RyYWludHMudmlkZW8pIHtcbiAgICAgICAgY29uc3RyYWludHMudmlkZW8gPSBjb25zdHJhaW50c1RvRkYzN18oY29uc3RyYWludHMudmlkZW8pO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnZmYzNzogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgfVxuICAgIHJldHVybiBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIG9uRXJyb3Ioc2hpbUVycm9yXyhlKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGdldFVzZXJNZWRpYSBhcyBhIFByb21pc2UuXG4gIHZhciBnZXRVc2VyTWVkaWFQcm9taXNlXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZ2V0VXNlck1lZGlhXyhjb25zdHJhaW50cywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTaGltIGZvciBtZWRpYURldmljZXMgb24gb2xkZXIgdmVyc2lvbnMuXG4gIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMgPSB7Z2V0VXNlck1lZGlhOiBnZXRVc2VyTWVkaWFQcm9taXNlXyxcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkgeyB9LFxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7IH1cbiAgICB9O1xuICB9XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9XG4gICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgdmFyIGluZm9zID0gW1xuICAgICAgICAgICAge2tpbmQ6ICdhdWRpb2lucHV0JywgZGV2aWNlSWQ6ICdkZWZhdWx0JywgbGFiZWw6ICcnLCBncm91cElkOiAnJ30sXG4gICAgICAgICAgICB7a2luZDogJ3ZpZGVvaW5wdXQnLCBkZXZpY2VJZDogJ2RlZmF1bHQnLCBsYWJlbDogJycsIGdyb3VwSWQ6ICcnfVxuICAgICAgICAgIF07XG4gICAgICAgICAgcmVzb2x2ZShpbmZvcyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDQxKSB7XG4gICAgLy8gV29yayBhcm91bmQgaHR0cDovL2J1Z3ppbC5sYS8xMTY5NjY1XG4gICAgdmFyIG9yZ0VudW1lcmF0ZURldmljZXMgPVxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMuYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvcmdFbnVtZXJhdGVEZXZpY2VzKCkudGhlbih1bmRlZmluZWQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDkpIHtcbiAgICB2YXIgb3JpZ0dldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIG9yaWdHZXRVc2VyTWVkaWEoYykudGhlbihmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgLy8gV29yayBhcm91bmQgaHR0cHM6Ly9idWd6aWwubGEvODAyMzI2XG4gICAgICAgIGlmIChjLmF1ZGlvICYmICFzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggfHxcbiAgICAgICAgICAgIGMudmlkZW8gJiYgIXN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xuICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVGhlIG9iamVjdCBjYW4gbm90IGJlIGZvdW5kIGhlcmUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOb3RGb3VuZEVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHNoaW1FcnJvcl8oZSkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDQpIHtcbiAgICAgIHJldHVybiBnZXRVc2VyTWVkaWFfKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICAgIH1cbiAgICAvLyBSZXBsYWNlIEZpcmVmb3ggNDQrJ3MgZGVwcmVjYXRpb24gd2FybmluZyB3aXRoIHVucHJlZml4ZWQgdmVyc2lvbi5cbiAgICBjb25zb2xlLndhcm4oJ25hdmlnYXRvci5nZXRVc2VyTWVkaWEgaGFzIGJlZW4gcmVwbGFjZWQgYnkgJyArXG4gICAgICAgICAgICAgICAgICduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYScpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2dldHVzZXJtZWRpYS5qc1xuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIHNhZmFyaVNoaW0gPSB7XG4gIC8vIFRPRE86IERyQWxleCwgc2hvdWxkIGJlIGhlcmUsIGRvdWJsZSBjaGVjayBhZ2FpbnN0IExheW91dFRlc3RzXG4gIC8vIHNoaW1PblRyYWNrOiBmdW5jdGlvbigpIHsgfSxcblxuICAvLyBUT0RPOiBvbmNlIHRoZSBiYWNrLWVuZCBmb3IgdGhlIG1hYyBwb3J0IGlzIGRvbmUsIGFkZC5cbiAgLy8gVE9ETzogY2hlY2sgZm9yIHdlYmtpdEdUSytcbiAgLy8gc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbigpIHsgfSxcblxuICBzaGltR2V0VXNlck1lZGlhOiBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYTtcbiAgfVxufTtcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaW1HZXRVc2VyTWVkaWE6IHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYVxuICAvLyBUT0RPXG4gIC8vIHNoaW1PblRyYWNrOiBzYWZhcmlTaGltLnNoaW1PblRyYWNrLFxuICAvLyBzaGltUGVlckNvbm5lY3Rpb246IHNhZmFyaVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jyb3dzZXJ9IGZyb20gJy4vZGVmaW5pdGlvbnMvQnJvd3Nlcic7XG5pbXBvcnQgU3RyZWFtVHlwZXMgZnJvbSAnLi9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcyc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuaW1wb3J0IHthdWRpbywgdmlkZW99IGZyb20gJy4vZGVmaW5pdGlvbnMvQ29kZWMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jb3JlL1VzZXInO1xuaW1wb3J0IFJvb20gZnJvbSAnLi9jb3JlL1Jvb20nO1xuaW1wb3J0IEludml0ZSBmcm9tICcuL2NvcmUvSW52aXRlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vY29yZS91dGlsL0RhdGFTeW5jJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NvcmUvdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi9jb3JlL3V0aWwvTG9nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuL2NvcmUvdXRpbC9NZWRpYSc7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG4vKipcbiAqIEVudHJ5IHBvaW50IGZvciBSZWFjaCBTREtcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY2gge1xuXHQvKipcblx0ICogQ3JlYXRlIFJlYWNoJ3MgZGF0YSBzdHJ1Y3R1cmUgd2hlcmUgdGhlIHVybCBwb2ludHMgdG8gKG1pZ2h0IG5vdCBiZSB0aGUgcm9vdCBvZiB5b3VyIG5hbWVzcGFjZSlcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge3N0cmluZ3xXZWJjb219IHVybCBUaGUgdXJsIG9mIHlvdXIgbmFtZXNwYWNlIG9yIGFuIGV4aXN0aW5nIFdlYmNvbSByZWZlcmVuY2UuXG5cdCAqIEBwYXJhbSB7Q29uZmlnfSBbY2ZnXSBSZWFjaCBjb25maWd1cmF0aW9uLiBZb3UgY2FuIHBhc3MgY29uc3RyYWludHMgaGVyZVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Jbml0IHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbjwvY2FwdGlvbj5cblx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jyk7XG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPkluaXQgYW5kIHNldCBjb25zdHJhaW50cyBmb3IgU0QgdmlkZW8gYW5kIGxvZ0xldmVsIHRvICdpbmZvJzwvY2FwdGlvbj5cblx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHQgKiAgY29uc3RyYWludHM6IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCdTRCcpLFxuXHQgKiAgbG9nTGV2ZWw6ICdJTkZPJ1xuXHQgKiB9KTtcblx0ICovXG5cdGNvbnN0cnVjdG9yKHVybCwgY2ZnID0gbnVsbCkge1xuXHRcdC8vIFNldCBzaGFyZWQgcmVmZXJlbmNlXG5cdFx0Y2FjaGUuYmFzZSA9IHVybDtcblx0XHQvLyBTZXQgc2hhcmVkIGNvbmZpZ3VyYXRpb25cblx0XHRjYWNoZS5jb25maWcgPSBjZmc7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBkZWNsYXJlZCBjYWxsYmFja3Ncblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB2ZXJzaW9ucyBvZiBTREsgYW5kIERhdGFNb2RlbC5UaGUgU2NoZW1hIHZlcnNpb24gY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgQW5kcm9pZCAmIGlPUyBTREsuXG5cdCAqIEByZXR1cm4ge3tzZGs6IHN0cmluZywgc2NoZW1hOiBzdHJpbmd9fVxuXHQgKi9cblx0c3RhdGljIGdldCB2ZXJzaW9uKCkge1xuXHRcdHJldHVybiB7c2RrOiBTREtfVkVSU0lPTiwgc2NoZW1hOiBTQ0hFTUFfVkVSU0lPTn07XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHN1cHBvcnRlZCBzdHJlYW0gdHlwZXNcblx0ICogQHJldHVybnMge1N0cmVhbVR5cGVzfVxuXHQgKi9cblx0c3RhdGljIGdldCB0eXBlcygpIHtcblx0XHRyZXR1cm4gU3RyZWFtVHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHN1cHBvcnRlZCBldmVudHNcblx0ICogQHJldHVybiB7e3Jvb206IEV2ZW50cy9Sb29tLCByZWFjaDogRXZlbnRzL1JlYWNoLCBzdHJlYW06IEV2ZW50cy9TdHJlYW19fVxuXHQgKi9cblx0c3RhdGljIGdldCBldmVudHMoKSB7XG5cdFx0cmV0dXJuIHtyb29tOiBFdmVudHMucm9vbSwgcmVhY2g6IEV2ZW50cy5yZWFjaCwgc3RyZWFtOiBFdmVudHMuc3RyZWFtLCBpbnZpdGU6IEV2ZW50cy5pbnZpdGV9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBicm93c2VyJ3MgZGV0YWlsc1xuXHQgKiBAcmV0dXJuIHtCcm93c2VyfVxuXHQgKi9cblx0c3RhdGljIGdldCBicm93c2VyKCkge1xuXHRcdHJldHVybiBicm93c2VyO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1lZGlhIHV0aWxpdHkgZnVuY3Rpb25zXG5cdCAqIEByZXR1cm4ge01lZGlhfVxuXHQgKi9cblx0c3RhdGljIGdldCBtZWRpYSgpIHtcblx0XHRyZXR1cm4gTWVkaWE7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvZGVjIHByZXNldHMgdG8gdXNlIHdoZW4gc2V0dGluZyB7QGxpbmsgQ29uZmlnI3ByZWZlcnJlZEF1ZGlvQ29kZWN9IG9yIHtAbGluayBDb25maWcjcHJlZmVycmVkVmlkZW9Db2RlY31cblx0ICogQHJldHVybiB7e2F1ZGlvOiBDb2RlYy9hdWRpbywgdmlkZW86IENvZGVjL3ZpZGVvfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgY29kZWNzKCkge1xuXHRcdHJldHVybiB7YXVkaW8sIHZpZGVvfTtcblx0fVxuXHQvKipcblx0ICogRGF0YVN5bmMgcmVmZXJlbmNlXG5cdCAqIEB0eXBlIHtXZWJjb219XG5cdCAqL1xuXHRnZXQgYmFzZSgpIHtcblx0XHRyZXR1cm4gY2FjaGUuYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29uZmlndXJhdGlvblxuXHQgKiBAdHlwZSB7Q29uZmlnfVxuXHQgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gY2FjaGUuY29uZmlnO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgVXNlclxuXHQgKiBAdHlwZSB7VXNlcn1cblx0ICovXG5cdGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiBjYWNoZS51c2VyO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyICYgU2lnbi1pbiBhcyBhIG5ldyB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgb2YgdGhlIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCBvZiB0aGUgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIgKGRlZmF1bHRzIHRvIGVtYWlsKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW1lbWJlck1lPWZhbHNlXSBrZWVwIHVzZXIgY29ubmVjdGVkID9cblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRyZWdpc3RlcihlbWFpbCwgcGFzc3dvcmQsIG5hbWUsIHJlbWVtYmVyTWUpIHtcblx0XHRyZXR1cm4gY2FjaGUuYmFzZS5jcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZClcblx0XHRcdC50aGVuKGF1dGggPT4ge1xuXHRcdFx0XHRpZihhdXRoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMubG9naW4oZW1haWwsIHBhc3N3b3JkLCBuYW1lIHx8IGVtYWlsLCByZW1lbWJlck1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+cmVnaXN0ZXInKSk7XG5cdH1cblxuXHQvKipcblx0ICogU2lnbi1pbiBhbiBleGlzdGluZyB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCBUaGUgZW1haWwgb2YgdGhlIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCBvZiB0aGUgdXNlclxuIFx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgbmFtZSBvZiB0aGUgdXNlci4gRGVmYXVsdHMgdG8gdGhlIHZhbHVlIGluIGJhc2UuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbWVtYmVyTWU9ZmFsc2VdIGtlZXAgdXNlciBjb25uZWN0ZWQgP1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdGxvZ2luKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgcmVtZW1iZXJNZSA9IGZhbHNlKSB7XG5cdFx0Ly8gRm9yY2UgbG9nb3V0IHRvIGJ5cGFzcyBXZWJjb20gYnVnXG5cdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZih0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50LmVtYWlsICE9PSBlbWFpbCkge1xuXHRcdFx0cCA9IHRoaXMubG9nb3V0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBwXG5cdFx0XHQudGhlbigoKSA9PiBjYWNoZS5iYXNlLmF1dGhXaXRoUGFzc3dvcmQoe2VtYWlsLCBwYXNzd29yZCwgcmVtZW1iZXJNZX0pKVxuXHRcdFx0LnRoZW4oYXV0aCA9PiBVc2VyLmluaXQoYXV0aC51aWQsIG5hbWUpKVxuXHRcdFx0LnRoZW4odSA9PiB7XG5cdFx0XHRcdGNhY2hlLnVzZXIgPSB1O1xuXHRcdFx0XHRyZXR1cm4gdTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofmxvZ2luJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc3VtZSBwcmV2aW91cyBzZXNzaW9uXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXI+fVxuXHQgKi9cblx0cmVzdW1lKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHQvLyBSZXN1bWUgc2Vzc2lvblxuXHRcdFx0aWYoV2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLmdldCgnc2Vzc2lvbicpKXtcblx0XHRcdFx0Y2FjaGUuYmFzZS5yZXN1bWUoKGVycm9yLCBhdXRoKSA9PiB7XG5cdFx0XHRcdFx0aWYoYXV0aCAmJiAhdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRcdFx0XHRVc2VyLmluaXQoYXV0aC51aWQpLnRoZW4odSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNhY2hlLnVzZXIgPSB1O1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHUpO1xuXHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcignTm8gc2Vzc2lvbiB0byByZXN1bWUnKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogU2lnbi1pbiBhbiBhbm9ueW1vdXMgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSB1c2VyXG5cdCAqIEBleHBlcmltZW50YWwgTm90IGNvbXBhdGlibGUgd2l0aCBzZWN1cml0eSBydWxlcyBmb3Igbm93ICh3YWl0aW5nIGZvciBhbm9ueW1vdXMgbG9naW4gc3VwcG9ydCBmcm9tIFdlYmNvbSlcblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRhbm9ueW1vdXMobmFtZSkge1xuXHRcdC8vIEZvcmNlIGxvZ291dCB0byBieXBhc3MgV2ViY29tIGJ1Z1xuXHRcdGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0aWYodGhpcy5jdXJyZW50ICYmICghdGhpcy5jdXJyZW50LmFub255bW91cyB8fCB0aGlzLmN1cnJlbnQubmFtZSAhPT0gbmFtZSkpIHtcblx0XHRcdHAgPSB0aGlzLmxvZ291dCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcFxuXHRcdFx0LnRoZW4oKCkgPT4gY2FjaGUuYmFzZS5hdXRoQW5vbnltb3VzbHkoKSlcblx0XHRcdC50aGVuKGF1dGggPT4gVXNlci5pbml0KGF1dGgudWlkLCBuYW1lKSlcblx0XHRcdC50aGVuKHUgPT4ge1xuXHRcdFx0XHRjYWNoZS51c2VyID0gdTtcblx0XHRcdFx0cmV0dXJuIHU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5hbm9ueW1vdXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogTG9nb3V0IGN1cnJlbnQgdXNlclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGxvZ291dCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdGlmKHRoaXMuY3VycmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdHAgPSBVc2VyLmRpc2Nvbm5lY3QodGhpcy5jdXJyZW50KTtcblx0XHRcdH1cblx0XHRcdHAudGhlbigoKSA9PiB7XG5cdFx0XHRcdE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcykuZm9yRWFjaChcblx0XHRcdFx0XHRldmVudCA9PiBEYXRhU3luYy5vZmYoRXZlbnRzLnJlYWNoLnRvUGF0aChldmVudCkoY2FjaGUudXNlciksIGV2ZW50KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjYWNoZS5iYXNlLmxvZ291dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y2FjaGUudXNlciA9IG51bGw7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdExvZy5lKGUpO1xuXHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgcmVnaXN0ZXJlZCB1c2Vyc1xuXHQgKiBAZXhwZXJpbWVudGFsIFNpbmNlICdzZWFyY2gnIGFuZCAncGFnaW5nJyBmZWF0dXJlcyBhcmUgbm90IHlldCBpbXBsZW1lbnRlZCBpbiBEYXRhU3luYywgdGhpcyBjYWxsIGNhbiBsZWFkIHRvIGEgbG90IGRhdGEgYmVpbmcgZXhjaGFuZ2VkIG92ZXIgdGhlIFdlYlNvY2tldC5cblx0ICogQXZvaWQgaXQgaWYgeW91ciB1c2VycyBiYXNlIGlzIHByZXR0eSBsYXJnZS5cblx0ICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVkZT1mYWxzZV0gSW5jbHVkZSBjdXJyZW50IHVzZXIgaW4gdXNlcidzIGxpc3Rcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyW10sIEVycm9yPn1cblx0ICovXG5cdHVzZXJzKGluY2x1ZGUpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdCgndXNlcnMnLCBVc2VyKVxuXHRcdFx0LnRoZW4odXNlcnMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIWluY2x1ZGUgJiYgdXNlcnMgJiYgdGhpcy5jdXJyZW50ID8gdXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci51aWQgIT09IHRoaXMuY3VycmVudC51aWQpIDogdXNlcnM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH51c2VycycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2Ygcm9vbXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxSb29tW10sIEVycm9yPn1cblx0ICovXG5cdHJvb21zKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KCdyb29tcycsIFJvb20pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofnJvb21zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBpbnZpdGVzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlW10sIEVycm9yPn1cblx0ICovXG5cdGludml0ZXMoKSB7XG5cdFx0aWYoIXRoaXMuY3VycmVudCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IGxpc3QgaW52aXRlcyB3aXRob3V0IGEgVXNlciBiZWluZyBsb2dnZWQgaW4uJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdChgXy9pbnZpdGVzLyR7dGhpcy5jdXJyZW50LnVpZH1gLCBJbnZpdGUpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofmludml0ZXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvUmVhY2h9KS4gQ2FuIGJlOlxuXHQgKiAtIFVTRVJfQURERURcblx0ICogLSBVU0VSX0NIQU5HRURcblx0ICogLSBVU0VSX1JFTU9WRURcblx0ICogLSBST09NX0FEREVEXG5cdCAqIC0gUk9PTV9DSEFOR0VEXG5cdCAqIC0gUk9PTV9SRU1PVkVEXG5cdCAqIC0gSU5WSVRFX0FEREVEXG5cdCAqIC0gSU5WSVRFX0NIQU5HRURcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnQsIHRoZSBhcmd1bWVudHMgZGVwZW5kcyBvbiB0aGUgdHlwZSBvZiBldmVudDpcblx0ICogLSBVU0VSXyo6IGNhbGxiYWNrKHtAbGluayBVc2VyfSB1KVxuXHQgKiAtIFJPT01fKjogY2FsbGJhY2soe0BsaW5rIFJvb219IHIpXG5cdCAqIC0gSU5WSVRFXyo6IGNhbGxiYWNrKHtAbGluayBJbnZpdGV9IGkpXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5RdWVyeX5jYW5jZWxDYWxsYmFja30gW2NhbmNlbENhbGxiYWNrXSBUaGUgZXJyb3IgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGFrZXMgYW4gRXJyb3IgYXMgb25seSBhcmd1bWVudFxuXHQgKi9cblx0b24oZXZlbnQsIGNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaykge1xuXHRcdGNvbnN0IHBhdGggPSBFdmVudHMucmVhY2gudG9QYXRoKGV2ZW50KShjYWNoZS51c2VyKTtcblx0XHRpZihwYXRoKSB7XG5cdFx0XHRjb25zdCBjbHMgPSBFdmVudHMucmVhY2gudG9DbGFzcyhldmVudCk7XG5cdFx0XHRjb25zdCBjYiA9IHNuYXBEYXRhID0+IHtcblx0XHRcdFx0Y29uc3QgZCA9IGNscyA/IG5ldyBjbHMoc25hcERhdGEpIDogbnVsbDtcblx0XHRcdFx0TG9nLmkoYFJlYWNofm9uKCR7ZXZlbnR9KWAsIGQpO1xuXHRcdFx0XHRjYWxsYmFjayhkKTtcblx0XHRcdH07XG5cdFx0XHREYXRhU3luYy5vbihwYXRoLCBldmVudCwgY2IsIGNhbmNlbENhbGxiYWNrKTtcblx0XHRcdGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaChjYik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyByb29tXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIHJvb20gbmFtZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2V4dHJhXSBFeHRyYSBpbmZvcm1hdGlvbnNcblx0ICogQHBhcmFtIHtib29sZWFufSBbcHVibGljUm9vbT1mYWxzZV0gSW5kaWNhdGVzIHB1YmxpYyByb29tXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFJvb20+fVxuXHQgKi9cblx0Y3JlYXRlUm9vbShuYW1lLCBleHRyYSwgcHVibGljUm9vbSA9IGZhbHNlKSB7XG5cdFx0aWYoIXRoaXMuY3VycmVudCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBhIFJvb20gd2l0aG91dCBhIFVzZXIgYmVpbmcgbG9nZ2VkIGluLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIFJvb20uY3JlYXRlKG5hbWUsIGV4dHJhLCBwdWJsaWNSb29tKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBsaXN0IG9mIGFsbCBvcGVuZWQge0BsaW5rIFBlZXJDb25uZWN0aW9ufXNcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGdldCBwZWVyQ29ubmVjdGlvbnMgKCkge1xuXHRcdHJldHVybiBjYWNoZS5wZWVyQ29ubmVjdGlvbnMuc3RhY2tzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHtAbGluayBSb29tfSBmcm9tIGl0cyBgdWlkYFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSByb29tJ3MgVUlEXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxSb29tPn1cblx0ICovXG5cdGdldFJvb20gKHVpZCkge1xuXHRcdHJldHVybiBSb29tLmdldCh1aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHtAbGluayBVc2VyfSBmcm9tIGl0cyBgdWlkYFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSB1c2VyJ3MgVUlEXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxVc2VyPn1cblx0ICovXG5cdGdldFVzZXIgKHVpZCkge1xuXHRcdHJldHVybiBVc2VyLmdldCh1aWQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY2guanMiXSwic291cmNlUm9vdCI6IiJ9
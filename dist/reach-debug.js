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
})(this, function(__WEBPACK_EXTERNAL_MODULE_32__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(100);

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
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(47)('wks');
var uid = __webpack_require__(37);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});exports.r=exports.e=exports.w=exports.i=exports.d=undefined;var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_typeof2=__webpack_require__(104),_typeof3=_interopRequireDefault(_typeof2),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var levels=['DEBUG','INFO','WARN','ERROR'],isEnabled=function isEnabled(level){return levels.indexOf(level.toUpperCase())>=levels.indexOf(_cache2.default.logLevel.toUpperCase());},gConsole=global.console,logger=function logger(method,level){for(var _len=arguments.length,messages=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){messages[_key-2]=arguments[_key];}isEnabled(level)?gConsole[method.toLowerCase()].bind(gConsole).apply(undefined,messages):function(){};},group=function group(level,message){for(var _len2=arguments.length,items=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){items[_key2-2]=arguments[_key2];}if(items.length>0){logger.bind(undefined,gConsole.group?'group':level,level)(typeof message==='string'?message:'');var values=(typeof message!=='string'?[message]:[]).concat(items);if(items.length===1&&items[0]instanceof Array&&(0,_typeof3.default)(items[0].length)!==undefined){values=items[0];}values.forEach(function(item){return logger.bind(undefined,level,level)(item);});gConsole.groupEnd&&gConsole.groupEnd();}else{logger.bind(undefined,level,level,message);}};var d=exports.d=group.bind(undefined,levels[0]);var i=exports.i=group.bind(undefined,levels[1]);var w=exports.w=group.bind(undefined,levels[2]);var e=exports.e=gConsole.error.bind(gConsole);var r=exports.r=function r(message){return function(reason){d(message,reason);return _promise2.default.reject(reason||message);};};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_Config=__webpack_require__(93),_Config2=_interopRequireDefault(_Config),_StreamManager=__webpack_require__(95),_StreamManager2=_interopRequireDefault(_StreamManager),_PeerConnectionManager=__webpack_require__(97),_PeerConnectionManager2=_interopRequireDefault(_PeerConnectionManager),_webcom=__webpack_require__(32),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _cache=null;var CacheManager=function(){function CacheManager(){(0,_classCallCheck3.default)(this,CacheManager);if(!_cache){_cache=this;}return _cache;}(0,_createClass3.default)(CacheManager,[{key:'base',set:function set(url){this._base=url instanceof _webcom2.default?url:new _webcom2.default(url);},get:function get(){return this._base;}},{key:'config',set:function set(config){if(!this._config){this._config=new _Config2.default(config);}else{this._config.assign(config);}},get:function get(){if(!this._config){this._config=new _Config2.default();}return this._config;}},{key:'user',set:function set(user){this._user=user;},get:function get(){return this._user;}},{key:'device',set:function set(device){this._device=device;},get:function get(){return this._device;}},{key:'logLevel',set:function set(level){if(/^DEBUG|INFO|WARN|ERROR$/i.test(level)){this._logLevel=level;}else if(level){throw new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)');}},get:function get(){return this._logLevel||'ERROR';}},{key:'streams',get:function get(){if(!this._streams){this._streams=new _StreamManager2.default();}return this._streams;}},{key:'peerConnections',get:function get(){if(!this._peerConnections){this._peerConnections=new _PeerConnectionManager2.default();}return this._peerConnections;}}]);return CacheManager;}();var cache=new CacheManager();exports.default=cache;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.ts=exports.onDisconnect=exports.off=exports.on=exports.list=exports.get=exports.once=exports.remove=exports.update=exports.push=exports.set=exports.eventType=undefined;var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var eventType=exports.eventType=function eventType(event){var evt=void 0;if(/_ADDED$/i.test(event)||/_PUBLISHED$/.test(event)){evt='added';}else if(/_CHANGED$/.test(event)||/_REFRESHED$/.test(event)){evt='changed';}else if(/_REMOVED$/.test(event)||/_UNPUBLISHED$/.test(event)){evt='removed';}return evt?'child_'+evt:event;};var _write=function _write(method,path,data){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path)[method](data,function(error){return error?reject(error):resolve();});});};var set=exports.set=_write.bind(undefined,'set');var push=exports.push=function push(path,data){return new _promise2.default(function(resolve,reject){var pushRef=_cache2.default.base.child(path).push(data,function(error){return error?reject(error):resolve(pushRef);});});};var update=exports.update=_write.bind(undefined,'update');var remove=exports.remove=function remove(path){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).remove(function(error){return error?reject(error):resolve();});});};var once=exports.once=function once(path,event){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).once(eventType(event),resolve,reject);});};var get=exports.get=function get(path){return once(path,'value');};var list=exports.list=function list(path,Type){for(var _len=arguments.length,params=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){params[_key-2]=arguments[_key];}return get(path).then(function(snapData){if(snapData){var values=[];snapData.forEach(function(snapChild){values.push(new(Function.prototype.bind.apply(Type,[null].concat([snapChild],params)))());});return values;}});};var on=exports.on=function on(path,event,queryCallback,cancelCallback){_cache2.default.base.child(path).on(eventType(event),queryCallback,cancelCallback);};var off=exports.off=function off(path,event,callback){_cache2.default.base.child(path).off(eventType(event),callback);};var onDisconnect=exports.onDisconnect=function onDisconnect(path){return _cache2.default.base.child(path).onDisconnect();};var ts=exports.ts=function ts(){return Date.now();};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var ctx = __webpack_require__(23);
var hide = __webpack_require__(16);
var has = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(66);
var toPrimitive = __webpack_require__(50);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(27);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(67);
var defined = __webpack_require__(41);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
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
var deprecationWarnings_ = true;

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

  /**
   * Disable or enable deprecation warnings
   * @param {!boolean} bool set to true to disable warnings.
   */
  disableWarnings: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
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
   * Shows a deprecation warning suggesting the modern and spec-compatible API.
   */
  deprecated: function(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
      return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
        ' instead.');
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
        utils.deprecated('URL.createObjectURL(stream)',
            'elem.srcObject = stream');
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
  deprecated: utils.deprecated,
  disableLog: utils.disableLog,
  disableWarnings: utils.disableWarnings,
  extractVersion: utils.extractVersion,
  shimCreateObjectURL: utils.shimCreateObjectURL,
  detectBrowser: utils.detectBrowser.bind(utils)
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var OPENED=exports.OPENED='OPENED';var CLOSED=exports.CLOSED='CLOSED';var CLOSING=exports.CLOSING='CLOSING';var CONNECTED=exports.CONNECTED='CONNECTED';var NOT_CONNECTED=exports.NOT_CONNECTED='NOT_CONNECTED';var WAS_CONNECTED=exports.WAS_CONNECTED='WAS_CONNECTED';var OWNER=exports.OWNER='OWNER';var MODERATOR=exports.MODERATOR='MODERATOR';var PARTICIPANT=exports.PARTICIPANT='PARTICIPANT';var NONE=exports.NONE='NONE';var ONGOING=exports.ONGOING='ONGOING';var ACCEPTED=exports.ACCEPTED='ACCEPTED';var REJECTED=exports.REJECTED='REJECTED';var CANCELED=exports.CANCELED='CANCELED';

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(33);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(75);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_constants=__webpack_require__(20),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Participant=__webpack_require__(61),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(60),_Message2=_interopRequireDefault(_Message),_Local=__webpack_require__(94),_Local2=_interopRequireDefault(_Local),_Invite=__webpack_require__(40),_Invite2=_interopRequireDefault(_Invite),_Events=__webpack_require__(31),Events=_interopRequireWildcard(_Events),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _joinRoom=function _joinRoom(room,role){var uid=_cache2.default.user.uid.split('/').join(':');if(room.status!==_constants.CLOSED){var participant={status:_constants.CONNECTED,userAgent:_cache2.default.userAgent,_joined:DataSync.ts()};if(role){participant.role=role;}Log.w('Room#join',[participant,'_/rooms/'+room.uid+'/participants/'+uid]);return DataSync.update('_/rooms/'+room.uid+'/participants/'+uid,participant).then(function(){return room;});}return _promise2.default.reject(new Error('can\'t join a close room'));};var Room=function(){function Room(snapData,roomUid){(0,_classCallCheck3.default)(this,Room);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:roomUid});}this.uid=values.uid;this.name=values.name;this.localStream={};this.owner=values.owner;this.status=values.status;this._public=!!values._public;this.extra=values.extra;this._callbacks={};}(0,_createClass3.default)(Room,[{key:'participants',value:function participants(){return DataSync.list('_/rooms/'+this.uid+'/participants',_Participant2.default,this.uid);}},{key:'messages',value:function messages(){return DataSync.list('_/rooms/'+this.uid+'/messages',_Message2.default,this.uid);}},{key:'_streams',value:function _streams(localStreams){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can list a Room\'s streams.'));}return DataSync.get('_/rooms/'+this.uid+'/streams').then(function(snapData){var values=snapData.val();Log.d('Rooms~_streams',values);if(values){return(0,_keys2.default)(values).map(function(key){return(0,_assign2.default)({uid:key,roomId:_this.uid},values[key]);});}return[];}).then(function(streams){return streams.filter(function(stream){return localStreams===(stream.device===_cache2.default.device&&stream.from===_cache2.default.user.uid);});}).then(function(streams){return streams.map(_cache2.default.streams['get'+(localStreams?'Shared':'Remote')].bind(_cache2.default.streams));}).then(function(streams){return streams.filter(function(stream){return stream!==null;});});}},{key:'localStreams',value:function localStreams(){return this._streams(true).catch(Log.r('Room~localStreams'));}},{key:'remoteStreams',value:function remoteStreams(){return this._streams(false).catch(Log.r('Room~remoteStreams'));}},{key:'invite',value:function invite(users){var _this2=this,role=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_constants.NONE,message=arguments[2],_path=function _path(user){return'_/rooms/'+_this2.uid+'/participants/'+user.uid;},_data={status:_constants.NOT_CONNECTED,role:role||_constants.NONE};return _promise2.default.all(users.map(function(user){return DataSync.set(_path(user),_data);})).then(function(){return _promise2.default.all(users.map(function(user){return _Invite2.default.send(user,_this2,message);}));}).then(function(invites){var removeParticipant=function removeParticipant(invite){return DataSync.remove('_/rooms/'+invite.room+'/participants/'+invite.to);};invites.forEach(function(invite){invite.on(_constants.REJECTED,removeParticipant);invite.on(_constants.CANCELED,removeParticipant);});return{room:_this2,invites:invites};}).catch(function(e){Log.e('Room~invite',e);users.forEach(function(user){return DataSync.remove('_/rooms/'+_this2.uid+'/participants/'+user.uid);});return _promise2.default.reject(e);});}},{key:'on',value:function on(event,callback,cancelCallback){var _this3=this,path=Events.room.toPath(event)(this),obj=Events.room.toClass(event);if(path&&obj){var typedCallback=function typedCallback(snapData){if(!/^STREAM_/i.test(event)||!snapData){Log.i('Room~on('+event+')',snapData?new obj(snapData):null);callback(snapData?new obj(snapData):null);}else if(_cache2.default.user){var streamData=(0,_assign2.default)({uid:snapData.name(),roomId:_this3.uid},snapData.val());if(streamData.from!==_cache2.default.user.uid||streamData.device!==_cache2.default.device){var remoteStream=_cache2.default.streams.getRemote(streamData);Log.i('Room~on('+event+')',remoteStream);callback(remoteStream);}}};DataSync.on(path,event,typedCallback,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(typedCallback);}}},{key:'sendMessage',value:function sendMessage(message){return _Message2.default.send(this,message);}},{key:'share',value:function share(type,localStreamContainer,constraints){Log.i('Room~share',{type:type,localStreamContainer:localStreamContainer,constraints:constraints});return _Local2.default.share(this.uid,type,localStreamContainer,constraints);}},{key:'getLocalVideo',value:function getLocalVideo(type,localStreamContainer,constraints){var _this4=this;Log.i('Room~getLocalVideo',{type:type,localStreamContainer:localStreamContainer,constraints:constraints});return _Local2.default.getLocalVideo(this.uid,type,localStreamContainer,constraints).then(function(localStream){_this4.localStream=localStream;return localStream;});}},{key:'publish',value:function publish(){Log.i('Room~publish Local');return _Local2.default.publish(this.localStream);}},{key:'join',value:function join(){Log.i('Room~join',this);if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can join a Room.'));}return _joinRoom(this).catch(Log.r('Room~join'));}},{key:'leave',value:function leave(){var _this5=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can leave a Room.'));}Log.i('Room~leave',this);var uid=_cache2.default.user.uid.split('/').join(':');DataSync.onDisconnect('_/rooms/'+this.uid+'/participants/'+uid+'/status').cancel();(0,_keys2.default)(this._callbacks).forEach(function(event){DataSync.off(Events.room.toPath(event)(_this5),event);});this.localStreams().then(function(localStreams){return localStreams.forEach(function(localStream){return localStream.close();});});this.remoteStreams().then(function(remoteStreams){return remoteStreams.forEach(function(remoteStream){return remoteStream.unSubscribe();});});return DataSync.set('_/rooms/'+this.uid+'/participants/'+uid+'/status',_constants.WAS_CONNECTED).catch(Log.r('Room~leave'));}},{key:'close',value:function close(){var _this6=this;Log.i('Room~close',this);this.status=_constants.CLOSED;return this.leave().then(function(){return DataSync.update('rooms/'+_this6.uid,{status:_constants.CLOSED,_closed:DataSync.ts()});}).then(function(){return DataSync.remove('_/rooms/'+_this6.uid);}).catch(Log.r('Room~close'));}}],[{key:'create',value:function create(name){var extra=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null,publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can create a Room.'));}var roomMetaData={owner:_cache2.default.user.uid,_public:publicRoom,name:name||_cache2.default.user.name+'-'+Date.now()},roomFullMetaData=(0,_assign2.default)({status:_constants.OPENED,_created:DataSync.ts(),extra:extra},roomMetaData),room=null,id1=Math.floor(Math.random()*1000),id2=Math.floor(Math.random()*1000);return DataSync.push('rooms/'+id1+'/'+id2,roomFullMetaData).then(function(roomRef){room=new Room((0,_assign2.default)({uid:id1+'/'+id2+'/'+roomRef.name()},roomFullMetaData));return DataSync.update('_/rooms/'+room.uid+'/meta',roomMetaData);}).then(function(){return _joinRoom(room,_constants.OWNER);}).catch(Log.r('Room#create'));}},{key:'get',value:function get(uid){return DataSync.get('rooms/'+uid).then(function(snapData){if(snapData.val()){return new Room(snapData,uid);}});}}]);return Room;}();exports.default=Room;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Reach=__webpack_require__(58),_Reach2=_interopRequireDefault(_Reach);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var presets={UHD:{w:3840,h:2160,min:'HD'},FHD:{w:1920,h:1080,min:'HD',max:'UHD'},HD:{w:1280,h:720,min:'SD',max:'FHD'},SVGA:{w:800,h:600,min:'VGA',max:'HD'},SD:{w:720,h:576,min:'VGA',max:'HD'},VGA:{w:640,h:480,max:'SVGA'}},_assignDevice=function _assignDevice(constraint,deviceId){if(constraint&&deviceId){return(0,_assign2.default)(/^((user)|(environment))$/i.test(deviceId)?{facingMode:deviceId}:{deviceId:deviceId},constraint===true?{}:constraint);}return constraint;};var Media=function(){function Media(){(0,_classCallCheck3.default)(this,Media);}(0,_createClass3.default)(Media,null,[{key:'constraints',value:function constraints(){var videoConstraints=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'HD',audioConstraints=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true,type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'ideal',videoDeviceId=arguments[3],audioDeviceId=arguments[4],video=videoConstraints;if(typeof videoConstraints==='string'){if(presets[videoConstraints.toUpperCase()]){var preset=presets[videoConstraints.toUpperCase()],dimConstraint=function dimConstraint(dim){if(/^(min|max|exact)$/.test(type)){var r={};r[type]=preset[dim];return r;}return{min:preset.min?presets[preset.min][dim]:preset[dim],ideal:preset[dim],max:preset.max?presets[preset.max][dim]:preset[dim]};};video={width:dimConstraint('w'),height:dimConstraint('h')};}else{throw new Error('Unknown Video Resolution preset (UHD, FHD, HD, SVGA, SD, VGA)');}}video=_assignDevice(video,videoDeviceId);var audio=_assignDevice(audioConstraints,audioDeviceId);Log.d('Media#constraints',{video:video,audio:audio});return{video:video,audio:audio};}},{key:'attachStream',value:function attachStream(mediaStream,container,previous){var volume=arguments.length>3&&arguments[3]!==undefined?arguments[3]:.7,tagName='';if(mediaStream.getVideoTracks().length>0){tagName='video';}else if(mediaStream.getAudioTracks().length>0){tagName='audio';}Log.d('Media#attachStream',mediaStream,tagName);if(tagName.length>0){var _node=previous;if(!_node||_node.tagName.toLowerCase()!==tagName){_node=document.createElement(tagName);_node.autoplay=true;if(_Reach2.default.browser.browser==='safari'){_node.setAttribute('playsinline',true);_node.setAttribute('muted',true);}else{}_node.style.borderRadius='1px';}if(container){if(previous&&previous!==_node){container.replaceChild(_node,previous);}else if(!previous){container.appendChild(_node);}}_node.srcObject=mediaStream;_node.addEventListener('play',function(event){Log.d('video.onplay = '+event.type);_node.srcObject.onaddtrack=function(track){Log.d('[Local] listener: video.onaddtrack = '+track.label);};_node.srcObject.onremovetrack=function(track){Log.d('[Local] listener: video.onremovetrack = '+track.label);};_node.srcObject.oninactive=function(){Log.d('[Local] listener: video.oninactive');};_node.srcObject.onplaying=function(event){console.debug('[Local] listener: video.onplaying = '+event.type);};_node.srcObject.onstalled=function(event){console.debug('[Local] listener: video.onstalled = '+event.type);};_node.srcObject.onsuspend=function(event){console.debug('[Local] listener: video.onsuspend = '+event.type);console.debug(event);console.debug('on passe là');};});_node.onsuspend=function(event){console.debug('[Local] listener: video.onsuspend = '+event);console.debug(event);};_node.addEventListener('loadeddata',function(){return Log.d('on a chargé les données');});_node.addEventListener('error',function(error){return Log.d('on a une erreur '+error);});_node.volume=volume;return _node;}return previous;}},{key:'devices',value:function devices(){return navigator.mediaDevices.enumerateDevices().then(function(devices){var r={};devices.forEach(function(device){if(!r[device.kind]){r[device.kind]=[];}r[device.kind].push(device);});Log.d('Media#devices',r);return r;}).catch(Log.r('Media#devices'));}},{key:'facingMode',get:function get(){return{USER:'user',ENVIRONMENT:'environment'};}}]);return Media;}();exports.default=Media;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.invite=exports.stream=exports.room=exports.reach=undefined;var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_stringify=__webpack_require__(99),_stringify2=_interopRequireDefault(_stringify),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(29),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(40),_Invite2=_interopRequireDefault(_Invite),_Participant=__webpack_require__(61),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(60),_Message2=_interopRequireDefault(_Message),_Remote=__webpack_require__(62),_Remote2=_interopRequireDefault(_Remote),_constants=__webpack_require__(20);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var paths={USER:function USER(){return'users';},ROOM:function ROOM(){return'rooms';},INVITE:function INVITE(user){if(!user){throw new Error('You must be authenticated to list the invites');}return'_/invites/'+user.uid;},PARTICIPANT:function PARTICIPANT(room){return'_/rooms/'+room.uid+'/participants';},MESSAGE:function MESSAGE(room){return'_/rooms/'+room.uid+'/messages';},STREAM:function STREAM(room){return'_/rooms/'+room.uid+'/streams';}},classes={USER:_User2.default,ROOM:_Room2.default,INVITE:_Invite2.default,PARTICIPANT:_Participant2.default,MESSAGE:_Message2.default,STREAM:_Remote2.default};var _Events=function(){function _Events(keys){var _this=this;(0,_classCallCheck3.default)(this,_Events);keys.forEach(function(key){_this[key]=key;});}(0,_createClass3.default)(_Events,[{key:'supports',value:function supports(event){if(!event||typeof event!=='string'||this[event]!==event.toUpperCase()){throw new Error('Unsupported event. Use one of the following: '+(0,_stringify2.default)((0,_keys2.default)(this)));}return true;}},{key:'toPath',value:function toPath(event){if(this.supports(event)){return paths[event.toUpperCase().replace(/_.*$/,'')]||function(){return null;};}}},{key:'toClass',value:function toClass(event){if(this.supports(event)){return classes[event.toUpperCase().replace(/_.*$/,'')];}}}]);return _Events;}();var reach=exports.reach=new _Events(['USER_ADDED','USER_CHANGED','USER_REMOVED','ROOM_ADDED','ROOM_CHANGED','ROOM_REMOVED','INVITE_ADDED','INVITE_CHANGED']);var room=exports.room=new _Events(['MESSAGE_ADDED','MESSAGE_CHANGED','MESSAGE_REMOVED','PARTICIPANT_ADDED','PARTICIPANT_CHANGED','PARTICIPANT_REMOVED','STREAM_PUBLISHED','STREAM_UNPUBLISHED']);var stream=exports.stream=new _Events(['MUTE','SIZE']);var invite=exports.invite=new _Events([_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED]);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(41);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_constants=__webpack_require__(20),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Room=__webpack_require__(29),_Room2=_interopRequireDefault(_Room),_Events=__webpack_require__(31),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var update=function update(invite,status){var reason=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,_ended=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,values={status:status,reason:reason,_ended:_ended};if(invite.status!==_constants.ONGOING){return _promise2.default.reject(new Error('This invitation has already been answered'));}return DataSync.update('_/invites/'+invite.to+'/'+invite.uid,values).then(function(){(0,_keys2.default)(values).forEach(function(prop){invite[prop]=values[prop];});return _Room2.default.get(invite.room);}).then(function(){return{invite:invite};}).catch(Log.r('Invite_update'));};var Invite=function(){function Invite(snapData){(0,_classCallCheck3.default)(this,Invite);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name(),to:snapData.ref().parent().name()});}this.uid=values.uid;this.from=values.from;this.to=values.to;this.room=values.room;this.status=values.status;this.topic=values.topic;this._created=values._created;this._ended=values._ended;this._callbacks={};}(0,_createClass3.default)(Invite,[{key:'cancel',value:function cancel(reason){return update(this,_constants.CANCELED,reason,DataSync.ts());}},{key:'reject',value:function reject(reason){return update(this,_constants.REJECTED,reason,DataSync.ts());}},{key:'accept',value:function accept(){return update(this,_constants.ACCEPTED);}},{key:'on',value:function on(status,callback){var _this=this;if(Events.invite.supports(status)){if(!this._callbacks[status]){this._callbacks[status]=[];}this._callbacks[status].push(callback);if(!this._listener){this._listener=function(snapData){var updated=snapData.val();if(updated!==null&&updated!==_this.status){_this.status=updated;(_this._callbacks[updated]||[]).forEach(function(cb){cb(_this);});}};DataSync.on('_/invites/'+this.to+'/'+this.uid+'/status','value',this._listener.bind(this));}}}},{key:'onStatusChange',value:function onStatusChange(callback){var _this2=this;[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this2.on(event,callback);});}},{key:'off',value:function off(status,callback){var _this3=this;if(!status){this._callbacks={};}else if(this._callbacks[status]){if(callback){var idx=this._callbacks[status].findIndex(function(cb){return cb===callback;});if(idx>=0){this._callbacks.splice(idx,1);}}else{this._callbacks[status]=[];}}if(![_constants.CANCELED,_constants.ACCEPTED,_constants.REJECTED].some(function(event){return _this3._callbacks[event]&&_this3._callbacks[event].length>0;})){DataSync.off('_/invites/'+this.to+'/'+this.uid+'/status','value');}}},{key:'offStatusChange',value:function offStatusChange(callback){var _this4=this;if(!callback){this.off();}else{[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this4.off(event,callback);});}}},{key:'isOnGoing',get:function get(){return this.status===_constants.ONGOING;}},{key:'isRejected',get:function get(){return this.status===_constants.REJECTED;}},{key:'isAccepted',get:function get(){return this.status===_constants.ACCEPTED;}},{key:'isCanceled',get:function get(){return this.status===_constants.CANCELED;}}],[{key:'send',value:function send(invitee,room){var message=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can send an invite.'));}var inviteMetaData={from:_cache2.default.user.uid,room:room.uid,status:_constants.ONGOING,_created:DataSync.ts(),topic:message};return DataSync.push('_/invites/'+invitee.uid,inviteMetaData).then(function(inviteRef){var inviteId=inviteRef.name();return new Invite((0,_assign2.default)({uid:inviteId,to:invitee.uid},inviteMetaData));}).catch(Log.r('Invite#send'));}}]);return Invite;}();exports.default=Invite;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(33);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(47)('keys');
var uid = __webpack_require__(37);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(25) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(48);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(25);
var wksExt = __webpack_require__(52);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(133)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(70)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(87)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(162);
var createDesc = __webpack_require__(163);
module.exports = __webpack_require__(54) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Room=__webpack_require__(29),_Room2=_interopRequireDefault(_Room),_Device=__webpack_require__(59),_Device2=_interopRequireDefault(_Device),_constants=__webpack_require__(20),_webcom=__webpack_require__(32),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initializing=false;var User=function(){function User(snapData,userId){(0,_classCallCheck3.default)(this,User);var values=(0,_assign2.default)({},snapData.val());this.uid=userId;this.name=values.name;this.status=values.status;this.lastSeen=values.lastSeen;this.anonymous=/^anonymous/.test(values.provider);}(0,_createClass3.default)(User,[{key:'invite',value:function invite(message){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can invite another User.'));}return _Room2.default.create(_cache2.default.user.uid+'-'+this.uid).then(function(room){return room.invite([_this],null,message);}).then(function(data){return{room:data.room,invite:data.invites[0]};}).catch(Log.r('User~invite'));}},{key:'devices',value:function devices(){return DataSync.list('_/devices/'+this.uid,_Device2.default);}}],[{key:'init',value:function init(auth,name){var id1=Math.floor(Math.random()*1000),id2=Math.floor(Math.random()*1000),uid=id1+'/'+id2+'/'+auth.uid,userUid=id1+':'+id2+':'+auth.uid;if(!initializing){initializing=true;var d={status:_constants.CONNECTED,lastSeen:DataSync.ts(),provider:auth.provider};if(name){(0,_assign2.default)(d,{name:name});}var deviceId=_webcom2.default.INTERNAL.PersistentStorage.get(uid);return DataSync.update('users/'+uid,d).then(function(){var deviceMetadata={status:_constants.CONNECTED,sdk:{reach:'3.0.2',webcom:_webcom2.default.SDK_VERSION},userAgent:navigator.userAgent};_cache2.default.userAgent=deviceMetadata.userAgent;if(deviceId){return DataSync.update('_/devices/'+uid+'/'+deviceId,deviceMetadata);}return DataSync.push('_/devices/'+uid,deviceMetadata);}).then(function(deviceRef){if(!deviceId){deviceId=deviceRef.name();_webcom2.default.INTERNAL.PersistentStorage.set(uid,deviceId);}_cache2.default.device=deviceId;}).then(function(){DataSync.onDisconnect('_/devices/'+uid+'/'+deviceId+'/status').set(_constants.NOT_CONNECTED);DataSync.onDisconnect('users/'+uid).update({status:_constants.NOT_CONNECTED,lastSeen:DataSync.ts()});}).then(function(){return User.get(userUid);}).then(function(user){initializing=false;return user;}).catch(function(e){Log.e(e);initializing=false;return _promise2.default.reject(e);});}return User.get(userUid);}},{key:'disconnect',value:function disconnect(user){var userUid=user.uid.replace(/:/g,'/');DataSync.onDisconnect('_/devices/'+userUid+'/'+_cache2.default.device+'/status').cancel();DataSync.onDisconnect('users/'+userUid).cancel();if(user.anonymous){return DataSync.remove('_/devices/'+userUid).then(function(){return DataSync.get('_/invites/'+userUid);}).then(function(invites){var inviteIds=[];invites.forEach(function(invite){inviteIds.push(invite.name());});return _promise2.default.all(inviteIds.map(function(inviteId){return DataSync.remove('_/invites/'+userUid+'/'+inviteId);}));}).then(function(){return DataSync.remove('users/'+userUid);}).then(function(){_webcom2.default.INTERNAL.PersistentStorage.remove(userUid);}).catch(Log.r('User#anonymous_disconnect'));}return DataSync.set('_/devices/'+userUid+'/'+_cache2.default.device+'/status',_constants.NOT_CONNECTED).then(function(){return DataSync.get('_/devices/'+userUid);}).then(function(devices){var hasConnectedDevices=devices.forEach(function(device){return new RegExp('^'+_constants.CONNECTED+'$').test(device.val().status);});if(!hasConnectedDevices){return DataSync.update('users/'+userUid,{status:_constants.NOT_CONNECTED});}return true;}).catch(Log.r('User#disconnect'));}},{key:'get',value:function get(uid){var userUid=uid.replace(/:/g,'/');return DataSync.get('users/'+userUid).then(function(snapData){return snapData?new User(snapData,uid):null;}).catch(Log.r('User#get'));}}]);return User;}();exports.default=User;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var AUDIO=exports.AUDIO='audio';var VIDEO=exports.VIDEO='video';var AUDIO_VIDEO=exports.AUDIO_VIDEO='audio-video';var SCREEN_SHARING=exports.SCREEN_SHARING='screen-sharing';exports.default={AUDIO:AUDIO,VIDEO:VIDEO,AUDIO_VIDEO:AUDIO_VIDEO,SCREEN_SHARING:SCREEN_SHARING};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_Browser=__webpack_require__(91),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Events=__webpack_require__(31),Events=_interopRequireWildcard(_Events),_Codec=__webpack_require__(92),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(29),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(40),_Invite2=_interopRequireDefault(_Invite),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(30),_Media2=_interopRequireDefault(_Media),_webcom=__webpack_require__(32),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Reach=function(){function Reach(url){var cfg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;(0,_classCallCheck3.default)(this,Reach);_cache2.default.base=url;_cache2.default.config=cfg;this._callbacks={};}(0,_createClass3.default)(Reach,[{key:'register',value:function register(email,password,name,rememberMe){var _this=this;return _cache2.default.base.createUser(email,password).then(function(auth){if(auth){return _this.login(email,password,name||email,rememberMe);}}).catch(Log.r('Reach~register'));}},{key:'login',value:function login(email,password,name){var rememberMe=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false,p=_promise2.default.resolve();if(this.current&&this.current.email!==email){p=this.logout();}return p.then(function(){return _cache2.default.base.authWithPassword({email:email,password:password,rememberMe:rememberMe});}).then(function(auth){return _User2.default.init(auth,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~login'));}},{key:'resume',value:function resume(){var _this2=this;return new _promise2.default(function(resolve,reject){if(_webcom2.default.INTERNAL.PersistentStorage.get('session')){_cache2.default.base.resume(function(error,auth){if(auth&&!_this2.current){_User2.default.init(auth).then(function(u){_cache2.default.user=u;resolve(u);},reject);}});}else{reject(new Error('No session to resume'));}});}},{key:'anonymous',value:function anonymous(name){var p=_promise2.default.resolve();if(this.current&&(!this.current.anonymous||this.current.name!==name)){p=this.logout();}return p.then(function(){return _cache2.default.base.authAnonymously();}).then(function(auth){return _User2.default.init(auth,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~anonymous'));}},{key:'logout',value:function logout(){var _this3=this;return new _promise2.default(function(resolve,reject){var p=_promise2.default.resolve();if(_this3.current!=null){p=_User2.default.disconnect(_this3.current);}p.then(function(){(0,_keys2.default)(_this3._callbacks).forEach(function(event){return DataSync.off(Events.reach.toPath(event)(_cache2.default.user),event);});_cache2.default.base.logout(function(){_cache2.default.user=null;resolve();});}).catch(function(e){Log.e(e);reject(e);});});}},{key:'invites',value:function invites(){if(!this.current){return _promise2.default.reject(new Error('Cannot list invites without a User being logged in.'));}return DataSync.list('_/invites/'+this.current.uid,_Invite2.default).catch(Log.r('Reach~invites'));}},{key:'on',value:function on(event,callback,cancelCallback){var path=Events.reach.toPath(event)(_cache2.default.user);if(path){var cls=Events.reach.toClass(event),cb=function cb(snapData){var d=cls?new cls(snapData):null;Log.i('Reach~on('+event+')',d);callback(d);};DataSync.on(path,event,cb,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(cb);}}},{key:'createRoom',value:function createRoom(name,extra){var publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!this.current){return _promise2.default.reject(new Error('Cannot create a Room without a User being logged in.'));}return _Room2.default.create(name,extra,publicRoom);}},{key:'getRoom',value:function getRoom(uid){return _Room2.default.get(uid);}},{key:'getUser',value:function getUser(uid){return _User2.default.get(uid);}},{key:'base',get:function get(){return _cache2.default.base;}},{key:'config',get:function get(){return _cache2.default.config;}},{key:'current',get:function get(){return _cache2.default.user;}},{key:'peerConnections',get:function get(){return _cache2.default.peerConnections.stacks;}}],[{key:'version',get:function get(){return{sdk:'3.0.2',schema:'draft-00'};}},{key:'types',get:function get(){return _StreamTypes2.default;}},{key:'events',get:function get(){return{room:Events.room,reach:Events.reach,stream:Events.stream,invite:Events.invite};}},{key:'browser',get:function get(){return _Browser.browser;}},{key:'media',get:function get(){return _Media2.default;}},{key:'codecs',get:function get(){return{audio:_Codec.audio,video:_Codec.video};}}]);return Reach;}();exports.default=Reach;module.exports=Reach;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Device=function(){function Device(snapData){(0,_classCallCheck3.default)(this,Device);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.os=values.os;this.userAgent=values.userAgent;this.status=values.status;this.sdk=values.sdk;}(0,_createClass3.default)(Device,null,[{key:'get',value:function get(userUid,deviceUid){var newUid=userUid.replace(/:/g,'/');return DataSync.get('_/devices/'+newUid+'/'+deviceUid).then(function(snapData){return snapData?new Device(snapData):null;}).catch(Log.r('Device#get'));}}]);return Device;}();exports.default=Device;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Message=function(){function Message(snapData,roomId){(0,_classCallCheck3.default)(this,Message);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.roomId=roomId;this.text=values.text;this.from=values.from;this._created=values._created;}(0,_createClass3.default)(Message,[{key:'edit',value:function edit(newText){var _this=this;return DataSync.update('/rooms/'+this.roomId+'/messages/'+this.uid,{text:newText}).then(function(){_this.text=newText;return _this;}).catch(Log.r('Message~edit'));}},{key:'remove',value:function remove(){return DataSync.remove('/rooms/'+this.roomId+'/messages/'+this.uid).catch(Log.r('Message~remove'));}}],[{key:'send',value:function send(room,text){if(!_cache2.default.user){return _promise2.default.reject(new Error('Cannot send a message to the Room without a User being logged in.'));}var data={from:_cache2.default.user.uid,_created:DataSync.ts(),text:text};return DataSync.push('_/rooms/'+room.uid+'/messages',data).then(function(pushRef){return DataSync.get('_/rooms/'+room.uid+'/messages/'+pushRef.name());}).then(function(snapData){return new Message(snapData,room.uid);}).catch(Log.r('Message#send'));}}]);return Message;}();exports.default=Message;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Participant=function Participant(snapData){(0,_classCallCheck3.default)(this,Participant);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.role=values.role;this.status=values.status;this._joined=values._joined;this.userAgent=values.userAgent;};exports.default=Participant;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Events=__webpack_require__(31),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Remote=function(){function Remote(values){(0,_classCallCheck3.default)(this,Remote);Log.d('Remote~new',values);this.roomId=values.roomId;this.uid=values.uid;this.from=values.from;this.type=values.type;this.device=values.device;this.userAgent=values.userAgent;this.height=values.height;this.width=values.width;this.container=_cache2.default.config.remoteStreamContainer;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this._callbacks={};this.peerConnection=null;}(0,_createClass3.default)(Remote,[{key:'subscribe',value:function subscribe(remoteStreamContainer){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can subscribe to a Room\'s stream.'));}this.container=remoteStreamContainer||_cache2.default.config.remoteStreamContainer;Log.d('Remote~subscribe',this.container);return _cache2.default.peerConnections.answer(this,this.container).then(function(pc){_this.peerConnection=pc;}).then(function(){return DataSync.update('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device,{to:_cache2.default.user.uid,_created:DataSync.ts()});}).then(function(){DataSync.onDisconnect('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device).remove();var subscribed=false;DataSync.on('_/rooms/'+_this.roomId+'/streams/'+_this.uid,'value',function(snapData){var values=snapData.val();Log.d('Remote~updated',values);if(values){_this.type=values.type;var height=values.height,width=values.width;if((height||width)&&(height!==_this.height||width!==_this.height)){_this.height=values.height;_this.width=values.width;Log.w(_this._callbacks[Events.stream.SIZE]);(_this._callbacks[Events.stream.SIZE]||[]).forEach(function(cb){return cb(_this.height,_this.width);});}var muted=values.muted;if(muted&&(muted.audio!==_this.muted.audio||muted.video!==_this.muted.video)){_this.muted=muted;Log.w(_this._callbacks[Events.stream.MUTE]);(_this._callbacks[Events.stream.MUTE]||[]).forEach(function(cb){return cb(_this.muted);});}subscribed=true;}else if(subscribed){Log.i('Remote#removed',_this);_this._close(true);}});}).catch(function(e){console.error('PeerConnection~subscribe#error '+e);return _promise2.default.reject(new Error('Failed to subscribe to the remote stream'));});}},{key:'unSubscribe',value:function unSubscribe(){return this._close(false);}},{key:'_close',value:function _close(remote){DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device).cancel();DataSync.off('_/rooms/'+this.roomId+'/streams/'+this.uid,'value');!remote&&DataSync.remove('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device);return _promise2.default.resolve(_cache2.default.peerConnections.close(this.uid,this.device));}},{key:'on',value:function on(event,callback){if(Events.stream.supports(event)){if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(callback);}}},{key:'off',value:function off(event,callback){if(!event){this._callbacks={};}else if(Events.stream.supports(event)){if(!callback){this._callbacks[event]=[];}else{this._callbacks[event]=this._callbacks[event].filter(function(cb){return cb!==callback;});}}}},{key:'update',value:function update(values){var _this2=this;(0,_keys2.default)(values).forEach(function(key){_this2[key]=values[key];});}},{key:'node',get:function get(){return this.peerConnection?this.peerConnection.node:null;}}]);return Remote;}();exports.default=Remote;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(98);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(42)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(24);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(79);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(24);
var $iterCreate = __webpack_require__(123);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(130);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(128);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(42)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(65).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(34);
var createDesc = __webpack_require__(27);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(50);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(66);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(75);
var hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(117)(false);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(1);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(44);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(33);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var invoke = __webpack_require__(121);
var html = __webpack_require__(65);
var cel = __webpack_require__(42);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(22)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(64);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var global = __webpack_require__(3);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(24);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 85 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(148);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(165)('wks');
var uid = __webpack_require__(88);
var Symbol = __webpack_require__(28).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.browser=undefined;var _toConsumableArray2=__webpack_require__(63),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_console,_webrtcAdapter=__webpack_require__(172),_webcom=__webpack_require__(32),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var browser=exports.browser=(0,_assign2.default)({compatible:!/\s/.test(_webrtcAdapter.browserDetails.browser)&&(!_webrtcAdapter.browserDetails.minVersion||_webrtcAdapter.browserDetails.version>=_webrtcAdapter.browserDetails.minVersion)},_webrtcAdapter.browserDetails);var version='Reach v'+'3.0.2'+' | Schema '+'draft-00'+' | Webcom v'+_webcom2.default.SDK_VERSION,message='';if(browser.version===null){message='Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';}else if(browser.minVersion&&browser.minVersion>browser.version){message='Unsupported browser: browser is outdated, update to latest version ('+browser.minVersion+'+)';}else if(!_webrtcAdapter.browserShim){message='No shim for your browser. There might a problem with your package.';}var args=[version+' '+message];if(/^(chrome|firefox)$/.test(browser.browser)){args=['%c '+version+' %c '+message,'background: '+(browser.compatible?'#f50':'red')+'; color: #fff; font-weight: bold','color: '+(browser.compatible?'inherit':'red')];}(_console=console).log.apply(_console,(0,_toConsumableArray3.default)(args));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var video=exports.video={VP8:/^vp8/i,VP9:/^vp9/i,VP10:/^vp10/i,H264:/^h264/i,H265:/^h265/i};var audio=exports.audio={OPUS:/^opus/i,G722:/^g722/i,G711:/^g711/i,ISAC:/^isac/i,ISAC_16:/^isac\/16000/i,ISAC_32:/^isac\/32000/i,LSAC:/^lsac/i};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_toConsumableArray2=__webpack_require__(63),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_Media=__webpack_require__(30),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _flattenServers=function _flattenServers(servers){var _ref,_expand=servers.map(function(server){var username=server.username,credential=server.credential,urls=server.urls,url=server.url,uris=urls||url;if(typeof uris!=='string'){return uris.map(function(uri){return{username:username,credential:credential,urls:uri};});}return[server];});return(_ref=[]).concat.apply(_ref,(0,_toConsumableArray3.default)(_expand));};var Config=function(){function Config(obj){var _this=this;(0,_classCallCheck3.default)(this,Config);this.constraints=null;this.localStreamContainer=null;this.remoteStreamContainer=null;this.preferredVideoCodec=null;this.preferredAudioCodec=null;this.reset();this.assign(obj);DataSync.get('_/ice').then(function(snapData){if(snapData){_this.iceServers=snapData.val();Log.i('ICEServers',_this.iceServers.length>0?_this.iceServers:'None');}},function(e){return Log.d('ICEServers',e);});}(0,_createClass3.default)(Config,[{key:'assign',value:function assign(obj){var _this2=this;(0,_keys2.default)(obj||{}).forEach(function(key){_this2[key]=obj[key];});}},{key:'reset',value:function reset(){this.assign({constraints:_Media2.default.constraints(),logLevel:'ERROR'});}},{key:'logLevel',set:function set(level){_cache2.default.logLevel=level;},get:function get(){return _cache2.default.logLevel;}},{key:'iceServers',set:function set(servers){Log.d('Config~set~iceServers',servers);if(servers){if(!this._iceServers){this._iceServers=[].concat(servers||[]);}else{var _currentServers=_flattenServers(this._iceServers),_newServers=_flattenServers(servers);_newServers.forEach(function(newServer){if(!_currentServers.some(function(server){return server.urls===newServer.urls&&server.username===newServer.username&&server.credential===newServer.credential;})){_currentServers.push(newServer);}});this._iceServers=_currentServers.reduce(function(previous,current){var username=current.username,credential=current.credential,urls=current.urls,idx=previous.findIndex(function(s){return s.username===username&&s.credential===credential;});if(idx>=0){previous[idx].urls.push(urls);}else{previous.push({username:username,credential:credential,urls:[urls]});}return previous;},[]);}}},get:function get(){return this._iceServers||[{username:'admin',credential:'webcom1234',urls:['turns:turn1.webcom.orange.com:443','turn:turn1.webcom.orange.com:443?transport=tcp','turn:turn1.webcom.orange.com:3478?transport=tcp']}];}}]);return Config;}();exports.default=Config;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_Media=__webpack_require__(30),_Media2=_interopRequireDefault(_Media),_constants=__webpack_require__(20);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _facingModes=[_Media2.default.facingMode.USER,_Media2.default.facingMode.ENVIRONMENT],_getConstraintValue=function _getConstraintValue(constraints,prop){return constraints[prop].exact||constraints[prop].ideal||constraints[prop];},_setConstrainValue=function _setConstrainValue(constraints,prop,other,value){constraints[prop]={exact:value};delete constraints[other];};var Local=function(){function Local(values){(0,_classCallCheck3.default)(this,Local);this.roomId=values.roomId;this.uid=values.uid;this.type=values.type;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this.container=values.container||_cache2.default.config.localStreamContainer;this.node=null;this.peerConnections=[];this.status=_constants.NONE;this.isVideoLoaded=false;this._inputs={};this.constraints=values.constraints;}(0,_createClass3.default)(Local,[{key:'updateConstraints',value:function updateConstraints(constraints){var _this=this;Log.d('Local~updateConstraints',constraints);this.constraints=constraints;return navigator.mediaDevices.getUserMedia(this.constraints).then(function(media){['audio','video'].forEach(function(kind){var constraintsValue=_this.constraints[kind];if(constraintsValue){if(constraintsValue.deviceId||constraintsValue.facingMode){_this._inputs[kind]=_getConstraintValue(constraintsValue,constraintsValue.facingMode?'facingMode':'deviceId');}}});_this.media=media;});}},{key:'mute',value:function mute(){var track=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_StreamTypes2.default.AUDIO,state=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;Log.d('mute',track,state);var audio=this.muted.audio,video=this.muted.video,tracks=void 0;switch(track){case _StreamTypes2.default.AUDIO:audio=state;tracks=this.media.getAudioTracks();break;case _StreamTypes2.default.VIDEO:case _StreamTypes2.default.SCREEN_SHARING:video=state;tracks=this.media.getVideoTracks();break;case _StreamTypes2.default.AUDIO_VIDEO:audio=state;video=state;tracks=this.media.getTracks();break;}tracks.forEach(function(track){track.enabled=!state;});this.muted={audio:audio,video:video};DataSync.set('_/rooms/'+this.roomId+'/streams/'+this.uid+'/muted',this.muted);}},{key:'unMute',value:function unMute(track){this.mute(track,false);}},{key:'close',value:function close(){if(!~[_constants.CLOSED,_constants.CLOSING].indexOf(this.status)){this.status=_constants.CLOSING;var path='_/rooms/'+this.roomId+'/subscribers/'+this.uid;DataSync.off(path,'child_added');DataSync.off(path,'child_removed');DataSync.onDisconnect('_/rooms/'+this.roomId+'/streams/'+this.uid).cancel();DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid).cancel();DataSync.remove(path);DataSync.remove('_/rooms/'+this.roomId+'/streams/'+this.uid);this.media=null;this.status=_constants.CLOSED;}return _promise2.default.resolve(this.status);}},{key:'switchCamera',value:function switchCamera(deviceId){return this._switchDevice(_StreamTypes2.default.VIDEO,deviceId);}},{key:'switchMicrophone',value:function switchMicrophone(deviceId){return this._switchDevice(_StreamTypes2.default.AUDIO,deviceId);}},{key:'_switchDevice',value:function _switchDevice(kind,deviceId){var _this2=this;Log.d('Local~_switchDevice',kind,deviceId);if(this.media.getTracks().some(function(track){return track.kind===kind;})){var next=_promise2.default.resolve(deviceId),currentModeIdx=_facingModes.indexOf(this._inputs[kind]);if(!deviceId&&!!~currentModeIdx){next=_promise2.default.resolve(_facingModes[(currentModeIdx+1)%_facingModes.length]);}else if(!~_facingModes.indexOf(deviceId)){next=_Media2.default.devices().then(function(d){var devices=d[kind+'input'].map(function(mediaDevice){return mediaDevice.deviceId;});devices.sort();var nextDevice=deviceId;if(deviceId&&!devices.some(function(device){return device===deviceId;})){return _promise2.default.reject(new Error('Unknown '+kind+' device'));}if(!deviceId&&devices.length>1){var idx=_this2._inputs[kind]?devices.findIndex(function(v){return v===_this2._inputs[kind];},_this2):0;nextDevice=devices[++idx%devices.length];}return nextDevice;});}else{next=_promise2.default.resolve(deviceId);}return next.then(function(device){if(_this2._inputs[kind]!==device){_this2._inputs[kind]=device;_this2.media.getTracks().forEach(function(track){return track.stop();});var constraints=(0,_assign2.default)({},_this2.constraints),props=['facingMode','deviceId'];if(!~_facingModes.indexOf(device)){props=props.reverse();}_setConstrainValue(constraints[kind],props[0],props[1],device);Log.d('Local~_switchDevice',kind,constraints);return _this2.updateConstraints(constraints);}}).then(function(){return _this2;});}return _promise2.default.reject(new Error('Current stream does not contain a '+kind+' track'));}},{key:'constraints',set:function set(constraints){var _this3=this,values=constraints||_cache2.default.config.constraints,defaultConstraints=_Media2.default.constraints();['audio','video'].forEach(function(type){if(!~_this3.type.indexOf(type)){values[type]=false;}else if(!values[type]){values[type]=defaultConstraints[type];}if(values[type].deviceId||values[type].facingMode){_this3._inputs[type]=_getConstraintValue(values[type],values[type].facingMode?'facingMode':'deviceId');}});Log.d('Local~set#contraints',values);this._constraints=values;},get:function get(){return this._constraints;}},{key:'media',set:function set(mediaStream){var _this4=this;if(mediaStream){if(!(mediaStream instanceof MediaStream)){throw new Error('The media MUST be a MediaStream');}var checkDevices={};mediaStream.getTracks().forEach(function(track){track.enabled=!_this4.muted[track.kind];if(!_this4._inputs[track.kind]){checkDevices[track.kind]=track.label;}});if((0,_keys2.default)(checkDevices).length){_Media2.default.devices().then(function(devices){(0,_keys2.default)(checkDevices).forEach(function(kind){if(devices[kind+'input']){var deviceIds=devices[kind+'input'].filter(function(device){return device.label.length&&device.label===checkDevices[kind];});if(deviceIds.length===1&&!_this4._inputs[kind]){_this4._inputs[kind]=deviceIds[0].deviceId;}if(deviceIds.length===0&&devices[kind+'input'][0].label===''&&!_this4._inputs[kind]){_this4._inputs[kind]=devices[kind+'input'][0].deviceId;}}});});}this.node=_Media2.default.attachStream(mediaStream,this.container,this.node,0);this.node.onloadeddata=function(){_this4.isVideoLoaded=true;};this.status=_constants.CONNECTED;Log.d('Local~set media',{mediaStream:mediaStream},this.node);this.peerConnections.forEach(function(peerConnection){return peerConnection.renegotiate(_this4._media,mediaStream);});}else if(this.media&&!mediaStream){this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;this.media.getTracks().forEach(function(track){return track.stop();});this.peerConnections.forEach(function(peerConnection){return peerConnection.close();});}this._media=mediaStream;},get:function get(){return this._media;}}],[{key:'share',value:function share(roomId,type,container,constraints){if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can share a stream.'));}var streamMetaData={from:_cache2.default.user.uid,device:_cache2.default.device,type:type},sharedStream=new Local((0,_assign2.default)({roomId:roomId,constraints:constraints,container:container},streamMetaData));Log.d('Local~share',{sharedStream:sharedStream});return navigator.mediaDevices.getUserMedia(sharedStream.constraints).then(function(media){sharedStream.media=media;}).then(function(){return DataSync.push('_/rooms/'+roomId+'/streams',streamMetaData);}).then(function(streamRef){sharedStream.uid=streamRef.name();if(/video/i.test(sharedStream.type)){if(sharedStream.isVideoLoaded){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);}else{sharedStream.node.onloadeddata=function(){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);};}}if(/video/i.test(sharedStream.type)){window.addEventListener('resize',function(){if(sharedStream.node!=null){var _streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(_streamSize);}});}_cache2.default.streams.shared[sharedStream.uid]=sharedStream;DataSync.onDisconnect('_/rooms/'+roomId+'/streams/'+sharedStream.uid).remove();DataSync.onDisconnect('_/rooms/'+roomId+'/subscribers/'+sharedStream.uid).remove();var path='_/rooms/'+sharedStream.roomId+'/subscribers/'+sharedStream.uid,value=function value(snapData){return(0,_assign2.default)({device:snapData.name()},snapData.val()||{});};DataSync.on(path,'child_added',function(snapData){var subscriber=value(snapData);Log.d('Local~subscribed',subscriber);_cache2.default.peerConnections.offer(sharedStream,subscriber).then(function(pc){return sharedStream.peerConnections.push(pc);});},Log.e.bind(Log));DataSync.on(path,'child_removed',function(snapData){var subscriber=value(snapData);Log.d('Local~un-subscribed',subscriber);var closedPC=_cache2.default.peerConnections.close(sharedStream.uid,subscriber.device);sharedStream.peerConnections=sharedStream.peerConnections.filter(function(pc){return pc!==closedPC;});},Log.e.bind(Log));Log.d('Local~shared',{sharedStream:sharedStream});return sharedStream;});}},{key:'getLocalVideo',value:function getLocalVideo(roomId,type,container,constraints){if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can share a stream.'));}var streamMetaData={from:_cache2.default.user.uid,device:_cache2.default.device,userAgent:_cache2.default.userAgent,type:type},sharedStream=new Local((0,_assign2.default)({roomId:roomId,constraints:constraints,container:container},streamMetaData));sharedStream.streamMetaData=streamMetaData;Log.d('Local~getLocalVideo',{sharedStream:sharedStream});return navigator.mediaDevices.getUserMedia(sharedStream.constraints).then(function(media){sharedStream.media=media;return sharedStream;});}},{key:'publish',value:function publish(sharedStream){Log.d('Local~publish');var roomId=sharedStream.roomId;return DataSync.push('_/rooms/'+roomId+'/streams',sharedStream.streamMetaData).then(function(streamRef){sharedStream.uid=streamRef.name();if(sharedStream.isVideoLoaded){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);}else{sharedStream.node.onloadeddata=function(){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);};}window.addEventListener('resize',function(){if(sharedStream.node!=null){var _streamSize2={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(_streamSize2);}});_cache2.default.streams.shared[sharedStream.uid]=sharedStream;DataSync.onDisconnect('_/rooms/'+roomId+'/streams/'+sharedStream.uid).remove();DataSync.onDisconnect('_/rooms/'+roomId+'/subscribers/'+sharedStream.uid).remove();var path='_/rooms/'+sharedStream.roomId+'/subscribers/'+sharedStream.uid,value=function value(snapData){return(0,_assign2.default)({device:snapData.name()},snapData.val()||{});};DataSync.on(path,'child_added',function(snapData){var subscriber=value(snapData);Log.d('Local~subscribed',subscriber);_cache2.default.peerConnections.offer(sharedStream,subscriber).then(function(pc){return sharedStream.peerConnections.push(pc);});},Log.e.bind(Log));DataSync.on(path,'child_removed',function(snapData){var subscriber=value(snapData);Log.d('Local~un-subscribed',subscriber);var closedPC=_cache2.default.peerConnections.close(sharedStream.uid,subscriber.device);sharedStream.peerConnections=sharedStream.peerConnections.filter(function(pc){return pc!==closedPC;});},Log.e.bind(Log));Log.d('Local~shared',{sharedStream:sharedStream});return sharedStream;});}}]);return Local;}();exports.default=Local;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_Remote=__webpack_require__(62),_Remote2=_interopRequireDefault(_Remote);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var StreamManager=function(){function StreamManager(){(0,_classCallCheck3.default)(this,StreamManager);this.shared={};this.remote={};}(0,_createClass3.default)(StreamManager,[{key:'getRemote',value:function getRemote(streamData){var remoteStream=this.remote[streamData.uid];if(remoteStream){remoteStream.update(streamData);}else{this.remote[streamData.uid]=remoteStream=new _Remote2.default(streamData);}return remoteStream;}},{key:'getShared',value:function getShared(streamData){return this.shared[streamData.uid];}}]);return StreamManager;}();exports.default=StreamManager;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_getOwnPropertyDescriptor=__webpack_require__(101),_getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(30),_Media2=_interopRequireDefault(_Media),_Device=__webpack_require__(59),_Device2=_interopRequireDefault(_Device),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync),_constants=__webpack_require__(20);__webpack_require__(105);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DtlsSrtpKeyAgreement={DtlsSrtpKeyAgreement:true},sdpConstraints=function sdpConstraints(receive){return{OfferToReceiveAudio:receive,OfferToReceiveVideo:receive};},ICE_CONNECTION_STATE_DISCONNECTED='disconnected',ICE_CONNECTION_STATE_CONNECTED='connected',ICE_CONNECTION_STATE_COMPLETED='completed',ICE_CONNECTION_STATE_CHECKING='checking',ICE_CONNECTION_STATE_CLOSED='closed',ICE_CONNECTION_STATE_FAILED='failed',ICE_CONNECTION_STATE_OTHER='other',_toJSON=function _toJSON(o){return o.toJSON&&typeof o.toJSON==='function'?o.toJSON():o;};var PeerConnection=function(){function PeerConnection(stackId,streamId,remote,publish){var _this=this;(0,_classCallCheck3.default)(this,PeerConnection);this.stackId=stackId;this.streamId=streamId;this.remote=remote;this.publish=publish;this._localPath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+_cache2.default.device;this._remotePath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+this.remote.device;this.negotiated=false;this.node=null;this.container=null;this.pc=new RTCPeerConnection({iceServers:_cache2.default.config.iceServers},{optional:[DtlsSrtpKeyAgreement],mandatory:sdpConstraints(!publish)});this.pc.onicecandidate=function(e){if(!_this.negotiated&&e.candidate){Log.d('PeerConnection~onicecandidate',e.candidate);DataSync.push(_this._localPath+'/ice',_toJSON(e.candidate));}};this.pc.oniceconnectionstatechange=function(){Log.d('PeerConnection~oniceconnectionstatechange',_this.pc);var iceConnectionState=_this.pc.iceConnectionState;switch(iceConnectionState){case ICE_CONNECTION_STATE_CHECKING:break;case ICE_CONNECTION_STATE_CONNECTED:_this._attachStream();_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_COMPLETED:_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_DISCONNECTED:case ICE_CONNECTION_STATE_FAILED:console.log('PeerConnection~stateDisconnected Disconnect PeerConnection');break;case ICE_CONNECTION_STATE_CLOSED:console.log('PeerConnection~stateclosed Close PeerConnection');_this.close();break;}_this.negotiated=_this.negotiated||_this.isConnected;};this.pc.onicegatheringstatechange=function(){Log.d('PeerConnection~onicegatheringstatechange',_this.pc.iceGatheringState);};this._status=_constants.OPENED;}(0,_createClass3.default)(PeerConnection,[{key:'_remoteICECandidates',value:function _remoteICECandidates(listen){var _this2=this,path=this._remotePath+'/ice',event='child_added';if(listen){DataSync.on(path,event,function(snap){var candidate=snap.val();Log.d('PeerConnection~addIceCandidate',candidate);_this2.pc.addIceCandidate(new RTCIceCandidate(candidate));});}else{DataSync.off(path,event);}}},{key:'_attachStream',value:function _attachStream(){if(this.remoteStream&&this.isConnected){this.node=_Media2.default.attachStream(this.remoteStream,this.container,this.node);this.node.muted=false;}}},{key:'answer',value:function answer(htmlElement){var _this3=this;Log.i('PeerConnection~answer',{htmlElement:htmlElement,peerConnection:this});this.container=htmlElement;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'ontrack')){this.pc.ontrack=function(e){Log.d('PeerConnection~ontrack',e.streams[0]);_this3.remoteStream=e.streams[0];};}else{this.pc.onaddstream=function(e){Log.d('PeerConnection~onaddstream',e.stream);_this3.remoteStream=e.stream;};}DataSync.on(this._remotePath+'/sdp','value',function(snap){var sdpOffer=snap.val();if(sdpOffer!=null){Log.d('PeerConnection~offered '+sdpOffer.sdp);_this3.pc.setRemoteDescription(sdpOffer).then(function(){return Log.d('PeerConnection~answer#remoteDescription',_this3.pc.remoteDescription.sdp);}).then(function(){if(/^offer$/.test(_this3.pc.remoteDescription.type)){return _this3.pc.createAnswer();}return _promise2.default.reject(new Error('SDP is not an offer'));}).then(function(description){return _this3._setPreferredCodecs(description);}).then(function(description){return _this3.pc.setLocalDescription(description);}).then(function(){Log.d('PeerConnection~answer#localSDP',_this3.pc.localDescription.sdp);_this3._remoteICECandidates(true);}).then(function(){return _this3._sendSdpToRemote();}).catch(function(e){console.error('PeerConnection~answser#error '+e);_cache2.default.peerConnections.close(_this3.streamId,_this3.remote.device);});}});return _promise2.default.resolve(this);}},{key:'offer',value:function offer(stream){var _this4=this;Log.i('PeerConnection~offer',{stream:stream,peerConnection:this});var sendTimeout=void 0;return new _promise2.default(function(resolve,reject){_this4.pc.onnegotiationneeded=function(){Log.d('PeerConnection~onnegotiationneeded');if(sendTimeout){clearTimeout(sendTimeout);sendTimeout=null;}sendTimeout=setTimeout(function(){sendTimeout=null;_this4._sendOffer().then(function(){resolve(_this4);}).catch(function(e){Log.d('PeerConnection~offer',e);reject(e);});},20);};DataSync.on(_this4._remotePath+'/sdp','value',function(snap){var sdpAnswer=snap.val();if(sdpAnswer!=null){Log.d('PeerConnection~offer#answered '+sdpAnswer.sdp);_this4.pc.setRemoteDescription(sdpAnswer).then(function(){Log.d('PeerConnection~offer#remoteDescription',_this4.pc.remoteDescription.sdp);_this4._remoteICECandidates(true);}).catch(Log.e.bind(Log,'PeerConnection~offer#remoteDescription'));}});_this4._alterStream(stream,'add');});}},{key:'_sendSdpToRemote',value:function _sendSdpToRemote(){var _this5=this,remoteUserId=this.remote.to?this.remote.to:this.remote.from;_Device2.default.get(remoteUserId,this.remote.device).then(function(remoteDevice){var sdpOffer=_this5.pc.localDescription.sdp,newSdp=sdpOffer,local=/Chrome\/([0-9]+)/.exec(navigator.userAgent),remote=/Chrome\/([0-9]+)/.exec(remoteDevice.userAgent);if(navigator.userAgent.indexOf('Chrome')!==-1&&navigator.userAgent.indexOf('Android')!==-1&&remoteDevice.userAgent.indexOf('Safari')!==-1&&local[1]<=64){if(local[1]<=60){newSdp=newSdp.replace(/;profile-level-id=([a-z0-9]+)/,'');}else{newSdp=newSdp.replace('42001f','42e01f');}}if(navigator.userAgent.indexOf('Safari')!==-1&&remoteDevice.userAgent.indexOf('Chrome')!==-1&&remoteDevice.userAgent.indexOf('Android')!==-1&&remote[1]<=64){if(remote[1]<=60){newSdp=newSdp.replace(/;profile-level-id=([a-z0-9]+)/,'');}else{newSdp=newSdp.replace('42e01f','42001f');}}Log.d('PeerConnection~_sendSdpToRemote#SDP sent to remote '+newSdp);var descriptionChanged={sdp:newSdp,type:_this5.pc.localDescription.type};DataSync.update(_this5._localPath+'/sdp',_toJSON(descriptionChanged));});}},{key:'_sendOffer',value:function _sendOffer(){var _this6=this;Log.d('PeerConnection~_sendOffer');return this.pc.createOffer().then(function(description){return _this6._setPreferredCodecs(description);}).then(function(description){return _this6.pc.setLocalDescription(description);}).then(function(){return Log.d('PeerConnection~_sendOffer#localDescription',_this6.pc.localDescription.sdp);}).then(function(){return _this6._sendSdpToRemote();});}},{key:'_alterStream',value:function _alterStream(stream,method){var _this7=this;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,method+'Track')){if(method==='add'){stream.getTracks().forEach(function(track){return _this7.pc[method+'Track'](track,stream);},this);}else{this.pc.getSenders().forEach(function(sender){return _this7.pc[method+'Track'](sender);},this);}}else{this.pc[method+'Stream'](stream);}}},{key:'renegotiate',value:function renegotiate(oldStream,newStream){Log.d('PeerConnection~renegotiate');if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'getSenders')&&'RTCRtpSender'in window&&(0,_getOwnPropertyDescriptor2.default)(RTCRtpSender.prototype,'replaceTrack')){this.pc.getSenders().forEach(function(sender){var newTracks=void 0;switch(sender.track.kind){case'audio':newTracks=newStream.getAudioTracks();break;case'video':newTracks=newStream.getVideoTracks();break;default:newTracks=[];}if(newTracks.length){sender.replaceTrack(newTracks[0]);}});this._sendOffer().catch(function(e){Log.d('PeerConnection~renegotiate',e);});}else{this._alterStream(oldStream,'remove');this._alterStream(newStream,'add');}}},{key:'close',value:function close(){var _this8=this;if(this._status===_constants.OPENED){this._status=_constants.CLOSING;if(this.node){this.node.stop&&this.node.stop();this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;}this._remoteICECandidates(false);DataSync.off(this._remotePath+'/sdp','value');DataSync.remove(this._localPath);if(this.pc&&this.pc.signalingState!=='closed'){this.pc.onsignalingstatechange=function(){if(_this8.pc.signalingState!=='closed'){_this8._status=_constants.CLOSED;}};this.pc.close();}else{this._status=_constants.CLOSED;}}}},{key:'_setPreferredCodecs',value:function _setPreferredCodecs(description){if(_cache2.default.config.preferredVideoCodec||_cache2.default.config.preferredAudioCodec){Log.d('PeerConnection~_setPreferredCodecs',{description:description,config:_cache2.default.config});var sdpLines=description.sdp.split(/\r?\n/),medias={audio:[],video:[]},current=null;sdpLines.forEach(function(sdpLine,i){if(/^m=/.test(sdpLine)){var d=/^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);current={fmt:d[2].split(/\s/),index:i,codecs:[]};medias[d[1]].push(current);}else if(current&&/^a=rtpmap:/.test(sdpLine)){var c=/^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);if(c){current.codecs.push({id:c[1],name:c[2],index:i});}}});Log.d('PeerConnection~_setPreferredCodecs',medias);var update=false,prefer=function prefer(mediaList,preferedCodec){mediaList.forEach(function(media){var selected=media.codecs.find(function(codec){return preferedCodec.test(codec.name);});if(selected){var fmt=[selected.id].concat(media.fmt.filter(function(ids){return ids!==selected.id;}));sdpLines[media.index]=sdpLines[media.index].replace(media.fmt.join(' '),fmt.join(' '));update=true;}});};if(_cache2.default.config.preferredVideoCodec){prefer(medias.video,_cache2.default.config.preferredVideoCodec);}if(_cache2.default.config.preferredAudioCodec){prefer(medias.audio,_cache2.default.config.preferredAudioCodec);}if(update){Log.d('PeerConnection~_setPreferredCodecs',sdpLines.join('\r\n'));return{sdp:sdpLines.join('\r\n'),type:description.type};}}return description;}},{key:'remoteStream',set:function set(stream){this._remoteStream=stream;this._attachStream();},get:function get(){return this._remoteStream;}},{key:'isConnected',get:function get(){return this.pc&&!!~[ICE_CONNECTION_STATE_CONNECTED,ICE_CONNECTION_STATE_COMPLETED,ICE_CONNECTION_STATE_OTHER].indexOf(this.pc.iceConnectionState);}}]);return PeerConnection;}();exports.default=PeerConnection;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(8),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_PeerConnection=__webpack_require__(96),_PeerConnection2=_interopRequireDefault(_PeerConnection),_cache=__webpack_require__(6),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(5),Log=_interopRequireWildcard(_Log),_DataSync=__webpack_require__(7),DataSync=_interopRequireWildcard(_DataSync);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var getShortStackId=function getShortStackId(id1,id2){return id1.localeCompare(id2,'en-us')>0?id1+'-'+id2:id2+'-'+id1;},hashCode=function hashCode(str){return str.split('').reduce(function(prevHash,currVal){return(prevHash<<5)-prevHash+currVal.charCodeAt(0)|0;},0);},getStackId=function getStackId(deviceId1,deviceId2){var shortstackId=getShortStackId(deviceId1,deviceId2),hash=''+hashCode(shortstackId),length=hash.length,id1=hash.substring(length-3,length),id2=hash.substring(length-6,length-3);return id1+'/'+id2+'/'+shortstackId;};var PeerConnectionManager=function(){function PeerConnectionManager(){(0,_classCallCheck3.default)(this,PeerConnectionManager);this.stacks={};}(0,_createClass3.default)(PeerConnectionManager,[{key:'getPeerConnection',value:function getPeerConnection(stream,remote,publish){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can get a PeerConnection\'s object.'));}var stackId=getStackId(remote.device,_cache2.default.device);if(this.stacks[stackId]&&this.stacks[stackId][stream.uid]){return _promise2.default.resolve(this.stacks[stackId][stream.uid]);}if(!this.stacks[stackId]){this.stacks[stackId]={};}var userId=_cache2.default.user.uid.split('/'),shortUserId=userId[2],shortRemoteTo=undefined,shortRemoteFrom=undefined;if(remote.to){var remoteTo=remote.to.split('/');shortRemoteTo=remoteTo[2];}else{var remoteFrom=remote.from.split('/');shortRemoteFrom=remoteFrom[2];}var users={};users[shortUserId]=true;users[shortRemoteFrom||shortRemoteTo]=true;return DataSync.update('_/webrtc/'+stackId,users).then(function(){return new _PeerConnection2.default(stackId,stream.uid,remote,publish);}).then(function(pc){Log.d('PeerConnectionManager~getPeerConnection',{stackId:stackId,streamId:stream.uid,pc:pc});_this.stacks[stackId][stream.uid]=pc;return pc;}).catch(Log.r('PeerConnectionManager~getPeerConnection'));}},{key:'offer',value:function offer(localStream,subscriber){Log.d('PeerConnectionManager~offer',{localStream:localStream,subscriber:subscriber});return this.getPeerConnection(localStream,subscriber,true).then(function(pc){return pc.offer(localStream.media);});}},{key:'answer',value:function answer(remoteStream,htmlElement){Log.d('PeerConnectionManager~answer',{remoteStream:remoteStream,htmlElement:htmlElement});return this.getPeerConnection(remoteStream,remoteStream,false).then(function(pc){return pc.answer(htmlElement);});}},{key:'close',value:function close(streamId,remoteDevice){var stackId=getStackId(remoteDevice,_cache2.default.device),pc=this.stacks[stackId]?this.stacks[stackId][streamId]:null;if(pc){pc.close();DataSync.remove('_/webrtc/'+stackId);this.stacks[stackId][streamId]=null;delete this.stacks[stackId][streamId];return pc;}return false;}}]);return PeerConnectionManager;}();exports.default=PeerConnectionManager;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(103);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(102);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);
module.exports = __webpack_require__(38).Array.find;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(136);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
var $Object = __webpack_require__(1).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
__webpack_require__(53);
__webpack_require__(84);
__webpack_require__(142);
__webpack_require__(144);
__webpack_require__(145);
module.exports = __webpack_require__(1).Promise;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(143);
__webpack_require__(83);
__webpack_require__(146);
__webpack_require__(147);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(84);
module.exports = __webpack_require__(52).f('iterator');


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(49);
var toAbsoluteIndex = __webpack_require__(134);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(27);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(34);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(68);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(49);
var getIterFn = __webpack_require__(82);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
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
  } return fn.apply(that, args);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(72);
var descriptor = __webpack_require__(27);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(37)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(81).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(22)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(34);
var toObject = __webpack_require__(36);
var IObject = __webpack_require__(67);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(26);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(74).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(15);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(46)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(13);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var defined = __webpack_require__(41);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(48);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(23);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(36);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(68);
var toLength = __webpack_require__(49);
var createProperty = __webpack_require__(118);
var getIterFn = __webpack_require__(82);

$export($export.S + $export.F * !__webpack_require__(71)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(115);
var step = __webpack_require__(124);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(70)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(127) });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(18);
var $getOwnPropertyDescriptor = __webpack_require__(73).f;

__webpack_require__(76)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(36);
var $keys = __webpack_require__(26);

__webpack_require__(76)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var global = __webpack_require__(3);
var ctx = __webpack_require__(23);
var classof = __webpack_require__(64);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(33);
var anInstance = __webpack_require__(116);
var forOf = __webpack_require__(120);
var speciesConstructor = __webpack_require__(80);
var task = __webpack_require__(81).set;
var microtask = __webpack_require__(126)();
var newPromiseCapabilityModule = __webpack_require__(44);
var perform = __webpack_require__(77);
var userAgent = __webpack_require__(135);
var promiseResolve = __webpack_require__(78);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(131)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(35)($Promise, PROMISE);
__webpack_require__(132)(PROMISE);
Wrapper = __webpack_require__(1)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(71)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(79);
var META = __webpack_require__(125).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(47);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(37);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(52);
var wksDefine = __webpack_require__(51);
var enumKeys = __webpack_require__(119);
var isArray = __webpack_require__(122);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(17);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(50);
var createDesc = __webpack_require__(27);
var _create = __webpack_require__(72);
var gOPNExt = __webpack_require__(129);
var $GOPD = __webpack_require__(73);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(26);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f = $propertyIsEnumerable;
  __webpack_require__(45).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(25)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(1);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(80);
var promiseResolve = __webpack_require__(78);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(44);
var perform = __webpack_require__(77);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('asyncIterator');


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)('observable');


/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(89)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(55)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(39);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(86);
var IObject = __webpack_require__(159);
var toObject = __webpack_require__(168);
var toLength = __webpack_require__(167);
var asc = __webpack_require__(153);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(39);
var isArray = __webpack_require__(160);
var SPECIES = __webpack_require__(89)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(152);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 154 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(39);
var document = __webpack_require__(28).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(28);
var core = __webpack_require__(38);
var hide = __webpack_require__(55);
var redefine = __webpack_require__(164);
var ctx = __webpack_require__(86);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
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
/* 157 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(54) && !__webpack_require__(87)(function () {
  return Object.defineProperty(__webpack_require__(155)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(85);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(85);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(150);
var IE8_DOM_DEFINE = __webpack_require__(158);
var toPrimitive = __webpack_require__(169);
var dP = Object.defineProperty;

exports.f = __webpack_require__(54) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(28);
var hide = __webpack_require__(55);
var has = __webpack_require__(157);
var SRC = __webpack_require__(88)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(38).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(38);
var global = __webpack_require__(28);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(161) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 166 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(166);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(154);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(39);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(156);
var $find = __webpack_require__(151)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(149)(KEY);


/***/ }),
/* 171 */
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

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
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
    component: parseInt(parts[1], 10),
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
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
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
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
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
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
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
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
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

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

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

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
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
    var parts = line.substr(17).split(' ');
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
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
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
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
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

  // Gets the first SSRC. Note tha with RTX there might be multiple
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
  .filter(function(msidParts) {
    return msidParts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=thisisadapterortc ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
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

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ }),
/* 172 */
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



var adapterFactory = __webpack_require__(173);
module.exports = adapterFactory({window: global.window});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

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



// Shimming starts here.
module.exports = function(dependencies, opts) {
  var window = dependencies && dependencies.window;

  var options = {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true,
  };

  for (var key in opts) {
    if (hasOwnProperty.call(opts, key)) {
      options[key] = opts[key];
    }
  }

  // Utils.
  var utils = __webpack_require__(19);
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  // Export to the adapter global object visible in the browser.
  var adapter = {
    browserDetails: browserDetails,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings
  };

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = __webpack_require__(174) || null;
  var edgeShim = __webpack_require__(176) || null;
  var firefoxShim = __webpack_require__(179) || null;
  var safariShim = __webpack_require__(181) || null;

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection ||
          !options.shimChrome) {
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
      chromeShim.shimAddTrackRemoveTrack(window);
      chromeShim.shimGetSendersWithDtmf(window);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection ||
          !options.shimFirefox) {
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
      if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
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
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;
      // shim window.URL.createObjectURL Safari (technical preview)
      utils.shimCreateObjectURL(window);
      safariShim.shimRTCIceServerUrls(window);
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

var utils = __webpack_require__(19);
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
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
          }
          this.addEventListener('track', this._ontrack = f);
        }
      });
      var origSetRemoteDescription =
          window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function() {
        var pc = this;
        if (!pc._ontrackpoly) {
          pc._ontrackpoly = function(e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function(te) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === te.track.id;
                });
              } else {
                receiver = {track: te.track};
              }

              var event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function(track) {
              var receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = pc.getReceivers().find(function(r) {
                  return r.track && r.track.id === track.id;
                });
              } else {
                receiver = {track: track};
              }
              var event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.streams = [e.stream];
              pc.dispatchEvent(event);
            });
          };
          pc.addEventListener('addstream', pc._ontrackpoly);
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    }
  },

  shimGetSendersWithDtmf: function(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection &&
        !('getSenders' in window.RTCPeerConnection.prototype) &&
        'createDTMFSender' in window.RTCPeerConnection.prototype) {
      var shimSenderWithDtmf = function(pc, track) {
        return {
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
          },
          _pc: pc
        };
      };

      // augment addTrack when getSenders is not available.
      if (!window.RTCPeerConnection.prototype.getSenders) {
        window.RTCPeerConnection.prototype.getSenders = function() {
          this._senders = this._senders || [];
          return this._senders.slice(); // return a copy of the internal state.
        };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          var pc = this;
          var sender = origAddTrack.apply(pc, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(pc, track);
            pc._senders.push(sender);
          }
          return sender;
        };

        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function(sender) {
          var pc = this;
          origRemoveTrack.apply(pc, arguments);
          var idx = pc._senders.indexOf(sender);
          if (idx !== -1) {
            pc._senders.splice(idx, 1);
          }
        };
      }
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origAddStream.apply(pc, [stream]);
        stream.getTracks().forEach(function(track) {
          pc._senders.push(shimSenderWithDtmf(pc, track));
        });
      };

      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        pc._senders = pc._senders || [];
        origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);

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
        }
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

  shimAddTrackRemoveTrack: function(window) {
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack) {
      return;
    }

    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    var origGetLocalStreams = window.RTCPeerConnection.prototype
        .getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function() {
      var self = this;
      var nativeStreams = origGetLocalStreams.apply(this);
      self._reverseStreams = self._reverseStreams || {};
      return nativeStreams.map(function(stream) {
        return self._reverseStreams[stream.id];
      });
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      stream.getTracks().forEach(function(track) {
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.',
              'InvalidAccessError');
        }
      });
      // Add identity mapping for consistency with addTrack.
      // Unless this is being used with a stream from addTrack.
      if (!pc._reverseStreams[stream.id]) {
        var newStream = new window.MediaStream(stream.getTracks());
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(pc, [stream]);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};

      origRemoveStream.apply(pc, [(pc._streams[stream.id] || stream)]);
      delete pc._reverseStreams[(pc._streams[stream.id] ?
          pc._streams[stream.id].id : stream.id)];
      delete pc._streams[stream.id];
    };

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

      var alreadyExists = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }

      pc._streams = pc._streams || {};
      pc._reverseStreams = pc._reverseStreams || {};
      var oldStream = pc._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);
        pc.dispatchEvent(new Event('negotiationneeded'));
      } else {
        var newStream = new window.MediaStream([track]);
        pc._streams[stream.id] = newStream;
        pc._reverseStreams[newStream.id] = stream;
        pc.addStream(newStream);
      }
      return pc.getSenders().find(function(s) {
        return s.track === track;
      });
    };

    window.RTCPeerConnection.prototype.removeTrack = function(sender) {
      var pc = this;
      if (pc.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      var isLocal = sender._pc === pc;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
            'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      pc._streams = pc._streams || {};
      var stream;
      Object.keys(pc._streams).forEach(function(streamid) {
        var hasTrack = pc._streams[streamid].getTracks().find(function(track) {
          return sender.track === track;
        });
        if (hasTrack) {
          stream = pc._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          pc.removeStream(stream);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        pc.dispatchEvent(new Event('negotiationneeded'));
      }
    };
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
              utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
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
  shimAddTrackRemoveTrack: chromeShim.shimAddTrackRemoveTrack,
  shimGetSendersWithDtmf: chromeShim.shimGetSendersWithDtmf,
  shimSourceObject: chromeShim.shimSourceObject,
  shimPeerConnection: chromeShim.shimPeerConnection,
  shimGetUserMedia: __webpack_require__(175)
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
 /* eslint-env node */

var utils = __webpack_require__(19);
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
/* 176 */
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


var utils = __webpack_require__(19);
var shimRTCPeerConnection = __webpack_require__(178);

module.exports = {
  shimGetUserMedia: __webpack_require__(177),
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

    // ORTC defines the DTMF sender a bit different.
    // https://github.com/w3c/ortc/issues/714
    if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = new window.RTCDtmfSender(this);
            } else if (this.track.kind === 'video') {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
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
/* 177 */
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
/* 178 */
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


var SDPUtils = __webpack_require__(171);

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

    this._sdpSessionId = SDPUtils.generateSessionId();
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
      delete dtlsTransport.ondtlsstatechange;
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

        if (isComplete && cands.length &&
            (!usingBundle || sdpMLineIndex === 0)) {
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

        if (!usingBundle || sdpMLineIndex === 0) {
          if ((isIceLite || isComplete) && cands.length) {
            iceTransport.setRemoteCandidates(cands);
          }
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

    var sdp = SDPUtils.writeSessionBoilerplate(this._sdpSessionId);
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
    var sdp = SDPUtils.writeSessionBoilerplate(this._sdpSessionId);
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
/* 179 */
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


var utils = __webpack_require__(19);

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
  shimGetUserMedia: __webpack_require__(180)
};


/***/ }),
/* 180 */
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


var utils = __webpack_require__(19);
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
    utils.deprecated('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

var utils = __webpack_require__(19);

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
  },
  shimRTCIceServerUrls: function(window) {
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    var OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') &&
              server.hasOwnProperty('url')) {
            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
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
};

// Expose public methods.
module.exports = {
  shimCallbacksAPI: safariShim.shimCallbacksAPI,
  shimLocalStreamsAPI: safariShim.shimLocalStreamsAPI,
  shimRemoteStreamsAPI: safariShim.shimRemoteStreamsAPI,
  shimGetUserMedia: safariShim.shimGetUserMedia,
  shimRTCIceServerUrls: safariShim.shimRTCIceServerUrls
  // TODO
  // shimPeerConnection: safariShim.shimPeerConnection
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1MzY1ZTg5MTNiZjMzYjE1ZjVmZSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbC9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbC9jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL0RhdGFTeW5jLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Sb29tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluaXRpb25zL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiV2ViY29tXCIsXCJjb21tb25qc1wiOlwid2ViY29tL3dlYmNvbVwiLFwiY29tbW9uanMyXCI6XCJ3ZWJjb20vd2ViY29tXCIsXCJhbWRcIjpcIndlYmNvbS93ZWJjb21cIn0iLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9JbnZpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RldmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1BhcnRpY2lwYW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9SZW1vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvQ29kZWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9Mb2NhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHJlYW0vU3RyZWFtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vYXJyYXkvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zZHAvc2RwLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2FkYXB0ZXJfY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9hZGFwdGVyX2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvY2hyb21lL2Nocm9tZV9zaGltLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9nZXR1c2VybWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9lZGdlX3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9nZXR1c2VybWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9ydGNwZWVyY29ubmVjdGlvbl9zaGltLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2ZpcmVmb3gvZmlyZWZveF9zaGltLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2ZpcmVmb3gvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3NhZmFyaS9zYWZhcmlfc2hpbS5qcyJdLCJuYW1lcyI6WyJsZXZlbHMiLCJpc0VuYWJsZWQiLCJpbmRleE9mIiwibGV2ZWwiLCJ0b1VwcGVyQ2FzZSIsImNhY2hlIiwibG9nTGV2ZWwiLCJnQ29uc29sZSIsImdsb2JhbCIsImxvZ2dlciIsIm1ldGhvZCIsIm1lc3NhZ2VzIiwidG9Mb3dlckNhc2UiLCJiaW5kIiwiZ3JvdXAiLCJtZXNzYWdlIiwiaXRlbXMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJjb25jYXQiLCJBcnJheSIsImZvckVhY2giLCJpdGVtIiwiZ3JvdXBFbmQiLCJkIiwiaSIsInciLCJlIiwiZXJyb3IiLCJyIiwicmVhc29uIiwicmVqZWN0IiwiX2NhY2hlIiwiQ2FjaGVNYW5hZ2VyIiwidXJsIiwiX2Jhc2UiLCJXZWJjb20iLCJjb25maWciLCJfY29uZmlnIiwiQ29uZmlnIiwiYXNzaWduIiwidXNlciIsIl91c2VyIiwiZGV2aWNlIiwiX2RldmljZSIsInRlc3QiLCJfbG9nTGV2ZWwiLCJFcnJvciIsIl9zdHJlYW1zIiwiU3RyZWFtTWFuYWdlciIsIl9wZWVyQ29ubmVjdGlvbnMiLCJQZWVyQ29ubmVjdGlvbk1hbmFnZXIiLCJldmVudFR5cGUiLCJldmVudCIsImV2dCIsIl93cml0ZSIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsImJhc2UiLCJjaGlsZCIsInNldCIsInB1c2giLCJwdXNoUmVmIiwidXBkYXRlIiwicmVtb3ZlIiwib25jZSIsImdldCIsImxpc3QiLCJUeXBlIiwicGFyYW1zIiwidGhlbiIsInNuYXBEYXRhIiwic25hcENoaWxkIiwib24iLCJxdWVyeUNhbGxiYWNrIiwiY2FuY2VsQ2FsbGJhY2siLCJvZmYiLCJjYWxsYmFjayIsIm9uRGlzY29ubmVjdCIsInRzIiwiRGF0ZSIsIm5vdyIsIk9QRU5FRCIsIkNMT1NFRCIsIkNMT1NJTkciLCJDT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwiV0FTX0NPTk5FQ1RFRCIsIk9XTkVSIiwiTU9ERVJBVE9SIiwiUEFSVElDSVBBTlQiLCJOT05FIiwiT05HT0lORyIsIkFDQ0VQVEVEIiwiUkVKRUNURUQiLCJDQU5DRUxFRCIsIkRhdGFTeW5jIiwiRXZlbnRzIiwiTG9nIiwiX2pvaW5Sb29tIiwicm9vbSIsInJvbGUiLCJ1aWQiLCJzcGxpdCIsImpvaW4iLCJzdGF0dXMiLCJwYXJ0aWNpcGFudCIsInVzZXJBZ2VudCIsIl9qb2luZWQiLCJSb29tIiwicm9vbVVpZCIsInZhbCIsIm5hbWUiLCJsb2NhbFN0cmVhbSIsIm93bmVyIiwiX3B1YmxpYyIsImV4dHJhIiwiX2NhbGxiYWNrcyIsIlBhcnRpY2lwYW50IiwiTWVzc2FnZSIsImxvY2FsU3RyZWFtcyIsIm1hcCIsImtleSIsInJvb21JZCIsInN0cmVhbXMiLCJmaWx0ZXIiLCJzdHJlYW0iLCJmcm9tIiwiY2F0Y2giLCJ1c2VycyIsIl9wYXRoIiwiX2RhdGEiLCJhbGwiLCJJbnZpdGUiLCJzZW5kIiwicmVtb3ZlUGFydGljaXBhbnQiLCJpbnZpdGUiLCJ0byIsImludml0ZXMiLCJ0b1BhdGgiLCJvYmoiLCJ0b0NsYXNzIiwidHlwZWRDYWxsYmFjayIsInN0cmVhbURhdGEiLCJyZW1vdGVTdHJlYW0iLCJnZXRSZW1vdGUiLCJ0eXBlIiwibG9jYWxTdHJlYW1Db250YWluZXIiLCJjb25zdHJhaW50cyIsIkxvY2FsIiwic2hhcmUiLCJnZXRMb2NhbFZpZGVvIiwicHVibGlzaCIsImNhbmNlbCIsImNsb3NlIiwicmVtb3RlU3RyZWFtcyIsInVuU3Vic2NyaWJlIiwibGVhdmUiLCJfY2xvc2VkIiwicHVibGljUm9vbSIsInJvb21NZXRhRGF0YSIsInJvb21GdWxsTWV0YURhdGEiLCJfY3JlYXRlZCIsImlkMSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlkMiIsInJvb21SZWYiLCJwcmVzZXRzIiwiVUhEIiwiaCIsIm1pbiIsIkZIRCIsIm1heCIsIkhEIiwiU1ZHQSIsIlNEIiwiVkdBIiwiX2Fzc2lnbkRldmljZSIsImNvbnN0cmFpbnQiLCJkZXZpY2VJZCIsImZhY2luZ01vZGUiLCJNZWRpYSIsInZpZGVvQ29uc3RyYWludHMiLCJhdWRpb0NvbnN0cmFpbnRzIiwidmlkZW9EZXZpY2VJZCIsImF1ZGlvRGV2aWNlSWQiLCJ2aWRlbyIsInByZXNldCIsImRpbUNvbnN0cmFpbnQiLCJkaW0iLCJpZGVhbCIsIndpZHRoIiwiaGVpZ2h0IiwiYXVkaW8iLCJtZWRpYVN0cmVhbSIsImNvbnRhaW5lciIsInByZXZpb3VzIiwidm9sdW1lIiwidGFnTmFtZSIsImdldFZpZGVvVHJhY2tzIiwiZ2V0QXVkaW9UcmFja3MiLCJfbm9kZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImF1dG9wbGF5IiwiUmVhY2giLCJicm93c2VyIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsInNyY09iamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmFkZHRyYWNrIiwidHJhY2siLCJsYWJlbCIsIm9ucmVtb3ZldHJhY2siLCJvbmluYWN0aXZlIiwib25wbGF5aW5nIiwiY29uc29sZSIsImRlYnVnIiwib25zdGFsbGVkIiwib25zdXNwZW5kIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImRldmljZXMiLCJraW5kIiwiVVNFUiIsIkVOVklST05NRU5UIiwicGF0aHMiLCJjbGFzc2VzIiwiVXNlciIsIlJlbW90ZSIsIl9FdmVudHMiLCJrZXlzIiwic3VwcG9ydHMiLCJyZXBsYWNlIiwicmVhY2giLCJfZW5kZWQiLCJwcm9wIiwicmVmIiwicGFyZW50IiwidG9waWMiLCJfbGlzdGVuZXIiLCJ1cGRhdGVkIiwiY2IiLCJpZHgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJzb21lIiwiaW52aXRlZSIsImludml0ZU1ldGFEYXRhIiwiaW52aXRlSWQiLCJpbnZpdGVSZWYiLCJpbml0aWFsaXppbmciLCJ1c2VySWQiLCJsYXN0U2VlbiIsImFub255bW91cyIsInByb3ZpZGVyIiwiY3JlYXRlIiwiRGV2aWNlIiwiYXV0aCIsInVzZXJVaWQiLCJJTlRFUk5BTCIsIlBlcnNpc3RlbnRTdG9yYWdlIiwiZGV2aWNlTWV0YWRhdGEiLCJzZGsiLCJ3ZWJjb20iLCJTREtfVkVSU0lPTiIsImRldmljZVJlZiIsImludml0ZUlkcyIsImhhc0Nvbm5lY3RlZERldmljZXMiLCJSZWdFeHAiLCJBVURJTyIsIlZJREVPIiwiQVVESU9fVklERU8iLCJTQ1JFRU5fU0hBUklORyIsImNmZyIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1lbWJlck1lIiwiY3JlYXRlVXNlciIsImxvZ2luIiwicCIsImN1cnJlbnQiLCJsb2dvdXQiLCJhdXRoV2l0aFBhc3N3b3JkIiwiaW5pdCIsInUiLCJyZXN1bWUiLCJhdXRoQW5vbnltb3VzbHkiLCJkaXNjb25uZWN0IiwiY2xzIiwicGVlckNvbm5lY3Rpb25zIiwic3RhY2tzIiwic2NoZW1hIiwiU3RyZWFtVHlwZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwib3MiLCJkZXZpY2VVaWQiLCJuZXdVaWQiLCJ0ZXh0IiwibmV3VGV4dCIsInJlbW90ZVN0cmVhbUNvbnRhaW5lciIsIm11dGVkIiwicGVlckNvbm5lY3Rpb24iLCJhbnN3ZXIiLCJwYyIsInN1YnNjcmliZWQiLCJTSVpFIiwiTVVURSIsIl9jbG9zZSIsInJlbW90ZSIsIm5vZGUiLCJjb21wYXRpYmxlIiwiYnJvd3NlckRldGFpbHMiLCJtaW5WZXJzaW9uIiwidmVyc2lvbiIsImJyb3dzZXJTaGltIiwiYXJncyIsImxvZyIsIl9mbGF0dGVuU2VydmVycyIsIl9leHBhbmQiLCJzZXJ2ZXJzIiwidXNlcm5hbWUiLCJzZXJ2ZXIiLCJjcmVkZW50aWFsIiwidXJscyIsInVyaXMiLCJ1cmkiLCJwcmVmZXJyZWRWaWRlb0NvZGVjIiwicHJlZmVycmVkQXVkaW9Db2RlYyIsInJlc2V0IiwiaWNlU2VydmVycyIsIm1lZGlhIiwiX2ljZVNlcnZlcnMiLCJfY3VycmVudFNlcnZlcnMiLCJfbmV3U2VydmVycyIsIm5ld1NlcnZlciIsInJlZHVjZSIsInMiLCJfZmFjaW5nTW9kZXMiLCJfZ2V0Q29uc3RyYWludFZhbHVlIiwiZXhhY3QiLCJfc2V0Q29uc3RyYWluVmFsdWUiLCJvdGhlciIsInZhbHVlIiwiaXNWaWRlb0xvYWRlZCIsIl9pbnB1dHMiLCJnZXRVc2VyTWVkaWEiLCJjb25zdHJhaW50c1ZhbHVlIiwic3RhdGUiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJlbmFibGVkIiwibXV0ZSIsIl9zd2l0Y2hEZXZpY2UiLCJuZXh0IiwiY3VycmVudE1vZGVJZHgiLCJtZWRpYURldmljZSIsInNvcnQiLCJuZXh0RGV2aWNlIiwidiIsInN0b3AiLCJwcm9wcyIsInJldmVyc2UiLCJ1cGRhdGVDb25zdHJhaW50cyIsImRlZmF1bHRDb25zdHJhaW50cyIsIl9jb25zdHJhaW50cyIsIk1lZGlhU3RyZWFtIiwiY2hlY2tEZXZpY2VzIiwiZGV2aWNlSWRzIiwiYXR0YWNoU3RyZWFtIiwib25sb2FkZWRkYXRhIiwicmVuZWdvdGlhdGUiLCJfbWVkaWEiLCJyZW1vdmVDaGlsZCIsInN0cmVhbU1ldGFEYXRhIiwic2hhcmVkU3RyZWFtIiwic3RyZWFtUmVmIiwic3RyZWFtU2l6ZSIsInZpZGVvSGVpZ2h0IiwidmlkZW9XaWR0aCIsIndpbmRvdyIsInNoYXJlZCIsInN1YnNjcmliZXIiLCJvZmZlciIsImNsb3NlZFBDIiwiRHRsc1NydHBLZXlBZ3JlZW1lbnQiLCJzZHBDb25zdHJhaW50cyIsIk9mZmVyVG9SZWNlaXZlQXVkaW8iLCJyZWNlaXZlIiwiT2ZmZXJUb1JlY2VpdmVWaWRlbyIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRCIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRCIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0NPTVBMRVRFRCIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfRkFJTEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfT1RIRVIiLCJfdG9KU09OIiwibyIsInRvSlNPTiIsIlBlZXJDb25uZWN0aW9uIiwic3RhY2tJZCIsInN0cmVhbUlkIiwiX2xvY2FsUGF0aCIsIl9yZW1vdGVQYXRoIiwibmVnb3RpYXRlZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib3B0aW9uYWwiLCJtYW5kYXRvcnkiLCJvbmljZWNhbmRpZGF0ZSIsImNhbmRpZGF0ZSIsIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlIiwiaWNlQ29ubmVjdGlvblN0YXRlIiwiX2F0dGFjaFN0cmVhbSIsIl9yZW1vdGVJQ0VDYW5kaWRhdGVzIiwiaXNDb25uZWN0ZWQiLCJvbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlIiwiaWNlR2F0aGVyaW5nU3RhdGUiLCJfc3RhdHVzIiwibGlzdGVuIiwic25hcCIsImFkZEljZUNhbmRpZGF0ZSIsIlJUQ0ljZUNhbmRpZGF0ZSIsImh0bWxFbGVtZW50IiwicHJvdG90eXBlIiwib250cmFjayIsIm9uYWRkc3RyZWFtIiwic2RwT2ZmZXIiLCJzZHAiLCJzZXRSZW1vdGVEZXNjcmlwdGlvbiIsInJlbW90ZURlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiX3NldFByZWZlcnJlZENvZGVjcyIsImRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJfc2VuZFNkcFRvUmVtb3RlIiwic2VuZFRpbWVvdXQiLCJvbm5lZ290aWF0aW9ubmVlZGVkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9zZW5kT2ZmZXIiLCJzZHBBbnN3ZXIiLCJfYWx0ZXJTdHJlYW0iLCJyZW1vdGVVc2VySWQiLCJyZW1vdGVEZXZpY2UiLCJuZXdTZHAiLCJsb2NhbCIsImV4ZWMiLCJkZXNjcmlwdGlvbkNoYW5nZWQiLCJjcmVhdGVPZmZlciIsImdldFNlbmRlcnMiLCJzZW5kZXIiLCJvbGRTdHJlYW0iLCJuZXdTdHJlYW0iLCJSVENSdHBTZW5kZXIiLCJuZXdUcmFja3MiLCJyZXBsYWNlVHJhY2siLCJzaWduYWxpbmdTdGF0ZSIsIm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UiLCJzZHBMaW5lcyIsIm1lZGlhcyIsInNkcExpbmUiLCJmbXQiLCJpbmRleCIsImNvZGVjcyIsImMiLCJpZCIsInByZWZlciIsIm1lZGlhTGlzdCIsInByZWZlcmVkQ29kZWMiLCJzZWxlY3RlZCIsImZpbmQiLCJjb2RlYyIsImlkcyIsIl9yZW1vdGVTdHJlYW0iLCJnZXRTaG9ydFN0YWNrSWQiLCJsb2NhbGVDb21wYXJlIiwiaGFzaENvZGUiLCJzdHIiLCJwcmV2SGFzaCIsImN1cnJWYWwiLCJjaGFyQ29kZUF0IiwiZ2V0U3RhY2tJZCIsImRldmljZUlkMSIsImRldmljZUlkMiIsInNob3J0c3RhY2tJZCIsImhhc2giLCJzdWJzdHJpbmciLCJzaG9ydFVzZXJJZCIsInNob3J0UmVtb3RlVG8iLCJzaG9ydFJlbW90ZUZyb20iLCJyZW1vdGVUbyIsInJlbW90ZUZyb20iLCJnZXRQZWVyQ29ubmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDUkEsNkJBQTZCO0FBQzdCLHVDQUF1Qzs7Ozs7Ozs7QUNEdkM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7OztBQzFCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOzs7Ozs7O0FDTHpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozt5ZENITUEsUUFBUyxDQUFDLE9BQUQsQ0FBVSxNQUFWLENBQWtCLE1BQWxCLENBQTBCLE9BQTFCLEMsQ0FPVEMsVUFBWSxRQUFaQSxVQUFZLE9BQVMsQ0FDMUIsTUFBT0QsUUFBT0UsT0FBUCxDQUFlQyxNQUFNQyxXQUFOLEVBQWYsR0FBdUNKLE9BQU9FLE9BQVAsQ0FBZUcsZ0JBQU1DLFFBQU4sQ0FBZUYsV0FBZixFQUFmLENBQTlDLENBQ0EsQyxDQU1LRyxTQUFXQyxjLENBUVhDLE9BQVMsUUFBVEEsT0FBUyxDQUFDQyxNQUFELENBQVNQLEtBQVQsQ0FBZ0MsK0JBQWJRLFFBQWEsaURBQWJBLFFBQWEsMEJBQzlDVixVQUFVRSxLQUFWLEVBQW1CSSxTQUFTRyxPQUFPRSxXQUFQLEVBQVQsRUFBK0JDLElBQS9CLENBQW9DTixRQUFwQyxrQkFBaURJLFFBQWpELENBQW5CLENBQWdGLFVBQU0sQ0FBRSxDQUF4RixDQUNBLEMsQ0FRS0csTUFBUSxRQUFSQSxNQUFRLENBQUNYLEtBQUQsQ0FBUVksT0FBUixDQUE4QixnQ0FBVkMsS0FBVSx1REFBVkEsS0FBVSw0QkFDM0MsR0FBSUEsTUFBTUMsTUFBTixDQUFlLENBQW5CLENBQXNCLENBQ3JCUixPQUFPSSxJQUFQLENBQVlLLFNBQVosQ0FBdUJYLFNBQVNPLEtBQVQsQ0FBaUIsT0FBakIsQ0FBMkJYLEtBQWxELENBQXlEQSxLQUF6RCxFQUFnRSxNQUFPWSxRQUFQLEdBQW1CLFFBQW5CLENBQThCQSxPQUE5QixDQUF3QyxFQUF4RyxFQUNBLEdBQUlJLFFBQVMsQ0FBQyxNQUFPSixRQUFQLEdBQW1CLFFBQW5CLENBQThCLENBQUNBLE9BQUQsQ0FBOUIsQ0FBMEMsRUFBM0MsRUFBK0NLLE1BQS9DLENBQXNESixLQUF0RCxDQUFiLENBQ0EsR0FBSUEsTUFBTUMsTUFBTixHQUFpQixDQUFqQixFQUFzQkQsTUFBTSxDQUFOLFdBQW9CSyxNQUExQyxFQUFtRCxxQkFBT0wsTUFBTSxDQUFOLEVBQVNDLE1BQWhCLElBQTJCQyxTQUFsRixDQUE2RixDQUM1RkMsT0FBU0gsTUFBTSxDQUFOLENBQVQsQ0FDQSxDQUNERyxPQUFPRyxPQUFQLENBQWUscUJBQVFiLFFBQU9JLElBQVAsQ0FBWUssU0FBWixDQUF1QmYsS0FBdkIsQ0FBOEJBLEtBQTlCLEVBQXFDb0IsSUFBckMsQ0FBUixFQUFmLEVBQ0FoQixTQUFTaUIsUUFBVCxFQUFxQmpCLFNBQVNpQixRQUFULEVBQXJCLENBQ0EsQ0FSRCxJQVFPLENBQ05mLE9BQU9JLElBQVAsQ0FBWUssU0FBWixDQUF1QmYsS0FBdkIsQ0FBOEJBLEtBQTlCLENBQXFDWSxPQUFyQyxFQUNBLENBQ0QsQyxDQU9NLEdBQU1VLGFBQUlYLE1BQU1ELElBQU4sQ0FBV0ssU0FBWCxDQUFzQmxCLE9BQU8sQ0FBUCxDQUF0QixDQUFWLENBTUEsR0FBTTBCLGFBQUlaLE1BQU1ELElBQU4sQ0FBV0ssU0FBWCxDQUFzQmxCLE9BQU8sQ0FBUCxDQUF0QixDQUFWLENBTUEsR0FBTTJCLGFBQUliLE1BQU1ELElBQU4sQ0FBV0ssU0FBWCxDQUFzQmxCLE9BQU8sQ0FBUCxDQUF0QixDQUFWLENBTUEsR0FBTTRCLGFBQUlyQixTQUFTc0IsS0FBVCxDQUFlaEIsSUFBZixDQUFvQk4sUUFBcEIsQ0FBVixDQU9BLEdBQU11QixhQUFJLFFBQUpBLEVBQUksZ0JBQVcsaUJBQVUsQ0FDckNMLEVBQUVWLE9BQUYsQ0FBV2dCLE1BQVgsRUFDQSxNQUFPLG1CQUFRQyxNQUFSLENBQWVELFFBQVVoQixPQUF6QixDQUFQLENBQ0EsQ0FIZ0IsRUFBVixDOzs7Ozs7OztpckJDMUVQLEdBQUlrQixRQUFTLElBQWIsQyxHQU1NQyxhLFlBS0wsdUJBQWMsaURBQ2IsR0FBRyxDQUFDRCxNQUFKLENBQVksQ0FDWEEsT0FBUyxJQUFULENBQ0EsQ0FDRCxNQUFPQSxPQUFQLENBQ0EsQyxxRUFLUUUsRyxDQUFLLENBSWIsS0FBS0MsS0FBTCxDQUFhRCxjQUFlRSxpQkFBZixDQUF3QkYsR0FBeEIsQ0FBOEIsR0FBSUUsaUJBQUosQ0FBV0YsR0FBWCxDQUEzQyxDQUNBLEMsbUJBS1UsQ0FDVixNQUFPLE1BQUtDLEtBQVosQ0FDQSxDLGlDQU1VRSxNLENBQVEsQ0FDbEIsR0FBRyxDQUFDLEtBQUtDLE9BQVQsQ0FBa0IsQ0FJakIsS0FBS0EsT0FBTCxDQUFlLEdBQUlDLGlCQUFKLENBQVdGLE1BQVgsQ0FBZixDQUNBLENBTEQsSUFLTyxDQUNOLEtBQUtDLE9BQUwsQ0FBYUUsTUFBYixDQUFvQkgsTUFBcEIsRUFDQSxDQUNELEMsbUJBS1ksQ0FDWixHQUFHLENBQUMsS0FBS0MsT0FBVCxDQUFrQixDQUNqQixLQUFLQSxPQUFMLENBQWUsR0FBSUMsaUJBQUosRUFBZixDQUNBLENBQ0QsTUFBTyxNQUFLRCxPQUFaLENBQ0EsQywrQkFLUUcsSSxDQUFNLENBSWQsS0FBS0MsS0FBTCxDQUFhRCxJQUFiLENBQ0EsQyxtQkFLVSxDQUNWLE1BQU8sTUFBS0MsS0FBWixDQUNBLEMsaUNBS1VDLE0sQ0FBUSxDQUlsQixLQUFLQyxPQUFMLENBQWVELE1BQWYsQ0FDQSxDLG1CQUtZLENBQ1osTUFBTyxNQUFLQyxPQUFaLENBQ0EsQyxtQ0FNWTFDLEssQ0FBTyxDQUNuQixHQUFHLDJCQUEyQjJDLElBQTNCLENBQWdDM0MsS0FBaEMsQ0FBSCxDQUEyQyxDQUkxQyxLQUFLNEMsU0FBTCxDQUFpQjVDLEtBQWpCLENBQ0EsQ0FMRCxJQUtPLElBQUdBLEtBQUgsQ0FBVSxDQUNoQixLQUFNLElBQUk2QyxNQUFKLENBQVUsa0RBQVYsQ0FBTixDQUNBLENBQ0QsQyxtQkFLYyxDQUNkLE1BQU8sTUFBS0QsU0FBTCxFQUFrQixPQUF6QixDQUNBLEMsbUNBTWEsQ0FDYixHQUFHLENBQUMsS0FBS0UsUUFBVCxDQUFtQixDQUlsQixLQUFLQSxRQUFMLENBQWdCLEdBQUlDLHdCQUFKLEVBQWhCLENBQ0EsQ0FDRCxNQUFPLE1BQUtELFFBQVosQ0FDQSxDLDJDQU1xQixDQUNyQixHQUFHLENBQUMsS0FBS0UsZ0JBQVQsQ0FBMkIsQ0FJMUIsS0FBS0EsZ0JBQUwsQ0FBd0IsR0FBSUMsZ0NBQUosRUFBeEIsQ0FDQSxDQUNELE1BQU8sTUFBS0QsZ0JBQVosQ0FDQSxDLDRCQVFGLEdBQU05QyxPQUFRLEdBQUk2QixhQUFKLEVBQWQsQyxnQkFNZTdCLEs7Ozs7Ozs7Z2RDOUpSLEdBQU1nRCw2QkFBWSxRQUFaQSxVQUFZLENBQUNDLEtBQUQsQ0FBVyxDQUNuQyxHQUFJQyxXQUFKLENBQ0EsR0FBSSxVQUFELENBQWFULElBQWIsQ0FBa0JRLEtBQWxCLEdBQTRCLGNBQWNSLElBQWQsQ0FBbUJRLEtBQW5CLENBQS9CLENBQTBELENBQ3pEQyxJQUFNLE9BQU4sQ0FDQSxDQUZELElBRU8sSUFBRyxZQUFZVCxJQUFaLENBQWlCUSxLQUFqQixHQUEyQixjQUFjUixJQUFkLENBQW1CUSxLQUFuQixDQUE5QixDQUF5RCxDQUMvREMsSUFBTSxTQUFOLENBQ0EsQ0FGTSxJQUVBLElBQUcsWUFBWVQsSUFBWixDQUFpQlEsS0FBakIsR0FBMkIsZ0JBQWdCUixJQUFoQixDQUFxQlEsS0FBckIsQ0FBOUIsQ0FBMkQsQ0FDakVDLElBQU0sU0FBTixDQUNBLENBQ0QsTUFBT0EsY0FBZUEsR0FBZixDQUF1QkQsS0FBOUIsQ0FDQSxDQVZNLENBbUJQLEdBQU1FLFFBQVMsUUFBVEEsT0FBUyxDQUFDOUMsTUFBRCxDQUFTK0MsSUFBVCxDQUFlQyxJQUFmLFFBQXdCLHVCQUFZLFNBQUNDLE9BQUQsQ0FBVTNCLE1BQVYsQ0FBcUIsQ0FDdkUzQixnQkFBTXVELElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUIvQyxNQUF2QixFQUErQmdELElBQS9CLENBQXFDLHNCQUFTN0IsT0FBUUcsT0FBT0gsS0FBUCxDQUFSLENBQXdCOEIsU0FBakMsRUFBckMsRUFDQSxDQUZzQyxDQUF4QixFQUFmLENBV08sR0FBTUcsaUJBQU1OLE9BQU8zQyxJQUFQLENBQVlLLFNBQVosQ0FBdUIsS0FBdkIsQ0FBWixDQVNBLEdBQU02QyxtQkFBTyxRQUFQQSxLQUFPLENBQUNOLElBQUQsQ0FBT0MsSUFBUCxRQUFnQix1QkFBWSxTQUFDQyxPQUFELENBQVUzQixNQUFWLENBQXFCLENBQ3BFLEdBQU1nQyxTQUFVM0QsZ0JBQU11RCxJQUFOLENBQVdDLEtBQVgsQ0FBaUJKLElBQWpCLEVBQXVCTSxJQUF2QixDQUE0QkwsSUFBNUIsQ0FBa0Msc0JBQVM3QixPQUFRRyxPQUFPSCxLQUFQLENBQVIsQ0FBd0I4QixRQUFRSyxPQUFSLENBQWpDLEVBQWxDLENBQWhCLENBQ0EsQ0FGbUMsQ0FBaEIsRUFBYixDQVdBLEdBQU1DLHVCQUFTVCxPQUFPM0MsSUFBUCxDQUFZSyxTQUFaLENBQXVCLFFBQXZCLENBQWYsQ0FRQSxHQUFNZ0QsdUJBQVMsUUFBVEEsT0FBUyxDQUFDVCxJQUFELFFBQVUsdUJBQVksU0FBQ0UsT0FBRCxDQUFVM0IsTUFBVixDQUFxQixDQUNoRTNCLGdCQUFNdUQsSUFBTixDQUFXQyxLQUFYLENBQWlCSixJQUFqQixFQUF1QlMsTUFBdkIsQ0FBOEIsc0JBQVNyQyxPQUFRRyxPQUFPSCxLQUFQLENBQVIsQ0FBd0I4QixTQUFqQyxFQUE5QixFQUNBLENBRitCLENBQVYsRUFBZixDQVdBLEdBQU1RLG1CQUFPLFFBQVBBLEtBQU8sQ0FBQ1YsSUFBRCxDQUFPSCxLQUFQLFFBQWlCLHVCQUFZLFNBQUNLLE9BQUQsQ0FBVTNCLE1BQVYsQ0FBcUIsQ0FDckUzQixnQkFBTXVELElBQU4sQ0FBV0MsS0FBWCxDQUFpQkosSUFBakIsRUFBdUJVLElBQXZCLENBQTRCZCxVQUFVQyxLQUFWLENBQTVCLENBQThDSyxPQUE5QyxDQUF1RDNCLE1BQXZELEVBQ0EsQ0FGb0MsQ0FBakIsRUFBYixDQVVBLEdBQU1vQyxpQkFBTSxRQUFOQSxJQUFNLGFBQVFELE1BQUtWLElBQUwsQ0FBVyxPQUFYLENBQVIsRUFBWixDQVVBLEdBQU1ZLG1CQUFPLFFBQVBBLEtBQU8sQ0FBQ1osSUFBRCxDQUFPYSxJQUFQLENBQTJCLCtCQUFYQyxNQUFXLGlEQUFYQSxNQUFXLDBCQUM5QyxNQUFPSCxLQUFJWCxJQUFKLEVBQ05lLElBRE0sQ0FDRCxrQkFBWSxDQUNqQixHQUFHQyxRQUFILENBQWEsQ0FDWixHQUFNdEQsUUFBUyxFQUFmLENBQ0FzRCxTQUFTbkQsT0FBVCxDQUFpQixtQkFBYSxDQUM3QkgsT0FBTzRDLElBQVAsbUNBQWdCTyxJQUFoQixnQkFBcUJJLFNBQXJCLEVBQW1DSCxNQUFuQyxPQUNBLENBRkQsRUFHQSxNQUFPcEQsT0FBUCxDQUNBLENBQ0QsQ0FUTSxDQUFQLENBVUEsQ0FYTSxDQXFCQSxHQUFNd0QsZUFBSyxRQUFMQSxHQUFLLENBQUNsQixJQUFELENBQU9ILEtBQVAsQ0FBY3NCLGFBQWQsQ0FBNkJDLGNBQTdCLENBQWdELENBQ2pFeEUsZ0JBQU11RCxJQUFOLENBQVdDLEtBQVgsQ0FBaUJKLElBQWpCLEVBQXVCa0IsRUFBdkIsQ0FBMEJ0QixVQUFVQyxLQUFWLENBQTFCLENBQTRDc0IsYUFBNUMsQ0FBMkRDLGNBQTNELEVBQ0EsQ0FGTSxDQVdBLEdBQU1DLGlCQUFNLFFBQU5BLElBQU0sQ0FBQ3JCLElBQUQsQ0FBT0gsS0FBUCxDQUFjeUIsUUFBZCxDQUEyQixDQUM3QzFFLGdCQUFNdUQsSUFBTixDQUFXQyxLQUFYLENBQWlCSixJQUFqQixFQUF1QnFCLEdBQXZCLENBQTJCekIsVUFBVUMsS0FBVixDQUEzQixDQUE2Q3lCLFFBQTdDLEVBQ0EsQ0FGTSxDQVVBLEdBQU1DLG1DQUFlLFFBQWZBLGFBQWUsYUFBUTNFLGlCQUFNdUQsSUFBTixDQUFXQyxLQUFYLENBQWlCSixJQUFqQixFQUF1QnVCLFlBQXZCLEVBQVIsRUFBckIsQ0FRQSxHQUFNQyxlQUFLLFFBQUxBLEdBQUssU0FBTUMsTUFBS0MsR0FBTCxFQUFOLEVBQVgsQzs7Ozs7O0FDbkpQLGtCQUFrQix5RDs7Ozs7O0FDQWxCLGtCQUFrQix5RDs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxlQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMxRSxDQUFDOzs7Ozs7O0FDSEQsa0JBQWtCLHlEOzs7Ozs7QUNBbEIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssT0FBTztBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozt5REMvTE8sR0FBTUMsdUJBQVMsUUFBZixDQU1BLEdBQU1DLHVCQUFTLFFBQWYsQ0FNQSxHQUFNQyx5QkFBVSxTQUFoQixDQU1BLEdBQU1DLDZCQUFZLFdBQWxCLENBTUEsR0FBTUMscUNBQWdCLGVBQXRCLENBTUEsR0FBTUMscUNBQWdCLGVBQXRCLENBTUEsR0FBTUMscUJBQVEsT0FBZCxDQU1BLEdBQU1DLDZCQUFZLFdBQWxCLENBTUEsR0FBTUMsaUNBQWMsYUFBcEIsQ0FNQSxHQUFNQyxtQkFBTyxNQUFiLENBTUEsR0FBTUMseUJBQVUsU0FBaEIsQ0FNQSxHQUFNQywyQkFBVyxVQUFqQixDQU1BLEdBQU1DLDJCQUFXLFVBQWpCLENBTUEsR0FBTUMsMkJBQVcsVUFBakIsQzs7Ozs7O0FDbkZQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7Ozs7Ozs7a2hCQ0o3QkMsUSw0YkFNQUMsTSw4REFDQUMsRyw0VkFHWixHQUFNQyxXQUFZLFFBQVpBLFVBQVksQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQWdCLENBQ2pDLEdBQU1DLEtBQU1uRyxnQkFBTXFDLElBQU4sQ0FBVzhELEdBQVgsQ0FBZUMsS0FBZixDQUFxQixHQUFyQixFQUEwQkMsSUFBMUIsQ0FBK0IsR0FBL0IsQ0FBWixDQUVBLEdBQUlKLEtBQUtLLE1BQUwsR0FBZ0J0QixpQkFBcEIsQ0FBNEIsQ0FDM0IsR0FBTXVCLGFBQWMsQ0FDbkJELE9BQVFwQixvQkFEVyxDQUVuQnNCLFVBQVd4RyxnQkFBTXdHLFNBRkUsQ0FHbkJDLFFBQVNaLFNBQVNqQixFQUFULEVBSFUsQ0FBcEIsQ0FLQSxHQUFHc0IsSUFBSCxDQUFTLENBQ1JLLFlBQVlMLElBQVosQ0FBbUJBLElBQW5CLENBQ0EsQ0FDREgsSUFBSXpFLENBQUosQ0FBTSxXQUFOLENBQW1CLENBQUNpRixXQUFELFlBQXlCTixLQUFLRSxHQUE5QixrQkFBa0RBLEdBQWxELENBQW5CLEVBQ0EsTUFBT04sVUFFTmpDLE1BRk0sWUFFWXFDLEtBQUtFLEdBRmpCLGtCQUVxQ0EsR0FGckMsQ0FFNENJLFdBRjVDLEVBR0xwQyxJQUhLLENBR0EsVUFBTSxDQUlYLE1BQU84QixLQUFQLENBQ0EsQ0FSSyxDQUFQLENBU0EsQ0FDRCxNQUFPLG1CQUFRdEUsTUFBUixDQUFlLEdBQUlnQixNQUFKLENBQVUsMEJBQVYsQ0FBZixDQUFQLENBQ0EsQ0F4QkQsQyxHQThCcUIrRCxLLFlBTXBCLGNBQVl0QyxRQUFaLENBQXNCdUMsT0FBdEIsQ0FBK0IseUNBQzlCLEdBQUk3RixRQUFTc0QsUUFBYixDQUNBLEdBQUdBLFVBQVlBLFNBQVN3QyxHQUFyQixFQUE0QixNQUFPeEMsVUFBU3dDLEdBQWhCLEdBQXdCLFVBQXZELENBQWtFLENBRWpFOUYsT0FBUyxxQkFBYyxFQUFkLENBQWtCc0QsU0FBU3dDLEdBQVQsRUFBbEIsQ0FBa0MsQ0FBQ1QsSUFBS1EsT0FBTixDQUFsQyxDQUFULENBQ0EsQ0FLRCxLQUFLUixHQUFMLENBQVdyRixPQUFPcUYsR0FBbEIsQ0FLQSxLQUFLVSxJQUFMLENBQVkvRixPQUFPK0YsSUFBbkIsQ0FLQSxLQUFLQyxXQUFMLENBQW1CLEVBQW5CLENBS0EsS0FBS0MsS0FBTCxDQUFhakcsT0FBT2lHLEtBQXBCLENBT0EsS0FBS1QsTUFBTCxDQUFjeEYsT0FBT3dGLE1BQXJCLENBTUEsS0FBS1UsT0FBTCxDQUFlLENBQUMsQ0FBQ2xHLE9BQU9rRyxPQUF4QixDQU1BLEtBQUtDLEtBQUwsQ0FBYW5HLE9BQU9tRyxLQUFwQixDQU1BLEtBQUtDLFVBQUwsQ0FBa0IsRUFBbEIsQ0FDQSxDLGlGQU9jLENBQ2QsTUFBT3JCLFVBQVM3QixJQUFULFlBQXlCLEtBQUttQyxHQUE5QixpQkFBa0RnQixxQkFBbEQsQ0FBK0QsS0FBS2hCLEdBQXBFLENBQVAsQ0FDQSxDLDJDQU9VLENBQ1YsTUFBT04sVUFBUzdCLElBQVQsWUFBeUIsS0FBS21DLEdBQTlCLGFBQThDaUIsaUJBQTlDLENBQXVELEtBQUtqQixHQUE1RCxDQUFQLENBQ0EsQywwQ0FPUWtCLFksQ0FBYyxnQkFDdEIsR0FBRyxDQUFDckgsZ0JBQU1xQyxJQUFWLENBQWdCLENBQ2YsTUFBTyxtQkFBUVYsTUFBUixDQUFlLEdBQUlnQixNQUFKLENBQVUsd0RBQVYsQ0FBZixDQUFQLENBQ0EsQ0FDRCxNQUFPa0QsVUFBUzlCLEdBQVQsWUFBd0IsS0FBS29DLEdBQTdCLGFBQ0xoQyxJQURLLENBQ0Esa0JBQVksQ0FDakIsR0FBTXJELFFBQVNzRCxTQUFTd0MsR0FBVCxFQUFmLENBQ0FiLElBQUkzRSxDQUFKLENBQU0sZ0JBQU4sQ0FBd0JOLE1BQXhCLEVBQ0EsR0FBR0EsTUFBSCxDQUFXLENBQ1YsTUFBTyxtQkFBWUEsTUFBWixFQUFvQndHLEdBQXBCLENBQXdCLG9CQUFPLHFCQUFjLENBQUNuQixJQUFLb0IsR0FBTixDQUFXQyxPQUFRLE1BQUtyQixHQUF4QixDQUFkLENBQTRDckYsT0FBT3lHLEdBQVAsQ0FBNUMsQ0FBUCxFQUF4QixDQUFQLENBQ0EsQ0FDRCxNQUFPLEVBQVAsQ0FDQSxDQVJLLEVBU0xwRCxJQVRLLENBU0Esd0JBQVdzRCxTQUFRQyxNQUFSLENBQWUsZ0JBQVUsQ0FDekMsTUFBT0wsaUJBQWtCTSxPQUFPcEYsTUFBUCxHQUFrQnZDLGdCQUFNdUMsTUFBeEIsRUFBa0NvRixPQUFPQyxJQUFQLEdBQWdCNUgsZ0JBQU1xQyxJQUFOLENBQVc4RCxHQUEvRSxDQUFQLENBQ0EsQ0FGZ0IsQ0FBWCxFQVRBLEVBWUxoQyxJQVpLLENBWUEsd0JBQVdzRCxTQUFRSCxHQUFSLENBQVl0SCxnQkFBTXlILE9BQU4sUUFBb0JKLGFBQWUsUUFBZixDQUEwQixRQUE5QyxHQUEwRDdHLElBQTFELENBQStEUixnQkFBTXlILE9BQXJFLENBQVosQ0FBWCxFQVpBLEVBYUx0RCxJQWJLLENBYUEsd0JBQVdzRCxTQUFRQyxNQUFSLENBQWUsdUJBQVVDLFVBQVcsSUFBckIsRUFBZixDQUFYLEVBYkEsQ0FBUCxDQWNBLEMsbURBT2MsQ0FDZCxNQUFPLE1BQUsvRSxRQUFMLENBQWMsSUFBZCxFQUNMaUYsS0FESyxDQUNDOUIsSUFBSXRFLENBQUosQ0FBTSxtQkFBTixDQURELENBQVAsQ0FFQSxDLHFEQU9lLENBQ2YsTUFBTyxNQUFLbUIsUUFBTCxDQUFjLEtBQWQsRUFDTGlGLEtBREssQ0FDQzlCLElBQUl0RSxDQUFKLENBQU0sb0JBQU4sQ0FERCxDQUFQLENBRUEsQyxzQ0FVTXFHLEssQ0FBNkIsaUJBQXRCNUIsSUFBc0IsMkRBQWZWLGVBQWUsQ0FBVDlFLE9BQVMsY0FFbENxSCxNQUFRLFFBQVJBLE1BQVEsd0JBQW1CLE9BQUs1QixHQUF4QixrQkFBNEM5RCxLQUFLOEQsR0FBakQsRUFGMEIsQ0FHbEM2QixNQUFRLENBQ1AxQixPQUFRbkIsd0JBREQsQ0FFUGUsS0FBTUEsTUFBUVYsZUFGUCxDQUgwQixDQVFuQyxNQUFPLG1CQUFReUMsR0FBUixDQUFZSCxNQUFNUixHQUFOLENBQVUscUJBQVF6QixVQUFTcEMsR0FBVCxDQUFhc0UsTUFBTTFGLElBQU4sQ0FBYixDQUEwQjJGLEtBQTFCLENBQVIsRUFBVixDQUFaLEVBRUw3RCxJQUZLLENBRUEsaUJBQU0sbUJBQVE4RCxHQUFSLENBQVlILE1BQU1SLEdBQU4sQ0FBVSxxQkFBUVksa0JBQU9DLElBQVAsQ0FBWTlGLElBQVosQ0FBa0IsTUFBbEIsQ0FBd0IzQixPQUF4QixDQUFSLEVBQVYsQ0FBWixDQUFOLEVBRkEsRUFHTHlELElBSEssQ0FHQSxpQkFBVyxDQUNoQixHQUFNaUUsbUJBQW9CLFFBQXBCQSxrQkFBb0IsZUFBVXZDLFVBQVNoQyxNQUFULFlBQTJCd0UsT0FBT3BDLElBQWxDLGtCQUF1RG9DLE9BQU9DLEVBQTlELENBQVYsRUFBMUIsQ0FDQUMsUUFBUXRILE9BQVIsQ0FBZ0IsZ0JBQVUsQ0FDekJvSCxPQUFPL0QsRUFBUCxDQUFVcUIsbUJBQVYsQ0FBb0J5QyxpQkFBcEIsRUFDQUMsT0FBTy9ELEVBQVAsQ0FBVXNCLG1CQUFWLENBQW9Cd0MsaUJBQXBCLEVBQ0EsQ0FIRCxFQUlBLE1BQU8sQ0FBQ25DLEtBQU0sTUFBUCxDQUFhc0MsZUFBYixDQUFQLENBQ0EsQ0FWSyxFQVdMVixLQVhLLENBV0MsV0FBSyxDQUNYOUIsSUFBSXhFLENBQUosQ0FBTSxhQUFOLENBQXFCQSxDQUFyQixFQUNBdUcsTUFBTTdHLE9BQU4sQ0FBYyxxQkFBUTRFLFVBQVNoQyxNQUFULFlBQTJCLE9BQUtzQyxHQUFoQyxrQkFBb0Q5RCxLQUFLOEQsR0FBekQsQ0FBUixFQUFkLEVBQ0EsTUFBTyxtQkFBUXhFLE1BQVIsQ0FBZUosQ0FBZixDQUFQLENBQ0EsQ0FmSyxDQUFQLENBZ0JBLEMsOEJBb0JFMEIsSyxDQUFPeUIsUSxDQUFVRixjLENBQWdCLGlCQUVsQ3BCLEtBQU8wQyxPQUFPRyxJQUFQLENBQVl1QyxNQUFaLENBQW1CdkYsS0FBbkIsRUFBMEIsSUFBMUIsQ0FGMkIsQ0FHbEN3RixJQUFNM0MsT0FBT0csSUFBUCxDQUFZeUMsT0FBWixDQUFvQnpGLEtBQXBCLENBSDRCLENBSW5DLEdBQUdHLE1BQVFxRixHQUFYLENBQWdCLENBQ2YsR0FBTUUsZUFBZ0IsUUFBaEJBLGNBQWdCLFVBQVksQ0FDakMsR0FBRyxDQUFDLFlBQVlsRyxJQUFaLENBQWlCUSxLQUFqQixDQUFELEVBQTRCLENBQUNtQixRQUFoQyxDQUEwQyxDQUV6QzJCLElBQUkxRSxDQUFKLFlBQWlCNEIsS0FBakIsS0FBMkJtQixTQUFXLEdBQUlxRSxJQUFKLENBQVFyRSxRQUFSLENBQVgsQ0FBK0IsSUFBMUQsRUFDQU0sU0FBU04sU0FBVyxHQUFJcUUsSUFBSixDQUFRckUsUUFBUixDQUFYLENBQStCLElBQXhDLEVBQ0EsQ0FKRCxJQUlPLElBQUdwRSxnQkFBTXFDLElBQVQsQ0FBZSxDQUNyQixHQUFNdUcsWUFBYSxxQkFBYyxDQUFDekMsSUFBSy9CLFNBQVN5QyxJQUFULEVBQU4sQ0FBdUJXLE9BQVEsT0FBS3JCLEdBQXBDLENBQWQsQ0FBd0QvQixTQUFTd0MsR0FBVCxFQUF4RCxDQUFuQixDQUNBLEdBQUdnQyxXQUFXaEIsSUFBWCxHQUFvQjVILGdCQUFNcUMsSUFBTixDQUFXOEQsR0FBL0IsRUFBc0N5QyxXQUFXckcsTUFBWCxHQUFzQnZDLGdCQUFNdUMsTUFBckUsQ0FBNkUsQ0FDNUUsR0FBTXNHLGNBQWU3SSxnQkFBTXlILE9BQU4sQ0FBY3FCLFNBQWQsQ0FBd0JGLFVBQXhCLENBQXJCLENBQ0E3QyxJQUFJMUUsQ0FBSixZQUFpQjRCLEtBQWpCLEtBQTJCNEYsWUFBM0IsRUFDQW5FLFNBQVNtRSxZQUFULEVBQ0EsQ0FDRCxDQUNELENBYkQsQ0FjQWhELFNBQVN2QixFQUFULENBQVlsQixJQUFaLENBQWtCSCxLQUFsQixDQUF5QjBGLGFBQXpCLENBQXdDbkUsY0FBeEMsRUFDQSxHQUFHLENBQUMsS0FBSzBDLFVBQUwsQ0FBZ0JqRSxLQUFoQixDQUFKLENBQTRCLENBQzNCLEtBQUtpRSxVQUFMLENBQWdCakUsS0FBaEIsRUFBeUIsRUFBekIsQ0FDQSxDQUNELEtBQUtpRSxVQUFMLENBQWdCakUsS0FBaEIsRUFBdUJTLElBQXZCLENBQTRCaUYsYUFBNUIsRUFDQSxDQUNELEMsZ0RBT1dqSSxPLENBQVMsQ0FDcEIsTUFBTzBHLG1CQUFRZSxJQUFSLENBQWEsSUFBYixDQUFtQnpILE9BQW5CLENBQVAsQ0FDQSxDLG9DQVNLcUksSSxDQUFNQyxvQixDQUFzQkMsVyxDQUFhLENBQzlDbEQsSUFBSTFFLENBQUosQ0FBTSxZQUFOLENBQW9CLENBQUMwSCxTQUFELENBQU9DLHlDQUFQLENBQTZCQyx1QkFBN0IsQ0FBcEIsRUFDQSxNQUFPQyxpQkFBTUMsS0FBTixDQUFZLEtBQUtoRCxHQUFqQixDQUFzQjRDLElBQXRCLENBQTRCQyxvQkFBNUIsQ0FBa0RDLFdBQWxELENBQVAsQ0FDQSxDLG9EQVNhRixJLENBQU1DLG9CLENBQXNCQyxXLENBQWEsaUJBQ3REbEQsSUFBSTFFLENBQUosQ0FBTSxvQkFBTixDQUE0QixDQUFDMEgsU0FBRCxDQUFPQyx5Q0FBUCxDQUE2QkMsdUJBQTdCLENBQTVCLEVBQ0EsTUFBT0MsaUJBQU1FLGFBQU4sQ0FBb0IsS0FBS2pELEdBQXpCLENBQThCNEMsSUFBOUIsQ0FBb0NDLG9CQUFwQyxDQUEwREMsV0FBMUQsRUFDTjlFLElBRE0sQ0FDQSxxQkFBZSxDQUNyQixPQUFLMkMsV0FBTCxDQUFtQkEsV0FBbkIsQ0FDQSxNQUFPQSxZQUFQLENBQ0EsQ0FKTSxDQUFQLENBS0EsQyx5Q0FNUyxDQUNUZixJQUFJMUUsQ0FBSixDQUFNLG9CQUFOLEVBQ0EsTUFBTzZILGlCQUFNRyxPQUFOLENBQWMsS0FBS3ZDLFdBQW5CLENBQVAsQ0FDQSxDLG1DQU1NLENBQ05mLElBQUkxRSxDQUFKLENBQU0sV0FBTixDQUFtQixJQUFuQixFQUNBLEdBQUcsQ0FBQ3JCLGdCQUFNcUMsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVFWLE1BQVIsQ0FBZSxHQUFJZ0IsTUFBSixDQUFVLDZDQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsTUFBT3FELFdBQVUsSUFBVixFQUFnQjZCLEtBQWhCLENBQXNCOUIsSUFBSXRFLENBQUosQ0FBTSxXQUFOLENBQXRCLENBQVAsQ0FDQSxDLHFDQU1PLGlCQUNQLEdBQUcsQ0FBQ3pCLGdCQUFNcUMsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVFWLE1BQVIsQ0FBZSxHQUFJZ0IsTUFBSixDQUFVLDhDQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0RvRCxJQUFJMUUsQ0FBSixDQUFNLFlBQU4sQ0FBb0IsSUFBcEIsRUFFQSxHQUFNOEUsS0FBTW5HLGdCQUFNcUMsSUFBTixDQUFXOEQsR0FBWCxDQUFlQyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCQyxJQUExQixDQUErQixHQUEvQixDQUFaLENBQ0FSLFNBQVNsQixZQUFULFlBQWlDLEtBQUt3QixHQUF0QyxrQkFBMERBLEdBQTFELFlBQXdFbUQsTUFBeEUsR0FHQSxtQkFBWSxLQUFLcEMsVUFBakIsRUFBNkJqRyxPQUE3QixDQUFxQyxlQUFTLENBQzdDNEUsU0FBU3BCLEdBQVQsQ0FBYXFCLE9BQU9HLElBQVAsQ0FBWXVDLE1BQVosQ0FBbUJ2RixLQUFuQixFQUEwQixNQUExQixDQUFiLENBQThDQSxLQUE5QyxFQUNBLENBRkQsRUFJQSxLQUFLb0UsWUFBTCxHQUFvQmxELElBQXBCLENBQXlCLDZCQUFnQmtELGNBQWFwRyxPQUFiLENBQXFCLDRCQUFlNkYsYUFBWXlDLEtBQVosRUFBZixFQUFyQixDQUFoQixFQUF6QixFQUVBLEtBQUtDLGFBQUwsR0FBcUJyRixJQUFyQixDQUEwQiw4QkFBaUJxRixlQUFjdkksT0FBZCxDQUFzQiw2QkFBZ0I0SCxjQUFhWSxXQUFiLEVBQWhCLEVBQXRCLENBQWpCLEVBQTFCLEVBRUEsTUFBTzVELFVBQVNwQyxHQUFULFlBQXdCLEtBQUswQyxHQUE3QixrQkFBaURBLEdBQWpELFdBQStEZix3QkFBL0QsRUFFTHlDLEtBRkssQ0FFQzlCLElBQUl0RSxDQUFKLENBQU0sWUFBTixDQUZELENBQVAsQ0FHQSxDLHFDQU1PLGlCQUNQc0UsSUFBSTFFLENBQUosQ0FBTSxZQUFOLENBQW9CLElBQXBCLEVBQ0EsS0FBS2lGLE1BQUwsQ0FBY3RCLGlCQUFkLENBQ0EsTUFBTyxNQUFLMEUsS0FBTCxHQUNMdkYsSUFESyxDQUNBLFVBQU0sQ0FDWCxNQUFPMEIsVUFBU2pDLE1BQVQsVUFBeUIsT0FBS3VDLEdBQTlCLENBQXFDLENBQzNDRyxPQUFRdEIsaUJBRG1DLENBRTNDMkUsUUFBUzlELFNBQVNqQixFQUFULEVBRmtDLENBQXJDLENBQVAsQ0FJQSxDQU5LLEVBT0xULElBUEssQ0FPQSxVQUFNLENBQ1gsTUFBTzBCLFVBQVNoQyxNQUFULFlBQTJCLE9BQUtzQyxHQUFoQyxDQUFQLENBQ0EsQ0FUSyxFQVVMMEIsS0FWSyxDQVVDOUIsSUFBSXRFLENBQUosQ0FBTSxZQUFOLENBVkQsQ0FBUCxDQVdBLEMsd0NBVWNvRixJLENBQXdDLElBQWxDSSxNQUFrQywyREFBMUIsSUFBMEIsQ0FBcEIyQyxVQUFvQiwyREFBUCxLQUFPLENBQ3RELEdBQUcsQ0FBQzVKLGdCQUFNcUMsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVFWLE1BQVIsQ0FBZSxHQUFJZ0IsTUFBSixDQUFVLCtDQUFWLENBQWYsQ0FBUCxDQUNBLENBSHFELEdBTXJEa0gsY0FBZSxDQUNkOUMsTUFBTy9HLGdCQUFNcUMsSUFBTixDQUFXOEQsR0FESixDQUVkYSxRQUFTNEMsVUFGSyxDQUdkL0MsS0FBTUEsTUFBVzdHLGdCQUFNcUMsSUFBTixDQUFXd0UsSUFBdEIsS0FBOEJoQyxLQUFLQyxHQUFMLEVBSHRCLENBTnNDLENBV3JEZ0YsaUJBQW1CLHFCQUFjLENBQ2hDeEQsT0FBUXZCLGlCQUR3QixDQUVoQ2dGLFNBQVVsRSxTQUFTakIsRUFBVCxFQUZzQixDQUdoQ3FDLFdBSGdDLENBQWQsQ0FJaEI0QyxZQUpnQixDQVhrQyxDQWlCbEQ1RCxLQUFPLElBakIyQyxDQW9CaEQrRCxJQUFNQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsR0FBZ0IsSUFBM0IsQ0FwQjBDLENBcUJoREMsSUFBTUgsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEdBQWdCLElBQTNCLENBckIwQyxDQXNCdEQsTUFBT3RFLFVBQVNuQyxJQUFULFVBQXVCc0csR0FBdkIsS0FBOEJJLEdBQTlCLENBQXFDTixnQkFBckMsRUFFTDNGLElBRkssQ0FFQSxpQkFBVyxDQUNoQjhCLEtBQU8sR0FBSVMsS0FBSixDQUFTLHFCQUFjLENBQUNQLElBQVE2RCxHQUFSLEtBQWVJLEdBQWYsS0FBc0JDLFFBQVF4RCxJQUFSLEVBQXZCLENBQWQsQ0FBd0RpRCxnQkFBeEQsQ0FBVCxDQUFQLENBQ0EsTUFBT2pFLFVBQVNqQyxNQUFULFlBQTJCcUMsS0FBS0UsR0FBaEMsU0FBNEMwRCxZQUE1QyxDQUFQLENBQ0EsQ0FMSyxFQU9MMUYsSUFQSyxDQU9BLGlCQUFNNkIsV0FBVUMsSUFBVixDQUFnQlosZ0JBQWhCLENBQU4sRUFQQSxFQVFMd0MsS0FSSyxDQVFDOUIsSUFBSXRFLENBQUosQ0FBTSxhQUFOLENBUkQsQ0FBUCxDQVNBLEMsZ0NBUVcwRSxHLENBQUssQ0FDaEIsTUFBT04sVUFBUzlCLEdBQVQsVUFBc0JvQyxHQUF0QixFQUNMaEMsSUFESyxDQUNBLGtCQUFZLENBQ2pCLEdBQUdDLFNBQVN3QyxHQUFULEVBQUgsQ0FBbUIsQ0FDbEIsTUFBTyxJQUFJRixLQUFKLENBQVN0QyxRQUFULENBQW1CK0IsR0FBbkIsQ0FBUCxDQUNBLENBQ0QsQ0FMSyxDQUFQLENBTUEsQyxvQ0F4V21CTyxJOzs7Ozs7OzRWQ3hDVFgsRyxxYUFRTnVFLFNBQVUsQ0FDZkMsSUFBSyxDQUFDakosRUFBRyxJQUFKLENBQVVrSixFQUFHLElBQWIsQ0FBbUJDLElBQUssSUFBeEIsQ0FEVSxDQUVmQyxJQUFLLENBQUNwSixFQUFHLElBQUosQ0FBVWtKLEVBQUcsSUFBYixDQUFtQkMsSUFBSyxJQUF4QixDQUE4QkUsSUFBSyxLQUFuQyxDQUZVLENBR2ZDLEdBQUksQ0FBQ3RKLEVBQUcsSUFBSixDQUFVa0osRUFBRyxHQUFiLENBQWtCQyxJQUFLLElBQXZCLENBQTZCRSxJQUFLLEtBQWxDLENBSFcsQ0FJZkUsS0FBTSxDQUFDdkosRUFBRyxHQUFKLENBQVNrSixFQUFHLEdBQVosQ0FBaUJDLElBQUssS0FBdEIsQ0FBNkJFLElBQUssSUFBbEMsQ0FKUyxDQUtmRyxHQUFJLENBQUN4SixFQUFHLEdBQUosQ0FBU2tKLEVBQUcsR0FBWixDQUFpQkMsSUFBSyxLQUF0QixDQUE2QkUsSUFBSyxJQUFsQyxDQUxXLENBTWZJLElBQUssQ0FBQ3pKLEVBQUcsR0FBSixDQUFTa0osRUFBRyxHQUFaLENBQWlCRyxJQUFLLE1BQXRCLENBTlUsQyxDQWVWSyxjQUFnQixRQUFoQkEsY0FBZ0IsQ0FBQ0MsVUFBRCxDQUFhQyxRQUFiLENBQTBCLENBQy9DLEdBQUdELFlBQWNDLFFBQWpCLENBQTJCLENBQzFCLE1BQU8scUJBQ04sNEJBQTRCekksSUFBNUIsQ0FBaUN5SSxRQUFqQyxFQUE2QyxDQUFDQyxXQUFZRCxRQUFiLENBQTdDLENBQXNFLENBQUNBLGlCQUFELENBRGhFLENBRU5ELGFBQWUsSUFBZixDQUFzQixFQUF0QixDQUEyQkEsVUFGckIsQ0FBUCxDQUdBLENBQ0QsTUFBT0EsV0FBUCxDQUNBLEMsSUFLb0JHLE0sNEpBOEJnRyxJQUFoR0MsaUJBQWdHLDJEQUE3RSxJQUE2RSxDQUF2RUMsZ0JBQXVFLDJEQUFwRCxJQUFvRCxDQUE5Q3ZDLElBQThDLDJEQUF2QyxPQUF1QyxDQUE5QndDLGFBQThCLGNBQWZDLGFBQWUsY0FDL0dDLE1BQVFKLGdCQUR1RyxDQUVuSCxHQUFJLE1BQU9BLGlCQUFQLEdBQTRCLFFBQWhDLENBQXlDLENBQ3hDLEdBQUdmLFFBQVFlLGlCQUFpQnRMLFdBQWpCLEVBQVIsQ0FBSCxDQUE0QyxDQUMzQyxHQUNDMkwsUUFBU3BCLFFBQVFlLGlCQUFpQnRMLFdBQWpCLEVBQVIsQ0FEVixDQUVDNEwsY0FBZ0IsUUFBaEJBLGNBQWdCLENBQUNDLEdBQUQsQ0FBUyxDQUN4QixHQUFHLG9CQUFvQm5KLElBQXBCLENBQXlCc0csSUFBekIsQ0FBSCxDQUFtQyxDQUNsQyxHQUFNdEgsR0FBSSxFQUFWLENBQ0FBLEVBQUVzSCxJQUFGLEVBQVUyQyxPQUFPRSxHQUFQLENBQVYsQ0FDQSxNQUFPbkssRUFBUCxDQUNBLENBQ0QsTUFBTyxDQUNOZ0osSUFBS2lCLE9BQU9qQixHQUFQLENBQWFILFFBQVFvQixPQUFPakIsR0FBZixFQUFvQm1CLEdBQXBCLENBQWIsQ0FBd0NGLE9BQU9FLEdBQVAsQ0FEdkMsQ0FFTkMsTUFBT0gsT0FBT0UsR0FBUCxDQUZELENBR05qQixJQUFLZSxPQUFPZixHQUFQLENBQWFMLFFBQVFvQixPQUFPZixHQUFmLEVBQW9CaUIsR0FBcEIsQ0FBYixDQUF3Q0YsT0FBT0UsR0FBUCxDQUh2QyxDQUFQLENBS0EsQ0FiRixDQWNBSCxNQUFRLENBQUNLLE1BQU9ILGNBQWMsR0FBZCxDQUFSLENBQTRCSSxPQUFRSixjQUFjLEdBQWQsQ0FBcEMsQ0FBUixDQUNBLENBaEJELElBZ0JPLENBQ04sS0FBTSxJQUFJaEosTUFBSixDQUFVLCtEQUFWLENBQU4sQ0FDQSxDQUNELENBQ0Q4SSxNQUFRVCxjQUFjUyxLQUFkLENBQXFCRixhQUFyQixDQUFSLENBRUEsR0FBTVMsT0FBUWhCLGNBQWNNLGdCQUFkLENBQWdDRSxhQUFoQyxDQUFkLENBRUF6RixJQUFJM0UsQ0FBSixDQUFNLG1CQUFOLENBQTJCLENBQUNxSyxXQUFELENBQVFPLFdBQVIsQ0FBM0IsRUFDQSxNQUFPLENBQUNQLFdBQUQsQ0FBUU8sV0FBUixDQUFQLENBQ0EsQyxrREFVbUJDLFcsQ0FBYUMsUyxDQUFXQyxRLENBQXVCLElBQWJDLE9BQWEsMkRBQUosRUFBSSxDQUM5REMsUUFBVSxFQURvRCxDQUVsRSxHQUFHSixZQUFZSyxjQUFaLEdBQTZCMUwsTUFBN0IsQ0FBc0MsQ0FBekMsQ0FBNEMsQ0FDM0N5TCxRQUFVLE9BQVYsQ0FDQSxDQUZELElBRU8sSUFBR0osWUFBWU0sY0FBWixHQUE2QjNMLE1BQTdCLENBQXNDLENBQXpDLENBQTRDLENBQ2xEeUwsUUFBVSxPQUFWLENBQ0EsQ0FDRHRHLElBQUkzRSxDQUFKLENBQU0sb0JBQU4sQ0FBNEI2SyxXQUE1QixDQUF5Q0ksT0FBekMsRUFDQSxHQUFJQSxRQUFRekwsTUFBUixDQUFpQixDQUFyQixDQUF3QixDQUN2QixHQUFJNEwsT0FBUUwsUUFBWixDQUNBLEdBQUksQ0FBQ0ssS0FBRCxFQUFVQSxNQUFNSCxPQUFOLENBQWM5TCxXQUFkLEtBQWdDOEwsT0FBOUMsQ0FBdUQsQ0FDdERHLE1BQVFDLFNBQVNDLGFBQVQsQ0FBdUJMLE9BQXZCLENBQVIsQ0FDQUcsTUFBTUcsUUFBTixDQUFpQixJQUFqQixDQUVBLEdBQUlDLGdCQUFNQyxPQUFOLENBQWNBLE9BQWQsR0FBMEIsUUFBOUIsQ0FBd0MsQ0FDdkNMLE1BQU1NLFlBQU4sQ0FBbUIsYUFBbkIsQ0FBaUMsSUFBakMsRUFDQU4sTUFBTU0sWUFBTixDQUFtQixPQUFuQixDQUEyQixJQUEzQixFQUNBLENBSEQsSUFHTyxDQUVOLENBQ0ROLE1BQU1PLEtBQU4sQ0FBWUMsWUFBWixDQUEyQixLQUEzQixDQUNBLENBQ0QsR0FBSWQsU0FBSixDQUFlLENBQ2QsR0FBSUMsVUFBWUEsV0FBYUssS0FBN0IsQ0FBb0MsQ0FDbkNOLFVBQVVlLFlBQVYsQ0FBdUJULEtBQXZCLENBQThCTCxRQUE5QixFQUNBLENBRkQsSUFFTyxJQUFJLENBQUNBLFFBQUwsQ0FBZSxDQUNyQkQsVUFBVWdCLFdBQVYsQ0FBc0JWLEtBQXRCLEVBQ0EsQ0FDRCxDQUNEQSxNQUFNVyxTQUFOLENBQWtCbEIsV0FBbEIsQ0FDQU8sTUFBTVksZ0JBQU4sQ0FBdUIsTUFBdkIsQ0FBK0IsU0FBQ25LLEtBQUQsQ0FBVyxDQUN6QzhDLElBQUkzRSxDQUFKLG1CQUF3QjZCLE1BQU04RixJQUE5QixFQUNBeUQsTUFBTVcsU0FBTixDQUFnQkUsVUFBaEIsQ0FBNkIsU0FBQ0MsS0FBRCxDQUFXLENBQ3ZDdkgsSUFBSTNFLENBQUoseUNBQThDa00sTUFBTUMsS0FBcEQsRUFDQSxDQUZELENBR0FmLE1BQU1XLFNBQU4sQ0FBZ0JLLGFBQWhCLENBQWdDLFNBQUNGLEtBQUQsQ0FBVyxDQUMxQ3ZILElBQUkzRSxDQUFKLDRDQUFpRGtNLE1BQU1DLEtBQXZELEVBQ0EsQ0FGRCxDQUdBZixNQUFNVyxTQUFOLENBQWdCTSxVQUFoQixDQUE2QixVQUFNLENBQ2xDMUgsSUFBSTNFLENBQUosdUNBQ0EsQ0FGRCxDQUdBb0wsTUFBTVcsU0FBTixDQUFnQk8sU0FBaEIsQ0FBNEIsU0FBQ3pLLEtBQUQsQ0FBVyxDQUNqQzBLLFFBQVFDLEtBQVIsd0NBQXFEM0ssTUFBTThGLElBQTNELEVBQ0wsQ0FGRCxDQUdBeUQsTUFBTVcsU0FBTixDQUFnQlUsU0FBaEIsQ0FBNEIsU0FBQzVLLEtBQUQsQ0FBVyxDQUNqQzBLLFFBQVFDLEtBQVIsd0NBQXFEM0ssTUFBTThGLElBQTNELEVBQ0wsQ0FGRCxDQUdBeUQsTUFBTVcsU0FBTixDQUFnQlcsU0FBaEIsQ0FBNEIsU0FBQzdLLEtBQUQsQ0FBVyxDQUN0QzBLLFFBQVFDLEtBQVIsd0NBQXFEM0ssTUFBTThGLElBQTNELEVBQ0E0RSxRQUFRQyxLQUFSLENBQWMzSyxLQUFkLEVBQ0EwSyxRQUFRQyxLQUFSLENBQWMsYUFBZCxFQUNBLENBSkQsQ0FLQSxDQXRCRCxFQXVCQXBCLE1BQU1zQixTQUFOLENBQWtCLFNBQUM3SyxLQUFELENBQVcsQ0FDNUIwSyxRQUFRQyxLQUFSLHdDQUFxRDNLLEtBQXJELEVBQ0EwSyxRQUFRQyxLQUFSLENBQWMzSyxLQUFkLEVBNEJBLENBOUJELENBK0JBdUosTUFBTVksZ0JBQU4sQ0FBdUIsWUFBdkIsQ0FBcUMsaUJBQU1ySCxLQUFJM0UsQ0FBSixDQUFNLHlCQUFOLENBQU4sRUFBckMsRUFDQW9MLE1BQU1ZLGdCQUFOLENBQXVCLE9BQXZCLENBQWdDLFNBQUM1TCxLQUFELFFBQVd1RSxLQUFJM0UsQ0FBSixvQkFBeUJJLEtBQXpCLENBQVgsRUFBaEMsRUFJQWdMLE1BQU1KLE1BQU4sQ0FBZUEsTUFBZixDQUNBLE1BQU9JLE1BQVAsQ0FDQSxDQUNELE1BQU9MLFNBQVAsQ0FDQSxDLHlDQWNpQixDQUNqQixNQUFPNEIsV0FBVUMsWUFBVixDQUF1QkMsZ0JBQXZCLEdBQ0w5SixJQURLLENBQ0EsaUJBQVcsQ0FDaEIsR0FBTTFDLEdBQUksRUFBVixDQUNBeU0sUUFBUWpOLE9BQVIsQ0FBZ0IsZ0JBQVUsQ0FDekIsR0FBSSxDQUFDUSxFQUFFYyxPQUFPNEwsSUFBVCxDQUFMLENBQXFCLENBQ3BCMU0sRUFBRWMsT0FBTzRMLElBQVQsRUFBaUIsRUFBakIsQ0FDQSxDQUNEMU0sRUFBRWMsT0FBTzRMLElBQVQsRUFBZXpLLElBQWYsQ0FBb0JuQixNQUFwQixFQUNBLENBTEQsRUFNQXdELElBQUkzRSxDQUFKLENBQU0sZUFBTixDQUF1QkssQ0FBdkIsRUFDQSxNQUFPQSxFQUFQLENBQ0EsQ0FYSyxFQVlMb0csS0FaSyxDQVlDOUIsSUFBSXRFLENBQUosQ0FBTSxlQUFOLENBWkQsQ0FBUCxDQWFBLEMsc0NBekx1QixDQUN2QixNQUFPLENBQ04yTSxLQUFNLE1BREEsQ0FFTkMsWUFBYSxhQUZQLENBQVAsQ0FJQSxDLHFDQVZtQmpELEs7Ozs7Ozs7cWdDQ2tCZmtELE9BQVEsQ0FDYixLQUFRLHNCQUFNLE9BQU4sRUFESyxDQUViLEtBQVEsc0JBQU0sT0FBTixFQUZLLENBR2IsT0FBVSxxQkFBUSxDQUNqQixHQUFHLENBQUNqTSxJQUFKLENBQVUsQ0FDVCxLQUFNLElBQUlNLE1BQUosQ0FBVSwrQ0FBVixDQUFOLENBQ0EsQ0FDRCxtQkFBb0JOLEtBQUs4RCxHQUF6QixDQUNBLENBUlksQ0FTYixZQUFlLDRDQUFtQkYsS0FBS0UsR0FBeEIsa0JBVEYsQ0FVYixRQUFXLHdDQUFtQkYsS0FBS0UsR0FBeEIsY0FWRSxDQVdiLE9BQVUsdUNBQW1CRixLQUFLRSxHQUF4QixhQVhHLEMsQ0FtQlJvSSxRQUFVLENBQ2YsS0FBUUMsY0FETyxDQUVmLEtBQVE5SCxjQUZPLENBR2YsT0FBVXdCLGdCQUhLLENBSWYsWUFBZWYscUJBSkEsQ0FLZixRQUFXQyxpQkFMSSxDQU1mLE9BQVVxSCxnQkFOSyxDLElBY1ZDLFEsWUFDTCxpQkFBWUMsSUFBWixDQUFrQiwyREFDakJBLEtBQUsxTixPQUFMLENBQWEsYUFBTyxDQUFDLE1BQUtzRyxHQUFMLEVBQVlBLEdBQVosQ0FBaUIsQ0FBdEMsRUFDQSxDLDJFQUNRdEUsSyxDQUFPLENBQ2YsR0FBRyxDQUFDQSxLQUFELEVBQVUsTUFBT0EsTUFBUCxHQUFpQixRQUEzQixFQUF1QyxLQUFLQSxLQUFMLElBQWdCQSxNQUFNbEQsV0FBTixFQUExRCxDQUErRSxDQUM5RSxLQUFNLElBQUk0QyxNQUFKLGlEQUEwRCx3QkFBZSxtQkFBWSxJQUFaLENBQWYsQ0FBMUQsQ0FBTixDQUNBLENBQ0QsTUFBTyxLQUFQLENBQ0EsQyxzQ0FDTU0sSyxDQUFPLENBQ2IsR0FBRyxLQUFLMkwsUUFBTCxDQUFjM0wsS0FBZCxDQUFILENBQXlCLENBQ3hCLE1BQU9xTCxPQUFNckwsTUFBTWxELFdBQU4sR0FBb0I4TyxPQUFwQixDQUE0QixNQUE1QixDQUFvQyxFQUFwQyxDQUFOLEdBQW1ELGlCQUFNLEtBQU4sRUFBMUQsQ0FDQSxDQUNELEMsd0NBQ081TCxLLENBQU8sQ0FDZCxHQUFHLEtBQUsyTCxRQUFMLENBQWMzTCxLQUFkLENBQUgsQ0FBeUIsQ0FDeEIsTUFBT3NMLFNBQVF0TCxNQUFNbEQsV0FBTixHQUFvQjhPLE9BQXBCLENBQTRCLE1BQTVCLENBQW9DLEVBQXBDLENBQVIsQ0FBUCxDQUNBLENBQ0QsQyx1QkFNSyxHQUFNQyxxQkFBUSxHQUFJSixRQUFKLENBQVksQ0FDaEMsWUFEZ0MsQ0FDbEIsY0FEa0IsQ0FDRixjQURFLENBRWhDLFlBRmdDLENBRWxCLGNBRmtCLENBRUYsY0FGRSxDQUdoQyxjQUhnQyxDQUdoQixnQkFIZ0IsQ0FBWixDQUFkLENBU0EsR0FBTXpJLG1CQUFPLEdBQUl5SSxRQUFKLENBQVksQ0FDL0IsZUFEK0IsQ0FDZCxpQkFEYyxDQUNLLGlCQURMLENBRS9CLG1CQUYrQixDQUVWLHFCQUZVLENBRWEscUJBRmIsQ0FHL0Isa0JBSCtCLENBR1gsb0JBSFcsQ0FBWixDQUFiLENBU0EsR0FBTS9HLHVCQUFTLEdBQUkrRyxRQUFKLENBQVksQ0FBQyxNQUFELENBQVMsTUFBVCxDQUFaLENBQWYsQ0FLQSxHQUFNckcsdUJBQVMsR0FBSXFHLFFBQUosQ0FBWSxDQUFDaEosbUJBQUQsQ0FBV0MsbUJBQVgsQ0FBcUJDLG1CQUFyQixDQUFaLENBQWYsQzs7Ozs7O0FDdklQLGdEOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBLGNBQWM7Ozs7Ozs7QUNBZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0UsaUNBQWlDO0FBQ3JHOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQSw2QkFBNkI7QUFDN0IsdUNBQXVDOzs7Ozs7O0FDRHZDO0FBQ0E7QUFDQTs7Ozs7Ozs7a2hCQ0RZQyxRLGdFQUNBRSxHLHVNQUdBRCxNLCtWQVdaLEdBQU1sQyxRQUFTLFFBQVRBLE9BQVMsQ0FBQ3lFLE1BQUQsQ0FBUy9CLE1BQVQsQ0FBa0QsSUFBakM1RSxPQUFpQywyREFBeEIsSUFBd0IsQ0FBbEJxTixNQUFrQiwyREFBVCxJQUFTLENBQzFEak8sT0FBUyxDQUNkd0YsYUFEYyxDQUVkNUUsYUFGYyxDQUdkcU4sYUFIYyxDQURpRCxDQU1oRSxHQUFHMUcsT0FBTy9CLE1BQVAsR0FBa0JiLGtCQUFyQixDQUE4QixDQUM3QixNQUFPLG1CQUFROUQsTUFBUixDQUFlLEdBQUlnQixNQUFKLENBQVUsMkNBQVYsQ0FBZixDQUFQLENBQ0EsQ0FDRCxNQUFPa0QsVUFBU2pDLE1BQVQsY0FBNkJ5RSxPQUFPQyxFQUFwQyxLQUEwQ0QsT0FBT2xDLEdBQWpELENBQXdEckYsTUFBeEQsRUFDTHFELElBREssQ0FDQSxVQUFNLENBQ1gsbUJBQVlyRCxNQUFaLEVBQW9CRyxPQUFwQixDQUE0QixjQUFRLENBQ25Db0gsT0FBTzJHLElBQVAsRUFBZWxPLE9BQU9rTyxJQUFQLENBQWYsQ0FDQSxDQUZELEVBR0EsTUFBT3RJLGdCQUFLM0MsR0FBTCxDQUFTc0UsT0FBT3BDLElBQWhCLENBQVAsQ0FDQSxDQU5LLEVBT0w5QixJQVBLLENBT0EsaUJBQU8sQ0FBQ2tFLGFBQUQsQ0FBUCxFQVBBLEVBUUxSLEtBUkssQ0FRQzlCLElBQUl0RSxDQUFKLENBQU0sZUFBTixDQVJELENBQVAsQ0FTQSxDQWxCRCxDLEdBd0JxQnlHLE8sWUFPcEIsZ0JBQVk5RCxRQUFaLENBQXNCLDJDQUNyQixHQUFJdEQsUUFBU3NELFFBQWIsQ0FDQSxHQUFHQSxVQUFZQSxTQUFTd0MsR0FBckIsRUFBNEIsTUFBT3hDLFVBQVN3QyxHQUFoQixHQUF3QixVQUF2RCxDQUFrRSxDQUNqRTlGLE9BQVMscUJBQWMsRUFBZCxDQUFrQnNELFNBQVN3QyxHQUFULEVBQWxCLENBQWtDLENBQUNULElBQUsvQixTQUFTeUMsSUFBVCxFQUFOLENBQXVCeUIsR0FBSWxFLFNBQVM2SyxHQUFULEdBQWVDLE1BQWYsR0FBd0JySSxJQUF4QixFQUEzQixDQUFsQyxDQUFULENBQ0EsQ0FLRCxLQUFLVixHQUFMLENBQVdyRixPQUFPcUYsR0FBbEIsQ0FLQSxLQUFLeUIsSUFBTCxDQUFZOUcsT0FBTzhHLElBQW5CLENBS0EsS0FBS1UsRUFBTCxDQUFVeEgsT0FBT3dILEVBQWpCLENBS0EsS0FBS3JDLElBQUwsQ0FBWW5GLE9BQU9tRixJQUFuQixDQVNBLEtBQUtLLE1BQUwsQ0FBY3hGLE9BQU93RixNQUFyQixDQUtBLEtBQUs2SSxLQUFMLENBQWFyTyxPQUFPcU8sS0FBcEIsQ0FLQSxLQUFLcEYsUUFBTCxDQUFnQmpKLE9BQU9pSixRQUF2QixDQUtBLEtBQUtnRixNQUFMLENBQWNqTyxPQUFPaU8sTUFBckIsQ0FNQSxLQUFLN0gsVUFBTCxDQUFrQixFQUFsQixDQUNBLEMsc0VBdUNNeEYsTSxDQUFRLENBQ2QsTUFBT2tDLFFBQU8sSUFBUCxDQUFhZ0MsbUJBQWIsQ0FBdUJsRSxNQUF2QixDQUErQm1FLFNBQVNqQixFQUFULEVBQS9CLENBQVAsQ0FDQSxDLHNDQU9NbEQsTSxDQUFRLENBQ2QsTUFBT2tDLFFBQU8sSUFBUCxDQUFhK0IsbUJBQWIsQ0FBdUJqRSxNQUF2QixDQUErQm1FLFNBQVNqQixFQUFULEVBQS9CLENBQVAsQ0FDQSxDLHVDQU1RLENBQ1IsTUFBT2hCLFFBQU8sSUFBUCxDQUFhOEIsbUJBQWIsQ0FBUCxDQUNBLEMsOEJBVUVZLE0sQ0FBUTVCLFEsQ0FBVSxnQkFDcEIsR0FBR29CLE9BQU91QyxNQUFQLENBQWN1RyxRQUFkLENBQXVCdEksTUFBdkIsQ0FBSCxDQUFtQyxDQUVsQyxHQUFJLENBQUMsS0FBS1ksVUFBTCxDQUFnQlosTUFBaEIsQ0FBTCxDQUE4QixDQUM3QixLQUFLWSxVQUFMLENBQWdCWixNQUFoQixFQUEwQixFQUExQixDQUNBLENBQ0QsS0FBS1ksVUFBTCxDQUFnQlosTUFBaEIsRUFBd0I1QyxJQUF4QixDQUE2QmdCLFFBQTdCLEVBRUEsR0FBSSxDQUFDLEtBQUswSyxTQUFWLENBQXFCLENBTXBCLEtBQUtBLFNBQUwsQ0FBaUIsa0JBQVksQ0FDNUIsR0FBTUMsU0FBVWpMLFNBQVN3QyxHQUFULEVBQWhCLENBQ0EsR0FBSXlJLFVBQVksSUFBWixFQUFvQkEsVUFBWSxNQUFLL0ksTUFBekMsQ0FBaUQsQ0FDaEQsTUFBS0EsTUFBTCxDQUFjK0ksT0FBZCxDQUNBLENBQUMsTUFBS25JLFVBQUwsQ0FBZ0JtSSxPQUFoQixHQUE0QixFQUE3QixFQUFpQ3BPLE9BQWpDLENBQXlDLFlBQU0sQ0FDOUNxTyxHQUFHLEtBQUgsRUFDQSxDQUZELEVBR0EsQ0FDRCxDQVJELENBU0F6SixTQUFTdkIsRUFBVCxjQUF5QixLQUFLZ0UsRUFBOUIsS0FBb0MsS0FBS25DLEdBQXpDLFdBQXVELE9BQXZELENBQWdFLEtBQUtpSixTQUFMLENBQWU1TyxJQUFmLENBQW9CLElBQXBCLENBQWhFLEVBQ0EsQ0FDRCxDQUNELEMsc0RBTWNrRSxRLENBQVUsaUJBQ3hCLENBQUNnQixtQkFBRCxDQUFXQyxtQkFBWCxDQUFxQkMsbUJBQXJCLEVBQStCM0UsT0FBL0IsQ0FBdUMsZUFBUyxDQUMvQyxPQUFLcUQsRUFBTCxDQUFRckIsS0FBUixDQUFleUIsUUFBZixFQUNBLENBRkQsRUFHQSxDLGdDQVdHNEIsTSxDQUFRNUIsUSxDQUFVLGlCQUNyQixHQUFHLENBQUM0QixNQUFKLENBQVksQ0FDWCxLQUFLWSxVQUFMLENBQWtCLEVBQWxCLENBQ0EsQ0FGRCxJQUVPLElBQUcsS0FBS0EsVUFBTCxDQUFnQlosTUFBaEIsQ0FBSCxDQUE0QixDQUNsQyxHQUFHNUIsUUFBSCxDQUFhLENBQ1osR0FBTTZLLEtBQU0sS0FBS3JJLFVBQUwsQ0FBZ0JaLE1BQWhCLEVBQXdCa0osU0FBeEIsQ0FBa0MsbUJBQU1GLE1BQU81SyxRQUFiLEVBQWxDLENBQVosQ0FDQSxHQUFJNkssS0FBTyxDQUFYLENBQWMsQ0FDYixLQUFLckksVUFBTCxDQUFnQnVJLE1BQWhCLENBQXVCRixHQUF2QixDQUE0QixDQUE1QixFQUNBLENBQ0QsQ0FMRCxJQUtPLENBQ04sS0FBS3JJLFVBQUwsQ0FBZ0JaLE1BQWhCLEVBQTBCLEVBQTFCLENBQ0EsQ0FDRCxDQUNELEdBQUcsQ0FBQyxDQUFDVixtQkFBRCxDQUFXRixtQkFBWCxDQUFxQkMsbUJBQXJCLEVBQStCK0osSUFBL0IsQ0FBb0Msc0JBQVMsUUFBS3hJLFVBQUwsQ0FBZ0JqRSxLQUFoQixHQUEwQixPQUFLaUUsVUFBTCxDQUFnQmpFLEtBQWhCLEVBQXVCckMsTUFBdkIsQ0FBZ0MsQ0FBbkUsRUFBcEMsQ0FBSixDQUE4RyxDQUM3R2lGLFNBQVNwQixHQUFULGNBQTBCLEtBQUs2RCxFQUEvQixLQUFxQyxLQUFLbkMsR0FBMUMsV0FBd0QsT0FBeEQsRUFDQSxDQUNELEMsd0RBTWV6QixRLENBQVUsaUJBQ3pCLEdBQUcsQ0FBQ0EsUUFBSixDQUFjLENBQ2IsS0FBS0QsR0FBTCxHQUNBLENBRkQsSUFFTyxDQUNOLENBQUNpQixtQkFBRCxDQUFXQyxtQkFBWCxDQUFxQkMsbUJBQXJCLEVBQStCM0UsT0FBL0IsQ0FBdUMsZUFBUyxDQUMvQyxPQUFLd0QsR0FBTCxDQUFTeEIsS0FBVCxDQUFnQnlCLFFBQWhCLEVBQ0EsQ0FGRCxFQUdBLENBQ0QsQyxxQ0EzSWUsQ0FDZixNQUFPLE1BQUs0QixNQUFMLEdBQWdCYixrQkFBdkIsQ0FDQSxDLHNDQU1nQixDQUNoQixNQUFPLE1BQUthLE1BQUwsR0FBZ0JYLG1CQUF2QixDQUNBLEMsc0NBTWdCLENBQ2hCLE1BQU8sTUFBS1csTUFBTCxHQUFnQlosbUJBQXZCLENBQ0EsQyxzQ0FNZ0IsQ0FDaEIsTUFBTyxNQUFLWSxNQUFMLEdBQWdCVixtQkFBdkIsQ0FDQSxDLG9DQTBIVytKLE8sQ0FBUzFKLEksQ0FBc0IsSUFBaEJ2RixRQUFnQiwyREFBTixJQUFNLENBQzFDLEdBQUcsQ0FBQ1YsZ0JBQU1xQyxJQUFWLENBQWdCLENBQ2YsTUFBTyxtQkFBUVYsTUFBUixDQUFlLEdBQUlnQixNQUFKLENBQVUsZ0RBQVYsQ0FBZixDQUFQLENBQ0EsQ0FFRCxHQUFNaU4sZ0JBQWlCLENBQ3RCaEksS0FBTTVILGdCQUFNcUMsSUFBTixDQUFXOEQsR0FESyxDQUV0QkYsS0FBTUEsS0FBS0UsR0FGVyxDQUd0QkcsT0FBUWIsa0JBSGMsQ0FJdEJzRSxTQUFVbEUsU0FBU2pCLEVBQVQsRUFKWSxDQUt0QnVLLE1BQU96TyxPQUxlLENBQXZCLENBUUEsTUFBT21GLFVBQVNuQyxJQUFULGNBQTJCaU0sUUFBUXhKLEdBQW5DLENBQTBDeUosY0FBMUMsRUFDTHpMLElBREssQ0FDQSxtQkFBYSxDQUNsQixHQUFNMEwsVUFBV0MsVUFBVWpKLElBQVYsRUFBakIsQ0FDQSxNQUFPLElBQUlxQixPQUFKLENBQVcscUJBQWMsQ0FBQy9CLElBQUswSixRQUFOLENBQWdCdkgsR0FBSXFILFFBQVF4SixHQUE1QixDQUFkLENBQWdEeUosY0FBaEQsQ0FBWCxDQUFQLENBQ0EsQ0FKSyxFQUtML0gsS0FMSyxDQUtDOUIsSUFBSXRFLENBQUosQ0FBTSxhQUFOLENBTEQsQ0FBUCxDQU1BLEMsc0NBM09tQnlHLE07Ozs7OztBQ3hDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDakJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQSxxRUFBcUU7QUFDckUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUNYRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxzQkFBc0I7QUFDaEYsa0ZBQWtGLHdCQUF3QjtBQUMxRzs7Ozs7OztBQ1JBOzs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7OzRhQ1BZckMsUSxxSUFFQUUsRyxvbEJBTVosR0FBSWdLLGNBQWUsS0FBbkIsQyxHQU1xQnZCLEssWUFNcEIsY0FBWXBLLFFBQVosQ0FBc0I0TCxNQUF0QixDQUE4Qix5Q0FDN0IsR0FBTWxQLFFBQVMscUJBQWMsRUFBZCxDQUFrQnNELFNBQVN3QyxHQUFULEVBQWxCLENBQWYsQ0FNQSxLQUFLVCxHQUFMLENBQVc2SixNQUFYLENBS0EsS0FBS25KLElBQUwsQ0FBWS9GLE9BQU8rRixJQUFuQixDQUtBLEtBQUtQLE1BQUwsQ0FBY3hGLE9BQU93RixNQUFyQixDQUtBLEtBQUsySixRQUFMLENBQWdCblAsT0FBT21QLFFBQXZCLENBS0EsS0FBS0MsU0FBTCxDQUFpQixhQUFhek4sSUFBYixDQUFrQjNCLE9BQU9xUCxRQUF6QixDQUFqQixDQUVBLEMsb0VBT016UCxPLENBQVMsZ0JBQ2YsR0FBRyxDQUFDVixnQkFBTXFDLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFRVixNQUFSLENBQWUsR0FBSWdCLE1BQUosQ0FBVSxxREFBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU8rRCxnQkFBSzBKLE1BQUwsQ0FBZXBRLGdCQUFNcUMsSUFBTixDQUFXOEQsR0FBMUIsS0FBaUMsS0FBS0EsR0FBdEMsRUFDTGhDLElBREssQ0FDQSxjQUFRLENBQ2IsTUFBTzhCLE1BQUtvQyxNQUFMLENBQVksQ0FBQyxLQUFELENBQVosQ0FBb0IsSUFBcEIsQ0FBMEIzSCxPQUExQixDQUFQLENBQ0EsQ0FISyxFQUlMeUQsSUFKSyxDQUlBLGNBQVEsQ0FDYixNQUFPLENBQUM4QixLQUFNNUMsS0FBSzRDLElBQVosQ0FBa0JvQyxPQUFRaEYsS0FBS2tGLE9BQUwsQ0FBYSxDQUFiLENBQTFCLENBQVAsQ0FDQSxDQU5LLEVBT0xWLEtBUEssQ0FPQzlCLElBQUl0RSxDQUFKLENBQU0sYUFBTixDQVBELENBQVAsQ0FRQSxDLHlDQU9TLENBQ1QsTUFBT29FLFVBQVM3QixJQUFULGNBQTJCLEtBQUttQyxHQUFoQyxDQUF1Q2tLLGdCQUF2QyxDQUFQLENBQ0EsQyxvQ0FTWUMsSSxDQUFNekosSSxDQUFNLElBQ2xCbUQsS0FBTUMsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEdBQWdCLElBQTNCLENBRFksQ0FFbEJDLElBQU1ILEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxHQUFnQixJQUEzQixDQUZZLENBR2xCaEUsSUFBUzZELEdBQVQsS0FBZ0JJLEdBQWhCLEtBQXVCa0csS0FBS25LLEdBSFYsQ0FJbEJvSyxRQUFhdkcsR0FBYixLQUFvQkksR0FBcEIsS0FBMkJrRyxLQUFLbkssR0FKZCxDQU14QixHQUFHLENBQUM0SixZQUFKLENBQWtCLENBQ2pCQSxhQUFlLElBQWYsQ0FDQSxHQUFNM08sR0FBSSxDQUFDa0YsT0FBUXBCLG9CQUFULENBQW9CK0ssU0FBVXBLLFNBQVNqQixFQUFULEVBQTlCLENBQTZDdUwsU0FBVUcsS0FBS0gsUUFBNUQsQ0FBVixDQUNBLEdBQUd0SixJQUFILENBQVMsQ0FDUixxQkFBY3pGLENBQWQsQ0FBaUIsQ0FBQ3lGLFNBQUQsQ0FBakIsRUFDQSxDQUNELEdBQUlxRSxVQUFXbEosaUJBQU93TyxRQUFQLENBQWdCQyxpQkFBaEIsQ0FBa0MxTSxHQUFsQyxDQUFzQ29DLEdBQXRDLENBQWYsQ0FDQSxNQUFPTixVQUFTakMsTUFBVCxVQUF5QnVDLEdBQXpCLENBQWdDL0UsQ0FBaEMsRUFFTCtDLElBRkssQ0FFQSxVQUFNLENBQ1gsR0FBTXVNLGdCQUFpQixDQUN0QnBLLE9BQVFwQixvQkFEYyxDQUV0QnlMLElBQUssQ0FDSjdCLE1BQU8sT0FESCxDQUVKOEIsT0FBUTVPLGlCQUFPNk8sV0FGWCxDQUZpQixDQU10QnJLLFVBQVd1SCxVQUFVdkgsU0FOQyxDQUF2QixDQVFBeEcsZ0JBQU13RyxTQUFOLENBQWtCa0ssZUFBZWxLLFNBQWpDLENBQ0EsR0FBRzBFLFFBQUgsQ0FBYSxDQUNaLE1BQU9yRixVQUFTakMsTUFBVCxjQUE2QnVDLEdBQTdCLEtBQW9DK0UsUUFBcEMsQ0FBZ0R3RixjQUFoRCxDQUFQLENBQ0EsQ0FDRCxNQUFPN0ssVUFBU25DLElBQVQsY0FBMkJ5QyxHQUEzQixDQUFrQ3VLLGNBQWxDLENBQVAsQ0FDQSxDQWhCSyxFQWtCTHZNLElBbEJLLENBa0JBLG1CQUFhLENBQ2xCLEdBQUksQ0FBQytHLFFBQUwsQ0FBZSxDQUNkQSxTQUFXNEYsVUFBVWpLLElBQVYsRUFBWCxDQUNBN0UsaUJBQU93TyxRQUFQLENBQWdCQyxpQkFBaEIsQ0FBa0NoTixHQUFsQyxDQUFzQzBDLEdBQXRDLENBQTJDK0UsUUFBM0MsRUFDQSxDQUNEbEwsZ0JBQU11QyxNQUFOLENBQWUySSxRQUFmLENBQ0EsQ0F4QkssRUEwQkwvRyxJQTFCSyxDQTBCQSxVQUFNLENBRVgwQixTQUFTbEIsWUFBVCxjQUFtQ3dCLEdBQW5DLEtBQTBDK0UsUUFBMUMsWUFBNkR6SCxHQUE3RCxDQUFpRTBCLHdCQUFqRSxFQUVBVSxTQUFTbEIsWUFBVCxVQUErQndCLEdBQS9CLEVBQXNDdkMsTUFBdEMsQ0FBNkMsQ0FDNUMwQyxPQUFRbkIsd0JBRG9DLENBRTVDOEssU0FBVXBLLFNBQVNqQixFQUFULEVBRmtDLENBQTdDLEVBSUEsQ0FsQ0ssRUFxQ0xULElBckNLLENBcUNBLGlCQUFNcUssTUFBS3pLLEdBQUwsQ0FBU3dNLE9BQVQsQ0FBTixFQXJDQSxFQXNDTHBNLElBdENLLENBc0NBLGNBQVEsQ0FDYjRMLGFBQWUsS0FBZixDQUNBLE1BQU8xTixLQUFQLENBQ0EsQ0F6Q0ssRUEwQ0x3RixLQTFDSyxDQTBDQyxXQUFLLENBQ1g5QixJQUFJeEUsQ0FBSixDQUFNQSxDQUFOLEVBQ0F3TyxhQUFlLEtBQWYsQ0FDQSxNQUFPLG1CQUFRcE8sTUFBUixDQUFlSixDQUFmLENBQVAsQ0FDQSxDQTlDSyxDQUFQLENBK0NBLENBRUQsTUFBT2lOLE1BQUt6SyxHQUFMLENBQVN3TSxPQUFULENBQVAsQ0FDQSxDLDhDQVFpQmxPLEksQ0FBTSxDQUd2QixHQUFNa08sU0FBVWxPLEtBQUs4RCxHQUFMLENBQVMwSSxPQUFULENBQWlCLElBQWpCLENBQXNCLEdBQXRCLENBQWhCLENBR0FoSixTQUFTbEIsWUFBVCxjQUFtQzRMLE9BQW5DLEtBQThDdlEsZ0JBQU11QyxNQUFwRCxZQUFxRStHLE1BQXJFLEdBQ0F6RCxTQUFTbEIsWUFBVCxVQUErQjRMLE9BQS9CLEVBQTBDakgsTUFBMUMsR0FDQSxHQUFHakgsS0FBSzZOLFNBQVIsQ0FBbUIsQ0FDbEIsTUFBT3JLLFVBQVNoQyxNQUFULGNBQTZCME0sT0FBN0IsRUFDTHBNLElBREssQ0FDQSxpQkFBTTBCLFVBQVM5QixHQUFULGNBQTBCd00sT0FBMUIsQ0FBTixFQURBLEVBRUxwTSxJQUZLLENBRUEsaUJBQVcsQ0FDaEIsR0FBTTRNLFdBQVksRUFBbEIsQ0FDQXhJLFFBQVF0SCxPQUFSLENBQWdCLGdCQUFVLENBQ3pCOFAsVUFBVXJOLElBQVYsQ0FBZTJFLE9BQU94QixJQUFQLEVBQWYsRUFDQSxDQUZELEVBR0EsTUFBTyxtQkFBUW9CLEdBQVIsQ0FBWThJLFVBQVV6SixHQUFWLENBQWMseUJBQVl6QixVQUFTaEMsTUFBVCxjQUE2QjBNLE9BQTdCLEtBQXdDVixRQUF4QyxDQUFaLEVBQWQsQ0FBWixDQUFQLENBQ0EsQ0FSSyxFQVdMMUwsSUFYSyxDQVdBLGlCQUFNMEIsVUFBU2hDLE1BQVQsVUFBeUIwTSxPQUF6QixDQUFOLEVBWEEsRUFZTHBNLElBWkssQ0FZQSxVQUFNLENBQ1huQyxpQkFBT3dPLFFBQVAsQ0FBZ0JDLGlCQUFoQixDQUFrQzVNLE1BQWxDLENBQXlDME0sT0FBekMsRUFDQSxDQWRLLEVBZUwxSSxLQWZLLENBZUM5QixJQUFJdEUsQ0FBSixDQUFNLDJCQUFOLENBZkQsQ0FBUCxDQWdCQSxDQUNELE1BQU9vRSxVQUFTcEMsR0FBVCxjQUEwQjhNLE9BQTFCLEtBQXFDdlEsZ0JBQU11QyxNQUEzQyxXQUE0RDRDLHdCQUE1RCxFQUNMaEIsSUFESyxDQUNBLGlCQUFNMEIsVUFBUzlCLEdBQVQsY0FBMEJ3TSxPQUExQixDQUFOLEVBREEsRUFFTHBNLElBRkssQ0FFQSxpQkFBVyxDQUVoQixHQUFNNk0scUJBQXNCOUMsUUFBUWpOLE9BQVIsQ0FBZ0IsZ0JBQVUsQ0FDckQsTUFBUSxJQUFJZ1EsT0FBSixLQUFlL0wsb0JBQWYsS0FBRCxDQUErQnpDLElBQS9CLENBQW9DRixPQUFPcUUsR0FBUCxHQUFhTixNQUFqRCxDQUFQLENBQ0EsQ0FGMkIsQ0FBNUIsQ0FHQSxHQUFHLENBQUMwSyxtQkFBSixDQUF5QixDQUN4QixNQUFPbkwsVUFBU2pDLE1BQVQsVUFBeUIyTSxPQUF6QixDQUFvQyxDQUFDakssT0FBUW5CLHdCQUFULENBQXBDLENBQVAsQ0FDQSxDQUNELE1BQU8sS0FBUCxDQUNBLENBWEssRUFZTDBDLEtBWkssQ0FZQzlCLElBQUl0RSxDQUFKLENBQU0saUJBQU4sQ0FaRCxDQUFQLENBYUEsQyxnQ0FRVTBFLEcsQ0FBSyxDQUVmLEdBQU1vSyxTQUFVcEssSUFBSTBJLE9BQUosQ0FBWSxJQUFaLENBQWlCLEdBQWpCLENBQWhCLENBQ0EsTUFBT2hKLFVBQVM5QixHQUFULFVBQXNCd00sT0FBdEIsRUFFTnBNLElBRk0sQ0FFRCx5QkFBWUMsVUFBVyxHQUFJb0ssS0FBSixDQUFTcEssUUFBVCxDQUFtQitCLEdBQW5CLENBQVgsQ0FBcUMsSUFBakQsRUFGQyxFQUdOMEIsS0FITSxDQUdBOUIsSUFBSXRFLENBQUosQ0FBTSxVQUFOLENBSEEsQ0FBUCxDQUlBLEMsb0NBck1tQitNLEk7Ozs7Ozs7eURDQWQsR0FBTTBDLHFCQUFRLE9BQWQsQ0FNQSxHQUFNQyxxQkFBUSxPQUFkLENBTUEsR0FBTUMsaUNBQWMsYUFBcEIsQ0FNQSxHQUFNQyx1Q0FBaUIsZ0JBQXZCLEMsZ0JBRVEsQ0FBQ0gsV0FBRCxDQUFRQyxXQUFSLENBQWVDLHVCQUFmLENBQTRCQyw2QkFBNUIsQzs7Ozs7OzsraEJDaENIdkwsTSxpVEFLQUQsUSxxSUFFQUUsRyw4ZUFRUzZHLE0sWUFjcEIsZUFBWTlLLEdBQVosQ0FBNkIsSUFBWndQLElBQVksMkRBQU4sSUFBTSwwQ0FFNUJ0UixnQkFBTXVELElBQU4sQ0FBYXpCLEdBQWIsQ0FFQTlCLGdCQUFNaUMsTUFBTixDQUFlcVAsR0FBZixDQUtBLEtBQUtwSyxVQUFMLENBQWtCLEVBQWxCLENBQ0EsQyx5RUFpRlFxSyxLLENBQU9DLFEsQ0FBVTNLLEksQ0FBTTRLLFUsQ0FBWSxnQkFDM0MsTUFBT3pSLGlCQUFNdUQsSUFBTixDQUFXbU8sVUFBWCxDQUFzQkgsS0FBdEIsQ0FBNkJDLFFBQTdCLEVBQ0xyTixJQURLLENBQ0EsY0FBUSxDQUNiLEdBQUdtTSxJQUFILENBQVMsQ0FDUixNQUFPLE9BQUtxQixLQUFMLENBQVdKLEtBQVgsQ0FBa0JDLFFBQWxCLENBQTRCM0ssTUFBUTBLLEtBQXBDLENBQTJDRSxVQUEzQyxDQUFQLENBQ0EsQ0FDRCxDQUxLLEVBTUw1SixLQU5LLENBTUM5QixJQUFJdEUsQ0FBSixDQUFNLGdCQUFOLENBTkQsQ0FBUCxDQU9BLEMsb0NBVUs4UCxLLENBQU9DLFEsQ0FBVTNLLEksQ0FBMEIsSUFBcEI0SyxXQUFvQiwyREFBUCxLQUFPLENBRTVDRyxFQUFJLGtCQUFRdE8sT0FBUixFQUZ3QyxDQUdoRCxHQUFHLEtBQUt1TyxPQUFMLEVBQWdCLEtBQUtBLE9BQUwsQ0FBYU4sS0FBYixHQUF1QkEsS0FBMUMsQ0FBaUQsQ0FDaERLLEVBQUksS0FBS0UsTUFBTCxFQUFKLENBQ0EsQ0FDRCxNQUFPRixHQUNMek4sSUFESyxDQUNBLGlCQUFNbkUsaUJBQU11RCxJQUFOLENBQVd3TyxnQkFBWCxDQUE0QixDQUFDUixXQUFELENBQVFDLGlCQUFSLENBQWtCQyxxQkFBbEIsQ0FBNUIsQ0FBTixFQURBLEVBRUx0TixJQUZLLENBRUEscUJBQVFxSyxnQkFBS3dELElBQUwsQ0FBVTFCLElBQVYsQ0FBZ0J6SixJQUFoQixDQUFSLEVBRkEsRUFHTDFDLElBSEssQ0FHQSxXQUFLLENBQ1ZuRSxnQkFBTXFDLElBQU4sQ0FBYTRQLENBQWIsQ0FDQSxNQUFPQSxFQUFQLENBQ0EsQ0FOSyxFQU9McEssS0FQSyxDQU9DOUIsSUFBSXRFLENBQUosQ0FBTSxhQUFOLENBUEQsQ0FBUCxDQVFBLEMsdUNBTVEsaUJBQ1IsTUFBTyx1QkFBWSxTQUFDNkIsT0FBRCxDQUFVM0IsTUFBVixDQUFxQixDQUV2QyxHQUFHSyxpQkFBT3dPLFFBQVAsQ0FBZ0JDLGlCQUFoQixDQUFrQzFNLEdBQWxDLENBQXNDLFNBQXRDLENBQUgsQ0FBb0QsQ0FDbkQvRCxnQkFBTXVELElBQU4sQ0FBVzJPLE1BQVgsQ0FBa0IsU0FBQzFRLEtBQUQsQ0FBUThPLElBQVIsQ0FBaUIsQ0FDbEMsR0FBR0EsTUFBUSxDQUFDLE9BQUt1QixPQUFqQixDQUEwQixDQUN6QnJELGVBQUt3RCxJQUFMLENBQVUxQixJQUFWLEVBQWdCbk0sSUFBaEIsQ0FBcUIsV0FBSyxDQUN6Qm5FLGdCQUFNcUMsSUFBTixDQUFhNFAsQ0FBYixDQUNBM08sUUFBUTJPLENBQVIsRUFDQSxDQUhELENBR0d0USxNQUhILEVBSUEsQ0FDRCxDQVBELEVBUUEsQ0FURCxJQVNPLENBQ05BLE9BQU8sR0FBSWdCLE1BQUosQ0FBVSxzQkFBVixDQUFQLEVBQ0EsQ0FDRCxDQWRNLENBQVAsQ0FlQSxDLDRDQU9Ta0UsSSxDQUFNLENBRWYsR0FBSStLLEdBQUksa0JBQVF0TyxPQUFSLEVBQVIsQ0FDQSxHQUFHLEtBQUt1TyxPQUFMLEdBQWlCLENBQUMsS0FBS0EsT0FBTCxDQUFhM0IsU0FBZCxFQUEyQixLQUFLMkIsT0FBTCxDQUFhaEwsSUFBYixHQUFzQkEsSUFBbEUsQ0FBSCxDQUE0RSxDQUMzRStLLEVBQUksS0FBS0UsTUFBTCxFQUFKLENBQ0EsQ0FDRCxNQUFPRixHQUNMek4sSUFESyxDQUNBLGlCQUFNbkUsaUJBQU11RCxJQUFOLENBQVc0TyxlQUFYLEVBQU4sRUFEQSxFQUVMaE8sSUFGSyxDQUVBLHFCQUFRcUssZ0JBQUt3RCxJQUFMLENBQVUxQixJQUFWLENBQWdCekosSUFBaEIsQ0FBUixFQUZBLEVBR0wxQyxJQUhLLENBR0EsV0FBSyxDQUNWbkUsZ0JBQU1xQyxJQUFOLENBQWE0UCxDQUFiLENBQ0EsTUFBT0EsRUFBUCxDQUNBLENBTkssRUFPTHBLLEtBUEssQ0FPQzlCLElBQUl0RSxDQUFKLENBQU0saUJBQU4sQ0FQRCxDQUFQLENBUUEsQyx1Q0FNUSxpQkFDUixNQUFPLHVCQUFZLFNBQUM2QixPQUFELENBQVUzQixNQUFWLENBQXFCLENBQ3ZDLEdBQUlpUSxHQUFJLGtCQUFRdE8sT0FBUixFQUFSLENBQ0EsR0FBRyxPQUFLdU8sT0FBTCxFQUFnQixJQUFuQixDQUF5QixDQUN4QkQsRUFBSXBELGVBQUs0RCxVQUFMLENBQWdCLE9BQUtQLE9BQXJCLENBQUosQ0FDQSxDQUNERCxFQUFFek4sSUFBRixDQUFPLFVBQU0sQ0FDWixtQkFBWSxPQUFLK0MsVUFBakIsRUFBNkJqRyxPQUE3QixDQUNDLHNCQUFTNEUsVUFBU3BCLEdBQVQsQ0FBYXFCLE9BQU9nSixLQUFQLENBQWF0RyxNQUFiLENBQW9CdkYsS0FBcEIsRUFBMkJqRCxnQkFBTXFDLElBQWpDLENBQWIsQ0FBcURZLEtBQXJELENBQVQsRUFERCxFQUdBakQsZ0JBQU11RCxJQUFOLENBQVd1TyxNQUFYLENBQWtCLFVBQU0sQ0FDdkI5UixnQkFBTXFDLElBQU4sQ0FBYSxJQUFiLENBQ0FpQixVQUNBLENBSEQsRUFJQSxDQVJELEVBU0N1RSxLQVRELENBU08sV0FBSyxDQUNYOUIsSUFBSXhFLENBQUosQ0FBTUEsQ0FBTixFQUNBSSxPQUFPSixDQUFQLEVBQ0EsQ0FaRCxFQWFBLENBbEJNLENBQVAsQ0FtQkEsQyx5Q0FvQ1MsQ0FDVCxHQUFHLENBQUMsS0FBS3NRLE9BQVQsQ0FBa0IsQ0FDakIsTUFBTyxtQkFBUWxRLE1BQVIsQ0FBZSxHQUFJZ0IsTUFBSixDQUFVLHFEQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsTUFBT2tELFVBQVM3QixJQUFULGNBQTJCLEtBQUs2TixPQUFMLENBQWExTCxHQUF4QyxDQUErQytCLGdCQUEvQyxFQUNMTCxLQURLLENBQ0M5QixJQUFJdEUsQ0FBSixDQUFNLGVBQU4sQ0FERCxDQUFQLENBRUEsQyw4QkFtQkV3QixLLENBQU95QixRLENBQVVGLGMsQ0FBZ0IsQ0FDbkMsR0FBTXBCLE1BQU8wQyxPQUFPZ0osS0FBUCxDQUFhdEcsTUFBYixDQUFvQnZGLEtBQXBCLEVBQTJCakQsZ0JBQU1xQyxJQUFqQyxDQUFiLENBQ0EsR0FBR2UsSUFBSCxDQUFTLElBQ0ZpUCxLQUFNdk0sT0FBT2dKLEtBQVAsQ0FBYXBHLE9BQWIsQ0FBcUJ6RixLQUFyQixDQURKLENBRUZxTSxHQUFLLFFBQUxBLEdBQUssVUFBWSxDQUN0QixHQUFNbE8sR0FBSWlSLElBQU0sR0FBSUEsSUFBSixDQUFRak8sUUFBUixDQUFOLENBQTBCLElBQXBDLENBQ0EyQixJQUFJMUUsQ0FBSixhQUFrQjRCLEtBQWxCLEtBQTRCN0IsQ0FBNUIsRUFDQXNELFNBQVN0RCxDQUFULEVBQ0EsQ0FOTyxDQU9SeUUsU0FBU3ZCLEVBQVQsQ0FBWWxCLElBQVosQ0FBa0JILEtBQWxCLENBQXlCcU0sRUFBekIsQ0FBNkI5SyxjQUE3QixFQUNBLEdBQUcsQ0FBQyxLQUFLMEMsVUFBTCxDQUFnQmpFLEtBQWhCLENBQUosQ0FBNEIsQ0FDM0IsS0FBS2lFLFVBQUwsQ0FBZ0JqRSxLQUFoQixFQUF5QixFQUF6QixDQUNBLENBQ0QsS0FBS2lFLFVBQUwsQ0FBZ0JqRSxLQUFoQixFQUF1QlMsSUFBdkIsQ0FBNEI0TCxFQUE1QixFQUNBLENBQ0QsQyw4Q0FTVXpJLEksQ0FBTUksSyxDQUEyQixJQUFwQjJDLFdBQW9CLDJEQUFQLEtBQU8sQ0FDM0MsR0FBRyxDQUFDLEtBQUtpSSxPQUFULENBQWtCLENBQ2pCLE1BQU8sbUJBQVFsUSxNQUFSLENBQWUsR0FBSWdCLE1BQUosQ0FBVSxzREFBVixDQUFmLENBQVAsQ0FDQSxDQUNELE1BQU8rRCxnQkFBSzBKLE1BQUwsQ0FBWXZKLElBQVosQ0FBa0JJLEtBQWxCLENBQXlCMkMsVUFBekIsQ0FBUCxDQUNBLEMsd0NBZVF6RCxHLENBQUssQ0FDYixNQUFPTyxnQkFBSzNDLEdBQUwsQ0FBU29DLEdBQVQsQ0FBUCxDQUNBLEMsd0NBT1FBLEcsQ0FBSyxDQUNiLE1BQU9xSSxnQkFBS3pLLEdBQUwsQ0FBU29DLEdBQVQsQ0FBUCxDQUNBLEMsZ0NBclBVLENBQ1YsTUFBT25HLGlCQUFNdUQsSUFBYixDQUNBLEMsa0NBTVksQ0FDWixNQUFPdkQsaUJBQU1pQyxNQUFiLENBQ0EsQyxtQ0FNYSxDQUNiLE1BQU9qQyxpQkFBTXFDLElBQWIsQ0FDQSxDLDJDQStNc0IsQ0FDdEIsTUFBT3JDLGlCQUFNc1MsZUFBTixDQUFzQkMsTUFBN0IsQ0FDQSxDLHFDQWxSb0IsQ0FDcEIsTUFBTyxDQUFDNUIsSUFBSyxPQUFOLENBQW1CNkIsT0FBUSxVQUEzQixDQUFQLENBQ0EsQyxpQ0FNa0IsQ0FDbEIsTUFBT0Msc0JBQVAsQ0FDQSxDLGtDQU1tQixDQUNuQixNQUFPLENBQUN4TSxLQUFNSCxPQUFPRyxJQUFkLENBQW9CNkksTUFBT2hKLE9BQU9nSixLQUFsQyxDQUF5Q25ILE9BQVE3QixPQUFPNkIsTUFBeEQsQ0FBZ0VVLE9BQVF2QyxPQUFPdUMsTUFBL0UsQ0FBUCxDQUNBLEMsbUNBTW9CLENBQ3BCLE1BQU93RSxpQkFBUCxDQUNBLEMsaUNBTWtCLENBQ2xCLE1BQU96QixnQkFBUCxDQUNBLEMsa0NBTW1CLENBQ25CLE1BQU8sQ0FBQ1ksa0JBQUQsQ0FBUVAsa0JBQVIsQ0FBUCxDQUNBLEMscUNBeEVtQm1CLEssQ0FxVXJCOEYsT0FBT0MsT0FBUCxDQUFpQi9GLEtBQWpCLEM7Ozs7Ozs7aVdDdFZZL0csUSxnRUFDQUUsRywrVkFNU3NLLE8sWUFNcEIsZ0JBQVlqTSxRQUFaLENBQXNCLDJDQUNyQixHQUFNdEQsUUFBUyxxQkFBYyxFQUFkLENBQWtCc0QsU0FBU3dDLEdBQVQsRUFBbEIsQ0FBZixDQUtBLEtBQUtULEdBQUwsQ0FBVy9CLFNBQVN5QyxJQUFULEVBQVgsQ0FLQSxLQUFLK0wsRUFBTCxDQUFVOVIsT0FBTzhSLEVBQWpCLENBS0EsS0FBS3BNLFNBQUwsQ0FBaUIxRixPQUFPMEYsU0FBeEIsQ0FRQSxLQUFLRixNQUFMLENBQWN4RixPQUFPd0YsTUFBckIsQ0FLQSxLQUFLcUssR0FBTCxDQUFXN1AsT0FBTzZQLEdBQWxCLENBRUEsQyxxRUFVVUosTyxDQUFTc0MsUyxDQUFXLENBRzlCLEdBQU1DLFFBQVN2QyxRQUFRMUIsT0FBUixDQUFnQixJQUFoQixDQUFxQixHQUFyQixDQUFmLENBQ0EsTUFBT2hKLFVBQVM5QixHQUFULGNBQTBCK08sTUFBMUIsS0FBb0NELFNBQXBDLEVBQ04xTyxJQURNLENBQ0QseUJBQVlDLFVBQVcsR0FBSWlNLE9BQUosQ0FBV2pNLFFBQVgsQ0FBWCxDQUFrQyxJQUE5QyxFQURDLEVBRU55RCxLQUZNLENBRUE5QixJQUFJdEUsQ0FBSixDQUFNLFlBQU4sQ0FGQSxDQUFQLENBR0EsQyxzQ0F0RG1CNE8sTTs7Ozs7Ozs0YUNQVHhLLFEsZ0VBQ0FFLEcsb2FBT1NxQixRLFlBT3BCLGlCQUFZaEQsUUFBWixDQUFzQm9ELE1BQXRCLENBQThCLDRDQUM3QixHQUFNMUcsUUFBUyxxQkFBYyxFQUFkLENBQWtCc0QsU0FBU3dDLEdBQVQsRUFBbEIsQ0FBZixDQUtBLEtBQUtULEdBQUwsQ0FBVy9CLFNBQVN5QyxJQUFULEVBQVgsQ0FLQSxLQUFLVyxNQUFMLENBQWNBLE1BQWQsQ0FLQSxLQUFLdUwsSUFBTCxDQUFZalMsT0FBT2lTLElBQW5CLENBS0EsS0FBS25MLElBQUwsQ0FBWTlHLE9BQU84RyxJQUFuQixDQUtBLEtBQUttQyxRQUFMLENBQWdCakosT0FBT2lKLFFBQXZCLENBQ0EsQyxtRUFPSWlKLE8sQ0FBUyxnQkFDYixNQUFPbk4sVUFBU2pDLE1BQVQsV0FBMEIsS0FBSzRELE1BQS9CLGNBQWtELEtBQUtyQixHQUF2RCxDQUE4RCxDQUFDNE0sS0FBTUMsT0FBUCxDQUE5RCxFQUNMN08sSUFESyxDQUNBLFVBQU0sQ0FDWCxNQUFLNE8sSUFBTCxDQUFZQyxPQUFaLENBQ0EsTUFBTyxNQUFQLENBQ0EsQ0FKSyxFQUtMbkwsS0FMSyxDQUtDOUIsSUFBSXRFLENBQUosQ0FBTSxjQUFOLENBTEQsQ0FBUCxDQU1BLEMsdUNBTVEsQ0FDUixNQUFPb0UsVUFBU2hDLE1BQVQsV0FBMEIsS0FBSzJELE1BQS9CLGNBQWtELEtBQUtyQixHQUF2RCxFQUNMMEIsS0FESyxDQUNDOUIsSUFBSXRFLENBQUosQ0FBTSxnQkFBTixDQURELENBQVAsQ0FFQSxDLG9DQVFXd0UsSSxDQUFNOE0sSSxDQUFNLENBQ3ZCLEdBQUcsQ0FBQy9TLGdCQUFNcUMsSUFBVixDQUFnQixDQUNmLE1BQU8sbUJBQVFWLE1BQVIsQ0FBZSxHQUFJZ0IsTUFBSixDQUFVLG1FQUFWLENBQWYsQ0FBUCxDQUNBLENBQ0QsR0FBTVUsTUFBTyxDQUNadUUsS0FBTTVILGdCQUFNcUMsSUFBTixDQUFXOEQsR0FETCxDQUVaNEQsU0FBVWxFLFNBQVNqQixFQUFULEVBRkUsQ0FHWm1PLFNBSFksQ0FBYixDQUtBLE1BQU9sTixVQUFTbkMsSUFBVCxZQUF5QnVDLEtBQUtFLEdBQTlCLGFBQThDOUMsSUFBOUMsRUFDTGMsSUFESyxDQUNBLHdCQUFXMEIsVUFBUzlCLEdBQVQsWUFBd0JrQyxLQUFLRSxHQUE3QixjQUE2Q3hDLFFBQVFrRCxJQUFSLEVBQTdDLENBQVgsRUFEQSxFQUVMMUMsSUFGSyxDQUVBLHlCQUFZLElBQUlpRCxRQUFKLENBQVloRCxRQUFaLENBQXNCNkIsS0FBS0UsR0FBM0IsQ0FBWixFQUZBLEVBR0wwQixLQUhLLENBR0M5QixJQUFJdEUsQ0FBSixDQUFNLGNBQU4sQ0FIRCxDQUFQLENBSUEsQyx1Q0E5RW1CMkYsTzs7Ozs7Ozs2VENKQUQsWSxDQU1wQixxQkFBWS9DLFFBQVosQ0FBc0IsZ0RBQ3JCLEdBQU10RCxRQUFTLHFCQUFjLEVBQWQsQ0FBa0JzRCxTQUFTd0MsR0FBVCxFQUFsQixDQUFmLENBS0EsS0FBS1QsR0FBTCxDQUFXL0IsU0FBU3lDLElBQVQsRUFBWCxDQVFBLEtBQUtYLElBQUwsQ0FBWXBGLE9BQU9vRixJQUFuQixDQVFBLEtBQUtJLE1BQUwsQ0FBY3hGLE9BQU93RixNQUFyQixDQUtBLEtBQUtHLE9BQUwsQ0FBZTNGLE9BQU8yRixPQUF0QixDQUtBLEtBQUtELFNBQUwsQ0FBaUIxRixPQUFPMEYsU0FBeEIsQ0FDQSxDLGlCQXZDbUJXLFc7Ozs7Ozs7b2pCQ0hUdEIsUSxnRUFDQUUsRywrREFDQUQsTSxrV0FNUzJJLE8sWUFLcEIsZ0JBQVkzTixNQUFaLENBQW9CLDJDQUNuQmlGLElBQUkzRSxDQUFKLENBQU0sWUFBTixDQUFvQk4sTUFBcEIsRUFLQSxLQUFLMEcsTUFBTCxDQUFjMUcsT0FBTzBHLE1BQXJCLENBS0EsS0FBS3JCLEdBQUwsQ0FBV3JGLE9BQU9xRixHQUFsQixDQUtBLEtBQUt5QixJQUFMLENBQVk5RyxPQUFPOEcsSUFBbkIsQ0FLQSxLQUFLbUIsSUFBTCxDQUFZakksT0FBT2lJLElBQW5CLENBSUEsS0FBS3hHLE1BQUwsQ0FBY3pCLE9BQU95QixNQUFyQixDQUtBLEtBQUtpRSxTQUFMLENBQWlCMUYsT0FBTzBGLFNBQXhCLENBSUEsS0FBS3VGLE1BQUwsQ0FBY2pMLE9BQU9pTCxNQUFyQixDQUlBLEtBQUtELEtBQUwsQ0FBYWhMLE9BQU9nTCxLQUFwQixDQUtBLEtBQUtJLFNBQUwsQ0FBaUJsTSxnQkFBTWlDLE1BQU4sQ0FBYWdSLHFCQUE5QixDQUlBLEtBQUtDLEtBQUwsQ0FBYSxxQkFBYyxDQUFDbEgsTUFBTyxLQUFSLENBQWVQLE1BQU8sS0FBdEIsQ0FBZCxDQUE0QzNLLE9BQU9vUyxLQUFuRCxDQUFiLENBTUEsS0FBS2hNLFVBQUwsQ0FBa0IsRUFBbEIsQ0FLQSxLQUFLaU0sY0FBTCxDQUFzQixJQUF0QixDQUNBLEMsNEVBZVNGLHFCLENBQXVCLGdCQUNoQyxHQUFHLENBQUNqVCxnQkFBTXFDLElBQVYsQ0FBZ0IsQ0FDZixNQUFPLG1CQUFRVixNQUFSLENBQWUsR0FBSWdCLE1BQUosQ0FBVSwrREFBVixDQUFmLENBQVAsQ0FDQSxDQUVELEtBQUt1SixTQUFMLENBQWlCK0csdUJBQXlCalQsZ0JBQU1pQyxNQUFOLENBQWFnUixxQkFBdkQsQ0FDQWxOLElBQUkzRSxDQUFKLENBQU0sa0JBQU4sQ0FBMEIsS0FBSzhLLFNBQS9CLEVBQ0EsTUFBT2xNLGlCQUFNc1MsZUFBTixDQUFzQmMsTUFBdEIsQ0FBNkIsSUFBN0IsQ0FBbUMsS0FBS2xILFNBQXhDLEVBQ0wvSCxJQURLLENBQ0EsWUFBTSxDQUFDLE1BQUtnUCxjQUFMLENBQXNCRSxFQUF0QixDQUEyQixDQURsQyxFQUVMbFAsSUFGSyxDQUVBLGlCQUFNMEIsVUFBU2pDLE1BQVQsWUFBMkIsTUFBSzRELE1BQWhDLGlCQUFzRCxNQUFLckIsR0FBM0QsS0FBa0VuRyxnQkFBTXVDLE1BQXhFLENBQWtGLENBQzdGK0YsR0FBSXRJLGdCQUFNcUMsSUFBTixDQUFXOEQsR0FEOEUsQ0FFN0Y0RCxTQUFVbEUsU0FBU2pCLEVBQVQsRUFGbUYsQ0FBbEYsQ0FBTixFQUZBLEVBTUxULElBTkssQ0FNQSxVQUFNLENBQ1gwQixTQUFTbEIsWUFBVCxZQUFpQyxNQUFLNkMsTUFBdEMsaUJBQTRELE1BQUtyQixHQUFqRSxLQUF3RW5HLGdCQUFNdUMsTUFBOUUsRUFBd0ZzQixNQUF4RixHQUNBLEdBQUl5UCxZQUFhLEtBQWpCLENBQ0F6TixTQUFTdkIsRUFBVCxZQUF1QixNQUFLa0QsTUFBNUIsYUFBOEMsTUFBS3JCLEdBQW5ELENBQTBELE9BQTFELENBQW1FLGtCQUFZLENBQzlFLEdBQU1yRixRQUFTc0QsU0FBU3dDLEdBQVQsRUFBZixDQUNBYixJQUFJM0UsQ0FBSixDQUFNLGdCQUFOLENBQXdCTixNQUF4QixFQUNBLEdBQUdBLE1BQUgsQ0FBVyxDQUVWLE1BQUtpSSxJQUFMLENBQVlqSSxPQUFPaUksSUFBbkIsQ0FGVSxHQUlKZ0QsUUFBU2pMLE9BQU9pTCxNQUpaLENBS0pELE1BQVFoTCxPQUFPZ0wsS0FMWCxDQU1WLEdBQUcsQ0FBQ0MsUUFBVUQsS0FBWCxJQUFzQkMsU0FBVyxNQUFLQSxNQUFoQixFQUEwQkQsUUFBVSxNQUFLQyxNQUEvRCxDQUFILENBQTJFLENBQzFFLE1BQUtBLE1BQUwsQ0FBY2pMLE9BQU9pTCxNQUFyQixDQUNBLE1BQUtELEtBQUwsQ0FBYWhMLE9BQU9nTCxLQUFwQixDQUNBL0YsSUFBSXpFLENBQUosQ0FBTSxNQUFLNEYsVUFBTCxDQUFnQnBCLE9BQU82QixNQUFQLENBQWM0TCxJQUE5QixDQUFOLEVBQ0EsQ0FBQyxNQUFLck0sVUFBTCxDQUFnQnBCLE9BQU82QixNQUFQLENBQWM0TCxJQUE5QixHQUF1QyxFQUF4QyxFQUE0Q3RTLE9BQTVDLENBQW9ELG1CQUFNcU8sSUFBRyxNQUFLdkQsTUFBUixDQUFnQixNQUFLRCxLQUFyQixDQUFOLEVBQXBELEVBQ0EsQ0FFRCxHQUFNb0gsT0FBUXBTLE9BQU9vUyxLQUFyQixDQUNBLEdBQUdBLFFBQVVBLE1BQU1sSCxLQUFOLEdBQWdCLE1BQUtrSCxLQUFMLENBQVdsSCxLQUEzQixFQUFvQ2tILE1BQU16SCxLQUFOLEdBQWdCLE1BQUt5SCxLQUFMLENBQVd6SCxLQUF6RSxDQUFILENBQW9GLENBQ25GLE1BQUt5SCxLQUFMLENBQWFBLEtBQWIsQ0FDQW5OLElBQUl6RSxDQUFKLENBQU0sTUFBSzRGLFVBQUwsQ0FBZ0JwQixPQUFPNkIsTUFBUCxDQUFjNkwsSUFBOUIsQ0FBTixFQUNBLENBQUMsTUFBS3RNLFVBQUwsQ0FBZ0JwQixPQUFPNkIsTUFBUCxDQUFjNkwsSUFBOUIsR0FBdUMsRUFBeEMsRUFBNEN2UyxPQUE1QyxDQUFvRCxtQkFBTXFPLElBQUcsTUFBSzRELEtBQVIsQ0FBTixFQUFwRCxFQUNBLENBQ0RJLFdBQWEsSUFBYixDQUNBLENBcEJELElBb0JPLElBQUdBLFVBQUgsQ0FBZSxDQUNyQnZOLElBQUkxRSxDQUFKLENBQU0sZ0JBQU4sQ0FBd0IsS0FBeEIsRUFDQSxNQUFLb1MsTUFBTCxDQUFZLElBQVosRUFDQSxDQUNELENBM0JELEVBNEJBLENBckNLLEVBdUNMNUwsS0F2Q0ssQ0F1Q0MsU0FBQ3RHLENBQUQsQ0FBTyxDQUNib00sUUFBUW5NLEtBQVIsbUNBQWdERCxDQUFoRCxFQUNBLE1BQU8sbUJBQVFJLE1BQVIsQ0FDTixHQUFJZ0IsTUFBSixDQUFVLDBDQUFWLENBRE0sQ0FBUCxDQUdBLENBNUNLLENBQVAsQ0E2Q0EsQyxpREFNYSxDQUNiLE1BQU8sTUFBSzhRLE1BQUwsQ0FBWSxLQUFaLENBQVAsQ0FDQSxDLHNDQVFNQyxNLENBQVEsQ0FFZDdOLFNBQVNsQixZQUFULFlBQWlDLEtBQUs2QyxNQUF0QyxpQkFBNEQsS0FBS3JCLEdBQWpFLEtBQXdFbkcsZ0JBQU11QyxNQUE5RSxFQUF3RitHLE1BQXhGLEdBRUF6RCxTQUFTcEIsR0FBVCxZQUF3QixLQUFLK0MsTUFBN0IsYUFBK0MsS0FBS3JCLEdBQXBELENBQTJELE9BQTNELEVBRUEsQ0FBQ3VOLE1BQUQsRUFBVzdOLFNBQVNoQyxNQUFULFlBQTJCLEtBQUsyRCxNQUFoQyxpQkFBc0QsS0FBS3JCLEdBQTNELEtBQWtFbkcsZ0JBQU11QyxNQUF4RSxDQUFYLENBRUEsTUFBTyxtQkFBUWUsT0FBUixDQUFnQnRELGdCQUFNc1MsZUFBTixDQUFzQi9JLEtBQXRCLENBQTRCLEtBQUtwRCxHQUFqQyxDQUFzQyxLQUFLNUQsTUFBM0MsQ0FBaEIsQ0FBUCxDQUNBLEMsOEJBT0VVLEssQ0FBT3lCLFEsQ0FBVSxDQUNuQixHQUFHb0IsT0FBTzZCLE1BQVAsQ0FBY2lILFFBQWQsQ0FBdUIzTCxLQUF2QixDQUFILENBQWtDLENBQ2pDLEdBQUcsQ0FBQyxLQUFLaUUsVUFBTCxDQUFnQmpFLEtBQWhCLENBQUosQ0FBNEIsQ0FDM0IsS0FBS2lFLFVBQUwsQ0FBZ0JqRSxLQUFoQixFQUF5QixFQUF6QixDQUNBLENBQ0QsS0FBS2lFLFVBQUwsQ0FBZ0JqRSxLQUFoQixFQUF1QlMsSUFBdkIsQ0FBNEJnQixRQUE1QixFQUNBLENBQ0QsQyxnQ0FPR3pCLEssQ0FBT3lCLFEsQ0FBVSxDQUNwQixHQUFHLENBQUN6QixLQUFKLENBQVcsQ0FDVixLQUFLaUUsVUFBTCxDQUFrQixFQUFsQixDQUNBLENBRkQsSUFFTyxJQUFHcEIsT0FBTzZCLE1BQVAsQ0FBY2lILFFBQWQsQ0FBdUIzTCxLQUF2QixDQUFILENBQWtDLENBQ3hDLEdBQUcsQ0FBQ3lCLFFBQUosQ0FBYyxDQUNiLEtBQUt3QyxVQUFMLENBQWdCakUsS0FBaEIsRUFBeUIsRUFBekIsQ0FDQSxDQUZELElBRU8sQ0FDTixLQUFLaUUsVUFBTCxDQUFnQmpFLEtBQWhCLEVBQXlCLEtBQUtpRSxVQUFMLENBQWdCakUsS0FBaEIsRUFBdUJ5RSxNQUF2QixDQUE4QixtQkFBTTRILE1BQU81SyxRQUFiLEVBQTlCLENBQXpCLENBQ0EsQ0FDRCxDQUNELEMsc0NBTU01RCxNLENBQVEsaUJBQ2QsbUJBQVlBLE1BQVosRUFBb0JHLE9BQXBCLENBQTRCLGFBQU8sQ0FBQyxPQUFLc0csR0FBTCxFQUFZekcsT0FBT3lHLEdBQVAsQ0FBWixDQUF5QixDQUE3RCxFQUNBLEMsZ0NBN0hVLENBQ1YsTUFBTyxNQUFLNEwsY0FBTCxDQUFzQixLQUFLQSxjQUFMLENBQW9CUSxJQUExQyxDQUFpRCxJQUF4RCxDQUNBLEMsc0NBeEVtQmxGLE07Ozs7Ozs7QUNUckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEU7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0IsRUFBRTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBOzs7Ozs7O0FDREE7QUFDQSxxRUFBc0UsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQ3ZHLENBQUM7Ozs7Ozs7QUNGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLGFBQWE7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0NBQW9DO0FBQzdFLDZDQUE2QyxvQ0FBb0M7QUFDakYsS0FBSyw0QkFBNEIsb0NBQW9DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQSxrQ0FBa0MsMkJBQTJCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztBQ3BFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsRUFBRTtBQUM1QyxDQUFDLFlBQVk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMscUJBQXFCO0FBQzNELGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EscURBQXFELE9BQU8sRUFBRTtBQUM5RDs7Ozs7OztBQ1RBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNILFlBQVk7QUFDWjtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHlCQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNB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Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQSxxRUFBcUU7QUFDckUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUNYRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25zQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQyxzQkFBc0I7Ozs7Ozs7OztBQ1p2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFlBQVk7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EseURBQXlELG9CQUFvQjtBQUM3RSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSx5Q0FBeUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFnQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Q0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLEVBQUU7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWFjaC1kZWJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIndlYmNvbS93ZWJjb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wid2ViY29tL3dlYmNvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjaFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIndlYmNvbS93ZWJjb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWNoXCJdID0gZmFjdG9yeShyb290W1wiV2ViY29tXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MzY1ZTg5MTNiZjMzYjE1ZjVmZSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5cbi8qKlxuICogTGlzdCBvZiBwb3NzaWJsZSBsb2cgbGV2ZWxzXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgbGV2ZWxzID0gWydERUJVRycsICdJTkZPJywgJ1dBUk4nLCAnRVJST1InXTtcbi8qKlxuICogSXMgbG9nIGVuYWJsZWQgZm9yIGEgc3BlY2lmaWMgbGV2ZWxcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIFRoZSBsZXZlbCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNFbmFibGVkID0gbGV2ZWwgPT4ge1xuXHRyZXR1cm4gbGV2ZWxzLmluZGV4T2YobGV2ZWwudG9VcHBlckNhc2UoKSkgPj0gbGV2ZWxzLmluZGV4T2YoY2FjaGUubG9nTGV2ZWwudG9VcHBlckNhc2UoKSk7XG59O1xuLyoqXG4gKiBHbG9iYWwgQ29uc29sZS4gKHRvIGF2b2lkIGRyb3BfY29uc29sZS4uLilcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHR5cGUge0NvbnNvbGV9XG4gKi9cbmNvbnN0IGdDb25zb2xlID0gZ2xvYmFsWydjb25zb2xlJ107XG4vKipcbiAqIFNob3J0aGFuZCBmb3IgY29uc29sZSBjYWxsXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgQSBtZXRob2Qgb2YgdGhlIGNvbnNvbGUgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgVGhlIGxvZyBsZXZlbFxuICogQHBhcmFtIHsqfSBtZXNzYWdlcyB0aGUgbG9nIGNvbnRlbnRcbiAqL1xuY29uc3QgbG9nZ2VyID0gKG1ldGhvZCwgbGV2ZWwsIC4uLm1lc3NhZ2VzKSA9PiB7XG5cdGlzRW5hYmxlZChsZXZlbCkgPyBnQ29uc29sZVttZXRob2QudG9Mb3dlckNhc2UoKV0uYmluZChnQ29uc29sZSkoLi4ubWVzc2FnZXMpIDogKCkgPT4ge307XG59O1xuLyoqXG4gKiBVc2UgYSBncm91cCB0byBsb2dcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIFRoZSBsb2cgbGV2ZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBncm91cCB0aXRsZVxuICogQHBhcmFtIHsqfSBpdGVtcyB0aGUgbG9nIGNvbnRlbnRcbiAqL1xuY29uc3QgZ3JvdXAgPSAobGV2ZWwsIG1lc3NhZ2UsIC4uLml0ZW1zKSA9PiB7XG5cdGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0bG9nZ2VyLmJpbmQodW5kZWZpbmVkLCBnQ29uc29sZS5ncm91cCA/ICdncm91cCcgOiBsZXZlbCwgbGV2ZWwpKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJyA/IG1lc3NhZ2UgOiAnJyk7XG5cdFx0bGV0IHZhbHVlcyA9ICh0eXBlb2YgbWVzc2FnZSAhPT0gJ3N0cmluZycgPyBbbWVzc2FnZV0gOiBbXSkuY29uY2F0KGl0ZW1zKTtcblx0XHRpZiAoaXRlbXMubGVuZ3RoID09PSAxICYmIGl0ZW1zWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgdHlwZW9mIGl0ZW1zWzBdLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YWx1ZXMgPSBpdGVtc1swXTtcblx0XHR9XG5cdFx0dmFsdWVzLmZvckVhY2goaXRlbSA9PiBsb2dnZXIuYmluZCh1bmRlZmluZWQsIGxldmVsLCBsZXZlbCkoaXRlbSkpO1xuXHRcdGdDb25zb2xlLmdyb3VwRW5kICYmIGdDb25zb2xlLmdyb3VwRW5kKCk7XG5cdH0gZWxzZSB7XG5cdFx0bG9nZ2VyLmJpbmQodW5kZWZpbmVkLCBsZXZlbCwgbGV2ZWwsIG1lc3NhZ2UpO1xuXHR9XG59O1xuXG4vKipcbiAqIExvZyBkZWJ1ZyBtZXNzYWdlcyBpZiBsb2cgbGV2ZWwgaXMgc2V0IHRvIERFQlVHLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvbG9nXG4gKi9cbmV4cG9ydCBjb25zdCBkID0gZ3JvdXAuYmluZCh1bmRlZmluZWQsIGxldmVsc1swXSk7XG4vKipcbiAqIExvZyBpbmZvcm1hdGlvbiBtZXNzYWdlcyBpZiBsb2cgbGV2ZWwgaXMgc2V0IHRvIERFQlVHIG9yIElORk8uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9BUEkvQ29uc29sZS9pbmZvXG4gKi9cbmV4cG9ydCBjb25zdCBpID0gZ3JvdXAuYmluZCh1bmRlZmluZWQsIGxldmVsc1sxXSk7XG4vKipcbiAqIExvZyB3YXJuaW5nIG1lc3NhZ2VzIGlmIGxvZyBsZXZlbCBpcyBzZXQgdG8gREVCVUcsIElORk8gb3IgV0FSTi5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL3dhcm5cbiAqL1xuZXhwb3J0IGNvbnN0IHcgPSBncm91cC5iaW5kKHVuZGVmaW5lZCwgbGV2ZWxzWzJdKTtcbi8qKlxuICogTG9nIGVycm9yIG1lc3NhZ2VzLiBFcnJvcnMgYXJlIGFsd2F5cyBsb2dnZWQuXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9BUEkvQ29uc29sZS9lcnJvclxuICovXG5leHBvcnQgY29uc3QgZSA9IGdDb25zb2xlLmVycm9yLmJpbmQoZ0NvbnNvbGUpO1xuLyoqXG4gKiBQcm9taXNlIHJlamVjdGlvbiBsb2dnZXIgdG8gdXNlIHdpdGggY2F0Y2hcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgciA9IG1lc3NhZ2UgPT4gcmVhc29uID0+IHtcblx0ZChtZXNzYWdlLCByZWFzb24pO1xuXHRyZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uIHx8IG1lc3NhZ2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvTG9nLmpzIiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xuaW1wb3J0IFN0cmVhbU1hbmFnZXIgZnJvbSAnLi4vc3RyZWFtL1N0cmVhbU1hbmFnZXInO1xuaW1wb3J0IFBlZXJDb25uZWN0aW9uTWFuYWdlciBmcm9tICcuLi93ZWJydGMvUGVlckNvbm5lY3Rpb25NYW5hZ2VyJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbi8qKlxuICogc2luZ2xldG9uXG4gKiBAdHlwZSB7Q2FjaGVNYW5hZ2VyfVxuICogQHByaXZhdGVcbiAqL1xubGV0IF9jYWNoZSA9IG51bGw7XG5cbi8qKlxuICogU2luZ2xldG9uIHRvIGhhbmRsZSBnbG9iYWwgcmVmZXJlbmNlc1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgQ2FjaGVNYW5hZ2VyIHtcblx0LyoqXG5cdCAqIENvbnN0cnVjdCBzaW5nbGV0b25cblx0ICogQHJldHVybiB7Q2FjaGVNYW5hZ2VyfVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYoIV9jYWNoZSkge1xuXHRcdFx0X2NhY2hlID0gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIF9jYWNoZTtcblx0fVxuXHQvKipcblx0ICogVGhlIGJhc2UgcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSB7V2ViY29tfSB1cmwgdGhlIHJlZmVyZW5jZSBvciBpdHMgdXJsXG5cdCAqL1xuXHRzZXQgYmFzZSh1cmwpIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fYmFzZSA9IHVybCBpbnN0YW5jZW9mIFdlYmNvbSA/IHVybCA6IG5ldyBXZWJjb20odXJsKTtcblx0fVxuXHQvKipcblx0ICogVGhlIGJhc2UgcmVmZXJlbmNlXG5cdCAqIEB0eXBlIHtXZWJjb219XG5cdCAqL1xuXHRnZXQgYmFzZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIHVzZXJcblx0ICogQHBhcmFtIHtDb25maWd9IGNvbmZpZyB0aGUgY29ubmVjdGVkIHVzZXJcblx0ICovXG5cdHNldCBjb25maWcoY29uZmlnKSB7XG5cdFx0aWYoIXRoaXMuX2NvbmZpZykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX2NvbmZpZyA9IG5ldyBDb25maWcoY29uZmlnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY29uZmlnLmFzc2lnbihjb25maWcpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEB0eXBlIHtDb25maWd9XG5cdCAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdGlmKCF0aGlzLl9jb25maWcpIHtcblx0XHRcdHRoaXMuX2NvbmZpZyA9IG5ldyBDb25maWcoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEBwYXJhbSB7VXNlcn0gdXNlciB0aGUgY29ubmVjdGVkIHVzZXJcblx0ICovXG5cdHNldCB1c2VyKHVzZXIpIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fdXNlciA9IHVzZXI7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAdHlwZSB7VXNlcn1cblx0ICovXG5cdGdldCB1c2VyKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBkZXZpY2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRldmljZSB0aGUgY3VycmVudCBkZXZpY2Vcblx0ICovXG5cdHNldCBkZXZpY2UoZGV2aWNlKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RldmljZSA9IGRldmljZTtcblx0fVxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgZGV2aWNlXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgZGV2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kZXZpY2U7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0c2V0IGxvZ0xldmVsKGxldmVsKSB7XG5cdFx0aWYoL15ERUJVR3xJTkZPfFdBUk58RVJST1IkL2kudGVzdChsZXZlbCkpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9sb2dMZXZlbCA9IGxldmVsO1xuXHRcdH0gZWxzZSBpZihsZXZlbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUiknKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldCBsb2dMZXZlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbG9nTGV2ZWwgfHwgJ0VSUk9SJztcblx0fVxuXG5cdC8qKlxuXHQgKiBTdHJlYW1zIG1hbmFnZXJcblx0ICogQHJldHVybnMge1N0cmVhbU1hbmFnZXJ9XG5cdCAqL1xuXHRnZXQgc3RyZWFtcygpIHtcblx0XHRpZighdGhpcy5fc3RyZWFtcykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX3N0cmVhbXMgPSBuZXcgU3RyZWFtTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fc3RyZWFtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQZWVyQ29ubmVjdGlvbnMgbWFuYWdlclxuXHQgKiBAcmV0dXJucyB7UGVlckNvbm5lY3Rpb25NYW5hZ2VyfVxuXHQgKi9cblx0Z2V0IHBlZXJDb25uZWN0aW9ucygpIHtcblx0XHRpZighdGhpcy5fcGVlckNvbm5lY3Rpb25zKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5fcGVlckNvbm5lY3Rpb25zID0gbmV3IFBlZXJDb25uZWN0aW9uTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb25zO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICogQGlnbm9yZVxuICogQHR5cGUge0NhY2hlTWFuYWdlcn1cbiAqL1xuY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGVNYW5hZ2VyKCk7XG5cbi8qKlxuICogU2luZ2xldG9uIGZvciBzaGFyZWQgcmVmZXJlbmNlc1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL2NhY2hlLmpzIiwiaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG4vKipcbiAqIEdldCB0aGUgZXZlbnQgc3RyaW5nIGZvciBXZWJjb20gZnJvbSBSZWFjaCBldmVudHNcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgQSBSZWFjaCBldmVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRUeXBlID0gKGV2ZW50KSA9PiB7XG5cdGxldCBldnQ7XG5cdGlmKCgvX0FEREVEJC9pKS50ZXN0KGV2ZW50KSB8fCAvX1BVQkxJU0hFRCQvLnRlc3QoZXZlbnQpKSB7XG5cdFx0ZXZ0ID0gJ2FkZGVkJztcblx0fSBlbHNlIGlmKC9fQ0hBTkdFRCQvLnRlc3QoZXZlbnQpIHx8IC9fUkVGUkVTSEVEJC8udGVzdChldmVudCkpIHtcblx0XHRldnQgPSAnY2hhbmdlZCc7XG5cdH0gZWxzZSBpZigvX1JFTU9WRUQkLy50ZXN0KGV2ZW50KSB8fCAvX1VOUFVCTElTSEVEJC8udGVzdChldmVudCkpIHtcblx0XHRldnQgPSAncmVtb3ZlZCc7XG5cdH1cblx0cmV0dXJuIGV2dCA/IGBjaGlsZF8ke2V2dH1gIDogZXZlbnQ7XG59O1xuXG4vKipcbiAqIFdyaXRlIG1ldGhvZFxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBXcml0ZSBtZXRob2QgKHNldCx1cGRhdGUpXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBzZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHNldFxuICogQGlnbm9yZVxuICovXG5jb25zdCBfd3JpdGUgPSAobWV0aG9kLCBwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aClbbWV0aG9kXShkYXRhLCBlcnJvciA9PiBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKCkpO1xufSk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNzZXR9IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gc2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBzZXRcbiAqIEByZXR1cm4ge1Byb21pc2U8KiwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3Qgc2V0ID0gX3dyaXRlLmJpbmQodW5kZWZpbmVkLCAnc2V0Jyk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNwdXNofSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHB1c2hcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHB1c2hcbiAqIEByZXR1cm4ge1Byb21pc2U8V2ViY29tLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBwdXNoID0gKHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y29uc3QgcHVzaFJlZiA9IGNhY2hlLmJhc2UuY2hpbGQocGF0aCkucHVzaChkYXRhLCBlcnJvciA9PiBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKHB1c2hSZWYpKTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jdXBkYXRlfSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHVwZGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gdXBkYXRlXG4gKiBAcmV0dXJuIHtQcm9taXNlPCosIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IF93cml0ZS5iaW5kKHVuZGVmaW5lZCwgJ3VwZGF0ZScpO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jcmVtb3ZlfSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHJlbW92ZVxuICogQHJldHVybiB7UHJvbWlzZTwqLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmUgPSAocGF0aCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLnJlbW92ZShlcnJvciA9PiBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKCkpO1xufSk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNvbmNlfSBzaG9ydGN1dCBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50XG4gKiBAcmV0dXJucyB7UHJvbWlzZTxXZWJjb20vYXBpLkRhdGFTbmFwc2hvdCwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3Qgb25jZSA9IChwYXRoLCBldmVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLm9uY2UoZXZlbnRUeXBlKGV2ZW50KSwgcmVzb2x2ZSwgcmVqZWN0KTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb25jZX0oJ3ZhbHVlJykgYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBnZXRcbiAqIEByZXR1cm4ge1Byb21pc2U8V2ViY29tL2FwaS5EYXRhU25hcHNob3QsIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldCA9IHBhdGggPT4gb25jZShwYXRoLCAndmFsdWUnKTtcblxuLyoqXG4gKiBMaXN0IHZhbHVlcyBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGdldFxuICogQHBhcmFtIHtmdW5jdGlvbn0gVHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0IHRvIGxpc3RcbiAqIEBwYXJhbSBwYXJhbXMgQWRkaXRpb25hbCBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdFtdLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBsaXN0ID0gKHBhdGgsIFR5cGUsIC4uLnBhcmFtcykgPT4ge1xuXHRyZXR1cm4gZ2V0KHBhdGgpXG5cdC50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRpZihzbmFwRGF0YSkge1xuXHRcdFx0Y29uc3QgdmFsdWVzID0gW107XG5cdFx0XHRzbmFwRGF0YS5mb3JFYWNoKHNuYXBDaGlsZCA9PiB7XG5cdFx0XHRcdHZhbHVlcy5wdXNoKG5ldyBUeXBlKHNuYXBDaGlsZCwgLi4ucGFyYW1zKSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNvbn0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fnF1ZXJ5Q2FsbGJhY2t8ZnVuY3Rpb259IHF1ZXJ5Q2FsbGJhY2sgVGhlIGNhbGxiYWNrXG4gKiBAcGFyYW0ge1dlYmNvbS9hcGkuUXVlcnl+Y2FuY2VsQ2FsbGJhY2t8ZnVuY3Rpb259IFtjYW5jZWxDYWxsYmFja10gVGhlIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBjb25zdCBvbiA9IChwYXRoLCBldmVudCwgcXVlcnlDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbihldmVudFR5cGUoZXZlbnQpLCBxdWVyeUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb2ZmfSBzaG9ydGN1dFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBjYWxsYmFja1xuICovXG5leHBvcnQgY29uc3Qgb2ZmID0gKHBhdGgsIGV2ZW50LCBjYWxsYmFjaykgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLm9mZihldmVudFR5cGUoZXZlbnQpLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb25EaXNjb25uZWN0fSBzaG9ydGN1dFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoXG4gKiBAcmV0dXJuIHtXZWJjb20vYXBpLk9uRGlzY29ubmVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IG9uRGlzY29ubmVjdCA9IHBhdGggPT4gY2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbkRpc2Nvbm5lY3QoKTtcblxuLyoqXG4gKiBUaW1lc3RhbXAgdmFsdWVcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKi9cbi8vIGV4cG9ydCBjb25zdCB0cyA9ICgpID0+IFdlYmNvbS5TZXJ2ZXJWYWx1ZS5USU1FU1RBTVA7XG5leHBvcnQgY29uc3QgdHMgPSAoKSA9PiBEYXRlLm5vdygpO1xuLy8gSEFDSyAjRGF0YVN5bmM6IFJvbGxiYWNrIHdoZW4gVElNRVNUQU1QIHdvcmtzIGFnYWluIChzZXJ2ZXItc2lkZSBidWcgd2l0aCBzZWN1cml0eSBydWxlcylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvRGF0YVN5bmMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYgaGFzKGV4cG9ydHMsIGtleSkpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGxvZ0Rpc2FibGVkXyA9IHRydWU7XG52YXIgZGVwcmVjYXRpb25XYXJuaW5nc18gPSB0cnVlO1xuXG4vLyBVdGlsaXR5IG1ldGhvZHMuXG52YXIgdXRpbHMgPSB7XG4gIGRpc2FibGVMb2c6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJndW1lbnQgdHlwZTogJyArIHR5cGVvZiBib29sICtcbiAgICAgICAgICAnLiBQbGVhc2UgdXNlIGEgYm9vbGVhbi4nKTtcbiAgICB9XG4gICAgbG9nRGlzYWJsZWRfID0gYm9vbDtcbiAgICByZXR1cm4gKGJvb2wpID8gJ2FkYXB0ZXIuanMgbG9nZ2luZyBkaXNhYmxlZCcgOlxuICAgICAgICAnYWRhcHRlci5qcyBsb2dnaW5nIGVuYWJsZWQnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIG9yIGVuYWJsZSBkZXByZWNhdGlvbiB3YXJuaW5nc1xuICAgKiBAcGFyYW0geyFib29sZWFufSBib29sIHNldCB0byB0cnVlIHRvIGRpc2FibGUgd2FybmluZ3MuXG4gICAqL1xuICBkaXNhYmxlV2FybmluZ3M6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJndW1lbnQgdHlwZTogJyArIHR5cGVvZiBib29sICtcbiAgICAgICAgICAnLiBQbGVhc2UgdXNlIGEgYm9vbGVhbi4nKTtcbiAgICB9XG4gICAgZGVwcmVjYXRpb25XYXJuaW5nc18gPSAhYm9vbDtcbiAgICByZXR1cm4gJ2FkYXB0ZXIuanMgZGVwcmVjYXRpb24gd2FybmluZ3MgJyArIChib29sID8gJ2Rpc2FibGVkJyA6ICdlbmFibGVkJyk7XG4gIH0sXG5cbiAgbG9nOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChsb2dEaXNhYmxlZF8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3dzIGEgZGVwcmVjYXRpb24gd2FybmluZyBzdWdnZXN0aW5nIHRoZSBtb2Rlcm4gYW5kIHNwZWMtY29tcGF0aWJsZSBBUEkuXG4gICAqL1xuICBkZXByZWNhdGVkOiBmdW5jdGlvbihvbGRNZXRob2QsIG5ld01ldGhvZCkge1xuICAgIGlmICghZGVwcmVjYXRpb25XYXJuaW5nc18pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKG9sZE1ldGhvZCArICcgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAnICsgbmV3TWV0aG9kICtcbiAgICAgICAgJyBpbnN0ZWFkLicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGJyb3dzZXIgdmVyc2lvbiBvdXQgb2YgdGhlIHByb3ZpZGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVhc3RyaW5nIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gZXhwciBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCBhcyBtYXRjaCBjcml0ZXJpYS5cbiAgICogQHBhcmFtIHshbnVtYmVyfSBwb3MgcG9zaXRpb24gaW4gdGhlIHZlcnNpb24gc3RyaW5nIHRvIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHshbnVtYmVyfSBicm93c2VyIHZlcnNpb24uXG4gICAqL1xuICBleHRyYWN0VmVyc2lvbjogZnVuY3Rpb24odWFzdHJpbmcsIGV4cHIsIHBvcykge1xuICAgIHZhciBtYXRjaCA9IHVhc3RyaW5nLm1hdGNoKGV4cHIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPj0gcG9zICYmIHBhcnNlSW50KG1hdGNoW3Bvc10sIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogQnJvd3NlciBkZXRlY3Rvci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSByZXN1bHQgY29udGFpbmluZyBicm93c2VyIGFuZCB2ZXJzaW9uXG4gICAqICAgICBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgZGV0ZWN0QnJvd3NlcjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gICAgLy8gUmV0dXJuZWQgcmVzdWx0IG9iamVjdC5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LmJyb3dzZXIgPSBudWxsO1xuICAgIHJlc3VsdC52ZXJzaW9uID0gbnVsbDtcblxuICAgIC8vIEZhaWwgZWFybHkgaWYgaXQncyBub3QgYSBicm93c2VyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBicm93c2VyLic7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3guXG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ2ZpcmVmb3gnO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0ZpcmVmb3hcXC8oXFxkKylcXC4vLCAxKTtcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHtcbiAgICAgIC8vIENocm9tZSwgQ2hyb21pdW0sIFdlYnZpZXcsIE9wZXJhLCBhbGwgdXNlIHRoZSBjaHJvbWUgc2hpbSBmb3Igbm93XG4gICAgICBpZiAod2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ2Nocm9tZSc7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9DaHJvbShlfGl1bSlcXC8oXFxkKylcXC4vLCAyKTtcbiAgICAgIH0gZWxzZSB7IC8vIFNhZmFyaSAoaW4gYW4gdW5wdWJsaXNoZWQgdmVyc2lvbikgb3IgdW5rbm93biB3ZWJraXQtYmFzZWQuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFxcZCspLihcXGQrKS8pKSB7XG4gICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnc2FmYXJpJztcbiAgICAgICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgICAgICB9IGVsc2UgeyAvLyB1bmtub3duIHdlYmtpdC1iYXNlZCBicm93c2VyLlxuICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ1Vuc3VwcG9ydGVkIHdlYmtpdC1iYXNlZCBicm93c2VyICcgK1xuICAgICAgICAgICAgICAnd2l0aCBHVU0gc3VwcG9ydCBidXQgbm8gV2ViUlRDIHN1cHBvcnQuJztcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8pKSB7IC8vIEVkZ2UuXG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdlZGdlJztcbiAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9FZGdlXFwvKFxcZCspLihcXGQrKSQvLCAyKTtcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vKSkge1xuICAgICAgICAvLyBTYWZhcmksIHdpdGggd2Via2l0R2V0VXNlck1lZGlhIHJlbW92ZWQuXG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdzYWZhcmknO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLywgMSk7XG4gICAgfSBlbHNlIHsgLy8gRGVmYXVsdCBmYWxsdGhyb3VnaDogbm90IHN1cHBvcnRlZC5cbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ05vdCBhIHN1cHBvcnRlZCBicm93c2VyLic7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLy8gc2hpbUNyZWF0ZU9iamVjdFVSTCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgc2hpbVNvdXJjZU9iamVjdCB0byBhdm9pZCBsb29wLlxuXG4gIHNoaW1DcmVhdGVPYmplY3RVUkw6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBVUkwgPSB3aW5kb3cgJiYgd2luZG93LlVSTDtcblxuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICAgJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgLy8gT25seSBzaGltIENyZWF0ZU9iamVjdFVSTCB1c2luZyBzcmNPYmplY3QgaWYgc3JjT2JqZWN0IGV4aXN0cy5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIG5hdGl2ZUNyZWF0ZU9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwuYmluZChVUkwpO1xuICAgIHZhciBuYXRpdmVSZXZva2VPYmplY3RVUkwgPSBVUkwucmV2b2tlT2JqZWN0VVJMLmJpbmQoVVJMKTtcbiAgICB2YXIgc3RyZWFtcyA9IG5ldyBNYXAoKSwgbmV3SWQgPSAwO1xuXG4gICAgVVJMLmNyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgaWYgKCdnZXRUcmFja3MnIGluIHN0cmVhbSkge1xuICAgICAgICB2YXIgdXJsID0gJ3BvbHlibG9iOicgKyAoKytuZXdJZCk7XG4gICAgICAgIHN0cmVhbXMuc2V0KHVybCwgc3RyZWFtKTtcbiAgICAgICAgdXRpbHMuZGVwcmVjYXRlZCgnVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pJyxcbiAgICAgICAgICAgICdlbGVtLnNyY09iamVjdCA9IHN0cmVhbScpO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgIH07XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgbmF0aXZlUmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICBzdHJlYW1zLmRlbGV0ZSh1cmwpO1xuICAgIH07XG5cbiAgICB2YXIgZHNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYycpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsICdzcmMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZHNjLmdldC5hcHBseSh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB0aGlzLnNyY09iamVjdCA9IHN0cmVhbXMuZ2V0KHVybCkgfHwgbnVsbDtcbiAgICAgICAgcmV0dXJuIGRzYy5zZXQuYXBwbHkodGhpcywgW3VybF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIG5hdGl2ZVNldEF0dHJpYnV0ZSA9IHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGU7XG4gICAgd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAoJycgKyBhcmd1bWVudHNbMF0pLnRvTG93ZXJDYXNlKCkgPT09ICdzcmMnKSB7XG4gICAgICAgIHRoaXMuc3JjT2JqZWN0ID0gc3RyZWFtcy5nZXQoYXJndW1lbnRzWzFdKSB8fCBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZVNldEF0dHJpYnV0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cbi8vIEV4cG9ydC5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2c6IHV0aWxzLmxvZyxcbiAgZGVwcmVjYXRlZDogdXRpbHMuZGVwcmVjYXRlZCxcbiAgZGlzYWJsZUxvZzogdXRpbHMuZGlzYWJsZUxvZyxcbiAgZGlzYWJsZVdhcm5pbmdzOiB1dGlscy5kaXNhYmxlV2FybmluZ3MsXG4gIGV4dHJhY3RWZXJzaW9uOiB1dGlscy5leHRyYWN0VmVyc2lvbixcbiAgc2hpbUNyZWF0ZU9iamVjdFVSTDogdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCxcbiAgZGV0ZWN0QnJvd3NlcjogdXRpbHMuZGV0ZWN0QnJvd3Nlci5iaW5kKHV0aWxzKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogT1BFTkVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE9QRU5FRCA9ICdPUEVORUQnO1xuLyoqXG4gKiBDTE9TRURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0VEID0gJ0NMT1NFRCc7XG4vKipcbiAqIENMT1NJTkdcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0lORyA9ICdDTE9TSU5HJztcbi8qKlxuICogQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENPTk5FQ1RFRCA9ICdDT05ORUNURUQnO1xuLyoqXG4gKiBOT1RfQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE5PVF9DT05ORUNURUQgPSAnTk9UX0NPTk5FQ1RFRCc7XG4vKipcbiAqIFdBU19DT05ORUNURURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgV0FTX0NPTk5FQ1RFRCA9ICdXQVNfQ09OTkVDVEVEJztcbi8qKlxuICogT1dORVJcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT1dORVIgPSAnT1dORVInO1xuLyoqXG4gKiBNT0RFUkFUT1JcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgTU9ERVJBVE9SID0gJ01PREVSQVRPUic7XG4vKipcbiAqIFBBUlRJQ0lQQU5UXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0lQQU5UID0gJ1BBUlRJQ0lQQU5UJztcbi8qKlxuICogTk9ORVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBOT05FID0gJ05PTkUnO1xuLyoqXG4gKiBPbmdvaW5nIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT05HT0lORyA9ICdPTkdPSU5HJztcbi8qKlxuICogQWNjZXB0ZWQgaW52aXRhdGlvblxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG4vKipcbiAqIFJlamVjdGVkIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuLyoqXG4gKiBDYW5jZWxlZCBpbnZpdGF0aW9uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENBTkNFTEVEID0gJ0NBTkNFTEVEJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtOT05FLCBPUEVORUQsIENMT1NFRCwgQ09OTkVDVEVELCBOT1RfQ09OTkVDVEVELCBXQVNfQ09OTkVDVEVELCBPV05FUn0gZnJvbSAnLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnO1xuaW1wb3J0IExvY2FsIGZyb20gJy4vc3RyZWFtL0xvY2FsJztcbmltcG9ydCBJbnZpdGUgZnJvbSAnLi9JbnZpdGUnO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4uL2RlZmluaXRpb25zL0V2ZW50cyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQge1JFSkVDVEVELCBDQU5DRUxFRH0gZnJvbSAnLi91dGlsL2NvbnN0YW50cyc7XG5cbmNvbnN0IF9qb2luUm9vbSA9IChyb29tLCByb2xlKSA9PiB7XG5cdGNvbnN0IHVpZCA9IGNhY2hlLnVzZXIudWlkLnNwbGl0KCcvJykuam9pbignOicpO1xuXG5cdGlmIChyb29tLnN0YXR1cyAhPT0gQ0xPU0VEKSB7XG5cdFx0Y29uc3QgcGFydGljaXBhbnQgPSB7XG5cdFx0XHRzdGF0dXM6IENPTk5FQ1RFRCxcblx0XHRcdHVzZXJBZ2VudDogY2FjaGUudXNlckFnZW50LFxuXHRcdFx0X2pvaW5lZDogRGF0YVN5bmMudHMoKVxuXHRcdH07XG5cdFx0aWYocm9sZSkge1xuXHRcdFx0cGFydGljaXBhbnQucm9sZSA9IHJvbGU7XG5cdFx0fVxuXHRcdExvZy53KCdSb29tI2pvaW4nLCBbcGFydGljaXBhbnQsIGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50cy8ke3VpZH1gXSk7XG5cdFx0cmV0dXJuIERhdGFTeW5jXG5cdFx0Ly8gLnVwZGF0ZShgXy9yb29tcy8ke3Jvb20udWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH1gLCBwYXJ0aWNpcGFudClcblx0XHQudXBkYXRlKGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50cy8ke3VpZH1gLCBwYXJ0aWNpcGFudClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0LyogRGF0YVN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7c2hvcnRVc2VySWR9L3N0YXR1c2ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0KFdBU19DT05ORUNURUQpOyovXG5cdFx0XHRcdHJldHVybiByb29tO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignY2FuXFwndCBqb2luIGEgY2xvc2Ugcm9vbScpKTtcbn07XG5cbi8qKlxuICogUm9vbSBpbmZvcm1hdGlvblxuICogQGFjY2VzcyBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSByb29tXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8T2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEsIHJvb21VaWQpIHtcblx0XHRsZXQgdmFsdWVzID0gc25hcERhdGE7XG5cdFx0aWYoc25hcERhdGEgJiYgc25hcERhdGEudmFsICYmIHR5cGVvZiBzbmFwRGF0YS52YWwgPT09ICdmdW5jdGlvbicpe1xuXHRcdFx0Ly8gdmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCksIHt1aWQ6IHNuYXBEYXRhLm5hbWUoKX0pO1xuXHRcdFx0dmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCksIHt1aWQ6IHJvb21VaWR9KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gbmFtZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5uYW1lID0gdmFsdWVzLm5hbWU7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGxvY2FsIHN0cmVhbSBvZiB0aGUgcm9vbVxuXHRcdCAqIEB0eXBlIHtMb2NhbH1cblx0XHQgKi9cblx0XHR0aGlzLmxvY2FsU3RyZWFtID0ge307XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gb3duZXIgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLm93bmVyID0gdmFsdWVzLm93bmVyO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIHN0YXR1czpcblx0XHQgKiAtIE9QRU5FRFxuXHRcdCAqIC0gQ0xPU0VEXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgcm9vbSBpcyBwdWJsaWMgc28gYWxsIHVzZXJzIGNhbiBqb2luXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5fcHVibGljID0gISF2YWx1ZXMuX3B1YmxpYztcblxuXHRcdC8qKlxuXHRcdCAqIEFkZGl0aW9uYWwgcm9vbSBpbmZvcm1hdGlvbnNcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuZXh0cmEgPSB2YWx1ZXMuZXh0cmE7XG5cblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGRlY2xhcmVkIGNhbGxiYWNrc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHBhcnRpY2lwYW50cy5cblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFBhcnRpY2lwYW50W10sIEVycm9yPn1cblx0ICovXG5cdHBhcnRpY2lwYW50cygpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdChgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHNgLCBQYXJ0aWNpcGFudCwgdGhpcy51aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBtZXNzYWdlcy5cblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZVtdLCBFcnJvcj59XG5cdCAqL1xuXHRtZXNzYWdlcygpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdChgXy9yb29tcy8ke3RoaXMudWlkfS9tZXNzYWdlc2AsIE1lc3NhZ2UsIHRoaXMudWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2Ygc3RyZWFtc1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfc3RyZWFtcyhsb2NhbFN0cmVhbXMpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGxpc3QgYSBSb29tXFwncyBzdHJlYW1zLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIERhdGFTeW5jLmdldChgXy9yb29tcy8ke3RoaXMudWlkfS9zdHJlYW1zYClcblx0XHRcdC50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRcdFx0Y29uc3QgdmFsdWVzID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdExvZy5kKCdSb29tc35fc3RyZWFtcycsIHZhbHVlcyk7XG5cdFx0XHRcdGlmKHZhbHVlcykge1xuXHRcdFx0XHRcdHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChrZXkgPT4gT2JqZWN0LmFzc2lnbih7dWlkOiBrZXksIHJvb21JZDogdGhpcy51aWR9LCB2YWx1ZXNba2V5XSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihzdHJlYW1zID0+IHN0cmVhbXMuZmlsdGVyKHN0cmVhbSA9PiB7XG5cdFx0XHRcdHJldHVybiBsb2NhbFN0cmVhbXMgPT09IChzdHJlYW0uZGV2aWNlID09PSBjYWNoZS5kZXZpY2UgJiYgc3RyZWFtLmZyb20gPT09IGNhY2hlLnVzZXIudWlkKTtcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oc3RyZWFtcyA9PiBzdHJlYW1zLm1hcChjYWNoZS5zdHJlYW1zW2BnZXQke2xvY2FsU3RyZWFtcyA/ICdTaGFyZWQnIDogJ1JlbW90ZSd9YF0uYmluZChjYWNoZS5zdHJlYW1zKSkpXG5cdFx0XHQudGhlbihzdHJlYW1zID0+IHN0cmVhbXMuZmlsdGVyKHN0cmVhbSA9PiBzdHJlYW0gIT09IG51bGwpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgbG9jYWxseSBwdWJsaXNoZWQgc3RyZWFtcy4gVGhlIHN0cmVhbXMgcHVibGlzaGVkIHdpdGggYW5vdGhlciBkZXZpY2Ugd29uJ3QgYmUgdmlzaWJsZSBoZXJlXG5cdCAqIFRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIHVzZXIgaXMgZWl0aGVyIGEgcGFydGljaXBhbnQgb3IgdGhlIG93bmVyIG9mIHRoZSByb29tLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPExvY2FsW10sIEVycm9yPn1cblx0ICovXG5cdGxvY2FsU3RyZWFtcygpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RyZWFtcyh0cnVlKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfmxvY2FsU3RyZWFtcycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgcmVtb3RlbHkgcHVibGlzaGVkIHN0cmVhbXMuXG5cdCAqIFRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIHVzZXIgaXMgZWl0aGVyIGEgcGFydGljaXBhbnQgb3IgdGhlIG93bmVyIG9mIHRoZSByb29tLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFJlbW90ZVtdLCBFcnJvcj59XG5cdCAqL1xuXHRyZW1vdGVTdHJlYW1zKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdHJlYW1zKGZhbHNlKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfnJlbW90ZVN0cmVhbXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogSW52aXRlIHVzZXJzIHRvIHRoZSByb29tLiB0aGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSBjdXJyZW50IFVzZXIgaXMgdGhlIG93bmVyIG9yIGEgbW9kZXJhdG9yIG9mIHRoaXMgUm9vbS5cblx0ICogVGhpcyB3aWxsIGNyZWF0ZSB0aGUgaW52aXRhdGlvbiBhbmQgYWRkIHRoZSB1c2VyIHRvIHRoZSBwYXJ0aWNpcGFudHMgbGlzdC5cblx0ICogQHBhcmFtIHtVc2VyW119IHVzZXJzIHRoZSB1c2VycyB0byBpbnZpdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtyb2xlPSdOT05FJ10gdGhlIHJvbGUgb2YgdGhlIGludml0ZWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSBhIG1lc3NhZ2UgdG8gYWRkIHRvIHRoZSBpbnZpdGVcblx0ICogQHJldHVybiB7UHJvbWlzZTx7cm9vbTogUm9vbSwgaW52aXRlczogSW52aXRlW119LCBFcnJvcj59XG5cdCAqL1xuXHRpbnZpdGUodXNlcnMsIHJvbGUgPSBOT05FLCBtZXNzYWdlKSB7XG5cdFx0Y29uc3Rcblx0XHRcdF9wYXRoID0gdXNlciA9PiBgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHt1c2VyLnVpZH1gLFxuXHRcdFx0X2RhdGEgPSB7XG5cdFx0XHRcdHN0YXR1czogTk9UX0NPTk5FQ1RFRCxcblx0XHRcdFx0cm9sZTogcm9sZSB8fCBOT05FXG5cdFx0XHR9O1xuXHRcdC8vIEFkZCB1c2VycyBhcyBwYXJ0aWNpcGFudCBzbyB0aGV5IGNhbiBqb2luIHRoZSByb29tXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHVzZXJzLm1hcCh1c2VyID0+IERhdGFTeW5jLnNldChfcGF0aCh1c2VyKSwgX2RhdGEpKSlcblx0XHRcdC8vIFNlbmQgaW52aXRlc1xuXHRcdFx0LnRoZW4oKCkgPT4gUHJvbWlzZS5hbGwodXNlcnMubWFwKHVzZXIgPT4gSW52aXRlLnNlbmQodXNlciwgdGhpcywgbWVzc2FnZSkpKSlcblx0XHRcdC50aGVuKGludml0ZXMgPT4ge1xuXHRcdFx0XHRjb25zdCByZW1vdmVQYXJ0aWNpcGFudCA9IGludml0ZSA9PiBEYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHtpbnZpdGUucm9vbX0vcGFydGljaXBhbnRzLyR7aW52aXRlLnRvfWApO1xuXHRcdFx0XHRpbnZpdGVzLmZvckVhY2goaW52aXRlID0+IHtcblx0XHRcdFx0XHRpbnZpdGUub24oUkVKRUNURUQsIHJlbW92ZVBhcnRpY2lwYW50KTtcblx0XHRcdFx0XHRpbnZpdGUub24oQ0FOQ0VMRUQsIHJlbW92ZVBhcnRpY2lwYW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiB7cm9vbTogdGhpcywgaW52aXRlc307XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRMb2cuZSgnUm9vbX5pbnZpdGUnLCBlKTtcblx0XHRcdFx0dXNlcnMuZm9yRWFjaCh1c2VyID0+IERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHt1c2VyLnVpZH1gKSk7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lICh7QGxpbmsgRXZlbnRzL1Jvb219KTpcblx0ICogLSBQQVJUSUNJUEFOVF9BRERFRDogYSBwYXJ0aWNpcGFudCBpcyBhZGRlZCB0byB0aGUgcm9vbVxuXHQgKiAtIFBBUlRJQ0lQQU5UX0NIQU5HRUQ6IGEgcGFydGljaXBhbnQgY2hhbmdlcyBoaXMgc3RhdHVzIChqb2luKVxuXHQgKiAtIFBBUlRJQ0lQQU5UX1JFTU9WRUQ6IGEgcGFydGljaXBhbnQgbGVhdmUgdGhlIHJvb21cblx0ICogLSBNRVNTQUdFX0FEREVEOiBuZXcgaW5zdGFudCBtZXNzYWdlXG5cdCAqIC0gTUVTU0FHRV9DSEFOR0VEOiBhbiBleGlzdGluZyBtZXNzYWdlIGhhcyBiZWVuIG1vZGlmaWVkIChtb2RlcmF0aW9uKVxuXHQgKiAtIE1FU1NBR0VfUkVNT1ZFRDogYSBtZXNzYWdlIGhhcyBiZWVuIHJlbW92ZWQgKG1vZGVyYXRpb24pXG5cdCAqIC0gU1RSRUFNX1BVQkxJU0hFRDogYSBwYXJ0aWNpcGFudCBwdWJsaXNoZWQgYSBuZXcgU3RyZWFtXG5cdCAqIC0gU1RSRUFNX0NIQU5HRUQ6IGEgcGFydGljaXBhbnQgY2hhbmdlcyBoaXMgcHVibGlzaGVkIFN0cmVhbSAobW9kZXJhdGlvbiwgdHlwZSwgbXV0ZS4uLilcblx0ICogLSBTVFJFQU1fVU5QVUJMSVNIRUQ6IGEgcGFydGljaXBhbnQgc3RvcHMgdGhlIHB1YmxpY2F0aW9uIG9mIGhpcyBTdHJlYW1cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnQsIHRoZSBhcmd1bWVudHMgZGVwZW5kcyBvbiB0aGUgdHlwZSBvZiBldmVudDpcblx0ICogLSBQQVJUSUNJUEFOVF8qIDogY2FsbGJhY2soe0BsaW5rIFBhcnRpY2lwYW50fSBwIFssIEVycm9yIGVdKVxuXHQgKiAtIE1FU1NBR0VfKiA6IGNhbGxiYWNrKHtAbGluayBNZXNzYWdlfSBtIFssIEVycm9yIGVdKVxuXHQgKiAtIFNUUkVBTV8qIDogY2FsbGJhY2soe0BsaW5rIFJlbW90ZX0gcyBbLCBFcnJvciBlXSlcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfSBjYW5jZWxDYWxsYmFjayBUaGUgZXJyb3IgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGFrZXMgYW4gRXJyb3IgYXMgb25seSBhcmd1bWVudFxuXHQgKi9cblx0b24oZXZlbnQsIGNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaykge1xuXHRcdGNvbnN0XG5cdFx0XHRwYXRoID0gRXZlbnRzLnJvb20udG9QYXRoKGV2ZW50KSh0aGlzKSxcblx0XHRcdG9iaiA9IEV2ZW50cy5yb29tLnRvQ2xhc3MoZXZlbnQpO1xuXHRcdGlmKHBhdGggJiYgb2JqKSB7XG5cdFx0XHRjb25zdCB0eXBlZENhbGxiYWNrID0gc25hcERhdGEgPT4ge1xuXHRcdFx0XHRpZighL15TVFJFQU1fL2kudGVzdChldmVudCkgfHwgIXNuYXBEYXRhKSB7XG5cdFx0XHRcdC8vIGlmKC9eTUVTU0FHRV8vaS50ZXN0KGV2ZW50KSB8fCAhc25hcERhdGEpIHtcblx0XHRcdFx0XHRMb2cuaShgUm9vbX5vbigke2V2ZW50fSlgLCBzbmFwRGF0YSA/IG5ldyBvYmooc25hcERhdGEpIDogbnVsbCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soc25hcERhdGEgPyBuZXcgb2JqKHNuYXBEYXRhKSA6IG51bGwpO1xuXHRcdFx0XHR9IGVsc2UgaWYoY2FjaGUudXNlcikge1xuXHRcdFx0XHRcdGNvbnN0IHN0cmVhbURhdGEgPSBPYmplY3QuYXNzaWduKHt1aWQ6IHNuYXBEYXRhLm5hbWUoKSwgcm9vbUlkOiB0aGlzLnVpZH0sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHRcdFx0XHRpZihzdHJlYW1EYXRhLmZyb20gIT09IGNhY2hlLnVzZXIudWlkIHx8IHN0cmVhbURhdGEuZGV2aWNlICE9PSBjYWNoZS5kZXZpY2UpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlbW90ZVN0cmVhbSA9IGNhY2hlLnN0cmVhbXMuZ2V0UmVtb3RlKHN0cmVhbURhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmkoYFJvb21+b24oJHtldmVudH0pYCwgcmVtb3RlU3RyZWFtKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKHJlbW90ZVN0cmVhbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIHR5cGVkQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKTtcblx0XHRcdGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaCh0eXBlZENhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2VuZCBhbiBpbnN0YW50IG1lc3NhZ2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2U+fVxuXHQgKi9cblx0c2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuXHRcdHJldHVybiBNZXNzYWdlLnNlbmQodGhpcywgbWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogUHVibGlzaCBhIGxvY2FsIHN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgc3RyZWFtIHR5cGUsIHNlZSB7QGxpbmsgU3RyZWFtVHlwZXN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcblx0ICogQHBhcmFtIHtFbGVtZW50fSBbbG9jYWxTdHJlYW1Db250YWluZXJdIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uIENhbiBiZSBudWxsIGlmIGFscmVhZHkgc3BlY2lmaWVkIGluIHtAbGluayBDb25maWd9LlxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtQ29uc3RyYWludHN9IFtjb25zdHJhaW50c10gVGhlIHN0cmVhbSBjb25zdHJhaW50cy4gSWYgbm90IGRlZmluZWQsIHRoZSBjb25zdHJhaW50cyBkZWZpbmVkIGluIHtAbGluayBDb25maWd9IHdpbGwgYmUgdXNlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHNoYXJlKHR5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50cykge1xuXHRcdExvZy5pKCdSb29tfnNoYXJlJywge3R5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50c30pO1xuXHRcdHJldHVybiBMb2NhbC5zaGFyZSh0aGlzLnVpZCwgdHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBnZXQgYSBsb2NhbCBzdHJlYW0gaW4gdmlkZW8gdGFnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSBzdHJlYW0gdHlwZSwgc2VlIHtAbGluayBTdHJlYW1UeXBlc30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IFtsb2NhbFN0cmVhbUNvbnRhaW5lcl0gVGhlIGVsZW1lbnQgdGhlIHN0cmVhbSBpcyBhdHRhY2hlZCB0by4gQ2FuIGJlIG51bGwgaWYgYWxyZWFkeSBzcGVjaWZpZWQgaW4ge0BsaW5rIENvbmZpZ30uXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c30gW2NvbnN0cmFpbnRzXSBUaGUgc3RyZWFtIGNvbnN0cmFpbnRzLiBJZiBub3QgZGVmaW5lZCwgdGhlIGNvbnN0cmFpbnRzIGRlZmluZWQgaW4ge0BsaW5rIENvbmZpZ30gd2lsbCBiZSB1c2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0Z2V0TG9jYWxWaWRlbyh0eXBlLCBsb2NhbFN0cmVhbUNvbnRhaW5lciwgY29uc3RyYWludHMpIHtcblx0XHRMb2cuaSgnUm9vbX5nZXRMb2NhbFZpZGVvJywge3R5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50c30pO1xuXHRcdHJldHVybiBMb2NhbC5nZXRMb2NhbFZpZGVvKHRoaXMudWlkLCB0eXBlLCBsb2NhbFN0cmVhbUNvbnRhaW5lciwgY29uc3RyYWludHMpXG5cdFx0LnRoZW4oIGxvY2FsU3RyZWFtID0+IHtcblx0XHRcdHRoaXMubG9jYWxTdHJlYW0gPSBsb2NhbFN0cmVhbTtcblx0XHRcdHJldHVybiBsb2NhbFN0cmVhbTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBwdWJsaXNoIGEgbG9jYWwgc3RyZWFtXG5cdCAqIEByZXR1cm5zIHtMb2NhbH1cblx0ICovXG5cdHB1Ymxpc2goKSB7XG5cdFx0TG9nLmkoJ1Jvb21+cHVibGlzaCBMb2NhbCcpO1xuXHRcdHJldHVybiBMb2NhbC5wdWJsaXNoKHRoaXMubG9jYWxTdHJlYW0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEpvaW4gdGhlIHJvb20uIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0dXMgb2YgdGhlIGN1cnJlbnQgcGFydGljaXBhbnQgdG8gQ09OTkVDVEVELlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0am9pbigpIHtcblx0XHRMb2cuaSgnUm9vbX5qb2luJywgdGhpcyk7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBqb2luIGEgUm9vbS4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBfam9pblJvb20odGhpcykuY2F0Y2goTG9nLnIoJ1Jvb21+am9pbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMZWF2ZSB0aGUgcm9vbS4gU2V0cyB0aGUgY29ubmVjdGVkIHN0YXR1cyBvZiB0aGUgY3VycmVudCBwYXJ0aWNpcGFudCB0byBXQVNfQ09OTkVDVEVELCBkZWxldGVzIG1lZGlhcyBhbmQgY2FsbGJhY2tzLCBjbG9zZXMgV2ViUlRDIHN0YWNrcyBpbiB1c2UuXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqL1xuXHRsZWF2ZSgpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGxlYXZlIGEgUm9vbS4nKSk7XG5cdFx0fVxuXHRcdExvZy5pKCdSb29tfmxlYXZlJywgdGhpcyk7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdGNvbnN0IHVpZCA9IGNhY2hlLnVzZXIudWlkLnNwbGl0KCcvJykuam9pbignOicpO1xuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHt1aWR9L3N0YXR1c2ApLmNhbmNlbCgpO1xuXG5cdFx0Ly8gRGlzY29ubmVjdCB1c2VyJ3MgY2FsbGJhY2tzXG5cdFx0T2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdERhdGFTeW5jLm9mZihFdmVudHMucm9vbS50b1BhdGgoZXZlbnQpKHRoaXMpLCBldmVudCk7XG5cdFx0fSk7XG5cdFx0Ly8gVW5wdWJsaXNoIGFsbCBwdWJsaXNoZWQgbG9jYWwgc3RyZWFtc1xuXHRcdHRoaXMubG9jYWxTdHJlYW1zKCkudGhlbihsb2NhbFN0cmVhbXMgPT4gbG9jYWxTdHJlYW1zLmZvckVhY2gobG9jYWxTdHJlYW0gPT4gbG9jYWxTdHJlYW0uY2xvc2UoKSkpO1xuXHRcdC8vIFVuc3Vic2NyaWJlIGFsbCByZW1vdGUgc3RyZWFtc1xuXHRcdHRoaXMucmVtb3RlU3RyZWFtcygpLnRoZW4ocmVtb3RlU3RyZWFtcyA9PiByZW1vdGVTdHJlYW1zLmZvckVhY2gocmVtb3RlU3RyZWFtID0+IHJlbW90ZVN0cmVhbS51blN1YnNjcmliZSgpKSk7XG5cdFx0Ly8gVXBkYXRlIHN0YXR1c1xuXHRcdHJldHVybiBEYXRhU3luYy5zZXQoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7dWlkfS9zdGF0dXNgLCBXQVNfQ09OTkVDVEVEKVxuXHRcdC8vIHJldHVybiBEYXRhU3luYy5zZXQoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7c2hvcnRVc2VySWR9L3N0YXR1c2AsIFdBU19DT05ORUNURUQpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+bGVhdmUnKSk7XG5cdH1cblxuXHQvKipcblx0ICogTGVhdmVzICYgY2xvc2UgdGhlIFJvb20uIE9ubHkgdGhlIG93bmVyL21vZGVyYXRvciBjYW4gY2xvc2UgYSByb29tLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0Y2xvc2UoKSB7XG5cdFx0TG9nLmkoJ1Jvb21+Y2xvc2UnLCB0aGlzKTtcblx0XHR0aGlzLnN0YXR1cyA9IENMT1NFRDtcblx0XHRyZXR1cm4gdGhpcy5sZWF2ZSgpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYHJvb21zLyR7dGhpcy51aWR9YCwge1xuXHRcdFx0XHRcdHN0YXR1czogQ0xPU0VELFxuXHRcdFx0XHRcdF9jbG9zZWQ6IERhdGFTeW5jLnRzKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy51aWR9YCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfmNsb3NlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHJvb21cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lXSBUaGUgcm9vbSBuYW1lXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmE9bnVsbF0gRXh0cmEgaW5mb3JtYXRpb25zXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3B1YmxpY1Jvb209ZmFsc2VdIEluZGljYXRlcyBwdWJsaWMgcm9vbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxSb29tLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlIChuYW1lLCBleHRyYSA9IG51bGwsIHB1YmxpY1Jvb20gPSBmYWxzZSkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gY3JlYXRlIGEgUm9vbS4nKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Rcblx0XHRcdHJvb21NZXRhRGF0YSA9IHtcblx0XHRcdFx0b3duZXI6IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0XHRfcHVibGljOiBwdWJsaWNSb29tLFxuXHRcdFx0XHRuYW1lOiBuYW1lIHx8IGAke2NhY2hlLnVzZXIubmFtZX0tJHtEYXRlLm5vdygpfWBcblx0XHRcdH0sXG5cdFx0XHRyb29tRnVsbE1ldGFEYXRhID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRcdHN0YXR1czogT1BFTkVELFxuXHRcdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKSxcblx0XHRcdFx0ZXh0cmFcblx0XHRcdH0sIHJvb21NZXRhRGF0YSk7XG5cblx0XHRsZXQgcm9vbSA9IG51bGw7XG5cdFx0Ly8gQ3JlYXRlIHB1YmxpYyByb29tIGluZm9zXG5cdFx0Ly8gcmV0dXJuIERhdGFTeW5jLnB1c2goJ3Jvb21zJywgcm9vbUZ1bGxNZXRhRGF0YSlcblx0XHRjb25zdCBpZDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblx0XHRjb25zdCBpZDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgcm9vbXMvJHtpZDF9LyR7aWQyfWAsIHJvb21GdWxsTWV0YURhdGEpXG5cdFx0XHQvLyBDcmVhdGUgcHJpdmF0ZSByb29tIGluZm9zXG5cdFx0XHQudGhlbihyb29tUmVmID0+IHtcblx0XHRcdFx0cm9vbSA9IG5ldyBSb29tKE9iamVjdC5hc3NpZ24oe3VpZDogYCR7aWQxfS8ke2lkMn0vJHtyb29tUmVmLm5hbWUoKX1gfSwgcm9vbUZ1bGxNZXRhRGF0YSkpO1xuXHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL3Jvb21zLyR7cm9vbS51aWR9L21ldGFgLCByb29tTWV0YURhdGEpO1xuXHRcdFx0fSlcblx0XHRcdC8vIEpvaW4gdGhlIHJvb21cblx0XHRcdC50aGVuKCgpID0+IF9qb2luUm9vbShyb29tLCBPV05FUikpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb20jY3JlYXRlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHtAbGluayBSb29tfSBmcm9tIGl0cyBgdWlkYFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gdWlkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxSb29tPn1cblx0ICovXG5cdHN0YXRpYyBnZXQgKHVpZCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYHJvb21zLyR7dWlkfWApXG5cdFx0XHQudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGlmKHNuYXBEYXRhLnZhbCgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBSb29tKHNuYXBEYXRhLCB1aWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvUm9vbS5qcyIsIi8qZXNsaW50IG1heC1wYXJhbXM6IFsyLCA1XSwgbWF4LWxlbjogWzAsIDEyMF0gKi9cbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgUmVhY2ggZnJvbSAnLi4vLi4vUmVhY2gnO1xuXG4vKipcbiAqIFZpZGVvIHJlc29sdXRpb24gcHJlc2V0c1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7e1VIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZ30sIEZIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBTVkdBOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFNEOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFZHQToge3c6IG51bWJlciwgaDogbnVtYmVyLCBtYXg6IHN0cmluZ319fVxuICovXG5jb25zdCBwcmVzZXRzID0ge1xuXHRVSEQ6IHt3OiAzODQwLCBoOiAyMTYwLCBtaW46ICdIRCd9LFxuXHRGSEQ6IHt3OiAxOTIwLCBoOiAxMDgwLCBtaW46ICdIRCcsIG1heDogJ1VIRCd9LFxuXHRIRDoge3c6IDEyODAsIGg6IDcyMCwgbWluOiAnU0QnLCBtYXg6ICdGSEQnfSxcblx0U1ZHQToge3c6IDgwMCwgaDogNjAwLCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRTRDoge3c6IDcyMCwgaDogNTc2LCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRWR0E6IHt3OiA2NDAsIGg6IDQ4MCwgbWF4OiAnU1ZHQSd9XG59O1xuXG4vKipcbiAqIEFzc2lnbiBkZXZpY2VJZCB0byBjb25zdHJhaW50XG4gKiBAcGFyYW0gY29uc3RyYWludFxuICogQHBhcmFtIGRldmljZUlkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgX2Fzc2lnbkRldmljZSA9IChjb25zdHJhaW50LCBkZXZpY2VJZCkgPT4ge1xuXHRpZihjb25zdHJhaW50ICYmIGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0XHQvXigodXNlcil8KGVudmlyb25tZW50KSkkL2kudGVzdChkZXZpY2VJZCkgPyB7ZmFjaW5nTW9kZTogZGV2aWNlSWR9IDoge2RldmljZUlkfSxcblx0XHRcdGNvbnN0cmFpbnQgPT09IHRydWUgPyB7fSA6IGNvbnN0cmFpbnQpO1xuXHR9XG5cdHJldHVybiBjb25zdHJhaW50O1xufTtcblxuLyoqXG4gKiBIZWxwZXJzIGZvciBNZWRpYURldmljZXMgYW5kIE1lZGlhU3RyZWFtQ29uc3RyYWludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcblx0LyoqXG5cdCAqIGZhY2luZ01vZGUgdmFsdWVzIHRvIHVzZSB3aXRoIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHt7VVNFUjogc3RyaW5nLCBFTlZJUk9OTUVOVDogc3RyaW5nfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgZmFjaW5nTW9kZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0VVNFUjogJ3VzZXInLFxuXHRcdFx0RU5WSVJPTk1FTlQ6ICdlbnZpcm9ubWVudCdcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhlbHBlcnMgdG8gY3JlYXRlIGEgTWVkaWFTdHJlYW1Db25zdHJhaW50cyBjb25maWd1cmF0aW9uIG9iamVjdFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfHN0cmluZ30gW3ZpZGVvQ29uc3RyYWludHM9J0hEJ10gYSBib29sZWFuLCBhIHZpZGVvIGNvbnN0cmFpbnRzIG9iamVjdCBvciBhIHByZXNldCBpZCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfSBbYXVkaW9Db25zdHJhaW50cz10cnVlXSBhIGJvb2xlYW4gb3IgYW4gYXVkaW8gY29uc3RyYWludHMgb2JqZWN0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1pZGVhbF0gdHlwZSBvZiBjb25zdHJhaW50cyBmb3IgdmlkZW8gd2hlbiB1c2luZyBhIHByZXNldCAoZXhhY3QsbWluLG1heCBvciBpZGVhbClcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbdmlkZW9EZXZpY2VJZF0gdmlkZW8gaW5wdXQgZGV2aWNlIGlkIG9yIGZhY2luZ01vZGVcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbYXVkaW9EZXZpY2VJZF0gYXVkaW8gaW5wdXQgZGV2aWNlIGlkXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdCAqIEB0aHJvd3Mge0Vycm9yfVxuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5IRCBBdWRpb1ZpZGVvIHdpdGggZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5GdWxsIEhEIFZpZGVvIHdpdGhvdXQgYXVkaW8gdXNpbmcgZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCdGSEQnLCBmYWxzZSwgJ2V4YWN0Jyk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKi9cblx0c3RhdGljIGNvbnN0cmFpbnRzICh2aWRlb0NvbnN0cmFpbnRzID0gJ0hEJywgYXVkaW9Db25zdHJhaW50cyA9IHRydWUsIHR5cGUgPSAnaWRlYWwnLCB2aWRlb0RldmljZUlkLCBhdWRpb0RldmljZUlkKSB7XG5cdFx0bGV0IHZpZGVvID0gdmlkZW9Db25zdHJhaW50cztcblx0XHRpZiAodHlwZW9mIHZpZGVvQ29uc3RyYWludHMgPT09ICdzdHJpbmcnKXtcblx0XHRcdGlmKHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSkge1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHByZXNldCA9IHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSxcblx0XHRcdFx0XHRkaW1Db25zdHJhaW50ID0gKGRpbSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoL14obWlufG1heHxleGFjdCkkLy50ZXN0KHR5cGUpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0XHRcdFx0clt0eXBlXSA9IHByZXNldFtkaW1dO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdG1pbjogcHJlc2V0Lm1pbiA/IHByZXNldHNbcHJlc2V0Lm1pbl1bZGltXSA6IHByZXNldFtkaW1dLFxuXHRcdFx0XHRcdFx0XHRpZGVhbDogcHJlc2V0W2RpbV0sXG5cdFx0XHRcdFx0XHRcdG1heDogcHJlc2V0Lm1heCA/IHByZXNldHNbcHJlc2V0Lm1heF1bZGltXSA6IHByZXNldFtkaW1dXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdHZpZGVvID0ge3dpZHRoOiBkaW1Db25zdHJhaW50KCd3JyksIGhlaWdodDogZGltQ29uc3RyYWludCgnaCcpfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBWaWRlbyBSZXNvbHV0aW9uIHByZXNldCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKScpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2aWRlbyA9IF9hc3NpZ25EZXZpY2UodmlkZW8sIHZpZGVvRGV2aWNlSWQpO1xuXG5cdFx0Y29uc3QgYXVkaW8gPSBfYXNzaWduRGV2aWNlKGF1ZGlvQ29uc3RyYWludHMsIGF1ZGlvRGV2aWNlSWQpO1xuXG5cdFx0TG9nLmQoJ01lZGlhI2NvbnN0cmFpbnRzJywge3ZpZGVvLCBhdWRpb30pO1xuXHRcdHJldHVybiB7dmlkZW8sIGF1ZGlvfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHN0cmVhbSBkaXNwbGF5IG5vZGUgZGVwZW5kaW5nIG9uIHN0cmVhbSB0eXBlXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIFRoZSBNZWRpYVN0cmVhbSB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIENvbnRhaW5lciBub2RlIGZvciBzdHJlYW1zXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gcHJldmlvdXMgUHJldmlvdXMgbm9kZSBmb3IgdGhlIHN0cmVhbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZvbHVtZT0uN10gdGhlIGRlZmF1bHQgdm9sdW1lXG5cdCAqIEByZXR1cm4ge0VsZW1lbnR9XG5cdCAqL1xuXHRzdGF0aWMgYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCBjb250YWluZXIsIHByZXZpb3VzLCB2b2x1bWUgPSAuNykge1xuXHRcdGxldCB0YWdOYW1lID0gJyc7XG5cdFx0aWYobWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ3ZpZGVvJztcblx0XHR9IGVsc2UgaWYobWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ2F1ZGlvJztcblx0XHR9XG5cdFx0TG9nLmQoJ01lZGlhI2F0dGFjaFN0cmVhbScsIG1lZGlhU3RyZWFtLCB0YWdOYW1lKTtcblx0XHRpZiAodGFnTmFtZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgX25vZGUgPSBwcmV2aW91cztcblx0XHRcdGlmICghX25vZGUgfHwgX25vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWdOYW1lKSB7XG5cdFx0XHRcdF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblx0XHRcdFx0X25vZGUuYXV0b3BsYXkgPSB0cnVlO1xuXHRcdFx0XHQvLyBzZXQgdGhlc2UgYXR0cmlidXRlcyBpbiBvcmRlciB0byBsYXVuY2ggdGhlIHZpZGVvIG9uIElPU1xuXHRcdFx0XHRpZiAoUmVhY2guYnJvd3Nlci5icm93c2VyID09PSAnc2FmYXJpJykge1xuXHRcdFx0XHRcdF9ub2RlLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLHRydWUpO1xuXHRcdFx0XHRcdF9ub2RlLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vX25vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywndmlkZW8vbXA0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X25vZGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzFweCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29udGFpbmVyKSB7XG5cdFx0XHRcdGlmIChwcmV2aW91cyAmJiBwcmV2aW91cyAhPT0gX25vZGUpIHtcblx0XHRcdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKF9ub2RlLCBwcmV2aW91cyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIXByZXZpb3VzKSB7XG5cdFx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKF9ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0X25vZGUuc3JjT2JqZWN0ID0gbWVkaWFTdHJlYW07XG5cdFx0XHRfbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdExvZy5kKGB2aWRlby5vbnBsYXkgPSAke2V2ZW50LnR5cGV9YCk7XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbmFkZHRyYWNrID0gKHRyYWNrKSA9PiB7XG5cdFx0XHRcdFx0TG9nLmQoYFtMb2NhbF0gbGlzdGVuZXI6IHZpZGVvLm9uYWRkdHJhY2sgPSAke3RyYWNrLmxhYmVsfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRcdH07XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbnJlbW92ZXRyYWNrID0gKHRyYWNrKSA9PiB7XG5cdFx0XHRcdFx0TG9nLmQoYFtMb2NhbF0gbGlzdGVuZXI6IHZpZGVvLm9ucmVtb3ZldHJhY2sgPSAke3RyYWNrLmxhYmVsfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRcdH07XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbmluYWN0aXZlID0gKCkgPT4ge1xuXHRcdFx0XHRcdExvZy5kKGBbTG9jYWxdIGxpc3RlbmVyOiB2aWRlby5vbmluYWN0aXZlYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRcdFx0fTtcblx0XHRcdFx0X25vZGUuc3JjT2JqZWN0Lm9ucGxheWluZyA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFtMb2NhbF0gbGlzdGVuZXI6IHZpZGVvLm9ucGxheWluZyA9ICR7ZXZlbnQudHlwZX1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRfbm9kZS5zcmNPYmplY3Qub25zdGFsbGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgW0xvY2FsXSBsaXN0ZW5lcjogdmlkZW8ub25zdGFsbGVkID0gJHtldmVudC50eXBlfWApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRcdH07XG5cdFx0XHRcdF9ub2RlLnNyY09iamVjdC5vbnN1c3BlbmQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKGBbTG9jYWxdIGxpc3RlbmVyOiB2aWRlby5vbnN1c3BlbmQgPSAke2V2ZW50LnR5cGV9YCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKGV2ZW50KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoJ29uIHBhc3NlIGzDoCcpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0XHRfbm9kZS5vbnN1c3BlbmQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZyhgW0xvY2FsXSBsaXN0ZW5lcjogdmlkZW8ub25zdXNwZW5kID0gJHtldmVudH1gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHRjb25zb2xlLmRlYnVnKGV2ZW50KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHQvKiBjb25zb2xlLmRlYnVnKCdvbiBlc3QgaWNpJyk7XG5cdFx0XHRcdGNvbnN0IHRhZ211dGVkID0gX25vZGUubXV0ZWQ7XG5cdFx0XHRcdF9ub2RlLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLHRydWUpO1xuXHRcdFx0XHRsZXQgYXV0b1BsYXlBbGxvd2VkID0gdHJ1ZTtcblx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IF9ub2RlLnBsYXkoKTtcblx0XHRcdFx0aWYgKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uKHN0YXR1cykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5kaXIocHJvbWlzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cHJvbWlzZS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdGlmIChlcnJvci5uYW1lID09PSAnTm90QWxsb3dlZEVycm9yJykge1xuXHRcdFx0XHRcdFx0XHRhdXRvUGxheUFsbG93ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIERvbid0IHRocm93IHRoZSBlcnJvciBzbyB0aGF0IHdlIGdldCB0byB0aGUgdGhlblxuXHRcdFx0XHRcdFx0XHQvLyBvciB0aHJvdyBpdCBidXQgc2V0IHRoZSBhdXRvUGxheUFsbG93ZWQgdG8gdHJ1ZSBpbiBoZXJlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmIChhdXRvUGxheUFsbG93ZWQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2F1dG9wbGF5IGFsbG93ZWQnKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2F1dG9wbGF5IE5PVCBhbGxvd2VkJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnYXV0b3BsYXkgdW5rbm93bicpXG5cdFx0XHRcdH0gKi9cblx0XHRcdH07XG5cdFx0XHRfbm9kZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4gTG9nLmQoJ29uIGEgY2hhcmfDqSBsZXMgZG9ubsOpZXMnKSk7XG5cdFx0XHRfbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnJvcikgPT4gTG9nLmQoYG9uIGEgdW5lIGVycmV1ciAke2Vycm9yfWApKTtcblx0XHRcdC8vIF9ub2RlLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLHRydWUpO1xuXHRcdFx0Ly8gZGlzYWJsZWQgZG9lc24ndCBzZWVtIHRvIGJlIG5lZWRlZFxuXHRcdFx0Ly8gX25vZGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdF9ub2RlLnZvbHVtZSA9IHZvbHVtZTtcblx0XHRcdHJldHVybiBfbm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIHByZXZpb3VzO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpc3QgYXZhaWxhYmxlIGlucHV0IGRldmljZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTx7YXVkaW9pbnB1dDogTWVkaWFEZXZpY2VJbmZvW10sIHZpZGVvaW5wdXQ6IE1lZGlhRGV2aWNlSW5mb1tdfT59XG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIFJlYWNoLm1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHQgKiAgLy8gVmlkZW8gY2FtZXJhc1xuXHQgKiAgY29uc29sZS5sb2coZGV2aWNlcy52aWRlb2lucHV0KTtcblx0ICogIC8vIEF1ZGlvIG1pY3Ncblx0ICogIGNvbnNvbGUubG9nKGRldmljZXMuYXVkaW9pbnB1dCk7XG5cdCAqIH0pO1xuXHQgKi9cblx0c3RhdGljIGRldmljZXMgKCkge1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuXHRcdFx0LnRoZW4oZGV2aWNlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0ZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyW2RldmljZS5raW5kXSkge1xuXHRcdFx0XHRcdFx0cltkZXZpY2Uua2luZF0gPSBbXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cltkZXZpY2Uua2luZF0ucHVzaChkZXZpY2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0TG9nLmQoJ01lZGlhI2RldmljZXMnLCByKTtcblx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZWRpYSNkZXZpY2VzJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29yZS9Vc2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4uL2NvcmUvUm9vbSc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4uL2NvcmUvSW52aXRlJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuLi9jb3JlL1BhcnRpY2lwYW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvcmUvTWVzc2FnZSc7XG5pbXBvcnQgUmVtb3RlIGZyb20gJy4uL2NvcmUvc3RyZWFtL1JlbW90ZSc7XG5pbXBvcnQge0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRUR9IGZyb20gJy4uL2NvcmUvdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSZWFjaCNvbn1cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9SZWFjaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVTRVJfQURERUQgRmlyZWQgd2hlbiBhIG5ldyB1c2VyIGlzIHJlZ2lzdGVyZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVU0VSX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBleGlzdGluZyB1c2VyIGxvZ3MgaW4gb3Igb3V0IG9yIGNoYW5nZXMgaXMgc3RhdHVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVNFUl9SRU1PVkVEIEZpcmVkIHdoZW4gYSB1c2VyIGlzIHVucmVnaXN0ZXJlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQURERUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY3JlYXRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQ0hBTkdFRCBGaXJlZCB3aGVuIGEgcm9vbSBzdGF0dXMgaXMgY2hhbmdpbmdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBST09NX1JFTU9WRUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY2xvc2VkIGRlZmluaXRlbHlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQURERUQgRmlyZWQgd2hlbiBhbiBpbnZpdGUgaXMgcmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQ0hBTkdFRCBGaXJlZCB3aGVuIGFuIGludml0ZSBzdGF0dXMgaXMgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSb29tI29ufVxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzL1Jvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUNJUEFOVF9BRERFRCBGaXJlZCB3aGVuIGEgbmV3IHBhcnRpY2lwYW50IGlzIGFkZGVkIHRvIHRoZSByb29tLiBEb2VzIG5vdCBtZWFuIGhlJ3MgY29ubmVjdGVkIGJ1dCB0aGF0IGhlJ3MgaW52aXRlZCB0b1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQ0lQQU5UX0NIQU5HRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaXMgc3RhdHVzIChlbnRlci9sZWF2ZXMgdGhlIHJvb20pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElDSVBBTlRfUkVNT1ZFRCBGaXJlZCB3aGVuIGEgdXNlciBsZWF2ZXMgZGVmaW5pdGVseSBvciBpcyBiYW5uZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0FEREVEIEZpcmVkIHdoZW4gYSBuZXcgaW5zdGFudCBtZXNzYWdlIGlzIHNlbnQgdG8gdGhlIHJvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBpbnN0YW50IG1lc3NhZ2UgaXMgZWRpdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUVTU0FHRV9SRU1PVkVEIEZpcmVkIHdoZW4gYW4gaW5zdGFudCBtZXNzYWdlIGlzIHJlbW92ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fUFVCTElTSEVEIEZpcmVkIHdoZW4gYSBwYXJ0aWNpcGFudCBwdWJsaXNoZXMgYSBzdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fVU5QVUJMSVNIRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IHN0b3BzIHRoZSBwdWJsaXNoaW5nIG9mIGhpcyBzdHJlYW1cbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBJbnZpdGUjb259XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHMvSW52aXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQUNDRVBURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVKRUNURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0FOQ0VMRUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGNhbmNlbGVkXG4gKi9cblxuLyoqXG4gKiBUaGUgZXZlbnRzIHN1cHBvcnRlZCBieSB7QGxpbmsgUmVtb3RlI29ufS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9TdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNVVRFIEZpcmVkIHdoZW4gdGhlIG11dGUgc3RhdHVzIG9mIHRoZSBzdHJlYW0gY2hhbmdlc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFNJWkUgRmlyZWQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgc3RyZWFtIGNoYW5nZXNcbiAqL1xuXG4vKipcbiAqIFBhdGggY29uZmlndXJhdGlvbiBmb3IgZWFjaCBldmVudFxuICogQGlnbm9yZVxuICogQHR5cGUge3t9fVxuICovXG5jb25zdCBwYXRocyA9IHtcblx0J1VTRVInOiAoKSA9PiAndXNlcnMnLFxuXHQnUk9PTSc6ICgpID0+ICdyb29tcycsXG5cdCdJTlZJVEUnOiB1c2VyID0+IHtcblx0XHRpZighdXNlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBiZSBhdXRoZW50aWNhdGVkIHRvIGxpc3QgdGhlIGludml0ZXMnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gO1xuXHR9LFxuXHQnUEFSVElDSVBBTlQnOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50c2AsXG5cdCdNRVNTQUdFJzogcm9vbSA9PiBgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlc2AsXG5cdCdTVFJFQU0nOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3N0cmVhbXNgXG59O1xuXG4vKipcbiAqIE9iamVjdCB0eXBlIGNvbmZpZ3VyYXRpb24gZm9yIGVhY2ggZXZlbnRcbiAqIEBpZ25vcmVcbiAqIEB0eXBlIHt7fX1cbiAqL1xuY29uc3QgY2xhc3NlcyA9IHtcblx0J1VTRVInOiBVc2VyLFxuXHQnUk9PTSc6IFJvb20sXG5cdCdJTlZJVEUnOiBJbnZpdGUsXG5cdCdQQVJUSUNJUEFOVCc6IFBhcnRpY2lwYW50LFxuXHQnTUVTU0FHRSc6IE1lc3NhZ2UsXG5cdCdTVFJFQU0nOiBSZW1vdGVcbn07XG5cbi8qKlxuICogUHJpdmF0ZSBjbGFzcyB0byBhZGQgc3VwcG9ydCB0ZXN0IG1ldGhvZHNcbiAqIEBjbGFzcyBfRXZlbnRzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIF9FdmVudHMge1xuXHRjb25zdHJ1Y3RvcihrZXlzKSB7XG5cdFx0a2V5cy5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0ga2V5O30pO1xuXHR9XG5cdHN1cHBvcnRzKGV2ZW50KSB7XG5cdFx0aWYoIWV2ZW50IHx8IHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgdGhpc1tldmVudF0gIT09IGV2ZW50LnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQuIFVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzKSl9YCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHRvUGF0aChldmVudCkge1xuXHRcdGlmKHRoaXMuc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aHNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXSB8fCAoKCkgPT4gbnVsbCk7XG5cdFx0fVxuXHR9XG5cdHRvQ2xhc3MoZXZlbnQpIHtcblx0XHRpZih0aGlzLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzZXNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCByZWFjaCA9IG5ldyBfRXZlbnRzKFtcblx0J1VTRVJfQURERUQnLCAnVVNFUl9DSEFOR0VEJywgJ1VTRVJfUkVNT1ZFRCcsXG5cdCdST09NX0FEREVEJywgJ1JPT01fQ0hBTkdFRCcsICdST09NX1JFTU9WRUQnLFxuXHQnSU5WSVRFX0FEREVEJywgJ0lOVklURV9DSEFOR0VEJ1xuXSk7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3Qgcm9vbSA9IG5ldyBfRXZlbnRzKFtcblx0J01FU1NBR0VfQURERUQnLCAnTUVTU0FHRV9DSEFOR0VEJywgJ01FU1NBR0VfUkVNT1ZFRCcsXG5cdCdQQVJUSUNJUEFOVF9BRERFRCcsICdQQVJUSUNJUEFOVF9DSEFOR0VEJywgJ1BBUlRJQ0lQQU5UX1JFTU9WRUQnLFxuXHQnU1RSRUFNX1BVQkxJU0hFRCcsICdTVFJFQU1fVU5QVUJMSVNIRUQnXG5dKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJlYW0gPSBuZXcgX0V2ZW50cyhbJ01VVEUnLCAnU0laRSddKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBpbnZpdGUgPSBuZXcgX0V2ZW50cyhbQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRF0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0V2ZW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9XG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtPTkdPSU5HLCBBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vZGVmaW5pdGlvbnMvRXZlbnRzJztcblxuLyoqXG4gKiBVcGRhdGVcbiAqIEBwYXJhbSB7SW52aXRlfSBpbnZpdGUgVGhlIGludml0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyBUaGUgbmV3IHN0YXR1c1xuICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb249bnVsbF0gVGhlIHJlYXNvbiAoYSBtZXNzYWdlKVxuICogQHBhcmFtIHtvYmplY3R9IFtfZW5kZWQ9bnVsbF1cbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHJldHVybnMge1Byb21pc2U8SW52aXRlLCBFcnJvcj59XG4gKi9cbmNvbnN0IHVwZGF0ZSA9IChpbnZpdGUsIHN0YXR1cywgcmVhc29uID0gbnVsbCwgX2VuZGVkID0gbnVsbCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0c3RhdHVzLFxuXHRcdHJlYXNvbixcblx0XHRfZW5kZWRcblx0fTtcblx0aWYoaW52aXRlLnN0YXR1cyAhPT0gT05HT0lORykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoaXMgaW52aXRhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFuc3dlcmVkJykpO1xuXHR9XG5cdHJldHVybiBEYXRhU3luYy51cGRhdGUoYF8vaW52aXRlcy8ke2ludml0ZS50b30vJHtpbnZpdGUudWlkfWAsIHZhbHVlcylcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2gocHJvcCA9PiB7XG5cdFx0XHRcdGludml0ZVtwcm9wXSA9IHZhbHVlc1twcm9wXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFJvb20uZ2V0KGludml0ZS5yb29tKTtcblx0XHR9KVxuXHRcdC50aGVuKCgpID0+ICh7aW52aXRlfSkpXG5cdFx0LmNhdGNoKExvZy5yKCdJbnZpdGVfdXBkYXRlJykpO1xufTtcblxuLyoqXG4gKiBJbnZpdGF0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludml0ZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhbiBpbnZpdGVcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGxldCB2YWx1ZXMgPSBzbmFwRGF0YTtcblx0XHRpZihzbmFwRGF0YSAmJiBzbmFwRGF0YS52YWwgJiYgdHlwZW9mIHNuYXBEYXRhLnZhbCA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSwge3VpZDogc25hcERhdGEubmFtZSgpLCB0bzogc25hcERhdGEucmVmKCkucGFyZW50KCkubmFtZSgpfSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEludml0ZSdzIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBJbnZpdGUncyBzZW5kZXIgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmZyb20gPSB2YWx1ZXMuZnJvbTtcblx0XHQvKipcblx0XHQgKiBJbnZpdGVlJ3MgdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRvID0gdmFsdWVzLnRvO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZCBvZiB0aGUgcm9vbSBhc3NvY2lhdGVkIHRvIHRoZSBpbnZpdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbSA9IHZhbHVlcy5yb29tO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpbnZpdGF0aW9uIHN0YXR1cyA6XG5cdFx0ICogLSBPTkdPSU5HIC0gVGhlIHJlY2VpdmVyIGhhcyBub3QgeWV0IHJlc3BvbmRlZCB0byB0aGUgaW52aXRhdGlvblxuXHRcdCAqIC0gQUNDRVBURUQgLSBUaGUgcmVjZWl2ZXIgaGFzIGFjY2VwdGVkIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogLSBSRUpFQ1RFRCAtIFRoZSByZWNlaXZlciBoYXMgcmVqZWN0ZWQgdGhlIGludml0YXRpb25cblx0XHQgKiAtIENBTkNFTEVEIC0gVGhlIHNlbmRlciBjYW5jZWxlZCB0aGUgaW52aXRhdGlvblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBtZXNzYWdlLiBUaGlzIHdpbGwgYmUgZWl0aGVyIGEgY3VzdG9tIG1lc3NhZ2UgaWYgdGhlIHN0YXR1cyBpcyBPTkdPSU5HIG9yIGEgcmVhc29uIHdoZW4gc3RhdHVzIGlzIENBTkNFTEVEfFJFSkVDVEVELlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50b3BpYyA9IHZhbHVlcy50b3BpYztcblx0XHQvKipcblx0XHQgKiBJbnZpdGUgY3JlYXRpb24gdGltZXN0YW1wXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9jcmVhdGVkID0gdmFsdWVzLl9jcmVhdGVkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBleHBpcmF0aW9uIHRpbWVzdGFtcFxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fZW5kZWQgPSB2YWx1ZXMuX2VuZGVkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBldmVudHMgY2FsbGJhY2tzXG5cdFx0ICogQHR5cGUge3t9fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogSXMgdGhpcyBpbnZpdGF0aW9uIHdhaXRpbmcgZm9yIGEgcmVwbHkgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc09uR29pbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBPTkdPSU5HO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhcyB0aGlzIGludml0YXRpb24gcmVqZWN0ZWQgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc1JlamVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUkVKRUNURUQ7XG5cdH1cblxuXHQvKipcblx0ICogV2FzIHRoaXMgaW52aXRhdGlvbiBhY2NlcHRlZCA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzQWNjZXB0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBBQ0NFUFRFRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBXYXMgdGhpcyBpbnZpdGF0aW9uIGNhbmNlbGVkID9cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IENBTkNFTEVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbmNlbHMgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHNlbmRlciBjYW4gY2FuY2VsIHRoZSBpbnZpdGF0aW9uLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gVGhlIHJlYXNvbiB0aGUgc2VuZGVyIGlzIGNhbmNlbGluZyB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdGNhbmNlbChyZWFzb24pIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIENBTkNFTEVELCByZWFzb24sIERhdGFTeW5jLnRzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlamVjdHMgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHJlY2VpdmVyIGNhbiByZWplY3QgdGhlIGludml0YXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSBUaGUgcmVhc29uIHRoZSByZWNlaXZlciBpcyByZWplY3RpbmcgdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEludml0ZT59XG5cdCAqL1xuXHRyZWplY3QocmVhc29uKSB7XG5cdFx0cmV0dXJuIHVwZGF0ZSh0aGlzLCBSRUpFQ1RFRCwgcmVhc29uLCBEYXRhU3luYy50cygpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBY2NlcHQgdGhlIGludml0YXRpb24uIE9ubHkgdGhlIHJlY2VpdmVyIGNhbiBhY2NlcHQgdGhlIGludml0YXRpb24uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdGFjY2VwdCgpIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIEFDQ0VQVEVEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHN0YXR1cyB1cGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyBDYW4gYmU6XG5cdCAqIC0gQUNDRVBURURcblx0ICogLSBSRUpFQ1RFRFxuXHQgKiAtIENBTkNFTEVEXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqL1xuXHRvbihzdGF0dXMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoRXZlbnRzLmludml0ZS5zdXBwb3J0cyhzdGF0dXMpKSB7XG5cdFx0XHQvLyBSZWdpc3RlciBjYWxsYmFja1xuXHRcdFx0aWYgKCF0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSkge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW3N0YXR1c10ucHVzaChjYWxsYmFjayk7XG5cdFx0XHQvLyBEZWZpbmVkIGxpc3RlbmVyICYgc3Vic2NyaWJlIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCF0aGlzLl9saXN0ZW5lcikge1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSW52aXRlIHN0YXR1cyB1cGRhdGUgY2FsbGJhY2tcblx0XHRcdFx0ICogQHR5cGUge2Z1bmN0aW9ufVxuXHRcdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhpcy5fbGlzdGVuZXIgPSBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdXBkYXRlZCA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRcdGlmICh1cGRhdGVkICE9PSBudWxsICYmIHVwZGF0ZWQgIT09IHRoaXMuc3RhdHVzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9IHVwZGF0ZWQ7XG5cdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW3VwZGF0ZWRdIHx8IFtdKS5mb3JFYWNoKGNiID0+IHtcblx0XHRcdFx0XHRcdFx0Y2IodGhpcyk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdERhdGFTeW5jLm9uKGBfL2ludml0ZXMvJHt0aGlzLnRvfS8ke3RoaXMudWlkfS9zdGF0dXNgLCAndmFsdWUnLCB0aGlzLl9saXN0ZW5lci5iaW5kKHRoaXMpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYWxsIHN0YXR1cyBjaGFuZ2UgZXZlbnRzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqL1xuXHRvblN0YXR1c0NoYW5nZShjYWxsYmFjaykge1xuXHRcdFtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEXS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdHRoaXMub24oZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbi1yZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHN0YXR1cyB1cGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0dXNdIENhbiBiZTpcblx0ICogLSBBQ0NFUFRFRFxuXHQgKiAtIFJFSkVDVEVEXG5cdCAqIC0gQ0FOQ0VMRURcblx0ICogLSBudWxsIFRoaXMgd2lsbCB1bi1yZWdpc3RlciBhbGwgY2FsbGJhY2tzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cblx0ICovXG5cdG9mZihzdGF0dXMsIGNhbGxiYWNrKSB7XG5cdFx0aWYoIXN0YXR1cykge1xuXHRcdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdFx0fSBlbHNlIGlmKHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdKSB7XG5cdFx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0XHRjb25zdCBpZHggPSB0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXS5maW5kSW5kZXgoY2IgPT4gY2IgPT09IGNhbGxiYWNrKTtcblx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZighW0NBTkNFTEVELCBBQ0NFUFRFRCwgUkVKRUNURURdLnNvbWUoZXZlbnQgPT4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSAmJiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdLmxlbmd0aCA+IDApKXtcblx0XHRcdERhdGFTeW5jLm9mZihgXy9pbnZpdGVzLyR7dGhpcy50b30vJHt0aGlzLnVpZH0vc3RhdHVzYCwgJ3ZhbHVlJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVuLXJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGFsbCBzdGF0dXMgY2hhbmdlIGV2ZW50c1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXG5cdCAqL1xuXHRvZmZTdGF0dXNDaGFuZ2UoY2FsbGJhY2spIHtcblx0XHRpZighY2FsbGJhY2spIHtcblx0XHRcdHRoaXMub2ZmKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEXS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdFx0dGhpcy5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgdGhlIGludml0YXRpb24gJiBhZGQgdGhlIHVzZXIgdG8gdGhlIHBhcnRpY2lwYW50cyBsaXN0XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7VXNlcn0gaW52aXRlZSBUaGUgdXNlciB0byBpbnZpdGVcblx0ICogQHBhcmFtIHtSb29tfSByb29tIFRoZSByb29tIHRvIGludml0ZSB0aGUgdXNlciB0b1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIEEgbWVzc2FnZSBmb3IgdGhlIGludml0ZWVcblx0ICovXG5cdHN0YXRpYyBzZW5kKGludml0ZWUsIHJvb20sIG1lc3NhZ2UgPSBudWxsKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzZW5kIGFuIGludml0ZS4nKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52aXRlTWV0YURhdGEgPSB7XG5cdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdHJvb206IHJvb20udWlkLFxuXHRcdFx0c3RhdHVzOiBPTkdPSU5HLFxuXHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKCksXG5cdFx0XHR0b3BpYzogbWVzc2FnZVxuXHRcdH07XG5cblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9pbnZpdGVzLyR7aW52aXRlZS51aWR9YCwgaW52aXRlTWV0YURhdGEpXG5cdFx0XHQudGhlbihpbnZpdGVSZWYgPT4ge1xuXHRcdFx0XHRjb25zdCBpbnZpdGVJZCA9IGludml0ZVJlZi5uYW1lKCk7XG5cdFx0XHRcdHJldHVybiBuZXcgSW52aXRlKE9iamVjdC5hc3NpZ24oe3VpZDogaW52aXRlSWQsIHRvOiBpbnZpdGVlLnVpZH0sIGludml0ZU1ldGFEYXRhKSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdJbnZpdGUjc2VuZCcpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvSW52aXRlLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQgUm9vbSBmcm9tICcuL1Jvb20nO1xuaW1wb3J0IERldmljZSBmcm9tICcuL0RldmljZSc7XG5pbXBvcnQge0NPTk5FQ1RFRCwgTk9UX0NPTk5FQ1RFRH0gZnJvbSAnLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG5sZXQgaW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cbi8qKlxuICogVXNlciBpbmZvcm1hdGlvbnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB1c2VyXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8b2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEsIHVzZXJJZCkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBVc2VyJ3MgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQqL1xuXHRcdC8vIHRoaXMudWlkID0gc25hcERhdGEubmFtZSgpO1xuXHRcdHRoaXMudWlkID0gdXNlcklkO1xuXHRcdC8qKlxuXHRcdCAqIFVzZXIncyBkaXNwbGF5IG5hbWVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMubmFtZSA9IHZhbHVlcy5uYW1lO1xuXHRcdC8qKlxuXHRcdCAqIFVzZXIncyBzdGF0dXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblx0XHQvKipcblx0XHQgKiBVc2VyJ3MgbGFzdCBrbm93IGNvbm5lY3Rpb24gdHNcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMubGFzdFNlZW4gPSB2YWx1ZXMubGFzdFNlZW47XG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGFuIGFub255bW91cyB1c2VyXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5hbm9ueW1vdXMgPSAvXmFub255bW91cy8udGVzdCh2YWx1ZXMucHJvdmlkZXIpO1xuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCAnZXh0cmEnIHByb3BlcnR5IGZvciB1bnJlc3RyaWN0ZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiA/XG5cdH1cblxuXHQvKipcblx0ICogSW52aXRlIGEgdXNlciBkaXJlY3RseS4gVGhpcyB3aWxsIGNyZWF0ZSBhIG5ldyBSb29tLCBsb2cgeW91IGluIGl0ICYgaW52aXRlIHRoZSB1c2VyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIGEgbWVzc2FnZSB0byBhZGQgdG8gdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHtyb29tOiBSb29tLCBpbnZpdGU6IEludml0ZX0sIEVycm9yPn1cblx0ICovXG5cdGludml0ZShtZXNzYWdlKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBpbnZpdGUgYW5vdGhlciBVc2VyLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIFJvb20uY3JlYXRlKGAke2NhY2hlLnVzZXIudWlkfS0ke3RoaXMudWlkfWApXG5cdFx0XHQudGhlbihyb29tID0+IHtcblx0XHRcdFx0cmV0dXJuIHJvb20uaW52aXRlKFt0aGlzXSwgbnVsbCwgbWVzc2FnZSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiB7cm9vbTogZGF0YS5yb29tLCBpbnZpdGU6IGRhdGEuaW52aXRlc1swXX07XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdVc2Vyfmludml0ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0IFVzZXJzJ3MgZGV2aWNlcy4gT25seSBmb3IgY3VycmVudCB1c2VyLlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPERldmljZVtdLCBFcnJvcj59XG5cdCAqL1xuXHRkZXZpY2VzKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL2RldmljZXMvJHt0aGlzLnVpZH1gLCBEZXZpY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgdGhlIGN1cnJlbnQgdXNlclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge2pzb259IGF1dGggVGhlIHVzZXIncyBpZGVudGl0eSAod2ViY29tIEpTT04gc3RydWN0dXJlKVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSB1c2VyJ3MgZGlzcGxheSBuYW1lXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXIsIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBpbml0IChhdXRoLCBuYW1lKSB7XG5cdFx0Y29uc3QgaWQxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cdFx0Y29uc3QgaWQyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cdFx0Y29uc3QgdWlkID0gYCR7aWQxfS8ke2lkMn0vJHthdXRoLnVpZH1gO1xuXHRcdGNvbnN0IHVzZXJVaWQgPSBgJHtpZDF9OiR7aWQyfToke2F1dGgudWlkfWA7XG5cdFx0Ly8gY29uc3QgdWlkID0gYXV0aC51aWQ7XG5cdFx0aWYoIWluaXRpYWxpemluZykge1xuXHRcdFx0aW5pdGlhbGl6aW5nID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGQgPSB7c3RhdHVzOiBDT05ORUNURUQsIGxhc3RTZWVuOiBEYXRhU3luYy50cygpLCBwcm92aWRlcjogYXV0aC5wcm92aWRlcn07XG5cdFx0XHRpZihuYW1lKSB7XG5cdFx0XHRcdE9iamVjdC5hc3NpZ24oZCwge25hbWV9KTtcblx0XHRcdH1cblx0XHRcdGxldCBkZXZpY2VJZCA9IFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5nZXQodWlkKTtcblx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYHVzZXJzLyR7dWlkfWAsIGQpXG5cdFx0XHRcdC8vIFJlZ2lzdGVyIGN1cnJlbnQgZGV2aWNlXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBkZXZpY2VNZXRhZGF0YSA9IHtcblx0XHRcdFx0XHRcdHN0YXR1czogQ09OTkVDVEVELFxuXHRcdFx0XHRcdFx0c2RrOiB7XG5cdFx0XHRcdFx0XHRcdHJlYWNoOiBTREtfVkVSU0lPTixcblx0XHRcdFx0XHRcdFx0d2ViY29tOiBXZWJjb20uU0RLX1ZFUlNJT05cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGNhY2hlLnVzZXJBZ2VudCA9IGRldmljZU1ldGFkYXRhLnVzZXJBZ2VudDtcblx0XHRcdFx0XHRpZihkZXZpY2VJZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy9kZXZpY2VzLyR7dWlkfS8ke2RldmljZUlkfWAsIGRldmljZU1ldGFkYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goYF8vZGV2aWNlcy8ke3VpZH1gLCBkZXZpY2VNZXRhZGF0YSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIFNhdmUgZGV2aWNlXG5cdFx0XHRcdC50aGVuKGRldmljZVJlZiA9PiB7XG5cdFx0XHRcdFx0aWYgKCFkZXZpY2VJZCkge1xuXHRcdFx0XHRcdFx0ZGV2aWNlSWQgPSBkZXZpY2VSZWYubmFtZSgpO1xuXHRcdFx0XHRcdFx0V2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLnNldCh1aWQsIGRldmljZUlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FjaGUuZGV2aWNlID0gZGV2aWNlSWQ7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIEFkZCBvbkRpc2Nvbm5lY3QgYWN0aW9uc1xuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gRGlzY29ubmVjdCBkZXZpY2Vcblx0XHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vZGV2aWNlcy8ke3VpZH0vJHtkZXZpY2VJZH0vc3RhdHVzYCkuc2V0KE5PVF9DT05ORUNURUQpO1xuXHRcdFx0XHRcdC8vIFVwZGF0ZSB1c2VyIHN0YXR1c1xuXHRcdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgdXNlcnMvJHt1aWR9YCkudXBkYXRlKHtcblx0XHRcdFx0XHRcdHN0YXR1czogTk9UX0NPTk5FQ1RFRCxcblx0XHRcdFx0XHRcdGxhc3RTZWVuOiBEYXRhU3luYy50cygpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIEdldCB1c2VyXG5cdFx0XHRcdC8vIC50aGVuKCgpID0+IFVzZXIuZ2V0KHVpZCkpXG5cdFx0XHRcdC50aGVuKCgpID0+IFVzZXIuZ2V0KHVzZXJVaWQpKVxuXHRcdFx0XHQudGhlbih1c2VyID0+IHtcblx0XHRcdFx0XHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm4gdXNlcjtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRcdExvZy5lKGUpO1xuXHRcdFx0XHRcdGluaXRpYWxpemluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIHJldHVybiBVc2VyLmdldCh1aWQpO1xuXHRcdHJldHVybiBVc2VyLmdldCh1c2VyVWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNjb25uZWN0IHRoZSBjdXJyZW50IHVzZXJcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSBjdXJyZW50IHVzZXJcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRzdGF0aWMgZGlzY29ubmVjdCh1c2VyKSB7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdC8vIGR1ZSB0byB0aGUgcHJvYmxlbSBvZiBsb25nIGxpc3QsIHVpZHMgaGF2ZSBhIDogaW5zdGVhZCBvZiAvXG5cdFx0Y29uc3QgdXNlclVpZCA9IHVzZXIudWlkLnJlcGxhY2UoLzovZywnLycpO1xuXHRcdC8vIERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9kZXZpY2VzLyR7dXNlci51aWR9LyR7Y2FjaGUuZGV2aWNlfS9zdGF0dXNgKS5jYW5jZWwoKTtcblx0XHQvLyBEYXRhU3luYy5vbkRpc2Nvbm5lY3QoYHVzZXJzLyR7dXNlci51aWR9YCkuY2FuY2VsKCk7XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL2RldmljZXMvJHt1c2VyVWlkfS8ke2NhY2hlLmRldmljZX0vc3RhdHVzYCkuY2FuY2VsKCk7XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGB1c2Vycy8ke3VzZXJVaWR9YCkuY2FuY2VsKCk7XG5cdFx0aWYodXNlci5hbm9ueW1vdXMpIHtcblx0XHRcdHJldHVybiBEYXRhU3luYy5yZW1vdmUoYF8vZGV2aWNlcy8ke3VzZXJVaWR9YClcblx0XHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMuZ2V0KGBfL2ludml0ZXMvJHt1c2VyVWlkfWApKVxuXHRcdFx0XHQudGhlbihpbnZpdGVzID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbnZpdGVJZHMgPSBbXTtcblx0XHRcdFx0XHRpbnZpdGVzLmZvckVhY2goaW52aXRlID0+IHtcblx0XHRcdFx0XHRcdGludml0ZUlkcy5wdXNoKGludml0ZS5uYW1lKCkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChpbnZpdGVJZHMubWFwKGludml0ZUlkID0+IERhdGFTeW5jLnJlbW92ZShgXy9pbnZpdGVzLyR7dXNlclVpZH0vJHtpbnZpdGVJZH1gKSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBUT0RPIHJlZmFjdG9yIGRhdGEgbW9kZWwgZm9yIGludml0ZXMgc28gd2UgY2FuIGRlbGV0ZSBfL2ludml0ZXMvJHt1c2VyLnVpZH1cblx0XHRcdFx0Ly8gLnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGB1c2Vycy8ke3VzZXJVaWR9YCkpXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2UucmVtb3ZlKHVzZXJVaWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goTG9nLnIoJ1VzZXIjYW5vbnltb3VzX2Rpc2Nvbm5lY3QnKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5zZXQoYF8vZGV2aWNlcy8ke3VzZXJVaWR9LyR7Y2FjaGUuZGV2aWNlfS9zdGF0dXNgLCBOT1RfQ09OTkVDVEVEKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMuZ2V0KGBfL2RldmljZXMvJHt1c2VyVWlkfWApKVxuXHRcdFx0LnRoZW4oZGV2aWNlcyA9PiB7XG5cdFx0XHRcdC8vIE9ubHkgY2hhbmdlIHVzZXIncyBzdGF0dXMgaWYgbm8gb3RoZXIgZGV2aWNlIGNvbm5lY3RlZFxuXHRcdFx0XHRjb25zdCBoYXNDb25uZWN0ZWREZXZpY2VzID0gZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChuZXcgUmVnRXhwKGBeJHtDT05ORUNURUR9JGApKS50ZXN0KGRldmljZS52YWwoKS5zdGF0dXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoIWhhc0Nvbm5lY3RlZERldmljZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGB1c2Vycy8ke3VzZXJVaWR9YCwge3N0YXR1czogTk9UX0NPTk5FQ1RFRH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignVXNlciNkaXNjb25uZWN0JykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHVzZXIgYnkgaXRzIHVpZFxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBUaGUgdXNlcidzIHVpZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0KHVpZCkge1xuXHRcdC8vIGR1ZSB0byB0aGUgcHJvYmxlbSBvZiBsb25nIGxpc3QsIHVpZHMgaGF2ZSBhIDogaW5zdGVhZCBvZiAvXG5cdFx0Y29uc3QgdXNlclVpZCA9IHVpZC5yZXBsYWNlKC86L2csJy8nKTtcblx0XHRyZXR1cm4gRGF0YVN5bmMuZ2V0KGB1c2Vycy8ke3VzZXJVaWR9YClcblx0XHQvLyAudGhlbihzbmFwRGF0YSA9PiBzbmFwRGF0YSA/IG5ldyBVc2VyKHNuYXBEYXRhLCBuZXdVaWQpIDogbnVsbClcblx0XHQudGhlbihzbmFwRGF0YSA9PiBzbmFwRGF0YSA/IG5ldyBVc2VyKHNuYXBEYXRhLCB1aWQpIDogbnVsbClcblx0XHQuY2F0Y2goTG9nLnIoJ1VzZXIjZ2V0JykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Vc2VyLmpzIiwiLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHN0cmVhbSB0eXBlc1xuICogQHR5cGVkZWYge09iamVjdH0gU3RyZWFtVHlwZXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBVURJTz0nYXVkaW8nIC0gQXVkaW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVklERU89J3ZpZGVvJyAtIFZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVRElPX1ZJREVPPSdhdWRpby12aWRlbycgLSBBdWRpbyBhbmQgdmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0NSRUVOX1NIQVJJTkc9J3NjcmVlbi1zaGFyaW5nJyAtIFNjcmVlbi1zaGFyaW5nIGNvbW11bmljYXRpb24gc2VydmljZVxuICovXG5cbi8qKlxuKiBBdWRpbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBBVURJTyA9ICdhdWRpbyc7XG4vKipcbiogVmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgVklERU8gPSAndmlkZW8nO1xuLyoqXG4qIEF1ZGlvIGFuZCB2aWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBBVURJT19WSURFTyA9ICdhdWRpby12aWRlbyc7XG4vKipcbiogU2NyZWVuLXNoYXJpbmcgc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IFNDUkVFTl9TSEFSSU5HID0gJ3NjcmVlbi1zaGFyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQge0FVRElPLCBWSURFTywgQVVESU9fVklERU8sIFNDUkVFTl9TSEFSSU5HfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcy5qcyIsImltcG9ydCB7YnJvd3Nlcn0gZnJvbSAnLi9kZWZpbml0aW9ucy9Ccm93c2VyJztcbmltcG9ydCBTdHJlYW1UeXBlcyBmcm9tICcuL2RlZmluaXRpb25zL1N0cmVhbVR5cGVzJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuL2RlZmluaXRpb25zL0V2ZW50cyc7XG5pbXBvcnQge2F1ZGlvLCB2aWRlb30gZnJvbSAnLi9kZWZpbml0aW9ucy9Db2RlYyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL2NvcmUvVXNlcic7XG5pbXBvcnQgUm9vbSBmcm9tICcuL2NvcmUvUm9vbSc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4vY29yZS9JbnZpdGUnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi9jb3JlL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY29yZS91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL2NvcmUvdXRpbC9Mb2cnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vY29yZS91dGlsL01lZGlhJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbi8qKlxuICogRW50cnkgcG9pbnQgZm9yIFJlYWNoIFNES1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjaCB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgUmVhY2gncyBkYXRhIHN0cnVjdHVyZSB3aGVyZSB0aGUgdXJsIHBvaW50cyB0byAobWlnaHQgbm90IGJlIHRoZSByb290IG9mIHlvdXIgbmFtZXNwYWNlKVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7c3RyaW5nfFdlYmNvbX0gdXJsIFRoZSB1cmwgb2YgeW91ciBuYW1lc3BhY2Ugb3IgYW4gZXhpc3RpbmcgV2ViY29tIHJlZmVyZW5jZS5cblx0ICogQHBhcmFtIHtDb25maWd9IFtjZmddIFJlYWNoIGNvbmZpZ3VyYXRpb24uIFlvdSBjYW4gcGFzcyBjb25zdHJhaW50cyBoZXJlXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPkluaXQgd2l0aCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uPC9jYXB0aW9uPlxuXHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nKTtcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+SW5pdCBhbmQgc2V0IGNvbnN0cmFpbnRzIGZvciBTRCB2aWRlbyBhbmQgbG9nTGV2ZWwgdG8gJ2luZm8nPC9jYXB0aW9uPlxuXHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nLCB7XG5cdCAqICBjb25zdHJhaW50czogUmVhY2gubWVkaWEuY29uc3RyYWludHMoJ1NEJyksXG5cdCAqICBsb2dMZXZlbDogJ0lORk8nXG5cdCAqIH0pO1xuXHQgKi9cblx0Y29uc3RydWN0b3IodXJsLCBjZmcgPSBudWxsKSB7XG5cdFx0Ly8gU2V0IHNoYXJlZCByZWZlcmVuY2Vcblx0XHRjYWNoZS5iYXNlID0gdXJsO1xuXHRcdC8vIFNldCBzaGFyZWQgY29uZmlndXJhdGlvblxuXHRcdGNhY2hlLmNvbmZpZyA9IGNmZztcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGRlY2xhcmVkIGNhbGxiYWNrc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHZlcnNpb25zIG9mIFNESyBhbmQgRGF0YU1vZGVsLlRoZSBTY2hlbWEgdmVyc2lvbiBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBBbmRyb2lkICYgaU9TIFNESy5cblx0ICogQHJldHVybiB7e3Nkazogc3RyaW5nLCBzY2hlbWE6IHN0cmluZ319XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG5cdFx0cmV0dXJuIHtzZGs6IFNES19WRVJTSU9OLCBzY2hlbWE6IFNDSEVNQV9WRVJTSU9OfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgc3VwcG9ydGVkIHN0cmVhbSB0eXBlc1xuXHQgKiBAcmV0dXJucyB7U3RyZWFtVHlwZXN9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHR5cGVzKCkge1xuXHRcdHJldHVybiBTdHJlYW1UeXBlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgc3VwcG9ydGVkIGV2ZW50c1xuXHQgKiBAcmV0dXJuIHt7cm9vbTogRXZlbnRzL1Jvb20sIHJlYWNoOiBFdmVudHMvUmVhY2gsIHN0cmVhbTogRXZlbnRzL1N0cmVhbX19XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge3Jvb206IEV2ZW50cy5yb29tLCByZWFjaDogRXZlbnRzLnJlYWNoLCBzdHJlYW06IEV2ZW50cy5zdHJlYW0sIGludml0ZTogRXZlbnRzLmludml0ZX07XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGJyb3dzZXIncyBkZXRhaWxzXG5cdCAqIEByZXR1cm4ge0Jyb3dzZXJ9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGJyb3dzZXIoKSB7XG5cdFx0cmV0dXJuIGJyb3dzZXI7XG5cdH1cblxuXHQvKipcblx0ICogTWVkaWEgdXRpbGl0eSBmdW5jdGlvbnNcblx0ICogQHJldHVybiB7TWVkaWF9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IG1lZGlhKCkge1xuXHRcdHJldHVybiBNZWRpYTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29kZWMgcHJlc2V0cyB0byB1c2Ugd2hlbiBzZXR0aW5nIHtAbGluayBDb25maWcjcHJlZmVycmVkQXVkaW9Db2RlY30gb3Ige0BsaW5rIENvbmZpZyNwcmVmZXJyZWRWaWRlb0NvZGVjfVxuXHQgKiBAcmV0dXJuIHt7YXVkaW86IENvZGVjL2F1ZGlvLCB2aWRlbzogQ29kZWMvdmlkZW99fVxuXHQgKi9cblx0c3RhdGljIGdldCBjb2RlY3MoKSB7XG5cdFx0cmV0dXJuIHthdWRpbywgdmlkZW99O1xuXHR9XG5cdC8qKlxuXHQgKiBEYXRhU3luYyByZWZlcmVuY2Vcblx0ICogQHR5cGUge1dlYmNvbX1cblx0ICovXG5cdGdldCBiYXNlKCkge1xuXHRcdHJldHVybiBjYWNoZS5iYXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb25maWd1cmF0aW9uXG5cdCAqIEB0eXBlIHtDb25maWd9XG5cdCAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdHJldHVybiBjYWNoZS5jb25maWc7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCBVc2VyXG5cdCAqIEB0eXBlIHtVc2VyfVxuXHQgKi9cblx0Z2V0IGN1cnJlbnQoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLnVzZXI7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgJiBTaWduLWluIGFzIGEgbmV3IHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBvZiB0aGUgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkIG9mIHRoZSB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgdXNlciAoZGVmYXVsdHMgdG8gZW1haWwpXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbWVtYmVyTWU9ZmFsc2VdIGtlZXAgdXNlciBjb25uZWN0ZWQgP1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdHJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgcmVtZW1iZXJNZSkge1xuXHRcdHJldHVybiBjYWNoZS5iYXNlLmNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKVxuXHRcdFx0LnRoZW4oYXV0aCA9PiB7XG5cdFx0XHRcdGlmKGF1dGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5sb2dpbihlbWFpbCwgcGFzc3dvcmQsIG5hbWUgfHwgZW1haWwsIHJlbWVtYmVyTWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5yZWdpc3RlcicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaWduLWluIGFuIGV4aXN0aW5nIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBvZiB0aGUgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkIG9mIHRoZSB1c2VyXG4gXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSBuYW1lIG9mIHRoZSB1c2VyLiBEZWZhdWx0cyB0byB0aGUgdmFsdWUgaW4gYmFzZS5cblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVtZW1iZXJNZT1mYWxzZV0ga2VlcCB1c2VyIGNvbm5lY3RlZCA/XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXI+fVxuXHQgKi9cblx0bG9naW4oZW1haWwsIHBhc3N3b3JkLCBuYW1lLCByZW1lbWJlck1lID0gZmFsc2UpIHtcblx0XHQvLyBGb3JjZSBsb2dvdXQgdG8gYnlwYXNzIFdlYmNvbSBidWdcblx0XHRsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmKHRoaXMuY3VycmVudCAmJiB0aGlzLmN1cnJlbnQuZW1haWwgIT09IGVtYWlsKSB7XG5cdFx0XHRwID0gdGhpcy5sb2dvdXQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBcblx0XHRcdC50aGVuKCgpID0+IGNhY2hlLmJhc2UuYXV0aFdpdGhQYXNzd29yZCh7ZW1haWwsIHBhc3N3b3JkLCByZW1lbWJlck1lfSkpXG5cdFx0XHQudGhlbihhdXRoID0+IFVzZXIuaW5pdChhdXRoLCBuYW1lKSlcblx0XHRcdC50aGVuKHUgPT4ge1xuXHRcdFx0XHRjYWNoZS51c2VyID0gdTtcblx0XHRcdFx0cmV0dXJuIHU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5sb2dpbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXN1bWUgcHJldmlvdXMgc2Vzc2lvblxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdHJlc3VtZSgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Ly8gUmVzdW1lIHNlc3Npb25cblx0XHRcdGlmKFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5nZXQoJ3Nlc3Npb24nKSl7XG5cdFx0XHRcdGNhY2hlLmJhc2UucmVzdW1lKChlcnJvciwgYXV0aCkgPT4ge1xuXHRcdFx0XHRcdGlmKGF1dGggJiYgIXRoaXMuY3VycmVudCkge1xuXHRcdFx0XHRcdFx0VXNlci5pbml0KGF1dGgpLnRoZW4odSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNhY2hlLnVzZXIgPSB1O1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHUpO1xuXHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcignTm8gc2Vzc2lvbiB0byByZXN1bWUnKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogU2lnbi1pbiBhbiBhbm9ueW1vdXMgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSB1c2VyXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXI+fVxuXHQgKi9cblx0YW5vbnltb3VzKG5hbWUpIHtcblx0XHQvLyBGb3JjZSBsb2dvdXQgdG8gYnlwYXNzIFdlYmNvbSBidWdcblx0XHRsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmKHRoaXMuY3VycmVudCAmJiAoIXRoaXMuY3VycmVudC5hbm9ueW1vdXMgfHwgdGhpcy5jdXJyZW50Lm5hbWUgIT09IG5hbWUpKSB7XG5cdFx0XHRwID0gdGhpcy5sb2dvdXQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBcblx0XHRcdC50aGVuKCgpID0+IGNhY2hlLmJhc2UuYXV0aEFub255bW91c2x5KCkpXG5cdFx0XHQudGhlbihhdXRoID0+IFVzZXIuaW5pdChhdXRoLCBuYW1lKSlcblx0XHRcdC50aGVuKHUgPT4ge1xuXHRcdFx0XHRjYWNoZS51c2VyID0gdTtcblx0XHRcdFx0cmV0dXJuIHU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5hbm9ueW1vdXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogTG9nb3V0IGN1cnJlbnQgdXNlclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGxvZ291dCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdGlmKHRoaXMuY3VycmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdHAgPSBVc2VyLmRpc2Nvbm5lY3QodGhpcy5jdXJyZW50KTtcblx0XHRcdH1cblx0XHRcdHAudGhlbigoKSA9PiB7XG5cdFx0XHRcdE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcykuZm9yRWFjaChcblx0XHRcdFx0XHRldmVudCA9PiBEYXRhU3luYy5vZmYoRXZlbnRzLnJlYWNoLnRvUGF0aChldmVudCkoY2FjaGUudXNlciksIGV2ZW50KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjYWNoZS5iYXNlLmxvZ291dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y2FjaGUudXNlciA9IG51bGw7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdExvZy5lKGUpO1xuXHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgcmVnaXN0ZXJlZCB1c2Vyc1xuXHQgKiBAaWdub3JlIElmIHlvdXIgdXNlcnMgYmFzZSBpcyBwcmV0dHkgbGFyZ2UsIHRoaXMgbWV0aG9kIGlzIGltcG9zc2libGUuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1ZGU9ZmFsc2VdIEluY2x1ZGUgY3VycmVudCB1c2VyIGluIHVzZXIncyBsaXN0XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VXNlcltdLCBFcnJvcj59XG5cdCAqL1xuXHQvKiB1c2VycyhpbmNsdWRlKSB7XG5cdFx0aWYoIXRoaXMuY3VycmVudCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGxpc3QgVXNlcnMuJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdCgndXNlcnMnLCBVc2VyKVxuXHRcdFx0LnRoZW4odXNlcnMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIWluY2x1ZGUgJiYgdXNlcnMgJiYgdGhpcy5jdXJyZW50ID8gdXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci51aWQgIT09IHRoaXMuY3VycmVudC51aWQpIDogdXNlcnM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH51c2VycycpKTtcblx0fSovXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiByb29tc1xuXHQgKiBAaWdub3JlIElmIHlvdXIgdXNlcnMgYmFzZSBpcyBwcmV0dHkgbGFyZ2UsIHRoaXMgbWV0aG9kIGlzIGltcG9zc2libGUuXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Um9vbVtdLCBFcnJvcj59XG5cdCAqL1xuXHQvKiByb29tcygpIHtcblx0XHRpZighdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gbGlzdCBSb29tcy4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KCdyb29tcycsIFJvb20pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofnJvb21zJykpO1xuXHR9Ki9cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIGludml0ZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGVbXSwgRXJyb3I+fVxuXHQgKi9cblx0aW52aXRlcygpIHtcblx0XHRpZighdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3QgbGlzdCBpbnZpdGVzIHdpdGhvdXQgYSBVc2VyIGJlaW5nIGxvZ2dlZCBpbi4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL2ludml0ZXMvJHt0aGlzLmN1cnJlbnQudWlkfWAsIEludml0ZSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+aW52aXRlcycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9SZWFjaH0pLiBDYW4gYmU6XG5cdCAqIC0gVVNFUl9BRERFRFxuXHQgKiAtIFVTRVJfQ0hBTkdFRFxuXHQgKiAtIFVTRVJfUkVNT1ZFRFxuXHQgKiAtIFJPT01fQURERURcblx0ICogLSBST09NX0NIQU5HRURcblx0ICogLSBST09NX1JFTU9WRURcblx0ICogLSBJTlZJVEVfQURERURcblx0ICogLSBJTlZJVEVfQ0hBTkdFRFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGhlIGFyZ3VtZW50cyBkZXBlbmRzIG9uIHRoZSB0eXBlIG9mIGV2ZW50OlxuXHQgKiAtIFVTRVJfKjogY2FsbGJhY2soe0BsaW5rIFVzZXJ9IHUpXG5cdCAqIC0gUk9PTV8qOiBjYWxsYmFjayh7QGxpbmsgUm9vbX0gcilcblx0ICogLSBJTlZJVEVfKjogY2FsbGJhY2soe0BsaW5rIEludml0ZX0gaSlcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfSBbY2FuY2VsQ2FsbGJhY2tdIFRoZSBlcnJvciBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0YWtlcyBhbiBFcnJvciBhcyBvbmx5IGFyZ3VtZW50XG5cdCAqL1xuXHRvbihldmVudCwgY2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSB7XG5cdFx0Y29uc3QgcGF0aCA9IEV2ZW50cy5yZWFjaC50b1BhdGgoZXZlbnQpKGNhY2hlLnVzZXIpO1xuXHRcdGlmKHBhdGgpIHtcblx0XHRcdGNvbnN0IGNscyA9IEV2ZW50cy5yZWFjaC50b0NsYXNzKGV2ZW50KTtcblx0XHRcdGNvbnN0IGNiID0gc25hcERhdGEgPT4ge1xuXHRcdFx0XHRjb25zdCBkID0gY2xzID8gbmV3IGNscyhzbmFwRGF0YSkgOiBudWxsO1xuXHRcdFx0XHRMb2cuaShgUmVhY2h+b24oJHtldmVudH0pYCwgZCk7XG5cdFx0XHRcdGNhbGxiYWNrKGQpO1xuXHRcdFx0fTtcblx0XHRcdERhdGFTeW5jLm9uKHBhdGgsIGV2ZW50LCBjYiwgY2FuY2VsQ2FsbGJhY2spO1xuXHRcdFx0aWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNiKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IHJvb21cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgcm9vbSBuYW1lXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmFdIEV4dHJhIGluZm9ybWF0aW9uc1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtwdWJsaWNSb29tPWZhbHNlXSBJbmRpY2F0ZXMgcHVibGljIHJvb21cblx0ICogQHJldHVybnMge1Byb21pc2U8Um9vbT59XG5cdCAqL1xuXHRjcmVhdGVSb29tKG5hbWUsIGV4dHJhLCBwdWJsaWNSb29tID0gZmFsc2UpIHtcblx0XHRpZighdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGEgUm9vbSB3aXRob3V0IGEgVXNlciBiZWluZyBsb2dnZWQgaW4uJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gUm9vbS5jcmVhdGUobmFtZSwgZXh0cmEsIHB1YmxpY1Jvb20pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIGxpc3Qgb2YgYWxsIG9wZW5lZCB7QGxpbmsgUGVlckNvbm5lY3Rpb259c1xuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0Z2V0IHBlZXJDb25uZWN0aW9ucyAoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLnBlZXJDb25uZWN0aW9ucy5zdGFja3M7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEge0BsaW5rIFJvb219IGZyb20gaXRzIGB1aWRgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHJvb20ncyBVSURcblx0ICogQHJldHVybnMge1Byb21pc2UuPFJvb20+fVxuXHQgKi9cblx0Z2V0Um9vbSAodWlkKSB7XG5cdFx0cmV0dXJuIFJvb20uZ2V0KHVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEge0BsaW5rIFVzZXJ9IGZyb20gaXRzIGB1aWRgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHVzZXIncyBVSURcblx0ICogQHJldHVybnMge1Byb21pc2UuPFVzZXI+fVxuXHQgKi9cblx0Z2V0VXNlciAodWlkKSB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0KHVpZCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjaC5qcyIsImltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5cbi8qKlxuICogVXNlciBkZXZpY2VcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmljZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBkZXZpY2Vcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSBzdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBPU1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5vcyA9IHZhbHVlcy5vcztcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyB1c2VyQWdlbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudXNlckFnZW50ID0gdmFsdWVzLnVzZXJBZ2VudDtcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBsYXN0IGtub3cgc3RhdHVzXG5cdFx0ICogLSBDT05ORUNURURcblx0XHQgKiAtIE5PVF9DT05ORUNURURcblx0XHQgKiAtIFNMRUVQSU5HXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3Mgc2RrXG5cdFx0ICogQHR5cGUge3tyZWFjaDogc3RyaW5nLCB3ZWJjb206IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5zZGsgPSB2YWx1ZXMuc2RrO1xuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCAnZXh0cmEnIHByb3BlcnR5IGZvciB1bnJlc3RyaWN0ZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiA/XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBHZXQgYSBkZXZpY2UgYnkgaXRzIHVzZXIgdWlkIGFuZCBpdHMgdWlkXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXNlclVpZCBUaGUgdXNlcidzIHVpZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlVWlkIFRoZSBkZXZpY2UncyB1aWRcblx0ICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0KHVzZXJVaWQsIGRldmljZVVpZCkge1xuXHRcdC8vIGR1ZSB0byB0aGUgcHJvYmxlbSBvZiBsb25nIGxpc3QsIHNvbWUgdWlkICh1aWQgb2YgcGFydGljaXBhbnQpXG5cdFx0Ly8gY2FuIGhhdmUgYSA6IGluc3RlYWQgb2YgL1xuXHRcdGNvbnN0IG5ld1VpZCA9IHVzZXJVaWQucmVwbGFjZSgvOi9nLCcvJyk7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmdldChgXy9kZXZpY2VzLyR7bmV3VWlkfS8ke2RldmljZVVpZH1gKVxuXHRcdC50aGVuKHNuYXBEYXRhID0+IHNuYXBEYXRhID8gbmV3IERldmljZShzbmFwRGF0YSkgOiBudWxsKVxuXHRcdC5jYXRjaChMb2cucignRGV2aWNlI2dldCcpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9EZXZpY2UuanMiLCJpbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbi8qKlxuICogSW5zdGFudCBNZXNzYWdlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbWVzc2FnZVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fE9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJvb21JZCBUaGUgbWVzc2FnZSdzIHJvb20gaWRcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhLCByb29tSWQpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIG1lc3NhZ2UgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbUlkID0gcm9vbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBtZXNzYWdlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRleHQgPSB2YWx1ZXMudGV4dDtcblx0XHQvKipcblx0XHQgKiBUaGUgbWVzc2FnZSBzZW5kZXJcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuZnJvbSA9IHZhbHVlcy5mcm9tO1xuXHRcdC8qKlxuXHRcdCAqIEpvaW5lZCBkYXRlXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9jcmVhdGVkID0gdmFsdWVzLl9jcmVhdGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEVkaXQgdGhlIHRleHQgbWVzc2FnZS4gT25seSB0aGUgc2VuZGVyIG9yIG1vZGVyYXRvci9vd25lciBvZiB0aGUgcm9vbSBjYW4gZWRpdCBhIG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUZXh0IFRoZSBuZXcgbWVzc2FnZVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxNZXNzYWdlPn1cblx0ICovXG5cdGVkaXQobmV3VGV4dCkge1xuXHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYC9yb29tcy8ke3RoaXMucm9vbUlkfS9tZXNzYWdlcy8ke3RoaXMudWlkfWAsIHt0ZXh0OiBuZXdUZXh0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0dGhpcy50ZXh0ID0gbmV3VGV4dDtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZXNzYWdlfmVkaXQnKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSB0ZXh0IG1lc3NhZ2UuIE9ubHkgdGhlIHNlbmRlciBvciBtb2RlcmF0b3Ivb3duZXIgb2YgdGhlIHJvb20gY2FuIHJlbW92ZSBhIG1lc3NhZ2UuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0cmVtb3ZlKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5yZW1vdmUoYC9yb29tcy8ke3RoaXMucm9vbUlkfS9tZXNzYWdlcy8ke3RoaXMudWlkfWApXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ01lc3NhZ2V+cmVtb3ZlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7Um9vbX0gcm9vbSBUaGUgcm9vbSB0byBzZW5kIHRoZSBtZXNzYWdlIHRvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBtZXNzYWdlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZT59XG5cdCAqL1xuXHRzdGF0aWMgc2VuZChyb29tLCB0ZXh0KSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0Nhbm5vdCBzZW5kIGEgbWVzc2FnZSB0byB0aGUgUm9vbSB3aXRob3V0IGEgVXNlciBiZWluZyBsb2dnZWQgaW4uJykpO1xuXHRcdH1cblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0ZnJvbTogY2FjaGUudXNlci51aWQsXG5cdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKSxcblx0XHRcdHRleHRcblx0XHR9O1xuXHRcdHJldHVybiBEYXRhU3luYy5wdXNoKGBfL3Jvb21zLyR7cm9vbS51aWR9L21lc3NhZ2VzYCwgZGF0YSlcblx0XHRcdC50aGVuKHB1c2hSZWYgPT4gRGF0YVN5bmMuZ2V0KGBfL3Jvb21zLyR7cm9vbS51aWR9L21lc3NhZ2VzLyR7cHVzaFJlZi5uYW1lKCl9YCkpXG5cdFx0XHQudGhlbihzbmFwRGF0YSA9PiBuZXcgTWVzc2FnZShzbmFwRGF0YSwgcm9vbS51aWQpKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZXNzYWdlI3NlbmQnKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL01lc3NhZ2UuanMiLCIvKipcbiAqIHtAbGluayBSb29tfSBwYXJ0aWNpcGFudFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNpcGFudCB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBwYXJ0aWNpcGFudFxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fE9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCkpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBwYXJ0aWNpcGFudCB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gc25hcERhdGEubmFtZSgpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBQYXJ0aWNpcGFudCdzIHJvbGUuIENhbiBiZTpcblx0XHQgKiAtIE9XTkVSOiB0aGUgb3duZXIvY3JlYXRvciBvZiB0aGUge0BsaW5rIFJvb219XG5cdFx0ICogLSBNT0RFUkFUT1I6IGEgcGFydGljaXBhbnQgd2l0aCB7QGxpbmsgUm9vbX0gbWFuYWdlbWVudCBSaWdodHNcblx0XHQgKiAtIE5PTkU6IGJhc2ljIHBhcnRpY2lwYW50XG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJvbGUgPSB2YWx1ZXMucm9sZTtcblx0XHQvKipcblx0XHQgKiBUaGUgcGFydGljaXBhbnQgc3RhdHVzIENhbiBiZTpcblx0XHQgKiAtIE5PVF9DT05ORUNURUQ6IHRoZSBwYXJ0aWNpcGFudCBkaWQgbm90IGFjY2VwdCB0aGUgaW52aXRhdGlvbiB5ZXQgYW5kL29yIGRpZCBub3Qgam9pbiB0aGUge0BsaW5rIFJvb219IHlldFxuXHRcdCAqIC0gQ09OTkVDVEVEOiB0aGUgcGFydGljaXBhbnQgaXMgaW4gdGhlIHtAbGluayBSb29tfVxuXHRcdCAqIC0gV0FTX0NPTk5FQ1RFRDogdGhlIHBhcnRpY2lwYW50IGxlZnQgdGhlIHtAbGluayBSb29tfVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIEpvaW5lZCBkYXRlXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9qb2luZWQgPSB2YWx1ZXMuX2pvaW5lZDtcblx0XHQvKipcblx0XHQgKiBQYXJ0aWNpcGFudCdzIHVzZXJBZ2VudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51c2VyQWdlbnQgPSB2YWx1ZXMudXNlckFnZW50O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9QYXJ0aWNpcGFudC5qcyIsImltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi8uLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuXG4vKipcbiAqIEEgcHVibGlzaGVkIFN0cmVhbVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGUge1xuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzKSB7XG5cdFx0TG9nLmQoJ1JlbW90ZX5uZXcnLCB2YWx1ZXMpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhlIHJvb20gdGhlIHN0cmVhbSBpcyBwdWJsaXNoZWQgaW5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbUlkID0gdmFsdWVzLnJvb21JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoaXMgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGUgcHVibGlzaGVyIG9mIHRoZSBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuZnJvbSA9IHZhbHVlcy5mcm9tO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudHlwZSA9IHZhbHVlcy50eXBlO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5kZXZpY2UgPSB2YWx1ZXMuZGV2aWNlO1xuXHRcdC8qKlxuXHRcdCAqIHRoZSB1c2VyIGFnZW50IG9mIHRoZSBwdWJsaXNoZXIgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51c2VyQWdlbnQgPSB2YWx1ZXMudXNlckFnZW50O1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5oZWlnaHQgPSB2YWx1ZXMuaGVpZ2h0O1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy53aWR0aCA9IHZhbHVlcy53aWR0aDtcblx0XHQvKipcblx0XHQgKiBUaGUgbG9jYWwgRE9NIGNvbnRhaW5lciBlbGVtZW50IHdoZXJlIHRoZSB7QGxpbmsgTG9jYWx+bWVkaWF9IGlzIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqL1xuXHRcdHRoaXMuY29udGFpbmVyID0gY2FjaGUuY29uZmlnLnJlbW90ZVN0cmVhbUNvbnRhaW5lcjtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7e2F1ZGlvOiBib29sZWFuLCB2aWRlbzogYm9vbGVhbn19XG5cdFx0ICovXG5cdFx0dGhpcy5tdXRlZCA9IE9iamVjdC5hc3NpZ24oe2F1ZGlvOiBmYWxzZSwgdmlkZW86IGZhbHNlfSwgdmFsdWVzLm11dGVkKTtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGNhbGxiYWNrcyBmb3IgbXV0ZSBzdGF0dXMgY2hhbmdlXG5cdFx0ICogQHR5cGUge3tNVVRFOiBmdW5jdGlvbltdfX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHRcdC8qKlxuXHRcdCAqIFBlZXJDb25uZWN0aW9ucyBhc3NvY2lhdGVkIHRvIHRoaXMgcmVtb3RlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtQZWVyQ29ubmVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLnBlZXJDb25uZWN0aW9uID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBET00gZWxlbWVudCB3aGVyZSB0aGUgTWVkaWFTdHJlYW0gaXMgZGlzcGxheWVkXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fVxuXHQgKi9cblx0Z2V0IG5vZGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGVlckNvbm5lY3Rpb24gPyB0aGlzLnBlZXJDb25uZWN0aW9uLm5vZGUgOiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN1YnNjcmliZSB0byB0aGUgc3RyZWFtXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gW3JlbW90ZVN0cmVhbUNvbnRhaW5lcl0gVGhlIGVsZW1lbnQgdGhlIHN0cmVhbSBpcyBhdHRhY2hlZCB0by4gQ2FuIGJlIG51bGwgaWYgYWxyZWFkeSBzcGVjaWZpZWQgaW4gUmVhY2hDb25maWcuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0c3Vic2NyaWJlKHJlbW90ZVN0cmVhbUNvbnRhaW5lcikge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gc3Vic2NyaWJlIHRvIGEgUm9vbVxcJ3Mgc3RyZWFtLicpKTtcblx0XHR9XG5cdFx0Ly8gVE9ETzogVGVzdCBpZiBub3QgYWxyZWFkeSBzdWJzY3JpYmVkID9cblx0XHR0aGlzLmNvbnRhaW5lciA9IHJlbW90ZVN0cmVhbUNvbnRhaW5lciB8fCBjYWNoZS5jb25maWcucmVtb3RlU3RyZWFtQ29udGFpbmVyO1xuXHRcdExvZy5kKCdSZW1vdGV+c3Vic2NyaWJlJywgdGhpcy5jb250YWluZXIpO1xuXHRcdHJldHVybiBjYWNoZS5wZWVyQ29ubmVjdGlvbnMuYW5zd2VyKHRoaXMsIHRoaXMuY29udGFpbmVyKVxuXHRcdFx0LnRoZW4ocGMgPT4ge3RoaXMucGVlckNvbm5lY3Rpb24gPSBwYzsgfSlcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gLCB7XG5cdFx0XHRcdHRvOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKClcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdGxldCBzdWJzY3JpYmVkID0gZmFsc2U7XG5cdFx0XHRcdERhdGFTeW5jLm9uKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gLCAndmFsdWUnLCBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdFx0TG9nLmQoJ1JlbW90ZX51cGRhdGVkJywgdmFsdWVzKTtcblx0XHRcdFx0XHRpZih2YWx1ZXMpIHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSB0eXBlXG5cdFx0XHRcdFx0XHR0aGlzLnR5cGUgPSB2YWx1ZXMudHlwZTtcblx0XHRcdFx0XHRcdC8vdXBkYXRlIHN0cmVhbSBzaXplXG5cdFx0XHRcdFx0XHRjb25zdCBoZWlnaHQgPSB2YWx1ZXMuaGVpZ2h0O1xuXHRcdFx0XHRcdFx0Y29uc3Qgd2lkdGggPSB2YWx1ZXMud2lkdGg7XG5cdFx0XHRcdFx0XHRpZigoaGVpZ2h0IHx8IHdpZHRoKSAmJiAoaGVpZ2h0ICE9PSB0aGlzLmhlaWdodCB8fCB3aWR0aCAhPT0gdGhpcy5oZWlnaHQpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gdmFsdWVzLmhlaWdodDtcblx0XHRcdFx0XHRcdFx0dGhpcy53aWR0aCA9IHZhbHVlcy53aWR0aDtcblx0XHRcdFx0XHRcdFx0TG9nLncodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uU0laRV0pO1xuXHRcdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uU0laRV0gfHwgW10pLmZvckVhY2goY2IgPT4gY2IodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBtdXRlIHN0YXR1c1xuXHRcdFx0XHRcdFx0Y29uc3QgbXV0ZWQgPSB2YWx1ZXMubXV0ZWQ7XG5cdFx0XHRcdFx0XHRpZihtdXRlZCAmJiAobXV0ZWQuYXVkaW8gIT09IHRoaXMubXV0ZWQuYXVkaW8gfHwgbXV0ZWQudmlkZW8gIT09IHRoaXMubXV0ZWQudmlkZW8pKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubXV0ZWQgPSBtdXRlZDtcblx0XHRcdFx0XHRcdFx0TG9nLncodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uTVVURV0pO1xuXHRcdFx0XHRcdFx0XHQodGhpcy5fY2FsbGJhY2tzW0V2ZW50cy5zdHJlYW0uTVVURV0gfHwgW10pLmZvckVhY2goY2IgPT4gY2IodGhpcy5tdXRlZCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlZCA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKHN1YnNjcmliZWQpIHtcblx0XHRcdFx0XHRcdExvZy5pKCdSZW1vdGUjcmVtb3ZlZCcsIHRoaXMpO1xuXHRcdFx0XHRcdFx0dGhpcy5fY2xvc2UodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQvLyAuY2F0Y2goTG9nLnIoJ1JlbW90ZX5zdWJzY3JpYmUnKSk7XG5cdFx0XHQuY2F0Y2goKGUpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgUGVlckNvbm5lY3Rpb25+c3Vic2NyaWJlI2Vycm9yICR7ZX1gKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFxuXHRcdFx0XHRcdG5ldyBFcnJvcignRmFpbGVkIHRvIHN1YnNjcmliZSB0byB0aGUgcmVtb3RlIHN0cmVhbScpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBzdHJlYW1cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHR1blN1YnNjcmliZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2xvc2UoZmFsc2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoZSByZW1vdGUgU3RyZWFtXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3RlIENsb3NlIGlzIGluaXRpYXRlZCBieSBwdWJsaXNoZXJcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2xvc2UocmVtb3RlKSB7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gKS5jYW5jZWwoKTtcblx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBzdHJlYW0gbW9kaWZpY2F0aW9uc1xuXHRcdERhdGFTeW5jLm9mZihgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCwgJ3ZhbHVlJyk7XG5cdFx0Ly8gVW4tc3Vic2NyaWJlXG5cdFx0IXJlbW90ZSAmJiBEYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCk7XG5cdFx0Ly8gQ2xvc2UgUGVlckNvbm5lY3Rpb25cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlLnBlZXJDb25uZWN0aW9ucy5jbG9zZSh0aGlzLnVpZCwgdGhpcy5kZXZpY2UpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9TdHJlYW19KVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudFxuXHQgKi9cblx0b24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0aWYoRXZlbnRzLnN0cmVhbS5zdXBwb3J0cyhldmVudCkpIHtcblx0XHRcdGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvU3RyZWFtfSlcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudFxuXHQgKi9cblx0b2ZmKGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdGlmKCFldmVudCkge1xuXHRcdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdFx0fSBlbHNlIGlmKEV2ZW50cy5zdHJlYW0uc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRpZighY2FsbGJhY2spIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0uZmlsdGVyKGNiID0+IGNiICE9PSBjYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcblx0ICovXG5cdHVwZGF0ZSh2YWx1ZXMpIHtcblx0XHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goa2V5ID0+IHt0aGlzW2tleV0gPSB2YWx1ZXNba2V5XTt9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvc3RyZWFtL1JlbW90ZS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jyb3dzZXJEZXRhaWxzLCBicm93c2VyU2hpbX0gZnJvbSAnd2VicnRjLWFkYXB0ZXInO1xuaW1wb3J0IFdlYmNvbSBmcm9tICd3ZWJjb20vd2ViY29tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudCBicm93c2VyJ3MgaW5mb3NcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJyb3dzZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIC0gY3VycmVudCBicm93c2VyJ3MgbmFtZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt2ZXJzaW9uXSAtIGN1cnJlbnQgYnJvd3NlcidzIHZlcnNpb25cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluVmVyc2lvbl0gLSBjdXJyZW50IGJyb3dzZXIncyBtaW5pbXVtIHN1cHBvcnRlZCB2ZXJzaW9uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvbXBhdGlibGUgLSBpcyBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydGVkID9cbiAqL1xuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBPYmplY3QuYXNzaWduKHtcblx0Y29tcGF0aWJsZTogIS9cXHMvLnRlc3QoYnJvd3NlckRldGFpbHMuYnJvd3NlcikgJiZcblx0XHQoIWJyb3dzZXJEZXRhaWxzLm1pblZlcnNpb24gfHwgYnJvd3NlckRldGFpbHMudmVyc2lvbiA+PSBicm93c2VyRGV0YWlscy5taW5WZXJzaW9uKVxufSwgYnJvd3NlckRldGFpbHMpO1xuXG5jb25zdCB2ZXJzaW9uID0gYFJlYWNoIHYke1NES19WRVJTSU9OfSB8IFNjaGVtYSAke1NDSEVNQV9WRVJTSU9OfSB8IFdlYmNvbSB2JHtXZWJjb20uU0RLX1ZFUlNJT059YDtcbmxldCBtZXNzYWdlID0gJyc7XG5pZihicm93c2VyLnZlcnNpb24gPT09IG51bGwpIHtcblx0bWVzc2FnZSA9ICdVbnN1cHBvcnRlZCBicm93c2VyOiBicm93c2VyIG11c3Qgc3VwcG9ydCBXZWJSVEMgUGVlci10by1wZWVyIGNvbm5lY3Rpb25zIHRvIHVzZSBSZWFjaCc7XG59IGVsc2UgaWYgKGJyb3dzZXIubWluVmVyc2lvbiAmJiBicm93c2VyLm1pblZlcnNpb24gPiBicm93c2VyLnZlcnNpb24pIHtcblx0bWVzc2FnZSA9IGBVbnN1cHBvcnRlZCBicm93c2VyOiBicm93c2VyIGlzIG91dGRhdGVkLCB1cGRhdGUgdG8gbGF0ZXN0IHZlcnNpb24gKCR7YnJvd3Nlci5taW5WZXJzaW9ufSspYDtcbn0gZWxzZSBpZighYnJvd3NlclNoaW0pe1xuXHRtZXNzYWdlID0gJ05vIHNoaW0gZm9yIHlvdXIgYnJvd3Nlci4gVGhlcmUgbWlnaHQgYSBwcm9ibGVtIHdpdGggeW91ciBwYWNrYWdlLic7XG59XG5cbi8vIExvZyBicm93c2VyIHN0YXR1cyAmIFNES3MgdmVyc2lvbnMgb24gbG9hZFxubGV0IGFyZ3MgPSBbYCR7dmVyc2lvbn0gJHttZXNzYWdlfWBdO1xuaWYoL14oY2hyb21lfGZpcmVmb3gpJC8udGVzdChicm93c2VyLmJyb3dzZXIpKSB7XG5cdGFyZ3MgPSBbXG5cdFx0YCVjICR7dmVyc2lvbn0gJWMgJHttZXNzYWdlfWAsXG5cdFx0YGJhY2tncm91bmQ6ICR7YnJvd3Nlci5jb21wYXRpYmxlID8gJyNmNTAnIDogJ3JlZCd9OyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGRgLFxuXHRcdGBjb2xvcjogJHticm93c2VyLmNvbXBhdGlibGUgPyAnaW5oZXJpdCcgOiAncmVkJ31gXG5cdF07XG59XG5jb25zb2xlLmxvZyguLi5hcmdzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9Ccm93c2VyLmpzIiwiLyoqXG4gKiBWaWRlbyBjb2RlYyBwcmVzZXRzIHRvIHVzZSBmb3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENvZGVjL3ZpZGVvXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gVlA4IFZQOCBpcyB0aGUgb25seSB2aWRlbyBjb2RlYyBvZmZpY2lhbGx5IHN1cHBvcnRlZCBieSBXZWJSVENcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDkgVlA4J3Mgc3VjY2Vzc29yLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IEgyNjQgTVBFRy00IHBhcnQgMTAuIE9ubHkgRmlyZWZveC5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDEwIFN1aXRlZCBmb3IgVUhEIHZpZGVvLiBObyBzdXBwb3J0IHlldFxuICogQHByb3BlcnR5IHtSZWdFeHB9IEgyNjUgSC4yNjQncyBzdWNjZXNzb3IuIE5vIHN1cHBvcnQgeWV0XG4gKi9cbmV4cG9ydCBjb25zdCB2aWRlbyA9IHtcblx0J1ZQOCc6IC9ednA4L2ksXG5cdCdWUDknOiAvXnZwOS9pLFxuXHQnVlAxMCc6IC9ednAxMC9pLFxuXHQnSDI2NCc6IC9eaDI2NC9pLFxuXHQnSDI2NSc6IC9eaDI2NS9pXG59O1xuXG4vKipcbiAqIEF1ZGlvIGNvZGVjIHByZXNldHMgdG8gdXNlIGZvclxuICogQHR5cGVkZWYge09iamVjdH0gQ29kZWMvYXVkaW9cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBPUFVTIE9wdXMgYXVkaW8gY29kZWMge0BsaW5rIGh0dHA6Ly9vcHVzLWNvZGVjLm9yZy99LiBPbmx5IGNob2ljZSBmb3IgaGlnaC1xdWFsaXR5IGF1ZGlvLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IEc3MjIgRy43MjIgYXVkaW8gY29kZWNcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBHNzExIEcuNzExIGF1ZGlvIGNvZGVjXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSVNBQyBpU0FDIGF1ZGlvIGNvZGVjLiBHb29kIGZvciB2b2ljZSBkYXRhLCBidXQgbm90IHN1aXRhYmxlIGZvciBoaWdoLXF1YWxpdHkgYXVkaW8gc3RyZWFtcy5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJU0FDXzE2IGlTQUMgYXVkaW8gY29kZWMgKDE2a0h6KVxuICogQHByb3BlcnR5IHtSZWdFeHB9IElTQUNfMzIgaVNBQyBhdWRpbyBjb2RlYyAoMzJrSHopXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSUxCQyBpTEJDIGF1ZGlvIGNvZGVjLiBGb3IgYmFkIGNoYW5uZWxzICYgbG93IGJhbmR3aWR0aC5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJTEJDIGlMQkMgYXVkaW8gY29kZWMuIEZvciBiYWQgY2hhbm5lbHMgJiBsb3cgYmFuZHdpZHRoLlxuICovXG5leHBvcnQgY29uc3QgYXVkaW8gPSB7XG5cdCdPUFVTJzogL15vcHVzL2ksXG5cdCdHNzIyJzogL15nNzIyL2ksXG5cdCdHNzExJzogL15nNzExL2ksXG5cdCdJU0FDJzogL15pc2FjL2ksXG5cdCdJU0FDXzE2JzogL15pc2FjXFwvMTYwMDAvaSxcblx0J0lTQUNfMzInOiAvXmlzYWNcXC8zMjAwMC9pLFxuXHQnTFNBQyc6IC9ebHNhYy9pXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9Db2RlYy5qcyIsImltcG9ydCBtZWRpYSBmcm9tICcuL3V0aWwvTWVkaWEnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuXG5jb25zdCBfZmxhdHRlblNlcnZlcnMgPSBzZXJ2ZXJzID0+IHtcblx0Y29uc3QgX2V4cGFuZCA9IHNlcnZlcnMubWFwKHNlcnZlciA9PiB7XG5cdFx0Y29uc3Qge3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzLCB1cmx9ID0gc2VydmVyO1xuXHRcdGNvbnN0IHVyaXMgPSB1cmxzIHx8IHVybDtcblx0XHRpZih0eXBlb2YgdXJpcyAhPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRyZXR1cm4gdXJpcy5tYXAodXJpID0+ICh7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHM6IHVyaX0pKTtcblx0XHR9XG5cdFx0cmV0dXJuIFtzZXJ2ZXJdO1xuXHR9KTtcblx0cmV0dXJuIFtdLmNvbmNhdCguLi5fZXhwYW5kKTtcbn07XG5cbi8qKlxuICogVGhlIFJlYWNoIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBAY2xhc3MgQ29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZyB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgY29uZmlndXJhdGlvblxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihvYmopIHtcblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBtZWRpYSBjb25zdHJhaW50cy4gVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gd2hlbiBzdWJzY3JpYmluZyB0byBhIHN0cmVhbS5cblx0XHQgKiBAdHlwZSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c31cblx0XHQgKi9cblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZC9lbGVtZW50IGRvbSBlbGVtZW50IHRoYXQgd2lsbCBob2xkIHRoZSBsb2NhbCB2aWRlby9hdWRpbyBlbGVtZW50XG5cdFx0ICogQHR5cGUge3N0cmluZ3xFbGVtZW50fVxuXHRcdCAqL1xuXHRcdHRoaXMubG9jYWxTdHJlYW1Db250YWluZXIgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZC9lbGVtZW50IGRvbSBlbGVtZW50IHRoYXQgd2lsbCBob2xkIHRoZSByZW1vdGUgdmlkZW8vYXVkaW8gZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8RWxlbWVudH1cblx0XHQgKi9cblx0XHR0aGlzLnJlbW90ZVN0cmVhbUNvbnRhaW5lciA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgcHJlZmVycmVkIHZpZGVvIENvZGVjLiBUYWtlcyBhIFJlZ0V4cCBtYXRjaGluZyB0aGUgY29kZWMgbmFtZSBhbmQgc2FtcGxlIHJhdGUuXG5cdFx0ICogUHJlZGVmaW5lZCB2YWx1ZXMgY2FuIGJlIGZvdW5kIGluIHtAbGluayBDb2RlYy92aWRlb31cblx0XHQgKiBAdHlwZSB7UmVnRXhwfVxuXHRcdCAqIEBleGFtcGxlIDxjYXB0aW9uPlByZWZlciBWUDk8L2NhcHRpb24+XG5cdFx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHRcdCAqICBwcmVmZXJyZWRWaWRlb0NvZGVjOiBSZWFjaC5jb2RlY3MudmlkZW8uVlA5XG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dGhpcy5wcmVmZXJyZWRWaWRlb0NvZGVjID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBwcmVmZXJyZWQgYXVkaW8gQ29kZWMuIFRha2VzIGEgUmVnRXhwIG1hdGNoaW5nIHRoZSBjb2RlYyBuYW1lIGFuZCBzYW1wbGUgcmF0ZS5cblx0XHQgKiBQcmVkZWZpbmVkIHZhbHVlcyBjYW4gYmUgZm91bmQgaW4ge0BsaW5rIENvZGVjL2F1ZGlvfVxuXHRcdCAqIEB0eXBlIHtSZWdFeHB9XG5cdFx0ICogQGV4YW1wbGUgPGNhcHRpb24+UHJlZmVyIG9wdXM8L2NhcHRpb24+XG5cdFx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHRcdCAqICBwcmVmZXJyZWRBdWRpb0NvZGVjOiBSZWFjaC5jb2RlY3MuYXVkaW8uT1BVU1xuXHRcdCAqIH0pO1xuXHRcdCAqL1xuXHRcdHRoaXMucHJlZmVycmVkQXVkaW9Db2RlYyA9IG51bGw7XG5cblx0XHQvLyBQb3B1bGF0ZSB3aXRoIGRlZmF1bHQgdmFsdWVzXG5cdFx0dGhpcy5yZXNldCgpO1xuXG5cdFx0Ly8gUG9wdWxhdGUgd2l0aCBkYXRhXG5cdFx0dGhpcy5hc3NpZ24ob2JqKTtcblxuXHRcdC8vIFJlYWQgSUNFIHNlcnZlcnMgZnJvbSBzZXJ2ZXJcblx0XHREYXRhU3luYy5nZXQoJ18vaWNlJykudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRpZihzbmFwRGF0YSkge1xuXHRcdFx0XHR0aGlzLmljZVNlcnZlcnMgPSBzbmFwRGF0YS52YWwoKTtcblx0XHRcdFx0TG9nLmkoJ0lDRVNlcnZlcnMnLCB0aGlzLmljZVNlcnZlcnMubGVuZ3RoID4gMCA/IHRoaXMuaWNlU2VydmVycyA6ICdOb25lJyk7XG5cdFx0XHR9XG5cdFx0fSwgZSA9PiBMb2cuZCgnSUNFU2VydmVycycsIGUpKTtcblxuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCBib29sZWFuIHByb3AgdG8gcmVxdWVzdCBwZXJtaXNzaW9uIG9uIHN0YXJ0LCBzZHBFZGl0b3IgKGZvciB1c2VyIGRlZmluZWQgU0RQIG1vZGlmaWNhdGlvbnMpXG5cdH1cblxuXHQvKipcblx0ICogQXNzaWduIG5ldyBjb25mIHZhbHVlc1xuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBuZXcgY29uZiB2YWx1ZXNcblx0ICovXG5cdGFzc2lnbihvYmopIHtcblx0XHRPYmplY3Qua2V5cyhvYmogfHwge30pLmZvckVhY2goa2V5ID0+IHt0aGlzW2tleV0gPSBvYmpba2V5XTt9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRzZXQgbG9nTGV2ZWwobGV2ZWwpIHtcblx0XHRjYWNoZS5sb2dMZXZlbCA9IGxldmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldCBsb2dMZXZlbCgpIHtcblx0XHRyZXR1cm4gY2FjaGUubG9nTGV2ZWw7XG5cdH1cblxuXHQvKipcblx0ICogTGlzdCBvZiBUVVJOL1NUVU4gc2VydmVycyB0byB1c2UgZm9yIElDRS4gVGhpcyBsaXN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIElDRSBzZXJ2ZXJzIGRlY2xhcmVkIGluIHRoZSBuYW1lc3BhY2UgKCoqXy9pY2UqKikuXG5cdCAqIEB0eXBlIHtJQ0VTZXJ2ZXJbXX1cblx0ICovXG5cdHNldCBpY2VTZXJ2ZXJzKHNlcnZlcnMpIHtcblx0XHRMb2cuZCgnQ29uZmlnfnNldH5pY2VTZXJ2ZXJzJywgc2VydmVycyk7XG5cdFx0aWYoc2VydmVycykge1xuXHRcdFx0aWYgKCF0aGlzLl9pY2VTZXJ2ZXJzKSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAaWdub3JlXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR0aGlzLl9pY2VTZXJ2ZXJzID0gW10uY29uY2F0KHNlcnZlcnMgfHwgW10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZmxhdHRlbiBleGlzdGluZ1xuXHRcdFx0XHRjb25zdCBfY3VycmVudFNlcnZlcnMgPSBfZmxhdHRlblNlcnZlcnModGhpcy5faWNlU2VydmVycyk7XG5cdFx0XHRcdC8vIGZsYXR0ZW4gbmV3XG5cdFx0XHRcdGNvbnN0IF9uZXdTZXJ2ZXJzID0gX2ZsYXR0ZW5TZXJ2ZXJzKHNlcnZlcnMpO1xuXHRcdFx0XHQvLyBBZGQgb25seSB0aGUgbWlzc2luZyBzZXJ2ZXJzXG5cdFx0XHRcdF9uZXdTZXJ2ZXJzLmZvckVhY2gobmV3U2VydmVyID0+IHtcblx0XHRcdFx0XHRpZighX2N1cnJlbnRTZXJ2ZXJzLnNvbWUoc2VydmVyID0+XG5cdFx0XHRcdFx0XHRcdHNlcnZlci51cmxzID09PSBuZXdTZXJ2ZXIudXJscyAmJlxuXHRcdFx0XHRcdFx0XHRzZXJ2ZXIudXNlcm5hbWUgPT09IG5ld1NlcnZlci51c2VybmFtZSAmJlxuXHRcdFx0XHRcdFx0XHRzZXJ2ZXIuY3JlZGVudGlhbCA9PT0gbmV3U2VydmVyLmNyZWRlbnRpYWwpKSB7XG5cdFx0XHRcdFx0XHRfY3VycmVudFNlcnZlcnMucHVzaChuZXdTZXJ2ZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlLWdyb3VwIGJ5IHVzZXJuYW1lL2NyZWRlbnRpYWxcblx0XHRcdFx0dGhpcy5faWNlU2VydmVycyA9IF9jdXJyZW50U2VydmVycy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzfSA9IGN1cnJlbnQ7XG5cdFx0XHRcdFx0Y29uc3QgaWR4ID0gcHJldmlvdXMuZmluZEluZGV4KHMgPT4gcy51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgcy5jcmVkZW50aWFsID09PSBjcmVkZW50aWFsKTtcblx0XHRcdFx0XHRpZihpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0cHJldmlvdXNbaWR4XS51cmxzLnB1c2godXJscyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHByZXZpb3VzLnB1c2goe3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzOiBbdXJsc119KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgVFVSTi9TVFVOIHNlcnZlcnMgdG8gdXNlIGZvciBJQ0UuIFRoaXMgbGlzdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBJQ0Ugc2VydmVycyBkZWNsYXJlZCBpbiB0aGUgbmFtZXNwYWNlICgqKl8vaWNlKiopLlxuXHQgKiBAdHlwZSB7SUNFU2VydmVyW119XG5cdCAqL1xuXHRnZXQgaWNlU2VydmVycygpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNlU2VydmVycyB8fCBbXG5cdFx0XHR7XG5cdFx0XHRcdHVzZXJuYW1lOiAnYWRtaW4nLFxuXHRcdFx0XHRjcmVkZW50aWFsOiAnd2ViY29tMTIzNCcsXG5cdFx0XHRcdHVybHM6IFtcblx0XHRcdFx0XHQndHVybnM6dHVybjEud2ViY29tLm9yYW5nZS5jb206NDQzJyxcblx0XHRcdFx0XHQndHVybjp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTo0NDM/dHJhbnNwb3J0PXRjcCcsXG5cdFx0XHRcdFx0J3R1cm46dHVybjEud2ViY29tLm9yYW5nZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwJ1xuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNldHMgY29uZmlndXJhdGlvbiB0byBkZWZhdWx0IHZhbHVlc1xuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRyZXNldCAoKSB7XG5cdFx0dGhpcy5hc3NpZ24oe1xuXHRcdFx0Y29uc3RyYWludHM6IG1lZGlhLmNvbnN0cmFpbnRzKCksXG5cdFx0XHRsb2dMZXZlbDogJ0VSUk9SJ1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Db25maWcuanMiLCJpbXBvcnQgU3RyZWFtVHlwZXMgZnJvbSAnLi4vLi4vZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL3V0aWwvTWVkaWEnO1xuaW1wb3J0IHtOT05FLCBDTE9TRUQsIENMT1NJTkcsIENPTk5FQ1RFRH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuXG5jb25zdCBfZmFjaW5nTW9kZXMgPSBbTWVkaWEuZmFjaW5nTW9kZS5VU0VSLCBNZWRpYS5mYWNpbmdNb2RlLkVOVklST05NRU5UXTtcblxuY29uc3QgX2dldENvbnN0cmFpbnRWYWx1ZSA9IChjb25zdHJhaW50cywgcHJvcCkgPT4ge1xuXHRyZXR1cm4gY29uc3RyYWludHNbcHJvcF0uZXhhY3QgfHwgY29uc3RyYWludHNbcHJvcF0uaWRlYWwgfHwgY29uc3RyYWludHNbcHJvcF07XG59O1xuXG5jb25zdCBfc2V0Q29uc3RyYWluVmFsdWUgPSAoY29uc3RyYWludHMsIHByb3AsIG90aGVyLCB2YWx1ZSkgPT4ge1xuXHRjb25zdHJhaW50c1twcm9wXSA9IHtleGFjdDogdmFsdWV9O1xuXHRkZWxldGUgY29uc3RyYWludHNbb3RoZXJdO1xufTtcblxuLyoqXG4gKiBUaGUgbG9jYWwgc3RyZWFtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsIHtcblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKHZhbHVlcykge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhlIHJvb20gdGhlIHN0cmVhbSBpcyBwdWJsaXNoZWQgaW5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbUlkID0gdmFsdWVzLnJvb21JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoaXMgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIGlmIGEgdHJhY2sgaXMgbXV0ZWRcblx0XHQgKiBAdHlwZSB7e2F1ZGlvOiBib29sZWFuLCB2aWRlbzogYm9vbGVhbn19XG5cdFx0ICovXG5cdFx0dGhpcy5tdXRlZCA9IE9iamVjdC5hc3NpZ24oe2F1ZGlvOiBmYWxzZSwgdmlkZW86IGZhbHNlfSwgdmFsdWVzLm11dGVkKTtcblx0XHQvKipcblx0XHQgKiBUaGUgbG9jYWwgRE9NIGNvbnRhaW5lciBlbGVtZW50IHdoZXJlIHRoZSB7QGxpbmsgTG9jYWx+bWVkaWF9IGlzIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHQgICovXG5cdFx0dGhpcy5jb250YWluZXIgPSB2YWx1ZXMuY29udGFpbmVyIHx8IGNhY2hlLmNvbmZpZy5sb2NhbFN0cmVhbUNvbnRhaW5lcjtcblx0XHQvKipcblx0ICAqIFRoZSBsb2NhbCBET00gbWVkaWEgZWxlbWVudCB3aGVyZSB0aGUge0BsaW5rIExvY2Fsfm1lZGlhfSBpcyBkaXNwbGF5ZWRcblx0ICAqIEB0eXBlIHtFbGVtZW50fVxuXHQgICovXG5cdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIHRoZSBQZWVyQ29ubmVjdGlvbnMgYXNzb2NpYXRlZCB0byB0aGlzIGxvY2FsIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtQZWVyQ29ubmVjdGlvbltdfVxuXHRcdCAqL1xuXHRcdHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgc3RyZWFtIHN0YXR1c1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSBOT05FO1xuXHRcdC8qKlxuXHRcdCAqIGlzIHRoZSB2aWRlbyBpcyBsb2FkZWQgaW50IHRoZSBsb2NhbCBET00gbWVkaWEgZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuaXNWaWRlb0xvYWRlZCA9IGZhbHNlO1xuXHRcdC8qKlxuXHRcdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IHN0cmluZywgdmlkZW86IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5faW5wdXRzID0ge307XG5cblx0XHQvLyBTZXQgY29uc3RyYWludHNcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gdmFsdWVzLmNvbnN0cmFpbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEBwYXJhbSB7TWVkaWFDb25zdHJhaW50c30gY29uc3RyYWludHNcblx0ICovXG5cdHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuXHRcdGNvbnN0XG5cdFx0XHR2YWx1ZXMgPSBjb25zdHJhaW50cyB8fCBjYWNoZS5jb25maWcuY29uc3RyYWludHMsXG5cdFx0XHRkZWZhdWx0Q29uc3RyYWludHMgPSBNZWRpYS5jb25zdHJhaW50cygpO1xuXHRcdFsnYXVkaW8nLCAndmlkZW8nXS5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0aWYoIX50aGlzLnR5cGUuaW5kZXhPZih0eXBlKSkge1xuXHRcdFx0XHR2YWx1ZXNbdHlwZV0gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZighdmFsdWVzW3R5cGVdKXtcblx0XHRcdFx0dmFsdWVzW3R5cGVdID0gZGVmYXVsdENvbnN0cmFpbnRzW3R5cGVdO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsdWVzW3R5cGVdLmRldmljZUlkIHx8IHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlKSB7XG5cdFx0XHRcdHRoaXMuX2lucHV0c1t0eXBlXSA9IF9nZXRDb25zdHJhaW50VmFsdWUoXG5cdFx0XHRcdFx0dmFsdWVzW3R5cGVdLFxuXHRcdFx0XHRcdHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlID8gJ2ZhY2luZ01vZGUnIDogJ2RldmljZUlkJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdExvZy5kKCdMb2NhbH5zZXQjY29udHJhaW50cycsIHZhbHVlcyk7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbnN0cmFpbnRzID0gdmFsdWVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEB0eXBlIHtNZWRpYUNvbnN0cmFpbnRzfVxuXHQgKi9cblx0Z2V0IGNvbnN0cmFpbnRzKCkge1xuXHRcdHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBzdHJlYW0gY29uc3RyYWludHMgYW5kIHJldHJpZXZlIHRoZSBuZXcgTWVkaWFTdHJlYW1cblx0ICogQHBhcmFtIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHsqfFByb21pc2UuPFRSZXN1bHQ+fVxuXHQgKi9cblx0dXBkYXRlQ29uc3RyYWludHMoY29uc3RyYWludHMpIHtcblx0XHRMb2cuZCgnTG9jYWx+dXBkYXRlQ29uc3RyYWludHMnLCBjb25zdHJhaW50cyk7XG5cdFx0dGhpcy5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh0aGlzLmNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4obWVkaWEgPT4ge1xuXHRcdFx0XHRbJ2F1ZGlvJywgJ3ZpZGVvJ10uZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRjb25zdCBjb25zdHJhaW50c1ZhbHVlID0gdGhpcy5jb25zdHJhaW50c1traW5kXTtcblx0XHRcdFx0XHRpZihjb25zdHJhaW50c1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29uc3RyYWludHNWYWx1ZS5kZXZpY2VJZCB8fCBjb25zdHJhaW50c1ZhbHVlLmZhY2luZ01vZGUpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gX2dldENvbnN0cmFpbnRWYWx1ZShcblx0XHRcdFx0XHRcdFx0XHRjb25zdHJhaW50c1ZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0cmFpbnRzVmFsdWUuZmFjaW5nTW9kZSA/ICdmYWNpbmdNb2RlJyA6ICdkZXZpY2VJZCdcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLm1lZGlhID0gbWVkaWE7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYXNzb2NpYXRlZCBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRzZXQgbWVkaWEgKG1lZGlhU3RyZWFtKSB7XG5cdFx0aWYobWVkaWFTdHJlYW0pIHtcblx0XHRcdGlmKCEobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbWVkaWEgTVVTVCBiZSBhIE1lZGlhU3RyZWFtJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNoZWNrRGV2aWNlcyA9IHt9O1xuXHRcdFx0bWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB7XG5cdFx0XHRcdC8vIFJlc2V0IG11dGVcblx0XHRcdFx0dHJhY2suZW5hYmxlZCA9ICF0aGlzLm11dGVkW3RyYWNrLmtpbmRdO1xuXHRcdFx0XHQvLyBHZXQgZGV2aWNlIGxhYmVsXG5cdFx0XHRcdGlmKCF0aGlzLl9pbnB1dHNbdHJhY2sua2luZF0pIHtcblx0XHRcdFx0XHRjaGVja0RldmljZXNbdHJhY2sua2luZF0gPSB0cmFjay5sYWJlbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBUcnkgdG8gZ2V0IGRldmljZUlkIGZyb20gbGFiZWxcblx0XHRcdGlmKE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykubGVuZ3RoKSB7XG5cdFx0XHRcdE1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykuZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRcdGlmKGRldmljZXNbYCR7a2luZH1pbnB1dGBdKXtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGV2aWNlSWRzID0gZGV2aWNlc1tgJHtraW5kfWlucHV0YF1cblx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UubGFiZWwubGVuZ3RoICYmIGRldmljZS5sYWJlbCA9PT0gY2hlY2tEZXZpY2VzW2tpbmRdKTtcblx0XHRcdFx0XHRcdFx0aWYoZGV2aWNlSWRzLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy5faW5wdXRzW2tpbmRdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gZGV2aWNlSWRzWzBdLmRldmljZUlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChkZXZpY2VJZHMubGVuZ3RoID09PSAwXG5cdFx0XHRcdFx0XHRcdFx0JiYgZGV2aWNlc1tgJHtraW5kfWlucHV0YF1bMF0ubGFiZWwgPT09ICcnXG5cdFx0XHRcdFx0XHRcdFx0JiYgIXRoaXMuX2lucHV0c1traW5kXSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGZyb20gYSB3ZWJ2aWV3LCB0aGUgbGFiZWwgaXMgbm90IGRlbGl2ZXJlZFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2lucHV0c1traW5kXSA9IGRldmljZXNbYCR7a2luZH1pbnB1dGBdWzBdLmRldmljZUlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGlzcGxheVxuXHRcdFx0dGhpcy5ub2RlID0gTWVkaWEuYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5ub2RlLCAwKTtcblx0XHRcdHRoaXMubm9kZS5vbmxvYWRlZGRhdGEgPSAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaXNWaWRlb0xvYWRlZCA9IHRydWU7XG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBDT05ORUNURUQ7XG5cdFx0XHRMb2cuZCgnTG9jYWx+c2V0IG1lZGlhJywge21lZGlhU3RyZWFtfSwgdGhpcy5ub2RlKTtcblx0XHRcdC8vIFJlbmVnb3RpYXRlXG5cdFx0XHR0aGlzLnBlZXJDb25uZWN0aW9ucy5mb3JFYWNoKHBlZXJDb25uZWN0aW9uID0+IHBlZXJDb25uZWN0aW9uLnJlbmVnb3RpYXRlKHRoaXMuX21lZGlhLCBtZWRpYVN0cmVhbSkpO1xuXHRcdH0gZWxzZSBpZih0aGlzLm1lZGlhICYmICFtZWRpYVN0cmVhbSkge1xuXHRcdFx0Ly8gUmVtb3ZlIG5vZGVcblx0XHRcdHRoaXMubm9kZS5zcmNPYmplY3QgPSBudWxsO1xuXHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdHRoaXMubm9kZSA9IG51bGw7XG5cdFx0XHQvLyBTdG9wIHN0cmVhbVxuXHRcdFx0dGhpcy5tZWRpYS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG5cdFx0XHQvLyBDbG9zZSBQZWVyQ29ubmVjdGlvbnNcblx0XHRcdHRoaXMucGVlckNvbm5lY3Rpb25zLmZvckVhY2gocGVlckNvbm5lY3Rpb24gPT4gcGVlckNvbm5lY3Rpb24uY2xvc2UoKSk7XG5cdFx0fVxuXHRcdC8vIFNhdmVcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fbWVkaWEgPSBtZWRpYVN0cmVhbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYXNzb2NpYXRlZCBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRnZXQgbWVkaWEgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tZWRpYTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNdXRlIGEgdHJhY2sgb2YgYSBTdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0cmFjaz1BVURJT10gVGhlIHRyYWNrIHRvIG11dGUuIChBVURJTywgVklERU8sIEFVRElPX1ZJREVPKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0ZT10cnVlXSB0cnVlIGZvciBtdXRlICYgZmFsc2UgZm9yIHVuLW11dGVcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+bXV0ZSB2aWRlbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLm11dGUoUmVhY2gudC5WSURFTylcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+bXV0ZSBhdWRpbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLm11dGUoUmVhY2gudC5BVURJTylcblx0ICogLy8gb3Jcblx0ICogc3RyZWFtLm11dGUoKVxuXHQgKi9cblx0bXV0ZSh0cmFjayA9IFN0cmVhbVR5cGVzLkFVRElPLCBzdGF0ZSA9IHRydWUpIHtcblx0XHRMb2cuZCgnbXV0ZScsIHRyYWNrLCBzdGF0ZSk7XG5cdFx0bGV0IGF1ZGlvID0gdGhpcy5tdXRlZC5hdWRpbywgdmlkZW8gPSB0aGlzLm11dGVkLnZpZGVvLCB0cmFja3M7XG5cdFx0c3dpdGNoICh0cmFjaykge1xuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5BVURJTzpcblx0XHRcdFx0YXVkaW8gPSBzdGF0ZTtcblx0XHRcdFx0dHJhY2tzID0gdGhpcy5tZWRpYS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuVklERU86XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLlNDUkVFTl9TSEFSSU5HOlxuXHRcdFx0XHR2aWRlbyA9IHN0YXRlO1xuXHRcdFx0XHR0cmFja3MgPSB0aGlzLm1lZGlhLmdldFZpZGVvVHJhY2tzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5BVURJT19WSURFTzpcblx0XHRcdFx0YXVkaW8gPSBzdGF0ZTtcblx0XHRcdFx0dmlkZW8gPSBzdGF0ZTtcblx0XHRcdFx0dHJhY2tzID0gdGhpcy5tZWRpYS5nZXRUcmFja3MoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vIE11dGUgbWVkaWEgdHJhY2tzXG5cdFx0dHJhY2tzLmZvckVhY2godHJhY2sgPT4ge3RyYWNrLmVuYWJsZWQgPSAhc3RhdGU7fSk7XG5cdFx0Ly8gU2lnbmFsIHN1YnNjcmliZXJzXG5cdFx0dGhpcy5tdXRlZCA9IHthdWRpbywgdmlkZW99O1xuXHRcdERhdGFTeW5jLnNldChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9L211dGVkYCwgdGhpcy5tdXRlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVW4tbXV0ZSBhIHRyYWNrIG9mIGEgU3RyZWFtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHJhY2s9QVVESU9dIFRoZSB0cmFjayB0byBtdXRlLiAoQVVESU8sIFZJREVPLCBBVURJT19WSURFTylcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+VW4tbXV0ZSB2aWRlbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLnVuTXV0ZShSZWFjaC50LlZJREVPKVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Vbi1tdXRlIGF1ZGlvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0udW5NdXRlKFJlYWNoLnQuQVVESU8pXG5cdCAqIC8vIG9yXG5cdCAqIHN0cmVhbS51bk11dGUoKVxuXHQgKi9cblx0dW5NdXRlKHRyYWNrKSB7XG5cdFx0dGhpcy5tdXRlKHRyYWNrLCBmYWxzZSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBzdHJlYW0gZm9yIHB1Ymxpc2hlZCBsaXN0LCBjbG9zZXMgYXNzb2NpYXRlZCBQZWVyQ29ubmVjdGlvbnMgYW5kIHN0b3BzIGN1cnJlbnQgTWVkaWFTdHJlYW1cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRpZighfltDTE9TRUQsIENMT1NJTkddLmluZGV4T2YodGhpcy5zdGF0dXMpKSB7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IENMT1NJTkc7XG5cdFx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBTdWJzY3JpYmVyc1xuXHRcdFx0Y29uc3QgcGF0aCA9IGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9YDtcblx0XHRcdERhdGFTeW5jLm9mZihwYXRoLCAnY2hpbGRfYWRkZWQnKTtcblx0XHRcdERhdGFTeW5jLm9mZihwYXRoLCAnY2hpbGRfcmVtb3ZlZCcpO1xuXHRcdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdHNcblx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCkuY2FuY2VsKCk7XG5cdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH1gKS5jYW5jZWwoKTtcblx0XHRcdC8vIFJlbW92ZSBzdWJzY3JpYmVyc1xuXHRcdFx0RGF0YVN5bmMucmVtb3ZlKHBhdGgpO1xuXHRcdFx0Ly8gUmVtb3ZlIHN0cmVhbVxuXHRcdFx0RGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gKTtcblx0XHRcdHRoaXMubWVkaWEgPSBudWxsO1xuXHRcdFx0Ly8gQ2xvc2Vcblx0XHRcdHRoaXMuc3RhdHVzID0gQ0xPU0VEO1xuXHRcdH1cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RhdHVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTd2l0Y2ggdmlkZW8gaW5wdXQgZGV2aWNlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZGV2aWNlSWRdIEEgdmlkZW8gaW5wdXQgZGV2aWNlIElkIG9yIHRoZSBgZmFjaW5nTW9kZWAgdmFsdWVcblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHN3aXRjaENhbWVyYShkZXZpY2VJZCkge1xuXHRcdHJldHVybiB0aGlzLl9zd2l0Y2hEZXZpY2UoU3RyZWFtVHlwZXMuVklERU8sIGRldmljZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTd2l0Y2ggYXVkaW8gaW5wdXQgZGV2aWNlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZGV2aWNlSWRdIEEgYXVkaW8gaW5wdXQgZGV2aWNlIElkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG5cdCAqL1xuXHRzd2l0Y2hNaWNyb3Bob25lKGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N3aXRjaERldmljZShTdHJlYW1UeXBlcy5BVURJTywgZGV2aWNlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN3aXRjaCBpbnB1dCBkZXZpY2Vcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBraW5kIFRoZSBraW5kIG9mIGRldmljZSB0byBzd2l0Y2hcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtkZXZpY2VJZF0gQW4gaW5wdXQgZGV2aWNlIGlkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG4gICAgICovXG5cdF9zd2l0Y2hEZXZpY2Uoa2luZCwgZGV2aWNlSWQpIHtcblx0XHRMb2cuZCgnTG9jYWx+X3N3aXRjaERldmljZScsIGtpbmQsIGRldmljZUlkKTtcblx0XHRpZih0aGlzLm1lZGlhLmdldFRyYWNrcygpLnNvbWUodHJhY2sgPT4gdHJhY2sua2luZCA9PT0ga2luZCkpIHtcblx0XHRcdGxldCBuZXh0ID0gUHJvbWlzZS5yZXNvbHZlKGRldmljZUlkKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRNb2RlSWR4ID0gX2ZhY2luZ01vZGVzLmluZGV4T2YodGhpcy5faW5wdXRzW2tpbmRdKTtcblx0XHRcdGlmKCFkZXZpY2VJZCAmJiAhIX5jdXJyZW50TW9kZUlkeCkge1xuXHRcdFx0XHQvLyBMb29wIGZhY2luZ01vZGVzXG5cdFx0XHRcdG5leHQgPSBQcm9taXNlLnJlc29sdmUoX2ZhY2luZ01vZGVzWyhjdXJyZW50TW9kZUlkeCArIDEpICUgX2ZhY2luZ01vZGVzLmxlbmd0aF0pO1xuXHRcdFx0fSBlbHNlIGlmKCF+X2ZhY2luZ01vZGVzLmluZGV4T2YoZGV2aWNlSWQpKSB7XG5cdFx0XHRcdC8vIExvb3AgZGV2aWNlSWRzXG5cdFx0XHRcdG5leHQgPSBNZWRpYS5kZXZpY2VzKClcblx0XHRcdFx0XHQudGhlbihkID0+IHtcblx0XHRcdFx0XHRcdC8vIGRldmljZXMgSURzXG5cdFx0XHRcdFx0XHRjb25zdCBkZXZpY2VzID0gZFtgJHtraW5kfWlucHV0YF0ubWFwKG1lZGlhRGV2aWNlID0+IG1lZGlhRGV2aWNlLmRldmljZUlkKTtcblx0XHRcdFx0XHRcdC8vIFNvcnQgdG8gZW5zdXJlIHNhbWUgb3JkZXJcblx0XHRcdFx0XHRcdGRldmljZXMuc29ydCgpO1xuXHRcdFx0XHRcdFx0Ly8gTmV3IGRldmljZVxuXHRcdFx0XHRcdFx0bGV0IG5leHREZXZpY2UgPSBkZXZpY2VJZDtcblx0XHRcdFx0XHRcdGlmKGRldmljZUlkICYmICFkZXZpY2VzLnNvbWUoZGV2aWNlID0+IGRldmljZSA9PT0gZGV2aWNlSWQpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYFVua25vd24gJHtraW5kfSBkZXZpY2VgKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZighZGV2aWNlSWQgJiYgZGV2aWNlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBpZHggPSB0aGlzLl9pbnB1dHNba2luZF0gPyBkZXZpY2VzLmZpbmRJbmRleCh2ID0+IHYgPT09IHRoaXMuX2lucHV0c1traW5kXSwgdGhpcykgOiAwO1xuXHRcdFx0XHRcdFx0XHRuZXh0RGV2aWNlID0gZGV2aWNlc1srK2lkeCAlIGRldmljZXMubGVuZ3RoXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBuZXh0RGV2aWNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV4dCA9IFByb21pc2UucmVzb2x2ZShkZXZpY2VJZCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXh0XG5cdFx0XHRcdC50aGVuKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0aWYodGhpcy5faW5wdXRzW2tpbmRdICE9PSBkZXZpY2UpIHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSB2aWRlbyBzdHJlYW1zXG5cdFx0XHRcdFx0XHR0aGlzLl9pbnB1dHNba2luZF0gPSBkZXZpY2U7XG5cdFx0XHRcdFx0XHQvLyBTdG9wIHRyYWNrc1xuXHRcdFx0XHRcdFx0dGhpcy5tZWRpYS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgY29uc3RyYWludHNcblx0XHRcdFx0XHRcdGNvbnN0IGNvbnN0cmFpbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25zdHJhaW50cyk7XG5cdFx0XHRcdFx0XHRsZXQgcHJvcHMgPSBbJ2ZhY2luZ01vZGUnLCAnZGV2aWNlSWQnXTtcblx0XHRcdFx0XHRcdGlmKCF+X2ZhY2luZ01vZGVzLmluZGV4T2YoZGV2aWNlKSkge1xuXHRcdFx0XHRcdFx0XHRwcm9wcyA9IHByb3BzLnJldmVyc2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdF9zZXRDb25zdHJhaW5WYWx1ZShjb25zdHJhaW50c1traW5kXSwgcHJvcHNbMF0sIHByb3BzWzFdLCBkZXZpY2UpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2Fsfl9zd2l0Y2hEZXZpY2UnLCBraW5kLCBjb25zdHJhaW50cyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy51cGRhdGVDb25zdHJhaW50cyhjb25zdHJhaW50cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgQ3VycmVudCBzdHJlYW0gZG9lcyBub3QgY29udGFpbiBhICR7a2luZH0gdHJhY2tgKSk7XG5cdH1cblx0LyoqXG5cdCAqIFB1Ymxpc2ggYSBsb2NhbCBzdHJlYW1cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJvb21JZCBUaGUgcm9vbSBJZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgc3RyZWFtIHR5cGUsIHNlZSB7QGxpbmsgU3RyZWFtVHlwZXN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcblx0ICogQHBhcmFtIHs/RWxlbWVudH0gY29udGFpbmVyIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uXG5cdCAqIEBwYXJhbSB7P01lZGlhU3RyZWFtQ29uc3RyYWludHN9IFtjb25zdHJhaW50c10gVGhlIHN0cmVhbSBjb25zdHJhaW50cy4gSWYgbm90IGRlZmluZWQgdGhlIGNvbnN0cmFpbnRzIGRlZmluZWQgaW4gUmVhY2hDb25maWcgd2lsbCBiZSB1c2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c3RhdGljIHNoYXJlKHJvb21JZCwgdHlwZSwgY29udGFpbmVyLCBjb25zdHJhaW50cykge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gc2hhcmUgYSBzdHJlYW0uJykpO1xuXHRcdH1cblx0XHRjb25zdCBzdHJlYW1NZXRhRGF0YSA9IHtcblx0XHRcdFx0ZnJvbTogY2FjaGUudXNlci51aWQsXG5cdFx0XHRcdGRldmljZTogY2FjaGUuZGV2aWNlLFxuXHRcdFx0XHR0eXBlXG5cdFx0XHR9LFxuXHRcdFx0c2hhcmVkU3RyZWFtID0gbmV3IExvY2FsKE9iamVjdC5hc3NpZ24oe3Jvb21JZCwgY29uc3RyYWludHMsIGNvbnRhaW5lcn0sIHN0cmVhbU1ldGFEYXRhKSk7XG5cdFx0TG9nLmQoJ0xvY2FsfnNoYXJlJywge3NoYXJlZFN0cmVhbX0pO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShzaGFyZWRTdHJlYW0uY29uc3RyYWludHMpXG5cdFx0XHQudGhlbihtZWRpYSA9PiB7XG5cdFx0XHRcdHNoYXJlZFN0cmVhbS5tZWRpYSA9IG1lZGlhO1xuXHRcdFx0fSlcblx0XHRcdC8vIEdvdCBNZWRpYVN0cmVhbSwgcHVibGlzaCBpdFxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMucHVzaChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtc2AsIHN0cmVhbU1ldGFEYXRhKSlcblx0XHRcdC50aGVuKHN0cmVhbVJlZiA9PiB7XG5cdFx0XHRcdHNoYXJlZFN0cmVhbS51aWQgPSBzdHJlYW1SZWYubmFtZSgpO1xuXHRcdFx0XHRpZiAoL3ZpZGVvL2kudGVzdChzaGFyZWRTdHJlYW0udHlwZSkpIHtcblx0XHRcdFx0XHRpZiAoc2hhcmVkU3RyZWFtLmlzVmlkZW9Mb2FkZWQpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNoYXJlZFN0cmVhbS5ub2RlLm9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzdHJlYW1TaXplID0ge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoL3ZpZGVvL2kudGVzdChzaGFyZWRTdHJlYW0udHlwZSkpIHtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChzaGFyZWRTdHJlYW0ubm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb0hlaWdodCxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9XaWR0aCxcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3RyZWFtUmVmLnVwZGF0ZShzdHJlYW1TaXplKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU2F2ZSBzaGFyZWRTdHJlYW1cblx0XHRcdFx0Y2FjaGUuc3RyZWFtcy5zaGFyZWRbc2hhcmVkU3RyZWFtLnVpZF0gPSBzaGFyZWRTdHJlYW07XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdHJlYW1zLyR7c2hhcmVkU3RyZWFtLnVpZH1gKS5yZW1vdmUoKTtcblx0XHRcdFx0Ly8gUmVtb3ZlIHNoYXJlZCBzdHJlYW0gb24gRGlzY29ubmVjdFxuXHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHtyb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gKS5yZW1vdmUoKTtcblx0XHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHN1YnNjcmliZXJzXG5cdFx0XHRcdGNvbnN0XG5cdFx0XHRcdFx0cGF0aCA9IGBfL3Jvb21zLyR7c2hhcmVkU3RyZWFtLnJvb21JZH0vc3Vic2NyaWJlcnMvJHtzaGFyZWRTdHJlYW0udWlkfWAsXG5cdFx0XHRcdFx0dmFsdWUgPSBzbmFwRGF0YSA9PiBPYmplY3QuYXNzaWduKHtkZXZpY2U6IHNuYXBEYXRhLm5hbWUoKX0sIHNuYXBEYXRhLnZhbCgpIHx8IHt9KTtcblx0XHRcdFx0RGF0YVN5bmMub24ocGF0aCwgJ2NoaWxkX2FkZGVkJyxcblx0XHRcdFx0XHRzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gdmFsdWUoc25hcERhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2FsfnN1YnNjcmliZWQnLCBzdWJzY3JpYmVyKTtcblx0XHRcdFx0XHRcdGNhY2hlLnBlZXJDb25uZWN0aW9ucy5vZmZlcihzaGFyZWRTdHJlYW0sIHN1YnNjcmliZXIpXG5cdFx0XHRcdFx0XHRcdC50aGVuKHBjID0+IHNoYXJlZFN0cmVhbS5wZWVyQ29ubmVjdGlvbnMucHVzaChwYykpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0TG9nLmUuYmluZChMb2cpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9yZW1vdmVkJyxcblx0XHRcdFx0XHRzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gdmFsdWUoc25hcERhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2FsfnVuLXN1YnNjcmliZWQnLCBzdWJzY3JpYmVyKTtcblx0XHRcdFx0XHRcdGNvbnN0IGNsb3NlZFBDID0gY2FjaGUucGVlckNvbm5lY3Rpb25zLmNsb3NlKHNoYXJlZFN0cmVhbS51aWQsIHN1YnNjcmliZXIuZGV2aWNlKTtcblx0XHRcdFx0XHRcdHNoYXJlZFN0cmVhbS5wZWVyQ29ubmVjdGlvbnMgPSBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLmZpbHRlcihwYyA9PiBwYyAhPT0gY2xvc2VkUEMpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0TG9nLmUuYmluZChMb2cpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdExvZy5kKCdMb2NhbH5zaGFyZWQnLCB7c2hhcmVkU3RyZWFtfSk7XG5cdFx0XHRcdHJldHVybiBzaGFyZWRTdHJlYW07XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBsb2NhbCBzdHJlYW1cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJvb21JZCBUaGUgcm9vbSBJZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgc3RyZWFtIHR5cGUsIHNlZSB7QGxpbmsgU3RyZWFtVHlwZXN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcblx0ICogQHBhcmFtIHs/RWxlbWVudH0gY29udGFpbmVyIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uXG5cdCAqIEBwYXJhbSB7P01lZGlhU3RyZWFtQ29uc3RyYWludHN9IFtjb25zdHJhaW50c10gVGhlIHN0cmVhbSBjb25zdHJhaW50cy4gSWYgbm90IGRlZmluZWQgdGhlIGNvbnN0cmFpbnRzIGRlZmluZWQgaW4gUmVhY2hDb25maWcgd2lsbCBiZSB1c2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c3RhdGljIGdldExvY2FsVmlkZW8ocm9vbUlkLCB0eXBlLCBjb250YWluZXIsIGNvbnN0cmFpbnRzKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzaGFyZSBhIHN0cmVhbS4nKSk7XG5cdFx0fVxuXHRcdGNvbnN0IHN0cmVhbU1ldGFEYXRhID0ge1xuXHRcdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdFx0ZGV2aWNlOiBjYWNoZS5kZXZpY2UsXG5cdFx0XHRcdHVzZXJBZ2VudDogY2FjaGUudXNlckFnZW50LFxuXHRcdFx0XHR0eXBlXG5cdFx0XHR9LFxuXHRcdFx0c2hhcmVkU3RyZWFtID0gbmV3IExvY2FsKE9iamVjdC5hc3NpZ24oe3Jvb21JZCwgY29uc3RyYWludHMsIGNvbnRhaW5lcn0sIHN0cmVhbU1ldGFEYXRhKSk7XG5cdFx0c2hhcmVkU3RyZWFtLnN0cmVhbU1ldGFEYXRhID0gc3RyZWFtTWV0YURhdGE7XG5cdFx0TG9nLmQoJ0xvY2FsfmdldExvY2FsVmlkZW8nLCB7c2hhcmVkU3RyZWFtfSk7XG5cdFx0cmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHNoYXJlZFN0cmVhbS5jb25zdHJhaW50cylcblx0XHRcdC50aGVuKG1lZGlhID0+IHtcblx0XHRcdFx0c2hhcmVkU3RyZWFtLm1lZGlhID0gbWVkaWE7XG5cdFx0XHRcdHJldHVybiBzaGFyZWRTdHJlYW07XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQdWJsaXNoIGEgbG9jYWwgc3RyZWFtXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtMb2NhbH1cblx0ICovXG5cdHN0YXRpYyBwdWJsaXNoKHNoYXJlZFN0cmVhbSkge1xuXHRcdExvZy5kKCdMb2NhbH5wdWJsaXNoJyk7XG5cdFx0Y29uc3Qgcm9vbUlkID0gc2hhcmVkU3RyZWFtLnJvb21JZDtcblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtc2AsIHNoYXJlZFN0cmVhbS5zdHJlYW1NZXRhRGF0YSlcblx0XHRcdC50aGVuKHN0cmVhbVJlZiA9PiB7XG5cdFx0XHRcdHNoYXJlZFN0cmVhbS51aWQgPSBzdHJlYW1SZWYubmFtZSgpO1xuXHRcdFx0XHRpZiAoc2hhcmVkU3RyZWFtLmlzVmlkZW9Mb2FkZWQpIHtcblx0XHRcdFx0XHRjb25zdCBzdHJlYW1TaXplID0ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb0hlaWdodCxcblx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0c3RyZWFtUmVmLnVwZGF0ZShzdHJlYW1TaXplKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ubm9kZS5vbmxvYWRlZGRhdGEgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2hhcmVkU3RyZWFtLm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3RyZWFtU2l6ZSA9IHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb0hlaWdodCxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0c3RyZWFtUmVmLnVwZGF0ZShzdHJlYW1TaXplKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdFx0Ly8gU2F2ZSBzaGFyZWRTdHJlYW1cblx0XHRcdFx0Y2FjaGUuc3RyZWFtcy5zaGFyZWRbc2hhcmVkU3RyZWFtLnVpZF0gPSBzaGFyZWRTdHJlYW07XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdHJlYW1zLyR7c2hhcmVkU3RyZWFtLnVpZH1gKS5yZW1vdmUoKTtcblx0XHRcdFx0Ly8gUmVtb3ZlIHNoYXJlZCBzdHJlYW0gb24gRGlzY29ubmVjdFxuXHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHtyb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gKS5yZW1vdmUoKTtcblx0XHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHN1YnNjcmliZXJzXG5cdFx0XHRcdGNvbnN0XG5cdFx0XHRcdFx0cGF0aCA9IGBfL3Jvb21zLyR7c2hhcmVkU3RyZWFtLnJvb21JZH0vc3Vic2NyaWJlcnMvJHtzaGFyZWRTdHJlYW0udWlkfWAsXG5cdFx0XHRcdFx0dmFsdWUgPSBzbmFwRGF0YSA9PiBPYmplY3QuYXNzaWduKHtkZXZpY2U6IHNuYXBEYXRhLm5hbWUoKX0sIHNuYXBEYXRhLnZhbCgpIHx8IHt9KTtcblx0XHRcdFx0RGF0YVN5bmMub24ocGF0aCwgJ2NoaWxkX2FkZGVkJyxcblx0XHRcdFx0XHRzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gdmFsdWUoc25hcERhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2FsfnN1YnNjcmliZWQnLCBzdWJzY3JpYmVyKTtcblx0XHRcdFx0XHRcdGNhY2hlLnBlZXJDb25uZWN0aW9ucy5vZmZlcihzaGFyZWRTdHJlYW0sIHN1YnNjcmliZXIpXG5cdFx0XHRcdFx0XHRcdC50aGVuKHBjID0+IHNoYXJlZFN0cmVhbS5wZWVyQ29ubmVjdGlvbnMucHVzaChwYykpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0TG9nLmUuYmluZChMb2cpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9yZW1vdmVkJyxcblx0XHRcdFx0XHRzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gdmFsdWUoc25hcERhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2FsfnVuLXN1YnNjcmliZWQnLCBzdWJzY3JpYmVyKTtcblx0XHRcdFx0XHRcdGNvbnN0IGNsb3NlZFBDID0gY2FjaGUucGVlckNvbm5lY3Rpb25zLmNsb3NlKHNoYXJlZFN0cmVhbS51aWQsIHN1YnNjcmliZXIuZGV2aWNlKTtcblx0XHRcdFx0XHRcdHNoYXJlZFN0cmVhbS5wZWVyQ29ubmVjdGlvbnMgPSBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLmZpbHRlcihwYyA9PiBwYyAhPT0gY2xvc2VkUEMpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0TG9nLmUuYmluZChMb2cpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdExvZy5kKCdMb2NhbH5zaGFyZWQnLCB7c2hhcmVkU3RyZWFtfSk7XG5cdFx0XHRcdHJldHVybiBzaGFyZWRTdHJlYW07XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvc3RyZWFtL0xvY2FsLmpzIiwiaW1wb3J0IFJlbW90ZSBmcm9tICcuL1JlbW90ZSc7XG5cbi8qKlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZWFtTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqXG5cdFx0ICogU2hhcmVkIGxvY2FsIHN0cmVhbXNcblx0XHQgKiBAdHlwZSB7eyo6IExvY2FsfX1cblx0XHQgKi9cblx0XHR0aGlzLnNoYXJlZCA9IHt9O1xuXHRcdC8qKlxuXHRcdCAqIFN1YnNjcmliZWQgcmVtb3RlIHN0cmVhbXNcblx0XHQgKiBAdHlwZSB7eyo6IFJlbW90ZX19XG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdGUgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBSZW1vdGUgc3RyZWFtIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3RyZWFtRGF0YVxuXHQgKiBAcmV0dXJucyB7UmVtb3RlfVxuXHQgKi9cblx0Z2V0UmVtb3RlKHN0cmVhbURhdGEpIHtcblx0XHRsZXQgcmVtb3RlU3RyZWFtID0gdGhpcy5yZW1vdGVbc3RyZWFtRGF0YS51aWRdO1xuXHRcdGlmKHJlbW90ZVN0cmVhbSkge1xuXHRcdFx0cmVtb3RlU3RyZWFtLnVwZGF0ZShzdHJlYW1EYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdGVbc3RyZWFtRGF0YS51aWRdID0gcmVtb3RlU3RyZWFtID0gbmV3IFJlbW90ZShzdHJlYW1EYXRhKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlbW90ZVN0cmVhbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBSZW1vdGUgc3RyZWFtIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3RyZWFtRGF0YVxuXHQgKiBAcmV0dXJucyB7UmVtb3RlfVxuXHQgKi9cblx0Z2V0U2hhcmVkKHN0cmVhbURhdGEpIHtcblx0XHQvLyBUT0RPOiBJZiBpdCBkb2VzIG5vdCBleGlzdHMgbG9jYWxseSBhcyBpdCBzaG91bGQsIG1heWJlIHdlIHNob3VsZCByZW1vdmUgaXQgP1xuXHRcdHJldHVybiB0aGlzLnNoYXJlZFtzdHJlYW1EYXRhLnVpZF07XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvc3RyZWFtL1N0cmVhbU1hbmFnZXIuanMiLCIvKmdsb2JhbCBSVENQZWVyQ29ubmVjdGlvbiovXG4vKmdsb2JhbCBSVENSdHBTZW5kZXIqL1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi91dGlsL01lZGlhJztcbmltcG9ydCBEZXZpY2UgZnJvbSAnLi4vRGV2aWNlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IHtPUEVORUQsIENMT1NJTkcsIENMT1NFRH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL2FycmF5L2ZpbmQnO1xuXG5jb25zdCBEdGxzU3J0cEtleUFncmVlbWVudCA9IHtEdGxzU3J0cEtleUFncmVlbWVudDogdHJ1ZX07XG5jb25zdCBzZHBDb25zdHJhaW50cyA9IHJlY2VpdmUgPT4gKHtPZmZlclRvUmVjZWl2ZUF1ZGlvOiByZWNlaXZlLCBPZmZlclRvUmVjZWl2ZVZpZGVvOiByZWNlaXZlfSk7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGRpc2Nvbm5lY3RlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9ESVNDT05ORUNURUQgPSAnZGlzY29ubmVjdGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY29ubmVjdGVkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRD0gJ2Nvbm5lY3RlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNvbXBsZXRlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT01QTEVURUQgPSAnY29tcGxldGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2hlY2tpbmdcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkcgPSAnY2hlY2tpbmcnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBjbG9zZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEID0gJ2Nsb3NlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGZhaWxlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQgPSAnZmFpbGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogYW5vdGhlciBzdGF0dXNcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfT1RIRVI9ICdvdGhlcic7XG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuY29uc3QgX3RvSlNPTiA9IG8gPT4gby50b0pTT04gJiYgdHlwZW9mIG8udG9KU09OID09PSAnZnVuY3Rpb24nID8gby50b0pTT04oKSA6IG87XG4vKipcbiAqIFRoZSBQZWVyQ29ubmVjdGlvbi4gQSBQZWVyQ29ubmVjdGlvbiB3aWxsIG9ubHkgY29uY2VybiBvbmUgTWVkaWFTdHJlYW0uXG4gKiBAY2xhc3MgUGVlckNvbm5lY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVlckNvbm5lY3Rpb24ge1xuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YWNrSWQgVGhlIFdlYlJUQyBzdGFjayBJRFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyZWFtSWQgVGhlIFN0cmVhbSBVSURcblx0ICogQHBhcmFtIHtSZW1vdGV8e3RvOiBzdHJpbmd8ZnJvbTogc3RyaW5nLCBkZXZpY2U6c3RyaW5nfX0gcmVtb3RlIFRoZSByZW1vdGUgaW5mb3JtYXRpb25cblx0ICogQHBhcmFtIHtib29sZWFufSBwdWJsaXNoIFB1Ymxpc2ggb3IgU3Vic2NyaWJlID9cblx0ICovXG5cdGNvbnN0cnVjdG9yKHN0YWNrSWQsIHN0cmVhbUlkLCByZW1vdGUsIHB1Ymxpc2gpIHtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RhY2sgaWRlbnRpZmllci4gVXNlZCB0byBpZGVudGlmeSBleGNoYW5nZXMgYmV0d2VlbiAyIGRldmljZXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhY2tJZCA9IHN0YWNrSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHN0cmVhbSBpZC4gKE9uZSBzdHJlYW0gcGVyIFJUQ1BlZXJDb25uZWN0aW9uKVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdHJlYW1JZCA9IHN0cmVhbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByZW1vdGUgZGV2aWNlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJlbW90ZSA9IHJlbW90ZTtcblx0XHQvKipcblx0XHQgKiBwdWJsaXNoIDogYSBjcmVhdGVkIHBlZXIgY29ubmVjdGlvbiBvciBhIHJlbW90ZSBvbmVcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLnB1Ymxpc2ggPSBwdWJsaXNoO1xuXHRcdC8qKlxuXHRcdCAqIFBhdGggZm9yIGxvY2FsIHNpZ25hbGl6YXRpb25cblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2xvY2FsUGF0aCA9IGBfL3dlYnJ0Yy8ke3RoaXMuc3RhY2tJZH0vJHt0aGlzLnN0cmVhbUlkfS8ke2NhY2hlLmRldmljZX1gO1xuXHRcdC8qKlxuXHRcdCAqIFBhdGggZm9yIGxvY2FsIHNpZ25hbGl6YXRpb25cblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuX3JlbW90ZVBhdGggPSBgXy93ZWJydGMvJHt0aGlzLnN0YWNrSWR9LyR7dGhpcy5zdHJlYW1JZH0vJHt0aGlzLnJlbW90ZS5kZXZpY2V9YDtcblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgaWYgdGhlIFBlZXJDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkLiAoVXNlZnVsIGZvciByZW5lZ290aWF0aW9uKS5cblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLm5lZ290aWF0ZWQgPSBmYWxzZTtcblx0XHQvKipcblx0XHQgKiBUaGUgRE9NIGVsZW1lbnQgd2hlcmUgdGhlIHJlbW90ZSBNZWRpYVN0cmVhbSB3aWxsIGJlIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLm5vZGUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBET00gZWxlbWVudCBjb250YWluZyB0aGUgbWVkaWEgZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGFjdHVhbCBSVENQZWVyQ29ubmVjdGlvblxuXHRcdCAqIEB0eXBlIHtSVENQZWVyQ29ubmVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLnBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHRpY2VTZXJ2ZXJzOiBjYWNoZS5jb25maWcuaWNlU2VydmVyc1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3B0aW9uYWw6IFtEdGxzU3J0cEtleUFncmVlbWVudF0sXG5cdFx0XHRcdG1hbmRhdG9yeTogc2RwQ29uc3RyYWludHMoIXB1Ymxpc2gpXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQvLyBIYW5kbGUgSUNFIGNhbmRpZGF0ZXNcblx0XHR0aGlzLnBjLm9uaWNlY2FuZGlkYXRlID0gZSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMubmVnb3RpYXRlZCAmJiBlLmNhbmRpZGF0ZSkge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25pY2VjYW5kaWRhdGUnLCBlLmNhbmRpZGF0ZSk7XG5cdFx0XHRcdERhdGFTeW5jLnB1c2goYCR7dGhpcy5fbG9jYWxQYXRofS9pY2VgLCBfdG9KU09OKGUuY2FuZGlkYXRlKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR0aGlzLnBjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgdGhpcy5wYyk7XG5cdFx0XHRjb25zdCBpY2VDb25uZWN0aW9uU3RhdGUgPSB0aGlzLnBjLmljZUNvbm5lY3Rpb25TdGF0ZTtcblx0XHRcdHN3aXRjaCAoaWNlQ29ubmVjdGlvblN0YXRlKSB7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkc6XG5cdFx0XHRcdFx0Ly8gTm90aGluZyB0byBkbyB5ZXRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT05ORUNURUQ6XG5cdFx0XHRcdFx0dGhpcy5fYXR0YWNoU3RyZWFtKCk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEOlxuXHRcdFx0XHRcdHRoaXMuX3JlbW90ZUlDRUNhbmRpZGF0ZXMoZmFsc2UpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRDpcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQ6XG5cdFx0XHRcdFx0Ly8gTG9nLmUoJ1BlZXJDb25uZWN0aW9ufnN0YXRlRGlzY29ubmVjdGVkJywgJ0Rpc2Nvbm5lY3QgUGVlckNvbm5lY3Rpb24nKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGVlckNvbm5lY3Rpb25+c3RhdGVEaXNjb25uZWN0ZWQgRGlzY29ubmVjdCBQZWVyQ29ubmVjdGlvbicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRDpcblx0XHRcdFx0XHQvLyBMb2cuZCgnUGVlckNvbm5lY3Rpb25+c3RhdGVjbG9zZWQnLCAnQ2xvc2UgUGVlckNvbm5lY3Rpb24nKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGVlckNvbm5lY3Rpb25+c3RhdGVjbG9zZWQgQ2xvc2UgUGVlckNvbm5lY3Rpb24nKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5lZ290aWF0ZWQgPSB0aGlzLm5lZ290aWF0ZWQgfHwgdGhpcy5pc0Nvbm5lY3RlZDtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnLCB0aGlzLnBjLmljZUdhdGhlcmluZ1N0YXRlKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUGVlckNvbm5lY3Rpb24gc3RhdHVzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXR1cyA9IE9QRU5FRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgSUNFIENhbmRpZGF0ZXMgZGlzY292ZXJ5XG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxpc3RlbiBJbmRpY2F0ZXMgaWYgd2Ugc2hvdWxkIGxpc3RlbiB0byBuZXcgSUNFIGNhbmRpZGF0ZXNcblx0ICovXG5cdF9yZW1vdGVJQ0VDYW5kaWRhdGVzKGxpc3Rlbikge1xuXHRcdGNvbnN0XG5cdFx0XHRwYXRoID0gYCR7dGhpcy5fcmVtb3RlUGF0aH0vaWNlYCxcblx0XHRcdGV2ZW50ID0gJ2NoaWxkX2FkZGVkJztcblx0XHRpZihsaXN0ZW4pIHtcblx0XHRcdC8vIGRvbid0IGxpc3RlbiB0byBpY2UgY2FuZGlkYXRlcyBpZiBwYyBpcyBhbHJlYWR5IHVwIChyZW5lZ290aWF0aW9uKVxuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIHNuYXAgPT4ge1xuXHRcdFx0XHRjb25zdCBjYW5kaWRhdGUgPSBzbmFwLnZhbCgpO1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+YWRkSWNlQ2FuZGlkYXRlJywgY2FuZGlkYXRlKTtcblx0XHRcdFx0dGhpcy5wYy5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBdHRhY2ggdGhlIHJlbW90ZSBNZWRpYVN0cmVhbSB0byBhIG5vZGVcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfYXR0YWNoU3RyZWFtICgpIHtcblx0XHRpZih0aGlzLnJlbW90ZVN0cmVhbSAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBNZWRpYS5hdHRhY2hTdHJlYW0odGhpcy5yZW1vdGVTdHJlYW0sIHRoaXMuY29udGFpbmVyLCB0aGlzLm5vZGUpO1xuXHRcdFx0dGhpcy5ub2RlLm11dGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSByZW1vdGUgTWVkaWFTdHJlYW1cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHR5cGUge01lZGlhU3RyZWFtfVxuXHQgKi9cblx0c2V0IHJlbW90ZVN0cmVhbSAoc3RyZWFtKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3JlbW90ZVN0cmVhbSA9IHN0cmVhbTtcblx0XHR0aGlzLl9hdHRhY2hTdHJlYW0oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcmVtb3RlIE1lZGlhU3RyZWFtXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdGdldCByZW1vdGVTdHJlYW0gKCkge1xuXHRcdHJldHVybiB0aGlzLl9yZW1vdGVTdHJlYW07XG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIGlmIHRoZSBQZWVyQ29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBiYXNlZCBvbiBJQ0UgY29ubmVjdGlvbiBzdGF0ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc0Nvbm5lY3RlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGMgJiZcblx0XHRcdCEhfltcblx0XHRcdFx0SUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVELFxuXHRcdFx0XHRJQ0VfQ09OTkVDVElPTl9TVEFURV9DT01QTEVURUQsXG5cdFx0XHRcdElDRV9DT05ORUNUSU9OX1NUQVRFX09USEVSXG5cdFx0XHRdLmluZGV4T2YodGhpcy5wYy5pY2VDb25uZWN0aW9uU3RhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgUlRDUGVlckNvbm5lY3Rpb24gZm9yIHN1YnNjcmliZXJzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSBodG1sRWxlbWVudFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0YW5zd2VyKGh0bWxFbGVtZW50KSB7XG5cdFx0TG9nLmkoJ1BlZXJDb25uZWN0aW9ufmFuc3dlcicsIHtodG1sRWxlbWVudCwgcGVlckNvbm5lY3Rpb246IHRoaXN9KTtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGh0bWxFbGVtZW50O1xuXHRcdGlmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb250cmFjaycpKSB7XG5cdFx0XHR0aGlzLnBjLm9udHJhY2sgPSBlID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9udHJhY2snLCBlLnN0cmVhbXNbMF0pO1xuXHRcdFx0XHR0aGlzLnJlbW90ZVN0cmVhbSA9IGUuc3RyZWFtc1swXTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGMub25hZGRzdHJlYW0gPSBlID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uYWRkc3RyZWFtJywgZS5zdHJlYW0pO1xuXHRcdFx0XHR0aGlzLnJlbW90ZVN0cmVhbSA9IGUuc3RyZWFtO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBMaXN0ZW4gdG8gU0RQIG9mZmVyXG5cdFx0RGF0YVN5bmMub24oYCR7dGhpcy5fcmVtb3RlUGF0aH0vc2RwYCwgJ3ZhbHVlJywgc25hcCA9PiB7XG5cdFx0XHRjb25zdCBzZHBPZmZlciA9IHNuYXAudmFsKCk7XG5cdFx0XHQvLyBMb2cuZCgnT2ZmZXInLCBzZHBPZmZlcik7XG5cdFx0XHRpZihzZHBPZmZlciAhPSBudWxsKSB7XG5cdFx0XHRcdExvZy5kKGBQZWVyQ29ubmVjdGlvbn5vZmZlcmVkICR7c2RwT2ZmZXIuc2RwfWApO1xuXHRcdFx0XHR0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKHNkcE9mZmVyKVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IExvZy5kKCdQZWVyQ29ubmVjdGlvbn5hbnN3ZXIjcmVtb3RlRGVzY3JpcHRpb24nLCB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLnNkcCkpXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKC9eb2ZmZXIkLy50ZXN0KHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24udHlwZSkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucGMuY3JlYXRlQW5zd2VyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdTRFAgaXMgbm90IGFuIG9mZmVyJykpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oZGVzY3JpcHRpb24gPT4gdGhpcy5fc2V0UHJlZmVycmVkQ29kZWNzKGRlc2NyaXB0aW9uKSlcblx0XHRcdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pKVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5hbnN3ZXIjbG9jYWxTRFAnLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24uc2RwKTtcblx0XHRcdFx0XHRcdHRoaXMuX3JlbW90ZUlDRUNhbmRpZGF0ZXModHJ1ZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB0aGlzLl9zZW5kU2RwVG9SZW1vdGUoKSlcblx0XHRcdFx0XHQvLy5jYXRjaChMb2cucignUGVlckNvbm5lY3Rpb25+YW5zd3NlciNlcnJvcicpKTtcblx0XHRcdFx0XHQuY2F0Y2goKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFBlZXJDb25uZWN0aW9ufmFuc3dzZXIjZXJyb3IgJHtlfWApO1xuXHRcdFx0XHRcdFx0Ly8gdGhpcy5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0Y2FjaGUucGVlckNvbm5lY3Rpb25zLmNsb3NlKHRoaXMuc3RyZWFtSWQsIHRoaXMucmVtb3RlLmRldmljZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgUlRDUGVlckNvbm5lY3Rpb24gZm9yIHB1Ymxpc2hlcnNcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHN0cmVhbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0b2ZmZXIoc3RyZWFtKSB7XG5cdFx0TG9nLmkoJ1BlZXJDb25uZWN0aW9ufm9mZmVyJywge3N0cmVhbSwgcGVlckNvbm5lY3Rpb246IHRoaXN9KTtcblx0XHRsZXQgc2VuZFRpbWVvdXQ7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMucGMub25uZWdvdGlhdGlvbm5lZWRlZCA9ICgpID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9ubmVnb3RpYXRpb25uZWVkZWQnKTtcblx0XHRcdFx0Ly8gRGVib3VuY2Ugc2VuZCAocmVuZWdvdGlhdGlvbiB0cmlnZ2VycyBtdWx0aXBsZSBuZWdvdGlhdGlvbm5lZWRlZCBldmVudHMpXG5cdFx0XHRcdGlmKHNlbmRUaW1lb3V0KSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNlbmRUaW1lb3V0KTtcblx0XHRcdFx0XHRzZW5kVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZW5kVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5fc2VuZE9mZmVyKClcblx0XHRcdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0aGlzKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlcicsIGUpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgMjApO1xuXHRcdFx0fTtcblx0XHRcdERhdGFTeW5jLm9uKGAke3RoaXMuX3JlbW90ZVBhdGh9L3NkcGAsICd2YWx1ZScsIHNuYXAgPT4ge1xuXHRcdFx0XHRjb25zdCBzZHBBbnN3ZXIgPSBzbmFwLnZhbCgpO1xuXHRcdFx0XHRpZihzZHBBbnN3ZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRcdExvZy5kKGBQZWVyQ29ubmVjdGlvbn5vZmZlciNhbnN3ZXJlZCAke3NkcEFuc3dlci5zZHB9YCk7XG5cdFx0XHRcdFx0dGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHBBbnN3ZXIpXG5cdFx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlciNyZW1vdGVEZXNjcmlwdGlvbicsIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24uc2RwKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goTG9nLmUuYmluZChMb2csICdQZWVyQ29ubmVjdGlvbn5vZmZlciNyZW1vdGVEZXNjcmlwdGlvbicpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hbHRlclN0cmVhbShzdHJlYW0sICdhZGQnKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFZGl0cyB0aGUgU0RQIHRvIHNldCB0aGUgcHJlZmVycmVkIGF1ZGlvL3ZpZGVvIGNvZGVjXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2RwIFRoZSBzZHAgdG8gYmUgbW9kaWZpZWRcblx0ICogQHJldHVybnMge3N0cmluZ319XG5cdCovXG5cdC8qX2FkZFZQOENvZGVjKHNkcCkge1xuXHRcdGxldCBzZHByZXN1bHQgPSBzZHA7XG5cdFx0Ly8gTG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9hZGRWUDhDb2RlYycpO1xuXHRcdGlmIChzZHByZXN1bHQgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cblx0XHRjb25zdCBzZHBMaW5lcyA9IHNkcHJlc3VsdC5zcGxpdCgvXFxyP1xcbi8pO1xuXHRcdGNvbnN0IG1lZGlhcyA9IHthdWRpbzogW10sIHZpZGVvOiBbXX07XG5cdFx0bGV0IGN1cnJlbnQgPSBudWxsO1xuXHRcdGxldCB2cDhJblZpZGVvTGlzdCA9IGZhbHNlO1xuXHRcdGxldCBoMjY0SW5WaWRlb0xpc3QgPSBmYWxzZTtcblx0XHRsZXQgbGFzdEluZGV4ID0gMDtcblx0XHRsZXQgZmlyc3RJbmRleCA9IDA7XG5cdFx0Ly8gUGFyc2UgU0RQXG5cdFx0c2RwTGluZXMuZm9yRWFjaCgoc2RwTGluZSwgaSkgPT4ge1xuXHRcdFx0aWYoL15tPXZpZGVvLy50ZXN0KHNkcExpbmUpKSB7XG5cdFx0XHRcdGNvbnN0IGQgPSAvXm09KFxcdyspXFxzWzAtOVxcL10rXFxzW0EtWmEtejAtOVxcL10rXFxzKFswLTlcXHNdKykvLmV4ZWMoc2RwTGluZSk7XG5cdFx0XHRcdGN1cnJlbnQgPSB7IGZtdDogZFsyXS5zcGxpdCgvXFxzLyksIGluZGV4OiBpLCBjb2RlY3M6IFtdIH07XG5cdFx0XHRcdG1lZGlhc1tkWzFdXS5wdXNoKGN1cnJlbnQpO1xuXHRcdFx0XHRsYXN0SW5kZXggPSBjdXJyZW50LmZtdFtjdXJyZW50LmZtdC5sZW5ndGggLSAxXTtcblx0XHRcdFx0Zmlyc3RJbmRleCA9IGN1cnJlbnQuZm10WzBdO1xuXHRcdFx0fSBlbHNlIGlmKGN1cnJlbnQgJiYgL15hPXJ0cG1hcDovLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0Y29uc3QgYyA9IC9eYT1ydHBtYXA6KFxcZCspXFxzKFthLXpBLVowLTlcXC1cXC9dKykvLmV4ZWMoc2RwTGluZSk7XG5cdFx0XHRcdGlmKGMpIHtcblx0XHRcdFx0XHRjdXJyZW50LmNvZGVjcy5wdXNoKHsgaWQ6IGNbMV0sIG5hbWU6IGNbMl0sIGluZGV4OiBpIH0pO1xuXHRcdFx0XHRcdGlmIChjWzBdLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignVlA4JykgIT09IC0xKSB7IHZwOEluVmlkZW9MaXN0PXRydWU7IH1cblx0XHRcdFx0XHRpZiAoY1swXS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0gyNjQnKSAhPT0gLTEpIHsgaDI2NEluVmlkZW9MaXN0PXRydWU7IH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnN0IHZpZGVvSW5kZXggPSBtZWRpYXMudmlkZW9bMF0uaW5kZXg7XG5cdFx0aWYgKCF2cDhJblZpZGVvTGlzdCkge1xuXHRcdFx0Ly8gbGFzdEluZGV4Kys7XG5cdFx0XHRsYXN0SW5kZXggPSBmaXJzdEluZGV4IC0gMTtcblx0XHRcdGxldCBlc3NhaSA9IHNkcExpbmVzW3ZpZGVvSW5kZXhdO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLnJlcGxhY2UoJyAnK21lZGlhcy52aWRlb1swXS5mbXRbbWVkaWFdLCcnKTtcblx0XHRcdH1cblx0XHRcdGVzc2FpID0gZXNzYWkuY29uY2F0KCcgJytsYXN0SW5kZXgpO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLmNvbmNhdCgnICcrbWVkaWFzLnZpZGVvWzBdLmZtdFttZWRpYV0pO1xuXHRcdFx0fVxuXHRcdFx0c2RwTGluZXNbdmlkZW9JbmRleF0gPSBlc3NhaTtcblx0XHRcdHNkcHJlc3VsdCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuXHRcdFx0c2RwcmVzdWx0ICs9IGBhPXJ0cG1hcDoke2xhc3RJbmRleH0gVlA4LzkwMDAwIFxcclxcbmArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YGE9cnRjcC1mYjoke2xhc3RJbmRleH0gY2NtIGZpciBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IG5hY2sgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBuYWNrIHBsaSBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IGdvb2ctcmVtYiBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IHRyYW5zcG9ydC1jYyBcXHJcXG5gO1xuXHRcdH1cblx0XHRpZiAoIWgyNjRJblZpZGVvTGlzdCkge1xuXHRcdFx0Ly8gbGFzdEluZGV4Kys7XG5cdFx0XHRsYXN0SW5kZXggPSBmaXJzdEluZGV4IC0gMTtcblx0XHRcdGxldCBlc3NhaSA9IHNkcExpbmVzW3ZpZGVvSW5kZXhdO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLnJlcGxhY2UoJyAnK21lZGlhcy52aWRlb1swXS5mbXRbbWVkaWFdLCcnKTtcblx0XHRcdH1cblx0XHRcdGVzc2FpID0gZXNzYWkuY29uY2F0KCcgJytsYXN0SW5kZXgpO1xuXHRcdFx0Zm9yIChsZXQgbWVkaWEgaW4gbWVkaWFzLnZpZGVvWzBdLmZtdCkge1xuXHRcdFx0XHRlc3NhaSA9IGVzc2FpLmNvbmNhdCgnICcrbWVkaWFzLnZpZGVvWzBdLmZtdFttZWRpYV0pO1xuXHRcdFx0fVxuXHRcdFx0c2RwTGluZXNbdmlkZW9JbmRleF0gPSBlc3NhaTtcblx0XHRcdHNkcHJlc3VsdCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuXHRcdFx0c2RwcmVzdWx0ICs9IGBhPXJ0cG1hcDoke2xhc3RJbmRleH0gSDI2NC85MDAwMCBcXHJcXG5gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGBhPXJ0Y3AtZmI6JHtsYXN0SW5kZXh9IGNjbSBmaXIgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBuYWNrIFxcclxcbmArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YGE9cnRjcC1mYjoke2xhc3RJbmRleH0gbmFjayBwbGkgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBnb29nLXJlbWIgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSB0cmFuc3BvcnQtY2MgXFxyXFxuYCtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgYT1ydGNwLWZiOiR7bGFzdEluZGV4fSBgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xO3BhY2tldGl6YXRpb24tbW9kZT0xOycrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Byb2ZpbGUtbGV2ZWwtaWQ9NDJlMDFmIFxcclxcbic7XG5cdFx0fVxuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fYWRkVlA4Q29kZWMnLCBzZHByZXN1bHQpO1xuXHRcdHJldHVybiBzZHByZXN1bHQ7XG5cdH0qL1xuXG5cdC8qKlxuXHQgKiBTZW5kIFNEUCBvZmZlciB0byB0aGUgcmVtb3RlIHZpYSBEYXRhU3luY1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3NlbmRTZHBUb1JlbW90ZSgpIHtcblx0XHQvLyBMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NlbmRTZHBUb1JlbW90ZSNsb2NhbFNEUCcsIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuXHRcdGNvbnN0IHJlbW90ZVVzZXJJZCA9IHRoaXMucmVtb3RlLnRvID8gdGhpcy5yZW1vdGUudG8gOiB0aGlzLnJlbW90ZS5mcm9tO1xuXHRcdERldmljZS5nZXQocmVtb3RlVXNlcklkLCB0aGlzLnJlbW90ZS5kZXZpY2UpXG5cdFx0XHQudGhlbigocmVtb3RlRGV2aWNlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNkcE9mZmVyID0gdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnNkcDtcblx0XHRcdFx0bGV0IG5ld1NkcCA9IHNkcE9mZmVyO1xuXHRcdFx0XHRjb25zdCBsb2NhbCA9IC9DaHJvbWVcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KTtcblx0XHRcdFx0Y29uc3QgcmVtb3RlID0gL0Nocm9tZVxcLyhbMC05XSspLy5leGVjKHJlbW90ZURldmljZS51c2VyQWdlbnQpO1xuXG5cdFx0XHRcdGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpIT09IC0xICYmXG5cdFx0XHRcdFx0bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgIT09IC0xICYmXG5cdFx0XHRcdFx0cmVtb3RlRGV2aWNlLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSE9PSAtMSAmJlxuXHRcdFx0XHRcdGxvY2FsWzFdIDw9IDY0KSB7XG5cdFx0XHRcdFx0Ly8gbmV3U2RwID1cdHRoaXMuX2FkZFZQOENvZGVjKHNkcE9mZmVyKTtcblx0XHRcdFx0XHRpZiAobG9jYWxbMV0gPD0gNjApIHtcblx0XHRcdFx0XHRcdG5ld1NkcCA9IG5ld1NkcC5yZXBsYWNlKC87cHJvZmlsZS1sZXZlbC1pZD0oW2EtejAtOV0rKS8sJycpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRuZXdTZHAgPVx0bmV3U2RwLnJlcGxhY2UoJzQyMDAxZicsJzQyZTAxZicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSE9PSAtMSAmJlxuXHRcdFx0XHRcdHJlbW90ZURldmljZS51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykhPT0gLTEgJiZcblx0XHRcdFx0XHRyZW1vdGVEZXZpY2UudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSE9PSAtMSAmJlxuXHRcdFx0XHRcdHJlbW90ZVsxXSA8PSA2NCkge1xuXHRcdFx0XHRcdC8vIG5ld1NkcCA9XHR0aGlzLl9hZGRWUDhDb2RlYyhzZHBPZmZlcik7XG5cdFx0XHRcdFx0aWYgKHJlbW90ZVsxXSA8PSA2MCkge1xuXHRcdFx0XHRcdFx0bmV3U2RwID0gbmV3U2RwLnJlcGxhY2UoLztwcm9maWxlLWxldmVsLWlkPShbYS16MC05XSspLywnJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5ld1NkcCA9XHRuZXdTZHAucmVwbGFjZSgnNDJlMDFmJywnNDIwMDFmJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdExvZy5kKGBQZWVyQ29ubmVjdGlvbn5fc2VuZFNkcFRvUmVtb3RlI1NEUCBzZW50IHRvIHJlbW90ZSAke25ld1NkcH1gKTtcblx0XHRcdFx0Y29uc3QgZGVzY3JpcHRpb25DaGFuZ2VkID0ge1xuXHRcdFx0XHRcdHNkcDogbmV3U2RwLFxuXHRcdFx0XHRcdHR5cGU6IHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi50eXBlXG5cdFx0XHRcdH07XG5cdFx0XHRcdERhdGFTeW5jLnVwZGF0ZShgJHt0aGlzLl9sb2NhbFBhdGh9L3NkcGAsIF90b0pTT04oZGVzY3JpcHRpb25DaGFuZ2VkKSk7XG5cblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBTRFAgb2ZmZXIgYW5kIHB1c2ggaXRcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfc2VuZE9mZmVyKCkge1xuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fc2VuZE9mZmVyJyk7XG5cdFx0cmV0dXJuIHRoaXMucGMuY3JlYXRlT2ZmZXIoKVxuXHRcdFx0LnRoZW4oZGVzY3JpcHRpb24gPT4gdGhpcy5fc2V0UHJlZmVycmVkQ29kZWNzKGRlc2NyaXB0aW9uKSlcblx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikpXG5cdFx0XHQudGhlbigoKSA9PiBMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NlbmRPZmZlciNsb2NhbERlc2NyaXB0aW9uJywgdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnNkcCkpXG5cdFx0XHQudGhlbigoKSA9PiB0aGlzLl9zZW5kU2RwVG9SZW1vdGUoKSk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkL1JlbW92ZSB0cmFja3MgdG8gdGhlIFBlZXJDb25uZWN0aW9uIHN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2FsdGVyU3RyZWFtKHN0cmVhbSwgbWV0aG9kKSB7XG5cdFx0aWYoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsIGAke21ldGhvZH1UcmFja2ApKSB7XG5cdFx0XHRpZiAobWV0aG9kID09PSAnYWRkJykge1xuXHRcdFx0XHRzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0aGlzLnBjW2Ake21ldGhvZH1UcmFja2BdKHRyYWNrLCBzdHJlYW0pLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucGMuZ2V0U2VuZGVycygpLmZvckVhY2goc2VuZGVyID0+IHRoaXMucGNbYCR7bWV0aG9kfVRyYWNrYF0oc2VuZGVyKSwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGNbYCR7bWV0aG9kfVN0cmVhbWBdKHN0cmVhbSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlc3RhcnQgU0RQIG5lZ290aWF0aW9uIGZvbGxvd2luZyBhIE1lZGlhU3RyZWFtIGNoYW5nZVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBvbGRTdHJlYW1cblx0ICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbmV3U3RyZWFtXG5cdCAqL1xuXHRyZW5lZ290aWF0ZShvbGRTdHJlYW0sIG5ld1N0cmVhbSkge1xuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5yZW5lZ290aWF0ZScpO1xuXHRcdGlmKChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ2dldFNlbmRlcnMnKSlcblx0XHRcdCYmICgnUlRDUnRwU2VuZGVyJyBpbiB3aW5kb3cpXG5cdFx0XHQmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJUQ1J0cFNlbmRlci5wcm90b3R5cGUsICdyZXBsYWNlVHJhY2snKSl7XG5cblx0XHRcdC8vIG1velJUQ1BlZXJDb25uZWN0aW9uIGltcGxlbWVudGF0aW9uXG5cdFx0XHR0aGlzLnBjLmdldFNlbmRlcnMoKS5mb3JFYWNoKHNlbmRlciA9PiB7XG5cdFx0XHRcdGxldCBuZXdUcmFja3M7XG5cdFx0XHRcdHN3aXRjaCAoc2VuZGVyLnRyYWNrLmtpbmQpIHtcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6XG5cdFx0XHRcdFx0XHRuZXdUcmFja3MgPSBuZXdTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3ZpZGVvJzpcblx0XHRcdFx0XHRcdG5ld1RyYWNrcyA9IG5ld1N0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdG5ld1RyYWNrcyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKG5ld1RyYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRzZW5kZXIucmVwbGFjZVRyYWNrKG5ld1RyYWNrc1swXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5fc2VuZE9mZmVyKClcblx0XHRcdFx0LmNhdGNoKGUgPT4ge0xvZy5kKCdQZWVyQ29ubmVjdGlvbn5yZW5lZ290aWF0ZScsIGUpO30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9hbHRlclN0cmVhbShvbGRTdHJlYW0sICdyZW1vdmUnKTtcblx0XHRcdHRoaXMuX2FsdGVyU3RyZWFtKG5ld1N0cmVhbSwgJ2FkZCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZSB0aGUgUGVlckNvbm5lY3Rpb24gYW5kIHN0b3AgbGlzdGVuaW5nIHRvIFNEUCBtZXNzYWdlc1xuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y2xvc2UoKSB7XG5cdFx0aWYodGhpcy5fc3RhdHVzID09PSBPUEVORUQpIHtcblx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NJTkc7XG5cdFx0XHQvLyBTdG9wIGRpc3BsYXlcblx0XHRcdGlmICh0aGlzLm5vZGUpIHtcblx0XHRcdFx0dGhpcy5ub2RlLnN0b3AgJiYgdGhpcy5ub2RlLnN0b3AoKTtcblx0XHRcdFx0dGhpcy5ub2RlLnNyY09iamVjdCA9IG51bGw7XG5cdFx0XHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubm9kZSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byByZW1vdGUgSUNFIGNhbmRpZGF0ZXNcblx0XHRcdHRoaXMuX3JlbW90ZUlDRUNhbmRpZGF0ZXMoZmFsc2UpO1xuXHRcdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgdG8gU0RQIG1lc3NhZ2VzXG5cdFx0XHREYXRhU3luYy5vZmYoYCR7dGhpcy5fcmVtb3RlUGF0aH0vc2RwYCwgJ3ZhbHVlJyk7XG5cdFx0XHQvLyBSZW1vdmUgZGF0YVxuXHRcdFx0RGF0YVN5bmMucmVtb3ZlKHRoaXMuX2xvY2FsUGF0aCk7XG5cdFx0XHQvLyBDbG9zZSBQZWVyQ29ubmVjdGlvblxuXHRcdFx0aWYgKHRoaXMucGMgJiYgdGhpcy5wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcblx0XHRcdFx0dGhpcy5wYy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgIT09ICdjbG9zZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0dXMgPSBDTE9TRUQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLnBjLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zdGF0dXMgPSBDTE9TRUQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEVkaXRzIHRoZSBTRFAgdG8gc2V0IHRoZSBwcmVmZXJyZWQgYXVkaW8vdmlkZW8gY29kZWNcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UlRDU2Vzc2lvbkRlc2NyaXB0aW9ufSBkZXNjcmlwdGlvbiBUaGUgZGVzY3JpcHRpb24gcmV0cmlldmVkIGJ5IGNyZWF0ZU9mZmVyL2NyZWF0ZUFuc3dlclxuXHQgKiBAcmV0dXJucyB7UlRDU2Vzc2lvbkRlc2NyaXB0aW9ufHtzZHA6IHN0cmluZywgdHlwZTogc3RyaW5nfX1cblx0ICovXG5cdF9zZXRQcmVmZXJyZWRDb2RlY3MoZGVzY3JpcHRpb24pIHtcblx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYyB8fCBjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYykge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCB7ZGVzY3JpcHRpb24sIGNvbmZpZzogY2FjaGUuY29uZmlnfSk7XG5cdFx0XHRjb25zdCBzZHBMaW5lcyA9IGRlc2NyaXB0aW9uLnNkcC5zcGxpdCgvXFxyP1xcbi8pO1xuXHRcdFx0Y29uc3QgbWVkaWFzID0ge2F1ZGlvOiBbXSwgdmlkZW86IFtdfTtcblx0XHRcdGxldCBjdXJyZW50ID0gbnVsbDtcblx0XHRcdC8vIFBhcnNlIFNEUFxuXHRcdFx0c2RwTGluZXMuZm9yRWFjaCgoc2RwTGluZSwgaSkgPT4ge1xuXHRcdFx0XHRpZigvXm09Ly50ZXN0KHNkcExpbmUpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZCA9IC9ebT0oXFx3KylcXHNbMC05XFwvXStcXHNbQS1aYS16MC05XFwvXStcXHMoWzAtOVxcc10rKS8uZXhlYyhzZHBMaW5lKTtcblx0XHRcdFx0XHRjdXJyZW50ID0ge1xuXHRcdFx0XHRcdFx0Zm10OiBkWzJdLnNwbGl0KC9cXHMvKSxcblx0XHRcdFx0XHRcdGluZGV4OiBpLFxuXHRcdFx0XHRcdFx0Y29kZWNzOiBbXVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0bWVkaWFzW2RbMV1dLnB1c2goY3VycmVudCk7XG5cdFx0XHRcdH0gZWxzZSBpZihjdXJyZW50ICYmIC9eYT1ydHBtYXA6Ly50ZXN0KHNkcExpbmUpKSB7XG5cdFx0XHRcdFx0Y29uc3QgYyA9IC9eYT1ydHBtYXA6KFxcZCspXFxzKFthLXpBLVowLTlcXC1cXC9dKykvLmV4ZWMoc2RwTGluZSk7XG5cdFx0XHRcdFx0aWYoYykge1xuXHRcdFx0XHRcdFx0Y3VycmVudC5jb2RlY3MucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGlkOiBjWzFdLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiBjWzJdLFxuXHRcdFx0XHRcdFx0XHRpbmRleDogaVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fc2V0UHJlZmVycmVkQ29kZWNzJywgbWVkaWFzKTtcblx0XHRcdGxldCB1cGRhdGUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IHByZWZlciA9IChtZWRpYUxpc3QsIHByZWZlcmVkQ29kZWMpID0+IHtcblx0XHRcdFx0bWVkaWFMaXN0LmZvckVhY2gobWVkaWEgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkID0gbWVkaWEuY29kZWNzLmZpbmQoY29kZWMgPT4gcHJlZmVyZWRDb2RlYy50ZXN0KGNvZGVjLm5hbWUpKTtcblx0XHRcdFx0XHRpZihzZWxlY3RlZCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgZm10ID0gW3NlbGVjdGVkLmlkXS5jb25jYXQobWVkaWEuZm10LmZpbHRlcihpZHMgPT4gaWRzICE9PSBzZWxlY3RlZC5pZCkpO1xuXHRcdFx0XHRcdFx0c2RwTGluZXNbbWVkaWEuaW5kZXhdID0gc2RwTGluZXNbbWVkaWEuaW5kZXhdLnJlcGxhY2UobWVkaWEuZm10LmpvaW4oJyAnKSwgZm10LmpvaW4oJyAnKSk7XG5cdFx0XHRcdFx0XHR1cGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0aWYoY2FjaGUuY29uZmlnLnByZWZlcnJlZFZpZGVvQ29kZWMpIHtcblx0XHRcdFx0cHJlZmVyKG1lZGlhcy52aWRlbywgY2FjaGUuY29uZmlnLnByZWZlcnJlZFZpZGVvQ29kZWMpO1xuXHRcdFx0fVxuXHRcdFx0aWYoY2FjaGUuY29uZmlnLnByZWZlcnJlZEF1ZGlvQ29kZWMpIHtcblx0XHRcdFx0cHJlZmVyKG1lZGlhcy5hdWRpbywgY2FjaGUuY29uZmlnLnByZWZlcnJlZEF1ZGlvQ29kZWMpO1xuXHRcdFx0fVxuXHRcdFx0aWYodXBkYXRlKSB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fc2V0UHJlZmVycmVkQ29kZWNzJywgc2RwTGluZXMuam9pbignXFxyXFxuJykpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHNkcDogc2RwTGluZXMuam9pbignXFxyXFxuJyksXG5cdFx0XHRcdFx0dHlwZTogZGVzY3JpcHRpb24udHlwZVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGVzY3JpcHRpb247XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3dlYnJ0Yy9QZWVyQ29ubmVjdGlvbi5qcyIsImltcG9ydCBQZWVyQ29ubmVjdGlvbiBmcm9tICcuL1BlZXJDb25uZWN0aW9uJztcbmltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuLi91dGlsL0xvZyc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuLi91dGlsL0RhdGFTeW5jJztcblxuY29uc3QgZ2V0U2hvcnRTdGFja0lkID0gKGlkMSwgaWQyKSA9PiBpZDEubG9jYWxlQ29tcGFyZShpZDIsICdlbi11cycpID4gMCA/IGAke2lkMX0tJHtpZDJ9YCA6YCR7aWQyfS0ke2lkMX1gO1xuXG5jb25zdCBoYXNoQ29kZSA9IChzdHIpID0+ICB7XG5cdHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJldkhhc2gsIGN1cnJWYWwpID0+XG4gICAgKCgocHJldkhhc2ggPDwgNSkgLSBwcmV2SGFzaCkgKyBjdXJyVmFsLmNoYXJDb2RlQXQoMCkpfDAsIDApO1xufTtcblxuY29uc3QgZ2V0U3RhY2tJZCA9IChkZXZpY2VJZDEsIGRldmljZUlkMikgPT4ge1xuXHRjb25zdCBzaG9ydHN0YWNrSWQgPSBnZXRTaG9ydFN0YWNrSWQoZGV2aWNlSWQxLCBkZXZpY2VJZDIpO1xuXG5cdGNvbnN0IGhhc2ggPSBgJHtoYXNoQ29kZShzaG9ydHN0YWNrSWQpfWA7XG5cdGNvbnN0IGxlbmd0aCA9IGhhc2gubGVuZ3RoO1xuXHRjb25zdCBpZDEgPSBoYXNoLnN1YnN0cmluZyhsZW5ndGgtMyxsZW5ndGgpO1xuXHRjb25zdCBpZDIgPSBoYXNoLnN1YnN0cmluZyhsZW5ndGgtNixsZW5ndGgtMyk7XG5cblx0cmV0dXJuIGAke2lkMX0vJHtpZDJ9LyR7c2hvcnRzdGFja0lkfWA7XG59O1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqXG5cdFx0ICogV2ViUlRDIHN0YWNrc1xuXHRcdCAqIEB0eXBlIHt7Kjogeyo6IFBlZXJDb25uZWN0aW9ufX19XG5cdFx0ICovXG5cdFx0dGhpcy5zdGFja3MgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBQZWVyQ29ubmVjdGlvbiBvYmplY3QgZm9yIGEgc3BlY2lmaWMgc3RyZWFtXG5cdCAqIEBwYXJhbSB7TG9jYWx8UmVtb3RlfSBzdHJlYW1cblx0ICogQHBhcmFtIHtSZW1vdGV8e3RvOiBzdHJpbmcsIGRldmljZTpzdHJpbmd9fSByZW1vdGVcblx0ICogQHBhcmFtIHtib29sZWFufSBwdWJsaXNoXG5cdCAqIEByZXR1cm4geyp9XG5cdCAqL1xuXHRnZXRQZWVyQ29ubmVjdGlvbihzdHJlYW0sIHJlbW90ZSwgcHVibGlzaCkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gZ2V0IGEgUGVlckNvbm5lY3Rpb25cXCdzIG9iamVjdC4nKSk7XG5cdFx0fVxuXHRcdGNvbnN0IHN0YWNrSWQgPSBnZXRTdGFja0lkKHJlbW90ZS5kZXZpY2UsIGNhY2hlLmRldmljZSk7XG5cblx0XHRpZih0aGlzLnN0YWNrc1tzdGFja0lkXSAmJiB0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW0udWlkXSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW0udWlkXSk7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMuc3RhY2tzW3N0YWNrSWRdKSB7XG5cdFx0XHR0aGlzLnN0YWNrc1tzdGFja0lkXSA9IHt9O1xuXHRcdH1cblxuXHRcdGNvbnN0IHVzZXJJZCA9IGNhY2hlLnVzZXIudWlkLnNwbGl0KCcvJyk7XG5cdFx0Y29uc3Qgc2hvcnRVc2VySWQgPSB1c2VySWRbMl07XG5cdFx0bGV0IHNob3J0UmVtb3RlVG8gPSB1bmRlZmluZWQ7XG5cdFx0bGV0IHNob3J0UmVtb3RlRnJvbSA9IHVuZGVmaW5lZDtcblx0XHRpZiAocmVtb3RlLnRvKSB7XG5cdFx0XHRjb25zdCByZW1vdGVUbyA9IHJlbW90ZS50by5zcGxpdCgnLycpO1xuXHRcdFx0c2hvcnRSZW1vdGVUbyA9IHJlbW90ZVRvWzJdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZW1vdGVGcm9tID0gcmVtb3RlLmZyb20uc3BsaXQoJy8nKTtcblx0XHRcdHNob3J0UmVtb3RlRnJvbSA9IHJlbW90ZUZyb21bMl07XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXNlcnMgPSB7fTtcblx0XHQvLyB1c2Vyc1tjYWNoZS51c2VyLnVpZF0gPSB0cnVlO1xuXHRcdHVzZXJzW3Nob3J0VXNlcklkXSA9IHRydWU7XG5cdFx0Ly8gdXNlcnNbcmVtb3RlLmZyb20gfHwgcmVtb3RlLnRvXSA9IHRydWU7XG5cdFx0dXNlcnNbc2hvcnRSZW1vdGVGcm9tIHx8IHNob3J0UmVtb3RlVG9dID0gdHJ1ZTtcblxuXHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYF8vd2VicnRjLyR7c3RhY2tJZH1gLCB1c2Vycylcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBQZWVyQ29ubmVjdGlvbihzdGFja0lkLCBzdHJlYW0udWlkLCByZW1vdGUsIHB1Ymxpc2gpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHBjID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9uTWFuYWdlcn5nZXRQZWVyQ29ubmVjdGlvbicsIHtzdGFja0lkLCBzdHJlYW1JZDogc3RyZWFtLnVpZCwgcGN9KTtcblx0XHRcdFx0dGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtLnVpZF0gPSBwYztcblx0XHRcdFx0cmV0dXJuIHBjO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUGVlckNvbm5lY3Rpb25NYW5hZ2VyfmdldFBlZXJDb25uZWN0aW9uJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBvZmZlciBmb3IgYSBzdHJlYW0gdG8gYSBzdWJzY3JpYmVyXG5cdCAqIEBwYXJhbSB7TG9jYWx9IGxvY2FsU3RyZWFtXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzdWJzY3JpYmVyXG5cdCAqIEByZXR1cm4ge1Byb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdG9mZmVyKGxvY2FsU3RyZWFtLCBzdWJzY3JpYmVyKSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9uTWFuYWdlcn5vZmZlcicsIHtsb2NhbFN0cmVhbSwgc3Vic2NyaWJlcn0pO1xuXHRcdHJldHVybiB0aGlzLmdldFBlZXJDb25uZWN0aW9uKGxvY2FsU3RyZWFtLCBzdWJzY3JpYmVyLCB0cnVlKVxuXHRcdFx0LnRoZW4ocGMgPT4gcGMub2ZmZXIobG9jYWxTdHJlYW0ubWVkaWEpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBbnN3ZXIgdG8gdGhlIG9mZmVyIGZyb20gdGhlIHB1Ymxpc2hlclxuXHQgKiBAcGFyYW0ge1JlbW90ZX0gcmVtb3RlU3RyZWFtXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gaHRtbEVsZW1lbnRcblx0ICogQHJldHVybiB7KnxQcm9taXNlLjxQZWVyQ29ubmVjdGlvbj59XG5cdCAqL1xuXHRhbnN3ZXIocmVtb3RlU3RyZWFtLCBodG1sRWxlbWVudCkge1xuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+YW5zd2VyJywge3JlbW90ZVN0cmVhbSwgaHRtbEVsZW1lbnR9KTtcblx0XHRyZXR1cm4gdGhpcy5nZXRQZWVyQ29ubmVjdGlvbihyZW1vdGVTdHJlYW0sIHJlbW90ZVN0cmVhbSwgZmFsc2UpXG5cdFx0XHQudGhlbihwYyA9PiBwYy5hbnN3ZXIoaHRtbEVsZW1lbnQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZSBhIFBlZXJDb25uZWN0aW9uXG5cdCAqIEBwYXJhbSBzdHJlYW1JZFxuXHQgKiBAcGFyYW0gcmVtb3RlRGV2aWNlXG5cdCAqIEByZXR1cm4geyp9XG5cdCAqL1xuXHRjbG9zZShzdHJlYW1JZCwgcmVtb3RlRGV2aWNlKSB7XG5cdFx0Y29uc3Qgc3RhY2tJZCA9IGdldFN0YWNrSWQocmVtb3RlRGV2aWNlLCBjYWNoZS5kZXZpY2UpLFxuXHRcdFx0cGMgPSB0aGlzLnN0YWNrc1tzdGFja0lkXSA/IHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbUlkXSA6IG51bGw7XG5cdFx0aWYocGMpe1xuXHRcdFx0cGMuY2xvc2UoKTtcblx0XHRcdERhdGFTeW5jLnJlbW92ZShgXy93ZWJydGMvJHtzdGFja0lkfWApO1xuXHRcdFx0dGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtSWRdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF07XG5cdFx0XHRyZXR1cm4gcGM7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5maW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZm4vYXJyYXkvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDUpO1xudmFyIEtFWSA9ICdmaW5kJztcbnZhciBmb3JjZWQgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gU0RQIGhlbHBlcnMuXG52YXIgU0RQVXRpbHMgPSB7fTtcblxuLy8gR2VuZXJhdGUgYW4gYWxwaGFudW1lcmljIGlkZW50aWZpZXIgZm9yIGNuYW1lIG9yIG1pZHMuXG4vLyBUT0RPOiB1c2UgVVVJRHMgaW5zdGVhZD8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamVkLzk4Mjg4M1xuU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTApO1xufTtcblxuLy8gVGhlIFJUQ1AgQ05BTUUgdXNlZCBieSBhbGwgcGVlcmNvbm5lY3Rpb25zIGZyb20gdGhlIHNhbWUgSlMuXG5TRFBVdGlscy5sb2NhbENOYW1lID0gU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG5cbi8vIFNwbGl0cyBTRFAgaW50byBsaW5lcywgZGVhbGluZyB3aXRoIGJvdGggQ1JMRiBhbmQgTEYuXG5TRFBVdGlscy5zcGxpdExpbmVzID0gZnVuY3Rpb24oYmxvYikge1xuICByZXR1cm4gYmxvYi50cmltKCkuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuIGxpbmUudHJpbSgpO1xuICB9KTtcbn07XG4vLyBTcGxpdHMgU0RQIGludG8gc2Vzc2lvbnBhcnQgYW5kIG1lZGlhc2VjdGlvbnMuIEVuc3VyZXMgQ1JMRi5cblNEUFV0aWxzLnNwbGl0U2VjdGlvbnMgPSBmdW5jdGlvbihibG9iKSB7XG4gIHZhciBwYXJ0cyA9IGJsb2Iuc3BsaXQoJ1xcbm09Jyk7XG4gIHJldHVybiBwYXJ0cy5tYXAoZnVuY3Rpb24ocGFydCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKGluZGV4ID4gMCA/ICdtPScgKyBwYXJ0IDogcGFydCkudHJpbSgpICsgJ1xcclxcbic7XG4gIH0pO1xufTtcblxuLy8gcmV0dXJucyB0aGUgc2Vzc2lvbiBkZXNjcmlwdGlvbi5cblNEUFV0aWxzLmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oYmxvYikge1xuICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKGJsb2IpO1xuICByZXR1cm4gc2VjdGlvbnMgJiYgc2VjdGlvbnNbMF07XG59O1xuXG4vLyByZXR1cm5zIHRoZSBpbmRpdmlkdWFsIG1lZGlhIHNlY3Rpb25zLlxuU0RQVXRpbHMuZ2V0TWVkaWFTZWN0aW9ucyA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhibG9iKTtcbiAgc2VjdGlvbnMuc2hpZnQoKTtcbiAgcmV0dXJuIHNlY3Rpb25zO1xufTtcblxuLy8gUmV0dXJucyBsaW5lcyB0aGF0IHN0YXJ0IHdpdGggYSBjZXJ0YWluIHByZWZpeC5cblNEUFV0aWxzLm1hdGNoUHJlZml4ID0gZnVuY3Rpb24oYmxvYiwgcHJlZml4KSB7XG4gIHJldHVybiBTRFBVdGlscy5zcGxpdExpbmVzKGJsb2IpLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuIGxpbmUuaW5kZXhPZihwcmVmaXgpID09PSAwO1xuICB9KTtcbn07XG5cbi8vIFBhcnNlcyBhbiBJQ0UgY2FuZGlkYXRlIGxpbmUuIFNhbXBsZSBpbnB1dDpcbi8vIGNhbmRpZGF0ZTo3MDI3ODYzNTAgMiB1ZHAgNDE4MTk5MDIgOC44LjguOCA2MDc2OSB0eXAgcmVsYXkgcmFkZHIgOC44LjguOFxuLy8gcnBvcnQgNTU5OTZcIlxuU0RQVXRpbHMucGFyc2VDYW5kaWRhdGUgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cztcbiAgLy8gUGFyc2UgYm90aCB2YXJpYW50cy5cbiAgaWYgKGxpbmUuaW5kZXhPZignYT1jYW5kaWRhdGU6JykgPT09IDApIHtcbiAgICBwYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEyKS5zcGxpdCgnICcpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzID0gbGluZS5zdWJzdHJpbmcoMTApLnNwbGl0KCcgJyk7XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlID0ge1xuICAgIGZvdW5kYXRpb246IHBhcnRzWzBdLFxuICAgIGNvbXBvbmVudDogcGFyc2VJbnQocGFydHNbMV0sIDEwKSxcbiAgICBwcm90b2NvbDogcGFydHNbMl0udG9Mb3dlckNhc2UoKSxcbiAgICBwcmlvcml0eTogcGFyc2VJbnQocGFydHNbM10sIDEwKSxcbiAgICBpcDogcGFydHNbNF0sXG4gICAgcG9ydDogcGFyc2VJbnQocGFydHNbNV0sIDEwKSxcbiAgICAvLyBza2lwIHBhcnRzWzZdID09ICd0eXAnXG4gICAgdHlwZTogcGFydHNbN11cbiAgfTtcblxuICBmb3IgKHZhciBpID0gODsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgc3dpdGNoIChwYXJ0c1tpXSkge1xuICAgICAgY2FzZSAncmFkZHInOlxuICAgICAgICBjYW5kaWRhdGUucmVsYXRlZEFkZHJlc3MgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncnBvcnQnOlxuICAgICAgICBjYW5kaWRhdGUucmVsYXRlZFBvcnQgPSBwYXJzZUludChwYXJ0c1tpICsgMV0sIDEwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0Y3B0eXBlJzpcbiAgICAgICAgY2FuZGlkYXRlLnRjcFR5cGUgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndWZyYWcnOlxuICAgICAgICBjYW5kaWRhdGUudWZyYWcgPSBwYXJ0c1tpICsgMV07IC8vIGZvciBiYWNrd2FyZCBjb21wYWJpbGl0eS5cbiAgICAgICAgY2FuZGlkYXRlLnVzZXJuYW1lRnJhZ21lbnQgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gZXh0ZW5zaW9uIGhhbmRsaW5nLCBpbiBwYXJ0aWN1bGFyIHVmcmFnXG4gICAgICAgIGNhbmRpZGF0ZVtwYXJ0c1tpXV0gPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlO1xufTtcblxuLy8gVHJhbnNsYXRlcyBhIGNhbmRpZGF0ZSBvYmplY3QgaW50byBTRFAgY2FuZGlkYXRlIGF0dHJpYnV0ZS5cblNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gIHZhciBzZHAgPSBbXTtcbiAgc2RwLnB1c2goY2FuZGlkYXRlLmZvdW5kYXRpb24pO1xuICBzZHAucHVzaChjYW5kaWRhdGUuY29tcG9uZW50KTtcbiAgc2RwLnB1c2goY2FuZGlkYXRlLnByb3RvY29sLnRvVXBwZXJDYXNlKCkpO1xuICBzZHAucHVzaChjYW5kaWRhdGUucHJpb3JpdHkpO1xuICBzZHAucHVzaChjYW5kaWRhdGUuaXApO1xuICBzZHAucHVzaChjYW5kaWRhdGUucG9ydCk7XG5cbiAgdmFyIHR5cGUgPSBjYW5kaWRhdGUudHlwZTtcbiAgc2RwLnB1c2goJ3R5cCcpO1xuICBzZHAucHVzaCh0eXBlKTtcbiAgaWYgKHR5cGUgIT09ICdob3N0JyAmJiBjYW5kaWRhdGUucmVsYXRlZEFkZHJlc3MgJiZcbiAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCkge1xuICAgIHNkcC5wdXNoKCdyYWRkcicpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyk7XG4gICAgc2RwLnB1c2goJ3Jwb3J0Jyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KTtcbiAgfVxuICBpZiAoY2FuZGlkYXRlLnRjcFR5cGUgJiYgY2FuZGlkYXRlLnByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT09ICd0Y3AnKSB7XG4gICAgc2RwLnB1c2goJ3RjcHR5cGUnKTtcbiAgICBzZHAucHVzaChjYW5kaWRhdGUudGNwVHlwZSk7XG4gIH1cbiAgaWYgKGNhbmRpZGF0ZS51c2VybmFtZUZyYWdtZW50IHx8IGNhbmRpZGF0ZS51ZnJhZykge1xuICAgIHNkcC5wdXNoKCd1ZnJhZycpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS51c2VybmFtZUZyYWdtZW50IHx8IGNhbmRpZGF0ZS51ZnJhZyk7XG4gIH1cbiAgcmV0dXJuICdjYW5kaWRhdGU6JyArIHNkcC5qb2luKCcgJyk7XG59O1xuXG4vLyBQYXJzZXMgYW4gaWNlLW9wdGlvbnMgbGluZSwgcmV0dXJucyBhbiBhcnJheSBvZiBvcHRpb24gdGFncy5cbi8vIGE9aWNlLW9wdGlvbnM6Zm9vIGJhclxuU0RQVXRpbHMucGFyc2VJY2VPcHRpb25zID0gZnVuY3Rpb24obGluZSkge1xuICByZXR1cm4gbGluZS5zdWJzdHIoMTQpLnNwbGl0KCcgJyk7XG59O1xuXG4vLyBQYXJzZXMgYW4gcnRwbWFwIGxpbmUsIHJldHVybnMgUlRDUnRwQ29kZGVjUGFyYW1ldGVycy4gU2FtcGxlIGlucHV0OlxuLy8gYT1ydHBtYXA6MTExIG9wdXMvNDgwMDAvMlxuU0RQVXRpbHMucGFyc2VSdHBNYXAgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDkpLnNwbGl0KCcgJyk7XG4gIHZhciBwYXJzZWQgPSB7XG4gICAgcGF5bG9hZFR5cGU6IHBhcnNlSW50KHBhcnRzLnNoaWZ0KCksIDEwKSAvLyB3YXM6IGlkXG4gIH07XG5cbiAgcGFydHMgPSBwYXJ0c1swXS5zcGxpdCgnLycpO1xuXG4gIHBhcnNlZC5uYW1lID0gcGFydHNbMF07XG4gIHBhcnNlZC5jbG9ja1JhdGUgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApOyAvLyB3YXM6IGNsb2NrcmF0ZVxuICBwYXJzZWQuY2hhbm5lbHMgPSBwYXJ0cy5sZW5ndGggPT09IDMgPyBwYXJzZUludChwYXJ0c1syXSwgMTApIDogMTtcbiAgLy8gbGVnYWN5IGFsaWFzLCBnb3QgcmVuYW1lZCBiYWNrIHRvIGNoYW5uZWxzIGluIE9SVEMuXG4gIHBhcnNlZC5udW1DaGFubmVscyA9IHBhcnNlZC5jaGFubmVscztcbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbi8vIEdlbmVyYXRlIGFuIGE9cnRwbWFwIGxpbmUgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3Jcbi8vIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlUnRwTWFwID0gZnVuY3Rpb24oY29kZWMpIHtcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICB2YXIgY2hhbm5lbHMgPSBjb2RlYy5jaGFubmVscyB8fCBjb2RlYy5udW1DaGFubmVscyB8fCAxO1xuICByZXR1cm4gJ2E9cnRwbWFwOicgKyBwdCArICcgJyArIGNvZGVjLm5hbWUgKyAnLycgKyBjb2RlYy5jbG9ja1JhdGUgK1xuICAgICAgKGNoYW5uZWxzICE9PSAxID8gJy8nICsgY2hhbm5lbHMgOiAnJykgKyAnXFxyXFxuJztcbn07XG5cbi8vIFBhcnNlcyBhbiBhPWV4dG1hcCBsaW5lIChoZWFkZXJleHRlbnNpb24gZnJvbSBSRkMgNTI4NSkuIFNhbXBsZSBpbnB1dDpcbi8vIGE9ZXh0bWFwOjIgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6dG9mZnNldFxuLy8gYT1leHRtYXA6Mi9zZW5kb25seSB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XG5TRFBVdGlscy5wYXJzZUV4dG1hcCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoOSkuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIHtcbiAgICBpZDogcGFyc2VJbnQocGFydHNbMF0sIDEwKSxcbiAgICBkaXJlY3Rpb246IHBhcnRzWzBdLmluZGV4T2YoJy8nKSA+IDAgPyBwYXJ0c1swXS5zcGxpdCgnLycpWzFdIDogJ3NlbmRyZWN2JyxcbiAgICB1cmk6IHBhcnRzWzFdXG4gIH07XG59O1xuXG4vLyBHZW5lcmF0ZXMgYT1leHRtYXAgbGluZSBmcm9tIFJUQ1J0cEhlYWRlckV4dGVuc2lvblBhcmFtZXRlcnMgb3Jcbi8vIFJUQ1J0cEhlYWRlckV4dGVuc2lvbi5cblNEUFV0aWxzLndyaXRlRXh0bWFwID0gZnVuY3Rpb24oaGVhZGVyRXh0ZW5zaW9uKSB7XG4gIHJldHVybiAnYT1leHRtYXA6JyArIChoZWFkZXJFeHRlbnNpb24uaWQgfHwgaGVhZGVyRXh0ZW5zaW9uLnByZWZlcnJlZElkKSArXG4gICAgICAoaGVhZGVyRXh0ZW5zaW9uLmRpcmVjdGlvbiAmJiBoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uICE9PSAnc2VuZHJlY3YnXG4gICAgICAgICAgPyAnLycgKyBoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgJyAnICsgaGVhZGVyRXh0ZW5zaW9uLnVyaSArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIGFuIGZ0bXAgbGluZSwgcmV0dXJucyBkaWN0aW9uYXJ5LiBTYW1wbGUgaW5wdXQ6XG4vLyBhPWZtdHA6OTYgdmJyPW9uO2NuZz1vblxuLy8gQWxzbyBkZWFscyB3aXRoIHZicj1vbjsgY25nPW9uXG5TRFBVdGlscy5wYXJzZUZtdHAgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGt2O1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cihsaW5lLmluZGV4T2YoJyAnKSArIDEpLnNwbGl0KCc7Jyk7XG4gIGZvciAodmFyIGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICBrdiA9IHBhcnRzW2pdLnRyaW0oKS5zcGxpdCgnPScpO1xuICAgIHBhcnNlZFtrdlswXS50cmltKCldID0ga3ZbMV07XG4gIH1cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbi8vIEdlbmVyYXRlcyBhbiBhPWZ0bXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvciBSVENSdHBDb2RlY1BhcmFtZXRlcnMuXG5TRFBVdGlscy53cml0ZUZtdHAgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgbGluZSA9ICcnO1xuICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICB9XG4gIGlmIChjb2RlYy5wYXJhbWV0ZXJzICYmIE9iamVjdC5rZXlzKGNvZGVjLnBhcmFtZXRlcnMpLmxlbmd0aCkge1xuICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhjb2RlYy5wYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBpZiAoY29kZWMucGFyYW1ldGVyc1twYXJhbV0pIHtcbiAgICAgICAgcGFyYW1zLnB1c2gocGFyYW0gKyAnPScgKyBjb2RlYy5wYXJhbWV0ZXJzW3BhcmFtXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMucHVzaChwYXJhbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGluZSArPSAnYT1mbXRwOicgKyBwdCArICcgJyArIHBhcmFtcy5qb2luKCc7JykgKyAnXFxyXFxuJztcbiAgfVxuICByZXR1cm4gbGluZTtcbn07XG5cbi8vIFBhcnNlcyBhbiBydGNwLWZiIGxpbmUsIHJldHVybnMgUlRDUFJ0Y3BGZWVkYmFjayBvYmplY3QuIFNhbXBsZSBpbnB1dDpcbi8vIGE9cnRjcC1mYjo5OCBuYWNrIHJwc2lcblNEUFV0aWxzLnBhcnNlUnRjcEZiID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cihsaW5lLmluZGV4T2YoJyAnKSArIDEpLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogcGFydHMuc2hpZnQoKSxcbiAgICBwYXJhbWV0ZXI6IHBhcnRzLmpvaW4oJyAnKVxuICB9O1xufTtcbi8vIEdlbmVyYXRlIGE9cnRjcC1mYiBsaW5lcyBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvciBSVENSdHBDb2RlY1BhcmFtZXRlcnMuXG5TRFBVdGlscy53cml0ZVJ0Y3BGYiA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gIHZhciBsaW5lcyA9ICcnO1xuICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICB9XG4gIGlmIChjb2RlYy5ydGNwRmVlZGJhY2sgJiYgY29kZWMucnRjcEZlZWRiYWNrLmxlbmd0aCkge1xuICAgIC8vIEZJWE1FOiBzcGVjaWFsIGhhbmRsaW5nIGZvciB0cnItaW50P1xuICAgIGNvZGVjLnJ0Y3BGZWVkYmFjay5mb3JFYWNoKGZ1bmN0aW9uKGZiKSB7XG4gICAgICBsaW5lcyArPSAnYT1ydGNwLWZiOicgKyBwdCArICcgJyArIGZiLnR5cGUgK1xuICAgICAgKGZiLnBhcmFtZXRlciAmJiBmYi5wYXJhbWV0ZXIubGVuZ3RoID8gJyAnICsgZmIucGFyYW1ldGVyIDogJycpICtcbiAgICAgICAgICAnXFxyXFxuJztcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbGluZXM7XG59O1xuXG4vLyBQYXJzZXMgYW4gUkZDIDU1NzYgc3NyYyBtZWRpYSBhdHRyaWJ1dGUuIFNhbXBsZSBpbnB1dDpcbi8vIGE9c3NyYzozNzM1OTI4NTU5IGNuYW1lOnNvbWV0aGluZ1xuU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBzcCA9IGxpbmUuaW5kZXhPZignICcpO1xuICB2YXIgcGFydHMgPSB7XG4gICAgc3NyYzogcGFyc2VJbnQobGluZS5zdWJzdHIoNywgc3AgLSA3KSwgMTApXG4gIH07XG4gIHZhciBjb2xvbiA9IGxpbmUuaW5kZXhPZignOicsIHNwKTtcbiAgaWYgKGNvbG9uID4gLTEpIHtcbiAgICBwYXJ0cy5hdHRyaWJ1dGUgPSBsaW5lLnN1YnN0cihzcCArIDEsIGNvbG9uIC0gc3AgLSAxKTtcbiAgICBwYXJ0cy52YWx1ZSA9IGxpbmUuc3Vic3RyKGNvbG9uICsgMSk7XG4gIH0gZWxzZSB7XG4gICAgcGFydHMuYXR0cmlidXRlID0gbGluZS5zdWJzdHIoc3AgKyAxKTtcbiAgfVxuICByZXR1cm4gcGFydHM7XG59O1xuXG5TRFBVdGlscy5wYXJzZVNzcmNHcm91cCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoMTMpLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAgc2VtYW50aWNzOiBwYXJ0cy5zaGlmdCgpLFxuICAgIHNzcmNzOiBwYXJ0cy5tYXAoZnVuY3Rpb24oc3NyYykge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNzcmMsIDEwKTtcbiAgICB9KVxuICB9O1xufTtcblxuLy8gRXh0cmFjdHMgdGhlIE1JRCAoUkZDIDU4ODgpIGZyb20gYSBtZWRpYSBzZWN0aW9uLlxuLy8gcmV0dXJucyB0aGUgTUlEIG9yIHVuZGVmaW5lZCBpZiBubyBtaWQgbGluZSB3YXMgZm91bmQuXG5TRFBVdGlscy5nZXRNaWQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIG1pZCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9bWlkOicpWzBdO1xuICBpZiAobWlkKSB7XG4gICAgcmV0dXJuIG1pZC5zdWJzdHIoNik7XG4gIH1cbn07XG5cblNEUFV0aWxzLnBhcnNlRmluZ2VycHJpbnQgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDE0KS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGFsZ29yaXRobTogcGFydHNbMF0udG9Mb3dlckNhc2UoKSwgLy8gYWxnb3JpdGhtIGlzIGNhc2Utc2Vuc2l0aXZlIGluIEVkZ2UuXG4gICAgdmFsdWU6IHBhcnRzWzFdXG4gIH07XG59O1xuXG4vLyBFeHRyYWN0cyBEVExTIHBhcmFtZXRlcnMgZnJvbSBTRFAgbWVkaWEgc2VjdGlvbiBvciBzZXNzaW9ucGFydC5cbi8vIEZJWE1FOiBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBmdW5jdGlvbnMgdGhpcyBzaG91bGQgb25seVxuLy8gICBnZXQgdGhlIGZpbmdlcnByaW50IGxpbmUgYXMgaW5wdXQuIFNlZSBhbHNvIGdldEljZVBhcmFtZXRlcnMuXG5TRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uICsgc2Vzc2lvbnBhcnQsXG4gICAgICAnYT1maW5nZXJwcmludDonKTtcbiAgLy8gTm90ZTogYT1zZXR1cCBsaW5lIGlzIGlnbm9yZWQgc2luY2Ugd2UgdXNlIHRoZSAnYXV0bycgcm9sZS5cbiAgLy8gTm90ZTI6ICdhbGdvcml0aG0nIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZSBleGNlcHQgaW4gRWRnZS5cbiAgcmV0dXJuIHtcbiAgICByb2xlOiAnYXV0bycsXG4gICAgZmluZ2VycHJpbnRzOiBsaW5lcy5tYXAoU0RQVXRpbHMucGFyc2VGaW5nZXJwcmludClcbiAgfTtcbn07XG5cbi8vIFNlcmlhbGl6ZXMgRFRMUyBwYXJhbWV0ZXJzIHRvIFNEUC5cblNEUFV0aWxzLndyaXRlRHRsc1BhcmFtZXRlcnMgPSBmdW5jdGlvbihwYXJhbXMsIHNldHVwVHlwZSkge1xuICB2YXIgc2RwID0gJ2E9c2V0dXA6JyArIHNldHVwVHlwZSArICdcXHJcXG4nO1xuICBwYXJhbXMuZmluZ2VycHJpbnRzLmZvckVhY2goZnVuY3Rpb24oZnApIHtcbiAgICBzZHAgKz0gJ2E9ZmluZ2VycHJpbnQ6JyArIGZwLmFsZ29yaXRobSArICcgJyArIGZwLnZhbHVlICsgJ1xcclxcbic7XG4gIH0pO1xuICByZXR1cm4gc2RwO1xufTtcbi8vIFBhcnNlcyBJQ0UgaW5mb3JtYXRpb24gZnJvbSBTRFAgbWVkaWEgc2VjdGlvbiBvciBzZXNzaW9ucGFydC5cbi8vIEZJWE1FOiBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBmdW5jdGlvbnMgdGhpcyBzaG91bGQgb25seVxuLy8gICBnZXQgdGhlIGljZS11ZnJhZyBhbmQgaWNlLXB3ZCBsaW5lcyBhcyBpbnB1dC5cblNEUFV0aWxzLmdldEljZVBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgLy8gU2VhcmNoIGluIHNlc3Npb24gcGFydCwgdG9vLlxuICBsaW5lcyA9IGxpbmVzLmNvbmNhdChTRFBVdGlscy5zcGxpdExpbmVzKHNlc3Npb25wYXJ0KSk7XG4gIHZhciBpY2VQYXJhbWV0ZXJzID0ge1xuICAgIHVzZXJuYW1lRnJhZ21lbnQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gbGluZS5pbmRleE9mKCdhPWljZS11ZnJhZzonKSA9PT0gMDtcbiAgICB9KVswXS5zdWJzdHIoMTIpLFxuICAgIHBhc3N3b3JkOiBsaW5lcy5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgICAgcmV0dXJuIGxpbmUuaW5kZXhPZignYT1pY2UtcHdkOicpID09PSAwO1xuICAgIH0pWzBdLnN1YnN0cigxMClcbiAgfTtcbiAgcmV0dXJuIGljZVBhcmFtZXRlcnM7XG59O1xuXG4vLyBTZXJpYWxpemVzIElDRSBwYXJhbWV0ZXJzIHRvIFNEUC5cblNEUFV0aWxzLndyaXRlSWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICByZXR1cm4gJ2E9aWNlLXVmcmFnOicgKyBwYXJhbXMudXNlcm5hbWVGcmFnbWVudCArICdcXHJcXG4nICtcbiAgICAgICdhPWljZS1wd2Q6JyArIHBhcmFtcy5wYXNzd29yZCArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBhbmQgcmV0dXJucyBSVENSdHBQYXJhbWV0ZXJzLlxuU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IHtcbiAgICBjb2RlY3M6IFtdLFxuICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgIGZlY01lY2hhbmlzbXM6IFtdLFxuICAgIHJ0Y3A6IFtdXG4gIH07XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIG1saW5lID0gbGluZXNbMF0uc3BsaXQoJyAnKTtcbiAgZm9yICh2YXIgaSA9IDM7IGkgPCBtbGluZS5sZW5ndGg7IGkrKykgeyAvLyBmaW5kIGFsbCBjb2RlY3MgZnJvbSBtbGluZVszLi5dXG4gICAgdmFyIHB0ID0gbWxpbmVbaV07XG4gICAgdmFyIHJ0cG1hcGxpbmUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydHBtYXA6JyArIHB0ICsgJyAnKVswXTtcbiAgICBpZiAocnRwbWFwbGluZSkge1xuICAgICAgdmFyIGNvZGVjID0gU0RQVXRpbHMucGFyc2VSdHBNYXAocnRwbWFwbGluZSk7XG4gICAgICB2YXIgZm10cHMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPWZtdHA6JyArIHB0ICsgJyAnKTtcbiAgICAgIC8vIE9ubHkgdGhlIGZpcnN0IGE9Zm10cDo8cHQ+IGlzIGNvbnNpZGVyZWQuXG4gICAgICBjb2RlYy5wYXJhbWV0ZXJzID0gZm10cHMubGVuZ3RoID8gU0RQVXRpbHMucGFyc2VGbXRwKGZtdHBzWzBdKSA6IHt9O1xuICAgICAgY29kZWMucnRjcEZlZWRiYWNrID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoXG4gICAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydGNwLWZiOicgKyBwdCArICcgJylcbiAgICAgICAgLm1hcChTRFBVdGlscy5wYXJzZVJ0Y3BGYik7XG4gICAgICBkZXNjcmlwdGlvbi5jb2RlY3MucHVzaChjb2RlYyk7XG4gICAgICAvLyBwYXJzZSBGRUMgbWVjaGFuaXNtcyBmcm9tIHJ0cG1hcCBsaW5lcy5cbiAgICAgIHN3aXRjaCAoY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ1JFRCc6XG4gICAgICAgIGNhc2UgJ1VMUEZFQyc6XG4gICAgICAgICAgZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5wdXNoKGNvZGVjLm5hbWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIG9ubHkgUkVEIGFuZCBVTFBGRUMgYXJlIHJlY29nbml6ZWQgYXMgRkVDIG1lY2hhbmlzbXMuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9ZXh0bWFwOicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGRlc2NyaXB0aW9uLmhlYWRlckV4dGVuc2lvbnMucHVzaChTRFBVdGlscy5wYXJzZUV4dG1hcChsaW5lKSk7XG4gIH0pO1xuICAvLyBGSVhNRTogcGFyc2UgcnRjcC5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufTtcblxuLy8gR2VuZXJhdGVzIHBhcnRzIG9mIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBkZXNjcmliaW5nIHRoZSBjYXBhYmlsaXRpZXMgL1xuLy8gcGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24gPSBmdW5jdGlvbihraW5kLCBjYXBzKSB7XG4gIHZhciBzZHAgPSAnJztcblxuICAvLyBCdWlsZCB0aGUgbWxpbmUuXG4gIHNkcCArPSAnbT0nICsga2luZCArICcgJztcbiAgc2RwICs9IGNhcHMuY29kZWNzLmxlbmd0aCA+IDAgPyAnOScgOiAnMCc7IC8vIHJlamVjdCBpZiBubyBjb2RlY3MuXG4gIHNkcCArPSAnIFVEUC9UTFMvUlRQL1NBVlBGICc7XG4gIHNkcCArPSBjYXBzLmNvZGVjcy5tYXAoZnVuY3Rpb24oY29kZWMpIHtcbiAgICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gY29kZWMucGF5bG9hZFR5cGU7XG4gIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuXG4gIHNkcCArPSAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbic7XG4gIHNkcCArPSAnYT1ydGNwOjkgSU4gSVA0IDAuMC4wLjBcXHJcXG4nO1xuXG4gIC8vIEFkZCBhPXJ0cG1hcCBsaW5lcyBmb3IgZWFjaCBjb2RlYy4gQWxzbyBmbXRwIGFuZCBydGNwLWZiLlxuICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgc2RwICs9IFNEUFV0aWxzLndyaXRlUnRwTWFwKGNvZGVjKTtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVGbXRwKGNvZGVjKTtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdGNwRmIoY29kZWMpO1xuICB9KTtcbiAgdmFyIG1heHB0aW1lID0gMDtcbiAgY2Fwcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5tYXhwdGltZSA+IG1heHB0aW1lKSB7XG4gICAgICBtYXhwdGltZSA9IGNvZGVjLm1heHB0aW1lO1xuICAgIH1cbiAgfSk7XG4gIGlmIChtYXhwdGltZSA+IDApIHtcbiAgICBzZHAgKz0gJ2E9bWF4cHRpbWU6JyArIG1heHB0aW1lICsgJ1xcclxcbic7XG4gIH1cbiAgc2RwICs9ICdhPXJ0Y3AtbXV4XFxyXFxuJztcblxuICBpZiAoY2Fwcy5oZWFkZXJFeHRlbnNpb25zKSB7XG4gICAgY2Fwcy5oZWFkZXJFeHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVFeHRtYXAoZXh0ZW5zaW9uKTtcbiAgICB9KTtcbiAgfVxuICAvLyBGSVhNRTogd3JpdGUgZmVjTWVjaGFuaXNtcy5cbiAgcmV0dXJuIHNkcDtcbn07XG5cbi8vIFBhcnNlcyB0aGUgU0RQIG1lZGlhIHNlY3Rpb24gYW5kIHJldHVybnMgYW4gYXJyYXkgb2Zcbi8vIFJUQ1J0cEVuY29kaW5nUGFyYW1ldGVycy5cblNEUFV0aWxzLnBhcnNlUnRwRW5jb2RpbmdQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBlbmNvZGluZ1BhcmFtZXRlcnMgPSBbXTtcbiAgdmFyIGRlc2NyaXB0aW9uID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gIHZhciBoYXNSZWQgPSBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLmluZGV4T2YoJ1JFRCcpICE9PSAtMTtcbiAgdmFyIGhhc1VscGZlYyA9IGRlc2NyaXB0aW9uLmZlY01lY2hhbmlzbXMuaW5kZXhPZignVUxQRkVDJykgIT09IC0xO1xuXG4gIC8vIGZpbHRlciBhPXNzcmM6Li4uIGNuYW1lOiwgaWdub3JlIFBsYW5CLW1zaWRcbiAgdmFyIHNzcmNzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBTRFBVdGlscy5wYXJzZVNzcmNNZWRpYShsaW5lKTtcbiAgfSlcbiAgLmZpbHRlcihmdW5jdGlvbihwYXJ0cykge1xuICAgIHJldHVybiBwYXJ0cy5hdHRyaWJ1dGUgPT09ICdjbmFtZSc7XG4gIH0pO1xuICB2YXIgcHJpbWFyeVNzcmMgPSBzc3Jjcy5sZW5ndGggPiAwICYmIHNzcmNzWzBdLnNzcmM7XG4gIHZhciBzZWNvbmRhcnlTc3JjO1xuXG4gIHZhciBmbG93cyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c3NyYy1ncm91cDpGSUQnKVxuICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cigxNykuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4gcGFydHMubWFwKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChwYXJ0LCAxMCk7XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoZmxvd3MubGVuZ3RoID4gMCAmJiBmbG93c1swXS5sZW5ndGggPiAxICYmIGZsb3dzWzBdWzBdID09PSBwcmltYXJ5U3NyYykge1xuICAgIHNlY29uZGFyeVNzcmMgPSBmbG93c1swXVsxXTtcbiAgfVxuXG4gIGRlc2NyaXB0aW9uLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgaWYgKGNvZGVjLm5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1JUWCcgJiYgY29kZWMucGFyYW1ldGVycy5hcHQpIHtcbiAgICAgIHZhciBlbmNQYXJhbSA9IHtcbiAgICAgICAgc3NyYzogcHJpbWFyeVNzcmMsXG4gICAgICAgIGNvZGVjUGF5bG9hZFR5cGU6IHBhcnNlSW50KGNvZGVjLnBhcmFtZXRlcnMuYXB0LCAxMClcbiAgICAgIH07XG4gICAgICBpZiAocHJpbWFyeVNzcmMgJiYgc2Vjb25kYXJ5U3NyYykge1xuICAgICAgICBlbmNQYXJhbS5ydHggPSB7c3NyYzogc2Vjb25kYXJ5U3NyY307XG4gICAgICB9XG4gICAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaChlbmNQYXJhbSk7XG4gICAgICBpZiAoaGFzUmVkKSB7XG4gICAgICAgIGVuY1BhcmFtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbmNQYXJhbSkpO1xuICAgICAgICBlbmNQYXJhbS5mZWMgPSB7XG4gICAgICAgICAgc3NyYzogc2Vjb25kYXJ5U3NyYyxcbiAgICAgICAgICBtZWNoYW5pc206IGhhc1VscGZlYyA/ICdyZWQrdWxwZmVjJyA6ICdyZWQnXG4gICAgICAgIH07XG4gICAgICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKGVuY1BhcmFtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoZW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMCAmJiBwcmltYXJ5U3NyYykge1xuICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIHNzcmM6IHByaW1hcnlTc3JjXG4gICAgfSk7XG4gIH1cblxuICAvLyB3ZSBzdXBwb3J0IGJvdGggYj1BUyBhbmQgYj1USUFTIGJ1dCBpbnRlcnByZXQgQVMgYXMgVElBUy5cbiAgdmFyIGJhbmR3aWR0aCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2I9Jyk7XG4gIGlmIChiYW5kd2lkdGgubGVuZ3RoKSB7XG4gICAgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPVRJQVM6JykgPT09IDApIHtcbiAgICAgIGJhbmR3aWR0aCA9IHBhcnNlSW50KGJhbmR3aWR0aFswXS5zdWJzdHIoNyksIDEwKTtcbiAgICB9IGVsc2UgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPUFTOicpID09PSAwKSB7XG4gICAgICAvLyB1c2UgZm9ybXVsYSBmcm9tIEpTRVAgdG8gY29udmVydCBiPUFTIHRvIFRJQVMgdmFsdWUuXG4gICAgICBiYW5kd2lkdGggPSBwYXJzZUludChiYW5kd2lkdGhbMF0uc3Vic3RyKDUpLCAxMCkgKiAxMDAwICogMC45NVxuICAgICAgICAgIC0gKDUwICogNDAgKiA4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFuZHdpZHRoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5tYXhCaXRyYXRlID0gYmFuZHdpZHRoO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbmNvZGluZ1BhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgaHR0cDovL2RyYWZ0Lm9ydGMub3JnLyNydGNydGNwcGFyYW1ldGVycypcblNEUFV0aWxzLnBhcnNlUnRjcFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIHJ0Y3BQYXJhbWV0ZXJzID0ge307XG5cbiAgLy8gR2V0cyB0aGUgZmlyc3QgU1NSQy4gTm90ZSB0aGEgd2l0aCBSVFggdGhlcmUgbWlnaHQgYmUgbXVsdGlwbGVcbiAgLy8gU1NSQ3MuXG4gIHZhciByZW1vdGVTc3JjID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gICAgICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouYXR0cmlidXRlID09PSAnY25hbWUnO1xuICAgICAgfSlbMF07XG4gIGlmIChyZW1vdGVTc3JjKSB7XG4gICAgcnRjcFBhcmFtZXRlcnMuY25hbWUgPSByZW1vdGVTc3JjLnZhbHVlO1xuICAgIHJ0Y3BQYXJhbWV0ZXJzLnNzcmMgPSByZW1vdGVTc3JjLnNzcmM7XG4gIH1cblxuICAvLyBFZGdlIHVzZXMgdGhlIGNvbXBvdW5kIGF0dHJpYnV0ZSBpbnN0ZWFkIG9mIHJlZHVjZWRTaXplXG4gIC8vIGNvbXBvdW5kIGlzICFyZWR1Y2VkU2l6ZVxuICB2YXIgcnNpemUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtcnNpemUnKTtcbiAgcnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUgPSByc2l6ZS5sZW5ndGggPiAwO1xuICBydGNwUGFyYW1ldGVycy5jb21wb3VuZCA9IHJzaXplLmxlbmd0aCA9PT0gMDtcblxuICAvLyBwYXJzZXMgdGhlIHJ0Y3AtbXV4IGF0dHLRlmJ1dGUuXG4gIC8vIE5vdGUgdGhhdCBFZGdlIGRvZXMgbm90IHN1cHBvcnQgdW5tdXhlZCBSVENQLlxuICB2YXIgbXV4ID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1ydGNwLW11eCcpO1xuICBydGNwUGFyYW1ldGVycy5tdXggPSBtdXgubGVuZ3RoID4gMDtcblxuICByZXR1cm4gcnRjcFBhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgZWl0aGVyIGE9bXNpZDogb3IgYT1zc3JjOi4uLiBtc2lkIGxpbmVzIGFuZCByZXR1cm5zXG4vLyB0aGUgaWQgb2YgdGhlIE1lZGlhU3RyZWFtIGFuZCBNZWRpYVN0cmVhbVRyYWNrLlxuU0RQVXRpbHMucGFyc2VNc2lkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHNwZWMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1zaWQ6Jyk7XG4gIGlmIChzcGVjLmxlbmd0aCA9PT0gMSkge1xuICAgIHBhcnRzID0gc3BlY1swXS5zdWJzdHIoNykuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4ge3N0cmVhbTogcGFydHNbMF0sIHRyYWNrOiBwYXJ0c1sxXX07XG4gIH1cbiAgdmFyIHBsYW5CID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBTRFBVdGlscy5wYXJzZVNzcmNNZWRpYShsaW5lKTtcbiAgfSlcbiAgLmZpbHRlcihmdW5jdGlvbihtc2lkUGFydHMpIHtcbiAgICByZXR1cm4gbXNpZFBhcnRzLmF0dHJpYnV0ZSA9PT0gJ21zaWQnO1xuICB9KTtcbiAgaWYgKHBsYW5CLmxlbmd0aCA+IDApIHtcbiAgICBwYXJ0cyA9IHBsYW5CWzBdLnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgcmV0dXJuIHtzdHJlYW06IHBhcnRzWzBdLCB0cmFjazogcGFydHNbMV19O1xuICB9XG59O1xuXG4vLyBHZW5lcmF0ZSBhIHNlc3Npb24gSUQgZm9yIFNEUC5cbi8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC1pZXRmLXJ0Y3dlYi1qc2VwLTIwI3NlY3Rpb24tNS4yLjFcbi8vIHJlY29tbWVuZHMgdXNpbmcgYSBjcnlwdG9ncmFwaGljYWxseSByYW5kb20gK3ZlIDY0LWJpdCB2YWx1ZVxuLy8gYnV0IHJpZ2h0IG5vdyB0aGlzIHNob3VsZCBiZSBhY2NlcHRhYmxlIGFuZCB3aXRoaW4gdGhlIHJpZ2h0IHJhbmdlXG5TRFBVdGlscy5nZW5lcmF0ZVNlc3Npb25JZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnN1YnN0cigyLCAyMSk7XG59O1xuXG4vLyBXcml0ZSBib2lsZGVyIHBsYXRlIGZvciBzdGFydCBvZiBTRFBcbi8vIHNlc3NJZCBhcmd1bWVudCBpcyBvcHRpb25hbCAtIGlmIG5vdCBzdXBwbGllZCBpdCB3aWxsXG4vLyBiZSBnZW5lcmF0ZWQgcmFuZG9tbHlcbi8vIHNlc3NWZXJzaW9uIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byAyXG5TRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSA9IGZ1bmN0aW9uKHNlc3NJZCwgc2Vzc1Zlcikge1xuICB2YXIgc2Vzc2lvbklkO1xuICB2YXIgdmVyc2lvbiA9IHNlc3NWZXIgIT09IHVuZGVmaW5lZCA/IHNlc3NWZXIgOiAyO1xuICBpZiAoc2Vzc0lkKSB7XG4gICAgc2Vzc2lvbklkID0gc2Vzc0lkO1xuICB9IGVsc2Uge1xuICAgIHNlc3Npb25JZCA9IFNEUFV0aWxzLmdlbmVyYXRlU2Vzc2lvbklkKCk7XG4gIH1cbiAgLy8gRklYTUU6IHNlc3MtaWQgc2hvdWxkIGJlIGFuIE5UUCB0aW1lc3RhbXAuXG4gIHJldHVybiAndj0wXFxyXFxuJyArXG4gICAgICAnbz10aGlzaXNhZGFwdGVyb3J0YyAnICsgc2Vzc2lvbklkICsgJyAnICsgdmVyc2lvbiArXG4gICAgICAgICcgSU4gSVA0IDEyNy4wLjAuMVxcclxcbicgK1xuICAgICAgJ3M9LVxcclxcbicgK1xuICAgICAgJ3Q9MCAwXFxyXFxuJztcbn07XG5cblNEUFV0aWxzLndyaXRlTWVkaWFTZWN0aW9uID0gZnVuY3Rpb24odHJhbnNjZWl2ZXIsIGNhcHMsIHR5cGUsIHN0cmVhbSkge1xuICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVSdHBEZXNjcmlwdGlvbih0cmFuc2NlaXZlci5raW5kLCBjYXBzKTtcblxuICAvLyBNYXAgSUNFIHBhcmFtZXRlcnMgKHVmcmFnLCBwd2QpIHRvIFNEUC5cbiAgc2RwICs9IFNEUFV0aWxzLndyaXRlSWNlUGFyYW1ldGVycyhcbiAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLmdldExvY2FsUGFyYW1ldGVycygpKTtcblxuICAvLyBNYXAgRFRMUyBwYXJhbWV0ZXJzIHRvIFNEUC5cbiAgc2RwICs9IFNEUFV0aWxzLndyaXRlRHRsc1BhcmFtZXRlcnMoXG4gICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LmdldExvY2FsUGFyYW1ldGVycygpLFxuICAgICAgdHlwZSA9PT0gJ29mZmVyJyA/ICdhY3RwYXNzJyA6ICdhY3RpdmUnKTtcblxuICBzZHAgKz0gJ2E9bWlkOicgKyB0cmFuc2NlaXZlci5taWQgKyAnXFxyXFxuJztcblxuICBpZiAodHJhbnNjZWl2ZXIuZGlyZWN0aW9uKSB7XG4gICAgc2RwICs9ICdhPScgKyB0cmFuc2NlaXZlci5kaXJlY3Rpb24gKyAnXFxyXFxuJztcbiAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIgJiYgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICBzZHAgKz0gJ2E9c2VuZHJlY3ZcXHJcXG4nO1xuICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgIHNkcCArPSAnYT1zZW5kb25seVxcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICBzZHAgKz0gJ2E9cmVjdm9ubHlcXHJcXG4nO1xuICB9IGVsc2Uge1xuICAgIHNkcCArPSAnYT1pbmFjdGl2ZVxcclxcbic7XG4gIH1cblxuICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgLy8gc3BlYy5cbiAgICB2YXIgbXNpZCA9ICdtc2lkOicgKyBzdHJlYW0uaWQgKyAnICcgK1xuICAgICAgICB0cmFuc2NlaXZlci5ydHBTZW5kZXIudHJhY2suaWQgKyAnXFxyXFxuJztcbiAgICBzZHAgKz0gJ2E9JyArIG1zaWQ7XG5cbiAgICAvLyBmb3IgQ2hyb21lLlxuICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgK1xuICAgICAgICAnICcgKyBtc2lkO1xuICAgIGlmICh0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAgICcgJyArIG1zaWQ7XG4gICAgICBzZHAgKz0gJ2E9c3NyYy1ncm91cDpGSUQgJyArXG4gICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICsgJyAnICtcbiAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgICAnXFxyXFxuJztcbiAgICB9XG4gIH1cbiAgLy8gRklYTUU6IHRoaXMgc2hvdWxkIGJlIHdyaXR0ZW4gYnkgd3JpdGVSdHBEZXNjcmlwdGlvbi5cbiAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArXG4gICAgICAnIGNuYW1lOicgKyBTRFBVdGlscy5sb2NhbENOYW1lICsgJ1xcclxcbic7XG4gIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIgJiYgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHgpIHtcbiAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICcgY25hbWU6JyArIFNEUFV0aWxzLmxvY2FsQ05hbWUgKyAnXFxyXFxuJztcbiAgfVxuICByZXR1cm4gc2RwO1xufTtcblxuLy8gR2V0cyB0aGUgZGlyZWN0aW9uIGZyb20gdGhlIG1lZGlhU2VjdGlvbiBvciB0aGUgc2Vzc2lvbnBhcnQuXG5TRFBVdGlscy5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gIC8vIExvb2sgZm9yIHNlbmRyZWN2LCBzZW5kb25seSwgcmVjdm9ubHksIGluYWN0aXZlLCBkZWZhdWx0IHRvIHNlbmRyZWN2LlxuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGxpbmVzW2ldKSB7XG4gICAgICBjYXNlICdhPXNlbmRyZWN2JzpcbiAgICAgIGNhc2UgJ2E9c2VuZG9ubHknOlxuICAgICAgY2FzZSAnYT1yZWN2b25seSc6XG4gICAgICBjYXNlICdhPWluYWN0aXZlJzpcbiAgICAgICAgcmV0dXJuIGxpbmVzW2ldLnN1YnN0cigyKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIEZJWE1FOiBXaGF0IHNob3VsZCBoYXBwZW4gaGVyZT9cbiAgICB9XG4gIH1cbiAgaWYgKHNlc3Npb25wYXJ0KSB7XG4gICAgcmV0dXJuIFNEUFV0aWxzLmdldERpcmVjdGlvbihzZXNzaW9ucGFydCk7XG4gIH1cbiAgcmV0dXJuICdzZW5kcmVjdic7XG59O1xuXG5TRFBVdGlscy5nZXRLaW5kID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIG1saW5lID0gbGluZXNbMF0uc3BsaXQoJyAnKTtcbiAgcmV0dXJuIG1saW5lWzBdLnN1YnN0cigyKTtcbn07XG5cblNEUFV0aWxzLmlzUmVqZWN0ZWQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgcmV0dXJuIG1lZGlhU2VjdGlvbi5zcGxpdCgnICcsIDIpWzFdID09PSAnMCc7XG59O1xuXG5TRFBVdGlscy5wYXJzZU1MaW5lID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIHBhcnRzID0gbGluZXNbMF0uc3Vic3RyKDIpLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAga2luZDogcGFydHNbMF0sXG4gICAgcG9ydDogcGFyc2VJbnQocGFydHNbMV0sIDEwKSxcbiAgICBwcm90b2NvbDogcGFydHNbMl0sXG4gICAgZm10OiBwYXJ0cy5zbGljZSgzKS5qb2luKCcgJylcbiAgfTtcbn07XG5cblNEUFV0aWxzLnBhcnNlT0xpbmUgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGxpbmUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdvPScpWzBdO1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cigyKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOiBwYXJ0c1swXSxcbiAgICBzZXNzaW9uSWQ6IHBhcnRzWzFdLFxuICAgIHNlc3Npb25WZXJzaW9uOiBwYXJzZUludChwYXJ0c1syXSwgMTApLFxuICAgIG5ldFR5cGU6IHBhcnRzWzNdLFxuICAgIGFkZHJlc3NUeXBlOiBwYXJ0c1s0XSxcbiAgICBhZGRyZXNzOiBwYXJ0c1s1XVxuICB9O1xufTtcblxuLy8gYSB2ZXJ5IG5haXZlIGludGVycHJldGF0aW9uIG9mIGEgdmFsaWQgU0RQLlxuU0RQVXRpbHMuaXNWYWxpZFNEUCA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgaWYgKHR5cGVvZiBibG9iICE9PSAnc3RyaW5nJyB8fCBibG9iLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKGJsb2IpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxpbmVzW2ldLmxlbmd0aCA8IDIgfHwgbGluZXNbaV0uY2hhckF0KDEpICE9PSAnPScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gVE9ETzogY2hlY2sgdGhlIG1vZGlmaWVyIGEgYml0IG1vcmUuXG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBTRFBVdGlscztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZHAvc2RwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFkYXB0ZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9hZGFwdGVyX2ZhY3RvcnkuanMnKTtcbm1vZHVsZS5leHBvcnRzID0gYWRhcHRlckZhY3Rvcnkoe3dpbmRvdzogZ2xvYmFsLndpbmRvd30pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9hZGFwdGVyX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaGltbWluZyBzdGFydHMgaGVyZS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGVwZW5kZW5jaWVzLCBvcHRzKSB7XG4gIHZhciB3aW5kb3cgPSBkZXBlbmRlbmNpZXMgJiYgZGVwZW5kZW5jaWVzLndpbmRvdztcblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBzaGltQ2hyb21lOiB0cnVlLFxuICAgIHNoaW1GaXJlZm94OiB0cnVlLFxuICAgIHNoaW1FZGdlOiB0cnVlLFxuICAgIHNoaW1TYWZhcmk6IHRydWUsXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIG9wdHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvcHRzLCBrZXkpKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbHMuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgdmFyIGxvZ2dpbmcgPSB1dGlscy5sb2c7XG4gIHZhciBicm93c2VyRGV0YWlscyA9IHV0aWxzLmRldGVjdEJyb3dzZXIod2luZG93KTtcblxuICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICB2YXIgYWRhcHRlciA9IHtcbiAgICBicm93c2VyRGV0YWlsczogYnJvd3NlckRldGFpbHMsXG4gICAgZXh0cmFjdFZlcnNpb246IHV0aWxzLmV4dHJhY3RWZXJzaW9uLFxuICAgIGRpc2FibGVMb2c6IHV0aWxzLmRpc2FibGVMb2csXG4gICAgZGlzYWJsZVdhcm5pbmdzOiB1dGlscy5kaXNhYmxlV2FybmluZ3NcbiAgfTtcblxuICAvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgaWYgeW91IHdhbnQgbG9nZ2luZyB0byBvY2N1ciwgaW5jbHVkaW5nIGxvZ2dpbmdcbiAgLy8gZm9yIHRoZSBzd2l0Y2ggc3RhdGVtZW50IGJlbG93LiBDYW4gYWxzbyBiZSB0dXJuZWQgb24gaW4gdGhlIGJyb3dzZXIgdmlhXG4gIC8vIGFkYXB0ZXIuZGlzYWJsZUxvZyhmYWxzZSksIGJ1dCB0aGVuIGxvZ2dpbmcgZnJvbSB0aGUgc3dpdGNoIHN0YXRlbWVudCBiZWxvd1xuICAvLyB3aWxsIG5vdCBhcHBlYXIuXG4gIC8vIHJlcXVpcmUoJy4vdXRpbHMnKS5kaXNhYmxlTG9nKGZhbHNlKTtcblxuICAvLyBCcm93c2VyIHNoaW1zLlxuICB2YXIgY2hyb21lU2hpbSA9IHJlcXVpcmUoJy4vY2hyb21lL2Nocm9tZV9zaGltJykgfHwgbnVsbDtcbiAgdmFyIGVkZ2VTaGltID0gcmVxdWlyZSgnLi9lZGdlL2VkZ2Vfc2hpbScpIHx8IG51bGw7XG4gIHZhciBmaXJlZm94U2hpbSA9IHJlcXVpcmUoJy4vZmlyZWZveC9maXJlZm94X3NoaW0nKSB8fCBudWxsO1xuICB2YXIgc2FmYXJpU2hpbSA9IHJlcXVpcmUoJy4vc2FmYXJpL3NhZmFyaV9zaGltJykgfHwgbnVsbDtcblxuICAvLyBTaGltIGJyb3dzZXIgaWYgZm91bmQuXG4gIHN3aXRjaCAoYnJvd3NlckRldGFpbHMuYnJvd3Nlcikge1xuICAgIGNhc2UgJ2Nocm9tZSc6XG4gICAgICBpZiAoIWNocm9tZVNoaW0gfHwgIWNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgICAgIW9wdGlvbnMuc2hpbUNocm9tZSkge1xuICAgICAgICBsb2dnaW5nKCdDaHJvbWUgc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBjaHJvbWUuJyk7XG4gICAgICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICAgICAgYWRhcHRlci5icm93c2VyU2hpbSA9IGNocm9tZVNoaW07XG5cbiAgICAgIGNocm9tZVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltTWVkaWFTdHJlYW0od2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbVNvdXJjZU9iamVjdCh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltUGVlckNvbm5lY3Rpb24od2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbU9uVHJhY2sod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2sod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbUdldFNlbmRlcnNXaXRoRHRtZih3aW5kb3cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmlyZWZveCc6XG4gICAgICBpZiAoIWZpcmVmb3hTaGltIHx8ICFmaXJlZm94U2hpbS5zaGltUGVlckNvbm5lY3Rpb24gfHxcbiAgICAgICAgICAhb3B0aW9ucy5zaGltRmlyZWZveCkge1xuICAgICAgICBsb2dnaW5nKCdGaXJlZm94IHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgZmlyZWZveC4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gZmlyZWZveFNoaW07XG5cbiAgICAgIGZpcmVmb3hTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1Tb3VyY2VPYmplY3Qod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbih3aW5kb3cpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbU9uVHJhY2sod2luZG93KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2VkZ2UnOlxuICAgICAgaWYgKCFlZGdlU2hpbSB8fCAhZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8ICFvcHRpb25zLnNoaW1FZGdlKSB7XG4gICAgICAgIGxvZ2dpbmcoJ01TIGVkZ2Ugc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBlZGdlLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBlZGdlU2hpbTtcblxuICAgICAgZWRnZVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdyk7XG4gICAgICBlZGdlU2hpbS5zaGltUmVwbGFjZVRyYWNrKHdpbmRvdyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzYWZhcmknOlxuICAgICAgaWYgKCFzYWZhcmlTaGltIHx8ICFvcHRpb25zLnNoaW1TYWZhcmkpIHtcbiAgICAgICAgbG9nZ2luZygnU2FmYXJpIHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgc2FmYXJpLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBzYWZhcmlTaGltO1xuICAgICAgLy8gc2hpbSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCBTYWZhcmkgKHRlY2huaWNhbCBwcmV2aWV3KVxuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltUlRDSWNlU2VydmVyVXJscyh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltQ2FsbGJhY2tzQVBJKHdpbmRvdyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1Mb2NhbFN0cmVhbXNBUEkod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbVJlbW90ZVN0cmVhbXNBUEkod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxvZ2dpbmcoJ1Vuc3VwcG9ydGVkIGJyb3dzZXIhJyk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBhZGFwdGVyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9mYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG52YXIgbG9nZ2luZyA9IHV0aWxzLmxvZztcblxudmFyIGNocm9tZVNoaW0gPSB7XG4gIHNoaW1NZWRpYVN0cmVhbTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgd2luZG93Lk1lZGlhU3RyZWFtID0gd2luZG93Lk1lZGlhU3RyZWFtIHx8IHdpbmRvdy53ZWJraXRNZWRpYVN0cmVhbTtcbiAgfSxcblxuICBzaGltT25UcmFjazogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiAhKCdvbnRyYWNrJyBpblxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdvbnRyYWNrJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbnRyYWNrO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAodGhpcy5fb250cmFjaykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayA9IGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciBvcmlnU2V0UmVtb3RlRGVzY3JpcHRpb24gPVxuICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb247XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIGlmICghcGMuX29udHJhY2twb2x5KSB7XG4gICAgICAgICAgcGMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gb25hZGRzdHJlYW0gZG9lcyBub3QgZmlyZSB3aGVuIGEgdHJhY2sgaXMgYWRkZWQgdG8gYW4gZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIHN0cmVhbS4gQnV0IHN0cmVhbS5vbmFkZHRyYWNrIGlzIGltcGxlbWVudGVkIHNvIHdlIHVzZSB0aGF0LlxuICAgICAgICAgICAgZS5zdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkdHJhY2snLCBmdW5jdGlvbih0ZSkge1xuICAgICAgICAgICAgICB2YXIgcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycykge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0gcGMuZ2V0UmVjZWl2ZXJzKCkuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gci50cmFjayAmJiByLnRyYWNrLmlkID09PSB0ZS50cmFjay5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHt0cmFjazogdGUudHJhY2t9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRlLnRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICAgICAgcGMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgICAgdmFyIHJlY2VpdmVyO1xuICAgICAgICAgICAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHBjLmdldFJlY2VpdmVycygpLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIudHJhY2sgJiYgci50cmFjay5pZCA9PT0gdHJhY2suaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB7dHJhY2s6IHRyYWNrfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICBwYy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcGMuYWRkRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgcGMuX29udHJhY2twb2x5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ1NldFJlbW90ZURlc2NyaXB0aW9uLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbUdldFNlbmRlcnNXaXRoRHRtZjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gT3ZlcnJpZGVzIGFkZFRyYWNrL3JlbW92ZVRyYWNrLCBkZXBlbmRzIG9uIHNoaW1BZGRUcmFja1JlbW92ZVRyYWNrLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiZcbiAgICAgICAgISgnZ2V0U2VuZGVycycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkgJiZcbiAgICAgICAgJ2NyZWF0ZURUTUZTZW5kZXInIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpIHtcbiAgICAgIHZhciBzaGltU2VuZGVyV2l0aER0bWYgPSBmdW5jdGlvbihwYywgdHJhY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgICAgZ2V0IGR0bWYoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZHRtZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmICh0cmFjay5raW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IHBjLmNyZWF0ZURUTUZTZW5kZXIodHJhY2spO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9wYzogcGNcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGF1Z21lbnQgYWRkVHJhY2sgd2hlbiBnZXRTZW5kZXJzIGlzIG5vdCBhdmFpbGFibGUuXG4gICAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycykge1xuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9zZW5kZXJzID0gdGhpcy5fc2VuZGVycyB8fCBbXTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2VuZGVycy5zbGljZSgpOyAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9yaWdBZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaywgc3RyZWFtKSB7XG4gICAgICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgICAgICB2YXIgc2VuZGVyID0gb3JpZ0FkZFRyYWNrLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGlmICghc2VuZGVyKSB7XG4gICAgICAgICAgICBzZW5kZXIgPSBzaGltU2VuZGVyV2l0aER0bWYocGMsIHRyYWNrKTtcbiAgICAgICAgICAgIHBjLl9zZW5kZXJzLnB1c2goc2VuZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbmRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3JpZ1JlbW92ZVRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjaztcbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjayA9IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgICAgb3JpZ1JlbW92ZVRyYWNrLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHZhciBpZHggPSBwYy5fc2VuZGVycy5pbmRleE9mKHNlbmRlcik7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHBjLl9zZW5kZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBvcmlnQWRkU3RyZWFtID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRTdHJlYW07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICBwYy5fc2VuZGVycyA9IHBjLl9zZW5kZXJzIHx8IFtdO1xuICAgICAgICBvcmlnQWRkU3RyZWFtLmFwcGx5KHBjLCBbc3RyZWFtXSk7XG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgcGMuX3NlbmRlcnMucHVzaChzaGltU2VuZGVyV2l0aER0bWYocGMsIHRyYWNrKSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIHBjLl9zZW5kZXJzID0gcGMuX3NlbmRlcnMgfHwgW107XG4gICAgICAgIG9yaWdSZW1vdmVTdHJlYW0uYXBwbHkocGMsIFsocGMuX3N0cmVhbXNbc3RyZWFtLmlkXSB8fCBzdHJlYW0pXSk7XG5cbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICB2YXIgc2VuZGVyID0gcGMuX3NlbmRlcnMuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNlbmRlcikge1xuICAgICAgICAgICAgcGMuX3NlbmRlcnMuc3BsaWNlKHBjLl9zZW5kZXJzLmluZGV4T2Yoc2VuZGVyKSwgMSk7IC8vIHJlbW92ZSBzZW5kZXJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgICAgJ2dldFNlbmRlcnMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgICAgICdjcmVhdGVEVE1GU2VuZGVyJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAgICAgICAgICAhKCdkdG1mJyBpbiB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSkpIHtcbiAgICAgIHZhciBvcmlnR2V0U2VuZGVycyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VuZGVycyA9IG9yaWdHZXRTZW5kZXJzLmFwcGx5KHBjLCBbXSk7XG4gICAgICAgIHNlbmRlcnMuZm9yRWFjaChmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICBzZW5kZXIuX3BjID0gcGM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VuZGVycztcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSwgJ2R0bWYnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2R0bWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gdGhpcy5fcGMuY3JlYXRlRFRNRlNlbmRlcih0aGlzLnRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHNoaW1Tb3VyY2VPYmplY3Q6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBVUkwgPSB3aW5kb3cgJiYgd2luZG93LlVSTDtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICAvLyBTaGltIHRoZSBzcmNPYmplY3QgcHJvcGVydHksIG9uY2UsIHdoZW4gSFRNTE1lZGlhRWxlbWVudCBpcyBmb3VuZC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NyY09iamVjdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAvLyBVc2UgX3NyY09iamVjdCBhcyBhIHByaXZhdGUgcHJvcGVydHkgZm9yIHRoaXMgc2hpbVxuICAgICAgICAgICAgdGhpcy5fc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5zcmMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgICAgICAgICB0aGlzLnNyYyA9ICcnO1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHJlY3JlYXRlIHRoZSBibG9iIHVybCB3aGVuIGEgdHJhY2sgaXMgYWRkZWQgb3JcbiAgICAgICAgICAgIC8vIHJlbW92ZWQuIERvaW5nIGl0IG1hbnVhbGx5IHNpbmNlIHdlIHdhbnQgdG8gYXZvaWQgYSByZWN1cnNpb24uXG4gICAgICAgICAgICBzdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkdHJhY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuc3JjKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxmLnNyYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdyZW1vdmV0cmFjaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5zcmMpIHtcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGYuc3JjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWxmLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNoaW1BZGRUcmFja1JlbW92ZVRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAvLyBzaGltIGFkZFRyYWNrIGFuZCByZW1vdmVUcmFjay5cbiAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFsc28gc2hpbSBwYy5nZXRMb2NhbFN0cmVhbXMgd2hlbiBhZGRUcmFjayBpcyBzaGltbWVkXG4gICAgLy8gdG8gcmV0dXJuIHRoZSBvcmlnaW5hbCBzdHJlYW1zLlxuICAgIHZhciBvcmlnR2V0TG9jYWxTdHJlYW1zID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVxuICAgICAgICAuZ2V0TG9jYWxTdHJlYW1zO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0TG9jYWxTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbmF0aXZlU3RyZWFtcyA9IG9yaWdHZXRMb2NhbFN0cmVhbXMuYXBwbHkodGhpcyk7XG4gICAgICBzZWxmLl9yZXZlcnNlU3RyZWFtcyA9IHNlbGYuX3JldmVyc2VTdHJlYW1zIHx8IHt9O1xuICAgICAgcmV0dXJuIG5hdGl2ZVN0cmVhbXMubWFwKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gc2VsZi5fcmV2ZXJzZVN0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgb3JpZ0FkZFN0cmVhbSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHBjLl9yZXZlcnNlU3RyZWFtcyA9IHBjLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcblxuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgdmFyIGFscmVhZHlFeGlzdHMgPSBwYy5nZXRTZW5kZXJzKCkuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgcmV0dXJuIHMudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUcmFjayBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAnSW52YWxpZEFjY2Vzc0Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIGlkZW50aXR5IG1hcHBpbmcgZm9yIGNvbnNpc3RlbmN5IHdpdGggYWRkVHJhY2suXG4gICAgICAvLyBVbmxlc3MgdGhpcyBpcyBiZWluZyB1c2VkIHdpdGggYSBzdHJlYW0gZnJvbSBhZGRUcmFjay5cbiAgICAgIGlmICghcGMuX3JldmVyc2VTdHJlYW1zW3N0cmVhbS5pZF0pIHtcbiAgICAgICAgdmFyIG5ld1N0cmVhbSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oc3RyZWFtLmdldFRyYWNrcygpKTtcbiAgICAgICAgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXSA9IG5ld1N0cmVhbTtcbiAgICAgICAgcGMuX3JldmVyc2VTdHJlYW1zW25ld1N0cmVhbS5pZF0gPSBzdHJlYW07XG4gICAgICAgIHN0cmVhbSA9IG5ld1N0cmVhbTtcbiAgICAgIH1cbiAgICAgIG9yaWdBZGRTdHJlYW0uYXBwbHkocGMsIFtzdHJlYW1dKTtcbiAgICB9O1xuXG4gICAgdmFyIG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgIHBjLl9zdHJlYW1zID0gcGMuX3N0cmVhbXMgfHwge307XG4gICAgICBwYy5fcmV2ZXJzZVN0cmVhbXMgPSBwYy5fcmV2ZXJzZVN0cmVhbXMgfHwge307XG5cbiAgICAgIG9yaWdSZW1vdmVTdHJlYW0uYXBwbHkocGMsIFsocGMuX3N0cmVhbXNbc3RyZWFtLmlkXSB8fCBzdHJlYW0pXSk7XG4gICAgICBkZWxldGUgcGMuX3JldmVyc2VTdHJlYW1zWyhwYy5fc3RyZWFtc1tzdHJlYW0uaWRdID9cbiAgICAgICAgICBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdLmlkIDogc3RyZWFtLmlkKV07XG4gICAgICBkZWxldGUgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICBpZiAocGMuc2lnbmFsaW5nU3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBSVENQZWVyQ29ubmVjdGlvblxcJ3Mgc2lnbmFsaW5nU3RhdGUgaXMgXFwnY2xvc2VkXFwnLicsXG4gICAgICAgICAgJ0ludmFsaWRTdGF0ZUVycm9yJyk7XG4gICAgICB9XG4gICAgICB2YXIgc3RyZWFtcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIGlmIChzdHJlYW1zLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICAgICFzdHJlYW1zWzBdLmdldFRyYWNrcygpLmZpbmQoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIHQgPT09IHRyYWNrO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IGZ1bGx5IGNvcnJlY3QgYnV0IGFsbCB3ZSBjYW4gbWFuYWdlIHdpdGhvdXRcbiAgICAgICAgLy8gW1thc3NvY2lhdGVkIE1lZGlhU3RyZWFtc11dIGludGVybmFsIHNsb3QuXG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBhZGFwdGVyLmpzIGFkZFRyYWNrIHBvbHlmaWxsIG9ubHkgc3VwcG9ydHMgYSBzaW5nbGUgJyArXG4gICAgICAgICAgJyBzdHJlYW0gd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdHJhY2suJyxcbiAgICAgICAgICAnTm90U3VwcG9ydGVkRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFscmVhZHlFeGlzdHMgPSBwYy5nZXRTZW5kZXJzKCkuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLnRyYWNrID09PSB0cmFjaztcbiAgICAgIH0pO1xuICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVHJhY2sgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHBjLl9yZXZlcnNlU3RyZWFtcyA9IHBjLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcbiAgICAgIHZhciBvbGRTdHJlYW0gPSBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdO1xuICAgICAgaWYgKG9sZFN0cmVhbSkge1xuICAgICAgICAvLyB0aGlzIGlzIHVzaW5nIG9kZCBDaHJvbWUgYmVoYXZpb3VyLCB1c2Ugd2l0aCBjYXV0aW9uOlxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9NzgxNVxuICAgICAgICAvLyBOb3RlOiB3ZSByZWx5IG9uIHRoZSBoaWdoLWxldmVsIGFkZFRyYWNrL2R0bWYgc2hpbSB0b1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHNlbmRlciB3aXRoIGEgZHRtZiBzZW5kZXIuXG4gICAgICAgIG9sZFN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgIHBjLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdTdHJlYW0gPSBuZXcgd2luZG93Lk1lZGlhU3RyZWFtKFt0cmFja10pO1xuICAgICAgICBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdID0gbmV3U3RyZWFtO1xuICAgICAgICBwYy5fcmV2ZXJzZVN0cmVhbXNbbmV3U3RyZWFtLmlkXSA9IHN0cmVhbTtcbiAgICAgICAgcGMuYWRkU3RyZWFtKG5ld1N0cmVhbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGMuZ2V0U2VuZGVycygpLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjayA9IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgIGlmIChwYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAnVGhlIFJUQ1BlZXJDb25uZWN0aW9uXFwncyBzaWduYWxpbmdTdGF0ZSBpcyBcXCdjbG9zZWRcXCcuJyxcbiAgICAgICAgICAnSW52YWxpZFN0YXRlRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIGNhbiBub3QgeWV0IGNoZWNrIGZvciBzZW5kZXIgaW5zdGFuY2VvZiBSVENSdHBTZW5kZXJcbiAgICAgIC8vIHNpbmNlIHdlIHNoaW0gUlRQU2VuZGVyLiBTbyB3ZSBjaGVjayBpZiBzZW5kZXIuX3BjIGlzIHNldC5cbiAgICAgIGlmICghc2VuZGVyLl9wYykge1xuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdBcmd1bWVudCAxIG9mIFJUQ1BlZXJDb25uZWN0aW9uLnJlbW92ZVRyYWNrICcgK1xuICAgICAgICAgICAgJ2RvZXMgbm90IGltcGxlbWVudCBpbnRlcmZhY2UgUlRDUnRwU2VuZGVyLicsICdUeXBlRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIHZhciBpc0xvY2FsID0gc2VuZGVyLl9wYyA9PT0gcGM7XG4gICAgICBpZiAoIWlzTG9jYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignU2VuZGVyIHdhcyBub3QgY3JlYXRlZCBieSB0aGlzIGNvbm5lY3Rpb24uJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VhcmNoIGZvciB0aGUgbmF0aXZlIHN0cmVhbSB0aGUgc2VuZGVycyB0cmFjayBiZWxvbmdzIHRvLlxuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHZhciBzdHJlYW07XG4gICAgICBPYmplY3Qua2V5cyhwYy5fc3RyZWFtcykuZm9yRWFjaChmdW5jdGlvbihzdHJlYW1pZCkge1xuICAgICAgICB2YXIgaGFzVHJhY2sgPSBwYy5fc3RyZWFtc1tzdHJlYW1pZF0uZ2V0VHJhY2tzKCkuZmluZChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgIHJldHVybiBzZW5kZXIudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc1RyYWNrKSB7XG4gICAgICAgICAgc3RyZWFtID0gcGMuX3N0cmVhbXNbc3RyZWFtaWRdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtLmdldFRyYWNrcygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGxhc3QgdHJhY2sgb2YgdGhlIHN0cmVhbSwgcmVtb3ZlIHRoZSBzdHJlYW0uIFRoaXNcbiAgICAgICAgICAvLyB0YWtlcyBjYXJlIG9mIGFueSBzaGltbWVkIF9zZW5kZXJzLlxuICAgICAgICAgIHBjLnJlbW92ZVN0cmVhbShzdHJlYW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlbHlpbmcgb24gdGhlIHNhbWUgb2RkIGNocm9tZSBiZWhhdmlvdXIgYXMgYWJvdmUuXG4gICAgICAgICAgc3RyZWFtLnJlbW92ZVRyYWNrKHNlbmRlci50cmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcGMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJykpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgICAvLyBUaGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LlxuICAgIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICAvLyBUcmFuc2xhdGUgaWNlVHJhbnNwb3J0UG9saWN5IHRvIGljZVRyYW5zcG9ydHMsXG4gICAgICAgIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTQ4NjlcbiAgICAgICAgLy8gdGhpcyB3YXMgZml4ZWQgaW4gTTU2IGFsb25nIHdpdGggdW5wcmVmaXhpbmcgUlRDUGVlckNvbm5lY3Rpb24uXG4gICAgICAgIGxvZ2dpbmcoJ1BlZXJDb25uZWN0aW9uJyk7XG4gICAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgICBwY0NvbmZpZy5pY2VUcmFuc3BvcnRzID0gcGNDb25maWcuaWNlVHJhbnNwb3J0UG9saWN5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPVxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGU7XG4gICAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgICAgaWYgKHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbWlncmF0ZSBmcm9tIG5vbi1zcGVjIFJUQ0ljZVNlcnZlci51cmwgdG8gUlRDSWNlU2VydmVyLnVybHNcbiAgICAgIHZhciBPcmlnUGVlckNvbm5lY3Rpb24gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb247XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgIHZhciBuZXdJY2VTZXJ2ZXJzID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmICghc2VydmVyLmhhc093blByb3BlcnR5KCd1cmxzJykgJiZcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICAgIHV0aWxzLmRlcHJlY2F0ZWQoJ1JUQ0ljZVNlcnZlci51cmwnLCAnUlRDSWNlU2VydmVyLnVybHMnKTtcbiAgICAgICAgICAgICAgc2VydmVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXJ2ZXIpKTtcbiAgICAgICAgICAgICAgc2VydmVyLnVybHMgPSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2goc2VydmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPcmlnUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgICAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBPcmlnUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG9yaWdHZXRTdGF0cyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHM7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLFxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAvLyBJZiBzZWxlY3RvciBpcyBhIGZ1bmN0aW9uIHRoZW4gd2UgYXJlIGluIHRoZSBvbGQgc3R5bGUgc3RhdHMgc28ganVzdFxuICAgICAgLy8gcGFzcyBiYWNrIHRoZSBvcmlnaW5hbCBnZXRTdGF0cyBmb3JtYXQgdG8gYXZvaWQgYnJlYWtpbmcgb2xkIHVzZXJzLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gc3BlYy1zdHlsZSBnZXRTdGF0cyBpcyBzdXBwb3J0ZWQsIHJldHVybiB0aG9zZSB3aGVuIGNhbGxlZCB3aXRoXG4gICAgICAvLyBlaXRoZXIgbm8gYXJndW1lbnRzIG9yIHRoZSBzZWxlY3RvciBhcmd1bWVudCBpcyBudWxsLlxuICAgICAgaWYgKG9yaWdHZXRTdGF0cy5sZW5ndGggPT09IDAgJiYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIFtdKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpeENocm9tZVN0YXRzXyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBzdGFuZGFyZFJlcG9ydCA9IHt9O1xuICAgICAgICB2YXIgcmVwb3J0cyA9IHJlc3BvbnNlLnJlc3VsdCgpO1xuICAgICAgICByZXBvcnRzLmZvckVhY2goZnVuY3Rpb24ocmVwb3J0KSB7XG4gICAgICAgICAgdmFyIHN0YW5kYXJkU3RhdHMgPSB7XG4gICAgICAgICAgICBpZDogcmVwb3J0LmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiByZXBvcnQudGltZXN0YW1wLFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICAgICAgICAgIHJlbW90ZWNhbmRpZGF0ZTogJ3JlbW90ZS1jYW5kaWRhdGUnXG4gICAgICAgICAgICB9W3JlcG9ydC50eXBlXSB8fCByZXBvcnQudHlwZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVwb3J0Lm5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBzdGFuZGFyZFN0YXRzW25hbWVdID0gcmVwb3J0LnN0YXQobmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RhbmRhcmRSZXBvcnRbc3RhbmRhcmRTdGF0cy5pZF0gPSBzdGFuZGFyZFN0YXRzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RhbmRhcmRSZXBvcnQ7XG4gICAgICB9O1xuXG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoT2JqZWN0LmtleXMoc3RhdHMpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm4gW2tleSwgc3RhdHNba2V5XV07XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFja1dyYXBwZXJfID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBhcmdzWzFdKG1ha2VNYXBTdGF0cyhmaXhDaHJvbWVTdGF0c18ocmVzcG9uc2UpKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbc3VjY2Vzc0NhbGxiYWNrV3JhcHBlcl8sXG4gICAgICAgICAgYXJndW1lbnRzWzBdXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHByb21pc2Utc3VwcG9ydFxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvcmlnR2V0U3RhdHMuYXBwbHkoc2VsZiwgW1xuICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNvbHZlKG1ha2VNYXBTdGF0cyhmaXhDaHJvbWVTdGF0c18ocmVzcG9uc2UpKSk7XG4gICAgICAgICAgfSwgcmVqZWN0XSk7XG4gICAgICB9KS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIGFkZCBwcm9taXNlIHN1cHBvcnQgLS0gbmF0aXZlbHkgYXZhaWxhYmxlIGluIENocm9tZSA1MVxuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNTEpIHtcbiAgICAgIFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbicsICdhZGRJY2VDYW5kaWRhdGUnXVxuICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbYXJnc1swXSwgcmVzb2x2ZSwgcmVqZWN0XSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhcmdzWzFdLmFwcGx5KG51bGwsIFtdKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgIGFyZ3NbMl0uYXBwbHkobnVsbCwgW2Vycl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByb21pc2Ugc3VwcG9ydCBmb3IgY3JlYXRlT2ZmZXIgYW5kIGNyZWF0ZUFuc3dlci4gQXZhaWxhYmxlICh3aXRob3V0XG4gICAgLy8gYnVncykgc2luY2UgTTUyOiBjcmJ1Zy82MTkyODlcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUyKSB7XG4gICAgICBbJ2NyZWF0ZU9mZmVyJywgJ2NyZWF0ZUFuc3dlciddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbcmVzb2x2ZSwgcmVqZWN0LCBvcHRzXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2hpbSBpbXBsaWNpdCBjcmVhdGlvbiBvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24vUlRDSWNlQ2FuZGlkYXRlXG4gICAgWydzZXRMb2NhbERlc2NyaXB0aW9uJywgJ3NldFJlbW90ZURlc2NyaXB0aW9uJywgJ2FkZEljZUNhbmRpZGF0ZSddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuZXcgKChtZXRob2QgPT09ICdhZGRJY2VDYW5kaWRhdGUnKSA/XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA6XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgIC8vIHN1cHBvcnQgZm9yIGFkZEljZUNhbmRpZGF0ZShudWxsIG9yIHVuZGVmaW5lZClcbiAgICB2YXIgbmF0aXZlQWRkSWNlQ2FuZGlkYXRlID1cbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGU7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBhcmd1bWVudHNbMV0uYXBwbHkobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaW1NZWRpYVN0cmVhbTogY2hyb21lU2hpbS5zaGltTWVkaWFTdHJlYW0sXG4gIHNoaW1PblRyYWNrOiBjaHJvbWVTaGltLnNoaW1PblRyYWNrLFxuICBzaGltQWRkVHJhY2tSZW1vdmVUcmFjazogY2hyb21lU2hpbS5zaGltQWRkVHJhY2tSZW1vdmVUcmFjayxcbiAgc2hpbUdldFNlbmRlcnNXaXRoRHRtZjogY2hyb21lU2hpbS5zaGltR2V0U2VuZGVyc1dpdGhEdG1mLFxuICBzaGltU291cmNlT2JqZWN0OiBjaHJvbWVTaGltLnNoaW1Tb3VyY2VPYmplY3QsXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogY2hyb21lU2hpbS5zaGltUGVlckNvbm5lY3Rpb24sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICB2YXIgY29uc3RyYWludHNUb0Nocm9tZV8gPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLm1hbmRhdG9yeSB8fCBjLm9wdGlvbmFsKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGNjID0ge307XG4gICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/IGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHIubWluID0gci5tYXggPSByLmV4YWN0O1xuICAgICAgfVxuICAgICAgdmFyIG9sZG5hbWVfID0gZnVuY3Rpb24ocHJlZml4LCBuYW1lKSB7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuYW1lID09PSAnZGV2aWNlSWQnKSA/ICdzb3VyY2VJZCcgOiBuYW1lO1xuICAgICAgfTtcbiAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2Mub3B0aW9uYWwgPSBjYy5vcHRpb25hbCB8fCBbXTtcbiAgICAgICAgdmFyIG9jID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnbWluJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICAgIG9jID0ge307XG4gICAgICAgICAgb2Nbb2xkbmFtZV8oJ21heCcsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByLmV4YWN0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjYy5tYW5kYXRvcnkgPSBjYy5tYW5kYXRvcnkgfHwge307XG4gICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXygnJywga2V5KV0gPSByLmV4YWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgWydtaW4nLCAnbWF4J10uZm9yRWFjaChmdW5jdGlvbihtaXgpIHtcbiAgICAgICAgICBpZiAoclttaXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeSA9IGNjLm1hbmRhdG9yeSB8fCB7fTtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXyhtaXgsIGtleSldID0gclttaXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGMuYWR2YW5jZWQpIHtcbiAgICAgIGNjLm9wdGlvbmFsID0gKGNjLm9wdGlvbmFsIHx8IFtdKS5jb25jYXQoYy5hZHZhbmNlZCk7XG4gICAgfVxuICAgIHJldHVybiBjYztcbiAgfTtcblxuICB2YXIgc2hpbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBmdW5jKSB7XG4gICAgY29uc3RyYWludHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgICBpZiAoYSBpbiBvYmogJiYgIShiIGluIG9iaikpIHtcbiAgICAgICAgICBvYmpbYl0gPSBvYmpbYV07XG4gICAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdhdXRvR2FpbkNvbnRyb2wnLCAnZ29vZ0F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdub2lzZVN1cHByZXNzaW9uJywgJ2dvb2dOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICB9XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIFNoaW0gZmFjaW5nTW9kZSBmb3IgbW9iaWxlICYgc3VyZmFjZSBwcm8uXG4gICAgICB2YXIgZmFjZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICBmYWNlID0gZmFjZSAmJiAoKHR5cGVvZiBmYWNlID09PSAnb2JqZWN0JykgPyBmYWNlIDoge2lkZWFsOiBmYWNlfSk7XG4gICAgICB2YXIgZ2V0U3VwcG9ydGVkRmFjaW5nTW9kZUxpZXMgPSBicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNjE7XG5cbiAgICAgIGlmICgoZmFjZSAmJiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuZXhhY3QgPT09ICdlbnZpcm9ubWVudCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZmFjZS5pZGVhbCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICdlbnZpcm9ubWVudCcpKSAmJlxuICAgICAgICAgICEobmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cyAmJlxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpLmZhY2luZ01vZGUgJiZcbiAgICAgICAgICAgICFnZXRTdXBwb3J0ZWRGYWNpbmdNb2RlTGllcykpIHtcbiAgICAgICAgZGVsZXRlIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICAgIHZhciBtYXRjaGVzO1xuICAgICAgICBpZiAoZmFjZS5leGFjdCA9PT0gJ2Vudmlyb25tZW50JyB8fCBmYWNlLmlkZWFsID09PSAnZW52aXJvbm1lbnQnKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IFsnYmFjaycsICdyZWFyJ107XG4gICAgICAgIH0gZWxzZSBpZiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICd1c2VyJykge1xuICAgICAgICAgIG1hdGNoZXMgPSBbJ2Zyb250J107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAvLyBMb29rIGZvciBtYXRjaGVzIGluIGxhYmVsLCBvciB1c2UgbGFzdCBjYW0gZm9yIGJhY2sgKHR5cGljYWwpLlxuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRldmljZXMpIHtcbiAgICAgICAgICAgIGRldmljZXMgPSBkZXZpY2VzLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmtpbmQgPT09ICd2aWRlb2lucHV0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRldiA9IGRldmljZXMuZmluZChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLnNvbWUoZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobWF0Y2gpICE9PSAtMTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZGV2ICYmIGRldmljZXMubGVuZ3RoICYmIG1hdGNoZXMuaW5kZXhPZignYmFjaycpICE9PSAtMSkge1xuICAgICAgICAgICAgICBkZXYgPSBkZXZpY2VzW2RldmljZXMubGVuZ3RoIC0gMV07IC8vIG1vcmUgbGlrZWx5IHRoZSBiYWNrIGNhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRldikge1xuICAgICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IGZhY2UuZXhhY3QgPyB7ZXhhY3Q6IGRldi5kZXZpY2VJZH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWRlYWw6IGRldi5kZXZpY2VJZH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICAgICAgICAgIGxvZ2dpbmcoJ2Nocm9tZTogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZV8oY29uc3RyYWludHMudmlkZW8pO1xuICAgIH1cbiAgICBsb2dnaW5nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIHJldHVybiBmdW5jKGNvbnN0cmFpbnRzKTtcbiAgfTtcblxuICB2YXIgc2hpbUVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToge1xuICAgICAgICBQZXJtaXNzaW9uRGVuaWVkRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBJbnZhbGlkU3RhdGVFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBEZXZpY2VzTm90Rm91bmRFcnJvcjogJ05vdEZvdW5kRXJyb3InLFxuICAgICAgICBDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3I6ICdPdmVyY29uc3RyYWluZWRFcnJvcicsXG4gICAgICAgIFRyYWNrU3RhcnRFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBNZWRpYURldmljZUZhaWxlZER1ZVRvU2h1dGRvd246ICdOb3RSZWFkYWJsZUVycm9yJyxcbiAgICAgICAgTWVkaWFEZXZpY2VLaWxsU3dpdGNoT246ICdOb3RSZWFkYWJsZUVycm9yJ1xuICAgICAgfVtlLm5hbWVdIHx8IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgIGNvbnN0cmFpbnQ6IGUuY29uc3RyYWludE5hbWUsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAodGhpcy5tZXNzYWdlICYmICc6ICcpICsgdGhpcy5tZXNzYWdlO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFVzZXJNZWRpYV8gPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgc2hpbUNvbnN0cmFpbnRzXyhjb25zdHJhaW50cywgZnVuY3Rpb24oYykge1xuICAgICAgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYShjLCBvblN1Y2Nlc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBnZXRVc2VyTWVkaWFfO1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBnZXRVc2VyTWVkaWEgYXMgYSBQcm9taXNlLlxuICB2YXIgZ2V0VXNlck1lZGlhUHJvbWlzZV8gPSBmdW5jdGlvbihjb25zdHJhaW50cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtcbiAgICAgIGdldFVzZXJNZWRpYTogZ2V0VXNlck1lZGlhUHJvbWlzZV8sXG4gICAgICBlbnVtZXJhdGVEZXZpY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIga2luZHMgPSB7YXVkaW86ICdhdWRpb2lucHV0JywgdmlkZW86ICd2aWRlb2lucHV0J307XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5NZWRpYVN0cmVhbVRyYWNrLmdldFNvdXJjZXMoZnVuY3Rpb24oZGV2aWNlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLm1hcChmdW5jdGlvbihkZXZpY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtsYWJlbDogZGV2aWNlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmRzW2RldmljZS5raW5kXSxcbiAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6ICcnfTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0U3VwcG9ydGVkQ29uc3RyYWludHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRldmljZUlkOiB0cnVlLCBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlLCBmYWNpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgIGZyYW1lUmF0ZTogdHJ1ZSwgaGVpZ2h0OiB0cnVlLCB3aWR0aDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBBIHNoaW0gZm9yIGdldFVzZXJNZWRpYSBtZXRob2Qgb24gdGhlIG1lZGlhRGV2aWNlcyBvYmplY3QuXG4gIC8vIFRPRE8oS2FwdGVuSmFuc3NvbikgcmVtb3ZlIG9uY2UgaW1wbGVtZW50ZWQgaW4gQ2hyb21lIHN0YWJsZS5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBnZXRVc2VyTWVkaWFQcm9taXNlXyhjb25zdHJhaW50cyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFdmVuIHRob3VnaCBDaHJvbWUgNDUgaGFzIG5hdmlnYXRvci5tZWRpYURldmljZXMgYW5kIGEgZ2V0VXNlck1lZGlhXG4gICAgLy8gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIFByb21pc2UsIGl0IGRvZXMgbm90IGFjY2VwdCBzcGVjLXN0eWxlXG4gICAgLy8gY29uc3RyYWludHMuXG4gICAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgICAgYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNzKSB7XG4gICAgICByZXR1cm4gc2hpbUNvbnN0cmFpbnRzXyhjcywgZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgIGlmIChjLmF1ZGlvICYmICFzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJycsICdOb3RGb3VuZEVycm9yJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIER1bW15IGRldmljZWNoYW5nZSBldmVudCBtZXRob2RzLlxuICAvLyBUT0RPKEthcHRlbkphbnNzb24pIHJlbW92ZSBvbmNlIGltcGxlbWVudGVkIGluIENocm9tZSBzdGFibGUuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgbG9nZ2luZygnRHVtbXkgbWVkaWFEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIgY2FsbGVkLicpO1xuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBsb2dnaW5nKCdEdW1teSBtZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciBjYWxsZWQuJyk7XG4gICAgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvY2hyb21lL2dldHVzZXJtZWRpYS5qc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIHNoaW1SVENQZWVyQ29ubmVjdGlvbiA9IHJlcXVpcmUoJy4vcnRjcGVlcmNvbm5lY3Rpb25fc2hpbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKSxcbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgICBpZiAod2luZG93LlJUQ0ljZUdhdGhlcmVyKSB7XG4gICAgICAvLyBPUlRDIGRlZmluZXMgYW4gUlRDSWNlQ2FuZGlkYXRlIG9iamVjdCBidXQgbm8gY29uc3RydWN0b3IuXG4gICAgICAvLyBOb3QgaW1wbGVtZW50ZWQgaW4gRWRnZS5cbiAgICAgIGlmICghd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSkge1xuICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gT1JUQyBkb2VzIG5vdCBoYXZlIGEgc2Vzc2lvbiBkZXNjcmlwdGlvbiBvYmplY3QgYnV0XG4gICAgICAvLyBvdGhlciBicm93c2VycyAoaS5lLiBDaHJvbWUpIHRoYXQgd2lsbCBzdXBwb3J0IGJvdGggUEMgYW5kIE9SVENcbiAgICAgIC8vIGluIHRoZSBmdXR1cmUgbWlnaHQgaGF2ZSB0aGlzIGRlZmluZWQgYWxyZWFkeS5cbiAgICAgIGlmICghd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gdGhpcyBhZGRzIGFuIGFkZGl0aW9uYWwgZXZlbnQgbGlzdGVuZXIgdG8gTWVkaWFTdHJhY2tUcmFjayB0aGF0IHNpZ25hbHNcbiAgICAgIC8vIHdoZW4gYSB0cmFja3MgZW5hYmxlZCBwcm9wZXJ0eSB3YXMgY2hhbmdlZC4gV29ya2Fyb3VuZCBmb3IgYSBidWcgaW5cbiAgICAgIC8vIGFkZFN0cmVhbSwgc2VlIGJlbG93LiBObyBsb25nZXIgcmVxdWlyZWQgaW4gMTUwMjUrXG4gICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDE1MDI1KSB7XG4gICAgICAgIHZhciBvcmlnTVNURW5hYmxlZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgICAgICB3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJywge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIG9yaWdNU1RFbmFibGVkLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHZhciBldiA9IG5ldyBFdmVudCgnZW5hYmxlZCcpO1xuICAgICAgICAgICAgZXYuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9SVEMgZGVmaW5lcyB0aGUgRFRNRiBzZW5kZXIgYSBiaXQgZGlmZmVyZW50LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2Mvb3J0Yy9pc3N1ZXMvNzE0XG4gICAgaWYgKHdpbmRvdy5SVENSdHBTZW5kZXIgJiYgISgnZHRtZicgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUsICdkdG1mJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh0aGlzLl9kdG1mID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IG5ldyB3aW5kb3cuUlRDRHRtZlNlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFjay5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID1cbiAgICAgICAgc2hpbVJUQ1BlZXJDb25uZWN0aW9uKHdpbmRvdywgYnJvd3NlckRldGFpbHMudmVyc2lvbik7XG4gIH0sXG4gIHNoaW1SZXBsYWNlVHJhY2s6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIE9SVEMgaGFzIHJlcGxhY2VUcmFjayAtLSBodHRwczovL2dpdGh1Yi5jb20vdzNjL29ydGMvaXNzdWVzLzYxNFxuICAgIGlmICh3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAgICEoJ3JlcGxhY2VUcmFjaycgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZS5yZXBsYWNlVHJhY2sgPVxuICAgICAgICAgIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLnNldFRyYWNrO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9lZGdlX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gIHZhciBzaGltRXJyb3JfID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB7UGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJ31bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnQsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBnZXRVc2VyTWVkaWEgZXJyb3Igc2hpbS5cbiAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBvcmlnR2V0VXNlck1lZGlhKGMpLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0dXNlcm1lZGlhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTRFBVdGlscyA9IHJlcXVpcmUoJ3NkcCcpO1xuXG4vLyBzb3J0IHRyYWNrcyBzdWNoIHRoYXQgdGhleSBmb2xsb3cgYW4gYS12LWEtdi4uLlxuLy8gcGF0dGVybi5cbmZ1bmN0aW9uIHNvcnRUcmFja3ModHJhY2tzKSB7XG4gIHZhciBhdWRpb1RyYWNrcyA9IHRyYWNrcy5maWx0ZXIoZnVuY3Rpb24odHJhY2spIHtcbiAgICByZXR1cm4gdHJhY2sua2luZCA9PT0gJ2F1ZGlvJztcbiAgfSk7XG4gIHZhciB2aWRlb1RyYWNrcyA9IHRyYWNrcy5maWx0ZXIoZnVuY3Rpb24odHJhY2spIHtcbiAgICByZXR1cm4gdHJhY2sua2luZCA9PT0gJ3ZpZGVvJztcbiAgfSk7XG4gIHRyYWNrcyA9IFtdO1xuICB3aGlsZSAoYXVkaW9UcmFja3MubGVuZ3RoIHx8IHZpZGVvVHJhY2tzLmxlbmd0aCkge1xuICAgIGlmIChhdWRpb1RyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHRyYWNrcy5wdXNoKGF1ZGlvVHJhY2tzLnNoaWZ0KCkpO1xuICAgIH1cbiAgICBpZiAodmlkZW9UcmFja3MubGVuZ3RoKSB7XG4gICAgICB0cmFja3MucHVzaCh2aWRlb1RyYWNrcy5zaGlmdCgpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYWNrcztcbn1cblxuLy8gRWRnZSBkb2VzIG5vdCBsaWtlXG4vLyAxKSBzdHVuOlxuLy8gMikgdHVybjogdGhhdCBkb2VzIG5vdCBoYXZlIGFsbCBvZiB0dXJuOmhvc3Q6cG9ydD90cmFuc3BvcnQ9dWRwXG4vLyAzKSB0dXJuOiB3aXRoIGlwdjYgYWRkcmVzc2VzXG4vLyA0KSB0dXJuOiBvY2N1cnJpbmcgbXVsaXBsZSB0aW1lc1xuZnVuY3Rpb24gZmlsdGVySWNlU2VydmVycyhpY2VTZXJ2ZXJzLCBlZGdlVmVyc2lvbikge1xuICB2YXIgaGFzVHVybiA9IGZhbHNlO1xuICBpY2VTZXJ2ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpY2VTZXJ2ZXJzKSk7XG4gIHJldHVybiBpY2VTZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbihzZXJ2ZXIpIHtcbiAgICBpZiAoc2VydmVyICYmIChzZXJ2ZXIudXJscyB8fCBzZXJ2ZXIudXJsKSkge1xuICAgICAgdmFyIHVybHMgPSBzZXJ2ZXIudXJscyB8fCBzZXJ2ZXIudXJsO1xuICAgICAgaWYgKHNlcnZlci51cmwgJiYgIXNlcnZlci51cmxzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUlRDSWNlU2VydmVyLnVybCBpcyBkZXByZWNhdGVkISBVc2UgdXJscyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnO1xuICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgIHVybHMgPSBbdXJsc107XG4gICAgICB9XG4gICAgICB1cmxzID0gdXJscy5maWx0ZXIoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciB2YWxpZFR1cm4gPSB1cmwuaW5kZXhPZigndHVybjonKSA9PT0gMCAmJlxuICAgICAgICAgICAgdXJsLmluZGV4T2YoJ3RyYW5zcG9ydD11ZHAnKSAhPT0gLTEgJiZcbiAgICAgICAgICAgIHVybC5pbmRleE9mKCd0dXJuOlsnKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICFoYXNUdXJuO1xuXG4gICAgICAgIGlmICh2YWxpZFR1cm4pIHtcbiAgICAgICAgICBoYXNUdXJuID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsLmluZGV4T2YoJ3N0dW46JykgPT09IDAgJiYgZWRnZVZlcnNpb24gPj0gMTQzOTM7XG4gICAgICB9KTtcblxuICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICBzZXJ2ZXIudXJscyA9IGlzU3RyaW5nID8gdXJsc1swXSA6IHVybHM7XG4gICAgICByZXR1cm4gISF1cmxzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuLy8gRGV0ZXJtaW5lcyB0aGUgaW50ZXJzZWN0aW9uIG9mIGxvY2FsIGFuZCByZW1vdGUgY2FwYWJpbGl0aWVzLlxuZnVuY3Rpb24gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKGxvY2FsQ2FwYWJpbGl0aWVzLCByZW1vdGVDYXBhYmlsaXRpZXMpIHtcbiAgdmFyIGNvbW1vbkNhcGFiaWxpdGllcyA9IHtcbiAgICBjb2RlY3M6IFtdLFxuICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgIGZlY01lY2hhbmlzbXM6IFtdXG4gIH07XG5cbiAgdmFyIGZpbmRDb2RlY0J5UGF5bG9hZFR5cGUgPSBmdW5jdGlvbihwdCwgY29kZWNzKSB7XG4gICAgcHQgPSBwYXJzZUludChwdCwgMTApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29kZWNzW2ldLnBheWxvYWRUeXBlID09PSBwdCB8fFxuICAgICAgICAgIGNvZGVjc1tpXS5wcmVmZXJyZWRQYXlsb2FkVHlwZSA9PT0gcHQpIHtcbiAgICAgICAgcmV0dXJuIGNvZGVjc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIHJ0eENhcGFiaWxpdHlNYXRjaGVzID0gZnVuY3Rpb24obFJ0eCwgclJ0eCwgbENvZGVjcywgckNvZGVjcykge1xuICAgIHZhciBsQ29kZWMgPSBmaW5kQ29kZWNCeVBheWxvYWRUeXBlKGxSdHgucGFyYW1ldGVycy5hcHQsIGxDb2RlY3MpO1xuICAgIHZhciByQ29kZWMgPSBmaW5kQ29kZWNCeVBheWxvYWRUeXBlKHJSdHgucGFyYW1ldGVycy5hcHQsIHJDb2RlY3MpO1xuICAgIHJldHVybiBsQ29kZWMgJiYgckNvZGVjICYmXG4gICAgICAgIGxDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24obENvZGVjKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgckNvZGVjID0gcmVtb3RlQ2FwYWJpbGl0aWVzLmNvZGVjc1tpXTtcbiAgICAgIGlmIChsQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSByQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpICYmXG4gICAgICAgICAgbENvZGVjLmNsb2NrUmF0ZSA9PT0gckNvZGVjLmNsb2NrUmF0ZSkge1xuICAgICAgICBpZiAobENvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCcgJiZcbiAgICAgICAgICAgIGxDb2RlYy5wYXJhbWV0ZXJzICYmIHJDb2RlYy5wYXJhbWV0ZXJzLmFwdCkge1xuICAgICAgICAgIC8vIGZvciBSVFggd2UgbmVlZCB0byBmaW5kIHRoZSBsb2NhbCBydHggdGhhdCBoYXMgYSBhcHRcbiAgICAgICAgICAvLyB3aGljaCBwb2ludHMgdG8gdGhlIHNhbWUgbG9jYWwgY29kZWMgYXMgdGhlIHJlbW90ZSBvbmUuXG4gICAgICAgICAgaWYgKCFydHhDYXBhYmlsaXR5TWF0Y2hlcyhsQ29kZWMsIHJDb2RlYyxcbiAgICAgICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJDb2RlYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkockNvZGVjKSk7IC8vIGRlZXBjb3B5XG4gICAgICAgIC8vIG51bWJlciBvZiBjaGFubmVscyBpcyB0aGUgaGlnaGVzdCBjb21tb24gbnVtYmVyIG9mIGNoYW5uZWxzXG4gICAgICAgIHJDb2RlYy5udW1DaGFubmVscyA9IE1hdGgubWluKGxDb2RlYy5udW1DaGFubmVscyxcbiAgICAgICAgICAgIHJDb2RlYy5udW1DaGFubmVscyk7XG4gICAgICAgIC8vIHB1c2ggckNvZGVjIHNvIHdlIHJlcGx5IHdpdGggb2ZmZXJlciBwYXlsb2FkIHR5cGVcbiAgICAgICAgY29tbW9uQ2FwYWJpbGl0aWVzLmNvZGVjcy5wdXNoKHJDb2RlYyk7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIGNvbW1vbiBmZWVkYmFjayBtZWNoYW5pc21zXG4gICAgICAgIHJDb2RlYy5ydGNwRmVlZGJhY2sgPSByQ29kZWMucnRjcEZlZWRiYWNrLmZpbHRlcihmdW5jdGlvbihmYikge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbENvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGxDb2RlYy5ydGNwRmVlZGJhY2tbal0udHlwZSA9PT0gZmIudHlwZSAmJlxuICAgICAgICAgICAgICAgIGxDb2RlYy5ydGNwRmVlZGJhY2tbal0ucGFyYW1ldGVyID09PSBmYi5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZJWE1FOiBhbHNvIG5lZWQgdG8gZGV0ZXJtaW5lIC5wYXJhbWV0ZXJzXG4gICAgICAgIC8vICBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29wZW5wZWVyL29ydGMvaXNzdWVzLzU2OVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxvY2FsQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihsSGVhZGVyRXh0ZW5zaW9uKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5sZW5ndGg7XG4gICAgICAgICBpKyspIHtcbiAgICAgIHZhciBySGVhZGVyRXh0ZW5zaW9uID0gcmVtb3RlQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnNbaV07XG4gICAgICBpZiAobEhlYWRlckV4dGVuc2lvbi51cmkgPT09IHJIZWFkZXJFeHRlbnNpb24udXJpKSB7XG4gICAgICAgIGNvbW1vbkNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zLnB1c2gockhlYWRlckV4dGVuc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gRklYTUU6IGZlY01lY2hhbmlzbXNcbiAgcmV0dXJuIGNvbW1vbkNhcGFiaWxpdGllcztcbn1cblxuLy8gaXMgYWN0aW9uPXNldExvY2FsRGVzY3JpcHRpb24gd2l0aCB0eXBlIGFsbG93ZWQgaW4gc2lnbmFsaW5nU3RhdGVcbmZ1bmN0aW9uIGlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoYWN0aW9uLCB0eXBlLCBzaWduYWxpbmdTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG9mZmVyOiB7XG4gICAgICBzZXRMb2NhbERlc2NyaXB0aW9uOiBbJ3N0YWJsZScsICdoYXZlLWxvY2FsLW9mZmVyJ10sXG4gICAgICBzZXRSZW1vdGVEZXNjcmlwdGlvbjogWydzdGFibGUnLCAnaGF2ZS1yZW1vdGUtb2ZmZXInXVxuICAgIH0sXG4gICAgYW5zd2VyOiB7XG4gICAgICBzZXRMb2NhbERlc2NyaXB0aW9uOiBbJ2hhdmUtcmVtb3RlLW9mZmVyJywgJ2hhdmUtbG9jYWwtcHJhbnN3ZXInXSxcbiAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uOiBbJ2hhdmUtbG9jYWwtb2ZmZXInLCAnaGF2ZS1yZW1vdGUtcHJhbnN3ZXInXVxuICAgIH1cbiAgfVt0eXBlXVthY3Rpb25dLmluZGV4T2Yoc2lnbmFsaW5nU3RhdGUpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3csIGVkZ2VWZXJzaW9uKSB7XG4gIHZhciBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBfZXZlbnRUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgWydhZGRFdmVudExpc3RlbmVyJywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnZGlzcGF0Y2hFdmVudCddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHNlbGZbbWV0aG9kXSA9IF9ldmVudFRhcmdldFttZXRob2RdLmJpbmQoX2V2ZW50VGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICB0aGlzLm5lZWROZWdvdGlhdGlvbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbmljZWNhbmRpZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5vbmFkZHN0cmVhbSA9IG51bGw7XG4gICAgdGhpcy5vbnRyYWNrID0gbnVsbDtcbiAgICB0aGlzLm9ucmVtb3Zlc3RyZWFtID0gbnVsbDtcbiAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgdGhpcy5vbm5lZ290aWF0aW9ubmVlZGVkID0gbnVsbDtcbiAgICB0aGlzLm9uZGF0YWNoYW5uZWwgPSBudWxsO1xuICAgIHRoaXMuY2FuVHJpY2tsZUljZUNhbmRpZGF0ZXMgPSBudWxsO1xuXG4gICAgdGhpcy5sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLnJlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlbGYubG9jYWxTdHJlYW1zO1xuICAgIH07XG4gICAgdGhpcy5nZXRSZW1vdGVTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2VsZi5yZW1vdGVTdHJlYW1zO1xuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsRGVzY3JpcHRpb24gPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnJyxcbiAgICAgIHNkcDogJydcbiAgICB9KTtcbiAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uID0gbmV3IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgdHlwZTogJycsXG4gICAgICBzZHA6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9ICdzdGFibGUnO1xuICAgIHRoaXMuaWNlQ29ubmVjdGlvblN0YXRlID0gJ25ldyc7XG4gICAgdGhpcy5pY2VHYXRoZXJpbmdTdGF0ZSA9ICduZXcnO1xuXG4gICAgdGhpcy5pY2VPcHRpb25zID0ge1xuICAgICAgZ2F0aGVyUG9saWN5OiAnYWxsJyxcbiAgICAgIGljZVNlcnZlcnM6IFtdXG4gICAgfTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgIHN3aXRjaCAoY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICBjYXNlICdyZWxheSc6XG4gICAgICAgICAgdGhpcy5pY2VPcHRpb25zLmdhdGhlclBvbGljeSA9IGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gZG9uJ3Qgc2V0IGljZVRyYW5zcG9ydFBvbGljeS5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51c2luZ0J1bmRsZSA9IGNvbmZpZyAmJiBjb25maWcuYnVuZGxlUG9saWN5ID09PSAnbWF4LWJ1bmRsZSc7XG5cbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICB0aGlzLmljZU9wdGlvbnMuaWNlU2VydmVycyA9IGZpbHRlckljZVNlcnZlcnMoY29uZmlnLmljZVNlcnZlcnMsXG4gICAgICAgICAgZWRnZVZlcnNpb24pO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAvLyBwZXItdHJhY2sgaWNlR2F0aGVycywgaWNlVHJhbnNwb3J0cywgZHRsc1RyYW5zcG9ydHMsIHJ0cFNlbmRlcnMsIC4uLlxuICAgIC8vIGV2ZXJ5dGhpbmcgdGhhdCBpcyBuZWVkZWQgdG8gZGVzY3JpYmUgYSBTRFAgbS1saW5lLlxuICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gW107XG5cbiAgICAvLyBzaW5jZSB0aGUgaWNlR2F0aGVyZXIgaXMgY3VycmVudGx5IGNyZWF0ZWQgaW4gY3JlYXRlT2ZmZXIgYnV0IHdlXG4gICAgLy8gbXVzdCBub3QgZW1pdCBjYW5kaWRhdGVzIHVudGlsIGFmdGVyIHNldExvY2FsRGVzY3JpcHRpb24gd2UgYnVmZmVyXG4gICAgLy8gdGhlbSBpbiB0aGlzIGFycmF5LlxuICAgIHRoaXMuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlciA9IFtdO1xuXG4gICAgdGhpcy5fc2RwU2Vzc2lvbklkID0gU0RQVXRpbHMuZ2VuZXJhdGVTZXNzaW9uSWQoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuICAgIC8vIEZJWE1FOiBuZWVkIHRvIGFwcGx5IGljZSBjYW5kaWRhdGVzIGluIGEgd2F5IHdoaWNoIGlzIGFzeW5jIGJ1dFxuICAgIC8vIGluLW9yZGVyXG4gICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBlbmQgPSAhZXZlbnQuY2FuZGlkYXRlIHx8IE9iamVjdC5rZXlzKGV2ZW50LmNhbmRpZGF0ZSkubGVuZ3RoID09PSAwO1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHNlY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHNlY3Rpb25zW2pdLmluZGV4T2YoJ1xcclxcbmE9ZW5kLW9mLWNhbmRpZGF0ZXNcXHJcXG4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNlY3Rpb25zW2pdICs9ICdhPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPScgKyBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlICsgJ1xcclxcbic7XG4gICAgICB9XG4gICAgICBzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwID0gc2VjdGlvbnMuam9pbignJyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgc2VsZi5vbmljZWNhbmRpZGF0ZShldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50LmNhbmRpZGF0ZSAmJiBzZWxmLmljZUdhdGhlcmluZ1N0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHZhciBjb21wbGV0ZSA9IHNlbGYudHJhbnNjZWl2ZXJzLmV2ZXJ5KGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyICYmXG4gICAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLnN0YXRlID09PSAnY29tcGxldGVkJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wbGV0ZSAmJiBzZWxmLmljZUdhdGhlcmluZ1N0YXRlQ2hhbmdlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIgPSBbXTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH07XG5cbiAgLy8gaW50ZXJuYWwgaGVscGVyIHRvIGNyZWF0ZSBhIHRyYW5zY2VpdmVyIG9iamVjdC5cbiAgLy8gKHdoaWggaXMgbm90IHlldCB0aGUgc2FtZSBhcyB0aGUgV2ViUlRDIDEuMCB0cmFuc2NlaXZlcilcbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVUcmFuc2NlaXZlciA9IGZ1bmN0aW9uKGtpbmQpIHtcbiAgICB2YXIgaGFzQnVuZGxlVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoID4gMDtcbiAgICB2YXIgdHJhbnNjZWl2ZXIgPSB7XG4gICAgICB0cmFjazogbnVsbCxcbiAgICAgIGljZUdhdGhlcmVyOiBudWxsLFxuICAgICAgaWNlVHJhbnNwb3J0OiBudWxsLFxuICAgICAgZHRsc1RyYW5zcG9ydDogbnVsbCxcbiAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcnRwU2VuZGVyOiBudWxsLFxuICAgICAgcnRwUmVjZWl2ZXI6IG51bGwsXG4gICAgICBraW5kOiBraW5kLFxuICAgICAgbWlkOiBudWxsLFxuICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVyczogbnVsbCxcbiAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM6IG51bGwsXG4gICAgICBzdHJlYW06IG51bGwsXG4gICAgICB3YW50UmVjZWl2ZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHRoaXMudXNpbmdCdW5kbGUgJiYgaGFzQnVuZGxlVHJhbnNwb3J0KSB7XG4gICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQ7XG4gICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRyYW5zcG9ydHMgPSB0aGlzLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cygpO1xuICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0ID0gdHJhbnNwb3J0cy5pY2VUcmFuc3BvcnQ7XG4gICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0ID0gdHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0O1xuICAgIH1cbiAgICB0aGlzLnRyYW5zY2VpdmVycy5wdXNoKHRyYW5zY2VpdmVyKTtcbiAgICByZXR1cm4gdHJhbnNjZWl2ZXI7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2ssIHN0cmVhbSkge1xuICAgIHZhciB0cmFuc2NlaXZlcjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMudHJhbnNjZWl2ZXJzW2ldLnRyYWNrICYmXG4gICAgICAgICAgdGhpcy50cmFuc2NlaXZlcnNbaV0ua2luZCA9PT0gdHJhY2sua2luZCkge1xuICAgICAgICB0cmFuc2NlaXZlciA9IHRoaXMudHJhbnNjZWl2ZXJzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRyYW5zY2VpdmVyKSB7XG4gICAgICB0cmFuc2NlaXZlciA9IHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKHRyYWNrLmtpbmQpO1xuICAgIH1cblxuICAgIHRyYW5zY2VpdmVyLnRyYWNrID0gdHJhY2s7XG4gICAgdHJhbnNjZWl2ZXIuc3RyZWFtID0gc3RyZWFtO1xuICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlciA9IG5ldyB3aW5kb3cuUlRDUnRwU2VuZGVyKHRyYWNrLFxuICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0KTtcblxuICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gICAgcmV0dXJuIHRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAyNSkge1xuICAgICAgdGhpcy5sb2NhbFN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgc2VsZi5hZGRUcmFjayh0cmFjaywgc3RyZWFtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9uZSBpcyBuZWNlc3NhcnkgZm9yIGxvY2FsIGRlbW9zIG1vc3RseSwgYXR0YWNoaW5nIGRpcmVjdGx5XG4gICAgICAvLyB0byB0d28gZGlmZmVyZW50IHNlbmRlcnMgZG9lcyBub3Qgd29yayAoYnVpbGQgMTA1NDcpLlxuICAgICAgLy8gRml4ZWQgaW4gMTUwMjUgKG9yIGVhcmxpZXIpXG4gICAgICB2YXIgY2xvbmVkU3RyZWFtID0gc3RyZWFtLmNsb25lKCk7XG4gICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaWR4KSB7XG4gICAgICAgIHZhciBjbG9uZWRUcmFjayA9IGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKVtpZHhdO1xuICAgICAgICB0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmFibGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBjbG9uZWRUcmFjay5lbmFibGVkID0gZXZlbnQuZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgIHNlbGYuYWRkVHJhY2sodHJhY2ssIGNsb25lZFN0cmVhbSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnB1c2goY2xvbmVkU3RyZWFtKTtcbiAgICB9XG4gICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMubG9jYWxTdHJlYW1zLmluZGV4T2Yoc3RyZWFtKTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gISF0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gdHJhbnNjZWl2ZXIucnRwU2VuZGVyO1xuICAgIH0pO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gISF0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDcmVhdGUgSUNFIGdhdGhlcmVyIGFuZCBob29rIGl0IHVwLlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2NyZWF0ZUljZUdhdGhlcmVyID0gZnVuY3Rpb24obWlkLFxuICAgICAgc2RwTUxpbmVJbmRleCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaWNlR2F0aGVyZXIgPSBuZXcgd2luZG93LlJUQ0ljZUdhdGhlcmVyKHNlbGYuaWNlT3B0aW9ucyk7XG4gICAgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKTtcbiAgICAgIGV2ZW50LmNhbmRpZGF0ZSA9IHtzZHBNaWQ6IG1pZCwgc2RwTUxpbmVJbmRleDogc2RwTUxpbmVJbmRleH07XG5cbiAgICAgIHZhciBjYW5kID0gZXZ0LmNhbmRpZGF0ZTtcbiAgICAgIHZhciBlbmQgPSAhY2FuZCB8fCBPYmplY3Qua2V5cyhjYW5kKS5sZW5ndGggPT09IDA7XG4gICAgICAvLyBFZGdlIGVtaXRzIGFuIGVtcHR5IG9iamVjdCBmb3IgUlRDSWNlQ2FuZGlkYXRlQ29tcGxldGXigKVcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgLy8gcG9seWZpbGwgc2luY2UgUlRDSWNlR2F0aGVyZXIuc3RhdGUgaXMgbm90IGltcGxlbWVudGVkIGluXG4gICAgICAgIC8vIEVkZ2UgMTA1NDcgeWV0LlxuICAgICAgICBpZiAoaWNlR2F0aGVyZXIuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGljZUdhdGhlcmVyLnN0YXRlID0gJ2NvbXBsZXRlZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJUQ0ljZUNhbmRpZGF0ZSBkb2Vzbid0IGhhdmUgYSBjb21wb25lbnQsIG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgIGNhbmQuY29tcG9uZW50ID0gMTtcbiAgICAgICAgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSA9IFNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlKGNhbmQpO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgbG9jYWwgZGVzY3JpcHRpb24uXG4gICAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgc2VjdGlvbnNbZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXggKyAxXSArPVxuICAgICAgICAgICAgJ2E9JyArIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUgKyAnXFxyXFxuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJztcbiAgICAgIH1cbiAgICAgIHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHAgPSBzZWN0aW9ucy5qb2luKCcnKTtcbiAgICAgIHZhciB0cmFuc2NlaXZlcnMgPSBzZWxmLl9wZW5kaW5nT2ZmZXIgPyBzZWxmLl9wZW5kaW5nT2ZmZXIgOlxuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzO1xuICAgICAgdmFyIGNvbXBsZXRlID0gdHJhbnNjZWl2ZXJzLmV2ZXJ5KGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJlxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuc3RhdGUgPT09ICdjb21wbGV0ZWQnO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEVtaXQgY2FuZGlkYXRlIGlmIGxvY2FsRGVzY3JpcHRpb24gaXMgc2V0LlxuICAgICAgLy8gQWxzbyBlbWl0cyBudWxsIGNhbmRpZGF0ZSB3aGVuIGFsbCBnYXRoZXJlcnMgYXJlIGNvbXBsZXRlLlxuICAgICAgc3dpdGNoIChzZWxmLmljZUdhdGhlcmluZ1N0YXRlKSB7XG4gICAgICAgIGNhc2UgJ25ldyc6XG4gICAgICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVuZCAmJiBjb21wbGV0ZSkge1xuICAgICAgICAgICAgc2VsZi5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnYXRoZXJpbmcnOlxuICAgICAgICAgIHNlbGYuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMoKTtcbiAgICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2ljZWNhbmRpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUobmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgIHNlbGYuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgICAgIC8vIHNob3VsZCBub3QgaGFwcGVuLi4uIGN1cnJlbnRseSFcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gbm8tb3AuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaWNlR2F0aGVyZXI7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIElDRSB0cmFuc3BvcnQgYW5kIERUTFMgdHJhbnNwb3J0LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2NyZWF0ZUljZUFuZER0bHNUcmFuc3BvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBpY2VUcmFuc3BvcnQgPSBuZXcgd2luZG93LlJUQ0ljZVRyYW5zcG9ydChudWxsKTtcbiAgICBpY2VUcmFuc3BvcnQub25pY2VzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcblxuICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gbmV3IHdpbmRvdy5SVENEdGxzVHJhbnNwb3J0KGljZVRyYW5zcG9ydCk7XG4gICAgZHRsc1RyYW5zcG9ydC5vbmR0bHNzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcbiAgICBkdGxzVHJhbnNwb3J0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9uZXJyb3IgZG9lcyBub3Qgc2V0IHN0YXRlIHRvIGZhaWxlZCBieSBpdHNlbGYuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZHRsc1RyYW5zcG9ydCwgJ3N0YXRlJyxcbiAgICAgICAgICB7dmFsdWU6ICdmYWlsZWQnLCB3cml0YWJsZTogdHJ1ZX0pO1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBpY2VUcmFuc3BvcnQ6IGljZVRyYW5zcG9ydCxcbiAgICAgIGR0bHNUcmFuc3BvcnQ6IGR0bHNUcmFuc3BvcnRcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlc3Ryb3kgSUNFIGdhdGhlcmVyLCBJQ0UgdHJhbnNwb3J0IGFuZCBEVExTIHRyYW5zcG9ydC5cbiAgLy8gV2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBjYWxsYmFja3MuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZGlzcG9zZUljZUFuZER0bHNUcmFuc3BvcnRzID0gZnVuY3Rpb24oXG4gICAgICBzZHBNTGluZUluZGV4KSB7XG4gICAgdmFyIGljZUdhdGhlcmVyID0gdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXI7XG4gICAgaWYgKGljZUdhdGhlcmVyKSB7XG4gICAgICBkZWxldGUgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZTtcbiAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VHYXRoZXJlcjtcbiAgICB9XG4gICAgdmFyIGljZVRyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydDtcbiAgICBpZiAoaWNlVHJhbnNwb3J0KSB7XG4gICAgICBkZWxldGUgaWNlVHJhbnNwb3J0Lm9uaWNlc3RhdGVjaGFuZ2U7XG4gICAgICBkZWxldGUgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlVHJhbnNwb3J0O1xuICAgIH1cbiAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQ7XG4gICAgaWYgKGR0bHNUcmFuc3BvcnQpIHtcbiAgICAgIGRlbGV0ZSBkdGxzVHJhbnNwb3J0Lm9uZHRsc3N0YXRlY2hhbmdlO1xuICAgICAgZGVsZXRlIGR0bHNUcmFuc3BvcnQub25lcnJvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5kdGxzVHJhbnNwb3J0O1xuICAgIH1cbiAgfTtcblxuICAvLyBTdGFydCB0aGUgUlRQIFNlbmRlciBhbmQgUmVjZWl2ZXIgZm9yIGEgdHJhbnNjZWl2ZXIuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdHJhbnNjZWl2ZSA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLFxuICAgICAgc2VuZCwgcmVjdikge1xuICAgIHZhciBwYXJhbXMgPSBnZXRDb21tb25DYXBhYmlsaXRpZXModHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG4gICAgaWYgKHNlbmQgJiYgdHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICBwYXJhbXMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIHBhcmFtcy5ydGNwID0ge1xuICAgICAgICBjbmFtZTogU0RQVXRpbHMubG9jYWxDTmFtZSxcbiAgICAgICAgY29tcG91bmQ6IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNvbXBvdW5kXG4gICAgICB9O1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtcy5ydGNwLnNzcmMgPSB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmM7XG4gICAgICB9XG4gICAgICB0cmFuc2NlaXZlci5ydHBTZW5kZXIuc2VuZChwYXJhbXMpO1xuICAgIH1cbiAgICBpZiAocmVjdiAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgLy8gcmVtb3ZlIFJUWCBmaWVsZCBpbiBFZGdlIDE0OTQyXG4gICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICYmIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgICAgICAmJiBlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgZGVsZXRlIHAucnR4O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgIGNuYW1lOiB0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5jbmFtZSxcbiAgICAgICAgY29tcG91bmQ6IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNvbXBvdW5kXG4gICAgICB9O1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtcy5ydGNwLnNzcmMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmM7XG4gICAgICB9XG4gICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5yZWNlaXZlKHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIWlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoJ3NldExvY2FsRGVzY3JpcHRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbi50eXBlLCB0aGlzLnNpZ25hbGluZ1N0YXRlKSkge1xuICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoJ0NhbiBub3Qgc2V0IGxvY2FsICcgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAnIGluIHN0YXRlICcgKyB0aGlzLnNpZ25hbGluZ1N0YXRlKTtcbiAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgdHlwZW9mIGFyZ3VtZW50c1syXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMl0sIDAsIGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHZhciBzZWN0aW9ucztcbiAgICB2YXIgc2Vzc2lvbnBhcnQ7XG4gICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgIC8vIEZJWE1FOiBXaGF0IHdhcyB0aGUgcHVycG9zZSBvZiB0aGlzIGVtcHR5IGlmIHN0YXRlbWVudD9cbiAgICAgIC8vIGlmICghdGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdPZmZlcikge1xuICAgICAgICAvLyBWRVJZIGxpbWl0ZWQgc3VwcG9ydCBmb3IgU0RQIG11bmdpbmcuIExpbWl0ZWQgdG86XG4gICAgICAgIC8vICogY2hhbmdpbmcgdGhlIG9yZGVyIG9mIGNvZGVjc1xuICAgICAgICBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoZGVzY3JpcHRpb24uc2RwKTtcbiAgICAgICAgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAgIHZhciBjYXBzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICAgICAgc2VsZi5fcGVuZGluZ09mZmVyW3NkcE1MaW5lSW5kZXhdLmxvY2FsQ2FwYWJpbGl0aWVzID0gY2FwcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgICBkZWxldGUgdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgICB2YXIgaXNJY2VMaXRlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICAgJ2E9aWNlLWxpdGUnKS5sZW5ndGggPiAwO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgdmFyIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIHZhciBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICB2YXIgaWNlVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0O1xuICAgICAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuICAgICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIHZhciByZWplY3RlZCA9IFNEUFV0aWxzLmlzUmVqZWN0ZWQobWVkaWFTZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXJlamVjdGVkICYmICF0cmFuc2NlaXZlci5pc0RhdGFjaGFubmVsKSB7XG4gICAgICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICBtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgbWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICAgICAgaWYgKGlzSWNlTGl0ZSkge1xuICAgICAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMucm9sZSA9ICdzZXJ2ZXInO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VsZi51c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpY2VUcmFuc3BvcnQuc3RhcnQoaWNlR2F0aGVyZXIsIHJlbW90ZUljZVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgaXNJY2VMaXRlID8gJ2NvbnRyb2xsaW5nJyA6ICdjb250cm9sbGVkJyk7XG4gICAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIG9mIGNhcGFiaWxpdGllcy5cbiAgICAgICAgICB2YXIgcGFyYW1zID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKGxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgICAgLy8gU3RhcnQgdGhlIFJUQ1J0cFNlbmRlci4gVGhlIFJUQ1J0cFJlY2VpdmVyIGZvciB0aGlzXG4gICAgICAgICAgLy8gdHJhbnNjZWl2ZXIgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkIGluIHNldFJlbW90ZURlc2NyaXB0aW9uLlxuICAgICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICAgIHBhcmFtcy5jb2RlY3MubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmxvY2FsRGVzY3JpcHRpb24gPSB7XG4gICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHBcbiAgICB9O1xuICAgIHN3aXRjaCAoZGVzY3JpcHRpb24udHlwZSkge1xuICAgICAgY2FzZSAnb2ZmZXInOlxuICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnaGF2ZS1sb2NhbC1vZmZlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICAgJ1wiJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBzdWNjZXNzIGNhbGxiYWNrIHdhcyBwcm92aWRlZCwgZW1pdCBJQ0UgY2FuZGlkYXRlcyBhZnRlciBpdFxuICAgIC8vIGhhcyBiZWVuIGV4ZWN1dGVkLiBPdGhlcndpc2UsIGVtaXQgY2FsbGJhY2sgYWZ0ZXIgdGhlIFByb21pc2UgaXNcbiAgICAvLyByZXNvbHZlZC5cbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJlxuICAgICAgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgIHZhciBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9PT0gJ25ldycpIHtcbiAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgcC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNDYWxsYmFjaykge1xuICAgICAgICBpZiAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9PT0gJ25ldycpIHtcbiAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXN1YWxseSBjYW5kaWRhdGVzIHdpbGwgYmUgZW1pdHRlZCBlYXJsaWVyLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzLmJpbmQoc2VsZiksIDUwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIWlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoJ3NldFJlbW90ZURlc2NyaXB0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb24udHlwZSwgdGhpcy5zaWduYWxpbmdTdGF0ZSkpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKCdDYW4gbm90IHNldCByZW1vdGUgJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICcgaW4gc3RhdGUgJyArIHRoaXMuc2lnbmFsaW5nU3RhdGUpO1xuICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiB0eXBlb2YgYXJndW1lbnRzWzJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1syXSwgMCwgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgdmFyIHN0cmVhbXMgPSB7fTtcbiAgICB2YXIgcmVjZWl2ZXJMaXN0ID0gW107XG4gICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhkZXNjcmlwdGlvbi5zZHApO1xuICAgIHZhciBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgdmFyIGlzSWNlTGl0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1pY2UtbGl0ZScpLmxlbmd0aCA+IDA7XG4gICAgdmFyIHVzaW5nQnVuZGxlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICdhPWdyb3VwOkJVTkRMRSAnKS5sZW5ndGggPiAwO1xuICAgIHRoaXMudXNpbmdCdW5kbGUgPSB1c2luZ0J1bmRsZTtcbiAgICB2YXIgaWNlT3B0aW9ucyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1pY2Utb3B0aW9uczonKVswXTtcbiAgICBpZiAoaWNlT3B0aW9ucykge1xuICAgICAgdGhpcy5jYW5Ucmlja2xlSWNlQ2FuZGlkYXRlcyA9IGljZU9wdGlvbnMuc3Vic3RyKDE0KS5zcGxpdCgnICcpXG4gICAgICAgICAgLmluZGV4T2YoJ3RyaWNrbGUnKSA+PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhblRyaWNrbGVJY2VDYW5kaWRhdGVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciBraW5kID0gU0RQVXRpbHMuZ2V0S2luZChtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHJlamVjdGVkID0gU0RQVXRpbHMuaXNSZWplY3RlZChtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHByb3RvY29sID0gbGluZXNbMF0uc3Vic3RyKDIpLnNwbGl0KCcgJylbMl07XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBTRFBVdGlscy5nZXREaXJlY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICB2YXIgcmVtb3RlTXNpZCA9IFNEUFV0aWxzLnBhcnNlTXNpZChtZWRpYVNlY3Rpb24pO1xuXG4gICAgICB2YXIgbWlkID0gU0RQVXRpbHMuZ2V0TWlkKG1lZGlhU2VjdGlvbikgfHwgU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG5cbiAgICAgIC8vIFJlamVjdCBkYXRhY2hhbm5lbHMgd2hpY2ggYXJlIG5vdCBpbXBsZW1lbnRlZCB5ZXQuXG4gICAgICBpZiAoa2luZCA9PT0gJ2FwcGxpY2F0aW9uJyAmJiBwcm90b2NvbCA9PT0gJ0RUTFMvU0NUUCcpIHtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0gPSB7XG4gICAgICAgICAgbWlkOiBtaWQsXG4gICAgICAgICAgaXNEYXRhY2hhbm5lbDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2NlaXZlcjtcbiAgICAgIHZhciBpY2VHYXRoZXJlcjtcbiAgICAgIHZhciBpY2VUcmFuc3BvcnQ7XG4gICAgICB2YXIgZHRsc1RyYW5zcG9ydDtcbiAgICAgIHZhciBydHBSZWNlaXZlcjtcbiAgICAgIHZhciBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgdmFyIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXM7XG5cbiAgICAgIHZhciB0cmFjaztcbiAgICAgIC8vIEZJWE1FOiBlbnN1cmUgdGhlIG1lZGlhU2VjdGlvbiBoYXMgcnRjcC1tdXggc2V0LlxuICAgICAgdmFyIHJlbW90ZUNhcGFiaWxpdGllcyA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnM7XG4gICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnM7XG4gICAgICBpZiAoIXJlamVjdGVkKSB7XG4gICAgICAgIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICBzZXNzaW9ucGFydCk7XG4gICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzLnJvbGUgPSAnY2xpZW50JztcbiAgICAgIH1cbiAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgIFNEUFV0aWxzLnBhcnNlUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG5cbiAgICAgIHZhciBydGNwUGFyYW1ldGVycyA9IFNEUFV0aWxzLnBhcnNlUnRjcFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcblxuICAgICAgdmFyIGlzQ29tcGxldGUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnLCBzZXNzaW9ucGFydCkubGVuZ3RoID4gMDtcbiAgICAgIHZhciBjYW5kcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9Y2FuZGlkYXRlOicpXG4gICAgICAgICAgLm1hcChmdW5jdGlvbihjYW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VDYW5kaWRhdGUoY2FuZCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNhbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5kLmNvbXBvbmVudCA9PT0gJzEnIHx8IGNhbmQuY29tcG9uZW50ID09PSAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gdXNlIEJVTkRMRSBhbmQgZGlzcG9zZSB0cmFuc3BvcnRzLlxuICAgICAgaWYgKChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInIHx8IGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInKSAmJlxuICAgICAgICAgICFyZWplY3RlZCAmJiB1c2luZ0J1bmRsZSAmJiBzZHBNTGluZUluZGV4ID4gMCAmJlxuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdKSB7XG4gICAgICAgIHNlbGYuX2Rpc3Bvc2VJY2VBbmREdGxzVHJhbnNwb3J0cyhzZHBNTGluZUluZGV4KTtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXIgPVxuICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXI7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydCA9XG4gICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQgPVxuICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgaWYgKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFNlbmRlcikge1xuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFNlbmRlci5zZXRUcmFuc3BvcnQoXG4gICAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBSZWNlaXZlcikge1xuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFJlY2VpdmVyLnNldFRyYW5zcG9ydChcbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInICYmICFyZWplY3RlZCkge1xuICAgICAgICB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdIHx8XG4gICAgICAgICAgICBzZWxmLl9jcmVhdGVUcmFuc2NlaXZlcihraW5kKTtcbiAgICAgICAgdHJhbnNjZWl2ZXIubWlkID0gbWlkO1xuXG4gICAgICAgIGlmICghdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciA9IHVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID9cbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXIgOlxuICAgICAgICAgICAgICBzZWxmLl9jcmVhdGVJY2VHYXRoZXJlcihtaWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ29tcGxldGUgJiYgY2FuZHMubGVuZ3RoICYmXG4gICAgICAgICAgICAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnNldFJlbW90ZUNhbmRpZGF0ZXMoY2FuZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIuZ2V0Q2FwYWJpbGl0aWVzKGtpbmQpO1xuXG4gICAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAvLyBpbiBhZGFwdGVyLmpzXG4gICAgICAgIGlmIChlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgICAgZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29kZWMubmFtZSAhPT0gJ3J0eCc7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxXG4gICAgICAgIH1dO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSB7XG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSBuZXcgd2luZG93LlJUQ1J0cFJlY2VpdmVyKHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQsXG4gICAgICAgICAgICAgIGtpbmQpO1xuXG4gICAgICAgICAgdHJhY2sgPSBydHBSZWNlaXZlci50cmFjaztcbiAgICAgICAgICAvLyBGSVhNRTogZG9lcyBub3Qgd29yayB3aXRoIFBsYW4gQi5cbiAgICAgICAgICBpZiAocmVtb3RlTXNpZCkge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSkge1xuICAgICAgICAgICAgICBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGVNc2lkLnN0cmVhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWNrLCAnaWQnLCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbW90ZU1zaWQudHJhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlcixcbiAgICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzID0gbG9jYWxDYXBhYmlsaXRpZXM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyA9IHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIgPSBydHBSZWNlaXZlcjtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcbiAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPSByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBSVENSdHBSZWNlaXZlciBub3cuIFRoZSBSVFBTZW5kZXIgaXMgc3RhcnRlZCBpblxuICAgICAgICAvLyBzZXRMb2NhbERlc2NyaXB0aW9uLlxuICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIGljZUdhdGhlcmVyID0gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXI7XG4gICAgICAgIGljZVRyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydDtcbiAgICAgICAgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIHJ0cFJlY2VpdmVyID0gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVtb3RlQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcblxuICAgICAgICBpZiAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApIHtcbiAgICAgICAgICBpZiAoKGlzSWNlTGl0ZSB8fCBpc0NvbXBsZXRlKSAmJiBjYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGljZVRyYW5zcG9ydC5zZXRSZW1vdGVDYW5kaWRhdGVzKGNhbmRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAnY29udHJvbGxpbmcnKTtcbiAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAncmVjdm9ubHknLFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG5cbiAgICAgICAgaWYgKHJ0cFJlY2VpdmVyICYmXG4gICAgICAgICAgICAoZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5JykpIHtcbiAgICAgICAgICB0cmFjayA9IHJ0cFJlY2VpdmVyLnRyYWNrO1xuICAgICAgICAgIGlmIChyZW1vdGVNc2lkKSB7XG4gICAgICAgICAgICBpZiAoIXN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dKSB7XG4gICAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlciwgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGSVhNRTogYWN0dWFsbHkgdGhlIHJlY2VpdmVyIHNob3VsZCBiZSBjcmVhdGVkIGxhdGVyLlxuICAgICAgICAgIGRlbGV0ZSB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdGVEZXNjcmlwdGlvbiA9IHtcbiAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICBzZHA6IGRlc2NyaXB0aW9uLnNkcFxuICAgIH07XG4gICAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdvZmZlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdoYXZlLXJlbW90ZS1vZmZlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICAgJ1wiJyk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHN0cmVhbXMpLmZvckVhY2goZnVuY3Rpb24oc2lkKSB7XG4gICAgICB2YXIgc3RyZWFtID0gc3RyZWFtc1tzaWRdO1xuICAgICAgaWYgKHN0cmVhbS5nZXRUcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdhZGRzdHJlYW0nKTtcbiAgICAgICAgZXZlbnQuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAoc2VsZi5vbmFkZHN0cmVhbSAhPT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5vbmFkZHN0cmVhbShldmVudCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWNlaXZlckxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgdmFyIHRyYWNrID0gaXRlbVswXTtcbiAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSBpdGVtWzFdO1xuICAgICAgICAgIGlmIChzdHJlYW0uaWQgIT09IGl0ZW1bMl0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHRyYWNrRXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgdHJhY2tFdmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgIHRyYWNrRXZlbnQucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgICB0cmFja0V2ZW50LnN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQodHJhY2tFdmVudCk7XG4gICAgICAgICAgaWYgKHNlbGYub250cmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYub250cmFjayh0cmFja0V2ZW50KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIGFkZEljZUNhbmRpZGF0ZSh7fSkgd2FzIGNhbGxlZCB3aXRoaW4gZm91ciBzZWNvbmRzIGFmdGVyXG4gICAgLy8gc2V0UmVtb3RlRGVzY3JpcHRpb24uXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIShzZWxmICYmIHNlbGYudHJhbnNjZWl2ZXJzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZSA9PT0gJ25ldycgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5nZXRSZW1vdGVDYW5kaWRhdGVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGltZW91dCBmb3IgYWRkUmVtb3RlQ2FuZGlkYXRlLiBDb25zaWRlciBzZW5kaW5nICcgK1xuICAgICAgICAgICAgICAnYW4gZW5kLW9mLWNhbmRpZGF0ZXMgbm90aWZpY2F0aW9uJyk7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDQwMDApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAvKiBub3QgeWV0XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgICovXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCkge1xuICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gRklYTUU6IGNsZWFuIHVwIHRyYWNrcywgbG9jYWwgc3RyZWFtcywgcmVtb3RlIHN0cmVhbXMsIGV0Y1xuICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdjbG9zZWQnKTtcbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIHNpZ25hbGluZyBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVTaWduYWxpbmdTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG4gICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc2lnbmFsaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIHRvIGZpcmUgdGhlIG5lZ290aWF0aW9ubmVlZGVkIGV2ZW50LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLnNpZ25hbGluZ1N0YXRlICE9PSAnc3RhYmxlJyB8fCB0aGlzLm5lZWROZWdvdGlhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5lZWROZWdvdGlhdGlvbiA9IHRydWU7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5uZWVkTmVnb3RpYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGYubmVlZE5lZ290aWF0aW9uID0gZmFsc2U7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHNlbGYub25uZWdvdGlhdGlvbm5lZWRlZCAhPT0gbnVsbCkge1xuICAgICAgICBzZWxmLm9ubmVnb3RpYXRpb25uZWVkZWQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9O1xuXG4gIC8vIFVwZGF0ZSB0aGUgY29ubmVjdGlvbiBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5ld1N0YXRlO1xuICAgIHZhciBzdGF0ZXMgPSB7XG4gICAgICAnbmV3JzogMCxcbiAgICAgIGNsb3NlZDogMCxcbiAgICAgIGNvbm5lY3Rpbmc6IDAsXG4gICAgICBjaGVja2luZzogMCxcbiAgICAgIGNvbm5lY3RlZDogMCxcbiAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgIGRpc2Nvbm5lY3RlZDogMCxcbiAgICAgIGZhaWxlZDogMFxuICAgIH07XG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgc3RhdGVzW3RyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgIHN0YXRlc1t0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0YXRlXSsrO1xuICAgIH0pO1xuICAgIC8vIElDRVRyYW5zcG9ydC5jb21wbGV0ZWQgYW5kIGNvbm5lY3RlZCBhcmUgdGhlIHNhbWUgZm9yIHRoaXMgcHVycG9zZS5cbiAgICBzdGF0ZXMuY29ubmVjdGVkICs9IHN0YXRlcy5jb21wbGV0ZWQ7XG5cbiAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgIGlmIChzdGF0ZXMuZmFpbGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnZmFpbGVkJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb25uZWN0aW5nID4gMCB8fCBzdGF0ZXMuY2hlY2tpbmcgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdjb25uZWN0aW5nJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5kaXNjb25uZWN0ZWQgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzLm5ldyA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ25ldyc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGVkID4gMCB8fCBzdGF0ZXMuY29tcGxldGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnY29ubmVjdGVkJztcbiAgICB9XG5cbiAgICBpZiAobmV3U3RhdGUgIT09IHNlbGYuaWNlQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgICBzZWxmLmljZUNvbm5lY3Rpb25TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdpY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBpZiAodGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9wZW5kaW5nT2ZmZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlT2ZmZXIgY2FsbGVkIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyBvZmZlci4nKTtcbiAgICB9XG4gICAgdmFyIG9mZmVyT3B0aW9ucztcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgfVxuXG4gICAgdmFyIG51bUF1ZGlvVHJhY2tzID0gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XG4gICAgfSkubGVuZ3RoO1xuICAgIHZhciBudW1WaWRlb1RyYWNrcyA9IHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xuICAgIH0pLmxlbmd0aDtcblxuICAgIC8vIERldGVybWluZSBudW1iZXIgb2YgYXVkaW8gYW5kIHZpZGVvIHRyYWNrcyB3ZSBuZWVkIHRvIHNlbmQvcmVjdi5cbiAgICBpZiAob2ZmZXJPcHRpb25zKSB7XG4gICAgICAvLyBSZWplY3QgQ2hyb21lIGxlZ2FjeSBjb25zdHJhaW50cy5cbiAgICAgIGlmIChvZmZlck9wdGlvbnMubWFuZGF0b3J5IHx8IG9mZmVyT3B0aW9ucy5vcHRpb25hbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0xlZ2FjeSBtYW5kYXRvcnkvb3B0aW9uYWwgY29uc3RyYWludHMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBudW1BdWRpb1RyYWNrcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSB0cnVlKSB7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSBmYWxzZSkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1WaWRlb1RyYWNrcyA9IG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgbnVtQXVkaW9UcmFja3MtLTtcbiAgICAgICAgaWYgKG51bUF1ZGlvVHJhY2tzIDwgMCkge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgICBpZiAobnVtVmlkZW9UcmFja3MgPCAwKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIud2FudFJlY2VpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIE0tbGluZXMgZm9yIHJlY3Zvbmx5IHN0cmVhbXMuXG4gICAgd2hpbGUgKG51bUF1ZGlvVHJhY2tzID4gMCB8fCBudW1WaWRlb1RyYWNrcyA+IDApIHtcbiAgICAgIGlmIChudW1BdWRpb1RyYWNrcyA+IDApIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlVHJhbnNjZWl2ZXIoJ2F1ZGlvJyk7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICB9XG4gICAgICBpZiAobnVtVmlkZW9UcmFja3MgPiAwKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKCd2aWRlbycpO1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZW9yZGVyIHRyYWNrc1xuICAgIHZhciB0cmFuc2NlaXZlcnMgPSBzb3J0VHJhY2tzKHRoaXMudHJhbnNjZWl2ZXJzKTtcblxuICAgIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSh0aGlzLl9zZHBTZXNzaW9uSWQpO1xuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAvLyBGb3IgZWFjaCB0cmFjaywgY3JlYXRlIGFuIGljZSBnYXRoZXJlciwgaWNlIHRyYW5zcG9ydCxcbiAgICAgIC8vIGR0bHMgdHJhbnNwb3J0LCBwb3RlbnRpYWxseSBydHBzZW5kZXIgYW5kIHJ0cHJlY2VpdmVyLlxuICAgICAgdmFyIHRyYWNrID0gdHJhbnNjZWl2ZXIudHJhY2s7XG4gICAgICB2YXIga2luZCA9IHRyYW5zY2VpdmVyLmtpbmQ7XG4gICAgICB2YXIgbWlkID0gU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG4gICAgICB0cmFuc2NlaXZlci5taWQgPSBtaWQ7XG5cbiAgICAgIGlmICghdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgPSBzZWxmLnVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID9cbiAgICAgICAgICAgIHRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlciA6XG4gICAgICAgICAgICBzZWxmLl9jcmVhdGVJY2VHYXRoZXJlcihtaWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwU2VuZGVyLmdldENhcGFiaWxpdGllcyhraW5kKTtcbiAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgLy8gaW4gYWRhcHRlci5qc1xuICAgICAgaWYgKGVkZ2VWZXJzaW9uIDwgMTUwMTkpIHtcbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2RlYy5uYW1lICE9PSAncnR4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgLy8gd29yayBhcm91bmQgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTY1NTJcbiAgICAgICAgLy8gYnkgYWRkaW5nIGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTFcbiAgICAgICAgaWYgKGNvZGVjLm5hbWUgPT09ICdIMjY0JyAmJlxuICAgICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9ICcxJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGdlbmVyYXRlIGFuIHNzcmMgbm93LCB0byBiZSB1c2VkIGxhdGVyIGluIHJ0cFNlbmRlci5zZW5kXG4gICAgICB2YXIgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDEpICogMTAwMVxuICAgICAgfV07XG4gICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICBpZiAoZWRnZVZlcnNpb24gPj0gMTUwMTkgJiYga2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4ID0ge1xuICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMSkgKiAxMDAxICsgMVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyID0gbmV3IHdpbmRvdy5SVENSdHBSZWNlaXZlcihcbiAgICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LFxuICAgICAgICAgIGtpbmRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMgPSBsb2NhbENhcGFiaWxpdGllcztcbiAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgIH0pO1xuXG4gICAgLy8gYWx3YXlzIG9mZmVyIEJVTkRMRSBhbmQgZGlzcG9zZSBvbiByZXR1cm4gaWYgbm90IHN1cHBvcnRlZC5cbiAgICBpZiAodGhpcy5fY29uZmlnLmJ1bmRsZVBvbGljeSAhPT0gJ21heC1jb21wYXQnKSB7XG4gICAgICBzZHAgKz0gJ2E9Z3JvdXA6QlVORExFICcgKyB0cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHNkcCArPSAnYT1pY2Utb3B0aW9uczp0cmlja2xlXFxyXFxuJztcblxuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsICdvZmZlcicsIHRyYW5zY2VpdmVyLnN0cmVhbSk7XG4gICAgICBzZHAgKz0gJ2E9cnRjcC1yc2l6ZVxcclxcbic7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wZW5kaW5nT2ZmZXIgPSB0cmFuc2NlaXZlcnM7XG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnb2ZmZXInLFxuICAgICAgc2RwOiBzZHBcbiAgICB9KTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMF0sIDAsIGRlc2MpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlc2MpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUodGhpcy5fc2RwU2Vzc2lvbklkKTtcbiAgICBpZiAodGhpcy51c2luZ0J1bmRsZSkge1xuICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgdGhpcy50cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5pc0RhdGFjaGFubmVsKSB7XG4gICAgICAgIHNkcCArPSAnbT1hcHBsaWNhdGlvbiAwIERUTFMvU0NUUCA1MDAwXFxyXFxuJyArXG4gICAgICAgICAgICAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbicgK1xuICAgICAgICAgICAgJ2E9bWlkOicgKyB0cmFuc2NlaXZlci5taWQgKyAnXFxyXFxuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGSVhNRTogbG9vayBhdCBkaXJlY3Rpb24uXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuc3RyZWFtKSB7XG4gICAgICAgIHZhciBsb2NhbFRyYWNrO1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgIGxvY2FsVHJhY2sgPSB0cmFuc2NlaXZlci5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgbG9jYWxUcmFjayA9IHRyYW5zY2VpdmVyLnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbFRyYWNrKSB7XG4gICAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAxOSAmJiB0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCA9IHtcbiAgICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgIHZhciBoYXNSdHggPSBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCc7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAoIWhhc1J0eCAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHg7XG4gICAgICB9XG5cbiAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbih0cmFuc2NlaXZlciwgY29tbW9uQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICdhbnN3ZXInLCB0cmFuc2NlaXZlci5zdHJlYW0pO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzICYmXG4gICAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUpIHtcbiAgICAgICAgc2RwICs9ICdhPXJ0Y3AtcnNpemVcXHJcXG4nO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnYW5zd2VyJyxcbiAgICAgIHNkcDogc2RwXG4gICAgfSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXNjKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gICAgaWYgKCFjYW5kaWRhdGUpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy50cmFuc2NlaXZlcnNbal0uaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIGlmICh0aGlzLnVzaW5nQnVuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtTGluZUluZGV4ID0gY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXg7XG4gICAgICBpZiAoY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNjZWl2ZXJzW2ldLm1pZCA9PT0gY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB0cmFuc2NlaXZlciA9IHRoaXMudHJhbnNjZWl2ZXJzW21MaW5lSW5kZXhdO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHZhciBjYW5kID0gT2JqZWN0LmtleXMoY2FuZGlkYXRlLmNhbmRpZGF0ZSkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kaWRhdGUuY2FuZGlkYXRlKSA6IHt9O1xuICAgICAgICAvLyBJZ25vcmUgQ2hyb21lJ3MgaW52YWxpZCBjYW5kaWRhdGVzIHNpbmNlIEVkZ2UgZG9lcyBub3QgbGlrZSB0aGVtLlxuICAgICAgICBpZiAoY2FuZC5wcm90b2NvbCA9PT0gJ3RjcCcgJiYgKGNhbmQucG9ydCA9PT0gMCB8fCBjYW5kLnBvcnQgPT09IDkpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElnbm9yZSBSVENQIGNhbmRpZGF0ZXMsIHdlIGFzc3VtZSBSVENQLU1VWC5cbiAgICAgICAgaWYgKGNhbmQuY29tcG9uZW50ICYmXG4gICAgICAgICAgICAhKGNhbmQuY29tcG9uZW50ID09PSAnMScgfHwgY2FuZC5jb21wb25lbnQgPT09IDEpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5hZGRSZW1vdGVDYW5kaWRhdGUoY2FuZCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSByZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyh0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgIHNlY3Rpb25zW21MaW5lSW5kZXggKyAxXSArPSAoY2FuZC50eXBlID8gY2FuZGlkYXRlLmNhbmRpZGF0ZS50cmltKClcbiAgICAgICAgICAgIDogJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnKSArICdcXHJcXG4nO1xuICAgICAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCA9IHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzFdLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIFsncnRwU2VuZGVyJywgJ3J0cFJlY2VpdmVyJywgJ2ljZUdhdGhlcmVyJywgJ2ljZVRyYW5zcG9ydCcsXG4gICAgICAgICdkdGxzVHJhbnNwb3J0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICBpZiAodHJhbnNjZWl2ZXJbbWV0aG9kXSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmFuc2NlaXZlclttZXRob2RdLmdldFN0YXRzKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICBhcmd1bWVudHNbMV07XG4gICAgdmFyIGZpeFN0YXRzVHlwZSA9IGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluYm91bmRydHA6ICdpbmJvdW5kLXJ0cCcsXG4gICAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgICAgY2FuZGlkYXRlcGFpcjogJ2NhbmRpZGF0ZS1wYWlyJyxcbiAgICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgICAgfVtzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXAoKTtcbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICByZXMuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtpZF0udHlwZSA9IGZpeFN0YXRzVHlwZShyZXN1bHRbaWRdKTtcbiAgICAgICAgICAgIHJlc3VsdHMuc2V0KGlkLCByZXN1bHRbaWRdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAwLCByZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBSVENQZWVyQ29ubmVjdGlvbjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvcnRjcGVlcmNvbm5lY3Rpb25fc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgZmlyZWZveFNoaW0gPSB7XG4gIHNoaW1PblRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmICEoJ29udHJhY2snIGluXG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29udHJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oZikge1xuICAgICAgICAgIGlmICh0aGlzLl9vbnRyYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2sgPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0ge3RyYWNrOiB0cmFja307XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbVNvdXJjZU9iamVjdDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gRmlyZWZveCBoYXMgc3VwcG9ydGVkIG1velNyY09iamVjdCBzaW5jZSBGRjIyLCB1bnByZWZpeGVkIGluIDQyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICAvLyBTaGltIHRoZSBzcmNPYmplY3QgcHJvcGVydHksIG9uY2UsIHdoZW4gSFRNTE1lZGlhRWxlbWVudCBpcyBmb3VuZC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW96U3JjT2JqZWN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICEod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbikpIHtcbiAgICAgIHJldHVybjsgLy8gcHJvYmFibHkgbWVkaWEucGVlcmNvbm5lY3Rpb24uZW5hYmxlZD1mYWxzZSBpbiBhYm91dDpjb25maWdcbiAgICB9XG4gICAgLy8gVGhlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC5cbiAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCAzOCkge1xuICAgICAgICAgIC8vIC51cmxzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gRkYgPCAzOC5cbiAgICAgICAgICAvLyBjcmVhdGUgUlRDSWNlU2VydmVycyB3aXRoIGEgc2luZ2xlIHVybC5cbiAgICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGNDb25maWcuaWNlU2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgICAgaWYgKHNlcnZlci5oYXNPd25Qcm9wZXJ0eSgndXJscycpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZXJ2ZXIudXJscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgdmFyIG5ld1NlcnZlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXIudXJsc1tqXVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIudXJsc1tqXS5pbmRleE9mKCd0dXJuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VydmVyLnVzZXJuYW1lID0gc2VydmVyLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICBuZXdTZXJ2ZXIuY3JlZGVudGlhbCA9IHNlcnZlci5jcmVkZW50aWFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKG5ld1NlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID1cbiAgICAgICAgICB3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgICAgaWYgKHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IHdpbmRvdy5tb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gd2luZG93Lm1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzaGltIGF3YXkgbmVlZCBmb3Igb2Jzb2xldGUgUlRDSWNlQ2FuZGlkYXRlL1JUQ1Nlc3Npb25EZXNjcmlwdGlvbi5cbiAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG5ldyAoKG1ldGhvZCA9PT0gJ2FkZEljZUNhbmRpZGF0ZScpID9cbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlIDpcbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKShhcmd1bWVudHNbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgYWRkSWNlQ2FuZGlkYXRlKG51bGwgb3IgdW5kZWZpbmVkKVxuICAgIHZhciBuYXRpdmVBZGRJY2VDYW5kaWRhdGUgPVxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1sxXSkge1xuICAgICAgICAgIGFyZ3VtZW50c1sxXS5hcHBseShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlQWRkSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8vIHNoaW0gZ2V0U3RhdHMgd2l0aCBtYXBsaWtlIHN1cHBvcnRcbiAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgbWFwLnNldChrZXksIHN0YXRzW2tleV0pO1xuICAgICAgICBtYXBba2V5XSA9IHN0YXRzW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcblxuICAgIHZhciBtb2Rlcm5TdGF0c1R5cGVzID0ge1xuICAgICAgaW5ib3VuZHJ0cDogJ2luYm91bmQtcnRwJyxcbiAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgIGNhbmRpZGF0ZXBhaXI6ICdjYW5kaWRhdGUtcGFpcicsXG4gICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgIH07XG5cbiAgICB2YXIgbmF0aXZlR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbihcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgb25TdWNjLFxuICAgICAgb25FcnJcbiAgICApIHtcbiAgICAgIHJldHVybiBuYXRpdmVHZXRTdGF0cy5hcHBseSh0aGlzLCBbc2VsZWN0b3IgfHwgbnVsbF0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OCkge1xuICAgICAgICAgICAgc3RhdHMgPSBtYWtlTWFwU3RhdHMoc3RhdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUzICYmICFvblN1Y2MpIHtcbiAgICAgICAgICAgIC8vIFNoaW0gb25seSBwcm9taXNlIGdldFN0YXRzIHdpdGggc3BlYy1oeXBoZW5zIGluIHR5cGUgbmFtZXNcbiAgICAgICAgICAgIC8vIExlYXZlIGNhbGxiYWNrIHZlcnNpb24gYWxvbmU7IG1pc2Mgb2xkIHVzZXMgb2YgZm9yRWFjaCBiZWZvcmUgTWFwXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzdGF0cy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgICAgICAgICAgICBzdGF0LnR5cGUgPSBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIEF2b2lkIFR5cGVFcnJvcjogXCJ0eXBlXCIgaXMgcmVhZC1vbmx5LCBpbiBvbGQgdmVyc2lvbnMuIDM0LTQzaXNoXG4gICAgICAgICAgICAgIHN0YXRzLmZvckVhY2goZnVuY3Rpb24oc3RhdCwgaSkge1xuICAgICAgICAgICAgICAgIHN0YXRzLnNldChpLCBPYmplY3QuYXNzaWduKHt9LCBzdGF0LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0YXRzO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihvblN1Y2MsIG9uRXJyKTtcbiAgICB9O1xuICB9XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbU9uVHJhY2s6IGZpcmVmb3hTaGltLnNoaW1PblRyYWNrLFxuICBzaGltU291cmNlT2JqZWN0OiBmaXJlZm94U2hpbS5zaGltU291cmNlT2JqZWN0LFxuICBzaGltUGVlckNvbm5lY3Rpb246IGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbixcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9maXJlZm94X3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcbiAgdmFyIE1lZGlhU3RyZWFtVHJhY2sgPSB3aW5kb3cgJiYgd2luZG93Lk1lZGlhU3RyZWFtVHJhY2s7XG5cbiAgdmFyIHNoaW1FcnJvcl8gPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgSW50ZXJuYWxFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBOb3RTdXBwb3J0ZWRFcnJvcjogJ1R5cGVFcnJvcicsXG4gICAgICAgIFBlcm1pc3Npb25EZW5pZWRFcnJvcjogJ05vdEFsbG93ZWRFcnJvcicsXG4gICAgICAgIFNlY3VyaXR5RXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InXG4gICAgICB9W2UubmFtZV0gfHwgZS5uYW1lLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICAnVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZS4nOiAnVGhlIHJlcXVlc3QgaXMgbm90IGFsbG93ZWQgYnkgdGhlICcgK1xuICAgICAgICAndXNlciBhZ2VudCBvciB0aGUgcGxhdGZvcm0gaW4gdGhlIGN1cnJlbnQgY29udGV4dC4nXG4gICAgICB9W2UubWVzc2FnZV0gfHwgZS5tZXNzYWdlLFxuICAgICAgY29uc3RyYWludDogZS5jb25zdHJhaW50LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgKHRoaXMubWVzc2FnZSAmJiAnOiAnKSArIHRoaXMubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIGdldFVzZXJNZWRpYSBjb25zdHJhaW50cyBzaGltLlxuICB2YXIgZ2V0VXNlck1lZGlhXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICB2YXIgY29uc3RyYWludHNUb0ZGMzdfID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLnJlcXVpcmUpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICB2YXIgcmVxdWlyZSA9IFtdO1xuICAgICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3JlcXVpcmUnIHx8IGtleSA9PT0gJ2FkdmFuY2VkJyB8fCBrZXkgPT09ICdtZWRpYVNvdXJjZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBjW2tleV0gPSAodHlwZW9mIGNba2V5XSA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgIGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgICAgaWYgKHIubWluICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHIubWF4ICE9PSB1bmRlZmluZWQgfHwgci5leGFjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVxdWlyZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5leGFjdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHIuIG1pbiA9IHIubWF4ID0gci5leGFjdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY1trZXldID0gci5leGFjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHIuZXhhY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuaWRlYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGMuYWR2YW5jZWQgPSBjLmFkdmFuY2VkIHx8IFtdO1xuICAgICAgICAgIHZhciBvYyA9IHt9O1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG9jW2tleV0gPSB7bWluOiByLmlkZWFsLCBtYXg6IHIuaWRlYWx9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvY1trZXldID0gci5pZGVhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYy5hZHZhbmNlZC5wdXNoKG9jKTtcbiAgICAgICAgICBkZWxldGUgci5pZGVhbDtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHIpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIGNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcXVpcmUubGVuZ3RoKSB7XG4gICAgICAgIGMucmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9O1xuICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgMzgpIHtcbiAgICAgIGxvZ2dpbmcoJ3NwZWM6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvKSB7XG4gICAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHNUb0ZGMzdfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9GRjM3Xyhjb25zdHJhaW50cy52aWRlbyk7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdmZjM3OiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIG9uU3VjY2VzcywgZnVuY3Rpb24oZSkge1xuICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZ2V0VXNlck1lZGlhIGFzIGEgUHJvbWlzZS5cbiAgdmFyIGdldFVzZXJNZWRpYVByb21pc2VfID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBnZXRVc2VyTWVkaWFfKGNvbnN0cmFpbnRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFNoaW0gZm9yIG1lZGlhRGV2aWNlcyBvbiBvbGRlciB2ZXJzaW9ucy5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtnZXRVc2VyTWVkaWE6IGdldFVzZXJNZWRpYVByb21pc2VfLFxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7IH0sXG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpIHsgfVxuICAgIH07XG4gIH1cbiAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID1cbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIgaW5mb3MgPSBbXG4gICAgICAgICAgICB7a2luZDogJ2F1ZGlvaW5wdXQnLCBkZXZpY2VJZDogJ2RlZmF1bHQnLCBsYWJlbDogJycsIGdyb3VwSWQ6ICcnfSxcbiAgICAgICAgICAgIHtraW5kOiAndmlkZW9pbnB1dCcsIGRldmljZUlkOiAnZGVmYXVsdCcsIGxhYmVsOiAnJywgZ3JvdXBJZDogJyd9XG4gICAgICAgICAgXTtcbiAgICAgICAgICByZXNvbHZlKGluZm9zKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDEpIHtcbiAgICAvLyBXb3JrIGFyb3VuZCBodHRwOi8vYnVnemlsLmxhLzExNjk2NjVcbiAgICB2YXIgb3JnRW51bWVyYXRlRGV2aWNlcyA9XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcy5iaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG9yZ0VudW1lcmF0ZURldmljZXMoKS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5uYW1lID09PSAnTm90Rm91bmRFcnJvcicpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OSkge1xuICAgIHZhciBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAvLyBXb3JrIGFyb3VuZCBodHRwczovL2J1Z3ppbC5sYS84MDIzMjZcbiAgICAgICAgaWYgKGMuYXVkaW8gJiYgIXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCB8fFxuICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgb2JqZWN0IGNhbiBub3QgYmUgZm91bmQgaGVyZS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vdEZvdW5kRXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGlmICghKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPiA1NSAmJlxuICAgICAgJ2F1dG9HYWluQ29udHJvbCcgaW4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpKSkge1xuICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgaWYgKGEgaW4gb2JqICYmICEoYiBpbiBvYmopKSB7XG4gICAgICAgIG9ialtiXSA9IG9ialthXTtcbiAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG5hdGl2ZUdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnYXV0b0dhaW5Db250cm9sJywgJ21vekF1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlR2V0VXNlck1lZGlhKGMpO1xuICAgIH07XG5cbiAgICBpZiAoTWVkaWFTdHJlYW1UcmFjayAmJiBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncykge1xuICAgICAgdmFyIG5hdGl2ZUdldFNldHRpbmdzID0gTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuZ2V0U2V0dGluZ3M7XG4gICAgICBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb2JqID0gbmF0aXZlR2V0U2V0dGluZ3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmVtYXAob2JqLCAnbW96QXV0b0dhaW5Db250cm9sJywgJ2F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChvYmosICdtb3pOb2lzZVN1cHByZXNzaW9uJywgJ25vaXNlU3VwcHJlc3Npb24nKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKE1lZGlhU3RyZWFtVHJhY2sgJiYgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cykge1xuICAgICAgdmFyIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMgPSBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5hcHBseUNvbnN0cmFpbnRzO1xuICAgICAgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgaWYgKHRoaXMua2luZCA9PT0gJ2F1ZGlvJyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjKSk7XG4gICAgICAgICAgcmVtYXAoYywgJ2F1dG9HYWluQ29udHJvbCcsICdtb3pBdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgICByZW1hcChjLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMuYXBwbHkodGhpcywgW2NdKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0NCkge1xuICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYV8oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcik7XG4gICAgfVxuICAgIC8vIFJlcGxhY2UgRmlyZWZveCA0NCsncyBkZXByZWNhdGlvbiB3YXJuaW5nIHdpdGggdW5wcmVmaXhlZCB2ZXJzaW9uLlxuICAgIHV0aWxzLmRlcHJlY2F0ZWQoJ25hdmlnYXRvci5nZXRVc2VyTWVkaWEnLFxuICAgICAgICAnbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEnKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9nZXR1c2VybWVkaWEuanNcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0JztcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBzYWZhcmlTaGltID0ge1xuICAvLyBUT0RPOiBEckFsZXgsIHNob3VsZCBiZSBoZXJlLCBkb3VibGUgY2hlY2sgYWdhaW5zdCBMYXlvdXRUZXN0c1xuXG4gIC8vIFRPRE86IG9uY2UgdGhlIGJhY2stZW5kIGZvciB0aGUgbWFjIHBvcnQgaXMgZG9uZSwgYWRkLlxuICAvLyBUT0RPOiBjaGVjayBmb3Igd2Via2l0R1RLK1xuICAvLyBzaGltUGVlckNvbm5lY3Rpb246IGZ1bmN0aW9uKCkgeyB9LFxuXG4gIHNoaW1Mb2NhbFN0cmVhbXNBUEk6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCAhd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKCdnZXRMb2NhbFN0cmVhbXMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFN0cmVhbXM7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgnZ2V0U3RyZWFtQnlJZCcgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RyZWFtQnlJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBzdHJlYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JlbW90ZVN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBzdHJlYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdhZGRTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB2YXIgX2FkZFRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgX2FkZFRyYWNrLmNhbGwoc2VsZiwgdHJhY2ssIHN0cmVhbSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfYWRkVHJhY2suY2FsbCh0aGlzLCB0cmFjaywgc3RyZWFtKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdyZW1vdmVTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHRyYWNrcyA9IHN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgICAgdGhpcy5nZXRTZW5kZXJzKCkuZm9yRWFjaChmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICBpZiAodHJhY2tzLmluZGV4T2Yoc2VuZGVyLnRyYWNrKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlVHJhY2soc2VuZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHNoaW1SZW1vdGVTdHJlYW1zQVBJOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoISgnZ2V0UmVtb3RlU3RyZWFtcycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3RlU3RyZWFtcyA/IHRoaXMuX3JlbW90ZVN0cmVhbXMgOiBbXTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdvbmFkZHN0cmVhbScgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb25hZGRzdHJlYW0nLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uYWRkc3RyZWFtO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAodGhpcy5fb25hZGRzdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb25hZGRzdHJlYW0pO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29uYWRkc3RyZWFtcG9seSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb25hZGRzdHJlYW0gPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb25hZGRzdHJlYW1wb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IGUuc3RyZWFtc1swXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcmVtb3RlU3RyZWFtcykge1xuICAgICAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcmVtb3RlU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPj0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnYWRkc3RyZWFtJyk7XG4gICAgICAgICAgICBldmVudC5zdHJlYW0gPSBlLnN0cmVhbXNbMF07XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc2hpbUNhbGxiYWNrc0FQSTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHByb3RvdHlwZSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGU7XG4gICAgdmFyIGNyZWF0ZU9mZmVyID0gcHJvdG90eXBlLmNyZWF0ZU9mZmVyO1xuICAgIHZhciBjcmVhdGVBbnN3ZXIgPSBwcm90b3R5cGUuY3JlYXRlQW5zd2VyO1xuICAgIHZhciBzZXRMb2NhbERlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb247XG4gICAgdmFyIHNldFJlbW90ZURlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICAgIHZhciBhZGRJY2VDYW5kaWRhdGUgPSBwcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBvcHRpb25zID0gKGFyZ3VtZW50cy5sZW5ndGggPj0gMikgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZU9mZmVyLmFwcGx5KHRoaXMsIFtvcHRpb25zXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIG9wdGlvbnMgPSAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1swXTtcbiAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlQW5zd2VyLmFwcGx5KHRoaXMsIFtvcHRpb25zXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHZhciB3aXRoQ2FsbGJhY2sgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwcm9taXNlID0gc2V0TG9jYWxEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBbZGVzY3JpcHRpb25dKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIHByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gd2l0aENhbGxiYWNrO1xuXG4gICAgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oZGVzY3JpcHRpb24sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHNldFJlbW90ZURlc2NyaXB0aW9uLmFwcGx5KHRoaXMsIFtkZXNjcmlwdGlvbl0pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gd2l0aENhbGxiYWNrO1xuXG4gICAgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oY2FuZGlkYXRlLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIHByb21pc2UgPSBhZGRJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgW2NhbmRpZGF0ZV0pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgcHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IHdpdGhDYWxsYmFjaztcbiAgfSxcbiAgc2hpbUdldFVzZXJNZWRpYTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKSB7XG4gICAgICBpZiAobmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYS5iaW5kKG5hdmlnYXRvcik7XG4gICAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMsIGNiLCBlcnJjYikge1xuICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKVxuICAgICAgICAgIC50aGVuKGNiLCBlcnJjYik7XG4gICAgICAgIH0uYmluZChuYXZpZ2F0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2hpbVJUQ0ljZVNlcnZlclVybHM6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIG1pZ3JhdGUgZnJvbSBub24tc3BlYyBSVENJY2VTZXJ2ZXIudXJsIHRvIFJUQ0ljZVNlcnZlci51cmxzXG4gICAgdmFyIE9yaWdQZWVyQ29ubmVjdGlvbiA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG4gICAgICAgICAgaWYgKCFzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybHMnKSAmJlxuICAgICAgICAgICAgICBzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICB1dGlscy5kZXByZWNhdGVkKCdSVENJY2VTZXJ2ZXIudXJsJywgJ1JUQ0ljZVNlcnZlci51cmxzJyk7XG4gICAgICAgICAgICBzZXJ2ZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNlcnZlcikpO1xuICAgICAgICAgICAgc2VydmVyLnVybHMgPSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2goc2VydmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzID0gbmV3SWNlU2VydmVycztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgT3JpZ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICB9O1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiwgJ2dlbmVyYXRlQ2VydGlmaWNhdGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gT3JpZ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGltQ2FsbGJhY2tzQVBJOiBzYWZhcmlTaGltLnNoaW1DYWxsYmFja3NBUEksXG4gIHNoaW1Mb2NhbFN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbUxvY2FsU3RyZWFtc0FQSSxcbiAgc2hpbVJlbW90ZVN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbVJlbW90ZVN0cmVhbXNBUEksXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYSxcbiAgc2hpbVJUQ0ljZVNlcnZlclVybHM6IHNhZmFyaVNoaW0uc2hpbVJUQ0ljZVNlcnZlclVybHNcbiAgLy8gVE9ET1xuICAvLyBzaGltUGVlckNvbm5lY3Rpb246IHNhZmFyaVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
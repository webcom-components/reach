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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
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

var core = module.exports = { version: '2.5.1' };
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

var store = __webpack_require__(46)('wks');
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
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_Config=__webpack_require__(92),_Config2=_interopRequireDefault(_Config),_StreamManager=__webpack_require__(95),_StreamManager2=_interopRequireDefault(_StreamManager),_PeerConnectionManager=__webpack_require__(97),_PeerConnectionManager2=_interopRequireDefault(_PeerConnectionManager),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _cache=null;var CacheManager=function(){function CacheManager(){(0,_classCallCheck3.default)(this,CacheManager);if(!_cache){_cache=this;}return _cache;}(0,_createClass3.default)(CacheManager,[{key:'base',set:function set(url){this._base=url instanceof _webcom2.default?url:new _webcom2.default(url);},get:function get(){return this._base;}},{key:'config',set:function set(config){if(!this._config){this._config=new _Config2.default(config);}else{this._config.assign(config);}},get:function get(){if(!this._config){this._config=new _Config2.default();}return this._config;}},{key:'user',set:function set(user){this._user=user;},get:function get(){return this._user;}},{key:'device',set:function set(device){this._device=device;},get:function get(){return this._device;}},{key:'logLevel',set:function set(level){if(/^DEBUG|INFO|WARN|ERROR$/i.test(level)){this._logLevel=level;}else if(level){throw new Error('Unsupported log level (DEBUG, INFO, WARN, ERROR)');}},get:function get(){return this._logLevel||'ERROR';}},{key:'streams',get:function get(){if(!this._streams){this._streams=new _StreamManager2.default();}return this._streams;}},{key:'peerConnections',get:function get(){if(!this._peerConnections){this._peerConnections=new _PeerConnectionManager2.default();}return this._peerConnections;}}]);return CacheManager;}();var cache=new CacheManager();exports.default=cache;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});exports.r=exports.e=exports.w=exports.i=exports.d=undefined;var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_typeof2=__webpack_require__(104),_typeof3=_interopRequireDefault(_typeof2),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var levels=['DEBUG','INFO','WARN','ERROR'],isEnabled=function isEnabled(level){return levels.indexOf(level.toUpperCase())>=levels.indexOf(_cache2.default.logLevel.toUpperCase());},gConsole=global.console,logger=function logger(method,level){for(var _len=arguments.length,messages=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){messages[_key-2]=arguments[_key];}isEnabled(level)?gConsole[method.toLowerCase()].bind(gConsole).apply(undefined,messages):function(){};},group=function group(level,message){for(var _len2=arguments.length,items=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){items[_key2-2]=arguments[_key2];}if(items.length>0){logger.bind(undefined,gConsole.group?'group':level,level)(typeof message==='string'?message:'');var values=(typeof message!=='string'?[message]:[]).concat(items);if(items.length===1&&items[0]instanceof Array&&(0,_typeof3.default)(items[0].length)!==undefined){values=items[0];}values.forEach(function(item){return logger.bind(undefined,level,level)(item);});gConsole.groupEnd&&gConsole.groupEnd();}else{logger.bind(undefined,level,level,message);}};var d=exports.d=group.bind(undefined,levels[0]);var i=exports.i=group.bind(undefined,levels[1]);var w=exports.w=group.bind(undefined,levels[2]);var e=exports.e=gConsole.error.bind(gConsole);var r=exports.r=function r(message){return function(reason){d(message,reason);return _promise2.default.reject(reason||message);};};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.ts=exports.onDisconnect=exports.off=exports.on=exports.list=exports.get=exports.once=exports.remove=exports.update=exports.push=exports.set=exports.eventType=undefined;var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var eventType=exports.eventType=function eventType(event){var evt=void 0;if(/_ADDED$/i.test(event)||/_PUBLISHED$/.test(event)){evt='added';}else if(/_CHANGED$/.test(event)||/_REFRESHED$/.test(event)){evt='changed';}else if(/_REMOVED$/.test(event)||/_UNPUBLISHED$/.test(event)){evt='removed';}return evt?'child_'+evt:event;};var _write=function _write(method,path,data){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path)[method](data,function(error){return error?reject(error):resolve();});});};var set=exports.set=_write.bind(undefined,'set');var push=exports.push=function push(path,data){return new _promise2.default(function(resolve,reject){var pushRef=_cache2.default.base.child(path).push(data,function(error){return error?reject(error):resolve(pushRef);});});};var update=exports.update=_write.bind(undefined,'update');var remove=exports.remove=function remove(path){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).remove(function(error){return error?reject(error):resolve();});});};var once=exports.once=function once(path,event){return new _promise2.default(function(resolve,reject){_cache2.default.base.child(path).once(eventType(event),resolve,reject);});};var get=exports.get=function get(path){return once(path,'value');};var list=exports.list=function list(path,Type){for(var _len=arguments.length,params=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){params[_key-2]=arguments[_key];}return get(path).then(function(snapData){if(snapData){var values=[];snapData.forEach(function(snapChild){values.push(new(Function.prototype.bind.apply(Type,[null].concat([snapChild],params)))());});return values;}});};var on=exports.on=function on(path,event,queryCallback,cancelCallback){_cache2.default.base.child(path).on(eventType(event),queryCallback,cancelCallback);};var off=exports.off=function off(path,event,callback){_cache2.default.base.child(path).off(eventType(event),callback);};var onDisconnect=exports.onDisconnect=function onDisconnect(path){return _cache2.default.base.child(path).onDisconnect();};var ts=exports.ts=function ts(){return Date.now();};

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
    if (own && key in exports) continue;
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
var IE8_DOM_DEFINE = __webpack_require__(64);
var toPrimitive = __webpack_require__(49);
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

var isObject = __webpack_require__(21);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
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
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(65);
var defined = __webpack_require__(40);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var OPENED=exports.OPENED='OPENED';var CLOSED=exports.CLOSED='CLOSED';var CLOSING=exports.CLOSING='CLOSING';var CONNECTED=exports.CONNECTED='CONNECTED';var NOT_CONNECTED=exports.NOT_CONNECTED='NOT_CONNECTED';var WAS_CONNECTED=exports.WAS_CONNECTED='WAS_CONNECTED';var OWNER=exports.OWNER='OWNER';var MODERATOR=exports.MODERATOR='MODERATOR';var PARTICIPANT=exports.PARTICIPANT='PARTICIPANT';var NONE=exports.NONE='NONE';var ONGOING=exports.ONGOING='ONGOING';var ACCEPTED=exports.ACCEPTED='ACCEPTED';var REJECTED=exports.REJECTED='REJECTED';var CANCELED=exports.CANCELED='CANCELED';

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
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
var aFunction = __webpack_require__(32);
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
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(73);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_constants=__webpack_require__(19),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Participant=__webpack_require__(59),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(58),_Message2=_interopRequireDefault(_Message),_Local=__webpack_require__(94),_Local2=_interopRequireDefault(_Local),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _joinRoom=function _joinRoom(room,role){var participant={status:_constants.CONNECTED,_joined:DataSync.ts()};if(role){participant.role=role;}Log.w('Room#join',[participant,'_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid]);return DataSync.update('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid,participant).then(function(){DataSync.onDisconnect('_/rooms/'+room.uid+'/participants/'+_cache2.default.user.uid+'/status').set(_constants.WAS_CONNECTED);return room;});};var Room=function(){function Room(snapData){(0,_classCallCheck3.default)(this,Room);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name()});}this.uid=values.uid;this.name=values.name;this.owner=values.owner;this.status=values.status;this._public=!!values._public;this.extra=values.extra;this._callbacks={};}(0,_createClass3.default)(Room,[{key:'participants',value:function participants(){return DataSync.list('_/rooms/'+this.uid+'/participants',_Participant2.default,this.uid);}},{key:'messages',value:function messages(){return DataSync.list('_/rooms/'+this.uid+'/messages',_Message2.default,this.uid);}},{key:'_streams',value:function _streams(localStreams){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can list a Room\'s streams.'));}return DataSync.get('_/rooms/'+this.uid+'/streams').then(function(snapData){var values=snapData.val();Log.d('Rooms~_streams',values);if(values){return(0,_keys2.default)(values).map(function(key){return(0,_assign2.default)({uid:key,roomId:_this.uid},values[key]);});}return[];}).then(function(streams){return streams.filter(function(stream){return localStreams===(stream.device===_cache2.default.device&&stream.from===_cache2.default.user.uid);});}).then(function(streams){return streams.map(_cache2.default.streams['get'+(localStreams?'Shared':'Remote')].bind(_cache2.default.streams));}).then(function(streams){return streams.filter(function(stream){return stream!==null;});});}},{key:'localStreams',value:function localStreams(){return this._streams(true).catch(Log.r('Room~localStreams'));}},{key:'remoteStreams',value:function remoteStreams(){return this._streams(false).catch(Log.r('Room~remoteStreams'));}},{key:'invite',value:function invite(users){var _this2=this,role=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_constants.NONE,message=arguments[2],_path=function _path(user){return'_/rooms/'+_this2.uid+'/participants/'+user.uid;},_data={status:_constants.NOT_CONNECTED,role:role||_constants.NONE};return _promise2.default.all(users.map(function(user){return DataSync.set(_path(user),_data);})).then(function(){return _promise2.default.all(users.map(function(user){return _Invite2.default.send(user,_this2,message);}));}).then(function(invites){var removeParticipant=function removeParticipant(invite){return DataSync.remove('_/rooms/'+invite.room+'/participants/'+invite.to);};invites.forEach(function(invite){invite.on(_constants.REJECTED,removeParticipant);invite.on(_constants.CANCELED,removeParticipant);});return{room:_this2,invites:invites};}).catch(function(e){Log.e('Room~invite',e);users.forEach(function(user){return DataSync.remove('_/rooms/'+_this2.uid+'/participants/'+user.uid);});return _promise2.default.reject(e);});}},{key:'on',value:function on(event,callback,cancelCallback){var _this3=this,path=Events.room.toPath(event)(this),obj=Events.room.toClass(event);if(path&&obj){var typedCallback=function typedCallback(snapData){if(!/^STREAM_/i.test(event)||!snapData){Log.i('Room~on('+event+')',snapData?new obj(snapData):null);callback(snapData?new obj(snapData):null);}else if(_cache2.default.user){var streamData=(0,_assign2.default)({uid:snapData.name(),roomId:_this3.uid},snapData.val());if(streamData.from!==_cache2.default.user.uid||streamData.device!==_cache2.default.device){var remoteStream=_cache2.default.streams.getRemote(streamData);Log.i('Room~on('+event+')',remoteStream);callback(remoteStream);}}};DataSync.on(path,event,typedCallback,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(typedCallback);}}},{key:'sendMessage',value:function sendMessage(message){return _Message2.default.send(this,message);}},{key:'share',value:function share(type,localStreamContainer,constraints){Log.i('Room~share',{type:type,localStreamContainer:localStreamContainer,constraints:constraints});return _Local2.default.share(this.uid,type,localStreamContainer,constraints);}},{key:'join',value:function join(){Log.i('Room~join',this);if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can join a Room.'));}return _joinRoom(this).catch(Log.r('Room~join'));}},{key:'leave',value:function leave(){var _this4=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can leave a Room.'));}Log.i('Room~leave',this);DataSync.onDisconnect('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status').cancel();(0,_keys2.default)(this._callbacks).forEach(function(event){DataSync.off(Events.room.toPath(event)(_this4),event);});this.localStreams().then(function(localStreams){return localStreams.forEach(function(localStream){return localStream.close();});});this.remoteStreams().then(function(remoteStreams){return remoteStreams.forEach(function(remoteStream){return remoteStream.unSubscribe();});});return DataSync.set('_/rooms/'+this.uid+'/participants/'+_cache2.default.user.uid+'/status',_constants.WAS_CONNECTED).catch(Log.r('Room~leave'));}},{key:'close',value:function close(){var _this5=this;Log.i('Room~close',this);return this.leave().then(function(){return DataSync.update('rooms/'+_this5.uid,{status:_constants.CLOSED,_closed:DataSync.ts()});}).then(function(){return DataSync.remove('_/rooms/'+_this5.uid);}).catch(Log.r('Room~close'));}}],[{key:'create',value:function create(name){var extra=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null,publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can create a Room.'));}var roomMetaData={owner:_cache2.default.user.uid,_public:publicRoom,name:name||_cache2.default.user.name+'-'+Date.now()},roomFullMetaData=(0,_assign2.default)({status:_constants.OPENED,_created:DataSync.ts(),extra:extra},roomMetaData),room=null;return DataSync.push('rooms',roomFullMetaData).then(function(roomRef){room=new Room((0,_assign2.default)({uid:roomRef.name()},roomFullMetaData));return DataSync.update('_/rooms/'+room.uid+'/meta',roomMetaData);}).then(function(){return _joinRoom(room,_constants.OWNER);}).catch(Log.r('Room#create'));}},{key:'get',value:function get(uid){return DataSync.get('rooms/'+uid).then(function(snapData){if(snapData.val()){return new Room(snapData);}});}}]);return Room;}();exports.default=Room;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var presets={UHD:{w:3840,h:2160,min:'HD'},FHD:{w:1920,h:1080,min:'HD',max:'UHD'},HD:{w:1280,h:720,min:'SD',max:'FHD'},SVGA:{w:800,h:600,min:'VGA',max:'HD'},SD:{w:720,h:576,min:'VGA',max:'HD'},VGA:{w:640,h:480,max:'SVGA'}},_assignDevice=function _assignDevice(constraint,deviceId){if(constraint&&deviceId){return(0,_assign2.default)(/^((user)|(environment))$/i.test(deviceId)?{facingMode:deviceId}:{deviceId:deviceId},constraint===true?{}:constraint);}return constraint;};var Media=function(){function Media(){(0,_classCallCheck3.default)(this,Media);}(0,_createClass3.default)(Media,null,[{key:'constraints',value:function constraints(){var videoConstraints=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'HD',audioConstraints=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true,type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'ideal',videoDeviceId=arguments[3],audioDeviceId=arguments[4],video=videoConstraints;if(typeof videoConstraints==='string'){if(presets[videoConstraints.toUpperCase()]){var preset=presets[videoConstraints.toUpperCase()],dimConstraint=function dimConstraint(dim){if(/^(min|max|exact)$/.test(type)){var r={};r[type]=preset[dim];return r;}return{min:preset.min?presets[preset.min][dim]:preset[dim],ideal:preset[dim],max:preset.max?presets[preset.max][dim]:preset[dim]};};video={width:dimConstraint('w'),height:dimConstraint('h')};}else{throw new Error('Unknown Video Resolution preset (UHD, FHD, HD, SVGA, SD, VGA)');}}video=_assignDevice(video,videoDeviceId);var audio=_assignDevice(audioConstraints,audioDeviceId);Log.d('Media#constraints',{video:video,audio:audio});return{video:video,audio:audio};}},{key:'attachStream',value:function attachStream(mediaStream,container,previous){var volume=arguments.length>3&&arguments[3]!==undefined?arguments[3]:.7,tagName='';if(mediaStream.getVideoTracks().length>0){tagName='video';}else if(mediaStream.getAudioTracks().length>0){tagName='audio';}Log.d('Media#attachStream',mediaStream,tagName);if(tagName.length>0){var _node=previous;if(!_node||_node.tagName.toLowerCase()!==tagName){_node=document.createElement(tagName);_node.autoplay=true;_node.setAttribute('playsinline',true);_node.setAttribute('muted',true);}if(container){if(previous&&previous!==_node){container.replaceChild(_node,previous);}else if(!previous){container.appendChild(_node);}}_node.srcObject=mediaStream;_node.volume=volume;return _node;}return previous;}},{key:'devices',value:function devices(){return navigator.mediaDevices.enumerateDevices().then(function(devices){var r={};devices.forEach(function(device){if(!r[device.kind]){r[device.kind]=[];}r[device.kind].push(device);});Log.d('Media#devices',r);return r;}).catch(Log.r('Media#devices'));}},{key:'facingMode',get:function get(){return{USER:'user',ENVIRONMENT:'environment'};}}]);return Media;}();exports.default=Media;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.invite=exports.stream=exports.room=exports.reach=undefined;var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_stringify=__webpack_require__(99),_stringify2=_interopRequireDefault(_stringify),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_Participant=__webpack_require__(59),_Participant2=_interopRequireDefault(_Participant),_Message=__webpack_require__(58),_Message2=_interopRequireDefault(_Message),_Remote=__webpack_require__(60),_Remote2=_interopRequireDefault(_Remote),_constants=__webpack_require__(19);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var paths={USER:function USER(){return'users';},ROOM:function ROOM(){return'rooms';},INVITE:function INVITE(user){if(!user){throw new Error('You must be authenticated to list the invites');}return'_/invites/'+user.uid;},PARTICIPANT:function PARTICIPANT(room){return'_/rooms/'+room.uid+'/participants';},MESSAGE:function MESSAGE(room){return'_/rooms/'+room.uid+'/messages';},STREAM:function STREAM(room){return'_/rooms/'+room.uid+'/streams';}},classes={USER:_User2.default,ROOM:_Room2.default,INVITE:_Invite2.default,PARTICIPANT:_Participant2.default,MESSAGE:_Message2.default,STREAM:_Remote2.default};var _Events=function(){function _Events(keys){var _this=this;(0,_classCallCheck3.default)(this,_Events);keys.forEach(function(key){_this[key]=key;});}(0,_createClass3.default)(_Events,[{key:'supports',value:function supports(event){if(!event||typeof event!=='string'||this[event]!==event.toUpperCase()){throw new Error('Unsupported event. Use one of the following: '+(0,_stringify2.default)((0,_keys2.default)(this)));}return true;}},{key:'toPath',value:function toPath(event){if(this.supports(event)){return paths[event.toUpperCase().replace(/_.*$/,'')]||function(){return null;};}}},{key:'toClass',value:function toClass(event){if(this.supports(event)){return classes[event.toUpperCase().replace(/_.*$/,'')];}}}]);return _Events;}();var reach=exports.reach=new _Events(['USER_ADDED','USER_CHANGED','USER_REMOVED','ROOM_ADDED','ROOM_CHANGED','ROOM_REMOVED','INVITE_ADDED','INVITE_CHANGED']);var room=exports.room=new _Events(['MESSAGE_ADDED','MESSAGE_CHANGED','MESSAGE_REMOVED','PARTICIPANT_ADDED','PARTICIPANT_CHANGED','PARTICIPANT_REMOVED','STREAM_PUBLISHED','STREAM_UNPUBLISHED']);var stream=exports.stream=new _Events(['MUTE','SIZE']);var invite=exports.invite=new _Events([_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED]);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
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
var defined = __webpack_require__(40);
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

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_constants=__webpack_require__(19),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var update=function update(invite,status){var reason=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null,_ended=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null,values={status:status,reason:reason,_ended:_ended};if(invite.status!==_constants.ONGOING){return _promise2.default.reject(new Error('This invitation has already been answered'));}return DataSync.update('_/invites/'+invite.to+'/'+invite.uid,values).then(function(){(0,_keys2.default)(values).forEach(function(prop){invite[prop]=values[prop];});return _Room2.default.get(invite.room);}).then(function(room){return{room:room,invite:invite};}).catch(Log.r('Invite_update'));};var Invite=function(){function Invite(snapData){(0,_classCallCheck3.default)(this,Invite);var values=snapData;if(snapData&&snapData.val&&typeof snapData.val==='function'){values=(0,_assign2.default)({},snapData.val(),{uid:snapData.name(),to:snapData.ref().parent().name()});}this.uid=values.uid;this.from=values.from;this.to=values.to;this.room=values.room;this.status=values.status;this.topic=values.topic;this._created=values._created;this._ended=values._ended;this._callbacks={};}(0,_createClass3.default)(Invite,[{key:'cancel',value:function cancel(reason){return update(this,_constants.CANCELED,reason,DataSync.ts());}},{key:'reject',value:function reject(reason){return update(this,_constants.REJECTED,reason,DataSync.ts());}},{key:'accept',value:function accept(){return update(this,_constants.ACCEPTED);}},{key:'on',value:function on(status,callback){var _this=this;if(Events.invite.supports(status)){if(!this._callbacks[status]){this._callbacks[status]=[];}this._callbacks[status].push(callback);if(!this._listener){this._listener=function(snapData){var updated=snapData.val();if(updated!==null&&updated!==_this.status){_this.status=updated;(_this._callbacks[updated]||[]).forEach(function(cb){cb(_this);});}};DataSync.on('_/invites/'+this.to+'/'+this.uid+'/status','value',this._listener.bind(this));}}}},{key:'onStatusChange',value:function onStatusChange(callback){var _this2=this;[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this2.on(event,callback);});}},{key:'off',value:function off(status,callback){var _this3=this;if(!status){this._callbacks={};}else if(this._callbacks[status]){if(callback){var idx=this._callbacks[status].findIndex(function(cb){return cb===callback;});if(idx>=0){this._callbacks.splice(idx,1);}}else{this._callbacks[status]=[];}}if(![_constants.CANCELED,_constants.ACCEPTED,_constants.REJECTED].some(function(event){return _this3._callbacks[event]&&_this3._callbacks[event].length>0;})){DataSync.off('_/invites/'+this.to+'/'+this.uid+'/status','value');}}},{key:'offStatusChange',value:function offStatusChange(callback){var _this4=this;if(!callback){this.off();}else{[_constants.ACCEPTED,_constants.REJECTED,_constants.CANCELED].forEach(function(event){_this4.off(event,callback);});}}},{key:'isOnGoing',get:function get(){return this.status===_constants.ONGOING;}},{key:'isRejected',get:function get(){return this.status===_constants.REJECTED;}},{key:'isAccepted',get:function get(){return this.status===_constants.ACCEPTED;}},{key:'isCanceled',get:function get(){return this.status===_constants.CANCELED;}}],[{key:'send',value:function send(invitee,room){var message=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can send an invite.'));}var inviteMetaData={from:_cache2.default.user.uid,room:room.uid,status:_constants.ONGOING,_created:DataSync.ts(),topic:message};return DataSync.push('_/invites/'+invitee.uid,inviteMetaData).then(function(inviteRef){var inviteId=inviteRef.name();return new Invite((0,_assign2.default)({uid:inviteId,to:invitee.uid},inviteMetaData));}).catch(Log.r('Invite#send'));}}]);return Invite;}();exports.default=Invite;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(32);

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
/* 44 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(46)('keys');
var uid = __webpack_require__(37);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(47);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(21);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(33);
var wksExt = __webpack_require__(51);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(133)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(68)(String, 'String', function (iterated) {
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
/* 53 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(85)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(160);
var createDesc = __webpack_require__(161);
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
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Device=__webpack_require__(93),_Device2=_interopRequireDefault(_Device),_constants=__webpack_require__(19),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initializing=false;var User=function(){function User(snapData){(0,_classCallCheck3.default)(this,User);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.name=values.name;this.status=values.status;this.lastSeen=values.lastSeen;this.anonymous=/^anonymous/.test(this.uid);}(0,_createClass3.default)(User,[{key:'invite',value:function invite(message){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can invite another User.'));}return _Room2.default.create(_cache2.default.user.uid+'-'+this.uid).then(function(room){return room.invite([_this],null,message);}).then(function(data){return{room:data.room,invite:data.invites[0]};}).catch(Log.r('User~invite'));}},{key:'devices',value:function devices(){return DataSync.list('_/devices/'+this.uid,_Device2.default);}}],[{key:'init',value:function init(uid,name){if(!initializing){initializing=true;var d={status:_constants.CONNECTED,lastSeen:DataSync.ts()};if(name){(0,_assign2.default)(d,{name:name});}var deviceId=_webcom2.default.INTERNAL.PersistentStorage.get(uid);return DataSync.update('users/'+uid,d).then(function(){var deviceMetadata={status:_constants.CONNECTED,sdk:{reach:'2.6.0',webcom:_webcom2.default.SDK_VERSION},userAgent:navigator.userAgent};if(deviceId){return DataSync.update('_/devices/'+uid+'/'+deviceId,deviceMetadata);}return DataSync.push('_/devices/'+uid,deviceMetadata);}).then(function(deviceRef){if(!deviceId){deviceId=deviceRef.name();_webcom2.default.INTERNAL.PersistentStorage.set(uid,deviceId);}_cache2.default.device=deviceId;}).then(function(){DataSync.onDisconnect('_/devices/'+uid+'/'+deviceId+'/status').set(_constants.NOT_CONNECTED);DataSync.onDisconnect('users/'+uid).update({status:_constants.NOT_CONNECTED,lastSeen:DataSync.ts()});}).then(function(){return User.get(uid);}).then(function(user){initializing=false;return user;}).catch(function(e){Log.e(e);initializing=false;return _promise2.default.reject(e);});}return User.get(uid);}},{key:'disconnect',value:function disconnect(user){DataSync.onDisconnect('_/devices/'+user.uid+'/'+_cache2.default.device+'/status').cancel();DataSync.onDisconnect('users/'+user.uid).cancel();if(user.anonymous){return DataSync.remove('_/devices/'+user.uid).then(function(){return DataSync.get('_/invites/'+user.uid);}).then(function(invites){var inviteIds=[];invites.forEach(function(invite){inviteIds.push(invite.name());});return _promise2.default.all(inviteIds.map(function(inviteId){return DataSync.remove('_/invites/'+user.uid+'/'+inviteId);}));}).then(function(){return DataSync.remove('users/'+user.uid);}).then(function(){_webcom2.default.INTERNAL.PersistentStorage.remove(user.uid);}).catch(Log.r('User#anonymous_disconnect'));}return DataSync.set('_/devices/'+user.uid+'/'+_cache2.default.device+'/status',_constants.NOT_CONNECTED).then(function(){return DataSync.get('_/devices/'+user.uid);}).then(function(devices){var hasConnectedDevices=devices.forEach(function(device){return new RegExp('^'+_constants.CONNECTED+'$').test(device.val().status);});if(!hasConnectedDevices){return DataSync.update('users/'+user.uid,{status:_constants.NOT_CONNECTED});}return true;}).catch(Log.r('User#disconnect'));}},{key:'get',value:function get(uid){return DataSync.get('users/'+uid).then(function(snapData){return snapData?new User(snapData):null;}).catch(Log.r('User#get'));}}]);return User;}();exports.default=User;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var AUDIO=exports.AUDIO='audio';var VIDEO=exports.VIDEO='video';var AUDIO_VIDEO=exports.AUDIO_VIDEO='audio-video';var SCREEN_SHARING=exports.SCREEN_SHARING='screen-sharing';exports.default={AUDIO:AUDIO,VIDEO:VIDEO,AUDIO_VIDEO:AUDIO_VIDEO,SCREEN_SHARING:SCREEN_SHARING};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Message=function(){function Message(snapData,roomId){(0,_classCallCheck3.default)(this,Message);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.roomId=roomId;this.text=values.text;this.from=values.from;this._created=values._created;}(0,_createClass3.default)(Message,[{key:'edit',value:function edit(newText){var _this=this;return DataSync.update('/rooms/'+this.roomId+'/messages/'+this.uid,{text:newText}).then(function(){_this.text=newText;return _this;}).catch(Log.r('Message~edit'));}},{key:'remove',value:function remove(){return DataSync.remove('/rooms/'+this.roomId+'/messages/'+this.uid).catch(Log.r('Message~remove'));}}],[{key:'send',value:function send(room,text){if(!_cache2.default.user){return _promise2.default.reject(new Error('Cannot send a message to the Room without a User being logged in.'));}var data={from:_cache2.default.user.uid,_created:DataSync.ts(),text:text};return DataSync.push('_/rooms/'+room.uid+'/messages',data).then(function(pushRef){return DataSync.get('_/rooms/'+room.uid+'/messages/'+pushRef.name());}).then(function(snapData){return new Message(snapData,room.uid);}).catch(Log.r('Message#send'));}}]);return Message;}();exports.default=Message;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Participant=function Participant(snapData){(0,_classCallCheck3.default)(this,Participant);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.role=values.role;this.status=values.status;this._joined=values._joined;};exports.default=Participant;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Remote=function(){function Remote(values){(0,_classCallCheck3.default)(this,Remote);Log.d('Remote~new',values);this.roomId=values.roomId;this.uid=values.uid;this.from=values.from;this.type=values.type;this.device=values.device;this.height=values.height;this.width=values.width;this.container=_cache2.default.config.remoteStreamContainer;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this._callbacks={};this.peerConnection=null;}(0,_createClass3.default)(Remote,[{key:'subscribe',value:function subscribe(remoteStreamContainer){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can subscribe to a Room\'s stream.'));}this.container=remoteStreamContainer||_cache2.default.config.remoteStreamContainer;Log.d('Remote~subscribe',this.container);return _cache2.default.peerConnections.answer(this,this.container).then(function(pc){_this.peerConnection=pc;}).then(function(){return DataSync.update('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device,{to:_cache2.default.user.uid,_created:DataSync.ts()});}).then(function(){DataSync.onDisconnect('_/rooms/'+_this.roomId+'/subscribers/'+_this.uid+'/'+_cache2.default.device).remove();var subscribed=false;DataSync.on('_/rooms/'+_this.roomId+'/streams/'+_this.uid,'value',function(snapData){var values=snapData.val();Log.d('Remote~updated',values);if(values){_this.type=values.type;var height=values.height,width=values.width;if((height||width)&&(height!==_this.height||width!==_this.height)){_this.height=values.height;_this.width=values.width;Log.w(_this._callbacks[Events.stream.SIZE]);(_this._callbacks[Events.stream.SIZE]||[]).forEach(function(cb){return cb(_this.height,_this.width);});}var muted=values.muted;if(muted&&(muted.audio!==_this.muted.audio||muted.video!==_this.muted.video)){_this.muted=muted;Log.w(_this._callbacks[Events.stream.MUTE]);(_this._callbacks[Events.stream.MUTE]||[]).forEach(function(cb){return cb(_this.muted);});}subscribed=true;}else if(subscribed){Log.i('Remote#removed',_this);_this._close(true);}});}).catch(Log.r('Remote~subscribe'));}},{key:'unSubscribe',value:function unSubscribe(){return this._close(false);}},{key:'_close',value:function _close(remote){DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device).cancel();DataSync.off('_/rooms/'+this.roomId+'/streams/'+this.uid,'value');!remote&&DataSync.remove('_/rooms/'+this.roomId+'/subscribers/'+this.uid+'/'+_cache2.default.device);return _promise2.default.resolve(_cache2.default.peerConnections.close(this.uid,this.device));}},{key:'on',value:function on(event,callback){if(Events.stream.supports(event)){if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(callback);}}},{key:'off',value:function off(event,callback){if(!event){this._callbacks={};}else if(Events.stream.supports(event)){if(!callback){this._callbacks[event]=[];}else{this._callbacks[event]=this._callbacks[event].filter(function(cb){return cb!==callback;});}}}},{key:'update',value:function update(values){var _this2=this;(0,_keys2.default)(values).forEach(function(key){_this2[key]=values[key];});}},{key:'node',get:function get(){return this.peerConnection?this.peerConnection.node:null;}}]);return Remote;}();exports.default=Remote;

/***/ }),
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(24);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(77);
var hide = __webpack_require__(16);
var has = __webpack_require__(15);
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(128);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(34);
var createDesc = __webpack_require__(26);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(49);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(64);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(73);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(117)(false);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(1);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(21);
var newPromiseCapability = __webpack_require__(43);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(32);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(23);
var invoke = __webpack_require__(121);
var html = __webpack_require__(63);
var cel = __webpack_require__(41);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(62);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
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
/* 83 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(147);
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
/* 85 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(163)('wks');
var uid = __webpack_require__(86);
var Symbol = __webpack_require__(27).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.browser=undefined;var _toConsumableArray2=__webpack_require__(61),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_console,_webrtcAdapter=__webpack_require__(170),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var browser=exports.browser=(0,_assign2.default)({compatible:!/\s/.test(_webrtcAdapter.browserDetails.browser)&&(!_webrtcAdapter.browserDetails.minVersion||_webrtcAdapter.browserDetails.version>=_webrtcAdapter.browserDetails.minVersion)},_webrtcAdapter.browserDetails);var version='Reach v'+'2.6.0'+' | Schema '+'draft-00'+' | Webcom v'+_webcom2.default.SDK_VERSION,message='';if(browser.version===null){message='Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';}else if(browser.minVersion&&browser.minVersion>browser.version){message='Unsupported browser: browser is outdated, update to latest version ('+browser.minVersion+'+)';}else if(!_webrtcAdapter.browserShim){message='No shim for your browser. There might a problem with your package.';}var args=[version+' '+message];if(/^(chrome|firefox)$/.test(browser.browser)){args=['%c '+version+' %c '+message,'background: '+(browser.compatible?'#f50':'red')+'; color: #fff; font-weight: bold','color: '+(browser.compatible?'inherit':'red')];}(_console=console).log.apply(_console,(0,_toConsumableArray3.default)(args));

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var video=exports.video={VP8:/^vp8/i,VP9:/^vp9/i,VP10:/^vp10/i,H264:/^h264/i,H265:/^h265/i};var audio=exports.audio={OPUS:/^opus/i,G722:/^g722/i,G711:/^g711/i,ISAC:/^isac/i,ISAC_16:/^isac\/16000/i,ISAC_32:/^isac\/32000/i,LSAC:/^lsac/i};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_Browser=__webpack_require__(89),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Codec=__webpack_require__(90),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Reach=function(){function Reach(url){var cfg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;(0,_classCallCheck3.default)(this,Reach);_cache2.default.base=url;_cache2.default.config=cfg;this._callbacks={};}(0,_createClass3.default)(Reach,[{key:'register',value:function register(email,password,name,rememberMe){var _this=this;return _cache2.default.base.createUser(email,password).then(function(auth){if(auth){return _this.login(email,password,name||email,rememberMe);}}).catch(Log.r('Reach~register'));}},{key:'login',value:function login(email,password,name){var rememberMe=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false,p=_promise2.default.resolve();if(this.current&&this.current.email!==email){p=this.logout();}return p.then(function(){return _cache2.default.base.authWithPassword({email:email,password:password,rememberMe:rememberMe});}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~login'));}},{key:'resume',value:function resume(){var _this2=this;return new _promise2.default(function(resolve,reject){if(_webcom2.default.INTERNAL.PersistentStorage.get('session')){_cache2.default.base.resume(function(error,auth){if(auth&&!_this2.current){_User2.default.init(auth.uid).then(function(u){_cache2.default.user=u;resolve(u);},reject);}});}else{reject(new Error('No session to resume'));}});}},{key:'anonymous',value:function anonymous(name){var p=_promise2.default.resolve();if(this.current&&(!this.current.anonymous||this.current.name!==name)){p=this.logout();}return p.then(function(){return _cache2.default.base.authAnonymously();}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~anonymous'));}},{key:'logout',value:function logout(){var _this3=this;return new _promise2.default(function(resolve,reject){var p=_promise2.default.resolve();if(_this3.current!=null){p=_User2.default.disconnect(_this3.current);}p.then(function(){(0,_keys2.default)(_this3._callbacks).forEach(function(event){return DataSync.off(Events.reach.toPath(event)(_cache2.default.user),event);});_cache2.default.base.logout(function(){_cache2.default.user=null;resolve();});}).catch(function(e){Log.e(e);reject(e);});});}},{key:'users',value:function users(include){var _this4=this;return DataSync.list('users',_User2.default).then(function(users){return!include&&users&&_this4.current?users.filter(function(user){return user.uid!==_this4.current.uid;}):users;}).catch(Log.r('Reach~users'));}},{key:'rooms',value:function rooms(){return DataSync.list('rooms',_Room2.default).catch(Log.r('Reach~rooms'));}},{key:'invites',value:function invites(){if(!this.current){return _promise2.default.reject(new Error('Cannot list invites without a User being logged in.'));}return DataSync.list('_/invites/'+this.current.uid,_Invite2.default).catch(Log.r('Reach~invites'));}},{key:'on',value:function on(event,callback,cancelCallback){var path=Events.reach.toPath(event)(_cache2.default.user);if(path){var cls=Events.reach.toClass(event),cb=function cb(snapData){var d=cls?new cls(snapData):null;Log.i('Reach~on('+event+')',d);callback(d);};DataSync.on(path,event,cb,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(cb);}}},{key:'createRoom',value:function createRoom(name,extra){var publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!this.current){return _promise2.default.reject(new Error('Cannot create a Room without a User being logged in.'));}return _Room2.default.create(name,extra,publicRoom);}},{key:'getRoom',value:function getRoom(uid){return _Room2.default.get(uid);}},{key:'getUser',value:function getUser(uid){return _User2.default.get(uid);}},{key:'base',get:function get(){return _cache2.default.base;}},{key:'config',get:function get(){return _cache2.default.config;}},{key:'current',get:function get(){return _cache2.default.user;}},{key:'peerConnections',get:function get(){return _cache2.default.peerConnections.stacks;}}],[{key:'version',get:function get(){return{sdk:'2.6.0',schema:'draft-00'};}},{key:'types',get:function get(){return _StreamTypes2.default;}},{key:'events',get:function get(){return{room:Events.room,reach:Events.reach,stream:Events.stream,invite:Events.invite};}},{key:'browser',get:function get(){return _Browser.browser;}},{key:'media',get:function get(){return _Media2.default;}},{key:'codecs',get:function get(){return{audio:_Codec.audio,video:_Codec.video};}}]);return Reach;}();exports.default=Reach;module.exports=Reach;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_toConsumableArray2=__webpack_require__(61),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _flattenServers=function _flattenServers(servers){var _ref,_expand=servers.map(function(server){var username=server.username,credential=server.credential,urls=server.urls,url=server.url,uris=urls||url;if(typeof uris!=='string'){return uris.map(function(uri){return{username:username,credential:credential,urls:uri};});}return[server];});return(_ref=[]).concat.apply(_ref,(0,_toConsumableArray3.default)(_expand));};var Config=function(){function Config(obj){var _this=this;(0,_classCallCheck3.default)(this,Config);this.constraints=null;this.localStreamContainer=null;this.remoteStreamContainer=null;this.preferredVideoCodec=null;this.preferredAudioCodec=null;this.reset();this.assign(obj);DataSync.get('_/ice').then(function(snapData){if(snapData){_this.iceServers=snapData.val();Log.i('ICEServers',_this.iceServers.length>0?_this.iceServers:'None');}},function(e){return Log.d('ICEServers',e);});}(0,_createClass3.default)(Config,[{key:'assign',value:function assign(obj){var _this2=this;(0,_keys2.default)(obj||{}).forEach(function(key){_this2[key]=obj[key];});}},{key:'reset',value:function reset(){this.assign({constraints:_Media2.default.constraints(),logLevel:'ERROR'});}},{key:'logLevel',set:function set(level){_cache2.default.logLevel=level;},get:function get(){return _cache2.default.logLevel;}},{key:'iceServers',set:function set(servers){Log.d('Config~set~iceServers',servers);if(servers){if(!this._iceServers){this._iceServers=[].concat(servers||[]);}else{var _currentServers=_flattenServers(this._iceServers),_newServers=_flattenServers(servers);_newServers.forEach(function(newServer){if(!_currentServers.some(function(server){return server.urls===newServer.urls&&server.username===newServer.username&&server.credential===newServer.credential;})){_currentServers.push(newServer);}});this._iceServers=_currentServers.reduce(function(previous,current){var username=current.username,credential=current.credential,urls=current.urls,idx=previous.findIndex(function(s){return s.username===username&&s.credential===credential;});if(idx>=0){previous[idx].urls.push(urls);}else{previous.push({username:username,credential:credential,urls:[urls]});}return previous;},[]);}}},get:function get(){return this._iceServers||[{username:'admin',credential:'webcom1234',urls:['turns:turn1.webcom.orange.com:443','turn:turn1.webcom.orange.com:443?transport=tcp','turn:turn1.webcom.orange.com:3478?transport=tcp']}];}}]);return Config;}();exports.default=Config;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Device=function Device(snapData){(0,_classCallCheck3.default)(this,Device);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.os=values.os;this.userAgent=values.userAgent;this.status=values.status;this.sdk=values.sdk;};exports.default=Device;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_constants=__webpack_require__(19);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _facingModes=[_Media2.default.facingMode.USER,_Media2.default.facingMode.ENVIRONMENT],_getConstraintValue=function _getConstraintValue(constraints,prop){return constraints[prop].exact||constraints[prop].ideal||constraints[prop];},_setConstrainValue=function _setConstrainValue(constraints,prop,other,value){constraints[prop]={exact:value};delete constraints[other];};var Local=function(){function Local(values){(0,_classCallCheck3.default)(this,Local);this.roomId=values.roomId;this.uid=values.uid;this.type=values.type;this.muted=(0,_assign2.default)({audio:false,video:false},values.muted);this.container=values.container||_cache2.default.config.localStreamContainer;this.node=null;this.peerConnections=[];this.status=_constants.NONE;this.isVideoLoaded=false;this._inputs={};this.constraints=values.constraints;}(0,_createClass3.default)(Local,[{key:'updateConstraints',value:function updateConstraints(constraints){var _this=this;Log.d('Local~updateConstraints',constraints);this.constraints=constraints;return navigator.mediaDevices.getUserMedia(this.constraints).then(function(media){['audio','video'].forEach(function(kind){var constraintsValue=_this.constraints[kind];if(constraintsValue){if(constraintsValue.deviceId||constraintsValue.facingMode){_this._inputs[kind]=_getConstraintValue(constraintsValue,constraintsValue.facingMode?'facingMode':'deviceId');}}});_this.media=media;});}},{key:'mute',value:function mute(){var track=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_StreamTypes2.default.AUDIO,state=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;Log.d('mute',track,state);var audio=this.muted.audio,video=this.muted.video,tracks=void 0;switch(track){case _StreamTypes2.default.AUDIO:audio=state;tracks=this.media.getAudioTracks();break;case _StreamTypes2.default.VIDEO:case _StreamTypes2.default.SCREEN_SHARING:video=state;tracks=this.media.getVideoTracks();break;case _StreamTypes2.default.AUDIO_VIDEO:audio=state;video=state;tracks=this.media.getTracks();break;}tracks.forEach(function(track){track.enabled=!state;});this.muted={audio:audio,video:video};DataSync.set('_/rooms/'+this.roomId+'/streams/'+this.uid+'/muted',this.muted);}},{key:'unMute',value:function unMute(track){this.mute(track,false);}},{key:'close',value:function close(){if(!~[_constants.CLOSED,_constants.CLOSING].indexOf(this.status)){this.status=_constants.CLOSING;var path='_/rooms/'+this.roomId+'/subscribers/'+this.uid;DataSync.off(path,'child_added');DataSync.off(path,'child_removed');DataSync.onDisconnect('_/rooms/'+this.roomId+'/streams/'+this.uid).cancel();DataSync.onDisconnect('_/rooms/'+this.roomId+'/subscribers/'+this.uid).cancel();DataSync.remove(path);DataSync.remove('_/rooms/'+this.roomId+'/streams/'+this.uid);this.media=null;this.status=_constants.CLOSED;}return _promise2.default.resolve(this.status);}},{key:'switchCamera',value:function switchCamera(deviceId){return this._switchDevice(_StreamTypes2.default.VIDEO,deviceId);}},{key:'switchMicrophone',value:function switchMicrophone(deviceId){return this._switchDevice(_StreamTypes2.default.AUDIO,deviceId);}},{key:'_switchDevice',value:function _switchDevice(kind,deviceId){var _this2=this;Log.d('Local~_switchDevice',kind,deviceId);if(this.media.getTracks().some(function(track){return track.kind===kind;})){var next=_promise2.default.resolve(deviceId),currentModeIdx=_facingModes.indexOf(this._inputs[kind]);if(!deviceId&&!!~currentModeIdx){next=_promise2.default.resolve(_facingModes[(currentModeIdx+1)%_facingModes.length]);}else if(!~_facingModes.indexOf(deviceId)){next=_Media2.default.devices().then(function(d){var devices=d[kind+'input'].map(function(mediaDevice){return mediaDevice.deviceId;});devices.sort();var nextDevice=deviceId;if(deviceId&&!devices.some(function(device){return device===deviceId;})){return _promise2.default.reject(new Error('Unknown '+kind+' device'));}if(!deviceId&&devices.length>1){var idx=_this2._inputs[kind]?devices.findIndex(function(v){return v===_this2._inputs[kind];},_this2):0;nextDevice=devices[++idx%devices.length];}return nextDevice;});}else{next=_promise2.default.resolve(deviceId);}return next.then(function(device){if(_this2._inputs[kind]!==device){_this2._inputs[kind]=device;_this2.media.getTracks().forEach(function(track){return track.stop();});var constraints=(0,_assign2.default)({},_this2.constraints),props=['facingMode','deviceId'];if(!~_facingModes.indexOf(device)){props=props.reverse();}_setConstrainValue(constraints[kind],props[0],props[1],device);Log.d('Local~_switchDevice',kind,constraints);return _this2.updateConstraints(constraints);}}).then(function(){return _this2;});}return _promise2.default.reject(new Error('Current stream does not contain a '+kind+' track'));}},{key:'constraints',set:function set(constraints){var _this3=this,values=constraints||_cache2.default.config.constraints,defaultConstraints=_Media2.default.constraints();['audio','video'].forEach(function(type){if(!~_this3.type.indexOf(type)){values[type]=false;}else if(!values[type]){values[type]=defaultConstraints[type];}if(values[type].deviceId||values[type].facingMode){_this3._inputs[type]=_getConstraintValue(values[type],values[type].facingMode?'facingMode':'deviceId');}});Log.d('Local~set#contraints',values);this._constraints=values;},get:function get(){return this._constraints;}},{key:'media',set:function set(mediaStream){var _this4=this;if(mediaStream){if(!(mediaStream instanceof MediaStream)){throw new Error('The media MUST be a MediaStream');}var checkDevices={};mediaStream.getTracks().forEach(function(track){track.enabled=!_this4.muted[track.kind];if(!_this4._inputs[track.kind]){checkDevices[track.kind]=track.label;}});if((0,_keys2.default)(checkDevices).length){_Media2.default.devices().then(function(devices){(0,_keys2.default)(checkDevices).forEach(function(kind){if(devices[kind+'input']){var deviceIds=devices[kind+'input'].filter(function(device){return device.label.length&&device.label===checkDevices[kind];});if(deviceIds.length===1&&!_this4._inputs[kind]){_this4._inputs[kind]=deviceIds[0].deviceId;}}});});}this.node=_Media2.default.attachStream(mediaStream,this.container,this.node,0);this.node.onloadeddata=function(){_this4.isVideoLoaded=true;};this.status=_constants.CONNECTED;Log.d('Local~set media',{mediaStream:mediaStream},this.node);this.peerConnections.forEach(function(peerConnection){return peerConnection.renegotiate(_this4._media,mediaStream);});}else if(this.media&&!mediaStream){this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;this.media.getTracks().forEach(function(track){return track.stop();});this.peerConnections.forEach(function(peerConnection){return peerConnection.close();});}this._media=mediaStream;},get:function get(){return this._media;}}],[{key:'share',value:function share(roomId,type,container,constraints){if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can share a stream.'));}var streamMetaData={from:_cache2.default.user.uid,device:_cache2.default.device,type:type},sharedStream=new Local((0,_assign2.default)({roomId:roomId,constraints:constraints,container:container},streamMetaData));Log.d('Local~share',{sharedStream:sharedStream});return navigator.mediaDevices.getUserMedia(sharedStream.constraints).then(function(media){sharedStream.media=media;}).then(function(){return DataSync.push('_/rooms/'+roomId+'/streams',streamMetaData);}).then(function(streamRef){sharedStream.uid=streamRef.name();if(sharedStream.isVideoLoaded){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);}else{sharedStream.node.onloadeddata=function(){var streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(streamSize);};}window.addEventListener('resize',function(){if(sharedStream.node!=null){var _streamSize={height:sharedStream.node.videoHeight,width:sharedStream.node.videoWidth};streamRef.update(_streamSize);}});_cache2.default.streams.shared[sharedStream.uid]=sharedStream;DataSync.onDisconnect('_/rooms/'+roomId+'/streams/'+sharedStream.uid).remove();DataSync.onDisconnect('_/rooms/'+roomId+'/subscribers/'+sharedStream.uid).remove();var path='_/rooms/'+sharedStream.roomId+'/subscribers/'+sharedStream.uid,value=function value(snapData){return(0,_assign2.default)({device:snapData.name()},snapData.val()||{});};DataSync.on(path,'child_added',function(snapData){var subscriber=value(snapData);Log.d('Local~subscribed',subscriber);_cache2.default.peerConnections.offer(sharedStream,subscriber).then(function(pc){return sharedStream.peerConnections.push(pc);});},Log.e.bind(Log));DataSync.on(path,'child_removed',function(snapData){var subscriber=value(snapData);Log.d('Local~un-subscribed',subscriber);var closedPC=_cache2.default.peerConnections.close(sharedStream.uid,subscriber.device);sharedStream.peerConnections=sharedStream.peerConnections.filter(function(pc){return pc!==closedPC;});},Log.e.bind(Log));Log.d('Local~shared',{sharedStream:sharedStream});return sharedStream;});}}]);return Local;}();exports.default=Local;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_Remote=__webpack_require__(60),_Remote2=_interopRequireDefault(_Remote);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var StreamManager=function(){function StreamManager(){(0,_classCallCheck3.default)(this,StreamManager);this.shared={};this.remote={};}(0,_createClass3.default)(StreamManager,[{key:'getRemote',value:function getRemote(streamData){var remoteStream=this.remote[streamData.uid];if(remoteStream){remoteStream.update(streamData);}else{this.remote[streamData.uid]=remoteStream=new _Remote2.default(streamData);}return remoteStream;}},{key:'getShared',value:function getShared(streamData){return this.shared[streamData.uid];}}]);return StreamManager;}();exports.default=StreamManager;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_getOwnPropertyDescriptor=__webpack_require__(101),_getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_constants=__webpack_require__(19);__webpack_require__(105);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DtlsSrtpKeyAgreement={DtlsSrtpKeyAgreement:true},sdpConstraints=function sdpConstraints(receive){return{OfferToReceiveAudio:receive,OfferToReceiveVideo:receive};},ICE_CONNECTION_STATE_DISCONNECTED='disconnected',ICE_CONNECTION_STATE_CONNECTED='connected',ICE_CONNECTION_STATE_COMPLETED='completed',ICE_CONNECTION_STATE_CHECKING='checking',ICE_CONNECTION_STATE_CLOSED='closed',ICE_CONNECTION_STATE_FAILED='failed',ICE_CONNECTION_STATE_OTHER='other',_toJSON=function _toJSON(o){return o.toJSON&&typeof o.toJSON==='function'?o.toJSON():o;};var PeerConnection=function(){function PeerConnection(stackId,streamId,remoteDevice,publish){var _this=this;(0,_classCallCheck3.default)(this,PeerConnection);this.stackId=stackId;this.streamId=streamId;this.remoteDevice=remoteDevice;this._localPath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+_cache2.default.device;this._remotePath='_/webrtc/'+this.stackId+'/'+this.streamId+'/'+this.remoteDevice;this.negotiated=false;this.node=null;this.container=null;this.pc=new RTCPeerConnection({iceServers:_cache2.default.config.iceServers},{optional:[DtlsSrtpKeyAgreement],mandatory:sdpConstraints(!publish)});this.pc.onicecandidate=function(e){if(!_this.negotiated&&e.candidate){Log.d('PeerConnection~onicecandidate',e.candidate);DataSync.push(_this._localPath+'/ice',_toJSON(e.candidate));}};this.pc.oniceconnectionstatechange=function(){Log.d('PeerConnection~oniceconnectionstatechange',_this.pc);var iceConnectionState=_this.pc.iceConnectionState;switch(iceConnectionState){case ICE_CONNECTION_STATE_CHECKING:break;case ICE_CONNECTION_STATE_CONNECTED:_this._attachStream();_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_COMPLETED:_this._remoteICECandidates(false);break;case ICE_CONNECTION_STATE_DISCONNECTED:case ICE_CONNECTION_STATE_FAILED:Log.e('PeerConnection~stateDisconnected','Disconnect PeerConnection');break;case ICE_CONNECTION_STATE_CLOSED:Log.d('PeerConnection~stateclosed','Close PeerConnection');_this.close();break;}_this.negotiated=_this.negotiated||_this.isConnected;};this.pc.onicegatheringstatechange=function(){Log.d('PeerConnection~onicegatheringstatechange',_this.pc.iceGatheringState);};this._status=_constants.OPENED;}(0,_createClass3.default)(PeerConnection,[{key:'_remoteICECandidates',value:function _remoteICECandidates(listen){var _this2=this,path=this._remotePath+'/ice',event='child_added';if(listen){DataSync.on(path,event,function(snap){var candidate=snap.val();Log.d('PeerConnection~addIceCandidate',candidate);_this2.pc.addIceCandidate(new RTCIceCandidate(candidate));});}else{DataSync.off(path,event);}}},{key:'_attachStream',value:function _attachStream(){if(this.remoteStream&&this.isConnected){this.node=_Media2.default.attachStream(this.remoteStream,this.container,this.node);this.node.muted=false;}}},{key:'answer',value:function answer(htmlElement){var _this3=this;Log.i('PeerConnection~answer',{htmlElement:htmlElement,peerConnection:this});this.container=htmlElement;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'ontrack')){this.pc.ontrack=function(e){Log.d('PeerConnection~ontrack',e.streams[0]);_this3.remoteStream=e.streams[0];};}else{this.pc.onaddstream=function(e){Log.d('PeerConnection~onaddstream',e.stream);_this3.remoteStream=e.stream;};}DataSync.on(this._remotePath+'/sdp','value',function(snap){var sdpOffer=snap.val();Log.d('Offer',sdpOffer);if(sdpOffer!=null){Log.d('PeerConnection~offered',sdpOffer);_this3.pc.setRemoteDescription(sdpOffer).then(function(){return Log.d('PeerConnection~remoteDescription',_this3.pc.remoteDescription);}).then(function(){if(/^offer$/.test(_this3.pc.remoteDescription.type)){return _this3.pc.createAnswer();}return _promise2.default.reject(new Error('SDP is not an offer'));}).then(function(description){return _this3._setPreferredCodecs(description);}).then(function(description){return _this3.pc.setLocalDescription(description);}).then(function(){Log.d('PeerConnection~localDescription',_this3.pc.localDescription);_this3._remoteICECandidates(true);}).then(function(){return DataSync.update(_this3._localPath+'/sdp',_toJSON(_this3.pc.localDescription));}).catch(Log.r('PeerConnection~localDescription'));}});return _promise2.default.resolve(this);}},{key:'offer',value:function offer(stream){var _this4=this;Log.i('PeerConnection~offer',{stream:stream,peerConnection:this});var sendTimeout=void 0;return new _promise2.default(function(resolve,reject){_this4.pc.onnegotiationneeded=function(){Log.d('PeerConnection~onnegotiationneeded');if(sendTimeout){clearTimeout(sendTimeout);sendTimeout=null;}sendTimeout=setTimeout(function(){sendTimeout=null;_this4._sendOffer().then(function(){resolve(_this4);}).catch(function(e){Log.d('PeerConnection~offer',e);reject(e);});},20);};DataSync.on(_this4._remotePath+'/sdp','value',function(snap){var sdpAnswer=snap.val();if(sdpAnswer!=null){Log.d('PeerConnection~offer#answered',sdpAnswer);_this4.pc.setRemoteDescription(sdpAnswer).then(function(){Log.d('PeerConnection~offer#remoteDescription',_this4.pc.remoteDescription);_this4._remoteICECandidates(true);}).catch(Log.e.bind(Log,'PeerConnection~remoteDescription'));}});_this4._alterStream(stream,'add');});}},{key:'_sendOffer',value:function _sendOffer(){var _this5=this;Log.d('PeerConnection~_sendOffer');return this.pc.createOffer().then(function(description){return _this5._setPreferredCodecs(description);}).then(function(description){return _this5.pc.setLocalDescription(description);}).then(function(){return Log.d('PeerConnection~renegotiate#localDescription',_this5.pc.localDescription);}).then(function(){return DataSync.update(_this5._localPath+'/sdp',_toJSON(_this5.pc.localDescription));});}},{key:'_alterStream',value:function _alterStream(stream,method){var _this6=this;if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,method+'Track')){stream.getTracks().forEach(function(track){return _this6.pc[method+'Track'](track,stream);},this);}else{this.pc[method+'Stream'](stream);}}},{key:'renegotiate',value:function renegotiate(oldStream,newStream){Log.d('PeerConnection~renegotiate');if((0,_getOwnPropertyDescriptor2.default)(RTCPeerConnection.prototype,'getSenders')&&'RTCRtpSender'in window&&(0,_getOwnPropertyDescriptor2.default)(RTCRtpSender.prototype,'replaceTrack')){this.pc.getSenders().forEach(function(sender){var newTracks=void 0;switch(sender.track.kind){case'audio':newTracks=newStream.getAudioTracks();break;case'video':newTracks=newStream.getVideoTracks();break;default:newTracks=[];}if(newTracks.length){sender.replaceTrack(newTracks[0]);}});this._sendOffer().catch(function(e){Log.d('PeerConnection~renegotiate',e);});}else{this._alterStream(oldStream,'remove');this._alterStream(newStream,'add');}}},{key:'close',value:function close(){var _this7=this;if(this._status===_constants.OPENED){this._status=_constants.CLOSING;if(this.node){this.node.stop&&this.node.stop();this.node.srcObject=null;this.container.removeChild(this.node);this.node=null;}this._remoteICECandidates(false);DataSync.off(this._remotePath+'/sdp','value');DataSync.remove(this._localPath);if(this.pc&&this.pc.signalingState!=='closed'){this.pc.onsignalingstatechange=function(){if(_this7.pc.signalingState!=='closed'){_this7._status=_constants.CLOSED;}};this.pc.close();}else{this._status=_constants.CLOSED;}}}},{key:'_setPreferredCodecs',value:function _setPreferredCodecs(description){if(_cache2.default.config.preferredVideoCodec||_cache2.default.config.preferredAudioCodec){Log.d('PeerConnection~_setPreferredCodecs',{description:description,config:_cache2.default.config});var sdpLines=description.sdp.split(/\r?\n/),medias={audio:[],video:[]},current=null;sdpLines.forEach(function(sdpLine,i){if(/^m=/.test(sdpLine)){var d=/^m=(\w+)\s[0-9\/]+\s[A-Za-z0-9\/]+\s([0-9\s]+)/.exec(sdpLine);current={fmt:d[2].split(/\s/),index:i,codecs:[]};medias[d[1]].push(current);}else if(current&&/^a=rtpmap:/.test(sdpLine)){var c=/^a=rtpmap:(\d+)\s([a-zA-Z0-9\-\/]+)/.exec(sdpLine);if(c){current.codecs.push({id:c[1],name:c[2],index:i});}}});Log.d('PeerConnection~_setPreferredCodecs',medias);var update=false,prefer=function prefer(mediaList,preferedCodec){mediaList.forEach(function(media){var selected=media.codecs.find(function(codec){return preferedCodec.test(codec.name);});if(selected){var fmt=[selected.id].concat(media.fmt.filter(function(ids){return ids!==selected.id;}));sdpLines[media.index]=sdpLines[media.index].replace(media.fmt.join(' '),fmt.join(' '));update=true;}});};if(_cache2.default.config.preferredVideoCodec){prefer(medias.video,_cache2.default.config.preferredVideoCodec);}if(_cache2.default.config.preferredAudioCodec){prefer(medias.audio,_cache2.default.config.preferredAudioCodec);}if(update){Log.d('PeerConnection~_setPreferredCodecs',sdpLines.join('\r\n'));return{sdp:sdpLines.join('\r\n'),type:description.type};}}return description;}},{key:'remoteStream',set:function set(stream){this._remoteStream=stream;this._attachStream();},get:function get(){return this._remoteStream;}},{key:'isConnected',get:function get(){return this.pc&&!!~[ICE_CONNECTION_STATE_CONNECTED,ICE_CONNECTION_STATE_COMPLETED,ICE_CONNECTION_STATE_OTHER].indexOf(this.pc.iceConnectionState);}}]);return PeerConnection;}();exports.default=PeerConnection;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_PeerConnection=__webpack_require__(96),_PeerConnection2=_interopRequireDefault(_PeerConnection),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var getStackId=function getStackId(id1,id2){return id1.localeCompare(id2,'en-us')>0?id1+'-'+id2:id2+'-'+id1;};var PeerConnectionManager=function(){function PeerConnectionManager(){(0,_classCallCheck3.default)(this,PeerConnectionManager);this.stacks={};}(0,_createClass3.default)(PeerConnectionManager,[{key:'getPeerConnection',value:function getPeerConnection(stream,remote,publish){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can get a PeerConnection\'s object.'));}var stackId=getStackId(remote.device,_cache2.default.device);if(this.stacks[stackId]&&this.stacks[stackId][stream.uid]){return _promise2.default.resolve(this.stacks[stackId][stream.uid]);}if(!this.stacks[stackId]){this.stacks[stackId]={};}var users={};users[_cache2.default.user.uid]=true;users[remote.from||remote.to]=true;return DataSync.update('_/webrtc/'+stackId,users).then(function(){return new _PeerConnection2.default(stackId,stream.uid,remote.device,publish);}).then(function(pc){Log.d('PeerConnectionManager~getPeerConnection',{stackId:stackId,streamId:stream.uid,pc:pc});_this.stacks[stackId][stream.uid]=pc;return pc;}).catch(Log.r('PeerConnectionManager~getPeerConnection'));}},{key:'offer',value:function offer(localStream,subscriber){Log.d('PeerConnectionManager~offer',{localStream:localStream,subscriber:subscriber});return this.getPeerConnection(localStream,subscriber,true).then(function(pc){return pc.offer(localStream.media);});}},{key:'answer',value:function answer(remoteStream,htmlElement){Log.d('PeerConnectionManager~answer',{remoteStream:remoteStream,htmlElement:htmlElement});return this.getPeerConnection(remoteStream,remoteStream,false).then(function(pc){return pc.answer(htmlElement);});}},{key:'close',value:function close(streamId,remoteDevice){var stackId=getStackId(remoteDevice,_cache2.default.device),pc=this.stacks[stackId]?this.stacks[stackId][streamId]:null;if(pc){pc.close();this.stacks[stackId][streamId]=null;delete this.stacks[stackId][streamId];return pc;}return false;}}]);return PeerConnectionManager;}();exports.default=PeerConnectionManager;

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

__webpack_require__(168);
module.exports = __webpack_require__(53).Array.find;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(135);
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

__webpack_require__(137);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
var $Object = __webpack_require__(1).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
__webpack_require__(52);
__webpack_require__(82);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(144);
module.exports = __webpack_require__(1).Promise;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
__webpack_require__(81);
__webpack_require__(145);
__webpack_require__(146);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
__webpack_require__(82);
module.exports = __webpack_require__(51).f('iterator');


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
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(48);
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
var createDesc = __webpack_require__(26);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(44);
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
var call = __webpack_require__(67);
var isArrayIter = __webpack_require__(66);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(48);
var getIterFn = __webpack_require__(80);
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

var create = __webpack_require__(70);
var descriptor = __webpack_require__(26);
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
var isObject = __webpack_require__(21);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
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
var macrotask = __webpack_require__(79).set;
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
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
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
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(34);
var toObject = __webpack_require__(36);
var IObject = __webpack_require__(65);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
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
var getKeys = __webpack_require__(25);

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
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(72).f;
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
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
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

var toInteger = __webpack_require__(47);
var defined = __webpack_require__(40);
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

var toInteger = __webpack_require__(47);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(23);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(36);
var call = __webpack_require__(67);
var isArrayIter = __webpack_require__(66);
var toLength = __webpack_require__(48);
var createProperty = __webpack_require__(118);
var getIterFn = __webpack_require__(80);

$export($export.S + $export.F * !__webpack_require__(69)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(115);
var step = __webpack_require__(124);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(68)(Array, 'Array', function (iterated, kind) {
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(127) });


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(17);
var $getOwnPropertyDescriptor = __webpack_require__(71).f;

__webpack_require__(74)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(36);
var $keys = __webpack_require__(25);

__webpack_require__(74)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var global = __webpack_require__(3);
var ctx = __webpack_require__(23);
var classof = __webpack_require__(62);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(21);
var aFunction = __webpack_require__(32);
var anInstance = __webpack_require__(116);
var forOf = __webpack_require__(120);
var speciesConstructor = __webpack_require__(78);
var task = __webpack_require__(79).set;
var microtask = __webpack_require__(126)();
var newPromiseCapabilityModule = __webpack_require__(43);
var perform = __webpack_require__(75);
var promiseResolve = __webpack_require__(76);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
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
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
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
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
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
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function (iter) {
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(77);
var META = __webpack_require__(125).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(46);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(37);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(51);
var wksDefine = __webpack_require__(50);
var enumKeys = __webpack_require__(119);
var isArray = __webpack_require__(122);
var anObject = __webpack_require__(12);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(49);
var createDesc = __webpack_require__(26);
var _create = __webpack_require__(70);
var gOPNExt = __webpack_require__(129);
var $GOPD = __webpack_require__(71);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(25);
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
  __webpack_require__(72).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f = $propertyIsEnumerable;
  __webpack_require__(44).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(33)) {
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
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(1);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(78);
var promiseResolve = __webpack_require__(76);

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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(43);
var perform = __webpack_require__(75);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50)('asyncIterator');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50)('observable');


/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(87)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(55)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(84);
var IObject = __webpack_require__(158);
var toObject = __webpack_require__(166);
var toLength = __webpack_require__(165);
var asc = __webpack_require__(152);
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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38);
var isArray = __webpack_require__(159);
var SPECIES = __webpack_require__(87)('species');

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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(151);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 153 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(38);
var document = __webpack_require__(27).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var core = __webpack_require__(53);
var hide = __webpack_require__(55);
var redefine = __webpack_require__(162);
var ctx = __webpack_require__(84);
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
/* 156 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(54) && !__webpack_require__(85)(function () {
  return Object.defineProperty(__webpack_require__(154)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(83);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(83);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(149);
var IE8_DOM_DEFINE = __webpack_require__(157);
var toPrimitive = __webpack_require__(167);
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
/* 161 */
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var hide = __webpack_require__(55);
var has = __webpack_require__(156);
var SRC = __webpack_require__(86)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(53).inspectSource = function (it) {
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 164 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(164);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(153);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(38);
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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(155);
var $find = __webpack_require__(150)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(148)(KEY);


/***/ }),
/* 169 */
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
    sdp.push(candidate.relatedAddress); // was: relAddr
    sdp.push('rport');
    sdp.push(candidate.relatedPort); // was: relPort
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.ufrag);
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
      'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' +
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
  var mline = lines[0].split(' ');
  return {
    kind: mline[0].substr(2),
    port: parseInt(mline[1], 10),
    protocol: mline[2],
    fmt: mline.slice(3).join(' ')
  };
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ }),
/* 170 */
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



var adapterFactory = __webpack_require__(171);
module.exports = adapterFactory({window: global.window});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

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
  var utils = __webpack_require__(18);
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
  var chromeShim = __webpack_require__(172) || null;
  var edgeShim = __webpack_require__(174) || null;
  var firefoxShim = __webpack_require__(177) || null;
  var safariShim = __webpack_require__(179) || null;

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
 /* eslint-env node */

var utils = __webpack_require__(18);
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
  shimGetUserMedia: __webpack_require__(173)
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

var utils = __webpack_require__(18);
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


var utils = __webpack_require__(18);
var shimRTCPeerConnection = __webpack_require__(176);

module.exports = {
  shimGetUserMedia: __webpack_require__(175),
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
/* 176 */
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


var SDPUtils = __webpack_require__(169);

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


var utils = __webpack_require__(18);

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
  shimGetUserMedia: __webpack_require__(178)
};


/***/ }),
/* 178 */
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


var utils = __webpack_require__(18);
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

var utils = __webpack_require__(18);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMzZkYTgwMTcxYTliNmY2NmEyMyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbC9jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvRGF0YVN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvUm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9JbnZpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNpcGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHJlYW0vUmVtb3RlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluaXRpb25zL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluaXRpb25zL0NvZGVjLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9Mb2NhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHJlYW0vU3RyZWFtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vYXJyYXkvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vc2RwL3NkcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9hZGFwdGVyX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZWRnZV9zaGltLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvcnRjcGVlcmNvbm5lY3Rpb25fc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2ZpcmVmb3hfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanMiXSwibmFtZXMiOlsiX2NhY2hlIiwiQ2FjaGVNYW5hZ2VyIiwidXJsIiwiX2Jhc2UiLCJjb25maWciLCJfY29uZmlnIiwiYXNzaWduIiwidXNlciIsIl91c2VyIiwiZGV2aWNlIiwiX2RldmljZSIsImxldmVsIiwidGVzdCIsIl9sb2dMZXZlbCIsIkVycm9yIiwiX3N0cmVhbXMiLCJfcGVlckNvbm5lY3Rpb25zIiwiY2FjaGUiLCJsZXZlbHMiLCJpc0VuYWJsZWQiLCJpbmRleE9mIiwidG9VcHBlckNhc2UiLCJsb2dMZXZlbCIsImdDb25zb2xlIiwiZ2xvYmFsIiwibG9nZ2VyIiwibWV0aG9kIiwibWVzc2FnZXMiLCJ0b0xvd2VyQ2FzZSIsImJpbmQiLCJncm91cCIsIm1lc3NhZ2UiLCJpdGVtcyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZhbHVlcyIsImNvbmNhdCIsIkFycmF5IiwiZm9yRWFjaCIsIml0ZW0iLCJncm91cEVuZCIsImQiLCJpIiwidyIsImUiLCJlcnJvciIsInIiLCJyZWFzb24iLCJyZWplY3QiLCJldmVudFR5cGUiLCJldmVudCIsImV2dCIsIl93cml0ZSIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsImJhc2UiLCJjaGlsZCIsInNldCIsInB1c2giLCJwdXNoUmVmIiwidXBkYXRlIiwicmVtb3ZlIiwib25jZSIsImdldCIsImxpc3QiLCJUeXBlIiwicGFyYW1zIiwidGhlbiIsInNuYXBEYXRhIiwic25hcENoaWxkIiwib24iLCJxdWVyeUNhbGxiYWNrIiwiY2FuY2VsQ2FsbGJhY2siLCJvZmYiLCJjYWxsYmFjayIsIm9uRGlzY29ubmVjdCIsInRzIiwiRGF0ZSIsIm5vdyIsIk9QRU5FRCIsIkNMT1NFRCIsIkNMT1NJTkciLCJDT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwiV0FTX0NPTk5FQ1RFRCIsIk9XTkVSIiwiTU9ERVJBVE9SIiwiUEFSVElDSVBBTlQiLCJOT05FIiwiT05HT0lORyIsIkFDQ0VQVEVEIiwiUkVKRUNURUQiLCJDQU5DRUxFRCIsIkRhdGFTeW5jIiwiRXZlbnRzIiwiTG9nIiwiX2pvaW5Sb29tIiwicm9vbSIsInJvbGUiLCJwYXJ0aWNpcGFudCIsInN0YXR1cyIsIl9qb2luZWQiLCJ1aWQiLCJSb29tIiwidmFsIiwibmFtZSIsIm93bmVyIiwiX3B1YmxpYyIsImV4dHJhIiwiX2NhbGxiYWNrcyIsImxvY2FsU3RyZWFtcyIsIm1hcCIsImtleSIsInJvb21JZCIsInN0cmVhbXMiLCJmaWx0ZXIiLCJzdHJlYW0iLCJmcm9tIiwiY2F0Y2giLCJ1c2VycyIsIl9wYXRoIiwiX2RhdGEiLCJhbGwiLCJzZW5kIiwicmVtb3ZlUGFydGljaXBhbnQiLCJpbnZpdGUiLCJ0byIsImludml0ZXMiLCJ0b1BhdGgiLCJvYmoiLCJ0b0NsYXNzIiwidHlwZWRDYWxsYmFjayIsInN0cmVhbURhdGEiLCJyZW1vdGVTdHJlYW0iLCJnZXRSZW1vdGUiLCJ0eXBlIiwibG9jYWxTdHJlYW1Db250YWluZXIiLCJjb25zdHJhaW50cyIsInNoYXJlIiwiY2FuY2VsIiwibG9jYWxTdHJlYW0iLCJjbG9zZSIsInJlbW90ZVN0cmVhbXMiLCJ1blN1YnNjcmliZSIsImxlYXZlIiwiX2Nsb3NlZCIsInB1YmxpY1Jvb20iLCJyb29tTWV0YURhdGEiLCJyb29tRnVsbE1ldGFEYXRhIiwiX2NyZWF0ZWQiLCJyb29tUmVmIiwicHJlc2V0cyIsIlVIRCIsImgiLCJtaW4iLCJGSEQiLCJtYXgiLCJIRCIsIlNWR0EiLCJTRCIsIlZHQSIsIl9hc3NpZ25EZXZpY2UiLCJjb25zdHJhaW50IiwiZGV2aWNlSWQiLCJmYWNpbmdNb2RlIiwiTWVkaWEiLCJ2aWRlb0NvbnN0cmFpbnRzIiwiYXVkaW9Db25zdHJhaW50cyIsInZpZGVvRGV2aWNlSWQiLCJhdWRpb0RldmljZUlkIiwidmlkZW8iLCJwcmVzZXQiLCJkaW1Db25zdHJhaW50IiwiZGltIiwiaWRlYWwiLCJ3aWR0aCIsImhlaWdodCIsImF1ZGlvIiwibWVkaWFTdHJlYW0iLCJjb250YWluZXIiLCJwcmV2aW91cyIsInZvbHVtZSIsInRhZ05hbWUiLCJnZXRWaWRlb1RyYWNrcyIsImdldEF1ZGlvVHJhY2tzIiwiX25vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvcGxheSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2VDaGlsZCIsImFwcGVuZENoaWxkIiwic3JjT2JqZWN0IiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZW51bWVyYXRlRGV2aWNlcyIsImRldmljZXMiLCJraW5kIiwiVVNFUiIsIkVOVklST05NRU5UIiwicGF0aHMiLCJjbGFzc2VzIiwiX0V2ZW50cyIsImtleXMiLCJzdXBwb3J0cyIsInJlcGxhY2UiLCJyZWFjaCIsIl9lbmRlZCIsInByb3AiLCJJbnZpdGUiLCJyZWYiLCJwYXJlbnQiLCJ0b3BpYyIsIl9saXN0ZW5lciIsInVwZGF0ZWQiLCJjYiIsImlkeCIsImZpbmRJbmRleCIsInNwbGljZSIsInNvbWUiLCJpbnZpdGVlIiwiaW52aXRlTWV0YURhdGEiLCJpbnZpdGVJZCIsImludml0ZVJlZiIsImluaXRpYWxpemluZyIsIlVzZXIiLCJsYXN0U2VlbiIsImFub255bW91cyIsImNyZWF0ZSIsIklOVEVSTkFMIiwiUGVyc2lzdGVudFN0b3JhZ2UiLCJkZXZpY2VNZXRhZGF0YSIsInNkayIsIndlYmNvbSIsIlNES19WRVJTSU9OIiwidXNlckFnZW50IiwiZGV2aWNlUmVmIiwiaW52aXRlSWRzIiwiaGFzQ29ubmVjdGVkRGV2aWNlcyIsIlJlZ0V4cCIsIkFVRElPIiwiVklERU8iLCJBVURJT19WSURFTyIsIlNDUkVFTl9TSEFSSU5HIiwiTWVzc2FnZSIsInRleHQiLCJuZXdUZXh0IiwiUGFydGljaXBhbnQiLCJSZW1vdGUiLCJyZW1vdGVTdHJlYW1Db250YWluZXIiLCJtdXRlZCIsInBlZXJDb25uZWN0aW9uIiwicGVlckNvbm5lY3Rpb25zIiwiYW5zd2VyIiwicGMiLCJzdWJzY3JpYmVkIiwiU0laRSIsIk1VVEUiLCJfY2xvc2UiLCJyZW1vdGUiLCJub2RlIiwiYnJvd3NlciIsImNvbXBhdGlibGUiLCJtaW5WZXJzaW9uIiwidmVyc2lvbiIsImFyZ3MiLCJsb2ciLCJSZWFjaCIsImNmZyIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1lbWJlck1lIiwiY3JlYXRlVXNlciIsImF1dGgiLCJsb2dpbiIsInAiLCJjdXJyZW50IiwibG9nb3V0IiwiYXV0aFdpdGhQYXNzd29yZCIsImluaXQiLCJ1IiwicmVzdW1lIiwiYXV0aEFub255bW91c2x5IiwiZGlzY29ubmVjdCIsImluY2x1ZGUiLCJjbHMiLCJzdGFja3MiLCJzY2hlbWEiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2ZsYXR0ZW5TZXJ2ZXJzIiwiX2V4cGFuZCIsInNlcnZlcnMiLCJ1c2VybmFtZSIsInNlcnZlciIsImNyZWRlbnRpYWwiLCJ1cmxzIiwidXJpcyIsInVyaSIsIkNvbmZpZyIsInByZWZlcnJlZFZpZGVvQ29kZWMiLCJwcmVmZXJyZWRBdWRpb0NvZGVjIiwicmVzZXQiLCJpY2VTZXJ2ZXJzIiwiX2ljZVNlcnZlcnMiLCJfY3VycmVudFNlcnZlcnMiLCJfbmV3U2VydmVycyIsIm5ld1NlcnZlciIsInJlZHVjZSIsInMiLCJEZXZpY2UiLCJvcyIsIl9mYWNpbmdNb2RlcyIsIl9nZXRDb25zdHJhaW50VmFsdWUiLCJleGFjdCIsIl9zZXRDb25zdHJhaW5WYWx1ZSIsIm90aGVyIiwidmFsdWUiLCJMb2NhbCIsImlzVmlkZW9Mb2FkZWQiLCJfaW5wdXRzIiwiZ2V0VXNlck1lZGlhIiwiY29uc3RyYWludHNWYWx1ZSIsIm1lZGlhIiwidHJhY2siLCJzdGF0ZSIsInRyYWNrcyIsImdldFRyYWNrcyIsImVuYWJsZWQiLCJtdXRlIiwiX3N3aXRjaERldmljZSIsIm5leHQiLCJjdXJyZW50TW9kZUlkeCIsIm1lZGlhRGV2aWNlIiwic29ydCIsIm5leHREZXZpY2UiLCJ2Iiwic3RvcCIsInByb3BzIiwicmV2ZXJzZSIsInVwZGF0ZUNvbnN0cmFpbnRzIiwiZGVmYXVsdENvbnN0cmFpbnRzIiwiX2NvbnN0cmFpbnRzIiwiTWVkaWFTdHJlYW0iLCJjaGVja0RldmljZXMiLCJsYWJlbCIsImRldmljZUlkcyIsImF0dGFjaFN0cmVhbSIsIm9ubG9hZGVkZGF0YSIsInJlbmVnb3RpYXRlIiwiX21lZGlhIiwicmVtb3ZlQ2hpbGQiLCJzdHJlYW1NZXRhRGF0YSIsInNoYXJlZFN0cmVhbSIsInN0cmVhbVJlZiIsInN0cmVhbVNpemUiLCJ2aWRlb0hlaWdodCIsInZpZGVvV2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hhcmVkIiwic3Vic2NyaWJlciIsIm9mZmVyIiwiY2xvc2VkUEMiLCJTdHJlYW1NYW5hZ2VyIiwiRHRsc1NydHBLZXlBZ3JlZW1lbnQiLCJzZHBDb25zdHJhaW50cyIsIk9mZmVyVG9SZWNlaXZlQXVkaW8iLCJyZWNlaXZlIiwiT2ZmZXJUb1JlY2VpdmVWaWRlbyIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRCIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRCIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0NPTVBMRVRFRCIsIklDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfRkFJTEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfT1RIRVIiLCJfdG9KU09OIiwibyIsInRvSlNPTiIsIlBlZXJDb25uZWN0aW9uIiwic3RhY2tJZCIsInN0cmVhbUlkIiwicmVtb3RlRGV2aWNlIiwicHVibGlzaCIsIl9sb2NhbFBhdGgiLCJfcmVtb3RlUGF0aCIsIm5lZ290aWF0ZWQiLCJSVENQZWVyQ29ubmVjdGlvbiIsIm9wdGlvbmFsIiwibWFuZGF0b3J5Iiwib25pY2VjYW5kaWRhdGUiLCJjYW5kaWRhdGUiLCJvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSIsImljZUNvbm5lY3Rpb25TdGF0ZSIsIl9hdHRhY2hTdHJlYW0iLCJfcmVtb3RlSUNFQ2FuZGlkYXRlcyIsImlzQ29ubmVjdGVkIiwib25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZSIsImljZUdhdGhlcmluZ1N0YXRlIiwiX3N0YXR1cyIsImxpc3RlbiIsInNuYXAiLCJhZGRJY2VDYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJodG1sRWxlbWVudCIsInByb3RvdHlwZSIsIm9udHJhY2siLCJvbmFkZHN0cmVhbSIsInNkcE9mZmVyIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJyZW1vdGVEZXNjcmlwdGlvbiIsImNyZWF0ZUFuc3dlciIsIl9zZXRQcmVmZXJyZWRDb2RlY3MiLCJkZXNjcmlwdGlvbiIsInNldExvY2FsRGVzY3JpcHRpb24iLCJsb2NhbERlc2NyaXB0aW9uIiwic2VuZFRpbWVvdXQiLCJvbm5lZ290aWF0aW9ubmVlZGVkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9zZW5kT2ZmZXIiLCJzZHBBbnN3ZXIiLCJfYWx0ZXJTdHJlYW0iLCJjcmVhdGVPZmZlciIsIm9sZFN0cmVhbSIsIm5ld1N0cmVhbSIsIlJUQ1J0cFNlbmRlciIsImdldFNlbmRlcnMiLCJuZXdUcmFja3MiLCJzZW5kZXIiLCJyZXBsYWNlVHJhY2siLCJzaWduYWxpbmdTdGF0ZSIsIm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UiLCJzZHBMaW5lcyIsInNkcCIsInNwbGl0IiwibWVkaWFzIiwic2RwTGluZSIsImV4ZWMiLCJmbXQiLCJpbmRleCIsImNvZGVjcyIsImMiLCJpZCIsInByZWZlciIsIm1lZGlhTGlzdCIsInByZWZlcmVkQ29kZWMiLCJzZWxlY3RlZCIsImZpbmQiLCJjb2RlYyIsImlkcyIsImpvaW4iLCJfcmVtb3RlU3RyZWFtIiwiZ2V0U3RhY2tJZCIsImlkMSIsImlkMiIsImxvY2FsZUNvbXBhcmUiLCJQZWVyQ29ubmVjdGlvbk1hbmFnZXIiLCJnZXRQZWVyQ29ubmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0IsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUMsc0JBQXNCOzs7Ozs7Ozs7QUNadkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEseUNBQXlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQ0FBZ0M7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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TztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxFQUFFOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY2gtZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIndlYmNvbS93ZWJjb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY2hcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ3ZWJjb20vd2ViY29tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjaFwiXSA9IGZhY3Rvcnkocm9vdFtcIldlYmNvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjM2ZGE4MDE3MWE5YjZmNjZhMjMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9Db25maWcnO1xuaW1wb3J0IFN0cmVhbU1hbmFnZXIgZnJvbSAnLi4vc3RyZWFtL1N0cmVhbU1hbmFnZXInO1xuaW1wb3J0IFBlZXJDb25uZWN0aW9uTWFuYWdlciBmcm9tICcuLi93ZWJydGMvUGVlckNvbm5lY3Rpb25NYW5hZ2VyJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbi8qKlxuICogc2luZ2xldG9uXG4gKiBAdHlwZSB7Q2FjaGVNYW5hZ2VyfVxuICogQHByaXZhdGVcbiAqL1xubGV0IF9jYWNoZSA9IG51bGw7XG5cbi8qKlxuICogU2luZ2xldG9uIHRvIGhhbmRsZSBnbG9iYWwgcmVmZXJlbmNlc1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgQ2FjaGVNYW5hZ2VyIHtcblx0LyoqXG5cdCAqIENvbnN0cnVjdCBzaW5nbGV0b25cblx0ICogQHJldHVybiB7Q2FjaGVNYW5hZ2VyfVxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYoIV9jYWNoZSkge1xuXHRcdFx0X2NhY2hlID0gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIF9jYWNoZTtcblx0fVxuXHQvKipcblx0ICogVGhlIGJhc2UgcmVmZXJlbmNlXG5cdCAqIEBwYXJhbSB7V2ViY29tfSB1cmwgdGhlIHJlZmVyZW5jZSBvciBpdHMgdXJsXG5cdCAqL1xuXHRzZXQgYmFzZSh1cmwpIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fYmFzZSA9IHVybCBpbnN0YW5jZW9mIFdlYmNvbSA/IHVybCA6IG5ldyBXZWJjb20odXJsKTtcblx0fVxuXHQvKipcblx0ICogVGhlIGJhc2UgcmVmZXJlbmNlXG5cdCAqIEB0eXBlIHtXZWJjb219XG5cdCAqL1xuXHRnZXQgYmFzZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIHVzZXJcblx0ICogQHBhcmFtIHtDb25maWd9IGNvbmZpZyB0aGUgY29ubmVjdGVkIHVzZXJcblx0ICovXG5cdHNldCBjb25maWcoY29uZmlnKSB7XG5cdFx0aWYoIXRoaXMuX2NvbmZpZykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX2NvbmZpZyA9IG5ldyBDb25maWcoY29uZmlnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fY29uZmlnLmFzc2lnbihjb25maWcpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEB0eXBlIHtDb25maWd9XG5cdCAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdGlmKCF0aGlzLl9jb25maWcpIHtcblx0XHRcdHRoaXMuX2NvbmZpZyA9IG5ldyBDb25maWcoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEBwYXJhbSB7VXNlcn0gdXNlciB0aGUgY29ubmVjdGVkIHVzZXJcblx0ICovXG5cdHNldCB1c2VyKHVzZXIpIHtcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fdXNlciA9IHVzZXI7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAdHlwZSB7VXNlcn1cblx0ICovXG5cdGdldCB1c2VyKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBkZXZpY2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRldmljZSB0aGUgY3VycmVudCBkZXZpY2Vcblx0ICovXG5cdHNldCBkZXZpY2UoZGV2aWNlKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RldmljZSA9IGRldmljZTtcblx0fVxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgZGV2aWNlXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgZGV2aWNlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kZXZpY2U7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0c2V0IGxvZ0xldmVsKGxldmVsKSB7XG5cdFx0aWYoL15ERUJVR3xJTkZPfFdBUk58RVJST1IkL2kudGVzdChsZXZlbCkpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9sb2dMZXZlbCA9IGxldmVsO1xuXHRcdH0gZWxzZSBpZihsZXZlbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUiknKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldCBsb2dMZXZlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbG9nTGV2ZWwgfHwgJ0VSUk9SJztcblx0fVxuXG5cdC8qKlxuXHQgKiBTdHJlYW1zIG1hbmFnZXJcblx0ICogQHJldHVybnMge1N0cmVhbU1hbmFnZXJ9XG5cdCAqL1xuXHRnZXQgc3RyZWFtcygpIHtcblx0XHRpZighdGhpcy5fc3RyZWFtcykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX3N0cmVhbXMgPSBuZXcgU3RyZWFtTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fc3RyZWFtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQZWVyQ29ubmVjdGlvbnMgbWFuYWdlclxuXHQgKiBAcmV0dXJucyB7UGVlckNvbm5lY3Rpb25NYW5hZ2VyfVxuXHQgKi9cblx0Z2V0IHBlZXJDb25uZWN0aW9ucygpIHtcblx0XHRpZighdGhpcy5fcGVlckNvbm5lY3Rpb25zKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5fcGVlckNvbm5lY3Rpb25zID0gbmV3IFBlZXJDb25uZWN0aW9uTWFuYWdlcigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGVlckNvbm5lY3Rpb25zO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICogQGlnbm9yZVxuICogQHR5cGUge0NhY2hlTWFuYWdlcn1cbiAqL1xuY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGVNYW5hZ2VyKCk7XG5cbi8qKlxuICogU2luZ2xldG9uIGZvciBzaGFyZWQgcmVmZXJlbmNlc1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL2NhY2hlLmpzIiwiaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG4vKipcbiAqIExpc3Qgb2YgcG9zc2libGUgbG9nIGxldmVsc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IGxldmVscyA9IFsnREVCVUcnLCAnSU5GTycsICdXQVJOJywgJ0VSUk9SJ107XG4vKipcbiAqIElzIGxvZyBlbmFibGVkIGZvciBhIHNwZWNpZmljIGxldmVsXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbGV2ZWwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzRW5hYmxlZCA9IGxldmVsID0+IHtcblx0cmV0dXJuIGxldmVscy5pbmRleE9mKGxldmVsLnRvVXBwZXJDYXNlKCkpID49IGxldmVscy5pbmRleE9mKGNhY2hlLmxvZ0xldmVsLnRvVXBwZXJDYXNlKCkpO1xufTtcbi8qKlxuICogR2xvYmFsIENvbnNvbGUuICh0byBhdm9pZCBkcm9wX2NvbnNvbGUuLi4pXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEB0eXBlIHtDb25zb2xlfVxuICovXG5jb25zdCBnQ29uc29sZSA9IGdsb2JhbFsnY29uc29sZSddO1xuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGNvbnNvbGUgY2FsbFxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIEEgbWV0aG9kIG9mIHRoZSBjb25zb2xlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIFRoZSBsb2cgbGV2ZWxcbiAqIEBwYXJhbSB7Kn0gbWVzc2FnZXMgdGhlIGxvZyBjb250ZW50XG4gKi9cbmNvbnN0IGxvZ2dlciA9IChtZXRob2QsIGxldmVsLCAuLi5tZXNzYWdlcykgPT4ge1xuXHRpc0VuYWJsZWQobGV2ZWwpID8gZ0NvbnNvbGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldLmJpbmQoZ0NvbnNvbGUpKC4uLm1lc3NhZ2VzKSA6ICgpID0+IHt9O1xufTtcbi8qKlxuICogVXNlIGEgZ3JvdXAgdG8gbG9nXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbG9nIGxldmVsXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZ3JvdXAgdGl0bGVcbiAqIEBwYXJhbSB7Kn0gaXRlbXMgdGhlIGxvZyBjb250ZW50XG4gKi9cbmNvbnN0IGdyb3VwID0gKGxldmVsLCBtZXNzYWdlLCAuLi5pdGVtcykgPT4ge1xuXHRpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgZ0NvbnNvbGUuZ3JvdXAgPyAnZ3JvdXAnIDogbGV2ZWwsIGxldmVsKSh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgPyBtZXNzYWdlIDogJycpO1xuXHRcdGxldCB2YWx1ZXMgPSAodHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnID8gW21lc3NhZ2VdIDogW10pLmNvbmNhdChpdGVtcyk7XG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSAmJiBpdGVtc1swXSBpbnN0YW5jZW9mIEFycmF5ICYmIHR5cGVvZiBpdGVtc1swXS5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFsdWVzID0gaXRlbXNbMF07XG5cdFx0fVxuXHRcdHZhbHVlcy5mb3JFYWNoKGl0ZW0gPT4gbG9nZ2VyLmJpbmQodW5kZWZpbmVkLCBsZXZlbCwgbGV2ZWwpKGl0ZW0pKTtcblx0XHRnQ29uc29sZS5ncm91cEVuZCAmJiBnQ29uc29sZS5ncm91cEVuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgbGV2ZWwsIGxldmVsLCBtZXNzYWdlKTtcblx0fVxufTtcblxuLyoqXG4gKiBMb2cgZGVidWcgbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRy5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL2xvZ1xuICovXG5leHBvcnQgY29uc3QgZCA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMF0pO1xuLyoqXG4gKiBMb2cgaW5mb3JtYXRpb24gbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRyBvciBJTkZPLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvaW5mb1xuICovXG5leHBvcnQgY29uc3QgaSA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMV0pO1xuLyoqXG4gKiBMb2cgd2FybmluZyBtZXNzYWdlcyBpZiBsb2cgbGV2ZWwgaXMgc2V0IHRvIERFQlVHLCBJTkZPIG9yIFdBUk4uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9BUEkvQ29uc29sZS93YXJuXG4gKi9cbmV4cG9ydCBjb25zdCB3ID0gZ3JvdXAuYmluZCh1bmRlZmluZWQsIGxldmVsc1syXSk7XG4vKipcbiAqIExvZyBlcnJvciBtZXNzYWdlcy4gRXJyb3JzIGFyZSBhbHdheXMgbG9nZ2VkLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGUgPSBnQ29uc29sZS5lcnJvci5iaW5kKGdDb25zb2xlKTtcbi8qKlxuICogUHJvbWlzZSByZWplY3Rpb24gbG9nZ2VyIHRvIHVzZSB3aXRoIGNhdGNoXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IHIgPSBtZXNzYWdlID0+IHJlYXNvbiA9PiB7XG5cdGQobWVzc2FnZSwgcmVhc29uKTtcblx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbiB8fCBtZXNzYWdlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL0xvZy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuLyoqXG4gKiBHZXQgdGhlIGV2ZW50IHN0cmluZyBmb3IgV2ViY29tIGZyb20gUmVhY2ggZXZlbnRzXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEEgUmVhY2ggZXZlbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW50VHlwZSA9IChldmVudCkgPT4ge1xuXHRsZXQgZXZ0O1xuXHRpZigoL19BRERFRCQvaSkudGVzdChldmVudCkgfHwgL19QVUJMSVNIRUQkLy50ZXN0KGV2ZW50KSkge1xuXHRcdGV2dCA9ICdhZGRlZCc7XG5cdH0gZWxzZSBpZigvX0NIQU5HRUQkLy50ZXN0KGV2ZW50KSB8fCAvX1JFRlJFU0hFRCQvLnRlc3QoZXZlbnQpKSB7XG5cdFx0ZXZ0ID0gJ2NoYW5nZWQnO1xuXHR9IGVsc2UgaWYoL19SRU1PVkVEJC8udGVzdChldmVudCkgfHwgL19VTlBVQkxJU0hFRCQvLnRlc3QoZXZlbnQpKSB7XG5cdFx0ZXZ0ID0gJ3JlbW92ZWQnO1xuXHR9XG5cdHJldHVybiBldnQgPyBgY2hpbGRfJHtldnR9YCA6IGV2ZW50O1xufTtcblxuLyoqXG4gKiBXcml0ZSBtZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgV3JpdGUgbWV0aG9kIChzZXQsdXBkYXRlKVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gc2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBzZXRcbiAqIEBpZ25vcmVcbiAqL1xuY29uc3QgX3dyaXRlID0gKG1ldGhvZCwgcGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpW21ldGhvZF0oZGF0YSwgZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZSgpKTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jc2V0fSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHNldFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gc2V0XG4gKiBAcmV0dXJuIHtQcm9taXNlPCosIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldCA9IF93cml0ZS5iaW5kKHVuZGVmaW5lZCwgJ3NldCcpO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jcHVzaH0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBwdXNoXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwdXNoXG4gKiBAcmV0dXJuIHtQcm9taXNlPFdlYmNvbSwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNvbnN0IHB1c2hSZWYgPSBjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLnB1c2goZGF0YSwgZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShwdXNoUmVmKSk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3VwZGF0ZX0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB1cGRhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHVwZGF0ZVxuICogQHJldHVybiB7UHJvbWlzZTwqLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSBfd3JpdGUuYmluZCh1bmRlZmluZWQsICd1cGRhdGUnKTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3JlbW92ZX0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byByZW1vdmVcbiAqIEByZXR1cm4ge1Byb21pc2U8KiwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHBhdGgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5yZW1vdmUoZXJyb3IgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZSgpKTtcbn0pO1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb25jZX0gc2hvcnRjdXQgYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHJldHVybnMge1Byb21pc2U8V2ViY29tL2FwaS5EYXRhU25hcHNob3QsIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9uY2UgPSAocGF0aCwgZXZlbnQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbmNlKGV2ZW50VHlwZShldmVudCksIHJlc29sdmUsIHJlamVjdCk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uY2V9KCd2YWx1ZScpIGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gZ2V0XG4gKiBAcmV0dXJuIHtQcm9taXNlPFdlYmNvbS9hcGkuRGF0YVNuYXBzaG90LCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXQgPSBwYXRoID0+IG9uY2UocGF0aCwgJ3ZhbHVlJyk7XG5cbi8qKlxuICogTGlzdCB2YWx1ZXMgYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBnZXRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdCB0byBsaXN0XG4gKiBAcGFyYW0gcGFyYW1zIEFkZGl0aW9uYWwgY29uc3RydWN0b3IgcGFyYW1ldGVyc1xuICogQHJldHVybiB7UHJvbWlzZTxPYmplY3RbXSwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgbGlzdCA9IChwYXRoLCBUeXBlLCAuLi5wYXJhbXMpID0+IHtcblx0cmV0dXJuIGdldChwYXRoKS50aGVuKHNuYXBEYXRhID0+IHtcblx0XHRpZihzbmFwRGF0YSkge1xuXHRcdFx0Y29uc3QgdmFsdWVzID0gW107XG5cdFx0XHRzbmFwRGF0YS5mb3JFYWNoKHNuYXBDaGlsZCA9PiB7XG5cdFx0XHRcdHZhbHVlcy5wdXNoKG5ldyBUeXBlKHNuYXBDaGlsZCwgLi4ucGFyYW1zKSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNvbn0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fnF1ZXJ5Q2FsbGJhY2t8ZnVuY3Rpb259IHF1ZXJ5Q2FsbGJhY2sgVGhlIGNhbGxiYWNrXG4gKiBAcGFyYW0ge1dlYmNvbS9hcGkuUXVlcnl+Y2FuY2VsQ2FsbGJhY2t8ZnVuY3Rpb259IFtjYW5jZWxDYWxsYmFja10gVGhlIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBjb25zdCBvbiA9IChwYXRoLCBldmVudCwgcXVlcnlDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbihldmVudFR5cGUoZXZlbnQpLCBxdWVyeUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb2ZmfSBzaG9ydGN1dFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBjYWxsYmFja1xuICovXG5leHBvcnQgY29uc3Qgb2ZmID0gKHBhdGgsIGV2ZW50LCBjYWxsYmFjaykgPT4ge1xuXHRjYWNoZS5iYXNlLmNoaWxkKHBhdGgpLm9mZihldmVudFR5cGUoZXZlbnQpLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb25EaXNjb25uZWN0fSBzaG9ydGN1dFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoXG4gKiBAcmV0dXJuIHtXZWJjb20vYXBpLk9uRGlzY29ubmVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IG9uRGlzY29ubmVjdCA9IHBhdGggPT4gY2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vbkRpc2Nvbm5lY3QoKTtcblxuLyoqXG4gKiBUaW1lc3RhbXAgdmFsdWVcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKi9cbi8vIGV4cG9ydCBjb25zdCB0cyA9ICgpID0+IFdlYmNvbS5TZXJ2ZXJWYWx1ZS5USU1FU1RBTVA7XG5leHBvcnQgY29uc3QgdHMgPSAoKSA9PiBEYXRlLm5vdygpO1xuLy8gSEFDSyAjRGF0YVN5bmM6IFJvbGxiYWNrIHdoZW4gVElNRVNUQU1QIHdvcmtzIGFnYWluIChzZXJ2ZXItc2lkZSBidWcgd2l0aCBzZWN1cml0eSBydWxlcylcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvRGF0YVN5bmMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGxvZ0Rpc2FibGVkXyA9IHRydWU7XG52YXIgZGVwcmVjYXRpb25XYXJuaW5nc18gPSB0cnVlO1xuXG4vLyBVdGlsaXR5IG1ldGhvZHMuXG52YXIgdXRpbHMgPSB7XG4gIGRpc2FibGVMb2c6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJndW1lbnQgdHlwZTogJyArIHR5cGVvZiBib29sICtcbiAgICAgICAgICAnLiBQbGVhc2UgdXNlIGEgYm9vbGVhbi4nKTtcbiAgICB9XG4gICAgbG9nRGlzYWJsZWRfID0gYm9vbDtcbiAgICByZXR1cm4gKGJvb2wpID8gJ2FkYXB0ZXIuanMgbG9nZ2luZyBkaXNhYmxlZCcgOlxuICAgICAgICAnYWRhcHRlci5qcyBsb2dnaW5nIGVuYWJsZWQnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIG9yIGVuYWJsZSBkZXByZWNhdGlvbiB3YXJuaW5nc1xuICAgKiBAcGFyYW0geyFib29sZWFufSBib29sIHNldCB0byB0cnVlIHRvIGRpc2FibGUgd2FybmluZ3MuXG4gICAqL1xuICBkaXNhYmxlV2FybmluZ3M6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJndW1lbnQgdHlwZTogJyArIHR5cGVvZiBib29sICtcbiAgICAgICAgICAnLiBQbGVhc2UgdXNlIGEgYm9vbGVhbi4nKTtcbiAgICB9XG4gICAgZGVwcmVjYXRpb25XYXJuaW5nc18gPSAhYm9vbDtcbiAgICByZXR1cm4gJ2FkYXB0ZXIuanMgZGVwcmVjYXRpb24gd2FybmluZ3MgJyArIChib29sID8gJ2Rpc2FibGVkJyA6ICdlbmFibGVkJyk7XG4gIH0sXG5cbiAgbG9nOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChsb2dEaXNhYmxlZF8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3dzIGEgZGVwcmVjYXRpb24gd2FybmluZyBzdWdnZXN0aW5nIHRoZSBtb2Rlcm4gYW5kIHNwZWMtY29tcGF0aWJsZSBBUEkuXG4gICAqL1xuICBkZXByZWNhdGVkOiBmdW5jdGlvbihvbGRNZXRob2QsIG5ld01ldGhvZCkge1xuICAgIGlmICghZGVwcmVjYXRpb25XYXJuaW5nc18pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKG9sZE1ldGhvZCArICcgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAnICsgbmV3TWV0aG9kICtcbiAgICAgICAgJyBpbnN0ZWFkLicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGJyb3dzZXIgdmVyc2lvbiBvdXQgb2YgdGhlIHByb3ZpZGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IHVhc3RyaW5nIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gZXhwciBSZWd1bGFyIGV4cHJlc3Npb24gdXNlZCBhcyBtYXRjaCBjcml0ZXJpYS5cbiAgICogQHBhcmFtIHshbnVtYmVyfSBwb3MgcG9zaXRpb24gaW4gdGhlIHZlcnNpb24gc3RyaW5nIHRvIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHshbnVtYmVyfSBicm93c2VyIHZlcnNpb24uXG4gICAqL1xuICBleHRyYWN0VmVyc2lvbjogZnVuY3Rpb24odWFzdHJpbmcsIGV4cHIsIHBvcykge1xuICAgIHZhciBtYXRjaCA9IHVhc3RyaW5nLm1hdGNoKGV4cHIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPj0gcG9zICYmIHBhcnNlSW50KG1hdGNoW3Bvc10sIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogQnJvd3NlciBkZXRlY3Rvci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSByZXN1bHQgY29udGFpbmluZyBicm93c2VyIGFuZCB2ZXJzaW9uXG4gICAqICAgICBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgZGV0ZWN0QnJvd3NlcjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gICAgLy8gUmV0dXJuZWQgcmVzdWx0IG9iamVjdC5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LmJyb3dzZXIgPSBudWxsO1xuICAgIHJlc3VsdC52ZXJzaW9uID0gbnVsbDtcblxuICAgIC8vIEZhaWwgZWFybHkgaWYgaXQncyBub3QgYSBicm93c2VyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBicm93c2VyLic7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3guXG4gICAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ2ZpcmVmb3gnO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0ZpcmVmb3hcXC8oXFxkKylcXC4vLCAxKTtcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHtcbiAgICAgIC8vIENocm9tZSwgQ2hyb21pdW0sIFdlYnZpZXcsIE9wZXJhLCBhbGwgdXNlIHRoZSBjaHJvbWUgc2hpbSBmb3Igbm93XG4gICAgICBpZiAod2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgIHJlc3VsdC5icm93c2VyID0gJ2Nocm9tZSc7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9DaHJvbShlfGl1bSlcXC8oXFxkKylcXC4vLCAyKTtcbiAgICAgIH0gZWxzZSB7IC8vIFNhZmFyaSAoaW4gYW4gdW5wdWJsaXNoZWQgdmVyc2lvbikgb3IgdW5rbm93biB3ZWJraXQtYmFzZWQuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFxcZCspLihcXGQrKS8pKSB7XG4gICAgICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnc2FmYXJpJztcbiAgICAgICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgICAgICB9IGVsc2UgeyAvLyB1bmtub3duIHdlYmtpdC1iYXNlZCBicm93c2VyLlxuICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ1Vuc3VwcG9ydGVkIHdlYmtpdC1iYXNlZCBicm93c2VyICcgK1xuICAgICAgICAgICAgICAnd2l0aCBHVU0gc3VwcG9ydCBidXQgbm8gV2ViUlRDIHN1cHBvcnQuJztcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8pKSB7IC8vIEVkZ2UuXG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdlZGdlJztcbiAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9FZGdlXFwvKFxcZCspLihcXGQrKSQvLCAyKTtcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vKSkge1xuICAgICAgICAvLyBTYWZhcmksIHdpdGggd2Via2l0R2V0VXNlck1lZGlhIHJlbW92ZWQuXG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdzYWZhcmknO1xuICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLywgMSk7XG4gICAgfSBlbHNlIHsgLy8gRGVmYXVsdCBmYWxsdGhyb3VnaDogbm90IHN1cHBvcnRlZC5cbiAgICAgIHJlc3VsdC5icm93c2VyID0gJ05vdCBhIHN1cHBvcnRlZCBicm93c2VyLic7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLy8gc2hpbUNyZWF0ZU9iamVjdFVSTCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgc2hpbVNvdXJjZU9iamVjdCB0byBhdm9pZCBsb29wLlxuXG4gIHNoaW1DcmVhdGVPYmplY3RVUkw6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBVUkwgPSB3aW5kb3cgJiYgd2luZG93LlVSTDtcblxuICAgIGlmICghKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICAgJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgLy8gT25seSBzaGltIENyZWF0ZU9iamVjdFVSTCB1c2luZyBzcmNPYmplY3QgaWYgc3JjT2JqZWN0IGV4aXN0cy5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIG5hdGl2ZUNyZWF0ZU9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwuYmluZChVUkwpO1xuICAgIHZhciBuYXRpdmVSZXZva2VPYmplY3RVUkwgPSBVUkwucmV2b2tlT2JqZWN0VVJMLmJpbmQoVVJMKTtcbiAgICB2YXIgc3RyZWFtcyA9IG5ldyBNYXAoKSwgbmV3SWQgPSAwO1xuXG4gICAgVVJMLmNyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgaWYgKCdnZXRUcmFja3MnIGluIHN0cmVhbSkge1xuICAgICAgICB2YXIgdXJsID0gJ3BvbHlibG9iOicgKyAoKytuZXdJZCk7XG4gICAgICAgIHN0cmVhbXMuc2V0KHVybCwgc3RyZWFtKTtcbiAgICAgICAgdXRpbHMuZGVwcmVjYXRlZCgnVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pJyxcbiAgICAgICAgICAgICdlbGVtLnNyY09iamVjdCA9IHN0cmVhbScpO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgIH07XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCA9IGZ1bmN0aW9uKHVybCkge1xuICAgICAgbmF0aXZlUmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICBzdHJlYW1zLmRlbGV0ZSh1cmwpO1xuICAgIH07XG5cbiAgICB2YXIgZHNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYycpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsICdzcmMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZHNjLmdldC5hcHBseSh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB0aGlzLnNyY09iamVjdCA9IHN0cmVhbXMuZ2V0KHVybCkgfHwgbnVsbDtcbiAgICAgICAgcmV0dXJuIGRzYy5zZXQuYXBwbHkodGhpcywgW3VybF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIG5hdGl2ZVNldEF0dHJpYnV0ZSA9IHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGU7XG4gICAgd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAoJycgKyBhcmd1bWVudHNbMF0pLnRvTG93ZXJDYXNlKCkgPT09ICdzcmMnKSB7XG4gICAgICAgIHRoaXMuc3JjT2JqZWN0ID0gc3RyZWFtcy5nZXQoYXJndW1lbnRzWzFdKSB8fCBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZVNldEF0dHJpYnV0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cbi8vIEV4cG9ydC5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2c6IHV0aWxzLmxvZyxcbiAgZGVwcmVjYXRlZDogdXRpbHMuZGVwcmVjYXRlZCxcbiAgZGlzYWJsZUxvZzogdXRpbHMuZGlzYWJsZUxvZyxcbiAgZGlzYWJsZVdhcm5pbmdzOiB1dGlscy5kaXNhYmxlV2FybmluZ3MsXG4gIGV4dHJhY3RWZXJzaW9uOiB1dGlscy5leHRyYWN0VmVyc2lvbixcbiAgc2hpbUNyZWF0ZU9iamVjdFVSTDogdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCxcbiAgZGV0ZWN0QnJvd3NlcjogdXRpbHMuZGV0ZWN0QnJvd3Nlci5iaW5kKHV0aWxzKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogT1BFTkVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE9QRU5FRCA9ICdPUEVORUQnO1xuLyoqXG4gKiBDTE9TRURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0VEID0gJ0NMT1NFRCc7XG4vKipcbiAqIENMT1NJTkdcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQ0xPU0lORyA9ICdDTE9TSU5HJztcbi8qKlxuICogQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENPTk5FQ1RFRCA9ICdDT05ORUNURUQnO1xuLyoqXG4gKiBOT1RfQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE5PVF9DT05ORUNURUQgPSAnTk9UX0NPTk5FQ1RFRCc7XG4vKipcbiAqIFdBU19DT05ORUNURURcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgV0FTX0NPTk5FQ1RFRCA9ICdXQVNfQ09OTkVDVEVEJztcbi8qKlxuICogT1dORVJcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT1dORVIgPSAnT1dORVInO1xuLyoqXG4gKiBNT0RFUkFUT1JcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgTU9ERVJBVE9SID0gJ01PREVSQVRPUic7XG4vKipcbiAqIFBBUlRJQ0lQQU5UXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0lQQU5UID0gJ1BBUlRJQ0lQQU5UJztcbi8qKlxuICogTk9ORVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBOT05FID0gJ05PTkUnO1xuLyoqXG4gKiBPbmdvaW5nIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgT05HT0lORyA9ICdPTkdPSU5HJztcbi8qKlxuICogQWNjZXB0ZWQgaW52aXRhdGlvblxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG4vKipcbiAqIFJlamVjdGVkIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuLyoqXG4gKiBDYW5jZWxlZCBpbnZpdGF0aW9uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENBTkNFTEVEID0gJ0NBTkNFTEVEJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Tk9ORSwgT1BFTkVELCBDTE9TRUQsIENPTk5FQ1RFRCwgTk9UX0NPTk5FQ1RFRCwgV0FTX0NPTk5FQ1RFRCwgT1dORVJ9IGZyb20gJy4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4vUGFydGljaXBhbnQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcbmltcG9ydCBMb2NhbCBmcm9tICcuL3N0cmVhbS9Mb2NhbCc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4vSW52aXRlJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuaW1wb3J0IHtSRUpFQ1RFRCwgQ0FOQ0VMRUR9IGZyb20gJy4vdXRpbC9jb25zdGFudHMnO1xuXG5jb25zdCBfam9pblJvb20gPSAocm9vbSwgcm9sZSkgPT4ge1xuXHRjb25zdCBwYXJ0aWNpcGFudCA9IHtcblx0XHRzdGF0dXM6IENPTk5FQ1RFRCxcblx0XHRfam9pbmVkOiBEYXRhU3luYy50cygpXG5cdH07XG5cdGlmKHJvbGUpIHtcblx0XHRwYXJ0aWNpcGFudC5yb2xlID0gcm9sZTtcblx0fVxuXHRMb2cudygnUm9vbSNqb2luJywgW3BhcnRpY2lwYW50LCBgXy9yb29tcy8ke3Jvb20udWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH1gXSk7XG5cdHJldHVybiBEYXRhU3luY1xuXHRcdC51cGRhdGUoYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9YCwgcGFydGljaXBhbnQpXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0RGF0YVN5bmNcblx0XHRcdFx0Lm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3Jvb20udWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH0vc3RhdHVzYClcblx0XHRcdFx0LnNldChXQVNfQ09OTkVDVEVEKTtcblx0XHRcdHJldHVybiByb29tO1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBSb29tIGluZm9ybWF0aW9uXG4gKiBAYWNjZXNzIHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHJvb21cblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxPYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGxldCB2YWx1ZXMgPSBzbmFwRGF0YTtcblx0XHRpZihzbmFwRGF0YSAmJiBzbmFwRGF0YS52YWwgJiYgdHlwZW9mIHNuYXBEYXRhLnZhbCA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHR2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSwge3VpZDogc25hcERhdGEubmFtZSgpfSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSB2YWx1ZXMudWlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIG5hbWVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMubmFtZSA9IHZhbHVlcy5uYW1lO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIG93bmVyIHVpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5vd25lciA9IHZhbHVlcy5vd25lcjtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSBzdGF0dXM6XG5cdFx0ICogLSBPUEVORURcblx0XHQgKiAtIENMT1NFRFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIHRoYXQgdGhlIHJvb20gaXMgcHVibGljIHNvIGFsbCB1c2VycyBjYW4gam9pblxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuX3B1YmxpYyA9ICEhdmFsdWVzLl9wdWJsaWM7XG5cblx0XHQvKipcblx0XHQgKiBBZGRpdGlvbmFsIHJvb20gaW5mb3JtYXRpb25zXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLmV4dHJhID0gdmFsdWVzLmV4dHJhO1xuXG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiBkZWNsYXJlZCBjYWxsYmFja3Ncblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBwYXJ0aWNpcGFudHMuXG5cdCAqIFRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIHVzZXIgaXMgZWl0aGVyIGEgcGFydGljaXBhbnQgb3IgdGhlIG93bmVyIG9mIHRoZSByb29tLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxQYXJ0aWNpcGFudFtdLCBFcnJvcj59XG5cdCAqL1xuXHRwYXJ0aWNpcGFudHMoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzYCwgUGFydGljaXBhbnQsIHRoaXMudWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgbWVzc2FnZXMuXG5cdCAqIFRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIHVzZXIgaXMgZWl0aGVyIGEgcGFydGljaXBhbnQgb3IgdGhlIG93bmVyIG9mIHRoZSByb29tLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2VbXSwgRXJyb3I+fVxuXHQgKi9cblx0bWVzc2FnZXMoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoYF8vcm9vbXMvJHt0aGlzLnVpZH0vbWVzc2FnZXNgLCBNZXNzYWdlLCB0aGlzLnVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHN0cmVhbXNcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0cmVhbXMobG9jYWxTdHJlYW1zKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBsaXN0IGEgUm9vbVxcJ3Mgc3RyZWFtcy4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYF8vcm9vbXMvJHt0aGlzLnVpZH0vc3RyZWFtc2ApXG5cdFx0XHQudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRMb2cuZCgnUm9vbXN+X3N0cmVhbXMnLCB2YWx1ZXMpO1xuXHRcdFx0XHRpZih2YWx1ZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmtleXModmFsdWVzKS5tYXAoa2V5ID0+IE9iamVjdC5hc3NpZ24oe3VpZDoga2V5LCByb29tSWQ6IHRoaXMudWlkfSwgdmFsdWVzW2tleV0pKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oc3RyZWFtcyA9PiBzdHJlYW1zLmZpbHRlcihzdHJlYW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gbG9jYWxTdHJlYW1zID09PSAoc3RyZWFtLmRldmljZSA9PT0gY2FjaGUuZGV2aWNlICYmIHN0cmVhbS5mcm9tID09PSBjYWNoZS51c2VyLnVpZCk7XG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKHN0cmVhbXMgPT4gc3RyZWFtcy5tYXAoY2FjaGUuc3RyZWFtc1tgZ2V0JHtsb2NhbFN0cmVhbXMgPyAnU2hhcmVkJyA6ICdSZW1vdGUnfWBdLmJpbmQoY2FjaGUuc3RyZWFtcykpKVxuXHRcdFx0LnRoZW4oc3RyZWFtcyA9PiBzdHJlYW1zLmZpbHRlcihzdHJlYW0gPT4gc3RyZWFtICE9PSBudWxsKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIGxvY2FsbHkgcHVibGlzaGVkIHN0cmVhbXMuIFRoZSBzdHJlYW1zIHB1Ymxpc2hlZCB3aXRoIGFub3RoZXIgZGV2aWNlIHdvbid0IGJlIHZpc2libGUgaGVyZVxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxMb2NhbFtdLCBFcnJvcj59XG5cdCAqL1xuXHRsb2NhbFN0cmVhbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0cmVhbXModHJ1ZSlcblx0XHRcdC5jYXRjaChMb2cucignUm9vbX5sb2NhbFN0cmVhbXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIHJlbW90ZWx5IHB1Ymxpc2hlZCBzdHJlYW1zLlxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxSZW1vdGVbXSwgRXJyb3I+fVxuXHQgKi9cblx0cmVtb3RlU3RyZWFtcygpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RyZWFtcyhmYWxzZSlcblx0XHRcdC5jYXRjaChMb2cucignUm9vbX5yZW1vdGVTdHJlYW1zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludml0ZSB1c2VycyB0byB0aGUgcm9vbS4gdGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgY3VycmVudCBVc2VyIGlzIHRoZSBvd25lciBvciBhIG1vZGVyYXRvciBvZiB0aGlzIFJvb20uXG5cdCAqIFRoaXMgd2lsbCBjcmVhdGUgdGhlIGludml0YXRpb24gYW5kIGFkZCB0aGUgdXNlciB0byB0aGUgcGFydGljaXBhbnRzIGxpc3QuXG5cdCAqIEBwYXJhbSB7VXNlcltdfSB1c2VycyB0aGUgdXNlcnMgdG8gaW52aXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcm9sZT0nTk9ORSddIHRoZSByb2xlIG9mIHRoZSBpbnZpdGVlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gYSBtZXNzYWdlIHRvIGFkZCB0byB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8e3Jvb206IFJvb20sIGludml0ZXM6IEludml0ZVtdfSwgRXJyb3I+fVxuXHQgKi9cblx0aW52aXRlKHVzZXJzLCByb2xlID0gTk9ORSwgbWVzc2FnZSkge1xuXHRcdGNvbnN0XG5cdFx0XHRfcGF0aCA9IHVzZXIgPT4gYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7dXNlci51aWR9YCxcblx0XHRcdF9kYXRhID0ge1xuXHRcdFx0XHRzdGF0dXM6IE5PVF9DT05ORUNURUQsXG5cdFx0XHRcdHJvbGU6IHJvbGUgfHwgTk9ORVxuXHRcdFx0fTtcblx0XHQvLyBBZGQgdXNlcnMgYXMgcGFydGljaXBhbnQgc28gdGhleSBjYW4gam9pbiB0aGUgcm9vbVxuXHRcdHJldHVybiBQcm9taXNlLmFsbCh1c2Vycy5tYXAodXNlciA9PiBEYXRhU3luYy5zZXQoX3BhdGgodXNlciksIF9kYXRhKSkpXG5cdFx0XHQvLyBTZW5kIGludml0ZXNcblx0XHRcdC50aGVuKCgpID0+IFByb21pc2UuYWxsKHVzZXJzLm1hcCh1c2VyID0+IEludml0ZS5zZW5kKHVzZXIsIHRoaXMsIG1lc3NhZ2UpKSkpXG5cdFx0XHQudGhlbihpbnZpdGVzID0+IHtcblx0XHRcdFx0Y29uc3QgcmVtb3ZlUGFydGljaXBhbnQgPSBpbnZpdGUgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7aW52aXRlLnJvb219L3BhcnRpY2lwYW50cy8ke2ludml0ZS50b31gKTtcblx0XHRcdFx0aW52aXRlcy5mb3JFYWNoKGludml0ZSA9PiB7XG5cdFx0XHRcdFx0aW52aXRlLm9uKFJFSkVDVEVELCByZW1vdmVQYXJ0aWNpcGFudCk7XG5cdFx0XHRcdFx0aW52aXRlLm9uKENBTkNFTEVELCByZW1vdmVQYXJ0aWNpcGFudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4ge3Jvb206IHRoaXMsIGludml0ZXN9O1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlID0+IHtcblx0XHRcdFx0TG9nLmUoJ1Jvb21+aW52aXRlJywgZSk7XG5cdFx0XHRcdHVzZXJzLmZvckVhY2godXNlciA9PiBEYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7dXNlci51aWR9YCkpO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9Sb29tfSk6XG5cdCAqIC0gUEFSVElDSVBBTlRfQURERUQ6IGEgcGFydGljaXBhbnQgaXMgYWRkZWQgdG8gdGhlIHJvb21cblx0ICogLSBQQVJUSUNJUEFOVF9DSEFOR0VEOiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaGlzIHN0YXR1cyAoam9pbilcblx0ICogLSBQQVJUSUNJUEFOVF9SRU1PVkVEOiBhIHBhcnRpY2lwYW50IGxlYXZlIHRoZSByb29tXG5cdCAqIC0gTUVTU0FHRV9BRERFRDogbmV3IGluc3RhbnQgbWVzc2FnZVxuXHQgKiAtIE1FU1NBR0VfQ0hBTkdFRDogYW4gZXhpc3RpbmcgbWVzc2FnZSBoYXMgYmVlbiBtb2RpZmllZCAobW9kZXJhdGlvbilcblx0ICogLSBNRVNTQUdFX1JFTU9WRUQ6IGEgbWVzc2FnZSBoYXMgYmVlbiByZW1vdmVkIChtb2RlcmF0aW9uKVxuXHQgKiAtIFNUUkVBTV9QVUJMSVNIRUQ6IGEgcGFydGljaXBhbnQgcHVibGlzaGVkIGEgbmV3IFN0cmVhbVxuXHQgKiAtIFNUUkVBTV9DSEFOR0VEOiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaGlzIHB1Ymxpc2hlZCBTdHJlYW0gKG1vZGVyYXRpb24sIHR5cGUsIG11dGUuLi4pXG5cdCAqIC0gU1RSRUFNX1VOUFVCTElTSEVEOiBhIHBhcnRpY2lwYW50IHN0b3BzIHRoZSBwdWJsaWNhdGlvbiBvZiBoaXMgU3RyZWFtXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0aGUgYXJndW1lbnRzIGRlcGVuZHMgb24gdGhlIHR5cGUgb2YgZXZlbnQ6XG5cdCAqIC0gUEFSVElDSVBBTlRfKiA6IGNhbGxiYWNrKHtAbGluayBQYXJ0aWNpcGFudH0gcCBbLCBFcnJvciBlXSlcblx0ICogLSBNRVNTQUdFXyogOiBjYWxsYmFjayh7QGxpbmsgTWVzc2FnZX0gbSBbLCBFcnJvciBlXSlcblx0ICogLSBTVFJFQU1fKiA6IGNhbGxiYWNrKHtAbGluayBSZW1vdGV9IHMgWywgRXJyb3IgZV0pXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5RdWVyeX5jYW5jZWxDYWxsYmFja30gY2FuY2VsQ2FsbGJhY2sgVGhlIGVycm9yIGNhbGxiYWNrIGZvciB0aGUgZXZlbnQsIHRha2VzIGFuIEVycm9yIGFzIG9ubHkgYXJndW1lbnRcblx0ICovXG5cdG9uKGV2ZW50LCBjYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spIHtcblx0XHRjb25zdFxuXHRcdFx0cGF0aCA9IEV2ZW50cy5yb29tLnRvUGF0aChldmVudCkodGhpcyksXG5cdFx0XHRvYmogPSBFdmVudHMucm9vbS50b0NsYXNzKGV2ZW50KTtcblx0XHRpZihwYXRoICYmIG9iaikge1xuXHRcdFx0Y29uc3QgdHlwZWRDYWxsYmFjayA9IHNuYXBEYXRhID0+IHtcblx0XHRcdFx0aWYoIS9eU1RSRUFNXy9pLnRlc3QoZXZlbnQpIHx8ICFzbmFwRGF0YSkge1xuXHRcdFx0XHRcdExvZy5pKGBSb29tfm9uKCR7ZXZlbnR9KWAsIHNuYXBEYXRhID8gbmV3IG9iaihzbmFwRGF0YSkgOiBudWxsKTtcblx0XHRcdFx0XHRjYWxsYmFjayhzbmFwRGF0YSA/IG5ldyBvYmooc25hcERhdGEpIDogbnVsbCk7XG5cdFx0XHRcdH0gZWxzZSBpZihjYWNoZS51c2VyKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RyZWFtRGF0YSA9IE9iamVjdC5hc3NpZ24oe3VpZDogc25hcERhdGEubmFtZSgpLCByb29tSWQ6IHRoaXMudWlkfSwgc25hcERhdGEudmFsKCkpO1xuXHRcdFx0XHRcdGlmKHN0cmVhbURhdGEuZnJvbSAhPT0gY2FjaGUudXNlci51aWQgfHwgc3RyZWFtRGF0YS5kZXZpY2UgIT09IGNhY2hlLmRldmljZSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVtb3RlU3RyZWFtID0gY2FjaGUuc3RyZWFtcy5nZXRSZW1vdGUoc3RyZWFtRGF0YSk7XG5cdFx0XHRcdFx0XHRMb2cuaShgUm9vbX5vbigke2V2ZW50fSlgLCByZW1vdGVTdHJlYW0pO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2socmVtb3RlU3RyZWFtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHREYXRhU3luYy5vbihwYXRoLCBldmVudCwgdHlwZWRDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spO1xuXHRcdFx0aWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKHR5cGVkQ2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZW5kIGFuIGluc3RhbnQgbWVzc2FnZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzZW5kXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZT59XG5cdCAqL1xuXHRzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIE1lc3NhZ2Uuc2VuZCh0aGlzLCBtZXNzYWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQdWJsaXNoIGEgbG9jYWwgc3RyZWFtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSBzdHJlYW0gdHlwZSwgc2VlIHtAbGluayBTdHJlYW1UeXBlc30gZm9yIHBvc3NpYmxlIHZhbHVlc1xuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IFtsb2NhbFN0cmVhbUNvbnRhaW5lcl0gVGhlIGVsZW1lbnQgdGhlIHN0cmVhbSBpcyBhdHRhY2hlZCB0by4gQ2FuIGJlIG51bGwgaWYgYWxyZWFkeSBzcGVjaWZpZWQgaW4ge0BsaW5rIENvbmZpZ30uXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c30gW2NvbnN0cmFpbnRzXSBUaGUgc3RyZWFtIGNvbnN0cmFpbnRzLiBJZiBub3QgZGVmaW5lZCwgdGhlIGNvbnN0cmFpbnRzIGRlZmluZWQgaW4ge0BsaW5rIENvbmZpZ30gd2lsbCBiZSB1c2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c2hhcmUodHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzKSB7XG5cdFx0TG9nLmkoJ1Jvb21+c2hhcmUnLCB7dHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzfSk7XG5cdFx0cmV0dXJuIExvY2FsLnNoYXJlKHRoaXMudWlkLCB0eXBlLCBsb2NhbFN0cmVhbUNvbnRhaW5lciwgY29uc3RyYWludHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEpvaW4gdGhlIHJvb20uIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0dXMgb2YgdGhlIGN1cnJlbnQgcGFydGljaXBhbnQgdG8gQ09OTkVDVEVELlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0am9pbigpIHtcblx0XHRMb2cuaSgnUm9vbX5qb2luJywgdGhpcyk7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBqb2luIGEgUm9vbS4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBfam9pblJvb20odGhpcykuY2F0Y2goTG9nLnIoJ1Jvb21+am9pbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMZWF2ZSB0aGUgcm9vbS4gU2V0cyB0aGUgY29ubmVjdGVkIHN0YXR1cyBvZiB0aGUgY3VycmVudCBwYXJ0aWNpcGFudCB0byBXQVNfQ09OTkVDVEVELCBkZWxldGVzIG1lZGlhcyBhbmQgY2FsbGJhY2tzLCBjbG9zZXMgV2ViUlRDIHN0YWNrcyBpbiB1c2UuXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqL1xuXHRsZWF2ZSgpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGxlYXZlIGEgUm9vbS4nKSk7XG5cdFx0fVxuXHRcdExvZy5pKCdSb29tfmxlYXZlJywgdGhpcyk7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH0vc3RhdHVzYCkuY2FuY2VsKCk7XG5cblx0XHQvLyBEaXNjb25uZWN0IHVzZXIncyBjYWxsYmFja3Ncblx0XHRPYmplY3Qua2V5cyh0aGlzLl9jYWxsYmFja3MpLmZvckVhY2goZXZlbnQgPT4ge1xuXHRcdFx0RGF0YVN5bmMub2ZmKEV2ZW50cy5yb29tLnRvUGF0aChldmVudCkodGhpcyksIGV2ZW50KTtcblx0XHR9KTtcblx0XHQvLyBVbnB1Ymxpc2ggYWxsIGxvY2FsIHN0cmVhbXNcblx0XHR0aGlzLmxvY2FsU3RyZWFtcygpLnRoZW4obG9jYWxTdHJlYW1zID0+IGxvY2FsU3RyZWFtcy5mb3JFYWNoKGxvY2FsU3RyZWFtID0+IGxvY2FsU3RyZWFtLmNsb3NlKCkpKTtcblx0XHQvLyBVbnN1YnNjcmliZSBhbGwgcmVtb3RlIHN0cmVhbXNcblx0XHR0aGlzLnJlbW90ZVN0cmVhbXMoKS50aGVuKHJlbW90ZVN0cmVhbXMgPT4gcmVtb3RlU3RyZWFtcy5mb3JFYWNoKHJlbW90ZVN0cmVhbSA9PiByZW1vdGVTdHJlYW0udW5TdWJzY3JpYmUoKSkpO1xuXHRcdC8vIFVwZGF0ZSBzdGF0dXNcblx0XHRyZXR1cm4gRGF0YVN5bmMuc2V0KGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50cy8ke2NhY2hlLnVzZXIudWlkfS9zdGF0dXNgLCBXQVNfQ09OTkVDVEVEKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfmxlYXZlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExlYXZlcyAmIGNsb3NlIHRoZSBSb29tLiBPbmx5IHRoZSBvd25lci9tb2RlcmF0b3IgY2FuIGNsb3NlIGEgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0ICovXG5cdGNsb3NlKCkge1xuXHRcdExvZy5pKCdSb29tfmNsb3NlJywgdGhpcyk7XG5cdFx0cmV0dXJuIHRoaXMubGVhdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMudXBkYXRlKGByb29tcy8ke3RoaXMudWlkfWAsIHtcblx0XHRcdFx0c3RhdHVzOiBDTE9TRUQsXG5cdFx0XHRcdF9jbG9zZWQ6IERhdGFTeW5jLnRzKClcblx0XHRcdH0pKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy51aWR9YCkpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+Y2xvc2UnKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgcm9vbVxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVdIFRoZSByb29tIG5hbWVcblx0ICogQHBhcmFtIHtvYmplY3R9IFtleHRyYT1udWxsXSBFeHRyYSBpbmZvcm1hdGlvbnNcblx0ICogQHBhcmFtIHtib29sZWFufSBbcHVibGljUm9vbT1mYWxzZV0gSW5kaWNhdGVzIHB1YmxpYyByb29tXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFJvb20sIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUgKG5hbWUsIGV4dHJhID0gbnVsbCwgcHVibGljUm9vbSA9IGZhbHNlKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBjcmVhdGUgYSBSb29tLicpKTtcblx0XHR9XG5cblx0XHRjb25zdFxuXHRcdFx0cm9vbU1ldGFEYXRhID0ge1xuXHRcdFx0XHRvd25lcjogY2FjaGUudXNlci51aWQsXG5cdFx0XHRcdF9wdWJsaWM6IHB1YmxpY1Jvb20sXG5cdFx0XHRcdG5hbWU6IG5hbWUgfHwgYCR7Y2FjaGUudXNlci5uYW1lfS0ke0RhdGUubm93KCl9YFxuXHRcdFx0fSxcblx0XHRcdHJvb21GdWxsTWV0YURhdGEgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdFx0c3RhdHVzOiBPUEVORUQsXG5cdFx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpLFxuXHRcdFx0XHRleHRyYVxuXHRcdFx0fSwgcm9vbU1ldGFEYXRhKTtcblxuXHRcdGxldCByb29tID0gbnVsbDtcblx0XHQvLyBDcmVhdGUgcHVibGljIHJvb20gaW5mb3Ncblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaCgncm9vbXMnLCByb29tRnVsbE1ldGFEYXRhKVxuXHRcdFx0Ly8gQ3JlYXRlIHByaXZhdGUgcm9vbSBpbmZvc1xuXHRcdFx0LnRoZW4ocm9vbVJlZiA9PiB7XG5cdFx0XHRcdHJvb20gPSBuZXcgUm9vbShPYmplY3QuYXNzaWduKHt1aWQ6IHJvb21SZWYubmFtZSgpfSwgcm9vbUZ1bGxNZXRhRGF0YSkpO1xuXHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL3Jvb21zLyR7cm9vbS51aWR9L21ldGFgLCByb29tTWV0YURhdGEpO1xuXHRcdFx0fSlcblx0XHRcdC8vIEpvaW4gdGhlIHJvb21cblx0XHRcdC50aGVuKCgpID0+IF9qb2luUm9vbShyb29tLCBPV05FUikpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb20jY3JlYXRlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHtAbGluayBSb29tfSBmcm9tIGl0cyBgdWlkYFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gdWlkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxSb29tPn1cblx0ICovXG5cdHN0YXRpYyBnZXQgKHVpZCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYHJvb21zLyR7dWlkfWApXG5cdFx0XHQudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGlmKHNuYXBEYXRhLnZhbCgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBSb29tKHNuYXBEYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1Jvb20uanMiLCIvKmVzbGludCBtYXgtcGFyYW1zOiBbMiwgNV0sIG1heC1sZW46IFswLCAxMjBdICovXG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi9Mb2cnO1xuXG4vKipcbiAqIFZpZGVvIHJlc29sdXRpb24gcHJlc2V0c1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7e1VIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZ30sIEZIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBIRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBTVkdBOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFNEOiB7dzogbnVtYmVyLCBoOiBudW1iZXIsIG1pbjogc3RyaW5nLCBtYXg6IHN0cmluZ30sIFZHQToge3c6IG51bWJlciwgaDogbnVtYmVyLCBtYXg6IHN0cmluZ319fVxuICovXG5jb25zdCBwcmVzZXRzID0ge1xuXHRVSEQ6IHt3OiAzODQwLCBoOiAyMTYwLCBtaW46ICdIRCd9LFxuXHRGSEQ6IHt3OiAxOTIwLCBoOiAxMDgwLCBtaW46ICdIRCcsIG1heDogJ1VIRCd9LFxuXHRIRDoge3c6IDEyODAsIGg6IDcyMCwgbWluOiAnU0QnLCBtYXg6ICdGSEQnfSxcblx0U1ZHQToge3c6IDgwMCwgaDogNjAwLCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRTRDoge3c6IDcyMCwgaDogNTc2LCBtaW46ICdWR0EnLCBtYXg6ICdIRCd9LFxuXHRWR0E6IHt3OiA2NDAsIGg6IDQ4MCwgbWF4OiAnU1ZHQSd9XG59O1xuXG4vKipcbiAqIEFzc2lnbiBkZXZpY2VJZCB0byBjb25zdHJhaW50XG4gKiBAcGFyYW0gY29uc3RyYWludFxuICogQHBhcmFtIGRldmljZUlkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgX2Fzc2lnbkRldmljZSA9IChjb25zdHJhaW50LCBkZXZpY2VJZCkgPT4ge1xuXHRpZihjb25zdHJhaW50ICYmIGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0XHQvXigodXNlcil8KGVudmlyb25tZW50KSkkL2kudGVzdChkZXZpY2VJZCkgPyB7ZmFjaW5nTW9kZTogZGV2aWNlSWR9IDoge2RldmljZUlkfSxcblx0XHRcdGNvbnN0cmFpbnQgPT09IHRydWUgPyB7fSA6IGNvbnN0cmFpbnQpO1xuXHR9XG5cdHJldHVybiBjb25zdHJhaW50O1xufTtcblxuLyoqXG4gKiBIZWxwZXJzIGZvciBNZWRpYURldmljZXMgYW5kIE1lZGlhU3RyZWFtQ29uc3RyYWludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcblx0LyoqXG5cdCAqIGZhY2luZ01vZGUgdmFsdWVzIHRvIHVzZSB3aXRoIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHt7VVNFUjogc3RyaW5nLCBFTlZJUk9OTUVOVDogc3RyaW5nfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgZmFjaW5nTW9kZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0VVNFUjogJ3VzZXInLFxuXHRcdFx0RU5WSVJPTk1FTlQ6ICdlbnZpcm9ubWVudCdcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEhlbHBlcnMgdG8gY3JlYXRlIGEgTWVkaWFTdHJlYW1Db25zdHJhaW50cyBjb25maWd1cmF0aW9uIG9iamVjdFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfHN0cmluZ30gW3ZpZGVvQ29uc3RyYWludHM9J0hEJ10gYSBib29sZWFuLCBhIHZpZGVvIGNvbnN0cmFpbnRzIG9iamVjdCBvciBhIHByZXNldCBpZCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW58TWVkaWFUcmFja0NvbnN0cmFpbnRzfSBbYXVkaW9Db25zdHJhaW50cz10cnVlXSBhIGJvb2xlYW4gb3IgYW4gYXVkaW8gY29uc3RyYWludHMgb2JqZWN0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1pZGVhbF0gdHlwZSBvZiBjb25zdHJhaW50cyBmb3IgdmlkZW8gd2hlbiB1c2luZyBhIHByZXNldCAoZXhhY3QsbWluLG1heCBvciBpZGVhbClcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbdmlkZW9EZXZpY2VJZF0gdmlkZW8gaW5wdXQgZGV2aWNlIGlkIG9yIGZhY2luZ01vZGVcblx0ICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBbYXVkaW9EZXZpY2VJZF0gYXVkaW8gaW5wdXQgZGV2aWNlIGlkXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9XG5cdCAqIEB0aHJvd3Mge0Vycm9yfVxuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5IRCBBdWRpb1ZpZGVvIHdpdGggZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKlxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5GdWxsIEhEIFZpZGVvIHdpdGhvdXQgYXVkaW8gdXNpbmcgZGVmYXVsdCBkZXZpY2VzPC9jYXB0aW9uPlxuXHQgKiBsZXQgbXlDb25zdHJhaW50cyA9IFJlYWNoLm1lZGlhLmNvbnN0cmFpbnRzKCdGSEQnLCBmYWxzZSwgJ2V4YWN0Jyk7XG5cdCAqIGNvbnNvbGUubG9nKG15Q29uc3RyYWludHMpO1xuXHQgKi9cblx0c3RhdGljIGNvbnN0cmFpbnRzICh2aWRlb0NvbnN0cmFpbnRzID0gJ0hEJywgYXVkaW9Db25zdHJhaW50cyA9IHRydWUsIHR5cGUgPSAnaWRlYWwnLCB2aWRlb0RldmljZUlkLCBhdWRpb0RldmljZUlkKSB7XG5cdFx0bGV0IHZpZGVvID0gdmlkZW9Db25zdHJhaW50cztcblx0XHRpZiAodHlwZW9mIHZpZGVvQ29uc3RyYWludHMgPT09ICdzdHJpbmcnKXtcblx0XHRcdGlmKHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSkge1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHByZXNldCA9IHByZXNldHNbdmlkZW9Db25zdHJhaW50cy50b1VwcGVyQ2FzZSgpXSxcblx0XHRcdFx0XHRkaW1Db25zdHJhaW50ID0gKGRpbSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoL14obWlufG1heHxleGFjdCkkLy50ZXN0KHR5cGUpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0XHRcdFx0clt0eXBlXSA9IHByZXNldFtkaW1dO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdG1pbjogcHJlc2V0Lm1pbiA/IHByZXNldHNbcHJlc2V0Lm1pbl1bZGltXSA6IHByZXNldFtkaW1dLFxuXHRcdFx0XHRcdFx0XHRpZGVhbDogcHJlc2V0W2RpbV0sXG5cdFx0XHRcdFx0XHRcdG1heDogcHJlc2V0Lm1heCA/IHByZXNldHNbcHJlc2V0Lm1heF1bZGltXSA6IHByZXNldFtkaW1dXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdHZpZGVvID0ge3dpZHRoOiBkaW1Db25zdHJhaW50KCd3JyksIGhlaWdodDogZGltQ29uc3RyYWludCgnaCcpfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBWaWRlbyBSZXNvbHV0aW9uIHByZXNldCAoVUhELCBGSEQsIEhELCBTVkdBLCBTRCwgVkdBKScpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2aWRlbyA9IF9hc3NpZ25EZXZpY2UodmlkZW8sIHZpZGVvRGV2aWNlSWQpO1xuXG5cdFx0Y29uc3QgYXVkaW8gPSBfYXNzaWduRGV2aWNlKGF1ZGlvQ29uc3RyYWludHMsIGF1ZGlvRGV2aWNlSWQpO1xuXG5cdFx0TG9nLmQoJ01lZGlhI2NvbnN0cmFpbnRzJywge3ZpZGVvLCBhdWRpb30pO1xuXHRcdHJldHVybiB7dmlkZW8sIGF1ZGlvfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHN0cmVhbSBkaXNwbGF5IG5vZGUgZGVwZW5kaW5nIG9uIHN0cmVhbSB0eXBlXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIFRoZSBNZWRpYVN0cmVhbSB0byBkaXNwbGF5XG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIENvbnRhaW5lciBub2RlIGZvciBzdHJlYW1zXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gcHJldmlvdXMgUHJldmlvdXMgbm9kZSBmb3IgdGhlIHN0cmVhbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3ZvbHVtZT0uN10gdGhlIGRlZmF1bHQgdm9sdW1lXG5cdCAqIEByZXR1cm4ge0VsZW1lbnR9XG5cdCAqL1xuXHRzdGF0aWMgYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCBjb250YWluZXIsIHByZXZpb3VzLCB2b2x1bWUgPSAuNykge1xuXHRcdGxldCB0YWdOYW1lID0gJyc7XG5cdFx0aWYobWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ3ZpZGVvJztcblx0XHR9IGVsc2UgaWYobWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0YWdOYW1lID0gJ2F1ZGlvJztcblx0XHR9XG5cdFx0TG9nLmQoJ01lZGlhI2F0dGFjaFN0cmVhbScsIG1lZGlhU3RyZWFtLCB0YWdOYW1lKTtcblx0XHRpZiAodGFnTmFtZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgX25vZGUgPSBwcmV2aW91cztcblx0XHRcdGlmICghX25vZGUgfHwgX25vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWdOYW1lKSB7XG5cdFx0XHRcdF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblx0XHRcdFx0X25vZGUuYXV0b3BsYXkgPSB0cnVlO1xuXHRcdFx0XHQvLyBzZXQgdGhlc2UgYXR0cmlidXRlcyBpbiBvcmRlciB0byBsYXVuY2ggdGhlIHZpZGVvIG9uIElPU1xuXHRcdFx0XHRfbm9kZS5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJyx0cnVlKTtcblx0XHRcdFx0X25vZGUuc2V0QXR0cmlidXRlKCdtdXRlZCcsdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29udGFpbmVyKSB7XG5cdFx0XHRcdGlmIChwcmV2aW91cyAmJiBwcmV2aW91cyAhPT0gX25vZGUpIHtcblx0XHRcdFx0XHRjb250YWluZXIucmVwbGFjZUNoaWxkKF9ub2RlLCBwcmV2aW91cyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIXByZXZpb3VzKSB7XG5cdFx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKF9ub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0X25vZGUuc3JjT2JqZWN0ID0gbWVkaWFTdHJlYW07XG5cdFx0XHQvLyBkaXNhYmxlZCBkb2Vzbid0IHNlZW0gdG8gYmUgbmVlZGVkXG5cdFx0XHQvLyBfbm9kZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0X25vZGUudm9sdW1lID0gdm9sdW1lO1xuXHRcdFx0cmV0dXJuIF9ub2RlO1xuXHRcdH1cblx0XHRyZXR1cm4gcHJldmlvdXM7XG5cdH1cblxuXHQvKipcblx0ICogTGlzdCBhdmFpbGFibGUgaW5wdXQgZGV2aWNlc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHthdWRpb2lucHV0OiBNZWRpYURldmljZUluZm9bXSwgdmlkZW9pbnB1dDogTWVkaWFEZXZpY2VJbmZvW119Pn1cblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogUmVhY2gubWVkaWEuZGV2aWNlcygpLnRoZW4oZGV2aWNlcyA9PiB7XG5cdCAqICAvLyBWaWRlbyBjYW1lcmFzXG5cdCAqICBjb25zb2xlLmxvZyhkZXZpY2VzLnZpZGVvaW5wdXQpO1xuXHQgKiAgLy8gQXVkaW8gbWljc1xuXHQgKiAgY29uc29sZS5sb2coZGV2aWNlcy5hdWRpb2lucHV0KTtcblx0ICogfSk7XG5cdCAqL1xuXHRzdGF0aWMgZGV2aWNlcyAoKSB7XG5cdFx0cmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpXG5cdFx0XHQudGhlbihkZXZpY2VzID0+IHtcblx0XHRcdFx0Y29uc3QgciA9IHt9O1xuXHRcdFx0XHRkZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IHtcblx0XHRcdFx0XHRpZiAoIXJbZGV2aWNlLmtpbmRdKSB7XG5cdFx0XHRcdFx0XHRyW2RldmljZS5raW5kXSA9IFtdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyW2RldmljZS5raW5kXS5wdXNoKGRldmljZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRMb2cuZCgnTWVkaWEjZGV2aWNlcycsIHIpO1xuXHRcdFx0XHRyZXR1cm4gcjtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ01lZGlhI2RldmljZXMnKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3V0aWwvTWVkaWEuanMiLCJpbXBvcnQgVXNlciBmcm9tICcuLi9jb3JlL1VzZXInO1xuaW1wb3J0IFJvb20gZnJvbSAnLi4vY29yZS9Sb29tJztcbmltcG9ydCBJbnZpdGUgZnJvbSAnLi4vY29yZS9JbnZpdGUnO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4uL2NvcmUvUGFydGljaXBhbnQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29yZS9NZXNzYWdlJztcbmltcG9ydCBSZW1vdGUgZnJvbSAnLi4vY29yZS9zdHJlYW0vUmVtb3RlJztcbmltcG9ydCB7QUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGhlIGV2ZW50cyBzdXBwb3J0ZWQgYnkge0BsaW5rIFJlYWNoI29ufVxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzL1JlYWNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVNFUl9BRERFRCBGaXJlZCB3aGVuIGEgbmV3IHVzZXIgaXMgcmVnaXN0ZXJlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVTRVJfQ0hBTkdFRCBGaXJlZCB3aGVuIGFuIGV4aXN0aW5nIHVzZXIgbG9ncyBpbiBvciBvdXQgb3IgY2hhbmdlcyBpcyBzdGF0dXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVU0VSX1JFTU9WRUQgRmlyZWQgd2hlbiBhIHVzZXIgaXMgdW5yZWdpc3RlcmVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUk9PTV9BRERFRCBGaXJlZCB3aGVuIGEgcm9vbSBpcyBjcmVhdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUk9PTV9DSEFOR0VEIEZpcmVkIHdoZW4gYSByb29tIHN0YXR1cyBpcyBjaGFuZ2luZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fUkVNT1ZFRCBGaXJlZCB3aGVuIGEgcm9vbSBpcyBjbG9zZWQgZGVmaW5pdGVseVxuICogQHByb3BlcnR5IHtzdHJpbmd9IElOVklURV9BRERFRCBGaXJlZCB3aGVuIGFuIGludml0ZSBpcyByZWNlaXZlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IElOVklURV9DSEFOR0VEIEZpcmVkIHdoZW4gYW4gaW52aXRlIHN0YXR1cyBpcyBtb2RpZmllZFxuICovXG5cbi8qKlxuICogVGhlIGV2ZW50cyBzdXBwb3J0ZWQgYnkge0BsaW5rIFJvb20jb259XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHMvUm9vbVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQ0lQQU5UX0FEREVEIEZpcmVkIHdoZW4gYSBuZXcgcGFydGljaXBhbnQgaXMgYWRkZWQgdG8gdGhlIHJvb20uIERvZXMgbm90IG1lYW4gaGUncyBjb25uZWN0ZWQgYnV0IHRoYXQgaGUncyBpbnZpdGVkIHRvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElDSVBBTlRfQ0hBTkdFRCBGaXJlZCB3aGVuIGEgcGFydGljaXBhbnQgY2hhbmdlcyBpcyBzdGF0dXMgKGVudGVyL2xlYXZlcyB0aGUgcm9vbSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUNJUEFOVF9SRU1PVkVEIEZpcmVkIHdoZW4gYSB1c2VyIGxlYXZlcyBkZWZpbml0ZWx5IG9yIGlzIGJhbm5lZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1FU1NBR0VfQURERUQgRmlyZWQgd2hlbiBhIG5ldyBpbnN0YW50IG1lc3NhZ2UgaXMgc2VudCB0byB0aGUgcm9vbVxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1FU1NBR0VfQ0hBTkdFRCBGaXJlZCB3aGVuIGFuIGluc3RhbnQgbWVzc2FnZSBpcyBlZGl0ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX1JFTU9WRUQgRmlyZWQgd2hlbiBhbiBpbnN0YW50IG1lc3NhZ2UgaXMgcmVtb3ZlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNUUkVBTV9QVUJMSVNIRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IHB1Ymxpc2hlcyBhIHN0cmVhbVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNUUkVBTV9VTlBVQkxJU0hFRCBGaXJlZCB3aGVuIGEgcGFydGljaXBhbnQgc3RvcHMgdGhlIHB1Ymxpc2hpbmcgb2YgaGlzIHN0cmVhbVxuICovXG5cbi8qKlxuICogVGhlIGV2ZW50cyBzdXBwb3J0ZWQgYnkge0BsaW5rIEludml0ZSNvbn1cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9JbnZpdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBQ0NFUFRFRCBGaXJlZCB3aGVuIHRoZSBpbnZpdGUgaGFzIGJlZW4gYWNjZXB0ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRUpFQ1RFRCBGaXJlZCB3aGVuIHRoZSBpbnZpdGUgaGFzIGJlZW4gYWNjZXB0ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQU5DRUxFRCBGaXJlZCB3aGVuIHRoZSBpbnZpdGUgaGFzIGJlZW4gY2FuY2VsZWRcbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSZW1vdGUjb259LlxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzL1N0cmVhbVxuICogQHByb3BlcnR5IHtzdHJpbmd9IE1VVEUgRmlyZWQgd2hlbiB0aGUgbXV0ZSBzdGF0dXMgb2YgdGhlIHN0cmVhbSBjaGFuZ2VzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0laRSBGaXJlZCB3aGVuIHRoZSBzaXplIG9mIHRoZSBzdHJlYW0gY2hhbmdlc1xuICovXG5cbi8qKlxuICogUGF0aCBjb25maWd1cmF0aW9uIGZvciBlYWNoIGV2ZW50XG4gKiBAaWdub3JlXG4gKiBAdHlwZSB7e319XG4gKi9cbmNvbnN0IHBhdGhzID0ge1xuXHQnVVNFUic6ICgpID0+ICd1c2VycycsXG5cdCdST09NJzogKCkgPT4gJ3Jvb21zJyxcblx0J0lOVklURSc6IHVzZXIgPT4ge1xuXHRcdGlmKCF1c2VyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGJlIGF1dGhlbnRpY2F0ZWQgdG8gbGlzdCB0aGUgaW52aXRlcycpO1xuXHRcdH1cblx0XHRyZXR1cm4gYF8vaW52aXRlcy8ke3VzZXIudWlkfWA7XG5cdH0sXG5cdCdQQVJUSUNJUEFOVCc6IHJvb20gPT4gYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzYCxcblx0J01FU1NBR0UnOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L21lc3NhZ2VzYCxcblx0J1NUUkVBTSc6IHJvb20gPT4gYF8vcm9vbXMvJHtyb29tLnVpZH0vc3RyZWFtc2Bcbn07XG5cbi8qKlxuICogT2JqZWN0IHR5cGUgY29uZmlndXJhdGlvbiBmb3IgZWFjaCBldmVudFxuICogQGlnbm9yZVxuICogQHR5cGUge3t9fVxuICovXG5jb25zdCBjbGFzc2VzID0ge1xuXHQnVVNFUic6IFVzZXIsXG5cdCdST09NJzogUm9vbSxcblx0J0lOVklURSc6IEludml0ZSxcblx0J1BBUlRJQ0lQQU5UJzogUGFydGljaXBhbnQsXG5cdCdNRVNTQUdFJzogTWVzc2FnZSxcblx0J1NUUkVBTSc6IFJlbW90ZVxufTtcblxuLyoqXG4gKiBQcml2YXRlIGNsYXNzIHRvIGFkZCBzdXBwb3J0IHRlc3QgbWV0aG9kc1xuICogQGNsYXNzIF9FdmVudHNcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgX0V2ZW50cyB7XG5cdGNvbnN0cnVjdG9yKGtleXMpIHtcblx0XHRrZXlzLmZvckVhY2goa2V5ID0+IHt0aGlzW2tleV0gPSBrZXk7fSk7XG5cdH1cblx0c3VwcG9ydHMoZXZlbnQpIHtcblx0XHRpZighZXZlbnQgfHwgdHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCB0aGlzW2V2ZW50XSAhPT0gZXZlbnQudG9VcHBlckNhc2UoKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBldmVudC4gVXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiAke0pTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHRoaXMpKX1gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0dG9QYXRoKGV2ZW50KSB7XG5cdFx0aWYodGhpcy5zdXBwb3J0cyhldmVudCkpIHtcblx0XHRcdHJldHVybiBwYXRoc1tldmVudC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18uKiQvLCAnJyldIHx8ICgoKSA9PiBudWxsKTtcblx0XHR9XG5cdH1cblx0dG9DbGFzcyhldmVudCkge1xuXHRcdGlmKHRoaXMuc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3Nlc1tldmVudC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18uKiQvLCAnJyldO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWNoID0gbmV3IF9FdmVudHMoW1xuXHQnVVNFUl9BRERFRCcsICdVU0VSX0NIQU5HRUQnLCAnVVNFUl9SRU1PVkVEJyxcblx0J1JPT01fQURERUQnLCAnUk9PTV9DSEFOR0VEJywgJ1JPT01fUkVNT1ZFRCcsXG5cdCdJTlZJVEVfQURERUQnLCAnSU5WSVRFX0NIQU5HRUQnXG5dKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCByb29tID0gbmV3IF9FdmVudHMoW1xuXHQnTUVTU0FHRV9BRERFRCcsICdNRVNTQUdFX0NIQU5HRUQnLCAnTUVTU0FHRV9SRU1PVkVEJyxcblx0J1BBUlRJQ0lQQU5UX0FEREVEJywgJ1BBUlRJQ0lQQU5UX0NIQU5HRUQnLCAnUEFSVElDSVBBTlRfUkVNT1ZFRCcsXG5cdCdTVFJFQU1fUFVCTElTSEVEJywgJ1NUUkVBTV9VTlBVQkxJU0hFRCdcbl0pO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmVhbSA9IG5ldyBfRXZlbnRzKFsnTVVURScsICdTSVpFJ10pO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IGludml0ZSA9IG5ldyBfRXZlbnRzKFtBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmaW5pdGlvbnMvRXZlbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiV2ViY29tXCIsXCJjb21tb25qc1wiOlwid2ViY29tL3dlYmNvbVwiLFwiY29tbW9uanMyXCI6XCJ3ZWJjb20vd2ViY29tXCIsXCJhbWRcIjpcIndlYmNvbS93ZWJjb21cIn1cbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtPTkdPSU5HLCBBQ0NFUFRFRCwgUkVKRUNURUQsIENBTkNFTEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vZGVmaW5pdGlvbnMvRXZlbnRzJztcblxuLyoqXG4gKiBVcGRhdGVcbiAqIEBwYXJhbSB7SW52aXRlfSBpbnZpdGUgVGhlIGludml0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyBUaGUgbmV3IHN0YXR1c1xuICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb249bnVsbF0gVGhlIHJlYXNvbiAoYSBtZXNzYWdlKVxuICogQHBhcmFtIHtvYmplY3R9IFtfZW5kZWQ9bnVsbF1cbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHJldHVybnMge1Byb21pc2U8SW52aXRlLCBFcnJvcj59XG4gKi9cbmNvbnN0IHVwZGF0ZSA9IChpbnZpdGUsIHN0YXR1cywgcmVhc29uID0gbnVsbCwgX2VuZGVkID0gbnVsbCkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0c3RhdHVzLFxuXHRcdHJlYXNvbixcblx0XHRfZW5kZWRcblx0fTtcblxuXHRpZihpbnZpdGUuc3RhdHVzICE9PSBPTkdPSU5HKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignVGhpcyBpbnZpdGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYW5zd2VyZWQnKSk7XG5cdH1cblx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy9pbnZpdGVzLyR7aW52aXRlLnRvfS8ke2ludml0ZS51aWR9YCwgdmFsdWVzKVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChwcm9wID0+IHtcblx0XHRcdFx0aW52aXRlW3Byb3BdID0gdmFsdWVzW3Byb3BdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gUm9vbS5nZXQoaW52aXRlLnJvb20pO1xuXHRcdH0pXG5cdFx0LnRoZW4ocm9vbSA9PiAoe3Jvb20sIGludml0ZX0pKVxuXHRcdC5jYXRjaChMb2cucignSW52aXRlX3VwZGF0ZScpKTtcbn07XG5cbi8qKlxuICogSW52aXRhdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZpdGUge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW4gaW52aXRlXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8b2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRsZXQgdmFsdWVzID0gc25hcERhdGE7XG5cdFx0aWYoc25hcERhdGEgJiYgc25hcERhdGEudmFsICYmIHR5cGVvZiBzbmFwRGF0YS52YWwgPT09ICdmdW5jdGlvbicpe1xuXHRcdFx0dmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCksIHt1aWQ6IHNuYXBEYXRhLm5hbWUoKSwgdG86IHNuYXBEYXRhLnJlZigpLnBhcmVudCgpLm5hbWUoKX0pO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBJbnZpdGUncyB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSBzdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlJ3Mgc2VuZGVyIHVpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5mcm9tID0gdmFsdWVzLmZyb207XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlZSdzIHVpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50byA9IHZhbHVlcy50bztcblx0XHQvKipcblx0XHQgKiBUaGUgaWQgb2YgdGhlIHJvb20gYXNzb2NpYXRlZCB0byB0aGUgaW52aXRlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJvb20gPSB2YWx1ZXMucm9vbTtcblx0XHQvKipcblx0XHQgKiBUaGUgaW52aXRhdGlvbiBzdGF0dXMgOlxuXHRcdCAqIC0gT05HT0lORyAtIFRoZSByZWNlaXZlciBoYXMgbm90IHlldCByZXNwb25kZWQgdG8gdGhlIGludml0YXRpb25cblx0XHQgKiAtIEFDQ0VQVEVEIC0gVGhlIHJlY2VpdmVyIGhhcyBhY2NlcHRlZCB0aGUgaW52aXRhdGlvblxuXHRcdCAqIC0gUkVKRUNURUQgLSBUaGUgcmVjZWl2ZXIgaGFzIHJlamVjdGVkIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogLSBDQU5DRUxFRCAtIFRoZSBzZW5kZXIgY2FuY2VsZWQgdGhlIGludml0YXRpb25cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblx0XHQvKipcblx0XHQgKiBJbnZpdGUgbWVzc2FnZS4gVGhpcyB3aWxsIGJlIGVpdGhlciBhIGN1c3RvbSBtZXNzYWdlIGlmIHRoZSBzdGF0dXMgaXMgT05HT0lORyBvciBhIHJlYXNvbiB3aGVuIHN0YXR1cyBpcyBDQU5DRUxFRHxSRUpFQ1RFRC5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudG9waWMgPSB2YWx1ZXMudG9waWM7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlIGNyZWF0aW9uIHRpbWVzdGFtcFxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fY3JlYXRlZCA9IHZhbHVlcy5fY3JlYXRlZDtcblx0XHQvKipcblx0XHQgKiBJbnZpdGUgZXhwaXJhdGlvbiB0aW1lc3RhbXBcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2VuZGVkID0gdmFsdWVzLl9lbmRlZDtcblx0XHQvKipcblx0XHQgKiBJbnZpdGUgZXZlbnRzIGNhbGxiYWNrc1xuXHRcdCAqIEB0eXBlIHt7fX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIElzIHRoaXMgaW52aXRhdGlvbiB3YWl0aW5nIGZvciBhIHJlcGx5ID9cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNPbkdvaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1cyA9PT0gT05HT0lORztcblx0fVxuXG5cdC8qKlxuXHQgKiBXYXMgdGhpcyBpbnZpdGF0aW9uIHJlamVjdGVkID9cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNSZWplY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IFJFSkVDVEVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhcyB0aGlzIGludml0YXRpb24gYWNjZXB0ZWQgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc0FjY2VwdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1cyA9PT0gQUNDRVBURUQ7XG5cdH1cblxuXHQvKipcblx0ICogV2FzIHRoaXMgaW52aXRhdGlvbiBjYW5jZWxlZCA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzQ2FuY2VsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBDQU5DRUxFRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYW5jZWxzIHRoZSBpbnZpdGF0aW9uLiBPbmx5IHRoZSBzZW5kZXIgY2FuIGNhbmNlbCB0aGUgaW52aXRhdGlvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIFRoZSByZWFzb24gdGhlIHNlbmRlciBpcyBjYW5jZWxpbmcgdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEludml0ZT59XG5cdCAqL1xuXHRjYW5jZWwocmVhc29uKSB7XG5cdFx0cmV0dXJuIHVwZGF0ZSh0aGlzLCBDQU5DRUxFRCwgcmVhc29uLCBEYXRhU3luYy50cygpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWplY3RzIHRoZSBpbnZpdGF0aW9uLiBPbmx5IHRoZSByZWNlaXZlciBjYW4gcmVqZWN0IHRoZSBpbnZpdGF0aW9uLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gVGhlIHJlYXNvbiB0aGUgcmVjZWl2ZXIgaXMgcmVqZWN0aW5nIHRoZSBpbnZpdGVcblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGU+fVxuXHQgKi9cblx0cmVqZWN0KHJlYXNvbikge1xuXHRcdHJldHVybiB1cGRhdGUodGhpcywgUkVKRUNURUQsIHJlYXNvbiwgRGF0YVN5bmMudHMoKSk7XG5cdH1cblxuXHQvKipcblx0ICogQWNjZXB0IHRoZSBpbnZpdGF0aW9uLiBPbmx5IHRoZSByZWNlaXZlciBjYW4gYWNjZXB0IHRoZSBpbnZpdGF0aW9uLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEludml0ZT59XG5cdCAqL1xuXHRhY2NlcHQoKSB7XG5cdFx0cmV0dXJuIHVwZGF0ZSh0aGlzLCBBQ0NFUFRFRCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzdGF0dXMgdXBkYXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgQ2FuIGJlOlxuXHQgKiAtIEFDQ0VQVEVEXG5cdCAqIC0gUkVKRUNURURcblx0ICogLSBDQU5DRUxFRFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgKi9cblx0b24oc3RhdHVzLCBjYWxsYmFjaykge1xuXHRcdGlmKEV2ZW50cy5pbnZpdGUuc3VwcG9ydHMoc3RhdHVzKSkge1xuXHRcdFx0Ly8gUmVnaXN0ZXIgY2FsbGJhY2tcblx0XHRcdGlmICghdGhpcy5fY2FsbGJhY2tzW3N0YXR1c10pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW3N0YXR1c10gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdLnB1c2goY2FsbGJhY2spO1xuXHRcdFx0Ly8gRGVmaW5lZCBsaXN0ZW5lciAmIHN1YnNjcmliZSBpZiBuZWVkZWRcblx0XHRcdGlmICghdGhpcy5fbGlzdGVuZXIpIHtcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEludml0ZSBzdGF0dXMgdXBkYXRlIGNhbGxiYWNrXG5cdFx0XHRcdCAqIEB0eXBlIHtmdW5jdGlvbn1cblx0XHRcdFx0ICogQHByaXZhdGVcblx0XHRcdFx0ICovXG5cdFx0XHRcdHRoaXMuX2xpc3RlbmVyID0gc25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHVwZGF0ZWQgPSBzbmFwRGF0YS52YWwoKTtcblx0XHRcdFx0XHRpZiAodXBkYXRlZCAhPT0gbnVsbCAmJiB1cGRhdGVkICE9PSB0aGlzLnN0YXR1cykge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0dXMgPSB1cGRhdGVkO1xuXHRcdFx0XHRcdFx0KHRoaXMuX2NhbGxiYWNrc1t1cGRhdGVkXSB8fCBbXSkuZm9yRWFjaChjYiA9PiB7XG5cdFx0XHRcdFx0XHRcdGNiKHRoaXMpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHREYXRhU3luYy5vbihgXy9pbnZpdGVzLyR7dGhpcy50b30vJHt0aGlzLnVpZH0vc3RhdHVzYCwgJ3ZhbHVlJywgdGhpcy5fbGlzdGVuZXIuYmluZCh0aGlzKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGFsbCBzdGF0dXMgY2hhbmdlIGV2ZW50c1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuXHQgKi9cblx0b25TdGF0dXNDaGFuZ2UoY2FsbGJhY2spIHtcblx0XHRbQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRF0uZm9yRWFjaChldmVudCA9PiB7XG5cdFx0XHR0aGlzLm9uKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogVW4tcmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzdGF0dXMgdXBkYXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbc3RhdHVzXSBDYW4gYmU6XG5cdCAqIC0gQUNDRVBURURcblx0ICogLSBSRUpFQ1RFRFxuXHQgKiAtIENBTkNFTEVEXG5cdCAqIC0gbnVsbCBUaGlzIHdpbGwgdW4tcmVnaXN0ZXIgYWxsIGNhbGxiYWNrc1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdXG5cdCAqL1xuXHRvZmYoc3RhdHVzLCBjYWxsYmFjaykge1xuXHRcdGlmKCFzdGF0dXMpIHtcblx0XHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHRcdH0gZWxzZSBpZih0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXSkge1xuXHRcdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdFx0Y29uc3QgaWR4ID0gdGhpcy5fY2FsbGJhY2tzW3N0YXR1c10uZmluZEluZGV4KGNiID0+IGNiID09PSBjYWxsYmFjayk7XG5cdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX2NhbGxiYWNrcy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW3N0YXR1c10gPSBbXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoIVtDQU5DRUxFRCwgQUNDRVBURUQsIFJFSkVDVEVEXS5zb21lKGV2ZW50ID0+IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gJiYgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5sZW5ndGggPiAwKSl7XG5cdFx0XHREYXRhU3luYy5vZmYoYF8vaW52aXRlcy8ke3RoaXMudG99LyR7dGhpcy51aWR9L3N0YXR1c2AsICd2YWx1ZScpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVbi1yZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhbGwgc3RhdHVzIGNoYW5nZSBldmVudHNcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVxuXHQgKi9cblx0b2ZmU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKSB7XG5cdFx0aWYoIWNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLm9mZigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRbQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRF0uZm9yRWFjaChldmVudCA9PiB7XG5cdFx0XHRcdHRoaXMub2ZmKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIHRoZSBpbnZpdGF0aW9uICYgYWRkIHRoZSB1c2VyIHRvIHRoZSBwYXJ0aWNpcGFudHMgbGlzdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1VzZXJ9IGludml0ZWUgVGhlIHVzZXIgdG8gaW52aXRlXG5cdCAqIEBwYXJhbSB7Um9vbX0gcm9vbSBUaGUgcm9vbSB0byBpbnZpdGUgdGhlIHVzZXIgdG9cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXSBBIG1lc3NhZ2UgZm9yIHRoZSBpbnZpdGVlXG5cdCAqL1xuXHRzdGF0aWMgc2VuZChpbnZpdGVlLCByb29tLCBtZXNzYWdlID0gbnVsbCkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gc2VuZCBhbiBpbnZpdGUuJykpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludml0ZU1ldGFEYXRhID0ge1xuXHRcdFx0ZnJvbTogY2FjaGUudXNlci51aWQsXG5cdFx0XHRyb29tOiByb29tLnVpZCxcblx0XHRcdHN0YXR1czogT05HT0lORyxcblx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpLFxuXHRcdFx0dG9waWM6IG1lc3NhZ2Vcblx0XHR9O1xuXG5cdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goYF8vaW52aXRlcy8ke2ludml0ZWUudWlkfWAsIGludml0ZU1ldGFEYXRhKVxuXHRcdFx0LnRoZW4oaW52aXRlUmVmID0+IHtcblx0XHRcdFx0Y29uc3QgaW52aXRlSWQgPSBpbnZpdGVSZWYubmFtZSgpO1xuXHRcdFx0XHRyZXR1cm4gbmV3IEludml0ZShPYmplY3QuYXNzaWduKHt1aWQ6IGludml0ZUlkLCB0bzogaW52aXRlZS51aWR9LCBpbnZpdGVNZXRhRGF0YSkpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignSW52aXRlI3NlbmQnKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL0ludml0ZS5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjEnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuaW1wb3J0IFJvb20gZnJvbSAnLi9Sb29tJztcbmltcG9ydCBEZXZpY2UgZnJvbSAnLi9EZXZpY2UnO1xuaW1wb3J0IHtDT05ORUNURUQsIE5PVF9DT05ORUNURUR9IGZyb20gJy4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IFdlYmNvbSBmcm9tICd3ZWJjb20vd2ViY29tJztcblxubGV0IGluaXRpYWxpemluZyA9IGZhbHNlO1xuXG4vKipcbiAqIFVzZXIgaW5mb3JtYXRpb25zXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgdXNlclxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fG9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCkpO1xuXHRcdC8qKlxuXHRcdCAqIFVzZXIncyB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gc25hcERhdGEubmFtZSgpO1xuXHRcdC8qKlxuXHRcdCAqIFVzZXIncyBkaXNwbGF5IG5hbWVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMubmFtZSA9IHZhbHVlcy5uYW1lO1xuXHRcdC8qKlxuXHRcdCAqIFVzZXIncyBzdGF0dXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblx0XHQvKipcblx0XHQgKiBVc2VyJ3MgbGFzdCBrbm93IGNvbm5lY3Rpb24gdHNcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMubGFzdFNlZW4gPSB2YWx1ZXMubGFzdFNlZW47XG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGFuIGFub255bW91cyB1c2VyXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5hbm9ueW1vdXMgPSAvXmFub255bW91cy8udGVzdCh0aGlzLnVpZCk7XG5cdFx0Ly8gVE9ETyAjRmVhdDogQWRkICdleHRyYScgcHJvcGVydHkgZm9yIHVucmVzdHJpY3RlZCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uID9cblx0fVxuXG5cdC8qKlxuXHQgKiBJbnZpdGUgYSB1c2VyIGRpcmVjdGx5LiBUaGlzIHdpbGwgY3JlYXRlIGEgbmV3IFJvb20sIGxvZyB5b3UgaW4gaXQgJiBpbnZpdGUgdGhlIHVzZXIuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gYSBtZXNzYWdlIHRvIGFkZCB0byB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8e3Jvb206IFJvb20sIGludml0ZTogSW52aXRlfSwgRXJyb3I+fVxuXHQgKi9cblx0aW52aXRlKG1lc3NhZ2UpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGludml0ZSBhbm90aGVyIFVzZXIuJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gUm9vbS5jcmVhdGUoYCR7Y2FjaGUudXNlci51aWR9LSR7dGhpcy51aWR9YClcblx0XHRcdC50aGVuKHJvb20gPT4ge1xuXHRcdFx0XHRyZXR1cm4gcm9vbS5pbnZpdGUoW3RoaXNdLCBudWxsLCBtZXNzYWdlKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0cmV0dXJuIHtyb29tOiBkYXRhLnJvb20sIGludml0ZTogZGF0YS5pbnZpdGVzWzBdfTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1VzZXJ+aW52aXRlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpc3QgVXNlcnMncyBkZXZpY2VzLiBPbmx5IGZvciBjdXJyZW50IHVzZXIuXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8RGV2aWNlW10sIEVycm9yPn1cblx0ICovXG5cdGRldmljZXMoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoYF8vZGV2aWNlcy8ke3RoaXMudWlkfWAsIERldmljZSk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdCB0aGUgY3VycmVudCB1c2VyXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHVzZXIncyB1aWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgdXNlcidzIGRpc3BsYXkgbmFtZVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgaW5pdCAodWlkLCBuYW1lKSB7XG5cdFx0aWYoIWluaXRpYWxpemluZykge1xuXHRcdFx0aW5pdGlhbGl6aW5nID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGQgPSB7c3RhdHVzOiBDT05ORUNURUQsIGxhc3RTZWVuOiBEYXRhU3luYy50cygpfTtcblx0XHRcdGlmKG5hbWUpIHtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbihkLCB7bmFtZX0pO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGRldmljZUlkID0gV2ViY29tLklOVEVSTkFMLlBlcnNpc3RlbnRTdG9yYWdlLmdldCh1aWQpO1xuXHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgdXNlcnMvJHt1aWR9YCwgZClcblx0XHRcdFx0Ly8gUmVnaXN0ZXIgY3VycmVudCBkZXZpY2Vcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGRldmljZU1ldGFkYXRhID0ge1xuXHRcdFx0XHRcdFx0c3RhdHVzOiBDT05ORUNURUQsXG5cdFx0XHRcdFx0XHRzZGs6IHtcblx0XHRcdFx0XHRcdFx0cmVhY2g6IFNES19WRVJTSU9OLFxuXHRcdFx0XHRcdFx0XHR3ZWJjb206IFdlYmNvbS5TREtfVkVSU0lPTlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0aWYoZGV2aWNlSWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYF8vZGV2aWNlcy8ke3VpZH0vJHtkZXZpY2VJZH1gLCBkZXZpY2VNZXRhZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBEYXRhU3luYy5wdXNoKGBfL2RldmljZXMvJHt1aWR9YCwgZGV2aWNlTWV0YWRhdGEpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBTYXZlIGRldmljZVxuXHRcdFx0XHQudGhlbihkZXZpY2VSZWYgPT4ge1xuXHRcdFx0XHRcdGlmICghZGV2aWNlSWQpIHtcblx0XHRcdFx0XHRcdGRldmljZUlkID0gZGV2aWNlUmVmLm5hbWUoKTtcblx0XHRcdFx0XHRcdFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5zZXQodWlkLCBkZXZpY2VJZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhY2hlLmRldmljZSA9IGRldmljZUlkO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBBZGQgb25EaXNjb25uZWN0IGFjdGlvbnNcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdC8vIERpc2Nvbm5lY3QgZGV2aWNlXG5cdFx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL2RldmljZXMvJHt1aWR9LyR7ZGV2aWNlSWR9L3N0YXR1c2ApLnNldChOT1RfQ09OTkVDVEVEKTtcblx0XHRcdFx0XHQvLyBVcGRhdGUgdXNlciBzdGF0dXNcblx0XHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYHVzZXJzLyR7dWlkfWApLnVwZGF0ZSh7XG5cdFx0XHRcdFx0XHRzdGF0dXM6IE5PVF9DT05ORUNURUQsXG5cdFx0XHRcdFx0XHRsYXN0U2VlbjogRGF0YVN5bmMudHMoKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBHZXQgdXNlclxuXHRcdFx0XHQudGhlbigoKSA9PiBVc2VyLmdldCh1aWQpKVxuXHRcdFx0XHQudGhlbih1c2VyID0+IHtcblx0XHRcdFx0XHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm4gdXNlcjtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRcdExvZy5lKGUpO1xuXHRcdFx0XHRcdGluaXRpYWxpemluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBVc2VyLmdldCh1aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERpc2Nvbm5lY3QgdGhlIGN1cnJlbnQgdXNlclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIGN1cnJlbnQgdXNlclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHN0YXRpYyBkaXNjb25uZWN0KHVzZXIpIHtcblx0XHQvLyBDYW5jZWwgb25EaXNjb25uZWN0XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL2RldmljZXMvJHt1c2VyLnVpZH0vJHtjYWNoZS5kZXZpY2V9L3N0YXR1c2ApLmNhbmNlbCgpO1xuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgdXNlcnMvJHt1c2VyLnVpZH1gKS5jYW5jZWwoKTtcblxuXHRcdGlmKHVzZXIuYW5vbnltb3VzKSB7XG5cdFx0XHRyZXR1cm4gRGF0YVN5bmMucmVtb3ZlKGBfL2RldmljZXMvJHt1c2VyLnVpZH1gKVxuXHRcdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy5nZXQoYF8vaW52aXRlcy8ke3VzZXIudWlkfWApKVxuXHRcdFx0XHQudGhlbihpbnZpdGVzID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbnZpdGVJZHMgPSBbXTtcblx0XHRcdFx0XHRpbnZpdGVzLmZvckVhY2goaW52aXRlID0+IHtcblx0XHRcdFx0XHRcdGludml0ZUlkcy5wdXNoKGludml0ZS5uYW1lKCkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChpbnZpdGVJZHMubWFwKGludml0ZUlkID0+IERhdGFTeW5jLnJlbW92ZShgXy9pbnZpdGVzLyR7dXNlci51aWR9LyR7aW52aXRlSWR9YCkpKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gVE9ETyByZWZhY3RvciBkYXRhIG1vZGVsIGZvciBpbnZpdGVzIHNvIHdlIGNhbiBkZWxldGUgXy9pbnZpdGVzLyR7dXNlci51aWR9XG5cdFx0XHRcdC8vIC50aGVuKCgpID0+IERhdGFTeW5jLnJlbW92ZShgXy9pbnZpdGVzLyR7dXNlci51aWR9YCkpXG5cdFx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnJlbW92ZShgdXNlcnMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5yZW1vdmUodXNlci51aWQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goTG9nLnIoJ1VzZXIjYW5vbnltb3VzX2Rpc2Nvbm5lY3QnKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5zZXQoYF8vZGV2aWNlcy8ke3VzZXIudWlkfS8ke2NhY2hlLmRldmljZX0vc3RhdHVzYCwgTk9UX0NPTk5FQ1RFRClcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLmdldChgXy9kZXZpY2VzLyR7dXNlci51aWR9YCkpXG5cdFx0XHQudGhlbihkZXZpY2VzID0+IHtcblx0XHRcdFx0Ly8gT25seSBjaGFuZ2UgdXNlcidzIHN0YXR1cyBpZiBubyBvdGhlciBkZXZpY2UgY29ubmVjdGVkXG5cdFx0XHRcdGNvbnN0IGhhc0Nvbm5lY3RlZERldmljZXMgPSBkZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKG5ldyBSZWdFeHAoYF4ke0NPTk5FQ1RFRH0kYCkpLnRlc3QoZGV2aWNlLnZhbCgpLnN0YXR1cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZighaGFzQ29ubmVjdGVkRGV2aWNlcykge1xuXHRcdFx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYHVzZXJzLyR7dXNlci51aWR9YCwge3N0YXR1czogTk9UX0NPTk5FQ1RFRH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignVXNlciNkaXNjb25uZWN0JykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHVzZXIgYnkgaXRzIHVpZFxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBUaGUgdXNlcidzIHVpZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0KHVpZCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5nZXQoYHVzZXJzLyR7dWlkfWApXG5cdFx0LnRoZW4oc25hcERhdGEgPT4gc25hcERhdGEgPyBuZXcgVXNlcihzbmFwRGF0YSkgOiBudWxsKVxuXHRcdC5jYXRjaChMb2cucignVXNlciNnZXQnKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1VzZXIuanMiLCIvKipcbiAqIFRoZSBhdmFpbGFibGUgc3RyZWFtIHR5cGVzXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTdHJlYW1UeXBlc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVRElPPSdhdWRpbycgLSBBdWRpbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWSURFTz0ndmlkZW8nIC0gVmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVVESU9fVklERU89J2F1ZGlvLXZpZGVvJyAtIEF1ZGlvIGFuZCB2aWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTQ1JFRU5fU0hBUklORz0nc2NyZWVuLXNoYXJpbmcnIC0gU2NyZWVuLXNoYXJpbmcgY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKi9cblxuLyoqXG4qIEF1ZGlvIGNvbW11bmljYXRpb24gc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IEFVRElPID0gJ2F1ZGlvJztcbi8qKlxuKiBWaWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBWSURFTyA9ICd2aWRlbyc7XG4vKipcbiogQXVkaW8gYW5kIHZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IEFVRElPX1ZJREVPID0gJ2F1ZGlvLXZpZGVvJztcbi8qKlxuKiBTY3JlZW4tc2hhcmluZyBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgU0NSRUVOX1NIQVJJTkcgPSAnc2NyZWVuLXNoYXJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7QVVESU8sIFZJREVPLCBBVURJT19WSURFTywgU0NSRUVOX1NIQVJJTkd9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL1N0cmVhbVR5cGVzLmpzIiwiaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcblxuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG4vKipcbiAqIEluc3RhbnQgTWVzc2FnZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG1lc3NhZ2Vcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxPYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByb29tSWQgVGhlIG1lc3NhZ2UncyByb29tIGlkXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSwgcm9vbUlkKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCkpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBtZXNzYWdlIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSBzbmFwRGF0YS5uYW1lKCk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gdWlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJvb21JZCA9IHJvb21JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgbWVzc2FnZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50ZXh0ID0gdmFsdWVzLnRleHQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIG1lc3NhZ2Ugc2VuZGVyXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmZyb20gPSB2YWx1ZXMuZnJvbTtcblx0XHQvKipcblx0XHQgKiBKb2luZWQgZGF0ZVxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fY3JlYXRlZCA9IHZhbHVlcy5fY3JlYXRlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBFZGl0IHRoZSB0ZXh0IG1lc3NhZ2UuIE9ubHkgdGhlIHNlbmRlciBvciBtb2RlcmF0b3Ivb3duZXIgb2YgdGhlIHJvb20gY2FuIGVkaXQgYSBtZXNzYWdlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3VGV4dCBUaGUgbmV3IG1lc3NhZ2Vcblx0ICogQHJldHVybnMge1Byb21pc2U8TWVzc2FnZT59XG5cdCAqL1xuXHRlZGl0KG5ld1RleHQpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGAvcm9vbXMvJHt0aGlzLnJvb21JZH0vbWVzc2FnZXMvJHt0aGlzLnVpZH1gLCB7dGV4dDogbmV3VGV4dH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMudGV4dCA9IG5ld1RleHQ7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignTWVzc2FnZX5lZGl0JykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgdGV4dCBtZXNzYWdlLiBPbmx5IHRoZSBzZW5kZXIgb3IgbW9kZXJhdG9yL293bmVyIG9mIHRoZSByb29tIGNhbiByZW1vdmUgYSBtZXNzYWdlLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHJlbW92ZSgpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMucmVtb3ZlKGAvcm9vbXMvJHt0aGlzLnJvb21JZH0vbWVzc2FnZXMvJHt0aGlzLnVpZH1gKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZXNzYWdlfnJlbW92ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0ge1Jvb219IHJvb20gVGhlIHJvb20gdG8gc2VuZCB0aGUgbWVzc2FnZSB0b1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgbWVzc2FnZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2U+fVxuXHQgKi9cblx0c3RhdGljIHNlbmQocm9vbSwgdGV4dCkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3Qgc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIFJvb20gd2l0aG91dCBhIFVzZXIgYmVpbmcgbG9nZ2VkIGluLicpKTtcblx0XHR9XG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdGZyb206IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0X2NyZWF0ZWQ6IERhdGFTeW5jLnRzKCksXG5cdFx0XHR0ZXh0XG5cdFx0fTtcblx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlc2AsIGRhdGEpXG5cdFx0XHQudGhlbihwdXNoUmVmID0+IERhdGFTeW5jLmdldChgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlcy8ke3B1c2hSZWYubmFtZSgpfWApKVxuXHRcdFx0LnRoZW4oc25hcERhdGEgPT4gbmV3IE1lc3NhZ2Uoc25hcERhdGEsIHJvb20udWlkKSlcblx0XHRcdC5jYXRjaChMb2cucignTWVzc2FnZSNzZW5kJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9NZXNzYWdlLmpzIiwiLyoqXG4gKiB7QGxpbmsgUm9vbX0gcGFydGljaXBhbnRcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljaXBhbnQge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgcGFydGljaXBhbnRcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxPYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBUaGUgcGFydGljaXBhbnQgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBUaGUgUGFydGljaXBhbnQncyByb2xlLiBDYW4gYmU6XG5cdFx0ICogLSBPV05FUjogdGhlIG93bmVyL2NyZWF0b3Igb2YgdGhlIHtAbGluayBSb29tfVxuXHRcdCAqIC0gTU9ERVJBVE9SOiBhIHBhcnRpY2lwYW50IHdpdGgge0BsaW5rIFJvb219IG1hbmFnZW1lbnQgUmlnaHRzXG5cdFx0ICogLSBOT05FOiBiYXNpYyBwYXJ0aWNpcGFudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb2xlID0gdmFsdWVzLnJvbGU7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHBhcnRpY2lwYW50IHN0YXR1cyBDYW4gYmU6XG5cdFx0ICogLSBOT1RfQ09OTkVDVEVEOiB0aGUgcGFydGljaXBhbnQgZGlkIG5vdCBhY2NlcHQgdGhlIGludml0YXRpb24geWV0IGFuZC9vciBkaWQgbm90IGpvaW4gdGhlIHtAbGluayBSb29tfSB5ZXRcblx0XHQgKiAtIENPTk5FQ1RFRDogdGhlIHBhcnRpY2lwYW50IGlzIGluIHRoZSB7QGxpbmsgUm9vbX1cblx0XHQgKiAtIFdBU19DT05ORUNURUQ6IHRoZSBwYXJ0aWNpcGFudCBsZWZ0IHRoZSB7QGxpbmsgUm9vbX1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblx0XHQvKipcblx0XHQgKiBKb2luZWQgZGF0ZVxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fam9pbmVkID0gdmFsdWVzLl9qb2luZWQ7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1BhcnRpY2lwYW50LmpzIiwiaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi4vdXRpbC9Mb2cnO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4uLy4uL2RlZmluaXRpb25zL0V2ZW50cyc7XG5cbi8qKlxuICogQSBwdWJsaXNoZWQgU3RyZWFtXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW90ZSB7XG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcblx0XHRMb2cuZCgnUmVtb3Rlfm5ldycsIHZhbHVlcyk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGUgcm9vbSB0aGUgc3RyZWFtIGlzIHB1Ymxpc2hlZCBpblxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tSWQgPSB2YWx1ZXMucm9vbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhpcyBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoZSBwdWJsaXNoZXIgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5mcm9tID0gdmFsdWVzLmZyb207XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmRldmljZSA9IHZhbHVlcy5kZXZpY2U7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmhlaWdodCA9IHZhbHVlcy5oZWlnaHQ7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLndpZHRoID0gdmFsdWVzLndpZHRoO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBsb2NhbCBET00gY29udGFpbmVyIGVsZW1lbnQgd2hlcmUgdGhlIHtAbGluayBMb2NhbH5tZWRpYX0gaXMgZGlzcGxheWVkXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICovXG5cdFx0dGhpcy5jb250YWluZXIgPSBjYWNoZS5jb25maWcucmVtb3RlU3RyZWFtQ29udGFpbmVyO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IGJvb2xlYW4sIHZpZGVvOiBib29sZWFufX1cblx0XHQgKi9cblx0XHR0aGlzLm11dGVkID0gT2JqZWN0LmFzc2lnbih7YXVkaW86IGZhbHNlLCB2aWRlbzogZmFsc2V9LCB2YWx1ZXMubXV0ZWQpO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgY2FsbGJhY2tzIGZvciBtdXRlIHN0YXR1cyBjaGFuZ2Vcblx0XHQgKiBAdHlwZSB7e01VVEU6IGZ1bmN0aW9uW119fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdFx0LyoqXG5cdFx0ICogUGVlckNvbm5lY3Rpb25zIGFzc29jaWF0ZWQgdG8gdGhpcyByZW1vdGUgc3RyZWFtXG5cdFx0ICogQHR5cGUge1BlZXJDb25uZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMucGVlckNvbm5lY3Rpb24gPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIERPTSBlbGVtZW50IHdoZXJlIHRoZSBNZWRpYVN0cmVhbSBpcyBkaXNwbGF5ZWRcblx0ICogQHJldHVybnMge0VsZW1lbnR9XG5cdCAqL1xuXHRnZXQgbm9kZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5wZWVyQ29ubmVjdGlvbiA/IHRoaXMucGVlckNvbm5lY3Rpb24ubm9kZSA6IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogU3Vic2NyaWJlIHRvIHRoZSBzdHJlYW1cblx0ICogQHBhcmFtIHtFbGVtZW50fSBbcmVtb3RlU3RyZWFtQ29udGFpbmVyXSBUaGUgZWxlbWVudCB0aGUgc3RyZWFtIGlzIGF0dGFjaGVkIHRvLiBDYW4gYmUgbnVsbCBpZiBhbHJlYWR5IHNwZWNpZmllZCBpbiBSZWFjaENvbmZpZy5cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRzdWJzY3JpYmUocmVtb3RlU3RyZWFtQ29udGFpbmVyKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBzdWJzY3JpYmUgdG8gYSBSb29tXFwncyBzdHJlYW0uJykpO1xuXHRcdH1cblx0XHQvLyBUT0RPOiBUZXN0IGlmIG5vdCBhbHJlYWR5IHN1YnNjcmliZWQgP1xuXHRcdHRoaXMuY29udGFpbmVyID0gcmVtb3RlU3RyZWFtQ29udGFpbmVyIHx8IGNhY2hlLmNvbmZpZy5yZW1vdGVTdHJlYW1Db250YWluZXI7XG5cdFx0TG9nLmQoJ1JlbW90ZX5zdWJzY3JpYmUnLCB0aGlzLmNvbnRhaW5lcik7XG5cdFx0cmV0dXJuIGNhY2hlLnBlZXJDb25uZWN0aW9ucy5hbnN3ZXIodGhpcywgdGhpcy5jb250YWluZXIpXG5cdFx0XHQudGhlbihwYyA9PiB7dGhpcy5wZWVyQ29ubmVjdGlvbiA9IHBjO30pXG5cdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy51cGRhdGUoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCwge1xuXHRcdFx0XHR0bzogY2FjaGUudXNlci51aWQsXG5cdFx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpXG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9LyR7Y2FjaGUuZGV2aWNlfWApLnJlbW92ZSgpO1xuXHRcdFx0XHRsZXQgc3Vic2NyaWJlZCA9IGZhbHNlO1xuXHRcdFx0XHREYXRhU3luYy5vbihgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCwgJ3ZhbHVlJywgc25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHNuYXBEYXRhLnZhbCgpO1xuXHRcdFx0XHRcdExvZy5kKCdSZW1vdGV+dXBkYXRlZCcsIHZhbHVlcyk7XG5cdFx0XHRcdFx0aWYodmFsdWVzKSB7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgdHlwZVxuXHRcdFx0XHRcdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0XHRcdFx0XHQvL3VwZGF0ZSBzdHJlYW0gc2l6ZVxuXHRcdFx0XHRcdFx0Y29uc3QgaGVpZ2h0ID0gdmFsdWVzLmhlaWdodDtcblx0XHRcdFx0XHRcdGNvbnN0IHdpZHRoID0gdmFsdWVzLndpZHRoO1xuXHRcdFx0XHRcdFx0aWYoKGhlaWdodCB8fCB3aWR0aCkgJiYgKGhlaWdodCAhPT0gdGhpcy5oZWlnaHQgfHwgd2lkdGggIT09IHRoaXMuaGVpZ2h0KSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IHZhbHVlcy5oZWlnaHQ7XG5cdFx0XHRcdFx0XHRcdHRoaXMud2lkdGggPSB2YWx1ZXMud2lkdGg7XG5cdFx0XHRcdFx0XHRcdExvZy53KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLlNJWkVdKTtcblx0XHRcdFx0XHRcdFx0KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLlNJWkVdIHx8IFtdKS5mb3JFYWNoKGNiID0+IGNiKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgbXV0ZSBzdGF0dXNcblx0XHRcdFx0XHRcdGNvbnN0IG11dGVkID0gdmFsdWVzLm11dGVkO1xuXHRcdFx0XHRcdFx0aWYobXV0ZWQgJiYgKG11dGVkLmF1ZGlvICE9PSB0aGlzLm11dGVkLmF1ZGlvIHx8IG11dGVkLnZpZGVvICE9PSB0aGlzLm11dGVkLnZpZGVvKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm11dGVkID0gbXV0ZWQ7XG5cdFx0XHRcdFx0XHRcdExvZy53KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLk1VVEVdKTtcblx0XHRcdFx0XHRcdFx0KHRoaXMuX2NhbGxiYWNrc1tFdmVudHMuc3RyZWFtLk1VVEVdIHx8IFtdKS5mb3JFYWNoKGNiID0+IGNiKHRoaXMubXV0ZWQpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1YnNjcmliZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihzdWJzY3JpYmVkKSB7XG5cdFx0XHRcdFx0XHRMb2cuaSgnUmVtb3RlI3JlbW92ZWQnLCB0aGlzKTtcblx0XHRcdFx0XHRcdHRoaXMuX2Nsb3NlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZW1vdGV+c3Vic2NyaWJlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIHN0cmVhbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdHVuU3Vic2NyaWJlKCkge1xuXHRcdHJldHVybiB0aGlzLl9jbG9zZShmYWxzZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgdGhlIHJlbW90ZSBTdHJlYW1cblx0ICogQHBhcmFtIHtib29sZWFufSByZW1vdGUgQ2xvc2UgaXMgaW5pdGlhdGVkIGJ5IHB1Ymxpc2hlclxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jbG9zZShyZW1vdGUpIHtcblx0XHQvLyBDYW5jZWwgb25EaXNjb25uZWN0XG5cdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9LyR7Y2FjaGUuZGV2aWNlfWApLmNhbmNlbCgpO1xuXHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIHN0cmVhbSBtb2RpZmljYXRpb25zXG5cdFx0RGF0YVN5bmMub2ZmKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gLCAndmFsdWUnKTtcblx0XHQvLyBVbi1zdWJzY3JpYmVcblx0XHQhcmVtb3RlICYmIERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gKTtcblx0XHQvLyBDbG9zZSBQZWVyQ29ubmVjdGlvblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGUucGVlckNvbm5lY3Rpb25zLmNsb3NlKHRoaXMudWlkLCB0aGlzLmRldmljZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lICh7QGxpbmsgRXZlbnRzL1N0cmVhbX0pXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmb3IgdGhlIGV2ZW50XG5cdCAqL1xuXHRvbihldmVudCwgY2FsbGJhY2spIHtcblx0XHRpZihFdmVudHMuc3RyZWFtLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0aWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9TdHJlYW19KVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBjYWxsYmFjayBmb3IgdGhlIGV2ZW50XG5cdCAqL1xuXHRvZmYoZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0aWYoIWV2ZW50KSB7XG5cdFx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0XHR9IGVsc2UgaWYoRXZlbnRzLnN0cmVhbS5zdXBwb3J0cyhldmVudCkpIHtcblx0XHRcdGlmKCFjYWxsYmFjaykge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5maWx0ZXIoY2IgPT4gY2IgIT09IGNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuXHQgKi9cblx0dXBkYXRlKHZhbHVlcykge1xuXHRcdE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge3RoaXNba2V5XSA9IHZhbHVlc1trZXldO30pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9zdHJlYW0vUmVtb3RlLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YnJvd3NlckRldGFpbHMsIGJyb3dzZXJTaGltfSBmcm9tICd3ZWJydGMtYWRhcHRlcic7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IGJyb3dzZXIncyBpbmZvc1xuICogQHR5cGVkZWYge09iamVjdH0gQnJvd3NlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgLSBjdXJyZW50IGJyb3dzZXIncyBuYW1lXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ZlcnNpb25dIC0gY3VycmVudCBicm93c2VyJ3MgdmVyc2lvblxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5WZXJzaW9uXSAtIGN1cnJlbnQgYnJvd3NlcidzIG1pbmltdW0gc3VwcG9ydGVkIHZlcnNpb25cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29tcGF0aWJsZSAtIGlzIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0ZWQgP1xuICovXG5leHBvcnQgY29uc3QgYnJvd3NlciA9IE9iamVjdC5hc3NpZ24oe1xuXHRjb21wYXRpYmxlOiAhL1xccy8udGVzdChicm93c2VyRGV0YWlscy5icm93c2VyKSAmJlxuXHRcdCghYnJvd3NlckRldGFpbHMubWluVmVyc2lvbiB8fCBicm93c2VyRGV0YWlscy52ZXJzaW9uID49IGJyb3dzZXJEZXRhaWxzLm1pblZlcnNpb24pXG59LCBicm93c2VyRGV0YWlscyk7XG5cbmNvbnN0IHZlcnNpb24gPSBgUmVhY2ggdiR7U0RLX1ZFUlNJT059IHwgU2NoZW1hICR7U0NIRU1BX1ZFUlNJT059IHwgV2ViY29tIHYke1dlYmNvbS5TREtfVkVSU0lPTn1gO1xubGV0IG1lc3NhZ2UgPSAnJztcbmlmKGJyb3dzZXIudmVyc2lvbiA9PT0gbnVsbCkge1xuXHRtZXNzYWdlID0gJ1Vuc3VwcG9ydGVkIGJyb3dzZXI6IGJyb3dzZXIgbXVzdCBzdXBwb3J0IFdlYlJUQyBQZWVyLXRvLXBlZXIgY29ubmVjdGlvbnMgdG8gdXNlIFJlYWNoJztcbn0gZWxzZSBpZiAoYnJvd3Nlci5taW5WZXJzaW9uICYmIGJyb3dzZXIubWluVmVyc2lvbiA+IGJyb3dzZXIudmVyc2lvbikge1xuXHRtZXNzYWdlID0gYFVuc3VwcG9ydGVkIGJyb3dzZXI6IGJyb3dzZXIgaXMgb3V0ZGF0ZWQsIHVwZGF0ZSB0byBsYXRlc3QgdmVyc2lvbiAoJHticm93c2VyLm1pblZlcnNpb259KylgO1xufSBlbHNlIGlmKCFicm93c2VyU2hpbSl7XG5cdG1lc3NhZ2UgPSAnTm8gc2hpbSBmb3IgeW91ciBicm93c2VyLiBUaGVyZSBtaWdodCBhIHByb2JsZW0gd2l0aCB5b3VyIHBhY2thZ2UuJztcbn1cblxuLy8gTG9nIGJyb3dzZXIgc3RhdHVzICYgU0RLcyB2ZXJzaW9ucyBvbiBsb2FkXG5sZXQgYXJncyA9IFtgJHt2ZXJzaW9ufSAke21lc3NhZ2V9YF07XG5pZigvXihjaHJvbWV8ZmlyZWZveCkkLy50ZXN0KGJyb3dzZXIuYnJvd3NlcikpIHtcblx0YXJncyA9IFtcblx0XHRgJWMgJHt2ZXJzaW9ufSAlYyAke21lc3NhZ2V9YCxcblx0XHRgYmFja2dyb3VuZDogJHticm93c2VyLmNvbXBhdGlibGUgPyAnI2Y1MCcgOiAncmVkJ307IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZGAsXG5cdFx0YGNvbG9yOiAke2Jyb3dzZXIuY29tcGF0aWJsZSA/ICdpbmhlcml0JyA6ICdyZWQnfWBcblx0XTtcbn1cbmNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0Jyb3dzZXIuanMiLCIvKipcbiAqIFZpZGVvIGNvZGVjIHByZXNldHMgdG8gdXNlIGZvclxuICogQHR5cGVkZWYge09iamVjdH0gQ29kZWMvdmlkZW9cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDggVlA4IGlzIHRoZSBvbmx5IHZpZGVvIGNvZGVjIG9mZmljaWFsbHkgc3VwcG9ydGVkIGJ5IFdlYlJUQ1xuICogQHByb3BlcnR5IHtSZWdFeHB9IFZQOSBWUDgncyBzdWNjZXNzb3IuXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSDI2NCBNUEVHLTQgcGFydCAxMC4gT25seSBGaXJlZm94LlxuICogQHByb3BlcnR5IHtSZWdFeHB9IFZQMTAgU3VpdGVkIGZvciBVSEQgdmlkZW8uIE5vIHN1cHBvcnQgeWV0XG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSDI2NSBILjI2NCdzIHN1Y2Nlc3Nvci4gTm8gc3VwcG9ydCB5ZXRcbiAqL1xuZXhwb3J0IGNvbnN0IHZpZGVvID0ge1xuXHQnVlA4JzogL152cDgvaSxcblx0J1ZQOSc6IC9ednA5L2ksXG5cdCdWUDEwJzogL152cDEwL2ksXG5cdCdIMjY0JzogL15oMjY0L2ksXG5cdCdIMjY1JzogL15oMjY1L2lcbn07XG5cbi8qKlxuICogQXVkaW8gY29kZWMgcHJlc2V0cyB0byB1c2UgZm9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDb2RlYy9hdWRpb1xuICogQHByb3BlcnR5IHtSZWdFeHB9IE9QVVMgT3B1cyBhdWRpbyBjb2RlYyB7QGxpbmsgaHR0cDovL29wdXMtY29kZWMub3JnL30uIE9ubHkgY2hvaWNlIGZvciBoaWdoLXF1YWxpdHkgYXVkaW8uXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gRzcyMiBHLjcyMiBhdWRpbyBjb2RlY1xuICogQHByb3BlcnR5IHtSZWdFeHB9IEc3MTEgRy43MTEgYXVkaW8gY29kZWNcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJU0FDIGlTQUMgYXVkaW8gY29kZWMuIEdvb2QgZm9yIHZvaWNlIGRhdGEsIGJ1dCBub3Qgc3VpdGFibGUgZm9yIGhpZ2gtcXVhbGl0eSBhdWRpbyBzdHJlYW1zLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IElTQUNfMTYgaVNBQyBhdWRpbyBjb2RlYyAoMTZrSHopXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSVNBQ18zMiBpU0FDIGF1ZGlvIGNvZGVjICgzMmtIeilcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJTEJDIGlMQkMgYXVkaW8gY29kZWMuIEZvciBiYWQgY2hhbm5lbHMgJiBsb3cgYmFuZHdpZHRoLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IElMQkMgaUxCQyBhdWRpbyBjb2RlYy4gRm9yIGJhZCBjaGFubmVscyAmIGxvdyBiYW5kd2lkdGguXG4gKi9cbmV4cG9ydCBjb25zdCBhdWRpbyA9IHtcblx0J09QVVMnOiAvXm9wdXMvaSxcblx0J0c3MjInOiAvXmc3MjIvaSxcblx0J0c3MTEnOiAvXmc3MTEvaSxcblx0J0lTQUMnOiAvXmlzYWMvaSxcblx0J0lTQUNfMTYnOiAvXmlzYWNcXC8xNjAwMC9pLFxuXHQnSVNBQ18zMic6IC9eaXNhY1xcLzMyMDAwL2ksXG5cdCdMU0FDJzogL15sc2FjL2lcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0NvZGVjLmpzIiwiaW1wb3J0IHticm93c2VyfSBmcm9tICcuL2RlZmluaXRpb25zL0Jyb3dzZXInO1xuaW1wb3J0IFN0cmVhbVR5cGVzIGZyb20gJy4vZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMnO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4vZGVmaW5pdGlvbnMvRXZlbnRzJztcbmltcG9ydCB7YXVkaW8sIHZpZGVvfSBmcm9tICcuL2RlZmluaXRpb25zL0NvZGVjJztcbmltcG9ydCBVc2VyIGZyb20gJy4vY29yZS9Vc2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4vY29yZS9Sb29tJztcbmltcG9ydCBJbnZpdGUgZnJvbSAnLi9jb3JlL0ludml0ZSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL2NvcmUvdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jb3JlL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vY29yZS91dGlsL0xvZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9jb3JlL3V0aWwvTWVkaWEnO1xuaW1wb3J0IFdlYmNvbSBmcm9tICd3ZWJjb20vd2ViY29tJztcblxuLyoqXG4gKiBFbnRyeSBwb2ludCBmb3IgUmVhY2ggU0RLXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWNoIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBSZWFjaCdzIGRhdGEgc3RydWN0dXJlIHdoZXJlIHRoZSB1cmwgcG9pbnRzIHRvIChtaWdodCBub3QgYmUgdGhlIHJvb3Qgb2YgeW91ciBuYW1lc3BhY2UpXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtzdHJpbmd8V2ViY29tfSB1cmwgVGhlIHVybCBvZiB5b3VyIG5hbWVzcGFjZSBvciBhbiBleGlzdGluZyBXZWJjb20gcmVmZXJlbmNlLlxuXHQgKiBAcGFyYW0ge0NvbmZpZ30gW2NmZ10gUmVhY2ggY29uZmlndXJhdGlvbi4gWW91IGNhbiBwYXNzIGNvbnN0cmFpbnRzIGhlcmVcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+SW5pdCB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb248L2NhcHRpb24+XG5cdCAqIHZhciBteVJlYWNoID0gbmV3IFJlYWNoKCdodHRwczovL2lvLmRhdGFzeW5jLm9yYW5nZS5jb20vYmFzZS88bXlfbmFtZXNwYWNlPicpO1xuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Jbml0IGFuZCBzZXQgY29uc3RyYWludHMgZm9yIFNEIHZpZGVvIGFuZCBsb2dMZXZlbCB0byAnaW5mbyc8L2NhcHRpb24+XG5cdCAqIHZhciBteVJlYWNoID0gbmV3IFJlYWNoKCdodHRwczovL2lvLmRhdGFzeW5jLm9yYW5nZS5jb20vYmFzZS88bXlfbmFtZXNwYWNlPicsIHtcblx0ICogIGNvbnN0cmFpbnRzOiBSZWFjaC5tZWRpYS5jb25zdHJhaW50cygnU0QnKSxcblx0ICogIGxvZ0xldmVsOiAnSU5GTydcblx0ICogfSk7XG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih1cmwsIGNmZyA9IG51bGwpIHtcblx0XHQvLyBTZXQgc2hhcmVkIHJlZmVyZW5jZVxuXHRcdGNhY2hlLmJhc2UgPSB1cmw7XG5cdFx0Ly8gU2V0IHNoYXJlZCBjb25maWd1cmF0aW9uXG5cdFx0Y2FjaGUuY29uZmlnID0gY2ZnO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgZGVjbGFyZWQgY2FsbGJhY2tzXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdmVyc2lvbnMgb2YgU0RLIGFuZCBEYXRhTW9kZWwuVGhlIFNjaGVtYSB2ZXJzaW9uIGNhbiBiZSB1c2VkIHRvIGRldGVybWluZSBjb21wYXRpYmlsaXR5IHdpdGggdGhlIEFuZHJvaWQgJiBpT1MgU0RLLlxuXHQgKiBAcmV0dXJuIHt7c2RrOiBzdHJpbmcsIHNjaGVtYTogc3RyaW5nfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcblx0XHRyZXR1cm4ge3NkazogU0RLX1ZFUlNJT04sIHNjaGVtYTogU0NIRU1BX1ZFUlNJT059O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBzdXBwb3J0ZWQgc3RyZWFtIHR5cGVzXG5cdCAqIEByZXR1cm5zIHtTdHJlYW1UeXBlc31cblx0ICovXG5cdHN0YXRpYyBnZXQgdHlwZXMoKSB7XG5cdFx0cmV0dXJuIFN0cmVhbVR5cGVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBzdXBwb3J0ZWQgZXZlbnRzXG5cdCAqIEByZXR1cm4ge3tyb29tOiBFdmVudHMvUm9vbSwgcmVhY2g6IEV2ZW50cy9SZWFjaCwgc3RyZWFtOiBFdmVudHMvU3RyZWFtfX1cblx0ICovXG5cdHN0YXRpYyBnZXQgZXZlbnRzKCkge1xuXHRcdHJldHVybiB7cm9vbTogRXZlbnRzLnJvb20sIHJlYWNoOiBFdmVudHMucmVhY2gsIHN0cmVhbTogRXZlbnRzLnN0cmVhbSwgaW52aXRlOiBFdmVudHMuaW52aXRlfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYnJvd3NlcidzIGRldGFpbHNcblx0ICogQHJldHVybiB7QnJvd3Nlcn1cblx0ICovXG5cdHN0YXRpYyBnZXQgYnJvd3NlcigpIHtcblx0XHRyZXR1cm4gYnJvd3Nlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBNZWRpYSB1dGlsaXR5IGZ1bmN0aW9uc1xuXHQgKiBAcmV0dXJuIHtNZWRpYX1cblx0ICovXG5cdHN0YXRpYyBnZXQgbWVkaWEoKSB7XG5cdFx0cmV0dXJuIE1lZGlhO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb2RlYyBwcmVzZXRzIHRvIHVzZSB3aGVuIHNldHRpbmcge0BsaW5rIENvbmZpZyNwcmVmZXJyZWRBdWRpb0NvZGVjfSBvciB7QGxpbmsgQ29uZmlnI3ByZWZlcnJlZFZpZGVvQ29kZWN9XG5cdCAqIEByZXR1cm4ge3thdWRpbzogQ29kZWMvYXVkaW8sIHZpZGVvOiBDb2RlYy92aWRlb319XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGNvZGVjcygpIHtcblx0XHRyZXR1cm4ge2F1ZGlvLCB2aWRlb307XG5cdH1cblx0LyoqXG5cdCAqIERhdGFTeW5jIHJlZmVyZW5jZVxuXHQgKiBAdHlwZSB7V2ViY29tfVxuXHQgKi9cblx0Z2V0IGJhc2UoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLmJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvbmZpZ3VyYXRpb25cblx0ICogQHR5cGUge0NvbmZpZ31cblx0ICovXG5cdGdldCBjb25maWcoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLmNvbmZpZztcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIFVzZXJcblx0ICogQHR5cGUge1VzZXJ9XG5cdCAqL1xuXHRnZXQgY3VycmVudCgpIHtcblx0XHRyZXR1cm4gY2FjaGUudXNlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciAmIFNpZ24taW4gYXMgYSBuZXcgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgVGhlIGVtYWlsIG9mIHRoZSB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQgb2YgdGhlIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSB1c2VyIChkZWZhdWx0cyB0byBlbWFpbClcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVtZW1iZXJNZT1mYWxzZV0ga2VlcCB1c2VyIGNvbm5lY3RlZCA/XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXI+fVxuXHQgKi9cblx0cmVnaXN0ZXIoZW1haWwsIHBhc3N3b3JkLCBuYW1lLCByZW1lbWJlck1lKSB7XG5cdFx0cmV0dXJuIGNhY2hlLmJhc2UuY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpXG5cdFx0XHQudGhlbihhdXRoID0+IHtcblx0XHRcdFx0aWYoYXV0aCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmxvZ2luKGVtYWlsLCBwYXNzd29yZCwgbmFtZSB8fCBlbWFpbCwgcmVtZW1iZXJNZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofnJlZ2lzdGVyJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNpZ24taW4gYW4gZXhpc3RpbmcgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgVGhlIGVtYWlsIG9mIHRoZSB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQgb2YgdGhlIHVzZXJcbiBcdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIG5hbWUgb2YgdGhlIHVzZXIuIERlZmF1bHRzIHRvIHRoZSB2YWx1ZSBpbiBiYXNlLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW1lbWJlck1lPWZhbHNlXSBrZWVwIHVzZXIgY29ubmVjdGVkID9cblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRsb2dpbihlbWFpbCwgcGFzc3dvcmQsIG5hbWUsIHJlbWVtYmVyTWUgPSBmYWxzZSkge1xuXHRcdC8vIEZvcmNlIGxvZ291dCB0byBieXBhc3MgV2ViY29tIGJ1Z1xuXHRcdGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0aWYodGhpcy5jdXJyZW50ICYmIHRoaXMuY3VycmVudC5lbWFpbCAhPT0gZW1haWwpIHtcblx0XHRcdHAgPSB0aGlzLmxvZ291dCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcFxuXHRcdFx0LnRoZW4oKCkgPT4gY2FjaGUuYmFzZS5hdXRoV2l0aFBhc3N3b3JkKHtlbWFpbCwgcGFzc3dvcmQsIHJlbWVtYmVyTWV9KSlcblx0XHRcdC50aGVuKGF1dGggPT4gVXNlci5pbml0KGF1dGgudWlkLCBuYW1lKSlcblx0XHRcdC50aGVuKHUgPT4ge1xuXHRcdFx0XHRjYWNoZS51c2VyID0gdTtcblx0XHRcdFx0cmV0dXJuIHU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5sb2dpbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXN1bWUgcHJldmlvdXMgc2Vzc2lvblxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdHJlc3VtZSgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Ly8gUmVzdW1lIHNlc3Npb25cblx0XHRcdGlmKFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5nZXQoJ3Nlc3Npb24nKSl7XG5cdFx0XHRcdGNhY2hlLmJhc2UucmVzdW1lKChlcnJvciwgYXV0aCkgPT4ge1xuXHRcdFx0XHRcdGlmKGF1dGggJiYgIXRoaXMuY3VycmVudCkge1xuXHRcdFx0XHRcdFx0VXNlci5pbml0KGF1dGgudWlkKS50aGVuKHUgPT4ge1xuXHRcdFx0XHRcdFx0XHRjYWNoZS51c2VyID0gdTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh1KTtcblx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoJ05vIHNlc3Npb24gdG8gcmVzdW1lJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNpZ24taW4gYW4gYW5vbnltb3VzIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgdXNlclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdGFub255bW91cyhuYW1lKSB7XG5cdFx0Ly8gRm9yY2UgbG9nb3V0IHRvIGJ5cGFzcyBXZWJjb20gYnVnXG5cdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRpZih0aGlzLmN1cnJlbnQgJiYgKCF0aGlzLmN1cnJlbnQuYW5vbnltb3VzIHx8IHRoaXMuY3VycmVudC5uYW1lICE9PSBuYW1lKSkge1xuXHRcdFx0cCA9IHRoaXMubG9nb3V0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBwXG5cdFx0XHQudGhlbigoKSA9PiBjYWNoZS5iYXNlLmF1dGhBbm9ueW1vdXNseSgpKVxuXHRcdFx0LnRoZW4oYXV0aCA9PiBVc2VyLmluaXQoYXV0aC51aWQsIG5hbWUpKVxuXHRcdFx0LnRoZW4odSA9PiB7XG5cdFx0XHRcdGNhY2hlLnVzZXIgPSB1O1xuXHRcdFx0XHRyZXR1cm4gdTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofmFub255bW91cycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2dvdXQgY3VycmVudCB1c2VyXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0bG9nb3V0KCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0aWYodGhpcy5jdXJyZW50ICE9IG51bGwpIHtcblx0XHRcdFx0cCA9IFVzZXIuZGlzY29ubmVjdCh0aGlzLmN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdFx0cC50aGVuKCgpID0+IHtcblx0XHRcdFx0T2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKS5mb3JFYWNoKFxuXHRcdFx0XHRcdGV2ZW50ID0+IERhdGFTeW5jLm9mZihFdmVudHMucmVhY2gudG9QYXRoKGV2ZW50KShjYWNoZS51c2VyKSwgZXZlbnQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNhY2hlLmJhc2UubG9nb3V0KCgpID0+IHtcblx0XHRcdFx0XHRjYWNoZS51c2VyID0gbnVsbDtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlID0+IHtcblx0XHRcdFx0TG9nLmUoZSk7XG5cdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiByZWdpc3RlcmVkIHVzZXJzXG5cdCAqIEBleHBlcmltZW50YWwgU2luY2UgJ3NlYXJjaCcgYW5kICdwYWdpbmcnIGZlYXR1cmVzIGFyZSBub3QgeWV0IGltcGxlbWVudGVkIGluIERhdGFTeW5jLCB0aGlzIGNhbGwgY2FuIGxlYWQgdG8gYSBsb3QgZGF0YSBiZWluZyBleGNoYW5nZWQgb3ZlciB0aGUgV2ViU29ja2V0LlxuXHQgKiBBdm9pZCBpdCBpZiB5b3VyIHVzZXJzIGJhc2UgaXMgcHJldHR5IGxhcmdlLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbmNsdWRlPWZhbHNlXSBJbmNsdWRlIGN1cnJlbnQgdXNlciBpbiB1c2VyJ3MgbGlzdFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFVzZXJbXSwgRXJyb3I+fVxuXHQgKi9cblx0dXNlcnMoaW5jbHVkZSkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KCd1c2VycycsIFVzZXIpXG5cdFx0XHQudGhlbih1c2VycyA9PiB7XG5cdFx0XHRcdHJldHVybiAhaW5jbHVkZSAmJiB1c2VycyAmJiB0aGlzLmN1cnJlbnQgPyB1c2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLnVpZCAhPT0gdGhpcy5jdXJyZW50LnVpZCkgOiB1c2Vycztcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofnVzZXJzJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiByb29tc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFJvb21bXSwgRXJyb3I+fVxuXHQgKi9cblx0cm9vbXMoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLmxpc3QoJ3Jvb21zJywgUm9vbSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+cm9vbXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIGludml0ZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGVbXSwgRXJyb3I+fVxuXHQgKi9cblx0aW52aXRlcygpIHtcblx0XHRpZighdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3QgbGlzdCBpbnZpdGVzIHdpdGhvdXQgYSBVc2VyIGJlaW5nIGxvZ2dlZCBpbi4nKSk7XG5cdFx0fVxuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL2ludml0ZXMvJHt0aGlzLmN1cnJlbnQudWlkfWAsIEludml0ZSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+aW52aXRlcycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9SZWFjaH0pLiBDYW4gYmU6XG5cdCAqIC0gVVNFUl9BRERFRFxuXHQgKiAtIFVTRVJfQ0hBTkdFRFxuXHQgKiAtIFVTRVJfUkVNT1ZFRFxuXHQgKiAtIFJPT01fQURERURcblx0ICogLSBST09NX0NIQU5HRURcblx0ICogLSBST09NX1JFTU9WRURcblx0ICogLSBJTlZJVEVfQURERURcblx0ICogLSBJTlZJVEVfQ0hBTkdFRFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGhlIGFyZ3VtZW50cyBkZXBlbmRzIG9uIHRoZSB0eXBlIG9mIGV2ZW50OlxuXHQgKiAtIFVTRVJfKjogY2FsbGJhY2soe0BsaW5rIFVzZXJ9IHUpXG5cdCAqIC0gUk9PTV8qOiBjYWxsYmFjayh7QGxpbmsgUm9vbX0gcilcblx0ICogLSBJTlZJVEVfKjogY2FsbGJhY2soe0BsaW5rIEludml0ZX0gaSlcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfSBbY2FuY2VsQ2FsbGJhY2tdIFRoZSBlcnJvciBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0YWtlcyBhbiBFcnJvciBhcyBvbmx5IGFyZ3VtZW50XG5cdCAqL1xuXHRvbihldmVudCwgY2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSB7XG5cdFx0Y29uc3QgcGF0aCA9IEV2ZW50cy5yZWFjaC50b1BhdGgoZXZlbnQpKGNhY2hlLnVzZXIpO1xuXHRcdGlmKHBhdGgpIHtcblx0XHRcdGNvbnN0IGNscyA9IEV2ZW50cy5yZWFjaC50b0NsYXNzKGV2ZW50KTtcblx0XHRcdGNvbnN0IGNiID0gc25hcERhdGEgPT4ge1xuXHRcdFx0XHRjb25zdCBkID0gY2xzID8gbmV3IGNscyhzbmFwRGF0YSkgOiBudWxsO1xuXHRcdFx0XHRMb2cuaShgUmVhY2h+b24oJHtldmVudH0pYCwgZCk7XG5cdFx0XHRcdGNhbGxiYWNrKGQpO1xuXHRcdFx0fTtcblx0XHRcdERhdGFTeW5jLm9uKHBhdGgsIGV2ZW50LCBjYiwgY2FuY2VsQ2FsbGJhY2spO1xuXHRcdFx0aWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNiKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IHJvb21cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lXSBUaGUgcm9vbSBuYW1lXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmFdIEV4dHJhIGluZm9ybWF0aW9uc1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtwdWJsaWNSb29tPWZhbHNlXSBJbmRpY2F0ZXMgcHVibGljIHJvb21cblx0ICogQHJldHVybnMge1Byb21pc2U8Um9vbT59XG5cdCAqL1xuXHRjcmVhdGVSb29tKG5hbWUsIGV4dHJhLCBwdWJsaWNSb29tID0gZmFsc2UpIHtcblx0XHRpZighdGhpcy5jdXJyZW50KSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGEgUm9vbSB3aXRob3V0IGEgVXNlciBiZWluZyBsb2dnZWQgaW4uJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gUm9vbS5jcmVhdGUobmFtZSwgZXh0cmEsIHB1YmxpY1Jvb20pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIGxpc3Qgb2YgYWxsIG9wZW5lZCB7QGxpbmsgUGVlckNvbm5lY3Rpb259c1xuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0Z2V0IHBlZXJDb25uZWN0aW9ucyAoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLnBlZXJDb25uZWN0aW9ucy5zdGFja3M7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEge0BsaW5rIFJvb219IGZyb20gaXRzIGB1aWRgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHJvb20ncyBVSURcblx0ICogQHJldHVybnMge1Byb21pc2UuPFJvb20+fVxuXHQgKi9cblx0Z2V0Um9vbSAodWlkKSB7XG5cdFx0cmV0dXJuIFJvb20uZ2V0KHVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEge0BsaW5rIFVzZXJ9IGZyb20gaXRzIGB1aWRgXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHVzZXIncyBVSURcblx0ICogQHJldHVybnMge1Byb21pc2UuPFVzZXI+fVxuXHQgKi9cblx0Z2V0VXNlciAodWlkKSB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0KHVpZCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjaC5qcyIsImltcG9ydCBtZWRpYSBmcm9tICcuL3V0aWwvTWVkaWEnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuXG5jb25zdCBfZmxhdHRlblNlcnZlcnMgPSBzZXJ2ZXJzID0+IHtcblx0Y29uc3QgX2V4cGFuZCA9IHNlcnZlcnMubWFwKHNlcnZlciA9PiB7XG5cdFx0Y29uc3Qge3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzLCB1cmx9ID0gc2VydmVyO1xuXHRcdGNvbnN0IHVyaXMgPSB1cmxzIHx8IHVybDtcblx0XHRpZih0eXBlb2YgdXJpcyAhPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRyZXR1cm4gdXJpcy5tYXAodXJpID0+ICh7dXNlcm5hbWUsIGNyZWRlbnRpYWwsIHVybHM6IHVyaX0pKTtcblx0XHR9XG5cdFx0cmV0dXJuIFtzZXJ2ZXJdO1xuXHR9KTtcblx0cmV0dXJuIFtdLmNvbmNhdCguLi5fZXhwYW5kKTtcbn07XG5cbi8qKlxuICogVGhlIFJlYWNoIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBAY2xhc3MgQ29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZyB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgY29uZmlndXJhdGlvblxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihvYmopIHtcblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBtZWRpYSBjb25zdHJhaW50cy4gVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gd2hlbiBzdWJzY3JpYmluZyB0byBhIHN0cmVhbS5cblx0XHQgKiBAdHlwZSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c31cblx0XHQgKi9cblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZC9lbGVtZW50IGRvbSBlbGVtZW50IHRoYXQgd2lsbCBob2xkIHRoZSBsb2NhbCB2aWRlby9hdWRpbyBlbGVtZW50XG5cdFx0ICogQHR5cGUge3N0cmluZ3xFbGVtZW50fVxuXHRcdCAqL1xuXHRcdHRoaXMubG9jYWxTdHJlYW1Db250YWluZXIgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBpZC9lbGVtZW50IGRvbSBlbGVtZW50IHRoYXQgd2lsbCBob2xkIHRoZSByZW1vdGUgdmlkZW8vYXVkaW8gZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8RWxlbWVudH1cblx0XHQgKi9cblx0XHR0aGlzLnJlbW90ZVN0cmVhbUNvbnRhaW5lciA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgcHJlZmVycmVkIHZpZGVvIENvZGVjLiBUYWtlcyBhIFJlZ0V4cCBtYXRjaGluZyB0aGUgY29kZWMgbmFtZSBhbmQgc2FtcGxlIHJhdGUuXG5cdFx0ICogUHJlZGVmaW5lZCB2YWx1ZXMgY2FuIGJlIGZvdW5kIGluIHtAbGluayBDb2RlYy92aWRlb31cblx0XHQgKiBAdHlwZSB7UmVnRXhwfVxuXHRcdCAqIEBleGFtcGxlIDxjYXB0aW9uPlByZWZlciBWUDk8L2NhcHRpb24+XG5cdFx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHRcdCAqICBwcmVmZXJyZWRWaWRlb0NvZGVjOiBSZWFjaC5jb2RlY3MudmlkZW8uVlA5XG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dGhpcy5wcmVmZXJyZWRWaWRlb0NvZGVjID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBwcmVmZXJyZWQgYXVkaW8gQ29kZWMuIFRha2VzIGEgUmVnRXhwIG1hdGNoaW5nIHRoZSBjb2RlYyBuYW1lIGFuZCBzYW1wbGUgcmF0ZS5cblx0XHQgKiBQcmVkZWZpbmVkIHZhbHVlcyBjYW4gYmUgZm91bmQgaW4ge0BsaW5rIENvZGVjL2F1ZGlvfVxuXHRcdCAqIEB0eXBlIHtSZWdFeHB9XG5cdFx0ICogQGV4YW1wbGUgPGNhcHRpb24+UHJlZmVyIG9wdXM8L2NhcHRpb24+XG5cdFx0ICogdmFyIG15UmVhY2ggPSBuZXcgUmVhY2goJ2h0dHBzOi8vaW8uZGF0YXN5bmMub3JhbmdlLmNvbS9iYXNlLzxteV9uYW1lc3BhY2U+Jywge1xuXHRcdCAqICBwcmVmZXJyZWRBdWRpb0NvZGVjOiBSZWFjaC5jb2RlY3MuYXVkaW8uT1BVU1xuXHRcdCAqIH0pO1xuXHRcdCAqL1xuXHRcdHRoaXMucHJlZmVycmVkQXVkaW9Db2RlYyA9IG51bGw7XG5cblx0XHQvLyBQb3B1bGF0ZSB3aXRoIGRlZmF1bHQgdmFsdWVzXG5cdFx0dGhpcy5yZXNldCgpO1xuXG5cdFx0Ly8gUG9wdWxhdGUgd2l0aCBkYXRhXG5cdFx0dGhpcy5hc3NpZ24ob2JqKTtcblxuXHRcdC8vIFJlYWQgSUNFIHNlcnZlcnMgZnJvbSBzZXJ2ZXJcblx0XHREYXRhU3luYy5nZXQoJ18vaWNlJykudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0XHRpZihzbmFwRGF0YSkge1xuXHRcdFx0XHR0aGlzLmljZVNlcnZlcnMgPSBzbmFwRGF0YS52YWwoKTtcblx0XHRcdFx0TG9nLmkoJ0lDRVNlcnZlcnMnLCB0aGlzLmljZVNlcnZlcnMubGVuZ3RoID4gMCA/IHRoaXMuaWNlU2VydmVycyA6ICdOb25lJyk7XG5cdFx0XHR9XG5cdFx0fSwgZSA9PiBMb2cuZCgnSUNFU2VydmVycycsIGUpKTtcblxuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCBib29sZWFuIHByb3AgdG8gcmVxdWVzdCBwZXJtaXNzaW9uIG9uIHN0YXJ0LCBzZHBFZGl0b3IgKGZvciB1c2VyIGRlZmluZWQgU0RQIG1vZGlmaWNhdGlvbnMpXG5cdH1cblxuXHQvKipcblx0ICogQXNzaWduIG5ldyBjb25mIHZhbHVlc1xuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb2JqIHRoZSBuZXcgY29uZiB2YWx1ZXNcblx0ICovXG5cdGFzc2lnbihvYmopIHtcblx0XHRPYmplY3Qua2V5cyhvYmogfHwge30pLmZvckVhY2goa2V5ID0+IHt0aGlzW2tleV0gPSBvYmpba2V5XTt9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRzZXQgbG9nTGV2ZWwobGV2ZWwpIHtcblx0XHRjYWNoZS5sb2dMZXZlbCA9IGxldmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGdldCBsb2dMZXZlbCgpIHtcblx0XHRyZXR1cm4gY2FjaGUubG9nTGV2ZWw7XG5cdH1cblxuXHQvKipcblx0ICogTGlzdCBvZiBUVVJOL1NUVU4gc2VydmVycyB0byB1c2UgZm9yIElDRS4gVGhpcyBsaXN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIElDRSBzZXJ2ZXJzIGRlY2xhcmVkIGluIHRoZSBuYW1lc3BhY2UgKCoqXy9pY2UqKikuXG5cdCAqIEB0eXBlIHtJQ0VTZXJ2ZXJbXX1cblx0ICovXG5cdHNldCBpY2VTZXJ2ZXJzKHNlcnZlcnMpIHtcblx0XHRMb2cuZCgnQ29uZmlnfnNldH5pY2VTZXJ2ZXJzJywgc2VydmVycyk7XG5cdFx0aWYoc2VydmVycykge1xuXHRcdFx0aWYgKCF0aGlzLl9pY2VTZXJ2ZXJzKSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBAaWdub3JlXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR0aGlzLl9pY2VTZXJ2ZXJzID0gW10uY29uY2F0KHNlcnZlcnMgfHwgW10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZmxhdHRlbiBleGlzdGluZ1xuXHRcdFx0XHRjb25zdCBfY3VycmVudFNlcnZlcnMgPSBfZmxhdHRlblNlcnZlcnModGhpcy5faWNlU2VydmVycyk7XG5cdFx0XHRcdC8vIGZsYXR0ZW4gbmV3XG5cdFx0XHRcdGNvbnN0IF9uZXdTZXJ2ZXJzID0gX2ZsYXR0ZW5TZXJ2ZXJzKHNlcnZlcnMpO1xuXHRcdFx0XHQvLyBBZGQgb25seSB0aGUgbWlzc2luZyBzZXJ2ZXJzXG5cdFx0XHRcdF9uZXdTZXJ2ZXJzLmZvckVhY2gobmV3U2VydmVyID0+IHtcblx0XHRcdFx0XHRpZighX2N1cnJlbnRTZXJ2ZXJzLnNvbWUoc2VydmVyID0+XG5cdFx0XHRcdFx0XHRcdHNlcnZlci51cmxzID09PSBuZXdTZXJ2ZXIudXJscyAmJlxuXHRcdFx0XHRcdFx0XHRzZXJ2ZXIudXNlcm5hbWUgPT09IG5ld1NlcnZlci51c2VybmFtZSAmJlxuXHRcdFx0XHRcdFx0XHRzZXJ2ZXIuY3JlZGVudGlhbCA9PT0gbmV3U2VydmVyLmNyZWRlbnRpYWwpKSB7XG5cdFx0XHRcdFx0XHRfY3VycmVudFNlcnZlcnMucHVzaChuZXdTZXJ2ZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlLWdyb3VwIGJ5IHVzZXJuYW1lL2NyZWRlbnRpYWxcblx0XHRcdFx0dGhpcy5faWNlU2VydmVycyA9IF9jdXJyZW50U2VydmVycy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzfSA9IGN1cnJlbnQ7XG5cdFx0XHRcdFx0Y29uc3QgaWR4ID0gcHJldmlvdXMuZmluZEluZGV4KHMgPT4gcy51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgcy5jcmVkZW50aWFsID09PSBjcmVkZW50aWFsKTtcblx0XHRcdFx0XHRpZihpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0cHJldmlvdXNbaWR4XS51cmxzLnB1c2godXJscyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHByZXZpb3VzLnB1c2goe3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzOiBbdXJsc119KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZpb3VzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgVFVSTi9TVFVOIHNlcnZlcnMgdG8gdXNlIGZvciBJQ0UuIFRoaXMgbGlzdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBJQ0Ugc2VydmVycyBkZWNsYXJlZCBpbiB0aGUgbmFtZXNwYWNlICgqKl8vaWNlKiopLlxuXHQgKiBAdHlwZSB7SUNFU2VydmVyW119XG5cdCAqL1xuXHRnZXQgaWNlU2VydmVycygpIHtcblx0XHRyZXR1cm4gdGhpcy5faWNlU2VydmVycyB8fCBbXG5cdFx0XHR7XG5cdFx0XHRcdHVzZXJuYW1lOiAnYWRtaW4nLFxuXHRcdFx0XHRjcmVkZW50aWFsOiAnd2ViY29tMTIzNCcsXG5cdFx0XHRcdHVybHM6IFtcblx0XHRcdFx0XHQndHVybnM6dHVybjEud2ViY29tLm9yYW5nZS5jb206NDQzJyxcblx0XHRcdFx0XHQndHVybjp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTo0NDM/dHJhbnNwb3J0PXRjcCcsXG5cdFx0XHRcdFx0J3R1cm46dHVybjEud2ViY29tLm9yYW5nZS5jb206MzQ3OD90cmFuc3BvcnQ9dGNwJ1xuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNldHMgY29uZmlndXJhdGlvbiB0byBkZWZhdWx0IHZhbHVlc1xuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRyZXNldCAoKSB7XG5cdFx0dGhpcy5hc3NpZ24oe1xuXHRcdFx0Y29uc3RyYWludHM6IG1lZGlhLmNvbnN0cmFpbnRzKCksXG5cdFx0XHRsb2dMZXZlbDogJ0VSUk9SJ1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Db25maWcuanMiLCIvKipcbiAqIFVzZXIgZGV2aWNlXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2Uge1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGV2aWNlXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8b2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3MgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUgc3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSBzbmFwRGF0YS5uYW1lKCk7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3MgT1Ncblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMub3MgPSB2YWx1ZXMub3M7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3MgdXNlckFnZW50XG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVzZXJBZ2VudCA9IHZhbHVlcy51c2VyQWdlbnQ7XG5cdFx0LyoqXG5cdFx0ICogRGV2aWNlJ3MgbGFzdCBrbm93IHN0YXR1c1xuXHRcdCAqIC0gQ09OTkVDVEVEXG5cdFx0ICogLSBOT1RfQ09OTkVDVEVEXG5cdFx0ICogLSBTTEVFUElOR1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSB2YWx1ZXMuc3RhdHVzO1xuXHRcdC8qKlxuXHRcdCAqIERldmljZSdzIHNka1xuXHRcdCAqIEB0eXBlIHt7cmVhY2g6IHN0cmluZywgd2ViY29tOiBzdHJpbmd9fVxuXHRcdCAqL1xuXHRcdHRoaXMuc2RrID0gdmFsdWVzLnNkaztcblx0XHQvLyBUT0RPICNGZWF0OiBBZGQgJ2V4dHJhJyBwcm9wZXJ0eSBmb3IgdW5yZXN0cmljdGVkIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gP1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9EZXZpY2UuanMiLCJpbXBvcnQgU3RyZWFtVHlwZXMgZnJvbSAnLi4vLi4vZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL3V0aWwvTWVkaWEnO1xuaW1wb3J0IHtOT05FLCBDTE9TRUQsIENMT1NJTkcsIENPTk5FQ1RFRH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuXG5jb25zdCBfZmFjaW5nTW9kZXMgPSBbTWVkaWEuZmFjaW5nTW9kZS5VU0VSLCBNZWRpYS5mYWNpbmdNb2RlLkVOVklST05NRU5UXTtcblxuY29uc3QgX2dldENvbnN0cmFpbnRWYWx1ZSA9IChjb25zdHJhaW50cywgcHJvcCkgPT4ge1xuXHRyZXR1cm4gY29uc3RyYWludHNbcHJvcF0uZXhhY3QgfHwgY29uc3RyYWludHNbcHJvcF0uaWRlYWwgfHwgY29uc3RyYWludHNbcHJvcF07XG59O1xuXG5jb25zdCBfc2V0Q29uc3RyYWluVmFsdWUgPSAoY29uc3RyYWludHMsIHByb3AsIG90aGVyLCB2YWx1ZSkgPT4ge1xuXHRjb25zdHJhaW50c1twcm9wXSA9IHtleGFjdDogdmFsdWV9O1xuXHRkZWxldGUgY29uc3RyYWludHNbb3RoZXJdO1xufTtcblxuLyoqXG4gKiBUaGUgbG9jYWwgc3RyZWFtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsIHtcblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcblx0ICovXG5cdGNvbnN0cnVjdG9yKHZhbHVlcykge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhlIHJvb20gdGhlIHN0cmVhbSBpcyBwdWJsaXNoZWQgaW5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbUlkID0gdmFsdWVzLnJvb21JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoaXMgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdmFsdWVzLnR5cGU7XG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIGlmIGEgdHJhY2sgaXMgbXV0ZWRcblx0XHQgKiBAdHlwZSB7e2F1ZGlvOiBib29sZWFuLCB2aWRlbzogYm9vbGVhbn19XG5cdFx0ICovXG5cdFx0dGhpcy5tdXRlZCA9IE9iamVjdC5hc3NpZ24oe2F1ZGlvOiBmYWxzZSwgdmlkZW86IGZhbHNlfSwgdmFsdWVzLm11dGVkKTtcblx0XHQvKipcblx0XHQgKiBUaGUgbG9jYWwgRE9NIGNvbnRhaW5lciBlbGVtZW50IHdoZXJlIHRoZSB7QGxpbmsgTG9jYWx+bWVkaWF9IGlzIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHQgICovXG5cdFx0dGhpcy5jb250YWluZXIgPSB2YWx1ZXMuY29udGFpbmVyIHx8IGNhY2hlLmNvbmZpZy5sb2NhbFN0cmVhbUNvbnRhaW5lcjtcblx0XHQvKipcblx0ICAqIFRoZSBsb2NhbCBET00gbWVkaWEgZWxlbWVudCB3aGVyZSB0aGUge0BsaW5rIExvY2Fsfm1lZGlhfSBpcyBkaXNwbGF5ZWRcblx0ICAqIEB0eXBlIHtFbGVtZW50fVxuXHQgICovXG5cdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIHRoZSBQZWVyQ29ubmVjdGlvbnMgYXNzb2NpYXRlZCB0byB0aGlzIGxvY2FsIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtQZWVyQ29ubmVjdGlvbltdfVxuXHRcdCAqL1xuXHRcdHRoaXMucGVlckNvbm5lY3Rpb25zID0gW107XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgc3RyZWFtIHN0YXR1c1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMgPSBOT05FO1xuXHRcdC8qKlxuXHRcdCAqIGlzIHRoZSB2aWRlbyBpcyBsb2FkZWQgaW50IHRoZSBsb2NhbCBET00gbWVkaWEgZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuaXNWaWRlb0xvYWRlZCA9IGZhbHNlO1xuXHRcdC8qKlxuXHRcdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHRcdCAqIEB0eXBlIHt7YXVkaW86IHN0cmluZywgdmlkZW86IHN0cmluZ319XG5cdFx0ICovXG5cdFx0dGhpcy5faW5wdXRzID0ge307XG5cblx0XHQvLyBTZXQgY29uc3RyYWludHNcblx0XHR0aGlzLmNvbnN0cmFpbnRzID0gdmFsdWVzLmNvbnN0cmFpbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEBwYXJhbSB7TWVkaWFDb25zdHJhaW50c30gY29uc3RyYWludHNcblx0ICovXG5cdHNldCBjb25zdHJhaW50cyhjb25zdHJhaW50cykge1xuXHRcdGNvbnN0XG5cdFx0XHR2YWx1ZXMgPSBjb25zdHJhaW50cyB8fCBjYWNoZS5jb25maWcuY29uc3RyYWludHMsXG5cdFx0XHRkZWZhdWx0Q29uc3RyYWludHMgPSBNZWRpYS5jb25zdHJhaW50cygpO1xuXHRcdFsnYXVkaW8nLCAndmlkZW8nXS5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0aWYoIX50aGlzLnR5cGUuaW5kZXhPZih0eXBlKSkge1xuXHRcdFx0XHR2YWx1ZXNbdHlwZV0gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZighdmFsdWVzW3R5cGVdKXtcblx0XHRcdFx0dmFsdWVzW3R5cGVdID0gZGVmYXVsdENvbnN0cmFpbnRzW3R5cGVdO1xuXHRcdFx0fVxuXHRcdFx0aWYodmFsdWVzW3R5cGVdLmRldmljZUlkIHx8IHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlKSB7XG5cdFx0XHRcdHRoaXMuX2lucHV0c1t0eXBlXSA9IF9nZXRDb25zdHJhaW50VmFsdWUoXG5cdFx0XHRcdFx0dmFsdWVzW3R5cGVdLFxuXHRcdFx0XHRcdHZhbHVlc1t0eXBlXS5mYWNpbmdNb2RlID8gJ2ZhY2luZ01vZGUnIDogJ2RldmljZUlkJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdExvZy5kKCdMb2NhbH5zZXQjY29udHJhaW50cycsIHZhbHVlcyk7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbnN0cmFpbnRzID0gdmFsdWVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBNZWRpYSBDb25zdHJhaW50cy4gKGRlZmF1bHRzIHRvIGdsb2JhbCBjb25maWcpXG5cdCAqIEB0eXBlIHtNZWRpYUNvbnN0cmFpbnRzfVxuXHQgKi9cblx0Z2V0IGNvbnN0cmFpbnRzKCkge1xuXHRcdHJldHVybiB0aGlzLl9jb25zdHJhaW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBzdHJlYW0gY29uc3RyYWludHMgYW5kIHJldHJpZXZlIHRoZSBuZXcgTWVkaWFTdHJlYW1cblx0ICogQHBhcmFtIGNvbnN0cmFpbnRzXG5cdCAqIEByZXR1cm5zIHsqfFByb21pc2UuPFRSZXN1bHQ+fVxuXHQgKi9cblx0dXBkYXRlQ29uc3RyYWludHMoY29uc3RyYWludHMpIHtcblx0XHRMb2cuZCgnTG9jYWx+dXBkYXRlQ29uc3RyYWludHMnLCBjb25zdHJhaW50cyk7XG5cdFx0dGhpcy5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh0aGlzLmNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4obWVkaWEgPT4ge1xuXHRcdFx0XHRbJ2F1ZGlvJywgJ3ZpZGVvJ10uZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRjb25zdCBjb25zdHJhaW50c1ZhbHVlID0gdGhpcy5jb25zdHJhaW50c1traW5kXTtcblx0XHRcdFx0XHRpZihjb25zdHJhaW50c1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29uc3RyYWludHNWYWx1ZS5kZXZpY2VJZCB8fCBjb25zdHJhaW50c1ZhbHVlLmZhY2luZ01vZGUpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gX2dldENvbnN0cmFpbnRWYWx1ZShcblx0XHRcdFx0XHRcdFx0XHRjb25zdHJhaW50c1ZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0cmFpbnRzVmFsdWUuZmFjaW5nTW9kZSA/ICdmYWNpbmdNb2RlJyA6ICdkZXZpY2VJZCdcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLm1lZGlhID0gbWVkaWE7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYXNzb2NpYXRlZCBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRzZXQgbWVkaWEgKG1lZGlhU3RyZWFtKSB7XG5cdFx0aWYobWVkaWFTdHJlYW0pIHtcblx0XHRcdGlmKCEobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbWVkaWEgTVVTVCBiZSBhIE1lZGlhU3RyZWFtJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNoZWNrRGV2aWNlcyA9IHt9O1xuXHRcdFx0bWVkaWFTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB7XG5cdFx0XHRcdC8vIFJlc2V0IG11dGVcblx0XHRcdFx0dHJhY2suZW5hYmxlZCA9ICF0aGlzLm11dGVkW3RyYWNrLmtpbmRdO1xuXHRcdFx0XHQvLyBHZXQgZGV2aWNlIGxhYmVsXG5cdFx0XHRcdGlmKCF0aGlzLl9pbnB1dHNbdHJhY2sua2luZF0pIHtcblx0XHRcdFx0XHRjaGVja0RldmljZXNbdHJhY2sua2luZF0gPSB0cmFjay5sYWJlbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBUcnkgdG8gZ2V0IGRldmljZUlkIGZyb20gbGFiZWxcblx0XHRcdGlmKE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykubGVuZ3RoKSB7XG5cdFx0XHRcdE1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGNoZWNrRGV2aWNlcykuZm9yRWFjaChraW5kID0+IHtcblx0XHRcdFx0XHRcdGlmKGRldmljZXNbYCR7a2luZH1pbnB1dGBdKXtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGV2aWNlSWRzID0gZGV2aWNlc1tgJHtraW5kfWlucHV0YF1cblx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKGRldmljZSA9PiBkZXZpY2UubGFiZWwubGVuZ3RoICYmIGRldmljZS5sYWJlbCA9PT0gY2hlY2tEZXZpY2VzW2tpbmRdKTtcblx0XHRcdFx0XHRcdFx0aWYoZGV2aWNlSWRzLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy5faW5wdXRzW2tpbmRdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gZGV2aWNlSWRzWzBdLmRldmljZUlkO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGlzcGxheVxuXHRcdFx0dGhpcy5ub2RlID0gTWVkaWEuYXR0YWNoU3RyZWFtKG1lZGlhU3RyZWFtLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5ub2RlLCAwKTtcblx0XHRcdHRoaXMubm9kZS5vbmxvYWRlZGRhdGEgPSAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaXNWaWRlb0xvYWRlZCA9IHRydWU7XG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBDT05ORUNURUQ7XG5cdFx0XHRMb2cuZCgnTG9jYWx+c2V0IG1lZGlhJywge21lZGlhU3RyZWFtfSwgdGhpcy5ub2RlKTtcblx0XHRcdC8vIFJlbmVnb3RpYXRlXG5cdFx0XHR0aGlzLnBlZXJDb25uZWN0aW9ucy5mb3JFYWNoKHBlZXJDb25uZWN0aW9uID0+IHBlZXJDb25uZWN0aW9uLnJlbmVnb3RpYXRlKHRoaXMuX21lZGlhLCBtZWRpYVN0cmVhbSkpO1xuXHRcdH0gZWxzZSBpZih0aGlzLm1lZGlhICYmICFtZWRpYVN0cmVhbSkge1xuXHRcdFx0Ly8gUmVtb3ZlIG5vZGVcblx0XHRcdHRoaXMubm9kZS5zcmNPYmplY3QgPSBudWxsO1xuXHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdHRoaXMubm9kZSA9IG51bGw7XG5cdFx0XHQvLyBTdG9wIHN0cmVhbVxuXHRcdFx0dGhpcy5tZWRpYS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG5cdFx0XHQvLyBDbG9zZSBQZWVyQ29ubmVjdGlvbnNcblx0XHRcdHRoaXMucGVlckNvbm5lY3Rpb25zLmZvckVhY2gocGVlckNvbm5lY3Rpb24gPT4gcGVlckNvbm5lY3Rpb24uY2xvc2UoKSk7XG5cdFx0fVxuXHRcdC8vIFNhdmVcblx0XHQvKipcblx0XHQgKiBAaWdub3JlXG5cdFx0ICovXG5cdFx0dGhpcy5fbWVkaWEgPSBtZWRpYVN0cmVhbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYXNzb2NpYXRlZCBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRnZXQgbWVkaWEgKCkge1xuXHRcdHJldHVybiB0aGlzLl9tZWRpYTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNdXRlIGEgdHJhY2sgb2YgYSBTdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0cmFjaz1BVURJT10gVGhlIHRyYWNrIHRvIG11dGUuIChBVURJTywgVklERU8sIEFVRElPX1ZJREVPKVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0ZT10cnVlXSB0cnVlIGZvciBtdXRlICYgZmFsc2UgZm9yIHVuLW11dGVcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+bXV0ZSB2aWRlbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLm11dGUoUmVhY2gudC5WSURFTylcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+bXV0ZSBhdWRpbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLm11dGUoUmVhY2gudC5BVURJTylcblx0ICogLy8gb3Jcblx0ICogc3RyZWFtLm11dGUoKVxuXHQgKi9cblx0bXV0ZSh0cmFjayA9IFN0cmVhbVR5cGVzLkFVRElPLCBzdGF0ZSA9IHRydWUpIHtcblx0XHRMb2cuZCgnbXV0ZScsIHRyYWNrLCBzdGF0ZSk7XG5cdFx0bGV0IGF1ZGlvID0gdGhpcy5tdXRlZC5hdWRpbywgdmlkZW8gPSB0aGlzLm11dGVkLnZpZGVvLCB0cmFja3M7XG5cdFx0c3dpdGNoICh0cmFjaykge1xuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5BVURJTzpcblx0XHRcdFx0YXVkaW8gPSBzdGF0ZTtcblx0XHRcdFx0dHJhY2tzID0gdGhpcy5tZWRpYS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuVklERU86XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLlNDUkVFTl9TSEFSSU5HOlxuXHRcdFx0XHR2aWRlbyA9IHN0YXRlO1xuXHRcdFx0XHR0cmFja3MgPSB0aGlzLm1lZGlhLmdldFZpZGVvVHJhY2tzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5BVURJT19WSURFTzpcblx0XHRcdFx0YXVkaW8gPSBzdGF0ZTtcblx0XHRcdFx0dmlkZW8gPSBzdGF0ZTtcblx0XHRcdFx0dHJhY2tzID0gdGhpcy5tZWRpYS5nZXRUcmFja3MoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vIE11dGUgbWVkaWEgdHJhY2tzXG5cdFx0dHJhY2tzLmZvckVhY2godHJhY2sgPT4ge3RyYWNrLmVuYWJsZWQgPSAhc3RhdGU7fSk7XG5cdFx0Ly8gU2lnbmFsIHN1YnNjcmliZXJzXG5cdFx0dGhpcy5tdXRlZCA9IHthdWRpbywgdmlkZW99O1xuXHRcdERhdGFTeW5jLnNldChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9L211dGVkYCwgdGhpcy5tdXRlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVW4tbXV0ZSBhIHRyYWNrIG9mIGEgU3RyZWFtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHJhY2s9QVVESU9dIFRoZSB0cmFjayB0byBtdXRlLiAoQVVESU8sIFZJREVPLCBBVURJT19WSURFTylcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+VW4tbXV0ZSB2aWRlbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLnVuTXV0ZShSZWFjaC50LlZJREVPKVxuXHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5Vbi1tdXRlIGF1ZGlvPC9jYXB0aW9uPlxuXHQgKiBzdHJlYW0udW5NdXRlKFJlYWNoLnQuQVVESU8pXG5cdCAqIC8vIG9yXG5cdCAqIHN0cmVhbS51bk11dGUoKVxuXHQgKi9cblx0dW5NdXRlKHRyYWNrKSB7XG5cdFx0dGhpcy5tdXRlKHRyYWNrLCBmYWxzZSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBzdHJlYW0gZm9yIHB1Ymxpc2hlZCBsaXN0LCBjbG9zZXMgYXNzb2NpYXRlZCBQZWVyQ29ubmVjdGlvbnMgYW5kIHN0b3BzIGN1cnJlbnQgTWVkaWFTdHJlYW1cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRpZighfltDTE9TRUQsIENMT1NJTkddLmluZGV4T2YodGhpcy5zdGF0dXMpKSB7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IENMT1NJTkc7XG5cdFx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBTdWJzY3JpYmVyc1xuXHRcdFx0Y29uc3QgcGF0aCA9IGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9YDtcblx0XHRcdERhdGFTeW5jLm9mZihwYXRoLCAnY2hpbGRfYWRkZWQnKTtcblx0XHRcdERhdGFTeW5jLm9mZihwYXRoLCAnY2hpbGRfcmVtb3ZlZCcpO1xuXHRcdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdHNcblx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCkuY2FuY2VsKCk7XG5cdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH1gKS5jYW5jZWwoKTtcblx0XHRcdC8vIFJlbW92ZSBzdWJzY3JpYmVyc1xuXHRcdFx0RGF0YVN5bmMucmVtb3ZlKHBhdGgpO1xuXHRcdFx0Ly8gUmVtb3ZlIHN0cmVhbVxuXHRcdFx0RGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N0cmVhbXMvJHt0aGlzLnVpZH1gKTtcblx0XHRcdHRoaXMubWVkaWEgPSBudWxsO1xuXHRcdFx0Ly8gQ2xvc2Vcblx0XHRcdHRoaXMuc3RhdHVzID0gQ0xPU0VEO1xuXHRcdH1cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RhdHVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTd2l0Y2ggdmlkZW8gaW5wdXQgZGV2aWNlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZGV2aWNlSWRdIEEgdmlkZW8gaW5wdXQgZGV2aWNlIElkIG9yIHRoZSBgZmFjaW5nTW9kZWAgdmFsdWVcblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHN3aXRjaENhbWVyYShkZXZpY2VJZCkge1xuXHRcdHJldHVybiB0aGlzLl9zd2l0Y2hEZXZpY2UoU3RyZWFtVHlwZXMuVklERU8sIGRldmljZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTd2l0Y2ggYXVkaW8gaW5wdXQgZGV2aWNlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZGV2aWNlSWRdIEEgYXVkaW8gaW5wdXQgZGV2aWNlIElkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG5cdCAqL1xuXHRzd2l0Y2hNaWNyb3Bob25lKGRldmljZUlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N3aXRjaERldmljZShTdHJlYW1UeXBlcy5BVURJTywgZGV2aWNlSWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN3aXRjaCBpbnB1dCBkZXZpY2Vcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBraW5kIFRoZSBraW5kIG9mIGRldmljZSB0byBzd2l0Y2hcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtkZXZpY2VJZF0gQW4gaW5wdXQgZGV2aWNlIGlkXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG4gICAgICovXG5cdF9zd2l0Y2hEZXZpY2Uoa2luZCwgZGV2aWNlSWQpIHtcblx0XHRMb2cuZCgnTG9jYWx+X3N3aXRjaERldmljZScsIGtpbmQsIGRldmljZUlkKTtcblx0XHRpZih0aGlzLm1lZGlhLmdldFRyYWNrcygpLnNvbWUodHJhY2sgPT4gdHJhY2sua2luZCA9PT0ga2luZCkpIHtcblx0XHRcdGxldCBuZXh0ID0gUHJvbWlzZS5yZXNvbHZlKGRldmljZUlkKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRNb2RlSWR4ID0gX2ZhY2luZ01vZGVzLmluZGV4T2YodGhpcy5faW5wdXRzW2tpbmRdKTtcblx0XHRcdGlmKCFkZXZpY2VJZCAmJiAhIX5jdXJyZW50TW9kZUlkeCkge1xuXHRcdFx0XHQvLyBMb29wIGZhY2luZ01vZGVzXG5cdFx0XHRcdG5leHQgPSBQcm9taXNlLnJlc29sdmUoX2ZhY2luZ01vZGVzWyhjdXJyZW50TW9kZUlkeCArIDEpICUgX2ZhY2luZ01vZGVzLmxlbmd0aF0pO1xuXHRcdFx0fSBlbHNlIGlmKCF+X2ZhY2luZ01vZGVzLmluZGV4T2YoZGV2aWNlSWQpKSB7XG5cdFx0XHRcdC8vIExvb3AgZGV2aWNlSWRzXG5cdFx0XHRcdG5leHQgPSBNZWRpYS5kZXZpY2VzKClcblx0XHRcdFx0XHQudGhlbihkID0+IHtcblx0XHRcdFx0XHRcdC8vIGRldmljZXMgSURzXG5cdFx0XHRcdFx0XHRjb25zdCBkZXZpY2VzID0gZFtgJHtraW5kfWlucHV0YF0ubWFwKG1lZGlhRGV2aWNlID0+IG1lZGlhRGV2aWNlLmRldmljZUlkKTtcblx0XHRcdFx0XHRcdC8vIFNvcnQgdG8gZW5zdXJlIHNhbWUgb3JkZXJcblx0XHRcdFx0XHRcdGRldmljZXMuc29ydCgpO1xuXHRcdFx0XHRcdFx0Ly8gTmV3IGRldmljZVxuXHRcdFx0XHRcdFx0bGV0IG5leHREZXZpY2UgPSBkZXZpY2VJZDtcblx0XHRcdFx0XHRcdGlmKGRldmljZUlkICYmICFkZXZpY2VzLnNvbWUoZGV2aWNlID0+IGRldmljZSA9PT0gZGV2aWNlSWQpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYFVua25vd24gJHtraW5kfSBkZXZpY2VgKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZighZGV2aWNlSWQgJiYgZGV2aWNlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBpZHggPSB0aGlzLl9pbnB1dHNba2luZF0gPyBkZXZpY2VzLmZpbmRJbmRleCh2ID0+IHYgPT09IHRoaXMuX2lucHV0c1traW5kXSwgdGhpcykgOiAwO1xuXHRcdFx0XHRcdFx0XHRuZXh0RGV2aWNlID0gZGV2aWNlc1srK2lkeCAlIGRldmljZXMubGVuZ3RoXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBuZXh0RGV2aWNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV4dCA9IFByb21pc2UucmVzb2x2ZShkZXZpY2VJZCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXh0XG5cdFx0XHRcdC50aGVuKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0aWYodGhpcy5faW5wdXRzW2tpbmRdICE9PSBkZXZpY2UpIHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSB2aWRlbyBzdHJlYW1zXG5cdFx0XHRcdFx0XHR0aGlzLl9pbnB1dHNba2luZF0gPSBkZXZpY2U7XG5cdFx0XHRcdFx0XHQvLyBTdG9wIHRyYWNrc1xuXHRcdFx0XHRcdFx0dGhpcy5tZWRpYS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgY29uc3RyYWludHNcblx0XHRcdFx0XHRcdGNvbnN0IGNvbnN0cmFpbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25zdHJhaW50cyk7XG5cdFx0XHRcdFx0XHRsZXQgcHJvcHMgPSBbJ2ZhY2luZ01vZGUnLCAnZGV2aWNlSWQnXTtcblx0XHRcdFx0XHRcdGlmKCF+X2ZhY2luZ01vZGVzLmluZGV4T2YoZGV2aWNlKSkge1xuXHRcdFx0XHRcdFx0XHRwcm9wcyA9IHByb3BzLnJldmVyc2UoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdF9zZXRDb25zdHJhaW5WYWx1ZShjb25zdHJhaW50c1traW5kXSwgcHJvcHNbMF0sIHByb3BzWzFdLCBkZXZpY2UpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2Fsfl9zd2l0Y2hEZXZpY2UnLCBraW5kLCBjb25zdHJhaW50cyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy51cGRhdGVDb25zdHJhaW50cyhjb25zdHJhaW50cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgQ3VycmVudCBzdHJlYW0gZG9lcyBub3QgY29udGFpbiBhICR7a2luZH0gdHJhY2tgKSk7XG5cdH1cblx0LyoqXG5cdCAqIFB1Ymxpc2ggYSBsb2NhbCBzdHJlYW1cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJvb21JZCBUaGUgcm9vbSBJZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgc3RyZWFtIHR5cGUsIHNlZSB7QGxpbmsgU3RyZWFtVHlwZXN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcblx0ICogQHBhcmFtIHs/RWxlbWVudH0gY29udGFpbmVyIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uXG5cdCAqIEBwYXJhbSB7P01lZGlhU3RyZWFtQ29uc3RyYWludHN9IFtjb25zdHJhaW50c10gVGhlIHN0cmVhbSBjb25zdHJhaW50cy4gSWYgbm90IGRlZmluZWQgdGhlIGNvbnN0cmFpbnRzIGRlZmluZWQgaW4gUmVhY2hDb25maWcgd2lsbCBiZSB1c2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c3RhdGljIHNoYXJlKHJvb21JZCwgdHlwZSwgY29udGFpbmVyLCBjb25zdHJhaW50cykge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gc2hhcmUgYSBzdHJlYW0uJykpO1xuXHRcdH1cblx0XHRjb25zdCBzdHJlYW1NZXRhRGF0YSA9IHtcblx0XHRcdFx0ZnJvbTogY2FjaGUudXNlci51aWQsXG5cdFx0XHRcdGRldmljZTogY2FjaGUuZGV2aWNlLFxuXHRcdFx0XHR0eXBlXG5cdFx0XHR9LFxuXHRcdFx0c2hhcmVkU3RyZWFtID0gbmV3IExvY2FsKE9iamVjdC5hc3NpZ24oe3Jvb21JZCwgY29uc3RyYWludHMsIGNvbnRhaW5lcn0sIHN0cmVhbU1ldGFEYXRhKSk7XG5cdFx0TG9nLmQoJ0xvY2FsfnNoYXJlJywge3NoYXJlZFN0cmVhbX0pO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShzaGFyZWRTdHJlYW0uY29uc3RyYWludHMpXG5cdFx0XHQudGhlbihtZWRpYSA9PiB7XG5cdFx0XHRcdHNoYXJlZFN0cmVhbS5tZWRpYSA9IG1lZGlhO1xuXHRcdFx0fSlcblx0XHRcdC8vIEdvdCBNZWRpYVN0cmVhbSwgcHVibGlzaCBpdFxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMucHVzaChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtc2AsIHN0cmVhbU1ldGFEYXRhKSlcblx0XHRcdC50aGVuKHN0cmVhbVJlZiA9PiB7XG5cdFx0XHRcdHNoYXJlZFN0cmVhbS51aWQgPSBzdHJlYW1SZWYubmFtZSgpO1xuXHRcdFx0XHRpZiAoc2hhcmVkU3RyZWFtLmlzVmlkZW9Mb2FkZWQpIHtcblx0XHRcdFx0XHRjb25zdCBzdHJlYW1TaXplID0ge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb0hlaWdodCxcblx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0c3RyZWFtUmVmLnVwZGF0ZShzdHJlYW1TaXplKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ubm9kZS5vbmxvYWRlZGRhdGEgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2hhcmVkU3RyZWFtLm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3RyZWFtU2l6ZSA9IHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb0hlaWdodCxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0c3RyZWFtUmVmLnVwZGF0ZShzdHJlYW1TaXplKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblx0XHRcdFx0Ly8gU2F2ZSBzaGFyZWRTdHJlYW1cblx0XHRcdFx0Y2FjaGUuc3RyZWFtcy5zaGFyZWRbc2hhcmVkU3RyZWFtLnVpZF0gPSBzaGFyZWRTdHJlYW07XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdHJlYW1zLyR7c2hhcmVkU3RyZWFtLnVpZH1gKS5yZW1vdmUoKTtcblx0XHRcdFx0Ly8gUmVtb3ZlIHNoYXJlZCBzdHJlYW0gb24gRGlzY29ubmVjdFxuXHRcdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHtyb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gKS5yZW1vdmUoKTtcblx0XHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHN1YnNjcmliZXJzXG5cdFx0XHRcdGNvbnN0XG5cdFx0XHRcdFx0cGF0aCA9IGBfL3Jvb21zLyR7c2hhcmVkU3RyZWFtLnJvb21JZH0vc3Vic2NyaWJlcnMvJHtzaGFyZWRTdHJlYW0udWlkfWAsXG5cdFx0XHRcdFx0dmFsdWUgPSBzbmFwRGF0YSA9PiBPYmplY3QuYXNzaWduKHtkZXZpY2U6IHNuYXBEYXRhLm5hbWUoKX0sIHNuYXBEYXRhLnZhbCgpIHx8IHt9KTtcblx0XHRcdFx0RGF0YVN5bmMub24ocGF0aCwgJ2NoaWxkX2FkZGVkJyxcblx0XHRcdFx0XHRzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gdmFsdWUoc25hcERhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2FsfnN1YnNjcmliZWQnLCBzdWJzY3JpYmVyKTtcblx0XHRcdFx0XHRcdGNhY2hlLnBlZXJDb25uZWN0aW9ucy5vZmZlcihzaGFyZWRTdHJlYW0sIHN1YnNjcmliZXIpXG5cdFx0XHRcdFx0XHRcdC50aGVuKHBjID0+IHNoYXJlZFN0cmVhbS5wZWVyQ29ubmVjdGlvbnMucHVzaChwYykpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0TG9nLmUuYmluZChMb2cpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9yZW1vdmVkJyxcblx0XHRcdFx0XHRzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gdmFsdWUoc25hcERhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmQoJ0xvY2FsfnVuLXN1YnNjcmliZWQnLCBzdWJzY3JpYmVyKTtcblx0XHRcdFx0XHRcdGNvbnN0IGNsb3NlZFBDID0gY2FjaGUucGVlckNvbm5lY3Rpb25zLmNsb3NlKHNoYXJlZFN0cmVhbS51aWQsIHN1YnNjcmliZXIuZGV2aWNlKTtcblx0XHRcdFx0XHRcdHNoYXJlZFN0cmVhbS5wZWVyQ29ubmVjdGlvbnMgPSBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLmZpbHRlcihwYyA9PiBwYyAhPT0gY2xvc2VkUEMpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0TG9nLmUuYmluZChMb2cpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdExvZy5kKCdMb2NhbH5zaGFyZWQnLCB7c2hhcmVkU3RyZWFtfSk7XG5cdFx0XHRcdHJldHVybiBzaGFyZWRTdHJlYW07XG5cdFx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvc3RyZWFtL0xvY2FsLmpzIiwiaW1wb3J0IFJlbW90ZSBmcm9tICcuL1JlbW90ZSc7XG5cbi8qKlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZWFtTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqXG5cdFx0ICogU2hhcmVkIGxvY2FsIHN0cmVhbXNcblx0XHQgKiBAdHlwZSB7eyo6IExvY2FsfX1cblx0XHQgKi9cblx0XHR0aGlzLnNoYXJlZCA9IHt9O1xuXHRcdC8qKlxuXHRcdCAqIFN1YnNjcmliZWQgcmVtb3RlIHN0cmVhbXNcblx0XHQgKiBAdHlwZSB7eyo6IFJlbW90ZX19XG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdGUgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBSZW1vdGUgc3RyZWFtIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3RyZWFtRGF0YVxuXHQgKiBAcmV0dXJucyB7UmVtb3RlfVxuXHQgKi9cblx0Z2V0UmVtb3RlKHN0cmVhbURhdGEpIHtcblx0XHRsZXQgcmVtb3RlU3RyZWFtID0gdGhpcy5yZW1vdGVbc3RyZWFtRGF0YS51aWRdO1xuXHRcdGlmKHJlbW90ZVN0cmVhbSkge1xuXHRcdFx0cmVtb3RlU3RyZWFtLnVwZGF0ZShzdHJlYW1EYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdGVbc3RyZWFtRGF0YS51aWRdID0gcmVtb3RlU3RyZWFtID0gbmV3IFJlbW90ZShzdHJlYW1EYXRhKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlbW90ZVN0cmVhbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBSZW1vdGUgc3RyZWFtIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3RyZWFtRGF0YVxuXHQgKiBAcmV0dXJucyB7UmVtb3RlfVxuXHQgKi9cblx0Z2V0U2hhcmVkKHN0cmVhbURhdGEpIHtcblx0XHQvLyBUT0RPOiBJZiBpdCBkb2VzIG5vdCBleGlzdHMgbG9jYWxseSBhcyBpdCBzaG91bGQsIG1heWJlIHdlIHNob3VsZCByZW1vdmUgaXQgP1xuXHRcdHJldHVybiB0aGlzLnNoYXJlZFtzdHJlYW1EYXRhLnVpZF07XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvc3RyZWFtL1N0cmVhbU1hbmFnZXIuanMiLCIvKmdsb2JhbCBSVENQZWVyQ29ubmVjdGlvbiovXG4vKmdsb2JhbCBSVENSdHBTZW5kZXIqL1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi91dGlsL01lZGlhJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IHtPUEVORUQsIENMT1NJTkcsIENMT1NFRH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL2FycmF5L2ZpbmQnO1xuXG5jb25zdCBEdGxzU3J0cEtleUFncmVlbWVudCA9IHtEdGxzU3J0cEtleUFncmVlbWVudDogdHJ1ZX07XG5jb25zdCBzZHBDb25zdHJhaW50cyA9IHJlY2VpdmUgPT4gKHtPZmZlclRvUmVjZWl2ZUF1ZGlvOiByZWNlaXZlLCBPZmZlclRvUmVjZWl2ZVZpZGVvOiByZWNlaXZlfSk7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGRpc2Nvbm5lY3RlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9ESVNDT05ORUNURUQgPSAnZGlzY29ubmVjdGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY29ubmVjdGVkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRD0gJ2Nvbm5lY3RlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNvbXBsZXRlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT01QTEVURUQgPSAnY29tcGxldGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2hlY2tpbmdcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkcgPSAnY2hlY2tpbmcnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBjbG9zZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEID0gJ2Nsb3NlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGZhaWxlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQgPSAnZmFpbGVkJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogYW5vdGhlciBzdGF0dXNcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfT1RIRVI9ICdvdGhlcic7XG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuY29uc3QgX3RvSlNPTiA9IG8gPT4gby50b0pTT04gJiYgdHlwZW9mIG8udG9KU09OID09PSAnZnVuY3Rpb24nID8gby50b0pTT04oKSA6IG87XG4vKipcbiAqIFRoZSBQZWVyQ29ubmVjdGlvbi4gQSBQZWVyQ29ubmVjdGlvbiB3aWxsIG9ubHkgY29uY2VybiBvbmUgTWVkaWFTdHJlYW0uXG4gKiBAY2xhc3MgUGVlckNvbm5lY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVlckNvbm5lY3Rpb24ge1xuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YWNrSWQgVGhlIFdlYlJUQyBzdGFjayBJRFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyZWFtSWQgVGhlIFN0cmVhbSBVSURcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZURldmljZSBUaGUgcmVtb3RlIGRldmljZSdzIFVJRFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHB1Ymxpc2ggUHVibGlzaCBvciBTdWJzY3JpYmUgP1xuXHQgKi9cblx0Y29uc3RydWN0b3Ioc3RhY2tJZCwgc3RyZWFtSWQsIHJlbW90ZURldmljZSwgcHVibGlzaCkge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBzdGFjayBpZGVudGlmaWVyLiBVc2VkIHRvIGlkZW50aWZ5IGV4Y2hhbmdlcyBiZXR3ZWVuIDIgZGV2aWNlc1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdGFja0lkID0gc3RhY2tJZDtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RyZWFtIGlkLiAoT25lIHN0cmVhbSBwZXIgUlRDUGVlckNvbm5lY3Rpb24pXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0cmVhbUlkID0gc3RyZWFtSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJlbW90ZSBkZXZpY2UgSWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3RlRGV2aWNlID0gcmVtb3RlRGV2aWNlO1xuXHRcdC8qKlxuXHRcdCAqIFBhdGggZm9yIGxvY2FsIHNpZ25hbGl6YXRpb25cblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2xvY2FsUGF0aCA9IGBfL3dlYnJ0Yy8ke3RoaXMuc3RhY2tJZH0vJHt0aGlzLnN0cmVhbUlkfS8ke2NhY2hlLmRldmljZX1gO1xuXHRcdC8qKlxuXHRcdCAqIFBhdGggZm9yIGxvY2FsIHNpZ25hbGl6YXRpb25cblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuX3JlbW90ZVBhdGggPSBgXy93ZWJydGMvJHt0aGlzLnN0YWNrSWR9LyR7dGhpcy5zdHJlYW1JZH0vJHt0aGlzLnJlbW90ZURldmljZX1gO1xuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyBpZiB0aGUgUGVlckNvbm5lY3Rpb24gaGFzIGJlZW4gZXN0YWJsaXNoZWQuIChVc2VmdWwgZm9yIHJlbmVnb3RpYXRpb24pLlxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMubmVnb3RpYXRlZCA9IGZhbHNlO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBET00gZWxlbWVudCB3aGVyZSB0aGUgcmVtb3RlIE1lZGlhU3RyZWFtIHdpbGwgYmUgZGlzcGxheWVkXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMubm9kZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogVGhlIERPTSBlbGVtZW50IGNvbnRhaW5nIHRoZSBtZWRpYSBlbGVtZW50XG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuY29udGFpbmVyID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBUaGUgYWN0dWFsIFJUQ1BlZXJDb25uZWN0aW9uXG5cdFx0ICogQHR5cGUge1JUQ1BlZXJDb25uZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMucGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oXG5cdFx0XHR7XG5cdFx0XHRcdGljZVNlcnZlcnM6IGNhY2hlLmNvbmZpZy5pY2VTZXJ2ZXJzXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRvcHRpb25hbDogW0R0bHNTcnRwS2V5QWdyZWVtZW50XSxcblx0XHRcdFx0bWFuZGF0b3J5OiBzZHBDb25zdHJhaW50cyghcHVibGlzaClcblx0XHRcdH1cblx0XHQpO1xuXHRcdC8vIEhhbmRsZSBJQ0UgY2FuZGlkYXRlc1xuXHRcdHRoaXMucGMub25pY2VjYW5kaWRhdGUgPSBlID0+IHtcblx0XHRcdGlmICghdGhpcy5uZWdvdGlhdGVkICYmIGUuY2FuZGlkYXRlKSB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbmljZWNhbmRpZGF0ZScsIGUuY2FuZGlkYXRlKTtcblx0XHRcdFx0RGF0YVN5bmMucHVzaChgJHt0aGlzLl9sb2NhbFBhdGh9L2ljZWAsIF90b0pTT04oZS5jYW5kaWRhdGUpKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHRoaXMucGMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCB0aGlzLnBjKTtcblx0XHRcdGNvbnN0IGljZUNvbm5lY3Rpb25TdGF0ZSA9IHRoaXMucGMuaWNlQ29ubmVjdGlvblN0YXRlO1xuXHRcdFx0c3dpdGNoIChpY2VDb25uZWN0aW9uU3RhdGUpIHtcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DSEVDS0lORzpcblx0XHRcdFx0XHQvLyBOb3RoaW5nIHRvIGRvIHlldFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRDpcblx0XHRcdFx0XHR0aGlzLl9hdHRhY2hTdHJlYW0oKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdGVJQ0VDYW5kaWRhdGVzKGZhbHNlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT01QTEVURUQ6XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEOlxuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRDpcblx0XHRcdFx0XHRMb2cuZSgnUGVlckNvbm5lY3Rpb25+c3RhdGVEaXNjb25uZWN0ZWQnLCAnRGlzY29ubmVjdCBQZWVyQ29ubmVjdGlvbicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRDpcblx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+c3RhdGVjbG9zZWQnLCAnQ2xvc2UgUGVlckNvbm5lY3Rpb24nKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5lZ290aWF0ZWQgPSB0aGlzLm5lZ290aWF0ZWQgfHwgdGhpcy5pc0Nvbm5lY3RlZDtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnLCB0aGlzLnBjLmljZUdhdGhlcmluZ1N0YXRlKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUGVlckNvbm5lY3Rpb24gc3RhdHVzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXR1cyA9IE9QRU5FRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgSUNFIENhbmRpZGF0ZXMgZGlzY292ZXJ5XG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxpc3RlbiBJbmRpY2F0ZXMgaWYgd2Ugc2hvdWxkIGxpc3RlbiB0byBuZXcgSUNFIGNhbmRpZGF0ZXNcblx0ICovXG5cdF9yZW1vdGVJQ0VDYW5kaWRhdGVzKGxpc3Rlbikge1xuXHRcdGNvbnN0XG5cdFx0XHRwYXRoID0gYCR7dGhpcy5fcmVtb3RlUGF0aH0vaWNlYCxcblx0XHRcdGV2ZW50ID0gJ2NoaWxkX2FkZGVkJztcblx0XHRpZihsaXN0ZW4pIHtcblx0XHRcdC8vIGRvbid0IGxpc3RlbiB0byBpY2UgY2FuZGlkYXRlcyBpZiBwYyBpcyBhbHJlYWR5IHVwIChyZW5lZ290aWF0aW9uKVxuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIHNuYXAgPT4ge1xuXHRcdFx0XHRjb25zdCBjYW5kaWRhdGUgPSBzbmFwLnZhbCgpO1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+YWRkSWNlQ2FuZGlkYXRlJywgY2FuZGlkYXRlKTtcblx0XHRcdFx0dGhpcy5wYy5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBdHRhY2ggdGhlIHJlbW90ZSBNZWRpYVN0cmVhbSB0byBhIG5vZGVcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfYXR0YWNoU3RyZWFtICgpIHtcblx0XHRpZih0aGlzLnJlbW90ZVN0cmVhbSAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBNZWRpYS5hdHRhY2hTdHJlYW0odGhpcy5yZW1vdGVTdHJlYW0sIHRoaXMuY29udGFpbmVyLCB0aGlzLm5vZGUpO1xuXHRcdFx0dGhpcy5ub2RlLm11dGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSByZW1vdGUgTWVkaWFTdHJlYW1cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHR5cGUge01lZGlhU3RyZWFtfVxuXHQgKi9cblx0c2V0IHJlbW90ZVN0cmVhbSAoc3RyZWFtKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3JlbW90ZVN0cmVhbSA9IHN0cmVhbTtcblx0XHR0aGlzLl9hdHRhY2hTdHJlYW0oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcmVtb3RlIE1lZGlhU3RyZWFtXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdGdldCByZW1vdGVTdHJlYW0gKCkge1xuXHRcdHJldHVybiB0aGlzLl9yZW1vdGVTdHJlYW07XG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIGlmIHRoZSBQZWVyQ29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBiYXNlZCBvbiBJQ0UgY29ubmVjdGlvbiBzdGF0ZVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc0Nvbm5lY3RlZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGMgJiZcblx0XHRcdCEhfltcblx0XHRcdFx0SUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVELFxuXHRcdFx0XHRJQ0VfQ09OTkVDVElPTl9TVEFURV9DT01QTEVURUQsXG5cdFx0XHRcdElDRV9DT05ORUNUSU9OX1NUQVRFX09USEVSXG5cdFx0XHRdLmluZGV4T2YodGhpcy5wYy5pY2VDb25uZWN0aW9uU3RhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgUlRDUGVlckNvbm5lY3Rpb24gZm9yIHN1YnNjcmliZXJzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSBodG1sRWxlbWVudFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0YW5zd2VyKGh0bWxFbGVtZW50KSB7XG5cdFx0TG9nLmkoJ1BlZXJDb25uZWN0aW9ufmFuc3dlcicsIHtodG1sRWxlbWVudCwgcGVlckNvbm5lY3Rpb246IHRoaXN9KTtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGh0bWxFbGVtZW50O1xuXHRcdGlmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb250cmFjaycpKSB7XG5cdFx0XHR0aGlzLnBjLm9udHJhY2sgPSBlID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9udHJhY2snLCBlLnN0cmVhbXNbMF0pO1xuXHRcdFx0XHR0aGlzLnJlbW90ZVN0cmVhbSA9IGUuc3RyZWFtc1swXTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucGMub25hZGRzdHJlYW0gPSBlID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uYWRkc3RyZWFtJywgZS5zdHJlYW0pO1xuXHRcdFx0XHR0aGlzLnJlbW90ZVN0cmVhbSA9IGUuc3RyZWFtO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBMaXN0ZW4gdG8gU0RQIG9mZmVyXG5cdFx0RGF0YVN5bmMub24oYCR7dGhpcy5fcmVtb3RlUGF0aH0vc2RwYCwgJ3ZhbHVlJywgc25hcCA9PiB7XG5cdFx0XHRjb25zdCBzZHBPZmZlciA9IHNuYXAudmFsKCk7XG5cdFx0XHRMb2cuZCgnT2ZmZXInLCBzZHBPZmZlcik7XG5cdFx0XHRpZihzZHBPZmZlciAhPSBudWxsKSB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlcmVkJywgc2RwT2ZmZXIpO1xuXHRcdFx0XHR0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKHNkcE9mZmVyKVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IExvZy5kKCdQZWVyQ29ubmVjdGlvbn5yZW1vdGVEZXNjcmlwdGlvbicsIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24pKVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICgvXm9mZmVyJC8udGVzdCh0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLnR5cGUpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnBjLmNyZWF0ZUFuc3dlcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignU0RQIGlzIG5vdCBhbiBvZmZlcicpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMuX3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikpXG5cdFx0XHRcdFx0LnRoZW4oZGVzY3JpcHRpb24gPT4gdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+bG9jYWxEZXNjcmlwdGlvbicsIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZW1vdGVJQ0VDYW5kaWRhdGVzKHRydWUpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMudXBkYXRlKGAke3RoaXMuX2xvY2FsUGF0aH0vc2RwYCwgX3RvSlNPTih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pKSlcblx0XHRcdFx0XHQuY2F0Y2goTG9nLnIoJ1BlZXJDb25uZWN0aW9ufmxvY2FsRGVzY3JpcHRpb24nKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgUlRDUGVlckNvbm5lY3Rpb24gZm9yIHB1Ymxpc2hlcnNcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHN0cmVhbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0b2ZmZXIoc3RyZWFtKSB7XG5cdFx0TG9nLmkoJ1BlZXJDb25uZWN0aW9ufm9mZmVyJywge3N0cmVhbSwgcGVlckNvbm5lY3Rpb246IHRoaXN9KTtcblx0XHRsZXQgc2VuZFRpbWVvdXQ7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMucGMub25uZWdvdGlhdGlvbm5lZWRlZCA9ICgpID0+IHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9ubmVnb3RpYXRpb25uZWVkZWQnKTtcblx0XHRcdFx0Ly8gRGVib3VuY2Ugc2VuZCAocmVuZWdvdGlhdGlvbiB0cmlnZ2VycyBtdWx0aXBsZSBuZWdvdGlhdGlvbm5lZWRlZCBldmVudHMpXG5cdFx0XHRcdGlmKHNlbmRUaW1lb3V0KSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHNlbmRUaW1lb3V0KTtcblx0XHRcdFx0XHRzZW5kVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZW5kVGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5fc2VuZE9mZmVyKClcblx0XHRcdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0aGlzKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlcicsIGUpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgMjApO1xuXHRcdFx0fTtcblx0XHRcdERhdGFTeW5jLm9uKGAke3RoaXMuX3JlbW90ZVBhdGh9L3NkcGAsICd2YWx1ZScsIHNuYXAgPT4ge1xuXHRcdFx0XHRjb25zdCBzZHBBbnN3ZXIgPSBzbmFwLnZhbCgpO1xuXHRcdFx0XHRpZihzZHBBbnN3ZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlciNhbnN3ZXJlZCcsIHNkcEFuc3dlcik7XG5cdFx0XHRcdFx0dGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHBBbnN3ZXIpXG5cdFx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vZmZlciNyZW1vdGVEZXNjcmlwdGlvbicsIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9yZW1vdGVJQ0VDYW5kaWRhdGVzKHRydWUpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5jYXRjaChMb2cuZS5iaW5kKExvZywgJ1BlZXJDb25uZWN0aW9ufnJlbW90ZURlc2NyaXB0aW9uJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuX2FsdGVyU3RyZWFtKHN0cmVhbSwgJ2FkZCcpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBTRFAgb2ZmZXIgYW5kIHB1c2ggaXRcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfc2VuZE9mZmVyKCkge1xuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fc2VuZE9mZmVyJyk7XG5cdFx0cmV0dXJuIHRoaXMucGMuY3JlYXRlT2ZmZXIoKVxuXHRcdFx0LnRoZW4oZGVzY3JpcHRpb24gPT4gdGhpcy5fc2V0UHJlZmVycmVkQ29kZWNzKGRlc2NyaXB0aW9uKSlcblx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikpXG5cdFx0XHQudGhlbigoKSA9PiBMb2cuZCgnUGVlckNvbm5lY3Rpb25+cmVuZWdvdGlhdGUjbG9jYWxEZXNjcmlwdGlvbicsIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbikpXG5cdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy51cGRhdGUoYCR7dGhpcy5fbG9jYWxQYXRofS9zZHBgLCBfdG9KU09OKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbikpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGQvUmVtb3ZlIHRyYWNrcyB0byB0aGUgUGVlckNvbm5lY3Rpb24gc3RyZWFtXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IHN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfYWx0ZXJTdHJlYW0oc3RyZWFtLCBtZXRob2QpIHtcblx0XHRpZihPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgYCR7bWV0aG9kfVRyYWNrYCkpIHtcblx0XHRcdHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRoaXMucGNbYCR7bWV0aG9kfVRyYWNrYF0odHJhY2ssIHN0cmVhbSksIHRoaXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBjW2Ake21ldGhvZH1TdHJlYW1gXShzdHJlYW0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXN0YXJ0IFNEUCBuZWdvdGlhdGlvbiBmb2xsb3dpbmcgYSBNZWRpYVN0cmVhbSBjaGFuZ2Vcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gb2xkU3RyZWFtXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG5ld1N0cmVhbVxuXHQgKi9cblx0cmVuZWdvdGlhdGUob2xkU3RyZWFtLCBuZXdTdHJlYW0pIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+cmVuZWdvdGlhdGUnKTtcblx0XHRpZigoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdnZXRTZW5kZXJzJykpXG5cdFx0XHQmJiAoJ1JUQ1J0cFNlbmRlcicgaW4gd2luZG93KVxuXHRcdFx0JiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENSdHBTZW5kZXIucHJvdG90eXBlLCAncmVwbGFjZVRyYWNrJykpe1xuXG5cdFx0XHQvLyBtb3pSVENQZWVyQ29ubmVjdGlvbiBpbXBsZW1lbnRhdGlvblxuXHRcdFx0dGhpcy5wYy5nZXRTZW5kZXJzKCkuZm9yRWFjaChzZW5kZXIgPT4ge1xuXHRcdFx0XHRsZXQgbmV3VHJhY2tzO1xuXHRcdFx0XHRzd2l0Y2ggKHNlbmRlci50cmFjay5raW5kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnYXVkaW8nOlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gbmV3U3RyZWFtLmdldEF1ZGlvVHJhY2tzKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRcdFx0XHRuZXdUcmFja3MgPSBuZXdTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRuZXdUcmFja3MgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihuZXdUcmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2VuZGVyLnJlcGxhY2VUcmFjayhuZXdUcmFja3NbMF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuX3NlbmRPZmZlcigpXG5cdFx0XHRcdC5jYXRjaChlID0+IHtMb2cuZCgnUGVlckNvbm5lY3Rpb25+cmVuZWdvdGlhdGUnLCBlKTt9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fYWx0ZXJTdHJlYW0ob2xkU3RyZWFtLCAncmVtb3ZlJyk7XG5cdFx0XHR0aGlzLl9hbHRlclN0cmVhbShuZXdTdHJlYW0sICdhZGQnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgdGhlIFBlZXJDb25uZWN0aW9uIGFuZCBzdG9wIGxpc3RlbmluZyB0byBTRFAgbWVzc2FnZXNcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNsb3NlKCkge1xuXHRcdGlmKHRoaXMuX3N0YXR1cyA9PT0gT1BFTkVEKSB7XG5cdFx0XHR0aGlzLl9zdGF0dXMgPSBDTE9TSU5HO1xuXHRcdFx0Ly8gU3RvcCBkaXNwbGF5XG5cdFx0XHRpZiAodGhpcy5ub2RlKSB7XG5cdFx0XHRcdHRoaXMubm9kZS5zdG9wICYmIHRoaXMubm9kZS5zdG9wKCk7XG5cdFx0XHRcdHRoaXMubm9kZS5zcmNPYmplY3QgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLm5vZGUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgdG8gcmVtb3RlIElDRSBjYW5kaWRhdGVzXG5cdFx0XHR0aGlzLl9yZW1vdGVJQ0VDYW5kaWRhdGVzKGZhbHNlKTtcblx0XHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIFNEUCBtZXNzYWdlc1xuXHRcdFx0RGF0YVN5bmMub2ZmKGAke3RoaXMuX3JlbW90ZVBhdGh9L3NkcGAsICd2YWx1ZScpO1xuXHRcdFx0Ly8gUmVtb3ZlIGRhdGFcblx0XHRcdERhdGFTeW5jLnJlbW92ZSh0aGlzLl9sb2NhbFBhdGgpO1xuXHRcdFx0Ly8gQ2xvc2UgUGVlckNvbm5lY3Rpb25cblx0XHRcdGlmICh0aGlzLnBjICYmIHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgIT09ICdjbG9zZWQnKSB7XG5cdFx0XHRcdHRoaXMucGMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9ICgpID0+IHtcblx0XHRcdFx0XHRpZih0aGlzLnBjLnNpZ25hbGluZ1N0YXRlICE9PSAnY2xvc2VkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdHVzID0gQ0xPU0VEO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5wYy5jbG9zZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc3RhdHVzID0gQ0xPU0VEO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFZGl0cyB0aGUgU0RQIHRvIHNldCB0aGUgcHJlZmVycmVkIGF1ZGlvL3ZpZGVvIGNvZGVjXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1JUQ1Nlc3Npb25EZXNjcmlwdGlvbn0gZGVzY3JpcHRpb24gVGhlIGRlc2NyaXB0aW9uIHJldHJpZXZlZCBieSBjcmVhdGVPZmZlci9jcmVhdGVBbnN3ZXJcblx0ICogQHJldHVybnMge1JUQ1Nlc3Npb25EZXNjcmlwdGlvbnx7c2RwOiBzdHJpbmcsIHR5cGU6IHN0cmluZ319XG5cdCAqL1xuXHRfc2V0UHJlZmVycmVkQ29kZWNzKGRlc2NyaXB0aW9uKSB7XG5cdFx0aWYoY2FjaGUuY29uZmlnLnByZWZlcnJlZFZpZGVvQ29kZWMgfHwgY2FjaGUuY29uZmlnLnByZWZlcnJlZEF1ZGlvQ29kZWMpIHtcblx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5fc2V0UHJlZmVycmVkQ29kZWNzJywge2Rlc2NyaXB0aW9uLCBjb25maWc6IGNhY2hlLmNvbmZpZ30pO1xuXHRcdFx0Y29uc3Qgc2RwTGluZXMgPSBkZXNjcmlwdGlvbi5zZHAuc3BsaXQoL1xccj9cXG4vKTtcblx0XHRcdGNvbnN0IG1lZGlhcyA9IHthdWRpbzogW10sIHZpZGVvOiBbXX07XG5cdFx0XHRsZXQgY3VycmVudCA9IG51bGw7XG5cdFx0XHQvLyBQYXJzZSBTRFBcblx0XHRcdHNkcExpbmVzLmZvckVhY2goKHNkcExpbmUsIGkpID0+IHtcblx0XHRcdFx0aWYoL15tPS8udGVzdChzZHBMaW5lKSkge1xuXHRcdFx0XHRcdGNvbnN0IGQgPSAvXm09KFxcdyspXFxzWzAtOVxcL10rXFxzW0EtWmEtejAtOVxcL10rXFxzKFswLTlcXHNdKykvLmV4ZWMoc2RwTGluZSk7XG5cdFx0XHRcdFx0Y3VycmVudCA9IHtcblx0XHRcdFx0XHRcdGZtdDogZFsyXS5zcGxpdCgvXFxzLyksXG5cdFx0XHRcdFx0XHRpbmRleDogaSxcblx0XHRcdFx0XHRcdGNvZGVjczogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdG1lZGlhc1tkWzFdXS5wdXNoKGN1cnJlbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYoY3VycmVudCAmJiAvXmE9cnRwbWFwOi8udGVzdChzZHBMaW5lKSkge1xuXHRcdFx0XHRcdGNvbnN0IGMgPSAvXmE9cnRwbWFwOihcXGQrKVxccyhbYS16QS1aMC05XFwtXFwvXSspLy5leGVjKHNkcExpbmUpO1xuXHRcdFx0XHRcdGlmKGMpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQuY29kZWNzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRpZDogY1sxXSxcblx0XHRcdFx0XHRcdFx0bmFtZTogY1syXSxcblx0XHRcdFx0XHRcdFx0aW5kZXg6IGlcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NldFByZWZlcnJlZENvZGVjcycsIG1lZGlhcyk7XG5cdFx0XHRsZXQgdXBkYXRlID0gZmFsc2U7XG5cdFx0XHRjb25zdCBwcmVmZXIgPSAobWVkaWFMaXN0LCBwcmVmZXJlZENvZGVjKSA9PiB7XG5cdFx0XHRcdG1lZGlhTGlzdC5mb3JFYWNoKG1lZGlhID0+IHtcblx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IG1lZGlhLmNvZGVjcy5maW5kKGNvZGVjID0+IHByZWZlcmVkQ29kZWMudGVzdChjb2RlYy5uYW1lKSk7XG5cdFx0XHRcdFx0aWYoc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGZtdCA9IFtzZWxlY3RlZC5pZF0uY29uY2F0KG1lZGlhLmZtdC5maWx0ZXIoaWRzID0+IGlkcyAhPT0gc2VsZWN0ZWQuaWQpKTtcblx0XHRcdFx0XHRcdHNkcExpbmVzW21lZGlhLmluZGV4XSA9IHNkcExpbmVzW21lZGlhLmluZGV4XS5yZXBsYWNlKG1lZGlhLmZtdC5qb2luKCcgJyksIGZtdC5qb2luKCcgJykpO1xuXHRcdFx0XHRcdFx0dXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdGlmKGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRWaWRlb0NvZGVjKSB7XG5cdFx0XHRcdHByZWZlcihtZWRpYXMudmlkZW8sIGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRWaWRlb0NvZGVjKTtcblx0XHRcdH1cblx0XHRcdGlmKGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRBdWRpb0NvZGVjKSB7XG5cdFx0XHRcdHByZWZlcihtZWRpYXMuYXVkaW8sIGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRBdWRpb0NvZGVjKTtcblx0XHRcdH1cblx0XHRcdGlmKHVwZGF0ZSkge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NldFByZWZlcnJlZENvZGVjcycsIHNkcExpbmVzLmpvaW4oJ1xcclxcbicpKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRzZHA6IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpLFxuXHRcdFx0XHRcdHR5cGU6IGRlc2NyaXB0aW9uLnR5cGVcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRlc2NyaXB0aW9uO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb24uanMiLCJpbXBvcnQgUGVlckNvbm5lY3Rpb24gZnJvbSAnLi9QZWVyQ29ubmVjdGlvbic7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi4vdXRpbC9Mb2cnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi4vdXRpbC9EYXRhU3luYyc7XG5cbmNvbnN0IGdldFN0YWNrSWQgPSAoaWQxLCBpZDIpID0+IGlkMS5sb2NhbGVDb21wYXJlKGlkMiwgJ2VuLXVzJykgPiAwID8gYCR7aWQxfS0ke2lkMn1gIDpgJHtpZDJ9LSR7aWQxfWA7XG5cbi8qKlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVlckNvbm5lY3Rpb25NYW5hZ2VyIHtcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvKipcblx0XHQgKiBXZWJSVEMgc3RhY2tzXG5cdFx0ICogQHR5cGUge3sqOiB7KjogUGVlckNvbm5lY3Rpb259fX1cblx0XHQgKi9cblx0XHR0aGlzLnN0YWNrcyA9IHt9O1xuXHR9XG5cblxuXHQvKipcblx0ICogR2V0IGEgUGVlckNvbm5lY3Rpb24gb2JqZWN0IGZvciBhIHNwZWNpZmljIHN0cmVhbVxuXHQgKiBAcGFyYW0ge0xvY2FsfFJlbW90ZX0gc3RyZWFtXG5cdCAqIEBwYXJhbSB7UmVtb3RlfHt0bzogc3RyaW5nLCBkZXZpY2U6c3RyaW5nfX0gcmVtb3RlXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcHVibGlzaFxuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0Z2V0UGVlckNvbm5lY3Rpb24oc3RyZWFtLCByZW1vdGUsIHB1Ymxpc2gpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIGdldCBhIFBlZXJDb25uZWN0aW9uXFwncyBvYmplY3QuJykpO1xuXHRcdH1cblx0XHRjb25zdCBzdGFja0lkID0gZ2V0U3RhY2tJZChyZW1vdGUuZGV2aWNlLCBjYWNoZS5kZXZpY2UpO1xuXG5cdFx0aWYodGhpcy5zdGFja3Nbc3RhY2tJZF0gJiYgdGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtLnVpZF0pIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtLnVpZF0pO1xuXHRcdH1cblxuXHRcdGlmKCF0aGlzLnN0YWNrc1tzdGFja0lkXSkge1xuXHRcdFx0dGhpcy5zdGFja3Nbc3RhY2tJZF0gPSB7fTtcblx0XHR9XG5cblx0XHRjb25zdCB1c2VycyA9IHt9O1xuXHRcdHVzZXJzW2NhY2hlLnVzZXIudWlkXSA9IHRydWU7XG5cdFx0dXNlcnNbcmVtb3RlLmZyb20gfHwgcmVtb3RlLnRvXSA9IHRydWU7XG5cblx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL3dlYnJ0Yy8ke3N0YWNrSWR9YCwgdXNlcnMpXG5cdFx0XHQudGhlbigoKSA9PiBuZXcgUGVlckNvbm5lY3Rpb24oc3RhY2tJZCwgc3RyZWFtLnVpZCwgcmVtb3RlLmRldmljZSwgcHVibGlzaCkpXG5cdFx0XHQudGhlbihwYyA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+Z2V0UGVlckNvbm5lY3Rpb24nLCB7c3RhY2tJZCwgc3RyZWFtSWQ6IHN0cmVhbS51aWQsIHBjfSk7XG5cdFx0XHRcdHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdID0gcGM7XG5cdFx0XHRcdHJldHVybiBwYztcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1BlZXJDb25uZWN0aW9uTWFuYWdlcn5nZXRQZWVyQ29ubmVjdGlvbicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgb2ZmZXIgZm9yIGEgc3RyZWFtIHRvIGEgc3Vic2NyaWJlclxuXHQgKiBAcGFyYW0ge0xvY2FsfSBsb2NhbFN0cmVhbVxuXHQgKiBAcGFyYW0ge29iamVjdH0gc3Vic2NyaWJlclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlLjxQZWVyQ29ubmVjdGlvbj59XG5cdCAqL1xuXHRvZmZlcihsb2NhbFN0cmVhbSwgc3Vic2NyaWJlcikge1xuXHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+b2ZmZXInLCB7bG9jYWxTdHJlYW0sIHN1YnNjcmliZXJ9KTtcblx0XHRyZXR1cm4gdGhpcy5nZXRQZWVyQ29ubmVjdGlvbihsb2NhbFN0cmVhbSwgc3Vic2NyaWJlciwgdHJ1ZSlcblx0XHRcdC50aGVuKHBjID0+IHBjLm9mZmVyKGxvY2FsU3RyZWFtLm1lZGlhKSk7XG5cdH1cblxuXHQvKipcblx0ICogQW5zd2VyIHRvIHRoZSBvZmZlciBmcm9tIHRoZSBwdWJsaXNoZXJcblx0ICogQHBhcmFtIHtSZW1vdGV9IHJlbW90ZVN0cmVhbVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGh0bWxFbGVtZW50XG5cdCAqIEByZXR1cm4geyp8UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0YW5zd2VyKHJlbW90ZVN0cmVhbSwgaHRtbEVsZW1lbnQpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2VyfmFuc3dlcicsIHtyZW1vdGVTdHJlYW0sIGh0bWxFbGVtZW50fSk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGVlckNvbm5lY3Rpb24ocmVtb3RlU3RyZWFtLCByZW1vdGVTdHJlYW0sIGZhbHNlKVxuXHRcdFx0LnRoZW4ocGMgPT4gcGMuYW5zd2VyKGh0bWxFbGVtZW50KSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2UgYSBQZWVyQ29ubmVjdGlvblxuXHQgKiBAcGFyYW0gc3RyZWFtSWRcblx0ICogQHBhcmFtIHJlbW90ZURldmljZVxuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0Y2xvc2Uoc3RyZWFtSWQsIHJlbW90ZURldmljZSkge1xuXHRcdGNvbnN0IHN0YWNrSWQgPSBnZXRTdGFja0lkKHJlbW90ZURldmljZSwgY2FjaGUuZGV2aWNlKSxcblx0XHRcdHBjID0gdGhpcy5zdGFja3Nbc3RhY2tJZF0gPyB0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF0gOiBudWxsO1xuXHRcdGlmKHBjKXtcblx0XHRcdHBjLmNsb3NlKCk7XG5cdFx0XHR0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF0gPSBudWxsO1xuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbUlkXTtcblx0XHRcdHJldHVybiBwYztcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb25NYW5hZ2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZpbmQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9mbi9hcnJheS9maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9oID09IDEpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZWFjdGlvbjtcbiAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYgKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKSByZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIGlmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYgKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICgkcmVwbGFjZXIpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBTRFAgaGVscGVycy5cbnZhciBTRFBVdGlscyA9IHt9O1xuXG4vLyBHZW5lcmF0ZSBhbiBhbHBoYW51bWVyaWMgaWRlbnRpZmllciBmb3IgY25hbWUgb3IgbWlkcy5cbi8vIFRPRE86IHVzZSBVVUlEcyBpbnN0ZWFkPyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWQvOTgyODgzXG5TRFBVdGlscy5nZW5lcmF0ZUlkZW50aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxMCk7XG59O1xuXG4vLyBUaGUgUlRDUCBDTkFNRSB1c2VkIGJ5IGFsbCBwZWVyY29ubmVjdGlvbnMgZnJvbSB0aGUgc2FtZSBKUy5cblNEUFV0aWxzLmxvY2FsQ05hbWUgPSBTRFBVdGlscy5nZW5lcmF0ZUlkZW50aWZpZXIoKTtcblxuLy8gU3BsaXRzIFNEUCBpbnRvIGxpbmVzLCBkZWFsaW5nIHdpdGggYm90aCBDUkxGIGFuZCBMRi5cblNEUFV0aWxzLnNwbGl0TGluZXMgPSBmdW5jdGlvbihibG9iKSB7XG4gIHJldHVybiBibG9iLnRyaW0oKS5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gbGluZS50cmltKCk7XG4gIH0pO1xufTtcbi8vIFNwbGl0cyBTRFAgaW50byBzZXNzaW9ucGFydCBhbmQgbWVkaWFzZWN0aW9ucy4gRW5zdXJlcyBDUkxGLlxuU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgdmFyIHBhcnRzID0gYmxvYi5zcGxpdCgnXFxubT0nKTtcbiAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbihwYXJ0LCBpbmRleCkge1xuICAgIHJldHVybiAoaW5kZXggPiAwID8gJ209JyArIHBhcnQgOiBwYXJ0KS50cmltKCkgKyAnXFxyXFxuJztcbiAgfSk7XG59O1xuXG4vLyBSZXR1cm5zIGxpbmVzIHRoYXQgc3RhcnQgd2l0aCBhIGNlcnRhaW4gcHJlZml4LlxuU0RQVXRpbHMubWF0Y2hQcmVmaXggPSBmdW5jdGlvbihibG9iLCBwcmVmaXgpIHtcbiAgcmV0dXJuIFNEUFV0aWxzLnNwbGl0TGluZXMoYmxvYikuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gbGluZS5pbmRleE9mKHByZWZpeCkgPT09IDA7XG4gIH0pO1xufTtcblxuLy8gUGFyc2VzIGFuIElDRSBjYW5kaWRhdGUgbGluZS4gU2FtcGxlIGlucHV0OlxuLy8gY2FuZGlkYXRlOjcwMjc4NjM1MCAyIHVkcCA0MTgxOTkwMiA4LjguOC44IDYwNzY5IHR5cCByZWxheSByYWRkciA4LjguOC44XG4vLyBycG9ydCA1NTk5NlwiXG5TRFBVdGlscy5wYXJzZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzO1xuICAvLyBQYXJzZSBib3RoIHZhcmlhbnRzLlxuICBpZiAobGluZS5pbmRleE9mKCdhPWNhbmRpZGF0ZTonKSA9PT0gMCkge1xuICAgIHBhcnRzID0gbGluZS5zdWJzdHJpbmcoMTIpLnNwbGl0KCcgJyk7XG4gIH0gZWxzZSB7XG4gICAgcGFydHMgPSBsaW5lLnN1YnN0cmluZygxMCkuc3BsaXQoJyAnKTtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGUgPSB7XG4gICAgZm91bmRhdGlvbjogcGFydHNbMF0sXG4gICAgY29tcG9uZW50OiBwYXJzZUludChwYXJ0c1sxXSwgMTApLFxuICAgIHByb3RvY29sOiBwYXJ0c1syXS50b0xvd2VyQ2FzZSgpLFxuICAgIHByaW9yaXR5OiBwYXJzZUludChwYXJ0c1szXSwgMTApLFxuICAgIGlwOiBwYXJ0c1s0XSxcbiAgICBwb3J0OiBwYXJzZUludChwYXJ0c1s1XSwgMTApLFxuICAgIC8vIHNraXAgcGFydHNbNl0gPT0gJ3R5cCdcbiAgICB0eXBlOiBwYXJ0c1s3XVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSA4OyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzd2l0Y2ggKHBhcnRzW2ldKSB7XG4gICAgICBjYXNlICdyYWRkcic6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdycG9ydCc6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCA9IHBhcnNlSW50KHBhcnRzW2kgKyAxXSwgMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RjcHR5cGUnOlxuICAgICAgICBjYW5kaWRhdGUudGNwVHlwZSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1ZnJhZyc6XG4gICAgICAgIGNhbmRpZGF0ZS51ZnJhZyA9IHBhcnRzW2kgKyAxXTsgLy8gZm9yIGJhY2t3YXJkIGNvbXBhYmlsaXR5LlxuICAgICAgICBjYW5kaWRhdGUudXNlcm5hbWVGcmFnbWVudCA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiAvLyBleHRlbnNpb24gaGFuZGxpbmcsIGluIHBhcnRpY3VsYXIgdWZyYWdcbiAgICAgICAgY2FuZGlkYXRlW3BhcnRzW2ldXSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjYW5kaWRhdGU7XG59O1xuXG4vLyBUcmFuc2xhdGVzIGEgY2FuZGlkYXRlIG9iamVjdCBpbnRvIFNEUCBjYW5kaWRhdGUgYXR0cmlidXRlLlxuU0RQVXRpbHMud3JpdGVDYW5kaWRhdGUgPSBmdW5jdGlvbihjYW5kaWRhdGUpIHtcbiAgdmFyIHNkcCA9IFtdO1xuICBzZHAucHVzaChjYW5kaWRhdGUuZm91bmRhdGlvbik7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5jb21wb25lbnQpO1xuICBzZHAucHVzaChjYW5kaWRhdGUucHJvdG9jb2wudG9VcHBlckNhc2UoKSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wcmlvcml0eSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5pcCk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wb3J0KTtcblxuICB2YXIgdHlwZSA9IGNhbmRpZGF0ZS50eXBlO1xuICBzZHAucHVzaCgndHlwJyk7XG4gIHNkcC5wdXNoKHR5cGUpO1xuICBpZiAodHlwZSAhPT0gJ2hvc3QnICYmIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyAmJlxuICAgICAgY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KSB7XG4gICAgc2RwLnB1c2goJ3JhZGRyJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRBZGRyZXNzKTsgLy8gd2FzOiByZWxBZGRyXG4gICAgc2RwLnB1c2goJ3Jwb3J0Jyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KTsgLy8gd2FzOiByZWxQb3J0XG4gIH1cbiAgaWYgKGNhbmRpZGF0ZS50Y3BUeXBlICYmIGNhbmRpZGF0ZS5wcm90b2NvbC50b0xvd2VyQ2FzZSgpID09PSAndGNwJykge1xuICAgIHNkcC5wdXNoKCd0Y3B0eXBlJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnRjcFR5cGUpO1xuICB9XG4gIGlmIChjYW5kaWRhdGUudWZyYWcpIHtcbiAgICBzZHAucHVzaCgndWZyYWcnKTtcbiAgICBzZHAucHVzaChjYW5kaWRhdGUudWZyYWcpO1xuICB9XG4gIHJldHVybiAnY2FuZGlkYXRlOicgKyBzZHAuam9pbignICcpO1xufTtcblxuLy8gUGFyc2VzIGFuIGljZS1vcHRpb25zIGxpbmUsIHJldHVybnMgYW4gYXJyYXkgb2Ygb3B0aW9uIHRhZ3MuXG4vLyBhPWljZS1vcHRpb25zOmZvbyBiYXJcblNEUFV0aWxzLnBhcnNlSWNlT3B0aW9ucyA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgcmV0dXJuIGxpbmUuc3Vic3RyKDE0KS5zcGxpdCgnICcpO1xufVxuXG4vLyBQYXJzZXMgYW4gcnRwbWFwIGxpbmUsIHJldHVybnMgUlRDUnRwQ29kZGVjUGFyYW1ldGVycy4gU2FtcGxlIGlucHV0OlxuLy8gYT1ydHBtYXA6MTExIG9wdXMvNDgwMDAvMlxuU0RQVXRpbHMucGFyc2VSdHBNYXAgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDkpLnNwbGl0KCcgJyk7XG4gIHZhciBwYXJzZWQgPSB7XG4gICAgcGF5bG9hZFR5cGU6IHBhcnNlSW50KHBhcnRzLnNoaWZ0KCksIDEwKSAvLyB3YXM6IGlkXG4gIH07XG5cbiAgcGFydHMgPSBwYXJ0c1swXS5zcGxpdCgnLycpO1xuXG4gIHBhcnNlZC5uYW1lID0gcGFydHNbMF07XG4gIHBhcnNlZC5jbG9ja1JhdGUgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApOyAvLyB3YXM6IGNsb2NrcmF0ZVxuICAvLyB3YXM6IGNoYW5uZWxzXG4gIHBhcnNlZC5udW1DaGFubmVscyA9IHBhcnRzLmxlbmd0aCA9PT0gMyA/IHBhcnNlSW50KHBhcnRzWzJdLCAxMCkgOiAxO1xuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGUgYW4gYT1ydHBtYXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvclxuLy8gUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBNYXAgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICB9XG4gIHJldHVybiAnYT1ydHBtYXA6JyArIHB0ICsgJyAnICsgY29kZWMubmFtZSArICcvJyArIGNvZGVjLmNsb2NrUmF0ZSArXG4gICAgICAoY29kZWMubnVtQ2hhbm5lbHMgIT09IDEgPyAnLycgKyBjb2RlYy5udW1DaGFubmVscyA6ICcnKSArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIGFuIGE9ZXh0bWFwIGxpbmUgKGhlYWRlcmV4dGVuc2lvbiBmcm9tIFJGQyA1Mjg1KS4gU2FtcGxlIGlucHV0OlxuLy8gYT1leHRtYXA6MiB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XG4vLyBhPWV4dG1hcDoyL3NlbmRvbmx5IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcblNEUFV0aWxzLnBhcnNlRXh0bWFwID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cig5KS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGlkOiBwYXJzZUludChwYXJ0c1swXSwgMTApLFxuICAgIGRpcmVjdGlvbjogcGFydHNbMF0uaW5kZXhPZignLycpID4gMCA/IHBhcnRzWzBdLnNwbGl0KCcvJylbMV0gOiAnc2VuZHJlY3YnLFxuICAgIHVyaTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEdlbmVyYXRlcyBhPWV4dG1hcCBsaW5lIGZyb20gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uUGFyYW1ldGVycyBvclxuLy8gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uLlxuU0RQVXRpbHMud3JpdGVFeHRtYXAgPSBmdW5jdGlvbihoZWFkZXJFeHRlbnNpb24pIHtcbiAgcmV0dXJuICdhPWV4dG1hcDonICsgKGhlYWRlckV4dGVuc2lvbi5pZCB8fCBoZWFkZXJFeHRlbnNpb24ucHJlZmVycmVkSWQpICtcbiAgICAgIChoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uICYmIGhlYWRlckV4dGVuc2lvbi5kaXJlY3Rpb24gIT09ICdzZW5kcmVjdidcbiAgICAgICAgICA/ICcvJyArIGhlYWRlckV4dGVuc2lvbi5kaXJlY3Rpb25cbiAgICAgICAgICA6ICcnKSArXG4gICAgICAnICcgKyBoZWFkZXJFeHRlbnNpb24udXJpICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgYW4gZnRtcCBsaW5lLCByZXR1cm5zIGRpY3Rpb25hcnkuIFNhbXBsZSBpbnB1dDpcbi8vIGE9Zm10cDo5NiB2YnI9b247Y25nPW9uXG4vLyBBbHNvIGRlYWxzIHdpdGggdmJyPW9uOyBjbmc9b25cblNEUFV0aWxzLnBhcnNlRm10cCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga3Y7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKGxpbmUuaW5kZXhPZignICcpICsgMSkuc3BsaXQoJzsnKTtcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgIGt2ID0gcGFydHNbal0udHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgcGFyc2VkW2t2WzBdLnRyaW0oKV0gPSBrdlsxXTtcbiAgfVxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGVzIGFuIGE9ZnRtcCBsaW5lIGZyb20gUlRDUnRwQ29kZWNDYXBhYmlsaXR5IG9yIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlRm10cCA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gIHZhciBsaW5lID0gJyc7XG4gIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gIH1cbiAgaWYgKGNvZGVjLnBhcmFtZXRlcnMgJiYgT2JqZWN0LmtleXMoY29kZWMucGFyYW1ldGVycykubGVuZ3RoKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGNvZGVjLnBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIHBhcmFtcy5wdXNoKHBhcmFtICsgJz0nICsgY29kZWMucGFyYW1ldGVyc1twYXJhbV0pO1xuICAgIH0pO1xuICAgIGxpbmUgKz0gJ2E9Zm10cDonICsgcHQgKyAnICcgKyBwYXJhbXMuam9pbignOycpICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIGxpbmU7XG59O1xuXG4vLyBQYXJzZXMgYW4gcnRjcC1mYiBsaW5lLCByZXR1cm5zIFJUQ1BSdGNwRmVlZGJhY2sgb2JqZWN0LiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXJ0Y3AtZmI6OTggbmFjayBycHNpXG5TRFBVdGlscy5wYXJzZVJ0Y3BGYiA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKCcgJykgKyAxKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHBhcnRzLnNoaWZ0KCksXG4gICAgcGFyYW1ldGVyOiBwYXJ0cy5qb2luKCcgJylcbiAgfTtcbn07XG4vLyBHZW5lcmF0ZSBhPXJ0Y3AtZmIgbGluZXMgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdGNwRmIgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgbGluZXMgPSAnJztcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICBpZiAoY29kZWMucnRjcEZlZWRiYWNrICYmIGNvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGgpIHtcbiAgICAvLyBGSVhNRTogc3BlY2lhbCBoYW5kbGluZyBmb3IgdHJyLWludD9cbiAgICBjb2RlYy5ydGNwRmVlZGJhY2suZm9yRWFjaChmdW5jdGlvbihmYikge1xuICAgICAgbGluZXMgKz0gJ2E9cnRjcC1mYjonICsgcHQgKyAnICcgKyBmYi50eXBlICtcbiAgICAgIChmYi5wYXJhbWV0ZXIgJiYgZmIucGFyYW1ldGVyLmxlbmd0aCA/ICcgJyArIGZiLnBhcmFtZXRlciA6ICcnKSArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGxpbmVzO1xufTtcblxuLy8gUGFyc2VzIGFuIFJGQyA1NTc2IHNzcmMgbWVkaWEgYXR0cmlidXRlLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXNzcmM6MzczNTkyODU1OSBjbmFtZTpzb21ldGhpbmdcblNEUFV0aWxzLnBhcnNlU3NyY01lZGlhID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgc3AgPSBsaW5lLmluZGV4T2YoJyAnKTtcbiAgdmFyIHBhcnRzID0ge1xuICAgIHNzcmM6IHBhcnNlSW50KGxpbmUuc3Vic3RyKDcsIHNwIC0gNyksIDEwKVxuICB9O1xuICB2YXIgY29sb24gPSBsaW5lLmluZGV4T2YoJzonLCBzcCk7XG4gIGlmIChjb2xvbiA+IC0xKSB7XG4gICAgcGFydHMuYXR0cmlidXRlID0gbGluZS5zdWJzdHIoc3AgKyAxLCBjb2xvbiAtIHNwIC0gMSk7XG4gICAgcGFydHMudmFsdWUgPSBsaW5lLnN1YnN0cihjb2xvbiArIDEpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSk7XG4gIH1cbiAgcmV0dXJuIHBhcnRzO1xufTtcblxuLy8gRXh0cmFjdHMgdGhlIE1JRCAoUkZDIDU4ODgpIGZyb20gYSBtZWRpYSBzZWN0aW9uLlxuLy8gcmV0dXJucyB0aGUgTUlEIG9yIHVuZGVmaW5lZCBpZiBubyBtaWQgbGluZSB3YXMgZm91bmQuXG5TRFBVdGlscy5nZXRNaWQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIG1pZCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9bWlkOicpWzBdO1xuICBpZiAobWlkKSB7XG4gICAgcmV0dXJuIG1pZC5zdWJzdHIoNik7XG4gIH1cbn1cblxuU0RQVXRpbHMucGFyc2VGaW5nZXJwcmludCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoMTQpLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAgYWxnb3JpdGhtOiBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpLCAvLyBhbGdvcml0aG0gaXMgY2FzZS1zZW5zaXRpdmUgaW4gRWRnZS5cbiAgICB2YWx1ZTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEV4dHJhY3RzIERUTFMgcGFyYW1ldGVycyBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuLy8gRklYTUU6IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGZ1bmN0aW9ucyB0aGlzIHNob3VsZCBvbmx5XG4vLyAgIGdldCB0aGUgZmluZ2VycHJpbnQgbGluZSBhcyBpbnB1dC4gU2VlIGFsc28gZ2V0SWNlUGFyYW1ldGVycy5cblNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24gKyBzZXNzaW9ucGFydCxcbiAgICAgICdhPWZpbmdlcnByaW50OicpO1xuICAvLyBOb3RlOiBhPXNldHVwIGxpbmUgaXMgaWdub3JlZCBzaW5jZSB3ZSB1c2UgdGhlICdhdXRvJyByb2xlLlxuICAvLyBOb3RlMjogJ2FsZ29yaXRobScgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlIGV4Y2VwdCBpbiBFZGdlLlxuICByZXR1cm4ge1xuICAgIHJvbGU6ICdhdXRvJyxcbiAgICBmaW5nZXJwcmludHM6IGxpbmVzLm1hcChTRFBVdGlscy5wYXJzZUZpbmdlcnByaW50KVxuICB9O1xufTtcblxuLy8gU2VyaWFsaXplcyBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcywgc2V0dXBUeXBlKSB7XG4gIHZhciBzZHAgPSAnYT1zZXR1cDonICsgc2V0dXBUeXBlICsgJ1xcclxcbic7XG4gIHBhcmFtcy5maW5nZXJwcmludHMuZm9yRWFjaChmdW5jdGlvbihmcCkge1xuICAgIHNkcCArPSAnYT1maW5nZXJwcmludDonICsgZnAuYWxnb3JpdGhtICsgJyAnICsgZnAudmFsdWUgKyAnXFxyXFxuJztcbiAgfSk7XG4gIHJldHVybiBzZHA7XG59O1xuLy8gUGFyc2VzIElDRSBpbmZvcm1hdGlvbiBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuLy8gRklYTUU6IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGZ1bmN0aW9ucyB0aGlzIHNob3VsZCBvbmx5XG4vLyAgIGdldCB0aGUgaWNlLXVmcmFnIGFuZCBpY2UtcHdkIGxpbmVzIGFzIGlucHV0LlxuU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAvLyBTZWFyY2ggaW4gc2Vzc2lvbiBwYXJ0LCB0b28uXG4gIGxpbmVzID0gbGluZXMuY29uY2F0KFNEUFV0aWxzLnNwbGl0TGluZXMoc2Vzc2lvbnBhcnQpKTtcbiAgdmFyIGljZVBhcmFtZXRlcnMgPSB7XG4gICAgdXNlcm5hbWVGcmFnbWVudDogbGluZXMuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHJldHVybiBsaW5lLmluZGV4T2YoJ2E9aWNlLXVmcmFnOicpID09PSAwO1xuICAgIH0pWzBdLnN1YnN0cigxMiksXG4gICAgcGFzc3dvcmQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gbGluZS5pbmRleE9mKCdhPWljZS1wd2Q6JykgPT09IDA7XG4gICAgfSlbMF0uc3Vic3RyKDEwKVxuICB9O1xuICByZXR1cm4gaWNlUGFyYW1ldGVycztcbn07XG5cbi8vIFNlcmlhbGl6ZXMgSUNFIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHJldHVybiAnYT1pY2UtdWZyYWc6JyArIHBhcmFtcy51c2VybmFtZUZyYWdtZW50ICsgJ1xcclxcbicgK1xuICAgICAgJ2E9aWNlLXB3ZDonICsgcGFyYW1zLnBhc3N3b3JkICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIFJUQ1J0cFBhcmFtZXRlcnMuXG5TRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0ge1xuICAgIGNvZGVjczogW10sXG4gICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgZmVjTWVjaGFuaXNtczogW10sXG4gICAgcnRjcDogW11cbiAgfTtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICBmb3IgKHZhciBpID0gMzsgaSA8IG1saW5lLmxlbmd0aDsgaSsrKSB7IC8vIGZpbmQgYWxsIGNvZGVjcyBmcm9tIG1saW5lWzMuLl1cbiAgICB2YXIgcHQgPSBtbGluZVtpXTtcbiAgICB2YXIgcnRwbWFwbGluZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0cG1hcDonICsgcHQgKyAnICcpWzBdO1xuICAgIGlmIChydHBtYXBsaW5lKSB7XG4gICAgICB2YXIgY29kZWMgPSBTRFBVdGlscy5wYXJzZVJ0cE1hcChydHBtYXBsaW5lKTtcbiAgICAgIHZhciBmbXRwcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICAgIG1lZGlhU2VjdGlvbiwgJ2E9Zm10cDonICsgcHQgKyAnICcpO1xuICAgICAgLy8gT25seSB0aGUgZmlyc3QgYT1mbXRwOjxwdD4gaXMgY29uc2lkZXJlZC5cbiAgICAgIGNvZGVjLnBhcmFtZXRlcnMgPSBmbXRwcy5sZW5ndGggPyBTRFBVdGlscy5wYXJzZUZtdHAoZm10cHNbMF0pIDoge307XG4gICAgICBjb2RlYy5ydGNwRmVlZGJhY2sgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtZmI6JyArIHB0ICsgJyAnKVxuICAgICAgICAubWFwKFNEUFV0aWxzLnBhcnNlUnRjcEZiKTtcbiAgICAgIGRlc2NyaXB0aW9uLmNvZGVjcy5wdXNoKGNvZGVjKTtcbiAgICAgIC8vIHBhcnNlIEZFQyBtZWNoYW5pc21zIGZyb20gcnRwbWFwIGxpbmVzLlxuICAgICAgc3dpdGNoIChjb2RlYy5uYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnUkVEJzpcbiAgICAgICAgY2FzZSAnVUxQRkVDJzpcbiAgICAgICAgICBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLnB1c2goY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gb25seSBSRUQgYW5kIFVMUEZFQyBhcmUgcmVjb2duaXplZCBhcyBGRUMgbWVjaGFuaXNtcy5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1leHRtYXA6JykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgZGVzY3JpcHRpb24uaGVhZGVyRXh0ZW5zaW9ucy5wdXNoKFNEUFV0aWxzLnBhcnNlRXh0bWFwKGxpbmUpKTtcbiAgfSk7XG4gIC8vIEZJWE1FOiBwYXJzZSBydGNwLlxuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG4vLyBHZW5lcmF0ZXMgcGFydHMgb2YgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGRlc2NyaWJpbmcgdGhlIGNhcGFiaWxpdGllcyAvXG4vLyBwYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGtpbmQsIGNhcHMpIHtcbiAgdmFyIHNkcCA9ICcnO1xuXG4gIC8vIEJ1aWxkIHRoZSBtbGluZS5cbiAgc2RwICs9ICdtPScgKyBraW5kICsgJyAnO1xuICBzZHAgKz0gY2Fwcy5jb2RlY3MubGVuZ3RoID4gMCA/ICc5JyA6ICcwJzsgLy8gcmVqZWN0IGlmIG5vIGNvZGVjcy5cbiAgc2RwICs9ICcgVURQL1RMUy9SVFAvU0FWUEYgJztcbiAgc2RwICs9IGNhcHMuY29kZWNzLm1hcChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gICAgfVxuICAgIHJldHVybiBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG5cbiAgc2RwICs9ICdjPUlOIElQNCAwLjAuMC4wXFxyXFxuJztcbiAgc2RwICs9ICdhPXJ0Y3A6OSBJTiBJUDQgMC4wLjAuMFxcclxcbic7XG5cbiAgLy8gQWRkIGE9cnRwbWFwIGxpbmVzIGZvciBlYWNoIGNvZGVjLiBBbHNvIGZtdHAgYW5kIHJ0Y3AtZmIuXG4gIGNhcHMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdHBNYXAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUZtdHAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZVJ0Y3BGYihjb2RlYyk7XG4gIH0pO1xuICB2YXIgbWF4cHRpbWUgPSAwO1xuICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgaWYgKGNvZGVjLm1heHB0aW1lID4gbWF4cHRpbWUpIHtcbiAgICAgIG1heHB0aW1lID0gY29kZWMubWF4cHRpbWU7XG4gICAgfVxuICB9KTtcbiAgaWYgKG1heHB0aW1lID4gMCkge1xuICAgIHNkcCArPSAnYT1tYXhwdGltZTonICsgbWF4cHRpbWUgKyAnXFxyXFxuJztcbiAgfVxuICBzZHAgKz0gJ2E9cnRjcC1tdXhcXHJcXG4nO1xuXG4gIGNhcHMuaGVhZGVyRXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUV4dG1hcChleHRlbnNpb24pO1xuICB9KTtcbiAgLy8gRklYTUU6IHdyaXRlIGZlY01lY2hhbmlzbXMuXG4gIHJldHVybiBzZHA7XG59O1xuXG4vLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mXG4vLyBSVENSdHBFbmNvZGluZ1BhcmFtZXRlcnMuXG5TRFBVdGlscy5wYXJzZVJ0cEVuY29kaW5nUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgZW5jb2RpbmdQYXJhbWV0ZXJzID0gW107XG4gIHZhciBkZXNjcmlwdGlvbiA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgaGFzUmVkID0gZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5pbmRleE9mKCdSRUQnKSAhPT0gLTE7XG4gIHZhciBoYXNVbHBmZWMgPSBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLmluZGV4T2YoJ1VMUEZFQycpICE9PSAtMTtcblxuICAvLyBmaWx0ZXIgYT1zc3JjOi4uLiBjbmFtZTosIGlnbm9yZSBQbGFuQi1tc2lkXG4gIHZhciBzc3JjcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c3NyYzonKVxuICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gIH0pXG4gIC5maWx0ZXIoZnVuY3Rpb24ocGFydHMpIHtcbiAgICByZXR1cm4gcGFydHMuYXR0cmlidXRlID09PSAnY25hbWUnO1xuICB9KTtcbiAgdmFyIHByaW1hcnlTc3JjID0gc3NyY3MubGVuZ3RoID4gMCAmJiBzc3Jjc1swXS5zc3JjO1xuICB2YXIgc2Vjb25kYXJ5U3NyYztcblxuICB2YXIgZmxvd3MgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmMtZ3JvdXA6RklEJylcbiAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnICcpO1xuICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQocGFydCwgMTApO1xuICAgIH0pO1xuICB9KTtcbiAgaWYgKGZsb3dzLmxlbmd0aCA+IDAgJiYgZmxvd3NbMF0ubGVuZ3RoID4gMSAmJiBmbG93c1swXVswXSA9PT0gcHJpbWFyeVNzcmMpIHtcbiAgICBzZWNvbmRhcnlTc3JjID0gZmxvd3NbMF1bMV07XG4gIH1cblxuICBkZXNjcmlwdGlvbi5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5uYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdSVFgnICYmIGNvZGVjLnBhcmFtZXRlcnMuYXB0KSB7XG4gICAgICB2YXIgZW5jUGFyYW0gPSB7XG4gICAgICAgIHNzcmM6IHByaW1hcnlTc3JjLFxuICAgICAgICBjb2RlY1BheWxvYWRUeXBlOiBwYXJzZUludChjb2RlYy5wYXJhbWV0ZXJzLmFwdCwgMTApLFxuICAgICAgICBydHg6IHtcbiAgICAgICAgICBzc3JjOiBzZWNvbmRhcnlTc3JjXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaChlbmNQYXJhbSk7XG4gICAgICBpZiAoaGFzUmVkKSB7XG4gICAgICAgIGVuY1BhcmFtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbmNQYXJhbSkpO1xuICAgICAgICBlbmNQYXJhbS5mZWMgPSB7XG4gICAgICAgICAgc3NyYzogc2Vjb25kYXJ5U3NyYyxcbiAgICAgICAgICBtZWNoYW5pc206IGhhc1VscGZlYyA/ICdyZWQrdWxwZmVjJyA6ICdyZWQnXG4gICAgICAgIH07XG4gICAgICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKGVuY1BhcmFtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoZW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMCAmJiBwcmltYXJ5U3NyYykge1xuICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIHNzcmM6IHByaW1hcnlTc3JjXG4gICAgfSk7XG4gIH1cblxuICAvLyB3ZSBzdXBwb3J0IGJvdGggYj1BUyBhbmQgYj1USUFTIGJ1dCBpbnRlcnByZXQgQVMgYXMgVElBUy5cbiAgdmFyIGJhbmR3aWR0aCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2I9Jyk7XG4gIGlmIChiYW5kd2lkdGgubGVuZ3RoKSB7XG4gICAgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPVRJQVM6JykgPT09IDApIHtcbiAgICAgIGJhbmR3aWR0aCA9IHBhcnNlSW50KGJhbmR3aWR0aFswXS5zdWJzdHIoNyksIDEwKTtcbiAgICB9IGVsc2UgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPUFTOicpID09PSAwKSB7XG4gICAgICAvLyB1c2UgZm9ybXVsYSBmcm9tIEpTRVAgdG8gY29udmVydCBiPUFTIHRvIFRJQVMgdmFsdWUuXG4gICAgICBiYW5kd2lkdGggPSBwYXJzZUludChiYW5kd2lkdGhbMF0uc3Vic3RyKDUpLCAxMCkgKiAxMDAwICogMC45NVxuICAgICAgICAgIC0gKDUwICogNDAgKiA4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFuZHdpZHRoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5tYXhCaXRyYXRlID0gYmFuZHdpZHRoO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbmNvZGluZ1BhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgaHR0cDovL2RyYWZ0Lm9ydGMub3JnLyNydGNydGNwcGFyYW1ldGVycypcblNEUFV0aWxzLnBhcnNlUnRjcFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIHJ0Y3BQYXJhbWV0ZXJzID0ge307XG5cbiAgdmFyIGNuYW1lO1xuICAvLyBHZXRzIHRoZSBmaXJzdCBTU1JDLiBOb3RlIHRoYXQgd2l0aCBSVFggdGhlcmUgbWlnaHQgYmUgbXVsdGlwbGVcbiAgLy8gU1NSQ3MuXG4gIHZhciByZW1vdGVTc3JjID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gICAgICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouYXR0cmlidXRlID09PSAnY25hbWUnO1xuICAgICAgfSlbMF07XG4gIGlmIChyZW1vdGVTc3JjKSB7XG4gICAgcnRjcFBhcmFtZXRlcnMuY25hbWUgPSByZW1vdGVTc3JjLnZhbHVlO1xuICAgIHJ0Y3BQYXJhbWV0ZXJzLnNzcmMgPSByZW1vdGVTc3JjLnNzcmM7XG4gIH1cblxuICAvLyBFZGdlIHVzZXMgdGhlIGNvbXBvdW5kIGF0dHJpYnV0ZSBpbnN0ZWFkIG9mIHJlZHVjZWRTaXplXG4gIC8vIGNvbXBvdW5kIGlzICFyZWR1Y2VkU2l6ZVxuICB2YXIgcnNpemUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtcnNpemUnKTtcbiAgcnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUgPSByc2l6ZS5sZW5ndGggPiAwO1xuICBydGNwUGFyYW1ldGVycy5jb21wb3VuZCA9IHJzaXplLmxlbmd0aCA9PT0gMDtcblxuICAvLyBwYXJzZXMgdGhlIHJ0Y3AtbXV4IGF0dHLRlmJ1dGUuXG4gIC8vIE5vdGUgdGhhdCBFZGdlIGRvZXMgbm90IHN1cHBvcnQgdW5tdXhlZCBSVENQLlxuICB2YXIgbXV4ID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1ydGNwLW11eCcpO1xuICBydGNwUGFyYW1ldGVycy5tdXggPSBtdXgubGVuZ3RoID4gMDtcblxuICByZXR1cm4gcnRjcFBhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgZWl0aGVyIGE9bXNpZDogb3IgYT1zc3JjOi4uLiBtc2lkIGxpbmVzIGFuZCByZXR1cm5zXG4vLyB0aGUgaWQgb2YgdGhlIE1lZGlhU3RyZWFtIGFuZCBNZWRpYVN0cmVhbVRyYWNrLlxuU0RQVXRpbHMucGFyc2VNc2lkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHNwZWMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1zaWQ6Jyk7XG4gIGlmIChzcGVjLmxlbmd0aCA9PT0gMSkge1xuICAgIHBhcnRzID0gc3BlY1swXS5zdWJzdHIoNykuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4ge3N0cmVhbTogcGFydHNbMF0sIHRyYWNrOiBwYXJ0c1sxXX07XG4gIH1cbiAgdmFyIHBsYW5CID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBTRFBVdGlscy5wYXJzZVNzcmNNZWRpYShsaW5lKTtcbiAgfSlcbiAgLmZpbHRlcihmdW5jdGlvbihwYXJ0cykge1xuICAgIHJldHVybiBwYXJ0cy5hdHRyaWJ1dGUgPT09ICdtc2lkJztcbiAgfSk7XG4gIGlmIChwbGFuQi5sZW5ndGggPiAwKSB7XG4gICAgcGFydHMgPSBwbGFuQlswXS52YWx1ZS5zcGxpdCgnICcpO1xuICAgIHJldHVybiB7c3RyZWFtOiBwYXJ0c1swXSwgdHJhY2s6IHBhcnRzWzFdfTtcbiAgfVxufTtcblxuLy8gR2VuZXJhdGUgYSBzZXNzaW9uIElEIGZvciBTRFAuXG4vLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1ydGN3ZWItanNlcC0yMCNzZWN0aW9uLTUuMi4xXG4vLyByZWNvbW1lbmRzIHVzaW5nIGEgY3J5cHRvZ3JhcGhpY2FsbHkgcmFuZG9tICt2ZSA2NC1iaXQgdmFsdWVcbi8vIGJ1dCByaWdodCBub3cgdGhpcyBzaG91bGQgYmUgYWNjZXB0YWJsZSBhbmQgd2l0aGluIHRoZSByaWdodCByYW5nZVxuU0RQVXRpbHMuZ2VuZXJhdGVTZXNzaW9uSWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zdWJzdHIoMiwgMjEpO1xufTtcblxuLy8gV3JpdGUgYm9pbGRlciBwbGF0ZSBmb3Igc3RhcnQgb2YgU0RQXG4vLyBzZXNzSWQgYXJndW1lbnQgaXMgb3B0aW9uYWwgLSBpZiBub3Qgc3VwcGxpZWQgaXQgd2lsbFxuLy8gYmUgZ2VuZXJhdGVkIHJhbmRvbWx5XG4vLyBzZXNzVmVyc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gMlxuU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUgPSBmdW5jdGlvbihzZXNzSWQsIHNlc3NWZXIpIHtcbiAgdmFyIHNlc3Npb25JZDtcbiAgdmFyIHZlcnNpb24gPSBzZXNzVmVyICE9PSB1bmRlZmluZWQgPyBzZXNzVmVyIDogMjtcbiAgaWYgKHNlc3NJZCkge1xuICAgIHNlc3Npb25JZCA9IHNlc3NJZDtcbiAgfSBlbHNlIHtcbiAgICBzZXNzaW9uSWQgPSBTRFBVdGlscy5nZW5lcmF0ZVNlc3Npb25JZCgpO1xuICB9XG4gIC8vIEZJWE1FOiBzZXNzLWlkIHNob3VsZCBiZSBhbiBOVFAgdGltZXN0YW1wLlxuICByZXR1cm4gJ3Y9MFxcclxcbicgK1xuICAgICAgJ289dGhpc2lzYWRhcHRlcm9ydGMgJyArIHNlc3Npb25JZCArICcgJyArIHZlcnNpb24gKyAnIElOIElQNCAxMjcuMC4wLjFcXHJcXG4nICtcbiAgICAgICdzPS1cXHJcXG4nICtcbiAgICAgICd0PTAgMFxcclxcbic7XG59O1xuXG5TRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbiA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBjYXBzLCB0eXBlLCBzdHJlYW0pIHtcbiAgdmFyIHNkcCA9IFNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24odHJhbnNjZWl2ZXIua2luZCwgY2Fwcyk7XG5cbiAgLy8gTWFwIElDRSBwYXJhbWV0ZXJzICh1ZnJhZywgcHdkKSB0byBTRFAuXG4gIHNkcCArPSBTRFBVdGlscy53cml0ZUljZVBhcmFtZXRlcnMoXG4gICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5nZXRMb2NhbFBhcmFtZXRlcnMoKSk7XG5cbiAgLy8gTWFwIERUTFMgcGFyYW1ldGVycyB0byBTRFAuXG4gIHNkcCArPSBTRFBVdGlscy53cml0ZUR0bHNQYXJhbWV0ZXJzKFxuICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5nZXRMb2NhbFBhcmFtZXRlcnMoKSxcbiAgICAgIHR5cGUgPT09ICdvZmZlcicgPyAnYWN0cGFzcycgOiAnYWN0aXZlJyk7XG5cbiAgc2RwICs9ICdhPW1pZDonICsgdHJhbnNjZWl2ZXIubWlkICsgJ1xcclxcbic7XG5cbiAgaWYgKHRyYW5zY2VpdmVyLmRpcmVjdGlvbikge1xuICAgIHNkcCArPSAnYT0nICsgdHJhbnNjZWl2ZXIuZGlyZWN0aW9uICsgJ1xcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyICYmIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgc2RwICs9ICdhPXNlbmRyZWN2XFxyXFxuJztcbiAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICBzZHAgKz0gJ2E9c2VuZG9ubHlcXHJcXG4nO1xuICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgc2RwICs9ICdhPXJlY3Zvbmx5XFxyXFxuJztcbiAgfSBlbHNlIHtcbiAgICBzZHAgKz0gJ2E9aW5hY3RpdmVcXHJcXG4nO1xuICB9XG5cbiAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgIC8vIHNwZWMuXG4gICAgdmFyIG1zaWQgPSAnbXNpZDonICsgc3RyZWFtLmlkICsgJyAnICtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnRyYWNrLmlkICsgJ1xcclxcbic7XG4gICAgc2RwICs9ICdhPScgKyBtc2lkO1xuXG4gICAgLy8gZm9yIENocm9tZS5cbiAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICtcbiAgICAgICAgJyAnICsgbXNpZDtcbiAgICBpZiAodHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHgpIHtcbiAgICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgICAnICcgKyBtc2lkO1xuICAgICAgc2RwICs9ICdhPXNzcmMtZ3JvdXA6RklEICcgK1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArICcgJyArXG4gICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfVxuICB9XG4gIC8vIEZJWE1FOiB0aGlzIHNob3VsZCBiZSB3cml0dGVuIGJ5IHdyaXRlUnRwRGVzY3JpcHRpb24uXG4gIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgK1xuICAgICAgJyBjbmFtZTonICsgU0RQVXRpbHMubG9jYWxDTmFtZSArICdcXHJcXG4nO1xuICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyICYmIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAnIGNuYW1lOicgKyBTRFBVdGlscy5sb2NhbENOYW1lICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIHNkcDtcbn07XG5cbi8vIEdldHMgdGhlIGRpcmVjdGlvbiBmcm9tIHRoZSBtZWRpYVNlY3Rpb24gb3IgdGhlIHNlc3Npb25wYXJ0LlxuU0RQVXRpbHMuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICAvLyBMb29rIGZvciBzZW5kcmVjdiwgc2VuZG9ubHksIHJlY3Zvbmx5LCBpbmFjdGl2ZSwgZGVmYXVsdCB0byBzZW5kcmVjdi5cbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChsaW5lc1tpXSkge1xuICAgICAgY2FzZSAnYT1zZW5kcmVjdic6XG4gICAgICBjYXNlICdhPXNlbmRvbmx5JzpcbiAgICAgIGNhc2UgJ2E9cmVjdm9ubHknOlxuICAgICAgY2FzZSAnYT1pbmFjdGl2ZSc6XG4gICAgICAgIHJldHVybiBsaW5lc1tpXS5zdWJzdHIoMik7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBGSVhNRTogV2hhdCBzaG91bGQgaGFwcGVuIGhlcmU/XG4gICAgfVxuICB9XG4gIGlmIChzZXNzaW9ucGFydCkge1xuICAgIHJldHVybiBTRFBVdGlscy5nZXREaXJlY3Rpb24oc2Vzc2lvbnBhcnQpO1xuICB9XG4gIHJldHVybiAnc2VuZHJlY3YnO1xufTtcblxuU0RQVXRpbHMuZ2V0S2luZCA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIHZhciBtbGluZSA9IGxpbmVzWzBdLnNwbGl0KCcgJyk7XG4gIHJldHVybiBtbGluZVswXS5zdWJzdHIoMik7XG59O1xuXG5TRFBVdGlscy5pc1JlamVjdGVkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHJldHVybiBtZWRpYVNlY3Rpb24uc3BsaXQoJyAnLCAyKVsxXSA9PT0gJzAnO1xufTtcblxuU0RQVXRpbHMucGFyc2VNTGluZSA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIHZhciBtbGluZSA9IGxpbmVzWzBdLnNwbGl0KCcgJyk7XG4gIHJldHVybiB7XG4gICAga2luZDogbWxpbmVbMF0uc3Vic3RyKDIpLFxuICAgIHBvcnQ6IHBhcnNlSW50KG1saW5lWzFdLCAxMCksXG4gICAgcHJvdG9jb2w6IG1saW5lWzJdLFxuICAgIGZtdDogbWxpbmUuc2xpY2UoMykuam9pbignICcpXG4gIH07XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBTRFBVdGlscztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZHAvc2RwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGFkYXB0ZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9hZGFwdGVyX2ZhY3RvcnkuanMnKTtcbm1vZHVsZS5leHBvcnRzID0gYWRhcHRlckZhY3Rvcnkoe3dpbmRvdzogZ2xvYmFsLndpbmRvd30pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9hZGFwdGVyX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaGltbWluZyBzdGFydHMgaGVyZS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGVwZW5kZW5jaWVzLCBvcHRzKSB7XG4gIHZhciB3aW5kb3cgPSBkZXBlbmRlbmNpZXMgJiYgZGVwZW5kZW5jaWVzLndpbmRvdztcblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBzaGltQ2hyb21lOiB0cnVlLFxuICAgIHNoaW1GaXJlZm94OiB0cnVlLFxuICAgIHNoaW1FZGdlOiB0cnVlLFxuICAgIHNoaW1TYWZhcmk6IHRydWUsXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIG9wdHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvcHRzLCBrZXkpKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBvcHRzW2tleV07XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbHMuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgdmFyIGxvZ2dpbmcgPSB1dGlscy5sb2c7XG4gIHZhciBicm93c2VyRGV0YWlscyA9IHV0aWxzLmRldGVjdEJyb3dzZXIod2luZG93KTtcblxuICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICB2YXIgYWRhcHRlciA9IHtcbiAgICBicm93c2VyRGV0YWlsczogYnJvd3NlckRldGFpbHMsXG4gICAgZXh0cmFjdFZlcnNpb246IHV0aWxzLmV4dHJhY3RWZXJzaW9uLFxuICAgIGRpc2FibGVMb2c6IHV0aWxzLmRpc2FibGVMb2csXG4gICAgZGlzYWJsZVdhcm5pbmdzOiB1dGlscy5kaXNhYmxlV2FybmluZ3NcbiAgfTtcblxuICAvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgaWYgeW91IHdhbnQgbG9nZ2luZyB0byBvY2N1ciwgaW5jbHVkaW5nIGxvZ2dpbmdcbiAgLy8gZm9yIHRoZSBzd2l0Y2ggc3RhdGVtZW50IGJlbG93LiBDYW4gYWxzbyBiZSB0dXJuZWQgb24gaW4gdGhlIGJyb3dzZXIgdmlhXG4gIC8vIGFkYXB0ZXIuZGlzYWJsZUxvZyhmYWxzZSksIGJ1dCB0aGVuIGxvZ2dpbmcgZnJvbSB0aGUgc3dpdGNoIHN0YXRlbWVudCBiZWxvd1xuICAvLyB3aWxsIG5vdCBhcHBlYXIuXG4gIC8vIHJlcXVpcmUoJy4vdXRpbHMnKS5kaXNhYmxlTG9nKGZhbHNlKTtcblxuICAvLyBCcm93c2VyIHNoaW1zLlxuICB2YXIgY2hyb21lU2hpbSA9IHJlcXVpcmUoJy4vY2hyb21lL2Nocm9tZV9zaGltJykgfHwgbnVsbDtcbiAgdmFyIGVkZ2VTaGltID0gcmVxdWlyZSgnLi9lZGdlL2VkZ2Vfc2hpbScpIHx8IG51bGw7XG4gIHZhciBmaXJlZm94U2hpbSA9IHJlcXVpcmUoJy4vZmlyZWZveC9maXJlZm94X3NoaW0nKSB8fCBudWxsO1xuICB2YXIgc2FmYXJpU2hpbSA9IHJlcXVpcmUoJy4vc2FmYXJpL3NhZmFyaV9zaGltJykgfHwgbnVsbDtcblxuICAvLyBTaGltIGJyb3dzZXIgaWYgZm91bmQuXG4gIHN3aXRjaCAoYnJvd3NlckRldGFpbHMuYnJvd3Nlcikge1xuICAgIGNhc2UgJ2Nocm9tZSc6XG4gICAgICBpZiAoIWNocm9tZVNoaW0gfHwgIWNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgICAgIW9wdGlvbnMuc2hpbUNocm9tZSkge1xuICAgICAgICBsb2dnaW5nKCdDaHJvbWUgc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBjaHJvbWUuJyk7XG4gICAgICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICAgICAgYWRhcHRlci5icm93c2VyU2hpbSA9IGNocm9tZVNoaW07XG5cbiAgICAgIGNocm9tZVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltTWVkaWFTdHJlYW0od2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbVNvdXJjZU9iamVjdCh3aW5kb3cpO1xuICAgICAgY2hyb21lU2hpbS5zaGltUGVlckNvbm5lY3Rpb24od2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbU9uVHJhY2sod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2sod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbUdldFNlbmRlcnNXaXRoRHRtZih3aW5kb3cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmlyZWZveCc6XG4gICAgICBpZiAoIWZpcmVmb3hTaGltIHx8ICFmaXJlZm94U2hpbS5zaGltUGVlckNvbm5lY3Rpb24gfHxcbiAgICAgICAgICAhb3B0aW9ucy5zaGltRmlyZWZveCkge1xuICAgICAgICBsb2dnaW5nKCdGaXJlZm94IHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgZmlyZWZveC4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gZmlyZWZveFNoaW07XG5cbiAgICAgIGZpcmVmb3hTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1Tb3VyY2VPYmplY3Qod2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbih3aW5kb3cpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbU9uVHJhY2sod2luZG93KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2VkZ2UnOlxuICAgICAgaWYgKCFlZGdlU2hpbSB8fCAhZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8ICFvcHRpb25zLnNoaW1FZGdlKSB7XG4gICAgICAgIGxvZ2dpbmcoJ01TIGVkZ2Ugc2hpbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhpcyBhZGFwdGVyIHJlbGVhc2UuJyk7XG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnYWRhcHRlci5qcyBzaGltbWluZyBlZGdlLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBlZGdlU2hpbTtcblxuICAgICAgZWRnZVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdyk7XG4gICAgICBlZGdlU2hpbS5zaGltUmVwbGFjZVRyYWNrKHdpbmRvdyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzYWZhcmknOlxuICAgICAgaWYgKCFzYWZhcmlTaGltIHx8ICFvcHRpb25zLnNoaW1TYWZhcmkpIHtcbiAgICAgICAgbG9nZ2luZygnU2FmYXJpIHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgc2FmYXJpLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBzYWZhcmlTaGltO1xuICAgICAgLy8gc2hpbSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCBTYWZhcmkgKHRlY2huaWNhbCBwcmV2aWV3KVxuICAgICAgdXRpbHMuc2hpbUNyZWF0ZU9iamVjdFVSTCh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltUlRDSWNlU2VydmVyVXJscyh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltQ2FsbGJhY2tzQVBJKHdpbmRvdyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1Mb2NhbFN0cmVhbXNBUEkod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbVJlbW90ZVN0cmVhbXNBUEkod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxvZ2dpbmcoJ1Vuc3VwcG9ydGVkIGJyb3dzZXIhJyk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBhZGFwdGVyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9mYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG52YXIgbG9nZ2luZyA9IHV0aWxzLmxvZztcblxudmFyIGNocm9tZVNoaW0gPSB7XG4gIHNoaW1NZWRpYVN0cmVhbTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgd2luZG93Lk1lZGlhU3RyZWFtID0gd2luZG93Lk1lZGlhU3RyZWFtIHx8IHdpbmRvdy53ZWJraXRNZWRpYVN0cmVhbTtcbiAgfSxcblxuICBzaGltT25UcmFjazogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiAhKCdvbnRyYWNrJyBpblxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdvbnRyYWNrJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbnRyYWNrO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAodGhpcy5fb250cmFjaykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayA9IGYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciBvcmlnU2V0UmVtb3RlRGVzY3JpcHRpb24gPVxuICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb247XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIGlmICghcGMuX29udHJhY2twb2x5KSB7XG4gICAgICAgICAgcGMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gb25hZGRzdHJlYW0gZG9lcyBub3QgZmlyZSB3aGVuIGEgdHJhY2sgaXMgYWRkZWQgdG8gYW4gZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIHN0cmVhbS4gQnV0IHN0cmVhbS5vbmFkZHRyYWNrIGlzIGltcGxlbWVudGVkIHNvIHdlIHVzZSB0aGF0LlxuICAgICAgICAgICAgZS5zdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkdHJhY2snLCBmdW5jdGlvbih0ZSkge1xuICAgICAgICAgICAgICB2YXIgcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycykge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0gcGMuZ2V0UmVjZWl2ZXJzKCkuZmluZChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gci50cmFjayAmJiByLnRyYWNrLmlkID09PSB0ZS50cmFjay5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHt0cmFjazogdGUudHJhY2t9O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRlLnRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICAgICAgcGMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgICAgdmFyIHJlY2VpdmVyO1xuICAgICAgICAgICAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHBjLmdldFJlY2VpdmVycygpLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIudHJhY2sgJiYgci50cmFjay5pZCA9PT0gdHJhY2suaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB7dHJhY2s6IHRyYWNrfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICBwYy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcGMuYWRkRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgcGMuX29udHJhY2twb2x5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ1NldFJlbW90ZURlc2NyaXB0aW9uLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbUdldFNlbmRlcnNXaXRoRHRtZjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gT3ZlcnJpZGVzIGFkZFRyYWNrL3JlbW92ZVRyYWNrLCBkZXBlbmRzIG9uIHNoaW1BZGRUcmFja1JlbW92ZVRyYWNrLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiZcbiAgICAgICAgISgnZ2V0U2VuZGVycycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkgJiZcbiAgICAgICAgJ2NyZWF0ZURUTUZTZW5kZXInIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpIHtcbiAgICAgIHZhciBzaGltU2VuZGVyV2l0aER0bWYgPSBmdW5jdGlvbihwYywgdHJhY2spIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgICAgZ2V0IGR0bWYoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZHRtZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmICh0cmFjay5raW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IHBjLmNyZWF0ZURUTUZTZW5kZXIodHJhY2spO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9wYzogcGNcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGF1Z21lbnQgYWRkVHJhY2sgd2hlbiBnZXRTZW5kZXJzIGlzIG5vdCBhdmFpbGFibGUuXG4gICAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycykge1xuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9zZW5kZXJzID0gdGhpcy5fc2VuZGVycyB8fCBbXTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2VuZGVycy5zbGljZSgpOyAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9yaWdBZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaywgc3RyZWFtKSB7XG4gICAgICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgICAgICB2YXIgc2VuZGVyID0gb3JpZ0FkZFRyYWNrLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGlmICghc2VuZGVyKSB7XG4gICAgICAgICAgICBzZW5kZXIgPSBzaGltU2VuZGVyV2l0aER0bWYocGMsIHRyYWNrKTtcbiAgICAgICAgICAgIHBjLl9zZW5kZXJzLnB1c2goc2VuZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbmRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb3JpZ1JlbW92ZVRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjaztcbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjayA9IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgICAgb3JpZ1JlbW92ZVRyYWNrLmFwcGx5KHBjLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHZhciBpZHggPSBwYy5fc2VuZGVycy5pbmRleE9mKHNlbmRlcik7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHBjLl9zZW5kZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBvcmlnQWRkU3RyZWFtID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRTdHJlYW07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICBwYy5fc2VuZGVycyA9IHBjLl9zZW5kZXJzIHx8IFtdO1xuICAgICAgICBvcmlnQWRkU3RyZWFtLmFwcGx5KHBjLCBbc3RyZWFtXSk7XG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgcGMuX3NlbmRlcnMucHVzaChzaGltU2VuZGVyV2l0aER0bWYocGMsIHRyYWNrKSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgIHBjLl9zZW5kZXJzID0gcGMuX3NlbmRlcnMgfHwgW107XG4gICAgICAgIG9yaWdSZW1vdmVTdHJlYW0uYXBwbHkocGMsIFsocGMuX3N0cmVhbXNbc3RyZWFtLmlkXSB8fCBzdHJlYW0pXSk7XG5cbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICB2YXIgc2VuZGVyID0gcGMuX3NlbmRlcnMuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNlbmRlcikge1xuICAgICAgICAgICAgcGMuX3NlbmRlcnMuc3BsaWNlKHBjLl9zZW5kZXJzLmluZGV4T2Yoc2VuZGVyKSwgMSk7IC8vIHJlbW92ZSBzZW5kZXJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgICAgJ2dldFNlbmRlcnMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgICAgICdjcmVhdGVEVE1GU2VuZGVyJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAgICAgICAgICAhKCdkdG1mJyBpbiB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSkpIHtcbiAgICAgIHZhciBvcmlnR2V0U2VuZGVycyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICB2YXIgc2VuZGVycyA9IG9yaWdHZXRTZW5kZXJzLmFwcGx5KHBjLCBbXSk7XG4gICAgICAgIHNlbmRlcnMuZm9yRWFjaChmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICBzZW5kZXIuX3BjID0gcGM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VuZGVycztcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSwgJ2R0bWYnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2R0bWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gdGhpcy5fcGMuY3JlYXRlRFRNRlNlbmRlcih0aGlzLnRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHNoaW1Tb3VyY2VPYmplY3Q6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBVUkwgPSB3aW5kb3cgJiYgd2luZG93LlVSTDtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICAvLyBTaGltIHRoZSBzcmNPYmplY3QgcHJvcGVydHksIG9uY2UsIHdoZW4gSFRNTE1lZGlhRWxlbWVudCBpcyBmb3VuZC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NyY09iamVjdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAvLyBVc2UgX3NyY09iamVjdCBhcyBhIHByaXZhdGUgcHJvcGVydHkgZm9yIHRoaXMgc2hpbVxuICAgICAgICAgICAgdGhpcy5fc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5zcmMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgICAgICAgICB0aGlzLnNyYyA9ICcnO1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHJlY3JlYXRlIHRoZSBibG9iIHVybCB3aGVuIGEgdHJhY2sgaXMgYWRkZWQgb3JcbiAgICAgICAgICAgIC8vIHJlbW92ZWQuIERvaW5nIGl0IG1hbnVhbGx5IHNpbmNlIHdlIHdhbnQgdG8gYXZvaWQgYSByZWN1cnNpb24uXG4gICAgICAgICAgICBzdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkdHJhY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuc3JjKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxmLnNyYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdyZW1vdmV0cmFjaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoc2VsZi5zcmMpIHtcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNlbGYuc3JjKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWxmLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNoaW1BZGRUcmFja1JlbW92ZVRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAvLyBzaGltIGFkZFRyYWNrIGFuZCByZW1vdmVUcmFjay5cbiAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFsc28gc2hpbSBwYy5nZXRMb2NhbFN0cmVhbXMgd2hlbiBhZGRUcmFjayBpcyBzaGltbWVkXG4gICAgLy8gdG8gcmV0dXJuIHRoZSBvcmlnaW5hbCBzdHJlYW1zLlxuICAgIHZhciBvcmlnR2V0TG9jYWxTdHJlYW1zID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVxuICAgICAgICAuZ2V0TG9jYWxTdHJlYW1zO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0TG9jYWxTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbmF0aXZlU3RyZWFtcyA9IG9yaWdHZXRMb2NhbFN0cmVhbXMuYXBwbHkodGhpcyk7XG4gICAgICBzZWxmLl9yZXZlcnNlU3RyZWFtcyA9IHNlbGYuX3JldmVyc2VTdHJlYW1zIHx8IHt9O1xuICAgICAgcmV0dXJuIG5hdGl2ZVN0cmVhbXMubWFwKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gc2VsZi5fcmV2ZXJzZVN0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgb3JpZ0FkZFN0cmVhbSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHBjLl9yZXZlcnNlU3RyZWFtcyA9IHBjLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcblxuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgdmFyIGFscmVhZHlFeGlzdHMgPSBwYy5nZXRTZW5kZXJzKCkuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgcmV0dXJuIHMudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUcmFjayBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAnSW52YWxpZEFjY2Vzc0Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIGlkZW50aXR5IG1hcHBpbmcgZm9yIGNvbnNpc3RlbmN5IHdpdGggYWRkVHJhY2suXG4gICAgICAvLyBVbmxlc3MgdGhpcyBpcyBiZWluZyB1c2VkIHdpdGggYSBzdHJlYW0gZnJvbSBhZGRUcmFjay5cbiAgICAgIGlmICghcGMuX3JldmVyc2VTdHJlYW1zW3N0cmVhbS5pZF0pIHtcbiAgICAgICAgdmFyIG5ld1N0cmVhbSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oc3RyZWFtLmdldFRyYWNrcygpKTtcbiAgICAgICAgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXSA9IG5ld1N0cmVhbTtcbiAgICAgICAgcGMuX3JldmVyc2VTdHJlYW1zW25ld1N0cmVhbS5pZF0gPSBzdHJlYW07XG4gICAgICAgIHN0cmVhbSA9IG5ld1N0cmVhbTtcbiAgICAgIH1cbiAgICAgIG9yaWdBZGRTdHJlYW0uYXBwbHkocGMsIFtzdHJlYW1dKTtcbiAgICB9O1xuXG4gICAgdmFyIG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgIHBjLl9zdHJlYW1zID0gcGMuX3N0cmVhbXMgfHwge307XG4gICAgICBwYy5fcmV2ZXJzZVN0cmVhbXMgPSBwYy5fcmV2ZXJzZVN0cmVhbXMgfHwge307XG5cbiAgICAgIG9yaWdSZW1vdmVTdHJlYW0uYXBwbHkocGMsIFsocGMuX3N0cmVhbXNbc3RyZWFtLmlkXSB8fCBzdHJlYW0pXSk7XG4gICAgICBkZWxldGUgcGMuX3JldmVyc2VTdHJlYW1zWyhwYy5fc3RyZWFtc1tzdHJlYW0uaWRdID9cbiAgICAgICAgICBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdLmlkIDogc3RyZWFtLmlkKV07XG4gICAgICBkZWxldGUgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICBpZiAocGMuc2lnbmFsaW5nU3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBSVENQZWVyQ29ubmVjdGlvblxcJ3Mgc2lnbmFsaW5nU3RhdGUgaXMgXFwnY2xvc2VkXFwnLicsXG4gICAgICAgICAgJ0ludmFsaWRTdGF0ZUVycm9yJyk7XG4gICAgICB9XG4gICAgICB2YXIgc3RyZWFtcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIGlmIChzdHJlYW1zLmxlbmd0aCAhPT0gMSB8fFxuICAgICAgICAgICFzdHJlYW1zWzBdLmdldFRyYWNrcygpLmZpbmQoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIHQgPT09IHRyYWNrO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IGZ1bGx5IGNvcnJlY3QgYnV0IGFsbCB3ZSBjYW4gbWFuYWdlIHdpdGhvdXRcbiAgICAgICAgLy8gW1thc3NvY2lhdGVkIE1lZGlhU3RyZWFtc11dIGludGVybmFsIHNsb3QuXG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBhZGFwdGVyLmpzIGFkZFRyYWNrIHBvbHlmaWxsIG9ubHkgc3VwcG9ydHMgYSBzaW5nbGUgJyArXG4gICAgICAgICAgJyBzdHJlYW0gd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdHJhY2suJyxcbiAgICAgICAgICAnTm90U3VwcG9ydGVkRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFscmVhZHlFeGlzdHMgPSBwYy5nZXRTZW5kZXJzKCkuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLnRyYWNrID09PSB0cmFjaztcbiAgICAgIH0pO1xuICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVHJhY2sgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHBjLl9yZXZlcnNlU3RyZWFtcyA9IHBjLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcbiAgICAgIHZhciBvbGRTdHJlYW0gPSBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdO1xuICAgICAgaWYgKG9sZFN0cmVhbSkge1xuICAgICAgICAvLyB0aGlzIGlzIHVzaW5nIG9kZCBDaHJvbWUgYmVoYXZpb3VyLCB1c2Ugd2l0aCBjYXV0aW9uOlxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9NzgxNVxuICAgICAgICAvLyBOb3RlOiB3ZSByZWx5IG9uIHRoZSBoaWdoLWxldmVsIGFkZFRyYWNrL2R0bWYgc2hpbSB0b1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHNlbmRlciB3aXRoIGEgZHRtZiBzZW5kZXIuXG4gICAgICAgIG9sZFN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgIHBjLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdTdHJlYW0gPSBuZXcgd2luZG93Lk1lZGlhU3RyZWFtKFt0cmFja10pO1xuICAgICAgICBwYy5fc3RyZWFtc1tzdHJlYW0uaWRdID0gbmV3U3RyZWFtO1xuICAgICAgICBwYy5fcmV2ZXJzZVN0cmVhbXNbbmV3U3RyZWFtLmlkXSA9IHN0cmVhbTtcbiAgICAgICAgcGMuYWRkU3RyZWFtKG5ld1N0cmVhbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGMuZ2V0U2VuZGVycygpLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjayA9IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgIGlmIChwYy5zaWduYWxpbmdTdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAnVGhlIFJUQ1BlZXJDb25uZWN0aW9uXFwncyBzaWduYWxpbmdTdGF0ZSBpcyBcXCdjbG9zZWRcXCcuJyxcbiAgICAgICAgICAnSW52YWxpZFN0YXRlRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIGNhbiBub3QgeWV0IGNoZWNrIGZvciBzZW5kZXIgaW5zdGFuY2VvZiBSVENSdHBTZW5kZXJcbiAgICAgIC8vIHNpbmNlIHdlIHNoaW0gUlRQU2VuZGVyLiBTbyB3ZSBjaGVjayBpZiBzZW5kZXIuX3BjIGlzIHNldC5cbiAgICAgIGlmICghc2VuZGVyLl9wYykge1xuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdBcmd1bWVudCAxIG9mIFJUQ1BlZXJDb25uZWN0aW9uLnJlbW92ZVRyYWNrICcgK1xuICAgICAgICAgICAgJ2RvZXMgbm90IGltcGxlbWVudCBpbnRlcmZhY2UgUlRDUnRwU2VuZGVyLicsICdUeXBlRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIHZhciBpc0xvY2FsID0gc2VuZGVyLl9wYyA9PT0gcGM7XG4gICAgICBpZiAoIWlzTG9jYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignU2VuZGVyIHdhcyBub3QgY3JlYXRlZCBieSB0aGlzIGNvbm5lY3Rpb24uJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VhcmNoIGZvciB0aGUgbmF0aXZlIHN0cmVhbSB0aGUgc2VuZGVycyB0cmFjayBiZWxvbmdzIHRvLlxuICAgICAgcGMuX3N0cmVhbXMgPSBwYy5fc3RyZWFtcyB8fCB7fTtcbiAgICAgIHZhciBzdHJlYW07XG4gICAgICBPYmplY3Qua2V5cyhwYy5fc3RyZWFtcykuZm9yRWFjaChmdW5jdGlvbihzdHJlYW1pZCkge1xuICAgICAgICB2YXIgaGFzVHJhY2sgPSBwYy5fc3RyZWFtc1tzdHJlYW1pZF0uZ2V0VHJhY2tzKCkuZmluZChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgIHJldHVybiBzZW5kZXIudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc1RyYWNrKSB7XG4gICAgICAgICAgc3RyZWFtID0gcGMuX3N0cmVhbXNbc3RyZWFtaWRdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtLmdldFRyYWNrcygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGxhc3QgdHJhY2sgb2YgdGhlIHN0cmVhbSwgcmVtb3ZlIHRoZSBzdHJlYW0uIFRoaXNcbiAgICAgICAgICAvLyB0YWtlcyBjYXJlIG9mIGFueSBzaGltbWVkIF9zZW5kZXJzLlxuICAgICAgICAgIHBjLnJlbW92ZVN0cmVhbShzdHJlYW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHJlbHlpbmcgb24gdGhlIHNhbWUgb2RkIGNocm9tZSBiZWhhdmlvdXIgYXMgYWJvdmUuXG4gICAgICAgICAgc3RyZWFtLnJlbW92ZVRyYWNrKHNlbmRlci50cmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcGMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJykpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgICAvLyBUaGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LlxuICAgIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICAvLyBUcmFuc2xhdGUgaWNlVHJhbnNwb3J0UG9saWN5IHRvIGljZVRyYW5zcG9ydHMsXG4gICAgICAgIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTQ4NjlcbiAgICAgICAgLy8gdGhpcyB3YXMgZml4ZWQgaW4gTTU2IGFsb25nIHdpdGggdW5wcmVmaXhpbmcgUlRDUGVlckNvbm5lY3Rpb24uXG4gICAgICAgIGxvZ2dpbmcoJ1BlZXJDb25uZWN0aW9uJyk7XG4gICAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgICBwY0NvbmZpZy5pY2VUcmFuc3BvcnRzID0gcGNDb25maWcuaWNlVHJhbnNwb3J0UG9saWN5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPVxuICAgICAgICAgIHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGU7XG4gICAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgICAgaWYgKHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbWlncmF0ZSBmcm9tIG5vbi1zcGVjIFJUQ0ljZVNlcnZlci51cmwgdG8gUlRDSWNlU2VydmVyLnVybHNcbiAgICAgIHZhciBPcmlnUGVlckNvbm5lY3Rpb24gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb247XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgIHZhciBuZXdJY2VTZXJ2ZXJzID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmICghc2VydmVyLmhhc093blByb3BlcnR5KCd1cmxzJykgJiZcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICAgIHV0aWxzLmRlcHJlY2F0ZWQoJ1JUQ0ljZVNlcnZlci51cmwnLCAnUlRDSWNlU2VydmVyLnVybHMnKTtcbiAgICAgICAgICAgICAgc2VydmVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXJ2ZXIpKTtcbiAgICAgICAgICAgICAgc2VydmVyLnVybHMgPSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2goc2VydmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBPcmlnUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgICAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBPcmlnUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG9yaWdHZXRTdGF0cyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHM7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLFxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAvLyBJZiBzZWxlY3RvciBpcyBhIGZ1bmN0aW9uIHRoZW4gd2UgYXJlIGluIHRoZSBvbGQgc3R5bGUgc3RhdHMgc28ganVzdFxuICAgICAgLy8gcGFzcyBiYWNrIHRoZSBvcmlnaW5hbCBnZXRTdGF0cyBmb3JtYXQgdG8gYXZvaWQgYnJlYWtpbmcgb2xkIHVzZXJzLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gc3BlYy1zdHlsZSBnZXRTdGF0cyBpcyBzdXBwb3J0ZWQsIHJldHVybiB0aG9zZSB3aGVuIGNhbGxlZCB3aXRoXG4gICAgICAvLyBlaXRoZXIgbm8gYXJndW1lbnRzIG9yIHRoZSBzZWxlY3RvciBhcmd1bWVudCBpcyBudWxsLlxuICAgICAgaWYgKG9yaWdHZXRTdGF0cy5sZW5ndGggPT09IDAgJiYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIFtdKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpeENocm9tZVN0YXRzXyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBzdGFuZGFyZFJlcG9ydCA9IHt9O1xuICAgICAgICB2YXIgcmVwb3J0cyA9IHJlc3BvbnNlLnJlc3VsdCgpO1xuICAgICAgICByZXBvcnRzLmZvckVhY2goZnVuY3Rpb24ocmVwb3J0KSB7XG4gICAgICAgICAgdmFyIHN0YW5kYXJkU3RhdHMgPSB7XG4gICAgICAgICAgICBpZDogcmVwb3J0LmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiByZXBvcnQudGltZXN0YW1wLFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICAgICAgICAgIHJlbW90ZWNhbmRpZGF0ZTogJ3JlbW90ZS1jYW5kaWRhdGUnXG4gICAgICAgICAgICB9W3JlcG9ydC50eXBlXSB8fCByZXBvcnQudHlwZVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVwb3J0Lm5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBzdGFuZGFyZFN0YXRzW25hbWVdID0gcmVwb3J0LnN0YXQobmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RhbmRhcmRSZXBvcnRbc3RhbmRhcmRTdGF0cy5pZF0gPSBzdGFuZGFyZFN0YXRzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RhbmRhcmRSZXBvcnQ7XG4gICAgICB9O1xuXG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoT2JqZWN0LmtleXMoc3RhdHMpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICByZXR1cm4gW2tleSwgc3RhdHNba2V5XV07XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFja1dyYXBwZXJfID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBhcmdzWzFdKG1ha2VNYXBTdGF0cyhmaXhDaHJvbWVTdGF0c18ocmVzcG9uc2UpKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbc3VjY2Vzc0NhbGxiYWNrV3JhcHBlcl8sXG4gICAgICAgICAgYXJndW1lbnRzWzBdXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHByb21pc2Utc3VwcG9ydFxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvcmlnR2V0U3RhdHMuYXBwbHkoc2VsZiwgW1xuICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNvbHZlKG1ha2VNYXBTdGF0cyhmaXhDaHJvbWVTdGF0c18ocmVzcG9uc2UpKSk7XG4gICAgICAgICAgfSwgcmVqZWN0XSk7XG4gICAgICB9KS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIGFkZCBwcm9taXNlIHN1cHBvcnQgLS0gbmF0aXZlbHkgYXZhaWxhYmxlIGluIENocm9tZSA1MVxuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNTEpIHtcbiAgICAgIFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbicsICdhZGRJY2VDYW5kaWRhdGUnXVxuICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbYXJnc1swXSwgcmVzb2x2ZSwgcmVqZWN0XSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhcmdzWzFdLmFwcGx5KG51bGwsIFtdKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgICAgIGFyZ3NbMl0uYXBwbHkobnVsbCwgW2Vycl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByb21pc2Ugc3VwcG9ydCBmb3IgY3JlYXRlT2ZmZXIgYW5kIGNyZWF0ZUFuc3dlci4gQXZhaWxhYmxlICh3aXRob3V0XG4gICAgLy8gYnVncykgc2luY2UgTTUyOiBjcmJ1Zy82MTkyODlcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUyKSB7XG4gICAgICBbJ2NyZWF0ZU9mZmVyJywgJ2NyZWF0ZUFuc3dlciddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbcmVzb2x2ZSwgcmVqZWN0LCBvcHRzXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2hpbSBpbXBsaWNpdCBjcmVhdGlvbiBvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24vUlRDSWNlQ2FuZGlkYXRlXG4gICAgWydzZXRMb2NhbERlc2NyaXB0aW9uJywgJ3NldFJlbW90ZURlc2NyaXB0aW9uJywgJ2FkZEljZUNhbmRpZGF0ZSddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuZXcgKChtZXRob2QgPT09ICdhZGRJY2VDYW5kaWRhdGUnKSA/XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA6XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgIC8vIHN1cHBvcnQgZm9yIGFkZEljZUNhbmRpZGF0ZShudWxsIG9yIHVuZGVmaW5lZClcbiAgICB2YXIgbmF0aXZlQWRkSWNlQ2FuZGlkYXRlID1cbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGU7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBhcmd1bWVudHNbMV0uYXBwbHkobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaW1NZWRpYVN0cmVhbTogY2hyb21lU2hpbS5zaGltTWVkaWFTdHJlYW0sXG4gIHNoaW1PblRyYWNrOiBjaHJvbWVTaGltLnNoaW1PblRyYWNrLFxuICBzaGltQWRkVHJhY2tSZW1vdmVUcmFjazogY2hyb21lU2hpbS5zaGltQWRkVHJhY2tSZW1vdmVUcmFjayxcbiAgc2hpbUdldFNlbmRlcnNXaXRoRHRtZjogY2hyb21lU2hpbS5zaGltR2V0U2VuZGVyc1dpdGhEdG1mLFxuICBzaGltU291cmNlT2JqZWN0OiBjaHJvbWVTaGltLnNoaW1Tb3VyY2VPYmplY3QsXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogY2hyb21lU2hpbS5zaGltUGVlckNvbm5lY3Rpb24sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICB2YXIgY29uc3RyYWludHNUb0Nocm9tZV8gPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLm1hbmRhdG9yeSB8fCBjLm9wdGlvbmFsKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGNjID0ge307XG4gICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/IGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHIubWluID0gci5tYXggPSByLmV4YWN0O1xuICAgICAgfVxuICAgICAgdmFyIG9sZG5hbWVfID0gZnVuY3Rpb24ocHJlZml4LCBuYW1lKSB7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuYW1lID09PSAnZGV2aWNlSWQnKSA/ICdzb3VyY2VJZCcgOiBuYW1lO1xuICAgICAgfTtcbiAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2Mub3B0aW9uYWwgPSBjYy5vcHRpb25hbCB8fCBbXTtcbiAgICAgICAgdmFyIG9jID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnbWluJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICAgIG9jID0ge307XG4gICAgICAgICAgb2Nbb2xkbmFtZV8oJ21heCcsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByLmV4YWN0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjYy5tYW5kYXRvcnkgPSBjYy5tYW5kYXRvcnkgfHwge307XG4gICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXygnJywga2V5KV0gPSByLmV4YWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgWydtaW4nLCAnbWF4J10uZm9yRWFjaChmdW5jdGlvbihtaXgpIHtcbiAgICAgICAgICBpZiAoclttaXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeSA9IGNjLm1hbmRhdG9yeSB8fCB7fTtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXyhtaXgsIGtleSldID0gclttaXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGMuYWR2YW5jZWQpIHtcbiAgICAgIGNjLm9wdGlvbmFsID0gKGNjLm9wdGlvbmFsIHx8IFtdKS5jb25jYXQoYy5hZHZhbmNlZCk7XG4gICAgfVxuICAgIHJldHVybiBjYztcbiAgfTtcblxuICB2YXIgc2hpbUNvbnN0cmFpbnRzXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBmdW5jKSB7XG4gICAgY29uc3RyYWludHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgICBpZiAoYSBpbiBvYmogJiYgIShiIGluIG9iaikpIHtcbiAgICAgICAgICBvYmpbYl0gPSBvYmpbYV07XG4gICAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdhdXRvR2FpbkNvbnRyb2wnLCAnZ29vZ0F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdub2lzZVN1cHByZXNzaW9uJywgJ2dvb2dOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICB9XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIFNoaW0gZmFjaW5nTW9kZSBmb3IgbW9iaWxlICYgc3VyZmFjZSBwcm8uXG4gICAgICB2YXIgZmFjZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICBmYWNlID0gZmFjZSAmJiAoKHR5cGVvZiBmYWNlID09PSAnb2JqZWN0JykgPyBmYWNlIDoge2lkZWFsOiBmYWNlfSk7XG4gICAgICB2YXIgZ2V0U3VwcG9ydGVkRmFjaW5nTW9kZUxpZXMgPSBicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNjE7XG5cbiAgICAgIGlmICgoZmFjZSAmJiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuZXhhY3QgPT09ICdlbnZpcm9ubWVudCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZmFjZS5pZGVhbCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICdlbnZpcm9ubWVudCcpKSAmJlxuICAgICAgICAgICEobmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cyAmJlxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpLmZhY2luZ01vZGUgJiZcbiAgICAgICAgICAgICFnZXRTdXBwb3J0ZWRGYWNpbmdNb2RlTGllcykpIHtcbiAgICAgICAgZGVsZXRlIGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICAgIHZhciBtYXRjaGVzO1xuICAgICAgICBpZiAoZmFjZS5leGFjdCA9PT0gJ2Vudmlyb25tZW50JyB8fCBmYWNlLmlkZWFsID09PSAnZW52aXJvbm1lbnQnKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IFsnYmFjaycsICdyZWFyJ107XG4gICAgICAgIH0gZWxzZSBpZiAoZmFjZS5leGFjdCA9PT0gJ3VzZXInIHx8IGZhY2UuaWRlYWwgPT09ICd1c2VyJykge1xuICAgICAgICAgIG1hdGNoZXMgPSBbJ2Zyb250J107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAvLyBMb29rIGZvciBtYXRjaGVzIGluIGxhYmVsLCBvciB1c2UgbGFzdCBjYW0gZm9yIGJhY2sgKHR5cGljYWwpLlxuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRldmljZXMpIHtcbiAgICAgICAgICAgIGRldmljZXMgPSBkZXZpY2VzLmZpbHRlcihmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmtpbmQgPT09ICd2aWRlb2lucHV0JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRldiA9IGRldmljZXMuZmluZChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLnNvbWUoZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobWF0Y2gpICE9PSAtMTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZGV2ICYmIGRldmljZXMubGVuZ3RoICYmIG1hdGNoZXMuaW5kZXhPZignYmFjaycpICE9PSAtMSkge1xuICAgICAgICAgICAgICBkZXYgPSBkZXZpY2VzW2RldmljZXMubGVuZ3RoIC0gMV07IC8vIG1vcmUgbGlrZWx5IHRoZSBiYWNrIGNhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRldikge1xuICAgICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IGZhY2UuZXhhY3QgPyB7ZXhhY3Q6IGRldi5kZXZpY2VJZH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWRlYWw6IGRldi5kZXZpY2VJZH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICAgICAgICAgIGxvZ2dpbmcoJ2Nocm9tZTogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZV8oY29uc3RyYWludHMudmlkZW8pO1xuICAgIH1cbiAgICBsb2dnaW5nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIHJldHVybiBmdW5jKGNvbnN0cmFpbnRzKTtcbiAgfTtcblxuICB2YXIgc2hpbUVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToge1xuICAgICAgICBQZXJtaXNzaW9uRGVuaWVkRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBJbnZhbGlkU3RhdGVFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBEZXZpY2VzTm90Rm91bmRFcnJvcjogJ05vdEZvdW5kRXJyb3InLFxuICAgICAgICBDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3I6ICdPdmVyY29uc3RyYWluZWRFcnJvcicsXG4gICAgICAgIFRyYWNrU3RhcnRFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBNZWRpYURldmljZUZhaWxlZER1ZVRvU2h1dGRvd246ICdOb3RSZWFkYWJsZUVycm9yJyxcbiAgICAgICAgTWVkaWFEZXZpY2VLaWxsU3dpdGNoT246ICdOb3RSZWFkYWJsZUVycm9yJ1xuICAgICAgfVtlLm5hbWVdIHx8IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgIGNvbnN0cmFpbnQ6IGUuY29uc3RyYWludE5hbWUsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAodGhpcy5tZXNzYWdlICYmICc6ICcpICsgdGhpcy5tZXNzYWdlO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGdldFVzZXJNZWRpYV8gPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgc2hpbUNvbnN0cmFpbnRzXyhjb25zdHJhaW50cywgZnVuY3Rpb24oYykge1xuICAgICAgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYShjLCBvblN1Y2Nlc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBnZXRVc2VyTWVkaWFfO1xuXG4gIC8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBnZXRVc2VyTWVkaWEgYXMgYSBQcm9taXNlLlxuICB2YXIgZ2V0VXNlck1lZGlhUHJvbWlzZV8gPSBmdW5jdGlvbihjb25zdHJhaW50cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtcbiAgICAgIGdldFVzZXJNZWRpYTogZ2V0VXNlck1lZGlhUHJvbWlzZV8sXG4gICAgICBlbnVtZXJhdGVEZXZpY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIga2luZHMgPSB7YXVkaW86ICdhdWRpb2lucHV0JywgdmlkZW86ICd2aWRlb2lucHV0J307XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5NZWRpYVN0cmVhbVRyYWNrLmdldFNvdXJjZXMoZnVuY3Rpb24oZGV2aWNlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLm1hcChmdW5jdGlvbihkZXZpY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtsYWJlbDogZGV2aWNlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmRzW2RldmljZS5raW5kXSxcbiAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6ICcnfTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0U3VwcG9ydGVkQ29uc3RyYWludHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRldmljZUlkOiB0cnVlLCBlY2hvQ2FuY2VsbGF0aW9uOiB0cnVlLCBmYWNpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgIGZyYW1lUmF0ZTogdHJ1ZSwgaGVpZ2h0OiB0cnVlLCB3aWR0aDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBBIHNoaW0gZm9yIGdldFVzZXJNZWRpYSBtZXRob2Qgb24gdGhlIG1lZGlhRGV2aWNlcyBvYmplY3QuXG4gIC8vIFRPRE8oS2FwdGVuSmFuc3NvbikgcmVtb3ZlIG9uY2UgaW1wbGVtZW50ZWQgaW4gQ2hyb21lIHN0YWJsZS5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBnZXRVc2VyTWVkaWFQcm9taXNlXyhjb25zdHJhaW50cyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFdmVuIHRob3VnaCBDaHJvbWUgNDUgaGFzIG5hdmlnYXRvci5tZWRpYURldmljZXMgYW5kIGEgZ2V0VXNlck1lZGlhXG4gICAgLy8gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIFByb21pc2UsIGl0IGRvZXMgbm90IGFjY2VwdCBzcGVjLXN0eWxlXG4gICAgLy8gY29uc3RyYWludHMuXG4gICAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgICAgYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNzKSB7XG4gICAgICByZXR1cm4gc2hpbUNvbnN0cmFpbnRzXyhjcywgZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgIGlmIChjLmF1ZGlvICYmICFzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJycsICdOb3RGb3VuZEVycm9yJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIER1bW15IGRldmljZWNoYW5nZSBldmVudCBtZXRob2RzLlxuICAvLyBUT0RPKEthcHRlbkphbnNzb24pIHJlbW92ZSBvbmNlIGltcGxlbWVudGVkIGluIENocm9tZSBzdGFibGUuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgbG9nZ2luZygnRHVtbXkgbWVkaWFEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIgY2FsbGVkLicpO1xuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBsb2dnaW5nKCdEdW1teSBtZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciBjYWxsZWQuJyk7XG4gICAgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvY2hyb21lL2dldHVzZXJtZWRpYS5qc1xuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIHNoaW1SVENQZWVyQ29ubmVjdGlvbiA9IHJlcXVpcmUoJy4vcnRjcGVlcmNvbm5lY3Rpb25fc2hpbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKSxcbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgICBpZiAod2luZG93LlJUQ0ljZUdhdGhlcmVyKSB7XG4gICAgICAvLyBPUlRDIGRlZmluZXMgYW4gUlRDSWNlQ2FuZGlkYXRlIG9iamVjdCBidXQgbm8gY29uc3RydWN0b3IuXG4gICAgICAvLyBOb3QgaW1wbGVtZW50ZWQgaW4gRWRnZS5cbiAgICAgIGlmICghd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSkge1xuICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gT1JUQyBkb2VzIG5vdCBoYXZlIGEgc2Vzc2lvbiBkZXNjcmlwdGlvbiBvYmplY3QgYnV0XG4gICAgICAvLyBvdGhlciBicm93c2VycyAoaS5lLiBDaHJvbWUpIHRoYXQgd2lsbCBzdXBwb3J0IGJvdGggUEMgYW5kIE9SVENcbiAgICAgIC8vIGluIHRoZSBmdXR1cmUgbWlnaHQgaGF2ZSB0aGlzIGRlZmluZWQgYWxyZWFkeS5cbiAgICAgIGlmICghd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gdGhpcyBhZGRzIGFuIGFkZGl0aW9uYWwgZXZlbnQgbGlzdGVuZXIgdG8gTWVkaWFTdHJhY2tUcmFjayB0aGF0IHNpZ25hbHNcbiAgICAgIC8vIHdoZW4gYSB0cmFja3MgZW5hYmxlZCBwcm9wZXJ0eSB3YXMgY2hhbmdlZC4gV29ya2Fyb3VuZCBmb3IgYSBidWcgaW5cbiAgICAgIC8vIGFkZFN0cmVhbSwgc2VlIGJlbG93LiBObyBsb25nZXIgcmVxdWlyZWQgaW4gMTUwMjUrXG4gICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDE1MDI1KSB7XG4gICAgICAgIHZhciBvcmlnTVNURW5hYmxlZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgICAgICAgICB3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJywge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIG9yaWdNU1RFbmFibGVkLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHZhciBldiA9IG5ldyBFdmVudCgnZW5hYmxlZCcpO1xuICAgICAgICAgICAgZXYuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9SVEMgZGVmaW5lcyB0aGUgRFRNRiBzZW5kZXIgYSBiaXQgZGlmZmVyZW50LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2Mvb3J0Yy9pc3N1ZXMvNzE0XG4gICAgaWYgKHdpbmRvdy5SVENSdHBTZW5kZXIgJiYgISgnZHRtZicgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUsICdkdG1mJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh0aGlzLl9kdG1mID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IG5ldyB3aW5kb3cuUlRDRHRtZlNlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFjay5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fZHRtZjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID1cbiAgICAgICAgc2hpbVJUQ1BlZXJDb25uZWN0aW9uKHdpbmRvdywgYnJvd3NlckRldGFpbHMudmVyc2lvbik7XG4gIH0sXG4gIHNoaW1SZXBsYWNlVHJhY2s6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIE9SVEMgaGFzIHJlcGxhY2VUcmFjayAtLSBodHRwczovL2dpdGh1Yi5jb20vdzNjL29ydGMvaXNzdWVzLzYxNFxuICAgIGlmICh3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAgICEoJ3JlcGxhY2VUcmFjaycgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZS5yZXBsYWNlVHJhY2sgPVxuICAgICAgICAgIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLnNldFRyYWNrO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9lZGdlX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gIHZhciBzaGltRXJyb3JfID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB7UGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJ31bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnQsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBnZXRVc2VyTWVkaWEgZXJyb3Igc2hpbS5cbiAgdmFyIG9yaWdHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBvcmlnR2V0VXNlck1lZGlhKGMpLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0dXNlcm1lZGlhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTRFBVdGlscyA9IHJlcXVpcmUoJ3NkcCcpO1xuXG4vLyBzb3J0IHRyYWNrcyBzdWNoIHRoYXQgdGhleSBmb2xsb3cgYW4gYS12LWEtdi4uLlxuLy8gcGF0dGVybi5cbmZ1bmN0aW9uIHNvcnRUcmFja3ModHJhY2tzKSB7XG4gIHZhciBhdWRpb1RyYWNrcyA9IHRyYWNrcy5maWx0ZXIoZnVuY3Rpb24odHJhY2spIHtcbiAgICByZXR1cm4gdHJhY2sua2luZCA9PT0gJ2F1ZGlvJztcbiAgfSk7XG4gIHZhciB2aWRlb1RyYWNrcyA9IHRyYWNrcy5maWx0ZXIoZnVuY3Rpb24odHJhY2spIHtcbiAgICByZXR1cm4gdHJhY2sua2luZCA9PT0gJ3ZpZGVvJztcbiAgfSk7XG4gIHRyYWNrcyA9IFtdO1xuICB3aGlsZSAoYXVkaW9UcmFja3MubGVuZ3RoIHx8IHZpZGVvVHJhY2tzLmxlbmd0aCkge1xuICAgIGlmIChhdWRpb1RyYWNrcy5sZW5ndGgpIHtcbiAgICAgIHRyYWNrcy5wdXNoKGF1ZGlvVHJhY2tzLnNoaWZ0KCkpO1xuICAgIH1cbiAgICBpZiAodmlkZW9UcmFja3MubGVuZ3RoKSB7XG4gICAgICB0cmFja3MucHVzaCh2aWRlb1RyYWNrcy5zaGlmdCgpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYWNrcztcbn1cblxuLy8gRWRnZSBkb2VzIG5vdCBsaWtlXG4vLyAxKSBzdHVuOlxuLy8gMikgdHVybjogdGhhdCBkb2VzIG5vdCBoYXZlIGFsbCBvZiB0dXJuOmhvc3Q6cG9ydD90cmFuc3BvcnQ9dWRwXG4vLyAzKSB0dXJuOiB3aXRoIGlwdjYgYWRkcmVzc2VzXG4vLyA0KSB0dXJuOiBvY2N1cnJpbmcgbXVsaXBsZSB0aW1lc1xuZnVuY3Rpb24gZmlsdGVySWNlU2VydmVycyhpY2VTZXJ2ZXJzLCBlZGdlVmVyc2lvbikge1xuICB2YXIgaGFzVHVybiA9IGZhbHNlO1xuICBpY2VTZXJ2ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpY2VTZXJ2ZXJzKSk7XG4gIHJldHVybiBpY2VTZXJ2ZXJzLmZpbHRlcihmdW5jdGlvbihzZXJ2ZXIpIHtcbiAgICBpZiAoc2VydmVyICYmIChzZXJ2ZXIudXJscyB8fCBzZXJ2ZXIudXJsKSkge1xuICAgICAgdmFyIHVybHMgPSBzZXJ2ZXIudXJscyB8fCBzZXJ2ZXIudXJsO1xuICAgICAgaWYgKHNlcnZlci51cmwgJiYgIXNlcnZlci51cmxzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUlRDSWNlU2VydmVyLnVybCBpcyBkZXByZWNhdGVkISBVc2UgdXJscyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIHVybHMgPT09ICdzdHJpbmcnO1xuICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgIHVybHMgPSBbdXJsc107XG4gICAgICB9XG4gICAgICB1cmxzID0gdXJscy5maWx0ZXIoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIHZhciB2YWxpZFR1cm4gPSB1cmwuaW5kZXhPZigndHVybjonKSA9PT0gMCAmJlxuICAgICAgICAgICAgdXJsLmluZGV4T2YoJ3RyYW5zcG9ydD11ZHAnKSAhPT0gLTEgJiZcbiAgICAgICAgICAgIHVybC5pbmRleE9mKCd0dXJuOlsnKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICFoYXNUdXJuO1xuXG4gICAgICAgIGlmICh2YWxpZFR1cm4pIHtcbiAgICAgICAgICBoYXNUdXJuID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsLmluZGV4T2YoJ3N0dW46JykgPT09IDAgJiYgZWRnZVZlcnNpb24gPj0gMTQzOTM7XG4gICAgICB9KTtcblxuICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICBzZXJ2ZXIudXJscyA9IGlzU3RyaW5nID8gdXJsc1swXSA6IHVybHM7XG4gICAgICByZXR1cm4gISF1cmxzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuLy8gRGV0ZXJtaW5lcyB0aGUgaW50ZXJzZWN0aW9uIG9mIGxvY2FsIGFuZCByZW1vdGUgY2FwYWJpbGl0aWVzLlxuZnVuY3Rpb24gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKGxvY2FsQ2FwYWJpbGl0aWVzLCByZW1vdGVDYXBhYmlsaXRpZXMpIHtcbiAgdmFyIGNvbW1vbkNhcGFiaWxpdGllcyA9IHtcbiAgICBjb2RlY3M6IFtdLFxuICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgIGZlY01lY2hhbmlzbXM6IFtdXG4gIH07XG5cbiAgdmFyIGZpbmRDb2RlY0J5UGF5bG9hZFR5cGUgPSBmdW5jdGlvbihwdCwgY29kZWNzKSB7XG4gICAgcHQgPSBwYXJzZUludChwdCwgMTApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29kZWNzW2ldLnBheWxvYWRUeXBlID09PSBwdCB8fFxuICAgICAgICAgIGNvZGVjc1tpXS5wcmVmZXJyZWRQYXlsb2FkVHlwZSA9PT0gcHQpIHtcbiAgICAgICAgcmV0dXJuIGNvZGVjc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIHJ0eENhcGFiaWxpdHlNYXRjaGVzID0gZnVuY3Rpb24obFJ0eCwgclJ0eCwgbENvZGVjcywgckNvZGVjcykge1xuICAgIHZhciBsQ29kZWMgPSBmaW5kQ29kZWNCeVBheWxvYWRUeXBlKGxSdHgucGFyYW1ldGVycy5hcHQsIGxDb2RlY3MpO1xuICAgIHZhciByQ29kZWMgPSBmaW5kQ29kZWNCeVBheWxvYWRUeXBlKHJSdHgucGFyYW1ldGVycy5hcHQsIHJDb2RlY3MpO1xuICAgIHJldHVybiBsQ29kZWMgJiYgckNvZGVjICYmXG4gICAgICAgIGxDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24obENvZGVjKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgckNvZGVjID0gcmVtb3RlQ2FwYWJpbGl0aWVzLmNvZGVjc1tpXTtcbiAgICAgIGlmIChsQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSByQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpICYmXG4gICAgICAgICAgbENvZGVjLmNsb2NrUmF0ZSA9PT0gckNvZGVjLmNsb2NrUmF0ZSkge1xuICAgICAgICBpZiAobENvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCcgJiZcbiAgICAgICAgICAgIGxDb2RlYy5wYXJhbWV0ZXJzICYmIHJDb2RlYy5wYXJhbWV0ZXJzLmFwdCkge1xuICAgICAgICAgIC8vIGZvciBSVFggd2UgbmVlZCB0byBmaW5kIHRoZSBsb2NhbCBydHggdGhhdCBoYXMgYSBhcHRcbiAgICAgICAgICAvLyB3aGljaCBwb2ludHMgdG8gdGhlIHNhbWUgbG9jYWwgY29kZWMgYXMgdGhlIHJlbW90ZSBvbmUuXG4gICAgICAgICAgaWYgKCFydHhDYXBhYmlsaXR5TWF0Y2hlcyhsQ29kZWMsIHJDb2RlYyxcbiAgICAgICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJDb2RlYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkockNvZGVjKSk7IC8vIGRlZXBjb3B5XG4gICAgICAgIC8vIG51bWJlciBvZiBjaGFubmVscyBpcyB0aGUgaGlnaGVzdCBjb21tb24gbnVtYmVyIG9mIGNoYW5uZWxzXG4gICAgICAgIHJDb2RlYy5udW1DaGFubmVscyA9IE1hdGgubWluKGxDb2RlYy5udW1DaGFubmVscyxcbiAgICAgICAgICAgIHJDb2RlYy5udW1DaGFubmVscyk7XG4gICAgICAgIC8vIHB1c2ggckNvZGVjIHNvIHdlIHJlcGx5IHdpdGggb2ZmZXJlciBwYXlsb2FkIHR5cGVcbiAgICAgICAgY29tbW9uQ2FwYWJpbGl0aWVzLmNvZGVjcy5wdXNoKHJDb2RlYyk7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIGNvbW1vbiBmZWVkYmFjayBtZWNoYW5pc21zXG4gICAgICAgIHJDb2RlYy5ydGNwRmVlZGJhY2sgPSByQ29kZWMucnRjcEZlZWRiYWNrLmZpbHRlcihmdW5jdGlvbihmYikge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbENvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGxDb2RlYy5ydGNwRmVlZGJhY2tbal0udHlwZSA9PT0gZmIudHlwZSAmJlxuICAgICAgICAgICAgICAgIGxDb2RlYy5ydGNwRmVlZGJhY2tbal0ucGFyYW1ldGVyID09PSBmYi5wYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZJWE1FOiBhbHNvIG5lZWQgdG8gZGV0ZXJtaW5lIC5wYXJhbWV0ZXJzXG4gICAgICAgIC8vICBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29wZW5wZWVyL29ydGMvaXNzdWVzLzU2OVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxvY2FsQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihsSGVhZGVyRXh0ZW5zaW9uKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5sZW5ndGg7XG4gICAgICAgICBpKyspIHtcbiAgICAgIHZhciBySGVhZGVyRXh0ZW5zaW9uID0gcmVtb3RlQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnNbaV07XG4gICAgICBpZiAobEhlYWRlckV4dGVuc2lvbi51cmkgPT09IHJIZWFkZXJFeHRlbnNpb24udXJpKSB7XG4gICAgICAgIGNvbW1vbkNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zLnB1c2gockhlYWRlckV4dGVuc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gRklYTUU6IGZlY01lY2hhbmlzbXNcbiAgcmV0dXJuIGNvbW1vbkNhcGFiaWxpdGllcztcbn1cblxuLy8gaXMgYWN0aW9uPXNldExvY2FsRGVzY3JpcHRpb24gd2l0aCB0eXBlIGFsbG93ZWQgaW4gc2lnbmFsaW5nU3RhdGVcbmZ1bmN0aW9uIGlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoYWN0aW9uLCB0eXBlLCBzaWduYWxpbmdTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG9mZmVyOiB7XG4gICAgICBzZXRMb2NhbERlc2NyaXB0aW9uOiBbJ3N0YWJsZScsICdoYXZlLWxvY2FsLW9mZmVyJ10sXG4gICAgICBzZXRSZW1vdGVEZXNjcmlwdGlvbjogWydzdGFibGUnLCAnaGF2ZS1yZW1vdGUtb2ZmZXInXVxuICAgIH0sXG4gICAgYW5zd2VyOiB7XG4gICAgICBzZXRMb2NhbERlc2NyaXB0aW9uOiBbJ2hhdmUtcmVtb3RlLW9mZmVyJywgJ2hhdmUtbG9jYWwtcHJhbnN3ZXInXSxcbiAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uOiBbJ2hhdmUtbG9jYWwtb2ZmZXInLCAnaGF2ZS1yZW1vdGUtcHJhbnN3ZXInXVxuICAgIH1cbiAgfVt0eXBlXVthY3Rpb25dLmluZGV4T2Yoc2lnbmFsaW5nU3RhdGUpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3csIGVkZ2VWZXJzaW9uKSB7XG4gIHZhciBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBfZXZlbnRUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgWydhZGRFdmVudExpc3RlbmVyJywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnZGlzcGF0Y2hFdmVudCddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHNlbGZbbWV0aG9kXSA9IF9ldmVudFRhcmdldFttZXRob2RdLmJpbmQoX2V2ZW50VGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICB0aGlzLm5lZWROZWdvdGlhdGlvbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbmljZWNhbmRpZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5vbmFkZHN0cmVhbSA9IG51bGw7XG4gICAgdGhpcy5vbnRyYWNrID0gbnVsbDtcbiAgICB0aGlzLm9ucmVtb3Zlc3RyZWFtID0gbnVsbDtcbiAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgdGhpcy5vbm5lZ290aWF0aW9ubmVlZGVkID0gbnVsbDtcbiAgICB0aGlzLm9uZGF0YWNoYW5uZWwgPSBudWxsO1xuICAgIHRoaXMuY2FuVHJpY2tsZUljZUNhbmRpZGF0ZXMgPSBudWxsO1xuXG4gICAgdGhpcy5sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLnJlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICB0aGlzLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlbGYubG9jYWxTdHJlYW1zO1xuICAgIH07XG4gICAgdGhpcy5nZXRSZW1vdGVTdHJlYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2VsZi5yZW1vdGVTdHJlYW1zO1xuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsRGVzY3JpcHRpb24gPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnJyxcbiAgICAgIHNkcDogJydcbiAgICB9KTtcbiAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uID0gbmV3IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgdHlwZTogJycsXG4gICAgICBzZHA6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9ICdzdGFibGUnO1xuICAgIHRoaXMuaWNlQ29ubmVjdGlvblN0YXRlID0gJ25ldyc7XG4gICAgdGhpcy5pY2VHYXRoZXJpbmdTdGF0ZSA9ICduZXcnO1xuXG4gICAgdGhpcy5pY2VPcHRpb25zID0ge1xuICAgICAgZ2F0aGVyUG9saWN5OiAnYWxsJyxcbiAgICAgIGljZVNlcnZlcnM6IFtdXG4gICAgfTtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgIHN3aXRjaCAoY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICBjYXNlICdyZWxheSc6XG4gICAgICAgICAgdGhpcy5pY2VPcHRpb25zLmdhdGhlclBvbGljeSA9IGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gZG9uJ3Qgc2V0IGljZVRyYW5zcG9ydFBvbGljeS5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51c2luZ0J1bmRsZSA9IGNvbmZpZyAmJiBjb25maWcuYnVuZGxlUG9saWN5ID09PSAnbWF4LWJ1bmRsZSc7XG5cbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICB0aGlzLmljZU9wdGlvbnMuaWNlU2VydmVycyA9IGZpbHRlckljZVNlcnZlcnMoY29uZmlnLmljZVNlcnZlcnMsXG4gICAgICAgICAgZWRnZVZlcnNpb24pO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAvLyBwZXItdHJhY2sgaWNlR2F0aGVycywgaWNlVHJhbnNwb3J0cywgZHRsc1RyYW5zcG9ydHMsIHJ0cFNlbmRlcnMsIC4uLlxuICAgIC8vIGV2ZXJ5dGhpbmcgdGhhdCBpcyBuZWVkZWQgdG8gZGVzY3JpYmUgYSBTRFAgbS1saW5lLlxuICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gW107XG5cbiAgICAvLyBzaW5jZSB0aGUgaWNlR2F0aGVyZXIgaXMgY3VycmVudGx5IGNyZWF0ZWQgaW4gY3JlYXRlT2ZmZXIgYnV0IHdlXG4gICAgLy8gbXVzdCBub3QgZW1pdCBjYW5kaWRhdGVzIHVudGlsIGFmdGVyIHNldExvY2FsRGVzY3JpcHRpb24gd2UgYnVmZmVyXG4gICAgLy8gdGhlbSBpbiB0aGlzIGFycmF5LlxuICAgIHRoaXMuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlciA9IFtdO1xuXG4gICAgdGhpcy5fc2RwU2Vzc2lvbklkID0gU0RQVXRpbHMuZ2VuZXJhdGVTZXNzaW9uSWQoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuICAgIC8vIEZJWE1FOiBuZWVkIHRvIGFwcGx5IGljZSBjYW5kaWRhdGVzIGluIGEgd2F5IHdoaWNoIGlzIGFzeW5jIGJ1dFxuICAgIC8vIGluLW9yZGVyXG4gICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBlbmQgPSAhZXZlbnQuY2FuZGlkYXRlIHx8IE9iamVjdC5rZXlzKGV2ZW50LmNhbmRpZGF0ZSkubGVuZ3RoID09PSAwO1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHNlY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHNlY3Rpb25zW2pdLmluZGV4T2YoJ1xcclxcbmE9ZW5kLW9mLWNhbmRpZGF0ZXNcXHJcXG4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNlY3Rpb25zW2pdICs9ICdhPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPScgKyBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlICsgJ1xcclxcbic7XG4gICAgICB9XG4gICAgICBzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwID0gc2VjdGlvbnMuam9pbignJyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgc2VsZi5vbmljZWNhbmRpZGF0ZShldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50LmNhbmRpZGF0ZSAmJiBzZWxmLmljZUdhdGhlcmluZ1N0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHZhciBjb21wbGV0ZSA9IHNlbGYudHJhbnNjZWl2ZXJzLmV2ZXJ5KGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyICYmXG4gICAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLnN0YXRlID09PSAnY29tcGxldGVkJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb21wbGV0ZSAmJiBzZWxmLmljZUdhdGhlcmluZ1N0YXRlQ2hhbmdlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIgPSBbXTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH07XG5cbiAgLy8gaW50ZXJuYWwgaGVscGVyIHRvIGNyZWF0ZSBhIHRyYW5zY2VpdmVyIG9iamVjdC5cbiAgLy8gKHdoaWggaXMgbm90IHlldCB0aGUgc2FtZSBhcyB0aGUgV2ViUlRDIDEuMCB0cmFuc2NlaXZlcilcbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVUcmFuc2NlaXZlciA9IGZ1bmN0aW9uKGtpbmQpIHtcbiAgICB2YXIgaGFzQnVuZGxlVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoID4gMDtcbiAgICB2YXIgdHJhbnNjZWl2ZXIgPSB7XG4gICAgICB0cmFjazogbnVsbCxcbiAgICAgIGljZUdhdGhlcmVyOiBudWxsLFxuICAgICAgaWNlVHJhbnNwb3J0OiBudWxsLFxuICAgICAgZHRsc1RyYW5zcG9ydDogbnVsbCxcbiAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcnRwU2VuZGVyOiBudWxsLFxuICAgICAgcnRwUmVjZWl2ZXI6IG51bGwsXG4gICAgICBraW5kOiBraW5kLFxuICAgICAgbWlkOiBudWxsLFxuICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVyczogbnVsbCxcbiAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM6IG51bGwsXG4gICAgICBzdHJlYW06IG51bGwsXG4gICAgICB3YW50UmVjZWl2ZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHRoaXMudXNpbmdCdW5kbGUgJiYgaGFzQnVuZGxlVHJhbnNwb3J0KSB7XG4gICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQ7XG4gICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRyYW5zcG9ydHMgPSB0aGlzLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cygpO1xuICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0ID0gdHJhbnNwb3J0cy5pY2VUcmFuc3BvcnQ7XG4gICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0ID0gdHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0O1xuICAgIH1cbiAgICB0aGlzLnRyYW5zY2VpdmVycy5wdXNoKHRyYW5zY2VpdmVyKTtcbiAgICByZXR1cm4gdHJhbnNjZWl2ZXI7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2ssIHN0cmVhbSkge1xuICAgIHZhciB0cmFuc2NlaXZlcjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMudHJhbnNjZWl2ZXJzW2ldLnRyYWNrICYmXG4gICAgICAgICAgdGhpcy50cmFuc2NlaXZlcnNbaV0ua2luZCA9PT0gdHJhY2sua2luZCkge1xuICAgICAgICB0cmFuc2NlaXZlciA9IHRoaXMudHJhbnNjZWl2ZXJzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRyYW5zY2VpdmVyKSB7XG4gICAgICB0cmFuc2NlaXZlciA9IHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKHRyYWNrLmtpbmQpO1xuICAgIH1cblxuICAgIHRyYW5zY2VpdmVyLnRyYWNrID0gdHJhY2s7XG4gICAgdHJhbnNjZWl2ZXIuc3RyZWFtID0gc3RyZWFtO1xuICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlciA9IG5ldyB3aW5kb3cuUlRDUnRwU2VuZGVyKHRyYWNrLFxuICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0KTtcblxuICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gICAgcmV0dXJuIHRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAyNSkge1xuICAgICAgdGhpcy5sb2NhbFN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgc2VsZi5hZGRUcmFjayh0cmFjaywgc3RyZWFtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9uZSBpcyBuZWNlc3NhcnkgZm9yIGxvY2FsIGRlbW9zIG1vc3RseSwgYXR0YWNoaW5nIGRpcmVjdGx5XG4gICAgICAvLyB0byB0d28gZGlmZmVyZW50IHNlbmRlcnMgZG9lcyBub3Qgd29yayAoYnVpbGQgMTA1NDcpLlxuICAgICAgLy8gRml4ZWQgaW4gMTUwMjUgKG9yIGVhcmxpZXIpXG4gICAgICB2YXIgY2xvbmVkU3RyZWFtID0gc3RyZWFtLmNsb25lKCk7XG4gICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaWR4KSB7XG4gICAgICAgIHZhciBjbG9uZWRUcmFjayA9IGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKVtpZHhdO1xuICAgICAgICB0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmFibGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBjbG9uZWRUcmFjay5lbmFibGVkID0gZXZlbnQuZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgIHNlbGYuYWRkVHJhY2sodHJhY2ssIGNsb25lZFN0cmVhbSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnB1c2goY2xvbmVkU3RyZWFtKTtcbiAgICB9XG4gICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMubG9jYWxTdHJlYW1zLmluZGV4T2Yoc3RyZWFtKTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gISF0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gdHJhbnNjZWl2ZXIucnRwU2VuZGVyO1xuICAgIH0pO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gISF0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDcmVhdGUgSUNFIGdhdGhlcmVyIGFuZCBob29rIGl0IHVwLlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2NyZWF0ZUljZUdhdGhlcmVyID0gZnVuY3Rpb24obWlkLFxuICAgICAgc2RwTUxpbmVJbmRleCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaWNlR2F0aGVyZXIgPSBuZXcgd2luZG93LlJUQ0ljZUdhdGhlcmVyKHNlbGYuaWNlT3B0aW9ucyk7XG4gICAgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKTtcbiAgICAgIGV2ZW50LmNhbmRpZGF0ZSA9IHtzZHBNaWQ6IG1pZCwgc2RwTUxpbmVJbmRleDogc2RwTUxpbmVJbmRleH07XG5cbiAgICAgIHZhciBjYW5kID0gZXZ0LmNhbmRpZGF0ZTtcbiAgICAgIHZhciBlbmQgPSAhY2FuZCB8fCBPYmplY3Qua2V5cyhjYW5kKS5sZW5ndGggPT09IDA7XG4gICAgICAvLyBFZGdlIGVtaXRzIGFuIGVtcHR5IG9iamVjdCBmb3IgUlRDSWNlQ2FuZGlkYXRlQ29tcGxldGXigKVcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgLy8gcG9seWZpbGwgc2luY2UgUlRDSWNlR2F0aGVyZXIuc3RhdGUgaXMgbm90IGltcGxlbWVudGVkIGluXG4gICAgICAgIC8vIEVkZ2UgMTA1NDcgeWV0LlxuICAgICAgICBpZiAoaWNlR2F0aGVyZXIuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGljZUdhdGhlcmVyLnN0YXRlID0gJ2NvbXBsZXRlZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJUQ0ljZUNhbmRpZGF0ZSBkb2Vzbid0IGhhdmUgYSBjb21wb25lbnQsIG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgIGNhbmQuY29tcG9uZW50ID0gMTtcbiAgICAgICAgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSA9IFNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlKGNhbmQpO1xuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgbG9jYWwgZGVzY3JpcHRpb24uXG4gICAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgc2VjdGlvbnNbZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXggKyAxXSArPVxuICAgICAgICAgICAgJ2E9JyArIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUgKyAnXFxyXFxuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJztcbiAgICAgIH1cbiAgICAgIHNlbGYubG9jYWxEZXNjcmlwdGlvbi5zZHAgPSBzZWN0aW9ucy5qb2luKCcnKTtcbiAgICAgIHZhciB0cmFuc2NlaXZlcnMgPSBzZWxmLl9wZW5kaW5nT2ZmZXIgPyBzZWxmLl9wZW5kaW5nT2ZmZXIgOlxuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzO1xuICAgICAgdmFyIGNvbXBsZXRlID0gdHJhbnNjZWl2ZXJzLmV2ZXJ5KGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJlxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuc3RhdGUgPT09ICdjb21wbGV0ZWQnO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEVtaXQgY2FuZGlkYXRlIGlmIGxvY2FsRGVzY3JpcHRpb24gaXMgc2V0LlxuICAgICAgLy8gQWxzbyBlbWl0cyBudWxsIGNhbmRpZGF0ZSB3aGVuIGFsbCBnYXRoZXJlcnMgYXJlIGNvbXBsZXRlLlxuICAgICAgc3dpdGNoIChzZWxmLmljZUdhdGhlcmluZ1N0YXRlKSB7XG4gICAgICAgIGNhc2UgJ25ldyc6XG4gICAgICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5wdXNoKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVuZCAmJiBjb21wbGV0ZSkge1xuICAgICAgICAgICAgc2VsZi5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnYXRoZXJpbmcnOlxuICAgICAgICAgIHNlbGYuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMoKTtcbiAgICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2ljZWNhbmRpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUobmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgIHNlbGYuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgICAgIC8vIHNob3VsZCBub3QgaGFwcGVuLi4uIGN1cnJlbnRseSFcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gbm8tb3AuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaWNlR2F0aGVyZXI7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIElDRSB0cmFuc3BvcnQgYW5kIERUTFMgdHJhbnNwb3J0LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2NyZWF0ZUljZUFuZER0bHNUcmFuc3BvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBpY2VUcmFuc3BvcnQgPSBuZXcgd2luZG93LlJUQ0ljZVRyYW5zcG9ydChudWxsKTtcbiAgICBpY2VUcmFuc3BvcnQub25pY2VzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcblxuICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gbmV3IHdpbmRvdy5SVENEdGxzVHJhbnNwb3J0KGljZVRyYW5zcG9ydCk7XG4gICAgZHRsc1RyYW5zcG9ydC5vbmR0bHNzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcbiAgICBkdGxzVHJhbnNwb3J0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9uZXJyb3IgZG9lcyBub3Qgc2V0IHN0YXRlIHRvIGZhaWxlZCBieSBpdHNlbGYuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZHRsc1RyYW5zcG9ydCwgJ3N0YXRlJyxcbiAgICAgICAgICB7dmFsdWU6ICdmYWlsZWQnLCB3cml0YWJsZTogdHJ1ZX0pO1xuICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBpY2VUcmFuc3BvcnQ6IGljZVRyYW5zcG9ydCxcbiAgICAgIGR0bHNUcmFuc3BvcnQ6IGR0bHNUcmFuc3BvcnRcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlc3Ryb3kgSUNFIGdhdGhlcmVyLCBJQ0UgdHJhbnNwb3J0IGFuZCBEVExTIHRyYW5zcG9ydC5cbiAgLy8gV2l0aG91dCB0cmlnZ2VyaW5nIHRoZSBjYWxsYmFja3MuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZGlzcG9zZUljZUFuZER0bHNUcmFuc3BvcnRzID0gZnVuY3Rpb24oXG4gICAgICBzZHBNTGluZUluZGV4KSB7XG4gICAgdmFyIGljZUdhdGhlcmVyID0gdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXI7XG4gICAgaWYgKGljZUdhdGhlcmVyKSB7XG4gICAgICBkZWxldGUgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZTtcbiAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VHYXRoZXJlcjtcbiAgICB9XG4gICAgdmFyIGljZVRyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydDtcbiAgICBpZiAoaWNlVHJhbnNwb3J0KSB7XG4gICAgICBkZWxldGUgaWNlVHJhbnNwb3J0Lm9uaWNlc3RhdGVjaGFuZ2U7XG4gICAgICBkZWxldGUgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlVHJhbnNwb3J0O1xuICAgIH1cbiAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQ7XG4gICAgaWYgKGR0bHNUcmFuc3BvcnQpIHtcbiAgICAgIGRlbGV0ZSBkdGxzVHJhbnNwb3J0Lm9uZHRsc3N0YXRlY2hhbmdlO1xuICAgICAgZGVsZXRlIGR0bHNUcmFuc3BvcnQub25lcnJvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5kdGxzVHJhbnNwb3J0O1xuICAgIH1cbiAgfTtcblxuICAvLyBTdGFydCB0aGUgUlRQIFNlbmRlciBhbmQgUmVjZWl2ZXIgZm9yIGEgdHJhbnNjZWl2ZXIuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdHJhbnNjZWl2ZSA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLFxuICAgICAgc2VuZCwgcmVjdikge1xuICAgIHZhciBwYXJhbXMgPSBnZXRDb21tb25DYXBhYmlsaXRpZXModHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG4gICAgaWYgKHNlbmQgJiYgdHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICBwYXJhbXMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIHBhcmFtcy5ydGNwID0ge1xuICAgICAgICBjbmFtZTogU0RQVXRpbHMubG9jYWxDTmFtZSxcbiAgICAgICAgY29tcG91bmQ6IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNvbXBvdW5kXG4gICAgICB9O1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtcy5ydGNwLnNzcmMgPSB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmM7XG4gICAgICB9XG4gICAgICB0cmFuc2NlaXZlci5ydHBTZW5kZXIuc2VuZChwYXJhbXMpO1xuICAgIH1cbiAgICBpZiAocmVjdiAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgLy8gcmVtb3ZlIFJUWCBmaWVsZCBpbiBFZGdlIDE0OTQyXG4gICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICYmIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgICAgICAmJiBlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgZGVsZXRlIHAucnR4O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgIGNuYW1lOiB0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5jbmFtZSxcbiAgICAgICAgY29tcG91bmQ6IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNvbXBvdW5kXG4gICAgICB9O1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtcy5ydGNwLnNzcmMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmM7XG4gICAgICB9XG4gICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5yZWNlaXZlKHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIWlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoJ3NldExvY2FsRGVzY3JpcHRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbi50eXBlLCB0aGlzLnNpZ25hbGluZ1N0YXRlKSkge1xuICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoJ0NhbiBub3Qgc2V0IGxvY2FsICcgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAnIGluIHN0YXRlICcgKyB0aGlzLnNpZ25hbGluZ1N0YXRlKTtcbiAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgdHlwZW9mIGFyZ3VtZW50c1syXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMl0sIDAsIGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHZhciBzZWN0aW9ucztcbiAgICB2YXIgc2Vzc2lvbnBhcnQ7XG4gICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgIC8vIEZJWE1FOiBXaGF0IHdhcyB0aGUgcHVycG9zZSBvZiB0aGlzIGVtcHR5IGlmIHN0YXRlbWVudD9cbiAgICAgIC8vIGlmICghdGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdPZmZlcikge1xuICAgICAgICAvLyBWRVJZIGxpbWl0ZWQgc3VwcG9ydCBmb3IgU0RQIG11bmdpbmcuIExpbWl0ZWQgdG86XG4gICAgICAgIC8vICogY2hhbmdpbmcgdGhlIG9yZGVyIG9mIGNvZGVjc1xuICAgICAgICBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoZGVzY3JpcHRpb24uc2RwKTtcbiAgICAgICAgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAgIHZhciBjYXBzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICAgICAgc2VsZi5fcGVuZGluZ09mZmVyW3NkcE1MaW5lSW5kZXhdLmxvY2FsQ2FwYWJpbGl0aWVzID0gY2FwcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgICBkZWxldGUgdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgICB2YXIgaXNJY2VMaXRlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICAgJ2E9aWNlLWxpdGUnKS5sZW5ndGggPiAwO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgdmFyIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIHZhciBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICB2YXIgaWNlVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0O1xuICAgICAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuICAgICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIHZhciByZWplY3RlZCA9IFNEUFV0aWxzLmlzUmVqZWN0ZWQobWVkaWFTZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXJlamVjdGVkICYmICF0cmFuc2NlaXZlci5pc0RhdGFjaGFubmVsKSB7XG4gICAgICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICBtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgbWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICAgICAgaWYgKGlzSWNlTGl0ZSkge1xuICAgICAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMucm9sZSA9ICdzZXJ2ZXInO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc2VsZi51c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpY2VUcmFuc3BvcnQuc3RhcnQoaWNlR2F0aGVyZXIsIHJlbW90ZUljZVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgaXNJY2VMaXRlID8gJ2NvbnRyb2xsaW5nJyA6ICdjb250cm9sbGVkJyk7XG4gICAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIG9mIGNhcGFiaWxpdGllcy5cbiAgICAgICAgICB2YXIgcGFyYW1zID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKGxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgICAgLy8gU3RhcnQgdGhlIFJUQ1J0cFNlbmRlci4gVGhlIFJUQ1J0cFJlY2VpdmVyIGZvciB0aGlzXG4gICAgICAgICAgLy8gdHJhbnNjZWl2ZXIgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkIGluIHNldFJlbW90ZURlc2NyaXB0aW9uLlxuICAgICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICAgIHBhcmFtcy5jb2RlY3MubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmxvY2FsRGVzY3JpcHRpb24gPSB7XG4gICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHBcbiAgICB9O1xuICAgIHN3aXRjaCAoZGVzY3JpcHRpb24udHlwZSkge1xuICAgICAgY2FzZSAnb2ZmZXInOlxuICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnaGF2ZS1sb2NhbC1vZmZlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICAgJ1wiJyk7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBzdWNjZXNzIGNhbGxiYWNrIHdhcyBwcm92aWRlZCwgZW1pdCBJQ0UgY2FuZGlkYXRlcyBhZnRlciBpdFxuICAgIC8vIGhhcyBiZWVuIGV4ZWN1dGVkLiBPdGhlcndpc2UsIGVtaXQgY2FsbGJhY2sgYWZ0ZXIgdGhlIFByb21pc2UgaXNcbiAgICAvLyByZXNvbHZlZC5cbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJlxuICAgICAgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgIHZhciBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9PT0gJ25ldycpIHtcbiAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgcC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNDYWxsYmFjaykge1xuICAgICAgICBpZiAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9PT0gJ25ldycpIHtcbiAgICAgICAgICBzZWxmLmljZUdhdGhlcmluZ1N0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgICAgc2VsZi5fZW1pdEdhdGhlcmluZ1N0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXN1YWxseSBjYW5kaWRhdGVzIHdpbGwgYmUgZW1pdHRlZCBlYXJsaWVyLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzLmJpbmQoc2VsZiksIDUwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIWlzQWN0aW9uQWxsb3dlZEluU2lnbmFsaW5nU3RhdGUoJ3NldFJlbW90ZURlc2NyaXB0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb24udHlwZSwgdGhpcy5zaWduYWxpbmdTdGF0ZSkpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKCdDYW4gbm90IHNldCByZW1vdGUgJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICcgaW4gc3RhdGUgJyArIHRoaXMuc2lnbmFsaW5nU3RhdGUpO1xuICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiB0eXBlb2YgYXJndW1lbnRzWzJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1syXSwgMCwgZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgdmFyIHN0cmVhbXMgPSB7fTtcbiAgICB2YXIgcmVjZWl2ZXJMaXN0ID0gW107XG4gICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhkZXNjcmlwdGlvbi5zZHApO1xuICAgIHZhciBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgdmFyIGlzSWNlTGl0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1pY2UtbGl0ZScpLmxlbmd0aCA+IDA7XG4gICAgdmFyIHVzaW5nQnVuZGxlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICdhPWdyb3VwOkJVTkRMRSAnKS5sZW5ndGggPiAwO1xuICAgIHRoaXMudXNpbmdCdW5kbGUgPSB1c2luZ0J1bmRsZTtcbiAgICB2YXIgaWNlT3B0aW9ucyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1pY2Utb3B0aW9uczonKVswXTtcbiAgICBpZiAoaWNlT3B0aW9ucykge1xuICAgICAgdGhpcy5jYW5Ucmlja2xlSWNlQ2FuZGlkYXRlcyA9IGljZU9wdGlvbnMuc3Vic3RyKDE0KS5zcGxpdCgnICcpXG4gICAgICAgICAgLmluZGV4T2YoJ3RyaWNrbGUnKSA+PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhblRyaWNrbGVJY2VDYW5kaWRhdGVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciBraW5kID0gU0RQVXRpbHMuZ2V0S2luZChtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHJlamVjdGVkID0gU0RQVXRpbHMuaXNSZWplY3RlZChtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHByb3RvY29sID0gbGluZXNbMF0uc3Vic3RyKDIpLnNwbGl0KCcgJylbMl07XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSBTRFBVdGlscy5nZXREaXJlY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICB2YXIgcmVtb3RlTXNpZCA9IFNEUFV0aWxzLnBhcnNlTXNpZChtZWRpYVNlY3Rpb24pO1xuXG4gICAgICB2YXIgbWlkID0gU0RQVXRpbHMuZ2V0TWlkKG1lZGlhU2VjdGlvbikgfHwgU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG5cbiAgICAgIC8vIFJlamVjdCBkYXRhY2hhbm5lbHMgd2hpY2ggYXJlIG5vdCBpbXBsZW1lbnRlZCB5ZXQuXG4gICAgICBpZiAoa2luZCA9PT0gJ2FwcGxpY2F0aW9uJyAmJiBwcm90b2NvbCA9PT0gJ0RUTFMvU0NUUCcpIHtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0gPSB7XG4gICAgICAgICAgbWlkOiBtaWQsXG4gICAgICAgICAgaXNEYXRhY2hhbm5lbDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc2NlaXZlcjtcbiAgICAgIHZhciBpY2VHYXRoZXJlcjtcbiAgICAgIHZhciBpY2VUcmFuc3BvcnQ7XG4gICAgICB2YXIgZHRsc1RyYW5zcG9ydDtcbiAgICAgIHZhciBydHBSZWNlaXZlcjtcbiAgICAgIHZhciBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgdmFyIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXM7XG5cbiAgICAgIHZhciB0cmFjaztcbiAgICAgIC8vIEZJWE1FOiBlbnN1cmUgdGhlIG1lZGlhU2VjdGlvbiBoYXMgcnRjcC1tdXggc2V0LlxuICAgICAgdmFyIHJlbW90ZUNhcGFiaWxpdGllcyA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnM7XG4gICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnM7XG4gICAgICBpZiAoIXJlamVjdGVkKSB7XG4gICAgICAgIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICBzZXNzaW9ucGFydCk7XG4gICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzLnJvbGUgPSAnY2xpZW50JztcbiAgICAgIH1cbiAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgIFNEUFV0aWxzLnBhcnNlUnRwRW5jb2RpbmdQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG5cbiAgICAgIHZhciBydGNwUGFyYW1ldGVycyA9IFNEUFV0aWxzLnBhcnNlUnRjcFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcblxuICAgICAgdmFyIGlzQ29tcGxldGUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnLCBzZXNzaW9ucGFydCkubGVuZ3RoID4gMDtcbiAgICAgIHZhciBjYW5kcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9Y2FuZGlkYXRlOicpXG4gICAgICAgICAgLm1hcChmdW5jdGlvbihjYW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VDYW5kaWRhdGUoY2FuZCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNhbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5kLmNvbXBvbmVudCA9PT0gJzEnIHx8IGNhbmQuY29tcG9uZW50ID09PSAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gdXNlIEJVTkRMRSBhbmQgZGlzcG9zZSB0cmFuc3BvcnRzLlxuICAgICAgaWYgKChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInIHx8IGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInKSAmJlxuICAgICAgICAgICFyZWplY3RlZCAmJiB1c2luZ0J1bmRsZSAmJiBzZHBNTGluZUluZGV4ID4gMCAmJlxuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdKSB7XG4gICAgICAgIHNlbGYuX2Rpc3Bvc2VJY2VBbmREdGxzVHJhbnNwb3J0cyhzZHBNTGluZUluZGV4KTtcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXIgPVxuICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXI7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydCA9XG4gICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQgPVxuICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgaWYgKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFNlbmRlcikge1xuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFNlbmRlci5zZXRUcmFuc3BvcnQoXG4gICAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBSZWNlaXZlcikge1xuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFJlY2VpdmVyLnNldFRyYW5zcG9ydChcbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInICYmICFyZWplY3RlZCkge1xuICAgICAgICB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdIHx8XG4gICAgICAgICAgICBzZWxmLl9jcmVhdGVUcmFuc2NlaXZlcihraW5kKTtcbiAgICAgICAgdHJhbnNjZWl2ZXIubWlkID0gbWlkO1xuXG4gICAgICAgIGlmICghdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciA9IHVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID9cbiAgICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXIgOlxuICAgICAgICAgICAgICBzZWxmLl9jcmVhdGVJY2VHYXRoZXJlcihtaWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ29tcGxldGUgJiYgY2FuZHMubGVuZ3RoICYmXG4gICAgICAgICAgICAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnNldFJlbW90ZUNhbmRpZGF0ZXMoY2FuZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIuZ2V0Q2FwYWJpbGl0aWVzKGtpbmQpO1xuXG4gICAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgICAvLyBpbiBhZGFwdGVyLmpzXG4gICAgICAgIGlmIChlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgICAgZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29kZWMubmFtZSAhPT0gJ3J0eCc7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxXG4gICAgICAgIH1dO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSB7XG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSBuZXcgd2luZG93LlJUQ1J0cFJlY2VpdmVyKHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQsXG4gICAgICAgICAgICAgIGtpbmQpO1xuXG4gICAgICAgICAgdHJhY2sgPSBydHBSZWNlaXZlci50cmFjaztcbiAgICAgICAgICAvLyBGSVhNRTogZG9lcyBub3Qgd29yayB3aXRoIFBsYW4gQi5cbiAgICAgICAgICBpZiAocmVtb3RlTXNpZCkge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSkge1xuICAgICAgICAgICAgICBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGVNc2lkLnN0cmVhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWNrLCAnaWQnLCB7XG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbW90ZU1zaWQudHJhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlcixcbiAgICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzID0gbG9jYWxDYXBhYmlsaXRpZXM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyA9IHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIgPSBydHBSZWNlaXZlcjtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcbiAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPSByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBSVENSdHBSZWNlaXZlciBub3cuIFRoZSBSVFBTZW5kZXIgaXMgc3RhcnRlZCBpblxuICAgICAgICAvLyBzZXRMb2NhbERlc2NyaXB0aW9uLlxuICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIGljZUdhdGhlcmVyID0gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXI7XG4gICAgICAgIGljZVRyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydDtcbiAgICAgICAgZHRsc1RyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIHJ0cFJlY2VpdmVyID0gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVtb3RlQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRjcFBhcmFtZXRlcnMgPSBydGNwUGFyYW1ldGVycztcblxuICAgICAgICBpZiAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApIHtcbiAgICAgICAgICBpZiAoKGlzSWNlTGl0ZSB8fCBpc0NvbXBsZXRlKSAmJiBjYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGljZVRyYW5zcG9ydC5zZXRSZW1vdGVDYW5kaWRhdGVzKGNhbmRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAnY29udHJvbGxpbmcnKTtcbiAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAncmVjdm9ubHknLFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG5cbiAgICAgICAgaWYgKHJ0cFJlY2VpdmVyICYmXG4gICAgICAgICAgICAoZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5JykpIHtcbiAgICAgICAgICB0cmFjayA9IHJ0cFJlY2VpdmVyLnRyYWNrO1xuICAgICAgICAgIGlmIChyZW1vdGVNc2lkKSB7XG4gICAgICAgICAgICBpZiAoIXN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dKSB7XG4gICAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlciwgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV1dKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0LmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXMuZGVmYXVsdF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGSVhNRTogYWN0dWFsbHkgdGhlIHJlY2VpdmVyIHNob3VsZCBiZSBjcmVhdGVkIGxhdGVyLlxuICAgICAgICAgIGRlbGV0ZSB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdGVEZXNjcmlwdGlvbiA9IHtcbiAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICBzZHA6IGRlc2NyaXB0aW9uLnNkcFxuICAgIH07XG4gICAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdvZmZlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdoYXZlLXJlbW90ZS1vZmZlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICAgJ1wiJyk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHN0cmVhbXMpLmZvckVhY2goZnVuY3Rpb24oc2lkKSB7XG4gICAgICB2YXIgc3RyZWFtID0gc3RyZWFtc1tzaWRdO1xuICAgICAgaWYgKHN0cmVhbS5nZXRUcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdhZGRzdHJlYW0nKTtcbiAgICAgICAgZXZlbnQuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZiAoc2VsZi5vbmFkZHN0cmVhbSAhPT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5vbmFkZHN0cmVhbShldmVudCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWNlaXZlckxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgdmFyIHRyYWNrID0gaXRlbVswXTtcbiAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSBpdGVtWzFdO1xuICAgICAgICAgIGlmIChzdHJlYW0uaWQgIT09IGl0ZW1bMl0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHRyYWNrRXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgdHJhY2tFdmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgIHRyYWNrRXZlbnQucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgICB0cmFja0V2ZW50LnN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQodHJhY2tFdmVudCk7XG4gICAgICAgICAgaWYgKHNlbGYub250cmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYub250cmFjayh0cmFja0V2ZW50KTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIGFkZEljZUNhbmRpZGF0ZSh7fSkgd2FzIGNhbGxlZCB3aXRoaW4gZm91ciBzZWNvbmRzIGFmdGVyXG4gICAgLy8gc2V0UmVtb3RlRGVzY3JpcHRpb24uXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIShzZWxmICYmIHNlbGYudHJhbnNjZWl2ZXJzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZSA9PT0gJ25ldycgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5nZXRSZW1vdGVDYW5kaWRhdGVzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGltZW91dCBmb3IgYWRkUmVtb3RlQ2FuZGlkYXRlLiBDb25zaWRlciBzZW5kaW5nICcgK1xuICAgICAgICAgICAgICAnYW4gZW5kLW9mLWNhbmRpZGF0ZXMgbm90aWZpY2F0aW9uJyk7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDQwMDApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICAvKiBub3QgeWV0XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgICovXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCkge1xuICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gRklYTUU6IGNsZWFuIHVwIHRyYWNrcywgbG9jYWwgc3RyZWFtcywgcmVtb3RlIHN0cmVhbXMsIGV0Y1xuICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdjbG9zZWQnKTtcbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIHNpZ25hbGluZyBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVTaWduYWxpbmdTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG4gICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnc2lnbmFsaW5nc3RhdGVjaGFuZ2UnKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIHRvIGZpcmUgdGhlIG5lZ290aWF0aW9ubmVlZGVkIGV2ZW50LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLnNpZ25hbGluZ1N0YXRlICE9PSAnc3RhYmxlJyB8fCB0aGlzLm5lZWROZWdvdGlhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5lZWROZWdvdGlhdGlvbiA9IHRydWU7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5uZWVkTmVnb3RpYXRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGYubmVlZE5lZ290aWF0aW9uID0gZmFsc2U7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHNlbGYub25uZWdvdGlhdGlvbm5lZWRlZCAhPT0gbnVsbCkge1xuICAgICAgICBzZWxmLm9ubmVnb3RpYXRpb25uZWVkZWQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9O1xuXG4gIC8vIFVwZGF0ZSB0aGUgY29ubmVjdGlvbiBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5ld1N0YXRlO1xuICAgIHZhciBzdGF0ZXMgPSB7XG4gICAgICAnbmV3JzogMCxcbiAgICAgIGNsb3NlZDogMCxcbiAgICAgIGNvbm5lY3Rpbmc6IDAsXG4gICAgICBjaGVja2luZzogMCxcbiAgICAgIGNvbm5lY3RlZDogMCxcbiAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgIGRpc2Nvbm5lY3RlZDogMCxcbiAgICAgIGZhaWxlZDogMFxuICAgIH07XG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgc3RhdGVzW3RyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgIHN0YXRlc1t0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0YXRlXSsrO1xuICAgIH0pO1xuICAgIC8vIElDRVRyYW5zcG9ydC5jb21wbGV0ZWQgYW5kIGNvbm5lY3RlZCBhcmUgdGhlIHNhbWUgZm9yIHRoaXMgcHVycG9zZS5cbiAgICBzdGF0ZXMuY29ubmVjdGVkICs9IHN0YXRlcy5jb21wbGV0ZWQ7XG5cbiAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgIGlmIChzdGF0ZXMuZmFpbGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnZmFpbGVkJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb25uZWN0aW5nID4gMCB8fCBzdGF0ZXMuY2hlY2tpbmcgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdjb25uZWN0aW5nJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5kaXNjb25uZWN0ZWQgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzLm5ldyA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ25ldyc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGVkID4gMCB8fCBzdGF0ZXMuY29tcGxldGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnY29ubmVjdGVkJztcbiAgICB9XG5cbiAgICBpZiAobmV3U3RhdGUgIT09IHNlbGYuaWNlQ29ubmVjdGlvblN0YXRlKSB7XG4gICAgICBzZWxmLmljZUNvbm5lY3Rpb25TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdpY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICBpZiAodGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9wZW5kaW5nT2ZmZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlT2ZmZXIgY2FsbGVkIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyBvZmZlci4nKTtcbiAgICB9XG4gICAgdmFyIG9mZmVyT3B0aW9ucztcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgfVxuXG4gICAgdmFyIG51bUF1ZGlvVHJhY2tzID0gdGhpcy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XG4gICAgfSkubGVuZ3RoO1xuICAgIHZhciBudW1WaWRlb1RyYWNrcyA9IHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xuICAgIH0pLmxlbmd0aDtcblxuICAgIC8vIERldGVybWluZSBudW1iZXIgb2YgYXVkaW8gYW5kIHZpZGVvIHRyYWNrcyB3ZSBuZWVkIHRvIHNlbmQvcmVjdi5cbiAgICBpZiAob2ZmZXJPcHRpb25zKSB7XG4gICAgICAvLyBSZWplY3QgQ2hyb21lIGxlZ2FjeSBjb25zdHJhaW50cy5cbiAgICAgIGlmIChvZmZlck9wdGlvbnMubWFuZGF0b3J5IHx8IG9mZmVyT3B0aW9ucy5vcHRpb25hbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0xlZ2FjeSBtYW5kYXRvcnkvb3B0aW9uYWwgY29uc3RyYWludHMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBudW1BdWRpb1RyYWNrcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSB0cnVlKSB7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvID09PSBmYWxzZSkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1WaWRlb1RyYWNrcyA9IG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZVZpZGVvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgbnVtQXVkaW9UcmFja3MtLTtcbiAgICAgICAgaWYgKG51bUF1ZGlvVHJhY2tzIDwgMCkge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgICBpZiAobnVtVmlkZW9UcmFja3MgPCAwKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIud2FudFJlY2VpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIE0tbGluZXMgZm9yIHJlY3Zvbmx5IHN0cmVhbXMuXG4gICAgd2hpbGUgKG51bUF1ZGlvVHJhY2tzID4gMCB8fCBudW1WaWRlb1RyYWNrcyA+IDApIHtcbiAgICAgIGlmIChudW1BdWRpb1RyYWNrcyA+IDApIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlVHJhbnNjZWl2ZXIoJ2F1ZGlvJyk7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICB9XG4gICAgICBpZiAobnVtVmlkZW9UcmFja3MgPiAwKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKCd2aWRlbycpO1xuICAgICAgICBudW1WaWRlb1RyYWNrcy0tO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZW9yZGVyIHRyYWNrc1xuICAgIHZhciB0cmFuc2NlaXZlcnMgPSBzb3J0VHJhY2tzKHRoaXMudHJhbnNjZWl2ZXJzKTtcblxuICAgIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSh0aGlzLl9zZHBTZXNzaW9uSWQpO1xuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAvLyBGb3IgZWFjaCB0cmFjaywgY3JlYXRlIGFuIGljZSBnYXRoZXJlciwgaWNlIHRyYW5zcG9ydCxcbiAgICAgIC8vIGR0bHMgdHJhbnNwb3J0LCBwb3RlbnRpYWxseSBydHBzZW5kZXIgYW5kIHJ0cHJlY2VpdmVyLlxuICAgICAgdmFyIHRyYWNrID0gdHJhbnNjZWl2ZXIudHJhY2s7XG4gICAgICB2YXIga2luZCA9IHRyYW5zY2VpdmVyLmtpbmQ7XG4gICAgICB2YXIgbWlkID0gU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG4gICAgICB0cmFuc2NlaXZlci5taWQgPSBtaWQ7XG5cbiAgICAgIGlmICghdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgPSBzZWxmLnVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwID9cbiAgICAgICAgICAgIHRyYW5zY2VpdmVyc1swXS5pY2VHYXRoZXJlciA6XG4gICAgICAgICAgICBzZWxmLl9jcmVhdGVJY2VHYXRoZXJlcihtaWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXMgPSB3aW5kb3cuUlRDUnRwU2VuZGVyLmdldENhcGFiaWxpdGllcyhraW5kKTtcbiAgICAgIC8vIGZpbHRlciBSVFggdW50aWwgYWRkaXRpb25hbCBzdHVmZiBuZWVkZWQgZm9yIFJUWCBpcyBpbXBsZW1lbnRlZFxuICAgICAgLy8gaW4gYWRhcHRlci5qc1xuICAgICAgaWYgKGVkZ2VWZXJzaW9uIDwgMTUwMTkpIHtcbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzID0gbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2RlYy5uYW1lICE9PSAncnR4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgLy8gd29yayBhcm91bmQgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTY1NTJcbiAgICAgICAgLy8gYnkgYWRkaW5nIGxldmVsLWFzeW1tZXRyeS1hbGxvd2VkPTFcbiAgICAgICAgaWYgKGNvZGVjLm5hbWUgPT09ICdIMjY0JyAmJlxuICAgICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29kZWMucGFyYW1ldGVyc1snbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQnXSA9ICcxJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGdlbmVyYXRlIGFuIHNzcmMgbm93LCB0byBiZSB1c2VkIGxhdGVyIGluIHJ0cFNlbmRlci5zZW5kXG4gICAgICB2YXIgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IFt7XG4gICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDEpICogMTAwMVxuICAgICAgfV07XG4gICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICBpZiAoZWRnZVZlcnNpb24gPj0gMTUwMTkgJiYga2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4ID0ge1xuICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMSkgKiAxMDAxICsgMVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyID0gbmV3IHdpbmRvdy5SVENSdHBSZWNlaXZlcihcbiAgICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LFxuICAgICAgICAgIGtpbmRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMgPSBsb2NhbENhcGFiaWxpdGllcztcbiAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgIH0pO1xuXG4gICAgLy8gYWx3YXlzIG9mZmVyIEJVTkRMRSBhbmQgZGlzcG9zZSBvbiByZXR1cm4gaWYgbm90IHN1cHBvcnRlZC5cbiAgICBpZiAodGhpcy5fY29uZmlnLmJ1bmRsZVBvbGljeSAhPT0gJ21heC1jb21wYXQnKSB7XG4gICAgICBzZHAgKz0gJ2E9Z3JvdXA6QlVORExFICcgKyB0cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHNkcCArPSAnYT1pY2Utb3B0aW9uczp0cmlja2xlXFxyXFxuJztcblxuICAgIHRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsICdvZmZlcicsIHRyYW5zY2VpdmVyLnN0cmVhbSk7XG4gICAgICBzZHAgKz0gJ2E9cnRjcC1yc2l6ZVxcclxcbic7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9wZW5kaW5nT2ZmZXIgPSB0cmFuc2NlaXZlcnM7XG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnb2ZmZXInLFxuICAgICAgc2RwOiBzZHBcbiAgICB9KTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMF0sIDAsIGRlc2MpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlc2MpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUodGhpcy5fc2RwU2Vzc2lvbklkKTtcbiAgICBpZiAodGhpcy51c2luZ0J1bmRsZSkge1xuICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgdGhpcy50cmFuc2NlaXZlcnMubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubWlkO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG4gICAgfVxuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5pc0RhdGFjaGFubmVsKSB7XG4gICAgICAgIHNkcCArPSAnbT1hcHBsaWNhdGlvbiAwIERUTFMvU0NUUCA1MDAwXFxyXFxuJyArXG4gICAgICAgICAgICAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbicgK1xuICAgICAgICAgICAgJ2E9bWlkOicgKyB0cmFuc2NlaXZlci5taWQgKyAnXFxyXFxuJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGSVhNRTogbG9vayBhdCBkaXJlY3Rpb24uXG4gICAgICBpZiAodHJhbnNjZWl2ZXIuc3RyZWFtKSB7XG4gICAgICAgIHZhciBsb2NhbFRyYWNrO1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgIGxvY2FsVHJhY2sgPSB0cmFuc2NlaXZlci5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgbG9jYWxUcmFjayA9IHRyYW5zY2VpdmVyLnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbFRyYWNrKSB7XG4gICAgICAgICAgLy8gYWRkIFJUWFxuICAgICAgICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAxOSAmJiB0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCA9IHtcbiAgICAgICAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgIHZhciBoYXNSdHggPSBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCc7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAoIWhhc1J0eCAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHg7XG4gICAgICB9XG5cbiAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbih0cmFuc2NlaXZlciwgY29tbW9uQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICdhbnN3ZXInLCB0cmFuc2NlaXZlci5zdHJlYW0pO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzICYmXG4gICAgICAgICAgdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUpIHtcbiAgICAgICAgc2RwICs9ICdhPXJ0Y3AtcnNpemVcXHJcXG4nO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGRlc2MgPSBuZXcgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICB0eXBlOiAnYW5zd2VyJyxcbiAgICAgIHNkcDogc2RwXG4gICAgfSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXNjKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gICAgaWYgKCFjYW5kaWRhdGUpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy50cmFuc2NlaXZlcnNbal0uaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZSh7fSk7XG4gICAgICAgIGlmICh0aGlzLnVzaW5nQnVuZGxlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtTGluZUluZGV4ID0gY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXg7XG4gICAgICBpZiAoY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhbnNjZWl2ZXJzW2ldLm1pZCA9PT0gY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB0cmFuc2NlaXZlciA9IHRoaXMudHJhbnNjZWl2ZXJzW21MaW5lSW5kZXhdO1xuICAgICAgaWYgKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgIHZhciBjYW5kID0gT2JqZWN0LmtleXMoY2FuZGlkYXRlLmNhbmRpZGF0ZSkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kaWRhdGUuY2FuZGlkYXRlKSA6IHt9O1xuICAgICAgICAvLyBJZ25vcmUgQ2hyb21lJ3MgaW52YWxpZCBjYW5kaWRhdGVzIHNpbmNlIEVkZ2UgZG9lcyBub3QgbGlrZSB0aGVtLlxuICAgICAgICBpZiAoY2FuZC5wcm90b2NvbCA9PT0gJ3RjcCcgJiYgKGNhbmQucG9ydCA9PT0gMCB8fCBjYW5kLnBvcnQgPT09IDkpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElnbm9yZSBSVENQIGNhbmRpZGF0ZXMsIHdlIGFzc3VtZSBSVENQLU1VWC5cbiAgICAgICAgaWYgKGNhbmQuY29tcG9uZW50ICYmXG4gICAgICAgICAgICAhKGNhbmQuY29tcG9uZW50ID09PSAnMScgfHwgY2FuZC5jb21wb25lbnQgPT09IDEpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5hZGRSZW1vdGVDYW5kaWRhdGUoY2FuZCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSByZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyh0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgIHNlY3Rpb25zW21MaW5lSW5kZXggKyAxXSArPSAoY2FuZC50eXBlID8gY2FuZGlkYXRlLmNhbmRpZGF0ZS50cmltKClcbiAgICAgICAgICAgIDogJ2E9ZW5kLW9mLWNhbmRpZGF0ZXMnKSArICdcXHJcXG4nO1xuICAgICAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uLnNkcCA9IHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzFdLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIFsncnRwU2VuZGVyJywgJ3J0cFJlY2VpdmVyJywgJ2ljZUdhdGhlcmVyJywgJ2ljZVRyYW5zcG9ydCcsXG4gICAgICAgICdkdGxzVHJhbnNwb3J0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICBpZiAodHJhbnNjZWl2ZXJbbWV0aG9kXSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmFuc2NlaXZlclttZXRob2RdLmdldFN0YXRzKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICBhcmd1bWVudHNbMV07XG4gICAgdmFyIGZpeFN0YXRzVHlwZSA9IGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluYm91bmRydHA6ICdpbmJvdW5kLXJ0cCcsXG4gICAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgICAgY2FuZGlkYXRlcGFpcjogJ2NhbmRpZGF0ZS1wYWlyJyxcbiAgICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgICAgfVtzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXAoKTtcbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICByZXMuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHJlc3VsdFtpZF0udHlwZSA9IGZpeFN0YXRzVHlwZShyZXN1bHRbaWRdKTtcbiAgICAgICAgICAgIHJlc3VsdHMuc2V0KGlkLCByZXN1bHRbaWRdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAwLCByZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBSVENQZWVyQ29ubmVjdGlvbjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvcnRjcGVlcmNvbm5lY3Rpb25fc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgZmlyZWZveFNoaW0gPSB7XG4gIHNoaW1PblRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmICEoJ29udHJhY2snIGluXG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29udHJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24oZikge1xuICAgICAgICAgIGlmICh0aGlzLl9vbnRyYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2sgPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgICAgIGV2ZW50LnJlY2VpdmVyID0ge3RyYWNrOiB0cmFja307XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc2hpbVNvdXJjZU9iamVjdDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gRmlyZWZveCBoYXMgc3VwcG9ydGVkIG1velNyY09iamVjdCBzaW5jZSBGRjIyLCB1bnByZWZpeGVkIGluIDQyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgICAgICAvLyBTaGltIHRoZSBzcmNPYmplY3QgcHJvcGVydHksIG9uY2UsIHdoZW4gSFRNTE1lZGlhRWxlbWVudCBpcyBmb3VuZC5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW96U3JjT2JqZWN0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICEod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbikpIHtcbiAgICAgIHJldHVybjsgLy8gcHJvYmFibHkgbWVkaWEucGVlcmNvbm5lY3Rpb24uZW5hYmxlZD1mYWxzZSBpbiBhYm91dDpjb25maWdcbiAgICB9XG4gICAgLy8gVGhlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC5cbiAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCAzOCkge1xuICAgICAgICAgIC8vIC51cmxzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gRkYgPCAzOC5cbiAgICAgICAgICAvLyBjcmVhdGUgUlRDSWNlU2VydmVycyB3aXRoIGEgc2luZ2xlIHVybC5cbiAgICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGNDb25maWcuaWNlU2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgICAgaWYgKHNlcnZlci5oYXNPd25Qcm9wZXJ0eSgndXJscycpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZXJ2ZXIudXJscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgdmFyIG5ld1NlcnZlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzZXJ2ZXIudXJsc1tqXVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIudXJsc1tqXS5pbmRleE9mKCd0dXJuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VydmVyLnVzZXJuYW1lID0gc2VydmVyLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICBuZXdTZXJ2ZXIuY3JlZGVudGlhbCA9IHNlcnZlci5jcmVkZW50aWFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKG5ld1NlcnZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID1cbiAgICAgICAgICB3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgICAgaWYgKHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IHdpbmRvdy5tb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gd2luZG93Lm1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzaGltIGF3YXkgbmVlZCBmb3Igb2Jzb2xldGUgUlRDSWNlQ2FuZGlkYXRlL1JUQ1Nlc3Npb25EZXNjcmlwdGlvbi5cbiAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG5ldyAoKG1ldGhvZCA9PT0gJ2FkZEljZUNhbmRpZGF0ZScpID9cbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlIDpcbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKShhcmd1bWVudHNbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgYWRkSWNlQ2FuZGlkYXRlKG51bGwgb3IgdW5kZWZpbmVkKVxuICAgIHZhciBuYXRpdmVBZGRJY2VDYW5kaWRhdGUgPVxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1sxXSkge1xuICAgICAgICAgIGFyZ3VtZW50c1sxXS5hcHBseShudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlQWRkSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8vIHNoaW0gZ2V0U3RhdHMgd2l0aCBtYXBsaWtlIHN1cHBvcnRcbiAgICB2YXIgbWFrZU1hcFN0YXRzID0gZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgbWFwLnNldChrZXksIHN0YXRzW2tleV0pO1xuICAgICAgICBtYXBba2V5XSA9IHN0YXRzW2tleV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcblxuICAgIHZhciBtb2Rlcm5TdGF0c1R5cGVzID0ge1xuICAgICAgaW5ib3VuZHJ0cDogJ2luYm91bmQtcnRwJyxcbiAgICAgIG91dGJvdW5kcnRwOiAnb3V0Ym91bmQtcnRwJyxcbiAgICAgIGNhbmRpZGF0ZXBhaXI6ICdjYW5kaWRhdGUtcGFpcicsXG4gICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgIH07XG5cbiAgICB2YXIgbmF0aXZlR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbihcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgb25TdWNjLFxuICAgICAgb25FcnJcbiAgICApIHtcbiAgICAgIHJldHVybiBuYXRpdmVHZXRTdGF0cy5hcHBseSh0aGlzLCBbc2VsZWN0b3IgfHwgbnVsbF0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OCkge1xuICAgICAgICAgICAgc3RhdHMgPSBtYWtlTWFwU3RhdHMoc3RhdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUzICYmICFvblN1Y2MpIHtcbiAgICAgICAgICAgIC8vIFNoaW0gb25seSBwcm9taXNlIGdldFN0YXRzIHdpdGggc3BlYy1oeXBoZW5zIGluIHR5cGUgbmFtZXNcbiAgICAgICAgICAgIC8vIExlYXZlIGNhbGxiYWNrIHZlcnNpb24gYWxvbmU7IG1pc2Mgb2xkIHVzZXMgb2YgZm9yRWFjaCBiZWZvcmUgTWFwXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzdGF0cy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXQpIHtcbiAgICAgICAgICAgICAgICBzdGF0LnR5cGUgPSBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIEF2b2lkIFR5cGVFcnJvcjogXCJ0eXBlXCIgaXMgcmVhZC1vbmx5LCBpbiBvbGQgdmVyc2lvbnMuIDM0LTQzaXNoXG4gICAgICAgICAgICAgIHN0YXRzLmZvckVhY2goZnVuY3Rpb24oc3RhdCwgaSkge1xuICAgICAgICAgICAgICAgIHN0YXRzLnNldChpLCBPYmplY3QuYXNzaWduKHt9LCBzdGF0LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBtb2Rlcm5TdGF0c1R5cGVzW3N0YXQudHlwZV0gfHwgc3RhdC50eXBlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0YXRzO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihvblN1Y2MsIG9uRXJyKTtcbiAgICB9O1xuICB9XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbU9uVHJhY2s6IGZpcmVmb3hTaGltLnNoaW1PblRyYWNrLFxuICBzaGltU291cmNlT2JqZWN0OiBmaXJlZm94U2hpbS5zaGltU291cmNlT2JqZWN0LFxuICBzaGltUGVlckNvbm5lY3Rpb246IGZpcmVmb3hTaGltLnNoaW1QZWVyQ29ubmVjdGlvbixcbiAgc2hpbUdldFVzZXJNZWRpYTogcmVxdWlyZSgnLi9nZXR1c2VybWVkaWEnKVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9maXJlZm94X3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdykge1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcbiAgdmFyIE1lZGlhU3RyZWFtVHJhY2sgPSB3aW5kb3cgJiYgd2luZG93Lk1lZGlhU3RyZWFtVHJhY2s7XG5cbiAgdmFyIHNoaW1FcnJvcl8gPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgSW50ZXJuYWxFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBOb3RTdXBwb3J0ZWRFcnJvcjogJ1R5cGVFcnJvcicsXG4gICAgICAgIFBlcm1pc3Npb25EZW5pZWRFcnJvcjogJ05vdEFsbG93ZWRFcnJvcicsXG4gICAgICAgIFNlY3VyaXR5RXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InXG4gICAgICB9W2UubmFtZV0gfHwgZS5uYW1lLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICAnVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZS4nOiAnVGhlIHJlcXVlc3QgaXMgbm90IGFsbG93ZWQgYnkgdGhlICcgK1xuICAgICAgICAndXNlciBhZ2VudCBvciB0aGUgcGxhdGZvcm0gaW4gdGhlIGN1cnJlbnQgY29udGV4dC4nXG4gICAgICB9W2UubWVzc2FnZV0gfHwgZS5tZXNzYWdlLFxuICAgICAgY29uc3RyYWludDogZS5jb25zdHJhaW50LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgKHRoaXMubWVzc2FnZSAmJiAnOiAnKSArIHRoaXMubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIGdldFVzZXJNZWRpYSBjb25zdHJhaW50cyBzaGltLlxuICB2YXIgZ2V0VXNlck1lZGlhXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICB2YXIgY29uc3RyYWludHNUb0ZGMzdfID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLnJlcXVpcmUpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICB2YXIgcmVxdWlyZSA9IFtdO1xuICAgICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3JlcXVpcmUnIHx8IGtleSA9PT0gJ2FkdmFuY2VkJyB8fCBrZXkgPT09ICdtZWRpYVNvdXJjZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBjW2tleV0gPSAodHlwZW9mIGNba2V5XSA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgIGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgICAgaWYgKHIubWluICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHIubWF4ICE9PSB1bmRlZmluZWQgfHwgci5leGFjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVxdWlyZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5leGFjdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHIuIG1pbiA9IHIubWF4ID0gci5leGFjdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY1trZXldID0gci5leGFjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHIuZXhhY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuaWRlYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGMuYWR2YW5jZWQgPSBjLmFkdmFuY2VkIHx8IFtdO1xuICAgICAgICAgIHZhciBvYyA9IHt9O1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG9jW2tleV0gPSB7bWluOiByLmlkZWFsLCBtYXg6IHIuaWRlYWx9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvY1trZXldID0gci5pZGVhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYy5hZHZhbmNlZC5wdXNoKG9jKTtcbiAgICAgICAgICBkZWxldGUgci5pZGVhbDtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHIpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIGNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcXVpcmUubGVuZ3RoKSB7XG4gICAgICAgIGMucmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9O1xuICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgMzgpIHtcbiAgICAgIGxvZ2dpbmcoJ3NwZWM6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvKSB7XG4gICAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHNUb0ZGMzdfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9GRjM3Xyhjb25zdHJhaW50cy52aWRlbyk7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdmZjM3OiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEoY29uc3RyYWludHMsIG9uU3VjY2VzcywgZnVuY3Rpb24oZSkge1xuICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZ2V0VXNlck1lZGlhIGFzIGEgUHJvbWlzZS5cbiAgdmFyIGdldFVzZXJNZWRpYVByb21pc2VfID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBnZXRVc2VyTWVkaWFfKGNvbnN0cmFpbnRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFNoaW0gZm9yIG1lZGlhRGV2aWNlcyBvbiBvbGRlciB2ZXJzaW9ucy5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtnZXRVc2VyTWVkaWE6IGdldFVzZXJNZWRpYVByb21pc2VfLFxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7IH0sXG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpIHsgfVxuICAgIH07XG4gIH1cbiAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID1cbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIgaW5mb3MgPSBbXG4gICAgICAgICAgICB7a2luZDogJ2F1ZGlvaW5wdXQnLCBkZXZpY2VJZDogJ2RlZmF1bHQnLCBsYWJlbDogJycsIGdyb3VwSWQ6ICcnfSxcbiAgICAgICAgICAgIHtraW5kOiAndmlkZW9pbnB1dCcsIGRldmljZUlkOiAnZGVmYXVsdCcsIGxhYmVsOiAnJywgZ3JvdXBJZDogJyd9XG4gICAgICAgICAgXTtcbiAgICAgICAgICByZXNvbHZlKGluZm9zKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDEpIHtcbiAgICAvLyBXb3JrIGFyb3VuZCBodHRwOi8vYnVnemlsLmxhLzExNjk2NjVcbiAgICB2YXIgb3JnRW51bWVyYXRlRGV2aWNlcyA9XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcy5iaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG9yZ0VudW1lcmF0ZURldmljZXMoKS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5uYW1lID09PSAnTm90Rm91bmRFcnJvcicpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0OSkge1xuICAgIHZhciBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS50aGVuKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAvLyBXb3JrIGFyb3VuZCBodHRwczovL2J1Z3ppbC5sYS84MDIzMjZcbiAgICAgICAgaWYgKGMuYXVkaW8gJiYgIXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCB8fFxuICAgICAgICAgICAgYy52aWRlbyAmJiAhc3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgb2JqZWN0IGNhbiBub3QgYmUgZm91bmQgaGVyZS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vdEZvdW5kRXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGlmICghKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPiA1NSAmJlxuICAgICAgJ2F1dG9HYWluQ29udHJvbCcgaW4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpKSkge1xuICAgIHZhciByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgaWYgKGEgaW4gb2JqICYmICEoYiBpbiBvYmopKSB7XG4gICAgICAgIG9ialtiXSA9IG9ialthXTtcbiAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG5hdGl2ZUdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnYXV0b0dhaW5Db250cm9sJywgJ21vekF1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlR2V0VXNlck1lZGlhKGMpO1xuICAgIH07XG5cbiAgICBpZiAoTWVkaWFTdHJlYW1UcmFjayAmJiBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncykge1xuICAgICAgdmFyIG5hdGl2ZUdldFNldHRpbmdzID0gTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuZ2V0U2V0dGluZ3M7XG4gICAgICBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb2JqID0gbmF0aXZlR2V0U2V0dGluZ3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmVtYXAob2JqLCAnbW96QXV0b0dhaW5Db250cm9sJywgJ2F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChvYmosICdtb3pOb2lzZVN1cHByZXNzaW9uJywgJ25vaXNlU3VwcHJlc3Npb24nKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKE1lZGlhU3RyZWFtVHJhY2sgJiYgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cykge1xuICAgICAgdmFyIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMgPSBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5hcHBseUNvbnN0cmFpbnRzO1xuICAgICAgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgaWYgKHRoaXMua2luZCA9PT0gJ2F1ZGlvJyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjKSk7XG4gICAgICAgICAgcmVtYXAoYywgJ2F1dG9HYWluQ29udHJvbCcsICdtb3pBdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgICByZW1hcChjLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMuYXBwbHkodGhpcywgW2NdKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA0NCkge1xuICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYV8oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcik7XG4gICAgfVxuICAgIC8vIFJlcGxhY2UgRmlyZWZveCA0NCsncyBkZXByZWNhdGlvbiB3YXJuaW5nIHdpdGggdW5wcmVmaXhlZCB2ZXJzaW9uLlxuICAgIHV0aWxzLmRlcHJlY2F0ZWQoJ25hdmlnYXRvci5nZXRVc2VyTWVkaWEnLFxuICAgICAgICAnbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEnKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9nZXR1c2VybWVkaWEuanNcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0JztcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBzYWZhcmlTaGltID0ge1xuICAvLyBUT0RPOiBEckFsZXgsIHNob3VsZCBiZSBoZXJlLCBkb3VibGUgY2hlY2sgYWdhaW5zdCBMYXlvdXRUZXN0c1xuXG4gIC8vIFRPRE86IG9uY2UgdGhlIGJhY2stZW5kIGZvciB0aGUgbWFjIHBvcnQgaXMgZG9uZSwgYWRkLlxuICAvLyBUT0RPOiBjaGVjayBmb3Igd2Via2l0R1RLK1xuICAvLyBzaGltUGVlckNvbm5lY3Rpb246IGZ1bmN0aW9uKCkgeyB9LFxuXG4gIHNoaW1Mb2NhbFN0cmVhbXNBUEk6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCAhd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKCdnZXRMb2NhbFN0cmVhbXMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFN0cmVhbXM7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgnZ2V0U3RyZWFtQnlJZCcgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RyZWFtQnlJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBzdHJlYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JlbW90ZVN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICByZXN1bHQgPSBzdHJlYW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdhZGRTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB2YXIgX2FkZFRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgX2FkZFRyYWNrLmNhbGwoc2VsZiwgdHJhY2ssIHN0cmVhbSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMgPSBbc3RyZWFtXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfYWRkVHJhY2suY2FsbCh0aGlzLCB0cmFjaywgc3RyZWFtKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdyZW1vdmVTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2xvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHRyYWNrcyA9IHN0cmVhbS5nZXRUcmFja3MoKTtcbiAgICAgICAgdGhpcy5nZXRTZW5kZXJzKCkuZm9yRWFjaChmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICBpZiAodHJhY2tzLmluZGV4T2Yoc2VuZGVyLnRyYWNrKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlVHJhY2soc2VuZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHNoaW1SZW1vdGVTdHJlYW1zQVBJOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoISgnZ2V0UmVtb3RlU3RyZWFtcycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3RlU3RyZWFtcyA/IHRoaXMuX3JlbW90ZVN0cmVhbXMgOiBbXTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghKCdvbmFkZHN0cmVhbScgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb25hZGRzdHJlYW0nLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uYWRkc3RyZWFtO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAodGhpcy5fb25hZGRzdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb25hZGRzdHJlYW0pO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29uYWRkc3RyZWFtcG9seSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYWRkc3RyZWFtJywgdGhpcy5fb25hZGRzdHJlYW0gPSBmKTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb25hZGRzdHJlYW1wb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IGUuc3RyZWFtc1swXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcmVtb3RlU3RyZWFtcykge1xuICAgICAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcmVtb3RlU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPj0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnYWRkc3RyZWFtJyk7XG4gICAgICAgICAgICBldmVudC5zdHJlYW0gPSBlLnN0cmVhbXNbMF07XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc2hpbUNhbGxiYWNrc0FQSTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHByb3RvdHlwZSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGU7XG4gICAgdmFyIGNyZWF0ZU9mZmVyID0gcHJvdG90eXBlLmNyZWF0ZU9mZmVyO1xuICAgIHZhciBjcmVhdGVBbnN3ZXIgPSBwcm90b3R5cGUuY3JlYXRlQW5zd2VyO1xuICAgIHZhciBzZXRMb2NhbERlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb247XG4gICAgdmFyIHNldFJlbW90ZURlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICAgIHZhciBhZGRJY2VDYW5kaWRhdGUgPSBwcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBvcHRpb25zID0gKGFyZ3VtZW50cy5sZW5ndGggPj0gMikgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZU9mZmVyLmFwcGx5KHRoaXMsIFtvcHRpb25zXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIG9wdGlvbnMgPSAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1swXTtcbiAgICAgIHZhciBwcm9taXNlID0gY3JlYXRlQW5zd2VyLmFwcGx5KHRoaXMsIFtvcHRpb25zXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHZhciB3aXRoQ2FsbGJhY2sgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwcm9taXNlID0gc2V0TG9jYWxEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBbZGVzY3JpcHRpb25dKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIHByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gd2l0aENhbGxiYWNrO1xuXG4gICAgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oZGVzY3JpcHRpb24sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHNldFJlbW90ZURlc2NyaXB0aW9uLmFwcGx5KHRoaXMsIFtkZXNjcmlwdGlvbl0pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gd2l0aENhbGxiYWNrO1xuXG4gICAgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oY2FuZGlkYXRlLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIHByb21pc2UgPSBhZGRJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgW2NhbmRpZGF0ZV0pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gICAgcHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IHdpdGhDYWxsYmFjaztcbiAgfSxcbiAgc2hpbUdldFVzZXJNZWRpYTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKSB7XG4gICAgICBpZiAobmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYS5iaW5kKG5hdmlnYXRvcik7XG4gICAgICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMsIGNiLCBlcnJjYikge1xuICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKVxuICAgICAgICAgIC50aGVuKGNiLCBlcnJjYik7XG4gICAgICAgIH0uYmluZChuYXZpZ2F0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2hpbVJUQ0ljZVNlcnZlclVybHM6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIG1pZ3JhdGUgZnJvbSBub24tc3BlYyBSVENJY2VTZXJ2ZXIudXJsIHRvIFJUQ0ljZVNlcnZlci51cmxzXG4gICAgdmFyIE9yaWdQZWVyQ29ubmVjdGlvbiA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgdmFyIG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG4gICAgICAgICAgaWYgKCFzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybHMnKSAmJlxuICAgICAgICAgICAgICBzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICB1dGlscy5kZXByZWNhdGVkKCdSVENJY2VTZXJ2ZXIudXJsJywgJ1JUQ0ljZVNlcnZlci51cmxzJyk7XG4gICAgICAgICAgICBzZXJ2ZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNlcnZlcikpO1xuICAgICAgICAgICAgc2VydmVyLnVybHMgPSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2goc2VydmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzID0gbmV3SWNlU2VydmVycztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgT3JpZ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICB9O1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBPcmlnUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiwgJ2dlbmVyYXRlQ2VydGlmaWNhdGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gT3JpZ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGltQ2FsbGJhY2tzQVBJOiBzYWZhcmlTaGltLnNoaW1DYWxsYmFja3NBUEksXG4gIHNoaW1Mb2NhbFN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbUxvY2FsU3RyZWFtc0FQSSxcbiAgc2hpbVJlbW90ZVN0cmVhbXNBUEk6IHNhZmFyaVNoaW0uc2hpbVJlbW90ZVN0cmVhbXNBUEksXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHNhZmFyaVNoaW0uc2hpbUdldFVzZXJNZWRpYSxcbiAgc2hpbVJUQ0ljZVNlcnZlclVybHM6IHNhZmFyaVNoaW0uc2hpbVJUQ0ljZVNlcnZlclVybHNcbiAgLy8gVE9ET1xuICAvLyBzaGltUGVlckNvbm5lY3Rpb246IHNhZmFyaVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
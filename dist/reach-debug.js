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
Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var presets={UHD:{w:3840,h:2160,min:'HD'},FHD:{w:1920,h:1080,min:'HD',max:'UHD'},HD:{w:1280,h:720,min:'SD',max:'FHD'},SVGA:{w:800,h:600,min:'VGA',max:'HD'},SD:{w:720,h:576,min:'VGA',max:'HD'},VGA:{w:640,h:480,max:'SVGA'}},_assignDevice=function _assignDevice(constraint,deviceId){if(constraint&&deviceId){return(0,_assign2.default)(/^((user)|(environment))$/i.test(deviceId)?{facingMode:deviceId}:{deviceId:deviceId},constraint===true?{}:constraint);}return constraint;};var Media=function(){function Media(){(0,_classCallCheck3.default)(this,Media);}(0,_createClass3.default)(Media,null,[{key:'constraints',value:function constraints(){var videoConstraints=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'HD',audioConstraints=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true,type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'ideal',videoDeviceId=arguments[3],audioDeviceId=arguments[4],video=videoConstraints;if(typeof videoConstraints==='string'){if(presets[videoConstraints.toUpperCase()]){var preset=presets[videoConstraints.toUpperCase()],dimConstraint=function dimConstraint(dim){if(/^(min|max|exact)$/.test(type)){var r={};r[type]=preset[dim];return r;}return{min:preset.min?presets[preset.min][dim]:preset[dim],ideal:preset[dim],max:preset.max?presets[preset.max][dim]:preset[dim]};};video={width:dimConstraint('w'),height:dimConstraint('h')};}else{throw new Error('Unknown Video Resolution preset (UHD, FHD, HD, SVGA, SD, VGA)');}}video=_assignDevice(video,videoDeviceId);var audio=_assignDevice(audioConstraints,audioDeviceId);Log.d('Media#constraints',{video:video,audio:audio});return{video:video,audio:audio};}},{key:'attachStream',value:function attachStream(mediaStream,container,previous){var volume=arguments.length>3&&arguments[3]!==undefined?arguments[3]:.7,tagName='';if(mediaStream.getVideoTracks().length>0){tagName='video';}else if(mediaStream.getAudioTracks().length>0){tagName='audio';}Log.d('Media#attachStream',mediaStream,tagName);if(tagName.length>0){var _node=previous;if(!_node||_node.tagName.toLowerCase()!==tagName){_node=document.createElement(tagName);_node.autoplay=true;_node.setAttribute('playsinline',true);_node.setAttribute('muted',true);_node.style.borderRadius='1px';}if(container){if(previous&&previous!==_node){container.replaceChild(_node,previous);}else if(!previous){container.appendChild(_node);}}_node.srcObject=mediaStream;_node.volume=volume;return _node;}return previous;}},{key:'devices',value:function devices(){return navigator.mediaDevices.enumerateDevices().then(function(devices){var r={};devices.forEach(function(device){if(!r[device.kind]){r[device.kind]=[];}r[device.kind].push(device);});Log.d('Media#devices',r);return r;}).catch(Log.r('Media#devices'));}},{key:'facingMode',get:function get(){return{USER:'user',ENVIRONMENT:'environment'};}}]);return Media;}();exports.default=Media;

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
Object.defineProperty(exports,"__esModule",{value:true});var _promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Device=__webpack_require__(93),_Device2=_interopRequireDefault(_Device),_constants=__webpack_require__(19),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var initializing=false;var User=function(){function User(snapData){(0,_classCallCheck3.default)(this,User);var values=(0,_assign2.default)({},snapData.val());this.uid=snapData.name();this.name=values.name;this.status=values.status;this.lastSeen=values.lastSeen;this.anonymous=/^anonymous/.test(this.uid);}(0,_createClass3.default)(User,[{key:'invite',value:function invite(message){var _this=this;if(!_cache2.default.user){return _promise2.default.reject(new Error('Only an authenticated user can invite another User.'));}return _Room2.default.create(_cache2.default.user.uid+'-'+this.uid).then(function(room){return room.invite([_this],null,message);}).then(function(data){return{room:data.room,invite:data.invites[0]};}).catch(Log.r('User~invite'));}},{key:'devices',value:function devices(){return DataSync.list('_/devices/'+this.uid,_Device2.default);}}],[{key:'init',value:function init(uid,name){if(!initializing){initializing=true;var d={status:_constants.CONNECTED,lastSeen:DataSync.ts()};if(name){(0,_assign2.default)(d,{name:name});}var deviceId=_webcom2.default.INTERNAL.PersistentStorage.get(uid);return DataSync.update('users/'+uid,d).then(function(){var deviceMetadata={status:_constants.CONNECTED,sdk:{reach:'2.6.2',webcom:_webcom2.default.SDK_VERSION},userAgent:navigator.userAgent};if(deviceId){return DataSync.update('_/devices/'+uid+'/'+deviceId,deviceMetadata);}return DataSync.push('_/devices/'+uid,deviceMetadata);}).then(function(deviceRef){if(!deviceId){deviceId=deviceRef.name();_webcom2.default.INTERNAL.PersistentStorage.set(uid,deviceId);}_cache2.default.device=deviceId;}).then(function(){DataSync.onDisconnect('_/devices/'+uid+'/'+deviceId+'/status').set(_constants.NOT_CONNECTED);DataSync.onDisconnect('users/'+uid).update({status:_constants.NOT_CONNECTED,lastSeen:DataSync.ts()});}).then(function(){return User.get(uid);}).then(function(user){initializing=false;return user;}).catch(function(e){Log.e(e);initializing=false;return _promise2.default.reject(e);});}return User.get(uid);}},{key:'disconnect',value:function disconnect(user){DataSync.onDisconnect('_/devices/'+user.uid+'/'+_cache2.default.device+'/status').cancel();DataSync.onDisconnect('users/'+user.uid).cancel();if(user.anonymous){return DataSync.remove('_/devices/'+user.uid).then(function(){return DataSync.get('_/invites/'+user.uid);}).then(function(invites){var inviteIds=[];invites.forEach(function(invite){inviteIds.push(invite.name());});return _promise2.default.all(inviteIds.map(function(inviteId){return DataSync.remove('_/invites/'+user.uid+'/'+inviteId);}));}).then(function(){return DataSync.remove('users/'+user.uid);}).then(function(){_webcom2.default.INTERNAL.PersistentStorage.remove(user.uid);}).catch(Log.r('User#anonymous_disconnect'));}return DataSync.set('_/devices/'+user.uid+'/'+_cache2.default.device+'/status',_constants.NOT_CONNECTED).then(function(){return DataSync.get('_/devices/'+user.uid);}).then(function(devices){var hasConnectedDevices=devices.forEach(function(device){return new RegExp('^'+_constants.CONNECTED+'$').test(device.val().status);});if(!hasConnectedDevices){return DataSync.update('users/'+user.uid,{status:_constants.NOT_CONNECTED});}return true;}).catch(Log.r('User#disconnect'));}},{key:'get',value:function get(uid){return DataSync.get('users/'+uid).then(function(snapData){return snapData?new User(snapData):null;}).catch(Log.r('User#get'));}}]);return User;}();exports.default=User;

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
Object.defineProperty(exports,"__esModule",{value:true});exports.browser=undefined;var _toConsumableArray2=__webpack_require__(61),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_assign=__webpack_require__(9),_assign2=_interopRequireDefault(_assign),_console,_webrtcAdapter=__webpack_require__(170),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var browser=exports.browser=(0,_assign2.default)({compatible:!/\s/.test(_webrtcAdapter.browserDetails.browser)&&(!_webrtcAdapter.browserDetails.minVersion||_webrtcAdapter.browserDetails.version>=_webrtcAdapter.browserDetails.minVersion)},_webrtcAdapter.browserDetails);var version='Reach v'+'2.6.2'+' | Schema '+'draft-00'+' | Webcom v'+_webcom2.default.SDK_VERSION,message='';if(browser.version===null){message='Unsupported browser: browser must support WebRTC Peer-to-peer connections to use Reach';}else if(browser.minVersion&&browser.minVersion>browser.version){message='Unsupported browser: browser is outdated, update to latest version ('+browser.minVersion+'+)';}else if(!_webrtcAdapter.browserShim){message='No shim for your browser. There might a problem with your package.';}var args=[version+' '+message];if(/^(chrome|firefox)$/.test(browser.browser)){args=['%c '+version+' %c '+message,'background: '+(browser.compatible?'#f50':'red')+'; color: #fff; font-weight: bold','color: '+(browser.compatible?'inherit':'red')];}(_console=console).log.apply(_console,(0,_toConsumableArray3.default)(args));

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var video=exports.video={VP8:/^vp8/i,VP9:/^vp9/i,VP10:/^vp10/i,H264:/^h264/i,H265:/^h265/i};var audio=exports.audio={OPUS:/^opus/i,G722:/^g722/i,G711:/^g711/i,ISAC:/^isac/i,ISAC_16:/^isac\/16000/i,ISAC_32:/^isac\/32000/i,LSAC:/^lsac/i};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(14),_keys2=_interopRequireDefault(_keys),_promise=__webpack_require__(7),_promise2=_interopRequireDefault(_promise),_classCallCheck2=__webpack_require__(0),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(2),_createClass3=_interopRequireDefault(_createClass2),_Browser=__webpack_require__(89),_StreamTypes=__webpack_require__(57),_StreamTypes2=_interopRequireDefault(_StreamTypes),_Events=__webpack_require__(30),Events=_interopRequireWildcard(_Events),_Codec=__webpack_require__(90),_User=__webpack_require__(56),_User2=_interopRequireDefault(_User),_Room=__webpack_require__(28),_Room2=_interopRequireDefault(_Room),_Invite=__webpack_require__(39),_Invite2=_interopRequireDefault(_Invite),_DataSync=__webpack_require__(8),DataSync=_interopRequireWildcard(_DataSync),_cache=__webpack_require__(5),_cache2=_interopRequireDefault(_cache),_Log=__webpack_require__(6),Log=_interopRequireWildcard(_Log),_Media=__webpack_require__(29),_Media2=_interopRequireDefault(_Media),_webcom=__webpack_require__(31),_webcom2=_interopRequireDefault(_webcom);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Reach=function(){function Reach(url){var cfg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;(0,_classCallCheck3.default)(this,Reach);_cache2.default.base=url;_cache2.default.config=cfg;this._callbacks={};}(0,_createClass3.default)(Reach,[{key:'register',value:function register(email,password,name,rememberMe){var _this=this;return _cache2.default.base.createUser(email,password).then(function(auth){if(auth){return _this.login(email,password,name||email,rememberMe);}}).catch(Log.r('Reach~register'));}},{key:'login',value:function login(email,password,name){var rememberMe=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false,p=_promise2.default.resolve();if(this.current&&this.current.email!==email){p=this.logout();}return p.then(function(){return _cache2.default.base.authWithPassword({email:email,password:password,rememberMe:rememberMe});}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~login'));}},{key:'resume',value:function resume(){var _this2=this;return new _promise2.default(function(resolve,reject){if(_webcom2.default.INTERNAL.PersistentStorage.get('session')){_cache2.default.base.resume(function(error,auth){if(auth&&!_this2.current){_User2.default.init(auth.uid).then(function(u){_cache2.default.user=u;resolve(u);},reject);}});}else{reject(new Error('No session to resume'));}});}},{key:'anonymous',value:function anonymous(name){var p=_promise2.default.resolve();if(this.current&&(!this.current.anonymous||this.current.name!==name)){p=this.logout();}return p.then(function(){return _cache2.default.base.authAnonymously();}).then(function(auth){return _User2.default.init(auth.uid,name);}).then(function(u){_cache2.default.user=u;return u;}).catch(Log.r('Reach~anonymous'));}},{key:'logout',value:function logout(){var _this3=this;return new _promise2.default(function(resolve,reject){var p=_promise2.default.resolve();if(_this3.current!=null){p=_User2.default.disconnect(_this3.current);}p.then(function(){(0,_keys2.default)(_this3._callbacks).forEach(function(event){return DataSync.off(Events.reach.toPath(event)(_cache2.default.user),event);});_cache2.default.base.logout(function(){_cache2.default.user=null;resolve();});}).catch(function(e){Log.e(e);reject(e);});});}},{key:'users',value:function users(include){var _this4=this;return DataSync.list('users',_User2.default).then(function(users){return!include&&users&&_this4.current?users.filter(function(user){return user.uid!==_this4.current.uid;}):users;}).catch(Log.r('Reach~users'));}},{key:'rooms',value:function rooms(){return DataSync.list('rooms',_Room2.default).catch(Log.r('Reach~rooms'));}},{key:'invites',value:function invites(){if(!this.current){return _promise2.default.reject(new Error('Cannot list invites without a User being logged in.'));}return DataSync.list('_/invites/'+this.current.uid,_Invite2.default).catch(Log.r('Reach~invites'));}},{key:'on',value:function on(event,callback,cancelCallback){var path=Events.reach.toPath(event)(_cache2.default.user);if(path){var cls=Events.reach.toClass(event),cb=function cb(snapData){var d=cls?new cls(snapData):null;Log.i('Reach~on('+event+')',d);callback(d);};DataSync.on(path,event,cb,cancelCallback);if(!this._callbacks[event]){this._callbacks[event]=[];}this._callbacks[event].push(cb);}}},{key:'createRoom',value:function createRoom(name,extra){var publicRoom=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!this.current){return _promise2.default.reject(new Error('Cannot create a Room without a User being logged in.'));}return _Room2.default.create(name,extra,publicRoom);}},{key:'getRoom',value:function getRoom(uid){return _Room2.default.get(uid);}},{key:'getUser',value:function getUser(uid){return _User2.default.get(uid);}},{key:'base',get:function get(){return _cache2.default.base;}},{key:'config',get:function get(){return _cache2.default.config;}},{key:'current',get:function get(){return _cache2.default.user;}},{key:'peerConnections',get:function get(){return _cache2.default.peerConnections.stacks;}}],[{key:'version',get:function get(){return{sdk:'2.6.2',schema:'draft-00'};}},{key:'types',get:function get(){return _StreamTypes2.default;}},{key:'events',get:function get(){return{room:Events.room,reach:Events.reach,stream:Events.stream,invite:Events.invite};}},{key:'browser',get:function get(){return _Browser.browser;}},{key:'media',get:function get(){return _Media2.default;}},{key:'codecs',get:function get(){return{audio:_Codec.audio,video:_Codec.video};}}]);return Reach;}();exports.default=Reach;module.exports=Reach;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMTgxOTUyNWMwNjljNmIwZTU0YyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXRpbC9jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvRGF0YVN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3V0aWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvUm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZpbml0aW9ucy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9JbnZpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmaW5pdGlvbnMvU3RyZWFtVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNpcGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHJlYW0vUmVtb3RlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluaXRpb25zL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluaXRpb25zL0NvZGVjLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvRGV2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0cmVhbS9Mb2NhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHJlYW0vU3RyZWFtTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS93ZWJydGMvUGVlckNvbm5lY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vYXJyYXkvZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vc2RwL3NkcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9hZGFwdGVyX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZWRnZV9zaGltLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovLy8uL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvcnRjcGVlcmNvbm5lY3Rpb25fc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2ZpcmVmb3hfc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2dldHVzZXJtZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanMiXSwibmFtZXMiOlsiX2NhY2hlIiwiQ2FjaGVNYW5hZ2VyIiwidXJsIiwiX2Jhc2UiLCJjb25maWciLCJfY29uZmlnIiwiYXNzaWduIiwidXNlciIsIl91c2VyIiwiZGV2aWNlIiwiX2RldmljZSIsImxldmVsIiwidGVzdCIsIl9sb2dMZXZlbCIsIkVycm9yIiwiX3N0cmVhbXMiLCJfcGVlckNvbm5lY3Rpb25zIiwiY2FjaGUiLCJsZXZlbHMiLCJpc0VuYWJsZWQiLCJpbmRleE9mIiwidG9VcHBlckNhc2UiLCJsb2dMZXZlbCIsImdDb25zb2xlIiwiZ2xvYmFsIiwibG9nZ2VyIiwibWV0aG9kIiwibWVzc2FnZXMiLCJ0b0xvd2VyQ2FzZSIsImJpbmQiLCJncm91cCIsIm1lc3NhZ2UiLCJpdGVtcyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZhbHVlcyIsImNvbmNhdCIsIkFycmF5IiwiZm9yRWFjaCIsIml0ZW0iLCJncm91cEVuZCIsImQiLCJpIiwidyIsImUiLCJlcnJvciIsInIiLCJyZWFzb24iLCJyZWplY3QiLCJldmVudFR5cGUiLCJldmVudCIsImV2dCIsIl93cml0ZSIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsImJhc2UiLCJjaGlsZCIsInNldCIsInB1c2giLCJwdXNoUmVmIiwidXBkYXRlIiwicmVtb3ZlIiwib25jZSIsImdldCIsImxpc3QiLCJUeXBlIiwicGFyYW1zIiwidGhlbiIsInNuYXBEYXRhIiwic25hcENoaWxkIiwib24iLCJxdWVyeUNhbGxiYWNrIiwiY2FuY2VsQ2FsbGJhY2siLCJvZmYiLCJjYWxsYmFjayIsIm9uRGlzY29ubmVjdCIsInRzIiwiRGF0ZSIsIm5vdyIsIk9QRU5FRCIsIkNMT1NFRCIsIkNMT1NJTkciLCJDT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwiV0FTX0NPTk5FQ1RFRCIsIk9XTkVSIiwiTU9ERVJBVE9SIiwiUEFSVElDSVBBTlQiLCJOT05FIiwiT05HT0lORyIsIkFDQ0VQVEVEIiwiUkVKRUNURUQiLCJDQU5DRUxFRCIsIkRhdGFTeW5jIiwiRXZlbnRzIiwiTG9nIiwiX2pvaW5Sb29tIiwicm9vbSIsInJvbGUiLCJwYXJ0aWNpcGFudCIsInN0YXR1cyIsIl9qb2luZWQiLCJ1aWQiLCJSb29tIiwidmFsIiwibmFtZSIsIm93bmVyIiwiX3B1YmxpYyIsImV4dHJhIiwiX2NhbGxiYWNrcyIsImxvY2FsU3RyZWFtcyIsIm1hcCIsImtleSIsInJvb21JZCIsInN0cmVhbXMiLCJmaWx0ZXIiLCJzdHJlYW0iLCJmcm9tIiwiY2F0Y2giLCJ1c2VycyIsIl9wYXRoIiwiX2RhdGEiLCJhbGwiLCJzZW5kIiwicmVtb3ZlUGFydGljaXBhbnQiLCJpbnZpdGUiLCJ0byIsImludml0ZXMiLCJ0b1BhdGgiLCJvYmoiLCJ0b0NsYXNzIiwidHlwZWRDYWxsYmFjayIsInN0cmVhbURhdGEiLCJyZW1vdGVTdHJlYW0iLCJnZXRSZW1vdGUiLCJ0eXBlIiwibG9jYWxTdHJlYW1Db250YWluZXIiLCJjb25zdHJhaW50cyIsInNoYXJlIiwiY2FuY2VsIiwibG9jYWxTdHJlYW0iLCJjbG9zZSIsInJlbW90ZVN0cmVhbXMiLCJ1blN1YnNjcmliZSIsImxlYXZlIiwiX2Nsb3NlZCIsInB1YmxpY1Jvb20iLCJyb29tTWV0YURhdGEiLCJyb29tRnVsbE1ldGFEYXRhIiwiX2NyZWF0ZWQiLCJyb29tUmVmIiwicHJlc2V0cyIsIlVIRCIsImgiLCJtaW4iLCJGSEQiLCJtYXgiLCJIRCIsIlNWR0EiLCJTRCIsIlZHQSIsIl9hc3NpZ25EZXZpY2UiLCJjb25zdHJhaW50IiwiZGV2aWNlSWQiLCJmYWNpbmdNb2RlIiwiTWVkaWEiLCJ2aWRlb0NvbnN0cmFpbnRzIiwiYXVkaW9Db25zdHJhaW50cyIsInZpZGVvRGV2aWNlSWQiLCJhdWRpb0RldmljZUlkIiwidmlkZW8iLCJwcmVzZXQiLCJkaW1Db25zdHJhaW50IiwiZGltIiwiaWRlYWwiLCJ3aWR0aCIsImhlaWdodCIsImF1ZGlvIiwibWVkaWFTdHJlYW0iLCJjb250YWluZXIiLCJwcmV2aW91cyIsInZvbHVtZSIsInRhZ05hbWUiLCJnZXRWaWRlb1RyYWNrcyIsImdldEF1ZGlvVHJhY2tzIiwiX25vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdXRvcGxheSIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJzcmNPYmplY3QiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwiZGV2aWNlcyIsImtpbmQiLCJVU0VSIiwiRU5WSVJPTk1FTlQiLCJwYXRocyIsImNsYXNzZXMiLCJfRXZlbnRzIiwia2V5cyIsInN1cHBvcnRzIiwicmVwbGFjZSIsInJlYWNoIiwiX2VuZGVkIiwicHJvcCIsIkludml0ZSIsInJlZiIsInBhcmVudCIsInRvcGljIiwiX2xpc3RlbmVyIiwidXBkYXRlZCIsImNiIiwiaWR4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwic29tZSIsImludml0ZWUiLCJpbnZpdGVNZXRhRGF0YSIsImludml0ZUlkIiwiaW52aXRlUmVmIiwiaW5pdGlhbGl6aW5nIiwiVXNlciIsImxhc3RTZWVuIiwiYW5vbnltb3VzIiwiY3JlYXRlIiwiSU5URVJOQUwiLCJQZXJzaXN0ZW50U3RvcmFnZSIsImRldmljZU1ldGFkYXRhIiwic2RrIiwid2ViY29tIiwiU0RLX1ZFUlNJT04iLCJ1c2VyQWdlbnQiLCJkZXZpY2VSZWYiLCJpbnZpdGVJZHMiLCJoYXNDb25uZWN0ZWREZXZpY2VzIiwiUmVnRXhwIiwiQVVESU8iLCJWSURFTyIsIkFVRElPX1ZJREVPIiwiU0NSRUVOX1NIQVJJTkciLCJNZXNzYWdlIiwidGV4dCIsIm5ld1RleHQiLCJQYXJ0aWNpcGFudCIsIlJlbW90ZSIsInJlbW90ZVN0cmVhbUNvbnRhaW5lciIsIm11dGVkIiwicGVlckNvbm5lY3Rpb24iLCJwZWVyQ29ubmVjdGlvbnMiLCJhbnN3ZXIiLCJwYyIsInN1YnNjcmliZWQiLCJTSVpFIiwiTVVURSIsIl9jbG9zZSIsInJlbW90ZSIsIm5vZGUiLCJicm93c2VyIiwiY29tcGF0aWJsZSIsIm1pblZlcnNpb24iLCJ2ZXJzaW9uIiwiYXJncyIsImxvZyIsIlJlYWNoIiwiY2ZnIiwiZW1haWwiLCJwYXNzd29yZCIsInJlbWVtYmVyTWUiLCJjcmVhdGVVc2VyIiwiYXV0aCIsImxvZ2luIiwicCIsImN1cnJlbnQiLCJsb2dvdXQiLCJhdXRoV2l0aFBhc3N3b3JkIiwiaW5pdCIsInUiLCJyZXN1bWUiLCJhdXRoQW5vbnltb3VzbHkiLCJkaXNjb25uZWN0IiwiaW5jbHVkZSIsImNscyIsInN0YWNrcyIsInNjaGVtYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZmxhdHRlblNlcnZlcnMiLCJfZXhwYW5kIiwic2VydmVycyIsInVzZXJuYW1lIiwic2VydmVyIiwiY3JlZGVudGlhbCIsInVybHMiLCJ1cmlzIiwidXJpIiwiQ29uZmlnIiwicHJlZmVycmVkVmlkZW9Db2RlYyIsInByZWZlcnJlZEF1ZGlvQ29kZWMiLCJyZXNldCIsImljZVNlcnZlcnMiLCJfaWNlU2VydmVycyIsIl9jdXJyZW50U2VydmVycyIsIl9uZXdTZXJ2ZXJzIiwibmV3U2VydmVyIiwicmVkdWNlIiwicyIsIkRldmljZSIsIm9zIiwiX2ZhY2luZ01vZGVzIiwiX2dldENvbnN0cmFpbnRWYWx1ZSIsImV4YWN0IiwiX3NldENvbnN0cmFpblZhbHVlIiwib3RoZXIiLCJ2YWx1ZSIsIkxvY2FsIiwiaXNWaWRlb0xvYWRlZCIsIl9pbnB1dHMiLCJnZXRVc2VyTWVkaWEiLCJjb25zdHJhaW50c1ZhbHVlIiwibWVkaWEiLCJ0cmFjayIsInN0YXRlIiwidHJhY2tzIiwiZ2V0VHJhY2tzIiwiZW5hYmxlZCIsIm11dGUiLCJfc3dpdGNoRGV2aWNlIiwibmV4dCIsImN1cnJlbnRNb2RlSWR4IiwibWVkaWFEZXZpY2UiLCJzb3J0IiwibmV4dERldmljZSIsInYiLCJzdG9wIiwicHJvcHMiLCJyZXZlcnNlIiwidXBkYXRlQ29uc3RyYWludHMiLCJkZWZhdWx0Q29uc3RyYWludHMiLCJfY29uc3RyYWludHMiLCJNZWRpYVN0cmVhbSIsImNoZWNrRGV2aWNlcyIsImxhYmVsIiwiZGV2aWNlSWRzIiwiYXR0YWNoU3RyZWFtIiwib25sb2FkZWRkYXRhIiwicmVuZWdvdGlhdGUiLCJfbWVkaWEiLCJyZW1vdmVDaGlsZCIsInN0cmVhbU1ldGFEYXRhIiwic2hhcmVkU3RyZWFtIiwic3RyZWFtUmVmIiwic3RyZWFtU2l6ZSIsInZpZGVvSGVpZ2h0IiwidmlkZW9XaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaGFyZWQiLCJzdWJzY3JpYmVyIiwib2ZmZXIiLCJjbG9zZWRQQyIsIlN0cmVhbU1hbmFnZXIiLCJEdGxzU3J0cEtleUFncmVlbWVudCIsInNkcENvbnN0cmFpbnRzIiwiT2ZmZXJUb1JlY2VpdmVBdWRpbyIsInJlY2VpdmUiLCJPZmZlclRvUmVjZWl2ZVZpZGVvIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09OTkVDVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEIiwiSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkciLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9DTE9TRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQiLCJJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUiIsIl90b0pTT04iLCJvIiwidG9KU09OIiwiUGVlckNvbm5lY3Rpb24iLCJzdGFja0lkIiwic3RyZWFtSWQiLCJyZW1vdGVEZXZpY2UiLCJwdWJsaXNoIiwiX2xvY2FsUGF0aCIsIl9yZW1vdGVQYXRoIiwibmVnb3RpYXRlZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib3B0aW9uYWwiLCJtYW5kYXRvcnkiLCJvbmljZWNhbmRpZGF0ZSIsImNhbmRpZGF0ZSIsIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlIiwiaWNlQ29ubmVjdGlvblN0YXRlIiwiX2F0dGFjaFN0cmVhbSIsIl9yZW1vdGVJQ0VDYW5kaWRhdGVzIiwiaXNDb25uZWN0ZWQiLCJvbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlIiwiaWNlR2F0aGVyaW5nU3RhdGUiLCJfc3RhdHVzIiwibGlzdGVuIiwic25hcCIsImFkZEljZUNhbmRpZGF0ZSIsIlJUQ0ljZUNhbmRpZGF0ZSIsImh0bWxFbGVtZW50IiwicHJvdG90eXBlIiwib250cmFjayIsIm9uYWRkc3RyZWFtIiwic2RwT2ZmZXIiLCJzZXRSZW1vdGVEZXNjcmlwdGlvbiIsInJlbW90ZURlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiX3NldFByZWZlcnJlZENvZGVjcyIsImRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJzZW5kVGltZW91dCIsIm9ubmVnb3RpYXRpb25uZWVkZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3NlbmRPZmZlciIsInNkcEFuc3dlciIsIl9hbHRlclN0cmVhbSIsImNyZWF0ZU9mZmVyIiwib2xkU3RyZWFtIiwibmV3U3RyZWFtIiwiUlRDUnRwU2VuZGVyIiwiZ2V0U2VuZGVycyIsIm5ld1RyYWNrcyIsInNlbmRlciIsInJlcGxhY2VUcmFjayIsInNpZ25hbGluZ1N0YXRlIiwib25zaWduYWxpbmdzdGF0ZWNoYW5nZSIsInNkcExpbmVzIiwic2RwIiwic3BsaXQiLCJtZWRpYXMiLCJzZHBMaW5lIiwiZXhlYyIsImZtdCIsImluZGV4IiwiY29kZWNzIiwiYyIsImlkIiwicHJlZmVyIiwibWVkaWFMaXN0IiwicHJlZmVyZWRDb2RlYyIsInNlbGVjdGVkIiwiZmluZCIsImNvZGVjIiwiaWRzIiwiam9pbiIsIl9yZW1vdGVTdHJlYW0iLCJnZXRTdGFja0lkIiwiaWQxIiwiaWQyIiwibG9jYWxlQ29tcGFyZSIsIlBlZXJDb25uZWN0aW9uTWFuYWdlciIsImdldFBlZXJDb25uZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDem9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLHNCQUFzQjs7Ozs7Ozs7O0FDWnZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdGtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsWUFBWTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSx5REFBeUQsb0JBQW9CO0FBQzdFLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHlDQUF5QztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQWdDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUwsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWNoLWRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwid2ViY29tL3dlYmNvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ3ZWJjb20vd2ViY29tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWNoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwid2ViY29tL3dlYmNvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY2hcIl0gPSBmYWN0b3J5KHJvb3RbXCJXZWJjb21cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQxODE5NTI1YzA2OWM2YjBlNTRjIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vQ29uZmlnJztcbmltcG9ydCBTdHJlYW1NYW5hZ2VyIGZyb20gJy4uL3N0cmVhbS9TdHJlYW1NYW5hZ2VyJztcbmltcG9ydCBQZWVyQ29ubmVjdGlvbk1hbmFnZXIgZnJvbSAnLi4vd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlcic7XG5pbXBvcnQgV2ViY29tIGZyb20gJ3dlYmNvbS93ZWJjb20nO1xuXG4vKipcbiAqIHNpbmdsZXRvblxuICogQHR5cGUge0NhY2hlTWFuYWdlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmxldCBfY2FjaGUgPSBudWxsO1xuXG4vKipcbiAqIFNpbmdsZXRvbiB0byBoYW5kbGUgZ2xvYmFsIHJlZmVyZW5jZXNcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmNsYXNzIENhY2hlTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Qgc2luZ2xldG9uXG5cdCAqIEByZXR1cm4ge0NhY2hlTWFuYWdlcn1cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmKCFfY2FjaGUpIHtcblx0XHRcdF9jYWNoZSA9IHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiBfY2FjaGU7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBiYXNlIHJlZmVyZW5jZVxuXHQgKiBAcGFyYW0ge1dlYmNvbX0gdXJsIHRoZSByZWZlcmVuY2Ugb3IgaXRzIHVybFxuXHQgKi9cblx0c2V0IGJhc2UodXJsKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2Jhc2UgPSB1cmwgaW5zdGFuY2VvZiBXZWJjb20gPyB1cmwgOiBuZXcgV2ViY29tKHVybCk7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBiYXNlIHJlZmVyZW5jZVxuXHQgKiBAdHlwZSB7V2ViY29tfVxuXHQgKi9cblx0Z2V0IGJhc2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Jhc2U7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqIEBwYXJhbSB7Q29uZmlnfSBjb25maWcgdGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqL1xuXHRzZXQgY29uZmlnKGNvbmZpZykge1xuXHRcdGlmKCF0aGlzLl9jb25maWcpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9jb25maWcgPSBuZXcgQ29uZmlnKGNvbmZpZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2NvbmZpZy5hc3NpZ24oY29uZmlnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAdHlwZSB7Q29uZmlnfVxuXHQgKi9cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRpZighdGhpcy5fY29uZmlnKSB7XG5cdFx0XHR0aGlzLl9jb25maWcgPSBuZXcgQ29uZmlnKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjb25uZWN0ZWQgdXNlclxuXHQgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgdGhlIGNvbm5lY3RlZCB1c2VyXG5cdCAqL1xuXHRzZXQgdXNlcih1c2VyKSB7XG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3VzZXIgPSB1c2VyO1xuXHR9XG5cdC8qKlxuXHQgKiBUaGUgY29ubmVjdGVkIHVzZXJcblx0ICogQHR5cGUge1VzZXJ9XG5cdCAqL1xuXHRnZXQgdXNlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXNlcjtcblx0fVxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgZGV2aWNlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2UgdGhlIGN1cnJlbnQgZGV2aWNlXG5cdCAqL1xuXHRzZXQgZGV2aWNlKGRldmljZSkge1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9kZXZpY2UgPSBkZXZpY2U7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IGRldmljZVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0IGRldmljZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGV2aWNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsb2cgbGV2ZWwgKERFQlVHLCBJTkZPLCBXQVJOLCBFUlJPUilcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHNldCBsb2dMZXZlbChsZXZlbCkge1xuXHRcdGlmKC9eREVCVUd8SU5GT3xXQVJOfEVSUk9SJC9pLnRlc3QobGV2ZWwpKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEBpZ25vcmVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5fbG9nTGV2ZWwgPSBsZXZlbDtcblx0XHR9IGVsc2UgaWYobGV2ZWwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpJyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBUaGUgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgbG9nTGV2ZWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2xvZ0xldmVsIHx8ICdFUlJPUic7XG5cdH1cblxuXHQvKipcblx0ICogU3RyZWFtcyBtYW5hZ2VyXG5cdCAqIEByZXR1cm5zIHtTdHJlYW1NYW5hZ2VyfVxuXHQgKi9cblx0Z2V0IHN0cmVhbXMoKSB7XG5cdFx0aWYoIXRoaXMuX3N0cmVhbXMpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLl9zdHJlYW1zID0gbmV3IFN0cmVhbU1hbmFnZXIoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3N0cmVhbXM7XG5cdH1cblxuXHQvKipcblx0ICogUGVlckNvbm5lY3Rpb25zIG1hbmFnZXJcblx0ICogQHJldHVybnMge1BlZXJDb25uZWN0aW9uTWFuYWdlcn1cblx0ICovXG5cdGdldCBwZWVyQ29ubmVjdGlvbnMoKSB7XG5cdFx0aWYoIXRoaXMuX3BlZXJDb25uZWN0aW9ucykge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAaWdub3JlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuX3BlZXJDb25uZWN0aW9ucyA9IG5ldyBQZWVyQ29ubmVjdGlvbk1hbmFnZXIoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BlZXJDb25uZWN0aW9ucztcblx0fVxufVxuXG4vKipcbiAqIFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAqIEBpZ25vcmVcbiAqIEB0eXBlIHtDYWNoZU1hbmFnZXJ9XG4gKi9cbmNvbnN0IGNhY2hlID0gbmV3IENhY2hlTWFuYWdlcigpO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBmb3Igc2hhcmVkIHJlZmVyZW5jZXNcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbC9jYWNoZS5qcyIsImltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcblxuLyoqXG4gKiBMaXN0IG9mIHBvc3NpYmxlIGxvZyBsZXZlbHNcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBsZXZlbHMgPSBbJ0RFQlVHJywgJ0lORk8nLCAnV0FSTicsICdFUlJPUiddO1xuLyoqXG4gKiBJcyBsb2cgZW5hYmxlZCBmb3IgYSBzcGVjaWZpYyBsZXZlbFxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgVGhlIGxldmVsIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBpc0VuYWJsZWQgPSBsZXZlbCA9PiB7XG5cdHJldHVybiBsZXZlbHMuaW5kZXhPZihsZXZlbC50b1VwcGVyQ2FzZSgpKSA+PSBsZXZlbHMuaW5kZXhPZihjYWNoZS5sb2dMZXZlbC50b1VwcGVyQ2FzZSgpKTtcbn07XG4vKipcbiAqIEdsb2JhbCBDb25zb2xlLiAodG8gYXZvaWQgZHJvcF9jb25zb2xlLi4uKVxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAdHlwZSB7Q29uc29sZX1cbiAqL1xuY29uc3QgZ0NvbnNvbGUgPSBnbG9iYWxbJ2NvbnNvbGUnXTtcbi8qKlxuICogU2hvcnRoYW5kIGZvciBjb25zb2xlIGNhbGxcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBBIG1ldGhvZCBvZiB0aGUgY29uc29sZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBUaGUgbG9nIGxldmVsXG4gKiBAcGFyYW0geyp9IG1lc3NhZ2VzIHRoZSBsb2cgY29udGVudFxuICovXG5jb25zdCBsb2dnZXIgPSAobWV0aG9kLCBsZXZlbCwgLi4ubWVzc2FnZXMpID0+IHtcblx0aXNFbmFibGVkKGxldmVsKSA/IGdDb25zb2xlW21ldGhvZC50b0xvd2VyQ2FzZSgpXS5iaW5kKGdDb25zb2xlKSguLi5tZXNzYWdlcykgOiAoKSA9PiB7fTtcbn07XG4vKipcbiAqIFVzZSBhIGdyb3VwIHRvIGxvZ1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgVGhlIGxvZyBsZXZlbFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGdyb3VwIHRpdGxlXG4gKiBAcGFyYW0geyp9IGl0ZW1zIHRoZSBsb2cgY29udGVudFxuICovXG5jb25zdCBncm91cCA9IChsZXZlbCwgbWVzc2FnZSwgLi4uaXRlbXMpID0+IHtcblx0aWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRsb2dnZXIuYmluZCh1bmRlZmluZWQsIGdDb25zb2xlLmdyb3VwID8gJ2dyb3VwJyA6IGxldmVsLCBsZXZlbCkodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnID8gbWVzc2FnZSA6ICcnKTtcblx0XHRsZXQgdmFsdWVzID0gKHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJyA/IFttZXNzYWdlXSA6IFtdKS5jb25jYXQoaXRlbXMpO1xuXHRcdGlmIChpdGVtcy5sZW5ndGggPT09IDEgJiYgaXRlbXNbMF0gaW5zdGFuY2VvZiBBcnJheSAmJiB0eXBlb2YgaXRlbXNbMF0ubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhbHVlcyA9IGl0ZW1zWzBdO1xuXHRcdH1cblx0XHR2YWx1ZXMuZm9yRWFjaChpdGVtID0+IGxvZ2dlci5iaW5kKHVuZGVmaW5lZCwgbGV2ZWwsIGxldmVsKShpdGVtKSk7XG5cdFx0Z0NvbnNvbGUuZ3JvdXBFbmQgJiYgZ0NvbnNvbGUuZ3JvdXBFbmQoKTtcblx0fSBlbHNlIHtcblx0XHRsb2dnZXIuYmluZCh1bmRlZmluZWQsIGxldmVsLCBsZXZlbCwgbWVzc2FnZSk7XG5cdH1cbn07XG5cbi8qKlxuICogTG9nIGRlYnVnIG1lc3NhZ2VzIGlmIGxvZyBsZXZlbCBpcyBzZXQgdG8gREVCVUcuXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9BUEkvQ29uc29sZS9sb2dcbiAqL1xuZXhwb3J0IGNvbnN0IGQgPSBncm91cC5iaW5kKHVuZGVmaW5lZCwgbGV2ZWxzWzBdKTtcbi8qKlxuICogTG9nIGluZm9ybWF0aW9uIG1lc3NhZ2VzIGlmIGxvZyBsZXZlbCBpcyBzZXQgdG8gREVCVUcgb3IgSU5GTy5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL2luZm9cbiAqL1xuZXhwb3J0IGNvbnN0IGkgPSBncm91cC5iaW5kKHVuZGVmaW5lZCwgbGV2ZWxzWzFdKTtcbi8qKlxuICogTG9nIHdhcm5pbmcgbWVzc2FnZXMgaWYgbG9nIGxldmVsIGlzIHNldCB0byBERUJVRywgSU5GTyBvciBXQVJOLlxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQVBJL0NvbnNvbGUvd2FyblxuICovXG5leHBvcnQgY29uc3QgdyA9IGdyb3VwLmJpbmQodW5kZWZpbmVkLCBsZXZlbHNbMl0pO1xuLyoqXG4gKiBMb2cgZXJyb3IgbWVzc2FnZXMuIEVycm9ycyBhcmUgYWx3YXlzIGxvZ2dlZC5cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9Db25zb2xlL2Vycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBlID0gZ0NvbnNvbGUuZXJyb3IuYmluZChnQ29uc29sZSk7XG4vKipcbiAqIFByb21pc2UgcmVqZWN0aW9uIGxvZ2dlciB0byB1c2Ugd2l0aCBjYXRjaFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCByID0gbWVzc2FnZSA9PiByZWFzb24gPT4ge1xuXHRkKG1lc3NhZ2UsIHJlYXNvbik7XG5cdHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24gfHwgbWVzc2FnZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvdXRpbC9Mb2cuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZSc7XG5cbi8qKlxuICogR2V0IHRoZSBldmVudCBzdHJpbmcgZm9yIFdlYmNvbSBmcm9tIFJlYWNoIGV2ZW50c1xuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBBIFJlYWNoIGV2ZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBldmVudFR5cGUgPSAoZXZlbnQpID0+IHtcblx0bGV0IGV2dDtcblx0aWYoKC9fQURERUQkL2kpLnRlc3QoZXZlbnQpIHx8IC9fUFVCTElTSEVEJC8udGVzdChldmVudCkpIHtcblx0XHRldnQgPSAnYWRkZWQnO1xuXHR9IGVsc2UgaWYoL19DSEFOR0VEJC8udGVzdChldmVudCkgfHwgL19SRUZSRVNIRUQkLy50ZXN0KGV2ZW50KSkge1xuXHRcdGV2dCA9ICdjaGFuZ2VkJztcblx0fSBlbHNlIGlmKC9fUkVNT1ZFRCQvLnRlc3QoZXZlbnQpIHx8IC9fVU5QVUJMSVNIRUQkLy50ZXN0KGV2ZW50KSkge1xuXHRcdGV2dCA9ICdyZW1vdmVkJztcblx0fVxuXHRyZXR1cm4gZXZ0ID8gYGNoaWxkXyR7ZXZ0fWAgOiBldmVudDtcbn07XG5cbi8qKlxuICogV3JpdGUgbWV0aG9kXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFdyaXRlIG1ldGhvZCAoc2V0LHVwZGF0ZSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHNldFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gc2V0XG4gKiBAaWdub3JlXG4gKi9cbmNvbnN0IF93cml0ZSA9IChtZXRob2QsIHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKVttZXRob2RdKGRhdGEsIGVycm9yID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUoKSk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3NldH0gYXMgYSB7QGxpbmsgUHJvbWlzZX1cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBzZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHNldFxuICogQHJldHVybiB7UHJvbWlzZTwqLCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBzZXQgPSBfd3JpdGUuYmluZCh1bmRlZmluZWQsICdzZXQnKTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI3B1c2h9IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gcHVzaFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHVzaFxuICogQHJldHVybiB7UHJvbWlzZTxXZWJjb20sIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHB1c2ggPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRjb25zdCBwdXNoUmVmID0gY2FjaGUuYmFzZS5jaGlsZChwYXRoKS5wdXNoKGRhdGEsIGVycm9yID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUocHVzaFJlZikpO1xufSk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSN1cGRhdGV9IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdXBkYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSB0byB1cGRhdGVcbiAqIEByZXR1cm4ge1Byb21pc2U8KiwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlID0gX3dyaXRlLmJpbmQodW5kZWZpbmVkLCAndXBkYXRlJyk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNyZW1vdmV9IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtQcm9taXNlPCosIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChwYXRoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aCkucmVtb3ZlKGVycm9yID0+IGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUoKSk7XG59KTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uY2V9IHNob3J0Y3V0IGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPFdlYmNvbS9hcGkuRGF0YVNuYXBzaG90LCBFcnJvcj59XG4gKi9cbmV4cG9ydCBjb25zdCBvbmNlID0gKHBhdGgsIGV2ZW50KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub25jZShldmVudFR5cGUoZXZlbnQpLCByZXNvbHZlLCByZWplY3QpO1xufSk7XG5cbi8qKlxuICoge0BsaW5rIFdlYmNvbSNvbmNlfSgndmFsdWUnKSBhcyBhIHtAbGluayBQcm9taXNlfVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGdldFxuICogQHJldHVybiB7UHJvbWlzZTxXZWJjb20vYXBpLkRhdGFTbmFwc2hvdCwgRXJyb3I+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0ID0gcGF0aCA9PiBvbmNlKHBhdGgsICd2YWx1ZScpO1xuXG4vKipcbiAqIExpc3QgdmFsdWVzIGFzIGEge0BsaW5rIFByb21pc2V9XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gZ2V0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBUeXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QgdG8gbGlzdFxuICogQHBhcmFtIHBhcmFtcyBBZGRpdGlvbmFsIGNvbnN0cnVjdG9yIHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0W10sIEVycm9yPn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxpc3QgPSAocGF0aCwgVHlwZSwgLi4ucGFyYW1zKSA9PiB7XG5cdHJldHVybiBnZXQocGF0aCkudGhlbihzbmFwRGF0YSA9PiB7XG5cdFx0aWYoc25hcERhdGEpIHtcblx0XHRcdGNvbnN0IHZhbHVlcyA9IFtdO1xuXHRcdFx0c25hcERhdGEuZm9yRWFjaChzbmFwQ2hpbGQgPT4ge1xuXHRcdFx0XHR2YWx1ZXMucHVzaChuZXcgVHlwZShzbmFwQ2hpbGQsIC4uLnBhcmFtcykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIHtAbGluayBXZWJjb20jb259IHNob3J0Y3V0XG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnRcbiAqIEBwYXJhbSB7V2ViY29tL2FwaS5RdWVyeX5xdWVyeUNhbGxiYWNrfGZ1bmN0aW9ufSBxdWVyeUNhbGxiYWNrIFRoZSBjYWxsYmFja1xuICogQHBhcmFtIHtXZWJjb20vYXBpLlF1ZXJ5fmNhbmNlbENhbGxiYWNrfGZ1bmN0aW9ufSBbY2FuY2VsQ2FsbGJhY2tdIFRoZSBjYWxsYmFja1xuICovXG5leHBvcnQgY29uc3Qgb24gPSAocGF0aCwgZXZlbnQsIHF1ZXJ5Q2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSA9PiB7XG5cdGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub24oZXZlbnRUeXBlKGV2ZW50KSwgcXVlcnlDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29mZn0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBUaGUgY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGNvbnN0IG9mZiA9IChwYXRoLCBldmVudCwgY2FsbGJhY2spID0+IHtcblx0Y2FjaGUuYmFzZS5jaGlsZChwYXRoKS5vZmYoZXZlbnRUeXBlKGV2ZW50KSwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiB7QGxpbmsgV2ViY29tI29uRGlzY29ubmVjdH0gc2hvcnRjdXRcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aFxuICogQHJldHVybiB7V2ViY29tL2FwaS5PbkRpc2Nvbm5lY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBvbkRpc2Nvbm5lY3QgPSBwYXRoID0+IGNhY2hlLmJhc2UuY2hpbGQocGF0aCkub25EaXNjb25uZWN0KCk7XG5cbi8qKlxuICogVGltZXN0YW1wIHZhbHVlXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge2Z1bmN0aW9ufVxuICovXG4vLyBleHBvcnQgY29uc3QgdHMgPSAoKSA9PiBXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QO1xuZXhwb3J0IGNvbnN0IHRzID0gKCkgPT4gRGF0ZS5ub3coKTtcbi8vIEhBQ0sgI0RhdGFTeW5jOiBSb2xsYmFjayB3aGVuIFRJTUVTVEFNUCB3b3JrcyBhZ2FpbiAoc2VydmVyLXNpZGUgYnVnIHdpdGggc2VjdXJpdHkgcnVsZXMpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL0RhdGFTeW5jLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBsb2dEaXNhYmxlZF8gPSB0cnVlO1xudmFyIGRlcHJlY2F0aW9uV2FybmluZ3NfID0gdHJ1ZTtcblxuLy8gVXRpbGl0eSBtZXRob2RzLlxudmFyIHV0aWxzID0ge1xuICBkaXNhYmxlTG9nOiBmdW5jdGlvbihib29sKSB7XG4gICAgaWYgKHR5cGVvZiBib29sICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FyZ3VtZW50IHR5cGU6ICcgKyB0eXBlb2YgYm9vbCArXG4gICAgICAgICAgJy4gUGxlYXNlIHVzZSBhIGJvb2xlYW4uJyk7XG4gICAgfVxuICAgIGxvZ0Rpc2FibGVkXyA9IGJvb2w7XG4gICAgcmV0dXJuIChib29sKSA/ICdhZGFwdGVyLmpzIGxvZ2dpbmcgZGlzYWJsZWQnIDpcbiAgICAgICAgJ2FkYXB0ZXIuanMgbG9nZ2luZyBlbmFibGVkJztcbiAgfSxcblxuICAvKipcbiAgICogRGlzYWJsZSBvciBlbmFibGUgZGVwcmVjYXRpb24gd2FybmluZ3NcbiAgICogQHBhcmFtIHshYm9vbGVhbn0gYm9vbCBzZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHdhcm5pbmdzLlxuICAgKi9cbiAgZGlzYWJsZVdhcm5pbmdzOiBmdW5jdGlvbihib29sKSB7XG4gICAgaWYgKHR5cGVvZiBib29sICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FyZ3VtZW50IHR5cGU6ICcgKyB0eXBlb2YgYm9vbCArXG4gICAgICAgICAgJy4gUGxlYXNlIHVzZSBhIGJvb2xlYW4uJyk7XG4gICAgfVxuICAgIGRlcHJlY2F0aW9uV2FybmluZ3NfID0gIWJvb2w7XG4gICAgcmV0dXJuICdhZGFwdGVyLmpzIGRlcHJlY2F0aW9uIHdhcm5pbmdzICcgKyAoYm9vbCA/ICdkaXNhYmxlZCcgOiAnZW5hYmxlZCcpO1xuICB9LFxuXG4gIGxvZzogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAobG9nRGlzYWJsZWRfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgc3VnZ2VzdGluZyB0aGUgbW9kZXJuIGFuZCBzcGVjLWNvbXBhdGlibGUgQVBJLlxuICAgKi9cbiAgZGVwcmVjYXRlZDogZnVuY3Rpb24ob2xkTWV0aG9kLCBuZXdNZXRob2QpIHtcbiAgICBpZiAoIWRlcHJlY2F0aW9uV2FybmluZ3NfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihvbGRNZXRob2QgKyAnIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgJyArIG5ld01ldGhvZCArXG4gICAgICAgICcgaW5zdGVhZC4nKTtcbiAgfSxcblxuICAvKipcbiAgICogRXh0cmFjdCBicm93c2VyIHZlcnNpb24gb3V0IG9mIHRoZSBwcm92aWRlZCB1c2VyIGFnZW50IHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHshc3RyaW5nfSB1YXN0cmluZyB1c2VyQWdlbnQgc3RyaW5nLlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IGV4cHIgUmVndWxhciBleHByZXNzaW9uIHVzZWQgYXMgbWF0Y2ggY3JpdGVyaWEuXG4gICAqIEBwYXJhbSB7IW51bWJlcn0gcG9zIHBvc2l0aW9uIGluIHRoZSB2ZXJzaW9uIHN0cmluZyB0byBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7IW51bWJlcn0gYnJvd3NlciB2ZXJzaW9uLlxuICAgKi9cbiAgZXh0cmFjdFZlcnNpb246IGZ1bmN0aW9uKHVhc3RyaW5nLCBleHByLCBwb3MpIHtcbiAgICB2YXIgbWF0Y2ggPSB1YXN0cmluZy5tYXRjaChleHByKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID49IHBvcyAmJiBwYXJzZUludChtYXRjaFtwb3NdLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJyb3dzZXIgZGV0ZWN0b3IuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gcmVzdWx0IGNvbnRhaW5pbmcgYnJvd3NlciBhbmQgdmVyc2lvblxuICAgKiAgICAgcHJvcGVydGllcy5cbiAgICovXG4gIGRldGVjdEJyb3dzZXI6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICAgIC8vIFJldHVybmVkIHJlc3VsdCBvYmplY3QuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC5icm93c2VyID0gbnVsbDtcbiAgICByZXN1bHQudmVyc2lvbiA9IG51bGw7XG5cbiAgICAvLyBGYWlsIGVhcmx5IGlmIGl0J3Mgbm90IGEgYnJvd3NlclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93Lm5hdmlnYXRvcikge1xuICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnTm90IGEgYnJvd3Nlci4nO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBGaXJlZm94LlxuICAgIGlmIChuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdmaXJlZm94JztcbiAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9GaXJlZm94XFwvKFxcZCspXFwuLywgMSk7XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKSB7XG4gICAgICAvLyBDaHJvbWUsIENocm9taXVtLCBXZWJ2aWV3LCBPcGVyYSwgYWxsIHVzZSB0aGUgY2hyb21lIHNoaW0gZm9yIG5vd1xuICAgICAgaWYgKHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdjaHJvbWUnO1xuICAgICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAvQ2hyb20oZXxpdW0pXFwvKFxcZCspXFwuLywgMik7XG4gICAgICB9IGVsc2UgeyAvLyBTYWZhcmkgKGluIGFuIHVucHVibGlzaGVkIHZlcnNpb24pIG9yIHVua25vd24gd2Via2l0LWJhc2VkLlxuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVmVyc2lvblxcLyhcXGQrKS4oXFxkKykvKSkge1xuICAgICAgICAgIHJlc3VsdC5icm93c2VyID0gJ3NhZmFyaSc7XG4gICAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB0aGlzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgICAvQXBwbGVXZWJLaXRcXC8oXFxkKylcXC4vLCAxKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gdW5rbm93biB3ZWJraXQtYmFzZWQgYnJvd3Nlci5cbiAgICAgICAgICByZXN1bHQuYnJvd3NlciA9ICdVbnN1cHBvcnRlZCB3ZWJraXQtYmFzZWQgYnJvd3NlciAnICtcbiAgICAgICAgICAgICAgJ3dpdGggR1VNIHN1cHBvcnQgYnV0IG5vIFdlYlJUQyBzdXBwb3J0Lic7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJlxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLihcXGQrKSQvKSkgeyAvLyBFZGdlLlxuICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnZWRnZSc7XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHRoaXMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAvRWRnZVxcLyhcXGQrKS4oXFxkKykkLywgMik7XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLykpIHtcbiAgICAgICAgLy8gU2FmYXJpLCB3aXRoIHdlYmtpdEdldFVzZXJNZWRpYSByZW1vdmVkLlxuICAgICAgcmVzdWx0LmJyb3dzZXIgPSAnc2FmYXJpJztcbiAgICAgIHJlc3VsdC52ZXJzaW9uID0gdGhpcy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgIC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8sIDEpO1xuICAgIH0gZWxzZSB7IC8vIERlZmF1bHQgZmFsbHRocm91Z2g6IG5vdCBzdXBwb3J0ZWQuXG4gICAgICByZXN1bHQuYnJvd3NlciA9ICdOb3QgYSBzdXBwb3J0ZWQgYnJvd3Nlci4nO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8vIHNoaW1DcmVhdGVPYmplY3RVUkwgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIHNoaW1Tb3VyY2VPYmplY3QgdG8gYXZvaWQgbG9vcC5cblxuICBzaGltQ3JlYXRlT2JqZWN0VVJMOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgVVJMID0gd2luZG93ICYmIHdpbmRvdy5VUkw7XG5cbiAgICBpZiAoISh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudCAmJlxuICAgICAgICAgICdzcmNPYmplY3QnIGluIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgIC8vIE9ubHkgc2hpbSBDcmVhdGVPYmplY3RVUkwgdXNpbmcgc3JjT2JqZWN0IGlmIHNyY09iamVjdCBleGlzdHMuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBuYXRpdmVDcmVhdGVPYmplY3RVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMLmJpbmQoVVJMKTtcbiAgICB2YXIgbmF0aXZlUmV2b2tlT2JqZWN0VVJMID0gVVJMLnJldm9rZU9iamVjdFVSTC5iaW5kKFVSTCk7XG4gICAgdmFyIHN0cmVhbXMgPSBuZXcgTWFwKCksIG5ld0lkID0gMDtcblxuICAgIFVSTC5jcmVhdGVPYmplY3RVUkwgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIGlmICgnZ2V0VHJhY2tzJyBpbiBzdHJlYW0pIHtcbiAgICAgICAgdmFyIHVybCA9ICdwb2x5YmxvYjonICsgKCsrbmV3SWQpO1xuICAgICAgICBzdHJlYW1zLnNldCh1cmwsIHN0cmVhbSk7XG4gICAgICAgIHV0aWxzLmRlcHJlY2F0ZWQoJ1VSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKScsXG4gICAgICAgICAgICAnZWxlbS5zcmNPYmplY3QgPSBzdHJlYW0nKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVDcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICB9O1xuICAgIFVSTC5yZXZva2VPYmplY3RVUkwgPSBmdW5jdGlvbih1cmwpIHtcbiAgICAgIG5hdGl2ZVJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgc3RyZWFtcy5kZWxldGUodXJsKTtcbiAgICB9O1xuXG4gICAgdmFyIGRzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlLCAnc3JjJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRzYy5nZXQuYXBwbHkodGhpcyk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdGhpcy5zcmNPYmplY3QgPSBzdHJlYW1zLmdldCh1cmwpIHx8IG51bGw7XG4gICAgICAgIHJldHVybiBkc2Muc2V0LmFwcGx5KHRoaXMsIFt1cmxdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBuYXRpdmVTZXRBdHRyaWJ1dGUgPSB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlO1xuICAgIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmXG4gICAgICAgICAgKCcnICsgYXJndW1lbnRzWzBdKS50b0xvd2VyQ2FzZSgpID09PSAnc3JjJykge1xuICAgICAgICB0aGlzLnNyY09iamVjdCA9IHN0cmVhbXMuZ2V0KGFyZ3VtZW50c1sxXSkgfHwgbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVTZXRBdHRyaWJ1dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59O1xuXG4vLyBFeHBvcnQuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9nOiB1dGlscy5sb2csXG4gIGRlcHJlY2F0ZWQ6IHV0aWxzLmRlcHJlY2F0ZWQsXG4gIGRpc2FibGVMb2c6IHV0aWxzLmRpc2FibGVMb2csXG4gIGRpc2FibGVXYXJuaW5nczogdXRpbHMuZGlzYWJsZVdhcm5pbmdzLFxuICBleHRyYWN0VmVyc2lvbjogdXRpbHMuZXh0cmFjdFZlcnNpb24sXG4gIHNoaW1DcmVhdGVPYmplY3RVUkw6IHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwsXG4gIGRldGVjdEJyb3dzZXI6IHV0aWxzLmRldGVjdEJyb3dzZXIuYmluZCh1dGlscylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIE9QRU5FRFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBPUEVORUQgPSAnT1BFTkVEJztcbi8qKlxuICogQ0xPU0VEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENMT1NFRCA9ICdDTE9TRUQnO1xuLyoqXG4gKiBDTE9TSU5HXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IENMT1NJTkcgPSAnQ0xPU0lORyc7XG4vKipcbiAqIENPTk5FQ1RFRFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBDT05ORUNURUQgPSAnQ09OTkVDVEVEJztcbi8qKlxuICogTk9UX0NPTk5FQ1RFRFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBOT1RfQ09OTkVDVEVEID0gJ05PVF9DT05ORUNURUQnO1xuLyoqXG4gKiBXQVNfQ09OTkVDVEVEXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFdBU19DT05ORUNURUQgPSAnV0FTX0NPTk5FQ1RFRCc7XG4vKipcbiAqIE9XTkVSXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE9XTkVSID0gJ09XTkVSJztcbi8qKlxuICogTU9ERVJBVE9SXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE1PREVSQVRPUiA9ICdNT0RFUkFUT1InO1xuLyoqXG4gKiBQQVJUSUNJUEFOVFxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBQQVJUSUNJUEFOVCA9ICdQQVJUSUNJUEFOVCc7XG4vKipcbiAqIE5PTkVcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgTk9ORSA9ICdOT05FJztcbi8qKlxuICogT25nb2luZyBpbnZpdGF0aW9uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IE9OR09JTkcgPSAnT05HT0lORyc7XG4vKipcbiAqIEFjY2VwdGVkIGludml0YXRpb25cbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuLyoqXG4gKiBSZWplY3RlZCBpbnZpdGF0aW9uXG4gKiBAYWNjZXNzIHByb3RlY3RlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFJFSkVDVEVEID0gJ1JFSkVDVEVEJztcbi8qKlxuICogQ2FuY2VsZWQgaW52aXRhdGlvblxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBDQU5DRUxFRCA9ICdDQU5DRUxFRCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL2NvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge05PTkUsIE9QRU5FRCwgQ0xPU0VELCBDT05ORUNURUQsIE5PVF9DT05ORUNURUQsIFdBU19DT05ORUNURUQsIE9XTkVSfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuL1BhcnRpY2lwYW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgTG9jYWwgZnJvbSAnLi9zdHJlYW0vTG9jYWwnO1xuaW1wb3J0IEludml0ZSBmcm9tICcuL0ludml0ZSc7XG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi4vZGVmaW5pdGlvbnMvRXZlbnRzJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCB7UkVKRUNURUQsIENBTkNFTEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcblxuY29uc3QgX2pvaW5Sb29tID0gKHJvb20sIHJvbGUpID0+IHtcblx0Y29uc3QgcGFydGljaXBhbnQgPSB7XG5cdFx0c3RhdHVzOiBDT05ORUNURUQsXG5cdFx0X2pvaW5lZDogRGF0YVN5bmMudHMoKVxuXHR9O1xuXHRpZihyb2xlKSB7XG5cdFx0cGFydGljaXBhbnQucm9sZSA9IHJvbGU7XG5cdH1cblx0TG9nLncoJ1Jvb20jam9pbicsIFtwYXJ0aWNpcGFudCwgYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9YF0pO1xuXHRyZXR1cm4gRGF0YVN5bmNcblx0XHQudXBkYXRlKGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50cy8ke2NhY2hlLnVzZXIudWlkfWAsIHBhcnRpY2lwYW50KVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdERhdGFTeW5jXG5cdFx0XHRcdC5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHtyb29tLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9L3N0YXR1c2ApXG5cdFx0XHRcdC5zZXQoV0FTX0NPTk5FQ1RFRCk7XG5cdFx0XHRyZXR1cm4gcm9vbTtcblx0XHR9KTtcbn07XG5cbi8qKlxuICogUm9vbSBpbmZvcm1hdGlvblxuICogQGFjY2VzcyBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSByb29tXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8T2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRsZXQgdmFsdWVzID0gc25hcERhdGE7XG5cdFx0aWYoc25hcERhdGEgJiYgc25hcERhdGEudmFsICYmIHR5cGVvZiBzbmFwRGF0YS52YWwgPT09ICdmdW5jdGlvbicpe1xuXHRcdFx0dmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCksIHt1aWQ6IHNuYXBEYXRhLm5hbWUoKX0pO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gdmFsdWVzLnVpZDtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSBuYW1lXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLm5hbWUgPSB2YWx1ZXMubmFtZTtcblx0XHQvKipcblx0XHQgKiBUaGUgcm9vbSBvd25lciB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMub3duZXIgPSB2YWx1ZXMub3duZXI7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHJvb20gc3RhdHVzOlxuXHRcdCAqIC0gT1BFTkVEXG5cdFx0ICogLSBDTE9TRURcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblxuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyB0aGF0IHRoZSByb29tIGlzIHB1YmxpYyBzbyBhbGwgdXNlcnMgY2FuIGpvaW5cblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9wdWJsaWMgPSAhIXZhbHVlcy5fcHVibGljO1xuXG5cdFx0LyoqXG5cdFx0ICogQWRkaXRpb25hbCByb29tIGluZm9ybWF0aW9uc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5leHRyYSA9IHZhbHVlcy5leHRyYTtcblxuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgZGVjbGFyZWQgY2FsbGJhY2tzXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgcGFydGljaXBhbnRzLlxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybnMge1Byb21pc2U8UGFydGljaXBhbnRbXSwgRXJyb3I+fVxuXHQgKi9cblx0cGFydGljaXBhbnRzKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50c2AsIFBhcnRpY2lwYW50LCB0aGlzLnVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaXN0IG9mIG1lc3NhZ2VzLlxuXHQgKiBUaGlzIHdpbGwgb25seSB3b3JrIGlmIHRoZSB1c2VyIGlzIGVpdGhlciBhIHBhcnRpY2lwYW50IG9yIHRoZSBvd25lciBvZiB0aGUgcm9vbS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlW10sIEVycm9yPn1cblx0ICovXG5cdG1lc3NhZ2VzKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL3Jvb21zLyR7dGhpcy51aWR9L21lc3NhZ2VzYCwgTWVzc2FnZSwgdGhpcy51aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBzdHJlYW1zXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICovXG5cdF9zdHJlYW1zKGxvY2FsU3RyZWFtcykge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gbGlzdCBhIFJvb21cXCdzIHN0cmVhbXMuJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0YVN5bmMuZ2V0KGBfL3Jvb21zLyR7dGhpcy51aWR9L3N0cmVhbXNgKVxuXHRcdFx0LnRoZW4oc25hcERhdGEgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZXMgPSBzbmFwRGF0YS52YWwoKTtcblx0XHRcdFx0TG9nLmQoJ1Jvb21zfl9zdHJlYW1zJywgdmFsdWVzKTtcblx0XHRcdFx0aWYodmFsdWVzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlcykubWFwKGtleSA9PiBPYmplY3QuYXNzaWduKHt1aWQ6IGtleSwgcm9vbUlkOiB0aGlzLnVpZH0sIHZhbHVlc1trZXldKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHN0cmVhbXMgPT4gc3RyZWFtcy5maWx0ZXIoc3RyZWFtID0+IHtcblx0XHRcdFx0cmV0dXJuIGxvY2FsU3RyZWFtcyA9PT0gKHN0cmVhbS5kZXZpY2UgPT09IGNhY2hlLmRldmljZSAmJiBzdHJlYW0uZnJvbSA9PT0gY2FjaGUudXNlci51aWQpO1xuXHRcdFx0fSkpXG5cdFx0XHQudGhlbihzdHJlYW1zID0+IHN0cmVhbXMubWFwKGNhY2hlLnN0cmVhbXNbYGdldCR7bG9jYWxTdHJlYW1zID8gJ1NoYXJlZCcgOiAnUmVtb3RlJ31gXS5iaW5kKGNhY2hlLnN0cmVhbXMpKSlcblx0XHRcdC50aGVuKHN0cmVhbXMgPT4gc3RyZWFtcy5maWx0ZXIoc3RyZWFtID0+IHN0cmVhbSAhPT0gbnVsbCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBsb2NhbGx5IHB1Ymxpc2hlZCBzdHJlYW1zLiBUaGUgc3RyZWFtcyBwdWJsaXNoZWQgd2l0aCBhbm90aGVyIGRldmljZSB3b24ndCBiZSB2aXNpYmxlIGhlcmVcblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TG9jYWxbXSwgRXJyb3I+fVxuXHQgKi9cblx0bG9jYWxTdHJlYW1zKCkge1xuXHRcdHJldHVybiB0aGlzLl9zdHJlYW1zKHRydWUpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+bG9jYWxTdHJlYW1zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiByZW1vdGVseSBwdWJsaXNoZWQgc3RyZWFtcy5cblx0ICogVGhpcyB3aWxsIG9ubHkgd29yayBpZiB0aGUgdXNlciBpcyBlaXRoZXIgYSBwYXJ0aWNpcGFudCBvciB0aGUgb3duZXIgb2YgdGhlIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8UmVtb3RlW10sIEVycm9yPn1cblx0ICovXG5cdHJlbW90ZVN0cmVhbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0cmVhbXMoZmFsc2UpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1Jvb21+cmVtb3RlU3RyZWFtcycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnZpdGUgdXNlcnMgdG8gdGhlIHJvb20uIHRoaXMgd2lsbCBvbmx5IHdvcmsgaWYgdGhlIGN1cnJlbnQgVXNlciBpcyB0aGUgb3duZXIgb3IgYSBtb2RlcmF0b3Igb2YgdGhpcyBSb29tLlxuXHQgKiBUaGlzIHdpbGwgY3JlYXRlIHRoZSBpbnZpdGF0aW9uIGFuZCBhZGQgdGhlIHVzZXIgdG8gdGhlIHBhcnRpY2lwYW50cyBsaXN0LlxuXHQgKiBAcGFyYW0ge1VzZXJbXX0gdXNlcnMgdGhlIHVzZXJzIHRvIGludml0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3JvbGU9J05PTkUnXSB0aGUgcm9sZSBvZiB0aGUgaW52aXRlZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIGEgbWVzc2FnZSB0byBhZGQgdG8gdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHtyb29tOiBSb29tLCBpbnZpdGVzOiBJbnZpdGVbXX0sIEVycm9yPn1cblx0ICovXG5cdGludml0ZSh1c2Vycywgcm9sZSA9IE5PTkUsIG1lc3NhZ2UpIHtcblx0XHRjb25zdFxuXHRcdFx0X3BhdGggPSB1c2VyID0+IGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50cy8ke3VzZXIudWlkfWAsXG5cdFx0XHRfZGF0YSA9IHtcblx0XHRcdFx0c3RhdHVzOiBOT1RfQ09OTkVDVEVELFxuXHRcdFx0XHRyb2xlOiByb2xlIHx8IE5PTkVcblx0XHRcdH07XG5cdFx0Ly8gQWRkIHVzZXJzIGFzIHBhcnRpY2lwYW50IHNvIHRoZXkgY2FuIGpvaW4gdGhlIHJvb21cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwodXNlcnMubWFwKHVzZXIgPT4gRGF0YVN5bmMuc2V0KF9wYXRoKHVzZXIpLCBfZGF0YSkpKVxuXHRcdFx0Ly8gU2VuZCBpbnZpdGVzXG5cdFx0XHQudGhlbigoKSA9PiBQcm9taXNlLmFsbCh1c2Vycy5tYXAodXNlciA9PiBJbnZpdGUuc2VuZCh1c2VyLCB0aGlzLCBtZXNzYWdlKSkpKVxuXHRcdFx0LnRoZW4oaW52aXRlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlbW92ZVBhcnRpY2lwYW50ID0gaW52aXRlID0+IERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke2ludml0ZS5yb29tfS9wYXJ0aWNpcGFudHMvJHtpbnZpdGUudG99YCk7XG5cdFx0XHRcdGludml0ZXMuZm9yRWFjaChpbnZpdGUgPT4ge1xuXHRcdFx0XHRcdGludml0ZS5vbihSRUpFQ1RFRCwgcmVtb3ZlUGFydGljaXBhbnQpO1xuXHRcdFx0XHRcdGludml0ZS5vbihDQU5DRUxFRCwgcmVtb3ZlUGFydGljaXBhbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHtyb29tOiB0aGlzLCBpbnZpdGVzfTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdExvZy5lKCdSb29tfmludml0ZScsIGUpO1xuXHRcdFx0XHR1c2Vycy5mb3JFYWNoKHVzZXIgPT4gRGF0YVN5bmMucmVtb3ZlKGBfL3Jvb21zLyR7dGhpcy51aWR9L3BhcnRpY2lwYW50cy8ke3VzZXIudWlkfWApKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvUm9vbX0pOlxuXHQgKiAtIFBBUlRJQ0lQQU5UX0FEREVEOiBhIHBhcnRpY2lwYW50IGlzIGFkZGVkIHRvIHRoZSByb29tXG5cdCAqIC0gUEFSVElDSVBBTlRfQ0hBTkdFRDogYSBwYXJ0aWNpcGFudCBjaGFuZ2VzIGhpcyBzdGF0dXMgKGpvaW4pXG5cdCAqIC0gUEFSVElDSVBBTlRfUkVNT1ZFRDogYSBwYXJ0aWNpcGFudCBsZWF2ZSB0aGUgcm9vbVxuXHQgKiAtIE1FU1NBR0VfQURERUQ6IG5ldyBpbnN0YW50IG1lc3NhZ2Vcblx0ICogLSBNRVNTQUdFX0NIQU5HRUQ6IGFuIGV4aXN0aW5nIG1lc3NhZ2UgaGFzIGJlZW4gbW9kaWZpZWQgKG1vZGVyYXRpb24pXG5cdCAqIC0gTUVTU0FHRV9SRU1PVkVEOiBhIG1lc3NhZ2UgaGFzIGJlZW4gcmVtb3ZlZCAobW9kZXJhdGlvbilcblx0ICogLSBTVFJFQU1fUFVCTElTSEVEOiBhIHBhcnRpY2lwYW50IHB1Ymxpc2hlZCBhIG5ldyBTdHJlYW1cblx0ICogLSBTVFJFQU1fQ0hBTkdFRDogYSBwYXJ0aWNpcGFudCBjaGFuZ2VzIGhpcyBwdWJsaXNoZWQgU3RyZWFtIChtb2RlcmF0aW9uLCB0eXBlLCBtdXRlLi4uKVxuXHQgKiAtIFNUUkVBTV9VTlBVQkxJU0hFRDogYSBwYXJ0aWNpcGFudCBzdG9wcyB0aGUgcHVibGljYXRpb24gb2YgaGlzIFN0cmVhbVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGhlIGFyZ3VtZW50cyBkZXBlbmRzIG9uIHRoZSB0eXBlIG9mIGV2ZW50OlxuXHQgKiAtIFBBUlRJQ0lQQU5UXyogOiBjYWxsYmFjayh7QGxpbmsgUGFydGljaXBhbnR9IHAgWywgRXJyb3IgZV0pXG5cdCAqIC0gTUVTU0FHRV8qIDogY2FsbGJhY2soe0BsaW5rIE1lc3NhZ2V9IG0gWywgRXJyb3IgZV0pXG5cdCAqIC0gU1RSRUFNXyogOiBjYWxsYmFjayh7QGxpbmsgUmVtb3RlfSBzIFssIEVycm9yIGVdKVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuUXVlcnl+Y2FuY2VsQ2FsbGJhY2t9IGNhbmNlbENhbGxiYWNrIFRoZSBlcnJvciBjYWxsYmFjayBmb3IgdGhlIGV2ZW50LCB0YWtlcyBhbiBFcnJvciBhcyBvbmx5IGFyZ3VtZW50XG5cdCAqL1xuXHRvbihldmVudCwgY2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKSB7XG5cdFx0Y29uc3Rcblx0XHRcdHBhdGggPSBFdmVudHMucm9vbS50b1BhdGgoZXZlbnQpKHRoaXMpLFxuXHRcdFx0b2JqID0gRXZlbnRzLnJvb20udG9DbGFzcyhldmVudCk7XG5cdFx0aWYocGF0aCAmJiBvYmopIHtcblx0XHRcdGNvbnN0IHR5cGVkQ2FsbGJhY2sgPSBzbmFwRGF0YSA9PiB7XG5cdFx0XHRcdGlmKCEvXlNUUkVBTV8vaS50ZXN0KGV2ZW50KSB8fCAhc25hcERhdGEpIHtcblx0XHRcdFx0XHRMb2cuaShgUm9vbX5vbigke2V2ZW50fSlgLCBzbmFwRGF0YSA/IG5ldyBvYmooc25hcERhdGEpIDogbnVsbCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soc25hcERhdGEgPyBuZXcgb2JqKHNuYXBEYXRhKSA6IG51bGwpO1xuXHRcdFx0XHR9IGVsc2UgaWYoY2FjaGUudXNlcikge1xuXHRcdFx0XHRcdGNvbnN0IHN0cmVhbURhdGEgPSBPYmplY3QuYXNzaWduKHt1aWQ6IHNuYXBEYXRhLm5hbWUoKSwgcm9vbUlkOiB0aGlzLnVpZH0sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHRcdFx0XHRpZihzdHJlYW1EYXRhLmZyb20gIT09IGNhY2hlLnVzZXIudWlkIHx8IHN0cmVhbURhdGEuZGV2aWNlICE9PSBjYWNoZS5kZXZpY2UpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlbW90ZVN0cmVhbSA9IGNhY2hlLnN0cmVhbXMuZ2V0UmVtb3RlKHN0cmVhbURhdGEpO1xuXHRcdFx0XHRcdFx0TG9nLmkoYFJvb21+b24oJHtldmVudH0pYCwgcmVtb3RlU3RyZWFtKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKHJlbW90ZVN0cmVhbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0RGF0YVN5bmMub24ocGF0aCwgZXZlbnQsIHR5cGVkQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrKTtcblx0XHRcdGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaCh0eXBlZENhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2VuZCBhbiBpbnN0YW50IG1lc3NhZ2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc2VuZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2U+fVxuXHQgKi9cblx0c2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuXHRcdHJldHVybiBNZXNzYWdlLnNlbmQodGhpcywgbWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogUHVibGlzaCBhIGxvY2FsIHN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgc3RyZWFtIHR5cGUsIHNlZSB7QGxpbmsgU3RyZWFtVHlwZXN9IGZvciBwb3NzaWJsZSB2YWx1ZXNcblx0ICogQHBhcmFtIHtFbGVtZW50fSBbbG9jYWxTdHJlYW1Db250YWluZXJdIFRoZSBlbGVtZW50IHRoZSBzdHJlYW0gaXMgYXR0YWNoZWQgdG8uIENhbiBiZSBudWxsIGlmIGFscmVhZHkgc3BlY2lmaWVkIGluIHtAbGluayBDb25maWd9LlxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtQ29uc3RyYWludHN9IFtjb25zdHJhaW50c10gVGhlIHN0cmVhbSBjb25zdHJhaW50cy4gSWYgbm90IGRlZmluZWQsIHRoZSBjb25zdHJhaW50cyBkZWZpbmVkIGluIHtAbGluayBDb25maWd9IHdpbGwgYmUgdXNlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHNoYXJlKHR5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50cykge1xuXHRcdExvZy5pKCdSb29tfnNoYXJlJywge3R5cGUsIGxvY2FsU3RyZWFtQ29udGFpbmVyLCBjb25zdHJhaW50c30pO1xuXHRcdHJldHVybiBMb2NhbC5zaGFyZSh0aGlzLnVpZCwgdHlwZSwgbG9jYWxTdHJlYW1Db250YWluZXIsIGNvbnN0cmFpbnRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBKb2luIHRoZSByb29tLiBTZXRzIHRoZSBjb25uZWN0ZWQgc3RhdHVzIG9mIHRoZSBjdXJyZW50IHBhcnRpY2lwYW50IHRvIENPTk5FQ1RFRC5cblx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0ICovXG5cdGpvaW4oKSB7XG5cdFx0TG9nLmkoJ1Jvb21+am9pbicsIHRoaXMpO1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gam9pbiBhIFJvb20uJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2pvaW5Sb29tKHRoaXMpLmNhdGNoKExvZy5yKCdSb29tfmpvaW4nKSk7XG5cdH1cblxuXHQvKipcblx0ICogTGVhdmUgdGhlIHJvb20uIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0dXMgb2YgdGhlIGN1cnJlbnQgcGFydGljaXBhbnQgdG8gV0FTX0NPTk5FQ1RFRCwgZGVsZXRlcyBtZWRpYXMgYW5kIGNhbGxiYWNrcywgY2xvc2VzIFdlYlJUQyBzdGFja3MgaW4gdXNlLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0bGVhdmUoKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBsZWF2ZSBhIFJvb20uJykpO1xuXHRcdH1cblx0XHRMb2cuaSgnUm9vbX5sZWF2ZScsIHRoaXMpO1xuXHRcdC8vIENhbmNlbCBvbkRpc2Nvbm5lY3Rcblx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnVpZH0vcGFydGljaXBhbnRzLyR7Y2FjaGUudXNlci51aWR9L3N0YXR1c2ApLmNhbmNlbCgpO1xuXG5cdFx0Ly8gRGlzY29ubmVjdCB1c2VyJ3MgY2FsbGJhY2tzXG5cdFx0T2JqZWN0LmtleXModGhpcy5fY2FsbGJhY2tzKS5mb3JFYWNoKGV2ZW50ID0+IHtcblx0XHRcdERhdGFTeW5jLm9mZihFdmVudHMucm9vbS50b1BhdGgoZXZlbnQpKHRoaXMpLCBldmVudCk7XG5cdFx0fSk7XG5cdFx0Ly8gVW5wdWJsaXNoIGFsbCBsb2NhbCBzdHJlYW1zXG5cdFx0dGhpcy5sb2NhbFN0cmVhbXMoKS50aGVuKGxvY2FsU3RyZWFtcyA9PiBsb2NhbFN0cmVhbXMuZm9yRWFjaChsb2NhbFN0cmVhbSA9PiBsb2NhbFN0cmVhbS5jbG9zZSgpKSk7XG5cdFx0Ly8gVW5zdWJzY3JpYmUgYWxsIHJlbW90ZSBzdHJlYW1zXG5cdFx0dGhpcy5yZW1vdGVTdHJlYW1zKCkudGhlbihyZW1vdGVTdHJlYW1zID0+IHJlbW90ZVN0cmVhbXMuZm9yRWFjaChyZW1vdGVTdHJlYW0gPT4gcmVtb3RlU3RyZWFtLnVuU3Vic2NyaWJlKCkpKTtcblx0XHQvLyBVcGRhdGUgc3RhdHVzXG5cdFx0cmV0dXJuIERhdGFTeW5jLnNldChgXy9yb29tcy8ke3RoaXMudWlkfS9wYXJ0aWNpcGFudHMvJHtjYWNoZS51c2VyLnVpZH0vc3RhdHVzYCwgV0FTX0NPTk5FQ1RFRClcblx0XHRcdC5jYXRjaChMb2cucignUm9vbX5sZWF2ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMZWF2ZXMgJiBjbG9zZSB0aGUgUm9vbS4gT25seSB0aGUgb3duZXIvbW9kZXJhdG9yIGNhbiBjbG9zZSBhIHJvb20uXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRMb2cuaSgnUm9vbX5jbG9zZScsIHRoaXMpO1xuXHRcdHJldHVybiB0aGlzLmxlYXZlKClcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgcm9vbXMvJHt0aGlzLnVpZH1gLCB7XG5cdFx0XHRcdHN0YXR1czogQ0xPU0VELFxuXHRcdFx0XHRfY2xvc2VkOiBEYXRhU3luYy50cygpXG5cdFx0XHR9KSlcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMudWlkfWApKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tfmNsb3NlJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHJvb21cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lXSBUaGUgcm9vbSBuYW1lXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmE9bnVsbF0gRXh0cmEgaW5mb3JtYXRpb25zXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3B1YmxpY1Jvb209ZmFsc2VdIEluZGljYXRlcyBwdWJsaWMgcm9vbVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxSb29tLCBFcnJvcj59XG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlIChuYW1lLCBleHRyYSA9IG51bGwsIHB1YmxpY1Jvb20gPSBmYWxzZSkge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gY3JlYXRlIGEgUm9vbS4nKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Rcblx0XHRcdHJvb21NZXRhRGF0YSA9IHtcblx0XHRcdFx0b3duZXI6IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0XHRfcHVibGljOiBwdWJsaWNSb29tLFxuXHRcdFx0XHRuYW1lOiBuYW1lIHx8IGAke2NhY2hlLnVzZXIubmFtZX0tJHtEYXRlLm5vdygpfWBcblx0XHRcdH0sXG5cdFx0XHRyb29tRnVsbE1ldGFEYXRhID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRcdHN0YXR1czogT1BFTkVELFxuXHRcdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKSxcblx0XHRcdFx0ZXh0cmFcblx0XHRcdH0sIHJvb21NZXRhRGF0YSk7XG5cblx0XHRsZXQgcm9vbSA9IG51bGw7XG5cdFx0Ly8gQ3JlYXRlIHB1YmxpYyByb29tIGluZm9zXG5cdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goJ3Jvb21zJywgcm9vbUZ1bGxNZXRhRGF0YSlcblx0XHRcdC8vIENyZWF0ZSBwcml2YXRlIHJvb20gaW5mb3Ncblx0XHRcdC50aGVuKHJvb21SZWYgPT4ge1xuXHRcdFx0XHRyb29tID0gbmV3IFJvb20oT2JqZWN0LmFzc2lnbih7dWlkOiByb29tUmVmLm5hbWUoKX0sIHJvb21GdWxsTWV0YURhdGEpKTtcblx0XHRcdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy9yb29tcy8ke3Jvb20udWlkfS9tZXRhYCwgcm9vbU1ldGFEYXRhKTtcblx0XHRcdH0pXG5cdFx0XHQvLyBKb2luIHRoZSByb29tXG5cdFx0XHQudGhlbigoKSA9PiBfam9pblJvb20ocm9vbSwgT1dORVIpKVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSb29tI2NyZWF0ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSB7QGxpbmsgUm9vbX0gZnJvbSBpdHMgYHVpZGBcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHVpZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZS48Um9vbT59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0ICh1aWQpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMuZ2V0KGByb29tcy8ke3VpZH1gKVxuXHRcdFx0LnRoZW4oc25hcERhdGEgPT4ge1xuXHRcdFx0XHRpZihzbmFwRGF0YS52YWwoKSkge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgUm9vbShzbmFwRGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Sb29tLmpzIiwiLyplc2xpbnQgbWF4LXBhcmFtczogWzIsIDVdLCBtYXgtbGVuOiBbMCwgMTIwXSAqL1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vTG9nJztcblxuLyoqXG4gKiBWaWRlbyByZXNvbHV0aW9uIHByZXNldHNcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHR5cGUge3tVSEQ6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWluOiBzdHJpbmd9LCBGSEQ6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWluOiBzdHJpbmcsIG1heDogc3RyaW5nfSwgSEQ6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWluOiBzdHJpbmcsIG1heDogc3RyaW5nfSwgU1ZHQToge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBTRDoge3c6IG51bWJlciwgaDogbnVtYmVyLCBtaW46IHN0cmluZywgbWF4OiBzdHJpbmd9LCBWR0E6IHt3OiBudW1iZXIsIGg6IG51bWJlciwgbWF4OiBzdHJpbmd9fX1cbiAqL1xuY29uc3QgcHJlc2V0cyA9IHtcblx0VUhEOiB7dzogMzg0MCwgaDogMjE2MCwgbWluOiAnSEQnfSxcblx0RkhEOiB7dzogMTkyMCwgaDogMTA4MCwgbWluOiAnSEQnLCBtYXg6ICdVSEQnfSxcblx0SEQ6IHt3OiAxMjgwLCBoOiA3MjAsIG1pbjogJ1NEJywgbWF4OiAnRkhEJ30sXG5cdFNWR0E6IHt3OiA4MDAsIGg6IDYwMCwgbWluOiAnVkdBJywgbWF4OiAnSEQnfSxcblx0U0Q6IHt3OiA3MjAsIGg6IDU3NiwgbWluOiAnVkdBJywgbWF4OiAnSEQnfSxcblx0VkdBOiB7dzogNjQwLCBoOiA0ODAsIG1heDogJ1NWR0EnfVxufTtcblxuLyoqXG4gKiBBc3NpZ24gZGV2aWNlSWQgdG8gY29uc3RyYWludFxuICogQHBhcmFtIGNvbnN0cmFpbnRcbiAqIEBwYXJhbSBkZXZpY2VJZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IF9hc3NpZ25EZXZpY2UgPSAoY29uc3RyYWludCwgZGV2aWNlSWQpID0+IHtcblx0aWYoY29uc3RyYWludCAmJiBkZXZpY2VJZCkge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdFx0L14oKHVzZXIpfChlbnZpcm9ubWVudCkpJC9pLnRlc3QoZGV2aWNlSWQpID8ge2ZhY2luZ01vZGU6IGRldmljZUlkfSA6IHtkZXZpY2VJZH0sXG5cdFx0XHRjb25zdHJhaW50ID09PSB0cnVlID8ge30gOiBjb25zdHJhaW50KTtcblx0fVxuXHRyZXR1cm4gY29uc3RyYWludDtcbn07XG5cbi8qKlxuICogSGVscGVycyBmb3IgTWVkaWFEZXZpY2VzIGFuZCBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG5cdC8qKlxuXHQgKiBmYWNpbmdNb2RlIHZhbHVlcyB0byB1c2Ugd2l0aCBjb25zdHJhaW50c1xuXHQgKiBAcmV0dXJucyB7e1VTRVI6IHN0cmluZywgRU5WSVJPTk1FTlQ6IHN0cmluZ319XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGZhY2luZ01vZGUoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFVTRVI6ICd1c2VyJyxcblx0XHRcdEVOVklST05NRU5UOiAnZW52aXJvbm1lbnQnXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIZWxwZXJzIHRvIGNyZWF0ZSBhIE1lZGlhU3RyZWFtQ29uc3RyYWludHMgY29uZmlndXJhdGlvbiBvYmplY3Rcblx0ICogQHBhcmFtIHtib29sZWFufE1lZGlhVHJhY2tDb25zdHJhaW50c3xzdHJpbmd9IFt2aWRlb0NvbnN0cmFpbnRzPSdIRCddIGEgYm9vbGVhbiwgYSB2aWRlbyBjb25zdHJhaW50cyBvYmplY3Qgb3IgYSBwcmVzZXQgaWQgKFVIRCwgRkhELCBIRCwgU1ZHQSwgU0QsIFZHQSlcblx0ICogQHBhcmFtIHtib29sZWFufE1lZGlhVHJhY2tDb25zdHJhaW50c30gW2F1ZGlvQ29uc3RyYWludHM9dHJ1ZV0gYSBib29sZWFuIG9yIGFuIGF1ZGlvIGNvbnN0cmFpbnRzIG9iamVjdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9aWRlYWxdIHR5cGUgb2YgY29uc3RyYWludHMgZm9yIHZpZGVvIHdoZW4gdXNpbmcgYSBwcmVzZXQgKGV4YWN0LG1pbixtYXggb3IgaWRlYWwpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW3ZpZGVvRGV2aWNlSWRdIHZpZGVvIGlucHV0IGRldmljZSBpZCBvciBmYWNpbmdNb2RlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW2F1ZGlvRGV2aWNlSWRdIGF1ZGlvIGlucHV0IGRldmljZSBpZFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fVxuXHQgKiBAdGhyb3dzIHtFcnJvcn1cblx0ICpcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+SEQgQXVkaW9WaWRlbyB3aXRoIGRlZmF1bHQgZGV2aWNlczwvY2FwdGlvbj5cblx0ICogbGV0IG15Q29uc3RyYWludHMgPSBSZWFjaC5tZWRpYS5jb25zdHJhaW50cygpO1xuXHQgKiBjb25zb2xlLmxvZyhteUNvbnN0cmFpbnRzKTtcblx0ICpcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+RnVsbCBIRCBWaWRlbyB3aXRob3V0IGF1ZGlvIHVzaW5nIGRlZmF1bHQgZGV2aWNlczwvY2FwdGlvbj5cblx0ICogbGV0IG15Q29uc3RyYWludHMgPSBSZWFjaC5tZWRpYS5jb25zdHJhaW50cygnRkhEJywgZmFsc2UsICdleGFjdCcpO1xuXHQgKiBjb25zb2xlLmxvZyhteUNvbnN0cmFpbnRzKTtcblx0ICovXG5cdHN0YXRpYyBjb25zdHJhaW50cyAodmlkZW9Db25zdHJhaW50cyA9ICdIRCcsIGF1ZGlvQ29uc3RyYWludHMgPSB0cnVlLCB0eXBlID0gJ2lkZWFsJywgdmlkZW9EZXZpY2VJZCwgYXVkaW9EZXZpY2VJZCkge1xuXHRcdGxldCB2aWRlbyA9IHZpZGVvQ29uc3RyYWludHM7XG5cdFx0aWYgKHR5cGVvZiB2aWRlb0NvbnN0cmFpbnRzID09PSAnc3RyaW5nJyl7XG5cdFx0XHRpZihwcmVzZXRzW3ZpZGVvQ29uc3RyYWludHMudG9VcHBlckNhc2UoKV0pIHtcblx0XHRcdFx0Y29uc3Rcblx0XHRcdFx0XHRwcmVzZXQgPSBwcmVzZXRzW3ZpZGVvQ29uc3RyYWludHMudG9VcHBlckNhc2UoKV0sXG5cdFx0XHRcdFx0ZGltQ29uc3RyYWludCA9IChkaW0pID0+IHtcblx0XHRcdFx0XHRcdGlmKC9eKG1pbnxtYXh8ZXhhY3QpJC8udGVzdCh0eXBlKSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByID0ge307XG5cdFx0XHRcdFx0XHRcdHJbdHlwZV0gPSBwcmVzZXRbZGltXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRtaW46IHByZXNldC5taW4gPyBwcmVzZXRzW3ByZXNldC5taW5dW2RpbV0gOiBwcmVzZXRbZGltXSxcblx0XHRcdFx0XHRcdFx0aWRlYWw6IHByZXNldFtkaW1dLFxuXHRcdFx0XHRcdFx0XHRtYXg6IHByZXNldC5tYXggPyBwcmVzZXRzW3ByZXNldC5tYXhdW2RpbV0gOiBwcmVzZXRbZGltXVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR2aWRlbyA9IHt3aWR0aDogZGltQ29uc3RyYWludCgndycpLCBoZWlnaHQ6IGRpbUNvbnN0cmFpbnQoJ2gnKX07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gVmlkZW8gUmVzb2x1dGlvbiBwcmVzZXQgKFVIRCwgRkhELCBIRCwgU1ZHQSwgU0QsIFZHQSknKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dmlkZW8gPSBfYXNzaWduRGV2aWNlKHZpZGVvLCB2aWRlb0RldmljZUlkKTtcblxuXHRcdGNvbnN0IGF1ZGlvID0gX2Fzc2lnbkRldmljZShhdWRpb0NvbnN0cmFpbnRzLCBhdWRpb0RldmljZUlkKTtcblxuXHRcdExvZy5kKCdNZWRpYSNjb25zdHJhaW50cycsIHt2aWRlbywgYXVkaW99KTtcblx0XHRyZXR1cm4ge3ZpZGVvLCBhdWRpb307XG5cdH1cblxuXHQvKipcblx0ICogSW5pdCBzdHJlYW0gZGlzcGxheSBub2RlIGRlcGVuZGluZyBvbiBzdHJlYW0gdHlwZVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSBUaGUgTWVkaWFTdHJlYW0gdG8gZGlzcGxheVxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBDb250YWluZXIgbm9kZSBmb3Igc3RyZWFtc1xuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IHByZXZpb3VzIFByZXZpb3VzIG5vZGUgZm9yIHRoZSBzdHJlYW1cblx0ICogQHBhcmFtIHtudW1iZXJ9IFt2b2x1bWU9LjddIHRoZSBkZWZhdWx0IHZvbHVtZVxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fVxuXHQgKi9cblx0c3RhdGljIGF0dGFjaFN0cmVhbShtZWRpYVN0cmVhbSwgY29udGFpbmVyLCBwcmV2aW91cywgdm9sdW1lID0gLjcpIHtcblx0XHRsZXQgdGFnTmFtZSA9ICcnO1xuXHRcdGlmKG1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFnTmFtZSA9ICd2aWRlbyc7XG5cdFx0fSBlbHNlIGlmKG1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoID4gMCkge1xuXHRcdFx0dGFnTmFtZSA9ICdhdWRpbyc7XG5cdFx0fVxuXHRcdExvZy5kKCdNZWRpYSNhdHRhY2hTdHJlYW0nLCBtZWRpYVN0cmVhbSwgdGFnTmFtZSk7XG5cdFx0aWYgKHRhZ05hbWUubGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IF9ub2RlID0gcHJldmlvdXM7XG5cdFx0XHRpZiAoIV9ub2RlIHx8IF9ub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnTmFtZSkge1xuXHRcdFx0XHRfbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cdFx0XHRcdF9ub2RlLmF1dG9wbGF5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gc2V0IHRoZXNlIGF0dHJpYnV0ZXMgaW4gb3JkZXIgdG8gbGF1bmNoIHRoZSB2aWRlbyBvbiBJT1Ncblx0XHRcdFx0X25vZGUuc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsdHJ1ZSk7XG5cdFx0XHRcdF9ub2RlLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLHRydWUpO1xuXG5cdFx0XHRcdF9ub2RlLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxcHgnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbnRhaW5lcikge1xuXHRcdFx0XHRpZiAocHJldmlvdXMgJiYgcHJldmlvdXMgIT09IF9ub2RlKSB7XG5cdFx0XHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZChfbm9kZSwgcHJldmlvdXMpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFwcmV2aW91cykge1xuXHRcdFx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChfbm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9ub2RlLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtO1xuXHRcdFx0Ly8gZGlzYWJsZWQgZG9lc24ndCBzZWVtIHRvIGJlIG5lZWRlZFxuXHRcdFx0Ly8gX25vZGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdF9ub2RlLnZvbHVtZSA9IHZvbHVtZTtcblx0XHRcdHJldHVybiBfbm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIHByZXZpb3VzO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpc3QgYXZhaWxhYmxlIGlucHV0IGRldmljZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTx7YXVkaW9pbnB1dDogTWVkaWFEZXZpY2VJbmZvW10sIHZpZGVvaW5wdXQ6IE1lZGlhRGV2aWNlSW5mb1tdfT59XG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIFJlYWNoLm1lZGlhLmRldmljZXMoKS50aGVuKGRldmljZXMgPT4ge1xuXHQgKiAgLy8gVmlkZW8gY2FtZXJhc1xuXHQgKiAgY29uc29sZS5sb2coZGV2aWNlcy52aWRlb2lucHV0KTtcblx0ICogIC8vIEF1ZGlvIG1pY3Ncblx0ICogIGNvbnNvbGUubG9nKGRldmljZXMuYXVkaW9pbnB1dCk7XG5cdCAqIH0pO1xuXHQgKi9cblx0c3RhdGljIGRldmljZXMgKCkge1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKVxuXHRcdFx0LnRoZW4oZGV2aWNlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHIgPSB7fTtcblx0XHRcdFx0ZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyW2RldmljZS5raW5kXSkge1xuXHRcdFx0XHRcdFx0cltkZXZpY2Uua2luZF0gPSBbXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cltkZXZpY2Uua2luZF0ucHVzaChkZXZpY2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0TG9nLmQoJ01lZGlhI2RldmljZXMnLCByKTtcblx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdNZWRpYSNkZXZpY2VzJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS91dGlsL01lZGlhLmpzIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29yZS9Vc2VyJztcbmltcG9ydCBSb29tIGZyb20gJy4uL2NvcmUvUm9vbSc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4uL2NvcmUvSW52aXRlJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuLi9jb3JlL1BhcnRpY2lwYW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvcmUvTWVzc2FnZSc7XG5pbXBvcnQgUmVtb3RlIGZyb20gJy4uL2NvcmUvc3RyZWFtL1JlbW90ZSc7XG5pbXBvcnQge0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRUR9IGZyb20gJy4uL2NvcmUvdXRpbC9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSZWFjaCNvbn1cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9SZWFjaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVTRVJfQURERUQgRmlyZWQgd2hlbiBhIG5ldyB1c2VyIGlzIHJlZ2lzdGVyZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBVU0VSX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBleGlzdGluZyB1c2VyIGxvZ3MgaW4gb3Igb3V0IG9yIGNoYW5nZXMgaXMgc3RhdHVzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVNFUl9SRU1PVkVEIEZpcmVkIHdoZW4gYSB1c2VyIGlzIHVucmVnaXN0ZXJlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQURERUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY3JlYXRlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFJPT01fQ0hBTkdFRCBGaXJlZCB3aGVuIGEgcm9vbSBzdGF0dXMgaXMgY2hhbmdpbmdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBST09NX1JFTU9WRUQgRmlyZWQgd2hlbiBhIHJvb20gaXMgY2xvc2VkIGRlZmluaXRlbHlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQURERUQgRmlyZWQgd2hlbiBhbiBpbnZpdGUgaXMgcmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTlZJVEVfQ0hBTkdFRCBGaXJlZCB3aGVuIGFuIGludml0ZSBzdGF0dXMgaXMgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBSb29tI29ufVxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzL1Jvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUNJUEFOVF9BRERFRCBGaXJlZCB3aGVuIGEgbmV3IHBhcnRpY2lwYW50IGlzIGFkZGVkIHRvIHRoZSByb29tLiBEb2VzIG5vdCBtZWFuIGhlJ3MgY29ubmVjdGVkIGJ1dCB0aGF0IGhlJ3MgaW52aXRlZCB0b1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQ0lQQU5UX0NIQU5HRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IGNoYW5nZXMgaXMgc3RhdHVzIChlbnRlci9sZWF2ZXMgdGhlIHJvb20pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElDSVBBTlRfUkVNT1ZFRCBGaXJlZCB3aGVuIGEgdXNlciBsZWF2ZXMgZGVmaW5pdGVseSBvciBpcyBiYW5uZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0FEREVEIEZpcmVkIHdoZW4gYSBuZXcgaW5zdGFudCBtZXNzYWdlIGlzIHNlbnQgdG8gdGhlIHJvb21cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRVNTQUdFX0NIQU5HRUQgRmlyZWQgd2hlbiBhbiBpbnN0YW50IG1lc3NhZ2UgaXMgZWRpdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTUVTU0FHRV9SRU1PVkVEIEZpcmVkIHdoZW4gYW4gaW5zdGFudCBtZXNzYWdlIGlzIHJlbW92ZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fUFVCTElTSEVEIEZpcmVkIHdoZW4gYSBwYXJ0aWNpcGFudCBwdWJsaXNoZXMgYSBzdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVFJFQU1fVU5QVUJMSVNIRUQgRmlyZWQgd2hlbiBhIHBhcnRpY2lwYW50IHN0b3BzIHRoZSBwdWJsaXNoaW5nIG9mIGhpcyBzdHJlYW1cbiAqL1xuXG4vKipcbiAqIFRoZSBldmVudHMgc3VwcG9ydGVkIGJ5IHtAbGluayBJbnZpdGUjb259XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHMvSW52aXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQUNDRVBURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVKRUNURUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGFjY2VwdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ0FOQ0VMRUQgRmlyZWQgd2hlbiB0aGUgaW52aXRlIGhhcyBiZWVuIGNhbmNlbGVkXG4gKi9cblxuLyoqXG4gKiBUaGUgZXZlbnRzIHN1cHBvcnRlZCBieSB7QGxpbmsgUmVtb3RlI29ufS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEV2ZW50cy9TdHJlYW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNVVRFIEZpcmVkIHdoZW4gdGhlIG11dGUgc3RhdHVzIG9mIHRoZSBzdHJlYW0gY2hhbmdlc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFNJWkUgRmlyZWQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgc3RyZWFtIGNoYW5nZXNcbiAqL1xuXG4vKipcbiAqIFBhdGggY29uZmlndXJhdGlvbiBmb3IgZWFjaCBldmVudFxuICogQGlnbm9yZVxuICogQHR5cGUge3t9fVxuICovXG5jb25zdCBwYXRocyA9IHtcblx0J1VTRVInOiAoKSA9PiAndXNlcnMnLFxuXHQnUk9PTSc6ICgpID0+ICdyb29tcycsXG5cdCdJTlZJVEUnOiB1c2VyID0+IHtcblx0XHRpZighdXNlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBiZSBhdXRoZW50aWNhdGVkIHRvIGxpc3QgdGhlIGludml0ZXMnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gO1xuXHR9LFxuXHQnUEFSVElDSVBBTlQnOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3BhcnRpY2lwYW50c2AsXG5cdCdNRVNTQUdFJzogcm9vbSA9PiBgXy9yb29tcy8ke3Jvb20udWlkfS9tZXNzYWdlc2AsXG5cdCdTVFJFQU0nOiByb29tID0+IGBfL3Jvb21zLyR7cm9vbS51aWR9L3N0cmVhbXNgXG59O1xuXG4vKipcbiAqIE9iamVjdCB0eXBlIGNvbmZpZ3VyYXRpb24gZm9yIGVhY2ggZXZlbnRcbiAqIEBpZ25vcmVcbiAqIEB0eXBlIHt7fX1cbiAqL1xuY29uc3QgY2xhc3NlcyA9IHtcblx0J1VTRVInOiBVc2VyLFxuXHQnUk9PTSc6IFJvb20sXG5cdCdJTlZJVEUnOiBJbnZpdGUsXG5cdCdQQVJUSUNJUEFOVCc6IFBhcnRpY2lwYW50LFxuXHQnTUVTU0FHRSc6IE1lc3NhZ2UsXG5cdCdTVFJFQU0nOiBSZW1vdGVcbn07XG5cbi8qKlxuICogUHJpdmF0ZSBjbGFzcyB0byBhZGQgc3VwcG9ydCB0ZXN0IG1ldGhvZHNcbiAqIEBjbGFzcyBfRXZlbnRzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIF9FdmVudHMge1xuXHRjb25zdHJ1Y3RvcihrZXlzKSB7XG5cdFx0a2V5cy5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0ga2V5O30pO1xuXHR9XG5cdHN1cHBvcnRzKGV2ZW50KSB7XG5cdFx0aWYoIWV2ZW50IHx8IHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgdGhpc1tldmVudF0gIT09IGV2ZW50LnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQuIFVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzKSl9YCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHRvUGF0aChldmVudCkge1xuXHRcdGlmKHRoaXMuc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm4gcGF0aHNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXSB8fCAoKCkgPT4gbnVsbCk7XG5cdFx0fVxuXHR9XG5cdHRvQ2xhc3MoZXZlbnQpIHtcblx0XHRpZih0aGlzLnN1cHBvcnRzKGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuIGNsYXNzZXNbZXZlbnQudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fLiokLywgJycpXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCByZWFjaCA9IG5ldyBfRXZlbnRzKFtcblx0J1VTRVJfQURERUQnLCAnVVNFUl9DSEFOR0VEJywgJ1VTRVJfUkVNT1ZFRCcsXG5cdCdST09NX0FEREVEJywgJ1JPT01fQ0hBTkdFRCcsICdST09NX1JFTU9WRUQnLFxuXHQnSU5WSVRFX0FEREVEJywgJ0lOVklURV9DSEFOR0VEJ1xuXSk7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3Qgcm9vbSA9IG5ldyBfRXZlbnRzKFtcblx0J01FU1NBR0VfQURERUQnLCAnTUVTU0FHRV9DSEFOR0VEJywgJ01FU1NBR0VfUkVNT1ZFRCcsXG5cdCdQQVJUSUNJUEFOVF9BRERFRCcsICdQQVJUSUNJUEFOVF9DSEFOR0VEJywgJ1BBUlRJQ0lQQU5UX1JFTU9WRUQnLFxuXHQnU1RSRUFNX1BVQkxJU0hFRCcsICdTVFJFQU1fVU5QVUJMSVNIRUQnXG5dKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJlYW0gPSBuZXcgX0V2ZW50cyhbJ01VVEUnLCAnU0laRSddKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBpbnZpdGUgPSBuZXcgX0V2ZW50cyhbQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRF0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmluaXRpb25zL0V2ZW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIldlYmNvbVwiLFwiY29tbW9uanNcIjpcIndlYmNvbS93ZWJjb21cIixcImNvbW1vbmpzMlwiOlwid2ViY29tL3dlYmNvbVwiLFwiYW1kXCI6XCJ3ZWJjb20vd2ViY29tXCJ9XG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7T05HT0lORywgQUNDRVBURUQsIFJFSkVDVEVELCBDQU5DRUxFRH0gZnJvbSAnLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4vdXRpbC9Mb2cnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgUm9vbSBmcm9tICcuL1Jvb20nO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4uL2RlZmluaXRpb25zL0V2ZW50cyc7XG5cbi8qKlxuICogVXBkYXRlXG4gKiBAcGFyYW0ge0ludml0ZX0gaW52aXRlIFRoZSBpbnZpdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgVGhlIG5ldyBzdGF0dXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uPW51bGxdIFRoZSByZWFzb24gKGEgbWVzc2FnZSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbX2VuZGVkPW51bGxdXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEByZXR1cm5zIHtQcm9taXNlPEludml0ZSwgRXJyb3I+fVxuICovXG5jb25zdCB1cGRhdGUgPSAoaW52aXRlLCBzdGF0dXMsIHJlYXNvbiA9IG51bGwsIF9lbmRlZCA9IG51bGwpID0+IHtcblx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdHN0YXR1cyxcblx0XHRyZWFzb24sXG5cdFx0X2VuZGVkXG5cdH07XG5cblx0aWYoaW52aXRlLnN0YXR1cyAhPT0gT05HT0lORykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoaXMgaW52aXRhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFuc3dlcmVkJykpO1xuXHR9XG5cdHJldHVybiBEYXRhU3luYy51cGRhdGUoYF8vaW52aXRlcy8ke2ludml0ZS50b30vJHtpbnZpdGUudWlkfWAsIHZhbHVlcylcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2gocHJvcCA9PiB7XG5cdFx0XHRcdGludml0ZVtwcm9wXSA9IHZhbHVlc1twcm9wXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIFJvb20uZ2V0KGludml0ZS5yb29tKTtcblx0XHR9KVxuXHRcdC50aGVuKHJvb20gPT4gKHtyb29tLCBpbnZpdGV9KSlcblx0XHQuY2F0Y2goTG9nLnIoJ0ludml0ZV91cGRhdGUnKSk7XG59O1xuXG4vKipcbiAqIEludml0YXRpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52aXRlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlIGFuIGludml0ZVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fG9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhKSB7XG5cdFx0bGV0IHZhbHVlcyA9IHNuYXBEYXRhO1xuXHRcdGlmKHNuYXBEYXRhICYmIHNuYXBEYXRhLnZhbCAmJiB0eXBlb2Ygc25hcERhdGEudmFsID09PSAnZnVuY3Rpb24nKXtcblx0XHRcdHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpLCB7dWlkOiBzbmFwRGF0YS5uYW1lKCksIHRvOiBzbmFwRGF0YS5yZWYoKS5wYXJlbnQoKS5uYW1lKCl9KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlJ3MgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUgc3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSB2YWx1ZXMudWlkO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSdzIHNlbmRlciB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuZnJvbSA9IHZhbHVlcy5mcm9tO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZWUncyB1aWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudG8gPSB2YWx1ZXMudG87XG5cdFx0LyoqXG5cdFx0ICogVGhlIGlkIG9mIHRoZSByb29tIGFzc29jaWF0ZWQgdG8gdGhlIGludml0ZVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tID0gdmFsdWVzLnJvb207XG5cdFx0LyoqXG5cdFx0ICogVGhlIGludml0YXRpb24gc3RhdHVzIDpcblx0XHQgKiAtIE9OR09JTkcgLSBUaGUgcmVjZWl2ZXIgaGFzIG5vdCB5ZXQgcmVzcG9uZGVkIHRvIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogLSBBQ0NFUFRFRCAtIFRoZSByZWNlaXZlciBoYXMgYWNjZXB0ZWQgdGhlIGludml0YXRpb25cblx0XHQgKiAtIFJFSkVDVEVEIC0gVGhlIHJlY2VpdmVyIGhhcyByZWplY3RlZCB0aGUgaW52aXRhdGlvblxuXHRcdCAqIC0gQ0FOQ0VMRUQgLSBUaGUgc2VuZGVyIGNhbmNlbGVkIHRoZSBpbnZpdGF0aW9uXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlIG1lc3NhZ2UuIFRoaXMgd2lsbCBiZSBlaXRoZXIgYSBjdXN0b20gbWVzc2FnZSBpZiB0aGUgc3RhdHVzIGlzIE9OR09JTkcgb3IgYSByZWFzb24gd2hlbiBzdGF0dXMgaXMgQ0FOQ0VMRUR8UkVKRUNURUQuXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRvcGljID0gdmFsdWVzLnRvcGljO1xuXHRcdC8qKlxuXHRcdCAqIEludml0ZSBjcmVhdGlvbiB0aW1lc3RhbXBcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NyZWF0ZWQgPSB2YWx1ZXMuX2NyZWF0ZWQ7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlIGV4cGlyYXRpb24gdGltZXN0YW1wXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9lbmRlZCA9IHZhbHVlcy5fZW5kZWQ7XG5cdFx0LyoqXG5cdFx0ICogSW52aXRlIGV2ZW50cyBjYWxsYmFja3Ncblx0XHQgKiBAdHlwZSB7e319XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJcyB0aGlzIGludml0YXRpb24gd2FpdGluZyBmb3IgYSByZXBseSA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzT25Hb2luZygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IE9OR09JTkc7XG5cdH1cblxuXHQvKipcblx0ICogV2FzIHRoaXMgaW52aXRhdGlvbiByZWplY3RlZCA/XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzUmVqZWN0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdHVzID09PSBSRUpFQ1RFRDtcblx0fVxuXG5cdC8qKlxuXHQgKiBXYXMgdGhpcyBpbnZpdGF0aW9uIGFjY2VwdGVkID9cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNBY2NlcHRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0dXMgPT09IEFDQ0VQVEVEO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdhcyB0aGlzIGludml0YXRpb24gY2FuY2VsZWQgP1xuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBpc0NhbmNlbGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXR1cyA9PT0gQ0FOQ0VMRUQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2FuY2VscyB0aGUgaW52aXRhdGlvbi4gT25seSB0aGUgc2VuZGVyIGNhbiBjYW5jZWwgdGhlIGludml0YXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSBUaGUgcmVhc29uIHRoZSBzZW5kZXIgaXMgY2FuY2VsaW5nIHRoZSBpbnZpdGVcblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGU+fVxuXHQgKi9cblx0Y2FuY2VsKHJlYXNvbikge1xuXHRcdHJldHVybiB1cGRhdGUodGhpcywgQ0FOQ0VMRUQsIHJlYXNvbiwgRGF0YVN5bmMudHMoKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVqZWN0cyB0aGUgaW52aXRhdGlvbi4gT25seSB0aGUgcmVjZWl2ZXIgY2FuIHJlamVjdCB0aGUgaW52aXRhdGlvbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIFRoZSByZWFzb24gdGhlIHJlY2VpdmVyIGlzIHJlamVjdGluZyB0aGUgaW52aXRlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlPn1cblx0ICovXG5cdHJlamVjdChyZWFzb24pIHtcblx0XHRyZXR1cm4gdXBkYXRlKHRoaXMsIFJFSkVDVEVELCByZWFzb24sIERhdGFTeW5jLnRzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFjY2VwdCB0aGUgaW52aXRhdGlvbi4gT25seSB0aGUgcmVjZWl2ZXIgY2FuIGFjY2VwdCB0aGUgaW52aXRhdGlvbi5cblx0ICogQHJldHVybiB7UHJvbWlzZTxJbnZpdGU+fVxuXHQgKi9cblx0YWNjZXB0KCkge1xuXHRcdHJldHVybiB1cGRhdGUodGhpcywgQUNDRVBURUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3RhdHVzIHVwZGF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIENhbiBiZTpcblx0ICogLSBBQ0NFUFRFRFxuXHQgKiAtIFJFSkVDVEVEXG5cdCAqIC0gQ0FOQ0VMRURcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcblx0ICovXG5cdG9uKHN0YXR1cywgY2FsbGJhY2spIHtcblx0XHRpZihFdmVudHMuaW52aXRlLnN1cHBvcnRzKHN0YXR1cykpIHtcblx0XHRcdC8vIFJlZ2lzdGVyIGNhbGxiYWNrXG5cdFx0XHRpZiAoIXRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdID0gW107XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jYWxsYmFja3Nbc3RhdHVzXS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdC8vIERlZmluZWQgbGlzdGVuZXIgJiBzdWJzY3JpYmUgaWYgbmVlZGVkXG5cdFx0XHRpZiAoIXRoaXMuX2xpc3RlbmVyKSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBJbnZpdGUgc3RhdHVzIHVwZGF0ZSBjYWxsYmFja1xuXHRcdFx0XHQgKiBAdHlwZSB7ZnVuY3Rpb259XG5cdFx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHR0aGlzLl9saXN0ZW5lciA9IHNuYXBEYXRhID0+IHtcblx0XHRcdFx0XHRjb25zdCB1cGRhdGVkID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdFx0aWYgKHVwZGF0ZWQgIT09IG51bGwgJiYgdXBkYXRlZCAhPT0gdGhpcy5zdGF0dXMpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gdXBkYXRlZDtcblx0XHRcdFx0XHRcdCh0aGlzLl9jYWxsYmFja3NbdXBkYXRlZF0gfHwgW10pLmZvckVhY2goY2IgPT4ge1xuXHRcdFx0XHRcdFx0XHRjYih0aGlzKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0RGF0YVN5bmMub24oYF8vaW52aXRlcy8ke3RoaXMudG99LyR7dGhpcy51aWR9L3N0YXR1c2AsICd2YWx1ZScsIHRoaXMuX2xpc3RlbmVyLmJpbmQodGhpcykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhbGwgc3RhdHVzIGNoYW5nZSBldmVudHNcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcblx0ICovXG5cdG9uU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKSB7XG5cdFx0W0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRURdLmZvckVhY2goZXZlbnQgPT4ge1xuXHRcdFx0dGhpcy5vbihldmVudCwgY2FsbGJhY2spO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuLXJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3RhdHVzIHVwZGF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3N0YXR1c10gQ2FuIGJlOlxuXHQgKiAtIEFDQ0VQVEVEXG5cdCAqIC0gUkVKRUNURURcblx0ICogLSBDQU5DRUxFRFxuXHQgKiAtIG51bGwgVGhpcyB3aWxsIHVuLXJlZ2lzdGVyIGFsbCBjYWxsYmFja3Ncblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVxuXHQgKi9cblx0b2ZmKHN0YXR1cywgY2FsbGJhY2spIHtcblx0XHRpZighc3RhdHVzKSB7XG5cdFx0XHR0aGlzLl9jYWxsYmFja3MgPSB7fTtcblx0XHR9IGVsc2UgaWYodGhpcy5fY2FsbGJhY2tzW3N0YXR1c10pIHtcblx0XHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNvbnN0IGlkeCA9IHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdLmZpbmRJbmRleChjYiA9PiBjYiA9PT0gY2FsbGJhY2spO1xuXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHR0aGlzLl9jYWxsYmFja3Muc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tzdGF0dXNdID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKCFbQ0FOQ0VMRUQsIEFDQ0VQVEVELCBSRUpFQ1RFRF0uc29tZShldmVudCA9PiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdICYmIHRoaXMuX2NhbGxiYWNrc1tldmVudF0ubGVuZ3RoID4gMCkpe1xuXHRcdFx0RGF0YVN5bmMub2ZmKGBfL2ludml0ZXMvJHt0aGlzLnRvfS8ke3RoaXMudWlkfS9zdGF0dXNgLCAndmFsdWUnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVW4tcmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYWxsIHN0YXR1cyBjaGFuZ2UgZXZlbnRzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja11cblx0ICovXG5cdG9mZlN0YXR1c0NoYW5nZShjYWxsYmFjaykge1xuXHRcdGlmKCFjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5vZmYoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0W0FDQ0VQVEVELCBSRUpFQ1RFRCwgQ0FOQ0VMRURdLmZvckVhY2goZXZlbnQgPT4ge1xuXHRcdFx0XHR0aGlzLm9mZihldmVudCwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB0aGUgaW52aXRhdGlvbiAmIGFkZCB0aGUgdXNlciB0byB0aGUgcGFydGljaXBhbnRzIGxpc3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtVc2VyfSBpbnZpdGVlIFRoZSB1c2VyIHRvIGludml0ZVxuXHQgKiBAcGFyYW0ge1Jvb219IHJvb20gVGhlIHJvb20gdG8gaW52aXRlIHRoZSB1c2VyIHRvXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gQSBtZXNzYWdlIGZvciB0aGUgaW52aXRlZVxuXHQgKi9cblx0c3RhdGljIHNlbmQoaW52aXRlZSwgcm9vbSwgbWVzc2FnZSA9IG51bGwpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIHNlbmQgYW4gaW52aXRlLicpKTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnZpdGVNZXRhRGF0YSA9IHtcblx0XHRcdGZyb206IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0cm9vbTogcm9vbS51aWQsXG5cdFx0XHRzdGF0dXM6IE9OR09JTkcsXG5cdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKSxcblx0XHRcdHRvcGljOiBtZXNzYWdlXG5cdFx0fTtcblxuXHRcdHJldHVybiBEYXRhU3luYy5wdXNoKGBfL2ludml0ZXMvJHtpbnZpdGVlLnVpZH1gLCBpbnZpdGVNZXRhRGF0YSlcblx0XHRcdC50aGVuKGludml0ZVJlZiA9PiB7XG5cdFx0XHRcdGNvbnN0IGludml0ZUlkID0gaW52aXRlUmVmLm5hbWUoKTtcblx0XHRcdFx0cmV0dXJuIG5ldyBJbnZpdGUoT2JqZWN0LmFzc2lnbih7dWlkOiBpbnZpdGVJZCwgdG86IGludml0ZWUudWlkfSwgaW52aXRlTWV0YURhdGEpKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ0ludml0ZSNzZW5kJykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9JbnZpdGUuanMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL3V0aWwvTG9nJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSc7XG5pbXBvcnQgRGV2aWNlIGZyb20gJy4vRGV2aWNlJztcbmltcG9ydCB7Q09OTkVDVEVELCBOT1RfQ09OTkVDVEVEfSBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbmxldCBpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuLyoqXG4gKiBVc2VyIGluZm9ybWF0aW9uc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHVzZXJcblx0ICogQHBhcmFtIHtXZWJjb20vYXBpLkRhdGFTbmFwc2hvdHxvYmplY3R9IHNuYXBEYXRhIFRoZSBkYXRhIHNuYXBzaG90XG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzbmFwRGF0YSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBVc2VyJ3MgdW5pcXVlIGlkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHNuYXBEYXRhLm5hbWUoKTtcblx0XHQvKipcblx0XHQgKiBVc2VyJ3MgZGlzcGxheSBuYW1lXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLm5hbWUgPSB2YWx1ZXMubmFtZTtcblx0XHQvKipcblx0XHQgKiBVc2VyJ3Mgc3RhdHVzXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogVXNlcidzIGxhc3Qga25vdyBjb25uZWN0aW9uIHRzXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLmxhc3RTZWVuID0gdmFsdWVzLmxhc3RTZWVuO1xuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBpcyBhbiBhbm9ueW1vdXMgdXNlclxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuYW5vbnltb3VzID0gL15hbm9ueW1vdXMvLnRlc3QodGhpcy51aWQpO1xuXHRcdC8vIFRPRE8gI0ZlYXQ6IEFkZCAnZXh0cmEnIHByb3BlcnR5IGZvciB1bnJlc3RyaWN0ZWQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiA/XG5cdH1cblxuXHQvKipcblx0ICogSW52aXRlIGEgdXNlciBkaXJlY3RseS4gVGhpcyB3aWxsIGNyZWF0ZSBhIG5ldyBSb29tLCBsb2cgeW91IGluIGl0ICYgaW52aXRlIHRoZSB1c2VyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIGEgbWVzc2FnZSB0byBhZGQgdG8gdGhlIGludml0ZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHtyb29tOiBSb29tLCBpbnZpdGU6IEludml0ZX0sIEVycm9yPn1cblx0ICovXG5cdGludml0ZShtZXNzYWdlKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBpbnZpdGUgYW5vdGhlciBVc2VyLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIFJvb20uY3JlYXRlKGAke2NhY2hlLnVzZXIudWlkfS0ke3RoaXMudWlkfWApXG5cdFx0XHQudGhlbihyb29tID0+IHtcblx0XHRcdFx0cmV0dXJuIHJvb20uaW52aXRlKFt0aGlzXSwgbnVsbCwgbWVzc2FnZSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiB7cm9vbTogZGF0YS5yb29tLCBpbnZpdGU6IGRhdGEuaW52aXRlc1swXX07XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdVc2Vyfmludml0ZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0IFVzZXJzJ3MgZGV2aWNlcy4gT25seSBmb3IgY3VycmVudCB1c2VyLlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPERldmljZVtdLCBFcnJvcj59XG5cdCAqL1xuXHRkZXZpY2VzKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KGBfL2RldmljZXMvJHt0aGlzLnVpZH1gLCBEZXZpY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgdGhlIGN1cnJlbnQgdXNlclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSB1c2VyJ3MgdWlkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIHVzZXIncyBkaXNwbGF5IG5hbWVcblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlciwgRXJyb3I+fVxuXHQgKi9cblx0c3RhdGljIGluaXQgKHVpZCwgbmFtZSkge1xuXHRcdGlmKCFpbml0aWFsaXppbmcpIHtcblx0XHRcdGluaXRpYWxpemluZyA9IHRydWU7XG5cdFx0XHRjb25zdCBkID0ge3N0YXR1czogQ09OTkVDVEVELCBsYXN0U2VlbjogRGF0YVN5bmMudHMoKX07XG5cdFx0XHRpZihuYW1lKSB7XG5cdFx0XHRcdE9iamVjdC5hc3NpZ24oZCwge25hbWV9KTtcblx0XHRcdH1cblx0XHRcdGxldCBkZXZpY2VJZCA9IFdlYmNvbS5JTlRFUk5BTC5QZXJzaXN0ZW50U3RvcmFnZS5nZXQodWlkKTtcblx0XHRcdHJldHVybiBEYXRhU3luYy51cGRhdGUoYHVzZXJzLyR7dWlkfWAsIGQpXG5cdFx0XHRcdC8vIFJlZ2lzdGVyIGN1cnJlbnQgZGV2aWNlXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBkZXZpY2VNZXRhZGF0YSA9IHtcblx0XHRcdFx0XHRcdHN0YXR1czogQ09OTkVDVEVELFxuXHRcdFx0XHRcdFx0c2RrOiB7XG5cdFx0XHRcdFx0XHRcdHJlYWNoOiBTREtfVkVSU0lPTixcblx0XHRcdFx0XHRcdFx0d2ViY29tOiBXZWJjb20uU0RLX1ZFUlNJT05cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGlmKGRldmljZUlkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGBfL2RldmljZXMvJHt1aWR9LyR7ZGV2aWNlSWR9YCwgZGV2aWNlTWV0YWRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMucHVzaChgXy9kZXZpY2VzLyR7dWlkfWAsIGRldmljZU1ldGFkYXRhKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gU2F2ZSBkZXZpY2Vcblx0XHRcdFx0LnRoZW4oZGV2aWNlUmVmID0+IHtcblx0XHRcdFx0XHRpZiAoIWRldmljZUlkKSB7XG5cdFx0XHRcdFx0XHRkZXZpY2VJZCA9IGRldmljZVJlZi5uYW1lKCk7XG5cdFx0XHRcdFx0XHRXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2Uuc2V0KHVpZCwgZGV2aWNlSWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYWNoZS5kZXZpY2UgPSBkZXZpY2VJZDtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gQWRkIG9uRGlzY29ubmVjdCBhY3Rpb25zXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHQvLyBEaXNjb25uZWN0IGRldmljZVxuXHRcdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9kZXZpY2VzLyR7dWlkfS8ke2RldmljZUlkfS9zdGF0dXNgKS5zZXQoTk9UX0NPTk5FQ1RFRCk7XG5cdFx0XHRcdFx0Ly8gVXBkYXRlIHVzZXIgc3RhdHVzXG5cdFx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGB1c2Vycy8ke3VpZH1gKS51cGRhdGUoe1xuXHRcdFx0XHRcdFx0c3RhdHVzOiBOT1RfQ09OTkVDVEVELFxuXHRcdFx0XHRcdFx0bGFzdFNlZW46IERhdGFTeW5jLnRzKClcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gR2V0IHVzZXJcblx0XHRcdFx0LnRoZW4oKCkgPT4gVXNlci5nZXQodWlkKSlcblx0XHRcdFx0LnRoZW4odXNlciA9PiB7XG5cdFx0XHRcdFx0aW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuIHVzZXI7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlID0+IHtcblx0XHRcdFx0XHRMb2cuZShlKTtcblx0XHRcdFx0XHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gVXNlci5nZXQodWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNjb25uZWN0IHRoZSBjdXJyZW50IHVzZXJcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSBjdXJyZW50IHVzZXJcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRzdGF0aWMgZGlzY29ubmVjdCh1c2VyKSB7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9kZXZpY2VzLyR7dXNlci51aWR9LyR7Y2FjaGUuZGV2aWNlfS9zdGF0dXNgKS5jYW5jZWwoKTtcblx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYHVzZXJzLyR7dXNlci51aWR9YCkuY2FuY2VsKCk7XG5cblx0XHRpZih1c2VyLmFub255bW91cykge1xuXHRcdFx0cmV0dXJuIERhdGFTeW5jLnJlbW92ZShgXy9kZXZpY2VzLyR7dXNlci51aWR9YClcblx0XHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMuZ2V0KGBfL2ludml0ZXMvJHt1c2VyLnVpZH1gKSlcblx0XHRcdFx0LnRoZW4oaW52aXRlcyA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaW52aXRlSWRzID0gW107XG5cdFx0XHRcdFx0aW52aXRlcy5mb3JFYWNoKGludml0ZSA9PiB7XG5cdFx0XHRcdFx0XHRpbnZpdGVJZHMucHVzaChpbnZpdGUubmFtZSgpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoaW52aXRlSWRzLm1hcChpbnZpdGVJZCA9PiBEYXRhU3luYy5yZW1vdmUoYF8vaW52aXRlcy8ke3VzZXIudWlkfS8ke2ludml0ZUlkfWApKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIFRPRE8gcmVmYWN0b3IgZGF0YSBtb2RlbCBmb3IgaW52aXRlcyBzbyB3ZSBjYW4gZGVsZXRlIF8vaW52aXRlcy8ke3VzZXIudWlkfVxuXHRcdFx0XHQvLyAudGhlbigoKSA9PiBEYXRhU3luYy5yZW1vdmUoYF8vaW52aXRlcy8ke3VzZXIudWlkfWApKVxuXHRcdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy5yZW1vdmUoYHVzZXJzLyR7dXNlci51aWR9YCkpXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2UucmVtb3ZlKHVzZXIudWlkKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKExvZy5yKCdVc2VyI2Fub255bW91c19kaXNjb25uZWN0JykpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0YVN5bmMuc2V0KGBfL2RldmljZXMvJHt1c2VyLnVpZH0vJHtjYWNoZS5kZXZpY2V9L3N0YXR1c2AsIE5PVF9DT05ORUNURUQpXG5cdFx0XHQudGhlbigoKSA9PiBEYXRhU3luYy5nZXQoYF8vZGV2aWNlcy8ke3VzZXIudWlkfWApKVxuXHRcdFx0LnRoZW4oZGV2aWNlcyA9PiB7XG5cdFx0XHRcdC8vIE9ubHkgY2hhbmdlIHVzZXIncyBzdGF0dXMgaWYgbm8gb3RoZXIgZGV2aWNlIGNvbm5lY3RlZFxuXHRcdFx0XHRjb25zdCBoYXNDb25uZWN0ZWREZXZpY2VzID0gZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChuZXcgUmVnRXhwKGBeJHtDT05ORUNURUR9JGApKS50ZXN0KGRldmljZS52YWwoKS5zdGF0dXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoIWhhc0Nvbm5lY3RlZERldmljZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gRGF0YVN5bmMudXBkYXRlKGB1c2Vycy8ke3VzZXIudWlkfWAsIHtzdGF0dXM6IE5PVF9DT05ORUNURUR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1VzZXIjZGlzY29ubmVjdCcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSB1c2VyIGJ5IGl0cyB1aWRcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgVGhlIHVzZXIncyB1aWRcblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlciwgRXJyb3I+fVxuXHQgKi9cblx0c3RhdGljIGdldCh1aWQpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMuZ2V0KGB1c2Vycy8ke3VpZH1gKVxuXHRcdC50aGVuKHNuYXBEYXRhID0+IHNuYXBEYXRhID8gbmV3IFVzZXIoc25hcERhdGEpIDogbnVsbClcblx0XHQuY2F0Y2goTG9nLnIoJ1VzZXIjZ2V0JykpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9Vc2VyLmpzIiwiLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHN0cmVhbSB0eXBlc1xuICogQHR5cGVkZWYge09iamVjdH0gU3RyZWFtVHlwZXNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBVURJTz0nYXVkaW8nIC0gQXVkaW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVklERU89J3ZpZGVvJyAtIFZpZGVvIGNvbW11bmljYXRpb24gc2VydmljZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVRElPX1ZJREVPPSdhdWRpby12aWRlbycgLSBBdWRpbyBhbmQgdmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0NSRUVOX1NIQVJJTkc9J3NjcmVlbi1zaGFyaW5nJyAtIFNjcmVlbi1zaGFyaW5nIGNvbW11bmljYXRpb24gc2VydmljZVxuICovXG5cbi8qKlxuKiBBdWRpbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBBVURJTyA9ICdhdWRpbyc7XG4vKipcbiogVmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG4qIEBpZ25vcmVcbiogQHR5cGUge3N0cmluZ31cbiovXG5leHBvcnQgY29uc3QgVklERU8gPSAndmlkZW8nO1xuLyoqXG4qIEF1ZGlvIGFuZCB2aWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2VcbiogQGlnbm9yZVxuKiBAdHlwZSB7c3RyaW5nfVxuKi9cbmV4cG9ydCBjb25zdCBBVURJT19WSURFTyA9ICdhdWRpby12aWRlbyc7XG4vKipcbiogU2NyZWVuLXNoYXJpbmcgc2VydmljZVxuKiBAaWdub3JlXG4qIEB0eXBlIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGNvbnN0IFNDUkVFTl9TSEFSSU5HID0gJ3NjcmVlbi1zaGFyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQge0FVRElPLCBWSURFTywgQVVESU9fVklERU8sIFNDUkVFTl9TSEFSSU5HfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9TdHJlYW1UeXBlcy5qcyIsImltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5cbmltcG9ydCBjYWNoZSBmcm9tICcuL3V0aWwvY2FjaGUnO1xuLyoqXG4gKiBJbnN0YW50IE1lc3NhZ2VcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBtZXNzYWdlXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8T2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcm9vbUlkIFRoZSBtZXNzYWdlJ3Mgcm9vbSBpZFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEsIHJvb21JZCkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHNuYXBEYXRhLnZhbCgpKTtcblx0XHQvKipcblx0XHQgKiBUaGUgbWVzc2FnZSB1bmlxdWUgaWRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gc25hcERhdGEubmFtZSgpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByb29tIHVpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5yb29tSWQgPSByb29tSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIG1lc3NhZ2Vcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudGV4dCA9IHZhbHVlcy50ZXh0O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBtZXNzYWdlIHNlbmRlclxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5mcm9tID0gdmFsdWVzLmZyb207XG5cdFx0LyoqXG5cdFx0ICogSm9pbmVkIGRhdGVcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NyZWF0ZWQgPSB2YWx1ZXMuX2NyZWF0ZWQ7XG5cdH1cblxuXHQvKipcblx0ICogRWRpdCB0aGUgdGV4dCBtZXNzYWdlLiBPbmx5IHRoZSBzZW5kZXIgb3IgbW9kZXJhdG9yL293bmVyIG9mIHRoZSByb29tIGNhbiBlZGl0IGEgbWVzc2FnZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1RleHQgVGhlIG5ldyBtZXNzYWdlXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPE1lc3NhZ2U+fVxuXHQgKi9cblx0ZWRpdChuZXdUZXh0KSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgL3Jvb21zLyR7dGhpcy5yb29tSWR9L21lc3NhZ2VzLyR7dGhpcy51aWR9YCwge3RleHQ6IG5ld1RleHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRleHQgPSBuZXdUZXh0O1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ01lc3NhZ2V+ZWRpdCcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIHRleHQgbWVzc2FnZS4gT25seSB0aGUgc2VuZGVyIG9yIG1vZGVyYXRvci9vd25lciBvZiB0aGUgcm9vbSBjYW4gcmVtb3ZlIGEgbWVzc2FnZS5cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRyZW1vdmUoKSB7XG5cdFx0cmV0dXJuIERhdGFTeW5jLnJlbW92ZShgL3Jvb21zLyR7dGhpcy5yb29tSWR9L21lc3NhZ2VzLyR7dGhpcy51aWR9YClcblx0XHRcdC5jYXRjaChMb2cucignTWVzc2FnZX5yZW1vdmUnKSk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtSb29tfSByb29tIFRoZSByb29tIHRvIHNlbmQgdGhlIG1lc3NhZ2UgdG9cblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIG1lc3NhZ2Vcblx0ICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlPn1cblx0ICovXG5cdHN0YXRpYyBzZW5kKHJvb20sIHRleHQpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBSb29tIHdpdGhvdXQgYSBVc2VyIGJlaW5nIGxvZ2dlZCBpbi4nKSk7XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRmcm9tOiBjYWNoZS51c2VyLnVpZCxcblx0XHRcdF9jcmVhdGVkOiBEYXRhU3luYy50cygpLFxuXHRcdFx0dGV4dFxuXHRcdH07XG5cdFx0cmV0dXJuIERhdGFTeW5jLnB1c2goYF8vcm9vbXMvJHtyb29tLnVpZH0vbWVzc2FnZXNgLCBkYXRhKVxuXHRcdFx0LnRoZW4ocHVzaFJlZiA9PiBEYXRhU3luYy5nZXQoYF8vcm9vbXMvJHtyb29tLnVpZH0vbWVzc2FnZXMvJHtwdXNoUmVmLm5hbWUoKX1gKSlcblx0XHRcdC50aGVuKHNuYXBEYXRhID0+IG5ldyBNZXNzYWdlKHNuYXBEYXRhLCByb29tLnVpZCkpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ01lc3NhZ2Ujc2VuZCcpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvTWVzc2FnZS5qcyIsIi8qKlxuICoge0BsaW5rIFJvb219IHBhcnRpY2lwYW50XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2lwYW50IHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHBhcnRpY2lwYW50XG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5EYXRhU25hcHNob3R8T2JqZWN0fSBzbmFwRGF0YSBUaGUgZGF0YSBzbmFwc2hvdFxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc25hcERhdGEpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzbmFwRGF0YS52YWwoKSk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHBhcnRpY2lwYW50IHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSBzbmFwRGF0YS5uYW1lKCk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIFBhcnRpY2lwYW50J3Mgcm9sZS4gQ2FuIGJlOlxuXHRcdCAqIC0gT1dORVI6IHRoZSBvd25lci9jcmVhdG9yIG9mIHRoZSB7QGxpbmsgUm9vbX1cblx0XHQgKiAtIE1PREVSQVRPUjogYSBwYXJ0aWNpcGFudCB3aXRoIHtAbGluayBSb29tfSBtYW5hZ2VtZW50IFJpZ2h0c1xuXHRcdCAqIC0gTk9ORTogYmFzaWMgcGFydGljaXBhbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9sZSA9IHZhbHVlcy5yb2xlO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBwYXJ0aWNpcGFudCBzdGF0dXMgQ2FuIGJlOlxuXHRcdCAqIC0gTk9UX0NPTk5FQ1RFRDogdGhlIHBhcnRpY2lwYW50IGRpZCBub3QgYWNjZXB0IHRoZSBpbnZpdGF0aW9uIHlldCBhbmQvb3IgZGlkIG5vdCBqb2luIHRoZSB7QGxpbmsgUm9vbX0geWV0XG5cdFx0ICogLSBDT05ORUNURUQ6IHRoZSBwYXJ0aWNpcGFudCBpcyBpbiB0aGUge0BsaW5rIFJvb219XG5cdFx0ICogLSBXQVNfQ09OTkVDVEVEOiB0aGUgcGFydGljaXBhbnQgbGVmdCB0aGUge0BsaW5rIFJvb219XG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cyA9IHZhbHVlcy5zdGF0dXM7XG5cdFx0LyoqXG5cdFx0ICogSm9pbmVkIGRhdGVcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2pvaW5lZCA9IHZhbHVlcy5fam9pbmVkO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9QYXJ0aWNpcGFudC5qcyIsImltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuLi8uLi9kZWZpbml0aW9ucy9FdmVudHMnO1xuXG4vKipcbiAqIEEgcHVibGlzaGVkIFN0cmVhbVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGUge1xuXHQvKipcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuXHQgKi9cblx0Y29uc3RydWN0b3IodmFsdWVzKSB7XG5cdFx0TG9nLmQoJ1JlbW90ZX5uZXcnLCB2YWx1ZXMpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB1aWQgb2YgdGhlIHJvb20gdGhlIHN0cmVhbSBpcyBwdWJsaXNoZWQgaW5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucm9vbUlkID0gdmFsdWVzLnJvb21JZDtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoaXMgc3RyZWFtXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVpZCA9IHZhbHVlcy51aWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGUgcHVibGlzaGVyIG9mIHRoZSBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuZnJvbSA9IHZhbHVlcy5mcm9tO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudHlwZSA9IHZhbHVlcy50eXBlO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5kZXZpY2UgPSB2YWx1ZXMuZGV2aWNlO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5oZWlnaHQgPSB2YWx1ZXMuaGVpZ2h0O1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy53aWR0aCA9IHZhbHVlcy53aWR0aDtcblx0XHQvKipcblx0XHQgKiBUaGUgbG9jYWwgRE9NIGNvbnRhaW5lciBlbGVtZW50IHdoZXJlIHRoZSB7QGxpbmsgTG9jYWx+bWVkaWF9IGlzIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqL1xuXHRcdHRoaXMuY29udGFpbmVyID0gY2FjaGUuY29uZmlnLnJlbW90ZVN0cmVhbUNvbnRhaW5lcjtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7e2F1ZGlvOiBib29sZWFuLCB2aWRlbzogYm9vbGVhbn19XG5cdFx0ICovXG5cdFx0dGhpcy5tdXRlZCA9IE9iamVjdC5hc3NpZ24oe2F1ZGlvOiBmYWxzZSwgdmlkZW86IGZhbHNlfSwgdmFsdWVzLm11dGVkKTtcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGNhbGxiYWNrcyBmb3IgbXV0ZSBzdGF0dXMgY2hhbmdlXG5cdFx0ICogQHR5cGUge3tNVVRFOiBmdW5jdGlvbltdfX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuXHRcdC8qKlxuXHRcdCAqIFBlZXJDb25uZWN0aW9ucyBhc3NvY2lhdGVkIHRvIHRoaXMgcmVtb3RlIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtQZWVyQ29ubmVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLnBlZXJDb25uZWN0aW9uID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBET00gZWxlbWVudCB3aGVyZSB0aGUgTWVkaWFTdHJlYW0gaXMgZGlzcGxheWVkXG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fVxuXHQgKi9cblx0Z2V0IG5vZGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGVlckNvbm5lY3Rpb24gPyB0aGlzLnBlZXJDb25uZWN0aW9uLm5vZGUgOiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN1YnNjcmliZSB0byB0aGUgc3RyZWFtXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gW3JlbW90ZVN0cmVhbUNvbnRhaW5lcl0gVGhlIGVsZW1lbnQgdGhlIHN0cmVhbSBpcyBhdHRhY2hlZCB0by4gQ2FuIGJlIG51bGwgaWYgYWxyZWFkeSBzcGVjaWZpZWQgaW4gUmVhY2hDb25maWcuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0c3Vic2NyaWJlKHJlbW90ZVN0cmVhbUNvbnRhaW5lcikge1xuXHRcdGlmKCFjYWNoZS51c2VyKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdPbmx5IGFuIGF1dGhlbnRpY2F0ZWQgdXNlciBjYW4gc3Vic2NyaWJlIHRvIGEgUm9vbVxcJ3Mgc3RyZWFtLicpKTtcblx0XHR9XG5cdFx0Ly8gVE9ETzogVGVzdCBpZiBub3QgYWxyZWFkeSBzdWJzY3JpYmVkID9cblx0XHR0aGlzLmNvbnRhaW5lciA9IHJlbW90ZVN0cmVhbUNvbnRhaW5lciB8fCBjYWNoZS5jb25maWcucmVtb3RlU3RyZWFtQ29udGFpbmVyO1xuXHRcdExvZy5kKCdSZW1vdGV+c3Vic2NyaWJlJywgdGhpcy5jb250YWluZXIpO1xuXHRcdHJldHVybiBjYWNoZS5wZWVyQ29ubmVjdGlvbnMuYW5zd2VyKHRoaXMsIHRoaXMuY29udGFpbmVyKVxuXHRcdFx0LnRoZW4ocGMgPT4ge3RoaXMucGVlckNvbm5lY3Rpb24gPSBwYzt9KVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMudXBkYXRlKGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9LyR7Y2FjaGUuZGV2aWNlfWAsIHtcblx0XHRcdFx0dG86IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0XHRfY3JlYXRlZDogRGF0YVN5bmMudHMoKVxuXHRcdFx0fSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gKS5yZW1vdmUoKTtcblx0XHRcdFx0bGV0IHN1YnNjcmliZWQgPSBmYWxzZTtcblx0XHRcdFx0RGF0YVN5bmMub24oYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfWAsICd2YWx1ZScsIHNuYXBEYXRhID0+IHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZXMgPSBzbmFwRGF0YS52YWwoKTtcblx0XHRcdFx0XHRMb2cuZCgnUmVtb3RlfnVwZGF0ZWQnLCB2YWx1ZXMpO1xuXHRcdFx0XHRcdGlmKHZhbHVlcykge1xuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIHR5cGVcblx0XHRcdFx0XHRcdHRoaXMudHlwZSA9IHZhbHVlcy50eXBlO1xuXHRcdFx0XHRcdFx0Ly91cGRhdGUgc3RyZWFtIHNpemVcblx0XHRcdFx0XHRcdGNvbnN0IGhlaWdodCA9IHZhbHVlcy5oZWlnaHQ7XG5cdFx0XHRcdFx0XHRjb25zdCB3aWR0aCA9IHZhbHVlcy53aWR0aDtcblx0XHRcdFx0XHRcdGlmKChoZWlnaHQgfHwgd2lkdGgpICYmIChoZWlnaHQgIT09IHRoaXMuaGVpZ2h0IHx8IHdpZHRoICE9PSB0aGlzLmhlaWdodCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5oZWlnaHQgPSB2YWx1ZXMuaGVpZ2h0O1xuXHRcdFx0XHRcdFx0XHR0aGlzLndpZHRoID0gdmFsdWVzLndpZHRoO1xuXHRcdFx0XHRcdFx0XHRMb2cudyh0aGlzLl9jYWxsYmFja3NbRXZlbnRzLnN0cmVhbS5TSVpFXSk7XG5cdFx0XHRcdFx0XHRcdCh0aGlzLl9jYWxsYmFja3NbRXZlbnRzLnN0cmVhbS5TSVpFXSB8fCBbXSkuZm9yRWFjaChjYiA9PiBjYih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIG11dGUgc3RhdHVzXG5cdFx0XHRcdFx0XHRjb25zdCBtdXRlZCA9IHZhbHVlcy5tdXRlZDtcblx0XHRcdFx0XHRcdGlmKG11dGVkICYmIChtdXRlZC5hdWRpbyAhPT0gdGhpcy5tdXRlZC5hdWRpbyB8fCBtdXRlZC52aWRlbyAhPT0gdGhpcy5tdXRlZC52aWRlbykpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tdXRlZCA9IG11dGVkO1xuXHRcdFx0XHRcdFx0XHRMb2cudyh0aGlzLl9jYWxsYmFja3NbRXZlbnRzLnN0cmVhbS5NVVRFXSk7XG5cdFx0XHRcdFx0XHRcdCh0aGlzLl9jYWxsYmFja3NbRXZlbnRzLnN0cmVhbS5NVVRFXSB8fCBbXSkuZm9yRWFjaChjYiA9PiBjYih0aGlzLm11dGVkKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYoc3Vic2NyaWJlZCkge1xuXHRcdFx0XHRcdFx0TG9nLmkoJ1JlbW90ZSNyZW1vdmVkJywgdGhpcyk7XG5cdFx0XHRcdFx0XHR0aGlzLl9jbG9zZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVtb3RlfnN1YnNjcmliZScpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBzdHJlYW1cblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHR1blN1YnNjcmliZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2xvc2UoZmFsc2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoZSByZW1vdGUgU3RyZWFtXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3RlIENsb3NlIGlzIGluaXRpYXRlZCBieSBwdWJsaXNoZXJcblx0ICogQHJldHVybnMgeyp9XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2xvc2UocmVtb3RlKSB7XG5cdFx0Ly8gQ2FuY2VsIG9uRGlzY29ubmVjdFxuXHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfS8ke2NhY2hlLmRldmljZX1gKS5jYW5jZWwoKTtcblx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBzdHJlYW0gbW9kaWZpY2F0aW9uc1xuXHRcdERhdGFTeW5jLm9mZihgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCwgJ3ZhbHVlJyk7XG5cdFx0Ly8gVW4tc3Vic2NyaWJlXG5cdFx0IXJlbW90ZSAmJiBEYXRhU3luYy5yZW1vdmUoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3Vic2NyaWJlcnMvJHt0aGlzLnVpZH0vJHtjYWNoZS5kZXZpY2V9YCk7XG5cdFx0Ly8gQ2xvc2UgUGVlckNvbm5lY3Rpb25cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlLnBlZXJDb25uZWN0aW9ucy5jbG9zZSh0aGlzLnVpZCwgdGhpcy5kZXZpY2UpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSAoe0BsaW5rIEV2ZW50cy9TdHJlYW19KVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudFxuXHQgKi9cblx0b24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0aWYoRXZlbnRzLnN0cmVhbS5zdXBwb3J0cyhldmVudCkpIHtcblx0XHRcdGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgZXZlbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvU3RyZWFtfSlcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSBUaGUgY2FsbGJhY2sgZm9yIHRoZSBldmVudFxuXHQgKi9cblx0b2ZmKGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdGlmKCFldmVudCkge1xuXHRcdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdFx0fSBlbHNlIGlmKEV2ZW50cy5zdHJlYW0uc3VwcG9ydHMoZXZlbnQpKSB7XG5cdFx0XHRpZighY2FsbGJhY2spIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0uZmlsdGVyKGNiID0+IGNiICE9PSBjYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcblx0ICovXG5cdHVwZGF0ZSh2YWx1ZXMpIHtcblx0XHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goa2V5ID0+IHt0aGlzW2tleV0gPSB2YWx1ZXNba2V5XTt9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvc3RyZWFtL1JlbW90ZS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jyb3dzZXJEZXRhaWxzLCBicm93c2VyU2hpbX0gZnJvbSAnd2VicnRjLWFkYXB0ZXInO1xuaW1wb3J0IFdlYmNvbSBmcm9tICd3ZWJjb20vd2ViY29tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudCBicm93c2VyJ3MgaW5mb3NcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJyb3dzZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIC0gY3VycmVudCBicm93c2VyJ3MgbmFtZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt2ZXJzaW9uXSAtIGN1cnJlbnQgYnJvd3NlcidzIHZlcnNpb25cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluVmVyc2lvbl0gLSBjdXJyZW50IGJyb3dzZXIncyBtaW5pbXVtIHN1cHBvcnRlZCB2ZXJzaW9uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvbXBhdGlibGUgLSBpcyBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydGVkID9cbiAqL1xuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBPYmplY3QuYXNzaWduKHtcblx0Y29tcGF0aWJsZTogIS9cXHMvLnRlc3QoYnJvd3NlckRldGFpbHMuYnJvd3NlcikgJiZcblx0XHQoIWJyb3dzZXJEZXRhaWxzLm1pblZlcnNpb24gfHwgYnJvd3NlckRldGFpbHMudmVyc2lvbiA+PSBicm93c2VyRGV0YWlscy5taW5WZXJzaW9uKVxufSwgYnJvd3NlckRldGFpbHMpO1xuXG5jb25zdCB2ZXJzaW9uID0gYFJlYWNoIHYke1NES19WRVJTSU9OfSB8IFNjaGVtYSAke1NDSEVNQV9WRVJTSU9OfSB8IFdlYmNvbSB2JHtXZWJjb20uU0RLX1ZFUlNJT059YDtcbmxldCBtZXNzYWdlID0gJyc7XG5pZihicm93c2VyLnZlcnNpb24gPT09IG51bGwpIHtcblx0bWVzc2FnZSA9ICdVbnN1cHBvcnRlZCBicm93c2VyOiBicm93c2VyIG11c3Qgc3VwcG9ydCBXZWJSVEMgUGVlci10by1wZWVyIGNvbm5lY3Rpb25zIHRvIHVzZSBSZWFjaCc7XG59IGVsc2UgaWYgKGJyb3dzZXIubWluVmVyc2lvbiAmJiBicm93c2VyLm1pblZlcnNpb24gPiBicm93c2VyLnZlcnNpb24pIHtcblx0bWVzc2FnZSA9IGBVbnN1cHBvcnRlZCBicm93c2VyOiBicm93c2VyIGlzIG91dGRhdGVkLCB1cGRhdGUgdG8gbGF0ZXN0IHZlcnNpb24gKCR7YnJvd3Nlci5taW5WZXJzaW9ufSspYDtcbn0gZWxzZSBpZighYnJvd3NlclNoaW0pe1xuXHRtZXNzYWdlID0gJ05vIHNoaW0gZm9yIHlvdXIgYnJvd3Nlci4gVGhlcmUgbWlnaHQgYSBwcm9ibGVtIHdpdGggeW91ciBwYWNrYWdlLic7XG59XG5cbi8vIExvZyBicm93c2VyIHN0YXR1cyAmIFNES3MgdmVyc2lvbnMgb24gbG9hZFxubGV0IGFyZ3MgPSBbYCR7dmVyc2lvbn0gJHttZXNzYWdlfWBdO1xuaWYoL14oY2hyb21lfGZpcmVmb3gpJC8udGVzdChicm93c2VyLmJyb3dzZXIpKSB7XG5cdGFyZ3MgPSBbXG5cdFx0YCVjICR7dmVyc2lvbn0gJWMgJHttZXNzYWdlfWAsXG5cdFx0YGJhY2tncm91bmQ6ICR7YnJvd3Nlci5jb21wYXRpYmxlID8gJyNmNTAnIDogJ3JlZCd9OyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGRgLFxuXHRcdGBjb2xvcjogJHticm93c2VyLmNvbXBhdGlibGUgPyAnaW5oZXJpdCcgOiAncmVkJ31gXG5cdF07XG59XG5jb25zb2xlLmxvZyguLi5hcmdzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9Ccm93c2VyLmpzIiwiLyoqXG4gKiBWaWRlbyBjb2RlYyBwcmVzZXRzIHRvIHVzZSBmb3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENvZGVjL3ZpZGVvXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gVlA4IFZQOCBpcyB0aGUgb25seSB2aWRlbyBjb2RlYyBvZmZpY2lhbGx5IHN1cHBvcnRlZCBieSBXZWJSVENcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDkgVlA4J3Mgc3VjY2Vzc29yLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IEgyNjQgTVBFRy00IHBhcnQgMTAuIE9ubHkgRmlyZWZveC5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBWUDEwIFN1aXRlZCBmb3IgVUhEIHZpZGVvLiBObyBzdXBwb3J0IHlldFxuICogQHByb3BlcnR5IHtSZWdFeHB9IEgyNjUgSC4yNjQncyBzdWNjZXNzb3IuIE5vIHN1cHBvcnQgeWV0XG4gKi9cbmV4cG9ydCBjb25zdCB2aWRlbyA9IHtcblx0J1ZQOCc6IC9ednA4L2ksXG5cdCdWUDknOiAvXnZwOS9pLFxuXHQnVlAxMCc6IC9ednAxMC9pLFxuXHQnSDI2NCc6IC9eaDI2NC9pLFxuXHQnSDI2NSc6IC9eaDI2NS9pXG59O1xuXG4vKipcbiAqIEF1ZGlvIGNvZGVjIHByZXNldHMgdG8gdXNlIGZvclxuICogQHR5cGVkZWYge09iamVjdH0gQ29kZWMvYXVkaW9cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBPUFVTIE9wdXMgYXVkaW8gY29kZWMge0BsaW5rIGh0dHA6Ly9vcHVzLWNvZGVjLm9yZy99LiBPbmx5IGNob2ljZSBmb3IgaGlnaC1xdWFsaXR5IGF1ZGlvLlxuICogQHByb3BlcnR5IHtSZWdFeHB9IEc3MjIgRy43MjIgYXVkaW8gY29kZWNcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBHNzExIEcuNzExIGF1ZGlvIGNvZGVjXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSVNBQyBpU0FDIGF1ZGlvIGNvZGVjLiBHb29kIGZvciB2b2ljZSBkYXRhLCBidXQgbm90IHN1aXRhYmxlIGZvciBoaWdoLXF1YWxpdHkgYXVkaW8gc3RyZWFtcy5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJU0FDXzE2IGlTQUMgYXVkaW8gY29kZWMgKDE2a0h6KVxuICogQHByb3BlcnR5IHtSZWdFeHB9IElTQUNfMzIgaVNBQyBhdWRpbyBjb2RlYyAoMzJrSHopXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gSUxCQyBpTEJDIGF1ZGlvIGNvZGVjLiBGb3IgYmFkIGNoYW5uZWxzICYgbG93IGJhbmR3aWR0aC5cbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBJTEJDIGlMQkMgYXVkaW8gY29kZWMuIEZvciBiYWQgY2hhbm5lbHMgJiBsb3cgYmFuZHdpZHRoLlxuICovXG5leHBvcnQgY29uc3QgYXVkaW8gPSB7XG5cdCdPUFVTJzogL15vcHVzL2ksXG5cdCdHNzIyJzogL15nNzIyL2ksXG5cdCdHNzExJzogL15nNzExL2ksXG5cdCdJU0FDJzogL15pc2FjL2ksXG5cdCdJU0FDXzE2JzogL15pc2FjXFwvMTYwMDAvaSxcblx0J0lTQUNfMzInOiAvXmlzYWNcXC8zMjAwMC9pLFxuXHQnTFNBQyc6IC9ebHNhYy9pXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWZpbml0aW9ucy9Db2RlYy5qcyIsImltcG9ydCB7YnJvd3Nlcn0gZnJvbSAnLi9kZWZpbml0aW9ucy9Ccm93c2VyJztcbmltcG9ydCBTdHJlYW1UeXBlcyBmcm9tICcuL2RlZmluaXRpb25zL1N0cmVhbVR5cGVzJztcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuL2RlZmluaXRpb25zL0V2ZW50cyc7XG5pbXBvcnQge2F1ZGlvLCB2aWRlb30gZnJvbSAnLi9kZWZpbml0aW9ucy9Db2RlYyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL2NvcmUvVXNlcic7XG5pbXBvcnQgUm9vbSBmcm9tICcuL2NvcmUvUm9vbSc7XG5pbXBvcnQgSW52aXRlIGZyb20gJy4vY29yZS9JbnZpdGUnO1xuaW1wb3J0ICogYXMgRGF0YVN5bmMgZnJvbSAnLi9jb3JlL3V0aWwvRGF0YVN5bmMnO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY29yZS91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuL2NvcmUvdXRpbC9Mb2cnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vY29yZS91dGlsL01lZGlhJztcbmltcG9ydCBXZWJjb20gZnJvbSAnd2ViY29tL3dlYmNvbSc7XG5cbi8qKlxuICogRW50cnkgcG9pbnQgZm9yIFJlYWNoIFNES1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjaCB7XG5cdC8qKlxuXHQgKiBDcmVhdGUgUmVhY2gncyBkYXRhIHN0cnVjdHVyZSB3aGVyZSB0aGUgdXJsIHBvaW50cyB0byAobWlnaHQgbm90IGJlIHRoZSByb290IG9mIHlvdXIgbmFtZXNwYWNlKVxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7c3RyaW5nfFdlYmNvbX0gdXJsIFRoZSB1cmwgb2YgeW91ciBuYW1lc3BhY2Ugb3IgYW4gZXhpc3RpbmcgV2ViY29tIHJlZmVyZW5jZS5cblx0ICogQHBhcmFtIHtDb25maWd9IFtjZmddIFJlYWNoIGNvbmZpZ3VyYXRpb24uIFlvdSBjYW4gcGFzcyBjb25zdHJhaW50cyBoZXJlXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPkluaXQgd2l0aCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uPC9jYXB0aW9uPlxuXHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nKTtcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+SW5pdCBhbmQgc2V0IGNvbnN0cmFpbnRzIGZvciBTRCB2aWRlbyBhbmQgbG9nTGV2ZWwgdG8gJ2luZm8nPC9jYXB0aW9uPlxuXHQgKiB2YXIgbXlSZWFjaCA9IG5ldyBSZWFjaCgnaHR0cHM6Ly9pby5kYXRhc3luYy5vcmFuZ2UuY29tL2Jhc2UvPG15X25hbWVzcGFjZT4nLCB7XG5cdCAqICBjb25zdHJhaW50czogUmVhY2gubWVkaWEuY29uc3RyYWludHMoJ1NEJyksXG5cdCAqICBsb2dMZXZlbDogJ0lORk8nXG5cdCAqIH0pO1xuXHQgKi9cblx0Y29uc3RydWN0b3IodXJsLCBjZmcgPSBudWxsKSB7XG5cdFx0Ly8gU2V0IHNoYXJlZCByZWZlcmVuY2Vcblx0XHRjYWNoZS5iYXNlID0gdXJsO1xuXHRcdC8vIFNldCBzaGFyZWQgY29uZmlndXJhdGlvblxuXHRcdGNhY2hlLmNvbmZpZyA9IGNmZztcblx0XHQvKipcblx0XHQgKiBMaXN0IG9mIGRlY2xhcmVkIGNhbGxiYWNrc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fY2FsbGJhY2tzID0ge307XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHZlcnNpb25zIG9mIFNESyBhbmQgRGF0YU1vZGVsLlRoZSBTY2hlbWEgdmVyc2lvbiBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBBbmRyb2lkICYgaU9TIFNESy5cblx0ICogQHJldHVybiB7e3Nkazogc3RyaW5nLCBzY2hlbWE6IHN0cmluZ319XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG5cdFx0cmV0dXJuIHtzZGs6IFNES19WRVJTSU9OLCBzY2hlbWE6IFNDSEVNQV9WRVJTSU9OfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgc3VwcG9ydGVkIHN0cmVhbSB0eXBlc1xuXHQgKiBAcmV0dXJucyB7U3RyZWFtVHlwZXN9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHR5cGVzKCkge1xuXHRcdHJldHVybiBTdHJlYW1UeXBlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgc3VwcG9ydGVkIGV2ZW50c1xuXHQgKiBAcmV0dXJuIHt7cm9vbTogRXZlbnRzL1Jvb20sIHJlYWNoOiBFdmVudHMvUmVhY2gsIHN0cmVhbTogRXZlbnRzL1N0cmVhbX19XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGV2ZW50cygpIHtcblx0XHRyZXR1cm4ge3Jvb206IEV2ZW50cy5yb29tLCByZWFjaDogRXZlbnRzLnJlYWNoLCBzdHJlYW06IEV2ZW50cy5zdHJlYW0sIGludml0ZTogRXZlbnRzLmludml0ZX07XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGJyb3dzZXIncyBkZXRhaWxzXG5cdCAqIEByZXR1cm4ge0Jyb3dzZXJ9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IGJyb3dzZXIoKSB7XG5cdFx0cmV0dXJuIGJyb3dzZXI7XG5cdH1cblxuXHQvKipcblx0ICogTWVkaWEgdXRpbGl0eSBmdW5jdGlvbnNcblx0ICogQHJldHVybiB7TWVkaWF9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0IG1lZGlhKCkge1xuXHRcdHJldHVybiBNZWRpYTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgY29kZWMgcHJlc2V0cyB0byB1c2Ugd2hlbiBzZXR0aW5nIHtAbGluayBDb25maWcjcHJlZmVycmVkQXVkaW9Db2RlY30gb3Ige0BsaW5rIENvbmZpZyNwcmVmZXJyZWRWaWRlb0NvZGVjfVxuXHQgKiBAcmV0dXJuIHt7YXVkaW86IENvZGVjL2F1ZGlvLCB2aWRlbzogQ29kZWMvdmlkZW99fVxuXHQgKi9cblx0c3RhdGljIGdldCBjb2RlY3MoKSB7XG5cdFx0cmV0dXJuIHthdWRpbywgdmlkZW99O1xuXHR9XG5cdC8qKlxuXHQgKiBEYXRhU3luYyByZWZlcmVuY2Vcblx0ICogQHR5cGUge1dlYmNvbX1cblx0ICovXG5cdGdldCBiYXNlKCkge1xuXHRcdHJldHVybiBjYWNoZS5iYXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBjb25maWd1cmF0aW9uXG5cdCAqIEB0eXBlIHtDb25maWd9XG5cdCAqL1xuXHRnZXQgY29uZmlnKCkge1xuXHRcdHJldHVybiBjYWNoZS5jb25maWc7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGNvbm5lY3RlZCBVc2VyXG5cdCAqIEB0eXBlIHtVc2VyfVxuXHQgKi9cblx0Z2V0IGN1cnJlbnQoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLnVzZXI7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgJiBTaWduLWluIGFzIGEgbmV3IHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBvZiB0aGUgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkIG9mIHRoZSB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgdXNlciAoZGVmYXVsdHMgdG8gZW1haWwpXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbWVtYmVyTWU9ZmFsc2VdIGtlZXAgdXNlciBjb25uZWN0ZWQgP1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyPn1cblx0ICovXG5cdHJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgcmVtZW1iZXJNZSkge1xuXHRcdHJldHVybiBjYWNoZS5iYXNlLmNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKVxuXHRcdFx0LnRoZW4oYXV0aCA9PiB7XG5cdFx0XHRcdGlmKGF1dGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5sb2dpbihlbWFpbCwgcGFzc3dvcmQsIG5hbWUgfHwgZW1haWwsIHJlbWVtYmVyTWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5yZWdpc3RlcicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaWduLWluIGFuIGV4aXN0aW5nIHVzZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBvZiB0aGUgdXNlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkIG9mIHRoZSB1c2VyXG4gXHQgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSBuYW1lIG9mIHRoZSB1c2VyLiBEZWZhdWx0cyB0byB0aGUgdmFsdWUgaW4gYmFzZS5cblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVtZW1iZXJNZT1mYWxzZV0ga2VlcCB1c2VyIGNvbm5lY3RlZCA/XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFVzZXI+fVxuXHQgKi9cblx0bG9naW4oZW1haWwsIHBhc3N3b3JkLCBuYW1lLCByZW1lbWJlck1lID0gZmFsc2UpIHtcblx0XHQvLyBGb3JjZSBsb2dvdXQgdG8gYnlwYXNzIFdlYmNvbSBidWdcblx0XHRsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdGlmKHRoaXMuY3VycmVudCAmJiB0aGlzLmN1cnJlbnQuZW1haWwgIT09IGVtYWlsKSB7XG5cdFx0XHRwID0gdGhpcy5sb2dvdXQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBcblx0XHRcdC50aGVuKCgpID0+IGNhY2hlLmJhc2UuYXV0aFdpdGhQYXNzd29yZCh7ZW1haWwsIHBhc3N3b3JkLCByZW1lbWJlck1lfSkpXG5cdFx0XHQudGhlbihhdXRoID0+IFVzZXIuaW5pdChhdXRoLnVpZCwgbmFtZSkpXG5cdFx0XHQudGhlbih1ID0+IHtcblx0XHRcdFx0Y2FjaGUudXNlciA9IHU7XG5cdFx0XHRcdHJldHVybiB1O1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChMb2cucignUmVhY2h+bG9naW4nKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVzdW1lIHByZXZpb3VzIHNlc3Npb25cblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRyZXN1bWUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdC8vIFJlc3VtZSBzZXNzaW9uXG5cdFx0XHRpZihXZWJjb20uSU5URVJOQUwuUGVyc2lzdGVudFN0b3JhZ2UuZ2V0KCdzZXNzaW9uJykpe1xuXHRcdFx0XHRjYWNoZS5iYXNlLnJlc3VtZSgoZXJyb3IsIGF1dGgpID0+IHtcblx0XHRcdFx0XHRpZihhdXRoICYmICF0aGlzLmN1cnJlbnQpIHtcblx0XHRcdFx0XHRcdFVzZXIuaW5pdChhdXRoLnVpZCkudGhlbih1ID0+IHtcblx0XHRcdFx0XHRcdFx0Y2FjaGUudXNlciA9IHU7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodSk7XG5cdFx0XHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWplY3QobmV3IEVycm9yKCdObyBzZXNzaW9uIHRvIHJlc3VtZScpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaWduLWluIGFuIGFub255bW91cyB1c2VyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXJcblx0ICogQHJldHVybnMge1Byb21pc2U8VXNlcj59XG5cdCAqL1xuXHRhbm9ueW1vdXMobmFtZSkge1xuXHRcdC8vIEZvcmNlIGxvZ291dCB0byBieXBhc3MgV2ViY29tIGJ1Z1xuXHRcdGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0aWYodGhpcy5jdXJyZW50ICYmICghdGhpcy5jdXJyZW50LmFub255bW91cyB8fCB0aGlzLmN1cnJlbnQubmFtZSAhPT0gbmFtZSkpIHtcblx0XHRcdHAgPSB0aGlzLmxvZ291dCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcFxuXHRcdFx0LnRoZW4oKCkgPT4gY2FjaGUuYmFzZS5hdXRoQW5vbnltb3VzbHkoKSlcblx0XHRcdC50aGVuKGF1dGggPT4gVXNlci5pbml0KGF1dGgudWlkLCBuYW1lKSlcblx0XHRcdC50aGVuKHUgPT4ge1xuXHRcdFx0XHRjYWNoZS51c2VyID0gdTtcblx0XHRcdFx0cmV0dXJuIHU7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH5hbm9ueW1vdXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogTG9nb3V0IGN1cnJlbnQgdXNlclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGxvZ291dCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdGlmKHRoaXMuY3VycmVudCAhPSBudWxsKSB7XG5cdFx0XHRcdHAgPSBVc2VyLmRpc2Nvbm5lY3QodGhpcy5jdXJyZW50KTtcblx0XHRcdH1cblx0XHRcdHAudGhlbigoKSA9PiB7XG5cdFx0XHRcdE9iamVjdC5rZXlzKHRoaXMuX2NhbGxiYWNrcykuZm9yRWFjaChcblx0XHRcdFx0XHRldmVudCA9PiBEYXRhU3luYy5vZmYoRXZlbnRzLnJlYWNoLnRvUGF0aChldmVudCkoY2FjaGUudXNlciksIGV2ZW50KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjYWNoZS5iYXNlLmxvZ291dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y2FjaGUudXNlciA9IG51bGw7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZSA9PiB7XG5cdFx0XHRcdExvZy5lKGUpO1xuXHRcdFx0XHRyZWplY3QoZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2YgcmVnaXN0ZXJlZCB1c2Vyc1xuXHQgKiBAZXhwZXJpbWVudGFsIFNpbmNlICdzZWFyY2gnIGFuZCAncGFnaW5nJyBmZWF0dXJlcyBhcmUgbm90IHlldCBpbXBsZW1lbnRlZCBpbiBEYXRhU3luYywgdGhpcyBjYWxsIGNhbiBsZWFkIHRvIGEgbG90IGRhdGEgYmVpbmcgZXhjaGFuZ2VkIG92ZXIgdGhlIFdlYlNvY2tldC5cblx0ICogQXZvaWQgaXQgaWYgeW91ciB1c2VycyBiYXNlIGlzIHByZXR0eSBsYXJnZS5cblx0ICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVkZT1mYWxzZV0gSW5jbHVkZSBjdXJyZW50IHVzZXIgaW4gdXNlcidzIGxpc3Rcblx0ICogQHJldHVybiB7UHJvbWlzZTxVc2VyW10sIEVycm9yPn1cblx0ICovXG5cdHVzZXJzKGluY2x1ZGUpIHtcblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdCgndXNlcnMnLCBVc2VyKVxuXHRcdFx0LnRoZW4odXNlcnMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIWluY2x1ZGUgJiYgdXNlcnMgJiYgdGhpcy5jdXJyZW50ID8gdXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci51aWQgIT09IHRoaXMuY3VycmVudC51aWQpIDogdXNlcnM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdSZWFjaH51c2VycycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGxpc3Qgb2Ygcm9vbXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxSb29tW10sIEVycm9yPn1cblx0ICovXG5cdHJvb21zKCkge1xuXHRcdHJldHVybiBEYXRhU3luYy5saXN0KCdyb29tcycsIFJvb20pXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofnJvb21zJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbGlzdCBvZiBpbnZpdGVzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8SW52aXRlW10sIEVycm9yPn1cblx0ICovXG5cdGludml0ZXMoKSB7XG5cdFx0aWYoIXRoaXMuY3VycmVudCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IGxpc3QgaW52aXRlcyB3aXRob3V0IGEgVXNlciBiZWluZyBsb2dnZWQgaW4uJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gRGF0YVN5bmMubGlzdChgXy9pbnZpdGVzLyR7dGhpcy5jdXJyZW50LnVpZH1gLCBJbnZpdGUpXG5cdFx0XHQuY2F0Y2goTG9nLnIoJ1JlYWNofmludml0ZXMnKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgKHtAbGluayBFdmVudHMvUmVhY2h9KS4gQ2FuIGJlOlxuXHQgKiAtIFVTRVJfQURERURcblx0ICogLSBVU0VSX0NIQU5HRURcblx0ICogLSBVU0VSX1JFTU9WRURcblx0ICogLSBST09NX0FEREVEXG5cdCAqIC0gUk9PTV9DSEFOR0VEXG5cdCAqIC0gUk9PTV9SRU1PVkVEXG5cdCAqIC0gSU5WSVRFX0FEREVEXG5cdCAqIC0gSU5WSVRFX0NIQU5HRURcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZvciB0aGUgZXZlbnQsIHRoZSBhcmd1bWVudHMgZGVwZW5kcyBvbiB0aGUgdHlwZSBvZiBldmVudDpcblx0ICogLSBVU0VSXyo6IGNhbGxiYWNrKHtAbGluayBVc2VyfSB1KVxuXHQgKiAtIFJPT01fKjogY2FsbGJhY2soe0BsaW5rIFJvb219IHIpXG5cdCAqIC0gSU5WSVRFXyo6IGNhbGxiYWNrKHtAbGluayBJbnZpdGV9IGkpXG5cdCAqIEBwYXJhbSB7V2ViY29tL2FwaS5RdWVyeX5jYW5jZWxDYWxsYmFja30gW2NhbmNlbENhbGxiYWNrXSBUaGUgZXJyb3IgY2FsbGJhY2sgZm9yIHRoZSBldmVudCwgdGFrZXMgYW4gRXJyb3IgYXMgb25seSBhcmd1bWVudFxuXHQgKi9cblx0b24oZXZlbnQsIGNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaykge1xuXHRcdGNvbnN0IHBhdGggPSBFdmVudHMucmVhY2gudG9QYXRoKGV2ZW50KShjYWNoZS51c2VyKTtcblx0XHRpZihwYXRoKSB7XG5cdFx0XHRjb25zdCBjbHMgPSBFdmVudHMucmVhY2gudG9DbGFzcyhldmVudCk7XG5cdFx0XHRjb25zdCBjYiA9IHNuYXBEYXRhID0+IHtcblx0XHRcdFx0Y29uc3QgZCA9IGNscyA/IG5ldyBjbHMoc25hcERhdGEpIDogbnVsbDtcblx0XHRcdFx0TG9nLmkoYFJlYWNofm9uKCR7ZXZlbnR9KWAsIGQpO1xuXHRcdFx0XHRjYWxsYmFjayhkKTtcblx0XHRcdH07XG5cdFx0XHREYXRhU3luYy5vbihwYXRoLCBldmVudCwgY2IsIGNhbmNlbENhbGxiYWNrKTtcblx0XHRcdGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaChjYik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyByb29tXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZV0gVGhlIHJvb20gbmFtZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gW2V4dHJhXSBFeHRyYSBpbmZvcm1hdGlvbnNcblx0ICogQHBhcmFtIHtib29sZWFufSBbcHVibGljUm9vbT1mYWxzZV0gSW5kaWNhdGVzIHB1YmxpYyByb29tXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPFJvb20+fVxuXHQgKi9cblx0Y3JlYXRlUm9vbShuYW1lLCBleHRyYSwgcHVibGljUm9vbSA9IGZhbHNlKSB7XG5cdFx0aWYoIXRoaXMuY3VycmVudCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBhIFJvb20gd2l0aG91dCBhIFVzZXIgYmVpbmcgbG9nZ2VkIGluLicpKTtcblx0XHR9XG5cdFx0cmV0dXJuIFJvb20uY3JlYXRlKG5hbWUsIGV4dHJhLCBwdWJsaWNSb29tKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYSBsaXN0IG9mIGFsbCBvcGVuZWQge0BsaW5rIFBlZXJDb25uZWN0aW9ufXNcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGdldCBwZWVyQ29ubmVjdGlvbnMgKCkge1xuXHRcdHJldHVybiBjYWNoZS5wZWVyQ29ubmVjdGlvbnMuc3RhY2tzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHtAbGluayBSb29tfSBmcm9tIGl0cyBgdWlkYFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSByb29tJ3MgVUlEXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxSb29tPn1cblx0ICovXG5cdGdldFJvb20gKHVpZCkge1xuXHRcdHJldHVybiBSb29tLmdldCh1aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIHtAbGluayBVc2VyfSBmcm9tIGl0cyBgdWlkYFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIFRoZSB1c2VyJ3MgVUlEXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlLjxVc2VyPn1cblx0ICovXG5cdGdldFVzZXIgKHVpZCkge1xuXHRcdHJldHVybiBVc2VyLmdldCh1aWQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY2guanMiLCJpbXBvcnQgbWVkaWEgZnJvbSAnLi91dGlsL01lZGlhJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4vdXRpbC9EYXRhU3luYyc7XG5pbXBvcnQgKiBhcyBMb2cgZnJvbSAnLi91dGlsL0xvZyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi91dGlsL2NhY2hlJztcblxuY29uc3QgX2ZsYXR0ZW5TZXJ2ZXJzID0gc2VydmVycyA9PiB7XG5cdGNvbnN0IF9leHBhbmQgPSBzZXJ2ZXJzLm1hcChzZXJ2ZXIgPT4ge1xuXHRcdGNvbnN0IHt1c2VybmFtZSwgY3JlZGVudGlhbCwgdXJscywgdXJsfSA9IHNlcnZlcjtcblx0XHRjb25zdCB1cmlzID0gdXJscyB8fCB1cmw7XG5cdFx0aWYodHlwZW9mIHVyaXMgIT09ICdzdHJpbmcnICkge1xuXHRcdFx0cmV0dXJuIHVyaXMubWFwKHVyaSA9PiAoe3VzZXJuYW1lLCBjcmVkZW50aWFsLCB1cmxzOiB1cml9KSk7XG5cdFx0fVxuXHRcdHJldHVybiBbc2VydmVyXTtcblx0fSk7XG5cdHJldHVybiBbXS5jb25jYXQoLi4uX2V4cGFuZCk7XG59O1xuXG4vKipcbiAqIFRoZSBSZWFjaCBjb25maWd1cmF0aW9uIG9iamVjdFxuICogQGNsYXNzIENvbmZpZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWcge1xuXHQvKipcblx0ICogQ3JlYXRlIGNvbmZpZ3VyYXRpb25cblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIG9ialxuXHQgKi9cblx0Y29uc3RydWN0b3Iob2JqKSB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGRlZmF1bHQgbWVkaWEgY29uc3RyYWludHMuIFRoZXNlIGNhbiBiZSBvdmVycmlkZGVuIHdoZW4gc3Vic2NyaWJpbmcgdG8gYSBzdHJlYW0uXG5cdFx0ICogQHR5cGUge01lZGlhU3RyZWFtQ29uc3RyYWludHN9XG5cdFx0ICovXG5cdFx0dGhpcy5jb25zdHJhaW50cyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgaWQvZWxlbWVudCBkb20gZWxlbWVudCB0aGF0IHdpbGwgaG9sZCB0aGUgbG9jYWwgdmlkZW8vYXVkaW8gZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8RWxlbWVudH1cblx0XHQgKi9cblx0XHR0aGlzLmxvY2FsU3RyZWFtQ29udGFpbmVyID0gbnVsbDtcblx0XHQvKipcblx0XHQgKiBUaGUgaWQvZWxlbWVudCBkb20gZWxlbWVudCB0aGF0IHdpbGwgaG9sZCB0aGUgcmVtb3RlIHZpZGVvL2F1ZGlvIGVsZW1lbnRcblx0XHQgKiBAdHlwZSB7c3RyaW5nfEVsZW1lbnR9XG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdGVTdHJlYW1Db250YWluZXIgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIHByZWZlcnJlZCB2aWRlbyBDb2RlYy4gVGFrZXMgYSBSZWdFeHAgbWF0Y2hpbmcgdGhlIGNvZGVjIG5hbWUgYW5kIHNhbXBsZSByYXRlLlxuXHRcdCAqIFByZWRlZmluZWQgdmFsdWVzIGNhbiBiZSBmb3VuZCBpbiB7QGxpbmsgQ29kZWMvdmlkZW99XG5cdFx0ICogQHR5cGUge1JlZ0V4cH1cblx0XHQgKiBAZXhhbXBsZSA8Y2FwdGlvbj5QcmVmZXIgVlA5PC9jYXB0aW9uPlxuXHRcdCAqIHZhciBteVJlYWNoID0gbmV3IFJlYWNoKCdodHRwczovL2lvLmRhdGFzeW5jLm9yYW5nZS5jb20vYmFzZS88bXlfbmFtZXNwYWNlPicsIHtcblx0XHQgKiAgcHJlZmVycmVkVmlkZW9Db2RlYzogUmVhY2guY29kZWNzLnZpZGVvLlZQOVxuXHRcdCAqIH0pO1xuXHRcdCAqL1xuXHRcdHRoaXMucHJlZmVycmVkVmlkZW9Db2RlYyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgcHJlZmVycmVkIGF1ZGlvIENvZGVjLiBUYWtlcyBhIFJlZ0V4cCBtYXRjaGluZyB0aGUgY29kZWMgbmFtZSBhbmQgc2FtcGxlIHJhdGUuXG5cdFx0ICogUHJlZGVmaW5lZCB2YWx1ZXMgY2FuIGJlIGZvdW5kIGluIHtAbGluayBDb2RlYy9hdWRpb31cblx0XHQgKiBAdHlwZSB7UmVnRXhwfVxuXHRcdCAqIEBleGFtcGxlIDxjYXB0aW9uPlByZWZlciBvcHVzPC9jYXB0aW9uPlxuXHRcdCAqIHZhciBteVJlYWNoID0gbmV3IFJlYWNoKCdodHRwczovL2lvLmRhdGFzeW5jLm9yYW5nZS5jb20vYmFzZS88bXlfbmFtZXNwYWNlPicsIHtcblx0XHQgKiAgcHJlZmVycmVkQXVkaW9Db2RlYzogUmVhY2guY29kZWNzLmF1ZGlvLk9QVVNcblx0XHQgKiB9KTtcblx0XHQgKi9cblx0XHR0aGlzLnByZWZlcnJlZEF1ZGlvQ29kZWMgPSBudWxsO1xuXG5cdFx0Ly8gUG9wdWxhdGUgd2l0aCBkZWZhdWx0IHZhbHVlc1xuXHRcdHRoaXMucmVzZXQoKTtcblxuXHRcdC8vIFBvcHVsYXRlIHdpdGggZGF0YVxuXHRcdHRoaXMuYXNzaWduKG9iaik7XG5cblx0XHQvLyBSZWFkIElDRSBzZXJ2ZXJzIGZyb20gc2VydmVyXG5cdFx0RGF0YVN5bmMuZ2V0KCdfL2ljZScpLnRoZW4oc25hcERhdGEgPT4ge1xuXHRcdFx0aWYoc25hcERhdGEpIHtcblx0XHRcdFx0dGhpcy5pY2VTZXJ2ZXJzID0gc25hcERhdGEudmFsKCk7XG5cdFx0XHRcdExvZy5pKCdJQ0VTZXJ2ZXJzJywgdGhpcy5pY2VTZXJ2ZXJzLmxlbmd0aCA+IDAgPyB0aGlzLmljZVNlcnZlcnMgOiAnTm9uZScpO1xuXHRcdFx0fVxuXHRcdH0sIGUgPT4gTG9nLmQoJ0lDRVNlcnZlcnMnLCBlKSk7XG5cblx0XHQvLyBUT0RPICNGZWF0OiBBZGQgYm9vbGVhbiBwcm9wIHRvIHJlcXVlc3QgcGVybWlzc2lvbiBvbiBzdGFydCwgc2RwRWRpdG9yIChmb3IgdXNlciBkZWZpbmVkIFNEUCBtb2RpZmljYXRpb25zKVxuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2lnbiBuZXcgY29uZiB2YWx1ZXNcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtvYmplY3R9IG9iaiB0aGUgbmV3IGNvbmYgdmFsdWVzXG5cdCAqL1xuXHRhc3NpZ24ob2JqKSB7XG5cdFx0T2JqZWN0LmtleXMob2JqIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7dGhpc1trZXldID0gb2JqW2tleV07fSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGxvZyBsZXZlbCAoREVCVUcsIElORk8sIFdBUk4sIEVSUk9SKVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0c2V0IGxvZ0xldmVsKGxldmVsKSB7XG5cdFx0Y2FjaGUubG9nTGV2ZWwgPSBsZXZlbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbG9nIGxldmVsIChERUJVRywgSU5GTywgV0FSTiwgRVJST1IpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXQgbG9nTGV2ZWwoKSB7XG5cdFx0cmV0dXJuIGNhY2hlLmxvZ0xldmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgVFVSTi9TVFVOIHNlcnZlcnMgdG8gdXNlIGZvciBJQ0UuIFRoaXMgbGlzdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBJQ0Ugc2VydmVycyBkZWNsYXJlZCBpbiB0aGUgbmFtZXNwYWNlICgqKl8vaWNlKiopLlxuXHQgKiBAdHlwZSB7SUNFU2VydmVyW119XG5cdCAqL1xuXHRzZXQgaWNlU2VydmVycyhzZXJ2ZXJzKSB7XG5cdFx0TG9nLmQoJ0NvbmZpZ35zZXR+aWNlU2VydmVycycsIHNlcnZlcnMpO1xuXHRcdGlmKHNlcnZlcnMpIHtcblx0XHRcdGlmICghdGhpcy5faWNlU2VydmVycykge1xuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogQGlnbm9yZVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dGhpcy5faWNlU2VydmVycyA9IFtdLmNvbmNhdChzZXJ2ZXJzIHx8IFtdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGZsYXR0ZW4gZXhpc3Rpbmdcblx0XHRcdFx0Y29uc3QgX2N1cnJlbnRTZXJ2ZXJzID0gX2ZsYXR0ZW5TZXJ2ZXJzKHRoaXMuX2ljZVNlcnZlcnMpO1xuXHRcdFx0XHQvLyBmbGF0dGVuIG5ld1xuXHRcdFx0XHRjb25zdCBfbmV3U2VydmVycyA9IF9mbGF0dGVuU2VydmVycyhzZXJ2ZXJzKTtcblx0XHRcdFx0Ly8gQWRkIG9ubHkgdGhlIG1pc3Npbmcgc2VydmVyc1xuXHRcdFx0XHRfbmV3U2VydmVycy5mb3JFYWNoKG5ld1NlcnZlciA9PiB7XG5cdFx0XHRcdFx0aWYoIV9jdXJyZW50U2VydmVycy5zb21lKHNlcnZlciA9PlxuXHRcdFx0XHRcdFx0XHRzZXJ2ZXIudXJscyA9PT0gbmV3U2VydmVyLnVybHMgJiZcblx0XHRcdFx0XHRcdFx0c2VydmVyLnVzZXJuYW1lID09PSBuZXdTZXJ2ZXIudXNlcm5hbWUgJiZcblx0XHRcdFx0XHRcdFx0c2VydmVyLmNyZWRlbnRpYWwgPT09IG5ld1NlcnZlci5jcmVkZW50aWFsKSkge1xuXHRcdFx0XHRcdFx0X2N1cnJlbnRTZXJ2ZXJzLnB1c2gobmV3U2VydmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBSZS1ncm91cCBieSB1c2VybmFtZS9jcmVkZW50aWFsXG5cdFx0XHRcdHRoaXMuX2ljZVNlcnZlcnMgPSBfY3VycmVudFNlcnZlcnMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHt1c2VybmFtZSwgY3JlZGVudGlhbCwgdXJsc30gPSBjdXJyZW50O1xuXHRcdFx0XHRcdGNvbnN0IGlkeCA9IHByZXZpb3VzLmZpbmRJbmRleChzID0+IHMudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIHMuY3JlZGVudGlhbCA9PT0gY3JlZGVudGlhbCk7XG5cdFx0XHRcdFx0aWYoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdHByZXZpb3VzW2lkeF0udXJscy5wdXNoKHVybHMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwcmV2aW91cy5wdXNoKHt1c2VybmFtZSwgY3JlZGVudGlhbCwgdXJsczogW3VybHNdfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBwcmV2aW91cztcblx0XHRcdFx0fSwgW10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIFRVUk4vU1RVTiBzZXJ2ZXJzIHRvIHVzZSBmb3IgSUNFLiBUaGlzIGxpc3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgSUNFIHNlcnZlcnMgZGVjbGFyZWQgaW4gdGhlIG5hbWVzcGFjZSAoKipfL2ljZSoqKS5cblx0ICogQHR5cGUge0lDRVNlcnZlcltdfVxuXHQgKi9cblx0Z2V0IGljZVNlcnZlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2ljZVNlcnZlcnMgfHwgW1xuXHRcdFx0e1xuXHRcdFx0XHR1c2VybmFtZTogJ2FkbWluJyxcblx0XHRcdFx0Y3JlZGVudGlhbDogJ3dlYmNvbTEyMzQnLFxuXHRcdFx0XHR1cmxzOiBbXG5cdFx0XHRcdFx0J3R1cm5zOnR1cm4xLndlYmNvbS5vcmFuZ2UuY29tOjQ0MycsXG5cdFx0XHRcdFx0J3R1cm46dHVybjEud2ViY29tLm9yYW5nZS5jb206NDQzP3RyYW5zcG9ydD10Y3AnLFxuXHRcdFx0XHRcdCd0dXJuOnR1cm4xLndlYmNvbS5vcmFuZ2UuY29tOjM0Nzg/dHJhbnNwb3J0PXRjcCdcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHQvKipcblx0ICogUmVzZXRzIGNvbmZpZ3VyYXRpb24gdG8gZGVmYXVsdCB2YWx1ZXNcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0cmVzZXQgKCkge1xuXHRcdHRoaXMuYXNzaWduKHtcblx0XHRcdGNvbnN0cmFpbnRzOiBtZWRpYS5jb25zdHJhaW50cygpLFxuXHRcdFx0bG9nTGV2ZWw6ICdFUlJPUidcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvQ29uZmlnLmpzIiwiLyoqXG4gKiBVc2VyIGRldmljZVxuICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlIHtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGRldmljZVxuXHQgKiBAcGFyYW0ge1dlYmNvbS9hcGkuRGF0YVNuYXBzaG90fG9iamVjdH0gc25hcERhdGEgVGhlIGRhdGEgc25hcHNob3Rcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKHNuYXBEYXRhKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc25hcERhdGEudmFsKCkpO1xuXHRcdC8qKlxuXHRcdCAqIERldmljZSdzIHVuaXF1ZSBpZFxuXHRcdCAqIEB0eXBlIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMudWlkID0gc25hcERhdGEubmFtZSgpO1xuXHRcdC8qKlxuXHRcdCAqIERldmljZSdzIE9TXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLm9zID0gdmFsdWVzLm9zO1xuXHRcdC8qKlxuXHRcdCAqIERldmljZSdzIHVzZXJBZ2VudFxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51c2VyQWdlbnQgPSB2YWx1ZXMudXNlckFnZW50O1xuXHRcdC8qKlxuXHRcdCAqIERldmljZSdzIGxhc3Qga25vdyBzdGF0dXNcblx0XHQgKiAtIENPTk5FQ1RFRFxuXHRcdCAqIC0gTk9UX0NPTk5FQ1RFRFxuXHRcdCAqIC0gU0xFRVBJTkdcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gdmFsdWVzLnN0YXR1cztcblx0XHQvKipcblx0XHQgKiBEZXZpY2UncyBzZGtcblx0XHQgKiBAdHlwZSB7e3JlYWNoOiBzdHJpbmcsIHdlYmNvbTogc3RyaW5nfX1cblx0XHQgKi9cblx0XHR0aGlzLnNkayA9IHZhbHVlcy5zZGs7XG5cdFx0Ly8gVE9ETyAjRmVhdDogQWRkICdleHRyYScgcHJvcGVydHkgZm9yIHVucmVzdHJpY3RlZCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uID9cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvRGV2aWNlLmpzIiwiaW1wb3J0IFN0cmVhbVR5cGVzIGZyb20gJy4uLy4uL2RlZmluaXRpb25zL1N0cmVhbVR5cGVzJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuLi91dGlsL0xvZyc7XG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vdXRpbC9jYWNoZSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi91dGlsL01lZGlhJztcbmltcG9ydCB7Tk9ORSwgQ0xPU0VELCBDTE9TSU5HLCBDT05ORUNURUR9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcblxuY29uc3QgX2ZhY2luZ01vZGVzID0gW01lZGlhLmZhY2luZ01vZGUuVVNFUiwgTWVkaWEuZmFjaW5nTW9kZS5FTlZJUk9OTUVOVF07XG5cbmNvbnN0IF9nZXRDb25zdHJhaW50VmFsdWUgPSAoY29uc3RyYWludHMsIHByb3ApID0+IHtcblx0cmV0dXJuIGNvbnN0cmFpbnRzW3Byb3BdLmV4YWN0IHx8IGNvbnN0cmFpbnRzW3Byb3BdLmlkZWFsIHx8IGNvbnN0cmFpbnRzW3Byb3BdO1xufTtcblxuY29uc3QgX3NldENvbnN0cmFpblZhbHVlID0gKGNvbnN0cmFpbnRzLCBwcm9wLCBvdGhlciwgdmFsdWUpID0+IHtcblx0Y29uc3RyYWludHNbcHJvcF0gPSB7ZXhhY3Q6IHZhbHVlfTtcblx0ZGVsZXRlIGNvbnN0cmFpbnRzW290aGVyXTtcbn07XG5cbi8qKlxuICogVGhlIGxvY2FsIHN0cmVhbVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbCB7XG5cdC8qKlxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcblx0XHQvKipcblx0XHQgKiBUaGUgdWlkIG9mIHRoZSByb29tIHRoZSBzdHJlYW0gaXMgcHVibGlzaGVkIGluXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJvb21JZCA9IHZhbHVlcy5yb29tSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHVpZCBvZiB0aGlzIHN0cmVhbVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy51aWQgPSB2YWx1ZXMudWlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSBzdHJlYW1cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudHlwZSA9IHZhbHVlcy50eXBlO1xuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyBpZiBhIHRyYWNrIGlzIG11dGVkXG5cdFx0ICogQHR5cGUge3thdWRpbzogYm9vbGVhbiwgdmlkZW86IGJvb2xlYW59fVxuXHRcdCAqL1xuXHRcdHRoaXMubXV0ZWQgPSBPYmplY3QuYXNzaWduKHthdWRpbzogZmFsc2UsIHZpZGVvOiBmYWxzZX0sIHZhbHVlcy5tdXRlZCk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGxvY2FsIERPTSBjb250YWluZXIgZWxlbWVudCB3aGVyZSB0aGUge0BsaW5rIExvY2Fsfm1lZGlhfSBpcyBkaXNwbGF5ZWRcblx0XHQgKiBAdHlwZSB7RWxlbWVudH1cblx0ICAqL1xuXHRcdHRoaXMuY29udGFpbmVyID0gdmFsdWVzLmNvbnRhaW5lciB8fCBjYWNoZS5jb25maWcubG9jYWxTdHJlYW1Db250YWluZXI7XG5cdFx0LyoqXG5cdCAgKiBUaGUgbG9jYWwgRE9NIG1lZGlhIGVsZW1lbnQgd2hlcmUgdGhlIHtAbGluayBMb2NhbH5tZWRpYX0gaXMgZGlzcGxheWVkXG5cdCAgKiBAdHlwZSB7RWxlbWVudH1cblx0ICAqL1xuXHRcdHRoaXMubm9kZSA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogTGlzdCBvZiB0aGUgUGVlckNvbm5lY3Rpb25zIGFzc29jaWF0ZWQgdG8gdGhpcyBsb2NhbCBzdHJlYW1cblx0XHQgKiBAdHlwZSB7UGVlckNvbm5lY3Rpb25bXX1cblx0XHQgKi9cblx0XHR0aGlzLnBlZXJDb25uZWN0aW9ucyA9IFtdO1xuXHRcdC8qKlxuXHRcdCAqIExvY2FsIHN0cmVhbSBzdGF0dXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzID0gTk9ORTtcblx0XHQvKipcblx0XHQgKiBpcyB0aGUgdmlkZW8gaXMgbG9hZGVkIGludCB0aGUgbG9jYWwgRE9NIG1lZGlhIGVsZW1lbnRcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLmlzVmlkZW9Mb2FkZWQgPSBmYWxzZTtcblx0XHQvKipcblx0XHQgKiBAYWNjZXNzIHByaXZhdGVcblx0XHQgKiBAdHlwZSB7e2F1ZGlvOiBzdHJpbmcsIHZpZGVvOiBzdHJpbmd9fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2lucHV0cyA9IHt9O1xuXG5cdFx0Ly8gU2V0IGNvbnN0cmFpbnRzXG5cdFx0dGhpcy5jb25zdHJhaW50cyA9IHZhbHVlcy5jb25zdHJhaW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgTWVkaWEgQ29uc3RyYWludHMuIChkZWZhdWx0cyB0byBnbG9iYWwgY29uZmlnKVxuXHQgKiBAcGFyYW0ge01lZGlhQ29uc3RyYWludHN9IGNvbnN0cmFpbnRzXG5cdCAqL1xuXHRzZXQgY29uc3RyYWludHMoY29uc3RyYWludHMpIHtcblx0XHRjb25zdFxuXHRcdFx0dmFsdWVzID0gY29uc3RyYWludHMgfHwgY2FjaGUuY29uZmlnLmNvbnN0cmFpbnRzLFxuXHRcdFx0ZGVmYXVsdENvbnN0cmFpbnRzID0gTWVkaWEuY29uc3RyYWludHMoKTtcblx0XHRbJ2F1ZGlvJywgJ3ZpZGVvJ10uZm9yRWFjaCh0eXBlID0+IHtcblx0XHRcdGlmKCF+dGhpcy50eXBlLmluZGV4T2YodHlwZSkpIHtcblx0XHRcdFx0dmFsdWVzW3R5cGVdID0gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYoIXZhbHVlc1t0eXBlXSl7XG5cdFx0XHRcdHZhbHVlc1t0eXBlXSA9IGRlZmF1bHRDb25zdHJhaW50c1t0eXBlXTtcblx0XHRcdH1cblx0XHRcdGlmKHZhbHVlc1t0eXBlXS5kZXZpY2VJZCB8fCB2YWx1ZXNbdHlwZV0uZmFjaW5nTW9kZSkge1xuXHRcdFx0XHR0aGlzLl9pbnB1dHNbdHlwZV0gPSBfZ2V0Q29uc3RyYWludFZhbHVlKFxuXHRcdFx0XHRcdHZhbHVlc1t0eXBlXSxcblx0XHRcdFx0XHR2YWx1ZXNbdHlwZV0uZmFjaW5nTW9kZSA/ICdmYWNpbmdNb2RlJyA6ICdkZXZpY2VJZCdcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRMb2cuZCgnTG9jYWx+c2V0I2NvbnRyYWludHMnLCB2YWx1ZXMpO1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9jb25zdHJhaW50cyA9IHZhbHVlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgTWVkaWEgQ29uc3RyYWludHMuIChkZWZhdWx0cyB0byBnbG9iYWwgY29uZmlnKVxuXHQgKiBAdHlwZSB7TWVkaWFDb25zdHJhaW50c31cblx0ICovXG5cdGdldCBjb25zdHJhaW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy5fY29uc3RyYWludHM7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgc3RyZWFtIGNvbnN0cmFpbnRzIGFuZCByZXRyaWV2ZSB0aGUgbmV3IE1lZGlhU3RyZWFtXG5cdCAqIEBwYXJhbSBjb25zdHJhaW50c1xuXHQgKiBAcmV0dXJucyB7KnxQcm9taXNlLjxUUmVzdWx0Pn1cblx0ICovXG5cdHVwZGF0ZUNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XG5cdFx0TG9nLmQoJ0xvY2FsfnVwZGF0ZUNvbnN0cmFpbnRzJywgY29uc3RyYWludHMpO1xuXHRcdHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcblx0XHRyZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEodGhpcy5jb25zdHJhaW50cylcblx0XHRcdC50aGVuKG1lZGlhID0+IHtcblx0XHRcdFx0WydhdWRpbycsICd2aWRlbyddLmZvckVhY2goa2luZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY29uc3RyYWludHNWYWx1ZSA9IHRoaXMuY29uc3RyYWludHNba2luZF07XG5cdFx0XHRcdFx0aWYoY29uc3RyYWludHNWYWx1ZSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvbnN0cmFpbnRzVmFsdWUuZGV2aWNlSWQgfHwgY29uc3RyYWludHNWYWx1ZS5mYWNpbmdNb2RlKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2lucHV0c1traW5kXSA9IF9nZXRDb25zdHJhaW50VmFsdWUoXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3RyYWludHNWYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRjb25zdHJhaW50c1ZhbHVlLmZhY2luZ01vZGUgPyAnZmFjaW5nTW9kZScgOiAnZGV2aWNlSWQnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5tZWRpYSA9IG1lZGlhO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGFzc29jaWF0ZWQgTWVkaWFTdHJlYW1cblx0ICogQHR5cGUge01lZGlhU3RyZWFtfVxuXHQgKi9cblx0c2V0IG1lZGlhIChtZWRpYVN0cmVhbSkge1xuXHRcdGlmKG1lZGlhU3RyZWFtKSB7XG5cdFx0XHRpZighKG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlIG1lZGlhIE1VU1QgYmUgYSBNZWRpYVN0cmVhbScpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjaGVja0RldmljZXMgPSB7fTtcblx0XHRcdG1lZGlhU3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4ge1xuXHRcdFx0XHQvLyBSZXNldCBtdXRlXG5cdFx0XHRcdHRyYWNrLmVuYWJsZWQgPSAhdGhpcy5tdXRlZFt0cmFjay5raW5kXTtcblx0XHRcdFx0Ly8gR2V0IGRldmljZSBsYWJlbFxuXHRcdFx0XHRpZighdGhpcy5faW5wdXRzW3RyYWNrLmtpbmRdKSB7XG5cdFx0XHRcdFx0Y2hlY2tEZXZpY2VzW3RyYWNrLmtpbmRdID0gdHJhY2subGFiZWw7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Ly8gVHJ5IHRvIGdldCBkZXZpY2VJZCBmcm9tIGxhYmVsXG5cdFx0XHRpZihPYmplY3Qua2V5cyhjaGVja0RldmljZXMpLmxlbmd0aCkge1xuXHRcdFx0XHRNZWRpYS5kZXZpY2VzKCkudGhlbihkZXZpY2VzID0+IHtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhjaGVja0RldmljZXMpLmZvckVhY2goa2luZCA9PiB7XG5cdFx0XHRcdFx0XHRpZihkZXZpY2VzW2Ake2tpbmR9aW5wdXRgXSl7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRldmljZUlkcyA9IGRldmljZXNbYCR7a2luZH1pbnB1dGBdXG5cdFx0XHRcdFx0XHRcdFx0LmZpbHRlcihkZXZpY2UgPT4gZGV2aWNlLmxhYmVsLmxlbmd0aCAmJiBkZXZpY2UubGFiZWwgPT09IGNoZWNrRGV2aWNlc1traW5kXSk7XG5cdFx0XHRcdFx0XHRcdGlmKGRldmljZUlkcy5sZW5ndGggPT09IDEgJiYgIXRoaXMuX2lucHV0c1traW5kXSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2lucHV0c1traW5kXSA9IGRldmljZUlkc1swXS5kZXZpY2VJZDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIERpc3BsYXlcblx0XHRcdHRoaXMubm9kZSA9IE1lZGlhLmF0dGFjaFN0cmVhbShtZWRpYVN0cmVhbSwgdGhpcy5jb250YWluZXIsIHRoaXMubm9kZSwgMCk7XG5cdFx0XHR0aGlzLm5vZGUub25sb2FkZWRkYXRhID0gKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmlzVmlkZW9Mb2FkZWQgPSB0cnVlO1xuXHRcdFx0fTtcblx0XHRcdHRoaXMuc3RhdHVzID0gQ09OTkVDVEVEO1xuXHRcdFx0TG9nLmQoJ0xvY2FsfnNldCBtZWRpYScsIHttZWRpYVN0cmVhbX0sIHRoaXMubm9kZSk7XG5cdFx0XHQvLyBSZW5lZ290aWF0ZVxuXHRcdFx0dGhpcy5wZWVyQ29ubmVjdGlvbnMuZm9yRWFjaChwZWVyQ29ubmVjdGlvbiA9PiBwZWVyQ29ubmVjdGlvbi5yZW5lZ290aWF0ZSh0aGlzLl9tZWRpYSwgbWVkaWFTdHJlYW0pKTtcblx0XHR9IGVsc2UgaWYodGhpcy5tZWRpYSAmJiAhbWVkaWFTdHJlYW0pIHtcblx0XHRcdC8vIFJlbW92ZSBub2RlXG5cdFx0XHR0aGlzLm5vZGUuc3JjT2JqZWN0ID0gbnVsbDtcblx0XHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHR0aGlzLm5vZGUgPSBudWxsO1xuXHRcdFx0Ly8gU3RvcCBzdHJlYW1cblx0XHRcdHRoaXMubWVkaWEuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuXHRcdFx0Ly8gQ2xvc2UgUGVlckNvbm5lY3Rpb25zXG5cdFx0XHR0aGlzLnBlZXJDb25uZWN0aW9ucy5mb3JFYWNoKHBlZXJDb25uZWN0aW9uID0+IHBlZXJDb25uZWN0aW9uLmNsb3NlKCkpO1xuXHRcdH1cblx0XHQvLyBTYXZlXG5cdFx0LyoqXG5cdFx0ICogQGlnbm9yZVxuXHRcdCAqL1xuXHRcdHRoaXMuX21lZGlhID0gbWVkaWFTdHJlYW07XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGFzc29jaWF0ZWQgTWVkaWFTdHJlYW1cblx0ICogQHR5cGUge01lZGlhU3RyZWFtfVxuXHQgKi9cblx0Z2V0IG1lZGlhICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWVkaWE7XG5cdH1cblxuXHQvKipcblx0ICogTXV0ZSBhIHRyYWNrIG9mIGEgU3RyZWFtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHJhY2s9QVVESU9dIFRoZSB0cmFjayB0byBtdXRlLiAoQVVESU8sIFZJREVPLCBBVURJT19WSURFTylcblx0ICogQHBhcmFtIHtib29sZWFufSBbc3RhdGU9dHJ1ZV0gdHJ1ZSBmb3IgbXV0ZSAmIGZhbHNlIGZvciB1bi1tdXRlXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPm11dGUgdmlkZW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS5tdXRlKFJlYWNoLnQuVklERU8pXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPm11dGUgYXVkaW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS5tdXRlKFJlYWNoLnQuQVVESU8pXG5cdCAqIC8vIG9yXG5cdCAqIHN0cmVhbS5tdXRlKClcblx0ICovXG5cdG11dGUodHJhY2sgPSBTdHJlYW1UeXBlcy5BVURJTywgc3RhdGUgPSB0cnVlKSB7XG5cdFx0TG9nLmQoJ211dGUnLCB0cmFjaywgc3RhdGUpO1xuXHRcdGxldCBhdWRpbyA9IHRoaXMubXV0ZWQuYXVkaW8sIHZpZGVvID0gdGhpcy5tdXRlZC52aWRlbywgdHJhY2tzO1xuXHRcdHN3aXRjaCAodHJhY2spIHtcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuQVVESU86XG5cdFx0XHRcdGF1ZGlvID0gc3RhdGU7XG5cdFx0XHRcdHRyYWNrcyA9IHRoaXMubWVkaWEuZ2V0QXVkaW9UcmFja3MoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFN0cmVhbVR5cGVzLlZJREVPOlxuXHRcdFx0Y2FzZSBTdHJlYW1UeXBlcy5TQ1JFRU5fU0hBUklORzpcblx0XHRcdFx0dmlkZW8gPSBzdGF0ZTtcblx0XHRcdFx0dHJhY2tzID0gdGhpcy5tZWRpYS5nZXRWaWRlb1RyYWNrcygpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU3RyZWFtVHlwZXMuQVVESU9fVklERU86XG5cdFx0XHRcdGF1ZGlvID0gc3RhdGU7XG5cdFx0XHRcdHZpZGVvID0gc3RhdGU7XG5cdFx0XHRcdHRyYWNrcyA9IHRoaXMubWVkaWEuZ2V0VHJhY2tzKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvLyBNdXRlIG1lZGlhIHRyYWNrc1xuXHRcdHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHt0cmFjay5lbmFibGVkID0gIXN0YXRlO30pO1xuXHRcdC8vIFNpZ25hbCBzdWJzY3JpYmVyc1xuXHRcdHRoaXMubXV0ZWQgPSB7YXVkaW8sIHZpZGVvfTtcblx0XHREYXRhU3luYy5zZXQoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfS9tdXRlZGAsIHRoaXMubXV0ZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuLW11dGUgYSB0cmFjayBvZiBhIFN0cmVhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3RyYWNrPUFVRElPXSBUaGUgdHJhY2sgdG8gbXV0ZS4gKEFVRElPLCBWSURFTywgQVVESU9fVklERU8pXG5cdCAqIEBleGFtcGxlIDxjYXB0aW9uPlVuLW11dGUgdmlkZW88L2NhcHRpb24+XG5cdCAqIHN0cmVhbS51bk11dGUoUmVhY2gudC5WSURFTylcblx0ICogQGV4YW1wbGUgPGNhcHRpb24+VW4tbXV0ZSBhdWRpbzwvY2FwdGlvbj5cblx0ICogc3RyZWFtLnVuTXV0ZShSZWFjaC50LkFVRElPKVxuXHQgKiAvLyBvclxuXHQgKiBzdHJlYW0udW5NdXRlKClcblx0ICovXG5cdHVuTXV0ZSh0cmFjaykge1xuXHRcdHRoaXMubXV0ZSh0cmFjaywgZmFsc2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgc3RyZWFtIGZvciBwdWJsaXNoZWQgbGlzdCwgY2xvc2VzIGFzc29jaWF0ZWQgUGVlckNvbm5lY3Rpb25zIGFuZCBzdG9wcyBjdXJyZW50IE1lZGlhU3RyZWFtXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y2xvc2UoKSB7XG5cdFx0aWYoIX5bQ0xPU0VELCBDTE9TSU5HXS5pbmRleE9mKHRoaXMuc3RhdHVzKSkge1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBDTE9TSU5HO1xuXHRcdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgdG8gU3Vic2NyaWJlcnNcblx0XHRcdGNvbnN0IHBhdGggPSBgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdWJzY3JpYmVycy8ke3RoaXMudWlkfWA7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgJ2NoaWxkX2FkZGVkJyk7XG5cdFx0XHREYXRhU3luYy5vZmYocGF0aCwgJ2NoaWxkX3JlbW92ZWQnKTtcblx0XHRcdC8vIENhbmNlbCBvbkRpc2Nvbm5lY3RzXG5cdFx0XHREYXRhU3luYy5vbkRpc2Nvbm5lY3QoYF8vcm9vbXMvJHt0aGlzLnJvb21JZH0vc3RyZWFtcy8ke3RoaXMudWlkfWApLmNhbmNlbCgpO1xuXHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7dGhpcy5yb29tSWR9L3N1YnNjcmliZXJzLyR7dGhpcy51aWR9YCkuY2FuY2VsKCk7XG5cdFx0XHQvLyBSZW1vdmUgc3Vic2NyaWJlcnNcblx0XHRcdERhdGFTeW5jLnJlbW92ZShwYXRoKTtcblx0XHRcdC8vIFJlbW92ZSBzdHJlYW1cblx0XHRcdERhdGFTeW5jLnJlbW92ZShgXy9yb29tcy8ke3RoaXMucm9vbUlkfS9zdHJlYW1zLyR7dGhpcy51aWR9YCk7XG5cdFx0XHR0aGlzLm1lZGlhID0gbnVsbDtcblx0XHRcdC8vIENsb3NlXG5cdFx0XHR0aGlzLnN0YXR1cyA9IENMT1NFRDtcblx0XHR9XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnN0YXR1cyk7XG5cdH1cblxuXHQvKipcblx0ICogU3dpdGNoIHZpZGVvIGlucHV0IGRldmljZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2RldmljZUlkXSBBIHZpZGVvIGlucHV0IGRldmljZSBJZCBvciB0aGUgYGZhY2luZ01vZGVgIHZhbHVlXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsLCBFcnJvcj59XG5cdCAqL1xuXHRzd2l0Y2hDYW1lcmEoZGV2aWNlSWQpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3dpdGNoRGV2aWNlKFN0cmVhbVR5cGVzLlZJREVPLCBkZXZpY2VJZCk7XG5cdH1cblxuXHQvKipcblx0ICogU3dpdGNoIGF1ZGlvIGlucHV0IGRldmljZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2RldmljZUlkXSBBIGF1ZGlvIGlucHV0IGRldmljZSBJZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuXHQgKi9cblx0c3dpdGNoTWljcm9waG9uZShkZXZpY2VJZCkge1xuXHRcdHJldHVybiB0aGlzLl9zd2l0Y2hEZXZpY2UoU3RyZWFtVHlwZXMuQVVESU8sIGRldmljZUlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTd2l0Y2ggaW5wdXQgZGV2aWNlXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2luZCBUaGUga2luZCBvZiBkZXZpY2UgdG8gc3dpdGNoXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZGV2aWNlSWRdIEFuIGlucHV0IGRldmljZSBpZFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2NhbCwgRXJyb3I+fVxuICAgICAqL1xuXHRfc3dpdGNoRGV2aWNlKGtpbmQsIGRldmljZUlkKSB7XG5cdFx0TG9nLmQoJ0xvY2Fsfl9zd2l0Y2hEZXZpY2UnLCBraW5kLCBkZXZpY2VJZCk7XG5cdFx0aWYodGhpcy5tZWRpYS5nZXRUcmFja3MoKS5zb21lKHRyYWNrID0+IHRyYWNrLmtpbmQgPT09IGtpbmQpKSB7XG5cdFx0XHRsZXQgbmV4dCA9IFByb21pc2UucmVzb2x2ZShkZXZpY2VJZCk7XG5cdFx0XHRjb25zdCBjdXJyZW50TW9kZUlkeCA9IF9mYWNpbmdNb2Rlcy5pbmRleE9mKHRoaXMuX2lucHV0c1traW5kXSk7XG5cdFx0XHRpZighZGV2aWNlSWQgJiYgISF+Y3VycmVudE1vZGVJZHgpIHtcblx0XHRcdFx0Ly8gTG9vcCBmYWNpbmdNb2Rlc1xuXHRcdFx0XHRuZXh0ID0gUHJvbWlzZS5yZXNvbHZlKF9mYWNpbmdNb2Rlc1soY3VycmVudE1vZGVJZHggKyAxKSAlIF9mYWNpbmdNb2Rlcy5sZW5ndGhdKTtcblx0XHRcdH0gZWxzZSBpZighfl9mYWNpbmdNb2Rlcy5pbmRleE9mKGRldmljZUlkKSkge1xuXHRcdFx0XHQvLyBMb29wIGRldmljZUlkc1xuXHRcdFx0XHRuZXh0ID0gTWVkaWEuZGV2aWNlcygpXG5cdFx0XHRcdFx0LnRoZW4oZCA9PiB7XG5cdFx0XHRcdFx0XHQvLyBkZXZpY2VzIElEc1xuXHRcdFx0XHRcdFx0Y29uc3QgZGV2aWNlcyA9IGRbYCR7a2luZH1pbnB1dGBdLm1hcChtZWRpYURldmljZSA9PiBtZWRpYURldmljZS5kZXZpY2VJZCk7XG5cdFx0XHRcdFx0XHQvLyBTb3J0IHRvIGVuc3VyZSBzYW1lIG9yZGVyXG5cdFx0XHRcdFx0XHRkZXZpY2VzLnNvcnQoKTtcblx0XHRcdFx0XHRcdC8vIE5ldyBkZXZpY2Vcblx0XHRcdFx0XHRcdGxldCBuZXh0RGV2aWNlID0gZGV2aWNlSWQ7XG5cdFx0XHRcdFx0XHRpZihkZXZpY2VJZCAmJiAhZGV2aWNlcy5zb21lKGRldmljZSA9PiBkZXZpY2UgPT09IGRldmljZUlkKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBVbmtub3duICR7a2luZH0gZGV2aWNlYCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYoIWRldmljZUlkICYmIGRldmljZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgaWR4ID0gdGhpcy5faW5wdXRzW2tpbmRdID8gZGV2aWNlcy5maW5kSW5kZXgodiA9PiB2ID09PSB0aGlzLl9pbnB1dHNba2luZF0sIHRoaXMpIDogMDtcblx0XHRcdFx0XHRcdFx0bmV4dERldmljZSA9IGRldmljZXNbKytpZHggJSBkZXZpY2VzLmxlbmd0aF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV4dERldmljZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5leHQgPSBQcm9taXNlLnJlc29sdmUoZGV2aWNlSWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbmV4dFxuXHRcdFx0XHQudGhlbihkZXZpY2UgPT4ge1xuXHRcdFx0XHRcdGlmKHRoaXMuX2lucHV0c1traW5kXSAhPT0gZGV2aWNlKSB7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgdmlkZW8gc3RyZWFtc1xuXHRcdFx0XHRcdFx0dGhpcy5faW5wdXRzW2tpbmRdID0gZGV2aWNlO1xuXHRcdFx0XHRcdFx0Ly8gU3RvcCB0cmFja3Ncblx0XHRcdFx0XHRcdHRoaXMubWVkaWEuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIGNvbnN0cmFpbnRzXG5cdFx0XHRcdFx0XHRjb25zdCBjb25zdHJhaW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uc3RyYWludHMpO1xuXHRcdFx0XHRcdFx0bGV0IHByb3BzID0gWydmYWNpbmdNb2RlJywgJ2RldmljZUlkJ107XG5cdFx0XHRcdFx0XHRpZighfl9mYWNpbmdNb2Rlcy5pbmRleE9mKGRldmljZSkpIHtcblx0XHRcdFx0XHRcdFx0cHJvcHMgPSBwcm9wcy5yZXZlcnNlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRfc2V0Q29uc3RyYWluVmFsdWUoY29uc3RyYWludHNba2luZF0sIHByb3BzWzBdLCBwcm9wc1sxXSwgZGV2aWNlKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH5fc3dpdGNoRGV2aWNlJywga2luZCwgY29uc3RyYWludHMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudXBkYXRlQ29uc3RyYWludHMoY29uc3RyYWludHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKCkgPT4gdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYEN1cnJlbnQgc3RyZWFtIGRvZXMgbm90IGNvbnRhaW4gYSAke2tpbmR9IHRyYWNrYCkpO1xuXHR9XG5cdC8qKlxuXHQgKiBQdWJsaXNoIGEgbG9jYWwgc3RyZWFtXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByb29tSWQgVGhlIHJvb20gSWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHN0cmVhbSB0eXBlLCBzZWUge0BsaW5rIFN0cmVhbVR5cGVzfSBmb3IgcG9zc2libGUgdmFsdWVzXG5cdCAqIEBwYXJhbSB7P0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgZWxlbWVudCB0aGUgc3RyZWFtIGlzIGF0dGFjaGVkIHRvLlxuXHQgKiBAcGFyYW0gez9NZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBbY29uc3RyYWludHNdIFRoZSBzdHJlYW0gY29uc3RyYWludHMuIElmIG5vdCBkZWZpbmVkIHRoZSBjb25zdHJhaW50cyBkZWZpbmVkIGluIFJlYWNoQ29uZmlnIHdpbGwgYmUgdXNlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8TG9jYWwsIEVycm9yPn1cblx0ICovXG5cdHN0YXRpYyBzaGFyZShyb29tSWQsIHR5cGUsIGNvbnRhaW5lciwgY29uc3RyYWludHMpIHtcblx0XHRpZighY2FjaGUudXNlcikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignT25seSBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuIHNoYXJlIGEgc3RyZWFtLicpKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RyZWFtTWV0YURhdGEgPSB7XG5cdFx0XHRcdGZyb206IGNhY2hlLnVzZXIudWlkLFxuXHRcdFx0XHRkZXZpY2U6IGNhY2hlLmRldmljZSxcblx0XHRcdFx0dHlwZVxuXHRcdFx0fSxcblx0XHRcdHNoYXJlZFN0cmVhbSA9IG5ldyBMb2NhbChPYmplY3QuYXNzaWduKHtyb29tSWQsIGNvbnN0cmFpbnRzLCBjb250YWluZXJ9LCBzdHJlYW1NZXRhRGF0YSkpO1xuXHRcdExvZy5kKCdMb2NhbH5zaGFyZScsIHtzaGFyZWRTdHJlYW19KTtcblx0XHRyZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoc2hhcmVkU3RyZWFtLmNvbnN0cmFpbnRzKVxuXHRcdFx0LnRoZW4obWVkaWEgPT4ge1xuXHRcdFx0XHRzaGFyZWRTdHJlYW0ubWVkaWEgPSBtZWRpYTtcblx0XHRcdH0pXG5cdFx0XHQvLyBHb3QgTWVkaWFTdHJlYW0sIHB1Ymxpc2ggaXRcblx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnB1c2goYF8vcm9vbXMvJHtyb29tSWR9L3N0cmVhbXNgLCBzdHJlYW1NZXRhRGF0YSkpXG5cdFx0XHQudGhlbihzdHJlYW1SZWYgPT4ge1xuXHRcdFx0XHRzaGFyZWRTdHJlYW0udWlkID0gc3RyZWFtUmVmLm5hbWUoKTtcblx0XHRcdFx0aWYgKHNoYXJlZFN0cmVhbS5pc1ZpZGVvTG9hZGVkKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RyZWFtU2l6ZSA9IHtcblx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHR3aWR0aDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9XaWR0aCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2hhcmVkU3RyZWFtLm5vZGUub25sb2FkZWRkYXRhID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzdHJlYW1TaXplID0ge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IHNoYXJlZFN0cmVhbS5ub2RlLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9XaWR0aCxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRzdHJlYW1SZWYudXBkYXRlKHN0cmVhbVNpemUpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNoYXJlZFN0cmVhbS5ub2RlICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0cmVhbVNpemUgPSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogc2hhcmVkU3RyZWFtLm5vZGUudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBzaGFyZWRTdHJlYW0ubm9kZS52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHN0cmVhbVJlZi51cGRhdGUoc3RyZWFtU2l6ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdC8vIFNhdmUgc2hhcmVkU3RyZWFtXG5cdFx0XHRcdGNhY2hlLnN0cmVhbXMuc2hhcmVkW3NoYXJlZFN0cmVhbS51aWRdID0gc2hhcmVkU3RyZWFtO1xuXHRcdFx0XHQvLyBSZW1vdmUgc2hhcmVkIHN0cmVhbSBvbiBEaXNjb25uZWN0XG5cdFx0XHRcdERhdGFTeW5jLm9uRGlzY29ubmVjdChgXy9yb29tcy8ke3Jvb21JZH0vc3RyZWFtcy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFJlbW92ZSBzaGFyZWQgc3RyZWFtIG9uIERpc2Nvbm5lY3Rcblx0XHRcdFx0RGF0YVN5bmMub25EaXNjb25uZWN0KGBfL3Jvb21zLyR7cm9vbUlkfS9zdWJzY3JpYmVycy8ke3NoYXJlZFN0cmVhbS51aWR9YCkucmVtb3ZlKCk7XG5cdFx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byBzdWJzY3JpYmVyc1xuXHRcdFx0XHRjb25zdFxuXHRcdFx0XHRcdHBhdGggPSBgXy9yb29tcy8ke3NoYXJlZFN0cmVhbS5yb29tSWR9L3N1YnNjcmliZXJzLyR7c2hhcmVkU3RyZWFtLnVpZH1gLFxuXHRcdFx0XHRcdHZhbHVlID0gc25hcERhdGEgPT4gT2JqZWN0LmFzc2lnbih7ZGV2aWNlOiBzbmFwRGF0YS5uYW1lKCl9LCBzbmFwRGF0YS52YWwoKSB8fCB7fSk7XG5cdFx0XHRcdERhdGFTeW5jLm9uKHBhdGgsICdjaGlsZF9hZGRlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH5zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjYWNoZS5wZWVyQ29ubmVjdGlvbnMub2ZmZXIoc2hhcmVkU3RyZWFtLCBzdWJzY3JpYmVyKVxuXHRcdFx0XHRcdFx0XHQudGhlbihwYyA9PiBzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zLnB1c2gocGMpKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHREYXRhU3luYy5vbihwYXRoLCAnY2hpbGRfcmVtb3ZlZCcsXG5cdFx0XHRcdFx0c25hcERhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2NyaWJlciA9IHZhbHVlKHNuYXBEYXRhKTtcblx0XHRcdFx0XHRcdExvZy5kKCdMb2NhbH51bi1zdWJzY3JpYmVkJywgc3Vic2NyaWJlcik7XG5cdFx0XHRcdFx0XHRjb25zdCBjbG9zZWRQQyA9IGNhY2hlLnBlZXJDb25uZWN0aW9ucy5jbG9zZShzaGFyZWRTdHJlYW0udWlkLCBzdWJzY3JpYmVyLmRldmljZSk7XG5cdFx0XHRcdFx0XHRzaGFyZWRTdHJlYW0ucGVlckNvbm5lY3Rpb25zID0gc2hhcmVkU3RyZWFtLnBlZXJDb25uZWN0aW9ucy5maWx0ZXIocGMgPT4gcGMgIT09IGNsb3NlZFBDKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdExvZy5lLmJpbmQoTG9nKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRMb2cuZCgnTG9jYWx+c2hhcmVkJywge3NoYXJlZFN0cmVhbX0pO1xuXHRcdFx0XHRyZXR1cm4gc2hhcmVkU3RyZWFtO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9Mb2NhbC5qcyIsImltcG9ydCBSZW1vdGUgZnJvbSAnLi9SZW1vdGUnO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmVhbU1hbmFnZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQGFjY2VzcyBwcm90ZWN0ZWRcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8qKlxuXHRcdCAqIFNoYXJlZCBsb2NhbCBzdHJlYW1zXG5cdFx0ICogQHR5cGUge3sqOiBMb2NhbH19XG5cdFx0ICovXG5cdFx0dGhpcy5zaGFyZWQgPSB7fTtcblx0XHQvKipcblx0XHQgKiBTdWJzY3JpYmVkIHJlbW90ZSBzdHJlYW1zXG5cdFx0ICogQHR5cGUge3sqOiBSZW1vdGV9fVxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3RlID0ge307XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgUmVtb3RlIHN0cmVhbSByZWZlcmVuY2Vcblx0ICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbURhdGFcblx0ICogQHJldHVybnMge1JlbW90ZX1cblx0ICovXG5cdGdldFJlbW90ZShzdHJlYW1EYXRhKSB7XG5cdFx0bGV0IHJlbW90ZVN0cmVhbSA9IHRoaXMucmVtb3RlW3N0cmVhbURhdGEudWlkXTtcblx0XHRpZihyZW1vdGVTdHJlYW0pIHtcblx0XHRcdHJlbW90ZVN0cmVhbS51cGRhdGUoc3RyZWFtRGF0YSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3RlW3N0cmVhbURhdGEudWlkXSA9IHJlbW90ZVN0cmVhbSA9IG5ldyBSZW1vdGUoc3RyZWFtRGF0YSk7XG5cdFx0fVxuXHRcdHJldHVybiByZW1vdGVTdHJlYW07XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGEgUmVtb3RlIHN0cmVhbSByZWZlcmVuY2Vcblx0ICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbURhdGFcblx0ICogQHJldHVybnMge1JlbW90ZX1cblx0ICovXG5cdGdldFNoYXJlZChzdHJlYW1EYXRhKSB7XG5cdFx0Ly8gVE9ETzogSWYgaXQgZG9lcyBub3QgZXhpc3RzIGxvY2FsbHkgYXMgaXQgc2hvdWxkLCBtYXliZSB3ZSBzaG91bGQgcmVtb3ZlIGl0ID9cblx0XHRyZXR1cm4gdGhpcy5zaGFyZWRbc3RyZWFtRGF0YS51aWRdO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3N0cmVhbS9TdHJlYW1NYW5hZ2VyLmpzIiwiLypnbG9iYWwgUlRDUGVlckNvbm5lY3Rpb24qL1xuLypnbG9iYWwgUlRDUnRwU2VuZGVyKi9cbmltcG9ydCBjYWNoZSBmcm9tICcuLi91dGlsL2NhY2hlJztcbmltcG9ydCAqIGFzIExvZyBmcm9tICcuLi91dGlsL0xvZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vdXRpbC9NZWRpYSc7XG5pbXBvcnQgKiBhcyBEYXRhU3luYyBmcm9tICcuLi91dGlsL0RhdGFTeW5jJztcbmltcG9ydCB7T1BFTkVELCBDTE9TSU5HLCBDTE9TRUR9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCAnY29yZS1qcy9mbi9hcnJheS9maW5kJztcblxuY29uc3QgRHRsc1NydHBLZXlBZ3JlZW1lbnQgPSB7RHRsc1NydHBLZXlBZ3JlZW1lbnQ6IHRydWV9O1xuY29uc3Qgc2RwQ29uc3RyYWludHMgPSByZWNlaXZlID0+ICh7T2ZmZXJUb1JlY2VpdmVBdWRpbzogcmVjZWl2ZSwgT2ZmZXJUb1JlY2VpdmVWaWRlbzogcmVjZWl2ZX0pO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBkaXNjb25uZWN0ZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEID0gJ2Rpc2Nvbm5lY3RlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNvbm5lY3RlZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT05ORUNURUQ9ICdjb25uZWN0ZWQnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBjb21wbGV0ZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEID0gJ2NvbXBsZXRlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGNoZWNraW5nXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HID0gJ2NoZWNraW5nJztcbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2xvc2VkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRCA9ICdjbG9zZWQnO1xuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBmYWlsZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRkFJTEVEID0gJ2ZhaWxlZCc7XG4vKipcbiAqIElDRSBjb25uZWN0aW9uIHN0YXR1cyA6IGFub3RoZXIgc3RhdHVzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX09USEVSPSAnb3RoZXInO1xuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmNvbnN0IF90b0pTT04gPSBvID0+IG8udG9KU09OICYmIHR5cGVvZiBvLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyA/IG8udG9KU09OKCkgOiBvO1xuLyoqXG4gKiBUaGUgUGVlckNvbm5lY3Rpb24uIEEgUGVlckNvbm5lY3Rpb24gd2lsbCBvbmx5IGNvbmNlcm4gb25lIE1lZGlhU3RyZWFtLlxuICogQGNsYXNzIFBlZXJDb25uZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uIHtcblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGFja0lkIFRoZSBXZWJSVEMgc3RhY2sgSURcblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmVhbUlkIFRoZSBTdHJlYW0gVUlEXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVEZXZpY2UgVGhlIHJlbW90ZSBkZXZpY2UncyBVSURcblx0ICogQHBhcmFtIHtib29sZWFufSBwdWJsaXNoIFB1Ymxpc2ggb3IgU3Vic2NyaWJlID9cblx0ICovXG5cdGNvbnN0cnVjdG9yKHN0YWNrSWQsIHN0cmVhbUlkLCByZW1vdGVEZXZpY2UsIHB1Ymxpc2gpIHtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RhY2sgaWRlbnRpZmllci4gVXNlZCB0byBpZGVudGlmeSBleGNoYW5nZXMgYmV0d2VlbiAyIGRldmljZXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhY2tJZCA9IHN0YWNrSWQ7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHN0cmVhbSBpZC4gKE9uZSBzdHJlYW0gcGVyIFJUQ1BlZXJDb25uZWN0aW9uKVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zdHJlYW1JZCA9IHN0cmVhbUlkO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSByZW1vdGUgZGV2aWNlIElkXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnJlbW90ZURldmljZSA9IHJlbW90ZURldmljZTtcblx0XHQvKipcblx0XHQgKiBQYXRoIGZvciBsb2NhbCBzaWduYWxpemF0aW9uXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLl9sb2NhbFBhdGggPSBgXy93ZWJydGMvJHt0aGlzLnN0YWNrSWR9LyR7dGhpcy5zdHJlYW1JZH0vJHtjYWNoZS5kZXZpY2V9YDtcblx0XHQvKipcblx0XHQgKiBQYXRoIGZvciBsb2NhbCBzaWduYWxpemF0aW9uXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLl9yZW1vdGVQYXRoID0gYF8vd2VicnRjLyR7dGhpcy5zdGFja0lkfS8ke3RoaXMuc3RyZWFtSWR9LyR7dGhpcy5yZW1vdGVEZXZpY2V9YDtcblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgaWYgdGhlIFBlZXJDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkLiAoVXNlZnVsIGZvciByZW5lZ290aWF0aW9uKS5cblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLm5lZ290aWF0ZWQgPSBmYWxzZTtcblx0XHQvKipcblx0XHQgKiBUaGUgRE9NIGVsZW1lbnQgd2hlcmUgdGhlIHJlbW90ZSBNZWRpYVN0cmVhbSB3aWxsIGJlIGRpc3BsYXllZFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLm5vZGUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBET00gZWxlbWVudCBjb250YWluZyB0aGUgbWVkaWEgZWxlbWVudFxuXHRcdCAqIEB0eXBlIHtFbGVtZW50fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGFjdHVhbCBSVENQZWVyQ29ubmVjdGlvblxuXHRcdCAqIEB0eXBlIHtSVENQZWVyQ29ubmVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLnBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHRpY2VTZXJ2ZXJzOiBjYWNoZS5jb25maWcuaWNlU2VydmVyc1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0b3B0aW9uYWw6IFtEdGxzU3J0cEtleUFncmVlbWVudF0sXG5cdFx0XHRcdG1hbmRhdG9yeTogc2RwQ29uc3RyYWludHMoIXB1Ymxpc2gpXG5cdFx0XHR9XG5cdFx0KTtcblx0XHQvLyBIYW5kbGUgSUNFIGNhbmRpZGF0ZXNcblx0XHR0aGlzLnBjLm9uaWNlY2FuZGlkYXRlID0gZSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMubmVnb3RpYXRlZCAmJiBlLmNhbmRpZGF0ZSkge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b25pY2VjYW5kaWRhdGUnLCBlLmNhbmRpZGF0ZSk7XG5cdFx0XHRcdERhdGFTeW5jLnB1c2goYCR7dGhpcy5fbG9jYWxQYXRofS9pY2VgLCBfdG9KU09OKGUuY2FuZGlkYXRlKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR0aGlzLnBjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgdGhpcy5wYyk7XG5cdFx0XHRjb25zdCBpY2VDb25uZWN0aW9uU3RhdGUgPSB0aGlzLnBjLmljZUNvbm5lY3Rpb25TdGF0ZTtcblx0XHRcdHN3aXRjaCAoaWNlQ29ubmVjdGlvblN0YXRlKSB7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkc6XG5cdFx0XHRcdFx0Ly8gTm90aGluZyB0byBkbyB5ZXRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT05ORUNURUQ6XG5cdFx0XHRcdFx0dGhpcy5fYXR0YWNoU3RyZWFtKCk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEOlxuXHRcdFx0XHRcdHRoaXMuX3JlbW90ZUlDRUNhbmRpZGF0ZXMoZmFsc2UpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIElDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRDpcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9GQUlMRUQ6XG5cdFx0XHRcdFx0TG9nLmUoJ1BlZXJDb25uZWN0aW9ufnN0YXRlRGlzY29ubmVjdGVkJywgJ0Rpc2Nvbm5lY3QgUGVlckNvbm5lY3Rpb24nKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DTE9TRUQ6XG5cdFx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnN0YXRlY2xvc2VkJywgJ0Nsb3NlIFBlZXJDb25uZWN0aW9uJyk7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5uZWdvdGlhdGVkID0gdGhpcy5uZWdvdGlhdGVkIHx8IHRoaXMuaXNDb25uZWN0ZWQ7XG5cdFx0fTtcblxuXHRcdHRoaXMucGMub25pY2VnYXRoZXJpbmdzdGF0ZWNoYW5nZSA9ICgpID0+IHtcblx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlJywgdGhpcy5wYy5pY2VHYXRoZXJpbmdTdGF0ZSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFBlZXJDb25uZWN0aW9uIHN0YXR1c1xuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9zdGF0dXMgPSBPUEVORUQ7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIElDRSBDYW5kaWRhdGVzIGRpc2NvdmVyeVxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtib29sZWFufSBsaXN0ZW4gSW5kaWNhdGVzIGlmIHdlIHNob3VsZCBsaXN0ZW4gdG8gbmV3IElDRSBjYW5kaWRhdGVzXG5cdCAqL1xuXHRfcmVtb3RlSUNFQ2FuZGlkYXRlcyhsaXN0ZW4pIHtcblx0XHRjb25zdFxuXHRcdFx0cGF0aCA9IGAke3RoaXMuX3JlbW90ZVBhdGh9L2ljZWAsXG5cdFx0XHRldmVudCA9ICdjaGlsZF9hZGRlZCc7XG5cdFx0aWYobGlzdGVuKSB7XG5cdFx0XHQvLyBkb24ndCBsaXN0ZW4gdG8gaWNlIGNhbmRpZGF0ZXMgaWYgcGMgaXMgYWxyZWFkeSB1cCAocmVuZWdvdGlhdGlvbilcblx0XHRcdERhdGFTeW5jLm9uKHBhdGgsIGV2ZW50LCBzbmFwID0+IHtcblx0XHRcdFx0Y29uc3QgY2FuZGlkYXRlID0gc25hcC52YWwoKTtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufmFkZEljZUNhbmRpZGF0ZScsIGNhbmRpZGF0ZSk7XG5cdFx0XHRcdHRoaXMucGMuYWRkSWNlQ2FuZGlkYXRlKG5ldyBSVENJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0RGF0YVN5bmMub2ZmKHBhdGgsIGV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQXR0YWNoIHRoZSByZW1vdGUgTWVkaWFTdHJlYW0gdG8gYSBub2RlXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2F0dGFjaFN0cmVhbSAoKSB7XG5cdFx0aWYodGhpcy5yZW1vdGVTdHJlYW0gJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuXHRcdFx0dGhpcy5ub2RlID0gTWVkaWEuYXR0YWNoU3RyZWFtKHRoaXMucmVtb3RlU3RyZWFtLCB0aGlzLmNvbnRhaW5lciwgdGhpcy5ub2RlKTtcblx0XHRcdHRoaXMubm9kZS5tdXRlZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcmVtb3RlIE1lZGlhU3RyZWFtXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtNZWRpYVN0cmVhbX1cblx0ICovXG5cdHNldCByZW1vdGVTdHJlYW0gKHN0cmVhbSkge1xuXHRcdC8qKlxuXHRcdCAqIEBpZ25vcmVcblx0XHQgKi9cblx0XHR0aGlzLl9yZW1vdGVTdHJlYW0gPSBzdHJlYW07XG5cdFx0dGhpcy5fYXR0YWNoU3RyZWFtKCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHJlbW90ZSBNZWRpYVN0cmVhbVxuXHQgKiBAdHlwZSB7TWVkaWFTdHJlYW19XG5cdCAqL1xuXHRnZXQgcmVtb3RlU3RyZWFtICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVtb3RlU3RyZWFtO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluZGljYXRlcyBpZiB0aGUgUGVlckNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgYmFzZWQgb24gSUNFIGNvbm5lY3Rpb24gc3RhdGVcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNDb25uZWN0ZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLnBjICYmXG5cdFx0XHQhIX5bXG5cdFx0XHRcdElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRCxcblx0XHRcdFx0SUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVELFxuXHRcdFx0XHRJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUlxuXHRcdFx0XS5pbmRleE9mKHRoaXMucGMuaWNlQ29ubmVjdGlvblN0YXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IFJUQ1BlZXJDb25uZWN0aW9uIGZvciBzdWJzY3JpYmVyc1xuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKiBAcGFyYW0gaHRtbEVsZW1lbnRcblx0ICogQHJldHVybnMge1Byb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdGFuc3dlcihodG1sRWxlbWVudCkge1xuXHRcdExvZy5pKCdQZWVyQ29ubmVjdGlvbn5hbnN3ZXInLCB7aHRtbEVsZW1lbnQsIHBlZXJDb25uZWN0aW9uOiB0aGlzfSk7XG5cdFx0dGhpcy5jb250YWluZXIgPSBodG1sRWxlbWVudDtcblx0XHRpZihPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29udHJhY2snKSkge1xuXHRcdFx0dGhpcy5wYy5vbnRyYWNrID0gZSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbnRyYWNrJywgZS5zdHJlYW1zWzBdKTtcblx0XHRcdFx0dGhpcy5yZW1vdGVTdHJlYW0gPSBlLnN0cmVhbXNbMF07XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBjLm9uYWRkc3RyZWFtID0gZSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbmFkZHN0cmVhbScsIGUuc3RyZWFtKTtcblx0XHRcdFx0dGhpcy5yZW1vdGVTdHJlYW0gPSBlLnN0cmVhbTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gTGlzdGVuIHRvIFNEUCBvZmZlclxuXHRcdERhdGFTeW5jLm9uKGAke3RoaXMuX3JlbW90ZVBhdGh9L3NkcGAsICd2YWx1ZScsIHNuYXAgPT4ge1xuXHRcdFx0Y29uc3Qgc2RwT2ZmZXIgPSBzbmFwLnZhbCgpO1xuXHRcdFx0TG9nLmQoJ09mZmVyJywgc2RwT2ZmZXIpO1xuXHRcdFx0aWYoc2RwT2ZmZXIgIT0gbnVsbCkge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXJlZCcsIHNkcE9mZmVyKTtcblx0XHRcdFx0dGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihzZHBPZmZlcilcblx0XHRcdFx0XHQudGhlbigoKSA9PiBMb2cuZCgnUGVlckNvbm5lY3Rpb25+cmVtb3RlRGVzY3JpcHRpb24nLCB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoL15vZmZlciQvLnRlc3QodGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYy5jcmVhdGVBbnN3ZXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1NEUCBpcyBub3QgYW4gb2ZmZXInKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLl9zZXRQcmVmZXJyZWRDb2RlY3MoZGVzY3JpcHRpb24pKVxuXHRcdFx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikpXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufmxvY2FsRGVzY3JpcHRpb24nLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IERhdGFTeW5jLnVwZGF0ZShgJHt0aGlzLl9sb2NhbFBhdGh9L3NkcGAsIF90b0pTT04odGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uKSkpXG5cdFx0XHRcdFx0LmNhdGNoKExvZy5yKCdQZWVyQ29ubmVjdGlvbn5sb2NhbERlc2NyaXB0aW9uJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IFJUQ1BlZXJDb25uZWN0aW9uIGZvciBwdWJsaXNoZXJzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSBzdHJlYW1cblx0ICogQHJldHVybnMge1Byb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdG9mZmVyKHN0cmVhbSkge1xuXHRcdExvZy5pKCdQZWVyQ29ubmVjdGlvbn5vZmZlcicsIHtzdHJlYW0sIHBlZXJDb25uZWN0aW9uOiB0aGlzfSk7XG5cdFx0bGV0IHNlbmRUaW1lb3V0O1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLnBjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSAoKSA9PiB7XG5cdFx0XHRcdExvZy5kKCdQZWVyQ29ubmVjdGlvbn5vbm5lZ290aWF0aW9ubmVlZGVkJyk7XG5cdFx0XHRcdC8vIERlYm91bmNlIHNlbmQgKHJlbmVnb3RpYXRpb24gdHJpZ2dlcnMgbXVsdGlwbGUgbmVnb3RpYXRpb25uZWVkZWQgZXZlbnRzKVxuXHRcdFx0XHRpZihzZW5kVGltZW91dCkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChzZW5kVGltZW91dCk7XG5cdFx0XHRcdFx0c2VuZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbmRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VuZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMuX3NlbmRPZmZlcigpXG5cdFx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodGhpcyk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXInLCBlKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sIDIwKTtcblx0XHRcdH07XG5cdFx0XHREYXRhU3luYy5vbihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnLCBzbmFwID0+IHtcblx0XHRcdFx0Y29uc3Qgc2RwQW5zd2VyID0gc25hcC52YWwoKTtcblx0XHRcdFx0aWYoc2RwQW5zd2VyICE9IG51bGwpIHtcblx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXIjYW5zd2VyZWQnLCBzZHBBbnN3ZXIpO1xuXHRcdFx0XHRcdHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwQW5zd2VyKVxuXHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+b2ZmZXIjcmVtb3RlRGVzY3JpcHRpb24nLCB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyh0cnVlKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goTG9nLmUuYmluZChMb2csICdQZWVyQ29ubmVjdGlvbn5yZW1vdGVEZXNjcmlwdGlvbicpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hbHRlclN0cmVhbShzdHJlYW0sICdhZGQnKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgU0RQIG9mZmVyIGFuZCBwdXNoIGl0XG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3NlbmRPZmZlcigpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NlbmRPZmZlcicpO1xuXHRcdHJldHVybiB0aGlzLnBjLmNyZWF0ZU9mZmVyKClcblx0XHRcdC50aGVuKGRlc2NyaXB0aW9uID0+IHRoaXMuX3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikpXG5cdFx0XHQudGhlbihkZXNjcmlwdGlvbiA9PiB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pKVxuXHRcdFx0LnRoZW4oKCkgPT4gTG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlI2xvY2FsRGVzY3JpcHRpb24nLCB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pKVxuXHRcdFx0LnRoZW4oKCkgPT4gRGF0YVN5bmMudXBkYXRlKGAke3RoaXMuX2xvY2FsUGF0aH0vc2RwYCwgX3RvSlNPTih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24pKSk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkL1JlbW92ZSB0cmFja3MgdG8gdGhlIFBlZXJDb25uZWN0aW9uIHN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW1cblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2FsdGVyU3RyZWFtKHN0cmVhbSwgbWV0aG9kKSB7XG5cdFx0aWYoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsIGAke21ldGhvZH1UcmFja2ApKSB7XG5cdFx0XHRzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0aGlzLnBjW2Ake21ldGhvZH1UcmFja2BdKHRyYWNrLCBzdHJlYW0pLCB0aGlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wY1tgJHttZXRob2R9U3RyZWFtYF0oc3RyZWFtKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVzdGFydCBTRFAgbmVnb3RpYXRpb24gZm9sbG93aW5nIGEgTWVkaWFTdHJlYW0gY2hhbmdlXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG9sZFN0cmVhbVxuXHQgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBuZXdTdHJlYW1cblx0ICovXG5cdHJlbmVnb3RpYXRlKG9sZFN0cmVhbSwgbmV3U3RyZWFtKSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJyk7XG5cdFx0aWYoKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnZ2V0U2VuZGVycycpKVxuXHRcdFx0JiYgKCdSVENSdHBTZW5kZXInIGluIHdpbmRvdylcblx0XHRcdCYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoUlRDUnRwU2VuZGVyLnByb3RvdHlwZSwgJ3JlcGxhY2VUcmFjaycpKXtcblxuXHRcdFx0Ly8gbW96UlRDUGVlckNvbm5lY3Rpb24gaW1wbGVtZW50YXRpb25cblx0XHRcdHRoaXMucGMuZ2V0U2VuZGVycygpLmZvckVhY2goc2VuZGVyID0+IHtcblx0XHRcdFx0bGV0IG5ld1RyYWNrcztcblx0XHRcdFx0c3dpdGNoIChzZW5kZXIudHJhY2sua2luZCkge1xuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzpcblx0XHRcdFx0XHRcdG5ld1RyYWNrcyA9IG5ld1N0cmVhbS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gbmV3U3RyZWFtLmdldFZpZGVvVHJhY2tzKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0bmV3VHJhY2tzID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobmV3VHJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNlbmRlci5yZXBsYWNlVHJhY2sobmV3VHJhY2tzWzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9zZW5kT2ZmZXIoKVxuXHRcdFx0XHQuY2F0Y2goZSA9PiB7TG9nLmQoJ1BlZXJDb25uZWN0aW9ufnJlbmVnb3RpYXRlJywgZSk7fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2FsdGVyU3RyZWFtKG9sZFN0cmVhbSwgJ3JlbW92ZScpO1xuXHRcdFx0dGhpcy5fYWx0ZXJTdHJlYW0obmV3U3RyZWFtLCAnYWRkJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIHRoZSBQZWVyQ29ubmVjdGlvbiBhbmQgc3RvcCBsaXN0ZW5pbmcgdG8gU0RQIG1lc3NhZ2VzXG5cdCAqIEBhY2Nlc3MgcHJvdGVjdGVkXG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRpZih0aGlzLl9zdGF0dXMgPT09IE9QRU5FRCkge1xuXHRcdFx0dGhpcy5fc3RhdHVzID0gQ0xPU0lORztcblx0XHRcdC8vIFN0b3AgZGlzcGxheVxuXHRcdFx0aWYgKHRoaXMubm9kZSkge1xuXHRcdFx0XHR0aGlzLm5vZGUuc3RvcCAmJiB0aGlzLm5vZGUuc3RvcCgpO1xuXHRcdFx0XHR0aGlzLm5vZGUuc3JjT2JqZWN0ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5ub2RlID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIFN0b3AgbGlzdGVuaW5nIHRvIHJlbW90ZSBJQ0UgY2FuZGlkYXRlc1xuXHRcdFx0dGhpcy5fcmVtb3RlSUNFQ2FuZGlkYXRlcyhmYWxzZSk7XG5cdFx0XHQvLyBTdG9wIGxpc3RlbmluZyB0byBTRFAgbWVzc2FnZXNcblx0XHRcdERhdGFTeW5jLm9mZihgJHt0aGlzLl9yZW1vdGVQYXRofS9zZHBgLCAndmFsdWUnKTtcblx0XHRcdC8vIFJlbW92ZSBkYXRhXG5cdFx0XHREYXRhU3luYy5yZW1vdmUodGhpcy5fbG9jYWxQYXRoKTtcblx0XHRcdC8vIENsb3NlIFBlZXJDb25uZWN0aW9uXG5cdFx0XHRpZiAodGhpcy5wYyAmJiB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlICE9PSAnY2xvc2VkJykge1xuXHRcdFx0XHR0aGlzLnBjLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ2Nsb3NlZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMucGMuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXR1cyA9IENMT1NFRDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRWRpdHMgdGhlIFNEUCB0byBzZXQgdGhlIHByZWZlcnJlZCBhdWRpby92aWRlbyBjb2RlY1xuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtSVENTZXNzaW9uRGVzY3JpcHRpb259IGRlc2NyaXB0aW9uIFRoZSBkZXNjcmlwdGlvbiByZXRyaWV2ZWQgYnkgY3JlYXRlT2ZmZXIvY3JlYXRlQW5zd2VyXG5cdCAqIEByZXR1cm5zIHtSVENTZXNzaW9uRGVzY3JpcHRpb258e3NkcDogc3RyaW5nLCB0eXBlOiBzdHJpbmd9fVxuXHQgKi9cblx0X3NldFByZWZlcnJlZENvZGVjcyhkZXNjcmlwdGlvbikge1xuXHRcdGlmKGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRWaWRlb0NvZGVjIHx8IGNhY2hlLmNvbmZpZy5wcmVmZXJyZWRBdWRpb0NvZGVjKSB7XG5cdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25+X3NldFByZWZlcnJlZENvZGVjcycsIHtkZXNjcmlwdGlvbiwgY29uZmlnOiBjYWNoZS5jb25maWd9KTtcblx0XHRcdGNvbnN0IHNkcExpbmVzID0gZGVzY3JpcHRpb24uc2RwLnNwbGl0KC9cXHI/XFxuLyk7XG5cdFx0XHRjb25zdCBtZWRpYXMgPSB7YXVkaW86IFtdLCB2aWRlbzogW119O1xuXHRcdFx0bGV0IGN1cnJlbnQgPSBudWxsO1xuXHRcdFx0Ly8gUGFyc2UgU0RQXG5cdFx0XHRzZHBMaW5lcy5mb3JFYWNoKChzZHBMaW5lLCBpKSA9PiB7XG5cdFx0XHRcdGlmKC9ebT0vLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBkID0gL15tPShcXHcrKVxcc1swLTlcXC9dK1xcc1tBLVphLXowLTlcXC9dK1xccyhbMC05XFxzXSspLy5leGVjKHNkcExpbmUpO1xuXHRcdFx0XHRcdGN1cnJlbnQgPSB7XG5cdFx0XHRcdFx0XHRmbXQ6IGRbMl0uc3BsaXQoL1xccy8pLFxuXHRcdFx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdFx0XHRjb2RlY3M6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRtZWRpYXNbZFsxXV0ucHVzaChjdXJyZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmKGN1cnJlbnQgJiYgL15hPXJ0cG1hcDovLnRlc3Qoc2RwTGluZSkpIHtcblx0XHRcdFx0XHRjb25zdCBjID0gL15hPXJ0cG1hcDooXFxkKylcXHMoW2EtekEtWjAtOVxcLVxcL10rKS8uZXhlYyhzZHBMaW5lKTtcblx0XHRcdFx0XHRpZihjKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50LmNvZGVjcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0aWQ6IGNbMV0sXG5cdFx0XHRcdFx0XHRcdG5hbWU6IGNbMl0sXG5cdFx0XHRcdFx0XHRcdGluZGV4OiBpXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBtZWRpYXMpO1xuXHRcdFx0bGV0IHVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcHJlZmVyID0gKG1lZGlhTGlzdCwgcHJlZmVyZWRDb2RlYykgPT4ge1xuXHRcdFx0XHRtZWRpYUxpc3QuZm9yRWFjaChtZWRpYSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBtZWRpYS5jb2RlY3MuZmluZChjb2RlYyA9PiBwcmVmZXJlZENvZGVjLnRlc3QoY29kZWMubmFtZSkpO1xuXHRcdFx0XHRcdGlmKHNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmbXQgPSBbc2VsZWN0ZWQuaWRdLmNvbmNhdChtZWRpYS5mbXQuZmlsdGVyKGlkcyA9PiBpZHMgIT09IHNlbGVjdGVkLmlkKSk7XG5cdFx0XHRcdFx0XHRzZHBMaW5lc1ttZWRpYS5pbmRleF0gPSBzZHBMaW5lc1ttZWRpYS5pbmRleF0ucmVwbGFjZShtZWRpYS5mbXQuam9pbignICcpLCBmbXQuam9pbignICcpKTtcblx0XHRcdFx0XHRcdHVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLnZpZGVvLCBjYWNoZS5jb25maWcucHJlZmVycmVkVmlkZW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZihjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYykge1xuXHRcdFx0XHRwcmVmZXIobWVkaWFzLmF1ZGlvLCBjYWNoZS5jb25maWcucHJlZmVycmVkQXVkaW9Db2RlYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih1cGRhdGUpIHtcblx0XHRcdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9ufl9zZXRQcmVmZXJyZWRDb2RlY3MnLCBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0c2RwOiBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKSxcblx0XHRcdFx0XHR0eXBlOiBkZXNjcmlwdGlvbi50eXBlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjcmlwdGlvbjtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uLmpzIiwiaW1wb3J0IFBlZXJDb25uZWN0aW9uIGZyb20gJy4vUGVlckNvbm5lY3Rpb24nO1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL3V0aWwvY2FjaGUnO1xuaW1wb3J0ICogYXMgTG9nIGZyb20gJy4uL3V0aWwvTG9nJztcbmltcG9ydCAqIGFzIERhdGFTeW5jIGZyb20gJy4uL3V0aWwvRGF0YVN5bmMnO1xuXG5jb25zdCBnZXRTdGFja0lkID0gKGlkMSwgaWQyKSA9PiBpZDEubG9jYWxlQ29tcGFyZShpZDIsICdlbi11cycpID4gMCA/IGAke2lkMX0tJHtpZDJ9YCA6YCR7aWQyfS0ke2lkMX1gO1xuXG4vKipcbiAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlZXJDb25uZWN0aW9uTWFuYWdlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAYWNjZXNzIHByb3RlY3RlZFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0LyoqXG5cdFx0ICogV2ViUlRDIHN0YWNrc1xuXHRcdCAqIEB0eXBlIHt7Kjogeyo6IFBlZXJDb25uZWN0aW9ufX19XG5cdFx0ICovXG5cdFx0dGhpcy5zdGFja3MgPSB7fTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldCBhIFBlZXJDb25uZWN0aW9uIG9iamVjdCBmb3IgYSBzcGVjaWZpYyBzdHJlYW1cblx0ICogQHBhcmFtIHtMb2NhbHxSZW1vdGV9IHN0cmVhbVxuXHQgKiBAcGFyYW0ge1JlbW90ZXx7dG86IHN0cmluZywgZGV2aWNlOnN0cmluZ319IHJlbW90ZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHB1Ymxpc2hcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGdldFBlZXJDb25uZWN0aW9uKHN0cmVhbSwgcmVtb3RlLCBwdWJsaXNoKSB7XG5cdFx0aWYoIWNhY2hlLnVzZXIpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09ubHkgYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbiBnZXQgYSBQZWVyQ29ubmVjdGlvblxcJ3Mgb2JqZWN0LicpKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RhY2tJZCA9IGdldFN0YWNrSWQocmVtb3RlLmRldmljZSwgY2FjaGUuZGV2aWNlKTtcblxuXHRcdGlmKHRoaXMuc3RhY2tzW3N0YWNrSWRdICYmIHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RhY2tzW3N0YWNrSWRdW3N0cmVhbS51aWRdKTtcblx0XHR9XG5cblx0XHRpZighdGhpcy5zdGFja3Nbc3RhY2tJZF0pIHtcblx0XHRcdHRoaXMuc3RhY2tzW3N0YWNrSWRdID0ge307XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXNlcnMgPSB7fTtcblx0XHR1c2Vyc1tjYWNoZS51c2VyLnVpZF0gPSB0cnVlO1xuXHRcdHVzZXJzW3JlbW90ZS5mcm9tIHx8IHJlbW90ZS50b10gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIERhdGFTeW5jLnVwZGF0ZShgXy93ZWJydGMvJHtzdGFja0lkfWAsIHVzZXJzKVxuXHRcdFx0LnRoZW4oKCkgPT4gbmV3IFBlZXJDb25uZWN0aW9uKHN0YWNrSWQsIHN0cmVhbS51aWQsIHJlbW90ZS5kZXZpY2UsIHB1Ymxpc2gpKVxuXHRcdFx0LnRoZW4ocGMgPT4ge1xuXHRcdFx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2VyfmdldFBlZXJDb25uZWN0aW9uJywge3N0YWNrSWQsIHN0cmVhbUlkOiBzdHJlYW0udWlkLCBwY30pO1xuXHRcdFx0XHR0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW0udWlkXSA9IHBjO1xuXHRcdFx0XHRyZXR1cm4gcGM7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKExvZy5yKCdQZWVyQ29ubmVjdGlvbk1hbmFnZXJ+Z2V0UGVlckNvbm5lY3Rpb24nKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIG9mZmVyIGZvciBhIHN0cmVhbSB0byBhIHN1YnNjcmliZXJcblx0ICogQHBhcmFtIHtMb2NhbH0gbG9jYWxTdHJlYW1cblx0ICogQHBhcmFtIHtvYmplY3R9IHN1YnNjcmliZXJcblx0ICogQHJldHVybiB7UHJvbWlzZS48UGVlckNvbm5lY3Rpb24+fVxuXHQgKi9cblx0b2ZmZXIobG9jYWxTdHJlYW0sIHN1YnNjcmliZXIpIHtcblx0XHRMb2cuZCgnUGVlckNvbm5lY3Rpb25NYW5hZ2Vyfm9mZmVyJywge2xvY2FsU3RyZWFtLCBzdWJzY3JpYmVyfSk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGVlckNvbm5lY3Rpb24obG9jYWxTdHJlYW0sIHN1YnNjcmliZXIsIHRydWUpXG5cdFx0XHQudGhlbihwYyA9PiBwYy5vZmZlcihsb2NhbFN0cmVhbS5tZWRpYSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFuc3dlciB0byB0aGUgb2ZmZXIgZnJvbSB0aGUgcHVibGlzaGVyXG5cdCAqIEBwYXJhbSB7UmVtb3RlfSByZW1vdGVTdHJlYW1cblx0ICogQHBhcmFtIHtFbGVtZW50fSBodG1sRWxlbWVudFxuXHQgKiBAcmV0dXJuIHsqfFByb21pc2UuPFBlZXJDb25uZWN0aW9uPn1cblx0ICovXG5cdGFuc3dlcihyZW1vdGVTdHJlYW0sIGh0bWxFbGVtZW50KSB7XG5cdFx0TG9nLmQoJ1BlZXJDb25uZWN0aW9uTWFuYWdlcn5hbnN3ZXInLCB7cmVtb3RlU3RyZWFtLCBodG1sRWxlbWVudH0pO1xuXHRcdHJldHVybiB0aGlzLmdldFBlZXJDb25uZWN0aW9uKHJlbW90ZVN0cmVhbSwgcmVtb3RlU3RyZWFtLCBmYWxzZSlcblx0XHRcdC50aGVuKHBjID0+IHBjLmFuc3dlcihodG1sRWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIGEgUGVlckNvbm5lY3Rpb25cblx0ICogQHBhcmFtIHN0cmVhbUlkXG5cdCAqIEBwYXJhbSByZW1vdGVEZXZpY2Vcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGNsb3NlKHN0cmVhbUlkLCByZW1vdGVEZXZpY2UpIHtcblx0XHRjb25zdCBzdGFja0lkID0gZ2V0U3RhY2tJZChyZW1vdGVEZXZpY2UsIGNhY2hlLmRldmljZSksXG5cdFx0XHRwYyA9IHRoaXMuc3RhY2tzW3N0YWNrSWRdID8gdGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtSWRdIDogbnVsbDtcblx0XHRpZihwYyl7XG5cdFx0XHRwYy5jbG9zZSgpO1xuXHRcdFx0dGhpcy5zdGFja3Nbc3RhY2tJZF1bc3RyZWFtSWRdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YWNrc1tzdGFja0lkXVtzdHJlYW1JZF07XG5cdFx0XHRyZXR1cm4gcGM7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvd2VicnRjL1BlZXJDb25uZWN0aW9uTWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5maW5kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZm4vYXJyYXkvZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYgKE9ic2VydmVyKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5faCA9PSAxKSByZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYztcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVhY3Rpb247XG4gIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSB7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmIChyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSkgcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICBpZiAoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmICgkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoJHJlcGxhY2VyKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDUpO1xudmFyIEtFWSA9ICdmaW5kJztcbnZhciBmb3JjZWQgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxuLy8gU0RQIGhlbHBlcnMuXG52YXIgU0RQVXRpbHMgPSB7fTtcblxuLy8gR2VuZXJhdGUgYW4gYWxwaGFudW1lcmljIGlkZW50aWZpZXIgZm9yIGNuYW1lIG9yIG1pZHMuXG4vLyBUT0RPOiB1c2UgVVVJRHMgaW5zdGVhZD8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamVkLzk4Mjg4M1xuU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTApO1xufTtcblxuLy8gVGhlIFJUQ1AgQ05BTUUgdXNlZCBieSBhbGwgcGVlcmNvbm5lY3Rpb25zIGZyb20gdGhlIHNhbWUgSlMuXG5TRFBVdGlscy5sb2NhbENOYW1lID0gU0RQVXRpbHMuZ2VuZXJhdGVJZGVudGlmaWVyKCk7XG5cbi8vIFNwbGl0cyBTRFAgaW50byBsaW5lcywgZGVhbGluZyB3aXRoIGJvdGggQ1JMRiBhbmQgTEYuXG5TRFBVdGlscy5zcGxpdExpbmVzID0gZnVuY3Rpb24oYmxvYikge1xuICByZXR1cm4gYmxvYi50cmltKCkuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuIGxpbmUudHJpbSgpO1xuICB9KTtcbn07XG4vLyBTcGxpdHMgU0RQIGludG8gc2Vzc2lvbnBhcnQgYW5kIG1lZGlhc2VjdGlvbnMuIEVuc3VyZXMgQ1JMRi5cblNEUFV0aWxzLnNwbGl0U2VjdGlvbnMgPSBmdW5jdGlvbihibG9iKSB7XG4gIHZhciBwYXJ0cyA9IGJsb2Iuc3BsaXQoJ1xcbm09Jyk7XG4gIHJldHVybiBwYXJ0cy5tYXAoZnVuY3Rpb24ocGFydCwgaW5kZXgpIHtcbiAgICByZXR1cm4gKGluZGV4ID4gMCA/ICdtPScgKyBwYXJ0IDogcGFydCkudHJpbSgpICsgJ1xcclxcbic7XG4gIH0pO1xufTtcblxuLy8gUmV0dXJucyBsaW5lcyB0aGF0IHN0YXJ0IHdpdGggYSBjZXJ0YWluIHByZWZpeC5cblNEUFV0aWxzLm1hdGNoUHJlZml4ID0gZnVuY3Rpb24oYmxvYiwgcHJlZml4KSB7XG4gIHJldHVybiBTRFBVdGlscy5zcGxpdExpbmVzKGJsb2IpLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuIGxpbmUuaW5kZXhPZihwcmVmaXgpID09PSAwO1xuICB9KTtcbn07XG5cbi8vIFBhcnNlcyBhbiBJQ0UgY2FuZGlkYXRlIGxpbmUuIFNhbXBsZSBpbnB1dDpcbi8vIGNhbmRpZGF0ZTo3MDI3ODYzNTAgMiB1ZHAgNDE4MTk5MDIgOC44LjguOCA2MDc2OSB0eXAgcmVsYXkgcmFkZHIgOC44LjguOFxuLy8gcnBvcnQgNTU5OTZcIlxuU0RQVXRpbHMucGFyc2VDYW5kaWRhdGUgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cztcbiAgLy8gUGFyc2UgYm90aCB2YXJpYW50cy5cbiAgaWYgKGxpbmUuaW5kZXhPZignYT1jYW5kaWRhdGU6JykgPT09IDApIHtcbiAgICBwYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEyKS5zcGxpdCgnICcpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzID0gbGluZS5zdWJzdHJpbmcoMTApLnNwbGl0KCcgJyk7XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlID0ge1xuICAgIGZvdW5kYXRpb246IHBhcnRzWzBdLFxuICAgIGNvbXBvbmVudDogcGFyc2VJbnQocGFydHNbMV0sIDEwKSxcbiAgICBwcm90b2NvbDogcGFydHNbMl0udG9Mb3dlckNhc2UoKSxcbiAgICBwcmlvcml0eTogcGFyc2VJbnQocGFydHNbM10sIDEwKSxcbiAgICBpcDogcGFydHNbNF0sXG4gICAgcG9ydDogcGFyc2VJbnQocGFydHNbNV0sIDEwKSxcbiAgICAvLyBza2lwIHBhcnRzWzZdID09ICd0eXAnXG4gICAgdHlwZTogcGFydHNbN11cbiAgfTtcblxuICBmb3IgKHZhciBpID0gODsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgc3dpdGNoIChwYXJ0c1tpXSkge1xuICAgICAgY2FzZSAncmFkZHInOlxuICAgICAgICBjYW5kaWRhdGUucmVsYXRlZEFkZHJlc3MgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncnBvcnQnOlxuICAgICAgICBjYW5kaWRhdGUucmVsYXRlZFBvcnQgPSBwYXJzZUludChwYXJ0c1tpICsgMV0sIDEwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0Y3B0eXBlJzpcbiAgICAgICAgY2FuZGlkYXRlLnRjcFR5cGUgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndWZyYWcnOlxuICAgICAgICBjYW5kaWRhdGUudWZyYWcgPSBwYXJ0c1tpICsgMV07IC8vIGZvciBiYWNrd2FyZCBjb21wYWJpbGl0eS5cbiAgICAgICAgY2FuZGlkYXRlLnVzZXJuYW1lRnJhZ21lbnQgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gZXh0ZW5zaW9uIGhhbmRsaW5nLCBpbiBwYXJ0aWN1bGFyIHVmcmFnXG4gICAgICAgIGNhbmRpZGF0ZVtwYXJ0c1tpXV0gPSBwYXJ0c1tpICsgMV07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlO1xufTtcblxuLy8gVHJhbnNsYXRlcyBhIGNhbmRpZGF0ZSBvYmplY3QgaW50byBTRFAgY2FuZGlkYXRlIGF0dHJpYnV0ZS5cblNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gIHZhciBzZHAgPSBbXTtcbiAgc2RwLnB1c2goY2FuZGlkYXRlLmZvdW5kYXRpb24pO1xuICBzZHAucHVzaChjYW5kaWRhdGUuY29tcG9uZW50KTtcbiAgc2RwLnB1c2goY2FuZGlkYXRlLnByb3RvY29sLnRvVXBwZXJDYXNlKCkpO1xuICBzZHAucHVzaChjYW5kaWRhdGUucHJpb3JpdHkpO1xuICBzZHAucHVzaChjYW5kaWRhdGUuaXApO1xuICBzZHAucHVzaChjYW5kaWRhdGUucG9ydCk7XG5cbiAgdmFyIHR5cGUgPSBjYW5kaWRhdGUudHlwZTtcbiAgc2RwLnB1c2goJ3R5cCcpO1xuICBzZHAucHVzaCh0eXBlKTtcbiAgaWYgKHR5cGUgIT09ICdob3N0JyAmJiBjYW5kaWRhdGUucmVsYXRlZEFkZHJlc3MgJiZcbiAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCkge1xuICAgIHNkcC5wdXNoKCdyYWRkcicpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyk7IC8vIHdhczogcmVsQWRkclxuICAgIHNkcC5wdXNoKCdycG9ydCcpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCk7IC8vIHdhczogcmVsUG9ydFxuICB9XG4gIGlmIChjYW5kaWRhdGUudGNwVHlwZSAmJiBjYW5kaWRhdGUucHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PT0gJ3RjcCcpIHtcbiAgICBzZHAucHVzaCgndGNwdHlwZScpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS50Y3BUeXBlKTtcbiAgfVxuICBpZiAoY2FuZGlkYXRlLnVmcmFnKSB7XG4gICAgc2RwLnB1c2goJ3VmcmFnJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnVmcmFnKTtcbiAgfVxuICByZXR1cm4gJ2NhbmRpZGF0ZTonICsgc2RwLmpvaW4oJyAnKTtcbn07XG5cbi8vIFBhcnNlcyBhbiBpY2Utb3B0aW9ucyBsaW5lLCByZXR1cm5zIGFuIGFycmF5IG9mIG9wdGlvbiB0YWdzLlxuLy8gYT1pY2Utb3B0aW9uczpmb28gYmFyXG5TRFBVdGlscy5wYXJzZUljZU9wdGlvbnMgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHJldHVybiBsaW5lLnN1YnN0cigxNCkuc3BsaXQoJyAnKTtcbn1cblxuLy8gUGFyc2VzIGFuIHJ0cG1hcCBsaW5lLCByZXR1cm5zIFJUQ1J0cENvZGRlY1BhcmFtZXRlcnMuIFNhbXBsZSBpbnB1dDpcbi8vIGE9cnRwbWFwOjExMSBvcHVzLzQ4MDAwLzJcblNEUFV0aWxzLnBhcnNlUnRwTWFwID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cig5KS5zcGxpdCgnICcpO1xuICB2YXIgcGFyc2VkID0ge1xuICAgIHBheWxvYWRUeXBlOiBwYXJzZUludChwYXJ0cy5zaGlmdCgpLCAxMCkgLy8gd2FzOiBpZFxuICB9O1xuXG4gIHBhcnRzID0gcGFydHNbMF0uc3BsaXQoJy8nKTtcblxuICBwYXJzZWQubmFtZSA9IHBhcnRzWzBdO1xuICBwYXJzZWQuY2xvY2tSYXRlID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTsgLy8gd2FzOiBjbG9ja3JhdGVcbiAgLy8gd2FzOiBjaGFubmVsc1xuICBwYXJzZWQubnVtQ2hhbm5lbHMgPSBwYXJ0cy5sZW5ndGggPT09IDMgPyBwYXJzZUludChwYXJ0c1syXSwgMTApIDogMTtcbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbi8vIEdlbmVyYXRlIGFuIGE9cnRwbWFwIGxpbmUgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3Jcbi8vIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlUnRwTWFwID0gZnVuY3Rpb24oY29kZWMpIHtcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICByZXR1cm4gJ2E9cnRwbWFwOicgKyBwdCArICcgJyArIGNvZGVjLm5hbWUgKyAnLycgKyBjb2RlYy5jbG9ja1JhdGUgK1xuICAgICAgKGNvZGVjLm51bUNoYW5uZWxzICE9PSAxID8gJy8nICsgY29kZWMubnVtQ2hhbm5lbHMgOiAnJykgKyAnXFxyXFxuJztcbn07XG5cbi8vIFBhcnNlcyBhbiBhPWV4dG1hcCBsaW5lIChoZWFkZXJleHRlbnNpb24gZnJvbSBSRkMgNTI4NSkuIFNhbXBsZSBpbnB1dDpcbi8vIGE9ZXh0bWFwOjIgdXJuOmlldGY6cGFyYW1zOnJ0cC1oZHJleHQ6dG9mZnNldFxuLy8gYT1leHRtYXA6Mi9zZW5kb25seSB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XG5TRFBVdGlscy5wYXJzZUV4dG1hcCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoOSkuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIHtcbiAgICBpZDogcGFyc2VJbnQocGFydHNbMF0sIDEwKSxcbiAgICBkaXJlY3Rpb246IHBhcnRzWzBdLmluZGV4T2YoJy8nKSA+IDAgPyBwYXJ0c1swXS5zcGxpdCgnLycpWzFdIDogJ3NlbmRyZWN2JyxcbiAgICB1cmk6IHBhcnRzWzFdXG4gIH07XG59O1xuXG4vLyBHZW5lcmF0ZXMgYT1leHRtYXAgbGluZSBmcm9tIFJUQ1J0cEhlYWRlckV4dGVuc2lvblBhcmFtZXRlcnMgb3Jcbi8vIFJUQ1J0cEhlYWRlckV4dGVuc2lvbi5cblNEUFV0aWxzLndyaXRlRXh0bWFwID0gZnVuY3Rpb24oaGVhZGVyRXh0ZW5zaW9uKSB7XG4gIHJldHVybiAnYT1leHRtYXA6JyArIChoZWFkZXJFeHRlbnNpb24uaWQgfHwgaGVhZGVyRXh0ZW5zaW9uLnByZWZlcnJlZElkKSArXG4gICAgICAoaGVhZGVyRXh0ZW5zaW9uLmRpcmVjdGlvbiAmJiBoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uICE9PSAnc2VuZHJlY3YnXG4gICAgICAgICAgPyAnLycgKyBoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgJyAnICsgaGVhZGVyRXh0ZW5zaW9uLnVyaSArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIGFuIGZ0bXAgbGluZSwgcmV0dXJucyBkaWN0aW9uYXJ5LiBTYW1wbGUgaW5wdXQ6XG4vLyBhPWZtdHA6OTYgdmJyPW9uO2NuZz1vblxuLy8gQWxzbyBkZWFscyB3aXRoIHZicj1vbjsgY25nPW9uXG5TRFBVdGlscy5wYXJzZUZtdHAgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGt2O1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cihsaW5lLmluZGV4T2YoJyAnKSArIDEpLnNwbGl0KCc7Jyk7XG4gIGZvciAodmFyIGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICBrdiA9IHBhcnRzW2pdLnRyaW0oKS5zcGxpdCgnPScpO1xuICAgIHBhcnNlZFtrdlswXS50cmltKCldID0ga3ZbMV07XG4gIH1cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbi8vIEdlbmVyYXRlcyBhbiBhPWZ0bXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvciBSVENSdHBDb2RlY1BhcmFtZXRlcnMuXG5TRFBVdGlscy53cml0ZUZtdHAgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgbGluZSA9ICcnO1xuICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICB9XG4gIGlmIChjb2RlYy5wYXJhbWV0ZXJzICYmIE9iamVjdC5rZXlzKGNvZGVjLnBhcmFtZXRlcnMpLmxlbmd0aCkge1xuICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhjb2RlYy5wYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBwYXJhbXMucHVzaChwYXJhbSArICc9JyArIGNvZGVjLnBhcmFtZXRlcnNbcGFyYW1dKTtcbiAgICB9KTtcbiAgICBsaW5lICs9ICdhPWZtdHA6JyArIHB0ICsgJyAnICsgcGFyYW1zLmpvaW4oJzsnKSArICdcXHJcXG4nO1xuICB9XG4gIHJldHVybiBsaW5lO1xufTtcblxuLy8gUGFyc2VzIGFuIHJ0Y3AtZmIgbGluZSwgcmV0dXJucyBSVENQUnRjcEZlZWRiYWNrIG9iamVjdC4gU2FtcGxlIGlucHV0OlxuLy8gYT1ydGNwLWZiOjk4IG5hY2sgcnBzaVxuU0RQVXRpbHMucGFyc2VSdGNwRmIgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKGxpbmUuaW5kZXhPZignICcpICsgMSkuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBwYXJ0cy5zaGlmdCgpLFxuICAgIHBhcmFtZXRlcjogcGFydHMuam9pbignICcpXG4gIH07XG59O1xuLy8gR2VuZXJhdGUgYT1ydGNwLWZiIGxpbmVzIGZyb20gUlRDUnRwQ29kZWNDYXBhYmlsaXR5IG9yIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlUnRjcEZiID0gZnVuY3Rpb24oY29kZWMpIHtcbiAgdmFyIGxpbmVzID0gJyc7XG4gIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gIH1cbiAgaWYgKGNvZGVjLnJ0Y3BGZWVkYmFjayAmJiBjb2RlYy5ydGNwRmVlZGJhY2subGVuZ3RoKSB7XG4gICAgLy8gRklYTUU6IHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyci1pbnQ/XG4gICAgY29kZWMucnRjcEZlZWRiYWNrLmZvckVhY2goZnVuY3Rpb24oZmIpIHtcbiAgICAgIGxpbmVzICs9ICdhPXJ0Y3AtZmI6JyArIHB0ICsgJyAnICsgZmIudHlwZSArXG4gICAgICAoZmIucGFyYW1ldGVyICYmIGZiLnBhcmFtZXRlci5sZW5ndGggPyAnICcgKyBmYi5wYXJhbWV0ZXIgOiAnJykgK1xuICAgICAgICAgICdcXHJcXG4nO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBsaW5lcztcbn07XG5cbi8vIFBhcnNlcyBhbiBSRkMgNTU3NiBzc3JjIG1lZGlhIGF0dHJpYnV0ZS4gU2FtcGxlIGlucHV0OlxuLy8gYT1zc3JjOjM3MzU5Mjg1NTkgY25hbWU6c29tZXRoaW5nXG5TRFBVdGlscy5wYXJzZVNzcmNNZWRpYSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHNwID0gbGluZS5pbmRleE9mKCcgJyk7XG4gIHZhciBwYXJ0cyA9IHtcbiAgICBzc3JjOiBwYXJzZUludChsaW5lLnN1YnN0cig3LCBzcCAtIDcpLCAxMClcbiAgfTtcbiAgdmFyIGNvbG9uID0gbGluZS5pbmRleE9mKCc6Jywgc3ApO1xuICBpZiAoY29sb24gPiAtMSkge1xuICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSwgY29sb24gLSBzcCAtIDEpO1xuICAgIHBhcnRzLnZhbHVlID0gbGluZS5zdWJzdHIoY29sb24gKyAxKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJ0cy5hdHRyaWJ1dGUgPSBsaW5lLnN1YnN0cihzcCArIDEpO1xuICB9XG4gIHJldHVybiBwYXJ0cztcbn07XG5cbi8vIEV4dHJhY3RzIHRoZSBNSUQgKFJGQyA1ODg4KSBmcm9tIGEgbWVkaWEgc2VjdGlvbi5cbi8vIHJldHVybnMgdGhlIE1JRCBvciB1bmRlZmluZWQgaWYgbm8gbWlkIGxpbmUgd2FzIGZvdW5kLlxuU0RQVXRpbHMuZ2V0TWlkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBtaWQgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1pZDonKVswXTtcbiAgaWYgKG1pZCkge1xuICAgIHJldHVybiBtaWQuc3Vic3RyKDYpO1xuICB9XG59XG5cblNEUFV0aWxzLnBhcnNlRmluZ2VycHJpbnQgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDE0KS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGFsZ29yaXRobTogcGFydHNbMF0udG9Mb3dlckNhc2UoKSwgLy8gYWxnb3JpdGhtIGlzIGNhc2Utc2Vuc2l0aXZlIGluIEVkZ2UuXG4gICAgdmFsdWU6IHBhcnRzWzFdXG4gIH07XG59O1xuXG4vLyBFeHRyYWN0cyBEVExTIHBhcmFtZXRlcnMgZnJvbSBTRFAgbWVkaWEgc2VjdGlvbiBvciBzZXNzaW9ucGFydC5cbi8vIEZJWE1FOiBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBmdW5jdGlvbnMgdGhpcyBzaG91bGQgb25seVxuLy8gICBnZXQgdGhlIGZpbmdlcnByaW50IGxpbmUgYXMgaW5wdXQuIFNlZSBhbHNvIGdldEljZVBhcmFtZXRlcnMuXG5TRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uICsgc2Vzc2lvbnBhcnQsXG4gICAgICAnYT1maW5nZXJwcmludDonKTtcbiAgLy8gTm90ZTogYT1zZXR1cCBsaW5lIGlzIGlnbm9yZWQgc2luY2Ugd2UgdXNlIHRoZSAnYXV0bycgcm9sZS5cbiAgLy8gTm90ZTI6ICdhbGdvcml0aG0nIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZSBleGNlcHQgaW4gRWRnZS5cbiAgcmV0dXJuIHtcbiAgICByb2xlOiAnYXV0bycsXG4gICAgZmluZ2VycHJpbnRzOiBsaW5lcy5tYXAoU0RQVXRpbHMucGFyc2VGaW5nZXJwcmludClcbiAgfTtcbn07XG5cbi8vIFNlcmlhbGl6ZXMgRFRMUyBwYXJhbWV0ZXJzIHRvIFNEUC5cblNEUFV0aWxzLndyaXRlRHRsc1BhcmFtZXRlcnMgPSBmdW5jdGlvbihwYXJhbXMsIHNldHVwVHlwZSkge1xuICB2YXIgc2RwID0gJ2E9c2V0dXA6JyArIHNldHVwVHlwZSArICdcXHJcXG4nO1xuICBwYXJhbXMuZmluZ2VycHJpbnRzLmZvckVhY2goZnVuY3Rpb24oZnApIHtcbiAgICBzZHAgKz0gJ2E9ZmluZ2VycHJpbnQ6JyArIGZwLmFsZ29yaXRobSArICcgJyArIGZwLnZhbHVlICsgJ1xcclxcbic7XG4gIH0pO1xuICByZXR1cm4gc2RwO1xufTtcbi8vIFBhcnNlcyBJQ0UgaW5mb3JtYXRpb24gZnJvbSBTRFAgbWVkaWEgc2VjdGlvbiBvciBzZXNzaW9ucGFydC5cbi8vIEZJWE1FOiBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBmdW5jdGlvbnMgdGhpcyBzaG91bGQgb25seVxuLy8gICBnZXQgdGhlIGljZS11ZnJhZyBhbmQgaWNlLXB3ZCBsaW5lcyBhcyBpbnB1dC5cblNEUFV0aWxzLmdldEljZVBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgLy8gU2VhcmNoIGluIHNlc3Npb24gcGFydCwgdG9vLlxuICBsaW5lcyA9IGxpbmVzLmNvbmNhdChTRFBVdGlscy5zcGxpdExpbmVzKHNlc3Npb25wYXJ0KSk7XG4gIHZhciBpY2VQYXJhbWV0ZXJzID0ge1xuICAgIHVzZXJuYW1lRnJhZ21lbnQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gbGluZS5pbmRleE9mKCdhPWljZS11ZnJhZzonKSA9PT0gMDtcbiAgICB9KVswXS5zdWJzdHIoMTIpLFxuICAgIHBhc3N3b3JkOiBsaW5lcy5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgICAgcmV0dXJuIGxpbmUuaW5kZXhPZignYT1pY2UtcHdkOicpID09PSAwO1xuICAgIH0pWzBdLnN1YnN0cigxMClcbiAgfTtcbiAgcmV0dXJuIGljZVBhcmFtZXRlcnM7XG59O1xuXG4vLyBTZXJpYWxpemVzIElDRSBwYXJhbWV0ZXJzIHRvIFNEUC5cblNEUFV0aWxzLndyaXRlSWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICByZXR1cm4gJ2E9aWNlLXVmcmFnOicgKyBwYXJhbXMudXNlcm5hbWVGcmFnbWVudCArICdcXHJcXG4nICtcbiAgICAgICdhPWljZS1wd2Q6JyArIHBhcmFtcy5wYXNzd29yZCArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBhbmQgcmV0dXJucyBSVENSdHBQYXJhbWV0ZXJzLlxuU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IHtcbiAgICBjb2RlY3M6IFtdLFxuICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgIGZlY01lY2hhbmlzbXM6IFtdLFxuICAgIHJ0Y3A6IFtdXG4gIH07XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIG1saW5lID0gbGluZXNbMF0uc3BsaXQoJyAnKTtcbiAgZm9yICh2YXIgaSA9IDM7IGkgPCBtbGluZS5sZW5ndGg7IGkrKykgeyAvLyBmaW5kIGFsbCBjb2RlY3MgZnJvbSBtbGluZVszLi5dXG4gICAgdmFyIHB0ID0gbWxpbmVbaV07XG4gICAgdmFyIHJ0cG1hcGxpbmUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydHBtYXA6JyArIHB0ICsgJyAnKVswXTtcbiAgICBpZiAocnRwbWFwbGluZSkge1xuICAgICAgdmFyIGNvZGVjID0gU0RQVXRpbHMucGFyc2VSdHBNYXAocnRwbWFwbGluZSk7XG4gICAgICB2YXIgZm10cHMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPWZtdHA6JyArIHB0ICsgJyAnKTtcbiAgICAgIC8vIE9ubHkgdGhlIGZpcnN0IGE9Zm10cDo8cHQ+IGlzIGNvbnNpZGVyZWQuXG4gICAgICBjb2RlYy5wYXJhbWV0ZXJzID0gZm10cHMubGVuZ3RoID8gU0RQVXRpbHMucGFyc2VGbXRwKGZtdHBzWzBdKSA6IHt9O1xuICAgICAgY29kZWMucnRjcEZlZWRiYWNrID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoXG4gICAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydGNwLWZiOicgKyBwdCArICcgJylcbiAgICAgICAgLm1hcChTRFBVdGlscy5wYXJzZVJ0Y3BGYik7XG4gICAgICBkZXNjcmlwdGlvbi5jb2RlY3MucHVzaChjb2RlYyk7XG4gICAgICAvLyBwYXJzZSBGRUMgbWVjaGFuaXNtcyBmcm9tIHJ0cG1hcCBsaW5lcy5cbiAgICAgIHN3aXRjaCAoY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ1JFRCc6XG4gICAgICAgIGNhc2UgJ1VMUEZFQyc6XG4gICAgICAgICAgZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5wdXNoKGNvZGVjLm5hbWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIG9ubHkgUkVEIGFuZCBVTFBGRUMgYXJlIHJlY29nbml6ZWQgYXMgRkVDIG1lY2hhbmlzbXMuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9ZXh0bWFwOicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGRlc2NyaXB0aW9uLmhlYWRlckV4dGVuc2lvbnMucHVzaChTRFBVdGlscy5wYXJzZUV4dG1hcChsaW5lKSk7XG4gIH0pO1xuICAvLyBGSVhNRTogcGFyc2UgcnRjcC5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufTtcblxuLy8gR2VuZXJhdGVzIHBhcnRzIG9mIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBkZXNjcmliaW5nIHRoZSBjYXBhYmlsaXRpZXMgL1xuLy8gcGFyYW1ldGVycy5cblNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24gPSBmdW5jdGlvbihraW5kLCBjYXBzKSB7XG4gIHZhciBzZHAgPSAnJztcblxuICAvLyBCdWlsZCB0aGUgbWxpbmUuXG4gIHNkcCArPSAnbT0nICsga2luZCArICcgJztcbiAgc2RwICs9IGNhcHMuY29kZWNzLmxlbmd0aCA+IDAgPyAnOScgOiAnMCc7IC8vIHJlamVjdCBpZiBubyBjb2RlY3MuXG4gIHNkcCArPSAnIFVEUC9UTFMvUlRQL1NBVlBGICc7XG4gIHNkcCArPSBjYXBzLmNvZGVjcy5tYXAoZnVuY3Rpb24oY29kZWMpIHtcbiAgICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gY29kZWMucGF5bG9hZFR5cGU7XG4gIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuXG4gIHNkcCArPSAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbic7XG4gIHNkcCArPSAnYT1ydGNwOjkgSU4gSVA0IDAuMC4wLjBcXHJcXG4nO1xuXG4gIC8vIEFkZCBhPXJ0cG1hcCBsaW5lcyBmb3IgZWFjaCBjb2RlYy4gQWxzbyBmbXRwIGFuZCBydGNwLWZiLlxuICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgc2RwICs9IFNEUFV0aWxzLndyaXRlUnRwTWFwKGNvZGVjKTtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVGbXRwKGNvZGVjKTtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdGNwRmIoY29kZWMpO1xuICB9KTtcbiAgdmFyIG1heHB0aW1lID0gMDtcbiAgY2Fwcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5tYXhwdGltZSA+IG1heHB0aW1lKSB7XG4gICAgICBtYXhwdGltZSA9IGNvZGVjLm1heHB0aW1lO1xuICAgIH1cbiAgfSk7XG4gIGlmIChtYXhwdGltZSA+IDApIHtcbiAgICBzZHAgKz0gJ2E9bWF4cHRpbWU6JyArIG1heHB0aW1lICsgJ1xcclxcbic7XG4gIH1cbiAgc2RwICs9ICdhPXJ0Y3AtbXV4XFxyXFxuJztcblxuICBjYXBzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVFeHRtYXAoZXh0ZW5zaW9uKTtcbiAgfSk7XG4gIC8vIEZJWE1FOiB3cml0ZSBmZWNNZWNoYW5pc21zLlxuICByZXR1cm4gc2RwO1xufTtcblxuLy8gUGFyc2VzIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZlxuLy8gUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzLlxuU0RQVXRpbHMucGFyc2VSdHBFbmNvZGluZ1BhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGVuY29kaW5nUGFyYW1ldGVycyA9IFtdO1xuICB2YXIgZGVzY3JpcHRpb24gPSBTRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIGhhc1JlZCA9IGRlc2NyaXB0aW9uLmZlY01lY2hhbmlzbXMuaW5kZXhPZignUkVEJykgIT09IC0xO1xuICB2YXIgaGFzVWxwZmVjID0gZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5pbmRleE9mKCdVTFBGRUMnKSAhPT0gLTE7XG5cbiAgLy8gZmlsdGVyIGE9c3NyYzouLi4gY25hbWU6LCBpZ25vcmUgUGxhbkItbXNpZFxuICB2YXIgc3NyY3MgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmM6JylcbiAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICB9KVxuICAuZmlsdGVyKGZ1bmN0aW9uKHBhcnRzKSB7XG4gICAgcmV0dXJuIHBhcnRzLmF0dHJpYnV0ZSA9PT0gJ2NuYW1lJztcbiAgfSk7XG4gIHZhciBwcmltYXJ5U3NyYyA9IHNzcmNzLmxlbmd0aCA+IDAgJiYgc3NyY3NbMF0uc3NyYztcbiAgdmFyIHNlY29uZGFyeVNzcmM7XG5cbiAgdmFyIGZsb3dzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjLWdyb3VwOkZJRCcpXG4gIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJyAnKTtcbiAgICBwYXJ0cy5zaGlmdCgpO1xuICAgIHJldHVybiBwYXJ0cy5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHBhcnQsIDEwKTtcbiAgICB9KTtcbiAgfSk7XG4gIGlmIChmbG93cy5sZW5ndGggPiAwICYmIGZsb3dzWzBdLmxlbmd0aCA+IDEgJiYgZmxvd3NbMF1bMF0gPT09IHByaW1hcnlTc3JjKSB7XG4gICAgc2Vjb25kYXJ5U3NyYyA9IGZsb3dzWzBdWzFdO1xuICB9XG5cbiAgZGVzY3JpcHRpb24uY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICBpZiAoY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnUlRYJyAmJiBjb2RlYy5wYXJhbWV0ZXJzLmFwdCkge1xuICAgICAgdmFyIGVuY1BhcmFtID0ge1xuICAgICAgICBzc3JjOiBwcmltYXJ5U3NyYyxcbiAgICAgICAgY29kZWNQYXlsb2FkVHlwZTogcGFyc2VJbnQoY29kZWMucGFyYW1ldGVycy5hcHQsIDEwKSxcbiAgICAgICAgcnR4OiB7XG4gICAgICAgICAgc3NyYzogc2Vjb25kYXJ5U3NyY1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZW5jb2RpbmdQYXJhbWV0ZXJzLnB1c2goZW5jUGFyYW0pO1xuICAgICAgaWYgKGhhc1JlZCkge1xuICAgICAgICBlbmNQYXJhbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZW5jUGFyYW0pKTtcbiAgICAgICAgZW5jUGFyYW0uZmVjID0ge1xuICAgICAgICAgIHNzcmM6IHNlY29uZGFyeVNzcmMsXG4gICAgICAgICAgbWVjaGFuaXNtOiBoYXNVbHBmZWMgPyAncmVkK3VscGZlYycgOiAncmVkJ1xuICAgICAgICB9O1xuICAgICAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaChlbmNQYXJhbSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKGVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggPT09IDAgJiYgcHJpbWFyeVNzcmMpIHtcbiAgICBlbmNvZGluZ1BhcmFtZXRlcnMucHVzaCh7XG4gICAgICBzc3JjOiBwcmltYXJ5U3NyY1xuICAgIH0pO1xuICB9XG5cbiAgLy8gd2Ugc3VwcG9ydCBib3RoIGI9QVMgYW5kIGI9VElBUyBidXQgaW50ZXJwcmV0IEFTIGFzIFRJQVMuXG4gIHZhciBiYW5kd2lkdGggPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdiPScpO1xuICBpZiAoYmFuZHdpZHRoLmxlbmd0aCkge1xuICAgIGlmIChiYW5kd2lkdGhbMF0uaW5kZXhPZignYj1USUFTOicpID09PSAwKSB7XG4gICAgICBiYW5kd2lkdGggPSBwYXJzZUludChiYW5kd2lkdGhbMF0uc3Vic3RyKDcpLCAxMCk7XG4gICAgfSBlbHNlIGlmIChiYW5kd2lkdGhbMF0uaW5kZXhPZignYj1BUzonKSA9PT0gMCkge1xuICAgICAgLy8gdXNlIGZvcm11bGEgZnJvbSBKU0VQIHRvIGNvbnZlcnQgYj1BUyB0byBUSUFTIHZhbHVlLlxuICAgICAgYmFuZHdpZHRoID0gcGFyc2VJbnQoYmFuZHdpZHRoWzBdLnN1YnN0cig1KSwgMTApICogMTAwMCAqIDAuOTVcbiAgICAgICAgICAtICg1MCAqIDQwICogOCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhbmR3aWR0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZW5jb2RpbmdQYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICBwYXJhbXMubWF4Qml0cmF0ZSA9IGJhbmR3aWR0aDtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZW5jb2RpbmdQYXJhbWV0ZXJzO1xufTtcblxuLy8gcGFyc2VzIGh0dHA6Ly9kcmFmdC5vcnRjLm9yZy8jcnRjcnRjcHBhcmFtZXRlcnMqXG5TRFBVdGlscy5wYXJzZVJ0Y3BQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBydGNwUGFyYW1ldGVycyA9IHt9O1xuXG4gIHZhciBjbmFtZTtcbiAgLy8gR2V0cyB0aGUgZmlyc3QgU1NSQy4gTm90ZSB0aGF0IHdpdGggUlRYIHRoZXJlIG1pZ2h0IGJlIG11bHRpcGxlXG4gIC8vIFNTUkNzLlxuICB2YXIgcmVtb3RlU3NyYyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c3NyYzonKVxuICAgICAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIHJldHVybiBTRFBVdGlscy5wYXJzZVNzcmNNZWRpYShsaW5lKTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLmF0dHJpYnV0ZSA9PT0gJ2NuYW1lJztcbiAgICAgIH0pWzBdO1xuICBpZiAocmVtb3RlU3NyYykge1xuICAgIHJ0Y3BQYXJhbWV0ZXJzLmNuYW1lID0gcmVtb3RlU3NyYy52YWx1ZTtcbiAgICBydGNwUGFyYW1ldGVycy5zc3JjID0gcmVtb3RlU3NyYy5zc3JjO1xuICB9XG5cbiAgLy8gRWRnZSB1c2VzIHRoZSBjb21wb3VuZCBhdHRyaWJ1dGUgaW5zdGVhZCBvZiByZWR1Y2VkU2l6ZVxuICAvLyBjb21wb3VuZCBpcyAhcmVkdWNlZFNpemVcbiAgdmFyIHJzaXplID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1ydGNwLXJzaXplJyk7XG4gIHJ0Y3BQYXJhbWV0ZXJzLnJlZHVjZWRTaXplID0gcnNpemUubGVuZ3RoID4gMDtcbiAgcnRjcFBhcmFtZXRlcnMuY29tcG91bmQgPSByc2l6ZS5sZW5ndGggPT09IDA7XG5cbiAgLy8gcGFyc2VzIHRoZSBydGNwLW11eCBhdHRy0ZZidXRlLlxuICAvLyBOb3RlIHRoYXQgRWRnZSBkb2VzIG5vdCBzdXBwb3J0IHVubXV4ZWQgUlRDUC5cbiAgdmFyIG11eCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9cnRjcC1tdXgnKTtcbiAgcnRjcFBhcmFtZXRlcnMubXV4ID0gbXV4Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIHJ0Y3BQYXJhbWV0ZXJzO1xufTtcblxuLy8gcGFyc2VzIGVpdGhlciBhPW1zaWQ6IG9yIGE9c3NyYzouLi4gbXNpZCBsaW5lcyBhbmQgcmV0dXJuc1xuLy8gdGhlIGlkIG9mIHRoZSBNZWRpYVN0cmVhbSBhbmQgTWVkaWFTdHJlYW1UcmFjay5cblNEUFV0aWxzLnBhcnNlTXNpZCA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgcGFydHM7XG4gIHZhciBzcGVjID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1tc2lkOicpO1xuICBpZiAoc3BlYy5sZW5ndGggPT09IDEpIHtcbiAgICBwYXJ0cyA9IHNwZWNbMF0uc3Vic3RyKDcpLnNwbGl0KCcgJyk7XG4gICAgcmV0dXJuIHtzdHJlYW06IHBhcnRzWzBdLCB0cmFjazogcGFydHNbMV19O1xuICB9XG4gIHZhciBwbGFuQiA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c3NyYzonKVxuICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gIH0pXG4gIC5maWx0ZXIoZnVuY3Rpb24ocGFydHMpIHtcbiAgICByZXR1cm4gcGFydHMuYXR0cmlidXRlID09PSAnbXNpZCc7XG4gIH0pO1xuICBpZiAocGxhbkIubGVuZ3RoID4gMCkge1xuICAgIHBhcnRzID0gcGxhbkJbMF0udmFsdWUuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4ge3N0cmVhbTogcGFydHNbMF0sIHRyYWNrOiBwYXJ0c1sxXX07XG4gIH1cbn07XG5cbi8vIEdlbmVyYXRlIGEgc2Vzc2lvbiBJRCBmb3IgU0RQLlxuLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtcnRjd2ViLWpzZXAtMjAjc2VjdGlvbi01LjIuMVxuLy8gcmVjb21tZW5kcyB1c2luZyBhIGNyeXB0b2dyYXBoaWNhbGx5IHJhbmRvbSArdmUgNjQtYml0IHZhbHVlXG4vLyBidXQgcmlnaHQgbm93IHRoaXMgc2hvdWxkIGJlIGFjY2VwdGFibGUgYW5kIHdpdGhpbiB0aGUgcmlnaHQgcmFuZ2VcblNEUFV0aWxzLmdlbmVyYXRlU2Vzc2lvbklkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3Vic3RyKDIsIDIxKTtcbn07XG5cbi8vIFdyaXRlIGJvaWxkZXIgcGxhdGUgZm9yIHN0YXJ0IG9mIFNEUFxuLy8gc2Vzc0lkIGFyZ3VtZW50IGlzIG9wdGlvbmFsIC0gaWYgbm90IHN1cHBsaWVkIGl0IHdpbGxcbi8vIGJlIGdlbmVyYXRlZCByYW5kb21seVxuLy8gc2Vzc1ZlcnNpb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIDJcblNEUFV0aWxzLndyaXRlU2Vzc2lvbkJvaWxlcnBsYXRlID0gZnVuY3Rpb24oc2Vzc0lkLCBzZXNzVmVyKSB7XG4gIHZhciBzZXNzaW9uSWQ7XG4gIHZhciB2ZXJzaW9uID0gc2Vzc1ZlciAhPT0gdW5kZWZpbmVkID8gc2Vzc1ZlciA6IDI7XG4gIGlmIChzZXNzSWQpIHtcbiAgICBzZXNzaW9uSWQgPSBzZXNzSWQ7XG4gIH0gZWxzZSB7XG4gICAgc2Vzc2lvbklkID0gU0RQVXRpbHMuZ2VuZXJhdGVTZXNzaW9uSWQoKTtcbiAgfVxuICAvLyBGSVhNRTogc2Vzcy1pZCBzaG91bGQgYmUgYW4gTlRQIHRpbWVzdGFtcC5cbiAgcmV0dXJuICd2PTBcXHJcXG4nICtcbiAgICAgICdvPXRoaXNpc2FkYXB0ZXJvcnRjICcgKyBzZXNzaW9uSWQgKyAnICcgKyB2ZXJzaW9uICsgJyBJTiBJUDQgMTI3LjAuMC4xXFxyXFxuJyArXG4gICAgICAncz0tXFxyXFxuJyArXG4gICAgICAndD0wIDBcXHJcXG4nO1xufTtcblxuU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24gPSBmdW5jdGlvbih0cmFuc2NlaXZlciwgY2FwcywgdHlwZSwgc3RyZWFtKSB7XG4gIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVJ0cERlc2NyaXB0aW9uKHRyYW5zY2VpdmVyLmtpbmQsIGNhcHMpO1xuXG4gIC8vIE1hcCBJQ0UgcGFyYW1ldGVycyAodWZyYWcsIHB3ZCkgdG8gU0RQLlxuICBzZHAgKz0gU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzKFxuICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuZ2V0TG9jYWxQYXJhbWV0ZXJzKCkpO1xuXG4gIC8vIE1hcCBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuICBzZHAgKz0gU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyhcbiAgICAgIHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQuZ2V0TG9jYWxQYXJhbWV0ZXJzKCksXG4gICAgICB0eXBlID09PSAnb2ZmZXInID8gJ2FjdHBhc3MnIDogJ2FjdGl2ZScpO1xuXG4gIHNkcCArPSAnYT1taWQ6JyArIHRyYW5zY2VpdmVyLm1pZCArICdcXHJcXG4nO1xuXG4gIGlmICh0cmFuc2NlaXZlci5kaXJlY3Rpb24pIHtcbiAgICBzZHAgKz0gJ2E9JyArIHRyYW5zY2VpdmVyLmRpcmVjdGlvbiArICdcXHJcXG4nO1xuICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlciAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgIHNkcCArPSAnYT1zZW5kcmVjdlxcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgc2RwICs9ICdhPXNlbmRvbmx5XFxyXFxuJztcbiAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgIHNkcCArPSAnYT1yZWN2b25seVxcclxcbic7XG4gIH0gZWxzZSB7XG4gICAgc2RwICs9ICdhPWluYWN0aXZlXFxyXFxuJztcbiAgfVxuXG4gIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAvLyBzcGVjLlxuICAgIHZhciBtc2lkID0gJ21zaWQ6JyArIHN0cmVhbS5pZCArICcgJyArXG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci50cmFjay5pZCArICdcXHJcXG4nO1xuICAgIHNkcCArPSAnYT0nICsgbXNpZDtcblxuICAgIC8vIGZvciBDaHJvbWUuXG4gICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArXG4gICAgICAgICcgJyArIG1zaWQ7XG4gICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICAgJyAnICsgbXNpZDtcbiAgICAgIHNkcCArPSAnYT1zc3JjLWdyb3VwOkZJRCAnICtcbiAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgKyAnICcgK1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAgICdcXHJcXG4nO1xuICAgIH1cbiAgfVxuICAvLyBGSVhNRTogdGhpcyBzaG91bGQgYmUgd3JpdHRlbiBieSB3cml0ZVJ0cERlc2NyaXB0aW9uLlxuICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICtcbiAgICAgICcgY25hbWU6JyArIFNEUFV0aWxzLmxvY2FsQ05hbWUgKyAnXFxyXFxuJztcbiAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlciAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgJyBjbmFtZTonICsgU0RQVXRpbHMubG9jYWxDTmFtZSArICdcXHJcXG4nO1xuICB9XG4gIHJldHVybiBzZHA7XG59O1xuXG4vLyBHZXRzIHRoZSBkaXJlY3Rpb24gZnJvbSB0aGUgbWVkaWFTZWN0aW9uIG9yIHRoZSBzZXNzaW9ucGFydC5cblNEUFV0aWxzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgLy8gTG9vayBmb3Igc2VuZHJlY3YsIHNlbmRvbmx5LCByZWN2b25seSwgaW5hY3RpdmUsIGRlZmF1bHQgdG8gc2VuZHJlY3YuXG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAobGluZXNbaV0pIHtcbiAgICAgIGNhc2UgJ2E9c2VuZHJlY3YnOlxuICAgICAgY2FzZSAnYT1zZW5kb25seSc6XG4gICAgICBjYXNlICdhPXJlY3Zvbmx5JzpcbiAgICAgIGNhc2UgJ2E9aW5hY3RpdmUnOlxuICAgICAgICByZXR1cm4gbGluZXNbaV0uc3Vic3RyKDIpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gRklYTUU6IFdoYXQgc2hvdWxkIGhhcHBlbiBoZXJlP1xuICAgIH1cbiAgfVxuICBpZiAoc2Vzc2lvbnBhcnQpIHtcbiAgICByZXR1cm4gU0RQVXRpbHMuZ2V0RGlyZWN0aW9uKHNlc3Npb25wYXJ0KTtcbiAgfVxuICByZXR1cm4gJ3NlbmRyZWN2Jztcbn07XG5cblNEUFV0aWxzLmdldEtpbmQgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICByZXR1cm4gbWxpbmVbMF0uc3Vic3RyKDIpO1xufTtcblxuU0RQVXRpbHMuaXNSZWplY3RlZCA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICByZXR1cm4gbWVkaWFTZWN0aW9uLnNwbGl0KCcgJywgMilbMV0gPT09ICcwJztcbn07XG5cblNEUFV0aWxzLnBhcnNlTUxpbmUgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGtpbmQ6IG1saW5lWzBdLnN1YnN0cigyKSxcbiAgICBwb3J0OiBwYXJzZUludChtbGluZVsxXSwgMTApLFxuICAgIHByb3RvY29sOiBtbGluZVsyXSxcbiAgICBmbXQ6IG1saW5lLnNsaWNlKDMpLmpvaW4oJyAnKVxuICB9O1xufTtcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gU0RQVXRpbHM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2RwL3NkcC5qc1xuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBhZGFwdGVyRmFjdG9yeSA9IHJlcXVpcmUoJy4vYWRhcHRlcl9mYWN0b3J5LmpzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGFkYXB0ZXJGYWN0b3J5KHt3aW5kb3c6IGdsb2JhbC53aW5kb3d9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvYWRhcHRlcl9jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gU2hpbW1pbmcgc3RhcnRzIGhlcmUuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRlcGVuZGVuY2llcywgb3B0cykge1xuICB2YXIgd2luZG93ID0gZGVwZW5kZW5jaWVzICYmIGRlcGVuZGVuY2llcy53aW5kb3c7XG5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgc2hpbUNocm9tZTogdHJ1ZSxcbiAgICBzaGltRmlyZWZveDogdHJ1ZSxcbiAgICBzaGltRWRnZTogdHJ1ZSxcbiAgICBzaGltU2FmYXJpOiB0cnVlLFxuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBvcHRzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob3B0cywga2V5KSkge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuICAgIH1cbiAgfVxuXG4gIC8vIFV0aWxzLlxuICB2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4gIHZhciBsb2dnaW5nID0gdXRpbHMubG9nO1xuICB2YXIgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgdmFyIGFkYXB0ZXIgPSB7XG4gICAgYnJvd3NlckRldGFpbHM6IGJyb3dzZXJEZXRhaWxzLFxuICAgIGV4dHJhY3RWZXJzaW9uOiB1dGlscy5leHRyYWN0VmVyc2lvbixcbiAgICBkaXNhYmxlTG9nOiB1dGlscy5kaXNhYmxlTG9nLFxuICAgIGRpc2FibGVXYXJuaW5nczogdXRpbHMuZGlzYWJsZVdhcm5pbmdzXG4gIH07XG5cbiAgLy8gVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IGlmIHlvdSB3YW50IGxvZ2dpbmcgdG8gb2NjdXIsIGluY2x1ZGluZyBsb2dnaW5nXG4gIC8vIGZvciB0aGUgc3dpdGNoIHN0YXRlbWVudCBiZWxvdy4gQ2FuIGFsc28gYmUgdHVybmVkIG9uIGluIHRoZSBicm93c2VyIHZpYVxuICAvLyBhZGFwdGVyLmRpc2FibGVMb2coZmFsc2UpLCBidXQgdGhlbiBsb2dnaW5nIGZyb20gdGhlIHN3aXRjaCBzdGF0ZW1lbnQgYmVsb3dcbiAgLy8gd2lsbCBub3QgYXBwZWFyLlxuICAvLyByZXF1aXJlKCcuL3V0aWxzJykuZGlzYWJsZUxvZyhmYWxzZSk7XG5cbiAgLy8gQnJvd3NlciBzaGltcy5cbiAgdmFyIGNocm9tZVNoaW0gPSByZXF1aXJlKCcuL2Nocm9tZS9jaHJvbWVfc2hpbScpIHx8IG51bGw7XG4gIHZhciBlZGdlU2hpbSA9IHJlcXVpcmUoJy4vZWRnZS9lZGdlX3NoaW0nKSB8fCBudWxsO1xuICB2YXIgZmlyZWZveFNoaW0gPSByZXF1aXJlKCcuL2ZpcmVmb3gvZmlyZWZveF9zaGltJykgfHwgbnVsbDtcbiAgdmFyIHNhZmFyaVNoaW0gPSByZXF1aXJlKCcuL3NhZmFyaS9zYWZhcmlfc2hpbScpIHx8IG51bGw7XG5cbiAgLy8gU2hpbSBicm93c2VyIGlmIGZvdW5kLlxuICBzd2l0Y2ggKGJyb3dzZXJEZXRhaWxzLmJyb3dzZXIpIHtcbiAgICBjYXNlICdjaHJvbWUnOlxuICAgICAgaWYgKCFjaHJvbWVTaGltIHx8ICFjaHJvbWVTaGltLnNoaW1QZWVyQ29ubmVjdGlvbiB8fFxuICAgICAgICAgICFvcHRpb25zLnNoaW1DaHJvbWUpIHtcbiAgICAgICAgbG9nZ2luZygnQ2hyb21lIHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgY2hyb21lLicpO1xuICAgICAgLy8gRXhwb3J0IHRvIHRoZSBhZGFwdGVyIGdsb2JhbCBvYmplY3QgdmlzaWJsZSBpbiB0aGUgYnJvd3Nlci5cbiAgICAgIGFkYXB0ZXIuYnJvd3NlclNoaW0gPSBjaHJvbWVTaGltO1xuXG4gICAgICBjaHJvbWVTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbU1lZGlhU3RyZWFtKHdpbmRvdyk7XG4gICAgICB1dGlscy5zaGltQ3JlYXRlT2JqZWN0VVJMKHdpbmRvdyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1Tb3VyY2VPYmplY3Qod2luZG93KTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1PblRyYWNrKHdpbmRvdyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1BZGRUcmFja1JlbW92ZVRyYWNrKHdpbmRvdyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1HZXRTZW5kZXJzV2l0aER0bWYod2luZG93KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ZpcmVmb3gnOlxuICAgICAgaWYgKCFmaXJlZm94U2hpbSB8fCAhZmlyZWZveFNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgICAgIW9wdGlvbnMuc2hpbUZpcmVmb3gpIHtcbiAgICAgICAgbG9nZ2luZygnRmlyZWZveCBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIGZpcmVmb3guJyk7XG4gICAgICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICAgICAgYWRhcHRlci5icm93c2VyU2hpbSA9IGZpcmVmb3hTaGltO1xuXG4gICAgICBmaXJlZm94U2hpbS5zaGltR2V0VXNlck1lZGlhKHdpbmRvdyk7XG4gICAgICB1dGlscy5zaGltQ3JlYXRlT2JqZWN0VVJMKHdpbmRvdyk7XG4gICAgICBmaXJlZm94U2hpbS5zaGltU291cmNlT2JqZWN0KHdpbmRvdyk7XG4gICAgICBmaXJlZm94U2hpbS5zaGltUGVlckNvbm5lY3Rpb24od2luZG93KTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1PblRyYWNrKHdpbmRvdyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlZGdlJzpcbiAgICAgIGlmICghZWRnZVNoaW0gfHwgIWVkZ2VTaGltLnNoaW1QZWVyQ29ubmVjdGlvbiB8fCAhb3B0aW9ucy5zaGltRWRnZSkge1xuICAgICAgICBsb2dnaW5nKCdNUyBlZGdlIHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgZWRnZS4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gZWRnZVNoaW07XG5cbiAgICAgIGVkZ2VTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIGVkZ2VTaGltLnNoaW1QZWVyQ29ubmVjdGlvbih3aW5kb3cpO1xuICAgICAgZWRnZVNoaW0uc2hpbVJlcGxhY2VUcmFjayh3aW5kb3cpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2FmYXJpJzpcbiAgICAgIGlmICghc2FmYXJpU2hpbSB8fCAhb3B0aW9ucy5zaGltU2FmYXJpKSB7XG4gICAgICAgIGxvZ2dpbmcoJ1NhZmFyaSBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIHNhZmFyaS4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gc2FmYXJpU2hpbTtcbiAgICAgIC8vIHNoaW0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwgU2FmYXJpICh0ZWNobmljYWwgcHJldmlldylcbiAgICAgIHV0aWxzLnNoaW1DcmVhdGVPYmplY3RVUkwod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbVJUQ0ljZVNlcnZlclVybHMod2luZG93KTtcbiAgICAgIHNhZmFyaVNoaW0uc2hpbUNhbGxiYWNrc0FQSSh3aW5kb3cpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltTG9jYWxTdHJlYW1zQVBJKHdpbmRvdyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1SZW1vdGVTdHJlYW1zQVBJKHdpbmRvdyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsb2dnaW5nKCdVbnN1cHBvcnRlZCBicm93c2VyIScpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2FkYXB0ZXJfZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpO1xudmFyIGxvZ2dpbmcgPSB1dGlscy5sb2c7XG5cbnZhciBjaHJvbWVTaGltID0ge1xuICBzaGltTWVkaWFTdHJlYW06IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHdpbmRvdy5NZWRpYVN0cmVhbSA9IHdpbmRvdy5NZWRpYVN0cmVhbSB8fCB3aW5kb3cud2Via2l0TWVkaWFTdHJlYW07XG4gIH0sXG5cbiAgc2hpbU9uVHJhY2s6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgISgnb250cmFjaycgaW5cbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb250cmFjaycsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb250cmFjaztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX29udHJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbnRyYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2sgPSBmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2YXIgb3JpZ1NldFJlbW90ZURlc2NyaXB0aW9uID1cbiAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICBpZiAoIXBjLl9vbnRyYWNrcG9seSkge1xuICAgICAgICAgIHBjLl9vbnRyYWNrcG9seSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vIG9uYWRkc3RyZWFtIGRvZXMgbm90IGZpcmUgd2hlbiBhIHRyYWNrIGlzIGFkZGVkIHRvIGFuIGV4aXN0aW5nXG4gICAgICAgICAgICAvLyBzdHJlYW0uIEJ1dCBzdHJlYW0ub25hZGR0cmFjayBpcyBpbXBsZW1lbnRlZCBzbyB3ZSB1c2UgdGhhdC5cbiAgICAgICAgICAgIGUuc3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHRyYWNrJywgZnVuY3Rpb24odGUpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY2VpdmVyO1xuICAgICAgICAgICAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHBjLmdldFJlY2VpdmVycygpLmZpbmQoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIudHJhY2sgJiYgci50cmFjay5pZCA9PT0gdGUudHJhY2suaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB7dHJhY2s6IHRlLnRyYWNrfTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgndHJhY2snKTtcbiAgICAgICAgICAgICAgZXZlbnQudHJhY2sgPSB0ZS50cmFjaztcbiAgICAgICAgICAgICAgZXZlbnQucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgICAgICAgZXZlbnQuc3RyZWFtcyA9IFtlLnN0cmVhbV07XG4gICAgICAgICAgICAgIHBjLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgICAgIHZhciByZWNlaXZlcjtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0UmVjZWl2ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSBwYy5nZXRSZWNlaXZlcnMoKS5maW5kKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByLnRyYWNrICYmIHIudHJhY2suaWQgPT09IHRyYWNrLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0ge3RyYWNrOiB0cmFja307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICAgICAgcGMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBjLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHBjLl9vbnRyYWNrcG9seSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdTZXRSZW1vdGVEZXNjcmlwdGlvbi5hcHBseShwYywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIHNoaW1HZXRTZW5kZXJzV2l0aER0bWY6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIE92ZXJyaWRlcyBhZGRUcmFjay9yZW1vdmVUcmFjaywgZGVwZW5kcyBvbiBzaGltQWRkVHJhY2tSZW1vdmVUcmFjay5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmXG4gICAgICAgICEoJ2dldFNlbmRlcnMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpICYmXG4gICAgICAgICdjcmVhdGVEVE1GU2VuZGVyJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSB7XG4gICAgICB2YXIgc2hpbVNlbmRlcldpdGhEdG1mID0gZnVuY3Rpb24ocGMsIHRyYWNrKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICAgIGdldCBkdG1mKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2R0bWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAodHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBwYy5jcmVhdGVEVE1GU2VuZGVyKHRyYWNrKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2R0bWY7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcGM6IHBjXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvLyBhdWdtZW50IGFkZFRyYWNrIHdoZW4gZ2V0U2VuZGVycyBpcyBub3QgYXZhaWxhYmxlLlxuICAgICAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMpIHtcbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTZW5kZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5fc2VuZGVycyA9IHRoaXMuX3NlbmRlcnMgfHwgW107XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbmRlcnMuc2xpY2UoKTsgLy8gcmV0dXJuIGEgY29weSBvZiB0aGUgaW50ZXJuYWwgc3RhdGUuXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcmlnQWRkVHJhY2sgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrO1xuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2ssIHN0cmVhbSkge1xuICAgICAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICAgICAgdmFyIHNlbmRlciA9IG9yaWdBZGRUcmFjay5hcHBseShwYywgYXJndW1lbnRzKTtcbiAgICAgICAgICBpZiAoIXNlbmRlcikge1xuICAgICAgICAgICAgc2VuZGVyID0gc2hpbVNlbmRlcldpdGhEdG1mKHBjLCB0cmFjayk7XG4gICAgICAgICAgICBwYy5fc2VuZGVycy5wdXNoKHNlbmRlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZW5kZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9yaWdSZW1vdmVUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlVHJhY2s7XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlVHJhY2sgPSBmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICAgIG9yaWdSZW1vdmVUcmFjay5hcHBseShwYywgYXJndW1lbnRzKTtcbiAgICAgICAgICB2YXIgaWR4ID0gcGMuX3NlbmRlcnMuaW5kZXhPZihzZW5kZXIpO1xuICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICBwYy5fc2VuZGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgb3JpZ0FkZFN0cmVhbSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtO1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgICAgcGMuX3NlbmRlcnMgPSBwYy5fc2VuZGVycyB8fCBbXTtcbiAgICAgICAgb3JpZ0FkZFN0cmVhbS5hcHBseShwYywgW3N0cmVhbV0pO1xuICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgIHBjLl9zZW5kZXJzLnB1c2goc2hpbVNlbmRlcldpdGhEdG1mKHBjLCB0cmFjaykpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBvcmlnUmVtb3ZlU3RyZWFtID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgICBwYy5fc2VuZGVycyA9IHBjLl9zZW5kZXJzIHx8IFtdO1xuICAgICAgICBvcmlnUmVtb3ZlU3RyZWFtLmFwcGx5KHBjLCBbKHBjLl9zdHJlYW1zW3N0cmVhbS5pZF0gfHwgc3RyZWFtKV0pO1xuXG4gICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgdmFyIHNlbmRlciA9IHBjLl9zZW5kZXJzLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgcmV0dXJuIHMudHJhY2sgPT09IHRyYWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChzZW5kZXIpIHtcbiAgICAgICAgICAgIHBjLl9zZW5kZXJzLnNwbGljZShwYy5fc2VuZGVycy5pbmRleE9mKHNlbmRlciksIDEpOyAvLyByZW1vdmUgc2VuZGVyXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgICAgICdnZXRTZW5kZXJzJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICAnY3JlYXRlRFRNRlNlbmRlcicgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSAmJlxuICAgICAgICAgICAgICAgd2luZG93LlJUQ1J0cFNlbmRlciAmJlxuICAgICAgICAgICAgICAgISgnZHRtZicgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgICB2YXIgb3JpZ0dldFNlbmRlcnMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnM7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgICAgdmFyIHNlbmRlcnMgPSBvcmlnR2V0U2VuZGVycy5hcHBseShwYywgW10pO1xuICAgICAgICBzZW5kZXJzLmZvckVhY2goZnVuY3Rpb24oc2VuZGVyKSB7XG4gICAgICAgICAgc2VuZGVyLl9wYyA9IHBjO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlbmRlcnM7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUsICdkdG1mJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh0aGlzLl9kdG1mID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZHRtZiA9IHRoaXMuX3BjLmNyZWF0ZURUTUZTZW5kZXIodGhpcy50cmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2R0bWY7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBzaGltU291cmNlT2JqZWN0OiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB2YXIgVVJMID0gd2luZG93ICYmIHdpbmRvdy5VUkw7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudCAmJlxuICAgICAgICAhKCdzcmNPYmplY3QnIGluIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgLy8gU2hpbSB0aGUgc3JjT2JqZWN0IHByb3BlcnR5LCBvbmNlLCB3aGVuIEhUTUxNZWRpYUVsZW1lbnQgaXMgZm91bmQuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsICdzcmNPYmplY3QnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcmNPYmplY3Q7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gVXNlIF9zcmNPYmplY3QgYXMgYSBwcml2YXRlIHByb3BlcnR5IGZvciB0aGlzIHNoaW1cbiAgICAgICAgICAgIHRoaXMuX3NyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuc3JjKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5zcmMgPSAnJztcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byByZWNyZWF0ZSB0aGUgYmxvYiB1cmwgd2hlbiBhIHRyYWNrIGlzIGFkZGVkIG9yXG4gICAgICAgICAgICAvLyByZW1vdmVkLiBEb2luZyBpdCBtYW51YWxseSBzaW5jZSB3ZSB3YW50IHRvIGF2b2lkIGEgcmVjdXJzaW9uLlxuICAgICAgICAgICAgc3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHRyYWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLnNyYykge1xuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZi5zcmMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbGYuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZldHJhY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYuc3JjKSB7XG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzZWxmLnNyYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBzaGltQWRkVHJhY2tSZW1vdmVUcmFjazogZnVuY3Rpb24od2luZG93KSB7XG4gICAgLy8gc2hpbSBhZGRUcmFjayBhbmQgcmVtb3ZlVHJhY2suXG4gICAgaWYgKHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhbHNvIHNoaW0gcGMuZ2V0TG9jYWxTdHJlYW1zIHdoZW4gYWRkVHJhY2sgaXMgc2hpbW1lZFxuICAgIC8vIHRvIHJldHVybiB0aGUgb3JpZ2luYWwgc3RyZWFtcy5cbiAgICB2YXIgb3JpZ0dldExvY2FsU3RyZWFtcyA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVcbiAgICAgICAgLmdldExvY2FsU3RyZWFtcztcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIG5hdGl2ZVN0cmVhbXMgPSBvcmlnR2V0TG9jYWxTdHJlYW1zLmFwcGx5KHRoaXMpO1xuICAgICAgc2VsZi5fcmV2ZXJzZVN0cmVhbXMgPSBzZWxmLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcbiAgICAgIHJldHVybiBuYXRpdmVTdHJlYW1zLm1hcChmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX3JldmVyc2VTdHJlYW1zW3N0cmVhbS5pZF07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIG9yaWdBZGRTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgdmFyIHBjID0gdGhpcztcbiAgICAgIHBjLl9zdHJlYW1zID0gcGMuX3N0cmVhbXMgfHwge307XG4gICAgICBwYy5fcmV2ZXJzZVN0cmVhbXMgPSBwYy5fcmV2ZXJzZVN0cmVhbXMgfHwge307XG5cbiAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgIHZhciBhbHJlYWR5RXhpc3RzID0gcGMuZ2V0U2VuZGVycygpLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICAgIHJldHVybiBzLnRyYWNrID09PSB0cmFjaztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVHJhY2sgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICAgJ0ludmFsaWRBY2Nlc3NFcnJvcicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBpZGVudGl0eSBtYXBwaW5nIGZvciBjb25zaXN0ZW5jeSB3aXRoIGFkZFRyYWNrLlxuICAgICAgLy8gVW5sZXNzIHRoaXMgaXMgYmVpbmcgdXNlZCB3aXRoIGEgc3RyZWFtIGZyb20gYWRkVHJhY2suXG4gICAgICBpZiAoIXBjLl9yZXZlcnNlU3RyZWFtc1tzdHJlYW0uaWRdKSB7XG4gICAgICAgIHZhciBuZXdTdHJlYW0gPSBuZXcgd2luZG93Lk1lZGlhU3RyZWFtKHN0cmVhbS5nZXRUcmFja3MoKSk7XG4gICAgICAgIHBjLl9zdHJlYW1zW3N0cmVhbS5pZF0gPSBuZXdTdHJlYW07XG4gICAgICAgIHBjLl9yZXZlcnNlU3RyZWFtc1tuZXdTdHJlYW0uaWRdID0gc3RyZWFtO1xuICAgICAgICBzdHJlYW0gPSBuZXdTdHJlYW07XG4gICAgICB9XG4gICAgICBvcmlnQWRkU3RyZWFtLmFwcGx5KHBjLCBbc3RyZWFtXSk7XG4gICAgfTtcblxuICAgIHZhciBvcmlnUmVtb3ZlU3RyZWFtID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW07XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICBwYy5fc3RyZWFtcyA9IHBjLl9zdHJlYW1zIHx8IHt9O1xuICAgICAgcGMuX3JldmVyc2VTdHJlYW1zID0gcGMuX3JldmVyc2VTdHJlYW1zIHx8IHt9O1xuXG4gICAgICBvcmlnUmVtb3ZlU3RyZWFtLmFwcGx5KHBjLCBbKHBjLl9zdHJlYW1zW3N0cmVhbS5pZF0gfHwgc3RyZWFtKV0pO1xuICAgICAgZGVsZXRlIHBjLl9yZXZlcnNlU3RyZWFtc1socGMuX3N0cmVhbXNbc3RyZWFtLmlkXSA/XG4gICAgICAgICAgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXS5pZCA6IHN0cmVhbS5pZCldO1xuICAgICAgZGVsZXRlIHBjLl9zdHJlYW1zW3N0cmVhbS5pZF07XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaywgc3RyZWFtKSB7XG4gICAgICB2YXIgcGMgPSB0aGlzO1xuICAgICAgaWYgKHBjLnNpZ25hbGluZ1N0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAgICdUaGUgUlRDUGVlckNvbm5lY3Rpb25cXCdzIHNpZ25hbGluZ1N0YXRlIGlzIFxcJ2Nsb3NlZFxcJy4nLFxuICAgICAgICAgICdJbnZhbGlkU3RhdGVFcnJvcicpO1xuICAgICAgfVxuICAgICAgdmFyIHN0cmVhbXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICBpZiAoc3RyZWFtcy5sZW5ndGggIT09IDEgfHxcbiAgICAgICAgICAhc3RyZWFtc1swXS5nZXRUcmFja3MoKS5maW5kKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ID09PSB0cmFjaztcbiAgICAgICAgICB9KSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCBmdWxseSBjb3JyZWN0IGJ1dCBhbGwgd2UgY2FuIG1hbmFnZSB3aXRob3V0XG4gICAgICAgIC8vIFtbYXNzb2NpYXRlZCBNZWRpYVN0cmVhbXNdXSBpbnRlcm5hbCBzbG90LlxuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAgICdUaGUgYWRhcHRlci5qcyBhZGRUcmFjayBwb2x5ZmlsbCBvbmx5IHN1cHBvcnRzIGEgc2luZ2xlICcgK1xuICAgICAgICAgICcgc3RyZWFtIHdoaWNoIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIHRyYWNrLicsXG4gICAgICAgICAgJ05vdFN1cHBvcnRlZEVycm9yJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbHJlYWR5RXhpc3RzID0gcGMuZ2V0U2VuZGVycygpLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICB9KTtcbiAgICAgIGlmIChhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJ1RyYWNrIGFscmVhZHkgZXhpc3RzLicsXG4gICAgICAgICAgICAnSW52YWxpZEFjY2Vzc0Vycm9yJyk7XG4gICAgICB9XG5cbiAgICAgIHBjLl9zdHJlYW1zID0gcGMuX3N0cmVhbXMgfHwge307XG4gICAgICBwYy5fcmV2ZXJzZVN0cmVhbXMgPSBwYy5fcmV2ZXJzZVN0cmVhbXMgfHwge307XG4gICAgICB2YXIgb2xkU3RyZWFtID0gcGMuX3N0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICAgIGlmIChvbGRTdHJlYW0pIHtcbiAgICAgICAgLy8gdGhpcyBpcyB1c2luZyBvZGQgQ2hyb21lIGJlaGF2aW91ciwgdXNlIHdpdGggY2F1dGlvbjpcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTc4MTVcbiAgICAgICAgLy8gTm90ZTogd2UgcmVseSBvbiB0aGUgaGlnaC1sZXZlbCBhZGRUcmFjay9kdG1mIHNoaW0gdG9cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBzZW5kZXIgd2l0aCBhIGR0bWYgc2VuZGVyLlxuICAgICAgICBvbGRTdHJlYW0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICBwYy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbmVnb3RpYXRpb25uZWVkZWQnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3U3RyZWFtID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbShbdHJhY2tdKTtcbiAgICAgICAgcGMuX3N0cmVhbXNbc3RyZWFtLmlkXSA9IG5ld1N0cmVhbTtcbiAgICAgICAgcGMuX3JldmVyc2VTdHJlYW1zW25ld1N0cmVhbS5pZF0gPSBzdHJlYW07XG4gICAgICAgIHBjLmFkZFN0cmVhbShuZXdTdHJlYW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBjLmdldFNlbmRlcnMoKS5maW5kKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIHMudHJhY2sgPT09IHRyYWNrO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlVHJhY2sgPSBmdW5jdGlvbihzZW5kZXIpIHtcbiAgICAgIHZhciBwYyA9IHRoaXM7XG4gICAgICBpZiAocGMuc2lnbmFsaW5nU3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBSVENQZWVyQ29ubmVjdGlvblxcJ3Mgc2lnbmFsaW5nU3RhdGUgaXMgXFwnY2xvc2VkXFwnLicsXG4gICAgICAgICAgJ0ludmFsaWRTdGF0ZUVycm9yJyk7XG4gICAgICB9XG4gICAgICAvLyBXZSBjYW4gbm90IHlldCBjaGVjayBmb3Igc2VuZGVyIGluc3RhbmNlb2YgUlRDUnRwU2VuZGVyXG4gICAgICAvLyBzaW5jZSB3ZSBzaGltIFJUUFNlbmRlci4gU28gd2UgY2hlY2sgaWYgc2VuZGVyLl9wYyBpcyBzZXQuXG4gICAgICBpZiAoIXNlbmRlci5fcGMpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignQXJndW1lbnQgMSBvZiBSVENQZWVyQ29ubmVjdGlvbi5yZW1vdmVUcmFjayAnICtcbiAgICAgICAgICAgICdkb2VzIG5vdCBpbXBsZW1lbnQgaW50ZXJmYWNlIFJUQ1J0cFNlbmRlci4nLCAnVHlwZUVycm9yJyk7XG4gICAgICB9XG4gICAgICB2YXIgaXNMb2NhbCA9IHNlbmRlci5fcGMgPT09IHBjO1xuICAgICAgaWYgKCFpc0xvY2FsKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJ1NlbmRlciB3YXMgbm90IGNyZWF0ZWQgYnkgdGhpcyBjb25uZWN0aW9uLicsXG4gICAgICAgICAgICAnSW52YWxpZEFjY2Vzc0Vycm9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlYXJjaCBmb3IgdGhlIG5hdGl2ZSBzdHJlYW0gdGhlIHNlbmRlcnMgdHJhY2sgYmVsb25ncyB0by5cbiAgICAgIHBjLl9zdHJlYW1zID0gcGMuX3N0cmVhbXMgfHwge307XG4gICAgICB2YXIgc3RyZWFtO1xuICAgICAgT2JqZWN0LmtleXMocGMuX3N0cmVhbXMpLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtaWQpIHtcbiAgICAgICAgdmFyIGhhc1RyYWNrID0gcGMuX3N0cmVhbXNbc3RyZWFtaWRdLmdldFRyYWNrcygpLmZpbmQoZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICByZXR1cm4gc2VuZGVyLnRyYWNrID09PSB0cmFjaztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChoYXNUcmFjaykge1xuICAgICAgICAgIHN0cmVhbSA9IHBjLl9zdHJlYW1zW3N0cmVhbWlkXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgaWYgKHN0cmVhbS5nZXRUcmFja3MoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBsYXN0IHRyYWNrIG9mIHRoZSBzdHJlYW0sIHJlbW92ZSB0aGUgc3RyZWFtLiBUaGlzXG4gICAgICAgICAgLy8gdGFrZXMgY2FyZSBvZiBhbnkgc2hpbW1lZCBfc2VuZGVycy5cbiAgICAgICAgICBwYy5yZW1vdmVTdHJlYW0oc3RyZWFtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZWx5aW5nIG9uIHRoZSBzYW1lIG9kZCBjaHJvbWUgYmVoYXZpb3VyIGFzIGFib3ZlLlxuICAgICAgICAgIHN0cmVhbS5yZW1vdmVUcmFjayhzZW5kZXIudHJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHBjLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuXG4gICAgLy8gVGhlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC5cbiAgICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIGljZVRyYW5zcG9ydFBvbGljeSB0byBpY2VUcmFuc3BvcnRzLFxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD00ODY5XG4gICAgICAgIC8vIHRoaXMgd2FzIGZpeGVkIGluIE01NiBhbG9uZyB3aXRoIHVucHJlZml4aW5nIFJUQ1BlZXJDb25uZWN0aW9uLlxuICAgICAgICBsb2dnaW5nKCdQZWVyQ29ubmVjdGlvbicpO1xuICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlVHJhbnNwb3J0UG9saWN5KSB7XG4gICAgICAgICAgcGNDb25maWcuaWNlVHJhbnNwb3J0cyA9IHBjQ29uZmlnLmljZVRyYW5zcG9ydFBvbGljeTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID1cbiAgICAgICAgICB3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgICAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgICAgIGlmICh3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLCAnZ2VuZXJhdGVDZXJ0aWZpY2F0ZScsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1pZ3JhdGUgZnJvbSBub24tc3BlYyBSVENJY2VTZXJ2ZXIudXJsIHRvIFJUQ0ljZVNlcnZlci51cmxzXG4gICAgICB2YXIgT3JpZ1BlZXJDb25uZWN0aW9uID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uO1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgICB2YXIgbmV3SWNlU2VydmVycyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGNDb25maWcuaWNlU2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG4gICAgICAgICAgICBpZiAoIXNlcnZlci5oYXNPd25Qcm9wZXJ0eSgndXJscycpICYmXG4gICAgICAgICAgICAgICAgc2VydmVyLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgICB1dGlscy5kZXByZWNhdGVkKCdSVENJY2VTZXJ2ZXIudXJsJywgJ1JUQ0ljZVNlcnZlci51cmxzJyk7XG4gICAgICAgICAgICAgIHNlcnZlciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VydmVyKSk7XG4gICAgICAgICAgICAgIHNlcnZlci51cmxzID0gc2VydmVyLnVybDtcbiAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHNlcnZlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2gocGNDb25maWcuaWNlU2VydmVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHBjQ29uZmlnLmljZVNlcnZlcnMgPSBuZXdJY2VTZXJ2ZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgT3JpZ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID0gT3JpZ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcbiAgICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLCAnZ2VuZXJhdGVDZXJ0aWZpY2F0ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gT3JpZ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBvcmlnR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbihzZWxlY3RvcixcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYSBmdW5jdGlvbiB0aGVuIHdlIGFyZSBpbiB0aGUgb2xkIHN0eWxlIHN0YXRzIHNvIGp1c3RcbiAgICAgIC8vIHBhc3MgYmFjayB0aGUgb3JpZ2luYWwgZ2V0U3RhdHMgZm9ybWF0IHRvIGF2b2lkIGJyZWFraW5nIG9sZCB1c2Vycy5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIHNwZWMtc3R5bGUgZ2V0U3RhdHMgaXMgc3VwcG9ydGVkLCByZXR1cm4gdGhvc2Ugd2hlbiBjYWxsZWQgd2l0aFxuICAgICAgLy8gZWl0aGVyIG5vIGFyZ3VtZW50cyBvciB0aGUgc2VsZWN0b3IgYXJndW1lbnQgaXMgbnVsbC5cbiAgICAgIGlmIChvcmlnR2V0U3RhdHMubGVuZ3RoID09PSAwICYmIChhcmd1bWVudHMubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbXSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaXhDaHJvbWVTdGF0c18gPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgICAgICAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgICAgICAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgICAgICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgICAgICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgICAgICAgICAgfVtyZXBvcnQudHlwZV0gfHwgcmVwb3J0LnR5cGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlcG9ydC5uYW1lcygpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgc3RhbmRhcmRTdGF0c1tuYW1lXSA9IHJlcG9ydC5zdGF0KG5hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0YW5kYXJkUmVwb3J0W3N0YW5kYXJkU3RhdHMuaWRdID0gc3RhbmRhcmRTdGF0cztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkUmVwb3J0O1xuICAgICAgfTtcblxuICAgICAgLy8gc2hpbSBnZXRTdGF0cyB3aXRoIG1hcGxpa2Ugc3VwcG9ydFxuICAgICAgdmFyIG1ha2VNYXBTdGF0cyA9IGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWFwKE9iamVjdC5rZXlzKHN0YXRzKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIFtrZXksIHN0YXRzW2tleV1dO1xuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyXyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgYXJnc1sxXShtYWtlTWFwU3RhdHMoZml4Q2hyb21lU3RhdHNfKHJlc3BvbnNlKSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBvcmlnR2V0U3RhdHMuYXBwbHkodGhpcywgW3N1Y2Nlc3NDYWxsYmFja1dyYXBwZXJfLFxuICAgICAgICAgIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBwcm9taXNlLXN1cHBvcnRcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgb3JpZ0dldFN0YXRzLmFwcGx5KHNlbGYsIFtcbiAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShtYWtlTWFwU3RhdHMoZml4Q2hyb21lU3RhdHNfKHJlc3BvbnNlKSkpO1xuICAgICAgICAgIH0sIHJlamVjdF0pO1xuICAgICAgfSkudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgIH07XG5cbiAgICAvLyBhZGQgcHJvbWlzZSBzdXBwb3J0IC0tIG5hdGl2ZWx5IGF2YWlsYWJsZSBpbiBDaHJvbWUgNTFcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUxKSB7XG4gICAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVNZXRob2QuYXBwbHkoc2VsZiwgW2FyZ3NbMF0sIHJlc29sdmUsIHJlamVjdF0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYXJnc1sxXS5hcHBseShudWxsLCBbXSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICBhcmdzWzJdLmFwcGx5KG51bGwsIFtlcnJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwcm9taXNlIHN1cHBvcnQgZm9yIGNyZWF0ZU9mZmVyIGFuZCBjcmVhdGVBbnN3ZXIuIEF2YWlsYWJsZSAod2l0aG91dFxuICAgIC8vIGJ1Z3MpIHNpbmNlIE01MjogY3JidWcvNjE5Mjg5XG4gICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA1Mikge1xuICAgICAgWydjcmVhdGVPZmZlcicsICdjcmVhdGVBbnN3ZXInXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICB2YXIgbmF0aXZlTWV0aG9kID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICBuYXRpdmVNZXRob2QuYXBwbHkoc2VsZiwgW3Jlc29sdmUsIHJlamVjdCwgb3B0c10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNoaW0gaW1wbGljaXQgY3JlYXRpb24gb2YgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uL1JUQ0ljZUNhbmRpZGF0ZVxuICAgIFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbicsICdhZGRJY2VDYW5kaWRhdGUnXVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICB2YXIgbmF0aXZlTWV0aG9kID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gbmV3ICgobWV0aG9kID09PSAnYWRkSWNlQ2FuZGlkYXRlJykgP1xuICAgICAgICAgICAgICAgIHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgOlxuICAgICAgICAgICAgICAgIHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24pKGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBzdXBwb3J0IGZvciBhZGRJY2VDYW5kaWRhdGUobnVsbCBvciB1bmRlZmluZWQpXG4gICAgdmFyIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZSA9XG4gICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgICAgICAgYXJndW1lbnRzWzFdLmFwcGx5KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVBZGRJY2VDYW5kaWRhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59O1xuXG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGltTWVkaWFTdHJlYW06IGNocm9tZVNoaW0uc2hpbU1lZGlhU3RyZWFtLFxuICBzaGltT25UcmFjazogY2hyb21lU2hpbS5zaGltT25UcmFjayxcbiAgc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2s6IGNocm9tZVNoaW0uc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2ssXG4gIHNoaW1HZXRTZW5kZXJzV2l0aER0bWY6IGNocm9tZVNoaW0uc2hpbUdldFNlbmRlcnNXaXRoRHRtZixcbiAgc2hpbVNvdXJjZU9iamVjdDogY2hyb21lU2hpbS5zaGltU291cmNlT2JqZWN0LFxuICBzaGltUGVlckNvbm5lY3Rpb246IGNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uLFxuICBzaGltR2V0VXNlck1lZGlhOiByZXF1aXJlKCcuL2dldHVzZXJtZWRpYScpXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvY2hyb21lX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG52YXIgbG9nZ2luZyA9IHV0aWxzLmxvZztcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuICB2YXIgbmF2aWdhdG9yID0gd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3I7XG5cbiAgdmFyIGNvbnN0cmFpbnRzVG9DaHJvbWVfID0gZnVuY3Rpb24oYykge1xuICAgIGlmICh0eXBlb2YgYyAhPT0gJ29iamVjdCcgfHwgYy5tYW5kYXRvcnkgfHwgYy5vcHRpb25hbCkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHZhciBjYyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVxdWlyZScgfHwga2V5ID09PSAnYWR2YW5jZWQnIHx8IGtleSA9PT0gJ21lZGlhU291cmNlJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgciA9ICh0eXBlb2YgY1trZXldID09PSAnb2JqZWN0JykgPyBjW2tleV0gOiB7aWRlYWw6IGNba2V5XX07XG4gICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByLmV4YWN0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByLm1pbiA9IHIubWF4ID0gci5leGFjdDtcbiAgICAgIH1cbiAgICAgIHZhciBvbGRuYW1lXyA9IGZ1bmN0aW9uKHByZWZpeCwgbmFtZSkge1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCArIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmFtZSA9PT0gJ2RldmljZUlkJykgPyAnc291cmNlSWQnIDogbmFtZTtcbiAgICAgIH07XG4gICAgICBpZiAoci5pZGVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNjLm9wdGlvbmFsID0gY2Mub3B0aW9uYWwgfHwgW107XG4gICAgICAgIHZhciBvYyA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHIuaWRlYWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgb2Nbb2xkbmFtZV8oJ21pbicsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgICBvYyA9IHt9O1xuICAgICAgICAgIG9jW29sZG5hbWVfKCdtYXgnLCBrZXkpXSA9IHIuaWRlYWw7XG4gICAgICAgICAgY2Mub3B0aW9uYWwucHVzaChvYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2Nbb2xkbmFtZV8oJycsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygci5leGFjdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgY2MubWFuZGF0b3J5ID0gY2MubWFuZGF0b3J5IHx8IHt9O1xuICAgICAgICBjYy5tYW5kYXRvcnlbb2xkbmFtZV8oJycsIGtleSldID0gci5leGFjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFsnbWluJywgJ21heCddLmZvckVhY2goZnVuY3Rpb24obWl4KSB7XG4gICAgICAgICAgaWYgKHJbbWl4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYy5tYW5kYXRvcnkgPSBjYy5tYW5kYXRvcnkgfHwge307XG4gICAgICAgICAgICBjYy5tYW5kYXRvcnlbb2xkbmFtZV8obWl4LCBrZXkpXSA9IHJbbWl4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjLmFkdmFuY2VkKSB7XG4gICAgICBjYy5vcHRpb25hbCA9IChjYy5vcHRpb25hbCB8fCBbXSkuY29uY2F0KGMuYWR2YW5jZWQpO1xuICAgIH1cbiAgICByZXR1cm4gY2M7XG4gIH07XG5cbiAgdmFyIHNoaW1Db25zdHJhaW50c18gPSBmdW5jdGlvbihjb25zdHJhaW50cywgZnVuYykge1xuICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIGlmIChjb25zdHJhaW50cyAmJiB0eXBlb2YgY29uc3RyYWludHMuYXVkaW8gPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgcmVtYXAgPSBmdW5jdGlvbihvYmosIGEsIGIpIHtcbiAgICAgICAgaWYgKGEgaW4gb2JqICYmICEoYiBpbiBvYmopKSB7XG4gICAgICAgICAgb2JqW2JdID0gb2JqW2FdO1xuICAgICAgICAgIGRlbGV0ZSBvYmpbYV07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdHJhaW50cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICAgIHJlbWFwKGNvbnN0cmFpbnRzLmF1ZGlvLCAnYXV0b0dhaW5Db250cm9sJywgJ2dvb2dBdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgIHJlbWFwKGNvbnN0cmFpbnRzLmF1ZGlvLCAnbm9pc2VTdXBwcmVzc2lvbicsICdnb29nTm9pc2VTdXBwcmVzc2lvbicpO1xuICAgICAgY29uc3RyYWludHMuYXVkaW8gPSBjb25zdHJhaW50c1RvQ2hyb21lXyhjb25zdHJhaW50cy5hdWRpbyk7XG4gICAgfVxuICAgIGlmIChjb25zdHJhaW50cyAmJiB0eXBlb2YgY29uc3RyYWludHMudmlkZW8gPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBTaGltIGZhY2luZ01vZGUgZm9yIG1vYmlsZSAmIHN1cmZhY2UgcHJvLlxuICAgICAgdmFyIGZhY2UgPSBjb25zdHJhaW50cy52aWRlby5mYWNpbmdNb2RlO1xuICAgICAgZmFjZSA9IGZhY2UgJiYgKCh0eXBlb2YgZmFjZSA9PT0gJ29iamVjdCcpID8gZmFjZSA6IHtpZGVhbDogZmFjZX0pO1xuICAgICAgdmFyIGdldFN1cHBvcnRlZEZhY2luZ01vZGVMaWVzID0gYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDYxO1xuXG4gICAgICBpZiAoKGZhY2UgJiYgKGZhY2UuZXhhY3QgPT09ICd1c2VyJyB8fCBmYWNlLmV4YWN0ID09PSAnZW52aXJvbm1lbnQnIHx8XG4gICAgICAgICAgICAgICAgICAgIGZhY2UuaWRlYWwgPT09ICd1c2VyJyB8fCBmYWNlLmlkZWFsID09PSAnZW52aXJvbm1lbnQnKSkgJiZcbiAgICAgICAgICAhKG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0U3VwcG9ydGVkQ29uc3RyYWludHMgJiZcbiAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0U3VwcG9ydGVkQ29uc3RyYWludHMoKS5mYWNpbmdNb2RlICYmXG4gICAgICAgICAgICAhZ2V0U3VwcG9ydGVkRmFjaW5nTW9kZUxpZXMpKSB7XG4gICAgICAgIGRlbGV0ZSBjb25zdHJhaW50cy52aWRlby5mYWNpbmdNb2RlO1xuICAgICAgICB2YXIgbWF0Y2hlcztcbiAgICAgICAgaWYgKGZhY2UuZXhhY3QgPT09ICdlbnZpcm9ubWVudCcgfHwgZmFjZS5pZGVhbCA9PT0gJ2Vudmlyb25tZW50Jykge1xuICAgICAgICAgIG1hdGNoZXMgPSBbJ2JhY2snLCAncmVhciddO1xuICAgICAgICB9IGVsc2UgaWYgKGZhY2UuZXhhY3QgPT09ICd1c2VyJyB8fCBmYWNlLmlkZWFsID09PSAndXNlcicpIHtcbiAgICAgICAgICBtYXRjaGVzID0gWydmcm9udCddO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgLy8gTG9vayBmb3IgbWF0Y2hlcyBpbiBsYWJlbCwgb3IgdXNlIGxhc3QgY2FtIGZvciBiYWNrICh0eXBpY2FsKS5cbiAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKClcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihkZXZpY2VzKSB7XG4gICAgICAgICAgICBkZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICByZXR1cm4gZC5raW5kID09PSAndmlkZW9pbnB1dCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBkZXYgPSBkZXZpY2VzLmZpbmQoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcy5zb21lKGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKG1hdGNoKSAhPT0gLTE7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWRldiAmJiBkZXZpY2VzLmxlbmd0aCAmJiBtYXRjaGVzLmluZGV4T2YoJ2JhY2snKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgZGV2ID0gZGV2aWNlc1tkZXZpY2VzLmxlbmd0aCAtIDFdOyAvLyBtb3JlIGxpa2VseSB0aGUgYmFjayBjYW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXYpIHtcbiAgICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSBmYWNlLmV4YWN0ID8ge2V4YWN0OiBkZXYuZGV2aWNlSWR9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkZWFsOiBkZXYuZGV2aWNlSWR9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8gPSBjb25zdHJhaW50c1RvQ2hyb21lXyhjb25zdHJhaW50cy52aWRlbyk7XG4gICAgICAgICAgICBsb2dnaW5nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMoY29uc3RyYWludHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICB9XG4gICAgbG9nZ2luZygnY2hyb21lOiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gIH07XG5cbiAgdmFyIHNoaW1FcnJvcl8gPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgUGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJyxcbiAgICAgICAgSW52YWxpZFN0YXRlRXJyb3I6ICdOb3RSZWFkYWJsZUVycm9yJyxcbiAgICAgICAgRGV2aWNlc05vdEZvdW5kRXJyb3I6ICdOb3RGb3VuZEVycm9yJyxcbiAgICAgICAgQ29uc3RyYWludE5vdFNhdGlzZmllZEVycm9yOiAnT3ZlcmNvbnN0cmFpbmVkRXJyb3InLFxuICAgICAgICBUcmFja1N0YXJ0RXJyb3I6ICdOb3RSZWFkYWJsZUVycm9yJyxcbiAgICAgICAgTWVkaWFEZXZpY2VGYWlsZWREdWVUb1NodXRkb3duOiAnTm90UmVhZGFibGVFcnJvcicsXG4gICAgICAgIE1lZGlhRGV2aWNlS2lsbFN3aXRjaE9uOiAnTm90UmVhZGFibGVFcnJvcidcbiAgICAgIH1bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnROYW1lLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgKHRoaXMubWVzc2FnZSAmJiAnOiAnKSArIHRoaXMubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBnZXRVc2VyTWVkaWFfID0gZnVuY3Rpb24oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIHNoaW1Db25zdHJhaW50c18oY29uc3RyYWludHMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgIG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEoYywgb25TdWNjZXNzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIG9uRXJyb3Ioc2hpbUVycm9yXyhlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZ2V0VXNlck1lZGlhXztcblxuICAvLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZ2V0VXNlck1lZGlhIGFzIGEgUHJvbWlzZS5cbiAgdmFyIGdldFVzZXJNZWRpYVByb21pc2VfID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMgPSB7XG4gICAgICBnZXRVc2VyTWVkaWE6IGdldFVzZXJNZWRpYVByb21pc2VfLFxuICAgICAgZW51bWVyYXRlRGV2aWNlczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgdmFyIGtpbmRzID0ge2F1ZGlvOiAnYXVkaW9pbnB1dCcsIHZpZGVvOiAndmlkZW9pbnB1dCd9O1xuICAgICAgICAgIHJldHVybiB3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5nZXRTb3VyY2VzKGZ1bmN0aW9uKGRldmljZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUoZGV2aWNlcy5tYXAoZnVuY3Rpb24oZGV2aWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7bGFiZWw6IGRldmljZS5sYWJlbCxcbiAgICAgICAgICAgICAgICBraW5kOiBraW5kc1tkZXZpY2Uua2luZF0sXG4gICAgICAgICAgICAgICAgZGV2aWNlSWQ6IGRldmljZS5pZCxcbiAgICAgICAgICAgICAgICBncm91cElkOiAnJ307XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldFN1cHBvcnRlZENvbnN0cmFpbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkZXZpY2VJZDogdHJ1ZSwgZWNob0NhbmNlbGxhdGlvbjogdHJ1ZSwgZmFjaW5nTW9kZTogdHJ1ZSxcbiAgICAgICAgICBmcmFtZVJhdGU6IHRydWUsIGhlaWdodDogdHJ1ZSwgd2lkdGg6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQSBzaGltIGZvciBnZXRVc2VyTWVkaWEgbWV0aG9kIG9uIHRoZSBtZWRpYURldmljZXMgb2JqZWN0LlxuICAvLyBUT0RPKEthcHRlbkphbnNzb24pIHJlbW92ZSBvbmNlIGltcGxlbWVudGVkIGluIENocm9tZSBzdGFibGUuXG4gIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gZ2V0VXNlck1lZGlhUHJvbWlzZV8oY29uc3RyYWludHMpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gRXZlbiB0aG91Z2ggQ2hyb21lIDQ1IGhhcyBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGFuZCBhIGdldFVzZXJNZWRpYVxuICAgIC8vIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBQcm9taXNlLCBpdCBkb2VzIG5vdCBhY2NlcHQgc3BlYy1zdHlsZVxuICAgIC8vIGNvbnN0cmFpbnRzLlxuICAgIHZhciBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjcykge1xuICAgICAgcmV0dXJuIHNoaW1Db25zdHJhaW50c18oY3MsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdHZXRVc2VyTWVkaWEoYykudGhlbihmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgICBpZiAoYy5hdWRpbyAmJiAhc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoIHx8XG4gICAgICAgICAgICAgIGMudmlkZW8gJiYgIXN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCcnLCAnTm90Rm91bmRFcnJvcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgICB9LCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHNoaW1FcnJvcl8oZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvLyBEdW1teSBkZXZpY2VjaGFuZ2UgZXZlbnQgbWV0aG9kcy5cbiAgLy8gVE9ETyhLYXB0ZW5KYW5zc29uKSByZW1vdmUgb25jZSBpbXBsZW1lbnRlZCBpbiBDaHJvbWUgc3RhYmxlLlxuICBpZiAodHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxvZ2dpbmcoJ0R1bW15IG1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyIGNhbGxlZC4nKTtcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5yZW1vdmVFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgbG9nZ2luZygnRHVtbXkgbWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgY2FsbGVkLicpO1xuICAgIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9nZXR1c2VybWVkaWEuanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbnZhciBzaGltUlRDUGVlckNvbm5lY3Rpb24gPSByZXF1aXJlKCcuL3J0Y3BlZXJjb25uZWN0aW9uX3NoaW0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJyksXG4gIHNoaW1QZWVyQ29ubmVjdGlvbjogZnVuY3Rpb24od2luZG93KSB7XG4gICAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuXG4gICAgaWYgKHdpbmRvdy5SVENJY2VHYXRoZXJlcikge1xuICAgICAgLy8gT1JUQyBkZWZpbmVzIGFuIFJUQ0ljZUNhbmRpZGF0ZSBvYmplY3QgYnV0IG5vIGNvbnN0cnVjdG9yLlxuICAgICAgLy8gTm90IGltcGxlbWVudGVkIGluIEVkZ2UuXG4gICAgICBpZiAoIXdpbmRvdy5SVENJY2VDYW5kaWRhdGUpIHtcbiAgICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIE9SVEMgZG9lcyBub3QgaGF2ZSBhIHNlc3Npb24gZGVzY3JpcHRpb24gb2JqZWN0IGJ1dFxuICAgICAgLy8gb3RoZXIgYnJvd3NlcnMgKGkuZS4gQ2hyb21lKSB0aGF0IHdpbGwgc3VwcG9ydCBib3RoIFBDIGFuZCBPUlRDXG4gICAgICAvLyBpbiB0aGUgZnV0dXJlIG1pZ2h0IGhhdmUgdGhpcyBkZWZpbmVkIGFscmVhZHkuXG4gICAgICBpZiAoIXdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24pIHtcbiAgICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMgYWRkcyBhbiBhZGRpdGlvbmFsIGV2ZW50IGxpc3RlbmVyIHRvIE1lZGlhU3RyYWNrVHJhY2sgdGhhdCBzaWduYWxzXG4gICAgICAvLyB3aGVuIGEgdHJhY2tzIGVuYWJsZWQgcHJvcGVydHkgd2FzIGNoYW5nZWQuIFdvcmthcm91bmQgZm9yIGEgYnVnIGluXG4gICAgICAvLyBhZGRTdHJlYW0sIHNlZSBiZWxvdy4gTm8gbG9uZ2VyIHJlcXVpcmVkIGluIDE1MDI1K1xuICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCAxNTAyNSkge1xuICAgICAgICB2YXIgb3JpZ01TVEVuYWJsZWQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICAgICAgd2luZG93Lk1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLCAnZW5hYmxlZCcpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93Lk1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLCAnZW5hYmxlZCcsIHtcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBvcmlnTVNURW5hYmxlZC5zZXQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB2YXIgZXYgPSBuZXcgRXZlbnQoJ2VuYWJsZWQnKTtcbiAgICAgICAgICAgIGV2LmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPUlRDIGRlZmluZXMgdGhlIERUTUYgc2VuZGVyIGEgYml0IGRpZmZlcmVudC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL29ydGMvaXNzdWVzLzcxNFxuICAgIGlmICh3aW5kb3cuUlRDUnRwU2VuZGVyICYmICEoJ2R0bWYnIGluIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLCAnZHRtZicsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodGhpcy5fZHRtZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFjay5raW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2R0bWYgPSBuZXcgd2luZG93LlJUQ0R0bWZTZW5kZXIodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2sua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2R0bWY7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9XG4gICAgICAgIHNoaW1SVENQZWVyQ29ubmVjdGlvbih3aW5kb3csIGJyb3dzZXJEZXRhaWxzLnZlcnNpb24pO1xuICB9LFxuICBzaGltUmVwbGFjZVRyYWNrOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAvLyBPUlRDIGhhcyByZXBsYWNlVHJhY2sgLS0gaHR0cHM6Ly9naXRodWIuY29tL3czYy9vcnRjL2lzc3Vlcy82MTRcbiAgICBpZiAod2luZG93LlJUQ1J0cFNlbmRlciAmJlxuICAgICAgICAhKCdyZXBsYWNlVHJhY2snIGluIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlKSkge1xuICAgICAgd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUucmVwbGFjZVRyYWNrID1cbiAgICAgICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZS5zZXRUcmFjaztcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZWRnZV9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcy5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24od2luZG93KSB7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICB2YXIgc2hpbUVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZToge1Blcm1pc3Npb25EZW5pZWRFcnJvcjogJ05vdEFsbG93ZWRFcnJvcid9W2UubmFtZV0gfHwgZS5uYW1lLFxuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlLFxuICAgICAgY29uc3RyYWludDogZS5jb25zdHJhaW50LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gZ2V0VXNlck1lZGlhIGVycm9yIHNoaW0uXG4gIHZhciBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2hpbUVycm9yXyhlKSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL2dldHVzZXJtZWRpYS5qc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU0RQVXRpbHMgPSByZXF1aXJlKCdzZHAnKTtcblxuLy8gc29ydCB0cmFja3Mgc3VjaCB0aGF0IHRoZXkgZm9sbG93IGFuIGEtdi1hLXYuLi5cbi8vIHBhdHRlcm4uXG5mdW5jdGlvbiBzb3J0VHJhY2tzKHRyYWNrcykge1xuICB2YXIgYXVkaW9UcmFja3MgPSB0cmFja3MuZmlsdGVyKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgcmV0dXJuIHRyYWNrLmtpbmQgPT09ICdhdWRpbyc7XG4gIH0pO1xuICB2YXIgdmlkZW9UcmFja3MgPSB0cmFja3MuZmlsdGVyKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgcmV0dXJuIHRyYWNrLmtpbmQgPT09ICd2aWRlbyc7XG4gIH0pO1xuICB0cmFja3MgPSBbXTtcbiAgd2hpbGUgKGF1ZGlvVHJhY2tzLmxlbmd0aCB8fCB2aWRlb1RyYWNrcy5sZW5ndGgpIHtcbiAgICBpZiAoYXVkaW9UcmFja3MubGVuZ3RoKSB7XG4gICAgICB0cmFja3MucHVzaChhdWRpb1RyYWNrcy5zaGlmdCgpKTtcbiAgICB9XG4gICAgaWYgKHZpZGVvVHJhY2tzLmxlbmd0aCkge1xuICAgICAgdHJhY2tzLnB1c2godmlkZW9UcmFja3Muc2hpZnQoKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cmFja3M7XG59XG5cbi8vIEVkZ2UgZG9lcyBub3QgbGlrZVxuLy8gMSkgc3R1bjpcbi8vIDIpIHR1cm46IHRoYXQgZG9lcyBub3QgaGF2ZSBhbGwgb2YgdHVybjpob3N0OnBvcnQ/dHJhbnNwb3J0PXVkcFxuLy8gMykgdHVybjogd2l0aCBpcHY2IGFkZHJlc3Nlc1xuLy8gNCkgdHVybjogb2NjdXJyaW5nIG11bGlwbGUgdGltZXNcbmZ1bmN0aW9uIGZpbHRlckljZVNlcnZlcnMoaWNlU2VydmVycywgZWRnZVZlcnNpb24pIHtcbiAgdmFyIGhhc1R1cm4gPSBmYWxzZTtcbiAgaWNlU2VydmVycyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaWNlU2VydmVycykpO1xuICByZXR1cm4gaWNlU2VydmVycy5maWx0ZXIoZnVuY3Rpb24oc2VydmVyKSB7XG4gICAgaWYgKHNlcnZlciAmJiAoc2VydmVyLnVybHMgfHwgc2VydmVyLnVybCkpIHtcbiAgICAgIHZhciB1cmxzID0gc2VydmVyLnVybHMgfHwgc2VydmVyLnVybDtcbiAgICAgIGlmIChzZXJ2ZXIudXJsICYmICFzZXJ2ZXIudXJscykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1JUQ0ljZVNlcnZlci51cmwgaXMgZGVwcmVjYXRlZCEgVXNlIHVybHMgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBpc1N0cmluZyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJztcbiAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICB1cmxzID0gW3VybHNdO1xuICAgICAgfVxuICAgICAgdXJscyA9IHVybHMuZmlsdGVyKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB2YXIgdmFsaWRUdXJuID0gdXJsLmluZGV4T2YoJ3R1cm46JykgPT09IDAgJiZcbiAgICAgICAgICAgIHVybC5pbmRleE9mKCd0cmFuc3BvcnQ9dWRwJykgIT09IC0xICYmXG4gICAgICAgICAgICB1cmwuaW5kZXhPZigndHVybjpbJykgPT09IC0xICYmXG4gICAgICAgICAgICAhaGFzVHVybjtcblxuICAgICAgICBpZiAodmFsaWRUdXJuKSB7XG4gICAgICAgICAgaGFzVHVybiA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybC5pbmRleE9mKCdzdHVuOicpID09PSAwICYmIGVkZ2VWZXJzaW9uID49IDE0MzkzO1xuICAgICAgfSk7XG5cbiAgICAgIGRlbGV0ZSBzZXJ2ZXIudXJsO1xuICAgICAgc2VydmVyLnVybHMgPSBpc1N0cmluZyA/IHVybHNbMF0gOiB1cmxzO1xuICAgICAgcmV0dXJuICEhdXJscy5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cbi8vIERldGVybWluZXMgdGhlIGludGVyc2VjdGlvbiBvZiBsb2NhbCBhbmQgcmVtb3RlIGNhcGFiaWxpdGllcy5cbmZ1bmN0aW9uIGdldENvbW1vbkNhcGFiaWxpdGllcyhsb2NhbENhcGFiaWxpdGllcywgcmVtb3RlQ2FwYWJpbGl0aWVzKSB7XG4gIHZhciBjb21tb25DYXBhYmlsaXRpZXMgPSB7XG4gICAgY29kZWNzOiBbXSxcbiAgICBoZWFkZXJFeHRlbnNpb25zOiBbXSxcbiAgICBmZWNNZWNoYW5pc21zOiBbXVxuICB9O1xuXG4gIHZhciBmaW5kQ29kZWNCeVBheWxvYWRUeXBlID0gZnVuY3Rpb24ocHQsIGNvZGVjcykge1xuICAgIHB0ID0gcGFyc2VJbnQocHQsIDEwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvZGVjcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvZGVjc1tpXS5wYXlsb2FkVHlwZSA9PT0gcHQgfHxcbiAgICAgICAgICBjb2RlY3NbaV0ucHJlZmVycmVkUGF5bG9hZFR5cGUgPT09IHB0KSB7XG4gICAgICAgIHJldHVybiBjb2RlY3NbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBydHhDYXBhYmlsaXR5TWF0Y2hlcyA9IGZ1bmN0aW9uKGxSdHgsIHJSdHgsIGxDb2RlY3MsIHJDb2RlY3MpIHtcbiAgICB2YXIgbENvZGVjID0gZmluZENvZGVjQnlQYXlsb2FkVHlwZShsUnR4LnBhcmFtZXRlcnMuYXB0LCBsQ29kZWNzKTtcbiAgICB2YXIgckNvZGVjID0gZmluZENvZGVjQnlQYXlsb2FkVHlwZShyUnR4LnBhcmFtZXRlcnMuYXB0LCByQ29kZWNzKTtcbiAgICByZXR1cm4gbENvZGVjICYmIHJDb2RlYyAmJlxuICAgICAgICBsQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSByQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGxDb2RlYykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3RlQ2FwYWJpbGl0aWVzLmNvZGVjcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJDb2RlYyA9IHJlbW90ZUNhcGFiaWxpdGllcy5jb2RlY3NbaV07XG4gICAgICBpZiAobENvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gckNvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSAmJlxuICAgICAgICAgIGxDb2RlYy5jbG9ja1JhdGUgPT09IHJDb2RlYy5jbG9ja1JhdGUpIHtcbiAgICAgICAgaWYgKGxDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdydHgnICYmXG4gICAgICAgICAgICBsQ29kZWMucGFyYW1ldGVycyAmJiByQ29kZWMucGFyYW1ldGVycy5hcHQpIHtcbiAgICAgICAgICAvLyBmb3IgUlRYIHdlIG5lZWQgdG8gZmluZCB0aGUgbG9jYWwgcnR4IHRoYXQgaGFzIGEgYXB0XG4gICAgICAgICAgLy8gd2hpY2ggcG9pbnRzIHRvIHRoZSBzYW1lIGxvY2FsIGNvZGVjIGFzIHRoZSByZW1vdGUgb25lLlxuICAgICAgICAgIGlmICghcnR4Q2FwYWJpbGl0eU1hdGNoZXMobENvZGVjLCByQ29kZWMsXG4gICAgICAgICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcywgcmVtb3RlQ2FwYWJpbGl0aWVzLmNvZGVjcykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByQ29kZWMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJDb2RlYykpOyAvLyBkZWVwY29weVxuICAgICAgICAvLyBudW1iZXIgb2YgY2hhbm5lbHMgaXMgdGhlIGhpZ2hlc3QgY29tbW9uIG51bWJlciBvZiBjaGFubmVsc1xuICAgICAgICByQ29kZWMubnVtQ2hhbm5lbHMgPSBNYXRoLm1pbihsQ29kZWMubnVtQ2hhbm5lbHMsXG4gICAgICAgICAgICByQ29kZWMubnVtQ2hhbm5lbHMpO1xuICAgICAgICAvLyBwdXNoIHJDb2RlYyBzbyB3ZSByZXBseSB3aXRoIG9mZmVyZXIgcGF5bG9hZCB0eXBlXG4gICAgICAgIGNvbW1vbkNhcGFiaWxpdGllcy5jb2RlY3MucHVzaChyQ29kZWMpO1xuXG4gICAgICAgIC8vIGRldGVybWluZSBjb21tb24gZmVlZGJhY2sgbWVjaGFuaXNtc1xuICAgICAgICByQ29kZWMucnRjcEZlZWRiYWNrID0gckNvZGVjLnJ0Y3BGZWVkYmFjay5maWx0ZXIoZnVuY3Rpb24oZmIpIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxDb2RlYy5ydGNwRmVlZGJhY2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChsQ29kZWMucnRjcEZlZWRiYWNrW2pdLnR5cGUgPT09IGZiLnR5cGUgJiZcbiAgICAgICAgICAgICAgICBsQ29kZWMucnRjcEZlZWRiYWNrW2pdLnBhcmFtZXRlciA9PT0gZmIucGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGSVhNRTogYWxzbyBuZWVkIHRvIGRldGVybWluZSAucGFyYW1ldGVyc1xuICAgICAgICAvLyAgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVucGVlci9vcnRjL2lzc3Vlcy81NjlcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsb2NhbENhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24obEhlYWRlckV4dGVuc2lvbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3RlQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMubGVuZ3RoO1xuICAgICAgICAgaSsrKSB7XG4gICAgICB2YXIgckhlYWRlckV4dGVuc2lvbiA9IHJlbW90ZUNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zW2ldO1xuICAgICAgaWYgKGxIZWFkZXJFeHRlbnNpb24udXJpID09PSBySGVhZGVyRXh0ZW5zaW9uLnVyaSkge1xuICAgICAgICBjb21tb25DYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5wdXNoKHJIZWFkZXJFeHRlbnNpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIEZJWE1FOiBmZWNNZWNoYW5pc21zXG4gIHJldHVybiBjb21tb25DYXBhYmlsaXRpZXM7XG59XG5cbi8vIGlzIGFjdGlvbj1zZXRMb2NhbERlc2NyaXB0aW9uIHdpdGggdHlwZSBhbGxvd2VkIGluIHNpZ25hbGluZ1N0YXRlXG5mdW5jdGlvbiBpc0FjdGlvbkFsbG93ZWRJblNpZ25hbGluZ1N0YXRlKGFjdGlvbiwgdHlwZSwgc2lnbmFsaW5nU3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBvZmZlcjoge1xuICAgICAgc2V0TG9jYWxEZXNjcmlwdGlvbjogWydzdGFibGUnLCAnaGF2ZS1sb2NhbC1vZmZlciddLFxuICAgICAgc2V0UmVtb3RlRGVzY3JpcHRpb246IFsnc3RhYmxlJywgJ2hhdmUtcmVtb3RlLW9mZmVyJ11cbiAgICB9LFxuICAgIGFuc3dlcjoge1xuICAgICAgc2V0TG9jYWxEZXNjcmlwdGlvbjogWydoYXZlLXJlbW90ZS1vZmZlcicsICdoYXZlLWxvY2FsLXByYW5zd2VyJ10sXG4gICAgICBzZXRSZW1vdGVEZXNjcmlwdGlvbjogWydoYXZlLWxvY2FsLW9mZmVyJywgJ2hhdmUtcmVtb3RlLXByYW5zd2VyJ11cbiAgICB9XG4gIH1bdHlwZV1bYWN0aW9uXS5pbmRleE9mKHNpZ25hbGluZ1N0YXRlKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24od2luZG93LCBlZGdlVmVyc2lvbikge1xuICB2YXIgUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgX2V2ZW50VGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIFsnYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJywgJ2Rpc3BhdGNoRXZlbnQnXVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICBzZWxmW21ldGhvZF0gPSBfZXZlbnRUYXJnZXRbbWV0aG9kXS5iaW5kKF9ldmVudFRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgdGhpcy5uZWVkTmVnb3RpYXRpb24gPSBmYWxzZTtcblxuICAgIHRoaXMub25pY2VjYW5kaWRhdGUgPSBudWxsO1xuICAgIHRoaXMub25hZGRzdHJlYW0gPSBudWxsO1xuICAgIHRoaXMub250cmFjayA9IG51bGw7XG4gICAgdGhpcy5vbnJlbW92ZXN0cmVhbSA9IG51bGw7XG4gICAgdGhpcy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgIHRoaXMub25uZWdvdGlhdGlvbm5lZWRlZCA9IG51bGw7XG4gICAgdGhpcy5vbmRhdGFjaGFubmVsID0gbnVsbDtcbiAgICB0aGlzLmNhblRyaWNrbGVJY2VDYW5kaWRhdGVzID0gbnVsbDtcblxuICAgIHRoaXMubG9jYWxTdHJlYW1zID0gW107XG4gICAgdGhpcy5yZW1vdGVTdHJlYW1zID0gW107XG4gICAgdGhpcy5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzZWxmLmxvY2FsU3RyZWFtcztcbiAgICB9O1xuICAgIHRoaXMuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNlbGYucmVtb3RlU3RyZWFtcztcbiAgICB9O1xuXG4gICAgdGhpcy5sb2NhbERlc2NyaXB0aW9uID0gbmV3IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgdHlwZTogJycsXG4gICAgICBzZHA6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5yZW1vdGVEZXNjcmlwdGlvbiA9IG5ldyB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgc2RwOiAnJ1xuICAgIH0pO1xuICAgIHRoaXMuc2lnbmFsaW5nU3RhdGUgPSAnc3RhYmxlJztcbiAgICB0aGlzLmljZUNvbm5lY3Rpb25TdGF0ZSA9ICduZXcnO1xuICAgIHRoaXMuaWNlR2F0aGVyaW5nU3RhdGUgPSAnbmV3JztcblxuICAgIHRoaXMuaWNlT3B0aW9ucyA9IHtcbiAgICAgIGdhdGhlclBvbGljeTogJ2FsbCcsXG4gICAgICBpY2VTZXJ2ZXJzOiBbXVxuICAgIH07XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaWNlVHJhbnNwb3J0UG9saWN5KSB7XG4gICAgICBzd2l0Y2ggKGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgY2FzZSAncmVsYXknOlxuICAgICAgICAgIHRoaXMuaWNlT3B0aW9ucy5nYXRoZXJQb2xpY3kgPSBjb25maWcuaWNlVHJhbnNwb3J0UG9saWN5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIGRvbid0IHNldCBpY2VUcmFuc3BvcnRQb2xpY3kuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXNpbmdCdW5kbGUgPSBjb25maWcgJiYgY29uZmlnLmJ1bmRsZVBvbGljeSA9PT0gJ21heC1idW5kbGUnO1xuXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaWNlU2VydmVycykge1xuICAgICAgdGhpcy5pY2VPcHRpb25zLmljZVNlcnZlcnMgPSBmaWx0ZXJJY2VTZXJ2ZXJzKGNvbmZpZy5pY2VTZXJ2ZXJzLFxuICAgICAgICAgIGVkZ2VWZXJzaW9uKTtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgLy8gcGVyLXRyYWNrIGljZUdhdGhlcnMsIGljZVRyYW5zcG9ydHMsIGR0bHNUcmFuc3BvcnRzLCBydHBTZW5kZXJzLCAuLi5cbiAgICAvLyBldmVyeXRoaW5nIHRoYXQgaXMgbmVlZGVkIHRvIGRlc2NyaWJlIGEgU0RQIG0tbGluZS5cbiAgICB0aGlzLnRyYW5zY2VpdmVycyA9IFtdO1xuXG4gICAgLy8gc2luY2UgdGhlIGljZUdhdGhlcmVyIGlzIGN1cnJlbnRseSBjcmVhdGVkIGluIGNyZWF0ZU9mZmVyIGJ1dCB3ZVxuICAgIC8vIG11c3Qgbm90IGVtaXQgY2FuZGlkYXRlcyB1bnRpbCBhZnRlciBzZXRMb2NhbERlc2NyaXB0aW9uIHdlIGJ1ZmZlclxuICAgIC8vIHRoZW0gaW4gdGhpcyBhcnJheS5cbiAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIgPSBbXTtcblxuICAgIHRoaXMuX3NkcFNlc3Npb25JZCA9IFNEUFV0aWxzLmdlbmVyYXRlU2Vzc2lvbklkKCk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2ljZWdhdGhlcmluZ3N0YXRlY2hhbmdlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5vbmljZWdhdGhlcmluZ3N0YXRlY2hhbmdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwKTtcbiAgICAvLyBGSVhNRTogbmVlZCB0byBhcHBseSBpY2UgY2FuZGlkYXRlcyBpbiBhIHdheSB3aGljaCBpcyBhc3luYyBidXRcbiAgICAvLyBpbi1vcmRlclxuICAgIHRoaXMuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgZW5kID0gIWV2ZW50LmNhbmRpZGF0ZSB8fCBPYmplY3Qua2V5cyhldmVudC5jYW5kaWRhdGUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBzZWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChzZWN0aW9uc1tqXS5pbmRleE9mKCdcXHJcXG5hPWVuZC1vZi1jYW5kaWRhdGVzXFxyXFxuJykgPT09IC0xKSB7XG4gICAgICAgICAgICBzZWN0aW9uc1tqXSArPSAnYT1lbmQtb2YtY2FuZGlkYXRlc1xcclxcbic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uc1tldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCArIDFdICs9XG4gICAgICAgICAgICAnYT0nICsgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSArICdcXHJcXG4nO1xuICAgICAgfVxuICAgICAgc2VsZi5sb2NhbERlc2NyaXB0aW9uLnNkcCA9IHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoZXZlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCFldmVudC5jYW5kaWRhdGUgJiYgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB2YXIgY29tcGxldGUgPSBzZWxmLnRyYW5zY2VpdmVycy5ldmVyeShmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJlxuICAgICAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5zdGF0ZSA9PT0gJ2NvbXBsZXRlZCc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29tcGxldGUgJiYgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZUNoYW5nZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPSAnY29tcGxldGUnO1xuICAgICAgICAgIHNlbGYuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyID0gW107XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9O1xuXG4gIC8vIGludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSB0cmFuc2NlaXZlciBvYmplY3QuXG4gIC8vICh3aGloIGlzIG5vdCB5ZXQgdGhlIHNhbWUgYXMgdGhlIFdlYlJUQyAxLjAgdHJhbnNjZWl2ZXIpXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fY3JlYXRlVHJhbnNjZWl2ZXIgPSBmdW5jdGlvbihraW5kKSB7XG4gICAgdmFyIGhhc0J1bmRsZVRyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aCA+IDA7XG4gICAgdmFyIHRyYW5zY2VpdmVyID0ge1xuICAgICAgdHJhY2s6IG51bGwsXG4gICAgICBpY2VHYXRoZXJlcjogbnVsbCxcbiAgICAgIGljZVRyYW5zcG9ydDogbnVsbCxcbiAgICAgIGR0bHNUcmFuc3BvcnQ6IG51bGwsXG4gICAgICBsb2NhbENhcGFiaWxpdGllczogbnVsbCxcbiAgICAgIHJlbW90ZUNhcGFiaWxpdGllczogbnVsbCxcbiAgICAgIHJ0cFNlbmRlcjogbnVsbCxcbiAgICAgIHJ0cFJlY2VpdmVyOiBudWxsLFxuICAgICAga2luZDoga2luZCxcbiAgICAgIG1pZDogbnVsbCxcbiAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM6IG51bGwsXG4gICAgICByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzOiBudWxsLFxuICAgICAgc3RyZWFtOiBudWxsLFxuICAgICAgd2FudFJlY2VpdmU6IHRydWVcbiAgICB9O1xuICAgIGlmICh0aGlzLnVzaW5nQnVuZGxlICYmIGhhc0J1bmRsZVRyYW5zcG9ydCkge1xuICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnNbMF0uaWNlVHJhbnNwb3J0O1xuICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0cmFuc3BvcnRzID0gdGhpcy5fY3JlYXRlSWNlQW5kRHRsc1RyYW5zcG9ydHMoKTtcbiAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCA9IHRyYW5zcG9ydHMuaWNlVHJhbnNwb3J0O1xuICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCA9IHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydDtcbiAgICB9XG4gICAgdGhpcy50cmFuc2NlaXZlcnMucHVzaCh0cmFuc2NlaXZlcik7XG4gICAgcmV0dXJuIHRyYW5zY2VpdmVyO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCBzdHJlYW0pIHtcbiAgICB2YXIgdHJhbnNjZWl2ZXI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyYW5zY2VpdmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLnRyYW5zY2VpdmVyc1tpXS50cmFjayAmJlxuICAgICAgICAgIHRoaXMudHJhbnNjZWl2ZXJzW2ldLmtpbmQgPT09IHRyYWNrLmtpbmQpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIgPSB0aGlzLnRyYW5zY2VpdmVyc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0cmFuc2NlaXZlcikge1xuICAgICAgdHJhbnNjZWl2ZXIgPSB0aGlzLl9jcmVhdGVUcmFuc2NlaXZlcih0cmFjay5raW5kKTtcbiAgICB9XG5cbiAgICB0cmFuc2NlaXZlci50cmFjayA9IHRyYWNrO1xuICAgIHRyYW5zY2VpdmVyLnN0cmVhbSA9IHN0cmVhbTtcbiAgICB0cmFuc2NlaXZlci5ydHBTZW5kZXIgPSBuZXcgd2luZG93LlJUQ1J0cFNlbmRlcih0cmFjayxcbiAgICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCk7XG5cbiAgICB0aGlzLl9tYXliZUZpcmVOZWdvdGlhdGlvbk5lZWRlZCgpO1xuICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoZWRnZVZlcnNpb24gPj0gMTUwMjUpIHtcbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgIHNlbGYuYWRkVHJhY2sodHJhY2ssIHN0cmVhbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xvbmUgaXMgbmVjZXNzYXJ5IGZvciBsb2NhbCBkZW1vcyBtb3N0bHksIGF0dGFjaGluZyBkaXJlY3RseVxuICAgICAgLy8gdG8gdHdvIGRpZmZlcmVudCBzZW5kZXJzIGRvZXMgbm90IHdvcmsgKGJ1aWxkIDEwNTQ3KS5cbiAgICAgIC8vIEZpeGVkIGluIDE1MDI1IChvciBlYXJsaWVyKVxuICAgICAgdmFyIGNsb25lZFN0cmVhbSA9IHN0cmVhbS5jbG9uZSgpO1xuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGlkeCkge1xuICAgICAgICB2YXIgY2xvbmVkVHJhY2sgPSBjbG9uZWRTdHJlYW0uZ2V0VHJhY2tzKClbaWR4XTtcbiAgICAgICAgdHJhY2suYWRkRXZlbnRMaXN0ZW5lcignZW5hYmxlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgY2xvbmVkVHJhY2suZW5hYmxlZCA9IGV2ZW50LmVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjbG9uZWRTdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICBzZWxmLmFkZFRyYWNrKHRyYWNrLCBjbG9uZWRTdHJlYW0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcy5wdXNoKGNsb25lZFN0cmVhbSk7XG4gICAgfVxuICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHZhciBpZHggPSB0aGlzLmxvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTZW5kZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgcmV0dXJuICEhdHJhbnNjZWl2ZXIucnRwU2VuZGVyO1xuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgICB9KTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0UmVjZWl2ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgcmV0dXJuICEhdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICByZXR1cm4gdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIElDRSBnYXRoZXJlciBhbmQgaG9vayBpdCB1cC5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVJY2VHYXRoZXJlciA9IGZ1bmN0aW9uKG1pZCxcbiAgICAgIHNkcE1MaW5lSW5kZXgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGljZUdhdGhlcmVyID0gbmV3IHdpbmRvdy5SVENJY2VHYXRoZXJlcihzZWxmLmljZU9wdGlvbnMpO1xuICAgIGljZUdhdGhlcmVyLm9ubG9jYWxjYW5kaWRhdGUgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJyk7XG4gICAgICBldmVudC5jYW5kaWRhdGUgPSB7c2RwTWlkOiBtaWQsIHNkcE1MaW5lSW5kZXg6IHNkcE1MaW5lSW5kZXh9O1xuXG4gICAgICB2YXIgY2FuZCA9IGV2dC5jYW5kaWRhdGU7XG4gICAgICB2YXIgZW5kID0gIWNhbmQgfHwgT2JqZWN0LmtleXMoY2FuZCkubGVuZ3RoID09PSAwO1xuICAgICAgLy8gRWRnZSBlbWl0cyBhbiBlbXB0eSBvYmplY3QgZm9yIFJUQ0ljZUNhbmRpZGF0ZUNvbXBsZXRl4oClXG4gICAgICBpZiAoZW5kKSB7XG4gICAgICAgIC8vIHBvbHlmaWxsIHNpbmNlIFJUQ0ljZUdhdGhlcmVyLnN0YXRlIGlzIG5vdCBpbXBsZW1lbnRlZCBpblxuICAgICAgICAvLyBFZGdlIDEwNTQ3IHlldC5cbiAgICAgICAgaWYgKGljZUdhdGhlcmVyLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpY2VHYXRoZXJlci5zdGF0ZSA9ICdjb21wbGV0ZWQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSVENJY2VDYW5kaWRhdGUgZG9lc24ndCBoYXZlIGEgY29tcG9uZW50LCBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICBjYW5kLmNvbXBvbmVudCA9IDE7XG4gICAgICAgIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUgPSBTRFBVdGlscy53cml0ZUNhbmRpZGF0ZShjYW5kKTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlIGxvY2FsIGRlc2NyaXB0aW9uLlxuICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwKTtcbiAgICAgIGlmICghZW5kKSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4ICsgMV0gKz1cbiAgICAgICAgICAgICdhPScgKyBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlICsgJ1xcclxcbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uc1tldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCArIDFdICs9XG4gICAgICAgICAgICAnYT1lbmQtb2YtY2FuZGlkYXRlc1xcclxcbic7XG4gICAgICB9XG4gICAgICBzZWxmLmxvY2FsRGVzY3JpcHRpb24uc2RwID0gc2VjdGlvbnMuam9pbignJyk7XG4gICAgICB2YXIgdHJhbnNjZWl2ZXJzID0gc2VsZi5fcGVuZGluZ09mZmVyID8gc2VsZi5fcGVuZGluZ09mZmVyIDpcbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVycztcbiAgICAgIHZhciBjb21wbGV0ZSA9IHRyYW5zY2VpdmVycy5ldmVyeShmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICByZXR1cm4gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLnN0YXRlID09PSAnY29tcGxldGVkJztcbiAgICAgIH0pO1xuXG4gICAgICAvLyBFbWl0IGNhbmRpZGF0ZSBpZiBsb2NhbERlc2NyaXB0aW9uIGlzIHNldC5cbiAgICAgIC8vIEFsc28gZW1pdHMgbnVsbCBjYW5kaWRhdGUgd2hlbiBhbGwgZ2F0aGVyZXJzIGFyZSBjb21wbGV0ZS5cbiAgICAgIHN3aXRjaCAoc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSkge1xuICAgICAgICBjYXNlICduZXcnOlxuICAgICAgICAgIGlmICghZW5kKSB7XG4gICAgICAgICAgICBzZWxmLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIucHVzaChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbmQgJiYgY29tcGxldGUpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2F0aGVyaW5nJzpcbiAgICAgICAgICBzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzKCk7XG4gICAgICAgICAgaWYgKCFlbmQpIHtcbiAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5vbmljZWNhbmRpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpY2VjYW5kaWRhdGUnKSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5vbmljZWNhbmRpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgICAgICBzZWxmLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBsZXRlJzpcbiAgICAgICAgICAvLyBzaG91bGQgbm90IGhhcHBlbi4uLiBjdXJyZW50bHkhXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIG5vLW9wLlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGljZUdhdGhlcmVyO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBJQ0UgdHJhbnNwb3J0IGFuZCBEVExTIHRyYW5zcG9ydC5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaWNlVHJhbnNwb3J0ID0gbmV3IHdpbmRvdy5SVENJY2VUcmFuc3BvcnQobnVsbCk7XG4gICAgaWNlVHJhbnNwb3J0Lm9uaWNlc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG5cbiAgICB2YXIgZHRsc1RyYW5zcG9ydCA9IG5ldyB3aW5kb3cuUlRDRHRsc1RyYW5zcG9ydChpY2VUcmFuc3BvcnQpO1xuICAgIGR0bHNUcmFuc3BvcnQub25kdGxzc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG4gICAgZHRsc1RyYW5zcG9ydC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBvbmVycm9yIGRvZXMgbm90IHNldCBzdGF0ZSB0byBmYWlsZWQgYnkgaXRzZWxmLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGR0bHNUcmFuc3BvcnQsICdzdGF0ZScsXG4gICAgICAgICAge3ZhbHVlOiAnZmFpbGVkJywgd3JpdGFibGU6IHRydWV9KTtcbiAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWNlVHJhbnNwb3J0OiBpY2VUcmFuc3BvcnQsXG4gICAgICBkdGxzVHJhbnNwb3J0OiBkdGxzVHJhbnNwb3J0XG4gICAgfTtcbiAgfTtcblxuICAvLyBEZXN0cm95IElDRSBnYXRoZXJlciwgSUNFIHRyYW5zcG9ydCBhbmQgRFRMUyB0cmFuc3BvcnQuXG4gIC8vIFdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgY2FsbGJhY2tzLlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2Rpc3Bvc2VJY2VBbmREdGxzVHJhbnNwb3J0cyA9IGZ1bmN0aW9uKFxuICAgICAgc2RwTUxpbmVJbmRleCkge1xuICAgIHZhciBpY2VHYXRoZXJlciA9IHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZUdhdGhlcmVyO1xuICAgIGlmIChpY2VHYXRoZXJlcikge1xuICAgICAgZGVsZXRlIGljZUdhdGhlcmVyLm9ubG9jYWxjYW5kaWRhdGU7XG4gICAgICBkZWxldGUgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXI7XG4gICAgfVxuICAgIHZhciBpY2VUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VUcmFuc3BvcnQ7XG4gICAgaWYgKGljZVRyYW5zcG9ydCkge1xuICAgICAgZGVsZXRlIGljZVRyYW5zcG9ydC5vbmljZXN0YXRlY2hhbmdlO1xuICAgICAgZGVsZXRlIHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZVRyYW5zcG9ydDtcbiAgICB9XG4gICAgdmFyIGR0bHNUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5kdGxzVHJhbnNwb3J0O1xuICAgIGlmIChkdGxzVHJhbnNwb3J0KSB7XG4gICAgICBkZWxldGUgZHRsc1RyYW5zcG9ydC5vbmR0bHNzdGF0ZWNoYW5nZTtcbiAgICAgIGRlbGV0ZSBkdGxzVHJhbnNwb3J0Lm9uZXJyb3I7XG4gICAgICBkZWxldGUgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uZHRsc1RyYW5zcG9ydDtcbiAgICB9XG4gIH07XG5cbiAgLy8gU3RhcnQgdGhlIFJUUCBTZW5kZXIgYW5kIFJlY2VpdmVyIGZvciBhIHRyYW5zY2VpdmVyLlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX3RyYW5zY2VpdmUgPSBmdW5jdGlvbih0cmFuc2NlaXZlcixcbiAgICAgIHNlbmQsIHJlY3YpIHtcbiAgICB2YXIgcGFyYW1zID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMpO1xuICAgIGlmIChzZW5kICYmIHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgICAgcGFyYW1zLmVuY29kaW5ncyA9IHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICBwYXJhbXMucnRjcCA9IHtcbiAgICAgICAgY25hbWU6IFNEUFV0aWxzLmxvY2FsQ05hbWUsXG4gICAgICAgIGNvbXBvdW5kOiB0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5jb21wb3VuZFxuICAgICAgfTtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICBwYXJhbXMucnRjcC5zc3JjID0gdHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjO1xuICAgICAgfVxuICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnNlbmQocGFyYW1zKTtcbiAgICB9XG4gICAgaWYgKHJlY3YgJiYgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICAgIC8vIHJlbW92ZSBSVFggZmllbGQgaW4gRWRnZSAxNDk0MlxuICAgICAgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAmJiB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICAgICAgJiYgZWRnZVZlcnNpb24gPCAxNTAxOSkge1xuICAgICAgICB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICAgIGRlbGV0ZSBwLnJ0eDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwYXJhbXMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIHBhcmFtcy5ydGNwID0ge1xuICAgICAgICBjbmFtZTogdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMuY25hbWUsXG4gICAgICAgIGNvbXBvdW5kOiB0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5jb21wb3VuZFxuICAgICAgfTtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICBwYXJhbXMucnRjcC5zc3JjID0gdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjO1xuICAgICAgfVxuICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIucmVjZWl2ZShwYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0TG9jYWxEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFpc0FjdGlvbkFsbG93ZWRJblNpZ25hbGluZ1N0YXRlKCdzZXRMb2NhbERlc2NyaXB0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb24udHlwZSwgdGhpcy5zaWduYWxpbmdTdGF0ZSkpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKCdDYW4gbm90IHNldCBsb2NhbCAnICsgZGVzY3JpcHRpb24udHlwZSArXG4gICAgICAgICAgJyBpbiBzdGF0ZSAnICsgdGhpcy5zaWduYWxpbmdTdGF0ZSk7XG4gICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIHR5cGVvZiBhcmd1bWVudHNbMl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzJdLCAwLCBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICB2YXIgc2VjdGlvbnM7XG4gICAgdmFyIHNlc3Npb25wYXJ0O1xuICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICAvLyBGSVhNRTogV2hhdCB3YXMgdGhlIHB1cnBvc2Ugb2YgdGhpcyBlbXB0eSBpZiBzdGF0ZW1lbnQ/XG4gICAgICAvLyBpZiAoIXRoaXMuX3BlbmRpbmdPZmZlcikge1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9wZW5kaW5nT2ZmZXIpIHtcbiAgICAgICAgLy8gVkVSWSBsaW1pdGVkIHN1cHBvcnQgZm9yIFNEUCBtdW5naW5nLiBMaW1pdGVkIHRvOlxuICAgICAgICAvLyAqIGNoYW5naW5nIHRoZSBvcmRlciBvZiBjb2RlY3NcbiAgICAgICAgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKGRlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgIHNlc3Npb25wYXJ0ID0gc2VjdGlvbnMuc2hpZnQoKTtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgICB2YXIgY2FwcyA9IFNEUFV0aWxzLnBhcnNlUnRwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuICAgICAgICAgIHNlbGYuX3BlbmRpbmdPZmZlcltzZHBNTGluZUluZGV4XS5sb2NhbENhcGFiaWxpdGllcyA9IGNhcHM7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRyYW5zY2VpdmVycyA9IHRoaXMuX3BlbmRpbmdPZmZlcjtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdPZmZlcjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInKSB7XG4gICAgICBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoc2VsZi5yZW1vdGVEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgdmFyIGlzSWNlTGl0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAgICdhPWljZS1saXRlJykubGVuZ3RoID4gMDtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAgIHZhciB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICB2YXIgaWNlR2F0aGVyZXIgPSB0cmFuc2NlaXZlci5pY2VHYXRoZXJlcjtcbiAgICAgICAgdmFyIGljZVRyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydDtcbiAgICAgICAgdmFyIGR0bHNUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0O1xuICAgICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXMgPSB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcztcbiAgICAgICAgdmFyIHJlbW90ZUNhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcztcblxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBTRFBVdGlscy5pc1JlamVjdGVkKG1lZGlhU2VjdGlvbik7XG5cbiAgICAgICAgaWYgKCFyZWplY3RlZCAmJiAhdHJhbnNjZWl2ZXIuaXNEYXRhY2hhbm5lbCkge1xuICAgICAgICAgIHZhciByZW1vdGVJY2VQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgbWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG4gICAgICAgICAgdmFyIHJlbW90ZUR0bHNQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0RHRsc1BhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpO1xuICAgICAgICAgIGlmIChpc0ljZUxpdGUpIHtcbiAgICAgICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzLnJvbGUgPSAnc2VydmVyJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXNlbGYudXNpbmdCdW5kbGUgfHwgc2RwTUxpbmVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgIGlzSWNlTGl0ZSA/ICdjb250cm9sbGluZycgOiAnY29udHJvbGxlZCcpO1xuICAgICAgICAgICAgZHRsc1RyYW5zcG9ydC5zdGFydChyZW1vdGVEdGxzUGFyYW1ldGVycyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICAgICAgdmFyIHBhcmFtcyA9IGdldENvbW1vbkNhcGFiaWxpdGllcyhsb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzKTtcblxuICAgICAgICAgIC8vIFN0YXJ0IHRoZSBSVENSdHBTZW5kZXIuIFRoZSBSVENSdHBSZWNlaXZlciBmb3IgdGhpc1xuICAgICAgICAgIC8vIHRyYW5zY2VpdmVyIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCBpbiBzZXRSZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHRyYW5zY2VpdmVyLFxuICAgICAgICAgICAgICBwYXJhbXMuY29kZWNzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2NhbERlc2NyaXB0aW9uID0ge1xuICAgICAgdHlwZTogZGVzY3JpcHRpb24udHlwZSxcbiAgICAgIHNkcDogZGVzY3JpcHRpb24uc2RwXG4gICAgfTtcbiAgICBzd2l0Y2ggKGRlc2NyaXB0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ29mZmVyJzpcbiAgICAgICAgdGhpcy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ2hhdmUtbG9jYWwtb2ZmZXInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhbnN3ZXInOlxuICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnc3RhYmxlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAgICdcIicpO1xuICAgIH1cblxuICAgIC8vIElmIGEgc3VjY2VzcyBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIGVtaXQgSUNFIGNhbmRpZGF0ZXMgYWZ0ZXIgaXRcbiAgICAvLyBoYXMgYmVlbiBleGVjdXRlZC4gT3RoZXJ3aXNlLCBlbWl0IGNhbGxiYWNrIGFmdGVyIHRoZSBQcm9taXNlIGlzXG4gICAgLy8gcmVzb2x2ZWQuXG4gICAgdmFyIGhhc0NhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiZcbiAgICAgIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICB2YXIgY2IgPSBhcmd1bWVudHNbMV07XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgICAgaWYgKHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPT09ICduZXcnKSB7XG4gICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdnYXRoZXJpbmcnO1xuICAgICAgICAgIHNlbGYuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHNlbGYuaWNlR2F0aGVyaW5nU3RhdGUgPT09ICduZXcnKSB7XG4gICAgICAgICAgc2VsZi5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdnYXRoZXJpbmcnO1xuICAgICAgICAgIHNlbGYuX2VtaXRHYXRoZXJpbmdTdGF0ZUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzdWFsbHkgY2FuZGlkYXRlcyB3aWxsIGJlIGVtaXR0ZWQgZWFybGllci5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoc2VsZi5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcy5iaW5kKHNlbGYpLCA1MDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFpc0FjdGlvbkFsbG93ZWRJblNpZ25hbGluZ1N0YXRlKCdzZXRSZW1vdGVEZXNjcmlwdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uLnR5cGUsIHRoaXMuc2lnbmFsaW5nU3RhdGUpKSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcignQ2FuIG5vdCBzZXQgcmVtb3RlICcgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAnIGluIHN0YXRlICcgKyB0aGlzLnNpZ25hbGluZ1N0YXRlKTtcbiAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgdHlwZW9mIGFyZ3VtZW50c1syXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMl0sIDAsIGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHZhciBzdHJlYW1zID0ge307XG4gICAgdmFyIHJlY2VpdmVyTGlzdCA9IFtdO1xuICAgIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoZGVzY3JpcHRpb24uc2RwKTtcbiAgICB2YXIgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgIHZhciBpc0ljZUxpdGUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChzZXNzaW9ucGFydCxcbiAgICAgICAgJ2E9aWNlLWxpdGUnKS5sZW5ndGggPiAwO1xuICAgIHZhciB1c2luZ0J1bmRsZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1ncm91cDpCVU5ETEUgJykubGVuZ3RoID4gMDtcbiAgICB0aGlzLnVzaW5nQnVuZGxlID0gdXNpbmdCdW5kbGU7XG4gICAgdmFyIGljZU9wdGlvbnMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChzZXNzaW9ucGFydCxcbiAgICAgICAgJ2E9aWNlLW9wdGlvbnM6JylbMF07XG4gICAgaWYgKGljZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMuY2FuVHJpY2tsZUljZUNhbmRpZGF0ZXMgPSBpY2VPcHRpb25zLnN1YnN0cigxNCkuc3BsaXQoJyAnKVxuICAgICAgICAgIC5pbmRleE9mKCd0cmlja2xlJykgPj0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW5Ucmlja2xlSWNlQ2FuZGlkYXRlcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gICAgICB2YXIga2luZCA9IFNEUFV0aWxzLmdldEtpbmQobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciByZWplY3RlZCA9IFNEUFV0aWxzLmlzUmVqZWN0ZWQobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciBwcm90b2NvbCA9IGxpbmVzWzBdLnN1YnN0cigyKS5zcGxpdCgnICcpWzJdO1xuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gU0RQVXRpbHMuZ2V0RGlyZWN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpO1xuICAgICAgdmFyIHJlbW90ZU1zaWQgPSBTRFBVdGlscy5wYXJzZU1zaWQobWVkaWFTZWN0aW9uKTtcblxuICAgICAgdmFyIG1pZCA9IFNEUFV0aWxzLmdldE1pZChtZWRpYVNlY3Rpb24pIHx8IFNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllcigpO1xuXG4gICAgICAvLyBSZWplY3QgZGF0YWNoYW5uZWxzIHdoaWNoIGFyZSBub3QgaW1wbGVtZW50ZWQgeWV0LlxuICAgICAgaWYgKGtpbmQgPT09ICdhcHBsaWNhdGlvbicgJiYgcHJvdG9jb2wgPT09ICdEVExTL1NDVFAnKSB7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdID0ge1xuICAgICAgICAgIG1pZDogbWlkLFxuICAgICAgICAgIGlzRGF0YWNoYW5uZWw6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhbnNjZWl2ZXI7XG4gICAgICB2YXIgaWNlR2F0aGVyZXI7XG4gICAgICB2YXIgaWNlVHJhbnNwb3J0O1xuICAgICAgdmFyIGR0bHNUcmFuc3BvcnQ7XG4gICAgICB2YXIgcnRwUmVjZWl2ZXI7XG4gICAgICB2YXIgc2VuZEVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIHZhciByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgdmFyIGxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICB2YXIgdHJhY2s7XG4gICAgICAvLyBGSVhNRTogZW5zdXJlIHRoZSBtZWRpYVNlY3Rpb24gaGFzIHJ0Y3AtbXV4IHNldC5cbiAgICAgIHZhciByZW1vdGVDYXBhYmlsaXRpZXMgPSBTRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciByZW1vdGVJY2VQYXJhbWV0ZXJzO1xuICAgICAgdmFyIHJlbW90ZUR0bHNQYXJhbWV0ZXJzO1xuICAgICAgaWYgKCFyZWplY3RlZCkge1xuICAgICAgICByZW1vdGVJY2VQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICBzZXNzaW9ucGFydCk7XG4gICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0RHRsc1BhcmFtZXRlcnMobWVkaWFTZWN0aW9uLFxuICAgICAgICAgICAgc2Vzc2lvbnBhcnQpO1xuICAgICAgICByZW1vdGVEdGxzUGFyYW1ldGVycy5yb2xlID0gJ2NsaWVudCc7XG4gICAgICB9XG4gICAgICByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzID1cbiAgICAgICAgICBTRFBVdGlscy5wYXJzZVJ0cEVuY29kaW5nUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuXG4gICAgICB2YXIgcnRjcFBhcmFtZXRlcnMgPSBTRFBVdGlscy5wYXJzZVJ0Y3BQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG5cbiAgICAgIHZhciBpc0NvbXBsZXRlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLFxuICAgICAgICAgICdhPWVuZC1vZi1jYW5kaWRhdGVzJywgc2Vzc2lvbnBhcnQpLmxlbmd0aCA+IDA7XG4gICAgICB2YXIgY2FuZHMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPWNhbmRpZGF0ZTonKVxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24oY2FuZCkge1xuICAgICAgICAgICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlKGNhbmQpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihjYW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FuZC5jb21wb25lbnQgPT09ICcxJyB8fCBjYW5kLmNvbXBvbmVudCA9PT0gMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIHVzZSBCVU5ETEUgYW5kIGRpc3Bvc2UgdHJhbnNwb3J0cy5cbiAgICAgIGlmICgoZGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJyB8fCBkZXNjcmlwdGlvbi50eXBlID09PSAnYW5zd2VyJykgJiZcbiAgICAgICAgICAhcmVqZWN0ZWQgJiYgdXNpbmdCdW5kbGUgJiYgc2RwTUxpbmVJbmRleCA+IDAgJiZcbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSkge1xuICAgICAgICBzZWxmLl9kaXNwb3NlSWNlQW5kRHRsc1RyYW5zcG9ydHMoc2RwTUxpbmVJbmRleCk7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZUdhdGhlcmVyID1cbiAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmljZUdhdGhlcmVyO1xuICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VUcmFuc3BvcnQgPVxuICAgICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbMF0uaWNlVHJhbnNwb3J0O1xuICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5kdGxzVHJhbnNwb3J0ID1cbiAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnQ7XG4gICAgICAgIGlmIChzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBTZW5kZXIpIHtcbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBTZW5kZXIuc2V0VHJhbnNwb3J0KFxuICAgICAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1swXS5kdGxzVHJhbnNwb3J0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucnRwUmVjZWl2ZXIpIHtcbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBSZWNlaXZlci5zZXRUcmFuc3BvcnQoXG4gICAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmR0bHNUcmFuc3BvcnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJyAmJiAhcmVqZWN0ZWQpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIgPSBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSB8fFxuICAgICAgICAgICAgc2VsZi5fY3JlYXRlVHJhbnNjZWl2ZXIoa2luZCk7XG4gICAgICAgIHRyYW5zY2VpdmVyLm1pZCA9IG1pZDtcblxuICAgICAgICBpZiAoIXRyYW5zY2VpdmVyLmljZUdhdGhlcmVyKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgPSB1c2luZ0J1bmRsZSAmJiBzZHBNTGluZUluZGV4ID4gMCA/XG4gICAgICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzWzBdLmljZUdhdGhlcmVyIDpcbiAgICAgICAgICAgICAgc2VsZi5fY3JlYXRlSWNlR2F0aGVyZXIobWlkLCBzZHBNTGluZUluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0NvbXBsZXRlICYmIGNhbmRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgKCF1c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSkge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zZXRSZW1vdGVDYW5kaWRhdGVzKGNhbmRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzID0gd2luZG93LlJUQ1J0cFJlY2VpdmVyLmdldENhcGFiaWxpdGllcyhraW5kKTtcblxuICAgICAgICAvLyBmaWx0ZXIgUlRYIHVudGlsIGFkZGl0aW9uYWwgc3R1ZmYgbmVlZGVkIGZvciBSVFggaXMgaW1wbGVtZW50ZWRcbiAgICAgICAgLy8gaW4gYWRhcHRlci5qc1xuICAgICAgICBpZiAoZWRnZVZlcnNpb24gPCAxNTAxOSkge1xuICAgICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcyA9IGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcy5maWx0ZXIoXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVjLm5hbWUgIT09ICdydHgnO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBbe1xuICAgICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDIpICogMTAwMVxuICAgICAgICB9XTtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jykge1xuICAgICAgICAgIHJ0cFJlY2VpdmVyID0gbmV3IHdpbmRvdy5SVENSdHBSZWNlaXZlcih0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LFxuICAgICAgICAgICAgICBraW5kKTtcblxuICAgICAgICAgIHRyYWNrID0gcnRwUmVjZWl2ZXIudHJhY2s7XG4gICAgICAgICAgLy8gRklYTUU6IGRvZXMgbm90IHdvcmsgd2l0aCBQbGFuIEIuXG4gICAgICAgICAgaWYgKHJlbW90ZU1zaWQpIHtcbiAgICAgICAgICAgIGlmICghc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0pIHtcbiAgICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0gPSBuZXcgd2luZG93Lk1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSwgJ2lkJywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3RlTXNpZC5zdHJlYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0cmFjaywgJ2lkJywge1xuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGVNc2lkLnRyYWNrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dLmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsXG4gICAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghc3RyZWFtcy5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgIHN0cmVhbXMuZGVmYXVsdCA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmVhbXMuZGVmYXVsdC5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgICAgICByZWNlaXZlckxpc3QucHVzaChbdHJhY2ssIHJ0cFJlY2VpdmVyLCBzdHJlYW1zLmRlZmF1bHRdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyA9IGxvY2FsQ2FwYWJpbGl0aWVzO1xuICAgICAgICB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMgPSByZW1vdGVDYXBhYmlsaXRpZXM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyID0gcnRwUmVjZWl2ZXI7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzID0gcnRjcFBhcmFtZXRlcnM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzID0gcmVjdkVuY29kaW5nUGFyYW1ldGVycztcblxuICAgICAgICAvLyBTdGFydCB0aGUgUlRDUnRwUmVjZWl2ZXIgbm93LiBUaGUgUlRQU2VuZGVyIGlzIHN0YXJ0ZWQgaW5cbiAgICAgICAgLy8gc2V0TG9jYWxEZXNjcmlwdGlvbi5cbiAgICAgICAgc2VsZi5fdHJhbnNjZWl2ZShzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG4gICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInICYmICFyZWplY3RlZCkge1xuICAgICAgICB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICBpY2VUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIGR0bHNUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0O1xuICAgICAgICBydHBSZWNlaXZlciA9IHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyO1xuICAgICAgICBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzID0gdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcztcblxuICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzID1cbiAgICAgICAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJlbW90ZUNhcGFiaWxpdGllcyA9XG4gICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXM7XG4gICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0Y3BQYXJhbWV0ZXJzID0gcnRjcFBhcmFtZXRlcnM7XG5cbiAgICAgICAgaWYgKCF1c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaWYgKChpc0ljZUxpdGUgfHwgaXNDb21wbGV0ZSkgJiYgY2FuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpY2VUcmFuc3BvcnQuc2V0UmVtb3RlQ2FuZGlkYXRlcyhjYW5kcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGljZVRyYW5zcG9ydC5zdGFydChpY2VHYXRoZXJlciwgcmVtb3RlSWNlUGFyYW1ldGVycyxcbiAgICAgICAgICAgICAgJ2NvbnRyb2xsaW5nJyk7XG4gICAgICAgICAgZHRsc1RyYW5zcG9ydC5zdGFydChyZW1vdGVEdGxzUGFyYW1ldGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHRyYW5zY2VpdmVyLFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3JlY3Zvbmx5JyxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ3NlbmRyZWN2JyB8fCBkaXJlY3Rpb24gPT09ICdzZW5kb25seScpO1xuXG4gICAgICAgIGlmIChydHBSZWNlaXZlciAmJlxuICAgICAgICAgICAgKGRpcmVjdGlvbiA9PT0gJ3NlbmRyZWN2JyB8fCBkaXJlY3Rpb24gPT09ICdzZW5kb25seScpKSB7XG4gICAgICAgICAgdHJhY2sgPSBydHBSZWNlaXZlci50cmFjaztcbiAgICAgICAgICBpZiAocmVtb3RlTXNpZCkge1xuICAgICAgICAgICAgaWYgKCFzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSkge1xuICAgICAgICAgICAgICBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dLmFkZFRyYWNrKHRyYWNrKTtcbiAgICAgICAgICAgIHJlY2VpdmVyTGlzdC5wdXNoKFt0cmFjaywgcnRwUmVjZWl2ZXIsIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghc3RyZWFtcy5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgIHN0cmVhbXMuZGVmYXVsdCA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmVhbXMuZGVmYXVsdC5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgICAgICByZWNlaXZlckxpc3QucHVzaChbdHJhY2ssIHJ0cFJlY2VpdmVyLCBzdHJlYW1zLmRlZmF1bHRdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRklYTUU6IGFjdHVhbGx5IHRoZSByZWNlaXZlciBzaG91bGQgYmUgY3JlYXRlZCBsYXRlci5cbiAgICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVtb3RlRGVzY3JpcHRpb24gPSB7XG4gICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHBcbiAgICB9O1xuICAgIHN3aXRjaCAoZGVzY3JpcHRpb24udHlwZSkge1xuICAgICAgY2FzZSAnb2ZmZXInOlxuICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnaGF2ZS1yZW1vdGUtb2ZmZXInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhbnN3ZXInOlxuICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnc3RhYmxlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICtcbiAgICAgICAgICAgICdcIicpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzdHJlYW1zKS5mb3JFYWNoKGZ1bmN0aW9uKHNpZCkge1xuICAgICAgdmFyIHN0cmVhbSA9IHN0cmVhbXNbc2lkXTtcbiAgICAgIGlmIChzdHJlYW0uZ2V0VHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYucmVtb3RlU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnYWRkc3RyZWFtJyk7XG4gICAgICAgIGV2ZW50LnN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgaWYgKHNlbGYub25hZGRzdHJlYW0gIT09IG51bGwpIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYub25hZGRzdHJlYW0oZXZlbnQpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjZWl2ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHZhciB0cmFjayA9IGl0ZW1bMF07XG4gICAgICAgICAgdmFyIHJlY2VpdmVyID0gaXRlbVsxXTtcbiAgICAgICAgICBpZiAoc3RyZWFtLmlkICE9PSBpdGVtWzJdLmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB0cmFja0V2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgIHRyYWNrRXZlbnQudHJhY2sgPSB0cmFjaztcbiAgICAgICAgICB0cmFja0V2ZW50LnJlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgICAgICAgdHJhY2tFdmVudC5zdHJlYW1zID0gW3N0cmVhbV07XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KHRyYWNrRXZlbnQpO1xuICAgICAgICAgIGlmIChzZWxmLm9udHJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLm9udHJhY2sodHJhY2tFdmVudCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY2hlY2sgd2hldGhlciBhZGRJY2VDYW5kaWRhdGUoe30pIHdhcyBjYWxsZWQgd2l0aGluIGZvdXIgc2Vjb25kcyBhZnRlclxuICAgIC8vIHNldFJlbW90ZURlc2NyaXB0aW9uLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEoc2VsZiAmJiBzZWxmLnRyYW5zY2VpdmVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZi50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0ICYmXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RhdGUgPT09ICduZXcnICYmXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuZ2V0UmVtb3RlQ2FuZGlkYXRlcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RpbWVvdXQgZm9yIGFkZFJlbW90ZUNhbmRpZGF0ZS4gQ29uc2lkZXIgc2VuZGluZyAnICtcbiAgICAgICAgICAgICAgJ2FuIGVuZC1vZi1jYW5kaWRhdGVzIG5vdGlmaWNhdGlvbicpO1xuICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5hZGRSZW1vdGVDYW5kaWRhdGUoe30pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCA0MDAwKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMV0sIDApO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgLyogbm90IHlldFxuICAgICAgaWYgKHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICAqL1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCkge1xuICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEZJWE1FOiBjbGVhbiB1cCB0cmFja3MsIGxvY2FsIHN0cmVhbXMsIHJlbW90ZSBzdHJlYW1zLCBldGNcbiAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnY2xvc2VkJyk7XG4gIH07XG5cbiAgLy8gVXBkYXRlIHRoZSBzaWduYWxpbmcgc3RhdGUuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdXBkYXRlU2lnbmFsaW5nU3RhdGUgPSBmdW5jdGlvbihuZXdTdGF0ZSkge1xuICAgIHRoaXMuc2lnbmFsaW5nU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3NpZ25hbGluZ3N0YXRlY2hhbmdlJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciB0byBmaXJlIHRoZSBuZWdvdGlhdGlvbm5lZWRlZCBldmVudC5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9tYXliZUZpcmVOZWdvdGlhdGlvbk5lZWRlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5zaWduYWxpbmdTdGF0ZSAhPT0gJ3N0YWJsZScgfHwgdGhpcy5uZWVkTmVnb3RpYXRpb24gPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZWVkTmVnb3RpYXRpb24gPSB0cnVlO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNlbGYubmVlZE5lZ290aWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxmLm5lZWROZWdvdGlhdGlvbiA9IGZhbHNlO1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpO1xuICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIGlmIChzZWxmLm9ubmVnb3RpYXRpb25uZWVkZWQgIT09IG51bGwpIHtcbiAgICAgICAgc2VsZi5vbm5lZ290aWF0aW9ubmVlZGVkKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIGNvbm5lY3Rpb24gc3RhdGUuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdXBkYXRlQ29ubmVjdGlvblN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBuZXdTdGF0ZTtcbiAgICB2YXIgc3RhdGVzID0ge1xuICAgICAgJ25ldyc6IDAsXG4gICAgICBjbG9zZWQ6IDAsXG4gICAgICBjb25uZWN0aW5nOiAwLFxuICAgICAgY2hlY2tpbmc6IDAsXG4gICAgICBjb25uZWN0ZWQ6IDAsXG4gICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICBkaXNjb25uZWN0ZWQ6IDAsXG4gICAgICBmYWlsZWQ6IDBcbiAgICB9O1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIHN0YXRlc1t0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RhdGVdKys7XG4gICAgICBzdGF0ZXNbdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICB9KTtcbiAgICAvLyBJQ0VUcmFuc3BvcnQuY29tcGxldGVkIGFuZCBjb25uZWN0ZWQgYXJlIHRoZSBzYW1lIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgc3RhdGVzLmNvbm5lY3RlZCArPSBzdGF0ZXMuY29tcGxldGVkO1xuXG4gICAgbmV3U3RhdGUgPSAnbmV3JztcbiAgICBpZiAoc3RhdGVzLmZhaWxlZCA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ2ZhaWxlZCc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGluZyA+IDAgfHwgc3RhdGVzLmNoZWNraW5nID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnY29ubmVjdGluZyc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuZGlzY29ubmVjdGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnZGlzY29ubmVjdGVkJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5uZXcgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzLmNvbm5lY3RlZCA+IDAgfHwgc3RhdGVzLmNvbXBsZXRlZCA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ2Nvbm5lY3RlZCc7XG4gICAgfVxuXG4gICAgaWYgKG5ld1N0YXRlICE9PSBzZWxmLmljZUNvbm5lY3Rpb25TdGF0ZSkge1xuICAgICAgc2VsZi5pY2VDb25uZWN0aW9uU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJyk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgaWYgKHRoaXMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZU9mZmVyIGNhbGxlZCB3aGlsZSB0aGVyZSBpcyBhIHBlbmRpbmcgb2ZmZXIuJyk7XG4gICAgfVxuICAgIHZhciBvZmZlck9wdGlvbnM7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2ZmZXJPcHRpb25zID0gYXJndW1lbnRzWzBdO1xuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgb2ZmZXJPcHRpb25zID0gYXJndW1lbnRzWzJdO1xuICAgIH1cblxuICAgIHZhciBudW1BdWRpb1RyYWNrcyA9IHRoaXMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5raW5kID09PSAnYXVkaW8nO1xuICAgIH0pLmxlbmd0aDtcbiAgICB2YXIgbnVtVmlkZW9UcmFja3MgPSB0aGlzLnRyYW5zY2VpdmVycy5maWx0ZXIoZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHQua2luZCA9PT0gJ3ZpZGVvJztcbiAgICB9KS5sZW5ndGg7XG5cbiAgICAvLyBEZXRlcm1pbmUgbnVtYmVyIG9mIGF1ZGlvIGFuZCB2aWRlbyB0cmFja3Mgd2UgbmVlZCB0byBzZW5kL3JlY3YuXG4gICAgaWYgKG9mZmVyT3B0aW9ucykge1xuICAgICAgLy8gUmVqZWN0IENocm9tZSBsZWdhY3kgY29uc3RyYWludHMuXG4gICAgICBpZiAob2ZmZXJPcHRpb25zLm1hbmRhdG9yeSB8fCBvZmZlck9wdGlvbnMub3B0aW9uYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdMZWdhY3kgbWFuZGF0b3J5L29wdGlvbmFsIGNvbnN0cmFpbnRzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9XG4gICAgICBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPT09IHRydWUpIHtcbiAgICAgICAgICBudW1BdWRpb1RyYWNrcyA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzID0gb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBudW1WaWRlb1RyYWNrcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICAgIGlmIChudW1BdWRpb1RyYWNrcyA8IDApIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci53YW50UmVjZWl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgbnVtVmlkZW9UcmFja3MtLTtcbiAgICAgICAgaWYgKG51bVZpZGVvVHJhY2tzIDwgMCkge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLndhbnRSZWNlaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBNLWxpbmVzIGZvciByZWN2b25seSBzdHJlYW1zLlxuICAgIHdoaWxlIChudW1BdWRpb1RyYWNrcyA+IDAgfHwgbnVtVmlkZW9UcmFja3MgPiAwKSB7XG4gICAgICBpZiAobnVtQXVkaW9UcmFja3MgPiAwKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVRyYW5zY2VpdmVyKCdhdWRpbycpO1xuICAgICAgICBudW1BdWRpb1RyYWNrcy0tO1xuICAgICAgfVxuICAgICAgaWYgKG51bVZpZGVvVHJhY2tzID4gMCkge1xuICAgICAgICB0aGlzLl9jcmVhdGVUcmFuc2NlaXZlcigndmlkZW8nKTtcbiAgICAgICAgbnVtVmlkZW9UcmFja3MtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVvcmRlciB0cmFja3NcbiAgICB2YXIgdHJhbnNjZWl2ZXJzID0gc29ydFRyYWNrcyh0aGlzLnRyYW5zY2VpdmVycyk7XG5cbiAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUodGhpcy5fc2RwU2Vzc2lvbklkKTtcbiAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlciwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgLy8gRm9yIGVhY2ggdHJhY2ssIGNyZWF0ZSBhbiBpY2UgZ2F0aGVyZXIsIGljZSB0cmFuc3BvcnQsXG4gICAgICAvLyBkdGxzIHRyYW5zcG9ydCwgcG90ZW50aWFsbHkgcnRwc2VuZGVyIGFuZCBydHByZWNlaXZlci5cbiAgICAgIHZhciB0cmFjayA9IHRyYW5zY2VpdmVyLnRyYWNrO1xuICAgICAgdmFyIGtpbmQgPSB0cmFuc2NlaXZlci5raW5kO1xuICAgICAgdmFyIG1pZCA9IFNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllcigpO1xuICAgICAgdHJhbnNjZWl2ZXIubWlkID0gbWlkO1xuXG4gICAgICBpZiAoIXRyYW5zY2VpdmVyLmljZUdhdGhlcmVyKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyID0gc2VsZi51c2luZ0J1bmRsZSAmJiBzZHBNTGluZUluZGV4ID4gMCA/XG4gICAgICAgICAgICB0cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXIgOlxuICAgICAgICAgICAgc2VsZi5fY3JlYXRlSWNlR2F0aGVyZXIobWlkLCBzZHBNTGluZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxvY2FsQ2FwYWJpbGl0aWVzID0gd2luZG93LlJUQ1J0cFNlbmRlci5nZXRDYXBhYmlsaXRpZXMoa2luZCk7XG4gICAgICAvLyBmaWx0ZXIgUlRYIHVudGlsIGFkZGl0aW9uYWwgc3R1ZmYgbmVlZGVkIGZvciBSVFggaXMgaW1wbGVtZW50ZWRcbiAgICAgIC8vIGluIGFkYXB0ZXIuanNcbiAgICAgIGlmIChlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcyA9IGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcy5maWx0ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbihjb2RlYykge1xuICAgICAgICAgICAgICByZXR1cm4gY29kZWMubmFtZSAhPT0gJ3J0eCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgIC8vIHdvcmsgYXJvdW5kIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD02NTUyXG4gICAgICAgIC8vIGJ5IGFkZGluZyBsZXZlbC1hc3ltbWV0cnktYWxsb3dlZD0xXG4gICAgICAgIGlmIChjb2RlYy5uYW1lID09PSAnSDI2NCcgJiZcbiAgICAgICAgICAgIGNvZGVjLnBhcmFtZXRlcnNbJ2xldmVsLWFzeW1tZXRyeS1hbGxvd2VkJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvZGVjLnBhcmFtZXRlcnNbJ2xldmVsLWFzeW1tZXRyeS1hbGxvd2VkJ10gPSAnMSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBnZW5lcmF0ZSBhbiBzc3JjIG5vdywgdG8gYmUgdXNlZCBsYXRlciBpbiBydHBTZW5kZXIuc2VuZFxuICAgICAgdmFyIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBbe1xuICAgICAgICBzc3JjOiAoMiAqIHNkcE1MaW5lSW5kZXggKyAxKSAqIDEwMDFcbiAgICAgIH1dO1xuICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgIC8vIGFkZCBSVFhcbiAgICAgICAgaWYgKGVkZ2VWZXJzaW9uID49IDE1MDE5ICYmIGtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCA9IHtcbiAgICAgICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDEpICogMTAwMSArIDFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2NlaXZlci53YW50UmVjZWl2ZSkge1xuICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlciA9IG5ldyB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIoXG4gICAgICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCxcbiAgICAgICAgICBraW5kXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzID0gbG9jYWxDYXBhYmlsaXRpZXM7XG4gICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzID0gc2VuZEVuY29kaW5nUGFyYW1ldGVycztcbiAgICB9KTtcblxuICAgIC8vIGFsd2F5cyBvZmZlciBCVU5ETEUgYW5kIGRpc3Bvc2Ugb24gcmV0dXJuIGlmIG5vdCBzdXBwb3J0ZWQuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5idW5kbGVQb2xpY3kgIT09ICdtYXgtY29tcGF0Jykge1xuICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgdHJhbnNjZWl2ZXJzLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0Lm1pZDtcbiAgICAgIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuICAgIH1cbiAgICBzZHAgKz0gJ2E9aWNlLW9wdGlvbnM6dHJpY2tsZVxcclxcbic7XG5cbiAgICB0cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlciwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgc2RwICs9IFNEUFV0aWxzLndyaXRlTWVkaWFTZWN0aW9uKHRyYW5zY2VpdmVyLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLCAnb2ZmZXInLCB0cmFuc2NlaXZlci5zdHJlYW0pO1xuICAgICAgc2RwICs9ICdhPXJ0Y3AtcnNpemVcXHJcXG4nO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcGVuZGluZ09mZmVyID0gdHJhbnNjZWl2ZXJzO1xuICAgIHZhciBkZXNjID0gbmV3IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgdHlwZTogJ29mZmVyJyxcbiAgICAgIHNkcDogc2RwXG4gICAgfSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXNjKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNkcCA9IFNEUFV0aWxzLndyaXRlU2Vzc2lvbkJvaWxlcnBsYXRlKHRoaXMuX3NkcFNlc3Npb25JZCk7XG4gICAgaWYgKHRoaXMudXNpbmdCdW5kbGUpIHtcbiAgICAgIHNkcCArPSAnYT1ncm91cDpCVU5ETEUgJyArIHRoaXMudHJhbnNjZWl2ZXJzLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0Lm1pZDtcbiAgICAgIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICBpZiAodHJhbnNjZWl2ZXIuaXNEYXRhY2hhbm5lbCkge1xuICAgICAgICBzZHAgKz0gJ209YXBwbGljYXRpb24gMCBEVExTL1NDVFAgNTAwMFxcclxcbicgK1xuICAgICAgICAgICAgJ2M9SU4gSVA0IDAuMC4wLjBcXHJcXG4nICtcbiAgICAgICAgICAgICdhPW1pZDonICsgdHJhbnNjZWl2ZXIubWlkICsgJ1xcclxcbic7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRklYTUU6IGxvb2sgYXQgZGlyZWN0aW9uLlxuICAgICAgaWYgKHRyYW5zY2VpdmVyLnN0cmVhbSkge1xuICAgICAgICB2YXIgbG9jYWxUcmFjaztcbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICBsb2NhbFRyYWNrID0gdHJhbnNjZWl2ZXIuc3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF07XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgIGxvY2FsVHJhY2sgPSB0cmFuc2NlaXZlci5zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxUcmFjaykge1xuICAgICAgICAgIC8vIGFkZCBSVFhcbiAgICAgICAgICBpZiAoZWRnZVZlcnNpb24gPj0gMTUwMTkgJiYgdHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHggPSB7XG4gICAgICAgICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDIpICogMTAwMSArIDFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gb2YgY2FwYWJpbGl0aWVzLlxuICAgICAgdmFyIGNvbW1vbkNhcGFiaWxpdGllcyA9IGdldENvbW1vbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMpO1xuXG4gICAgICB2YXIgaGFzUnR4ID0gY29tbW9uQ2FwYWJpbGl0aWVzLmNvZGVjcy5maWx0ZXIoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdydHgnO1xuICAgICAgfSkubGVuZ3RoO1xuICAgICAgaWYgKCFoYXNSdHggJiYgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHgpIHtcbiAgICAgICAgZGVsZXRlIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4O1xuICAgICAgfVxuXG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsIGNvbW1vbkNhcGFiaWxpdGllcyxcbiAgICAgICAgICAnYW5zd2VyJywgdHJhbnNjZWl2ZXIuc3RyZWFtKTtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycyAmJlxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLnJlZHVjZWRTaXplKSB7XG4gICAgICAgIHNkcCArPSAnYT1ydGNwLXJzaXplXFxyXFxuJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBkZXNjID0gbmV3IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgdHlwZTogJ2Fuc3dlcicsXG4gICAgICBzZHA6IHNkcFxuICAgIH0pO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1swXSwgMCwgZGVzYyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVzYyk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGNhbmRpZGF0ZSkge1xuICAgIGlmICghY2FuZGlkYXRlKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMudHJhbnNjZWl2ZXJzW2pdLmljZVRyYW5zcG9ydC5hZGRSZW1vdGVDYW5kaWRhdGUoe30pO1xuICAgICAgICBpZiAodGhpcy51c2luZ0J1bmRsZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbUxpbmVJbmRleCA9IGNhbmRpZGF0ZS5zZHBNTGluZUluZGV4O1xuICAgICAgaWYgKGNhbmRpZGF0ZS5zZHBNaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyYW5zY2VpdmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnRyYW5zY2VpdmVyc1tpXS5taWQgPT09IGNhbmRpZGF0ZS5zZHBNaWQpIHtcbiAgICAgICAgICAgIG1MaW5lSW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdHJhbnNjZWl2ZXIgPSB0aGlzLnRyYW5zY2VpdmVyc1ttTGluZUluZGV4XTtcbiAgICAgIGlmICh0cmFuc2NlaXZlcikge1xuICAgICAgICB2YXIgY2FuZCA9IE9iamVjdC5rZXlzKGNhbmRpZGF0ZS5jYW5kaWRhdGUpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgU0RQVXRpbHMucGFyc2VDYW5kaWRhdGUoY2FuZGlkYXRlLmNhbmRpZGF0ZSkgOiB7fTtcbiAgICAgICAgLy8gSWdub3JlIENocm9tZSdzIGludmFsaWQgY2FuZGlkYXRlcyBzaW5jZSBFZGdlIGRvZXMgbm90IGxpa2UgdGhlbS5cbiAgICAgICAgaWYgKGNhbmQucHJvdG9jb2wgPT09ICd0Y3AnICYmIChjYW5kLnBvcnQgPT09IDAgfHwgY2FuZC5wb3J0ID09PSA5KSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZ25vcmUgUlRDUCBjYW5kaWRhdGVzLCB3ZSBhc3N1bWUgUlRDUC1NVVguXG4gICAgICAgIGlmIChjYW5kLmNvbXBvbmVudCAmJlxuICAgICAgICAgICAgIShjYW5kLmNvbXBvbmVudCA9PT0gJzEnIHx8IGNhbmQuY29tcG9uZW50ID09PSAxKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuYWRkUmVtb3RlQ2FuZGlkYXRlKGNhbmQpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcmVtb3RlRGVzY3JpcHRpb24uXG4gICAgICAgIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnModGhpcy5yZW1vdGVEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgICBzZWN0aW9uc1ttTGluZUluZGV4ICsgMV0gKz0gKGNhbmQudHlwZSA/IGNhbmRpZGF0ZS5jYW5kaWRhdGUudHJpbSgpXG4gICAgICAgICAgICA6ICdhPWVuZC1vZi1jYW5kaWRhdGVzJykgKyAnXFxyXFxuJztcbiAgICAgICAgdGhpcy5yZW1vdGVEZXNjcmlwdGlvbi5zZHAgPSBzZWN0aW9ucy5qb2luKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICB0aGlzLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICBbJ3J0cFNlbmRlcicsICdydHBSZWNlaXZlcicsICdpY2VHYXRoZXJlcicsICdpY2VUcmFuc3BvcnQnLFxuICAgICAgICAnZHRsc1RyYW5zcG9ydCddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgaWYgKHRyYW5zY2VpdmVyW21ldGhvZF0pIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godHJhbnNjZWl2ZXJbbWV0aG9kXS5nZXRTdGF0cygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBjYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgYXJndW1lbnRzWzFdO1xuICAgIHZhciBmaXhTdGF0c1R5cGUgPSBmdW5jdGlvbihzdGF0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmJvdW5kcnRwOiAnaW5ib3VuZC1ydHAnLFxuICAgICAgICBvdXRib3VuZHJ0cDogJ291dGJvdW5kLXJ0cCcsXG4gICAgICAgIGNhbmRpZGF0ZXBhaXI6ICdjYW5kaWRhdGUtcGFpcicsXG4gICAgICAgIGxvY2FsY2FuZGlkYXRlOiAnbG9jYWwtY2FuZGlkYXRlJyxcbiAgICAgICAgcmVtb3RlY2FuZGlkYXRlOiAncmVtb3RlLWNhbmRpZGF0ZSdcbiAgICAgIH1bc3RhdC50eXBlXSB8fCBzdGF0LnR5cGU7XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgLy8gc2hpbSBnZXRTdGF0cyB3aXRoIG1hcGxpa2Ugc3VwcG9ydFxuICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgTWFwKCk7XG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgcmVzLmZvckVhY2goZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICByZXN1bHRbaWRdLnR5cGUgPSBmaXhTdGF0c1R5cGUocmVzdWx0W2lkXSk7XG4gICAgICAgICAgICByZXN1bHRzLnNldChpZCwgcmVzdWx0W2lkXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYiwgMCwgcmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gUlRDUGVlckNvbm5lY3Rpb247XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL3J0Y3BlZXJjb25uZWN0aW9uX3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIGZpcmVmb3hTaGltID0ge1xuICBzaGltT25UcmFjazogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiAhKCdvbnRyYWNrJyBpblxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdvbnRyYWNrJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbnRyYWNrO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAodGhpcy5fb250cmFjaykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2spO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbnRyYWNrcG9seSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbnRyYWNrID0gZik7XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbnRyYWNrcG9seSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHt0cmFjazogdHJhY2t9O1xuICAgICAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHNoaW1Tb3VyY2VPYmplY3Q6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIC8vIEZpcmVmb3ggaGFzIHN1cHBvcnRlZCBtb3pTcmNPYmplY3Qgc2luY2UgRkYyMiwgdW5wcmVmaXhlZCBpbiA0Mi5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudCAmJlxuICAgICAgICAhKCdzcmNPYmplY3QnIGluIHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgLy8gU2hpbSB0aGUgc3JjT2JqZWN0IHByb3BlcnR5LCBvbmNlLCB3aGVuIEhUTUxNZWRpYUVsZW1lbnQgaXMgZm91bmQuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsICdzcmNPYmplY3QnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1velNyY09iamVjdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgICAgICB0aGlzLm1velNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBzaGltUGVlckNvbm5lY3Rpb246IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBicm93c2VyRGV0YWlscyA9IHV0aWxzLmRldGVjdEJyb3dzZXIod2luZG93KTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCAhKHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiB8fFxuICAgICAgICB3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb24pKSB7XG4gICAgICByZXR1cm47IC8vIHByb2JhYmx5IG1lZGlhLnBlZXJjb25uZWN0aW9uLmVuYWJsZWQ9ZmFsc2UgaW4gYWJvdXQ6Y29uZmlnXG4gICAgfVxuICAgIC8vIFRoZSBSVENQZWVyQ29ubmVjdGlvbiBvYmplY3QuXG4gICAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKSB7XG4gICAgICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgMzgpIHtcbiAgICAgICAgICAvLyAudXJscyBpcyBub3Qgc3VwcG9ydGVkIGluIEZGIDwgMzguXG4gICAgICAgICAgLy8gY3JlYXRlIFJUQ0ljZVNlcnZlcnMgd2l0aCBhIHNpbmdsZSB1cmwuXG4gICAgICAgICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgICAgIHZhciBuZXdJY2VTZXJ2ZXJzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBjQ29uZmlnLmljZVNlcnZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIHNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG4gICAgICAgICAgICAgIGlmIChzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybHMnKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VydmVyLnVybHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBuZXdTZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyLnVybHNbal1cbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnVybHNbal0uaW5kZXhPZigndHVybicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NlcnZlci51c2VybmFtZSA9IHNlcnZlci51c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VydmVyLmNyZWRlbnRpYWwgPSBzZXJ2ZXIuY3JlZGVudGlhbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChuZXdTZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2gocGNDb25maWcuaWNlU2VydmVyc1tpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBjQ29uZmlnLmljZVNlcnZlcnMgPSBuZXdJY2VTZXJ2ZXJzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7XG4gICAgICB9O1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSA9XG4gICAgICAgICAgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcblxuICAgICAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgICAgIGlmICh3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLCAnZ2VuZXJhdGVDZXJ0aWZpY2F0ZScsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSB3aW5kb3cubW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA9IHdpbmRvdy5tb3pSVENJY2VDYW5kaWRhdGU7XG4gICAgfVxuXG4gICAgLy8gc2hpbSBhd2F5IG5lZWQgZm9yIG9ic29sZXRlIFJUQ0ljZUNhbmRpZGF0ZS9SVENTZXNzaW9uRGVzY3JpcHRpb24uXG4gICAgWydzZXRMb2NhbERlc2NyaXB0aW9uJywgJ3NldFJlbW90ZURlc2NyaXB0aW9uJywgJ2FkZEljZUNhbmRpZGF0ZSddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIHZhciBuYXRpdmVNZXRob2QgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuZXcgKChtZXRob2QgPT09ICdhZGRJY2VDYW5kaWRhdGUnKSA/XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA6XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgIC8vIHN1cHBvcnQgZm9yIGFkZEljZUNhbmRpZGF0ZShudWxsIG9yIHVuZGVmaW5lZClcbiAgICB2YXIgbmF0aXZlQWRkSWNlQ2FuZGlkYXRlID1cbiAgICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGU7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghYXJndW1lbnRzWzBdKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBhcmd1bWVudHNbMV0uYXBwbHkobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvLyBzaGltIGdldFN0YXRzIHdpdGggbWFwbGlrZSBzdXBwb3J0XG4gICAgdmFyIG1ha2VNYXBTdGF0cyA9IGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgT2JqZWN0LmtleXMoc3RhdHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIG1hcC5zZXQoa2V5LCBzdGF0c1trZXldKTtcbiAgICAgICAgbWFwW2tleV0gPSBzdGF0c1trZXldO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH07XG5cbiAgICB2YXIgbW9kZXJuU3RhdHNUeXBlcyA9IHtcbiAgICAgIGluYm91bmRydHA6ICdpbmJvdW5kLXJ0cCcsXG4gICAgICBvdXRib3VuZHJ0cDogJ291dGJvdW5kLXJ0cCcsXG4gICAgICBjYW5kaWRhdGVwYWlyOiAnY2FuZGlkYXRlLXBhaXInLFxuICAgICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgICAgcmVtb3RlY2FuZGlkYXRlOiAncmVtb3RlLWNhbmRpZGF0ZSdcbiAgICB9O1xuXG4gICAgdmFyIG5hdGl2ZUdldFN0YXRzID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cztcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzID0gZnVuY3Rpb24oXG4gICAgICBzZWxlY3RvcixcbiAgICAgIG9uU3VjYyxcbiAgICAgIG9uRXJyXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmF0aXZlR2V0U3RhdHMuYXBwbHkodGhpcywgW3NlbGVjdG9yIHx8IG51bGxdKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzdGF0cykge1xuICAgICAgICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDgpIHtcbiAgICAgICAgICAgIHN0YXRzID0gbWFrZU1hcFN0YXRzKHN0YXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA1MyAmJiAhb25TdWNjKSB7XG4gICAgICAgICAgICAvLyBTaGltIG9ubHkgcHJvbWlzZSBnZXRTdGF0cyB3aXRoIHNwZWMtaHlwaGVucyBpbiB0eXBlIG5hbWVzXG4gICAgICAgICAgICAvLyBMZWF2ZSBjYWxsYmFjayB2ZXJzaW9uIGFsb25lOyBtaXNjIG9sZCB1c2VzIG9mIGZvckVhY2ggYmVmb3JlIE1hcFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc3RhdHMuZm9yRWFjaChmdW5jdGlvbihzdGF0KSB7XG4gICAgICAgICAgICAgICAgc3RhdC50eXBlID0gbW9kZXJuU3RhdHNUeXBlc1tzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBBdm9pZCBUeXBlRXJyb3I6IFwidHlwZVwiIGlzIHJlYWQtb25seSwgaW4gb2xkIHZlcnNpb25zLiAzNC00M2lzaFxuICAgICAgICAgICAgICBzdGF0cy5mb3JFYWNoKGZ1bmN0aW9uKHN0YXQsIGkpIHtcbiAgICAgICAgICAgICAgICBzdGF0cy5zZXQoaSwgT2JqZWN0LmFzc2lnbih7fSwgc3RhdCwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogbW9kZXJuU3RhdHNUeXBlc1tzdGF0LnR5cGVdIHx8IHN0YXQudHlwZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdGF0cztcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ob25TdWNjLCBvbkVycik7XG4gICAgfTtcbiAgfVxufTtcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaW1PblRyYWNrOiBmaXJlZm94U2hpbS5zaGltT25UcmFjayxcbiAgc2hpbVNvdXJjZU9iamVjdDogZmlyZWZveFNoaW0uc2hpbVNvdXJjZU9iamVjdCxcbiAgc2hpbVBlZXJDb25uZWN0aW9uOiBmaXJlZm94U2hpbS5zaGltUGVlckNvbm5lY3Rpb24sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IHJlcXVpcmUoJy4vZ2V0dXNlcm1lZGlhJylcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2ZpcmVmb3gvZmlyZWZveF9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG52YXIgbG9nZ2luZyA9IHV0aWxzLmxvZztcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIGJyb3dzZXJEZXRhaWxzID0gdXRpbHMuZGV0ZWN0QnJvd3Nlcih3aW5kb3cpO1xuICB2YXIgbmF2aWdhdG9yID0gd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3I7XG4gIHZhciBNZWRpYVN0cmVhbVRyYWNrID0gd2luZG93ICYmIHdpbmRvdy5NZWRpYVN0cmVhbVRyYWNrO1xuXG4gIHZhciBzaGltRXJyb3JfID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB7XG4gICAgICAgIEludGVybmFsRXJyb3I6ICdOb3RSZWFkYWJsZUVycm9yJyxcbiAgICAgICAgTm90U3VwcG9ydGVkRXJyb3I6ICdUeXBlRXJyb3InLFxuICAgICAgICBQZXJtaXNzaW9uRGVuaWVkRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBTZWN1cml0eUVycm9yOiAnTm90QWxsb3dlZEVycm9yJ1xuICAgICAgfVtlLm5hbWVdIHx8IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgJ1RoZSBvcGVyYXRpb24gaXMgaW5zZWN1cmUuJzogJ1RoZSByZXF1ZXN0IGlzIG5vdCBhbGxvd2VkIGJ5IHRoZSAnICtcbiAgICAgICAgJ3VzZXIgYWdlbnQgb3IgdGhlIHBsYXRmb3JtIGluIHRoZSBjdXJyZW50IGNvbnRleHQuJ1xuICAgICAgfVtlLm1lc3NhZ2VdIHx8IGUubWVzc2FnZSxcbiAgICAgIGNvbnN0cmFpbnQ6IGUuY29uc3RyYWludCxcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArICh0aGlzLm1lc3NhZ2UgJiYgJzogJykgKyB0aGlzLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBnZXRVc2VyTWVkaWEgY29uc3RyYWludHMgc2hpbS5cbiAgdmFyIGdldFVzZXJNZWRpYV8gPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgdmFyIGNvbnN0cmFpbnRzVG9GRjM3XyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgIGlmICh0eXBlb2YgYyAhPT0gJ29iamVjdCcgfHwgYy5yZXF1aXJlKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuICAgICAgdmFyIHJlcXVpcmUgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKGMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gY1trZXldID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/XG4gICAgICAgICAgICBjW2tleV0gOiB7aWRlYWw6IGNba2V5XX07XG4gICAgICAgIGlmIChyLm1pbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICByLm1heCAhPT0gdW5kZWZpbmVkIHx8IHIuZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcXVpcmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByLiBtaW4gPSByLm1heCA9IHIuZXhhY3Q7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNba2V5XSA9IHIuZXhhY3Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSByLmV4YWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjLmFkdmFuY2VkID0gYy5hZHZhbmNlZCB8fCBbXTtcbiAgICAgICAgICB2YXIgb2MgPSB7fTtcbiAgICAgICAgICBpZiAodHlwZW9mIHIuaWRlYWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBvY1trZXldID0ge21pbjogci5pZGVhbCwgbWF4OiByLmlkZWFsfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Nba2V5XSA9IHIuaWRlYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMuYWR2YW5jZWQucHVzaChvYyk7XG4gICAgICAgICAgZGVsZXRlIHIuaWRlYWw7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhyKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChyZXF1aXJlLmxlbmd0aCkge1xuICAgICAgICBjLnJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgICBjb25zdHJhaW50cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDM4KSB7XG4gICAgICBsb2dnaW5nKCdzcGVjOiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICAgIGlmIChjb25zdHJhaW50cy5hdWRpbykge1xuICAgICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9GRjM3Xyhjb25zdHJhaW50cy5hdWRpbyk7XG4gICAgICB9XG4gICAgICBpZiAoY29uc3RyYWludHMudmlkZW8pIHtcbiAgICAgICAgY29uc3RyYWludHMudmlkZW8gPSBjb25zdHJhaW50c1RvRkYzN18oY29uc3RyYWludHMudmlkZW8pO1xuICAgICAgfVxuICAgICAgbG9nZ2luZygnZmYzNzogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgfVxuICAgIHJldHVybiBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIG9uRXJyb3Ioc2hpbUVycm9yXyhlKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGdldFVzZXJNZWRpYSBhcyBhIFByb21pc2UuXG4gIHZhciBnZXRVc2VyTWVkaWFQcm9taXNlXyA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZ2V0VXNlck1lZGlhXyhjb25zdHJhaW50cywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTaGltIGZvciBtZWRpYURldmljZXMgb24gb2xkZXIgdmVyc2lvbnMuXG4gIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMgPSB7Z2V0VXNlck1lZGlhOiBnZXRVc2VyTWVkaWFQcm9taXNlXyxcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkgeyB9LFxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7IH1cbiAgICB9O1xuICB9XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9XG4gICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgdmFyIGluZm9zID0gW1xuICAgICAgICAgICAge2tpbmQ6ICdhdWRpb2lucHV0JywgZGV2aWNlSWQ6ICdkZWZhdWx0JywgbGFiZWw6ICcnLCBncm91cElkOiAnJ30sXG4gICAgICAgICAgICB7a2luZDogJ3ZpZGVvaW5wdXQnLCBkZXZpY2VJZDogJ2RlZmF1bHQnLCBsYWJlbDogJycsIGdyb3VwSWQ6ICcnfVxuICAgICAgICAgIF07XG4gICAgICAgICAgcmVzb2x2ZShpbmZvcyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDQxKSB7XG4gICAgLy8gV29yayBhcm91bmQgaHR0cDovL2J1Z3ppbC5sYS8xMTY5NjY1XG4gICAgdmFyIG9yZ0VudW1lcmF0ZURldmljZXMgPVxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMuYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvcmdFbnVtZXJhdGVEZXZpY2VzKCkudGhlbih1bmRlZmluZWQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDkpIHtcbiAgICB2YXIgb3JpZ0dldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIG9yaWdHZXRVc2VyTWVkaWEoYykudGhlbihmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgLy8gV29yayBhcm91bmQgaHR0cHM6Ly9idWd6aWwubGEvODAyMzI2XG4gICAgICAgIGlmIChjLmF1ZGlvICYmICFzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGggfHxcbiAgICAgICAgICAgIGMudmlkZW8gJiYgIXN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xuICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVGhlIG9iamVjdCBjYW4gbm90IGJlIGZvdW5kIGhlcmUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOb3RGb3VuZEVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHNoaW1FcnJvcl8oZSkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBpZiAoIShicm93c2VyRGV0YWlscy52ZXJzaW9uID4gNTUgJiZcbiAgICAgICdhdXRvR2FpbkNvbnRyb2wnIGluIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0U3VwcG9ydGVkQ29uc3RyYWludHMoKSkpIHtcbiAgICB2YXIgcmVtYXAgPSBmdW5jdGlvbihvYmosIGEsIGIpIHtcbiAgICAgIGlmIChhIGluIG9iaiAmJiAhKGIgaW4gb2JqKSkge1xuICAgICAgICBvYmpbYl0gPSBvYmpbYV07XG4gICAgICAgIGRlbGV0ZSBvYmpbYV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBuYXRpdmVHZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYS5cbiAgICAgICAgYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgIGlmICh0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGMuYXVkaW8gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGMpKTtcbiAgICAgICAgcmVtYXAoYy5hdWRpbywgJ2F1dG9HYWluQ29udHJvbCcsICdtb3pBdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgcmVtYXAoYy5hdWRpbywgJ25vaXNlU3VwcHJlc3Npb24nLCAnbW96Tm9pc2VTdXBwcmVzc2lvbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUdldFVzZXJNZWRpYShjKTtcbiAgICB9O1xuXG4gICAgaWYgKE1lZGlhU3RyZWFtVHJhY2sgJiYgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuZ2V0U2V0dGluZ3MpIHtcbiAgICAgIHZhciBuYXRpdmVHZXRTZXR0aW5ncyA9IE1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLmdldFNldHRpbmdzO1xuICAgICAgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuZ2V0U2V0dGluZ3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9iaiA9IG5hdGl2ZUdldFNldHRpbmdzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJlbWFwKG9iaiwgJ21vekF1dG9HYWluQ29udHJvbCcsICdhdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgcmVtYXAob2JqLCAnbW96Tm9pc2VTdXBwcmVzc2lvbicsICdub2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChNZWRpYVN0cmVhbVRyYWNrICYmIE1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLmFwcGx5Q29uc3RyYWludHMpIHtcbiAgICAgIHZhciBuYXRpdmVBcHBseUNvbnN0cmFpbnRzID0gTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cztcbiAgICAgIE1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLmFwcGx5Q29uc3RyYWludHMgPSBmdW5jdGlvbihjKSB7XG4gICAgICAgIGlmICh0aGlzLmtpbmQgPT09ICdhdWRpbycgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICAgIHJlbWFwKGMsICdhdXRvR2FpbkNvbnRyb2wnLCAnbW96QXV0b0dhaW5Db250cm9sJyk7XG4gICAgICAgICAgcmVtYXAoYywgJ25vaXNlU3VwcHJlc3Npb24nLCAnbW96Tm9pc2VTdXBwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYXRpdmVBcHBseUNvbnN0cmFpbnRzLmFwcGx5KHRoaXMsIFtjXSk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNDQpIHtcbiAgICAgIHJldHVybiBnZXRVc2VyTWVkaWFfKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICAgIH1cbiAgICAvLyBSZXBsYWNlIEZpcmVmb3ggNDQrJ3MgZGVwcmVjYXRpb24gd2FybmluZyB3aXRoIHVucHJlZml4ZWQgdmVyc2lvbi5cbiAgICB1dGlscy5kZXByZWNhdGVkKCduYXZpZ2F0b3IuZ2V0VXNlck1lZGlhJyxcbiAgICAgICAgJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhJyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2ZpcmVmb3gvZ2V0dXNlcm1lZGlhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgc2FmYXJpU2hpbSA9IHtcbiAgLy8gVE9ETzogRHJBbGV4LCBzaG91bGQgYmUgaGVyZSwgZG91YmxlIGNoZWNrIGFnYWluc3QgTGF5b3V0VGVzdHNcblxuICAvLyBUT0RPOiBvbmNlIHRoZSBiYWNrLWVuZCBmb3IgdGhlIG1hYyBwb3J0IGlzIGRvbmUsIGFkZC5cbiAgLy8gVE9ETzogY2hlY2sgZm9yIHdlYmtpdEdUSytcbiAgLy8gc2hpbVBlZXJDb25uZWN0aW9uOiBmdW5jdGlvbigpIHsgfSxcblxuICBzaGltTG9jYWxTdHJlYW1zQVBJOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoISgnZ2V0TG9jYWxTdHJlYW1zJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxTdHJlYW1zO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCEoJ2dldFN0cmVhbUJ5SWQnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0cmVhbUJ5SWQgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gc3RyZWFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yZW1vdGVTdHJlYW1zKSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gc3RyZWFtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgnYWRkU3RyZWFtJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgdmFyIF9hZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgIF9hZGRUcmFjay5jYWxsKHNlbGYsIHRyYWNrLCBzdHJlYW0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgPSBmdW5jdGlvbih0cmFjaywgc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zID0gW3N0cmVhbV07XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2FkZFRyYWNrLmNhbGwodGhpcywgdHJhY2ssIHN0cmVhbSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgncmVtb3ZlU3RyZWFtJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0cmVhbXMpIHtcbiAgICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICAgIHRoaXMuZ2V0U2VuZGVycygpLmZvckVhY2goZnVuY3Rpb24oc2VuZGVyKSB7XG4gICAgICAgICAgaWYgKHRyYWNrcy5pbmRleE9mKHNlbmRlci50cmFjaykgIT09IC0xKSB7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZVRyYWNrKHNlbmRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBzaGltUmVtb3RlU3RyZWFtc0FQSTogZnVuY3Rpb24od2luZG93KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8ICF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEoJ2dldFJlbW90ZVN0cmVhbXMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlbW90ZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW90ZVN0cmVhbXMgPyB0aGlzLl9yZW1vdGVTdHJlYW1zIDogW107XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoISgnb25hZGRzdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29uYWRkc3RyZWFtJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbmFkZHN0cmVhbTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX29uYWRkc3RyZWFtKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29uYWRkc3RyZWFtKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbmFkZHN0cmVhbXBvbHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29uYWRkc3RyZWFtID0gZik7XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29uYWRkc3RyZWFtcG9seSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBzdHJlYW0gPSBlLnN0cmVhbXNbMF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlbW90ZVN0cmVhbXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlbW90ZVN0cmVhbXMuaW5kZXhPZihzdHJlYW0pID49IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2FkZHN0cmVhbScpO1xuICAgICAgICAgICAgZXZlbnQuc3RyZWFtID0gZS5zdHJlYW1zWzBdO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHNoaW1DYWxsYmFja3NBUEk6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCAhd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwcm90b3R5cGUgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICAgIHZhciBjcmVhdGVPZmZlciA9IHByb3RvdHlwZS5jcmVhdGVPZmZlcjtcbiAgICB2YXIgY3JlYXRlQW5zd2VyID0gcHJvdG90eXBlLmNyZWF0ZUFuc3dlcjtcbiAgICB2YXIgc2V0TG9jYWxEZXNjcmlwdGlvbiA9IHByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uO1xuICAgIHZhciBzZXRSZW1vdGVEZXNjcmlwdGlvbiA9IHByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbjtcbiAgICB2YXIgYWRkSWNlQ2FuZGlkYXRlID0gcHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IChhcmd1bWVudHMubGVuZ3RoID49IDIpID8gYXJndW1lbnRzWzJdIDogYXJndW1lbnRzWzBdO1xuICAgICAgdmFyIHByb21pc2UgPSBjcmVhdGVPZmZlci5hcHBseSh0aGlzLCBbb3B0aW9uc10pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBwcm90b3R5cGUuY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBvcHRpb25zID0gKGFyZ3VtZW50cy5sZW5ndGggPj0gMikgPyBhcmd1bWVudHNbMl0gOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgcHJvbWlzZSA9IGNyZWF0ZUFuc3dlci5hcHBseSh0aGlzLCBbb3B0aW9uc10pO1xuICAgICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICB2YXIgd2l0aENhbGxiYWNrID0gZnVuY3Rpb24oZGVzY3JpcHRpb24sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHNldExvY2FsRGVzY3JpcHRpb24uYXBwbHkodGhpcywgW2Rlc2NyaXB0aW9uXSk7XG4gICAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICBwcm90b3R5cGUuc2V0TG9jYWxEZXNjcmlwdGlvbiA9IHdpdGhDYWxsYmFjaztcblxuICAgIHdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgdmFyIHByb21pc2UgPSBzZXRSZW1vdGVEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBbZGVzY3JpcHRpb25dKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIHByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbiA9IHdpdGhDYWxsYmFjaztcblxuICAgIHdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uKGNhbmRpZGF0ZSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwcm9taXNlID0gYWRkSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtjYW5kaWRhdGVdKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICAgIHByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSB3aXRoQ2FsbGJhY2s7XG4gIH0sXG4gIHNoaW1HZXRVc2VyTWVkaWE6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICAgIGlmICghbmF2aWdhdG9yLmdldFVzZXJNZWRpYSkge1xuICAgICAgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEuYmluZChuYXZpZ2F0b3IpO1xuICAgICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBjYiwgZXJyY2IpIHtcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cylcbiAgICAgICAgICAudGhlbihjYiwgZXJyY2IpO1xuICAgICAgICB9LmJpbmQobmF2aWdhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNoaW1SVENJY2VTZXJ2ZXJVcmxzOiBmdW5jdGlvbih3aW5kb3cpIHtcbiAgICAvLyBtaWdyYXRlIGZyb20gbm9uLXNwZWMgUlRDSWNlU2VydmVyLnVybCB0byBSVENJY2VTZXJ2ZXIudXJsc1xuICAgIHZhciBPcmlnUGVlckNvbm5lY3Rpb24gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb247XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICAgIHZhciBuZXdJY2VTZXJ2ZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGNDb25maWcuaWNlU2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBzZXJ2ZXIgPSBwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldO1xuICAgICAgICAgIGlmICghc2VydmVyLmhhc093blByb3BlcnR5KCd1cmxzJykgJiZcbiAgICAgICAgICAgICAgc2VydmVyLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgICAgICAgdXRpbHMuZGVwcmVjYXRlZCgnUlRDSWNlU2VydmVyLnVybCcsICdSVENJY2VTZXJ2ZXIudXJscycpO1xuICAgICAgICAgICAgc2VydmVyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZXJ2ZXIpKTtcbiAgICAgICAgICAgIHNlcnZlci51cmxzID0gc2VydmVyLnVybDtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHNlcnZlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGNDb25maWcuaWNlU2VydmVycyA9IG5ld0ljZVNlcnZlcnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IE9yaWdQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7XG4gICAgfTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID0gT3JpZ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcbiAgICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE9yaWdQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hpbUNhbGxiYWNrc0FQSTogc2FmYXJpU2hpbS5zaGltQ2FsbGJhY2tzQVBJLFxuICBzaGltTG9jYWxTdHJlYW1zQVBJOiBzYWZhcmlTaGltLnNoaW1Mb2NhbFN0cmVhbXNBUEksXG4gIHNoaW1SZW1vdGVTdHJlYW1zQVBJOiBzYWZhcmlTaGltLnNoaW1SZW1vdGVTdHJlYW1zQVBJLFxuICBzaGltR2V0VXNlck1lZGlhOiBzYWZhcmlTaGltLnNoaW1HZXRVc2VyTWVkaWEsXG4gIHNoaW1SVENJY2VTZXJ2ZXJVcmxzOiBzYWZhcmlTaGltLnNoaW1SVENJY2VTZXJ2ZXJVcmxzXG4gIC8vIFRPRE9cbiAgLy8gc2hpbVBlZXJDb25uZWN0aW9uOiBzYWZhcmlTaGltLnNoaW1QZWVyQ29ubmVjdGlvblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWJydGMtYWRhcHRlci9zcmMvanMvc2FmYXJpL3NhZmFyaV9zaGltLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
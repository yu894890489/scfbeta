/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27);

__webpack_require__(26);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _log = __webpack_require__(25);

var _log2 = _interopRequireDefault(_log);

var _EventProxy = __webpack_require__(8);

var _EventProxy2 = _interopRequireDefault(_EventProxy);

var _Client = __webpack_require__(7);

var _Client2 = _interopRequireDefault(_Client);

var _artTemplate = __webpack_require__(6);

var _artTemplate2 = _interopRequireDefault(_artTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var framework = {
    settings: __webpack_require__(9),

    log: _log2['default'],

    utils: {
        regs: {},

        dict2Map: function dict2Map(dict) {
            var result = {};
            for (var i = 0; i < dict.length; i++) {
                result[dict[i].key] = dict[i].value;
            }
            return result;
        },

        map2Dict: function map2Dict(map) {
            var result = [];
            for (var key in map) {
                result.push({ key: key, value: map[key] });
            }
            return result;
        },

        math: {

            // 加
            floatAdd: function floatAdd(arg1, arg2) {
                var r1, r2, m;
                try {
                    r1 = arg1.toString().split(".")[1].length;
                } catch (e) {
                    r1 = 0;
                }
                try {
                    r2 = arg2.toString().split(".")[1].length;
                } catch (e) {
                    r2 = 0;
                }
                m = Math.pow(10, Math.max(r1, r2));
                return (arg1 * m + arg2 * m) / m;
            },

            // 减
            floatSub: function floatSub(arg1, arg2) {
                var r1, r2, m, n;
                try {
                    r1 = arg1.toString().split(".")[1].length;
                } catch (e) {
                    r1 = 0;
                }
                try {
                    r2 = arg2.toString().split(".")[1].length;
                } catch (e) {
                    r2 = 0;
                }
                m = Math.pow(10, Math.max(r1, r2));
                //动态控制精度长度
                n = r1 >= r2 ? r1 : r2;
                return ((arg1 * m - arg2 * m) / m).toFixed(n);
            },

            // 乘
            floatMul: function floatMul(arg1, arg2) {
                var m = 0,
                    s1 = arg1.toString(),
                    s2 = arg2.toString();
                try {
                    m += s1.split(".")[1].length;
                } catch (e) {}
                try {
                    m += s2.split(".")[1].length;
                } catch (e) {}
                return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
            },

            // 除
            floatDiv: function floatDiv(arg1, arg2) {
                var t1 = 0,
                    t2 = 0,
                    r1,
                    r2;
                try {
                    t1 = arg1.toString().split(".")[1].length;
                } catch (e) {}
                try {
                    t2 = arg2.toString().split(".")[1].length;
                } catch (e) {}

                r1 = Number(arg1.toString().replace(".", ""));

                r2 = Number(arg2.toString().replace(".", ""));
                return r1 / r2 * Math.pow(10, t2 - t1);
            }

        },

        crypto: __webpack_require__(24),

        getBrowserInfo: function getBrowserInfo() {
            var ua = navigator.userAgent.toLowerCase(),
                rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
                rFirefox = /(firefox)\/([\w.]+)/,
                rOpera = /(opera).+version\/([\w.]+)/,
                rChrome = /(chrome)\/([\w.]+)/,
                rSafari = /version\/([\w.]+).*(safari)/,
                match;

            match = rMsie.exec(ua);
            if (match != null) {
                return { browser: "IE", version: match[2] || "0", ua: navigator.userAgent };
            }

            match = rFirefox.exec(ua);
            if (match != null) {
                return { browser: match[1] || "", version: match[2] || "0", ua: navigator.userAgent };
            }

            match = rOpera.exec(ua);
            if (match != null) {
                return { browser: match[1] || "", version: match[2] || "0", ua: navigator.userAgent };
            }

            match = rChrome.exec(ua);
            if (match != null) {
                return { browser: match[1] || "", version: match[2] || "0", ua: navigator.userAgent };
            }

            match = rSafari.exec(ua);
            if (match != null) {
                return { browser: match[2] || "", version: match[1] || "0", ua: navigator.userAgent };
            }

            if (match != null) {
                return { browser: "", version: "0", ua: navigator.userAgent };
            }
        },

        random: function random(digit) {
            var result = "";
            while (digit-- !== 0) {
                result += Math.floor(Math.random() * 10);
            }
            return result;
        },

        scrollTo: function scrollTo(el, offeset) {
            var pos = el ? el.offset().top : 0;
            (0, _jquery2['default'])('html,body').animate({
                scrollTop: pos + (offeset ? offeset : 0)
            }, 'slow');
        },

        loadJS: function loadJS(source, targetObj) {
            var target = targetObj || (0, _jquery2['default'])("body");
            target.append("<script type=\"text/javascript\" src=\"" + source + "\"></script>");
        },

        loadCSS: function loadCSS(source, targetObj) {
            var target = targetObj || (0, _jquery2['default'])("body");
            target.append("<link rel=\"stylesheet\" href=\"" + source + "\" />");
        },

        form: {
            extractAsSerializedArray: function extractAsSerializedArray(formId, filtEmpty) {
                eb.log.debug("Start to extract form data form '" + formId + "'.");

                filtEmpty = filtEmpty || false;
                var form = (0, _jquery2['default'])("#" + formId);

                if (typeof formId == "undefined" || form.length == 0) {
                    eb.log.debug("Cannot find form '" + formId + "', abort form data extraction!");
                    return false;
                }

                // 解锁
                if (eb.component.RichInput) {
                    (0, _jquery2['default'])('#' + formId).find(".eb-richipt[data-readonly='true']").each(function () {
                        (0, _jquery2['default'])(this).EBRichInput('unlock', { temp: true });
                    });
                    (0, _jquery2['default'])('#' + formId).find(".eb-richipt.eb-richipt-lookup").each(function () {
                        (0, _jquery2['default'])(this).EBRichInput('unlock', { temp: true });
                    });
                }

                var formDataRaw = form.serializeArray();

                // 加锁
                if (eb.component.RichInput) {
                    (0, _jquery2['default'])('#' + formId).find(".eb-richipt[data-readonly='true']").each(function () {
                        (0, _jquery2['default'])(this).EBRichInput('lock');
                    });
                    (0, _jquery2['default'])('#' + formId).find(".eb-richipt.eb-richipt-lookup").each(function () {
                        (0, _jquery2['default'])(this).EBRichInput('lock', { temp: true });
                    });
                }

                var formData = [];

                for (var i = 0; i < formDataRaw.length; i++) {
                    var valRaw = formDataRaw[i].value;
                    try {
                        valRaw = valRaw.replace(/\r\n/g, "<BR>");
                        valRaw = valRaw.replace(/\n/g, "<BR>");
                        formDataRaw[i].value = valRaw;
                    } catch (e) {
                        eb.log.debug(e);
                    }

                    if (formDataRaw[i].name != "null") formData.push(formDataRaw[i]);
                }

                if (!filtEmpty) return formData;

                var data = [];

                for (var i = 0; i < formData.length; i++) {
                    if (formData[i].value.trim() != "") data.push(formData[i]);
                }

                return data;
            },

            /**
             * 提取表单数据为简单键值对<br/>
             * 输入控件的 name 做 key 值。
             * @static
             * @method extractAsKVMap
             * @for eb.utils.form
             * @param {String} formId [必选] 表单ID
             * @param {boolean} filtEmpty [可选] [默认：false] 是否过滤空字段
             * @param {String} valueSep [可选] [默认：eb.settings.MUTI_VAL_SEP] 同名字段分隔符
             * @return {Object} 以简单键值对形式表示的表单值<br/>
             * <pre>
             * {'firstname': 'Hello', 'lastname': 'World'}
             * </pre>
             */
            extractAsKVMap: function extractAsKVMap(formId, filtEmpty, useFilter, valueSep) {
                filtEmpty = filtEmpty || false;
                valueSep = valueSep || eb.settings.MUTI_VAL_SEP;
                useFilter = useFilter || false;

                var formData = eb.utils.form.extractAsSerializedArray(formId, filtEmpty);

                var data = {};

                for (var i = 0; i < formData.length; i++) {
                    if (typeof data[formData[i].name] == "undefined") {
                        data[formData[i].name] = formData[i].value;
                    } else {
                        data[formData[i].name] += valueSep + formData[i].value;
                    }
                }

                if (useFilter) {
                    (0, _jquery2['default'])("#" + formId).find("[rich-input][data-filter]").each(function () {
                        if ((0, _jquery2['default'])(this).attr("data-filter")) {
                            var filterName = (0, _jquery2['default'])(this).attr("data-filter");
                            var value = (0, _jquery2['default'])(this).EBRichInput("getValue", {});
                            var newValue = eb.utils.form.getValueViaFilter(value, filterName);
                            eb.log.debug("Filter '" + filterName + "' converted value '" + value + "' to '" + newValue + "'");
                            // TODO 暂时仅对简单Input支持，需要进一步实现
                            var name = (0, _jquery2['default'])(this).find("input").attr("name");

                            data[name] = newValue;
                        }
                    });
                }

                return data;
            },

            /**
             * 提取表单数据为具有复杂数据结构的对象<br/>
             * 输入控件的 name 值可以含有具体的路径，如：user.firstname、user.contactList[0].name<br/>
             * @method extractAsObjects
             * @static
             * @for eb.utils.form
             * @param {String} formId [必选] 表单ID
             * @param {boolean} filtEmpty [可选] [默认：false] 是否过滤空字段
             * @param {String} valueSep [可选] [默认：eb.settings.MUTI_VAL_SEP] 同名字段分隔符
             * @return {Object} 以复杂对象形式表示的表单值<br/>
             * <pre>
             * {'user': {'firstname': 'Hello',
             *           'lastname': 'World',
             *            'contactList': [{'name': 'xxx', 'tel': 'xxxxxx'},
             *                            {'name': 'xxx', 'tel': 'xxxxxx'}]},
             *  'prod': {'id': 'PRD0001',
             *           'name': 'Super Cool Stuff'}}
             * </pre>
             */
            extractAsObjects: function extractAsObjects(formId, filtEmpty, valueSep) {
                filtEmpty = filtEmpty || false;
                valueSep = valueSep || eb.settings.MUTI_VAL_SEP;

                var formData = eb.utils.form.extractAsSerializedArray(formId, filtEmpty);

                var data = {};

                for (var i = 0; i < formData.length; i++) {
                    var namePathArr = formData[i].name.split(".");
                    var namePath = "data";

                    // 通过过滤器计算最终字段取值
                    var currentVal = formData[i].value.trim();
                    currentVal = currentVal.replace(/\"/g, "\\\"");

                    for (var j = 0; j < namePathArr.length; j++) {
                        var isArray;
                        // 生成当前路径
                        // 1. 数组
                        if (namePathArr[j].match(/\[\d\]$/)) {
                            isArray = true;
                            var arrIndex = parseInt(namePathArr[j].substr(namePathArr[j].lastIndexOf("[") + 1, namePathArr[j].lastIndexOf("]") - namePathArr[j].lastIndexOf("[") - 1));
                            namePath += "." + namePathArr[j];
                            var nameArrPath = namePath.substr(0, namePath.lastIndexOf("["));

                            if (typeof eval(nameArrPath) == "undefined") eval(nameArrPath + "=[];");

                            while (eval(nameArrPath + ".length") <= arrIndex) {
                                eval(nameArrPath + ".push({})");
                            }

                            if (j == namePathArr.length - 1) eval(nameArrPath + "[" + arrIndex + "]=\"" + currentVal + "\";");
                            // 2. 对象
                        } else {
                            isArray = false;
                            namePath += "." + namePathArr[j];

                            if (j < namePathArr.length - 1) {
                                if (typeof eval(namePath) == "undefined") eval(namePath + "={};");
                            } else {
                                if (typeof eval(namePath) == "undefined") {
                                    eval(namePath + "=\"" + currentVal + "\"");
                                } else {
                                    eval(namePath + "+=\"" + valueSep + currentVal + "\"");
                                }
                            }
                        }
                    }
                }

                return data;
            }
        }
    },

    EventProxy: _EventProxy2['default'],

    Client: _Client2['default'],

    tplengine: _artTemplate2['default'],

    component: __webpack_require__(23)
};

module.exports = framework;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
  'use strict';
  if (!global.console) {
    global.console = {};
  }
  var con = global.console;
  var prop, method;
  var dummy = function() {};
  var properties = ['memory'];
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = {};
  while (method = methods.pop()) if (typeof con[method] !== 'function') con[method] = dummy;
  // Using `this` for web workers & supports Browserify / Webpack.
})(typeof window === 'undefined' ? this : window);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

    var call = Function.call;
    var prototypeOfObject = Object.prototype;
    var owns = call.bind(prototypeOfObject.hasOwnProperty);
    var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
    var toStr = call.bind(prototypeOfObject.toString);

    // If JS engine supports accessors creating shortcuts.
    var defineGetter;
    var defineSetter;
    var lookupGetter;
    var lookupSetter;
    var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
    if (supportsAccessors) {
        /* eslint-disable no-underscore-dangle */
        defineGetter = call.bind(prototypeOfObject.__defineGetter__);
        defineSetter = call.bind(prototypeOfObject.__defineSetter__);
        lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
        lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
        /* eslint-enable no-underscore-dangle */
    }

    var isPrimitive = function isPrimitive(o) {
        return o == null || (typeof o !== 'object' && typeof o !== 'function');
    };

    // ES5 15.2.3.2
    // http://es5.github.com/#x15.2.3.2
    if (!Object.getPrototypeOf) {
        // https://github.com/es-shims/es5-shim/issues#issue/2
        // http://ejohn.org/blog/objectgetprototypeof/
        // recommended by fschaefer on github
        //
        // sure, and webreflection says ^_^
        // ... this will nerever possibly return null
        // ... Opera Mini breaks here with infinite loops
        Object.getPrototypeOf = function getPrototypeOf(object) {
            /* eslint-disable no-proto */
            var proto = object.__proto__;
            /* eslint-enable no-proto */
            if (proto || proto === null) {
                return proto;
            } else if (toStr(object.constructor) === '[object Function]') {
                return object.constructor.prototype;
            } else if (object instanceof Object) {
                return prototypeOfObject;
            } else {
                // Correctly return null for Objects created with `Object.create(null)`
                // (shammed or native) or `{ __proto__: null}`.  Also returns null for
                // cross-realm objects on browsers that lack `__proto__` support (like
                // IE <11), but that's the best we can do.
                return null;
            }
        };
    }

    // ES5 15.2.3.3
    // http://es5.github.com/#x15.2.3.3

    var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
        try {
            object.sentinel = 0;
            return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
        } catch (exception) {
            return false;
        }
    };

    // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
    if (Object.defineProperty) {
        var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
        var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
        doesGetOwnPropertyDescriptorWork(document.createElement('div'));
        if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
            var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
        }
    }

    if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
        var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';

        /* eslint-disable no-proto */
        Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            if (isPrimitive(object)) {
                throw new TypeError(ERR_NON_OBJECT + object);
            }

            // make a valiant attempt to use the real getOwnPropertyDescriptor
            // for I8's DOM elements.
            if (getOwnPropertyDescriptorFallback) {
                try {
                    return getOwnPropertyDescriptorFallback.call(Object, object, property);
                } catch (exception) {
                    // try the shim if the real one doesn't work
                }
            }

            var descriptor;

            // If object does not owns property return undefined immediately.
            if (!owns(object, property)) {
                return descriptor;
            }

            // If object has a property then it's for sure `configurable`, and
            // probably `enumerable`. Detect enumerability though.
            descriptor = {
                enumerable: isEnumerable(object, property),
                configurable: true
            };

            // If JS engine supports accessor properties then property may be a
            // getter or setter.
            if (supportsAccessors) {
                // Unfortunately `__lookupGetter__` will return a getter even
                // if object has own non getter property along with a same named
                // inherited getter. To avoid misbehavior we temporary remove
                // `__proto__` so that `__lookupGetter__` will return getter only
                // if it's owned by an object.
                var prototype = object.__proto__;
                var notPrototypeOfObject = object !== prototypeOfObject;
                // avoid recursion problem, breaking in Opera Mini when
                // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
                // or any other Object.prototype accessor
                if (notPrototypeOfObject) {
                    object.__proto__ = prototypeOfObject;
                }

                var getter = lookupGetter(object, property);
                var setter = lookupSetter(object, property);

                if (notPrototypeOfObject) {
                    // Once we have getter and setter we can put values back.
                    object.__proto__ = prototype;
                }

                if (getter || setter) {
                    if (getter) {
                        descriptor.get = getter;
                    }
                    if (setter) {
                        descriptor.set = setter;
                    }
                    // If it was accessor property we're done and return here
                    // in order to avoid adding `value` to the descriptor.
                    return descriptor;
                }
            }

            // If we got this far we know that object has an own property that is
            // not an accessor so we set it as a value and return descriptor.
            descriptor.value = object[property];
            descriptor.writable = true;
            return descriptor;
        };
        /* eslint-enable no-proto */
    }

    // ES5 15.2.3.4
    // http://es5.github.com/#x15.2.3.4
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
            return Object.keys(object);
        };
    }

    // ES5 15.2.3.5
    // http://es5.github.com/#x15.2.3.5
    if (!Object.create) {

        // Contributed by Brandon Benvie, October, 2012
        var createEmpty;
        var supportsProto = !({ __proto__: null } instanceof Object);
                            // the following produces false positives
                            // in Opera Mini => not a reliable check
                            // Object.prototype.__proto__ === null

        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        /* global ActiveXObject */
        var shouldUseActiveX = function shouldUseActiveX() {
            // return early if document.domain not set
            if (!document.domain) {
                return false;
            }

            try {
                return !!new ActiveXObject('htmlfile');
            } catch (exception) {
                return false;
            }
        };

        // This supports IE8 when document.domain is used
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        var getEmptyViaActiveX = function getEmptyViaActiveX() {
            var empty;
            var xDoc;

            xDoc = new ActiveXObject('htmlfile');

            var script = 'script';
            xDoc.write('<' + script + '></' + script + '>');
            xDoc.close();

            empty = xDoc.parentWindow.Object.prototype;
            xDoc = null;

            return empty;
        };

        // The original implementation using an iframe
        // before the activex approach was added
        // see https://github.com/es-shims/es5-shim/issues/150
        var getEmptyViaIFrame = function getEmptyViaIFrame() {
            var iframe = document.createElement('iframe');
            var parent = document.body || document.documentElement;
            var empty;

            iframe.style.display = 'none';
            parent.appendChild(iframe);
            /* eslint-disable no-script-url */
            iframe.src = 'javascript:';
            /* eslint-enable no-script-url */

            empty = iframe.contentWindow.Object.prototype;
            parent.removeChild(iframe);
            iframe = null;

            return empty;
        };

        /* global document */
        if (supportsProto || typeof document === 'undefined') {
            createEmpty = function () {
                return { __proto__: null };
            };
        } else {
            // In old IE __proto__ can't be used to manually set `null`, nor does
            // any other method exist to make an object that inherits from nothing,
            // aside from Object.prototype itself. Instead, create a new global
            // object and *steal* its Object.prototype and strip it bare. This is
            // used as the prototype to create nullary objects.
            createEmpty = function () {
                // Determine which approach to use
                // see https://github.com/es-shims/es5-shim/issues/150
                var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();

                delete empty.constructor;
                delete empty.hasOwnProperty;
                delete empty.propertyIsEnumerable;
                delete empty.isPrototypeOf;
                delete empty.toLocaleString;
                delete empty.toString;
                delete empty.valueOf;

                var Empty = function Empty() {};
                Empty.prototype = empty;
                // short-circuit future calls
                createEmpty = function () {
                    return new Empty();
                };
                return new Empty();
            };
        }

        Object.create = function create(prototype, properties) {

            var object;
            var Type = function Type() {}; // An empty constructor.

            if (prototype === null) {
                object = createEmpty();
            } else {
                if (prototype !== null && isPrimitive(prototype)) {
                    // In the native implementation `parent` can be `null`
                    // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
                    // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
                    // like they are in modern browsers. Using `Object.create` on DOM elements
                    // is...err...probably inappropriate, but the native version allows for it.
                    throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
                }
                Type.prototype = prototype;
                object = new Type();
                // IE has no built-in implementation of `Object.getPrototypeOf`
                // neither `__proto__`, but this manually setting `__proto__` will
                // guarantee that `Object.getPrototypeOf` will work as expected with
                // objects created using `Object.create`
                /* eslint-disable no-proto */
                object.__proto__ = prototype;
                /* eslint-enable no-proto */
            }

            if (properties !== void 0) {
                Object.defineProperties(object, properties);
            }

            return object;
        };
    }

    // ES5 15.2.3.6
    // http://es5.github.com/#x15.2.3.6

    // Patch for WebKit and IE8 standard mode
    // Designed by hax <hax.github.com>
    // related issue: https://github.com/es-shims/es5-shim/issues#issue/5
    // IE8 Reference:
    //     http://msdn.microsoft.com/en-us/library/dd282900.aspx
    //     http://msdn.microsoft.com/en-us/library/dd229916.aspx
    // WebKit Bugs:
    //     https://bugs.webkit.org/show_bug.cgi?id=36423

    var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
        try {
            Object.defineProperty(object, 'sentinel', {});
            return 'sentinel' in object;
        } catch (exception) {
            return false;
        }
    };

    // check whether defineProperty works if it's given. Otherwise,
    // shim partially.
    if (Object.defineProperty) {
        var definePropertyWorksOnObject = doesDefinePropertyWork({});
        var definePropertyWorksOnDom = typeof document === 'undefined' ||
            doesDefinePropertyWork(document.createElement('div'));
        if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
            var definePropertyFallback = Object.defineProperty,
                definePropertiesFallback = Object.defineProperties;
        }
    }

    if (!Object.defineProperty || definePropertyFallback) {
        var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
        var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
        var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';

        Object.defineProperty = function defineProperty(object, property, descriptor) {
            if (isPrimitive(object)) {
                throw new TypeError(ERR_NON_OBJECT_TARGET + object);
            }
            if (isPrimitive(descriptor)) {
                throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
            }
            // make a valiant attempt to use the real defineProperty
            // for I8's DOM elements.
            if (definePropertyFallback) {
                try {
                    return definePropertyFallback.call(Object, object, property, descriptor);
                } catch (exception) {
                    // try the shim if the real one doesn't work
                }
            }

            // If it's a data property.
            if ('value' in descriptor) {
                // fail silently if 'writable', 'enumerable', or 'configurable'
                // are requested but not supported
                /*
                // alternate approach:
                if ( // can't implement these features; allow false but not true
                    ('writable' in descriptor && !descriptor.writable) ||
                    ('enumerable' in descriptor && !descriptor.enumerable) ||
                    ('configurable' in descriptor && !descriptor.configurable)
                ))
                    throw new RangeError(
                        'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
                    );
                */

                if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
                    // As accessors are supported only on engines implementing
                    // `__proto__` we can safely override `__proto__` while defining
                    // a property to make sure that we don't hit an inherited
                    // accessor.
                    /* eslint-disable no-proto */
                    var prototype = object.__proto__;
                    object.__proto__ = prototypeOfObject;
                    // Deleting a property anyway since getter / setter may be
                    // defined on object itself.
                    delete object[property];
                    object[property] = descriptor.value;
                    // Setting original `__proto__` back now.
                    object.__proto__ = prototype;
                    /* eslint-enable no-proto */
                } else {
                    object[property] = descriptor.value;
                }
            } else {
                var hasGetter = 'get' in descriptor;
                var hasSetter = 'set' in descriptor;
                if (!supportsAccessors && (hasGetter || hasSetter)) {
                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                }
                // If we got that far then getters and setters can be defined !!
                if (hasGetter) {
                    defineGetter(object, property, descriptor.get);
                }
                if (hasSetter) {
                    defineSetter(object, property, descriptor.set);
                }
            }
            return object;
        };
    }

    // ES5 15.2.3.7
    // http://es5.github.com/#x15.2.3.7
    if (!Object.defineProperties || definePropertiesFallback) {
        Object.defineProperties = function defineProperties(object, properties) {
            // make a valiant attempt to use the real defineProperties
            if (definePropertiesFallback) {
                try {
                    return definePropertiesFallback.call(Object, object, properties);
                } catch (exception) {
                    // try the shim if the real one doesn't work
                }
            }

            Object.keys(properties).forEach(function (property) {
                if (property !== '__proto__') {
                    Object.defineProperty(object, property, properties[property]);
                }
            });
            return object;
        };
    }

    // ES5 15.2.3.8
    // http://es5.github.com/#x15.2.3.8
    if (!Object.seal) {
        Object.seal = function seal(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.seal can only be called on Objects.');
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return object;
        };
    }

    // ES5 15.2.3.9
    // http://es5.github.com/#x15.2.3.9
    if (!Object.freeze) {
        Object.freeze = function freeze(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.freeze can only be called on Objects.');
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return object;
        };
    }

    // detect a Rhino bug and patch it
    try {
        Object.freeze(function () {});
    } catch (exception) {
        Object.freeze = (function (freezeObject) {
            return function freeze(object) {
                if (typeof object === 'function') {
                    return object;
                } else {
                    return freezeObject(object);
                }
            };
        }(Object.freeze));
    }

    // ES5 15.2.3.10
    // http://es5.github.com/#x15.2.3.10
    if (!Object.preventExtensions) {
        Object.preventExtensions = function preventExtensions(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.preventExtensions can only be called on Objects.');
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return object;
        };
    }

    // ES5 15.2.3.11
    // http://es5.github.com/#x15.2.3.11
    if (!Object.isSealed) {
        Object.isSealed = function isSealed(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.isSealed can only be called on Objects.');
            }
            return false;
        };
    }

    // ES5 15.2.3.12
    // http://es5.github.com/#x15.2.3.12
    if (!Object.isFrozen) {
        Object.isFrozen = function isFrozen(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.isFrozen can only be called on Objects.');
            }
            return false;
        };
    }

    // ES5 15.2.3.13
    // http://es5.github.com/#x15.2.3.13
    if (!Object.isExtensible) {
        Object.isExtensible = function isExtensible(object) {
            // 1. If Type(O) is not Object throw a TypeError exception.
            if (Object(object) !== object) {
                throw new TypeError('Object.isExtensible can only be called on Objects.');
            }
            // 2. Return the Boolean value of the [[Extensible]] internal property of O.
            var name = '';
            while (owns(object, name)) {
                name += '?';
            }
            object[name] = true;
            var returnValue = owns(object, name);
            delete object[name];
            return returnValue;
        };
    }

}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {
    /**
     * Brings an environment as close to ECMAScript 5 compliance
     * as is possible with the facilities of erstwhile engines.
     *
     * Annotated ES5: http://es5.github.com/ (specific links below)
     * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
     * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
     */

    // Shortcut to an often accessed properties, in order to avoid multiple
    // dereference that costs universally. This also holds a reference to known-good
    // functions.
    var $Array = Array;
    var ArrayPrototype = $Array.prototype;
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    var $Function = Function;
    var FunctionPrototype = $Function.prototype;
    var $String = String;
    var StringPrototype = $String.prototype;
    var $Number = Number;
    var NumberPrototype = $Number.prototype;
    var array_slice = ArrayPrototype.slice;
    var array_splice = ArrayPrototype.splice;
    var array_push = ArrayPrototype.push;
    var array_unshift = ArrayPrototype.unshift;
    var array_concat = ArrayPrototype.concat;
    var array_join = ArrayPrototype.join;
    var call = FunctionPrototype.call;
    var apply = FunctionPrototype.apply;
    var max = Math.max;
    var min = Math.min;

    // Having a toString local variable name breaks in Opera so use to_string.
    var to_string = ObjectPrototype.toString;

    /* global Symbol */
    /* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
    var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
    var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function isES6ClassFn(value) { try { var fnStr = fnToStr.call(value); var singleStripped = fnStr.replace(/\/\/.*\n/g, ''); var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, ''); var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' '); return constructorRegex.test(spaceStripped); } catch (e) { return false; /* not a function */ } }, tryFunctionObject = function tryFunctionObject(value) { try { if (isES6ClassFn(value)) { return false; } fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]', isCallable = function isCallable(value) { if (!value) { return false; } if (typeof value !== 'function' && typeof value !== 'object') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } if (isES6ClassFn(value)) { return false; } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };

    var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
    var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };
    /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */

    /* inlined from http://npmjs.com/define-properties */
    var supportsDescriptors = $Object.defineProperty && (function () {
        try {
            var obj = {};
            $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
            for (var _ in obj) { // jscs:ignore disallowUnusedVariables
                return false;
            }
            return obj.x === obj;
        } catch (e) { /* this is ES3 */
            return false;
        }
    }());
    var defineProperties = (function (has) {
        // Define configurable, writable, and non-enumerable props
        // if they don't exist.
        var defineProperty;
        if (supportsDescriptors) {
            defineProperty = function (object, name, method, forceAssign) {
                if (!forceAssign && (name in object)) {
                    return;
                }
                $Object.defineProperty(object, name, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: method
                });
            };
        } else {
            defineProperty = function (object, name, method, forceAssign) {
                if (!forceAssign && (name in object)) {
                    return;
                }
                object[name] = method;
            };
        }
        return function defineProperties(object, map, forceAssign) {
            for (var name in map) {
                if (has.call(map, name)) {
                    defineProperty(object, name, map[name], forceAssign);
                }
            }
        };
    }(ObjectPrototype.hasOwnProperty));

    //
    // Util
    // ======
    //

    /* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
    var isPrimitive = function isPrimitive(input) {
        var type = typeof input;
        return input === null || (type !== 'object' && type !== 'function');
    };

    var isActualNaN = $Number.isNaN || function isActualNaN(x) {
        return x !== x;
    };

    var ES = {
        // ES5 9.4
        // http://es5.github.com/#x9.4
        // http://jsperf.com/to-integer
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
        ToInteger: function ToInteger(num) {
            var n = +num;
            if (isActualNaN(n)) {
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
            return n;
        },

        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
        ToPrimitive: function ToPrimitive(input) {
            var val, valueOf, toStr;
            if (isPrimitive(input)) {
                return input;
            }
            valueOf = input.valueOf;
            if (isCallable(valueOf)) {
                val = valueOf.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            toStr = input.toString;
            if (isCallable(toStr)) {
                val = toStr.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            throw new TypeError();
        },

        // ES5 9.9
        // http://es5.github.com/#x9.9
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
        ToObject: function (o) {
            if (o == null) { // this matches both null and undefined
                throw new TypeError("can't convert " + o + ' to object');
            }
            return $Object(o);
        },

        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
        ToUint32: function ToUint32(x) {
            return x >>> 0;
        }
    };

    //
    // Function
    // ========
    //

    // ES-5 15.3.4.5
    // http://es5.github.com/#x15.3.4.5

    var Empty = function Empty() {};

    defineProperties(FunctionPrototype, {
        bind: function bind(that) { // .length is 1
            // 1. Let Target be the this value.
            var target = this;
            // 2. If IsCallable(Target) is false, throw a TypeError exception.
            if (!isCallable(target)) {
                throw new TypeError('Function.prototype.bind called on incompatible ' + target);
            }
            // 3. Let A be a new (possibly empty) internal list of all of the
            //   argument values provided after thisArg (arg1, arg2 etc), in order.
            // XXX slicedArgs will stand in for "A" if used
            var args = array_slice.call(arguments, 1); // for normal call
            // 4. Let F be a new native ECMAScript object.
            // 11. Set the [[Prototype]] internal property of F to the standard
            //   built-in Function prototype object as specified in 15.3.3.1.
            // 12. Set the [[Call]] internal property of F as described in
            //   15.3.4.5.1.
            // 13. Set the [[Construct]] internal property of F as described in
            //   15.3.4.5.2.
            // 14. Set the [[HasInstance]] internal property of F as described in
            //   15.3.4.5.3.
            var bound;
            var binder = function () {

                if (this instanceof bound) {
                    // 15.3.4.5.2 [[Construct]]
                    // When the [[Construct]] internal method of a function object,
                    // F that was created using the bind function is called with a
                    // list of arguments ExtraArgs, the following steps are taken:
                    // 1. Let target be the value of F's [[TargetFunction]]
                    //   internal property.
                    // 2. If target has no [[Construct]] internal method, a
                    //   TypeError exception is thrown.
                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Construct]] internal
                    //   method of target providing args as the arguments.

                    var result = apply.call(
                        target,
                        this,
                        array_concat.call(args, array_slice.call(arguments))
                    );
                    if ($Object(result) === result) {
                        return result;
                    }
                    return this;

                } else {
                    // 15.3.4.5.1 [[Call]]
                    // When the [[Call]] internal method of a function object, F,
                    // which was created using the bind function is called with a
                    // this value and a list of arguments ExtraArgs, the following
                    // steps are taken:
                    // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 2. Let boundThis be the value of F's [[BoundThis]] internal
                    //   property.
                    // 3. Let target be the value of F's [[TargetFunction]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Call]] internal method
                    //   of target providing boundThis as the this value and
                    //   providing args as the arguments.

                    // equiv: target.call(this, ...boundArgs, ...args)
                    return apply.call(
                        target,
                        that,
                        array_concat.call(args, array_slice.call(arguments))
                    );

                }

            };

            // 15. If the [[Class]] internal property of Target is "Function", then
            //     a. Let L be the length property of Target minus the length of A.
            //     b. Set the length own property of F to either 0 or L, whichever is
            //       larger.
            // 16. Else set the length own property of F to 0.

            var boundLength = max(0, target.length - args.length);

            // 17. Set the attributes of the length own property of F to the values
            //   specified in 15.3.5.1.
            var boundArgs = [];
            for (var i = 0; i < boundLength; i++) {
                array_push.call(boundArgs, '$' + i);
            }

            // XXX Build a dynamic function with desired amount of arguments is the only
            // way to set the length property of a function.
            // In environments where Content Security Policies enabled (Chrome extensions,
            // for ex.) all use of eval or Function costructor throws an exception.
            // However in all of these environments Function.prototype.bind exists
            // and so this code will never be executed.
            bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);

            if (target.prototype) {
                Empty.prototype = target.prototype;
                bound.prototype = new Empty();
                // Clean up dangling references.
                Empty.prototype = null;
            }

            // TODO
            // 18. Set the [[Extensible]] internal property of F to true.

            // TODO
            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
            // 20. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
            //   false.
            // 21. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
            //   and false.

            // TODO
            // NOTE Function objects created using Function.prototype.bind do not
            // have a prototype property or the [[Code]], [[FormalParameters]], and
            // [[Scope]] internal properties.
            // XXX can't delete prototype in pure-js.

            // 22. Return F.
            return bound;
        }
    });

    // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
    // use it in defining shortcuts.
    var owns = call.bind(ObjectPrototype.hasOwnProperty);
    var toStr = call.bind(ObjectPrototype.toString);
    var arraySlice = call.bind(array_slice);
    var arraySliceApply = apply.bind(array_slice);
    var strSlice = call.bind(StringPrototype.slice);
    var strSplit = call.bind(StringPrototype.split);
    var strIndexOf = call.bind(StringPrototype.indexOf);
    var pushCall = call.bind(array_push);
    var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
    var arraySort = call.bind(ArrayPrototype.sort);

    //
    // Array
    // =====
    //

    var isArray = $Array.isArray || function isArray(obj) {
        return toStr(obj) === '[object Array]';
    };

    // ES5 15.4.4.12
    // http://es5.github.com/#x15.4.4.13
    // Return len+argCount.
    // [bugfix, ielt8]
    // IE < 8 bug: [].unshift(0) === undefined but should be "1"
    var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
    defineProperties(ArrayPrototype, {
        unshift: function () {
            array_unshift.apply(this, arguments);
            return this.length;
        }
    }, hasUnshiftReturnValueBug);

    // ES5 15.4.3.2
    // http://es5.github.com/#x15.4.3.2
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
    defineProperties($Array, { isArray: isArray });

    // The IsCallable() check in the Array functions
    // has been replaced with a strict check on the
    // internal class of the object to trap cases where
    // the provided function was actually a regular
    // expression literal, which in V8 and
    // JavaScriptCore is a typeof "function".  Only in
    // V8 are regular expression literals permitted as
    // reduce parameters, so it is desirable in the
    // general case for the shim to match the more
    // strict and common behavior of rejecting regular
    // expressions.

    // ES5 15.4.4.18
    // http://es5.github.com/#x15.4.4.18
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

    // Check failure of by-index access of string characters (IE < 9)
    // and failure of `0 in boxedString` (Rhino)
    var boxedString = $Object('a');
    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

    var properlyBoxesContext = function properlyBoxed(method) {
        // Check node 0.6.21 bug where third parameter is not boxed
        var properlyBoxesNonStrict = true;
        var properlyBoxesStrict = true;
        var threwException = false;
        if (method) {
            try {
                method.call('foo', function (_, __, context) {
                    if (typeof context !== 'object') {
                        properlyBoxesNonStrict = false;
                    }
                });

                method.call([1], function () {
                    'use strict';

                    properlyBoxesStrict = typeof this === 'string';
                }, 'x');
            } catch (e) {
                threwException = true;
            }
        }
        return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
    };

    defineProperties(ArrayPrototype, {
        forEach: function forEach(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var i = -1;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.forEach callback must be a function');
            }

            while (++i < length) {
                if (i in self) {
                    // Invoke the callback function with call, passing arguments:
                    // context, property value, property key, thisArg object
                    if (typeof T === 'undefined') {
                        callbackfn(self[i], i, object);
                    } else {
                        callbackfn.call(T, self[i], i, object);
                    }
                }
            }
        }
    }, !properlyBoxesContext(ArrayPrototype.forEach));

    // ES5 15.4.4.19
    // http://es5.github.com/#x15.4.4.19
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
    defineProperties(ArrayPrototype, {
        map: function map(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = $Array(length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.map callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self) {
                    if (typeof T === 'undefined') {
                        result[i] = callbackfn(self[i], i, object);
                    } else {
                        result[i] = callbackfn.call(T, self[i], i, object);
                    }
                }
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.map));

    // ES5 15.4.4.20
    // http://es5.github.com/#x15.4.4.20
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
    defineProperties(ArrayPrototype, {
        filter: function filter(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = [];
            var value;
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.filter callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self) {
                    value = self[i];
                    if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
                        pushCall(result, value);
                    }
                }
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.filter));

    // ES5 15.4.4.16
    // http://es5.github.com/#x15.4.4.16
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
    defineProperties(ArrayPrototype, {
        every: function every(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.every callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                    return false;
                }
            }
            return true;
        }
    }, !properlyBoxesContext(ArrayPrototype.every));

    // ES5 15.4.4.17
    // http://es5.github.com/#x15.4.4.17
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
    defineProperties(ArrayPrototype, {
        some: function some(callbackfn/*, thisArg */) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.some callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                    return true;
                }
            }
            return false;
        }
    }, !properlyBoxesContext(ArrayPrototype.some));

    // ES5 15.4.4.21
    // http://es5.github.com/#x15.4.4.21
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
    var reduceCoercesToObject = false;
    if (ArrayPrototype.reduce) {
        reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {
            return list;
        }) === 'object';
    }
    defineProperties(ArrayPrototype, {
        reduce: function reduce(callbackfn/*, initialValue*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.reduce callback must be a function');
            }

            // no value to return if no initial value and an empty array
            if (length === 0 && arguments.length === 1) {
                throw new TypeError('reduce of empty array with no initial value');
            }

            var i = 0;
            var result;
            if (arguments.length >= 2) {
                result = arguments[1];
            } else {
                do {
                    if (i in self) {
                        result = self[i++];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (++i >= length) {
                        throw new TypeError('reduce of empty array with no initial value');
                    }
                } while (true);
            }

            for (; i < length; i++) {
                if (i in self) {
                    result = callbackfn(result, self[i], i, object);
                }
            }

            return result;
        }
    }, !reduceCoercesToObject);

    // ES5 15.4.4.22
    // http://es5.github.com/#x15.4.4.22
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
    var reduceRightCoercesToObject = false;
    if (ArrayPrototype.reduceRight) {
        reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {
            return list;
        }) === 'object';
    }
    defineProperties(ArrayPrototype, {
        reduceRight: function reduceRight(callbackfn/*, initial*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.reduceRight callback must be a function');
            }

            // no value to return if no initial value, empty array
            if (length === 0 && arguments.length === 1) {
                throw new TypeError('reduceRight of empty array with no initial value');
            }

            var result;
            var i = length - 1;
            if (arguments.length >= 2) {
                result = arguments[1];
            } else {
                do {
                    if (i in self) {
                        result = self[i--];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (--i < 0) {
                        throw new TypeError('reduceRight of empty array with no initial value');
                    }
                } while (true);
            }

            if (i < 0) {
                return result;
            }

            do {
                if (i in self) {
                    result = callbackfn(result, self[i], i, object);
                }
            } while (i--);

            return result;
        }
    }, !reduceRightCoercesToObject);

    // ES5 15.4.4.14
    // http://es5.github.com/#x15.4.4.14
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
    var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
    defineProperties(ArrayPrototype, {
        indexOf: function indexOf(searchElement/*, fromIndex */) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);

            if (length === 0) {
                return -1;
            }

            var i = 0;
            if (arguments.length > 1) {
                i = ES.ToInteger(arguments[1]);
            }

            // handle negative indices
            i = i >= 0 ? i : max(0, length + i);
            for (; i < length; i++) {
                if (i in self && self[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        }
    }, hasFirefox2IndexOfBug);

    // ES5 15.4.4.15
    // http://es5.github.com/#x15.4.4.15
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
    var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
    defineProperties(ArrayPrototype, {
        lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);

            if (length === 0) {
                return -1;
            }
            var i = length - 1;
            if (arguments.length > 1) {
                i = min(i, ES.ToInteger(arguments[1]));
            }
            // handle negative indices
            i = i >= 0 ? i : length - Math.abs(i);
            for (; i >= 0; i--) {
                if (i in self && searchElement === self[i]) {
                    return i;
                }
            }
            return -1;
        }
    }, hasFirefox2LastIndexOfBug);

    // ES5 15.4.4.12
    // http://es5.github.com/#x15.4.4.12
    var spliceNoopReturnsEmptyArray = (function () {
        var a = [1, 2];
        var result = a.splice();
        return a.length === 2 && isArray(result) && result.length === 0;
    }());
    defineProperties(ArrayPrototype, {
        // Safari 5.0 bug where .splice() returns undefined
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) {
                return [];
            } else {
                return array_splice.apply(this, arguments);
            }
        }
    }, !spliceNoopReturnsEmptyArray);

    var spliceWorksWithEmptyObject = (function () {
        var obj = {};
        ArrayPrototype.splice.call(obj, 0, 0, 1);
        return obj.length === 1;
    }());
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) {
                return [];
            }
            var args = arguments;
            this.length = max(ES.ToInteger(this.length), 0);
            if (arguments.length > 0 && typeof deleteCount !== 'number') {
                args = arraySlice(arguments);
                if (args.length < 2) {
                    pushCall(args, this.length - start);
                } else {
                    args[1] = ES.ToInteger(deleteCount);
                }
            }
            return array_splice.apply(this, args);
        }
    }, !spliceWorksWithEmptyObject);
    var spliceWorksWithLargeSparseArrays = (function () {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
        var arr = new $Array(1e5);
        // note: the index MUST be 8 or larger or the test will false pass
        arr[8] = 'x';
        arr.splice(1, 1);
        // note: this test must be defined *after* the indexOf shim
        // per https://github.com/es-shims/es5-shim/issues/313
        return arr.indexOf('x') === 7;
    }());
    var spliceWorksWithSmallSparseArrays = (function () {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Opera 12.15 breaks on this, no idea why.
        var n = 256;
        var arr = [];
        arr[n] = 'a';
        arr.splice(n + 1, 0, 'b');
        return arr[n] === 'a';
    }());
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            var O = ES.ToObject(this);
            var A = [];
            var len = ES.ToUint32(O.length);
            var relativeStart = ES.ToInteger(start);
            var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
            var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

            var k = 0;
            var from;
            while (k < actualDeleteCount) {
                from = $String(actualStart + k);
                if (owns(O, from)) {
                    A[k] = O[from];
                }
                k += 1;
            }

            var items = arraySlice(arguments, 2);
            var itemCount = items.length;
            var to;
            if (itemCount < actualDeleteCount) {
                k = actualStart;
                var maxK = len - actualDeleteCount;
                while (k < maxK) {
                    from = $String(k + actualDeleteCount);
                    to = $String(k + itemCount);
                    if (owns(O, from)) {
                        O[to] = O[from];
                    } else {
                        delete O[to];
                    }
                    k += 1;
                }
                k = len;
                var minK = len - actualDeleteCount + itemCount;
                while (k > minK) {
                    delete O[k - 1];
                    k -= 1;
                }
            } else if (itemCount > actualDeleteCount) {
                k = len - actualDeleteCount;
                while (k > actualStart) {
                    from = $String(k + actualDeleteCount - 1);
                    to = $String(k + itemCount - 1);
                    if (owns(O, from)) {
                        O[to] = O[from];
                    } else {
                        delete O[to];
                    }
                    k -= 1;
                }
            }
            k = actualStart;
            for (var i = 0; i < items.length; ++i) {
                O[k] = items[i];
                k += 1;
            }
            O.length = len - actualDeleteCount + itemCount;

            return A;
        }
    }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

    var originalJoin = ArrayPrototype.join;
    var hasStringJoinBug;
    try {
        hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
    } catch (e) {
        hasStringJoinBug = true;
    }
    if (hasStringJoinBug) {
        defineProperties(ArrayPrototype, {
            join: function join(separator) {
                var sep = typeof separator === 'undefined' ? ',' : separator;
                return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
            }
        }, hasStringJoinBug);
    }

    var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
    if (hasJoinUndefinedBug) {
        defineProperties(ArrayPrototype, {
            join: function join(separator) {
                var sep = typeof separator === 'undefined' ? ',' : separator;
                return originalJoin.call(this, sep);
            }
        }, hasJoinUndefinedBug);
    }

    var pushShim = function push(item) {
        var O = ES.ToObject(this);
        var n = ES.ToUint32(O.length);
        var i = 0;
        while (i < arguments.length) {
            O[n + i] = arguments[i];
            i += 1;
        }
        O.length = n + i;
        return n + i;
    };

    var pushIsNotGeneric = (function () {
        var obj = {};
        var result = Array.prototype.push.call(obj, undefined);
        return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
    }());
    defineProperties(ArrayPrototype, {
        push: function push(item) {
            if (isArray(this)) {
                return array_push.apply(this, arguments);
            }
            return pushShim.apply(this, arguments);
        }
    }, pushIsNotGeneric);

    // This fixes a very weird bug in Opera 10.6 when pushing `undefined
    var pushUndefinedIsWeird = (function () {
        var arr = [];
        var result = arr.push(undefined);
        return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
    }());
    defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

    // ES5 15.2.3.14
    // http://es5.github.io/#x15.4.4.10
    // Fix boxed string bug
    defineProperties(ArrayPrototype, {
        slice: function (start, end) {
            var arr = isString(this) ? strSplit(this, '') : this;
            return arraySliceApply(arr, arguments);
        }
    }, splitString);

    var sortIgnoresNonFunctions = (function () {
        try {
            [1, 2].sort(null);
            [1, 2].sort({});
            return true;
        } catch (e) {}
        return false;
    }());
    var sortThrowsOnRegex = (function () {
        // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
        try {
            [1, 2].sort(/a/);
            return false;
        } catch (e) {}
        return true;
    }());
    var sortIgnoresUndefined = (function () {
        // applies in IE 8, for one.
        try {
            [1, 2].sort(undefined);
            return true;
        } catch (e) {}
        return false;
    }());
    defineProperties(ArrayPrototype, {
        sort: function sort(compareFn) {
            if (typeof compareFn === 'undefined') {
                return arraySort(this);
            }
            if (!isCallable(compareFn)) {
                throw new TypeError('Array.prototype.sort callback must be a function');
            }
            return arraySort(this, compareFn);
        }
    }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

    //
    // Object
    // ======
    //

    // ES5 15.2.3.14
    // http://es5.github.com/#x15.2.3.14

    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = !isEnum({ 'toString': null }, 'toString');
    var hasProtoEnumBug = isEnum(function () {}, 'prototype');
    var hasStringEnumBug = !owns('x', '0');
    var equalsConstructorPrototype = function (o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var blacklistedKeys = {
        $window: true,
        $console: true,
        $parent: true,
        $self: true,
        $frame: true,
        $frames: true,
        $frameElement: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $external: true
    };
    var hasAutomationEqualityBug = (function () {
        /* globals window */
        if (typeof window === 'undefined') {
            return false;
        }
        for (var k in window) {
            try {
                if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
                    equalsConstructorPrototype(window[k]);
                }
            } catch (e) {
                return true;
            }
        }
        return false;
    }());
    var equalsConstructorPrototypeIfNotBuggy = function (object) {
        if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(object);
        }
        try {
            return equalsConstructorPrototype(object);
        } catch (e) {
            return false;
        }
    };
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var dontEnumsLength = dontEnums.length;

    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
    // can be replaced with require('is-arguments') if we ever use a build process instead
    var isStandardArguments = function isArguments(value) {
        return toStr(value) === '[object Arguments]';
    };
    var isLegacyArguments = function isArguments(value) {
        return value !== null &&
            typeof value === 'object' &&
            typeof value.length === 'number' &&
            value.length >= 0 &&
            !isArray(value) &&
            isCallable(value.callee);
    };
    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

    defineProperties($Object, {
        keys: function keys(object) {
            var isFn = isCallable(object);
            var isArgs = isArguments(object);
            var isObject = object !== null && typeof object === 'object';
            var isStr = isObject && isString(object);

            if (!isObject && !isFn && !isArgs) {
                throw new TypeError('Object.keys called on a non-object');
            }

            var theKeys = [];
            var skipProto = hasProtoEnumBug && isFn;
            if ((isStr && hasStringEnumBug) || isArgs) {
                for (var i = 0; i < object.length; ++i) {
                    pushCall(theKeys, $String(i));
                }
            }

            if (!isArgs) {
                for (var name in object) {
                    if (!(skipProto && name === 'prototype') && owns(object, name)) {
                        pushCall(theKeys, $String(name));
                    }
                }
            }

            if (hasDontEnumBug) {
                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                for (var j = 0; j < dontEnumsLength; j++) {
                    var dontEnum = dontEnums[j];
                    if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                        pushCall(theKeys, dontEnum);
                    }
                }
            }
            return theKeys;
        }
    });

    var keysWorksWithArguments = $Object.keys && (function () {
        // Safari 5.0 bug
        return $Object.keys(arguments).length === 2;
    }(1, 2));
    var keysHasArgumentsLengthBug = $Object.keys && (function () {
        var argKeys = $Object.keys(arguments);
        return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
    }(1));
    var originalKeys = $Object.keys;
    defineProperties($Object, {
        keys: function keys(object) {
            if (isArguments(object)) {
                return originalKeys(arraySlice(object));
            } else {
                return originalKeys(object);
            }
        }
    }, !keysWorksWithArguments || keysHasArgumentsLengthBug);

    //
    // Date
    // ====
    //

    var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
    var aNegativeTestDate = new Date(-1509842289600292);
    var aPositiveTestDate = new Date(1449662400000);
    var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
    var hasToDateStringFormatBug;
    var hasToStringFormatBug;
    var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
    if (timeZoneOffset < -720) {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
        hasToStringFormatBug = !(/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
    } else {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
        hasToStringFormatBug = !(/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
    }

    var originalGetFullYear = call.bind(Date.prototype.getFullYear);
    var originalGetMonth = call.bind(Date.prototype.getMonth);
    var originalGetDate = call.bind(Date.prototype.getDate);
    var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
    var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
    var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
    var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
    var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
    var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
    var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
    var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var daysInMonth = function daysInMonth(month, year) {
        return originalGetDate(new Date(year, month, 0));
    };

    defineProperties(Date.prototype, {
        getFullYear: function getFullYear() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            if (year < 0 && originalGetMonth(this) > 11) {
                return year + 1;
            }
            return year;
        },
        getMonth: function getMonth() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            if (year < 0 && month > 11) {
                return 0;
            }
            return month;
        },
        getDate: function getDate() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            var date = originalGetDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) {
                    return date;
                }
                var days = daysInMonth(0, year + 1);
                return (days - date) + 1;
            }
            return date;
        },
        getUTCFullYear: function getUTCFullYear() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            if (year < 0 && originalGetUTCMonth(this) > 11) {
                return year + 1;
            }
            return year;
        },
        getUTCMonth: function getUTCMonth() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            if (year < 0 && month > 11) {
                return 0;
            }
            return month;
        },
        getUTCDate: function getUTCDate() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            var date = originalGetUTCDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) {
                    return date;
                }
                var days = daysInMonth(0, year + 1);
                return (days - date) + 1;
            }
            return date;
        }
    }, hasNegativeMonthYearBug);

    defineProperties(Date.prototype, {
        toUTCString: function toUTCString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = originalGetUTCDay(this);
            var date = originalGetUTCDate(this);
            var month = originalGetUTCMonth(this);
            var year = originalGetUTCFullYear(this);
            var hour = originalGetUTCHours(this);
            var minute = originalGetUTCMinutes(this);
            var second = originalGetUTCSeconds(this);
            return dayName[day] + ', ' +
                (date < 10 ? '0' + date : date) + ' ' +
                monthName[month] + ' ' +
                year + ' ' +
                (hour < 10 ? '0' + hour : hour) + ':' +
                (minute < 10 ? '0' + minute : minute) + ':' +
                (second < 10 ? '0' + second : second) + ' GMT';
        }
    }, hasNegativeMonthYearBug || hasToUTCStringFormatBug);

    // Opera 12 has `,`
    defineProperties(Date.prototype, {
        toDateString: function toDateString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            return dayName[day] + ' ' +
                monthName[month] + ' ' +
                (date < 10 ? '0' + date : date) + ' ' +
                year;
        }
    }, hasNegativeMonthYearBug || hasToDateStringFormatBug);

    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    if (hasNegativeMonthYearBug || hasToStringFormatBug) {
        Date.prototype.toString = function toString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            var hour = this.getHours();
            var minute = this.getMinutes();
            var second = this.getSeconds();
            var timezoneOffset = this.getTimezoneOffset();
            var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
            var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
            return dayName[day] + ' ' +
                monthName[month] + ' ' +
                (date < 10 ? '0' + date : date) + ' ' +
                year + ' ' +
                (hour < 10 ? '0' + hour : hour) + ':' +
                (minute < 10 ? '0' + minute : minute) + ':' +
                (second < 10 ? '0' + second : second) + ' GMT' +
                (timezoneOffset > 0 ? '-' : '+') +
                (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) +
                (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
        };
        if (supportsDescriptors) {
            $Object.defineProperty(Date.prototype, 'toString', {
                configurable: true,
                enumerable: false,
                writable: true
            });
        }
    }

    // ES5 15.9.5.43
    // http://es5.github.com/#x15.9.5.43
    // This function returns a String value represent the instance in time
    // represented by this Date object. The format of the String is the Date Time
    // string format defined in 15.9.1.15. All fields are present in the String.
    // The time zone is always UTC, denoted by the suffix Z. If the time value of
    // this object is not a finite Number a RangeError exception is thrown.
    var negativeDate = -62198755200000;
    var negativeYearString = '-000001';
    var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
    var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

    var getTime = call.bind(Date.prototype.getTime);

    defineProperties(Date.prototype, {
        toISOString: function toISOString() {
            if (!isFinite(this) || !isFinite(getTime(this))) {
                // Adope Photoshop requires the second check.
                throw new RangeError('Date.prototype.toISOString called on non-finite value.');
            }

            var year = originalGetUTCFullYear(this);

            var month = originalGetUTCMonth(this);
            // see https://github.com/es-shims/es5-shim/issues/111
            year += Math.floor(month / 12);
            month = (month % 12 + 12) % 12;

            // the date time string format is specified in 15.9.1.15.
            var result = [month + 1, originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this)];
            year = (
                (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
                strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
            );

            for (var i = 0; i < result.length; ++i) {
                // pad months, days, hours, minutes, and seconds to have two digits.
                result[i] = strSlice('00' + result[i], -2);
            }
            // pad milliseconds to have three digits.
            return (
                year + '-' + arraySlice(result, 0, 2).join('-') +
                'T' + arraySlice(result, 2).join(':') + '.' +
                strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z'
            );
        }
    }, hasNegativeDateBug || hasSafari51DateBug);

    // ES5 15.9.5.44
    // http://es5.github.com/#x15.9.5.44
    // This function provides a String representation of a Date object for use by
    // JSON.stringify (15.12.3).
    var dateToJSONIsSupported = (function () {
        try {
            return Date.prototype.toJSON &&
                new Date(NaN).toJSON() === null &&
                new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
                Date.prototype.toJSON.call({ // generic
                    toISOString: function () { return true; }
                });
        } catch (e) {
            return false;
        }
    }());
    if (!dateToJSONIsSupported) {
        Date.prototype.toJSON = function toJSON(key) {
            // When the toJSON method is called with argument key, the following
            // steps are taken:

            // 1.  Let O be the result of calling ToObject, giving it the this
            // value as its argument.
            // 2. Let tv be ES.ToPrimitive(O, hint Number).
            var O = $Object(this);
            var tv = ES.ToPrimitive(O);
            // 3. If tv is a Number and is not finite, return null.
            if (typeof tv === 'number' && !isFinite(tv)) {
                return null;
            }
            // 4. Let toISO be the result of calling the [[Get]] internal method of
            // O with argument "toISOString".
            var toISO = O.toISOString;
            // 5. If IsCallable(toISO) is false, throw a TypeError exception.
            if (!isCallable(toISO)) {
                throw new TypeError('toISOString property is not callable');
            }
            // 6. Return the result of calling the [[Call]] internal method of
            //  toISO with O as the this value and an empty argument list.
            return toISO.call(O);

            // NOTE 1 The argument is ignored.

            // NOTE 2 The toJSON function is intentionally generic; it does not
            // require that its this value be a Date object. Therefore, it can be
            // transferred to other kinds of objects for use as a method. However,
            // it does require that any such object have a toISOString method. An
            // object is free to use the argument key to filter its
            // stringification.
        };
    }

    // ES5 15.9.4.2
    // http://es5.github.com/#x15.9.4.2
    // based on work shared by Daniel Friesen (dantman)
    // http://gist.github.com/303249
    var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
    var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
    var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
    if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
        // XXX global assignment won't work in embeddings that use
        // an alternate object for the context.
        /* global Date: true */
        /* eslint-disable no-undef */
        var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
        var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
        /* eslint-disable no-implicit-globals */
        Date = (function (NativeDate) {
        /* eslint-enable no-implicit-globals */
        /* eslint-enable no-undef */
            // Date.length === 7
            var DateShim = function Date(Y, M, D, h, m, s, ms) {
                var length = arguments.length;
                var date;
                if (this instanceof NativeDate) {
                    var seconds = s;
                    var millis = ms;
                    if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
                        // work around a Safari 8/9 bug where it treats the seconds as signed
                        var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                        var sToShift = Math.floor(msToShift / 1e3);
                        seconds += sToShift;
                        millis -= sToShift * 1e3;
                    }
                    date = length === 1 && $String(Y) === Y ? // isString(Y)
                        // We explicitly pass it through parse:
                        new NativeDate(DateShim.parse(Y)) :
                        // We have to manually make calls depending on argument
                        // length here
                        length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
                        length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
                        length >= 5 ? new NativeDate(Y, M, D, h, m) :
                        length >= 4 ? new NativeDate(Y, M, D, h) :
                        length >= 3 ? new NativeDate(Y, M, D) :
                        length >= 2 ? new NativeDate(Y, M) :
                        length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) :
                                      new NativeDate();
                } else {
                    date = NativeDate.apply(this, arguments);
                }
                if (!isPrimitive(date)) {
                    // Prevent mixups with unfixed Date object
                    defineProperties(date, { constructor: DateShim }, true);
                }
                return date;
            };

            // 15.9.1.15 Date Time String Format.
            var isoDateExpression = new RegExp('^' +
                '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
                                          // 6-digit extended year
                '(?:-(\\d{2})' + // optional month capture
                '(?:-(\\d{2})' + // optional day capture
                '(?:' + // capture hours:minutes:seconds.milliseconds
                    'T(\\d{2})' + // hours capture
                    ':(\\d{2})' + // minutes capture
                    '(?:' + // optional :seconds.milliseconds
                        ':(\\d{2})' + // seconds capture
                        '(?:(\\.\\d{1,}))?' + // milliseconds capture
                    ')?' +
                '(' + // capture UTC offset component
                    'Z|' + // UTC capture
                    '(?:' + // offset specifier +/-hours:minutes
                        '([-+])' + // sign capture
                        '(\\d{2})' + // hours offset capture
                        ':(\\d{2})' + // minutes offset capture
                    ')' +
                ')?)?)?)?' +
            '$');

            var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

            var dayFromMonth = function dayFromMonth(year, month) {
                var t = month > 1 ? 1 : 0;
                return (
                    months[month] +
                    Math.floor((year - 1969 + t) / 4) -
                    Math.floor((year - 1901 + t) / 100) +
                    Math.floor((year - 1601 + t) / 400) +
                    365 * (year - 1970)
                );
            };

            var toUTC = function toUTC(t) {
                var s = 0;
                var ms = t;
                if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
                    // work around a Safari 8/9 bug where it treats the seconds as signed
                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                    var sToShift = Math.floor(msToShift / 1e3);
                    s += sToShift;
                    ms -= sToShift * 1e3;
                }
                return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
            };

            // Copy any custom methods a 3rd party library may have added
            for (var key in NativeDate) {
                if (owns(NativeDate, key)) {
                    DateShim[key] = NativeDate[key];
                }
            }

            // Copy "native" methods explicitly; they may be non-enumerable
            defineProperties(DateShim, {
                now: NativeDate.now,
                UTC: NativeDate.UTC
            }, true);
            DateShim.prototype = NativeDate.prototype;
            defineProperties(DateShim.prototype, {
                constructor: DateShim
            }, true);

            // Upgrade Date.parse to handle simplified ISO 8601 strings
            var parseShim = function parse(string) {
                var match = isoDateExpression.exec(string);
                if (match) {
                    // parse months, days, hours, minutes, seconds, and milliseconds
                    // provide default values if necessary
                    // parse the UTC offset component
                    var year = $Number(match[1]),
                        month = $Number(match[2] || 1) - 1,
                        day = $Number(match[3] || 1) - 1,
                        hour = $Number(match[4] || 0),
                        minute = $Number(match[5] || 0),
                        second = $Number(match[6] || 0),
                        millisecond = Math.floor($Number(match[7] || 0) * 1000),
                        // When time zone is missed, local offset should be used
                        // (ES 5.1 bug)
                        // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                        isLocalTime = Boolean(match[4] && !match[8]),
                        signOffset = match[9] === '-' ? 1 : -1,
                        hourOffset = $Number(match[10] || 0),
                        minuteOffset = $Number(match[11] || 0),
                        result;
                    var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
                    if (
                        hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
                        minute < 60 && second < 60 && millisecond < 1000 &&
                        month > -1 && month < 12 && hourOffset < 24 &&
                        minuteOffset < 60 && // detect invalid offsets
                        day > -1 &&
                        day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
                    ) {
                        result = (
                            (dayFromMonth(year, month) + day) * 24 +
                            hour +
                            hourOffset * signOffset
                        ) * 60;
                        result = (
                            (result + minute + minuteOffset * signOffset) * 60 +
                            second
                        ) * 1000 + millisecond;
                        if (isLocalTime) {
                            result = toUTC(result);
                        }
                        if (-8.64e15 <= result && result <= 8.64e15) {
                            return result;
                        }
                    }
                    return NaN;
                }
                return NativeDate.parse.apply(this, arguments);
            };
            defineProperties(DateShim, { parse: parseShim });

            return DateShim;
        }(Date));
        /* global Date: false */
    }

    // ES5 15.9.4.4
    // http://es5.github.com/#x15.9.4.4
    if (!Date.now) {
        Date.now = function now() {
            return new Date().getTime();
        };
    }

    //
    // Number
    // ======
    //

    // ES5.1 15.7.4.5
    // http://es5.github.com/#x15.7.4.5
    var hasToFixedBugs = NumberPrototype.toFixed && (
      (0.00008).toFixed(3) !== '0.000' ||
      (0.9).toFixed(0) !== '1' ||
      (1.255).toFixed(2) !== '1.25' ||
      (1000000000000000128).toFixed(0) !== '1000000000000000128'
    );

    var toFixedHelpers = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function multiply(n, c) {
            var i = -1;
            var c2 = c;
            while (++i < toFixedHelpers.size) {
                c2 += n * toFixedHelpers.data[i];
                toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
                c2 = Math.floor(c2 / toFixedHelpers.base);
            }
        },
        divide: function divide(n) {
            var i = toFixedHelpers.size;
            var c = 0;
            while (--i >= 0) {
                c += toFixedHelpers.data[i];
                toFixedHelpers.data[i] = Math.floor(c / n);
                c = (c % n) * toFixedHelpers.base;
            }
        },
        numToString: function numToString() {
            var i = toFixedHelpers.size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
                    var t = $String(toFixedHelpers.data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += strSlice('0000000', 0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        },
        pow: function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        },
        log: function log(x) {
            var n = 0;
            var x2 = x;
            while (x2 >= 4096) {
                n += 12;
                x2 /= 4096;
            }
            while (x2 >= 2) {
                n += 1;
                x2 /= 2;
            }
            return n;
        }
    };

    var toFixedShim = function toFixed(fractionDigits) {
        var f, x, s, m, e, z, j, k;

        // Test for NaN and round fractionDigits down
        f = $Number(fractionDigits);
        f = isActualNaN(f) ? 0 : Math.floor(f);

        if (f < 0 || f > 20) {
            throw new RangeError('Number.toFixed called with invalid number of decimals');
        }

        x = $Number(this);

        if (isActualNaN(x)) {
            return 'NaN';
        }

        // If it is too big or small, return the string value of the number
        if (x <= -1e21 || x >= 1e21) {
            return $String(x);
        }

        s = '';

        if (x < 0) {
            s = '-';
            x = -x;
        }

        m = '0';

        if (x > 1e-21) {
            // 1e-21 < x < 1e21
            // -70 < log2(x) < 70
            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
            z *= 0x10000000000000; // Math.pow(2, 52);
            e = 52 - e;

            // -18 < e < 122
            // x = z / 2 ^ e
            if (e > 0) {
                toFixedHelpers.multiply(0, z);
                j = f;

                while (j >= 7) {
                    toFixedHelpers.multiply(1e7, 0);
                    j -= 7;
                }

                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
                j = e - 1;

                while (j >= 23) {
                    toFixedHelpers.divide(1 << 23);
                    j -= 23;
                }

                toFixedHelpers.divide(1 << j);
                toFixedHelpers.multiply(1, 1);
                toFixedHelpers.divide(2);
                m = toFixedHelpers.numToString();
            } else {
                toFixedHelpers.multiply(0, z);
                toFixedHelpers.multiply(1 << (-e), 0);
                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
            }
        }

        if (f > 0) {
            k = m.length;

            if (k <= f) {
                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
            } else {
                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
            }
        } else {
            m = s + m;
        }

        return m;
    };
    defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

    var hasToPrecisionUndefinedBug = (function () {
        try {
            return 1.0.toPrecision(undefined) === '1';
        } catch (e) {
            return true;
        }
    }());
    var originalToPrecision = NumberPrototype.toPrecision;
    defineProperties(NumberPrototype, {
        toPrecision: function toPrecision(precision) {
            return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
        }
    }, hasToPrecisionUndefinedBug);

    //
    // String
    // ======
    //

    // ES5 15.5.4.14
    // http://es5.github.com/#x15.5.4.14

    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
    // Many browsers do not split properly with regular expressions or they
    // do not perform the split correctly under obscure conditions.
    // See http://blog.stevenlevithan.com/archives/cross-browser-split
    // I've tested in many browsers and this seems to cover the deviant ones:
    //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
    //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
    //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
    //       [undefined, "t", undefined, "e", ...]
    //    ''.split(/.?/) should be [], not [""]
    //    '.'.split(/()()/) should be ["."], not ["", "", "."]

    if (
        'ab'.split(/(?:ab)*/).length !== 2 ||
        '.'.split(/(.?)(.?)/).length !== 4 ||
        'tesst'.split(/(s)*/)[1] === 't' ||
        'test'.split(/(?:)/, -1).length !== 4 ||
        ''.split(/.?/).length ||
        '.'.split(/()()/).length > 1
    ) {
        (function () {
            var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
            var maxSafe32BitInt = Math.pow(2, 32) - 1;

            StringPrototype.split = function (separator, limit) {
                var string = String(this);
                if (typeof separator === 'undefined' && limit === 0) {
                    return [];
                }

                // If `separator` is not a regex, use native split
                if (!isRegex(separator)) {
                    return strSplit(this, separator, limit);
                }

                var output = [];
                var flags = (separator.ignoreCase ? 'i' : '') +
                            (separator.multiline ? 'm' : '') +
                            (separator.unicode ? 'u' : '') + // in ES6
                            (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
                    lastLastIndex = 0,
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    separator2, match, lastIndex, lastLength;
                var separatorCopy = new RegExp(separator.source, flags + 'g');
                if (!compliantExecNpcg) {
                    // Doesn't need flags gy, but they don't hurt
                    separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
                }
                /* Values for `limit`, per the spec:
                 * If undefined: 4294967295 // maxSafe32BitInt
                 * If 0, Infinity, or NaN: 0
                 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
                 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
                 * If other: Type-convert, then use the above rules
                 */
                var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
                match = separatorCopy.exec(string);
                while (match) {
                    // `separatorCopy.lastIndex` is not reliable cross-browser
                    lastIndex = match.index + match[0].length;
                    if (lastIndex > lastLastIndex) {
                        pushCall(output, strSlice(string, lastLastIndex, match.index));
                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
                        // nonparticipating capturing groups
                        if (!compliantExecNpcg && match.length > 1) {
                            /* eslint-disable no-loop-func */
                            match[0].replace(separator2, function () {
                                for (var i = 1; i < arguments.length - 2; i++) {
                                    if (typeof arguments[i] === 'undefined') {
                                        match[i] = void 0;
                                    }
                                }
                            });
                            /* eslint-enable no-loop-func */
                        }
                        if (match.length > 1 && match.index < string.length) {
                            array_push.apply(output, arraySlice(match, 1));
                        }
                        lastLength = match[0].length;
                        lastLastIndex = lastIndex;
                        if (output.length >= splitLimit) {
                            break;
                        }
                    }
                    if (separatorCopy.lastIndex === match.index) {
                        separatorCopy.lastIndex++; // Avoid an infinite loop
                    }
                    match = separatorCopy.exec(string);
                }
                if (lastLastIndex === string.length) {
                    if (lastLength || !separatorCopy.test('')) {
                        pushCall(output, '');
                    }
                } else {
                    pushCall(output, strSlice(string, lastLastIndex));
                }
                return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
            };
        }());

    // [bugfix, chrome]
    // If separator is undefined, then the result array contains just one String,
    // which is the this value (converted to a String). If limit is not undefined,
    // then the output array is truncated so that it contains no more than limit
    // elements.
    // "0".split(undefined, 0) -> []
    } else if ('0'.split(void 0, 0).length) {
        StringPrototype.split = function split(separator, limit) {
            if (typeof separator === 'undefined' && limit === 0) {
                return [];
            }
            return strSplit(this, separator, limit);
        };
    }

    var str_replace = StringPrototype.replace;
    var replaceReportsGroupsCorrectly = (function () {
        var groups = [];
        'x'.replace(/x(.)?/g, function (match, group) {
            pushCall(groups, group);
        });
        return groups.length === 1 && typeof groups[0] === 'undefined';
    }());

    if (!replaceReportsGroupsCorrectly) {
        StringPrototype.replace = function replace(searchValue, replaceValue) {
            var isFn = isCallable(replaceValue);
            var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
            if (!isFn || !hasCapturingGroups) {
                return str_replace.call(this, searchValue, replaceValue);
            } else {
                var wrappedReplaceValue = function (match) {
                    var length = arguments.length;
                    var originalLastIndex = searchValue.lastIndex;
                    searchValue.lastIndex = 0;
                    var args = searchValue.exec(match) || [];
                    searchValue.lastIndex = originalLastIndex;
                    pushCall(args, arguments[length - 2], arguments[length - 1]);
                    return replaceValue.apply(this, args);
                };
                return str_replace.call(this, searchValue, wrappedReplaceValue);
            }
        };
    }

    // ECMA-262, 3rd B.2.3
    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
    // non-normative section suggesting uniform semantics and it should be
    // normalized across all browsers
    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
    var string_substr = StringPrototype.substr;
    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
    defineProperties(StringPrototype, {
        substr: function substr(start, length) {
            var normalizedStart = start;
            if (start < 0) {
                normalizedStart = max(this.length + start, 0);
            }
            return string_substr.call(this, normalizedStart, length);
        }
    }, hasNegativeSubstrBug);

    // ES5 15.5.4.20
    // whitespace from: http://es5.github.io/#x15.5.4.20
    var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
        '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
        '\u2029\uFEFF';
    var zeroWidth = '\u200b';
    var wsRegexChars = '[' + ws + ']';
    var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
    var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
    var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
    defineProperties(StringPrototype, {
        // http://blog.stevenlevithan.com/archives/faster-trim-javascript
        // http://perfectionkills.com/whitespace-deviations/
        trim: function trim() {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
        }
    }, hasTrimWhitespaceBug);
    var trim = call.bind(String.prototype.trim);

    var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            var S = $String(this);
            var searchStr = $String(searchString);
            var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
            var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
            var start = min(max(pos, 0), S.length);
            var searchLen = searchStr.length;
            var k = start + searchLen;
            while (k > 0) {
                k = max(0, k - searchLen);
                var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
                if (index !== -1) {
                    return k + index;
                }
            }
            return -1;
        }
    }, hasLastIndexBug);

    var originalLastIndexOf = StringPrototype.lastIndexOf;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            return originalLastIndexOf.apply(this, arguments);
        }
    }, StringPrototype.lastIndexOf.length !== 1);

    // ES-5 15.1.2.2
    /* eslint-disable radix */
    if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    /* eslint-enable radix */
        /* global parseInt: true */
        parseInt = (function (origParseInt) {
            var hexRegex = /^[\-+]?0[xX]/;
            return function parseInt(str, radix) {
                var string = trim(String(str));
                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
                return origParseInt(string, defaultedRadix);
            };
        }(parseInt));
    }

    // https://es5.github.io/#x15.1.2.3
    if (1 / parseFloat('-0') !== -Infinity) {
        /* global parseFloat: true */
        parseFloat = (function (origParseFloat) {
            return function parseFloat(string) {
                var inputString = trim(String(string));
                var result = origParseFloat(inputString);
                return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
            };
        }(parseFloat));
    }

    if (String(new RangeError('test')) !== 'RangeError: test') {
        var errorToStringShim = function toString() {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            var name = this.name;
            if (typeof name === 'undefined') {
                name = 'Error';
            } else if (typeof name !== 'string') {
                name = $String(name);
            }
            var msg = this.message;
            if (typeof msg === 'undefined') {
                msg = '';
            } else if (typeof msg !== 'string') {
                msg = $String(msg);
            }
            if (!name) {
                return msg;
            }
            if (!msg) {
                return name;
            }
            return name + ': ' + msg;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        Error.prototype.toString = errorToStringShim;
    }

    if (supportsDescriptors) {
        var ensureNonEnumerable = function (obj, prop) {
            if (isEnum(obj, prop)) {
                var desc = Object.getOwnPropertyDescriptor(obj, prop);
                if (desc.configurable) {
                    desc.enumerable = false;
                    Object.defineProperty(obj, prop, desc);
                }
            }
        };
        ensureNonEnumerable(Error.prototype, 'message');
        if (Error.prototype.message !== '') {
            Error.prototype.message = '';
        }
        ensureNonEnumerable(Error.prototype, 'name');
    }

    if (String(/a/mig) !== '/a/gim') {
        var regexToString = function toString() {
            var str = '/' + this.source + '/';
            if (this.global) {
                str += 'g';
            }
            if (this.ignoreCase) {
                str += 'i';
            }
            if (this.multiline) {
                str += 'm';
            }
            return str;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        RegExp.prototype.toString = regexToString;
    }
}));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"screen-cover":"screen-cover","rebeccapurple":"rebeccapurple","black":"black","cover-app-loading":"cover-app-loading","cover-request-loading":"cover-request-loading","info":"info","animation":"animation","text":"text","nprogress":"nprogress","bar":"bar","peg":"peg","spinner":"spinner","header":"header","navbar-inner":"navbar-inner","brand":"brand","page-container":"page-container","page-content":"page-content","page-sidebar":"page-sidebar","btn-navbar":"btn-navbar","pc":"pc","page-content-area":"page-content-area","page-sidebar-closed":"page-sidebar-closed","breadcrumb":"breadcrumb","eb-richform":"eb-richform","span12":"span12","span6":"span6","btn-group":"btn-group","window-modal-lookup":"window-modal-lookup","window-modal":"window-modal","eb-panel-title":"eb-panel-title","sub-menu":"sub-menu","arrow":"arrow","open":"open","page-sidebar-menu":"page-sidebar-menu","fa":"fa","title":"title","form-control":"form-control","btn":"btn","datetimepicker":"datetimepicker","eb-panel":"eb-panel","caption":"caption","addons":"addons","eb-panel-body":"eb-panel-body","blue":"blue","purple":"purple","light":"light","eb-richipt":"eb-richipt","controls":"controls","eb-richipt-select":"eb-richipt-select","multiselect":"multiselect","eb-richipt-multiselect":"eb-richipt-multiselect","caret":"caret","eb-richipt-textarea":"eb-richipt-textarea","eb-richbtn":"eb-richbtn","green":"green","red":"red","eb-button-group":"eb-button-group","left":"left","right":"right","fixed-table-loading":"fixed-table-loading","eb-datagrid":"eb-datagrid","action-link":"action-link","modal-backdrop":"modal-backdrop","window-modal-alert":"window-modal-alert","window-modal-confirm":"window-modal-confirm","homepage-control-panel-toggler":"homepage-control-panel-toggler","homepage-control-panel":"homepage-control-panel","homepage-control-panel-closer":"homepage-control-panel-closer","options":"options","fixed":"fixed","option":"option","custom":"custom","icon":"icon","arrow-block":"arrow-block","btn-up":"btn-up","btn-down":"btn-down","disabled":"disabled","homepage":"homepage","row":"row","widget":"widget","INFO_BANNER":"INFO_BANNER","userinfo":"userinfo","portrait":"portrait","logininfo":"logininfo","msglinks":"msglinks","STATISTIC_BOARD":"STATISTIC_BOARD","span3":"span3","first":"first","card":"card","detail":"detail","number":"number","desc":"desc","SHORT_CUTS":"SHORT_CUTS","short-cut-btn":"short-cut-btn","add-btn":"add-btn","fixed-widget":"fixed-widget","custom-widget":"custom-widget","homepage-chart":"homepage-chart","fixed-table-pagination":"fixed-table-pagination"};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _artTemplate = __webpack_require__(28);

var _artTemplate2 = _interopRequireDefault(_artTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var tplengine = {
    parse: function parse(tplName, data) {

        return (0, _artTemplate2['default'])('art-' + tplName, data);
    }
};

module.exports = tplengine;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 客户端
 * @param options
 * @returns {Client}
 * @constructor
 */
var Client = function Client(options) {
    if (!(this instanceof Client)) {
        return new Client(options);
    } else {
        var opts = options || {};
        this.requestHeader = opts.requestHeader || false;
        this.requestParam = opts.requestParam || false;
        this.requestData = opts.requestData || false;

        this.url = opts.url || eb.app.config.DEFAULT_URL;
        this.method = opts.method || eb.app.config.DEFAULT_METHOD;
        this.async = opts.async || true;

        // 回调相关
        // 请求校验
        this.onValidation = opts.onValidation || function () {
            return true;
        };
        // 请求前
        this.onSending = opts.onSending || function () {};
        // 成功
        this.onSuccess = opts.onSuccess || function (response) {
            eb.log.info(JSON.stringify(response));
        };
        // 失败
        this.onFail = opts.onFail || function (response) {
            eb.log.error(JSON.stringify(response));
        };
        // 请求后
        this.onComplete = opts.onComplete || function () {};
        // 事件订阅器
        this.eventId = opts.eventId || 'none';
        this.proxyEvent = opts.proxyEvent || false;

        // 响应适配器：用于适配异形 REST 接口
        // 默认实现是认为REST接口是可靠的标准数据结构，而仅仅将HTML类型响应转换成标准响应数据结构
        this.responseAdapter = opts.responseAdapter || function (responseText, status, statusText) {
            var flag = status === 200 ? 0 : status;
            if (responseText.match(/^\{[\w\W]*\}$/m)) {
                try {
                    var resultObj = JSON.parse(responseText);

                    // 适配 SCF 响应数据结构
                    if (typeof resultObj.result !== 'undefined') {
                        return {
                            flag: resultObj.result,
                            data: resultObj.resultData,
                            msg: resultObj.resultNote,
                            err: resultObj.resultErrorMap
                        };
                    }

                    return resultObj;
                } catch (e) {
                    return {
                        flag: flag === 0 ? -1 : flag,
                        data: responseText,
                        msg: statusText
                    };
                }
            } else {
                return {
                    flag: flag,
                    data: responseText,
                    msg: statusText
                };
            }
        };

        this.before = function (func) {
            this.onSending = func;
            return this;
        };

        this.ifSuccess = function (func) {
            this.onSuccess = func;
            return this;
        };

        this.ifFail = function (func) {
            this.onFail = func;
            return this;
        };

        this.after = function (func) {
            this.onComplete = func;
            return this;
        };

        /**
         * 设置请求地址
         * @param url
         * @returns {Client}
         */
        this.setUrl = function (url) {
            this.url = url;
            return this;
        };

        /**
         * 请求方法：下载
         * @returns {Client}
         */
        this.download = function () {
            try {
                var elem = document.createElement("iframe");
                elem.src = this.url;
                elem.style.display = "none";
                document.body.appendChild(elem);
            } catch (e) {
                this.onFail({
                    flag: -1,
                    data: e,
                    msg: 'Cannot create download iframe for "' + this.url + '"!'
                });
            } finally {
                return this;
            }
        };

        /**
         * 请求方法：发送REST请求
         * @returns {Client}
         */
        this.send = function () {
            // 校验
            if (!this.onValidation(this)) return;

            // 请求发送前操作
            this.onSending();

            var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            xmlhttp.client = this;

            if (xmlhttp != null) {
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4) {
                        var response = this.client.responseAdapter(xmlhttp.responseText, xmlhttp.status, xmlhttp.statusText);

                        eb.log.debug("Message Received: " + JSON.stringify(response));

                        if (!response.flag) {
                            this.client.onSuccess(response);

                            /*if (this.client.eventProxy)
                            {
                                this.client.eventProxy.emit(this.client.eventId, response);
                            }*/
                        } else {
                            this.client.onFail(response);
                        }

                        this.client.onComplete();

                        //historyMeta.endTime = new Date();
                        //this.client.history.push(historyMeta);
                    }
                };

                xmlhttp.open(this.method, this.requestParam ? function (url, params) {
                    var paramArr = [];
                    for (var key in params) {
                        paramArr.push(key + '=' + params[key]);
                    }
                    return url + (url.indexOf('?') > 0 ? '&' : '?') + paramArr.join('&');
                }(this.url, this.requestParam) : this.url, this.async);

                // 设置header
                xmlhttp.setRequestHeader("Content-Type", "application/json");
                if (this.requestHeader) {
                    for (var key in this.requestHeader) {
                        xmlhttp.setRequestHeader(key, this.requestHeader[key]);
                    }
                }

                // 发送前重绑撤销方法
                this.abort = function () {
                    xmlhttp.abort();
                    return this;
                };

                xmlhttp.send(this.requestData ? JSON.stringify(this.requestData) : "{}");
                eb.log.debug('Request Sent: ' + this.url + " (" + 'Data: ' + JSON.stringify(this.requestData) + ")");
            } else {
                // This will never happen!
                eb.log.error('Your browser does not support XMLHttp!');
            }

            return this;
        };

        this.abort = function () {
            return this;
        };
    }
};

module.exports = Client;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

/**
 * 事件订阅器
 * @param options
 *        {
 *          events: []
 *          callback: function(triggeredEvents)
 *        }
 * @returns {EventProxy}
 * @constructor
 */
var EventProxy = function EventProxy(options) {
    if (!(this instanceof EventProxy)) {
        return new EventProxy(options);
    } else {
        this.events = options.events || [];
        this.callback = options.callback || function (triggeredEvents) {};
        this.triggeredEvents = {
            count: 0,
            finished: false
        };

        this.emit = function (eventName, data) {
            if (!this.events.contains(eventName)) {
                eb.log.error("Event proxy can't handle '" + eventName + "'! ");
                return;
            }

            if (!this.triggeredEvents[eventName]) {
                this.triggeredEvents.count++;
            }
            this.triggeredEvents[eventName] = data;

            if (this.triggeredEvents.count === this.events.length && !this.triggeredEvents.finished) {
                this.callback(this.triggeredEvents);
                this.triggeredEvents.finished = true;
            }
        };
    }
};

module.exports = EventProxy;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    LOG_LEVEL: 'DEBUG',

    MUTI_VAL_SEP: ';',

    APP_NAME: 'Enbrau Studio'

};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        target.find('input').iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal',
            increaseArea: '20%'
        });
    }

};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        target.find('.eb-richbtn-lookup').attr('data-toggle', 'tooltip');
        target.find('.eb-richbtn-lookup').attr('data-placement', 'right');

        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: false
        });

        target.find('input').keyup(function () {
            eb.component.RichInput.call(target, 'triggerValidation', {
                showResult: true
            });
        });

        if (target.attr('data-editable') === 'true') {
            target.find('input').removeAttr('disabled');
        }

        eb.component.RichInput.initStatus(target);
    },

    setValidationResult: function setValidationResult(target, options) {
        var result = options.result || 'passed';

        target.attr('data-validation', result === 'passed' ? 'true' : 'false');

        target.find(".eb-richbtn-lookup").attr('title', result === 'passed' ? '' : result);
        target.find(".eb-richbtn-lookup").attr('data-original-title', result === 'passed' ? '' : result);
    },

    showValidationResult: function showValidationResult(target, options) {
        target.find(".eb-richbtn-lookup").tooltip("show");
    },

    hideValidationResult: function hideValidationResult(target, options) {
        target.find(".eb-richbtn-lookup").tooltip("hide");
    },

    getValue: function getValue(target, options) {
        return target.find('input').val();
    },

    setValue: function setValue(target, options) {
        var value = typeof options === 'string' ? options : options.value;
        target.find('input').val(value);
        target.find('input').keyup();

        eb.component.RichInput.call(target, 'triggerValidation');
    },

    show: function show(target, options) {
        // TODO
    },

    hide: function hide(target, options) {
        // TODO
    },

    lock: function lock(target, options) {
        var opts = $.extend({}, options, { editable: target.attr('data-editable') === 'true' });

        if (opts.temp) {
            if (!opts.editable) target.find('input').attr('disabled', 'disabled');
            if (target.attr('data-readonly') === 'true') target.find('.eb-richbtn-lookup').attr('disabled', 'disabled');
        } else {
            target.attr('data-readonly', 'true');
            target.find('input').attr('disabled', 'disabled');
            target.find('.eb-richbtn-lookup').attr('disabled', 'disabled');
        }
    },

    unlock: function unlock(target, options) {
        var opts = $.extend({}, options, { editable: target.attr('data-editable') === 'true' });

        if (!opts.temp) {
            target.removeAttr('data-readonly');
        }
        if (opts.temp || opts.editable) target.find('input').removeAttr('disabled');
        target.find('.eb-richbtn-lookup').removeAttr('disabled');
    },

    onChange: function onChange(target, callback) {
        target.find('input').keyup(function (e) {
            eb.component.RichInput.call(target, 'triggerValidation', {
                showResult: true
            });

            var value = eb.component.RichInput.call(target, 'getValue');

            callback(value);
        });
    },

    bindLookupReqDataCollector: function bindLookupReqDataCollector(target, callback) {
        target.find('.eb-richbtn-lookup').data('reqDataCollector', callback);
    }

};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        target.find('select').multiselect({
            enableFiltering: false,
            nonSelectedText: '请选择',
            onChange: function onChange(event) {
                eb.component.RichInput.call(target, 'triggerValidation', {
                    showResult: true
                });
            }
        });

        target.find(".btn-group").attr('data-toggle', 'tooltip');
        target.find(".btn-group").attr('data-placement', 'right');

        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: false
        });
    },

    setValidationResult: function setValidationResult(target, options) {
        var result = options.result || 'passed';

        target.attr('data-validation', result === 'passed' ? 'true' : 'false');

        target.find(".btn-group").attr('title', result === 'passed' ? '' : result);
        target.find(".btn-group").attr('data-original-title', result === 'passed' ? '' : result);
    },

    showValidationResult: function showValidationResult(target, options) {
        target.find(".btn-group").tooltip("show");
    },

    hideValidationResult: function hideValidationResult(target, options) {
        target.find(".btn-group").tooltip("hide");
    },

    setValue: function setValue(target, options) {
        var value = options.value || "";

        target.find('select').val(value.split(eb.settings.MUTI_VAL_SEP));
        target.find('select').multiselect('refresh');

        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: true
        });

        var onChange = target.data('onChange') || function () {};
        value = eb.component.RichInput.call(target, 'getValue');
        onChange(value);
    },

    getValue: function getValue(target, options) {
        var value = target.find('select').val();
        return value ? value.join(eb.settings.MUTI_VAL_SEP) : "";
    },

    show: function show(target, options) {
        eb.component.RichInput.showWithWrapper(target);
        target.attr('data-validation', 'undetermined');

        eb.component.RichInput.call(target, 'triggerValidation');
    },

    hide: function hide(target, options) {
        target.attr('data-validation', 'passed');
        eb.component.RichInput.hideWithWrapper(target);
    },

    lock: function lock(target, options) {
        target.attr('data-readonly', 'true');
        target.find('select').multiselect('disable');
    },

    unlock: function unlock(target, options) {
        var opts = options || {};
        if (!opts.temp) target.removeAttr('data-readonly');
        target.find('select').multiselect('enable');
    },

    setOptions: function setOptions(target, options) {
        var values = eb.component.RichInput.call(target, 'getValue').split(";");
        var dataProvider = [];
        var opts = options.dict || [];

        if ($.isArray(opts)) {
            for (var i = 0; i < opts.length; i++) {
                var item = {};
                item.value = opts[i].key;
                item.title = opts[i].value;
                item.label = opts[i].value;

                for (var j = 0; j < values.length; j++) {
                    if (item.value == values[i]) {
                        item.selected = true;
                    }
                }

                dataProvider.push(item);
            }
        } else {
            for (var key in opts) {
                var newItem = {};
                newItem.label = opts[key];
                newItem.value = key;

                for (var j = 0; j < values.length; j++) {
                    if (key == values[i]) {
                        newItem.selected = true;
                    }
                }
                dataProvider.push(newItem);
            }
        }

        target.find("select").multiselect('dataprovider', dataProvider);
    },

    onChange: function onChange(target, callback) {
        target.find('select').multiselect('setOptions', {
            onChange: function onChange(event) {
                eb.component.RichInput.call(target, 'triggerValidation', {
                    showResult: true
                });

                var value = eb.component.RichInput.call(target, 'getValue');

                callback(value);
            }
        });
    }

};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        target.find('.fa').click(function (e) {
            if ($(this).hasClass('fa-eye')) {
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash ');
                $(this).siblings('input').attr('type', 'text');
            } else {
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
                $(this).siblings('input').attr('type', 'password');
            }
        });

        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: false
        });

        target.find('input').keyup(function () {
            eb.component.RichInput.call(target, 'triggerValidation', {
                showResult: true
            });
        });
    },

    setValidationResult: function setValidationResult(target, options) {
        var result = options.result || 'passed';

        target.attr('data-validation', result === 'passed' ? 'true' : 'false');

        target.find("input").attr('title', result === 'passed' ? '' : result);
        target.find("input").attr('data-original-title', result === 'passed' ? '' : result);
    },

    showValidationResult: function showValidationResult(target, options) {
        target.find("input").tooltip("show");
    },

    hideValidationResult: function hideValidationResult(target, options) {
        target.find("input").tooltip("hide");
    },

    getValue: function getValue(target, options) {
        return target.find('input').val();
    },

    setValue: function setValue(target, options) {
        var value = typeof options === 'string' ? options : options.value;
        target.find('input').val(value);

        eb.component.RichInput.call(target, 'triggerValidation');
    },

    show: function show(target, options) {
        // TODO
    },

    hide: function hide(target, options) {
        // TODO
    },

    lock: function lock(target, options) {
        target.attr('data-readonly', 'true');
        target.find('input').attr('disabled', 'disabled');
    },

    unlock: function unlock(target, options) {
        var opts = options || {};
        if (!opts.temp) target.removeAttr('data-readonly');
        target.find('input').removeAttr('disabled');
    },

    onChange: function onChange(target, callback) {
        target.find('input').keyup(function (e) {
            eb.component.RichInput.call(target, 'triggerValidation', {
                showResult: true
            });

            var value = eb.component.RichInput.call(target, 'getValue');

            callback(value);
        });
    }

};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        target.find('input').iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal',
            increaseArea: '20%' // optional
        });
    }

};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        target.find('select').multiselect({
            enableFiltering: false,
            nonSelectedText: '请选择',
            onChange: function onChange(event) {
                eb.component.RichInput.call(target, 'triggerValidation', {
                    showResult: true
                });
            }
        });

        target.find(".btn-group").attr('data-toggle', 'tooltip');
        target.find(".btn-group").attr('data-placement', 'right');

        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: false
        });

        if (target.attr('data-readonly') === 'true') target.find('select').multiselect('disable');
    },

    setValidationResult: function setValidationResult(target, options) {
        var result = options.result || 'passed';

        target.attr('data-validation', result === 'passed' ? 'true' : 'false');

        target.find(".btn-group").attr('title', result === 'passed' ? '' : result);
        target.find(".btn-group").attr('data-original-title', result === 'passed' ? '' : result);
    },

    showValidationResult: function showValidationResult(target, options) {
        target.find(".btn-group").tooltip("show");
    },

    hideValidationResult: function hideValidationResult(target, options) {
        target.find(".btn-group").tooltip("hide");
    },

    setValue: function setValue(target, options) {
        target.find('select').val(options.value);
        target.find('select').multiselect('refresh');

        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: true
        });

        var onChange = target.data('onChange') || function () {};
        var value = eb.component.RichInput.call(target, 'getValue');
        onChange(value);
    },

    getValue: function getValue(target, options) {
        return target.find('select').val();
    },

    show: function show(target, options) {
        eb.component.RichInput.showWithWrapper(target);
        target.attr('data-validation', 'undetermined');

        eb.component.RichInput.call(target, 'triggerValidation');
    },

    hide: function hide(target, options) {
        target.attr('data-validation', 'passed');
        eb.component.RichInput.hideWithWrapper(target);
    },

    lock: function lock(target, options) {
        var opts = options || {};
        target.attr('data-readonly', 'true');
        target.find('select').multiselect('disable');
    },

    unlock: function unlock(target, options) {
        var opts = options || {};
        if (!opts.temp) target.removeAttr('data-readonly');
        target.find('select').multiselect('enable');
    },

    setOptions: function setOptions(target, options) {
        var value = eb.component.RichInput.call(target, 'getValue');
        var dataProvider = [];
        var opts = options.dict || [];

        if ($.isArray(opts)) {
            for (var i = 0; i < opts.length; i++) {
                var item = {};
                item.value = opts[i].key;
                item.title = opts[i].value;
                item.label = opts[i].value;

                if (item.value == value) {
                    item.selected = true;
                }

                dataProvider.push(item);
            }
        } else {
            for (var key in opts) {
                var newItem = {};
                newItem.label = opts[key];
                newItem.value = key;

                if (newItem.value == value) {
                    newItem.selected = true;
                }

                dataProvider.push(newItem);
            }
        }

        target.find("select").multiselect('dataprovider', dataProvider);
    },

    onChange: function onChange(target, callback) {
        target.data('onChange', callback);

        target.find('select').multiselect('setOptions', {
            onChange: function onChange(event) {
                eb.component.RichInput.call(target, 'triggerValidation', {
                    showResult: true
                });

                var value = eb.component.RichInput.call(target, 'getValue');

                callback(value);
            }
        });
    }

};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: false
        });

        target.find('input').keyup(function () {
            eb.component.RichInput.call(target, 'triggerValidation', {
                showResult: true
            });
        });

        eb.component.RichInput.initStatus(target);
    },

    setValidationResult: function setValidationResult(target, options) {
        var result = options.result || 'passed';

        target.attr('data-validation', result === 'passed' ? 'true' : 'false');

        target.find("input").attr('title', result === 'passed' ? '' : result);
        target.find("input").attr('data-original-title', result === 'passed' ? '' : result);
    },

    showValidationResult: function showValidationResult(target, options) {
        target.find("input").tooltip("show");
    },

    hideValidationResult: function hideValidationResult(target, options) {
        target.find("input").tooltip("hide");
    },

    getValue: function getValue(target, options) {
        return target.find('input').val();
    },

    setValue: function setValue(target, options) {
        var value = typeof options === 'string' ? options : options.value;
        target.find('input').val(value);
        target.find('input').keyup();

        eb.component.RichInput.call(target, 'triggerValidation');
    },

    show: function show(target, options) {
        eb.component.RichInput.showWithWrapper(target);
        target.attr('data-validation', 'undetermined');

        eb.component.RichInput.call(target, 'triggerValidation');
    },

    hide: function hide(target, options) {
        target.attr('data-validation', 'passed');
        eb.component.RichInput.hideWithWrapper(target);
    },

    lock: function lock(target, options) {
        target.attr('data-readonly', 'true');
        target.find('input').attr('disabled', 'disabled');
    },

    unlock: function unlock(target, options) {
        var opts = options || {};
        if (!opts.temp) target.removeAttr('data-readonly');
        target.find('input').removeAttr('disabled');
    },

    /*setValidationRule: function (target, options) {
        var opts = options || {};
         if (typeof(options.required)==='boolean')
        {
            target.attr('data-required', options.required);
         }
         if (typeof(options.requires))
         eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: true
        });
    },*/

    onChange: function onChange(target, callback) {
        target.find('input').keyup(function (e) {
            eb.component.RichInput.call(target, 'triggerValidation', {
                showResult: true
            });

            var value = eb.component.RichInput.call(target, 'getValue');

            callback(value);
        });
    }

};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {}

};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = (_module$exports = {

    init: function init(target, options) {
        var subType = target.attr('data-eb-subtype');

        var format = 'yyyy-mm-dd hh:ii:ss',
            minView = 'hour',
            maxView = 'year',
            startView = 'month';

        if (subType === 'date') {
            format = 'yyyy-mm-dd';
            minView = 'year';
        }

        if (subType === 'time') {
            format = 'hh:ii:ss';
            maxView = 'hour';
            minView = 'hour';
            startView = 'day';
        }

        target.find('input').attr('data-date-format', format);

        target.find('input').datetimepicker({
            language: 'zh-CN',
            startView: startView,
            minView: minView,
            maxView: maxView,
            autoclose: true,
            todayBtn: 1,
            keyboardNavigation: true
        }).on('hide', function (e) {
            eb.component.RichInput.call(target, 'triggerValidation', {
                showResult: false
            });
        });

        target.find('.fa-calendar').click(function () {
            if (target.attr('data-readonly') !== 'true') {
                target.find('input').datetimepicker('show');
            }
        });

        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: false
        });

        eb.component.RichInput.initStatus(target, 'lock');
    },

    setValidationResult: function setValidationResult(target, options) {
        var result = options.result || 'passed';

        target.attr('data-validation', result === 'passed' ? 'true' : 'false');

        target.find("input").attr('title', result === 'passed' ? '' : result);
        target.find("input").attr('data-original-title', result === 'passed' ? '' : result);
    },

    showValidationResult: function showValidationResult(target, options) {
        target.find("input").tooltip("show");
    },

    hideValidationResult: function hideValidationResult(target, options) {
        target.find("input").tooltip("hide");
    },

    getValue: function getValue(target, options) {
        return target.find('input').val();
    },

    setValue: function setValue(target, options) {
        var value = typeof options === 'string' ? options : options.value;
        target.find('input').val(value);

        eb.component.RichInput.call(target, 'triggerValidation');
    },

    lock: function lock(target, options) {
        target.attr('data-readonly', 'true');
        target.find('input').attr('disabled', 'disabled');
    },

    unlock: function unlock(target, options) {
        var opts = options || {};
        if (!opts.temp) target.removeAttr('data-readonly');
        target.find('input').removeAttr('disabled');
    },

    show: function show(target, options) {
        // TODO
    },

    hide: function hide(target, options) {
        // TODO
    }

}, _defineProperty(_module$exports, 'lock', function lock(target, options) {
    target.attr('data-readonly', 'true');
    target.find('input').attr('disabled', 'disabled');
}), _defineProperty(_module$exports, 'unlock', function unlock(target, options) {
    if (!options.temp) target.attr('data-readonly', 'true');
    target.find('input').removeAttr('disabled');
}), _defineProperty(_module$exports, 'onChange', function onChange(target, callback) {
    target.find('input').keyup(function (e) {
        eb.component.RichInput.call(target, 'triggerValidation', {
            showResult: true
        });

        var value = eb.component.RichInput.call(target, 'getValue');

        callback(value);
    });
}), _module$exports);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    init: function init(target, options) {
        var opts = $.extend({}, options);
        opts.sourceUrl = target.attr('data-source-url') || options.sourceUrl || null;
        opts.selectStrategy = target.attr('data-select-strategy') || options.selectStrategy || 'multi';
        opts.keyField = target.attr('data-key-field') || options.keyField;
        opts.valueField = target.attr('data-value-field') || options.valueField;
        opts.idField = target.attr('data-id-field') || options.idField;
        opts.pidField = target.attr('data-pid-field') || options.pidField;
        opts.childrenField = target.attr('data-children-field') || options.childrenField;
        opts.valueScope = target.attr('data-value-scope') || options.valueScope || 'all';

        eb.component.saveOptions(target, opts);

        var targetId = target.attr('id');
        var treeData = options.treeData || null;

        /*const parseTreeNodes = function (treeDataRaw, value) {
            let result = [];
            let keyField      = opts.keyField;
            let valueField    = opts.valueField;
            let childrenField = opts.childrenField;
              const getNewNode = function (nodeRaw) {
                let node = {
                    text: nodeRaw[valueField]
                };
                  if (nodeRaw[childrenField])
                {
                    let childrenNodes = nodeRaw[childrenField];
                      node.nodes = [];
                    for (let i=0; i<childrenNodes.length; i++)
                    {
                        node.nodes.push(getNewNode(childrenNodes[i]));
                    }
                }
                  return node;
            };
              for (let i=0; i<treeDataRaw.length; i++)
            {
                let node = getNewNode(treeDataRaw[i]);
                result.push(node);
            }
              return result;
        };*/

        var initTreeView = function initTreeView(treeDataRaw) {
            //let treeData = parseTreeNodes(treeDataRaw);

            var keyField = opts.keyField;
            var valueField = opts.valueField;
            var idField = opts.idField;
            var pidField = opts.pidField;
            var childrenField = opts.childrenField;
            var selectStrategy = opts.selectStrategy;
            var valueScope = opts.valueScope;

            var settings = {
                data: {
                    key: {
                        title: valueField,
                        checked: "ztreeItemSelected",
                        name: valueField,
                        children: childrenField
                    },
                    simpleData: {
                        enable: true,
                        idKey: idField,
                        pIdKey: pidField
                        //rootPId: null
                    }
                },
                check: {
                    enable: true,
                    chkStyle: selectStrategy == "single" ? "radio" : "checkbox",
                    radioType: "all",
                    chkboxType: { "Y": "ps", "N": "ps" }
                },
                callback: {
                    beforeClick: function beforeClick() {},
                    onClick: function onClick(event, treeId, treeNode, clickFlag) {
                        // target.find("#" + target.attr("id") + "-value-input").val(treeNode[target.attr("data-valueField")]);
                        event.stopPropagation();
                        return false;
                    },
                    onCheck: function onCheck(event, treeId, treeNode) {
                        event.stopPropagation();

                        var ztreeObj = $.fn.zTree.getZTreeObj(targetId + '-treeview');

                        var nodes = ztreeObj.getNodesByFilter(function (node) {

                            switch (valueScope) {
                                case "children":
                                    if (node.ztreeItemSelected && !node.isParent) return true;
                                    break;
                                case "all":
                                    if (node.ztreeItemSelected) return true;
                                    break;
                            }

                            return false;
                        }, false);

                        var treeValues = [];
                        //var treeLabels = [];
                        for (var i = 0; i < nodes.length; i++) {
                            var node = nodes[i];
                            treeValues.push(node[keyField]);
                            //treeLabels.push(node[valueField]);
                        }

                        $('#' + targetId + '-value-input').val(treeValues.join(eb.settings.MUTI_VAL_SEP));

                        //target.find("#" + target.attr("id") + "-value-input").val(treeValues.join(eb.settings.MUTI_VAL_SEP));
                        //target.find("button").html((treeLabels.length==1 ? treeLabels.join(eb.settings.MUTI_VAL_SEP) : "选中了 " + treeLabels.length + " 项") + "<span class=\"icon\"></span>");
                        //target.find("button").attr("title", treeLabels.join(eb.settings.MUTI_VAL_SEP));

                        //if (!options.skipInitialValidation && options.validator) options.validator.exec(true);
                    }
                }
            };

            var ztreeObj = $.fn.zTree.init($('#' + targetId + '-treeview'), settings, treeDataRaw);

            if ($('#' + targetId + '-value-input').val()) {
                var values = $('#' + targetId + '-value-input').val().split(eb.settings.MUTI_VAL_SEP);
                for (var i = 0; i < values.length; i++) {
                    var nodeToSelect = ztreeObj.getNodeByParam(keyField, values[i]);
                    ztreeObj.checkNode(nodeToSelect, true, false);
                }
            }
        };

        if (opts.sourceUrl) {
            new eb.Client({
                url: eb.settings.SERVER_CONTEXT_PATH + opts.sourceUrl,
                requestData: opts.requestData
            }).ifSuccess(function (response) {
                initTreeView(response.data);
            }).send();
        } else {
            initTreeView(opts.treeData);
        }
    },

    setValue: function setValue(target, options) {}

};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CounterUp = function CounterUp(options) {

    this.DEFAULTS = {
        duration: 3000, // duration in seconds
        prepend: '', // string to prepend to the value
        append: '', // string to apend to the value
        selector: '.countup', // selector used to find elements on wich applycountUp
        start: 0, // default start
        end: 100, // default end
        intvalues: true, // should we display integer values only
        interval: 100 // default counting interval
    };

    var self = this;

    this.upating = false;
    this.intervalID = null;
    this.props = {};
    for (var pna in this.DEFAULTS) {
        if (typeof pna !== 'undefined') {
            self.props[pna] = self.DEFAULTS[pna];
            if (options.hasOwnProperty(pna) && self.props.hasOwnProperty(pna)) self.props[pna] = options[pna];
        }
    }

    this.domelems = document.querySelectorAll(this.props.selector);
    this.elems = [];

    var cur = {};

    this.domelems.forEach(function (el) {
        cur.obj = el;

        var start = parseInt(el.getAttribute('cup-start'));
        isNaN(start) ? cur.start = self.props.start : cur.start = start;

        var end = parseInt(el.getAttribute('cup-end'));
        isNaN(end) ? cur.end = self.props.end : cur.end = end;

        var dur = parseInt(el.getAttribute('cup-duration'));
        isNaN(dur) ? cur.duration = self.props.duration : cur.duration = dur;

        var prep = el.getAttribute('cup-prepend');
        prep == null ? cur.prepend = self.props.prepend : cur.prepend = prep;

        var app = el.getAttribute('cup-append');
        app == null ? cur.append = self.props.append : cur.append = app;

        var intval = el.getAttribute('cup-intval');
        intval == null ? cur.intvalues = self.props.intvalues : cur.intvalues = intval;

        //step to increments at every tic
        cur.step = (cur.end - cur.start) / (cur.duration / self.props.interval);
        cur.val = cur.start;

        self.elems.push(cur);
        cur = {};
    });

    this.start = function () {
        "use strict";

        var self = this;
        this.intervalID = setInterval(function () {
            if (!self.updating) self.update();
        }, self.props.interval);
    };

    this.update = function () {
        "use strict";

        this.updating = true;
        var alldone = true;
        var self = this;
        this.elems.forEach(function (el) {
            el.val += el.step;
            if (el.val < el.end) {

                if (el.intvalues == true) el.obj.innerHTML = el.prepend + Math.floor(el.val).toString() + el.append;else el.obj.innerHTML = el.prepend + (Math.round(el.val * 100) / 100).toString() + el.append;

                alldone = false;
            } else {
                el.obj.innerHTML = el.prepend + el.end.toString() + el.append;
            }
        });

        if (alldone == true) clearInterval(this.intervalID);
        this.updating = false;
    };
};

module.exports = CounterUp;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DataGrid = {

    lib: {},

    DEFAULTS: {},

    call: function call(target, param1, param2) {
        var method = void 0,
            methodName = void 0,
            options = void 0,
            implType = target.attr('data-use') || 'bootstrap-table';

        if (typeof param1 === 'string') {
            methodName = param1;
            options = param2 || {};
        } else {
            methodName = 'init';
            options = param1 || {};
        }

        method = (eb.component.DataGrid.lib[implType] ? eb.component.DataGrid.lib[implType][methodName] : null) || eb.component.DataGrid[methodName];

        if (method) {
            return method(target, options);
        }

        eb.log.error('DataGrid cannot found method \'' + methodName + '\' for ' + target.id + '!');
    },

    init: function init(target, options) {
        options = options || {};

        // 分页策略：none、pseudo、real
        var pageStrategy = options.pageStrategy || target.attr("data-page-strategy") || 'real';

        // 选择策略：none、single、multi
        var selectStrategy = options.selectStrategy || target.attr('data-select-strategy') || 'none';
        target.attr('data-select-strategy', selectStrategy);

        // 绑定搜索表单
        var searchFormId = options.searchFormId || target.attr('data-searchform-id') || false;

        var dataGridId = target.attr("id");

        var columns = [];

        if (selectStrategy && selectStrategy !== 'none' && selectStrategy !== 'false') {
            columns.push({
                //field: 'field1',
                checkbox: selectStrategy === 'multi',
                radio: selectStrategy === 'single',
                align: 'center',
                valign: 'middle'
            });
        }

        for (var i = 0; i < options.columns.length; i++) {
            var columnRaw = options.columns[i];
            var column = {};
            if (columnRaw.title) column.title = columnRaw.title;
            if (columnRaw.field) column.field = columnRaw.field;
            if (columnRaw.dict || columnRaw.dictName) {
                (function () {
                    var dict = columnRaw.dictName ? eb.app.cache.dicts[columnRaw.dictName] || [] : columnRaw.dict;

                    column.formatter = function (value, row, index) {
                        if (value) {
                            var pieces = value.split(eb.settings.MUTI_VAL_SEP);
                            var finalPieces = [];
                            for (var _i = 0; _i < pieces.length; _i++) {
                                for (var j = 0; j < dict.length; j++) {
                                    if (dict[j].key === pieces[_i]) {
                                        finalPieces.push(dict[j].value);
                                        break;
                                    }
                                }
                            }
                            return finalPieces.join(eb.settings.MUTI_VAL_SEP);
                        }

                        return '';
                    };
                })();
            }
            if (columnRaw.actions) {
                (function () {
                    var actions = columnRaw.actions;
                    column.formatter = function (value, row, index) {
                        var html = "";
                        for (var _i2 = 0; _i2 < actions.length; _i2++) {
                            var action = actions[_i2];
                            var actionStr = action.action;
                            var actionHtml = "<a class=\"action-link" + (action.icon ? " " + action.icon : "") + "\" href=\"#\" data-action=\"" + actionStr + "\" title=\"" + (action.remark ? action.remark : '') + "\">" + action.name + "</a>";

                            var arr = actionHtml.match(/@\{[A-Za-z_]+\}/g);
                            if (arr) {
                                for (var j = 0; j < arr.length; j++) {
                                    var columnName = arr[j].substr(2, arr[j].length - 3);

                                    /*if (columnName=="DATAINDEX")
                                    {
                                        var regStr = "\@\{" + columnName + "\}";
                                        var reg = new RegExp(regStr, "g");
                                         value = value.replace(reg, (column.value==null ? "" : index));
                                    }
                                    else if (row[columnName] || row[columnName]==null || row[columnName]==0)
                                    {*/

                                    actionHtml = actionHtml.replace(/\@\{DATAINDEX\}/, index);

                                    var regStr = "\@\{" + columnName + "\}";
                                    var reg = new RegExp(regStr, "g");
                                    actionHtml = actionHtml.replace(reg, row[columnName] == null ? "" : row[columnName]);
                                    /*}*/
                                }
                            }

                            html += actionHtml;
                        }

                        return html;
                    };
                })();
            }

            columns.push(column);
        }
        options.columns;

        var opts = {
            columns: columns,
            method: "post",
            ajaxOptions: {
                contentType: "application/json"
            },
            dataType: "json",
            undefinedText: "-",
            pageSize: options.pageSize || 10,
            onCheck: function onCheck(row, $element) {
                var func = target.data('onCheck');
                if (func) {
                    func(row, $element.parent().parent().attr('data-index'));
                }
            },
            onUncheck: function onUncheck(row, $element) {
                var func = target.data('onUncheck');
                if (func) {
                    func(row, $element.parent().parent().attr('data-index'));
                }
            },
            onCheckAll: function onCheckAll(rows) {
                var func = target.data('onCheckAll');
                if (func) {
                    func(rows);
                }
            },
            onUncheckAll: function onUncheckAll(rows) {
                var func = target.data('onUncheckAll');
                if (func) {
                    func(rows);
                }
            }
        };

        if (selectStrategy === 'single') {
            opts.radio = true;
        } else if (selectStrategy === 'multi') {
            opts.checkbox = true;
        }

        if (options.data || options.value) {
            opts.data = options.data || options.value;
        }

        opts.url = options.sourceUrl || target.attr("data-source-url");

        switch (pageStrategy) {
            case 'real':
                opts.sidePagination = 'server';
                opts.pagination = true;
                opts.queryParams = function (params) {
                    var query = options.requestData || {};
                    var curOpts = (0, _jquery2['default'])("#" + dataGridId).bootstrapTable("getOptions");

                    var formId = searchFormId;
                    if (formId) {
                        query = eb.utils.form.extractAsObjects(formId, true);
                    }

                    query.page = {
                        pageSize: options.pageSize || curOpts.pageSize || 10,
                        pageNumber: params.pageNumber || curOpts.pageNumber || 1
                    };

                    return query;
                };

                opts.responseHandler = function (response) {
                    if (response.flag === 0 || response.result === 0) // FIXME
                        {
                            var responseData = response.resultData || response.data;

                            return {
                                rows: responseData.dataList,
                                pageNumber: responseData.page.pageNumber,
                                total: responseData.page.totalRecord
                            };
                        }
                };

                break;
            case 'pseudo':
                opts.pagination = true;
                opts.queryParams = function (params) {
                    var query = options.requestData || {};

                    var formId = searchFormId;
                    if (formId) {
                        query = eb.utils.form.extractAsObjects(formId, true);
                    }

                    return query;
                };

                opts.responseHandler = function (response) {
                    if (response.flag === 0 || response.result === 0) // FIXME
                        {
                            var responseData = response.resultData || response.data;

                            return responseData.dataList;
                        }
                };

                break;
            case 'none':
            default:

                opts.pagination = false;
                opts.queryParams = function (params) {
                    var query = options.requestData || {};

                    var formId = searchFormId;
                    if (formId) {
                        query = eb.utils.form.extractAsObjects(formId, true);
                    }

                    return query;
                };

                opts.responseHandler = function (response) {
                    if (response.flag === 0 || response.result === 0) // FIXME
                        {
                            var responseData = response.resultData || response.data;

                            return responseData.dataList;
                        }
                };

                break;
        };

        target.bootstrapTable(opts);
    },

    search: function search(target, options) {
        // 分页策略：none、pseudo、real
        var pageStrategy = options.pageStrategy || target.attr("data-page-strategy") || 'real';

        var curOpts = target.bootstrapTable("getOptions");

        var query = {};
        if (options.searchData) query.params = options.searchData;

        /*switch (pageStrategy)
        {
            case "real":
                /!*options.page = {
                    curPageNum: 1,
                    pageSize: curOpts.pageSize
                }*!/
                break;
        };*/

        target.bootstrapTable("refresh", {
            pageNumber: 1
        });
    },

    getData: function getData(target, options) {
        // TODO
        var data = target.bootstrapTable('getData');

        if (options.index || options.index === 0) return [data[options.index]];

        return target.bootstrapTable('getData');
    },

    setData: function setData(target, options) {
        target.bootstrapTable('load', options.items || []);

        var onChange = target.data('onChange') || function () {};
        onChange(options.items || []);
    },

    updateItem: function updateItem(target, options) {
        var index = options.index;
        var item = options.item;
        var data = target.bootstrapTable('getData');
        data[index] = item;
        target.bootstrapTable('load', data);

        var onChange = target.data('onChange') || function () {};
        onChange(data);
    },

    addData: function addData(target, options) {
        var data = target.bootstrapTable('getData');
        if (options.item) {
            data.push(options.item);
        }
        if (options.items) {
            for (var i = 0; i < options.items.length; i++) {
                data.push(options.items[i]);
            }
        }
        target.bootstrapTable('load', data);

        var onChange = target.data('onChange') || function () {};
        onChange(data);
    },

    delData: function delData(target, options) {
        var index = options.index;
        var data = target.bootstrapTable('getData');
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            if (i !== index) newData.push(data[i]);
        }
        target.bootstrapTable('load', newData);

        var onChange = target.data('onChange') || function () {};
        onChange(newData);
    },

    getSelections: function getSelections(target, options) {
        return target.bootstrapTable('getSelections');
    },

    onCheck: function onCheck(target, func) {
        target.data('onCheck', func);
    },

    onUncheck: function onUncheck(target, func) {
        target.data('onUncheck', func);
    },

    onCheckAll: function onCheckAll(target, func) {
        target.data('onCheckAll', func);
    },

    onUncheckAll: function onUncheckAll(target, func) {
        target.data('onUncheckAll', func);
    },

    onChange: function onChange(target, func) {
        target.data('onChange', func);
    }
};

module.exports = DataGrid;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RichInput = {

    // 输入组件实现
    lib: {
        'text': __webpack_require__(16),

        'password': __webpack_require__(13),

        'select': __webpack_require__(15),

        'multiselect': __webpack_require__(12),

        'timepicker': __webpack_require__(18),

        'checkbox': __webpack_require__(10),

        'radio': __webpack_require__(14),

        'textarea': __webpack_require__(17),

        'lookup': __webpack_require__(11),

        'tree': __webpack_require__(19)
    },

    // 默认参数
    DEFAULTS: {},

    call: function call(target, param1, param2) {
        var method = void 0,
            methodName = void 0,
            options = void 0,
            iptType = target.attr('data-eb-type');

        if (typeof param1 === 'string') {
            methodName = param1;
            options = param2 || {};
        } else {
            methodName = 'init';
            options = param1 || {};
        }

        method = (eb.component.RichInput.lib[iptType] ? eb.component.RichInput.lib[iptType][methodName] : null) || eb.component.RichInput[methodName];

        if (method) {
            return method(target, options);
        }

        eb.log.error('RichInput cannot found method \'' + methodName + '\' for ' + target.attr('id') + '!');
    },

    /**
     * 触发校验
     * @param target
     * @param options
     */
    triggerValidation: function triggerValidation(target, options) {
        var result = eb.component.RichInput.validate(target, options);
        var showResult = typeof options.showResult !== 'undefined' ? options.showResult : true;

        eb.component.RichInput.call(target, 'setValidationResult', {
            result: result
        });

        if (showResult && result !== 'passed') {
            eb.component.RichInput.call(target, 'showValidationResult');
        } else {
            eb.component.RichInput.call(target, 'hideValidationResult');
        }
    },

    /**
     * 组件校验
     * @param target
     * @param options
     * @returns {*}
     */
    validate: function validate(target, options) {
        var value = eb.component.RichInput.call(target, 'getValue');

        // 必输校验
        if (target.attr('data-required') === 'true' && !value) {
            return "必填";
        }

        // 正则校验
        var regName = target.attr('data-reg');
        if (regName && value !== '') {
            var regItem = eb.utils.regs[regName];
            if (regItem) {
                var reg = regItem.reg;
                if (!reg.test(value)) {
                    return regItem.msg;
                }
            }
        }

        // TODO 更多校验方式

        return "passed";
    },

    initStatus: function initStatus(target) {
        if (target.attr('data-readonly') === 'true') {
            eb.component.RichInput.call(target, 'lock');
        }
    },

    hideWithWrapper: function hideWithWrapper(target, options) {
        target.parent().hasClass('eb-richipt-wrapper') ? target.parent().hide() : target.hide();
    },

    showWithWrapper: function showWithWrapper(target, options) {
        target.parent().hasClass('eb-richipt-wrapper') ? target.parent().show() : target.show();
    }
};

module.exports = RichInput;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var component = {

    RichInput: __webpack_require__(22),

    DataGrid: __webpack_require__(21),

    CounterUp: __webpack_require__(20),

    /**
     * 保存组件选项
     * @param target
     * @param options
     */
    saveOptions: function saveOptions(target, options) {
        target.data('eb-opts', options);
    },

    /**
     * 获取组件选项
     * @param target
     */
    getOptions: function getOptions(target) {
        return target.data('eb-opts');
    }

};

module.exports = component;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = {

    encrypt: function encrypt(argorithm, msgStr) {
        var hexcase = 0;
        var b64pad = "";
        var chrsz = 8;

        var binl2hex = function binl2hex(binarray) {
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
            }
            return str;
        };

        var str2binl = function str2binl(str) {
            var bin = Array();
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < str.length * chrsz; i += chrsz) {
                bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
            }return bin;
        };

        var bit_rol = function bit_rol(num, cnt) {
            return num << cnt | num >>> 32 - cnt;
        };

        var safe_add = function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 0xFFFF;
        };

        switch (argorithm.toLowerCase()) {
            case "md5":
                var md5_cmn = function md5_cmn(q, a, b, x, s, t) {
                    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
                };
                var md5_ff = function md5_ff(a, b, c, d, x, s, t) {
                    return md5_cmn(b & c | ~b & d, a, b, x, s, t);
                };
                var md5_gg = function md5_gg(a, b, c, d, x, s, t) {
                    return md5_cmn(b & d | c & ~d, a, b, x, s, t);
                };
                var md5_hh = function md5_hh(a, b, c, d, x, s, t) {
                    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
                };
                var md5_ii = function md5_ii(a, b, c, d, x, s, t) {
                    return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
                };

                var core_md5 = function core_md5(x, len) {
                    /* append padding */
                    x[len >> 5] |= 0x80 << len % 32;
                    x[(len + 64 >>> 9 << 4) + 14] = len;

                    var a = 1732584193;
                    var b = -271733879;
                    var c = -1732584194;
                    var d = 271733878;

                    for (var i = 0; i < x.length; i += 16) {
                        var olda = a;
                        var oldb = b;
                        var oldc = c;
                        var oldd = d;

                        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

                        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

                        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

                        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

                        a = safe_add(a, olda);
                        b = safe_add(b, oldb);
                        c = safe_add(c, oldc);
                        d = safe_add(d, oldd);
                    }
                    return Array(a, b, c, d);
                };

                return binl2hex(core_md5(str2binl(msgStr), msgStr.length * chrsz));
                break;
        };
    }

};

module.exports = crypto;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};

var levels = {
    'DEBUG': { 'levelNum': 0, 'color': '#999999', 'background': 'white' },
    'INFO': { 'levelNum': 1, 'color': '#31708f', 'background': '#d9edf7' },
    'WARN': { 'levelNum': 2, 'color': '#8a6d3b', 'background': '#fcf8e3' },
    'ERROR': { 'levelNum': 3, 'color': '#a94442', 'background': '#f2dede' }
};

var Printer = function Printer(levelName) {
    var level = levels[levelName];

    return function (msg) {
        var logLevelName = eb.settings.LOG_LEVEL || 'DEBUG';
        var sysLogLevel = levels[logLevelName];

        if (level.levelNum < sysLogLevel.levelNum) return;

        if (window.console) {
            var msgStr = '[' + levelName + '] [' + new Date().format('yyyy-MM-dd hh:mm:ss.S') + '] ' + msg;

            /*if (eb.settings.BROWSER.browser === 'IE')
            {*/
            console.log(msgStr);
            /*}
            else
            {
                console.log('%c' + finalMsgStr, 'color: ' + level.color + '; background: ' + level.background);
            }*/
        }
    };
};

var log = {
    debug: Printer('DEBUG'),

    info: Printer('INFO'),

    warn: Printer('WARN'),

    error: Printer('ERROR')
};

module.exports = log;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/*! http://mths.be/endswith v0.2.0 by @mathias */
if (!String.prototype.endsWith) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var toString = {}.toString;
		var endsWith = function(search) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			if (search && toString.call(search) == '[object RegExp]') {
				throw TypeError();
			}
			var stringLength = string.length;
			var searchString = String(search);
			var searchLength = searchString.length;
			var pos = stringLength;
			if (arguments.length > 1) {
				var position = arguments[1];
				if (position !== undefined) {
					// `ToInteger`
					pos = position ? Number(position) : 0;
					if (pos != pos) { // better `isNaN`
						pos = 0;
					}
				}
			}
			var end = Math.min(Math.max(pos, 0), stringLength);
			var start = end - searchLength;
			if (start < 0) {
				return false;
			}
			var index = -1;
			while (++index < searchLength) {
				if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
					return false;
				}
			}
			return true;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'endsWith', {
				'value': endsWith,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.endsWith = endsWith;
		}
	}());
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/*! http://mths.be/startswith v0.2.0 by @mathias */
if (!String.prototype.startsWith) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var toString = {}.toString;
		var startsWith = function(search) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			if (search && toString.call(search) == '[object RegExp]') {
				throw TypeError();
			}
			var stringLength = string.length;
			var searchString = String(search);
			var searchLength = searchString.length;
			var position = arguments.length > 1 ? arguments[1] : undefined;
			// `ToInteger`
			var pos = position ? Number(position) : 0;
			if (pos != pos) { // better `isNaN`
				pos = 0;
			}
			var start = Math.min(Math.max(pos, 0), stringLength);
			// Avoid the `indexOf` call if no match is possible
			if (searchLength + start > stringLength) {
				return false;
			}
			var index = -1;
			while (++index < searchLength) {
				if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
					return false;
				}
			}
			return true;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'startsWith', {
				'value': startsWith,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.startsWith = startsWith;
		}
	}());
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = template;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nprogress = __webpack_require__(43);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _Client = __webpack_require__(7);

var _Client2 = _interopRequireDefault(_Client);

var _EventProxy = __webpack_require__(8);

var _EventProxy2 = _interopRequireDefault(_EventProxy);

var _artTemplate = __webpack_require__(6);

var _artTemplate2 = _interopRequireDefault(_artTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 *
 * @param options
 * @returns {Router}
 * @constructor
 */
var Router = function Router(options) {
    if (!(this instanceof Router)) {
        return new Router(options);
    } else {
        this.routeMap = options.routeMap || {};

        this.add = function (routeItems) {
            $.fn.extend(this.routeMap, routeItems);
        };

        // 根据路由生成面包屑
        var getBreadCrumbHTML = function getBreadCrumbHTML(hash) {
            var html = '<ol class="breadcrumb">' + '<li>您的位置：</li>' + '<li><a href=\"#homepage\">首页</a></li>' + '</li>&nbsp;/&nbsp;<li>';

            var hashPieces = hash.split('-');

            var curHash = '';
            for (var i = 0; i < hashPieces.length; i++) {
                curHash += (curHash ? '-' : '') + hashPieces[i];
                var route = eb.app.Router.routeMap[curHash];

                if (i === hashPieces.length - 1) {
                    html += "<li class='active'>" + route.title + "</li>";
                } else {
                    html += "<li><a href=\"#" + curHash + "\">" + route.title + "</a></li><li></li>&nbsp;/&nbsp;<li>";
                }
            }

            html += "</ol>";
            return html;
        };

        /* this.getBreadCrumbHTML = getBreadCrumbHTML; // 选择是否开放面包屑生成方法 */

        /**
         * 加载路由内容
         * @param routeName
         * @param options
         */
        this.load = function (routeName, options) {
            routeName = routeName.replace('#', '');

            var showProgress = typeof options.showProgress !== 'undefined' ? options.showProgress : true;

            var contentHandler = options.contentHandler || function (content) {
                $('#page-content-area').html(content);
            };

            var route = this.routeMap[routeName];

            if (!route) {
                contentHandler('<p>路由不存在：' + routeName + '！</p>');
                return;
            }

            if (options.showProgress) _nprogress2['default'].start();

            // 配置页面加载
            if (route.cfg) {
                var scriptHandler = options.scriptHandler || function (scriptPath) {};

                // 事件订阅器
                var proxy = new _EventProxy2['default']({
                    events: ['QUERY_CONFIG', 'QUERY_BUSINESS_DATA'],
                    callback: function callback(eventData) {

                        // 预处理字段配置
                        var handleFields = function handleFields(fields, options) {
                            if (!fields) return [];

                            var formData = options.formData;
                            var formId = options.formId;
                            var gridId = options.gridId;

                            for (var i = 0; i < fields.length; i++) {
                                fields[i].formId = formId;
                                fields[i].gridId = gridId;
                                fields[i].id = fields[i].id || 'eb-richipt-' + eb.utils.random(6);

                                if (formData) {
                                    try {
                                        fields[i].value = eval("formData." + fields[i].name);
                                    } catch (e) {
                                        // no need to do anything!
                                    }
                                }

                                if (fields[i].dictName) {
                                    fields[i].dict = eb.app.cache.dicts[fields[i].dictName] || [];
                                }
                            }

                            return fields;
                        };

                        /*--------------------------- BEGIN ---------------------------*/
                        var _cfgData = eventData['QUERY_CONFIG'];
                        var _businessData = eventData['QUERY_BUSINESS_DATA'];

                        // 预处理模版数据
                        // 公共属性设置
                        _cfgData.showBtnGroup = typeof options.showBtnGroup !== 'undefined' ? options.showBtnGroup : true;
                        _cfgData.container = options.container;

                        // 特殊属性设置
                        switch (_cfgData.pageType) {
                            case 'page-form':
                                _cfgData.formId = _cfgData.formId || 'eb-richform-' + eb.utils.random(6);

                                _cfgData.fields = handleFields(_cfgData.fields, {
                                    formId: _cfgData.formId,
                                    formData: _businessData
                                });

                                _cfgData.btnGroup = _cfgData.btnGroup || [];
                                if (_cfgData.btnGroup.length === 0) // 向下兼容处理
                                    {
                                        if (!_cfgData.submitUrl) {
                                            _cfgData.submitUrl = _cfgData.baseUrl + (_businessData && !_businessData[_cfgData.idField] ? "/add" : "/mod"); // TODO 重构，约定配置放在页面
                                        }
                                        _cfgData.btnGroup.push({
                                            type: 'submit',
                                            submitUrl: eb.settings.SERVER_CONTEXT_PATH + _cfgData.submitUrl,
                                            title: '保存',
                                            icon: 'fa fa-paper-plane',
                                            formId: _cfgData.formId
                                        });
                                    }

                                // TODO
                                break;
                            case 'page-datagrid':
                                _cfgData.searchFormId = _cfgData.searchFormId || 'eb-richform-' + eb.utils.random(6);
                                _cfgData.gridId = _cfgData.gridId || 'eb-datagrid-' + eb.utils.random(6);
                                _cfgData.sourceUrl = eb.settings.SERVER_CONTEXT_PATH + _cfgData.sourceUrl;
                                _cfgData.selectStrategy = typeof _cfgData.selectStrategy !== 'undefined' ? _cfgData.selectStrategy : options.selectStrategy || 'none';

                                _cfgData.searchFields = handleFields(_cfgData.searchFields, {
                                    gridId: _cfgData.gridId,
                                    formData: options.businessData || null
                                });

                                break;
                            case 'page-workflow':
                                _cfgData.pageId = _cfgData.pageId || 'eb-workflow-' + eb.utils.random(6);
                                _cfgData.taskId = options.requestData.taskId;
                                _cfgData.workFlowKey = routeName;
                                _cfgData.directions = function (directions, editableConfig) {

                                    for (var i = 0; i < directions.length; i++) {
                                        directions[i].editableConfig = editableConfig;
                                    }
                                    return directions;
                                }(_businessData.directions || [], _businessData.editableConfig);
                                _cfgData.contextPath = eb.settings.SERVER_CONTEXT_PATH;
                                _cfgData.formConfig = _businessData.formConfig;

                                _cfgData.fields = handleFields(_cfgData.fields, {
                                    formId: _cfgData.pageId + 'Form',
                                    formData: _businessData.formData
                                });

                                break;
                        }
                        /*--------------------------- END ---------------------------*/

                        var html = _artTemplate2['default'].parse(_cfgData.pageType, _cfgData);
                        if (options.container === 'main-area') html = getBreadCrumbHTML(routeName) + html;
                        contentHandler(html, _cfgData);

                        // 执行脚本
                        // 1. 预置脚本
                        var initFunc = eb.app.scripts[_cfgData.pageType];
                        if (initFunc) initFunc(_cfgData, _businessData);

                        // 2. 自定义脚本
                        if (_cfgData.script) scriptHandler(_cfgData.script);

                        // 成功完成
                        if (options.showProgress) _nprogress2['default'].done();
                    }
                });

                // 请求配置
                if (typeof route.cfg === 'string') {
                    new _Client2['default']({ url: route.cfg + '?q=' + eb.utils.random(4), method: 'GET' }).ifSuccess(function (response) {
                        proxy.emit('QUERY_CONFIG', response.data);

                        // 缓存页面配置
                        if (eb.settings.CACHE_PAGE_CONFIG) this.routeMap[routeName].cfg = response.data;
                    }).ifFail(function (response) {
                        eb.log.error('Error loading page config: ' + route.cfg);
                        alert('页面配置文件加载失败：' + route.cfg + '！');

                        // 失败完成
                        if (options.showProgress) _nprogress2['default'].done();
                    }).send();
                } else {
                    proxy.emit('QUERY_CONFIG', route.cfg);
                }

                // 请求业务数据
                if (route.url) {
                    new _Client2['default']({
                        url: eb.settings.SERVER_CONTEXT_PATH + route.url,
                        requestData: options.requestData,
                        requestParam: options.requestParam
                    }).ifSuccess(function (response) {
                        proxy.emit('QUERY_BUSINESS_DATA', response.data);
                    }).ifFail(function (response) {
                        eb.log.debug('Error loading business data: ' + eb.settings.SERVER_CONTEXT_PATH + route.url);
                        alert('业务数据加载失败：' + eb.settings.SERVER_CONTEXT_PATH + route.url + '！');

                        // 失败完成
                        if (options.showProgress) _nprogress2['default'].done();
                    }).send();
                } else {
                    proxy.emit('QUERY_BUSINESS_DATA', typeof options.businessData !== 'undefined' ? options.businessData : null);
                }
            }
            // 原生页面加载
            else {
                    new _Client2['default']({ url: route.url + '?_=' + eb.utils.random(4), method: 'GET' }).before(function () {
                        if (showProgress) _nprogress2['default'].start();
                    }).ifSuccess(function (response) {
                        contentHandler(response.data);
                    }).ifFail(function (response) {
                        contentHandler(response.data);
                        eb.log.debug("Error loading direct route: " + hash);
                    }).after(function () {
                        if (showProgress) _nprogress2['default'].done();
                    }).send();
                }
        };

        this.open = function (routeName, options) {
            var opts = options || {};

            this.load(routeName, {
                showProgress: false,
                showBtnGroup: false,
                container: 'modal-window',
                businessData: opts.businessData,
                contentHandler: function contentHandler(content, pageCfg) {
                    $("#window-modal-title").html(opts.title || '');
                    $("#window-modal").find(".modal-body").html(content);
                    $("#window-modal").find(".modal-footer").html(function (btnGroup) {
                        var html = '';
                        if (btnGroup) {
                            if (opts.btnGroup) {
                                for (var i = 0; i < btnGroup.length; i++) {
                                    var btn = btnGroup[i];
                                    btn.formId = btn.formId || (pageCfg ? pageCfg.formId : false) || '';
                                    html += _artTemplate2['default'].parse('button', btnGroup[i]);
                                }
                            }
                        }
                        return html;
                    }(opts.btnGroup));

                    $("#window-modal").modal();
                },
                scriptHandler: function scriptHandler(scriptPath) {
                    $("#window-modal").find(".modal-body").append("<script type=\"text/javascript\" src=\"" + scriptPath + "\"></script>");
                }
            });
        };

        this.lookup = function (routeName, options) {
            var opts = options || {};

            this.load(routeName, {
                showProgress: false,
                showBtnGroup: false,
                container: 'lookup',
                businessData: opts.businessData,
                selectStrategy: opts.selectStrategy,
                contentHandler: function contentHandler(content, pageCfg) {
                    $("#window-modal-lookup-title").html(opts.title || '');
                    $("#window-modal-lookup").find(".modal-body").html(content);
                    $("#window-modal-lookup").find(".modal-footer").html(function (btnGroup) {
                        var html = '';
                        if (btnGroup) {
                            for (var i = 0; i < btnGroup.length; i++) {
                                var btn = btnGroup[i];
                                btn.sourceGridId = pageCfg.gridId;
                                html += _artTemplate2['default'].parse('button', btnGroup[i]);
                            }
                        }
                        return html;
                    }(opts.btnGroup));

                    $("#window-modal-lookup").modal();
                },
                scriptHandler: function scriptHandler(scriptPath) {
                    $("#window-model-lookup").find(".modal-body").append("<script type=\"text/javascript\" src=\"" + scriptPath + "\"></script>");
                }
            });
        };

        this.dispatch = function (routeName, options) {
            var opts = options || {};

            this.load(routeName, {
                showProgress: true,
                showBtnGroup: true,
                requestData: opts.requestData,
                container: 'main-area',
                contentHandler: function contentHandler(content) {
                    $('#page-content-area').html(content);
                },
                scriptHandler: function scriptHandler(scriptPath) {
                    $('#page-content-area').append("<script type=\"text/javascript\" src=\"" + scriptPath + "\"></script>");
                }
            });
        };

        this.pool = {};

        this.go = function (routeName, options) {
            var hash = routeName.replace('#', '');

            window.location.hash = hash;
            eb.app.Router.pool[hash] = options;
        };

        this.goBack = function () {
            var hash = (window.location.hash || '').replace('#', '');
            var hashPieces = hash.split('-');

            if (hashPieces.length > 1) {
                hashPieces.pop();
                window.location.hash = hashPieces.join('-');
            }
        };

        $(window).bind('hashchange', function () {
            var routeName = window.location.hash.replace('#', '') || 'homepage';
            eb.app.Router.dispatch(routeName, eb.app.Router.pool[routeName] || {});
        });
    }
};

module.exports = Router;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(3);
__webpack_require__(2);

var Router = __webpack_require__(29)

__webpack_require__(30);

// 框架主题
__webpack_require__(5);

// 框架函数库
eb = __webpack_require__(1);

// 将框架组件 API 装配 jQuery 插件 // TODO 可独立模块
var $ = __webpack_require__(0);
$.showLoading = function (msg) {
    var finalMsg = msg || "正在请求服务端...";
    $("#cover-request-loading").find(".text").html(finalMsg);
    $("#cover-request-loading").fadeIn();
};
$.hideLoading = function (msg) {
    var finalMsg = msg || $("#cover-request-loading").find(".text").html();
    $("#cover-request-loading").find(".text").html(finalMsg);
    $("#cover-request-loading").fadeOut();
};
$.alert = function (msg) {
    var finalMsg = msg || "";
    $("#window-modal-alert").find(".modal-body").html("<p>" +  finalMsg + "</p>");
    $("#window-modal-alert").modal();
};
$.confirm = function (msg, callback, cancelCallback) {
    var finalMsg = msg || "";
    $("#window-modal-confirm").find(".modal-body").html("<p>" +  finalMsg + "</p>");

    $.confirm.callback = callback       || function () {};
    $.confirm.cancel   = cancelCallback || function () {};

    $("#window-modal-confirm").modal();
};
$.openModalWindow = function (options) {
    var title = options.title || '&nbsp;';
    var content = options.content || '';
    var buttons = function (buttons) {
        var html = '';
        // TODO
        return html;
    }(options.buttons || []);

    $("#window-modal-title").html(title);
    $("#window-modal").find(".modal-body").html(content);
    $("#window-modal").find(".modal-footer").html(buttons);

    $("#window-modal").modal();
};
$.closeModalWindow = function () {
    $("#window-modal").modal('hide');
};
$.fn.EBRichInput = function (param1, param2) {
    return eb.component.RichInput.call($(this), param1, param2);
};
$.fn.EBRichForm = function (param1, param2) {
    $(this).find('.eb-richipt').each(function () {
        $(this).EBRichInput(param1, param2);
    });
};
$.fn.EBDataGrid = function (param1, param2) {
    return eb.component.DataGrid.call($(this), param1, param2);
};

// 应用构建
eb.app =
{

    getSourceURL: function (key) {
        return eb.settings.SERVER_CONTEXT_PATH + eb.settings.SERVER_RESOURCES[key];
    },

    cache: {
        dicts: {},
        homepage: {}
    },

    config:  // TODO 此处配置应当调出
    {
        // 默认REST接口地址，适用于REST接口唯一的应用，可以免写URL
        DEFAULT_URL: '/rest',

        // 默认请求方法
        DEFAULT_METHOD: 'POST'
    },

    Router: new Router({
        routeMap:
        {
            'homepage': {url: 'custom/homepage.html'}
        }
    }),

    // 固定形态界面脚本
    scripts: {
        // 表单界面
        'page-form': function (pageCfg) {
            $('#' + pageCfg.formId).EBRichForm();

            var fields = pageCfg.fields;
            for (var i=0; i<fields.length; i++)
            {
                var field = fields[i];
                if (field.type==='datagrid')
                {
                    var options = field;

                    options.pageStrategy = 'pseudo';
                    if (options.readonly!=='true')
                    {
                        /*options.columns.push({
                            "title": "操作",
                            "actions": [
                                {
                                    "name": "删除",
                                    "icon": "fa fa-trash",
                                    "action": "$('#" + field.id + "').EBDataGrid('delData', {index: @{DATAINDEX}})"
                                },
                                {
                                    "name": "编辑",
                                    "icon": "fa fa-trash",
                                    "action": "eb.app.Router.open('" + field.formRoute + "', {businessData: $('#" + field.id + "').EBDataGrid('getData', {index: @{DATAINDEX}})})"
                                }
                            ]
                        });*/
                    }
                    $("#"+field.id).EBDataGrid(options);
                }
            }
        },

        // 列表查询界面
        'page-datagrid': function (pageCfg) {
            $('#' + pageCfg.searchFormId).each(function () {
                $(this).EBRichForm();
            });

            $("#" + pageCfg.gridId).EBDataGrid({
                columns: pageCfg.columns,
                pageStrategy: pageCfg.pageStrategy || 'real',
                selectStrategy: pageCfg.selectStrategy
            });
        },

        // 流程审批界面
        'page-workflow': function (pageCfg) {
            $("#" + pageCfg.pageId + "Form").EBRichForm();

            $('#'+pageCfg.pageId+'Form').find('.eb-richbtn').not('.eb-richbtn-lookup').hide();

            var formConfig = pageCfg.formConfig;

            var fields = pageCfg.fields;
            for (var i=0; i<fields.length; i++)
            {
                var field = fields[i];
                if (field.type==='datagrid')
                {
                    var options = field;

                    if ( formConfig===null || (formConfig &&
                        ( ( formConfig.editable && (formConfig.editableExclusion && !formConfig.editableExclusion.contains(field.name))) ||
                          (!formConfig.editable && (!formConfig.editableExclusion || !formConfig.editableExclusion.contains(field.name)))   )
                       ))
                    {
                        options.selectStrategy = 'none';
                        var lastColumn = options.columns[options.columns.length-1];
                        if (lastColumn.actions)
                        {
                            options.columns.pop();
                        }
                    }
                    else
                    {
                        $('#'+pageCfg.pageId+'Form').find('.grid-btn-group').find('.eb-richbtn').show();
                    }

                    // options.pageStrategy = 'pseudo';
                    // options.selectStrategy = 'single';
                    if (options.readonly!=='true' && formConfig && formConfig.editable)
                    {
                        /*options.columns.push({
                            "title": "操作",
                            "actions": [
                                {
                                    "name": "删除",
                                    "icon": "fa fa-trash",
                                    "action": "$('#" + field.id + "').EBDataGrid('delData', {index: @{DATAINDEX}})"
                                }
                            ]
                        });*/
                    }
                    $("#"+field.id).EBDataGrid(options);
                }
            }

            var lockAll = function () {
                $('#'+pageCfg.pageId+'Form').find('.eb-richipt').each(function () {
                    $(this).EBRichInput('lock');
                });
            };

            var unlockExclusion = function (exclusion) {
                if (exclusion)
                {
                    for (var i=0; i<exclusion.length; i++)
                    {
                        var name = exclusion[i];
                        $('#'+pageCfg.pageId+'Form').find("[data-eb-name='"+name+"']").EBRichInput('unlock');
                    }
                }
            };

            var lockExclusion = function (exclusion) {
                if (exclusion)
                {
                    for (var i=0; i<exclusion.length; i++)
                    {
                        var name = exclusion[i];
                        $('#'+pageCfg.pageId+'Form').find("[data-eb-name='"+name+"']").EBRichInput('lock');
                    }
                }
            };

            var hideVisiableExclusion = function (exclusion) {
                if (exclusion)
                {
                    for (var i=0; i<exclusion.length; i++)
                    {
                        var name = exclusion[i];
                        $('#'+pageCfg.pageId+'Form').find("[data-eb-name='"+name+"']").EBRichInput('hide');
                    }
                }
            };

            if (!formConfig || !formConfig.editable)
            {
                lockAll();
                if (formConfig)
                {
                    unlockExclusion(formConfig.editableExclusion);
                }
            }
            else
            {
                if (formConfig)
                {
                    lockExclusion(formConfig.editableExclusion);
                }
            }
            if (formConfig) hideVisiableExclusion(formConfig.visibleExclusion);

            $("#"+pageCfg.pageId+"DG-history").EBDataGrid({
                sourceUrl: eb.settings.SERVER_CONTEXT_PATH + '/bpm/task/historylist',
                requestData: {
                    taskId: pageCfg.taskId
                },
                pageStrategy: 'none',
                columns: [
                    {
                        title: '任务ID',
                        field: 'taskId'
                    },
                    {
                        title: '审批节点',
                        field: 'taskName'
                    },
                    {
                        title: '审批人',
                        field: 'auditor'
                    },
                    {
                        title: '审批时间',
                        field: 'auditTime'
                    }
                ]
            });
        }
    },
    /**
     * 应用初始化
     */
    init: function () {


    },

    // 应用系统命令函数
    cmd:
    {
        toggleMenu: function () {
            var className = 'page-sidebar-closed';
            $('body').hasClass(className) ? $('body').removeClass(className) : $('body').addClass(className);
        }
    },

    /**
     * 加载菜单
     * @param menuSource string 异步方式，菜单数据源url
     *                   array  同步方式，菜单数据
     */
    loadMenu: function (menuSource) {

        // 菜单 HTML 生成
        var genMenuHTML = function (menuData) {
            var menuHtml = '';//'<li class="menu-toggler"><a href="cmd:toggleMenu"><i class="fa fa-bars" aria-hidden="true"></i></a></li>';
            for (var i=0; i<menuSource.length; i++)
            {
                menuHtml += eb.tplengine.parse('menu-item', menuSource[i]);
            }
            $('.page-sidebar-menu').html(menuHtml);
        };

        // 菜单行为绑定
        var bindMenuBehavior = function () {
            $('.page-sidebar').on('click', 'a', function (e) {


                var href = $(this).attr('href');

                // 菜单展开
                if (!href || href==='#')
                {
                    var isOpened = $(this).parent().hasClass('open');

                    if (isOpened)
                    {
                        $(this).parent().find('.sub-menu').slideUp('fast');
                        $(this).parent().find('.open').removeClass('open');
                        $(this).parent().removeClass('open');
                    }
                    else
                    {
                        $(this).parent().addClass('open');

                        $(this).parent().siblings().find('.sub-menu').slideUp('fast');
                        $(this).parent().siblings().removeClass('open');
                        $(this).parent().siblings().find('.open').removeClass('open');

                        $(this).siblings('.sub-menu').slideDown('fast');
                    }

                    e.preventDefault();
                }
                // 页面跳转
                /*else
                {
                    // 路由跳转型
                    if (href.startsWith('#')) {
                        eb.app.Router.go(href);

                        var className = 'page-sidebar-closed';
                        if (!$('body').hasClass(className)) {
                            $('body').addClass(className);
                        }
                    }

                }*/
            });

            $(".btn-navbar.pc").click(function (e) {
                eb.app.cmd.toggleMenu();
            });

        };

        // 异步
        if (typeof(menuSource)==='string')
        {
            // TODO
        }
        // 同步
        else
        {
            genMenuHTML(menuSource);
            bindMenuBehavior();
        }

    }
};

$(document).ready(function () {
    eb.utils.loadJS('sys/utils.regs.js');
    eb.utils.loadJS('sys/app.router.js');
    eb.utils.loadJS('sys/app.init.js');

    $("body").on("click", ".action-link", function (e) {
        e.preventDefault();

        var action = $(this).attr("data-action");
        eb.log.debug("Execute action: " + action);
        eval(action);
    });

    $("body").on("click", ".eb-richbtn-grid-form-win", function (e) {
        e.preventDefault();

        var gridId = $(this).attr("data-grid-id");
        var route = $(this).attr("data-route");
        var title = $(this).attr("data-title") || "请填写";

        eb.app.Router.open(route, {
            title: title,
            btnGroup: [
                {
                    type: 'grid-add',
                    title: '保存',
                    gridId: gridId
                },
                {
                    type: 'modal-window-dismiss',
                    title: '取消'
                }
            ]
        });
    });

    $("body").on("click", ".eb-richbtn-lookup", function (e) {
        e.preventDefault();

        var route = $(this).attr("data-route");
        var title = $(this).attr("data-title") || "请选择";

        eb.app.Router.lookup(route, {
            title: title,
            selectStrategy: $(this).attr("data-grid-id") ? 'multi' : 'single',
            businessData: $(this).data('reqDataCollector') ? $(this).data('reqDataCollector')() : null,
            btnGroup: [
                {
                    type: 'lookdown',
                    title: '保存',
                    gridId: $(this).attr("data-grid-id"),
                    formId: $(this).attr("data-form-id"),
                    idField: $(this).attr("data-id-field")
                },
                {
                    type: 'modal-window-dismiss',
                    title: '取消'
                }
            ]
        });
    });

    $("body").on("click", ".eb-richbtn-lookdown", function (e) {
        e.preventDefault();

        var sourceGridId = $(this).attr("data-source-grid-id")
        var gridId = $(this).attr("data-grid-id");
        var formId = $(this).attr("data-form-id");

        var selections = $("#"+sourceGridId).EBDataGrid('getSelections');

        if (gridId)
        {
            var idField = $(this).attr("data-id-field");
            var finalSelections = idField ? [] : selections;
            if (idField)
            {
                var dataList = $("#"+gridId).EBDataGrid('getData');

                for (var i=0; i<selections.length; i++)
                {
                    var valid = true;
                    for (var j=0; j<dataList.length; j++)
                    {
                        if (selections[i][idField]===dataList[j][idField])
                        {
                            valid = false;
                            break;
                        }
                    }
                    if (valid) finalSelections.push(selections[i]);
                }
            }

            $("#"+gridId).EBDataGrid('addData', {items: finalSelections});
        }

        if (formId)
        {
            if (selections.length===0)
            {
                alert('您尚未选择数据！');
                return;
            }

            var item = selections[0];

            for (var key in item)
            {
                var name = ''+key;
                $("#"+formId).find("[type='hidden'][name='"+name+"']").val(item[key]);
            }

            for (var key in item)
            {
                var name = ''+key;
                $("#"+formId).find("[data-eb-name='"+name+"']").EBRichInput('setValue', {value: item[key]});
            }
        }

        $("#window-modal-lookup").modal('hide');
    });

    $("body").on("click", ".eb-richbtn-grid-add", function (e) {
        e.preventDefault();

        var gridId = $(this).attr("data-grid-id");
        var formId = $(this).attr("data-form-id");

        var validateResult = eb.app.validateForm(formId);

        if (!validateResult) {
            alert("表单数据校验失败，请根据提示检查您输入的数据！");
            return;
        }

        $('#'+gridId).EBDataGrid('addData', {
            item: eb.utils.form.extractAsObjects(formId)
        });

        $('#window-modal').modal('hide');
    });

    $("body").on("click", ".eb-richbtn-grid-save", function (e) {
        e.preventDefault();

        var gridId = $(this).attr("data-grid-id");
        var formId = $(this).attr("data-form-id");
        var index  = $(this).attr("data-item-index");

        var validateResult = eb.app.validateForm(formId);

        if (!validateResult) {
            alert("表单数据校验失败，请根据提示检查您输入的数据！");
            return;
        }

        var data = $('#'+gridId).EBDataGrid('getData');
        data[parseInt(index)] = eb.utils.form.extractAsObjects(formId);
        $('#'+gridId).EBDataGrid('setData', {
            items: eb.utils.form.extractAsObjects(formId)
        });

        $('#window-modal').modal('hide');
    });

    $("body").on("click", ".eb-richbtn-search", function (e) {
        var datagridId = $(this).attr("data-datagrid-id");
        var formId = $(this).attr("data-form-id");

        $("#"+datagridId).EBDataGrid("search", {
            searchData: eb.utils.form.extractAsObjects(formId, true)
        });

        // TODO
    });

    // 流程路由按钮跳转
    $("body").on("click", ".eb-richbtn-wfroute", function (e) {
        eb.app.cache.wfroute = {
            baseUrl: $(this).attr("data-base-url"),
            taskId: $(this).attr("data-task-id"),
            direction: $(this).attr("data-direction")
        };

        var routeName = $(this).attr('data-opinion-page') || 'workflowCommentForm';
        var editable  = $(this).attr('data-editable-route')==='true' ? true : false;
        var formId    = $(this).attr('data-form-id');

        if (editable)
        {
            var validateResult = eb.app.validateForm(formId);

            if (!validateResult) {
                alert("表单数据校验失败，请根据提示检查您输入的数据！");
                return;
            }
        }

        eb.app.Router.open(routeName, {
            title: '审批意见',
            btnGroup: [
                {
                    type: 'wfsubmit',
                    title: '提交',
                    formId: editable ? formId : false
                },
                {
                    type: 'modal-window-dismiss',
                    title: '取消'
                }
            ]
        });
    });

    // 流程提交
    $("body").on("click", ".eb-richbtn-wfsubmit", function (e) {
        var wfroute = eb.app.cache.wfroute;

        var requestData = {
            taskId: wfroute.taskId,
            direction: wfroute.direction,
            opinions: eb.utils.form.extractAsKVMap("workflow-comment-form")
        };


        var formId = $(this).attr('data-form-id');
        if (formId)
        {
            var formData = eb.utils.form.extractAsObjects(formId);

            $("#"+formId).find('[data-grid-name]').each(function () {
                var name = $(this).attr('data-grid-name');
                var dataList = $(this).attr('data-select-strategy')==='none' ? $(this).EBDataGrid('getData') : $(this).EBDataGrid('getSelections');
                eval("formData."+name+"=dataList");
            });

            requestData.formData = formData;
        }

        var client = new eb.Client({
            url: eb.settings.SERVER_CONTEXT_PATH + wfroute.baseUrl + '/submit',
            requestData: requestData
        }).before(function () {
            $.showLoading("正在提交流程信息，请稍候...");
        }).ifSuccess(function (response) {
            $.hideLoading("正在提交流程信息，请稍候...成功！");
            $.closeModalWindow();
            alert(response.msg);
            eb.app.Router.go("workflowTodoList");
        }).ifFail(function (response) {
            $.hideLoading("正在提交流程信息，请稍候...失败！");
            alert(response.msg);

        }).after(function () {

        }).send();
    });

    // 框架路由跳转
    $("body").on("click", ".eb-richbtn-router", function (e) {
        var route = $(this).attr("data-route");
        eb.app.Router.go(route);

        // TODO
    });

    $("body").on("click", ".eb-richbtn-submit", function (e) {
        e.preventDefault();

        var submitUrl = $(this).attr("data-submit-url");
        var formId    = $(this).attr("data-form-id");

        eb.app.submitForm(submitUrl, formId, {
            onSuccess: eb.app.Router.goBack
        });
    });
});


/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "674f50d287a8c48dc19ba404d20fe713.eot";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "912ec66d7572ff821749319396470bde.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b06871f281fee6b241d60582ae9369b9.ttf";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af7ae505a9eed503f8b8e6982036873e.woff2";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fee66e712a8a08eef5805a46892932ad.woff";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(34) + ");\n  src: url(" + __webpack_require__(33) + "?#iefix&v=4.7.0) format('embedded-opentype'), url(" + __webpack_require__(37) + ") format('woff2'), url(" + __webpack_require__(38) + ") format('woff'), url(" + __webpack_require__(36) + ") format('truetype'), url(" + __webpack_require__(35) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(41)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!../less-loader/index.js!./font-awesome-styles.loader.js!./font-awesome.config.js", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!../less-loader/index.js!./font-awesome-styles.loader.js!./font-awesome.config.js");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ })
/******/ ]);
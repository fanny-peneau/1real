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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=r(18),n=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,i){void 0===i&&(i=!1);var n=e.getVersionPrecision(t),s=e.getVersionPrecision(r),o=Math.max(n,s),a=0,u=e.map([t,r],(function(t){var r=o-e.getVersionPrecision(t),i=t+new Array(r+1).join(".0");return e.map(i.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(i&&(a=o-Math.min(n,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}},e.map=function(e,t){var r,i=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i},e.getBrowserAlias=function(e){return i.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return i.BROWSER_MAP[e]||""},e}();t.default=n,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(91))&&i.__esModule?i:{default:i},s=r(18);function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){}var t,r,i;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new n.default(e,t)},e.parse=function(e){return new n.default(e).getResult()},t=e,i=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&o(t.prototype,r),i&&o(t,i),e}();t.default=a,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i=u(r(92)),n=u(r(93)),s=u(r(94)),o=u(r(95)),a=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=i.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=n.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=s.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find((function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return Object.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},i=0,n={},s=0;if(Object.keys(e).forEach((function(t){var o=e[t];"string"==typeof o?(n[t]=o,s+=1):"object"==typeof o&&(r[t]=o,i+=1)})),i>0){var o=Object.keys(r),a=o.find((function(e){return t.isOS(e)}));if(a){var u=this.satisfies(r[a]);if(void 0!==u)return u}var d=o.find((function(e){return t.isPlatform(e)}));if(d){var c=this.satisfies(r[d]);if(void 0!==c)return c}}if(s>0){var f=Object.keys(n).find((function(e){return t.isBrowser(e,!0)}));if(void 0!==f)return this.compareVersion(n[f])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),i=e.toLowerCase(),n=a.default.getBrowserTypeByAlias(i);return t&&n&&(i=n.toLowerCase()),i===r},t.compareVersion=function(e){var t=[0],r=e,i=!1,n=this.getBrowserVersion();if("string"==typeof n)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(i=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(i=!0,r=e.substr(1)),t.indexOf(a.default.compareVersions(n,r,i))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i};var s=/version\/(\d+(\.?_?\d+)+)/i,o=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=n.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=n.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=n.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=n.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=n.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=n.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=n.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=n.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=n.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=n.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=n.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=n.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=n.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=n.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=n.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=n.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=n.default.getFirstMatch(s,e)||n.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=n.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=n.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=n.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=n.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=n.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=n.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=n.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=n.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n.default.getFirstMatch(t,e),version:n.default.getSecondMatch(t,e)}}}];t.default=o,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:[/Roku\/DVP/],describe:function(e){var t=n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows/i],describe:function(e){var t=n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=n.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/macintosh/i],describe:function(e){var t=n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=n.default.getMacOSVersionName(t),i={name:s.OS_MAP.MacOS,version:t};return r&&(i.versionName=r),i}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=n.default.getAndroidVersionName(t),i={name:s.OS_MAP.Android,version:t};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||n.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=n.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=n.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=o,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=n.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=n.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=o,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var i,n=(i=r(17))&&i.__esModule?i:{default:i},s=r(18);var o=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=o,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/index.js ***!
  \*********************************************/
/*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return _common_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./node_modules/gl-matrix/esm/mat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return _mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./node_modules/gl-matrix/esm/mat2d.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return _mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return _quat_js__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./node_modules/gl-matrix/esm/quat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function() { return _quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _vec4_js__WEBPACK_IMPORTED_MODULE_9__; });












/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, transpose, invert, adjoint, determinant, multiply, rotate, scale, fromRotation, fromScaling, str, frob, LDU, add, subtract, exactEquals, equals, multiplyScalar, multiplyScalarAndAdd, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function() { return LDU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2d.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2d.js ***!
  \*********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, invert, determinant, multiply, rotate, scale, translate, fromRotation, fromScaling, fromTranslation, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b, c,
 *  d, tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, getAngle, multiply, rotateX, rotateY, rotateZ, calculateW, exp, ln, pow, slerp, random, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ln", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {quat} a     Origin unit quaternion 
 * @param  {quat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 * 
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat2.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat2.js ***!
  \*********************************************/
/*! exports provided: create, clone, fromValues, fromRotationTranslationValues, fromRotationTranslation, fromTranslation, fromRotation, fromMat4, copy, identity, set, getReal, getDual, setReal, setDual, getTranslation, translate, rotateX, rotateY, rotateZ, rotateByQuatAppend, rotateByQuatPrepend, rotateAroundAxis, add, multiply, mul, scale, dot, lerp, invert, conjugate, length, len, squaredLength, sqrLen, normalize, str, exactEquals, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function() { return fromRotationTranslationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function() { return getReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function() { return getDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function() { return setReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function() { return setDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function() { return rotateByQuatAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function() { return rotateByQuatPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function() { return rotateAroundAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q a normalized quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, zero, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */

function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat4, transformQuat, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
    return extend(dest, src, true);
}

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        extend(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return (doc.defaultView || doc.parentWindow);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = last.deltaX - input.deltaX;
        var deltaY = last.deltaY - input.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        } else if (isMouse && !this.mouse.allow) {
            return;
        }

        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }

        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // pan-x and pan-y can be combined
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.id = uniqueId();

    this.manager = null;
    this.options = merge(options || {}, this.defaults);

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        extend(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(withState) {
            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(true);
        }

        emit(); // simple 'eventName' events

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(true);
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = extend({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        this._super.emit.call(this, input);
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            this.manager.emit(this.options.event + inOut, input);
        }
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 500, // minimal time of the pointer to be pressed
        threshold: 5 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.65,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.velocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.velocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.velocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.direction &&
            input.distance > this.options.threshold &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 2, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED ) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.4';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    options = options || {};

    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        extend(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        var recognizers = this.recognizers;
        recognizer = this.get(recognizer);
        recognizers.splice(inArray(recognizers, recognizer), 1);

        this.touchAction.update();
        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function(value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

extend(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

if ("function" == TYPE_FUNCTION && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if ( true && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/marzipano/src/Hotspot.js":
/*!***********************************************!*\
  !*** ./node_modules/marzipano/src/Hotspot.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var cssSupported = __webpack_require__(/*! ./support/Css */ "./node_modules/marzipano/src/support/Css.js");
var positionAbsolutely = __webpack_require__(/*! ./util/positionAbsolutely */ "./node_modules/marzipano/src/util/positionAbsolutely.js");
var setTransform = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setTransform;
var clearOwnProperties = __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class Hotspot
 * @classdesc
 *
 * A Hotspot allows a DOM element to be placed at a fixed position in the
 * image. The position is updated automatically when the {@link View view}
 * changes.
 *
 * Positioning is performed with the `transform` CSS property when available,
 * falling back to the `position`, `left` and `top` properties when not.
 * In both cases, the top left corner of the element is placed in the requested
 * position; clients are expected to use additional children elements or other
 * CSS properties to achieve more sophisticated layouts.
 *
 * There are two kinds of hotspots: regular and embedded. A regular hotspot
 * does not change size depending on the zoom level. An embedded hotspot is
 * displayed at a fixed size relative to the panorama, always covering the
 * same portion of the image. Embedded hotspots require CSS 3D transform
 * support.
 *
 * Clients should call {@link HotspotContainer#createHotspot} instead of
 * invoking the constructor directly.
 *
 * @param {Element} domElement The DOM element.
 * @param {View} view The view.
 * @param {Object} coords The hotspot coordinates.
 *     Use {@link RectilinearViewCoords} for a {@link RectilinearView} or
 *     {@link FlatViewCoords} for a {@link FlatView}.
 * @param {Object} opts Additional options.
 * @param {Object} opts.perspective Perspective options for embedded hotspots.
 * @param {number} [opts.perspective.radius=null] If set, embed the hotspot
 *     into the image by transforming it into the surface of a sphere with this
 *     radius.
 * @param {string} [opts.perspective.extraTransforms=null] If set, append this
 *     value to the CSS `transform` property used to position the hotspot. This
 *     may be used to rotate an embedded hotspot.
 */
function Hotspot(domElement, parentDomElement, view, coords, opts) {

  opts = opts || {};
  opts.perspective = opts.perspective || {};
  opts.perspective.extraTransforms =
      opts.perspective.extraTransforms != null ? opts.perspective.extraTransforms : "";

  if ((opts.perspective.radius || opts.perspective.extraTransforms) && !cssSupported()) {
    throw new Error('CSS transforms on hotspots are not supported on this browser');
  }

  this._domElement = domElement;
  this._parentDomElement = parentDomElement;
  this._view = view;
  this._coords = {};
  this._perspective = {};

  this.setPosition(coords);

  // Add hotspot into the DOM.
  this._parentDomElement.appendChild(this._domElement);

  this.setPerspective(opts.perspective);

  // Whether the hotspot is visible.
  // The hotspot may still be hidden if it's inside a hidden HotspotContainer.
  this._visible = true;

  // The current calculated screen position.
  this._position = { x: 0, y: 0 };
}

eventEmitter(Hotspot);


/**
 * Destructor.
 * Clients should call {@link HotspotContainer#destroyHotspot} instead.
 */
Hotspot.prototype.destroy = function() {
  this._parentDomElement.removeChild(this._domElement);
  clearOwnProperties(this);
};


/**
 * @return {Element}
 */
Hotspot.prototype.domElement = function() {
  return this._domElement;
};


/**
 * @return {Object}
 */
Hotspot.prototype.position = function() {
  return this._coords;
};


/**
 * @param {Object} coords
 */
Hotspot.prototype.setPosition = function(coords) {
  for (var key in coords) {
    this._coords[key] = coords[key];
  }
  this._update();
  // TODO: We should probably emit a hotspotsChange event on the parent
  // HotspotContainer. What's the best way to do so?
};


/**
 * @return {Object}
 */
Hotspot.prototype.perspective = function() {
  return this._perspective;
};


/**
 * @param {Object}
 */
Hotspot.prototype.setPerspective = function(perspective) {
  for (var key in perspective) {
    this._perspective[key] = perspective[key];
  }
  this._update();
};


/**
 * Show the hotspot
 */
Hotspot.prototype.show = function() {
  if (!this._visible) {
    this._visible = true;
    this._update();
  }
};


/**
 * Hide the hotspot
 */
Hotspot.prototype.hide = function() {
  if (this._visible) {
    this._visible = false;
    this._update();
  }
};


Hotspot.prototype._update = function() {
  var element = this._domElement;

  var params = this._coords;
  var position = this._position;
  var x, y;

  var isVisible = false;

  if (this._visible) {
    var view = this._view;

    if (this._perspective.radius) {
      // Hotspots that are embedded in the panorama may be visible even when
      // positioned behind the camera.
      isVisible = true;
      this._setEmbeddedPosition(view, params);
    } else {
      // Regular hotspots are only visible when positioned in front of the
      // camera. Note that they may be partially visible when positioned outside
      // the viewport.
      view.coordinatesToScreen(params, position);
      x = position.x;
      y = position.y;

      if (x != null && y != null) {
        isVisible = true;
        this._setPosition(x, y);
      }
    }
  }

  // Show if visible, hide if not.
  if (isVisible) {
    element.style.display = 'block';
    element.style.position = 'absolute';
  }
  else {
    element.style.display = 'none';
    element.style.position = '';
  }

};


Hotspot.prototype._setEmbeddedPosition = function(view, params) {
  var transform = view.coordinatesToPerspectiveTransform(
      params, this._perspective.radius, this._perspective.extraTransforms);
  setTransform(this._domElement, transform);
};


Hotspot.prototype._setPosition = function(x, y) {
  positionAbsolutely(this._domElement, x, y, this._perspective.extraTransforms);
};


module.exports = Hotspot;


/***/ }),

/***/ "./node_modules/marzipano/src/HotspotContainer.js":
/*!********************************************************!*\
  !*** ./node_modules/marzipano/src/HotspotContainer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Hotspot = __webpack_require__(/*! ./Hotspot */ "./node_modules/marzipano/src/Hotspot.js");
var calcRect = __webpack_require__(/*! ./util/calcRect */ "./node_modules/marzipano/src/util/calcRect.js");
var cssPointerEventsSupported = __webpack_require__(/*! ./support/cssPointerEvents */ "./node_modules/marzipano/src/support/cssPointerEvents.js");
var positionAbsolutely = __webpack_require__(/*! ./util/positionAbsolutely */ "./node_modules/marzipano/src/util/positionAbsolutely.js");
var setAbsolute = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setAbsolute;
var setOverflowHidden = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setOverflowHidden;
var setOverflowVisible = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setOverflowVisible;
var setNullSize = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setNullSize;
var setPixelSize = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setPixelSize;
var setPointerEvents = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setWithVendorPrefix('pointer-events');
var clearOwnProperties = __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * Signals that a hotspot has been created or destroyed on the container.
 * @event HotspotContainer#hotspotsChange
 */

/**
 * @class HotspotContainer
 * @classdesc
 *
 * Creates a DOM element to hold {@link Hotspot hotspots} and updates their
 * position when necessary.
 *
 * @param {Element} parentDomElement The DOM element inside which the container
 *     should be created.
 * @param {Stage} stage The underlying stage.
 * @param {View} view The view according to which the hotspots are positioned.
 * @param {RenderLoop} renderLoop The render loop indicating when the hotspots
 *     must be rendered.
 * @param {Object} opts
 * @param {RectSpec} opts.rect Rectangular region covered by the container. See
 *    {@link Effects#rect}.
 */
function HotspotContainer(parentDomElement, stage, view, renderLoop, opts) {
  opts = opts || {};

  this._parentDomElement = parentDomElement;
  this._stage = stage;
  this._view = view;
  this._renderLoop = renderLoop;

  // Hotspot list.
  this._hotspots = [];

  // Whether the hotspot container should be visible.
  // It may still be hidden if a rect effect is set on a browser without
  // pointer-events support.
  this._visible = true;

  // The current rect.
  this._rect = opts.rect;

  // Whether the visibility or the rect have changed since the last DOM update.
  this._visibilityOrRectChanged = true;

  // The last seen stage dimensions.
  this._stageWidth = null;
  this._stageHeight = null;

  // Temporary variable to hold the calculated position and size.
  this._tmpRect = {};

  // Wrapper element. When the rect effect is set, the wrapper will have nonzero
  // dimensions and `pointer-events: none` so that hotspots outside the rect are
  // hidden, but no mouse events are hijacked. The exception is browsers without
  // pointer-events support, where we refuse to show the hotspots when a rect is
  // set as it would prevent the controls from receiving mouse events.
  this._hotspotContainerWrapper = document.createElement('div');
  setAbsolute(this._hotspotContainerWrapper);
  setPointerEvents(this._hotspotContainerWrapper, 'none');
  this._parentDomElement.appendChild(this._hotspotContainerWrapper);

  // Hotspot container element. It has zero dimensions and `pointer-events: all`
  // to override the `pointer-events: none` on the wrapper and allow hotspots to
  // be interacted with.
  this._hotspotContainer = document.createElement('div');
  setAbsolute(this._hotspotContainer);
  setPointerEvents(this._hotspotContainer, 'all');
  this._hotspotContainerWrapper.appendChild(this._hotspotContainer);

  // Update when the hotspots change or scene is re-rendered.
  this._updateHandler = this._update.bind(this);
  this._renderLoop.addEventListener('afterRender', this._updateHandler);
}

eventEmitter(HotspotContainer);


/**
 * Destructor.
 */
HotspotContainer.prototype.destroy = function() {
  while (this._hotspots.length) {
    this.destroyHotspot(this._hotspots[0]);
  }

  this._parentDomElement.removeChild(this._hotspotContainerWrapper);

  this._renderLoop.removeEventListener('afterRender', this._updateHandler);

  clearOwnProperties(this);
};


/**
 * @return {Element}
 */
HotspotContainer.prototype.domElement = function() {
  return this._hotspotContainer;
};


/**
 * @param {Rect} rect
 */
HotspotContainer.prototype.setRect = function(rect) {
  if (rect && !cssPointerEventsSupported() && typeof console !== 'undefined') {
    console.warn(
        "Using a rect effect is not fully supported on this browser. " +
        "Hotspots may not be shown.")
  }
  this._rect = rect;
  this._visibilityOrRectChanged = true;
};


/**
 * @return {Rect}
 */
HotspotContainer.prototype.rect = function() {
  return this._rect;
};


/**
 * Creates a new hotspot in this container.
 *
 * @param {Element} domElement DOM element to use for the hotspot
 * @param {Object} coords The hotspot coordinates.
 *     Use {@link RectilinearViewCoords}` for a {@link RectilinearView} or
 *     {@link FlatViewCoords} for a {@link FlatView}.
 * @param {Object} opts Options in the same format as the `opts` argument to
 *     the {@link Hotspot} constructor.
 * @return {Hotspot}
 */
HotspotContainer.prototype.createHotspot = function(domElement, coords, opts) {
  coords = coords || {};

  var hotspot = new Hotspot(
      domElement, this._hotspotContainer, this._view, coords, opts);
  this._hotspots.push(hotspot);
  hotspot._update();

  this.emit('hotspotsChange');

  return hotspot;
};


/**
 * @param {Hotspot} hotspot
 * @return {boolean}
 */
HotspotContainer.prototype.hasHotspot = function(hotspot) {
  return this._hotspots.indexOf(hotspot) >= 0;
};


/**
 * @return {Hotspot[]}
 */
HotspotContainer.prototype.listHotspots = function() {
  return [].concat(this._hotspots);
};


/**
 * Removes a hotspot from the container.
 *
 * @param {Hotspot} hotspot
 */
HotspotContainer.prototype.destroyHotspot = function(hotspot) {
  var i = this._hotspots.indexOf(hotspot);
  if (i < 0) {
    throw new Error('No such hotspot');
  }
  this._hotspots.splice(i, 1);

  hotspot.destroy();
  this.emit('hotspotsChange');
};


/**
 * Hide the container's DOM element, causing every contained {@link Hotspot} to
 * be hidden.
 */
HotspotContainer.prototype.hide = function() {
  if (this._visible) {
    this._visible = false;
    this._visibilityOrRectChanged = true;
    this._update();
  }
};


/**
 * Show the container's DOM element, causing every contained {@link Hotspot} to
 * be shown.
 */
HotspotContainer.prototype.show = function() {
  if (!this._visible) {
    this._visible = true;
    this._visibilityOrRectChanged = true;
    this._update();
  }
};


HotspotContainer.prototype._update = function() {
  var wrapper = this._hotspotContainerWrapper;
  var width = this._stage.width();
  var height = this._stage.height();
  var tmpRect = this._tmpRect;

  // Avoid updating the wrapper DOM unless necessary.
  if (this._visibilityOrRectChanged ||
      (this._rect && (width !== this._stageWidth || height !== this._stageHeight))) {
    var visible = this._visible && !(this._rect && !cssPointerEventsSupported());
    wrapper.style.display = visible ? 'block' : 'none';

    if (visible) {
      if (this._rect) {
        calcRect(width, height, this._rect, tmpRect);
        positionAbsolutely(wrapper, width * tmpRect.x, height * tmpRect.y);
        setPixelSize(wrapper, width * tmpRect.width, height * tmpRect.height);
        setOverflowHidden(wrapper);
      } else {
        positionAbsolutely(wrapper, 0, 0);
        setNullSize(wrapper);
        setOverflowVisible(wrapper);
      }
    }

    this._stageWidth = width;
    this._stageHeight = height;
    this._visibilityOrRectChanged = false;
  }

  // Update hotspots unconditionally, as the view parameters may have changed.
  for (var i = 0; i < this._hotspots.length; i++) {
    this._hotspots[i]._update();
  }
};


module.exports = HotspotContainer;


/***/ }),

/***/ "./node_modules/marzipano/src/Layer.js":
/*!*********************************************!*\
  !*** ./node_modules/marzipano/src/Layer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var extend = __webpack_require__(/*! ./util/extend */ "./node_modules/marzipano/src/util/extend.js");
var clearOwnProperties = __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * Signals that the layer has been rendered.
 *
 * @param {boolean} stable Whether all tiles were successfully rendered without
 *     missing textures or resorting to fallbacks.
 * @event Layer#renderComplete
 */

/**
 * @class Layer
 * @classdesc
 *
 * A Layer is a combination of {@link Source}, {@link Geometry}, {@link View}
 * and {@link TextureStore} that may be added into a {@link Stage} and rendered
 * with {@link Effects}.
 *
 * @param {Source} source
 * @param {Geometry} geometry
 * @param {View} view
 * @param {TextureStore} textureStore
 * @param {Object} opts
 * @param {Effects} opts.effects
*/
function Layer(source, geometry, view, textureStore, opts) {
  opts = opts || {};

  var self = this;

  this._source = source;
  this._geometry = geometry;
  this._view = view;
  this._textureStore = textureStore;

  this._effects = opts.effects || {};

  this._fixedLevelIndex = null;

  this._viewChangeHandler = function() {
    self.emit('viewChange', self.view());
  };

  this._view.addEventListener('change', this._viewChangeHandler);

  this._textureStoreChangeHandler = function() {
    self.emit('textureStoreChange', self.textureStore());
  };

  this._textureStore.addEventListener('textureLoad',
    this._textureStoreChangeHandler);
  this._textureStore.addEventListener('textureError',
    this._textureStoreChangeHandler);
  this._textureStore.addEventListener('textureInvalid',
    this._textureStoreChangeHandler);
}

eventEmitter(Layer);


/**
 * Destructor.
 */
Layer.prototype.destroy = function() {
  this._view.removeEventListener('change', this._viewChangeHandler);
  this._textureStore.removeEventListener('textureLoad',
    this._textureStoreChangeHandler);
  this._textureStore.removeEventListener('textureError',
    this._textureStoreChangeHandler);
  this._textureStore.removeEventListener('textureInvalid',
    this._textureStoreChangeHandler);
  clearOwnProperties(this);
};


/**
 * Returns the underlying {@link Source source}.
 * @return {Source}
 */
Layer.prototype.source = function() {
  return this._source;
};


/**
 * Returns the underlying {@link Geometry geometry}.
 * @return {Geometry}
 */
Layer.prototype.geometry = function() {
  return this._geometry;
};


/**
 * Returns the underlying {@link View view}.
 * @return {View}
 */
Layer.prototype.view = function() {
  return this._view;
};


/**
 * Returns the underlying {@link TextureStore texture store}.
 * @return {TextureStore}
 */
Layer.prototype.textureStore = function() {
  return this._textureStore;
};


/**
 * Returns the currently set {@link Effects effects}.
 * @return {Effects}
 */
Layer.prototype.effects = function() {
  return this._effects;
};


/**
 * Sets the {@link Effects effects}.
 * @param {Effects} effects
 */
Layer.prototype.setEffects = function(effects) {
  this._effects = effects;
  this.emit('effectsChange', this._effects);
};


/**
 * Merges effects into the currently set ones. The merge is non-recursive; for
 * instance, if current effects are `{ rect: { relativeWidth: 0.5 } }`,
 * calling this method with `{ rect: { relativeX: 0.5 }}` will reset
 * `rect.relativeWidth`.
 *
 * @param {Effects} effects
 */
Layer.prototype.mergeEffects = function(effects) {
  extend(this._effects, effects);
  this.emit('effectsChange', this._effects);
};


/**
 * Returns the fixed level index.
 * @return {(number|null)}
 */
Layer.prototype.fixedLevel = function() {
  return this._fixedLevelIndex;
};


/**
 * Sets the fixed level index. When set, the corresponding level will be
 * used regardless of the view parameters. Unset with a null argument.
 *
 * @param {(number|null)} levelIndex
 * @throws An error if the level index is out of range.
 */
Layer.prototype.setFixedLevel = function(levelIndex) {
  if (levelIndex !== this._fixedLevelIndex) {
    if (levelIndex != null && (levelIndex >= this._geometry.levelList.length ||
        levelIndex < 0)) {
      throw new Error("Level index out of range: " + levelIndex);
    }
    this._fixedLevelIndex = levelIndex;
    this.emit('fixedLevelChange', this._fixedLevelIndex);
  }
};


Layer.prototype._selectLevel = function() {
  var level;
  if (this._fixedLevelIndex != null) {
    level = this._geometry.levelList[this._fixedLevelIndex];
  } else {
    level = this._view.selectLevel(this._geometry.selectableLevelList);
  }
  return level;
};


Layer.prototype.visibleTiles = function(result) {
  var level = this._selectLevel();
  return this._geometry.visibleTiles(this._view, level, result);
};


/**
 * Pin a whole level into the texture store.
 * @param {Number} levelIndex
 */
Layer.prototype.pinLevel = function(levelIndex) {
  var level = this._geometry.levelList[levelIndex];
  var tiles = this._geometry.levelTiles(level);
  for (var i = 0; i < tiles.length; i++) {
    this._textureStore.pin(tiles[i]);
  }
};


/**
 * Unpin a whole level from the texture store.
 * @param {Number} levelIndex
 */
Layer.prototype.unpinLevel = function(levelIndex) {
  var level = this._geometry.levelList[levelIndex];
  var tiles = this._geometry.levelTiles(level);
  for (var i = 0; i < tiles.length; i++) {
    this._textureStore.unpin(tiles[i]);
  }
};


/**
 * Pin the first level. Equivalent to `pinLevel(0)`.
 */
Layer.prototype.pinFirstLevel = function() {
  return this.pinLevel(0);
};


/**
 * Unpin the first level. Equivalent to `unpinLevel(0)`.
 */
Layer.prototype.unpinFirstLevel = function() {
  return this.unpinLevel(0);
};


module.exports = Layer;


/***/ }),

/***/ "./node_modules/marzipano/src/NetworkError.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/NetworkError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var inherits = __webpack_require__(/*! ./util/inherits */ "./node_modules/marzipano/src/util/inherits.js");

/**
 * @class NetworkError
 * @extends {Error}
 * @classdesc
 *
 * Signals an error that occurred while fetching a URL. This is used by
 * {@link Loader loaders} to distinguish network failures from other errors.
 */
function NetworkError(message) {
  // See: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
  this.constructor.super_.apply(this, arguments);
  this.message = message;
}

inherits(NetworkError, Error);

module.exports = NetworkError;


/***/ }),

/***/ "./node_modules/marzipano/src/RenderLoop.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/RenderLoop.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var clearOwnProperties = __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * Signals that {@link Stage#render} is about to be called.
 * @event RenderLoop#beforeRender
 */

/**
 * Signals that {@link Stage#render} has just been called.
 * @event RenderLoop#afterRender
 */

/**
 * @class RenderLoop
 * @classdesc
 *
 * A RenderLoop wraps a {@link Stage} and calls {@link Stage#render} on the next
 * frame whenever it fires {@link Stage#renderInvalid}. It may be started and
 * stopped, and is initially in the stopped state, in which no call to
 * {@link Stage#render} occurs.
 *
 * @listens Stage#renderInvalid
 *
 * @param {Stage} stage
 */
function RenderLoop(stage) {

  var self = this;

  // The stage wrapped by the loop.
  this._stage = stage;

  // Whether the loop is running.
  this._running = false;

  // Whether the loop is currently rendering.
  this._rendering = false;

  // The current requestAnimationFrame handle.
  this._requestHandle = null;

  // The callback passed into requestAnimationFrame.
  this._boundLoop = this._loop.bind(this);

  // Handler for renderInvalid events emitted by the stage.
  this._renderInvalidHandler = function() {
    // If we are already rendering, there's no need to schedule a new render
    // on the next frame.
    if (!self._rendering) {
      self.renderOnNextFrame();
    }
  };

  // Handle renderInvalid events emitted by the stage.
  this._stage.addEventListener('renderInvalid', this._renderInvalidHandler);

}

eventEmitter(RenderLoop);


/**
 * Destructor.
 */
RenderLoop.prototype.destroy = function() {
  this.stop();
  this._stage.removeEventListener('renderInvalid', this._renderInvalidHandler);
  clearOwnProperties(this);
};


/**
 * Returns the underlying stage.
 * @return {Stage}
 */
RenderLoop.prototype.stage = function() {
  return this._stage;
};


/**
 * Starts the render loop.
 */
RenderLoop.prototype.start = function() {
  this._running = true;
  this.renderOnNextFrame();
};


/**
 * Stops the render loop.
 */
RenderLoop.prototype.stop = function() {
  if (this._requestHandle) {
    window.cancelAnimationFrame(this._requestHandle);
    this._requestHandle = null;
  }
  this._running = false;
};


/**
 * Forces the stage to render on the next frame, even if its contents remain
 * valid. Does nothing if the loop is stopped.
 */
RenderLoop.prototype.renderOnNextFrame = function() {
  if (this._running && !this._requestHandle) {
    this._requestHandle = window.requestAnimationFrame(this._boundLoop);
  }
};


RenderLoop.prototype._loop = function() {
  if (!this._running) {
    throw new Error('Render loop running while in stopped state');
  }
  this._requestHandle = null;
  this._rendering = true;
  this.emit('beforeRender');
  this._rendering = false;
  this._stage.render();
  this.emit('afterRender');
};


module.exports = RenderLoop;


/***/ }),

/***/ "./node_modules/marzipano/src/Scene.js":
/*!*********************************************!*\
  !*** ./node_modules/marzipano/src/Scene.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Layer = __webpack_require__(/*! ./Layer */ "./node_modules/marzipano/src/Layer.js");
var TextureStore = __webpack_require__(/*! ./TextureStore */ "./node_modules/marzipano/src/TextureStore.js");
var HotspotContainer = __webpack_require__(/*! ./HotspotContainer */ "./node_modules/marzipano/src/HotspotContainer.js");
var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var now = __webpack_require__(/*! ./util/now */ "./node_modules/marzipano/src/util/now.js");
var noop = __webpack_require__(/*! ./util/noop */ "./node_modules/marzipano/src/util/noop.js");
var type = __webpack_require__(/*! ./util/type */ "./node_modules/marzipano/src/util/type.js");
var defaults = __webpack_require__(/*! ./util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var clearOwnProperties = __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * Signals that the scene's view has changed. See {@link View#event:change}.
 * @event Scene#viewChange
 */

/**
 * Signals that the scene's layers have changed.
 * @event Scene#layerChange
 */

/**
 * @class Scene
 * @classdesc
 *
 * A Scene is a stack of {@link Layer layers} sharing the same {@link View view}
 * and {@link HotspotContainer hotspot container}. It belongs to the
 * {@link Viewer viewer} inside which it is displayed.
 *
 * Clients should call {@link Viewer#createScene} instead of invoking the
 * constructor directly.
 *
 * @param {Viewer} viewer The viewer this scene belongs to.
 * @param {View} view The scene's underlying view.
 */
function Scene(viewer, view) {
  this._viewer = viewer;
  this._view = view;
  this._layers = [];

  // Hotspot container. Assume it occupies a full rect.
  this._hotspotContainer = new HotspotContainer(
    viewer._controlContainer,
    viewer.stage(),
    this._view,
    viewer.renderLoop());

  // The current movement.
  this._movement = null;
  this._movementStartTime = null;
  this._movementStep = null;
  this._movementParams = null;
  this._movementCallback = null;

  // Event listener for updating the view according to the current movement.
  // The listener is set/unset on the render loop when a movement starts/stops.
  this._updateMovementHandler = this._updateMovement.bind(this);

  // Show or hide hotspots when scene changes.
  this._updateHotspotContainerHandler = this._updateHotspotContainer.bind(this);
  this._viewer.addEventListener('sceneChange', this._updateHotspotContainerHandler);

  // Emit event when view changes.
  this._viewChangeHandler = this.emit.bind(this, 'viewChange');
  this._view.addEventListener('change', this._viewChangeHandler);

  // Update the hotspot container.
  this._updateHotspotContainer();
}

eventEmitter(Scene);


/**
 * Destructor. Clients should call {@link Viewer#destroyScene} instead.
 */
Scene.prototype.destroy = function() {
  this._view.removeEventListener('change', this._viewChangeHandler);
  this._viewer.removeEventListener('sceneChange', this._updateHotspotContainerHandler);

  if (this._movement) {
    this.stopMovement();
  }

  this._hotspotContainer.destroy();

  this.destroyAllLayers();

  clearOwnProperties(this);
};



/**
 * Returns the {@link HotspotContainer hotspot container} for the scene.
 * @return {Layer}
 */
Scene.prototype.hotspotContainer = function() {
  return this._hotspotContainer;
};

/**
 * Returns the first of the {@link Layer layers} belonging to the scene, or
 * null if the scene has no layers.
 *
 * This method is equivalent to `Scene#listLayers[0]`. It may be removed in the
 * future.
 *
 * @return {Layer}
 */
Scene.prototype.layer = function() {
  return this._layers[0];
};

/**
* Returns a list of all {@link Layer layers} belonging to the scene. The
* returned list is in display order, background to foreground.
* @return {Layer[]}
 */
Scene.prototype.listLayers = function() {
  return [].concat(this._layers);
};


/**
 * Returns the scene's underlying {@link View view}.
 * @return {View}
 */
Scene.prototype.view = function() {
  return this._view;
};


/**
 * Returns the {@link Viewer viewer} the scene belongs to.
 * @return {Viewer}
 */
Scene.prototype.viewer = function() {
  return this._viewer;
};


/**
 * Returns whether the scene is currently visible.
 * @return {boolean}
 */
Scene.prototype.visible = function() {
  return this._viewer.scene() === this;
};


/**
 * Creates a new {@link Layer layer} and adds it into the scene in the
 * foreground position.
 *
 * @param {Object} opts Layer creation options.
 * @param {Source} opts.source The layer's underlying {@link Source}.
 * @param {Source} opts.geometry The layer's underlying {@link Geometry}.
 * @param {boolean} [opts.pinFirstLevel=false] Whether to pin the first level to
 *     provide a fallback of last resort, at the cost of memory consumption.
 * @param {Object} [opts.textureStoreOpts={}] Options to pass to the
 *     {@link TextureStore} constructor.
 * @param {Object} [opts.layerOpts={}] Options to pass to the {@link Layer}
 *     constructor.
 * @return {Layer}
 */
Scene.prototype.createLayer = function(opts) {
  opts = opts || {};

  var textureStoreOpts = opts.textureStoreOpts || {};
  var layerOpts = opts.layerOpts || {};

  var source = opts.source;
  var geometry = opts.geometry;
  var view = this._view;
  var stage = this._viewer.stage();
  var textureStore = new TextureStore(source, stage, textureStoreOpts);
  var layer = new Layer(source, geometry, view, textureStore, layerOpts);

  this._layers.push(layer);

  if (opts.pinFirstLevel) {
    layer.pinFirstLevel();
  }

  // Signal that the layers have changed.
  this.emit('layerChange');

  return layer;
};


/**
 * Destroys a {@link Layer layer} and removes it from the scene.
 * @param {Layer} layer
 * @throws An error if the layer does not belong to the scene.
 */
Scene.prototype.destroyLayer = function(layer) {
  var i = this._layers.indexOf(layer);
  if (i < 0) {
    throw new Error('No such layer in scene');
  }

  this._layers.splice(i, 1);

  // Signal that the layers have changed.
  this.emit('layerChange');

  layer.textureStore().destroy();
  layer.destroy();
};


/**
 * Destroys all {@link Layer layers} and removes them from the scene.
 */
Scene.prototype.destroyAllLayers = function() {
  while (this._layers.length > 0) {
    this.destroyLayer(this._layers[0]);
  }
};


/**
 * Switches to the scene.
 *
 * This is equivalent to calling {@link Viewer#switchScene} on this scene.
 *
 * @param {Object} opts Options to pass into {@link Viewer#switchScene}.
 * @param {function} done Function to call when the switch is complete.
 */
Scene.prototype.switchTo = function(opts, done) {
  return this._viewer.switchScene(this, opts, done);
};


/**
 * Tweens the scene's underlying {@link View view}.
 *
 * @param {Object} params Target view parameters.
 * @param {Object} opts Transition options.
 * @param {function} [opts.ease=easeInOutQuad] Tween easing function
 * @param {number} [opts.controlsInterrupt=false] allow controls to interrupt
 *     an ongoing tween.
 * @param {number} [opts.transitionDuration=1000] Tween duration, in
 *     milliseconds.
 * @param {number} [opts.closest=true] Whether to tween through the shortest
 *    path between the initial and final view parameters. This requires
 *    {@link View#normalizeToClosest} to be implemented, and does nothing
 *    otherwise.
 * @param {function} done Function to call when the tween finishes or is
 *    interrupted.
 */
Scene.prototype.lookTo = function(params, opts, done) {
  opts = opts || {};
  done = done || noop;

  if (type(params) !== 'object') {
    throw new Error("Target view parameters must be an object");
  }

  // Quadratic in/out easing.
  var easeInOutQuad = function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }
    return -0.5 * (--k * (k - 2) - 1);
  };

  var ease = opts.ease != null ? opts.ease : easeInOutQuad;
  var controlsInterrupt = opts.controlsInterrupt != null ? opts.controlsInterrupt : false;
  var duration = opts.transitionDuration != null ? opts.transitionDuration : 1000;
  var shortest = opts.shortest != null ? opts.shortest : true;

  var view = this._view;

  var initialParams = view.parameters();

  var finalParams = {};
  defaults(finalParams, params);
  defaults(finalParams, initialParams);

  // Tween through the shortest path if requested.
  // The view must implement the normalizeToClosest() method.
  if (shortest && view.normalizeToClosest) {
    view.normalizeToClosest(finalParams, finalParams);
  }

  var movement = function() {

    var finalUpdate = false;

    return function(params, elapsed) {

      if (elapsed >= duration && finalUpdate) {
        return null;
      }

      var delta = Math.min(elapsed / duration, 1);

      for (var param in params) {
        var start = initialParams[param];
        var end = finalParams[param];
        params[param] = start + ease(delta) * (end - start);
      }

      finalUpdate = elapsed >= duration;

      return params;

    };
  };

  var reenableControls = this._viewer.controls().enabled();

  if (!controlsInterrupt) {
    this._viewer.controls().disable();
  }

  this.startMovement(movement, function() {
    if (reenableControls) {
      this._viewer.controls().enable();
    }
    done();
  });

};


/**
 * Starts a movement, possibly replacing the current movement.
 *
 * @param {function} fn The movement function.
 * @param {function} done Function to be called when the movement finishes or is
 *     interrupted.
 */
Scene.prototype.startMovement = function(fn, done) {

  var renderLoop = this._viewer.renderLoop();

  if (this._movement) {
    this.stopMovement();
  }

  var step = fn();
  if (typeof step !== 'function') {
    throw new Error('Bad movement');
  }

  this._movement = fn;
  this._movementStep = step;
  this._movementStartTime = now();
  this._movementParams = {};
  this._movementCallback = done;

  renderLoop.addEventListener('beforeRender', this._updateMovementHandler);
  renderLoop.renderOnNextFrame();
};


/**
 * Stops the current movement.
 */
Scene.prototype.stopMovement = function() {

  var renderLoop = this._viewer.renderLoop();

  if (!this._movement) {
    return;
  }

  if (this._movementCallback) {
    this._movementCallback();
  }

  renderLoop.removeEventListener('beforeRender', this._updateMovementHandler);

  this._movement = null;
  this._movementStep = null;
  this._movementStartTime = null;
  this._movementParams = null;
  this._movementCallback = null;
};


/**
 * Returns the current movement.
 * @return {function}
 */
Scene.prototype.movement = function() {
  return this._movement;
};


Scene.prototype._updateMovement = function() {

  if (!this._movement) {
    throw new Error('Should not call update');
  }

  var renderLoop = this._viewer.renderLoop();
  var view = this._view;

  var elapsed = now() - this._movementStartTime;
  var step = this._movementStep;
  var params = this._movementParams;

  params = view.parameters(params);
  params = step(params, elapsed);
  if (params == null) {
    this.stopMovement();
  } else {
    view.setParameters(params);
    renderLoop.renderOnNextFrame();
  }

};


Scene.prototype._updateHotspotContainer = function() {
  if (this.visible()) {
    this._hotspotContainer.show();
  } else {
    this._hotspotContainer.hide();
  }
};


module.exports = Scene;


/***/ }),

/***/ "./node_modules/marzipano/src/TextureStore.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/TextureStore.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Map = __webpack_require__(/*! ./collections/Map */ "./node_modules/marzipano/src/collections/Map.js");
var Set = __webpack_require__(/*! ./collections/Set */ "./node_modules/marzipano/src/collections/Set.js");
var LruSet = __webpack_require__(/*! ./collections/LruSet */ "./node_modules/marzipano/src/collections/LruSet.js");
var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var defaults = __webpack_require__(/*! ./util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var retry = __webpack_require__(/*! ./util/retry */ "./node_modules/marzipano/src/util/retry.js");
var chain = __webpack_require__(/*! ./util/chain */ "./node_modules/marzipano/src/util/chain.js");
var inherits = __webpack_require__(/*! ./util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var clearOwnProperties = __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var debug = typeof MARZIPANODEBUG !== 'undefined' && MARZIPANODEBUG.textureStore;


// A Stage informs the TextureStore about the set of visible tiles during a
// frame by calling startFrame, markTile and endFrame. In a particular frame,
// TextureStore expects one or more calls to startFrame, followed by zero or
// more calls to markTile, followed by one or more calls to endFrame. The
// number of calls to startFrame and endFrame must match. Calls to other
// TextureStore methods may be freely interleaved with this sequence.
//
// At any given time, TextureStore is in one of four states. The START state
// corresponds to the interval between the first startFrame and the first
// markTile of a frame. The MARK state corresponds to the interval between the
// first markTile and the first endFrame. The END state corresponds to the
// interval between the first and the last endFrame. At any other time, the
// TextureStore is in the IDLE state.
var State = {
  IDLE: 0,
  START: 1,
  MARK: 2,
  END: 3
};


var defaultOptions = {
  // Maximum number of cached textures for previously visible tiles.
  previouslyVisibleCacheSize: 512
};


// Assign an id to each operation so we can track its state.
// We actually only need this in debug mode, but the code is less convoluted
// if we track unconditionally, and the performance hit is minimal anyway.
var nextId = 0;


// Distinguishes a cancellation from other kinds of errors.
function CancelError() {}
inherits(CancelError, Error);


/**
 * @class TextureStoreItem
 * @classdesc
 *
 * An item saved in a {@link TextureStore}.
 *
 * Clients do not need to instantiate this. It is automatically instantiated by
 * a {@link TextureStore} to manage the lifetime of a stored item: loading,
 * refreshing, unloading and emitting associated events.
 *
 * @param {TextureStore} store The underlying {@link TextureStore}.
 * @param {Tile} tile The underlying tile.
 */
function TextureStoreItem(store, tile) {

  var self = this;

  var id = nextId++;

  self._id = id;
  self._store = store;
  self._tile = tile;

  self._asset = null;
  self._texture = null;

  self._changeHandler = function() {
    store.emit('textureInvalid', tile);
  };

  var source = store.source();
  var stage = store.stage();

  var loadAsset = source.loadAsset.bind(source);
  var createTexture = stage.createTexture.bind(stage);

  // Retry loading the asset until it succeeds, then create the texture from it.
  // This process may be canceled at any point by calling the destroy() method.
  var fn = chain(retry(loadAsset), createTexture);

  store.emit('textureStartLoad', tile);
  if (debug) {
    console.log('loading', id, tile);
  }

  self._cancel = fn(stage, tile, function(err, _tile, asset, texture) {

    // Make sure we do not call cancel after the operation is complete.
    self._cancel = null;

    if (err) {
      // The loading process was interrupted by an error.
      // This could either be because the texture creation failed, or because
      // the operation was canceled before the loading was complete.

      // Destroy the asset and texture, if they exist.
      if (asset) {
        asset.destroy();
      }
      if (texture) {
        texture.destroy();
      }

      // Emit events.
      if (err instanceof CancelError) {
        store.emit('textureCancel', tile);
        if (debug) {
          console.log('cancel', id, tile);
        }
      } else {
        store.emit('textureError', tile, err);
        if (debug) {
          console.log('error', id, tile);
        }
      }

      return;
    }

    // Save a local reference to the texture.
    self._texture = texture;

    // If the asset is dynamic, save a local reference to it and set up a
    // handler to be called whenever it changes. Otherwise, destroy the asset
    // as we won't be needing it any longer.
    if (asset.isDynamic()) {
      self._asset = asset;
      asset.addEventListener('change', self._changeHandler);
    } else {
      asset.destroy();
    }

    // Emit event.
    store.emit('textureLoad', tile);
    if (debug) {
      console.log('load', id, tile);
    }
  });

}


TextureStoreItem.prototype.asset = function() {
  return this._asset;
};


TextureStoreItem.prototype.texture = function() {
  return this._texture;
};


TextureStoreItem.prototype.destroy = function() {
  var id = this._id;
  var store = this._store;
  var tile = this._tile;
  var asset = this._asset;
  var texture = this._texture;
  var cancel = this._cancel;

  if (cancel) {
    // The texture is still loading, so cancel it.
    cancel(new CancelError('Texture load cancelled'));
    return;
  }

  // Destroy asset.
  if (asset) {
    asset.removeEventListener('change', this._changeHandler);
    asset.destroy();
  }

  // Destroy texture.
  if (texture) {
    texture.destroy();
  }

  // Emit event.
  store.emit('textureUnload', tile);
  if (debug) {
    console.log('unload', id, tile);
  }

  clearOwnProperties(this);
};

eventEmitter(TextureStoreItem);

/**
 * Signals that a texture has started to load.
 *
 * This event is followed by either {@link TextureStore#textureLoad},
 * {@link TextureStore#textureError} or {@link TextureStore#textureCancel}.
 *
 * @event TextureStore#textureStartLoad
 * @param {Tile} tile The tile for which the texture has started to load.
 */

/**
 * Signals that a texture has been loaded.
 *
 * @event TextureStore#textureLoad
 * @param {Tile} tile The tile for which the texture was loaded.
 */

/**
 * Signals that a texture has been unloaded.
 *
 * @event TextureStore#textureUnload
 * @param {Tile} tile The tile for which the texture was unloaded.
 */

/**
 * Signals that a texture has been invalidated.
 *
 * This event may be raised for a texture with an underlying dynamic asset. It
 * may only occur while the texture is loaded, i.e., in between
 * {@link TextureStore#textureLoad} and {@link TextureStore#textureUnload}.
 *
 * @event TextureStore#textureInvalid
 * @param {Tile} tile The tile for which the texture was invalidated.
 */

/**
 * Signals that loading a texture has been cancelled.
 *
 * This event may follow {@link TextureStore#textureStartLoad} if the texture
 * becomes unnecessary before it finishes loading.
 *
 * @event TextureStore#textureCancel
 * @param {Tile} tile The tile for which the texture loading was cancelled.
 */

/**
 * Signals that loading a texture has failed.
 *
 * This event may follow {@link TextureStore#textureStartLoad} if the texture
 * fails to load.
 *
 * @event TextureStore#textureError
 * @param {Tile} tile The tile for which the texture loading has failed.
 */

/**
 * @class TextureStore
 * @classdesc
 *
 * A TextureStore maintains a cache of textures used to render a {@link Layer}.
 *
 * A {@link Stage} communicates with the TextureStore through the startFrame(),
 * markTile() and endFrame() methods, which indicate the tiles that are visible
 * in the current frame. Textures for visible tiles are loaded and retained
 * as long as the tiles remain visible. A limited amount of textures whose
 * tiles were previously visible are cached according to an LRU policy. Tiles
 * may be pinned to keep their respective textures cached even when they are
 * invisible; these textures do not count towards the previously visible limit.
 *
 * Multiple layers belonging to the same underlying {@link WebGlStage} may
 * share the same TextureStore. Layers belonging to distinct {@link WebGlStage}
 * instances, or belonging to a {@link CssStage} or a {@link FlashStage},
 * may not do so due to restrictions on the use of textures across stages.
 *
 * @param {Source} source The underlying source.
 * @param {Stage} stage The underlying stage.
 * @param {Object} opts Options.
 * @param {Number} [opts.previouslyVisibleCacheSize=32] The maximum number of
 *     previously visible textures to cache according to an LRU policy.
 */
function TextureStore(source, stage, opts) {
  opts = defaults(opts || {}, defaultOptions);

  this._source = source;
  this._stage = stage;

  // The current state.
  this._state = State.IDLE;

  // The number of startFrame calls yet to be matched by endFrame calls during
  // the current frame.
  this._delimCount = 0;

  // The cache proper: map cached tiles to their respective textures/assets.
  this._itemMap = new Map();

  // The subset of cached tiles that are currently visible.
  this._visible = new Set();

  // The subset of cached tiles that were visible recently, but are not
  // visible right now. Newly inserted tiles replace older ones.
  this._previouslyVisible = new LruSet(opts.previouslyVisibleCacheSize);

  // The subset of cached tiles that should never be evicted from the cache.
  // A tile may be pinned more than once; map each tile into a reference count.
  this._pinMap = new Map();

  // Temporary variables.
  this._newVisible = new Set();
  this._noLongerVisible = [];
  this._visibleAgain = [];
  this._evicted = [];
}

eventEmitter(TextureStore);


/**
 * Destructor.
 */
TextureStore.prototype.destroy = function() {
  this.clear();
  clearOwnProperties(this);
};


/**
 * Return the underlying {@link Stage}.
 * @return {Stage}
 */
TextureStore.prototype.stage = function() {
  return this._stage;
};


/**
 * Return the underlying {@link Source}.
 * @return {Source}
 */
TextureStore.prototype.source = function() {
  return this._source;
};


/**
 * Remove all textures from the TextureStore, including pinned textures.
 */
TextureStore.prototype.clear = function() {
  var self = this;

  // Collect list of tiles to be evicted.
  self._evicted.length = 0;
  self._itemMap.forEach(function(tile) {
    self._evicted.push(tile);
  });

  // Evict tiles.
  self._evicted.forEach(function(tile) {
    self._unloadTile(tile);
  });

  // Clear all internal state.
  self._itemMap.clear();
  self._visible.clear();
  self._previouslyVisible.clear();
  self._pinMap.clear();
  self._newVisible.clear();
  self._noLongerVisible.length = 0;
  self._visibleAgain.length = 0;
  self._evicted.length = 0;
};


/**
 * Remove all textures in the TextureStore, excluding unpinned textures.
 */
TextureStore.prototype.clearNotPinned = function() {
  var self = this;

  // Collect list of tiles to be evicted.
  self._evicted.length = 0;
  self._itemMap.forEach(function(tile) {
    if (!self._pinMap.has(tile)) {
      self._evicted.push(tile);
    }
  });

  // Evict tiles.
  self._evicted.forEach(function(tile) {
    self._unloadTile(tile);
  });

  // Clear all caches except the pinned set.
  self._visible.clear();
  self._previouslyVisible.clear();

  // Clear temporary variables.
  self._evicted.length = 0;
};


/**
 * Signal the beginning of a frame. Called from {@link Stage}.
 */
TextureStore.prototype.startFrame = function() {
  // Check that we are in an appropriate state.
  if (this._state !== State.IDLE && this._state !== State.START) {
    throw new Error('TextureStore: startFrame called out of sequence');
  }

  // Enter the START state, if not already there.
  this._state = State.START;

  // Expect one more endFrame call.
  this._delimCount++;
};


/**
 * Mark a tile as visible within the current frame. Called from {@link Stage}.
 * @param {Tile} tile The tile to mark.
 */
TextureStore.prototype.markTile = function(tile) {
  // Check that we are in an appropriate state.
  if (this._state !== State.START && this._state !== State.MARK) {
    throw new Error('TextureStore: markTile called out of sequence');
  }

  // Enter the MARK state, if not already there.
  this._state = State.MARK;

  // Refresh texture for dynamic assets.
  var item = this._itemMap.get(tile);
  var texture = item && item.texture();
  var asset = item && item.asset();
  if (texture && asset) {
    texture.refresh(tile, asset);
  }

  // Add tile to the visible set.
  this._newVisible.add(tile);
};


/**
 * Signal the end of a frame. Called from {@link Stage}.
 */
TextureStore.prototype.endFrame = function() {
  // Check that we are in an appropriate state.
  if (this._state !== State.START && this._state !== State.MARK && this._state !== State.END) {
    throw new Error('TextureStore: endFrame called out of sequence');
  }

  // Enter the END state, if not already there.
  this._state = State.END;

  // Expect one less call to endFrame.
  this._delimCount--;

  // If no further calls are expected, process frame and enter the IDLE state.
  if (!this._delimCount) {
    this._update();
    this._state = State.IDLE;
  }
};


TextureStore.prototype._update = function() {
  var self = this;

  // Calculate the set of tiles that used to be visible but no longer are.
  self._noLongerVisible.length = 0;
  self._visible.forEach(function(tile) {
    if (!self._newVisible.has(tile)) {
      self._noLongerVisible.push(tile);
    }
  });

  // Calculate the set of tiles that were visible recently and have become
  // visible again.
  self._visibleAgain.length = 0;
  self._newVisible.forEach(function(tile) {
    if (self._previouslyVisible.has(tile)) {
      self._visibleAgain.push(tile);
    }
  });

  // Remove tiles that have become visible again from the list of previously
  // visible tiles.
  self._visibleAgain.forEach(function(tile) {
    self._previouslyVisible.remove(tile);
  });

  // Cancel loading of tiles that are no longer visible.
  // Move no longer visible tiles with a loaded texture into the previously
  // visible set, and collect the tiles evicted from the latter.
  self._evicted.length = 0;
  self._noLongerVisible.forEach(function(tile) {
    var item = self._itemMap.get(tile);
    var texture = item && item.texture();
    if (texture) {
      var otherTile = self._previouslyVisible.add(tile);
      if (otherTile != null) {
        self._evicted.push(otherTile);
      }
    } else if (item) {
      self._unloadTile(tile);
    }
  });

  // Unload evicted tiles, unless they are pinned.
  self._evicted.forEach(function(tile) {
    if (!self._pinMap.has(tile)) {
      self._unloadTile(tile);
    }
  });

  // Load visible tiles that are not already in the store.
  // Refresh texture on visible tiles for dynamic assets.
  self._newVisible.forEach(function(tile) {
    var item = self._itemMap.get(tile);
    if (!item) {
      self._loadTile(tile);
    }
  });

  // Swap the old visible set with the new one.
  var tmp = self._visible;
  self._visible = self._newVisible;
  self._newVisible = tmp;

  // Clear the new visible set.
  self._newVisible.clear();

  // Clear temporary variables.
  self._noLongerVisible.length = 0;
  self._visibleAgain.length = 0;
  self._evicted.length = 0;
};


TextureStore.prototype._loadTile = function(tile) {
  if (this._itemMap.has(tile)) {
    throw new Error('TextureStore: loading texture already in cache');
  }
  var item = new TextureStoreItem(this, tile);
  this._itemMap.set(tile, item);
};


TextureStore.prototype._unloadTile = function(tile) {
  var item = this._itemMap.del(tile);
  if (!item) {
    throw new Error('TextureStore: unloading texture not in cache');
  }
  item.destroy();
};


TextureStore.prototype.asset = function(tile) {
  var item = this._itemMap.get(tile);
  if (item) {
    return item.asset();
  }
  return null;
};


TextureStore.prototype.texture = function(tile) {
  var item = this._itemMap.get(tile);
  if (item) {
    return item.texture();
  }
  return null;
};


/**
 * Pin a tile. Textures for pinned tiles are never evicted from the store.
 * Upon pinning, the texture is created if not already present. Pins are
 * reference-counted; a tile may be pinned multiple times and must be unpinned
 * the corresponding number of times. Pinning is useful e.g. to ensure that
 * the lowest-resolution level of an image is always available to fall back
 * onto.
 * @param {Tile} tile the tile to pin
 * @returns {number} the pin reference count.
 */
TextureStore.prototype.pin = function(tile) {
  // Increment reference count.
  var count = (this._pinMap.get(tile) || 0) + 1;
  this._pinMap.set(tile, count);
  // If the texture for the tile is not present, load it now.
  if (!this._itemMap.has(tile)) {
    this._loadTile(tile);
  }
  return count;
};


/**
 * Unpin a tile. Pins are reference-counted; a tile may be pinned multiple
 * times and must be unpinned the corresponding number of times.
 * @param {Tile} tile the tile to unpin
 * @returns {number} the pin reference count.
 */
TextureStore.prototype.unpin = function(tile) {
  var count = this._pinMap.get(tile);
  // Consistency check.
  if (!count) {
    throw new Error('TextureStore: unpin when not pinned');
  } else {
    // Decrement reference count.
    count--;
    if (count > 0) {
      this._pinMap.set(tile, count);
    } else {
      this._pinMap.del(tile);
      // If the tile does not belong to either the visible or previously
      // visible sets, evict it from the cache.
      if (!this._visible.has(tile) && !this._previouslyVisible.has(tile)) {
        this._unloadTile(tile);
      }
    }
  }
  return count;
};


/**
 * Return type for {@link TextureStore#query}.
 * @typedef {Object} TileState
 * @property {boolean} visible Whether the tile is in the visible set.
 * @property {boolean} previouslyVisible Whether the tile is in the previously
 *     visible set.
 * @property {boolean} hasAsset Whether the asset for the tile is present.
 * @property {boolean} hasTexture Whether the texture for the tile is present.
 * @property {boolean} pinned Whether the tile is in the pinned set.
 * @property {number} pinCount The pin reference count for the tile.
 */


/**
 * Return the state of a tile.
 * @param {Tile} tile The tile to query.
 * @return {TileState}
 */
TextureStore.prototype.query = function(tile) {
  var item = this._itemMap.get(tile);
  var pinCount = this._pinMap.get(tile) || 0;
  return {
    visible: this._visible.has(tile),
    previouslyVisible: this._previouslyVisible.has(tile),
    hasAsset: item != null && item.asset() != null,
    hasTexture: item != null && item.texture() != null,
    pinned: pinCount !== 0,
    pinCount: pinCount
  };
};


module.exports = TextureStore;


/***/ }),

/***/ "./node_modules/marzipano/src/TileSearcher.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/TileSearcher.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Set = __webpack_require__(/*! ./collections/Set */ "./node_modules/marzipano/src/collections/Set.js");

/**
 * @class TileSearcher
 * @classdesc
 *
 * A TileSearcher performs searches for visible tiles.
 */
function TileSearcher() {
  // Stack of tiles to be explored.
  this._stack = [];

  // Set of already explored tiles.
  this._visited = new Set();

  // Tile vertices. Allocated by Tile#vertices on first use.
  this._vertices = null;
}

/**
 * Performs a search for visible tiles by starting at a given tile and
 * recursively exploring neighbors until no more visible tiles are found.
 *
 * @param {View} view The view used to deem whether a tile is visible.
 * @param {Tile} tile The starting tile.
 * @param {Tile[]} result An array to append the visible tiles to, including the
 *     starting tile when visible. Existing array members are preserved.
 * @return {number} The number of visible tiles found.
 */
TileSearcher.prototype.search = function(view, startingTile, result) {
  var stack = this._stack;
  var visited = this._visited;
  var vertices = this._vertices;

  var count = 0;

  // Clear internal state.
  this._clear();

  stack.push(startingTile);

  while (stack.length > 0) {
    var tile = stack.pop();

    if (visited.has(tile)) {
      // Skip already visited tile.
      continue;
    }

    if (!view.intersects(tile.vertices(vertices))) {
      // Skip non-visible tile.
      continue;
    }

    // Mark tile as visited.
    visited.add(tile);

    // Add neighbors to the stack of tiles to explore.
    var neighbors = tile.neighbors();
    for (var i = 0; i < neighbors.length; i++) {
      stack.push(neighbors[i]);
    }

    // Add to result.
    result.push(tile);

    count++;
  }

  // Reuse the vertices array in future searches.
  this._vertices = vertices;

  // Clear internal state.
  this._clear();

  return count;
};

TileSearcher.prototype._clear = function() {
  this._stack.length = 0;
  this._visited.clear();
};

module.exports = TileSearcher;


/***/ }),

/***/ "./node_modules/marzipano/src/Timer.js":
/*!*********************************************!*\
  !*** ./node_modules/marzipano/src/Timer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var defaults = __webpack_require__(/*! ./util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var now = __webpack_require__(/*! ./util/now */ "./node_modules/marzipano/src/util/now.js");

var defaultOptions = {
  duration: Infinity
};


/**
 * Signals a timeout.
 * @event Timer#timeout
 */


/**
 * @class Timer
 * @classdesc
 *
 * A Timer provides a mechanism to receive an event after a timeout.
 *
 * A timer has a set duration, and is either started or stopped at a given time.
 * The timer is initially stopped. When the timer is started, a timeout event is
 * scheduled to fire once the set duration elapses. When the timer is stopped,
 * the scheduled timeout event is cancelled. When a timeout event fires, the
 * timer returns to the stopped state.
 *
 * @param {number} [opts.duration=Infinity] Timeout in milliseconds.
 */
function Timer(opts) {

  opts = defaults(opts || {}, defaultOptions);

  this._duration = opts.duration;

  this._startTime = null;

  this._handle = null;

  this._check = this._check.bind(this);

}

eventEmitter(Timer);


/**
 * Starts the timer. If the timer is already started, this has the effect of
 * stopping and starting again (i.e. resetting the timer).
 */
Timer.prototype.start = function() {
  this._startTime = now();
  if (this._handle == null && this._duration < Infinity) {
    this._setup(this._duration);
  }
};


/**
 * Returns whether the timer is in the started state.
 * @return {boolean}
 */
Timer.prototype.started = function() {
  return this._startTime != null;
};


/**
 * Stops the timer.
 */
Timer.prototype.stop = function() {
  this._startTime = null;
  if (this._handle != null) {
    clearTimeout(this._handle);
    this._handle = null;
  }
};


Timer.prototype._setup = function(interval) {
  this._handle = setTimeout(this._check, interval);
};


Timer.prototype._teardown = function() {
  clearTimeout(this._handle);
  this._handle = null;
};


Timer.prototype._check = function() {
  var currentTime = now();
  var elapsed = currentTime - this._startTime;
  var remaining = this._duration - elapsed;

  this._teardown();

  if (remaining <= 0) {
    this.emit('timeout');
    this._startTime = null;
  } else if (remaining < Infinity) {
    this._setup(remaining);
  }
};


/**
 * Returns the currently set duration.
 */
Timer.prototype.duration = function() {
  return this._duration;
};


/**
 * Sets the duration. If the timer is already started, the timeout event is
 * rescheduled to occur once the new duration has elapsed since the last call
 * to start. In particular, if an amount of time larger than the new duration
 * has already elapsed, the timeout event fires immediately.
 * @param {number}
 */
Timer.prototype.setDuration = function(duration) {
  this._duration = duration;
  if (this._startTime != null) {
    this._check();
  }
};


module.exports = Timer;


/***/ }),

/***/ "./node_modules/marzipano/src/Viewer.js":
/*!**********************************************!*\
  !*** ./node_modules/marzipano/src/Viewer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var browser = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");

var RenderLoop = __webpack_require__(/*! ./RenderLoop */ "./node_modules/marzipano/src/RenderLoop.js");
var Controls = __webpack_require__(/*! ./controls/Controls */ "./node_modules/marzipano/src/controls/Controls.js");
var Scene = __webpack_require__(/*! ./Scene */ "./node_modules/marzipano/src/Scene.js");
var Timer = __webpack_require__(/*! ./Timer */ "./node_modules/marzipano/src/Timer.js");

var WebGlStage = __webpack_require__(/*! ./stages/WebGl */ "./node_modules/marzipano/src/stages/WebGl.js");
var CssStage = __webpack_require__(/*! ./stages/Css */ "./node_modules/marzipano/src/stages/Css.js");
var FlashStage = __webpack_require__(/*! ./stages/Flash */ "./node_modules/marzipano/src/stages/Flash.js");

var ControlCursor = __webpack_require__(/*! ./controls/ControlCursor */ "./node_modules/marzipano/src/controls/ControlCursor.js");
var HammerGestures = __webpack_require__(/*! ./controls/HammerGestures */ "./node_modules/marzipano/src/controls/HammerGestures.js");

var registerDefaultControls = __webpack_require__(/*! ./controls/registerDefaultControls */ "./node_modules/marzipano/src/controls/registerDefaultControls.js");
var registerDefaultRenderers = __webpack_require__(/*! ./renderers/registerDefaultRenderers */ "./node_modules/marzipano/src/renderers/registerDefaultRenderers.js");

var setOverflowHidden = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setOverflowHidden;
var setAbsolute = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setAbsolute;
var setFullSize = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setFullSize;
var setBlocking = __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js").setBlocking;

var tween = __webpack_require__(/*! ./util/tween */ "./node_modules/marzipano/src/util/tween.js");
var noop = __webpack_require__(/*! ./util/noop */ "./node_modules/marzipano/src/util/noop.js");
var clearOwnProperties = __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var stageMap = {
  webgl: WebGlStage,
  css: CssStage,
  flash: FlashStage
};

var stagePrefList = [
  WebGlStage,
  CssStage,
  FlashStage
];

/**
 * Signals that the current scene has changed.
 * @event Viewer#sceneChange
 */

/**
 * Signals that the view of the current scene has changed. See
 * {@link View#event:change}.
 * @event Viewer#viewChange
 */

/**
 * @class Viewer
 * @classdesc
 *
 * A Viewer is a container for multiple {@link Scene scenes} to be displayed
 * inside a {@link Stage stage} contained in the DOM.
 *
 * Scenes may be created by calling {@link Viewer#createScene}. Except during a
 * scene switch, a single one of them, called the current scene, is visible.
 * Calling {@link Viewer#switchScene} sets the current scene and switches to it.
 *
 * @param {Element} domElement The DOM element to contain the stage.
 * @param {Object} opts Viewer creation options.
 * @param {(null|'webgl'|'css'|'flash')} [opts.stageType=null] The type of stage
 *     to create. The default is to choose the most appropriate type depending
 *     on the browser capabilities.
 * @param {Object} opts.controls Options to be passed to
 *     {@link registerDefaultControls}.
 * @param {Object} opts.stage Options to be passed to the {@link Stage}
 *     constructor.
 * @param {Object} opts.cursors Cursor options.
 * @param {Object} opts.cursors.drag Drag cursor options to be passed to the
 *     {@link ControlCursor} constructor.
 */
function Viewer(domElement, opts) {
  opts = opts || {};

  this._domElement = domElement;

  // Add `overflow: hidden` to the domElement.
  setOverflowHidden(domElement);

  // Select the stage type to use.
  var Stage;
  if (opts.stageType) {
    // If a specific stage type was specified, use that one.
    Stage = stageMap[opts.stageType];
    if (!Stage) {
      throw new Error('Unknown stage type: ' + opts.stageType);
    }
  } else {
    // Choose the best supported stage according to the default preference
    // order. Note that this may yield an unsupported stage for some
    // geometry/view combinations. Client code is expected to pass in a
    // specific stage type in those cases.
    for (var i = 0; i < stagePrefList.length; i++) {
      if (stagePrefList[i].supported()) {
        Stage = stagePrefList[i];
        break;
      }
    }
    if (!Stage) {
      throw new Error('None of the stage types are supported');
    }
  }

  // Create stage.
  this._stage = new Stage(opts.stage);

  // Register the default renderers for the selected stage.
  registerDefaultRenderers(this._stage);

  // Add the stage element into the DOM.
  this._domElement.appendChild(this._stage.domElement());

  // Create control container.
  // Controls cannot be placed directly on the root DOM element because
  // Hammer.js will prevent click events from reaching the elements beneath.

  // The hotspot containers will be added inside the controls container.
  this._controlContainer = document.createElement('div');
  setAbsolute(this._controlContainer);
  setFullSize(this._controlContainer);

  // Prevent bounce scroll effect on iOS.
  // Applied only for iOS, as Android's events must have the default action to allow interaction with hotspots.
  if (browser.ios) {
    this._controlContainer.addEventListener('touchmove', function(event) {
      event.preventDefault();
    });
  }


  // Old IE does not detect mouse events on elements without background
  // Add a child element to the controls with full width, a background color
  // and opacity 0
  var controlCapture = document.createElement('div');
  setAbsolute(controlCapture);
  setFullSize(controlCapture);
  setBlocking(controlCapture);

  this._controlContainer.appendChild(controlCapture);
  domElement.appendChild(this._controlContainer);

  // Respond to window size changes.
  this._size = {};
  this.updateSize();
  this._updateSizeListener = this.updateSize.bind(this);
  window.addEventListener('resize', this._updateSizeListener);

  // Create render loop.
  this._renderLoop = new RenderLoop(this._stage);

  // Create the controls and register them with the render loop.
  this._controls = new Controls();
  this._controlMethods = registerDefaultControls(this._controls, this._controlContainer, opts.controls);
  this._controls.attach(this._renderLoop);

  // Expose HammerJS.
  this._hammerManagerTouch = HammerGestures.get(this._controlContainer, 'touch');
  this._hammerManagerMouse = HammerGestures.get(this._controlContainer, 'mouse');

  // Initialize drag cursor.
  this._dragCursor = new ControlCursor(this._controls, 'mouseViewDrag', domElement, opts.cursors && opts.cursors.drag || {});

  // Start the render loop.
  this._renderLoop.start();

  // Scene list.
  this._scenes = [];

  // The currently visible scene.
  // During a scene transition, this is the scene being switched to.
  this._currentScene = null;

  // The scene being switched from during a scene transition.
  // This is necessary to update the layers correctly when they are added or
  // removed during a transition.
  this._replacedScene = null;

  // The current transition.
  this._cancelCurrentTween = null;

  // The event listener fired when the current scene layers change.
  // This is attached to the correct scene whenever the current scene changes.
  this._layerChangeHandler = this._updateSceneLayers.bind(this);

  // The event listener fired when the current scene view changes.
  // This is attached to the correct scene whenever the current scene changes.
  this._viewChangeHandler = this.emit.bind(this, 'viewChange');

  // Setup the idle timer.
  // By default, the timer has an infinite duration so it does nothing.
  this._idleTimer = new Timer();
  this._idleTimer.start();

  // Reset the timer whenever the view changes.
  this._resetIdleTimerHandler = this._resetIdleTimer.bind(this);
  this.addEventListener('viewChange', this._resetIdleTimerHandler);

  // Start the idle movement when the idle timer fires.
  this._triggerIdleTimerHandler = this._triggerIdleTimer.bind(this);
  this._idleTimer.addEventListener('timeout', this._triggerIdleTimerHandler);

  // Stop an ongoing movement when the controls are activated or when the
  // scene changes.
  this._stopMovementHandler = this.stopMovement.bind(this);
  this._controls.addEventListener('active', this._stopMovementHandler);
  this.addEventListener('sceneChange', this._stopMovementHandler);

  // The currently programmed idle movement.
  this._idleMovement = null;
}

eventEmitter(Viewer);


/**
 * Destructor.
 */
Viewer.prototype.destroy = function() {

  window.removeEventListener('resize', this._updateSizeListener);

  if (this._currentScene) {
    this._removeSceneEventListeners(this._currentScene);
  }

  if (this._replacedScene) {
    this._removeSceneEventListeners(this._replacedScene);
  }

  this._dragCursor.destroy();

  for (var methodName in this._controlMethods) {
    this._controlMethods[methodName].destroy();
  }

  while (this._scenes.length) {
    this.destroyScene(this._scenes[0]);
  }

  // The Flash renderer must be torn down before the element is removed from
  // the DOM, so all scenes must have been destroyed before this point.
  this._domElement.removeChild(this._stage.domElement());

  this._stage.destroy();
  this._renderLoop.destroy();
  this._controls.destroy();
  this._controls = null;

  if (this._cancelCurrentTween) {
    this._cancelCurrentTween();
  }

  clearOwnProperties(this);
};


/**
 * Updates the stage size to fill the containing element.
 *
 * This method is automatically called when the browser window is resized.
 * Most clients won't need to explicitly call it to keep the size up to date.
 */
Viewer.prototype.updateSize = function() {
  var size = this._size;
  size.width = this._domElement.clientWidth;
  size.height = this._domElement.clientHeight;
  this._stage.setSize(size);
};


/**
 * Returns the underlying {@link Stage stage}.
 * @return {Stage}
 */
Viewer.prototype.stage = function() {
  return this._stage;
};


/**
 * Returns the underlying {@link RenderLoop render loop}.
 * @return {RenderLoop}
 */
Viewer.prototype.renderLoop = function() {
  return this._renderLoop;
};


/**
 * Returns the underlying {@link Controls controls}.
 * @return {Controls}
 */
Viewer.prototype.controls = function() {
  return this._controls;
};


/**
 * Returns the underlying DOM element.
 * @return {Element}
 */
Viewer.prototype.domElement = function() {
  return this._domElement;
};


/**
 * Creates a new {@link Scene scene} with a single layer and adds it to the
 * viewer.
 *
 * The current scene does not change. To switch to the scene, call
 * {@link Viewer#switchScene}.
 *
 * @param {Object} opts Scene creation options.
 * @param {View} opts.view The scene's underlying {@link View}.
 * @param {Source} opts.source The layer's underlying {@link Source}.
 * @param {Geometry} opts.geometry The layer's underlying {@link Geometry}.
 * @param {boolean} [opts.pinFirstLevel=false] Whether to pin the first level to
 *     provide a fallback of last resort, at the cost of memory consumption.
 * @param {Object} [opts.textureStoreOpts={}] Options to pass to the
 *     {@link TextureStore} constructor.
 * @param {Object} [opts.layerOpts={}] Options to pass to the {@link Layer}
 *     constructor.
 * @return {Scene}
 */
Viewer.prototype.createScene = function(opts) {
  opts = opts || {};

  var scene = this.createEmptyScene({ view: opts.view });

  scene.createLayer({
    source: opts.source,
    geometry: opts.geometry,
    pinFirstLevel: opts.pinFirstLevel,
    textureStoreOpts: opts.textureStoreOpts,
    layerOpts: opts.layerOpts
  });

  return scene;
};


/**
 * Creates a new {@link Scene scene} with no layers and adds it to the viewer.
 *
 * Layers may be added to the scene by calling {@link Scene#createLayer}.
 * However, if the scene has a single layer, it is simpler to call
 * {@link Viewer#createScene} instead of this method.
 *
 * The current scene does not change. To switch to the scene, call
 * {@link Viewer#switchScene}.
 *
 * @param {Object} opts Scene creation options.
 * @param {View} opts.view The scene's underlying {@link View}.
 * @return {Scene}
 */
Viewer.prototype.createEmptyScene = function(opts) {
  opts = opts || {};

  var scene = new Scene(this, opts.view);
  this._scenes.push(scene);

  return scene;
};


Viewer.prototype._updateSceneLayers = function() {
  var i;
  var layer;

  var stage = this._stage;
  var currentScene = this._currentScene;
  var replacedScene = this._replacedScene;

  var oldLayers = stage.listLayers();

  // The stage contains layers from at most two scenes: the current one, on top,
  // and the one currently being switched away from, on the bottom.
  var newLayers = [];
  if (replacedScene) {
    newLayers = newLayers.concat(replacedScene.listLayers());
  }
  if (currentScene) {
    newLayers = newLayers.concat(currentScene.listLayers());
  }

  // A single layer can be added or removed from the scene at a time.
  if (Math.abs(oldLayers.length - newLayers.length) !== 1) {
    throw new Error('Stage and scene out of sync');
  }

  if (newLayers.length < oldLayers.length) {
    // A layer was removed.
    for (i = 0; i < oldLayers.length; i++) {
      layer = oldLayers[i];
      if (newLayers.indexOf(layer) < 0) {
        this._removeLayerFromStage(layer);
        break;
      }
    }
  }
  if (newLayers.length > oldLayers.length) {
    // A layer was added.
    for (i = 0; i < newLayers.length; i++) {
      layer = newLayers[i];
      if (oldLayers.indexOf(layer) < 0) {
        this._addLayerToStage(layer, i);
      }
    }
  }

  // TODO: When in the middle of a scene transition, call the transition update
  // function immediately to prevent an added layer from flashing with the wrong
  // opacity.
};


Viewer.prototype._addLayerToStage = function(layer, i) {
  // Pin the first level to ensure a fallback while the layer is visible.
  // Note that this is distinct from the `pinFirstLevel` option passed to
  // createScene(), which pins the layer even when it's not visible.
  layer.pinFirstLevel();
  this._stage.addLayer(layer, i);
};


Viewer.prototype._removeLayerFromStage = function(layer) {
  this._stage.removeLayer(layer);
  layer.unpinFirstLevel();
  layer.textureStore().clearNotPinned();
};


Viewer.prototype._addSceneEventListeners = function(scene) {
  scene.addEventListener('layerChange', this._layerChangeHandler);
  scene.addEventListener('viewChange', this._viewChangeHandler);
};


Viewer.prototype._removeSceneEventListeners = function(scene) {
  scene.removeEventListener('layerChange', this._layerChangeHandler);
  scene.removeEventListener('viewChange', this._viewChangeHandler);
};


/**
 * Destroys a {@link Scene scene} and removes it from the viewer.
 * @param {Scene} scene
 */
Viewer.prototype.destroyScene = function(scene) {
  var i = this._scenes.indexOf(scene);
  if (i < 0) {
    throw new Error('No such scene in viewer');
  }

  var j;
  var layers;

  if (this._currentScene === scene) {
    // The destroyed scene is the current scene.
    // Remove event listeners, remove layers from stage and cancel transition.
    this._removeSceneEventListeners(scene);
    layers = scene.listLayers();
    for (j = 0; j < layers.length; j++) {
      this._removeLayerFromStage(layers[j]);
    }
    if (this._cancelCurrentTween) {
      this._cancelCurrentTween();
      this._cancelCurrentTween = null;
    }
    this._currentScene = null;
    this.emit('sceneChange');
  }

  if (this._replacedScene === scene) {
    // The destroyed scene is being switched away from.
    // Remove event listeners and remove layers from stage.
    this._removeSceneEventListeners(scene);
    layers = scene.listLayers();
    for (j = 0; j < layers.length; j++) {
      this._removeLayerFromStage(layers[j]);
    }
    this._replacedScene = null;
  }

  this._scenes.splice(i, 1);

  scene.destroy();
};


/**
 * Destroys all {@link Scene scenes} and removes them from the viewer.
 */
Viewer.prototype.destroyAllScenes = function() {
  while (this._scenes.length > 0) {
    this.destroyScene(this._scenes[0]);
  }
};


/**
 * Returns whether the viewer contains a {@link Scene scene}.
 * @param {Scene} scene
 * @return {boolean}
 */
Viewer.prototype.hasScene = function(scene) {
  return this._scenes.indexOf(scene) >= 0;
};


/**
 * Returns a list of all {@link Scene scenes}.
 * @return {Scene[]}
 */
Viewer.prototype.listScenes = function() {
  return [].concat(this._scenes);
};


/**
 * Returns the current {@link Scene scene}, or null if there isn't one.
 *
 * To change the current scene, call {@link Viewer#switchScene}.
 *
 * @return {Scene}
 */
Viewer.prototype.scene = function() {
  return this._currentScene;
};


/**
 * Returns the {@link View view} for the current {@link Scene scene}, or null
 * if there isn't one.
 * @return {View}
 */
Viewer.prototype.view = function() {
  var scene = this._currentScene;
  if (scene) {
    return scene.view();
  }
  return null;
};


/**
 * Tweens the {@link View view} for the current {@link Scene scene}.
 *
 * This method is equivalent to calling {@link Scene#lookTo} on the current
 * scene.
 *
 * @param {Object} opts Options to pass into {@link Scene#lookTo}.
 * @param {function} done Function to call when the tween is complete.
 */
Viewer.prototype.lookTo = function(params, opts, done) {
  // TODO: is it an error to call lookTo when no scene is displayed?
  var scene = this._currentScene;
  if (scene) {
    scene.lookTo(params, opts, done);
  }
};


/**
 * Starts a movement, possibly replacing the current movement.
 *
 * This method is equivalent to calling {@link Scene#startMovement} on the
 * current scene. If there is no current scene, this is a no-op.
 *
 * @param {function} fn The movement function.
 * @param {function} done Function to be called when the movement finishes or is
 *     interrupted.
 */
Viewer.prototype.startMovement = function(fn, done) {
  var scene = this._currentScene;
  if (!scene) {
    return;
  }
  scene.startMovement(fn, done);
};


/**
 * Stops the current movement.
 *
 * This method is equivalent to calling {@link Scene#stopMovement} on the
 * current scene. If there is no current scene, this is a no-op.
 */
Viewer.prototype.stopMovement = function() {
  var scene = this._currentScene;
  if (!scene) {
    return;
  }
  scene.stopMovement();
};


/**
 * Returns the current movement.
 *
 * This method is equivalent to calling {@link Scene#movement} on the
 * current scene. If there is no current scene, this is a no-op.
 *
 * @return {function}
 */
Viewer.prototype.movement = function() {
  var scene = this._currentScene;
  if (!scene) {
    return;
  }
  return scene.movement();
};


/**
 * Schedules an idle movement to be automatically started when the view remains
 * unchanged for the given timeout period.
 *
 * Changing the view while the idle movement is active stops the movement and
 * schedules it to start again after the same timeout period. To disable it
 * permanently, call with a null movement or an infinite timeout.
 *
 * @param {number} timeout Timeout period in milliseconds.
 * @param {function} movement Automatic movement function, or null to disable.
 */
Viewer.prototype.setIdleMovement = function(timeout, movement) {
  this._idleTimer.setDuration(timeout);
  this._idleMovement = movement;
};


/**
 * Stops the idle movement. It will be started again after the timeout set by
 * {@link Viewer#setIdleMovement}.
 */
Viewer.prototype.breakIdleMovement = function() {
  this.stopMovement();
  this._resetIdleTimer();
};


Viewer.prototype._resetIdleTimer = function() {
  this._idleTimer.start();
};


Viewer.prototype._triggerIdleTimer = function() {
  var idleMovement = this._idleMovement;
  if (!idleMovement) {
    return;
  }
  this.startMovement(idleMovement);
};


var defaultSwitchDuration = 1000;

function defaultTransitionUpdate(val, newScene, oldScene) {
  var layers = newScene.listLayers();
  layers.forEach(function(layer) {
    layer.mergeEffects({ opacity: val });
  });

  newScene._hotspotContainer.domElement().style.opacity = val;
}


/**
 * Switches to another {@link Scene scene} with a fade transition. This scene
 * becomes the current one.
 *
 * If a transition is already taking place, it is interrupted before the new one
 * starts.
 *
 * @param {Scene} newScene The scene to switch to.
 * @param {Object} opts Transition options.
 * @param {number} [opts.transitionDuration=1000] Transition duration, in
 *     milliseconds.
 * @param {number} [opts.transitionUpdate=defaultTransitionUpdate]
 *     Transition update function, with signature `f(t, newScene, oldScene)`.
 *     This function is called on each frame with `t` increasing from 0 to 1.
 *     An initial call with `t=0` and a final call with `t=1` are guaranteed.
 *     The default function sets the opacity of the new scene to `t`.
 * @param {function} done Function to call when the transition finishes or is
 *     interrupted. If the new scene is equal to the old one, no transition
 *     takes place, but this function is still called.
 */
Viewer.prototype.switchScene = function(newScene, opts, done) {
  var self = this;

  opts = opts || {};
  done = done || noop;

  var stage = this._stage;

  var oldScene = this._currentScene;

  // Do nothing if the target scene is the current one.
  if (oldScene === newScene) {
    done();
    return;
  }

  if (this._scenes.indexOf(newScene) < 0) {
    throw new Error('No such scene in viewer');
  }

  // Cancel an already ongoing transition. This ensures that the stage contains
  // layers from exactly one scene before the transition begins.
  if (this._cancelCurrentTween) {
    this._cancelCurrentTween();
    this._cancelCurrentTween = null;
  }

  var oldSceneLayers = oldScene ? oldScene.listLayers() : [];
  var newSceneLayers = newScene.listLayers();
  var stageLayers = stage.listLayers();

  // Check that the stage contains exactly as many layers as the current scene,
  // and that the top layer is the right one. If this test fails, either there
  // is a bug or the user tried to modify the stage concurrently.
  if (oldScene && ((stageLayers.length !== oldSceneLayers.length) ||
      (stageLayers.length > 1 && stageLayers[0] != oldSceneLayers[0]))) {
    throw new Error('Stage not in sync with viewer');
  }

  // Get the transition parameters.
  var duration = opts.transitionDuration != null ?
      opts.transitionDuration : defaultSwitchDuration;
  var update = opts.transitionUpdate != null ?
      opts.transitionUpdate : defaultTransitionUpdate;

  // Add new scene layers into the stage before starting the transition.
  for (var i = 0; i < newSceneLayers.length; i++) {
    this._addLayerToStage(newSceneLayers[i]);
  }

  // Update function to be called on every frame.
  function tweenUpdate(val) {
    update(val, newScene, oldScene);
  }

  // Once the transition is complete, remove old scene layers from the stage and
  // remove the event listeners. If the old scene was destroyed during the
  // transition, this has already been taken care of. Otherwise, we still need
  // to get a fresh copy of the scene's layers, since they might have changed
  // during the transition.
  function tweenDone() {
    if (self._replacedScene) {
      self._removeSceneEventListeners(self._replacedScene);
      oldSceneLayers = self._replacedScene.listLayers();
      for (var i = 0; i < oldSceneLayers.length; i++) {
        self._removeLayerFromStage(oldSceneLayers[i]);
      }
      self._replacedScene = null;
    }
    self._cancelCurrentTween = null;
    done();
  }

  // Store the cancelable for the transition.
  this._cancelCurrentTween = tween(duration, tweenUpdate, tweenDone);

  // Update the current and replaced scene.
  this._currentScene = newScene;
  this._replacedScene = oldScene;

  // Emit scene and view change events.
  this.emit('sceneChange');
  this.emit('viewChange');

  // Add event listeners to the new scene.
  // Note that event listeners can only be removed from the old scene once the
  // transition is complete, since layers might get added or removed in the
  // interim.
  this._addSceneEventListeners(newScene);
};


module.exports = Viewer;


/***/ }),

/***/ "./node_modules/marzipano/src/assets/Dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/marzipano/src/assets/Dynamic.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var StaticAsset = __webpack_require__(/*! ./Static */ "./node_modules/marzipano/src/assets/Static.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class DynamicAsset
 * @implements Asset
 * @extends StaticAsset
 * @classdesc
 *
 * A mutable {@link Asset} compatible with {@link WebGlStage} and
 * {@link CssStage}.
 *
 * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap} element The
 *     underlying pixel source.
 * @throws If the pixel source is unsupported.
 */
function DynamicAsset(element) {
  this.constructor.super_.call(this, element);
  this._timestamp = 0;
}

inherits(DynamicAsset, StaticAsset);
eventEmitter(DynamicAsset);

/**
 * Destructor.
 */
DynamicAsset.prototype.destroy = function() {
  clearOwnProperties(this);
};

DynamicAsset.prototype.timestamp = function() {
  return this._timestamp;
};

DynamicAsset.prototype.isDynamic = function() {
  return true;
};

/**
 * Marks the asset dirty, signaling that the contents of the underlying pixel
 * source have changed.
 *
 * @throws If the asset is not dynamic.
 */
DynamicAsset.prototype.markDirty = function() {
  this._timestamp++;
  this.emit('change');
};

module.exports = DynamicAsset;


/***/ }),

/***/ "./node_modules/marzipano/src/assets/Flash.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/assets/Flash.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class FlashAsset
 * @implements Asset
 * @classdesc
 *
 * An immutable {@link Asset} compatible with {@link FlashStage}.
 * 
 * The asset's underlying pixel source is a unique image ID associated with
 * a Flash application.
 *
 * @param {Element} flashElement The HTML element for the Flash application.
 * @param {number} imageId The unique image ID inside the Flash application.
 */
function FlashAsset(flashElement, imageId) {
  this._flashElement = flashElement;
  this._imageId = imageId;
}

eventEmitter(FlashAsset);

/**
 * Destructor.
 */
FlashAsset.prototype.destroy = function() {
  this._flashElement.unloadImage(this._imageId);
  clearOwnProperties(this);
};

FlashAsset.prototype.element = function() {
  return this._imageId;
};

FlashAsset.prototype.width = function() {
  // Not actually used anywhere.
  return 0;
};

FlashAsset.prototype.height = function() {
  // Not actually used anywhere.
  return 0;
};

FlashAsset.prototype.timestamp = function() {
  return 0;
};

FlashAsset.prototype.isDynamic = function() {
  return false;
};

module.exports = FlashAsset;


/***/ }),

/***/ "./node_modules/marzipano/src/assets/Static.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/assets/Static.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var global = __webpack_require__(/*! ../util/global */ "./node_modules/marzipano/src/util/global.js");
var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var propertyMap = {
  HTMLImageElement: ['naturalWidth', 'naturalHeight'],
  HTMLCanvasElement: ['width', 'height'],
  ImageBitmap: ['width', 'height']
};

/**
 * @class StaticAsset
 * @implements Asset
 * @classdesc
 *
 * An immutable {@link Asset} compatible with {@link WebGlStage} and
 * {@link CssStage}.
 *
 * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap} element The
 *     underlying pixel source.
 * @throws If the pixel source is unsupported.
 */
function StaticAsset(element) {
  var supported = false;
  for (var type in propertyMap) {
    if (global[type] && element instanceof global[type]) {
      supported = true;
      this._widthProp = propertyMap[type][0];
      this._heightProp = propertyMap[type][1];
      break;
    }
  }
  if (!supported) {
    throw new Error('Unsupported pixel source');
  }

  this._element = element;
}

eventEmitter(StaticAsset);

/**
 * Destructor.
 */
StaticAsset.prototype.destroy = function() {
  clearOwnProperties(this);
};

StaticAsset.prototype.element = function() {
  return this._element;
};

StaticAsset.prototype.width = function() {
  return this._element[this._widthProp];
};

StaticAsset.prototype.height = function() {
  return this._element[this._heightProp];
};

StaticAsset.prototype.timestamp = function() {
  return 0;
};

StaticAsset.prototype.isDynamic = function() {
  return false;
};

module.exports = StaticAsset;


/***/ }),

/***/ "./node_modules/marzipano/src/autorotate.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/autorotate.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var defaults = __webpack_require__(/*! ./util/defaults */ "./node_modules/marzipano/src/util/defaults.js");

var defaultSpeed = 0.1;
var defaultAccel = 0.01;

var defaultOptions = {
  yawSpeed: defaultSpeed,
  pitchSpeed: defaultSpeed,
  fovSpeed: defaultSpeed,
  yawAccel: defaultAccel,
  pitchAccel: defaultAccel,
  fovAccel: defaultAccel,
  targetPitch: 0,
  targetFov: null
};

/**
 * @param {Object} opts
 * @param {Number} [opts.yawSpeed=0.1] Yaw maximum speed
 * @param {Number} [opts.pitchSpeed=0.1] Pitch maximum speed
 * @param {Number} [opts.fovSpeed=0.1] Fov maximum speed
 * @param {Number} [opts.yawAccel=0.01] Yaw acceleration
 * @param {Number} [opts.pitchAccel=0.01] Pitch acceleration
 * @param {Number} [opts.fovAccel=0.01] Fov acceleration
 * @param {Number} [opts.targetPitch=0] Value that pitch converges to. `null` means that the pitch will not change.
 * @param {Number} [opts.targetFov=null] Value that fov converges to. `null` means that the fov will not change.
 * @returns Movement function that can be passed to {@link Viewer#setIdleMovement} or {@link Scene#startMovement}
*/
function autorotate(opts) {

  opts = defaults(opts || {}, defaultOptions);

  var yawSpeed = opts.yawSpeed;
  var pitchSpeed = opts.pitchSpeed;
  var fovSpeed = opts.fovSpeed;
  var yawAccel = opts.yawAccel;
  var pitchAccel = opts.pitchAccel;
  var fovAccel = opts.fovAccel;
  var targetPitch = opts.targetPitch;
  var targetFov = opts.targetFov;

  return function start() {

    var lastTime = 0;
    var lastYawSpeed = 0;
    var lastPitchSpeed = 0;
    var lastFovSpeed = 0;

    var currentYawSpeed = 0;
    var currentPitchSpeed = 0;
    var currentFovSpeed = 0;

    var timeDelta;
    var yawDelta;
    var pitchDelta;
    var fovDelta;

    return function step(params, currentTime) {

      timeDelta = (currentTime - lastTime) / 1000;
      currentYawSpeed = Math.min(lastYawSpeed + timeDelta * yawAccel, yawSpeed);
      yawDelta = currentYawSpeed * timeDelta;
      params.yaw = params.yaw + yawDelta;

      if (targetPitch != null && params.pitch !== targetPitch) {
        var pitchThresh = 0.5 * lastPitchSpeed * lastPitchSpeed / pitchAccel;
        if (Math.abs(targetPitch - params.pitch) > pitchThresh) {
          // Acceleration phase
          currentPitchSpeed = Math.min(lastPitchSpeed + timeDelta * pitchAccel, pitchSpeed);
        } else {
          // Deceleration phase
          currentPitchSpeed = Math.max(lastPitchSpeed - timeDelta * pitchAccel, 0);
        }
        // currentPitchSpeed is the absolute value (>= 0)
        pitchDelta = currentPitchSpeed * timeDelta;
        if (targetPitch < params.pitch) {
          params.pitch = Math.max(targetPitch, params.pitch - pitchDelta);
        }
        if (targetPitch > params.pitch) {
          params.pitch = Math.min(targetPitch, params.pitch + pitchDelta);
        }
      }

      if (targetFov != null && params.fov !== targetPitch) {
        var fovThresh = 0.5 * lastFovSpeed * lastFovSpeed / fovAccel;
        if (Math.abs(targetFov - params.fov) > fovThresh) {
          // Acceleration phase
          currentFovSpeed = Math.min(lastFovSpeed + timeDelta * fovAccel, fovSpeed);
        } else {
          // Deceleration phase
          currentFovSpeed = Math.max(lastFovSpeed - timeDelta * fovAccel, 0);
        }
        // currentFovSpeed is the absolute value (>= 0)
        fovDelta = currentFovSpeed * timeDelta;
        if (targetFov < params.fov) {
          params.fov = Math.max(targetFov, params.fov - fovDelta);
        }
        if (targetFov > params.fov) {
          params.fov = Math.min(targetFov, params.fov + fovDelta);
        }
      }

      lastTime = currentTime;
      lastYawSpeed = currentYawSpeed;
      lastPitchSpeed = currentPitchSpeed;
      lastFovSpeed = currentFovSpeed;

      return params;

    };

  };

}

module.exports = autorotate;

/***/ }),

/***/ "./node_modules/marzipano/src/collections/LruMap.js":
/*!**********************************************************!*\
  !*** ./node_modules/marzipano/src/collections/LruMap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var mod = __webpack_require__(/*! ../util/mod */ "./node_modules/marzipano/src/util/mod.js");

// An LruMap holds up to a maximum number of key-value pairs, ordered by their
// time of insertion. When the addition of a key-value pair would cause the
// capacity to be exceeded, the oldest key-value pair in the set is evicted.
// As a special case, an LruMap with zero capacity always rejects the insertion
// of a key-value pair.
//
// Keys must implement hash() and equals(). Note that the implementation doesn't
// currently use hash(), but a future version might.
function LruMap(capacity) {
  if (!isFinite(capacity) || Math.floor(capacity) !== capacity || capacity < 0) {
    throw new Error('LruMap: invalid capacity');
  }
  this._capacity = capacity;

  // Keys and values are stored in circular arrays ordered by decreasing age.
  // Start is the index of the oldest key/value and size is the number of valid
  // key/values; the region containing valid keys/values may wrap around.
  this._keys = new Array(this._capacity);
  this._values = new Array(this._capacity);
  this._start = 0;
  this._size = 0;
}

LruMap.prototype._index = function(i) {
  return mod(this._start + i, this._capacity);
};

// Returns the value associated to the specified key, or null if not found.
LruMap.prototype.get = function(key) {
  for (var i = 0; i < this._size; i++) {
    var existingKey = this._keys[this._index(i)];
    if (key.equals(existingKey)) {
      return this._values[this._index(i)];
    }
  }
  return null;
};

// Associates the specified value with the specified key, possibly replacing the
// currently associated value. The key-value pair becomes the newest. If the map
// is at capacity, the oldest key-value pair is removed. Returns the removed
// key, or null otherwise. If the capacity is zero, does nothing and returns
// the key.
LruMap.prototype.set = function(key, value) {
  if (this._capacity === 0) {
    return key;
  }
  this.del(key);
  var evictedKey =
      this._size === this._capacity ? this._keys[this._index(0)] : null;
  this._keys[this._index(this._size)] = key;
  this._values[this._index(this._size)] = value;
  if (this._size < this._capacity) {
    this._size++;
  } else {
    this._start = this._index(1);
  }
  return evictedKey;
};

// Removes the key-value pair associated with the specified key.
// Returns the removed value, or null if not found.
LruMap.prototype.del = function(key) {
  for (var i = 0; i < this._size; i++) {
    if (key.equals(this._keys[this._index(i)])) {
      var existingValue = this._values[this._index(i)];
      for (var j = i; j < this._size - 1; j++) {
        this._keys[this._index(j)] = this._keys[this._index(j + 1)];
        this._values[this._index(j)] = this._values[this._index(j + 1)];
      }
      this._size--;
      return existingValue;
    }
  }
  return null;
};

// Returns whether there is a value associated with the specified key.
LruMap.prototype.has = function(key) {
  for (var i = 0; i < this._size; i++) {
    if (key.equals(this._keys[this._index(i)])) {
      return true;
    }
  }
  return false;
};

// Returns the number of key-value pairs in the map.
LruMap.prototype.size = function() {
  return this._size;
};

// Removes all key-value pairs from the map.
LruMap.prototype.clear = function() {
  this._keys.length = 0;
  this._values.length = 0;
  this._start = 0;
  this._size = 0;
};

// Calls fn(key, value) for each item in the map, in an unspecified order.
// Returns the number of times fn was called.
// The result is unspecified if the map is mutated during iteration.
LruMap.prototype.forEach = function(fn) {
  var count = 0;
  for (var i = 0; i < this._size; i++) {
    fn(this._keys[this._index(i)], this._values[this._index(i)]);
    count += 1;
  }
  return count;
};

module.exports = LruMap;


/***/ }),

/***/ "./node_modules/marzipano/src/collections/LruSet.js":
/*!**********************************************************!*\
  !*** ./node_modules/marzipano/src/collections/LruSet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var mod = __webpack_require__(/*! ../util/mod */ "./node_modules/marzipano/src/util/mod.js");

// An LruSet holds up to a maximum number of elements, ordered by their time of
// insertion. When the addition of an element would cause the capacity to be
// exceeded, the oldest element in the set is evicted. As a special case, an
// LruSet with zero capacity always rejects the insertion of an element.
//
// Elements must implement hash() and equals(). Note that the implementation
// doesn't currently use hash(), but a future version might.
function LruSet(capacity) {
  if (!isFinite(capacity) || Math.floor(capacity) !== capacity || capacity < 0) {
    throw new Error('LruSet: invalid capacity');
  }
  this._capacity = capacity;

  // Elements are stored in a circular array ordered by decreasing age.
  // Start is the index of the oldest element and size is the number of valid
  // elements; the region containing valid elements may wrap around.
  this._elements = new Array(this._capacity);
  this._start = 0;
  this._size = 0;
}

LruSet.prototype._index = function(i) {
  return mod(this._start + i, this._capacity);
};

// Adds an element into the set, possibly replacing an equal element already in
// the set. The element becomes the newest. If the set is at capacity, the
// oldest element is removed. Returns the removed element if it does not equal
// the inserted element, or null otherwise. If the capacity is zero, does
// nothing and returns the element.
LruSet.prototype.add = function(element) {
  if (this._capacity === 0) {
    return element;
  }
  this.remove(element);
  var evictedElement =
      this._size === this._capacity ? this._elements[this._index(0)] : null;
  this._elements[this._index(this._size)] = element;
  if (this._size < this._capacity) {
    this._size++;
  } else {
    this._start = this._index(1);
  }
  return evictedElement;
};

// Removes an element from the set.
// Returns the removed element, or null if the element was not found.
LruSet.prototype.remove = function(element) {
  for (var i = 0; i < this._size; i++) {
    var existingElement = this._elements[this._index(i)];
    if (element.equals(existingElement)) {
      for (var j = i; j < this._size - 1; j++) {
        this._elements[this._index(j)] = this._elements[this._index(j + 1)];
      }
      this._size--;
      return existingElement;
    }
  }
  return null;
};

// Returns whether an element is in the set.
LruSet.prototype.has = function(element) {
  for (var i = 0; i < this._size; i++) {
    if (element.equals(this._elements[this._index(i)])) {
      return true;
    }
  }
  return false;
};

// Returns the number of elements in the set.
LruSet.prototype.size = function() {
  return this._size;
};

// Removes all elements from the set.
LruSet.prototype.clear = function() {
  this._elements.length = 0;
  this._start = 0;
  this._size = 0;
};

// Calls fn(element) for each element in the set, in an unspecified order.
// Returns the number of times fn was called.
// The result is unspecified if the set is mutated during iteration.
LruSet.prototype.forEach = function(fn) {
  var count = 0;
  for (var i = 0; i < this._size; i++) {
    fn(this._elements[this._index(i)]);
    count += 1;
  }
  return count;
};

module.exports = LruSet;


/***/ }),

/***/ "./node_modules/marzipano/src/collections/Map.js":
/*!*******************************************************!*\
  !*** ./node_modules/marzipano/src/collections/Map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var mod = __webpack_require__(/*! ../util/mod */ "./node_modules/marzipano/src/util/mod.js");

var defaultCapacity = 64;

// A map data structure for keys implementing hash() and equals() and arbitrary
// values. The capacity, if given, is just a hint; the map is allowed to exceed
// it, but performance may suffer.
function Map(capacity) {
  if (capacity != null &&
      (!isFinite(capacity) || Math.floor(capacity) !== capacity || capacity < 1)) {
    throw new Error('Map: invalid capacity');
  }
  this._capacity = capacity || defaultCapacity;

  this._keyBuckets = [];
  this._valBuckets = [];
  for (var i = 0; i < this._capacity; i++) {
    this._keyBuckets.push([]);
    this._valBuckets.push([]);
  }
  this._size = 0;
}

// Returns the value associated with the specified key, or null if not found.
Map.prototype.get = function(key) {
  var h = mod(key.hash(), this._capacity);
  var keyBucket = this._keyBuckets[h];
  for (var i = 0; i < keyBucket.length; i++) {
    var existingKey = keyBucket[i];
    if (key.equals(existingKey)) {
      var valBucket = this._valBuckets[h];
      var existingValue = valBucket[i];
      return existingValue;
    }
  }
  return null;
};

// Associates the specified value with the specified key, possibly replacing the
// currently associated value.
// Returns the replaced value, or null if no value was replaced.
Map.prototype.set = function(key, val) {
  var h = mod(key.hash(), this._capacity);
  var keyBucket = this._keyBuckets[h];
  var valBucket = this._valBuckets[h];
  for (var i = 0; i < keyBucket.length; i++) {
    var existingKey = keyBucket[i];
    if (key.equals(existingKey)) {
      var existingValue = valBucket[i];
      keyBucket[i] = key;
      valBucket[i] = val;
      return existingValue;
    }
  }
  keyBucket.push(key);
  valBucket.push(val);
  this._size++;
  return null;
};

// Removes the key-value pair associated with the specified key.
// Returns the removed value, or null if not found.
Map.prototype.del = function(key) {
  var h = mod(key.hash(), this._capacity);
  var keyBucket = this._keyBuckets[h];
  var valBucket = this._valBuckets[h];
  for (var i = 0; i < keyBucket.length; i++) {
    var existingKey = keyBucket[i];
    if (key.equals(existingKey)) {
      var existingValue = valBucket[i];
      // Splice manually to avoid Array#splice return value allocation.
      for (var j = i; j < keyBucket.length - 1; j++) {
        keyBucket[j] = keyBucket[j+1];
        valBucket[j] = valBucket[j+1];
      }
      keyBucket.length = keyBucket.length - 1;
      valBucket.length = valBucket.length - 1;
      this._size--;
      return existingValue;
    }
  }
  return null;
};

// Returns whether there is a value associated with the specified key.
Map.prototype.has = function(key) {
  var h = mod(key.hash(), this._capacity);
  var keyBucket = this._keyBuckets[h];
  for (var i = 0; i < keyBucket.length; i++) {
    var existingKey = keyBucket[i];
    if (key.equals(existingKey)) {
      return true;
    }
  }
  return false;
};

// Returns the number of key-value pairs in the map.
Map.prototype.size = function() {
  return this._size;
};

// Removes all key-value pairs from the map.
Map.prototype.clear = function() {
  for (var i = 0; i < this._capacity; i++) {
    this._keyBuckets[i].length = 0;
    this._valBuckets[i].length = 0;
  }
  this._size = 0;
};

// Calls fn(key, value) for each key-value pair in the map, in an unspecified
// order. Returns the number of times fn was called.
// The result is unspecified if the map is mutated during iteration.
Map.prototype.forEach = function(fn) {
  var count = 0;
  for (var i = 0; i < this._capacity; i++) {
    var keyBucket = this._keyBuckets[i];
    var valBucket = this._valBuckets[i];
    for (var j = 0; j < keyBucket.length; j++) {
      fn(keyBucket[j], valBucket[j]);
      count += 1;
    }
  }
  return count;
};

module.exports = Map;


/***/ }),

/***/ "./node_modules/marzipano/src/collections/Set.js":
/*!*******************************************************!*\
  !*** ./node_modules/marzipano/src/collections/Set.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var mod = __webpack_require__(/*! ../util/mod */ "./node_modules/marzipano/src/util/mod.js");

var defaultCapacity = 64;

// A set data structure for elements implementing hash() and equals().
// The capacity, if given, is just a hint; the set is allowed to exceed it, but
// performance may suffer.
function Set(capacity) {
  if (capacity != null &&
      (!isFinite(capacity) || Math.floor(capacity) !== capacity || capacity < 1)) {
    throw new Error('Set: invalid capacity');
  }
  this._capacity = this._capacity || defaultCapacity;

  this._buckets = [];
  for (var i = 0; i < this._capacity; i++) {
    this._buckets.push([]);
  }
  this._size = 0;
}

// Adds an element, replacing an existing element.
// Returns the replaced element, or null if no element was replaced.
Set.prototype.add = function(element) {
  var h = mod(element.hash(), this._capacity);
  var bucket = this._buckets[h];
  for (var i = 0; i < bucket.length; i++) {
    var existingElement = bucket[i];
    if (element.equals(existingElement)) {
      bucket[i] = element;
      return existingElement;
    }
  }
  bucket.push(element);
  this._size++;
  return null;
};

// Removes an element.
// Returns the removed element, or null if the element was not found.
Set.prototype.remove = function(element) {
  var h = mod(element.hash(), this._capacity);
  var bucket = this._buckets[h];
  for (var i = 0; i < bucket.length; i++) {
    var existingElement = bucket[i];
    if (element.equals(existingElement)) {
      // Splice manually to avoid Array#splice return value allocation.
      for (var j = i; j < bucket.length - 1; j++) {
        bucket[j] = bucket[j+1];
      }
      bucket.length = bucket.length - 1;
      this._size--;
      return existingElement;
    }
  }
  return null;
};

// Returns whether an element is in the set.
Set.prototype.has = function(element) {
  var h = mod(element.hash(), this._capacity);
  var bucket = this._buckets[h];
  for (var i = 0; i < bucket.length; i++) {
    var existingElement = bucket[i];
    if (element.equals(existingElement)) {
      return true;
    }
  }
  return false;
};

// Returns the number of elements in the set.
Set.prototype.size = function() {
  return this._size;
};

// Removes all elements from the set.
Set.prototype.clear = function() {
  for (var i = 0; i < this._capacity; i++) {
    this._buckets[i].length = 0;
  }
  this._size = 0;
};

// Calls fn(element) for each element in the set, in an unspecified order.
// Returns the number of times fn was called.
// The result is unspecified if the set is mutated during iteration.
Set.prototype.forEach = function(fn) {
  var count = 0;
  for (var i = 0; i < this._capacity; i++) {
    var bucket = this._buckets[i];
    for (var j = 0; j < bucket.length; j++) {
      fn(bucket[j]);
      count += 1;
    }
  }
  return count;
};

module.exports = Set;


/***/ }),

/***/ "./node_modules/marzipano/src/collections/WorkPool.js":
/*!************************************************************!*\
  !*** ./node_modules/marzipano/src/collections/WorkPool.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var WorkQueue = __webpack_require__(/*! ./WorkQueue */ "./node_modules/marzipano/src/collections/WorkQueue.js");
var mod = __webpack_require__(/*! ../util/mod */ "./node_modules/marzipano/src/util/mod.js");


function WorkPool(opts) {
  this._concurrency = opts && opts.concurrency || 1;
  this._paused = opts && !!opts.paused || false;

  this._pool = [];
  for (var i = 0; i < this._concurrency; i++) {
    this._pool.push(new WorkQueue(opts));
  }

  this._next = 0;
}


WorkPool.prototype.length = function() {
  var len = 0;
  for (var i = 0; i < this._pool.length; i++) {
    len += this._pool[i].length();
  }
  return len;
};


WorkPool.prototype.push = function(fn, cb) {
  var i = this._next;
  var cancel = this._pool[i].push(fn, cb);
  this._next = mod(this._next + 1, this._concurrency);
  return cancel;
};


WorkPool.prototype.pause = function() {
  if (!this._paused) {
    this._paused = true;
    for (var i = 0; i < this._concurrency; i++) {
      this._pool[i].pause();
    }
  }
};


WorkPool.prototype.resume = function() {
  if (this._paused) {
    this._paused = false;
    for (var i = 0; i < this._concurrency; i++) {
      this._pool[i].resume();
    }
  }
};


module.exports = WorkPool;


/***/ }),

/***/ "./node_modules/marzipano/src/collections/WorkQueue.js":
/*!*************************************************************!*\
  !*** ./node_modules/marzipano/src/collections/WorkQueue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var now = __webpack_require__(/*! ../util/now */ "./node_modules/marzipano/src/util/now.js");


function WorkTask(fn, cb) {
  this.fn = fn;
  this.cb = cb;
  this.cfn = null;
}


function WorkQueue(opts) {
  this._queue = [];
  this._delay = opts && opts.delay || 0;
  this._paused = opts && !!opts.paused || false;
  this._currentTask = null;
  this._lastFinished = null;
}


WorkQueue.prototype.length = function() {
  return this._queue.length;
};


WorkQueue.prototype.push = function(fn, cb) {

  var task = new WorkTask(fn, cb);

  var cancel = this._cancel.bind(this, task);

  // Push the task into the queue.
  this._queue.push(task);

  // Run the task if idle.
  this._next();

  return cancel;

};


WorkQueue.prototype.pause = function() {
  if (!this._paused) {
    this._paused = true;
  }
};


WorkQueue.prototype.resume = function() {
  if (this._paused) {
    this._paused = false;
    this._next();
  }
};


WorkQueue.prototype._start = function(task) {

  // Consistency check.
  if (this._currentTask) {
    throw new Error('WorkQueue: called start while running task');
  }

  // Mark queue as busy, so that concurrent tasks wait.
  this._currentTask = task;

  // Execute the task.
  var finish = this._finish.bind(this, task);
  task.cfn = task.fn(finish);

  // Detect when a non-cancellable function has been queued.
  if (typeof task.cfn !== 'function') {
    throw new Error('WorkQueue: function is not cancellable');
  }

};


WorkQueue.prototype._finish = function(task) {

  var args = Array.prototype.slice.call(arguments, 1);

  // Consistency check.
  if (this._currentTask !== task) {
    throw new Error('WorkQueue: called finish on wrong task');
  }

  // Call the task callback on the return values.
  task.cb.apply(null, args);

  // Mark as not busy and record task finish time, then advance to next task.
  this._currentTask = null;
  this._lastFinished = now();
  this._next();

};


WorkQueue.prototype._cancel = function(task) {

  var args = Array.prototype.slice.call(arguments, 1);

  if (this._currentTask === task) {

    // Cancel running task. Because cancel passes control to the _finish
    // callback we passed into fn, the cleanup logic will be handled there.
    task.cfn.apply(null, args);

  } else {

    // Remove task from queue.
    var pos = this._queue.indexOf(task);
    if (pos >= 0) {
      this._queue.splice(pos, 1);
      task.cb.apply(null, args);
    }

  }

};


WorkQueue.prototype._next = function() {

  if (this._paused) {
    // Do not start tasks while paused.
    return;
  }

  if (!this._queue.length) {
    // No tasks to run.
    return;
  }

  if (this._currentTask) {
    // Will be called again when the current task finishes.
    return;
  }

  if (this._lastFinished != null) {
    var elapsed = now() - this._lastFinished;
    var remaining = this._delay - elapsed;
    if (remaining > 0) {
      // Too soon. Run again after the inter-task delay.
      setTimeout(this._next.bind(this), remaining);
      return;
    }
  }

  // Run the next task.
  var task = this._queue.shift();
  this._start(task);

};


module.exports = WorkQueue;


/***/ }),

/***/ "./node_modules/marzipano/src/colorEffects.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/colorEffects.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var vec4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec4;
var mat4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").mat4;

/**
 * Helper functions for color transformation {@link Effects}.
 *
 * References:
 *
 *   - [ColorMatrix Guide](http://docs.rainmeter.net/tips/colormatrix-guide)
 *   - [Matrix Operations for Image Processing](http://www.graficaobscura.com/matrix/index.html)
 *   - [WebGLImageFilter](https://github.com/phoboslab/WebGLImageFilter)
 *   - [glfx.js](https://github.com/evanw/glfx.js)
 *
 * @namespace colorEffects
 */

/**
 * A vector and matrix corresponding to an identity transformation.
 *
 * @param {Object} result Object to store result
 * @param {vec4} result.colorOffset Array with zeroes.
 * @param {mat4} result.colorMatrix Identity matrix.
 *
 * @memberof colorEffects
 */
function identity(resultArg) {
  var result = resultArg || {};
  result.colorOffset = result.colorOffset || vec4.create();
  result.colorMatrix = result.colorMatrix || mat4.create();
  return result;
}

/**
 * Apply color effects to a single pixel
 *
 * @param {vec4} pixel Values in range [0,1]
 * @param {Object} effect
 * @param {vec4} effect.colorOffset
 * @param {mat4} effect.colorMatrix
 * @param {vec4} result Object to store result
 *
 * @memberof colorEffects
 */
function applyToPixel(pixel, effect, result) {
  vec4TransformMat4Transposed(result, pixel, effect.colorMatrix);
  vec4.add(result, result, effect.colorOffset);
}

// Oddly, the colorTransform matrix needs to be transposed to be used with
// vec4.transformMat4. It is strange that transformMat4 dosn't work the same
// way as multiplying on the shader.
// TODO: investigate this further
function vec4TransformMat4Transposed(out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[1] * y + m[2] * z + m[3] * w;
  out[1] = m[4] * x + m[5] * y + m[6] * z + m[7] * w;
  out[2] = m[8] * x + m[9] * y + m[10] * z + m[11] * w;
  out[3] = m[12] * x + m[13] * y + m[14] * z + m[15] * w;
  return out;
}

/**
 * Apply color effects to an ImageData
 *
 * @param {ImageData} imageData This object will be mutated
 * @param {Object} effect
 * @param {vec4} effect.colorOffset
 * @param {mat4} effect.colorMatrix
 *
 * @memberof colorEffects
 */
var tmpPixel = vec4.create();
function applyToImageData(imageData, effect) {
  var width = imageData.width;
  var height = imageData.height;
  var data = imageData.data;

  for(var i = 0; i < width * height; i++) {
    vec4.set(tmpPixel, data[i*4+0]/255, data[i*4+1]/255, data[i*4+2]/255, data[i*4+3]/255);
    applyToPixel(tmpPixel, effect, tmpPixel);
    data[i*4+0] = tmpPixel[0]*255;
    data[i*4+1] = tmpPixel[1]*255;
    data[i*4+2] = tmpPixel[2]*255;
    data[i*4+3] = tmpPixel[3]*255;
  }
}

module.exports = {
  identity: identity,
  applyToPixel: applyToPixel,
  applyToImageData: applyToImageData
};


/***/ }),

/***/ "./node_modules/marzipano/src/controls/Composer.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/controls/Composer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var now = __webpack_require__(/*! ../util/now */ "./node_modules/marzipano/src/util/now.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class ControlComposer
 * @classdesc
 *
 * Combines changes in parameters triggered by multiple {@link ControlMethod}
 * instances.
 *
 * @listens ControlMethod#parameterDynamics
 */
function ControlComposer(opts) {
  opts = opts || {};

  this._methods = [];

  this._parameters = [ 'x' ,'y', 'axisScaledX', 'axisScaledY', 'zoom', 'yaw', 'pitch', 'roll' ];

  this._now = opts.nowForTesting || now;

  this._composedOffsets = { };

  this._composeReturn = { offsets: this._composedOffsets, changing: null };
}

eventEmitter(ControlComposer);


ControlComposer.prototype.add = function(instance) {
  if (this.has(instance)) {
    return;
  }

  var dynamics = {};
  this._parameters.forEach(function(parameter) {
    dynamics[parameter] = {
      dynamics: new Dynamics(),
      time: null
    };
  });

  var parameterDynamicsHandler = this._updateDynamics.bind(this, dynamics);

  var method = {
    instance: instance,
    dynamics: dynamics,
    parameterDynamicsHandler: parameterDynamicsHandler
  };

  instance.addEventListener('parameterDynamics', parameterDynamicsHandler);

  this._methods.push(method);
};


ControlComposer.prototype.remove = function(instance) {
  var index = this._indexOfInstance(instance);
  if (index >= 0) {
    var method = this._methods.splice(index, 1)[0];
    method.instance.removeEventListener('parameterDynamics', method.parameterDynamicsHandler);
  }
};


ControlComposer.prototype.has = function(instance) {
  return this._indexOfInstance(instance) >= 0;
};


ControlComposer.prototype._indexOfInstance = function(instance) {
  for (var i = 0; i < this._methods.length; i++) {
    if (this._methods[i].instance === instance) {
      return i;
    }
  }
  return -1;
};


ControlComposer.prototype.list = function() {
  var instances = [];
  for (var i = 0; i < this._methods.length; i++) {
    instances.push(this._methods[i].instance);
  }
  return instances;
};


ControlComposer.prototype._updateDynamics = function(storedDynamics, parameter, dynamics) {
  var parameterDynamics = storedDynamics[parameter];

  if (!parameterDynamics) {
    throw new Error("Unknown control parameter " + parameter);
  }

  var newTime = this._now();
  parameterDynamics.dynamics.update(dynamics, (newTime - parameterDynamics.time)/1000);
  parameterDynamics.time = newTime;

  this.emit('change');
};


ControlComposer.prototype._resetComposedOffsets = function() {
  for (var i = 0; i < this._parameters.length; i++) {
    this._composedOffsets[this._parameters[i]] = 0;
  }
};


ControlComposer.prototype.offsets = function() {
  var parameter;
  var changing = false;

  var currentTime = this._now();

  this._resetComposedOffsets();

  for (var i = 0; i < this._methods.length; i++) {
    var methodDynamics = this._methods[i].dynamics;

    for (var p = 0; p < this._parameters.length; p++) {
      parameter = this._parameters[p];
      var parameterDynamics = methodDynamics[parameter];
      var dynamics = parameterDynamics.dynamics;


      // Add offset to composed offset
      if (dynamics.offset != null) {
        this._composedOffsets[parameter] += dynamics.offset;
        // Reset offset
        dynamics.offset = null;
      }

      // Calculate offset from velocity and add it
      var elapsed = (currentTime - parameterDynamics.time)/1000;
      var offsetFromVelocity = dynamics.offsetFromVelocity(elapsed);

      if(offsetFromVelocity) {
        this._composedOffsets[parameter] += offsetFromVelocity;
      }

      // Update velocity on dynamics
      var currentVelocity = dynamics.velocityAfter(elapsed);
      dynamics.velocity = currentVelocity;

      // If there is still a velocity, set changing
      if(currentVelocity) {
        changing = true;
      }

      parameterDynamics.time = currentTime;
    }
  }

  this._composeReturn.changing = changing;
  return this._composeReturn;
};


ControlComposer.prototype.destroy = function() {
  var instances = this.list();
  for (var i = 0; i < instances.length; i++) {
    this.remove(instances[i]);
  }

  clearOwnProperties(this);
};


module.exports = ControlComposer;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/ControlCursor.js":
/*!**************************************************************!*\
  !*** ./node_modules/marzipano/src/controls/ControlCursor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var defaultOpts = {
  active: 'move',
  inactive: 'default',
  disabled: 'default'
};

/**
 * @class ControlCursor
 * @classdesc
 *
 * Sets the CSS cursor on a DOM element according to the state of a
 * {@link ControlMethod}.
 *
 * @param {Controls} controls Controls instance containing the control method.
 * @param {string} id ID of the control method.
 * @param {Element} element DOM element where the cursor should be set.
 * @param {Object} opts The control cursors. Each field must be a valid value
 *     for the `cursor` CSS property.
 * @param {string} [opts.active='move'] Cursor to set when the control method
 *     is enabled and active.
 * @param {string} [opts.inactive='default'] Cursor to set when the control
 *     method is enabled and inactive.
 * @param {string} [opts.disabled='default'] Cursor to set when the control
 *     method is disabled.
 */
function ControlCursor(controls, id, element, opts) {
  opts = defaults(opts || {}, defaultOpts);

  // TODO: This class may misbehave if the control method is unregistered and a
  // different control method is registered under the same id.

  this._element = element;
  this._controls = controls;
  this._id = id;

  this._attached = false;

  this._setActiveCursor = this._setCursor.bind(this, opts.active);
  this._setInactiveCursor = this._setCursor.bind(this, opts.inactive);
  this._setDisabledCursor = this._setCursor.bind(this, opts.disabled);
  this._setOriginalCursor = this._setCursor.bind(this, this._element.style.cursor);

  this._updateAttachmentHandler = this._updateAttachment.bind(this);

  controls.addEventListener('methodEnabled', this._updateAttachmentHandler);
  controls.addEventListener('methodDisabled', this._updateAttachmentHandler);
  controls.addEventListener('enabled', this._updateAttachmentHandler);
  controls.addEventListener('disabled', this._updateAttachmentHandler);

  this._updateAttachment();
}

/**
 * Destructor.
 */
ControlCursor.prototype.destroy = function() {
  this._detachFromControlMethod(this._controls.method(this._id));
  this._setOriginalCursor();

  this._controls.removeEventListener('methodEnabled',
      this._updateAttachmentHandler);
  this._controls.removeEventListener('methodDisabled',
      this._updateAttachmentHandler);
  this._controls.removeEventListener('enabled',
      this._updateAttachmentHandler);
  this._controls.removeEventListener('disabled',
      this._updateAttachmentHandler);

  clearOwnProperties(this);
};

ControlCursor.prototype._updateAttachment = function() {
  var controls = this._controls;
  var id = this._id;
  if (controls.enabled() && controls.method(id).enabled) {
    this._attachToControlMethod(controls.method(id));
  } else {
    this._detachFromControlMethod(controls.method(id));
  }
};

ControlCursor.prototype._attachToControlMethod = function(controlMethod) {
  if (!this._attached) {
    controlMethod.instance.addEventListener('active', this._setActiveCursor);
    controlMethod.instance.addEventListener('inactive', this._setInactiveCursor);

    if (controlMethod.active) {
      this._setActiveCursor();
    } else {
      this._setInactiveCursor();
    }

    this._attached = true;
  }
};

ControlCursor.prototype._detachFromControlMethod = function(controlMethod) {
  if (this._attached) {
    controlMethod.instance.removeEventListener('active', this._setActiveCursor);
    controlMethod.instance.removeEventListener('inactive', this._setInactiveCursor);

    this._setDisabledCursor();

    this._attached = false;
  }
};

ControlCursor.prototype._setCursor = function(cursor) {
  this._element.style.cursor = cursor;
}

module.exports = ControlCursor;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/Controls.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/controls/Controls.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Composer = __webpack_require__(/*! ./Composer */ "./node_modules/marzipano/src/controls/Composer.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var debug = typeof MARZIPANODEBUG !== 'undefined' && MARZIPANODEBUG.controls;

/**
 * @class Controls
 * @classdesc
 *
 * Set of controls which affect a view (e.g. keyboard, touch)
 *
 * {@link ControlMethod} instances can be registered on this class. The methods
 * are then combined to calculate the final parameters to change the {@link View}.
 *
 * Controls is attached to a {@link RenderLoop}. Currently it affects the
 * {@link view} of all {@link Layer} on the {@link Stage} of the
 * {@link RenderLoop} it is attached to. A more flexible API may be provided
 * in the future.
 *
 * The ControlMethod instances are registered with an id and may be enabled,
 * disabled and unregistered using that id. The whole Control can also be
 * enabled or disabled.
 *
 */
function Controls(opts) {
  opts = opts || {};

  this._methods = {};
  this._methodGroups = {};
  this._composer = new Composer();

  // Whether the controls are enabled.
  this._enabled = (opts && opts.enabled) ? !!opts.enabled : true;

  // How many control methods are enabled and in the active state.
  this._activeCount = 0;

  this.updatedViews_ = [];

  this._attachedRenderLoop = null;
}

eventEmitter(Controls);

/**
 * Destructor.
 */
Controls.prototype.destroy = function() {
  this.detach();
  this._composer.destroy();
  clearOwnProperties(this);
};


/**
 * @return {ControlMethod[]} List of registered @{link ControlMethod instances}
 */
Controls.prototype.methods = function() {
  var obj = {};
  for (var id in this._methods) {
    obj[id] = this._methods[id];
  }
  return obj;
};

/**
 * @param {String} id
 * @return {ControlMethod}
 */
Controls.prototype.method = function(id) {
  return this._methods[id];
};

/**
 * @param {String} id
 * @param {ControlMethod} instance
 * @param {Boolean} [enable=false]
 */
Controls.prototype.registerMethod = function(id, instance, enable) {
  if (this._methods[id]) {
    throw new Error('Control method already registered with id ' + id);
  }

  this._methods[id] = {
    instance: instance,
    enabled: false,
    active: false,
    activeHandler: this._handleActive.bind(this, id),
    inactiveHandler: this._handleInactive.bind(this, id)
  };

  if(enable) {
    this.enableMethod(id, instance);
  }
};


/**
 * @param {String} id
 */
Controls.prototype.unregisterMethod = function(id) {
  var method = this._methods[id];
  if (!method) {
    throw new Error('No control method registered with id ' + id);
  }
  if (method.enabled) {
    this.disableMethod(id);
  }
  delete this._methods[id];
};

/**
 * @param {String} id
 */
Controls.prototype.enableMethod = function(id) {
  var method = this._methods[id];
  if (!method) {
    throw new Error('No control method registered with id ' + id);
  }
  if (method.enabled) {
    return;
  }
  method.enabled = true;
  if (method.active) {
    this._incrementActiveCount();
  }
  this._listen(id);
  this._updateComposer();
  this.emit('methodEnabled', id);
};


/**
 * @param {String} id
 */
Controls.prototype.disableMethod = function(id) {
  var method = this._methods[id];
  if (!method) {
    throw new Error('No control method registered with id ' + id);
  }
  if (!method.enabled) {
    return;
  }
  method.enabled = false;
  if (method.active) {
    this._decrementActiveCount();
  }
  this._unlisten(id);
  this._updateComposer();
  this.emit('methodDisabled', id);
};


/**
 * Create a method group, which can be used to more conveniently enable or
 * disable several control methods at once
 * @param {String} groupId
 * @param {String[]} methodIds
 */
Controls.prototype.addMethodGroup = function(groupId, methodIds) {
  this._methodGroups[groupId] = methodIds;
}

/**
 * @param {String} groupId
 */
Controls.prototype.removeMethodGroup = function(id) {
  delete this._methodGroups[id];
}

/**
 * @return {ControlMethodGroup[]} List of control method groups
 */
Controls.prototype.methodGroups = function() {
  var obj = {};
  for (var id in this._methodGroups) {
    obj[id] = this._methodGroups[id];
  }
  return obj;
}

/**
 * Enables all the control methods in the group
 * @param {String} groupId
 */
Controls.prototype.enableMethodGroup = function(id) {
  var self = this;
  self._methodGroups[id].forEach(function(methodId) {
    self.enableMethod(methodId);
  });
}

/**
 * Disables all the control methods in the group
 * @param {String} groupId
 */
Controls.prototype.disableMethodGroup = function(id) {
  var self = this;
  self._methodGroups[id].forEach(function(methodId) {
    self.disableMethod(methodId);
  });
}

/**
 * @returns {Boolean}
 */
Controls.prototype.enabled = function() {
  return this._enabled;
};

/**
 * Enables the controls
 */
Controls.prototype.enable = function() {
  if (this._enabled) {
    return;
  }
  this._enabled = true;
  if (this._activeCount > 0) {
    this.emit('active');
  }
  this.emit('enabled');
  this._updateComposer();
};


/**
 * Disables the controls
 */
Controls.prototype.disable = function() {
  if (!this._enabled) {
    return;
  }
  this._enabled = false;
  if (this._activeCount > 0) {
    this.emit('inactive');
  }
  this.emit('disabled');
  this._updateComposer();
};



/**
 * Attaches the controls to a {@link RenderLoop}. The RenderLoop will be woken
 * up when the controls are activated
 *
 * @param {RenderLoop}
 */
Controls.prototype.attach = function(renderLoop) {
  if (this._attachedRenderLoop) {
    this.detach();
  }

  this._attachedRenderLoop = renderLoop;
  this._beforeRenderHandler = this._updateViewsWithControls.bind(this);
  this._changeHandler = renderLoop.renderOnNextFrame.bind(renderLoop);

  this._attachedRenderLoop.addEventListener('beforeRender', this._beforeRenderHandler);
  this._composer.addEventListener('change', this._changeHandler);
};

/**
 * Detaches the controls
 */
Controls.prototype.detach = function() {
  if (!this._attachedRenderLoop) {
    return;
  }

  this._attachedRenderLoop.removeEventListener('beforeRender', this._beforeRenderHandler);
  this._composer.removeEventListener('change', this._changeHandler);

  this._beforeRenderHandler = null;
  this._changeHandler = null;
  this._attachedRenderLoop = null;
};

/**
 * @param {Boolean}
 */
Controls.prototype.attached = function() {
  return this._attachedRenderLoop != null;
};


Controls.prototype._listen = function(id) {
  var method = this._methods[id];
  if (!method) {
    throw new Error('Bad method id');
  }
  method.instance.addEventListener('active', method.activeHandler);
  method.instance.addEventListener('inactive', method.inactiveHandler);
};


Controls.prototype._unlisten = function(id) {
  var method = this._methods[id];
  if (!method) {
    throw new Error('Bad method id');
  }
  method.instance.removeEventListener('active', method.activeHandler);
  method.instance.removeEventListener('inactive', method.inactiveHandler);
};


Controls.prototype._handleActive = function(id) {
  var method = this._methods[id];
  if (!method) {
    throw new Error('Bad method id');
  }
  if (!method.enabled) {
    throw new Error('Should not receive event from disabled control method');
  }
  if (!method.active) {
    method.active = true;
    this._incrementActiveCount();
  }
};


Controls.prototype._handleInactive = function(id) {
  var method = this._methods[id];
  if (!method) {
    throw new Error('Bad method id');
  }
  if (!method.enabled) {
    throw new Error('Should not receive event from disabled control method');
  }
  if (method.active) {
    method.active = false;
    this._decrementActiveCount();
  }
};


Controls.prototype._incrementActiveCount = function() {
  this._activeCount++;
  if (debug) {
    this._checkActiveCount();
  }
  if (this._enabled && this._activeCount === 1) {
    this.emit('active');
  }
};


Controls.prototype._decrementActiveCount = function() {
  this._activeCount--;
  if (debug) {
    this._checkActiveCount();
  }
  if (this._enabled && this._activeCount === 0) {
    this.emit('inactive');
  }
};


Controls.prototype._checkActiveCount = function() {
  var count = 0;
  for (var id in this._methods) {
    var method = this._methods[id];
    if (method.enabled && method.active) {
      count++;
    }
  }
  if (count != this._activeCount) {
    throw new Error('Bad control state');
  }
};


Controls.prototype._updateComposer = function() {
  var composer = this._composer;

  for (var id in this._methods) {
    var method = this._methods[id];
    var enabled = this._enabled && method.enabled;

    if (enabled && !composer.has(method.instance)) {
      composer.add(method.instance);
    }
    if (!enabled && composer.has(method.instance)) {
      composer.remove(method.instance);
    }
  }
};


Controls.prototype._updateViewsWithControls = function() {
  var controlData = this._composer.offsets();
  if (controlData.changing) {
    this._attachedRenderLoop.renderOnNextFrame();
  }

  // Update each view at most once, even when shared by multiple layers.
  // The number of views is expected to be small, so use an array to keep track.
  this.updatedViews_.length = 0;

  var layers = this._attachedRenderLoop.stage().listLayers();
  for (var i = 0; i < layers.length; i++) {
    var view = layers[i].view();
    if (this.updatedViews_.indexOf(view) < 0) {
      layers[i].view().updateWithControlParameters(controlData.offsets);
      this.updatedViews_.push(view);
    }
  }
};


module.exports = Controls;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/Drag.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/controls/Drag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var HammerGestures = __webpack_require__(/*! ./HammerGestures */ "./node_modules/marzipano/src/controls/HammerGestures.js");
var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var maxFriction = __webpack_require__(/*! ./util */ "./node_modules/marzipano/src/controls/util.js").maxFriction;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var defaultOptions = {
  friction: 6,
  maxFrictionTime: 0.3
};

var debug = typeof MARZIPANODEBUG !== 'undefined' && MARZIPANODEBUG.controls;

/**
 * @class DragControlMethod
 * @implements ControlMethod
 * @classdesc
 *
 * Controls the view by clicking/tapping and dragging.
 *
 * @param {Element} element Element to listen for events.
 * @param {string} pointerType Which Hammer.js pointer type to use (e.g.
 * `mouse` or `touch`).
 * @param {Object} opts
 * @param {number} opts.friction
 * @param {number} opts.maxFrictionTime
 */
function DragControlMethod(element, pointerType, opts) {
  this._element = element;

  this._opts = defaults(opts || {}, defaultOptions);

  this._startEvent = null;
  this._lastEvent = null;

  this._active = false;

  this._dynamics = {
    x: new Dynamics(),
    y: new Dynamics()
  };

  this._hammer = HammerGestures.get(element, pointerType);

  this._hammer.on("hammer.input", this._handleHammerEvent.bind(this));

  this._hammer.on('panstart', this._handleStart.bind(this));
  this._hammer.on('panmove', this._handleMove.bind(this));
  this._hammer.on('panend', this._handleEnd.bind(this));
  this._hammer.on('pancancel', this._handleEnd.bind(this));

}

eventEmitter(DragControlMethod);

/**
 * Destructor.
 */
DragControlMethod.prototype.destroy = function() {
  this._hammer.release();
  clearOwnProperties(this);
};

DragControlMethod.prototype._handleHammerEvent = function(e) {
  if (e.isFirst) {
    if (debug && this._active) {
      throw new Error('DragControlMethod active detected when already active');
    }
    this._active = true;
    this.emit('active');
  }
  if (e.isFinal) {
    if (debug && !this._active) {
      throw new Error('DragControlMethod inactive detected when already inactive');
    }
    this._active = false;
    this.emit('inactive');
  }
};

DragControlMethod.prototype._handleStart = function(e) {
  // Prevent this event from dragging other DOM elements, causing
  // unexpected behavior on Chrome.
  e.preventDefault();

  this._startEvent = e;
};


DragControlMethod.prototype._handleMove = function(e) {
  // Prevent this event from dragging other DOM elements, causing
  // unexpected behavior on Chrome.
  e.preventDefault();

  if (this._startEvent) {
    this._updateDynamicsMove(e);
    this.emit('parameterDynamics', 'axisScaledX', this._dynamics.x);
    this.emit('parameterDynamics', 'axisScaledY', this._dynamics.y);
  }
};


DragControlMethod.prototype._handleEnd = function(e) {
  // Prevent this event from dragging other DOM elements, causing
  // unexpected behavior on Chrome.
  e.preventDefault();

  if (this._startEvent) {
    this._updateDynamicsRelease(e);
    this.emit('parameterDynamics', 'axisScaledX', this._dynamics.x);
    this.emit('parameterDynamics', 'axisScaledY', this._dynamics.y);
  }

  this._startEvent = false;
  this._lastEvent = false;
};


DragControlMethod.prototype._updateDynamicsMove = function(e) {
  var x = e.deltaX;
  var y = e.deltaY;

  // When a second finger touches the screen, panstart sometimes has a large
  // offset at start; subtract that offset to prevent a sudden jump.
  var eventToSubtract = this._lastEvent || this._startEvent;

  if (eventToSubtract) {
    x -= eventToSubtract.deltaX;
    y -= eventToSubtract.deltaY;
  }

  var elementRect = this._element.getBoundingClientRect();
  var width = elementRect.right - elementRect.left;
  var height = elementRect.bottom - elementRect.top;

  x /= width;
  y /= height;

  this._dynamics.x.reset();
  this._dynamics.y.reset();
  this._dynamics.x.offset = -x;
  this._dynamics.y.offset = -y;

  this._lastEvent = e;
};


var tmpReleaseFriction = [ null, null ];
DragControlMethod.prototype._updateDynamicsRelease = function(e) {
  var elementRect = this._element.getBoundingClientRect();
  var width = elementRect.right - elementRect.left;
  var height = elementRect.bottom - elementRect.top;

  var x = 1000 * e.velocityX / width;
  var y = 1000 * e.velocityY / height;

  this._dynamics.x.reset();
  this._dynamics.y.reset();
  this._dynamics.x.velocity = x;
  this._dynamics.y.velocity = y;

  maxFriction(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, tmpReleaseFriction);
  this._dynamics.x.friction = tmpReleaseFriction[0];
  this._dynamics.y.friction = tmpReleaseFriction[1];
};


module.exports = DragControlMethod;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/Dynamics.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/controls/Dynamics.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @class Dynamics
 * @classdesc
 *
 * Represents how a control parameter changes. Used in the events emitted by
 * {@link ControlMethod}.
 *
 * @property {number} offset Parameter changed by a fixed value
 * @property {number} velocity Parameter is changing at this velocity
 * @property {number} friction The velocity will decrease at this rate
 */
function Dynamics() {
  this.velocity = null;
  this.friction = null;
  this.offset = null;
}

Dynamics.equals = function(d1, d2) {
  return d1.velocity === d2.velocity && d1.friction === d2.friction && d1.offset === d2.offset;
};

Dynamics.prototype.equals = function(other) {
  return Dynamics.equals(this, other);
};

Dynamics.prototype.update = function(other, elapsed) {
  if (other.offset) {
    // If other has an offset, make this.offset a number instead of null
    this.offset = this.offset || 0;
    this.offset += other.offset;
  }

  var offsetFromVelocity = this.offsetFromVelocity(elapsed);
  if (offsetFromVelocity) {
    // If there is an offset to add from the velocity, make this offset a number instead of null
    this.offset = this.offset || 0;
    this.offset += offsetFromVelocity;
  }

  this.velocity = other.velocity;
  this.friction = other.friction;
};

Dynamics.prototype.reset = function() {
  this.velocity = null;
  this.friction = null;
  this.offset = null;
};


Dynamics.prototype.velocityAfter = function(elapsed) {
  if (!this.velocity) {
    return null;
  }
  if (this.friction) {
    return decreaseAbs(this.velocity, this.friction *elapsed);
  }
  return this.velocity;
};

Dynamics.prototype.offsetFromVelocity = function(elapsed) {
  elapsed = Math.min(elapsed, this.nullVelocityTime());

  var velocityEnd = this.velocityAfter(elapsed);
  var averageVelocity = (this.velocity + velocityEnd) / 2;

  return averageVelocity * elapsed;
};


Dynamics.prototype.nullVelocityTime = function() {
  if (this.velocity == null) {
    return 0;
  }
  if (this.velocity && !this.friction) {
    return Infinity;
  }
  return Math.abs(this.velocity / this.friction);
};

function decreaseAbs(num, dec) {
  if (num < 0) {
    return Math.min(0, num + dec);
  }
  if (num > 0) {
    return Math.max(0, num - dec);
  }
  return 0;
}

module.exports = Dynamics;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/ElementPress.js":
/*!*************************************************************!*\
  !*** ./node_modules/marzipano/src/controls/ElementPress.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class ElementPressControlMethod
 * @implements ControlMethod
 * @classdesc
 *
 * Sets the velocity and friction of a single parameter by pressing and
 * unpressing a DOM element.
 *
 * @param {Element} element Element which activates the method when pressed
 * @param {string} parameter The parameter to be controlled (e.g. `x`, `y` or `zoom`)
 * @param {number} velocity Velocity at which the parameter changes. Use a
 * negative number for opposite direction
 * @param {number} friction Friction at which the parameter stops
*/
function ElementPressControlMethod(element, parameter, velocity, friction) {
  if(!element) {
    throw new Error("ElementPressControlMethod: element must be defined");
  }
  if(!parameter) {
    throw new Error("ElementPressControlMethod: parameter must be defined");
  }
  if(!velocity) {
    throw new Error("ElementPressControlMethod: velocity must be defined");
  }
  if(!friction) {
    throw new Error("ElementPressControlMethod: friction must be defined");
  }

  this._element = element;

  this._pressHandler = this._handlePress.bind(this);
  this._releaseHandler = this._handleRelease.bind(this);

  element.addEventListener('mousedown', this._pressHandler);
  element.addEventListener('mouseup', this._releaseHandler);
  element.addEventListener('mouseleave', this._releaseHandler);
  element.addEventListener('touchstart', this._pressHandler);
  element.addEventListener('touchmove', this._releaseHandler);
  element.addEventListener('touchend', this._releaseHandler);

  this._parameter = parameter;
  this._velocity = velocity;
  this._friction = friction;
  this._dynamics = new Dynamics();

  this._pressing = false;
}
eventEmitter(ElementPressControlMethod);

/**
 * Destructor.
 */
ElementPressControlMethod.prototype.destroy = function() {
  this._element.removeEventListener('mousedown', this._pressHandler);
  this._element.removeEventListener('mouseup', this._releaseHandler);
  this._element.removeEventListener('mouseleave', this._releaseHandler);
  this._element.removeEventListener('touchstart', this._pressHandler);
  this._element.removeEventListener('touchmove', this._releaseHandler);
  this._element.removeEventListener('touchend', this._releaseHandler);
  clearOwnProperties(this);
};

ElementPressControlMethod.prototype._handlePress = function() {
  this._pressing = true;

  this._dynamics.velocity = this._velocity;
  this._dynamics.friction = 0;
  this.emit('parameterDynamics', this._parameter, this._dynamics);
  this.emit('active');
};

ElementPressControlMethod.prototype._handleRelease = function() {
  if(this._pressing) {
    this._dynamics.friction = this._friction;
    this.emit('parameterDynamics', this._parameter, this._dynamics);
    this.emit('inactive');
  }

  this._pressing = false;
};

module.exports = ElementPressControlMethod;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/HammerGestures.js":
/*!***************************************************************!*\
  !*** ./node_modules/marzipano/src/controls/HammerGestures.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Hammer = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
var browser = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");

var nextId = 1;
var idProperty = 'MarzipanoHammerElementId';
function getKeyForElementAndType(element, type) {
  if (!element[idProperty]) {
    element[idProperty] = nextId++;
  }
  return type + element[idProperty];
}


/**
 * @class HammerGestures
 * @classdesc
 *
 * Manages Hammer.js instances. One instance is created for each combination of
 * DOM element and pointer type.
 */
function HammerGestures() {
  this._managers = {};
  this._refCount = {};
}


HammerGestures.prototype.get = function(element, type) {
  var key = getKeyForElementAndType(element, type);
  if (!this._managers[key]) {
    this._managers[key] = this._createManager(element, type);
    this._refCount[key] = 0;
  }
  this._refCount[key]++;
  return new HammerGesturesHandle(this, this._managers[key], element, type);
};


HammerGestures.prototype._createManager = function(element, type) {
  var manager = new Hammer.Manager(element);

  // Managers are created with different parameters for different pointer
  // types.
  if (type === 'mouse') {
    manager.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));
  }
  else if (type === 'touch' || type === 'pen' || type === 'kinect') {
    // On touch one wants to have both panning and pinching. The panning
    // recognizer needs a threshold to allow the pinch to be recognized.
    manager.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 20, pointers: 1 }));
    if (!(browser.msie && parseFloat(browser.version) < 10)) {
      // Do not add pinch to IE8-9 to prevent focus issues which prevent wheel scrolling from
      // working.
      manager.add(new Hammer.Pinch());
    }
  }

  return manager;
};


HammerGestures.prototype._releaseHandle = function(element, type) {
  var key = getKeyForElementAndType(element, type);
  if (this._refCount[key]) {
    this._refCount[key]--;
    if (!this._refCount[key]) {
      this._managers[key].destroy();
      delete this._managers[key];
      delete this._refCount[key];
    }
  }
};


function HammerGesturesHandle(hammerGestures, manager, element, type) {
  this._manager = manager;
  this._element = element;
  this._type = type;
  this._hammerGestures = hammerGestures;
  this._eventHandlers = [];
}


HammerGesturesHandle.prototype.on = function(events, handler) {
  var type = this._type;
  var handlerFilteredEvents = function(e) {
    if (type === e.pointerType) {
      handler(e);
    }
  };

  this._eventHandlers.push({ events: events, handler: handlerFilteredEvents });
  this._manager.on(events, handlerFilteredEvents);
};


HammerGesturesHandle.prototype.release = function() {
  for (var i = 0; i < this._eventHandlers.length; i++) {
    var eventHandler = this._eventHandlers[i];
    this._manager.off(eventHandler.events, eventHandler.handler);
  }

  this._hammerGestures._releaseHandle(this._element, this._type);
  this._manager = null;
  this._element = null;
  this._type = null;
  this._hammerGestures = null;
};


HammerGesturesHandle.prototype.manager = function() {
  return this._manager;
};


module.exports = new HammerGestures();


/***/ }),

/***/ "./node_modules/marzipano/src/controls/Key.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/controls/Key.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class KeyControlMethod
 * @implements ControlMethod
 * @classdesc
 *
 * Sets the velocity and friction of a single parameter by pressing and
 * unpressing a key.
 *
 * @param {number} keyCode Key which activates the method when pressed
 * @param {string} parameter The parameter to be controlled (e.g. `x`, `y` or `zoom`)
 * @param {number} velocity Velocity at which the parameter changes. Use a
 * negative number for opposite direction
 * @param {number} friction Friction at which the parameter stops
 * @param {Element} [element=document] DOM element where the key events are listened to
 */
function KeyControlMethod(keyCode, parameter, velocity, friction, element) {
  if(!keyCode) {
    throw new Error("KeyControlMethod: keyCode must be defined");
  }
  if(!parameter) {
    throw new Error("KeyControlMethod: parameter must be defined");
  }
  if(!velocity) {
    throw new Error("KeyControlMethod: velocity must be defined");
  }
  if(!friction) {
    throw new Error("KeyControlMethod: friction must be defined");
  }

  element = element || document;

  this._keyCode = keyCode;
  this._parameter = parameter;
  this._velocity = velocity;
  this._friction = friction;
  this._element = element;

  this._keydownHandler = this._handlePress.bind(this);
  this._keyupHandler = this._handleRelease.bind(this);
  this._blurHandler = this._handleBlur.bind(this);

  this._element.addEventListener('keydown', this._keydownHandler);
  this._element.addEventListener('keyup', this._keyupHandler);
  window.addEventListener('blur', this._blurHandler);

  this._dynamics = new Dynamics();
  this._pressing = false;
}
eventEmitter(KeyControlMethod);

/**
 * Destructor.
 */
KeyControlMethod.prototype.destroy = function() {
  this._element.removeEventListener('keydown', this._keydownHandler);
  this._element.removeEventListener('keyup', this._keyupHandler);
  window.removeEventListener('blur', this._blurHandler);
  clearOwnProperties(this);
};

KeyControlMethod.prototype._handlePress = function(e) {
  if(e.keyCode !== this._keyCode) { return; }

  this._pressing = true;

  this._dynamics.velocity = this._velocity;
  this._dynamics.friction = 0;
  this.emit('parameterDynamics', this._parameter, this._dynamics);
  this.emit('active');
};

KeyControlMethod.prototype._handleRelease = function(e) {
  if(e.keyCode !== this._keyCode) { return; }

  if(this._pressing) {
    this._dynamics.friction = this._friction;
    this.emit('parameterDynamics', this._parameter, this._dynamics);
    this.emit('inactive');
  }

  this._pressing = false;
};

KeyControlMethod.prototype._handleBlur = function() {
  this._dynamics.velocity = 0;
  this.emit('parameterDynamics', this._parameter, this._dynamics);
  this.emit('inactive');

  this._pressing = false;
};

module.exports = KeyControlMethod;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/PinchZoom.js":
/*!**********************************************************!*\
  !*** ./node_modules/marzipano/src/controls/PinchZoom.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var HammerGestures = __webpack_require__(/*! ./HammerGestures */ "./node_modules/marzipano/src/controls/HammerGestures.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class PinchZoomControlMethod
 * @implements ControlMethod
 * @classdesc
 *
 * Control the view fov/zoom by pinching with two fingers.
 *
 * @param {Element} element Element to listen for events.
 * @param {string} pointerType Which Hammer.js pointer type to use
 * @param {Object} opts
 */
function PinchZoomControlMethod(element, pointerType, opts) {
  this._hammer = HammerGestures.get(element, pointerType);

  this._lastEvent = null;

  this._active = false;

  this._dynamics = new Dynamics();

  this._hammer.on('pinchstart', this._handleStart.bind(this));
  this._hammer.on('pinch', this._handleEvent.bind(this));
  this._hammer.on('pinchend', this._handleEnd.bind(this));
  this._hammer.on('pinchcancel', this._handleEnd.bind(this));
}

eventEmitter(PinchZoomControlMethod);

/**
 * Destructor.
 */
PinchZoomControlMethod.prototype.destroy = function() {
  this._hammer.release();
  clearOwnProperties(this);
};


PinchZoomControlMethod.prototype._handleStart = function() {
  if (!this._active) {
    this._active = true;
    this.emit('active');
  }
};


PinchZoomControlMethod.prototype._handleEnd = function() {
  this._lastEvent = null;

  if (this._active) {
    this._active = false;
    this.emit('inactive');
  }
};


PinchZoomControlMethod.prototype._handleEvent = function(e) {
  var scale = e.scale;

  if (this._lastEvent) {
    scale /= this._lastEvent.scale;
  }

  this._dynamics.offset = (scale - 1) * -1;
  this.emit('parameterDynamics', 'zoom', this._dynamics);

  this._lastEvent = e;
};


module.exports = PinchZoomControlMethod;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/Qtvr.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/controls/Qtvr.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var HammerGestures = __webpack_require__(/*! ./HammerGestures */ "./node_modules/marzipano/src/controls/HammerGestures.js");
var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var maxFriction = __webpack_require__(/*! ./util */ "./node_modules/marzipano/src/controls/util.js").maxFriction;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");


var defaultOptions = {
  speed: 8,
  friction: 6,
  maxFrictionTime: 0.3
};


/**
 * @class QtvrControlMethod
 * @implements ControlMethod
 * @classdesc
 *
 * Controls the view by holding the mouse button down and moving it.
 * Also known as "QTVR" control mode.
 *
 * @param {Element} element Element to listen for events.
 * @param {string} pointerType Which Hammer.js pointer type to use (e.g.
 * `mouse` or `touch`).
 * @param {Object} opts
 * @param {number} opts.speed
 * @param {number} opts.friction
 * @param {number} opts.maxFrictionTime
 */
// TODO: allow speed not change linearly with distance to click spot.
// Quadratic or other would allow a larger speed range.
function QtvrControlMethod(element, pointerType, opts) {
  this._element = element;

  this._opts = defaults(opts || {}, defaultOptions);

  this._active = false;

  this._hammer = HammerGestures.get(element, pointerType);

  this._dynamics = {
    x: new Dynamics(),
    y: new Dynamics()
  };

  this._hammer.on('panstart', this._handleStart.bind(this));
  this._hammer.on('panmove', this._handleMove.bind(this));
  this._hammer.on('panend', this._handleRelease.bind(this));
  this._hammer.on('pancancel', this._handleRelease.bind(this));
}

eventEmitter(QtvrControlMethod);

/**
 * Destructor.
 */
QtvrControlMethod.prototype.destroy = function() {
  this._hammer.release();
  clearOwnProperties(this);
};


QtvrControlMethod.prototype._handleStart = function(e) {
  // Prevent event dragging other DOM elements and causing strange behavior on Chrome
  e.preventDefault();

  if (!this._active) {
    this._active = true;
    this.emit('active');
  }
};


QtvrControlMethod.prototype._handleMove = function(e) {
  // Prevent event dragging other DOM elements and causing strange behavior on Chrome
  e.preventDefault();

  this._updateDynamics(e, false);
};


QtvrControlMethod.prototype._handleRelease = function(e) {
  // Prevent event dragging other DOM elements and causing strange behavior on Chrome
  e.preventDefault();

  this._updateDynamics(e, true);

  if (this._active) {
    this._active = false;
    this.emit('inactive');
  }
};


var tmpReleaseFriction = [ null, null ];
QtvrControlMethod.prototype._updateDynamics = function(e, release) {
  var elementRect = this._element.getBoundingClientRect();
  var width = elementRect.right - elementRect.left;
  var height = elementRect.bottom - elementRect.top;
  var maxDim = Math.max(width, height);

  var x = e.deltaX / maxDim * this._opts.speed;
  var y = e.deltaY / maxDim * this._opts.speed;

  this._dynamics.x.reset();
  this._dynamics.y.reset();
  this._dynamics.x.velocity = x;
  this._dynamics.y.velocity = y;

  if (release) {
    maxFriction(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, tmpReleaseFriction);
    this._dynamics.x.friction = tmpReleaseFriction[0];
    this._dynamics.y.friction = tmpReleaseFriction[1];
  }

  this.emit('parameterDynamics', 'x', this._dynamics.x);
  this.emit('parameterDynamics', 'y', this._dynamics.y);
};


module.exports = QtvrControlMethod;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/ScrollZoom.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/controls/ScrollZoom.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var WheelListener = __webpack_require__(/*! ./WheelListener */ "./node_modules/marzipano/src/controls/WheelListener.js");
var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var defaultOptions = {
  frictionTime: 0.2,
  zoomDelta: 0.001
};

/**
 * @class ScrollZoomControlMethod
 * @implements ControlMethod
 * @classdesc
 *
 * Controls the fov/zoom through the mouse wheel.
 *
 * @param {Element} element Element to listen for events.
 * @param {Object} opts
 * @param {number} [opts.frictionTime=0.2]
 * @param {number} [opts.zoomDelta=0.001]
 */
function ScrollZoomControlMethod(element, opts) {
  this._opts = defaults(opts || {}, defaultOptions);

  this._dynamics = new Dynamics();

  this._eventList = [];

  var fn = this._opts.frictionTime ? this.withSmoothing : this.withoutSmoothing;
  this._wheelListener = new WheelListener(element, fn.bind(this));
}

eventEmitter(ScrollZoomControlMethod);

/**
 * Destructor.
 */
ScrollZoomControlMethod.prototype.destroy = function() {
  this._wheelListener.destroy();
  clearOwnProperties(this);
};


ScrollZoomControlMethod.prototype.withoutSmoothing = function(e) {
  this._dynamics.offset = wheelEventDelta(e) * this._opts.zoomDelta;
  this.emit('parameterDynamics', 'zoom', this._dynamics);

  e.preventDefault();

  this.emit('active');
  this.emit('inactive');
};


ScrollZoomControlMethod.prototype.withSmoothing = function(e) {
  var currentTime = e.timeStamp;

  // Record event.
  this._eventList.push(e);

  // Remove events whose smoothing has already expired.
  while (this._eventList[0].timeStamp < currentTime - this._opts.frictionTime*1000) {
    this._eventList.shift(0);
  }

  // Get the current velocity from the recorded events.
  // Each wheel movement causes a velocity of change/frictionTime during frictionTime.
  var velocity = 0;
  for (var i = 0; i < this._eventList.length; i++) {
    var zoomChangeFromEvent = wheelEventDelta(this._eventList[i]) * this._opts.zoomDelta;
    velocity += zoomChangeFromEvent / this._opts.frictionTime;
  }

  this._dynamics.velocity = velocity;
  this._dynamics.friction = Math.abs(velocity) / this._opts.frictionTime;

  this.emit('parameterDynamics', 'zoom', this._dynamics);

  e.preventDefault();

  this.emit('active');
  this.emit('inactive');
};


function wheelEventDelta(e) {
  var multiplier = e.deltaMode == 1 ? 20 : 1;
  return e.deltaY * multiplier;
}


module.exports = ScrollZoomControlMethod;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/Velocity.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/controls/Velocity.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var Dynamics = __webpack_require__(/*! ./Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

/**
 * @class VelocityControlMethod
 * @implements ControlMethod
 * @classdesc
 *
 * Sets the velocity and friction of a single parameter.
 *
 * The user should emit 'active' and 'inactive' events if required.
 *
 * @param {String} parameter The parameter to be controlled (e.g. `x`, `y` or `zoom`)
*/
function VelocityControlMethod(parameter) {
  if(!parameter) {
    throw new Error("VelocityControlMethod: parameter must be defined");
  }

  this._parameter = parameter;
  this._dynamics = new Dynamics();
}
eventEmitter(VelocityControlMethod);

/**
 * Destructor.
 */
VelocityControlMethod.prototype.destroy = function() {
  clearOwnProperties(this);
};

/**
 * Set the parameter's velocity.
 * @param {Number} velocity
 */
VelocityControlMethod.prototype.setVelocity = function(velocity) {
  this._dynamics.velocity = velocity;
  this.emit('parameterDynamics', this._parameter, this._dynamics);
};

/**
 * Set the parameter's friction.
 * @param {Number} friction
 */
VelocityControlMethod.prototype.setFriction = function(friction) {
  this._dynamics.friction = friction;
  this.emit('parameterDynamics', this._parameter, this._dynamics);
};

module.exports = VelocityControlMethod;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/WheelListener.js":
/*!**************************************************************!*\
  !*** ./node_modules/marzipano/src/controls/WheelListener.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

// Cross-browser mouse wheel event listener.
// Adapted from: https://developer.mozilla.org/en-US/docs/Web/Events/wheel
// This version requires eventShim.
function WheelListener(elem, callback, useCapture) {
  var eventName = getEventName();

  if (eventName === 'wheel') {
    this._fun = callback;
    this._elem = elem;
    this._elem.addEventListener('wheel', this._fun, useCapture);
  } else if (eventName === 'mousewheel') {
    this._fun = fallbackHandler(callback);
    this._elem = elem;
    this._elem.addEventListener('mousewheel', this._fun, useCapture);
  } else {
    throw new Error('Browser does not support mouse wheel events');
  }
}

/**
 * Destructor.
 */
WheelListener.prototype.destroy = function() {
  this._elem.removeEventListener(getEventName(), this._fun);
  clearOwnProperties(this);
};

function fallbackHandler(callback) {
  return function handleWheelEvent(originalEvent) {
    if (!originalEvent) {
      originalEvent = window.event;
    }

    // Create a normalized event object.
    var event = {
      originalEvent: originalEvent,
      target: originalEvent.target || originalEvent.srcElement,
      type: "wheel",
      deltaMode: 1,
      deltaX: 0,
      deltaZ: 0,
      timeStamp: originalEvent.timeStamp || Date.now(),
      preventDefault: originalEvent.preventDefault.bind(originalEvent)
    };

    // Calculate deltaY.
    event.deltaY = - 1/40 * originalEvent.wheelDelta;
    if (originalEvent.wheelDeltaX) {
      // Calculate deltaX.
      event.deltaX = - 1/40 * originalEvent.wheelDeltaX;
    }

    // Fire the callback.
    return callback(event);
  };
}

// Detect the supported wheel event name and cache the result.
var eventName;
function getEventName() {
  if (eventName !== undefined) {
    return eventName;
  }
  if ('onwheel' in document.createElement('div')) {
    // Modern browsers support 'wheel'.
    return (eventName = 'wheel');
  } else if (document.onmousewheel !== undefined) {
    // Webkit and IE support at least 'mousewheel'.
    return (eventName = 'mousewheel');
  } else {
    return (eventName = null);
  }
}

module.exports = WheelListener;


/***/ }),

/***/ "./node_modules/marzipano/src/controls/registerDefaultControls.js":
/*!************************************************************************!*\
  !*** ./node_modules/marzipano/src/controls/registerDefaultControls.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/marzipano/src/util/defaults.js");
var DragControlMethod = __webpack_require__(/*! ./Drag */ "./node_modules/marzipano/src/controls/Drag.js");
var QtvrControlMethod = __webpack_require__(/*! ./Qtvr */ "./node_modules/marzipano/src/controls/Qtvr.js");
var ScrollZoomControlMethod = __webpack_require__(/*! ./ScrollZoom */ "./node_modules/marzipano/src/controls/ScrollZoom.js");
var PinchZoomControlMethod = __webpack_require__(/*! ./PinchZoom */ "./node_modules/marzipano/src/controls/PinchZoom.js");
var KeyControlMethod = __webpack_require__(/*! ./Key */ "./node_modules/marzipano/src/controls/Key.js");

var defaultOptions = {
  mouseViewMode: 'drag'
};

/**
 * Instantiate and register some commonly used {@link ControlMethod} instances.
 *
 * The following instances are registered:
 *   - mouseViewDrag
 *   - mouseViewQtvr
 *   - touchView
 *   - pinch
 *   - arrowKeys
 *   - plusMinusKeys
 *   - wasdKeys
 *   - qeKeys
 *
 * @param {Controls} controls Where to register the instances.
 * @param {Element} element Element to listen for events.
 * @param {Object} opts
 * @param {'drag'|'qtvr'} mouseViewMode
 */
function registerDefaultControls(controls, element, opts) {
  opts = defaults(opts || {}, defaultOptions);

  var controlMethods = {
    mouseViewDrag: new DragControlMethod(element, 'mouse'),
    mouseViewQtvr: new QtvrControlMethod(element, 'mouse'),
    touchView: new DragControlMethod(element, 'touch'),
    pinch: new PinchZoomControlMethod(element, 'touch'),

    leftArrowKey: new KeyControlMethod(37, 'x', -0.7, 3),
    rightArrowKey: new KeyControlMethod(39, 'x', 0.7, 3),
    upArrowKey: new KeyControlMethod(38, 'y', -0.7, 3),
    downArrowKey: new KeyControlMethod(40, 'y', 0.7, 3),
    plusKey: new KeyControlMethod(107, 'zoom', -0.7, 3),
    minusKey: new KeyControlMethod(109, 'zoom', 0.7, 3),

    wKey: new KeyControlMethod(87, 'y', -0.7, 3),
    aKey: new KeyControlMethod(65, 'x', -0.7, 3),
    sKey: new KeyControlMethod(83, 'y', 0.7, 3),
    dKey: new KeyControlMethod(68, 'x', 0.7, 3),
    qKey: new KeyControlMethod(81, 'roll', 0.7, 3),
    eKey: new KeyControlMethod(69, 'roll', -0.7, 3)
  };

  if(opts.scrollZoom !== false) {
    controlMethods.scrollZoom = new ScrollZoomControlMethod(element); //{ frictionTime: 0 }
  }

  var controlMethodGroups = {
    arrowKeys: [ 'leftArrowKey', 'rightArrowKey', 'upArrowKey', 'downArrowKey' ],
    plusMinusKeys: [ 'plusKey', 'minusKey' ],
    wasdKeys: [ 'wKey', 'aKey', 'sKey', 'dKey' ],
    qeKeys: [ 'qKey', 'eKey' ]
  };


  var enabledControls = [ 'scrollZoom', 'touchView', 'pinch' ];
  switch (opts.mouseViewMode) {
    case 'drag':
      enabledControls.push('mouseViewDrag');
      break;
    case 'qtvr':
      enabledControls.push('mouseViewQtvr');
      break;
    default:
      throw new Error("Unknown mouse view mode: " + opts.mouseViewMode);
  }

  for (var id in controlMethods) {
    var method = controlMethods[id];
    controls.registerMethod(id, method);
    if (enabledControls.indexOf(id) >= 0) {
      controls.enableMethod(id);
    }
  }

  for (var groupId in controlMethodGroups) {
    var methodGroup = controlMethodGroups[groupId];
    controls.addMethodGroup(groupId, methodGroup);
  }

  return controlMethods;
}

module.exports = registerDefaultControls;

/***/ }),

/***/ "./node_modules/marzipano/src/controls/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/controls/util.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function maxFriction(friction, velocityX, velocityY, maxFrictionTime, result) {
  var velocity = Math.sqrt(Math.pow(velocityX,2) + Math.pow(velocityY,2));
  friction = Math.max(friction, velocity/maxFrictionTime);
  changeVectorNorm(velocityX, velocityY, friction, result);
  result[0] = Math.abs(result[0]);
  result[1] = Math.abs(result[1]);
}

function changeVectorNorm(x, y, n, result) {
  var theta = Math.atan(y/x);
  result[0] = n * Math.cos(theta);
  result[1] = n * Math.sin(theta);
}

module.exports = {
  maxFriction: maxFriction,
  changeVectorNorm: changeVectorNorm
};

/***/ }),

/***/ "./node_modules/marzipano/src/geometries/Cube.js":
/*!*******************************************************!*\
  !*** ./node_modules/marzipano/src/geometries/Cube.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var hash = __webpack_require__(/*! ../util/hash */ "./node_modules/marzipano/src/util/hash.js");
var TileSearcher = __webpack_require__(/*! ../TileSearcher */ "./node_modules/marzipano/src/TileSearcher.js");
var LruMap = __webpack_require__(/*! ../collections/LruMap */ "./node_modules/marzipano/src/collections/LruMap.js");
var Level = __webpack_require__(/*! ./Level */ "./node_modules/marzipano/src/geometries/Level.js");
var makeLevelList = __webpack_require__(/*! ./common */ "./node_modules/marzipano/src/geometries/common.js").makeLevelList;
var makeSelectableLevelList = __webpack_require__(/*! ./common */ "./node_modules/marzipano/src/geometries/common.js").makeSelectableLevelList;
var clamp = __webpack_require__(/*! ../util/clamp */ "./node_modules/marzipano/src/util/clamp.js");
var cmp = __webpack_require__(/*! ../util/cmp */ "./node_modules/marzipano/src/util/cmp.js");
var type = __webpack_require__(/*! ../util/type */ "./node_modules/marzipano/src/util/type.js");
var vec3 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec3;
var vec4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec4;

var neighborsCacheSize = 64;

// Some renderer implementations require tiles to be padded around with
// repeated pixels to prevent the appearance of visible seams between tiles.
//
// In order to prevent the padding from being visible, the tiles must be
// padded and stacked such that the padding on one of the sides, when present,
// stacks below the neighboring tile on that side.
//
// The padding rules are as follows:
// * Define a tile to be X-marginal if it contacts the X-edge of its cube face.
// * Pad top if the tile is top-marginal and the face is F or U.
// * Pad bottom unless the tile is bottom-marginal or the face is F or D.
// * Pad left if the tile is left-marginal and the face is F, L, U or D.
// * Pad right unless the tile is right-marginal or the face is F, R, U or D.
//
// The stacking rules are as follows:
// * Within an image, stack smaller zoom levels below larger zoom levels.
// * Within a level, stack tiles bottom to top in FUDLRB face order.
// * Within a face, stack tiles bottom to top in ascending Y coordinate order.
// * Within a row, stack tiles bottom to top in ascending X coordinate order.
//
// Crucially, these rules affect the implementation of the tile cmp() method,
// which determines the stacking order, and of the pad*() tile methods, which
// determine the amount of padding on each of the four sides of a tile.

// Initials for cube faces in stacking order.
var faceList = 'fudlrb';

// Rotation of each face, relative to the front face.
var faceRotation = {
  f: { x: 0, y: 0 },
  b: { x: 0, y: Math.PI },
  l: { x: 0, y: Math.PI/2 },
  r: { x: 0, y: -Math.PI/2 },
  u: { x: Math.PI/2, y: 0 },
  d: { x: -Math.PI/2, y: 0 }
};

// Zero vector.
var origin = vec3.create();

// Rotate a vector in ZXY order.
function rotateVector(vec, z, x, y) {
  if (z) {
    vec3.rotateZ(vec, vec, origin, z);
  }
  if (x) {
    vec3.rotateX(vec, vec, origin, x);
  }
  if (y) {
    vec3.rotateY(vec, vec, origin, y);
  }
}

// Normalized vectors pointing to the center of each face.
var faceVectors = {};
for (var i = 0; i < faceList.length; i++) {
  var face = faceList[i];
  var rotation = faceRotation[face];
  var v = vec3.fromValues(0,  0, -1);
  rotateVector(v, 0, rotation.x, rotation.y);
  faceVectors[face] = v;
}

// Map each face to its adjacent faces.
// The order is as suggested by the front face.
var adjacentFace = {
  f: [ 'l', 'r', 'u', 'd' ],
  b: [ 'r', 'l', 'u', 'd' ],
  l: [ 'b', 'f', 'u', 'd' ],
  r: [ 'f', 'b', 'u', 'd' ],
  u: [ 'l', 'r', 'b', 'f' ],
  d: [ 'l', 'r', 'f', 'b' ]
};

// Offsets to apply to the (x,y) coordinates of a tile to get its neighbors.
var neighborOffsets = [
  [  0,  1 ], // top
  [  1,  0 ], // right
  [  0, -1 ], // bottom
  [ -1,  0 ]  // left
];


/**
 * @class CubeTile
 * @implements Tile
 * @classdesc
 *
 * A tile in a @{CubeGeometry}.
 */
function CubeTile(face, x, y, z, geometry) {
  this.face = face;
  this.x = x;
  this.y = y;
  this.z = z;
  this._geometry = geometry;
  this._level = geometry.levelList[z];
}


CubeTile.prototype.rotX = function() {
  return faceRotation[this.face].x;
};


CubeTile.prototype.rotY = function() {
  return faceRotation[this.face].y;
};


CubeTile.prototype.centerX = function() {
  return (this.x + 0.5) / this._level.numHorizontalTiles() - 0.5;
};


CubeTile.prototype.centerY = function() {
  return 0.5 - (this.y + 0.5) / this._level.numVerticalTiles();
};


CubeTile.prototype.scaleX = function() {
  return 1 / this._level.numHorizontalTiles();
};


CubeTile.prototype.scaleY = function() {
  return 1 / this._level.numVerticalTiles();
};


CubeTile.prototype.width = function() {
  return this._level.tileWidth();
};


CubeTile.prototype.height = function() {
  return this._level.tileHeight();
};


CubeTile.prototype.levelWidth = function() {
  return this._level.width();
};


CubeTile.prototype.levelHeight = function() {
  return this._level.height();
};


CubeTile.prototype.atTopLevel = function() {
  return this.z === 0;
};


CubeTile.prototype.atBottomLevel = function() {
  return this.z === this._geometry.levelList.length - 1;
};


CubeTile.prototype.atTopEdge = function() {
  return this.y === 0;
};


CubeTile.prototype.atBottomEdge = function() {
  return this.y === this._level.numVerticalTiles() - 1;
};


CubeTile.prototype.atLeftEdge = function() {
  return this.x === 0;
};


CubeTile.prototype.atRightEdge = function() {
  return this.x === this._level.numHorizontalTiles() - 1;
};


CubeTile.prototype.padTop = function() {
  return this.atTopEdge() && /[fu]/.test(this.face);
};


CubeTile.prototype.padBottom = function() {
  return !this.atBottomEdge() || /[fd]/.test(this.face);
};


CubeTile.prototype.padLeft = function() {
  return this.atLeftEdge() && /[flud]/.test(this.face);
};


CubeTile.prototype.padRight = function() {
  return !this.atRightEdge() || /[frud]/.test(this.face);
};


CubeTile.prototype.vertices = function(result) {
  if (!result) {
    result = [vec3.create(), vec3.create(), vec3.create(), vec3.create()];
  }

  var rot = faceRotation[this.face];

  function makeVertex(vec, x, y) {
    vec3.set(vec, x, y, -0.5);
    rotateVector(vec, 0, rot.x, rot.y);
  }

  var left = this.centerX() - this.scaleX() / 2;
  var right = this.centerX() + this.scaleX() / 2;
  var bottom = this.centerY() - this.scaleY() / 2;
  var top = this.centerY() + this.scaleY() / 2;

  makeVertex(result[0], left, top);
  makeVertex(result[1], right, top);
  makeVertex(result[2], right, bottom);
  makeVertex(result[3], left, bottom);

  return result;
};


CubeTile.prototype.parent = function() {

  if (this.atTopLevel()) {
    return null;
  }

  var face = this.face;
  var z = this.z;
  var x = this.x;
  var y = this.y;

  var geometry = this._geometry;
  var level = geometry.levelList[z];
  var parentLevel = geometry.levelList[z-1];

  var tileX = Math.floor(x / level.numHorizontalTiles() * parentLevel.numHorizontalTiles());
  var tileY = Math.floor(y / level.numVerticalTiles() * parentLevel.numVerticalTiles());
  var tileZ = z-1;

  return new CubeTile(face, tileX, tileY, tileZ, geometry);

};


CubeTile.prototype.children = function(result) {

  if (this.atBottomLevel()) {
    return null;
  }

  var face = this.face;
  var z = this.z;
  var x = this.x;
  var y = this.y;

  var geometry = this._geometry;
  var level = geometry.levelList[z];
  var childLevel = geometry.levelList[z+1];

  var nHoriz = childLevel.numHorizontalTiles() / level.numHorizontalTiles();
  var nVert = childLevel.numVerticalTiles() / level.numVerticalTiles();

  result = result || [];

  for (var h = 0; h < nHoriz; h++) {
    for (var v = 0; v < nVert; v++) {
      var tileX = nHoriz * x + h;
      var tileY = nVert * y + v;
      var tileZ = z+1;
      result.push(new CubeTile(face, tileX, tileY, tileZ, geometry));
    }
  }

  return result;

};


CubeTile.prototype.neighbors = function() {

  var geometry = this._geometry;
  var cache = geometry._neighborsCache;

  // Satisfy from cache when available.
  var cachedResult = cache.get(this);
  if (cachedResult) {
    return cachedResult;
  }

  var vec = geometry._vec;

  var face = this.face;
  var x = this.x;
  var y = this.y;
  var z = this.z;
  var level = this._level;

  var numX = level.numHorizontalTiles();
  var numY = level.numVerticalTiles();

  var result = [];

  for (var i = 0; i < neighborOffsets.length; i++) {
    var xOffset = neighborOffsets[i][0];
    var yOffset = neighborOffsets[i][1];

    var newX = x + xOffset;
    var newY = y + yOffset;
    var newZ = z;
    var newFace = face;

    if (newX < 0 || newX >= numX || newY < 0 || newY >= numY) {

      // If the neighboring tile belongs to a different face, calculate a
      // vector pointing to the edge between the two faces at the point the
      // tile and its neighbor meet, and convert it into tile coordinates for
      // the neighboring face.

      var xCoord = this.centerX();
      var yCoord = this.centerY();

      // First, calculate the vector as if the initial tile belongs to the
      // front face, so that the tile x,y coordinates map directly into the
      // x,y axes.

      if (newX < 0) {
        vec3.set(vec, -0.5, yCoord, -0.5);
        newFace = adjacentFace[face][0];
      } else if (newX >= numX) {
        vec3.set(vec, 0.5, yCoord, -0.5);
        newFace = adjacentFace[face][1];
      } else if (newY < 0) {
        vec3.set(vec, xCoord, 0.5, -0.5);
        newFace = adjacentFace[face][2];
      } else if (newY >= numY) {
        vec3.set(vec, xCoord, -0.5, -0.5);
        newFace = adjacentFace[face][3];
      }

      var rot;

      // Then, rotate the vector into the actual face the initial tile
      // belongs to.

      rot = faceRotation[face];
      rotateVector(vec, 0, rot.x, rot.y);

      // Finally, rotate the vector from the neighboring face into the front
      // face. Again, this is so that the neighboring tile x,y coordinates
      // map directly into the x,y axes.

      rot = faceRotation[newFace];
      rotateVector(vec, 0, -rot.x, -rot.y);

      // Calculate the neighboring tile coordinates.

      newX = clamp(Math.floor((0.5 + vec[0]) * numX), 0, numX - 1);
      newY = clamp(Math.floor((0.5 - vec[1]) * numY), 0, numY - 1);
    }

    result.push(new CubeTile(newFace, newX, newY, newZ, geometry));
  }

  // Store into cache to satisfy future requests.
  cache.set(this, result);

  return result;

};


CubeTile.prototype.hash = function() {
  return hash(faceList.indexOf(this.face), this.z, this.y, this.x);
};


CubeTile.prototype.equals = function(that) {
  return (this.geometry === that.geometry &&
      this.face === that.face &&
      this.z === that.z &&
      this.y === that.y &&
      this.x === that.x);
};


CubeTile.prototype.cmp = function(that) {
  return (cmp(this.z, that.z) ||
  cmp(faceList.indexOf(this.face), faceList.indexOf(that.face)) ||
  cmp(this.y, that.y) || cmp(this.x, that.x));
};


CubeTile.prototype.str = function() {
  return 'CubeTile(' + tile.face + ', ' + tile.x + ', ' + tile.y + ', ' + tile.z + ')';
};


function CubeLevel(levelProperties) {
  this.constructor.super_.call(this, levelProperties);

  this._size = levelProperties.size;
  this._tileSize = levelProperties.tileSize;

  if (this._size % this._tileSize !== 0) {
    throw new Error('Level size is not multiple of tile size: ' +
                    this._size + ' ' + this._tileSize);
  }
}

inherits(CubeLevel, Level);


CubeLevel.prototype.width = function() {
  return this._size;
};


CubeLevel.prototype.height = function() {
  return this._size;
};


CubeLevel.prototype.tileWidth = function() {
  return this._tileSize;
};


CubeLevel.prototype.tileHeight = function() {
  return this._tileSize;
};


CubeLevel.prototype._validateWithParentLevel = function(parentLevel) {

  var width = this.width();
  var height = this.height();
  var tileWidth = this.tileWidth();
  var tileHeight = this.tileHeight();
  var numHorizontal = this.numHorizontalTiles();
  var numVertical = this.numVerticalTiles();

  var parentWidth = parentLevel.width();
  var parentHeight = parentLevel.height();
  var parentTileWidth = parentLevel.tileWidth();
  var parentTileHeight = parentLevel.tileHeight();
  var parentNumHorizontal = parentLevel.numHorizontalTiles();
  var parentNumVertical = parentLevel.numVerticalTiles();

  if (width % parentWidth !== 0) {
    throw new Error('Level width must be multiple of parent level: ' +
                    width + ' vs. ' + parentWidth);
  }

  if (height % parentHeight !== 0) {
    throw new Error('Level height must be multiple of parent level: ' +
                    height + ' vs. ' + parentHeight);
  }

  if (numHorizontal % parentNumHorizontal !== 0) {
    throw new Error('Number of horizontal tiles must be multiple of parent level: ' +
      numHorizontal + " (" + width + '/' + tileWidth + ')' + " vs. " +
      parentNumHorizontal + " (" + parentWidth + '/' + parentTileWidth + ')');
  }

  if (numVertical % parentNumVertical !== 0) {
    throw new Error('Number of vertical tiles must be multiple of parent level: ' +
      numVertical + " (" + height + '/' + tileHeight + ')' + " vs. " +
      parentNumVertical + " (" + parentHeight + '/' + parentTileHeight + ')');
  }

};


/**
 * @class CubeGeometry
 * @implements Geometry
 * @classdesc
 *
 * A {@link Geometry} implementation suitable for tiled cube images with
 * multiple resolution levels.
 *
 * The following restrictions apply:
 *   - All tiles in a level must be square and form a rectangular grid;
 *   - The size of a level must be a multiple of the tile size;
 *   - The size of a level must be a multiple of the parent level size;
 *   - The number of tiles in a level must be a multiple of the number of tiles
 *     in the parent level.
 *
 * @param {Object[]} levelPropertiesList Level description
 * @param {number} levelPropertiesList[].size Cube face size in pixels
 * @param {number} levelPropertiesList[].tileSize Tile size in pixels
 */
function CubeGeometry(levelPropertiesList) {
  if (type(levelPropertiesList) !== 'array') {
    throw new Error('Level list must be an array');
  }

  this.levelList = makeLevelList(levelPropertiesList, CubeLevel);
  this.selectableLevelList = makeSelectableLevelList(this.levelList);

  for (var i = 1; i < this.levelList.length; i++) {
    this.levelList[i]._validateWithParentLevel(this.levelList[i-1]);
  }

  this._tileSearcher = new TileSearcher(this);

  this._neighborsCache = new LruMap(neighborsCacheSize);

  this._vec = vec4.create();

  this._viewSize = {};
}


CubeGeometry.prototype.maxTileSize = function() {
  var maxTileSize = 0;
  for (var i = 0; i < this.levelList.length; i++) {
    var level = this.levelList[i];
    maxTileSize = Math.max(maxTileSize, level.tileWidth, level.tileHeight);
  }
  return maxTileSize;
};


CubeGeometry.prototype.levelTiles = function(level, result) {

  var levelIndex = this.levelList.indexOf(level);
  var maxX = level.numHorizontalTiles() - 1;
  var maxY = level.numVerticalTiles() - 1;

  result = result || [];

  for (var f = 0; f < faceList.length; f++) {
    var face = faceList[f];
    for (var x = 0; x <= maxX; x++) {
      for (var y = 0; y <= maxY; y++) {
        result.push(new CubeTile(face, x, y, levelIndex, this));
      }
    }
  }

  return result;

};


CubeGeometry.prototype._closestTile = function(view, level) {
  var ray = this._vec;

  // Compute a view ray into the central screen point.
  vec4.set(ray, 0, 0, 1, 1);
  vec4.transformMat4(ray, ray, view.inverseProjection());

  var minAngle = Infinity;
  var closestFace = null;

  // Find the face whose vector makes a minimal angle with the view ray.
  // This is the face into which the view ray points.
  for (var face in faceVectors) {
    var vector = faceVectors[face];
    // For a small angle between two normalized vectors, angle ~ 1-cos(angle).
    var angle = 1 - vec3.dot(vector, ray);
    if (angle < minAngle) {
      minAngle = angle;
      closestFace = face;
    }
  }

  // Project view ray onto cube, i.e., normalize the coordinate with
  // largest absolute value to ±0.5.
  var max = Math.max(Math.abs(ray[0]), Math.abs(ray[1]), Math.abs(ray[2])) / 0.5;
  for (var i = 0; i < 3; i++) {
    ray[i] = ray[i] / max;
  }

  // Rotate view ray into front face.
  var rot = faceRotation[closestFace];
  rotateVector(ray, 0, -rot.x, -rot.y);

  // Get the desired zoom level.
  var tileZ = this.levelList.indexOf(level);
  var numX = level.numHorizontalTiles();
  var numY = level.numVerticalTiles();

  // Find the coordinates of the tile that the view ray points into.
  var tileX = clamp(Math.floor((0.5 + ray[0]) * numX), 0, numX - 1);
  var tileY = clamp(Math.floor((0.5 - ray[1]) * numY), 0, numY - 1);

  return new CubeTile(closestFace, tileX, tileY, tileZ, this);
};


CubeGeometry.prototype.visibleTiles = function(view, level, result) {
  var viewSize = this._viewSize;
  var tileSearcher = this._tileSearcher;

  result = result || [];

  view.size(viewSize);
  if (viewSize.width === 0 || viewSize.height === 0) {
    // No tiles are visible if the viewport is empty.
    return result;
  }

  var startingTile = this._closestTile(view, level);
  var count = tileSearcher.search(view, startingTile, result);
  if (!count) {
    throw new Error('Starting tile is not visible');
  }

  return result;
};


CubeGeometry.Tile = CubeGeometry.prototype.Tile = CubeTile;
CubeGeometry.type = CubeGeometry.prototype.type = 'cube';
CubeTile.type = CubeTile.prototype.type = 'cube';


module.exports = CubeGeometry;


/***/ }),

/***/ "./node_modules/marzipano/src/geometries/Equirect.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/geometries/Equirect.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var hash = __webpack_require__(/*! ../util/hash */ "./node_modules/marzipano/src/util/hash.js");
var cmp = __webpack_require__(/*! ../util/cmp */ "./node_modules/marzipano/src/util/cmp.js");
var common = __webpack_require__(/*! ./common */ "./node_modules/marzipano/src/geometries/common.js");
var Level = __webpack_require__(/*! ./Level */ "./node_modules/marzipano/src/geometries/Level.js");
var type = __webpack_require__(/*! ../util/type */ "./node_modules/marzipano/src/util/type.js");


/**
 * @class EquirectTile
 * @implements Tile
 * @classdesc
 *
 * A tile in an @{EquirectGeometry}.
 */
function EquirectTile(z, geometry) {
  this.z = z;
  this._geometry = geometry;
  this._level = geometry.levelList[z];
}


EquirectTile.prototype.rotX = function() {
  return 0;
};


EquirectTile.prototype.rotY = function() {
  return 0;
};


EquirectTile.prototype.centerX = function() {
  return 0.5;
};


EquirectTile.prototype.centerY = function() {
  return 0.5;
};


EquirectTile.prototype.scaleX = function() {
  return 1;
};


EquirectTile.prototype.scaleY = function() {
  return 1;
};


EquirectTile.prototype.width = function() {
  return this._level.tileWidth();
};


EquirectTile.prototype.height = function() {
  return this._level.tileHeight();
};


EquirectTile.prototype.levelWidth = function() {
  return this._level.width();
};


EquirectTile.prototype.levelHeight = function() {
  return this._level.height();
};


EquirectTile.prototype.atTopLevel = function() {
  return this.z === 0;
};


EquirectTile.prototype.atBottomLevel = function() {
  return this.z === this._geometry.levelList.length - 1;
};


EquirectTile.prototype.atTopEdge = function() {
  return true;
};


EquirectTile.prototype.atBottomEdge = function() {
  return true;
};


EquirectTile.prototype.atLeftEdge = function() {
  return true;
};


EquirectTile.prototype.atRightEdge = function() {
  return true;
};


EquirectTile.prototype.padTop = function() {
  return false;
};


EquirectTile.prototype.padBottom = function() {
  return false;
};


EquirectTile.prototype.padLeft = function() {
  return false;
};


EquirectTile.prototype.padRight = function() {
  return false;
};


EquirectTile.prototype.parent = function() {
  if (this.atTopLevel()) {
    return null;
  }
  return new EquirectTile(this.z - 1, this._geometry);
};


EquirectTile.prototype.children = function(result) {
  if (this.atBottomLevel()) {
    return null;
  }
  result = result || [];
  result.push(new EquirectTile(this.z + 1, this._geometry));
  return result;
};


EquirectTile.prototype.neighbors = function() {
  return [];
};


EquirectTile.prototype.hash = function() {
  return hash(this.z);
};


EquirectTile.prototype.equals = function(that) {
  return this.geometry === that.geometry && this.z === that.z;
};


EquirectTile.prototype.cmp = function(that) {
  return cmp(this.z, that.z);
};


EquirectTile.prototype.str = function() {
  return 'EquirectTile(' + tile.z + ')';
};


function EquirectLevel(levelProperties) {
  this.constructor.super_.call(this, levelProperties);
  this._width = levelProperties.width;
}

inherits(EquirectLevel, Level);


EquirectLevel.prototype.width = function() {
  return this._width;
};


EquirectLevel.prototype.height = function() {
  return this._width/2;
};


EquirectLevel.prototype.tileWidth = function() {
  return this._width;
};


EquirectLevel.prototype.tileHeight = function() {
  return this._width/2;
};


/**
 * @class EquirectGeometry
 * @implements Geometry
 * @classdesc
 *
 * A {@link Geometry} implementation suitable for equirectangular images with a
 * 2:1 aspect ratio.
 *
 * @param {Object[]} levelPropertiesList Level description
 * @param {number} levelPropertiesList[].width Level width in pixels
*/
function EquirectGeometry(levelPropertiesList) {
  if (type(levelPropertiesList) !== 'array') {
    throw new Error('Level list must be an array');
  }

  this.levelList = common.makeLevelList(levelPropertiesList, EquirectLevel);
  this.selectableLevelList = common.makeSelectableLevelList(this.levelList);
}


EquirectGeometry.prototype.maxTileSize = function() {
  var maxTileSize = 0;
  for (var i = 0; i < this.levelList.length; i++) {
    var level = this.levelList[i];
    maxTileSize = Math.max(maxTileSize, level.tileWidth, level.tileHeight);
  }
  return maxTileSize;
};


EquirectGeometry.prototype.levelTiles = function(level, result) {
  var levelIndex = this.levelList.indexOf(level);
  result = result || [];
  result.push(new EquirectTile(levelIndex, this));
  return result;
};


EquirectGeometry.prototype.visibleTiles = function(view, level, result) {
  var tile = new EquirectTile(this.levelList.indexOf(level), this);
  result = result || [];
  result.length = 0;
  result.push(tile);
};


EquirectGeometry.Tile = EquirectGeometry.prototype.Tile = EquirectTile;
EquirectGeometry.type = EquirectGeometry.prototype.type = 'equirect';
EquirectTile.type = EquirectTile.prototype.type = 'equirect';


module.exports = EquirectGeometry;


/***/ }),

/***/ "./node_modules/marzipano/src/geometries/Flat.js":
/*!*******************************************************!*\
  !*** ./node_modules/marzipano/src/geometries/Flat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var hash = __webpack_require__(/*! ../util/hash */ "./node_modules/marzipano/src/util/hash.js");
var TileSearcher = __webpack_require__(/*! ../TileSearcher */ "./node_modules/marzipano/src/TileSearcher.js");
var LruMap = __webpack_require__(/*! ../collections/LruMap */ "./node_modules/marzipano/src/collections/LruMap.js");
var Level = __webpack_require__(/*! ./Level */ "./node_modules/marzipano/src/geometries/Level.js");
var makeLevelList = __webpack_require__(/*! ./common */ "./node_modules/marzipano/src/geometries/common.js").makeLevelList;
var makeSelectableLevelList = __webpack_require__(/*! ./common */ "./node_modules/marzipano/src/geometries/common.js").makeSelectableLevelList;
var clamp = __webpack_require__(/*! ../util/clamp */ "./node_modules/marzipano/src/util/clamp.js");
var mod = __webpack_require__(/*! ../util/mod */ "./node_modules/marzipano/src/util/mod.js");
var cmp = __webpack_require__(/*! ../util/cmp */ "./node_modules/marzipano/src/util/cmp.js");
var type = __webpack_require__(/*! ../util/type */ "./node_modules/marzipano/src/util/type.js");
var vec2 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec2;
var vec4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec4;

var neighborsCacheSize = 64;

// Some renderer implementations require tiles to be padded around with
// repeated pixels to prevent the appearance of visible seams between tiles.
//
// In order to prevent the padding from being visible, the tiles must be
// padded and stacked such that the padding on one of the sides, when present,
// stacks below the neighboring tile on that side.
//
// Padding rules:
// * Pad tiles on the right and on the bottom.
//
// Stacking rules:
// * Within an image, stack smaller zoom levels below larger zoom levels.
// * Within a level, stack tiles bottom to top in ascending Y coordinate order.
// * Within a row, stack tiles bottom to top in ascending X coordinate order.

// Offsets to apply to the (x,y) coordinates of a tile to get its neighbors.
var neighborOffsets = [
  [  0,  1 ], // top
  [  1,  0 ], // right
  [  0, -1 ], // bottom
  [ -1,  0 ]  // left
];


/**
 * @class FlatTile
 * @implements Tile
 * @classdesc
 *
 * A tile in a {@link FlatGeometry}.
 */
function FlatTile(x, y, z, geometry) {
  this.x = x;
  this.y = y;
  this.z = z;
  this._geometry = geometry;
  this._level = geometry.levelList[z];
}


FlatTile.prototype.rotX = function() {
  return 0;
};


FlatTile.prototype.rotY = function() {
  return 0;
};


FlatTile.prototype.centerX = function() {
  var levelWidth = this._level.width();
  var tileWidth = this._level.tileWidth();
  return (this.x * tileWidth + 0.5 * this.width()) / levelWidth - 0.5;
};


FlatTile.prototype.centerY = function() {
  var levelHeight = this._level.height();
  var tileHeight = this._level.tileHeight();
  return 0.5 - (this.y * tileHeight + 0.5 * this.height()) / levelHeight;
};


FlatTile.prototype.scaleX = function() {
  var levelWidth = this._level.width();
  return this.width() / levelWidth;
};


FlatTile.prototype.scaleY = function() {
  var levelHeight = this._level.height();
  return this.height() / levelHeight;
};


FlatTile.prototype.width = function() {
  var levelWidth = this._level.width();
  var tileWidth = this._level.tileWidth();
  if (this.atRightEdge()) {
    var widthRemainder = mod(levelWidth, tileWidth);
    return widthRemainder || tileWidth;
  } else {
    return tileWidth;
  }
};


FlatTile.prototype.height = function() {
  var levelHeight = this._level.height();
  var tileHeight = this._level.tileHeight();
  if (this.atBottomEdge()) {
    var heightRemainder = mod(levelHeight, tileHeight);
    return heightRemainder || tileHeight;
  } else {
    return tileHeight;
  }
};


FlatTile.prototype.levelWidth = function() {
  return this._level.width();
};


FlatTile.prototype.levelHeight = function() {
  return this._level.height();
};


FlatTile.prototype.atTopLevel = function() {
  return this.z === 0;
};


FlatTile.prototype.atBottomLevel = function() {
  return this.z === this._geometry.levelList.length - 1;
};


FlatTile.prototype.atTopEdge = function() {
  return this.y === 0;
};


FlatTile.prototype.atBottomEdge = function() {
  return this.y === this._level.numVerticalTiles() - 1;
};


FlatTile.prototype.atLeftEdge = function() {
  return this.x === 0;
};


FlatTile.prototype.atRightEdge = function() {
  return this.x === this._level.numHorizontalTiles() - 1;
};


FlatTile.prototype.padTop = function() {
  return false;
};


FlatTile.prototype.padBottom = function() {
  return !this.atBottomEdge();
};


FlatTile.prototype.padLeft = function() {
  return false;
};


FlatTile.prototype.padRight = function() {
  return !this.atRightEdge();
};


FlatTile.prototype.vertices = function(result) {
  if (!result) {
    result = [vec2.create(), vec2.create(), vec2.create(), vec2.create()];
  }

  var left = this.centerX() - this.scaleX() / 2;
  var right = this.centerX() + this.scaleX() / 2;
  var bottom = this.centerY() - this.scaleY() / 2;
  var top = this.centerY() + this.scaleY() / 2;

  vec2.set(result[0], left, top);
  vec2.set(result[1], right, top);
  vec2.set(result[2], right, bottom);
  vec2.set(result[3], left, bottom);

  return result;
};


FlatTile.prototype.parent = function() {


  if (this.atTopLevel()) {
    return null;
  }

  var geometry = this._geometry;

  var z = this.z - 1;
  // TODO: Currently assuming each level is double the size of previous one.
  // Fix to support other multiples.
  var x = Math.floor(this.x / 2);
  var y = Math.floor(this.y / 2);

  return new FlatTile(x, y, z, geometry);

};


FlatTile.prototype.children = function(result) {
  if (this.atBottomLevel()) {
    return null;
  }

  var geometry = this._geometry;
  var z = this.z + 1;

  result = result || [];

  // TODO: Currently assuming each level is double the size of previous one.
  // Fix to support other multiples.
  result.push(new FlatTile(2*this.x  , 2*this.y  , z, geometry));
  result.push(new FlatTile(2*this.x  , 2*this.y+1, z, geometry));
  result.push(new FlatTile(2*this.x+1, 2*this.y  , z, geometry));
  result.push(new FlatTile(2*this.x+1, 2*this.y+1, z, geometry));

  return result;

};


FlatTile.prototype.neighbors = function() {

  var geometry = this._geometry;
  var cache = geometry._neighborsCache;

  // Satisfy from cache when available.
  var cachedResult = cache.get(this);
  if (cachedResult) {
    return cachedResult;
  }

  var x = this.x;
  var y = this.y;
  var z = this.z;
  var level = this._level;

  var numX = level.numHorizontalTiles() - 1;
  var numY = level.numVerticalTiles() - 1;

  var result = [];

  for (var i = 0; i < neighborOffsets.length; i++) {
    var xOffset = neighborOffsets[i][0];
    var yOffset = neighborOffsets[i][1];

    var newX = x + xOffset;
    var newY = y + yOffset;
    var newZ = z;

    if (0 <= newX && newX <= numX && 0 <= newY && newY <= numY) {
      result.push(new FlatTile(newX, newY, newZ, geometry));
    }
  }

  // Store into cache to satisfy future requests.
  cache.set(this, result);

  return result;

};


FlatTile.prototype.hash = function() {
  return hash(this.z, this.y, this.x);
};


FlatTile.prototype.equals = function(that) {
  return (this.geometry === that.geometry &&
      this.z === that.z && this.y === that.y && this.x === that.x);
};


FlatTile.prototype.cmp = function(that) {
  return (cmp(this.z, that.z) || cmp(this.y, that.y) || cmp(this.x, that.x));
};


FlatTile.prototype.str = function() {
  return 'FlatTile(' + tile.x + ', ' + tile.y + ', ' + tile.z + ')';
};


function FlatLevel(levelProperties) {
  this.constructor.super_.call(this, levelProperties);

  this._width = levelProperties.width;
  this._height = levelProperties.height;
  this._tileWidth = levelProperties.tileWidth;
  this._tileHeight = levelProperties.tileHeight;
}

inherits(FlatLevel, Level);


FlatLevel.prototype.width = function() {
  return this._width;
};


FlatLevel.prototype.height = function() {
  return this._height;
};


FlatLevel.prototype.tileWidth = function() {
  return this._tileWidth;
};


FlatLevel.prototype.tileHeight = function() {
  return this._tileHeight;
};


FlatLevel.prototype._validateWithParentLevel = function(parentLevel) {

  var width = this.width();
  var height = this.height();
  var tileWidth = this.tileWidth();
  var tileHeight = this.tileHeight();

  var parentWidth = parentLevel.width();
  var parentHeight = parentLevel.height();
  var parentTileWidth = parentLevel.tileWidth();
  var parentTileHeight = parentLevel.tileHeight();

  if (width % parentWidth !== 0) {
    return new Error('Level width must be multiple of parent level: ' +
                     width + ' vs. ' + parentWidth);
  }

  if (height % parentHeight !== 0) {
    return new Error('Level height must be multiple of parent level: ' +
                     height + ' vs. ' + parentHeight);
  }

  if (tileWidth % parentTileWidth !== 0) {
    return new Error('Level tile width must be multiple of parent level: ' +
                     tileWidth + ' vs. ' + parentTileWidth);
  }

  if (tileHeight % parentTileHeight !== 0) {
    return new Error('Level tile height must be multiple of parent level: ' +
                     tileHeight + ' vs. ' + parentTileHeight);
  }

};


/**
 * @class FlatGeometry
 * @implements Geometry
 * @classdesc
 *
 * A {@link Geometry} implementation suitable for tiled flat images with
 * multiple resolution levels.
 *
 * The following restrictions apply:
 *   - All tiles must be square, except when in the last row or column position,
 *     and must form a rectangular grid;
 *   - The width and height of a level must be multiples of the parent level
 *     width and height.
 *
 * @param {Object[]} levelPropertiesList Level description
 * @param {number} levelPropertiesList[].width Level width in pixels
 * @param {number} levelPropertiesList[].tileWidth Tile width in pixels for
 *                 square tiles
 * @param {number} levelPropertiesList[].height Level height in pixels
 * @param {number} levelPropertiesList[].tileHeight Tile height in pixels for
 *                 square tiles
 */
function FlatGeometry(levelPropertiesList) {
  if (type(levelPropertiesList) !== 'array') {
    throw new Error('Level list must be an array');
  }

  this.levelList = makeLevelList(levelPropertiesList, FlatLevel);
  this.selectableLevelList = makeSelectableLevelList(this.levelList);

  for (var i = 1; i < this.levelList.length; i++) {
    this.levelList[i]._validateWithParentLevel(this.levelList[i-1]);
  }

  this._tileSearcher = new TileSearcher(this);

  this._neighborsCache = new LruMap(neighborsCacheSize);

  this._vec = vec4.create();

  this._viewSize = {};
}


FlatGeometry.prototype.maxTileSize = function() {
  var maxTileSize = 0;
  for (var i = 0; i < this.levelList.length; i++) {
    var level = this.levelList[i];
    maxTileSize = Math.max(maxTileSize, level.tileWidth, level.tileHeight);
  }
  return maxTileSize;
};


FlatGeometry.prototype.levelTiles = function(level, result) {

  var levelIndex = this.levelList.indexOf(level);
  var maxX = level.numHorizontalTiles() - 1;
  var maxY = level.numVerticalTiles() - 1;

  if (!result) {
    result = [];
  }

  for (var x = 0; x <= maxX; x++) {
    for (var y = 0; y <= maxY; y++) {
      result.push(new FlatTile(x, y, levelIndex, this));
    }
  }

  return result;

};


FlatGeometry.prototype._closestTile = function(view, level) {
  var ray = this._vec;

  // Compute a view ray into the central screen point.
  vec4.set(ray, 0, 0, 1, 1);
  vec4.transformMat4(ray, ray, view.inverseProjection());

  // Compute the image coordinates that the view ray points into.
  var x = 0.5 + ray[0];
  var y = 0.5 - ray[1];

  // Get the desired zoom level.
  var tileZ = this.levelList.indexOf(level);
  var levelWidth = level.width();
  var levelHeight = level.height();
  var tileWidth = level.tileWidth();
  var tileHeight = level.tileHeight();
  var numX = level.numHorizontalTiles();
  var numY = level.numVerticalTiles();

  // Find the coordinates of the tile that the view ray points into.
  var tileX = clamp(Math.floor(x * levelWidth / tileWidth), 0, numX - 1);
  var tileY = clamp(Math.floor(y * levelHeight / tileHeight), 0, numY - 1);

  return new FlatTile(tileX, tileY, tileZ, this);
};


FlatGeometry.prototype.visibleTiles = function(view, level, result) {
  var viewSize = this._viewSize;
  var tileSearcher = this._tileSearcher;

  result = result || [];

  view.size(viewSize);
  if (viewSize.width === 0 || viewSize.height === 0) {
    // No tiles are visible if the viewport is empty.
    return result;
  }

  var startingTile = this._closestTile(view, level);
  var count = tileSearcher.search(view, startingTile, result);
  if (!count) {
    throw new Error('Starting tile is not visible');
  }

  return result;
};


FlatGeometry.Tile = FlatGeometry.prototype.Tile = FlatTile;
FlatGeometry.type = FlatGeometry.prototype.type = 'flat';
FlatTile.type = FlatTile.prototype.type = 'flat';


module.exports = FlatGeometry;


/***/ }),

/***/ "./node_modules/marzipano/src/geometries/Level.js":
/*!********************************************************!*\
  !*** ./node_modules/marzipano/src/geometries/Level.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function Level(levelProperties) {
  this._fallbackOnly = !!levelProperties.fallbackOnly;
}

Level.prototype.numHorizontalTiles = function() {
  return Math.ceil(this.width() / this.tileWidth());
};

Level.prototype.numVerticalTiles = function() {
  return Math.ceil(this.height() / this.tileHeight());
};

Level.prototype.fallbackOnly = function() {
  return this._fallbackOnly;
};

module.exports = Level;

/***/ }),

/***/ "./node_modules/marzipano/src/geometries/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/geometries/common.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var cmp = __webpack_require__(/*! ../util/cmp */ "./node_modules/marzipano/src/util/cmp.js");

function makeLevelList(levelPropertiesList, LevelClass) {
  var list = [];

  for (var i = 0; i < levelPropertiesList.length; i++) {
    list.push(new LevelClass(levelPropertiesList[i]));
  }

  list.sort(function(level1, level2) {
    return cmp(level1.width(), level2.width());
  });

  return list;
}

function makeSelectableLevelList(levelList) {
  var list = [];

  for (var i = 0; i < levelList.length; i++) {
    if (!levelList[i]._fallbackOnly) {
      list.push(levelList[i]);
    }
  }

  if (!list.length) {
    throw new Error('No selectable levels in list');
  }

  return list;
}

module.exports = {
  makeLevelList: makeLevelList,
  makeSelectableLevelList: makeSelectableLevelList
};


/***/ }),

/***/ "./node_modules/marzipano/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/marzipano/src/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = {

  // Stages.
  WebGlStage: __webpack_require__(/*! ./stages/WebGl */ "./node_modules/marzipano/src/stages/WebGl.js"),
  CssStage: __webpack_require__(/*! ./stages/Css */ "./node_modules/marzipano/src/stages/Css.js"),
  FlashStage: __webpack_require__(/*! ./stages/Flash */ "./node_modules/marzipano/src/stages/Flash.js"),

  // Renderers.
  WebGlCubeRenderer: __webpack_require__(/*! ./renderers/WebGlCube */ "./node_modules/marzipano/src/renderers/WebGlCube.js"),
  WebGlFlatRenderer: __webpack_require__(/*! ./renderers/WebGlFlat */ "./node_modules/marzipano/src/renderers/WebGlFlat.js"),
  WebGlEquirectRenderer: __webpack_require__(/*! ./renderers/WebGlEquirect */ "./node_modules/marzipano/src/renderers/WebGlEquirect.js"),
  CssCubeRenderer: __webpack_require__(/*! ./renderers/CssCube */ "./node_modules/marzipano/src/renderers/CssCube.js"),
  CssFlatRenderer: __webpack_require__(/*! ./renderers/CssFlat */ "./node_modules/marzipano/src/renderers/CssFlat.js"),
  FlashCubeRenderer: __webpack_require__(/*! ./renderers/FlashCube */ "./node_modules/marzipano/src/renderers/FlashCube.js"),
  FlashFlatRenderer: __webpack_require__(/*! ./renderers/FlashFlat */ "./node_modules/marzipano/src/renderers/FlashFlat.js"),
  registerDefaultRenderers: __webpack_require__(/*! ./renderers/registerDefaultRenderers */ "./node_modules/marzipano/src/renderers/registerDefaultRenderers.js"),

  // Geometries.
  CubeGeometry: __webpack_require__(/*! ./geometries/Cube */ "./node_modules/marzipano/src/geometries/Cube.js"),
  FlatGeometry: __webpack_require__(/*! ./geometries/Flat */ "./node_modules/marzipano/src/geometries/Flat.js"),
  EquirectGeometry: __webpack_require__(/*! ./geometries/Equirect */ "./node_modules/marzipano/src/geometries/Equirect.js"),

  // Views.
  RectilinearView: __webpack_require__(/*! ./views/Rectilinear */ "./node_modules/marzipano/src/views/Rectilinear.js"),
  FlatView: __webpack_require__(/*! ./views/Flat */ "./node_modules/marzipano/src/views/Flat.js"),

  // Sources.
  ImageUrlSource: __webpack_require__(/*! ./sources/ImageUrl */ "./node_modules/marzipano/src/sources/ImageUrl.js"),
  SingleAssetSource: __webpack_require__(/*! ./sources/SingleAsset */ "./node_modules/marzipano/src/sources/SingleAsset.js"),

  // Assets.
  StaticAsset: __webpack_require__(/*! ./assets/Static */ "./node_modules/marzipano/src/assets/Static.js"),
  DynamicAsset: __webpack_require__(/*! ./assets/Dynamic */ "./node_modules/marzipano/src/assets/Dynamic.js"),

  // Texture store.
  TextureStore: __webpack_require__(/*! ./TextureStore */ "./node_modules/marzipano/src/TextureStore.js"),

  // Layer.
  Layer: __webpack_require__(/*! ./Layer */ "./node_modules/marzipano/src/Layer.js"),

  // Render loop.
  RenderLoop: __webpack_require__(/*! ./RenderLoop */ "./node_modules/marzipano/src/RenderLoop.js"),

  // Controls.
  KeyControlMethod: __webpack_require__(/*! ./controls/Key */ "./node_modules/marzipano/src/controls/Key.js"),
  DragControlMethod: __webpack_require__(/*! ./controls/Drag */ "./node_modules/marzipano/src/controls/Drag.js"),
  QtvrControlMethod: __webpack_require__(/*! ./controls/Qtvr */ "./node_modules/marzipano/src/controls/Qtvr.js"),
  ScrollZoomControlMethod: __webpack_require__(/*! ./controls/ScrollZoom */ "./node_modules/marzipano/src/controls/ScrollZoom.js"),
  PinchZoomControlMethod: __webpack_require__(/*! ./controls/PinchZoom */ "./node_modules/marzipano/src/controls/PinchZoom.js"),
  VelocityControlMethod: __webpack_require__(/*! ./controls/Velocity */ "./node_modules/marzipano/src/controls/Velocity.js"),
  ElementPressControlMethod: __webpack_require__(/*! ./controls/ElementPress */ "./node_modules/marzipano/src/controls/ElementPress.js"),
  Controls: __webpack_require__(/*! ./controls/Controls */ "./node_modules/marzipano/src/controls/Controls.js"),
  Dynamics: __webpack_require__(/*! ./controls/Dynamics */ "./node_modules/marzipano/src/controls/Dynamics.js"),

  // High-level API.
  Viewer: __webpack_require__(/*! ./Viewer */ "./node_modules/marzipano/src/Viewer.js"),
  Scene: __webpack_require__(/*! ./Scene */ "./node_modules/marzipano/src/Scene.js"),

  // Hotspots.
  Hotspot: __webpack_require__(/*! ./Hotspot */ "./node_modules/marzipano/src/Hotspot.js"),
  HotspotContainer: __webpack_require__(/*! ./HotspotContainer */ "./node_modules/marzipano/src/HotspotContainer.js"),

  // Effects.
  colorEffects: __webpack_require__(/*! ./colorEffects */ "./node_modules/marzipano/src/colorEffects.js"),

  // Miscellaneous functions.
  registerDefaultControls: __webpack_require__(/*! ./controls/registerDefaultControls */ "./node_modules/marzipano/src/controls/registerDefaultControls.js"),
  autorotate: __webpack_require__(/*! ./autorotate */ "./node_modules/marzipano/src/autorotate.js"),

  // Utility functions.
  util: {
    async: __webpack_require__(/*! ./util/async */ "./node_modules/marzipano/src/util/async.js"),
    cancelize: __webpack_require__(/*! ./util/cancelize */ "./node_modules/marzipano/src/util/cancelize.js"),
    chain: __webpack_require__(/*! ./util/chain */ "./node_modules/marzipano/src/util/chain.js"),
    clamp: __webpack_require__(/*! ./util/clamp */ "./node_modules/marzipano/src/util/clamp.js"),
    clearOwnProperties: __webpack_require__(/*! ./util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js"),
    cmp: __webpack_require__(/*! ./util/cmp */ "./node_modules/marzipano/src/util/cmp.js"),
    compose: __webpack_require__(/*! ./util/compose */ "./node_modules/marzipano/src/util/compose.js"),
    convertFov: __webpack_require__(/*! ./util/convertFov */ "./node_modules/marzipano/src/util/convertFov.js"),
    decimal: __webpack_require__(/*! ./util/decimal */ "./node_modules/marzipano/src/util/decimal.js"),
    defaults: __webpack_require__(/*! ./util/defaults */ "./node_modules/marzipano/src/util/defaults.js"),
    defer: __webpack_require__(/*! ./util/defer */ "./node_modules/marzipano/src/util/defer.js"),
    degToRad: __webpack_require__(/*! ./util/degToRad */ "./node_modules/marzipano/src/util/degToRad.js"),
    delay: __webpack_require__(/*! ./util/delay */ "./node_modules/marzipano/src/util/delay.js"),
    dom: __webpack_require__(/*! ./util/dom */ "./node_modules/marzipano/src/util/dom.js"),
    extend: __webpack_require__(/*! ./util/extend */ "./node_modules/marzipano/src/util/extend.js"),
    hash: __webpack_require__(/*! ./util/hash */ "./node_modules/marzipano/src/util/hash.js"),
    inherits: __webpack_require__(/*! ./util/inherits */ "./node_modules/marzipano/src/util/inherits.js"),
    mod: __webpack_require__(/*! ./util/mod */ "./node_modules/marzipano/src/util/mod.js"),
    noop: __webpack_require__(/*! ./util/noop */ "./node_modules/marzipano/src/util/noop.js"),
    now: __webpack_require__(/*! ./util/now */ "./node_modules/marzipano/src/util/now.js"),
    once: __webpack_require__(/*! ./util/once */ "./node_modules/marzipano/src/util/once.js"),
    pixelRatio: __webpack_require__(/*! ./util/pixelRatio */ "./node_modules/marzipano/src/util/pixelRatio.js"),
    radToDeg: __webpack_require__(/*! ./util/radToDeg */ "./node_modules/marzipano/src/util/radToDeg.js"),
    real: __webpack_require__(/*! ./util/real */ "./node_modules/marzipano/src/util/real.js"),
    retry: __webpack_require__(/*! ./util/retry */ "./node_modules/marzipano/src/util/retry.js"),
    tween: __webpack_require__(/*! ./util/tween */ "./node_modules/marzipano/src/util/tween.js"),
    type: __webpack_require__(/*! ./util/type */ "./node_modules/marzipano/src/util/type.js")
  },

  // Expose dependencies for clients to use.
  dependencies: {
    bowser: __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js"),
    glMatrix: __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js"),
    eventEmitter: __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js"),
    hammerjs: __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js")
  }
};


/***/ }),

/***/ "./node_modules/marzipano/src/loaders/FlashImage.js":
/*!**********************************************************!*\
  !*** ./node_modules/marzipano/src/loaders/FlashImage.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var FlashAsset = __webpack_require__(/*! ../assets/Flash */ "./node_modules/marzipano/src/assets/Flash.js");
var NetworkError = __webpack_require__(/*! ../NetworkError */ "./node_modules/marzipano/src/NetworkError.js");
var once = __webpack_require__(/*! ../util/once */ "./node_modules/marzipano/src/util/once.js");

// TODO: Move the load queue into the loader.

/**
 * @class FlashImageLoader
 * @implements ImageLoader
 * @classdesc
 *
 * A {@link Loader} for Flash images.
 *
 * @param {Stage} stage The stage which is going to request images to be loaded.
 */
function FlashImageLoader(stage) {
  if (stage.type !== 'flash') {
    throw new Error('Stage type incompatible with loader');
  }
  this._stage = stage;
}

/**
 * Loads an {@link Asset} from an image.
 * @param {string} url The image URL.
 * @param {?Rect} rect A {@link Rect} describing a portion of the image, or null
 *     to use the full image.
 * @param {function(?Error, Asset)} done The callback.
 * @return {function()} A function to cancel loading.
 */
FlashImageLoader.prototype.loadImage = function(url, rect, done) {
  var stage = this._stage;
  var flashElement = stage.flashElement();

  var x = rect && rect.x || 0;
  var y = rect && rect.y || 0;
  var width = rect && rect.width || 1;
  var height = rect && rect.height || 1;

  var imageId = flashElement.loadImage(url, width, height, x, y);

  done = once(done);

  // TODO: use a single callback for all imageLoaded events.

  function callback(err, callbackId) {
    // There is a single callback for all load events, so make sure this
    // is the right one.
    if (callbackId !== imageId) {
      return;
    }

    stage.removeFlashCallbackListener('imageLoaded', callback);

    // TODO: is there any way to distinguish a network error from other
    // kinds of errors? For now we always return NetworkError since this
    // prevents images to be retried continuously while we are offline.
    if (err) {
      done(new NetworkError('Network error: ' + url));
    } else {
      done(null, new FlashAsset(flashElement, imageId));
    }
  }

  stage.addFlashCallbackListener('imageLoaded', callback);

  function cancel() {
    flashElement.cancelImage(imageId);
    stage.removeFlashCallbackListener('imageLoaded', callback);
    done.apply(null, arguments);
  }

  return cancel;
};

module.exports = FlashImageLoader;


/***/ }),

/***/ "./node_modules/marzipano/src/loaders/HtmlImage.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/loaders/HtmlImage.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var StaticAsset = __webpack_require__(/*! ../assets/Static */ "./node_modules/marzipano/src/assets/Static.js");
var NetworkError = __webpack_require__(/*! ../NetworkError */ "./node_modules/marzipano/src/NetworkError.js");
var once = __webpack_require__(/*! ../util/once */ "./node_modules/marzipano/src/util/once.js");

// N.B. HtmlImageLoader is broken on IE8 for images that require resizing, due
// to the unavailable HTML5 canvas element and the naturalWidth/naturalHeight
// properties of image elements. This is currently not a problem because the
// HTML-based renderers (WebGL and CSS) do not work on IE8 anyway. It could
// become a problem in the future if we decide to support CSS rendering of flat
// panoramas on IE8.

// TODO: Move the load queue into the loader.

/**
 * @class HtmlImageLoader
 * @implements ImageLoader
 * @classdesc
 *
 * A {@link Loader} for HTML images.
 *
 * @param {Stage} stage The stage which is going to request images to be loaded.
 */
function HtmlImageLoader(stage) {
  if (stage.type !== 'webgl' && stage.type !== 'css') {
    throw new Error('Stage type incompatible with loader');
  }
  this._stage = stage;
}

/**
 * Loads an {@link Asset} from an image.
 * @param {string} url The image URL.
 * @param {?Rect} rect A {@link Rect} describing a portion of the image, or null
 *     to use the full image.
 * @param {function(?Error, Asset)} done The callback.
 * @return {function()} A function to cancel loading.
 */
HtmlImageLoader.prototype.loadImage = function(url, rect, done) {
  var img = new Image();

  // Allow cross-domain image loading.
  // This is required to be able to create WebGL textures from images fetched
  // from a different domain. Note that setting the crossorigin attribute to
  // 'anonymous' will trigger a CORS preflight for cross-domain requests, but no
  // credentials (cookies or HTTP auth) will be sent; to do so, the attribute
  // would have to be set to 'use-credentials' instead. Unfortunately, this is
  // not a safe choice, as it causes requests to fail when the response contains
  // an Access-Control-Allow-Origin header with a wildcard. See the section
  // "Credentialed requests and wildcards" on:
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
  img.crossOrigin = 'anonymous';

  var x = rect && rect.x || 0;
  var y = rect && rect.y || 0;
  var width = rect && rect.width || 1;
  var height = rect && rect.height || 1;

  done = once(done);

  img.onload = function() {
    if (x === 0 && y === 0 && width === 1 && height === 1) {
      done(null, new StaticAsset(img));
    }
    else {
      x *= img.naturalWidth;
      y *= img.naturalHeight;
      width *= img.naturalWidth;
      height *= img.naturalHeight;

      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      var context = canvas.getContext('2d');

      context.drawImage(img, x, y, width, height, 0, 0, width, height);

      done(null, new StaticAsset(canvas));
    }
  };

  img.onerror = function() {
    // TODO: is there any way to distinguish a network error from other
    // kinds of errors? For now we always return NetworkError since this
    // prevents images to be retried continuously while we are offline.
    done(new NetworkError('Network error: ' + url));
  };

  img.src = url;

  function cancel() {
    img.onload = img.onerror = null;
    img.src = '';
    done.apply(null, arguments);
  }

  return cancel;
};

module.exports = HtmlImageLoader;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/CssBase.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/CssBase.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Map = __webpack_require__(/*! ../collections/Map */ "./node_modules/marzipano/src/collections/Map.js");
var decimal = __webpack_require__(/*! ../util/decimal */ "./node_modules/marzipano/src/util/decimal.js");
var setOverflowHidden = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setOverflowHidden;
var setNoPointerEvents = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setNoPointerEvents;
var setNullTransform = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setNullTransform;
var setTransform = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setTransform;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var debug = typeof MARZIPANODEBUG !== 'undefined' && MARZIPANODEBUG.css;


function tileCmp(a, b) {
  return a.cmp(b);
}


function CssBaseRenderer(root, quirks, tileClass) {

  this._root = root;

  this._browserQuirks = quirks;

  // Create a container for this renderer's tiles, so we can style them
  // as a whole separately from other renderers in the same stage.
  var domElement = document.createElement('div');
  root.appendChild(domElement);

  domElement.style.position = 'absolute';

  // For some weird reason, this prevents flickering on Safari Desktop.
  setOverflowHidden(domElement);

  // Prevent touch events on tiles from messing up pinching gestures on iOS.
  setNoPointerEvents(domElement);

  if (this._browserQuirks.useNullTransform) {
    setNullTransform(domElement);
  }

  this.domElement = domElement;

  this._oldTileList = [];
  this._newTileList = [];

  this._textureMap = new Map();
}


CssBaseRenderer.prototype.destroy = function() {
  this._root.removeChild(this.domElement);
  clearOwnProperties(this);
};


CssBaseRenderer.prototype.startLayer = function(layer, rect) {
  var domElement = this.domElement;

  // Set viewport effect.
  var stageWidth = this._root.clientWidth;
  var stageHeight = this._root.clientHeight;
  domElement.style.left = decimal(stageWidth * rect.left) + 'px';
  domElement.style.top = decimal(stageHeight * rect.top) + 'px';
  domElement.style.width = decimal(stageWidth * rect.width) + 'px';
  domElement.style.height = decimal(stageHeight * rect.height) + 'px';

  // Set opacity effect.
  var opacity = 1.0;
  var effects = layer.effects();
  if (effects && effects.opacity != null) {
    opacity = effects.opacity;
  }
  domElement.style.opacity = opacity;

  // Clear temporary variables.
  this._newTileList.length = 0;
  this._textureMap.clear();
};


CssBaseRenderer.prototype.renderTile = function(tile, texture) {
  this._newTileList.push(tile);
  this._textureMap.set(tile, texture);
};


CssBaseRenderer.prototype.endLayer = function(layer, rect) {

  var domElement = this.domElement;
  var oldTileList = this._oldTileList;
  var newTileList = this._newTileList;
  var textureMap = this._textureMap;
  var oldIndex, newIndex, oldTile, newTile;
  var texture, canvas;
  var currentNode, nextNode;

  var view = layer.view();

  // Iterate the old and new tile lists in a consistent order and perform
  // insertions and removals as we go. This minimizes the number of DOM
  // operations performed.

  // Neither the tile list nor the texture list may contain duplicates,
  // otherwise this logic will fail.

  // Consistency check.
  if (domElement.children.length !== oldTileList.length) {
    throw new Error('DOM not in sync with tile list');
  }

  newTileList.sort(tileCmp);

  oldIndex = 0;
  oldTile = oldTileList[oldIndex];
  currentNode = domElement.firstChild;

  for (newIndex = 0; newIndex < newTileList.length; newIndex++) {

    newTile = newTileList[newIndex];

    // Iterate old list until it catches up with the new list.
    while (oldIndex < oldTileList.length) {

      if (oldTile.cmp(newTile) >= 0) {
        // Caught up.
        break;
      }

      // Tile is no longer visible.
      // Remove it from the DOM.
      nextNode = currentNode.nextSibling;
      domElement.removeChild(currentNode);
      currentNode = nextNode;
      oldTile = oldTileList[++oldIndex];
    }

    // Get the texture for the current tile.
    texture = textureMap.get(newTile);
    canvas = texture ? texture._canvas : null;

    // Consistency check.
    if (!canvas) {
      throw new Error('Rendering tile with missing texture');
    }

    if (oldTile && oldTile.cmp(newTile) === 0) {
      // The old and new tile are the same.

      // Consistency check.
      if (canvas != currentNode) {
        throw new Error('DOM not in sync with tile list');
      }

      currentNode = currentNode.nextSibling;
      oldTile = oldTileList[++oldIndex];

    } else {
      // The new tile comes before the old tile.
      // Insert it into the DOM.
      domElement.insertBefore(canvas, currentNode);
    }

    // Set the CSS transform on the current tile.
    setTransform(canvas, this.calculateTransform(newTile, texture, view));

    if (debug) {
      canvas.setAttribute('data-tile', newTile.str());
    }
  }

  // Remove trailing tiles that are no longer visible from the DOM.
  while (currentNode) {
    nextNode = currentNode.nextSibling;
    domElement.removeChild(currentNode);
    currentNode = nextNode;
  }

  // Consistenty check.
  if (domElement.children.length !== newTileList.length) {
    throw new Error('DOM not in sync with tile list');
  }

  // The old and new tile lists swap roles between iterations.
  var tmp = this._oldTileList;
  this._oldTileList = this._newTileList;
  this._newTileList = tmp;
};


module.exports = CssBaseRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/CssCube.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/CssCube.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var CubeTile = __webpack_require__(/*! ../geometries/Cube */ "./node_modules/marzipano/src/geometries/Cube.js").Tile;
var CssBaseRenderer = __webpack_require__(/*! ./CssBase */ "./node_modules/marzipano/src/renderers/CssBase.js");
var decimal = __webpack_require__(/*! ../util/decimal */ "./node_modules/marzipano/src/util/decimal.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");


/**
 * @class CssCubeRenderer
 * @implements Renderer
 * @classdesc
 *
 * A renderer for {@link CubeGeometry} and {@link RectilinearView}, appropriate
 * for a {@link CssStage}.
 *
 * Most users do not need to instantiate this class. Renderers are created and
 * destroyed by {@link Stage} as necessary.
 */
function CssCubeRenderer(root, quirks) {
  this.constructor.super_.call(this, root, quirks, CubeTile);
}

inherits(CssCubeRenderer, CssBaseRenderer);


CssCubeRenderer.prototype.calculateTransform = function(tile, texture, view) {

  var padSize = this._browserQuirks.padSize;
  var reverseLevelDepth = this._browserQuirks.reverseLevelDepth;
  var perspectiveNudge = this._browserQuirks.perspectiveNudge;

  var transform = '';

  // Calculate the cube size for this level.
  var cubeSize = reverseLevelDepth ? 256 - tile.z : tile.levelWidth();

  // Place top left corner of tile at viewport center to serve as the center
  // of rotation.
  // We do not rotate about the center of the tile because, for some mysterious
  // reason, this seems to occasionally crash Chrome.
  var size = view.size();
  var viewportWidth = size.width;
  var viewportHeight = size.height;
  transform += 'translate3d(' + decimal(viewportWidth/2) + 'px, ' + decimal(viewportHeight/2) + 'px, 0px) ';

  // Set the perspective depth.
  var perspective = 0.5 * viewportHeight / Math.tan(view.fov() / 2);
  var distance = perspective + perspectiveNudge;
  transform += 'perspective(' + decimal(perspective) + 'px) translateZ(' + decimal(distance) + 'px) ';

  // Set the camera rotation.
  var viewRotZ = -view.roll();
  var viewRotX = -view.pitch();
  var viewRotY = view.yaw();
  transform += 'rotateZ(' + decimal(viewRotZ) + 'rad) rotateX(' + decimal(viewRotX) + 'rad) rotateY(' + decimal(viewRotY) + 'rad) ';

  // Set the cube face orientation.
  var tileRotX = -tile.rotX();
  var tileRotY = tile.rotY();
  transform += 'rotateX(' + decimal(tileRotX) + 'rad) rotateY(' + decimal(tileRotY) + 'rad) ';

  // Move tile into its position within the cube face.
  var cornerX = tile.centerX() - tile.scaleX() / 2;
  var cornerY = -(tile.centerY() + tile.scaleY() / 2);
  var translX = cornerX * cubeSize;
  var translY = cornerY * cubeSize;
  var translZ = -cubeSize / 2;
  transform += 'translate3d(' + decimal(translX) + 'px, ' + decimal(translY) + 'px, ' + decimal(translZ) + 'px) ';

  // Scale tile into correct size.
  if (reverseLevelDepth) {
    var scaleX = cubeSize * tile.scaleX() / tile.width();
    var scaleY = cubeSize * tile.scaleY() / tile.height();
    transform += 'scale(' + decimal(scaleX) + ', ' + decimal(scaleY) + ') ';
  }

  // Compensate for padding around the tile.
  var padLeft = tile.padLeft() ? padSize : 0;
  var padTop = tile.padTop() ? padSize : 0;
  if (padLeft !== 0 || padTop !== 0) {
    transform += 'translate3d(' + decimal(-padLeft) + 'px, ' + decimal(-padTop) + 'px, 0) ';
  }

  return transform;

};


module.exports = CssCubeRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/CssFlat.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/CssFlat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var FlatTile = __webpack_require__(/*! ../geometries/Flat */ "./node_modules/marzipano/src/geometries/Flat.js").Tile;
var CssBaseRenderer = __webpack_require__(/*! ./CssBase */ "./node_modules/marzipano/src/renderers/CssBase.js");
var decimal = __webpack_require__(/*! ../util/decimal */ "./node_modules/marzipano/src/util/decimal.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");


/**
 * @class CssFlatRenderer
 * @implements Renderer
 * @classdesc
 *
 * A renderer for {@link FlatGeometry} and {@link FlatView}, appropriate for a
 * {@link CssStage}.
 *
 * Most users do not need to instantiate this class. Renderers are created and
 * destroyed by {@link Stage} as necessary.
 */
function CssFlatRenderer(root, quirks) {
  this.constructor.super_.call(this, root, quirks, FlatTile);
}

inherits(CssFlatRenderer, CssBaseRenderer);


CssFlatRenderer.prototype.calculateTransform = function(tile, texture, view) {

  var padSize = this._browserQuirks.padSize;

  var transform = '';

  // Place top left corner of tile at the center of the viewport.
  var viewportWidth = view.width();
  var viewportHeight = view.height();
  transform += 'translateX(' + decimal(viewportWidth/2) + 'px) translateY(' + decimal(viewportHeight/2) + 'px) ';

  // Determine the zoom factor.
  var zoomX = viewportWidth / view._zoomX();
  var zoomY = viewportHeight / view._zoomY();

  // Move tile into its position within the image.
  var cornerX = tile.centerX() - tile.scaleX() / 2 + 0.5;
  var cornerY = 0.5 - tile.centerY() - tile.scaleY() / 2;
  var translX = cornerX * zoomX;
  var translY = cornerY * zoomY;
  transform += 'translateX(' + decimal(translX) + 'px) translateY(' + decimal(translY) + 'px) ';

  // Apply view offsets.
  var offX = -view.x() * zoomX;
  var offY = -view.y() * zoomY;
  transform += 'translateX(' + decimal(offX) + 'px) translateY(' + decimal(offY) + 'px) ';

  // Compensate for padding around the tile.
  var padLeft = tile.padLeft() ? padSize : 0;
  var padTop = tile.padTop() ? padSize : 0;
  if (padLeft !== 0 || padTop !== 0) {
    transform += 'translateX(' + decimal(-padLeft) + 'px) translateY(' + decimal(-padTop) + 'px) ';
  }

  // Scale tile into correct size.
  var scaleX = zoomX / tile.levelWidth();
  var scaleY = zoomY / tile.levelHeight();
  transform += 'scale(' + decimal(scaleX) + ', ' + decimal(scaleY) + ') ';

  return transform;

};


module.exports = CssFlatRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/FlashBase.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/FlashBase.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Map = __webpack_require__(/*! ../collections/Map */ "./node_modules/marzipano/src/collections/Map.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");


function tileCmp(a, b) {
  return a.cmp(b);
}


function FlashBaseRenderer(flashElement, layerId, quirks, tileClass) {

  this._flashElement = flashElement;
  this._layerId = layerId;
  this._quirks = quirks;

  this._tileList = [];

  this._textureMap = new Map();

  // Whether the Flash layer for this renderer has already been created
  // by calling flashElement.createLayer(). Note that we cannot do this
  // right here because Flash may not be initialized yet.
  this._layerCreated = false;
}


FlashBaseRenderer.prototype.destroy = function() {
  if (this._layerCreated) {
    this._flashElement.destroyLayer(this._layerId);
  }
  clearOwnProperties(this);
};


FlashBaseRenderer.prototype.startLayer = function(layer, rect) {
  if (!this._flashElement.isReady || !this._flashElement.isReady()) {
    return;
  }
  if (!this._layerCreated) {
    this._flashElement.createLayer(this._layerId);
    this._layerCreated = true;
  }
  this._tileList.length = 0;
  this._textureMap.clear();
};


FlashBaseRenderer.prototype.renderTile = function(tile, texture) {
  this._tileList.push(tile);
  this._textureMap.set(tile, texture);
};


FlashBaseRenderer.prototype.endLayer = function(layer, rect) {
  if (!this._flashElement.isReady || !this._flashElement.isReady()) {
    return;
  }

  // Sort tiles so they are rendered in an order coherent with their padding.
  var tileList = this._tileList;
  tileList.sort(tileCmp);

  this._renderOnFlash(layer, rect);
};


module.exports = FlashBaseRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/FlashCube.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/FlashCube.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var FlashBaseRenderer = __webpack_require__(/*! ./FlashBase */ "./node_modules/marzipano/src/renderers/FlashBase.js");
var CubeTile = __webpack_require__(/*! ../geometries/Cube */ "./node_modules/marzipano/src/geometries/Cube.js").Tile;
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");

var radToDeg = __webpack_require__(/*! ../util/radToDeg */ "./node_modules/marzipano/src/util/radToDeg.js");


/**
 * @class FlashCubeRenderer
 * @implements Renderer
 * @classdesc
 *
 * A renderer for {@link CubeGeometry} and {@link RectilinearView}, appropriate
 * for a {@link FlashStage}.
 *
 * Most users do not need to instantiate this class. Renderers are created and
 * destroyed by {@link Stage} as necessary.
 */
function FlashCubeRenderer(flashElement, layerId, quirks) {
  this.constructor.super_.call(this, flashElement, layerId, quirks, CubeTile);
  this._flashTileList = [];
}

inherits(FlashCubeRenderer, FlashBaseRenderer);


FlashCubeRenderer.prototype._renderOnFlash = function(layer, rect) {

  var flashElement = this._flashElement;
  var layerId = this._layerId;
  var padSize = this._quirks.padSize;

  var tileList = this._tileList;
  var textureMap = this._textureMap;

  var flashTileList = this._flashTileList;
  flashTileList.length = 0;

  for (var i = 0; i < tileList.length; i++) {
    var tile = tileList[i];
    var texture = textureMap.get(tile);
    if (!texture) {
      throw new Error('Rendering tile with missing texture');
    }

    // Get padding sizes.
    var padTop = tile.padTop() ? padSize : 0;
    var padBottom = tile.padBottom() ? padSize : 0;
    var padLeft = tile.padLeft() ? padSize : 0;
    var padRight = tile.padRight() ? padSize : 0;

    flashTileList.push({
      textureId: texture._textureId,
      face: tile.face,
      width: tile.width(),
      height: tile.height(),
      centerX: tile.centerX(),
      centerY: tile.centerY(),
      rotX: radToDeg(tile.rotX()),
      rotY: radToDeg(tile.rotY()),
      levelSize: tile.levelWidth(),
      padTop: padTop,
      padBottom: padBottom,
      padLeft: padLeft,
      padRight: padRight
    });
  }

  // Get viewport position and size.
  var stageWidth = this._flashElement.clientWidth;
  var stageHeight = this._flashElement.clientHeight;
  var viewportX = stageWidth * rect.x;
  var viewportY = stageHeight * rect.y;
  var viewportWidth = stageWidth * rect.width;
  var viewportHeight = stageHeight * rect.height;

  // Get opacity value.
  var opacity = 1.0;
  var effects = layer.effects();
  if (effects && effects.opacity != null) {
    opacity = effects.opacity;
  }

  // Get view parameters.
  var view = layer.view();
  var yaw = view.yaw();
  var pitch = view.pitch();
  var roll = view.roll();
  var fov = view.fov();

  flashElement.drawCubeTiles(
      layerId, viewportWidth, viewportHeight, viewportX, viewportY, opacity,
      yaw, pitch, roll, fov, flashTileList);
};


module.exports = FlashCubeRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/FlashFlat.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/FlashFlat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var FlashBaseRenderer = __webpack_require__(/*! ./FlashBase */ "./node_modules/marzipano/src/renderers/FlashBase.js");
var FlatTile = __webpack_require__(/*! ../geometries/Flat */ "./node_modules/marzipano/src/geometries/Flat.js").Tile;
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");


/**
 * @class FlashFlatRenderer
 * @implements Renderer
 * @classdesc
 *
 * A renderer for {@link FlatGeometry} and {@link FlatView}, appropriate for a
 * {@link FlashStage}.
 *
 * Most users do not need to instantiate this class. Renderers are created and
 * destroyed by {@link Stage} as necessary.
 */
function FlashFlatRenderer(flashElement, layerId, quirks) {
  this.constructor.super_.call(this, flashElement, layerId, quirks, FlatTile);
  this._flashTileList = [];
}

inherits(FlashFlatRenderer, FlashBaseRenderer);


FlashFlatRenderer.prototype._renderOnFlash = function(layer, rect) {

  var flashElement = this._flashElement;
  var layerId = this._layerId;
  var padSize = this._quirks.padSize;

  var tileList = this._tileList;
  var textureMap = this._textureMap;

  var flashTileList = this._flashTileList;
  flashTileList.length = 0;

  for (var i = 0; i < tileList.length; i++) {
    var tile = tileList[i];
    var texture = textureMap.get(tile);
    if (!texture) {
      throw new Error('Rendering tile with missing texture');
    }

    // Get padding sizes.
    var padTop = tile.padTop() ? padSize : 0;
    var padBottom = tile.padBottom() ? padSize : 0;
    var padLeft = tile.padLeft() ? padSize : 0;
    var padRight = tile.padRight() ? padSize : 0;

    flashTileList.push({
      textureId: texture._textureId,
      width: tile.width(),
      height: tile.height(),
      centerX: tile.centerX(),
      centerY: tile.centerY(),
      scaleX: tile.scaleX(),
      scaleY: tile.scaleY(),
      levelWidth: tile.levelWidth(),
      levelHeight: tile.levelHeight(),
      padTop: padTop,
      padBottom: padBottom,
      padLeft: padLeft,
      padRight: padRight
    });
  }

  // Get viewport position and size.
  var stageWidth = this._flashElement.clientWidth;
  var stageHeight = this._flashElement.clientHeight;
  var viewportX = stageWidth * rect.x;
  var viewportY = stageHeight * rect.y;
  var viewportWidth = stageWidth * rect.width;
  var viewportHeight = stageHeight * rect.height;

  // Get opacity value.
  var opacity = 1.0;
  var effects = layer.effects();
  if (effects && effects.opacity != null) {
    opacity = effects.opacity;
  }

  // Get view parameters.
  var view = layer.view();
  var x = view.x();
  var y = view.y();
  var zoomX = view._zoomX();
  var zoomY = view._zoomY();

  flashElement.drawFlatTiles(
      layerId, viewportWidth, viewportHeight, viewportX, viewportY, opacity,
      x, y, zoomX, zoomY, flashTileList);
};


module.exports = FlashFlatRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/WebGlBase.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/WebGlBase.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var mat4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").mat4;
var vec3 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec3;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var WebGlCommon = __webpack_require__(/*! ./WebGlCommon */ "./node_modules/marzipano/src/renderers/WebGlCommon.js");
var createConstantBuffers = WebGlCommon.createConstantBuffers;
var destroyConstantBuffers = WebGlCommon.destroyConstantBuffers;
var createShaderProgram = WebGlCommon.createShaderProgram;
var destroyShaderProgram = WebGlCommon.destroyShaderProgram;
var enableAttributes = WebGlCommon.enableAttributes;
var disableAttributes = WebGlCommon.disableAttributes;
var setViewport = WebGlCommon.setViewport;
var setupPixelEffectUniforms = WebGlCommon.setupPixelEffectUniforms;

var setDepth = WebGlCommon.setDepth;
var setTexture = WebGlCommon.setTexture;

var vertexSrc = __webpack_require__(/*! ../shaders/vertexNormal */ "./node_modules/marzipano/src/shaders/vertexNormal.js");
var fragmentSrc = __webpack_require__(/*! ../shaders/fragmentNormal */ "./node_modules/marzipano/src/shaders/fragmentNormal.js");

var vertexIndices = [0, 1, 2, 0, 2, 3];
var vertexPositions = [-0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, 0.5, 0.0, -0.5, 0.5, 0.0];
var textureCoords = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];

var attribList = ['aVertexPosition', 'aTextureCoord'];
var uniformList = [
  'uDepth', 'uOpacity', 'uSampler', 'uProjMatrix', 'uViewportMatrix',
  'uColorOffset', 'uColorMatrix'
];


function WebGlBaseRenderer(gl) {
  this.gl = gl;

  // The projection matrix positions the tiles in world space.
  // We compute it in Javascript because lack of precision in the vertex shader
  // causes seams to appear between adjacent tiles at large zoom levels.
  this.projMatrix = mat4.create();

  // The viewport matrix responsible for viewport clamping.
  // See setViewport() for an explanation of how it works.
  this.viewportMatrix = mat4.create();

  // Translation and scale vectors for tiles.
  this.translateVector = vec3.create();
  this.scaleVector = vec3.create();

  this.constantBuffers = createConstantBuffers(gl, vertexIndices, vertexPositions, textureCoords);

  this.shaderProgram = createShaderProgram(gl, vertexSrc, fragmentSrc, attribList, uniformList);
}

WebGlBaseRenderer.prototype.destroy = function() {
  destroyConstantBuffers(this.gl, this.constantBuffers);
  destroyShaderProgram(this.gl, this.shaderProgram);
  clearOwnProperties(this);
};

WebGlBaseRenderer.prototype.startLayer = function(layer, rect) {
  var gl = this.gl;
  var shaderProgram = this.shaderProgram;
  var constantBuffers = this.constantBuffers;
  var viewportMatrix = this.viewportMatrix;

  gl.useProgram(shaderProgram);

  enableAttributes(gl, shaderProgram);

  setViewport(gl, layer, rect, viewportMatrix);
  gl.uniformMatrix4fv(shaderProgram.uViewportMatrix, false, viewportMatrix);

  gl.bindBuffer(gl.ARRAY_BUFFER, constantBuffers.vertexPositions);
  gl.vertexAttribPointer(shaderProgram.aVertexPosition, 3, gl.FLOAT, gl.FALSE, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, constantBuffers.textureCoords);
  gl.vertexAttribPointer(shaderProgram.aTextureCoord, 2, gl.FLOAT, gl.FALSE, 0, 0);

  setupPixelEffectUniforms(gl, layer.effects(), {
    opacity: shaderProgram.uOpacity,
    colorOffset: shaderProgram.uColorOffset,
    colorMatrix: shaderProgram.uColorMatrix
  });
};


WebGlBaseRenderer.prototype.endLayer = function(layer, rect) {
  var gl = this.gl;
  var shaderProgram = this.shaderProgram;
  disableAttributes(gl, shaderProgram);
};


WebGlBaseRenderer.prototype.renderTile = function(tile, texture, layer, layerZ) {
  var gl = this.gl;
  var shaderProgram = this.shaderProgram;
  var constantBuffers = this.constantBuffers;
  var projMatrix = this.projMatrix;
  var translateVector = this.translateVector;
  var scaleVector = this.scaleVector;

  translateVector[0] = tile.centerX();
  translateVector[1] = tile.centerY();
  translateVector[2] = -0.5;

  scaleVector[0] = tile.scaleX();
  scaleVector[1] = tile.scaleY();
  scaleVector[2] = 1.0;

  mat4.copy(projMatrix, layer.view().projection());
  mat4.rotateX(projMatrix, projMatrix, tile.rotX());
  mat4.rotateY(projMatrix, projMatrix, tile.rotY());
  mat4.translate(projMatrix, projMatrix, translateVector);
  mat4.scale(projMatrix, projMatrix, scaleVector);

  gl.uniformMatrix4fv(shaderProgram.uProjMatrix, false, projMatrix);

  setDepth(gl, shaderProgram, layerZ, tile.z);

  setTexture(gl, shaderProgram, texture);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, constantBuffers.vertexIndices);
  gl.drawElements(gl.TRIANGLES, vertexIndices.length, gl.UNSIGNED_SHORT, 0);
};


module.exports = WebGlBaseRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/WebGlCommon.js":
/*!*************************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/WebGlCommon.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// These are used to set the WebGl depth for a tile.
var MAX_LAYERS = 256; // Max number of layers per stage.
var MAX_LEVELS = 256; // Max number of levels per layer.

var clamp = __webpack_require__(/*! ../util/clamp */ "./node_modules/marzipano/src/util/clamp.js");
var vec4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec4;
var vec3 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec3;
var mat4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").mat4;


function createShader(gl, type, src) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader);
  }
  return shader;
}


function createShaderProgram(gl, vertexSrc, fragmentSrc, attribList, uniformList) {

  var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSrc);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

  var shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(shaderProgram);
  }

  for (var i = 0; i < attribList.length; i++) {
    var attrib = attribList[i];
    shaderProgram[attrib] = gl.getAttribLocation(shaderProgram, attrib);
    if (shaderProgram[attrib] === -1) {
      throw new Error('Shader program has no ' + attrib + ' attribute');
    }
  }

  for (var j = 0; j < uniformList.length; j++) {
    var uniform = uniformList[j];
    shaderProgram[uniform] = gl.getUniformLocation(shaderProgram, uniform);
    if (shaderProgram[uniform] === -1) {
      throw new Error('Shader program has no ' + uniform + ' uniform');
    }
  }

  return shaderProgram;
}


function destroyShaderProgram(gl, shaderProgram) {
  var shaderList = gl.getAttachedShaders(shaderProgram);
  for (var i = 0; i < shaderList.length; i++) {
    var shader = shaderList[i];
    gl.detachShader(shaderProgram, shader);
    gl.deleteShader(shader);
  }
  gl.deleteProgram(shaderProgram);
}


function createConstantBuffer(gl, target, usage, value) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(target, buffer);
  gl.bufferData(target, value, usage);
  return buffer;
}


function createConstantBuffers(gl, vertexIndices, vertexPositions, textureCoords) {
  return {
    vertexIndices: createConstantBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW, new Uint16Array(vertexIndices)),
    vertexPositions: createConstantBuffer(gl, gl.ARRAY_BUFFER, gl.STATIC_DRAW, new Float32Array(vertexPositions)),
    textureCoords: createConstantBuffer(gl, gl.ARRAY_BUFFER, gl.STATIC_DRAW, new Float32Array(textureCoords))
  };
}


function destroyConstantBuffers(gl, constantBuffers) {
  gl.deleteBuffer(constantBuffers.vertexIndices);
  gl.deleteBuffer(constantBuffers.vertexPositions);
  gl.deleteBuffer(constantBuffers.textureCoords);
}


function enableAttributes(gl, shaderProgram) {
  var numAttrs = gl.getProgramParameter(shaderProgram, gl.ACTIVE_ATTRIBUTES);
  for (var i = 0; i < numAttrs; i++) {
    gl.enableVertexAttribArray(i);
  }
}


function disableAttributes(gl, shaderProgram) {
  var numAttrs = gl.getProgramParameter(shaderProgram, gl.ACTIVE_ATTRIBUTES);
  for (var i = 0; i < numAttrs; i++) {
    gl.disableVertexAttribArray(i);
  }
}


function setTexture(gl, shaderProgram, texture) {
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture._texture);
  gl.uniform1i(shaderProgram.uSampler, 0);
}


function setDepth(gl, shaderProgram, layerZ, tileZ) {
  var depth = (((layerZ + 1) * MAX_LEVELS) - tileZ) / (MAX_LEVELS * MAX_LAYERS);
  gl.uniform1f(shaderProgram.uDepth, depth);
}


var defaultOpacity = 1.0;
var defaultColorOffset = vec4.create();
var defaultColorMatrix = mat4.create();
mat4.identity(defaultColorMatrix);

function setupPixelEffectUniforms(gl, effects, uniforms) {
  var opacity = defaultOpacity;
  if (effects && effects.opacity != null) {
    opacity = effects.opacity;
  }
  gl.uniform1f(uniforms.opacity, opacity);

  var colorOffset = defaultColorOffset;
  if (effects && effects.colorOffset) {
    colorOffset = effects.colorOffset;
  }
  gl.uniform4fv(uniforms.colorOffset, colorOffset);

  var colorMatrix = defaultColorMatrix;
  if (effects && effects.colorMatrix) {
    colorMatrix = effects.colorMatrix;
  }
  gl.uniformMatrix4fv(uniforms.colorMatrix, false, colorMatrix);
}


// Temporary vectors for setViewport.
var translateVector = vec3.create();
var scaleVector = vec3.create();


// Sets the WebGL viewport and returns a viewport clamping compensation matrix.
//
// Negative viewport origin coordinates cause rendering issues. Letting the
// viewport dimensions extend beyond the visible area do not seem to cause
// rendering issues, but they may still have an impact on performance.
// Therefore, when the scene's rect is not fully contained in the rendering
// area, we clamp the viewport to the rendering area, and return a compensation
// matrix to scale and translate vertices accordingly.
function setViewport(gl, layer, rect, viewportMatrix) {
  if (rect.x === 0 && rect.width === 1 && rect.y === 0 && rect.height === 1) {
    // Fast path for full rect.
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    mat4.identity(viewportMatrix);
    return;
  }

  var offsetX = rect.x;
  var clampedOffsetX = clamp(offsetX, 0, 1);
  var leftExcess = clampedOffsetX - offsetX;
  var maxClampedWidth = 1 - clampedOffsetX;
  var clampedWidth = clamp(rect.width - leftExcess, 0, maxClampedWidth);
  var rightExcess = rect.width - clampedWidth;

  var offsetY = 1 - rect.height - rect.y;
  var clampedOffsetY = clamp(offsetY, 0, 1);
  var bottomExcess = clampedOffsetY - offsetY;
  var maxClampedHeight = 1 - clampedOffsetY;
  var clampedHeight = clamp(rect.height - bottomExcess, 0, maxClampedHeight);
  var topExcess = rect.height - clampedHeight;

  vec3.set(
    scaleVector,
    rect.width / clampedWidth,
    rect.height / clampedHeight,
    1);

  vec3.set(
    translateVector,
    (rightExcess - leftExcess) / clampedWidth,
    (topExcess - bottomExcess) / clampedHeight,
    0);

  mat4.identity(viewportMatrix);
  mat4.translate(viewportMatrix, viewportMatrix, translateVector);
  mat4.scale(viewportMatrix, viewportMatrix, scaleVector);

  gl.viewport(gl.drawingBufferWidth * clampedOffsetX,
              gl.drawingBufferHeight * clampedOffsetY,
              gl.drawingBufferWidth * clampedWidth,
              gl.drawingBufferHeight * clampedHeight);
}

module.exports = {
  createShaderProgram: createShaderProgram,
  destroyShaderProgram: destroyShaderProgram,
  createConstantBuffers: createConstantBuffers,
  destroyConstantBuffers: destroyConstantBuffers,
  enableAttributes: enableAttributes,
  disableAttributes: disableAttributes,
  setTexture: setTexture,
  setDepth: setDepth,
  setViewport: setViewport,
  setupPixelEffectUniforms: setupPixelEffectUniforms
};


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/WebGlCube.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/WebGlCube.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var WebGlBaseRenderer = __webpack_require__(/*! ./WebGlBase */ "./node_modules/marzipano/src/renderers/WebGlBase.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");

/**
 * @class WebGlCubeRenderer
 * @implements Renderer
 * @classdesc
 *
 * A renderer for {@link CubeGeometry} and {@link RectilinearView}, appropriate
 * for a {@link WebGlStage}.
 *
 * Most users do not need to instantiate this class. Renderers are created and
 * destroyed by {@link Stage} as necessary.
 */
function WebGlCubeRenderer() {
  this.constructor.super_.apply(this, arguments);
}

inherits(WebGlCubeRenderer, WebGlBaseRenderer);

module.exports = WebGlCubeRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/WebGlEquirect.js":
/*!***************************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/WebGlEquirect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var mat4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").mat4;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var WebGlCommon = __webpack_require__(/*! ./WebGlCommon */ "./node_modules/marzipano/src/renderers/WebGlCommon.js");
var createConstantBuffers = WebGlCommon.createConstantBuffers;
var destroyConstantBuffers = WebGlCommon.destroyConstantBuffers;
var createShaderProgram = WebGlCommon.createShaderProgram;
var destroyShaderProgram = WebGlCommon.destroyShaderProgram;
var enableAttributes = WebGlCommon.enableAttributes;
var disableAttributes = WebGlCommon.disableAttributes;
var setViewport = WebGlCommon.setViewport;
var setupPixelEffectUniforms = WebGlCommon.setupPixelEffectUniforms;

var setDepth = WebGlCommon.setDepth;
var setTexture = WebGlCommon.setTexture;

var vertexSrc = __webpack_require__(/*! ../shaders/vertexEquirect */ "./node_modules/marzipano/src/shaders/vertexEquirect.js");
var fragmentSrc = __webpack_require__(/*! ../shaders/fragmentEquirect */ "./node_modules/marzipano/src/shaders/fragmentEquirect.js");

var vertexIndices = [0, 1, 2, 0, 2, 3];
var vertexPositions = [-1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, 1.0, 0.0];
var textureCoords = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];

var attribList = ['aVertexPosition'];
var uniformList = [
  'uDepth', 'uOpacity', 'uSampler', 'uInvProjMatrix', 'uViewportMatrix',
  'uColorOffset', 'uColorMatrix', 'uTextureX', 'uTextureY', 'uTextureWidth',
  'uTextureHeight'
];


/**
 * @class WebGlEquirectRenderer
 * @implements Renderer
 * @classdesc
 *
 * A renderer for {@link EquirectGeometry} and {@link RectilinearView},
 * appropriate for {@link WebGlStage}.
 *
 * Most users do not need to instantiate this class. Renderers are created and
 * destroyed by {@link Stage} as necessary.
 */
function WebGlEquirectRenderer(gl) {
  this.gl = gl;

  // The inverse projection matrix.
  this.invProjMatrix = mat4.create();

  // The viewport matrix responsible for viewport clamping.
  // See setViewport() for an explanation of how it works.
  this.viewportMatrix = mat4.create();

  this.constantBuffers = createConstantBuffers(gl, vertexIndices, vertexPositions, textureCoords);

  this.shaderProgram = createShaderProgram(gl, vertexSrc, fragmentSrc, attribList, uniformList);
}

WebGlEquirectRenderer.prototype.destroy = function() {
  destroyConstantBuffers(this.gl, this.constantBuffers);
  destroyShaderProgram(this.gl, this.shaderProgram);
  clearOwnProperties(this);
};


WebGlEquirectRenderer.prototype.startLayer = function(layer, rect) {
  var gl = this.gl;
  var shaderProgram = this.shaderProgram;
  var constantBuffers = this.constantBuffers;
  var invProjMatrix = this.invProjMatrix;
  var viewportMatrix = this.viewportMatrix;

  gl.useProgram(shaderProgram);

  enableAttributes(gl, shaderProgram);

  setViewport(gl, layer, rect, viewportMatrix);
  gl.uniformMatrix4fv(shaderProgram.uViewportMatrix, false, viewportMatrix);

  gl.bindBuffer(gl.ARRAY_BUFFER, constantBuffers.vertexPositions);
  gl.vertexAttribPointer(shaderProgram.aVertexPosition, 3, gl.FLOAT, gl.FALSE, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, constantBuffers.textureCoords);

  // Compute and set the inverse projection matrix.
  mat4.copy(invProjMatrix, layer.view().projection());
  mat4.invert(invProjMatrix, invProjMatrix);

  gl.uniformMatrix4fv(shaderProgram.uInvProjMatrix, false, invProjMatrix);

  // Compute and set the texture scale and crop offsets.
  var textureCrop = layer.effects().textureCrop || {};
  var textureX = textureCrop.x != null ? textureCrop.x : 0;
  var textureY = textureCrop.y != null ? textureCrop.y : 0;
  var textureWidth = textureCrop.width != null ? textureCrop.width : 1;
  var textureHeight = textureCrop.height != null ? textureCrop.height : 1;

  gl.uniform1f(shaderProgram.uTextureX, textureX);
  gl.uniform1f(shaderProgram.uTextureY, textureY);
  gl.uniform1f(shaderProgram.uTextureWidth, textureWidth);
  gl.uniform1f(shaderProgram.uTextureHeight, textureHeight);

  setupPixelEffectUniforms(gl, layer.effects(), {
    opacity: shaderProgram.uOpacity,
    colorOffset: shaderProgram.uColorOffset,
    colorMatrix: shaderProgram.uColorMatrix
  });
};


WebGlEquirectRenderer.prototype.endLayer = function(layer, rect) {
  var gl = this.gl;
  var shaderProgram = this.shaderProgram;
  disableAttributes(gl, shaderProgram);
};


WebGlEquirectRenderer.prototype.renderTile = function(tile, texture, layer, layerZ) {
  var gl = this.gl;
  var shaderProgram = this.shaderProgram;
  var constantBuffers = this.constantBuffers;

  setDepth(gl, shaderProgram, layerZ, tile.z);

  setTexture(gl, shaderProgram, texture);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, constantBuffers.vertexIndices);
  gl.drawElements(gl.TRIANGLES, vertexIndices.length, gl.UNSIGNED_SHORT, 0);
};


module.exports = WebGlEquirectRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/WebGlFlat.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/WebGlFlat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var WebGlBaseRenderer = __webpack_require__(/*! ./WebGlBase */ "./node_modules/marzipano/src/renderers/WebGlBase.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");

/**
 * @class WebGlFlatRenderer
 * @implements Renderer
 * @classdesc
 *
 * A renderer for {@link FlatGeometry} and {@link FlatView}, appropriate for a
 * {@link WebGlStage}.
 *
 * Most users do not need to instantiate this class. Renderers are created and
 * destroyed by {@link Stage} as necessary.
 */
function WebGlFlatRenderer() {
  this.constructor.super_.apply(this, arguments);
}

inherits(WebGlFlatRenderer, WebGlBaseRenderer);

module.exports = WebGlFlatRenderer;


/***/ }),

/***/ "./node_modules/marzipano/src/renderers/registerDefaultRenderers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/marzipano/src/renderers/registerDefaultRenderers.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var WebGlCube = __webpack_require__(/*! ./WebGlCube */ "./node_modules/marzipano/src/renderers/WebGlCube.js");
var WebGlFlat = __webpack_require__(/*! ./WebGlFlat */ "./node_modules/marzipano/src/renderers/WebGlFlat.js");
var WebGlEquirect = __webpack_require__(/*! ./WebGlEquirect */ "./node_modules/marzipano/src/renderers/WebGlEquirect.js");

var CssCube = __webpack_require__(/*! ./CssCube */ "./node_modules/marzipano/src/renderers/CssCube.js");
var CssFlat = __webpack_require__(/*! ./CssFlat */ "./node_modules/marzipano/src/renderers/CssFlat.js");

var FlashCube = __webpack_require__(/*! ./FlashCube */ "./node_modules/marzipano/src/renderers/FlashCube.js");
var FlashFlat = __webpack_require__(/*! ./FlashFlat */ "./node_modules/marzipano/src/renderers/FlashFlat.js");

/**
 * Registers all known renderers for the given stage type into that stage.
 * Most users will not need to register renderers, as {@link Viewer} does it for
 * them.
 *
 * @param {Stage} stage The stage where the renderers are to be registered.
 * @throws An error if the stage type is unknown.
 */
function registerDefaultRenderers(stage) {
  switch (stage.type) {
    case 'webgl':
      stage.registerRenderer('flat', 'flat', WebGlFlat);
      stage.registerRenderer('cube', 'rectilinear', WebGlCube);
      stage.registerRenderer('equirect', 'rectilinear', WebGlEquirect);
      break;
    case 'css':
      stage.registerRenderer('flat', 'flat', CssFlat);
      stage.registerRenderer('cube', 'rectilinear', CssCube);
      break;
    case 'flash':
      stage.registerRenderer('flat', 'flat', FlashFlat);
      stage.registerRenderer('cube', 'rectilinear', FlashCube);
      break;
    default:
      throw new Error('Unknown stage type: ' + stage.type);
  }
}

module.exports = registerDefaultRenderers;


/***/ }),

/***/ "./node_modules/marzipano/src/shaders/fragmentEquirect.js":
/*!****************************************************************!*\
  !*** ./node_modules/marzipano/src/shaders/fragmentEquirect.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = [
'#ifdef GL_FRAGMENT_PRECISION_HIGH',
'precision highp float;',
'#else',
'precision mediump float',
'#endif',

'uniform sampler2D uSampler;',
'uniform float uOpacity;',
'uniform float uTextureX;',
'uniform float uTextureY;',
'uniform float uTextureWidth;',
'uniform float uTextureHeight;',
'uniform vec4 uColorOffset;',
'uniform mat4 uColorMatrix;',

'varying vec4 vRay;',

'const float PI = 3.14159265358979323846264;',

'void main(void) {',
'  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);',
'  float phi  = acos(vRay.y * r);',
'  float theta = atan(vRay.x, -1.0*vRay.z);',
'  float s = 0.5 + 0.5 * theta / PI;',
'  float t = 1.0 - phi / PI;',

'  s = s * uTextureWidth + uTextureX;',
'  t = t * uTextureHeight + uTextureY;',

'  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;',
'  gl_FragColor = vec4(color.rgba * uOpacity);',
'}'
].join('\n');


/***/ }),

/***/ "./node_modules/marzipano/src/shaders/fragmentNormal.js":
/*!**************************************************************!*\
  !*** ./node_modules/marzipano/src/shaders/fragmentNormal.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = [
'#ifdef GL_FRAGMENT_PRECISION_HIGH',
'precision highp float;',
'#else',
'precision mediump float;',
'#endif',

'uniform sampler2D uSampler;',
'uniform float uOpacity;',
'uniform vec4 uColorOffset;',
'uniform mat4 uColorMatrix;',

'varying vec2 vTextureCoord;',

'void main(void) {',
'  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;',
'  gl_FragColor = vec4(color.rgba * uOpacity);',
'}'
].join('\n');


/***/ }),

/***/ "./node_modules/marzipano/src/shaders/vertexEquirect.js":
/*!**************************************************************!*\
  !*** ./node_modules/marzipano/src/shaders/vertexEquirect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = [
'attribute vec3 aVertexPosition;',

'uniform float uDepth;',
'uniform mat4 uViewportMatrix;',
'uniform mat4 uInvProjMatrix;',

'varying vec4 vRay;',

'void main(void) {',
'  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);',
'  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);',
'}'
].join('\n');


/***/ }),

/***/ "./node_modules/marzipano/src/shaders/vertexNormal.js":
/*!************************************************************!*\
  !*** ./node_modules/marzipano/src/shaders/vertexNormal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = [
'attribute vec3 aVertexPosition;',
'attribute vec2 aTextureCoord;',

'uniform float uDepth;',
'uniform mat4 uViewportMatrix;',
'uniform mat4 uProjMatrix;',

'varying vec2 vTextureCoord;',

'void main(void) {',
'  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);',
'  gl_Position.z = uDepth * gl_Position.w;',
'  vTextureCoord = aTextureCoord;',
'}'
].join('\n');


/***/ }),

/***/ "./node_modules/marzipano/src/sources/ImageUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/marzipano/src/sources/ImageUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var NetworkError = __webpack_require__(/*! ../NetworkError */ "./node_modules/marzipano/src/NetworkError.js");
var WorkPool = __webpack_require__(/*! ../collections/WorkPool */ "./node_modules/marzipano/src/collections/WorkPool.js");
var chain = __webpack_require__(/*! ../util/chain */ "./node_modules/marzipano/src/util/chain.js");
var delay = __webpack_require__(/*! ../util/delay */ "./node_modules/marzipano/src/util/delay.js");
var now = __webpack_require__(/*! ../util/now */ "./node_modules/marzipano/src/util/now.js");


// Map template properties to their corresponding tile properties.
var templateProperties = {
  x: 'x',
  y: 'y',
  z: 'z',
  f: 'face'
};

// Default face order for cube maps.
var defaultCubeMapFaceOrder = 'bdflru';

// Default maximum number of concurrent requests.
var defaultConcurrency = 4;

// Default milliseconds to wait before retrying failed requests.
var defaultRetryDelay = 10000;


/**
 * @class ImageUrlSource
 * @implements Source
 * @classdesc
 *
 * A {@link Source} that loads {@link Asset assets} from images given a URL and
 * a crop rectangle.
 *
 * @param {Function} sourceFromTile Function that receives a tile and returns
 * a `{ url, rect }` object, where `url` is an image URL and `rect`, when
 * present, is an `{ x, y, width, height }` object in normalized coordinates
 * denoting the portion of the image to use.
 * @param {Object} opts
 * @param {number} [opts.concurrency=4] Maximum number of tiles to request at
 *     the same time. The limit is per {@link ImageSourceUrl} instance.
 * @param {number} [opts.retryDelay=10000] Time in milliseconds to wait before
 *     retrying a failed request.
 */
function ImageUrlSource(sourceFromTile, opts) {

  opts = opts ? opts : {};

  this._loadPool = new WorkPool({
    concurrency: opts.concurrency || defaultConcurrency
  });

  this._retryDelay = opts.retryDelay || defaultRetryDelay;
  this._retryMap = {};

  this._sourceFromTile = sourceFromTile;
}

eventEmitter(ImageUrlSource);


ImageUrlSource.prototype.loadAsset = function(stage, tile, done) {

  var self = this;

  var retryDelay = this._retryDelay;
  var retryMap = this._retryMap;

  var tileSource = this._sourceFromTile(tile);
  var url = tileSource.url;
  var rect = tileSource.rect;

  var loadImage = stage.loadImage.bind(stage, url, rect);

  var loadFn = function(done) {
    // TODO: Deduplicate load requests for the same URL. Although the browser
    // might be smart enough to avoid duplicate requests, they are still unduly
    // impacted by the concurrency parameter.
    return self._loadPool.push(loadImage, function(err, asset) {
      if (err) {
        if (err instanceof NetworkError) {
          // If a network error occurred, wait before retrying.
          retryMap[url] = now();
          self.emit('networkError', asset, err);
        }
        done(err, tile);
      } else {
        // On a successful fetch, forget the previous timeout.
        delete retryMap[url];
        done(null, tile, asset);
      }
    });
  };

  // Check whether we are retrying a failed request.
  var delayAmount;
  var lastTime = retryMap[url];
  if (lastTime != null) {
    var currentTime = now();
    var elapsed = currentTime - lastTime;
    if (elapsed < retryDelay) {
      // Wait before retrying.
      delayAmount = retryDelay - elapsed;
    } else {
      // Retry timeout expired; perform the request at once.
      delayAmount = 0;
      delete retryMap[url];
    }
  }

  var delayFn = delay.bind(null, delayAmount);

  return chain(delayFn, loadFn)(done);
};


/**
 * Creates an ImageUrlSource from a string template.
 *
 * @param {String} url Tile URL template, which may contain the following
 *    placeholders:
 *    - `{f}` : tile face (one of `b`, `d`, `f`, `l`, `r`, `u`)
 *    - `{z}` : tile level index (0 is the smallest level)
 *    - `{x}` : tile horizontal index
 *    - `{y}` : tile vertical index
 * @param {Object} opts In addition to the options already supported by the
 *     {@link ImageUrlSource} constructor.
 * @param {String} opts.cubeMapPreviewUrl URL to use as the preview level.
 *     This must be a single image containing six cube faces laid out
 *     vertically according to the face order parameter.
 * @param {String} [opts.cubeMapPreviewFaceOrder='bdflru'] Face order within
 *     the preview image.
 */
ImageUrlSource.fromString = function(url, opts) {
  opts = opts || {};

  var faceOrder = opts && opts.cubeMapPreviewFaceOrder || defaultCubeMapFaceOrder;

  var urlFn = opts.cubeMapPreviewUrl ? withPreview : withoutPreview;

  return new ImageUrlSource(urlFn, opts);

  function withoutPreview(tile) {
    var tileUrl = url;

    for (var property in templateProperties) {
      var templateProperty = templateProperties[property];
      var regExp = propertyRegExp(property);
      var valueFromTile = tile.hasOwnProperty(templateProperty) ? tile[templateProperty] : '';
      tileUrl = tileUrl.replace(regExp, valueFromTile);
    }

    return { url: tileUrl };
  }

  function withPreview(tile) {
    if (tile.z === 0) {
      return cubeMapUrl(tile);
    }
    else {
      return withoutPreview(tile);
    }
  }

  function cubeMapUrl(tile) {
    var y = faceOrder.indexOf(tile.face) / 6;
    return {
      url: opts.cubeMapPreviewUrl,
      rect: { x: 0, y: y, width: 1, height: 1/6 }
    };
  }
};

function propertyRegExp(property) {
  var regExpStr = '\\{(' + property + ')\\}';
  return new RegExp(regExpStr, 'g');
}

module.exports = ImageUrlSource;


/***/ }),

/***/ "./node_modules/marzipano/src/sources/SingleAsset.js":
/*!***********************************************************!*\
  !*** ./node_modules/marzipano/src/sources/SingleAsset.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @class SingleAssetSource
 * @implements Source
 * @classdesc
 *
 * A {@link Source} that always provides the same {@link Asset}.
 *
 * @param {Asset} asset The asset.
*/
function SingleAssetSource(asset) {
  this._asset = asset;
}

SingleAssetSource.prototype.asset = function() {
  return this._asset;
};

SingleAssetSource.prototype.loadAsset = function(stage, tile, done) {
  var self = this;

  var timeout = setTimeout(function() {
    done(null, tile, self._asset);
  }, 0);

  function cancel() {
    clearTimeout(timeout);
    done.apply(null, arguments);
  }

  return cancel;
};

module.exports = SingleAssetSource;


/***/ }),

/***/ "./node_modules/marzipano/src/stages/Css.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/stages/Css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Stage = __webpack_require__(/*! ./Stage */ "./node_modules/marzipano/src/stages/Stage.js");
var HtmlImageLoader = __webpack_require__(/*! ../loaders/HtmlImage */ "./node_modules/marzipano/src/loaders/HtmlImage.js");
var cssSupported = __webpack_require__(/*! ../support/Css */ "./node_modules/marzipano/src/support/Css.js");
var browser = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var setAbsolute = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setAbsolute;
var setFullSize = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setFullSize;
var setNullTransformOrigin = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setNullTransformOrigin;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");


// Browser-specific workarounds.
var browserQuirks = {

  // On most browsers we need to pad the tile edges with repeated pixels so
  // that the borders between neighboring tiles aren't apparent.
  // On iOS this isn't required, but we must disable it because the padding is
  // incorrectly rendered on top of the neighboring tile.
  padSize: browser.ios ? 0 : 3,

  // In order to prevent fallback tiles from overlapping their children, iOS
  // requires smaller zoom levels to be placed below larger zoom levels in
  // the CSS 3D coordinate space.
  reverseLevelDepth: browser.ios,

  // A null transform on the layer element is required so that transitions
  // between layers work on iOS.
  useNullTransform: browser.ios,

  // On Webkit and Gecko browsers, some tiles become invisible at certain
  // angles, usually non-floor tiles when looking straight down. Setting the
  // translateZ following the perspective transform to a slightly larger value
  // than the latter seems to work around this glitch.
  perspectiveNudge: browser.webkit || browser.gecko ? 0.001 : 0

};


/**
 * @class CssStage
 * @extends Stage
 * @classdesc
 *
 * A {@link Stage} implementation using CSS 3D Transforms.
 *
 * @param {Object} opts
 *
 * Also see the available {@link Stage} options.
 */
function CssStage(opts) {
  this.constructor.super_.call(this, opts);

  this._loader = new HtmlImageLoader(this);

  this._domElement = document.createElement('div');

  setAbsolute(this._domElement);
  setFullSize(this._domElement);

  // N.B. the CSS stage requires device adaptation to be configured through
  // the <meta name="viewport"> tag on the containing document.
  // Failure to do so will cause clipping and padding bugs to occur,
  // at least on iOS <= 7.
}

inherits(CssStage, Stage);


/**
 * Destructor.
 */
CssStage.prototype.destroy = function() {
  // Delegate clearing own properties to the Stage destructor.
  this.constructor.super_.prototype.destroy.call(this);
};


CssStage.supported = function() {
  return cssSupported();
};


/**
 * Returns the underlying DOM element.
 *
 * @return {Element}
 */
CssStage.prototype.domElement = function() {
  return this._domElement;
};


CssStage.prototype.setSizeForType = function() {};


CssStage.prototype.loadImage = function(url, rect, done) {
  return this._loader.loadImage(url, rect, done);
};


CssStage.prototype.validateLayer = function(layer) {
  return; // always valid
};


CssStage.prototype.createRenderer = function(Renderer) {
  return new Renderer(this._domElement, browserQuirks);
};

CssStage.prototype.destroyRenderer = function(renderer) {
  renderer.destroy();
};


CssStage.prototype.startFrame = function() {};


CssStage.prototype.endFrame = function() {};


CssStage.prototype.takeSnapshot = function() {
  throw new Error('CssStage: takeSnapshot not implemented');
};


CssStage.type = CssStage.prototype.type = 'css';


function CssTexture(stage, tile, asset) {

  var canvas = document.createElement('canvas');
  setAbsolute(canvas);
  setNullTransformOrigin(canvas);

  this._canvas = canvas;
  this._timestamp = null;
  this.refresh(tile, asset);

}


CssTexture.prototype.refresh = function(tile, asset) {

  // Check whether the texture needs to be updated.
  var timestamp = asset.timestamp();
  if (timestamp === this._timestamp) {
    return;
  }
  this._timestamp = timestamp;

  var canvas = this._canvas;
  var ctx = canvas.getContext('2d');

  // Get asset element.
  var element = asset.element();

  // Get tile dimensions.
  var tileWidth = tile.width();
  var tileHeight = tile.height();

  // Get padding sizes.
  var padSize = browserQuirks.padSize;
  var padTop = tile.padTop() ? padSize : 0;
  var padBottom = tile.padBottom() ? padSize : 0;
  var padLeft = tile.padLeft() ? padSize : 0;
  var padRight = tile.padRight() ? padSize : 0;

  // Set canvas size.
  canvas.width = padLeft + tileWidth + padRight;
  canvas.height = padTop + tileHeight + padBottom;

  // Draw image.
  ctx.drawImage(element, padLeft, padTop, tileWidth, tileHeight);

  var i;

  // Draw top padding.
  for (i = 0; i < padTop; i++) {
    ctx.drawImage(canvas, padLeft, padTop, tileWidth, 1,
                          padLeft, i, tileWidth, 1);
  }

  // Draw left padding.
  for (i = 0; i < padLeft; i++) {
    ctx.drawImage(canvas, padLeft, padTop, 1, tileHeight,
                          i, padTop, 1, tileHeight);
  }

  // Draw bottom padding.
  for (i = 0; i < padBottom; i++) {
    ctx.drawImage(canvas, padLeft, padTop + tileHeight - 1, tileWidth, 1,
                          padLeft, padTop + tileHeight + i, tileWidth, 1);
  }

  // Draw right padding.
  for (i = 0; i < padRight; i++) {
    ctx.drawImage(canvas, padLeft + tileWidth - 1, padTop, 1, tileHeight,
                          padLeft + tileWidth + i, padTop, 1, tileHeight);
  }

};


CssTexture.prototype.destroy = function() {
  // TODO: investigate whether keeping a pool of canvases instead of
  // creating new ones on demand improves performance.
  clearOwnProperties(this);
};


CssStage.TextureClass = CssStage.prototype.TextureClass = CssTexture;


module.exports = CssStage;


/***/ }),

/***/ "./node_modules/marzipano/src/stages/Flash.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/stages/Flash.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Stage = __webpack_require__(/*! ./Stage */ "./node_modules/marzipano/src/stages/Stage.js");
var FlashImageLoader = __webpack_require__(/*! ../loaders/FlashImage */ "./node_modules/marzipano/src/loaders/FlashImage.js");
var flashSupported = __webpack_require__(/*! ../support/Flash */ "./node_modules/marzipano/src/support/Flash.js");
var WorkQueue = __webpack_require__(/*! ../collections/WorkQueue */ "./node_modules/marzipano/src/collections/WorkQueue.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var defer = __webpack_require__(/*! ../util/defer */ "./node_modules/marzipano/src/util/defer.js");
var setAbsolute = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setAbsolute;
var setFullSize = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setFullSize;
var setBlocking = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setBlocking;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

// Default Flash wmode.
var defaultWMode = 'transparent';

// Default Flash SWF path. By default, expect the SWF to be named marzipano.swf
// and located in the same directory as the current script. The default path
// may be overridden by passing the `swfPath` option into the Viewer or Stage
// constructor.
var defaultSwfPath = function() {
  var script = document.currentScript;
  if (!script) {
    // This will produce the wrong result if the current script is loaded with
    // the `async` or `defer` options, or exec'ed from a string. The user is
    // expected to supply a custom `swfPath` in these cases.
    var scripts = document.getElementsByTagName('script');
    script = scripts.length ? scripts[scripts.length-1] : null;
  }
  if (!script) {
    return null;
  }
  var path = script.src;
  var slash = path.lastIndexOf('/');
  if (slash >= 0) {
    path = path.slice(0, slash + 1);
  } else {
    path = '';
  }
  return path + 'marzipano.swf';
}();

// Callbacks must be exposed in a global object to be called from Flash.
// The global object maps each stage ID into the respective callbacks.
// To prevent multiple Marzipano instances from clobbering the callbacks
// for each other's stages, the next available stage ID must be shared among
// the instances. We cache this value in a special property of the global
// callback object.
var callbackObjectName = 'MarzipanoFlashCallbackMap';
if (!(callbackObjectName in window)) {
  window[callbackObjectName] = { __next: 0 };
}

// Get the next available Flash stage ID.
function nextFlashStageId() {
  return window[callbackObjectName].__next++;
}

// Names of the callbacks called from Flash. Presently there is only one.
var callbackNames = [ 'imageLoaded' ];

// Browser-specific workarounds.
var flashQuirks = {
  // How many repeated pixels to add around tile edges to suppress visible seams.
  padSize: 3
};

/**
 * @class FlashStage
 * @extends Stage
 * @classdesc
 *
 * A {@link Stage} implementation using Flash.
 *
 * @param {Object} opts
 * @param {string} [opts.wmode='transparent']
 * @param {string} [opts.swfPath]
 *
 * The `wmode` option controls transparency, layering and compositing of the
 * Flash element into the web page. For more information see:
 * http://helpx.adobe.com/flash/kb/flash-object-embed-tag-attributes.html
 *
 * The `swfPath` option denotes the path to the `marzipano.swf` file. It
 * defaults to the location of `marzipano.js` by looking for a script tag with
 * that name.
 *
 * Also see the available {@link Stage} options.
 */
function FlashStage(opts) {
  this.constructor.super_.call(this, opts);

  this._wmode = opts && opts.wmode || defaultWMode;
  this._swfPath = opts && opts.swfPath || defaultSwfPath;

  if (!defaultSwfPath) {
    throw new Error('Missing SWF path');
  }

  // Setup JavaScript callbacks to be called from Flash land when
  // asynchronous operations terminate.
  this._flashStageId = nextFlashStageId();
  this._callbacksObj = window[callbackObjectName][this._flashStageId] = {};
  this._stageCallbacksObjVarName = callbackObjectName + '[' + this._flashStageId + ']';
  this._callbackListeners = {};
  for (var i = 0; i < callbackNames.length; i++) {
    this._callbacksObj[callbackNames[i]] = this._callListeners(callbackNames[i]);
  }

  this._loader = new FlashImageLoader(this);

  // Queue for loadImage calls.
  // The queue starts paused so that loadImage calls occurring before Flash
  // is ready do not start right away (as they would fail).
  // TODO: This is awkward. The stage must signal that it's ready to load
  // images, but queuing should otherwise be implemented by the loader.
  this._loadImageQueue = new WorkQueue();
  this._loadImageQueue.pause();

  // Whether flash is ready to be called from JavaScript.
  this._flashReady = false;

  // Add an ID to each renderer/layer, so that it can be identified within
  // the ActionScript program.
  this._nextLayerId = 0;

  // Create the DOM elements.
  var elements = createDomElements(this._swfPath, this._flashStageId, this._stageCallbacksObjVarName);
  this._domElement = elements.root;
  this._blockingElement = elements.blocking;
  this._flashElement = elements.flash;

  // Wake up the render loop when we are ready (only after element is added to the DOM)
  this._checkReadyTimer = setInterval(this._checkReady.bind(this), 50);
}

inherits(FlashStage, Stage);


/**
 * Destructor.
 */
FlashStage.prototype.destroy = function() {
  window[callbackObjectName][this._flashStageId] = null;
  if (this._checkReadyTimer != null) {
    clearInterval(this._checkReadyTimer);
  }
  // Delegate clearing own properties to the Stage destructor.
  this.constructor.super_.prototype.destroy.call(this);
};


FlashStage.supported = function() {
  return flashSupported();
};


/**
 * Returns the underlying DOM element.
 * @return {Element}
 */
FlashStage.prototype.domElement = function() {
  return this._domElement;
};


/**
 * Returns the underlying Flash element.
 * @return {Element}
 */
FlashStage.prototype.flashElement = function() {
  return this._flashElement;
};


FlashStage.prototype.setSizeForType = function() {};


FlashStage.prototype.loadImage = function(url, rect, done) {
  // TODO: Move the queuing into the loader, which avoids this nonsense.
  var loadFn = this._loader.loadImage.bind(this._loader, url, rect);
  return this._loadImageQueue.push(loadFn, done);
};


FlashStage.prototype.validateLayer = function(layer) {
  return; // always valid
};


FlashStage.prototype.addFlashCallbackListener = function(callbackName, f) {
  this._callbackListeners[callbackName] = this._callbackListeners[callbackName] || [];
  this._callbackListeners[callbackName].push(f);
};


FlashStage.prototype.removeFlashCallbackListener = function(callbackName, f) {
  var listeners = this._callbackListeners[callbackName] || [];
  var index = listeners.indexOf(f);
  if (index >= 0) {
    listeners.splice(index, 1);
  }
};


FlashStage.prototype._callListeners = function(callbackName) {

  var self = this;

  return function callListeners() {
    var listeners = self._callbackListeners[callbackName] || [];
    for (var i = 0; i < listeners.length; i++) {
      // JavaScript executed on calls from Flash does not throw exceptions.
      // Executing the callback in a new stack frame fixes this.
      var listener = listeners[i];
      defer(listener, arguments);
    }
  };
};


FlashStage.prototype._checkReady = function() {
  if (!this._flashElement ||
      !this._flashElement.isReady ||
      !this._flashElement.isReady()) {
    // Not ready yet.
    return false;
  }

  // Mark as ready.
  this._flashReady = true;

  // Disable interval timer.
  clearTimeout(this._checkReadyTimer);
  this._checkReadyTimer = null;

  // Resume image loading queue.
  this._loadImageQueue.resume();

  // Force next render.
  this.emit('renderInvalid');

  return true;
};


function createDomElements(swfPath, id, stageCallbacksObjVarName) {
  var rootElement = document.createElement('div');
  setAbsolute(rootElement);
  setFullSize(rootElement);

  // The Flash object must have `id` and `name` attributes, otherwise
  // ExternalInterface calls will not work.
  var elementId = "marzipano-flash-stage-" + id;

  var objectStr = '<object id="' + elementId + '" name="' + elementId + '" type="application/x-shockwave-flash" data="' + swfPath + '">';

  var paramsStr = '';
  paramsStr += '<param name="movie" value="' + swfPath + '" />';
  paramsStr += '<param name="allowscriptaccess" value="always" />';
  paramsStr += '<param name="flashvars" value="callbacksObjName=' + stageCallbacksObjVarName + '" />';
  paramsStr += '<param name="wmode" value="transparent" />';

  objectStr += paramsStr;
  objectStr += '</object>';

  // Embed Flash into the DOM.
  // Adding children into an <object> element doesn't work, so we create a
  // temporary element and set its innerHTML.
  var tmpElement = document.createElement('div');
  tmpElement.innerHTML = objectStr;
  var flashElement = tmpElement.firstChild;
  setAbsolute(flashElement);
  setFullSize(flashElement);
  rootElement.appendChild(flashElement);

  // Create blocking element to prevent events from being caught by Flash.
  var blockingElement = document.createElement('div');
  setAbsolute(blockingElement);
  setFullSize(blockingElement);
  setBlocking(blockingElement);
  rootElement.appendChild(blockingElement);

  return { root: rootElement, flash: flashElement, blocking: blockingElement };
}


FlashStage.prototype.createRenderer = function(Renderer) {
  return new Renderer(this._flashElement, ++this._nextLayerId, flashQuirks);
};


FlashStage.prototype.destroyRenderer = function(renderer) {
  renderer.destroy();
};


FlashStage.prototype.startFrame = function() {};


FlashStage.prototype.endFrame = function() {};


FlashStage.prototype.takeSnapshot = function (options) {
  // Validate argument.
  if (typeof options !== 'object' || options == null) {
    options = {};
  }

  var quality = options.quality;

  // Set default quality if it is not passed in.
  if (typeof quality == 'undefined') {
    quality = 75;
  }

  // Throw if quality is of invlid type or out of bounds.
  if (typeof quality !== 'number' || quality < 0 || quality > 100) {
    throw new Error('FlashStage: Snapshot quality needs to be a number between 0 and 100');
  }

  // Return the snapshot by executing a flash-exported method.
  return this._flashElement.takeSnapshot(quality);
};


FlashStage.type = FlashStage.prototype.type = 'flash';


function FlashTexture(stage, tile, asset) {

  // Get image id.
  var imageId = asset.element();

  // Get tile dimensions.
  var tileWidth = tile.width();
  var tileHeight = tile.height();

  // Get padding sizes.
  var padSize = flashQuirks.padSize;
  var padTop = tile.padTop() ? padSize : 0;
  var padBottom = tile.padBottom() ? padSize : 0;
  var padLeft = tile.padLeft() ? padSize : 0;
  var padRight = tile.padRight() ? padSize : 0;

  var textureId = stage._flashElement.createTexture(imageId, tileWidth, tileHeight, padTop, padBottom, padLeft, padRight);

  this._stage = stage;
  this._textureId = textureId;
}


FlashTexture.prototype.refresh = function(tile, asset) {
  // TODO: This is required for the Flash stage to support dynamic textures.
  // However, there are currently no dynamic textures that work with the
  // Flash stage.
};


FlashTexture.prototype.destroy = function() {
  this._stage._flashElement.destroyTexture(this._textureId);
  clearOwnProperties(this);
};


FlashStage.TextureClass = FlashStage.prototype.TextureClass = FlashTexture;


module.exports = FlashStage;


/***/ }),

/***/ "./node_modules/marzipano/src/stages/RendererRegistry.js":
/*!***************************************************************!*\
  !*** ./node_modules/marzipano/src/stages/RendererRegistry.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @class RendererRegistry
 * @classdesc
 *
 * A RendererRegistry maps pairs of {@link Geometry} and {@link View} type into
 * the appropriate {@link Renderer} class. It is used by a {@link Stage} to
 * determine the appropriate renderer for a {@link Layer}.
 *
 * See also {@link Stage#registerRenderer}.
 */
function RendererRegistry() {
  this._renderers = {};
}

/**
 * Registers a renderer for the given geometry and view type.
 * @param {string} geometryType The geometry type, as given by
 *     {@link Geometry#type}.
 * @param {string} viewType The view type, as given by {@link View#type}.
 * @param {*} Renderer The renderer class.
 */
RendererRegistry.prototype.set = function(geometryType, viewType, Renderer) {
  if (!this._renderers[geometryType]) {
    this._renderers[geometryType] = {};
  }
  this._renderers[geometryType][viewType] = Renderer;
};

/**
 * Retrieves the renderer for the given geometry and view type.
 * @param {string} geometryType The geometry type, as given by
 *     {@link Geometry#type}.
 * @param {string} viewType The view type, as given by {@link View#type}.
 * @param {*} Renderer The renderer class, or null if no such renderer has been
 * registered.
 */
RendererRegistry.prototype.get = function(geometryType, viewType) {
  var Renderer = this._renderers[geometryType] &&
      this._renderers[geometryType][viewType];
  return Renderer || null;
};

module.exports = RendererRegistry;


/***/ }),

/***/ "./node_modules/marzipano/src/stages/Stage.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/stages/Stage.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var WorkQueue = __webpack_require__(/*! ../collections/WorkQueue */ "./node_modules/marzipano/src/collections/WorkQueue.js");
var calcRect = __webpack_require__(/*! ../util/calcRect */ "./node_modules/marzipano/src/util/calcRect.js");
var async = __webpack_require__(/*! ../util/async */ "./node_modules/marzipano/src/util/async.js");
var cancelize = __webpack_require__(/*! ../util/cancelize */ "./node_modules/marzipano/src/util/cancelize.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var RendererRegistry = __webpack_require__(/*! ./RendererRegistry */ "./node_modules/marzipano/src/stages/RendererRegistry.js");

function forwardTileCmp(t1, t2) {
  return t1.cmp(t2);
}

function reverseTileCmp(t1, t2) {
  return -t1.cmp(t2);
}

/**
 * Signals that the stage has been rendered.
 *
 * @param {boolean} stable Whether all tiles were successfully rendered without
 *     missing textures or resorting to fallbacks.
 * @event Stage#renderComplete
 */

/**
 * Signals that the contents of the stage have been invalidated and must be
 * rendered again.
 *
 * This is used by the {@link RenderLoop} implementation.
 *
 * @event Stage#renderInvalid
 */

/**
 * @interface Stage
 * @classdesc
 *
 * A Stage is a container with the ability to render a stack of
 * {@link Layer layers}.
 *
 * This is a superclass containing logic that is common to all implementations;
 * it should never be instantiated directly. Instead, use one of the
 * subclasses: {@link WebGlStage}, {@link CssStage} or {@link FlashStage}.
 *
 * @param {Object} opts
 * @param {boolean} [opts.progressive=false]
 *
 * Options listed here may be passed into the `opts` constructor argument of
 * subclasses.
 *
 * The `progressive` option controls whether resolution levels are loaded in
 * order, from lowest to highest. This results in a more pleasing effect when
 * zooming past several levels in a large panoramas, but consumes additional
 * bandwidth.
 */
function Stage(opts) {
  this._progressive = !!(opts && opts.progressive);

  // The list of layers in display order (background to foreground).
  this._layers = [];

  // The list of renderers; the i-th renderer is for the i-th layer.
  this._renderers = [];

  // The lists of tiles to load and render, populated during render().
  this._tilesToLoad = [];
  this._tilesToRender = [];

  // Temporary tile lists.
  this._tmpVisible = [];
  this._tmpChildren = [];

  // Cached stage dimensions.
  // Start with zero, which inhibits rendering until setSize() is called.
  this._width = 0;
  this._height = 0;

  // Temporary variable for rect.
  this._tmpRect = {};

  // Temporary variable for size.
  this._tmpSize = {};

  // Work queue for createTexture.
  this._createTextureWorkQueue = new WorkQueue();

  // Function to emit event when render parameters have changed.
  this._emitRenderInvalid = this._emitRenderInvalid.bind(this);

  // The renderer registry maps each geometry/view pair into the respective
  // Renderer class.
  this._rendererRegistry = new RendererRegistry();
}

eventEmitter(Stage);


/**
 * Destructor.
 */
Stage.prototype.destroy = function() {
  this.removeAllLayers();
  clearOwnProperties(this);
};


/**
 * Registers a {@link Renderer} for the given {@link Geometry} and {@link View}
 * type.
 *
 * The {@link registerDefaultRenderers} utility function may be used to
 * register all known renderers for a stage type into that stage. Most users
 * will not need to register renderers, as {@link Viewer} does it for them.
 *
 * @param {string} geometryType The geometry type, as given by
 *     {@link Geometry#type}.
 * @param {string} viewType The view type, as given by {@link View#type}.
 * @param {*} Renderer The renderer class.
 */
Stage.prototype.registerRenderer = function(geometryType, viewType, Renderer) {
  return this._rendererRegistry.set(geometryType, viewType, Renderer);
};


/**
 * Returns the underlying DOM element.
 *
 * Must be overridden by subclasses.
 *
 * @return {Element}
 */
Stage.prototype.domElement = function() {
  throw new Error('Stage implementation must override domElement');
};


/**
 * Get the stage width.
 * @return {number}
 */
Stage.prototype.width = function() {
  return this._width;
};


/**
 * Get the stage height.
 * @return {number}
 */
Stage.prototype.height = function() {
  return this._height;
};


/**
 * Get the stage dimensions. If an argument is supplied, it is filled in with
 * the result and returned. Otherwise, a fresh object is filled in and returned.
 *
 * @param {Size=} size
 */
Stage.prototype.size = function(size) {
  size = size || {};
  size.width = this._width;
  size.height = this._height;
  return size;
};


/**
 * Set the stage dimensions.
 *
 * This contains the size update logic common to all stage types. Subclasses
 * must define the {@link Stage#setSizeForType} method to perform their own
 * logic.
 *
 * @param {Size} size
 */
Stage.prototype.setSize = function(size) {
  this._width = size.width;
  this._height = size.height;

  this.setSizeForType(); // must be defined by subclasses.

  this.emit('resize');
  this._emitRenderInvalid();
};


/**
 * Call {@link Stage#setSize} instead.
 *
 * This contains the size update logic specific to a stage type. It is called by
 * {@link Stage#setSize} after the base class has been updated to reflect the
 * new size, but before any events are emitted.
 *
 * @param {Size} size
 */
Stage.prototype.setSizeForType = function(size) {
  throw new Error('Stage implementation must override setSizeForType');
};


/**
 * Loads an {@link Asset} from an image.
 * @param {string} url The image URL.
 * @param {?Rect} rect A {@link Rect} describing a portion of the image, or null
 *     to use the full image.
 * @param {function(?Error, Asset)} done The callback.
 * @return {function()} A function to cancel loading.
 */
Stage.prototype.loadImage = function() {
  throw new Error('Stage implementation must override loadImage');
};


Stage.prototype._emitRenderInvalid = function() {
  this.emit('renderInvalid');
};


/**
 * Verifies that the layer is valid for this stage, throwing an exception
 * otherwise.
 *
 * @param {Layer} layer
 * @throws {Error} If the layer is not valid for this stage.
 */
Stage.prototype.validateLayer = function(layer) {
  throw new Error('Stage implementation must override validateLayer');
};


/**
 * Returns a list of all {@link Layer layers} belonging to the stage. The
 * returned list is in display order, background to foreground.
 * @return {Layer[]}
 */
Stage.prototype.listLayers = function() {
  // Return a copy to prevent unintended mutation by the caller.
  return [].concat(this._layers);
};


/**
 * Return whether a {@link Layer layer} belongs to the stage.
 * @param {Layer} layer
 * @return {boolean}
 */
Stage.prototype.hasLayer = function(layer) {
  return this._layers.indexOf(layer) >= 0;
};


/**
 * Adds a {@link Layer layer} into the stage.
 * @param {Layer} layer The layer to add.
 * @param {number|undefined} i The optional position, where 0 ≤ i ≤ n and n is
 *     the current number of layers. The default is n, which inserts at the
 *     top of the display stack.
 * @throws An error if the layer already belongs to the stage or if the position
 *     is invalid.
 */
Stage.prototype.addLayer = function(layer, i) {
  if (this._layers.indexOf(layer) >= 0) {
    throw new Error('Layer already in stage');
  }

  if (i == null) {
    i = this._layers.length;
  }
  if (i < 0 || i > this._layers.length) {
    throw new Error('Invalid layer position');
  }

  this.validateLayer(layer); // must be defined by subclasses.

  var geometryType = layer.geometry().type;
  var viewType = layer.view().type;
  var rendererClass = this._rendererRegistry.get(geometryType, viewType);
  if (!rendererClass) {
    throw new Error('No ' + this.type + ' renderer avaiable for ' +
        geometryType + ' geometry and ' + viewType + ' view');
  }
  var renderer = this.createRenderer(rendererClass);

  this._layers.splice(i, 0, layer);
  this._renderers.splice(i, 0, renderer);

  // Listeners for render invalid.
  layer.addEventListener('viewChange', this._emitRenderInvalid);
  layer.addEventListener('effectsChange', this._emitRenderInvalid);
  layer.addEventListener('fixedLevelChange', this._emitRenderInvalid);
  layer.addEventListener('textureStoreChange', this._emitRenderInvalid);

  this._emitRenderInvalid();
};


/**
 * Moves a {@link Layer layer} into a different position in the display stack.
 * @param {Layer} layer The layer to move.
 * @param {number} i The position, where 0 ≤ i ≤ n-1 and n is the current number
 *     of layers.
 * @throws An error if the layer does not belong to the stage or if the position
 *     is invalid.
 */
Stage.prototype.moveLayer = function(layer, i) {
  var index = this._layers.indexOf(layer);
  if (index < 0) {
    throw new Error('No such layer in stage');
  }

  if (i < 0 || i >= this._layers.length) {
    throw new Error('Invalid layer position');
  }

  layer = this._layers.splice(index, 1)[0];
  var renderer = this._renderers.splice(index, 1)[0];

  this._layers.splice(i, 0, layer);
  this._renderers.splice(i, 0, renderer);

  this._emitRenderInvalid();
};


/**
 * Removes a {@link Layer} from the stage.
 * @param {Layer} layer The layer to remove.
 * @throws An error if the layer does not belong to the stage.
 */
Stage.prototype.removeLayer = function(layer) {
  var index = this._layers.indexOf(layer);
  if (index < 0) {
    throw new Error('No such layer in stage');
  }

  var removedLayer = this._layers.splice(index, 1)[0];
  var renderer = this._renderers.splice(index, 1)[0];

  this.destroyRenderer(renderer);

  removedLayer.removeEventListener('viewChange', this._emitRenderInvalid);
  removedLayer.removeEventListener('effectsChange', this._emitRenderInvalid);
  removedLayer.removeEventListener('fixedLevelChange', this._emitRenderInvalid);
  removedLayer.removeEventListener('textureStoreChange', this._emitRenderInvalid);

  this._emitRenderInvalid();
};


/**
 * Removes all {@link Layer layers} from the stage.
 */
Stage.prototype.removeAllLayers = function() {
  while (this._layers.length > 0) {
    this.removeLayer(this._layers[0]);
  }
};


/**
 * Called before a frame is rendered.
 *
 * Must be overridden by subclasses.
 */
Stage.prototype.startFrame = function() {
  throw new Error('Stage implementation must override startFrame');
};


/**
 * Called after a frame is rendered.
 *
 * Must be overridden by subclasses.
 */
Stage.prototype.endFrame = function() {
  throw new Error('Stage implementation must override endFrame');
};


/**
 * Render the current frame. Usually called from a {@link RenderLoop}.
 *
 * This contains the rendering logic common to all stage types. Subclasses
 * define the startFrame() and endFrame() methods to perform their own logic.
 */
Stage.prototype.render = function() {
  var i, j;

  var tilesToLoad = this._tilesToLoad;
  var tilesToRender = this._tilesToRender;

  var stableStage = true;
  var stableLayer;

  // Get the stage dimensions.
  var width = this._width;
  var height = this._height;

  var rect = this._tmpRect;
  var size = this._tmpSize;

  if (width <= 0 || height <= 0) {
    return;
  }

  this.startFrame(); // defined by subclasses

  // Signal start of frame to the texture stores.
  for (i = 0; i < this._layers.length; i++) {
    this._layers[i].textureStore().startFrame();
  }

  // Render layers.
  for (i = 0; i < this._layers.length; i++) {
    var layer = this._layers[i];
    var effects = layer.effects();
    var view = layer.view();
    var textureStore = layer.textureStore();
    var renderer = this._renderers[i];
    var depth = this._layers.length - i;
    var tile, texture;

    // Convert the rect effect into a normalized rect.
    // TODO: avoid doing this on every frame.
    calcRect(width, height, effects && effects.rect, rect);

    if (rect.width <= 0 || rect.height <= 0) {
      // Skip rendering on a null viewport.
      continue;
    }

    // Update the view size.
    size.width = rect.width * this._width;
    size.height = rect.height * this._height;
    view.setSize(size);

    // Signal start of layer to the renderer.
    renderer.startLayer(layer, rect);

    // We render with both alpha blending and depth testing enabled. Thus, when
    // rendering a subsequent pixel at the same location than an existing one,
    // the subsequent pixel gets discarded unless it has smaller depth, and is
    // otherwise composited with the existing pixel.
    //
    // When using fallback tiles to fill a gap in the preferred resolution
    // level, we prefer higher resolution fallbacks to lower resolution ones.
    // However, where fallbacks overlap, we want higher resolution ones to
    // prevail, and we don't want multiple fallbacks to be composited with each
    // other, as that would produce a bad result when semitransparent textures
    // are involved.
    //
    // In order to achieve this within the constraints of alpha blending and
    // depth testing, the depth of a tile must be inversely proportional to its
    // resolution, and higher-resolution tiles must be rendered before lower-
    // resolution ones.

    // Collect the lists of tiles to load and render.
    stableLayer = this._collectTiles(layer, textureStore);

    // Mark all the tiles whose textures must be loaded.
    // This will either trigger loading (for textures not yet loaded) or
    // prevent unloading (for textures already loaded).
    for (j = 0; j < tilesToLoad.length; j++) {
      tile = tilesToLoad[j];
      textureStore.markTile(tile);
    }

    // Render tiles.
    for (j = 0; j < tilesToRender.length; j++) {
      tile = tilesToRender[j];
      texture = textureStore.texture(tile);
      renderer.renderTile(tile, texture, layer, depth);
    }

    layer.emit('renderComplete', stableLayer);
    if (!stableLayer) {
      stableStage = false;
    }

    // Signal end of layer to the renderer.
    renderer.endLayer(layer, rect);
  }

  // Signal end of frame to the texture stores.
  for (i = 0; i < this._layers.length; i++) {
    this._layers[i].textureStore().endFrame();
  }

  this.endFrame(); // defined by subclasses

  this.emit('renderComplete', stableStage);
};

Stage.prototype._collectTiles = function(layer, textureStore) {
  var tilesToLoad = this._tilesToLoad;
  var tilesToRender = this._tilesToRender;
  var tmpVisible = this._tmpVisible;

  tilesToLoad.length = 0;
  tilesToRender.length = 0;
  tmpVisible.length = 0;

  layer.visibleTiles(tmpVisible);

  var isStable = true;

  for (var i = 0; i < tmpVisible.length; i++) {
    var tile = tmpVisible[i];
    var needsFallback;
    this._collectTileToLoad(tile);
    if (textureStore.texture(tile)) {
      // The preferred texture is available.
      // No fallback is required.
      needsFallback = false;
      this._collectTileToRender(tile);
    } else {
      // The preferred texture is unavailable.
      // Collect children for rendering as a fallback.
      needsFallback = this._collectChildren(tile, textureStore);
      isStable = false;
    }
    // Collect all parents for loading, and the closest parent for rendering if
    // a fallback is required.
    this._collectParents(tile, textureStore, needsFallback);
  }

  // Sort tiles to load in ascending resolution order.
  tilesToLoad.sort(forwardTileCmp);

  // Sort tiles to render in descending resolution order.
  tilesToRender.sort(reverseTileCmp);

  return isStable;
};

Stage.prototype._collectChildren = function(tile, textureStore) {
  var tmpChildren = this._tmpChildren;

  var needsFallback = true;

  // Fall back as many levels as necessary on single-child geometries, but do
  // not go beyond immediate children on multiple-child geometries, to avoid
  // exploring an exponential number of tiles.
  do {
    tmpChildren.length = 0;
    if (!tile.children(tmpChildren)) {
      break;
    }
    needsFallback = false;
    for (var i = 0; i < tmpChildren.length; i++) {
      tile = tmpChildren[i];
      if (textureStore.texture(tile)) {
        this._collectTileToLoad(tile);
        this._collectTileToRender(tile);
      } else {
        needsFallback = true;
      }
    }
  } while (needsFallback && tmpChildren.length === 1)

  return needsFallback;
};

Stage.prototype._collectParents = function(tile, textureStore, needsFallback) {
  // Recursively visit parent tiles until:
  //   - all parents have been marked for loading, if progressive rendering is
  //     enabled; and
  //   - at least one parent has been marked for both loading and rendering, if
  //     a fallback is required.
  var needsLoading = this._progressive;
  while ((needsLoading || needsFallback) && (tile = tile.parent()) != null) {
    if (needsFallback) {
      if (textureStore.texture(tile)) {
        this._collectTileToRender(tile);
        needsFallback = false;
      } else if (!this._progressive) {
        continue;
      }
    }
    if (!this._collectTileToLoad(tile)) {
      needsLoading = false;
    }
  }
  return needsFallback;
};

Stage.prototype._collectTileToLoad = function(tile) {
  return this._collectTileIntoList(tile, this._tilesToLoad);
};

Stage.prototype._collectTileToRender = function(tile) {
  return this._collectTileIntoList(tile, this._tilesToRender);
};

Stage.prototype._collectTileIntoList = function(tile, tileList) {
  // TODO: Investigate whether it's worth it to make this better than O(n²).
  var found = false;
  for (var i = 0; i < tileList.length; i++) {
    if (tile.equals(tileList[i])) {
      found = true;
      break;
    }
  }
  if (!found) {
    tileList.push(tile);
  }
  return !found;
};

/**
 * Create a texture for the given tile and asset. Called by {@link TextureStore}.
 * @param {Tile} tile
 * @param {Asset} asset
 * @param {Function} done
 */
Stage.prototype.createTexture = function(tile, asset, done) {

  var self = this;

  function makeTexture() {
    return new self.TextureClass(self, tile, asset);
  }

  var fn = cancelize(async(makeTexture));

  return this._createTextureWorkQueue.push(fn, function(err, texture) {
    done(err, tile, asset, texture);
  });

};

/**
 * The stage type, used to determine the appropriate renderer for a given
 * geometry and view.
 *
 * Known values are `"webgl"`, `"css"` and `"flash"`.
 *
 * See also {@link Stage#registerRenderer}.
 *
 * @property {string}
 * @name Stage#type
 */

module.exports = Stage;


/***/ }),

/***/ "./node_modules/marzipano/src/stages/WebGl.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/stages/WebGl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Stage = __webpack_require__(/*! ./Stage */ "./node_modules/marzipano/src/stages/Stage.js");
var HtmlImageLoader = __webpack_require__(/*! ../loaders/HtmlImage */ "./node_modules/marzipano/src/loaders/HtmlImage.js");
var webGlSupported = __webpack_require__(/*! ../support/WebGl */ "./node_modules/marzipano/src/support/WebGl.js");
var browser = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
var inherits = __webpack_require__(/*! ../util/inherits */ "./node_modules/marzipano/src/util/inherits.js");
var pixelRatio = __webpack_require__(/*! ../util/pixelRatio */ "./node_modules/marzipano/src/util/pixelRatio.js");
var ispot = __webpack_require__(/*! ../util/ispot */ "./node_modules/marzipano/src/util/ispot.js");
var setAbsolute = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setAbsolute;
var setFullSize = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").setFullSize;
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

var debug = typeof MARZIPANODEBUG !== 'undefined' && MARZIPANODEBUG.webGl;


// Browser-specific workarounds.
var browserQuirks = {
  // Whether to use texImage2D instead of texSubImage2D when repainting an
  // existing texture from a video element. On most browsers texSubImage2D is
  // faster, but on Chrome the performance degrades significantly. See:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=612542
  videoUseTexImage2D: browser.chrome
};


function initWebGlContext(canvas, opts) {
  var options = {
    alpha: true,
    premultipliedAlpha: true,
    antialias: !!(opts && opts.antialias),
    preserveDrawingBuffer: !!(opts && opts.preserveDrawingBuffer)
  };

  if (debug && typeof WebGLDebugUtils !== 'undefined') {
    console.log('Using WebGL lost context simulator');
    canvas = WebGLDebugUtils.makeLostContextSimulatingCanvas(canvas);
  }

  // Keep support/WebGl.js in sync with this.
  var gl = (canvas.getContext) && (canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options));

  if (!gl) {
    throw new Error('Could not get WebGL context');
  }

  if (debug && typeof WebGLDebugUtils !== "undefined") {
    gl = WebGLDebugUtils.makeDebugContext(gl);
    console.log('Using WebGL debug context');
  }

  return gl;
}

/**
 * @class WebGlStage
 * @extends Stage
 * @classdesc
 *
 * A {@link Stage} implementation using WebGl.
 *
 * @param {Object} opts
 * @param {boolean} [opts.antialias=false]
 * @param {boolean} [opts.preserveDrawingBuffer=false]
 * @param {boolean} [opts.generateMipmaps=false]
 *
 * The `antialias` and `preserveDrawingBuffer` options control the WebGL
 * context attributes of the same name. The `alpha` and `premultipliedAlpha`
 * WebGL context attributes are set to their default true value and cannot
 * be overriden; this allows semitransparent textures to be composited with
 * the page. See:
 * https://www.khronos.org/registry/webgl/specs/1.0/#WEBGLCONTEXTATTRIBUTES
 *
 * The `generateMipmaps` option controls texture mipmap generation. Mipmaps
 * may improve rendering quality, at the cost of increased memory usage.
 * Due to technical limitations, they are only generated for textures whose
 * dimensions are a power of two. See:
 * https://www.khronos.org/webgl/wiki/WebGL_and_OpenGL_Differences#Non-Power_of_Two_Texture_Support
 *
 * Also see the available {@link Stage} options.
 */
function WebGlStage(opts) {
  opts = opts || {};

  var self = this;

  this.constructor.super_.call(this, opts);

  this._generateMipmaps = opts.generateMipmaps != null ?
    opts.generateMipmaps : false;

  this._loader = new HtmlImageLoader(this);

  this._domElement = document.createElement('canvas');

  setAbsolute(this._domElement);
  setFullSize(this._domElement);

  this._gl = initWebGlContext(this._domElement, opts);

  this._handleContextLoss = function() {
    self.emit('webglcontextlost');
    self._gl = null;
  };

  // Handle WebGl context loss.
  this._domElement.addEventListener('webglcontextlost', this._handleContextLoss);

  // WebGl renderers are singletons for a given stage. This list stores the
  // existing renderers so they can be reused across layers with the same
  // geometry and view type.
  this._rendererInstances = [];
}

inherits(WebGlStage, Stage);


/**
 * Destructor.
 */
WebGlStage.prototype.destroy = function() {
  this._domElement.removeEventListener('webglcontextlost', this._handleContextLoss);
  // Delegate clearing own properties to the Stage destructor.
  this.constructor.super_.prototype.destroy.call(this);
};


WebGlStage.supported = function() {
  return webGlSupported();
};


/**
 * Returns the underlying DOM element.
 *
 * @return {Element}
 */
WebGlStage.prototype.domElement = function() {
  return this._domElement;
};


/**
 * Returns the underlying WebGL rendering context.
 *
 * @return {WebGLRenderingContext }
 */
WebGlStage.prototype.webGlContext = function() {
  return this._gl;
};


WebGlStage.prototype.setSizeForType = function() {
  // Update the size of the canvas coordinate space.
  //
  // The size is obtained by taking the stage dimensions, which are set in CSS
  // pixels, and multiplying them by the device pixel ratio. Crucially, this
  // must be the only place where the WebGL rendering pipeline accesses the
  // pixel ratio; subsequent uses should reference the `drawingBufferWidth` and
  // `drawingBufferHeight` properties on the WebGLRenderingContext. Failing to
  // do so will break the rendering if the pixel ratio changes but the stage
  // size does not, e.g. when moving the window across screens.
  var ratio = pixelRatio();
  this._domElement.width = ratio * this._width;
  this._domElement.height = ratio * this._height;
};


WebGlStage.prototype.loadImage = function(url, rect, done) {
  return this._loader.loadImage(url, rect, done);
};


WebGlStage.prototype.maxTextureSize = function() {
  return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE);
};


WebGlStage.prototype.validateLayer = function(layer) {
  var tileSize = layer.geometry().maxTileSize();
  var maxTextureSize = this.maxTextureSize();
  if (tileSize > maxTextureSize) {
    throw new Error('Layer has level with tile size larger than maximum texture size (' + tileSize + ' vs. ' + maxTextureSize + ')');
  }
};


WebGlStage.prototype.createRenderer = function(Renderer) {
  var rendererInstances = this._rendererInstances;
  for (var i = 0; i < rendererInstances.length; i++) {
    if (rendererInstances[i] instanceof Renderer) {
      return rendererInstances[i];
    }
  }
  var renderer = new Renderer(this._gl);
  rendererInstances.push(renderer);
  return renderer;
};


WebGlStage.prototype.destroyRenderer = function(renderer) {
  var rendererInstances = this._rendererInstances;
  if (this._renderers.indexOf(renderer) < 0) {
    renderer.destroy();
    var index = rendererInstances.indexOf(renderer);
    if (index >= 0) {
      rendererInstances.splice(index, 1);
    }
  }
};


WebGlStage.prototype.startFrame = function() {

  var gl = this._gl;

  if (!gl) {
    throw new Error('Bad WebGL context - maybe context was lost?');
  }

  // Set the WebGL viewport.
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  // Clear framebuffer.
  gl.clearColor(0.0, 0.0, 0.0, 0.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Enable depth testing.
  gl.enable(gl.DEPTH_TEST);

  // Enable blending. ONE and ONE_MINUS_SRC_ALPHA are the right choices for
  // premultiplied textures.
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

};


WebGlStage.prototype.endFrame = function() {};


WebGlStage.prototype.takeSnapshot = function (options) {

  // Validate passed argument
  if (typeof options !== 'object' || options == null) {
    options = {};
  }

  var quality = options.quality;

  // Set default quality if it is not passed
  if (typeof quality == 'undefined') {
    quality = 75;
  }

  // Throw if quality is of invlid type or out of bounds
  if (typeof quality !== 'number' || quality < 0 || quality > 100) {
    throw new Error('WebGLStage: Snapshot quality needs to be a number between 0 and 100');
  }

  // Canvas method "toDataURL" needs to be called in the same
  // context as where the actual rendering is done. Hence this.
  this.render();

  // Return the snapshot
  return this._domElement.toDataURL('image/jpeg',quality/100);
}


WebGlStage.type = WebGlStage.prototype.type = 'webgl';


function WebGlTexture(stage, tile, asset) {
  this._stage = stage;
  this._gl = stage._gl;
  this._texture = null;
  this._timestamp = null;
  this._width = this._height = null;
  this.refresh(tile, asset);
}


WebGlTexture.prototype.refresh = function(tile, asset) {

  var gl = this._gl;
  var stage = this._stage;
  var texture;

  // Check whether the texture needs to be updated.
  var timestamp = asset.timestamp();
  if (timestamp === this._timestamp) {
    return;
  }

  // Get asset element.
  var element = asset.element();

  // Get asset dimensions.
  var width = asset.width();
  var height = asset.height();

  if (width !== this._width || height !== this._height) {

    // If the texture dimensions have changed since the last refresh, create
    // a new texture with the correct size.

    // Check if texture dimensions would exceed the maximum texture size.
    var maxSize = stage.maxTextureSize();
    if (width > maxSize) {
      throw new Error('Texture width larger than max size (' + width + ' vs. ' + maxSize + ')');
    }
    if (height > maxSize) {
      throw new Error('Texture height larger than max size (' + height + ' vs. ' + maxSize + ')');
    }

    // Delete the current texture if it exists.
    // This is necessary for Chrome on Android. If it isn't done the textures
    // do not render when the size changes.
    if (this._texture) {
      gl.deleteTexture(texture);
    }

    // The texture must be premultiplied by alpha to ensure correct blending of
    // semitransparent textures. For details, see:
    // http://www.realtimerendering.com/blog/gpus-prefer-premultiplication/
    texture = this._texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, element);

  } else {

    // If the texture dimensions remain the same, repaint the existing texture.
    // Repainting with texSubImage2D is usually faster than with texImage2D,
    // except in the case noted in browserQuirks.

    texture = this._texture;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

    if (element instanceof HTMLVideoElement && browserQuirks.videoUseTexImage2D) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, element);
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, element);
    }

  }

  // Generate mipmap if the corresponding stage option is set and the texture
  // dimensions are powers of two.
  if (stage._generateMipmaps && ispot(width) && ispot(height)) {
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D);
  } else {
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  }

  // Clamp texture to edges.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  // Unbind texture.
  gl.bindTexture(gl.TEXTURE_2D, null);

  // Update texture dimensions and timestamp.
  this._timestamp = timestamp;
  this._width = width;
  this._height = height;

};


WebGlTexture.prototype.destroy = function() {
  if (this._texture) {
    this._gl.deleteTexture(this._texture);
  }
  clearOwnProperties(this);
};


WebGlStage.TextureClass = WebGlStage.prototype.TextureClass = WebGlTexture;


module.exports = WebGlStage;


/***/ }),

/***/ "./node_modules/marzipano/src/support/Css.js":
/*!***************************************************!*\
  !*** ./node_modules/marzipano/src/support/Css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var prefixProperty = __webpack_require__(/*! ../util/dom */ "./node_modules/marzipano/src/util/dom.js").prefixProperty;

// Detect CSS 3D transforms support. Adapted from Modernizr.
function checkCssSupported() {
  // First, check if the 'perspective' CSS property or a vendor-prefixed
  // variant is available.
  var perspectiveProperty = prefixProperty('perspective');
  var el = document.createElement('div');
  var supported = typeof el.style[perspectiveProperty] !== 'undefined';

  // Certain versions of Chrome disable 3D transforms even though the CSS
  // property exists. In those cases, we use the following media query,
  // which only succeeds if the feature is indeed enabled.
  if (supported && perspectiveProperty === 'WebkitPerspective') {
    var id = '__marzipano_test_css3d_support__';
    var st = document.createElement('style');
    st.textContent = '@media(-webkit-transform-3d){#' + id + '{height: 3px;})';
    document.getElementsByTagName('head')[0].appendChild(st);
    el.id = id;
    document.body.appendChild(el);
    // The offsetHeight seems to be different than 3 at some zoom levels on
    // Chrome (and maybe other browsers). Test for > 0 instead.
    supported = el.offsetHeight > 0;
    st.parentNode.removeChild(st);
    el.parentNode.removeChild(el);
  }

  return supported;
}

// Cache result.
var supported;
function cssSupported() {
  if (supported !== undefined) {
    return supported;
  }
  return (supported = checkCssSupported());
}

module.exports = cssSupported;


/***/ }),

/***/ "./node_modules/marzipano/src/support/Flash.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/support/Flash.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Detect supported Flash version. Returns [major, minor, rev] or null.
// Adapted from https://code.google.com/p/swfobject
function detectFlashVersion() {
  var playerVersion = null;

  var plugins = navigator.plugins;
  var mimeTypes = navigator.mimeTypes;

  var d = null;

  if (plugins && plugins['Shockwave Flash'] && mimeTypes &&
      mimeTypes['application/x-shockwave-flash'] &&
      mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
    d = plugins['Shockwave Flash'].description;
    d = d.replace(/^.*\s+(\S+\s+\S+$)/, '$1');
    playerVersion = [0, 0, 0];
    playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, '$1'), 10);
    playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, '$1'), 10);
    playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, '$1'), 10) : 0;
  }
  else if (window.ActiveXObject) {
    try {
      var a = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (a && (d = a.GetVariable('$version'))) {
        d = d.split(' ')[1].split(',');
        playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
      }
    }
    catch (e) {}
  }

  return playerVersion;
}

// Flash support detection.
function checkFlashSupported() {
  var version = detectFlashVersion();
  // Only support 10.1 and above. Flash 10.0 does not work for some reason.
  return version && (version[0] >= 11 || (version[0] === 10 && version[1] >= 1));
}

// Cache result.
var supported;
function flashSupported() {
  if (supported !== undefined) {
    return supported;
  }
  return (supported = checkFlashSupported());
}

module.exports = flashSupported;


/***/ }),

/***/ "./node_modules/marzipano/src/support/WebGl.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/support/WebGl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Detect WebGl support.
// Keep stages/WebGl.js in sync with this.
function checkWebGlSupported() {
  var canvas = document.createElement('canvas');
  var gl = canvas.getContext && (canvas.getContext('webgl') ||
                                 canvas.getContext('experimental-webgl'));
  return !!gl;
}

// Cache result.
var supported;
function webGlSupported() {
  if (supported !== undefined) {
    return supported;
  }
  return (supported = checkWebGlSupported());
}

module.exports = webGlSupported;


/***/ }),

/***/ "./node_modules/marzipano/src/support/cssPointerEvents.js":
/*!****************************************************************!*\
  !*** ./node_modules/marzipano/src/support/cssPointerEvents.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var browser = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");

// Detect CSS pointer-events support.
function checkCssPointerEventsSupported() {

  // Check for existence of CSS property.
  var style = document.createElement('a').style;
  style.cssText = 'pointer-events:auto';
  var hasCssProperty = style.pointerEvents === 'auto';

  // The above result is spurious on emulation mode for IE 8-10.
  var isOldIE = browser.msie && parseFloat(browser.version) < 11;

  return hasCssProperty && !isOldIE;
}

// Cache result.
var supported;
function cssPointerEventsSupported() {
  if (supported !== undefined) {
    return supported;
  }
  return (supported = checkCssPointerEventsSupported());
}

module.exports = cssPointerEventsSupported;


/***/ }),

/***/ "./node_modules/marzipano/src/util/async.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/async.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Transform a synchronous function into an asynchronous one.
function async(fn) {
  return function asynced(done) {
    var err, ret;
    try {
      ret = fn();
    } catch (e) {
      err = e;
    } finally {
      if (err) {
        done(err);
      } else {
        done(null, ret);
      }
    }
  };
}

module.exports = async;


/***/ }),

/***/ "./node_modules/marzipano/src/util/calcRect.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/util/calcRect.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Converts a {@link RectSpec} into an equivalent {@link Rect}.
 *
 * A {@link RectSpec} is a convenient user API format, providing default values
 * and the flexibility of specifying absolute, relative or mixed dimensions.
 *
 * A {@link Rect} is a more convenient format for the rendering pipeline. It is
 * always expressed in normalized coordinates, and all its properties are
 * guaranteed to be present.
 *
 * @param {number} totalWidth The total width of the rendering area in pixels.
 * @param {number} totalHeight The total height of the rendering area in pixels.
 * @param {RectSpec} spec The input spec, defaulting to the full rendering area
 *     if null or undefined.
 * @param {Rect} result The output spec. If the argument is present, it is
 *     filled in and returned; otherwise, a fresh object is returned.
 */
function calcRect(totalWidth, totalHeight, spec, result) {

  result = result || {};

  var width;
  if (spec != null && spec.absoluteWidth != null) {
    width = spec.absoluteWidth / totalWidth;
  } else if (spec != null && spec.relativeWidth != null) {
    width = spec.relativeWidth;
  } else {
    width = 1;
  }

  var height;
  if (spec && spec.absoluteHeight != null) {
    height = spec.absoluteHeight / totalHeight;
  } else if (spec != null && spec.relativeHeight != null) {
    height = spec.relativeHeight;
  } else {
    height = 1;
  }

  var x;
  if (spec != null && spec.absoluteX != null) {
    x = spec.absoluteX / totalWidth;
  } else if (spec != null && spec.relativeX != null) {
    x = spec.relativeX;
  } else {
    x = 0;
  }

  var y;
  if (spec != null && spec.absoluteY != null) {
    y = spec.absoluteY / totalHeight;
  } else if (spec != null && spec.relativeY != null) {
    y = spec.relativeY;
  } else {
    y = 0;
  }

  result.x = x;
  result.y = y;
  result.width = width;
  result.height = height;

  return result;
}

module.exports = calcRect;


/***/ }),

/***/ "./node_modules/marzipano/src/util/cancelize.js":
/*!******************************************************!*\
  !*** ./node_modules/marzipano/src/util/cancelize.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var once = __webpack_require__(/*! ./once */ "./node_modules/marzipano/src/util/once.js");

// A cancelable function is an asynchronous function (i.e., one whose last
// argument is a callback receiving an error plus zero or more return values)
// that (synchronously) returns a cancel() function. Calling cancel() should
// abort the asynchronous operation and call the callback with the arguments
// that were passed into cancel(). Calling cancel() twice, as with callbacks,
// is not guaranteed to be safe.

// Wrap a non-cancellable asynchronous function into a cancelable one.
//
// Calling cancel() on the returned function will not interrupt the execution
// of the original function; it will merely ignore its return value.
//
// Usually, instead of wrapping your function, you want to implement cancel()
// yourself in order to have some abort logic. This utility function provides a
// straighforward solution for cases in which no custom abort logic is required.
function cancelize(fn) {
  return function cancelized() {
    if (!arguments.length) {
      throw new Error('cancelized: expected at least one argument');
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var done = args[args.length - 1] = once(args[args.length - 1]);

    function cancel() {
      done.apply(null, arguments);
    }

    fn.apply(null, args);

    return cancel;
  };
}

module.exports = cancelize;


/***/ }),

/***/ "./node_modules/marzipano/src/util/chain.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/chain.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var noop = __webpack_require__(/*! ./noop */ "./node_modules/marzipano/src/util/noop.js");

// Return a function that executes its arguments (which should be cancelables)
// in sequence, so that each of them passes its return values to the next.
// Execution is aborted if one of the functions returns an error; in that case
// the last function in the sequence is called with the error.
// See util/cancelize.js for an explanation of what cancelables are.
function chain() {

  // The list of functions to chain together.
  var argList = Array.prototype.slice.call(arguments, 0);

  return function chained() {

    // List of remaining functions to be executed.
    // Make a copy of the original list so we can mutate the former while
    // preserving the latter intact for future invocations of the chain.
    var fnList = argList.slice(0);

    // Currently executing function.
    var fn = null;

    // Cancel method for the currently executing function.
    var cfn = null;

    // Arguments for the first function.
    var args = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [];

    // Callback for the chain.
    var done = arguments.length ? arguments[arguments.length - 1] : noop;

    // Execute the next function in the chain.
    // Receives the error and return values from the previous function.
    function exec() {

      // Extract error from arguments.
      var err = arguments[0];

      // Abort chain on error.
      if (err) {
        fn = cfn = null;
        done.apply(null, arguments);
        return;
      }

      // Terminate if there are no functions left in the chain.
      if (!fnList.length) {
        fn = cfn = null;
        done.apply(null, arguments);
        return;
      }

      // Advance to the next function in the chain.
      fn = fnList.shift();
      var _fn = fn;

      // Extract arguments to pass into the next function.
      var ret = Array.prototype.slice.call(arguments, 1);

      // Call next function with previous return value and call back exec.
      ret.push(exec);
      var _cfn = fn.apply(null, ret); // fn(null, ret..., exec)

      // Detect when fn has completed synchronously and do not clobber the
      // internal state in that case. You're not expected to understand this.
      if (_fn !== fn) {
        return;
      }

      // Remember the cancel method for the currently executing function.
      // Detect chaining on non-cancellable function.
      if (typeof _cfn !== 'function') {
        throw new Error('chain: chaining on non-cancellable function');
      } else {
        cfn = _cfn;
      }

    }

    // Cancel chain execution.
    function cancel() {
      if (cfn) {
        cfn.apply(null, arguments);
      }
    }

    // Start chain execution.
    // We call exec as if linking from a previous function in the chain,
    // except that the error is always null. As a consequence, chaining on an
    // empty list yields the identity function.
    args.unshift(null);
    exec.apply(null, args); // exec(null, args...)

    return cancel;

  };

}

module.exports = chain;


/***/ }),

/***/ "./node_modules/marzipano/src/util/clamp.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/clamp.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = clamp;

/***/ }),

/***/ "./node_modules/marzipano/src/util/clearOwnProperties.js":
/*!***************************************************************!*\
  !*** ./node_modules/marzipano/src/util/clearOwnProperties.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Sets an object's own properties to undefined. This may be called by
// destructors to avoid retaining references and help detect incorrect use of
// destroyed instances.
function clearOwnProperties(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = undefined;
    }
  }
}

module.exports = clearOwnProperties;


/***/ }),

/***/ "./node_modules/marzipano/src/util/cmp.js":
/*!************************************************!*\
  !*** ./node_modules/marzipano/src/util/cmp.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function cmp(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}

module.exports = cmp;

/***/ }),

/***/ "./node_modules/marzipano/src/util/compose.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/util/compose.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
  * Compose multiple functions
  *
  * `compose(f, g)` returns `function(x) { return f(g(x)); }`
  *
  * @memberof util
  * @param {Function[]} functions The functions to compose
  * @return {Function}
  */
function compose() {
  var fnList = arguments;
  return function composed(initialArg) {
    var ret = initialArg;
    for (var i = 0; i < fnList.length; i++) {
      var fn = fnList[i];
      ret = fn.call(null, ret);
    }
    return ret;
  };
}

module.exports = compose;

/***/ }),

/***/ "./node_modules/marzipano/src/util/convertFov.js":
/*!*******************************************************!*\
  !*** ./node_modules/marzipano/src/util/convertFov.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Convert fov
 *
 * For example, to convert from hfov to vfov one would call 
 * `convert(hfov, width, height)`
 *
 * @param {number} fov
 * @param {number} fromDimension
 * @param {number} toDimension
 * @return {number}
 * @memberof util.convertFov
 */
function convert(fov, fromDimension, toDimension) {
  return 2 * Math.atan(toDimension * Math.tan(fov / 2) / fromDimension);
}

/**
 * @param {number} fov
 * @param {number} fromDimension
 * @param {number} toDimension
 * @return {number}
 * @memberof util.convertFov
 */
function htov(fov, width, height) {
  return convert(fov, width, height);
}

/**
 * @param {number} fov
 * @param {number} fromDimension
 * @param {number} toDimension
 * @return {number}
 * @memberof util.convertFov
 */
function htod(fov, width, height) {
  return convert(fov, width, Math.sqrt(width * width + height * height));
}

/**
 * @param {number} fov
 * @param {number} fromDimension
 * @param {number} toDimension
 * @return {number}
 * @memberof util.convertFov
 */
function vtoh(fov, width, height) {
  return convert(fov, height, width);
}

/**
 * @param {number} fov
 * @param {number} fromDimension
 * @param {number} toDimension
 * @return {number}
 * @memberof util.convertFov
 */
function vtod(fov, width, height) {
  return convert(fov, height, Math.sqrt(width * width + height * height));
}

/**
 * @param {number} fov
 * @param {number} fromDimension
 * @param {number} toDimension
 * @return {number}
 * @memberof util.convertFov
 */
function dtoh(fov, width, height) {
  return convert(fov, Math.sqrt(width * width + height * height), width);
}

/**
 * @param {number} fov
 * @param {number} fromDimension
 * @param {number} toDimension
 * @return {number}
 * @memberof util.convertFov
 */
function dtov(fov, width, height) {
  return convert(fov, Math.sqrt(width * width + height * height), height);
}

/**
 * @namespace util.convertFov
 */
module.exports = {
  convert: convert,
  htov: htov,
  htod: htod,
  vtoh: vtoh,
  vtod: vtod,
  dtoh: dtoh,
  dtov: dtov
};


/***/ }),

/***/ "./node_modules/marzipano/src/util/decimal.js":
/*!****************************************************!*\
  !*** ./node_modules/marzipano/src/util/decimal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Convert a number to a string in decimal notation.
function decimal(x) {
  // Double-precision floats have 15 significant decimal digits.
  return x.toPrecision(15);
}

module.exports = decimal;

/***/ }),

/***/ "./node_modules/marzipano/src/util/defaults.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/util/defaults.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function defaults(obj, defaultsObj) {
  for (var key in defaultsObj) {
    if (!(key in obj)) {
      obj[key] = defaultsObj[key];
    }
  }
  return obj;
}

module.exports = defaults;

/***/ }),

/***/ "./node_modules/marzipano/src/util/defer.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/defer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function defer(fn, args) {
  function deferred() {
    if (args && args.length > 0) {
      fn.apply(null, args);
    } else {
      fn();
    }
  }
  setTimeout(deferred, 0);
}

module.exports = defer;

/***/ }),

/***/ "./node_modules/marzipano/src/util/degToRad.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/util/degToRad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @memberof util
 * @param {number} deg
 * @return {number}
 */
function degToRad(deg) {
  return deg * Math.PI / 180;
}

module.exports = degToRad;

/***/ }),

/***/ "./node_modules/marzipano/src/util/delay.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/delay.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Perform a cancelable delay.
// See util/cancelize.js for an explanation of what cancelables are.
function delay(ms, done) {

  // Work around IE8 bug whereby a setTimeout callback may still be called
  // after the corresponding clearTimeout is invoked.
  var timer = null;

  function finish() {
    if (timer != null) {
      timer = null;
      done(null);
    }
  }

  function cancel() {
    if (timer != null) {
      clearTimeout(timer);
      timer = null;
      done.apply(null, arguments);
    }
  }

  timer = setTimeout(finish, ms);

  return cancel;

}

module.exports = delay;


/***/ }),

/***/ "./node_modules/marzipano/src/util/dom.js":
/*!************************************************!*\
  !*** ./node_modules/marzipano/src/util/dom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function prefixProperty(property) {

  var style = document.documentElement.style;
  var prefixList = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];

  for (var i = 0; i < prefixList.length; i++) {
    var prefix = prefixList[i];
    var capitalizedProperty = property[0].toUpperCase() + property.slice(1);
    var prefixedProperty = prefix + capitalizedProperty;

    if (prefixedProperty in style) {
      return prefixedProperty;
    }
  }

  return property;

}


function getWithVendorPrefix(property) {
  var prefixedProperty = prefixProperty(property);
  return function getPropertyWithVendorPrefix(element) {
    return element.style[prefixedProperty];
  };

}


function setWithVendorPrefix(property) {
  var prefixedProperty = prefixProperty(property);
  return function setPropertyWithVendorPrefix(element, val) {
    return (element.style[prefixedProperty] = val);
  };
}


var setTransform = setWithVendorPrefix('transform');
var setTransformOrigin = setWithVendorPrefix('transformOrigin');


function setNullTransform(element) {
  setTransform(element, 'translateZ(0)');
}


function setNullTransformOrigin(element) {
  setTransformOrigin(element, '0 0 0');
}


function setAbsolute(element) {
  element.style.position = 'absolute';
}


function setPixelPosition(element, x, y) {
  element.style.left = x + 'px';
  element.style.top = y + 'px';
}


function setPixelSize(element, width, height) {
  element.style.width = width + 'px';
  element.style.height = height + 'px';
}


function setNullSize(element) {
  element.style.width = element.style.height = 0;
}


function setFullSize(element) {
  element.style.width = element.style.height = '100%';
}


function setOverflowHidden(element) {
  element.style.overflow = 'hidden';
}


function setOverflowVisible(element) {
  element.style.overflow = 'visible';
}


function setNoPointerEvents(element) {
  element.style.pointerEvents = 'none';
}


function setBlocking(element) {
  element.style.backgroundColor = '#000';
  element.style.opacity = '0';
  element.style.filter = 'alpha(opacity=0)';
}


module.exports = {
  prefixProperty: prefixProperty,
  getWithVendorPrefix: getWithVendorPrefix,
  setWithVendorPrefix: setWithVendorPrefix,
  setTransform: setTransform,
  setTransformOrigin: setTransformOrigin,
  setNullTransform: setNullTransform,
  setNullTransformOrigin: setNullTransformOrigin,
  setAbsolute: setAbsolute,
  setPixelPosition: setPixelPosition,
  setPixelSize: setPixelSize,
  setNullSize: setNullSize,
  setFullSize: setFullSize,
  setOverflowHidden: setOverflowHidden,
  setOverflowVisible: setOverflowVisible,
  setNoPointerEvents: setNoPointerEvents,
  setBlocking: setBlocking
};


/***/ }),

/***/ "./node_modules/marzipano/src/util/extend.js":
/*!***************************************************!*\
  !*** ./node_modules/marzipano/src/util/extend.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function extend(obj, sourceObj) {
  for (var key in sourceObj) {
    obj[key] = sourceObj[key];
  }
  return obj;
}

module.exports = extend;

/***/ }),

/***/ "./node_modules/marzipano/src/util/global.js":
/*!***************************************************!*\
  !*** ./node_modules/marzipano/src/util/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// The global object.
var globalObject = (function() {
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  return null;
})();

module.exports = globalObject;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/marzipano/src/util/hash.js":
/*!*************************************************!*\
  !*** ./node_modules/marzipano/src/util/hash.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Jenkins one-at-a-time hash
// http://www.burtleburtle.net/bob/hash/doobs.html
// Input: an array of integers
// Output: an integer

function hash() {
  var h = 0;
  for (var i = 0; i < arguments.length; i++) {
    var k = arguments[i];
    h += k;
    h += k << 10;
    h ^= k >> 6;
  }
  h += h << 3;
  h ^= h >> 11;
  h += h << 15;
  return h >= 0 ? h : -h;
}

module.exports = hash;

/***/ }),

/***/ "./node_modules/marzipano/src/util/inherits.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/util/inherits.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Make ctor a subclass of superCtor.
// Do not depend on ES5 Object.create semantics because of older browsers.
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  var TempCtor = function() {};
  TempCtor.prototype = superCtor.prototype;
  ctor.prototype = new TempCtor();
  ctor.prototype.constructor = ctor;
}

module.exports = inherits;

/***/ }),

/***/ "./node_modules/marzipano/src/util/ispot.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/ispot.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Returns whether n is a power of two.
function ispot(n) {
  return (n & (n - 1)) == 0;
}

module.exports = ispot;

/***/ }),

/***/ "./node_modules/marzipano/src/util/mod.js":
/*!************************************************!*\
  !*** ./node_modules/marzipano/src/util/mod.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Modulo operation
 *
 * @memberof util
 * @param {Number} dividend
 * @param {Number} divisor
 * @returns {Number} Value in range `[0,divisor[`
 */
function mod(a, b) {
  return (+a % (b = +b) + b) % b;
}

module.exports = mod;

/***/ }),

/***/ "./node_modules/marzipano/src/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/marzipano/src/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function noop() {}

module.exports = noop;

/***/ }),

/***/ "./node_modules/marzipano/src/util/now.js":
/*!************************************************!*\
  !*** ./node_modules/marzipano/src/util/now.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getNow() {
  if (typeof performance !== 'undefined' && performance.now) {
    return function performanceNow() {
      return performance.now();
    };
  }
  return function dateNow() {
    return Date.now();
  };
}

module.exports = getNow();


/***/ }),

/***/ "./node_modules/marzipano/src/util/once.js":
/*!*************************************************!*\
  !*** ./node_modules/marzipano/src/util/once.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function once(fn) {
  var called = false;
  var value;
  return function onced() {
    if (!called) {
      called = true;
      value = fn.apply(null, arguments);
    }
    return value;
  };
}

module.exports = once;

/***/ }),

/***/ "./node_modules/marzipano/src/util/pixelRatio.js":
/*!*******************************************************!*\
  !*** ./node_modules/marzipano/src/util/pixelRatio.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var defaultPixelRatio = 1;

function pixelRatio() {
  if (typeof window !== 'undefined') {
    if (window.devicePixelRatio) {
      return window.devicePixelRatio;
    }
    else {
      var screen = window.screen;
      if (screen && screen.deviceXDPI && screen.logicalXDPI) {
        return screen.deviceXDPI / screen.logicalXDPI;
      } else if (screen && screen.systemXDPI && screen.logicalXDPI) {
        return screen.systemXDPI / screen.logicalXDPI;
      }
    }
  }
  return defaultPixelRatio;
}

module.exports = pixelRatio;


/***/ }),

/***/ "./node_modules/marzipano/src/util/positionAbsolutely.js":
/*!***************************************************************!*\
  !*** ./node_modules/marzipano/src/util/positionAbsolutely.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var cssSupported = __webpack_require__(/*! ../support/Css */ "./node_modules/marzipano/src/support/Css.js");
var setTransform = __webpack_require__(/*! ./dom */ "./node_modules/marzipano/src/util/dom.js").setTransform;
var setPixelPosition = __webpack_require__(/*! ./dom */ "./node_modules/marzipano/src/util/dom.js").setPixelPosition;
var decimal = __webpack_require__(/*! ./decimal */ "./node_modules/marzipano/src/util/decimal.js");

// This cannot belong in util/dom.js because support/Css also depends on it
// and it would cause a circular dependency.

function positionAbsolutely(element, x, y, extraTransforms) {
  extraTransforms = extraTransforms || '';
  if (cssSupported()) {
    // Use CSS 3D transforms when the browser supports them.
    // A translateZ(0) transform improves performance on Chrome by creating a
    // new layer for the element, which prevents unnecessary repaints.
    var transform = 'translateX(' + decimal(x) + 'px) translateY(' + decimal(y) + 'px) translateZ(0) ' + extraTransforms;
    setTransform(element, transform);
  } else {
    // Fall back to absolute positioning.
    setPixelPosition(element, x, y);
  }
}

module.exports = positionAbsolutely;


/***/ }),

/***/ "./node_modules/marzipano/src/util/radToDeg.js":
/*!*****************************************************!*\
  !*** ./node_modules/marzipano/src/util/radToDeg.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @memberof util
 * @param {number} rad
 * @return {number}
 */
function radToDeg(rad) {
  return rad * 180 / Math.PI;
}

module.exports = radToDeg;

/***/ }),

/***/ "./node_modules/marzipano/src/util/real.js":
/*!*************************************************!*\
  !*** ./node_modules/marzipano/src/util/real.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function real(x) {
  return typeof x === 'number' && isFinite(x);
}

module.exports = real;

/***/ }),

/***/ "./node_modules/marzipano/src/util/retry.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/retry.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var noop = __webpack_require__(/*! ./noop */ "./node_modules/marzipano/src/util/noop.js");

// Return a cancelable function that executes fn in a loop until it returns
// successfully.
function retry(fn) {

  return function retried() {

    var args = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [];
    var done = arguments.length ? arguments[arguments.length - 1] : noop;

    var cfn = null;
    var canceled = false;

    function exec() {
      var err = arguments[0];
      if (!err || canceled) {
        done.apply(null, arguments);
      } else {
        cfn = fn.apply(null, args);
      }
    }

    args.push(exec);
    exec(true);

    return function cancel() {
      canceled = true;
      cfn.apply(null, arguments);
    };

  };

}

module.exports = retry;


/***/ }),

/***/ "./node_modules/marzipano/src/util/tween.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/util/tween.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var now = __webpack_require__(/*! ./now */ "./node_modules/marzipano/src/util/now.js");

function tween(duration, update, done) {
  var cancelled = false;

  var startTime = now();

  function runUpdate() {
    if(cancelled) { return; }
    var tweenVal = (now() - startTime)/duration;
    if(tweenVal < 1) {
      update(tweenVal);
      requestAnimationFrame(runUpdate);
    }
    else {
      update(1);
      done();
    }
  }

  update(0);
  requestAnimationFrame(runUpdate);

  return function cancel() {
    cancelled = true;
    done.apply(null, arguments);
  }
}

module.exports = tween;

/***/ }),

/***/ "./node_modules/marzipano/src/util/type.js":
/*!*************************************************!*\
  !*** ./node_modules/marzipano/src/util/type.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function type(x) {
  var typ = typeof x;
  if (typ === 'object') {
    if (x === null) {
      return 'null';
    }
    if (Object.prototype.toString.call(x) === '[object Array]') {
      return 'array';
    }
    if (Object.prototype.toString.call(x) === '[object RegExp]') {
      return 'regexp';
    }
  }
  return typ;
}

module.exports = type;


/***/ }),

/***/ "./node_modules/marzipano/src/views/Flat.js":
/*!**************************************************!*\
  !*** ./node_modules/marzipano/src/views/Flat.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var mat4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").mat4;
var vec4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec4;
var pixelRatio = __webpack_require__(/*! ../util/pixelRatio */ "./node_modules/marzipano/src/util/pixelRatio.js");
var real = __webpack_require__(/*! ../util/real */ "./node_modules/marzipano/src/util/real.js");
var clamp = __webpack_require__(/*! ../util/clamp */ "./node_modules/marzipano/src/util/clamp.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

// Default viewport dimensions.
// Start with zero to ensure that those values are handled correctly.
var defaultWidth = 0;
var defaultHeight = 0;

// Default view parameters.
var defaultX = 0.5;
var defaultY = 0.5;
var defaultZoom = 1;

// Constant values used to simplify the frustum culling logic.
// planeAxes[i] indicates the coordinate value that defines a frustum plane.
// planeCmp[i] indicates how point and plane coordinates should be compared
// to determine whether the point is on the outer side of the plane.
var planeAxes = [
  1, // top
  0, // right
  1, // bottom
  0  // left
];
var planeCmp = [
  -1, // top
  -1, // right
   1, // bottom
   1  // left
];

// A zoom of exactly 0 breaks some computations, so we force a minimum positive
// value. We use 6 decimal places for the epsilon value to avoid broken
// rendering due to loss of precision in floating point computations.
var zoomLimitEpsilon = 0.000001;


/**
 * @interface FlatViewParams
 *
 * A camera configuration for a {@link FlatView}.
 *
 * @property {number} x The horizontal coordinate of the image point displayed
 *     at the viewport center, in the [0, 1] range.
 *     When `x === 0.5`, the image is centered horizontally.
 *     When `x === 0`, the left edge of the image is at the viewport center.
 *     When `x === 1`, the right edge of the image is at the viewport center.
 * @property {number} y The vertical coordinate of the image point displayed at
 *     the viewport center, in the [0, 1] range.
 *     When `y === 0.5`, the image is centered vertically.
 *     When `y === 0`, the top edge of the image is at the viewport center.
 *     When `y === 1`, the bottom edge of the image is at the viewport center.
 * @property {number} zoom The horizontal zoom, in the [0, ∞) range.
 *     When `zoom === 1`, the viewport is as wide as the image.
 *     When `zoom < 1`, the image is zoomed in.
 *     When `zoom > 1`, the image is zoomed out.
 * @property {number} mediaAspectRatio The image aspect ratio.
 *     When `mediaAspectRatio === 1`, the image width equals its height.
 *     When `mediaAspectRatio < 1`, the image width is less than its height.
 *     When `mediaAspectRatio > 1`, the image height is less than its width.
 */


/**
 * @interface FlatViewCoords
 *
 * The position of a point in a flat image.
 *
 * @property {number} x The horizontal coordinate, in the [0, 1] range.
 * @property {number} y The vertical coordinate, in the [0, 1] range.
 */


/**
 * @typedef {function} FlatViewLimiter
 *
 * View limiter for a {@link FlatView}.
 *
 * A view limiter is a function that receives a {@link FlatViewParams} object,
 * optionally modifies it in place, and returns it. It can be used to enforce
 * constraints on the view parameters.
 *
 * See {@link FlatView.limit} for commonly used limiters. They may be composed
 * together or with user-defined limiters with {@link util.compose}.
 *
 * @param {FlatViewParams} params
 * @return {FlatViewParams}
 */


/**
 * @class FlatView
 * @implements View
 * @classdesc
 *
 * A {@link View} implementing an orthogonal projection for flat images.
 *
 * @param {FlatViewParams} params The initial view parameters. The
 *     `mediaAspectRatio` parameter must always be set. The other parameters
 *     default to `{x: 0.5, y: 0.5, z: 1 }` if unspecified.
 * @param {FlatViewLimiter=} limiter The view limiter. If unspecified, no view
 *     limiting is applied. See {@link FlatView.limit} for commonly used
 *     limiters.
 */
function FlatView(params, limiter) {
  // Require an aspect ratio to be specified.
  if (!(params && params.mediaAspectRatio != null)) {
    throw new Error('mediaAspectRatio must be defined');
  }

  // The initial values for the view parameters.
  this._x = params && params.x != null ? params.x : defaultX;
  this._y = params && params.y != null ? params.y : defaultY;
  this._zoom = params && params.zoom != null ? params.zoom : defaultZoom;
  this._mediaAspectRatio = params.mediaAspectRatio;
  this._width = params && params.width != null ?
    params.width : defaultWidth;
  this._height = params && params.height != null ?
    params.height : defaultHeight;

  // The initial value for the view limiter.
  this._limiter = limiter || null;

  // The last calculated projection matrix and its inverse.
  this._projMatrix = mat4.create();
  this._invProjMatrix = mat4.create();

  // The last calculated view frustum.
  this._frustum = [
    0, // top
    0, // right
    0, // bottom
    0  // left
  ];

  // Whether the projection matrices and view frustum need to be updated.
  this._projectionChanged = true;

  // Temporary variables used for calculations.
  this._params = {};
  this._vec = vec4.create();

  // Force view limiting on initial parameters.
  this._update();
}

eventEmitter(FlatView);


/**
 * Destructor.
 */
FlatView.prototype.destroy = function() {
  clearOwnProperties(this);
};


/**
 * Get the x parameter.
 * @return {number}
 */
FlatView.prototype.x = function() {
  return this._x;
};


/**
 * Get the y parameter.
 * @return {number}
 */
FlatView.prototype.y = function() {
  return this._y;
};


/**
 * Get the zoom value.
 * @return {number}
 */
FlatView.prototype.zoom = function() {
  return this._zoom;
};


/**
 * Get the media aspect ratio.
 * @return {number}
 */
FlatView.prototype.mediaAspectRatio = function() {
  return this._mediaAspectRatio;
};


/**
 * Get the viewport width.
 * @return {number}
 */
FlatView.prototype.width = function() {
  return this._width;
};


/**
 * Get the viewport height.
 * @return {number}
 */
FlatView.prototype.height = function() {
  return this._height;
};


/**
 * Get the viewport dimensions. If an argument is supplied, it is filled in with
 * the result and returned. Otherwise, a fresh object is filled in and returned.
 * @param {Size=} size
 * @return {Size}
 */
FlatView.prototype.size = function(size) {
  size = size || {};
  size.width = this._width;
  size.height = this._height;
  return size;
};


/**
 * Get the view parameters. If an argument is supplied, it is filled in with the
 * result and returned. Otherwise, a fresh object is filled in and returned.
 * @param {FlatViewParams=} params
 * @return {FlatViewParams}
 */
FlatView.prototype.parameters = function(params) {
  params = params || {};
  params.x = this._x;
  params.y = this._y;
  params.zoom = this._zoom;
  params.mediaAspectRatio = this._mediaAspectRatio;
  return params;
};


/**
 * Get the view limiter, or null if unset.
 * @return {?FlatViewLimiter}
 */
FlatView.prototype.limiter = function() {
  return this._limiter;
};


/**
 * Set the x parameter.
 * @param {number} x
 */
FlatView.prototype.setX = function(x) {
  this._resetParams();
  this._params.x = x;
  this._update(this._params);
};


/**
 * Set the y parameter.
 * @param {number} y
 */
FlatView.prototype.setY = function(y) {
  this._resetParams();
  this._params.y = y;
  this._update(this._params);
};


/**
 * Set the zoom value.
 * @param {number} zoom
 */
FlatView.prototype.setZoom = function(zoom) {
  this._resetParams();
  this._params.zoom = zoom;
  this._update(this._params);
};


/**
 * Add xOffset to the x parameter.
 * @param {number} xOffset
 */
FlatView.prototype.offsetX = function(xOffset) {
  this.setX(this._x + xOffset);
};


/**
 * Add yOffset to the y parameter.
 * @param {number} yOffset
 */
FlatView.prototype.offsetY = function(yOffset)
{
  this.setY(this._y + yOffset);
};


/**
 * Add zoomOffset to the zoom value.
 * @param {number} zoomOffset
 */
FlatView.prototype.offsetZoom = function(zoomOffset) {
  this.setZoom(this._zoom + zoomOffset);
};


/**
 * Set the media aspect ratio.
 * @param {number} mediaAspectRatio
 */
FlatView.prototype.setMediaAspectRatio = function(mediaAspectRatio) {
  this._resetParams();
  this._params.mediaAspectRatio = mediaAspectRatio;
  this._update(this._params);
};


/**
 * Set the viewport dimensions.
 * @param {Size} size
 */
FlatView.prototype.setSize = function(size) {
  this._resetParams();
  this._params.width = size.width;
  this._params.height = size.height;
  this._update(this._params);
};


/**
 * Set the view parameters. Unspecified parameters are left unchanged.
 * @param {FlatViewParameters} params
 */
FlatView.prototype.setParameters = function(params) {
  this._resetParams();
  this._params.x = params.x;
  this._params.y = params.y;
  this._params.zoom = params.zoom;
  this._params.mediaAspectRatio = params.mediaAspectRatio;
  this._update(this._params);
};


/**
 * Set the view limiter.
 * @param {?FlatViewLimiter} limiter The new limiter, or null to unset.
 */
FlatView.prototype.setLimiter = function(limiter) {
  this._limiter = limiter || null;
  this._update();
};


FlatView.prototype._resetParams = function() {
  var params = this._params;
  params.x = null;
  params.y = null;
  params.zoom = null;
  params.mediaAspectRatio = null;
  params.width = null;
  params.height = null;
};


FlatView.prototype._update = function(params) {

  // Avoid object allocation when no parameters are supplied.
  if (params == null) {
    this._resetParams();
    params = this._params;
  }

  // Save old parameters for later comparison.
  var oldX = this._x;
  var oldY = this._y;
  var oldZoom = this._zoom;
  var oldMediaAspectRatio = this._mediaAspectRatio;
  var oldWidth = this._width;
  var oldHeight = this._height;

  // Fill in object with the new set of parameters to pass into the limiter.
  params.x = params.x != null ? params.x : oldX;
  params.y = params.y != null ? params.y : oldY;
  params.zoom = params.zoom != null ? params.zoom : oldZoom;
  params.mediaAspectRatio = params.mediaAspectRatio != null ?
    params.mediaAspectRatio : oldMediaAspectRatio;
  params.width = params.width != null ? params.width : oldWidth;
  params.height = params.height != null ? params.height : oldHeight;

  // Apply view limiting when defined.
  if (this._limiter) {
    params = this._limiter(params);
    if (!params) {
      throw new Error('Bad view limiter');
    }
  }

  // Grab the limited parameters.
  var newX = params.x;
  var newY = params.y;
  var newZoom = params.zoom;
  var newMediaAspectRatio = params.mediaAspectRatio;
  var newWidth = params.width;
  var newHeight = params.height;

  // Consistency check.
  if (!real(newX) || !real(newY) || !real(newZoom) ||
      !real(newMediaAspectRatio) || !real(newWidth) || !real(newHeight)) {
    throw new Error('Bad view - suspect a broken limiter');
  }

  // Constrain zoom.
  newZoom = clamp(newZoom, zoomLimitEpsilon, Infinity);

  // Update parameters.
  this._x = newX;
  this._y = newY;
  this._zoom = newZoom;
  this._mediaAspectRatio = newMediaAspectRatio;
  this._width = newWidth;
  this._height = newHeight;

  // Check whether the parameters changed and emit the corresponding events.
  if (newX !== oldX || newY !== oldY || newZoom !== oldZoom ||
      newMediaAspectRatio !== oldMediaAspectRatio ||
      newWidth !== oldWidth || newHeight !== oldHeight) {
    this._projectionChanged = true;
    this.emit('change');
  }
  if (newWidth !== oldWidth || newHeight !== oldHeight) {
    this.emit('resize');
  }

};


FlatView.prototype._zoomX = function() {
  return this._zoom;
};


FlatView.prototype._zoomY = function() {
  var mediaAspectRatio = this._mediaAspectRatio;
  var aspect = this._width / this._height;
  var zoomX = this._zoom;
  var zoomY = zoomX * mediaAspectRatio / aspect;
  if (isNaN(zoomY)) {
    zoomY = zoomX;
  }
  return zoomY;
};


FlatView.prototype.updateWithControlParameters = function(parameters) {
  var scale = this.zoom();
  var zoomX = this._zoomX();
  var zoomY = this._zoomY();

  // TODO: should the scale be the same for both axes?
  this.offsetX(parameters.axisScaledX * zoomX + parameters.x * scale);
  this.offsetY(parameters.axisScaledY * zoomY + parameters.y * scale);
  this.offsetZoom(parameters.zoom * scale);
};


FlatView.prototype._updateProjection = function() {
  var projMatrix = this._projMatrix;
  var invProjMatrix = this._invProjMatrix;
  var frustum = this._frustum;

  // Recalculate projection matrix when required.
  if (this._projectionChanged) {
    var x = this._x;
    var y = this._y;
    var zoomX = this._zoomX();
    var zoomY = this._zoomY();

    // Recalculate view frustum.
    var top     = frustum[0] = (0.5 - y) + 0.5 * zoomY;
    var right   = frustum[1] = (x - 0.5) + 0.5 * zoomX;
    var bottom  = frustum[2] = (0.5 - y) - 0.5 * zoomY;
    var left    = frustum[3] = (x - 0.5) - 0.5 * zoomX;

    // Recalculate projection matrix and its inverse.
    mat4.ortho(projMatrix, left, right, bottom, top, -1, 1);
    mat4.invert(invProjMatrix, projMatrix);

    this._projectionChanged = false;
  }
};


/**
 * Returns the projection matrix for the current view.
 * @returns {mat4}
 */
FlatView.prototype.projection = function() {
  this._updateProjection();
  return this._projMatrix;
};


/**
 * Returns the inverse projection matrix for the current view.
 * @returns {mat4}
 */
FlatView.prototype.inverseProjection = function() {
  this._updateProjection();
  return this._invProjMatrix;
};


/**
 * Return whether the view frustum intersects the given rectangle.
 *
 * This function may return false positives, but never false negatives.
 * It is used for frustum culling, i.e., excluding invisible tiles from the
 * rendering process.
 *
 * @param {vec3[]} rectangle The vertices of the rectangle.
 */
FlatView.prototype.intersects = function(rectangle) {
  this._updateProjection();

  var frustum = this._frustum;

  // Check whether the rectangle is on the outer side of any of the frustum
  // planes. This is a sufficient condition, though not necessary, for the
  // rectangle to be completely outside the fruouter
  for (var i = 0; i < frustum.length; i++) {
    var limit = frustum[i];
    var axis = planeAxes[i];
    var cmp = planeCmp[i];
    var inside = false;
    for (var j = 0; j < rectangle.length; j++) {
      var vertex = rectangle[j];
      if (cmp < 0 && vertex[axis] < limit || cmp > 0 && vertex[axis] > limit) {
        inside = true;
        break;
      }
    }
    if (!inside) {
      return false;
    }
  }
  return true;
};


/**
 * Select the level that should be used to render the view.
 * @param {Level[]} levelList the list of levels from which to select.
 * @return {Level} the selected level.
 */
FlatView.prototype.selectLevel = function(levels) {

  // Multiply the viewport width by the device pixel ratio to get the required
  // horizontal resolution in pixels.
  //
  // Calculate the fraction of the image that would be visible at the current
  // zoom value. Then, for each level, multiply by the level width to get the
  // width in pixels of the portion that would be visible.
  //
  // Search for the smallest level that satifies the the required width,
  // falling back on the largest level if none do.

  var requiredPixels = pixelRatio() * this.width();
  var zoomFactor = this._zoom;

  for (var i = 0; i < levels.length; i++) {
    var level = levels[i];
    if (zoomFactor * level.width() >= requiredPixels) {
      return level;
    }
  }

  return levels[levels.length - 1];

};


/**
 * Convert view coordinates into screen coordinates. If a result argument is
 * provided, it is filled in and returned. Otherwise, a fresh object is filled
 * in and returned.
 *
 * @param {FlatViewCoords} coords The view coordinates.
 * @param {Coords=} result The result argument for the screen coordinates.
 * @return {Coords}
 */
FlatView.prototype.coordinatesToScreen = function(coords, result) {
  var ray = this._vec;

  if (!result) {
    result = {};
  }

  var width = this._width;
  var height = this._height;

  // Undefined on a null viewport.
  if (width <= 0 || height <= 0) {
    result.x = null;
    result.y = null;
    return null;
  }

  // Extract coordinates from argument, filling in default values.
  var x = coords && coords.x != null ? coords.x : defaultX;
  var y = coords && coords.y != null ? coords.y : defaultY;

  // Project view ray onto clip space.
  vec4.set(ray, x - 0.5, 0.5 - y, -1, 1);
  vec4.transformMat4(ray, ray, this.projection());

  // Calculate perspective divide.
  for (var i = 0; i < 3; i++) {
    ray[i] /= ray[3];
  }

  // Convert to viewport coordinates and return.
  result.x = width * (ray[0] + 1) / 2;
  result.y = height * (1 - ray[1]) / 2;

  return result;
};


/**
 * Convert screen coordinates into view coordinates. If a result argument is
 * provided, it is filled in with the result and returned. Otherwise, a fresh
 * object is filled in and returned.
 *
 * @param {Coords} coords The screen coordinates.
 * @param {FlatViewCoords=} result The result argument for the view coordinates.
 * @return {FlatViewCoords}
 */
FlatView.prototype.screenToCoordinates = function(coords, result) {
  var ray = this._vec;

  if (!result) {
    result = {};
  }

  var width = this._width;
  var height = this._height;

  // Convert viewport coordinates to clip space.
  var vecx = 2 * coords.x / width - 1;
  var vecy = 1 - 2 * coords.y / height;
  vec4.set(ray, vecx, vecy, 1, 1);

  // Project back to world space.
  vec4.transformMat4(ray, ray, this.inverseProjection());

  // Convert to flat coordinates.
  result.x = 0.5 + ray[0];
  result.y = 0.5 - ray[1];

  return result;
};


/**
 * Factory functions for view limiters. See {@link FlatViewLimiter}.
 * @namespace
 */
FlatView.limit = {

  /**
   * Returns a view limiter that constrains the x parameter.
   * @param {number} min The minimum x value.
   * @param {number} max The maximum y value.
   * @return {FlatViewLimiter}
   */
  x: function(min, max) {
    return function limitX(params) {
      params.x = clamp(params.x, min, max);
      return params;
    };
  },

  /**
   * Return a view limiter that constrains the y parameter.
   * @param {number} min The minimum y value.
   * @param {number} max The maximum y value.
   * @return {FlatViewLimiter}
   */
  y: function(min, max) {
    return function limitY(params) {
      params.y = clamp(params.y, min, max);
      return params;
    };
  },

  /**
   * Returns a view limiter than constrains the zoom parameter.
   * @param {number} min The minimum zoom value.
   * @param {number} max The maximum zoom value.
   * @return {FlatViewLimiter}
   */
  zoom: function(min, max) {
    return function limitZoom(params) {
      params.zoom = clamp(params.zoom, min, max);
      return params;
    };
  },

  /**
   * Returns a view limiter that prevents zooming in beyond the given
   * resolution.
   * @param {number} size The image width in pixels.
   * @return {FlatViewLimiter}
   */
  resolution: function(size) {
    return function limitResolution(params) {
      if (params.width <= 0 || params.height <= 0) {
        return params;
      }
      var width = params.width;
      var minZoom = pixelRatio() * width / size;
      params.zoom = clamp(params.zoom, minZoom, Infinity);
      return params;
    };
  },

  /**
   * Returns a view limiter that constrains the values of the x parameter that
   * are inside the viewport.
   * @param {number} min The minimum x value.
   * @param {number} max The maximum x value.
   * @return {FlatViewLimiter}
   */
  visibleX: function(min, max) {
    return function limitVisibleX(params) {
      // Calculate the zoom value that makes the specified range fully visible.
      var maxZoom = max - min;

      // Clamp zoom to the maximum value.
      if (params.zoom > maxZoom) {
        params.zoom = maxZoom;
      }

      // Bound X such that the image is visible up to the range edges.
      var minX = min + 0.5 * params.zoom;
      var maxX = max - 0.5 * params.zoom;
      params.x = clamp(params.x, minX, maxX);

      return params;
    };
  },

  /**
   * Returns a view limiter that constrains the values of the y parameter that
   * are inside the viewport.
   * @param {number} min The minimum y value.
   * @param {number} max The maximum y value.
   * @return {FlatViewLimiter}
   */
  visibleY: function(min, max) {
    return function limitVisibleY(params) {

      // Do nothing for a null viewport.
      if (params.width <= 0 || params.height <= 0) {
        return params;
      }

      // Calculate the X to Y conversion factor.
      var viewportAspectRatio = params.width / params.height;
      var factor = viewportAspectRatio / params.mediaAspectRatio;

      // Calculate the zoom value that makes the specified range fully visible.
      var maxZoom = (max - min) * factor;

      // Clamp zoom to the maximum value.
      if (params.zoom > maxZoom) {
        params.zoom = maxZoom;
      }

      // Bound Y such that the image is visible up to the range edges.
      var minY = min + 0.5 * params.zoom / factor;
      var maxY = max - 0.5 * params.zoom / factor;
      params.y = clamp(params.y, minY, maxY);

      return params;
    };
  },


  /**
   * Returns a view limiter that constrains the zoom parameter such that
   * zooming out is prevented beyond the point at which the image is fully
   * visible. Unless the image and the viewport have the same aspect ratio,
   * this will cause bands to appear around the image.
   * @return {FlatViewLimiter}
   */
  letterbox: function() {
    return function limitLetterbox(params) {
      if(params.width <= 0 || params.height <= 0) {
        return params;
      }
      var viewportAspectRatio = params.width / params.height;

      var fullWidthZoom = 1.0;
      var fullHeightZoom = viewportAspectRatio / params.mediaAspectRatio;

      // If the image is wider than the viewport, limit the horizontal zoom to
      // the image width.
      if (params.mediaAspectRatio >= viewportAspectRatio) {
        params.zoom = Math.min(params.zoom, fullWidthZoom);
      }

      // If the image is narrower than the viewport, limit the vertical zoom to
      // the image height.
      if (params.mediaAspectRatio <= viewportAspectRatio) {
        params.zoom = Math.min(params.zoom, fullHeightZoom);
      }

      // If the full image width is visible, limit x to the central point.
      // Else, bound x such that image is visible up to the horizontal edges.
      var minX, maxX;
      if (params.zoom > fullWidthZoom) {
        minX = maxX = 0.5;
      } else {
        minX = 0.0 + 0.5 * params.zoom / fullWidthZoom;
        maxX = 1.0 - 0.5 * params.zoom / fullWidthZoom;
      }

      // If the full image height is visible, limit y to the central point.
      // Else, bound y such that image is visible up to the vertical edges.
      var minY, maxY;
      if (params.zoom > fullHeightZoom) {
        minY = maxY = 0.5;
      } else {
        minY = 0.0 + 0.5 * params.zoom / fullHeightZoom;
        maxY = 1.0 - 0.5 * params.zoom / fullHeightZoom;
      }

      // Clamp x and y into the calculated bounds.
      params.x = clamp(params.x, minX, maxX);
      params.y = clamp(params.y, minY, maxY);

      return params;
    };
  }

};


FlatView.type = FlatView.prototype.type = 'flat';


module.exports = FlatView;


/***/ }),

/***/ "./node_modules/marzipano/src/views/Rectilinear.js":
/*!*********************************************************!*\
  !*** ./node_modules/marzipano/src/views/Rectilinear.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var eventEmitter = __webpack_require__(/*! minimal-event-emitter */ "./node_modules/minimal-event-emitter/index.js");
var mat4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").mat4;
var vec4 = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js").vec4;
var pixelRatio = __webpack_require__(/*! ../util/pixelRatio */ "./node_modules/marzipano/src/util/pixelRatio.js");
var convertFov = __webpack_require__(/*! ../util/convertFov */ "./node_modules/marzipano/src/util/convertFov.js");
var mod = __webpack_require__(/*! ../util/mod */ "./node_modules/marzipano/src/util/mod.js");
var real = __webpack_require__(/*! ../util/real */ "./node_modules/marzipano/src/util/real.js");
var clamp = __webpack_require__(/*! ../util/clamp */ "./node_modules/marzipano/src/util/clamp.js");
var decimal = __webpack_require__(/*! ../util/decimal */ "./node_modules/marzipano/src/util/decimal.js");
var compose = __webpack_require__(/*! ../util/compose */ "./node_modules/marzipano/src/util/compose.js");
var clearOwnProperties = __webpack_require__(/*! ../util/clearOwnProperties */ "./node_modules/marzipano/src/util/clearOwnProperties.js");

// Default viewport dimensions.
// Start with zero to ensure that those values are handled correctly.
var defaultWidth = 0;
var defaultHeight = 0;

// Default view parameters.
var defaultYaw = 0;
var defaultPitch = 0;
var defaultRoll = 0;
var defaultFov = Math.PI/4;
var defaultProjectionCenterX = 0;
var defaultProjectionCenterY = 0;

// A fov of exactly 0 or π breaks some computations, so we constrain it to the
// [fovLimitEpsilon, π - fovLimitEpsilon] interval. We use 6 decimal places for
// the epsilon value to avoid broken rendering due to loss of precision in
// floating point computations.
var fovLimitEpsilon = 0.000001;


/**
 * @interface RectilinearViewParams
 *
 * A camera configuration for a {@link RectilinearView}.
 *
 * @property {number} yaw The yaw angle, in the [-π, π] range.
 *     When `yaw < 0`, the view rotates to the left.
 *     When `yaw > 0`, the view rotates to the right.
 *
 * @property {number} pitch The pitch angle, in the [-π, π] range.
 *     When `pitch < 0`, the view rotates downwards.
 *     When `pitch > 0`, the view rotates upwards.
 *
 * @property {number} roll The roll angle, in the [-π, π] range.
 *     When `roll < 0`, the view rotates clockwise.
 *     When `roll > 0`, the view rotates counter-clockwise.
 *
 * @property {fov} fov The vertical field of view, in the [0, π] range.
 */


/**
 * @interface RectilinearViewCoords
 *
 * The position of a point in a 360° image.
 *
 * @property {number} yaw The yaw angle, in the [-π, π] range.
 * @property {number} pitch The pitch angle, in the [-π, π] range.
 */


/**
 * @typedef {function} RectilinearViewLimiter
 *
 * View limiter for a {@link RectilinearView}.
 *
 * A view limiter is a function that receives a {@link RectilinearViewParams}
 * object, optionally modifies it in place, and returns it. It can be used to
 * enforce constraints on the view parameters.
 *
 * See {@link RectilinearView.limit} for commonly used limiters. They may be
 * composed together or with user-defined limiters with {@link util.compose}.
 *
 * @param {RectilinearViewParams} params
 * @return {RectilinearViewParams}
 */

/**
 * @class RectilinearView
 * @implements View
 * @classdesc
 *
 * A {@link View} implementing a rectilinear projection for 360° images.
 *
 * @param {RectilinearViewParams=} params The initial view parameters. If
 *     unspecified, defaults to `{yaw: 0, pitch: 0, roll: 0, fov: Math.PI/4 }`.
 * @param {RectilinearViewLimiter=} limiter The view limiter. If unspecified,
 *     no view limiting is applied. See {@link RectilinearView.limit} for
 *     commonly used limiters.
 */
function RectilinearView(params, limiter) {
  // The initial values for the view parameters.
  this._yaw = params && params.yaw != null ? params.yaw : defaultYaw;
  this._pitch = params && params.pitch != null ? params.pitch : defaultPitch;
  this._roll = params && params.roll != null ? params.roll : defaultRoll;
  this._fov = params && params.fov != null ? params.fov : defaultFov;
  this._width = params && params.width != null ?
    params.width : defaultWidth;
  this._height = params && params.height != null ?
    params.height : defaultHeight;
  this._projectionCenterX = params && params.projectionCenterX != null ?
    params.projectionCenterX : defaultProjectionCenterX;
  this._projectionCenterY = params && params.projectionCenterY != null ?
    params.projectionCenterY : defaultProjectionCenterY;

  // The initial value for the view limiter.
  this._limiter = limiter || null;

  // The last calculated projection matrix and its inverse.
  this._projMatrix = mat4.create();
  this._invProjMatrix = mat4.create();

  // The last calculated view frustum.
  this._frustum = [
    vec4.create(), // left
    vec4.create(), // right
    vec4.create(), // bottom
    vec4.create(), // top
    vec4.create()  // camera
  ];

  // Whether the projection matrices and the view frustum need to be updated.
  this._projectionChanged = true;

  // Temporary variables used for calculations.
  this._params = {};
  this._fovs = {};
  this._tmpVec = vec4.create();

  // Force view limiting on initial parameters.
  this._update();
}

eventEmitter(RectilinearView);


/**
 * Destructor.
 */
RectilinearView.prototype.destroy = function() {
  clearOwnProperties(this);
};


/**
 * Get the yaw angle.
 * @return {number}
 */
RectilinearView.prototype.yaw = function() {
  return this._yaw;
};


/**
 * Get the pitch angle.
 * @return {number}
 */
RectilinearView.prototype.pitch = function() {
  return this._pitch;
};


/**
 * Get the roll angle.
 * @return {number}
 */
RectilinearView.prototype.roll = function() {
  return this._roll;
};


RectilinearView.prototype.projectionCenterX = function() {
  return this._projectionCenterX;
};


RectilinearView.prototype.projectionCenterY = function() {
  return this._projectionCenterY;
};


/**
 * Get the fov value.
 * @return {number}
 */
RectilinearView.prototype.fov = function() {
  return this._fov;
};


/**
 * Get the viewport width.
 * @return {number}
 */
RectilinearView.prototype.width = function() {
  return this._width;
};


/**
 * Get the viewport height.
 * @return {number}
 */
RectilinearView.prototype.height = function() {
  return this._height;
};


/**
 * Get the viewport dimensions. If an argument is supplied, it is filled in with
 * the result and returned. Otherwise, a fresh object is filled in and returned.
 * @param {Size=} size
 * @return {Size}
 */
RectilinearView.prototype.size = function(size) {
  size = size || {};
  size.width = this._width;
  size.height = this._height;
  return size;
};


/**
 * Get the view parameters. If an argument is supplied, it is filled in with the
 * result and returned. Otherwise, a fresh object is filled in and returned.
 * @param {RectilinearViewParams=} obj
 * @return {RectilinearViewParams}
 */
RectilinearView.prototype.parameters = function(params) {
  params = params || {};
  params.yaw = this._yaw;
  params.pitch = this._pitch;
  params.roll = this._roll;
  params.fov = this._fov;
  return params;
};


/**
 * Get the view limiter, or null if unset.
 * @return {?RectilinearViewLimiter}
 */
RectilinearView.prototype.limiter = function() {
  return this._limiter;
};


/**
 * Set the yaw angle.
 * @param {number} yaw
 */
RectilinearView.prototype.setYaw = function(yaw) {
  this._resetParams();
  this._params.yaw = yaw;
  this._update(this._params);
};


/**
 * Set the pitch angle.
 * @param {number} pitch
 */
RectilinearView.prototype.setPitch = function(pitch) {
  this._resetParams();
  this._params.pitch = pitch;
  this._update(this._params);
};


/**
 * Set the roll angle.
 * @param {number} roll
 */
RectilinearView.prototype.setRoll = function(roll) {
  this._resetParams();
  this._params.roll = roll;
  this._update(this._params);
};


/**
 * Set the fov value.
 * @param {number} fov
 */
RectilinearView.prototype.setFov = function(fov) {
  this._resetParams();
  this._params.fov = fov;
  this._update(this._params);
};


RectilinearView.prototype.setProjectionCenterX = function(projectionCenterX) {
  this._resetParams();
  this._params.projectionCenterX = projectionCenterX;
  this._update(this._params);
};


RectilinearView.prototype.setProjectionCenterY = function(projectionCenterY) {
  this._resetParams();
  this._params.projectionCenterY = projectionCenterY;
  this._update(this._params);
};


/**
 * Add yawOffset to the current yaw value.
 * @param {number} yawOffset
 */
RectilinearView.prototype.offsetYaw = function(yawOffset) {
  this.setYaw(this._yaw + yawOffset);
};


/**
 * Add pitchOffset to the current pitch value.
 * @param {number} pitchOffset
 */
RectilinearView.prototype.offsetPitch = function(pitchOffset) {
  this.setPitch(this._pitch + pitchOffset);
};


/**
 * Add rollOffset to the current roll value.
 * @param {number} rollOffset
 */
RectilinearView.prototype.offsetRoll = function(rollOffset) {
  this.setRoll(this._roll + rollOffset);
};


/**
 * Add fovOffset to the current fov value.
 * @param {number} fovOffset
 */
RectilinearView.prototype.offsetFov = function(fovOffset) {
  this.setFov(this._fov + fovOffset);
};


/**
 * Set the viewport dimensions.
 * @param {Size} size
 */
RectilinearView.prototype.setSize = function(size) {
  this._resetParams();
  this._params.width = size.width;
  this._params.height = size.height;
  this._update(this._params);
};


/**
 * Set the view parameters. Unspecified parameters are left unchanged.
 * @param {RectilinearViewParameters} params
 */
RectilinearView.prototype.setParameters = function(params) {
  this._resetParams();
  this._params.yaw = params.yaw;
  this._params.pitch = params.pitch;
  this._params.roll = params.roll;
  this._params.fov = params.fov;
  this._params.projectionCenterX = params.projectionCenterX;
  this._params.projectionCenterY = params.projectionCenterY;
  this._update(this._params);
};


/**
 * Set the view limiter.
 * @param {?RectilinearViewLimiter} limiter The new limiter, or null to unset.
 */
RectilinearView.prototype.setLimiter = function(limiter) {
  this._limiter = limiter || null;
  this._update();
};


RectilinearView.prototype._resetParams = function() {
  var params = this._params;
  params.yaw = null;
  params.pitch = null;
  params.roll = null;
  params.fov = null;
  params.width = null;
  params.height = null;
};


RectilinearView.prototype._update = function(params) {

  // Avoid object allocation when no parameters are supplied.
  if (params == null) {
    this._resetParams();
    params = this._params;
  }

  // Save old parameters for later comparison.
  var oldYaw = this._yaw;
  var oldPitch = this._pitch;
  var oldRoll = this._roll;
  var oldFov = this._fov;
  var oldProjectionCenterX = this._projectionCenterX;
  var oldProjectionCenterY = this._projectionCenterY;
  var oldWidth = this._width;
  var oldHeight = this._height;

  // Fill in object with the new set of parameters to pass into the limiter.
  params.yaw = params.yaw != null ? params.yaw : oldYaw;
  params.pitch = params.pitch != null ? params.pitch : oldPitch;
  params.roll = params.roll != null ? params.roll : oldRoll;
  params.fov = params.fov != null ? params.fov : oldFov;
  params.width = params.width != null ? params.width : oldWidth;
  params.height = params.height != null ? params.height : oldHeight;
  params.projectionCenterX = params.projectionCenterX != null ?
    params.projectionCenterX : oldProjectionCenterX;
  params.projectionCenterY = params.projectionCenterY != null ?
    params.projectionCenterY : oldProjectionCenterY;

  // Apply view limiting when defined.
  if (this._limiter) {
    params = this._limiter(params);
    if (!params) {
      throw new Error('Bad view limiter');
    }
  }

  // Normalize parameters.
  params = this._normalize(params);

  // Grab the limited parameters.
  var newYaw = params.yaw;
  var newPitch = params.pitch;
  var newRoll = params.roll;
  var newFov = params.fov;
  var newWidth = params.width;
  var newHeight = params.height;
  var newProjectionCenterX = params.projectionCenterX;
  var newProjectionCenterY = params.projectionCenterY;

  // Consistency check.
  if (!real(newYaw) || !real(newPitch) || !real(newRoll) ||
      !real(newFov) || !real(newWidth) || !real(newHeight) ||
      !real(newProjectionCenterX) || !real(newProjectionCenterY)) {
    throw new Error('Bad view - suspect a broken limiter');
  }

  // Update parameters.
  this._yaw = newYaw;
  this._pitch = newPitch;
  this._roll = newRoll;
  this._fov = newFov;
  this._width = newWidth;
  this._height = newHeight;
  this._projectionCenterX = newProjectionCenterX;
  this._projectionCenterY = newProjectionCenterY;

  // Check whether the parameters changed and emit the corresponding events.
  if (newYaw !== oldYaw || newPitch !== oldPitch || newRoll !== oldRoll ||
      newFov !== oldFov || newWidth !== oldWidth || newHeight !== oldHeight ||
      newProjectionCenterX !== oldProjectionCenterX ||
      newProjectionCenterY !== oldProjectionCenterY) {
    this._projectionChanged = true;
    this.emit('change');
  }
  if (newWidth !== oldWidth || newHeight !== oldHeight) {
    this.emit('resize');
  }

};


RectilinearView.prototype._normalize = function(params) {

  this._normalizeCoordinates(params);

  // Make sure that neither the horizontal nor the vertical fields of view
  // exceed π - fovLimitEpsilon.
  var hfovPi = convertFov.htov(Math.PI, params.width, params.height);
  var maxFov = isNaN(hfovPi) ? Math.PI : Math.min(Math.PI, hfovPi);
  params.fov = clamp(params.fov, fovLimitEpsilon, maxFov - fovLimitEpsilon);

  return params;
};


RectilinearView.prototype._normalizeCoordinates = function(params) {
  // Constrain yaw, pitch and roll to the [-π, π] interval.
  if ('yaw' in params) {
    params.yaw = mod(params.yaw - Math.PI, -2*Math.PI) + Math.PI;
  }
  if ('pitch' in params) {
    params.pitch = mod(params.pitch - Math.PI, -2*Math.PI) + Math.PI;
  }
  if ('roll' in params) {
    params.roll = mod(params.roll - Math.PI, -2*Math.PI) + Math.PI;
  }
  return params;
};


/**
 * Normalize view coordinates so that they are the closest to the current view.
 * Useful for tweening the view through the shortest path. If a result argument
 * is supplied, it is filled in with the result and returned. Otherwise, a fresh
 * object is filled in and returned.
 *
 * @param {RectilinearViewCoords} coords The view coordinates.
 * @param {RectilinearViewCoords} result The result argument for the normalized
 *     view coordinates.
 */
RectilinearView.prototype.normalizeToClosest = function(coords, result) {

  var viewYaw = this._yaw;
  var viewPitch = this._pitch;

  var coordYaw = coords.yaw;
  var coordPitch = coords.pitch;

  // Check if the yaw is closer after subtracting or adding a full circle.
  var prevYaw = coordYaw - 2*Math.PI;
  var nextYaw = coordYaw + 2*Math.PI;
  if (Math.abs(prevYaw - viewYaw) < Math.abs(coordYaw - viewYaw)) {
    coordYaw = prevYaw;
  }
  else if (Math.abs(nextYaw - viewYaw) < Math.abs(coordYaw - viewYaw)) {
    coordYaw = nextYaw;
  }

  // Check if the pitch is closer after subtracting or adding a full circle.
  var prevPitch = coordPitch - 2*Math.PI;
  var nextPitch = coordPitch + 2*Math.PI;
  if (Math.abs(prevPitch - viewPitch) < Math.abs(coordPitch - viewPitch)) {
    coordPitch = prevPitch;
  }
  else if (Math.abs(prevPitch - viewPitch) < Math.abs(coordPitch - viewPitch)) {
    coordPitch = nextPitch;
  }

  result = result || {};
  result.yaw = coordYaw;
  result.pitch = coordPitch;
  return result;

};


RectilinearView.prototype.updateWithControlParameters = function(parameters) {
  // axisScaledX and axisScaledY are scaled according to their own axis
  // x and y are scaled by the same value

  // If the viewport dimensions are zero, assume a square viewport
  // when converting from hfov to vfov.
  var vfov = this._fov;
  var hfov = convertFov.vtoh(vfov, this._width, this._height);
  if (isNaN(hfov)) {
    hfov = vfov;
  }

  // TODO: revisit this after we rethink the control parameters.
  this.offsetYaw(parameters.axisScaledX * hfov + parameters.x * 2 * hfov + parameters.yaw);
  this.offsetPitch(parameters.axisScaledY * vfov + parameters.y * 2 * hfov + parameters.pitch);
  this.offsetRoll(-parameters.roll);
  this.offsetFov(parameters.zoom * vfov);
};


RectilinearView.prototype._updateProjection = function() {
  var projMatrix = this._projMatrix;
  var invProjMatrix = this._invProjMatrix;
  var frustum = this._frustum;

  if (this._projectionChanged) {
    var width = this._width;
    var height = this._height;

    var vfov = this._fov;
    var hfov = convertFov.vtoh(vfov, width, height);
    var aspect = width / height;

    var projectionCenterX = this._projectionCenterX;
    var projectionCenterY = this._projectionCenterY;

    if (projectionCenterX !== 0 || projectionCenterY !== 0) {
      var offsetAngleX = Math.atan(projectionCenterX * 2 * Math.tan(hfov/2));
      var offsetAngleY = Math.atan(projectionCenterY * 2 * Math.tan(vfov/2));
      var fovs = this._fovs;
      fovs.leftDegrees = (hfov/2 + offsetAngleX) * 180/Math.PI;
      fovs.rightDegrees = (hfov/2 - offsetAngleX) * 180/Math.PI;
      fovs.upDegrees = (vfov/2 + offsetAngleY) * 180/Math.PI;
      fovs.downDegrees = (vfov/2 - offsetAngleY) * 180/Math.PI;
      mat4.perspectiveFromFieldOfView(projMatrix, fovs, -1, 1);
    } else {
      mat4.perspective(projMatrix, vfov, aspect, -1, 1);
    }

    mat4.rotateZ(projMatrix, projMatrix, this._roll);
    mat4.rotateX(projMatrix, projMatrix, this._pitch);
    mat4.rotateY(projMatrix, projMatrix, this._yaw);

    mat4.invert(invProjMatrix, projMatrix);

    this._matrixToFrustum(projMatrix, frustum);

    this._projectionChanged = false;
  }
};


RectilinearView.prototype._matrixToFrustum = function(p, f) {
  // Extract frustum planes from projection matrix.
  // http://www8.cs.umu.se/kurser/5DV051/HT12/lab/plane_extraction.pdf
  vec4.set(f[0], p[3] + p[0], p[7] + p[4], p[11] + p[8],  0); // left
  vec4.set(f[1], p[3] - p[0], p[7] - p[4], p[11] - p[8],  0); // right
  vec4.set(f[2], p[3] + p[1], p[7] + p[5], p[11] + p[9],  0); // top
  vec4.set(f[3], p[3] - p[1], p[7] - p[5], p[11] - p[9],  0); // bottom
  vec4.set(f[4], p[3] + p[2], p[7] + p[6], p[11] + p[10], 0); // camera
};


/**
 * Returns the projection matrix for the current view.
 * @returns {mat4}
 */
RectilinearView.prototype.projection = function() {
  this._updateProjection();
  return this._projMatrix;
};


/**
 * Returns the inverse projection matrix for the current view.
 * @returns {mat4}
 */
RectilinearView.prototype.inverseProjection = function() {
  this._updateProjection();
  return this._invProjMatrix;
};


/**
 * Return whether the view frustum intersects the given rectangle.
 *
 * This function may return false positives, but never false negatives.
 * It is used for frustum culling, i.e., excluding invisible tiles from the
 * rendering process.
 *
 * @param {vec2[]} rectangle The vertices of the rectangle.
 */
RectilinearView.prototype.intersects = function(rectangle) {
  this._updateProjection();

  var frustum = this._frustum;
  var vertex = this._tmpVec;

  // Check whether the rectangle is on the outer side of any of the frustum
  // planes. This is a sufficient condition, though not necessary, for the
  // rectangle to be completely outside the frustum.
  for (var i = 0; i < frustum.length; i++) {
    var plane = frustum[i];
    var inside = false;
    for (var j = 0; j < rectangle.length; j++) {
      var corner = rectangle[j];
      vec4.set(vertex, corner[0], corner[1], corner[2], 0);
      if (vec4.dot(plane, vertex) >= 0) {
        inside = true;
      }
    }
    if (!inside) {
      return false;
    }
  }
  return true;
};


/**
 * Select the level that should be used to render the view.
 * @param {Level[]} levelList the list of levels from which to select.
 * @return {Level} the selected level.
 */
RectilinearView.prototype.selectLevel = function(levelList) {

  // Multiply the viewport width by the device pixel ratio to get the required
  // horizontal resolution in pixels.
  //
  // Calculate the fraction of a cube face that would be visible given the
  // current vertical field of view. Then, for each level, multiply by the
  // level height to get the height in pixels of the portion that would be
  // visible.
  //
  // Search for the smallest level that satifies the the required height,
  // falling back on the largest level if none do.

  var requiredPixels = pixelRatio() * this._height;
  var coverFactor = Math.tan(0.5 * this._fov);

  for (var i = 0; i < levelList.length; i++) {
    var level = levelList[i];
    if (coverFactor * level.height() >= requiredPixels) {
      return level;
    }
  }

  return levelList[levelList.length - 1];

};


/**
 * Convert view parameters into screen position. If a result argument is
 * provided, it is filled in and returned. Otherwise, a fresh object is filled
 * in and returned.
 *
 * @param {RectilinearViewCoords} coords The view coordinates.
 * @param {Coords=} result The result argument for the screen coordinates.
 * @return {Coords}
 */
RectilinearView.prototype.coordinatesToScreen = function(coords, result) {
  var ray = this._tmpVec;

  if (!result) {
    result = {};
  }

  var width = this._width;
  var height = this._height;

  // Undefined on a null viewport.
  if (width <= 0 || height <= 0) {
    result.x = null;
    result.y = null;
    return null;
  }

  // Compute view ray pointing into the (yaw, pitch) direction.
  var yaw = coords.yaw;
  var pitch = coords.pitch;
  var x = Math.sin(yaw) * Math.cos(pitch);
  var y = -Math.sin(coords.pitch);
  var z = -Math.cos(yaw) * Math.cos(pitch);
  vec4.set(ray, x, y, z, 1);

  // Project view ray onto clip space.
  vec4.transformMat4(ray, ray, this.projection());

  // w in clip space equals -z in camera space.
  if (ray[3] >= 0) {
    // Point is in front of camera.
    // Convert to viewport coordinates.
    result.x = width * (ray[0] / ray[3] + 1) / 2;
    result.y = height * (1 - ray[1] / ray[3]) / 2;
  } else {
    // Point is behind camera.
    result.x = null;
    result.y = null;
    return null;
  }

  return result;
};


/**
 * Convert screen coordinates into view coordinates. If a result argument is
 * provided, it is filled in with the result and returned. Otherwise, a fresh
 * object is filled in and returned.
 *
 * @param {Coords} coords The screen coordinates.
 * @param {RectilinearViewCoords=} result The view coordinates.
 * @return {RectilinearViewCoords}
 */
RectilinearView.prototype.screenToCoordinates = function(coords, result) {
  var ray = this._tmpVec;

  if (!result) {
    result = {};
  }

  var width = this._width;
  var height = this._height;

  // Convert viewport coordinates to clip space.
  var vecx = 2 * coords.x / width - 1;
  var vecy = 1 - 2 * coords.y / height;
  vec4.set(ray, vecx, vecy, 1, 1);

  // Project back to world space.
  vec4.transformMat4(ray, ray, this.inverseProjection());

  // Convert to spherical coordinates.
  var r = Math.sqrt(ray[0] * ray[0] + ray[1] * ray[1] + ray[2] * ray[2]);
  result.yaw = Math.atan2(ray[0], -ray[2]);
  result.pitch = Math.acos(ray[1] / r) - Math.PI/2;

  this._normalizeCoordinates(result);

  return result;
};


/**
 * Calculate the perspective transform required to position an element with
 * perspective.
 *
 * @param {RectilinearViewCoords} coords The view coordinates.
 * @param {number} radius Radius of the sphere embedding the element.
 * @param {string} extraTransforms Extra transformations to be applied after
 *     the element is positioned. This may be used to rotate the element.
 * @return {string} The CSS 3D transform to be applied to the element.
 */
RectilinearView.prototype.coordinatesToPerspectiveTransform = function(
    coords, radius, extraTransforms) {
  extraTransforms = extraTransforms || "";

  var height = this._height;
  var width = this._width;
  var fov = this._fov;
  var perspective = 0.5 * height / Math.tan(fov / 2);

  var transform = '';

  // Center hotspot in screen.
  transform += 'translateX(' + decimal(width/2) + 'px) ';
  transform += 'translateY(' + decimal(height/2) + 'px) ';
  transform += 'translateX(-50%) translateY(-50%) ';

  // Set the perspective depth.
  transform += 'perspective(' + decimal(perspective) + 'px) ';
  transform += 'translateZ(' + decimal(perspective) + 'px) ';

  // Set the camera rotation.
  transform += 'rotateZ(' + decimal(-this._roll) + 'rad) ';
  transform += 'rotateX(' + decimal(-this._pitch) + 'rad) ';
  transform += 'rotateY(' + decimal(this._yaw) + 'rad) ';

  // Set the hotspot rotation.
  transform += 'rotateY(' + decimal(-coords.yaw) + 'rad) ';
  transform += 'rotateX(' + decimal(coords.pitch) + 'rad) ';

  // Move back to sphere.
  transform += 'translateZ(' + decimal(-radius) + 'px) ';

  // Apply the extra transformations
  transform += extraTransforms + ' ';

  return transform;
};


/**
 * Factory functions for view limiters. See {@link RectilinearViewLimiter}.
 * @namespace
 */
RectilinearView.limit = {

  /**
   * Returns a view limiter that constrains the yaw angle.
   * @param {number} min The minimum yaw value.
   * @param {number} max The maximum yaw value.
   * @return {RectilinearViewLimiter}
   */
  yaw: function(min, max) {
    return function limitYaw(params) {
      params.yaw = clamp(params.yaw, min, max);
      return params;
    };
  },

  /**
   * Returns a view limiter that constrains the pitch angle.
   * @param {number} min The minimum pitch value.
   * @param {number} max The maximum pitch value.
   * @return {RectilinearViewLimiter}
   */
  pitch: function(min, max) {
    return function limitPitch(params) {
      params.pitch = clamp(params.pitch, min, max);
      return params;
    };
  },

  /**
   * Returns a view limiter that constrains the roll angle.
   * @param {number} min The minimum roll value.
   * @param {number} max The maximum roll value.
   * @return {RectilinearViewLimiter}
   */
  roll: function(min, max) {
    return function limitRoll(params) {
      params.roll = clamp(params.roll, min, max);
      return params;
    };
  },

  /**
   * Returns a view limiter that constrains the horizontal field of view.
   * @param {number} min The minimum horizontal field of view.
   * @param {number} max The maximum horizontal field of view.
   * @return {RectilinearViewLimiter}
   */
  hfov: function(min, max) {
    return function limitHfov(params) {
      var width = params.width;
      var height = params.height;
      if (width > 0 && height > 0) {
        var vmin = convertFov.htov(min, width, height);
        var vmax = convertFov.htov(max, width, height);
        params.fov = clamp(params.fov, vmin, vmax);
      }
      return params;
    };
  },

  /**
   * Returns a view limiter that constrains the vertical field of view.
   * @param {number} min The minimum vertical field of view.
   * @param {number} max The maximum vertical field of view.
   * @return {RectilinearViewLimiter}
   */
  vfov: function(min, max) {
    return function limitVfov(params) {
      params.fov = clamp(params.fov, min, max);
      return params;
    };
  },

  /**
   * Returns a view limiter that prevents zooming in beyond the given
   * resolution.
   * @param {number} size The cube face width in pixels or, equivalently, one
   *     fourth of the equirectangular width in pixels.
   * @return {RectilinearViewLimiter}
   */
  resolution: function(size) {
    return function limitResolution(params) {
      var height = params.height;
      if (height) {
        var requiredPixels = pixelRatio() * height;
        var minFov = 2 * Math.atan(requiredPixels / size);
        params.fov = clamp(params.fov, minFov, Infinity);
      }
      return params;
    };
  },

  /**
   * Returns a view limiter that limits the horizontal and vertical field of
   * view, prevents zooming in past the image resolution, and limits the pitch
   * range to prevent the camera wrapping around at the poles. These are the
   * most common view constraints for a 360° panorama.
   * @param {number} maxResolution The cube face width in pixels or,
   *     equivalently, one fourth of the equirectangular width in pixels.
   * @param {number} maxVFov The maximum vertical field of view.
   * @param {number} [maxHFov=maxVFov] The maximum horizontal field of view.
   * @return {RectilinearViewLimiter}
   */
  traditional: function(maxResolution, maxVFov, maxHFov) {
    maxHFov = maxHFov != null ? maxHFov : maxVFov;

    return compose(
      RectilinearView.limit.resolution(maxResolution),
      RectilinearView.limit.vfov(0, maxVFov),
      RectilinearView.limit.hfov(0, maxHFov),
      RectilinearView.limit.pitch(-Math.PI/2, Math.PI/2));
  }

};


RectilinearView.type = RectilinearView.prototype.type = 'rectilinear';


module.exports = RectilinearView;


/***/ }),

/***/ "./node_modules/minimal-event-emitter/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/minimal-event-emitter/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class
 * @classdesc Minimalistic event emitter mixin.
 */
function EventEmitter() {}

/**
 * Registers an event listener for the specified event. If the listener has
 * already been registered for the event, this is a no-op.
 *
 * @param {string} name The event name.
 * @param {function} fn The listener function.
 */
EventEmitter.prototype.addEventListener = function(name, fn) {
  var eventMap = this.__events = this.__events || {};
  var handlerList = eventMap[name] = eventMap[name] || [];
  if (handlerList.indexOf(fn) < 0) {
    handlerList.push(fn);
  }
};

/**
 * Unregisters an event listener from the specified event. If the listener
 * hasn't been registered for the event, this is a no-op.
 *
 * @param {string} name The event name.
 * @param {function} fn The listener function.
 */
EventEmitter.prototype.removeEventListener = function(name, fn) {
  var eventMap = this.__events = this.__events || {};
  var handlerList = eventMap[name];
  if (handlerList) {
    var index = handlerList.indexOf(fn);
    if (index >= 0) {
      handlerList.splice(index, 1);
    }
  }
};

/**
 * Emits an event, causing all registered event listeners for that event to be
 * called in registration order.
 *
 * @param {string} name The event name.
 * @param {...*} var_args Arguments to call listeners with.
 */
EventEmitter.prototype.emit = function(name, var_args) {
  var eventMap = this.__events = this.__events || {};
  var handlerList = eventMap[name];
  var args = Array.prototype.slice.call(arguments, 1);
  if (handlerList) {
    for (var i = 0; i < handlerList.length; i++) {
      var fn = handlerList[i];
      fn.apply(this, args);
    }
  }
};

/**
 * Mixes in {@link EventEmitter} into a constructor function.
 *
 * @param {function} ctor The constructor function.
 */
function eventEmitter(ctor) {
  for (var prop in EventEmitter.prototype) {
    if (EventEmitter.prototype.hasOwnProperty(prop)) {
      ctor.prototype[prop] = EventEmitter.prototype[prop];
    }
  }
}

module.exports = eventEmitter;


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./cable */ "./src/js/cable.js");

__webpack_require__(/*! ./marzipano */ "./src/js/marzipano.js");

/***/ }),

/***/ "./src/js/cable.js":
/*!*************************!*\
  !*** ./src/js/cable.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Called when there was a cables error.
 * @param {string} errId - ID of the error, e.g. 'NO_WEBGL' or 'NO_WEBAUDIO'
 *                         when the browser does not support the used APIs
 * @param {string} errMsg - The error message
 */
function showError(errId, errMsg) {
  alert('An error occured: ' + errId + ', ' + errMsg);
}

function patchInitialized() {// You can now access the patch object (CABLES.patch), register variable watchers and so on
}

function patchFinishedLoading() {// The patch is ready now, all assets have been loaded
}

document.addEventListener('CABLES.jsLoaded', function (event) {
  CABLES.patch = new CABLES.Patch({
    patch: CABLES.exportedPatch,
    prefixAssetPath: '',
    glCanvasId: 'glcanvas',
    glCanvasResizeToWindow: true,
    onError: showError,
    onPatchLoaded: patchInitialized,
    onFinishedLoading: patchFinishedLoading
  });
});

/***/ }),

/***/ "./src/js/marzipano.js":
/*!*****************************!*\
  !*** ./src/js/marzipano.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Marzipano = __webpack_require__(/*! marzipano */ "./node_modules/marzipano/src/index.js");
/** Code ici **/


var panoElement = document.getElementById('pano');
var viewerOpts = {
  controls: {
    mouseViewMode: 'drag' // drag|qtvr

  }
};
var viewer = new Marzipano.Viewer(panoElement, viewerOpts);
var levels = [{
  tileSize: 512,
  size: 512
}, {
  tileSize: 512,
  size: 1024
}];
var geometry = new Marzipano.CubeGeometry(levels);
var source = Marzipano.ImageUrlSource.fromString("tiles/{z}/{f}/{y}/{x}.jpg");
var view = new Marzipano.RectilinearView();
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\1real\wp-content\themes\hello-theme-child-master\src\js\app.js */"./src/js/app.js");


/***/ })

/******/ });
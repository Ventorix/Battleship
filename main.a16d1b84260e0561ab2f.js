/*! For license information please see main.a16d1b84260e0561ab2f.js.LICENSE.txt */
!function(){"use strict";var t={91:function(t){t.exports=function(t,r){return r||(r={}),t?(t=String(t.__esModule?t.default:t),r.hash&&(t+=r.hash),r.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},588:function(t,r,e){t.exports=e.p+"assets/favicon.png"},213:function(t,r,e){t.exports=e.p+"assets/favicon.svg"}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}(),e.b=document.baseURI||self.location.href,function(){var t=e(91),r=e.n(t),n=new URL(e(213),e.b),o=new URL(e(588),e.b);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}r()(n),r()(o);var u=function(){function t(r,e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r,this.position=e,this.hits=[]}var r,e;return r=t,(e=[{key:"hit",value:function(t){this.hits.push(t)}},{key:"isSunk",value:function(){var t=this;return this.position.every((function(r){return t.hits.includes(r)}))}}])&&a(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var r=function(t,r){if("object"!==c(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(r)?r:String(r)}var s=function(){function t(r){var e,n,o,i=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,o=function(){for(var t=0;t<100;t++)i.board.push({hasShip:!1,isShot:!1})},(n=f(n="init"))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,this.board=r||[],this.board.length||this.init()}var r,e;return r=t,e=[{key:"resetGameboard",value:function(){this.board=[],this.init()}},{key:"getShip",value:function(t){var r=this,e=[];return this.board.forEach((function(n){n.hasShip!=t&&e.push(r.board.indexOf(n))})),e}},{key:"getShipsLocation",value:function(){var t=this,r=[];return this.board.forEach((function(e){0!=e.hasShip&&r.push(t.board.indexOf(e))})),r}},{key:"receiveShot",value:function(t){this.board[t].isShot=!0}},{key:"checkIfShotHit",value:function(t){return this.board[t].hasShip}},{key:"createLocationArray",value:function(t,r,e){for(var n=[],o=0;o<r.length;o++)"x"===e?n.push(t+o):n.push(t+10*o);return n}},{key:"checkCollisions",value:function(t){var r=this;return!t.some((function(t){return!r.board[t]}))&&!t.some((function(t){return r.board[t].hasShip}))&&![9,19,29,39,49,59,69,79,89].some((function(r){return[r,r+1].every((function(r){return t.includes(r)}))}))}},{key:"findRandomShipLocation",value:function(t){function r(r){return t.apply(this,arguments)}return r.toString=function(){return t.toString()},r}((function(t){var r=this,e=function(){return["x","y"][Math.floor(2*Math.random())]};return function(n){for(var o=[],i=0;i<100-t.length;i++){var a=[];if("x"===n)for(var u=0;u<t.length;u++)a.push(i+u);else for(var c=0;c<t.length;c++)a.push(i+10*c);r.checkCollisions(a)&&(a.some((function(t){return[-1,1,-10,10,-9,9,-11,11].some((function(e){var n;return null===(n=r.board[t+e])||void 0===n?void 0:n.hasShip}))}))||o.push(a))}return 0===o.length?findRandomShipLocation(e()):o[Math.floor(Math.random()*o.length)]}(e())}))},{key:"opponentBoard",value:function(){return this.board.map((function(t){return t.isShot&&t.hasShip?"hit":t.isShot?"miss":"empty"}))}}],e&&l(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}(),h=[{name:"carrier",length:5},{name:"battleship",length:4},{name:"cruiser",length:3},{name:"submarine",length:3},{name:"destroyer",length:2}],y=function(t){var r=new s(t.gameBoard.board),e=[];h.forEach((function(t){var n=new u(t.name,r.findRandomShipLocation(t));n.position.forEach((function(t){return r.board[t].hasShip=n.name})),e.push(n)})),t.ships=e},p=function(t){for(var r=document.querySelector(".player-grid"),e=0;e<t.gameBoard.board.length;e++){var n=document.createElement("div");n.dataset.y=Math.floor(e/10),n.dataset.x=(e/10).toString().split(".")[1]||0,n.classList.add("grid-cell"),r.appendChild(n)}},d=e.p+"assets/shot-marker.svg",v=function(t){var r,e;return t<10?(r=0,e=t.toString().split("")[0]):(r=t.toString().split("")[0],e=t.toString().split("")[1]),[r,e]};function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function b(t,r){var e=document.createElement("img");return e.classList.add("shot-img"),e.classList.add("".concat(r)),e.classList.add("pulse"),e.src=t,e}function g(t,r){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,r){if(t){if("string"==typeof t)return m(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,r):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];return document.querySelector("div.".concat(r,"-grid [data-y='").concat(i,"'][data-x='").concat(a,"']"))}function S(t,r){var e=function(t){for(var r=[],e=0;e<t.board.length;e++)!0===t.board[e].isShot&&!1!==t.board[e].hasShip&&r.push(e);return r}(t),n=function(t){for(var r=[],e=0;e<t.board.length;e++)!0===t.board[e].isShot&&r.push(e);return r}(t);e.forEach((function(t){var e=g(v(t),r);e.firstChild||e.appendChild(b(d,"hit"))})),n.forEach((function(t){var e=g(v(t),r);e.firstChild||e.appendChild(b(d,"miss"))}))}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function j(){j=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),u=new P(o||[]);return n(a,"_invoke",{value:O(t,e,u)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function h(){}function y(){}function p(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==r&&e.call(m,i)&&(d=m);var b=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function o(n,i,a,u){var c=f(t[n],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==w(s)&&e.call(s,"__await")?r.resolve(s.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):r.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function O(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function x(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),s;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,s;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return y.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:y,configurable:!0}),y.displayName=c(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(S.prototype),c(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new S(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),c(b,u,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}function O(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function x(){var t;return t=j().mark((function t(r){var e,n,o,i,a,u=arguments;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=u.length>1&&void 0!==u[1]?u[1]:100,n=document.querySelector(".game-text"),o="",i=r.split(""),a=0;case 5:if(!(a<i.length)){t.next=13;break}return t.next=8,E(e);case 8:o+=i[a],n.textContent=o,a++,t.next=5;break;case 13:case"end":return t.stop()}}),t)})),x=function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){O(i,n,o,a,u,"next",t)}function u(t){O(i,n,o,a,u,"throw",t)}a(void 0)}))},x.apply(this,arguments)}function E(t){return new Promise((function(r){return setTimeout(r,t)}))}var L=function(t){return x.apply(this,arguments)};function P(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var k=function(t){var r,e,n=(e=2,function(t){if(Array.isArray(t))return t}(r=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(r,e)||function(t,r){if(t){if("string"==typeof t)return P(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?P(t,r):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=[n[0],n[1]].filter((function(t){return!t.ships.every((function(t){return t.isSunk()}))}));return 1===o.length&&o[0]},A=document.querySelector(".winner-screen"),C=document.querySelector(".winner-text"),I=document.querySelector(".overlay");function T(t,r){A.classList.remove("hide"),I.classList.remove("hide"),C.classList.add("".concat(r,"-text")),C.textContent="".concat(t)}var M=!0;function _(){true===M?M=!1:false===M&&(M=!0)}function q(){return M}function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function G(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function N(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==B(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===B(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var D=function t(r,e){var n=q(),o="player",i=r.gameBoard;k([r,e])||n||setTimeout((function(){var n=function(t){var r=t.gameBoard,e=[],n=[];r.opponentBoard().forEach((function(t,r){"empty"===t?e.push(r):"hit"===t&&n.push(r)}));var o=(n=n.filter((function(r){return!t.ships.find((function(t){return t.position.includes(r)})).isSunk()}))).filter((function(t,r,e){return e.includes(t+1)&&(t-9)%10!=0||e.includes(t-1)&&t%10!=0||e.includes(t+10)||e.includes(t-10)}));if((o=o.filter((function(t,r,e){return e.lastIndexOf(t)===r}))).length){var i=[];if("x"==(o[1]-o[0]==1?"x":"y")){o[0]%10!=0&&i.push(o[0]-1);var a=o.find((function(t,r,e){return!e.includes(t+1)}));(a-9)%10!=0&&i.push(a+1)}else i.push(o[0]-10),i.push(o.find((function(t,r,e){return 0!==r&&!e.includes(t+10)}))+10);var u=i.filter((function(t){return e.includes(t)}));if(u.length)return u[Math.floor(Math.random()*u.length)]}if(n.length){var c=n[0],l=[c+1,c-1,c+10,c-10].filter((function(t){return c%10==0?(t-9)%10!=0&&e.includes(t):(c-9)%10==0?t%10!=0&&e.includes(t):e.includes(t)}));if(l.length)return l[Math.floor(Math.random()*l.length)]}return e[Math.floor(Math.random()*e.length)]}(r);if(i.checkIfShotHit(n)){var a=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?G(Object(e),!0).forEach((function(r){N(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):G(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({},r).ships,u=a.find((function(t){return t.name===i.checkIfShotHit(n)}));u.hit(n),u.isSunk()?(L("".concat(u.name," is sunk")),S(i,o),k([r,e])&&T("".concat(e.name," win!"),"rival")):L("hit"),e.fireShot(n,i),S(i,o),t(r,e)}else L("miss"),e.fireShot(n,i),S(i,o),setTimeout((function(){_()}),300)}),1e3)};function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function $(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function R(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==U(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===U(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var F=function(t,r,e){var n,o=q(),i=e.gameBoard,a="rival";if(t.target.matches(".grid-cell")&&!k([r,e])&&o){var u,c=t.target.dataset.x,l=t.target.dataset.y;if(+l<1?u=c:+l>0&&+l<10&&(u=l+c),n=u,!i.board[n].isShot){var f=+u;if(i.checkIfShotHit(f)){var s=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?$(Object(e),!0).forEach((function(r){R(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):$(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({},e).ships,h=s.find((function(t){return t.name===i.checkIfShotHit(f)}));if(h.hit(f),h.isSunk()){L("".concat(h.name," is sunk"));for(var y=0;y<h.position.length;y++){var p=g(v(h.position[y]),"rival");p.classList.add("ship-tile"),p.classList.add("".concat(h.name))}k([r,e])&&T("".concat(r.name," win!"),"player")}else L("hit");r.fireShot(u,i),S(i,a)}else L("miss"),r.fireShot(u,i),S(i,a),_(),setTimeout((function(){D(r,e)}),500)}}},H=function(t,r){for(var e=document.querySelector(".rival-grid"),n=0;n<r.gameBoard.board.length;n++){var o=document.createElement("div");o.dataset.y=Math.floor(n/10),o.dataset.x=(n/10).toString().split(".")[1]||0,o.classList.add("grid-cell"),o.addEventListener("click",(function(e){return F(e,t,r)})),e.appendChild(o)}};function Y(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var Q=function(t){var r,e;t.getShipsLocation().forEach((function(n){var o,i,a,u,c,l;e=t.board[n].hasShip,o=v(n),l=2,a=(i=function(t){if(Array.isArray(t))return t}(c=o)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(c,l)||function(t,r){if(t){if("string"==typeof t)return Y(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Y(t,r):void 0}}(c,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=i[1],(r=document.querySelector("div.player-grid [data-y='".concat(a,"'][data-x='").concat(u,"']"))).classList.add("ship-tile"),r.classList.add("".concat(e))}))};function z(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var J=function(t){var r,e,n=(e=2,function(t){if(Array.isArray(t))return t}(r=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(r,e)||function(t,r){if(t){if("string"==typeof t)return z(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?z(t,r):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];A.classList.add("hide"),I.classList.add("hide"),C.className="winner-text",function(t){var r=W(t,2),e=r[0],n=r[1];et(Z),et(tt),e.gameBoard.resetGameboard(),n.gameBoard.resetGameboard(),p(e),H(e,n),y(n),nt(e),rt.textContent="..."}([o,i]),M=!0},K=document.querySelectorAll(".number-container"),V=document.querySelectorAll(".letter-container");function W(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(t,r){if(t){if("string"==typeof t)return X(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?X(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var Z=document.querySelector(".player-grid"),tt=document.querySelector(".rival-grid"),rt=document.querySelector(".game-text");function et(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function nt(t){et(Z),t.gameBoard.resetGameboard(),p(t),y(t),Q(t.gameBoard)}function ot(t){return ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(t)}function it(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==ot(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==ot(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===ot(o)?o:String(o)),n)}var o}var at,ut,ct,lt=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r,this.ships=[],this.gameBoard=new s}var r,e;return r=t,(e=[{key:"fireShot",value:function(t,r){"empty"===r.opponentBoard()[t]&&r.receiveShot(t)}}])&&it(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();ut=(at=W([new lt("Player"),new lt("Robot")],2))[0],ct=at[1],y(ct),p(ut),H(ut,ct),nt(ut),function(t){var r=W(t,2),e=r[0],n=r[1],o=document.querySelector(".restart-btn");document.querySelector(".random-button"),o.addEventListener("click",(function(){return J([e,n])}))}([ut,ct]),K.forEach((function(t){return function(t){for(var r=1;r<=10;r++){var e=document.createElement("div");e.textContent=r,e.classList.add("number"),t.appendChild(e)}}(t)})),V.forEach((function(t){return function(t){for(var r=Array.from(Array(10)).map((function(t,r){return r+65})),e=0;e<r.length;e++){var n=document.createElement("div");n.textContent=String.fromCharCode(r[e]),n.classList.add("letter"),t.appendChild(n)}}(t)}))}()}();
!function(){"use strict";var t={91:function(t){t.exports=function(t,r){return r||(r={}),t?(t=String(t.__esModule?t.default:t),r.hash&&(t+=r.hash),r.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},588:function(t,r,e){t.exports=e.p+"assets/favicon.png"},213:function(t,r,e){t.exports=e.p+"assets/favicon.svg"}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}(),e.b=document.baseURI||self.location.href,function(){var t=e(91),r=e.n(t),n=new URL(e(213),e.b),o=new URL(e(588),e.b);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}r()(n),r()(o);var u=function(){function t(r,e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r,this.position=e,this.hits=[]}var r,e;return r=t,(e=[{key:"hit",value:function(t){this.hits.push(t)}},{key:"isSunk",value:function(){var t=this;return this.position.every((function(r){return t.hits.includes(r)}))}}])&&a(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var r=function(t,r){if("object"!==c(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(r)?r:String(r)}var s=function(){function t(r){var e,n,o,i=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,o=function(){for(var t=0;t<100;t++)i.board.push({hasShip:!1,isShot:!1})},(n=f(n="init"))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,this.board=r||[],this.board.length||this.init()}var r,e;return r=t,e=[{key:"resetGameboard",value:function(){this.board=[],this.init()}},{key:"getShipsLocation",value:function(){var t=this,r=[];return this.board.forEach((function(e){0!=e.hasShip&&r.push(t.board.indexOf(e))})),r}},{key:"receiveShot",value:function(t){this.board[t].isShot=!0}},{key:"checkIfShotHit",value:function(t){return this.board[t].hasShip}},{key:"createLocationArray",value:function(t,r,e){for(var n=[],o=0;o<r.length;o++)"x"===e?n.push(t+o):n.push(t+10*o);return n}},{key:"checkCollisions",value:function(t){var r=this;return!t.some((function(t){return!r.board[t]}))&&!t.some((function(t){return r.board[t].hasShip}))&&![9,19,29,39,49,59,69,79,89].some((function(r){return[r,r+1].every((function(r){return t.includes(r)}))}))}},{key:"findRandomShipLocation",value:function(t){function r(r){return t.apply(this,arguments)}return r.toString=function(){return t.toString()},r}((function(t){var r=this,e=function(){return["x","y"][Math.floor(2*Math.random())]};return function(n){for(var o=[],i=0;i<100-t.length;i++){var a=[];if("x"===n)for(var u=0;u<t.length;u++)a.push(i+u);else for(var c=0;c<t.length;c++)a.push(i+10*c);r.checkCollisions(a)&&(a.some((function(t){return[-1,1,-10,10,-9,9,-11,11].some((function(e){var n;return null===(n=r.board[t+e])||void 0===n?void 0:n.hasShip}))}))||o.push(a))}return 0===o.length?findRandomShipLocation(e()):o[Math.floor(Math.random()*o.length)]}(e())}))},{key:"opponentBoard",value:function(){return this.board.map((function(t){return t.isShot&&t.hasShip?"hit":t.isShot?"miss":"empty"}))}}],e&&l(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}(),h=[{name:"carrier",length:5},{name:"battleship",length:4},{name:"destroyer",length:3},{name:"submarine",length:3},{name:"boat",length:2}],p=function(t,r){var e=new s(t.board),n=[];h.forEach((function(t){var r=new u(t.name,e.findRandomShipLocation(t));r.position.forEach((function(t){return e.board[t].hasShip=r.name})),n.push(r)})),r.ships=n},y=function(t){for(var r=document.querySelector(".player-grid"),e=0;e<t.gameBoard.board.length;e++){var n=document.createElement("div");n.dataset.y=Math.floor(e/10),n.dataset.x=(e/10).toString().split(".")[1]||0,n.classList.add("grid-cell"),r.appendChild(n)}},d=e.p+"assets/shot-marker.svg",b=function(t){var r,e;return t<10?(r=0,e=t.toString().split("")[0]):(r=t.toString().split("")[0],e=t.toString().split("")[1]),[r,e]};function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function v(t,r){var e=document.createElement("img");return e.classList.add("shot-img"),e.classList.add("".concat(r)),e.src=t,e}function g(t,r){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,r){if(t){if("string"==typeof t)return m(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,r):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];return document.querySelector("div.".concat(r,"-grid [data-y='").concat(i,"'][data-x='").concat(a,"']"))}var S=function(t,r){var e=function(t){for(var r=[],e=0;e<t.board.length;e++)!0===t.board[e].isShot&&!1!==t.board[e].hasShip&&r.push(e);return r}(t),n=function(t){for(var r=[],e=0;e<t.board.length;e++)!0===t.board[e].isShot&&r.push(e);return r}(t);e.forEach((function(t){var e=g(b(t),r);e.firstChild||e.appendChild(v(d,"hit"))})),n.forEach((function(t){var e=g(b(t),r);e.firstChild||e.appendChild(v(d,"miss"))}))},w=function(t){document.querySelector(".game-text").textContent=t};function j(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var O=function(t){var r,e,n=(e=2,function(t){if(Array.isArray(t))return t}(r=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(r,e)||function(t,r){if(t){if("string"==typeof t)return j(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?j(t,r):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=[n[0],n[1]].filter((function(t){return!t.ships.every((function(t){return t.isSunk()}))}));return 1===o.length&&o[0]},P=!0;function k(){true===P?P=!1:false===P&&(P=!0)}function E(){return P}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function A(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function C(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==x(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===x(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var M=function t(r,e){var n=E(),o="player",i=r.gameBoard;O([r,e])?w("".concat(r.name," win!")):n||setTimeout((function(){var n=function(t){var r=t.gameBoard,e=[],n=[];r.opponentBoard().forEach((function(t,r){"empty"===t?e.push(r):"hit"===t&&n.push(r)}));var o=(n=n.filter((function(r){return!t.ships.find((function(t){return t.position.includes(r)})).isSunk()}))).filter((function(t,r,e){return e.includes(t+1)&&(t-9)%10!=0||e.includes(t-1)&&t%10!=0||e.includes(t+10)||e.includes(t-10)}));if((o=o.filter((function(t,r,e){return e.lastIndexOf(t)===r}))).length){var i=[];if("x"==(o[1]-o[0]==1?"x":"y")){o[0]%10!=0&&i.push(o[0]-1);var a=o.find((function(t,r,e){return!e.includes(t+1)}));(a-9)%10!=0&&i.push(a+1)}else i.push(o[0]-10),i.push(o.find((function(t,r,e){return 0!==r&&!e.includes(t+10)}))+10);var u=i.filter((function(t){return e.includes(t)}));if(u.length)return u[Math.floor(Math.random()*u.length)]}if(n.length){var c=n[0],l=[c+1,c-1,c+10,c-10].filter((function(t){return c%10==0?(t-9)%10!=0&&e.includes(t):(c-9)%10==0?t%10!=0&&e.includes(t):e.includes(t)}));if(l.length)return l[Math.floor(Math.random()*l.length)]}return e[Math.floor(Math.random()*e.length)]}(r);if(i.checkIfShotHit(n)){var a=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?A(Object(e),!0).forEach((function(r){C(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({},r).ships,u=a.find((function(t){return t.name===i.checkIfShotHit(n)}));u.hit(n),u.isSunk()?w("".concat(u.name," is sunk")):w("hit"),e.fireShot(n,i),S(i,o),t(r,e)}else w("miss"),e.fireShot(n,i),S(i,o),k()}),1e3)};function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function L(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function T(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==I(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===I(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var B=function(t,r,e){var n,o=E(),i=e.gameBoard,a="rival";if(t.target.matches(".grid-cell"))if(O([r,e]))w("".concat(e.name," win!"));else if(o){var u,c=t.target.dataset.x,l=t.target.dataset.y;if(+l<1?u=c:+l>0&&+l<10&&(u=l+c),n=u,!i.board[n].isShot){var f=+u;if(i.checkIfShotHit(f)){var s=function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?L(Object(e),!0).forEach((function(r){T(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({},e).ships,h=s.find((function(t){return t.name===i.checkIfShotHit(f)}));h.hit(f),h.isSunk()?w("".concat(h.name," is sunk")):w("hit"),r.fireShot(u,i),S(i,a)}else w("miss"),r.fireShot(u,i),S(i,a),k(),M(r,e)}}};function D(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var q=function(t){var r,e;t.getShipsLocation().forEach((function(n){var o,i,a,u,c,l;e=t.board[n].hasShip,o=b(n),l=2,a=(i=function(t){if(Array.isArray(t))return t}(c=o)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(c,l)||function(t,r){if(t){if("string"==typeof t)return D(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?D(t,r):void 0}}(c,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=i[1],(r=document.querySelector("div.player-grid [data-y='".concat(a,"'][data-x='").concat(u,"']"))).classList.add("ship-tile"),r.classList.add("".concat(e))}))},R=document.querySelector(".random-button"),U=document.querySelector(".player-grid");function $(t){!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(U),t.gameBoard.resetGameboard(),y(t),p(t.gameBoard,t),q(t.gameBoard)}function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function _(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,r){if("object"!==H(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===H(o)?o:String(o)),n)}var o}var G,N,F=function(){function t(r){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r,this.ships=[],this.gameBoard=new s}var r,e;return r=t,(e=[{key:"fireShot",value:function(t,r){"empty"===r.opponentBoard()[t]&&r.receiveShot(t)}}])&&_(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();G=new F("Jojo"),N=new F("Robot"),R.addEventListener("click",(function(){return $(G)})),p(N.gameBoard,N),y(G),function(t,r){for(var e=document.querySelector(".rival-grid"),n=0;n<r.gameBoard.board.length;n++){var o=document.createElement("div");o.dataset.y=Math.floor(n/10),o.dataset.x=(n/10).toString().split(".")[1]||0,o.classList.add("grid-cell"),o.addEventListener("click",(function(e){return B(e,t,r)})),e.appendChild(o)}}(G,N),$(G)}()}();
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=()=>{let e=document.getElementById("content");const t=document.createElement("p");t.innerHTML="This is the 'about' page.",e.appendChild(t)},r=()=>{let e=document.getElementById("content");const t=document.createElement("p");t.innerHTML="This is the 'menu' page.",e.appendChild(t)},c=()=>{let e=document.getElementById("content");const t=document.createElement("p");t.innerHTML="This is the 'contact' page.",e.appendChild(t)};function l(e){for(;a.firstChild;)a.removeChild(a.firstChild);for(let t=0;t<3;t++){let n=document.getElementById(`tab${t}`);e==t?(n.style.backgroundColor="#490900",n.style.color="#EEE8AA"):(n.style.backgroundColor="#EEE8AA",n.style.color="#490900")}0==e?o():1==e?r():c()}let u=document.getElementById("tab0"),i=document.getElementById("tab1"),d=document.getElementById("tab2"),a=document.getElementById("content");u.addEventListener("click",function(){l(0)}),i.addEventListener("click",function(){l(1)}),d.addEventListener("click",function(){l(2)}),l(0)}]);
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach(function(e){n(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function o(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=[{_id:1,text:"first item",done:!1},{_id:2,text:"second item",done:!0}],a=i.length;function u(){console.log("refresh");var e,t="",n=r(i);try{for(n.s();!(e=n.n()).done;){var o=e.value;t+='<div id="item_'.concat(o._id,'" class="item ').concat(o.done,'">\n    <div class="button done hover ').concat(o.done,'"></div>\n      <div class="text"><textarea class="').concat(o.done,'">').concat(o.text,'</textarea></div>\n      <div class="button delete hover">-</div>\n    </div>')}}catch(p){n.e(p)}finally{n.f()}var c=document.querySelector(".lists");c&&(c.innerHTML=t);var a,l=r(document.querySelectorAll(".done"));try{var s=function(){var e=a.value;e.onclick=function(){d(Number(e.parentNode.id.replace("item_",""))),u()}};for(l.s();!(a=l.n()).done;)s()}catch(p){l.e(p)}finally{l.f()}var v,y=r(document.querySelectorAll(".delete"));try{var b=function(){var e=v.value;e.onclick=function(){f(Number(e.parentNode.id.replace("item_",""))),u()}};for(y.s();!(v=y.n()).done;)b()}catch(p){y.e(p)}finally{y.f()}}function l(){a++,i.push({_id:a,text:"",done:!1})}function f(e){i=i.filter(function(t){return t._id!==e})}function d(e){i=i.map(function(n){return n._id===e?t(t({},n),{},{done:!n.done}):n})}window.addEventListener("load",function(){u(),document.querySelector(".add").onclick=function(){l(),u();var e=document.querySelectorAll("textarea");e[e.length-1].focus()}});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/todo_parcel.9bf3048c.js.map
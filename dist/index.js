(()=>{"use strict";var r,n,e,t,o,a,i,c,s,l,d,u,p,f,h={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\np {\r\n  display: inline-block;\r\n}\r\n\r\n.btn {\r\n  width: fit-content;\r\n  box-shadow: 3px 3px #000;\r\n  padding: 0.25rem;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.header {\r\n  margin: 5%;\r\n}\r\n\r\n.recent-score-header {\r\n  margin: 0 0 2% 5%;\r\n  display: inline-block;\r\n  width: fit-content;\r\n}\r\n\r\n.refresh {\r\n  float: right;\r\n}\r\n\r\n.recent-container {\r\n  width: 45%;\r\n  margin-left: 2%;\r\n  float: left;\r\n}\r\n\r\n.recent-score-list {\r\n  margin: 5% 0 0 5%;\r\n  box-shadow: 1px 1px #000;\r\n  list-style: none;\r\n  border: 1px solid black;\r\n}\r\n\r\n.recent-score-list > li,\r\n.recent-score-list > li > p {\r\n  padding: 1%;\r\n}\r\n\r\nli:nth-child(odd) {\r\n  background-color: lightgray;\r\n}\r\n\r\n.add-your-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 45%;\r\n  margin-right: 2%;\r\n  float: right;\r\n}\r\n\r\ninput {\r\n  margin: 3% 0;\r\n  padding: 0.25rem;\r\n  color: black;\r\n  border: 1px solid black;\r\n  box-shadow: 1px 1px #000;\r\n}\r\n\r\n.submit {\r\n  align-self: flex-end;\r\n}\r\n",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},v={};function m(r){var n=v[r];if(void 0!==n)return n.exports;var e=v[r]={id:r,exports:{}};return h[r](e,e.exports,m),e.exports}m.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return m.d(n,{a:n}),n},m.d=(r,n)=>{for(var e in n)m.o(n,e)&&!m.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},m.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=m(379),n=m.n(r),e=m(795),t=m.n(e),o=m(569),a=m.n(o),i=m(565),c=m.n(i),s=m(216),l=m.n(s),d=m(589),u=m.n(d),p=m(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();
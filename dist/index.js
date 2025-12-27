"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=f(function(x,v){
var t=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/constants-float16-sign-mask/dist'),q=require('@stdlib/constants-uint16-max/dist'),a=require('@stdlib/number-float16-base-to-word/dist'),c=require('@stdlib/math-base-special-abs/dist');function s(r){return r&n?~r+1&q:(r|n)>>>0}function N(r,e){var i,u;return t(r)||t(e)?NaN:(i=a(r),u=a(e),i=s(i),u=s(u),c(i-u))}v.exports=N
});var p=o();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

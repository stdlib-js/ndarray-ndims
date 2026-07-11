"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var a=s(function(p,t){
var u=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function v(e){var r,i;if(typeof e!="object"||e===null)throw new TypeError(n('1k5Dv',e));if(i=e.ndims,u(i))return i;if(r=e.shape,!o(r))throw new TypeError(n('1k5Dv',e));return r.length}t.exports=v
});var l=a();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

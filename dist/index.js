"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=s(function(p,t){
var u=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r){var e,i;if(typeof r!="object"||r===null)throw new TypeError(n('1k5Dv',r));if(i=r.ndims,u(i))return i;if(e=r.shape,!o(e))throw new TypeError(n('1k5Dv',r));return e.length}t.exports=v
});var l=a();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

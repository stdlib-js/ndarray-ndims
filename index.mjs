// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function s(s){var n,i;if("object"!=typeof s||null===s)throw new TypeError(r("1k5Dv",s));if(i=s.ndims,e(i))return i;if(n=s.shape,!t(n))throw new TypeError(r("1k5Dv",s));return n.length}export{s as default};
//# sourceMappingURL=index.mjs.map

// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n){var s,i;if("object"!=typeof n||null===n)throw new TypeError(t("invalid argument. Must provide an ndarray. Value: `%s`.",n));if(i=n.ndims,e(i))return i;if(s=n.shape,!r(s))throw new TypeError(t("invalid argument. Must provide an ndarray. Value: `%s`.",n));return s.length}export{n as default};
//# sourceMappingURL=index.mjs.map

'use strict';

const buffer = new ArrayBuffer(10);
const view1 = new Int8Array(buffer);
const view2 = new Int8Array(buffer, 5, 2);

console.log(view1.buffer === buffer); /* true */
console.log(view2.buffer === buffer); /* true */
console.log(view1.byteOffset); /* 0 */
console.log(view2.byteOffset); /* 5 */
console.log(view1.byteLength); /* 10 */
console.log(view2.byteLength); /* 2 */

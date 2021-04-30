'use strict';

const ints = new Int16Array([25, 50]);
const mapped = ints.map((v) => v * 2);

console.log(mapped.length);
console.log(mapped[0]);
console.log(mapped[1]);
console.log(mapped instanceof Int16Array);

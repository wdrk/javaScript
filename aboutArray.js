'use strict';

// 배열 버퍼를 먼저 만들지 않아도 자동으로 새로운 버퍼를 만든다
// 생성할때 전달하는 숫자는 타입별로 배열 길이(개수)다
const ints = new Int16Array(2);
const floats = new Float32Array(5);

console.log(ints.byteLength); /* 4 */
console.log(ints.length); /* 2 */
console.log(floats.byteLength); /* 20 */
console.log(floats.length); /* 5 */

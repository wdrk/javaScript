'use strict';

// 타입 배열 선언과 정의를 동시에 하기
let ints = new Int16Array([25, 50]);

console.log(ints.length); /* 2 */
console.log(ints[0]); /* 25 */
console.log(ints[1]); /* 50 */

ints[0] = 1;
ints[1] = 2;

console.log(ints[0]); /* 1 */
console.log(ints[1]); /* 2 */

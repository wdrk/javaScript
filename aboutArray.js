'use strict';

const ints = new Int16Array(4);

// ints에 다른 배열의 값을 복사
ints.set([25, 50]);
ints.set([75, 100], 2); /* 2번 인덱스부터 값을 대입하도록 설정 */

const subints1 = ints.subarray(); /* ints 배열 전부를 복제 */
const subints2 = ints.subarray(2); /* ints 2번 인덱스부터 끝까지 복제 */
const subints3 = ints.subarray(
  1,
  3
); /* ints 1번 인덱스에서 2번 인덱스까지 복제 */

console.log(subints1.toString()); /* 25, 50, 75, 100 */
console.log(subints2.toString()); /* 75, 100 */
console.log(subints3.toString()); /* 50, 75 */

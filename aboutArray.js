'use strict';

const numbers = [25, 30, 35, 40, 45];

// 콜백 함수가 처음 true를 반환한 값을 반환한다
console.log(numbers.find((n) => n > 33)); /* 35 */

// 콜백 함수가 처음 true를 반환한 값의 인덱스를 반환한다
console.log(numbers.findIndex((n) => n > 33)); /* 2 */

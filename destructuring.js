'use strict';

const colors = ['red', 'green', 'blue'];

let [firstColor, ...restColors] = colors;

console.log(firstColor); /* red */
console.log(restColors.length); /* 2 */
console.log(restColors[0]); /* green */
console.log(restColors[1]); /* blue */

/* 나머지 요소 문법으로 배열을 쉽게 복사하는 방법 */
const [...cloneColors] = colors;
console.log(cloneColors); /* ['red','green','blue'] */

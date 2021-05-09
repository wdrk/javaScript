'use strict';

/* ES6 이전에 값을 교환하던 방법 */
let a = 1;
let b = 2;
let tmp;

tmp = a;
a = b;
b = tmp;

/* 구조분해 문법을 이용해서 손쉽게 변수의 값을 교환하는 방법 */

let c = 1;
let d = 2;

[c, d] = [d, c];

console.log(c); /* 2 */
console.log(d); /* 1 */

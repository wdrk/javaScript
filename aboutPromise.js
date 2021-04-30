'use strict';

const p1 = new Promise((resolve, reject) => {
  resolve(42);
});
const p2 = new Promise((resolve, reject) => {
  resolve(43);
});
const p3 = new Promise((resolve, reject) => {
  resolve(44);
});

const p4 = Promise.all([p1, p2, p3]);

p4.then((value) => {
  console.log(Array.isArray(value)); /* true */
  console.log(value[0]); /* 42 */
  console.log(value[1]); /* 43 */
  console.log(value[2]); /* 44 */
});

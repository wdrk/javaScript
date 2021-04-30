'use strict';

// const promise = new Promise((resolve, reject) => {
//   try {
//     throw new Error('Explosion!');
//   } catch (ex) {
//     reject(ex);
//   }
// });

// 위 예제를 간단히 하는 방법
const promise = new Promise((resolve, reject) => {
  throw new Error('Explosion!');
});

promise.catch((error) => {
  console.log(error.message); /* Explosion! */
});

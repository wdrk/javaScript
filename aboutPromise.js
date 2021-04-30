'use strict';

// 성공 핸들러가 에러를 발생시키고 반환한 프로미스의 catch에 에러를 전달한다
const p1 = new Promise((resolve, reject) => {
  resolve(42);
});
p1.then((value) => {
  throw new Error('Boom!');
}).catch((error) => {
  console.log(`p1 error : ${error.message}`);
});

// p2 실행자가 에러를 발생시키고 실패 핸들러를 실행한다
// 실패 핸들러가 다시 에러를 발생시키고 두번째 프로미스의 실패 핸들러가 처리한다
const p2 = new Promise((resolve, reject) => {
  throw new Error('Explosion!');
});

p2.catch((error) => {
  console.log(`p2 error : ${error.message}`);
  throw new Error('Boom!');
}).catch((error) => {
  console.log(`p2 error : ${error.message}`);
});

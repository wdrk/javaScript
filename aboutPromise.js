'use strict';

// Promise는 선언하면 즉시 실행된다
const promise = new Promise((resolve, reject) => {
  console.log('Promise');
  resolve();
});
console.log('Hi!');

// promise의 resolve, reject는 비동기 실행이어서
// 자바스크립트 엔진이 작업큐의 맨 마지막에 등록하므로
// console.log('Hi2') 보다 늦게 실행된다
const promise2 = new Promise((resolve, reject) => {
  console.log('Promise2');
  resolve();
});
promise2.then(() => console.log('resolved'));
console.log('Hi2');

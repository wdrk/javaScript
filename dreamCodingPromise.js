'use strict';

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      'finally'
    ); /* promise의 성공/실패 여부와 상관없이 마지막에 무조건 호출하는 함수 */
  });

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hen');
    }, 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} => egg`);
    }, 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} => cook`);
    }, 1000);
  });

getHen()
  .then(getEgg) /* .then((hen) => getEgg(hen)) */
  .then(cook) /* .then((egg) => cook(egg))   */
  .then(console.log); /* .then((meal) => console.log(meal)); */

'use strict';

// 1. async
async function fetchUser() {
  // do network request in 10 seconds
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function getApple() {
  await delay(1000);
  return 'Apple';
}

async function getBanana() {
  await delay(1000);
  return 'Banana';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

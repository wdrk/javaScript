'use strict';

const p1 = new Promise((resolve, reject) => {
  resolve(42);
});

p1.then((value) => {
  console.log(value);
}).then(() => {
  console.log('Finished');
});

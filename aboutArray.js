'use strict';

const translate = (...args) => {
  return Array.from(args, (value) => value + 1);
};

let numbers = translate(1, 2, 3);
console.log(numbers);

'use strict';

const createArray = (arrayCreator, value) => {
  return arrayCreator(value);
};

let items = createArray(Array.of, 4);
console.log(items);

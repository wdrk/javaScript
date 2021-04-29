'use strict';

function createObject(classDef) {
  return new classDef();
}

const obj = new createObject(
  class {
    sayHi() {
      console.log('Hi');
    }
  }
);

obj.sayHi();

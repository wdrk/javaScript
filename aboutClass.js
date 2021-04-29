'use strict';

const person = new (class {
  constructor(name) {
    this._name = name;
  }

  sayName() {
    console.log(this._name);
  }
})('Nicholas');

person.sayName();

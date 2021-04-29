'use strict';

class PersonClass {
  constructor(name) {
    this._name = name;
  }

  sayName() {
    console.log(this._name);
  }

  static create(name) {
    return new PersonClass(name);
  }
}

const person = PersonClass.create('Nicholas');

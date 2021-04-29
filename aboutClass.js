'use strict';

let methodName = 'sayName';

class PersonClass {
  constructor(name) {
    this._name = name;
  }

  [methodName]() {
    console.log(this._name);
  }
}

const me = new PersonClass('Nicholas');
me.sayName();

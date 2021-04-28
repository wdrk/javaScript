'use strict';

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(phrase) {
    if (phrase.length < 4) {
      console.log('Too short');
      return;
    } else {
      this._name = phrase;
    }
  }
}

const user = new User('wdrk');
console.log(user.name); /* wdrk */

const user2 = new User(''); /* Too short */

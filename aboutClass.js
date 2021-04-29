'use strict';

class Rectangle {
  constructor(length, width) {
    this._length = length;
    this._width = width;
  }

  getArea() {
    return this._length * this._width;
  }

  static create(length, width) {
    return new Rectangle(length, width);
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const rect = Square.create(3, 4);

console.log(rect instanceof Rectangle); /* true */
console.log(rect.getArea()); /* 12 */
console.log(rect instanceof Square); /* false */

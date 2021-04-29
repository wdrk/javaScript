'use strict';

class Rectangle {
  constructor(width, length) {
    this._width = width;
    this._length = length;
  }

  getArea() {
    return this._width * this._length;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const square = new Square(3);
console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);

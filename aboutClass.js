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

  // 함수 재정의 (오버라이드)
  getArea() {
    console.log('Square.getArea()');
    return this._length * this._length;
  }
}

const square = new Square(3);
console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);

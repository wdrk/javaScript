'use strict';

// 데이터 익스포트
export var color = 'red';
export let name = 'Nicholas';
export const magicNumber = 7;

// 함수 익스포트
export function sum(num1, num2) {
  return num1 + num2;
}

// 클래스 익스포트
export class Rectangle {
  constructor(length, width) {
    this._length = length;
    this._width = width;
  }
}

// 이 함수는 모듈에 비공개
function subtract(num1, num2) {
  return num1 - num2;
}

// 함수 정의
function multiply(num1, num2) {
  return num1 * num2;
}

export { multiply };

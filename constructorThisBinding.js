"use strict";
function Person(name) {
  this.name = name;
}

// new 연산자는 빈 객체를 생성해서 반환함
const me = new Person("lee");
console.log(me);

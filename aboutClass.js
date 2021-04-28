'use strict';

// 클래스 표현식으로 클래스를 정의하는 방법
const User = class {
  sayHi() {
    console.log('hello');
  }
};

// new 연산으로 생성한 객체의 sayHi() 함수를 호출하는 구조
new User().sayHi();

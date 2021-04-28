'use strict';

// 리턴값으로 클래스를 생성하는 방법
const makeClass = (phrase) => {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
};

const User = makeClass('Hello');
new User().sayHi(); /* Hello */

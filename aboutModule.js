'use strict';

function sum(num1, num2) {
  return num1 + num2;
}

// export 할때 변수, 함수, 클래스의 이름을 바꾸는 방법
export { sum as add };

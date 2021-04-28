class User {
  // new 연산이 constructor()를 호출한다
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// 클래스는 function 이다
console.log(typeof User); /* function */

// 정확히는 생성자 메서드와 동일하다
console.log(User === User.prototype.constructor); /* true */

// 클래스는 내부에서 정의한 메서드를 User.prototype에 저장한다
console.log(User.prototype.sayHi);

// 프로포타입에 있는 메서드의 이름을 가져오는 방법
console.log(Object.getOwnPropertyNames(User.prototype));

class User {
  // new 연산이 constructor()를 호출한다
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const user = new User('wdrk');
user.sayHi();

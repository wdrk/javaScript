"use strict";
const value = 1;

const obj = {
  value: 100,
  foo: function () {
    const that = this;
    console.log(`that === this is '${that === this}'`);
    console.log(`foo's this : ${this}`);
    console.log(`foo's this.value : ${this.value}`);

    function bar() {
      console.log(`bar's this : ${this}`);
      console.log(`bar's this.value : ${this.value}`);
      console.log(`bar's that : ${that}`);
      console.log(`bar's that.value : ${that.value}`);
    }
    bar();
  },
};

obj.foo();

const obj1 = {
  name: "lee",
  sayName: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: "kim",
};

obj2.sayName = obj1.sayName;

obj1.sayName(); /* lee */
obj2.sayName(); /* kim */

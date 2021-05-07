let node = {
  type: 'Identifier',
  name: 'foo',
};

let { type, name, value } = node;

console.log(type); /* Identifier */
console.log(name); /* foo */
console.log(value); /* undefined */

// 객체 안에 존재하지 않는 프로퍼티에 초기값을 설정
let { basicValue = true } = node;
console.log(basicValue); /* true */

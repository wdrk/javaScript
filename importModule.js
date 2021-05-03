import { name, setName } from './aboutModule.js';

console.log(name); /* Nicholas */
setName('Greg');
console.log(name); /* Greg */

// import로 가져온 변수는 해당 모듈 쪽 함수에서만 값을 바꿀 수 있다
// name = 'Nicholas'; /* Error */

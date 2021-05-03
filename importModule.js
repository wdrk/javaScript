// 모듈의 기본 값과 기본값이 아닌 것을 import 하는 방법
import sum, { color } from './aboutModule.js';

console.log(color); /* red */
console.log(sum(4, 1)); /* 5 */

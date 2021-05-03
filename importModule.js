// import는 export 할때 바꾼 이름으로 해야 함
import { sum as add } from './aboutModule.js';

// console.log(sum(1, 2)); /* ERROR */
console.log(add(1, 2)); /* 3 */

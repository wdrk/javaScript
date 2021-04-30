'use strict';

// 10바이트의 배열 버퍼를 만들기
const buffer = new ArrayBuffer(10);
console.log(buffer.byteLength); /* 10 */

// buffer에 접근할 수 있는 view 인스턴스 만들기
const view = new DataView(buffer);

// buffer의 5, 6번째 바이트에만 접근할 수 있는 view 인스턴스 만들기
const view2 = new DataView(buffer, 5, 2);

console.log(view.buffer === buffer); /* true */
console.log(view2.buffer === buffer); /* true */
console.log(view.byteOffset); /* 0 */
console.log(view2.byteOffset); /* 5 */
console.log(view.byteLength); /* 10 */
console.log(view2.byteLength); /* 2 */

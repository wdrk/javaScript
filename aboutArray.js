'use strict';

// 배열 버퍼와 뷰 선언
const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

// DataView의 setter 함수로 (오프셋, 값) 지정
view.setInt8(0, 5);
view.setUint8(1, -1);

// 원하는 비트 단위와 오프셋을 조합해서 값을 읽어올 수 있다
console.log(view.getInt8(0)); /* 5 */
console.log(view.getInt8(1)); /* -1 */
console.log(view.getInt16(0)); /* 1535 */

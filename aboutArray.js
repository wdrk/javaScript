// Array 생성자는 전달한 인자의 타입과 개수에 따라 동작이 다르다

// 숫자 값 하나만을 전달하는 경우,
// 배열의 0번 인덱스 값으로 들어가는게 아니라 length값으로 쓴다
let items = new Array(2);
console.log(items.length); /* 2 */
console.log(items[0]); /* undefined */
console.log(items[1]); /* undefined */

// 숫자가 아닌 값 하나만을 전달하는 경우,
// 배열의 유일한 값으로 쓴다
items = new Array('2');
console.log(items.length); /* 1 */
console.log(items[0]); /* "2" */

items = new Array(1, 2);
console.log(items.length); /* 2 */
console.log(items[0]); /* 1 */
console.log(items[1]); /* 2 */

items = new Array(3, '2');
console.log(items.length); /* 2 */
console.log(items[0]); /* 3 */
console.log(items[1]); /* "2" */

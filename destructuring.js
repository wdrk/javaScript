'use strict';

let node = {
  type: 'Identifier',
  name: 'foo',
  loc: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 1,
      column: 4,
    },
  },
};

let {
  loc: { start: localStart },
} = node;

console.log(localStart.line); /* 1 */
console.log(localStart.column); /* 1 */

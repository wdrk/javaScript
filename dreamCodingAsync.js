'use strict';

// 1. async
async function fetchUser() {
  // do network request in 10 seconds
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);

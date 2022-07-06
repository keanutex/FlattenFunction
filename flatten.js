function flatten(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res = res.concat(arr[i]);
    }
  }
  return res;
}

//Testing start

const assert = require("assert");

let onlyNumbersNestedArray = [1, [2], [2, [3, [5]]], 7, [8]];
assert.deepEqual(flatten(onlyNumbersNestedArray), [1, 2, 2, 3, 5, 7, 8]);

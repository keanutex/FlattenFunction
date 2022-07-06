function flatten(arr) {
  let res = [];
  let arrLength = arr ? arr.length : 0;

  for (let i = 0; i < arrLength; i++) {
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

let mixedTypeNestedArray = [
  "b",
  3,
  undefined,
  [[{ a: "a" }]],
  [null],
  "a",
  [[[2]], null, "hello"],
];
assert.deepEqual(flatten(mixedTypeNestedArray), [
  "b",
  3,
  undefined,
  {
    a: "a",
  },
  null,
  "a",
  2,
  null,
  "hello",
]);

let emptyArray = [];
assert.deepEqual(flatten(emptyArray), []);

let notAnArray = 5;
assert.deepEqual(flatten(notAnArray), []);

assert.deepEqual(flatten(undefined), []);

assert.deepEqual(flatten(null), []);

//Testing End

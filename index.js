/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// 2
// Change the id method in index.js to return your student ID.
function id() {
  return "up2274439";
};

// 3
// 3 Change the fn method in index.js to return your first name.
function fn() {
  return 'First';
};

// 4
// Change the sn method in index.js to return your surname (family name).
function sn() {
  return 'Last';
};

// 5
// Create an add function that accepts two parameters called a and b, and returns their sum.
function add(a, b) {
  return a + b;
};

// 6
// Create a subtract function that accepts two parameters, a and b, and subtracts b from a and returns the result.
function subtract(a, b) {
  return a - b;
};

// 7
// Create a checkObject function that accepts an object called obj as a parameter and sets the object's property `checked` to `true`.
function checkObject(obj) {
  obj.checked = true;
  return obj;
};

// 8
// Create a `checkObjectInside` function that accepts an object called `obj` as a parameter and if that object has an object value in its `data` property
// it sets *that* inner object's property `checked` to `true`
function checkObjectInside(obj) {
  if (obj.hasOwnProperty("data")) {
    obj.data.checked = true;
  };
  return obj;
};

// 9
// Create an arraySet function that accepts three parameters `arr`, `i` and `n`.
// The first one is an array and the second one an index.
// The function should place the value of the third parameter into the array at an index specified by the second parameter,
// if (and only if) such an index is already in the array. Note that your function does not need to return a value because the array is modified directly.
// Create an arraySet function that accepts three parameters `arr`, `i` and `n`. The first one is an array and the second one an index. The function should place the value of the third parameter into the array at an index specified by the second parameter,
// if (and only if) such an index is already in the array. Note that your function does not need to return a value because the array is modified directly.
function arraySet(arr, i, n) {
  let a = 1;
};
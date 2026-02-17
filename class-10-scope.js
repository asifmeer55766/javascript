// multiple types of scope in js
// 1 global
// 2 function
// 3 block scope
// 4 module scope
// 5 lexical scope
// 6 scope chain

// interview questions

// ======================================

var x = 10;

function test() {
  var x = 20;
  console.log(x);
}

test();
console.log(x);
// ======================================
if (true) {
  var a = 5;
}
console.log(a);
// ======================================
if (true) {
  let b = 10;
}
console.log(b);
// ======================================
function demo() {
  console.log(x);
  var x = 5;
}
demo();
// ======================================
let x = 10;

function outer() {
  let x = 20;
  function inner() {
    console.log(x);
  }
  inner();
}

outer();
// ======================================
let a = 1;

function first() {
  let b = 2;
  function second() {
    let c = 3;
    console.log(a, b, c);
  }
  second();
}
first();
// ======================================
let x = 10;

{
  let x = 20;
  console.log(x);
}

console.log(x);

// ======================================

let x = 10;

{
  var x = 20;
}

console.log(x);

// ======================================

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const fn1 = counter();
fn1();
fn1();

// ======================================

// file1.js
let value = 10;
export function getValue() {
  return value;
}

// file2.js
import { getValue } from "./file1.js";
console.log(getValue());

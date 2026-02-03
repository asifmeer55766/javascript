// 1
let a = 5;
let b = "5";
console.log(a == b);
console.log(a === b);

// 2
let x = 10;

if (x) {
  console.log("A");
} else {
  console.log("B");
}

// 3
let count = 0;

console.log(count++);
console.log(++count);

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);

// 4
let a = 0;
let b = false;

if (a == b) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

// 5
let x = 5;

if (x++ > 5) {
  console.log("Greater");
} else {
  console.log("Smaller");
}
console.log(x);

// 6
let value = "0";

switch (value) {
  case 0:
    console.log("Number 0");
    break;
  case "0":
    console.log("String 0");
    break;
  default:
    console.log("Default");
}

// 7

let a = 10;

console.log(a > 5 && a < 15);
console.log(a < 5 || a > 20);

// 8
let x = 0;

if (x && ++x) {
  console.log("True");
} else {
  console.log("False");
}
console.log(x);

// 9
let a = 1;

if ((a = 0)) {
  console.log("IF");
} else {
  console.log("ELSE");
}

// 10
let x = 5;
let y = 10;

console.log(x > y ? x++ : ++y);
console.log(x, y);

// 11
let a = 0;

if (a++ && ++a) {
  console.log("YES");
} else {
  console.log("NO");
}

console.log(a);

// 12
let x = 1;

switch (x++) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  default:
    console.log("Default");
}

// 13

let a = 2;

if (a++ === 2 || ++a === 4) {
  console.log(a);
}

// 14
let x = 0;

while (x < 3) {
  console.log(x++);
}

// 15

let a = 1;

for (a; a <= 3; a++) {
  if (a === 2) continue;
  console.log(a);
}

// 16

let a = 0;

if (++a || (a++ && ++a)) {
  console.log(a);
}

// 17
let x = 5;

console.log(x++ > 5 ? (x < 7 ? "A" : "B") : "C");

// 18
function test() {
  var a = 10;
}
console.log(a);

// 19

let x = 5;

function update() {
  x = 10;
}

update();
console.log(x);

// 20
let a = 1;

function outer() {
  let a = 2;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();

// 21

function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();

// 22
var x = 1;

function test() {
  console.log(x);
  var x = 2;
}

test();

//23

let obj1 = { name: "JS" };
let obj2 = obj1;

obj2.name = "React";

console.log(obj1.name);

// 24

let arr = [1, 2, 3];

function modify(a) {
  a.push(4);
}

modify(arr);
console.log(arr);

// 25
let a = { x: 1 };
let b = { x: 1 };

console.log(a == b);
console.log(a === b);

// 26
const user = {
  name: "Asif",
  skills: ["JS", "React", "Node"],
};

const {
  skills: [first, ...rest],
} = user;

console.log(first);
console.log(rest);

// 27
const arr = [{ n: 1 }, { n: 2 }];

const newArr = arr.map((obj) => {
  obj.n += 1;
  return obj;
});

console.log(arr);
console.log(newArr);

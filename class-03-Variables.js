// Question no 1
function testVar() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2 (unexpected if you expected block scope)
}
testVar();

// Question no 2
function scopeTest() {
  var x = 1;
  let y = 2;

  if (true) {
    var x = 10;
    let y = 20;
    console.log(x, y);
  }

  console.log(x, y);
}

scopeTest();
// 10 20 and 10 2 ✅

// Question no 3
console.log(aVar);
console.log(aLet);
console.log(aConst);

var aVar = 5;
let aLet = 10;
const aConst = 15;
// undefined, ReferenceError, ReferenceError ✅

//Question no 4
const user = { name: "Asif" };

user.name = "Ali";
console.log(user);

user = { name: "Ahmed" }; // What happens here?
// { name: "Ali" }
// TypeError: Assignment to constant variable

//Question no 5
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}
// var i: 3 var i: 3 var i: 3 ✅

// let j: 0 let j: 1 let j: 2 ✅

//Question no 6
function hoistTest() {
  console.log(a);
  var a = 10;
  console.log(a);
}

hoistTest();
// undefined
// 10

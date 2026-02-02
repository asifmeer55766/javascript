const testVariable = "hello this is test string ";
console.log(testVariable);
// 2
console.log(typeof null); // object
let a = 10;
let b = a++;
console.log(a, b); // a = 11, b = 10
// 3
console.log(1 + "2" + 3); // 123
console.log([] == false); // true -> []="" => 0 and false is also = 0
// 4
var x = 5;

(function () {
  console.log(x);
  var x = 10;
})();
// 5

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000); //3, 3, 3
}
// 6
const obj = { a: 1, b: 2 };
const obj2 = obj;
obj2.a = 5;

console.log(obj.a); // 5

// 7

console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
// output
// start
// end
// promise microtask
// timeout macrotask

// 8
Promise.resolve()
  .then(() => {
    console.log(1);
    return Promise.resolve(2);
  })
  .then(console.log);

console.log(3);

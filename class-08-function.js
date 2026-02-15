// types of function in js
// named function
Hello();
function Hello() {
  console.log("Hello and Welcome");
}

// function declaration => function declared with name and value
function print(a, b) {
  return a + b;
}
console.log(print(1, 2));

// Anonymous Functions => function witout name
const greet = function () {
  console.log("AOA");
};
greet();

// Arrow function  => shorter syntax of fuction expression
const hello = () => {
  console.log("I am an arrow function ");
};
hello();

// callback function => function passed as argumentes to another function
const HelloCallback = (name, callback) => {
  console.log("Hello : ", name);
  callback();
};
const sayHi = () => {
  setTimeout(() => {
    console.log(" how are you doing today");
  }, 2000);
};
HelloCallback("Ali", sayHi);

// HOF or HOC in react => takes a function/Components as argument and return a function in result
// map filter reduce methods are HOF
// question add 2 on each element of array and return the total sum of only even numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr
  .map((item) => item + 2)
  .filter((item) => item % 2 == 0)
  .reduce((acc, next) => acc + next);
console.log(result);

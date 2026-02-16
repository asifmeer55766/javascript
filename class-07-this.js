// const name = "ali";
// // in browser name refers to window.name = ali
// // but in Node js this refer to {} so it will be undefind
// const obj = {
//   name: "Ahmad",
//   printName: () => {
//     console.log("name is:", this.name);
//   },
// };

// console.log(obj.printName());

// console.log([] == ![]);
// let a = 10;

// function test() {
//   console.log(a);
//   let a = 20;
// }

// test();

// {
//   let a = 10;
//   var b = 20;
// }

// console.log(b);
// console.log(a);
for (var i = 1; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

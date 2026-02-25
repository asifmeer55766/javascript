// let a = 100;
// let z = ++a;
// console.log(a + z);

// let str = "my name is asif";
// let words = str
//   .split(" ")
//   .map((word) => word.split("").reverse().join(""))
//   .join(" ");
// console.log(words);

// let name = "asif hussaiaaaan";
// let total = 0;
// let count = name.split("").map((char) => {
//   if (char === "a") {
//     total++;
//   }
// });
// console.log(total);

// const arr = [1, 2, 3, 4, 5];

// function abc(b, ...a) {
//   console.log(a);
// }
// abc(6, 7);

const arr = [1, "a", 2, 3, "d", 4, 5];
let num = [];
let str = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (typeof arr[i] === "string") {
    str.push(arr[i]);
  } else {
    num.push(arr[i]);
  }
}
console.log(str);
console.log(num);

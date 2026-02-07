// const arr = [1, 2, 3, 4];
// const arrSplice = arr.splice(1, 2, 65, 55);
// console.log(arrSplice);
// console.log(arr);

// console.log(arr.sort().reverse());
// const arr2 = [1, 3, 4, [2, 3], [5, 4, [1, 2, [44], 3], 3]];
// const flatArray = arr2.flat(3); //1,2,3 defines level of nested array
// console.log(flatArray);

// const settings = {
//   theme: "dark",
//   options: ["a", "b"],
// };

// const newSettings = settings;
// newSettings.options.push("c");

// console.log(settings.options);

// question no 8
// const users = [
//   { name: "Ali", active: false },
//   { name: "Sara", active: false },
//   { name: "Zain", active: false },
//   { name: "Zain", active: false },
// ];

// let count = 0;
// const totalActive = users.map((item) => {
//   if (item.active === true) {
//     count++;
//   }
// });
// console.log(count);

// 9
// cart: [
//     { item: "Pen", qty: 5 },
//     { item: "Book", qty: 1 }
//   ]

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
// ];

// const prices = products.map((p) => {
//   p.price * 2;
// });

// console.log(prices);

// const employees = [
//   { id: 1, name: "Asif" },
//   { id: 2, name: "Bilal" },
//   { id: 3, name: "Usman" },
// ];

// employees.map((item) => {
//   console.log(item.name);
// });

// const ages = [12, 18, 25, 30];

// const adults = ages.filter((age) => {
//   return age >= 18;
// });

// console.log(adults);

// const products = [
//   { name: "Pen", stock: 10 },
//   { name: "Book", stock: 0 },
//   { name: "Pencil", stock: 5 },
// ];

// const result = products.some((item) => {
//   if (item.stock === 0) {
//     return item;
//   }
// });
// console.log(result);

// const data = [1, 2, 3, 4, 5];

// const output = data
//   .filter((n) => n % 2 === 0)
//   .map((n) => n * 3)
//   .slice(0, 1);

// console.log(output);

const data = JSON.parse('{"name":"Ali"}');
console.log(data);
function add(a, b) {
  const sum = a + b;
  return sum;
}
console.log(add(2, 3));

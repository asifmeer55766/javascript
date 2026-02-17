// const obj = {
//   name: "Asif",
//   age: 23,
//   rollNo: 234,
//   address: {
//     city: "skardu",
//   },
// };
// const newObj = { ...obj }; //copies only the first layer
// newObj.address.city = "Islamabad";
// console.log("original object", obj);
// console.log("shallow copy object", newObj);

// const original = {
//   name: "Asif",
//   address: {
//     city: "Lahore",
//   },
// };

// const shallowCopy = { ...original };

// shallowCopy.name = "Ali";
// shallowCopy.address.city = "Karachi";

// console.log(original.name); // "Asif"
// console.log(original.address.city); // "Karachi" ❌ (changed)

/*
ways to creat shallow copy 
{ ...obj }            // Object spread
Object.assign({}, obj)
arr.slice()
[...arr]
Array.from(arr)

*/

// deep copy

const addresses = {
  address1: "Karachi",
  address2: "lahore",
};
const deepCopy = structuredClone(addresses);
deepCopy.address1 = "changed city name Islamabad";
console.log(deepCopy); //it will change
console.log(addresses); // it does't change

// Question 1 – Object Reference Trap


const a = { x: 1 };
const b = a;
b.x = 5;

console.log(a.x);

// 🔹 Question 2 – Object.freeze (Shallow Freeze)



const user = Object.freeze({
  name: "Asif",
  address: { city: "Lahore" }
});

user.address.city = "Karachi";

console.log(user.address.city);

// 🔹 Question 3 – Object.seal Behavior


const obj = { a: 1 };

Object.seal(obj);
obj.a = 10;
obj.b = 20;

console.log(obj);

// 🔹 Question 4 – Object.assign Mutation



const target = { a: 1 };
const source = { b: 2 };

const result = Object.assign(target, source);

console.log(target === result);

// 🔹 Question 5 – Object.entries Order



const data = { 2: "b", 1: "a", name: "JS" };

console.log(Object.keys(data));

// 🔹 Question 6 – Destructuring with Rename



const user = { name: "Asif", age: 25 };

const { name: userName } = user;

console.log(userName);

// 🔹 Question 7 – Computed Property Name



const key = "score";

const obj = {
  key: 10,
  [key]: 20
};

console.log(obj.key, obj.score);

// 🔹 Question 8 – WRITE CODE (No Output Given)


[1, 2, 3, 4]

Given:
const obj = {
  a: 3,
  b: 1,
  c: 4,
  d: 2
};


// 🔹 Question 9 – WRITE CODE (Sorting)


[1, 2, 3, 4]

Given:
const arr = [4, 3, 2, 1];




// 🔹 Question 10 – Nested Destructuring



const person = {
  name: "Ali",
  address: {
    city: "Islamabad"
  }
};

const {
  address: { city }
} = person;

console.log(city);

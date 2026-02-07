// simple example

// console.log("implementation example of promise");
// const promise = new Promise((resolve, reject) => {

//   if (resolve) {
//     console.log("promise resolve true : success");
//   } else {
//     console.log("promise reject");
//   }
// });

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const fetchData = new Promise((resolve, reject) => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});
console.log("fetchdata : ", fetchData);

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

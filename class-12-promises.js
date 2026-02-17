const API_URL = "https://dummyjson.com/carts";

const promise = new Promise((resolve, reject) => {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        reject("Failed to fetch");
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));

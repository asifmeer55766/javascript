// example for promise in javascript
const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";
// fetch api data using promies
/*const fetchData = new Promise((resolve, reject) => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});
fetchData.then((data) => console.log(data)).catch(console.log("error"));
*/
// ========================================================================
// fetch same api data using async await
/*const fetchApi = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("api data using async and await ", data);
  } catch (error) {
    console.log(error);
  }
};

fetchApi();*/
// ========================================================================
// question no 3
/*const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId || userId <= 0) {
        reject("invalid user Id");
      } else {
        resolve({
          id: userId,
          name: "Asif Hussain",
          role: "Developer",
        });
      }
    }, 2000);
  });
};
fetchUserData(-6)
  .then((data) => {
    console.log("user name : ", data.name);
    console.log("user name : ", data.role);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("request completed");
  });*/
// ========================================================================

/* question no 4 ,Problem Statement: Order Payment Processing Using Promises. 
You need to simulate an online order payment process using JavaScript Promises.*/

const processPayment = (order) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (
        !order ||
        typeof order.orderId !== "number" ||
        order.amount <= 0 ||
        (order.paymentMethod !== "card" && order.paymentMethod !== "upi")
      ) {
        rej("Payment failed");
      } else {
        res({
          orderId: order.orderId,
          status: "Success",
          message: "Payment processed successfully",
        });
      }
    }, 1500);
  });
};
processPayment({
  orderId: 101,
  amount: 10,
  paymentMethod: "upi",
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error, "Error"))
  .finally(() => console.log("Payment request completed"));

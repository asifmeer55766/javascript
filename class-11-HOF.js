// const HOF = (callback) => {
//   console.log("HOF");
//   return callback;
// };
// const passFun = () => {
//   console.log("i am from function passed as argument ");
// };
// const fn = HOF(passFun);
// fn();

/*
Scenario: Role-Based Access Control (RBAC)
Problem

You have an app where different users have different permissions:

admin → can delete users

editor → can edit content

viewer → can only read

You want one reusable function that:

checks permission

then decides whether to execute an action
*/

const authorizedUser = (userRoll, actionFunction) => {
  return function (user) {
    if (user === userRoll) {
      return actionFunction(user);
    } else {
      console.log("invalid user , access denied");
    }
  };
};

const editPost = (user) => {
  console.log(user, "can edit post");
};
const viewPost = (user) => {
  console.log(user, "can view post ");
};

const admin = authorizedUser("admin", editPost);
const user = authorizedUser("user", viewPost);
user("user");

const createUser = (name, role) => {
  const User = {
    getRole: function () {
      return role;
    },
    promote: function (newRole) {
      return (role = newRole);
    },
  };
  return User;
};

const user1 = createUser("Ali", "viewer");
const user2 = createUser("Asif", "editor");

console.log(user1.getRole()); // "viewer"
user1.promote("admin");
console.log(user1.getRole()); // "admin"

// Direct access should fail
console.log(user1.role); // undefined

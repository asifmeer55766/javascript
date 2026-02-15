const name = "ali";
// in browser name refers to window.name = ali
// but in Node js this refer to {} so it will be undefind
const obj = {
  name: "Ahmad",
  printName: () => {
    console.log("name is:", this.name);
  },
};

console.log(obj.printName());

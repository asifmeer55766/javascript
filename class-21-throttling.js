let btn = document.getElementById("btn");
const arr = ["asif", "ali", "ahmad", "akra", "ali", "asif"];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let text = document.getElementById("text").value.toLowerCase();
  let result = arr.filter((name) => name.includes(text));
  console.log(result.length ? result : "not found ");

  //   console.log(text);
});

let paraById = document.getElementById("para");

console.log("result ", paraById.innerHTML);

let paraByClassName = document.getElementsByClassName("para");
for (let i = 0; i < paraByClassName.length; i++) {
  console.log(paraByClassName[i].textContent);
}
// we can not use foreach and map method on paraByClassName because it return htmlcollection not direct array so first we need to convert it into an array then loop it

[...paraByClassName].forEach((item) => console.log(item.textContent));

const para3 = document.querySelector(".para3");
console.log(para3.textContent);

// example of querySelectorAll

const allP = document.querySelectorAll(".para");
[...allP].forEach((item) => console.log(item.textContent));

// task , show this array element in list form in html page usingn only js ["ali","ahmad","akram","raza","qasim"]
const arr = ["ali", "ahmad", "akram", "raza", "qasim"];
let div = document.createElement("div");
let ul = document.createElement("ul");
arr.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

div.appendChild(ul);
document.body.appendChild(div);

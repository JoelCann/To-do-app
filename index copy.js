let toDoList = ["eat rice", "go home", "sleep"];

console.log(toDoList);

//grabbing the button
let showBtn = document.querySelector("#show-btn");

// ES5 syntax for creating functions
function display() {
  // alert(`the function has been called`)
}

// function addItem(x, y) {
//   let total = x + y;
//   console.log(`${x} + ${y} = ${total}`);
// }
//ES6 syntax for creating functions

// (display) => {
//   alert(`the function has been called`);
// };

//add a click event to the view button
showBtn.addEventListener("click", display());

// addItem("2 + 5 = ", 2, 5);
// addItem("9 + 8 = ", 9, 8);
// addItem("12 + 16 = ", 12, 16);

// addItem(2, 5);
// addItem(9, 8);
// addItem(12, 16);


//Arrow functions

let addItem = (x, y) => {
  let total = x + y;
  console.log(`${x} + ${y} = ${total}`);
};

addItem(2, 5);
addItem(9, 8);
addItem(12, 16);

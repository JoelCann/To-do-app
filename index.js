let toDoList = [
  { task: "eat rice", status: "done" },
  { task: "go home", status: "undone" },
  { task: "sleep", status: "In Progress" },
  { task: "learn", status: "In Progress" },
  { task: "go to class", status: "done" },
];

const fetchToDoList = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

//grabbing the button
let showBtn = document.querySelector("#show-btn");
let listItems = document.querySelector("#list-items");

function display() {
  //add text content to li
  // for (i = 0; i <= toDoList.length; i++) {
  //   const listItem = document.createElement("li");
  //   listItem.textContent = toDoList[i];
  //   listItems.appendChild(listItem);
  // }

  toDoList.forEach((value, index, array) => {
    const listItem = document.createElement("li");
    listItem.textContent = value.task + " - " + value.status;
    listItems.appendChild(listItem);
  });
}

//add a click event to the view button
showBtn.addEventListener("click", display);

//define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all event listeners
loadEventListeners();

//functions
function loadEventListeners() {
  //add task event
  form.addEventListener("submit", addTask);
}

//add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //create new li element
  const li = document.createElement("li");

  //add class name to li
  li.className = "collection-item";

  //create text node and append to new li
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element
  const link = document.createElement("a");

  //add class names to new link
  link.className = "delete-item secondary-content";

  //add delete icon to new link
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //append new link to new li
  li.appendChild(link);

  //append the new li to ul
  taskList.appendChild(li);

  //clear input value
  taskInput.value = "";

  e.preventDefault();
}

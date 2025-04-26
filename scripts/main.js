const addButton = document.querySelector(".js-add-task");
const filtersButton = document.querySelector(".js-filters");
const taskInput = document.querySelector(".js-task").innerHTML;
const date = document.querySelector(".js-date");
let taskDOM = {
  task: taskInput.value,
  taskDate: date,
};
let tasksContainer = document.querySelector(".js-tasks");
addButton.onclick = function () {};

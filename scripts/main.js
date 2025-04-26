const addTaskButton = document.querySelector(".js-add-task");
const filtersButton = document.querySelector(".js-filters");
const task = document.querySelector(".task").innerHTML;
let date = document.querySelector(".js-date").innerHTML;
let categories = document.querySelectorAll(".js-category");
let tasksContainer = {
  task: task,
  category: categories,
  fullDate: date,
};
console.log(tasksContainer.task, tasksContainer.fullDate);

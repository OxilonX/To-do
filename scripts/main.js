const triggerAddButton = document.querySelector(".js-trigger-task");
const modal = document.querySelector(".modal");
const filtersButton = document.querySelector(".js-filters");
const closeButton = document.querySelector(".close");
const addButton = document.querySelector(".js-add-task");
const time = document.querySelector(".js-date");
const input = document.querySelector(".enter-task");
const deleteButton = document.querySelector(".js-remove-task");
let allTasksDOM = document.querySelector(".js-tasks");
let tasksContainer = [];
triggerAddButton.onclick = function () {
  modal.classList.add("open");
};
closeButton.onclick = function () {
  modal.classList.remove("open");
};
deleteButton.onclick = () => {
  tasksContainer.pop();
};
addButton.onclick = () => {
  const task = {
    taskContent: input.value,
    date: new Date(),
    completed: false,
  };
  tasksContainer.push(task);
  modal.classList.remove("open");
  input.value = "";
  console.log(tasksContainer);
  for (i = 0; i < tasksContainer.length; i++) {
    allTasksDOM.innerHTML += `
     <div class="task-container">
            <label class="checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <div class="task-infos-container">
              <div class="task-upper">
                <div>
                  <p class="task js-task">${tasksContainer[i].taskContent}</p>
                </div>
                <img class="icon" src="images/icons8-close-50.png" alt="" />
              </div>
              <div class="task-lower">
                <time class="task-date js-date">${tasksContainer[i].date}</time>
              </div>
            </div>
          </div>
    `;
  }
};

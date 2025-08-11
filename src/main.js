const addTaskButton = document.getElementById("add-task-button");
const todoTaskContainer = document.getElementById("todo-tasks-container");

const newTodoForm = document.getElementById("new-todo-form");

addTaskButton.addEventListener("click", (event) => {
  todoTaskContainer.dataset;
  console.log(todoTaskContainer.dataset.showForm);
  todoTaskContainer.dataset.showForm = true;
  console.log(todoTaskContainer.dataset.showForm);
});

newTodoForm.onsubmit = (event) => {
  event.preventDefault();
  console.log(event);
  const formData = new FormData(newTodoForm);

  const inputData = Object.fromEntries(formData.entries());
  console.log(inputData);
};

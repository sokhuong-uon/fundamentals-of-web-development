const addTaskButton = document.getElementById("add-task-button");
const todoTaskContainer = document.getElementById("todo-tasks-container");

const newTodoForm = document.getElementById("new-todo-form");

addTaskButton.addEventListener("click", () => {
  todoTaskContainer.dataset.showForm = true;
});

newTodoForm.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(newTodoForm);

  const inputData = Object.fromEntries(formData.entries());
};

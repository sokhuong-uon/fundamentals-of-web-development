import { createTodoItem } from "./create-todo-item";

const addNewTodoButton = document.getElementById("add-new-todo-button");

addNewTodoButton.onclick = () => {
  const todoSection = document.getElementById("todo-section");
  todoSection.dataset.isAdding = true;

  const newTaskForm = document.getElementById("new-task-form");
  prepareForm(newTaskForm);

  newTaskForm.children.namedItem("new-task").focus();
};

/**
 * @param {HTMLFormElement} formElement
 */
const prepareForm = (formElement) => {
  formElement.onsubmit = (submitEvent) => {
    submitEvent.preventDefault();

    const formData = new FormData(formElement);
    const values = Object.fromEntries(formData);
    const newTask = values["new-task"];

    const todoItem = createTodoItem(newTask);

    const todoList = document.getElementById("todos");
    todoList.prepend(todoItem);

    formElement.reset();

    const todoSection = document.getElementById("todo-section");
    todoSection.dataset.isAdding = false;
  };
};

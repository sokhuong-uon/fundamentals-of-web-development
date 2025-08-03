import { createTodoItem } from "./create-todo-item";

const addNewTodoButton = document.getElementById("add-new-todo-button");
const addNewDoingTaskButton = document.getElementById("add-new-doing-task-button");

addNewTodoButton.onclick = () => {
  const todoSection = document.getElementById("todo-section");
  todoSection.dataset.isAdding = true;

  const todoListElement = document.getElementById("todos");

  const newTaskForm = document.getElementById("new-task-form");
  prepareForm(newTaskForm, todoSection, todoListElement);

  newTaskForm.children.namedItem("new-task").focus();
};

addNewDoingTaskButton.onclick = () => {
  const todoSection = document.getElementById("doing-section");
  todoSection.dataset.isAdding = true;

  const doingTaskList = document.getElementById("doing-tasks");

  const newTaskForm = document.getElementById("new-doing-task-form");
  prepareForm(newTaskForm, todoSection, doingTaskList);

  newTaskForm.children.namedItem("new-task").focus();
};

/**
 * @param {HTMLFormElement} formElement
 * @param {HTMLElement} taskListSection
 * @param {HTMLUListElement} taskListElement
 */
const prepareForm = (formElement, taskListSection, taskListElement) => {
  formElement.onsubmit = (submitEvent) => {
    submitEvent.preventDefault();

    const formData = new FormData(formElement);
    const values = Object.fromEntries(formData);
    const newTask = values["new-task"];

    const todoItem = createTodoItem(newTask);

    taskListElement.prepend(todoItem);

    formElement.reset();

    taskListSection.dataset.isAdding = false;
  };
};

import { createTodoItem } from "./create-todo-item";

const addNewTodoButton = document.getElementById("add-new-todo-button");
const addNewDoingTaskButton = document.getElementById("add-new-doing-task-button");

addNewTodoButton.onclick = () => {
  const todoSection = document.getElementById("todo-section");
  todoSection.dataset.isAdding = true;

  const todoListElement = document.getElementById("todos");

  const newTaskForm = document.getElementById("new-task-form");
  prepareForm(newTaskForm, todoSection, todoListElement);

  const newTaskInput = newTaskForm.children.namedItem("new-task");
  newTaskInput.focus();

  newTaskInput.onblur = (event) => {
    const relatedTarget = event.relatedTarget;

    if (!relatedTarget || !newTaskForm.contains(relatedTarget)) {
      todoSection.dataset.isAdding = "false";
    }
  };
};

addNewDoingTaskButton.onclick = () => {
  const doingSection = document.getElementById("doing-section");
  doingSection.dataset.isAdding = true;

  const doingTaskList = document.getElementById("doing-tasks");

  const newTaskForm = document.getElementById("new-doing-task-form");
  prepareForm(newTaskForm, doingSection, doingTaskList);

  const newTaskInput = newTaskForm.children.namedItem("new-task");
  newTaskInput.focus();

  newTaskInput.onblur = (event) => {
    const relatedTarget = event.relatedTarget;

    if (!relatedTarget || !newTaskForm.contains(relatedTarget)) {
      doingSection.dataset.isAdding = "false";
    }
  };
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

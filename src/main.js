import { Observable } from "./observable.js";
import { todoTaskObserver } from "./todo-task-observer.js";
import { inProgressTaskObserver } from "./in-progress-task-observer.js";
import { doneTaskObserver } from "./done-task-observer.js";

const todoTasks = []
const inProgressTasks = []
const doneTasks = []

const todoTask1 = new Observable();

todoTask1.addSubscriber(todoTaskObserver);
todoTask1.addSubscriber(inProgressTaskObserver);
todoTask1.addSubscriber(doneTaskObserver);

todoTask1.updateStatus("done");


const addTaskButton = document.getElementById("add-task-button");
const todoTaskContainer = document.getElementById("todo-tasks-container");

const todoList = todoTaskContainer.querySelector(".list");

const newTodoForm = document.getElementById("new-todo-form");

addTaskButton.addEventListener("click", () => {
  todoTaskContainer.dataset.showForm = true;
  
  const todoInputElement = newTodoForm.querySelector("[name='new-todo']");
  todoInputElement.focus();
});

newTodoForm.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(newTodoForm);

  const inputData = Object.fromEntries(formData.entries());
  
  if (inputData["new-todo"] === "") {
    alert("Please enter a task");
    return;
  }


  const todoItemTemplate = document.getElementById("todo-item-template");
  const list = todoItemTemplate.content.cloneNode(true);
  const todoItemText = list.querySelector(".todo-item-text");
  todoItemText.innerText = inputData["new-todo"];
  console.log(todoItemText);
  todoList.appendChild(list);

  newTodoForm.reset();
};

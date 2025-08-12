const addTaskButton = document.getElementById("add-task-button");
const todoTaskContainer = document.getElementById("todo-tasks-container");

const todoList = todoTaskContainer.querySelector(".list");

const newTodoForm = document.getElementById("new-todo-form");

addTaskButton.addEventListener("click", () => {
  todoTaskContainer.dataset.showForm = true;
  const newTodoInput = newTodoForm.querySelector('[name="new-todo"]');
  newTodoInput.focus();

  newTodoForm.onblur = function () {
    todoTaskContainer.dataset.showForm = false;
  };
});

/**
 *
 * @param {string} text
 * @returns {HTMLLIElement}
 */
function createTodoItemElement(text) {
  const liTemplate = document.getElementById("todo-item-template");
  const li = liTemplate.content.cloneNode(true);

  const textElement = li.querySelector(".text");
  textElement.innerText = text;

  const editButton = li.querySelector(".edit");
  editButton.onclick = function () {
    textElement.classList.remove("line-clamp-5");
    textElement.contentEditable = true;
    textElement.focus();

    textElement.onblur = function () {
      textElement.classList.add("line-clamp-5");
      textElement.contentEditable = false;
    };
  };

  return li;
}

newTodoForm.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(newTodoForm);

  const inputData = Object.fromEntries(formData.entries());
  if (inputData["new-todo"] == "") return alert("Please enter something");
  const todoItem = createTodoItemElement(inputData["new-todo"]);
  todoList.appendChild(todoItem);
  newTodoForm.reset();
};

/**
 * @param {string} taskText
 * @returns {HTMLLIElement} Todo item
 */
export function createTodoItem(taskText) {
  if (taskText === "") return;

  const todoItemTemplate = document.getElementById("todo-item-template");
  const todoItemElement = todoItemTemplate.content.cloneNode(true);

  const textSpanElement = todoItemElement.querySelector(".todo-text");
  const deleteButton = todoItemElement.querySelector(".delete-btn");

  textSpanElement.textContent = taskText;

  /**
   * @param {PointerEvent} clickEvent
   */
  deleteButton.onclick = (clickEvent) => {
    clickEvent.target.closest("li").remove();
  };

  return todoItemElement;
}

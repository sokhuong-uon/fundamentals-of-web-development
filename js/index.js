const form = document.getElementById('todo-form')
const input = document.getElementById('new-todo')
const todoList = document.getElementById('todos')
console.log("todos list element: ",todoList)

form.onsubmit = (event) => {
  event.preventDefault();

  const newTodoContent = input.value;

  // Create li element
  const li = document.createElement('li')

  /**
   * Add new todo content to the li element
   */
  li.innerText = newTodoContent

  // Add li to ul (todo list)
  todoList.append(li)
  
  // Clear input value
  input.value = ''
}
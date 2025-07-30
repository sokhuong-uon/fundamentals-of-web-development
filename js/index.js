const form = document.getElementById('todo-form')
const input = document.getElementById('new-todo')
const todoList = document.getElementById('todos')
console.log("todos list element: ",todoList)

const addCloseButtonToTodoItem = (todoItem) => { 
  const button = document.createElement('button')  
  button.innerText = 'X'
  
  todoItem.append(button)
}

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
  li.className = 'flex justify-between max-w-44'
  
  // Append X button to todo Item
  addCloseButtonToTodoItem(li)
  
  // Clear input value
  input.value = ''
}
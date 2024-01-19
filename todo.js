let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let inputDate = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  todoList.push({ items: todoItem, dueDate: todoDate });
  inputElement.value = '';
  inputDate.value = '';
  showItem();
  localStorage.setItem('todoList',JSON.stringify(todoList));
}

function showItem() {
  let displayElement = document.querySelector('.todo-container');
  let newHtml = '';

  if (todoList.length > 0) {
    for (let i = 0; i < todoList.length; i++) {
      let { items, dueDate } = todoList[i];
      newHtml += `
        <span>${items}</span>
        <span>${dueDate}</span>
        <button class="btn" onclick="removeItem(${i});">Delete</button>
      `;
    }
  } else {
    newHtml = "No items to display.";
  }

  displayElement.innerHTML = newHtml;
}

function removeItem(index) {
  todoList.splice(index, 1);
  showItem();
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Initial call to display the items
showItem();
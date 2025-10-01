const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const inputField = document.getElementById("input-field");

let todoCount = 0;
let uncheckedCount = 0;

function updateCounts() {
  itemCountSpan.textContent = todoCount;
  uncheckedCountSpan.textContent = uncheckedCount;
}

function newTodo() {
  const todoText = inputField.value;
  if (!todoText) return;
  const todoItem = document.createElement("li");
  todoItem.className = classNames.TODO_ITEM;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      uncheckedCount--;
    } else {
      uncheckedCount++;
    }
    updateCounts();
  });

  const textSpan = document.createElement("span");
  textSpan.className = classNames.TODO_TEXT;
  textSpan.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    if (!checkbox.checked) uncheckedCount--;
    todoCount--;
    todoItem.remove();
    updateCounts();
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(textSpan);
  todoItem.appendChild(deleteButton);

  list.appendChild(todoItem);

  todoCount++;
  uncheckedCount++;
  updateCounts();
}

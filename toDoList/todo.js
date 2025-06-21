
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todolist = document.getElementById("todo-list");
const tasks = [];

addTaskButton.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);  
  todoInput.value = ""

  const li = document.createElement("li");  
  li.className = "task-item";
  li.innerHTML = `<span>${newTask.text}</span>
                    <button class="delete-btn">Delete</button>`;
  li.querySelector(".delete-btn").addEventListener("click", () => {
    todolist.removeChild(li);
  });

  todolist.appendChild(li);
});
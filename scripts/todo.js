import { baseUrl, todoUrl } from "./baseUrl.js";

let todoForm = document.getElementById("todoModal");

todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let todoTask = todoForm.todoTask.value;
  let todoPriority = todoForm.todoPriority.value;

  await fetch(todoUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todoTask,
      todoPriority,
      userId: JSON.parse(localStorage.getItem("loginData")).id,
    }),
  });

  alert("Todo added.");
  loadTodos();
});

async function deleteTodo(id) {
  await fetch(`${todoUrl}/${id}`, {
    method: "DELETE",
  });
  alert("Todo deleted.");
  loadTodos();
}

async function loadTodos() {
  const response = await fetch(todoUrl);
  const todos = await response.json();
  const userTodos = todos.filter(
    (todo) => todo.userId === JSON.parse(localStorage.getItem("loginData")).id
  );
  // console.log(userTodos);
  let todoCont = document.getElementById("todoCont");

  todoCont.innerHTML = "";
  userTodos.map((el) => {
    let card = document.createElement("div");
    card.textContent = el.todoTask;
    card.classList.add("card");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("dltBtn");

    deleteBtn.addEventListener("click", () => {
      deleteTodo(el.id);
    });

    card.append(deleteBtn);
    todoCont.append(card);
  });
}

loadTodos();

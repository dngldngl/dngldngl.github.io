const toDoForm = document.querySelector(".toDo-js"),
  toDoInput = toDoForm.querySelector("input"),
  toDoText = document.querySelector(".js-toDoList");

let toDo = [];

function saveToDo() {
  localStorage.setItem("ToDo", JSON.stringify(toDo));
}

function removeText(event) {
  const btn = event.target;
  const li = btn.parentNode;
  console.log(li);
  toDoText.removeChild(li);
  const cleanToDo = toDo.filter(function(toDo){
    return toDo.id !== Number(li.id);
  });
  console.log(cleanToDo);
  toDo = cleanToDo;
  saveToDo();
}

function writeText(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDo.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", removeText);
  span.innerText = text;
  li.id = newId;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoText.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDo.push(toDoObj);
  saveToDo();
}

function toDoInputText(event) {
  event.preventDefault();
  const currentText = toDoInput.value;
  writeText(currentText);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedToDos = localStorage.getItem("ToDo");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDos) {
      writeText(toDos.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", toDoInputText);
}

init();
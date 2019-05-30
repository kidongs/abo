const toDoForm = document.querySelector('.js_toDoForm'),
  toDoAdd = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js_toDoList');

const TODOS_LS = "toDos",
DELBTN_CN = "delBtn";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function deleteToDo(event){
  const delTarget = event.target.parentNode;
  toDoList.removeChild(delTarget);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(delTarget.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function printToDo(text){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  const toDoID = toDos.length+1;

  span.innerText = text;
  delBtn.innerText = "Delete";
  delBtn.classList.add(DELBTN_CN);
  delBtn.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = toDoID;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: toDoID
  }
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const toDo = toDoAdd.value;
  printToDo(toDo);
  toDoAdd.value="";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos!==null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      printToDo(toDo.text);
    });
  }
}

function runit() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

runit();

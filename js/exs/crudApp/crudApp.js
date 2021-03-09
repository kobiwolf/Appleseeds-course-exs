const getEl = (type) => document.querySelector(type);
const getElAll = (type) => document.querySelectorAll(type);
const create = (type) => document.createElement(type);
const addTask = getEl('.add');
const notesDiv = getEl('.notes');
const sortDoneBut = getEl('.sortDone');
const clearBut = getEl('.clear');
let notesList = [];
let myStorage = {};
let counter = 0;

function printOld(arrOfTask, notesList) {
  for (let i = 0; i < arrOfTask.length; i++) {
    const oldTask = arrOfTask[i];
    notesList.push(oldTask);
    const newTask = create('div');
    newTask.classList.add(`note`);
    newTask.innerHTML = `
  <h2>task</h2>
  <h3>date:${oldTask.date[0]}/${oldTask.date[1]}/${oldTask.date[2]}</h3>
  <textarea cols="15" rows="10" class='hidden'></textarea>
  <p></p>
  <label for="important">important:</label>
  <select id="important">
  <option value="1">very</option>
  <option value="2">medium</option>
  <option value="3">low</option>
  </select>
  <div class='butsDiv${oldTask.id}'></div>`;
    notesDiv.appendChild(newTask);
    const butsDiv = getEl(`.butsDiv${oldTask.id}`);
    createButDelete(newTask, butsDiv);
    const p =
      newTask.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling;
    p.innerText = oldTask.data;
    createButUpdate(newTask, butsDiv);
    createButSave(newTask, butsDiv, oldTask);
    const butComplet = createButComplete(newTask, butsDiv, oldTask);
    if (oldTask.done) butComplet.classList.add('done');
  }
}
if (window.localStorage.length) {
  myStorage = JSON.parse(window.localStorage.data);
  printOld(myStorage, notesList);
  counter = myStorage[myStorage.length - 1].id;
}
addTask.addEventListener('click', () => {
  createTask();
});
function createTask() {
  counter++;
  const newTask = create('div');
  newTask.classList.add(`note`);
  const date = new Date();
  newTask.innerHTML = `
  <h2>task</h2>
  <h3>date:${date.getFullYear()}/${date.getMonth()}/${date.getDate()}</h3>
  <textarea cols="15" rows="10" class='hidden'></textarea>
  <p></p>
  <label for="important">important:</label>
  <select id="important">
  <option value="1">very</option>
  <option value="2">medium</option>
  <option value="3">low</option>
  </select>
  <div class='butsDiv${counter}'></div>`;
  const noteObj = {};
  noteObj.id = counter;
  noteObj.done = false;
  noteObj.date = [date.getFullYear(), date.getMonth(), date.getDate()];
  notesDiv.appendChild(newTask);
  const butsDiv = getEl(`.butsDiv${counter}`);
  createButDelete(newTask, butsDiv);
  const butUpdate = createButUpdate(newTask, butsDiv);
  createButSave(newTask, butsDiv, noteObj);
  createButComplete(newTask, butsDiv, noteObj);
  newTask.appendChild(butsDiv);
  butUpdate.click();
}

function createButDelete(task, div) {
  const but = create('button');
  but.innerHTML = '<i class="fas fa-times"></i>';
  but.classList.add('delete');
  but.addEventListener('click', () => {
    removeEvent(task);
  });
  div.appendChild(but);
  return but;
}
function removeEvent(task) {
  task.remove();
}
function createButUpdate(task, div) {
  const but = create('button');
  but.innerHTML = '<i class="fas fa-pencil-alt">';
  but.classList.add('update');
  updateEvent(but, task);
  div.appendChild(but);
  return but;
}
function updateEvent(but, task) {
  but.addEventListener('click', () => {
    const input = task.firstElementChild.nextElementSibling.nextElementSibling;
    const p = input.nextElementSibling;
    input.value = p.innerText;
    p.innerHTML = '';
    p.classList.add('hidden');
    input.classList.remove('hidden');
    input.focus();
  });
}

function createButSave(task, div, obj) {
  const but = create('button');
  but.type = 'submit';
  but.innerHTML = 'save';
  but.classList.add('save');
  but.addEventListener('click', () => {
    saveEvent(but, task, obj);
  });

  div.appendChild(but);
  return but;
}
function saveEvent(but, task, obj) {
  const input = task.firstElementChild.nextElementSibling.nextElementSibling;
  const p = input.nextElementSibling;
  const select = p.nextElementSibling.nextElementSibling;
  if (!input.classList[0]) {
    p.innerHTML = input.value;
    input.value = '';
    p.classList.remove('hidden');
    input.classList.add('hidden');
    obj.impotarnt = select.value;

    obj.data =
      task.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
    if (notesList.length) {
      const index = notesList.findIndex((task) => task.id === obj.id);
      if (index === -1) {
        notesList.push(obj);
        localStorage.setItem('data', JSON.stringify(notesList));
      } else notesList[index] = obj;
    } else {
      notesList.push(obj);
      localStorage.setItem('data', JSON.stringify(notesList));
    }
  }
}
function createButComplete(task, div, obj) {
  const but = create('button');
  but.innerHTML = '<i class="fas fa-check"></i>';
  but.classList.add('complete');
  doneEvent(but, obj);
  div.appendChild(but);
  return but;
}
function doneEvent(but, obj) {
  but.addEventListener('click', () => {
    if (but.classList[1]) {
      but.classList.remove('done');
    } else but.classList.add('done');
    obj.done = !obj.done;
  });
}
function sortByComplete() {
  let newarr = notesList.sort((b, a) => (b.done ? -1 : 1));
  notesDiv.innerHTML = '';
  console.log(newarr);
  printOld(newarr, []);
}
function clear() {
  notesList = [];
  notesDiv.innerHTML = '';
  localStorage.clear();
}

sortDoneBut.addEventListener('click', sortByComplete);
clearBut.addEventListener('click', clear);

const list = [];
function addItem(id, name, isCompleted = false) {
  list.push({ id: id, name: name, isCompleted: isCompleted });
}
function deleteItem(id) {
  const index = findById(id);
  list.splice(index, 1);
  return;
}
function findById(id) {
  let index;
  list.find((task, i) => {
    if (task.id === id) index = i;
  });
  return index;
}
function done(id) {
  let info = findById(id);
  list[info[1]].isCompleted = true;
}
function toggle(id) {
  const index = findById(id);
  list[index].isCompleted = !list[index].isCompleted;
}
function unDone(id) {
  let info = findById(id);
  list[info[1]].isCompleted = false;
}
function getAll() {
  list.sort((b, a) => {
    if (a.isCompleted) return 1;
    return -1;
  });
  return list;
}

addItem(1, 'kobi');
addItem(2, 'judi');
addItem(3, 'uda');
toggle(2);
toggle(1);
getAll();
console.log(list);

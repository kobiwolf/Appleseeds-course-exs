const list = [];
let a = 5;
function addItem(id, name, isCompleted = false) {
  console.log(a);
  a++;
  list.push({ id: id, name: name, isCompleted: isCompleted });
}
function deleteItem(id) {
  const index = findById(id);
  list.splice(index, 1);
  return list;
}
function findById(id) {
  let index;
  list.find((task, i) => {
    if (task.id === id) index = i;
  });
  return index;
}
function toggle(id) {
  const index = findById(id);
  list[index].isCompleted = !list[index].isCompleted;
}
function getAll() {
  list.sort((b, a) => {
    if (a.isCompleted) return 1;
    return -1;
  });
  return list;
}

// addItem(1, 'kobi');
// addItem(2, 'judi');
// addItem(3, 'uda');
// toggle(1);
// toggle(1);
// getAll();
// console.log(list);

module.exports = [list, addItem, deleteItem, findById, toggle, getAll];

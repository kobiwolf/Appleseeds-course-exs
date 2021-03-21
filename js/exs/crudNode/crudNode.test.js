const [list, add, deleteItem, findById, toggle, getAll] = require('./CRUDNode');
test('check add', () => {
  add(1, 'kobi', false);
  expect(list).toEqual([{ id: 1, name: 'kobi', isCompleted: false }]);
});

test('check delete', () => {
  expect(deleteItem(1)).toEqual([]);
});
test('check findById', () => {
  add(1, 'kobi', false);
  add(3, 'kobi', false);
  add(2, 'kobi', false);
  let index = findById(3);
  expect(index).toBe(1);
});
test('check toggle from false to true ', () => {
  add(1, 'kobi', false);
  toggle(1);
  expect(list[0].isCompleted).toEqual(true);
});
test('check toggle from true to false', () => {
  add(1, 'kobi', true);
  toggle(1);
  expect(list[0].isCompleted).toEqual(false);
});
test('check getall ', () => {
  add(1, 'kobi', true);
  add(2, 'shani', true);
  add(3, 'judi', true);
  let all = getAll();
  expect(all).toEqual(list);
});

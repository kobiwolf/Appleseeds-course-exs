console.time('obj');
const obj1 = {};
for (let i = 1; i <= 100000; i++) {
  obj1[i] = i;
}
console.timeEnd('obj');

console.time('map');
const myMap = new Map();
for (let i = 1; i <= 100000; i++) {
  myMap.set(i, i);
}
console.timeEnd('map');
// ADD MOLTY VARS TO VAR-SHORTER
console.time('objFind');
console.log(obj1['560']);
console.timeEnd('objFind');

console.time('mapFind');
console.log(myMap.get(560));
console.timeEnd('mapFind');
// FINDING VALUE IN MAPS-SHORTER
console.time('mapAdd');
myMap.set('name', 'kobi');
console.timeEnd('mapAdd');

console.time('objAdd');
obj1.name = 'kobi';
console.timeEnd('objAdd');

//ADDING ONE VAR IS ALMOST THE SAME
console.time('objDelete');
delete obj1.name;
console.timeEnd('objDelete');

console.time('mapDelete');
myMap.delete('name');
console.timeEnd('mapDelete');
//DELETE IN MAP-SHORTER

let obj = {
  name: 'kobi',
  last: 'wolf',
  age: 25,
};
let arr = Object.keys(obj);
let arr2 = Object.values(obj);
obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr2[i]] = arr[i];
}
console.log(obj);

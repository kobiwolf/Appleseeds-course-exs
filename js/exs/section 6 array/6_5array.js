//ex1
let arr = [];
arr.length = 100;
arr.fill({});
console.log(arr);
//ex2
// let arr1 = Array.from({ length: 100 }, ('', index) => index);
let arr1 = Array.from({ length: 100 }, function (_noThing, index) {
  return index;
});
console.log(arr1);
//ex5
console.log(Array.isArray(arr));
//ex6
let newarr = [...arr1]; //not modifited
let newarr1 = arr1; //modifited
newarr1 = 5;
console.log(arr1);

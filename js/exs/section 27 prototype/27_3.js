Array.prototype.myOwnfilter = function (condition) {
  let arr = [];
  this.forEach((v) => {
    if (v > condition) arr.push(v);
  });
  return arr;
};
let arr = [2, 3, 4, 5];
let arr2 = arr.myOwnfilter(3);
console.log(arr2);

Array.prototype.myOwnfind = function (string) {
  let index;
  this.forEach((v, i) => {
    if (v === string && !index) index = i;
  });
  return index;
};
let arr3 = ['a', 'b', 'c', 'b'];
console.log(arr3.myOwnfind('b'));

const sumReducer = (initialValue, current) => initialValue + current;
Array.prototype.reduce2 = function (reducer, initialValue = 0) {
  let value = initialValue;

  for (let i = 0; i < this.length; i++) {
    let currentValue = this[i];
    value = reducer(value, currentValue);
  }

  return value;
};
console.log(arr4.reduce2(sumReducer));

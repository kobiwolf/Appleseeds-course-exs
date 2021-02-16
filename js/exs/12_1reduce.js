let a = [1, 2, 3, 7, 5, 4];
//ex1
let maxNum = (a) =>
  a.reduce((total, value) => (value > total ? value : total), 0);
//ex2
let sumOfEven = (arr) =>
  arr.reduce((total, value) => (value % 2 === 0 ? total + value : total), 0);
console.log(sumOfEven(a));
let avv = (arr) =>
  (arr.reduce((total, value) => total + value, 0) / arr.length).toFixed(2);
console.log(avv(a));

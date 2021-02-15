let arr1 = [1, 2, 3, 4, 5, 6];
//ex1
let doubleValues = (arr) => arr.map((value) => value * 2);
//ex2
let onlyEvenValues = (arr, newArr = []) => {
  arr.forEach((value) => {
    value % 2 == 0 && newArr.push(value);
  });
  return newArr;
};
//ex3
let showFirstAndLast = (arr, newArr = []) => {
  arr.forEach((value) => {
    typeof value === 'string' && newArr.push(value);
  });
  return [newArr[0], newArr[newArr.length - 1]];
};
console.log(showFirstAndLast([1, 'by', 'gi', 'di', 1]));
//ex4
let vowelCount = (string1, cb) => {
  obj = {};
  arrVoles = ['a', 'e', 'i', 'o', 'u'];
  string1.split('').forEach((value) => {
    arrVoles.includes(value.toLowerCase()) ? cb(value.toLowerCase(), obj) : '';
  });
  return obj;
};
function checkLetter(letter, obj) {
  obj[letter] ? obj[letter]++ : (obj[letter] = 1);
}
console.log(vowelCount('hellOo', checkLetter));
//ex5
let capitalize = (string1) =>
  string1
    .split('')
    .map((value) => value.toUpperCase())
    .join('');
console.log(capitalize('hello'));
//ex6
let shiftLetters = (string) =>
  string
    .split('')
    .map((value) => String.fromCharCode(value.charCodeAt(0) - 1))
    .join('');
console.log(shiftLetters('bcd'));
//ex7
let swapCase = (string, capitFunc) =>
  string
    .split(' ')
    .map((value, index) => (index % 2 == 0 ? value : capitFunc(value)))
    .join(' ');
let arr = 'hello world second third';
console.log(swapCase(arr, capitalize));

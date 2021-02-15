function isString(a, func) {
  typeof a === 'string' ? func(a) : console.log('not a string');
}
let a = 1;
isString(a, (argu) => {
  console.log(argu);
});
function firstWordUpperCase(setence, func) {
  let arr = setence.split(' ');
  arr[0] = arr[0].toUpperCase();
  arr = arr.join(' ');
  return func(arr);
}
console.log(
  firstWordUpperCase('hello there', (argu) => argu.replace(' ', '-'))
);

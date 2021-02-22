//ex1
function print(n) {
  for (let i = 0; i > n; i++) {
    console.log(i);
  }
}
//ex2
function countX(n, t) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    i % t === 0 && counter++;
  }
  return counter;
}
//ex3
function countEven(num) {
  return num
    .toString()
    .split('')
    .filter((value) => value % 2 == 0).length;
}
//ex4
function countEvenOnRange(num) {
  let counter = 0;
  for (let i = 111; i < num; i++) {
    i.toString()
      .split('')
      .forEach((value) => {
        value % 2 == 0 ? counter++ : '';
      });
  }
  console.log(counter);
}
countEvenOnRange(122);
//ex5
function printReverse() {
  for (let i = 100; i > 0; i -= 2) {
    console.log(i);
  }
}
//ex6
//7
function countABC(string) {
  return string.split('').reduce((obj, value) => {
    obj[value] ? obj[value]++ : (obj[value] = 1);
    return obj;
  }, {});
}
console.log(countABC('hiih'));
//8
function toUpper(string) {
  return string
    .split('')
    .map((v) => String.fromCharCode(v.charCodeAt() - 32))
    .join('');
}
console.log(toUpper('hello'));
//9
function checkEmail(email) {
  let arr = ['@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm'];
  for (let i = 0; i < email.length; i++) {
    if (email[email.length - 10 + i] !== arr[i]) {
      return false;
    }
  }
  return true;
}
//10
function checkPass(pass) {
  let a = /\d{3}/;
  let b = /[a-z]/;
  let c = /[A-Z].[A-Z]/;
  if (a.test(pass) && b.test(pass) && c.test(pass)) return true;
  return false;
}
console.log(checkPass('A1b1C2x'));
//11
function isStrike(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .sort((b, a) => b - a)
      .join('')
  );
}
console.log(isStrike(12));
//12
function aba(poly) {
  poly = poly.toString();
  debugger;
  for (let i = 0; i < poly.length / 2; i++) {
    if (poly[i] !== poly[poly.length - i - 1]) return false;
  }
  return true;
}
js;
console.log(aba(1232));
//13
function polyNum(num) {
  num = num.toString().split('');
  return num.join('') === num.reverse().join('') ? true : false;
}
console.log(polyNum(1221));
// //14
// function countChar(string) {
//   let obj = countABC(string);
//   console.log(obj);
// }
// countChar('hi');

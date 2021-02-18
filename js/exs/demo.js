// let out = function () {
//   let a = 0;
//   return function inner() {
//     a++;
//     console.log(a);
//   };
// };
// let a = out();
// a(); //1
// a(); //2
// a(); //3
// a(); //4
// let b = out();
// b(); //1
// a(); //5
// let c = a;
// c(); //6
// a(); //7

// function myFunc() {
//   let i;
//   const funcs = [];
//   for (i = 0; i < 3; i++) {
//     console.log(i);
//     const log = () => {
//       return `i is: ${i}`;
//     };
//     funcs.push(log);
//   }
//   return funcs;
// }
// const logs = myFunc();
// console.log(logs[0](), logs[1](), logs[2]());

console.log(a);
let a = 1;
function name(params) {}

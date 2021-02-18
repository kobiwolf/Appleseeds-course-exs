// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9); //5
// var result = firstResult(2); //5
// console.log(firstResult());
// console.log(result);

// var a = 1;
// function b2() {
//   function a() {}
//   a = 10;

//   return;
// }
// b2();
// console.log(a); //1
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 1000);
}
// log runs 3 times because his scope is a for scope but in the other side i=3 already...

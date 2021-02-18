'use strict';
// function funcA() {
//     console.log(a);//undefinded
//     console.log(foo());2
//     var a = 1;
//     function foo() {
//     return 2;
//     }
//    }
//    funcA();
//fix:put the var a=1 befroe the log of a

var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //'Aurelio De Rosa'
var test = obj.prop.getFullName; //ייגש לאובקייט הגלובלי
console.log(test());
//fix:

// function funcB() {
//    let a = b = 0;
//     a++;
//     return a;
//    }
//    funcB();
//    console.log(typeof a);//error
//    console.log(typeof b);//b does exsist because we retuerned it in the end of the func!!
// fix:delete the let
// function funcC() {
//     console.log("1");
//    }
//    funcC();
//    function funcC() {
//     console.log("2");
//    }
//    funcC();//error you cant declare twice a func
//fix:save the funcs inside varibiles

// function funcD1() {
//     d = 1;
//    }
//    funcD1();
//    console.log(d);//1
//    function funcD2() {
//     var e = 1;
//    }
//    funcD2();
//    console.log(e);//undefinded
//    fix:delete the var or console.log inside the func

// function funcE() {
//   console.log('Value of f in local scope: ', f);
// }
// console.log('Value of f in global scope: ', f);
// var f = 1;
// funcE();
// fix:to put the var f =1 before the second log

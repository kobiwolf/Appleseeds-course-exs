// let a=[1,2,3,4
//     ,5]
// alert(a.join());
// let b='2131415'
// console.log(b.split('1'));
// console.log(b);
// let c=[...a]
// console.log(c);
// console.log(a);
'use strict';
let obj = { name: 'kobi' };
obj?.name ? console.log(obj.name) : console.log('nay');
let obj1 = obj;
// Object.freeze(obj);
obj1.name = 'kobi1';
console.log(obj);
// console.log(delete obj.name);

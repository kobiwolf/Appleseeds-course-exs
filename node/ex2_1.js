const fs = require('fs');
const path = require('path');
// 1
// fs.writeFileSync('target.js', 'console.log("I did it")');
// //2
// fs.copyFileSync('target.js', 'newTarget.js');
// //3
// fs.renameSync('target.js', 'newName.js');
//4
const files = fs.readdirSync(
  '/Users/יהודית/Desktop/kobi/code-study/apple seeds/coruse/exs/node'
);
//5
const try1 = fs.realpathSync('demo.js');
console.log(try1);

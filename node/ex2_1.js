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

// const respone = await usersC.findOne({
//     _id: ObjectID('607ea00cd009b91618ef2337'),
//   });
//   const poster = await postC.findOne({ _id: ObjectID(respone.posts[0]) });
//   console.log(typeof poster);

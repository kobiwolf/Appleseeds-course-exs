const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017'; //127.0.0.1
const name = 'ex16_2new';
MongoClient.connect(url, { useNewUrlParser: true }, async (error, client) => {
  if (error) return console.log('bad connect');
  const db = client.db(name);
  const usersC = db.collection('users');
  const commentC = db.collection('comments');
  const postC = db.collection('posts');
  //for later

  // db.runCommand({
  //   "collMod": "users",
  //   "validator": previousValidator,
  // });

  // example:
  try {
    const user = await usersC.findOne({
      _id: ObjectID('607eaf1f59cede49a866e6b3'),
    });
    const post = await postC.findOne({
      _id: ObjectID(user.posts[0]),
    });

    console.log(post);
  } catch (err) {
    console.log(err.message);
  }
});

// ! first init

// const idUser1 = new ObjectID();
// const idUser2 = new ObjectID();

// const idPost1 = new ObjectID();
// const idPost2 = new ObjectID();
// const idComment1 = new ObjectID();
// const idComment2 = new ObjectID();
// const idComment3 = new ObjectID();
// usersC
//   .insertMany([
//     {
//       _id: idUser1,
//       name: 'ifatach Barkay',
//       email: 'if@gmail.com',
//       Phone: 000,
//       posts: [idPost1],
//       comments: [idComment1, idComment2],
//     },
//     {
//       _id: idUser2,
//       name: 'kobi wolf',
//       email: 'KO@gmail.com',
//       Phone: 001,
//       posts: [idPost2],
//       comments: [idComment3],
//     },
//   ])
//   .then((res) => console.log(res.ops))
//   .catch((e) => console.log('did not manage to write users'));
// commentC
//   .insertMany([
//     {
//       _id: idComment1,
//       userID: idUser1,
//       postID: idPost1,
//       value: 'wow what an artical',
//     },
//     {
//       _id: idComment2,
//       userID: idUser1,
//       postID: idPost2,
//       value: 'shiti artical',
//     },
//     {
//       _id: idComment3,
//       userID: idUser2,
//       postID: idPost2,
//       value: 'medium artical',
//     },
//   ])
//   .then((res) => console.log(res.ops))
//   .catch((e) => console.log('did not manage to write comments'));
// postC
//   .insertMany([
//     {
//       _id: idPost1,
//       content: 'bla bla bla1',
//       title: 'post num 1',
//       comments: [idComment1],
//       ownerID: idUser1,
//     },
//     {
//       _id: idPost2,
//       content: 'bla bla bla2',
//       title: 'post num 2',
//       comments: [idComment2, idComment3],
//       ownerID: idUser2,
//     },
//   ])
//   .then((res) => console.log(res.ops))
//   .catch((e) => console.log('did not manage to write post'));

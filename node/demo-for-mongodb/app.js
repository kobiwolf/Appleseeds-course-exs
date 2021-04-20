const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dataBase = 'test';
mongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) return console.log(error);
  const dbRef = client.db(dataBase);
  dbRef.collection('user').insertOne(
    {
      name: 'kobi',
    },
    (error, result) => {
      if (error) return console.log(` my error:${error}`);
      else {
        console.log(result.ops);
      }
    }
  );
});

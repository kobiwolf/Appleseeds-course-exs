const app = require('express')();

app.get('/', (req, res) => {
  res.send('home');
  // res.send('console.log("good")');
});
app.get('/wow', (req, res) => {
  res.send('wow page');
  console.log('good');
});
app.listen(3000, () => {
  console.log('we are up');
});

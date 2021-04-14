const app = require('express')();
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  res.render('index');
  // res.send('console.log("good")');
});
app.get('/wow', (req, res) => {
  res.send('wow page');
  console.log('good');
});

app.listen(3000, () => {
  console.log('we are up');
});

const fs = require('fs');
const cors = require('cors');
const express = require('express');
const path = require('path');
const endPoint = '/api/joke';
const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.get(`${endPoint}`, (req, res) => {
  console.log(port);
  const joke = fs.readFileSync(path.join(__dirname, 'User.json'));
  res.send(joke);
});

app.listen(port, () => {
  console.log(`listen to ${port}`);
});

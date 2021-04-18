const axios = require('axios');
const fs = require('fs');
const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  const joke = fs.readFileSync('./User.json');
  res.send(joke);
});

app.listen(port, () => {
  console.log(`listen to ${port}`);
});

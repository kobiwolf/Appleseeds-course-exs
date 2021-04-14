const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
const pathToJson = './users.json';

app.use(express.json());

const getJson = () => {
  const data = fs.readFileSync(pathToJson).toString();
  return JSON.parse(data);
};
const updateJson = (value) => {
  const data = JSON.stringify(value);
  fs.writeFileSync(pathToJson, data);
};
const findMovie = (id) => {
  const data = getJson();
  const picked = data.find((movie) => movie.id === id);
  if (picked) return picked;
  throw new Error('cannot find user');
};

app.get('/api/movies', (req, res) => {
  const { result } = req.query;
  const data = getJson();
  if (!result) res.send(data);
  else {
    let filter = [];
    for (let i = 0; i < result; i++) {
      filter.push(data[i]);
    }
    res.send(filter);
  }
});
app.post('/api/movies', (req, res) => {
  const data = getJson();
  const body = req.body;
  data.push(body);
  updateJson(data);
  res.send(`${JSON.stringify(body)} has upload successfully`);
});
app.delete('/api/movies/:id', (req, res) => {
  const data = getJson();
  const { id } = req.params;
  try {
    const picked = findMovie(id);
    const index = data.findIndex((movie) => movie.id === picked.id);
    data.splice(index, 1);
    updateJson(data);
    res.send(`${picked.name} as deleted successfully`);
  } catch (e) {
    res.send(e.message);
  }
});
app.get('/api/movies/:id', (req, res) => {
  const { id } = req.params;
  try {
    const data = findMovie(id);
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});
app.put('/api/movies/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const data = getJson();
  try {
    let picked = findMovie(id);
    const index = data.findIndex((movie) => movie.id === picked.id);
    data[index] = body;
    updateJson(data);
    res.send(`${data} as been updated  `);
  } catch (e) {
    res.send(e.message);
  }
});

app.listen(port, () => {
  console.log('live on');
});

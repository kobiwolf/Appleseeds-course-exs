const axios = require('axios');
const request = require('request');
const fetch = require('node-fetch');
const express = require('express');
const url = 'https://dog.ceo/api/breeds/image/random';
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');

app.get('/', (reg, res) => {
  axios.get(url).then((promise) => {
    res.send(`<img src=${promise.data.message}> </img>`);
  });
});
// const promise = axios.get(url).then((promise) => {
//   console.log(promise.data.message);
// });

// request(url, (error, response) => {
//   console.log(response);
// });

// fetch(url).then((response) => console.log(response.body._outBuffer.toString()));
app.listen(3000);

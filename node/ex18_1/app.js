require('./mongoose.js');
const express = require('express');
const route = require('./routes/itemsRoute');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`we are line on ${port}`);
});

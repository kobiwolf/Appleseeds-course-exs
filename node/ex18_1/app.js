require('./mongoose.js');
const express = require('express');

const Product = require('./model/Prodouct');

const app = express();
const endPoint = '/products';
const port = process.env.PORT || 3000;

app.use(express.json());

app.post(endPoint, async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.send(`item saved,${product}`);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
app.get(endPoint, async (req, res) => {
  try {
    const items = await Product.find({});
    items ? res.send(items) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
app.get(`${endPoint}/active`, async (req, res) => {
  try {
    const item = await Product.find({ isActive: true });
    item ? res.send(item) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
app.get(`${endPoint}/range`, async (req, res) => {
  const { min, max } = req.query;

  try {
    const item = await Product.find({
      'detailes.price': { $gte: min, $lt: max },
    });
    item ? res.send(item) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
app.get(`${endPoint}/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Product.findById(id);
    item ? res.send(item) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});

app.listen(port, () => {
  console.log(`we are line on ${port}`);
});

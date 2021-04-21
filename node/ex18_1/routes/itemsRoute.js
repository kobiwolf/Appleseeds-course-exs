const express = require('express');
const Product = require('../model/Prodouct');

const route = new express.Router();
const endPoint = '/products';

route.post(endPoint, async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.send(`item saved,${product}`);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
route.get(endPoint, async (req, res) => {
  try {
    const items = await Product.find({});
    items ? res.send(items) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
route.get(`${endPoint}/active`, async (req, res) => {
  try {
    const item = await Product.find({ isActive: true });
    item ? res.send(item) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
route.get(`${endPoint}/range`, async (req, res) => {
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
route.get(`${endPoint}/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Product.findById(id);
    item ? res.send(item) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
route.delete(`${endPoint}/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Product.findByIdAndDelete(id);
    item ? res.send(item) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
route.delete(endPoint, async (req, res) => {
  try {
    const item = await Product.deleteMany({});
    item ? res.send(item) : res.status(404).send('no one found');
  } catch (e) {
    console.log(e);
    res.status(500).send('the server failed');
  }
});
route.patch(`${endPoint}/:id`, async (req, res) => {
  const { id } = req.params;
  const allowedchanges = ['name', 'isActive', 'discount', 'detailes'];
  const objsReq = Object.keys(req.body);
  if (req.body.detailes) objsReq.push(...Object.keys(req.body.detailes));
  console.log(objsReq);
  const booli = objsReq.every((obj) => allowedchanges.includes(obj));
  if (!booli) res.status(400).end('bad request cant change those values');
  try {
    const user = await Product.findOneAndUpdate({ _id: id }, req.body);
    if (!user) res.status(404).end('user not found ');
    res.send('good');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = route;

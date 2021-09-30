const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('/', async (req, res) => {
  const product = await Product.find();
  res.render('product', {
    product
  });
});


router.post('/addProduct', async (req, res, next) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect('/');
});

module.exports = router;
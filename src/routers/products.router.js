const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/products/:id', productsController.getProduct);
router.get('/products', productsController.listProducts);
router.post('/products', productsController.insertProductController);

module.exports = router;

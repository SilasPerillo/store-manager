const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/products/search', productsController.searchProduct);
router.get('/products/:id', productsController.getProduct);
router.put('/products/:id', productsController.updateProductId);
router.delete('/products/:id', productsController.deleteProduct);
router.get('/products', productsController.listProducts);
router.post('/products', productsController.insertProductController);

module.exports = router;

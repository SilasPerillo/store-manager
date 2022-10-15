const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/sales/:id', salesController.getSaleListControllerId);
router.post('/sales', salesController.insertSales);
router.get('/sales', salesController.getSalesListController);

module.exports = router;

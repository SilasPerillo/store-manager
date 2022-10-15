const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/sales/:id', salesController.getSaleListControllerId);
router.delete('/sales/:id', salesController.deleteSale);
router.post('/sales', salesController.insertSales);
router.get('/sales', salesController.getSalesListController);

module.exports = router;

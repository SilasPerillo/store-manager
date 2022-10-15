const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const insertSales = async (req, res) => {
  const sales = req.body;

  const { type, message } = await salesService.insertSalesService(sales);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const getSalesListController = async (_req, res) => {
  const { message } = await salesService.getSaleListService();

  res.status(200).json(message);
};

const getSaleListControllerId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleListServiceId(Number(id));

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  insertSales,
  getSalesListController,
  getSaleListControllerId,
};

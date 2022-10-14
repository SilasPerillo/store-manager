// const {  }  aqui vai o service
const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const insertSales = async (req, res) => {
  const sales = req.body;

  const { type, message } = await salesService.insertSalesService(sales);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  insertSales,
};

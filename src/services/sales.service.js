const { productsModel, salesModel } = require('../models');
const { insertProductSale, getSaleModal } = require('../models/sales.model');
const { validateSales } = require('./validations/validationsInputValues');

const validadeContainProduct = async (salesList) => {
  const arrayProductsId = await Promise.all(
    salesList.map(async (sale) => productsModel.selectById(sale.productId)),
  );

  return arrayProductsId.some((value) => value === undefined);
};

const executeInsertSales = async (sales, saleId) => {
  await Promise.all(
    sales.map(async (value) => insertProductSale(saleId, value.productId, value.quantity)),
  );
};

const insertSalesService = async (listSales) => {
  const error = validateSales(listSales);
  if (error.type) return error;
  if (await validadeContainProduct(listSales)) {
    return {
    type: 'NOT_FOUND', message: 'Product not found',
    };
  }
  const saleId = await salesModel.insertSaleModal();
  await executeInsertSales(listSales, saleId);
  const itemsSold = await getSaleModal(saleId);
  return { type: null, message: { id: saleId, itemsSold } };
};

const getSaleListService = async () => {
  const listSales = await salesModel.getSalesListModel();
  return { type: null, message: listSales };
};

const getSaleListServiceId = async (id) => {
  const listSales = await salesModel.getSalesListId(id);

  if (listSales.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: listSales };
};

module.exports = {
  insertSalesService,
  getSaleListService,
  getSaleListServiceId,
};

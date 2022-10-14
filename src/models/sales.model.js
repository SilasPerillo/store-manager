const camelize = require('camelize');
const connection = require('../connection');

const insertSaleModal = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales() VALUES()',
  );
  return insertId;
};

const insertProductSale = async (saleId, productId, quant) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [saleId, productId, quant],
  );
  return insertId;
};

const getSaleModal = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT product_id, quantity FROM StoreManager.sales_products WHERE ${saleId} = sale_id`,
  );
  return camelize(result);
};

module.exports = {
  insertSaleModal,
  insertProductSale,
  getSaleModal,
};

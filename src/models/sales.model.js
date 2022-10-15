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
    `SELECT
      product_id,
      quantity
    FROM StoreManager.sales_products WHERE ${saleId} = sale_id ORDER BY product_id ASC`,
  );
  return camelize(result);
};

const getSalesListModel = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity FROM StoreManager.sales_products As sp
      INNER JOIN StoreManager.sales AS s ON s.id = sp.sale_id
      INNER JOIN StoreManager.products AS p ON p.id = sp.product_id
    ORDER BY product_id ASC `,
  );
  return camelize(result);
};

const getSalesListId = async (id) => {
  const [result] = await connection.execute(
    `SELECT  date, product_id, quantity FROM StoreManager.sales_products As sp
      INNER JOIN StoreManager.sales AS s ON s.id = sp.sale_id
      INNER JOIN StoreManager.products AS p ON p.id = sp.product_id
    WHERE sale_id = ${id}
    ORDER BY product_id ASC `,
  );
  return camelize(result);
};

const deleteSale = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return result;
};

module.exports = {
  insertSaleModal,
  insertProductSale,
  getSaleModal,
  getSalesListModel,
  getSalesListId,
  deleteSale,
};

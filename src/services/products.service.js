const { productsModel } = require('../models');
const { validateId, validadeName } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModel.selectAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await productsModel.selectById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const insertProductService = async (product) => {
  const error = validadeName(product);
  if (error.type) return error;
  const insertProduct = await productsModel.insertProduct(product.name);

  return { type: null, message: insertProduct };
};

const updateProductId = async (name, id) => {
  const getProduct = await productsModel.selectById(id);
  const error = validadeName(name);

  if (!getProduct) return { type: 'NOT_FOUND', message: 'Product not found' };

  if (error.type) return error;

  const product = await productsModel.updateProductId(name.name, id);

  return { type: null, message: product };
};

module.exports = {
  findAll,
  findById,
  insertProductService,
  updateProductId,
};

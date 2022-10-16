const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { message } = await productsService.findAll();

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const insertProductController = async (req, res) => {
  const name = req.body;

  const { type, message } = await productsService.insertProductService(name);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const updateProductId = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  const { type, message } = await productsService.updateProductId(product, id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json({ id, name: product.name });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.deleteProduct(Number(id));

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json();
};

const searchProduct = async (req, res) => {
  const { q } = req.query;

  const { message } = await productsService.searchProduct(q);

  res.status(200).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  insertProductController,
  updateProductId,
  deleteProduct,
  searchProduct,
};

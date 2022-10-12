const resultAllProducts = {
  type: null,
  message: [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    }
  ]
};

const resultOneProduct = {
  type: null,
  message: [
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
  ]
};

const idNotFound = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }

module.exports = {
  resultAllProducts,
  resultOneProduct,
  idNotFound,
}

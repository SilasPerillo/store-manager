const listProducts = [
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
];

const firstProduct = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
];

const newProductResult = {
  type: null,
  message: { id: 1, name: "ProdutoX" }
}

const newProductModal = { id: 1, name: 'ProdutoX' }

const newProductModalWrongLength = { id: 1, name: 'Abc' }

const productNotFind = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }

module.exports = {
  listProducts,
  firstProduct,
  productNotFind,
  newProductResult,
  newProductModal,
  newProductModalWrongLength,
}

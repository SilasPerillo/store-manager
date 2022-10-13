const listProductsService = {
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

const firstProductsService = {
  type: null,
  message: [
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
  ]
};

const invalideId = { type: 'INVALID_VALUE', message: 'Invalid format id' };
const notFoundId = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

const newProductResultService = {
  type: null,
  message: { id: 1, name: "ProdutoX" },
}

const newProductService = { name: 'ProdutoX' };

const newProductServiceWrongLength = { name: 'Abc' };

const newProductServiceResultWrongLength = {
  type: "string.min",
  message: "\"name\" length must be at least 5 characters long"
};

module.exports = {
  listProductsService,
  invalideId,
  firstProductsService,
  notFoundId,
  newProductResultService,
  newProductService,
  newProductServiceWrongLength,
  newProductServiceResultWrongLength,
}


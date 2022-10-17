const { expect } = require('chai');
const sinon = require('sinon');
const { listProductsService, invalideId, firstProductsService, notFoundId, newProductResultService, newProductService, newProductServiceWrongLength, newProductServiceResultWrongLength, deletedProduct } = require('./mocks/products.service.mock');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const { listProducts, firstProduct, newProductModal, newProductModalWrongLength } = require('../models/mocks/products.model.mock');

describe('Teste unitário da camada service', () => {

  it('Verifica se retorna todos valores com a message', async function () {
    sinon.stub(productsModel, 'selectAll').resolves(listProducts);

    const result = await productsService.findAll();
    expect(result).to.deep.equal(listProductsService);
  });

  it('Verifica retorno de um produto passando o id', async function () {
    sinon.stub(productsModel, 'selectById').resolves(firstProduct);

    const result = await productsService.findById(1);
    expect(result).to.deep.equal(firstProductsService);
  });

  it('Verifica erro de id, caso não seja um numero', async function () {
    sinon.stub(productsModel, 'selectById').resolves([[]]);

    const result = await productsService.findById('a');
    expect(result).to.deep.equal(invalideId);
  });

  it('Verifica erro caso o id não seja encontrado', async function () {
    sinon.stub(productsModel, 'selectById').resolves(undefined);

    const result = await productsService.findById(999);
    expect(result).to.deep.equal(notFoundId);
  });

  it('Valida cadastro na camada service', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves(newProductModal);

    const result = await productsService.insertProductService(newProductService);
    expect(result).to.deep.equal(newProductResultService)
  });

  it('Valida erro de cadastro na camada service, ', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves(newProductModalWrongLength)

    const result = await productsService.insertProductService(newProductServiceWrongLength)
    expect(result).to.deep.equal(newProductServiceResultWrongLength)
  })

  it('Deleta um produto na camada service', async function () {
    sinon.stub(productsModel, 'selectById').resolves(true);
    sinon.stub(productsModel, 'deleteProduct').resolves(deletedProduct);

    await productsService.deleteProduct(2);

    expect(deletedProduct.type).to.deep.equal(204)
  })

  afterEach(sinon.restore);
})

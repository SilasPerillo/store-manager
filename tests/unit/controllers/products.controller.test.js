   const sinon = require("sinon");
const chai = require("chai");
const { listProducts, getProduct, insertProductController } = require("../../../src/controllers/products.controller");
const sinonChai = require('sinon-chai');
const { productsService } = require("../../../src/services");
const { resultAllProducts, resultOneProduct, idNotFound, newProductController, newProductControllerWrongLength, productUpdate } = require("./mocks/products.controller.mock");
const { insertProductService } = require("../../../src/services/products.service");
const { newProductModal } = require("../models/mocks/products.model.mock");
const { productsModel } = require("../../../src/models");
const productsController = require('../../../src/controllers/products.controller')

const { expect } = chai;
chai.use(sinonChai);

describe('Testa camada controller', function () {
  it('Listando todos products', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findAll')
      .resolves(resultAllProducts);

    await listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resultAllProducts.message);
  });

  it('Retorno de um produto, pesquisa por id', async function () {
    const res = {}
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findById').resolves(resultOneProduct);

    await getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(resultOneProduct.message);
  })

  it('Retorno de um erro, pesquisa por id não encontrado', async function () {
    const res = {}
    const req = {
      params: { id: 99 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findById').resolves(idNotFound);

    await getProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: idNotFound.message });
  });

  it('Valida controller, insert', async function () {
    const res = {}
    const req = {
      body: { name: 'ProdutoX' },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'insertProductService').resolves(newProductController);

    await insertProductController(req, res);

    expect(res.status).to.have.been.calledWith(201)
    expect(res.json).to.have.been.calledWith([newProductModal])

  });

  it('Valida controller, erro insert', async function () {
    const res = {}
    const req = {
      body: { name: 'Abc' },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'insertProductService').resolves(newProductControllerWrongLength);

    await insertProductController(req, res);

    expect(res.status).to.have.been.calledWith(422)
    expect(res.json).to.have.been.calledWith({message: newProductControllerWrongLength.message})

  });

  it('Delete product', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsModel, 'selectById').resolves(true);
    sinon.stub(productsService, 'deleteProduct').resolves(204);

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204)
  });

  it('Update de um produto', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
      body: productUpdate
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsModel, 'selectById').resolves(true);
    sinon.stub(productsService, 'updateProductId').resolves(1, productUpdate)

    await productsController.updateProductId(req, res);

    expect(res.status).to.have.been.calledWith(200)
  })

  afterEach(sinon.restore);
});

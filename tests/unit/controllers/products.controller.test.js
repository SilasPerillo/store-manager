const sinon = require("sinon");
const chai = require("chai");
const { listProducts, getProduct } = require("../../../src/controllers/products.controller");
const sinonChai = require('sinon-chai');
const { productsService } = require("../../../src/services");
const { resultAllProducts, resultOneProduct, idNotFound } = require("./mocks/products.controller.mock");

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

  afterEach(sinon.restore);
});

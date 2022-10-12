const { expect } = require("chai")
const sinon = require("sinon")
const { productsModel } = require("../../../src/models")
const connection = require("../../../src/models/connection")
const { listProducts, firstProduct, productNotFind } = require("./mocks/products.model.mock")


describe('Teste camada model', function () {
  it('Verifica se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([listProducts]);

    const result = await productsModel.selectAll();
    expect(result).to.deep.equal(listProducts);
  })
  it('Verifica retorno de somente um id', async function () {
    sinon.stub(connection, 'execute').resolves([[firstProduct]]);

    const result = await productsModel.selectById(1);
    expect(result).to.deep.equal(firstProduct);
  })
  it('Verifica retorno de um id não encontrado', async function () {
    sinon.stub(connection, 'execute').resolves([[productNotFind]]);

    const result = await productsModel.selectById(4);
    expect(result).to.deep.equal(productNotFind)
  })
    afterEach(sinon.restore);
})

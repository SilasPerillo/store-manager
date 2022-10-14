const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/connection");
const { salesModel } = require("../../../src/models");
const { salesModal, salesDB } = require("./mocks/sales.model.mock");

describe('Testes da camada model, rota sales', function () {
  it('Verifica se insere venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await salesModel.insertSaleModal();
    expect(result).to.deep.equal(1)
  })

  it('Verifica se insere produto da venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await salesModel.insertProductSale();
    expect(result).to.deep.equal(1)
  })

  it('Verifica se insere produto da venda', async function () {
    sinon.stub(connection, 'execute').resolves([salesDB]);
    const result = await salesModel.getSaleModal();
    expect(result).to.deep.equal(salesModal)
  })

  afterEach(sinon.restore);
})

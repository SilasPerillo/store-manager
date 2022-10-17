const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel, productsModel } = require("../../../src/models");
const { salesService } = require("../../../src/services");
const { saleMock, saleCreated } = require("./mocks/sales.service.mock");

describe('Testes da camada service, rota sales', function () {

  // it('Verifica retorno do cadastro de uma venda ', async function () {
  //   sinon.stub(productsModel, 'selectById').onFirstCall().resolves(true).onSecondCall().resolves(true);

  //   sinon.stub(salesModel, 'getSaleModal').resolves(saleCreated);

  //   sinon.stub(salesModel, 'insertSaleModal').resolves(saleCreated.id);

  //   // sinon.stub(salesModel, 'insertProductSale').onFirstCall().resolves(1).onSecondCall().resolves(2);
  //   sinon.stub(salesModel, 'insertProductSale').returns(1);

  //   const result = await salesService.insertSalesService(saleMock);

  //   expect(result).to.deep.equal(saleCreated);
  // })

  beforeEach(sinon.restore);
})

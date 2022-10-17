const { expect } = require("chai")
const sinon = require("sinon")
const { productsModel } = require("../../../src/models")
const connection = require("../../../src/connection")
const { listProducts, firstProduct, productNotFind, newProductModal, deletedProduct } = require("./mocks/products.model.mock")


describe('Teste camada model', function () {
  it('Verifica se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([listProducts]);

    const result = await productsModel.selectAll();
    expect(result).to.deep.equal(listProducts);
  });

  it('Verifica retorno de somente um id', async function () {
    sinon.stub(connection, 'execute').resolves([[firstProduct]]);

    const result = await productsModel.selectById(1);
    expect(result).to.deep.equal(firstProduct);
  });

  it('Verifica retorno de um id não encontrado', async function () {
    sinon.stub(connection, 'execute').resolves([[productNotFind]]);

    const result = await productsModel.selectById(4);
    expect(result).to.deep.equal(productNotFind)
  });

  it('Cadastrar um novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await productsModel.insertProduct('ProdutoX');
    expect(result).to.deep.equal(newProductModal)
  });

  it('Deleta um produto', async function () {
    sinon.stub(connection, 'execute').resolves(deletedProduct);
    const result = await productsModel.deleteProduct(1);
    expect(result).to.deep.equal({ type: 204 })
  })

  afterEach(sinon.restore);
})

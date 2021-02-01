const calcularPedido = require('../test/calcular.js');
const calcularAforo = require('../test/aforo.js');

describe("Mis tests de calculo del pedido", function() {
  it("Debería multiplicar", function() {
    expect(calcularPedido.calcular(1.20)).toBe('7.26');
  });

});

describe("Mis tests de calculo de aforo", function() {
  it("aforo=tamanio/4", function() {
    expect(calcularAforo.aforo()).toBe(2);
  });

});
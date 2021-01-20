const calcularPedido = require('../js/calcularPedido.js');

describe("Mis tests de calculo del pedido", function() {
  it("Debería multiplicar", function() {
    expect(calcularPedido.calcular(2,2)).toBe(4.84);
  });

});


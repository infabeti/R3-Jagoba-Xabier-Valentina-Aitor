const funcionalidades = require('./funcionalidades');

describe("Mis tests de calculo de iva", function() {
  it("Debería de multiplicar", function() {
    expect(funcionalidades.calcularIva(2,2)).toBe(4);
  });

});

import { describe, it, expect } from "vitest";
import {
  calcularSuma,
  calcularResta,
  calcularMultiplicacion,
  calcularDivision,
  calcularModulo,
  calcularPotencia,
  aplicarAsignacionSuma,
  aplicarAsignacionResta,
  aplicarAsignacionMultiplicacion,
  aplicarAsignacionDivision,
  incrementarEnUno,
  decrementarEnUno,
  resultadoDivisionPorCero,
  obtenerNaN,
  esValorNaN,
} from"./challenge.js";

describe("Reto 03 - Operadores aritméticos en JavaScript", () => {
  describe("Reto 1: calcularSuma", () => {
    it("suma dos números positivos", () => {
      expect(calcularSuma(5, 3)).toBe(8);
    });

    it("suma con negativos", () => {
      expect(calcularSuma(-2, 7)).toBe(5);
    });
  });

  describe("Reto 2: calcularResta", () => {
    it("resta dos números", () => {
      expect(calcularResta(5, 3)).toBe(2);
    });

    it("resta con resultado negativo", () => {
      expect(calcularResta(3, 10)).toBe(-7);
    });
  });

  describe("Reto 3: calcularMultiplicacion", () => {
    it("multiplica dos números", () => {
      expect(calcularMultiplicacion(5, 3)).toBe(15);
    });

    it("multiplica por cero", () => {
      expect(calcularMultiplicacion(100, 0)).toBe(0);
    });
  });

  describe("Reto 4: calcularDivision", () => {
    it("divide dos números", () => {
      expect(calcularDivision(6, 3)).toBe(2);
    });

    it("divide y obtiene decimal", () => {
      expect(calcularDivision(5, 2)).toBe(2.5);
    });
  });

  describe("Reto 5: calcularModulo", () => {
    it("devuelve el residuo de la división", () => {
      expect(calcularModulo(5, 2)).toBe(1);
    });

    it("módulo cuando la división es exacta", () => {
      expect(calcularModulo(6, 3)).toBe(0);
    });
  });

  describe("Reto 6: calcularPotencia", () => {
    it("eleva base a exponente", () => {
      expect(calcularPotencia(2, 3)).toBe(8);
    });

    it("potencia con exponente cero", () => {
      expect(calcularPotencia(10, 0)).toBe(1);
    });
  });

  describe("Reto 7: aplicarAsignacionSuma", () => {
    it("aplica += y retorna el valor actualizado", () => {
      expect(aplicarAsignacionSuma(5, 3)).toBe(8);
    });

    it("suma acumulada", () => {
      expect(aplicarAsignacionSuma(10, -2)).toBe(8);
    });
  });

  describe("Reto 8: aplicarAsignacionResta", () => {
    it("aplica -= y retorna el valor actualizado", () => {
      expect(aplicarAsignacionResta(10, 4)).toBe(6);
    });
  });

  describe("Reto 9: aplicarAsignacionMultiplicacion", () => {
    it("aplica *= y retorna el valor actualizado", () => {
      expect(aplicarAsignacionMultiplicacion(6, 2)).toBe(12);
    });
  });

  describe("Reto 10: aplicarAsignacionDivision", () => {
    it("aplica /= y retorna el valor actualizado", () => {
      expect(aplicarAsignacionDivision(15, 3)).toBe(5);
    });
  });

  describe("Reto 11: incrementarEnUno", () => {
    it("incrementa el contador en 1", () => {
      expect(incrementarEnUno(0)).toBe(1);
    });

    it("incrementa un valor cualquiera", () => {
      expect(incrementarEnUno(42)).toBe(43);
    });
  });

  describe("Reto 12: decrementarEnUno", () => {
    it("decrementa el contador en 1", () => {
      expect(decrementarEnUno(1)).toBe(0);
    });

    it("decrementa un valor cualquiera", () => {
      expect(decrementarEnUno(10)).toBe(9);
    });
  });

  describe("Reto 13: resultadoDivisionPorCero", () => {
    it("retorna Infinity cuando positivo es true", () => {
      expect(resultadoDivisionPorCero(true)).toBe(Infinity);
    });

    it("retorna -Infinity cuando positivo es false", () => {
      expect(resultadoDivisionPorCero(false)).toBe(-Infinity);
    });
  });

  describe("Reto 14: obtenerNaN", () => {
    it("retorna NaN", () => {
      const resultado = obtenerNaN();
      expect(Number.isNaN(resultado)).toBe(true);
    });
  });

  describe("Reto 15: esValorNaN", () => {
    it("retorna true para NaN", () => {
      expect(esValorNaN(NaN)).toBe(true);
    });

    it("retorna true para resultado de 0/0", () => {
      expect(esValorNaN(0 / 0)).toBe(true);
    });

    it("retorna false para un número", () => {
      expect(esValorNaN(42)).toBe(false);
    });

    it("retorna false para un string", () => {
      expect(esValorNaN("hola")).toBe(false);
    });
  });
});

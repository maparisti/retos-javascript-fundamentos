import { describe, it, expect } from "vitest";
import {
  resultadoConcatenacionMas,
  resultadoRestaConString,
  booleanoMasUno,
  convertirStringANumero,
  parsearEnteroYDecimal,
  convertirNumeroAString,
  convertirABooleano,
} from "./challenge.js";

describe("Reto 06 - Coerción de tipos en JavaScript", () => {
  describe("Reto 1: resultadoConcatenacionMas", () => {
    it("concatena string y número (no suma)", () => {
      expect(resultadoConcatenacionMas("5", 3)).toBe("53");
    });

    it("retorna tipo string", () => {
      const r = resultadoConcatenacionMas("10", 2);
      expect(typeof r).toBe("string");
      expect(r).toBe("102");
    });
  });

  describe("Reto 2: resultadoRestaConString", () => {
    it("convierte string a número y resta", () => {
      expect(resultadoRestaConString("5", 3)).toBe(2);
    });

    it("retorna tipo number", () => {
      const r = resultadoRestaConString("42", 10);
      expect(typeof r).toBe("number");
      expect(r).toBe(32);
    });
  });

  describe("Reto 3: booleanoMasUno", () => {
    it("true + 1 es 2", () => {
      expect(booleanoMasUno(true)).toBe(2);
    });

    it("false + 1 es 1", () => {
      expect(booleanoMasUno(false)).toBe(1);
    });
  });

  describe("Reto 4: convertirStringANumero", () => {
    it("convierte '42' a 42 con Number()", () => {
      expect(convertirStringANumero("42")).toBe(42);
    });

    it("retorna tipo number", () => {
      expect(typeof convertirStringANumero("100")).toBe("number");
    });
  });

  describe("Reto 5: parsearEnteroYDecimal", () => {
    it("retorna entero con parseInt y decimal con parseFloat", () => {
      const r = parsearEnteroYDecimal("42", "3.1415");
      expect(r).toEqual({ entero: 42, decimal: 3.1415 });
    });

    it("parsea correctamente otros valores", () => {
      const r = parsearEnteroYDecimal("10", "2.5");
      expect(r.entero).toBe(10);
      expect(r.decimal).toBe(2.5);
    });
  });

  describe("Reto 6: convertirNumeroAString", () => {
    it("convierte 123 a '123' con String()", () => {
      expect(convertirNumeroAString(123)).toBe("123");
    });

    it("retorna tipo string", () => {
      expect(typeof convertirNumeroAString(42)).toBe("string");
    });
  });

  describe("Reto 7: convertirABooleano", () => {
    it("Boolean(1) es true", () => {
      expect(convertirABooleano(1)).toBe(true);
    });

    it("Boolean(0) es false", () => {
      expect(convertirABooleano(0)).toBe(false);
    });

    it("Boolean('') es false", () => {
      expect(convertirABooleano("")).toBe(false);
    });

    it("Boolean('hola') es true", () => {
      expect(convertirABooleano("hola")).toBe(true);
    });
  });
});

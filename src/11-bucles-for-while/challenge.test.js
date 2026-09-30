import { describe, it, expect } from "vitest";
import {
  numerosHastaN,
  contarConWhile,
  contarConDoWhile,
  formatearNotasConFor,
  tieneManzana,
  clavesYValores,
} from "./challenge.js";

describe("Reto 11 - Bucles for, while y for...of en JavaScript", () => {
  describe("Reto 1: numerosHastaN", () => {
    it("retorna array [0, 1, 2, 3, 4] para n = 5", () => {
      expect(numerosHastaN(5)).toEqual([0, 1, 2, 3, 4]);
    });

    it("retorna array vacío para n = 0", () => {
      expect(numerosHastaN(0)).toEqual([]);
    });

    it("retorna [0] para n = 1", () => {
      expect(numerosHastaN(1)).toEqual([0]);
    });
  });

  describe("Reto 2: contarConWhile", () => {
    it("retorna limite cuando contador llega a ese valor", () => {
      expect(contarConWhile(5)).toBe(5);
      expect(contarConWhile(10)).toBe(10);
    });

    it("retorna 0 cuando limite es 0", () => {
      expect(contarConWhile(0)).toBe(0);
    });
  });

  describe("Reto 3: contarConDoWhile", () => {
    it("retorna contador igual a limite tras las iteraciones", () => {
      expect(contarConDoWhile(3)).toBe(3);
      expect(contarConDoWhile(5)).toBe(5);
    });

    it("ejecuta al menos una vez: limite 0 retorna 1", () => {
      expect(contarConDoWhile(0)).toBe(1);
    });
  });

  describe("Reto 4: formatearNotasConFor", () => {
    it("retorna array con formato Índice: i -> Nota: valor", () => {
      const notas = ["nota uno", "nota dos", "nota tres"];
      expect(formatearNotasConFor(notas)).toEqual([
        "Índice: 0 -> Nota: nota uno",
        "Índice: 1 -> Nota: nota dos",
        "Índice: 2 -> Nota: nota tres",
      ]);
    });

    it("retorna array vacío para array vacío", () => {
      expect(formatearNotasConFor([])).toEqual([]);
    });
  });

  describe("Reto 5: tieneManzana", () => {
    it("retorna true si el array contiene 'manzana'", () => {
      expect(tieneManzana(["manzana", "pera"])).toBe(true);
      expect(tieneManzana(["pera", "uva", "manzana"])).toBe(true);
      expect(tieneManzana(["manzana"])).toBe(true);
    });

    it("retorna false si el array no contiene 'manzana'", () => {
      expect(tieneManzana(["pera", "uva"])).toBe(false);
      expect(tieneManzana([])).toBe(false);
    });
  });

  describe("Reto 6: clavesYValores", () => {
    it("retorna array de strings Clave: X -> Valor: Y para cada propiedad", () => {
      const persona = { nombre: "Ana", edad: 25 };
      const resultado = clavesYValores(persona);
      expect(resultado).toHaveLength(2);
      expect(resultado).toContain("Clave: nombre -> Valor: Ana");
      expect(resultado).toContain("Clave: edad -> Valor: 25");
    });

    it("retorna array vacío para objeto vacío", () => {
      expect(clavesYValores({})).toEqual([]);
    });
  });
});

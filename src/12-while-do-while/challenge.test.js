import { describe, it, expect } from "vitest";
import {
  numerosConWhile,
  contarHastaLimite,
  doWhileAlMenosUnaVez,
  mensajesEntradaDoWhile,
} from "./challenge.js";

describe("Reto 12 - while en JavaScript: evita bucles infinitos", () => {
  describe("Reto 1: numerosConWhile", () => {
    it("retorna array [0, 1, 2] para n = 3", () => {
      expect(numerosConWhile(3)).toEqual([0, 1, 2]);
    });

    it("retorna array [0, 1, 2, 3, 4] para n = 5", () => {
      expect(numerosConWhile(5)).toEqual([0, 1, 2, 3, 4]);
    });

    it("retorna array vacío para n = 0", () => {
      expect(numerosConWhile(0)).toEqual([]);
    });

    it("retorna [0] para n = 1", () => {
      expect(numerosConWhile(1)).toEqual([0]);
    });
  });

  describe("Reto 2: contarHastaLimite", () => {
    it("retorna limite cuando el contador llega a ese valor", () => {
      expect(contarHastaLimite(5)).toBe(5);
      expect(contarHastaLimite(10)).toBe(10);
    });

    it("retorna 0 cuando limite es 0", () => {
      expect(contarHastaLimite(0)).toBe(0);
    });
  });

  describe("Reto 3: doWhileAlMenosUnaVez", () => {
    it("retorna contador igual a limite tras las iteraciones", () => {
      expect(doWhileAlMenosUnaVez(3)).toBe(3);
      expect(doWhileAlMenosUnaVez(5)).toBe(5);
    });

    it("ejecuta al menos una vez: limite 0 retorna 1", () => {
      expect(doWhileAlMenosUnaVez(0)).toBe(1);
    });
  });

  describe("Reto 4: mensajesEntradaDoWhile", () => {
    it("retorna array con mensajes Entra en 0, Entra en 1, Entra en 2 para limite 3", () => {
      expect(mensajesEntradaDoWhile(3)).toEqual([
        "Entra en 0",
        "Entra en 1",
        "Entra en 2",
      ]);
    });

    it('para limite 0 ejecuta al menos una vez y retorna ["Entra en 0"]', () => {
      expect(mensajesEntradaDoWhile(0)).toEqual(["Entra en 0"]);
    });

    it("retorna un solo mensaje para limite 1", () => {
      expect(mensajesEntradaDoWhile(1)).toEqual(["Entra en 0"]);
    });
  });
});

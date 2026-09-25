import { describe, it, expect } from "vitest";
import {
  resultadoAnd,
  resultadoOr,
  resultadoNot,
  puedeVerListaUsuarios,
  puedeAcceder,
  mostrarOpcionLimitada,
} from "./challenge.js";

describe("Reto 08 - Operadores lógicos AND, OR y NOT en JavaScript", () => {
  describe("Reto 1: resultadoAnd", () => {
    it("true && true es true", () => {
      expect(resultadoAnd(true, true)).toBe(true);
    });

    it("true && false es false", () => {
      expect(resultadoAnd(true, false)).toBe(false);
    });

    it("false && true es false", () => {
      expect(resultadoAnd(false, true)).toBe(false);
    });

    it("false && false es false", () => {
      expect(resultadoAnd(false, false)).toBe(false);
    });
  });

  describe("Reto 2: resultadoOr", () => {
    it("true || true es true", () => {
      expect(resultadoOr(true, true)).toBe(true);
    });

    it("true || false es true", () => {
      expect(resultadoOr(true, false)).toBe(true);
    });

    it("false || true es true", () => {
      expect(resultadoOr(false, true)).toBe(true);
    });

    it("false || false es false", () => {
      expect(resultadoOr(false, false)).toBe(false);
    });
  });

  describe("Reto 3: resultadoNot", () => {
    it("!true es false", () => {
      expect(resultadoNot(true)).toBe(false);
    });

    it("!false es true", () => {
      expect(resultadoNot(false)).toBe(true);
    });
  });

  describe("Reto 4: puedeVerListaUsuarios (AND)", () => {
    it("solo true si es admin y está activo", () => {
      expect(puedeVerListaUsuarios(true, true)).toBe(true);
    });

    it("false si es admin pero no está activo", () => {
      expect(puedeVerListaUsuarios(true, false)).toBe(false);
    });

    it("false si está activo pero no es admin", () => {
      expect(puedeVerListaUsuarios(false, true)).toBe(false);
    });

    it("false si no es admin ni está activo", () => {
      expect(puedeVerListaUsuarios(false, false)).toBe(false);
    });
  });

  describe("Reto 5: puedeAcceder (OR)", () => {
    it("true si es usuario válido", () => {
      expect(puedeAcceder(true, false)).toBe(true);
    });

    it("true si tiene permiso especial", () => {
      expect(puedeAcceder(false, true)).toBe(true);
    });

    it("true si cumple ambas", () => {
      expect(puedeAcceder(true, true)).toBe(true);
    });

    it("false si no cumple ninguna", () => {
      expect(puedeAcceder(false, false)).toBe(false);
    });
  });

  describe("Reto 6: mostrarOpcionLimitada (NOT)", () => {
    it("true si no es admin (mostrar opción limitada)", () => {
      expect(mostrarOpcionLimitada(false)).toBe(true);
    });

    it("false si es admin (no mostrar opción limitada)", () => {
      expect(mostrarOpcionLimitada(true)).toBe(false);
    });
  });
});

import { describe, it, expect } from "vitest";
import {
  resultadoIgualdadDebil,
  resultadoDesigualdadDebil,
  resultadoIgualdadEstricta,
  resultadoDesigualdadEstricta,
  sonIgualesConCoercion,
  sonIgualesValorYTipo,
  nullYUndefinedSonIgualesDebil,
} from "./challenge.js";

describe("Reto 07 - Igualdad débil vs estricta en JavaScript", () => {
  describe("Reto 1: resultadoIgualdadDebil", () => {
    it("5 == '5' es true por coerción", () => {
      expect(resultadoIgualdadDebil(5, "5")).toBe(true);
    });

    it("true == 1 es true", () => {
      expect(resultadoIgualdadDebil(true, 1)).toBe(true);
    });

    it("false == 0 es true", () => {
      expect(resultadoIgualdadDebil(false, 0)).toBe(true);
    });

    it("valores distintos sin equivalencia dan false", () => {
      expect(resultadoIgualdadDebil(5, 10)).toBe(false);
    });
  });

  describe("Reto 2: resultadoDesigualdadDebil", () => {
    it("5 != '5' es false (coerción los hace iguales)", () => {
      expect(resultadoDesigualdadDebil(5, "5")).toBe(false);
    });

    it("5 != 10 es true", () => {
      expect(resultadoDesigualdadDebil(5, 10)).toBe(true);
    });
  });

  describe("Reto 3: resultadoIgualdadEstricta", () => {
    it("5 === '5' es false (distinto tipo)", () => {
      expect(resultadoIgualdadEstricta(5, "5")).toBe(false);
    });

    it("5 === 5 es true (mismo valor y tipo)", () => {
      expect(resultadoIgualdadEstricta(5, 5)).toBe(true);
    });

    it("true === 1 es false", () => {
      expect(resultadoIgualdadEstricta(true, 1)).toBe(false);
    });
  });

  describe("Reto 4: resultadoDesigualdadEstricta", () => {
    it("5 !== '5' es true (distinto tipo)", () => {
      expect(resultadoDesigualdadEstricta(5, "5")).toBe(true);
    });

    it("5 !== 5 es false", () => {
      expect(resultadoDesigualdadEstricta(5, 5)).toBe(false);
    });
  });

  describe("Reto 5: sonIgualesConCoercion", () => {
    it("5 y '5' son iguales con coerción", () => {
      expect(sonIgualesConCoercion(5, "5")).toBe(true);
    });

    it("true y 1 son iguales con coerción", () => {
      expect(sonIgualesConCoercion(true, 1)).toBe(true);
    });

    it("5 y 10 no son iguales", () => {
      expect(sonIgualesConCoercion(5, 10)).toBe(false);
    });
  });

  describe("Reto 6: sonIgualesValorYTipo", () => {
    it("5 y '5' no son iguales en valor y tipo", () => {
      expect(sonIgualesValorYTipo(5, "5")).toBe(false);
    });

    it("5 y 5 son iguales en valor y tipo", () => {
      expect(sonIgualesValorYTipo(5, 5)).toBe(true);
    });
  });

  describe("Reto 7: nullYUndefinedSonIgualesDebil", () => {
    it("null == undefined es true", () => {
      expect(nullYUndefinedSonIgualesDebil()).toBe(true);
    });
  });
});

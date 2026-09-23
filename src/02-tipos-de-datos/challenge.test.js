import { describe, it, expect } from "vitest";
import {
  identificarPrimitivos,
  diferenciarStringNumber,
  explorarNull,
  compararNullUndefined,
  crearSymbolYBigInt,
  crearObjeto,
  trabajarConArreglos,
  funcionComoValor,
  clasificarTipo,
} from"./challenge.js";

describe("Reto 02 - Tipos de datos: primitivos vs complejos", () => {
  describe("Reto 1: identificarPrimitivos", () => {
    it('debe retornar "string" para texto', () => {
      expect(identificarPrimitivos().texto).toBe("string");
    });

    it('debe retornar "number" para numero', () => {
      expect(identificarPrimitivos().numero).toBe("number");
    });

    it('debe retornar "boolean" para booleano', () => {
      expect(identificarPrimitivos().booleano).toBe("boolean");
    });

    it('debe retornar "object" para nulo (caso especial de typeof null)', () => {
      expect(identificarPrimitivos().nulo).toBe("object");
    });

    it('debe retornar "undefined" para indefinido', () => {
      expect(identificarPrimitivos().indefinido).toBe("undefined");
    });

    it('debe retornar "symbol" para simbolo', () => {
      expect(identificarPrimitivos().simbolo).toBe("symbol");
    });

    it('debe retornar "bigint" para grande', () => {
      expect(identificarPrimitivos().grande).toBe("bigint");
    });
  });

  describe("Reto 2: diferenciarStringNumber", () => {
    it('debe identificar "42" como string', () => {
      const resultado = diferenciarStringNumber("42");
      expect(resultado.tipo).toBe("string");
      expect(resultado.esString).toBe(true);
      expect(resultado.esNumber).toBe(false);
    });

    it("debe identificar 42 como number", () => {
      const resultado = diferenciarStringNumber(42);
      expect(resultado.tipo).toBe("number");
      expect(resultado.esString).toBe(false);
      expect(resultado.esNumber).toBe(true);
    });

    it("debe identificar true como ni string ni number", () => {
      const resultado = diferenciarStringNumber(true);
      expect(resultado.tipo).toBe("boolean");
      expect(resultado.esString).toBe(false);
      expect(resultado.esNumber).toBe(false);
    });
  });

  describe("Reto 3: explorarNull", () => {
    it("el valor debe ser null", () => {
      expect(explorarNull().valor).toBeNull();
    });

    it('typeof null debe ser "object" (caso especial)', () => {
      expect(explorarNull().tipo).toBe("object");
    });

    it("esNull debe ser true", () => {
      expect(explorarNull().esNull).toBe(true);
    });
  });

  describe("Reto 4: compararNullUndefined", () => {
    it("sinAsignar debe ser undefined", () => {
      expect(compararNullUndefined().sinAsignar).toBeUndefined();
    });

    it("vacio debe ser null", () => {
      expect(compararNullUndefined().vacio).toBeNull();
    });

    it('tipoSinAsignar debe ser "undefined"', () => {
      expect(compararNullUndefined().tipoSinAsignar).toBe("undefined");
    });

    it('tipoVacio debe ser "object"', () => {
      expect(compararNullUndefined().tipoVacio).toBe("object");
    });

    it("null == undefined debe ser true (igualdad débil)", () => {
      expect(compararNullUndefined().sonIguales).toBe(true);
    });

    it("null === undefined debe ser false (igualdad estricta)", () => {
      expect(compararNullUndefined().sonEstrictamenteIguales).toBe(false);
    });
  });

  describe("Reto 5: crearSymbolYBigInt", () => {
    it('tipoSymbol debe ser "symbol"', () => {
      expect(crearSymbolYBigInt().tipoSymbol).toBe("symbol");
    });

    it('tipoBigInt debe ser "bigint"', () => {
      expect(crearSymbolYBigInt().tipoBigInt).toBe("bigint");
    });

    it('descripcionSymbol debe ser "miID"', () => {
      expect(crearSymbolYBigInt().descripcionSymbol).toBe("miID");
    });

    it("valorBigInt debe ser 9007199254740991n", () => {
      expect(crearSymbolYBigInt().valorBigInt).toBe(9007199254740991n);
    });
  });

  describe("Reto 6: crearObjeto", () => {
    it("persona debe tener nombre, edad y activo", () => {
      const { persona } = crearObjeto();
      expect(persona.nombre).toBe("Juan");
      expect(persona.edad).toBe(42);
      expect(persona.activo).toBe(true);
    });

    it('tipoPersona debe ser "object"', () => {
      expect(crearObjeto().tipoPersona).toBe("object");
    });

    it("propiedades debe contener las claves correctas", () => {
      expect(crearObjeto().propiedades).toEqual(["nombre", "edad", "activo"]);
    });
  });

  describe("Reto 7: trabajarConArreglos", () => {
    it("el arreglo debe tener 4 elementos", () => {
      expect(trabajarConArreglos().largo).toBe(4);
    });

    it("esArreglo debe ser true", () => {
      expect(trabajarConArreglos().esArreglo).toBe(true);
    });

    it("el arreglo debe contener los valores correctos", () => {
      expect(trabajarConArreglos().arreglo).toEqual([1, "dos", true, null]);
    });

    it("los tipos deben ser correctos para cada elemento", () => {
      expect(trabajarConArreglos().tipos).toEqual([
        "number",
        "string",
        "boolean",
        "object",
      ]);
    });
  });

  describe("Reto 8: funcionComoValor", () => {
    it('tipoFuncion debe ser "function"', () => {
      expect(funcionComoValor().tipoFuncion).toBe("function");
    });

    it('resultado debe ser "Hola, JavaScript!"', () => {
      expect(funcionComoValor().resultado).toBe("Hola, JavaScript!");
    });
  });

  describe("Reto 9: clasificarTipo", () => {
    it('un string debe clasificarse como "primitivo"', () => {
      expect(clasificarTipo("hola").clasificacion).toBe("primitivo");
    });

    it('un number debe clasificarse como "primitivo"', () => {
      expect(clasificarTipo(42).clasificacion).toBe("primitivo");
    });

    it('null debe clasificarse como "primitivo"', () => {
      const resultado = clasificarTipo(null);
      expect(resultado.tipo).toBe("object");
      expect(resultado.clasificacion).toBe("primitivo");
    });

    it('un objeto debe clasificarse como "complejo"', () => {
      expect(clasificarTipo({ a: 1 }).clasificacion).toBe("complejo");
    });

    it('un arreglo debe clasificarse como "complejo"', () => {
      expect(clasificarTipo([1, 2]).clasificacion).toBe("complejo");
    });

    it('una función debe clasificarse como "complejo"', () => {
      expect(clasificarTipo(function () {}).clasificacion).toBe("complejo");
    });

    it('un boolean debe clasificarse como "primitivo"', () => {
      expect(clasificarTipo(true).clasificacion).toBe("primitivo");
    });

    it('undefined debe clasificarse como "primitivo"', () => {
      expect(clasificarTipo(undefined).clasificacion).toBe("primitivo");
    });
  });
});

import { describe, it, expect } from "vitest";
import {
  obtenerPI,
  obtenerContador,
  obtenerNombreCurso,
  reasignarMensaje,
  calcularTotal,
  identificarTipos,
  demostrarHoisting,
} from"./challenge.js";

describe("Reto 01 - Var, Let y Const", () => {
  describe("Reto 1: obtenerPI", () => {
    it("debe retornar el valor 3.14159", () => {
      expect(obtenerPI()).toBe(3.14159);
    });

    it("debe retornar un número", () => {
      expect(typeof obtenerPI()).toBe("number");
    });
  });

  describe("Reto 2: obtenerContador", () => {
    it("debe retornar 5 después de reasignar", () => {
      expect(obtenerContador()).toBe(5);
    });

    it("debe retornar un número", () => {
      expect(typeof obtenerContador()).toBe("number");
    });
  });

  describe("Reto 3: obtenerNombreCurso", () => {
    it('debe retornar "Fundamentos de JavaScript"', () => {
      expect(obtenerNombreCurso()).toBe("Fundamentos de JavaScript");
    });

    it("debe retornar un string", () => {
      expect(typeof obtenerNombreCurso()).toBe("string");
    });
  });

  describe("Reto 4: reasignarMensaje", () => {
    it("debe retornar un objeto con inicial y final", () => {
      const resultado = reasignarMensaje();
      expect(resultado).toHaveProperty("inicial");
      expect(resultado).toHaveProperty("final");
    });

    it('el valor inicial debe ser "hola"', () => {
      expect(reasignarMensaje().inicial).toBe("hola");
    });

    it('el valor final debe ser "adiós"', () => {
      expect(reasignarMensaje().final).toBe("adiós");
    });
  });

  describe("Reto 5: calcularTotal", () => {
    it("debe retornar un objeto con precioBase, descuento y total", () => {
      const resultado = calcularTotal();
      expect(resultado).toHaveProperty("precioBase");
      expect(resultado).toHaveProperty("descuento");
      expect(resultado).toHaveProperty("total");
    });

    it("precioBase debe ser 100", () => {
      expect(calcularTotal().precioBase).toBe(100);
    });

    it("descuento debe ser 25 (reasignado)", () => {
      expect(calcularTotal().descuento).toBe(25);
    });

    it("total debe ser 75", () => {
      expect(calcularTotal().total).toBe(75);
    });
  });

  describe("Reto 6: identificarTipos", () => {
    it("debe identificar el tipo de edad como number", () => {
      expect(identificarTipos().tipoEdad).toBe("number");
    });

    it("debe identificar el tipo de nombre como string", () => {
      expect(identificarTipos().tipoNombre).toBe("string");
    });

    it("debe identificar el tipo de activo como boolean", () => {
      expect(identificarTipos().tipoActivo).toBe("boolean");
    });
  });

  describe("Reto 7: demostrarHoisting", () => {
    it("debe retornar un objeto con antes y despues", () => {
      const resultado = demostrarHoisting();
      expect(resultado).toHaveProperty("antes");
      expect(resultado).toHaveProperty("despues");
    });

    it("antes debe ser undefined (hoisting)", () => {
      expect(demostrarHoisting().antes).toBeUndefined();
    });

    it('despues debe ser "Oscar"', () => {
      expect(demostrarHoisting().despues).toBe("Oscar");
    });
  });
});

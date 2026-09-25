import { describe, it, expect } from "vitest";
import {
  esMayorDeEdad,
  mensajeEdad,
  mensajeEdadDetallado,
  cumpleMinimo,
  nivelAcceso,
  puedeEntrar,
} from "./challenge.js";

describe("Reto 09 - If, else y else if en JavaScript", () => {
  describe("Reto 1: esMayorDeEdad", () => {
    it("retorna true si edad >= 18", () => {
      expect(esMayorDeEdad(18)).toBe(true);
      expect(esMayorDeEdad(19)).toBe(true);
      expect(esMayorDeEdad(25)).toBe(true);
    });

    it("retorna false si edad < 18", () => {
      expect(esMayorDeEdad(17)).toBe(false);
      expect(esMayorDeEdad(10)).toBe(false);
      expect(esMayorDeEdad(0)).toBe(false);
    });
  });

  describe("Reto 2: mensajeEdad", () => {
    it("retorna 'eres mayor de edad' si edad >= 18", () => {
      expect(mensajeEdad(18)).toBe("eres mayor de edad");
      expect(mensajeEdad(20)).toBe("eres mayor de edad");
    });

    it("retorna 'eres menor de edad' si edad < 18", () => {
      expect(mensajeEdad(17)).toBe("eres menor de edad");
      expect(mensajeEdad(10)).toBe("eres menor de edad");
    });
  });

  describe("Reto 3: mensajeEdadDetallado", () => {
    it("retorna 'eres mayor de edad' si edad >= 19", () => {
      expect(mensajeEdadDetallado(19)).toBe("eres mayor de edad");
      expect(mensajeEdadDetallado(25)).toBe("eres mayor de edad");
    });

    it("retorna 'Tienes dieciocho años' si edad === 18", () => {
      expect(mensajeEdadDetallado(18)).toBe("Tienes dieciocho años");
    });

    it("retorna 'eres menor de edad' si edad < 18", () => {
      expect(mensajeEdadDetallado(17)).toBe("eres menor de edad");
      expect(mensajeEdadDetallado(0)).toBe("eres menor de edad");
    });
  });

  describe("Reto 4: cumpleMinimo", () => {
    it("retorna true si valor >= minimo", () => {
      expect(cumpleMinimo(10, 10)).toBe(true);
      expect(cumpleMinimo(15, 10)).toBe(true);
      expect(cumpleMinimo(100, 50)).toBe(true);
    });

    it("retorna false si valor < minimo", () => {
      expect(cumpleMinimo(5, 10)).toBe(false);
      expect(cumpleMinimo(9, 10)).toBe(false);
    });
  });

  describe("Reto 5: nivelAcceso", () => {
    it("retorna 'adulto' si edad >= 19", () => {
      expect(nivelAcceso(19)).toBe("adulto");
      expect(nivelAcceso(30)).toBe("adulto");
    });

    it("retorna 'dieciocho' si edad === 18", () => {
      expect(nivelAcceso(18)).toBe("dieciocho");
    });

    it("retorna 'menor' si edad < 18", () => {
      expect(nivelAcceso(17)).toBe("menor");
      expect(nivelAcceso(10)).toBe("menor");
    });
  });

  describe("Reto 6: puedeEntrar", () => {
    it("retorna true si edad >= 18", () => {
      expect(puedeEntrar(18, false)).toBe(true);
      expect(puedeEntrar(20, false)).toBe(true);
    });

    it("retorna true si tiene permiso especial aunque sea menor", () => {
      expect(puedeEntrar(17, true)).toBe(true);
      expect(puedeEntrar(10, true)).toBe(true);
    });

    it("retorna false si es menor y no tiene permiso", () => {
      expect(puedeEntrar(17, false)).toBe(false);
      expect(puedeEntrar(10, false)).toBe(false);
    });
  });
});

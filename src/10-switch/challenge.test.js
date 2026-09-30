import { describe, it, expect } from "vitest";
import {
  tipoDeDia,
  mensajeOpcion,
  categoriaPorCodigo,
  diasDelMes,
  nivelDeUsuario,
} from "./challenge.js";

describe("Reto 10 - Switch en JavaScript", () => {
  describe("Reto 1: tipoDeDia", () => {
    it('retorna "día laboral" para lunes a viernes', () => {
      expect(tipoDeDia("lunes")).toBe("día laboral");
      expect(tipoDeDia("martes")).toBe("día laboral");
      expect(tipoDeDia("miércoles")).toBe("día laboral");
      expect(tipoDeDia("jueves")).toBe("día laboral");
      expect(tipoDeDia("viernes")).toBe("día laboral");
    });

    it('retorna "fin de semana" para sábado y domingo', () => {
      expect(tipoDeDia("sábado")).toBe("fin de semana");
      expect(tipoDeDia("domingo")).toBe("fin de semana");
    });

    it('retorna "día no válido" para otro valor', () => {
      expect(tipoDeDia("otro")).toBe("día no válido");
      expect(tipoDeDia("")).toBe("día no válido");
      expect(tipoDeDia("Lunes")).toBe("día no válido");
    });
  });

  describe("Reto 2: mensajeOpcion", () => {
    it('retorna "Opción A" para "a"', () => {
      expect(mensajeOpcion("a")).toBe("Opción A");
    });

    it('retorna "Opción B" para "b"', () => {
      expect(mensajeOpcion("b")).toBe("Opción B");
    });

    it('retorna "Opción C" para "c"', () => {
      expect(mensajeOpcion("c")).toBe("Opción C");
    });

    it('retorna "opción no válida" para otro valor', () => {
      expect(mensajeOpcion("d")).toBe("opción no válida");
      expect(mensajeOpcion("")).toBe("opción no válida");
      expect(mensajeOpcion("A")).toBe("opción no válida");
    });
  });

  describe("Reto 3: categoriaPorCodigo", () => {
    it('retorna "electrónica" para "E1" y "E2"', () => {
      expect(categoriaPorCodigo("E1")).toBe("electrónica");
      expect(categoriaPorCodigo("E2")).toBe("electrónica");
    });

    it('retorna "hogar" para "H1"', () => {
      expect(categoriaPorCodigo("H1")).toBe("hogar");
    });

    it('retorna "desconocido" para otro código', () => {
      expect(categoriaPorCodigo("E3")).toBe("desconocido");
      expect(categoriaPorCodigo("X")).toBe("desconocido");
      expect(categoriaPorCodigo("")).toBe("desconocido");
    });
  });

  describe("Reto 4: diasDelMes", () => {
    it("retorna 31 para meses de 31 días", () => {
      expect(diasDelMes(1)).toBe(31);
      expect(diasDelMes(3)).toBe(31);
      expect(diasDelMes(5)).toBe(31);
      expect(diasDelMes(7)).toBe(31);
      expect(diasDelMes(8)).toBe(31);
      expect(diasDelMes(10)).toBe(31);
      expect(diasDelMes(12)).toBe(31);
    });

    it("retorna 30 para meses de 30 días", () => {
      expect(diasDelMes(4)).toBe(30);
      expect(diasDelMes(6)).toBe(30);
      expect(diasDelMes(9)).toBe(30);
      expect(diasDelMes(11)).toBe(30);
    });

    it("retorna 28 para febrero", () => {
      expect(diasDelMes(2)).toBe(28);
    });

    it("retorna 0 para mes inválido", () => {
      expect(diasDelMes(0)).toBe(0);
      expect(diasDelMes(13)).toBe(0);
      expect(diasDelMes(-1)).toBe(0);
    });
  });

  describe("Reto 5: nivelDeUsuario", () => {
    it('retorna "acceso básico" para principiante', () => {
      expect(nivelDeUsuario("principiante")).toBe("acceso básico");
    });

    it('retorna "acceso estándar" para intermedio', () => {
      expect(nivelDeUsuario("intermedio")).toBe("acceso estándar");
    });

    it('retorna "acceso completo" para avanzado', () => {
      expect(nivelDeUsuario("avanzado")).toBe("acceso completo");
    });

    it('retorna "nivel no válido" para otro valor', () => {
      expect(nivelDeUsuario("admin")).toBe("nivel no válido");
      expect(nivelDeUsuario("")).toBe("nivel no válido");
    });
  });
});

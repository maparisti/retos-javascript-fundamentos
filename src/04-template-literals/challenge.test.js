import { describe, it, expect } from "vitest";
import {
  crearMensajeBienvenida,
  concatenarConMas,
  interpolarVariables,
  calcularTotalComoString,
  tipoDeResultadoInterpolado,
  crearNotaMultilinea,
} from "./challenge.js";

describe("Reto 04 - Template literals en JavaScript", () => {
  describe("Reto 1: crearMensajeBienvenida", () => {
    it("retorna mensaje con nombre y versión interpolados", () => {
      expect(crearMensajeBienvenida("JavaScript", "6")).toBe(
        "Bienvenido a JavaScript, versión 6.",
      );
    });

    it("funciona con otros valores", () => {
      expect(crearMensajeBienvenida("Node", "20")).toBe(
        "Bienvenido a Node, versión 20.",
      );
    });
  });

  describe("Reto 2: concatenarConMas", () => {
    it("une dos strings con un espacio", () => {
      expect(concatenarConMas("Hola", "mundo")).toBe("Hola mundo");
    });

    it("concatena cualquier par de strings", () => {
      expect(concatenarConMas("Curso", "Platzi")).toBe("Curso Platzi");
    });
  });

  describe("Reto 3: interpolarVariables", () => {
    it("retorna frase con nombre y curso interpolados", () => {
      expect(interpolarVariables("JavaScript", "Fundamentos")).toBe(
        "Curso de JavaScript: Fundamentos.",
      );
    });

    it("funciona con otros valores", () => {
      expect(interpolarVariables("React", "Avanzado")).toBe(
        "Curso de React: Avanzado.",
      );
    });
  });

  describe("Reto 4: calcularTotalComoString", () => {
    it("retorna el producto como string", () => {
      expect(calcularTotalComoString(100, 3)).toBe("300");
    });

    it("el resultado es tipo string", () => {
      const resultado = calcularTotalComoString(5, 4);
      expect(typeof resultado).toBe("string");
      expect(resultado).toBe("20");
    });
  });

  describe("Reto 5: tipoDeResultadoInterpolado", () => {
    it("retorna 'string' porque la interpolación produce string", () => {
      expect(tipoDeResultadoInterpolado()).toBe("string");
    });
  });

  describe("Reto 6: crearNotaMultilinea", () => {
    it("retorna string con título y dos items en líneas distintas", () => {
      const resultado = crearNotaMultilinea("Mi nota", "item uno", "item dos");
      expect(resultado).toContain("Mi nota");
      expect(resultado).toContain("- item uno");
      expect(resultado).toContain("- item dos");
      expect(resultado.split("\n").length).toBe(3);
    });

    it("mantiene el orden título, item1, item2", () => {
      const resultado = crearNotaMultilinea("Titulo", "A", "B");
      const lineas = resultado.split("\n");
      expect(lineas[0].trim()).toBe("Titulo");
      expect(lineas[1].trim()).toBe("- A");
      expect(lineas[2].trim()).toBe("- B");
    });
  });
});

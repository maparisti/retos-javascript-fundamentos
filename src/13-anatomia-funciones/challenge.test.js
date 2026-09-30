import { describe, it, expect } from "vitest";
import { saludar, crearUsuario, multiplicar, crearNota } from "./challenge.js";

describe("Reto 13 - Anatomía de funciones en JavaScript", () => {
  describe("Reto 1: saludar", () => {
    it("retorna saludo con template literal", () => {
      expect(saludar("Óscar")).toBe("Hola, Óscar");
    });

    it("retorna saludo para otro nombre", () => {
      expect(saludar("Felipe")).toBe("Hola, Felipe");
    });

    it("retorna tipo string", () => {
      expect(typeof saludar("Ana")).toBe("string");
    });
  });

  describe("Reto 2: crearUsuario", () => {
    it("retorna objeto con nombre y edad", () => {
      expect(crearUsuario("Ana", 25)).toEqual({ nombre: "Ana", edad: 25 });
    });

    it("retorna objeto con otros argumentos", () => {
      expect(crearUsuario("Luis", 30)).toEqual({ nombre: "Luis", edad: 30 });
    });

    it("retorna un objeto", () => {
      const usuario = crearUsuario("Pedro", 18);
      expect(typeof usuario).toBe("object");
      expect(usuario).toHaveProperty("nombre");
      expect(usuario).toHaveProperty("edad");
    });
  });

  describe("Reto 3: multiplicar", () => {
    it("retorna producto de dos números", () => {
      expect(multiplicar(4, 5)).toBe(20);
    });

    it("retorna tipo number", () => {
      expect(typeof multiplicar(3, 7)).toBe("number");
    });

    it("multiplica correctamente otros valores", () => {
      expect(multiplicar(10, 2)).toBe(20);
      expect(multiplicar(0, 100)).toBe(0);
    });
  });

  describe("Reto 4: crearNota", () => {
    it("usa título por defecto cuando no se pasa", () => {
      const nota = crearNota("Mi contenido");
      expect(nota.titulo).toBe("sin título");
      expect(nota.contenido).toBe("Mi contenido");
      expect(typeof nota.creado).toBe("number");
      expect(nota.creado).toBeGreaterThan(0);
    });

    it("usa el título pasado como argumento", () => {
      const nota = crearNota("Otro contenido", "Mi nota");
      expect(nota.titulo).toBe("Mi nota");
      expect(nota.contenido).toBe("Otro contenido");
      expect(typeof nota.creado).toBe("number");
    });

    it("creado es un timestamp en milisegundos (número)", () => {
      const antes = Date.now();
      const nota = crearNota("Test");
      const despues = Date.now();
      expect(nota.creado).toBeGreaterThanOrEqual(antes);
      expect(nota.creado).toBeLessThanOrEqual(despues + 1);
    });
  });
});

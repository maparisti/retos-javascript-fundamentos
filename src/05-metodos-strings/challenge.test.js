import { describe, it, expect } from "vitest";
import {
  contarCaracteres,
  extraerConSlice,
  extraerDesdeFinal,
  dividirEnPartes,
  limpiarEspacios,
  normalizarMinusculas,
  incluyeSubcadena,
  empiezaCon,
  terminaCon,
  reemplazarPrimera,
} from "./challenge.js";

describe("Reto 05 - Métodos esenciales de strings en JavaScript", () => {
  describe("Reto 1: contarCaracteres", () => {
    it("retorna la cantidad de caracteres del string", () => {
      expect(contarCaracteres("hola mundo")).toBe(10);
    });

    it("retorna 0 para string vacío", () => {
      expect(contarCaracteres("")).toBe(0);
    });
  });

  describe("Reto 2: extraerConSlice", () => {
    it("extrae desde inicio hasta fin (sin incluir fin)", () => {
      expect(extraerConSlice("JavaScript es genial", 0, 10)).toBe("JavaScript");
    });

    it("si fin no se pasa, extrae hasta el final", () => {
      expect(extraerConSlice("JavaScript es genial", 11)).toBe("es genial");
    });

    it("extrae con índices intermedios", () => {
      expect(extraerConSlice("hola mundo", 0, 4)).toBe("hola");
    });
  });

  describe("Reto 3: extraerDesdeFinal", () => {
    it("retorna los últimos n caracteres", () => {
      expect(extraerDesdeFinal("JavaScript es genial", 6)).toBe("genial");
    });

    it("funciona con cualquier n", () => {
      expect(extraerDesdeFinal("hola", 2)).toBe("la");
    });
  });

  describe("Reto 4: dividirEnPartes", () => {
    it("divide por el separador y retorna array", () => {
      expect(dividirEnPartes("línea uno, línea dos, línea tres", ", ")).toEqual(
        ["línea uno", "línea dos", "línea tres"],
      );
    });

    it("divide por espacio", () => {
      expect(dividirEnPartes("a b c", " ")).toEqual(["a", "b", "c"]);
    });
  });

  describe("Reto 5: limpiarEspacios", () => {
    it("elimina espacios al inicio y al final", () => {
      expect(limpiarEspacios("  hola mundo  ")).toBe("hola mundo");
    });

    it("no modifica espacios internos", () => {
      expect(limpiarEspacios("  hola   mundo  ")).toBe("hola   mundo");
    });
  });

  describe("Reto 6: normalizarMinusculas", () => {
    it("convierte todo a minúsculas", () => {
      expect(normalizarMinusculas("JavaScript")).toBe("javascript");
    });

    it("mantiene lo que ya está en minúsculas", () => {
      expect(normalizarMinusculas("hola")).toBe("hola");
    });
  });

  describe("Reto 7: incluyeSubcadena", () => {
    it("retorna true si el texto incluye la subcadena", () => {
      expect(
        incluyeSubcadena("aprende JavaScript desde cero", "JavaScript"),
      ).toBe(true);
    });

    it("retorna false si no la incluye", () => {
      expect(incluyeSubcadena("aprende JavaScript desde cero", "Python")).toBe(
        false,
      );
    });
  });

  describe("Reto 8: empiezaCon", () => {
    it("retorna true si el texto empieza con el prefijo", () => {
      expect(empiezaCon("documento.md", "doc")).toBe(true);
    });

    it("retorna false si no empieza con el prefijo", () => {
      expect(empiezaCon("documento.md", "pdf")).toBe(false);
    });
  });

  describe("Reto 9: terminaCon", () => {
    it("retorna true si el texto termina con el sufijo", () => {
      expect(terminaCon("documento.md", ".md")).toBe(true);
    });

    it("retorna false si no termina con el sufijo", () => {
      expect(terminaCon("documento.md", ".txt")).toBe(false);
    });
  });

  describe("Reto 10: reemplazarPrimera", () => {
    it("reemplaza solo la primera ocurrencia", () => {
      const texto = "hola mundo, hola JavaScript";
      expect(reemplazarPrimera(texto, "hola", "hi")).toBe(
        "hi mundo, hola JavaScript",
      );
    });

    it("no muta el string original", () => {
      const texto = "hola mundo";
      reemplazarPrimera(texto, "hola", "hi");
      expect(texto).toBe("hola mundo");
    });
  });
});

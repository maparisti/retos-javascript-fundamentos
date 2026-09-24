// ============================================
// Reto: Template literals en JavaScript
// ============================================
// Completa cada función usando template literals (comillas invertidas `)
// y la interpolación ${} cuando se indique.
// Ejecuta los tests con: npx vitest src/04-template-literals
// ============================================

// --- Reto 1: Mensaje de bienvenida con interpolación ---
// Recibe "nombre" (ej: "JavaScript") y "version" (ej: "6").
// Retorna el string: "Bienvenido a [nombre], versión [version]."
// Usa template literals con ${nombre} y ${version}.
function crearMensajeBienvenida(nombre, version) {
  return `Bienvenido a ${nombre}, versión ${version}.`;
}

// --- Reto 2: Concatenación tradicional (contraste con +) ---
// Recibe dos strings "parte1" y "parte2".
// Retorna un solo string uniendo parte1 + " " + parte2 (concatenación con +).
function concatenarConMas(parte1, parte2) {
  return parte1 + " " + parte2;
}

// --- Reto 3: Interpolar variables en una frase ---
// Recibe "nombre" (ej: "JavaScript") y "curso" (ej: "Fundamentos").
// Retorna: "Curso de [nombre]: [curso]." usando template literals.
function interpolarVariables(nombre, curso) {
  return `Curso de ${nombre}: ${curso}.`;
}

// --- Reto 4: Expresión dentro de template literal ---
// Recibe "precio" (número) y "cantidad" (número).
// Retorna un string con el resultado de precio * cantidad usando
// un template literal: `${precio * cantidad}` (el resultado queda como string).
function calcularTotalComoString(precio, cantidad) {
  return `${precio * cantidad}`;
}

// --- Reto 5: Tipo de dato del resultado de interpolación ---
// Sin parámetros. Retorna el tipo de dato de la expresión `${1 + 2}`.
// Pista: usa typeof. El resultado de interpolación siempre es string.
function tipoDeResultadoInterpolado() {
  const resultado = `${1 + 2}`;
  return typeof resultado;
}

// --- Reto 6: Texto multilínea con template literals ---
// Recibe "titulo", "item1" e "item2" (strings).
// Retorna un string con varias líneas con este formato (incluye los saltos de línea):
//   [titulo]
//   - [item1]
//   - [item2]
// Usa template literals con saltos de línea nativos (no uses \n).
function crearNotaMultilinea(titulo, item1, item2) {
  return `${titulo}
  - ${item1}
  - ${item2}`;
}

export {
  crearMensajeBienvenida,
  concatenarConMas,
  interpolarVariables,
  calcularTotalComoString,
  tipoDeResultadoInterpolado,
  crearNotaMultilinea,
};

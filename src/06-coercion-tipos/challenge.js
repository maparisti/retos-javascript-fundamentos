// ============================================
// Reto: Coerción de tipos en JavaScript
// ============================================
// Practica coerción implícita (+, - con string/número, booleanos)
// y conversión explícita con Number, parseInt, parseFloat, String y Boolean.
// Ejecuta los tests con: npx vitest src/06-coercion-tipos
// ============================================

// --- Reto 1: Coerción implícita con el operador + ---
// Recibe "str" (string, ej: '5') y "num" (número, ej: 3).
// Retorna el resultado de str + num (JavaScript concatena, no suma).
// Ejemplo: '5' + 3 → '53'
function resultadoConcatenacionMas(str, num) {
  return str + num;
}

// --- Reto 2: Coerción implícita con el operador - ---
// Recibe "str" (string que representa un número, ej: '5') y "num" (número, ej: 3).
// Retorna el resultado de str - num (JavaScript convierte el string a número).
// Ejemplo: '5' - 3 → 2
function resultadoRestaConString(str, num) {
  return str - num;
}

// --- Reto 3: Booleano en operación numérica ---
// Recibe "bool" (booleano: true o false).
// Retorna el resultado de bool + 1 (JavaScript convierte el booleano a número).
// Ejemplo: true + 1 → 2, false + 1 → 1
function booleanoMasUno(bool) {
  return bool + 1;
}

// --- Reto 4: Conversión explícita de string a número ---
// Recibe "str" (string que representa un número, ej: '42').
// Retorna el número usando Number(str). Ejemplo: Number('42') → 42
function convertirStringANumero(str) {
  return Number(str);
}

// --- Reto 5: Parsear entero y decimal ---
// Recibe "strEntero" (ej: '42') y "strDecimal" (ej: '3.1415').
// Retorna un objeto { entero, decimal } donde:
//   entero = parseInt(strEntero, 10)
//   decimal = parseFloat(strDecimal)
function parsearEnteroYDecimal(strEntero, strDecimal) {
  return {
    entero: parseInt(strEntero, 10),
    decimal: parseFloat(strDecimal),
  };
}

// --- Reto 6: Conversión explícita de número a string ---
// Recibe "num" (número, ej: 123).
// Retorna el string usando String(num). Ejemplo: String(123) → '123'
function convertirNumeroAString(num) {
  return String(num);
}

// --- Reto 7: Conversión explícita a booleano ---
// Recibe "val" (cualquier valor: número, string, etc.).
// Retorna el booleano usando Boolean(val). Ejemplo: Boolean(1) → true, Boolean(0) → false
function convertirABooleano(val) {
  return Boolean(val);
}

export {
  resultadoConcatenacionMas,
  resultadoRestaConString,
  booleanoMasUno,
  convertirStringANumero,
  parsearEnteroYDecimal,
  convertirNumeroAString,
  convertirABooleano,
};

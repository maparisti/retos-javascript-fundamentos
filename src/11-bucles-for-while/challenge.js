// ============================================
// Reto: Bucles for, while y for...of en JavaScript
// ============================================
// Practica for (inicialización; condición; incremento), while, do-while,
// for...of para arrays y for...in para objetos. Usa length, índice i y template literals.
// Ejecuta los tests con: npx vitest src/11-bucles-for-while
// ============================================

// --- Reto 1: for con índice i ---
// Recibe "n" (número). Usa un bucle for con let i = 0; i < n; i++.
// Retorna un array con los números de 0 hasta n - 1 (ej: n = 5 → [0, 1, 2, 3, 4]).
function numerosHastaN(n) {
  // Tu código aquí
}

// --- Reto 2: while mientras se cumpla condición ---
// Recibe "limite" (número). Usa un bucle while: un contador empieza en 0
// y se incrementa mientras sea menor que limite. Retorna el valor del contador al terminar.
function contarConWhile(limite) {
  // Tu código aquí
}

// --- Reto 3: do-while (al menos una ejecución) ---
// Recibe "limite" (número). Usa do-while: un contador empieza en 0,
// en el do lo incrementas y en el while repites mientras contador < limite.
// Así se ejecuta al menos una vez antes de validar. Retorna el contador al terminar.
function contarConDoWhile(limite) {
  // Tu código aquí
}

// --- Reto 4: for con length e índice (array) ---
// Recibe "notas" (array de strings). Usa for con i desde 0 hasta notas.length.
// Retorna un array de strings con el formato "Índice: i -> Nota: valor" para cada elemento.
// Usa template literals y acceso por índice notas[i].
function formatearNotasConFor(notas) {
  // Tu código aquí
}

// --- Reto 5: for...of y condición ---
// Recibe "frutas" (array de strings). Usa for...of para iterar cada valor.
// Si encuentras el string 'manzana', retorna true. Si terminas el bucle sin encontrarla, retorna false.
// Puedes usar if dentro del bucle para decidir.
function tieneManzana(frutas) {
  // Tu código aquí
}

// --- Reto 6: for...in para objeto (clave-valor) ---
// Recibe "objeto" (un objeto con pares clave-valor). Usa for...in para recorrer sus claves.
// Retorna un array de strings con el formato "Clave: clave -> Valor: valor" para cada propiedad.
// Accede al valor con notación de corchetes: objeto[clave]. Usa template literals.
function clavesYValores(objeto) {
  // Tu código aquí
}

export {
  numerosHastaN,
  contarConWhile,
  contarConDoWhile,
  formatearNotasConFor,
  tieneManzana,
  clavesYValores,
};

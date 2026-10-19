// --- Reto 1: Crear array de frutas ---
// Retorna un array con tres frutas: 'manzana', 'banana', 'naranja'
function crearArrayFrutas() {
  const frutas = ["manzana", "banana", "naranja"];
  return frutas;
}

// --- Reto 2: Crear array mixto ---
// Retorna un array con: 1, 'texto', true, null, { tipo: 'objeto' }
function crearArrayMixto() {
  const mixto = [1, "texto", true, null, { tipo: "objeto" }];
  return mixto;
}

// --- Reto 3: Obtener primer elemento ---
// Recibe un array. Retorna el primer elemento.
function obtenerPrimerElemento(array) {
  return array[0];
}

// --- Reto 4: Obtener último elemento ---
// Recibe un array. Retorna el último elemento.
// Pista: usa length
function obtenerUltimoElemento(array) {
  return array[array.length - 1];
}

// --- Reto 5: Agregar al final ---
// Recibe un array y un elemento. Agrega el elemento al final y retorna el array.
function agregarAlFinal(array, elemento) {
  array.push(elemento);
  return array;
}

// --- Reto 6: Agregar al inicio ---
// Recibe un array y un elemento. Agrega el elemento al inicio y retorna el array.
// Pista: unshift
function agregarAlInicio(array, elemento) {
  array.unshift(elemento);
  return array;
}

// --- Reto 7: Insertar en posición ---
// Recibe un array, una posición y un elemento.
// Inserta el elemento en esa posición sin reemplazar nada y retorna el array.
// Pista: splice con 0 elementos a eliminar
function insertarEnPosicion(array, posicion, elemento) {
  array.splice(posicion, 0, elemento);
  return array;
}

// --- Reto 8: Reemplazar en posición ---
// Recibe un array, una posición y un nuevo elemento.
// Reemplaza el elemento en esa posición y retorna el array.
// Pista: splice eliminando 1 elemento
function reemplazarEnPosicion(array, posicion, nuevoElemento) {
  array.splice(posicion, 1, nuevoElemento);
  return array;
}

// --- Reto 9: Eliminar último ---
// Recibe un array. Elimina el último elemento y retorna el array.
function eliminarUltimo(array) {
  array.pop();
  return array;
}

// --- Reto 10: Eliminar primero ---
// Recibe un array. Elimina el primer elemento y retorna el array.
function eliminarPrimero(array) {
  array.shift();
  return array;
}

// --- Reto 11: Eliminar en posición ---
// Recibe un array y una posición. Elimina el elemento en esa posición y retorna el array.
function eliminarEnPosicion(array, posicion) {
  array.splice(posicion, 1);
  return array;
}

// --- Reto 12: Obtener longitud ---
// Recibe un array. Retorna su longitud.
function obtenerLongitud(array) {
  return array.length;
}

// --- Reto 13: Es array ---
// Recibe un valor. Retorna true si es un array, false si no.
// Pista: Array.isArray()
function esArray(valor) {
  return Array.isArray(valor);
}

// --- Reto 14: Encontrar índice ---
// Recibe un array y un elemento. Retorna el índice de ese elemento.
// Si no existe, retorna -1.
// Pista: indexOf
function encontrarIndice(array, elemento) {
  return array.indexOf(elemento);
}

// --- Reto 15: CRUD completo ---
// Empieza con [1, 2, 3] y aplica estas operaciones en orden:
// 1. Agrega 0 al inicio
// 2. Agrega 4 al final
// 3. Reemplaza el elemento en posición 1 por 10
// 4. Elimina el último
// 5. Elimina el elemento en posición 2
// Retorna el array resultante.
function crudCompleto() {
  const array = [1, 2, 3];
  array.unshift(0);
  array.push(4);
  array.splice(1, 1, 10);
  array.pop();
  array.splice(2, 1);
  return array;
}

export {
  crearArrayFrutas,
  crearArrayMixto,
  obtenerPrimerElemento,
  obtenerUltimoElemento,
  agregarAlFinal,
  agregarAlInicio,
  insertarEnPosicion,
  reemplazarEnPosicion,
  eliminarUltimo,
  eliminarPrimero,
  eliminarEnPosicion,
  obtenerLongitud,
  esArray,
  encontrarIndice,
  crudCompleto,
};

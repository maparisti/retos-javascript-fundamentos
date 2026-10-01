// ============================================
// Reto: Scope en JavaScript: global, función y bloque
// ============================================
// Completa cada función según las instrucciones.
// Ejecuta los tests con: npx vitest src/14-scope-javascript
// ============================================

// --- Reto 1: Acceso a variable global ---
// Declara una variable global llamada "mensajeGlobal" con el valor "Hola mundo"
// y retórnala desde la función.
const mensajeGlobal = "Hola mundo";
function accederGlobal() {
  return mensajeGlobal;
}

// --- Reto 2: Scope de función ---
// Dentro de la función, declara una variable local "secreto" con el valor "1234"
// y retorna un objeto que tenga acceso a la variable local.
function scopeFuncion() {
  const secreto = "1234";
  return {
    secreto: secreto,
  };
}

// --- Reto 3: Scope de bloque ---
// Dentro de un bloque if, declara una variable "mensajeBloque" con let
// y retorna su valor. La variable solo debe existir dentro del bloque.
function scopeBloque() {
  if (true) {
    let mensajeBloque = "bloque";
    return mensajeBloque;
  }
}

// --- Reto 4: Acceso anidado de scopes ---
// Crea una variable global, una de función y una de bloque.
// Retorna un objeto con los tres valores para demostrar qué se puede acceder
// desde cada nivel.
const globalValor = "global";

function accesoAnidado() {
  const funcionValor = "funcion";

  if (true) {
    const bloqueValor = "bloque";
    return {
      global: globalValor,
      funcion: funcionValor,
      bloque: bloqueValor,
    };
  }
}

// --- Reto 5: Error de scope ---
// Esta función debe intentar acceder a una variable declarada en un bloque
// desde fuera del bloque. Debes manejar el error usando try-catch
// y retornar un objeto con { error: true, mensaje: "Variable no accesible" }
function errorScope() {
  if (true) {
    const soloToyAqui = "aiudaa, sacame de aaquiii";
  }
  try {
    return soloToyAqui;
  } catch (error) {
    return {
      error: true,
      mensaje: "Variable no accesible",
    };
  }
}
// --- Reto 6: Return vs console.log ---
// Crea una variable dentro de la función, haz console.log de ella,
// pero retorna un string diferente. Demuestra que console.log no afecta el return.
function returnVsConsole() {
  let valor = "interno";
  console.log(valor);
  return "retorno diferente";
}

// --- Reto 7: Hoisting con var ---
// Sin cambiar el orden de las líneas, usa var para demostrar hoisting.
// La función debe retornar un objeto con:
//   { antes: undefined, despues: "hoisting" }
function demostrarHoistingVar() {
  var hoisting;
  const antes = hoisting;
  hoisting = "hoisting";
  const despues = hoisting;
  return {
    antes,
    despues,
  };
}

// --- Reto 8: Template literals y scope ---
// Usa template literals para construir un mensaje que incluya variables
// de diferentes scopes (global, función, bloque).
// Retorna el mensaje completo.
const app = "MiApp";

function templateLiteralsScope() {
  const usuario = "Ana";
  if (true) {
    const rol = "admin";
    return `Bienvenido ${usuario} con rol ${rol} en ${app}`;
  }
}

export {
  accederGlobal,
  scopeFuncion,
  scopeBloque,
  accesoAnidado,
  errorScope,
  returnVsConsole,
  demostrarHoistingVar,
  templateLiteralsScope,
};

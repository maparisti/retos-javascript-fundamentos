// --- Reto 1: Cuenta bancaria ---
// Crea una función que reciba un saldo inicial.
// Retorna un objeto con tres métodos:
//   depositar(cantidad) → suma al saldo, retorna mensaje con cantidad y saldo actual
//   retirar(cantidad) → resta del saldo (si hay fondos), retorna mensaje; si no, "Fondos insuficientes."
//   consultarSaldo() → retorna mensaje con el saldo actual
function crearCuentaBancaria(saldoInicial) {
  let saldo = saldoInicial;

  return {
    depositar(cantidad) {
      saldo += cantidad;
      return `Depositado $${cantidad}. Saldo actual: $${saldo}.`;
    },

    retirar(cantidad) {
      if (cantidad < saldo) {
        saldo -= cantidad;
        return `Retirado $${cantidad}. Saldo actual: $${saldo}.`;
      } else {
        return "Fondos insuficientes.";
      }
    },

    consultarSaldo() {
      return `Saldo: $${saldo}.`;
    },
  };
}

// --- Reto 2: Contador ---
// Crea una función sin parámetros.
// Retorna un objeto con tres métodos:
//   incrementar() → suma 1 al contador y lo retorna
//   decrementar() → resta 1 al contador y lo retorna
//   obtenerValor() → retorna el valor actual del contador
function crearContador() {
  let contador = 0;
  return {
    incrementar() {
      contador++;
      return contador;
    },

    decrementar() {
      contador--;
      return contador;
    },

    obtenerValor() {
      return contador;
    },
  };
}

// --- Reto 3: Acumulador ---
// Crea una función sin parámetros.
// Retorna un objeto con dos métodos:
//   sumar(valor) → suma el valor al total y lo retorna
//   total() → retorna el total acumulado
function crearAcumulador() {
  let total = 0;
  return {
    sumar(valor) {
      total += valor;
      return total;
    },
    total() {
      return total;
    },
  };
}

// --- Reto 4: Carrito de compras ---
// Crea una función sin parámetros.
// Retorna un objeto con cuatro métodos:
//   agregar(producto, precio) → agrega { producto, precio } a la lista, retorna mensaje
//   remover(producto) → elimina el producto de la lista por nombre, retorna mensaje
//   total() → retorna la suma de todos los precios
//   vaciar() → deja la lista vacía, retorna mensaje
function crearCarrito() {
  let carrito = [];

  return {
    verCarrito() {
      let n = 1;
      let organizarCarrito = [];
      for (const item of carrito) {
        organizarCarrito.push(`${n} ${item.producto} - $${item.precio}`);
        n++;
      }
      return organizarCarrito.join("\n");
    },

    agregar(producto, precio) {
      carrito.push({ producto, precio });
      return `Producto ${producto} agregado al carrito.`;
    },

    remover(producto) {
      carrito = carrito.filter((item) => item.producto !== producto);
      return `Producto ${producto} removido del carrito.`;
    },

    total() {
      return carrito.reduce((acumulado, item) => acumulado + item.precio, 0);
    },

    vaciar() {
      carrito = [];
      return "Carrito vaciado.";
    },
  };
}

// --- Reto 5: Cache ---
// Crea una función sin parámetros.
// Retorna un objeto con cuatro métodos:
//   guardar(clave, valor) → guarda el valor bajo esa clave, retorna mensaje
//   obtener(clave) → retorna el valor guardado bajo esa clave
//   existe(clave) → retorna true si la clave existe, false si no
//   limpiar() → borra todo el cache, retorna mensaje
function crearCache() {
  let cache = {};
  return {
    guardar(clave, valor) {
      cache[clave] = valor;
      console.log(cache);
      return "Cache guardado";
    },

    obtener(clave) {
      try {
        return cache[clave];
      } catch (error) {
        return "Esa clave no existir ñaña :v";
      }
    },

    existe(clave) {
      return clave in cache;
    },

    limpiar() {
      cache = {};
      return "Cache limpiado.";
    },
  };
}

// --- Reto 6: Temporizador ---
// Crea una función sin parámetros.
// Retorna un objeto con cuatro métodos:
//   iniciar() → empieza a contar segundos (si no está corriendo ya), retorna mensaje
//   detener() → para el conteo (si está corriendo), retorna mensaje
//   reiniciar() → pone los segundos en 0, retorna mensaje
//   obtenerTiempo() → retorna los segundos actuales
// Pista: usa setInterval para incrementar los segundos cada 1000ms
function crearTemporizador() {
  let temporizador = false;
  let segundos = 0;
  return {
    iniciar() {
      if (temporizador === false) {
        temporizador = setInterval(() => {
          segundos++;
        }, 1000);
        return "Temporizador iniciado.";
      } else {
        return `El temporizador ya esta corriendo`;
      }
    },

    detener() {
      if (temporizador) {
        clearInterval(temporizador);
        temporizador = false;
        return "Temporizador detenido.";
      } else {
        return "El temporizador esta apagado";
      }
    },

    reiniciar() {
      segundos = 0;
      return "Temporizador reiniciado.";
    },

    obtenerTiempo() {
      return segundos;
    },
  };
}

// --- Reto 7: Gestor de tareas ---
// Crea una función sin parámetros.
// Retorna un objeto con cuatro métodos:
//   agregarTarea(tarea) → agrega la tarea con un id autoincremental y completada: false, retorna mensaje
//   completarTarea(id) → marca la tarea con ese id como completada: true, retorna mensaje; si no existe, retorna mensaje de error
//   obtenerTareas() → retorna el array completo de tareas
//   tareasPendientes() → retorna solo las tareas donde completada es false
function crearGestorTareas() {
  let tareas = [];
  let id = 1;
  return {
    agregarTarea(tarea) {
      tareas.push({ id: id, tarea: tarea, completada: false });
      const idActual = id;
      id++;
      return `Tarea "${tarea}" agregada con ID ${idActual}.`;
    },

    completarTarea(id) {
      const tarea = tareas.find((t) => t.id === id);
      if (tarea) {
        tarea.completada = true;
        return `Tarea ${id} marcada como completada.`;
      } else {
        return `Tarea con ID ${id} no encontrada.`;
      }
    },

    obtenerTareas() {
      return tareas;
    },

    tareasPendientes() {
      const tareasPendientes = [];
      for (const tarea of tareas) {
        if (tarea.completada === false) {
          tareasPendientes.push(tarea);
        }
      }
      return tareasPendientes;
    },
  };
}

// --- Reto 8: Banco con múltiples cuentas ---
// Crea una función sin parámetros.
// Retorna un objeto con tres métodos:
//   crearCuenta(saldoInicial) → crea una cuenta bancaria (reto 1) con un id autoincremental, retorna mensaje
//   obtenerCuenta(id) → retorna la cuenta con ese id (o null si no existe)
//   eliminarCuenta(id) → elimina la cuenta con ese id, retorna mensaje; si no existe, retorna mensaje de error
// Pista: reutiliza crearCuentaBancaria del reto 1
function crearBanco() {
  let cuentas = {};
  let id = 1;

  return {
    crearCuenta(saldoInicial) {
      const idActual = id;
      cuentas[idActual] = crearCuentaBancaria(saldoInicial);
      id++;
      return `Cuenta ${idActual} creada con saldo inicial $${saldoInicial}.`;
    },

    obtenerCuenta(id) {
      return cuentas[id] || null;
    },

    eliminarCuenta(id) {
      if (cuentas[id]) {
        delete cuentas[id];
        return `Cuenta ${id} eliminada.`;
      } else {
        return `Cuenta con ID ${id} no encontrada.`;
      }
    },
  };
}

export {
  crearCuentaBancaria,
  crearContador,
  crearAcumulador,
  crearCarrito,
  crearCache,
  crearTemporizador,
  crearGestorTareas,
  crearBanco,
};

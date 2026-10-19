// --- Reto 1: Crear usuario ---
// Crea una función sin parámetros.
// Debe retornar un objeto con estas propiedades:
//   nombre: "Ana"
//   edad: 28
//   email: "ana@example.com"
function crearUsuario() {
  const persona = {
    nombre: "Ana",
    edad: 28,
    email: "ana@example.com",
  };

  return persona;
}

// --- Reto 2: Obtener nombre ---
// Recibe un objeto usuario.
// Retorna el valor de la propiedad "nombre".
function obtenerNombre(usuario) {
  return usuario.nombre;
}

// --- Reto 3: Propiedad dinámica ---
// Recibe un objeto y el nombre de una propiedad (como string).
// Retorna el valor de esa propiedad usando notación de corchetes.
function obtenerPropiedadDinamica(objeto, propiedad) {
  const campo = propiedad;
  return objeto[campo];
}

// --- Reto 4: Verificar email ---
// Recibe un objeto usuario.
// Retorna true si el usuario tiene la propiedad "email", false si no.
// Pista: usa hasOwnProperty
function tieneEmail(usuario) {
  if (usuario.email) {
    return true;
  } else {
    return false;
  }
}

// --- Reto 5: Obtener ciudad ---
// Recibe un objeto usuario que puede o no tener dirección.
// Retorna la ciudad del usuario si existe: usuario.direccion.ciudad
// Si no existe alguna parte del camino, retorna undefined (sin errores).
// Pista: optional chaining ?.
function obtenerCiudad(usuario) {
  return usuario.direccion?.ciudad;
}

// --- Reto 6: Crear producto ---
// Crea una función sin parámetros.
// Debe retornar un objeto con estas propiedades:
//   id: 1
//   nombre: "Laptop"
//   precio: 999.99
//   especificaciones: objeto con marca, memoria y almacenamiento
//     marca: "TechBrand"
//     memoria: "16GB"
//     almacenamiento: "512GB SSD"
function crearProducto() {
  const producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    especificaciones: {
      marca: "TechBrand",
      memoria: "16GB",
      almacenamiento: "512GB SSD",
    },
  };
  return producto;
}

// --- Reto 7: Obtener memoria ---
// Recibe un objeto producto con especificaciones anidadas.
// Retorna el valor de producto.especificaciones.memoria
// Si no existe alguna parte del camino, retorna undefined (sin errores).
function obtenerMemoria(producto) {
  return producto.especificaciones?.memoria;
}

// --- Reto 8: Agregar propiedad ---
// Recibe un objeto, el nombre de una propiedad (string) y un valor.
// Agrega esa propiedad con ese valor al objeto.
// Retorna el objeto modificado.
function agregarPropiedad(objeto, nombrePropiedad, valor) {
  objeto[nombrePropiedad] = valor;
  return objeto;
}

// --- Reto 9: Calculadora con estado ---
// Crea una función sin parámetros.
// Retorna un objeto con tres métodos:
//   sumar(numero) → suma el número al valor interno
//   restar(numero) → resta el número al valor interno
//   obtenerValor() → retorna el valor actual
// El valor empieza en 0.
// Pista: usa "this" para acceder al valor dentro del objeto
function crearCalculadora() {
  return {
    valor: 0,
    sumar(numero) {
      this.valor += numero;
      return this.valor;
    },

    restar(numero) {
      this.valor -= numero;
      return this.valor;
    },

    obtenerValor() {
      return this.valor;
    },
  };
}

// --- Reto 10: Obtener Twitter ---
// Recibe un objeto usuario con estructura profundamente anidada.
// Retorna usuario.perfil.redes.twitter
// Si no existe alguna parte del camino, retorna "no-disponible"
function obtenerTwitter(usuario) {
  return usuario?.perfil?.redes?.twitter || "no-disponible";
}
export {
  crearUsuario,
  obtenerNombre,
  obtenerPropiedadDinamica,
  tieneEmail,
  obtenerCiudad,
  crearProducto,
  obtenerMemoria,
  agregarPropiedad,
  crearCalculadora,
  obtenerTwitter,
};

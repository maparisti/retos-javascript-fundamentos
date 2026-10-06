function crearTemporizador() {
  let temporizador = false;
  let segundos = 0;
  return {
    iniciar() {
      if (temporizador === false) {
        temporizador = setInterval(() => {
          segundos++;
          console.log(`Han pasado ${segundos}`);
        }, 1000);
        return `Temporizador iniciado`;
      } else {
        return `El temporizador ya esta corriendo`;
      }
    },

    detener() {
      if (temporizador) {
        clearInterval(temporizador);
        temporizador = false;
        return `Èl temporizador se detuvo en ${segundos} segundos`;
      } else {
        return "El temporizador esta apagado";
      }
    },

    reiniciar() {
      segundos = 0;
      return `Èl temporizador se ha reiniciado a ${segundos}`;
    },

    obtenerTiempo() {
      return `El temporizador lleva ${segundos} segundos contados`;
    },
  };
}

const timer = crearTemporizador();

console.log(timer.iniciar()); // "Temporizador iniciado."
console.log(timer.iniciar()); // "El temporizador ya está corriendo."

setTimeout(() => {
  console.log(timer.obtenerTiempo()); // ~3
  console.log(timer.detener()); // "Temporizador detenido."
  console.log(timer.detener()); // "El temporizador no está corriendo."

  timer.iniciar();
  setTimeout(() => {
    console.log(timer.obtenerTiempo()); // ~2, no reinició desde 0
    console.log(timer.reiniciar()); // "Temporizador reiniciado."
    console.log(timer.obtenerTiempo()); // 0
  }, 2000);
}, 3000);
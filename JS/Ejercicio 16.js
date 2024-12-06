// 16 .Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.

const distanciaKm = 2;
const tiempoMin = 5;

const distanciaMetros = distanciaKm * 1000;

const tiempoSegundos = tiempoMin * 60;

const velocidadMetrosSegundo = distanciaMetros / tiempoSegundos;

// Mostrar el resultado por consola
console.log(`La velocidad del proyectil es ${velocidadMetrosSegundo} metros por segundo.`);

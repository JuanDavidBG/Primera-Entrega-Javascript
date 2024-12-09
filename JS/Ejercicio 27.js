// 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

let parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
let parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
let parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
let examenFinal = parseFloat(prompt("Ingrese la calificación del examen final:"));
let trabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final:"));

let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

let contribucionParciales = promedioParciales * 0.55;
let contribucionExamenFinal = examenFinal * 0.30;
let contribucionTrabajoFinal = trabajoFinal * 0.15;

let promedioFinal = contribucionParciales + contribucionExamenFinal + contribucionTrabajoFinal;

console.log(`El promedio final de la materia de algoritmos es: ${promedioFinal.toFixed(2)}`);

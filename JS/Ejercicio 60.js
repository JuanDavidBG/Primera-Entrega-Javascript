// 60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));

let costoPorCurso;

if (cantidadCursos <= 6) {
  costoPorCurso = 2000000; 
} else {
  costoPorCurso = 1200000; 
}

const costoTotal = cantidadCursos * costoPorCurso;

console.log(`El costo total de los cursos es: $${costoTotal}`);

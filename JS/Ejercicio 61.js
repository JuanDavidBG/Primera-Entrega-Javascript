// 61. Hacer un programa que permita ingresar n Notas de alumnos(100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas de los alumnos:"));

let notaAlta = -1;
let notaBaja = 101;
let contadorMaximas = 0;
let contadorA = 0;
let contadorB = 0;
let contadorC = 0;
let contadorD = 0;

for (let i = 0; i < cantidadNotas; i++) {
  const nota = parseFloat(prompt(`Ingrese la nota del alumno ${i + 1}:`));

  if (nota > notaAlta) {
    notaAlta = nota;
  }
  if (nota < notaBaja) {
    notaBaja = nota;
  }

  if (nota === 100) {
    contadorMaximas++;
  }

  if (nota <= 100 && nota >= 90) {
    contadorA++;
  } else if (nota < 90 && nota >= 80) {
    contadorB++;
  } else if (nota < 80 && nota >= 70) {
    contadorC++;
  } else if (nota < 70 && nota >= 60) {
    contadorD++;
  }
}

console.log(`La nota más alta es: ${notaAlta}`);
console.log(`La nota más baja es: ${notaBaja}`);
console.log(`Alumnos que obtuvieron la máxima nota de 100: ${contadorMaximas}`);
console.log(`Cantidad de alumnos con calificación "a" (90-100): ${contadorA}`);
console.log(`Cantidad de alumnos con calificación "b" (80-89): ${contadorB}`);
console.log(`Cantidad de alumnos con calificación "c" (70-79): ${contadorC}`);
console.log(`Cantidad de alumnos con calificación "d" (60-69): ${contadorD}`);

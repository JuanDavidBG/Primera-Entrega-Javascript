// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
//   para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

const edad = parseInt(prompt("Ingrese la edad del postulante:"));
const estatura = parseInt(prompt("Ingrese la estatura del postulante en cm:"));
const peso = parseInt(prompt("Ingrese el peso del postulante en kg:"));

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
  console.log("El postulante cumple con los requisitos y puede representar al colegio en básquetbol.");
} else {
  console.log("El postulante no cumple con los requisitos para representar al colegio en básquetbol.");
}

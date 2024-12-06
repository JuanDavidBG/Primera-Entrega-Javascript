// 7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
// el tipo de impositivo que le corresponde.


let rentaAnual = parseFloat(prompt("Por favor, ingrese su renta anual en dólares:"));

let tipoImpositivo;

if (rentaAnual <= 10000) {
  tipoImpositivo = '0%';
} else if (rentaAnual <= 20000) {
  tipoImpositivo = '5%';
} else if (rentaAnual <= 35000) {
  tipoImpositivo = '10%';
} else if (rentaAnual <= 60000) {
  tipoImpositivo = '20%';
} else {
  tipoImpositivo = '45%';
}

console.log(`Su renta anual corresponde al tipo impositivo del ${tipoImpositivo}.`);
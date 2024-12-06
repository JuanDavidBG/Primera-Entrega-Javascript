// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

const costoPorMinuto = 355;
const iva = 0.20;

let duracionLlamada = parseFloat(prompt("Ingrese la duración de la llamada en minutos:"));

let costoSinIVA = duracionLlamada * costoPorMinuto;

let costoTotal = costoSinIVA + (costoSinIVA * iva);

console.log(`El costo total de la llamada es: $${costoTotal.toFixed(2)}`);

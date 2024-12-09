// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000.Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let tipoEmpleado
let horasTrabajadas;
let tarifaPorHora;
while (true) {
  tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):").toLowerCase();
  horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

  
  if (tipoEmpleado === "planta") {
    tarifaPorHora = 20000;
  } else if (tipoEmpleado === "administrativo") {
    tarifaPorHora = 10000;
  } else {
    console.log("Tipo de empleado no válido.");
    continue;
  }
  break;
}

const pagoTotal = tarifaPorHora * horasTrabajadas;
console.log(`El pago total para el empleado ${tipoEmpleado} es: $${pagoTotal}`);


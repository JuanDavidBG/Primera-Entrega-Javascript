// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

let nombreEmpleado = prompt("Ingrese el nombre del empleado:");
let horasTrabajo = parseFloat(prompt("Ingrese las horas trabajadas:"));
let pagoHora = parseFloat(prompt("Ingrese el pago por hora:"));

let sueldo = horasTrabajo * pagoHora;

console.log(`El empleado ${nombreEmpleado} ha trabajado ${horasTrabajo} horas y su sueldo es $${sueldo.toFixed(2)}.`);


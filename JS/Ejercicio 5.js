// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte
// al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe
// tributar o no.

let edad = parseInt(prompt("Por favor, ingrese su edad:"));
let ingresosMensuales = parseFloat(prompt("Por favor, ingrese sus ingresos mensuales en dólares:"));

if (edad >= 16 && ingresosMensuales >= 1000) {
    console.log("Usted debe tributar el impuesto.");
} else {
    console.log("Usted no está obligado a tributar el impuesto.");
}
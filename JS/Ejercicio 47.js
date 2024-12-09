// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

const valor1 = parseFloat(prompt("Ingrese el primer valor:"));
const valor2 = parseFloat(prompt("Ingrese el segundo valor:"));
const valor3 = parseFloat(prompt("Ingrese el tercer valor:"));

let mayor = valor1;
if (valor2 > mayor) {
  mayor = valor2;
}
if (valor3 > mayor) {
  mayor = valor3;
}

let menor = valor1;
if (valor2 < menor) {
  menor = valor2;
}
if (valor3 < menor) {
  menor = valor3;
}

let mensaje;
if (valor1 === valor2 && valor2 === valor3) {
  mensaje = "Los tres valores son iguales.";
} else {
  mensaje = `El mayor valor es ${mayor}, el menor valor es ${menor}.`;
}

console.log(mensaje);

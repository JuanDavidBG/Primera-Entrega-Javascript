// 13. Escribir un programa que lea 4 números y calcule la media.

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
let numero4 = parseFloat(prompt("Ingrese el cuarto número:"));

let media = (numero1 + numero2 + numero3 + numero4) / 4;

console.log(`La media de los números", ${numero1}, ${numero2}, ${numero3}, ${numero4} es: ${media}`);
// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
const numero3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
  mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  mayor = numero2;
} else {
  mayor = numero3;
}

console.log(`El mayor de los tres números es: ${mayor}`);

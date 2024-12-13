// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

const numero = parseInt(prompt("Ingrese un número entero:"));

let esPrimo = true;
if (numero <= 1) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

if (esPrimo) {
  console.log(`${numero} es un número primo.`);
} else {
  console.log(`${numero} no es un número primo.`);
}

// 69. Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.

const numero = parseInt(prompt("Ingrese un número entero:"));

if (!isNaN(numero) && numero > 0) {
  let linea = '';
  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0 || i === 1) {
      linea = i + linea;
      console.log(linea);
    }
  }
} else {
  console.log("El número ingresado no es válido. Debe ser un entero positivo.");
}

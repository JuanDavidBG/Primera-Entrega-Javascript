// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante excepciones y el mensaje debe ser personalizado.

const numerador = parseFloat(prompt("Por favor, ingrese el numerador:"));
const divisor = parseFloat(prompt("Por favor, ingrese el divisor:"));

if (isNaN(numerador) || isNaN(divisor)) {
  console.log("Ambos valores deben ser números.");
} else if (divisor === 0) {
  console.log("Error: No se puede dividir por cero.");
} else {
  const resultado = numerador / divisor;
  console.log(`El resultado de la división es: ${resultado}`);
}

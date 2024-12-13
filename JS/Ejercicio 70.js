// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
//   pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

const contraseñaCorrecta = "secreto";

let contraseñaIngresada;
do {
  contraseñaIngresada = prompt("Ingrese la contraseña: (secreto)");

  if (contraseñaIngresada !== contraseñaCorrecta) {
    console.log("Contraseña incorrecta. Por favor, inténtelo de nuevo.");
  }
} while (contraseñaIngresada !== contraseñaCorrecta);

console.log("¡Contraseña correcta! Bienvenido.");
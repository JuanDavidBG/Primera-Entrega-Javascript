//1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
//menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 

export const edad = prompt("Por favor, ingrese su edad:");

if (edad >= 18) {
  console.log("Usted es mayor de edad.");
} else {
  console.log("Usted es menor de edad.");
}

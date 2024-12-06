//1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
//menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 

while (true) {
  let edad = prompt("Ingrese la edad")
  console.clear()
  if (edad < 0){
    console.log("La edad no puede ser negativa")
    continue
  }
  else if (edad < 18){
    console.log("Usted es menor de edad")
  }
  else if (edad>=18) {
    console.log("Usted es mayor de edad")
  }
  else {
    console.log("Ingrese solo numeros positivos")
    continue
  }
  break
}
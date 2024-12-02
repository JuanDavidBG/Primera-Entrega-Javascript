//Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
//menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 


// Solicita al usuario que ingrese su edad
let age = prompt("Por favor, ingrese su edad:");

// Verifica que la entrada sea un número positivo
if (isNaN(age) || age < 0) {
    console.log("Por favor, ingrese un número válido y positivo.");
} else {
    // Convierte la entrada a un número entero
    age = parseInt(age, 10);

    // Determina si el usuario es mayor o menor de edad
    if (age >= 18) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}

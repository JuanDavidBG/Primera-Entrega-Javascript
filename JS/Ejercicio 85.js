// 85. Obtén una serie de número y devuelve la suma de todos los números positivos, si no tenemos números positivos la sume debe devolver 0.
function sumaNumerosPositivos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            suma += arr[i];
        }
    }
    return suma;
}

// Ejemplo de uso:
let numeros = [1, -2, 3, 4, -5, 6];
let resultado = sumaNumerosPositivos(numeros);
console.log("La suma de los números positivos es: " + resultado); // La suma de los números positivos es: 14

let numerosSinPositivos = [-1, -2, -3, -4, -5];
let resultadoSinPositivos = sumaNumerosPositivos(numerosSinPositivos);
console.log("La suma de los números positivos es: " + resultadoSinPositivos); // La suma de los números positivos es: 0

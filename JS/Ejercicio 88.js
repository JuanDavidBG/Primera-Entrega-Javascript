// 88. Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.
function inversoAditivo(arr) {
    return arr.map(num => -num);
}

// Ejemplo de uso:
let numeros = [1, -2, 3, -4, 5];
let resultado = inversoAditivo(numeros);
console.log("El inverso aditivo de cada número es: " + resultado); // "El inverso aditivo de cada número es: -1,2,-3,4,-5"

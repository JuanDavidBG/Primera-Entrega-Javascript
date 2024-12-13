// 86. Implemente una función que sume dos números y devuelva su suma en binario, el número binario devuelto debe ser una cadena.
function sumaEnBinario(num1, num2) {
    // Sumar los dos números
    let suma = num1 + num2;
    // Convertir la suma a binario y devolver como cadena
    return suma.toString(2);
}


let numero1 = 5;
let numero2 = 3;
let resultadoBinario = sumaEnBinario(numero1, numero2);
console.log("La suma en binario es: " + resultadoBinario); // La suma en binario es: 1000

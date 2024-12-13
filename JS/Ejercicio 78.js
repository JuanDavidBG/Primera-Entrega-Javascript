// 78. Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras cortas menores de 5 caracteres)
function calcularLongitudPalabra(palabra) {
    if (palabra.length < 5) {
        return "La palabra es corta";
    } else {
        return "La palabra es larga";
    }
}

// Ejemplo de uso:
let palabra1 = "hola";
let palabra2 = "bicicleta";
console.log(calcularLongitudPalabra(palabra1)); // "La palabra es corta"
console.log(calcularLongitudPalabra(palabra2)); // "La palabra es larga"

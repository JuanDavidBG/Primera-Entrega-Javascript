// 82. Crea una función que tome una cadena como parámetro y devuelva la cadena en orden inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’
function invertirCadena(cadena) {
    // Convertir la cadena en un arreglo de caracteres, invertir el arreglo y unirlo de nuevo en una cadena
    return cadena.split('').reverse().join('');
}

// Ejemplo de uso:
let cadena = 'Hola';
let cadenaInvertida = invertirCadena(cadena);
console.log(cadenaInvertida); // "aloH"

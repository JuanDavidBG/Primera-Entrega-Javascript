// 76. Crea una función que tome un número como argumento y devuelva la cadena si el número es par o impar.
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

let numero = 7;
let resultado = esParOImpar(numero);
console.log(resultado); // "El número es impar"

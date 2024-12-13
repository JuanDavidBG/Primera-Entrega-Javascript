// 87. Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales
function eliminarVocales(cadena) {
    // Definir una expresión regular para encontrar todas las vocales (mayúsculas y minúsculas)
    let sinVocales = cadena.replace(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g, '');
    return sinVocales;
}

// Ejemplo de uso:
let cadena = 'Hola, ¿cómo estás?';
let cadenaSinVocales = eliminarVocales(cadena);
console.log(cadenaSinVocales); // "Hl, ¿cm st?"

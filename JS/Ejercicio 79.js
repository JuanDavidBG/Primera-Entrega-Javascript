// 79. • Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado en la consola.
function contarSilabas(palabra) {
    // Definir un conjunto de vocales en español
    const vocales = 'aeiouáéíóúü';

    // Inicializar el contador de sílabas
    let contador = 0;

    // Recorrer la palabra y contar las vocales
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}


let palabras = ['hola', 'bicicleta', 'extraordinario', 'inteligente'];
palabras.forEach(palabra => {
    let silabas = contarSilabas(palabra);
    console.log(`La palabra "${palabra}" tiene ${silabas} sílabas.`);
});

// 89.Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica sieste número es par o impar
function GenerarVNM() {
    // Generar un número aleatorio entre 1 y 10
    let numero = Math.floor(Math.random() * 10) + 1;
    
    // Verificar si el número es par o impar
    let resultado = (numero % 2 === 0) ? 'par' : 'impar';
    
    // Imprimir el resultado
    console.log(`El número generado es ${numero}, y es ${resultado}.`);
}

// Llamada a la función
GenerarVNM();

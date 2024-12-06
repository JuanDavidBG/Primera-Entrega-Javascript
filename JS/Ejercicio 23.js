// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

let velocidadKmPorHora = parseFloat(prompt("Ingrese la velocidad del automóvil en kilómetros por hora:"));

let velocidadMS = velocidadKmPorHora / 3.6;

// Mostrar el resultado por consola
console.log(`La velocidad del automóvil es: ${velocidadMS.toFixed(2)} metros por segundo`);

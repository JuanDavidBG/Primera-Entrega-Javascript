// 41. Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.

const frase = prompt("Ingrese una frase que lo identifique como programador de software:");

const fraseInvertida = frase.split('').reverse().join('');

// Mostrar la frase invertida
console.log(`La frase invertida es: ${fraseInvertida}`);
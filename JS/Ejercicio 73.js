// 73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase.

const frase = prompt("Ingrese una frase:");
const letra = prompt("Ingrese una letra para buscar en la frase:");

let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    contador++;
  }
}

console.log(`La letra '${letra}' aparece ${contador} veces en la frase.`);

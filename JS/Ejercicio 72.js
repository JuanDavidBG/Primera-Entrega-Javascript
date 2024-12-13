// 72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última.

const palabra = prompt("Ingrese una palabra:");

console.log("Las letras de la palabra introducida, empezando por la última, son:");
for (let i = palabra.length - 1; i >= 0; i--) {
  console.log(palabra[i]);
}


// 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido(desde 1 hasta su edad).

const edad = parseInt(prompt("Ingrese su edad:"));

for (let i = 1; i <= edad; i++) {
  console.log(`Año ${i}: Ha cumplido ${i} años.`);
}


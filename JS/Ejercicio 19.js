// 19. Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = parseFloat(prompt("Ingrese el radio del cilindro:"));
let altura = parseFloat(prompt("Ingrese la altura del cilindro:"));

let area = 2 * Math.PI * radio * (radio + altura);

let volumen = Math.PI * Math.pow(radio, 2) * altura;

console.log(`El área del cilindro es: ${area.toFixed(2)}`);
console.log(`El volumen del cilindro es: ${volumen.toFixed(2)}`);
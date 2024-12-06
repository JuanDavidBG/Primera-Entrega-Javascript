// 15. Escribir un programa que calcule el área de un triángulo

let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

let longitud = 2 * Math.PI * radio;

let area = Math.PI * Math.pow(radio, 2);

console.log(`La longitud de la circunferencia con radio ${radio} es: ${longitud}`);
console.log(`El área del círculo con radio ${radio} es: ${area}`);

// 17. Escribir un programa que calcule el volumen de una esfera

let radio = parseFloat(prompt("Ingrese el radio de la esfera:"));

let volumen = (4/3) * Math.PI * Math.pow(radio, 3);

console.log(`El volumen de la esfera con radio ${radio} es: ${volumen}`);

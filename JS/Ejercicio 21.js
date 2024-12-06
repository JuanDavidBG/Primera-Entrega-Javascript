// 21. Escribir un programa que calcule el volumen de un elipsoide.

let a = parseFloat(prompt("Ingrese el semieje 'a' del elipsoide:"));
let b = parseFloat(prompt("Ingrese el semieje 'b' del elipsoide:"));
let c = parseFloat(prompt("Ingrese el semieje 'c' del elipsoide:"));

let volumen = (4/3) * Math.PI * a * b * c;

console.log(`El volumen del elipsoide con semiejes 'a' = ${a}, 'b' = ${b} y 'c' = ${c} es: ${volumen.toFixed(2)}`);

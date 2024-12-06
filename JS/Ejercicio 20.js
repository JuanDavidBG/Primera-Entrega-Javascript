// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante.

let a = parseFloat(prompt("Ingrese el coeficiente a:"));
let b = parseFloat(prompt("Ingrese el coeficiente b:"));
let c = parseFloat(prompt("Ingrese el coeficiente c:"));


let discriminante = Math.pow(b, 2) - 4 * a * c;

let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);

if (isNaN(raiz1) && isNaN(raiz2)){
    console.log(`La ecuacion no tiene raíces reales`);
} else if (isNaN(raiz2)){
    console.log(`La raíz reale es: ${raiz1}`);
} else if (isNaN(raiz1)){
    console.log(`La raíz reale es: ${raiz2}`);
} else {
    console.log(`Las raíces reales son: ${raiz1} y ${raiz2}`);
}
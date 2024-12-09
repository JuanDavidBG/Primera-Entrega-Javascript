// 31. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).

function calcularDistancia(x1, y1, x2, y2) {
    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distancia;
}

let x1 = parseFloat(prompt("Ingrese el valor de x1"));
let y1 = parseFloat(prompt("Ingrese el valor de y1"));
let x2 = parseFloat(prompt("Ingrese el valor de x2"));
let y2 = parseFloat(prompt("Ingrese el valor de y2"));

let distancia = calcularDistancia(x1, y1, x2, y2);
console.log(`La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia.toFixed(2)}`);

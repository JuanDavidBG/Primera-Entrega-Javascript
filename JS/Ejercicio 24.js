// 24. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
//     2.3e-1, -3e2, 23, 3.2).

let regex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;

function probarNumero(numero) {
    if (regex.test(numero)) {
        console.log(`"${numero}" es un número en punto flotante válido.`);
    } else {
        console.log(`"${numero}" no es un número en punto flotante válido.`);
    }
}

let numeros = [
    "-2.3e-1",
    "3.14159",
    "-3e2",
    "0.5",
    "-123.456",
    "1.0e5",
    "abc", // No es un número en punto flotante
    "2.3.4", // No es un número en punto flotante
    "1.2e", // No es un número en punto flotante
];

numeros.forEach(numero => probarNumero(numero));

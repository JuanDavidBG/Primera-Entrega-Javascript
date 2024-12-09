// 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos

function verificarCalificacion(calificacion) {
    return calificacion >= 1 && calificacion <= 5;
}

let calificaciones = [];
let contador = 1;

while (contador <= 4) {
    let calificacion = parseFloat(prompt(`Ingrese la calificación del examen ${contador} (1 a 5 puntos):`));
    if (verificarCalificacion(calificacion)) {
        calificaciones.push(calificacion);
        contador++;
    } else {
        alert("La calificación ingresada no está en el rango válido (1 a 5 puntos). Por favor, inténtelo de nuevo.");
    }
}

let totalCalificaciones = calificaciones.reduce((a, b) => a + b, 0);
let promedio = totalCalificaciones / calificaciones.length;

console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);

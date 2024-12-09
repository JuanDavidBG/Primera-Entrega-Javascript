// 26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.


function celsiusToFahrenheit(gradosCelsius) {
    return (gradosCelsius * 9/5) + 32;
}

let gradosCelsius = parseFloat(prompt("Ingrese los grados Celsius a convertir:"));

let gradosFahrenheit = celsiusToFahrenheit(gradosCelsius);

console.log(`${gradosCelsius} grados Celsius son equivalentes a ${gradosFahrenheit.toFixed(2)} grados Fahrenheit.`);


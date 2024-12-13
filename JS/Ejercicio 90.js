// 90. Crea una función que convierta números del 0 al 5 en su representación textual, por ejemplo: “cero”, “uno”, “dos”, “tres” etc.
function ConvrtTexToNumb(numero) {
    const numerosATexto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    
    if (numero >= 0 && numero <= 5) {
        return numerosATexto[numero];
    } else {
        return "Número fuera del rango";
    }
}

// Ejemplo de uso:
console.log(ConvrtTexToNumb(0)); // "cero"
console.log(ConvrtTexToNumb(3)); // "tres"
console.log(ConvrtTexToNumb(5)); // "cinco"
console.log(ConvrtTexToNumb(7)); // "Número fuera del rango"

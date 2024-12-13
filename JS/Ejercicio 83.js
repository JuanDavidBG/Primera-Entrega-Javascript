// 83. Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se aceptan números, la función debe devolver true si el pin es válido y false si no es válido.
function validarPin(pin) {
    // Verificar si la longitud del PIN es 4 o 6
    if (pin.length === 4 || pin.length === 6) {
        // Verificar si el PIN contiene solo números
        let soloNumeros = /^\d+$/.test(pin);
        return soloNumeros;
    }
    return false;
}

// Ejemplo de uso:
let pin1 = "1234";
let pin2 = "123456";
let pin3 = "12345a";
let pin4 = "123";

console.log(validarPin(pin1)); // true
console.log(validarPin(pin2)); // true
console.log(validarPin(pin3)); // false
console.log(validarPin(pin4)); // false

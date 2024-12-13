// 75. Crea una función que reciba dos números como parámetros y devuelva el mayor de ellos
function mayorDeDosNumeros(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


let numero1 = 5;
let numero2 = 10;
let mayor = mayorDeDosNumeros(numero1, numero2);
console.log("El mayor número es: " + mayor);

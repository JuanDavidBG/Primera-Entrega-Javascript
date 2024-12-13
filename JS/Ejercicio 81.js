// 81.  Crea una función de nos devuelva el elemento mayor de un arreglo de números
function encontrarMayor(arr) {
    if (arr.length === 0) {
        return undefined; // Manejo del caso en que el arreglo esté vacío
    }

    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }
    return mayor;
}


let numeros = [3, 5, 7, 2, 8, 1];
let mayorNumero = encontrarMayor(numeros);
console.log("El número mayor es: " + mayorNumero);

// 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda.

// Valor de la moneda en pesos
const valorMonedaEnPesos = 4000; // Por ejemplo, 1 dólar = 4000 pesos, 1 euro = 5000 pesos

function convertirPesosADolares(pesos) {
  return pesos / valorMonedaEnPesos;
}

function convertirPesosAEuros(pesos) {
  return pesos / (valorMonedaEnPesos / 1.25); // Supongamos que 1 euro equivale a 1.25 dólares
}

const pesos = parseFloat(prompt("Ingrese la cantidad de pesos a convertir")); 

const dolares = convertirPesosADolares(pesos);
console.log(`${pesos} pesos son aproximadamente ${dolares.toFixed(2)} dólares.`);

const euros = convertirPesosAEuros(pesos);
console.log(`${pesos} pesos son aproximadamente ${euros.toFixed(2)} euros.`);
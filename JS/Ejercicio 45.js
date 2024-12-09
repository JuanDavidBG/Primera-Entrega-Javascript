// 45. Determinar si un número es positivo y menor que 100

const numero = parseInt(prompt("Ingrese un numero entero para perificar si es positivo y menor que 100")); 

if (numero > 0 && numero < 100) {
  console.log(`${numero} es positivo y menor que 100.`);
} else {
  console.log(`${numero} no cumple la condición de ser positivo y menor que 100.`);
}

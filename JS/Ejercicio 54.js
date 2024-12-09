// 54. Restarle al primer número al segundosiempre y cuando el primero sea mayor que él
// segundo, en caso contrario indicar con un mensaje que la operación no es posible
// realizarla.

while (true) {
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    if (numero1 > numero2) {
      const resultado = numero1 - numero2;
      console.log(`La resta de ${numero1} - ${numero2} es igual a: ${resultado}`);
      break;
    } else {
      console.log("La operación no es posible realizarla porque el primer número no es mayor que el segundo.");
    }
  }
  
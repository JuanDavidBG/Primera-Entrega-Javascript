// 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

while (true){
    const numero = parseInt(prompt("Ingrese un número entero positivo:"));
  
    if (numero > 0) {
      let impares = '';
  
      for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
          if (impares !== '') {
            impares += ', ';
          }
          impares += i;
        }
      }
  
      console.log(`Los números impares hasta ${numero} son: ${impares}`);
      break;
    } else {
      console.log("El número ingresado no es válido. Debe ser un entero positivo.");
    }
  }
  
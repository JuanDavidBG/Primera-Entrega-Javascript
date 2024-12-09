// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

while (true) {
    const numero = parseInt(prompt("Ingrese un número entero positivo:"));
  
    if (numero > 0) {
      let cuentaAtras = '';
  
      for (let i = numero; i >= 0; i--) {
        if (cuentaAtras !== '') {
          cuentaAtras += ', ';
        }
        cuentaAtras += i;
      }
  
      console.log(`La cuenta atrás desde ${numero} hasta 0 es: ${cuentaAtras}`);
      break;
    } else {
      console.log("El número ingresado no es válido. Debe ser un entero positivo.");
    }
  }
  
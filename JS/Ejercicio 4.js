// 4. Escribir un programa que pida al usuario un numero entero y muestre por pantalla
// si es par o impar.

while (true) {
    let numero = parseInt(prompt("Ingrese un número entero:"));
    
    if (isNaN(numero)) {
      console.log("Debe ingresar un número entero");
      continue;
    }
    else if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
    break;
  }
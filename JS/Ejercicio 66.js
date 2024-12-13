// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

while (true) {
    const cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
    const interesAnual = parseFloat(prompt("Ingrese el interés anual en porcentaje:")) / 100;
    const numeroAnios = parseInt(prompt("Ingrese el número de años de la inversión:"));
  
    if (cantidadInvertir > 0 && interesAnual > 0 && numeroAnios > 0) {
      for (let i = 1; i <= numeroAnios; i++) {
        const capitalObtenido = cantidadInvertir * (1 + interesAnual) ** i;
        console.log(`Año ${i}: $${capitalObtenido.toFixed(2)}`);
      }
      break;
    } else {
      console.log("Los valores ingresados no son válidos. Por favor, ingrese valores positivos.");
    }
  }
  
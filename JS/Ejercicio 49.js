// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo = lado * lado

while (true) {
    const lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del rectángulo:"));
    const lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del rectángulo:"));
  
    if (lado1 > 0 && lado2 > 0) {
      const areaRectangulo = lado1 * lado2;
      console.log(`El área del rectángulo es: ${areaRectangulo}`);
      break;
    } else {
      console.log("Los lados del rectángulo deben ser positivos.");
    }
  }
  
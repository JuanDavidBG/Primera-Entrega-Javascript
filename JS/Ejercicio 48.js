// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a.Triangulo = base * altura / 2
// b.Circulo = PI * radio * radio

while (true) {
    const figura = prompt("¿Qué figura geométrica desea calcular? (Escriba T para Triángulo o C para Círculo):");
  
    let area;
  
    if (figura.toUpperCase() === 'T') {
      const base = parseFloat(prompt("Ingrese la base del triángulo:"));
      const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
      area = (base * altura) / 2;
      console.log(`El área del triángulo es: ${area}`);
    } else if (figura.toUpperCase() === 'C') {
      const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      const PI = Math.PI;
      area = PI * radio * radio;
      console.log(`El área del círculo es: ${area}`);
    } else {
      console.log("Opción no válida. Por favor, escriba T para Triángulo o C para Círculo.");
      continue
    }
    break
  }
  
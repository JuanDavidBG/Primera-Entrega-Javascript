// 38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2 / 3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena ?

const parteMartin = 2 / 3;
const parteJairo = 1 / 4;

const parteLorena = 1 - (parteMartin + parteJairo);

// Función para convertir un número decimal a una fracción
function convertirAFraccion(numero) {
  let tolerance = 1.0E-6;
  let h1 = 1;
  let h2 = 0;
  let k1 = 0;
  let k2 = 1;
  let b = numero;
  do {
    let a = Math.floor(b);
    let temp = h1;
    h1 = a * h1 + h2;
    h2 = temp;
    temp = k1;
    k1 = a * k1 + k2;
    k2 = temp;
    b = 1 / (b - a);
  } while (Math.abs(numero - h1 / k1) > numero * tolerance);

  return `${h1}/${k1}`;
}

// Convertir la parte de Lorena a fracción
const fraccionLorena = convertirAFraccion(parteLorena);

// Mostrar el resultado en la consola como una fracción
console.log(`La parte que le corresponde a Lorena es: ${fraccionLorena}`);




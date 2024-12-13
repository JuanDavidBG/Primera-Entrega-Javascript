// 68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
    console.log(`Tabla de multiplicar del ${multiplicando}:`);
  
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      const resultado = multiplicando * multiplicador;
  
      console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);
    }
  
    console.log('------------------------');
  }
  
// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

function calcularEdadMadre(fechaNacimientoMadre, fechaNacimientoHijo) {
    let madre = new Date(fechaNacimientoMadre);
    let hijo = new Date(fechaNacimientoHijo);
  
    let edadMadreEnHijo = hijo.getFullYear() - madre.getFullYear(); //getFullYear() de la clase Date. Este método devuelve el año completo como un número entero de cuatro dígitos 
  
    if (madre > hijo) {
      edadMadreEnHijo--;
    }
  
    return edadMadreEnHijo;
  }
  
  let fechaNacimientoMadre = '1980-05-15';
  let fechaNacimientoHijo = '2005-08-20';
  
  let edadMadreEnHijo = calcularEdadMadre(fechaNacimientoMadre, fechaNacimientoHijo);
  console.log(`La madre tenía ${edadMadreEnHijo} años en el momento del nacimiento del hijo.`);
  
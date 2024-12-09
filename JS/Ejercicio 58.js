// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

while (true) {
    const nombreMes = prompt("Ingrese el nombre del mes:");
    nombreMes.toLowerCase;
  
    if (nombreMes === 'enero') {
      console.log("Capricornio");
    } else if (nombreMes === 'febrero') {
      console.log("Acuario");
    } else if (nombreMes === 'marzo') {
      console.log("Piscis");
    } else if (nombreMes === 'abril') {
      console.log("Aries");
    } else if (nombreMes === 'mayo') {
      console.log("Tauro");
    } else if (nombreMes === 'junio') {
      console.log("Géminis");
    } else if (nombreMes === 'julio') {
      console.log("Cáncer");
    } else if (nombreMes === 'agosto') {
      console.log("Leo");
    } else if (nombreMes === 'septiembre') {
      console.log("Virgo");
    } else if (nombreMes === 'octubre') {
      console.log("Libra");
    } else if (nombreMes === 'noviembre') {
      console.log("Escorpio");
    } else if (nombreMes === 'diciembre') {
      console.log("Sagitario");
    } else {
      console.log("Nombre de mes no válido");
      continue;
    }
    break;
  }
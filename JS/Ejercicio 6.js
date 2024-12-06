// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
// y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
// M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir
// un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
// grupo al que corresponde.

let nombre = prompt("Por favor, ingrese su nombre:");
let sexo;
while (true) {
  sexo = prompt("Por favor, ingrese su sexo (M para mujer, H para hombre):").toUpperCase();
  if (sexo === 'M' || sexo === 'H'){
    break;
  }
  else{
    console.log("Caracter incorrecto")
  }
}


let primeraLetraNombre = nombre.charAt(0).toUpperCase();

let grupo;

if ((sexo === 'M' && primeraLetraNombre <= 'M') || (sexo === 'H' && primeraLetraNombre >= 'N')) {
    grupo = 'A';
} else {
    grupo = 'B';
}

console.log(`${nombre} pertenece al grupo: ${grupo}`);
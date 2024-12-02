//  2. escribir un programa que almacene la cadena de caracteres contraseña de una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por 
//el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos

const ContraGuardada = "Lamalaparalasmonas";
const ContraIngresada = prompt("Por favor, ingrese su contraseña:");

const esAlfanumerico = /^[a-zA-Z0-9]+$/.test(ContraIngresada);

if (esAlfanumerico) {
  const coincide = ContraGuardada.toLowerCase() === ContraIngresada.toLowerCase(); //El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.
  console.log(coincide ? "La contraseña coincide." : "La contraseña no coincide."); // ? operador ternario estamos evaluando la condiciones
} else {
  console.log("La contraseña debe ser alfanumérica.");
}

// 40. Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron.Realice el código que representen el algoritmo para solucionar este problema.

const añoActual = new Date().getFullYear(); //El método getFullYear() devuelve el año de la fecha indicada acorde a la hora local.

const añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

const edad = añoActual - añoNacimiento;

console.log(`La persona tiene ${edad} años de edad.`);


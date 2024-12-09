// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas.Debe permitir
// la presencia de comillas y caracteres escapados.

const regex = /"(?:\\.|[^"\\])*"/g;

const texto = 'Esta es una "cadena de texto" con "comillas" y caracteres escapados: "Esto es una cadena con \\"comillas\\" y \\\\caracteres escapados\\\\".';

const coincidencias = texto.match(regex);

console.log('Coincidencias encontradas:');
coincidencias.forEach((coincidencia, indice) => {
  console.log(`[${indice + 1}]: ${coincidencia}`);
});

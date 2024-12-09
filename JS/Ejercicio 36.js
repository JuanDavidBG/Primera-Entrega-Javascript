// 36. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate.Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces.Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es ?

const cacaoPorDefecto = 10

const harinaPorDefecto = 100

let cacaoDeseado = parseFloat(prompt("Ingrese la cantidad de cacao que desea para el bizcocho"));

const harinaNecesaria = (harinaPorDefecto * cacaoDeseado) / cacaoPorDefecto;

console.log(`La cantidad de gramos de harina necesaria es: ${harinaNecesaria}`);


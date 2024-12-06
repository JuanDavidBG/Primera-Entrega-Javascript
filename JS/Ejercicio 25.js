// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

let costoMedicamentos = parseFloat(prompt("Ingrese el costo de los medicamentos:"));

let descuento = 0.1 * costoMedicamentos;

let precioFinal = costoMedicamentos - descuento;

console.log(`Costo de los medicamentos: $${costoMedicamentos.toFixed(2)}`);
console.log(`Descuento (10%): $${descuento.toFixed(2)}`);
console.log(`Precio final: $${precioFinal.toFixed(2)}`);

// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.Los
// descuentos son los siguientes: Tipo A 10 % de descuento Tipo B 15 % de descuento Tipo C
// 20 % de descuento.


let tipoMembresia;
let precioHelado;
let descuento = 0;
while (true) {
  tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();

  switch (tipoMembresia) {
    case 'A':
      descuento = 0.1;
      break;
    case 'B':
      descuento = 0.15;
      break;
    case 'C':
      descuento = 0.2;
      break;
    default:
      console.log("Tipo de membresía no válido.");
      continue;
  }

  break;
}

precioHelado = parseFloat(prompt("Ingrese el precio del helado"));
const precioFinal = precioHelado * (1 - descuento);

console.log(`El precio final del helado con descuento para membresía tipo ${tipoMembresia} es: $${precioFinal}`);

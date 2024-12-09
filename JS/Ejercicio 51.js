// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15 %, de lo contrario no hay descuento.

const consumo = parseFloat(prompt("Ingrese el monto del consumo en el restaurante:"));

let totalPagos;

if (consumo > 130000) {
  const descuento = consumo * 0.15;
  totalPagos = consumo - descuento;
  console.log(`El total a pagar con descuento del 15% es: $${totalPagos}`);
} else {
  totalPagos = consumo;
  console.log(`El total a pagar es: $${totalPagos}`);
}

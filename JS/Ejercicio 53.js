// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

const preciosProductos = [];

for (let i = 1; i <= 5; i++) {
  const precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
  preciosProductos.push(precio);
}


const subtotal = preciosProductos.reduce((total, precio) => total + precio, 0);

const iva = subtotal * 0.19;

const totalCompra = subtotal + iva;

console.log(`Subtotal: $${subtotal}`);
console.log(`IVA: $${iva}`);
console.log(`Total de la compra: $${totalCompra}`);


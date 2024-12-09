// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let precioProductos = [100, 150, 200, 250, 300];

let descuentos = [0.05, 0.05, 0.02, 0.02];

let preciosFinales = [];
for (let i = 0; i < precioProductos.length; i++) {
    if (i < 2) { // Primeros dos productos con 5% de descuento
        preciosFinales.push(precioProductos[i] * (1 - descuentos[0]));
    } else if (i === 2){
        preciosFinales.push(precioProductos[i]);
    } else { // Últimos dos productos con 2% de descuento
        preciosFinales.push(precioProductos[i] * (1 - descuentos[2]));
    }
}

let totalCompra = preciosFinales.reduce((a, b) => a + b, 0);

console.log("Precio de cada producto con descuento:");
for (let i = 0; i < precioProductos.length; i++) {
    console.log(`Producto ${i + 1}: $${preciosFinales[i].toFixed(2)}`);
}
console.log(`Total de la compra: $${totalCompra.toFixed(2)}`);

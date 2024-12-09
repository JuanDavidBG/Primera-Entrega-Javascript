// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550.Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

const precioLibro = 10000;
const precioCuaderno = 7550;
const precioLapicero = 5550;

const cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
const cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
const cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

const montoTotalVenta = (precioLibro * cantidadLibros) + (precioCuaderno * cantidadCuadernos) + (precioLapicero * cantidadLapiceros);

console.log(`El monto total de la venta es: $${montoTotalVenta}`);

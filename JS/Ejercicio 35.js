// 35. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500.Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía ?

const precioLlaves = 11500;
const precioBomba = 1168000;
const precioPerros = 87000;

const cantidadLlaves = 5;
const cantidadBombas = 1;
const cantidadPerros = 3;

const dineroSobrante = 91000;

const totalGastado = (precioLlaves * cantidadLlaves) + (precioBomba * cantidadBombas) + (precioPerros * cantidadPerros);

const dineroInicial = totalGastado + dineroSobrante;

// Mostrar el resultado en la consola
console.log(`El jefe de obra tenía inicialmente $${dineroInicial}.`);

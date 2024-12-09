// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

const costoPorMetroCuadrado = 25; 

function calcularCostoPintura(area) {
  return area * costoPorMetroCuadrado;
}

function generarPresupuestoCliente(numeroCliente, area) {
  const costoTotal = calcularCostoPintura(area);
  return `Presupuesto para el Cliente ${numeroCliente}: Área ${area} m² - Total: $${costoTotal}`;
}

function generarPresupuestos(numClientes, areas) {
  const presupuestos = [];
  for (let i = 0; i < numClientes; i++) {
    const presupuesto = generarPresupuestoCliente(i + 1, areas[i]);
    presupuestos.push(presupuesto);
  }
  return presupuestos;
}

const numClientes = parseInt(prompt("Ingrese la cantidad de clientes:"));
const areas = [];
for (let i = 0; i < numClientes; i++) {
  const area = parseFloat(prompt(`Ingrese el área que desea pintar el Cliente ${i + 1} (m²):`));
  areas.push(area);
}

const presupuestos = generarPresupuestos(numClientes, areas);

console.log("Presupuestos:");
presupuestos.forEach(presupuesto => {
  console.log(presupuesto);
});


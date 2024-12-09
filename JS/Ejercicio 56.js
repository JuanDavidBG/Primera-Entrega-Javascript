// 56. Un banco paga intereses a los depósitos dependiendo del saldo.Si el saldo es menor a
// $100.000 se paga un interés anual de 3 %, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4 %.Al final mostrar el saldo final y el interés pagado.

const saldo = parseFloat(prompt("Ingrese el saldo de su cuenta:"));
let interesAnual;

if (saldo < 100000) {
  interesAnual = 0.03; 
} else {
  interesAnual = 0.04; 
}

const interesPagado = saldo * interesAnual;

const saldoFinal = saldo + interesPagado;

console.log(`Saldo final después de un año: $${saldoFinal}`);
console.log(`Interés pagado durante un año: $${interesPagado}`);

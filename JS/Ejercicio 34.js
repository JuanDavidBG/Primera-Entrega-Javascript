// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
//   a.Q = V / t, siendo Q(caudal), V(volumen) y t(tiempo).
//     b.Volumen = PI * (radio ^ 2) * H(altura del depósito).
// El tiempo se encuentra en minutos.Normalmente se mide el volumen en litros y el tiempo
// en segundos

let radio = parseFloat(prompt("Ingrese el radio del depósito en metros:"));
let altura = parseFloat(prompt("Ingrese la altura del depósito en metros:"));

let caudalLitrosPorSegundo = parseFloat(prompt("Ingrese el caudal en litros por segundo:"));

let volumenLitros = Math.PI * Math.pow(radio, 2) * altura;

let tiempoSegundos = volumenLitros / caudalLitrosPorSegundo;

let tiempoMinutos = tiempoSegundos / 60;

console.log(`El tiempo estimado para el llenado del depósito es de ${tiempoMinutos.toFixed(2)} minutos.`);


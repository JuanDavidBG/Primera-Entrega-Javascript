// 84. Genera un patrón de asteriscos en forma de pirámide
function generarPiramide(n) {
    for (let i = 1; i <= n; i++) {
        let espacios = ' '.repeat(n - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos + espacios);
    }
}


generarPiramide(5);

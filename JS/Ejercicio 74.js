// 74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.

let entradaUsuario;

while (true) {
  entradaUsuario = prompt("Ingrese algo (escriba 'salir' para terminar):");

  if (entradaUsuario.toLowerCase() === "salir") {
    console.log("Saliendo del programa...");
    break; 
  }

  console.log("Eco:", entradaUsuario);
}

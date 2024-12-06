// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes.
// Los ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no,
// y en función de su respuesta le muestre un menú con los ingredientes disponibles
// para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el
// tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la
// pizza elegida es vegetariana o no y todos los ingredientes que lleva.



while (true) {
    let tipoPizza = prompt("¿Desea una pizza vegetariana? (si/no)").toLowerCase();
    if (tipoPizza === 'si') {
      while (true) {
        let codigo = prompt("Ingredientes disponibles para pizzas vegetarianas:\n1. Pimiento\n2. Tofu\nElija un ingrediente:").toLowerCase();
  
        if (codigo === '1' || codigo === '2') {
          let ingrediente = ["pimiento","tofu"]
          console.log(`Ha elegido una pizza vegetariana con mozzarella, tomate y ${ingrediente[codigo-1]}.`);
          break;
        } else {
            console.log("Opción de ingrediente no válida.");
        }
      }
    } else if (tipoPizza === 'no') {
        while (true) {
          let codigo = prompt("Ingredientes disponibles para pizzas no vegetarianas:\n1. Pepperoni\n2. Jamón\n3. Salmón\nElija un ingrediente:").toLowerCase();
          let ingrediente = ["pepperoni","jamón","salmón"]
          if (codigo === '1' || codigo === '2' || codigo === '3') {
            console.log(`Ha elegido una pizza no vegetariana con mozzarella, tomate y ${ingrediente[codigo-1]}.`);
            break;
          } else {
              console.log("Opción de ingrediente no válida.");
          }
        }
    } else {
        console.log("Opción de pizza no válida.");
        continue;
    }
    break;
  }
  
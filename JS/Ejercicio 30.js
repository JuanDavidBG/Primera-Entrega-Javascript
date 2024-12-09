// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.

function comprobarFortaleza(contrasena) {
    let longitud = /^.{8,12}$/;
    let mayuscula = /[A-Z]/;
    let minuscula = /[a-z]/;
    let digito = /\d/;

    if (longitud.test(contrasena) &&
        mayuscula.test(contrasena) &&
        minuscula.test(contrasena) &&
        digito.test(contrasena)) {
        return true;
    } else {
        return false;
    }
}

let contrasena = prompt("Ingrese su contraseña:");

if (comprobarFortaleza(contrasena)) {
    console.log("La contraseña es segura.");
} else {
    console.log("La contraseña no cumple con los requisitos de seguridad.");
}

export const sumar = (a,b) => a + b;

export const restar = (a,b) => {
    if (a > b) {
        return a - b;
    } else {
        return "No se puede restar";
    }
}

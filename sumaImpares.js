//Función suma de números impares hasta dicho número de referencia.

function sumaNumImpares(numero){
    let suma = 0;

    for (let i = 1; i <= numero; i += 2){
        suma += i;
    }
    return suma;
}

console.log(sumaNumImpares(5))
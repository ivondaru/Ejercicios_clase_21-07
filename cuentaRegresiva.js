//Función para crear una cuenta regresiva hasta 0

function crearCuentaRegresiva(numeroInicial){
    let cuentaRegresiva = [];
    for (let i = 0; i <= numeroInicial; i++){
        cuentaRegresiva.push(i);
    }
    return cuentaRegresiva.reverse();
}
console.log(crearCuentaRegresiva(7))
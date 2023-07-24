//Función repetir

function repetir (valor, cantidad){
    const resultado = [];    

    for (let i = 0; i < cantidad; i++){
        resultado.push(valor);
    }
    return resultado;
}

console.log(repetir('ivonne', 4))
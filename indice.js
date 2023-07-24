//Función obtener indice de un array

// function obtenerIndice (valor, array){
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === valor){
//             return i;
//         }
//     }
//     return -1
// }

// console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 1]))

// console.log(obtenerIndice(50, [5, 7, 12, 34, 54, 2, 1]))

//Otra forma de hacerlo

function obtenerIndice(valor, array){
    const indice = array.findIndex(numero=> numero === valor);
    return indice;
}

console.log(obtenerIndice(4, [2, 5, 4, 8, 6, 7, 0]))
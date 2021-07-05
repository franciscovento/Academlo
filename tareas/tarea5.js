let arreglo = [1, 2, 3, 1, 2, 3];

function destroyer(arr) {
    // Escribe tu respuesta aqui
    let arrQuitar = [];
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i];
        arrQuitar.push(arguments[i]);
    }

    for (let j = 0; j < arr.length; j++) {
       let elemento1 = arr[j];
       for (let h = 0; h < arrQuitar.length; h++) {
           let element2 = arrQuitar[h]
           if (elemento1 === element2) {
               arr.splice(j,1,"quitar");
           }
       }
    }

    resp = arr.filter(x => x !== "quitar")

   return resp
}

destroyer(arreglo, 1,2)
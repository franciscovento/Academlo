let arr1 = [1, 3, 2];
let arr2 = [5, 2, 1, 4];
let arr3 = [2, 1];

let devolver = [1, 3, 2, 5, 4];

function uniteUnique(){
let arreglo = [];
for (let i = 0; i < arguments.length; i++) {
    arreglo.push(...arguments[i])
}

// Metodo 1:
// let result = arreglo.filter((item, index) => {
//     return arreglo.indexOf(item) === index;
// })


//Metodo 2:
let result = new Set(arreglo)
return [...result]

}


let respuesta = uniteUnique(arr1, arr2, arr3);
console.log(respuesta);
let array1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
let array2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
let array3 = ["diorite", "pink wool"];

function funcionReductora (arr1, arr2){
    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let element2 = arr2[j];
            if (element === element2) {
                arr2.splice(j,1);
                arr1.splice(i,1,"quitar");
            }
        }   
    }
    let resp = arr1.filter(x => x != 'quitar');
    resp = arr2.concat(resp);

    return resp;
}

let arreglonuevo2 = funcionReductora(array1, array2);

console.log(arreglonuevo2);

function replicate(times, number){
    // Añade tu respuesta aqui
    let array = [];
    if (Math.sign(times) === -1 ){
        return array;
    }else{
        if (times === 0){
            return array;
        } else{
            array.push(number, replicate(times -1, number));
            return array.flat(Infinity);
        }
    }

}

let array = replicate(3,5)
console.log(array)
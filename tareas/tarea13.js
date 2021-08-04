let n = 10;


function primesEratostenes(n) {
    const p = [];
    let nuevoP = []
    for (let h =2; h<n; h++){
        p.push(h)
    }

    for (let i =2; i< Math.floor(Math.sqrt(n)); i++){
        
        for (let j = i; i< Math.floor(n/i); j++){
            nuevoP = p.filter(x => x != i*j)
            
        }
    }
    console.log(Math.floor(Math.sqrt(n)))
    console.log(Math.floor(n/2))

// Implementacion de la Criba de Eratóstenes
    // return p;
}

function sumPrimes(num) {
    return num
}

primesEratostenes(10)
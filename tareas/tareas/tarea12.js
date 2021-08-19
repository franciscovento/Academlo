function primes(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr.push(i);
    }

    for (let j = 2; j < arr.length; j++) {
        let element = arr[j];
        let num = Math.floor(Math.sqrt(element));
        for (let h = 2; h <= num; h++) {
            if (element % h === 0 && element != num) {
                arr.splice(j, 1, 'noPrime')
                break;
            }
        }
        
    }
    console.log(arr)

    arr = arr.filter(x => x != 'noPrime')

    return arr;
}


console.log(primes(30))
let num = 20;


function sumFibs(num) {
    let sum = 0;
    let arr =[1,1];
    for (let i = 0; i < num-2; i++) {
        arr.push(arr[i] + arr[i+1])
    }
    arr = arr.filter(x => x%2 !== 0 && x <= num)
    sum = arr.reduce((acc, x) => acc + x)
return sum;
}

resp = sumFibs(num);

console.log(resp)
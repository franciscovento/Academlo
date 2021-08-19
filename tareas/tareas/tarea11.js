const arr = [23,18]

const smallestCommons = (arr)=>{
  let a = Math.max(...arr)
  let b = Math.min(...arr)
  
  let array = []
  for (let i = b; i <= a; i++) {
      array.push(b)
      b++
  }
console.log(array)
    const mcd = (x, y) =>{
        x = Math.abs(x);
        y = Math.abs(y);
        let z;

        while(y){
            z = y;
            y = x % y;
            x = z;
        }
        return x;
    }

    const mcm = (x ,y) => {
        return (!x || !y ? 0 : Math.abs((x * y) / mcd(x ,y)))
    }

    let x = array[0];
    let y;
    for (let i = 0; i < array.length; i++) {
        y = array[i];
        x = mcm(x,y);
        
    }

return x;

}

console.log(smallestCommons(arr))
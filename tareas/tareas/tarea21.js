let arg1 = [1, 1, 2, 5];
let arg2 = [2, 2, 3, 5];
let arg3 = [3, 4, 5, 5];


function simDiff(args) {
for (let x = 0; x < arguments.length -1; x++) {
    for (let i = 0; i < arguments[x].length; i++) {
        let element = arguments[x][i];
        console.log(typeof element)
        for (let j = 0; j < arguments[x + 1].length; j++) {
          let element2 = arguments[x + 1][j];
          if ( element === element2) {
            arguments[x + 1].splice(j,1, x.toString());
            arguments[x].splice(i,1, (x+1).toString);
          }
        }
      }
}


console.log(arguments[0])
console.log(arguments[1])
console.log(arguments[2])


  }

 let resp = simDiff(arg1, arg2, arg3);

 console.log(resp)
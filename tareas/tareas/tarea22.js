

function multiplesOf3and5(number) {
let resp = [];
for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        resp.push(i)
    }
    
}
    return resp.reduce((acc, x) => x +acc);
  }


  let resp = multiplesOf3and5(8456);
  console.log(resp)
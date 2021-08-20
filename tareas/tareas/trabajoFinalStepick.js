let cid = [ ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100] ];

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let typeCoins = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "DOLLAR": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100    
    }
    let useCoins = []
    for (const clave in typeCoins) {
        const element = typeCoins[clave];
        if (element <= change) {
             useCoins.push(clave);
        }
    }

cid.forEach(element => {
    
});
    return change;
  }

  for (const key in cid) {
          const element = cid[key];
     console.log(element)

  }
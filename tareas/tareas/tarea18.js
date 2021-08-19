let arr = [{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}];

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    let resp = [];

    for (let i = 0; i < arr.length; i++) {
      const name = arr[i].name;
      const avgAlt = arr[i].avgAlt;

      const a = earthRadius + avgAlt;
      const Time = (2 * 3.141592653589) * Math.sqrt( Math.pow(a,3) / GM , 2)

      resp.push({name: name, orbitalPeriod: Math.round(Time)})
    }

    // const avgAlt = arr[0].avgAlt

    // const a = earthRadius + avgAlt;

    
    // const Time = (2 * 3.1416) * Math.sqrt( Math.pow(a,3) / GM , 2)


    return resp;
  }


let respuesta = orbitalPeriod(arr);

console.log(respuesta)

  
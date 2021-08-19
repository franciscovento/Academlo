// let str = 'TheLess_iKnow-the Better';

// function spinalCase(str) {

// str = str.replace(/[^a-zA-Z ]/g, " ").split(/(?=[A-Z-])/).join(" ").split(' ').filter(x=> x != '').join('-').toLowerCase();

//     return str;
//   }

//   console.log(spinalCase(str))

let collection = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }];
let source = { "apple": 1, "cokie": 2 };

// console.log(JSON.stringify(collection).includes(JSON.stringify(source).replace(/[{}]/g, '')))

// console.log(JSON.stringify(source).replace(/[{}]/g, ''))

  const searcher = (collection, source) =>{

    let cantidadIterar = Object.keys(collection).length;
    resp = [];
    for (let i = 0; i < cantidadIterar; i++) {
      
      if (JSON.stringify(collection[i]).includes(JSON.stringify(source).replace(/[{}]/g, ''))) {
        resp.push(collection[i])
      }
    }
    return resp
    }


 
let respuesta = searcher(collection, source)
console.log(Object.entries(source))





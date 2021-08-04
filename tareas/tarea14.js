let collection = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
let source = { last: "Capulet"};

function searcher(collection, source) {
    let arr = [],
        keysSource = Object.keys(source);
    for (let i = 0; i < collection.length; i++) {
      const element = collection[i];
      if (keysSource.every((key) => element[key] === source[key])) {
        arr.push(element);
      }
    }
    return arr;
  }

let resp = searcher(collection, source)

console.log(resp)

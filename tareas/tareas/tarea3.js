let collection = [{"user": "Layla", "sex": "male"}, {"user": "Kappa"}, {"user": "Himiko", "sex": "female"}, {"user": "Sassy", "sex": "female"}]
let pre = "sex";
let array = [{"user": "Layla", "sex": "male"}, {"user": "Kappa", "sex": "male"}, {"user": "Himiko", "sex": "female"}, {"user": "Sassy", "sex": "female"}];


function truthCheck(collection, pre) {
    let flag = true;
    for (let index = 0; index < collection.length; index++) {
        
        if (collection[index][pre] === undefined) {
            flag = false;
            return flag;
        } else {
            flag = true;
        }
        
    }
    
    return flag;
}

let flag2 = truthCheck(array, pre);

console.log(flag2);
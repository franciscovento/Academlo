
let str = "love";


function translatePigLatin(str){
const vocals = ["a", "e", "i", "o", "u"]
str = str.split("");
let resp;
let index;
let indexes = []
for (let i = 0; i < vocals.length; i++) {
    index = str.indexOf(vocals[i])
    if (index !== -1) {
        if (index < flag) {
            flag = index
        }
       
    }
}

if (flag == 50) {
    index = -1
} else{
    index = flag;
}

    if (index === 0) {
        resp = str.join("") + "way"
        
    } else if (index == -1) {
        resp = str.join("") + "ay"

    }else{
        
        let a = str.splice(0,index)
        console.log(a)
        a = a.join("")
        str.splice(str.length,0,a)
        str.splice(str.length,0,"ay")
        resp = str.join("")
    }
   

return resp;
}

let resp = translatePigLatin(str);
console.log(resp)
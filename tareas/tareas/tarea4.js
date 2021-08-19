const str = "ATCGA";
// AT  GC 
function pairElement(str) {
const arreglo = [];

for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == "A" || element == "T") {
        if (element === "A") {
            arreglo.push([element,"T"])
        } else{
            arreglo.push([element,"A"])
        }
       
    } else{
        if (element === "C") {
            arreglo.push([element, "G"])
        }else{
            arreglo.push([element,"C"])
        }
    }
    
}
return arreglo;


}

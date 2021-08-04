let str = "0_0 (: /-\ :) 0-0"

function palindrome(str) {
str = str.split('').filter(x => x != ' ').join('').toLowerCase().replace(/[&\/\\#,+()$~%.:_-]/g, '');
console.log(str)
let strInvertido = str.split('').reverse().join(''); 
if (str === strInvertido) {
    return true
}else{
    return false;
}
 
}

  console.log(palindrome(str))
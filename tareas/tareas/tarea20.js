let encodedStr = "UBYN GRATB ZHPUN GNERN CNEN NLRE";

const cipher = (encodedStr) => {
    let arr;
    let resp = [];
    for (let i = 0; i < encodedStr.length; i++) {
        const element = encodedStr[i];        
        if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90 ) {
            if (element.charCodeAt() < 78) {
               arr = encodedStr.replace( new RegExp( element, 'g' ), String.fromCharCode(element.charCodeAt() + 13) );
            } else{
                arr = encodedStr.replace( new RegExp( element, 'g' ), String.fromCharCode(element.charCodeAt() - 13) );
            }
        }
        
        resp.push(arr[i])
        
    }
    resp = resp.join('');
    return resp;
}




let resp = cipher(encodedStr);
console.log(resp)


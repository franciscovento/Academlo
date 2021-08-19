let str = "I think we should look up there";
let before = "up";
let after = "Down";


function myReplace(str, before, after) {
    
    let resp;
    let flag = before.charAt(0) === before.charAt(0).toUpperCase();
    
    if(flag){
    after = after.charAt(0).toUpperCase() + after.slice(1);
    resp = str.replace(before, after)
   
  
    }else if(after.charAt(0) === after.charAt(0).toUpperCase()){
        after =  after.charAt(0).toLowerCase() + after.slice(1);
        resp = str.replace(before, after)
        
    } else{
        resp = str.replace(before, after)
    }
  
    return resp;
  }

  resp = myReplace(str, before, after);
  console.log(resp)
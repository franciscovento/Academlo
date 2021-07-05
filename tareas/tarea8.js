let arr = [1, 2, 3, 4]
function dropElements(arr, func) {
    let index = -1;
    for (let i = 0; i<arr.length; i++){
    if (func(arr[i])){
      index = i;
      break;
    }
    }
  
    if (index != -1){
      arr = arr.slice(index, arr.length )
      return arr;
    }else{
      arr = [];
      return arr;
    }
  
  }
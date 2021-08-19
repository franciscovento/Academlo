let arr = [{}, [2], [3, [[4]]]];


function steamrollArray(arr) {

   let resp = JSON.stringify(arr)
   resp = resp.replace(/[[\]]/g,'');
   resp = resp.replace(/['"]/g, '')
   resp = resp.split(',')

   for (let i = 0; i < resp.length; i++) {
       const element = resp[i];
        if (Number(element)) {
            resp.splice(i, 1,Number(element))
        } else if (element == "{}"){
            resp.splice(i,1,{});
        }
   }

   resp = resp.filter(x => x != '');
   

    return resp;
  }



  console.log( steamrollArray(arr))
function fearNotLetter(str) {
    let s = "abcdefghijklmnopqrstuvwxyz";
    if (s.includes(str)){
      return undefined;
    }else{
      let firstLetter = s.indexOf(str[0])
      let lastLetter = s.indexOf(str[str.length-1])
      str = str.split('');
      s = s.slice(firstLetter, lastLetter +1).split('');
  
      for (let i = 0; i < s.length; i++) {
        const element = s[i];
        for (let j = 0; j < str.length; j++) {
          const elementS = str[j];
          if (element === elementS) {
            s[i] = 'quitar'
          }
        }
      }
  
      s = s.filter(x => x !== 'quitar')
      return s.toString();
    }
  }
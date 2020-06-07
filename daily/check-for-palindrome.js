function  checkForPalindrome(str) {
      let dict= new Map()
      for(let c of str) {
         if (!dict.has(c)) {
            dict.set(c,1)
         }else {
            dict.set(c, dict.get(c)+1)
         }
      }
       let oddLetters= 0 
      for(let key of dict.keys()){
           
           if (dict.get(key) %2 ===1 ) {
              oddLetters++
           }
           if (oddLetters>1) return false 
      }
      return true

}


let str='aafef'
console.log(checkForPalindrome(str))
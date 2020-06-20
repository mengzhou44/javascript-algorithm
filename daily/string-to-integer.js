function convertToInt(str) {
   let sign = 1 
   if (str.startsWith('+')) {
       str= str.slice(1)
   } else if (str.startsWith('-')) {
       str= str.slice(1)
       sign=-1
   }
   let result = 0
   for(let c of str) {
        result= 10*result + c.charCodeAt(0) - 48
   }
   return result *sign
}


console.log(convertToInt('-105')+1)
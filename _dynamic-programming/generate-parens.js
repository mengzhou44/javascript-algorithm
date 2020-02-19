function generateParens(remaining) {
   if (remaining===0) {
        return [""] 
   }
   let prev = generateParens(remaining-1)
   let result = []
   for (let str of prev) {
    for(let i =0; i< str.length; i++) {
      if (str[i] ==="(") {
         let inserted = insertInside(str,i)
         if (result.includes(inserted) === false) {
              result.push(inserted)
         }
      }
     }
     result.push(str+"()")
   }
   return result
}
 

function insertInside(str, i) {
   return str.substring(0, i+1) +"()" + str.substring(i+1)
}

console.log(generateParens(3))
function isSubstring(strA, strB) {
    return strA ==  strB
}

function isRotation(strA, strB) {
   let firstLetter= strA[0]
   let count = 0
   while(count<strB.length) {
        if (strB[0] !== firstLetter) {
           strB= strB.substring(1) + strB[0];
        }
        else {
           if  (isSubstring(strA, strB)  === true) {
              return true
           }
        }
        count++;
   }
   return false 
}

console.log(isRotation("waterbottle" ,"erbottlewat"))
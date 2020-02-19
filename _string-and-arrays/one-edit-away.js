function oneEditAway(strA, strB) {
    let  sizeDiff = Math.abs(strA.length - strB.length)
    if (sizeDiff>1) {
      return false; 
    }
    
    let differenceFound = false 
    if (sizeDiff === 0 ) {
        for (let i=0; i<strA.length; i++) {
           if (strA[i] !== strB[i]) {
               if (differenceFound=== true) {
                  return false 
               }
               differenceFound= true
           }
        }
        return true
    }
    
    let s1, s2
    
    if (strA.length> strB.length) {
         s1= strA
         s2= strB
     } else {
         s1= strB
         s2= strA
     }
    let index1 =0
    let index2 =0
    while(index1<s1.length && index2< s2.length) {
        if (s1[index1] !== s2[index2]) {
           if (index1 !== index2) {
              return false 
           }  
           index1++
        }else {
           index1++
           index2++
        }
    }  
    return true 
   
}

console.log(oneEditAway('pale', 'ple'))
console.log(oneEditAway('pales', 'pale'))
console.log(oneEditAway('pale', 'bale'))
console.log(oneEditAway('pale', 'bae'))
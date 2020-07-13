function createPalindrome(str){     
    let temp = str.split('')
    for(let i=0; i<temp.length; i++) {
         let newStr = removeCharAt(i, temp)
         console.log("newStr", newStr)
         if (isPalinedrome(newStr)) {
            return true 
         }
    }

    return false 
}

function removeCharAt(index, temp) {
   let filtered = temp.filter((item,i)=> i !== index)
  return filtered.join('')
}

function isPalinedrome(str) {
    let l=0 
    let r = str.length -1 
    while(l<r) {
        if (str[l]!== str[r]) {
           return false 
        }
        l++
        r--
    }      
    return true 
}

console.log(createPalindrome("abcdcbea"))
console.log(createPalindrome("abccba"))
console.log(createPalindrome("abccaa"))
 
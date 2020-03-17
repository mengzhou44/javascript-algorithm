function isSorted(array, rule){
    let maxLength = 0 
    for(let item of array) {
        maxLength = Math.max(maxLength, item.length)
    }   
     
    let index= 0 
     while(index< maxLength) {
       let chars=[]
        for (let item of array) {
            if (index> item.length-1 ) {
                chars.push(0)
            }else {
               chars.push(item[index])
            }
        }
        if (!isInOrder(chars, rule)) {
           return false
        }
        index++
     }
     return true 
}

function isInOrder( chars,  rule) {
   let  temp = rule.split('')
    while(chars[0]=== 0) {
        chars.shift()
    }
    for(let i = 0; i< chars.length-1; i++) {
       for (let j=i+1; j<chars.length; j++) {
            if (temp.indexOf(chars[i])> temp.indexOf(chars[j])) {
               return false 
            }
       }
    }
    return true
}

//let words = ["abcd", "efgh"]

//console.log(isSorted(words, "zyxwvutsrqponmlkjihgfedcba"))

let words = ["zyx", "zyxw", "zyxwy"]
let order="zyxwvutsrqponmlkjihgfedcba"


console.log(isSorted(words, order))
function isStroboprogramatic(str) {
     let digits = '01689'.split('')
     let temp =[]
     for(let c of str) {
        if (!digits.includes(c)) {
            return false 
        }
        if (c==='6' ) {
            temp.unshift('9')
        }
        else if (c==='9' ) {
            temp.unshift('6')
        } else {
            temp.unshift(c)
        }
     }

     return temp.join('')=== str

}

console.log(isStroboprogramatic('69'))
console.log(isStroboprogramatic('88'))
console.log(isStroboprogramatic('962'))
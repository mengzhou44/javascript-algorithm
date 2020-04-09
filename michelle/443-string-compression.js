function compress(chars) {
    if (chars.length == 1) return 1
    let current = 0
    let count = 0
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[current]) {
            count = count + 1
        } else {
            current = addCount(chars, current, count)
            current++
            chars[current] = chars[i]
            count = 1
        }
        if (i === chars.length - 1) {
            current = addCount(chars, current, count)
        }
    }
    return current + 1
}

function addCount(chars, current, count) {
    if (count === 1) return current

    let temp = count.toString().split('')
    for (i = 0; i < temp.length; i++) {
        current++
        chars[current] = temp[i]
    }

    return current
}

*******

function compress(chars) {
    let current=0
    let count =1 
    let currentChar = chars[0]
    for(let i=1;i<chars.length; i++) {
        if (chars[i] !== currentChar) {
               if (count>1) {
                   current= addCount(count,current, chars)
               }
               count=1
               currentChar =chars[i]
               current++
               chars[current] = chars[i]
        }else {
            count++
        }
    }
   
    if (count>1) {
       current= addCount(count, current, chars)
    }
 
    return current+1 
      
 }
 
 function addCount(count, current, chars) {
     let array = count.toString().split('')
     for(let c of array) {
         current++
         chars[current]=c
     }
     return current 
 }
 
 
 
 
 
  

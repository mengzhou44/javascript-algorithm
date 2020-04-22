function getPermutations(str) {
     if (str.length === 1 ) {
         return [str]
     }
     let last = str[str.length-1]
     str=str.substring(0,str.length-1)
     let previous = getPermutations(str) 
     let result =[]
     previous.forEach(item=> {
         let temp =  merge(item,last)
         temp.forEach(i=> result.push(i))
     })
     return result
}

function merge(str,last) {
    let result =[] 
    for(let i=0;i<str.length; i++) {
        let temp = str.substring(0,i) +last +str.substring(i)
        result.push(temp)
    }
    result.push(str+last)
    return result
}

console.log(getPermutations('abcd').length)

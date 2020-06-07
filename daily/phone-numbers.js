function makeWords(phone) {
    const letterMap = new Map()
    letterMap.set(1, [])
    letterMap.set(2, ['a', 'b', 'c'])
    letterMap.set(3, ['d', 'e', 'f'])
    letterMap.set(4, ['g', 'h', 'i'])
    letterMap.set(5, ['j', 'k', 'l'])
    letterMap.set(6, ['m', 'n', 'o'])
    letterMap.set(7, ['p', 'q', 'r', 's'])
    letterMap.set(8, ['t', 'u', 'v'])
    letterMap.set(9, ['w', 'x', 'y', 'z'])
    letterMap.set(0, [])

    const validWords = ['dog', 'fish', 'cat', 'fog']

    let digits = phone.split('').map((item) => parseInt(item))
    let temp = digits.map((item) => letterMap.get(item))
    
    let words = helper(temp)
    return words.filter((word) => validWords.includes(word))
}

function helper(array) {
    if (array.length ===0 ) return []
    if (array.length ===1 ) return  array[0]
  
    let last = array[array.length - 1]
    
    array.pop()
    let temp = helper(array)
    
    let result = []
    for (let word of temp) {
        
       for (let c of last) {
           result.push(word + c)
         }
    }
    return result
}

 

console.log(makeWords('364'))

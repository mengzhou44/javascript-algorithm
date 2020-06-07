function shortestDistance(words, word1, word2) {
    let array1 = []
    let array2 = []

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            array1.push(i)
        }
        if (words[i] === word2) {
            array2.push(i)
        }
    }
    let shortest = Number.MAX_SAFE_INTEGER
    for(let i of array1) {
       for (let j of array2) {
           shortest = Math.min(Math.abs(i-j), shortest)
       }
    }
    return shortest
}

// function shortestDistance(words, word1, word2) {
//       let index1, index2
//       let shortest = Number.MAX_SAFE_INTEGER
//       for(let i=0; i<words.length; i++) {
//          if (words[i] === word1) {
//             index1 = i
//          }
//          if (words[i] === word2) {
//             index2= i
//          }
//          if (index1 && index2) {
//             shortest =  Math.min(Math.abs(index1-index2), shortest)
//          }
//       }
//       return shortest
// }

 function shortestDistance(words, word1, word2) {
     let array1=[]
     let array2 =[]
     for(let i=0; i<words.length; i++) {
         if (words[i] === word1) {
             array1.push(i)
         } else if (words[i] === word2) {
             array2.push(i)
         }
     }
    
     let minDistance =words.length
     for(let i of array1) {
           let temp = array2.map(item=> Math.abs(item- i)).sort((a,b)=> a-b)
           minDistance = Math.min(temp[0],minDistance)
     }

     return minDistance 

 }



let words= ['practices', 'makes', 'perfect', 'coding', 'makes']
let word1='coding'
let word2='makes'

console.log(shortestDistance(words, word1, word2))
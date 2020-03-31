function ladderLength(beginWord, endWord, wordList) {
 
  wordList = wordList.filter(item=> item!==beginWord)
   
 if (!wordList.includes(endWord)) return 0 
   
 let neighbours = findNeighbours(beginWord, wordList)

   
 if (neighbours.length === 0) return 0
 
 if (neighbours.includes(endWord)) {   
      return 2
 }
 
 
 let result 

 for (let word of neighbours) {
       let newWordList = wordList.filter(item => 
                                  !neighbours.includes(item))
     
       let  temp = ladderLength(word, endWord, newWordList) 
       console.log(temp)
       if (temp === 0) {
           continue
       }else {
           if (result!== undefined) {
               result =  Math.min(result, temp) 
           }else {
               result = temp   
           }
       }
 }
   
 if (result === undefined) return 0 
   
 return result +1
}


function findNeighbours(word, wordList) {
     return wordList.filter(item => isNeighbour(word, item))
}

function isNeighbour(wordA, wordB) {
 if (wordA.length !== wordB.length) return false

 let array1 = wordA.split('')
 let array2 = wordB.split('')
 let count = 0
 for (i = 0; i < array1.length; i++) {
     if (array1[i] !== array2[i]) {
         count++
     }
 }
 
 return count === 1
}

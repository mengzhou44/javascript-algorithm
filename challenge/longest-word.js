function findLongestWord(str) {
     let words = str.split(' ')
     let  res= '' 
     for(let word of words) {
         if (word.length> res.length) {
             res = word 
         }
     }
     return res 
}


console.log(findLongestWord('I woke up early today'))
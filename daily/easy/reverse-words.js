function reverseWords(words) {
   let array= words.split(" ")
   let temp = [] 
   for(let word of array) {
     if (word!== '') {
          temp.unshift(word)
     }
   }

   return  temp.join(' ')
}


console.log(reverseWords("can you read this"))
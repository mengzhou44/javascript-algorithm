// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function createChars(str) {
//   let  chars = {}
//   for(let char of str) {
//       if (chars[char]=== undefined) {
//           chars[char] = 1;
//       }else {
//          chars[char] =chars[char]++;
//       }
//   }
//   return chars; 
// }

// function anagrams(stringA, stringB) {
//      const  charsA= createChars(stringA);
//      const  charsB= createChars(stringB);

//      if (Object.keys(charsA).length !==Object.keys(charsB).length) {
//         return false; 
//      }

//      for(let char in charsA) {
//          if (charsA[char] !== charsB[char]) {
//             return false; 
//          }
//      }

//      return true; 
  
// }



function sort(string) {
   let array = string.split("");
   for(i =0; i< array.length; i++ ) {
       for(j=0; j<array.length-i -1; j++ ) {
           if (array[j]> array[j+1]) {
               const temp = array[j];
               array[j]= array[j+1]
               array[j+1] = temp;
           }
       }
   }
   return array.join("")
}

function anagrams(stringA, stringB) {
     const trimmedA = stringA.replace(/[^\w]/g,'').toLowerCase()
     const trimmedB = stringB.replace(/[^\w]/g,'').toLowerCase()
    // const  sortedA = sort(trimmedA)
    
    // const  sortedB= sort(trimmedB)
     
     const sortedA = trimmedA.split("").sort().join("")
     const sortedB = trimmedB.split("").sort().join("")
   
     return sortedA === sortedB
  
}



module.exports = anagrams;

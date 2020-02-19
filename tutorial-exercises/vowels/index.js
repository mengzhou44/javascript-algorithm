// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   const trimmed = str.replace(/[^\w]/g, "").toLowerCase()
   let count = 0;
   for(let letter of trimmed) {
      if (['a','e', 'i' ,'o', 'u'].includes(letter)=== true) {
        count++
      }

   }
   return count;
}

// function vowels(str) {
//   const trimmed = str.toLowerCase().replace(/[^aeiou]/g, '');

//   return trimmed.length;
// }

module.exports = vowels;

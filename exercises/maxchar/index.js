// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function createChars(str) {
  let  chars = {}
  for(let char of str) {
      if (chars[char]=== undefined) {
          chars[char] = 1;
      }else {
         chars[char] =chars[char]++;
      }
  }
  return chars; 
}
function maxChar(str) {
  const chars = createChars(str);

   let result ='';
   let max = 0;
   for(let key in chars ) {
        if (chars[key]> max) {
            max =chars[key]
            result = key;
        }
   }
   return result; 

}

module.exports = maxChar;

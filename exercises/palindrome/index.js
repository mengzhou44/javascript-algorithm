function palindrome(str) {
    const array = str.split("")
    return  array.every((char, index) => 
               char === array[array.length -1 - index])
   
}

module.exports = palindrome;

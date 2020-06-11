// function validWordAbbreviation(word, abbrev) {
//     if (word === abbrev) {
//         return true
//     }
//     let array= abbrev.split('')
//     let currentIndex = 0
//     while (array.length > 0) {
//         let c = array[0]
//         if (!isDigit(c)) {
//             if (word[currentIndex] !== c) {
//                 return false
//             }
//             currentIndex++
//             array.shift()
//         } else {
//             let digits = findDigits(array)
//             currentIndex = currentIndex + parseInt(digits)
//             if (currentIndex > word.length - 1) {
//                 return false
//             }
//             array.splice(0, digits.length)
//         }
//     }

//     return true 
// }

// function isDigit(c) {
//     return '0123456789'.split('').includes(c)
// }

// function findDigits(abbrev) {
//     let digits = []
//     for (let i = 0; i < abbrev.length; i++) {
//         if (isDigit(abbrev[i])) {
//             digits.push(abbrev[i])
//         } else {
//             break
//         }
//     }
//     return digits.join('')
// }

function validWordAbbreviation(word, abbrev) {
     let currentIndex = 0 
     let array=[]
      
     while(currentIndex<abbrev.length) {
         if (!isDigit(abbrev[currentIndex])) {
            array.push(abbrev[currentIndex])
         }else {
            let count = 0
            while (isDigit(abbrev[currentIndex])) {
               count= 10*count+ parseInt(abbrev[currentIndex])
               currentIndex++
            }
            for(let i=0; i<count; i++) {
                array.push(' ')
            }
            array.push(abbrev[currentIndex])
         }
         currentIndex++
     }
  
     for(let i=0; i<word.length; i++) {
         if (array[i]!==' ' &&  word[i] !== array[i]) {
             return false 
         }
     }
     return true 
}
    

function isDigit(c) {
    return '0123456789'.split('').includes(c)
}


console.log(validWordAbbreviation('internationalization', 'i12iz4n'))
// var titleToNumber = function(s) {
//     let array = s.split('')
//     let result = 0
//     let count = 0
//     while (array.length > 0) {
//         let item = array.pop()
//         let val = getValue(item)
//         result += Math.pow(26, count) * val
//         count++
//     }

//     return result
// }

// function getValue(c) {
//     let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//     return letters.indexOf(c) + 1
// }

function titleToNumber(s) {
    let array = s.split('')
    result = 0
    while (array.length > 0) {
        let item = array.shift()
        result = result * 26 + getValue(item)
    }
    return result
}

function getValue(c) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    return letters.indexOf(c) + 1
}


function binaryToDecimal(s) {
  let array = s.split('')
  result = 0
  while (array.length > 0) {
      let item = array.shift()
      result = result * 2 +  parseInt(item)
  }
  return result
}

 
console.log(binaryToDecimal('1001'))



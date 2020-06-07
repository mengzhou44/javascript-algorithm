//Return the longest run of 1s for a given integer n's binary representation.

function longestOnes(n) {
    const array = convertToBinary(n)
    console.log(array)
    let  result  = 0 
    let temp = 0 
    for(let i=0; i<array.length; i++) {
       if (array[i] === 0) {
           result = Math.max(temp, result)
           temp=0
       } else {
           temp++ 
       }
    }

    return result 
}


function convertToBinary(n) {
     let array = [] 
      while(n>0) {
          if (n %2 ===0) {
              array.unshift(0)
          } else {
             array.unshift(1)
          }

          n = Math.floor(n/2)
      }
      return array
}

console.log(longestOnes(242))
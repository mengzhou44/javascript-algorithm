//given an input string, reverse the string word by word 
// do it in space, without allocating extra space 
//the words are always seprated with a space

// function  reverseString(array) {
//    if (!array.includes(' ')) return array
//   reverse(array,0, array.length-1)
//   let startIndex = 0
//   for(let i=0; i<array.length; i++) {
//       if (array[i] ===' ') {
//          reverse(array,startIndex, i-1)
//          startIndex = i+1
//       } else if (i=== array.length-1) {
//          reverse(array,startIndex, array.length-1)
//       }  
//   }
 
//   return array 
// }

// function reverse(array, startIndex, endIndex) {
//     while(startIndex<endIndex) {
//          let temp = array[startIndex]
//          array[startIndex]= array[endIndex]
//          array[endIndex] = temp
//          startIndex++
//          endIndex--
//     }
// }

function reverseString(array) {
   reverse(array,0, array.length-1)
   let startIndex=0
   for(let i=0; i<array.length;i++) {
       if (array[i] ===' ') {
           reverse(array,startIndex, i-1)
           startIndex= i+1
       }else if (i ===array.length-1) {
         reverse(array,startIndex, i)
       }
   }
   return array
}


function reverse(array, startIndex, endIndex) {
    while(startIndex<endIndex) {
        let temp = array[startIndex]
        array[startIndex]= array[endIndex]
        array[endIndex] = temp
        startIndex++
        endIndex--
    }
}


console.log(reverseString(['s', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']))
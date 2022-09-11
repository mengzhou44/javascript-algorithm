// function longestWords(str) {
//   let words = str.split(' ');
//   let map = new Map();
//   let maxSize = 0;

//   for (let word of words) {
//     let size = word.length;
//     if (maxSize < size) {
//       map.set(size, [word]);
//       maxSize = size;
//     } else if (maxSize === size) {
//         let temp = map.get(size)
    
//       map.set(size, [...temp, word]);
//     }
//   }
//   return map.get(maxSize);
// }


function longestWords(str) {
  let words = str.split(' ');
   let res= [] 

  for (let word of words) {
     if (res.length === 0) {
         res.push(word)
     } else {
         if (word.length> res[0].length) {
             res= [word]
         }else   if (word.length ===  res[0].length) {
             res.push(word)
         }
     }
  }
  return  res
}


console.log(longestWords('here is some tea!'));

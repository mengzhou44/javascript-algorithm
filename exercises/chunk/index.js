// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let result = [];
//   let subarray = [];
//   for (let i = 1; i <= array.length; i++) {
//     subarray.push(array[i - 1]);
//     if (i % size === 0) {
//       result.push([...subarray]);
//       subarray = [];
//     }
//   }
//   if (subarray.length > 0) {
//     result.push([...subarray]);
//   }

//   return result;
// }


function chunk(array, size) {
   const chunks = Math.ceil(array.length /size)
   const result = []
   for(let i=0; i< chunks; i++) {
       result.push(array.slice(i*size, (i+1)*size))
   } 
   return result;
}

module.exports = chunk;

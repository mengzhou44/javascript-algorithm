function findMagicIndex(arr) {
    if (arr[arr.length - 1] === arr.length - 1) {
        return arr.length - 1;
    }
    arr.pop();

    return findMagicIndex(arr);
}

//arr is sorted
function findMagicIndex(arr) {

   if (arr.length === 1) {
       if (arr[0] === 0) {
           return 0
       }
   }
      
  
   let midIndex = Math.floor(arr.length/2) 

   if (arr[midIndex] === midIndex) return midIndex
   
   else if (arr[midIndex]<midIndex) {
       return findMagicIndex(arr.slice(0,midIndex))
   }
   else {
      return findMagicIndex(arr.slice(midIndex))
   }
}


let array = [-10, -5,2,2,2,3,4,5,9,12,13];

console.log(findMagicIndex(array));

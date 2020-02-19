// function moveZeros(array) {
//     if (array.length === 1) {
//         return array
//     }
//     let temp = moveZeros(array.slice(1))
//     if (array[0] === 0) {
//         return [...temp, 0]
//     }
//     return [array[0], ...temp]
// }

var moveZeroes = function(nums) {
  let count = nums.length
  let zeros=0
  while(count>0) {
       let item = nums.shift()
       if (item!==0) {
           nums.push(item)
       }else {
           zeros++
       }
      count--
  }
  while(zeros>0) {
      nums.push(0)
      zeros--
  }
 return nums
};


console.log(moveZeros([23, 0, 23, 0, 73, 0, 0, 5, 3, 0]))

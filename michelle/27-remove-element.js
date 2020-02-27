// function removeElement(nums, val) {
//   nums = nums.sort((a, b) => a - b)
//    let count = 0
//   for(let i=0; i< nums.length; i++) {
//       if (nums[i]!== val) {

//            nums[count] = nums[i]
//           count++
//       }
//   }
//   nums = nums.slice(0, count)
//   return count
// }

function removeElement(nums, val) {
  if (nums.length ===1) {
     if (nums[0] === val) return 0
      return 1
  }
  
  let i = 0
  let last = nums.length - 1
  while (i <= last) {
      if (nums[i] === val) {
          let temp = nums[i]
          nums[i] = nums[last]
          nums[last] = temp
          last--
      } else {
          i++
      }
  }

  return last + 1
}

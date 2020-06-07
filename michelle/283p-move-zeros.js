/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  if (nums.length < 2) return
  let first = nums.shift()
  moveZeroes(nums)

  if (first === 0) {
      nums.push(0)
  } else {
      nums.unshift(first)
  }
 
}

********]

function moveZeroes(nums){
  let left = 0
  let right= nums.length
  while(left<right) {
      if (nums[left] === 0){ 
            moveZeroToEnd(left, nums)
            right--
      } else {
          left++
      }
  }
}

function moveZeroToEnd(index, nums) {
  for(let i=index; i<nums.length-1; i++) {
      nums[i] = nums[i+1]
   }
   nums[nums.length-1] = 0
}
 


***********

function moveZeroes(nums){
  let pos= 0
  for(let i=0; i<nums.length; i++) {
      if (nums[i] !== 0) {
          nums[pos]= nums[i]
          pos++
      }
  }
   
   
  for(let i= pos; i<nums.length; i++) {
       nums[i] = 0
  } 
   return nums
}

**********

function moveZeroes(nums){
  let bound = nums.length-1
  let index = 0 
  while(index<=bound) {
       if (nums[index] === 0){
           for(let j=index; j<=bound; j++) {
               nums[j]= nums[j+1]
           }
           nums[bound]=0
           bound--
           continue
       }
      
      index++
  }
}






/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    if (nums.length < 2) return nums
    let first = nums.shift()
    nums = moveZeroes(nums)
    if (first === 0) {
        nums.push(0)
    } else {
        nums.unshift(first)
    }
    return nums
}


********

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
       swap(i,i+1, nums)
  }
}

function swap(i, j, nums) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
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


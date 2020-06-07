function minWindowToSort(nums) {
    if (nums.length < 2) return [0, 0]
     return helper(nums, 0, nums.length-1) 
     function helper(nums, start, end) {
            if (start > end) return [0, 0]
           if (isMinmum(nums, start, end)) {
               return helper(nums,start+1, end)
           }
           if (isMaximum(nums, start, end)) {
            return helper(nums,start, end-1)
           }
           return [start, end]
     }
}

function isMinmum(nums, start, end) {
    for (let i = start; i < end; i++) {
        if (nums[i] < nums[start]) {
            return false
        }
    }
    return true
}

function isMaximum(nums, start, end) {
  for (let i = start; i < end; i++) {
      if (nums[i] > nums[end]) {
          return false
      }
  }
  return true
}

console.log(minWindowToSort([2, 4, 7, 5, 6, 8, 9]))

function removeDuplicates(nums) {
    if (nums.length <2)  return nums.length
    let currentIndex = 0
    for(let i=1; i<nums.length; i++) {
        if (nums[currentIndex] !== nums[i]) {
             currentIndex++
             nums[currentIndex]= nums[i]
        }
    }
    return currentIndex+1

}
function pivotIndex(nums) {
    if (nums.length === 0) return -1
    let sum = nums.reduce((sum, item) => sum + item)
    let index = 0
    let previousSum = 0
    while (index < nums.length) {
        if (previousSum * 2 === sum - nums[index]) {
            return index
        }
        previousSum += nums[index]
        index++
    }
    return -1
}

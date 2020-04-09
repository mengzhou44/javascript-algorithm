function pivotIndex(nums) {
    let total = nums.reduce((sum, item) => sum + item, 0)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if ((total - nums[i]) % 2 === 0 && sum === (total - nums[i]) / 2) {
            return i
        } else {
            sum += nums[i]
        }
    }

    return -1
}

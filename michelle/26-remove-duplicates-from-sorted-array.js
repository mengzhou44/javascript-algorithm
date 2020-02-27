function removeDuplicates(nums) {
    if (nums.length === 0) return 0

    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[count] !== nums[i]) {
            count++
            nums[count] = nums[i]
        }
    }

    return count + 1
}

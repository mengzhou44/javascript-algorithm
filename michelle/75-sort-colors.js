function sortColors(nums) {
    let l = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            swap(l, i, nums)
            l++
        }
    }
    for (let i = l; i < nums.length; i++) {
        if (nums[i] === 1) {
            swap(l, i, nums)
            l++
        }
    }
    return nums
}

function swap(i, j, nums) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

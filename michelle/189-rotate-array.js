function rotate(nums, k) {
    k = k % nums.length
    nums = nums.reverse()
    reverseArray(nums, 0, k - 1)
    reverseArray(nums, k, nums.length - 1)
}

function reverseArray(nums, start, end) {
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}

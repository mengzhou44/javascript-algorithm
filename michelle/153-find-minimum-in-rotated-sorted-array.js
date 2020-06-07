function findMin(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            return nums[i + 1]
        }
    }
    return nums[0]
}

// 二 分 法
function findMin(nums) {
    if (nums.length === 1) return nums[0]
    let n = nums.length
    let left = 0
    let right = n - 1
    let result = nums[0]
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] >= nums[left]) {
            result = Math.min(nums[left], result)
            left = mid + 1
        } else if (nums[mid] <= nums[right]) {
            result = Math.min(nums[mid], result)
            right = mid - 1
        }
    }
    return result
}

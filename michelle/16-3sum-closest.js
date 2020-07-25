function threeSumClosest(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let result = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        let temp = nums.filter((item, index) => index !== i)

        let left = 0
        let right = temp.length - 1

        while (left < right) {
            let sum = temp[left] + temp[right] + nums[i]

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum
            }
            if (sum > target) {
                right--
            } else {
                left++
            }
        }
    }
    return result
}

function threeSumClosest(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let result = nums[0] + nums[1] + nums[nums.length - 1]

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum === target) {
                return target
            }

            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum
            }
            if (sum > target) {
                r--
            } else {
                l++
            }
        }
    }

    return result
}

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return 1
    if (nums.length === 2) {
        return nums[0] < nums[1] ? 2 : 1
    }

    let dp = new Array(nums.length)
    dp[0] = 1
    dp[1] = nums[0] < nums[1] ? 2 : 1

    let result = 0
    for (let i = 2; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        result = Math.max(dp[i], result)
    }

    return result
}

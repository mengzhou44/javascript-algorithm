function maxCoins(nums) {
    let n = nums.length + 2
    let array = [1, ...nums, 1]
    let dp = new Array(n)
    for (let row = 0; row < n; row++) {
        dp[row] = new Array(n)
        dp[row].fill(0)
    }

    for (let gap = 2; gap < n; gap++) {
        for (let left = 0; left < n - gap; left++) {
            let cur = 0
            let right = left + gap
            for (let i = left + 1; i < right; i++) {
                cur = Math.max(
                    cur,
                    dp[left][i] +
                        array[left] * array[i] * array[right] +
                        dp[i][right]
                )
            }
            dp[left][right] = cur
        }
    }

    return dp[0][n - 1]
}

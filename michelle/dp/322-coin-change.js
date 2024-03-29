function coinChange(coins, amount) {
    let dp = new Array(amount + 1)
    dp.fill(amount + 1)

    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }

    if (dp[amount] === amount + 1) return -1

    return dp[amount]
}

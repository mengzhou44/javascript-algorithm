function largestSumOfAverages(A, K) {
    let n = A.length
    let sums = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        sums[i] = sums[i - 1] + A[i - 1]
    }

    let dp = new Array(K + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }

    return LSA(A, n, K)

    function LSA(A, n, k) {
        if (dp[k][n] > 0) return dp[k][n]
        if (k === 1) return sums[n] / n
        for (let i = k - 1; i < n; ++i) {
            dp[k][n] = Math.max(
                dp[k][n],
                LSA(A, i, k - 1) + (sums[n] - sums[i]) / (n - i)
            )
        }
        return dp[k][n]
    }
}

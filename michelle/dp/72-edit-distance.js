function minDistance(word1, word2) {
    let m = word1.length // rows
    let n = word2.length // cols

    let dp = create2DArray(m + 1, n + 1, Number.MAX_SAFE_INTEGER)

    for (let i = 0; i < m + 1; i++) {
        dp[i][0] = i
    }

    for (let j = 0; j < n + 1; j++) {
        dp[0][j] = j
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let c1 = word1[i]
            let c2 = word2[j]
            if (c1 === c2) {
                dp[i + 1][j + 1] = dp[i][j]
            } else {
                dp[i + 1][j + 1] =
                    Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1
            }
        }
    }
    console.log(dp)
    return dp[m][n]
}

function create2DArray(rows, cols, value) {
    let array = new Array(rows)

    for (let row = 0; row < array.length; row++) {
        let temp = new Array(cols)
        temp.fill(value)
        array[row] = temp
    }

    return array
}

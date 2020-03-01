function maxProfit(prices) {
    let max = 0

    if (prices.length < 2) return 0

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            max = Math.max(max, prices[j] - prices[i])
        }
    }
    return max
}

function maxProfit(prices) {
    let max = 0
    let min_price = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < prices.length; i++) {
        min_price = Math.min(min_price, prices[i])
        max = Math.max(max, prices[i] - min_price)
    }
    return max
}

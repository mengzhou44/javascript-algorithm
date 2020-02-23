function buy_and_sell(array) {
    let maxProfit = 0
    while (array.length > 0) {
        let cur = array.shift()
        maxProfit = Math.max(maxProfit, findMaxProfit(array, cur))
    }
    return maxProfit
}

function findMaxProfit(array, price) {
    let max = 0
    for (let item of array) {
        max = Math.max(item - price, max)
    }
    return max
}

console.log(buy_and_sell([9, 11, 8, 5, 7, 10]))

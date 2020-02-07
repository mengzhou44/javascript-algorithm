function makeChange(n, denoms) {
    let map = new Array(n + 1)
    for (let i = 0; i < n + 1; i++) {
        map[i] = new Array(denoms.length)
    }

    let result = makeChangeHelper(n, denoms, 0, map)
    return result
}

function makeChangeHelper(total, denoms, index, map) {
    if (map[total][index] > 0) {
        return map[total][index]
    }

    let coin = denoms[index]
    if (index === denoms.length - 1) {
        let remaining = total % coin
        return remaining === 0 ? 1 : 0
    }

    let numberOfWays = 0
    for (let amount = 0; amount <= total; amount += coin) {
        numberOfWays += makeChangeHelper(total - amount, denoms, index + 1, map)
    }
    map[total][index] = numberOfWays

    return numberOfWays
}

let result = makeChange(10, [25, 10, 5, 1])

console.log(result)

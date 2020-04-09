function numTrees(n) {
    if (n === 0) return 1
    if (n === 1) return 1
    if (n === 2) return 2
    let sum = 0
    for (let k = 0; k < n; k++) {
        sum += numTrees(k) * numTrees(n - 1 - k)
    }
    return sum
}

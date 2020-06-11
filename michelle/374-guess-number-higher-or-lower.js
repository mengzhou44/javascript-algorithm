function guessNumber(n) {
    let left = 1
    let right = n
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let value = guess(mid)

        if (value === 0) return mid
        if (value === -1) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return undefined
}

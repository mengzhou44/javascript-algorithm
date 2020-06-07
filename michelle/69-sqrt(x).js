function mySqrt(x) {
    if (x === 1) return 1

    let left = 1
    let right = Math.floor(x / 2)
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (mid * mid === x) {
            return mid
        }
        if (mid * mid > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
}

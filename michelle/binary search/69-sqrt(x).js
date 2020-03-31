var mySqrt = function(x) {
    if (x < 2) return x

    let left = 1
    let right = Math.floor(x / 2)
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (mid * mid === x) {
            return mid
        } else if (mid * mid > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return Math.min(left, right)
}

function reverse(num) {
    let sign = 1
    if (num < 0) {
        sign = -1
        num = Math.abs(num)
    }

    let result = 0
    while (num > 0) {
        result = 10 * result + (num % 10)
        num = Math.floor(num / 10)
    }

    result = result * sign

    if (result > Math.pow(2, 31) - 1 || result < -1 * Math.pow(2, 31)) {
        return 0
    }

    return result
}

function reverse(num) {
    let sign = 1
    if (num < 0) {
        sign = -1
    }
    num = Math.abs(num)
    let result = 0
    while (num > 0) {
        let val = num % 10
        result = result * 10 + val
        num = Math.floor(num / 10)
    }

    if (result > Math.pow(2, 31) - 1) return 0

    return result * sign
}

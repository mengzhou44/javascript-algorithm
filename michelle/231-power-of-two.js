function isPowerOfTwo(n) {
    if (n < 1) return false
    if (n === 1) return true

    let temp = 1
    while (temp < n) {
        temp = temp * 2
        if (temp === n) {
            return true
        }
    }
    return false
}

function isPowerOfTwo(n) {
    if (n < 1) return false
    if (n === 1) return true

    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2
        } else {
            return false
        }
    }

    return true
}

function isPowerOfTwo(n) {
    if (n <1 ) return false

    if (n === 1) return true 

    while (n > 1) {
        if (n % 2 !== 0) return false

        n = n / 2
    }

    return true
}

function isPowerOfTwo(n) {
    if (n === 1 || n === 2) return true

    let num = 2
    while (num < n) {
        num = num * 2
        if (num === n) {
            return true
        }
    }

    return false
}

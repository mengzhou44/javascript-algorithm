function plusOne(digits) {
    let result = []

    let digit = digits.pop()
    while (digit === 9) {
        result.unshift(0)
        digit = digits.pop()
    }
    if (digit !== undefined) {
        digit = digit + 1
    } else {
        digit = 1
    }

    result.unshift(digit)

    while (digits.length > 0) {
        let item = digits.pop()
        result.unshift(item)
    }

    return result
}

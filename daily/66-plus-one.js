function plusOne(digits) {
    let result = []
    let addOne = true
    for (let i = digits.length - 1; i >= 0; i--) {
        if (addOne) {
            if (digits[i] < 9) {
                result.unshift(digits[i] + 1)
                addOne = false
            } else {
                addOne = true
                result.unshift(0)
            }
        } else {
            result.unshift(digits[i])
        }
    }

    if (addOne) {
        result.unshift(1)
    }

    return result
}

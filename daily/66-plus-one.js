function plusOne(digits) {
    let addOne = true
    for (let i = digits.length - 1; i >= 0; i--) {
        if (addOne) {
            if (digits[i] < 9) {
                digits[i]++
                addOne = false
            } else {
                digits[i] = 0
            }
        } else {
            break
        }
    }
    if (addOne === true) {
        digits.unshift(1)
    }

    return digits
}

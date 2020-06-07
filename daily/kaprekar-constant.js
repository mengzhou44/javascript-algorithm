function num_kaprekar_iterations(n) {
    let digits = getDigits(n)

    let assending = createNumber(digits.sort((a, b) => a - b))
    let descending = createNumber(digits.sort((a, b) => b - a))

    while (descending < 1000) {
        descending = descending * 10
    }
    n = descending - assending

    if (n === 6174) return 1

    return 1 + num_kaprekar_iterations(n)
}

function createNumber(digits) {
    let result = 0
    let current = 0
    while (current < digits.length) {
        result += digits[current] * Math.pow(10, digits.length - 1 - current)
        current++
    }
    return result
}

function getDigits(n) {
    let digits = []
    while (n > 0) {
        let digit = n % 10
        digits.push(digit)
        n = Math.floor(n / 10)
    }
    return digits
}

console.log(num_kaprekar_iterations(129))

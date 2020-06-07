function isPalindrome(x) {
    if (x >= 0 && x < 10) return true

    if (x < 0) return false

    let digits = createDigits(x)

    for (let i = 0; i < Math.floor(digits.length / 2); i++) {
        if (digits[i] !== digits[digits.length - 1 - i]) {
            return false
        }
    }
    return true
}

function createDigits(x) {
    let digits = []
    while (x > 0) {
        let temp = x % 10
        digits.push(temp)
        x = Math.floor(x / 10)
    }

    return digits
}

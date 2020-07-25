function addStrings(num1, num2) {
    if (num1 === '0') return num2
    if (num2 === '0') return num1

    let result = []
    let i = num1.length - 1
    let j = num2.length - 1

    let carry = 0

    while (i >= 0 || j >= 0) {
        let sum = carry

        if (i >= 0) {
            sum += getInteger(num1[i])
        }

        if (j >= 0) {
            sum += getInteger(num2[j])
        }

        let value = sum % 10
        result.unshift(value)
        carry = sum >= 10 ? 1 : 0

        i--
        j--
    }

    if (carry > 0) result.unshift(carry)

    return result.join('')
}

function getInteger(str) {
    return str.charCodeAt(0) - '0'.charCodeAt(0)
}

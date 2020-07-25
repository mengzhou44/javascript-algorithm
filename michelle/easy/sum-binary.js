function sumBinary(bin1, bin2) {
    result = []
    let carry = 0
    let array1 = bin1.split('')
    let array2 = bin2.split('')
    while (array1.length > 0 || array2.length > 0) {
        let sum = carry
        if (array1.length > 0) {
            sum += parse(array1.pop())
        }
        if (array2.length > 0) {
            sum += parse(array2.pop())
        }

        result.unshift(sum % 2)
        carry = Math.floor(sum / 2)
    }

    if (carry !== 0) {
        result.unshift(carry)
    }
    return result.join('')
}

function parse(char) {
    if (char === '1') return 1
    return 0
}

console.log(sumBinary('11101', '1011'))

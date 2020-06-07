function addDigits(num) {
    let array = num.toString().split('')

    while (array.length > 1) {
        let sum = array.reduce((total, item) => total + parseInt(item), 0)

        array = sum.toString().split('')
    }

    return parseInt(array[0])
}

function addDigits(num) {
    let digits = getDigits(num)

    while (true) {
        let sum = sumarize(digits)
        if (sum > 9) {
            digits = getDigits(sum)
        } else {
            return sum
        }
    }
}

function getDigits(num) {
    let result = []
    while (num > 0) {
        result.push(num % 10)
        num = Math.floor(num / 10)
    }

    return result
}

function sumarize(digits) {
    return digits.reduce((sum, item) => sum + item, 0)
}

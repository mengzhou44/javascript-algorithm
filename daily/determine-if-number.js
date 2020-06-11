function isNumber(str) {
    let array = []
    for (let c of str) {
        if (!isDigit(c) && c !== '-' && c !== '.' && c !== 'e') {
            return false
        } else {
            array.push(c)
        }
    }
    console.log(array)
    if (array[0] === 'e') return false

    let temp = array.find((item) => item === 'e')
    if (temp!== undefined && temp.length > 1) return false

    temp = array.find((item) => item === '.')

    if (temp !== undefined && temp.length > 1) return false

    temp = array.find((item) => item === '-')
    if (temp !== undefined) {
        if (temp.length > 1) return false
        if (temp.length === 1) {
            if (array[0] !== '-') {
                return false
            }
        }
    }

    temp = str.split('e')
    if (temp.length > 1) {
        if (temp[1].includes('.')) {
            return false
        }
    }
    return true
}

function isDigit(c) {
    return '01234567890'.includes(c)
}

console.log(isNumber('123'))
console.log(isNumber('12.3'))
console.log(isNumber('-123'))
console.log(isNumber('-.3'))
console.log(isNumber('1.5e5'))
console.log(isNumber('12a'))
console.log(isNumber('1 2'))
console.log(isNumber('1e1.2'))

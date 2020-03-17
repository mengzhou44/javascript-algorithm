let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

let numerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
]

var intToRoman = function(num) {
    let index = 0
    let result = ''
    while (index < values.length) {
        let temp = Math.floor(num / values[index])
        num = num - temp * values[index]
        result += createSymbols(temp, numerals[index])
        index++
    }
    return result
}

function createSymbols(num, s) {
    return new Array(num).fill(s).join('')
}

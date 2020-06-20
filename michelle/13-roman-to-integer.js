function romanToInt(str) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let result = 0
    let array = str.split('')
    while (array.length > 0) {
        if (array.length > 1 && map[array[0]] < map[array[1]]) {
            result += map[array[1]] - map[array[0]]
            array.shift()
        } else {
            result += map[array[0]]
        }
        array.shift()
    }

    return result
}

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(str) {
    let array = [
        {
            symbol: 'M',
            value: 1000,
        },
        {
            symbol: 'CM',
            value: 900,
        },
        {
            symbol: 'D',
            value: 500,
        },
        {
            symbol: 'CD',
            value: 400,
        },
        {
            symbol: 'C',
            value: 100,
        },
        {
            symbol: 'XC',
            value: 90,
        },
        {
            symbol: 'L',
            value: 50,
        },
        {
            symbol: 'XL',
            value: 40,
        },
        {
            symbol: 'X',
            value: 10,
        },
        {
            symbol: 'IX',
            value: 9,
        },
        {
            symbol: 'V',
            value: 5,
        },
        {
            symbol: 'IV',
            value: 4,
        },
        {
            symbol: 'I',
            value: 1,
        },
    ]

    let result = 0
    for (let item of array) {
        while (str.startsWith(item.symbol)) {
            str = removeSymbol(str, item.symbol)
            result += item.value
        }
    }

    return result
}

function removeSymbol(str, symbol) {
    if (symbol.length === 1) return str.substring(1)
    return str.substring(2)
}

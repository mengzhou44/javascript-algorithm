let map = new Map()
map.set('2', 'abc')
map.set('3', 'def')
map.set('4', 'ghi')
map.set('5', 'jkl')
map.set('6', 'mno')
map.set('7', 'pqrs')
map.set('8', 'tuv')
map.set('9', 'wxyz')

function letterCombinations(digits) {
    if (digits === '') return []

    if (digits.length === 1) {
        return map.get(digits[0]).split('')
    }

    let first = map.get(digits[0]).split('')

    let temp = letterCombinations(digits.slice(1))
    let result = []
    while (first.length > 0) {
        let cloned = [...temp]
        let c = first.shift()
        for (let item of cloned) {
            result.push(c + item)
        }
    }

    return result
}

let map = new Map()
map.set('2', 'abc')
map.set('3', 'def')
map.set('4', 'ghi')
map.set('5', 'jkl')
map.set('6', 'mno')
map.set('7', 'pqrs')
map.set('8', 'tuv')
map.set('9', 'wxyz')

function letterCombinations(digits) {
    if (digits.length === 0) return []
    if (digits.length === 1) {
        return map.get(digits[0]).split('')
    }
    let firstDigit = digits[0]
    let left = letterCombinations(firstDigit)
    let right = letterCombinations(digits.slice(1))

    let result = []
    for (let i of left) {
        for (let j of right) {
            result.push(i + j)
        }
    }
    return result
}

function letterCombinations(digits) {
    if (digits === '') return []

    if (digits.length === 1) {
        return map.get(digits[0]).split('')
    }

    let result = []
    for (let i = 0; i < digits.length; i++) {
        let letters = map.get(digits[i]).split('')
        if (result.length === 0) {
            result = letters
        } else {
            let array = []
            for (let letter of letters) {
                result.forEach((item) => array.push(item + letter))
            }
            result = array
        }
    }

    return result
}
